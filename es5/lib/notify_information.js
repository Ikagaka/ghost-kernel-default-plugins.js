'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifyInformationController = exports.NotifyInformationRouting = undefined;

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

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ghostKernel = require('ghost-kernel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotifyInformationRouting = exports.NotifyInformationRouting = function () {
  function NotifyInformationRouting() {
    (0, _classCallCheck3.default)(this, NotifyInformationRouting);
  }

  (0, _createClass3.default)(NotifyInformationRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('NotifyInformationController', function (routes) {
        routes.event('GhostKernel', 'protocol_version_fixed', 'initialize');
      });
    }
  }]);
  return NotifyInformationRouting;
}();

var NotifyInformationController = exports.NotifyInformationController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(NotifyInformationController, _GhostKernelControlle);

  function NotifyInformationController(kernel) {
    (0, _classCallCheck3.default)(this, NotifyInformationController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NotifyInformationController).call(this, kernel));
  }

  (0, _createClass3.default)(NotifyInformationController, [{
    key: 'initialize',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ownerghostname();

              case 2:
                _context.next = 4;
                return this.otherghostname();

              case 4:
                _context.next = 6;
                return this.basewareversion();

              case 6:
                _context.next = 8;
                return this.capability();

              case 8:
                _context.next = 10;
                return this.OnNotifyOSInfo();

              case 10:
                _context.next = 12;
                return this.OnNotifyFontInfo();

              case 12:
                _context.next = 14;
                return this.OnNotifySelfInfo();

              case 14:
                _context.next = 16;
                return this.OnNotifyBalloonInfo();

              case 16:
                _context.next = 18;
                return this.OnNotifyShellInfo();

              case 18:
                _context.next = 20;
                return this.OnNotifyUserInfo();

              case 20:
                _context.next = 22;
                return this.OnNotifyDressupInfo();

              case 22:
                _context.next = 24;
                return this.OnNotifyBrowserInfo();

              case 24:
                _context.next = 26;
                return this.ghostpathlist();

              case 26:
                _context.next = 28;
                return this.balloonpathlist();

              case 28:
                _context.next = 30;
                return this.installedghostname();

              case 30:
                _context.next = 32;
                return this.installedballoonname();

              case 32:
                _context.next = 34;
                return this.installedshellname();

              case 34:
                _context.next = 36;
                return this.rateofusegraph();

              case 36:
                _context.next = 38;
                return this.uniqueid();

              case 38:
                this.kernel.emit('notify_informations_done');

              case 39:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initialize() {
        return _ref.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: 'ownerghostname',
    value: function ownerghostname() {
      return this.kernel.components.Shiorif.notify3('ownerghostname', [this.kernel.ghostDescript.name]);
    }
  }, {
    key: 'otherghostname',
    value: function otherghostname() {
      var _this2 = this;

      // TODO ここでこの実装してよいのか
      var namedKernelManager = this.kernel.components.NamedKernelManager;
      var names = namedKernelManager.namedIds().map(function (namedId) {
        return namedKernelManager.kernel(namedId);
      }).filter(function (kernel) {
        return kernel.ghostDescript;
      }).map(function (kernel) {
        return [kernel.ghostDescript.name, kernel.Named.scopes[0].surface().surfaceId, kernel.Named.scopes[1] ? _this2.kernel.components.Named.scopes[1].surface().surfaceId : ''].join('\u0001');
      });
      return this.kernel.components.Shiorif.notify3('otherghostname', [names]);
    }
  }, {
    key: 'basewareversion',
    value: function basewareversion() {
      // TODO バージョンとか
      return this.kernel.components.Shiorif.notify3('basewareversion', ['0.1.0', 'Ikagaka']);
    }
  }, {
    key: 'capability',
    value: function capability() {
      return this.kernel.components.Shiorif.notify3('capability', ['response.requestcharset']);
    }
  }, {
    key: 'OnNotifyOSInfo',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function OnNotifyOSInfo() {
        return _ref2.apply(this, arguments);
      }

      return OnNotifyOSInfo;
    }()
  }, {
    key: 'OnNotifyFontInfo',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function OnNotifyFontInfo() {
        return _ref3.apply(this, arguments);
      }

      return OnNotifyFontInfo;
    }()
  }, {
    key: 'OnNotifySelfInfo',
    value: function OnNotifySelfInfo() {
      // TODO abs path
      return this.kernel.components.Shiorif.notify3('OnNotifySelfInfo', [this.kernel.ghostDescript.name, this.kernel.ghostDescript['sakura.name'], this.kernel.ghostDescript['kero.name'], this.kernel.shellDescript['name'], null, this.kernel.balloonDescript['name'], null]);
    }
  }, {
    key: 'OnNotifyBalloonInfo',
    value: function OnNotifyBalloonInfo() {
      // TODO
      return this.kernel.components.Shiorif.notify3('OnNotifyBalloonInfo', [this.kernel.balloonDescript['name'], null, null]);
    }
  }, {
    key: 'OnNotifyShellInfo',
    value: function OnNotifyShellInfo() {
      // TODO
      return this.kernel.components.Shiorif.notify3('OnNotifyShellInfo', [this.kernel.shellDescript['name'], null, null]);
    }
  }, {
    key: 'OnNotifyUserInfo',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function OnNotifyUserInfo() {
        return _ref4.apply(this, arguments);
      }

      return OnNotifyUserInfo;
    }()
  }, {
    key: 'OnNotifyDressupInfo',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function OnNotifyDressupInfo() {
        return _ref5.apply(this, arguments);
      }

      return OnNotifyDressupInfo;
    }()
  }, {
    key: 'OnNotifyBrowserInfo',
    value: function OnNotifyBrowserInfo() {
      // TODO
    }
  }, {
    key: 'ghostpathlist',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function ghostpathlist() {
        return _ref6.apply(this, arguments);
      }

      return ghostpathlist;
    }()
  }, {
    key: 'balloonpathlist',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function balloonpathlist() {
        return _ref7.apply(this, arguments);
      }

      return balloonpathlist;
    }()
  }, {
    key: 'installedghostname',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
        var names;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.kernel.components.NanikaStorage.ghost_names();

              case 2:
                names = _context8.sent;
                return _context8.abrupt('return', this.kernel.components.Shiorif.notify3('installedghostname', names));

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function installedghostname() {
        return _ref8.apply(this, arguments);
      }

      return installedghostname;
    }()
  }, {
    key: 'installedballoonname',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
        var names;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.kernel.components.NanikaStorage.balloon_names();

              case 2:
                names = _context9.sent;
                return _context9.abrupt('return', this.kernel.components.Shiorif.notify3('installedballoonname', names));

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function installedballoonname() {
        return _ref9.apply(this, arguments);
      }

      return installedballoonname;
    }()
  }, {
    key: 'installedshellname',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
        var names;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.kernel.components.NanikaStorage.shell_names(this.kernel.namedId);

              case 2:
                names = _context10.sent;
                return _context10.abrupt('return', this.kernel.components.Shiorif.notify3('installedshellname', names));

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function installedshellname() {
        return _ref10.apply(this, arguments);
      }

      return installedshellname;
    }()
  }, {
    key: 'rateofusegraph',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function rateofusegraph() {
        return _ref11.apply(this, arguments);
      }

      return rateofusegraph;
    }()
  }, {
    key: 'uniqueid',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function uniqueid() {
        return _ref12.apply(this, arguments);
      }

      return uniqueid;
    }()
  }]);
  return NotifyInformationController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.NotifyInformationController = NotifyInformationController;
_ghostKernel.GhostKernelRoutings.push(NotifyInformationRouting);
//# sourceMappingURL=notify_information.js.map
