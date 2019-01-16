webpackJsonp([4],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable space-before-function-paren *//* eslint-disable padded-blocks *//* eslint-disable indent *//* eslint-disable func-names *//* harmony default export */ __webpack_exports__["a"] = (function(){// SideBar Toggle Mobile View
if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#sidebar-toggle').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#sidebar-toggle').click(function(){if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').hasClass('fa-plus')){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').fadeIn(200);if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').offset().top-50)}__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').attr('class','fa fa-minus')}else if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').hasClass('fa-minus')){if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').fadeOut(200)}__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').attr('class','fa fa-plus')}})}});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_manager__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__halothemes_sidebarToggleMobile__ = __webpack_require__(402);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Blog=function(_PageManager){_inherits(Blog,_PageManager);function Blog(){_classCallCheck(this,Blog);return _possibleConstructorReturn(this,_PageManager.apply(this,arguments))}Blog.prototype.loaded=function loaded(){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__halothemes_sidebarToggleMobile__["a" /* default */])()};return Blog}(__WEBPACK_IMPORTED_MODULE_0__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.4.js.map