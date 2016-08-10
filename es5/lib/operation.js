'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationController = exports.OperationRouting = undefined;

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

var OperationRouting = exports.OperationRouting = function () {
  function OperationRouting() {
    (0, _classCallCheck3.default)(this, OperationRouting);
  }

  (0, _createClass3.default)(OperationRouting, [{
    key: 'setup',
    value: function setup(routes) {
      routes.controller('OperationController', function (routes) {
        routes.from('GhostKernel', function (routes) {
          routes.event('initialize_informations_done', 'boot');
          routes.event('change_shell');
          routes.event('change_balloon');
          routes.event('close');
          routes.event('halt');
        });
      });
    }
  }]);
  return OperationRouting;
}();

// TODO 分け方がざっくりしている


var OperationController = exports.OperationController = function (_GhostKernelControlle) {
  (0, _inherits3.default)(OperationController, _GhostKernelControlle);

  function OperationController(kernel) {
    (0, _classCallCheck3.default)(this, OperationController);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OperationController).call(this, kernel));
  }

  (0, _createClass3.default)(OperationController, [{
    key: 'boot',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var shiorif, profile, boot_count, vanish_count, transaction, _transaction;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                shiorif = this.kernel.components.Shiorif;
                _context.next = 3;
                return this.kernel.profile();

              case 3:
                profile = _context.sent;
                boot_count = profile.boot_count || 0;

                if (!(boot_count === 0)) {
                  _context.next = 21;
                  break;
                }

                vanish_count = profile.vanish_count || 0;
                _context.next = 9;
                return shiorif.get3('OnFirstBoot', [vanish_count]);

              case 9:
                transaction = _context.sent;

                this.kernel.emit('boot_done');

                if (!(transaction.response.to('3.0').status_line.code === 200)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 14;
                return this.kernel.executeSakuraScript(transaction);

              case 14:
                _context.next = 18;
                break;

              case 16:
                _context.next = 18;
                return shiorif.get3('OnBoot', this._bootHeaders(profile.shellname)).then(this.kernel.executeSakuraScript);

              case 18:
                this.kernel.emit('boot_complete');
                _context.next = 28;
                break;

              case 21:
                _context.next = 23;
                return shiorif.get3('OnBoot', this._bootHeaders(profile.shellname));

              case 23:
                _transaction = _context.sent;

                this.kernel.emit('boot_done');
                _context.next = 27;
                return this.kernel.executeSakuraScript(_transaction);

              case 27:
                this.kernel.emit('boot_complete');

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function boot() {
        return _ref.apply(this, arguments);
      }

      return boot;
    }()
  }, {
    key: '_bootHeaders',
    value: function _bootHeaders(shellname) {
      return {
        Reference0: shellname,
        Reference6: '', // TODO
        Reference7: '' };
    }
  }, {
    key: 'close',
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

      function close() {
        return _ref2.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: 'halt',
    value: function halt() {}
  }, {
    key: 'change_shell',
    value: function change_shell(shellname) {}
  }, {
    key: 'change_balloon',
    value: function change_balloon(balloonname) {}
  }]);
  return OperationController;
}(_ghostKernel.GhostKernelController);

_ghostKernel.GhostKernelControllers.OperationController = OperationController;
_ghostKernel.GhostKernelRoutings.push(OperationRouting);
//# sourceMappingURL=operation.js.map
