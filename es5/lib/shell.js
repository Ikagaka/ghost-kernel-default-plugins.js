'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShellController = exports.ShellRouting = exports.ShellState = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ghostKernel = require('ghost-kernel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShellState = exports.ShellState = function () {
  function ShellState(named) {
    (0, _classCallCheck3.default)(this, ShellState);

    this.named = named;
    this.talking = false;
    this.synchronized = false;
    this.timeCritical = false;
    this.hasChoice = false;
    this.balloonTimeout = 10000; // TODO
    this.choiceTimeout = 20000; // TODO
  }

  (0, _createClass3.default)(ShellState, [{
    key: 'timeout',
    value: function timeout() {
      var timeout = this.hasChoice ? this.choiceTimeout : this.balloonTimeout;
      return timeout >= 1 ? timeout : null;
    }
  }, {
    key: 'setBalloonTimeout',
    value: function setBalloonTimeout(callback) {
      var timeout = this.timeout();
      if (timeout) {
        // タイムアウトありならタイムアウトイベントを設定
        this.breakTimeoutId = setTimeout(callback, timeout);
      }
    }
  }, {
    key: 'clearBalloonTimeout',
    value: function clearBalloonTimeout() {
      if (this.breakTimeoutId) {
        clearTimeout(this.breakTimeoutId);
        this.breakTimeoutId = null;
      }
    }
  }]);
  return ShellState;
}();

var ShellRouting = exports.ShellRouting = function () {
  function ShellRouting() {
    (0, _classCallCheck3.default)(this, ShellRouting);
  }

  (0, _createClass3.default)(ShellRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('ShellController', function (routes) {
        routes.event('GhostKernel', 'start');
        routes.from('Named', function (routes) {
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
  }]);
  return ShellRouting;
}();

var ShellController = exports.ShellController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(ShellController, _GhostKernelControlle);

  function ShellController(kernel) {
    (0, _classCallCheck3.default)(this, ShellController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ShellController).call(this, kernel));
  }

  (0, _createClass3.default)(ShellController, [{
    key: 'start',
    value: function start() {
      var shellState = new ShellState(this.kernel.components.Named);
      this.kernel.registerComponent('ShellState', shellState);
    }
  }, {
    key: 'choiceselect',
    value: function choiceselect(event) {
      var _this2 = this;

      var shiorif = this.kernel.components.Shiorif;
      if (/^On/.test(event.id)) {
        // On
        shiorif.get3(event.id, event.args).then(this.kernel.executeSakuraScript);
      } else if (/^script:/.test(event.id)) {
        // script:
        this.kernel.components.SakuraScriptExecuter.execute(event.id.replace(/^script:/, ''));
      } else if (event.args.length) {
        // Ex
        shiorif.get3('OnChoiceSelectEx', [event.label, event.id].concat((0, _toConsumableArray3.default)(event.args))).then(this.kernel.executeSakuraScript);
      } else {
        // normal
        shiorif.get3('OnChoiceSelectEx', [event.text, event.id]).then(function (transaction) {
          var value = transaction.response.to('3.0').headers.header.Value;
          if (value != null && value.length) {
            _this2.kernel.executeSakuraScript(transaction);
          } else {
            shiorif.get3('OnChoiceSelect', [event.id]).then(_this2.kernel.executeSakuraScript);
          }
        });
      }
    }
  }, {
    key: 'anchorselect',
    value: function anchorselect(event) {
      var _this3 = this;

      var shiorif = this.kernel.components.Shiorif;
      if (/^On/.test(event.id)) {
        // On
        shiorif.get3(event.id, event.args).then(this.kernel.executeSakuraScript);
      } else if (/^script:/.test(event.id)) {
        // script:
        this.kernel.components.SakuraScriptExecuter.execute(event.id.replace(/^script:/, ''));
      } else if (event.args.length) {
        // Ex
        shiorif.get3('OnAnchorSelectEx', [event.label, event.id].concat((0, _toConsumableArray3.default)(event.args))).then(this.kernel.executeSakuraScript);
      } else {
        // normal
        shiorif.get3('OnAnchorSelectEx', [event.text, event.id]).then(function (transaction) {
          var value = transaction.response.to('3.0').headers.header.Value;
          if (value != null && value.length) {
            _this3.kernel.executeSakuraScript(transaction);
          } else {
            shiorif.get3('OnAnchorSelect', [event.id]).then(_this3.kernel.executeSakuraScript);
          }
        });
      }
    }
  }, {
    key: 'userinput',
    value: function userinput(event) {
      var shiorif = this.kernel.components.Shiorif;
      if (event.content != null) {
        shiorif.get3('OnUserInput', [event.id, event.content]).then(this.kernel.executeSakuraScript);
      } else {
        var reason = 'close'; // TODO reason
        shiorif.get3('OnUserInputCancel', [event.id, reason]).then(this.kernel.executeSakuraScript);
      }
    }
  }, {
    key: 'communicateinput',
    value: function communicateinput(event) {
      var shiorif = this.kernel.components.Shiorif;
      if (event.content != null) {
        // TODO: 拡張情報?
        shiorif.get3('OnCommunicate', ['user', event.content]).then(this.kernel.executeSakuraScript);
      } else {
        var reason = 'cancel'; // TODO reason
        shiorif.get3('OnCommunicateInputCancel', ['', reason]).then(this.kernel.executeSakuraScript);
      }
    }
  }, {
    key: 'mousedown',
    value: function mousedown(event) {
      this._mouseEvent(event, 'OnMouseDown');
    }
  }, {
    key: 'mousemove',
    value: function mousemove(event) {
      this._mouseEvent(event, 'OnMouseMove');
    }
  }, {
    key: 'mouseup',
    value: function mouseup(event) {
      this._mouseEvent(event, 'OnMouseUp');
    }
  }, {
    key: 'mouseclick',
    value: function mouseclick(event) {
      this._mouseEvent(event, 'OnMouseClick');
    }
  }, {
    key: 'mousedblclick',
    value: function mousedblclick(event) {
      this._mouseEvent(event, 'OnMouseDoubleClick');
    }
  }, {
    key: '_mouseEvent',
    value: function _mouseEvent(event, id) {
      if (this._timeCritical) return;
      var shiorif = this.kernel.components.Shiorif;
      shiorif.get3(id, this._mouseEventHeaders(event)).then(this.kernel.executeSakuraScript);
    }
  }, {
    key: 'balloonclick',
    value: function balloonclick(event) {
      // TODO refactor
      var named = this.kernel.components.Named;
      var shellState = this.kernel.components.ShellState;
      if (shellState.hasChoice) return; // 選択肢があればクリアされない
      if (!shellState.talking) {
        // 喋っていない状態でシングルクリックされたら
        named.scopes.forEach(function (scope) {
          return scope.blimp(-1).clear();
        }); // バルーンをクリア&非表示
        shellState.clearBalloonTimeout();
      }
    }
  }, {
    key: 'balloondblclick',
    value: function balloondblclick(event) {
      var shellState = this.kernel.components.ShellState;
      if (shellState.hasChoice) return; // 選択肢があればクリアされない
      if (shellState.talking) {
        // 喋っている状態でダブルクリックされたら
        var sakuraScriptExecuter = this.kernel.components.SakuraScriptExecuter;
        sakuraScriptExecuter.abort_execute();
      } else {
        this._balloonClick('event');
      }
    }
  }, {
    key: 'filedrop',
    value: function filedrop(event) {
      var _this4 = this;

      // TODO: インストール以外
      var namedKernelManager = this.kernel.components.NamedKernelManager;
      // TODO: jQuery / DOM操作系は何処でするのが良いのか
      event.event.stopPropagation();
      event.event.preventDefault();
      event.event.originalEvent.dataTransfer.dropEffect = 'copy';
      ev.event.originalEvent.dataTransfer.files.forEach(function (file) {
        return namedKernelManager.installNamed(file, _this4.kernel);
      });
    }
  }, {
    key: '_mouseEventHeaders',
    value: function _mouseEventHeaders(event) {
      return [event.offsetX, event.offsetY, event.wheel, event.scope, event.region, event.button, event.type];
    }
  }, {
    key: '_timeCritical',
    get: function get() {
      var shellState = this.kernel.components.ShellState;
      return shellState.timeCritical;
    }
  }]);
  return ShellController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.ShellController = ShellController;
_ghostKernel.GhostKernelRoutings.push(ShellRouting);
//# sourceMappingURL=shell.js.map
