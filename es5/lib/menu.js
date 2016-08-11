'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuController = exports.MenuRouting = exports.Menu = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ghostKernel = require('ghost-kernel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = exports.Menu = function () {
  function Menu(kernel) {
    (0, _classCallCheck3.default)(this, Menu);

    this.kernel = kernel;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'contextmenu',
    value: function contextmenu(event) {
      var _this = this;

      var scopeId = event.scopeId;
      return {
        items: {
          changeGhost: { name: 'ゴースト切り替え', items: this.changeGhost() },
          callGhost: { name: '他のゴーストを呼ぶ', items: this.callGhost() },
          changeShell: { name: 'シェル', items: this.changeShell() },
          changeBalloon: { name: 'バルーン', items: this.changeBalloon() },
          inputScript: { name: '開発用 スクリプト入力', callback: function callback() {
              return _this.kernel.components.SakuraScriptExecuter.execute(window.prompt('send'));
            } },
          quit: { name: '終了', callback: function callback() {
              return _this.kernel.close('user');
            } },
          quitAll: { name: '全て終了', callback: function callback() {
              return _this.kernel.components.NamedKernelManager.close('user');
            } }
        }
      };
    }
  }, {
    key: 'changeGhost',
    value: function changeGhost() {
      var _this2 = this;

      var namedKernelManager = this.kernel.components.NamedKernelManager;
      var ghosts = namedKernelManager.components.GhostList.list;
      var menu = {};
      ghosts.forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

        var name = _ref2[0];
        var dirpath = _ref2[1];

        var disabled = namedKernelManager.isKernelExists(dirpath) && !_this2.kernel.namedId === dirpath;
        menu['changeGhost-' + dirpath] = {
          name: name,
          disabled: disabled,
          callback: function callback() {
            return namedKernelManager.changeNamed(dirpath, _this2.kernel.namedId);
          }
        };
      });
      return menu;
    }
  }, {
    key: 'callGhost',
    value: function callGhost() {
      var namedKernelManager = this.kernel.components.NamedKernelManager;
      var ghosts = namedKernelManager.components.GhostList.list;
      var menu = {};
      ghosts.forEach(function (_ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

        var name = _ref4[0];
        var dirpath = _ref4[1];

        var disabled = namedKernelManager.isKernelExists(dirpath);
        menu['callGhost-' + dirpath] = {
          name: name,
          disabled: disabled,
          callback: function callback() {
            return namedKernelManager.bootNamed(dirpath);
          }
        };
      });
      return menu;
    }
  }, {
    key: 'changeShell',
    value: function changeShell() {
      var _this3 = this;

      var namedKernelManager = this.kernel.components.NamedKernelManager;
      var shells = namedKernelManager.components.ShellList.list[this.kernel.namedId];
      var menu = {};
      if (!shells) return menu;
      var currentShellName = this.kernel.components.Named.shell.descript.name;
      shells.forEach(function (_ref5) {
        var _ref6 = (0, _slicedToArray3.default)(_ref5, 2);

        var name = _ref6[0];
        var dirpath = _ref6[1];

        var disabled = currentShellName === name;
        menu['callShell-' + dirpath] = {
          name: name,
          disabled: disabled,
          callback: function callback() {
            return _this3.kernel.changeShell(dirpath);
          }
        };
      });
      return menu;
    }
  }, {
    key: 'changeBalloon',
    value: function changeBalloon() {
      var _this4 = this;

      var namedKernelManager = this.kernel.components.NamedKernelManager;
      var balloons = namedKernelManager.components.BalloonList.list;
      var menu = {};
      var currentBalloonName = this.kernel.components.Named.balloon.descript.name;
      balloons.forEach(function (_ref7) {
        var _ref8 = (0, _slicedToArray3.default)(_ref7, 2);

        var name = _ref8[0];
        var dirpath = _ref8[1];

        var disabled = currentBalloonName === name;
        menu['changeBalloon-' + dirpath] = {
          name: name,
          disabled: disabled,
          callback: function callback() {
            return _this4.kernel.changeBalloon(dirpath);
          }
        };
      });
      return menu;
    }
  }]);
  return Menu;
}();

var MenuRouting = exports.MenuRouting = function () {
  function MenuRouting() {
    (0, _classCallCheck3.default)(this, MenuRouting);
  }

  (0, _createClass3.default)(MenuRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('MenuController', function (routes) {
        routes.event('GhostKernel', 'start');
        // TODO: 仕様上shellの右クリックを捕捉するべきだが現状のcuttlebone実装上マネージャのstartでハンドラを登録する
      });
    }
  }]);
  return MenuRouting;
}();

var MenuController = exports.MenuController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(MenuController, _GhostKernelControlle);

  function MenuController(kernel) {
    (0, _classCallCheck3.default)(this, MenuController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuController).call(this, kernel));
  }

  (0, _createClass3.default)(MenuController, [{
    key: 'start',
    value: function start() {
      var menu = new Menu(this.kernel);
      this.kernel.components.Named.contextmenu(menu.contextmenu.bind(menu));
    }
  }]);
  return MenuController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.MenuController = MenuController;
_ghostKernel.GhostKernelRoutings.push(MenuRouting);
//# sourceMappingURL=menu.js.map
