import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class ShellState {
  constructor(named) {
    this.named = named;
    this.talking = false;
    this.synchronized = false;
    this.timeCritical = false;
    this.hasChoice = false;
    this.balloonTimeout = 10000; // TODO
    this.choiceTimeout = 20000; // TODO
  }

  timeout() {
    const timeout = this.hasChoice ? this.choiceTimeout : this.balloonTimeout;
    return timeout >= 1 ? timeout : null;
  }

  setBalloonTimeout(callback) {
    const timeout = this.timeout();
    if (timeout) { // タイムアウトありならタイムアウトイベントを設定
      this.breakTimeoutId = setTimeout(callback, timeout);
    }
  }

  clearBalloonTimeout() {
    if (this.breakTimeoutId) {
      clearTimeout(this.breakTimeoutId);
      this.breakTimeoutId = null;
    }
  }
}

export class ShellRouting {
  setup(routes) {
    routes.controller('ShellController', (routes) => {
      routes.event('GhostKernel', 'start');
      routes.from('Named', (routes) => {
        routes.event('choiceselect');
        routes.event('anchorselect');
        routes.event('userinput');
        routes.event('communicateinput');
        routes.event('mousedown');
        routes.event('mousemove');
        routes.event('mouseup');
        routes.event('mouseclick');
        routes.event('mousedblclick');
        routes.event('balloonclick');
        routes.event('balloondblclick');
        routes.event('filedrop');
      });
    });
  }
}

export class ShellController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
  }

  start() {
    const shellState = new ShellState(this.kernel.components.Named);
    this.kernel.registerComponent('ShellState', shellState);
  }

  choiceselect(event) {
    const shiorif = this.kernel.components.Shiorif;
    if (/^On/.test(event.id)) { // On
      shiorif.get3(event.id, event.args).then(this.kernel.executeSakuraScript);
    } else if (/^script:/.test(event.id)) { // script:
      this.kernel.components.SakuraScriptExecuter.execute(event.id.replace(/^script:/, ''));
    } else if (event.args.length) { // Ex
      shiorif.get3('OnChoiceSelectEx', [event.label, event.id, ...event.args]).then(this.kernel.executeSakuraScript);
    } else { // normal
      shiorif.get3('OnChoiceSelectEx', [event.text, event.id]).then((transaction) => {
        const value = transaction.response.to('3.0').headers.header.Value;
        if (value != null && value.length) {
          this.kernel.executeSakuraScript(transaction);
        } else {
          shiorif.get3('OnChoiceSelect', [event.id]).then(this.kernel.executeSakuraScript);
        }
      });
    }
  }

  anchorselect(event) {
    const shiorif = this.kernel.components.Shiorif;
    if (/^On/.test(event.id)) { // On
      shiorif.get3(event.id, event.args).then(this.kernel.executeSakuraScript);
    } else if (/^script:/.test(event.id)) { // script:
      this.kernel.components.SakuraScriptExecuter.execute(event.id.replace(/^script:/, ''));
    } else if (event.args.length) { // Ex
      shiorif.get3('OnAnchorSelectEx', [event.label, event.id, ...event.args]).then(this.kernel.executeSakuraScript);
    } else { // normal
      shiorif.get3('OnAnchorSelectEx', [event.text, event.id]).then((transaction) => {
        const value = transaction.response.to('3.0').headers.header.Value;
        if (value != null && value.length) {
          this.kernel.executeSakuraScript(transaction);
        } else {
          shiorif.get3('OnAnchorSelect', [event.id]).then(this.kernel.executeSakuraScript);
        }
      });
    }
  }

  userinput(event) {
    const shiorif = this.kernel.components.Shiorif;
    if (event.content != null) {
      shiorif.get3('OnUserInput', [event.id, event.content]).then(this.kernel.executeSakuraScript);
    } else {
      const reason = 'close'; // TODO reason
      shiorif.get3('OnUserInputCancel', [event.id, reason]).then(this.kernel.executeSakuraScript);
    }
  }

  communicateinput(event) {
    const shiorif = this.kernel.components.Shiorif;
    if (event.content != null) {
      // TODO: 拡張情報?
      shiorif.get3('OnCommunicate', ['user', event.content]).then(this.kernel.executeSakuraScript);
    } else {
      const reason = 'cancel'; // TODO reason
      shiorif.get3('OnCommunicateInputCancel', ['', reason]).then(this.kernel.executeSakuraScript);
    }
  }

  mousedown(event) {
    this._mouseEvent(event, 'OnMouseDown');
  }

  mousemove(event) {
    this._mouseEvent(event, 'OnMouseMove');
  }

  mouseup(event) {
    this._mouseEvent(event, 'OnMouseUp');
  }

  mouseclick(event) {
    this._mouseEvent(event, 'OnMouseClick');
  }

  mousedblclick(event) {
    this._mouseEvent(event, 'OnMouseDoubleClick');
  }

  _mouseEvent(event, id) {
    if (this._timeCritical) return;
    const shiorif = this.kernel.components.Shiorif;
    shiorif.get3(id, this._mouseEventHeaders(event)).then(this.kernel.executeSakuraScript);
  }

  balloonclick(event) { // TODO refactor
    const named = this.kernel.components.Named;
    const shellState = this.kernel.components.ShellState;
    this.kernel.components.SakuraScriptExecuter.balloon_clicked();
    if (shellState.hasChoice) return; // 選択肢があればクリアされない
    if (!shellState.talking) { // 喋っていない状態でシングルクリックされたら
      named.scopes.forEach((scope) => scope.blimp(-1).clear()); // バルーンをクリア&非表示
      shellState.clearBalloonTimeout();
    }
  }

  balloondblclick(event) {
    const shellState = this.kernel.components.ShellState;
    if (shellState.hasChoice) return; // 選択肢があればクリアされない
    if (shellState.talking) { // 喋っている状態でダブルクリックされたら
      const sakuraScriptExecuter = this.kernel.components.SakuraScriptExecuter;
      sakuraScriptExecuter.abort_execute();
    } else {
      this._balloonClick('event');
    }
  }

  filedrop(event) {
    // TODO: インストール以外
    const namedKernelManager = this.kernel.components.NamedKernelManager;
    // TODO: jQuery / DOM操作系は何処でするのが良いのか
    event.event.stopPropagation();
    event.event.preventDefault();
    event.event.originalEvent.dataTransfer.dropEffect = 'copy';
    const files = event.event.originalEvent.dataTransfer.files;
    for (let i = 0; i < files.length; ++i) {
      const file = files[i];
      namedKernelManager.installNamed(file, this.kernel);
    }
  }

  get _timeCritical() {
    const shellState = this.kernel.components.ShellState;
    return shellState.timeCritical;
  }

  _mouseEventHeaders(event) {
    return [
      event.offsetX,
      event.offsetY,
      event.wheel,
      event.scope,
      event.region,
      event.button,
      event.type,
    ];
  }
}

GhostKernelControllers.ShellController = ShellController;
GhostKernelRoutings.push(ShellRouting);
