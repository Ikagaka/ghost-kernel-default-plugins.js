'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionController = exports.Version = exports.VersionRouting = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var VersionRouting = exports.VersionRouting = function () {
  function VersionRouting() {
    (0, _classCallCheck3.default)(this, VersionRouting);
  }

  (0, _createClass3.default)(VersionRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('VersionController', function (routes) {
        routes.event('GhostKernel', 'start');
      });
    }
  }]);
  return VersionRouting;
}();

var Version = exports.Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  (0, _createClass3.default)(Version, [{
    key: 'name',

    /** @type {string} */
    get: function get() {
      return this._name;
    }
    /** @type {string} */
    ,
    set: function set(value) {
      this._name = value;
    }
    /** @type {string} */

  }, {
    key: 'version',
    get: function get() {
      return this._version;
    }
    /** @type {string} */
    ,
    set: function set(value) {
      this._version = value;
    }
    /** @type {string} */

  }, {
    key: 'craftman',
    get: function get() {
      return this._craftman;
    }
    /** @type {string} */
    ,
    set: function set(value) {
      this._craftman = value;
    }
    /** @type {string} */

  }, {
    key: 'craftmanw',
    get: function get() {
      return this._craftmanw;
    }
    /** @type {string} */
    ,
    set: function set(value) {
      this._craftmanw = value;
    }
  }]);
  return Version;
}();

var VersionController = exports.VersionController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(VersionController, _GhostKernelControlle);

  function VersionController(kernel) {
    (0, _classCallCheck3.default)(this, VersionController);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(VersionController).call(this, kernel));

    kernel.registerComponent('Version', new Version());
    return _this;
  }

  (0, _createClass3.default)(VersionController, [{
    key: 'start',
    value: function start() {
      var kernel = this.kernel;
      var Version = kernel.components.Version;
      var shiorif = kernel.components.Shiorif;
      // shiorif.allow_async_request = false; // 将来的に非同期リクエストをサポートする場合
      shiorif.auto_convert_request_version = '2.6';
      shiorif.default_headers = {
        Charset: 'UTF-8',
        Sender: 'ikagaka'
      };
      shiorif.get3('version').then(function (_ref) {
        var response = _ref.response;

        var status_line = response.status_line;
        var code = status_line.code;
        var version = status_line.version;
        // support 2.6 not 1.x
        if (code === 200 && version !== '3.0' && version !== '4.0') {
          var header = response.headers.header;
          Version.version = '2.6';
          Version.name = header.ID;
          Version.craftman = header.Craftman;
          Version.craftmanw = header.Craftman;
          kernel.emit('protocol_version_fixed');
        } else {
          // support 3.0 or 4.0
          if (version !== '4.0') {
            shiorif.auto_convert_request_version = '3.0';
          } else {
            shiorif.auto_convert_request_version = '4.0';
          }
          return _promise2.default.all([shiorif.request3('GET', 'version').then(function (_ref2) {
            var response = _ref2.response;

            Version.version = response.headers.header.Value;
          }), shiorif.request3('GET', 'name').then(function (_ref3) {
            var response = _ref3.response;

            Version.name = response.headers.header.Value;
          }), shiorif.request3('GET', 'craftman').then(function (_ref4) {
            var response = _ref4.response;

            Version.craftman = response.headers.header.Value;
          }), shiorif.request3('GET', 'craftmanw').then(function (_ref5) {
            var response = _ref5.response;

            Version.craftmanw = response.headers.header.Value;
          })]).then(function () {
            return kernel.emit('protocol_version_fixed');
          });
        }
      });
    }
  }]);
  return VersionController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.VersionController = VersionController;
_ghostKernel.GhostKernelRoutings.push(VersionRouting);
//# sourceMappingURL=version.js.map
