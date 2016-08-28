import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';
import {SakuraScriptExecuter} from 'sakurascript-executer';
import {SakuraScriptToken} from 'sakurascript';

export class SakuraScriptState {
  constructor() {
    this.timerRaiseTimerId = {};
  }

  clearTimerRaise(event) {
    const id = this.timerRaiseTimerId[event];
    if (id) clearInterval(id);
    delete this.timerRaiseTimerId[event];
  }

  clearAllTimerRaise() {
    Object.keys(this.timerRaiseTimerId).forEach((event) => this.clearTimerRaise(event));
  }
}

export class SakuraScriptRouting {
  setup(routes) {
    routes.controller('SakuraScriptController', (routes) => {
      routes.event('GhostKernel', 'start');
      routes.event('GhostKernel', 'halt');
      routes.from('SakuraScriptExecuter', (routes) => {
        routes.event('begin_execute');
        routes.event('execute');
        routes.event('end_execute');
      });
    });
  }
}

export class SakuraScriptController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
  }

  start() {
    const sakurascript_executer = new SakuraScriptExecuter({talk_wait: 50}); // TODO 設定を読む
    this.kernel.registerComponent('SakuraScriptExecuter', sakurascript_executer);
    this.kernel.registerComponent('SakuraScriptState', new SakuraScriptState());
    // make shortcut
    this.kernel.executeSakuraScript = async (transaction) => {
      let value = transaction.response.to('3.0').headers.header.Value;
      const requestHeaders = transaction.request.to('3.0').headers;
      // OnTranslate
      const translateTransaction = await this.kernel.components.Shiorif.get3('OnTranslate', [
        value,
        '', // TODO: Reference1
        requestHeaders.header.ID,
        requestHeaders.references().join('\x01'),
      ]);
      const translateResponse = translateTransaction.response.to('3.0');
      if (translateResponse.status_line.code === 200) value = translateResponse.headers.header.Value;
      if (value != null) await this.kernel.components.SakuraScriptExecuter.execute(value.toString());
    };
  }

  halt() {
    this.kernel.components.SakuraScriptExecuter.abort_execute();
    this.kernel.components.SakuraScriptState.clearAllTimerRaise();
    this.kernel.unregisterComponent('SakuraScriptExecuter');
    this.kernel.unregisterComponent('SakuraScriptState');
  }

  begin_execute() {
    // TODO: これShellStateにメソッドもうけてやることでは？
    const shellState = this.kernel.components.ShellState;
    shellState.clearBalloonTimeout();
    shellState.talking = true;
    shellState.synchronized = false;
    shellState.timeCritical = false;
    shellState.hasChoice = false;
    shellState.balloonTimeout = 10000; // TODO 設定を読む
    shellState.choiceTimeout = 20000; // TODO 設定を読む
    this.kernel.components.Named.scopes.forEach((scope) => {
      scope.blimp(0); // 初期化
      scope.blimp(-1).clear(); // 非表示
    });
  }

  end_execute(aborted) {
    const named = this.kernel.components.Named;
    const shellState = this.kernel.components.ShellState;
    shellState.talking = false;
    if (aborted) {
      named.scopes.forEach((scope) => scope.blimp(-1)); // 再生中断なら即座にバルーンをクリア&非表示
    } else {
      shellState.setBalloonTimeout(this._break.bind(this)); // 再生中断でなくタイムアウトありならタイムアウトイベントを設定
    }
  }

  _break() {
    const named = this.kernel.components.Named;
    const shellState = this.kernel.components.ShellState;
    named.scopes.forEach((scope) => scope.blimp(-1));
    if (shellState.hasChoice) {
      named.emit('choicetimeout'); // TODO: named?
    } else {
      named.emit('balloontimeout'); // TODO: named?
    }
    shellState.breakTimeoutId = null;
  }

  execute(token) {
    this._handle_view(token)
      || this._handle_wait(token)
      || this._handle_state(token)
      || this._handle_balloon(token)
      || this._handle_other(token);
  }

  _handle_view(token) {
    const named = this.kernel.components.Named;
    const scope = named.scope();
    const surface = scope.surface();
    const blimp = scope.blimp();
    if (token instanceof SakuraScriptToken.Scope) {
      named.scope(token.scope);
    } else if (token instanceof SakuraScriptToken.Surface) {
      scope.surface(token.surface);
    } else if (token instanceof SakuraScriptToken.SurfaceAlias) {
      scope.surface(token.surface_alias);
    } else if (token instanceof SakuraScriptToken.Balloon) {
      scope.blimp(token.balloon);
    } else if (token instanceof SakuraScriptToken.PlayAnimation) {
      surface.play(token.animation);
    } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
      surface.play(token.animation);
    } else if (token instanceof SakuraScriptToken.Animation) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Bind) {
      if (token.dress_up == null) {
        // TODO toggle
      } else if (token.dress_up){
        scope.bind(token.category, token.parts);
      } else {
        scope.unbind(token.category, token.parts);
      }
    } else {
      return false;
    }
    return true;
  }

  _handle_wait(token) {
    if (token instanceof SakuraScriptToken.SimpleWait) {
      return true;
    } else if (token instanceof SakuraScriptToken.PreciseWait) {
      return true;
    } else if (token instanceof SakuraScriptToken.WaitFromBeginning) {
      return true;
    } else if (token instanceof SakuraScriptToken.ResetBeginning) {
      return true;
    } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
      return true;
    } else if (token instanceof SakuraScriptToken.ToggleQuick) {
      return true;
    } else {
      return false;
    }
  }

  _handle_state(token) {
    const shellState = this.kernel.components.ShellState;
    if (token instanceof SakuraScriptToken.ToggleSynchronize) {
      if (shellState.synchronized) {
        shellState.synchronized = false;
      } else {
        shellState.synchronized = token.scopes;
      }
    } else if (token instanceof SakuraScriptToken.TimeCritical) {
      shellState.timeCritical = !shellState.timeCritical;
    } else if (token instanceof SakuraScriptToken.NoChoiceTimeout) {
      shellState.choiceTimeout = 0;
    } else {
      return false;
    }
    return true;
  }

  _handle_balloon(token) {
    const named = this.kernel.components.Named;
    const scope = named.scope();
    const surface = scope.surface();
    const blimp = scope.blimp();
    const shellState = this.kernel.components.ShellState;
    if (token instanceof SakuraScriptToken.WaitClick) {
      named.scope(0).blimp().showWait();
    } else if (token instanceof SakuraScriptToken.EventChoice) {
      shellState.hasChoice = true;
      blimp.choice(token.text, token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.ReferencesChoice) {
      shellState.hasChoice = true;
      blimp.choice(token.text, ...token.references);
    } else if (token instanceof SakuraScriptToken.ScriptChoice) {
      shellState.hasChoice = true;
      blimp.choice(token.text, `script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.OldReferenceChoice) {
      shellState.hasChoice = true;
      blimp.choice(token.text, token.reference);
      blimp.br();
    } else if (token instanceof SakuraScriptToken.BeginEventChoice) {
      shellState.hasChoice = true;
      blimp.choiceBegin(token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.BeginReferencesChoice) {
      shellState.hasChoice = true;
      blimp.choiceBegin(...token.references);
    } else if (token instanceof SakuraScriptToken.BeginScriptChoice) {
      shellState.hasChoice = true;
      blimp.choiceBegin(`script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.EndChoice) {
      blimp.choiceEnd();
    } else if (token instanceof SakuraScriptToken.BeginEventAnchor) {
      blimp.anchorBegin(token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.BeginReferencesAnchor) {
      blimp.anchorBegin(...token.references);
    } else if (token instanceof SakuraScriptToken.BeginScriptAnchor) {
      blimp.anchorBegin(`script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.EndAnchor) {
      blimp.anchorEnd();
    } else if (token instanceof SakuraScriptToken.LineBreak) {
      blimp.br();
    } else if (token instanceof SakuraScriptToken.HalfLineBreak) {
      blimp.br(0.5);
    } else if (token instanceof SakuraScriptToken.PercentLineBreak) {
      blimp.br(token.percent / 100);
    } else if (token instanceof SakuraScriptToken.ToggleNoAutoLineBreak) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Location) {
      blimp.location(token.x, token.y);
    } else if (token instanceof SakuraScriptToken.Image) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.InlineImage) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Font) {
      blimp.font(token.name, ...token.args);
    } else if (token instanceof SakuraScriptToken.Marker) {
      blimp.marker();
    } else if (token instanceof SakuraScriptToken.Char) {
      if (shellState.synchronized) {
        let scopes;
        if (shellState.synchronized.length) {
          scopes = shellState.synchronized.map((scopeId) => named.scopes[scopeId]).filter((scope) => scope);
        } else {
          scopes = named.scopes;
        }
        scopes.forEach((scope) => scope.blimp().talk(token.char));
      } else {
        blimp.talk(token.char);
      }
    } else {
      return false;
    }
    return true;
  }

  _handle_other(token) {
    const named = this.kernel.components.Named;
    const scope = named.scope();
    const surface = scope.surface();
    const blimp = scope.blimp();
    const shiorif = this.kernel.components.Shiorif;
    const sakuraScriptState = this.kernel.components.SakuraScriptState;
    const shellState = this.kernel.components.ShellState;
    if (token instanceof SakuraScriptToken.BeFar) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.BeNear) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Clear) {
      blimp.clear();
      shellState.hasChoice = false;
    } else if (token instanceof SakuraScriptToken.End) {
      surface.yenE();
    } else if (token instanceof SakuraScriptToken.OldChoiceEnd) {
      surface.yenE();
    } else if (token instanceof SakuraScriptToken.OpenCommunicateBox) {
      named.openCommunicateBox();
    } else if (token instanceof SakuraScriptToken.OpenTeachBox) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Halt) {
      surface.yenE();
      this.kernel.halt('script');
    } else if (token instanceof SakuraScriptToken.LockRepaint) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.UnlockRepaint) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Move) {
      // TODO
    } else if (token instanceof SakuraScriptToken.MoveAsync) {
      // TODO
    } else if (token instanceof SakuraScriptToken.MoveAsyncCancel) {
      // TODO
    } else if (token instanceof SakuraScriptToken.Raise) {
      shiorif.get3(token.event, token.references).then(this.kernel.executeSakuraScript);
    } else if (token instanceof SakuraScriptToken.TimerRaise) {
      if (token.period && token.period >= 1) {
        let repeat_count = token.repeat_count || 0;
        sakuraScriptState.timerRaiseTimerId[token.event] = setInterval(() => {
          shiorif.get3(token.event, token.references).then(this.kernel.executeSakuraScript);
          if (repeat_count > 0) repeat_count--;
          if (!repeat_count) sakuraScriptState.clearTimerRaise(token.event);
        }, token.period);
      } else {
        sakuraScriptState.clearTimerRaise(token.event);
      }
    } else if (token instanceof SakuraScriptToken.Notify) {
      shiorif.notify3(token.event, token.references); // TODO: catch error
    } else if (token instanceof SakuraScriptToken.Set) {
      const handler = SakuraScriptController._set_handler[token.id];
      if (handler) handler.bind(this)(token);
    } else if (token instanceof SakuraScriptToken.Open) {
      const handler = SakuraScriptController._open_handler[token.id];
      if (handler) handler.bind(this)(token);
    } else if (token instanceof SakuraScriptToken.Close) {
      const handler = SakuraScriptController._close_handler[token.id];
      if (handler) handler.bind(this)(token);
    } else if (token instanceof SakuraScriptToken.NotImplemented) {
      return true;
    } else {
      return false;
    }
    return true;
  }
}

SakuraScriptController._set_handler = {
  balloontimeout(token) {
    this.kernel.components.ShellState.balloonTimeout = Number(token.args[0]);
  },
  choicetimeout(token) {
    this.kernel.components.ShellState.choiceTimeout = Number(token.args[0]);
  },
};

SakuraScriptController._open_handler = {
  communicatebox(token) {
    this.kernel.components.Named.openCommunicateBox(token.args[0]);
  },
  inputbox(token) {
    // cuttleboneが表示時間などに未対応
    this.kernel.components.Named.openInputBox(token.args[0], token.args[2]);
  },
};

SakuraScriptController._close_handler = {
};

GhostKernelControllers.SakuraScriptController = SakuraScriptController;
GhostKernelRoutings.push(SakuraScriptRouting);
