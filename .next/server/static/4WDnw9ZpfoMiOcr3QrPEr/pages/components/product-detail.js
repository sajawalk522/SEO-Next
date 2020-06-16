module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CCqH");


/***/ }),

/***/ "CCqH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NLnR");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Productdetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      product: [],
      productTitle: '',
      image: '',
      description: ''
    });
  }

  componentDidMount() {
    var desire = location.search.slice(1).split("&")[0].split("=")[1];
    var marvelHeroes = _data__WEBPACK_IMPORTED_MODULE_1__["data"].filter(function (hero) {
      return hero.id == desire;
    });
    this.setState({
      product: marvelHeroes
    });
    this.setState({
      productTitle: marvelHeroes[0].productName
    });
    this.setState({
      image: marvelHeroes[0].image
    });
  }

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, this.state.productTitle), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), __jsx("meta", {
      property: "og:title",
      content: this.state.productTitle
    }), __jsx("meta", {
      property: "og:url",
      content: "http://localhost:3000/"
    }), __jsx("meta", {
      property: "og:description",
      content: "Shud atta"
    }), __jsx("meta", {
      property: "og:site_name",
      content: "IMDb"
    }), __jsx("meta", {
      property: "og:locale",
      content: "en_US"
    }), __jsx("meta", {
      property: "og:locale:alternate",
      content: "en_GB"
    }), __jsx("meta", {
      property: "og:locale:alternate",
      content: "cn_CN"
    }), __jsx("meta", {
      property: "og:image",
      content: this.state.image
    }), __jsx("meta", {
      property: "og:image:height",
      content: "800"
    }), __jsx("meta", {
      name: "description",
      content: "Seo"
    })), __jsx("div", {
      className: "porduct"
    }, __jsx("div", {
      className: "product-detail"
    }, this.state.product.map(post => __jsx("div", {
      className: "item-select",
      key: post.id
    }, __jsx("div", null, __jsx("img", {
      src: post.image,
      alt: "product image"
    }), __jsx("p", null, post.productName)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Productdetail);

/***/ }),

/***/ "NLnR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
  id: '1',
  productName: 'Atta',
  image: 'https://5.imimg.com/data5/LL/LL/STDPRD-1153/aashirvaad-whole-wheat-atta-500x500.jpg'
}, {
  id: '2',
  productName: 'Chakki Atta',
  image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Sunridge-Chakki-Atta-10-KG-Onlinebuy-pk.jpg'
}, {
  id: '3',
  productName: 'Punjab atta',
  image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Punjab-Atta-No.1-20Kg-Onlinebuy-pk-600x600.jpg'
}, {
  id: '4',
  productName: 'Sugar control',
  image: 'https://pictures.grocerapps.com/original/grocerapp-low-dibe-sugar-control-atta-5eb3b22d7f626.jpeg'
}];

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });