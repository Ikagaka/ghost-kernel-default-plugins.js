'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SakuraScriptController = exports.SakuraScriptRouting = exports.SakuraScriptState = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ghostKernel = require('ghost-kernel');

var _sakurascriptExecuter = require('sakurascript-executer');

var _sakurascript = require('sakurascript');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SakuraScriptState = exports.SakuraScriptState = function () {
  function SakuraScriptState() {
    (0, _classCallCheck3.default)(this, SakuraScriptState);

    this.timerRaiseTimerId = {};
  }

  (0, _createClass3.default)(SakuraScriptState, [{
    key: 'clearTimerRaise',
    value: function clearTimerRaise(event) {
      var id = this.timerRaiseTimerId[event];
      if (id) clearInterval(id);
      delete this.timerRaiseTimerId[event];
    }
  }, {
    key: 'clearAllTimerRaise',
    value: function clearAllTimerRaise() {
      var _this = this;

      (0, _keys2.default)(this.timerRaiseTimerId).forEach(function (event) {
        return _this.clearTimerRaise(event);
      });
    }
  }]);
  return SakuraScriptState;
}();

var SakuraScriptRouting = exports.SakuraScriptRouting = function () {
  function SakuraScriptRouting() {
    (0, _classCallCheck3.default)(this, SakuraScriptRouting);
  }

  (0, _createClass3.default)(SakuraScriptRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('SakuraScriptController', function (routes) {
        routes.event('GhostKernel', 'start');
        routes.event('GhostKernel', 'halt');
        routes.from('SakuraScriptExecuter', function (routes) {
          routes.event('begin_execute');
          routes.event('execute');
          routes.event('end_execute');
        });
      });
    }
  }]);
  return SakuraScriptRouting;
}();

var SakuraScriptController = exports.SakuraScriptController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(SakuraScriptController, _GhostKernelControlle);

  function SakuraScriptController(kernel) {
    (0, _classCallCheck3.default)(this, SakuraScriptController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SakuraScriptController).call(this, kernel));
  }

  (0, _createClass3.default)(SakuraScriptController, [{
    key: 'start',
    value: function start() {
      var _this3 = this;

      var sakurascript_executer = new _sakurascriptExecuter.SakuraScriptExecuter({ talk_wait: 50 }); // TODO 設定を読む
      this.kernel.registerComponent('SakuraScriptExecuter', sakurascript_executer);
      this.kernel.registerComponent('SakuraScriptState', new SakuraScriptState());
      // make shortcut
      this.kernel.executeSakuraScript = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(transaction) {
          var value, requestHeaders, translateTransaction, translateResponse;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  value = transaction.response.to('3.0').headers.header.Value;
                  requestHeaders = transaction.request.to('3.0').headers;
                  // OnTranslate

                  _context.next = 4;
                  return _this3.kernel.components.Shiorif.get3('OnTranslate', [value, '', // TODO: Reference1
                  requestHeaders.header.ID, requestHeaders.references().join('\x01')]);

                case 4:
                  translateTransaction = _context.sent;
                  translateResponse = translateTransaction.response.to('3.0');

                  if (translateResponse.status_line.code === 200) value = translateResponse.headers.header.Value;

                  if (!(value != null)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return _this3.kernel.components.SakuraScriptExecuter.execute(value.toString());

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this3);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  }, {
    key: 'halt',
    value: function halt() {
      this.kernel.components.SakuraScriptExecuter.abort_execute();
      this.kernel.components.SakuraScriptState.clearAllTimerRaise();
      this.kernel.unregisterComponent('SakuraScriptExecuter');
      this.kernel.unregisterComponent('SakuraScriptState');
    }
  }, {
    key: 'begin_execute',
    value: function begin_execute() {
      // TODO: これShellStateにメソッドもうけてやることでは？
      var shellState = this.kernel.components.ShellState;
      shellState.clearBalloonTimeout();
      shellState.talking = true;
      shellState.synchronized = false;
      shellState.timeCritical = false;
      shellState.hasChoice = false;
      shellState.balloonTimeout = 10000; // TODO 設定を読む
      shellState.choiceTimeout = 20000; // TODO 設定を読む
      this.kernel.components.Named.scopes.forEach(function (scope) {
        scope.blimp(0); // 初期化
        scope.blimp(-1).clear(); // 非表示
      });
    }
  }, {
    key: 'end_execute',
    value: function end_execute(aborted) {
      var named = this.kernel.components.Named;
      var shellState = this.kernel.components.ShellState;
      shellState.talking = false;
      if (aborted) {
        named.scopes.forEach(function (scope) {
          return scope.blimp(-1);
        }); // 再生中断なら即座にバルーンをクリア&非表示
      } else {
        shellState.setBalloonTimeout(this._break.bind(this)); // 再生中断でなくタイムアウトありならタイムアウトイベントを設定
      }
    }
  }, {
    key: '_break',
    value: function _break() {
      var named = this.kernel.components.Named;
      var shellState = this.kernel.components.ShellState;
      named.scopes.forEach(function (scope) {
        return scope.blimp(-1);
      });
      if (shellState.hasChoice) {
        named.emit('choicetimeout'); // TODO: named?
      } else {
        named.emit('balloontimeout'); // TODO: named?
      }
      shellState.breakTimeoutId = null;
    }
  }, {
    key: 'execute',
    value: function execute(token) {
      this._handle_view(token) || this._handle_wait(token) || this._handle_state(token) || this._handle_balloon(token) || this._handle_other(token);
    }
  }, {
    key: '_handle_view',
    value: function _handle_view(token) {
      var named = this.kernel.components.Named;
      var scope = named.scope();
      var surface = scope.surface();
      var blimp = scope.blimp();
      if (token instanceof _sakurascript.SakuraScriptToken.Scope) {
        named.scope(token.scope);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Surface) {
        scope.surface(token.surface);
      } else if (token instanceof _sakurascript.SakuraScriptToken.SurfaceAlias) {
        scope.surface(token.surface_alias);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Balloon) {
        scope.blimp(token.balloon);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimation) {
        surface.play(token.animation);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
        surface.play(token.animation);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Animation) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Bind) {
        if (token.dress_up == null) {
          // TODO toggle
        } else if (token.dress_up) {
          scope.bind(token.category, token.parts);
        } else {
          scope.unbind(token.category, token.parts);
        }
      } else {
        return false;
      }
      return true;
    }
  }, {
    key: '_handle_wait',
    value: function _handle_wait(token) {
      if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: '_handle_state',
    value: function _handle_state(token) {
      var shellState = this.kernel.components.ShellState;
      if (token instanceof _sakurascript.SakuraScriptToken.ToggleSynchronize) {
        if (shellState.synchronized) {
          shellState.synchronized = false;
        } else {
          shellState.synchronized = token.scopes;
        }
      } else if (token instanceof _sakurascript.SakuraScriptToken.TimeCritical) {
        shellState.timeCritical = !shellState.timeCritical;
      } else if (token instanceof _sakurascript.SakuraScriptToken.NoChoiceTimeout) {
        shellState.choiceTimeout = 0;
      } else {
        return false;
      }
      return true;
    }
  }, {
    key: '_handle_balloon',
    value: function _handle_balloon(token) {
      var named = this.kernel.components.Named;
      var scope = named.scope();
      var surface = scope.surface();
      var blimp = scope.blimp();
      var shellState = this.kernel.components.ShellState;
      if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
        named.scope(0).blimp().showWait();
      } else if (token instanceof _sakurascript.SakuraScriptToken.EventChoice) {
        shellState.hasChoice = true;
        blimp.choice.apply(blimp, [token.text, token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.ReferencesChoice) {
        shellState.hasChoice = true;
        blimp.choice.apply(blimp, [token.text].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.ScriptChoice) {
        shellState.hasChoice = true;
        blimp.choice(token.text, 'script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.OldReferenceChoice) {
        shellState.hasChoice = true;
        blimp.choice(token.text, token.reference);
        blimp.br();
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventChoice) {
        shellState.hasChoice = true;
        blimp.choiceBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesChoice) {
        shellState.hasChoice = true;
        blimp.choiceBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptChoice) {
        shellState.hasChoice = true;
        blimp.choiceBegin('script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.EndChoice) {
        blimp.choiceEnd();
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventAnchor) {
        blimp.anchorBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesAnchor) {
        blimp.anchorBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptAnchor) {
        blimp.anchorBegin('script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.EndAnchor) {
        blimp.anchorEnd();
      } else if (token instanceof _sakurascript.SakuraScriptToken.LineBreak) {
        blimp.br();
      } else if (token instanceof _sakurascript.SakuraScriptToken.HalfLineBreak) {
        blimp.br(0.5);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PercentLineBreak) {
        blimp.br(token.percent / 100);
      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleNoAutoLineBreak) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Location) {
        blimp.location(token.x, token.y);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Image) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.InlineImage) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Font) {
        blimp.font.apply(blimp, [token.name].concat((0, _toConsumableArray3.default)(token.args)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.Marker) {
        blimp.marker();
      } else if (token instanceof _sakurascript.SakuraScriptToken.Char) {
        if (shellState.synchronized) {
          var scopes = void 0;
          if (shellState.synchronized.length) {
            scopes = shellState.synchronized.map(function (scopeId) {
              return named.scopes[scopeId];
            }).filter(function (scope) {
              return scope;
            });
          } else {
            scopes = named.scopes;
          }
          scopes.forEach(function (scope) {
            return scope.blimp().talk(token.char);
          });
        } else {
          blimp.talk(token.char);
        }
      } else {
        return false;
      }
      return true;
    }
  }, {
    key: '_handle_other',
    value: function _handle_other(token) {
      var _this4 = this;

      var named = this.kernel.components.Named;
      var scope = named.scope();
      var surface = scope.surface();
      var blimp = scope.blimp();
      var shiorif = this.kernel.components.Shiorif;
      var sakuraScriptState = this.kernel.components.SakuraScriptState;
      var shellState = this.kernel.components.ShellState;
      if (token instanceof _sakurascript.SakuraScriptToken.BeFar) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeNear) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Clear) {
        blimp.clear();
        shellState.hasChoice = false;
      } else if (token instanceof _sakurascript.SakuraScriptToken.End) {
        surface.yenE();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OldChoiceEnd) {
        surface.yenE();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenCommunicateBox) {
        named.openCommunicateBox();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenTeachBox) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Halt) {
        surface.yenE();
        this.kernel.halt('script');
      } else if (token instanceof _sakurascript.SakuraScriptToken.LockRepaint) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.UnlockRepaint) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Move) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsync) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsyncCancel) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.Raise) {
        shiorif.get3(token.event, token.references).then(this.kernel.executeSakuraScript);
      } else if (token instanceof _sakurascript.SakuraScriptToken.TimerRaise) {
        if (token.period && token.period >= 1) {
          (function () {
            var repeat_count = token.repeat_count || 0;
            sakuraScriptState.timerRaiseTimerId[token.event] = setInterval(function () {
              shiorif.get3(token.event, token.references).then(_this4.kernel.executeSakuraScript);
              if (repeat_count > 0) repeat_count--;
              if (!repeat_count) sakuraScriptState.clearTimerRaise(token.event);
            }, token.period);
          })();
        } else {
          sakuraScriptState.clearTimerRaise(token.event);
        }
      } else if (token instanceof _sakurascript.SakuraScriptToken.Notify) {
        shiorif.notify3(token.event, token.references); // TODO: catch error
      } else if (token instanceof _sakurascript.SakuraScriptToken.Set) {
        var handler = SakuraScriptController._set_handler[token.id];
        if (handler) handler.bind(this)(token);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Open) {
        var _handler = SakuraScriptController._open_handler[token.id];
        if (_handler) _handler.bind(this)(token);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Close) {
        var _handler2 = SakuraScriptController._close_handler[token.id];
        if (_handler2) _handler2.bind(this)(token);
      } else if (token instanceof _sakurascript.SakuraScriptToken.NotImplemented) {
        return true;
      } else {
        return false;
      }
      return true;
    }
  }]);
  return SakuraScriptController;
}(_ghostKernel.GhostKernelController);

SakuraScriptController._set_handler = {
  balloontimeout: function balloontimeout(token) {
    this.kernel.components.ShellState.balloonTimeout = Number(token.args[0]);
  },
  choicetimeout: function choicetimeout(token) {
    this.kernel.components.ShellState.choiceTimeout = Number(token.args[0]);
  }
};

SakuraScriptController._open_handler = {
  communicatebox: function communicatebox(token) {
    this.kernel.components.Named.openCommunicateBox(token.args[0]);
  },
  inputbox: function inputbox(token) {
    // cuttleboneが表示時間などに未対応
    this.kernel.components.Named.openInputBox(token.args[0], token.args[2]);
  }
};

SakuraScriptController._close_handler = {};

_ghostKernel.GhostKernelControllers.SakuraScriptController = SakuraScriptController;
_ghostKernel.GhostKernelRoutings.push(SakuraScriptRouting);
//# sourceMappingURL=sakura_script.js.map
