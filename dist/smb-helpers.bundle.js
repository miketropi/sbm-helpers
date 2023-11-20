/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _offcanvas_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offcanvas-menu */ "./src/offcanvas-menu.js");
/* harmony import */ var _offcanvas_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_offcanvas_menu__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Main script
 * 
 */



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

;
(function (w, $) {
  'use strict';

  var megaMenuActiveTab = function megaMenuActiveTab() {
    $('body').on('mouseover', '.sbm-mega-menu__tab-heading-ul .tab-heading-item', function (e) {
      var __key = $(this).data('key');
      var __content_class = ".tab-content-item__".concat(__key);
      $(this).addClass('__active').siblings().removeClass('__active');
      $(__content_class).addClass('__active').siblings().removeClass('__active');
    });
  };
  var menuMenu = function menuMenu() {
    megaMenuActiveTab();
  };
  var menu = function menu() {
    menuMenu();
  };
  $(menu);
})(window, jQuery);

/***/ }),

/***/ "./src/offcanvas-menu.js":
/*!*******************************!*\
  !*** ./src/offcanvas-menu.js ***!
  \*******************************/
/***/ (() => {

;
(function (w, $) {
  'use strict';

  var NextArrow = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <g data-name=\"Layer 2\"> <g data-name=\"arrow-ios-forward\"> <rect transform=\"rotate(-90 12 12)\" opacity=\"0\"/> <path d=\"M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z\"/> </g> </g> </svg>";
  var PrevArrow = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <g data-name=\"Layer 2\"> <g data-name=\"arrow-ios-back\"> <rect transform=\"rotate(90 12 12)\" opacity=\"0\"/> <path d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z\"/> </g> </g> </svg>";
  var offcanvasDisplay = function offcanvasDisplay() {
    $('body').on('click', '.sbm-button-toggle-offcanvas', function (e) {
      e.preventDefault();
      $('body').addClass('sbm-offcanvas-open');
    });
    $('body').on('click', '.sbm-offcanvas-menu', function (e) {
      if ($(e.target).hasClass('sbm-offcanvas-menu')) {
        $('body').removeClass('sbm-offcanvas-open');
      }
    });
    $('body').on('click', '.sbm-offcanvas-menu__close', function (e) {
      e.preventDefault();
      $('body').removeClass('sbm-offcanvas-open');
    });
  };
  var addArrowMenuItem = function addArrowMenuItem() {
    $('.sbm-offcanvas-menu').find('.__sbm-has-megamenu, .menu-item-has-children, .tab-heading-item').each(function () {
      var arrowTemp = "<span class=\"menu-item-toggle-sub\">".concat(NextArrow, "</span>");
      $(this).addClass('__has-btn-toggle');
      $(this).children('a').after(arrowTemp);
    });
    $('.sbm-offcanvas-menu').find('.tab-heading-item').each(function () {
      var arrowTemp = "<span class=\"menu-item-back-menu\">".concat(PrevArrow, "</span>");
      $(this).children('a').before(arrowTemp);
    });
    $('.sbm-offcanvas-menu').find('.sub-menu > li').each(function () {
      var arrowTemp = "<span class=\"menu-item-back-menu\">".concat(PrevArrow, "</span>");
      $(this).children('a').before(arrowTemp);
    });
  };
  var cloneHeadingTab = function cloneHeadingTab() {
    $('.sbm-offcanvas-menu').find('.tab-heading-item').each(function () {
      var __key = $(this).data('key');
      var a = $(this).children('a.nav-link').clone();
      var tabContentClass = ".sbm-offcanvas-menu .sbm-mega-menu__tab-content .tab-content-item__".concat(__key);

      // a.addClass('__back')
      $(tabContentClass).prepend($("<div class=\"__back\"><span class=\"back-arrow\">".concat(PrevArrow, "</span></div>")).append(a));
    });
  };
  var directiveSubMenuEffect = function directiveSubMenuEffect() {
    var $menu = $('.sbm-offcanvas-menu .sbm-menu');
    var step = 0;
    $('.sbm-offcanvas-menu .menu-item-toggle-sub').on('click', function (e) {
      e.preventDefault();
      if (step == 0) {
        // console.log($(this).parent())
        $(this).parent().addClass('__current-active').siblings().removeClass('__current-active');
      }
      step += 1;
      $menu.css({
        transform: "translateX(calc(100% * ".concat(step, " * -1))")
      });
    });
    $('.sbm-offcanvas-menu .__back, .sbm-offcanvas-menu .menu-item-back-menu').on('click', function (e) {
      e.preventDefault();
      step -= 1;
      $menu.css({
        transform: "translateX(calc(100% * ".concat(step, " * -1))")
      });
    });
  };
  var offcanvasMenu = function offcanvasMenu() {
    addArrowMenuItem();
    cloneHeadingTab();
    directiveSubMenuEffect();
  };
  var offcanvas = function offcanvas() {
    offcanvasDisplay();
    offcanvasMenu();
  };
  $(offcanvas);
})(window, jQuery);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/admin.scss":
/*!*****************************!*\
  !*** ./src/scss/admin.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/smb-helpers.bundle": 0,
/******/ 			"css/smb-helpers-admin.bundle": 0,
/******/ 			"css/smb-helpers.bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksmb_helpers"] = self["webpackChunksmb_helpers"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/smb-helpers-admin.bundle","css/smb-helpers.bundle"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_require__.O(undefined, ["css/smb-helpers-admin.bundle","css/smb-helpers.bundle"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/smb-helpers-admin.bundle","css/smb-helpers.bundle"], () => (__webpack_require__("./src/scss/admin.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;