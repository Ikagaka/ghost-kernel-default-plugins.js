'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteMenu = exports.Information = exports.InformationController = exports.InformationRouting = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var InformationRouting = exports.InformationRouting = function () {
  function InformationRouting() {
    (0, _classCallCheck3.default)(this, InformationRouting);
  }

  (0, _createClass3.default)(InformationRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('InformationController', function (routes) {
        routes.event('GhostKernel', 'notify_informations_done', 'initialize_informations');
        routes.event('GhostKernel', 'halt');
      });
    }
  }]);
  return InformationRouting;
}();

var InformationController = exports.InformationController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(InformationController, _GhostKernelControlle);

  function InformationController(kernel) {
    (0, _classCallCheck3.default)(this, InformationController);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InformationController).call(this, kernel));

    kernel.registerComponent('Information', new Information());
    return _this;
  }

  (0, _createClass3.default)(InformationController, [{
    key: 'initialize_informations',
    value: function initialize_informations() {
      var kernel = this.kernel;
      var Information = kernel.components.Information;
      var shiorif = kernel.components.Shiorif;
      _promise2.default.all([shiorif.request3('GET', 'username').then(function (_ref) {
        var response = _ref.response;
        return Information.username = response.to('3.0').headers.header.Value;
      })].concat(['sakura.recommendsites', 'sakura.portalsites', 'kero.recommendsites'].map(function (id) {
        return shiorif.get3(id).then(function (_ref2) {
          var response = _ref2.response;

          Information[id].length = 0; // clear
          (response.to('3.0').headers.get_separated2('Value') || []).forEach(function (site) {
            return Information[id].push(new (Function.prototype.bind.apply(SiteMenu, [null].concat((0, _toConsumableArray3.default)(site))))());
          });
        });
      }))).then(function () {
        return kernel.emit('initialize_informations_done');
      });
    }
  }, {
    key: 'halt',
    value: function halt() {
      this.kernel.unregisterComponent('Information');
    }
  }]);
  return InformationController;
}(_ghostKernel.GhostKernelController);

var Information = exports.Information = function () {
  function Information() {
    (0, _classCallCheck3.default)(this, Information);

    this['_sakura.recommendsites'] = [];
    this['_sakura.portalsites'] = [];
    this['_kero.recommendsites'] = [];
  }

  /**
   * ユーザー名
   * @type {string}
   */


  (0, _createClass3.default)(Information, [{
    key: 'username',
    get: function get() {
      return this._username;
    }
    /**
     * ユーザー名
     * @type {string}
     */
    ,
    set: function set(value) {
      this._username = value;
    }

    /**
     * sakura.recommendsites
     * @type {SiteMenu[]}
     */

  }, {
    key: 'sakura.recommendsites',
    get: function get() {
      return this['_sakura.recommendsites'];
    }

    /**
     * sakura.portalsites
     * @type {SiteMenu[]}
     */

  }, {
    key: 'sakura.portalsites',
    get: function get() {
      return this['_sakura.portalsites'];
    }

    /**
     * kero.recommendsites
     * @type {SiteMenu[]}
     */

  }, {
    key: 'kero.recommendsites',
    get: function get() {
      return this['_kero.recommendsites'];
    }
  }]);
  return Information;
}();

var SiteMenu = exports.SiteMenu = function () {
  /**
   * @param {string} name 項目名
   * @param {string} url URL
   * @param {string} banner バナー画像パス
   * @param {string} script 選択時トークスクリプト
   */

  function SiteMenu(name, url, banner, script) {
    (0, _classCallCheck3.default)(this, SiteMenu);

    this._name = name;
    this._url = url;
    this._banner = banner;
    this._script = script;
  }

  /**
   * 項目名
   * @type {string}
   */


  (0, _createClass3.default)(SiteMenu, [{
    key: 'name',
    get: function get() {
      return this._name;
    }

    /**
     * URL
     * @type {string}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }

    /**
     * バナー画像パス
     * @type {string}
     */

  }, {
    key: 'banner',
    get: function get() {
      return this._banner;
    }

    /**
     * 選択時トークスクリプト
     * @type {string}
     */

  }, {
    key: 'script',
    get: function get() {
      return this._script;
    }
  }]);
  return SiteMenu;
}();

_ghostKernel.GhostKernelControllers.InformationController = InformationController;
_ghostKernel.GhostKernelRoutings.push(InformationRouting);
//# sourceMappingURL=information.js.map
