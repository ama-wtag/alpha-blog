/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/application */ "./app/javascript/stylesheets/application.scss");
/* harmony import */ var _stylesheets_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application__WEBPACK_IMPORTED_MODULE_5__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.






_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();

/***/ }),

/***/ "./app/javascript/stylesheets/application.scss":
/*!*****************************************************!*\
  !*** ./app/javascript/stylesheets/application.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/*! exports provided: Alert, Button, Carousel, Collapse, Dropdown, Modal, Popover, ScrollSpy, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */



function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "" + obj;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href');
    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  return (obj[0] || obj).nodeType;
};

var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
  var called = false;
  var durationPadding = 5;
  var emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    var elementStyle = getComputedStyle(element);
    var parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {
  return function () {};
};

var reflow = function reflow(element) {
  return element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

var isRTL = document.documentElement.dir === 'rtl';
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.bsKey === 'undefined') {
        element.bsKey = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.bsKey.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.bsKey === 'undefined') {
        return null;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    "delete": function _delete(element, key) {
      if (typeof element.bsKey === 'undefined') {
        return;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.bsKey;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData["delete"](instance, key);
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector) {
  if (delegationSelector === void 0) {
    delegationSelector = null;
  }

  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      delegation = _normalizeParams[0],
      originalHandler = _normalizeParams[1],
      typeEvent = _normalizeParams[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = event.replace(stripNameRegex, '');
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.0.0-beta1';

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    if (!element) {
      return;
    }

    this._element = element;
    Data.setData(element, this.constructor.DATA_KEY, this);
  }

  var _proto = BaseComponent.prototype;

  _proto.dispose = function dispose() {
    Data.removeData(this._element, this.constructor.DATA_KEY);
    this._element = null;
  }
  /** Static */
  ;

  BaseComponent.getInstance = function getInstance(element) {
    return Data.getData(element, this.DATA_KEY);
  };

  _createClass(BaseComponent, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return BaseComponent;
}();
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME = 'alert';
var DATA_KEY = 'bs.alert';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
var EVENT_CLOSE = "close" + EVENT_KEY;
var EVENT_CLOSED = "closed" + EVENT_KEY;
var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
var CLASSNAME_ALERT = 'alert';
var CLASSNAME_FADE = 'fade';
var CLASSNAME_SHOW = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Alert, _BaseComponent);

  function Alert() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype; // Public

  _proto.close = function close(element) {
    var rootElement = element ? this._getRootElement(element) : this._element;

    var customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  } // Private
  ;

  _proto._getRootElement = function _getRootElement(element) {
    return getElementFromSelector(element) || element.closest("." + CLASSNAME_ALERT);
  };

  _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
    return EventHandler.trigger(element, EVENT_CLOSE);
  };

  _proto._removeElement = function _removeElement(element) {
    var _this = this;

    element.classList.remove(CLASSNAME_SHOW);

    if (!element.classList.contains(CLASSNAME_FADE)) {
      this._destroyElement(element);

      return;
    }

    var transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, TRANSITION_END, function () {
      return _this._destroyElement(element);
    });
    emulateTransitionEnd(element, transitionDuration);
  };

  _proto._destroyElement = function _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, EVENT_CLOSED);
  } // Static
  ;

  Alert.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  };

  Alert.handleDismiss = function handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  };

  _createClass(Alert, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY;
    }
  }]);

  return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = Alert.jQueryInterface;
    $.fn[NAME].Constructor = Alert;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'button';
var DATA_KEY$1 = 'bs.button';
var EVENT_KEY$1 = "." + DATA_KEY$1;
var DATA_API_KEY$1 = '.data-api';
var CLASS_NAME_ACTIVE = 'active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Button, _BaseComponent);

  function Button() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Button.prototype; // Public

  _proto.toggle = function toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
  } // Static
  ;

  Button.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$1);

      if (!data) {
        data = new Button(this);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  };

  _createClass(Button, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY$1;
    }
  }]);

  return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE);
  var data = Data.getData(button, DATA_KEY$1);

  if (!data) {
    data = new Button(button);
  }

  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$1];
    $.fn[NAME$1] = Button.jQueryInterface;
    $.fn[NAME$1].Constructor = Button;

    $.fn[NAME$1].noConflict = function () {
      $.fn[NAME$1] = JQUERY_NO_CONFLICT;
      return Button.jQueryInterface;
    };
  }
});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-" + chr.toLowerCase();
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-" + normalizeDataKey(key), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-" + normalizeDataKey(key));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs');
    }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-" + normalizeDataKey(key)));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  matches: function matches(element, selector) {
    return element.matches(selector);
  },
  find: function find(selector, element) {
    var _ref;

    if (element === void 0) {
      element = document.documentElement;
    }

    return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne: function findOne(selector, element) {
    if (element === void 0) {
      element = document.documentElement;
    }

    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;

    var children = (_ref2 = []).concat.apply(_ref2, element.children);

    return children.filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (this.matches(next, selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }
};
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'carousel';
var DATA_KEY$2 = 'bs.carousel';
var EVENT_KEY$2 = "." + DATA_KEY$2;
var DATA_API_KEY$2 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var DIRECTION_NEXT = 'next';
var DIRECTION_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var EVENT_SLIDE = "slide" + EVENT_KEY$2;
var EVENT_SLID = "slid" + EVENT_KEY$2;
var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$1 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Carousel, _BaseComponent);

  function Carousel(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._items = null;
    _this._interval = null;
    _this._activeElement = null;
    _this._isPaused = false;
    _this._isSliding = false;
    _this.touchTimeout = null;
    _this.touchStartX = 0;
    _this.touchDeltaX = 0;
    _this._config = _this._getConfig(config);
    _this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this._element);
    _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    _this._pointerEvent = Boolean(window.PointerEvent);

    _this._addEventListeners();

    return _this;
  } // Getters


  var _proto = Carousel.prototype; // Public

  _proto.next = function next() {
    if (!this._isSliding) {
      this._slide(DIRECTION_NEXT);
    }
  };

  _proto.nextWhenVisible = function nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  };

  _proto.prev = function prev() {
    if (!this._isSliding) {
      this._slide(DIRECTION_PREV);
    }
  };

  _proto.pause = function pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  };

  _proto.to = function to(index) {
    var _this2 = this;

    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, function () {
        return _this2.to(index);
      });
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

    this._slide(direction, this._items[index]);
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._element, EVENT_KEY$2);
    this._items = null;
    this._config = null;
    this._interval = null;
    this._isPaused = null;
    this._isSliding = null;
    this._activeElement = null;
    this._indicatorsElement = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default, config);
    typeCheckConfig(NAME$2, config, DefaultType);
    return config;
  };

  _proto._handleSwipe = function _handleSwipe() {
    var absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    var direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0; // swipe left

    if (direction > 0) {
      this.prev();
    } // swipe right


    if (direction < 0) {
      this.next();
    }
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this3 = this;

    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
        return _this3._keydown(event);
      });
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
        return _this3.pause(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
        return _this3.cycle(event);
      });
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  };

  _proto._addTouchEventListeners = function _addTouchEventListeners() {
    var _this4 = this;

    var start = function start(event) {
      if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this4.touchStartX = event.clientX;
      } else if (!_this4._pointerEvent) {
        _this4.touchStartX = event.touches[0].clientX;
      }
    };

    var move = function move(event) {
      // ensure swiping with one touch and not pinching
      if (event.touches && event.touches.length > 1) {
        _this4.touchDeltaX = 0;
      } else {
        _this4.touchDeltaX = event.touches[0].clientX - _this4.touchStartX;
      }
    };

    var end = function end(event) {
      if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this4.touchDeltaX = event.clientX - _this4.touchStartX;
      }

      _this4._handleSwipe();

      if (_this4._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        _this4.pause();

        if (_this4.touchTimeout) {
          clearTimeout(_this4.touchTimeout);
        }

        _this4.touchTimeout = setTimeout(function (event) {
          return _this4.cycle(event);
        }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
      EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
        return end(event);
      });

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
        return move(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
        return end(event);
      });
    }
  };

  _proto._keydown = function _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    switch (event.key) {
      case ARROW_LEFT_KEY:
        event.preventDefault();
        this.prev();
        break;

      case ARROW_RIGHT_KEY:
        event.preventDefault();
        this.next();
        break;
    }
  };

  _proto._getItemIndex = function _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  };

  _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
    var isNextDirection = direction === DIRECTION_NEXT;
    var isPrevDirection = direction === DIRECTION_PREV;

    var activeIndex = this._getItemIndex(activeElement);

    var lastItemIndex = this._items.length - 1;
    var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    var delta = direction === DIRECTION_PREV ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this._items.length;
    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  };

  _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
    var targetIndex = this._getItemIndex(relatedTarget);

    var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget: relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  };

  _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      var indicators = SelectorEngine.find(SELECTOR_ACTIVE, this._indicatorsElement);

      for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove(CLASS_NAME_ACTIVE$1);
      }

      var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

      if (nextIndicator) {
        nextIndicator.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  };

  _proto._updateInterval = function _updateInterval() {
    var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  };

  _proto._slide = function _slide(direction, element) {
    var _this5 = this;

    var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeElementIndex = this._getItemIndex(activeElement);

    var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

    var nextElementIndex = this._getItemIndex(nextElement);

    var isCycling = Boolean(this._interval);
    var directionalClassName;
    var orderClassName;
    var eventDirectionName;

    if (direction === DIRECTION_NEXT) {
      directionalClassName = CLASS_NAME_START;
      orderClassName = CLASS_NAME_NEXT;
      eventDirectionName = DIRECTION_LEFT;
    } else {
      directionalClassName = CLASS_NAME_END;
      orderClassName = CLASS_NAME_PREV;
      eventDirectionName = DIRECTION_RIGHT;
    }

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$1)) {
      this._isSliding = false;
      return;
    }

    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      var transitionDuration = getTransitionDurationFromElement(activeElement);
      EventHandler.one(activeElement, TRANSITION_END, function () {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$1);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$1, orderClassName, directionalClassName);
        _this5._isSliding = false;
        setTimeout(function () {
          EventHandler.trigger(_this5._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        }, 0);
      });
      emulateTransitionEnd(activeElement, transitionDuration);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$1);
      nextElement.classList.add(CLASS_NAME_ACTIVE$1);
      this._isSliding = false;
      EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    }

    if (isCycling) {
      this.cycle();
    }
  } // Static
  ;

  Carousel.carouselInterface = function carouselInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$2);

    var _config = _extends({}, Default, Manipulator.getDataAttributes(element));

    if (_typeof(config) === 'object') {
      _config = _extends({}, _config, config);
    }

    var action = typeof config === 'string' ? config : _config.slide;

    if (!data) {
      data = new Carousel(element, _config);
    }

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError("No method named \"" + action + "\"");
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  };

  Carousel.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  };

  Carousel.dataApiClickHandler = function dataApiClickHandler(event) {
    var target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

    var slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Data.getData(target, DATA_KEY$2).to(slideIndex);
    }

    event.preventDefault();
  };

  _createClass(Carousel, null, [{
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$2;
    }
  }]);

  return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Data.getData(carousels[i], DATA_KEY$2));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$2];
    $.fn[NAME$2] = Carousel.jQueryInterface;
    $.fn[NAME$2].Constructor = Carousel;

    $.fn[NAME$2].noConflict = function () {
      $.fn[NAME$2] = JQUERY_NO_CONFLICT;
      return Carousel.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'collapse';
var DATA_KEY$3 = 'bs.collapse';
var EVENT_KEY$3 = "." + DATA_KEY$3;
var DATA_API_KEY$3 = '.data-api';
var Default$1 = {
  toggle: true,
  parent: ''
};
var DefaultType$1 = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var EVENT_SHOW = "show" + EVENT_KEY$3;
var EVENT_SHOWN = "shown" + EVENT_KEY$3;
var EVENT_HIDE = "hide" + EVENT_KEY$3;
var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.show, .collapsing';
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Collapse, _BaseComponent);

  function Collapse(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._isTransitioning = false;
    _this._config = _this._getConfig(config);
    _this._triggerArray = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1 + "[href=\"#" + element.id + "\"]," + (SELECTOR_DATA_TOGGLE$1 + "[data-bs-target=\"#" + element.id + "\"]"));
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length) {
        _this._selector = selector;

        _this._triggerArray.push(elem);
      }
    }

    _this._parent = _this._config.parent ? _this._getParent() : null;

    if (!_this._config.parent) {
      _this._addAriaAndCollapsedClass(_this._element, _this._triggerArray);
    }

    if (_this._config.toggle) {
      _this.toggle();
    }

    return _this;
  } // Getters


  var _proto = Collapse.prototype; // Public

  _proto.toggle = function toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.show = function show() {
    var _this2 = this;

    if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    var actives;
    var activesData;

    if (this._parent) {
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
        if (typeof _this2._config.parent === 'string') {
          return elem.getAttribute('data-bs-parent') === _this2._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    var container = SelectorEngine.findOne(this._selector);

    if (actives) {
      var tempActiveData = actives.find(function (elem) {
        return container !== elem;
      });
      activesData = tempActiveData ? Data.getData(tempActiveData, DATA_KEY$3) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.setData(elemActive, DATA_KEY$3, null);
        }
      });
    }

    var dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(function (element) {
        element.classList.remove(CLASS_NAME_COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      _this2._element.style[dimension] = '';

      _this2.setTransitioning(false);

      EventHandler.trigger(_this2._element, EVENT_SHOWN);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = "scroll" + capitalizedDimension;
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
    this._element.style[dimension] = this._element[scrollSize] + "px";
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (startEvent.defaultPrevented) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

    var triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
          trigger.classList.add(CLASS_NAME_COLLAPSED);
          trigger.setAttribute('aria-expanded', false);
        }
      }
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this3.setTransitioning(false);

      _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this3._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(_this3._element, EVENT_HIDDEN);
    };

    this._element.style[dimension] = '';
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.setTransitioning = function setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    this._config = null;
    this._parent = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$1, config);
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME$3, config, DefaultType$1);
    return config;
  };

  _proto._getDimension = function _getDimension() {
    return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
  };

  _proto._getParent = function _getParent() {
    var _this4 = this;

    var parent = this._config.parent;

    if (isElement(parent)) {
      // it's a jQuery object
      if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
        parent = parent[0];
      }
    } else {
      parent = SelectorEngine.findOne(parent);
    }

    var selector = SELECTOR_DATA_TOGGLE$1 + "[data-bs-parent=\"" + parent + "\"]";
    SelectorEngine.find(selector, parent).forEach(function (element) {
      var selected = getElementFromSelector(element);

      _this4._addAriaAndCollapsedClass(selected, [element]);
    });
    return parent;
  };

  _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
    if (!element || !triggerArray.length) {
      return;
    }

    var isOpen = element.classList.contains(CLASS_NAME_SHOW);
    triggerArray.forEach(function (elem) {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static
  ;

  Collapse.collapseInterface = function collapseInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$3);

    var _config = _extends({}, Default$1, Manipulator.getDataAttributes(element), _typeof(config) === 'object' && config ? config : {});

    if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Collapse.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Collapse.collapseInterface(this, config);
    });
  };

  _createClass(Collapse, null, [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$3;
    }
  }]);

  return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }

  var triggerData = Manipulator.getDataAttributes(this);
  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    var data = Data.getData(element, DATA_KEY$3);
    var config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$3];
    $.fn[NAME$3] = Collapse.jQueryInterface;
    $.fn[NAME$3].Constructor = Collapse;

    $.fn[NAME$3].noConflict = function () {
      $.fn[NAME$3] = JQUERY_NO_CONFLICT;
      return Collapse.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$4 = 'dropdown';
var DATA_KEY$4 = 'bs.dropdown';
var EVENT_KEY$4 = "." + DATA_KEY$4;
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY);
var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
var EVENT_CLICK = "click" + EVENT_KEY$4;
var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
var CLASS_NAME_DISABLED = 'disabled';
var CLASS_NAME_SHOW$1 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="dropdown"]';
var SELECTOR_FORM_CHILD = '.dropdown form';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL ? 'right-start' : 'left-start';
var Default$2 = {
  offset: 0,
  flip: true,
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null
};
var DefaultType$2 = {
  offset: '(number|string|function)',
  flip: 'boolean',
  boundary: '(string|element)',
  reference: '(string|element)',
  display: 'string',
  popperConfig: '(null|object)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Dropdown, _BaseComponent);

  function Dropdown(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._popper = null;
    _this._config = _this._getConfig(config);
    _this._menu = _this._getMenuElement();
    _this._inNavbar = _this._detectNavbar();

    _this._addEventListeners();

    return _this;
  } // Getters


  var _proto = Dropdown.prototype; // Public

  _proto.toggle = function toggle() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    var isActive = this._element.classList.contains(CLASS_NAME_SHOW$1);

    Dropdown.clearMenus();

    if (isActive) {
      return;
    }

    this.show();
  };

  _proto.show = function show() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    } // Totally disable Popper for Dropdowns in Navbar


    if (!this._inNavbar) {
      if (typeof !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = this._config.reference; // Check if it's jQuery element

        if (typeof this._config.reference.jquery !== 'undefined') {
          referenceElement = this._config.reference[0];
        }
      }

      this._popper = !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(referenceElement, this._menu, this._getPopperConfig());
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      var _ref;

      (_ref = []).concat.apply(_ref, document.body.children).forEach(function (elem) {
        return EventHandler.on(elem, 'mouseover', null, noop());
      });
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.toggle(CLASS_NAME_SHOW$1);

    this._element.classList.toggle(CLASS_NAME_SHOW$1);

    EventHandler.trigger(parent, EVENT_SHOWN$1, relatedTarget);
  };

  _proto.hide = function hide() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.toggle(CLASS_NAME_SHOW$1);

    this._element.classList.toggle(CLASS_NAME_SHOW$1);

    EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._element, EVENT_KEY$4);
    this._menu = null;

    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  };

  _proto.update = function update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private
  ;

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    EventHandler.on(this._element, EVENT_CLICK, function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this2.toggle();
    });
  };

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
    return config;
  };

  _proto._getMenuElement = function _getMenuElement() {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  };

  _proto._getPlacement = function _getPlacement() {
    var parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  };

  _proto._detectNavbar = function _detectNavbar() {
    return this._element.closest("." + CLASS_NAME_NAVBAR) !== null;
  };

  _proto._getPopperConfig = function _getPopperConfig() {
    var popperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          altBoundary: this._config.flip,
          rootBoundary: this._config.boundary
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      popperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return _extends({}, popperConfig, this._config.popperConfig);
  } // Static
  ;

  Dropdown.dropdownInterface = function dropdownInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$4);

    var _config = _typeof(config) === 'object' ? config : null;

    if (!data) {
      data = new Dropdown(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Dropdown.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Dropdown.dropdownInterface(this, config);
    });
  };

  Dropdown.clearMenus = function clearMenus(event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
      return;
    }

    var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$2);

    for (var i = 0, len = toggles.length; i < len; i++) {
      var parent = Dropdown.getParentFromElement(toggles[i]);
      var context = Data.getData(toggles[i], DATA_KEY$4);
      var relatedTarget = {
        relatedTarget: toggles[i]
      };

      if (event && event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      if (!context) {
        continue;
      }

      var dropdownMenu = context._menu;

      if (!toggles[i].classList.contains(CLASS_NAME_SHOW$1)) {
        continue;
      }

      if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.key === TAB_KEY) && dropdownMenu.contains(event.target)) {
        continue;
      }

      var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

      if (hideEvent.defaultPrevented) {
        continue;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref2;

        (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', null, noop());
        });
      }

      toggles[i].setAttribute('aria-expanded', 'false');

      if (context._popper) {
        context._popper.destroy();
      }

      dropdownMenu.classList.remove(CLASS_NAME_SHOW$1);
      toggles[i].classList.remove(CLASS_NAME_SHOW$1);
      EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
    }
  };

  Dropdown.getParentFromElement = function getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
  };

  Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this);
    var isActive = this.classList.contains(CLASS_NAME_SHOW$1);

    if (event.key === ESCAPE_KEY) {
      var button = this.matches(SELECTOR_DATA_TOGGLE$2) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$2)[0];
      button.focus();
      Dropdown.clearMenus();
      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
      return;
    }

    var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

    if (!items.length) {
      return;
    }

    var index = items.indexOf(event.target); // Up

    if (event.key === ARROW_UP_KEY && index > 0) {
      index--;
    } // Down


    if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
      index++;
    } // index is -1 if the first keydown is an ArrowUp


    index = index === -1 ? 0 : index;
    items[index].focus();
  };

  _createClass(Dropdown, null, [{
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$4;
    }
  }]);

  return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$4, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
  event.preventDefault();
  event.stopPropagation();
  Dropdown.dropdownInterface(this, 'toggle');
});
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
  return e.stopPropagation();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$4];
    $.fn[NAME$4] = Dropdown.jQueryInterface;
    $.fn[NAME$4].Constructor = Dropdown;

    $.fn[NAME$4].noConflict = function () {
      $.fn[NAME$4] = JQUERY_NO_CONFLICT;
      return Dropdown.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'modal';
var DATA_KEY$5 = 'bs.modal';
var EVENT_KEY$5 = "." + DATA_KEY$5;
var DATA_API_KEY$5 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$3 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$3 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
var EVENT_RESIZE = "resize" + EVENT_KEY$5;
var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
var CLASS_NAME_BACKDROP = 'modal-backdrop';
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_SHOW$2 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="modal"]';
var SELECTOR_DATA_DISMISS = '[data-bs-dismiss="modal"]';
var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Modal, _BaseComponent);

  function Modal(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._config = _this._getConfig(config);
    _this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, element);
    _this._backdrop = null;
    _this._isShown = false;
    _this._isBodyOverflowing = false;
    _this._ignoreBackdropClick = false;
    _this._isTransitioning = false;
    _this._scrollbarWidth = 0;
    return _this;
  } // Getters


  var _proto = Modal.prototype; // Public

  _proto.toggle = function toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  _proto.show = function show(relatedTarget) {
    var _this2 = this;

    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (this._element.classList.contains(CLASS_NAME_FADE)) {
      this._isTransitioning = true;
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget: relatedTarget
    });

    if (this._isShown || showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._checkScrollbar();

    this._setScrollbar();

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
      return _this2.hide(event);
    });
    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
      EventHandler.one(_this2._element, EVENT_MOUSEUP_DISMISS, function (event) {
        if (event.target === _this2._element) {
          _this2._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(function () {
      return _this2._showElement(relatedTarget);
    });
  };

  _proto.hide = function hide(event) {
    var _this3 = this;

    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    if (transition) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.off(document, EVENT_FOCUSIN);

    this._element.classList.remove(CLASS_NAME_SHOW$2);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, function (event) {
        return _this3._hideModal(event);
      });
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      this._hideModal();
    }
  };

  _proto.dispose = function dispose() {
    [window, this._element, this._dialog].forEach(function (htmlElement) {
      return EventHandler.off(htmlElement, EVENT_KEY$5);
    });

    _BaseComponent.prototype.dispose.call(this);
    /**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */


    EventHandler.off(document, EVENT_FOCUSIN);
    this._config = null;
    this._dialog = null;
    this._backdrop = null;
    this._isShown = null;
    this._isBodyOverflowing = null;
    this._ignoreBackdropClick = null;
    this._isTransitioning = null;
    this._scrollbarWidth = null;
  };

  _proto.handleUpdate = function handleUpdate() {
    this._adjustDialog();
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$3, config);
    typeCheckConfig(NAME$5, config, DefaultType$3);
    return config;
  };

  _proto._showElement = function _showElement(relatedTarget) {
    var _this4 = this;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (transition) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$2);

    if (this._config.focus) {
      this._enforceFocus();
    }

    var transitionComplete = function transitionComplete() {
      if (_this4._config.focus) {
        _this4._element.focus();
      }

      _this4._isTransitioning = false;
      EventHandler.trigger(_this4._element, EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });
    };

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.one(this._dialog, TRANSITION_END, transitionComplete);
      emulateTransitionEnd(this._dialog, transitionDuration);
    } else {
      transitionComplete();
    }
  };

  _proto._enforceFocus = function _enforceFocus() {
    var _this5 = this;

    EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN, function (event) {
      if (document !== event.target && _this5._element !== event.target && !_this5._element.contains(event.target)) {
        _this5._element.focus();
      }
    });
  };

  _proto._setEscapeEvent = function _setEscapeEvent() {
    var _this6 = this;

    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();

          _this6.hide();
        } else if (!_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
          _this6._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
    }
  };

  _proto._setResizeEvent = function _setResizeEvent() {
    var _this7 = this;

    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, function () {
        return _this7._adjustDialog();
      });
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  };

  _proto._hideModal = function _hideModal() {
    var _this8 = this;

    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._showBackdrop(function () {
      document.body.classList.remove(CLASS_NAME_OPEN);

      _this8._resetAdjustments();

      _this8._resetScrollbar();

      EventHandler.trigger(_this8._element, EVENT_HIDDEN$2);
    });
  };

  _proto._removeBackdrop = function _removeBackdrop() {
    this._backdrop.parentNode.removeChild(this._backdrop);

    this._backdrop = null;
  };

  _proto._showBackdrop = function _showBackdrop(callback) {
    var _this9 = this;

    var animate = this._element.classList.contains(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

    if (this._isShown && this._config.backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP;

      if (animate) {
        this._backdrop.classList.add(animate);
      }

      document.body.appendChild(this._backdrop);
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this9._ignoreBackdropClick) {
          _this9._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this9._config.backdrop === 'static') {
          _this9._triggerBackdropTransition();
        } else {
          _this9.hide();
        }
      });

      if (animate) {
        reflow(this._backdrop);
      }

      this._backdrop.classList.add(CLASS_NAME_SHOW$2);

      if (!animate) {
        callback();
        return;
      }

      var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
      EventHandler.one(this._backdrop, TRANSITION_END, callback);
      emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
    } else if (!this._isShown && this._backdrop) {
      this._backdrop.classList.remove(CLASS_NAME_SHOW$2);

      var callbackRemove = function callbackRemove() {
        _this9._removeBackdrop();

        callback();
      };

      if (this._element.classList.contains(CLASS_NAME_FADE)) {
        var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

        EventHandler.one(this._backdrop, TRANSITION_END, callbackRemove);
        emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
      } else {
        callbackRemove();
      }
    } else {
      callback();
    }
  };

  _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
    var _this10 = this;

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
    EventHandler.off(this._element, TRANSITION_END);
    EventHandler.one(this._element, TRANSITION_END, function () {
      _this10._element.classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        EventHandler.one(_this10._element, TRANSITION_END, function () {
          _this10._element.style.overflowY = '';
        });
        emulateTransitionEnd(_this10._element, modalTransitionDuration);
      }
    });
    emulateTransitionEnd(this._element, modalTransitionDuration);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  ;

  _proto._adjustDialog = function _adjustDialog() {
    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!this._isBodyOverflowing && isModalOverflowing && !isRTL || this._isBodyOverflowing && !isModalOverflowing && isRTL) {
      this._element.style.paddingLeft = this._scrollbarWidth + "px";
    }

    if (this._isBodyOverflowing && !isModalOverflowing && !isRTL || !this._isBodyOverflowing && isModalOverflowing && isRTL) {
      this._element.style.paddingRight = this._scrollbarWidth + "px";
    }
  };

  _proto._resetAdjustments = function _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  };

  _proto._checkScrollbar = function _checkScrollbar() {
    var rect = document.body.getBoundingClientRect();
    this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    this._scrollbarWidth = this._getScrollbarWidth();
  };

  _proto._setScrollbar = function _setScrollbar() {
    var _this11 = this;

    if (this._isBodyOverflowing) {
      // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
      //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
      // Adjust fixed content padding
      SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
        var actualPadding = element.style.paddingRight;
        var calculatedPadding = window.getComputedStyle(element)['padding-right'];
        Manipulator.setDataAttribute(element, 'padding-right', actualPadding);
        element.style.paddingRight = Number.parseFloat(calculatedPadding) + _this11._scrollbarWidth + "px";
      }); // Adjust sticky content margin

      SelectorEngine.find(SELECTOR_STICKY_CONTENT).forEach(function (element) {
        var actualMargin = element.style.marginRight;
        var calculatedMargin = window.getComputedStyle(element)['margin-right'];
        Manipulator.setDataAttribute(element, 'margin-right', actualMargin);
        element.style.marginRight = Number.parseFloat(calculatedMargin) - _this11._scrollbarWidth + "px";
      }); // Adjust body padding

      var actualPadding = document.body.style.paddingRight;
      var calculatedPadding = window.getComputedStyle(document.body)['padding-right'];
      Manipulator.setDataAttribute(document.body, 'padding-right', actualPadding);
      document.body.style.paddingRight = Number.parseFloat(calculatedPadding) + this._scrollbarWidth + "px";
    }

    document.body.classList.add(CLASS_NAME_OPEN);
  };

  _proto._resetScrollbar = function _resetScrollbar() {
    // Restore fixed content padding
    SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
      var padding = Manipulator.getDataAttribute(element, 'padding-right');

      if (typeof padding !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'padding-right');
        element.style.paddingRight = padding;
      }
    }); // Restore sticky content and navbar-toggler margin

    SelectorEngine.find("" + SELECTOR_STICKY_CONTENT).forEach(function (element) {
      var margin = Manipulator.getDataAttribute(element, 'margin-right');

      if (typeof margin !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'margin-right');
        element.style.marginRight = margin;
      }
    }); // Restore body padding

    var padding = Manipulator.getDataAttribute(document.body, 'padding-right');

    if (typeof padding === 'undefined') {
      document.body.style.paddingRight = '';
    } else {
      Manipulator.removeDataAttribute(document.body, 'padding-right');
      document.body.style.paddingRight = padding;
    }
  };

  _proto._getScrollbarWidth = function _getScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  } // Static
  ;

  Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$5);

      var _config = _extends({}, Default$3, Manipulator.getDataAttributes(this), _typeof(config) === 'object' && config ? config : {});

      if (!data) {
        data = new Modal(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](relatedTarget);
      }
    });
  };

  _createClass(Modal, null, [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$5;
    }
  }]);

  return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
  var _this12 = this;

  var target = getElementFromSelector(this);

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$2, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      if (isVisible(_this12)) {
        _this12.focus();
      }
    });
  });
  var data = Data.getData(target, DATA_KEY$5);

  if (!data) {
    var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

    data = new Modal(target, config);
  }

  data.show(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$5];
    $.fn[NAME$5] = Modal.jQueryInterface;
    $.fn[NAME$5].Constructor = Modal;

    $.fn[NAME$5].noConflict = function () {
      $.fn[NAME$5] = JQUERY_NO_CONFLICT;
      return Modal.jQueryInterface;
    };
  }
});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
  var attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if (uriAttrs.has(attrName)) {
      return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attrRegex) {
    return attrRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (attrName.match(regExp[i])) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  var _ref;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var allowlistKeys = Object.keys(allowList);

  var elements = (_ref = []).concat.apply(_ref, createdDocument.body.querySelectorAll('*'));

  var _loop = function _loop(i, len) {
    var _ref2;

    var el = elements[i];
    var elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.parentNode.removeChild(el);
      return "continue";
    }

    var attributeList = (_ref2 = []).concat.apply(_ref2, el.attributes);

    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(function (attr) {
      if (!allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


var NAME$6 = 'tooltip';
var DATA_KEY$6 = 'bs.tooltip';
var EVENT_KEY$6 = "." + DATA_KEY$6;
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$4 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: '(null|array)',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL ? 'right' : 'left'
};
var Default$4 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  container: false,
  fallbackPlacements: null,
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$1 = {
  HIDE: "hide" + EVENT_KEY$6,
  HIDDEN: "hidden" + EVENT_KEY$6,
  SHOW: "show" + EVENT_KEY$6,
  SHOWN: "shown" + EVENT_KEY$6,
  INSERTED: "inserted" + EVENT_KEY$6,
  CLICK: "click" + EVENT_KEY$6,
  FOCUSIN: "focusin" + EVENT_KEY$6,
  FOCUSOUT: "focusout" + EVENT_KEY$6,
  MOUSEENTER: "mouseenter" + EVENT_KEY$6,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$6
};
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$3 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Tooltip, _BaseComponent);

  function Tooltip(element, config) {
    var _this;

    if (typeof !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    _this = _BaseComponent.call(this, element) || this; // private

    _this._isEnabled = true;
    _this._timeout = 0;
    _this._hoverState = '';
    _this._activeTrigger = {};
    _this._popper = null; // Protected

    _this.config = _this._getConfig(config);
    _this.tip = null;

    _this._setListeners();

    return _this;
  } // Getters


  var _proto = Tooltip.prototype; // Public

  _proto.enable = function enable() {
    this._isEnabled = true;
  };

  _proto.disable = function disable() {
    this._isEnabled = false;
  };

  _proto.toggleEnabled = function toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  };

  _proto.toggle = function toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      var dataKey = this.constructor.DATA_KEY;
      var context = Data.getData(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.setData(event.delegateTarget, dataKey, context);
      }

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  };

  _proto.dispose = function dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    EventHandler.off(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

    if (this.tip) {
      this.tip.parentNode.removeChild(this.tip);
    }

    this._isEnabled = null;
    this._timeout = null;
    this._hoverState = null;
    this._activeTrigger = null;

    if (this._popper) {
      this._popper.destroy();
    }

    this._popper = null;
    this.config = null;
    this.tip = null;

    _BaseComponent.prototype.dispose.call(this);
  };

  _proto.show = function show() {
    var _this2 = this;

    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (this.isWithContent() && this._isEnabled) {
      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE$1);
      }

      var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._getContainer();

      Data.setData(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
      }

      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      this._popper = !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._element, tip, this._getPopperConfig(attachment));
      tip.classList.add(CLASS_NAME_SHOW$3);
      var customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop());
        });
      }

      var complete = function complete() {
        var prevHoverState = _this2._hoverState;
        _this2._hoverState = null;
        EventHandler.trigger(_this2._element, _this2.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this2._leave(null, _this2);
        }
      };

      if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
        var transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler.one(this.tip, TRANSITION_END, complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    }
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (!this._popper) {
      return;
    }

    var tip = this.getTipElement();

    var complete = function complete() {
      if (_this3._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      _this3._cleanTipClass();

      _this3._element.removeAttribute('aria-describedby');

      EventHandler.trigger(_this3._element, _this3.constructor.Event.HIDDEN);

      if (_this3._popper) {
        _this3._popper.destroy();

        _this3._popper = null;
      }
    };

    var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      var _ref2;

      (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (element) {
        return EventHandler.off(element, 'mouseover', noop);
      });
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;

    if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
      var transitionDuration = getTransitionDurationFromElement(tip);
      EventHandler.one(tip, TRANSITION_END, complete);
      emulateTransitionEnd(tip, transitionDuration);
    } else {
      complete();
    }

    this._hoverState = '';
  };

  _proto.update = function update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected
  ;

  _proto.isWithContent = function isWithContent() {
    return Boolean(this.getTitle());
  };

  _proto.getTipElement = function getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    var element = document.createElement('div');
    element.innerHTML = this.config.template;
    this.tip = element.children[0];
    return this.tip;
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement();
    this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
    tip.classList.remove(CLASS_NAME_FADE$1, CLASS_NAME_SHOW$3);
  };

  _proto.setElementContent = function setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if (_typeof(content) === 'object' && isElement(content)) {
      if (content.jquery) {
        content = content[0];
      } // content is a DOM node or a jQuery


      if (this.config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.appendChild(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this.config.html) {
      if (this.config.sanitize) {
        content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  };

  _proto.getTitle = function getTitle() {
    var title = this._element.getAttribute('data-bs-original-title');

    if (!title) {
      title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
    }

    return title;
  };

  _proto.updateAttachment = function updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private
  ;

  _proto._getPopperConfig = function _getPopperConfig(attachment) {
    var _this4 = this;

    var flipModifier = {
      name: 'flip',
      options: {
        altBoundary: true
      }
    };

    if (this.config.fallbackPlacements) {
      flipModifier.options.fallbackPlacements = this.config.fallbackPlacements;
    }

    var defaultBsConfig = {
      placement: attachment,
      modifiers: [flipModifier, {
        name: 'preventOverflow',
        options: {
          rootBoundary: this.config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: "." + this.constructor.NAME + "-arrow"
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: function fn(data) {
          return _this4._handlePopperPlacementChange(data);
        }
      }],
      onFirstUpdate: function onFirstUpdate(data) {
        if (data.options.placement !== data.placement) {
          _this4._handlePopperPlacementChange(data);
        }
      }
    };
    return _extends({}, defaultBsConfig, this.config.popperConfig);
  };

  _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(CLASS_PREFIX + "-" + this.updateAttachment(attachment));
  };

  _proto._getContainer = function _getContainer() {
    if (this.config.container === false) {
      return document.body;
    }

    if (isElement(this.config.container)) {
      return this.config.container;
    }

    return SelectorEngine.findOne(this.config.container);
  };

  _proto._getAttachment = function _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  };

  _proto._setListeners = function _setListeners() {
    var _this5 = this;

    var triggers = this.config.trigger.split(' ');
    triggers.forEach(function (trigger) {
      if (trigger === 'click') {
        EventHandler.on(_this5._element, _this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
          return _this5.toggle(event);
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
        var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
        EventHandler.on(_this5._element, eventIn, _this5.config.selector, function (event) {
          return _this5._enter(event);
        });
        EventHandler.on(_this5._element, eventOut, _this5.config.selector, function (event) {
          return _this5._leave(event);
        });
      }
    });

    this._hideModalHandler = function () {
      if (_this5._element) {
        _this5.hide();
      }
    };

    EventHandler.on(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

    if (this.config.selector) {
      this.config = _extends({}, this.config, {
        trigger: 'manual',
        selector: ''
      });
    } else {
      this._fixTitle();
    }
  };

  _proto._fixTitle = function _fixTitle() {
    var title = this._element.getAttribute('title');

    var originalTitleType = _typeof(this._element.getAttribute('data-bs-original-title'));

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  };

  _proto._enter = function _enter(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context.config.delay || !context.config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context.config.delay.show);
  };

  _proto._leave = function _leave(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context.config.delay || !context.config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context.config.delay.hide);
  };

  _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
    for (var trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  };

  _proto._getConfig = function _getConfig(config) {
    var dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(function (dataAttr) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });

    if (config && _typeof(config.container) === 'object' && config.container.jquery) {
      config.container = config.container[0];
    }

    config = _extends({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  };

  _proto._getDelegateConfig = function _getDelegateConfig() {
    var config = {};

    if (this.config) {
      for (var key in this.config) {
        if (this.constructor.Default[key] !== this.config[key]) {
          config[key] = this.config[key];
        }
      }
    }

    return config;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  };

  _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
    var state = popperData.state;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  } // Static
  ;

  Tooltip.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$6);

      var _config = _typeof(config) === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Tooltip, null, [{
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$6;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$6;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$4;
    }
  }]);

  return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$6];
    $.fn[NAME$6] = Tooltip.jQueryInterface;
    $.fn[NAME$6].Constructor = Tooltip;

    $.fn[NAME$6].noConflict = function () {
      $.fn[NAME$6] = JQUERY_NO_CONFLICT;
      return Tooltip.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$7 = 'popover';
var DATA_KEY$7 = 'bs.popover';
var EVENT_KEY$7 = "." + DATA_KEY$7;
var CLASS_PREFIX$1 = 'bs-popover';
var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

var Default$5 = _extends({}, Tooltip.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
});

var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
  content: '(string|element|function)'
});

var Event$2 = {
  HIDE: "hide" + EVENT_KEY$7,
  HIDDEN: "hidden" + EVENT_KEY$7,
  SHOW: "show" + EVENT_KEY$7,
  SHOWN: "shown" + EVENT_KEY$7,
  INSERTED: "inserted" + EVENT_KEY$7,
  CLICK: "click" + EVENT_KEY$7,
  FOCUSIN: "focusin" + EVENT_KEY$7,
  FOCUSOUT: "focusout" + EVENT_KEY$7,
  MOUSEENTER: "mouseenter" + EVENT_KEY$7,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$7
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inheritsLoose(Popover, _Tooltip);

  function Popover() {
    return _Tooltip.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype; // Overrides

  _proto.isWithContent = function isWithContent() {
    return this.getTitle() || this._getContent();
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement(); // we use append for html objects to maintain js events

    this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

    var content = this._getContent();

    if (typeof content === 'function') {
      content = content.call(this._element);
    }

    this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$4);
  } // Private
  ;

  _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(CLASS_PREFIX$1 + "-" + this.updateAttachment(attachment));
  };

  _proto._getContent = function _getContent() {
    return this._element.getAttribute('data-bs-content') || this.config.content;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  } // Static
  ;

  Popover.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$7);

      var _config = _typeof(config) === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        Data.setData(this, DATA_KEY$7, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Popover, null, [{
    key: "Default",
    // Getters
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$7;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$7;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$7;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$5;
    }
  }]);

  return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$7];
    $.fn[NAME$7] = Popover.jQueryInterface;
    $.fn[NAME$7].Constructor = Popover;

    $.fn[NAME$7].noConflict = function () {
      $.fn[NAME$7] = JQUERY_NO_CONFLICT;
      return Popover.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$8 = 'scrollspy';
var DATA_KEY$8 = 'bs.scrollspy';
var EVENT_KEY$8 = "." + DATA_KEY$8;
var DATA_API_KEY$6 = '.data-api';
var Default$6 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$6 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$2 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(ScrollSpy, _BaseComponent);

  function ScrollSpy(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._scrollElement = element.tagName === 'BODY' ? window : element;
    _this._config = _this._getConfig(config);
    _this._selector = _this._config.target + " " + SELECTOR_NAV_LINKS + ", " + _this._config.target + " " + SELECTOR_LIST_ITEMS + ", " + _this._config.target + " ." + CLASS_NAME_DROPDOWN_ITEM;
    _this._offsets = [];
    _this._targets = [];
    _this._activeTarget = null;
    _this._scrollHeight = 0;
    EventHandler.on(_this._scrollElement, EVENT_SCROLL, function (event) {
      return _this._process(event);
    });

    _this.refresh();

    _this._process();

    return _this;
  } // Getters


  var _proto = ScrollSpy.prototype; // Public

  _proto.refresh = function refresh() {
    var _this2 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    var targets = SelectorEngine.find(this._selector);
    targets.map(function (element) {
      var targetSelector = getSelectorFromElement(element);
      var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        var targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(function (item) {
      return item;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      _this2._offsets.push(item[0]);

      _this2._targets.push(item[1]);
    });
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._scrollElement, EVENT_KEY$8);
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$6, _typeof(config) === 'object' && config ? config : {});

    if (typeof config.target !== 'string' && isElement(config.target)) {
      var id = config.target.id;

      if (!id) {
        id = getUID(NAME$8);
        config.target.id = id;
      }

      config.target = "#" + id;
    }

    typeCheckConfig(NAME$8, config, DefaultType$6);
    return config;
  };

  _proto._getScrollTop = function _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  _proto._getScrollHeight = function _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  _proto._getOffsetHeight = function _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  _proto._process = function _process() {
    var scrollTop = this._getScrollTop() + this._config.offset;

    var scrollHeight = this._getScrollHeight();

    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (var i = this._offsets.length; i--;) {
      var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  };

  _proto._activate = function _activate(target) {
    this._activeTarget = target;

    this._clear();

    var queries = this._selector.split(',').map(function (selector) {
      return selector + "[data-bs-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
    });

    var link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$2);
      link.classList.add(CLASS_NAME_ACTIVE$2);
    } else {
      // Set triggered link as active
      link.classList.add(CLASS_NAME_ACTIVE$2);
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP).forEach(function (listGroup) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).forEach(function (item) {
          return item.classList.add(CLASS_NAME_ACTIVE$2);
        }); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$2);
          });
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  };

  _proto._clear = function _clear() {
    SelectorEngine.find(this._selector).filter(function (node) {
      return node.classList.contains(CLASS_NAME_ACTIVE$2);
    }).forEach(function (node) {
      return node.classList.remove(CLASS_NAME_ACTIVE$2);
    });
  } // Static
  ;

  ScrollSpy.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$8);

      var _config = _typeof(config) === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(ScrollSpy, null, [{
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$8;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$8];
    $.fn[NAME$8] = ScrollSpy.jQueryInterface;
    $.fn[NAME$8].Constructor = ScrollSpy;

    $.fn[NAME$8].noConflict = function () {
      $.fn[NAME$8] = JQUERY_NO_CONFLICT;
      return ScrollSpy.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'tab';
var DATA_KEY$9 = 'bs.tab';
var EVENT_KEY$9 = "." + DATA_KEY$9;
var DATA_API_KEY$7 = '.data-api';
var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE$3 = 'active';
var CLASS_NAME_DISABLED$1 = 'disabled';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Tab, _BaseComponent);

  function Tab() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype; // Public

  _proto.show = function show() {
    var _this = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE$3) || this._element.classList.contains(CLASS_NAME_DISABLED$1)) {
      return;
    }

    var previous;
    var target = getElementFromSelector(this._element);

    var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP$1);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$1;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    var hideEvent = null;

    if (previous) {
      hideEvent = EventHandler.trigger(previous, EVENT_HIDE$3, {
        relatedTarget: this._element
      });
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    var complete = function complete() {
      EventHandler.trigger(previous, EVENT_HIDDEN$3, {
        relatedTarget: _this._element
      });
      EventHandler.trigger(_this._element, EVENT_SHOWN$3, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private
  ;

  _proto._activate = function _activate(element, container, callback) {
    var _this2 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE$1);
    var active = activeElements[0];
    var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$3);

    var complete = function complete() {
      return _this2._transitionComplete(element, active, callback);
    };

    if (active && isTransitioning) {
      var transitionDuration = getTransitionDurationFromElement(active);
      active.classList.remove(CLASS_NAME_SHOW$5);
      EventHandler.one(active, TRANSITION_END, complete);
      emulateTransitionEnd(active, transitionDuration);
    } else {
      complete();
    }
  };

  _proto._transitionComplete = function _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE$3);
      var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE$3);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE$3);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$3)) {
      element.classList.add(CLASS_NAME_SHOW$5);
    }

    if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      var dropdownElement = element.closest(SELECTOR_DROPDOWN$1);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE$1).forEach(function (dropdown) {
          return dropdown.classList.add(CLASS_NAME_ACTIVE$3);
        });
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static
  ;

  Tab.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$9) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Tab, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY$9;
    }
  }]);

  return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
  event.preventDefault();
  var data = Data.getData(this, DATA_KEY$9) || new Tab(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$9];
    $.fn[NAME$9] = Tab.jQueryInterface;
    $.fn[NAME$9].Constructor = Tab;

    $.fn[NAME$9].noConflict = function () {
      $.fn[NAME$9] = JQUERY_NO_CONFLICT;
      return Tab.jQueryInterface;
    };
  }
});
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'toast';
var DATA_KEY$a = 'bs.toast';
var EVENT_KEY$a = "." + DATA_KEY$a;
var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_HIDE = 'hide';
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType$7 = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default$7 = {
  animation: true,
  autohide: true,
  delay: 5000
};
var SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="toast"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Toast, _BaseComponent);

  function Toast(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._config = _this._getConfig(config);
    _this._timeout = null;

    _this._setListeners();

    return _this;
  } // Getters


  var _proto = Toast.prototype; // Public

  _proto.show = function show() {
    var _this2 = this;

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE$4);
    }

    var complete = function complete() {
      _this2._element.classList.remove(CLASS_NAME_SHOWING);

      _this2._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(_this2._element, EVENT_SHOWN$4);

      if (_this2._config.autohide) {
        _this2._timeout = setTimeout(function () {
          _this2.hide();
        }, _this2._config.delay);
      }
    };

    this._element.classList.remove(CLASS_NAME_HIDE);

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOWING);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (!this._element.classList.contains(CLASS_NAME_SHOW$6)) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var complete = function complete() {
      _this3._element.classList.add(CLASS_NAME_HIDE);

      EventHandler.trigger(_this3._element, EVENT_HIDDEN$4);
    };

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.dispose = function dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW$6)) {
      this._element.classList.remove(CLASS_NAME_SHOW$6);
    }

    EventHandler.off(this._element, EVENT_CLICK_DISMISS$1);

    _BaseComponent.prototype.dispose.call(this);

    this._config = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$7, Manipulator.getDataAttributes(this._element), _typeof(config) === 'object' && config ? config : {});
    typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
    return config;
  };

  _proto._setListeners = function _setListeners() {
    var _this4 = this;

    EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
      return _this4.hide();
    });
  };

  _proto._clearTimeout = function _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static
  ;

  Toast.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$a);

      var _config = _typeof(config) === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](this);
      }
    });
  };

  _createClass(Toast, null, [{
    key: "DefaultType",
    get: function get() {
      return DefaultType$7;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$a;
    }
  }]);

  return Toast;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$a];
    $.fn[NAME$a] = Toast.jQueryInterface;
    $.fn[NAME$a].Constructor = Toast;

    $.fn[NAME$a].noConflict = function () {
      $.fn[NAME$a] = JQUERY_NO_CONFLICT;
      return Toast.jQueryInterface;
    };
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/stylesheets/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./app/javascript/stylesheets/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*!\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); }\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth; } }\nbody {\n  margin: 0;\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-family: var(--bs-font-sans-serif);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25; }\nhr:not([size]) {\n  height: 1px; }\nh1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw); }\n@media (min-width: 1200px) {\n    h1, .h1 {\n      font-size: 2.5rem; } }\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw); }\n@media (min-width: 1200px) {\n    h2, .h2 {\n      font-size: 2rem; } }\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw); }\n@media (min-width: 1200px) {\n    h3, .h3 {\n      font-size: 1.75rem; } }\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw); }\n@media (min-width: 1200px) {\n    h4, .h4 {\n      font-size: 1.5rem; } }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nabbr[title],\nabbr[data-bs-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none; }\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\nol,\nul {\n  padding-left: 2rem; }\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\ndt {\n  font-weight: 700; }\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\nblockquote {\n  margin: 0 0 1rem; }\nb,\nstrong {\n  font-weight: bolder; }\nsmall, .small {\n  font-size: 0.875em; }\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline; }\nsub {\n  bottom: -.25em; }\nsup {\n  top: -.5em; }\na {\n  color: #0d6efd;\n  text-decoration: underline; }\na:hover {\n    color: #0a58ca; }\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none; }\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override; }\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em; }\npre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word; }\na > code {\n    color: inherit; }\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.875em;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\nkbd kbd {\n    padding: 0;\n    font-size: 1em;\n    font-weight: 700; }\nfigure {\n  margin: 0 0 1rem; }\nimg,\nsvg {\n  vertical-align: middle; }\ntable {\n  caption-side: bottom;\n  border-collapse: collapse; }\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left; }\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent; }\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0; }\nlabel {\n  display: inline-block; }\nbutton {\n  border-radius: 0; }\nbutton:focus {\n  outline: dotted 1px;\n  outline: -webkit-focus-ring-color auto 5px; }\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\nbutton,\nselect {\n  text-transform: none; }\n[role=\"button\"] {\n  cursor: pointer; }\nselect {\n  word-wrap: normal; }\n[list]::-webkit-calendar-picker-indicator {\n  display: none; }\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\nbutton:not(:disabled),\n  [type=\"button\"]:not(:disabled),\n  [type=\"reset\"]:not(:disabled),\n  [type=\"submit\"]:not(:disabled) {\n    cursor: pointer; }\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\ntextarea {\n  resize: vertical; }\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit; }\n@media (min-width: 1200px) {\n    legend {\n      font-size: 1.5rem; } }\nlegend + * {\n    clear: left; }\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0; }\n::-webkit-inner-spin-button {\n  height: auto; }\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield; }\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n::-webkit-color-swatch-wrapper {\n  padding: 0; }\n::file-selector-button {\n  font: inherit; }\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\noutput {\n  display: inline-block; }\niframe {\n  border: 0; }\nsummary {\n  display: list-item;\n  cursor: pointer; }\nprogress {\n  vertical-align: baseline; }\n[hidden] {\n  display: none !important; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-1 {\n      font-size: 5rem; } }\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-2 {\n      font-size: 4.5rem; } }\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-3 {\n      font-size: 4rem; } }\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-4 {\n      font-size: 3.5rem; } }\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-5 {\n      font-size: 3rem; } }\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2; }\n@media (min-width: 1200px) {\n    .display-6 {\n      font-size: 2.5rem; } }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote > :last-child {\n    margin-bottom: 0; }\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014\\00A0\"; }\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n.figure {\n  display: inline-block; }\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d; }\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl,\n.container-xxl {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: 0.75rem;\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n@media (min-width: 1400px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {\n    max-width: 1320px; } }\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--bs-gutter-y) * -1);\n  margin-right: calc(var(--bs-gutter-x) / -2);\n  margin-left: calc(var(--bs-gutter-x) / -2); }\n.row > * {\n    flex-shrink: 0;\n    width: 100%;\n    max-width: 100%;\n    padding-right: calc(var(--bs-gutter-x) / 2);\n    padding-left: calc(var(--bs-gutter-x) / 2);\n    margin-top: var(--bs-gutter-y); }\n.col {\n  flex: 1 0; }\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto; }\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%; }\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%; }\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.33333%; }\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%; }\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%; }\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.66667%; }\n.col-auto {\n  flex: 0 0 auto;\n  width: auto; }\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333%; }\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66667%; }\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%; }\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333%; }\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66667%; }\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%; }\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333%; }\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66667%; }\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%; }\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333%; }\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66667%; }\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%; }\n.offset-1 {\n  margin-left: 8.33333%; }\n.offset-2 {\n  margin-left: 16.66667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333%; }\n.offset-5 {\n  margin-left: 41.66667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333%; }\n.offset-8 {\n  margin-left: 66.66667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333%; }\n.offset-11 {\n  margin-left: 91.66667%; }\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0; }\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0; }\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem; }\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem; }\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem; }\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem; }\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem; }\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem; }\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem; }\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem; }\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem; }\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem; }\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0; }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; }\n  .g-sm-0,\n  .gx-sm-0 {\n    --bs-gutter-x: 0; }\n  .g-sm-0,\n  .gy-sm-0 {\n    --bs-gutter-y: 0; }\n  .g-sm-1,\n  .gx-sm-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-sm-1,\n  .gy-sm-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-sm-2,\n  .gx-sm-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-sm-2,\n  .gy-sm-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-sm-3,\n  .gx-sm-3 {\n    --bs-gutter-x: 1rem; }\n  .g-sm-3,\n  .gy-sm-3 {\n    --bs-gutter-y: 1rem; }\n  .g-sm-4,\n  .gx-sm-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-sm-4,\n  .gy-sm-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-sm-5,\n  .gx-sm-5 {\n    --bs-gutter-x: 3rem; }\n  .g-sm-5,\n  .gy-sm-5 {\n    --bs-gutter-y: 3rem; } }\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0; }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; }\n  .g-md-0,\n  .gx-md-0 {\n    --bs-gutter-x: 0; }\n  .g-md-0,\n  .gy-md-0 {\n    --bs-gutter-y: 0; }\n  .g-md-1,\n  .gx-md-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-md-1,\n  .gy-md-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-md-2,\n  .gx-md-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-md-2,\n  .gy-md-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-md-3,\n  .gx-md-3 {\n    --bs-gutter-x: 1rem; }\n  .g-md-3,\n  .gy-md-3 {\n    --bs-gutter-y: 1rem; }\n  .g-md-4,\n  .gx-md-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-md-4,\n  .gy-md-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-md-5,\n  .gx-md-5 {\n    --bs-gutter-x: 3rem; }\n  .g-md-5,\n  .gy-md-5 {\n    --bs-gutter-y: 3rem; } }\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0; }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; }\n  .g-lg-0,\n  .gx-lg-0 {\n    --bs-gutter-x: 0; }\n  .g-lg-0,\n  .gy-lg-0 {\n    --bs-gutter-y: 0; }\n  .g-lg-1,\n  .gx-lg-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-lg-1,\n  .gy-lg-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-lg-2,\n  .gx-lg-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-lg-2,\n  .gy-lg-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-lg-3,\n  .gx-lg-3 {\n    --bs-gutter-x: 1rem; }\n  .g-lg-3,\n  .gy-lg-3 {\n    --bs-gutter-y: 1rem; }\n  .g-lg-4,\n  .gx-lg-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-lg-4,\n  .gy-lg-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-lg-5,\n  .gx-lg-5 {\n    --bs-gutter-x: 3rem; }\n  .g-lg-5,\n  .gy-lg-5 {\n    --bs-gutter-y: 3rem; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0; }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; }\n  .g-xl-0,\n  .gx-xl-0 {\n    --bs-gutter-x: 0; }\n  .g-xl-0,\n  .gy-xl-0 {\n    --bs-gutter-y: 0; }\n  .g-xl-1,\n  .gx-xl-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-xl-1,\n  .gy-xl-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-xl-2,\n  .gx-xl-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-xl-2,\n  .gy-xl-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-xl-3,\n  .gx-xl-3 {\n    --bs-gutter-x: 1rem; }\n  .g-xl-3,\n  .gy-xl-3 {\n    --bs-gutter-y: 1rem; }\n  .g-xl-4,\n  .gx-xl-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-xl-4,\n  .gy-xl-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-xl-5,\n  .gx-xl-5 {\n    --bs-gutter-x: 3rem; }\n  .g-xl-5,\n  .gy-xl-5 {\n    --bs-gutter-y: 3rem; } }\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0; }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-xxl-0 {\n    margin-left: 0; }\n  .offset-xxl-1 {\n    margin-left: 8.33333%; }\n  .offset-xxl-2 {\n    margin-left: 16.66667%; }\n  .offset-xxl-3 {\n    margin-left: 25%; }\n  .offset-xxl-4 {\n    margin-left: 33.33333%; }\n  .offset-xxl-5 {\n    margin-left: 41.66667%; }\n  .offset-xxl-6 {\n    margin-left: 50%; }\n  .offset-xxl-7 {\n    margin-left: 58.33333%; }\n  .offset-xxl-8 {\n    margin-left: 66.66667%; }\n  .offset-xxl-9 {\n    margin-left: 75%; }\n  .offset-xxl-10 {\n    margin-left: 83.33333%; }\n  .offset-xxl-11 {\n    margin-left: 91.66667%; }\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --bs-gutter-x: 0; }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --bs-gutter-y: 0; }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --bs-gutter-x: 1rem; }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --bs-gutter-y: 1rem; }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --bs-gutter-x: 3rem; }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --bs-gutter-y: 3rem; } }\n.table {\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: #212529;\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: #212529;\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: #212529;\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  vertical-align: top;\n  border-color: #dee2e6; }\n.table > :not(caption) > * > * {\n    padding: 0.5rem 0.5rem;\n    background-color: var(--bs-table-bg);\n    background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg));\n    border-bottom-width: 1px; }\n.table > tbody {\n    vertical-align: inherit; }\n.table > thead {\n    vertical-align: bottom; }\n.table > :not(:last-child) > :last-child > * {\n    border-bottom-color: currentColor; }\n.caption-top {\n  caption-side: top; }\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem; }\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0; }\n.table-bordered > :not(caption) > * > * {\n    border-width: 0 1px; }\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0; }\n.table-striped > tbody > tr:nth-of-type(odd) {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color); }\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color); }\n.table-hover > tbody > tr:hover {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color); }\n.table-primary {\n  --bs-table-bg: #cfe2ff;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bacbe6; }\n.table-secondary {\n  --bs-table-bg: #e2e3e5;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #cbccce; }\n.table-success {\n  --bs-table-bg: #d1e7dd;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bcd0c7; }\n.table-info {\n  --bs-table-bg: #cff4fc;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #badce3; }\n.table-warning {\n  --bs-table-bg: #fff3cd;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #e6dbb9; }\n.table-danger {\n  --bs-table-bg: #f8d7da;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfc2c4; }\n.table-light {\n  --bs-table-bg: #f8f9fa;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfe0e1; }\n.table-dark {\n  --bs-table-bg: #212529;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: #fff;\n  border-color: #373b3e; }\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n.form-label {\n  margin-bottom: 0.5rem; }\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem; }\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem; }\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d; }\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n.form-control[type=\"file\"] {\n    overflow: hidden; }\n.form-control[type=\"file\"]:not(:disabled):not([readonly]) {\n      cursor: pointer; }\n.form-control:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.form-control::-webkit-date-and-time-value {\n    height: 1.5em; }\n.form-control::-moz-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n.form-control::file-selector-button {\n    padding: 0.375rem 0.75rem;\n    margin: -0.375rem -0.75rem;\n    -webkit-margin-end: 0.75rem;\n            margin-inline-end: 0.75rem;\n    color: #212529;\n    background-color: #e9ecef;\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: 1px;\n    border-radius: 0;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n      .form-control::file-selector-button {\n        transition: none; } }\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: #dde0e3; }\n.form-control::-webkit-file-upload-button {\n    padding: 0.375rem 0.75rem;\n    margin: -0.375rem -0.75rem;\n    -webkit-margin-end: 0.75rem;\n            margin-inline-end: 0.75rem;\n    color: #212529;\n    background-color: #e9ecef;\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: 1px;\n    border-radius: 0;\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n      .form-control::-webkit-file-upload-button {\n        -webkit-transition: none;\n        transition: none; } }\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n    background-color: #dde0e3; }\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n.form-control-sm::file-selector-button {\n    padding: 0.25rem 0.5rem;\n    margin: -0.25rem -0.5rem;\n    -webkit-margin-end: 0.5rem;\n            margin-inline-end: 0.5rem; }\n.form-control-sm::-webkit-file-upload-button {\n    padding: 0.25rem 0.5rem;\n    margin: -0.25rem -0.5rem;\n    -webkit-margin-end: 0.5rem;\n            margin-inline-end: 0.5rem; }\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n.form-control-lg::file-selector-button {\n    padding: 0.5rem 1rem;\n    margin: -0.5rem -1rem;\n    -webkit-margin-end: 1rem;\n            margin-inline-end: 1rem; }\n.form-control-lg::-webkit-file-upload-button {\n    padding: 0.5rem 1rem;\n    margin: -0.5rem -1rem;\n    -webkit-margin-end: 1rem;\n            margin-inline-end: 1rem; }\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px); }\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px); }\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px); }\n.form-control-color {\n  max-width: 3rem;\n  height: auto;\n  padding: 0.375rem; }\n.form-control-color:not(:disabled):not([readonly]) {\n    cursor: pointer; }\n.form-control-color::-moz-color-swatch {\n    height: 1.5em;\n    border-radius: 0.25rem; }\n.form-control-color::-webkit-color-swatch {\n    height: 1.5em;\n    border-radius: 0.25rem; }\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  vertical-align: middle;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.form-select:focus {\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n    padding-right: 0.75rem;\n    background-image: none; }\n.form-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n.form-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #212529; }\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem; }\n.form-check .form-check-input {\n    float: left;\n    margin-left: -1.5em; }\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .form-check-input {\n      transition: none; } }\n.form-check-input[type=\"checkbox\"] {\n    border-radius: 0.25em; }\n.form-check-input[type=\"radio\"] {\n    border-radius: 50%; }\n.form-check-input:active {\n    filter: brightness(90%); }\n.form-check-input:focus {\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.form-check-input:checked {\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n.form-check-input:checked[type=\"checkbox\"] {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\"); }\n.form-check-input:checked[type=\"radio\"] {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\"); }\n.form-check-input[type=\"checkbox\"]:indeterminate {\n    background-color: #0d6efd;\n    border-color: #0d6efd;\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\"); }\n.form-check-input:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: 0.5; }\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n    opacity: 0.5; }\n.form-switch {\n  padding-left: 2.5em; }\n.form-switch .form-check-input {\n    width: 2em;\n    margin-left: -2.5em;\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n    background-position: left center;\n    border-radius: 2em; }\n.form-switch .form-check-input:focus {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\"); }\n.form-switch .form-check-input:checked {\n      background-position: right center;\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem; }\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n    pointer-events: none;\n    filter: none;\n    opacity: 0.65; }\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.form-range:focus {\n    outline: none; }\n.form-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.form-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.form-range::-moz-focus-outer {\n    border: 0; }\n.form-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #0d6efd;\n    border: 0;\n    border-radius: 1rem;\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -webkit-appearance: none;\n            appearance: none; }\n@media (prefers-reduced-motion: reduce) {\n      .form-range::-webkit-slider-thumb {\n        -webkit-transition: none;\n        transition: none; } }\n.form-range::-webkit-slider-thumb:active {\n      background-color: #b6d4fe; }\n.form-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n.form-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #0d6efd;\n    border: 0;\n    border-radius: 1rem;\n    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -moz-appearance: none;\n         appearance: none; }\n@media (prefers-reduced-motion: reduce) {\n      .form-range::-moz-range-thumb {\n        -moz-transition: none;\n        transition: none; } }\n.form-range::-moz-range-thumb:active {\n      background-color: #b6d4fe; }\n.form-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n.form-range:disabled {\n    pointer-events: none; }\n.form-range:disabled::-webkit-slider-thumb {\n      background-color: #adb5bd; }\n.form-range:disabled::-moz-range-thumb {\n      background-color: #adb5bd; }\n.form-floating {\n  position: relative; }\n.form-floating > .form-control,\n  .form-floating > .form-select {\n    height: calc(3.5rem + 2px);\n    padding: 1rem 0.75rem; }\n.form-floating > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    padding: 1rem 0.75rem;\n    pointer-events: none;\n    border: 1px solid transparent;\n    transform-origin: 0 0;\n    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n      .form-floating > label {\n        transition: none; } }\n.form-floating > .form-control::-moz-placeholder {\n    color: transparent; }\n.form-floating > .form-control:-ms-input-placeholder {\n    color: transparent; }\n.form-floating > .form-control::placeholder {\n    color: transparent; }\n.form-floating > .form-control:not(:-moz-placeholder-shown) {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n.form-floating > .form-control:not(:-ms-input-placeholder) {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n.form-floating > .form-control:-webkit-autofill {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n.form-floating > .form-select {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n.form-floating > .form-control:not(:-ms-input-placeholder) ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n.form-floating > .form-control:focus ~ label,\n  .form-floating > .form-control:not(:placeholder-shown) ~ label,\n  .form-floating > .form-select ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n.form-floating > .form-control:-webkit-autofill ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n.input-group > .form-control,\n  .input-group > .form-select {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; }\n.input-group > .form-control:focus,\n  .input-group > .form-select:focus {\n    z-index: 3; }\n.input-group .btn {\n    position: relative;\n    z-index: 2; }\n.input-group .btn:focus {\n      z-index: 3; }\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 1.75rem; }\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.input-group.has-validation > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754; }\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.25rem; }\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #198754;\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n  padding-right: calc(0.75em + 2.3125rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 1.75rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n    border-color: #198754;\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754; }\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n    background-color: #198754; }\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n    color: #198754; }\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: .5em; }\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545; }\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 1.75rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545; }\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n    background-color: #dc3545; }\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n    color: #dc3545; }\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: .5em; }\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n.btn:hover {\n    color: #212529; }\n.btn-check:focus + .btn, .btn:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.btn:disabled, .btn.disabled,\n  fieldset:disabled .btn {\n    pointer-events: none;\n    opacity: 0.65; }\n.btn-primary {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd; }\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0b5ed7;\n    border-color: #0a58ca; }\n.btn-check:focus + .btn-primary, .btn-primary:focus {\n    color: #fff;\n    background-color: #0b5ed7;\n    border-color: #0a58ca;\n    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5); }\n.btn-check:checked + .btn-primary,\n  .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0a58ca;\n    border-color: #0a53be; }\n.btn-check:checked + .btn-primary:focus,\n    .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5); }\n.btn-primary:disabled, .btn-primary.disabled {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #5c636a;\n    border-color: #565e64; }\n.btn-check:focus + .btn-secondary, .btn-secondary:focus {\n    color: #fff;\n    background-color: #5c636a;\n    border-color: #565e64;\n    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5); }\n.btn-check:checked + .btn-secondary,\n  .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #565e64;\n    border-color: #51585e; }\n.btn-check:checked + .btn-secondary:focus,\n    .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5); }\n.btn-secondary:disabled, .btn-secondary.disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-success {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754; }\n.btn-success:hover {\n    color: #fff;\n    background-color: #157347;\n    border-color: #146c43; }\n.btn-check:focus + .btn-success, .btn-success:focus {\n    color: #fff;\n    background-color: #157347;\n    border-color: #146c43;\n    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5); }\n.btn-check:checked + .btn-success,\n  .btn-check:active + .btn-success, .btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #146c43;\n    border-color: #13653f; }\n.btn-check:checked + .btn-success:focus,\n    .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5); }\n.btn-success:disabled, .btn-success.disabled {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n.btn-info {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0; }\n.btn-info:hover {\n    color: #000;\n    background-color: #31d2f2;\n    border-color: #25cff2; }\n.btn-check:focus + .btn-info, .btn-info:focus {\n    color: #000;\n    background-color: #31d2f2;\n    border-color: #25cff2;\n    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5); }\n.btn-check:checked + .btn-info,\n  .btn-check:active + .btn-info, .btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    color: #000;\n    background-color: #3dd5f3;\n    border-color: #25cff2; }\n.btn-check:checked + .btn-info:focus,\n    .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5); }\n.btn-info:disabled, .btn-info.disabled {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n.btn-warning {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n.btn-warning:hover {\n    color: #000;\n    background-color: #ffca2c;\n    border-color: #ffc720; }\n.btn-check:focus + .btn-warning, .btn-warning:focus {\n    color: #000;\n    background-color: #ffca2c;\n    border-color: #ffc720;\n    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5); }\n.btn-check:checked + .btn-warning,\n  .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #000;\n    background-color: #ffcd39;\n    border-color: #ffc720; }\n.btn-check:checked + .btn-warning:focus,\n    .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5); }\n.btn-warning:disabled, .btn-warning.disabled {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n.btn-danger:hover {\n    color: #fff;\n    background-color: #bb2d3b;\n    border-color: #b02a37; }\n.btn-check:focus + .btn-danger, .btn-danger:focus {\n    color: #fff;\n    background-color: #bb2d3b;\n    border-color: #b02a37;\n    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5); }\n.btn-check:checked + .btn-danger,\n  .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #b02a37;\n    border-color: #a52834; }\n.btn-check:checked + .btn-danger:focus,\n    .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5); }\n.btn-danger:disabled, .btn-danger.disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-light {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-light:hover {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb; }\n.btn-check:focus + .btn-light, .btn-light:focus {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb;\n    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5); }\n.btn-check:checked + .btn-light,\n  .btn-check:active + .btn-light, .btn-light:active, .btn-light.active,\n  .show > .btn-light.dropdown-toggle {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb; }\n.btn-check:checked + .btn-light:focus,\n    .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5); }\n.btn-light:disabled, .btn-light.disabled {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529; }\n.btn-dark:hover {\n    color: #fff;\n    background-color: #1c1f23;\n    border-color: #1a1e21; }\n.btn-check:focus + .btn-dark, .btn-dark:focus {\n    color: #fff;\n    background-color: #1c1f23;\n    border-color: #1a1e21;\n    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5); }\n.btn-check:checked + .btn-dark,\n  .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1a1e21;\n    border-color: #191c1f; }\n.btn-check:checked + .btn-dark:focus,\n    .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5); }\n.btn-dark:disabled, .btn-dark.disabled {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd; }\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5); }\n.btn-check:checked + .btn-outline-primary,\n  .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n.btn-check:checked + .btn-outline-primary:focus,\n    .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5); }\n.btn-outline-primary:disabled, .btn-outline-primary.disabled {\n    color: #0d6efd;\n    background-color: transparent; }\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\n    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5); }\n.btn-check:checked + .btn-outline-secondary,\n  .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-check:checked + .btn-outline-secondary:focus,\n    .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5); }\n.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.btn-outline-success {\n  color: #198754;\n  border-color: #198754; }\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5); }\n.btn-check:checked + .btn-outline-success,\n  .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n.btn-check:checked + .btn-outline-success:focus,\n    .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5); }\n.btn-outline-success:disabled, .btn-outline-success.disabled {\n    color: #198754;\n    background-color: transparent; }\n.btn-outline-info {\n  color: #0dcaf0;\n  border-color: #0dcaf0; }\n.btn-outline-info:hover {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\n    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5); }\n.btn-check:checked + .btn-outline-info,\n  .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n.btn-check:checked + .btn-outline-info:focus,\n    .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5); }\n.btn-outline-info:disabled, .btn-outline-info.disabled {\n    color: #0dcaf0;\n    background-color: transparent; }\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107; }\n.btn-outline-warning:hover {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\n    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5); }\n.btn-check:checked + .btn-outline-warning,\n  .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-check:checked + .btn-outline-warning:focus,\n    .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5); }\n.btn-outline-warning:disabled, .btn-outline-warning.disabled {\n    color: #ffc107;\n    background-color: transparent; }\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545; }\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5); }\n.btn-check:checked + .btn-outline-danger,\n  .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-check:checked + .btn-outline-danger:focus,\n    .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5); }\n.btn-outline-danger:disabled, .btn-outline-danger.disabled {\n    color: #dc3545;\n    background-color: transparent; }\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-outline-light:hover {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\n    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5); }\n.btn-check:checked + .btn-outline-light,\n  .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-check:checked + .btn-outline-light:focus,\n    .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5); }\n.btn-outline-light:disabled, .btn-outline-light.disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n.btn-outline-dark {\n  color: #212529;\n  border-color: #212529; }\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\n    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5); }\n.btn-check:checked + .btn-outline-dark,\n  .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n.btn-check:checked + .btn-outline-dark:focus,\n    .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5); }\n.btn-outline-dark:disabled, .btn-outline-dark.disabled {\n    color: #212529;\n    background-color: transparent; }\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  text-decoration: underline; }\n.btn-link:hover {\n    color: #0a58ca; }\n.btn-link:disabled, .btn-link.disabled {\n    color: #6c757d; }\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n.fade {\n  transition: opacity 0.15s linear; }\n@media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n.fade:not(.show) {\n    opacity: 0; }\n.collapse:not(.show) {\n  display: none; }\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative; }\n.dropdown-toggle {\n  white-space: nowrap; }\n.dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n.dropdown-toggle:empty::after {\n    margin-left: 0; }\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n.dropdown-menu[style] {\n    right: auto !important; }\n.dropdown-menu-start {\n  --bs-position: start;\n  right: auto /* rtl:ignore */;\n  left: 0 /* rtl:ignore */; }\n.dropdown-menu-end {\n  --bs-position: end;\n  right: 0 /* rtl:ignore */;\n  left: auto /* rtl:ignore */; }\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-md-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropend .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropend .dropdown-toggle::after {\n  vertical-align: 0; }\n.dropstart .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n.dropstart .dropdown-toggle::after {\n  display: none; }\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0; }\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.15); }\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n.dropdown-item:hover, .dropdown-item:focus {\n    color: #1e2125;\n    background-color: #f8f9fa; }\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0d6efd; }\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: transparent; }\n.dropdown-menu.show {\n  display: block; }\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529; }\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: rgba(0, 0, 0, 0.15); }\n.dropdown-menu-dark .dropdown-item {\n    color: #dee2e6; }\n.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n      color: #fff;\n      background-color: rgba(255, 255, 255, 0.15); }\n.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n      color: #fff;\n      background-color: #0d6efd; }\n.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n      color: #adb5bd; }\n.dropdown-menu-dark .dropdown-divider {\n    border-color: rgba(0, 0, 0, 0.15); }\n.dropdown-menu-dark .dropdown-item-text {\n    color: #dee2e6; }\n.dropdown-menu-dark .dropdown-header {\n    color: #adb5bd; }\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 1 1 auto; }\n.btn-group > .btn-check:checked + .btn,\n  .btn-group > .btn-check:focus + .btn,\n  .btn-group > .btn:hover,\n  .btn-group > .btn:focus,\n  .btn-group > .btn:active,\n  .btn-group > .btn.active,\n  .btn-group-vertical > .btn-check:checked + .btn,\n  .btn-group-vertical > .btn-check:focus + .btn,\n  .btn-group-vertical > .btn:hover,\n  .btn-group-vertical > .btn:focus,\n  .btn-group-vertical > .btn:active,\n  .btn-group-vertical > .btn.active {\n    z-index: 1; }\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n.btn-toolbar .input-group {\n    width: auto; }\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.btn-group > .btn:nth-child(n + 3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n.dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropend .dropdown-toggle-split::after {\n    margin-left: 0; }\n.dropstart .dropdown-toggle-split::before {\n    margin-right: 0; }\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n.btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n.btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn ~ .btn,\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .nav-link {\n      transition: none; } }\n.nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n.nav-tabs .nav-link {\n    margin-bottom: -1px;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n.nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n.nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd; }\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n.tab-content > .tab-pane {\n  display: none; }\n.tab-content > .active {\n  display: block; }\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n.navbar > .container,\n  .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between; }\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap; }\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-nav .dropdown-menu {\n    position: static; }\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n.navbar-collapse {\n  align-items: center;\n  width: 100%; }\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .navbar-toggler {\n      transition: none; } }\n.navbar-toggler:hover {\n    text-decoration: none; }\n.navbar-toggler:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem; }\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%; }\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xxl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xxl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xxl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xxl .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-xxl .navbar-toggler {\n      display: none; } }\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start; }\n.navbar-expand .navbar-nav {\n    flex-direction: row; }\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n.navbar-expand .navbar-collapse {\n    display: flex !important; }\n.navbar-expand .navbar-toggler {\n    display: none; }\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1); }\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.55); }\n.navbar-light .navbar-text a,\n  .navbar-light .navbar-text a:hover,\n  .navbar-light .navbar-text a:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-dark .navbar-brand {\n  color: #fff; }\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.55); }\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.55);\n  border-color: rgba(255, 255, 255, 0.1); }\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.55); }\n.navbar-dark .navbar-text a,\n  .navbar-dark .navbar-text a:hover,\n  .navbar-dark .navbar-text a:focus {\n    color: #fff; }\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n.card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n.card > .list-group {\n    border-top: inherit;\n    border-bottom: inherit; }\n.card > .list-group:first-child {\n      border-top-width: 0;\n      border-top-left-radius: calc(0.25rem - 1px);\n      border-top-right-radius: calc(0.25rem - 1px); }\n.card > .list-group:last-child {\n      border-bottom-width: 0;\n      border-bottom-right-radius: calc(0.25rem - 1px);\n      border-bottom-left-radius: calc(0.25rem - 1px); }\n.card > .card-header + .list-group,\n  .card > .list-group + .card-footer {\n    border-top: 0; }\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem; }\n.card-title {\n  margin-bottom: 0.5rem; }\n.card-subtitle {\n  margin-top: -0.25rem;\n  margin-bottom: 0; }\n.card-text:last-child {\n  margin-bottom: 0; }\n.card-link:hover {\n  text-decoration: none; }\n.card-link + .card-link {\n  margin-left: 1rem /* rtl:ignore */; }\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n.card-footer {\n  padding: 0.5rem 1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n.card-header-tabs {\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  border-bottom: 0; }\n.card-header-pills {\n  margin-right: -0.5rem;\n  margin-left: -0.5rem; }\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  border-radius: calc(0.25rem - 1px); }\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; }\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n.card-group > .card {\n  margin-bottom: 0.75rem; }\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group > .card {\n      flex: 1 0;\n      margin-bottom: 0; }\n      .card-group > .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group > .card:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-top,\n        .card-group > .card:not(:last-child) .card-header {\n          border-top-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-bottom,\n        .card-group > .card:not(:last-child) .card-footer {\n          border-bottom-right-radius: 0; }\n      .card-group > .card:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-top,\n        .card-group > .card:not(:first-child) .card-header {\n          border-top-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-bottom,\n        .card-group > .card:not(:first-child) .card-footer {\n          border-bottom-left-radius: 0; } }\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  color: #212529;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .accordion-button {\n      transition: none; } }\n.accordion-button.collapsed {\n    border-bottom-width: 0; }\n.accordion-button:not(.collapsed) {\n    color: #0c63e4;\n    background-color: #e7f1ff; }\n.accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n      transform: rotate(180deg); }\n.accordion-button::after {\n    flex-shrink: 0;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-left: auto;\n    content: \"\";\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n    background-repeat: no-repeat;\n    background-size: 1.25rem;\n    transition: transform 0.2s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n      .accordion-button::after {\n        transition: none; } }\n.accordion-button:hover {\n    z-index: 2; }\n.accordion-button:focus {\n    z-index: 3;\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.accordion-header {\n  margin-bottom: 0; }\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-width: 1px;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-width: 1px;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.accordion-collapse {\n  border: solid rgba(0, 0, 0, 0.125);\n  border-width: 0 1px; }\n.accordion-body {\n  padding: 1rem 1.25rem; }\n.accordion-flush .accordion-button {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n.accordion-flush .accordion-collapse {\n  border-width: 0; }\n.accordion-flush .accordion-item:first-of-type .accordion-button {\n  border-top-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-width: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 0;\n  margin-bottom: 1rem;\n  list-style: none; }\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n.breadcrumb-item + .breadcrumb-item::before {\n    float: left;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\";\n    content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */; }\n.breadcrumb-item.active {\n  color: #6c757d; }\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none; }\n.page-link {\n  position: relative;\n  display: block;\n  color: #0d6efd;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .page-link {\n      transition: none; } }\n.page-link:hover {\n    z-index: 2;\n    color: #0a58ca;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n.page-link:focus {\n    z-index: 3;\n    color: #0a58ca;\n    background-color: #e9ecef;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px; }\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd; }\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #dee2e6; }\n.page-link {\n  padding: 0.375rem 0.75rem; }\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem; }\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem; }\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n.badge {\n  display: inline-block;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n.badge:empty {\n    display: none; }\n.btn .badge {\n  position: relative;\n  top: -1px; }\n.alert {\n  position: relative;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.alert-heading {\n  color: inherit; }\n.alert-link {\n  font-weight: 700; }\n.alert-dismissible {\n  padding-right: 3rem; }\n.alert-dismissible .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: 1.25rem 1rem; }\n.alert-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n  border-color: #b6d4fe; }\n.alert-primary .alert-link {\n    color: #06357a; }\n.alert-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n  border-color: #d3d6d8; }\n.alert-secondary .alert-link {\n    color: #34383c; }\n.alert-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n  border-color: #badbcc; }\n.alert-success .alert-link {\n    color: #0c4128; }\n.alert-info {\n  color: #055160;\n  background-color: #cff4fc;\n  border-color: #b6effb; }\n.alert-info .alert-link {\n    color: #04414d; }\n.alert-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n  border-color: #ffecb5; }\n.alert-warning .alert-link {\n    color: #523e02; }\n.alert-danger {\n  color: #842029;\n  background-color: #f8d7da;\n  border-color: #f5c2c7; }\n.alert-danger .alert-link {\n    color: #6a1a21; }\n.alert-light {\n  color: #636464;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n.alert-light .alert-link {\n    color: #4f5050; }\n.alert-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n  border-color: #bcbebf; }\n.alert-dark .alert-link {\n    color: #101214; }\n@-webkit-keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem; } }\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem; } }\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0d6efd;\n  transition: width 0.6s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n          animation: 1s linear infinite progress-bar-stripes; }\n@media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      -webkit-animation: none;\n              animation: none; } }\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem; }\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n.list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n.list-group-item:first-child {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit; }\n.list-group-item:last-child {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit; }\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n.list-group-item + .list-group-item {\n    border-top-width: 0; }\n.list-group-item + .list-group-item.active {\n      margin-top: -1px;\n      border-top-width: 1px; }\n.list-group-horizontal {\n  flex-direction: row; }\n.list-group-horizontal > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n.list-group-horizontal > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; }\n.list-group-horizontal > .list-group-item.active {\n    margin-top: 0; }\n.list-group-horizontal > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0; }\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n      margin-left: -1px;\n      border-left-width: 1px; }\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n    .list-group-horizontal-sm > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n    .list-group-horizontal-md > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-md > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-md > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n    .list-group-horizontal-lg > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n    .list-group-horizontal-xl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row; }\n    .list-group-horizontal-xxl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xxl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xxl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n.list-group-flush {\n  border-radius: 0; }\n.list-group-flush > .list-group-item {\n    border-width: 0 0 1px; }\n.list-group-flush > .list-group-item:last-child {\n      border-bottom-width: 0; }\n.list-group-item-primary {\n  color: #084298;\n  background-color: #cfe2ff; }\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #084298;\n    background-color: #bacbe6; }\n.list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #084298;\n    border-color: #084298; }\n.list-group-item-secondary {\n  color: #41464b;\n  background-color: #e2e3e5; }\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #41464b;\n    background-color: #cbccce; }\n.list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #41464b;\n    border-color: #41464b; }\n.list-group-item-success {\n  color: #0f5132;\n  background-color: #d1e7dd; }\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #0f5132;\n    background-color: #bcd0c7; }\n.list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #0f5132;\n    border-color: #0f5132; }\n.list-group-item-info {\n  color: #055160;\n  background-color: #cff4fc; }\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #055160;\n    background-color: #badce3; }\n.list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #055160;\n    border-color: #055160; }\n.list-group-item-warning {\n  color: #664d03;\n  background-color: #fff3cd; }\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #664d03;\n    background-color: #e6dbb9; }\n.list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #664d03;\n    border-color: #664d03; }\n.list-group-item-danger {\n  color: #842029;\n  background-color: #f8d7da; }\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #842029;\n    background-color: #dfc2c4; }\n.list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #842029;\n    border-color: #842029; }\n.list-group-item-light {\n  color: #636464;\n  background-color: #fefefe; }\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #636464;\n    background-color: #e5e5e5; }\n.list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #636464;\n    border-color: #636464; }\n.list-group-item-dark {\n  color: #141619;\n  background-color: #d3d3d4; }\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #141619;\n    background-color: #bebebf; }\n.list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #141619;\n    border-color: #141619; }\n.btn-close {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5; }\n.btn-close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: 0.75; }\n.btn-close:focus {\n    outline: none;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n    opacity: 1; }\n.btn-close:disabled, .btn-close.disabled {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.25; }\n.btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%); }\n.toast {\n  width: 350px;\n  max-width: 100%;\n  font-size: 0.875rem;\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n.toast:not(.showing):not(.show) {\n    opacity: 0; }\n.toast.hide {\n    display: none; }\n.toast-container {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none; }\n.toast-container > :not(:last-child) {\n    margin-bottom: 0.75rem; }\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.toast-header .btn-close {\n    margin-right: -0.375rem;\n    margin-left: 0.75rem; }\n.toast-body {\n  padding: 0.75rem; }\n.modal-open {\n  overflow: hidden; }\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n.modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -50px); }\n@media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n.modal.show .modal-dialog {\n    transform: none; }\n.modal.modal-static .modal-dialog {\n    transform: scale(1.02); }\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem); }\n.modal-dialog-scrollable .modal-content {\n    max-height: 100%;\n    overflow: hidden; }\n.modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n.modal-backdrop.fade {\n    opacity: 0; }\n.modal-backdrop.show {\n    opacity: 0.5; }\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.modal-header .btn-close {\n    padding: 0.5rem 0.5rem;\n    margin: -0.5rem -0.5rem -0.5rem auto; }\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px); }\n.modal-footer > * {\n    margin: 0.25rem; }\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n  .modal-sm {\n    max-width: 300px; } }\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0; }\n.modal-fullscreen .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0; }\n.modal-fullscreen .modal-header {\n    border-radius: 0; }\n.modal-fullscreen .modal-body {\n    overflow-y: auto; }\n.modal-fullscreen .modal-footer {\n    border-radius: 0; }\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-sm-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-sm-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-sm-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-sm-down .modal-footer {\n      border-radius: 0; } }\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-md-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-md-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-md-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-md-down .modal-footer {\n      border-radius: 0; } }\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-lg-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-lg-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-lg-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-lg-down .modal-footer {\n      border-radius: 0; } }\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-xl-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-xl-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-xl-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-xl-down .modal-footer {\n      border-radius: 0; } }\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-xxl-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-xxl-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-xxl-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-xxl-down .modal-footer {\n      border-radius: 0; } }\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n.tooltip.show {\n    opacity: 0.9; }\n.tooltip .tooltip-arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n.tooltip .tooltip-arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow {\n    bottom: 0; }\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow::before {\n      top: -1px;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow::before {\n      right: -1px;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow {\n    top: 0; }\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow::before {\n      bottom: -1px;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow::before {\n      left: -1px;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n.popover .popover-arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-popover-top, .bs-popover-auto[data-popper-placement^=\"top\"] {\n  margin-bottom: 0.5rem !important; }\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow {\n    bottom: calc(-0.5rem - 1px); }\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n.bs-popover-end, .bs-popover-auto[data-popper-placement^=\"right\"] {\n  margin-left: 0.5rem !important; }\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow {\n    left: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n.bs-popover-bottom, .bs-popover-auto[data-popper-placement^=\"bottom\"] {\n  margin-top: 0.5rem !important; }\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow {\n    top: calc(-0.5rem - 1px); }\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f0f0f0; }\n.bs-popover-start, .bs-popover-auto[data-popper-placement^=\"left\"] {\n  margin-right: 0.5rem !important; }\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow {\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n.popover-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #d8d8d8;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.popover-header:empty {\n    display: none; }\n.popover-body {\n  padding: 1rem 1rem;\n  color: #212529; }\n.carousel {\n  position: relative; }\n.carousel.pointer-event {\n  touch-action: pan-y; }\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n.carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%); }\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%); }\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1; }\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-start,\n    .carousel-fade .active.carousel-item-end {\n      transition: none; } }\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n@media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n.carousel-control-prev {\n  left: 0; }\n.carousel-control-next {\n  right: 0; }\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%; }\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\"); }\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\"); }\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n.carousel-indicators li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: 0.5;\n    transition: opacity 0.6s ease; }\n@media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n.carousel-indicators .active {\n    opacity: 1; }\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center; }\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100); }\n.carousel-dark .carousel-indicators li {\n  background-color: #000; }\n.carousel-dark .carousel-caption {\n  color: #000; }\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */; } }\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */; } }\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: 0.75s linear infinite spinner-border;\n          animation: 0.75s linear infinite spinner-border; }\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: 0.75s linear infinite spinner-grow;\n          animation: 0.75s linear infinite spinner-grow; }\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s; } }\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n.link-primary {\n  color: #0d6efd; }\n.link-primary:hover, .link-primary:focus {\n    color: #0a58ca; }\n.link-secondary {\n  color: #6c757d; }\n.link-secondary:hover, .link-secondary:focus {\n    color: #565e64; }\n.link-success {\n  color: #198754; }\n.link-success:hover, .link-success:focus {\n    color: #146c43; }\n.link-info {\n  color: #0dcaf0; }\n.link-info:hover, .link-info:focus {\n    color: #3dd5f3; }\n.link-warning {\n  color: #ffc107; }\n.link-warning:hover, .link-warning:focus {\n    color: #ffcd39; }\n.link-danger {\n  color: #dc3545; }\n.link-danger:hover, .link-danger:focus {\n    color: #b02a37; }\n.link-light {\n  color: #f8f9fa; }\n.link-light:hover, .link-light:focus {\n    color: #f9fafb; }\n.link-dark {\n  color: #212529; }\n.link-dark:hover, .link-dark:focus {\n    color: #1a1e21; }\n.ratio {\n  position: relative;\n  width: 100%; }\n.ratio::before {\n    display: block;\n    padding-top: var(--aspect-ratio);\n    content: \"\"; }\n.ratio > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.ratio-1x1 {\n  --aspect-ratio: 100%; }\n.ratio-4x3 {\n  --aspect-ratio: calc(3 / 4 * 100%); }\n.ratio-16x9 {\n  --aspect-ratio: calc(9 / 16 * 100%); }\n.ratio-21x9 {\n  --aspect-ratio: calc(9 / 21 * 100%); }\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020; }\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n.visually-hidden,\n.visually-hidden-focusable:not(:focus) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important; }\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\"; }\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.align-baseline {\n  vertical-align: baseline !important; }\n.align-top {\n  vertical-align: top !important; }\n.align-middle {\n  vertical-align: middle !important; }\n.align-bottom {\n  vertical-align: bottom !important; }\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n.align-text-top {\n  vertical-align: text-top !important; }\n.float-start {\n  float: left !important; }\n.float-end {\n  float: right !important; }\n.float-none {\n  float: none !important; }\n.overflow-auto {\n  overflow: auto !important; }\n.overflow-hidden {\n  overflow: hidden !important; }\n.overflow-visible {\n  overflow: visible !important; }\n.overflow-scroll {\n  overflow: scroll !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-grid {\n  display: grid !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: flex !important; }\n.d-inline-flex {\n  display: inline-flex !important; }\n.d-none {\n  display: none !important; }\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n.shadow-none {\n  box-shadow: none !important; }\n.position-static {\n  position: static !important; }\n.position-relative {\n  position: relative !important; }\n.position-absolute {\n  position: absolute !important; }\n.position-fixed {\n  position: fixed !important; }\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n.top-0 {\n  top: 0 !important; }\n.top-50 {\n  top: 50% !important; }\n.top-100 {\n  top: 100% !important; }\n.bottom-0 {\n  bottom: 0 !important; }\n.bottom-50 {\n  bottom: 50% !important; }\n.bottom-100 {\n  bottom: 100% !important; }\n.start-0 {\n  left: 0 !important; }\n.start-50 {\n  left: 50% !important; }\n.start-100 {\n  left: 100% !important; }\n.end-0 {\n  right: 0 !important; }\n.end-50 {\n  right: 50% !important; }\n.end-100 {\n  right: 100% !important; }\n.translate-middle {\n  transform: translate(-50%, -50%) !important; }\n.translate-middle-x {\n  transform: translateX(-50%) !important; }\n.translate-middle-y {\n  transform: translateY(-50%) !important; }\n.border {\n  border: 1px solid #dee2e6 !important; }\n.border-0 {\n  border: 0 !important; }\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n.border-top-0 {\n  border-top: 0 !important; }\n.border-end {\n  border-right: 1px solid #dee2e6 !important; }\n.border-end-0 {\n  border-right: 0 !important; }\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n.border-start {\n  border-left: 1px solid #dee2e6 !important; }\n.border-start-0 {\n  border-left: 0 !important; }\n.border-primary {\n  border-color: #0d6efd !important; }\n.border-secondary {\n  border-color: #6c757d !important; }\n.border-success {\n  border-color: #198754 !important; }\n.border-info {\n  border-color: #0dcaf0 !important; }\n.border-warning {\n  border-color: #ffc107 !important; }\n.border-danger {\n  border-color: #dc3545 !important; }\n.border-light {\n  border-color: #f8f9fa !important; }\n.border-dark {\n  border-color: #212529 !important; }\n.border-white {\n  border-color: #fff !important; }\n.border-0 {\n  border-width: 0 !important; }\n.border-1 {\n  border-width: 1px !important; }\n.border-2 {\n  border-width: 2px !important; }\n.border-3 {\n  border-width: 3px !important; }\n.border-4 {\n  border-width: 4px !important; }\n.border-5 {\n  border-width: 5px !important; }\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.w-auto {\n  width: auto !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.vw-100 {\n  width: 100vw !important; }\n.min-vw-100 {\n  min-width: 100vw !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.h-auto {\n  height: auto !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.vh-100 {\n  height: 100vh !important; }\n.min-vh-100 {\n  min-height: 100vh !important; }\n.flex-fill {\n  flex: 1 1 auto !important; }\n.flex-row {\n  flex-direction: row !important; }\n.flex-column {\n  flex-direction: column !important; }\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n.flex-wrap {\n  flex-wrap: wrap !important; }\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n.gap-0 {\n  grid-gap: 0 !important;\n  gap: 0 !important; }\n.gap-1 {\n  grid-gap: 0.25rem !important;\n  gap: 0.25rem !important; }\n.gap-2 {\n  grid-gap: 0.5rem !important;\n  gap: 0.5rem !important; }\n.gap-3 {\n  grid-gap: 1rem !important;\n  gap: 1rem !important; }\n.gap-4 {\n  grid-gap: 1.5rem !important;\n  gap: 1.5rem !important; }\n.gap-5 {\n  grid-gap: 3rem !important;\n  gap: 3rem !important; }\n.justify-content-start {\n  justify-content: flex-start !important; }\n.justify-content-end {\n  justify-content: flex-end !important; }\n.justify-content-center {\n  justify-content: center !important; }\n.justify-content-between {\n  justify-content: space-between !important; }\n.justify-content-around {\n  justify-content: space-around !important; }\n.justify-content-evenly {\n  justify-content: space-evenly !important; }\n.align-items-start {\n  align-items: flex-start !important; }\n.align-items-end {\n  align-items: flex-end !important; }\n.align-items-center {\n  align-items: center !important; }\n.align-items-baseline {\n  align-items: baseline !important; }\n.align-items-stretch {\n  align-items: stretch !important; }\n.align-content-start {\n  align-content: flex-start !important; }\n.align-content-end {\n  align-content: flex-end !important; }\n.align-content-center {\n  align-content: center !important; }\n.align-content-between {\n  align-content: space-between !important; }\n.align-content-around {\n  align-content: space-around !important; }\n.align-content-stretch {\n  align-content: stretch !important; }\n.align-self-auto {\n  align-self: auto !important; }\n.align-self-start {\n  align-self: flex-start !important; }\n.align-self-end {\n  align-self: flex-end !important; }\n.align-self-center {\n  align-self: center !important; }\n.align-self-baseline {\n  align-self: baseline !important; }\n.align-self-stretch {\n  align-self: stretch !important; }\n.order-first {\n  order: -1 !important; }\n.order-0 {\n  order: 0 !important; }\n.order-1 {\n  order: 1 !important; }\n.order-2 {\n  order: 2 !important; }\n.order-3 {\n  order: 3 !important; }\n.order-4 {\n  order: 4 !important; }\n.order-5 {\n  order: 5 !important; }\n.order-last {\n  order: 6 !important; }\n.m-0 {\n  margin: 0 !important; }\n.m-1 {\n  margin: 0.25rem !important; }\n.m-2 {\n  margin: 0.5rem !important; }\n.m-3 {\n  margin: 1rem !important; }\n.m-4 {\n  margin: 1.5rem !important; }\n.m-5 {\n  margin: 3rem !important; }\n.m-auto {\n  margin: auto !important; }\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important; }\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important; }\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important; }\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important; }\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important; }\n.mt-0 {\n  margin-top: 0 !important; }\n.mt-1 {\n  margin-top: 0.25rem !important; }\n.mt-2 {\n  margin-top: 0.5rem !important; }\n.mt-3 {\n  margin-top: 1rem !important; }\n.mt-4 {\n  margin-top: 1.5rem !important; }\n.mt-5 {\n  margin-top: 3rem !important; }\n.mt-auto {\n  margin-top: auto !important; }\n.me-0 {\n  margin-right: 0 !important; }\n.me-1 {\n  margin-right: 0.25rem !important; }\n.me-2 {\n  margin-right: 0.5rem !important; }\n.me-3 {\n  margin-right: 1rem !important; }\n.me-4 {\n  margin-right: 1.5rem !important; }\n.me-5 {\n  margin-right: 3rem !important; }\n.me-auto {\n  margin-right: auto !important; }\n.mb-0 {\n  margin-bottom: 0 !important; }\n.mb-1 {\n  margin-bottom: 0.25rem !important; }\n.mb-2 {\n  margin-bottom: 0.5rem !important; }\n.mb-3 {\n  margin-bottom: 1rem !important; }\n.mb-4 {\n  margin-bottom: 1.5rem !important; }\n.mb-5 {\n  margin-bottom: 3rem !important; }\n.mb-auto {\n  margin-bottom: auto !important; }\n.ms-0 {\n  margin-left: 0 !important; }\n.ms-1 {\n  margin-left: 0.25rem !important; }\n.ms-2 {\n  margin-left: 0.5rem !important; }\n.ms-3 {\n  margin-left: 1rem !important; }\n.ms-4 {\n  margin-left: 1.5rem !important; }\n.ms-5 {\n  margin-left: 3rem !important; }\n.ms-auto {\n  margin-left: auto !important; }\n.p-0 {\n  padding: 0 !important; }\n.p-1 {\n  padding: 0.25rem !important; }\n.p-2 {\n  padding: 0.5rem !important; }\n.p-3 {\n  padding: 1rem !important; }\n.p-4 {\n  padding: 1.5rem !important; }\n.p-5 {\n  padding: 3rem !important; }\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important; }\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important; }\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important; }\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important; }\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n.pt-0 {\n  padding-top: 0 !important; }\n.pt-1 {\n  padding-top: 0.25rem !important; }\n.pt-2 {\n  padding-top: 0.5rem !important; }\n.pt-3 {\n  padding-top: 1rem !important; }\n.pt-4 {\n  padding-top: 1.5rem !important; }\n.pt-5 {\n  padding-top: 3rem !important; }\n.pe-0 {\n  padding-right: 0 !important; }\n.pe-1 {\n  padding-right: 0.25rem !important; }\n.pe-2 {\n  padding-right: 0.5rem !important; }\n.pe-3 {\n  padding-right: 1rem !important; }\n.pe-4 {\n  padding-right: 1.5rem !important; }\n.pe-5 {\n  padding-right: 3rem !important; }\n.pb-0 {\n  padding-bottom: 0 !important; }\n.pb-1 {\n  padding-bottom: 0.25rem !important; }\n.pb-2 {\n  padding-bottom: 0.5rem !important; }\n.pb-3 {\n  padding-bottom: 1rem !important; }\n.pb-4 {\n  padding-bottom: 1.5rem !important; }\n.pb-5 {\n  padding-bottom: 3rem !important; }\n.ps-0 {\n  padding-left: 0 !important; }\n.ps-1 {\n  padding-left: 0.25rem !important; }\n.ps-2 {\n  padding-left: 0.5rem !important; }\n.ps-3 {\n  padding-left: 1rem !important; }\n.ps-4 {\n  padding-left: 1.5rem !important; }\n.ps-5 {\n  padding-left: 3rem !important; }\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important; }\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important; }\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important; }\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important; }\n.fs-5 {\n  font-size: 1.25rem !important; }\n.fs-6 {\n  font-size: 1rem !important; }\n.fst-italic {\n  font-style: italic !important; }\n.fst-normal {\n  font-style: normal !important; }\n.fw-light {\n  font-weight: 300 !important; }\n.fw-lighter {\n  font-weight: lighter !important; }\n.fw-normal {\n  font-weight: 400 !important; }\n.fw-bold {\n  font-weight: 700 !important; }\n.fw-bolder {\n  font-weight: bolder !important; }\n.text-lowercase {\n  text-transform: lowercase !important; }\n.text-uppercase {\n  text-transform: uppercase !important; }\n.text-capitalize {\n  text-transform: capitalize !important; }\n.text-start {\n  text-align: left !important; }\n.text-end {\n  text-align: right !important; }\n.text-center {\n  text-align: center !important; }\n.text-primary {\n  color: #0d6efd !important; }\n.text-secondary {\n  color: #6c757d !important; }\n.text-success {\n  color: #198754 !important; }\n.text-info {\n  color: #0dcaf0 !important; }\n.text-warning {\n  color: #ffc107 !important; }\n.text-danger {\n  color: #dc3545 !important; }\n.text-light {\n  color: #f8f9fa !important; }\n.text-dark {\n  color: #212529 !important; }\n.text-white {\n  color: #fff !important; }\n.text-body {\n  color: #212529 !important; }\n.text-muted {\n  color: #6c757d !important; }\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n.text-reset {\n  color: inherit !important; }\n.lh-1 {\n  line-height: 1 !important; }\n.lh-sm {\n  line-height: 1.25 !important; }\n.lh-base {\n  line-height: 1.5 !important; }\n.lh-lg {\n  line-height: 2 !important; }\n.bg-primary {\n  background-color: #0d6efd !important; }\n.bg-secondary {\n  background-color: #6c757d !important; }\n.bg-success {\n  background-color: #198754 !important; }\n.bg-info {\n  background-color: #0dcaf0 !important; }\n.bg-warning {\n  background-color: #ffc107 !important; }\n.bg-danger {\n  background-color: #dc3545 !important; }\n.bg-light {\n  background-color: #f8f9fa !important; }\n.bg-dark {\n  background-color: #212529 !important; }\n.bg-body {\n  background-color: #fff !important; }\n.bg-white {\n  background-color: #fff !important; }\n.bg-transparent {\n  background-color: transparent !important; }\n.bg-gradient {\n  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;\n  background-image: var(--bs-gradient) !important; }\n.text-wrap {\n  white-space: normal !important; }\n.text-nowrap {\n  white-space: nowrap !important; }\n.text-decoration-none {\n  text-decoration: none !important; }\n.text-decoration-underline {\n  text-decoration: underline !important; }\n.text-decoration-line-through {\n  text-decoration: line-through !important; }\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important; }\n/* rtl:end:remove */\n.font-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n  font-family: var(--bs-font-monospace) !important; }\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n      -ms-user-select: all !important;\n          user-select: all !important; }\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important; }\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n.pe-none {\n  pointer-events: none !important; }\n.pe-auto {\n  pointer-events: auto !important; }\n.rounded {\n  border-radius: 0.25rem !important; }\n.rounded-0 {\n  border-radius: 0 !important; }\n.rounded-1 {\n  border-radius: 0.2rem !important; }\n.rounded-2 {\n  border-radius: 0.25rem !important; }\n.rounded-3 {\n  border-radius: 0.3rem !important; }\n.rounded-circle {\n  border-radius: 50% !important; }\n.rounded-pill {\n  border-radius: 50rem !important; }\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n.rounded-end {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-start {\n  border-bottom-left-radius: 0.25rem !important;\n  border-top-left-radius: 0.25rem !important; }\n.visible {\n  visibility: visible !important; }\n.invisible {\n  visibility: hidden !important; }\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important; }\n  .float-sm-end {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-grid {\n    display: grid !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; }\n  .d-sm-none {\n    display: none !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-sm-0 {\n    grid-gap: 0 !important;\n    gap: 0 !important; }\n  .gap-sm-1 {\n    grid-gap: 0.25rem !important;\n    gap: 0.25rem !important; }\n  .gap-sm-2 {\n    grid-gap: 0.5rem !important;\n    gap: 0.5rem !important; }\n  .gap-sm-3 {\n    grid-gap: 1rem !important;\n    gap: 1rem !important; }\n  .gap-sm-4 {\n    grid-gap: 1.5rem !important;\n    gap: 1.5rem !important; }\n  .gap-sm-5 {\n    grid-gap: 3rem !important;\n    gap: 3rem !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; }\n  .order-sm-first {\n    order: -1 !important; }\n  .order-sm-0 {\n    order: 0 !important; }\n  .order-sm-1 {\n    order: 1 !important; }\n  .order-sm-2 {\n    order: 2 !important; }\n  .order-sm-3 {\n    order: 3 !important; }\n  .order-sm-4 {\n    order: 4 !important; }\n  .order-sm-5 {\n    order: 5 !important; }\n  .order-sm-last {\n    order: 6 !important; }\n  .m-sm-0 {\n    margin: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-sm-0 {\n    margin-top: 0 !important; }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mt-sm-3 {\n    margin-top: 1rem !important; }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mt-sm-5 {\n    margin-top: 3rem !important; }\n  .mt-sm-auto {\n    margin-top: auto !important; }\n  .me-sm-0 {\n    margin-right: 0 !important; }\n  .me-sm-1 {\n    margin-right: 0.25rem !important; }\n  .me-sm-2 {\n    margin-right: 0.5rem !important; }\n  .me-sm-3 {\n    margin-right: 1rem !important; }\n  .me-sm-4 {\n    margin-right: 1.5rem !important; }\n  .me-sm-5 {\n    margin-right: 3rem !important; }\n  .me-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-0 {\n    margin-bottom: 0 !important; }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important; }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important; }\n  .mb-sm-auto {\n    margin-bottom: auto !important; }\n  .ms-sm-0 {\n    margin-left: 0 !important; }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important; }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important; }\n  .ms-sm-3 {\n    margin-left: 1rem !important; }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important; }\n  .ms-sm-5 {\n    margin-left: 3rem !important; }\n  .ms-sm-auto {\n    margin-left: auto !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-sm-0 {\n    padding-top: 0 !important; }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pt-sm-3 {\n    padding-top: 1rem !important; }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pt-sm-5 {\n    padding-top: 3rem !important; }\n  .pe-sm-0 {\n    padding-right: 0 !important; }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pe-sm-3 {\n    padding-right: 1rem !important; }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pe-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-0 {\n    padding-bottom: 0 !important; }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important; }\n  .ps-sm-0 {\n    padding-left: 0 !important; }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important; }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important; }\n  .ps-sm-3 {\n    padding-left: 1rem !important; }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important; }\n  .ps-sm-5 {\n    padding-left: 3rem !important; }\n  .text-sm-start {\n    text-align: left !important; }\n  .text-sm-end {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important; }\n  .float-md-end {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-grid {\n    display: grid !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; }\n  .d-md-none {\n    display: none !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-md-0 {\n    grid-gap: 0 !important;\n    gap: 0 !important; }\n  .gap-md-1 {\n    grid-gap: 0.25rem !important;\n    gap: 0.25rem !important; }\n  .gap-md-2 {\n    grid-gap: 0.5rem !important;\n    gap: 0.5rem !important; }\n  .gap-md-3 {\n    grid-gap: 1rem !important;\n    gap: 1rem !important; }\n  .gap-md-4 {\n    grid-gap: 1.5rem !important;\n    gap: 1.5rem !important; }\n  .gap-md-5 {\n    grid-gap: 3rem !important;\n    gap: 3rem !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; }\n  .order-md-first {\n    order: -1 !important; }\n  .order-md-0 {\n    order: 0 !important; }\n  .order-md-1 {\n    order: 1 !important; }\n  .order-md-2 {\n    order: 2 !important; }\n  .order-md-3 {\n    order: 3 !important; }\n  .order-md-4 {\n    order: 4 !important; }\n  .order-md-5 {\n    order: 5 !important; }\n  .order-md-last {\n    order: 6 !important; }\n  .m-md-0 {\n    margin: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-md-0 {\n    margin-top: 0 !important; }\n  .mt-md-1 {\n    margin-top: 0.25rem !important; }\n  .mt-md-2 {\n    margin-top: 0.5rem !important; }\n  .mt-md-3 {\n    margin-top: 1rem !important; }\n  .mt-md-4 {\n    margin-top: 1.5rem !important; }\n  .mt-md-5 {\n    margin-top: 3rem !important; }\n  .mt-md-auto {\n    margin-top: auto !important; }\n  .me-md-0 {\n    margin-right: 0 !important; }\n  .me-md-1 {\n    margin-right: 0.25rem !important; }\n  .me-md-2 {\n    margin-right: 0.5rem !important; }\n  .me-md-3 {\n    margin-right: 1rem !important; }\n  .me-md-4 {\n    margin-right: 1.5rem !important; }\n  .me-md-5 {\n    margin-right: 3rem !important; }\n  .me-md-auto {\n    margin-right: auto !important; }\n  .mb-md-0 {\n    margin-bottom: 0 !important; }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-md-3 {\n    margin-bottom: 1rem !important; }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-md-5 {\n    margin-bottom: 3rem !important; }\n  .mb-md-auto {\n    margin-bottom: auto !important; }\n  .ms-md-0 {\n    margin-left: 0 !important; }\n  .ms-md-1 {\n    margin-left: 0.25rem !important; }\n  .ms-md-2 {\n    margin-left: 0.5rem !important; }\n  .ms-md-3 {\n    margin-left: 1rem !important; }\n  .ms-md-4 {\n    margin-left: 1.5rem !important; }\n  .ms-md-5 {\n    margin-left: 3rem !important; }\n  .ms-md-auto {\n    margin-left: auto !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-md-0 {\n    padding-top: 0 !important; }\n  .pt-md-1 {\n    padding-top: 0.25rem !important; }\n  .pt-md-2 {\n    padding-top: 0.5rem !important; }\n  .pt-md-3 {\n    padding-top: 1rem !important; }\n  .pt-md-4 {\n    padding-top: 1.5rem !important; }\n  .pt-md-5 {\n    padding-top: 3rem !important; }\n  .pe-md-0 {\n    padding-right: 0 !important; }\n  .pe-md-1 {\n    padding-right: 0.25rem !important; }\n  .pe-md-2 {\n    padding-right: 0.5rem !important; }\n  .pe-md-3 {\n    padding-right: 1rem !important; }\n  .pe-md-4 {\n    padding-right: 1.5rem !important; }\n  .pe-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-0 {\n    padding-bottom: 0 !important; }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-md-3 {\n    padding-bottom: 1rem !important; }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-md-5 {\n    padding-bottom: 3rem !important; }\n  .ps-md-0 {\n    padding-left: 0 !important; }\n  .ps-md-1 {\n    padding-left: 0.25rem !important; }\n  .ps-md-2 {\n    padding-left: 0.5rem !important; }\n  .ps-md-3 {\n    padding-left: 1rem !important; }\n  .ps-md-4 {\n    padding-left: 1.5rem !important; }\n  .ps-md-5 {\n    padding-left: 3rem !important; }\n  .text-md-start {\n    text-align: left !important; }\n  .text-md-end {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important; }\n  .float-lg-end {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-grid {\n    display: grid !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; }\n  .d-lg-none {\n    display: none !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-lg-0 {\n    grid-gap: 0 !important;\n    gap: 0 !important; }\n  .gap-lg-1 {\n    grid-gap: 0.25rem !important;\n    gap: 0.25rem !important; }\n  .gap-lg-2 {\n    grid-gap: 0.5rem !important;\n    gap: 0.5rem !important; }\n  .gap-lg-3 {\n    grid-gap: 1rem !important;\n    gap: 1rem !important; }\n  .gap-lg-4 {\n    grid-gap: 1.5rem !important;\n    gap: 1.5rem !important; }\n  .gap-lg-5 {\n    grid-gap: 3rem !important;\n    gap: 3rem !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; }\n  .order-lg-first {\n    order: -1 !important; }\n  .order-lg-0 {\n    order: 0 !important; }\n  .order-lg-1 {\n    order: 1 !important; }\n  .order-lg-2 {\n    order: 2 !important; }\n  .order-lg-3 {\n    order: 3 !important; }\n  .order-lg-4 {\n    order: 4 !important; }\n  .order-lg-5 {\n    order: 5 !important; }\n  .order-lg-last {\n    order: 6 !important; }\n  .m-lg-0 {\n    margin: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-lg-0 {\n    margin-top: 0 !important; }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mt-lg-3 {\n    margin-top: 1rem !important; }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mt-lg-5 {\n    margin-top: 3rem !important; }\n  .mt-lg-auto {\n    margin-top: auto !important; }\n  .me-lg-0 {\n    margin-right: 0 !important; }\n  .me-lg-1 {\n    margin-right: 0.25rem !important; }\n  .me-lg-2 {\n    margin-right: 0.5rem !important; }\n  .me-lg-3 {\n    margin-right: 1rem !important; }\n  .me-lg-4 {\n    margin-right: 1.5rem !important; }\n  .me-lg-5 {\n    margin-right: 3rem !important; }\n  .me-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-0 {\n    margin-bottom: 0 !important; }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important; }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important; }\n  .mb-lg-auto {\n    margin-bottom: auto !important; }\n  .ms-lg-0 {\n    margin-left: 0 !important; }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important; }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important; }\n  .ms-lg-3 {\n    margin-left: 1rem !important; }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important; }\n  .ms-lg-5 {\n    margin-left: 3rem !important; }\n  .ms-lg-auto {\n    margin-left: auto !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-lg-0 {\n    padding-top: 0 !important; }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pt-lg-3 {\n    padding-top: 1rem !important; }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pt-lg-5 {\n    padding-top: 3rem !important; }\n  .pe-lg-0 {\n    padding-right: 0 !important; }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pe-lg-3 {\n    padding-right: 1rem !important; }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pe-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-0 {\n    padding-bottom: 0 !important; }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important; }\n  .ps-lg-0 {\n    padding-left: 0 !important; }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important; }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important; }\n  .ps-lg-3 {\n    padding-left: 1rem !important; }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important; }\n  .ps-lg-5 {\n    padding-left: 3rem !important; }\n  .text-lg-start {\n    text-align: left !important; }\n  .text-lg-end {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important; }\n  .float-xl-end {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-grid {\n    display: grid !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; }\n  .d-xl-none {\n    display: none !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-xl-0 {\n    grid-gap: 0 !important;\n    gap: 0 !important; }\n  .gap-xl-1 {\n    grid-gap: 0.25rem !important;\n    gap: 0.25rem !important; }\n  .gap-xl-2 {\n    grid-gap: 0.5rem !important;\n    gap: 0.5rem !important; }\n  .gap-xl-3 {\n    grid-gap: 1rem !important;\n    gap: 1rem !important; }\n  .gap-xl-4 {\n    grid-gap: 1.5rem !important;\n    gap: 1.5rem !important; }\n  .gap-xl-5 {\n    grid-gap: 3rem !important;\n    gap: 3rem !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; }\n  .order-xl-first {\n    order: -1 !important; }\n  .order-xl-0 {\n    order: 0 !important; }\n  .order-xl-1 {\n    order: 1 !important; }\n  .order-xl-2 {\n    order: 2 !important; }\n  .order-xl-3 {\n    order: 3 !important; }\n  .order-xl-4 {\n    order: 4 !important; }\n  .order-xl-5 {\n    order: 5 !important; }\n  .order-xl-last {\n    order: 6 !important; }\n  .m-xl-0 {\n    margin: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-xl-0 {\n    margin-top: 0 !important; }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mt-xl-3 {\n    margin-top: 1rem !important; }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mt-xl-5 {\n    margin-top: 3rem !important; }\n  .mt-xl-auto {\n    margin-top: auto !important; }\n  .me-xl-0 {\n    margin-right: 0 !important; }\n  .me-xl-1 {\n    margin-right: 0.25rem !important; }\n  .me-xl-2 {\n    margin-right: 0.5rem !important; }\n  .me-xl-3 {\n    margin-right: 1rem !important; }\n  .me-xl-4 {\n    margin-right: 1.5rem !important; }\n  .me-xl-5 {\n    margin-right: 3rem !important; }\n  .me-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-0 {\n    margin-bottom: 0 !important; }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important; }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important; }\n  .mb-xl-auto {\n    margin-bottom: auto !important; }\n  .ms-xl-0 {\n    margin-left: 0 !important; }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important; }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important; }\n  .ms-xl-3 {\n    margin-left: 1rem !important; }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important; }\n  .ms-xl-5 {\n    margin-left: 3rem !important; }\n  .ms-xl-auto {\n    margin-left: auto !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-xl-0 {\n    padding-top: 0 !important; }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pt-xl-3 {\n    padding-top: 1rem !important; }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pt-xl-5 {\n    padding-top: 3rem !important; }\n  .pe-xl-0 {\n    padding-right: 0 !important; }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pe-xl-3 {\n    padding-right: 1rem !important; }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pe-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-0 {\n    padding-bottom: 0 !important; }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important; }\n  .ps-xl-0 {\n    padding-left: 0 !important; }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important; }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important; }\n  .ps-xl-3 {\n    padding-left: 1rem !important; }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important; }\n  .ps-xl-5 {\n    padding-left: 3rem !important; }\n  .text-xl-start {\n    text-align: left !important; }\n  .text-xl-end {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important; }\n  .float-xxl-end {\n    float: right !important; }\n  .float-xxl-none {\n    float: none !important; }\n  .d-xxl-inline {\n    display: inline !important; }\n  .d-xxl-inline-block {\n    display: inline-block !important; }\n  .d-xxl-block {\n    display: block !important; }\n  .d-xxl-grid {\n    display: grid !important; }\n  .d-xxl-table {\n    display: table !important; }\n  .d-xxl-table-row {\n    display: table-row !important; }\n  .d-xxl-table-cell {\n    display: table-cell !important; }\n  .d-xxl-flex {\n    display: flex !important; }\n  .d-xxl-inline-flex {\n    display: inline-flex !important; }\n  .d-xxl-none {\n    display: none !important; }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xxl-row {\n    flex-direction: row !important; }\n  .flex-xxl-column {\n    flex-direction: column !important; }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-xxl-0 {\n    grid-gap: 0 !important;\n    gap: 0 !important; }\n  .gap-xxl-1 {\n    grid-gap: 0.25rem !important;\n    gap: 0.25rem !important; }\n  .gap-xxl-2 {\n    grid-gap: 0.5rem !important;\n    gap: 0.5rem !important; }\n  .gap-xxl-3 {\n    grid-gap: 1rem !important;\n    gap: 1rem !important; }\n  .gap-xxl-4 {\n    grid-gap: 1.5rem !important;\n    gap: 1.5rem !important; }\n  .gap-xxl-5 {\n    grid-gap: 3rem !important;\n    gap: 3rem !important; }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xxl-center {\n    justify-content: center !important; }\n  .justify-content-xxl-between {\n    justify-content: space-between !important; }\n  .justify-content-xxl-around {\n    justify-content: space-around !important; }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-xxl-start {\n    align-items: flex-start !important; }\n  .align-items-xxl-end {\n    align-items: flex-end !important; }\n  .align-items-xxl-center {\n    align-items: center !important; }\n  .align-items-xxl-baseline {\n    align-items: baseline !important; }\n  .align-items-xxl-stretch {\n    align-items: stretch !important; }\n  .align-content-xxl-start {\n    align-content: flex-start !important; }\n  .align-content-xxl-end {\n    align-content: flex-end !important; }\n  .align-content-xxl-center {\n    align-content: center !important; }\n  .align-content-xxl-between {\n    align-content: space-between !important; }\n  .align-content-xxl-around {\n    align-content: space-around !important; }\n  .align-content-xxl-stretch {\n    align-content: stretch !important; }\n  .align-self-xxl-auto {\n    align-self: auto !important; }\n  .align-self-xxl-start {\n    align-self: flex-start !important; }\n  .align-self-xxl-end {\n    align-self: flex-end !important; }\n  .align-self-xxl-center {\n    align-self: center !important; }\n  .align-self-xxl-baseline {\n    align-self: baseline !important; }\n  .align-self-xxl-stretch {\n    align-self: stretch !important; }\n  .order-xxl-first {\n    order: -1 !important; }\n  .order-xxl-0 {\n    order: 0 !important; }\n  .order-xxl-1 {\n    order: 1 !important; }\n  .order-xxl-2 {\n    order: 2 !important; }\n  .order-xxl-3 {\n    order: 3 !important; }\n  .order-xxl-4 {\n    order: 4 !important; }\n  .order-xxl-5 {\n    order: 5 !important; }\n  .order-xxl-last {\n    order: 6 !important; }\n  .m-xxl-0 {\n    margin: 0 !important; }\n  .m-xxl-1 {\n    margin: 0.25rem !important; }\n  .m-xxl-2 {\n    margin: 0.5rem !important; }\n  .m-xxl-3 {\n    margin: 1rem !important; }\n  .m-xxl-4 {\n    margin: 1.5rem !important; }\n  .m-xxl-5 {\n    margin: 3rem !important; }\n  .m-xxl-auto {\n    margin: auto !important; }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-xxl-0 {\n    margin-top: 0 !important; }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important; }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important; }\n  .mt-xxl-3 {\n    margin-top: 1rem !important; }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important; }\n  .mt-xxl-5 {\n    margin-top: 3rem !important; }\n  .mt-xxl-auto {\n    margin-top: auto !important; }\n  .me-xxl-0 {\n    margin-right: 0 !important; }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important; }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important; }\n  .me-xxl-3 {\n    margin-right: 1rem !important; }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important; }\n  .me-xxl-5 {\n    margin-right: 3rem !important; }\n  .me-xxl-auto {\n    margin-right: auto !important; }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important; }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important; }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important; }\n  .mb-xxl-auto {\n    margin-bottom: auto !important; }\n  .ms-xxl-0 {\n    margin-left: 0 !important; }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important; }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important; }\n  .ms-xxl-3 {\n    margin-left: 1rem !important; }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important; }\n  .ms-xxl-5 {\n    margin-left: 3rem !important; }\n  .ms-xxl-auto {\n    margin-left: auto !important; }\n  .p-xxl-0 {\n    padding: 0 !important; }\n  .p-xxl-1 {\n    padding: 0.25rem !important; }\n  .p-xxl-2 {\n    padding: 0.5rem !important; }\n  .p-xxl-3 {\n    padding: 1rem !important; }\n  .p-xxl-4 {\n    padding: 1.5rem !important; }\n  .p-xxl-5 {\n    padding: 3rem !important; }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-xxl-0 {\n    padding-top: 0 !important; }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important; }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important; }\n  .pt-xxl-3 {\n    padding-top: 1rem !important; }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important; }\n  .pt-xxl-5 {\n    padding-top: 3rem !important; }\n  .pe-xxl-0 {\n    padding-right: 0 !important; }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important; }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important; }\n  .pe-xxl-3 {\n    padding-right: 1rem !important; }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important; }\n  .pe-xxl-5 {\n    padding-right: 3rem !important; }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important; }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important; }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important; }\n  .ps-xxl-0 {\n    padding-left: 0 !important; }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important; }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important; }\n  .ps-xxl-3 {\n    padding-left: 1rem !important; }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important; }\n  .ps-xxl-5 {\n    padding-left: 3rem !important; }\n  .text-xxl-start {\n    text-align: left !important; }\n  .text-xxl-end {\n    text-align: right !important; }\n  .text-xxl-center {\n    text-align: center !important; } }\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important; }\n  .fs-2 {\n    font-size: 2rem !important; }\n  .fs-3 {\n    font-size: 1.75rem !important; }\n  .fs-4 {\n    font-size: 1.5rem !important; }\n  .fs-sm-1 {\n    font-size: 2.5rem !important; }\n  .fs-sm-2 {\n    font-size: 2rem !important; }\n  .fs-sm-3 {\n    font-size: 1.75rem !important; }\n  .fs-sm-4 {\n    font-size: 1.5rem !important; }\n  .fs-md-1 {\n    font-size: 2.5rem !important; }\n  .fs-md-2 {\n    font-size: 2rem !important; }\n  .fs-md-3 {\n    font-size: 1.75rem !important; }\n  .fs-md-4 {\n    font-size: 1.5rem !important; }\n  .fs-lg-1 {\n    font-size: 2.5rem !important; }\n  .fs-lg-2 {\n    font-size: 2rem !important; }\n  .fs-lg-3 {\n    font-size: 1.75rem !important; }\n  .fs-lg-4 {\n    font-size: 1.5rem !important; } }\n@media print {\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-grid {\n    display: grid !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; }\n  .d-print-none {\n    display: none !important; } }\n", "",{"version":3,"sources":["/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/bootstrap.scss","application.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_root.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_reboot.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_variables.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/vendor/_rfs.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_functions.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_border-radius.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_type.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_lists.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_images.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_image.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_containers.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_container.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_breakpoints.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_grid.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_grid.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_tables.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_table-variants.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_labels.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_form-text.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_form-control.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_transition.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_gradients.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_form-select.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_form-check.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_form-range.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_floating-labels.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/forms/_input-group.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_forms.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_buttons.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_buttons.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_transitions.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_dropdown.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_caret.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_button-group.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_nav.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_navbar.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_card.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_accordion.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_breadcrumb.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_pagination.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_pagination.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_badge.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_alert.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_alert.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_progress.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_list-group.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_list-group.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_close.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_toasts.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_modal.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_tooltip.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_reset-text.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_popover.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_carousel.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_clearfix.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/_spinners.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_colored-links.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_ratio.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_position.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_visually-hidden.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_visually-hidden.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_stretched-link.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/helpers/_text-truncation.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_text-truncate.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/mixins/_utilities.scss","/home/welldev/ruby/juniors-practice-with-github/alpha-blog/node_modules/bootstrap/scss/utilities/_api.scss"],"names":[],"mappings":"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;EACE,gCbuJ8D;EatJ9D,mCbsJ8D;EDoE1D,mBAvE+B,EAAA;AehLrC;EACE,mBhBomB4C;EC9WxC,kBAvE+B;Ee3KnC,chBIgB,EAAA;AiBTlB;EACE,cAAc;EACd,WAAW;EACX,yBjBmiBkC;EC/S9B,eAvE+B;EgB1KnC,gBjBgZ+B;EiB/Y/B,gBjBqZ+B;EiBpZ/B,cjBIgB;EiBHhB,sBjBNa;EiBOb,4BAA4B;EAC5B,yBjBJgB;EiBKhB,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EdEd,sBHoVgC;EkBtV9B,wElBopB4F,EAAA;AkBhpB5F;IDhBN;MCiBQ,gBAAgB,EAAA,ED6FvB;AA9GD;IAqBI,gBAAgB,EAAA;AArBpB;MAwBM,eAAe,EAAA;AAxBrB;IA8BI,cjBlBc;IiBmBd,sBjB5BW;IiB6BX,qBfuHiC;IetHjC,UAAU;IAKR,kDjBTW,EAAA;AiB7BjB;IA+CI,aAAmE,EAAA;AA/CvE;IAoDI,cjB3Cc;IiB6Cd,UAAU,EAAA;AAtDd;IAoDI,cjB3Cc;IiB6Cd,UAAU,EAAA;AAtDd;IAoDI,cjB3Cc;IiB6Cd,UAAU,EAAA;AAtDd;IAgEI,yBjB3Dc;IiB8Dd,UAAU,EAAA;AAnEd;IAyEI,yBjB6dgC;IiB5dhC,0BjB4dgC;IiB3dhC,2BjB2dgC;YiB3dhC,0BjB2dgC;IiB1dhC,cjBhEc;ImBbhB,yBnBMgB;IiByEd,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,4BjBoQ6B;IiBnQ7B,gBAAgB;ICvEd,qIlBolB6I,EAAA;AkBhlB7I;MDhBN;QCiBQ,gBAAgB,EAAA,EDoErB;AArFH;IAyFI,yBfmEiC,EAAA;Ae5JrC;IA6FI,yBjBycgC;IiBxchC,0BjBwcgC;IiBvchC,2BjBucgC;YiBvchC,0BjBucgC;IiBtchC,cjBpFc;ImBbhB,yBnBMgB;IiB6Fd,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,4BjBgP6B;IiB/O7B,gBAAgB;IC3Fd,6IlBolB6I;IkBplB7I,qIlBolB6I,EAAA;AkBhlB7I;MDhBN;QCiBQ,wBAAgB;QAAhB,gBAAgB,EAAA,EDwFrB;AAzGH;IA4GI,yBfgDiC,EAAA;AevCrC;EACE,cAAc;EACd,WAAW;EACX,mBAA2B;EAC3B,gBAAgB;EAChB,gBjBkS+B;EiBjS/B,cjB/GgB;EiBgHhB,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmC,EAAA;AATrC;IAaI,gBAAgB;IAChB,eAAe,EAAA;AAWnB;EACE,sCfoC8D;EenC9D,uBjBiaiC;EC1T7B,mBAvE+B;EElKjC,qBHqV+B,EAAA;AiBrNnC;IAQI,uBjB2Z+B;IiB1Z/B,wBjB0Z+B;IiBzZ/B,0BjByZ+B;YiBzZ/B,yBjByZ+B,EAAA;AiBnanC;IAcI,uBjBqZ+B;IiBpZ/B,wBjBoZ+B;IiBnZ/B,0BjBmZ+B;YiBnZ/B,yBjBmZ+B,EAAA;AiB/YnC;EACE,oCfgB8D;Eef9D,oBjBiZgC;EC9T5B,kBAvE+B;EElKjC,qBHsV+B,EAAA;AiBlMnC;IAQI,oBjB2Y8B;IiB1Y9B,qBjB0Y8B;IiBzY9B,wBjByY8B;YiBzY9B,uBjByY8B,EAAA;AiBnZlC;IAcI,oBjBqY8B;IiBpY9B,qBjBoY8B;IiBnY9B,wBjBmY8B;YiBnY9B,uBjBmY8B,EAAA;AiB5XlC;EAEI,uCfR4D,EAAA;AeMhE;EAMI,sCfZ4D,EAAA;AeMhE;EAUI,oCfhB4D,EAAA;AeqBhE;EACE,eAAe;EACf,YAAY;EACZ,iBjB0VmC,EAAA;AiB7VrC;IAMI,eAAe,EAAA;AANnB;IAUI,aAAmE;IdpMnE,sBHoVgC,EAAA;AiB1JpC;IAeI,aAAmE;IdzMnE,sBHoVgC,EAAA;AoBjWpC;EACE,cAAc;EACd,WAAW;EACX,0CpBkiBkC;EC/S9B,eAvE+B;EmBzKnC,gBpB+Y+B;EoB9Y/B,gBpBoZ+B;EoBnZ/B,cpBGgB;EoBFhB,sBAAsB;EACtB,sBpBRa;EoBSb,iPlBoEgF;EkBnEhF,4BAA4B;EAC5B,yCpButBqE;EoBttBrE,0BpButB2C;EoBttB3C,yBpBTgB;EGOd,sBHoVgC;EoB/UlC,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB,EAAA;AAlBlB;IAqBI,qBlBiIiC;IkBhIjC,UAAU;IAKR,kDpBCW,EAAA;AoB5BjB;IAiCI,sBpBogBgC;IoBngBhC,sBAAsB,EAAA;AAlC1B;IAsCI,cpB9Bc;IoB+Bd,yBpBnCc,EAAA;AoBJlB;IA6CI,kBAAkB;IAClB,0BpBnCc,EAAA;AoBuClB;EACE,oBpB4fkC;EoB3flC,uBpB2fkC;EoB1flC,oBpB2fiC;EC1T7B,mBAvE+B,EAAA;AmBtHrC;EACE,mBpByfiC;EoBxfjC,sBpBwfiC;EoBvfjC,kBpBwfgC;EC9T5B,kBAvE+B,EAAA;AoBhLrC;EACE,cAAc;EACd,kBrBkqB2E;EqBjqB3E,mBrBkqBsE;EqBjqBtE,uBrBkqB+C,EAAA;AqBtqBjD;IAOI,WAAW;IACX,mBAA2C,EAAA;AAI/C;EACE,UrBspB2C;EqBrpB3C,WrBqpB2C;EqBppB3C,kBAA6D;EAC7D,mBAAmB;EACnB,sBrBda;EqBeb,4BAA4B;EAC5B,2BAA2B;EAC3B,wBAAwB;EACxB,qCrBypBoE;EqBxpBpE,wBAAgB;KAAhB,qBAAgB;UAAhB,gBAAgB;EAChB,iCAAmB;UAAnB,mBAAmB;EHXf,mJlB6pBuK,EAAA;AkBzpBvK;IGJN;MHKQ,gBAAgB,EAAA,EG0EvB;AA/ED;IlBEI,qBHiqB2C,EAAA;AqBnqB/C;IAoBI,kBrBgpByC,EAAA;AqBpqB7C;IAwBI,uBrBuoBqD,EAAA;AqB/pBzD;IA4BI,qBnB+GiC;ImB9GjC,UAAU;IACV,kDrBba,EAAA;AqBjBjB;IAkCI,yBrBjBa;IqBkBb,qBrBlBa,EAAA;AqBjBjB;MAyCQ,+OnB2B0E,EAAA;AmBpElF;MAiDQ,uJnBmB0E,EAAA;AmBpElF;IAuDI,yBrBtCa;IqBuCb,qBrBvCa;IqB4CX,yOnBO4E,EAAA;AmBpElF;IAkEI,oBAAoB;IACpB,YAAY;IACZ,YrB+mByC,EAAA;AqBnrB7C;IA4EM,YrBumBuC,EAAA;AqBzlB7C;EACE,mBrB8lByD,EAAA;AqB/lB3D;IAII,UrB0lBiC;IqBzlBjC,mBAA4C;IAC5C,wKnB5B8E;ImB6B9E,gCAAgC;IlB/FhC,kBHsrBiC,EAAA;AqB9lBrC;MAWM,0JnBjC4E,EAAA;AmBsBlF;MAeM,iCrBylBwC;MqBplBtC,uJnB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C,qBHqV+B,EAAA;AwBpRnC;;EAEE,sBAAsE,EAAA;AAWxE;;ErB9DI,0BqBkE8B;ErBjE9B,6BqBiE8B,EAAA;AAJlC;;ErB9DI,0BqByE8B;ErBxE9B,6BqBwE8B,EAAA;AAXlC;EAqBI,iBxBqO6B;EG1S7B,yBqBsE8B;ErBrE9B,4BqBqE8B,EAAA;AAF4B;ECnG1D,aAAa;EACb,WAAW;EACX,mBzBslB0C;EC9WxC,kBAvE+B;EwB9JjC,czBkBa,EAAA;AwB4EyB;EC1FtC,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,eAAe;EACf,uBzBggC2C;EyB//B3C,iBAAiB;ExB2Nf,mBAvE+B;EwBjJjC,WzB5BW;EyB6BX,wCzBIa;EGtBb,sBHoVgC,EAAA;AyBlWhC;;;;EAuCE,cAAc,EAAA;AAvChB;EA6CE,qBzBTW;EyBYT,oCvBmIwD;EuBlIxD,4PvB+B0E;EuB9B1E,4BAA4B;EAC5B,2DAA6D;EAC7D,gEvB+HwD,EAAA;AuBnL5D;IAwDI,qBzBpBS;IyBqBT,iDzBrBS,EAAA;AyBpCb;EAkEI,oCvBiHwD;EuBhHxD,kFvBgHwD,EAAA;AuBnL5D;EA0EE,qBzBtCW;EyByCT,uCvBsGwD;EuBrGxD,6dvBE0E;EuBD1E,+DzB4pBsG;EyB3pBtG,2EvBmGwD,EAAA;AuBnL5D;IAoFI,qBzBhDS;IyBiDT,iDzBjDS,EAAA;AyBpCb;EA4FE,qBzBxDW,EAAA;AyBpCb;IA+FI,yBzB3DS,EAAA;AyBpCb;IAmGI,iDzB/DS,EAAA;AyBpCb;IAuGI,czBnES,EAAA;AyBuEf;EAEI,iBAAiB,EAAA;ADGkF;ECnGrG,aAAa;EACb,WAAW;EACX,mBzBslB0C;EC9WxC,kBAvE+B;EwB9JjC,czBea,EAAA;AwB+EkE;EC1F/E,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,eAAe;EACf,uBzBggC2C;EyB//B3C,iBAAiB;ExB2Nf,mBAvE+B;EwBjJjC,WzB5BW;EyB6BX,wCzBCa;EGnBb,sBHoVgC,EAAA;AyBlWhC;;;;EAuCE,cAAc,EAAA;AAvChB;EA6CE,qBzBZW;EyBeT,oCvBmIwD;EuBlIxD,4UvB+B0E;EuB9B1E,4BAA4B;EAC5B,2DAA6D;EAC7D,gEvB+HwD,EAAA;AuBnL5D;IAwDI,qBzBvBS;IyBwBT,iDzBxBS,EAAA;AyBjCb;EAkEI,oCvBiHwD;EuBhHxD,kFvBgHwD,EAAA;AuBnL5D;EA0EE,qBzBzCW;EyB4CT,uCvBsGwD;EuBrGxD,6iBvBE0E;EuBD1E,+DzB4pBsG;EyB3pBtG,2EvBmGwD,EAAA;AuBnL5D;IAoFI,qBzBnDS;IyBoDT,iDzBpDS,EAAA;AyBjCb;EA4FE,qBzB3DW,EAAA;AyBjCb;IA+FI,yBzB9DS,EAAA;AyBjCb;IAmGI,iDzBlES,EAAA;AyBjCb;IAuGI,czBtES,EAAA;AyB0Ef;EAEI,iBAAiB,EAAA;AC7GvB;EACE,qBAAqB;EAErB,gB1BmZ+B;E0BlZ/B,gB1BwZ+B;E0BvZ/B,c1BOgB;E0BNhB,kBAAkB;EAClB,qBAAwD;EAExD,sBAAsB;EACtB,eAA2C;EAC3C,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,6BAA6B;EAC7B,6BAA2C;EC0G3C,yB3B+akC;EC/S9B,eAvE+B;EElKjC,sBHoVgC;EkBtV9B,qIlBolB6I,EAAA;AkBhlB7I;IQhBN;MRiBQ,gBAAgB,EAAA,EQ6BvB;AA9CD;IAkBI,c1BNc,EAAA;A0BUhB;IAEE,UAAU;IACV,kD1BIa,EAAA;A0B7BjB;;IA0CI,oBAAoB;IACpB,a1ByiB6B,EAAA;A0B9hB/B;ECvCA,W3BZa;EmBJb,yBnB8Be;E2BZf,qB3BYe,EAAA;A2BTf;IACE,W3BlBW;ImBJb,yBjB6JmC;IyBrIjC,qBzBqIiC,EAAA;AyBlInC;IAEE,W3BzBW;ImBJb,yBjB6JmC;IyB9HjC,qBzB8HiC;IyBzH/B,iDAAiE,EAAA;AAIrE;;;IAKE,W3BzCW;I2B0CX,yBzB+GiC;IyB5GjC,qBzB4GiC,EAAA;AyBrHnC;;;MAgBM,iDAAiE,EAAA;AAKvE;IAEE,W3B3DW;I2B4DX,yB3BlCa;I2BqCb,qB3BrCa,EAAA;A0ByBf;ECvCA,W3BZa;EmBJb,yBnBUgB;E2BQhB,qB3BRgB,EAAA;A2BWhB;IACE,W3BlBW;ImBJb,yBjB6JmC;IyBrIjC,qBzBqIiC,EAAA;AyBlInC;IAEE,W3BzBW;ImBJb,yBjB6JmC;IyB9HjC,qBzB8HiC;IyBzH/B,kDAAiE,EAAA;AAIrE;;;IAKE,W3BzCW;I2B0CX,yBzB+GiC;IyB5GjC,qBzB4GiC,EAAA;AyBrHnC;;;MAgBM,kDAAiE,EAAA;AAKvE;IAEE,W3B3DW;I2B4DX,yB3BtDc;I2ByDd,qB3BzDc,EAAA;A0B6ChB;ECvCA,W3BZa;EmBJb,yBnBqCe;E2BnBf,qB3BmBe,EAAA;A2BhBf;IACE,W3BlBW;ImBJb,yBjB6JmC;IyBrIjC,qBzBqIiC,EAAA;AyBlInC;IAEE,W3BzBW;ImBJb,yBjB6JmC;IyB9HjC,qBzB8HiC;IyBzH/B,iDAAiE,EAAA;AAIrE;;;IAKE,W3BzCW;I2B0CX,yBzB+GiC;IyB5GjC,qBzB4GiC,EAAA;AyBrHnC;;;MAgBM,iDAAiE,EAAA;AAKvE;IAEE,W3B3DW;I2B4DX,yB3B3Ba;I2B8Bb,qB3B9Ba,EAAA;A0BkBf;ECvCA,W3BFa;EmBdb,yBnBuCe;E2BrBf,qB3BqBe,EAAA;A2BlBf;IACE,W3BRW;ImBdb,yBjBwJmC;IyBhIjC,qBzBgIiC,EAAA;AyB7HnC;IAEE,W3BfW;ImBdb,yBjBwJmC;IyBzHjC,qBzByHiC;IyBpH/B,iDAAiE,EAAA;AAIrE;;;IAKE,W3B/BW;I2BgCX,yBzB0GiC;IyBvGjC,qBzBuGiC,EAAA;AyBhHnC;;;MAgBM,iDAAiE,EAAA;AAKvE;IAEE,W3BjDW;I2BkDX,yB3BzBa;I2B4Bb,qB3B5Ba,EAAA;A0BgBf;ECvCA,W3BFa;EmBdb,yBnBoCe;E2BlBf,qB3BkBe,EAAA;A2Bff;IACE,W3BRW;ImBdb,yBjBwJmC;IyBhIjC,qBzBgIiC,EAAA;AyB7HnC;IAEE,W3BfW;ImBdb,yBjBwJmC;IyBzHjC,qBzByHiC;IyBpH/B,gDAAiE,EAAA;AAIrE;;;IAKE,W3B/BW;I2BgCX,yBzB0GiC;IyBvGjC,qBzBuGiC,EAAA;AyBhHnC;;;MAgBM,gDAAiE,EAAA;AAKvE;IAEE,W3BjDW;I2BkDX,yB3B5Ba;I2B+Bb,qB3B/Ba,EAAA;A0BmBf;ECvCA,W3BZa;EmBJb,yBnBkCe;E2BhBf,qB3BgBe,EAAA;A2Bbf;IACE,W3BlBW;ImBJb,yBjB6JmC;IyBrIjC,qBzBqIiC,EAAA;AyBlInC;IAEE,W3BzBW;ImBJb,yBjB6JmC;IyB9HjC,qBzB8HiC;IyBzH/B,gDAAiE,EAAA;AAIrE;;;IAKE,W3BzCW;I2B0CX,yBzB+GiC;IyB5GjC,qBzB4GiC,EAAA;AyBrHnC;;;MAgBM,gDAAiE,EAAA;AAKvE;IAEE,W3B3DW;I2B4DX,yB3B9Ba;I2BiCb,qB3BjCa,EAAA;A0BqBf;ECvCA,W3BFa;EmBdb,yBnBKgB;E2BahB,qB3BbgB,EAAA;A2BgBhB;IACE,W3BRW;ImBdb,yBjBwJmC;IyBhIjC,qBzBgIiC,EAAA;AyB7HnC;IAEE,W3BfW;ImBdb,yBjBwJmC;IyBzHjC,qBzByHiC;IyBpH/B,kDAAiE,EAAA;AAIrE;;;IAKE,W3B/BW;I2BgCX,yBzB0GiC;IyBvGjC,qBzBuGiC,EAAA;AyBhHnC;;;MAgBM,kDAAiE,EAAA;AAKvE;IAEE,W3BjDW;I2BkDX,yB3B3Dc;I2B8Dd,qB3B9Dc,EAAA;A0BkDhB;ECvCA,W3BZa;EmBJb,yBnBagB;E2BKhB,qB3BLgB,EAAA;A2BQhB;IACE,W3BlBW;ImBJb,yBjB6JmC;IyBrIjC,qBzBqIiC,EAAA;AyBlInC;IAEE,W3BzBW;ImBJb,yBjB6JmC;IyB9HjC,qBzB8HiC;IyBzH/B,+CAAiE,EAAA;AAIrE;;;IAKE,W3BzCW;I2B0CX,yBzB+GiC;IyB5GjC,qBzB4GiC,EAAA;AyBrHnC;;;MAgBM,+CAAiE,EAAA;AAKvE;IAEE,W3B3DW;I2B4DX,yB3BnDc;I2BsDd,qB3BtDc,EAAA;A0BgDhB;ECiBA,c3BhDe;E2BiDf,qB3BjDe,EAAA;A2BmDf;IACE,W3B9EW;I2B+EX,yB3BrDa;I2BsDb,qB3BtDa,EAAA;A2ByDf;IAEE,iD3B3Da,EAAA;A2B8Df;;IAKE,W3B7FW;I2B8FX,yB3BpEa;I2BqEb,qB3BrEa,EAAA;A2B8Df;;MAcM,iD3B5ES,EAAA;A2BiFf;IAEE,c3BnFa;I2BoFb,6BAA6B,EAAA;ADrD/B;ECiBA,c3BpEgB;E2BqEhB,qB3BrEgB,EAAA;A2BuEhB;IACE,W3B9EW;I2B+EX,yB3BzEc;I2B0Ed,qB3B1Ec,EAAA;A2B6EhB;IAEE,kD3B/Ec,EAAA;A2BkFhB;;IAKE,W3B7FW;I2B8FX,yB3BxFc;I2ByFd,qB3BzFc,EAAA;A2BkFhB;;MAcM,kD3BhGU,EAAA;A2BqGhB;IAEE,c3BvGc;I2BwGd,6BAA6B,EAAA;ADrD/B;ECiBA,c3BzCe;E2B0Cf,qB3B1Ce,EAAA;A2B4Cf;IACE,W3B9EW;I2B+EX,yB3B9Ca;I2B+Cb,qB3B/Ca,EAAA;A2BkDf;IAEE,gD3BpDa,EAAA;A2BuDf;;IAKE,W3B7FW;I2B8FX,yB3B7Da;I2B8Db,qB3B9Da,EAAA;A2BuDf;;MAcM,gD3BrES,EAAA;A2B0Ef;IAEE,c3B5Ea;I2B6Eb,6BAA6B,EAAA;ADrD/B;ECiBA,c3BvCe;E2BwCf,qB3BxCe,EAAA;A2B0Cf;IACE,W3BpEW;I2BqEX,yB3B5Ca;I2B6Cb,qB3B7Ca,EAAA;A2BgDf;IAEE,iD3BlDa,EAAA;A2BqDf;;IAKE,W3BnFW;I2BoFX,yB3B3Da;I2B4Db,qB3B5Da,EAAA;A2BqDf;;MAcM,iD3BnES,EAAA;A2BwEf;IAEE,c3B1Ea;I2B2Eb,6BAA6B,EAAA;ADrD/B;ECiBA,c3B1Ce;E2B2Cf,qB3B3Ce,EAAA;A2B6Cf;IACE,W3BpEW;I2BqEX,yB3B/Ca;I2BgDb,qB3BhDa,EAAA;A2BmDf;IAEE,gD3BrDa,EAAA;A2BwDf;;IAKE,W3BnFW;I2BoFX,yB3B9Da;I2B+Db,qB3B/Da,EAAA;A2BwDf;;MAcM,gD3BtES,EAAA;A2B2Ef;IAEE,c3B7Ea;I2B8Eb,6BAA6B,EAAA;ADrD/B;ECiBA,c3B5Ce;E2B6Cf,qB3B7Ce,EAAA;A2B+Cf;IACE,W3B9EW;I2B+EX,yB3BjDa;I2BkDb,qB3BlDa,EAAA;A2BqDf;IAEE,gD3BvDa,EAAA;A2B0Df;;IAKE,W3B7FW;I2B8FX,yB3BhEa;I2BiEb,qB3BjEa,EAAA;A2B0Df;;MAcM,gD3BxES,EAAA;A2B6Ef;IAEE,c3B/Ea;I2BgFb,6BAA6B,EAAA;ADrD/B;ECiBA,c3BzEgB;E2B0EhB,qB3B1EgB,EAAA;A2B4EhB;IACE,W3BpEW;I2BqEX,yB3B9Ec;I2B+Ed,qB3B/Ec,EAAA;A2BkFhB;IAEE,kD3BpFc,EAAA;A2BuFhB;;IAKE,W3BnFW;I2BoFX,yB3B7Fc;I2B8Fd,qB3B9Fc,EAAA;A2BuFhB;;MAcM,kD3BrGU,EAAA;A2B0GhB;IAEE,c3B5Gc;I2B6Gd,6BAA6B,EAAA;ADrD/B;ECiBA,c3BjEgB;E2BkEhB,qB3BlEgB,EAAA;A2BoEhB;IACE,W3B9EW;I2B+EX,yB3BtEc;I2BuEd,qB3BvEc,EAAA;A2B0EhB;IAEE,+C3B5Ec,EAAA;A2B+EhB;;IAKE,W3B7FW;I2B8FX,yB3BrFc;I2BsFd,qB3BtFc,EAAA;A2B+EhB;;MAcM,+C3B7FU,EAAA;A2BkGhB;IAEE,c3BpGc;I2BqGd,6BAA6B,EAAA;AD1CjC;EACE,gB1B8U+B;E0B7U/B,c1B5Ce;E0B6Cf,0B1BqMiD,EAAA;A0BxMnD;IAMI,cxB+EiC,EAAA;AwBrFrC;IAgBI,c1B9Ec,EAAA;A0ByFlB;ECqBE,oB3B8bgC;EC9T5B,kBAvE+B;EElKjC,qBHsV+B,EAAA;A0B9PnC;ECiBE,uB3B0biC;EC1T7B,mBAvE+B;EElKjC,qBHqV+B,EAAA;A4BvWnC;EVgBM,gClBwW2C,EAAA;AkBpW3C;IUpBN;MVqBQ,gBAAgB,EAAA,EUfvB;AAND;IAII,UAAU,EAAA;AAId;EAEI,aAAa,EAAA;AAIjB;EACE,SAAS;EACT,gBAAgB;EVAZ,6BlByWwC,EAAA;AkBrWxC;IUNN;MVOQ,gBAAgB,EAAA,EUHvB;ACjBD;;;;EAIE,kBAAkB,EAAA;AL6FG;EKzFrB,mBAAmB,EAAA;ACoBjB;IACE,qBAAqB;IACrB,oB9BsV0C;I8BrV1C,uB9BoV0C;I8BnV1C,WAAW;IAhCf,uBAA8B;IAC9B,qCAA4C;IAC5C,gBAAgB;IAChB,oCAA2C,EAAA;AAqDzC;IACE,cAAc,EAAA;ANwCyB;EKjF3C,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,a7B+yBsC;E6B9yBtC,aAAa;EACb,gB7B43BuC;E6B33BvC,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;EhCrFvB,yBgCsFgC;EhCrFhC,0BgCqFgC,EAAA;AAfpC;EAqBQ,sBAAsB;EhC9E1B,6BgC+EmC;EhC9EnC,4BgC8EmC,EAAA;ACxHvC;EACE,aAAa;EACb,eAAe;EACf,YpC8tCmC;EoC7tCnC,mBpC+tCsC;EoC7tCtC,gBAAgB,EAAA;AAKlB;EAGI,oBpCotCqC,EAAA;AoCvtCzC;IAMM,WAAW;IACX,qBpCgtCmC;IoC/sCnC,cpCNY;IoCOZ,YAAyO;IAAzO,uFAAyO,EAAA;AAT/O;EAcI,cpCZc,EAAA;AqCblB;EACE,aAAa;EhCGb,eAAe;EACf,gBAAgB,EAAA;AgCAlB;EACE,kBAAkB;EAClB,cAAc;EACd,crCyBe;EqCxBf,qBAAwD;EACxD,sBrCHa;EqCIb,yBrCDgB;EkBMZ,qIlB+8BoJ,EAAA;AkB38BpJ;ImBfN;MnBgBQ,gBAAgB,EAAA,EmBQvB;AAxBD;IAUI,UAAU;IACV,cnCgJiC;ImC9IjC,yBrCTc;IqCUd,qBrCTc,EAAA;AqCLlB;IAkBI,UAAU;IACV,cnCwIiC;ImCvIjC,yBrChBc;IqCiBd,UrCu7BiC;IqCt7BjC,kDrCMa,EAAA;AqCFjB;EAEI,iBrCyT6B,EAAA;AqC3TjC;EAMI,UAAU;EACV,WrC/BW;EmBJb,yBnB8Be;EqCOb,qBrCPa,EAAA;AqCFjB;EAaI,crC/Bc;EqCgCd,oBAAoB;EACpB,sBrCvCW;EqCwCX,qBrCrCc,EAAA;AqCLlB;ECDI,yBtC67BsC,EAAA;AsCz7BxC;EnCwCE,+BHsTgC;EGrThC,kCHqTgC,EAAA;AsC9VlC;EnC0BE,gCHoUgC;EGnUhC,mCHmUgC,EAAA;AsCnWlC;EACE,uBtCi8BsC;EC1sBpC,kBAvE+B,EAAA;AqCzK7B;EnCqCJ,8BHwT+B;EGvT/B,iCHuT+B,EAAA;AsCvV3B;EnCiBJ,+BHsU+B;EGrU/B,kCHqU+B,EAAA;AsCrWjC;EACE,uBtC+7BqC;ECxsBnC,mBAvE+B,EAAA;AqCzK7B;EnCqCJ,8BHuT+B;EGtT/B,iCHsT+B,EAAA;AsCtV3B;EnCiBJ,+BHqU+B;EGpU/B,kCHoU+B,EAAA;AuClWnC;EACE,qBAAqB;EACrB,sBvC4lCuC;ECx2BnC,iBAvE+B;EsC3KnC,gBvCkZ+B;EuCjZ/B,cAAc;EACd,WvCJa;EuCKb,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EpCItB,sBHoVgC,EAAA;AuCjWpC;IAeI,aAAa,EAAA;AAKjB;EACE,kBAAkB;EAClB,SAAS,EAAA;ACvBX;EACE,kBAAkB;EAClB,kBxCwOW;EwCvOX,mBxCipCsC;EwChpCtC,6BAA6C;ErCU3C,sBHoVgC,EAAA;AwCzVpC;EAEE,cAAc,EAAA;AAIhB;EACE,gBxCuY+B,EAAA;AwC/XjC;EACE,mBxCooCsD,EAAA;AwCroCxD;IAKI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,UxCqPuC;IwCpPvC,qBxCyMS,EAAA;AwC1LX;ECnDA,cvC+JmC;EiB7JnC,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cvC+JmC;EiB7JnC,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cvC+JmC;EiB7JnC,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cDiD2E;ErB/C3E,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cDiD2E;ErB/C3E,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cvC+JmC;EiB7JnC,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cDiD2E;ErB/C3E,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AsC5GnC;ECnDA,cvC+JmC;EiB7JnC,yBjBwJmC;EuCxJnC,qBvCwJmC,EAAA;AuCtJnC;IACE,cvC0JiC,EAAA;AwC9JnC;EACE;IAAK,2B1CmqC+B,EAAA,EAAA;A0CpqCtC;EACE;IAAK,2B1CmqC+B,EAAA,EAAA;A0C/pCxC;EACE,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1B;EACE,c1C4JiC;E0C3JjC,yB1CsJiC,EAAA;A0CxJnC;IAOM,c1CsJ6B;I0CrJ7B,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yB1CgJ6B;I0C/I7B,qB1C+I6B,EAAA;A0C7JnC;EACE,c1C4JiC;E0C3JjC,yB1CsJiC,EAAA;A0CxJnC;IAOM,c1CsJ6B;I0CrJ7B,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yB1CgJ6B;I0C/I7B,qB1C+I6B,EAAA;A0C7JnC;EACE,c1C4JiC;E0C3JjC,yB1CsJiC,EAAA;A0CxJnC;IAOM,c1CsJ6B;I0CrJ7B,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yB1CgJ6B;I0C/I7B,qB1C+I6B,EAAA;A0C7JnC;EACE,cDyJyE;ECxJzE,yB1CsJiC,EAAA;A0CxJnC;IAOM,cDmJqE;IClJrE,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yBD6IqE;IC5IrE,qBD4IqE,EAAA;AC1J3E;EACE,cDyJyE;ECxJzE,yB1CsJiC,EAAA;A0CxJnC;IAOM,cDmJqE;IClJrE,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yBD6IqE;IC5IrE,qBD4IqE,EAAA;AC1J3E;EACE,c1C4JiC;E0C3JjC,yB1CsJiC,EAAA;A0CxJnC;IAOM,c1CsJ6B;I0CrJ7B,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yB1CgJ6B;I0C/I7B,qB1C+I6B,EAAA;A0C7JnC;EACE,cDyJyE;ECxJzE,yB1CsJiC,EAAA;A0CxJnC;IAOM,cDmJqE;IClJrE,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yBD6IqE;IC5IrE,qBD4IqE,EAAA;AC1J3E;EACE,c1C4JiC;E0C3JjC,yB1CsJiC,EAAA;A0CxJnC;IAOM,c1CsJ6B;I0CrJ7B,yB1CqJ6B,EAAA;A0C7JnC;IAYM,W5CRO;I4CSP,yB1CgJ6B;I0C/I7B,qB1C+I6B,EAAA;A2C3JrC;EACE,uBAAuB;EACvB,U7CqxC8B;E6CpxC9B,W7CoxC8B;E6CnxC9B,sB7CqxCgC;E6CpxChC,W7COa;E6CNb,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","file":"application.scss","sourcesContent":["/*!\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n// scss-docs-start import-stack\n// Configuration\n@import \"functions\";\n@import \"variables\";\n@import \"mixins\";\n@import \"utilities\";\n\n// Layout & components\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"containers\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"accordion\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"alert\";\n@import \"progress\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n\n// Helpers\n@import \"helpers\";\n\n// Utilities\n@import \"utilities/api\";\n// scss-docs-end import-stack\n","/*!\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth; } }\n\nbody {\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25; }\n\nhr:not([size]) {\n  height: 1px; }\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw); }\n  @media (min-width: 1200px) {\n    h1, .h1 {\n      font-size: 2.5rem; } }\n\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw); }\n  @media (min-width: 1200px) {\n    h2, .h2 {\n      font-size: 2rem; } }\n\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw); }\n  @media (min-width: 1200px) {\n    h3, .h3 {\n      font-size: 1.75rem; } }\n\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw); }\n  @media (min-width: 1200px) {\n    h4, .h4 {\n      font-size: 1.5rem; } }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-bs-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul {\n  padding-left: 2rem; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall, .small {\n  font-size: 0.875em; }\n\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #0d6efd;\n  text-decoration: underline; }\n  a:hover {\n    color: #0a58ca; }\n\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word; }\n  a > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.875em;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 1em;\n    font-weight: 700; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg,\nsvg {\n  vertical-align: middle; }\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left; }\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent; }\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0; }\n\nlabel {\n  display: inline-block; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: dotted 1px;\n  outline: -webkit-focus-ring-color auto 5px; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\nselect {\n  text-transform: none; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nselect {\n  word-wrap: normal; }\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n  button:not(:disabled),\n  [type=\"button\"]:not(:disabled),\n  [type=\"reset\"]:not(:disabled),\n  [type=\"submit\"]:not(:disabled) {\n    cursor: pointer; }\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit; }\n  @media (min-width: 1200px) {\n    legend {\n      font-size: 1.5rem; } }\n  legend + * {\n    clear: left; }\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0; }\n\n::-webkit-inner-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield; }\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-color-swatch-wrapper {\n  padding: 0; }\n\n::file-selector-button {\n  font: inherit; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\niframe {\n  border: 0; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\nprogress {\n  vertical-align: baseline; }\n\n[hidden] {\n  display: none !important; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-1 {\n      font-size: 5rem; } }\n\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-2 {\n      font-size: 4.5rem; } }\n\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-3 {\n      font-size: 4rem; } }\n\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-4 {\n      font-size: 3.5rem; } }\n\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-5 {\n      font-size: 3rem; } }\n\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2; }\n  @media (min-width: 1200px) {\n    .display-6 {\n      font-size: 2.5rem; } }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n  .blockquote > :last-child {\n    margin-bottom: 0; }\n\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d; }\n  .blockquote-footer::before {\n    content: \"\\2014\\00A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d; }\n\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl,\n.container-xxl {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n\n@media (min-width: 1400px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {\n    max-width: 1320px; } }\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--bs-gutter-y) * -1);\n  margin-right: calc(var(--bs-gutter-x) / -2);\n  margin-left: calc(var(--bs-gutter-x) / -2); }\n  .row > * {\n    flex-shrink: 0;\n    width: 100%;\n    max-width: 100%;\n    padding-right: calc(var(--bs-gutter-x) / 2);\n    padding-left: calc(var(--bs-gutter-x) / 2);\n    margin-top: var(--bs-gutter-y); }\n\n.col {\n  flex: 1 0 0%; }\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto; }\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%; }\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%; }\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.33333%; }\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%; }\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%; }\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.66667%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto; }\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%; }\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%; }\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%; }\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0; }\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0; }\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem; }\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem; }\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem; }\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem; }\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem; }\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem; }\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem; }\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem; }\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem; }\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%; }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; }\n  .g-sm-0,\n  .gx-sm-0 {\n    --bs-gutter-x: 0; }\n  .g-sm-0,\n  .gy-sm-0 {\n    --bs-gutter-y: 0; }\n  .g-sm-1,\n  .gx-sm-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-sm-1,\n  .gy-sm-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-sm-2,\n  .gx-sm-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-sm-2,\n  .gy-sm-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-sm-3,\n  .gx-sm-3 {\n    --bs-gutter-x: 1rem; }\n  .g-sm-3,\n  .gy-sm-3 {\n    --bs-gutter-y: 1rem; }\n  .g-sm-4,\n  .gx-sm-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-sm-4,\n  .gy-sm-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-sm-5,\n  .gx-sm-5 {\n    --bs-gutter-x: 3rem; }\n  .g-sm-5,\n  .gy-sm-5 {\n    --bs-gutter-y: 3rem; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%; }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; }\n  .g-md-0,\n  .gx-md-0 {\n    --bs-gutter-x: 0; }\n  .g-md-0,\n  .gy-md-0 {\n    --bs-gutter-y: 0; }\n  .g-md-1,\n  .gx-md-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-md-1,\n  .gy-md-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-md-2,\n  .gx-md-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-md-2,\n  .gy-md-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-md-3,\n  .gx-md-3 {\n    --bs-gutter-x: 1rem; }\n  .g-md-3,\n  .gy-md-3 {\n    --bs-gutter-y: 1rem; }\n  .g-md-4,\n  .gx-md-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-md-4,\n  .gy-md-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-md-5,\n  .gx-md-5 {\n    --bs-gutter-x: 3rem; }\n  .g-md-5,\n  .gy-md-5 {\n    --bs-gutter-y: 3rem; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%; }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; }\n  .g-lg-0,\n  .gx-lg-0 {\n    --bs-gutter-x: 0; }\n  .g-lg-0,\n  .gy-lg-0 {\n    --bs-gutter-y: 0; }\n  .g-lg-1,\n  .gx-lg-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-lg-1,\n  .gy-lg-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-lg-2,\n  .gx-lg-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-lg-2,\n  .gy-lg-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-lg-3,\n  .gx-lg-3 {\n    --bs-gutter-x: 1rem; }\n  .g-lg-3,\n  .gy-lg-3 {\n    --bs-gutter-y: 1rem; }\n  .g-lg-4,\n  .gx-lg-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-lg-4,\n  .gy-lg-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-lg-5,\n  .gx-lg-5 {\n    --bs-gutter-x: 3rem; }\n  .g-lg-5,\n  .gy-lg-5 {\n    --bs-gutter-y: 3rem; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%; }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; }\n  .g-xl-0,\n  .gx-xl-0 {\n    --bs-gutter-x: 0; }\n  .g-xl-0,\n  .gy-xl-0 {\n    --bs-gutter-y: 0; }\n  .g-xl-1,\n  .gx-xl-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-xl-1,\n  .gy-xl-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-xl-2,\n  .gx-xl-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-xl-2,\n  .gy-xl-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-xl-3,\n  .gx-xl-3 {\n    --bs-gutter-x: 1rem; }\n  .g-xl-3,\n  .gy-xl-3 {\n    --bs-gutter-y: 1rem; }\n  .g-xl-4,\n  .gx-xl-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-xl-4,\n  .gy-xl-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-xl-5,\n  .gx-xl-5 {\n    --bs-gutter-x: 3rem; }\n  .g-xl-5,\n  .gy-xl-5 {\n    --bs-gutter-y: 3rem; } }\n\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%; }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto; }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%; }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%; }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%; }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%; }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto; }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333%; }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66667%; }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%; }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333%; }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66667%; }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%; }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333%; }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66667%; }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%; }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333%; }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66667%; }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%; }\n  .offset-xxl-0 {\n    margin-left: 0; }\n  .offset-xxl-1 {\n    margin-left: 8.33333%; }\n  .offset-xxl-2 {\n    margin-left: 16.66667%; }\n  .offset-xxl-3 {\n    margin-left: 25%; }\n  .offset-xxl-4 {\n    margin-left: 33.33333%; }\n  .offset-xxl-5 {\n    margin-left: 41.66667%; }\n  .offset-xxl-6 {\n    margin-left: 50%; }\n  .offset-xxl-7 {\n    margin-left: 58.33333%; }\n  .offset-xxl-8 {\n    margin-left: 66.66667%; }\n  .offset-xxl-9 {\n    margin-left: 75%; }\n  .offset-xxl-10 {\n    margin-left: 83.33333%; }\n  .offset-xxl-11 {\n    margin-left: 91.66667%; }\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --bs-gutter-x: 0; }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --bs-gutter-y: 0; }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --bs-gutter-x: 0.25rem; }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --bs-gutter-y: 0.25rem; }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --bs-gutter-x: 0.5rem; }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --bs-gutter-y: 0.5rem; }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --bs-gutter-x: 1rem; }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --bs-gutter-y: 1rem; }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --bs-gutter-x: 1.5rem; }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --bs-gutter-y: 1.5rem; }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --bs-gutter-x: 3rem; }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --bs-gutter-y: 3rem; } }\n\n.table {\n  --bs-table-bg: transparent;\n  --bs-table-striped-color: #212529;\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: #212529;\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: #212529;\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  vertical-align: top;\n  border-color: #dee2e6; }\n  .table > :not(caption) > * > * {\n    padding: 0.5rem 0.5rem;\n    background-color: var(--bs-table-bg);\n    background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg));\n    border-bottom-width: 1px; }\n  .table > tbody {\n    vertical-align: inherit; }\n  .table > thead {\n    vertical-align: bottom; }\n  .table > :not(:last-child) > :last-child > * {\n    border-bottom-color: currentColor; }\n\n.caption-top {\n  caption-side: top; }\n\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem; }\n\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0; }\n  .table-bordered > :not(caption) > * > * {\n    border-width: 0 1px; }\n\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color); }\n\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color); }\n\n.table-hover > tbody > tr:hover {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color); }\n\n.table-primary {\n  --bs-table-bg: #cfe2ff;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bacbe6; }\n\n.table-secondary {\n  --bs-table-bg: #e2e3e5;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #cbccce; }\n\n.table-success {\n  --bs-table-bg: #d1e7dd;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #bcd0c7; }\n\n.table-info {\n  --bs-table-bg: #cff4fc;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #badce3; }\n\n.table-warning {\n  --bs-table-bg: #fff3cd;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #e6dbb9; }\n\n.table-danger {\n  --bs-table-bg: #f8d7da;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfc2c4; }\n\n.table-light {\n  --bs-table-bg: #f8f9fa;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: #000;\n  border-color: #dfe0e1; }\n\n.table-dark {\n  --bs-table-bg: #212529;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: #fff;\n  border-color: #373b3e; }\n\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; } }\n\n.form-label {\n  margin-bottom: 0.5rem; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem; }\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control[type=\"file\"] {\n    overflow: hidden; }\n    .form-control[type=\"file\"]:not(:disabled):not([readonly]) {\n      cursor: pointer; }\n  .form-control:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n  .form-control::-webkit-date-and-time-value {\n    height: 1.5em; }\n  .form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n  .form-control::file-selector-button {\n    padding: 0.375rem 0.75rem;\n    margin: -0.375rem -0.75rem;\n    margin-inline-end: 0.75rem;\n    color: #212529;\n    background-color: #e9ecef;\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: 1px;\n    border-radius: 0;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .form-control::file-selector-button {\n        transition: none; } }\n  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: #dde0e3; }\n  .form-control::-webkit-file-upload-button {\n    padding: 0.375rem 0.75rem;\n    margin: -0.375rem -0.75rem;\n    margin-inline-end: 0.75rem;\n    color: #212529;\n    background-color: #e9ecef;\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: 1px;\n    border-radius: 0;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .form-control::-webkit-file-upload-button {\n        transition: none; } }\n  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n    background-color: #dde0e3; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n  .form-control-sm::file-selector-button {\n    padding: 0.25rem 0.5rem;\n    margin: -0.25rem -0.5rem;\n    margin-inline-end: 0.5rem; }\n  .form-control-sm::-webkit-file-upload-button {\n    padding: 0.25rem 0.5rem;\n    margin: -0.25rem -0.5rem;\n    margin-inline-end: 0.5rem; }\n\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n  .form-control-lg::file-selector-button {\n    padding: 0.5rem 1rem;\n    margin: -0.5rem -1rem;\n    margin-inline-end: 1rem; }\n  .form-control-lg::-webkit-file-upload-button {\n    padding: 0.5rem 1rem;\n    margin: -0.5rem -1rem;\n    margin-inline-end: 1rem; }\n\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px); }\n\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px); }\n\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px); }\n\n.form-control-color {\n  max-width: 3rem;\n  height: auto;\n  padding: 0.375rem; }\n  .form-control-color:not(:disabled):not([readonly]) {\n    cursor: pointer; }\n  .form-control-color::-moz-color-swatch {\n    height: 1.5em;\n    border-radius: 0.25rem; }\n  .form-control-color::-webkit-color-swatch {\n    height: 1.5em;\n    border-radius: 0.25rem; }\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  vertical-align: middle;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none; }\n  .form-select:focus {\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n  .form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n    padding-right: 0.75rem;\n    background-image: none; }\n  .form-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .form-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #212529; }\n\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem; }\n  .form-check .form-check-input {\n    float: left;\n    margin-left: -1.5em; }\n\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  appearance: none;\n  color-adjust: exact;\n  transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .form-check-input {\n      transition: none; } }\n  .form-check-input[type=\"checkbox\"] {\n    border-radius: 0.25em; }\n  .form-check-input[type=\"radio\"] {\n    border-radius: 50%; }\n  .form-check-input:active {\n    filter: brightness(90%); }\n  .form-check-input:focus {\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n  .form-check-input:checked {\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n    .form-check-input:checked[type=\"checkbox\"] {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\"); }\n    .form-check-input:checked[type=\"radio\"] {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\"); }\n  .form-check-input[type=\"checkbox\"]:indeterminate {\n    background-color: #0d6efd;\n    border-color: #0d6efd;\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\"); }\n  .form-check-input:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: 0.5; }\n  .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n    opacity: 0.5; }\n\n.form-switch {\n  padding-left: 2.5em; }\n  .form-switch .form-check-input {\n    width: 2em;\n    margin-left: -2.5em;\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n    background-position: left center;\n    border-radius: 2em; }\n    .form-switch .form-check-input:focus {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\"); }\n    .form-switch .form-check-input:checked {\n      background-position: right center;\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem; }\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n  .btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n    pointer-events: none;\n    filter: none;\n    opacity: 0.65; }\n\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  appearance: none; }\n  .form-range:focus {\n    outline: none; }\n    .form-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n    .form-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n  .form-range::-moz-focus-outer {\n    border: 0; }\n  .form-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #0d6efd;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .form-range::-webkit-slider-thumb {\n        transition: none; } }\n    .form-range::-webkit-slider-thumb:active {\n      background-color: #b6d4fe; }\n  .form-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .form-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #0d6efd;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .form-range::-moz-range-thumb {\n        transition: none; } }\n    .form-range::-moz-range-thumb:active {\n      background-color: #b6d4fe; }\n  .form-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .form-range:disabled {\n    pointer-events: none; }\n    .form-range:disabled::-webkit-slider-thumb {\n      background-color: #adb5bd; }\n    .form-range:disabled::-moz-range-thumb {\n      background-color: #adb5bd; }\n\n.form-floating {\n  position: relative; }\n  .form-floating > .form-control,\n  .form-floating > .form-select {\n    height: calc(3.5rem + 2px);\n    padding: 1rem 0.75rem; }\n  .form-floating > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    padding: 1rem 0.75rem;\n    pointer-events: none;\n    border: 1px solid transparent;\n    transform-origin: 0 0;\n    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .form-floating > label {\n        transition: none; } }\n  .form-floating > .form-control::placeholder {\n    color: transparent; }\n  .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n  .form-floating > .form-control:-webkit-autofill {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n  .form-floating > .form-select {\n    padding-top: 1.625rem;\n    padding-bottom: 0.625rem; }\n  .form-floating > .form-control:focus ~ label,\n  .form-floating > .form-control:not(:placeholder-shown) ~ label,\n  .form-floating > .form-select ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n  .form-floating > .form-control:-webkit-autofill ~ label {\n    opacity: 0.65;\n    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n  .input-group > .form-control,\n  .input-group > .form-select {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; }\n  .input-group > .form-control:focus,\n  .input-group > .form-select:focus {\n    z-index: 3; }\n  .input-group .btn {\n    position: relative;\n    z-index: 2; }\n    .input-group .btn:focus {\n      z-index: 3; }\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 1.75rem; }\n\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group.has-validation > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #198754;\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n  padding-right: calc(0.75em + 2.3125rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 1.75rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n    border-color: #198754;\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754; }\n  .was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n    background-color: #198754; }\n  .was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25); }\n  .was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n    color: #198754; }\n\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: .5em; }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 1.75rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n    background-color: #dc3545; }\n  .was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25); }\n  .was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n    color: #dc3545; }\n\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: .5em; }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover {\n    color: #212529; }\n  .btn-check:focus + .btn, .btn:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n  .btn:disabled, .btn.disabled,\n  fieldset:disabled .btn {\n    pointer-events: none;\n    opacity: 0.65; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0b5ed7;\n    border-color: #0a58ca; }\n  .btn-check:focus + .btn-primary, .btn-primary:focus {\n    color: #fff;\n    background-color: #0b5ed7;\n    border-color: #0a58ca;\n    box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5); }\n  .btn-check:checked + .btn-primary,\n  .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0a58ca;\n    border-color: #0a53be; }\n    .btn-check:checked + .btn-primary:focus,\n    .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5); }\n  .btn-primary:disabled, .btn-primary.disabled {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #5c636a;\n    border-color: #565e64; }\n  .btn-check:focus + .btn-secondary, .btn-secondary:focus {\n    color: #fff;\n    background-color: #5c636a;\n    border-color: #565e64;\n    box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5); }\n  .btn-check:checked + .btn-secondary,\n  .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #565e64;\n    border-color: #51585e; }\n    .btn-check:checked + .btn-secondary:focus,\n    .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5); }\n  .btn-secondary:disabled, .btn-secondary.disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n\n.btn-success {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #157347;\n    border-color: #146c43; }\n  .btn-check:focus + .btn-success, .btn-success:focus {\n    color: #fff;\n    background-color: #157347;\n    border-color: #146c43;\n    box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5); }\n  .btn-check:checked + .btn-success,\n  .btn-check:active + .btn-success, .btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #146c43;\n    border-color: #13653f; }\n    .btn-check:checked + .btn-success:focus,\n    .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5); }\n  .btn-success:disabled, .btn-success.disabled {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n\n.btn-info {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0; }\n  .btn-info:hover {\n    color: #000;\n    background-color: #31d2f2;\n    border-color: #25cff2; }\n  .btn-check:focus + .btn-info, .btn-info:focus {\n    color: #000;\n    background-color: #31d2f2;\n    border-color: #25cff2;\n    box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5); }\n  .btn-check:checked + .btn-info,\n  .btn-check:active + .btn-info, .btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    color: #000;\n    background-color: #3dd5f3;\n    border-color: #25cff2; }\n    .btn-check:checked + .btn-info:focus,\n    .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5); }\n  .btn-info:disabled, .btn-info.disabled {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n\n.btn-warning {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n  .btn-warning:hover {\n    color: #000;\n    background-color: #ffca2c;\n    border-color: #ffc720; }\n  .btn-check:focus + .btn-warning, .btn-warning:focus {\n    color: #000;\n    background-color: #ffca2c;\n    border-color: #ffc720;\n    box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5); }\n  .btn-check:checked + .btn-warning,\n  .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #000;\n    background-color: #ffcd39;\n    border-color: #ffc720; }\n    .btn-check:checked + .btn-warning:focus,\n    .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5); }\n  .btn-warning:disabled, .btn-warning.disabled {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #bb2d3b;\n    border-color: #b02a37; }\n  .btn-check:focus + .btn-danger, .btn-danger:focus {\n    color: #fff;\n    background-color: #bb2d3b;\n    border-color: #b02a37;\n    box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5); }\n  .btn-check:checked + .btn-danger,\n  .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #b02a37;\n    border-color: #a52834; }\n    .btn-check:checked + .btn-danger:focus,\n    .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5); }\n  .btn-danger:disabled, .btn-danger.disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n\n.btn-light {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb; }\n  .btn-check:focus + .btn-light, .btn-light:focus {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb;\n    box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5); }\n  .btn-check:checked + .btn-light,\n  .btn-check:active + .btn-light, .btn-light:active, .btn-light.active,\n  .show > .btn-light.dropdown-toggle {\n    color: #000;\n    background-color: #f9fafb;\n    border-color: #f9fafb; }\n    .btn-check:checked + .btn-light:focus,\n    .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5); }\n  .btn-light:disabled, .btn-light.disabled {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #1c1f23;\n    border-color: #1a1e21; }\n  .btn-check:focus + .btn-dark, .btn-dark:focus {\n    color: #fff;\n    background-color: #1c1f23;\n    border-color: #1a1e21;\n    box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5); }\n  .btn-check:checked + .btn-dark,\n  .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1a1e21;\n    border-color: #191c1f; }\n    .btn-check:checked + .btn-dark:focus,\n    .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5); }\n  .btn-dark:disabled, .btn-dark.disabled {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n  .btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5); }\n  .btn-check:checked + .btn-outline-primary,\n  .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n    .btn-check:checked + .btn-outline-primary:focus,\n    .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5); }\n  .btn-outline-primary:disabled, .btn-outline-primary.disabled {\n    color: #0d6efd;\n    background-color: transparent; }\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\n    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5); }\n  .btn-check:checked + .btn-outline-secondary,\n  .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .btn-check:checked + .btn-outline-secondary:focus,\n    .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5); }\n  .btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\n    color: #6c757d;\n    background-color: transparent; }\n\n.btn-outline-success {\n  color: #198754;\n  border-color: #198754; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n  .btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\n    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5); }\n  .btn-check:checked + .btn-outline-success,\n  .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754; }\n    .btn-check:checked + .btn-outline-success:focus,\n    .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5); }\n  .btn-outline-success:disabled, .btn-outline-success.disabled {\n    color: #198754;\n    background-color: transparent; }\n\n.btn-outline-info {\n  color: #0dcaf0;\n  border-color: #0dcaf0; }\n  .btn-outline-info:hover {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n  .btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\n    box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5); }\n  .btn-check:checked + .btn-outline-info,\n  .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\n    color: #000;\n    background-color: #0dcaf0;\n    border-color: #0dcaf0; }\n    .btn-check:checked + .btn-outline-info:focus,\n    .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5); }\n  .btn-outline-info:disabled, .btn-outline-info.disabled {\n    color: #0dcaf0;\n    background-color: transparent; }\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107; }\n  .btn-outline-warning:hover {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\n    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5); }\n  .btn-check:checked + .btn-outline-warning,\n  .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n    .btn-check:checked + .btn-outline-warning:focus,\n    .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning:disabled, .btn-outline-warning.disabled {\n    color: #ffc107;\n    background-color: transparent; }\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\n    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5); }\n  .btn-check:checked + .btn-outline-danger,\n  .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n    .btn-check:checked + .btn-outline-danger:focus,\n    .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger:disabled, .btn-outline-danger.disabled {\n    color: #dc3545;\n    background-color: transparent; }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\n    box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5); }\n  .btn-check:checked + .btn-outline-light,\n  .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\n    color: #000;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n    .btn-check:checked + .btn-outline-light:focus,\n    .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light:disabled, .btn-outline-light.disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n\n.btn-outline-dark {\n  color: #212529;\n  border-color: #212529; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n  .btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\n    box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5); }\n  .btn-check:checked + .btn-outline-dark,\n  .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\n    color: #fff;\n    background-color: #212529;\n    border-color: #212529; }\n    .btn-check:checked + .btn-outline-dark:focus,\n    .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\n      box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5); }\n  .btn-outline-dark:disabled, .btn-outline-dark.disabled {\n    color: #212529;\n    background-color: transparent; }\n\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  text-decoration: underline; }\n  .btn-link:hover {\n    color: #0a58ca; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #6c757d; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative; }\n\n.dropdown-toggle {\n  white-space: nowrap; }\n  .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n  .dropdown-toggle:empty::after {\n    margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n  .dropdown-menu[style] {\n    right: auto !important; }\n\n.dropdown-menu-start {\n  --bs-position: start;\n  right: auto /* rtl:ignore */;\n  left: 0 /* rtl:ignore */; }\n\n.dropdown-menu-end {\n  --bs-position: end;\n  right: 0 /* rtl:ignore */;\n  left: auto /* rtl:ignore */; }\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-md-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n    right: auto /* rtl:ignore */;\n    left: 0 /* rtl:ignore */; }\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n    right: 0 /* rtl:ignore */;\n    left: auto /* rtl:ignore */; } }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropend .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropend .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropstart .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropstart .dropdown-toggle::after {\n  display: none; }\n\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.15); }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #1e2125;\n    background-color: #f8f9fa; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0d6efd; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529; }\n\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: rgba(0, 0, 0, 0.15); }\n  .dropdown-menu-dark .dropdown-item {\n    color: #dee2e6; }\n    .dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n      color: #fff;\n      background-color: rgba(255, 255, 255, 0.15); }\n    .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n      color: #fff;\n      background-color: #0d6efd; }\n    .dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n      color: #adb5bd; }\n  .dropdown-menu-dark .dropdown-divider {\n    border-color: rgba(0, 0, 0, 0.15); }\n  .dropdown-menu-dark .dropdown-item-text {\n    color: #dee2e6; }\n  .dropdown-menu-dark .dropdown-header {\n    color: #adb5bd; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 1 1 auto; }\n  .btn-group > .btn-check:checked + .btn,\n  .btn-group > .btn-check:focus + .btn,\n  .btn-group > .btn:hover,\n  .btn-group > .btn:focus,\n  .btn-group > .btn:active,\n  .btn-group > .btn.active,\n  .btn-group-vertical > .btn-check:checked + .btn,\n  .btn-group-vertical > .btn-check:focus + .btn,\n  .btn-group-vertical > .btn:hover,\n  .btn-group-vertical > .btn:focus,\n  .btn-group-vertical > .btn:active,\n  .btn-group-vertical > .btn.active {\n    z-index: 1; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:nth-child(n + 3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropend .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropstart .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn ~ .btn,\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .nav-link {\n      transition: none; } }\n  .nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-link {\n    margin-bottom: -1px;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd; }\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n  .navbar > .container,\n  .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static; }\n\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  align-items: center;\n  width: 100%; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .navbar-toggler {\n      transition: none; } }\n  .navbar-toggler:hover {\n    text-decoration: none; }\n  .navbar-toggler:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%; }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xxl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xxl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xxl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xxl .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-xxl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55); }\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.55); }\n  .navbar-light .navbar-text a,\n  .navbar-light .navbar-text a:hover,\n  .navbar-light .navbar-text a:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.55); }\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.55);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.55); }\n  .navbar-dark .navbar-text a,\n  .navbar-dark .navbar-text a:hover,\n  .navbar-dark .navbar-text a:focus {\n    color: #fff; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group {\n    border-top: inherit;\n    border-bottom: inherit; }\n    .card > .list-group:first-child {\n      border-top-width: 0;\n      border-top-left-radius: calc(0.25rem - 1px);\n      border-top-right-radius: calc(0.25rem - 1px); }\n    .card > .list-group:last-child {\n      border-bottom-width: 0;\n      border-bottom-right-radius: calc(0.25rem - 1px);\n      border-bottom-left-radius: calc(0.25rem - 1px); }\n  .card > .card-header + .list-group,\n  .card > .list-group + .card-footer {\n    border-top: 0; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem; }\n\n.card-title {\n  margin-bottom: 0.5rem; }\n\n.card-subtitle {\n  margin-top: -0.25rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1rem /* rtl:ignore */; }\n\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-footer {\n  padding: 0.5rem 1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: -0.5rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.5rem;\n  margin-left: -0.5rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; }\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-group > .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group > .card {\n      flex: 1 0 0%;\n      margin-bottom: 0; }\n      .card-group > .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group > .card:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-top,\n        .card-group > .card:not(:last-child) .card-header {\n          border-top-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-bottom,\n        .card-group > .card:not(:last-child) .card-footer {\n          border-bottom-right-radius: 0; }\n      .card-group > .card:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-top,\n        .card-group > .card:not(:first-child) .card-header {\n          border-top-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-bottom,\n        .card-group > .card:not(:first-child) .card-footer {\n          border-bottom-left-radius: 0; } }\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  color: #212529;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .accordion-button {\n      transition: none; } }\n  .accordion-button.collapsed {\n    border-bottom-width: 0; }\n  .accordion-button:not(.collapsed) {\n    color: #0c63e4;\n    background-color: #e7f1ff; }\n    .accordion-button:not(.collapsed)::after {\n      background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n      transform: rotate(180deg); }\n  .accordion-button::after {\n    flex-shrink: 0;\n    width: 1.25rem;\n    height: 1.25rem;\n    margin-left: auto;\n    content: \"\";\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n    background-repeat: no-repeat;\n    background-size: 1.25rem;\n    transition: transform 0.2s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .accordion-button::after {\n        transition: none; } }\n  .accordion-button:hover {\n    z-index: 2; }\n  .accordion-button:focus {\n    z-index: 3;\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n\n.accordion-header {\n  margin-bottom: 0; }\n\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-width: 1px;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-width: 1px;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.accordion-collapse {\n  border: solid rgba(0, 0, 0, 0.125);\n  border-width: 0 1px; }\n\n.accordion-body {\n  padding: 1rem 1.25rem; }\n\n.accordion-flush .accordion-button {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.accordion-flush .accordion-collapse {\n  border-width: 0; }\n\n.accordion-flush .accordion-item:first-of-type .accordion-button {\n  border-top-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-width: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 0;\n  margin-bottom: 1rem;\n  list-style: none; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    float: left;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */; }\n\n.breadcrumb-item.active {\n  color: #6c757d; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none; }\n\n.page-link {\n  position: relative;\n  display: block;\n  color: #0d6efd;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .page-link {\n      transition: none; } }\n  .page-link:hover {\n    z-index: 2;\n    color: #0a58ca;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .page-link:focus {\n    z-index: 3;\n    color: #0a58ca;\n    background-color: #e9ecef;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }\n\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px; }\n\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd; }\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.page-link {\n  padding: 0.375rem 0.75rem; }\n\n.page-item:first-child .page-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.35em 0.65em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.alert {\n  position: relative;\n  padding: 1rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 3rem; }\n  .alert-dismissible .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: 1.25rem 1rem; }\n\n.alert-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n  border-color: #b6d4fe; }\n  .alert-primary .alert-link {\n    color: #06357a; }\n\n.alert-secondary {\n  color: #41464b;\n  background-color: #e2e3e5;\n  border-color: #d3d6d8; }\n  .alert-secondary .alert-link {\n    color: #34383c; }\n\n.alert-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n  border-color: #badbcc; }\n  .alert-success .alert-link {\n    color: #0c4128; }\n\n.alert-info {\n  color: #055160;\n  background-color: #cff4fc;\n  border-color: #b6effb; }\n  .alert-info .alert-link {\n    color: #04414d; }\n\n.alert-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n  border-color: #ffecb5; }\n  .alert-warning .alert-link {\n    color: #523e02; }\n\n.alert-danger {\n  color: #842029;\n  background-color: #f8d7da;\n  border-color: #f5c2c7; }\n  .alert-danger .alert-link {\n    color: #6a1a21; }\n\n.alert-light {\n  color: #636464;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light .alert-link {\n    color: #4f5050; }\n\n.alert-dark {\n  color: #141619;\n  background-color: #d3d3d4;\n  border-color: #bcbebf; }\n  .alert-dark .alert-link {\n    color: #101214; }\n\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0d6efd;\n  transition: width 0.6s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      animation: none; } }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit; }\n  .list-group-item:last-child {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #0d6efd;\n    border-color: #0d6efd; }\n  .list-group-item + .list-group-item {\n    border-top-width: 0; }\n    .list-group-item + .list-group-item.active {\n      margin-top: -1px;\n      border-top-width: 1px; }\n\n.list-group-horizontal {\n  flex-direction: row; }\n  .list-group-horizontal > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; }\n  .list-group-horizontal > .list-group-item.active {\n    margin-top: 0; }\n  .list-group-horizontal > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0; }\n    .list-group-horizontal > .list-group-item + .list-group-item.active {\n      margin-left: -1px;\n      border-left-width: 1px; }\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n    .list-group-horizontal-sm > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n    .list-group-horizontal-md > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-md > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-md > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n    .list-group-horizontal-lg > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n    .list-group-horizontal-xl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row; }\n    .list-group-horizontal-xxl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xxl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xxl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n.list-group-flush {\n  border-radius: 0; }\n  .list-group-flush > .list-group-item {\n    border-width: 0 0 1px; }\n    .list-group-flush > .list-group-item:last-child {\n      border-bottom-width: 0; }\n\n.list-group-item-primary {\n  color: #084298;\n  background-color: #cfe2ff; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #084298;\n    background-color: #bacbe6; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #084298;\n    border-color: #084298; }\n\n.list-group-item-secondary {\n  color: #41464b;\n  background-color: #e2e3e5; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #41464b;\n    background-color: #cbccce; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #41464b;\n    border-color: #41464b; }\n\n.list-group-item-success {\n  color: #0f5132;\n  background-color: #d1e7dd; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #0f5132;\n    background-color: #bcd0c7; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #0f5132;\n    border-color: #0f5132; }\n\n.list-group-item-info {\n  color: #055160;\n  background-color: #cff4fc; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #055160;\n    background-color: #badce3; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #055160;\n    border-color: #055160; }\n\n.list-group-item-warning {\n  color: #664d03;\n  background-color: #fff3cd; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #664d03;\n    background-color: #e6dbb9; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #664d03;\n    border-color: #664d03; }\n\n.list-group-item-danger {\n  color: #842029;\n  background-color: #f8d7da; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #842029;\n    background-color: #dfc2c4; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #842029;\n    border-color: #842029; }\n\n.list-group-item-light {\n  color: #636464;\n  background-color: #fefefe; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #636464;\n    background-color: #e5e5e5; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #636464;\n    border-color: #636464; }\n\n.list-group-item-dark {\n  color: #141619;\n  background-color: #d3d3d4; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #141619;\n    background-color: #bebebf; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #141619;\n    border-color: #141619; }\n\n.btn-close {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.25rem;\n  opacity: 0.5; }\n  .btn-close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: 0.75; }\n  .btn-close:focus {\n    outline: none;\n    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n    opacity: 1; }\n  .btn-close:disabled, .btn-close.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: 0.25; }\n\n.btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%); }\n\n.toast {\n  width: 350px;\n  max-width: 100%;\n  font-size: 0.875rem;\n  pointer-events: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n  .toast:not(.showing):not(.show) {\n    opacity: 0; }\n  .toast.hide {\n    display: none; }\n\n.toast-container {\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none; }\n  .toast-container > :not(:last-child) {\n    margin-bottom: 0.75rem; }\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n  .toast-header .btn-close {\n    margin-right: -0.375rem;\n    margin-left: 0.75rem; }\n\n.toast-body {\n  padding: 0.75rem; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -50px); }\n    @media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    transform: none; }\n  .modal.modal-static .modal-dialog {\n    transform: scale(1.02); }\n\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem); }\n  .modal-dialog-scrollable .modal-content {\n    max-height: 100%;\n    overflow: hidden; }\n  .modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .modal-header .btn-close {\n    padding: 0.5rem 0.5rem;\n    margin: -0.5rem -0.5rem -0.5rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px); }\n  .modal-footer > * {\n    margin: 0.25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0; }\n  .modal-fullscreen .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0; }\n  .modal-fullscreen .modal-header {\n    border-radius: 0; }\n  .modal-fullscreen .modal-body {\n    overflow-y: auto; }\n  .modal-fullscreen .modal-footer {\n    border-radius: 0; }\n\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-sm-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-sm-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-sm-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-sm-down .modal-footer {\n      border-radius: 0; } }\n\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-md-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-md-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-md-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-md-down .modal-footer {\n      border-radius: 0; } }\n\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-lg-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-lg-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-lg-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-lg-down .modal-footer {\n      border-radius: 0; } }\n\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-xl-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-xl-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-xl-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-xl-down .modal-footer {\n      border-radius: 0; } }\n\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0; }\n    .modal-fullscreen-xxl-down .modal-content {\n      height: 100%;\n      border: 0;\n      border-radius: 0; }\n    .modal-fullscreen-xxl-down .modal-header {\n      border-radius: 0; }\n    .modal-fullscreen-xxl-down .modal-body {\n      overflow-y: auto; }\n    .modal-fullscreen-xxl-down .modal-footer {\n      border-radius: 0; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .tooltip-arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .tooltip-arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow {\n    bottom: 0; }\n    .bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"top\"] .tooltip-arrow::before {\n      top: -1px;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"right\"] .tooltip-arrow::before {\n      right: -1px;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow {\n    top: 0; }\n    .bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"bottom\"] .tooltip-arrow::before {\n      bottom: -1px;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=\"left\"] .tooltip-arrow::before {\n      left: -1px;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .popover-arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n    .popover .popover-arrow::before, .popover .popover-arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[data-popper-placement^=\"top\"] {\n  margin-bottom: 0.5rem !important; }\n  .bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow {\n    bottom: calc(-0.5rem - 1px); }\n    .bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"top\"] > .popover-arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n\n.bs-popover-end, .bs-popover-auto[data-popper-placement^=\"right\"] {\n  margin-left: 0.5rem !important; }\n  .bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow {\n    left: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"right\"] > .popover-arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[data-popper-placement^=\"bottom\"] {\n  margin-top: 0.5rem !important; }\n  .bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow {\n    top: calc(-0.5rem - 1px); }\n    .bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"bottom\"] > .popover-arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f0f0f0; }\n\n.bs-popover-start, .bs-popover-auto[data-popper-placement^=\"left\"] {\n  margin-right: 0.5rem !important; }\n  .bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow {\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=\"left\"] > .popover-arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #d8d8d8;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 1rem 1rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel.pointer-event {\n  touch-action: pan-y; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%); }\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%); }\n\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-start,\n    .carousel-fade .active.carousel-item-end {\n      transition: none; } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%; }\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: 0.5;\n    transition: opacity 0.6s ease; }\n    @media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n  .carousel-indicators .active {\n    opacity: 1; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center; }\n\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100); }\n\n.carousel-dark .carousel-indicators li {\n  background-color: #000; }\n\n.carousel-dark .carousel-caption {\n  color: #000; }\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */; } }\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: 0.75s linear infinite spinner-border; }\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0); }\n  50% {\n    opacity: 1;\n    transform: none; } }\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  animation: 0.75s linear infinite spinner-grow; }\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    animation-duration: 1.5s; } }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.link-primary {\n  color: #0d6efd; }\n  .link-primary:hover, .link-primary:focus {\n    color: #0a58ca; }\n\n.link-secondary {\n  color: #6c757d; }\n  .link-secondary:hover, .link-secondary:focus {\n    color: #565e64; }\n\n.link-success {\n  color: #198754; }\n  .link-success:hover, .link-success:focus {\n    color: #146c43; }\n\n.link-info {\n  color: #0dcaf0; }\n  .link-info:hover, .link-info:focus {\n    color: #3dd5f3; }\n\n.link-warning {\n  color: #ffc107; }\n  .link-warning:hover, .link-warning:focus {\n    color: #ffcd39; }\n\n.link-danger {\n  color: #dc3545; }\n  .link-danger:hover, .link-danger:focus {\n    color: #b02a37; }\n\n.link-light {\n  color: #f8f9fa; }\n  .link-light:hover, .link-light:focus {\n    color: #f9fafb; }\n\n.link-dark {\n  color: #212529; }\n  .link-dark:hover, .link-dark:focus {\n    color: #1a1e21; }\n\n.ratio {\n  position: relative;\n  width: 100%; }\n  .ratio::before {\n    display: block;\n    padding-top: var(--aspect-ratio);\n    content: \"\"; }\n  .ratio > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.ratio-1x1 {\n  --aspect-ratio: 100%; }\n\n.ratio-4x3 {\n  --aspect-ratio: calc(3 / 4 * 100%); }\n\n.ratio-16x9 {\n  --aspect-ratio: calc(9 / 16 * 100%); }\n\n.ratio-21x9 {\n  --aspect-ratio: calc(9 / 21 * 100%); }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n.sticky-top {\n  position: sticky;\n  top: 0;\n  z-index: 1020; }\n\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important; }\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\"; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.float-start {\n  float: left !important; }\n\n.float-end {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n.overflow-auto {\n  overflow: auto !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.overflow-visible {\n  overflow: visible !important; }\n\n.overflow-scroll {\n  overflow: scroll !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-grid {\n  display: grid !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n.d-none {\n  display: none !important; }\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.top-0 {\n  top: 0 !important; }\n\n.top-50 {\n  top: 50% !important; }\n\n.top-100 {\n  top: 100% !important; }\n\n.bottom-0 {\n  bottom: 0 !important; }\n\n.bottom-50 {\n  bottom: 50% !important; }\n\n.bottom-100 {\n  bottom: 100% !important; }\n\n.start-0 {\n  left: 0 !important; }\n\n.start-50 {\n  left: 50% !important; }\n\n.start-100 {\n  left: 100% !important; }\n\n.end-0 {\n  right: 0 !important; }\n\n.end-50 {\n  right: 50% !important; }\n\n.end-100 {\n  right: 100% !important; }\n\n.translate-middle {\n  transform: translate(-50%, -50%) !important; }\n\n.translate-middle-x {\n  transform: translateX(-50%) !important; }\n\n.translate-middle-y {\n  transform: translateY(-50%) !important; }\n\n.border {\n  border: 1px solid #dee2e6 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-end {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-end-0 {\n  border-right: 0 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-start {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-start-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #0d6efd !important; }\n\n.border-secondary {\n  border-color: #6c757d !important; }\n\n.border-success {\n  border-color: #198754 !important; }\n\n.border-info {\n  border-color: #0dcaf0 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #212529 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.border-0 {\n  border-width: 0 !important; }\n\n.border-1 {\n  border-width: 1px !important; }\n\n.border-2 {\n  border-width: 2px !important; }\n\n.border-3 {\n  border-width: 3px !important; }\n\n.border-4 {\n  border-width: 4px !important; }\n\n.border-5 {\n  border-width: 5px !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.min-vw-100 {\n  min-width: 100vw !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.min-vh-100 {\n  min-height: 100vh !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.gap-0 {\n  gap: 0 !important; }\n\n.gap-1 {\n  gap: 0.25rem !important; }\n\n.gap-2 {\n  gap: 0.5rem !important; }\n\n.gap-3 {\n  gap: 1rem !important; }\n\n.gap-4 {\n  gap: 1.5rem !important; }\n\n.gap-5 {\n  gap: 3rem !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.justify-content-evenly {\n  justify-content: space-evenly !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n.order-first {\n  order: -1 !important; }\n\n.order-0 {\n  order: 0 !important; }\n\n.order-1 {\n  order: 1 !important; }\n\n.order-2 {\n  order: 2 !important; }\n\n.order-3 {\n  order: 3 !important; }\n\n.order-4 {\n  order: 4 !important; }\n\n.order-5 {\n  order: 5 !important; }\n\n.order-last {\n  order: 6 !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important; }\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important; }\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important; }\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important; }\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important; }\n\n.mt-0 {\n  margin-top: 0 !important; }\n\n.mt-1 {\n  margin-top: 0.25rem !important; }\n\n.mt-2 {\n  margin-top: 0.5rem !important; }\n\n.mt-3 {\n  margin-top: 1rem !important; }\n\n.mt-4 {\n  margin-top: 1.5rem !important; }\n\n.mt-5 {\n  margin-top: 3rem !important; }\n\n.mt-auto {\n  margin-top: auto !important; }\n\n.me-0 {\n  margin-right: 0 !important; }\n\n.me-1 {\n  margin-right: 0.25rem !important; }\n\n.me-2 {\n  margin-right: 0.5rem !important; }\n\n.me-3 {\n  margin-right: 1rem !important; }\n\n.me-4 {\n  margin-right: 1.5rem !important; }\n\n.me-5 {\n  margin-right: 3rem !important; }\n\n.me-auto {\n  margin-right: auto !important; }\n\n.mb-0 {\n  margin-bottom: 0 !important; }\n\n.mb-1 {\n  margin-bottom: 0.25rem !important; }\n\n.mb-2 {\n  margin-bottom: 0.5rem !important; }\n\n.mb-3 {\n  margin-bottom: 1rem !important; }\n\n.mb-4 {\n  margin-bottom: 1.5rem !important; }\n\n.mb-5 {\n  margin-bottom: 3rem !important; }\n\n.mb-auto {\n  margin-bottom: auto !important; }\n\n.ms-0 {\n  margin-left: 0 !important; }\n\n.ms-1 {\n  margin-left: 0.25rem !important; }\n\n.ms-2 {\n  margin-left: 0.5rem !important; }\n\n.ms-3 {\n  margin-left: 1rem !important; }\n\n.ms-4 {\n  margin-left: 1.5rem !important; }\n\n.ms-5 {\n  margin-left: 3rem !important; }\n\n.ms-auto {\n  margin-left: auto !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important; }\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important; }\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important; }\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important; }\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pt-0 {\n  padding-top: 0 !important; }\n\n.pt-1 {\n  padding-top: 0.25rem !important; }\n\n.pt-2 {\n  padding-top: 0.5rem !important; }\n\n.pt-3 {\n  padding-top: 1rem !important; }\n\n.pt-4 {\n  padding-top: 1.5rem !important; }\n\n.pt-5 {\n  padding-top: 3rem !important; }\n\n.pe-0 {\n  padding-right: 0 !important; }\n\n.pe-1 {\n  padding-right: 0.25rem !important; }\n\n.pe-2 {\n  padding-right: 0.5rem !important; }\n\n.pe-3 {\n  padding-right: 1rem !important; }\n\n.pe-4 {\n  padding-right: 1.5rem !important; }\n\n.pe-5 {\n  padding-right: 3rem !important; }\n\n.pb-0 {\n  padding-bottom: 0 !important; }\n\n.pb-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pb-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pb-3 {\n  padding-bottom: 1rem !important; }\n\n.pb-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pb-5 {\n  padding-bottom: 3rem !important; }\n\n.ps-0 {\n  padding-left: 0 !important; }\n\n.ps-1 {\n  padding-left: 0.25rem !important; }\n\n.ps-2 {\n  padding-left: 0.5rem !important; }\n\n.ps-3 {\n  padding-left: 1rem !important; }\n\n.ps-4 {\n  padding-left: 1.5rem !important; }\n\n.ps-5 {\n  padding-left: 3rem !important; }\n\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important; }\n\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important; }\n\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important; }\n\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important; }\n\n.fs-5 {\n  font-size: 1.25rem !important; }\n\n.fs-6 {\n  font-size: 1rem !important; }\n\n.fst-italic {\n  font-style: italic !important; }\n\n.fst-normal {\n  font-style: normal !important; }\n\n.fw-light {\n  font-weight: 300 !important; }\n\n.fw-lighter {\n  font-weight: lighter !important; }\n\n.fw-normal {\n  font-weight: 400 !important; }\n\n.fw-bold {\n  font-weight: 700 !important; }\n\n.fw-bolder {\n  font-weight: bolder !important; }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.text-start {\n  text-align: left !important; }\n\n.text-end {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-primary {\n  color: #0d6efd !important; }\n\n.text-secondary {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #198754 !important; }\n\n.text-info {\n  color: #0dcaf0 !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\n.text-dark {\n  color: #212529 !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-reset {\n  color: inherit !important; }\n\n.lh-1 {\n  line-height: 1 !important; }\n\n.lh-sm {\n  line-height: 1.25 !important; }\n\n.lh-base {\n  line-height: 1.5 !important; }\n\n.lh-lg {\n  line-height: 2 !important; }\n\n.bg-primary {\n  background-color: #0d6efd !important; }\n\n.bg-secondary {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #198754 !important; }\n\n.bg-info {\n  background-color: #0dcaf0 !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\n.bg-dark {\n  background-color: #212529 !important; }\n\n.bg-body {\n  background-color: #fff !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.bg-gradient {\n  background-image: var(--bs-gradient) !important; }\n\n.text-wrap {\n  white-space: normal !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-decoration-none {\n  text-decoration: none !important; }\n\n.text-decoration-underline {\n  text-decoration: underline !important; }\n\n.text-decoration-line-through {\n  text-decoration: line-through !important; }\n\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important; }\n\n/* rtl:end:remove */\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important; }\n\n.user-select-all {\n  user-select: all !important; }\n\n.user-select-auto {\n  user-select: auto !important; }\n\n.user-select-none {\n  user-select: none !important; }\n\n.pe-none {\n  pointer-events: none !important; }\n\n.pe-auto {\n  pointer-events: auto !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.rounded-1 {\n  border-radius: 0.2rem !important; }\n\n.rounded-2 {\n  border-radius: 0.25rem !important; }\n\n.rounded-3 {\n  border-radius: 0.3rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-pill {\n  border-radius: 50rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-end {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-start {\n  border-bottom-left-radius: 0.25rem !important;\n  border-top-left-radius: 0.25rem !important; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important; }\n  .float-sm-end {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-grid {\n    display: grid !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; }\n  .d-sm-none {\n    display: none !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-sm-0 {\n    gap: 0 !important; }\n  .gap-sm-1 {\n    gap: 0.25rem !important; }\n  .gap-sm-2 {\n    gap: 0.5rem !important; }\n  .gap-sm-3 {\n    gap: 1rem !important; }\n  .gap-sm-4 {\n    gap: 1.5rem !important; }\n  .gap-sm-5 {\n    gap: 3rem !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; }\n  .order-sm-first {\n    order: -1 !important; }\n  .order-sm-0 {\n    order: 0 !important; }\n  .order-sm-1 {\n    order: 1 !important; }\n  .order-sm-2 {\n    order: 2 !important; }\n  .order-sm-3 {\n    order: 3 !important; }\n  .order-sm-4 {\n    order: 4 !important; }\n  .order-sm-5 {\n    order: 5 !important; }\n  .order-sm-last {\n    order: 6 !important; }\n  .m-sm-0 {\n    margin: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-sm-0 {\n    margin-top: 0 !important; }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mt-sm-3 {\n    margin-top: 1rem !important; }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mt-sm-5 {\n    margin-top: 3rem !important; }\n  .mt-sm-auto {\n    margin-top: auto !important; }\n  .me-sm-0 {\n    margin-right: 0 !important; }\n  .me-sm-1 {\n    margin-right: 0.25rem !important; }\n  .me-sm-2 {\n    margin-right: 0.5rem !important; }\n  .me-sm-3 {\n    margin-right: 1rem !important; }\n  .me-sm-4 {\n    margin-right: 1.5rem !important; }\n  .me-sm-5 {\n    margin-right: 3rem !important; }\n  .me-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-0 {\n    margin-bottom: 0 !important; }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important; }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important; }\n  .mb-sm-auto {\n    margin-bottom: auto !important; }\n  .ms-sm-0 {\n    margin-left: 0 !important; }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important; }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important; }\n  .ms-sm-3 {\n    margin-left: 1rem !important; }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important; }\n  .ms-sm-5 {\n    margin-left: 3rem !important; }\n  .ms-sm-auto {\n    margin-left: auto !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-sm-0 {\n    padding-top: 0 !important; }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pt-sm-3 {\n    padding-top: 1rem !important; }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pt-sm-5 {\n    padding-top: 3rem !important; }\n  .pe-sm-0 {\n    padding-right: 0 !important; }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pe-sm-3 {\n    padding-right: 1rem !important; }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pe-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-0 {\n    padding-bottom: 0 !important; }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important; }\n  .ps-sm-0 {\n    padding-left: 0 !important; }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important; }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important; }\n  .ps-sm-3 {\n    padding-left: 1rem !important; }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important; }\n  .ps-sm-5 {\n    padding-left: 3rem !important; }\n  .text-sm-start {\n    text-align: left !important; }\n  .text-sm-end {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important; }\n  .float-md-end {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-grid {\n    display: grid !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; }\n  .d-md-none {\n    display: none !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-md-0 {\n    gap: 0 !important; }\n  .gap-md-1 {\n    gap: 0.25rem !important; }\n  .gap-md-2 {\n    gap: 0.5rem !important; }\n  .gap-md-3 {\n    gap: 1rem !important; }\n  .gap-md-4 {\n    gap: 1.5rem !important; }\n  .gap-md-5 {\n    gap: 3rem !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; }\n  .order-md-first {\n    order: -1 !important; }\n  .order-md-0 {\n    order: 0 !important; }\n  .order-md-1 {\n    order: 1 !important; }\n  .order-md-2 {\n    order: 2 !important; }\n  .order-md-3 {\n    order: 3 !important; }\n  .order-md-4 {\n    order: 4 !important; }\n  .order-md-5 {\n    order: 5 !important; }\n  .order-md-last {\n    order: 6 !important; }\n  .m-md-0 {\n    margin: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-md-0 {\n    margin-top: 0 !important; }\n  .mt-md-1 {\n    margin-top: 0.25rem !important; }\n  .mt-md-2 {\n    margin-top: 0.5rem !important; }\n  .mt-md-3 {\n    margin-top: 1rem !important; }\n  .mt-md-4 {\n    margin-top: 1.5rem !important; }\n  .mt-md-5 {\n    margin-top: 3rem !important; }\n  .mt-md-auto {\n    margin-top: auto !important; }\n  .me-md-0 {\n    margin-right: 0 !important; }\n  .me-md-1 {\n    margin-right: 0.25rem !important; }\n  .me-md-2 {\n    margin-right: 0.5rem !important; }\n  .me-md-3 {\n    margin-right: 1rem !important; }\n  .me-md-4 {\n    margin-right: 1.5rem !important; }\n  .me-md-5 {\n    margin-right: 3rem !important; }\n  .me-md-auto {\n    margin-right: auto !important; }\n  .mb-md-0 {\n    margin-bottom: 0 !important; }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-md-3 {\n    margin-bottom: 1rem !important; }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-md-5 {\n    margin-bottom: 3rem !important; }\n  .mb-md-auto {\n    margin-bottom: auto !important; }\n  .ms-md-0 {\n    margin-left: 0 !important; }\n  .ms-md-1 {\n    margin-left: 0.25rem !important; }\n  .ms-md-2 {\n    margin-left: 0.5rem !important; }\n  .ms-md-3 {\n    margin-left: 1rem !important; }\n  .ms-md-4 {\n    margin-left: 1.5rem !important; }\n  .ms-md-5 {\n    margin-left: 3rem !important; }\n  .ms-md-auto {\n    margin-left: auto !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-md-0 {\n    padding-top: 0 !important; }\n  .pt-md-1 {\n    padding-top: 0.25rem !important; }\n  .pt-md-2 {\n    padding-top: 0.5rem !important; }\n  .pt-md-3 {\n    padding-top: 1rem !important; }\n  .pt-md-4 {\n    padding-top: 1.5rem !important; }\n  .pt-md-5 {\n    padding-top: 3rem !important; }\n  .pe-md-0 {\n    padding-right: 0 !important; }\n  .pe-md-1 {\n    padding-right: 0.25rem !important; }\n  .pe-md-2 {\n    padding-right: 0.5rem !important; }\n  .pe-md-3 {\n    padding-right: 1rem !important; }\n  .pe-md-4 {\n    padding-right: 1.5rem !important; }\n  .pe-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-0 {\n    padding-bottom: 0 !important; }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-md-3 {\n    padding-bottom: 1rem !important; }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-md-5 {\n    padding-bottom: 3rem !important; }\n  .ps-md-0 {\n    padding-left: 0 !important; }\n  .ps-md-1 {\n    padding-left: 0.25rem !important; }\n  .ps-md-2 {\n    padding-left: 0.5rem !important; }\n  .ps-md-3 {\n    padding-left: 1rem !important; }\n  .ps-md-4 {\n    padding-left: 1.5rem !important; }\n  .ps-md-5 {\n    padding-left: 3rem !important; }\n  .text-md-start {\n    text-align: left !important; }\n  .text-md-end {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important; }\n  .float-lg-end {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-grid {\n    display: grid !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; }\n  .d-lg-none {\n    display: none !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-lg-0 {\n    gap: 0 !important; }\n  .gap-lg-1 {\n    gap: 0.25rem !important; }\n  .gap-lg-2 {\n    gap: 0.5rem !important; }\n  .gap-lg-3 {\n    gap: 1rem !important; }\n  .gap-lg-4 {\n    gap: 1.5rem !important; }\n  .gap-lg-5 {\n    gap: 3rem !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; }\n  .order-lg-first {\n    order: -1 !important; }\n  .order-lg-0 {\n    order: 0 !important; }\n  .order-lg-1 {\n    order: 1 !important; }\n  .order-lg-2 {\n    order: 2 !important; }\n  .order-lg-3 {\n    order: 3 !important; }\n  .order-lg-4 {\n    order: 4 !important; }\n  .order-lg-5 {\n    order: 5 !important; }\n  .order-lg-last {\n    order: 6 !important; }\n  .m-lg-0 {\n    margin: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-lg-0 {\n    margin-top: 0 !important; }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mt-lg-3 {\n    margin-top: 1rem !important; }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mt-lg-5 {\n    margin-top: 3rem !important; }\n  .mt-lg-auto {\n    margin-top: auto !important; }\n  .me-lg-0 {\n    margin-right: 0 !important; }\n  .me-lg-1 {\n    margin-right: 0.25rem !important; }\n  .me-lg-2 {\n    margin-right: 0.5rem !important; }\n  .me-lg-3 {\n    margin-right: 1rem !important; }\n  .me-lg-4 {\n    margin-right: 1.5rem !important; }\n  .me-lg-5 {\n    margin-right: 3rem !important; }\n  .me-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-0 {\n    margin-bottom: 0 !important; }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important; }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important; }\n  .mb-lg-auto {\n    margin-bottom: auto !important; }\n  .ms-lg-0 {\n    margin-left: 0 !important; }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important; }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important; }\n  .ms-lg-3 {\n    margin-left: 1rem !important; }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important; }\n  .ms-lg-5 {\n    margin-left: 3rem !important; }\n  .ms-lg-auto {\n    margin-left: auto !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-lg-0 {\n    padding-top: 0 !important; }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pt-lg-3 {\n    padding-top: 1rem !important; }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pt-lg-5 {\n    padding-top: 3rem !important; }\n  .pe-lg-0 {\n    padding-right: 0 !important; }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pe-lg-3 {\n    padding-right: 1rem !important; }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pe-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-0 {\n    padding-bottom: 0 !important; }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important; }\n  .ps-lg-0 {\n    padding-left: 0 !important; }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important; }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important; }\n  .ps-lg-3 {\n    padding-left: 1rem !important; }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important; }\n  .ps-lg-5 {\n    padding-left: 3rem !important; }\n  .text-lg-start {\n    text-align: left !important; }\n  .text-lg-end {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important; }\n  .float-xl-end {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-grid {\n    display: grid !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; }\n  .d-xl-none {\n    display: none !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-xl-0 {\n    gap: 0 !important; }\n  .gap-xl-1 {\n    gap: 0.25rem !important; }\n  .gap-xl-2 {\n    gap: 0.5rem !important; }\n  .gap-xl-3 {\n    gap: 1rem !important; }\n  .gap-xl-4 {\n    gap: 1.5rem !important; }\n  .gap-xl-5 {\n    gap: 3rem !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; }\n  .order-xl-first {\n    order: -1 !important; }\n  .order-xl-0 {\n    order: 0 !important; }\n  .order-xl-1 {\n    order: 1 !important; }\n  .order-xl-2 {\n    order: 2 !important; }\n  .order-xl-3 {\n    order: 3 !important; }\n  .order-xl-4 {\n    order: 4 !important; }\n  .order-xl-5 {\n    order: 5 !important; }\n  .order-xl-last {\n    order: 6 !important; }\n  .m-xl-0 {\n    margin: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-xl-0 {\n    margin-top: 0 !important; }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mt-xl-3 {\n    margin-top: 1rem !important; }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mt-xl-5 {\n    margin-top: 3rem !important; }\n  .mt-xl-auto {\n    margin-top: auto !important; }\n  .me-xl-0 {\n    margin-right: 0 !important; }\n  .me-xl-1 {\n    margin-right: 0.25rem !important; }\n  .me-xl-2 {\n    margin-right: 0.5rem !important; }\n  .me-xl-3 {\n    margin-right: 1rem !important; }\n  .me-xl-4 {\n    margin-right: 1.5rem !important; }\n  .me-xl-5 {\n    margin-right: 3rem !important; }\n  .me-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-0 {\n    margin-bottom: 0 !important; }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important; }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important; }\n  .mb-xl-auto {\n    margin-bottom: auto !important; }\n  .ms-xl-0 {\n    margin-left: 0 !important; }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important; }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important; }\n  .ms-xl-3 {\n    margin-left: 1rem !important; }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important; }\n  .ms-xl-5 {\n    margin-left: 3rem !important; }\n  .ms-xl-auto {\n    margin-left: auto !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-xl-0 {\n    padding-top: 0 !important; }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pt-xl-3 {\n    padding-top: 1rem !important; }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pt-xl-5 {\n    padding-top: 3rem !important; }\n  .pe-xl-0 {\n    padding-right: 0 !important; }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pe-xl-3 {\n    padding-right: 1rem !important; }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pe-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-0 {\n    padding-bottom: 0 !important; }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important; }\n  .ps-xl-0 {\n    padding-left: 0 !important; }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important; }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important; }\n  .ps-xl-3 {\n    padding-left: 1rem !important; }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important; }\n  .ps-xl-5 {\n    padding-left: 3rem !important; }\n  .text-xl-start {\n    text-align: left !important; }\n  .text-xl-end {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important; }\n  .float-xxl-end {\n    float: right !important; }\n  .float-xxl-none {\n    float: none !important; }\n  .d-xxl-inline {\n    display: inline !important; }\n  .d-xxl-inline-block {\n    display: inline-block !important; }\n  .d-xxl-block {\n    display: block !important; }\n  .d-xxl-grid {\n    display: grid !important; }\n  .d-xxl-table {\n    display: table !important; }\n  .d-xxl-table-row {\n    display: table-row !important; }\n  .d-xxl-table-cell {\n    display: table-cell !important; }\n  .d-xxl-flex {\n    display: flex !important; }\n  .d-xxl-inline-flex {\n    display: inline-flex !important; }\n  .d-xxl-none {\n    display: none !important; }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xxl-row {\n    flex-direction: row !important; }\n  .flex-xxl-column {\n    flex-direction: column !important; }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .gap-xxl-0 {\n    gap: 0 !important; }\n  .gap-xxl-1 {\n    gap: 0.25rem !important; }\n  .gap-xxl-2 {\n    gap: 0.5rem !important; }\n  .gap-xxl-3 {\n    gap: 1rem !important; }\n  .gap-xxl-4 {\n    gap: 1.5rem !important; }\n  .gap-xxl-5 {\n    gap: 3rem !important; }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xxl-center {\n    justify-content: center !important; }\n  .justify-content-xxl-between {\n    justify-content: space-between !important; }\n  .justify-content-xxl-around {\n    justify-content: space-around !important; }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important; }\n  .align-items-xxl-start {\n    align-items: flex-start !important; }\n  .align-items-xxl-end {\n    align-items: flex-end !important; }\n  .align-items-xxl-center {\n    align-items: center !important; }\n  .align-items-xxl-baseline {\n    align-items: baseline !important; }\n  .align-items-xxl-stretch {\n    align-items: stretch !important; }\n  .align-content-xxl-start {\n    align-content: flex-start !important; }\n  .align-content-xxl-end {\n    align-content: flex-end !important; }\n  .align-content-xxl-center {\n    align-content: center !important; }\n  .align-content-xxl-between {\n    align-content: space-between !important; }\n  .align-content-xxl-around {\n    align-content: space-around !important; }\n  .align-content-xxl-stretch {\n    align-content: stretch !important; }\n  .align-self-xxl-auto {\n    align-self: auto !important; }\n  .align-self-xxl-start {\n    align-self: flex-start !important; }\n  .align-self-xxl-end {\n    align-self: flex-end !important; }\n  .align-self-xxl-center {\n    align-self: center !important; }\n  .align-self-xxl-baseline {\n    align-self: baseline !important; }\n  .align-self-xxl-stretch {\n    align-self: stretch !important; }\n  .order-xxl-first {\n    order: -1 !important; }\n  .order-xxl-0 {\n    order: 0 !important; }\n  .order-xxl-1 {\n    order: 1 !important; }\n  .order-xxl-2 {\n    order: 2 !important; }\n  .order-xxl-3 {\n    order: 3 !important; }\n  .order-xxl-4 {\n    order: 4 !important; }\n  .order-xxl-5 {\n    order: 5 !important; }\n  .order-xxl-last {\n    order: 6 !important; }\n  .m-xxl-0 {\n    margin: 0 !important; }\n  .m-xxl-1 {\n    margin: 0.25rem !important; }\n  .m-xxl-2 {\n    margin: 0.5rem !important; }\n  .m-xxl-3 {\n    margin: 1rem !important; }\n  .m-xxl-4 {\n    margin: 1.5rem !important; }\n  .m-xxl-5 {\n    margin: 3rem !important; }\n  .m-xxl-auto {\n    margin: auto !important; }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important; }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important; }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important; }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important; }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important; }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important; }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important; }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important; }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important; }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important; }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important; }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important; }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important; }\n  .mt-xxl-0 {\n    margin-top: 0 !important; }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important; }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important; }\n  .mt-xxl-3 {\n    margin-top: 1rem !important; }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important; }\n  .mt-xxl-5 {\n    margin-top: 3rem !important; }\n  .mt-xxl-auto {\n    margin-top: auto !important; }\n  .me-xxl-0 {\n    margin-right: 0 !important; }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important; }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important; }\n  .me-xxl-3 {\n    margin-right: 1rem !important; }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important; }\n  .me-xxl-5 {\n    margin-right: 3rem !important; }\n  .me-xxl-auto {\n    margin-right: auto !important; }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important; }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important; }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important; }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important; }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important; }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important; }\n  .mb-xxl-auto {\n    margin-bottom: auto !important; }\n  .ms-xxl-0 {\n    margin-left: 0 !important; }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important; }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important; }\n  .ms-xxl-3 {\n    margin-left: 1rem !important; }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important; }\n  .ms-xxl-5 {\n    margin-left: 3rem !important; }\n  .ms-xxl-auto {\n    margin-left: auto !important; }\n  .p-xxl-0 {\n    padding: 0 !important; }\n  .p-xxl-1 {\n    padding: 0.25rem !important; }\n  .p-xxl-2 {\n    padding: 0.5rem !important; }\n  .p-xxl-3 {\n    padding: 1rem !important; }\n  .p-xxl-4 {\n    padding: 1.5rem !important; }\n  .p-xxl-5 {\n    padding: 3rem !important; }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important; }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important; }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important; }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important; }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important; }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important; }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important; }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important; }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important; }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important; }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important; }\n  .pt-xxl-0 {\n    padding-top: 0 !important; }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important; }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important; }\n  .pt-xxl-3 {\n    padding-top: 1rem !important; }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important; }\n  .pt-xxl-5 {\n    padding-top: 3rem !important; }\n  .pe-xxl-0 {\n    padding-right: 0 !important; }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important; }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important; }\n  .pe-xxl-3 {\n    padding-right: 1rem !important; }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important; }\n  .pe-xxl-5 {\n    padding-right: 3rem !important; }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important; }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important; }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important; }\n  .ps-xxl-0 {\n    padding-left: 0 !important; }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important; }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important; }\n  .ps-xxl-3 {\n    padding-left: 1rem !important; }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important; }\n  .ps-xxl-5 {\n    padding-left: 3rem !important; }\n  .text-xxl-start {\n    text-align: left !important; }\n  .text-xxl-end {\n    text-align: right !important; }\n  .text-xxl-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important; }\n  .fs-2 {\n    font-size: 2rem !important; }\n  .fs-3 {\n    font-size: 1.75rem !important; }\n  .fs-4 {\n    font-size: 1.5rem !important; }\n  .fs-sm-1 {\n    font-size: 2.5rem !important; }\n  .fs-sm-2 {\n    font-size: 2rem !important; }\n  .fs-sm-3 {\n    font-size: 1.75rem !important; }\n  .fs-sm-4 {\n    font-size: 1.5rem !important; }\n  .fs-md-1 {\n    font-size: 2.5rem !important; }\n  .fs-md-2 {\n    font-size: 2rem !important; }\n  .fs-md-3 {\n    font-size: 1.75rem !important; }\n  .fs-md-4 {\n    font-size: 1.5rem !important; }\n  .fs-lg-1 {\n    font-size: 2.5rem !important; }\n  .fs-lg-2 {\n    font-size: 2rem !important; }\n  .fs-lg-3 {\n    font-size: 1.75rem !important; }\n  .fs-lg-4 {\n    font-size: 1.5rem !important; } }\n\n@media print {\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-grid {\n    display: grid !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; }\n  .d-print-none {\n    display: none !important; } }\n",":root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --#{$variable-prefix}font-sans-serif: #{inspect($font-family-sans-serif)};\n  --#{$variable-prefix}font-monospace: #{inspect($font-family-monospace)};\n  --#{$variable-prefix}gradient: #{$gradient};\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n\n// Root\n//\n// Ability to the value of the root font sizes, affecting the value of `rem`.\n// null by default, thus nothing is generated.\n\n:root {\n  font-size: $font-size-root;\n\n  @if $enable-smooth-scroll {\n    @media (prefers-reduced-motion: no-preference) {\n      scroll-behavior: smooth;\n    }\n  }\n}\n\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Prevent adjustments of font size after orientation changes in iOS.\n// 4. Change the default tap highlight to be completely transparent in iOS.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: $body-text-align;\n  background-color: $body-bg; // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}\n\n\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n// on elements that programmatically receive focus but wouldn't normally show a visible\n// focus outline. In general, this would mean that the outline is only applied if the\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\n// wants focus outlines to always be presented.\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n// Content grouping\n//\n// 1. Reset Firefox's gray color\n// 2. Set correct height and prevent the `size` attribute to make the `hr` look like an input field\n\nhr {\n  margin: $hr-margin-y 0;\n  color: $hr-color; // 1\n  background-color: currentColor;\n  border: 0;\n  opacity: $hr-opacity;\n}\n\nhr:not([size]) {\n  height: $hr-height; // 2\n}\n\n\n// Typography\n//\n// 1. Remove top margins from headings\n//    By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n//    margin for easier control within type scales as it avoids margin collapsing.\n\n%heading {\n  margin-top: 0; // 1\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-style: $headings-font-style;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1 {\n  @extend %heading;\n  @include font-size($h1-font-size);\n}\n\nh2 {\n  @extend %heading;\n  @include font-size($h2-font-size);\n}\n\nh3 {\n  @extend %heading;\n  @include font-size($h3-font-size);\n}\n\nh4 {\n  @extend %heading;\n  @include font-size($h4-font-size);\n}\n\nh5 {\n  @extend %heading;\n  @include font-size($h5-font-size);\n}\n\nh6 {\n  @extend %heading;\n  @include font-size($h6-font-size);\n}\n\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\n\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-bs-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-bs-original-title] { // 1\n  text-decoration: underline; // 2\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  text-decoration-skip-ink: none; // 4\n}\n\n\n// Address\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\n\n// Lists\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\n// 1. Undo browser default\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // 1\n}\n\n\n// Blockquote\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\n\n// Strong\n//\n// Add the correct font weight in Chrome, Edge, and Safari\n\nb,\nstrong {\n  font-weight: $font-weight-bolder;\n}\n\n\n// Small\n//\n// Add the correct font size in all browsers\n\nsmall {\n  @include font-size($small-font-size);\n}\n\n\n// Mark\n\nmark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n// Sub and Sup\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n\nsub,\nsup {\n  position: relative;\n  @include font-size($sub-sup-font-size);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n// Links\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  &,\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n// Code\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-code;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n  direction: ltr #{\"/* rtl:ignore */\"};\n  unicode-bidi: bidi-override;\n}\n\n// 1. Remove browser default top margin\n// 2. Reset browser default of `1em` to use `rem`s\n// 3. Don't allow content to break outside\n\npre {\n  display: block;\n  margin-top: 0; // 1\n  margin-bottom: 1rem; // 2\n  overflow: auto; // 3\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n\n  kbd {\n    padding: 0;\n    @include font-size(1em);\n    font-weight: $nested-kbd-font-weight;\n  }\n}\n\n\n// Figures\n//\n// Apply a consistent margin strategy (matches our type styles).\n\nfigure {\n  margin: 0 0 1rem;\n}\n\n\n// Images and content\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\n\n// Tables\n//\n// Prevent double borders\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: $table-cell-padding-y;\n  padding-bottom: $table-cell-padding-y;\n  color: $table-caption-color;\n  text-align: left;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n\n// Forms\n//\n// 1. Allow labels to use `margin` for spacing.\n\nlabel {\n  display: inline-block; // 1\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n// See https://github.com/twbs/bootstrap/issues/24093\n\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Work around a Firefox bug where the transparent `button` background\n// results in a loss of the default `button` focus styles.\n// Credit https://github.com/suitcss/base/\n\nbutton:focus {\n  outline: dotted 1px;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n// 1. Remove the margin in Firefox and Safari\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // 1\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\n// Remove the inheritance of text transform in Firefox\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n// Remove the inheritance of word-wrap in Safari.\n// See https://github.com/twbs/bootstrap/issues/24990\n\nselect {\n  word-wrap: normal;\n}\n\n// Remove the dropdown arrow in Chrome from inputs built with datalists.\n// See https://stackoverflow.com/a/54997118\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\n// 3. Opinionated: add \"hand\" cursor to non-disabled button elements.\n\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n\n  @if $enable-button-pointers {\n    &:not(:disabled) {\n      cursor: pointer; // 3\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n// 1. Textareas should really only resize vertically so they don't break their (horizontal) containers.\n\ntextarea {\n  resize: vertical; // 1\n}\n\n// 1. Browsers set a default `min-width: min-content;` on fieldsets,\n//    unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n//    So we reset that to ensure fieldsets behave more like a standard block element.\n//    See https://github.com/twbs/bootstrap/issues/12359\n//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n// 2. Reset the default outline behavior of fieldsets so they don't affect page layout.\n\nfieldset {\n  min-width: 0; // 1\n  padding: 0; // 2\n  margin: 0; // 2\n  border: 0; // 2\n}\n\n// 1. By using `float: left`, the legend will behave like a block element.\n//    This way the border of a fieldset wraps around the legend if present.\n// 2. Fix wrapping bug.\n//    See https://github.com/twbs/bootstrap/issues/29712\n\nlegend {\n  float: left; // 1\n  width: 100%;\n  padding: 0;\n  margin-bottom: $legend-margin-bottom;\n  @include font-size($legend-font-size);\n  font-weight: $legend-font-weight;\n  line-height: inherit;\n\n  + * {\n    clear: left; // 2\n  }\n}\n\n// Fix height of inputs with a type of datetime-local, date, month, week, or time\n// See https://github.com/twbs/bootstrap/issues/18842\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n// 1. Correct the outline style in Safari.\n// 2. This overrides the extra rounded corners on search inputs in iOS so that our\n//    `.form-control` class can properly style them. Note that this cannot simply\n//    be added to `.form-control` as it's not specific enough. For details, see\n//    https://github.com/twbs/bootstrap/issues/11586.\n\n[type=\"search\"] {\n  outline-offset: -2px; // 1\n  -webkit-appearance: textfield; // 2\n}\n\n// 1. A few input types should stay LTR\n// See https://rtlstyling.com/posts/rtl-styling#form-inputs\n// 2. RTL only output\n// See https://rtlcss.com/learn/usage-guide/control-directives/#raw\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n\n// Remove the inner padding in Chrome and Safari on macOS.\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n// Remove padding around color pickers in webkit browsers\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n\n// Inherit font family and line height for file input buttons\n\n// stylelint-disable-next-line selector-pseudo-element-no-unknown\n::file-selector-button {\n  font: inherit;\n}\n\n// 1. Change font properties to `inherit`\n// 2. Correct the inability to style clickable types in iOS and Safari.\n\n::-webkit-file-upload-button {\n  font: inherit; // 1\n  -webkit-appearance: button; // 2\n}\n\n// Correct element displays\n\noutput {\n  display: inline-block;\n}\n\n// Remove border from iframe\n\niframe {\n  border: 0;\n}\n\n// Summary\n//\n// 1. Add the correct display in all browsers\n\nsummary {\n  display: list-item; // 1\n  cursor: pointer;\n}\n\n\n// Progress\n//\n// Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n// Hidden attribute\n//\n// Always hide an element with the `hidden` HTML attribute.\n\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n// fusv-disable\n$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;\n// fusv-enable\n\n$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;\n\n// scss-docs-start colors-map\n$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;\n// scss-docs-end colors-map\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;\n\n// scss-docs-start theme-colors-map\n$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;\n// scss-docs-end theme-colors-map\n\n// The contrast ratio to reach against white, to determine if color changes from \"light\" to \"dark\". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.\n// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast\n$min-contrast-ratio:   4.5 !default;\n\n// Customize the light and dark text colors for use in our color contrast function.\n$color-contrast-dark:      $black !default;\n$color-contrast-light:     $white !default;\n\n// fusv-disable\n$blue-100: tint-color($blue, 80%) !default;\n$blue-200: tint-color($blue, 60%) !default;\n$blue-300: tint-color($blue, 40%) !default;\n$blue-400: tint-color($blue, 20%) !default;\n$blue-500: $blue !default;\n$blue-600: shade-color($blue, 20%) !default;\n$blue-700: shade-color($blue, 40%) !default;\n$blue-800: shade-color($blue, 60%) !default;\n$blue-900: shade-color($blue, 80%) !default;\n\n$indigo-100: tint-color($indigo, 80%) !default;\n$indigo-200: tint-color($indigo, 60%) !default;\n$indigo-300: tint-color($indigo, 40%) !default;\n$indigo-400: tint-color($indigo, 20%) !default;\n$indigo-500: $indigo !default;\n$indigo-600: shade-color($indigo, 20%) !default;\n$indigo-700: shade-color($indigo, 40%) !default;\n$indigo-800: shade-color($indigo, 60%) !default;\n$indigo-900: shade-color($indigo, 80%) !default;\n\n$purple-100: tint-color($purple, 80%) !default;\n$purple-200: tint-color($purple, 60%) !default;\n$purple-300: tint-color($purple, 40%) !default;\n$purple-400: tint-color($purple, 20%) !default;\n$purple-500: $purple !default;\n$purple-600: shade-color($purple, 20%) !default;\n$purple-700: shade-color($purple, 40%) !default;\n$purple-800: shade-color($purple, 60%) !default;\n$purple-900: shade-color($purple, 80%) !default;\n\n$pink-100: tint-color($pink, 80%) !default;\n$pink-200: tint-color($pink, 60%) !default;\n$pink-300: tint-color($pink, 40%) !default;\n$pink-400: tint-color($pink, 20%) !default;\n$pink-500: $pink !default;\n$pink-600: shade-color($pink, 20%) !default;\n$pink-700: shade-color($pink, 40%) !default;\n$pink-800: shade-color($pink, 60%) !default;\n$pink-900: shade-color($pink, 80%) !default;\n\n$red-100: tint-color($red, 80%) !default;\n$red-200: tint-color($red, 60%) !default;\n$red-300: tint-color($red, 40%) !default;\n$red-400: tint-color($red, 20%) !default;\n$red-500: $red !default;\n$red-600: shade-color($red, 20%) !default;\n$red-700: shade-color($red, 40%) !default;\n$red-800: shade-color($red, 60%) !default;\n$red-900: shade-color($red, 80%) !default;\n\n$orange-100: tint-color($orange, 80%) !default;\n$orange-200: tint-color($orange, 60%) !default;\n$orange-300: tint-color($orange, 40%) !default;\n$orange-400: tint-color($orange, 20%) !default;\n$orange-500: $orange !default;\n$orange-600: shade-color($orange, 20%) !default;\n$orange-700: shade-color($orange, 40%) !default;\n$orange-800: shade-color($orange, 60%) !default;\n$orange-900: shade-color($orange, 80%) !default;\n\n$yellow-100: tint-color($yellow, 80%) !default;\n$yellow-200: tint-color($yellow, 60%) !default;\n$yellow-300: tint-color($yellow, 40%) !default;\n$yellow-400: tint-color($yellow, 20%) !default;\n$yellow-500: $yellow !default;\n$yellow-600: shade-color($yellow, 20%) !default;\n$yellow-700: shade-color($yellow, 40%) !default;\n$yellow-800: shade-color($yellow, 60%) !default;\n$yellow-900: shade-color($yellow, 80%) !default;\n\n$green-100: tint-color($green, 80%) !default;\n$green-200: tint-color($green, 60%) !default;\n$green-300: tint-color($green, 40%) !default;\n$green-400: tint-color($green, 20%) !default;\n$green-500: $green !default;\n$green-600: shade-color($green, 20%) !default;\n$green-700: shade-color($green, 40%) !default;\n$green-800: shade-color($green, 60%) !default;\n$green-900: shade-color($green, 80%) !default;\n\n$teal-100: tint-color($teal, 80%) !default;\n$teal-200: tint-color($teal, 60%) !default;\n$teal-300: tint-color($teal, 40%) !default;\n$teal-400: tint-color($teal, 20%) !default;\n$teal-500: $teal !default;\n$teal-600: shade-color($teal, 20%) !default;\n$teal-700: shade-color($teal, 40%) !default;\n$teal-800: shade-color($teal, 60%) !default;\n$teal-900: shade-color($teal, 80%) !default;\n\n$cyan-100: tint-color($cyan, 80%) !default;\n$cyan-200: tint-color($cyan, 60%) !default;\n$cyan-300: tint-color($cyan, 40%) !default;\n$cyan-400: tint-color($cyan, 20%) !default;\n$cyan-500: $cyan !default;\n$cyan-600: shade-color($cyan, 20%) !default;\n$cyan-700: shade-color($cyan, 40%) !default;\n$cyan-800: shade-color($cyan, 60%) !default;\n$cyan-900: shade-color($cyan, 80%) !default;\n// fusv-enable\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                true !default;\n$enable-rounded:              true !default;\n$enable-shadows:              false !default;\n$enable-gradients:            false !default;\n$enable-transitions:          true !default;\n$enable-reduced-motion:       true !default;\n$enable-smooth-scroll:        true !default;\n$enable-grid-classes:         true !default;\n$enable-button-pointers:      true !default;\n$enable-rfs:                  true !default;\n$enable-validation-icons:     true !default;\n$enable-negative-margins:     false !default;\n$enable-deprecation-messages: true !default;\n$enable-important-utilities:  true !default;\n\n// Prefix for :root CSS variables\n\n$variable-prefix:             bs- !default;\n\n// Gradient\n//\n// The gradient which is added to components if `$enable-gradients` is `true`\n// This gradient is also added to elements with `.bg-gradient`\n$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer / 4,\n  2: $spacer / 2,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;\n\n$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;\n\n// Position\n//\n// Define the edge positioning anchors of the position utilities.\n\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n$body-text-align:           null !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              $primary !default;\n$link-decoration:                         underline !default;\n$link-shade-percentage:                   20% !default;\n$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;\n$link-hover-decoration:                   null !default;\n\n$stretched-link-pseudo-element:           after !default;\n$stretched-link-z-index:                  1 !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n// scss-docs-start grid-breakpoints\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n// scss-docs-end grid-breakpoints\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n// scss-docs-start container-max-widths\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n// scss-docs-end container-max-widths\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           1.5rem !default;\n$grid-row-columns:            6 !default;\n\n$gutters: $spacers !default;\n\n// Container padding\n\n$container-padding-x: $grid-gutter-width / 2 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$border-width:                1px !default;\n$border-widths: (\n  0: 0,\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n\n$border-color:                $gray-300 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-sm:            .2rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-pill:          50rem !default;\n\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         $primary !default;\n\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n// stylelint-disable function-disallowed-list\n// scss-docs-start aspect-ratios\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n// scss-docs-end aspect-ratios\n// stylelint-enable function-disallowed-list\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$variable-prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$variable-prefix}font-monospace) !default;\n\n// $font-size-root effects the value of `rem`, which is used for as well font sizes, paddings and margins\n// $font-size-base effects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n// scss-docs-start font-sizes\n$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;\n// scss-docs-end font-sizes\n\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n\n// scss-docs-start display-headings\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;\n// scss-docs-end display-headings\n\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n$text-muted:                  $gray-600 !default;\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n$hr-height:                   $border-width !default;\n$hr-opacity:                  .25 !default;\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n// scss-docs-start table-variables\n$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba($black, $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba($black, $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba($black, $table-hover-bg-factor) !default;\n\n$table-border-factor:         .1 !default;\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-striped-order:         odd !default;\n\n$table-group-separator-color: currentColor !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-scale:              -80% !default;\n\n$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;\n// scss-docs-end table-variables\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         .25rem !default;\n$input-btn-focus-color-opacity: .25 !default;\n$input-btn-focus-color:         rgba($component-active-bg, $input-btn-focus-color-opacity) !default;\n$input-btn-focus-box-shadow:    0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              $link-color !default;\n$btn-link-hover-color:        $link-hover-color !default;\n$btn-link-disabled-color:     $gray-600 !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       $text-muted !default;\n\n$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;\n\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           $body-color !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      $box-shadow-inset !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $body-bg !default;\n$form-check-input-border:                 1px solid rgba(0, 0, 0, .25) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-switch-color:               rgba(0, 0, 0, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;\n\n$form-check-inline-margin-end:    1rem !default;\n\n$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-disabled-color:        $gray-600 !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-bg:           $gray-200 !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: add(1em * .75, (2 * $form-select-padding-y * .75) + $form-select-padding-x + $form-select-indicator-padding) !default;\n$form-select-feedback-icon-position:    center right ($form-select-padding-x + $form-select-indicator-padding) !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $border-radius !default;\n$form-select-box-shadow:          $box-shadow-inset !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n\n$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             $gray-300 !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     $box-shadow-inset !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             $gray-500 !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             $input-group-addon-bg !default;\n$form-file-button-hover-bg:       shade-color($form-file-button-bg, 5%) !default;\n\n$form-floating-height:            add(3.5rem, $input-height-border) !default;\n$form-floating-padding-x:         $input-padding-x !default;\n$form-floating-padding-y:         1rem !default;\n$form-floating-input-padding-t:   1.625rem !default;\n$form-floating-input-padding-b:   .625rem !default;\n$form-floating-label-opacity:     .65 !default;\n$form-floating-label-transform:   scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-transition:        opacity .1s ease-in-out, transform .1s ease-in-out !default;\n\n// Form validation\n\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n\n// scss-docs-start form-validation-states\n$form-validation-states: (\n  \"valid\": (\n    \"color\": $form-feedback-valid-color,\n    \"icon\": $form-feedback-icon-valid\n  ),\n  \"invalid\": (\n    \"color\": $form-feedback-invalid-color,\n    \"icon\": $form-feedback-icon-invalid\n  )\n) !default;\n// scss-docs-end form-validation-states\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n// scss-docs-start zindex-stack\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n// scss-docs-end zindex-stack\n\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    null !default;\n$nav-link-hover-color:              null !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n\n// Navbar\n\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n\n$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .55) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer / 2 !default;\n$dropdown-box-shadow:               $box-shadow !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         shade-color($gray-900, 10%) !default;\n$dropdown-link-hover-bg:            $gray-100 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-600 !default;\n\n$dropdown-item-padding-y:           $spacer / 4 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding:           $dropdown-padding-y $dropdown-item-padding-x !default;\n\n$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;\n\n\n// Pagination\n\n$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-radius:          $border-radius !default;\n$pagination-margin-start:           -$pagination-border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-color:            $link-hover-color !default;\n$pagination-focus-bg:               $gray-200 !default;\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n// Cards\n\n$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer / 2 !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y / 2 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          $spacer !default;\n\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n\n// Accordion\n$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         $body-color !default;\n$accordion-bg:                            transparent !default;\n$accordion-border-width:                  $border-width !default;\n$accordion-border-color:                  rgba($black, .125) !default;\n$accordion-border-radius:                 $border-radius !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  $accordion-color !default;\n$accordion-button-bg:                     $accordion-bg !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              tint-color($component-active-bg, 90%) !default;\n$accordion-button-active-color:           shade-color($primary, 10%) !default;\n\n$accordion-button-focus-border-color:     $input-focus-border-color !default;\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $accordion-color !default;\n$accordion-icon-active-color:             $accordion-button-active-color !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n// Tooltips\n\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer / 4 !default;\n$tooltip-padding-x:                 $spacer / 2 !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n// Form tooltips must come after regular tooltips\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   null !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n\n\n// Popovers\n\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                $box-shadow !default;\n\n$popover-header-bg:                 shade-color($popover-bg, 6%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Toasts\n\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               $border-radius !default;\n$toast-box-shadow:                  $box-shadow !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               $border-radius !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               $spacer !default;\n\n// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       $box-shadow-sm !default;\n$modal-content-box-shadow-sm-up:    $box-shadow !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   $spacer !default;\n$alert-padding-x:                   $spacer !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n$alert-bg-scale:                    -80% !default;\n$alert-border-scale:                -70% !default;\n$alert-color-scale:                 40% !default;\n\n$alert-dismissible-padding-r:       $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               $box-shadow-inset !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n\n// List group\n\n$list-group-color:                  null !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         $spacer / 2 !default;\n$list-group-item-padding-x:         $spacer !default;\n$list-group-item-bg-scale:          -80% !default;\n$list-group-item-color-scale:       40% !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              $box-shadow-sm !default;\n\n\n// Figures\n\n$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;\n\n// Carousel\n\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n$carousel-dark-indicator-active-bg:  $black !default;\n$carousel-dark-caption-color:        $black !default;\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;\n\n\n// Spinners\n\n$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n\n\n// Close\n\n$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>\") !default;\n$btn-close-focus-shadow:     $input-btn-focus-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;\n\n// Code\n\n$code-font-size:                    $small-font-size !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         null !default;\n","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/master/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error \"`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.\";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Mode. Possibilities: \"min-media-query\", \"max-media-query\"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: $rfs-base-value / ($rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: $rfs-base-value / ($rfs-base-value * 0 + 1 / $rfs-rem-value);\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  }\n  @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + ' ' + if($rfs-unit == rem, #{$value / ($value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + ' ' + if($rfs-unit == px, #{$value / ($value * 0 + 1) * $rfs-rem-value}px, $value);\n      }\n      @else {\n        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + ' ' + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: '';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + ' 0';\n    }\n\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == \"number\", unit($value), false);\n\n      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + ' ' + $value;\n      }\n\n      @else {\n        // Remove unit from $value for calculations\n        $value: $value / ($value * 0 + if($unit == px, 1, 1 / $rfs-rem-value));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + ' ' +  if($rfs-unit == rem, #{$value / $rfs-rem-value}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + (abs($value) - $rfs-base-value) / $rfs-factor;\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{$value-min / $rfs-rem-value}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{$value-diff * 100 / $rfs-breakpoint}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + ' calc(' + $min-width + if($value < 0, ' - ', ' + ') + $variable-width + ')';\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluidVal: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluidVal {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluidVal);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule {\n        #{$property}: if($rfs-mode == max-media-query, $fluidVal, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n","// Bootstrap functions\n//\n// Utility mixins and functions for evaluating source code across our variables, maps, and mixins.\n\n// Ascending\n// Used to evaluate Sass maps like our grid breakpoints.\n@mixin _assert-ascending($map, $map-name) {\n  $prev-key: null;\n  $prev-num: null;\n  @each $key, $num in $map {\n    @if $prev-num == null or unit($num) == \"%\" or unit($prev-num) == \"%\" {\n      // Do nothing\n    } @else if not comparable($prev-num, $num) {\n      @warn \"Potentially invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    } @else if $prev-num >= $num {\n      @warn \"Invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} which isn't greater than #{$prev-num}, the value of the previous key '#{$prev-key}' !\";\n    }\n    $prev-key: $key;\n    $prev-num: $num;\n  }\n}\n\n// Starts at zero\n// Used to ensure the min-width of the lowest breakpoint starts at 0.\n@mixin _assert-starts-at-zero($map, $map-name: \"$grid-breakpoints\") {\n  @if length($map) > 0 {\n    $values: map-values($map);\n    $first-value: nth($values, 1);\n    @if $first-value != 0 {\n      @warn \"First breakpoint in #{$map-name} must start at 0, but starts at #{$first-value}.\";\n    }\n  }\n}\n\n// Internal Bootstrap function to turn maps into its negative variant.\n// It prefixes the keys with `n` and makes the value negative.\n@function negativify-map($map) {\n  $result: ();\n  @each $key, $value in $map {\n    @if $key != 0 {\n      $result: map-merge($result, (\"n\" + $key: (-$value)));\n    }\n  }\n  @return $result;\n}\n\n// Get multiple keys from a sass map\n@function map-get-multiple($map, $values) {\n  $result: ();\n  @each $key, $value in $map {\n    @if (index($values, $key) != null) {\n      $result: map-merge($result, ($key: $value));\n    }\n  }\n  @return $result;\n}\n\n// Replace `$search` with `$replace` in `$string`\n// Used on our SVG icon backgrounds for custom forms.\n//\n// @author Hugo Giraudel\n// @param {String} $string - Initial string\n// @param {String} $search - Substring to replace\n// @param {String} $replace ('') - New value\n// @return {String} - Updated string\n@function str-replace($string, $search, $replace: \"\") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n// See https://codepen.io/kevinweber/pen/dXWoRw\n//\n// Requires the use of quotes around data URIs.\n\n@function escape-svg($string) {\n  @if str-index($string, \"data:image/svg+xml\") {\n    @each $char, $encoded in $escaped-characters {\n      // Do not escape the url brackets\n      @if str-index($string, \"url(\") == 1 {\n        $string: url(\"#{str-replace(str-slice($string, 6, -3), $char, $encoded)}\");\n      } @else {\n        $string: str-replace($string, $char, $encoded);\n      }\n    }\n  }\n\n  @return $string;\n}\n\n// Color contrast\n// See https://github.com/twbs/bootstrap/pull/30168\n\n// A list of pre-calculated numbers of pow(($value / 255 + .055) / 1.055, 2.4). (from 0 to 255)\n// stylelint-disable-next-line scss/dollar-variable-default, scss/dollar-variable-pattern\n$_luminance-list: .0008 .001 .0011 .0013 .0015 .0017 .002 .0022 .0025 .0027 .003 .0033 .0037 .004 .0044 .0048 .0052 .0056 .006 .0065 .007 .0075 .008 .0086 .0091 .0097 .0103 .011 .0116 .0123 .013 .0137 .0144 .0152 .016 .0168 .0176 .0185 .0194 .0203 .0212 .0222 .0232 .0242 .0252 .0262 .0273 .0284 .0296 .0307 .0319 .0331 .0343 .0356 .0369 .0382 .0395 .0409 .0423 .0437 .0452 .0467 .0482 .0497 .0513 .0529 .0545 .0561 .0578 .0595 .0612 .063 .0648 .0666 .0685 .0704 .0723 .0742 .0762 .0782 .0802 .0823 .0844 .0865 .0887 .0908 .0931 .0953 .0976 .0999 .1022 .1046 .107 .1095 .1119 .1144 .117 .1195 .1221 .1248 .1274 .1301 .1329 .1356 .1384 .1413 .1441 .147 .15 .1529 .1559 .159 .162 .1651 .1683 .1714 .1746 .1779 .1812 .1845 .1878 .1912 .1946 .1981 .2016 .2051 .2086 .2122 .2159 .2195 .2232 .227 .2307 .2346 .2384 .2423 .2462 .2502 .2542 .2582 .2623 .2664 .2705 .2747 .2789 .2831 .2874 .2918 .2961 .3005 .305 .3095 .314 .3185 .3231 .3278 .3325 .3372 .3419 .3467 .3515 .3564 .3613 .3663 .3712 .3763 .3813 .3864 .3916 .3968 .402 .4072 .4125 .4179 .4233 .4287 .4342 .4397 .4452 .4508 .4564 .4621 .4678 .4735 .4793 .4851 .491 .4969 .5029 .5089 .5149 .521 .5271 .5333 .5395 .5457 .552 .5583 .5647 .5711 .5776 .5841 .5906 .5972 .6038 .6105 .6172 .624 .6308 .6376 .6445 .6514 .6584 .6654 .6724 .6795 .6867 .6939 .7011 .7084 .7157 .7231 .7305 .7379 .7454 .7529 .7605 .7682 .7758 .7835 .7913 .7991 .807 .8148 .8228 .8308 .8388 .8469 .855 .8632 .8714 .8796 .8879 .8963 .9047 .9131 .9216 .9301 .9387 .9473 .956 .9647 .9734 .9823 .9911 1;\n\n@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {\n  $foregrounds: $color-contrast-light, $color-contrast-dark, $white, $black;\n  $max-ratio: 0;\n  $max-ratio-color: null;\n\n  @each $color in $foregrounds {\n    $contrast-ratio: contrast-ratio($background, $color);\n    @if $contrast-ratio > $min-contrast-ratio {\n      @return $color;\n    } @else if $contrast-ratio > $max-ratio {\n      $max-ratio: $contrast-ratio;\n      $max-ratio-color: $color;\n    }\n  }\n\n  @warn \"Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...\";\n\n  @return $max-ratio-color;\n}\n\n@function contrast-ratio($background, $foreground: $color-contrast-light) {\n  $l1: luminance($background);\n  $l2: luminance(opaque($background, $foreground));\n\n  @return if($l1 > $l2, ($l1 + .05) / ($l2 + .05), ($l2 + .05) / ($l1 + .05));\n}\n\n// Return WCAG2.0 relative luminance\n// See https://www.w3.org/WAI/GL/wiki/Relative_luminance\n// See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n@function luminance($color) {\n  $rgb: (\n    \"r\": red($color),\n    \"g\": green($color),\n    \"b\": blue($color)\n  );\n\n  @each $name, $value in $rgb {\n    $value: if($value / 255 < .03928, $value / 255 / 12.92, nth($_luminance-list, $value + 1));\n    $rgb: map-merge($rgb, ($name: $value));\n  }\n\n  @return (map-get($rgb, \"r\") * .2126) + (map-get($rgb, \"g\") * .7152) + (map-get($rgb, \"b\") * .0722);\n}\n\n// Return opaque color\n// opaque(#fff, rgba(0, 0, 0, .5)) => #808080\n@function opaque($background, $foreground) {\n  @return mix(rgba($foreground, 1), $background, opacity($foreground) * 100);\n}\n\n// scss-docs-start color-functions\n// Tint a color: mix a color with white\n@function tint-color($color, $weight) {\n  @return mix(white, $color, $weight);\n}\n\n// Shade a color: mix a color with black\n@function shade-color($color, $weight) {\n  @return mix(black, $color, $weight);\n}\n\n// Shade the color if the weight is positive, else tint it\n@function shift-color($color, $weight) {\n  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));\n}\n// scss-docs-end color-functions\n\n// Return valid calc\n@function add($value1, $value2, $return-calc: true) {\n  @if $value1 == null {\n    @return $value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 + $value2;\n  }\n\n  @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(\" + \") + $value2);\n}\n\n@function subtract($value1, $value2, $return-calc: true) {\n  @if $value1 == null and $value2 == null {\n    @return null;\n  }\n\n  @if $value1 == null {\n    @return -$value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 - $value2;\n  }\n\n  @return if($return-calc == true, calc(#{$value1} - #{$value2}), $value1 + unquote(\" - \") + $value2);\n}\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n","//\n// Headings\n//\n.h1 {\n  @extend h1;\n}\n\n.h2 {\n  @extend h2;\n}\n\n.h3 {\n  @extend h3;\n}\n\n.h4 {\n  @extend h4;\n}\n\n.h5 {\n  @extend h5;\n}\n\n.h6 {\n  @extend h6;\n}\n\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n@each $display, $font-size in $display-font-sizes {\n  .display-#{$display} {\n    @include font-size($font-size);\n    font-weight: $display-font-weight;\n    line-height: $display-line-height;\n  }\n}\n\n//\n// Emphasis\n//\n.small {\n  @extend small;\n}\n\n.mark {\n  @extend mark;\n}\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size($initialism-font-size);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-font-size);\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n}\n\n.blockquote-footer {\n  margin-top: -$blockquote-margin-y;\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-footer-font-size);\n  color: $blockquote-footer-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer / 2;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n","// Container mixins\n\n@mixin make-container($gutter: $container-padding-x) {\n  width: 100%;\n  padding-right: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  padding-left: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  margin-right: auto;\n  margin-left: auto;\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @if not $n {\n    @error \"breakpoint `#{$name}` not found in `#{$breakpoints}`\";\n  }\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width.\n// The maximum value is reduced by 0.02px to work around the limitations of\n// `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $max: map-get($breakpoints, $name);\n  @return if($max and $max > 0, $max - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min:  breakpoint-min($name, $breakpoints);\n  $next: breakpoint-next($name, $breakpoints);\n  $max:  breakpoint-max($next);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($next, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n\n    > * {\n      @include make-col-ready();\n    }\n  }\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  --#{$variable-prefix}gutter-x: #{$gutter};\n  --#{$variable-prefix}gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--#{$variable-prefix}gutter-y) * -1); // stylelint-disable-line function-disallowed-list\n  margin-right: calc(var(--#{$variable-prefix}gutter-x) / -2); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(var(--#{$variable-prefix}gutter-x) / -2); // stylelint-disable-line function-disallowed-list\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  // Add box sizing if only the grid is loaded\n  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we set the width\n  // later on to override this initial width.\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%; // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid\n  padding-right: calc(var(--#{$variable-prefix}gutter-x) / 2); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$variable-prefix}gutter-x) / 2); // stylelint-disable-line function-disallowed-list\n  margin-top: var(--#{$variable-prefix}gutter-y);\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 auto;\n  width: percentage($size / $columns);\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 auto;\n    width: 100% / $count;\n  }\n}\n\n// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      }\n\n      .row-cols#{$infix}-auto > * {\n        @include make-col-auto();\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n\n      // Gutters\n      //\n      // Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.\n      @each $key, $value in $gutters {\n        .g#{$infix}-#{$key},\n        .gx#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-x: #{$value};\n        }\n\n        .g#{$infix}-#{$key},\n        .gy#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-y: #{$value};\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  --#{$variable-prefix}table-bg: #{$table-bg};\n  --#{$variable-prefix}table-striped-color: #{$table-striped-color};\n  --#{$variable-prefix}table-striped-bg: #{$table-striped-bg};\n  --#{$variable-prefix}table-active-color: #{$table-active-color};\n  --#{$variable-prefix}table-active-bg: #{$table-active-bg};\n  --#{$variable-prefix}table-hover-color: #{$table-hover-color};\n  --#{$variable-prefix}table-hover-bg: #{$table-hover-bg};\n\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  vertical-align: $table-cell-vertical-align;\n  border-color: $table-border-color;\n\n  // Target th & td\n  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.\n  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).\n  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y $table-cell-padding-x;\n    background-color: var(--#{$variable-prefix}table-bg);\n    background-image: linear-gradient(var(--#{$variable-prefix}table-accent-bg), var(--#{$variable-prefix}table-accent-bg));\n    border-bottom-width: $table-border-width;\n  }\n\n  > tbody {\n    vertical-align: inherit;\n  }\n\n  > thead {\n    vertical-align: bottom;\n  }\n\n  // Highlight border color between thead, tbody and tfoot.\n  > :not(:last-child) > :last-child > * {\n    border-bottom-color: $table-group-separator-color;\n  }\n}\n\n\n//\n// Change placement of captions with a class\n//\n\n.caption-top {\n  caption-side: top;\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n//\n// When borders are added on all sides of the cells, the corners can render odd when\n// these borders do not have the same color or if they are semi-transparent.\n// Therefor we add top and border bottoms to the `tr`s and left and right borders\n// to the `td`s or `th`s\n\n.table-bordered {\n  > :not(caption) > * {\n    border-width: $table-border-width 0;\n\n    // stylelint-disable-next-line selector-max-universal\n    > * {\n      border-width: 0 $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    border-bottom-width: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(#{$table-striped-order}) {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-striped-bg);\n    color: var(--#{$variable-prefix}table-striped-color);\n  }\n}\n\n// Active table\n//\n// The `.table-active` class can be added to highlight rows or cells\n\n.table-active {\n  --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-active-bg);\n  color: var(--#{$variable-prefix}table-active-color);\n}\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-hover-bg);\n    color: var(--#{$variable-prefix}table-hover-color);\n  }\n}\n\n\n// Table variants\n//\n// Table variants set the table cell backgrounds, border colors\n// and the colors of the striped, hovered & active tables\n\n@each $color, $value in $table-variants {\n  @include table-variant($color, $value);\n}\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n  @include media-breakpoint-down($breakpoint) {\n    .table-responsive#{$infix} {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n}\n","// scss-docs-start table-variant\n@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n\n    --#{$variable-prefix}table-bg: #{$background};\n    --#{$variable-prefix}table-striped-bg: #{$striped-bg};\n    --#{$variable-prefix}table-striped-color: #{color-contrast($striped-bg)};\n    --#{$variable-prefix}table-active-bg: #{$active-bg};\n    --#{$variable-prefix}table-active-color: #{color-contrast($active-bg)};\n    --#{$variable-prefix}table-hover-bg: #{$hover-bg};\n    --#{$variable-prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: $color;\n    border-color: mix($color, $background, percentage($table-border-factor));\n  }\n}\n// scss-docs-end table-variant\n","//\n// Labels\n//\n\n.form-label {\n  margin-bottom: $form-label-margin-bottom;\n  @include font-size($form-label-font-size);\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  color: $form-label-color;\n}\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  line-height: $input-line-height;\n  color: $form-label-color;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n}\n","//\n// Form text\n//\n\n.form-text {\n  margin-top: $form-text-margin-top;\n  @include font-size($form-text-font-size);\n  font-style: $form-text-font-style;\n  font-weight: $form-text-font-weight;\n  color: $form-text-color;\n}\n","//\n// General form controls (plus a few specific high-level interventions)\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n  appearance: none; // Fix appearance for date inputs in Safari\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  &[type=\"file\"] {\n    overflow: hidden; // prevent pseudo element button overlap\n\n    &:not(:disabled):not([readonly]) {\n      cursor: pointer;\n    }\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n\n  // Add some height to date inputs on iOS\n  // https://github.com/twbs/bootstrap/issues/23307\n  // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved\n  &::-webkit-date-and-time-value {\n    // Multiply line-height by 1em if it has no unit\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n  }\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    border-color: $input-disabled-border-color;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n\n  // File input buttons theming\n  // stylelint-disable-next-line selector-pseudo-element-no-unknown\n  &::file-selector-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  // stylelint-disable-next-line selector-pseudo-element-no-unknown\n  &:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: $form-file-button-hover-bg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n    background-color: $form-file-button-hover-bg;\n  }\n}\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  min-height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n\n  // stylelint-disable-next-line selector-pseudo-element-no-unknown\n  &::file-selector-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n}\n\n.form-control-lg {\n  min-height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n\n  // stylelint-disable-next-line selector-pseudo-element-no-unknown\n  &::file-selector-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n}\n\n// Make sure textareas don't shrink too much when resized\n// https://github.com/twbs/bootstrap/pull/29124\n// stylelint-disable selector-no-qualifying-type\ntextarea {\n  &.form-control {\n    min-height: $input-height;\n  }\n\n  &.form-control-sm {\n    min-height: $input-height-sm;\n  }\n\n  &.form-control-lg {\n    min-height: $input-height-lg;\n  }\n}\n// stylelint-enable selector-no-qualifying-type\n\n.form-control-color {\n  max-width: 3rem;\n  height: auto; // Override fixed browser height\n  padding: $input-padding-y;\n\n  &:not(:disabled):not([readonly]) {\n    cursor: pointer;\n  }\n\n  &::-moz-color-swatch {\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n\n  &::-webkit-color-swatch {\n    height: if(unit($input-line-height) == \"\", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Gradients\n\n@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$variable-prefix}gradient);\n  }\n}\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: $form-select-padding-y ($form-select-padding-x + $form-select-indicator-padding) $form-select-padding-y $form-select-padding-x;\n  font-family: $form-select-font-family;\n  @include font-size($form-select-font-size);\n  font-weight: $form-select-font-weight;\n  line-height: $form-select-line-height;\n  color: $form-select-color;\n  vertical-align: middle;\n  background-color: $form-select-bg;\n  background-image: escape-svg($form-select-indicator);\n  background-repeat: no-repeat;\n  background-position: $form-select-bg-position;\n  background-size: $form-select-bg-size;\n  border: $form-select-border-width solid $form-select-border-color;\n  @include border-radius($form-select-border-radius, 0);\n  @include box-shadow($form-select-box-shadow);\n  appearance: none;\n\n  &:focus {\n    border-color: $form-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $form-select-focus-box-shadow;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    padding-right: $form-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $form-select-disabled-color;\n    background-color: $form-select-disabled-bg;\n    border-color: $form-select-disabled-border-color;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $form-select-color;\n  }\n}\n\n.form-select-sm {\n  padding-top: $form-select-padding-y-sm;\n  padding-bottom: $form-select-padding-y-sm;\n  padding-left: $form-select-padding-x-sm;\n  @include font-size($form-select-font-size-sm);\n}\n\n.form-select-lg {\n  padding-top: $form-select-padding-y-lg;\n  padding-bottom: $form-select-padding-y-lg;\n  padding-left: $form-select-padding-x-lg;\n  @include font-size($form-select-font-size-lg);\n}\n","//\n// Check/radio\n//\n\n.form-check {\n  display: block;\n  min-height: $form-check-min-height;\n  padding-left: $form-check-padding-start;\n  margin-bottom: $form-check-margin-bottom;\n\n  .form-check-input {\n    float: left;\n    margin-left: $form-check-padding-start * -1;\n  }\n}\n\n.form-check-input {\n  width: $form-check-input-width;\n  height: $form-check-input-width;\n  margin-top: ($line-height-base - $form-check-input-width) / 2; // line-height minus check height\n  vertical-align: top;\n  background-color: $form-check-input-bg;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: $form-check-input-border;\n  appearance: none;\n  color-adjust: exact; // Keep themed appearance for print\n  @include transition($form-check-transition);\n\n  &[type=\"checkbox\"] {\n    @include border-radius($form-check-input-border-radius);\n  }\n\n  &[type=\"radio\"] {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $form-check-radio-border-radius;\n  }\n\n  &:active {\n    filter: $form-check-input-active-filter;\n  }\n\n  &:focus {\n    border-color: $form-check-input-focus-border;\n    outline: 0;\n    box-shadow: $form-check-input-focus-box-shadow;\n  }\n\n  &:checked {\n    background-color: $form-check-input-checked-bg-color;\n    border-color: $form-check-input-checked-border-color;\n\n    &[type=\"checkbox\"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-input-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-input-checked-bg-image);\n      }\n    }\n\n    &[type=\"radio\"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-radio-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-radio-checked-bg-image);\n      }\n    }\n  }\n\n  &[type=\"checkbox\"]:indeterminate {\n    background-color: $form-check-input-indeterminate-bg-color;\n    border-color: $form-check-input-indeterminate-border-color;\n\n    @if $enable-gradients {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image), var(--#{$variable-prefix}gradient);\n    } @else {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image);\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: $form-check-input-disabled-opacity;\n  }\n\n  // Use disabled attribute in addition of :disabled pseudo-class\n  // See: https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .form-check-label {\n      opacity: $form-check-label-disabled-opacity;\n    }\n  }\n}\n\n.form-check-label {\n  color: $form-check-label-color;\n  cursor: $form-check-label-cursor;\n}\n\n//\n// Switch\n//\n\n.form-switch {\n  padding-left: $form-switch-padding-start;\n\n  .form-check-input {\n    width: $form-switch-width;\n    margin-left: $form-switch-padding-start * -1;\n    background-image: escape-svg($form-switch-bg-image);\n    background-position: left center;\n    @include border-radius($form-switch-border-radius);\n\n    &:focus {\n      background-image: escape-svg($form-switch-focus-bg-image);\n    }\n\n    &:checked {\n      background-position: $form-switch-checked-bg-position;\n\n      @if $enable-gradients {\n        background-image: escape-svg($form-switch-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-switch-checked-bg-image);\n      }\n    }\n  }\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: $form-check-inline-margin-end;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n\n  &[disabled],\n  &:disabled {\n    + .btn {\n      pointer-events: none;\n      filter: none;\n      opacity: $form-check-btn-check-disabled-opacity;\n    }\n  }\n}\n","// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.form-range {\n  width: 100%;\n  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: none;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    margin-top: ($form-range-track-height - $form-range-thumb-height) / 2; // Webkit specific\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent; // Why?\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent;\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent;\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    &::-webkit-slider-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n  }\n}\n",".form-floating {\n  position: relative;\n\n  > .form-control,\n  > .form-select {\n    height: $form-floating-height;\n    padding: $form-floating-padding-y $form-floating-padding-x;\n  }\n\n  > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; // allow textareas\n    padding: $form-floating-padding-y $form-floating-padding-x;\n    pointer-events: none;\n    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model\n    transform-origin: 0 0;\n    @include transition($form-floating-transition);\n  }\n\n  // stylelint-disable no-duplicate-selectors\n  > .form-control {\n    &::placeholder {\n      color: transparent;\n    }\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n    // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n    &:-webkit-autofill {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n  }\n\n  > .form-select {\n    padding-top: $form-floating-input-padding-t;\n    padding-bottom: $form-floating-input-padding-b;\n  }\n\n  > .form-control:focus,\n  > .form-control:not(:placeholder-shown),\n  > .form-select {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n  > .form-control:-webkit-autofill {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // stylelint-enable no-duplicate-selectors\n}\n","//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-select {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .form-select:focus {\n    z-index: 3;\n  }\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-group-addon-padding-y $input-group-addon-padding-x;\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $input-group-addon-font-weight;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: $form-select-padding-x + $form-select-indicator-padding;\n}\n\n\n// Rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.input-group {\n  &:not(.has-validation) {\n    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 3) {\n      @include border-end-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 4) {\n      @include border-end-radius(0);\n    }\n  }\n\n  $validation-messages: \"\";\n  @each $state in map-keys($form-validation-states) {\n    $validation-messages: $validation-messages + \":not(.\" + unquote($state) + \"-tooltip)\" + \":not(.\" + unquote($state) + \"-feedback)\";\n  }\n\n  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {\n    margin-left: -$input-border-width;\n    @include border-start-radius(0);\n  }\n}\n","// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state($state, $color, $icon) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: color-contrast($color);\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, $input-btn-focus-color-opacity);\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $form-select-feedback-icon-padding-end;\n        background-image: escape-svg($form-select-indicator), escape-svg($icon);\n        background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n        background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  line-height: $btn-line-height;\n  color: $body-color;\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-button-pointers, pointer, null);\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-border-radius);\n  @include transition($btn-transition);\n\n  &:hover {\n    color: $body-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active {\n    @include box-shadow($btn-active-box-shadow);\n\n    &:focus {\n      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n    }\n  }\n\n  &:disabled,\n  &.disabled,\n  fieldset:disabled & {\n    pointer-events: none;\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Alternate buttons\n//\n\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $btn-link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $btn-link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, 15%), tint-color($background, 15%)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, 20%), tint-color($border, 10%)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background, 20%), tint-color($background, 20%)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, 25%), tint-color($border, 10%)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  &:hover {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    @if $enable-shadows {\n      @include box-shadow($btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n    }\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  .show > &.dropdown-toggle {\n    color: $active-color;\n    background-color: $active-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $disabled-color;\n    background-color: $disabled-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $disabled-border;\n  }\n}\n\n@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n  color: $color;\n  border-color: $color;\n\n  &:hover {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  &.dropdown-toggle.show {\n    color: $active-color;\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $color;\n    background-color: transparent;\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y $dropdown-padding-x;\n  margin: $dropdown-spacer 0 0; // override default ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n\n  // Reset positioning when positioned with Popper\n  &[style] {\n    right: auto !important; // stylelint-disable-line declaration-no-important\n  }\n}\n\n// scss-docs-start responsive-breakpoints\n// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n      right: auto #{\"/* rtl:ignore */\"};\n      left: 0 #{\"/* rtl:ignore */\"};\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n      right: 0 #{\"/* rtl:ignore */\"};\n      left: auto #{\"/* rtl:ignore */\"};\n    }\n  }\n}\n// scss-docs-end responsive-breakpoints\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropend {\n  .dropdown-menu {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(end);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropstart {\n  .dropdown-menu {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(start);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  height: 0;\n  margin: $dropdown-divider-margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $dropdown-divider-bg;\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  &:hover,\n  &:focus {\n    color: $dropdown-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-header-padding;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n\n// Dark dropdowns\n.dropdown-menu-dark {\n  color: $dropdown-dark-color;\n  background-color: $dropdown-dark-bg;\n  border-color: $dropdown-dark-border-color;\n  @include box-shadow($dropdown-dark-box-shadow);\n\n  .dropdown-item {\n    color: $dropdown-dark-link-color;\n\n    &:hover,\n    &:focus {\n      color: $dropdown-dark-link-hover-color;\n      @include gradient-bg($dropdown-dark-link-hover-bg);\n    }\n\n    &.active,\n    &:active {\n      color: $dropdown-dark-link-active-color;\n      @include gradient-bg($dropdown-dark-link-active-bg);\n    }\n\n    &.disabled,\n    &:disabled {\n      color: $dropdown-dark-link-disabled-color;\n    }\n  }\n\n  .dropdown-divider {\n    border-color: $dropdown-dark-divider-bg;\n  }\n\n  .dropdown-item-text {\n    color: $dropdown-dark-link-color;\n  }\n\n  .dropdown-header {\n    color: $dropdown-dark-header-color;\n  }\n}\n","@mixin caret-down {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-end {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-start {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == end {\n        @include caret-end();\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: \"\";\n        @include caret-start();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n","// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  // Bring the hover, focused, and \"active\" buttons to the front to overlay\n  // the borders properly\n  > .btn-check:checked + .btn,\n  > .btn-check:focus + .btn,\n  > .btn:hover,\n  > .btn:focus,\n  > .btn:active,\n  > .btn.active {\n    z-index: 1;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-end-radius(0);\n  }\n\n  // The left radius should be 0 if the button is:\n  // - the \"third or more\" child\n  // - the second child and the previous element isn't `.btn-check` (making it the first child visually)\n  // - part of a btn-group which isn't the first child\n  > .btn:nth-child(n + 3),\n  > :not(.btn-check) + .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-start-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropend &::after {\n    margin-left: 0;\n  }\n\n  .dropstart &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn ~ .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n  @include font-size($nav-link-font-size);\n  font-weight: $nav-link-font-weight;\n  color: $nav-link-color;\n  text-decoration: if($link-decoration == none, null, none);\n  @include transition($nav-link-transition);\n\n  &:hover,\n  &:focus {\n    color: $nav-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-link {\n    margin-bottom: -$nav-tabs-border-width;\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    &:hover,\n    &:focus {\n      border-color: $nav-tabs-link-hover-border-color;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    @include gradient-bg($nav-pills-link-active-bg);\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding-top: $navbar-padding-y;\n  padding-right: $navbar-padding-x; // default: null\n  padding-bottom: $navbar-padding-y;\n  padding-left: $navbar-padding-x; // default: null\n  @include gradient-bg();\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  // The `flex-wrap` property is inherited to simplify the expanded navbars\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > .container,\n  > .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-brand-margin-end;\n  @include font-size($navbar-brand-font-size);\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n  width: 100%;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n  @include transition($navbar-toggler-transition);\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 $navbar-toggler-focus-width;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n\n    a,\n    a:hover,\n    a:focus  {\n      color: $navbar-light-active-color;\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a,\n    a:hover,\n    a:focus {\n      color: $navbar-dark-active-color;\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius($card-inner-border-radius);\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius($card-inner-border-radius);\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  padding: $card-spacer-y $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-title-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-title-spacer-y / 2;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  &:hover {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x #{\"/* rtl:ignore */\"};\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n}\n\n.card-footer {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-cap-padding-x / 2;\n  margin-bottom: -$card-cap-padding-y;\n  margin-left: -$card-cap-padding-x / 2;\n  border-bottom: 0;\n\n  @if $nav-tabs-link-active-bg != $card-bg {\n    .nav-link.active {\n      background-color: $card-bg;\n      border-bottom-color: $card-bg;\n    }\n  }\n}\n\n.card-header-pills {\n  margin-right: -$card-cap-padding-x / 2;\n  margin-left: -$card-cap-padding-x / 2;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n  @include border-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-end-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-start-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: $accordion-button-padding-y $accordion-button-padding-x;\n  @include font-size($font-size-base);\n  color: $accordion-button-color;\n  background-color: $accordion-button-bg;\n  border: $accordion-border-width solid $accordion-border-color;\n  @include border-radius(0);\n  overflow-anchor: none;\n  @include transition($accordion-transition);\n\n  &.collapsed {\n    border-bottom-width: 0;\n  }\n\n  &:not(.collapsed) {\n    color: $accordion-button-active-color;\n    background-color: $accordion-button-active-bg;\n\n    &::after {\n      background-image: escape-svg($accordion-button-active-icon);\n      transform: $accordion-icon-transform;\n    }\n  }\n\n  // Accordion icon\n  &::after {\n    flex-shrink: 0;\n    width: $accordion-icon-width;\n    height: $accordion-icon-width;\n    margin-left: auto;\n    content: \"\";\n    background-image: escape-svg($accordion-button-icon);\n    background-repeat: no-repeat;\n    background-size: $accordion-icon-width;\n    @include transition($accordion-icon-transition);\n  }\n\n  &:hover {\n    z-index: 2;\n  }\n\n  &:focus {\n    z-index: 3;\n    border-color: $accordion-button-focus-border-color;\n    outline: 0;\n    box-shadow: $accordion-button-focus-box-shadow;\n  }\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  &:first-of-type {\n    .accordion-button {\n      @include border-top-radius($accordion-border-radius);\n    }\n  }\n\n  &:last-of-type {\n    .accordion-button {\n      // Only set a border-radius on the last item if the accordion is collapsed\n      &.collapsed {\n        border-bottom-width: $accordion-border-width;\n        @include border-bottom-radius($accordion-border-radius);\n      }\n    }\n\n    .accordion-collapse {\n      border-bottom-width: $accordion-border-width;\n      @include border-bottom-radius($accordion-border-radius);\n    }\n  }\n}\n\n.accordion-collapse {\n  border: solid $accordion-border-color;\n  border-width: 0 $accordion-border-width;\n}\n\n.accordion-body {\n  padding: $accordion-body-padding-y $accordion-body-padding-x;\n}\n\n\n// Flush accordion items\n//\n// Remove borders and border-radius to keep accordion items edge-to-edge.\n\n.accordion-flush {\n  .accordion-button {\n    border-right: 0;\n    border-left: 0;\n    @include border-radius(0);\n  }\n\n  .accordion-collapse {\n    border-width: 0;\n  }\n\n  .accordion-item {\n    &:first-of-type {\n      .accordion-button {\n        border-top-width: 0;\n        @include border-top-radius(0);\n      }\n    }\n\n    &:last-of-type {\n      .accordion-button.collapsed {\n        border-bottom-width: 0;\n        @include border-bottom-radius(0);\n      }\n    }\n  }\n}\n",".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding-x;\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: $breadcrumb-item-padding-x;\n      color: $breadcrumb-divider-color;\n      content: var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)) #{\"/* rtl:\"} var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider-flipped)) #{\"*/\"};\n    }\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n",".pagination {\n  display: flex;\n  @include list-unstyled();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  color: $pagination-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n  @include transition($pagination-transition);\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    color: $pagination-focus-color;\n    background-color: $pagination-focus-bg;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:not(:first-child) .page-link {\n    margin-left: $pagination-margin-start;\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    @include gradient-bg($pagination-active-bg);\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n@include pagination-size($pagination-padding-y, $pagination-padding-x, null, $pagination-border-radius);\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $border-radius-sm);\n}\n","// Pagination\n\n@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n  }\n\n  .page-item {\n    @if $pagination-margin-start == (-$pagination-border-width) {\n      &:first-child {\n        .page-link {\n          @include border-start-radius($border-radius);\n        }\n      }\n\n      &:last-child {\n        .page-link {\n          @include border-end-radius($border-radius);\n        }\n      }\n    } @else {\n      //Add border-radius to all pageLinks in case they have left margin\n      .page-link {\n        @include border-radius($border-radius);\n      }\n    }\n  }\n}\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  color: $badge-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include gradient-bg();\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n","//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $alert-dismissible-padding-r;\n\n  // Adjust close link position\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: $stretched-link-z-index + 1;\n    padding: $alert-padding-y * 1.25 $alert-padding-x;\n  }\n}\n\n\n// scss-docs-start alert-modifiers\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $state, $value in $theme-colors {\n  $background: shift-color($value, $alert-bg-scale);\n  $border: shift-color($value, $alert-border-scale);\n  $color: shift-color($value, $alert-color-scale);\n  @if (contrast-ratio($background, $color) < $min-contrast-ratio) {\n    $color: mix($value, color-contrast($background), abs($alert-color-scale));\n  }\n  .alert-#{$state} {\n    @include alert-variant($background, $border, $color);\n  }\n}\n// scss-docs-end alert-modifiers\n","@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  .alert-link {\n    color: shade-color($color, 20%);\n  }\n}\n","// Disable animation if transitions are disabled\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: $progress-height; }\n  }\n}\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-reduced-motion {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius($list-group-border-radius);\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  &:hover,\n  &:focus {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child {\n          @include border-bottom-start-radius($list-group-border-radius);\n          @include border-top-end-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-end-radius($list-group-border-radius);\n          @include border-bottom-start-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 $list-group-border-width;\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// scss-docs-start list-group-modifiers\n// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state, $value in $theme-colors {\n  $background: shift-color($value, $list-group-item-bg-scale);\n  $color: shift-color($value, $list-group-item-color-scale);\n  @if (contrast-ratio($background, $color) < $min-contrast-ratio) {\n    $color: mix($value, color-contrast($background), abs($alert-color-scale));\n  }\n\n  @include list-group-item-variant($state, $background, $color);\n}\n// scss-docs-end list-group-modifiers\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      &:hover,\n      &:focus {\n        color: $color;\n        background-color: shade-color($background, 10%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n","// transparent background and border properties included for button version.\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n.btn-close {\n  box-sizing: content-box;\n  width: $btn-close-width;\n  height: $btn-close-height;\n  padding: $btn-close-padding-y $btn-close-padding-x;\n  color: $btn-close-color;\n  background: transparent escape-svg($btn-close-bg) center / $btn-close-width auto no-repeat; // include transparent for button elements\n  border: 0; // for button elements\n  @include border-radius();\n  opacity: $btn-close-opacity;\n\n  // Override <a>'s hover style\n  &:hover {\n    color: $btn-close-color;\n    text-decoration: none;\n    opacity: $btn-close-hover-opacity;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: $btn-close-focus-shadow;\n    opacity: $btn-close-focus-opacity;\n  }\n\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: $btn-close-disabled-opacity;\n  }\n}\n\n.btn-close-white {\n  filter: $btn-close-white-filter;\n}\n",".toast {\n  width: $toast-max-width;\n  max-width: 100%;\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  pointer-events: auto;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  @include border-radius($toast-border-radius);\n\n  &:not(.showing):not(.show) {\n    opacity: 0;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-container {\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n\n  > :not(:last-child) {\n    margin-bottom: $toast-spacing;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n  @include border-top-radius(subtract($toast-border-radius, $toast-border-width));\n\n  .btn-close {\n    margin-right: $toast-padding-x / -2;\n    margin-left: $toast-padding-x;\n  }\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n}\n","// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n.modal-open {\n  // Kill the scroll on the body\n  overflow: hidden;\n\n  .modal {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .btn-close {\n    padding: ($modal-header-padding-y / 2) ($modal-header-padding-x / 2);\n    margin: ($modal-header-padding-y / -2) ($modal-header-padding-x / -2) ($modal-header-padding-y / -2) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: $modal-footer-margin-between / 2;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != \"\", $infix + \"-down\", \"\");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n\n      .modal-footer {\n        @include border-radius(0);\n      }\n    }\n  }\n}\n","// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .tooltip-arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    bottom: 0;\n\n    &::before {\n      top: -1px;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-end {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: -1px;\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    top: 0;\n\n    &::before {\n      bottom: -1px;\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-start {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: -1px;\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-tooltip-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-tooltip-start;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n","@mixin reset-text {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n",".popover {\n  position: absolute;\n  top: 0;\n  left: 0 #{\"/* rtl:ignore */\"};\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .popover-arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n    margin: 0 $popover-border-radius;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  // Overrule margin set by popper.js\n  margin-bottom: $popover-arrow-height !important; // stylelint-disable-line declaration-no-important\n\n  > .popover-arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-end {\n  // Overrule margin set by popper.js\n  margin-left: $popover-arrow-height !important; // stylelint-disable-line declaration-no-important\n\n  > .popover-arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  // Overrule margin set by popper.js\n  margin-top: $popover-arrow-height !important; // stylelint-disable-line declaration-no-important\n\n  > .popover-arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width / 2;\n    content: \"\";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-start {\n  // Overrule margin set by popper.js\n  margin-right: $popover-arrow-height !important; // stylelint-disable-line declaration-no-important\n\n  > .popover-arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[data-popper-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[data-popper-placement^=\"right\"] {\n    @extend .bs-popover-end;\n  }\n  &[data-popper-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[data-popper-placement^=\"left\"] {\n    @extend .bs-popover-start;\n  }\n}\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid shade-color($popover-header-bg, 10%);\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-start and .carousel-item-end is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-start and .active.carousel-item-end is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-start,\n  .carousel-item-prev.carousel-item-end {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-start,\n  .active.carousel-item-end {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  color: $carousel-control-color;\n  text-align: center;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);\n}\n.carousel-control-next {\n  right: 0;\n  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n// Optional indicator pips\n//\n// Add an ordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding-left: 0; // override <ol> default\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: $carousel-indicator-opacity;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: $carousel-indicator-active-opacity;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) / 2;\n  bottom: $carousel-caption-spacer;\n  left: (100% - $carousel-caption-width) / 2;\n  padding-top: $carousel-caption-padding-y;\n  padding-bottom: $carousel-caption-padding-y;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n\n// Dark mode carousel\n\n.carousel-dark {\n  .carousel-control-prev-icon,\n  .carousel-control-next-icon {\n    filter: $carousel-dark-control-icon-filter;\n  }\n\n  .carousel-indicators li {\n    background-color: $carousel-dark-indicator-active-bg;\n  }\n\n  .carousel-caption {\n    color: $carousel-dark-caption-color;\n  }\n}\n","// scss-docs-start clearfix\n@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n// scss-docs-end clearfix\n","//\n// Rotating border\n//\n\n@keyframes spinner-border {\n  to { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: $spinner-animation-speed linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  opacity: 0;\n  animation: $spinner-animation-speed linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n\n@if $enable-reduced-motion {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      animation-duration: $spinner-animation-speed * 2;\n    }\n  }\n}\n","@each $color, $value in $theme-colors {\n  .link-#{$color} {\n    color: $value;\n\n    @if $link-shade-percentage != 0 {\n      &:hover,\n      &:focus {\n        color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage));\n      }\n    }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.ratio {\n  position: relative;\n  width: 100%;\n\n  &::before {\n    display: block;\n    padding-top: var(--aspect-ratio);\n    content: \"\";\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@each $key, $ratio in $aspect-ratios {\n  .ratio-#{$key} {\n    --aspect-ratio: #{$ratio};\n  }\n}\n","// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n// Responsive sticky top\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .sticky#{$infix}-top {\n      position: sticky;\n      top: 0;\n      z-index: $zindex-sticky;\n    }\n  }\n}\n","//\n// Visually hidden\n//\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus) {\n  @include visually-hidden();\n}\n","// stylelint-disable declaration-no-important\n\n// Hide content visually while keeping it accessible to assistive technologies\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin visually-hidden() {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n// Use to only display content when it's focused.\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n\n@mixin visually-hidden-focusable() {\n  &:not(:focus) {\n    @include visually-hidden();\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::#{$stretched-link-pseudo-element} {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: $stretched-link-z-index;\n    content: \"\";\n  }\n}\n","//\n// Text truncation\n//\n\n.text-truncate {\n  @include text-truncate();\n}\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","// Utility generator\n// Used to generate utilities & print utilities\n@mixin generate-utility($utility, $infix, $is-rfs-media-query: false) {\n  $values: map-get($utility, values);\n\n  // If the values are a list or string, convert it into a map\n  @if type-of($values) == \"string\" or type-of(nth($values, 1)) != \"list\" {\n    $values: zip($values, $values);\n  }\n\n  @each $key, $value in $values {\n    $properties: map-get($utility, property);\n\n    // Multiple properties are possible, for example with vertical or horizontal margins or paddings\n    @if type-of($properties) == \"string\" {\n      $properties: append((), $properties);\n    }\n\n    // Use custom class if present\n    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));\n    $property-class: if($property-class == null, \"\", $property-class);\n\n    // State params to generate pseudo-classes\n    $state: if(map-has-key($utility, state), map-get($utility, state), ());\n\n    $infix: if($property-class == \"\" and str-slice($infix, 1, 1) == \"-\", str-slice($infix, 2), $infix);\n\n    // Don't prefix if value key is null (eg. with shadow class)\n    $property-class-modifier: if($key, if($property-class == \"\" and $infix == \"\", \"\", \"-\") + $key, \"\");\n\n    @if map-get($utility, rfs) {\n      // Inside the media query\n      @if $is-rfs-media-query {\n        $val: rfs-value($value);\n\n        // Do not render anything if fluid and non fluid values are the same\n        $value: if($val == rfs-fluid-value($value), null, $val);\n      }\n      @else {\n        $value: rfs-fluid-value($value);\n      }\n    }\n\n    $is-rtl: map-get($utility, rtl);\n\n    @if $value != null {\n      @if $is-rtl == false {\n        /* rtl:begin:remove */\n      }\n      .#{$property-class + $infix + $property-class-modifier} {\n        @each $property in $properties {\n          #{$property}: $value if($enable-important-utilities, !important, null);\n        }\n      }\n\n      @each $pseudo in $state {\n        .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n          @each $property in $properties {\n            #{$property}: $value if($enable-important-utilities, !important, null);\n          }\n        }\n      }\n      @if $is-rtl == false {\n        /* rtl:end:remove */\n      }\n    }\n  }\n}\n","// Loop over each breakpoint\n@each $breakpoint in map-keys($grid-breakpoints) {\n\n  // Generate media query if needed\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    // Loop over each utility property\n    @each $key, $utility in $utilities {\n      // The utility can be disabled with `false`, thus check if the utility is a map first\n      // Only proceed if responsive media queries are enabled or if it's the base media query\n      @if type-of($utility) == \"map\" and (map-get($utility, responsive) or $infix == \"\") {\n        @include generate-utility($utility, $infix);\n      }\n    }\n  }\n}\n\n// RFS rescaling\n@media (min-width: $rfs-mq-value) {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {\n      // Loop over each utility property\n      @each $key, $utility in $utilities {\n        // The utility can be disabled with `false`, thus check if the utility is a map first\n        // Only proceed if responsive media queries are enabled or if it's the base media query\n        @if type-of($utility) == \"map\" and map-get($utility, rfs) {\n          @include generate-utility($utility, $infix, true);\n        }\n      }\n    }\n  }\n}\n\n\n// Print utilities\n@media print {\n  @each $key, $utility in $utilities {\n    // The utility can be disabled with `false`, thus check if the utility is a map first\n    // Then check if the utility needs print styles\n    @if type-of($utility) == \"map\" and map-get($utility, print) == true {\n      @include generate-utility($utility, \"-print\");\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-fc4683ceba89acce5913.js.map