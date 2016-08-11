var ghostKernelDefaultPlugins =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(113);
	
	__webpack_require__(119);
	
	__webpack_require__(120);
	
	__webpack_require__(121);
	
	__webpack_require__(131);
	
	__webpack_require__(132);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VersionController = exports.Version = exports.VersionRouting = undefined;
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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
	      shiorif.auto_adjust_to_response_charset = true;
	      shiorif.default_headers = {
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(49);
	__webpack_require__(53);
	module.exports = __webpack_require__(13).Promise;

/***/ },
/* 4 */
/***/ function(module, exports) {



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(6)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(9)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , defined   = __webpack_require__(8);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(10)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(26)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(27)
	  , Iterators      = __webpack_require__(28)
	  , $iterCreate    = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(45)
	  , getPrototypeOf = __webpack_require__(47)
	  , ITERATOR       = __webpack_require__(46)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , hide      = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(17)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(21) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(18)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , toPrimitive    = __webpack_require__(24)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
	  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(30)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(45)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(18)
	  , dPs         = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(23)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(17)
	  , anObject = __webpack_require__(18)
	  , getKeys  = __webpack_require__(32);
	
	module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(27)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(8);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(7)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(41)('keys')
	  , uid    = __webpack_require__(42);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(17).f
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(46)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(41)('wks')
	  , uid        = __webpack_require__(42)
	  , Symbol     = __webpack_require__(12).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(27)
	  , toObject    = __webpack_require__(48)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	var global        = __webpack_require__(12)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(28)
	  , TO_STRING_TAG = __webpack_require__(46)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(51)
	  , step             = __webpack_require__(52)
	  , Iterators        = __webpack_require__(28)
	  , toIObject        = __webpack_require__(34);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(9)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(10)
	  , global             = __webpack_require__(12)
	  , ctx                = __webpack_require__(14)
	  , classof            = __webpack_require__(54)
	  , $export            = __webpack_require__(11)
	  , isObject           = __webpack_require__(19)
	  , anObject           = __webpack_require__(18)
	  , aFunction          = __webpack_require__(15)
	  , anInstance         = __webpack_require__(55)
	  , forOf              = __webpack_require__(56)
	  , setProto           = __webpack_require__(60).set
	  , speciesConstructor = __webpack_require__(63)
	  , task               = __webpack_require__(64).set
	  , microtask          = __webpack_require__(66)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(46)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(45)($Promise, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(13)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(46)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(57)
	  , isArrayIter = __webpack_require__(58)
	  , anObject    = __webpack_require__(18)
	  , toLength    = __webpack_require__(38)
	  , getIterFn   = __webpack_require__(59)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(18);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(28)
	  , ITERATOR   = __webpack_require__(46)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(46)('iterator')
	  , Iterators = __webpack_require__(28);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(19)
	  , anObject = __webpack_require__(18);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, __webpack_require__(61).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(62)
	  , createDesc     = __webpack_require__(25)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(24)
	  , has            = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(20)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(18)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(46)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(65)
	  , html               = __webpack_require__(44)
	  , cel                = __webpack_require__(23)
	  , global             = __webpack_require__(12)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(36)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , macrotask = __webpack_require__(64).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(36)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(12)
	  , core        = __webpack_require__(13)
	  , dP          = __webpack_require__(17)
	  , DESCRIPTORS = __webpack_require__(21)
	  , SPECIES     = __webpack_require__(46)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(46)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(13).Object.getPrototypeOf;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(48)
	  , $getPrototypeOf = __webpack_require__(47);
	
	__webpack_require__(73)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(22);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(75);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(76);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(79);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(49);
	module.exports = __webpack_require__(78).f('iterator');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(46);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(4);
	__webpack_require__(90);
	__webpack_require__(91);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(12)
	  , has            = __webpack_require__(27)
	  , DESCRIPTORS    = __webpack_require__(21)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(26)
	  , META           = __webpack_require__(82).KEY
	  , $fails         = __webpack_require__(22)
	  , shared         = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(45)
	  , uid            = __webpack_require__(42)
	  , wks            = __webpack_require__(46)
	  , wksExt         = __webpack_require__(78)
	  , wksDefine      = __webpack_require__(83)
	  , keyOf          = __webpack_require__(84)
	  , enumKeys       = __webpack_require__(85)
	  , isArray        = __webpack_require__(87)
	  , anObject       = __webpack_require__(18)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(24)
	  , createDesc     = __webpack_require__(25)
	  , _create        = __webpack_require__(30)
	  , gOPNExt        = __webpack_require__(88)
	  , $GOPD          = __webpack_require__(61)
	  , $DP            = __webpack_require__(17)
	  , $keys          = __webpack_require__(32)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(89).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(62).f  = $propertyIsEnumerable;
	  __webpack_require__(86).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(10)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(42)('meta')
	  , isObject = __webpack_require__(19)
	  , has      = __webpack_require__(27)
	  , setDesc  = __webpack_require__(17).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(22)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(12)
	  , core           = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(10)
	  , wksExt         = __webpack_require__(78)
	  , defineProperty = __webpack_require__(17).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(32)
	  , gOPS    = __webpack_require__(86)
	  , pIE     = __webpack_require__(62);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , gOPN      = __webpack_require__(89).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(33)
	  , hiddenKeys = __webpack_require__(43).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)('asyncIterator');

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)('observable');

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(93);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(96);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(75);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(60).set});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	var $Object = __webpack_require__(13).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(30)});

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(101);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	var $Object = __webpack_require__(13).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GhostKernelController = exports.GhostKernel = exports.GhostKernelControllers = exports.GhostKernelRoutings = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _routableComponent = __webpack_require__(105);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * ルーティング設定クラスのリスト
	 * @type {RoutableComponentRouting[]}
	 */
	var GhostKernelRoutings = exports.GhostKernelRoutings = [];
	
	/**
	 * コントローラクラスの連想配列
	 * @type {Object<GhostKernelController>}
	 */
	var GhostKernelControllers = exports.GhostKernelControllers = {};
	
	/** Ukagaka baseware ghost instance kernel */
	
	var GhostKernel = exports.GhostKernel = function (_RoutableComponent) {
	  _inherits(GhostKernel, _RoutableComponent);
	
	  /**
	   * constructor
	   * @param {Object<EventEmitter>} components components
	   * @param {Shiorif} components.Shiorif SHIORI interface
	   * @param {Shell} components.View Shell interface
	   * @param {SakuraScriptRunner} components.SakuraScriptRunner SakuraScript Runner
	   * @param {NamedKernelManager} components.NamedKernelManager Named Kernel Manager
	   * @param {TimerEventSource} components.TimerEventSource Timer event source
	   * @param {RoutableComponentRoutes} [routes] ルーティング
	   * @param {Object<class<GhostKernelController>>} [controller_classes] コントローラ
	   */
	
	  function GhostKernel(components) {
	    var routes = arguments.length <= 1 || arguments[1] === undefined ? new _routableComponent.RoutableComponentRoutes(GhostKernelRoutings) : arguments[1];
	    var controller_classes = arguments.length <= 2 || arguments[2] === undefined ? GhostKernelControllers : arguments[2];
	
	    _classCallCheck(this, GhostKernel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GhostKernel).call(this, components, routes, controller_classes));
	
	    _this.register_component('GhostKernel', _this);
	    return _this;
	  }
	
	  /**
	   * start kernel (emits start event)
	   * @return {void}
	   */
	
	
	  _createClass(GhostKernel, [{
	    key: 'start',
	    value: function start() {
	      this.emit('start');
	    }
	
	    /**
	     * emits protocol version fixed event
	     * @return {void}
	     */
	
	  }, {
	    key: 'protocol_version_fixed',
	    value: function protocol_version_fixed() {
	      this.emit('protocol_version_fixed');
	    }
	
	    /**
	     * emits close event
	     * @return {void}
	     */
	
	  }, {
	    key: 'close',
	    value: function close() {
	      this.emit('close');
	    }
	  }]);
	
	  return GhostKernel;
	}(_routableComponent.RoutableComponent);
	
	/**
	 * カーネル用のコントローラ
	 * @implements {RoutableComponentController}
	 */
	
	
	var GhostKernelController = exports.GhostKernelController = function () {
	  /**
	   * コンストラクタ
	   * @param {GhostKernel} kernel カーネル
	   */
	
	  function GhostKernelController(kernel) {
	    _classCallCheck(this, GhostKernelController);
	
	    this._kernel = kernel;
	  }
	
	  /**
	   * カーネル
	   * @type {GhostKernel}
	   */
	
	
	  _createClass(GhostKernelController, [{
	    key: 'kernel',
	    get: function get() {
	      return this._kernel;
	    }
	  }]);
	
	  return GhostKernelController;
	}();
	//# sourceMappingURL=ghost-kernel.js.map


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* (C) 2016 Narazaka : Licensed under The MIT License - https://narazaka.net/license/MIT?2016 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RoutableComponentRoute = exports.RoutableComponentRoutes = exports.RoutableComponentController = exports.RoutableComponentRouting = exports.RoutableComponent = undefined;
	
	var _iterator6 = __webpack_require__(76);
	
	var _iterator7 = _interopRequireDefault(_iterator6);
	
	var _keys = __webpack_require__(106);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(109);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(112);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * ルーティング可能なコンポーネント
	 */
	
	var RoutableComponent = exports.RoutableComponent = function (_EventEmitter) {
	  (0, _inherits3.default)(RoutableComponent, _EventEmitter);
	
	  /**
	   * constructor
	   * @param {Object<EventEmitter>} [components] コンポーネントの連想配列
	   * @param {RoutableComponentRoutes} routes ルーティング
	   * @param {Object<RoutableComponentController>} controller_classes コントローラクラスの連想配列
	   */
	
	  function RoutableComponent(components, routes, controller_classes) {
	    (0, _classCallCheck3.default)(this, RoutableComponent);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RoutableComponent).call(this));
	
	    _this._routes = routes;
	    _this._controller_classes = controller_classes;
	    _this._controllers = {};
	    _this._components = {};
	    _this._listeners = {};
	    _this.register_components(components);
	    return _this;
	  }
	
	  /**
	   * Routes
	   * @type {RoutableComponentRoutes}
	   */
	
	
	  (0, _createClass3.default)(RoutableComponent, [{
	    key: 'register_components',
	
	
	    /**
	     * コンポーネントを追加し、ルーティングによるイベントを設定する
	     *
	     * すでにコンポーネントがあった場合は一度削除してから改めて追加する
	     * @param {Object<RoutableComponent>} components コンポーネントのリスト
	     * @return {void}
	     */
	    value: function register_components(components) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var name = _step.value;
	
	          var component = components[name];
	          this.register_component(name, component);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	
	    /**
	     * コンポーネントを追加し、ルーティングによるイベントを設定する
	     *
	     * すでにコンポーネントがあった場合は一度削除してから改めて追加する
	     * @param {string} name コンポーネント名
	     * @param {RoutableComponent} component コンポーネント
	     * @return {void}
	     */
	
	  }, {
	    key: 'register_component',
	    value: function register_component(name, component) {
	      if (this.components[name]) this.unregister_component(name);
	      this.components[name] = component;
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.routes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var route = _step2.value;
	
	          if (route.from === name) this._attach_route_event(route);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	
	    /**
	     * コンポーネントを削除し、ルーティングによるイベントを破棄する
	     * @param {string} name コンポーネント名
	     * @return {void}
	     */
	
	  }, {
	    key: 'unregister_component',
	    value: function unregister_component(name) {
	      if (this.components[name] && this._listeners[name]) {
	        var listeners = this._listeners[name];
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(listeners)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var event = _step3.value;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	              for (var _iterator4 = (0, _getIterator3.default)(listeners[event]), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var listener = _step4.value;
	
	                this.components[name].removeListener(event, listener);
	              }
	            } catch (err) {
	              _didIteratorError4 = true;
	              _iteratorError4 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                  _iterator4.return();
	                }
	              } finally {
	                if (_didIteratorError4) {
	                  throw _iteratorError4;
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	      delete this.components[name];
	      this._listeners[name];
	    }
	  }, {
	    key: '_attach_route_event',
	    value: function _attach_route_event(route) {
	      var _this2 = this;
	
	      var listener = function listener() {
	        var _controllers$route$co;
	
	        if (!_this2.controllers[route.controller]) {
	          if (!(route.controller in _this2.controller_classes)) {
	            throw new Error('controller [' + route.controller + '] not found');
	          }
	          _this2.controllers[route.controller] = new _this2.controller_classes[route.controller](_this2);
	        }
	        if (!_this2.controllers[route.controller][route.action]) {
	          throw new Error('controller [' + route.controller + '] does not have action [' + route.action + ']');
	        }
	        (_controllers$route$co = _this2.controllers[route.controller])[route.action].apply(_controllers$route$co, arguments);
	      };
	      this.components[route.from].on(route.event, listener);
	      if (!this._listeners[route.from]) this._listeners[route.from] = {};
	      if (!this._listeners[route.from][route.event]) this._listeners[route.from][route.event] = [];
	      this._listeners[route.from][route.event].push(listener);
	    }
	  }, {
	    key: 'routes',
	    get: function get() {
	      return this._routes;
	    }
	
	    /**
	     * Controllers
	     * @type {Hash<RoutableComponentController>}
	     */
	
	  }, {
	    key: 'controllers',
	    get: function get() {
	      return this._controllers;
	    }
	
	    /**
	     * Controller classes
	     * @type {Hash<class<RoutableComponentController>>}
	     */
	
	  }, {
	    key: 'controller_classes',
	    get: function get() {
	      return this._controller_classes;
	    }
	
	    /**
	     * Components
	     * @type {Hash<EventEmitter>}
	     */
	
	  }, {
	    key: 'components',
	    get: function get() {
	      return this._components;
	    }
	  }]);
	  return RoutableComponent;
	}(_events.EventEmitter);
	
	/**
	 * ルーティング設定定義
	 * @interface
	 */
	
	
	var RoutableComponentRouting = exports.RoutableComponentRouting = function () {
	  function RoutableComponentRouting() {
	    (0, _classCallCheck3.default)(this, RoutableComponentRouting);
	  }
	
	  (0, _createClass3.default)(RoutableComponentRouting, [{
	    key: 'setup',
	
	    /**
	     * ルーティングをセットアップする
	     * @param {RoutableComponentRoutes} routes ルーティング設定
	     * @return {void}
	     */
	    value: function setup(routes) {
	      throw new Error('abstruct');
	    }
	  }]);
	  return RoutableComponentRouting;
	}();
	
	/**
	 * コントローラ
	 * @interface
	 */
	
	
	var RoutableComponentController =
	/**
	 * コンストラクタ
	 * @param {RoutableComponent} component コンポーネント
	 */
	exports.RoutableComponentController = function RoutableComponentController(component) {
	  (0, _classCallCheck3.default)(this, RoutableComponentController);
	
	  throw new Error('abstruct');
	};
	
	/**
	 * イベントのルーティング設定
	 * @notice スレッドセーフではありません
	 */
	
	
	var RoutableComponentRoutes = function () {
	  /**
	   * コンストラクタ
	   * @param {RoutableComponentRouting|RoutableComponentRouting[]} routing_classes ルート定義クラス(の配列)
	   */
	
	  function RoutableComponentRoutes() {
	    var routing_classes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    (0, _classCallCheck3.default)(this, RoutableComponentRoutes);
	
	    this._routes = [];
	    this.include_route(routing_classes);
	  }
	
	  /**
	   * ルートを設定する
	   * @param {Route|Route[]} routing_classes ルート定義クラス(の配列)
	   * @return {void}
	   */
	
	
	  (0, _createClass3.default)(RoutableComponentRoutes, [{
	    key: 'include_route',
	    value: function include_route(routing_classes) {
	      var _routing_classes = routing_classes instanceof Array ? routing_classes : [routing_classes];
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(_routing_classes), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var route_class = _step5.value;
	
	          var route = new route_class();
	          route.setup(this);
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    }
	  }, {
	    key: _iterator7.default,
	    value: function value() {
	      return (0, _getIterator3.default)(this._routes);
	    }
	
	    /**
	     * イベントを定義する
	     * @param {...string} args from, event, controller, action(前提としたものは省く)それぞれの名称文字列
	     * @return {void}
	     * @example
	     * router.event('shell', 'clicked', 'ShellController', 'shell_clicked'); // full
	     * router.event('shell', 'clicked', 'ShellController'); // event = action
	     * router.controller('ShellController', function(router) {
	     *   router.event('shell', 'clicked'); // controllerは前提があるので省く
	     * });
	     * router.from('shell', function(router) {
	     *   router.controller('ShellController', function(router) {
	     *     router.event('clicked'); // from, controllerは前提があるので省く
	     *   });
	     * });
	     */
	
	  }, {
	    key: 'event',
	    value: function event() {
	      if (this._current_from && this._current_controller) {
	        if (arguments.length > 2) throw new Error('arguments too long');
	        this.event_on_from_controller.apply(this, arguments);
	      } else if (this._current_from) {
	        if (arguments.length > 3) throw new Error('arguments too long');
	        this.event_on_from.apply(this, arguments);
	      } else if (this._current_controller) {
	        if (arguments.length > 3) throw new Error('arguments too long');
	        this.event_on_controller.apply(this, arguments);
	      } else {
	        this.event_on_none.apply(this, arguments);
	      }
	    }
	
	    /**
	     * from, controllerを前提としてイベントを定義する
	     * @param {string} event イベント
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'event_on_from_controller',
	    value: function event_on_from_controller(event) {
	      var action = arguments.length <= 1 || arguments[1] === undefined ? event : arguments[1];
	
	      var from = this._current_from;
	      var controller = this._current_controller;
	      this.add_route(from, event, controller, action);
	    }
	
	    /**
	     * fromを前提としてイベントを定義する
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'event_on_from',
	    value: function event_on_from(event, controller) {
	      var action = arguments.length <= 2 || arguments[2] === undefined ? event : arguments[2];
	
	      var from = this._current_from;
	      this.add_route(from, event, controller, action);
	    }
	
	    /**
	     * controllerを前提としてイベントを定義する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'event_on_controller',
	    value: function event_on_controller(from, event) {
	      var action = arguments.length <= 2 || arguments[2] === undefined ? event : arguments[2];
	
	      var controller = this._current_controller;
	      this.add_route(from, event, controller, action);
	    }
	
	    /**
	     * 前提なしとしてイベントを定義する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} [action] アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'event_on_none',
	    value: function event_on_none(from, event, controller) {
	      var action = arguments.length <= 3 || arguments[3] === undefined ? event : arguments[3];
	
	      this.add_route(from, event, controller, action);
	    }
	
	    /**
	     * イベント発生源を前提とする
	     * @param {string} from イベント発生源プロパティ名
	     * @param {Function} block 前提としたイベント発生源におけるルート定義を行う関数
	     * @return {void}
	     */
	
	  }, {
	    key: 'from',
	    value: function from(_from, block) {
	      this._current_from = _from;
	      block(this);
	      delete this._current_from;
	    }
	
	    /**
	     * コントローラーを前提とする
	     * @param {string} controller コントローラ名
	     * @param {Function} block 前提としたコントローラにおけるルート定義を行う関数
	     * @return {void}
	     */
	
	  }, {
	    key: 'controller',
	    value: function controller(_controller, block) {
	      this._current_controller = _controller;
	      block(this);
	      delete this._current_controller;
	    }
	
	    /**
	     * ルート定義を追加する
	     * @param {string} from イベント発生源
	     * @param {string} event イベント
	     * @param {string} controller コントローラ
	     * @param {string} action アクション
	     * @return {void}
	     */
	
	  }, {
	    key: 'add_route',
	    value: function add_route(from, event, controller, action) {
	      this._routes.push(new RoutableComponentRoute(from, event, controller, action));
	    }
	
	    /**
	     * ルーティングの状態を返す
	     * @return {string} ルーティングの状態を示す文字列
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._routes.sort(function (a, b) {
	        return (a.from === b.from ? 0 : a.from > b.from ? 10 : -10) + (a.event === b.event ? 0 : a.event > b.event ? 1 : -1);
	      }).map(function (route) {
	        return route.toString() + '\n';
	      }).join('');
	    }
	  }]);
	  return RoutableComponentRoutes;
	}();
	
	/**
	 * ルート
	 */
	
	
	exports.RoutableComponentRoutes = RoutableComponentRoutes;
	
	var RoutableComponentRoute = exports.RoutableComponentRoute = function () {
	  /**
	   * コンストラクタ
	   * @param {string} from イベント発生源
	   * @param {string} event イベント
	   * @param {string} controller コントローラ
	   * @param {string} action アクション
	   */
	
	  function RoutableComponentRoute(from, event, controller, action) {
	    (0, _classCallCheck3.default)(this, RoutableComponentRoute);
	
	    this._check_constructor_arguments(from, event, controller, action);
	    this._from = from;
	    this._event = event;
	    this._controller = controller;
	    this._action = action;
	  }
	
	  (0, _createClass3.default)(RoutableComponentRoute, [{
	    key: '_check_constructor_arguments',
	    value: function _check_constructor_arguments(from, event, controller, action) {
	      var isString = function isString(obj) {
	        return typeof obj === 'string' || obj instanceof String;
	      };
	      if (from == null) throw new Error('register routing error: from is empty!');
	      if (event == null) throw new Error('register routing error: event is empty!');
	      if (controller == null) throw new Error('register routing error: controller is empty!');
	      if (action == null) throw new Error('register routing error: action is empty!');
	      if (!isString(from) || !isString(event) || !isString(controller) || !isString(action)) {
	        throw new Error('register routing error: arguments must be string!');
	      }
	    }
	
	    /**
	     * イベント発生源
	     * @type {string}
	     */
	
	  }, {
	    key: 'toString',
	
	
	    /**
	     * ルーティングの状態を返す
	     * @return {string} ルーティングの状態を示す文字列
	     */
	    value: function toString() {
	      return this.from + '.' + this.event + ' => ' + this.controller + '#' + this.action;
	    }
	  }, {
	    key: 'from',
	    get: function get() {
	      return this._from;
	    }
	    /**
	     * イベント
	     * @type {string}
	     */
	
	  }, {
	    key: 'event',
	    get: function get() {
	      return this._event;
	    }
	    /**
	     * コントローラ
	     * @type {string}
	     */
	
	  }, {
	    key: 'controller',
	    get: function get() {
	      return this._controller;
	    }
	    /**
	     * アクション
	     * @type {string}
	     */
	
	  }, {
	    key: 'action',
	    get: function get() {
	      return this._action;
	    }
	  }]);
	  return RoutableComponentRoute;
	}();
	//# sourceMappingURL=routable-component.js.map


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	module.exports = __webpack_require__(13).Object.keys;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(48)
	  , $keys    = __webpack_require__(32);
	
	__webpack_require__(73)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	__webpack_require__(5);
	module.exports = __webpack_require__(111);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(18)
	  , get      = __webpack_require__(59);
	module.exports = __webpack_require__(13).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SiteMenu = exports.Information = exports.InformationController = exports.InformationRouting = undefined;
	
	var _toConsumableArray2 = __webpack_require__(114);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(115);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(117);
	module.exports = __webpack_require__(13).Array.from;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(14)
	  , $export        = __webpack_require__(11)
	  , toObject       = __webpack_require__(48)
	  , call           = __webpack_require__(57)
	  , isArrayIter    = __webpack_require__(58)
	  , toLength       = __webpack_require__(38)
	  , createProperty = __webpack_require__(118)
	  , getIterFn      = __webpack_require__(59);
	
	$export($export.S + $export.F * !__webpack_require__(69)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(17)
	  , createDesc      = __webpack_require__(25);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimeEventController = exports.TimerEventState = exports.TimeEventRouting = undefined;
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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
	    key: 'minute_change',
	    value: function minute_change() {
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

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ShellController = exports.ShellRouting = exports.ShellState = undefined;
	
	var _toConsumableArray2 = __webpack_require__(114);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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
	      // TODO: インストール以外
	      var namedKernelManager = this.kernel.components.NamedKernelManager;
	      // TODO: jQuery / DOM操作系は何処でするのが良いのか
	      event.event.stopPropagation();
	      event.event.preventDefault();
	      event.event.originalEvent.dataTransfer.dropEffect = 'copy';
	      var files = event.event.originalEvent.dataTransfer.files;
	      for (var i = 0; i < files.length; ++i) {
	        var file = files[i];
	        namedKernelManager.installNamed(file, this.kernel);
	      }
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

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SakuraScriptController = exports.SakuraScriptRouting = exports.SakuraScriptState = undefined;
	
	var _toConsumableArray2 = __webpack_require__(114);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _ghostKernel = __webpack_require__(104);
	
	var _sakurascriptExecuter = __webpack_require__(122);
	
	var _sakurascript = __webpack_require__(130);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SakuraScriptState = exports.SakuraScriptState = function SakuraScriptState() {
	  (0, _classCallCheck3.default)(this, SakuraScriptState);
	
	  this.timerRaiseTimerId = {};
	};
	
	var SakuraScriptRouting = exports.SakuraScriptRouting = function () {
	  function SakuraScriptRouting() {
	    (0, _classCallCheck3.default)(this, SakuraScriptRouting);
	  }
	
	  (0, _createClass3.default)(SakuraScriptRouting, [{
	    key: 'setup',
	    value: function setup(routes) {
	      routes.controller('SakuraScriptController', function (routes) {
	        routes.event('GhostKernel', 'start');
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
	      var _this2 = this;
	
	      var sakurascript_executer = new _sakurascriptExecuter.SakuraScriptExecuter({ talk_wait: 50 }); // TODO 設定を読む
	      this.kernel.registerComponent('SakuraScriptExecuter', sakurascript_executer);
	      this.kernel.registerComponent('SakuraScriptState', new SakuraScriptState());
	      // make shortcut
	      this.kernel.executeSakuraScript = function (transaction) {
	        var value = transaction.response.to('3.0').headers.header.Value;
	        if (value != null) _this2.kernel.components.SakuraScriptExecuter.execute(value.toString());
	      };
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
	      var _this3 = this;
	
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
	              shiorif.get3(token.event, token.references).then(_this3.kernel.executeSakuraScript);
	              if (repeat_count > 0) repeat_count--;
	              if (!repeat_count) {
	                clearInterval(sakuraScriptState.timerRaiseTimerId[token.event]);
	                delete sakuraScriptState.timerRaiseTimerId[token.event];
	              }
	            }, token.period);
	          })();
	        } else {
	          var id = sakuraScriptState.timerRaiseTimerId[token.event];
	          if (id) {
	            clearInterval(id);
	            delete sakuraScriptState.timerRaiseTimerId[token.event];
	          }
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

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SakuraScriptExecuter = undefined;
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(123);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(109);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _asyncToGenerator2 = __webpack_require__(127);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(112);
	
	var _sakurascript = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * SakuraScript Executer
	 */
	
	var SakuraScriptExecuter = exports.SakuraScriptExecuter = function (_EventEmitter) {
	  (0, _inherits3.default)(SakuraScriptExecuter, _EventEmitter);
	
	  /**
	   * constructor
	   * @param {object} options options
	   */
	
	  function SakuraScriptExecuter() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    (0, _classCallCheck3.default)(this, SakuraScriptExecuter);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SakuraScriptExecuter).call(this));
	
	    _this._quick = options.quick || false;
	    _this._talk_wait = options.talk_wait || 0;
	    _this._executing = false;
	    return _this;
	  }
	
	  /**
	   * quick mode
	   * @type {Boolean}
	   */
	
	
	  (0, _createClass3.default)(SakuraScriptExecuter, [{
	    key: 'execute',
	
	
	    /**
	     * execute sakura script
	     * @param {string} script sakura script
	     * @emits {begin_execute()} sakurascript execute begin event
	     * @emits {execute(token)} sakurascript execute token event
	     * @emits {end_execute(is_abort)} sakurascript execute end event
	     * @return {void}
	     */
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(script) {
	        var sakurascript, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token, period;
	
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                this.abort_execute(); // abort previous session
	                sakurascript = _sakurascript.SakuraScript.parse(script);
	
	                this.emit('begin_execute');
	                this._initialize_execute_state();
	                _iteratorNormalCompletion = true;
	                _didIteratorError = false;
	                _iteratorError = undefined;
	                _context.prev = 7;
	                _iterator = (0, _getIterator3.default)(sakurascript.tokens);
	
	              case 9:
	                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                  _context.next = 38;
	                  break;
	                }
	
	                token = _step.value;
	
	                if (!this._wait_until_action_name) {
	                  _context.next = 17;
	                  break;
	                }
	
	                _context.next = 14;
	                return this._wait_until_action(this._wait_until_action_name);
	
	              case 14:
	                this._wait_until_action_name = null;
	                _context.next = 27;
	                break;
	
	              case 17:
	                if (this.quick) {
	                  _context.next = 27;
	                  break;
	                }
	
	                if (!(this._wait_period != null)) {
	                  _context.next = 24;
	                  break;
	                }
	
	                _context.next = 21;
	                return this._wait(this._wait_period);
	
	              case 21:
	                this._wait_period = null;
	                _context.next = 27;
	                break;
	
	              case 24:
	                if (!(token instanceof _sakurascript.SakuraScriptToken.Char && !this._quick_section)) {
	                  _context.next = 27;
	                  break;
	                }
	
	                _context.next = 27;
	                return this._wait(this.talk_wait);
	
	              case 27:
	                if (!this._will_abort) {
	                  _context.next = 29;
	                  break;
	                }
	
	                return _context.abrupt('break', 38);
	
	              case 29:
	                this.emit('execute', token);
	
	                if (!(token instanceof _sakurascript.SakuraScriptToken.Char)) {
	                  _context.next = 34;
	                  break;
	                }
	
	                return _context.abrupt('continue', 35);
	
	              case 34:
	                if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
	                  this._wait_until_action_name = '_animation_finished_' + token.animation;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
	                  this._wait_until_action_name = '_animation_finished_' + token.id;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
	                  period = new Date() - this._execute_start_time;
	
	                  if (period > 0) this._wait_period = period;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
	                  this._execute_start_time = new Date();
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
	                  this._execute_start_time = new Date();
	                  this._wait_until_action_name = '_balloon_clicked';
	                } else if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
	                  this._wait_period = token.period * 50;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
	                  this._wait_period = token.period;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
	                  this._quick_section = !this._quick_section;
	                }
	
	              case 35:
	                _iteratorNormalCompletion = true;
	                _context.next = 9;
	                break;
	
	              case 38:
	                _context.next = 44;
	                break;
	
	              case 40:
	                _context.prev = 40;
	                _context.t0 = _context['catch'](7);
	                _didIteratorError = true;
	                _iteratorError = _context.t0;
	
	              case 44:
	                _context.prev = 44;
	                _context.prev = 45;
	
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	
	              case 47:
	                _context.prev = 47;
	
	                if (!_didIteratorError) {
	                  _context.next = 50;
	                  break;
	                }
	
	                throw _iteratorError;
	
	              case 50:
	                return _context.finish(47);
	
	              case 51:
	                return _context.finish(44);
	
	              case 52:
	                this._finalize_execute_state();
	                this.emit('end_execute', this._will_abort);
	
	              case 54:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[7, 40, 44, 52], [45,, 47, 51]]);
	      }));
	
	      function execute(_x2) {
	        return _ref.apply(this, arguments);
	      }
	
	      return execute;
	    }()
	  }, {
	    key: '_initialize_execute_state',
	    value: function _initialize_execute_state() {
	      this._executing = true;
	      this._wait_period = 0;
	      this._wait_until_action_name = null;
	      this._quick_section = false;
	      this._will_abort = false;
	      this._current_wait = null;
	      this._execute_start_time = new Date();
	    }
	  }, {
	    key: '_finalize_execute_state',
	    value: function _finalize_execute_state() {
	      this._executing = false;
	    }
	  }, {
	    key: '_wait',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(period) {
	        var _this2 = this;
	
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                return _context2.abrupt('return', new _promise2.default(function (resolve) {
	                  _this2._current_wait = resolve;
	                  setTimeout(function () {
	                    return resolve(period);
	                  }, period);
	                }).then(function () {
	                  _this2._current_wait = null;
	                }));
	
	              case 1:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function _wait(_x3) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return _wait;
	    }()
	  }, {
	    key: '_wait_until_action',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(name) {
	        var _this3 = this;
	
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                return _context3.abrupt('return', new _promise2.default(function (resolve) {
	                  _this3._current_wait = resolve;
	                  _this3[name] = resolve;
	                }).then(function () {
	                  _this3._current_wait = null;
	                  delete _this3[name];
	                }));
	
	              case 1:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function _wait_until_action(_x4) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return _wait_until_action;
	    }()
	
	    /**
	     * call when balloon clicked
	     * @return {void}
	     */
	
	  }, {
	    key: 'balloon_clicked',
	    value: function balloon_clicked() {
	      if (this._balloon_clicked) this._balloon_clicked();
	    }
	
	    /**
	     * call when animation finished
	     * @param {number} animation_id animation id
	     * @return {void}
	     */
	
	  }, {
	    key: 'animation_finished',
	    value: function animation_finished(animation_id) {
	      var done = this['_animation_finished_' + animation_id];
	      if (done) done();
	    }
	
	    /**
	     * call when you want to abort
	     * @return {void}
	     */
	
	  }, {
	    key: 'abort_execute',
	    value: function abort_execute() {
	      this._will_abort = true;
	      if (this._current_wait) this._current_wait();
	    }
	  }, {
	    key: 'quick',
	    get: function get() {
	      return this._quick;
	    }
	
	    /**
	     * quick mode
	     * @type {Boolean}
	     */
	    ,
	    set: function set(value) {
	      this._quick = value;
	    }
	
	    /**
	     * default talk wait
	     * @type {number}
	     */
	
	  }, {
	    key: 'talk_wait',
	    get: function get() {
	      return this._talk_wait;
	    }
	
	    /**
	     * true if executing
	     * @type {Boolean}
	     */
	
	  }, {
	    key: 'executing',
	    get: function get() {
	      return this._executing;
	    }
	  }]);
	  return SakuraScriptExecuter;
	}(_events.EventEmitter);
	//# sourceMappingURL=sakurascript-executer.js.map


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(124);


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(125);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(126)))

/***/ },
/* 126 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  var SakuraScript, SakuraScriptToken, joinargs, splitargs,
	    slice = [].slice,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;
	
	  splitargs = function(str) {
	    return str.replace(/"((?:\\\\|\\"|[^"])*)"/g, function(all, quoted) {
	      return quoted.replace(/,/g, '\0');
	    }).split(/\s*\,\s*/).map(function(arg) {
	      return arg.replace(/\0/g, ',').replace(/\\(.)/, '$1');
	    });
	  };
	
	  joinargs = function(args) {
	    return args.map(function(arg) {
	      return arg.replace(/\\/, '\\\\').replace(/\]/, '\\]');
	    }).map(function(arg) {
	      if (/[,"]/.test(arg)) {
	        return '"' + arg.replace(/"/, '\\"') + '"';
	      } else {
	        return arg;
	      }
	    }).join(',');
	  };
	
	  SakuraScript = (function() {
	    SakuraScript.fromObject = function(json) {
	      var i, len, token, tokens;
	      tokens = [];
	      for (i = 0, len = json.length; i < len; i++) {
	        token = json[i];
	        tokens.push(SakuraScriptToken.fromObject(token));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    SakuraScript.parse = function(script) {
	      var i, len, ref, tag, tokens;
	      tokens = [];
	      while (script.length) {
	        tag = null;
	        ref = SakuraScript.tags;
	        for (i = 0, len = ref.length; i < len; i++) {
	          tag = ref[i];
	          if (tag.re.test(script)) {
	            break;
	          }
	        }
	        script = script.replace(tag.re, (function(_this) {
	          return function() {
	            var all, group, j, offset;
	            group = 3 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 2) : (j = 0, []), offset = arguments[j++], all = arguments[j++];
	            tokens.push(tag.match.call(_this, group));
	            return '';
	          };
	        })(this));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    function SakuraScript(tokens1) {
	      this.tokens = tokens1 != null ? tokens1 : [];
	    }
	
	    SakuraScript.prototype.toObject = function() {
	      var i, len, ref, results, token;
	      ref = this.tokens;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        token = ref[i];
	        results.push(token.toObject());
	      }
	      return results;
	    };
	
	    SakuraScript.prototype.toSakuraScript = function() {
	      var token;
	      return ((function() {
	        var i, len, ref, results;
	        ref = this.tokens;
	        results = [];
	        for (i = 0, len = ref.length; i < len; i++) {
	          token = ref[i];
	          results.push(token.toSakuraScript());
	        }
	        return results;
	      }).call(this)).join('');
	    };
	
	    return SakuraScript;
	
	  })();
	
	  SakuraScriptToken = (function() {
	    SakuraScriptToken.fromObject = function(json) {
	      var i, instance, key, len, ref;
	      instance = new SakuraScriptToken[json["class"]]();
	      ref = Object.keys(json);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        if (key !== "class") {
	          instance[key] = json[key];
	        }
	      }
	      return instance;
	    };
	
	    function SakuraScriptToken() {}
	
	    SakuraScriptToken.prototype.toObject = function() {
	      var class_name, i, json, key, len, ref;
	      class_name = this.constructor.toString().slice(9).match(/^[^\s(]+/)[0];
	      json = {
	        "class": class_name
	      };
	      ref = Object.keys(this);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        json[key] = this[key];
	      }
	      return json;
	    };
	
	    SakuraScriptToken.prototype.toSakuraScript = function() {
	      throw new Error("not implemented");
	    };
	
	    return SakuraScriptToken;
	
	  })();
	
	  SakuraScriptToken.Scope = (function(superClass) {
	    extend(Scope, superClass);
	
	    function Scope(scope, view) {
	      this.scope = scope;
	      this.view = view;
	    }
	
	    Scope.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\p[" + this.scope + "]";
	        case "nobracket":
	          return "\\p" + this.scope;
	        default:
	          return "\\" + this.view;
	      }
	    };
	
	    return Scope;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Surface = (function(superClass) {
	    extend(Surface, superClass);
	
	    function Surface(surface, view) {
	      this.surface = surface;
	      this.view = view;
	    }
	
	    Surface.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\s[" + this.surface + "]";
	        case "nobracket":
	          return "\\s" + this.surface;
	      }
	    };
	
	    return Surface;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SurfaceAlias = (function(superClass) {
	    extend(SurfaceAlias, superClass);
	
	    function SurfaceAlias(surface_alias) {
	      this.surface_alias = surface_alias;
	    }
	
	    SurfaceAlias.prototype.toSakuraScript = function() {
	      return "\\s[" + (joinargs([this.surface_alias])) + "]";
	    };
	
	    return SurfaceAlias;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Balloon = (function(superClass) {
	    extend(Balloon, superClass);
	
	    function Balloon(balloon, view) {
	      this.balloon = balloon;
	      this.view = view;
	    }
	
	    Balloon.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\b[" + this.balloon + "]";
	        case "nobracket":
	          return "\\b" + this.balloon;
	      }
	    };
	
	    return Balloon;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimation = (function(superClass) {
	    extend(PlayAnimation, superClass);
	
	    function PlayAnimation(animation, view) {
	      this.animation = animation;
	      this.view = view;
	    }
	
	    PlayAnimation.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\i[" + this.animation + "]";
	        case "nobracket":
	          return "\\i" + this.animation;
	      }
	    };
	
	    return PlayAnimation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimationWait = (function(superClass) {
	    extend(PlayAnimationWait, superClass);
	
	    function PlayAnimationWait(animation) {
	      this.animation = animation;
	    }
	
	    PlayAnimationWait.prototype.toSakuraScript = function() {
	      return "\\i[" + this.animation + ",wait]";
	    };
	
	    return PlayAnimationWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SimpleWait = (function(superClass) {
	    extend(SimpleWait, superClass);
	
	    function SimpleWait(period) {
	      this.period = period;
	    }
	
	    SimpleWait.prototype.toSakuraScript = function() {
	      return "\\w" + this.period;
	    };
	
	    return SimpleWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PreciseWait = (function(superClass) {
	    extend(PreciseWait, superClass);
	
	    function PreciseWait(period) {
	      this.period = period;
	    }
	
	    PreciseWait.prototype.toSakuraScript = function() {
	      return "\\_w[" + this.period + "]";
	    };
	
	    return PreciseWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitFromBeginning = (function(superClass) {
	    extend(WaitFromBeginning, superClass);
	
	    function WaitFromBeginning(period) {
	      this.period = period;
	    }
	
	    WaitFromBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[" + this.period + "]";
	    };
	
	    return WaitFromBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ResetBeginning = (function(superClass) {
	    extend(ResetBeginning, superClass);
	
	    function ResetBeginning() {}
	
	    ResetBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[clear]";
	    };
	
	    return ResetBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitAnimationEnd = (function(superClass) {
	    extend(WaitAnimationEnd, superClass);
	
	    function WaitAnimationEnd(id) {
	      this.id = id;
	    }
	
	    WaitAnimationEnd.prototype.toSakuraScript = function() {
	      return "\\__w[animation," + this.id + "]";
	    };
	
	    return WaitAnimationEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleQuick = (function(superClass) {
	    extend(ToggleQuick, superClass);
	
	    function ToggleQuick() {}
	
	    ToggleQuick.prototype.toSakuraScript = function() {
	      return "\\_q";
	    };
	
	    return ToggleQuick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleSynchronize = (function(superClass) {
	    extend(ToggleSynchronize, superClass);
	
	    function ToggleSynchronize(scopes) {
	      this.scopes = scopes != null ? scopes : [];
	    }
	
	    ToggleSynchronize.prototype.toSakuraScript = function() {
	      return "\\_s" + (this.scopes.length ? "[" + (joinargs(this.scopes)) + "]" : "");
	    };
	
	    return ToggleSynchronize;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.TimeCritical = (function(superClass) {
	    extend(TimeCritical, superClass);
	
	    function TimeCritical() {}
	
	    TimeCritical.prototype.toSakuraScript = function() {
	      return "\\t";
	    };
	
	    return TimeCritical;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitClick = (function(superClass) {
	    extend(WaitClick, superClass);
	
	    function WaitClick(noclear) {
	      this.noclear = noclear != null ? noclear : false;
	    }
	
	    WaitClick.prototype.toSakuraScript = function() {
	      return "\\x";
	    };
	
	    return WaitClick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NoChoiceTimeout = (function(superClass) {
	    extend(NoChoiceTimeout, superClass);
	
	    function NoChoiceTimeout() {}
	
	    NoChoiceTimeout.prototype.toSakuraScript = function() {
	      return "\\*";
	    };
	
	    return NoChoiceTimeout;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EventChoice = (function(superClass) {
	    extend(EventChoice, superClass);
	
	    function EventChoice(text, event, references) {
	      this.text = text;
	      this.event = event;
	      this.references = references;
	    }
	
	    EventChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, this.event].concat(this.references))) + "]";
	    };
	
	    return EventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ReferencesChoice = (function(superClass) {
	    extend(ReferencesChoice, superClass);
	
	    function ReferencesChoice(text, references) {
	      this.text = text;
	      this.references = references;
	    }
	
	    ReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text].concat(this.references))) + "]";
	    };
	
	    return ReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ScriptChoice = (function(superClass) {
	    extend(ScriptChoice, superClass);
	
	    function ScriptChoice(text, script1) {
	      this.text = text;
	      this.script = script1;
	    }
	
	    ScriptChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, "script:" + this.script])) + "]";
	    };
	
	    return ScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldReferenceChoice = (function(superClass) {
	    extend(OldReferenceChoice, superClass);
	
	    function OldReferenceChoice(text, reference, view) {
	      this.text = text;
	      this.reference = reference;
	      this.view = view;
	    }
	
	    OldReferenceChoice.prototype.toSakuraScript = function() {
	      return "\\q" + (this.view || '') + "[" + (joinargs([this.reference])) + "][" + (joinargs([this.text])) + "]";
	    };
	
	    return OldReferenceChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventChoice = (function(superClass) {
	    extend(BeginEventChoice, superClass);
	
	    function BeginEventChoice(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesChoice = (function(superClass) {
	    extend(BeginReferencesChoice, superClass);
	
	    function BeginReferencesChoice(references) {
	      this.references = references;
	    }
	
	    BeginReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptChoice = (function(superClass) {
	    extend(BeginScriptChoice, superClass);
	
	    function BeginScriptChoice(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndChoice = (function(superClass) {
	    extend(EndChoice, superClass);
	
	    function EndChoice() {}
	
	    EndChoice.prototype.toSakuraScript = function() {
	      return "\\__q";
	    };
	
	    return EndChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventAnchor = (function(superClass) {
	    extend(BeginEventAnchor, superClass);
	
	    function BeginEventAnchor(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesAnchor = (function(superClass) {
	    extend(BeginReferencesAnchor, superClass);
	
	    function BeginReferencesAnchor(references) {
	      this.references = references;
	    }
	
	    BeginReferencesAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptAnchor = (function(superClass) {
	    extend(BeginScriptAnchor, superClass);
	
	    function BeginScriptAnchor(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndAnchor = (function(superClass) {
	    extend(EndAnchor, superClass);
	
	    function EndAnchor() {}
	
	    EndAnchor.prototype.toSakuraScript = function() {
	      return "\\_a";
	    };
	
	    return EndAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LineBreak = (function(superClass) {
	    extend(LineBreak, superClass);
	
	    function LineBreak() {}
	
	    LineBreak.prototype.toSakuraScript = function() {
	      return "\\n";
	    };
	
	    return LineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.HalfLineBreak = (function(superClass) {
	    extend(HalfLineBreak, superClass);
	
	    function HalfLineBreak() {}
	
	    HalfLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[half]";
	    };
	
	    return HalfLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PercentLineBreak = (function(superClass) {
	    extend(PercentLineBreak, superClass);
	
	    function PercentLineBreak(percent) {
	      this.percent = percent;
	    }
	
	    PercentLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[" + this.percent + "]";
	    };
	
	    return PercentLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleNoAutoLineBreak = (function(superClass) {
	    extend(ToggleNoAutoLineBreak, superClass);
	
	    function ToggleNoAutoLineBreak() {}
	
	    ToggleNoAutoLineBreak.prototype.toSakuraScript = function() {
	      return "\\_n";
	    };
	
	    return ToggleNoAutoLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Location = (function(superClass) {
	    extend(Location, superClass);
	
	    function Location(x1, y1) {
	      this.x = x1;
	      this.y = y1;
	    }
	
	    Location.prototype.toSakuraScript = function() {
	      return "\\_l[" + ([this.x, this.y].join(',')) + "]";
	    };
	
	    return Location;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Image = (function(superClass) {
	    extend(Image, superClass);
	
	    function Image(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    Image.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, this.x, this.y].concat(this.args).join(',')) + "]";
	    };
	
	    return Image;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.InlineImage = (function(superClass) {
	    extend(InlineImage, superClass);
	
	    function InlineImage(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    InlineImage.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, 'inline'].concat(this.args).join(',')) + "]";
	    };
	
	    return InlineImage;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Font = (function(superClass) {
	    extend(Font, superClass);
	
	    function Font(name, args1) {
	      this.name = name;
	      this.args = args1;
	    }
	
	    Font.prototype.toSakuraScript = function() {
	      return "\\f[" + (joinargs([this.name].concat(this.args))) + "]";
	    };
	
	    return Font;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeFar = (function(superClass) {
	    extend(BeFar, superClass);
	
	    function BeFar() {}
	
	    BeFar.prototype.toSakuraScript = function() {
	      return "\\4";
	    };
	
	    return BeFar;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeNear = (function(superClass) {
	    extend(BeNear, superClass);
	
	    function BeNear() {}
	
	    BeNear.prototype.toSakuraScript = function() {
	      return "\\5";
	    };
	
	    return BeNear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Clear = (function(superClass) {
	    extend(Clear, superClass);
	
	    function Clear() {}
	
	    Clear.prototype.toSakuraScript = function() {
	      return "\\c";
	    };
	
	    return Clear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.End = (function(superClass) {
	    extend(End, superClass);
	
	    function End() {}
	
	    End.prototype.toSakuraScript = function() {
	      return "\\e";
	    };
	
	    return End;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldChoiceEnd = (function(superClass) {
	    extend(OldChoiceEnd, superClass);
	
	    function OldChoiceEnd() {}
	
	    OldChoiceEnd.prototype.toSakuraScript = function() {
	      return "\\z";
	    };
	
	    return OldChoiceEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenCommunicateBox = (function(superClass) {
	    extend(OpenCommunicateBox, superClass);
	
	    function OpenCommunicateBox() {}
	
	    OpenCommunicateBox.prototype.toSakuraScript = function() {
	      return "\\__c";
	    };
	
	    return OpenCommunicateBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenTeachBox = (function(superClass) {
	    extend(OpenTeachBox, superClass);
	
	    function OpenTeachBox() {}
	
	    OpenTeachBox.prototype.toSakuraScript = function() {
	      return "\\__t";
	    };
	
	    return OpenTeachBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Halt = (function(superClass) {
	    extend(Halt, superClass);
	
	    function Halt() {}
	
	    Halt.prototype.toSakuraScript = function() {
	      return "\\-";
	    };
	
	    return Halt;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Marker = (function(superClass) {
	    extend(Marker, superClass);
	
	    function Marker() {}
	
	    Marker.prototype.toSakuraScript = function() {
	      return "\\![*]";
	    };
	
	    return Marker;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Char = (function(superClass) {
	    extend(Char, superClass);
	
	    function Char(raw_char) {
	      this.raw_char = raw_char;
	      if (this.raw_char) {
	        this.char = this.raw_char.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;');
	      }
	    }
	
	    Char.prototype.toSakuraScript = function() {
	      return this.raw_char;
	    };
	
	    return Char;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EscapeChar = (function(superClass) {
	    extend(EscapeChar, superClass);
	
	    function EscapeChar() {
	      this.char = "\\";
	    }
	
	    EscapeChar.prototype.toSakuraScript = function() {
	      return "\\\\";
	    };
	
	    return EscapeChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.UCSChar = (function(superClass) {
	    extend(UCSChar, superClass);
	
	    function UCSChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    UCSChar.prototype.toSakuraScript = function() {
	      return "\\_u[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return UCSChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.AsciiChar = (function(superClass) {
	    extend(AsciiChar, superClass);
	
	    function AsciiChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    AsciiChar.prototype.toSakuraScript = function() {
	      return "\\_m[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return AsciiChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.EntityChar = (function(superClass) {
	    extend(EntityChar, superClass);
	
	    function EntityChar(entity) {
	      this.entity = entity;
	      this.char = "&" + this.entity + ";";
	    }
	
	    EntityChar.prototype.toSakuraScript = function() {
	      return "\\&[" + this.entity + "]";
	    };
	
	    return EntityChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.Animation = (function(superClass) {
	    extend(Animation, superClass);
	
	    function Animation(command, id, args1) {
	      this.command = command;
	      this.id = id;
	      this.args = args1;
	    }
	
	    Animation.prototype.toSakuraScript = function() {
	      return "\\![anim," + (joinargs([this.command, this.id].concat(this.args))) + "]";
	    };
	
	    return Animation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Bind = (function(superClass) {
	    extend(Bind, superClass);
	
	    function Bind(category, parts, dress_up) {
	      this.category = category;
	      this.parts = parts;
	      this.dress_up = dress_up;
	    }
	
	    Bind.prototype.toSakuraScript = function() {
	      return "\\![bind," + (joinargs([this.category, this.parts].concat(this.dress_up != null ? [Number(this.dress_up)] : []))) + "]";
	    };
	
	    return Bind;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LockRepaint = (function(superClass) {
	    extend(LockRepaint, superClass);
	
	    function LockRepaint() {}
	
	    LockRepaint.prototype.toSakuraScript = function() {
	      return "\\![lock,repaint]";
	    };
	
	    return LockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.UnlockRepaint = (function(superClass) {
	    extend(UnlockRepaint, superClass);
	
	    function UnlockRepaint() {}
	
	    UnlockRepaint.prototype.toSakuraScript = function() {
	      return "\\![unlock,repaint]";
	    };
	
	    return UnlockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Move = (function(superClass) {
	    extend(Move, superClass);
	
	    function Move(x1, y1, duration, origin_type, source_origin, target_origin) {
	      this.x = x1;
	      this.y = y1;
	      this.duration = duration;
	      this.origin_type = origin_type;
	      this.source_origin = source_origin;
	      this.target_origin = target_origin;
	    }
	
	    Move.prototype.toSakuraScript = function() {
	      return "\\![move," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return Move;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.MoveAsync = (function(superClass) {
	    extend(MoveAsync, superClass);
	
	    function MoveAsync() {
	      return MoveAsync.__super__.constructor.apply(this, arguments);
	    }
	
	    MoveAsync.prototype.toSakuraScript = function() {
	      return "\\![moveasync," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return MoveAsync;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.MoveAsyncCancel = (function(superClass) {
	    extend(MoveAsyncCancel, superClass);
	
	    function MoveAsyncCancel() {}
	
	    MoveAsyncCancel.prototype.toSakuraScript = function() {
	      return "\\![moveasync,cancel]";
	    };
	
	    return MoveAsyncCancel;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.Raise = (function(superClass) {
	    extend(Raise, superClass);
	
	    function Raise(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    Raise.prototype.toSakuraScript = function() {
	      return "\\![raise," + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return Raise;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Set = (function(superClass) {
	    extend(Set, superClass);
	
	    function Set(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Set.prototype.toSakuraScript = function() {
	      return "\\![set," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Set;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Open = (function(superClass) {
	    extend(Open, superClass);
	
	    function Open(command, args1) {
	      this.command = command;
	      this.args = args1;
	    }
	
	    Open.prototype.toSakuraScript = function() {
	      return "\\![open," + (joinargs([this.command].concat(this.args))) + "]";
	    };
	
	    return Open;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Close = (function(superClass) {
	    extend(Close, superClass);
	
	    function Close(command, args1) {
	      this.command = command;
	      this.args = args1;
	    }
	
	    Close.prototype.toSakuraScript = function() {
	      return "\\![close," + (joinargs([this.command].concat(this.args))) + "]";
	    };
	
	    return Close;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NotImplemented = (function(superClass) {
	    extend(NotImplemented, superClass);
	
	    function NotImplemented(str1) {
	      this.str = str1;
	    }
	
	    NotImplemented.prototype.toSakuraScript = function() {
	      return this.str;
	    };
	
	    return NotImplemented;
	
	  })(SakuraScriptToken);
	
	  SakuraScript.tags = [
	    {
	      re: /^\\([h0])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(0, group[1]);
	      }
	    }, {
	      re: /^\\([u1])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(1, group[1]);
	      }
	    }, {
	      re: /^\\p\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\p(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Surface(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s\[([^\]]+)\]/,
	      match: function(group) {
	        if (isNaN(group[1])) {
	          return new SakuraScriptToken.SurfaceAlias(group[1]);
	        } else {
	          return new SakuraScriptToken.Surface(Number(group[1]), "bracket");
	        }
	      }
	    }, {
	      re: /^\\b(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\b\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\i\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i\[(\d+),wait\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimationWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\w(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.SimpleWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\_w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PreciseWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[animation,(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitAnimationEnd(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[clear\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ResetBeginning();
	      }
	    }, {
	      re: /^\\__w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitFromBeginning(Number(group[1]));
	      }
	    }, {
	      re: /^\\_q/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleQuick();
	      }
	    }, {
	      re: /^\\_s\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize(splitargs(group[1]).map(function(n) {
	          return Number(n);
	        }));
	      }
	    }, {
	      re: /^\\_s/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize();
	      }
	    }, {
	      re: /^\\t/,
	      match: function(group) {
	        return new SakuraScriptToken.TimeCritical();
	      }
	    }, {
	      re: /^\\x(\[noclear\])?/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitClick(!!group[1]);
	      }
	    }, {
	      re: /^\\\*/,
	      match: function(group) {
	        return new SakuraScriptToken.NoChoiceTimeout();
	      }
	    }, {
	      re: /^\\q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[1])) {
	          return new SakuraScriptToken.EventChoice(args[0], args[1], args.slice(2));
	        } else if (/^script:/.test(args[1])) {
	          return new SakuraScriptToken.ScriptChoice(args[0], args[1].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.ReferencesChoice(args[0], args.slice(1));
	        }
	      }
	    }, {
	      re: /^\\__q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventChoice(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptChoice(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesChoice(args);
	        }
	      }
	    }, {
	      re: /^\\__q/,
	      match: function(group) {
	        return new SakuraScriptToken.EndChoice();
	      }
	    }, {
	      re: /^\\q(\d*)\[((?:\\\\|\\\]|[^\]])+)\]\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.OldReferenceChoice(group[3], group[2], group[1]);
	      }
	    }, {
	      re: /^\\_a\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventAnchor(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptAnchor(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesAnchor(args);
	        }
	      }
	    }, {
	      re: /^\\_a/,
	      match: function(group) {
	        return new SakuraScriptToken.EndAnchor();
	      }
	    }, {
	      re: /^\\n\[half\]/,
	      match: function(group) {
	        return new SakuraScriptToken.HalfLineBreak();
	      }
	    }, {
	      re: /^\\n\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PercentLineBreak(Number(group[1]));
	      }
	    }, {
	      re: /^\\n/,
	      match: function(group) {
	        return new SakuraScriptToken.LineBreak();
	      }
	    }, {
	      re: /^\\_n/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleNoAutoLineBreak();
	      }
	    }, {
	      re: /^\\_l\[([^\]]+)\]/,
	      match: function(group) {
	        var ref, x, y;
	        ref = splitargs(group[1]), x = ref[0], y = ref[1];
	        return new SakuraScriptToken.Location(x, y);
	      }
	    }, {
	      re: /^\\_b\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (args[1] === "inline") {
	          return new SakuraScriptToken.InlineImage(args[0], args.slice(2));
	        } else {
	          return new SakuraScriptToken.Image(args[0], args[1], args[2], args.slice(3));
	        }
	      }
	    }, {
	      re: /^\\f\[([^\]]+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Font(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\4/,
	      match: function(group) {
	        return new SakuraScriptToken.BeFar();
	      }
	    }, {
	      re: /^\\5/,
	      match: function(group) {
	        return new SakuraScriptToken.BeNear();
	      }
	    }, {
	      re: /^\\c/,
	      match: function(group) {
	        return new SakuraScriptToken.Clear();
	      }
	    }, {
	      re: /^\\e/,
	      match: function(group) {
	        return new SakuraScriptToken.End();
	      }
	    }, {
	      re: /^\\z/,
	      match: function(group) {
	        return new SakuraScriptToken.OldChoiceEnd();
	      }
	    }, {
	      re: /^\\-/,
	      match: function(group) {
	        return new SakuraScriptToken.Halt();
	      }
	    }, {
	      re: /^\\\\/,
	      match: function(group) {
	        return new SakuraScriptToken.EscapeChar();
	      }
	    }, {
	      re: /^\\!\[anim,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Animation(args[0], args[1], args.slice(2));
	      }
	    }, {
	      re: /^\\!\[bind,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Bind(args[0], args[1], args[2] != null ? Number(args[2]) === 1 : null);
	      }
	    }, {
	      re: /^\\!\[moveasync,cancel\]/,
	      match: function(group) {
	        return new SakuraScriptToken.MoveAsyncCancel();
	      }
	    }, {
	      re: /^\\!\[move(async)?,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args, use_class;
	        use_class = group[1] ? SakuraScriptToken.MoveAsync : SakuraScriptToken.Move;
	        args = splitargs(group[2]);
	        return new use_class(args[0], args[1], args[2], args[3], args[4], args[5]);
	      }
	    }, {
	      re: /^\\!\[lock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.LockRepaint();
	      }
	    }, {
	      re: /^\\!\[unlock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UnlockRepaint();
	      }
	    }, {
	      re: /^\\!\[set,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Set(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[open,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Open(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[close,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Close(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\__c/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenCommunicateBox();
	      }
	    }, {
	      re: /^\\__t/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenTeachBox();
	      }
	    }, {
	      re: /^\\!\[\s*raise\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Raise(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[\*\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Marker();
	      }
	    }, {
	      re: /^\\_u\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UCSChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\_m\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.AsciiChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\&\[([A-Za-z0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.EntityChar(group[1]);
	      }
	    }, {
	      re: /^\\[C67+v8]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[+V]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\[8j]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[!?v]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\!\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^./,
	      match: function(group) {
	        return new SakuraScriptToken.Char(group[0]);
	      }
	    }
	  ];
	
	  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
	    module.exports = {
	      SakuraScript: SakuraScript,
	      SakuraScriptToken: SakuraScriptToken
	    };
	  } else {
	    this.SakuraScript = SakuraScript;
	    this.SakuraScriptToken = SakuraScriptToken;
	  }
	
	}).call(this);
	
	//# sourceMappingURL=sakurascript.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)(module)))

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  var SakuraScript, SakuraScriptToken, joinargs, splitargs,
	    slice = [].slice,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;
	
	  splitargs = function(str) {
	    return str.replace(/"((?:\\\\|\\"|[^"])*)"/g, function(all, quoted) {
	      return quoted.replace(/,/g, '\0');
	    }).split(/\s*\,\s*/).map(function(arg) {
	      return arg.replace(/\0/g, ',').replace(/\\(.)/, '$1');
	    });
	  };
	
	  joinargs = function(args) {
	    return args.map(function(arg) {
	      return arg.replace(/\\/, '\\\\').replace(/\]/, '\\]');
	    }).map(function(arg) {
	      if (/[,"]/.test(arg)) {
	        return '"' + arg.replace(/"/, '\\"') + '"';
	      } else {
	        return arg;
	      }
	    }).join(',');
	  };
	
	  SakuraScript = (function() {
	    SakuraScript.fromObject = function(json) {
	      var i, len, token, tokens;
	      tokens = [];
	      for (i = 0, len = json.length; i < len; i++) {
	        token = json[i];
	        tokens.push(SakuraScriptToken.fromObject(token));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    SakuraScript.parse = function(script) {
	      var i, len, ref, tag, tokens;
	      tokens = [];
	      while (script.length) {
	        tag = null;
	        ref = SakuraScript.tags;
	        for (i = 0, len = ref.length; i < len; i++) {
	          tag = ref[i];
	          if (tag.re.test(script)) {
	            break;
	          }
	        }
	        script = script.replace(tag.re, (function(_this) {
	          return function() {
	            var all, group, j, offset;
	            group = 3 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 2) : (j = 0, []), offset = arguments[j++], all = arguments[j++];
	            tokens.push(tag.match.call(_this, group));
	            return '';
	          };
	        })(this));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    function SakuraScript(tokens1) {
	      this.tokens = tokens1 != null ? tokens1 : [];
	    }
	
	    SakuraScript.prototype.toObject = function() {
	      var i, len, ref, results, token;
	      ref = this.tokens;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        token = ref[i];
	        results.push(token.toObject());
	      }
	      return results;
	    };
	
	    SakuraScript.prototype.toSakuraScript = function() {
	      var token;
	      return ((function() {
	        var i, len, ref, results;
	        ref = this.tokens;
	        results = [];
	        for (i = 0, len = ref.length; i < len; i++) {
	          token = ref[i];
	          results.push(token.toSakuraScript());
	        }
	        return results;
	      }).call(this)).join('');
	    };
	
	    return SakuraScript;
	
	  })();
	
	  SakuraScriptToken = (function() {
	    SakuraScriptToken.fromObject = function(json) {
	      var i, instance, key, len, ref;
	      instance = new SakuraScriptToken[json["class"]]();
	      ref = Object.keys(json);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        if (key !== "class") {
	          instance[key] = json[key];
	        }
	      }
	      return instance;
	    };
	
	    function SakuraScriptToken() {}
	
	    SakuraScriptToken.prototype.toObject = function() {
	      var class_name, i, json, key, len, ref;
	      class_name = this.constructor.toString().slice(9).match(/^[^\s(]+/)[0];
	      json = {
	        "class": class_name
	      };
	      ref = Object.keys(this);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        json[key] = this[key];
	      }
	      return json;
	    };
	
	    SakuraScriptToken.prototype.toSakuraScript = function() {
	      throw new Error("not implemented");
	    };
	
	    return SakuraScriptToken;
	
	  })();
	
	  SakuraScriptToken.Scope = (function(superClass) {
	    extend(Scope, superClass);
	
	    function Scope(scope, view) {
	      this.scope = scope;
	      this.view = view;
	    }
	
	    Scope.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\p[" + this.scope + "]";
	        case "nobracket":
	          return "\\p" + this.scope;
	        default:
	          return "\\" + this.view;
	      }
	    };
	
	    return Scope;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Surface = (function(superClass) {
	    extend(Surface, superClass);
	
	    function Surface(surface, view) {
	      this.surface = surface;
	      this.view = view;
	    }
	
	    Surface.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\s[" + this.surface + "]";
	        case "nobracket":
	          return "\\s" + this.surface;
	      }
	    };
	
	    return Surface;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SurfaceAlias = (function(superClass) {
	    extend(SurfaceAlias, superClass);
	
	    function SurfaceAlias(surface_alias) {
	      this.surface_alias = surface_alias;
	    }
	
	    SurfaceAlias.prototype.toSakuraScript = function() {
	      return "\\s[" + (joinargs([this.surface_alias])) + "]";
	    };
	
	    return SurfaceAlias;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Balloon = (function(superClass) {
	    extend(Balloon, superClass);
	
	    function Balloon(balloon, view) {
	      this.balloon = balloon;
	      this.view = view;
	    }
	
	    Balloon.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\b[" + this.balloon + "]";
	        case "nobracket":
	          return "\\b" + this.balloon;
	      }
	    };
	
	    return Balloon;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimation = (function(superClass) {
	    extend(PlayAnimation, superClass);
	
	    function PlayAnimation(animation, view) {
	      this.animation = animation;
	      this.view = view;
	    }
	
	    PlayAnimation.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\i[" + this.animation + "]";
	        case "nobracket":
	          return "\\i" + this.animation;
	      }
	    };
	
	    return PlayAnimation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimationWait = (function(superClass) {
	    extend(PlayAnimationWait, superClass);
	
	    function PlayAnimationWait(animation) {
	      this.animation = animation;
	    }
	
	    PlayAnimationWait.prototype.toSakuraScript = function() {
	      return "\\i[" + this.animation + ",wait]";
	    };
	
	    return PlayAnimationWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SimpleWait = (function(superClass) {
	    extend(SimpleWait, superClass);
	
	    function SimpleWait(period) {
	      this.period = period;
	    }
	
	    SimpleWait.prototype.toSakuraScript = function() {
	      return "\\w" + this.period;
	    };
	
	    return SimpleWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PreciseWait = (function(superClass) {
	    extend(PreciseWait, superClass);
	
	    function PreciseWait(period) {
	      this.period = period;
	    }
	
	    PreciseWait.prototype.toSakuraScript = function() {
	      return "\\_w[" + this.period + "]";
	    };
	
	    return PreciseWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitFromBeginning = (function(superClass) {
	    extend(WaitFromBeginning, superClass);
	
	    function WaitFromBeginning(period) {
	      this.period = period;
	    }
	
	    WaitFromBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[" + this.period + "]";
	    };
	
	    return WaitFromBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ResetBeginning = (function(superClass) {
	    extend(ResetBeginning, superClass);
	
	    function ResetBeginning() {}
	
	    ResetBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[clear]";
	    };
	
	    return ResetBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitAnimationEnd = (function(superClass) {
	    extend(WaitAnimationEnd, superClass);
	
	    function WaitAnimationEnd(id) {
	      this.id = id;
	    }
	
	    WaitAnimationEnd.prototype.toSakuraScript = function() {
	      return "\\__w[animation," + this.id + "]";
	    };
	
	    return WaitAnimationEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleQuick = (function(superClass) {
	    extend(ToggleQuick, superClass);
	
	    function ToggleQuick() {}
	
	    ToggleQuick.prototype.toSakuraScript = function() {
	      return "\\_q";
	    };
	
	    return ToggleQuick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleSynchronize = (function(superClass) {
	    extend(ToggleSynchronize, superClass);
	
	    function ToggleSynchronize(scopes) {
	      this.scopes = scopes != null ? scopes : [];
	    }
	
	    ToggleSynchronize.prototype.toSakuraScript = function() {
	      return "\\_s" + (this.scopes.length ? "[" + (joinargs(this.scopes)) + "]" : "");
	    };
	
	    return ToggleSynchronize;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.TimeCritical = (function(superClass) {
	    extend(TimeCritical, superClass);
	
	    function TimeCritical() {}
	
	    TimeCritical.prototype.toSakuraScript = function() {
	      return "\\t";
	    };
	
	    return TimeCritical;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitClick = (function(superClass) {
	    extend(WaitClick, superClass);
	
	    function WaitClick(noclear) {
	      this.noclear = noclear != null ? noclear : false;
	    }
	
	    WaitClick.prototype.toSakuraScript = function() {
	      return "\\x";
	    };
	
	    return WaitClick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NoChoiceTimeout = (function(superClass) {
	    extend(NoChoiceTimeout, superClass);
	
	    function NoChoiceTimeout() {}
	
	    NoChoiceTimeout.prototype.toSakuraScript = function() {
	      return "\\*";
	    };
	
	    return NoChoiceTimeout;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EventChoice = (function(superClass) {
	    extend(EventChoice, superClass);
	
	    function EventChoice(text, event, references) {
	      this.text = text;
	      this.event = event;
	      this.references = references;
	    }
	
	    EventChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, this.event].concat(this.references))) + "]";
	    };
	
	    return EventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ReferencesChoice = (function(superClass) {
	    extend(ReferencesChoice, superClass);
	
	    function ReferencesChoice(text, references) {
	      this.text = text;
	      this.references = references;
	    }
	
	    ReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text].concat(this.references))) + "]";
	    };
	
	    return ReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ScriptChoice = (function(superClass) {
	    extend(ScriptChoice, superClass);
	
	    function ScriptChoice(text, script1) {
	      this.text = text;
	      this.script = script1;
	    }
	
	    ScriptChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, "script:" + this.script])) + "]";
	    };
	
	    return ScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldReferenceChoice = (function(superClass) {
	    extend(OldReferenceChoice, superClass);
	
	    function OldReferenceChoice(text, reference, view) {
	      this.text = text;
	      this.reference = reference;
	      this.view = view;
	    }
	
	    OldReferenceChoice.prototype.toSakuraScript = function() {
	      return "\\q" + (this.view || '') + "[" + (joinargs([this.reference])) + "][" + (joinargs([this.text])) + "]";
	    };
	
	    return OldReferenceChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventChoice = (function(superClass) {
	    extend(BeginEventChoice, superClass);
	
	    function BeginEventChoice(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesChoice = (function(superClass) {
	    extend(BeginReferencesChoice, superClass);
	
	    function BeginReferencesChoice(references) {
	      this.references = references;
	    }
	
	    BeginReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptChoice = (function(superClass) {
	    extend(BeginScriptChoice, superClass);
	
	    function BeginScriptChoice(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndChoice = (function(superClass) {
	    extend(EndChoice, superClass);
	
	    function EndChoice() {}
	
	    EndChoice.prototype.toSakuraScript = function() {
	      return "\\__q";
	    };
	
	    return EndChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventAnchor = (function(superClass) {
	    extend(BeginEventAnchor, superClass);
	
	    function BeginEventAnchor(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesAnchor = (function(superClass) {
	    extend(BeginReferencesAnchor, superClass);
	
	    function BeginReferencesAnchor(references) {
	      this.references = references;
	    }
	
	    BeginReferencesAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptAnchor = (function(superClass) {
	    extend(BeginScriptAnchor, superClass);
	
	    function BeginScriptAnchor(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndAnchor = (function(superClass) {
	    extend(EndAnchor, superClass);
	
	    function EndAnchor() {}
	
	    EndAnchor.prototype.toSakuraScript = function() {
	      return "\\_a";
	    };
	
	    return EndAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LineBreak = (function(superClass) {
	    extend(LineBreak, superClass);
	
	    function LineBreak() {}
	
	    LineBreak.prototype.toSakuraScript = function() {
	      return "\\n";
	    };
	
	    return LineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.HalfLineBreak = (function(superClass) {
	    extend(HalfLineBreak, superClass);
	
	    function HalfLineBreak() {}
	
	    HalfLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[half]";
	    };
	
	    return HalfLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PercentLineBreak = (function(superClass) {
	    extend(PercentLineBreak, superClass);
	
	    function PercentLineBreak(percent) {
	      this.percent = percent;
	    }
	
	    PercentLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[" + this.percent + "]";
	    };
	
	    return PercentLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleNoAutoLineBreak = (function(superClass) {
	    extend(ToggleNoAutoLineBreak, superClass);
	
	    function ToggleNoAutoLineBreak() {}
	
	    ToggleNoAutoLineBreak.prototype.toSakuraScript = function() {
	      return "\\_n";
	    };
	
	    return ToggleNoAutoLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Location = (function(superClass) {
	    extend(Location, superClass);
	
	    function Location(x1, y1) {
	      this.x = x1;
	      this.y = y1;
	    }
	
	    Location.prototype.toSakuraScript = function() {
	      return "\\_l[" + ([this.x, this.y].join(',')) + "]";
	    };
	
	    return Location;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Image = (function(superClass) {
	    extend(Image, superClass);
	
	    function Image(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    Image.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, this.x, this.y].concat(this.args).join(',')) + "]";
	    };
	
	    return Image;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.InlineImage = (function(superClass) {
	    extend(InlineImage, superClass);
	
	    function InlineImage(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    InlineImage.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, 'inline'].concat(this.args).join(',')) + "]";
	    };
	
	    return InlineImage;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Font = (function(superClass) {
	    extend(Font, superClass);
	
	    function Font(name, args1) {
	      this.name = name;
	      this.args = args1;
	    }
	
	    Font.prototype.toSakuraScript = function() {
	      return "\\f[" + (joinargs([this.name].concat(this.args))) + "]";
	    };
	
	    return Font;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeFar = (function(superClass) {
	    extend(BeFar, superClass);
	
	    function BeFar() {}
	
	    BeFar.prototype.toSakuraScript = function() {
	      return "\\4";
	    };
	
	    return BeFar;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeNear = (function(superClass) {
	    extend(BeNear, superClass);
	
	    function BeNear() {}
	
	    BeNear.prototype.toSakuraScript = function() {
	      return "\\5";
	    };
	
	    return BeNear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Clear = (function(superClass) {
	    extend(Clear, superClass);
	
	    function Clear() {}
	
	    Clear.prototype.toSakuraScript = function() {
	      return "\\c";
	    };
	
	    return Clear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.End = (function(superClass) {
	    extend(End, superClass);
	
	    function End() {}
	
	    End.prototype.toSakuraScript = function() {
	      return "\\e";
	    };
	
	    return End;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldChoiceEnd = (function(superClass) {
	    extend(OldChoiceEnd, superClass);
	
	    function OldChoiceEnd() {}
	
	    OldChoiceEnd.prototype.toSakuraScript = function() {
	      return "\\z";
	    };
	
	    return OldChoiceEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenCommunicateBox = (function(superClass) {
	    extend(OpenCommunicateBox, superClass);
	
	    function OpenCommunicateBox() {}
	
	    OpenCommunicateBox.prototype.toSakuraScript = function() {
	      return "\\__c";
	    };
	
	    return OpenCommunicateBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenTeachBox = (function(superClass) {
	    extend(OpenTeachBox, superClass);
	
	    function OpenTeachBox() {}
	
	    OpenTeachBox.prototype.toSakuraScript = function() {
	      return "\\__t";
	    };
	
	    return OpenTeachBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Halt = (function(superClass) {
	    extend(Halt, superClass);
	
	    function Halt() {}
	
	    Halt.prototype.toSakuraScript = function() {
	      return "\\-";
	    };
	
	    return Halt;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Marker = (function(superClass) {
	    extend(Marker, superClass);
	
	    function Marker() {}
	
	    Marker.prototype.toSakuraScript = function() {
	      return "\\![*]";
	    };
	
	    return Marker;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Char = (function(superClass) {
	    extend(Char, superClass);
	
	    function Char(raw_char) {
	      this.raw_char = raw_char;
	      if (this.raw_char) {
	        this.char = this.raw_char.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;');
	      }
	    }
	
	    Char.prototype.toSakuraScript = function() {
	      return this.raw_char;
	    };
	
	    return Char;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EscapeChar = (function(superClass) {
	    extend(EscapeChar, superClass);
	
	    function EscapeChar() {
	      this.char = "\\";
	    }
	
	    EscapeChar.prototype.toSakuraScript = function() {
	      return "\\\\";
	    };
	
	    return EscapeChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.UCSChar = (function(superClass) {
	    extend(UCSChar, superClass);
	
	    function UCSChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    UCSChar.prototype.toSakuraScript = function() {
	      return "\\_u[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return UCSChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.AsciiChar = (function(superClass) {
	    extend(AsciiChar, superClass);
	
	    function AsciiChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    AsciiChar.prototype.toSakuraScript = function() {
	      return "\\_m[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return AsciiChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.EntityChar = (function(superClass) {
	    extend(EntityChar, superClass);
	
	    function EntityChar(entity) {
	      this.entity = entity;
	      this.char = "&" + this.entity + ";";
	    }
	
	    EntityChar.prototype.toSakuraScript = function() {
	      return "\\&[" + this.entity + "]";
	    };
	
	    return EntityChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.Animation = (function(superClass) {
	    extend(Animation, superClass);
	
	    function Animation(command, id, args1) {
	      this.command = command;
	      this.id = id;
	      this.args = args1;
	    }
	
	    Animation.prototype.toSakuraScript = function() {
	      return "\\![anim," + (joinargs([this.command, this.id].concat(this.args))) + "]";
	    };
	
	    return Animation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Bind = (function(superClass) {
	    extend(Bind, superClass);
	
	    function Bind(category, parts, dress_up) {
	      this.category = category;
	      this.parts = parts;
	      this.dress_up = dress_up;
	    }
	
	    Bind.prototype.toSakuraScript = function() {
	      return "\\![bind," + (joinargs([this.category, this.parts].concat(this.dress_up != null ? [Number(this.dress_up)] : []))) + "]";
	    };
	
	    return Bind;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LockRepaint = (function(superClass) {
	    extend(LockRepaint, superClass);
	
	    function LockRepaint() {}
	
	    LockRepaint.prototype.toSakuraScript = function() {
	      return "\\![lock,repaint]";
	    };
	
	    return LockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.UnlockRepaint = (function(superClass) {
	    extend(UnlockRepaint, superClass);
	
	    function UnlockRepaint() {}
	
	    UnlockRepaint.prototype.toSakuraScript = function() {
	      return "\\![unlock,repaint]";
	    };
	
	    return UnlockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Move = (function(superClass) {
	    extend(Move, superClass);
	
	    function Move(x1, y1, duration, origin_type, source_origin, target_origin) {
	      this.x = x1;
	      this.y = y1;
	      this.duration = duration;
	      this.origin_type = origin_type;
	      this.source_origin = source_origin;
	      this.target_origin = target_origin;
	    }
	
	    Move.prototype.toSakuraScript = function() {
	      return "\\![move," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return Move;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.MoveAsync = (function(superClass) {
	    extend(MoveAsync, superClass);
	
	    function MoveAsync() {
	      return MoveAsync.__super__.constructor.apply(this, arguments);
	    }
	
	    MoveAsync.prototype.toSakuraScript = function() {
	      return "\\![moveasync," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return MoveAsync;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.MoveAsyncCancel = (function(superClass) {
	    extend(MoveAsyncCancel, superClass);
	
	    function MoveAsyncCancel() {}
	
	    MoveAsyncCancel.prototype.toSakuraScript = function() {
	      return "\\![moveasync,cancel]";
	    };
	
	    return MoveAsyncCancel;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.Raise = (function(superClass) {
	    extend(Raise, superClass);
	
	    function Raise(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    Raise.prototype.toSakuraScript = function() {
	      return "\\![raise," + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return Raise;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.TimerRaise = (function(superClass) {
	    extend(TimerRaise, superClass);
	
	    function TimerRaise(period, repeat_count, event, references) {
	      this.period = period;
	      this.repeat_count = repeat_count != null ? repeat_count : 0;
	      this.event = event != null ? event : "";
	      this.references = references;
	    }
	
	    TimerRaise.prototype.toSakuraScript = function() {
	      return "\\![timerraise," + (joinargs([this.period, this.repeat_count, this.event].concat(this.references))) + "]";
	    };
	
	    return TimerRaise;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Notify = (function(superClass) {
	    extend(Notify, superClass);
	
	    function Notify(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    Notify.prototype.toSakuraScript = function() {
	      return "\\![notify," + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return Notify;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Set = (function(superClass) {
	    extend(Set, superClass);
	
	    function Set(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Set.prototype.toSakuraScript = function() {
	      return "\\![set," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Set;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Open = (function(superClass) {
	    extend(Open, superClass);
	
	    function Open(command, args1) {
	      this.command = command;
	      this.args = args1;
	    }
	
	    Open.prototype.toSakuraScript = function() {
	      return "\\![open," + (joinargs([this.command].concat(this.args))) + "]";
	    };
	
	    return Open;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Close = (function(superClass) {
	    extend(Close, superClass);
	
	    function Close(command, args1) {
	      this.command = command;
	      this.args = args1;
	    }
	
	    Close.prototype.toSakuraScript = function() {
	      return "\\![close," + (joinargs([this.command].concat(this.args))) + "]";
	    };
	
	    return Close;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NotImplemented = (function(superClass) {
	    extend(NotImplemented, superClass);
	
	    function NotImplemented(str1) {
	      this.str = str1;
	    }
	
	    NotImplemented.prototype.toSakuraScript = function() {
	      return this.str;
	    };
	
	    return NotImplemented;
	
	  })(SakuraScriptToken);
	
	  SakuraScript.tags = [
	    {
	      re: /^\\([h0])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(0, group[1]);
	      }
	    }, {
	      re: /^\\([u1])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(1, group[1]);
	      }
	    }, {
	      re: /^\\p\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\p(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Surface(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s\[([^\]]+)\]/,
	      match: function(group) {
	        if (isNaN(group[1])) {
	          return new SakuraScriptToken.SurfaceAlias(group[1]);
	        } else {
	          return new SakuraScriptToken.Surface(Number(group[1]), "bracket");
	        }
	      }
	    }, {
	      re: /^\\b(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\b\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\i\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i\[(\d+),wait\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimationWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\w(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.SimpleWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\_w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PreciseWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[animation,(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitAnimationEnd(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[clear\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ResetBeginning();
	      }
	    }, {
	      re: /^\\__w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitFromBeginning(Number(group[1]));
	      }
	    }, {
	      re: /^\\_q/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleQuick();
	      }
	    }, {
	      re: /^\\_s\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize(splitargs(group[1]).map(function(n) {
	          return Number(n);
	        }));
	      }
	    }, {
	      re: /^\\_s/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize();
	      }
	    }, {
	      re: /^\\t/,
	      match: function(group) {
	        return new SakuraScriptToken.TimeCritical();
	      }
	    }, {
	      re: /^\\x(\[noclear\])?/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitClick(!!group[1]);
	      }
	    }, {
	      re: /^\\\*/,
	      match: function(group) {
	        return new SakuraScriptToken.NoChoiceTimeout();
	      }
	    }, {
	      re: /^\\q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[1])) {
	          return new SakuraScriptToken.EventChoice(args[0], args[1], args.slice(2));
	        } else if (/^script:/.test(args[1])) {
	          return new SakuraScriptToken.ScriptChoice(args[0], args[1].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.ReferencesChoice(args[0], args.slice(1));
	        }
	      }
	    }, {
	      re: /^\\__q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventChoice(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptChoice(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesChoice(args);
	        }
	      }
	    }, {
	      re: /^\\__q/,
	      match: function(group) {
	        return new SakuraScriptToken.EndChoice();
	      }
	    }, {
	      re: /^\\q(\d*)\[((?:\\\\|\\\]|[^\]])+)\]\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.OldReferenceChoice(group[3], group[2], group[1]);
	      }
	    }, {
	      re: /^\\_a\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventAnchor(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptAnchor(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesAnchor(args);
	        }
	      }
	    }, {
	      re: /^\\_a/,
	      match: function(group) {
	        return new SakuraScriptToken.EndAnchor();
	      }
	    }, {
	      re: /^\\n\[half\]/,
	      match: function(group) {
	        return new SakuraScriptToken.HalfLineBreak();
	      }
	    }, {
	      re: /^\\n\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PercentLineBreak(Number(group[1]));
	      }
	    }, {
	      re: /^\\n/,
	      match: function(group) {
	        return new SakuraScriptToken.LineBreak();
	      }
	    }, {
	      re: /^\\_n/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleNoAutoLineBreak();
	      }
	    }, {
	      re: /^\\_l\[([^\]]+)\]/,
	      match: function(group) {
	        var ref, x, y;
	        ref = splitargs(group[1]), x = ref[0], y = ref[1];
	        return new SakuraScriptToken.Location(x, y);
	      }
	    }, {
	      re: /^\\_b\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (args[1] === "inline") {
	          return new SakuraScriptToken.InlineImage(args[0], args.slice(2));
	        } else {
	          return new SakuraScriptToken.Image(args[0], args[1], args[2], args.slice(3));
	        }
	      }
	    }, {
	      re: /^\\f\[([^\]]+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Font(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\4/,
	      match: function(group) {
	        return new SakuraScriptToken.BeFar();
	      }
	    }, {
	      re: /^\\5/,
	      match: function(group) {
	        return new SakuraScriptToken.BeNear();
	      }
	    }, {
	      re: /^\\c/,
	      match: function(group) {
	        return new SakuraScriptToken.Clear();
	      }
	    }, {
	      re: /^\\e/,
	      match: function(group) {
	        return new SakuraScriptToken.End();
	      }
	    }, {
	      re: /^\\z/,
	      match: function(group) {
	        return new SakuraScriptToken.OldChoiceEnd();
	      }
	    }, {
	      re: /^\\-/,
	      match: function(group) {
	        return new SakuraScriptToken.Halt();
	      }
	    }, {
	      re: /^\\\\/,
	      match: function(group) {
	        return new SakuraScriptToken.EscapeChar();
	      }
	    }, {
	      re: /^\\!\[anim,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Animation(args[0], args[1], args.slice(2));
	      }
	    }, {
	      re: /^\\!\[bind,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Bind(args[0], args[1], args[2] != null ? Number(args[2]) === 1 : null);
	      }
	    }, {
	      re: /^\\!\[moveasync,cancel\]/,
	      match: function(group) {
	        return new SakuraScriptToken.MoveAsyncCancel();
	      }
	    }, {
	      re: /^\\!\[move(async)?,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args, use_class;
	        use_class = group[1] ? SakuraScriptToken.MoveAsync : SakuraScriptToken.Move;
	        args = splitargs(group[2]);
	        return new use_class(args[0], args[1], args[2], args[3], args[4], args[5]);
	      }
	    }, {
	      re: /^\\!\[lock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.LockRepaint();
	      }
	    }, {
	      re: /^\\!\[unlock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UnlockRepaint();
	      }
	    }, {
	      re: /^\\!\[set,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Set(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[open,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Open(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[close,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Close(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\__c/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenCommunicateBox();
	      }
	    }, {
	      re: /^\\__t/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenTeachBox();
	      }
	    }, {
	      re: /^\\!\[\s*raise\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Raise(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[\s*timerraise\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.TimerRaise(args[0], args[1], args[2], args.slice(3));
	      }
	    }, {
	      re: /^\\!\[\s*notify\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Notify(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[\*\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Marker();
	      }
	    }, {
	      re: /^\\_u\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UCSChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\_m\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.AsciiChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\&\[([A-Za-z0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.EntityChar(group[1]);
	      }
	    }, {
	      re: /^\\[C67+v8]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[+V]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\[8j]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[!?v]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\!\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^./,
	      match: function(group) {
	        return new SakuraScriptToken.Char(group[0]);
	      }
	    }
	  ];
	
	  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
	    module.exports = {
	      SakuraScript: SakuraScript,
	      SakuraScriptToken: SakuraScriptToken
	    };
	  } else {
	    this.SakuraScript = SakuraScript;
	    this.SakuraScriptToken = SakuraScriptToken;
	  }
	
	}).call(this);
	
	//# sourceMappingURL=sakurascript.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)(module)))

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotifyInformationController = exports.NotifyInformationRouting = undefined;
	
	var _regenerator = __webpack_require__(123);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(127);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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
	      // TODO ここでこの実装してよいのか
	      var namedKernelManager = this.kernel.components.NamedKernelManager;
	      var names = namedKernelManager.namedIds().map(function (namedId) {
	        return namedKernelManager.kernel(namedId);
	      }).filter(function (kernel) {
	        return kernel.ghostDescript;
	      }).map(function (kernel) {
	        return [kernel.ghostDescript.name, kernel.components.Named.scopes[0].surface().surfaceId, kernel.components.Named.scopes[1] ? kernel.components.Named.scopes[1].surface().surfaceId : ''].join('\u0001');
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

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OperationController = exports.OperationRouting = undefined;
	
	var _regenerator = __webpack_require__(123);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(127);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(70);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(74);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(92);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ghostKernel = __webpack_require__(104);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=ghost-kernel-default-plugins.js.map