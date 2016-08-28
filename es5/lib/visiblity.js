'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityController = exports.Visibility = exports.VisibilityRouting = undefined;

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

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VisibilityRouting = exports.VisibilityRouting = function () {
  function VisibilityRouting() {
    (0, _classCallCheck3.default)(this, VisibilityRouting);
  }

  (0, _createClass3.default)(VisibilityRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('VisibilityController', function (routes) {
        routes.event('GhostKernel', 'start');
        routes.event('GhostKernel', 'halt');
        routes.event('Visibility', 'visibilityChange');
      });
    }
  }]);
  return VisibilityRouting;
}();

/** 可視性モデル */


var Visibility = exports.Visibility = function (_EventEmitter) {
  (0, _inherits3.default)(Visibility, _EventEmitter);

  /**
   * @param {boolean} initialVisibility 初期可視状態 autoが真の時は無視される
   * @param {boolean} auto 自動で可視性を判定する Page Visibility APIがある場合はデフォルトで真
   */

  function Visibility() {
    var initialVisibility = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
    var auto = arguments.length <= 1 || arguments[1] === undefined ? typeof document !== 'undefined' : arguments[1];
    console.assert(typeof initialVisibility === "boolean", 'Invalid JSDoc @param: typeof initialVisibility === "boolean"');
    console.assert(typeof auto === "boolean", 'Invalid JSDoc @param: typeof auto === "boolean"');
    (0, _classCallCheck3.default)(this, Visibility);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Visibility).call(this));

    if (initialVisibility !== undefined) {
      _this._visibility = initialVisibility;
    }
    if (!auto) return (0, _possibleConstructorReturn3.default)(_this);
    // hidden プロパティおよび可視性の変更イベントの名前を設定
    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 や Firefox 18 以降でサポート
      _this.hiddenProperty = "hidden";
      _this.visibilityChangeProperty = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
      _this.hiddenProperty = "mozHidden";
      _this.visibilityChangeProperty = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      _this.hiddenProperty = "msHidden";
      _this.visibilityChangeProperty = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      _this.hiddenProperty = "webkitHidden";
      _this.visibilityChangeProperty = "webkitvisibilitychange";
    }
    if (typeof document[_this.hiddenProperty] !== 'undefined') {
      document.addEventListener(_this.visibilityChangeProperty, _this._nativeVisibilityChange.bind(_this), false);
      _this._visibility = !document[_this.hiddenProperty];
    }
    return _this;
  }

  (0, _createClass3.default)(Visibility, [{
    key: '_nativeVisibilityChange',
    value: function _nativeVisibilityChange() {
      this.visibility = !document[this.hiddenProperty];
    }
  }, {
    key: 'visibility',
    set: function set(visibility) {
      var needEmit = this._visibility !== !!visibility;
      this._visibility = !!visibility;
      if (needEmit) this.emit('visibilityChange', this._visibility);
    },
    get: function get() {
      return this._visibility;
    }
  }]);
  return Visibility;
}(_events.EventEmitter);

var VisibilityController = exports.VisibilityController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(VisibilityController, _GhostKernelControlle);

  function VisibilityController(kernel) {
    (0, _classCallCheck3.default)(this, VisibilityController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(VisibilityController).call(this, kernel));
  }

  (0, _createClass3.default)(VisibilityController, [{
    key: 'start',
    value: function start() {
      kernel.registerComponent('Visibility', new Visibility());
    }
  }, {
    key: 'halt',
    value: function halt() {
      kernel.unregisterComponent('Visibility');
    }
  }, {
    key: 'visibilityChange',
    value: function visibilityChange(visibility) {
      if (visibility) {
        this.kernel.components.Shiorif.get3('OnWindowStateRestore').then(this.kernel.executeSakuraScript);
      } else {
        this.kernel.components.Shiorif.get3('OnWindowStateMinimize').then(this.kernel.executeSakuraScript);
      }
    }
  }]);
  return VisibilityController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.VisibilityController = VisibilityController;
_ghostKernel.GhostKernelRoutings.push(VisibilityRouting);
//# sourceMappingURL=visiblity.js.map
