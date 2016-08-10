'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeEventController = exports.TimerEventState = exports.TimeEventRouting = undefined;

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

var TimeEventRouting = exports.TimeEventRouting = function () {
  function TimeEventRouting() {
    (0, _classCallCheck3.default)(this, TimeEventRouting);
  }

  (0, _createClass3.default)(TimeEventRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('TimeEventController', function (routes) {
        routes.event('GhostKernel', 'boot_done', 'enable_time_events'); // TODO いつが最初なのが正しい?
        routes.from('TimerEventSource', function (routes) {
          routes.event('second_change');
          routes.event('minute_change');
        });
      });
    }
  }]);
  return TimeEventRouting;
}();

var TimerEventState = exports.TimerEventState = function TimerEventState() {
  var initializedTime = arguments.length <= 0 || arguments[0] === undefined ? new Date() : arguments[0];
  (0, _classCallCheck3.default)(this, TimerEventState);

  /** * @type {Boolean} */
  this.enabled = false;
  /** * @type {Date} */
  this.initializedTime = initializedTime;
};

var TimeEventController = exports.TimeEventController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(TimeEventController, _GhostKernelControlle);

  function TimeEventController(kernel) {
    (0, _classCallCheck3.default)(this, TimeEventController);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TimeEventController).call(this, kernel));

    kernel.registerComponent('TimerEventState', new TimerEventState());
    return _this;
  }

  (0, _createClass3.default)(TimeEventController, [{
    key: 'enable_time_events',
    value: function enable_time_events() {
      this.kernel.components.TimerEventState.enabled = true;
    }
  }, {
    key: 'second_change',
    value: function second_change() {
      if (!this.kernel.components.TimerEventState.enabled) return;
      var kernel = this.kernel;
      var Information = kernel.components.Information;
      var shiorif = kernel.components.Shiorif;
      if (this._cantalk()) {
        shiorif.get3('OnSecondChange', this._time_headers()).then(this.kernel.executeSakuraScript);
      } else {
        shiorif.notify3('OnSecondChange', this._time_headers()); // TODO: error handling
      }
    }
  }, {
    key: 'menute_change',
    value: function menute_change() {
      if (!this.kernel.components.TimerEventState.enabled) return;
      var kernel = this.kernel;
      var Information = kernel.components.Information;
      var shiorif = kernel.components.Shiorif;
      if (this._cantalk()) {
        shiorif.get3('OnMinuteChange', this._time_headers()).then(this.kernel.executeSakuraScript);
      } else {
        shiorif.notify3('OnMinuteChange', this._time_headers()); // TODO: error handling
      }
    }
  }, {
    key: '_time_headers',
    value: function _time_headers() {
      var uptime = 0; // TODO: ブラウザでOSのuptimeは取得できない
      var mikire = 0; // TODO: Shell modelを参照する
      var overlapped = 0; // TODO: Shell modelを参照する
      var cantalk = this._cantalk(); // TODO: status modelを参照する
      var left_time = 0; // TODO: SSPでのOSの放置時間の処理方法依存
      return {
        Reference0: uptime,
        Reference1: mikire,
        Reference2: overlapped,
        Reference3: cantalk,
        Reference4: left_time
      };
    }
  }, {
    key: '_cantalk',
    value: function _cantalk() {
      var shellState = this.kernel.components.ShellState;
      return shellState.timeCritical ? 0 : 1;
    }
  }]);
  return TimeEventController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.TimeEventController = TimeEventController;
_ghostKernel.GhostKernelRoutings.push(TimeEventRouting);
//# sourceMappingURL=time_event.js.map
