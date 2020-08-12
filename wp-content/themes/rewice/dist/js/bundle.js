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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
(function (window, factory) {
  /*global define: false, module: false */
  'use strict'; // universal module definition

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  var matchesMethod = function () {
    var ElemProto = window.Element.prototype; // check for the standard method name first

    if (ElemProto.matches) {
      return 'matches';
    } // check un-prefixed


    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    } // check vendor prefixes


    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';

      if (ElemProto[method]) {
        return method;
      }
    }
  }();

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */
(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : this, function () {
  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // set events hash


    var events = this._events = this._events || {}; // set listeners array

    var listeners = events[eventName] = events[eventName] || []; // only add once

    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // add event


    this.on(eventName, listener); // set once flag
    // set onceEvents hash

    var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

    onceListeners[listener] = true;
    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    }

    var index = listeners.indexOf(listener);

    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];

    if (!listeners || !listeners.length) {
      return;
    } // copy over to avoid interference if .off() in listener


    listeners = listeners.slice(0);
    args = args || []; // once stuff

    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];

      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener); // unset once flag

        delete onceListeners[listener];
      } // trigger listener


      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (matchesSelector) {
      return factory(window, matchesSelector);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, matchesSelector) {
  'use strict';

  var utils = {}; // ----- extend ----- //
  // extends objects

  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }

    return a;
  }; // ----- modulo ----- //


  utils.modulo = function (num, div) {
    return (num % div + div) % div;
  }; // ----- makeArray ----- //


  var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    } // return empty array if undefined or null. #6


    if (obj === null || obj === undefined) {
      return [];
    }

    var isArrayLike = _typeof(obj) == 'object' && typeof obj.length == 'number';

    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    } // array of single index


    return [obj];
  }; // ----- removeFrom ----- //


  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);

    if (index != -1) {
      ary.splice(index, 1);
    }
  }; // ----- getParent ----- //


  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;

      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  }; // ----- getQueryElement ----- //
  // use element as selector string


  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }

    return elem;
  }; // ----- handleEvent ----- //
  // enable .ontype to trigger from .addEventListener( elem, 'type' )


  utils.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // ----- filterFindElements ----- //


  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      } // add elem if no selector


      if (!selector) {
        ffElems.push(elem);
        return;
      } // filter & find items if we have a selector
      // filter


      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      } // find children


      var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  }; // ----- debounceMethod ----- //


  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100; // original method

    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;

      var _this = this;

      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  }; // ----- docReady ----- //


  utils.docReady = function (callback) {
    var readyState = document.readyState;

    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }; // ----- htmlInit ----- //
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */

  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;

        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }

          return;
        } // initialize


        var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  }; // -----  ----- //


  return utils;
});

/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// add, remove cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict'; // append cells to a document fragment

  function getCellsFragment(cells) {
    var fragment = document.createDocumentFragment();
    cells.forEach(function (cell) {
      fragment.appendChild(cell.element);
    });
    return fragment;
  } // -------------------------- add/remove cell prototype -------------------------- //


  var proto = Flickity.prototype;
  /**
   * Insert, prepend, or append cells
   * @param {Element, Array, NodeList} elems
   * @param {Integer} index
   */

  proto.insert = function (elems, index) {
    var cells = this._makeCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var len = this.cells.length; // default to append

    index = index === undefined ? len : index; // add cells with document fragment

    var fragment = getCellsFragment(cells); // append to slider

    var isAppend = index == len;

    if (isAppend) {
      this.slider.appendChild(fragment);
    } else {
      var insertCellElement = this.cells[index].element;
      this.slider.insertBefore(fragment, insertCellElement);
    } // add to this.cells


    if (index === 0) {
      // prepend, add to start
      this.cells = cells.concat(this.cells);
    } else if (isAppend) {
      // append, add to end
      this.cells = this.cells.concat(cells);
    } else {
      // insert in this.cells
      var endCells = this.cells.splice(index, len - index);
      this.cells = this.cells.concat(cells).concat(endCells);
    }

    this._sizeCells(cells);

    this.cellChange(index, true);
  };

  proto.append = function (elems) {
    this.insert(elems, this.cells.length);
  };

  proto.prepend = function (elems) {
    this.insert(elems, 0);
  };
  /**
   * Remove cells
   * @param {Element, Array, NodeList} elems
   */


  proto.remove = function (elems) {
    var cells = this.getCells(elems);

    if (!cells || !cells.length) {
      return;
    }

    var minCellIndex = this.cells.length - 1; // remove cells from collection & DOM

    cells.forEach(function (cell) {
      cell.remove();
      var index = this.cells.indexOf(cell);
      minCellIndex = Math.min(index, minCellIndex);
      utils.removeFrom(this.cells, cell);
    }, this);
    this.cellChange(minCellIndex, true);
  };
  /**
   * logic to be run after a cell's size changes
   * @param {Element} elem - cell's element
   */


  proto.cellSizeChange = function (elem) {
    var cell = this.getCell(elem);

    if (!cell) {
      return;
    }

    cell.getSize();
    var index = this.cells.indexOf(cell);
    this.cellChange(index);
  };
  /**
   * logic any time a cell is changed: added, removed, or size changed
   * @param {Integer} changedCellIndex - index of the changed cell, optional
   */


  proto.cellChange = function (changedCellIndex, isPositioningSlider) {
    var prevSelectedElem = this.selectedElement;

    this._positionCells(changedCellIndex);

    this._getWrapShiftCells();

    this.setGallerySize(); // update selectedIndex
    // try to maintain position & select previous selected element

    var cell = this.getCell(prevSelectedElem);

    if (cell) {
      this.selectedIndex = this.getCellSlideIndex(cell);
    }

    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent('cellChange', [changedCellIndex]); // position slider

    this.select(this.selectedIndex); // do not position slider after lazy load

    if (isPositioningSlider) {
      this.positionSliderAtSelected();
    }
  }; // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// animate
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (utils) {
      return factory(window, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, utils) {
  'use strict'; // -------------------------- animate -------------------------- //

  var proto = {};

  proto.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };

  proto.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var previousX = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(previousX); // animate next frame

    if (this.isAnimating) {
      var _this = this;

      requestAnimationFrame(function animateFrame() {
        _this.animate();
      });
    }
  };

  proto.positionSlider = function () {
    var x = this.x; // wrap position around

    if (this.options.wrapAround && this.cells.length > 1) {
      x = utils.modulo(x, this.slideableWidth);
      x = x - this.slideableWidth;
      this.shiftWrapCells(x);
    }

    this.setTranslateX(x, this.isAnimating);
    this.dispatchScrollEvent();
  };

  proto.setTranslateX = function (x, is3d) {
    x += this.cursorPosition; // reverse if right-to-left and using transform

    x = this.options.rightToLeft ? -x : x;
    var translateX = this.getPositionValue(x); // use 3D tranforms for hardware acceleration on iOS
    // but use 2D when settled, for better font-rendering

    this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
  };

  proto.dispatchScrollEvent = function () {
    var firstSlide = this.slides[0];

    if (!firstSlide) {
      return;
    }

    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent('scroll', null, [progress, positionX]);
  };

  proto.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }

    this.x = -this.selectedSlide.target;
    this.velocity = 0; // stop wobble

    this.positionSlider();
  };

  proto.getPositionValue = function (position) {
    if (this.options.percentPosition) {
      // percent position, round to 2 digits, like 12.34%
      return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
    } else {
      // pixel positioning
      return Math.round(position) + 'px';
    }
  };

  proto.settle = function (previousX) {
    // keep track of frames where x hasn't moved
    if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
      this.restingFrames++;
    } // stop animating if resting for 3 or more frames


    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling; // render position with translateX when settled

      this.positionSlider();
      this.dispatchEvent('settle', null, [this.selectedIndex]);
    }
  };

  proto.shiftWrapCells = function (x) {
    // shift before cells
    var beforeGap = this.cursorPosition + x;

    this._shiftCells(this.beforeShiftCells, beforeGap, -1); // shift after cells


    var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);

    this._shiftCells(this.afterShiftCells, afterGap, 1);
  };

  proto._shiftCells = function (cells, gap, shift) {
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var cellShift = gap > 0 ? shift : 0;
      cell.wrapShift(cellShift);
      gap -= cell.size.outerWidth;
    }
  };

  proto._unshiftCells = function (cells) {
    if (!cells || !cells.length) {
      return;
    }

    for (var i = 0; i < cells.length; i++) {
      cells[i].wrapShift(0);
    }
  }; // -------------------------- physics -------------------------- //


  proto.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };

  proto.applyForce = function (force) {
    this.velocity += force;
  };

  proto.getFrictionFactor = function () {
    return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
  };

  proto.getRestingPosition = function () {
    // my thanks to Steven Wittens, who simplified this math greatly
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };

  proto.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    } // change the position to drag position by applying force


    var dragVelocity = this.dragX - this.x;
    var dragForce = dragVelocity - this.velocity;
    this.applyForce(dragForce);
  };

  proto.applySelectedAttraction = function () {
    // do not attract if pointer down or no slides
    var dragDown = this.isDraggable && this.isPointerDown;

    if (dragDown || this.isFreeScrolling || !this.slides.length) {
      return;
    }

    var distance = this.selectedSlide.target * -1 - this.x;
    var force = distance * this.options.selectedAttraction;
    this.applyForce(force);
  };

  return proto;
});

/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Flickity.Cell
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize) {
      return factory(window, getSize);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, getSize) {
  'use strict';

  function Cell(elem, parent) {
    this.element = elem;
    this.parent = parent;
    this.create();
  }

  var proto = Cell.prototype;

  proto.create = function () {
    this.element.style.position = 'absolute';
    this.element.setAttribute('aria-hidden', 'true');
    this.x = 0;
    this.shift = 0;
  };

  proto.destroy = function () {
    // reset style
    this.unselect();
    this.element.style.position = '';
    var side = this.parent.originSide;
    this.element.style[side] = '';
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  proto.setPosition = function (x) {
    this.x = x;
    this.updateTarget();
    this.renderPosition(x);
  }; // setDefaultTarget v1 method, backwards compatibility, remove in v3


  proto.updateTarget = proto.setDefaultTarget = function () {
    var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
    this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
  };

  proto.renderPosition = function (x) {
    // render position of cell with in slider
    var side = this.parent.originSide;
    this.element.style[side] = this.parent.getPositionValue(x);
  };

  proto.select = function () {
    this.element.classList.add('is-selected');
    this.element.removeAttribute('aria-hidden');
  };

  proto.unselect = function () {
    this.element.classList.remove('is-selected');
    this.element.setAttribute('aria-hidden', 'true');
  };
  /**
   * @param {Integer} factor - 0, 1, or -1
  **/


  proto.wrapShift = function (shift) {
    this.shift = shift;
    this.renderPosition(this.x + this.parent.slideableWidth * shift);
  };

  proto.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };

  return Cell;
});

/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// drag
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unidragger/unidragger */ "./node_modules/unidragger/unidragger.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unidragger, utils) {
      return factory(window, Flickity, Unidragger, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unidragger, utils) {
  'use strict'; // ----- defaults ----- //

  utils.extend(Flickity.defaults, {
    draggable: '>1',
    dragThreshold: 3
  }); // ----- create ----- //

  Flickity.createMethods.push('_createDrag'); // -------------------------- drag prototype -------------------------- //

  var proto = Flickity.prototype;
  utils.extend(proto, Unidragger.prototype);
  proto._touchActionValue = 'pan-y'; // --------------------------  -------------------------- //

  var isTouch = 'createTouch' in document;
  var isTouchmoveScrollCanceled = false;

  proto._createDrag = function () {
    this.on('activate', this.onActivateDrag);
    this.on('uiChange', this._uiChangeDrag);
    this.on('deactivate', this.onDeactivateDrag);
    this.on('cellChange', this.updateDraggable); // TODO updateDraggable on resize? if groupCells & slides change
    // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
    // #457, RubaXa/Sortable#973

    if (isTouch && !isTouchmoveScrollCanceled) {
      window.addEventListener('touchmove', function () {});
      isTouchmoveScrollCanceled = true;
    }
  };

  proto.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };

  proto.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove('is-draggable');
  };

  proto.updateDraggable = function () {
    // disable dragging if less than 2 slides. #278
    if (this.options.draggable == '>1') {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }

    if (this.isDraggable) {
      this.element.classList.add('is-draggable');
    } else {
      this.element.classList.remove('is-draggable');
    }
  }; // backwards compatibility


  proto.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };

  proto.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };

  proto._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }; // -------------------------- pointer events -------------------------- //


  proto.pointerDown = function (event, pointer) {
    if (!this.isDraggable) {
      this._pointerDownDefault(event, pointer);

      return;
    }

    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    }

    this._pointerDownPreventDefault(event);

    this.pointerDownFocus(event); // blur

    if (document.activeElement != this.element) {
      // do not blur if already focused
      this.pointerDownBlur();
    } // stop if it was moving


    this.dragX = this.x;
    this.viewport.classList.add('is-pointer-down'); // track scrolling

    this.pointerDownScroll = getScrollPosition();
    window.addEventListener('scroll', this);

    this._pointerDownDefault(event, pointer);
  }; // default pointerDown logic, used for staticClick


  proto._pointerDownDefault = function (event, pointer) {
    // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    }; // bind move and end events

    this._bindPostStartEvents(event);

    this.dispatchEvent('pointerDown', event, [pointer]);
  };

  var focusNodes = {
    INPUT: true,
    TEXTAREA: true,
    SELECT: true
  };

  proto.pointerDownFocus = function (event) {
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isFocusNode) {
      this.focus();
    }
  };

  proto._pointerDownPreventDefault = function (event) {
    var isTouchStart = event.type == 'touchstart';
    var isTouchPointer = event.pointerType == 'touch';
    var isFocusNode = focusNodes[event.target.nodeName];

    if (!isTouchStart && !isTouchPointer && !isFocusNode) {
      event.preventDefault();
    }
  }; // ----- move ----- //


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > this.options.dragThreshold;
  }; // ----- up ----- //


  proto.pointerUp = function (event, pointer) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove('is-pointer-down');
    this.dispatchEvent('pointerUp', event, [pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto.pointerDone = function () {
    window.removeEventListener('scroll', this);
    delete this.pointerDownScroll;
  }; // -------------------------- dragging -------------------------- //


  proto.dragStart = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    this.dragStartPosition = this.x;
    this.startAnimation();
    window.removeEventListener('scroll', this);
    this.dispatchEvent('dragStart', event, [pointer]);
  };

  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.dispatchEvent('pointerMove', event, [pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    if (!this.isDraggable) {
      return;
    }

    event.preventDefault();
    this.previousDragX = this.dragX; // reverse if right-to-left

    var direction = this.options.rightToLeft ? -1 : 1;

    if (this.options.wrapAround) {
      // wrap around move. #589
      moveVector.x = moveVector.x % this.slideableWidth;
    }

    var dragX = this.dragStartPosition + moveVector.x * direction;

    if (!this.options.wrapAround && this.slides.length) {
      // slow drag
      var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
      dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
      var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
    }

    this.dragX = dragX;
    this.dragMoveTime = new Date();
    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  proto.dragEnd = function (event, pointer) {
    if (!this.isDraggable) {
      return;
    }

    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    } // set selectedIndex based on where flick will end up


    var index = this.dragEndRestingSelect();

    if (this.options.freeScroll && !this.options.wrapAround) {
      // if free-scroll & not wrap around
      // do not free-scroll if going outside of bounding slides
      // so bounding slides can attract slider, and keep it in bounds
      var restingX = this.getRestingPosition();
      this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
    } else if (!this.options.freeScroll && index == this.selectedIndex) {
      // boost selection if selected index has not changed
      index += this.dragEndBoostSelect();
    }

    delete this.previousDragX; // apply selection
    // TODO refactor this, selecting here feels weird
    // HACK, set flag so dragging stays in correct direction

    this.isDragSelect = this.options.wrapAround;
    this.select(index);
    delete this.isDragSelect;
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  proto.dragEndRestingSelect = function () {
    var restingX = this.getRestingPosition(); // how far away from selected slide

    var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex)); // get closet resting going up and going down

    var positiveResting = this._getClosestResting(restingX, distance, 1);

    var negativeResting = this._getClosestResting(restingX, distance, -1); // use closer resting for wrap-around


    var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
    return index;
  };
  /**
   * given resting X and distance to selected cell
   * get the distance and index of the closest cell
   * @param {Number} restingX - estimated post-flick resting position
   * @param {Number} distance - distance to selected cell
   * @param {Integer} increment - +1 or -1, going up or down
   * @returns {Object} - { distance: {Number}, index: {Integer} }
   */


  proto._getClosestResting = function (restingX, distance, increment) {
    var index = this.selectedIndex;
    var minDistance = Infinity;
    var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
    function (d, md) {
      return d <= md;
    } : function (d, md) {
      return d < md;
    };

    while (condition(distance, minDistance)) {
      // measure distance to next cell
      index += increment;
      minDistance = distance;
      distance = this.getSlideDistance(-restingX, index);

      if (distance === null) {
        break;
      }

      distance = Math.abs(distance);
    }

    return {
      distance: minDistance,
      // selected was previous index
      index: index - increment
    };
  };
  /**
   * measure distance between x and a slide target
   * @param {Number} x
   * @param {Integer} index - slide index
   */


  proto.getSlideDistance = function (x, index) {
    var len = this.slides.length; // wrap around if at least 2 slides

    var isWrapAround = this.options.wrapAround && len > 1;
    var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
    var slide = this.slides[slideIndex];

    if (!slide) {
      return null;
    } // add distance for wrap-around slides


    var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
    return x - (slide.target + wrap);
  };

  proto.dragEndBoostSelect = function () {
    // do not boost if no previousDragX or dragMoveTime
    if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100) {
      return 0;
    }

    var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var delta = this.previousDragX - this.dragX;

    if (distance > 0 && delta > 0) {
      // boost to next if moving towards the right, and positive velocity
      return 1;
    } else if (distance < 0 && delta < 0) {
      // boost to previous if moving towards the left, and negative velocity
      return -1;
    }

    return 0;
  }; // ----- staticClick ----- //


  proto.staticClick = function (event, pointer) {
    // get clickedCell, if cell was clicked
    var clickedCell = this.getParentCell(event.target);
    var cellElem = clickedCell && clickedCell.element;
    var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
    this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
  }; // ----- scroll ----- //


  proto.onscroll = function () {
    var scroll = getScrollPosition();
    var scrollMoveX = this.pointerDownScroll.x - scroll.x;
    var scrollMoveY = this.pointerDownScroll.y - scroll.y; // cancel click/tap if scroll is too much

    if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
      this._pointerDone();
    }
  }; // ----- utils ----- //


  function getScrollPosition() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  } // -----  ----- //


  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Flickity main
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./cell */ "./node_modules/flickity/js/cell.js"), __webpack_require__(/*! ./slide */ "./node_modules/flickity/js/slide.js"), __webpack_require__(/*! ./animate */ "./node_modules/flickity/js/animate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
      return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }
})(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
  'use strict'; // vars

  var jQuery = window.jQuery;
  var getComputedStyle = window.getComputedStyle;
  var console = window.console;

  function moveElements(elems, toElem) {
    elems = utils.makeArray(elems);

    while (elems.length) {
      toElem.appendChild(elems.shift());
    }
  } // -------------------------- Flickity -------------------------- //
  // globally unique identifiers


  var GUID = 0; // internal store of all Flickity intances

  var instances = {};

  function Flickity(element, options) {
    var queryElement = utils.getQueryElement(element);

    if (!queryElement) {
      if (console) {
        console.error('Bad element for Flickity: ' + (queryElement || element));
      }

      return;
    }

    this.element = queryElement; // do not initialize twice on same element

    if (this.element.flickityGUID) {
      var instance = instances[this.element.flickityGUID];
      instance.option(options);
      return instance;
    } // add jQuery


    if (jQuery) {
      this.$element = jQuery(this.element);
    } // options


    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options); // kick things off

    this._create();
  }

  Flickity.defaults = {
    accessibility: true,
    // adaptiveHeight: false,
    cellAlign: 'center',
    // cellSelector: undefined,
    // contain: false,
    freeScrollFriction: 0.075,
    // friction when free-scrolling
    friction: 0.28,
    // friction when selecting
    namespaceJQueryEvents: true,
    // initialIndex: 0,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true // watchCSS: false,
    // wrapAround: false

  }; // hash of methods triggered on _create()

  Flickity.createMethods = [];
  var proto = Flickity.prototype; // inherit EventEmitter

  utils.extend(proto, EvEmitter.prototype);

  proto._create = function () {
    // add id for Flickity.data
    var id = this.guid = ++GUID;
    this.element.flickityGUID = id; // expando

    instances[id] = this; // associate via id
    // initial properties

    this.selectedIndex = 0; // how many frames slider has been in same position

    this.restingFrames = 0; // initial physics properties

    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? 'right' : 'left'; // create viewport & slider

    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';

    this._createSlider();

    if (this.options.resize || this.options.watchCSS) {
      window.addEventListener('resize', this);
    } // add listeners from on option


    for (var eventName in this.options.on) {
      var listener = this.options.on[eventName];
      this.on(eventName, listener);
    }

    Flickity.createMethods.forEach(function (method) {
      this[method]();
    }, this);

    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  /**
   * set options
   * @param {Object} opts
   */


  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  proto.activate = function () {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.element.classList.add('flickity-enabled');

    if (this.options.rightToLeft) {
      this.element.classList.add('flickity-rtl');
    }

    this.getSize(); // move initial cell elements so they can be loaded as cells

    var cellElems = this._filterFindCellElements(this.element.children);

    moveElements(cellElems, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport); // get cells from children

    this.reloadCells();

    if (this.options.accessibility) {
      // allow element to focusable
      this.element.tabIndex = 0; // listen for key presses

      this.element.addEventListener('keydown', this);
    }

    this.emitEvent('activate');
    this.selectInitialIndex(); // flag for initial activation, for using initialIndex

    this.isInitActivated = true; // ready event. #493

    this.dispatchEvent('ready');
  }; // slider positions the cells


  proto._createSlider = function () {
    // slider element does all the positioning
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[this.originSide] = 0;
    this.slider = slider;
  };

  proto._filterFindCellElements = function (elems) {
    return utils.filterFindElements(elems, this.options.cellSelector);
  }; // goes through all children


  proto.reloadCells = function () {
    // collection of item elements
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
  };
  /**
   * turn elements into Flickity.Cells
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Flickity Cells
   */


  proto._makeCells = function (elems) {
    var cellElems = this._filterFindCellElements(elems); // create new Flickity for collection


    var cells = cellElems.map(function (cellElem) {
      return new Cell(cellElem, this);
    }, this);
    return cells;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }; // positions all cells


  proto.positionCells = function () {
    // size all cells
    this._sizeCells(this.cells); // position all cells


    this._positionCells(0);
  };
  /**
   * position certain cells
   * @param {Integer} index - which cell to start with
   */


  proto._positionCells = function (index) {
    index = index || 0; // also measure maxCellHeight
    // start 0 if positioning all cells

    this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
    var cellX = 0; // get cellX

    if (index > 0) {
      var startCell = this.cells[index - 1];
      cellX = startCell.x + startCell.size.outerWidth;
    }

    var len = this.cells.length;

    for (var i = index; i < len; i++) {
      var cell = this.cells[i];
      cell.setPosition(cellX);
      cellX += cell.size.outerWidth;
      this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
    } // keep track of cellX for wrap-around


    this.slideableWidth = cellX; // slides

    this.updateSlides(); // contain slides target

    this._containSlides(); // update slidesWidth


    this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
  };
  /**
   * cell.getSize() on multiple cells
   * @param {Array} cells
   */


  proto._sizeCells = function (cells) {
    cells.forEach(function (cell) {
      cell.getSize();
    });
  }; // --------------------------  -------------------------- //


  proto.updateSlides = function () {
    this.slides = [];

    if (!this.cells.length) {
      return;
    }

    var slide = new Slide(this);
    this.slides.push(slide);
    var isOriginLeft = this.originSide == 'left';
    var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

    var canCellFit = this._getCanCellFit();

    this.cells.forEach(function (cell, i) {
      // just add cell if first cell in slide
      if (!slide.cells.length) {
        slide.addCell(cell);
        return;
      }

      var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);

      if (canCellFit.call(this, i, slideWidth)) {
        slide.addCell(cell);
      } else {
        // doesn't fit, new slide
        slide.updateTarget();
        slide = new Slide(this);
        this.slides.push(slide);
        slide.addCell(cell);
      }
    }, this); // last slide

    slide.updateTarget(); // update .selectedSlide

    this.updateSelectedSlide();
  };

  proto._getCanCellFit = function () {
    var groupCells = this.options.groupCells;

    if (!groupCells) {
      return function () {
        return false;
      };
    } else if (typeof groupCells == 'number') {
      // group by number. 3 -> [0,1,2], [3,4,5], ...
      var number = parseInt(groupCells, 10);
      return function (i) {
        return i % number !== 0;
      };
    } // default, group by width of slide
    // parse '75%


    var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
    var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
    return function (i, slideWidth) {
      return slideWidth <= (this.size.innerWidth + 1) * percent;
    };
  }; // alias _init for jQuery plugin .flickity()


  proto._init = proto.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };

  var cellAlignShorthands = {
    // cell align, then based on origin side
    center: {
      left: 0.5,
      right: 0.5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };

  proto.setCellAlign = function () {
    var shorthand = cellAlignShorthands[this.options.cellAlign];
    this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
  };

  proto.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = height + 'px';
    }
  };

  proto._getWrapShiftCells = function () {
    // only for wrap-around
    if (!this.options.wrapAround) {
      return;
    } // unshift previous cells


    this._unshiftCells(this.beforeShiftCells);

    this._unshiftCells(this.afterShiftCells); // get before cells
    // initial gap


    var gapX = this.cursorPosition;
    var cellIndex = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1); // get after cells
    // ending gap between last cell and end of gallery viewport

    gapX = this.size.innerWidth - this.cursorPosition; // start cloning at first cell, working forwards

    this.afterShiftCells = this._getGapCells(gapX, 0, 1);
  };

  proto._getGapCells = function (gapX, cellIndex, increment) {
    // keep adding cells until the cover the initial gap
    var cells = [];

    while (gapX > 0) {
      var cell = this.cells[cellIndex];

      if (!cell) {
        break;
      }

      cells.push(cell);
      cellIndex += increment;
      gapX -= cell.size.outerWidth;
    }

    return cells;
  }; // ----- contain ----- //
  // contain cell targets so no excess sliding


  proto._containSlides = function () {
    if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
      return;
    }

    var isRightToLeft = this.options.rightToLeft;
    var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
    var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
    var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin]; // content is less than gallery size

    var isContentSmaller = contentWidth < this.size.innerWidth; // bounds

    var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
    var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign); // contain each cell target

    this.slides.forEach(function (slide) {
      if (isContentSmaller) {
        // all cells fit inside gallery
        slide.target = contentWidth * this.cellAlign;
      } else {
        // contain to bounds
        slide.target = Math.max(slide.target, beginBound);
        slide.target = Math.min(slide.target, endBound);
      }
    }, this);
  }; // -----  ----- //

  /**
   * emits events via eventEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */


  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery && this.$element) {
      // default trigger with type if no event
      type += this.options.namespaceJQueryEvents ? '.flickity' : '';
      var $event = type;

      if (event) {
        // create jQuery event
        var jQEvent = jQuery.Event(event);
        jQEvent.type = type;
        $event = jQEvent;
      }

      this.$element.trigger($event, args);
    }
  }; // -------------------------- select -------------------------- //

  /**
   * @param {Integer} index - index of the slide
   * @param {Boolean} isWrap - will wrap-around to last/first if at the end
   * @param {Boolean} isInstant - will immediately set position at selected cell
   */


  proto.select = function (index, isWrap, isInstant) {
    if (!this.isActive) {
      return;
    }

    index = parseInt(index, 10);

    this._wrapSelect(index);

    if (this.options.wrapAround || isWrap) {
      index = utils.modulo(index, this.slides.length);
    } // bail if invalid index


    if (!this.slides[index]) {
      return;
    }

    var prevIndex = this.selectedIndex;
    this.selectedIndex = index;
    this.updateSelectedSlide();

    if (isInstant) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }

    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    } // events


    this.dispatchEvent('select', null, [index]); // change event if new index

    if (index != prevIndex) {
      this.dispatchEvent('change', null, [index]);
    } // old v1 event name, remove in v3


    this.dispatchEvent('cellSelect');
  }; // wraps position for wrapAround, to move to closest slide. #113


  proto._wrapSelect = function (index) {
    var len = this.slides.length;
    var isWrapping = this.options.wrapAround && len > 1;

    if (!isWrapping) {
      return index;
    }

    var wrapIndex = utils.modulo(index, len); // go to shortest

    var delta = Math.abs(wrapIndex - this.selectedIndex);
    var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
    var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);

    if (!this.isDragSelect && backWrapDelta < delta) {
      index += len;
    } else if (!this.isDragSelect && forewardWrapDelta < delta) {
      index -= len;
    } // wrap position so slider is within normal area


    if (index < 0) {
      this.x -= this.slideableWidth;
    } else if (index >= len) {
      this.x += this.slideableWidth;
    }
  };

  proto.previous = function (isWrap, isInstant) {
    this.select(this.selectedIndex - 1, isWrap, isInstant);
  };

  proto.next = function (isWrap, isInstant) {
    this.select(this.selectedIndex + 1, isWrap, isInstant);
  };

  proto.updateSelectedSlide = function () {
    var slide = this.slides[this.selectedIndex]; // selectedIndex could be outside of slides, if triggered before resize()

    if (!slide) {
      return;
    } // unselect previous selected slide


    this.unselectSelectedSlide(); // update new selected slide

    this.selectedSlide = slide;
    slide.select();
    this.selectedCells = slide.cells;
    this.selectedElements = slide.getCellElements(); // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
    // Remove in v3?

    this.selectedCell = slide.cells[0];
    this.selectedElement = this.selectedElements[0];
  };

  proto.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };

  proto.selectInitialIndex = function () {
    var initialIndex = this.options.initialIndex; // already activated, select previous selectedIndex

    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    } // select with selector string


    if (initialIndex && typeof initialIndex == 'string') {
      var cell = this.queryCell(initialIndex);

      if (cell) {
        this.selectCell(initialIndex, false, true);
        return;
      }
    }

    var index = 0; // select with number

    if (initialIndex && this.slides[initialIndex]) {
      index = initialIndex;
    } // select instantly


    this.select(index, false, true);
  };
  /**
   * select slide from number or cell element
   * @param {Element or Number} elem
   */


  proto.selectCell = function (value, isWrap, isInstant) {
    // get cell
    var cell = this.queryCell(value);

    if (!cell) {
      return;
    }

    var index = this.getCellSlideIndex(cell);
    this.select(index, isWrap, isInstant);
  };

  proto.getCellSlideIndex = function (cell) {
    // get index of slides that has cell
    for (var i = 0; i < this.slides.length; i++) {
      var slide = this.slides[i];
      var index = slide.cells.indexOf(cell);

      if (index != -1) {
        return i;
      }
    }
  }; // -------------------------- get cells -------------------------- //

  /**
   * get Flickity.Cell, given an Element
   * @param {Element} elem
   * @returns {Flickity.Cell} item
   */


  proto.getCell = function (elem) {
    // loop through cells to get the one that matches
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];

      if (cell.element == elem) {
        return cell;
      }
    }
  };
  /**
   * get collection of Flickity.Cells, given Elements
   * @param {Element, Array, NodeList} elems
   * @returns {Array} cells - Flickity.Cells
   */


  proto.getCells = function (elems) {
    elems = utils.makeArray(elems);
    var cells = [];
    elems.forEach(function (elem) {
      var cell = this.getCell(elem);

      if (cell) {
        cells.push(cell);
      }
    }, this);
    return cells;
  };
  /**
   * get cell elements
   * @returns {Array} cellElems
   */


  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };
  /**
   * get parent cell from an element
   * @param {Element} elem
   * @returns {Flickit.Cell} cell
   */


  proto.getParentCell = function (elem) {
    // first check if elem is cell
    var cell = this.getCell(elem);

    if (cell) {
      return cell;
    } // try to get parent cell elem


    elem = utils.getParent(elem, '.flickity-slider > *');
    return this.getCell(elem);
  };
  /**
   * get cells adjacent to a slide
   * @param {Integer} adjCount - number of adjacent slides
   * @param {Integer} index - index of slide to start
   * @returns {Array} cells - array of Flickity.Cells
   */


  proto.getAdjacentCellElements = function (adjCount, index) {
    if (!adjCount) {
      return this.selectedSlide.getCellElements();
    }

    index = index === undefined ? this.selectedIndex : index;
    var len = this.slides.length;

    if (1 + adjCount * 2 >= len) {
      return this.getCellElements();
    }

    var cellElems = [];

    for (var i = index - adjCount; i <= index + adjCount; i++) {
      var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
      var slide = this.slides[slideIndex];

      if (slide) {
        cellElems = cellElems.concat(slide.getCellElements());
      }
    }

    return cellElems;
  };
  /**
   * select slide from number or cell element
   * @param {Element, Selector String, or Number} selector
   */


  proto.queryCell = function (selector) {
    if (typeof selector == 'number') {
      // use number as index
      return this.cells[selector];
    }

    if (typeof selector == 'string') {
      // do not select invalid selectors from hash: #123, #/. #791
      if (selector.match(/^[#\.]?[\d\/]/)) {
        return;
      } // use string as selector, get element


      selector = this.element.querySelector(selector);
    } // get cell from element


    return this.getCell(selector);
  }; // -------------------------- events -------------------------- //


  proto.uiChange = function () {
    this.emitEvent('uiChange');
  }; // keep focus on element when child UI elements are clicked


  proto.childUIPointerDown = function (event) {
    // HACK iOS does not allow touch events to bubble up?!
    if (event.type != 'touchstart') {
      event.preventDefault();
    }

    this.focus();
  }; // ----- resize ----- //


  proto.onresize = function () {
    this.watchCSS();
    this.resize();
  };

  utils.debounceMethod(Flickity, 'onresize', 150);

  proto.resize = function () {
    if (!this.isActive) {
      return;
    }

    this.getSize(); // wrap values

    if (this.options.wrapAround) {
      this.x = utils.modulo(this.x, this.slideableWidth);
    }

    this.positionCells();

    this._getWrapShiftCells();

    this.setGallerySize();
    this.emitEvent('resize'); // update selected index for group slides, instant
    // TODO: position can be lost between groups of various numbers

    var selectedElement = this.selectedElements && this.selectedElements[0];
    this.selectCell(selectedElement, false, true);
  }; // watches the :after property, activates/deactivates


  proto.watchCSS = function () {
    var watchOption = this.options.watchCSS;

    if (!watchOption) {
      return;
    }

    var afterContent = getComputedStyle(this.element, ':after').content; // activate if :after { content: 'flickity' }

    if (afterContent.indexOf('flickity') != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  }; // ----- keydown ----- //
  // go previous/next if left/right keys pressed


  proto.onkeydown = function (event) {
    // only work if element is in focus
    var isNotFocused = document.activeElement && document.activeElement != this.element;

    if (!this.options.accessibility || isNotFocused) {
      return;
    }

    var handler = Flickity.keyboardHandlers[event.keyCode];

    if (handler) {
      handler.call(this);
    }
  };

  Flickity.keyboardHandlers = {
    // left arrow
    37: function _() {
      var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
      this.uiChange();
      this[leftMethod]();
    },
    // right arrow
    39: function _() {
      var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
      this.uiChange();
      this[rightMethod]();
    }
  }; // ----- focus ----- //

  proto.focus = function () {
    // TODO remove scrollTo once focus options gets more support
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
    var prevScrollY = window.pageYOffset;
    this.element.focus({
      preventScroll: true
    }); // hack to fix scroll jump after focus, #76

    if (window.pageYOffset != prevScrollY) {
      window.scrollTo(window.pageXOffset, prevScrollY);
    }
  }; // -------------------------- destroy -------------------------- //
  // deactivate all Flickity functionality, but keep stuff available


  proto.deactivate = function () {
    if (!this.isActive) {
      return;
    }

    this.element.classList.remove('flickity-enabled');
    this.element.classList.remove('flickity-rtl');
    this.unselectSelectedSlide(); // destroy cells

    this.cells.forEach(function (cell) {
      cell.destroy();
    });
    this.element.removeChild(this.viewport); // move child elements back into element

    moveElements(this.slider.children, this.element);

    if (this.options.accessibility) {
      this.element.removeAttribute('tabIndex');
      this.element.removeEventListener('keydown', this);
    } // set flags


    this.isActive = false;
    this.emitEvent('deactivate');
  };

  proto.destroy = function () {
    this.deactivate();
    window.removeEventListener('resize', this);
    this.allOff();
    this.emitEvent('destroy');

    if (jQuery && this.$element) {
      jQuery.removeData(this.element, 'flickity');
    }

    delete this.element.flickityGUID;
    delete instances[this.guid];
  }; // -------------------------- prototype -------------------------- //


  utils.extend(proto, animatePrototype); // -------------------------- extras -------------------------- //

  /**
   * get Flickity instance from element
   * @param {Element} elem
   * @returns {Flickity}
   */

  Flickity.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.flickityGUID;
    return id && instances[id];
  };

  utils.htmlInit(Flickity, 'flickity');

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('flickity', Flickity);
  } // set internal jQuery, for Webpack + jQuery v3, #478


  Flickity.setJQuery = function (jq) {
    jQuery = jq;
  };

  Flickity.Cell = Cell;
  Flickity.Slide = Slide;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! ./drag */ "./node_modules/flickity/js/drag.js"), __webpack_require__(/*! ./prev-next-button */ "./node_modules/flickity/js/prev-next-button.js"), __webpack_require__(/*! ./page-dots */ "./node_modules/flickity/js/page-dots.js"), __webpack_require__(/*! ./player */ "./node_modules/flickity/js/player.js"), __webpack_require__(/*! ./add-remove-cell */ "./node_modules/flickity/js/add-remove-cell.js"), __webpack_require__(/*! ./lazyload */ "./node_modules/flickity/js/lazyload.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(Flickity) {
  /*jshint strict: false*/
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// lazyload
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, utils) {
      return factory(window, Flickity, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, utils) {
  'use strict';

  Flickity.createMethods.push('_createLazyload');
  var proto = Flickity.prototype;

  proto._createLazyload = function () {
    this.on('select', this.lazyLoad);
  };

  proto.lazyLoad = function () {
    var lazyLoad = this.options.lazyLoad;

    if (!lazyLoad) {
      return;
    } // get adjacent cells, use lazyLoad option for adjacent count


    var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
    var cellElems = this.getAdjacentCellElements(adjCount); // get lazy images in those cells

    var lazyImages = [];
    cellElems.forEach(function (cellElem) {
      var lazyCellImages = getCellLazyImages(cellElem);
      lazyImages = lazyImages.concat(lazyCellImages);
    }); // load lazy images

    lazyImages.forEach(function (img) {
      new LazyLoader(img, this);
    }, this);
  };

  function getCellLazyImages(cellElem) {
    // check if cell element is lazy image
    if (cellElem.nodeName == 'IMG') {
      var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
      var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
      var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');

      if (lazyloadAttr || srcAttr || srcsetAttr) {
        return [cellElem];
      }
    } // select lazy images in cell


    var lazySelector = 'img[data-flickity-lazyload], ' + 'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
    var imgs = cellElem.querySelectorAll(lazySelector);
    return utils.makeArray(imgs);
  } // -------------------------- LazyLoader -------------------------- //

  /**
   * class to handle loading images
   */


  function LazyLoader(img, flickity) {
    this.img = img;
    this.flickity = flickity;
    this.load();
  }

  LazyLoader.prototype.handleEvent = utils.handleEvent;

  LazyLoader.prototype.load = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this); // get src & srcset

    var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
    var srcset = this.img.getAttribute('data-flickity-lazyload-srcset'); // set src & serset

    this.img.src = src;

    if (srcset) {
      this.img.setAttribute('srcset', srcset);
    } // remove attr


    this.img.removeAttribute('data-flickity-lazyload');
    this.img.removeAttribute('data-flickity-lazyload-src');
    this.img.removeAttribute('data-flickity-lazyload-srcset');
  };

  LazyLoader.prototype.onload = function (event) {
    this.complete(event, 'flickity-lazyloaded');
  };

  LazyLoader.prototype.onerror = function (event) {
    this.complete(event, 'flickity-lazyerror');
  };

  LazyLoader.prototype.complete = function (event, className) {
    // unbind events
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
    var cell = this.flickity.getParentCell(this.img);
    var cellElem = cell && cell.element;
    this.flickity.cellSizeChange(cellElem);
    this.img.classList.add(className);
    this.flickity.dispatchEvent('lazyLoad', event, cellElem);
  }; // -----  ----- //


  Flickity.LazyLoader = LazyLoader;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// page dots
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  // -------------------------- PageDots -------------------------- //
  'use strict';

  function PageDots(parent) {
    this.parent = parent;

    this._create();
  }

  PageDots.prototype = Object.create(Unipointer.prototype);

  PageDots.prototype._create = function () {
    // create holder element
    this.holder = document.createElement('ol');
    this.holder.className = 'flickity-page-dots'; // create dots, array of elements

    this.dots = []; // events

    this.handleClick = this.onClick.bind(this);
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PageDots.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener('click', this.handleClick);
    this.bindStartEvent(this.holder); // add to DOM

    this.parent.element.appendChild(this.holder);
  };

  PageDots.prototype.deactivate = function () {
    this.holder.removeEventListener('click', this.handleClick);
    this.unbindStartEvent(this.holder); // remove from DOM

    this.parent.element.removeChild(this.holder);
  };

  PageDots.prototype.setDots = function () {
    // get difference between number of slides and number of dots
    var delta = this.parent.slides.length - this.dots.length;

    if (delta > 0) {
      this.addDots(delta);
    } else if (delta < 0) {
      this.removeDots(-delta);
    }
  };

  PageDots.prototype.addDots = function (count) {
    var fragment = document.createDocumentFragment();
    var newDots = [];
    var length = this.dots.length;
    var max = length + count;

    for (var i = length; i < max; i++) {
      var dot = document.createElement('li');
      dot.className = 'dot';
      dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
      fragment.appendChild(dot);
      newDots.push(dot);
    }

    this.holder.appendChild(fragment);
    this.dots = this.dots.concat(newDots);
  };

  PageDots.prototype.removeDots = function (count) {
    // remove from this.dots collection
    var removeDots = this.dots.splice(this.dots.length - count, count); // remove from DOM

    removeDots.forEach(function (dot) {
      this.holder.removeChild(dot);
    }, this);
  };

  PageDots.prototype.updateSelected = function () {
    // remove selected class on previous
    if (this.selectedDot) {
      this.selectedDot.className = 'dot';
      this.selectedDot.removeAttribute('aria-current');
    } // don't proceed if no dots


    if (!this.dots.length) {
      return;
    }

    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = 'dot is-selected';
    this.selectedDot.setAttribute('aria-current', 'step');
  };

  PageDots.prototype.onTap = // old method name, backwards-compatible
  PageDots.prototype.onClick = function (event) {
    var target = event.target; // only care about dot clicks

    if (target.nodeName != 'LI') {
      return;
    }

    this.parent.uiChange();
    var index = this.dots.indexOf(target);
    this.parent.select(index);
  };

  PageDots.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };

  Flickity.PageDots = PageDots; // -------------------------- Flickity -------------------------- //

  utils.extend(Flickity.defaults, {
    pageDots: true
  });
  Flickity.createMethods.push('_createPageDots');
  var proto = Flickity.prototype;

  proto._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }

    this.pageDots = new PageDots(this); // events

    this.on('activate', this.activatePageDots);
    this.on('select', this.updateSelectedPageDots);
    this.on('cellChange', this.updatePageDots);
    this.on('resize', this.updatePageDots);
    this.on('deactivate', this.deactivatePageDots);
  };

  proto.activatePageDots = function () {
    this.pageDots.activate();
  };

  proto.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };

  proto.updatePageDots = function () {
    this.pageDots.setDots();
  };

  proto.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }; // -----  ----- //


  Flickity.PageDots = PageDots;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// player & autoPlay
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"), __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter, utils, Flickity) {
      return factory(EvEmitter, utils, Flickity);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(EvEmitter, utils, Flickity) {
  'use strict'; // -------------------------- Player -------------------------- //

  function Player(parent) {
    this.parent = parent;
    this.state = 'stopped'; // visibility change event handler

    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }

  Player.prototype = Object.create(EvEmitter.prototype); // start play

  Player.prototype.play = function () {
    if (this.state == 'playing') {
      return;
    } // do not play if page is hidden, start playing when page is visible


    var isPageHidden = document.hidden;

    if (isPageHidden) {
      document.addEventListener('visibilitychange', this.onVisibilityPlay);
      return;
    }

    this.state = 'playing'; // listen to visibility change

    document.addEventListener('visibilitychange', this.onVisibilityChange); // start ticking

    this.tick();
  };

  Player.prototype.tick = function () {
    // do not tick if not playing
    if (this.state != 'playing') {
      return;
    }

    var time = this.parent.options.autoPlay; // default to 3 seconds

    time = typeof time == 'number' ? time : 3000;

    var _this = this; // HACK: reset ticks if stopped and started within interval


    this.clear();
    this.timeout = setTimeout(function () {
      _this.parent.next(true);

      _this.tick();
    }, time);
  };

  Player.prototype.stop = function () {
    this.state = 'stopped';
    this.clear(); // remove visibility change event

    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  };

  Player.prototype.clear = function () {
    clearTimeout(this.timeout);
  };

  Player.prototype.pause = function () {
    if (this.state == 'playing') {
      this.state = 'paused';
      this.clear();
    }
  };

  Player.prototype.unpause = function () {
    // re-start play if paused
    if (this.state == 'paused') {
      this.play();
    }
  }; // pause if page visibility is hidden, unpause if visible


  Player.prototype.visibilityChange = function () {
    var isPageHidden = document.hidden;
    this[isPageHidden ? 'pause' : 'unpause']();
  };

  Player.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener('visibilitychange', this.onVisibilityPlay);
  }; // -------------------------- Flickity -------------------------- //


  utils.extend(Flickity.defaults, {
    pauseAutoPlayOnHover: true
  });
  Flickity.createMethods.push('_createPlayer');
  var proto = Flickity.prototype;

  proto._createPlayer = function () {
    this.player = new Player(this);
    this.on('activate', this.activatePlayer);
    this.on('uiChange', this.stopPlayer);
    this.on('pointerDown', this.stopPlayer);
    this.on('deactivate', this.deactivatePlayer);
  };

  proto.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }

    this.player.play();
    this.element.addEventListener('mouseenter', this);
  }; // Player API, don't hate the ... thanks I know where the door is


  proto.playPlayer = function () {
    this.player.play();
  };

  proto.stopPlayer = function () {
    this.player.stop();
  };

  proto.pausePlayer = function () {
    this.player.pause();
  };

  proto.unpausePlayer = function () {
    this.player.unpause();
  };

  proto.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener('mouseenter', this);
  }; // ----- mouseenter/leave ----- //
  // pause auto-play on hover


  proto.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }

    this.player.pause();
    this.element.addEventListener('mouseleave', this);
  }; // resume auto-play on hover off


  proto.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener('mouseleave', this);
  }; // -----  ----- //


  Flickity.Player = Player;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// prev/next buttons
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"), __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"), __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Flickity, Unipointer, utils) {
      return factory(window, Flickity, Unipointer, utils);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Flickity, Unipointer, utils) {
  'use strict';

  var svgURI = 'http://www.w3.org/2000/svg'; // -------------------------- PrevNextButton -------------------------- //

  function PrevNextButton(direction, parent) {
    this.direction = direction;
    this.parent = parent;

    this._create();
  }

  PrevNextButton.prototype = Object.create(Unipointer.prototype);

  PrevNextButton.prototype._create = function () {
    // properties
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == leftDirection;
    var element = this.element = document.createElement('button');
    element.className = 'flickity-button flickity-prev-next-button';
    element.className += this.isPrevious ? ' previous' : ' next'; // prevent button from submitting form http://stackoverflow.com/a/10836076/182183

    element.setAttribute('type', 'button'); // init as disabled

    this.disable();
    element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next'); // create arrow

    var svg = this.createSVG();
    element.appendChild(svg); // events

    this.parent.on('select', this.update.bind(this));
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PrevNextButton.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener('click', this); // add to DOM

    this.parent.element.appendChild(this.element);
  };

  PrevNextButton.prototype.deactivate = function () {
    // remove from DOM
    this.parent.element.removeChild(this.element); // click events

    this.unbindStartEvent(this.element);
    this.element.removeEventListener('click', this);
  };

  PrevNextButton.prototype.createSVG = function () {
    var svg = document.createElementNS(svgURI, 'svg');
    svg.setAttribute('class', 'flickity-button-icon');
    svg.setAttribute('viewBox', '0 0 100 100');
    var path = document.createElementNS(svgURI, 'path');
    var pathMovements = getArrowMovements(this.parent.options.arrowShape);
    path.setAttribute('d', pathMovements);
    path.setAttribute('class', 'arrow'); // rotate arrow

    if (!this.isLeft) {
      path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
    }

    svg.appendChild(path);
    return svg;
  }; // get SVG path movmement


  function getArrowMovements(shape) {
    // use shape as movement if string
    if (typeof shape == 'string') {
      return shape;
    } // create movement string


    return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
  }

  PrevNextButton.prototype.handleEvent = utils.handleEvent;

  PrevNextButton.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }

    this.parent.uiChange();
    var method = this.isPrevious ? 'previous' : 'next';
    this.parent[method]();
  }; // -----  ----- //


  PrevNextButton.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }

    this.element.disabled = false;
    this.isEnabled = true;
  };

  PrevNextButton.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }

    this.element.disabled = true;
    this.isEnabled = false;
  };

  PrevNextButton.prototype.update = function () {
    // index of first or last slide, if previous or next
    var slides = this.parent.slides; // enable is wrapAround and at least 2 slides

    if (this.parent.options.wrapAround && slides.length > 1) {
      this.enable();
      return;
    }

    var lastIndex = slides.length ? slides.length - 1 : 0;
    var boundIndex = this.isPrevious ? 0 : lastIndex;
    var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
    this[method]();
  };

  PrevNextButton.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  }; // -------------------------- Flickity prototype -------------------------- //


  utils.extend(Flickity.defaults, {
    prevNextButtons: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  });
  Flickity.createMethods.push('_createPrevNextButtons');
  var proto = Flickity.prototype;

  proto._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }

    this.prevButton = new PrevNextButton(-1, this);
    this.nextButton = new PrevNextButton(1, this);
    this.on('activate', this.activatePrevNextButtons);
  };

  proto.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on('deactivate', this.deactivatePrevNextButtons);
  };

  proto.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off('deactivate', this.deactivatePrevNextButtons);
  }; // --------------------------  -------------------------- //


  Flickity.PrevNextButton = PrevNextButton;
  return Flickity;
});

/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// slide
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  function Slide(parent) {
    this.parent = parent;
    this.isOriginLeft = parent.originSide == 'left';
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }

  var proto = Slide.prototype;

  proto.addCell = function (cell) {
    this.cells.push(cell);
    this.outerWidth += cell.size.outerWidth;
    this.height = Math.max(cell.size.outerHeight, this.height); // first cell stuff

    if (this.cells.length == 1) {
      this.x = cell.x; // x comes from first cell

      var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
      this.firstMargin = cell.size[beginMargin];
    }
  };

  proto.updateTarget = function () {
    var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
    var lastCell = this.getLastCell();
    var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
    var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
    this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.select = function () {
    this.cells.forEach(function (cell) {
      cell.select();
    });
  };

  proto.unselect = function () {
    this.cells.forEach(function (cell) {
      cell.unselect();
    });
  };

  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };

  return Slide;
});

/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

/* globals console: false */
(function (window, factory) {
  /* jshint strict: false */

  /* globals define, module */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict'; // -------------------------- helpers -------------------------- //
  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value); // not a percent like '100%', and a number

    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  }; // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }

    return size;
  } // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */


  function getStyle(elem) {
    var style = getComputedStyle(elem);

    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }

    return style;
  } // -------------------------- setup -------------------------- //


  var isSetup = false;
  var isBoxSizeOuter;
  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */

  function setup() {
    // setup once
    if (isSetup) {
      return;
    }

    isSetup = true; // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */

    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  } // -------------------------- getSize -------------------------- //


  function getSize(elem) {
    setup(); // use querySeletor if elem is string

    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    } // do not proceed on non-objects


    if (!elem || _typeof(elem) != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem); // if hidden, everything is 0

    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value); // any 'auto', 'medium' value will be 0

      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

    var styleWidth = getStyleSize(style.width);

    if (styleWidth !== false) {
      size.width = styleWidth + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);

    if (styleHeight !== false) {
      size.height = styleHeight + ( // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }

  return getSize;
});

/***/ }),

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (f) {
  if (( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var g; }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return require(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      'use strict';
      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          } // Detect buggy property enumeration order in older V8 versions.
          // https://bugs.chromium.org/p/v8/issues/detail?id=4118


          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

          test1[5] = 'de';

          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test2 = {};

          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }

          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });

          if (order2.join('') !== '0123456789') {
            return false;
          } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });

          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);

            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
    }, {}],
    2: [function (require, module, exports) {
      (function (process) {
        // Generated by CoffeeScript 1.12.2
        (function () {
          var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

          if (typeof performance !== "undefined" && performance !== null && performance.now) {
            module.exports = function () {
              return performance.now();
            };
          } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
            module.exports = function () {
              return (getNanoSeconds() - nodeLoadTime) / 1e6;
            };

            hrtime = process.hrtime;

            getNanoSeconds = function getNanoSeconds() {
              var hr;
              hr = hrtime();
              return hr[0] * 1e9 + hr[1];
            };

            moduleLoadTime = getNanoSeconds();
            upTime = process.uptime() * 1e9;
            nodeLoadTime = moduleLoadTime - upTime;
          } else if (Date.now) {
            module.exports = function () {
              return Date.now() - loadTime;
            };

            loadTime = Date.now();
          } else {
            module.exports = function () {
              return new Date().getTime() - loadTime;
            };

            loadTime = new Date().getTime();
          }
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "_process": 3
    }],
    3: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

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

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
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
        runClearTimeout(timeout);
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
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


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
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
    }, {}],
    4: [function (require, module, exports) {
      (function (global) {
        var now = require('performance-now'),
            root = typeof window === 'undefined' ? global : window,
            vendors = ['moz', 'webkit'],
            suffix = 'AnimationFrame',
            raf = root['request' + suffix],
            caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

        for (var i = 0; !raf && i < vendors.length; i++) {
          raf = root[vendors[i] + 'Request' + suffix];
          caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
        } // Some versions of FF have rAF but not cAF


        if (!raf || !caf) {
          var last = 0,
              id = 0,
              queue = [],
              frameDuration = 1000 / 60;

          raf = function raf(callback) {
            if (queue.length === 0) {
              var _now = now(),
                  next = Math.max(0, frameDuration - (_now - last));

              last = next + _now;
              setTimeout(function () {
                var cp = queue.slice(0); // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue

                queue.length = 0;

                for (var i = 0; i < cp.length; i++) {
                  if (!cp[i].cancelled) {
                    try {
                      cp[i].callback(last);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
                  }
                }
              }, Math.round(next));
            }

            queue.push({
              handle: ++id,
              callback: callback,
              cancelled: false
            });
            return id;
          };

          caf = function caf(handle) {
            for (var i = 0; i < queue.length; i++) {
              if (queue[i].handle === handle) {
                queue[i].cancelled = true;
              }
            }
          };
        }

        module.exports = function (fn) {
          // Wrap in a new function to prevent
          // `cancel` potentially being assigned
          // to the native rAF function
          return raf.call(root, fn);
        };

        module.exports.cancel = function () {
          caf.apply(root, arguments);
        };

        module.exports.polyfill = function () {
          root.requestAnimationFrame = raf;
          root.cancelAnimationFrame = caf;
        };
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "performance-now": 2
    }],
    5: [function (require, module, exports) {
      'use strict';

      var _createClass = function () {
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

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
      * Parallax.js
      * @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
      * @description Creates a parallax effect between an array of layers,
      *              driving the motion from the gyroscope output of a smartdevice.
      *              If no gyroscope is available, the cursor position is used.
      */


      var rqAnFr = require('raf');

      var objectAssign = require('object-assign');

      var helpers = {
        propertyCache: {},
        vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],
        clamp: function clamp(value, min, max) {
          return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
        },
        data: function data(element, name) {
          return helpers.deserialize(element.getAttribute('data-' + name));
        },
        deserialize: function deserialize(value) {
          if (value === 'true') {
            return true;
          } else if (value === 'false') {
            return false;
          } else if (value === 'null') {
            return null;
          } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
          } else {
            return value;
          }
        },
        camelCase: function camelCase(value) {
          return value.replace(/-+(.)?/g, function (match, character) {
            return character ? character.toUpperCase() : '';
          });
        },
        accelerate: function accelerate(element) {
          helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
          helpers.css(element, 'transform-style', 'preserve-3d');
          helpers.css(element, 'backface-visibility', 'hidden');
        },
        transformSupport: function transformSupport(value) {
          var element = document.createElement('div'),
              propertySupport = false,
              propertyValue = null,
              featureSupport = false,
              cssProperty = null,
              jsProperty = null;

          for (var i = 0, l = helpers.vendors.length; i < l; i++) {
            if (helpers.vendors[i] !== null) {
              cssProperty = helpers.vendors[i][0] + 'transform';
              jsProperty = helpers.vendors[i][1] + 'Transform';
            } else {
              cssProperty = 'transform';
              jsProperty = 'transform';
            }

            if (element.style[jsProperty] !== undefined) {
              propertySupport = true;
              break;
            }
          }

          switch (value) {
            case '2D':
              featureSupport = propertySupport;
              break;

            case '3D':
              if (propertySupport) {
                var body = document.body || document.createElement('body'),
                    documentElement = document.documentElement,
                    documentOverflow = documentElement.style.overflow,
                    isCreatedBody = false;

                if (!document.body) {
                  isCreatedBody = true;
                  documentElement.style.overflow = 'hidden';
                  documentElement.appendChild(body);
                  body.style.overflow = 'hidden';
                  body.style.background = '';
                }

                body.appendChild(element);
                element.style[jsProperty] = 'translate3d(1px,1px,1px)';
                propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
                documentElement.style.overflow = documentOverflow;
                body.removeChild(element);

                if (isCreatedBody) {
                  body.removeAttribute('style');
                  body.parentNode.removeChild(body);
                }
              }

              break;
          }

          return featureSupport;
        },
        css: function css(element, property, value) {
          var jsProperty = helpers.propertyCache[property];

          if (!jsProperty) {
            for (var i = 0, l = helpers.vendors.length; i < l; i++) {
              if (helpers.vendors[i] !== null) {
                jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
              } else {
                jsProperty = property;
              }

              if (element.style[jsProperty] !== undefined) {
                helpers.propertyCache[property] = jsProperty;
                break;
              }
            }
          }

          element.style[jsProperty] = value;
        }
      };
      var MAGIC_NUMBER = 30,
          DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        inputElement: null,
        hoverOnly: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 10.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5,
        pointerEvents: false,
        precision: 1,
        onReady: null,
        selector: null
      };

      var Parallax = function () {
        function Parallax(element, options) {
          _classCallCheck(this, Parallax);

          this.element = element;
          var data = {
            calibrateX: helpers.data(this.element, 'calibrate-x'),
            calibrateY: helpers.data(this.element, 'calibrate-y'),
            invertX: helpers.data(this.element, 'invert-x'),
            invertY: helpers.data(this.element, 'invert-y'),
            limitX: helpers.data(this.element, 'limit-x'),
            limitY: helpers.data(this.element, 'limit-y'),
            scalarX: helpers.data(this.element, 'scalar-x'),
            scalarY: helpers.data(this.element, 'scalar-y'),
            frictionX: helpers.data(this.element, 'friction-x'),
            frictionY: helpers.data(this.element, 'friction-y'),
            originX: helpers.data(this.element, 'origin-x'),
            originY: helpers.data(this.element, 'origin-y'),
            pointerEvents: helpers.data(this.element, 'pointer-events'),
            precision: helpers.data(this.element, 'precision'),
            relativeInput: helpers.data(this.element, 'relative-input'),
            clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
            hoverOnly: helpers.data(this.element, 'hover-only'),
            inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
            selector: helpers.data(this.element, 'selector')
          };

          for (var key in data) {
            if (data[key] === null) {
              delete data[key];
            }
          }

          objectAssign(this, DEFAULTS, data, options);

          if (!this.inputElement) {
            this.inputElement = this.element;
          }

          this.calibrationTimer = null;
          this.calibrationFlag = true;
          this.enabled = false;
          this.depthsX = [];
          this.depthsY = [];
          this.raf = null;
          this.bounds = null;
          this.elementPositionX = 0;
          this.elementPositionY = 0;
          this.elementWidth = 0;
          this.elementHeight = 0;
          this.elementCenterX = 0;
          this.elementCenterY = 0;
          this.elementRangeX = 0;
          this.elementRangeY = 0;
          this.calibrationX = 0;
          this.calibrationY = 0;
          this.inputX = 0;
          this.inputY = 0;
          this.motionX = 0;
          this.motionY = 0;
          this.velocityX = 0;
          this.velocityY = 0;
          this.onMouseMove = this.onMouseMove.bind(this);
          this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
          this.onDeviceMotion = this.onDeviceMotion.bind(this);
          this.onOrientationTimer = this.onOrientationTimer.bind(this);
          this.onMotionTimer = this.onMotionTimer.bind(this);
          this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
          this.onAnimationFrame = this.onAnimationFrame.bind(this);
          this.onWindowResize = this.onWindowResize.bind(this);
          this.windowWidth = null;
          this.windowHeight = null;
          this.windowCenterX = null;
          this.windowCenterY = null;
          this.windowRadiusX = null;
          this.windowRadiusY = null;
          this.portrait = false;
          this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
          this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
          this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
          this.orientationStatus = 0;
          this.motionStatus = 0;
          this.initialise();
        }

        _createClass(Parallax, [{
          key: 'initialise',
          value: function initialise() {
            if (this.transform2DSupport === undefined) {
              this.transform2DSupport = helpers.transformSupport('2D');
              this.transform3DSupport = helpers.transformSupport('3D');
            } // Configure Context Styles


            if (this.transform3DSupport) {
              helpers.accelerate(this.element);
            }

            var style = window.getComputedStyle(this.element);

            if (style.getPropertyValue('position') === 'static') {
              this.element.style.position = 'relative';
            } // Pointer events


            if (!this.pointerEvents) {
              this.element.style.pointerEvents = 'none';
            } // Setup


            this.updateLayers();
            this.updateDimensions();
            this.enable();
            this.queueCalibration(this.calibrationDelay);
          }
        }, {
          key: 'doReadyCallback',
          value: function doReadyCallback() {
            if (this.onReady) {
              this.onReady();
            }
          }
        }, {
          key: 'updateLayers',
          value: function updateLayers() {
            if (this.selector) {
              this.layers = this.element.querySelectorAll(this.selector);
            } else {
              this.layers = this.element.children;
            }

            if (!this.layers.length) {
              console.warn('ParallaxJS: Your scene does not have any layers.');
            }

            this.depthsX = [];
            this.depthsY = [];

            for (var index = 0; index < this.layers.length; index++) {
              var layer = this.layers[index];

              if (this.transform3DSupport) {
                helpers.accelerate(layer);
              }

              layer.style.position = index ? 'absolute' : 'relative';
              layer.style.display = 'block';
              layer.style.left = 0;
              layer.style.top = 0;
              var depth = helpers.data(layer, 'depth') || 0;
              this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
              this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
            }
          }
        }, {
          key: 'updateDimensions',
          value: function updateDimensions() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.windowCenterX = this.windowWidth * this.originX;
            this.windowCenterY = this.windowHeight * this.originY;
            this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
            this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
          }
        }, {
          key: 'updateBounds',
          value: function updateBounds() {
            this.bounds = this.inputElement.getBoundingClientRect();
            this.elementPositionX = this.bounds.left;
            this.elementPositionY = this.bounds.top;
            this.elementWidth = this.bounds.width;
            this.elementHeight = this.bounds.height;
            this.elementCenterX = this.elementWidth * this.originX;
            this.elementCenterY = this.elementHeight * this.originY;
            this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
            this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
          }
        }, {
          key: 'queueCalibration',
          value: function queueCalibration(delay) {
            clearTimeout(this.calibrationTimer);
            this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
          }
        }, {
          key: 'enable',
          value: function enable() {
            if (this.enabled) {
              return;
            }

            this.enabled = true;

            if (this.orientationSupport) {
              this.portrait = false;
              window.addEventListener('deviceorientation', this.onDeviceOrientation);
              this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
            } else if (this.motionSupport) {
              this.portrait = false;
              window.addEventListener('devicemotion', this.onDeviceMotion);
              this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
            } else {
              this.calibrationX = 0;
              this.calibrationY = 0;
              this.portrait = false;
              window.addEventListener('mousemove', this.onMouseMove);
              this.doReadyCallback();
            }

            window.addEventListener('resize', this.onWindowResize);
            this.raf = rqAnFr(this.onAnimationFrame);
          }
        }, {
          key: 'disable',
          value: function disable() {
            if (!this.enabled) {
              return;
            }

            this.enabled = false;

            if (this.orientationSupport) {
              window.removeEventListener('deviceorientation', this.onDeviceOrientation);
            } else if (this.motionSupport) {
              window.removeEventListener('devicemotion', this.onDeviceMotion);
            } else {
              window.removeEventListener('mousemove', this.onMouseMove);
            }

            window.removeEventListener('resize', this.onWindowResize);
            rqAnFr.cancel(this.raf);
          }
        }, {
          key: 'calibrate',
          value: function calibrate(x, y) {
            this.calibrateX = x === undefined ? this.calibrateX : x;
            this.calibrateY = y === undefined ? this.calibrateY : y;
          }
        }, {
          key: 'invert',
          value: function invert(x, y) {
            this.invertX = x === undefined ? this.invertX : x;
            this.invertY = y === undefined ? this.invertY : y;
          }
        }, {
          key: 'friction',
          value: function friction(x, y) {
            this.frictionX = x === undefined ? this.frictionX : x;
            this.frictionY = y === undefined ? this.frictionY : y;
          }
        }, {
          key: 'scalar',
          value: function scalar(x, y) {
            this.scalarX = x === undefined ? this.scalarX : x;
            this.scalarY = y === undefined ? this.scalarY : y;
          }
        }, {
          key: 'limit',
          value: function limit(x, y) {
            this.limitX = x === undefined ? this.limitX : x;
            this.limitY = y === undefined ? this.limitY : y;
          }
        }, {
          key: 'origin',
          value: function origin(x, y) {
            this.originX = x === undefined ? this.originX : x;
            this.originY = y === undefined ? this.originY : y;
          }
        }, {
          key: 'setInputElement',
          value: function setInputElement(element) {
            this.inputElement = element;
            this.updateDimensions();
          }
        }, {
          key: 'setPosition',
          value: function setPosition(element, x, y) {
            x = x.toFixed(this.precision) + 'px';
            y = y.toFixed(this.precision) + 'px';

            if (this.transform3DSupport) {
              helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
            } else if (this.transform2DSupport) {
              helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
            } else {
              element.style.left = x;
              element.style.top = y;
            }
          }
        }, {
          key: 'onOrientationTimer',
          value: function onOrientationTimer() {
            if (this.orientationSupport && this.orientationStatus === 0) {
              this.disable();
              this.orientationSupport = false;
              this.enable();
            } else {
              this.doReadyCallback();
            }
          }
        }, {
          key: 'onMotionTimer',
          value: function onMotionTimer() {
            if (this.motionSupport && this.motionStatus === 0) {
              this.disable();
              this.motionSupport = false;
              this.enable();
            } else {
              this.doReadyCallback();
            }
          }
        }, {
          key: 'onCalibrationTimer',
          value: function onCalibrationTimer() {
            this.calibrationFlag = true;
          }
        }, {
          key: 'onWindowResize',
          value: function onWindowResize() {
            this.updateDimensions();
          }
        }, {
          key: 'onAnimationFrame',
          value: function onAnimationFrame() {
            this.updateBounds();
            var calibratedInputX = this.inputX - this.calibrationX,
                calibratedInputY = this.inputY - this.calibrationY;

            if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
              this.queueCalibration(0);
            }

            if (this.portrait) {
              this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
              this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
            } else {
              this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
              this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
            }

            this.motionX *= this.elementWidth * (this.scalarX / 100);
            this.motionY *= this.elementHeight * (this.scalarY / 100);

            if (!isNaN(parseFloat(this.limitX))) {
              this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
            }

            if (!isNaN(parseFloat(this.limitY))) {
              this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
            }

            this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
            this.velocityY += (this.motionY - this.velocityY) * this.frictionY;

            for (var index = 0; index < this.layers.length; index++) {
              var layer = this.layers[index],
                  depthX = this.depthsX[index],
                  depthY = this.depthsY[index],
                  xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
                  yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
              this.setPosition(layer, xOffset, yOffset);
            }

            this.raf = rqAnFr(this.onAnimationFrame);
          }
        }, {
          key: 'rotate',
          value: function rotate(beta, gamma) {
            // Extract Rotation
            var x = (beta || 0) / MAGIC_NUMBER,
                //  -90 :: 90
            y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180
            // Detect Orientation Change

            var portrait = this.windowHeight > this.windowWidth;

            if (this.portrait !== portrait) {
              this.portrait = portrait;
              this.calibrationFlag = true;
            }

            if (this.calibrationFlag) {
              this.calibrationFlag = false;
              this.calibrationX = x;
              this.calibrationY = y;
            }

            this.inputX = x;
            this.inputY = y;
          }
        }, {
          key: 'onDeviceOrientation',
          value: function onDeviceOrientation(event) {
            var beta = event.beta;
            var gamma = event.gamma;

            if (beta !== null && gamma !== null) {
              this.orientationStatus = 1;
              this.rotate(beta, gamma);
            }
          }
        }, {
          key: 'onDeviceMotion',
          value: function onDeviceMotion(event) {
            var beta = event.rotationRate.beta;
            var gamma = event.rotationRate.gamma;

            if (beta !== null && gamma !== null) {
              this.motionStatus = 1;
              this.rotate(beta, gamma);
            }
          }
        }, {
          key: 'onMouseMove',
          value: function onMouseMove(event) {
            var clientX = event.clientX,
                clientY = event.clientY; // reset input to center if hoverOnly is set and we're not hovering the element

            if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
              this.inputX = 0;
              this.inputY = 0;
              return;
            }

            if (this.relativeInput) {
              // Clip mouse coordinates inside element bounds.
              if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.elementPositionX);
                clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
                clientY = Math.max(clientY, this.elementPositionY);
                clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
              } // Calculate input relative to the element.


              if (this.elementRangeX && this.elementRangeY) {
                this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
                this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
              }
            } else {
              // Calculate input relative to the window.
              if (this.windowRadiusX && this.windowRadiusY) {
                this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
                this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
              }
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.disable();
            clearTimeout(this.calibrationTimer);
            clearTimeout(this.detectionTimer);
            this.element.removeAttribute('style');

            for (var index = 0; index < this.layers.length; index++) {
              this.layers[index].removeAttribute('style');
            }

            delete this.element;
            delete this.layers;
          }
        }, {
          key: 'version',
          value: function version() {
            return '3.1.0';
          }
        }]);

        return Parallax;
      }();

      module.exports = Parallax;
    }, {
      "object-assign": 1,
      "raf": 4
    }]
  }, {}, [5])(5);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
      return factory(window, Unipointer);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Unipointer) {
  'use strict'; // -------------------------- Unidragger -------------------------- //

  function Unidragger() {} // inherit Unipointer & EvEmitter


  var proto = Unidragger.prototype = Object.create(Unipointer.prototype); // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd
   */


  proto._bindHandles = function (isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd; // bind each handle

    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
    var touchAction = isAdd ? this._touchActionValue : '';

    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];

      this._bindStartEvent(handle, isAdd);

      handle[bindMethod]('click', this); // touch-action: none to override browser touch gestures. metafizzy/flickity#540

      if (window.PointerEvent) {
        handle.style.touchAction = touchAction;
      }
    }
  }; // prototype so it can be overwriteable by Flickity


  proto._touchActionValue = 'none'; // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */

  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);

    if (!isOkay) {
      return;
    } // track start event position
    // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842


    this.pointerDownPointer = {
      pageX: pointer.pageX,
      pageY: pointer.pageY
    };
    event.preventDefault();
    this.pointerDownBlur(); // bind move and end events

    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // nodes that have text fields


  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  }; // input types that do not have text fields

  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  }; // dismiss inputs with text fields. flickity#403, flickity#404

  proto.okayPointerDown = function (event) {
    var isCursorNode = cursorNodes[event.target.nodeName];
    var isClickType = clickTypes[event.target.type];
    var isOkay = !isCursorNode || isClickType;

    if (!isOkay) {
      this._pointerReset();
    }

    return isOkay;
  }; // kludge to blur previously focused input


  proto.pointerDownBlur = function () {
    var focused = document.activeElement; // do not blur body for IE10, metafizzy/flickity#117

    var canBlur = focused && focused.blur && focused != document.body;

    if (canBlur) {
      focused.blur();
    }
  }; // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);

    this.emitEvent('pointerMove', [event, pointer, moveVector]);

    this._dragMove(event, pointer, moveVector);
  }; // base pointer move logic


  proto._dragPointerMove = function (event, pointer) {
    var moveVector = {
      x: pointer.pageX - this.pointerDownPointer.pageX,
      y: pointer.pageY - this.pointerDownPointer.pageY
    }; // start drag if pointer has moved far enough to start drag

    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }

    return moveVector;
  }; // condition if pointer has moved far enough to start drag


  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  }; // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);

    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  }; // -------------------------- drag -------------------------- //
  // dragStart


  proto._dragStart = function (event, pointer) {
    this.isDragging = true; // prevent clicks

    this.isPreventingClicks = true;
    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  }; // dragMove


  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  }; // dragEnd


  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false; // re-enable clicking async

    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));
    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  }; // ----- onclick ----- //
  // handle all clicks and prevent clicks when dragging


  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  }; // ----- staticClick ----- //
  // triggered after pointer down & up with no/tiny movement


  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    this.staticClick(event, pointer); // set flag for emulated clicks 300ms after touchend

    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true; // reset flag after 300ms

      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  }; // ----- utils ----- //


  Unidragger.getPointerPoint = Unipointer.getPointerPoint; // -----  ----- //

  return Unidragger;
});

/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /* jshint strict: false */

  /*global define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, EvEmitter) {
  'use strict';

  function noop() {}

  function Unipointer() {} // inherit EvEmitter


  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };
  /**
   * Add or remove start event
   * @param {Boolean} isAdd - remove if falsey
   */


  proto._bindStartEvent = function (elem, isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener'; // default to mouse events

    var startEvent = 'mousedown';

    if (window.PointerEvent) {
      // Pointer Events
      startEvent = 'pointerdown';
    } else if ('ontouchstart' in window) {
      // Touch Events. iOS Safari
      startEvent = 'touchstart';
    }

    elem[bindMethod](startEvent, this);
  }; // trigger handler methods for events


  proto.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // returns the touch that we're keeping track of


  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];

      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  }; // ----- start event ----- //


  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;

    if (button && button !== 0 && button !== 1) {
      return;
    }

    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };
  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */


  proto._pointerDown = function (event, pointer) {
    // dismiss right click and other pointers
    // button = 0 is okay, 1-4 not
    if (event.button || this.isPointerDown) {
      return;
    }

    this.isPointerDown = true; // save pointer identifier to match up touch events

    this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;
    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);

    this.emitEvent('pointerDown', [event, pointer]);
  }; // hash of events to be bound after start event


  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    } // get proper events to match start event


    var events = postStartEvents[event.type]; // bind events to node

    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this); // save these arguments

    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }

    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  }; // ----- move event ----- //


  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerMove(event, touch);
    }
  };
  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  }; // public


  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  }; // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerUp(event, touch);
    }
  };
  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerUp = function (event, pointer) {
    this._pointerDone();

    this.pointerUp(event, pointer);
  }; // public


  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  }; // ----- pointer done ----- //
  // triggered on pointer up & pointer cancel


  proto._pointerDone = function () {
    this._pointerReset();

    this._unbindPostStartEvents();

    this.pointerDone();
  };

  proto._pointerReset = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };

  proto.pointerDone = noop; // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);

    if (touch) {
      this._pointerCancel(event, touch);
    }
  };
  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */


  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();

    this.pointerCancel(event, pointer);
  }; // public


  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  }; // -----  ----- //
  // utility function for getting x/y coords from event


  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  }; // -----  ----- //


  return Unipointer;
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallax */ "./src/js/parallax.js");
/* harmony import */ var _lazyLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyLoad */ "./src/js/lazyLoad.js");
/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliders */ "./src/js/sliders.js");
/* harmony import */ var _menuToggler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuToggler */ "./src/js/menuToggler.js");
/* harmony import */ var _menuBrighten__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuBrighten */ "./src/js/menuBrighten.js");





var pageUrl = window.location.pathname;
var isHome = pageUrl == '/de/' || pageUrl == '/en/' ? true : false;
var isHomeEn = pageUrl == '/en/' ? true : false;
var isLeistungen = pageUrl == '/leistungen/' || pageUrl == '/en/services/' ? true : false;
var isKontakt = pageUrl == '/kontakt/' || pageUrl == '/en/contact/' ? true : false;
var isImpressum = pageUrl == '/impressum/' || pageUrl == '/en/imprint/' ? true : false; // GENERAL INIT

Object(_lazyLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_sliders__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_menuToggler__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_menuBrighten__WEBPACK_IMPORTED_MODULE_4__["default"])(); // PAGE_SPESIFIC INIT

if (isHome) {
  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__["homeParallax"])();
}

if (isHomeEn) {
  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__["homeParallaxEng"])();
}

/***/ }),

/***/ "./src/js/lazyLoad.js":
/*!****************************!*\
  !*** ./src/js/lazyLoad.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  window.addEventListener('load', function () {
    var lazyItems = document.querySelectorAll('.lazyLoad');

    for (var i = 0; i < lazyItems.length; i++) {
      var imgUrl = lazyItems[i].getAttribute('data-bg');
      lazyItems[i].style.backgroundImage = "url('".concat(imgUrl, "')");
    }
  });
});

/***/ }),

/***/ "./src/js/menuBrighten.js":
/*!********************************!*\
  !*** ./src/js/menuBrighten.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var menu = document.querySelector('.menu');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      menu.classList.add('menuWhite');
    } else if (window.scrollY <= 60) {
      menu.classList.remove('menuWhite');
    }
  });
});

/***/ }),

/***/ "./src/js/menuToggler.js":
/*!*******************************!*\
  !*** ./src/js/menuToggler.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menuClassDel = function menuClassDel(nav, menu, menuColorClass) {
  nav.classList.remove('reveal');
  nav.parentElement.classList.remove('open');
  setTimeout(function () {
    nav.classList.remove('show');
    window.scrollY > 60 && menu.classList.add(menuColorClass);
  }, 350);
};

var menuClassAdd = function menuClassAdd(nav, menu, menuColorClass) {
  nav.classList.add('show');
  nav.parentElement.classList.add('open');
  window.scrollY < 60 && menu.classList.remove(menuColorClass);
  setTimeout(function () {
    nav.classList.add('reveal');
  }, 350);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var toggler = document.getElementById('toggler');
  var nav = document.querySelector('.nav');
  var menu = document.querySelector('.menu');
  toggler.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('toggled');

    if (nav.classList.contains('show')) {
      menuClassDel(nav, menu, 'menuWhite');
    } else {
      menuClassAdd(nav, menu, 'menuWhite');
    }
  });
});

/***/ }),

/***/ "./src/js/parallax.js":
/*!****************************!*\
  !*** ./src/js/parallax.js ***!
  \****************************/
/*! exports provided: homeParallax, homeParallaxEng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeParallax", function() { return homeParallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeParallaxEng", function() { return homeParallaxEng; });
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);

var homeParallax = function homeParallax() {
  if (document.querySelector('.parallax__wrapper') != null) {
    var scene = document.querySelector('.parallax__wrapper');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene);
  }
};
var homeParallaxEng = function homeParallaxEng() {
  if (document.querySelector('.parallax__wrapper--mountains') != null) {
    var sceneMountains = document.querySelector('.parallax__wrapper--mountains');
    var parallaxInstanceMountains = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(sceneMountains);
  }
};

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (document.querySelector('.aboutus__quote--wrapper') != null) {
    var slider = new flickity__WEBPACK_IMPORTED_MODULE_0___default.a('.aboutus__quote--wrapper', {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      autoPlay: 6000
    });
  }
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fatih/sites/rewice/wp-content/themes/rewice/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvYWRkLXJlbW92ZS1jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hbmltYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9jZWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9kcmFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9mbGlja2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2xhenlsb2FkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wYWdlLWRvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcHJldi1uZXh0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dldC1zaXplL2dldC1zaXplLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvcGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaWRyYWdnZXIvdW5pZHJhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pcG9pbnRlci91bmlwb2ludGVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF6eUxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnVCcmlnaHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudVRvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcmFsbGF4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXJzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImZhY3RvcnkiLCJkZWZpbmUiLCJtYXRjaGVzTWV0aG9kIiwiRWxlbVByb3RvIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXMiLCJtYXRjaGVzU2VsZWN0b3IiLCJwcmVmaXhlcyIsImkiLCJsZW5ndGgiLCJwcmVmaXgiLCJtZXRob2QiLCJlbGVtIiwic2VsZWN0b3IiLCJnbG9iYWwiLCJFdkVtaXR0ZXIiLCJwcm90byIsIm9uIiwiZXZlbnROYW1lIiwibGlzdGVuZXIiLCJldmVudHMiLCJfZXZlbnRzIiwibGlzdGVuZXJzIiwiaW5kZXhPZiIsInB1c2giLCJvbmNlIiwib25jZUV2ZW50cyIsIl9vbmNlRXZlbnRzIiwib25jZUxpc3RlbmVycyIsIm9mZiIsImluZGV4Iiwic3BsaWNlIiwiZW1pdEV2ZW50IiwiYXJncyIsInNsaWNlIiwiaXNPbmNlIiwiYXBwbHkiLCJhbGxPZmYiLCJ1dGlscyIsImV4dGVuZCIsImEiLCJiIiwicHJvcCIsIm1vZHVsbyIsIm51bSIsImRpdiIsImFycmF5U2xpY2UiLCJBcnJheSIsIm1ha2VBcnJheSIsIm9iaiIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJpc0FycmF5TGlrZSIsImNhbGwiLCJyZW1vdmVGcm9tIiwiYXJ5IiwiZ2V0UGFyZW50IiwicGFyZW50Tm9kZSIsImRvY3VtZW50IiwiYm9keSIsImdldFF1ZXJ5RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwidHlwZSIsImZpbHRlckZpbmRFbGVtZW50cyIsImVsZW1zIiwiZmZFbGVtcyIsImZvckVhY2giLCJIVE1MRWxlbWVudCIsImNoaWxkRWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVib3VuY2VNZXRob2QiLCJfY2xhc3MiLCJtZXRob2ROYW1lIiwidGhyZXNob2xkIiwidGltZW91dE5hbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYXJndW1lbnRzIiwiX3RoaXMiLCJzZXRUaW1lb3V0IiwiZG9jUmVhZHkiLCJjYWxsYmFjayIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9EYXNoZWQiLCJzdHIiLCJyZXBsYWNlIiwibWF0Y2giLCIkMSIsIiQyIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwiaHRtbEluaXQiLCJXaWRnZXRDbGFzcyIsIm5hbWVzcGFjZSIsImRhc2hlZE5hbWVzcGFjZSIsImRhdGFBdHRyIiwiZGF0YUF0dHJFbGVtcyIsImpzRGFzaEVsZW1zIiwiY29uY2F0IiwiZGF0YU9wdGlvbnNBdHRyIiwialF1ZXJ5IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNsYXNzTmFtZSIsImluc3RhbmNlIiwiZGF0YSIsIkZsaWNraXR5IiwiZ2V0Q2VsbHNGcmFnbWVudCIsImNlbGxzIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2VsbCIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImluc2VydCIsIl9tYWtlQ2VsbHMiLCJsZW4iLCJpc0FwcGVuZCIsInNsaWRlciIsImluc2VydENlbGxFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZW5kQ2VsbHMiLCJfc2l6ZUNlbGxzIiwiY2VsbENoYW5nZSIsImFwcGVuZCIsInByZXBlbmQiLCJyZW1vdmUiLCJnZXRDZWxscyIsIm1pbkNlbGxJbmRleCIsIk1hdGgiLCJtaW4iLCJjZWxsU2l6ZUNoYW5nZSIsImdldENlbGwiLCJnZXRTaXplIiwiY2hhbmdlZENlbGxJbmRleCIsImlzUG9zaXRpb25pbmdTbGlkZXIiLCJwcmV2U2VsZWN0ZWRFbGVtIiwic2VsZWN0ZWRFbGVtZW50IiwiX3Bvc2l0aW9uQ2VsbHMiLCJfZ2V0V3JhcFNoaWZ0Q2VsbHMiLCJzZXRHYWxsZXJ5U2l6ZSIsInNlbGVjdGVkSW5kZXgiLCJnZXRDZWxsU2xpZGVJbmRleCIsInNsaWRlcyIsInNlbGVjdCIsInBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCIsInN0YXJ0QW5pbWF0aW9uIiwiaXNBbmltYXRpbmciLCJyZXN0aW5nRnJhbWVzIiwiYW5pbWF0ZSIsImFwcGx5RHJhZ0ZvcmNlIiwiYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24iLCJwcmV2aW91c1giLCJ4IiwiaW50ZWdyYXRlUGh5c2ljcyIsInBvc2l0aW9uU2xpZGVyIiwic2V0dGxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZUZyYW1lIiwid3JhcEFyb3VuZCIsInNsaWRlYWJsZVdpZHRoIiwic2hpZnRXcmFwQ2VsbHMiLCJzZXRUcmFuc2xhdGVYIiwiZGlzcGF0Y2hTY3JvbGxFdmVudCIsImlzM2QiLCJjdXJzb3JQb3NpdGlvbiIsInJpZ2h0VG9MZWZ0IiwidHJhbnNsYXRlWCIsImdldFBvc2l0aW9uVmFsdWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImZpcnN0U2xpZGUiLCJwb3NpdGlvblgiLCJ0YXJnZXQiLCJwcm9ncmVzcyIsInNsaWRlc1dpZHRoIiwiZGlzcGF0Y2hFdmVudCIsInNlbGVjdGVkU2xpZGUiLCJ2ZWxvY2l0eSIsInBvc2l0aW9uIiwicGVyY2VudFBvc2l0aW9uIiwicm91bmQiLCJzaXplIiwiaW5uZXJXaWR0aCIsImlzUG9pbnRlckRvd24iLCJpc0ZyZWVTY3JvbGxpbmciLCJiZWZvcmVHYXAiLCJfc2hpZnRDZWxscyIsImJlZm9yZVNoaWZ0Q2VsbHMiLCJhZnRlckdhcCIsImFmdGVyU2hpZnRDZWxscyIsImdhcCIsInNoaWZ0IiwiY2VsbFNoaWZ0Iiwid3JhcFNoaWZ0Iiwib3V0ZXJXaWR0aCIsIl91bnNoaWZ0Q2VsbHMiLCJnZXRGcmljdGlvbkZhY3RvciIsImFwcGx5Rm9yY2UiLCJmb3JjZSIsImdldFJlc3RpbmdQb3NpdGlvbiIsImlzRHJhZ2dhYmxlIiwiZHJhZ1ZlbG9jaXR5IiwiZHJhZ1giLCJkcmFnRm9yY2UiLCJkcmFnRG93biIsImRpc3RhbmNlIiwic2VsZWN0ZWRBdHRyYWN0aW9uIiwiQ2VsbCIsInBhcmVudCIsImNyZWF0ZSIsInNldEF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJ1bnNlbGVjdCIsInNpZGUiLCJvcmlnaW5TaWRlIiwic2V0UG9zaXRpb24iLCJ1cGRhdGVUYXJnZXQiLCJyZW5kZXJQb3NpdGlvbiIsInNldERlZmF1bHRUYXJnZXQiLCJtYXJnaW5Qcm9wZXJ0eSIsIndpZHRoIiwiY2VsbEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlQ2hpbGQiLCJVbmlkcmFnZ2VyIiwiZGVmYXVsdHMiLCJkcmFnZ2FibGUiLCJkcmFnVGhyZXNob2xkIiwiY3JlYXRlTWV0aG9kcyIsIl90b3VjaEFjdGlvblZhbHVlIiwiaXNUb3VjaCIsImlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQiLCJfY3JlYXRlRHJhZyIsIm9uQWN0aXZhdGVEcmFnIiwiX3VpQ2hhbmdlRHJhZyIsIm9uRGVhY3RpdmF0ZURyYWciLCJ1cGRhdGVEcmFnZ2FibGUiLCJoYW5kbGVzIiwidmlld3BvcnQiLCJiaW5kSGFuZGxlcyIsInVuYmluZEhhbmRsZXMiLCJiaW5kRHJhZyIsInVuYmluZERyYWciLCJwb2ludGVyRG93biIsInBvaW50ZXIiLCJfcG9pbnRlckRvd25EZWZhdWx0IiwiaXNPa2F5Iiwib2theVBvaW50ZXJEb3duIiwiX3BvaW50ZXJEb3duUHJldmVudERlZmF1bHQiLCJwb2ludGVyRG93bkZvY3VzIiwiYWN0aXZlRWxlbWVudCIsInBvaW50ZXJEb3duQmx1ciIsInBvaW50ZXJEb3duU2Nyb2xsIiwiZ2V0U2Nyb2xsUG9zaXRpb24iLCJwb2ludGVyRG93blBvaW50ZXIiLCJwYWdlWCIsInBhZ2VZIiwiX2JpbmRQb3N0U3RhcnRFdmVudHMiLCJmb2N1c05vZGVzIiwiSU5QVVQiLCJURVhUQVJFQSIsIlNFTEVDVCIsImlzRm9jdXNOb2RlIiwibm9kZU5hbWUiLCJmb2N1cyIsImlzVG91Y2hTdGFydCIsImlzVG91Y2hQb2ludGVyIiwicG9pbnRlclR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0RyYWdTdGFydGVkIiwibW92ZVZlY3RvciIsImFicyIsInBvaW50ZXJVcCIsImlzVG91Y2hTY3JvbGxpbmciLCJfZHJhZ1BvaW50ZXJVcCIsInBvaW50ZXJEb25lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyYWdTdGFydCIsImRyYWdTdGFydFBvc2l0aW9uIiwicG9pbnRlck1vdmUiLCJfZHJhZ1BvaW50ZXJNb3ZlIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJwcmV2aW91c0RyYWdYIiwiZGlyZWN0aW9uIiwib3JpZ2luQm91bmQiLCJtYXgiLCJlbmRCb3VuZCIsImdldExhc3RTbGlkZSIsImRyYWdNb3ZlVGltZSIsIkRhdGUiLCJkcmFnRW5kIiwiZnJlZVNjcm9sbCIsImRyYWdFbmRSZXN0aW5nU2VsZWN0IiwicmVzdGluZ1giLCJkcmFnRW5kQm9vc3RTZWxlY3QiLCJpc0RyYWdTZWxlY3QiLCJnZXRTbGlkZURpc3RhbmNlIiwicG9zaXRpdmVSZXN0aW5nIiwiX2dldENsb3Nlc3RSZXN0aW5nIiwibmVnYXRpdmVSZXN0aW5nIiwiaW5jcmVtZW50IiwibWluRGlzdGFuY2UiLCJJbmZpbml0eSIsImNvbmRpdGlvbiIsImNvbnRhaW4iLCJkIiwibWQiLCJpc1dyYXBBcm91bmQiLCJzbGlkZUluZGV4Iiwic2xpZGUiLCJ3cmFwIiwiZmxvb3IiLCJkZWx0YSIsInN0YXRpY0NsaWNrIiwiY2xpY2tlZENlbGwiLCJnZXRQYXJlbnRDZWxsIiwiY2VsbEVsZW0iLCJjZWxsSW5kZXgiLCJvbnNjcm9sbCIsInNjcm9sbCIsInNjcm9sbE1vdmVYIiwic2Nyb2xsTW92ZVkiLCJ5IiwiX3BvaW50ZXJEb25lIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlNsaWRlIiwiYW5pbWF0ZVByb3RvdHlwZSIsImdldENvbXB1dGVkU3R5bGUiLCJtb3ZlRWxlbWVudHMiLCJ0b0VsZW0iLCJHVUlEIiwiaW5zdGFuY2VzIiwicXVlcnlFbGVtZW50IiwiZmxpY2tpdHlHVUlEIiwib3B0aW9uIiwiJGVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGUiLCJhY2Nlc3NpYmlsaXR5IiwiZnJlZVNjcm9sbEZyaWN0aW9uIiwiZnJpY3Rpb24iLCJuYW1lc3BhY2VKUXVlcnlFdmVudHMiLCJyZXNpemUiLCJpZCIsImd1aWQiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZVNsaWRlciIsIndhdGNoQ1NTIiwiYWN0aXZhdGUiLCJvcHRzIiwiaXNBY3RpdmUiLCJjZWxsRWxlbXMiLCJfZmlsdGVyRmluZENlbGxFbGVtZW50cyIsImNoaWxkcmVuIiwicmVsb2FkQ2VsbHMiLCJ0YWJJbmRleCIsInNlbGVjdEluaXRpYWxJbmRleCIsImlzSW5pdEFjdGl2YXRlZCIsImNlbGxTZWxlY3RvciIsInBvc2l0aW9uQ2VsbHMiLCJtYXAiLCJnZXRMYXN0Q2VsbCIsIm1heENlbGxIZWlnaHQiLCJjZWxsWCIsInN0YXJ0Q2VsbCIsIm91dGVySGVpZ2h0IiwidXBkYXRlU2xpZGVzIiwiX2NvbnRhaW5TbGlkZXMiLCJpc09yaWdpbkxlZnQiLCJuZXh0TWFyZ2luIiwiY2FuQ2VsbEZpdCIsIl9nZXRDYW5DZWxsRml0IiwiYWRkQ2VsbCIsInNsaWRlV2lkdGgiLCJmaXJzdE1hcmdpbiIsInVwZGF0ZVNlbGVjdGVkU2xpZGUiLCJncm91cENlbGxzIiwibnVtYmVyIiwicGFyc2VJbnQiLCJwZXJjZW50TWF0Y2giLCJwZXJjZW50IiwiX2luaXQiLCJyZXBvc2l0aW9uIiwic2V0Q2VsbEFsaWduIiwiY2VsbEFsaWduU2hvcnRoYW5kcyIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsInNob3J0aGFuZCIsImhlaWdodCIsImFkYXB0aXZlSGVpZ2h0IiwiZ2FwWCIsIl9nZXRHYXBDZWxscyIsImlzUmlnaHRUb0xlZnQiLCJiZWdpbk1hcmdpbiIsImVuZE1hcmdpbiIsImNvbnRlbnRXaWR0aCIsImlzQ29udGVudFNtYWxsZXIiLCJiZWdpbkJvdW5kIiwiZW1pdEFyZ3MiLCIkZXZlbnQiLCJqUUV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VyIiwiaXNXcmFwIiwiaXNJbnN0YW50IiwiX3dyYXBTZWxlY3QiLCJwcmV2SW5kZXgiLCJpc1dyYXBwaW5nIiwid3JhcEluZGV4IiwiYmFja1dyYXBEZWx0YSIsImZvcmV3YXJkV3JhcERlbHRhIiwicHJldmlvdXMiLCJuZXh0IiwidW5zZWxlY3RTZWxlY3RlZFNsaWRlIiwic2VsZWN0ZWRDZWxscyIsInNlbGVjdGVkRWxlbWVudHMiLCJnZXRDZWxsRWxlbWVudHMiLCJzZWxlY3RlZENlbGwiLCJpbml0aWFsSW5kZXgiLCJxdWVyeUNlbGwiLCJzZWxlY3RDZWxsIiwidmFsdWUiLCJnZXRBZGphY2VudENlbGxFbGVtZW50cyIsImFkakNvdW50IiwidWlDaGFuZ2UiLCJjaGlsZFVJUG9pbnRlckRvd24iLCJvbnJlc2l6ZSIsIndhdGNoT3B0aW9uIiwiYWZ0ZXJDb250ZW50IiwiY29udGVudCIsImRlYWN0aXZhdGUiLCJvbmtleWRvd24iLCJpc05vdEZvY3VzZWQiLCJoYW5kbGVyIiwia2V5Ym9hcmRIYW5kbGVycyIsImtleUNvZGUiLCJsZWZ0TWV0aG9kIiwicmlnaHRNZXRob2QiLCJwcmV2U2Nyb2xsWSIsInByZXZlbnRTY3JvbGwiLCJzY3JvbGxUbyIsInJlbW92ZURhdGEiLCJicmlkZ2V0Iiwic2V0SlF1ZXJ5IiwianEiLCJfY3JlYXRlTGF6eWxvYWQiLCJsYXp5TG9hZCIsImxhenlJbWFnZXMiLCJsYXp5Q2VsbEltYWdlcyIsImdldENlbGxMYXp5SW1hZ2VzIiwiaW1nIiwiTGF6eUxvYWRlciIsImxhenlsb2FkQXR0ciIsInNyY0F0dHIiLCJzcmNzZXRBdHRyIiwibGF6eVNlbGVjdG9yIiwiaW1ncyIsImZsaWNraXR5IiwibG9hZCIsInNyYyIsInNyY3NldCIsIm9ubG9hZCIsImNvbXBsZXRlIiwib25lcnJvciIsIlVuaXBvaW50ZXIiLCJQYWdlRG90cyIsIk9iamVjdCIsImhvbGRlciIsImRvdHMiLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJiaW5kIiwic2V0RG90cyIsImJpbmRTdGFydEV2ZW50IiwidW5iaW5kU3RhcnRFdmVudCIsImFkZERvdHMiLCJyZW1vdmVEb3RzIiwiY291bnQiLCJuZXdEb3RzIiwiZG90IiwidXBkYXRlU2VsZWN0ZWQiLCJzZWxlY3RlZERvdCIsIm9uVGFwIiwicGFnZURvdHMiLCJfY3JlYXRlUGFnZURvdHMiLCJhY3RpdmF0ZVBhZ2VEb3RzIiwidXBkYXRlU2VsZWN0ZWRQYWdlRG90cyIsInVwZGF0ZVBhZ2VEb3RzIiwiZGVhY3RpdmF0ZVBhZ2VEb3RzIiwiUGxheWVyIiwic3RhdGUiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwib25WaXNpYmlsaXR5UGxheSIsInZpc2liaWxpdHlQbGF5IiwicGxheSIsImlzUGFnZUhpZGRlbiIsImhpZGRlbiIsInRpY2siLCJ0aW1lIiwiYXV0b1BsYXkiLCJjbGVhciIsInN0b3AiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZUF1dG9QbGF5T25Ib3ZlciIsIl9jcmVhdGVQbGF5ZXIiLCJwbGF5ZXIiLCJhY3RpdmF0ZVBsYXllciIsInN0b3BQbGF5ZXIiLCJkZWFjdGl2YXRlUGxheWVyIiwicGxheVBsYXllciIsInBhdXNlUGxheWVyIiwidW5wYXVzZVBsYXllciIsIm9ubW91c2VlbnRlciIsIm9ubW91c2VsZWF2ZSIsInN2Z1VSSSIsIlByZXZOZXh0QnV0dG9uIiwiaXNFbmFibGVkIiwiaXNQcmV2aW91cyIsImxlZnREaXJlY3Rpb24iLCJpc0xlZnQiLCJkaXNhYmxlIiwic3ZnIiwiY3JlYXRlU1ZHIiwidXBkYXRlIiwiY3JlYXRlRWxlbWVudE5TIiwicGF0aCIsInBhdGhNb3ZlbWVudHMiLCJnZXRBcnJvd01vdmVtZW50cyIsImFycm93U2hhcGUiLCJzaGFwZSIsIngwIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsIm9uY2xpY2siLCJlbmFibGUiLCJkaXNhYmxlZCIsImxhc3RJbmRleCIsImJvdW5kSW5kZXgiLCJwcmV2TmV4dEJ1dHRvbnMiLCJfY3JlYXRlUHJldk5leHRCdXR0b25zIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyIsImRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMiLCJsYXN0Q2VsbCIsImxhc3RNYXJnaW4iLCJnZXRTdHlsZVNpemUiLCJwYXJzZUZsb2F0IiwiaXNWYWxpZCIsImlzTmFOIiwibm9vcCIsImxvZ0Vycm9yIiwibWVzc2FnZSIsIm1lYXN1cmVtZW50cyIsIm1lYXN1cmVtZW50c0xlbmd0aCIsImdldFplcm9TaXplIiwiaW5uZXJIZWlnaHQiLCJtZWFzdXJlbWVudCIsImdldFN0eWxlIiwiaXNTZXR1cCIsImlzQm94U2l6ZU91dGVyIiwic2V0dXAiLCJwYWRkaW5nIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImJveFNpemluZyIsImRvY3VtZW50RWxlbWVudCIsIm5vZGVUeXBlIiwiZGlzcGxheSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaXNCb3JkZXJCb3giLCJwYWRkaW5nV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdIZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbldpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luSGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJpc0JvcmRlckJveFNpemVPdXRlciIsInN0eWxlV2lkdGgiLCJzdHlsZUhlaWdodCIsIl9iaW5kSGFuZGxlcyIsImlzQWRkIiwiYmluZE1ldGhvZCIsInRvdWNoQWN0aW9uIiwiaGFuZGxlIiwiX2JpbmRTdGFydEV2ZW50IiwiUG9pbnRlckV2ZW50IiwiY3Vyc29yTm9kZXMiLCJPUFRJT04iLCJjbGlja1R5cGVzIiwicmFkaW8iLCJjaGVja2JveCIsImJ1dHRvbiIsInN1Ym1pdCIsImltYWdlIiwiZmlsZSIsImlzQ3Vyc29yTm9kZSIsImlzQ2xpY2tUeXBlIiwiX3BvaW50ZXJSZXNldCIsImZvY3VzZWQiLCJjYW5CbHVyIiwiYmx1ciIsImlzRHJhZ2dpbmciLCJfZHJhZ1N0YXJ0IiwiX2RyYWdFbmQiLCJfc3RhdGljQ2xpY2siLCJpc1ByZXZlbnRpbmdDbGlja3MiLCJpc0lnbm9yaW5nTW91c2VVcCIsImdldFBvaW50ZXJQb2ludCIsInN0YXJ0RXZlbnQiLCJnZXRUb3VjaCIsInRvdWNoZXMiLCJ0b3VjaCIsImlkZW50aWZpZXIiLCJwb2ludGVySWRlbnRpZmllciIsIm9ubW91c2Vkb3duIiwiX3BvaW50ZXJEb3duIiwib250b3VjaHN0YXJ0IiwiY2hhbmdlZFRvdWNoZXMiLCJvbnBvaW50ZXJkb3duIiwicG9pbnRlcklkIiwicG9zdFN0YXJ0RXZlbnRzIiwibW91c2Vkb3duIiwidG91Y2hzdGFydCIsInBvaW50ZXJkb3duIiwiX2JvdW5kUG9pbnRlckV2ZW50cyIsIl91bmJpbmRQb3N0U3RhcnRFdmVudHMiLCJvbm1vdXNlbW92ZSIsIl9wb2ludGVyTW92ZSIsIm9ucG9pbnRlcm1vdmUiLCJvbnRvdWNobW92ZSIsIm9ubW91c2V1cCIsIl9wb2ludGVyVXAiLCJvbnBvaW50ZXJ1cCIsIm9udG91Y2hlbmQiLCJvbnBvaW50ZXJjYW5jZWwiLCJfcG9pbnRlckNhbmNlbCIsIm9udG91Y2hjYW5jZWwiLCJwb2ludGVyQ2FuY2VsIiwiZyIsIkZ1bmN0aW9uIiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYWdlVXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlzSG9tZSIsImlzSG9tZUVuIiwiaXNMZWlzdHVuZ2VuIiwiaXNLb250YWt0IiwiaXNJbXByZXNzdW0iLCJzbGlkZXJzIiwibWVudVRvZ2dsZXIiLCJtZW51QnJpZ2h0ZW4iLCJob21lUGFyYWxsYXgiLCJob21lUGFyYWxsYXhFbmciLCJsYXp5SXRlbXMiLCJpbWdVcmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW51Iiwic2Nyb2xsWSIsIm1lbnVDbGFzc0RlbCIsIm5hdiIsIm1lbnVDb2xvckNsYXNzIiwicGFyZW50RWxlbWVudCIsIm1lbnVDbGFzc0FkZCIsInRvZ2dsZXIiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRUYXJnZXQiLCJ0b2dnbGUiLCJjb250YWlucyIsInNjZW5lIiwicGFyYWxsYXhJbnN0YW5jZSIsIlBhcmFsbGF4Iiwic2NlbmVNb3VudGFpbnMiLCJwYXJhbGxheEluc3RhbmNlTW91bnRhaW5zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBTUE7QUFFRSxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUE0QjtBQUM1QjtBQUNBLGVBRjRCLENBRzVCOztBQUNBLE1BQUssSUFBTCxFQUFpRDtBQUMvQztBQUNBQyx3Q0FBUUQsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0QsR0FIRCxNQUdPLEVBTU47QUFFRixDQWZDLEVBZUNELE1BZkQsRUFlUyxTQUFTQyxPQUFULEdBQW1CO0FBQzVCOztBQUVBLE1BQUlFLGFBQWEsR0FBSyxZQUFXO0FBQy9CLFFBQUlDLFNBQVMsR0FBR0osTUFBTSxDQUFDSyxPQUFQLENBQWVDLFNBQS9CLENBRCtCLENBRS9COztBQUNBLFFBQUtGLFNBQVMsQ0FBQ0csT0FBZixFQUF5QjtBQUN2QixhQUFPLFNBQVA7QUFDRCxLQUw4QixDQU0vQjs7O0FBQ0EsUUFBS0gsU0FBUyxDQUFDSSxlQUFmLEVBQWlDO0FBQy9CLGFBQU8saUJBQVA7QUFDRCxLQVQ4QixDQVUvQjs7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQUUsUUFBRixFQUFZLEtBQVosRUFBbUIsSUFBbkIsRUFBeUIsR0FBekIsQ0FBZjs7QUFFQSxTQUFNLElBQUlDLENBQUMsR0FBQyxDQUFaLEVBQWVBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUEwQztBQUN4QyxVQUFJRSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0MsQ0FBRCxDQUFyQjtBQUNBLFVBQUlHLE1BQU0sR0FBR0QsTUFBTSxHQUFHLGlCQUF0Qjs7QUFDQSxVQUFLUixTQUFTLENBQUVTLE1BQUYsQ0FBZCxFQUEyQjtBQUN6QixlQUFPQSxNQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBcEJtQixFQUFwQjs7QUFzQkEsU0FBTyxTQUFTTCxlQUFULENBQTBCTSxJQUExQixFQUFnQ0MsUUFBaEMsRUFBMkM7QUFDaEQsV0FBT0QsSUFBSSxDQUFFWCxhQUFGLENBQUosQ0FBdUJZLFFBQXZCLENBQVA7QUFDRCxHQUZEO0FBSUQsQ0E1Q0MsQ0FBRixDOzs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7OztBQU1BO0FBRUUsV0FBVUMsTUFBVixFQUFrQmYsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQ0E7O0FBQTJCO0FBQzNCLE1BQUssSUFBTCxFQUFpRDtBQUMvQztBQUNBQyx3Q0FBUUQsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0QsR0FIRCxNQUdPLEVBTU47QUFFRixDQWRDLEVBY0MsT0FBT0QsTUFBUCxJQUFpQixXQUFqQixHQUErQkEsTUFBL0IsR0FBd0MsSUFkekMsRUFjK0MsWUFBVztBQUU1RDs7QUFFQSxXQUFTaUIsU0FBVCxHQUFxQixDQUFFOztBQUV2QixNQUFJQyxLQUFLLEdBQUdELFNBQVMsQ0FBQ1gsU0FBdEI7O0FBRUFZLE9BQUssQ0FBQ0MsRUFBTixHQUFXLFVBQVVDLFNBQVYsRUFBcUJDLFFBQXJCLEVBQWdDO0FBQ3pDLFFBQUssQ0FBQ0QsU0FBRCxJQUFjLENBQUNDLFFBQXBCLEVBQStCO0FBQzdCO0FBQ0QsS0FId0MsQ0FJekM7OztBQUNBLFFBQUlDLE1BQU0sR0FBRyxLQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxJQUFnQixFQUE1QyxDQUx5QyxDQU16Qzs7QUFDQSxRQUFJQyxTQUFTLEdBQUdGLE1BQU0sQ0FBRUYsU0FBRixDQUFOLEdBQXNCRSxNQUFNLENBQUVGLFNBQUYsQ0FBTixJQUF1QixFQUE3RCxDQVB5QyxDQVF6Qzs7QUFDQSxRQUFLSSxTQUFTLENBQUNDLE9BQVYsQ0FBbUJKLFFBQW5CLEtBQWlDLENBQUMsQ0FBdkMsRUFBMkM7QUFDekNHLGVBQVMsQ0FBQ0UsSUFBVixDQUFnQkwsUUFBaEI7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQWREOztBQWdCQUgsT0FBSyxDQUFDUyxJQUFOLEdBQWEsVUFBVVAsU0FBVixFQUFxQkMsUUFBckIsRUFBZ0M7QUFDM0MsUUFBSyxDQUFDRCxTQUFELElBQWMsQ0FBQ0MsUUFBcEIsRUFBK0I7QUFDN0I7QUFDRCxLQUgwQyxDQUkzQzs7O0FBQ0EsU0FBS0YsRUFBTCxDQUFTQyxTQUFULEVBQW9CQyxRQUFwQixFQUwyQyxDQU0zQztBQUNBOztBQUNBLFFBQUlPLFVBQVUsR0FBRyxLQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsSUFBb0IsRUFBeEQsQ0FSMkMsQ0FTM0M7O0FBQ0EsUUFBSUMsYUFBYSxHQUFHRixVQUFVLENBQUVSLFNBQUYsQ0FBVixHQUEwQlEsVUFBVSxDQUFFUixTQUFGLENBQVYsSUFBMkIsRUFBekUsQ0FWMkMsQ0FXM0M7O0FBQ0FVLGlCQUFhLENBQUVULFFBQUYsQ0FBYixHQUE0QixJQUE1QjtBQUVBLFdBQU8sSUFBUDtBQUNELEdBZkQ7O0FBaUJBSCxPQUFLLENBQUNhLEdBQU4sR0FBWSxVQUFVWCxTQUFWLEVBQXFCQyxRQUFyQixFQUFnQztBQUMxQyxRQUFJRyxTQUFTLEdBQUcsS0FBS0QsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWNILFNBQWQsQ0FBaEM7O0FBQ0EsUUFBSyxDQUFDSSxTQUFELElBQWMsQ0FBQ0EsU0FBUyxDQUFDYixNQUE5QixFQUF1QztBQUNyQztBQUNEOztBQUNELFFBQUlxQixLQUFLLEdBQUdSLFNBQVMsQ0FBQ0MsT0FBVixDQUFtQkosUUFBbkIsQ0FBWjs7QUFDQSxRQUFLVyxLQUFLLElBQUksQ0FBQyxDQUFmLEVBQW1CO0FBQ2pCUixlQUFTLENBQUNTLE1BQVYsQ0FBa0JELEtBQWxCLEVBQXlCLENBQXpCO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0FYRDs7QUFhQWQsT0FBSyxDQUFDZ0IsU0FBTixHQUFrQixVQUFVZCxTQUFWLEVBQXFCZSxJQUFyQixFQUE0QjtBQUM1QyxRQUFJWCxTQUFTLEdBQUcsS0FBS0QsT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWNILFNBQWQsQ0FBaEM7O0FBQ0EsUUFBSyxDQUFDSSxTQUFELElBQWMsQ0FBQ0EsU0FBUyxDQUFDYixNQUE5QixFQUF1QztBQUNyQztBQUNELEtBSjJDLENBSzVDOzs7QUFDQWEsYUFBUyxHQUFHQSxTQUFTLENBQUNZLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUNBRCxRQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmLENBUDRDLENBUTVDOztBQUNBLFFBQUlMLGFBQWEsR0FBRyxLQUFLRCxXQUFMLElBQW9CLEtBQUtBLFdBQUwsQ0FBa0JULFNBQWxCLENBQXhDOztBQUVBLFNBQU0sSUFBSVYsQ0FBQyxHQUFDLENBQVosRUFBZUEsQ0FBQyxHQUFHYyxTQUFTLENBQUNiLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTJDO0FBQ3pDLFVBQUlXLFFBQVEsR0FBR0csU0FBUyxDQUFDZCxDQUFELENBQXhCO0FBQ0EsVUFBSTJCLE1BQU0sR0FBR1AsYUFBYSxJQUFJQSxhQUFhLENBQUVULFFBQUYsQ0FBM0M7O0FBQ0EsVUFBS2dCLE1BQUwsRUFBYztBQUNaO0FBQ0E7QUFDQSxhQUFLTixHQUFMLENBQVVYLFNBQVYsRUFBcUJDLFFBQXJCLEVBSFksQ0FJWjs7QUFDQSxlQUFPUyxhQUFhLENBQUVULFFBQUYsQ0FBcEI7QUFDRCxPQVR3QyxDQVV6Qzs7O0FBQ0FBLGNBQVEsQ0FBQ2lCLEtBQVQsQ0FBZ0IsSUFBaEIsRUFBc0JILElBQXRCO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0ExQkQ7O0FBNEJBakIsT0FBSyxDQUFDcUIsTUFBTixHQUFlLFlBQVc7QUFDeEIsV0FBTyxLQUFLaEIsT0FBWjtBQUNBLFdBQU8sS0FBS00sV0FBWjtBQUNELEdBSEQ7O0FBS0EsU0FBT1osU0FBUDtBQUVDLENBdkdDLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ1JBOzs7OztBQUtBO0FBRUUsV0FBVWpCLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBOztBQUEwQjtBQUUxQixNQUFLLElBQUwsRUFBaUQ7QUFDL0M7QUFDQUMscUNBQVEsQ0FDTixxSUFETSxDQUFGLG1DQUVILFVBQVVNLGVBQVYsRUFBNEI7QUFDN0IsYUFBT1AsT0FBTyxDQUFFRCxNQUFGLEVBQVVRLGVBQVYsQ0FBZDtBQUNELEtBSks7QUFBQSxvR0FBTjtBQUtELEdBUEQsTUFPTyxFQVlOO0FBRUYsQ0F6QkMsRUF5QkNSLE1BekJELEVBeUJTLFNBQVNDLE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCUSxlQUExQixFQUE0QztBQUV2RDs7QUFFQSxNQUFJZ0MsS0FBSyxHQUFHLEVBQVosQ0FKdUQsQ0FNdkQ7QUFFQTs7QUFDQUEsT0FBSyxDQUFDQyxNQUFOLEdBQWUsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWlCO0FBQzlCLFNBQU0sSUFBSUMsSUFBVixJQUFrQkQsQ0FBbEIsRUFBc0I7QUFDcEJELE9BQUMsQ0FBRUUsSUFBRixDQUFELEdBQVlELENBQUMsQ0FBRUMsSUFBRixDQUFiO0FBQ0Q7O0FBQ0QsV0FBT0YsQ0FBUDtBQUNELEdBTEQsQ0FUdUQsQ0FnQnZEOzs7QUFFQUYsT0FBSyxDQUFDSyxNQUFOLEdBQWUsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQXFCO0FBQ2xDLFdBQU8sQ0FBSUQsR0FBRyxHQUFHQyxHQUFSLEdBQWdCQSxHQUFsQixJQUEwQkEsR0FBakM7QUFDRCxHQUZELENBbEJ1RCxDQXNCdkQ7OztBQUVBLE1BQUlDLFVBQVUsR0FBR0MsS0FBSyxDQUFDM0MsU0FBTixDQUFnQjhCLEtBQWpDLENBeEJ1RCxDQTBCdkQ7O0FBQ0FJLE9BQUssQ0FBQ1UsU0FBTixHQUFrQixVQUFVQyxHQUFWLEVBQWdCO0FBQ2hDLFFBQUtGLEtBQUssQ0FBQ0csT0FBTixDQUFlRCxHQUFmLENBQUwsRUFBNEI7QUFDMUI7QUFDQSxhQUFPQSxHQUFQO0FBQ0QsS0FKK0IsQ0FLaEM7OztBQUNBLFFBQUtBLEdBQUcsS0FBSyxJQUFSLElBQWdCQSxHQUFHLEtBQUtFLFNBQTdCLEVBQXlDO0FBQ3ZDLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQUlDLFdBQVcsR0FBRyxRQUFPSCxHQUFQLEtBQWMsUUFBZCxJQUEwQixPQUFPQSxHQUFHLENBQUN4QyxNQUFYLElBQXFCLFFBQWpFOztBQUNBLFFBQUsyQyxXQUFMLEVBQW1CO0FBQ2pCO0FBQ0EsYUFBT04sVUFBVSxDQUFDTyxJQUFYLENBQWlCSixHQUFqQixDQUFQO0FBQ0QsS0FkK0IsQ0FnQmhDOzs7QUFDQSxXQUFPLENBQUVBLEdBQUYsQ0FBUDtBQUNELEdBbEJELENBM0J1RCxDQStDdkQ7OztBQUVBWCxPQUFLLENBQUNnQixVQUFOLEdBQW1CLFVBQVVDLEdBQVYsRUFBZU4sR0FBZixFQUFxQjtBQUN0QyxRQUFJbkIsS0FBSyxHQUFHeUIsR0FBRyxDQUFDaEMsT0FBSixDQUFhMEIsR0FBYixDQUFaOztBQUNBLFFBQUtuQixLQUFLLElBQUksQ0FBQyxDQUFmLEVBQW1CO0FBQ2pCeUIsU0FBRyxDQUFDeEIsTUFBSixDQUFZRCxLQUFaLEVBQW1CLENBQW5CO0FBQ0Q7QUFDRixHQUxELENBakR1RCxDQXdEdkQ7OztBQUVBUSxPQUFLLENBQUNrQixTQUFOLEdBQWtCLFVBQVU1QyxJQUFWLEVBQWdCQyxRQUFoQixFQUEyQjtBQUMzQyxXQUFRRCxJQUFJLENBQUM2QyxVQUFMLElBQW1CN0MsSUFBSSxJQUFJOEMsUUFBUSxDQUFDQyxJQUE1QyxFQUFtRDtBQUNqRC9DLFVBQUksR0FBR0EsSUFBSSxDQUFDNkMsVUFBWjs7QUFDQSxVQUFLbkQsZUFBZSxDQUFFTSxJQUFGLEVBQVFDLFFBQVIsQ0FBcEIsRUFBeUM7QUFDdkMsZUFBT0QsSUFBUDtBQUNEO0FBQ0Y7QUFDRixHQVBELENBMUR1RCxDQW1FdkQ7QUFFQTs7O0FBQ0EwQixPQUFLLENBQUNzQixlQUFOLEdBQXdCLFVBQVVoRCxJQUFWLEVBQWlCO0FBQ3ZDLFFBQUssT0FBT0EsSUFBUCxJQUFlLFFBQXBCLEVBQStCO0FBQzdCLGFBQU84QyxRQUFRLENBQUNHLGFBQVQsQ0FBd0JqRCxJQUF4QixDQUFQO0FBQ0Q7O0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBTEQsQ0F0RXVELENBNkV2RDtBQUVBOzs7QUFDQTBCLE9BQUssQ0FBQ3dCLFdBQU4sR0FBb0IsVUFBVUMsS0FBVixFQUFrQjtBQUNwQyxRQUFJcEQsTUFBTSxHQUFHLE9BQU9vRCxLQUFLLENBQUNDLElBQTFCOztBQUNBLFFBQUssS0FBTXJELE1BQU4sQ0FBTCxFQUFzQjtBQUNwQixXQUFNQSxNQUFOLEVBQWdCb0QsS0FBaEI7QUFDRDtBQUNGLEdBTEQsQ0FoRnVELENBdUZ2RDs7O0FBRUF6QixPQUFLLENBQUMyQixrQkFBTixHQUEyQixVQUFVQyxLQUFWLEVBQWlCckQsUUFBakIsRUFBNEI7QUFDckQ7QUFDQXFELFNBQUssR0FBRzVCLEtBQUssQ0FBQ1UsU0FBTixDQUFpQmtCLEtBQWpCLENBQVI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUVBRCxTQUFLLENBQUNFLE9BQU4sQ0FBZSxVQUFVeEQsSUFBVixFQUFpQjtBQUM5QjtBQUNBLFVBQUssRUFBR0EsSUFBSSxZQUFZeUQsV0FBbkIsQ0FBTCxFQUF3QztBQUN0QztBQUNELE9BSjZCLENBSzlCOzs7QUFDQSxVQUFLLENBQUN4RCxRQUFOLEVBQWlCO0FBQ2ZzRCxlQUFPLENBQUMzQyxJQUFSLENBQWNaLElBQWQ7QUFDQTtBQUNELE9BVDZCLENBVTlCO0FBQ0E7OztBQUNBLFVBQUtOLGVBQWUsQ0FBRU0sSUFBRixFQUFRQyxRQUFSLENBQXBCLEVBQXlDO0FBQ3ZDc0QsZUFBTyxDQUFDM0MsSUFBUixDQUFjWixJQUFkO0FBQ0QsT0FkNkIsQ0FlOUI7OztBQUNBLFVBQUkwRCxVQUFVLEdBQUcxRCxJQUFJLENBQUMyRCxnQkFBTCxDQUF1QjFELFFBQXZCLENBQWpCLENBaEI4QixDQWlCOUI7O0FBQ0EsV0FBTSxJQUFJTCxDQUFDLEdBQUMsQ0FBWixFQUFlQSxDQUFDLEdBQUc4RCxVQUFVLENBQUM3RCxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUE0QztBQUMxQzJELGVBQU8sQ0FBQzNDLElBQVIsQ0FBYzhDLFVBQVUsQ0FBQzlELENBQUQsQ0FBeEI7QUFDRDtBQUNGLEtBckJEO0FBdUJBLFdBQU8yRCxPQUFQO0FBQ0QsR0E3QkQsQ0F6RnVELENBd0h2RDs7O0FBRUE3QixPQUFLLENBQUNrQyxjQUFOLEdBQXVCLFVBQVVDLE1BQVYsRUFBa0JDLFVBQWxCLEVBQThCQyxTQUE5QixFQUEwQztBQUMvREEsYUFBUyxHQUFHQSxTQUFTLElBQUksR0FBekIsQ0FEK0QsQ0FFL0Q7O0FBQ0EsUUFBSWhFLE1BQU0sR0FBRzhELE1BQU0sQ0FBQ3JFLFNBQVAsQ0FBa0JzRSxVQUFsQixDQUFiO0FBQ0EsUUFBSUUsV0FBVyxHQUFHRixVQUFVLEdBQUcsU0FBL0I7O0FBRUFELFVBQU0sQ0FBQ3JFLFNBQVAsQ0FBa0JzRSxVQUFsQixJQUFpQyxZQUFXO0FBQzFDLFVBQUlHLE9BQU8sR0FBRyxLQUFNRCxXQUFOLENBQWQ7QUFDQUUsa0JBQVksQ0FBRUQsT0FBRixDQUFaO0FBRUEsVUFBSTVDLElBQUksR0FBRzhDLFNBQVg7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsV0FBTUosV0FBTixJQUFzQkssVUFBVSxDQUFFLFlBQVc7QUFDM0N0RSxjQUFNLENBQUN5QixLQUFQLENBQWM0QyxLQUFkLEVBQXFCL0MsSUFBckI7QUFDQSxlQUFPK0MsS0FBSyxDQUFFSixXQUFGLENBQVo7QUFDRCxPQUgrQixFQUc3QkQsU0FINkIsQ0FBaEM7QUFJRCxLQVZEO0FBV0QsR0FqQkQsQ0ExSHVELENBNkl2RDs7O0FBRUFyQyxPQUFLLENBQUM0QyxRQUFOLEdBQWlCLFVBQVVDLFFBQVYsRUFBcUI7QUFDcEMsUUFBSUMsVUFBVSxHQUFHMUIsUUFBUSxDQUFDMEIsVUFBMUI7O0FBQ0EsUUFBS0EsVUFBVSxJQUFJLFVBQWQsSUFBNEJBLFVBQVUsSUFBSSxhQUEvQyxFQUErRDtBQUM3RDtBQUNBSCxnQkFBVSxDQUFFRSxRQUFGLENBQVY7QUFDRCxLQUhELE1BR087QUFDTHpCLGNBQVEsQ0FBQzJCLGdCQUFULENBQTJCLGtCQUEzQixFQUErQ0YsUUFBL0M7QUFDRDtBQUNGLEdBUkQsQ0EvSXVELENBeUp2RDtBQUVBOzs7QUFDQTdDLE9BQUssQ0FBQ2dELFFBQU4sR0FBaUIsVUFBVUMsR0FBVixFQUFnQjtBQUMvQixXQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBYSxhQUFiLEVBQTRCLFVBQVVDLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixFQUEwQjtBQUMzRCxhQUFPRCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQUFsQjtBQUNELEtBRk0sRUFFSkMsV0FGSSxFQUFQO0FBR0QsR0FKRDs7QUFNQSxNQUFJQyxPQUFPLEdBQUcvRixNQUFNLENBQUMrRixPQUFyQjtBQUNBOzs7Ozs7QUFLQXZELE9BQUssQ0FBQ3dELFFBQU4sR0FBaUIsVUFBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBbUM7QUFDbEQxRCxTQUFLLENBQUM0QyxRQUFOLENBQWdCLFlBQVc7QUFDekIsVUFBSWUsZUFBZSxHQUFHM0QsS0FBSyxDQUFDZ0QsUUFBTixDQUFnQlUsU0FBaEIsQ0FBdEI7QUFDQSxVQUFJRSxRQUFRLEdBQUcsVUFBVUQsZUFBekI7QUFDQSxVQUFJRSxhQUFhLEdBQUd6QyxRQUFRLENBQUNhLGdCQUFULENBQTJCLE1BQU0yQixRQUFOLEdBQWlCLEdBQTVDLENBQXBCO0FBQ0EsVUFBSUUsV0FBVyxHQUFHMUMsUUFBUSxDQUFDYSxnQkFBVCxDQUEyQixTQUFTMEIsZUFBcEMsQ0FBbEI7QUFDQSxVQUFJL0IsS0FBSyxHQUFHNUIsS0FBSyxDQUFDVSxTQUFOLENBQWlCbUQsYUFBakIsRUFDVEUsTUFEUyxDQUNEL0QsS0FBSyxDQUFDVSxTQUFOLENBQWlCb0QsV0FBakIsQ0FEQyxDQUFaO0FBRUEsVUFBSUUsZUFBZSxHQUFHSixRQUFRLEdBQUcsVUFBakM7QUFDQSxVQUFJSyxNQUFNLEdBQUd6RyxNQUFNLENBQUN5RyxNQUFwQjtBQUVBckMsV0FBSyxDQUFDRSxPQUFOLENBQWUsVUFBVXhELElBQVYsRUFBaUI7QUFDOUIsWUFBSTRGLElBQUksR0FBRzVGLElBQUksQ0FBQzZGLFlBQUwsQ0FBbUJQLFFBQW5CLEtBQ1R0RixJQUFJLENBQUM2RixZQUFMLENBQW1CSCxlQUFuQixDQURGO0FBRUEsWUFBSUksT0FBSjs7QUFDQSxZQUFJO0FBQ0ZBLGlCQUFPLEdBQUdGLElBQUksSUFBSUcsSUFBSSxDQUFDQyxLQUFMLENBQVlKLElBQVosQ0FBbEI7QUFDRCxTQUZELENBRUUsT0FBUUssS0FBUixFQUFnQjtBQUNoQjtBQUNBLGNBQUtoQixPQUFMLEVBQWU7QUFDYkEsbUJBQU8sQ0FBQ2dCLEtBQVIsQ0FBZSxtQkFBbUJYLFFBQW5CLEdBQThCLE1BQTlCLEdBQXVDdEYsSUFBSSxDQUFDa0csU0FBNUMsR0FDZixJQURlLEdBQ1JELEtBRFA7QUFFRDs7QUFDRDtBQUNELFNBYjZCLENBYzlCOzs7QUFDQSxZQUFJRSxRQUFRLEdBQUcsSUFBSWhCLFdBQUosQ0FBaUJuRixJQUFqQixFQUF1QjhGLE9BQXZCLENBQWYsQ0FmOEIsQ0FnQjlCOztBQUNBLFlBQUtILE1BQUwsRUFBYztBQUNaQSxnQkFBTSxDQUFDUyxJQUFQLENBQWFwRyxJQUFiLEVBQW1Cb0YsU0FBbkIsRUFBOEJlLFFBQTlCO0FBQ0Q7QUFDRixPQXBCRDtBQXNCRCxLQWhDRDtBQWlDRCxHQWxDRCxDQXhLdUQsQ0E0TXZEOzs7QUFFQSxTQUFPekUsS0FBUDtBQUVDLENBek9DLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0UsV0FBVXhDLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04sK0VBRE0sRUFFTix5RkFGTSxDQUFGLG1DQUdILFVBQVVpSCxRQUFWLEVBQW9CM0UsS0FBcEIsRUFBNEI7QUFDN0IsYUFBT3ZDLE9BQU8sQ0FBRUQsTUFBRixFQUFVbUgsUUFBVixFQUFvQjNFLEtBQXBCLENBQWQ7QUFDRCxLQUxLO0FBQUEsb0dBQU47QUFNRCxHQVJELE1BUU8sRUFjTjtBQUVGLENBM0JDLEVBMkJDeEMsTUEzQkQsRUEyQlMsU0FBU0MsT0FBVCxDQUFrQkQsTUFBbEIsRUFBMEJtSCxRQUExQixFQUFvQzNFLEtBQXBDLEVBQTRDO0FBRXZELGVBRnVELENBSXZEOztBQUNBLFdBQVM0RSxnQkFBVCxDQUEyQkMsS0FBM0IsRUFBbUM7QUFDakMsUUFBSUMsUUFBUSxHQUFHMUQsUUFBUSxDQUFDMkQsc0JBQVQsRUFBZjtBQUNBRixTQUFLLENBQUMvQyxPQUFOLENBQWUsVUFBVWtELElBQVYsRUFBaUI7QUFDOUJGLGNBQVEsQ0FBQ0csV0FBVCxDQUFzQkQsSUFBSSxDQUFDRSxPQUEzQjtBQUNELEtBRkQ7QUFHQSxXQUFPSixRQUFQO0FBQ0QsR0FYc0QsQ0FhdkQ7OztBQUVBLE1BQUlwRyxLQUFLLEdBQUdpRyxRQUFRLENBQUM3RyxTQUFyQjtBQUVBOzs7Ozs7QUFLQVksT0FBSyxDQUFDeUcsTUFBTixHQUFlLFVBQVV2RCxLQUFWLEVBQWlCcEMsS0FBakIsRUFBeUI7QUFDdEMsUUFBSXFGLEtBQUssR0FBRyxLQUFLTyxVQUFMLENBQWlCeEQsS0FBakIsQ0FBWjs7QUFDQSxRQUFLLENBQUNpRCxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDMUcsTUFBdEIsRUFBK0I7QUFDN0I7QUFDRDs7QUFDRCxRQUFJa0gsR0FBRyxHQUFHLEtBQUtSLEtBQUwsQ0FBVzFHLE1BQXJCLENBTHNDLENBTXRDOztBQUNBcUIsU0FBSyxHQUFHQSxLQUFLLEtBQUtxQixTQUFWLEdBQXNCd0UsR0FBdEIsR0FBNEI3RixLQUFwQyxDQVBzQyxDQVF0Qzs7QUFDQSxRQUFJc0YsUUFBUSxHQUFHRixnQkFBZ0IsQ0FBRUMsS0FBRixDQUEvQixDQVRzQyxDQVV0Qzs7QUFDQSxRQUFJUyxRQUFRLEdBQUc5RixLQUFLLElBQUk2RixHQUF4Qjs7QUFDQSxRQUFLQyxRQUFMLEVBQWdCO0FBQ2QsV0FBS0MsTUFBTCxDQUFZTixXQUFaLENBQXlCSCxRQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlVLGlCQUFpQixHQUFHLEtBQUtYLEtBQUwsQ0FBWXJGLEtBQVosRUFBb0IwRixPQUE1QztBQUNBLFdBQUtLLE1BQUwsQ0FBWUUsWUFBWixDQUEwQlgsUUFBMUIsRUFBb0NVLGlCQUFwQztBQUNELEtBakJxQyxDQWtCdEM7OztBQUNBLFFBQUtoRyxLQUFLLEtBQUssQ0FBZixFQUFtQjtBQUNqQjtBQUNBLFdBQUtxRixLQUFMLEdBQWFBLEtBQUssQ0FBQ2QsTUFBTixDQUFjLEtBQUtjLEtBQW5CLENBQWI7QUFDRCxLQUhELE1BR08sSUFBS1MsUUFBTCxFQUFnQjtBQUNyQjtBQUNBLFdBQUtULEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdkLE1BQVgsQ0FBbUJjLEtBQW5CLENBQWI7QUFDRCxLQUhNLE1BR0E7QUFDTDtBQUNBLFVBQUlhLFFBQVEsR0FBRyxLQUFLYixLQUFMLENBQVdwRixNQUFYLENBQW1CRCxLQUFuQixFQUEwQjZGLEdBQUcsR0FBRzdGLEtBQWhDLENBQWY7QUFDQSxXQUFLcUYsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV2QsTUFBWCxDQUFtQmMsS0FBbkIsRUFBMkJkLE1BQTNCLENBQW1DMkIsUUFBbkMsQ0FBYjtBQUNEOztBQUVELFNBQUtDLFVBQUwsQ0FBaUJkLEtBQWpCOztBQUNBLFNBQUtlLFVBQUwsQ0FBaUJwRyxLQUFqQixFQUF3QixJQUF4QjtBQUNELEdBakNEOztBQW1DQWQsT0FBSyxDQUFDbUgsTUFBTixHQUFlLFVBQVVqRSxLQUFWLEVBQWtCO0FBQy9CLFNBQUt1RCxNQUFMLENBQWF2RCxLQUFiLEVBQW9CLEtBQUtpRCxLQUFMLENBQVcxRyxNQUEvQjtBQUNELEdBRkQ7O0FBSUFPLE9BQUssQ0FBQ29ILE9BQU4sR0FBZ0IsVUFBVWxFLEtBQVYsRUFBa0I7QUFDaEMsU0FBS3VELE1BQUwsQ0FBYXZELEtBQWIsRUFBb0IsQ0FBcEI7QUFDRCxHQUZEO0FBSUE7Ozs7OztBQUlBbEQsT0FBSyxDQUFDcUgsTUFBTixHQUFlLFVBQVVuRSxLQUFWLEVBQWtCO0FBQy9CLFFBQUlpRCxLQUFLLEdBQUcsS0FBS21CLFFBQUwsQ0FBZXBFLEtBQWYsQ0FBWjs7QUFDQSxRQUFLLENBQUNpRCxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDMUcsTUFBdEIsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxRQUFJOEgsWUFBWSxHQUFHLEtBQUtwQixLQUFMLENBQVcxRyxNQUFYLEdBQW9CLENBQXZDLENBTitCLENBTy9COztBQUNBMEcsU0FBSyxDQUFDL0MsT0FBTixDQUFlLFVBQVVrRCxJQUFWLEVBQWlCO0FBQzlCQSxVQUFJLENBQUNlLE1BQUw7QUFDQSxVQUFJdkcsS0FBSyxHQUFHLEtBQUtxRixLQUFMLENBQVc1RixPQUFYLENBQW9CK0YsSUFBcEIsQ0FBWjtBQUNBaUIsa0JBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVUzRyxLQUFWLEVBQWlCeUcsWUFBakIsQ0FBZjtBQUNBakcsV0FBSyxDQUFDZ0IsVUFBTixDQUFrQixLQUFLNkQsS0FBdkIsRUFBOEJHLElBQTlCO0FBQ0QsS0FMRCxFQUtHLElBTEg7QUFPQSxTQUFLWSxVQUFMLENBQWlCSyxZQUFqQixFQUErQixJQUEvQjtBQUNELEdBaEJEO0FBa0JBOzs7Ozs7QUFJQXZILE9BQUssQ0FBQzBILGNBQU4sR0FBdUIsVUFBVTlILElBQVYsRUFBaUI7QUFDdEMsUUFBSTBHLElBQUksR0FBRyxLQUFLcUIsT0FBTCxDQUFjL0gsSUFBZCxDQUFYOztBQUNBLFFBQUssQ0FBQzBHLElBQU4sRUFBYTtBQUNYO0FBQ0Q7O0FBQ0RBLFFBQUksQ0FBQ3NCLE9BQUw7QUFFQSxRQUFJOUcsS0FBSyxHQUFHLEtBQUtxRixLQUFMLENBQVc1RixPQUFYLENBQW9CK0YsSUFBcEIsQ0FBWjtBQUNBLFNBQUtZLFVBQUwsQ0FBaUJwRyxLQUFqQjtBQUNELEdBVEQ7QUFXQTs7Ozs7O0FBSUFkLE9BQUssQ0FBQ2tILFVBQU4sR0FBbUIsVUFBVVcsZ0JBQVYsRUFBNEJDLG1CQUE1QixFQUFrRDtBQUNuRSxRQUFJQyxnQkFBZ0IsR0FBRyxLQUFLQyxlQUE1Qjs7QUFDQSxTQUFLQyxjQUFMLENBQXFCSixnQkFBckI7O0FBQ0EsU0FBS0ssa0JBQUw7O0FBQ0EsU0FBS0MsY0FBTCxHQUptRSxDQUtuRTtBQUNBOztBQUNBLFFBQUk3QixJQUFJLEdBQUcsS0FBS3FCLE9BQUwsQ0FBY0ksZ0JBQWQsQ0FBWDs7QUFDQSxRQUFLekIsSUFBTCxFQUFZO0FBQ1YsV0FBSzhCLGFBQUwsR0FBcUIsS0FBS0MsaUJBQUwsQ0FBd0IvQixJQUF4QixDQUFyQjtBQUNEOztBQUNELFNBQUs4QixhQUFMLEdBQXFCWixJQUFJLENBQUNDLEdBQUwsQ0FBVSxLQUFLYSxNQUFMLENBQVk3SSxNQUFaLEdBQXFCLENBQS9CLEVBQWtDLEtBQUsySSxhQUF2QyxDQUFyQjtBQUVBLFNBQUtwSCxTQUFMLENBQWdCLFlBQWhCLEVBQThCLENBQUU2RyxnQkFBRixDQUE5QixFQWJtRSxDQWNuRTs7QUFDQSxTQUFLVSxNQUFMLENBQWEsS0FBS0gsYUFBbEIsRUFmbUUsQ0FnQm5FOztBQUNBLFFBQUtOLG1CQUFMLEVBQTJCO0FBQ3pCLFdBQUtVLHdCQUFMO0FBQ0Q7QUFDRixHQXBCRCxDQTFHdUQsQ0FnSXZEOzs7QUFFQSxTQUFPdkMsUUFBUDtBQUVDLENBL0pDLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0UsV0FBVW5ILE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04seUZBRE0sQ0FBRixtQ0FFSCxVQUFVc0MsS0FBVixFQUFrQjtBQUNuQixhQUFPdkMsT0FBTyxDQUFFRCxNQUFGLEVBQVV3QyxLQUFWLENBQWQ7QUFDRCxLQUpLO0FBQUEsb0dBQU47QUFLRCxHQVBELE1BT08sRUFhTjtBQUVGLENBekJDLEVBeUJDeEMsTUF6QkQsRUF5QlMsU0FBU0MsT0FBVCxDQUFrQkQsTUFBbEIsRUFBMEJ3QyxLQUExQixFQUFrQztBQUU3QyxlQUY2QyxDQUk3Qzs7QUFFQSxNQUFJdEIsS0FBSyxHQUFHLEVBQVo7O0FBRUFBLE9BQUssQ0FBQ3lJLGNBQU4sR0FBdUIsWUFBVztBQUNoQyxRQUFLLEtBQUtDLFdBQVYsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxTQUFLQSxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLFNBQUtDLE9BQUw7QUFDRCxHQVJEOztBQVVBNUksT0FBSyxDQUFDNEksT0FBTixHQUFnQixZQUFXO0FBQ3pCLFNBQUtDLGNBQUw7QUFDQSxTQUFLQyx1QkFBTDtBQUVBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxDQUFyQjtBQUVBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsY0FBTDtBQUNBLFNBQUtDLE1BQUwsQ0FBYUosU0FBYixFQVJ5QixDQVN6Qjs7QUFDQSxRQUFLLEtBQUtMLFdBQVYsRUFBd0I7QUFDdEIsVUFBSTFFLEtBQUssR0FBRyxJQUFaOztBQUNBb0YsMkJBQXFCLENBQUUsU0FBU0MsWUFBVCxHQUF3QjtBQUM3Q3JGLGFBQUssQ0FBQzRFLE9BQU47QUFDRCxPQUZvQixDQUFyQjtBQUdEO0FBQ0YsR0FoQkQ7O0FBa0JBNUksT0FBSyxDQUFDa0osY0FBTixHQUF1QixZQUFXO0FBQ2hDLFFBQUlGLENBQUMsR0FBRyxLQUFLQSxDQUFiLENBRGdDLENBRWhDOztBQUNBLFFBQUssS0FBS3RELE9BQUwsQ0FBYTRELFVBQWIsSUFBMkIsS0FBS25ELEtBQUwsQ0FBVzFHLE1BQVgsR0FBb0IsQ0FBcEQsRUFBd0Q7QUFDdER1SixPQUFDLEdBQUcxSCxLQUFLLENBQUNLLE1BQU4sQ0FBY3FILENBQWQsRUFBaUIsS0FBS08sY0FBdEIsQ0FBSjtBQUNBUCxPQUFDLEdBQUdBLENBQUMsR0FBRyxLQUFLTyxjQUFiO0FBQ0EsV0FBS0MsY0FBTCxDQUFxQlIsQ0FBckI7QUFDRDs7QUFFRCxTQUFLUyxhQUFMLENBQW9CVCxDQUFwQixFQUF1QixLQUFLTixXQUE1QjtBQUNBLFNBQUtnQixtQkFBTDtBQUNELEdBWEQ7O0FBYUExSixPQUFLLENBQUN5SixhQUFOLEdBQXNCLFVBQVVULENBQVYsRUFBYVcsSUFBYixFQUFvQjtBQUN4Q1gsS0FBQyxJQUFJLEtBQUtZLGNBQVYsQ0FEd0MsQ0FFeEM7O0FBQ0FaLEtBQUMsR0FBRyxLQUFLdEQsT0FBTCxDQUFhbUUsV0FBYixHQUEyQixDQUFDYixDQUE1QixHQUFnQ0EsQ0FBcEM7QUFDQSxRQUFJYyxVQUFVLEdBQUcsS0FBS0MsZ0JBQUwsQ0FBdUJmLENBQXZCLENBQWpCLENBSndDLENBS3hDO0FBQ0E7O0FBQ0EsU0FBS25DLE1BQUwsQ0FBWW1ELEtBQVosQ0FBa0JDLFNBQWxCLEdBQThCTixJQUFJLEdBQ2hDLGlCQUFpQkcsVUFBakIsR0FBOEIsT0FERSxHQUNRLGdCQUFnQkEsVUFBaEIsR0FBNkIsR0FEdkU7QUFFRCxHQVREOztBQVdBOUosT0FBSyxDQUFDMEosbUJBQU4sR0FBNEIsWUFBVztBQUNyQyxRQUFJUSxVQUFVLEdBQUcsS0FBSzVCLE1BQUwsQ0FBWSxDQUFaLENBQWpCOztBQUNBLFFBQUssQ0FBQzRCLFVBQU4sRUFBbUI7QUFDakI7QUFDRDs7QUFDRCxRQUFJQyxTQUFTLEdBQUcsQ0FBQyxLQUFLbkIsQ0FBTixHQUFVa0IsVUFBVSxDQUFDRSxNQUFyQztBQUNBLFFBQUlDLFFBQVEsR0FBR0YsU0FBUyxHQUFHLEtBQUtHLFdBQWhDO0FBQ0EsU0FBS0MsYUFBTCxDQUFvQixRQUFwQixFQUE4QixJQUE5QixFQUFvQyxDQUFFRixRQUFGLEVBQVlGLFNBQVosQ0FBcEM7QUFDRCxHQVJEOztBQVVBbkssT0FBSyxDQUFDd0ksd0JBQU4sR0FBaUMsWUFBVztBQUMxQyxRQUFLLENBQUMsS0FBS3JDLEtBQUwsQ0FBVzFHLE1BQWpCLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBQ0QsU0FBS3VKLENBQUwsR0FBUyxDQUFDLEtBQUt3QixhQUFMLENBQW1CSixNQUE3QjtBQUNBLFNBQUtLLFFBQUwsR0FBZ0IsQ0FBaEIsQ0FMMEMsQ0FLdkI7O0FBQ25CLFNBQUt2QixjQUFMO0FBQ0QsR0FQRDs7QUFTQWxKLE9BQUssQ0FBQytKLGdCQUFOLEdBQXlCLFVBQVVXLFFBQVYsRUFBcUI7QUFDNUMsUUFBSyxLQUFLaEYsT0FBTCxDQUFhaUYsZUFBbEIsRUFBb0M7QUFDbEM7QUFDQSxhQUFTbkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFjRixRQUFRLEdBQUcsS0FBS0csSUFBTCxDQUFVQyxVQUF2QixHQUFzQyxLQUFsRCxJQUE0RCxJQUE5RCxHQUFzRSxHQUE3RTtBQUNELEtBSEQsTUFHTztBQUNMO0FBQ0EsYUFBT3RELElBQUksQ0FBQ29ELEtBQUwsQ0FBWUYsUUFBWixJQUF5QixJQUFoQztBQUNEO0FBQ0YsR0FSRDs7QUFVQTFLLE9BQUssQ0FBQ21KLE1BQU4sR0FBZSxVQUFVSixTQUFWLEVBQXNCO0FBQ25DO0FBQ0EsUUFBSyxDQUFDLEtBQUtnQyxhQUFOLElBQXVCdkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFZLEtBQUs1QixDQUFMLEdBQVMsR0FBckIsS0FBOEJ4QixJQUFJLENBQUNvRCxLQUFMLENBQVk3QixTQUFTLEdBQUcsR0FBeEIsQ0FBMUQsRUFBMEY7QUFDeEYsV0FBS0osYUFBTDtBQUNELEtBSmtDLENBS25DOzs7QUFDQSxRQUFLLEtBQUtBLGFBQUwsR0FBcUIsQ0FBMUIsRUFBOEI7QUFDNUIsV0FBS0QsV0FBTCxHQUFtQixLQUFuQjtBQUNBLGFBQU8sS0FBS3NDLGVBQVosQ0FGNEIsQ0FHNUI7O0FBQ0EsV0FBSzlCLGNBQUw7QUFDQSxXQUFLcUIsYUFBTCxDQUFvQixRQUFwQixFQUE4QixJQUE5QixFQUFvQyxDQUFFLEtBQUtuQyxhQUFQLENBQXBDO0FBQ0Q7QUFDRixHQWJEOztBQWVBcEksT0FBSyxDQUFDd0osY0FBTixHQUF1QixVQUFVUixDQUFWLEVBQWM7QUFDbkM7QUFDQSxRQUFJaUMsU0FBUyxHQUFHLEtBQUtyQixjQUFMLEdBQXNCWixDQUF0Qzs7QUFDQSxTQUFLa0MsV0FBTCxDQUFrQixLQUFLQyxnQkFBdkIsRUFBeUNGLFNBQXpDLEVBQW9ELENBQUMsQ0FBckQsRUFIbUMsQ0FJbkM7OztBQUNBLFFBQUlHLFFBQVEsR0FBRyxLQUFLUCxJQUFMLENBQVVDLFVBQVYsSUFBeUI5QixDQUFDLEdBQUcsS0FBS08sY0FBVCxHQUEwQixLQUFLSyxjQUF4RCxDQUFmOztBQUNBLFNBQUtzQixXQUFMLENBQWtCLEtBQUtHLGVBQXZCLEVBQXdDRCxRQUF4QyxFQUFrRCxDQUFsRDtBQUNELEdBUEQ7O0FBU0FwTCxPQUFLLENBQUNrTCxXQUFOLEdBQW9CLFVBQVUvRSxLQUFWLEVBQWlCbUYsR0FBakIsRUFBc0JDLEtBQXRCLEVBQThCO0FBQ2hELFNBQU0sSUFBSS9MLENBQUMsR0FBQyxDQUFaLEVBQWVBLENBQUMsR0FBRzJHLEtBQUssQ0FBQzFHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXVDO0FBQ3JDLFVBQUk4RyxJQUFJLEdBQUdILEtBQUssQ0FBQzNHLENBQUQsQ0FBaEI7QUFDQSxVQUFJZ00sU0FBUyxHQUFHRixHQUFHLEdBQUcsQ0FBTixHQUFVQyxLQUFWLEdBQWtCLENBQWxDO0FBQ0FqRixVQUFJLENBQUNtRixTQUFMLENBQWdCRCxTQUFoQjtBQUNBRixTQUFHLElBQUloRixJQUFJLENBQUN1RSxJQUFMLENBQVVhLFVBQWpCO0FBQ0Q7QUFDRixHQVBEOztBQVNBMUwsT0FBSyxDQUFDMkwsYUFBTixHQUFzQixVQUFVeEYsS0FBVixFQUFrQjtBQUN0QyxRQUFLLENBQUNBLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUMxRyxNQUF0QixFQUErQjtBQUM3QjtBQUNEOztBQUNELFNBQU0sSUFBSUQsQ0FBQyxHQUFDLENBQVosRUFBZUEsQ0FBQyxHQUFHMkcsS0FBSyxDQUFDMUcsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBdUM7QUFDckMyRyxXQUFLLENBQUMzRyxDQUFELENBQUwsQ0FBU2lNLFNBQVQsQ0FBb0IsQ0FBcEI7QUFDRDtBQUNGLEdBUEQsQ0ExSDZDLENBbUk3Qzs7O0FBRUF6TCxPQUFLLENBQUNpSixnQkFBTixHQUF5QixZQUFXO0FBQ2xDLFNBQUtELENBQUwsSUFBVSxLQUFLeUIsUUFBZjtBQUNBLFNBQUtBLFFBQUwsSUFBaUIsS0FBS21CLGlCQUFMLEVBQWpCO0FBQ0QsR0FIRDs7QUFLQTVMLE9BQUssQ0FBQzZMLFVBQU4sR0FBbUIsVUFBVUMsS0FBVixFQUFrQjtBQUNuQyxTQUFLckIsUUFBTCxJQUFpQnFCLEtBQWpCO0FBQ0QsR0FGRDs7QUFJQTlMLE9BQUssQ0FBQzRMLGlCQUFOLEdBQTBCLFlBQVc7QUFDbkMsV0FBTyxJQUFJLEtBQUtsRyxPQUFMLENBQWMsS0FBS3NGLGVBQUwsR0FBdUIsb0JBQXZCLEdBQThDLFVBQTVELENBQVg7QUFDRCxHQUZEOztBQUlBaEwsT0FBSyxDQUFDK0wsa0JBQU4sR0FBMkIsWUFBVztBQUNwQztBQUNBLFdBQU8sS0FBSy9DLENBQUwsR0FBUyxLQUFLeUIsUUFBTCxJQUFrQixJQUFJLEtBQUttQixpQkFBTCxFQUF0QixDQUFoQjtBQUNELEdBSEQ7O0FBS0E1TCxPQUFLLENBQUM2SSxjQUFOLEdBQXVCLFlBQVc7QUFDaEMsUUFBSyxDQUFDLEtBQUttRCxXQUFOLElBQXFCLENBQUMsS0FBS2pCLGFBQWhDLEVBQWdEO0FBQzlDO0FBQ0QsS0FIK0IsQ0FJaEM7OztBQUNBLFFBQUlrQixZQUFZLEdBQUcsS0FBS0MsS0FBTCxHQUFhLEtBQUtsRCxDQUFyQztBQUNBLFFBQUltRCxTQUFTLEdBQUdGLFlBQVksR0FBRyxLQUFLeEIsUUFBcEM7QUFDQSxTQUFLb0IsVUFBTCxDQUFpQk0sU0FBakI7QUFDRCxHQVJEOztBQVVBbk0sT0FBSyxDQUFDOEksdUJBQU4sR0FBZ0MsWUFBVztBQUN6QztBQUNBLFFBQUlzRCxRQUFRLEdBQUcsS0FBS0osV0FBTCxJQUFvQixLQUFLakIsYUFBeEM7O0FBQ0EsUUFBS3FCLFFBQVEsSUFBSSxLQUFLcEIsZUFBakIsSUFBb0MsQ0FBQyxLQUFLMUMsTUFBTCxDQUFZN0ksTUFBdEQsRUFBK0Q7QUFDN0Q7QUFDRDs7QUFDRCxRQUFJNE0sUUFBUSxHQUFHLEtBQUs3QixhQUFMLENBQW1CSixNQUFuQixHQUE0QixDQUFDLENBQTdCLEdBQWlDLEtBQUtwQixDQUFyRDtBQUNBLFFBQUk4QyxLQUFLLEdBQUdPLFFBQVEsR0FBRyxLQUFLM0csT0FBTCxDQUFhNEcsa0JBQXBDO0FBQ0EsU0FBS1QsVUFBTCxDQUFpQkMsS0FBakI7QUFDRCxHQVREOztBQVdBLFNBQU85TCxLQUFQO0FBRUMsQ0F2TUMsQ0FBRixDOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDRSxXQUFVbEIsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQ0E7QUFDQSxNQUFLLElBQUwsRUFBaUQ7QUFDL0M7QUFDQUMscUNBQVEsQ0FDTixtRkFETSxDQUFGLG1DQUVILFVBQVU0SSxPQUFWLEVBQW9CO0FBQ3JCLGFBQU83SSxPQUFPLENBQUVELE1BQUYsRUFBVThJLE9BQVYsQ0FBZDtBQUNELEtBSks7QUFBQSxvR0FBTjtBQUtELEdBUEQsTUFPTyxFQWFOO0FBRUYsQ0F6QkMsRUF5QkM5SSxNQXpCRCxFQXlCUyxTQUFTQyxPQUFULENBQWtCRCxNQUFsQixFQUEwQjhJLE9BQTFCLEVBQW9DO0FBRS9DOztBQUVBLFdBQVMyRSxJQUFULENBQWUzTSxJQUFmLEVBQXFCNE0sTUFBckIsRUFBOEI7QUFDNUIsU0FBS2hHLE9BQUwsR0FBZTVHLElBQWY7QUFDQSxTQUFLNE0sTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0MsTUFBTDtBQUNEOztBQUVELE1BQUl6TSxLQUFLLEdBQUd1TSxJQUFJLENBQUNuTixTQUFqQjs7QUFFQVksT0FBSyxDQUFDeU0sTUFBTixHQUFlLFlBQVc7QUFDeEIsU0FBS2pHLE9BQUwsQ0FBYXdELEtBQWIsQ0FBbUJVLFFBQW5CLEdBQThCLFVBQTlCO0FBQ0EsU0FBS2xFLE9BQUwsQ0FBYWtHLFlBQWIsQ0FBMkIsYUFBM0IsRUFBMEMsTUFBMUM7QUFDQSxTQUFLMUQsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLdUMsS0FBTCxHQUFhLENBQWI7QUFDRCxHQUxEOztBQU9BdkwsT0FBSyxDQUFDMk0sT0FBTixHQUFnQixZQUFXO0FBQ3pCO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtwRyxPQUFMLENBQWF3RCxLQUFiLENBQW1CVSxRQUFuQixHQUE4QixFQUE5QjtBQUNBLFFBQUltQyxJQUFJLEdBQUcsS0FBS0wsTUFBTCxDQUFZTSxVQUF2QjtBQUNBLFNBQUt0RyxPQUFMLENBQWF3RCxLQUFiLENBQW9CNkMsSUFBcEIsSUFBNkIsRUFBN0I7QUFDRCxHQU5EOztBQVFBN00sT0FBSyxDQUFDNEgsT0FBTixHQUFnQixZQUFXO0FBQ3pCLFNBQUtpRCxJQUFMLEdBQVlqRCxPQUFPLENBQUUsS0FBS3BCLE9BQVAsQ0FBbkI7QUFDRCxHQUZEOztBQUlBeEcsT0FBSyxDQUFDK00sV0FBTixHQUFvQixVQUFVL0QsQ0FBVixFQUFjO0FBQ2hDLFNBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtnRSxZQUFMO0FBQ0EsU0FBS0MsY0FBTCxDQUFxQmpFLENBQXJCO0FBQ0QsR0FKRCxDQWhDK0MsQ0FzQy9DOzs7QUFDQWhKLE9BQUssQ0FBQ2dOLFlBQU4sR0FBcUJoTixLQUFLLENBQUNrTixnQkFBTixHQUF5QixZQUFXO0FBQ3ZELFFBQUlDLGNBQWMsR0FBRyxLQUFLWCxNQUFMLENBQVlNLFVBQVosSUFBMEIsTUFBMUIsR0FBbUMsWUFBbkMsR0FBa0QsYUFBdkU7QUFDQSxTQUFLMUMsTUFBTCxHQUFjLEtBQUtwQixDQUFMLEdBQVMsS0FBSzZCLElBQUwsQ0FBV3NDLGNBQVgsQ0FBVCxHQUNaLEtBQUt0QyxJQUFMLENBQVV1QyxLQUFWLEdBQWtCLEtBQUtaLE1BQUwsQ0FBWWEsU0FEaEM7QUFFRCxHQUpEOztBQU1Bck4sT0FBSyxDQUFDaU4sY0FBTixHQUF1QixVQUFVakUsQ0FBVixFQUFjO0FBQ25DO0FBQ0EsUUFBSTZELElBQUksR0FBRyxLQUFLTCxNQUFMLENBQVlNLFVBQXZCO0FBQ0EsU0FBS3RHLE9BQUwsQ0FBYXdELEtBQWIsQ0FBb0I2QyxJQUFwQixJQUE2QixLQUFLTCxNQUFMLENBQVl6QyxnQkFBWixDQUE4QmYsQ0FBOUIsQ0FBN0I7QUFDRCxHQUpEOztBQU1BaEosT0FBSyxDQUFDdUksTUFBTixHQUFlLFlBQVc7QUFDeEIsU0FBSy9CLE9BQUwsQ0FBYThHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGFBQTNCO0FBQ0EsU0FBSy9HLE9BQUwsQ0FBYWdILGVBQWIsQ0FBNkIsYUFBN0I7QUFDRCxHQUhEOztBQUtBeE4sT0FBSyxDQUFDNE0sUUFBTixHQUFpQixZQUFXO0FBQzFCLFNBQUtwRyxPQUFMLENBQWE4RyxTQUFiLENBQXVCakcsTUFBdkIsQ0FBOEIsYUFBOUI7QUFDQSxTQUFLYixPQUFMLENBQWFrRyxZQUFiLENBQTJCLGFBQTNCLEVBQTBDLE1BQTFDO0FBQ0QsR0FIRDtBQUtBOzs7OztBQUdBMU0sT0FBSyxDQUFDeUwsU0FBTixHQUFrQixVQUFVRixLQUFWLEVBQWtCO0FBQ2xDLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUswQixjQUFMLENBQXFCLEtBQUtqRSxDQUFMLEdBQVMsS0FBS3dELE1BQUwsQ0FBWWpELGNBQVosR0FBNkJnQyxLQUEzRDtBQUNELEdBSEQ7O0FBS0F2TCxPQUFLLENBQUNxSCxNQUFOLEdBQWUsWUFBVztBQUN4QixTQUFLYixPQUFMLENBQWEvRCxVQUFiLENBQXdCZ0wsV0FBeEIsQ0FBcUMsS0FBS2pILE9BQTFDO0FBQ0QsR0FGRDs7QUFJQSxTQUFPK0YsSUFBUDtBQUVDLENBcEdDLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0UsV0FBVXpOLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04sK0VBRE0sRUFFTiwyRkFGTSxFQUdOLHlGQUhNLENBQUYsbUNBSUgsVUFBVWlILFFBQVYsRUFBb0J5SCxVQUFwQixFQUFnQ3BNLEtBQWhDLEVBQXdDO0FBQ3pDLGFBQU92QyxPQUFPLENBQUVELE1BQUYsRUFBVW1ILFFBQVYsRUFBb0J5SCxVQUFwQixFQUFnQ3BNLEtBQWhDLENBQWQ7QUFDRCxLQU5LO0FBQUEsb0dBQU47QUFPRCxHQVRELE1BU08sRUFnQk47QUFFRixDQTlCQyxFQThCQ3hDLE1BOUJELEVBOEJTLFNBQVNDLE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCbUgsUUFBMUIsRUFBb0N5SCxVQUFwQyxFQUFnRHBNLEtBQWhELEVBQXdEO0FBRW5FLGVBRm1FLENBSW5FOztBQUVBQSxPQUFLLENBQUNDLE1BQU4sQ0FBYzBFLFFBQVEsQ0FBQzBILFFBQXZCLEVBQWlDO0FBQy9CQyxhQUFTLEVBQUUsSUFEb0I7QUFFL0JDLGlCQUFhLEVBQUU7QUFGZ0IsR0FBakMsRUFObUUsQ0FXbkU7O0FBRUE1SCxVQUFRLENBQUM2SCxhQUFULENBQXVCdE4sSUFBdkIsQ0FBNEIsYUFBNUIsRUFibUUsQ0FlbkU7O0FBRUEsTUFBSVIsS0FBSyxHQUFHaUcsUUFBUSxDQUFDN0csU0FBckI7QUFDQWtDLE9BQUssQ0FBQ0MsTUFBTixDQUFjdkIsS0FBZCxFQUFxQjBOLFVBQVUsQ0FBQ3RPLFNBQWhDO0FBQ0FZLE9BQUssQ0FBQytOLGlCQUFOLEdBQTBCLE9BQTFCLENBbkJtRSxDQXFCbkU7O0FBRUEsTUFBSUMsT0FBTyxHQUFHLGlCQUFpQnRMLFFBQS9CO0FBQ0EsTUFBSXVMLHlCQUF5QixHQUFHLEtBQWhDOztBQUVBak8sT0FBSyxDQUFDa08sV0FBTixHQUFvQixZQUFXO0FBQzdCLFNBQUtqTyxFQUFMLENBQVMsVUFBVCxFQUFxQixLQUFLa08sY0FBMUI7QUFDQSxTQUFLbE8sRUFBTCxDQUFTLFVBQVQsRUFBcUIsS0FBS21PLGFBQTFCO0FBQ0EsU0FBS25PLEVBQUwsQ0FBUyxZQUFULEVBQXVCLEtBQUtvTyxnQkFBNUI7QUFDQSxTQUFLcE8sRUFBTCxDQUFTLFlBQVQsRUFBdUIsS0FBS3FPLGVBQTVCLEVBSjZCLENBSzdCO0FBQ0E7QUFDQTs7QUFDQSxRQUFLTixPQUFPLElBQUksQ0FBQ0MseUJBQWpCLEVBQTZDO0FBQzNDblAsWUFBTSxDQUFDdUYsZ0JBQVAsQ0FBeUIsV0FBekIsRUFBc0MsWUFBVyxDQUFFLENBQW5EO0FBQ0E0SiwrQkFBeUIsR0FBRyxJQUE1QjtBQUNEO0FBQ0YsR0FaRDs7QUFjQWpPLE9BQUssQ0FBQ21PLGNBQU4sR0FBdUIsWUFBVztBQUNoQyxTQUFLSSxPQUFMLEdBQWUsQ0FBRSxLQUFLQyxRQUFQLENBQWY7QUFDQSxTQUFLQyxXQUFMO0FBQ0EsU0FBS0gsZUFBTDtBQUNELEdBSkQ7O0FBTUF0TyxPQUFLLENBQUNxTyxnQkFBTixHQUF5QixZQUFXO0FBQ2xDLFNBQUtLLGFBQUw7QUFDQSxTQUFLbEksT0FBTCxDQUFhOEcsU0FBYixDQUF1QmpHLE1BQXZCLENBQThCLGNBQTlCO0FBQ0QsR0FIRDs7QUFLQXJILE9BQUssQ0FBQ3NPLGVBQU4sR0FBd0IsWUFBVztBQUNqQztBQUNBLFFBQUssS0FBSzVJLE9BQUwsQ0FBYWtJLFNBQWIsSUFBMEIsSUFBL0IsRUFBc0M7QUFDcEMsV0FBSzVCLFdBQUwsR0FBbUIsS0FBSzFELE1BQUwsQ0FBWTdJLE1BQVosR0FBcUIsQ0FBeEM7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLdU0sV0FBTCxHQUFtQixLQUFLdEcsT0FBTCxDQUFha0ksU0FBaEM7QUFDRDs7QUFDRCxRQUFLLEtBQUs1QixXQUFWLEVBQXdCO0FBQ3RCLFdBQUt4RixPQUFMLENBQWE4RyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixjQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUsvRyxPQUFMLENBQWE4RyxTQUFiLENBQXVCakcsTUFBdkIsQ0FBOEIsY0FBOUI7QUFDRDtBQUNGLEdBWkQsQ0FuRG1FLENBaUVuRTs7O0FBQ0FySCxPQUFLLENBQUMyTyxRQUFOLEdBQWlCLFlBQVc7QUFDMUIsU0FBS2pKLE9BQUwsQ0FBYWtJLFNBQWIsR0FBeUIsSUFBekI7QUFDQSxTQUFLVSxlQUFMO0FBQ0QsR0FIRDs7QUFLQXRPLE9BQUssQ0FBQzRPLFVBQU4sR0FBbUIsWUFBVztBQUM1QixTQUFLbEosT0FBTCxDQUFha0ksU0FBYixHQUF5QixLQUF6QjtBQUNBLFNBQUtVLGVBQUw7QUFDRCxHQUhEOztBQUtBdE8sT0FBSyxDQUFDb08sYUFBTixHQUFzQixZQUFXO0FBQy9CLFdBQU8sS0FBS3BELGVBQVo7QUFDRCxHQUZELENBNUVtRSxDQWdGbkU7OztBQUVBaEwsT0FBSyxDQUFDNk8sV0FBTixHQUFvQixVQUFVOUwsS0FBVixFQUFpQitMLE9BQWpCLEVBQTJCO0FBQzdDLFFBQUssQ0FBQyxLQUFLOUMsV0FBWCxFQUF5QjtBQUN2QixXQUFLK0MsbUJBQUwsQ0FBMEJoTSxLQUExQixFQUFpQytMLE9BQWpDOztBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUUsTUFBTSxHQUFHLEtBQUtDLGVBQUwsQ0FBc0JsTSxLQUF0QixDQUFiOztBQUNBLFFBQUssQ0FBQ2lNLE1BQU4sRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsU0FBS0UsMEJBQUwsQ0FBaUNuTSxLQUFqQzs7QUFDQSxTQUFLb00sZ0JBQUwsQ0FBdUJwTSxLQUF2QixFQVg2QyxDQVk3Qzs7QUFDQSxRQUFLTCxRQUFRLENBQUMwTSxhQUFULElBQTBCLEtBQUs1SSxPQUFwQyxFQUE4QztBQUM1QztBQUNBLFdBQUs2SSxlQUFMO0FBQ0QsS0FoQjRDLENBa0I3Qzs7O0FBQ0EsU0FBS25ELEtBQUwsR0FBYSxLQUFLbEQsQ0FBbEI7QUFDQSxTQUFLd0YsUUFBTCxDQUFjbEIsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsaUJBQTVCLEVBcEI2QyxDQXFCN0M7O0FBQ0EsU0FBSytCLGlCQUFMLEdBQXlCQyxpQkFBaUIsRUFBMUM7QUFDQXpRLFVBQU0sQ0FBQ3VGLGdCQUFQLENBQXlCLFFBQXpCLEVBQW1DLElBQW5DOztBQUVBLFNBQUswSyxtQkFBTCxDQUEwQmhNLEtBQTFCLEVBQWlDK0wsT0FBakM7QUFDRCxHQTFCRCxDQWxGbUUsQ0E4R25FOzs7QUFDQTlPLE9BQUssQ0FBQytPLG1CQUFOLEdBQTRCLFVBQVVoTSxLQUFWLEVBQWlCK0wsT0FBakIsRUFBMkI7QUFDckQ7QUFDQTtBQUNBLFNBQUtVLGtCQUFMLEdBQTBCO0FBQ3hCQyxXQUFLLEVBQUVYLE9BQU8sQ0FBQ1csS0FEUztBQUV4QkMsV0FBSyxFQUFFWixPQUFPLENBQUNZO0FBRlMsS0FBMUIsQ0FIcUQsQ0FPckQ7O0FBQ0EsU0FBS0Msb0JBQUwsQ0FBMkI1TSxLQUEzQjs7QUFDQSxTQUFLd0gsYUFBTCxDQUFvQixhQUFwQixFQUFtQ3hILEtBQW5DLEVBQTBDLENBQUUrTCxPQUFGLENBQTFDO0FBQ0QsR0FWRDs7QUFZQSxNQUFJYyxVQUFVLEdBQUc7QUFDZkMsU0FBSyxFQUFFLElBRFE7QUFFZkMsWUFBUSxFQUFFLElBRks7QUFHZkMsVUFBTSxFQUFFO0FBSE8sR0FBakI7O0FBTUEvUCxPQUFLLENBQUNtUCxnQkFBTixHQUF5QixVQUFVcE0sS0FBVixFQUFrQjtBQUN6QyxRQUFJaU4sV0FBVyxHQUFHSixVQUFVLENBQUU3TSxLQUFLLENBQUNxSCxNQUFOLENBQWE2RixRQUFmLENBQTVCOztBQUNBLFFBQUssQ0FBQ0QsV0FBTixFQUFvQjtBQUNsQixXQUFLRSxLQUFMO0FBQ0Q7QUFDRixHQUxEOztBQU9BbFEsT0FBSyxDQUFDa1AsMEJBQU4sR0FBbUMsVUFBVW5NLEtBQVYsRUFBa0I7QUFDbkQsUUFBSW9OLFlBQVksR0FBR3BOLEtBQUssQ0FBQ0MsSUFBTixJQUFjLFlBQWpDO0FBQ0EsUUFBSW9OLGNBQWMsR0FBR3JOLEtBQUssQ0FBQ3NOLFdBQU4sSUFBcUIsT0FBMUM7QUFDQSxRQUFJTCxXQUFXLEdBQUdKLFVBQVUsQ0FBRTdNLEtBQUssQ0FBQ3FILE1BQU4sQ0FBYTZGLFFBQWYsQ0FBNUI7O0FBQ0EsUUFBSyxDQUFDRSxZQUFELElBQWlCLENBQUNDLGNBQWxCLElBQW9DLENBQUNKLFdBQTFDLEVBQXdEO0FBQ3REak4sV0FBSyxDQUFDdU4sY0FBTjtBQUNEO0FBQ0YsR0FQRCxDQXhJbUUsQ0FpSm5FOzs7QUFFQXRRLE9BQUssQ0FBQ3VRLGNBQU4sR0FBdUIsVUFBVUMsVUFBVixFQUF1QjtBQUM1QyxXQUFPaEosSUFBSSxDQUFDaUosR0FBTCxDQUFVRCxVQUFVLENBQUN4SCxDQUFyQixJQUEyQixLQUFLdEQsT0FBTCxDQUFhbUksYUFBL0M7QUFDRCxHQUZELENBbkptRSxDQXVKbkU7OztBQUVBN04sT0FBSyxDQUFDMFEsU0FBTixHQUFrQixVQUFVM04sS0FBVixFQUFpQitMLE9BQWpCLEVBQTJCO0FBQzNDLFdBQU8sS0FBSzZCLGdCQUFaO0FBQ0EsU0FBS25DLFFBQUwsQ0FBY2xCLFNBQWQsQ0FBd0JqRyxNQUF4QixDQUErQixpQkFBL0I7QUFDQSxTQUFLa0QsYUFBTCxDQUFvQixXQUFwQixFQUFpQ3hILEtBQWpDLEVBQXdDLENBQUUrTCxPQUFGLENBQXhDOztBQUNBLFNBQUs4QixjQUFMLENBQXFCN04sS0FBckIsRUFBNEIrTCxPQUE1QjtBQUNELEdBTEQ7O0FBT0E5TyxPQUFLLENBQUM2USxXQUFOLEdBQW9CLFlBQVc7QUFDN0IvUixVQUFNLENBQUNnUyxtQkFBUCxDQUE0QixRQUE1QixFQUFzQyxJQUF0QztBQUNBLFdBQU8sS0FBS3hCLGlCQUFaO0FBQ0QsR0FIRCxDQWhLbUUsQ0FxS25FOzs7QUFFQXRQLE9BQUssQ0FBQytRLFNBQU4sR0FBa0IsVUFBVWhPLEtBQVYsRUFBaUIrTCxPQUFqQixFQUEyQjtBQUMzQyxRQUFLLENBQUMsS0FBSzlDLFdBQVgsRUFBeUI7QUFDdkI7QUFDRDs7QUFDRCxTQUFLZ0YsaUJBQUwsR0FBeUIsS0FBS2hJLENBQTlCO0FBQ0EsU0FBS1AsY0FBTDtBQUNBM0osVUFBTSxDQUFDZ1MsbUJBQVAsQ0FBNEIsUUFBNUIsRUFBc0MsSUFBdEM7QUFDQSxTQUFLdkcsYUFBTCxDQUFvQixXQUFwQixFQUFpQ3hILEtBQWpDLEVBQXdDLENBQUUrTCxPQUFGLENBQXhDO0FBQ0QsR0FSRDs7QUFVQTlPLE9BQUssQ0FBQ2lSLFdBQU4sR0FBb0IsVUFBVWxPLEtBQVYsRUFBaUIrTCxPQUFqQixFQUEyQjtBQUM3QyxRQUFJMEIsVUFBVSxHQUFHLEtBQUtVLGdCQUFMLENBQXVCbk8sS0FBdkIsRUFBOEIrTCxPQUE5QixDQUFqQjs7QUFDQSxTQUFLdkUsYUFBTCxDQUFvQixhQUFwQixFQUFtQ3hILEtBQW5DLEVBQTBDLENBQUUrTCxPQUFGLEVBQVcwQixVQUFYLENBQTFDOztBQUNBLFNBQUtXLFNBQUwsQ0FBZ0JwTyxLQUFoQixFQUF1QitMLE9BQXZCLEVBQWdDMEIsVUFBaEM7QUFDRCxHQUpEOztBQU1BeFEsT0FBSyxDQUFDb1IsUUFBTixHQUFpQixVQUFVck8sS0FBVixFQUFpQitMLE9BQWpCLEVBQTBCMEIsVUFBMUIsRUFBdUM7QUFDdEQsUUFBSyxDQUFDLEtBQUt4RSxXQUFYLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBQ0RqSixTQUFLLENBQUN1TixjQUFOO0FBRUEsU0FBS2UsYUFBTCxHQUFxQixLQUFLbkYsS0FBMUIsQ0FOc0QsQ0FPdEQ7O0FBQ0EsUUFBSW9GLFNBQVMsR0FBRyxLQUFLNUwsT0FBTCxDQUFhbUUsV0FBYixHQUEyQixDQUFDLENBQTVCLEdBQWdDLENBQWhEOztBQUNBLFFBQUssS0FBS25FLE9BQUwsQ0FBYTRELFVBQWxCLEVBQStCO0FBQzdCO0FBQ0FrSCxnQkFBVSxDQUFDeEgsQ0FBWCxHQUFld0gsVUFBVSxDQUFDeEgsQ0FBWCxHQUFlLEtBQUtPLGNBQW5DO0FBQ0Q7O0FBQ0QsUUFBSTJDLEtBQUssR0FBRyxLQUFLOEUsaUJBQUwsR0FBeUJSLFVBQVUsQ0FBQ3hILENBQVgsR0FBZXNJLFNBQXBEOztBQUVBLFFBQUssQ0FBQyxLQUFLNUwsT0FBTCxDQUFhNEQsVUFBZCxJQUE0QixLQUFLaEIsTUFBTCxDQUFZN0ksTUFBN0MsRUFBc0Q7QUFDcEQ7QUFDQSxVQUFJOFIsV0FBVyxHQUFHL0osSUFBSSxDQUFDZ0ssR0FBTCxDQUFVLENBQUMsS0FBS2xKLE1BQUwsQ0FBWSxDQUFaLEVBQWU4QixNQUExQixFQUFrQyxLQUFLNEcsaUJBQXZDLENBQWxCO0FBQ0E5RSxXQUFLLEdBQUdBLEtBQUssR0FBR3FGLFdBQVIsR0FBc0IsQ0FBRXJGLEtBQUssR0FBR3FGLFdBQVYsSUFBMEIsR0FBaEQsR0FBc0RyRixLQUE5RDtBQUNBLFVBQUl1RixRQUFRLEdBQUdqSyxJQUFJLENBQUNDLEdBQUwsQ0FBVSxDQUFDLEtBQUtpSyxZQUFMLEdBQW9CdEgsTUFBL0IsRUFBdUMsS0FBSzRHLGlCQUE1QyxDQUFmO0FBQ0E5RSxXQUFLLEdBQUdBLEtBQUssR0FBR3VGLFFBQVIsR0FBbUIsQ0FBRXZGLEtBQUssR0FBR3VGLFFBQVYsSUFBdUIsR0FBMUMsR0FBZ0R2RixLQUF4RDtBQUNEOztBQUVELFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUVBLFNBQUt5RixZQUFMLEdBQW9CLElBQUlDLElBQUosRUFBcEI7QUFDQSxTQUFLckgsYUFBTCxDQUFvQixVQUFwQixFQUFnQ3hILEtBQWhDLEVBQXVDLENBQUUrTCxPQUFGLEVBQVcwQixVQUFYLENBQXZDO0FBQ0QsR0EzQkQ7O0FBNkJBeFEsT0FBSyxDQUFDNlIsT0FBTixHQUFnQixVQUFVOU8sS0FBVixFQUFpQitMLE9BQWpCLEVBQTJCO0FBQ3pDLFFBQUssQ0FBQyxLQUFLOUMsV0FBWCxFQUF5QjtBQUN2QjtBQUNEOztBQUNELFFBQUssS0FBS3RHLE9BQUwsQ0FBYW9NLFVBQWxCLEVBQStCO0FBQzdCLFdBQUs5RyxlQUFMLEdBQXVCLElBQXZCO0FBQ0QsS0FOd0MsQ0FPekM7OztBQUNBLFFBQUlsSyxLQUFLLEdBQUcsS0FBS2lSLG9CQUFMLEVBQVo7O0FBRUEsUUFBSyxLQUFLck0sT0FBTCxDQUFhb00sVUFBYixJQUEyQixDQUFDLEtBQUtwTSxPQUFMLENBQWE0RCxVQUE5QyxFQUEyRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxVQUFJMEksUUFBUSxHQUFHLEtBQUtqRyxrQkFBTCxFQUFmO0FBQ0EsV0FBS2YsZUFBTCxHQUF1QixDQUFDZ0gsUUFBRCxHQUFZLEtBQUsxSixNQUFMLENBQVksQ0FBWixFQUFlOEIsTUFBM0IsSUFDckIsQ0FBQzRILFFBQUQsR0FBWSxLQUFLTixZQUFMLEdBQW9CdEgsTUFEbEM7QUFFRCxLQVBELE1BT08sSUFBSyxDQUFDLEtBQUsxRSxPQUFMLENBQWFvTSxVQUFkLElBQTRCaFIsS0FBSyxJQUFJLEtBQUtzSCxhQUEvQyxFQUErRDtBQUNwRTtBQUNBdEgsV0FBSyxJQUFJLEtBQUttUixrQkFBTCxFQUFUO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLWixhQUFaLENBckJ5QyxDQXNCekM7QUFDQTtBQUNBOztBQUNBLFNBQUthLFlBQUwsR0FBb0IsS0FBS3hNLE9BQUwsQ0FBYTRELFVBQWpDO0FBQ0EsU0FBS2YsTUFBTCxDQUFhekgsS0FBYjtBQUNBLFdBQU8sS0FBS29SLFlBQVo7QUFDQSxTQUFLM0gsYUFBTCxDQUFvQixTQUFwQixFQUErQnhILEtBQS9CLEVBQXNDLENBQUUrTCxPQUFGLENBQXRDO0FBQ0QsR0E3QkQ7O0FBK0JBOU8sT0FBSyxDQUFDK1Isb0JBQU4sR0FBNkIsWUFBVztBQUN0QyxRQUFJQyxRQUFRLEdBQUcsS0FBS2pHLGtCQUFMLEVBQWYsQ0FEc0MsQ0FFdEM7O0FBQ0EsUUFBSU0sUUFBUSxHQUFHN0UsSUFBSSxDQUFDaUosR0FBTCxDQUFVLEtBQUswQixnQkFBTCxDQUF1QixDQUFDSCxRQUF4QixFQUFrQyxLQUFLNUosYUFBdkMsQ0FBVixDQUFmLENBSHNDLENBSXRDOztBQUNBLFFBQUlnSyxlQUFlLEdBQUcsS0FBS0Msa0JBQUwsQ0FBeUJMLFFBQXpCLEVBQW1DM0YsUUFBbkMsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBQ0EsUUFBSWlHLGVBQWUsR0FBRyxLQUFLRCxrQkFBTCxDQUF5QkwsUUFBekIsRUFBbUMzRixRQUFuQyxFQUE2QyxDQUFDLENBQTlDLENBQXRCLENBTnNDLENBT3RDOzs7QUFDQSxRQUFJdkwsS0FBSyxHQUFHc1IsZUFBZSxDQUFDL0YsUUFBaEIsR0FBMkJpRyxlQUFlLENBQUNqRyxRQUEzQyxHQUNWK0YsZUFBZSxDQUFDdFIsS0FETixHQUNjd1IsZUFBZSxDQUFDeFIsS0FEMUM7QUFFQSxXQUFPQSxLQUFQO0FBQ0QsR0FYRDtBQWFBOzs7Ozs7Ozs7O0FBUUFkLE9BQUssQ0FBQ3FTLGtCQUFOLEdBQTJCLFVBQVVMLFFBQVYsRUFBb0IzRixRQUFwQixFQUE4QmtHLFNBQTlCLEVBQTBDO0FBQ25FLFFBQUl6UixLQUFLLEdBQUcsS0FBS3NILGFBQWpCO0FBQ0EsUUFBSW9LLFdBQVcsR0FBR0MsUUFBbEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS2hOLE9BQUwsQ0FBYWlOLE9BQWIsSUFBd0IsQ0FBQyxLQUFLak4sT0FBTCxDQUFhNEQsVUFBdEMsR0FDZDtBQUNBLGNBQVVzSixDQUFWLEVBQWFDLEVBQWIsRUFBa0I7QUFBRSxhQUFPRCxDQUFDLElBQUlDLEVBQVo7QUFBaUIsS0FGdkIsR0FFMEIsVUFBVUQsQ0FBVixFQUFhQyxFQUFiLEVBQWtCO0FBQUUsYUFBT0QsQ0FBQyxHQUFHQyxFQUFYO0FBQWdCLEtBRjlFOztBQUdBLFdBQVFILFNBQVMsQ0FBRXJHLFFBQUYsRUFBWW1HLFdBQVosQ0FBakIsRUFBNkM7QUFDM0M7QUFDQTFSLFdBQUssSUFBSXlSLFNBQVQ7QUFDQUMsaUJBQVcsR0FBR25HLFFBQWQ7QUFDQUEsY0FBUSxHQUFHLEtBQUs4RixnQkFBTCxDQUF1QixDQUFDSCxRQUF4QixFQUFrQ2xSLEtBQWxDLENBQVg7O0FBQ0EsVUFBS3VMLFFBQVEsS0FBSyxJQUFsQixFQUF5QjtBQUN2QjtBQUNEOztBQUNEQSxjQUFRLEdBQUc3RSxJQUFJLENBQUNpSixHQUFMLENBQVVwRSxRQUFWLENBQVg7QUFDRDs7QUFDRCxXQUFPO0FBQ0xBLGNBQVEsRUFBRW1HLFdBREw7QUFFTDtBQUNBMVIsV0FBSyxFQUFFQSxLQUFLLEdBQUd5UjtBQUhWLEtBQVA7QUFLRCxHQXJCRDtBQXVCQTs7Ozs7OztBQUtBdlMsT0FBSyxDQUFDbVMsZ0JBQU4sR0FBeUIsVUFBVW5KLENBQVYsRUFBYWxJLEtBQWIsRUFBcUI7QUFDNUMsUUFBSTZGLEdBQUcsR0FBRyxLQUFLMkIsTUFBTCxDQUFZN0ksTUFBdEIsQ0FENEMsQ0FFNUM7O0FBQ0EsUUFBSXFULFlBQVksR0FBRyxLQUFLcE4sT0FBTCxDQUFhNEQsVUFBYixJQUEyQjNDLEdBQUcsR0FBRyxDQUFwRDtBQUNBLFFBQUlvTSxVQUFVLEdBQUdELFlBQVksR0FBR3hSLEtBQUssQ0FBQ0ssTUFBTixDQUFjYixLQUFkLEVBQXFCNkYsR0FBckIsQ0FBSCxHQUFnQzdGLEtBQTdEO0FBQ0EsUUFBSWtTLEtBQUssR0FBRyxLQUFLMUssTUFBTCxDQUFheUssVUFBYixDQUFaOztBQUNBLFFBQUssQ0FBQ0MsS0FBTixFQUFjO0FBQ1osYUFBTyxJQUFQO0FBQ0QsS0FSMkMsQ0FTNUM7OztBQUNBLFFBQUlDLElBQUksR0FBR0gsWUFBWSxHQUFHLEtBQUt2SixjQUFMLEdBQXNCL0IsSUFBSSxDQUFDMEwsS0FBTCxDQUFZcFMsS0FBSyxHQUFHNkYsR0FBcEIsQ0FBekIsR0FBcUQsQ0FBNUU7QUFDQSxXQUFPcUMsQ0FBQyxJQUFLZ0ssS0FBSyxDQUFDNUksTUFBTixHQUFlNkksSUFBcEIsQ0FBUjtBQUNELEdBWkQ7O0FBY0FqVCxPQUFLLENBQUNpUyxrQkFBTixHQUEyQixZQUFXO0FBQ3BDO0FBQ0EsUUFBSyxLQUFLWixhQUFMLEtBQXVCbFAsU0FBdkIsSUFBb0MsQ0FBQyxLQUFLd1AsWUFBMUMsSUFDSDtBQUNBLFFBQUlDLElBQUosS0FBYSxLQUFLRCxZQUFsQixHQUFpQyxHQUZuQyxFQUV5QztBQUN2QyxhQUFPLENBQVA7QUFDRDs7QUFFRCxRQUFJdEYsUUFBUSxHQUFHLEtBQUs4RixnQkFBTCxDQUF1QixDQUFDLEtBQUtqRyxLQUE3QixFQUFvQyxLQUFLOUQsYUFBekMsQ0FBZjtBQUNBLFFBQUkrSyxLQUFLLEdBQUcsS0FBSzlCLGFBQUwsR0FBcUIsS0FBS25GLEtBQXRDOztBQUNBLFFBQUtHLFFBQVEsR0FBRyxDQUFYLElBQWdCOEcsS0FBSyxHQUFHLENBQTdCLEVBQWlDO0FBQy9CO0FBQ0EsYUFBTyxDQUFQO0FBQ0QsS0FIRCxNQUdPLElBQUs5RyxRQUFRLEdBQUcsQ0FBWCxJQUFnQjhHLEtBQUssR0FBRyxDQUE3QixFQUFpQztBQUN0QztBQUNBLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsV0FBTyxDQUFQO0FBQ0QsR0FsQkQsQ0FsVG1FLENBc1VuRTs7O0FBRUFuVCxPQUFLLENBQUNvVCxXQUFOLEdBQW9CLFVBQVVyUSxLQUFWLEVBQWlCK0wsT0FBakIsRUFBMkI7QUFDN0M7QUFDQSxRQUFJdUUsV0FBVyxHQUFHLEtBQUtDLGFBQUwsQ0FBb0J2USxLQUFLLENBQUNxSCxNQUExQixDQUFsQjtBQUNBLFFBQUltSixRQUFRLEdBQUdGLFdBQVcsSUFBSUEsV0FBVyxDQUFDN00sT0FBMUM7QUFDQSxRQUFJZ04sU0FBUyxHQUFHSCxXQUFXLElBQUksS0FBS2xOLEtBQUwsQ0FBVzVGLE9BQVgsQ0FBb0I4UyxXQUFwQixDQUEvQjtBQUNBLFNBQUs5SSxhQUFMLENBQW9CLGFBQXBCLEVBQW1DeEgsS0FBbkMsRUFBMEMsQ0FBRStMLE9BQUYsRUFBV3lFLFFBQVgsRUFBcUJDLFNBQXJCLENBQTFDO0FBQ0QsR0FORCxDQXhVbUUsQ0FnVm5FOzs7QUFFQXhULE9BQUssQ0FBQ3lULFFBQU4sR0FBaUIsWUFBVztBQUMxQixRQUFJQyxNQUFNLEdBQUduRSxpQkFBaUIsRUFBOUI7QUFDQSxRQUFJb0UsV0FBVyxHQUFHLEtBQUtyRSxpQkFBTCxDQUF1QnRHLENBQXZCLEdBQTJCMEssTUFBTSxDQUFDMUssQ0FBcEQ7QUFDQSxRQUFJNEssV0FBVyxHQUFHLEtBQUt0RSxpQkFBTCxDQUF1QnVFLENBQXZCLEdBQTJCSCxNQUFNLENBQUNHLENBQXBELENBSDBCLENBSTFCOztBQUNBLFFBQUtyTSxJQUFJLENBQUNpSixHQUFMLENBQVVrRCxXQUFWLElBQTBCLENBQTFCLElBQStCbk0sSUFBSSxDQUFDaUosR0FBTCxDQUFVbUQsV0FBVixJQUEwQixDQUE5RCxFQUFrRTtBQUNoRSxXQUFLRSxZQUFMO0FBQ0Q7QUFDRixHQVJELENBbFZtRSxDQTRWbkU7OztBQUVBLFdBQVN2RSxpQkFBVCxHQUE2QjtBQUMzQixXQUFPO0FBQ0x2RyxPQUFDLEVBQUVsSyxNQUFNLENBQUNpVixXQURMO0FBRUxGLE9BQUMsRUFBRS9VLE1BQU0sQ0FBQ2tWO0FBRkwsS0FBUDtBQUlELEdBbldrRSxDQXFXbkU7OztBQUVBLFNBQU8vTixRQUFQO0FBRUMsQ0F2WUMsQ0FBRixDOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDRSxXQUFVbkgsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQ0E7QUFDQSxNQUFLLElBQUwsRUFBaUQ7QUFDL0M7QUFDQUMscUNBQVEsQ0FDTiwyRkFETSxFQUVOLG1GQUZNLEVBR04seUZBSE0sRUFJTix1RUFKTSxFQUtOLHlFQUxNLEVBTU4sNkVBTk0sQ0FBRixtQ0FPSCxVQUFVZSxTQUFWLEVBQXFCNkgsT0FBckIsRUFBOEJ0RyxLQUE5QixFQUFxQ2lMLElBQXJDLEVBQTJDMEgsS0FBM0MsRUFBa0RDLGdCQUFsRCxFQUFxRTtBQUN0RSxhQUFPblYsT0FBTyxDQUFFRCxNQUFGLEVBQVVpQixTQUFWLEVBQXFCNkgsT0FBckIsRUFBOEJ0RyxLQUE5QixFQUFxQ2lMLElBQXJDLEVBQTJDMEgsS0FBM0MsRUFBa0RDLGdCQUFsRCxDQUFkO0FBQ0QsS0FUSztBQUFBLG9HQUFOO0FBVUQsR0FaRCxNQVlPLGtCQXdCTjtBQUVGLENBekNDLEVBeUNDcFYsTUF6Q0QsRUF5Q1MsU0FBU0MsT0FBVCxDQUFrQkQsTUFBbEIsRUFBMEJpQixTQUExQixFQUFxQzZILE9BQXJDLEVBQ1R0RyxLQURTLEVBQ0ZpTCxJQURFLEVBQ0kwSCxLQURKLEVBQ1dDLGdCQURYLEVBQzhCO0FBRXpDLGVBRnlDLENBSXpDOztBQUNBLE1BQUkzTyxNQUFNLEdBQUd6RyxNQUFNLENBQUN5RyxNQUFwQjtBQUNBLE1BQUk0TyxnQkFBZ0IsR0FBR3JWLE1BQU0sQ0FBQ3FWLGdCQUE5QjtBQUNBLE1BQUl0UCxPQUFPLEdBQUcvRixNQUFNLENBQUMrRixPQUFyQjs7QUFFQSxXQUFTdVAsWUFBVCxDQUF1QmxSLEtBQXZCLEVBQThCbVIsTUFBOUIsRUFBdUM7QUFDckNuUixTQUFLLEdBQUc1QixLQUFLLENBQUNVLFNBQU4sQ0FBaUJrQixLQUFqQixDQUFSOztBQUNBLFdBQVFBLEtBQUssQ0FBQ3pELE1BQWQsRUFBdUI7QUFDckI0VSxZQUFNLENBQUM5TixXQUFQLENBQW9CckQsS0FBSyxDQUFDcUksS0FBTixFQUFwQjtBQUNEO0FBQ0YsR0Fkd0MsQ0FnQnpDO0FBRUE7OztBQUNBLE1BQUkrSSxJQUFJLEdBQUcsQ0FBWCxDQW5CeUMsQ0FvQnpDOztBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxXQUFTdE8sUUFBVCxDQUFtQk8sT0FBbkIsRUFBNEJkLE9BQTVCLEVBQXNDO0FBQ3BDLFFBQUk4TyxZQUFZLEdBQUdsVCxLQUFLLENBQUNzQixlQUFOLENBQXVCNEQsT0FBdkIsQ0FBbkI7O0FBQ0EsUUFBSyxDQUFDZ08sWUFBTixFQUFxQjtBQUNuQixVQUFLM1AsT0FBTCxFQUFlO0FBQ2JBLGVBQU8sQ0FBQ2dCLEtBQVIsQ0FBZSxnQ0FBaUMyTyxZQUFZLElBQUloTyxPQUFqRCxDQUFmO0FBQ0Q7O0FBQ0Q7QUFDRDs7QUFDRCxTQUFLQSxPQUFMLEdBQWVnTyxZQUFmLENBUm9DLENBU3BDOztBQUNBLFFBQUssS0FBS2hPLE9BQUwsQ0FBYWlPLFlBQWxCLEVBQWlDO0FBQy9CLFVBQUkxTyxRQUFRLEdBQUd3TyxTQUFTLENBQUUsS0FBSy9OLE9BQUwsQ0FBYWlPLFlBQWYsQ0FBeEI7QUFDQTFPLGNBQVEsQ0FBQzJPLE1BQVQsQ0FBaUJoUCxPQUFqQjtBQUNBLGFBQU9LLFFBQVA7QUFDRCxLQWRtQyxDQWdCcEM7OztBQUNBLFFBQUtSLE1BQUwsRUFBYztBQUNaLFdBQUtvUCxRQUFMLEdBQWdCcFAsTUFBTSxDQUFFLEtBQUtpQixPQUFQLENBQXRCO0FBQ0QsS0FuQm1DLENBb0JwQzs7O0FBQ0EsU0FBS2QsT0FBTCxHQUFlcEUsS0FBSyxDQUFDQyxNQUFOLENBQWMsRUFBZCxFQUFrQixLQUFLcVQsV0FBTCxDQUFpQmpILFFBQW5DLENBQWY7QUFDQSxTQUFLK0csTUFBTCxDQUFhaFAsT0FBYixFQXRCb0MsQ0F3QnBDOztBQUNBLFNBQUttUCxPQUFMO0FBQ0Q7O0FBRUQ1TyxVQUFRLENBQUMwSCxRQUFULEdBQW9CO0FBQ2xCbUgsaUJBQWEsRUFBRSxJQURHO0FBRWxCO0FBQ0F6SCxhQUFTLEVBQUUsUUFITztBQUlsQjtBQUNBO0FBQ0EwSCxzQkFBa0IsRUFBRSxLQU5GO0FBTVM7QUFDM0JDLFlBQVEsRUFBRSxJQVBRO0FBT0Y7QUFDaEJDLHlCQUFxQixFQUFFLElBUkw7QUFTbEI7QUFDQXRLLG1CQUFlLEVBQUUsSUFWQztBQVdsQnVLLFVBQU0sRUFBRSxJQVhVO0FBWWxCNUksc0JBQWtCLEVBQUUsS0FaRjtBQWFsQm5FLGtCQUFjLEVBQUUsSUFiRSxDQWNsQjtBQUNBOztBQWZrQixHQUFwQixDQW5EeUMsQ0FxRXpDOztBQUNBbEMsVUFBUSxDQUFDNkgsYUFBVCxHQUF5QixFQUF6QjtBQUVBLE1BQUk5TixLQUFLLEdBQUdpRyxRQUFRLENBQUM3RyxTQUFyQixDQXhFeUMsQ0F5RXpDOztBQUNBa0MsT0FBSyxDQUFDQyxNQUFOLENBQWN2QixLQUFkLEVBQXFCRCxTQUFTLENBQUNYLFNBQS9COztBQUVBWSxPQUFLLENBQUM2VSxPQUFOLEdBQWdCLFlBQVc7QUFDekI7QUFDQSxRQUFJTSxFQUFFLEdBQUcsS0FBS0MsSUFBTCxHQUFZLEVBQUVkLElBQXZCO0FBQ0EsU0FBSzlOLE9BQUwsQ0FBYWlPLFlBQWIsR0FBNEJVLEVBQTVCLENBSHlCLENBR087O0FBQ2hDWixhQUFTLENBQUVZLEVBQUYsQ0FBVCxHQUFrQixJQUFsQixDQUp5QixDQUlEO0FBQ3hCOztBQUNBLFNBQUsvTSxhQUFMLEdBQXFCLENBQXJCLENBTnlCLENBT3pCOztBQUNBLFNBQUtPLGFBQUwsR0FBcUIsQ0FBckIsQ0FSeUIsQ0FTekI7O0FBQ0EsU0FBS0ssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLeUIsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtxQyxVQUFMLEdBQWtCLEtBQUtwSCxPQUFMLENBQWFtRSxXQUFiLEdBQTJCLE9BQTNCLEdBQXFDLE1BQXZELENBWnlCLENBYXpCOztBQUNBLFNBQUsyRSxRQUFMLEdBQWdCOUwsUUFBUSxDQUFDMlMsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBLFNBQUs3RyxRQUFMLENBQWMxSSxTQUFkLEdBQTBCLG1CQUExQjs7QUFDQSxTQUFLd1AsYUFBTDs7QUFFQSxRQUFLLEtBQUs1UCxPQUFMLENBQWF3UCxNQUFiLElBQXVCLEtBQUt4UCxPQUFMLENBQWE2UCxRQUF6QyxFQUFvRDtBQUNsRHpXLFlBQU0sQ0FBQ3VGLGdCQUFQLENBQXlCLFFBQXpCLEVBQW1DLElBQW5DO0FBQ0QsS0FwQndCLENBc0J6Qjs7O0FBQ0EsU0FBTSxJQUFJbkUsU0FBVixJQUF1QixLQUFLd0YsT0FBTCxDQUFhekYsRUFBcEMsRUFBeUM7QUFDdkMsVUFBSUUsUUFBUSxHQUFHLEtBQUt1RixPQUFMLENBQWF6RixFQUFiLENBQWlCQyxTQUFqQixDQUFmO0FBQ0EsV0FBS0QsRUFBTCxDQUFTQyxTQUFULEVBQW9CQyxRQUFwQjtBQUNEOztBQUVEOEYsWUFBUSxDQUFDNkgsYUFBVCxDQUF1QjFLLE9BQXZCLENBQWdDLFVBQVV6RCxNQUFWLEVBQW1CO0FBQ2pELFdBQU1BLE1BQU47QUFDRCxLQUZELEVBRUcsSUFGSDs7QUFJQSxRQUFLLEtBQUsrRixPQUFMLENBQWE2UCxRQUFsQixFQUE2QjtBQUMzQixXQUFLQSxRQUFMO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0MsUUFBTDtBQUNEO0FBRUYsR0F0Q0Q7QUF3Q0E7Ozs7OztBQUlBeFYsT0FBSyxDQUFDMFUsTUFBTixHQUFlLFVBQVVlLElBQVYsRUFBaUI7QUFDOUJuVSxTQUFLLENBQUNDLE1BQU4sQ0FBYyxLQUFLbUUsT0FBbkIsRUFBNEIrUCxJQUE1QjtBQUNELEdBRkQ7O0FBSUF6VixPQUFLLENBQUN3VixRQUFOLEdBQWlCLFlBQVc7QUFDMUIsUUFBSyxLQUFLRSxRQUFWLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBQ0QsU0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtsUCxPQUFMLENBQWE4RyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixrQkFBM0I7O0FBQ0EsUUFBSyxLQUFLN0gsT0FBTCxDQUFhbUUsV0FBbEIsRUFBZ0M7QUFDOUIsV0FBS3JELE9BQUwsQ0FBYThHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCO0FBQ0Q7O0FBRUQsU0FBSzNGLE9BQUwsR0FWMEIsQ0FXMUI7O0FBQ0EsUUFBSStOLFNBQVMsR0FBRyxLQUFLQyx1QkFBTCxDQUE4QixLQUFLcFAsT0FBTCxDQUFhcVAsUUFBM0MsQ0FBaEI7O0FBQ0F6QixnQkFBWSxDQUFFdUIsU0FBRixFQUFhLEtBQUs5TyxNQUFsQixDQUFaO0FBQ0EsU0FBSzJILFFBQUwsQ0FBY2pJLFdBQWQsQ0FBMkIsS0FBS00sTUFBaEM7QUFDQSxTQUFLTCxPQUFMLENBQWFELFdBQWIsQ0FBMEIsS0FBS2lJLFFBQS9CLEVBZjBCLENBZ0IxQjs7QUFDQSxTQUFLc0gsV0FBTDs7QUFFQSxRQUFLLEtBQUtwUSxPQUFMLENBQWFvUCxhQUFsQixFQUFrQztBQUNoQztBQUNBLFdBQUt0TyxPQUFMLENBQWF1UCxRQUFiLEdBQXdCLENBQXhCLENBRmdDLENBR2hDOztBQUNBLFdBQUt2UCxPQUFMLENBQWFuQyxnQkFBYixDQUErQixTQUEvQixFQUEwQyxJQUExQztBQUNEOztBQUVELFNBQUtyRCxTQUFMLENBQWUsVUFBZjtBQUNBLFNBQUtnVixrQkFBTCxHQTNCMEIsQ0E0QjFCOztBQUNBLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkIsQ0E3QjBCLENBOEIxQjs7QUFDQSxTQUFLMUwsYUFBTCxDQUFtQixPQUFuQjtBQUNELEdBaENELENBNUh5QyxDQThKekM7OztBQUNBdkssT0FBSyxDQUFDc1YsYUFBTixHQUFzQixZQUFXO0FBQy9CO0FBQ0EsUUFBSXpPLE1BQU0sR0FBR25FLFFBQVEsQ0FBQzJTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBeE8sVUFBTSxDQUFDZixTQUFQLEdBQW1CLGlCQUFuQjtBQUNBZSxVQUFNLENBQUNtRCxLQUFQLENBQWMsS0FBSzhDLFVBQW5CLElBQWtDLENBQWxDO0FBQ0EsU0FBS2pHLE1BQUwsR0FBY0EsTUFBZDtBQUNELEdBTkQ7O0FBUUE3RyxPQUFLLENBQUM0Vix1QkFBTixHQUFnQyxVQUFVMVMsS0FBVixFQUFrQjtBQUNoRCxXQUFPNUIsS0FBSyxDQUFDMkIsa0JBQU4sQ0FBMEJDLEtBQTFCLEVBQWlDLEtBQUt3QyxPQUFMLENBQWF3USxZQUE5QyxDQUFQO0FBQ0QsR0FGRCxDQXZLeUMsQ0EyS3pDOzs7QUFDQWxXLE9BQUssQ0FBQzhWLFdBQU4sR0FBb0IsWUFBVztBQUM3QjtBQUNBLFNBQUszUCxLQUFMLEdBQWEsS0FBS08sVUFBTCxDQUFpQixLQUFLRyxNQUFMLENBQVlnUCxRQUE3QixDQUFiO0FBQ0EsU0FBS00sYUFBTDs7QUFDQSxTQUFLak8sa0JBQUw7O0FBQ0EsU0FBS0MsY0FBTDtBQUNELEdBTkQ7QUFRQTs7Ozs7OztBQUtBbkksT0FBSyxDQUFDMEcsVUFBTixHQUFtQixVQUFVeEQsS0FBVixFQUFrQjtBQUNuQyxRQUFJeVMsU0FBUyxHQUFHLEtBQUtDLHVCQUFMLENBQThCMVMsS0FBOUIsQ0FBaEIsQ0FEbUMsQ0FHbkM7OztBQUNBLFFBQUlpRCxLQUFLLEdBQUd3UCxTQUFTLENBQUNTLEdBQVYsQ0FBZSxVQUFVN0MsUUFBVixFQUFxQjtBQUM5QyxhQUFPLElBQUloSCxJQUFKLENBQVVnSCxRQUFWLEVBQW9CLElBQXBCLENBQVA7QUFDRCxLQUZXLEVBRVQsSUFGUyxDQUFaO0FBSUEsV0FBT3BOLEtBQVA7QUFDRCxHQVREOztBQVdBbkcsT0FBSyxDQUFDcVcsV0FBTixHQUFvQixZQUFXO0FBQzdCLFdBQU8sS0FBS2xRLEtBQUwsQ0FBWSxLQUFLQSxLQUFMLENBQVcxRyxNQUFYLEdBQW9CLENBQWhDLENBQVA7QUFDRCxHQUZEOztBQUlBTyxPQUFLLENBQUMwUixZQUFOLEdBQXFCLFlBQVc7QUFDOUIsV0FBTyxLQUFLcEosTUFBTCxDQUFhLEtBQUtBLE1BQUwsQ0FBWTdJLE1BQVosR0FBcUIsQ0FBbEMsQ0FBUDtBQUNELEdBRkQsQ0F4TXlDLENBNE16Qzs7O0FBQ0FPLE9BQUssQ0FBQ21XLGFBQU4sR0FBc0IsWUFBVztBQUMvQjtBQUNBLFNBQUtsUCxVQUFMLENBQWlCLEtBQUtkLEtBQXRCLEVBRitCLENBRy9COzs7QUFDQSxTQUFLOEIsY0FBTCxDQUFxQixDQUFyQjtBQUNELEdBTEQ7QUFPQTs7Ozs7O0FBSUFqSSxPQUFLLENBQUNpSSxjQUFOLEdBQXVCLFVBQVVuSCxLQUFWLEVBQWtCO0FBQ3ZDQSxTQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQixDQUR1QyxDQUV2QztBQUNBOztBQUNBLFNBQUt3VixhQUFMLEdBQXFCeFYsS0FBSyxHQUFHLEtBQUt3VixhQUFMLElBQXNCLENBQXpCLEdBQTZCLENBQXZEO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVosQ0FMdUMsQ0FNdkM7O0FBQ0EsUUFBS3pWLEtBQUssR0FBRyxDQUFiLEVBQWlCO0FBQ2YsVUFBSTBWLFNBQVMsR0FBRyxLQUFLclEsS0FBTCxDQUFZckYsS0FBSyxHQUFHLENBQXBCLENBQWhCO0FBQ0F5VixXQUFLLEdBQUdDLFNBQVMsQ0FBQ3hOLENBQVYsR0FBY3dOLFNBQVMsQ0FBQzNMLElBQVYsQ0FBZWEsVUFBckM7QUFDRDs7QUFDRCxRQUFJL0UsR0FBRyxHQUFHLEtBQUtSLEtBQUwsQ0FBVzFHLE1BQXJCOztBQUNBLFNBQU0sSUFBSUQsQ0FBQyxHQUFDc0IsS0FBWixFQUFtQnRCLENBQUMsR0FBR21ILEdBQXZCLEVBQTRCbkgsQ0FBQyxFQUE3QixFQUFrQztBQUNoQyxVQUFJOEcsSUFBSSxHQUFHLEtBQUtILEtBQUwsQ0FBVzNHLENBQVgsQ0FBWDtBQUNBOEcsVUFBSSxDQUFDeUcsV0FBTCxDQUFrQndKLEtBQWxCO0FBQ0FBLFdBQUssSUFBSWpRLElBQUksQ0FBQ3VFLElBQUwsQ0FBVWEsVUFBbkI7QUFDQSxXQUFLNEssYUFBTCxHQUFxQjlPLElBQUksQ0FBQ2dLLEdBQUwsQ0FBVWxMLElBQUksQ0FBQ3VFLElBQUwsQ0FBVTRMLFdBQXBCLEVBQWlDLEtBQUtILGFBQXRDLENBQXJCO0FBQ0QsS0FqQnNDLENBa0J2Qzs7O0FBQ0EsU0FBSy9NLGNBQUwsR0FBc0JnTixLQUF0QixDQW5CdUMsQ0FvQnZDOztBQUNBLFNBQUtHLFlBQUwsR0FyQnVDLENBc0J2Qzs7QUFDQSxTQUFLQyxjQUFMLEdBdkJ1QyxDQXdCdkM7OztBQUNBLFNBQUtyTSxXQUFMLEdBQW1CM0QsR0FBRyxHQUFHLEtBQUsrSyxZQUFMLEdBQW9CdEgsTUFBcEIsR0FBNkIsS0FBSzlCLE1BQUwsQ0FBWSxDQUFaLEVBQWU4QixNQUEvQyxHQUF3RCxDQUE5RTtBQUNELEdBMUJEO0FBNEJBOzs7Ozs7QUFJQXBLLE9BQUssQ0FBQ2lILFVBQU4sR0FBbUIsVUFBVWQsS0FBVixFQUFrQjtBQUNuQ0EsU0FBSyxDQUFDL0MsT0FBTixDQUFlLFVBQVVrRCxJQUFWLEVBQWlCO0FBQzlCQSxVQUFJLENBQUNzQixPQUFMO0FBQ0QsS0FGRDtBQUdELEdBSkQsQ0F4UHlDLENBOFB6Qzs7O0FBRUE1SCxPQUFLLENBQUMwVyxZQUFOLEdBQXFCLFlBQVc7QUFDOUIsU0FBS3BPLE1BQUwsR0FBYyxFQUFkOztBQUNBLFFBQUssQ0FBQyxLQUFLbkMsS0FBTCxDQUFXMUcsTUFBakIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxRQUFJdVQsS0FBSyxHQUFHLElBQUlpQixLQUFKLENBQVcsSUFBWCxDQUFaO0FBQ0EsU0FBSzNMLE1BQUwsQ0FBWTlILElBQVosQ0FBa0J3UyxLQUFsQjtBQUNBLFFBQUk0RCxZQUFZLEdBQUcsS0FBSzlKLFVBQUwsSUFBbUIsTUFBdEM7QUFDQSxRQUFJK0osVUFBVSxHQUFHRCxZQUFZLEdBQUcsYUFBSCxHQUFtQixZQUFoRDs7QUFFQSxRQUFJRSxVQUFVLEdBQUcsS0FBS0MsY0FBTCxFQUFqQjs7QUFFQSxTQUFLNVEsS0FBTCxDQUFXL0MsT0FBWCxDQUFvQixVQUFVa0QsSUFBVixFQUFnQjlHLENBQWhCLEVBQW9CO0FBQ3RDO0FBQ0EsVUFBSyxDQUFDd1QsS0FBSyxDQUFDN00sS0FBTixDQUFZMUcsTUFBbEIsRUFBMkI7QUFDekJ1VCxhQUFLLENBQUNnRSxPQUFOLENBQWUxUSxJQUFmO0FBQ0E7QUFDRDs7QUFFRCxVQUFJMlEsVUFBVSxHQUFLakUsS0FBSyxDQUFDdEgsVUFBTixHQUFtQnNILEtBQUssQ0FBQ2tFLFdBQTNCLElBQ2I1USxJQUFJLENBQUN1RSxJQUFMLENBQVVhLFVBQVYsR0FBdUJwRixJQUFJLENBQUN1RSxJQUFMLENBQVdnTSxVQUFYLENBRFYsQ0FBakI7O0FBR0EsVUFBS0MsVUFBVSxDQUFDelUsSUFBWCxDQUFpQixJQUFqQixFQUF1QjdDLENBQXZCLEVBQTBCeVgsVUFBMUIsQ0FBTCxFQUE4QztBQUM1Q2pFLGFBQUssQ0FBQ2dFLE9BQU4sQ0FBZTFRLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBME0sYUFBSyxDQUFDaEcsWUFBTjtBQUVBZ0csYUFBSyxHQUFHLElBQUlpQixLQUFKLENBQVcsSUFBWCxDQUFSO0FBQ0EsYUFBSzNMLE1BQUwsQ0FBWTlILElBQVosQ0FBa0J3UyxLQUFsQjtBQUNBQSxhQUFLLENBQUNnRSxPQUFOLENBQWUxUSxJQUFmO0FBQ0Q7QUFDRixLQXBCRCxFQW9CRyxJQXBCSCxFQWI4QixDQWtDOUI7O0FBQ0EwTSxTQUFLLENBQUNoRyxZQUFOLEdBbkM4QixDQW9DOUI7O0FBQ0EsU0FBS21LLG1CQUFMO0FBQ0QsR0F0Q0Q7O0FBd0NBblgsT0FBSyxDQUFDK1csY0FBTixHQUF1QixZQUFXO0FBQ2hDLFFBQUlLLFVBQVUsR0FBRyxLQUFLMVIsT0FBTCxDQUFhMFIsVUFBOUI7O0FBQ0EsUUFBSyxDQUFDQSxVQUFOLEVBQW1CO0FBQ2pCLGFBQU8sWUFBVztBQUNoQixlQUFPLEtBQVA7QUFDRCxPQUZEO0FBR0QsS0FKRCxNQUlPLElBQUssT0FBT0EsVUFBUCxJQUFxQixRQUExQixFQUFxQztBQUMxQztBQUNBLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFFRixVQUFGLEVBQWMsRUFBZCxDQUFyQjtBQUNBLGFBQU8sVUFBVTVYLENBQVYsRUFBYztBQUNuQixlQUFTQSxDQUFDLEdBQUc2WCxNQUFOLEtBQW1CLENBQTFCO0FBQ0QsT0FGRDtBQUdELEtBWitCLENBYWhDO0FBQ0E7OztBQUNBLFFBQUlFLFlBQVksR0FBRyxPQUFPSCxVQUFQLElBQXFCLFFBQXJCLElBQ2pCQSxVQUFVLENBQUMzUyxLQUFYLENBQWlCLFVBQWpCLENBREY7QUFFQSxRQUFJK1MsT0FBTyxHQUFHRCxZQUFZLEdBQUdELFFBQVEsQ0FBRUMsWUFBWSxDQUFDLENBQUQsQ0FBZCxFQUFtQixFQUFuQixDQUFSLEdBQWtDLEdBQXJDLEdBQTJDLENBQXJFO0FBQ0EsV0FBTyxVQUFVL1gsQ0FBVixFQUFheVgsVUFBYixFQUEwQjtBQUMvQixhQUFPQSxVQUFVLElBQUksQ0FBRSxLQUFLcE0sSUFBTCxDQUFVQyxVQUFWLEdBQXVCLENBQXpCLElBQStCME0sT0FBcEQ7QUFDRCxLQUZEO0FBR0QsR0FyQkQsQ0F4U3lDLENBK1R6Qzs7O0FBQ0F4WCxPQUFLLENBQUN5WCxLQUFOLEdBQ0F6WCxLQUFLLENBQUMwWCxVQUFOLEdBQW1CLFlBQVc7QUFDNUIsU0FBS3ZCLGFBQUw7QUFDQSxTQUFLM04sd0JBQUw7QUFDRCxHQUpEOztBQU1BeEksT0FBSyxDQUFDNEgsT0FBTixHQUFnQixZQUFXO0FBQ3pCLFNBQUtpRCxJQUFMLEdBQVlqRCxPQUFPLENBQUUsS0FBS3BCLE9BQVAsQ0FBbkI7QUFDQSxTQUFLbVIsWUFBTDtBQUNBLFNBQUsvTixjQUFMLEdBQXNCLEtBQUtpQixJQUFMLENBQVVDLFVBQVYsR0FBdUIsS0FBS3VDLFNBQWxEO0FBQ0QsR0FKRDs7QUFNQSxNQUFJdUssbUJBQW1CLEdBQUc7QUFDeEI7QUFDQUMsVUFBTSxFQUFFO0FBQ05DLFVBQUksRUFBRSxHQURBO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBRmdCO0FBTXhCRCxRQUFJLEVBQUU7QUFDSkEsVUFBSSxFQUFFLENBREY7QUFFSkMsV0FBSyxFQUFFO0FBRkgsS0FOa0I7QUFVeEJBLFNBQUssRUFBRTtBQUNMQSxXQUFLLEVBQUUsQ0FERjtBQUVMRCxVQUFJLEVBQUU7QUFGRDtBQVZpQixHQUExQjs7QUFnQkE5WCxPQUFLLENBQUMyWCxZQUFOLEdBQXFCLFlBQVc7QUFDOUIsUUFBSUssU0FBUyxHQUFHSixtQkFBbUIsQ0FBRSxLQUFLbFMsT0FBTCxDQUFhMkgsU0FBZixDQUFuQztBQUNBLFNBQUtBLFNBQUwsR0FBaUIySyxTQUFTLEdBQUdBLFNBQVMsQ0FBRSxLQUFLbEwsVUFBUCxDQUFaLEdBQWtDLEtBQUtwSCxPQUFMLENBQWEySCxTQUF6RTtBQUNELEdBSEQ7O0FBS0FyTixPQUFLLENBQUNtSSxjQUFOLEdBQXVCLFlBQVc7QUFDaEMsUUFBSyxLQUFLekMsT0FBTCxDQUFheUMsY0FBbEIsRUFBbUM7QUFDakMsVUFBSThQLE1BQU0sR0FBRyxLQUFLdlMsT0FBTCxDQUFhd1MsY0FBYixJQUErQixLQUFLMU4sYUFBcEMsR0FDWCxLQUFLQSxhQUFMLENBQW1CeU4sTUFEUixHQUNpQixLQUFLM0IsYUFEbkM7QUFFQSxXQUFLOUgsUUFBTCxDQUFjeEUsS0FBZCxDQUFvQmlPLE1BQXBCLEdBQTZCQSxNQUFNLEdBQUcsSUFBdEM7QUFDRDtBQUNGLEdBTkQ7O0FBUUFqWSxPQUFLLENBQUNrSSxrQkFBTixHQUEyQixZQUFXO0FBQ3BDO0FBQ0EsUUFBSyxDQUFDLEtBQUt4QyxPQUFMLENBQWE0RCxVQUFuQixFQUFnQztBQUM5QjtBQUNELEtBSm1DLENBS3BDOzs7QUFDQSxTQUFLcUMsYUFBTCxDQUFvQixLQUFLUixnQkFBekI7O0FBQ0EsU0FBS1EsYUFBTCxDQUFvQixLQUFLTixlQUF6QixFQVBvQyxDQVFwQztBQUNBOzs7QUFDQSxRQUFJOE0sSUFBSSxHQUFHLEtBQUt2TyxjQUFoQjtBQUNBLFFBQUk0SixTQUFTLEdBQUcsS0FBS3JOLEtBQUwsQ0FBVzFHLE1BQVgsR0FBb0IsQ0FBcEM7QUFDQSxTQUFLMEwsZ0JBQUwsR0FBd0IsS0FBS2lOLFlBQUwsQ0FBbUJELElBQW5CLEVBQXlCM0UsU0FBekIsRUFBb0MsQ0FBQyxDQUFyQyxDQUF4QixDQVpvQyxDQWFwQztBQUNBOztBQUNBMkUsUUFBSSxHQUFHLEtBQUt0TixJQUFMLENBQVVDLFVBQVYsR0FBdUIsS0FBS2xCLGNBQW5DLENBZm9DLENBZ0JwQzs7QUFDQSxTQUFLeUIsZUFBTCxHQUF1QixLQUFLK00sWUFBTCxDQUFtQkQsSUFBbkIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBdkI7QUFDRCxHQWxCRDs7QUFvQkFuWSxPQUFLLENBQUNvWSxZQUFOLEdBQXFCLFVBQVVELElBQVYsRUFBZ0IzRSxTQUFoQixFQUEyQmpCLFNBQTNCLEVBQXVDO0FBQzFEO0FBQ0EsUUFBSXBNLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQVFnUyxJQUFJLEdBQUcsQ0FBZixFQUFtQjtBQUNqQixVQUFJN1IsSUFBSSxHQUFHLEtBQUtILEtBQUwsQ0FBWXFOLFNBQVosQ0FBWDs7QUFDQSxVQUFLLENBQUNsTixJQUFOLEVBQWE7QUFDWDtBQUNEOztBQUNESCxXQUFLLENBQUMzRixJQUFOLENBQVk4RixJQUFaO0FBQ0FrTixlQUFTLElBQUlqQixTQUFiO0FBQ0E0RixVQUFJLElBQUk3UixJQUFJLENBQUN1RSxJQUFMLENBQVVhLFVBQWxCO0FBQ0Q7O0FBQ0QsV0FBT3ZGLEtBQVA7QUFDRCxHQWJELENBN1h5QyxDQTRZekM7QUFFQTs7O0FBQ0FuRyxPQUFLLENBQUMyVyxjQUFOLEdBQXVCLFlBQVc7QUFDaEMsUUFBSyxDQUFDLEtBQUtqUixPQUFMLENBQWFpTixPQUFkLElBQXlCLEtBQUtqTixPQUFMLENBQWE0RCxVQUF0QyxJQUFvRCxDQUFDLEtBQUtuRCxLQUFMLENBQVcxRyxNQUFyRSxFQUE4RTtBQUM1RTtBQUNEOztBQUNELFFBQUk0WSxhQUFhLEdBQUcsS0FBSzNTLE9BQUwsQ0FBYW1FLFdBQWpDO0FBQ0EsUUFBSXlPLFdBQVcsR0FBR0QsYUFBYSxHQUFHLGFBQUgsR0FBbUIsWUFBbEQ7QUFDQSxRQUFJRSxTQUFTLEdBQUdGLGFBQWEsR0FBRyxZQUFILEdBQWtCLGFBQS9DO0FBQ0EsUUFBSUcsWUFBWSxHQUFHLEtBQUtqUCxjQUFMLEdBQXNCLEtBQUs4TSxXQUFMLEdBQW1CeEwsSUFBbkIsQ0FBeUIwTixTQUF6QixDQUF6QyxDQVBnQyxDQVFoQzs7QUFDQSxRQUFJRSxnQkFBZ0IsR0FBR0QsWUFBWSxHQUFHLEtBQUszTixJQUFMLENBQVVDLFVBQWhELENBVGdDLENBVWhDOztBQUNBLFFBQUk0TixVQUFVLEdBQUcsS0FBSzlPLGNBQUwsR0FBc0IsS0FBS3pELEtBQUwsQ0FBVyxDQUFYLEVBQWMwRSxJQUFkLENBQW9CeU4sV0FBcEIsQ0FBdkM7QUFDQSxRQUFJN0csUUFBUSxHQUFHK0csWUFBWSxHQUFHLEtBQUszTixJQUFMLENBQVVDLFVBQVYsSUFBeUIsSUFBSSxLQUFLdUMsU0FBbEMsQ0FBOUIsQ0FaZ0MsQ0FhaEM7O0FBQ0EsU0FBSy9FLE1BQUwsQ0FBWWxGLE9BQVosQ0FBcUIsVUFBVTRQLEtBQVYsRUFBa0I7QUFDckMsVUFBS3lGLGdCQUFMLEVBQXdCO0FBQ3RCO0FBQ0F6RixhQUFLLENBQUM1SSxNQUFOLEdBQWVvTyxZQUFZLEdBQUcsS0FBS25MLFNBQW5DO0FBQ0QsT0FIRCxNQUdPO0FBQ0w7QUFDQTJGLGFBQUssQ0FBQzVJLE1BQU4sR0FBZTVDLElBQUksQ0FBQ2dLLEdBQUwsQ0FBVXdCLEtBQUssQ0FBQzVJLE1BQWhCLEVBQXdCc08sVUFBeEIsQ0FBZjtBQUNBMUYsYUFBSyxDQUFDNUksTUFBTixHQUFlNUMsSUFBSSxDQUFDQyxHQUFMLENBQVV1TCxLQUFLLENBQUM1SSxNQUFoQixFQUF3QnFILFFBQXhCLENBQWY7QUFDRDtBQUNGLEtBVEQsRUFTRyxJQVRIO0FBVUQsR0F4QkQsQ0EvWXlDLENBeWF6Qzs7QUFFQTs7Ozs7Ozs7QUFNQXpSLE9BQUssQ0FBQ3VLLGFBQU4sR0FBc0IsVUFBVXZILElBQVYsRUFBZ0JELEtBQWhCLEVBQXVCOUIsSUFBdkIsRUFBOEI7QUFDbEQsUUFBSTBYLFFBQVEsR0FBRzVWLEtBQUssR0FBRyxDQUFFQSxLQUFGLEVBQVVzQyxNQUFWLENBQWtCcEUsSUFBbEIsQ0FBSCxHQUE4QkEsSUFBbEQ7QUFDQSxTQUFLRCxTQUFMLENBQWdCZ0MsSUFBaEIsRUFBc0IyVixRQUF0Qjs7QUFFQSxRQUFLcFQsTUFBTSxJQUFJLEtBQUtvUCxRQUFwQixFQUErQjtBQUM3QjtBQUNBM1IsVUFBSSxJQUFJLEtBQUswQyxPQUFMLENBQWF1UCxxQkFBYixHQUFxQyxXQUFyQyxHQUFtRCxFQUEzRDtBQUNBLFVBQUkyRCxNQUFNLEdBQUc1VixJQUFiOztBQUNBLFVBQUtELEtBQUwsRUFBYTtBQUNYO0FBQ0EsWUFBSThWLE9BQU8sR0FBR3RULE1BQU0sQ0FBQ3VULEtBQVAsQ0FBYy9WLEtBQWQsQ0FBZDtBQUNBOFYsZUFBTyxDQUFDN1YsSUFBUixHQUFlQSxJQUFmO0FBQ0E0VixjQUFNLEdBQUdDLE9BQVQ7QUFDRDs7QUFDRCxXQUFLbEUsUUFBTCxDQUFjb0UsT0FBZCxDQUF1QkgsTUFBdkIsRUFBK0IzWCxJQUEvQjtBQUNEO0FBQ0YsR0FoQkQsQ0FqYnlDLENBbWN6Qzs7QUFFQTs7Ozs7OztBQUtBakIsT0FBSyxDQUFDdUksTUFBTixHQUFlLFVBQVV6SCxLQUFWLEVBQWlCa1ksTUFBakIsRUFBeUJDLFNBQXpCLEVBQXFDO0FBQ2xELFFBQUssQ0FBQyxLQUFLdkQsUUFBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUNENVUsU0FBSyxHQUFHd1csUUFBUSxDQUFFeFcsS0FBRixFQUFTLEVBQVQsQ0FBaEI7O0FBQ0EsU0FBS29ZLFdBQUwsQ0FBa0JwWSxLQUFsQjs7QUFFQSxRQUFLLEtBQUs0RSxPQUFMLENBQWE0RCxVQUFiLElBQTJCMFAsTUFBaEMsRUFBeUM7QUFDdkNsWSxXQUFLLEdBQUdRLEtBQUssQ0FBQ0ssTUFBTixDQUFjYixLQUFkLEVBQXFCLEtBQUt3SCxNQUFMLENBQVk3SSxNQUFqQyxDQUFSO0FBQ0QsS0FUaUQsQ0FVbEQ7OztBQUNBLFFBQUssQ0FBQyxLQUFLNkksTUFBTCxDQUFheEgsS0FBYixDQUFOLEVBQTZCO0FBQzNCO0FBQ0Q7O0FBQ0QsUUFBSXFZLFNBQVMsR0FBRyxLQUFLL1EsYUFBckI7QUFDQSxTQUFLQSxhQUFMLEdBQXFCdEgsS0FBckI7QUFDQSxTQUFLcVcsbUJBQUw7O0FBQ0EsUUFBSzhCLFNBQUwsRUFBaUI7QUFDZixXQUFLelEsd0JBQUw7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLQyxjQUFMO0FBQ0Q7O0FBQ0QsUUFBSyxLQUFLL0MsT0FBTCxDQUFhd1MsY0FBbEIsRUFBbUM7QUFDakMsV0FBSy9QLGNBQUw7QUFDRCxLQXhCaUQsQ0F5QmxEOzs7QUFDQSxTQUFLb0MsYUFBTCxDQUFvQixRQUFwQixFQUE4QixJQUE5QixFQUFvQyxDQUFFekosS0FBRixDQUFwQyxFQTFCa0QsQ0EyQmxEOztBQUNBLFFBQUtBLEtBQUssSUFBSXFZLFNBQWQsRUFBMEI7QUFDeEIsV0FBSzVPLGFBQUwsQ0FBb0IsUUFBcEIsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBRXpKLEtBQUYsQ0FBcEM7QUFDRCxLQTlCaUQsQ0ErQmxEOzs7QUFDQSxTQUFLeUosYUFBTCxDQUFtQixZQUFuQjtBQUNELEdBakNELENBMWN5QyxDQTZlekM7OztBQUNBdkssT0FBSyxDQUFDa1osV0FBTixHQUFvQixVQUFVcFksS0FBVixFQUFrQjtBQUNwQyxRQUFJNkYsR0FBRyxHQUFHLEtBQUsyQixNQUFMLENBQVk3SSxNQUF0QjtBQUNBLFFBQUkyWixVQUFVLEdBQUcsS0FBSzFULE9BQUwsQ0FBYTRELFVBQWIsSUFBMkIzQyxHQUFHLEdBQUcsQ0FBbEQ7O0FBQ0EsUUFBSyxDQUFDeVMsVUFBTixFQUFtQjtBQUNqQixhQUFPdFksS0FBUDtBQUNEOztBQUNELFFBQUl1WSxTQUFTLEdBQUcvWCxLQUFLLENBQUNLLE1BQU4sQ0FBY2IsS0FBZCxFQUFxQjZGLEdBQXJCLENBQWhCLENBTm9DLENBT3BDOztBQUNBLFFBQUl3TSxLQUFLLEdBQUczTCxJQUFJLENBQUNpSixHQUFMLENBQVU0SSxTQUFTLEdBQUcsS0FBS2pSLGFBQTNCLENBQVo7QUFDQSxRQUFJa1IsYUFBYSxHQUFHOVIsSUFBSSxDQUFDaUosR0FBTCxDQUFZNEksU0FBUyxHQUFHMVMsR0FBZCxHQUFzQixLQUFLeUIsYUFBckMsQ0FBcEI7QUFDQSxRQUFJbVIsaUJBQWlCLEdBQUcvUixJQUFJLENBQUNpSixHQUFMLENBQVk0SSxTQUFTLEdBQUcxUyxHQUFkLEdBQXNCLEtBQUt5QixhQUFyQyxDQUF4Qjs7QUFDQSxRQUFLLENBQUMsS0FBSzhKLFlBQU4sSUFBc0JvSCxhQUFhLEdBQUduRyxLQUEzQyxFQUFtRDtBQUNqRHJTLFdBQUssSUFBSTZGLEdBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSyxDQUFDLEtBQUt1TCxZQUFOLElBQXNCcUgsaUJBQWlCLEdBQUdwRyxLQUEvQyxFQUF1RDtBQUM1RHJTLFdBQUssSUFBSTZGLEdBQVQ7QUFDRCxLQWZtQyxDQWdCcEM7OztBQUNBLFFBQUs3RixLQUFLLEdBQUcsQ0FBYixFQUFpQjtBQUNmLFdBQUtrSSxDQUFMLElBQVUsS0FBS08sY0FBZjtBQUNELEtBRkQsTUFFTyxJQUFLekksS0FBSyxJQUFJNkYsR0FBZCxFQUFvQjtBQUN6QixXQUFLcUMsQ0FBTCxJQUFVLEtBQUtPLGNBQWY7QUFDRDtBQUNGLEdBdEJEOztBQXdCQXZKLE9BQUssQ0FBQ3daLFFBQU4sR0FBaUIsVUFBVVIsTUFBVixFQUFrQkMsU0FBbEIsRUFBOEI7QUFDN0MsU0FBSzFRLE1BQUwsQ0FBYSxLQUFLSCxhQUFMLEdBQXFCLENBQWxDLEVBQXFDNFEsTUFBckMsRUFBNkNDLFNBQTdDO0FBQ0QsR0FGRDs7QUFJQWpaLE9BQUssQ0FBQ3laLElBQU4sR0FBYSxVQUFVVCxNQUFWLEVBQWtCQyxTQUFsQixFQUE4QjtBQUN6QyxTQUFLMVEsTUFBTCxDQUFhLEtBQUtILGFBQUwsR0FBcUIsQ0FBbEMsRUFBcUM0USxNQUFyQyxFQUE2Q0MsU0FBN0M7QUFDRCxHQUZEOztBQUlBalosT0FBSyxDQUFDbVgsbUJBQU4sR0FBNEIsWUFBVztBQUNyQyxRQUFJbkUsS0FBSyxHQUFHLEtBQUsxSyxNQUFMLENBQWEsS0FBS0YsYUFBbEIsQ0FBWixDQURxQyxDQUVyQzs7QUFDQSxRQUFLLENBQUM0SyxLQUFOLEVBQWM7QUFDWjtBQUNELEtBTG9DLENBTXJDOzs7QUFDQSxTQUFLMEcscUJBQUwsR0FQcUMsQ0FRckM7O0FBQ0EsU0FBS2xQLGFBQUwsR0FBcUJ3SSxLQUFyQjtBQUNBQSxTQUFLLENBQUN6SyxNQUFOO0FBQ0EsU0FBS29SLGFBQUwsR0FBcUIzRyxLQUFLLENBQUM3TSxLQUEzQjtBQUNBLFNBQUt5VCxnQkFBTCxHQUF3QjVHLEtBQUssQ0FBQzZHLGVBQU4sRUFBeEIsQ0FacUMsQ0FhckM7QUFDQTs7QUFDQSxTQUFLQyxZQUFMLEdBQW9COUcsS0FBSyxDQUFDN00sS0FBTixDQUFZLENBQVosQ0FBcEI7QUFDQSxTQUFLNkIsZUFBTCxHQUF1QixLQUFLNFIsZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FBdkI7QUFDRCxHQWpCRDs7QUFtQkE1WixPQUFLLENBQUMwWixxQkFBTixHQUE4QixZQUFXO0FBQ3ZDLFFBQUssS0FBS2xQLGFBQVYsRUFBMEI7QUFDeEIsV0FBS0EsYUFBTCxDQUFtQm9DLFFBQW5CO0FBQ0Q7QUFDRixHQUpEOztBQU1BNU0sT0FBSyxDQUFDZ1csa0JBQU4sR0FBMkIsWUFBVztBQUNwQyxRQUFJK0QsWUFBWSxHQUFHLEtBQUtyVSxPQUFMLENBQWFxVSxZQUFoQyxDQURvQyxDQUVwQzs7QUFDQSxRQUFLLEtBQUs5RCxlQUFWLEVBQTRCO0FBQzFCLFdBQUsxTixNQUFMLENBQWEsS0FBS0gsYUFBbEIsRUFBaUMsS0FBakMsRUFBd0MsSUFBeEM7QUFDQTtBQUNELEtBTm1DLENBT3BDOzs7QUFDQSxRQUFLMlIsWUFBWSxJQUFJLE9BQU9BLFlBQVAsSUFBdUIsUUFBNUMsRUFBdUQ7QUFDckQsVUFBSXpULElBQUksR0FBRyxLQUFLMFQsU0FBTCxDQUFnQkQsWUFBaEIsQ0FBWDs7QUFDQSxVQUFLelQsSUFBTCxFQUFZO0FBQ1YsYUFBSzJULFVBQUwsQ0FBaUJGLFlBQWpCLEVBQStCLEtBQS9CLEVBQXNDLElBQXRDO0FBQ0E7QUFDRDtBQUNGOztBQUVELFFBQUlqWixLQUFLLEdBQUcsQ0FBWixDQWhCb0MsQ0FpQnBDOztBQUNBLFFBQUtpWixZQUFZLElBQUksS0FBS3pSLE1BQUwsQ0FBYXlSLFlBQWIsQ0FBckIsRUFBbUQ7QUFDakRqWixXQUFLLEdBQUdpWixZQUFSO0FBQ0QsS0FwQm1DLENBcUJwQzs7O0FBQ0EsU0FBS3hSLE1BQUwsQ0FBYXpILEtBQWIsRUFBb0IsS0FBcEIsRUFBMkIsSUFBM0I7QUFDRCxHQXZCRDtBQXlCQTs7Ozs7O0FBSUFkLE9BQUssQ0FBQ2lhLFVBQU4sR0FBbUIsVUFBVUMsS0FBVixFQUFpQmxCLE1BQWpCLEVBQXlCQyxTQUF6QixFQUFxQztBQUN0RDtBQUNBLFFBQUkzUyxJQUFJLEdBQUcsS0FBSzBULFNBQUwsQ0FBZ0JFLEtBQWhCLENBQVg7O0FBQ0EsUUFBSyxDQUFDNVQsSUFBTixFQUFhO0FBQ1g7QUFDRDs7QUFFRCxRQUFJeEYsS0FBSyxHQUFHLEtBQUt1SCxpQkFBTCxDQUF3Qi9CLElBQXhCLENBQVo7QUFDQSxTQUFLaUMsTUFBTCxDQUFhekgsS0FBYixFQUFvQmtZLE1BQXBCLEVBQTRCQyxTQUE1QjtBQUNELEdBVEQ7O0FBV0FqWixPQUFLLENBQUNxSSxpQkFBTixHQUEwQixVQUFVL0IsSUFBVixFQUFpQjtBQUN6QztBQUNBLFNBQU0sSUFBSTlHLENBQUMsR0FBQyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLOEksTUFBTCxDQUFZN0ksTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNkM7QUFDM0MsVUFBSXdULEtBQUssR0FBRyxLQUFLMUssTUFBTCxDQUFZOUksQ0FBWixDQUFaO0FBQ0EsVUFBSXNCLEtBQUssR0FBR2tTLEtBQUssQ0FBQzdNLEtBQU4sQ0FBWTVGLE9BQVosQ0FBcUIrRixJQUFyQixDQUFaOztBQUNBLFVBQUt4RixLQUFLLElBQUksQ0FBQyxDQUFmLEVBQW1CO0FBQ2pCLGVBQU90QixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBVEQsQ0Eva0J5QyxDQTBsQnpDOztBQUVBOzs7Ozs7O0FBS0FRLE9BQUssQ0FBQzJILE9BQU4sR0FBZ0IsVUFBVS9ILElBQVYsRUFBaUI7QUFDL0I7QUFDQSxTQUFNLElBQUlKLENBQUMsR0FBQyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLMkcsS0FBTCxDQUFXMUcsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBNEM7QUFDMUMsVUFBSThHLElBQUksR0FBRyxLQUFLSCxLQUFMLENBQVczRyxDQUFYLENBQVg7O0FBQ0EsVUFBSzhHLElBQUksQ0FBQ0UsT0FBTCxJQUFnQjVHLElBQXJCLEVBQTRCO0FBQzFCLGVBQU8wRyxJQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBUkQ7QUFVQTs7Ozs7OztBQUtBdEcsT0FBSyxDQUFDc0gsUUFBTixHQUFpQixVQUFVcEUsS0FBVixFQUFrQjtBQUNqQ0EsU0FBSyxHQUFHNUIsS0FBSyxDQUFDVSxTQUFOLENBQWlCa0IsS0FBakIsQ0FBUjtBQUNBLFFBQUlpRCxLQUFLLEdBQUcsRUFBWjtBQUNBakQsU0FBSyxDQUFDRSxPQUFOLENBQWUsVUFBVXhELElBQVYsRUFBaUI7QUFDOUIsVUFBSTBHLElBQUksR0FBRyxLQUFLcUIsT0FBTCxDQUFjL0gsSUFBZCxDQUFYOztBQUNBLFVBQUswRyxJQUFMLEVBQVk7QUFDVkgsYUFBSyxDQUFDM0YsSUFBTixDQUFZOEYsSUFBWjtBQUNEO0FBQ0YsS0FMRCxFQUtHLElBTEg7QUFNQSxXQUFPSCxLQUFQO0FBQ0QsR0FWRDtBQVlBOzs7Ozs7QUFJQW5HLE9BQUssQ0FBQzZaLGVBQU4sR0FBd0IsWUFBVztBQUNqQyxXQUFPLEtBQUsxVCxLQUFMLENBQVdpUSxHQUFYLENBQWdCLFVBQVU5UCxJQUFWLEVBQWlCO0FBQ3RDLGFBQU9BLElBQUksQ0FBQ0UsT0FBWjtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7QUFNQTs7Ozs7OztBQUtBeEcsT0FBSyxDQUFDc1QsYUFBTixHQUFzQixVQUFVMVQsSUFBVixFQUFpQjtBQUNyQztBQUNBLFFBQUkwRyxJQUFJLEdBQUcsS0FBS3FCLE9BQUwsQ0FBYy9ILElBQWQsQ0FBWDs7QUFDQSxRQUFLMEcsSUFBTCxFQUFZO0FBQ1YsYUFBT0EsSUFBUDtBQUNELEtBTG9DLENBTXJDOzs7QUFDQTFHLFFBQUksR0FBRzBCLEtBQUssQ0FBQ2tCLFNBQU4sQ0FBaUI1QyxJQUFqQixFQUF1QixzQkFBdkIsQ0FBUDtBQUNBLFdBQU8sS0FBSytILE9BQUwsQ0FBYy9ILElBQWQsQ0FBUDtBQUNELEdBVEQ7QUFXQTs7Ozs7Ozs7QUFNQUksT0FBSyxDQUFDbWEsdUJBQU4sR0FBZ0MsVUFBVUMsUUFBVixFQUFvQnRaLEtBQXBCLEVBQTRCO0FBQzFELFFBQUssQ0FBQ3NaLFFBQU4sRUFBaUI7QUFDZixhQUFPLEtBQUs1UCxhQUFMLENBQW1CcVAsZUFBbkIsRUFBUDtBQUNEOztBQUNEL1ksU0FBSyxHQUFHQSxLQUFLLEtBQUtxQixTQUFWLEdBQXNCLEtBQUtpRyxhQUEzQixHQUEyQ3RILEtBQW5EO0FBRUEsUUFBSTZGLEdBQUcsR0FBRyxLQUFLMkIsTUFBTCxDQUFZN0ksTUFBdEI7O0FBQ0EsUUFBSyxJQUFNMmEsUUFBUSxHQUFHLENBQWpCLElBQXdCelQsR0FBN0IsRUFBbUM7QUFDakMsYUFBTyxLQUFLa1QsZUFBTCxFQUFQO0FBQ0Q7O0FBRUQsUUFBSWxFLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxTQUFNLElBQUluVyxDQUFDLEdBQUdzQixLQUFLLEdBQUdzWixRQUF0QixFQUFnQzVhLENBQUMsSUFBSXNCLEtBQUssR0FBR3NaLFFBQTdDLEVBQXdENWEsQ0FBQyxFQUF6RCxFQUE4RDtBQUM1RCxVQUFJdVQsVUFBVSxHQUFHLEtBQUtyTixPQUFMLENBQWE0RCxVQUFiLEdBQTBCaEksS0FBSyxDQUFDSyxNQUFOLENBQWNuQyxDQUFkLEVBQWlCbUgsR0FBakIsQ0FBMUIsR0FBbURuSCxDQUFwRTtBQUNBLFVBQUl3VCxLQUFLLEdBQUcsS0FBSzFLLE1BQUwsQ0FBYXlLLFVBQWIsQ0FBWjs7QUFDQSxVQUFLQyxLQUFMLEVBQWE7QUFDWDJDLGlCQUFTLEdBQUdBLFNBQVMsQ0FBQ3RRLE1BQVYsQ0FBa0IyTixLQUFLLENBQUM2RyxlQUFOLEVBQWxCLENBQVo7QUFDRDtBQUNGOztBQUNELFdBQU9sRSxTQUFQO0FBQ0QsR0FwQkQ7QUFzQkE7Ozs7OztBQUlBM1YsT0FBSyxDQUFDZ2EsU0FBTixHQUFrQixVQUFVbmEsUUFBVixFQUFxQjtBQUNyQyxRQUFLLE9BQU9BLFFBQVAsSUFBbUIsUUFBeEIsRUFBbUM7QUFDakM7QUFDQSxhQUFPLEtBQUtzRyxLQUFMLENBQVl0RyxRQUFaLENBQVA7QUFDRDs7QUFDRCxRQUFLLE9BQU9BLFFBQVAsSUFBbUIsUUFBeEIsRUFBbUM7QUFDakM7QUFDQSxVQUFLQSxRQUFRLENBQUM0RSxLQUFULENBQWUsZUFBZixDQUFMLEVBQXVDO0FBQ3JDO0FBQ0QsT0FKZ0MsQ0FLakM7OztBQUNBNUUsY0FBUSxHQUFHLEtBQUsyRyxPQUFMLENBQWEzRCxhQUFiLENBQTRCaEQsUUFBNUIsQ0FBWDtBQUNELEtBWm9DLENBYXJDOzs7QUFDQSxXQUFPLEtBQUs4SCxPQUFMLENBQWM5SCxRQUFkLENBQVA7QUFDRCxHQWZELENBdHJCeUMsQ0F1c0J6Qzs7O0FBRUFHLE9BQUssQ0FBQ3FhLFFBQU4sR0FBaUIsWUFBVztBQUMxQixTQUFLclosU0FBTCxDQUFlLFVBQWY7QUFDRCxHQUZELENBenNCeUMsQ0E2c0J6Qzs7O0FBQ0FoQixPQUFLLENBQUNzYSxrQkFBTixHQUEyQixVQUFVdlgsS0FBVixFQUFrQjtBQUMzQztBQUNBLFFBQUtBLEtBQUssQ0FBQ0MsSUFBTixJQUFjLFlBQW5CLEVBQWtDO0FBQ2hDRCxXQUFLLENBQUN1TixjQUFOO0FBQ0Q7O0FBQ0QsU0FBS0osS0FBTDtBQUNELEdBTkQsQ0E5c0J5QyxDQXN0QnpDOzs7QUFFQWxRLE9BQUssQ0FBQ3VhLFFBQU4sR0FBaUIsWUFBVztBQUMxQixTQUFLaEYsUUFBTDtBQUNBLFNBQUtMLE1BQUw7QUFDRCxHQUhEOztBQUtBNVQsT0FBSyxDQUFDa0MsY0FBTixDQUFzQnlDLFFBQXRCLEVBQWdDLFVBQWhDLEVBQTRDLEdBQTVDOztBQUVBakcsT0FBSyxDQUFDa1YsTUFBTixHQUFlLFlBQVc7QUFDeEIsUUFBSyxDQUFDLEtBQUtRLFFBQVgsRUFBc0I7QUFDcEI7QUFDRDs7QUFDRCxTQUFLOU4sT0FBTCxHQUp3QixDQUt4Qjs7QUFDQSxRQUFLLEtBQUtsQyxPQUFMLENBQWE0RCxVQUFsQixFQUErQjtBQUM3QixXQUFLTixDQUFMLEdBQVMxSCxLQUFLLENBQUNLLE1BQU4sQ0FBYyxLQUFLcUgsQ0FBbkIsRUFBc0IsS0FBS08sY0FBM0IsQ0FBVDtBQUNEOztBQUNELFNBQUs0TSxhQUFMOztBQUNBLFNBQUtqTyxrQkFBTDs7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS25ILFNBQUwsQ0FBZSxRQUFmLEVBWndCLENBYXhCO0FBQ0E7O0FBQ0EsUUFBSWdILGVBQWUsR0FBRyxLQUFLNFIsZ0JBQUwsSUFBeUIsS0FBS0EsZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FBL0M7QUFDQSxTQUFLSyxVQUFMLENBQWlCalMsZUFBakIsRUFBa0MsS0FBbEMsRUFBeUMsSUFBekM7QUFDRCxHQWpCRCxDQS90QnlDLENBa3ZCekM7OztBQUNBaEksT0FBSyxDQUFDdVYsUUFBTixHQUFpQixZQUFXO0FBQzFCLFFBQUlpRixXQUFXLEdBQUcsS0FBSzlVLE9BQUwsQ0FBYTZQLFFBQS9COztBQUNBLFFBQUssQ0FBQ2lGLFdBQU4sRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxRQUFJQyxZQUFZLEdBQUd0RyxnQkFBZ0IsQ0FBRSxLQUFLM04sT0FBUCxFQUFnQixRQUFoQixDQUFoQixDQUEyQ2tVLE9BQTlELENBTjBCLENBTzFCOztBQUNBLFFBQUtELFlBQVksQ0FBQ2xhLE9BQWIsQ0FBcUIsVUFBckIsS0FBb0MsQ0FBQyxDQUExQyxFQUE4QztBQUM1QyxXQUFLaVYsUUFBTDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUttRixVQUFMO0FBQ0Q7QUFDRixHQWJELENBbnZCeUMsQ0Frd0J6QztBQUVBOzs7QUFDQTNhLE9BQUssQ0FBQzRhLFNBQU4sR0FBa0IsVUFBVTdYLEtBQVYsRUFBa0I7QUFDbEM7QUFDQSxRQUFJOFgsWUFBWSxHQUFHblksUUFBUSxDQUFDME0sYUFBVCxJQUEwQjFNLFFBQVEsQ0FBQzBNLGFBQVQsSUFBMEIsS0FBSzVJLE9BQTVFOztBQUNBLFFBQUssQ0FBQyxLQUFLZCxPQUFMLENBQWFvUCxhQUFkLElBQThCK0YsWUFBbkMsRUFBa0Q7QUFDaEQ7QUFDRDs7QUFFRCxRQUFJQyxPQUFPLEdBQUc3VSxRQUFRLENBQUM4VSxnQkFBVCxDQUEyQmhZLEtBQUssQ0FBQ2lZLE9BQWpDLENBQWQ7O0FBQ0EsUUFBS0YsT0FBTCxFQUFlO0FBQ2JBLGFBQU8sQ0FBQ3pZLElBQVIsQ0FBYyxJQUFkO0FBQ0Q7QUFDRixHQVhEOztBQWFBNEQsVUFBUSxDQUFDOFUsZ0JBQVQsR0FBNEI7QUFDMUI7QUFDQSxRQUFJLGFBQVc7QUFDYixVQUFJRSxVQUFVLEdBQUcsS0FBS3ZWLE9BQUwsQ0FBYW1FLFdBQWIsR0FBMkIsTUFBM0IsR0FBb0MsVUFBckQ7QUFDQSxXQUFLd1EsUUFBTDtBQUNBLFdBQU1ZLFVBQU47QUFDRCxLQU55QjtBQU8xQjtBQUNBLFFBQUksYUFBVztBQUNiLFVBQUlDLFdBQVcsR0FBRyxLQUFLeFYsT0FBTCxDQUFhbUUsV0FBYixHQUEyQixVQUEzQixHQUF3QyxNQUExRDtBQUNBLFdBQUt3USxRQUFMO0FBQ0EsV0FBTWEsV0FBTjtBQUNEO0FBWnlCLEdBQTVCLENBbHhCeUMsQ0FpeUJ6Qzs7QUFFQWxiLE9BQUssQ0FBQ2tRLEtBQU4sR0FBYyxZQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFJaUwsV0FBVyxHQUFHcmMsTUFBTSxDQUFDa1YsV0FBekI7QUFDQSxTQUFLeE4sT0FBTCxDQUFhMEosS0FBYixDQUFtQjtBQUFFa0wsbUJBQWEsRUFBRTtBQUFqQixLQUFuQixFQUp1QixDQUt2Qjs7QUFDQSxRQUFLdGMsTUFBTSxDQUFDa1YsV0FBUCxJQUFzQm1ILFdBQTNCLEVBQXlDO0FBQ3ZDcmMsWUFBTSxDQUFDdWMsUUFBUCxDQUFpQnZjLE1BQU0sQ0FBQ2lWLFdBQXhCLEVBQXFDb0gsV0FBckM7QUFDRDtBQUNGLEdBVEQsQ0FueUJ5QyxDQTh5QnpDO0FBRUE7OztBQUNBbmIsT0FBSyxDQUFDMmEsVUFBTixHQUFtQixZQUFXO0FBQzVCLFFBQUssQ0FBQyxLQUFLakYsUUFBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUNELFNBQUtsUCxPQUFMLENBQWE4RyxTQUFiLENBQXVCakcsTUFBdkIsQ0FBOEIsa0JBQTlCO0FBQ0EsU0FBS2IsT0FBTCxDQUFhOEcsU0FBYixDQUF1QmpHLE1BQXZCLENBQThCLGNBQTlCO0FBQ0EsU0FBS3FTLHFCQUFMLEdBTjRCLENBTzVCOztBQUNBLFNBQUt2VCxLQUFMLENBQVcvQyxPQUFYLENBQW9CLFVBQVVrRCxJQUFWLEVBQWlCO0FBQ25DQSxVQUFJLENBQUNxRyxPQUFMO0FBQ0QsS0FGRDtBQUdBLFNBQUtuRyxPQUFMLENBQWFpSCxXQUFiLENBQTBCLEtBQUtlLFFBQS9CLEVBWDRCLENBWTVCOztBQUNBNEYsZ0JBQVksQ0FBRSxLQUFLdk4sTUFBTCxDQUFZZ1AsUUFBZCxFQUF3QixLQUFLclAsT0FBN0IsQ0FBWjs7QUFDQSxRQUFLLEtBQUtkLE9BQUwsQ0FBYW9QLGFBQWxCLEVBQWtDO0FBQ2hDLFdBQUt0TyxPQUFMLENBQWFnSCxlQUFiLENBQTZCLFVBQTdCO0FBQ0EsV0FBS2hILE9BQUwsQ0FBYXNLLG1CQUFiLENBQWtDLFNBQWxDLEVBQTZDLElBQTdDO0FBQ0QsS0FqQjJCLENBa0I1Qjs7O0FBQ0EsU0FBSzRFLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLMVUsU0FBTCxDQUFlLFlBQWY7QUFDRCxHQXJCRDs7QUF1QkFoQixPQUFLLENBQUMyTSxPQUFOLEdBQWdCLFlBQVc7QUFDekIsU0FBS2dPLFVBQUw7QUFDQTdiLFVBQU0sQ0FBQ2dTLG1CQUFQLENBQTRCLFFBQTVCLEVBQXNDLElBQXRDO0FBQ0EsU0FBS3pQLE1BQUw7QUFDQSxTQUFLTCxTQUFMLENBQWUsU0FBZjs7QUFDQSxRQUFLdUUsTUFBTSxJQUFJLEtBQUtvUCxRQUFwQixFQUErQjtBQUM3QnBQLFlBQU0sQ0FBQytWLFVBQVAsQ0FBbUIsS0FBSzlVLE9BQXhCLEVBQWlDLFVBQWpDO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFLQSxPQUFMLENBQWFpTyxZQUFwQjtBQUNBLFdBQU9GLFNBQVMsQ0FBRSxLQUFLYSxJQUFQLENBQWhCO0FBQ0QsR0FWRCxDQXgwQnlDLENBbzFCekM7OztBQUVBOVQsT0FBSyxDQUFDQyxNQUFOLENBQWN2QixLQUFkLEVBQXFCa1UsZ0JBQXJCLEVBdDFCeUMsQ0F3MUJ6Qzs7QUFFQTs7Ozs7O0FBS0FqTyxVQUFRLENBQUNELElBQVQsR0FBZ0IsVUFBVXBHLElBQVYsRUFBaUI7QUFDL0JBLFFBQUksR0FBRzBCLEtBQUssQ0FBQ3NCLGVBQU4sQ0FBdUJoRCxJQUF2QixDQUFQO0FBQ0EsUUFBSXVWLEVBQUUsR0FBR3ZWLElBQUksSUFBSUEsSUFBSSxDQUFDNlUsWUFBdEI7QUFDQSxXQUFPVSxFQUFFLElBQUlaLFNBQVMsQ0FBRVksRUFBRixDQUF0QjtBQUNELEdBSkQ7O0FBTUE3VCxPQUFLLENBQUN3RCxRQUFOLENBQWdCbUIsUUFBaEIsRUFBMEIsVUFBMUI7O0FBRUEsTUFBS1YsTUFBTSxJQUFJQSxNQUFNLENBQUNnVyxPQUF0QixFQUFnQztBQUM5QmhXLFVBQU0sQ0FBQ2dXLE9BQVAsQ0FBZ0IsVUFBaEIsRUFBNEJ0VixRQUE1QjtBQUNELEdBejJCd0MsQ0EyMkJ6Qzs7O0FBQ0FBLFVBQVEsQ0FBQ3VWLFNBQVQsR0FBcUIsVUFBVUMsRUFBVixFQUFlO0FBQ2xDbFcsVUFBTSxHQUFHa1csRUFBVDtBQUNELEdBRkQ7O0FBSUF4VixVQUFRLENBQUNzRyxJQUFULEdBQWdCQSxJQUFoQjtBQUNBdEcsVUFBUSxDQUFDZ08sS0FBVCxHQUFpQkEsS0FBakI7QUFFQSxTQUFPaE8sUUFBUDtBQUVDLENBLzVCQyxDQUFGLEM7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7OztBQVdBLENBQUUsVUFBVW5ILE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04sK0VBRE0sRUFFTix1RUFGTSxFQUdOLCtGQUhNLEVBSU4saUZBSk0sRUFLTiwyRUFMTSxFQU1OLDZGQU5NLEVBT04sK0VBUE0sQ0FBRixvQ0FRSEQsT0FSRztBQUFBO0FBQUE7QUFBQSxvR0FBTjtBQVNELEdBWEQsTUFXTyxFQVdOO0FBRUYsQ0EzQkQsRUEyQklELE1BM0JKLEVBMkJZLFNBQVNDLE9BQVQsQ0FBa0JrSCxRQUFsQixFQUE2QjtBQUN2QztBQUNBLFNBQU9BLFFBQVA7QUFDRCxDQTlCRCxFOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDRSxXQUFVbkgsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQ0E7QUFDQSxNQUFLLElBQUwsRUFBaUQ7QUFDL0M7QUFDQUMscUNBQVEsQ0FDTiwrRUFETSxFQUVOLHlGQUZNLENBQUYsbUNBR0gsVUFBVWlILFFBQVYsRUFBb0IzRSxLQUFwQixFQUE0QjtBQUM3QixhQUFPdkMsT0FBTyxDQUFFRCxNQUFGLEVBQVVtSCxRQUFWLEVBQW9CM0UsS0FBcEIsQ0FBZDtBQUNELEtBTEs7QUFBQSxvR0FBTjtBQU1ELEdBUkQsTUFRTyxFQWNOO0FBRUYsQ0EzQkMsRUEyQkN4QyxNQTNCRCxFQTJCUyxTQUFTQyxPQUFULENBQWtCRCxNQUFsQixFQUEwQm1ILFFBQTFCLEVBQW9DM0UsS0FBcEMsRUFBNEM7QUFDdkQ7O0FBRUEyRSxVQUFRLENBQUM2SCxhQUFULENBQXVCdE4sSUFBdkIsQ0FBNEIsaUJBQTVCO0FBQ0EsTUFBSVIsS0FBSyxHQUFHaUcsUUFBUSxDQUFDN0csU0FBckI7O0FBRUFZLE9BQUssQ0FBQzBiLGVBQU4sR0FBd0IsWUFBVztBQUNqQyxTQUFLemIsRUFBTCxDQUFTLFFBQVQsRUFBbUIsS0FBSzBiLFFBQXhCO0FBQ0QsR0FGRDs7QUFJQTNiLE9BQUssQ0FBQzJiLFFBQU4sR0FBaUIsWUFBVztBQUMxQixRQUFJQSxRQUFRLEdBQUcsS0FBS2pXLE9BQUwsQ0FBYWlXLFFBQTVCOztBQUNBLFFBQUssQ0FBQ0EsUUFBTixFQUFpQjtBQUNmO0FBQ0QsS0FKeUIsQ0FLMUI7OztBQUNBLFFBQUl2QixRQUFRLEdBQUcsT0FBT3VCLFFBQVAsSUFBbUIsUUFBbkIsR0FBOEJBLFFBQTlCLEdBQXlDLENBQXhEO0FBQ0EsUUFBSWhHLFNBQVMsR0FBRyxLQUFLd0UsdUJBQUwsQ0FBOEJDLFFBQTlCLENBQWhCLENBUDBCLENBUTFCOztBQUNBLFFBQUl3QixVQUFVLEdBQUcsRUFBakI7QUFDQWpHLGFBQVMsQ0FBQ3ZTLE9BQVYsQ0FBbUIsVUFBVW1RLFFBQVYsRUFBcUI7QUFDdEMsVUFBSXNJLGNBQWMsR0FBR0MsaUJBQWlCLENBQUV2SSxRQUFGLENBQXRDO0FBQ0FxSSxnQkFBVSxHQUFHQSxVQUFVLENBQUN2VyxNQUFYLENBQW1Cd1csY0FBbkIsQ0FBYjtBQUNELEtBSEQsRUFWMEIsQ0FjMUI7O0FBQ0FELGNBQVUsQ0FBQ3hZLE9BQVgsQ0FBb0IsVUFBVTJZLEdBQVYsRUFBZ0I7QUFDbEMsVUFBSUMsVUFBSixDQUFnQkQsR0FBaEIsRUFBcUIsSUFBckI7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdELEdBbEJEOztBQW9CQSxXQUFTRCxpQkFBVCxDQUE0QnZJLFFBQTVCLEVBQXVDO0FBQ3JDO0FBQ0EsUUFBS0EsUUFBUSxDQUFDdEQsUUFBVCxJQUFxQixLQUExQixFQUFrQztBQUNoQyxVQUFJZ00sWUFBWSxHQUFHMUksUUFBUSxDQUFDOU4sWUFBVCxDQUFzQix3QkFBdEIsQ0FBbkI7QUFDQSxVQUFJeVcsT0FBTyxHQUFHM0ksUUFBUSxDQUFDOU4sWUFBVCxDQUFzQiw0QkFBdEIsQ0FBZDtBQUNBLFVBQUkwVyxVQUFVLEdBQUc1SSxRQUFRLENBQUM5TixZQUFULENBQXNCLCtCQUF0QixDQUFqQjs7QUFDQSxVQUFLd1csWUFBWSxJQUFJQyxPQUFoQixJQUEyQkMsVUFBaEMsRUFBNkM7QUFDM0MsZUFBTyxDQUFFNUksUUFBRixDQUFQO0FBQ0Q7QUFDRixLQVRvQyxDQVVyQzs7O0FBQ0EsUUFBSTZJLFlBQVksR0FBRyxrQ0FDakIscUVBREY7QUFFQSxRQUFJQyxJQUFJLEdBQUc5SSxRQUFRLENBQUNoUSxnQkFBVCxDQUEyQjZZLFlBQTNCLENBQVg7QUFDQSxXQUFPOWEsS0FBSyxDQUFDVSxTQUFOLENBQWlCcWEsSUFBakIsQ0FBUDtBQUNELEdBN0NzRCxDQStDdkQ7O0FBRUE7Ozs7O0FBR0EsV0FBU0wsVUFBVCxDQUFxQkQsR0FBckIsRUFBMEJPLFFBQTFCLEVBQXFDO0FBQ25DLFNBQUtQLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtPLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsSUFBTDtBQUNEOztBQUVEUCxZQUFVLENBQUM1YyxTQUFYLENBQXFCMEQsV0FBckIsR0FBbUN4QixLQUFLLENBQUN3QixXQUF6Qzs7QUFFQWtaLFlBQVUsQ0FBQzVjLFNBQVgsQ0FBcUJtZCxJQUFyQixHQUE0QixZQUFXO0FBQ3JDLFNBQUtSLEdBQUwsQ0FBUzFYLGdCQUFULENBQTJCLE1BQTNCLEVBQW1DLElBQW5DO0FBQ0EsU0FBSzBYLEdBQUwsQ0FBUzFYLGdCQUFULENBQTJCLE9BQTNCLEVBQW9DLElBQXBDLEVBRnFDLENBR3JDOztBQUNBLFFBQUltWSxHQUFHLEdBQUcsS0FBS1QsR0FBTCxDQUFTdFcsWUFBVCxDQUFzQix3QkFBdEIsS0FDUixLQUFLc1csR0FBTCxDQUFTdFcsWUFBVCxDQUFzQiw0QkFBdEIsQ0FERjtBQUVBLFFBQUlnWCxNQUFNLEdBQUcsS0FBS1YsR0FBTCxDQUFTdFcsWUFBVCxDQUFzQiwrQkFBdEIsQ0FBYixDQU5xQyxDQU9yQzs7QUFDQSxTQUFLc1csR0FBTCxDQUFTUyxHQUFULEdBQWVBLEdBQWY7O0FBQ0EsUUFBS0MsTUFBTCxFQUFjO0FBQ1osV0FBS1YsR0FBTCxDQUFTclAsWUFBVCxDQUF1QixRQUF2QixFQUFpQytQLE1BQWpDO0FBQ0QsS0FYb0MsQ0FZckM7OztBQUNBLFNBQUtWLEdBQUwsQ0FBU3ZPLGVBQVQsQ0FBeUIsd0JBQXpCO0FBQ0EsU0FBS3VPLEdBQUwsQ0FBU3ZPLGVBQVQsQ0FBeUIsNEJBQXpCO0FBQ0EsU0FBS3VPLEdBQUwsQ0FBU3ZPLGVBQVQsQ0FBeUIsK0JBQXpCO0FBQ0QsR0FoQkQ7O0FBa0JBd08sWUFBVSxDQUFDNWMsU0FBWCxDQUFxQnNkLE1BQXJCLEdBQThCLFVBQVUzWixLQUFWLEVBQWtCO0FBQzlDLFNBQUs0WixRQUFMLENBQWU1WixLQUFmLEVBQXNCLHFCQUF0QjtBQUNELEdBRkQ7O0FBSUFpWixZQUFVLENBQUM1YyxTQUFYLENBQXFCd2QsT0FBckIsR0FBK0IsVUFBVTdaLEtBQVYsRUFBa0I7QUFDL0MsU0FBSzRaLFFBQUwsQ0FBZTVaLEtBQWYsRUFBc0Isb0JBQXRCO0FBQ0QsR0FGRDs7QUFJQWlaLFlBQVUsQ0FBQzVjLFNBQVgsQ0FBcUJ1ZCxRQUFyQixHQUFnQyxVQUFVNVosS0FBVixFQUFpQitDLFNBQWpCLEVBQTZCO0FBQzNEO0FBQ0EsU0FBS2lXLEdBQUwsQ0FBU2pMLG1CQUFULENBQThCLE1BQTlCLEVBQXNDLElBQXRDO0FBQ0EsU0FBS2lMLEdBQUwsQ0FBU2pMLG1CQUFULENBQThCLE9BQTlCLEVBQXVDLElBQXZDO0FBRUEsUUFBSXhLLElBQUksR0FBRyxLQUFLZ1csUUFBTCxDQUFjaEosYUFBZCxDQUE2QixLQUFLeUksR0FBbEMsQ0FBWDtBQUNBLFFBQUl4SSxRQUFRLEdBQUdqTixJQUFJLElBQUlBLElBQUksQ0FBQ0UsT0FBNUI7QUFDQSxTQUFLOFYsUUFBTCxDQUFjNVUsY0FBZCxDQUE4QjZMLFFBQTlCO0FBRUEsU0FBS3dJLEdBQUwsQ0FBU3pPLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXdCekgsU0FBeEI7QUFDQSxTQUFLd1csUUFBTCxDQUFjL1IsYUFBZCxDQUE2QixVQUE3QixFQUF5Q3hILEtBQXpDLEVBQWdEd1EsUUFBaEQ7QUFDRCxHQVhELENBdEZ1RCxDQW1HdkQ7OztBQUVBdE4sVUFBUSxDQUFDK1YsVUFBVCxHQUFzQkEsVUFBdEI7QUFFQSxTQUFPL1YsUUFBUDtBQUVDLENBcElDLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0UsV0FBVW5ILE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04sK0VBRE0sRUFFTiwyRkFGTSxFQUdOLHlGQUhNLENBQUYsbUNBSUgsVUFBVWlILFFBQVYsRUFBb0I0VyxVQUFwQixFQUFnQ3ZiLEtBQWhDLEVBQXdDO0FBQ3pDLGFBQU92QyxPQUFPLENBQUVELE1BQUYsRUFBVW1ILFFBQVYsRUFBb0I0VyxVQUFwQixFQUFnQ3ZiLEtBQWhDLENBQWQ7QUFDRCxLQU5LO0FBQUEsb0dBQU47QUFPRCxHQVRELE1BU08sRUFnQk47QUFFRixDQTlCQyxFQThCQ3hDLE1BOUJELEVBOEJTLFNBQVNDLE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCbUgsUUFBMUIsRUFBb0M0VyxVQUFwQyxFQUFnRHZiLEtBQWhELEVBQXdEO0FBRW5FO0FBRUE7O0FBRUEsV0FBU3diLFFBQVQsQ0FBbUJ0USxNQUFuQixFQUE0QjtBQUMxQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBQ0EsU0FBS3FJLE9BQUw7QUFDRDs7QUFFRGlJLFVBQVEsQ0FBQzFkLFNBQVQsR0FBcUIyZCxNQUFNLENBQUN0USxNQUFQLENBQWVvUSxVQUFVLENBQUN6ZCxTQUExQixDQUFyQjs7QUFFQTBkLFVBQVEsQ0FBQzFkLFNBQVQsQ0FBbUJ5VixPQUFuQixHQUE2QixZQUFXO0FBQ3RDO0FBQ0EsU0FBS21JLE1BQUwsR0FBY3RhLFFBQVEsQ0FBQzJTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLFNBQUsySCxNQUFMLENBQVlsWCxTQUFaLEdBQXdCLG9CQUF4QixDQUhzQyxDQUl0Qzs7QUFDQSxTQUFLbVgsSUFBTCxHQUFZLEVBQVosQ0FMc0MsQ0FNdEM7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBbUIsSUFBbkIsQ0FBbkI7QUFDQSxTQUFLbmQsRUFBTCxDQUFTLGFBQVQsRUFBd0IsS0FBS3VNLE1BQUwsQ0FBWThOLGtCQUFaLENBQStCOEMsSUFBL0IsQ0FBcUMsS0FBSzVRLE1BQTFDLENBQXhCO0FBQ0QsR0FURDs7QUFXQXNRLFVBQVEsQ0FBQzFkLFNBQVQsQ0FBbUJvVyxRQUFuQixHQUE4QixZQUFXO0FBQ3ZDLFNBQUs2SCxPQUFMO0FBQ0EsU0FBS0wsTUFBTCxDQUFZM1ksZ0JBQVosQ0FBOEIsT0FBOUIsRUFBdUMsS0FBSzZZLFdBQTVDO0FBQ0EsU0FBS0ksY0FBTCxDQUFxQixLQUFLTixNQUExQixFQUh1QyxDQUl2Qzs7QUFDQSxTQUFLeFEsTUFBTCxDQUFZaEcsT0FBWixDQUFvQkQsV0FBcEIsQ0FBaUMsS0FBS3lXLE1BQXRDO0FBQ0QsR0FORDs7QUFRQUYsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQnViLFVBQW5CLEdBQWdDLFlBQVc7QUFDekMsU0FBS3FDLE1BQUwsQ0FBWWxNLG1CQUFaLENBQWlDLE9BQWpDLEVBQTBDLEtBQUtvTSxXQUEvQztBQUNBLFNBQUtLLGdCQUFMLENBQXVCLEtBQUtQLE1BQTVCLEVBRnlDLENBR3pDOztBQUNBLFNBQUt4USxNQUFMLENBQVloRyxPQUFaLENBQW9CaUgsV0FBcEIsQ0FBaUMsS0FBS3VQLE1BQXRDO0FBQ0QsR0FMRDs7QUFPQUYsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQmllLE9BQW5CLEdBQTZCLFlBQVc7QUFDdEM7QUFDQSxRQUFJbEssS0FBSyxHQUFHLEtBQUszRyxNQUFMLENBQVlsRSxNQUFaLENBQW1CN0ksTUFBbkIsR0FBNEIsS0FBS3dkLElBQUwsQ0FBVXhkLE1BQWxEOztBQUNBLFFBQUswVCxLQUFLLEdBQUcsQ0FBYixFQUFpQjtBQUNmLFdBQUtxSyxPQUFMLENBQWNySyxLQUFkO0FBQ0QsS0FGRCxNQUVPLElBQUtBLEtBQUssR0FBRyxDQUFiLEVBQWlCO0FBQ3RCLFdBQUtzSyxVQUFMLENBQWlCLENBQUN0SyxLQUFsQjtBQUNEO0FBQ0YsR0FSRDs7QUFVQTJKLFVBQVEsQ0FBQzFkLFNBQVQsQ0FBbUJvZSxPQUFuQixHQUE2QixVQUFVRSxLQUFWLEVBQWtCO0FBQzdDLFFBQUl0WCxRQUFRLEdBQUcxRCxRQUFRLENBQUMyRCxzQkFBVCxFQUFmO0FBQ0EsUUFBSXNYLE9BQU8sR0FBRyxFQUFkO0FBQ0EsUUFBSWxlLE1BQU0sR0FBRyxLQUFLd2QsSUFBTCxDQUFVeGQsTUFBdkI7QUFDQSxRQUFJK1IsR0FBRyxHQUFHL1IsTUFBTSxHQUFHaWUsS0FBbkI7O0FBRUEsU0FBTSxJQUFJbGUsQ0FBQyxHQUFHQyxNQUFkLEVBQXNCRCxDQUFDLEdBQUdnUyxHQUExQixFQUErQmhTLENBQUMsRUFBaEMsRUFBcUM7QUFDbkMsVUFBSW9lLEdBQUcsR0FBR2xiLFFBQVEsQ0FBQzJTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBdUksU0FBRyxDQUFDOVgsU0FBSixHQUFnQixLQUFoQjtBQUNBOFgsU0FBRyxDQUFDbFIsWUFBSixDQUFrQixZQUFsQixFQUFnQyxlQUFnQmxOLENBQUMsR0FBRyxDQUFwQixDQUFoQztBQUNBNEcsY0FBUSxDQUFDRyxXQUFULENBQXNCcVgsR0FBdEI7QUFDQUQsYUFBTyxDQUFDbmQsSUFBUixDQUFjb2QsR0FBZDtBQUNEOztBQUVELFNBQUtaLE1BQUwsQ0FBWXpXLFdBQVosQ0FBeUJILFFBQXpCO0FBQ0EsU0FBSzZXLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVU1WCxNQUFWLENBQWtCc1ksT0FBbEIsQ0FBWjtBQUNELEdBaEJEOztBQWtCQWIsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQnFlLFVBQW5CLEdBQWdDLFVBQVVDLEtBQVYsRUFBa0I7QUFDaEQ7QUFDQSxRQUFJRCxVQUFVLEdBQUcsS0FBS1IsSUFBTCxDQUFVbGMsTUFBVixDQUFrQixLQUFLa2MsSUFBTCxDQUFVeGQsTUFBVixHQUFtQmllLEtBQXJDLEVBQTRDQSxLQUE1QyxDQUFqQixDQUZnRCxDQUdoRDs7QUFDQUQsY0FBVSxDQUFDcmEsT0FBWCxDQUFvQixVQUFVd2EsR0FBVixFQUFnQjtBQUNsQyxXQUFLWixNQUFMLENBQVl2UCxXQUFaLENBQXlCbVEsR0FBekI7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdELEdBUEQ7O0FBU0FkLFVBQVEsQ0FBQzFkLFNBQVQsQ0FBbUJ5ZSxjQUFuQixHQUFvQyxZQUFXO0FBQzdDO0FBQ0EsUUFBSyxLQUFLQyxXQUFWLEVBQXdCO0FBQ3RCLFdBQUtBLFdBQUwsQ0FBaUJoWSxTQUFqQixHQUE2QixLQUE3QjtBQUNBLFdBQUtnWSxXQUFMLENBQWlCdFEsZUFBakIsQ0FBaUMsY0FBakM7QUFDRCxLQUw0QyxDQU03Qzs7O0FBQ0EsUUFBSyxDQUFDLEtBQUt5UCxJQUFMLENBQVV4ZCxNQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUNELFNBQUtxZSxXQUFMLEdBQW1CLEtBQUtiLElBQUwsQ0FBVyxLQUFLelEsTUFBTCxDQUFZcEUsYUFBdkIsQ0FBbkI7QUFDQSxTQUFLMFYsV0FBTCxDQUFpQmhZLFNBQWpCLEdBQTZCLGlCQUE3QjtBQUNBLFNBQUtnWSxXQUFMLENBQWlCcFIsWUFBakIsQ0FBK0IsY0FBL0IsRUFBK0MsTUFBL0M7QUFDRCxHQWJEOztBQWVBb1EsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQjJlLEtBQW5CLEdBQTJCO0FBQzNCakIsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQitkLE9BQW5CLEdBQTZCLFVBQVVwYSxLQUFWLEVBQWtCO0FBQzdDLFFBQUlxSCxNQUFNLEdBQUdySCxLQUFLLENBQUNxSCxNQUFuQixDQUQ2QyxDQUU3Qzs7QUFDQSxRQUFLQSxNQUFNLENBQUM2RixRQUFQLElBQW1CLElBQXhCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsU0FBS3pELE1BQUwsQ0FBWTZOLFFBQVo7QUFDQSxRQUFJdlosS0FBSyxHQUFHLEtBQUttYyxJQUFMLENBQVUxYyxPQUFWLENBQW1CNkosTUFBbkIsQ0FBWjtBQUNBLFNBQUtvQyxNQUFMLENBQVlqRSxNQUFaLENBQW9CekgsS0FBcEI7QUFDRCxHQVhEOztBQWFBZ2MsVUFBUSxDQUFDMWQsU0FBVCxDQUFtQnVOLE9BQW5CLEdBQTZCLFlBQVc7QUFDdEMsU0FBS2dPLFVBQUw7QUFDQSxTQUFLdFosTUFBTDtBQUNELEdBSEQ7O0FBS0E0RSxVQUFRLENBQUM2VyxRQUFULEdBQW9CQSxRQUFwQixDQTdHbUUsQ0ErR25FOztBQUVBeGIsT0FBSyxDQUFDQyxNQUFOLENBQWMwRSxRQUFRLENBQUMwSCxRQUF2QixFQUFpQztBQUMvQnFRLFlBQVEsRUFBRTtBQURxQixHQUFqQztBQUlBL1gsVUFBUSxDQUFDNkgsYUFBVCxDQUF1QnROLElBQXZCLENBQTRCLGlCQUE1QjtBQUVBLE1BQUlSLEtBQUssR0FBR2lHLFFBQVEsQ0FBQzdHLFNBQXJCOztBQUVBWSxPQUFLLENBQUNpZSxlQUFOLEdBQXdCLFlBQVc7QUFDakMsUUFBSyxDQUFDLEtBQUt2WSxPQUFMLENBQWFzWSxRQUFuQixFQUE4QjtBQUM1QjtBQUNEOztBQUNELFNBQUtBLFFBQUwsR0FBZ0IsSUFBSWxCLFFBQUosQ0FBYyxJQUFkLENBQWhCLENBSmlDLENBS2pDOztBQUNBLFNBQUs3YyxFQUFMLENBQVMsVUFBVCxFQUFxQixLQUFLaWUsZ0JBQTFCO0FBQ0EsU0FBS2plLEVBQUwsQ0FBUyxRQUFULEVBQW1CLEtBQUtrZSxzQkFBeEI7QUFDQSxTQUFLbGUsRUFBTCxDQUFTLFlBQVQsRUFBdUIsS0FBS21lLGNBQTVCO0FBQ0EsU0FBS25lLEVBQUwsQ0FBUyxRQUFULEVBQW1CLEtBQUttZSxjQUF4QjtBQUNBLFNBQUtuZSxFQUFMLENBQVMsWUFBVCxFQUF1QixLQUFLb2Usa0JBQTVCO0FBQ0QsR0FYRDs7QUFhQXJlLE9BQUssQ0FBQ2tlLGdCQUFOLEdBQXlCLFlBQVc7QUFDbEMsU0FBS0YsUUFBTCxDQUFjeEksUUFBZDtBQUNELEdBRkQ7O0FBSUF4VixPQUFLLENBQUNtZSxzQkFBTixHQUErQixZQUFXO0FBQ3hDLFNBQUtILFFBQUwsQ0FBY0gsY0FBZDtBQUNELEdBRkQ7O0FBSUE3ZCxPQUFLLENBQUNvZSxjQUFOLEdBQXVCLFlBQVc7QUFDaEMsU0FBS0osUUFBTCxDQUFjWCxPQUFkO0FBQ0QsR0FGRDs7QUFJQXJkLE9BQUssQ0FBQ3FlLGtCQUFOLEdBQTJCLFlBQVc7QUFDcEMsU0FBS0wsUUFBTCxDQUFjckQsVUFBZDtBQUNELEdBRkQsQ0FsSm1FLENBc0puRTs7O0FBRUExVSxVQUFRLENBQUM2VyxRQUFULEdBQW9CQSxRQUFwQjtBQUVBLFNBQU83VyxRQUFQO0FBRUMsQ0ExTEMsQ0FBRixDOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDRSxXQUFVbkgsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQ0E7QUFDQSxNQUFLLElBQUwsRUFBaUQ7QUFDL0M7QUFDQUMscUNBQVEsQ0FDTiwyRkFETSxFQUVOLHlGQUZNLEVBR04sK0VBSE0sQ0FBRixtQ0FJSCxVQUFVZSxTQUFWLEVBQXFCdUIsS0FBckIsRUFBNEIyRSxRQUE1QixFQUF1QztBQUN4QyxhQUFPbEgsT0FBTyxDQUFFZ0IsU0FBRixFQUFhdUIsS0FBYixFQUFvQjJFLFFBQXBCLENBQWQ7QUFDRCxLQU5LO0FBQUEsb0dBQU47QUFPRCxHQVRELE1BU08sRUFjTjtBQUVGLENBNUJDLEVBNEJDbkgsTUE1QkQsRUE0QlMsU0FBU0MsT0FBVCxDQUFrQmdCLFNBQWxCLEVBQTZCdUIsS0FBN0IsRUFBb0MyRSxRQUFwQyxFQUErQztBQUUxRCxlQUYwRCxDQUkxRDs7QUFFQSxXQUFTcVksTUFBVCxDQUFpQjlSLE1BQWpCLEVBQTBCO0FBQ3hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUsrUixLQUFMLEdBQWEsU0FBYixDQUZ3QixDQUd4Qjs7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixLQUFLQyxnQkFBTCxDQUFzQnJCLElBQXRCLENBQTRCLElBQTVCLENBQTFCO0FBQ0EsU0FBS3NCLGdCQUFMLEdBQXdCLEtBQUtDLGNBQUwsQ0FBb0J2QixJQUFwQixDQUEwQixJQUExQixDQUF4QjtBQUNEOztBQUVEa0IsUUFBTSxDQUFDbGYsU0FBUCxHQUFtQjJkLE1BQU0sQ0FBQ3RRLE1BQVAsQ0FBZTFNLFNBQVMsQ0FBQ1gsU0FBekIsQ0FBbkIsQ0FkMEQsQ0FnQjFEOztBQUNBa2YsUUFBTSxDQUFDbGYsU0FBUCxDQUFpQndmLElBQWpCLEdBQXdCLFlBQVc7QUFDakMsUUFBSyxLQUFLTCxLQUFMLElBQWMsU0FBbkIsRUFBK0I7QUFDN0I7QUFDRCxLQUhnQyxDQUlqQzs7O0FBQ0EsUUFBSU0sWUFBWSxHQUFHbmMsUUFBUSxDQUFDb2MsTUFBNUI7O0FBQ0EsUUFBS0QsWUFBTCxFQUFvQjtBQUNsQm5jLGNBQVEsQ0FBQzJCLGdCQUFULENBQTJCLGtCQUEzQixFQUErQyxLQUFLcWEsZ0JBQXBEO0FBQ0E7QUFDRDs7QUFFRCxTQUFLSCxLQUFMLEdBQWEsU0FBYixDQVhpQyxDQVlqQzs7QUFDQTdiLFlBQVEsQ0FBQzJCLGdCQUFULENBQTJCLGtCQUEzQixFQUErQyxLQUFLbWEsa0JBQXBELEVBYmlDLENBY2pDOztBQUNBLFNBQUtPLElBQUw7QUFDRCxHQWhCRDs7QUFrQkFULFFBQU0sQ0FBQ2xmLFNBQVAsQ0FBaUIyZixJQUFqQixHQUF3QixZQUFXO0FBQ2pDO0FBQ0EsUUFBSyxLQUFLUixLQUFMLElBQWMsU0FBbkIsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxRQUFJUyxJQUFJLEdBQUcsS0FBS3hTLE1BQUwsQ0FBWTlHLE9BQVosQ0FBb0J1WixRQUEvQixDQU5pQyxDQU9qQzs7QUFDQUQsUUFBSSxHQUFHLE9BQU9BLElBQVAsSUFBZSxRQUFmLEdBQTBCQSxJQUExQixHQUFpQyxJQUF4Qzs7QUFDQSxRQUFJaGIsS0FBSyxHQUFHLElBQVosQ0FUaUMsQ0FVakM7OztBQUNBLFNBQUtrYixLQUFMO0FBQ0EsU0FBS3JiLE9BQUwsR0FBZUksVUFBVSxDQUFFLFlBQVc7QUFDcENELFdBQUssQ0FBQ3dJLE1BQU4sQ0FBYWlOLElBQWIsQ0FBbUIsSUFBbkI7O0FBQ0F6VixXQUFLLENBQUMrYSxJQUFOO0FBQ0QsS0FId0IsRUFHdEJDLElBSHNCLENBQXpCO0FBSUQsR0FoQkQ7O0FBa0JBVixRQUFNLENBQUNsZixTQUFQLENBQWlCK2YsSUFBakIsR0FBd0IsWUFBVztBQUNqQyxTQUFLWixLQUFMLEdBQWEsU0FBYjtBQUNBLFNBQUtXLEtBQUwsR0FGaUMsQ0FHakM7O0FBQ0F4YyxZQUFRLENBQUNvTyxtQkFBVCxDQUE4QixrQkFBOUIsRUFBa0QsS0FBSzBOLGtCQUF2RDtBQUNELEdBTEQ7O0FBT0FGLFFBQU0sQ0FBQ2xmLFNBQVAsQ0FBaUI4ZixLQUFqQixHQUF5QixZQUFXO0FBQ2xDcGIsZ0JBQVksQ0FBRSxLQUFLRCxPQUFQLENBQVo7QUFDRCxHQUZEOztBQUlBeWEsUUFBTSxDQUFDbGYsU0FBUCxDQUFpQmdnQixLQUFqQixHQUF5QixZQUFXO0FBQ2xDLFFBQUssS0FBS2IsS0FBTCxJQUFjLFNBQW5CLEVBQStCO0FBQzdCLFdBQUtBLEtBQUwsR0FBYSxRQUFiO0FBQ0EsV0FBS1csS0FBTDtBQUNEO0FBQ0YsR0FMRDs7QUFPQVosUUFBTSxDQUFDbGYsU0FBUCxDQUFpQmlnQixPQUFqQixHQUEyQixZQUFXO0FBQ3BDO0FBQ0EsUUFBSyxLQUFLZCxLQUFMLElBQWMsUUFBbkIsRUFBOEI7QUFDNUIsV0FBS0ssSUFBTDtBQUNEO0FBQ0YsR0FMRCxDQXZFMEQsQ0E4RTFEOzs7QUFDQU4sUUFBTSxDQUFDbGYsU0FBUCxDQUFpQnFmLGdCQUFqQixHQUFvQyxZQUFXO0FBQzdDLFFBQUlJLFlBQVksR0FBR25jLFFBQVEsQ0FBQ29jLE1BQTVCO0FBQ0EsU0FBTUQsWUFBWSxHQUFHLE9BQUgsR0FBYSxTQUEvQjtBQUNELEdBSEQ7O0FBS0FQLFFBQU0sQ0FBQ2xmLFNBQVAsQ0FBaUJ1ZixjQUFqQixHQUFrQyxZQUFXO0FBQzNDLFNBQUtDLElBQUw7QUFDQWxjLFlBQVEsQ0FBQ29PLG1CQUFULENBQThCLGtCQUE5QixFQUFrRCxLQUFLNE4sZ0JBQXZEO0FBQ0QsR0FIRCxDQXBGMEQsQ0F5RjFEOzs7QUFFQXBkLE9BQUssQ0FBQ0MsTUFBTixDQUFjMEUsUUFBUSxDQUFDMEgsUUFBdkIsRUFBaUM7QUFDL0IyUix3QkFBb0IsRUFBRTtBQURTLEdBQWpDO0FBSUFyWixVQUFRLENBQUM2SCxhQUFULENBQXVCdE4sSUFBdkIsQ0FBNEIsZUFBNUI7QUFDQSxNQUFJUixLQUFLLEdBQUdpRyxRQUFRLENBQUM3RyxTQUFyQjs7QUFFQVksT0FBSyxDQUFDdWYsYUFBTixHQUFzQixZQUFXO0FBQy9CLFNBQUtDLE1BQUwsR0FBYyxJQUFJbEIsTUFBSixDQUFZLElBQVosQ0FBZDtBQUVBLFNBQUtyZSxFQUFMLENBQVMsVUFBVCxFQUFxQixLQUFLd2YsY0FBMUI7QUFDQSxTQUFLeGYsRUFBTCxDQUFTLFVBQVQsRUFBcUIsS0FBS3lmLFVBQTFCO0FBQ0EsU0FBS3pmLEVBQUwsQ0FBUyxhQUFULEVBQXdCLEtBQUt5ZixVQUE3QjtBQUNBLFNBQUt6ZixFQUFMLENBQVMsWUFBVCxFQUF1QixLQUFLMGYsZ0JBQTVCO0FBQ0QsR0FQRDs7QUFTQTNmLE9BQUssQ0FBQ3lmLGNBQU4sR0FBdUIsWUFBVztBQUNoQyxRQUFLLENBQUMsS0FBSy9aLE9BQUwsQ0FBYXVaLFFBQW5CLEVBQThCO0FBQzVCO0FBQ0Q7O0FBQ0QsU0FBS08sTUFBTCxDQUFZWixJQUFaO0FBQ0EsU0FBS3BZLE9BQUwsQ0FBYW5DLGdCQUFiLENBQStCLFlBQS9CLEVBQTZDLElBQTdDO0FBQ0QsR0FORCxDQTNHMEQsQ0FtSDFEOzs7QUFFQXJFLE9BQUssQ0FBQzRmLFVBQU4sR0FBbUIsWUFBVztBQUM1QixTQUFLSixNQUFMLENBQVlaLElBQVo7QUFDRCxHQUZEOztBQUlBNWUsT0FBSyxDQUFDMGYsVUFBTixHQUFtQixZQUFXO0FBQzVCLFNBQUtGLE1BQUwsQ0FBWUwsSUFBWjtBQUNELEdBRkQ7O0FBSUFuZixPQUFLLENBQUM2ZixXQUFOLEdBQW9CLFlBQVc7QUFDN0IsU0FBS0wsTUFBTCxDQUFZSixLQUFaO0FBQ0QsR0FGRDs7QUFJQXBmLE9BQUssQ0FBQzhmLGFBQU4sR0FBc0IsWUFBVztBQUMvQixTQUFLTixNQUFMLENBQVlILE9BQVo7QUFDRCxHQUZEOztBQUlBcmYsT0FBSyxDQUFDMmYsZ0JBQU4sR0FBeUIsWUFBVztBQUNsQyxTQUFLSCxNQUFMLENBQVlMLElBQVo7QUFDQSxTQUFLM1ksT0FBTCxDQUFhc0ssbUJBQWIsQ0FBa0MsWUFBbEMsRUFBZ0QsSUFBaEQ7QUFDRCxHQUhELENBckkwRCxDQTBJMUQ7QUFFQTs7O0FBQ0E5USxPQUFLLENBQUMrZixZQUFOLEdBQXFCLFlBQVc7QUFDOUIsUUFBSyxDQUFDLEtBQUtyYSxPQUFMLENBQWE0WixvQkFBbkIsRUFBMEM7QUFDeEM7QUFDRDs7QUFDRCxTQUFLRSxNQUFMLENBQVlKLEtBQVo7QUFDQSxTQUFLNVksT0FBTCxDQUFhbkMsZ0JBQWIsQ0FBK0IsWUFBL0IsRUFBNkMsSUFBN0M7QUFDRCxHQU5ELENBN0kwRCxDQXFKMUQ7OztBQUNBckUsT0FBSyxDQUFDZ2dCLFlBQU4sR0FBcUIsWUFBVztBQUM5QixTQUFLUixNQUFMLENBQVlILE9BQVo7QUFDQSxTQUFLN1ksT0FBTCxDQUFhc0ssbUJBQWIsQ0FBa0MsWUFBbEMsRUFBZ0QsSUFBaEQ7QUFDRCxHQUhELENBdEowRCxDQTJKMUQ7OztBQUVBN0ssVUFBUSxDQUFDcVksTUFBVCxHQUFrQkEsTUFBbEI7QUFFQSxTQUFPclksUUFBUDtBQUVDLENBN0xDLENBQUYsQzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0UsV0FBVW5ILE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCO0FBQzVCOztBQUNBO0FBQ0EsTUFBSyxJQUFMLEVBQWlEO0FBQy9DO0FBQ0FDLHFDQUFRLENBQ04sK0VBRE0sRUFFTiwyRkFGTSxFQUdOLHlGQUhNLENBQUYsbUNBSUgsVUFBVWlILFFBQVYsRUFBb0I0VyxVQUFwQixFQUFnQ3ZiLEtBQWhDLEVBQXdDO0FBQ3pDLGFBQU92QyxPQUFPLENBQUVELE1BQUYsRUFBVW1ILFFBQVYsRUFBb0I0VyxVQUFwQixFQUFnQ3ZiLEtBQWhDLENBQWQ7QUFDRCxLQU5LO0FBQUEsb0dBQU47QUFPRCxHQVRELE1BU08sRUFnQk47QUFFRixDQTlCQyxFQThCQ3hDLE1BOUJELEVBOEJTLFNBQVNDLE9BQVQsQ0FBa0JELE1BQWxCLEVBQTBCbUgsUUFBMUIsRUFBb0M0VyxVQUFwQyxFQUFnRHZiLEtBQWhELEVBQXdEO0FBQ25FOztBQUVBLE1BQUkyZSxNQUFNLEdBQUcsNEJBQWIsQ0FIbUUsQ0FLbkU7O0FBRUEsV0FBU0MsY0FBVCxDQUF5QjVPLFNBQXpCLEVBQW9DOUUsTUFBcEMsRUFBNkM7QUFDM0MsU0FBSzhFLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSzlFLE1BQUwsR0FBY0EsTUFBZDs7QUFDQSxTQUFLcUksT0FBTDtBQUNEOztBQUVEcUwsZ0JBQWMsQ0FBQzlnQixTQUFmLEdBQTJCMmQsTUFBTSxDQUFDdFEsTUFBUCxDQUFlb1EsVUFBVSxDQUFDemQsU0FBMUIsQ0FBM0I7O0FBRUE4Z0IsZ0JBQWMsQ0FBQzlnQixTQUFmLENBQXlCeVYsT0FBekIsR0FBbUMsWUFBVztBQUM1QztBQUNBLFNBQUtzTCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLOU8sU0FBTCxJQUFrQixDQUFDLENBQXJDO0FBQ0EsUUFBSStPLGFBQWEsR0FBRyxLQUFLN1QsTUFBTCxDQUFZOUcsT0FBWixDQUFvQm1FLFdBQXBCLEdBQWtDLENBQWxDLEdBQXNDLENBQUMsQ0FBM0Q7QUFDQSxTQUFLeVcsTUFBTCxHQUFjLEtBQUtoUCxTQUFMLElBQWtCK08sYUFBaEM7QUFFQSxRQUFJN1osT0FBTyxHQUFHLEtBQUtBLE9BQUwsR0FBZTlELFFBQVEsQ0FBQzJTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBN0I7QUFDQTdPLFdBQU8sQ0FBQ1YsU0FBUixHQUFvQiwyQ0FBcEI7QUFDQVUsV0FBTyxDQUFDVixTQUFSLElBQXFCLEtBQUtzYSxVQUFMLEdBQWtCLFdBQWxCLEdBQWdDLE9BQXJELENBVDRDLENBVTVDOztBQUNBNVosV0FBTyxDQUFDa0csWUFBUixDQUFzQixNQUF0QixFQUE4QixRQUE5QixFQVg0QyxDQVk1Qzs7QUFDQSxTQUFLNlQsT0FBTDtBQUVBL1osV0FBTyxDQUFDa0csWUFBUixDQUFzQixZQUF0QixFQUFvQyxLQUFLMFQsVUFBTCxHQUFrQixVQUFsQixHQUErQixNQUFuRSxFQWY0QyxDQWlCNUM7O0FBQ0EsUUFBSUksR0FBRyxHQUFHLEtBQUtDLFNBQUwsRUFBVjtBQUNBamEsV0FBTyxDQUFDRCxXQUFSLENBQXFCaWEsR0FBckIsRUFuQjRDLENBb0I1Qzs7QUFDQSxTQUFLaFUsTUFBTCxDQUFZdk0sRUFBWixDQUFnQixRQUFoQixFQUEwQixLQUFLeWdCLE1BQUwsQ0FBWXRELElBQVosQ0FBa0IsSUFBbEIsQ0FBMUI7QUFDQSxTQUFLbmQsRUFBTCxDQUFTLGFBQVQsRUFBd0IsS0FBS3VNLE1BQUwsQ0FBWThOLGtCQUFaLENBQStCOEMsSUFBL0IsQ0FBcUMsS0FBSzVRLE1BQTFDLENBQXhCO0FBQ0QsR0F2QkQ7O0FBeUJBMFQsZ0JBQWMsQ0FBQzlnQixTQUFmLENBQXlCb1csUUFBekIsR0FBb0MsWUFBVztBQUM3QyxTQUFLOEgsY0FBTCxDQUFxQixLQUFLOVcsT0FBMUI7QUFDQSxTQUFLQSxPQUFMLENBQWFuQyxnQkFBYixDQUErQixPQUEvQixFQUF3QyxJQUF4QyxFQUY2QyxDQUc3Qzs7QUFDQSxTQUFLbUksTUFBTCxDQUFZaEcsT0FBWixDQUFvQkQsV0FBcEIsQ0FBaUMsS0FBS0MsT0FBdEM7QUFDRCxHQUxEOztBQU9BMFosZ0JBQWMsQ0FBQzlnQixTQUFmLENBQXlCdWIsVUFBekIsR0FBc0MsWUFBVztBQUMvQztBQUNBLFNBQUtuTyxNQUFMLENBQVloRyxPQUFaLENBQW9CaUgsV0FBcEIsQ0FBaUMsS0FBS2pILE9BQXRDLEVBRitDLENBRy9DOztBQUNBLFNBQUsrVyxnQkFBTCxDQUF1QixLQUFLL1csT0FBNUI7QUFDQSxTQUFLQSxPQUFMLENBQWFzSyxtQkFBYixDQUFrQyxPQUFsQyxFQUEyQyxJQUEzQztBQUNELEdBTkQ7O0FBUUFvUCxnQkFBYyxDQUFDOWdCLFNBQWYsQ0FBeUJxaEIsU0FBekIsR0FBcUMsWUFBVztBQUM5QyxRQUFJRCxHQUFHLEdBQUc5ZCxRQUFRLENBQUNpZSxlQUFULENBQTBCVixNQUExQixFQUFrQyxLQUFsQyxDQUFWO0FBQ0FPLE9BQUcsQ0FBQzlULFlBQUosQ0FBa0IsT0FBbEIsRUFBMkIsc0JBQTNCO0FBQ0E4VCxPQUFHLENBQUM5VCxZQUFKLENBQWtCLFNBQWxCLEVBQTZCLGFBQTdCO0FBQ0EsUUFBSWtVLElBQUksR0FBR2xlLFFBQVEsQ0FBQ2llLGVBQVQsQ0FBMEJWLE1BQTFCLEVBQWtDLE1BQWxDLENBQVg7QUFDQSxRQUFJWSxhQUFhLEdBQUdDLGlCQUFpQixDQUFFLEtBQUt0VSxNQUFMLENBQVk5RyxPQUFaLENBQW9CcWIsVUFBdEIsQ0FBckM7QUFDQUgsUUFBSSxDQUFDbFUsWUFBTCxDQUFtQixHQUFuQixFQUF3Qm1VLGFBQXhCO0FBQ0FELFFBQUksQ0FBQ2xVLFlBQUwsQ0FBbUIsT0FBbkIsRUFBNEIsT0FBNUIsRUFQOEMsQ0FROUM7O0FBQ0EsUUFBSyxDQUFDLEtBQUs0VCxNQUFYLEVBQW9CO0FBQ2xCTSxVQUFJLENBQUNsVSxZQUFMLENBQW1CLFdBQW5CLEVBQWdDLGtDQUFoQztBQUNEOztBQUNEOFQsT0FBRyxDQUFDamEsV0FBSixDQUFpQnFhLElBQWpCO0FBQ0EsV0FBT0osR0FBUDtBQUNELEdBZEQsQ0F2RG1FLENBdUVuRTs7O0FBQ0EsV0FBU00saUJBQVQsQ0FBNEJFLEtBQTVCLEVBQW9DO0FBQ2xDO0FBQ0EsUUFBSyxPQUFPQSxLQUFQLElBQWdCLFFBQXJCLEVBQWdDO0FBQzlCLGFBQU9BLEtBQVA7QUFDRCxLQUppQyxDQUtsQzs7O0FBQ0EsV0FBTyxPQUFPQSxLQUFLLENBQUNDLEVBQWIsR0FBa0IsS0FBbEIsR0FDTCxLQURLLEdBQ0dELEtBQUssQ0FBQ0UsRUFEVCxHQUNjLEdBRGQsSUFDc0JGLEtBQUssQ0FBQ0csRUFBTixHQUFXLEVBRGpDLElBRUwsS0FGSyxHQUVHSCxLQUFLLENBQUNJLEVBRlQsR0FFYyxHQUZkLElBRXNCSixLQUFLLENBQUNLLEVBQU4sR0FBVyxFQUZqQyxJQUdMLEtBSEssR0FHR0wsS0FBSyxDQUFDTSxFQUhULEdBR2MsTUFIZCxHQUlMLEtBSkssR0FJR04sS0FBSyxDQUFDSSxFQUpULEdBSWMsR0FKZCxJQUlzQixLQUFLSixLQUFLLENBQUNLLEVBSmpDLElBS0wsS0FMSyxHQUtHTCxLQUFLLENBQUNFLEVBTFQsR0FLYyxHQUxkLElBS3NCLEtBQUtGLEtBQUssQ0FBQ0csRUFMakMsSUFNTCxJQU5GO0FBT0Q7O0FBRURqQixnQkFBYyxDQUFDOWdCLFNBQWYsQ0FBeUIwRCxXQUF6QixHQUF1Q3hCLEtBQUssQ0FBQ3dCLFdBQTdDOztBQUVBb2QsZ0JBQWMsQ0FBQzlnQixTQUFmLENBQXlCbWlCLE9BQXpCLEdBQW1DLFlBQVc7QUFDNUMsUUFBSyxDQUFDLEtBQUtwQixTQUFYLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBQ0QsU0FBSzNULE1BQUwsQ0FBWTZOLFFBQVo7QUFDQSxRQUFJMWEsTUFBTSxHQUFHLEtBQUt5Z0IsVUFBTCxHQUFrQixVQUFsQixHQUErQixNQUE1QztBQUNBLFNBQUs1VCxNQUFMLENBQWE3TSxNQUFiO0FBQ0QsR0FQRCxDQXpGbUUsQ0FrR25FOzs7QUFFQXVnQixnQkFBYyxDQUFDOWdCLFNBQWYsQ0FBeUJvaUIsTUFBekIsR0FBa0MsWUFBVztBQUMzQyxRQUFLLEtBQUtyQixTQUFWLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBQ0QsU0FBSzNaLE9BQUwsQ0FBYWliLFFBQWIsR0FBd0IsS0FBeEI7QUFDQSxTQUFLdEIsU0FBTCxHQUFpQixJQUFqQjtBQUNELEdBTkQ7O0FBUUFELGdCQUFjLENBQUM5Z0IsU0FBZixDQUF5Qm1oQixPQUF6QixHQUFtQyxZQUFXO0FBQzVDLFFBQUssQ0FBQyxLQUFLSixTQUFYLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBQ0QsU0FBSzNaLE9BQUwsQ0FBYWliLFFBQWIsR0FBd0IsSUFBeEI7QUFDQSxTQUFLdEIsU0FBTCxHQUFpQixLQUFqQjtBQUNELEdBTkQ7O0FBUUFELGdCQUFjLENBQUM5Z0IsU0FBZixDQUF5QnNoQixNQUF6QixHQUFrQyxZQUFXO0FBQzNDO0FBQ0EsUUFBSXBZLE1BQU0sR0FBRyxLQUFLa0UsTUFBTCxDQUFZbEUsTUFBekIsQ0FGMkMsQ0FHM0M7O0FBQ0EsUUFBSyxLQUFLa0UsTUFBTCxDQUFZOUcsT0FBWixDQUFvQjRELFVBQXBCLElBQWtDaEIsTUFBTSxDQUFDN0ksTUFBUCxHQUFnQixDQUF2RCxFQUEyRDtBQUN6RCxXQUFLK2hCLE1BQUw7QUFDQTtBQUNEOztBQUNELFFBQUlFLFNBQVMsR0FBR3BaLE1BQU0sQ0FBQzdJLE1BQVAsR0FBZ0I2SSxNQUFNLENBQUM3SSxNQUFQLEdBQWdCLENBQWhDLEdBQW9DLENBQXBEO0FBQ0EsUUFBSWtpQixVQUFVLEdBQUcsS0FBS3ZCLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0JzQixTQUF2QztBQUNBLFFBQUkvaEIsTUFBTSxHQUFHLEtBQUs2TSxNQUFMLENBQVlwRSxhQUFaLElBQTZCdVosVUFBN0IsR0FBMEMsU0FBMUMsR0FBc0QsUUFBbkU7QUFDQSxTQUFNaGlCLE1BQU47QUFDRCxHQVpEOztBQWNBdWdCLGdCQUFjLENBQUM5Z0IsU0FBZixDQUF5QnVOLE9BQXpCLEdBQW1DLFlBQVc7QUFDNUMsU0FBS2dPLFVBQUw7QUFDQSxTQUFLdFosTUFBTDtBQUNELEdBSEQsQ0FsSW1FLENBdUluRTs7O0FBRUFDLE9BQUssQ0FBQ0MsTUFBTixDQUFjMEUsUUFBUSxDQUFDMEgsUUFBdkIsRUFBaUM7QUFDL0JpVSxtQkFBZSxFQUFFLElBRGM7QUFFL0JiLGNBQVUsRUFBRTtBQUNWRSxRQUFFLEVBQUUsRUFETTtBQUVWQyxRQUFFLEVBQUUsRUFGTTtBQUVGQyxRQUFFLEVBQUUsRUFGRjtBQUdWQyxRQUFFLEVBQUUsRUFITTtBQUdGQyxRQUFFLEVBQUUsRUFIRjtBQUlWQyxRQUFFLEVBQUU7QUFKTTtBQUZtQixHQUFqQztBQVVBcmIsVUFBUSxDQUFDNkgsYUFBVCxDQUF1QnROLElBQXZCLENBQTRCLHdCQUE1QjtBQUNBLE1BQUlSLEtBQUssR0FBR2lHLFFBQVEsQ0FBQzdHLFNBQXJCOztBQUVBWSxPQUFLLENBQUM2aEIsc0JBQU4sR0FBK0IsWUFBVztBQUN4QyxRQUFLLENBQUMsS0FBS25jLE9BQUwsQ0FBYWtjLGVBQW5CLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBRUQsU0FBS0UsVUFBTCxHQUFrQixJQUFJNUIsY0FBSixDQUFvQixDQUFDLENBQXJCLEVBQXdCLElBQXhCLENBQWxCO0FBQ0EsU0FBSzZCLFVBQUwsR0FBa0IsSUFBSTdCLGNBQUosQ0FBb0IsQ0FBcEIsRUFBdUIsSUFBdkIsQ0FBbEI7QUFFQSxTQUFLamdCLEVBQUwsQ0FBUyxVQUFULEVBQXFCLEtBQUsraEIsdUJBQTFCO0FBQ0QsR0FURDs7QUFXQWhpQixPQUFLLENBQUNnaUIsdUJBQU4sR0FBZ0MsWUFBVztBQUN6QyxTQUFLRixVQUFMLENBQWdCdE0sUUFBaEI7QUFDQSxTQUFLdU0sVUFBTCxDQUFnQnZNLFFBQWhCO0FBQ0EsU0FBS3ZWLEVBQUwsQ0FBUyxZQUFULEVBQXVCLEtBQUtnaUIseUJBQTVCO0FBQ0QsR0FKRDs7QUFNQWppQixPQUFLLENBQUNpaUIseUJBQU4sR0FBa0MsWUFBVztBQUMzQyxTQUFLSCxVQUFMLENBQWdCbkgsVUFBaEI7QUFDQSxTQUFLb0gsVUFBTCxDQUFnQnBILFVBQWhCO0FBQ0EsU0FBSzlaLEdBQUwsQ0FBVSxZQUFWLEVBQXdCLEtBQUtvaEIseUJBQTdCO0FBQ0QsR0FKRCxDQXZLbUUsQ0E2S25FOzs7QUFFQWhjLFVBQVEsQ0FBQ2lhLGNBQVQsR0FBMEJBLGNBQTFCO0FBRUEsU0FBT2phLFFBQVA7QUFFQyxDQWpOQyxDQUFGLEM7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNFLFdBQVVuSCxNQUFWLEVBQWtCQyxPQUFsQixFQUE0QjtBQUM1Qjs7QUFDQTtBQUNBLE1BQUssSUFBTCxFQUFpRDtBQUMvQztBQUNBQyx3Q0FBUUQsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0QsR0FIRCxNQUdPLEVBT047QUFFRixDQWZDLEVBZUNELE1BZkQsRUFlUyxTQUFTQyxPQUFULEdBQW1CO0FBQzlCOztBQUVBLFdBQVNrVixLQUFULENBQWdCekgsTUFBaEIsRUFBeUI7QUFDdkIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS29LLFlBQUwsR0FBb0JwSyxNQUFNLENBQUNNLFVBQVAsSUFBcUIsTUFBekM7QUFDQSxTQUFLM0csS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLdUYsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUt1TSxNQUFMLEdBQWMsQ0FBZDtBQUNEOztBQUVELE1BQUlqWSxLQUFLLEdBQUdpVSxLQUFLLENBQUM3VSxTQUFsQjs7QUFFQVksT0FBSyxDQUFDZ1gsT0FBTixHQUFnQixVQUFVMVEsSUFBVixFQUFpQjtBQUMvQixTQUFLSCxLQUFMLENBQVczRixJQUFYLENBQWlCOEYsSUFBakI7QUFDQSxTQUFLb0YsVUFBTCxJQUFtQnBGLElBQUksQ0FBQ3VFLElBQUwsQ0FBVWEsVUFBN0I7QUFDQSxTQUFLdU0sTUFBTCxHQUFjelEsSUFBSSxDQUFDZ0ssR0FBTCxDQUFVbEwsSUFBSSxDQUFDdUUsSUFBTCxDQUFVNEwsV0FBcEIsRUFBaUMsS0FBS3dCLE1BQXRDLENBQWQsQ0FIK0IsQ0FJL0I7O0FBQ0EsUUFBSyxLQUFLOVIsS0FBTCxDQUFXMUcsTUFBWCxJQUFxQixDQUExQixFQUE4QjtBQUM1QixXQUFLdUosQ0FBTCxHQUFTMUMsSUFBSSxDQUFDMEMsQ0FBZCxDQUQ0QixDQUNYOztBQUNqQixVQUFJc1AsV0FBVyxHQUFHLEtBQUsxQixZQUFMLEdBQW9CLFlBQXBCLEdBQW1DLGFBQXJEO0FBQ0EsV0FBS00sV0FBTCxHQUFtQjVRLElBQUksQ0FBQ3VFLElBQUwsQ0FBV3lOLFdBQVgsQ0FBbkI7QUFDRDtBQUNGLEdBVkQ7O0FBWUF0WSxPQUFLLENBQUNnTixZQUFOLEdBQXFCLFlBQVc7QUFDOUIsUUFBSXVMLFNBQVMsR0FBRyxLQUFLM0IsWUFBTCxHQUFvQixhQUFwQixHQUFvQyxZQUFwRDtBQUNBLFFBQUlzTCxRQUFRLEdBQUcsS0FBSzdMLFdBQUwsRUFBZjtBQUNBLFFBQUk4TCxVQUFVLEdBQUdELFFBQVEsR0FBR0EsUUFBUSxDQUFDclgsSUFBVCxDQUFlME4sU0FBZixDQUFILEdBQWdDLENBQXpEO0FBQ0EsUUFBSXRCLFVBQVUsR0FBRyxLQUFLdkwsVUFBTCxJQUFvQixLQUFLd0wsV0FBTCxHQUFtQmlMLFVBQXZDLENBQWpCO0FBQ0EsU0FBSy9YLE1BQUwsR0FBYyxLQUFLcEIsQ0FBTCxHQUFTLEtBQUtrTyxXQUFkLEdBQTRCRCxVQUFVLEdBQUcsS0FBS3pLLE1BQUwsQ0FBWWEsU0FBbkU7QUFDRCxHQU5EOztBQVFBck4sT0FBSyxDQUFDcVcsV0FBTixHQUFvQixZQUFXO0FBQzdCLFdBQU8sS0FBS2xRLEtBQUwsQ0FBWSxLQUFLQSxLQUFMLENBQVcxRyxNQUFYLEdBQW9CLENBQWhDLENBQVA7QUFDRCxHQUZEOztBQUlBTyxPQUFLLENBQUN1SSxNQUFOLEdBQWUsWUFBVztBQUN4QixTQUFLcEMsS0FBTCxDQUFXL0MsT0FBWCxDQUFvQixVQUFVa0QsSUFBVixFQUFpQjtBQUNuQ0EsVUFBSSxDQUFDaUMsTUFBTDtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BdkksT0FBSyxDQUFDNE0sUUFBTixHQUFpQixZQUFXO0FBQzFCLFNBQUt6RyxLQUFMLENBQVcvQyxPQUFYLENBQW9CLFVBQVVrRCxJQUFWLEVBQWlCO0FBQ25DQSxVQUFJLENBQUNzRyxRQUFMO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUE1TSxPQUFLLENBQUM2WixlQUFOLEdBQXdCLFlBQVc7QUFDakMsV0FBTyxLQUFLMVQsS0FBTCxDQUFXaVEsR0FBWCxDQUFnQixVQUFVOVAsSUFBVixFQUFpQjtBQUN0QyxhQUFPQSxJQUFJLENBQUNFLE9BQVo7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpEOztBQU1BLFNBQU95TixLQUFQO0FBRUMsQ0F4RUMsQ0FBRixDOzs7Ozs7Ozs7Ozs7O0FDREE7Ozs7OztBQU1BOztBQUNBO0FBRUEsQ0FBRSxVQUFVblYsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7QUFDNUI7O0FBQTJCO0FBQzNCLE1BQUssSUFBTCxFQUFpRDtBQUMvQztBQUNBQyx3Q0FBUUQsT0FBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0QsR0FIRCxNQUdPLEVBTU47QUFFRixDQWJELEVBYUlELE1BYkosRUFhWSxTQUFTQyxPQUFULEdBQW1CO0FBQy9CLGVBRCtCLENBRy9CO0FBRUE7O0FBQ0EsV0FBU3FqQixZQUFULENBQXVCbEksS0FBdkIsRUFBK0I7QUFDN0IsUUFBSXRZLEdBQUcsR0FBR3lnQixVQUFVLENBQUVuSSxLQUFGLENBQXBCLENBRDZCLENBRTdCOztBQUNBLFFBQUlvSSxPQUFPLEdBQUdwSSxLQUFLLENBQUMzWixPQUFOLENBQWMsR0FBZCxLQUFzQixDQUFDLENBQXZCLElBQTRCLENBQUNnaUIsS0FBSyxDQUFFM2dCLEdBQUYsQ0FBaEQ7QUFDQSxXQUFPMGdCLE9BQU8sSUFBSTFnQixHQUFsQjtBQUNEOztBQUVELFdBQVM0Z0IsSUFBVCxHQUFnQixDQUFFOztBQUVsQixNQUFJQyxRQUFRLEdBQUcsT0FBTzVkLE9BQVAsSUFBa0IsV0FBbEIsR0FBZ0MyZCxJQUFoQyxHQUNiLFVBQVVFLE9BQVYsRUFBb0I7QUFDbEI3ZCxXQUFPLENBQUNnQixLQUFSLENBQWU2YyxPQUFmO0FBQ0QsR0FISCxDQWYrQixDQW9CL0I7O0FBRUEsTUFBSUMsWUFBWSxHQUFHLENBQ2pCLGFBRGlCLEVBRWpCLGNBRmlCLEVBR2pCLFlBSGlCLEVBSWpCLGVBSmlCLEVBS2pCLFlBTGlCLEVBTWpCLGFBTmlCLEVBT2pCLFdBUGlCLEVBUWpCLGNBUmlCLEVBU2pCLGlCQVRpQixFQVVqQixrQkFWaUIsRUFXakIsZ0JBWGlCLEVBWWpCLG1CQVppQixDQUFuQjtBQWVBLE1BQUlDLGtCQUFrQixHQUFHRCxZQUFZLENBQUNsakIsTUFBdEM7O0FBRUEsV0FBU29qQixXQUFULEdBQXVCO0FBQ3JCLFFBQUloWSxJQUFJLEdBQUc7QUFDVHVDLFdBQUssRUFBRSxDQURFO0FBRVQ2SyxZQUFNLEVBQUUsQ0FGQztBQUdUbk4sZ0JBQVUsRUFBRSxDQUhIO0FBSVRnWSxpQkFBVyxFQUFFLENBSko7QUFLVHBYLGdCQUFVLEVBQUUsQ0FMSDtBQU1UK0ssaUJBQVcsRUFBRTtBQU5KLEtBQVg7O0FBUUEsU0FBTSxJQUFJalgsQ0FBQyxHQUFDLENBQVosRUFBZUEsQ0FBQyxHQUFHb2pCLGtCQUFuQixFQUF1Q3BqQixDQUFDLEVBQXhDLEVBQTZDO0FBQzNDLFVBQUl1akIsV0FBVyxHQUFHSixZQUFZLENBQUNuakIsQ0FBRCxDQUE5QjtBQUNBcUwsVUFBSSxDQUFFa1ksV0FBRixDQUFKLEdBQXNCLENBQXRCO0FBQ0Q7O0FBQ0QsV0FBT2xZLElBQVA7QUFDRCxHQXJEOEIsQ0F1RC9COztBQUVBOzs7Ozs7QUFJQSxXQUFTbVksUUFBVCxDQUFtQnBqQixJQUFuQixFQUEwQjtBQUN4QixRQUFJb0ssS0FBSyxHQUFHbUssZ0JBQWdCLENBQUV2VSxJQUFGLENBQTVCOztBQUNBLFFBQUssQ0FBQ29LLEtBQU4sRUFBYztBQUNaeVksY0FBUSxDQUFFLG9CQUFvQnpZLEtBQXBCLEdBQ1IsNkRBRFEsR0FFUixnQ0FGTSxDQUFSO0FBR0Q7O0FBQ0QsV0FBT0EsS0FBUDtBQUNELEdBckU4QixDQXVFL0I7OztBQUVBLE1BQUlpWixPQUFPLEdBQUcsS0FBZDtBQUVBLE1BQUlDLGNBQUo7QUFFQTs7Ozs7O0FBS0EsV0FBU0MsS0FBVCxHQUFpQjtBQUNmO0FBQ0EsUUFBS0YsT0FBTCxFQUFlO0FBQ2I7QUFDRDs7QUFDREEsV0FBTyxHQUFHLElBQVYsQ0FMZSxDQU9mOztBQUVBOzs7OztBQUlBLFFBQUlwaEIsR0FBRyxHQUFHYSxRQUFRLENBQUMyUyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQXhULE9BQUcsQ0FBQ21JLEtBQUosQ0FBVW9ELEtBQVYsR0FBa0IsT0FBbEI7QUFDQXZMLE9BQUcsQ0FBQ21JLEtBQUosQ0FBVW9aLE9BQVYsR0FBb0IsaUJBQXBCO0FBQ0F2aEIsT0FBRyxDQUFDbUksS0FBSixDQUFVcVosV0FBVixHQUF3QixPQUF4QjtBQUNBeGhCLE9BQUcsQ0FBQ21JLEtBQUosQ0FBVXNaLFdBQVYsR0FBd0IsaUJBQXhCO0FBQ0F6aEIsT0FBRyxDQUFDbUksS0FBSixDQUFVdVosU0FBVixHQUFzQixZQUF0QjtBQUVBLFFBQUk1Z0IsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQzhnQixlQUFyQztBQUNBN2dCLFFBQUksQ0FBQzRELFdBQUwsQ0FBa0IxRSxHQUFsQjtBQUNBLFFBQUltSSxLQUFLLEdBQUdnWixRQUFRLENBQUVuaEIsR0FBRixDQUFwQixDQXRCZSxDQXVCZjs7QUFDQXFoQixrQkFBYyxHQUFHMWIsSUFBSSxDQUFDb0QsS0FBTCxDQUFZd1gsWUFBWSxDQUFFcFksS0FBSyxDQUFDb0QsS0FBUixDQUF4QixLQUE2QyxHQUE5RDtBQUNBeEYsV0FBTyxDQUFDc2IsY0FBUixHQUF5QkEsY0FBekI7QUFFQXZnQixRQUFJLENBQUM4SyxXQUFMLENBQWtCNUwsR0FBbEI7QUFDRCxHQTlHOEIsQ0FnSC9COzs7QUFFQSxXQUFTK0YsT0FBVCxDQUFrQmhJLElBQWxCLEVBQXlCO0FBQ3ZCdWpCLFNBQUssR0FEa0IsQ0FHdkI7O0FBQ0EsUUFBSyxPQUFPdmpCLElBQVAsSUFBZSxRQUFwQixFQUErQjtBQUM3QkEsVUFBSSxHQUFHOEMsUUFBUSxDQUFDRyxhQUFULENBQXdCakQsSUFBeEIsQ0FBUDtBQUNELEtBTnNCLENBUXZCOzs7QUFDQSxRQUFLLENBQUNBLElBQUQsSUFBUyxRQUFPQSxJQUFQLEtBQWUsUUFBeEIsSUFBb0MsQ0FBQ0EsSUFBSSxDQUFDNmpCLFFBQS9DLEVBQTBEO0FBQ3hEO0FBQ0Q7O0FBRUQsUUFBSXpaLEtBQUssR0FBR2daLFFBQVEsQ0FBRXBqQixJQUFGLENBQXBCLENBYnVCLENBZXZCOztBQUNBLFFBQUtvSyxLQUFLLENBQUMwWixPQUFOLElBQWlCLE1BQXRCLEVBQStCO0FBQzdCLGFBQU9iLFdBQVcsRUFBbEI7QUFDRDs7QUFFRCxRQUFJaFksSUFBSSxHQUFHLEVBQVg7QUFDQUEsUUFBSSxDQUFDdUMsS0FBTCxHQUFheE4sSUFBSSxDQUFDK2pCLFdBQWxCO0FBQ0E5WSxRQUFJLENBQUNvTixNQUFMLEdBQWNyWSxJQUFJLENBQUNna0IsWUFBbkI7QUFFQSxRQUFJQyxXQUFXLEdBQUdoWixJQUFJLENBQUNnWixXQUFMLEdBQW1CN1osS0FBSyxDQUFDdVosU0FBTixJQUFtQixZQUF4RCxDQXhCdUIsQ0EwQnZCOztBQUNBLFNBQU0sSUFBSS9qQixDQUFDLEdBQUMsQ0FBWixFQUFlQSxDQUFDLEdBQUdvakIsa0JBQW5CLEVBQXVDcGpCLENBQUMsRUFBeEMsRUFBNkM7QUFDM0MsVUFBSXVqQixXQUFXLEdBQUdKLFlBQVksQ0FBQ25qQixDQUFELENBQTlCO0FBQ0EsVUFBSTBhLEtBQUssR0FBR2xRLEtBQUssQ0FBRStZLFdBQUYsQ0FBakI7QUFDQSxVQUFJbmhCLEdBQUcsR0FBR3lnQixVQUFVLENBQUVuSSxLQUFGLENBQXBCLENBSDJDLENBSTNDOztBQUNBclAsVUFBSSxDQUFFa1ksV0FBRixDQUFKLEdBQXNCLENBQUNSLEtBQUssQ0FBRTNnQixHQUFGLENBQU4sR0FBZ0JBLEdBQWhCLEdBQXNCLENBQTVDO0FBQ0Q7O0FBRUQsUUFBSWtpQixZQUFZLEdBQUdqWixJQUFJLENBQUNrWixXQUFMLEdBQW1CbFosSUFBSSxDQUFDbVosWUFBM0M7QUFDQSxRQUFJQyxhQUFhLEdBQUdwWixJQUFJLENBQUNxWixVQUFMLEdBQWtCclosSUFBSSxDQUFDc1osYUFBM0M7QUFDQSxRQUFJQyxXQUFXLEdBQUd2WixJQUFJLENBQUN3WixVQUFMLEdBQWtCeFosSUFBSSxDQUFDeVosV0FBekM7QUFDQSxRQUFJQyxZQUFZLEdBQUcxWixJQUFJLENBQUMyWixTQUFMLEdBQWlCM1osSUFBSSxDQUFDNFosWUFBekM7QUFDQSxRQUFJbkIsV0FBVyxHQUFHelksSUFBSSxDQUFDNlosZUFBTCxHQUF1QjdaLElBQUksQ0FBQzhaLGdCQUE5QztBQUNBLFFBQUlDLFlBQVksR0FBRy9aLElBQUksQ0FBQ2dhLGNBQUwsR0FBc0JoYSxJQUFJLENBQUNpYSxpQkFBOUM7QUFFQSxRQUFJQyxvQkFBb0IsR0FBR2xCLFdBQVcsSUFBSVgsY0FBMUMsQ0ExQ3VCLENBNEN2Qjs7QUFDQSxRQUFJOEIsVUFBVSxHQUFHNUMsWUFBWSxDQUFFcFksS0FBSyxDQUFDb0QsS0FBUixDQUE3Qjs7QUFDQSxRQUFLNFgsVUFBVSxLQUFLLEtBQXBCLEVBQTRCO0FBQzFCbmEsVUFBSSxDQUFDdUMsS0FBTCxHQUFhNFgsVUFBVSxLQUNyQjtBQUNFRCwwQkFBb0IsR0FBRyxDQUFILEdBQU9qQixZQUFZLEdBQUdSLFdBRnZCLENBQXZCO0FBR0Q7O0FBRUQsUUFBSTJCLFdBQVcsR0FBRzdDLFlBQVksQ0FBRXBZLEtBQUssQ0FBQ2lPLE1BQVIsQ0FBOUI7O0FBQ0EsUUFBS2dOLFdBQVcsS0FBSyxLQUFyQixFQUE2QjtBQUMzQnBhLFVBQUksQ0FBQ29OLE1BQUwsR0FBY2dOLFdBQVcsS0FDdkI7QUFDRUYsMEJBQW9CLEdBQUcsQ0FBSCxHQUFPZCxhQUFhLEdBQUdXLFlBRnRCLENBQXpCO0FBR0Q7O0FBRUQvWixRQUFJLENBQUNDLFVBQUwsR0FBa0JELElBQUksQ0FBQ3VDLEtBQUwsSUFBZTBXLFlBQVksR0FBR1IsV0FBOUIsQ0FBbEI7QUFDQXpZLFFBQUksQ0FBQ2lZLFdBQUwsR0FBbUJqWSxJQUFJLENBQUNvTixNQUFMLElBQWdCZ00sYUFBYSxHQUFHVyxZQUFoQyxDQUFuQjtBQUVBL1osUUFBSSxDQUFDYSxVQUFMLEdBQWtCYixJQUFJLENBQUN1QyxLQUFMLEdBQWFnWCxXQUEvQjtBQUNBdlosUUFBSSxDQUFDNEwsV0FBTCxHQUFtQjVMLElBQUksQ0FBQ29OLE1BQUwsR0FBY3NNLFlBQWpDO0FBRUEsV0FBTzFaLElBQVA7QUFDRDs7QUFFRCxTQUFPakQsT0FBUDtBQUVDLENBck1ELEU7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBLE9BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FDTUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsQ0FLQTtBQUVBOzs7QUFDQSx3Q0FSQSxDQVFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxXQVpBLENBY0E7OztBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsV0FGQTs7QUFHQTtBQUNBO0FBQ0EsV0F4QkEsQ0EwQkE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7O0FBR0EsaUVBQ0Esc0JBREEsRUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQXJDQSxDQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0F6QkE7S0RoRUEsRSxFQUFBOzs7QUVBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBLFdBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxhQUZBOztBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxXQWJBLE1BYUE7QUFDQTtBQUNBO0FBQ0EsYUFGQTs7QUFHQTtBQUNBLFdBTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxhQUZBOztBQUdBO0FBQ0E7QUFFQSxTQWhDQSxFQWdDQSxJQWhDQSxDQWdDQSxJQWhDQTs7OztNRkRBOztBR0FBO0FBQ0Esd0MsQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBLE9BbkJBOztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsQ0FLQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsQ0FLQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWEEsQyxDQWFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCLENBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQTs7QUFJQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBR0E7QUFBQTtBQUFBO1VIdkxBOzs7QUlBQTtBQUFBLFlBQ0Esc0RBREE7QUFBQSxZQUVBLDJCQUZBO0FBQUEsWUFHQSx5QkFIQTtBQUFBLFlBSUEsOEJBSkE7QUFBQSxZQUtBLCtEQUxBOztBQU9BO0FBQ0E7QUFDQSx3REFDQSwyQ0FEQTtBQUVBLFMsQ0FFQTs7O0FBQ0E7QUFDQTtBQUFBLGNBQ0EsTUFEQTtB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Y0FBUSxFQUFFO0FBTDJDLEtBQXpDLENBQWI7QUFPQTtBQUNELENBVkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG4iLCIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2Mi4wLjdcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24oIG1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgZmZFbGVtcyA9IFtdO1xuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIGlmICggISggZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAvLyBmaWx0ZXJcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRFbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggY2hpbGRFbGVtc1tpXSApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZmRWxlbXM7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIHZhciB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggY2FsbGJhY2sgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuIiwiLy8gYWRkLCByZW1vdmUgY2VsbFxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIHV0aWxzICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGFwcGVuZCBjZWxscyB0byBhIGRvY3VtZW50IGZyYWdtZW50XG5mdW5jdGlvbiBnZXRDZWxsc0ZyYWdtZW50KCBjZWxscyApIHtcbiAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCggY2VsbC5lbGVtZW50ICk7XG4gIH0pO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZC9yZW1vdmUgY2VsbCBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG4vKipcbiAqIEluc2VydCwgcHJlcGVuZCwgb3IgYXBwZW5kIGNlbGxzXG4gKiBAcGFyYW0ge0VsZW1lbnQsIEFycmF5LCBOb2RlTGlzdH0gZWxlbXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5kZXhcbiAqL1xucHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24oIGVsZW1zLCBpbmRleCApIHtcbiAgdmFyIGNlbGxzID0gdGhpcy5fbWFrZUNlbGxzKCBlbGVtcyApO1xuICBpZiAoICFjZWxscyB8fCAhY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbGVuID0gdGhpcy5jZWxscy5sZW5ndGg7XG4gIC8vIGRlZmF1bHQgdG8gYXBwZW5kXG4gIGluZGV4ID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IGxlbiA6IGluZGV4O1xuICAvLyBhZGQgY2VsbHMgd2l0aCBkb2N1bWVudCBmcmFnbWVudFxuICB2YXIgZnJhZ21lbnQgPSBnZXRDZWxsc0ZyYWdtZW50KCBjZWxscyApO1xuICAvLyBhcHBlbmQgdG8gc2xpZGVyXG4gIHZhciBpc0FwcGVuZCA9IGluZGV4ID09IGxlbjtcbiAgaWYgKCBpc0FwcGVuZCApIHtcbiAgICB0aGlzLnNsaWRlci5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zZXJ0Q2VsbEVsZW1lbnQgPSB0aGlzLmNlbGxzWyBpbmRleCBdLmVsZW1lbnQ7XG4gICAgdGhpcy5zbGlkZXIuaW5zZXJ0QmVmb3JlKCBmcmFnbWVudCwgaW5zZXJ0Q2VsbEVsZW1lbnQgKTtcbiAgfVxuICAvLyBhZGQgdG8gdGhpcy5jZWxsc1xuICBpZiAoIGluZGV4ID09PSAwICkge1xuICAgIC8vIHByZXBlbmQsIGFkZCB0byBzdGFydFxuICAgIHRoaXMuY2VsbHMgPSBjZWxscy5jb25jYXQoIHRoaXMuY2VsbHMgKTtcbiAgfSBlbHNlIGlmICggaXNBcHBlbmQgKSB7XG4gICAgLy8gYXBwZW5kLCBhZGQgdG8gZW5kXG4gICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuY29uY2F0KCBjZWxscyApO1xuICB9IGVsc2Uge1xuICAgIC8vIGluc2VydCBpbiB0aGlzLmNlbGxzXG4gICAgdmFyIGVuZENlbGxzID0gdGhpcy5jZWxscy5zcGxpY2UoIGluZGV4LCBsZW4gLSBpbmRleCApO1xuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmNvbmNhdCggY2VsbHMgKS5jb25jYXQoIGVuZENlbGxzICk7XG4gIH1cblxuICB0aGlzLl9zaXplQ2VsbHMoIGNlbGxzICk7XG4gIHRoaXMuY2VsbENoYW5nZSggaW5kZXgsIHRydWUgKTtcbn07XG5cbnByb3RvLmFwcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCB0aGlzLmNlbGxzLmxlbmd0aCApO1xufTtcblxucHJvdG8ucHJlcGVuZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdGhpcy5pbnNlcnQoIGVsZW1zLCAwICk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGNlbGxzID0gdGhpcy5nZXRDZWxscyggZWxlbXMgKTtcbiAgaWYgKCAhY2VsbHMgfHwgIWNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWluQ2VsbEluZGV4ID0gdGhpcy5jZWxscy5sZW5ndGggLSAxO1xuICAvLyByZW1vdmUgY2VsbHMgZnJvbSBjb2xsZWN0aW9uICYgRE9NXG4gIGNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwucmVtb3ZlKCk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gICAgbWluQ2VsbEluZGV4ID0gTWF0aC5taW4oIGluZGV4LCBtaW5DZWxsSW5kZXggKTtcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLmNlbGxzLCBjZWxsICk7XG4gIH0sIHRoaXMgKTtcblxuICB0aGlzLmNlbGxDaGFuZ2UoIG1pbkNlbGxJbmRleCwgdHJ1ZSApO1xufTtcblxuLyoqXG4gKiBsb2dpYyB0byBiZSBydW4gYWZ0ZXIgYSBjZWxsJ3Mgc2l6ZSBjaGFuZ2VzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW0gLSBjZWxsJ3MgZWxlbWVudFxuICovXG5wcm90by5jZWxsU2l6ZUNoYW5nZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgY2VsbCA9IHRoaXMuZ2V0Q2VsbCggZWxlbSApO1xuICBpZiAoICFjZWxsICkge1xuICAgIHJldHVybjtcbiAgfVxuICBjZWxsLmdldFNpemUoKTtcblxuICB2YXIgaW5kZXggPSB0aGlzLmNlbGxzLmluZGV4T2YoIGNlbGwgKTtcbiAgdGhpcy5jZWxsQ2hhbmdlKCBpbmRleCApO1xufTtcblxuLyoqXG4gKiBsb2dpYyBhbnkgdGltZSBhIGNlbGwgaXMgY2hhbmdlZDogYWRkZWQsIHJlbW92ZWQsIG9yIHNpemUgY2hhbmdlZFxuICogQHBhcmFtIHtJbnRlZ2VyfSBjaGFuZ2VkQ2VsbEluZGV4IC0gaW5kZXggb2YgdGhlIGNoYW5nZWQgY2VsbCwgb3B0aW9uYWxcbiAqL1xucHJvdG8uY2VsbENoYW5nZSA9IGZ1bmN0aW9uKCBjaGFuZ2VkQ2VsbEluZGV4LCBpc1Bvc2l0aW9uaW5nU2xpZGVyICkge1xuICB2YXIgcHJldlNlbGVjdGVkRWxlbSA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50O1xuICB0aGlzLl9wb3NpdGlvbkNlbGxzKCBjaGFuZ2VkQ2VsbEluZGV4ICk7XG4gIHRoaXMuX2dldFdyYXBTaGlmdENlbGxzKCk7XG4gIHRoaXMuc2V0R2FsbGVyeVNpemUoKTtcbiAgLy8gdXBkYXRlIHNlbGVjdGVkSW5kZXhcbiAgLy8gdHJ5IHRvIG1haW50YWluIHBvc2l0aW9uICYgc2VsZWN0IHByZXZpb3VzIHNlbGVjdGVkIGVsZW1lbnRcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIHByZXZTZWxlY3RlZEVsZW0gKTtcbiAgaWYgKCBjZWxsICkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0Q2VsbFNsaWRlSW5kZXgoIGNlbGwgKTtcbiAgfVxuICB0aGlzLnNlbGVjdGVkSW5kZXggPSBNYXRoLm1pbiggdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSwgdGhpcy5zZWxlY3RlZEluZGV4ICk7XG5cbiAgdGhpcy5lbWl0RXZlbnQoICdjZWxsQ2hhbmdlJywgWyBjaGFuZ2VkQ2VsbEluZGV4IF0gKTtcbiAgLy8gcG9zaXRpb24gc2xpZGVyXG4gIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgLy8gZG8gbm90IHBvc2l0aW9uIHNsaWRlciBhZnRlciBsYXp5IGxvYWRcbiAgaWYgKCBpc1Bvc2l0aW9uaW5nU2xpZGVyICkge1xuICAgIHRoaXMucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIGFuaW1hdGVcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gd2luZG93LkZsaWNraXR5IHx8IHt9O1xuICAgIHdpbmRvdy5GbGlja2l0eS5hbmltYXRlUHJvdG90eXBlID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhbmltYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IHt9O1xuXG5wcm90by5zdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNBbmltYXRpbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gIHRoaXMucmVzdGluZ0ZyYW1lcyA9IDA7XG4gIHRoaXMuYW5pbWF0ZSgpO1xufTtcblxucHJvdG8uYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFwcGx5RHJhZ0ZvcmNlKCk7XG4gIHRoaXMuYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24oKTtcblxuICB2YXIgcHJldmlvdXNYID0gdGhpcy54O1xuXG4gIHRoaXMuaW50ZWdyYXRlUGh5c2ljcygpO1xuICB0aGlzLnBvc2l0aW9uU2xpZGVyKCk7XG4gIHRoaXMuc2V0dGxlKCBwcmV2aW91c1ggKTtcbiAgLy8gYW5pbWF0ZSBuZXh0IGZyYW1lXG4gIGlmICggdGhpcy5pc0FuaW1hdGluZyApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggZnVuY3Rpb24gYW5pbWF0ZUZyYW1lKCkge1xuICAgICAgX3RoaXMuYW5pbWF0ZSgpO1xuICAgIH0pO1xuICB9XG59O1xuXG5wcm90by5wb3NpdGlvblNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHRoaXMueDtcbiAgLy8gd3JhcCBwb3NpdGlvbiBhcm91bmRcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCAmJiB0aGlzLmNlbGxzLmxlbmd0aCA+IDEgKSB7XG4gICAgeCA9IHV0aWxzLm1vZHVsbyggeCwgdGhpcy5zbGlkZWFibGVXaWR0aCApO1xuICAgIHggPSB4IC0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgICB0aGlzLnNoaWZ0V3JhcENlbGxzKCB4ICk7XG4gIH1cblxuICB0aGlzLnNldFRyYW5zbGF0ZVgoIHgsIHRoaXMuaXNBbmltYXRpbmcgKTtcbiAgdGhpcy5kaXNwYXRjaFNjcm9sbEV2ZW50KCk7XG59O1xuXG5wcm90by5zZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24oIHgsIGlzM2QgKSB7XG4gIHggKz0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgLy8gcmV2ZXJzZSBpZiByaWdodC10by1sZWZ0IGFuZCB1c2luZyB0cmFuc2Zvcm1cbiAgeCA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/IC14IDogeDtcbiAgdmFyIHRyYW5zbGF0ZVggPSB0aGlzLmdldFBvc2l0aW9uVmFsdWUoIHggKTtcbiAgLy8gdXNlIDNEIHRyYW5mb3JtcyBmb3IgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIG9uIGlPU1xuICAvLyBidXQgdXNlIDJEIHdoZW4gc2V0dGxlZCwgZm9yIGJldHRlciBmb250LXJlbmRlcmluZ1xuICB0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBpczNkID9cbiAgICAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAnLDAsMCknIDogJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAnKSc7XG59O1xuXG5wcm90by5kaXNwYXRjaFNjcm9sbEV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmaXJzdFNsaWRlID0gdGhpcy5zbGlkZXNbMF07XG4gIGlmICggIWZpcnN0U2xpZGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwb3NpdGlvblggPSAtdGhpcy54IC0gZmlyc3RTbGlkZS50YXJnZXQ7XG4gIHZhciBwcm9ncmVzcyA9IHBvc2l0aW9uWCAvIHRoaXMuc2xpZGVzV2lkdGg7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3Njcm9sbCcsIG51bGwsIFsgcHJvZ3Jlc3MsIHBvc2l0aW9uWCBdICk7XG59O1xuXG5wcm90by5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMueCA9IC10aGlzLnNlbGVjdGVkU2xpZGUudGFyZ2V0O1xuICB0aGlzLnZlbG9jaXR5ID0gMDsgLy8gc3RvcCB3b2JibGVcbiAgdGhpcy5wb3NpdGlvblNsaWRlcigpO1xufTtcblxucHJvdG8uZ2V0UG9zaXRpb25WYWx1ZSA9IGZ1bmN0aW9uKCBwb3NpdGlvbiApIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICkge1xuICAgIC8vIHBlcmNlbnQgcG9zaXRpb24sIHJvdW5kIHRvIDIgZGlnaXRzLCBsaWtlIDEyLjM0JVxuICAgIHJldHVybiAoIE1hdGgucm91bmQoICggcG9zaXRpb24gLyB0aGlzLnNpemUuaW5uZXJXaWR0aCApICogMTAwMDAgKSAqIDAuMDEgKSsgJyUnO1xuICB9IGVsc2Uge1xuICAgIC8vIHBpeGVsIHBvc2l0aW9uaW5nXG4gICAgcmV0dXJuIE1hdGgucm91bmQoIHBvc2l0aW9uICkgKyAncHgnO1xuICB9XG59O1xuXG5wcm90by5zZXR0bGUgPSBmdW5jdGlvbiggcHJldmlvdXNYICkge1xuICAvLyBrZWVwIHRyYWNrIG9mIGZyYW1lcyB3aGVyZSB4IGhhc24ndCBtb3ZlZFxuICBpZiAoICF0aGlzLmlzUG9pbnRlckRvd24gJiYgTWF0aC5yb3VuZCggdGhpcy54ICogMTAwICkgPT0gTWF0aC5yb3VuZCggcHJldmlvdXNYICogMTAwICkgKSB7XG4gICAgdGhpcy5yZXN0aW5nRnJhbWVzKys7XG4gIH1cbiAgLy8gc3RvcCBhbmltYXRpbmcgaWYgcmVzdGluZyBmb3IgMyBvciBtb3JlIGZyYW1lc1xuICBpZiAoIHRoaXMucmVzdGluZ0ZyYW1lcyA+IDIgKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLmlzRnJlZVNjcm9sbGluZztcbiAgICAvLyByZW5kZXIgcG9zaXRpb24gd2l0aCB0cmFuc2xhdGVYIHdoZW4gc2V0dGxlZFxuICAgIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzZXR0bGUnLCBudWxsLCBbIHRoaXMuc2VsZWN0ZWRJbmRleCBdICk7XG4gIH1cbn07XG5cbnByb3RvLnNoaWZ0V3JhcENlbGxzID0gZnVuY3Rpb24oIHggKSB7XG4gIC8vIHNoaWZ0IGJlZm9yZSBjZWxsc1xuICB2YXIgYmVmb3JlR2FwID0gdGhpcy5jdXJzb3JQb3NpdGlvbiArIHg7XG4gIHRoaXMuX3NoaWZ0Q2VsbHMoIHRoaXMuYmVmb3JlU2hpZnRDZWxscywgYmVmb3JlR2FwLCAtMSApO1xuICAvLyBzaGlmdCBhZnRlciBjZWxsc1xuICB2YXIgYWZ0ZXJHYXAgPSB0aGlzLnNpemUuaW5uZXJXaWR0aCAtICggeCArIHRoaXMuc2xpZGVhYmxlV2lkdGggKyB0aGlzLmN1cnNvclBvc2l0aW9uICk7XG4gIHRoaXMuX3NoaWZ0Q2VsbHMoIHRoaXMuYWZ0ZXJTaGlmdENlbGxzLCBhZnRlckdhcCwgMSApO1xufTtcblxucHJvdG8uX3NoaWZ0Q2VsbHMgPSBmdW5jdGlvbiggY2VsbHMsIGdhcCwgc2hpZnQgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IGNlbGxzW2ldO1xuICAgIHZhciBjZWxsU2hpZnQgPSBnYXAgPiAwID8gc2hpZnQgOiAwO1xuICAgIGNlbGwud3JhcFNoaWZ0KCBjZWxsU2hpZnQgKTtcbiAgICBnYXAgLT0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gIH1cbn07XG5cbnByb3RvLl91bnNoaWZ0Q2VsbHMgPSBmdW5jdGlvbiggY2VsbHMgKSB7XG4gIGlmICggIWNlbGxzIHx8ICFjZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoIHZhciBpPTA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICBjZWxsc1tpXS53cmFwU2hpZnQoIDAgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGh5c2ljcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5pbnRlZ3JhdGVQaHlzaWNzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5O1xuICB0aGlzLnZlbG9jaXR5ICo9IHRoaXMuZ2V0RnJpY3Rpb25GYWN0b3IoKTtcbn07XG5cbnByb3RvLmFwcGx5Rm9yY2UgPSBmdW5jdGlvbiggZm9yY2UgKSB7XG4gIHRoaXMudmVsb2NpdHkgKz0gZm9yY2U7XG59O1xuXG5wcm90by5nZXRGcmljdGlvbkZhY3RvciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gMSAtIHRoaXMub3B0aW9uc1sgdGhpcy5pc0ZyZWVTY3JvbGxpbmcgPyAnZnJlZVNjcm9sbEZyaWN0aW9uJyA6ICdmcmljdGlvbicgXTtcbn07XG5cbnByb3RvLmdldFJlc3RpbmdQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBteSB0aGFua3MgdG8gU3RldmVuIFdpdHRlbnMsIHdobyBzaW1wbGlmaWVkIHRoaXMgbWF0aCBncmVhdGx5XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLnZlbG9jaXR5IC8gKCAxIC0gdGhpcy5nZXRGcmljdGlvbkZhY3RvcigpICk7XG59O1xuXG5wcm90by5hcHBseURyYWdGb3JjZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlIHx8ICF0aGlzLmlzUG9pbnRlckRvd24gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNoYW5nZSB0aGUgcG9zaXRpb24gdG8gZHJhZyBwb3NpdGlvbiBieSBhcHBseWluZyBmb3JjZVxuICB2YXIgZHJhZ1ZlbG9jaXR5ID0gdGhpcy5kcmFnWCAtIHRoaXMueDtcbiAgdmFyIGRyYWdGb3JjZSA9IGRyYWdWZWxvY2l0eSAtIHRoaXMudmVsb2NpdHk7XG4gIHRoaXMuYXBwbHlGb3JjZSggZHJhZ0ZvcmNlICk7XG59O1xuXG5wcm90by5hcHBseVNlbGVjdGVkQXR0cmFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgYXR0cmFjdCBpZiBwb2ludGVyIGRvd24gb3Igbm8gc2xpZGVzXG4gIHZhciBkcmFnRG93biA9IHRoaXMuaXNEcmFnZ2FibGUgJiYgdGhpcy5pc1BvaW50ZXJEb3duO1xuICBpZiAoIGRyYWdEb3duIHx8IHRoaXMuaXNGcmVlU2Nyb2xsaW5nIHx8ICF0aGlzLnNsaWRlcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IHRoaXMuc2VsZWN0ZWRTbGlkZS50YXJnZXQgKiAtMSAtIHRoaXMueDtcbiAgdmFyIGZvcmNlID0gZGlzdGFuY2UgKiB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRBdHRyYWN0aW9uO1xuICB0aGlzLmFwcGx5Rm9yY2UoIGZvcmNlICk7XG59O1xuXG5yZXR1cm4gcHJvdG87XG5cbn0pKTtcbiIsIi8vIEZsaWNraXR5LkNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgXSwgZnVuY3Rpb24oIGdldFNpemUgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBnZXRTaXplICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuQ2VsbCA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ2VsbCggZWxlbSwgcGFyZW50ICkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG52YXIgcHJvdG8gPSBDZWxsLnByb3RvdHlwZTtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnNoaWZ0ID0gMDtcbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgc3R5bGVcbiAgdGhpcy51bnNlbGVjdCgpO1xuICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgdmFyIHNpZGUgPSB0aGlzLnBhcmVudC5vcmlnaW5TaWRlO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIHNpZGUgXSA9ICcnO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHggKTtcbn07XG5cbi8vIHNldERlZmF1bHRUYXJnZXQgdjEgbWV0aG9kLCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgcmVtb3ZlIGluIHYzXG5wcm90by51cGRhdGVUYXJnZXQgPSBwcm90by5zZXREZWZhdWx0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXJnaW5Qcm9wZXJ0eSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLnNpemVbIG1hcmdpblByb3BlcnR5IF0gK1xuICAgIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLnJlbmRlclBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIC8vIHJlbmRlciBwb3NpdGlvbiBvZiBjZWxsIHdpdGggaW4gc2xpZGVyXG4gIHZhciBzaWRlID0gdGhpcy5wYXJlbnQub3JpZ2luU2lkZTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBzaWRlIF0gPSB0aGlzLnBhcmVudC5nZXRQb3NpdGlvblZhbHVlKCB4ICk7XG59O1xuXG5wcm90by5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59O1xuXG5wcm90by51bnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZmFjdG9yIC0gMCwgMSwgb3IgLTFcbioqL1xucHJvdG8ud3JhcFNoaWZ0ID0gZnVuY3Rpb24oIHNoaWZ0ICkge1xuICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHRoaXMueCArIHRoaXMucGFyZW50LnNsaWRlYWJsZVdpZHRoICogc2hpZnQgKTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5yZXR1cm4gQ2VsbDtcblxufSkpO1xuIiwiLy8gZHJhZ1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd1bmlkcmFnZ2VyL3VuaWRyYWdnZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pZHJhZ2dlciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3VuaWRyYWdnZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LkZsaWNraXR5ID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5VbmlkcmFnZ2VyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlkcmFnZ2VyLCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBkZWZhdWx0cyAtLS0tLSAvL1xuXG51dGlscy5leHRlbmQoIEZsaWNraXR5LmRlZmF1bHRzLCB7XG4gIGRyYWdnYWJsZTogJz4xJyxcbiAgZHJhZ1RocmVzaG9sZDogMyxcbn0pO1xuXG4vLyAtLS0tLSBjcmVhdGUgLS0tLS0gLy9cblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlRHJhZycpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIHByb3RvdHlwZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG51dGlscy5leHRlbmQoIHByb3RvLCBVbmlkcmFnZ2VyLnByb3RvdHlwZSApO1xucHJvdG8uX3RvdWNoQWN0aW9uVmFsdWUgPSAncGFuLXknO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzVG91Y2ggPSAnY3JlYXRlVG91Y2gnIGluIGRvY3VtZW50O1xudmFyIGlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgPSBmYWxzZTtcblxucHJvdG8uX2NyZWF0ZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5vbkFjdGl2YXRlRHJhZyApO1xuICB0aGlzLm9uKCAndWlDaGFuZ2UnLCB0aGlzLl91aUNoYW5nZURyYWcgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLm9uRGVhY3RpdmF0ZURyYWcgKTtcbiAgdGhpcy5vbiggJ2NlbGxDaGFuZ2UnLCB0aGlzLnVwZGF0ZURyYWdnYWJsZSApO1xuICAvLyBUT0RPIHVwZGF0ZURyYWdnYWJsZSBvbiByZXNpemU/IGlmIGdyb3VwQ2VsbHMgJiBzbGlkZXMgY2hhbmdlXG4gIC8vIEhBQ0sgLSBhZGQgc2VlbWluZ2x5IGlubm9jdW91cyBoYW5kbGVyIHRvIGZpeCBpT1MgMTAgc2Nyb2xsIGJlaGF2aW9yXG4gIC8vICM0NTcsIFJ1YmFYYS9Tb3J0YWJsZSM5NzNcbiAgaWYgKCBpc1RvdWNoICYmICFpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgaXNUb3VjaG1vdmVTY3JvbGxDYW5jZWxlZCA9IHRydWU7XG4gIH1cbn07XG5cbnByb3RvLm9uQWN0aXZhdGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaGFuZGxlcyA9IFsgdGhpcy52aWV3cG9ydCBdO1xuICB0aGlzLmJpbmRIYW5kbGVzKCk7XG4gIHRoaXMudXBkYXRlRHJhZ2dhYmxlKCk7XG59O1xuXG5wcm90by5vbkRlYWN0aXZhdGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudW5iaW5kSGFuZGxlcygpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ2dhYmxlJyk7XG59O1xuXG5wcm90by51cGRhdGVEcmFnZ2FibGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZGlzYWJsZSBkcmFnZ2luZyBpZiBsZXNzIHRoYW4gMiBzbGlkZXMuICMyNzhcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID09ICc+MScgKSB7XG4gICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRoaXMuc2xpZGVzLmxlbmd0aCA+IDE7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRoaXMub3B0aW9ucy5kcmFnZ2FibGU7XG4gIH1cbiAgaWYgKCB0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1kcmFnZ2FibGUnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ2dhYmxlJyk7XG4gIH1cbn07XG5cbi8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5wcm90by5iaW5kRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgdGhpcy51cGRhdGVEcmFnZ2FibGUoKTtcbn07XG5cbnByb3RvLnVuYmluZERyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IGZhbHNlO1xuICB0aGlzLnVwZGF0ZURyYWdnYWJsZSgpO1xufTtcblxucHJvdG8uX3VpQ2hhbmdlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5pc0ZyZWVTY3JvbGxpbmc7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb2ludGVyIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICB0aGlzLl9wb2ludGVyRG93bkRlZmF1bHQoIGV2ZW50LCBwb2ludGVyICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpc09rYXkgPSB0aGlzLm9rYXlQb2ludGVyRG93biggZXZlbnQgKTtcbiAgaWYgKCAhaXNPa2F5ICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX3BvaW50ZXJEb3duUHJldmVudERlZmF1bHQoIGV2ZW50ICk7XG4gIHRoaXMucG9pbnRlckRvd25Gb2N1cyggZXZlbnQgKTtcbiAgLy8gYmx1clxuICBpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gdGhpcy5lbGVtZW50ICkge1xuICAgIC8vIGRvIG5vdCBibHVyIGlmIGFscmVhZHkgZm9jdXNlZFxuICAgIHRoaXMucG9pbnRlckRvd25CbHVyKCk7XG4gIH1cblxuICAvLyBzdG9wIGlmIGl0IHdhcyBtb3ZpbmdcbiAgdGhpcy5kcmFnWCA9IHRoaXMueDtcbiAgdGhpcy52aWV3cG9ydC5jbGFzc0xpc3QuYWRkKCdpcy1wb2ludGVyLWRvd24nKTtcbiAgLy8gdHJhY2sgc2Nyb2xsaW5nXG4gIHRoaXMucG9pbnRlckRvd25TY3JvbGwgPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMgKTtcblxuICB0aGlzLl9wb2ludGVyRG93bkRlZmF1bHQoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBkZWZhdWx0IHBvaW50ZXJEb3duIGxvZ2ljLCB1c2VkIGZvciBzdGF0aWNDbGlja1xucHJvdG8uX3BvaW50ZXJEb3duRGVmYXVsdCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gdHJhY2sgc3RhcnQgZXZlbnQgcG9zaXRpb25cbiAgLy8gU2FmYXJpIDkgb3ZlcnJpZGVzIHBhZ2VYIGFuZCBwYWdlWS4gVGhlc2UgdmFsdWVzIG5lZWRzIHRvIGJlIGNvcGllZC4gIzc3OVxuICB0aGlzLnBvaW50ZXJEb3duUG9pbnRlciA9IHtcbiAgICBwYWdlWDogcG9pbnRlci5wYWdlWCxcbiAgICBwYWdlWTogcG9pbnRlci5wYWdlWSxcbiAgfTtcbiAgLy8gYmluZCBtb3ZlIGFuZCBlbmQgZXZlbnRzXG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJEb3duJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG59O1xuXG52YXIgZm9jdXNOb2RlcyA9IHtcbiAgSU5QVVQ6IHRydWUsXG4gIFRFWFRBUkVBOiB0cnVlLFxuICBTRUxFQ1Q6IHRydWUsXG59O1xuXG5wcm90by5wb2ludGVyRG93bkZvY3VzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgaXNGb2N1c05vZGUgPSBmb2N1c05vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgaWYgKCAhaXNGb2N1c05vZGUgKSB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG59O1xuXG5wcm90by5fcG9pbnRlckRvd25QcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIGlzVG91Y2hTdGFydCA9IGV2ZW50LnR5cGUgPT0gJ3RvdWNoc3RhcnQnO1xuICB2YXIgaXNUb3VjaFBvaW50ZXIgPSBldmVudC5wb2ludGVyVHlwZSA9PSAndG91Y2gnO1xuICB2YXIgaXNGb2N1c05vZGUgPSBmb2N1c05vZGVzWyBldmVudC50YXJnZXQubm9kZU5hbWUgXTtcbiAgaWYgKCAhaXNUb3VjaFN0YXJ0ICYmICFpc1RvdWNoUG9pbnRlciAmJiAhaXNGb2N1c05vZGUgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gbW92ZSAtLS0tLSAvL1xuXG5wcm90by5oYXNEcmFnU3RhcnRlZCA9IGZ1bmN0aW9uKCBtb3ZlVmVjdG9yICkge1xuICByZXR1cm4gTWF0aC5hYnMoIG1vdmVWZWN0b3IueCApID4gdGhpcy5vcHRpb25zLmRyYWdUaHJlc2hvbGQ7XG59O1xuXG4vLyAtLS0tLSB1cCAtLS0tLSAvL1xuXG5wcm90by5wb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGRlbGV0ZSB0aGlzLmlzVG91Y2hTY3JvbGxpbmc7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtcG9pbnRlci1kb3duJyk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3BvaW50ZXJVcCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xuICB0aGlzLl9kcmFnUG9pbnRlclVwKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8ucG9pbnRlckRvbmUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzICk7XG4gIGRlbGV0ZSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZ2dpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmRyYWdTdGFydFBvc2l0aW9uID0gdGhpcy54O1xuICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcyApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnU3RhcnQnLCBldmVudCwgWyBwb2ludGVyIF0gKTtcbn07XG5cbnByb3RvLnBvaW50ZXJNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgbW92ZVZlY3RvciA9IHRoaXMuX2RyYWdQb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncG9pbnRlck1vdmUnLCBldmVudCwgWyBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbiAgdGhpcy5fZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG5wcm90by5kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB0aGlzLnByZXZpb3VzRHJhZ1ggPSB0aGlzLmRyYWdYO1xuICAvLyByZXZlcnNlIGlmIHJpZ2h0LXRvLWxlZnRcbiAgdmFyIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/IC0xIDogMTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICAvLyB3cmFwIGFyb3VuZCBtb3ZlLiAjNTg5XG4gICAgbW92ZVZlY3Rvci54ID0gbW92ZVZlY3Rvci54ICUgdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfVxuICB2YXIgZHJhZ1ggPSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uICsgbW92ZVZlY3Rvci54ICogZGlyZWN0aW9uO1xuXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIHRoaXMuc2xpZGVzLmxlbmd0aCApIHtcbiAgICAvLyBzbG93IGRyYWdcbiAgICB2YXIgb3JpZ2luQm91bmQgPSBNYXRoLm1heCggLXRoaXMuc2xpZGVzWzBdLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPiBvcmlnaW5Cb3VuZCA/ICggZHJhZ1ggKyBvcmlnaW5Cb3VuZCApICogMC41IDogZHJhZ1g7XG4gICAgdmFyIGVuZEJvdW5kID0gTWF0aC5taW4oIC10aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldCwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiApO1xuICAgIGRyYWdYID0gZHJhZ1ggPCBlbmRCb3VuZCA/ICggZHJhZ1ggKyBlbmRCb3VuZCApICogMC41IDogZHJhZ1g7XG4gIH1cblxuICB0aGlzLmRyYWdYID0gZHJhZ1g7XG5cbiAgdGhpcy5kcmFnTW92ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnTW92ZScsIGV2ZW50LCBbIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCApIHtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IHRydWU7XG4gIH1cbiAgLy8gc2V0IHNlbGVjdGVkSW5kZXggYmFzZWQgb24gd2hlcmUgZmxpY2sgd2lsbCBlbmQgdXBcbiAgdmFyIGluZGV4ID0gdGhpcy5kcmFnRW5kUmVzdGluZ1NlbGVjdCgpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmZyZWVTY3JvbGwgJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIC8vIGlmIGZyZWUtc2Nyb2xsICYgbm90IHdyYXAgYXJvdW5kXG4gICAgLy8gZG8gbm90IGZyZWUtc2Nyb2xsIGlmIGdvaW5nIG91dHNpZGUgb2YgYm91bmRpbmcgc2xpZGVzXG4gICAgLy8gc28gYm91bmRpbmcgc2xpZGVzIGNhbiBhdHRyYWN0IHNsaWRlciwgYW5kIGtlZXAgaXQgaW4gYm91bmRzXG4gICAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgICB0aGlzLmlzRnJlZVNjcm9sbGluZyA9IC1yZXN0aW5nWCA+IHRoaXMuc2xpZGVzWzBdLnRhcmdldCAmJlxuICAgICAgLXJlc3RpbmdYIDwgdGhpcy5nZXRMYXN0U2xpZGUoKS50YXJnZXQ7XG4gIH0gZWxzZSBpZiAoICF0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiBpbmRleCA9PSB0aGlzLnNlbGVjdGVkSW5kZXggKSB7XG4gICAgLy8gYm9vc3Qgc2VsZWN0aW9uIGlmIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgY2hhbmdlZFxuICAgIGluZGV4ICs9IHRoaXMuZHJhZ0VuZEJvb3N0U2VsZWN0KCk7XG4gIH1cbiAgZGVsZXRlIHRoaXMucHJldmlvdXNEcmFnWDtcbiAgLy8gYXBwbHkgc2VsZWN0aW9uXG4gIC8vIFRPRE8gcmVmYWN0b3IgdGhpcywgc2VsZWN0aW5nIGhlcmUgZmVlbHMgd2VpcmRcbiAgLy8gSEFDSywgc2V0IGZsYWcgc28gZHJhZ2dpbmcgc3RheXMgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgdGhpcy5pc0RyYWdTZWxlY3QgPSB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZDtcbiAgdGhpcy5zZWxlY3QoIGluZGV4ICk7XG4gIGRlbGV0ZSB0aGlzLmlzRHJhZ1NlbGVjdDtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ0VuZCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxucHJvdG8uZHJhZ0VuZFJlc3RpbmdTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3RpbmdYID0gdGhpcy5nZXRSZXN0aW5nUG9zaXRpb24oKTtcbiAgLy8gaG93IGZhciBhd2F5IGZyb20gc2VsZWN0ZWQgc2xpZGVcbiAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoIHRoaXMuZ2V0U2xpZGVEaXN0YW5jZSggLXJlc3RpbmdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKSApO1xuICAvLyBnZXQgY2xvc2V0IHJlc3RpbmcgZ29pbmcgdXAgYW5kIGdvaW5nIGRvd25cbiAgdmFyIHBvc2l0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIDEgKTtcbiAgdmFyIG5lZ2F0aXZlUmVzdGluZyA9IHRoaXMuX2dldENsb3Nlc3RSZXN0aW5nKCByZXN0aW5nWCwgZGlzdGFuY2UsIC0xICk7XG4gIC8vIHVzZSBjbG9zZXIgcmVzdGluZyBmb3Igd3JhcC1hcm91bmRcbiAgdmFyIGluZGV4ID0gcG9zaXRpdmVSZXN0aW5nLmRpc3RhbmNlIDwgbmVnYXRpdmVSZXN0aW5nLmRpc3RhbmNlID9cbiAgICBwb3NpdGl2ZVJlc3RpbmcuaW5kZXggOiBuZWdhdGl2ZVJlc3RpbmcuaW5kZXg7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbi8qKlxuICogZ2l2ZW4gcmVzdGluZyBYIGFuZCBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBnZXQgdGhlIGRpc3RhbmNlIGFuZCBpbmRleCBvZiB0aGUgY2xvc2VzdCBjZWxsXG4gKiBAcGFyYW0ge051bWJlcn0gcmVzdGluZ1ggLSBlc3RpbWF0ZWQgcG9zdC1mbGljayByZXN0aW5nIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gZGlzdGFuY2UgLSBkaXN0YW5jZSB0byBzZWxlY3RlZCBjZWxsXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluY3JlbWVudCAtICsxIG9yIC0xLCBnb2luZyB1cCBvciBkb3duXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIHsgZGlzdGFuY2U6IHtOdW1iZXJ9LCBpbmRleDoge0ludGVnZXJ9IH1cbiAqL1xucHJvdG8uX2dldENsb3Nlc3RSZXN0aW5nID0gZnVuY3Rpb24oIHJlc3RpbmdYLCBkaXN0YW5jZSwgaW5jcmVtZW50ICkge1xuICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICB2YXIgY29uZGl0aW9uID0gdGhpcy5vcHRpb25zLmNvbnRhaW4gJiYgIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kID9cbiAgICAvLyBpZiBjb250YWluLCBrZWVwIGdvaW5nIGlmIGRpc3RhbmNlIGlzIGVxdWFsIHRvIG1pbkRpc3RhbmNlXG4gICAgZnVuY3Rpb24oIGQsIG1kICkgeyByZXR1cm4gZCA8PSBtZDsgfSA6IGZ1bmN0aW9uKCBkLCBtZCApIHsgcmV0dXJuIGQgPCBtZDsgfTtcbiAgd2hpbGUgKCBjb25kaXRpb24oIGRpc3RhbmNlLCBtaW5EaXN0YW5jZSApICkge1xuICAgIC8vIG1lYXN1cmUgZGlzdGFuY2UgdG8gbmV4dCBjZWxsXG4gICAgaW5kZXggKz0gaW5jcmVtZW50O1xuICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC1yZXN0aW5nWCwgaW5kZXggKTtcbiAgICBpZiAoIGRpc3RhbmNlID09PSBudWxsICkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoIGRpc3RhbmNlICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXN0YW5jZTogbWluRGlzdGFuY2UsXG4gICAgLy8gc2VsZWN0ZWQgd2FzIHByZXZpb3VzIGluZGV4XG4gICAgaW5kZXg6IGluZGV4IC0gaW5jcmVtZW50XG4gIH07XG59O1xuXG4vKipcbiAqIG1lYXN1cmUgZGlzdGFuY2UgYmV0d2VlbiB4IGFuZCBhIHNsaWRlIHRhcmdldFxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5kZXggLSBzbGlkZSBpbmRleFxuICovXG5wcm90by5nZXRTbGlkZURpc3RhbmNlID0gZnVuY3Rpb24oIHgsIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAvLyB3cmFwIGFyb3VuZCBpZiBhdCBsZWFzdCAyIHNsaWRlc1xuICB2YXIgaXNXcmFwQXJvdW5kID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgbGVuID4gMTtcbiAgdmFyIHNsaWRlSW5kZXggPSBpc1dyYXBBcm91bmQgPyB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKSA6IGluZGV4O1xuICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1sgc2xpZGVJbmRleCBdO1xuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBhZGQgZGlzdGFuY2UgZm9yIHdyYXAtYXJvdW5kIHNsaWRlc1xuICB2YXIgd3JhcCA9IGlzV3JhcEFyb3VuZCA/IHRoaXMuc2xpZGVhYmxlV2lkdGggKiBNYXRoLmZsb29yKCBpbmRleCAvIGxlbiApIDogMDtcbiAgcmV0dXJuIHggLSAoIHNsaWRlLnRhcmdldCArIHdyYXAgKTtcbn07XG5cbnByb3RvLmRyYWdFbmRCb29zdFNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgYm9vc3QgaWYgbm8gcHJldmlvdXNEcmFnWCBvciBkcmFnTW92ZVRpbWVcbiAgaWYgKCB0aGlzLnByZXZpb3VzRHJhZ1ggPT09IHVuZGVmaW5lZCB8fCAhdGhpcy5kcmFnTW92ZVRpbWUgfHxcbiAgICAvLyBvciBpZiBkcmFnIHdhcyBoZWxkIGZvciAxMDAgbXNcbiAgICBuZXcgRGF0ZSgpIC0gdGhpcy5kcmFnTW92ZVRpbWUgPiAxMDAgKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgZGlzdGFuY2UgPSB0aGlzLmdldFNsaWRlRGlzdGFuY2UoIC10aGlzLmRyYWdYLCB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgdmFyIGRlbHRhID0gdGhpcy5wcmV2aW91c0RyYWdYIC0gdGhpcy5kcmFnWDtcbiAgaWYgKCBkaXN0YW5jZSA+IDAgJiYgZGVsdGEgPiAwICkge1xuICAgIC8vIGJvb3N0IHRvIG5leHQgaWYgbW92aW5nIHRvd2FyZHMgdGhlIHJpZ2h0LCBhbmQgcG9zaXRpdmUgdmVsb2NpdHlcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICggZGlzdGFuY2UgPCAwICYmIGRlbHRhIDwgMCApIHtcbiAgICAvLyBib29zdCB0byBwcmV2aW91cyBpZiBtb3ZpbmcgdG93YXJkcyB0aGUgbGVmdCwgYW5kIG5lZ2F0aXZlIHZlbG9jaXR5XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuLy8gLS0tLS0gc3RhdGljQ2xpY2sgLS0tLS0gLy9cblxucHJvdG8uc3RhdGljQ2xpY2sgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIGdldCBjbGlja2VkQ2VsbCwgaWYgY2VsbCB3YXMgY2xpY2tlZFxuICB2YXIgY2xpY2tlZENlbGwgPSB0aGlzLmdldFBhcmVudENlbGwoIGV2ZW50LnRhcmdldCApO1xuICB2YXIgY2VsbEVsZW0gPSBjbGlja2VkQ2VsbCAmJiBjbGlja2VkQ2VsbC5lbGVtZW50O1xuICB2YXIgY2VsbEluZGV4ID0gY2xpY2tlZENlbGwgJiYgdGhpcy5jZWxscy5pbmRleE9mKCBjbGlja2VkQ2VsbCApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzdGF0aWNDbGljaycsIGV2ZW50LCBbIHBvaW50ZXIsIGNlbGxFbGVtLCBjZWxsSW5kZXggXSApO1xufTtcblxuLy8gLS0tLS0gc2Nyb2xsIC0tLS0tIC8vXG5cbnByb3RvLm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY3JvbGwgPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICB2YXIgc2Nyb2xsTW92ZVggPSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsLnggLSBzY3JvbGwueDtcbiAgdmFyIHNjcm9sbE1vdmVZID0gdGhpcy5wb2ludGVyRG93blNjcm9sbC55IC0gc2Nyb2xsLnk7XG4gIC8vIGNhbmNlbCBjbGljay90YXAgaWYgc2Nyb2xsIGlzIHRvbyBtdWNoXG4gIGlmICggTWF0aC5hYnMoIHNjcm9sbE1vdmVYICkgPiAzIHx8IE1hdGguYWJzKCBzY3JvbGxNb3ZlWSApID4gMyApIHtcbiAgICB0aGlzLl9wb2ludGVyRG9uZSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSB1dGlscyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIEZsaWNraXR5IG1haW5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgJy4vY2VsbCcsXG4gICAgICAnLi9zbGlkZScsXG4gICAgICAnLi9hbmltYXRlJ1xuICAgIF0sIGZ1bmN0aW9uKCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIENlbGwsIFNsaWRlLCBhbmltYXRlUHJvdG90eXBlICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vY2VsbCcpLFxuICAgICAgcmVxdWlyZSgnLi9zbGlkZScpLFxuICAgICAgcmVxdWlyZSgnLi9hbmltYXRlJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgdmFyIF9GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eTtcblxuICAgIHdpbmRvdy5GbGlja2l0eSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgX0ZsaWNraXR5LkNlbGwsXG4gICAgICBfRmxpY2tpdHkuU2xpZGUsXG4gICAgICBfRmxpY2tpdHkuYW5pbWF0ZVByb3RvdHlwZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSxcbiAgdXRpbHMsIENlbGwsIFNsaWRlLCBhbmltYXRlUHJvdG90eXBlICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIHZhcnNcbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xudmFyIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG5cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyggZWxlbXMsIHRvRWxlbSApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHdoaWxlICggZWxlbXMubGVuZ3RoICkge1xuICAgIHRvRWxlbS5hcHBlbmRDaGlsZCggZWxlbXMuc2hpZnQoKSApO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZsaWNraXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyc1xudmFyIEdVSUQgPSAwO1xuLy8gaW50ZXJuYWwgc3RvcmUgb2YgYWxsIEZsaWNraXR5IGludGFuY2VzXG52YXIgaW5zdGFuY2VzID0ge307XG5cbmZ1bmN0aW9uIEZsaWNraXR5KCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIEZsaWNraXR5OiAnICsgKCBxdWVyeUVsZW1lbnQgfHwgZWxlbWVudCApICk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBxdWVyeUVsZW1lbnQ7XG4gIC8vIGRvIG5vdCBpbml0aWFsaXplIHR3aWNlIG9uIHNhbWUgZWxlbWVudFxuICBpZiAoIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQgKSB7XG4gICAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VzWyB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEIF07XG4gICAgaW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuICAvLyBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdHMgKTtcbiAgdGhpcy5vcHRpb24oIG9wdGlvbnMgKTtcblxuICAvLyBraWNrIHRoaW5ncyBvZmZcbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbkZsaWNraXR5LmRlZmF1bHRzID0ge1xuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAvLyBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gIC8vIGNlbGxTZWxlY3RvcjogdW5kZWZpbmVkLFxuICAvLyBjb250YWluOiBmYWxzZSxcbiAgZnJlZVNjcm9sbEZyaWN0aW9uOiAwLjA3NSwgLy8gZnJpY3Rpb24gd2hlbiBmcmVlLXNjcm9sbGluZ1xuICBmcmljdGlvbjogMC4yOCwgLy8gZnJpY3Rpb24gd2hlbiBzZWxlY3RpbmdcbiAgbmFtZXNwYWNlSlF1ZXJ5RXZlbnRzOiB0cnVlLFxuICAvLyBpbml0aWFsSW5kZXg6IDAsXG4gIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgcmVzaXplOiB0cnVlLFxuICBzZWxlY3RlZEF0dHJhY3Rpb246IDAuMDI1LFxuICBzZXRHYWxsZXJ5U2l6ZTogdHJ1ZVxuICAvLyB3YXRjaENTUzogZmFsc2UsXG4gIC8vIHdyYXBBcm91bmQ6IGZhbHNlXG59O1xuXG4vLyBoYXNoIG9mIG1ldGhvZHMgdHJpZ2dlcmVkIG9uIF9jcmVhdGUoKVxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcyA9IFtdO1xuXG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2ZW50RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGFkZCBpZCBmb3IgRmxpY2tpdHkuZGF0YVxuICB2YXIgaWQgPSB0aGlzLmd1aWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG4gIC8vIGluaXRpYWwgcHJvcGVydGllc1xuICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAvLyBob3cgbWFueSBmcmFtZXMgc2xpZGVyIGhhcyBiZWVuIGluIHNhbWUgcG9zaXRpb25cbiAgdGhpcy5yZXN0aW5nRnJhbWVzID0gMDtcbiAgLy8gaW5pdGlhbCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gIHRoaXMub3JpZ2luU2lkZSA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIC8vIGNyZWF0ZSB2aWV3cG9ydCAmIHNsaWRlclxuICB0aGlzLnZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMudmlld3BvcnQuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXZpZXdwb3J0JztcbiAgdGhpcy5fY3JlYXRlU2xpZGVyKCk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMucmVzaXplIHx8IHRoaXMub3B0aW9ucy53YXRjaENTUyApIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgfVxuXG4gIC8vIGFkZCBsaXN0ZW5lcnMgZnJvbSBvbiBvcHRpb25cbiAgZm9yICggdmFyIGV2ZW50TmFtZSBpbiB0aGlzLm9wdGlvbnMub24gKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gdGhpcy5vcHRpb25zLm9uWyBldmVudE5hbWUgXTtcbiAgICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIH1cblxuICBGbGlja2l0eS5jcmVhdGVNZXRob2RzLmZvckVhY2goIGZ1bmN0aW9uKCBtZXRob2QgKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oKTtcbiAgfSwgdGhpcyApO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLndhdGNoQ1NTICkge1xuICAgIHRoaXMud2F0Y2hDU1MoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBzZXQgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqL1xucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIHV0aWxzLmV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRzICk7XG59O1xuXG5wcm90by5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxpY2tpdHktZW5hYmxlZCcpO1xuICBpZiAoIHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCApIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxpY2tpdHktcnRsJyk7XG4gIH1cblxuICB0aGlzLmdldFNpemUoKTtcbiAgLy8gbW92ZSBpbml0aWFsIGNlbGwgZWxlbWVudHMgc28gdGhleSBjYW4gYmUgbG9hZGVkIGFzIGNlbGxzXG4gIHZhciBjZWxsRWxlbXMgPSB0aGlzLl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbiAgbW92ZUVsZW1lbnRzKCBjZWxsRWxlbXMsIHRoaXMuc2xpZGVyICk7XG4gIHRoaXMudmlld3BvcnQuYXBwZW5kQ2hpbGQoIHRoaXMuc2xpZGVyICk7XG4gIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy52aWV3cG9ydCApO1xuICAvLyBnZXQgY2VsbHMgZnJvbSBjaGlsZHJlblxuICB0aGlzLnJlbG9hZENlbGxzKCk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSApIHtcbiAgICAvLyBhbGxvdyBlbGVtZW50IHRvIGZvY3VzYWJsZVxuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IDA7XG4gICAgLy8gbGlzdGVuIGZvciBrZXkgcHJlc3Nlc1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMgKTtcbiAgfVxuXG4gIHRoaXMuZW1pdEV2ZW50KCdhY3RpdmF0ZScpO1xuICB0aGlzLnNlbGVjdEluaXRpYWxJbmRleCgpO1xuICAvLyBmbGFnIGZvciBpbml0aWFsIGFjdGl2YXRpb24sIGZvciB1c2luZyBpbml0aWFsSW5kZXhcbiAgdGhpcy5pc0luaXRBY3RpdmF0ZWQgPSB0cnVlO1xuICAvLyByZWFkeSBldmVudC4gIzQ5M1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3JlYWR5Jyk7XG59O1xuXG4vLyBzbGlkZXIgcG9zaXRpb25zIHRoZSBjZWxsc1xucHJvdG8uX2NyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uKCkge1xuICAvLyBzbGlkZXIgZWxlbWVudCBkb2VzIGFsbCB0aGUgcG9zaXRpb25pbmdcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbGlkZXIuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXNsaWRlcic7XG4gIHNsaWRlci5zdHlsZVsgdGhpcy5vcmlnaW5TaWRlIF0gPSAwO1xuICB0aGlzLnNsaWRlciA9IHNsaWRlcjtcbn07XG5cbnByb3RvLl9maWx0ZXJGaW5kQ2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLmNlbGxTZWxlY3RvciApO1xufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlblxucHJvdG8ucmVsb2FkQ2VsbHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuY2VsbHMgPSB0aGlzLl9tYWtlQ2VsbHMoIHRoaXMuc2xpZGVyLmNoaWxkcmVuICk7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG59O1xuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBGbGlja2l0eS5DZWxsc1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBGbGlja2l0eSBDZWxsc1xuICovXG5wcm90by5fbWFrZUNlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggZWxlbXMgKTtcblxuICAvLyBjcmVhdGUgbmV3IEZsaWNraXR5IGZvciBjb2xsZWN0aW9uXG4gIHZhciBjZWxscyA9IGNlbGxFbGVtcy5tYXAoIGZ1bmN0aW9uKCBjZWxsRWxlbSApIHtcbiAgICByZXR1cm4gbmV3IENlbGwoIGNlbGxFbGVtLCB0aGlzICk7XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gY2VsbHM7XG59O1xuXG5wcm90by5nZXRMYXN0Q2VsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxsc1sgdGhpcy5jZWxscy5sZW5ndGggLSAxIF07XG59O1xuXG5wcm90by5nZXRMYXN0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2xpZGVzWyB0aGlzLnNsaWRlcy5sZW5ndGggLSAxIF07XG59O1xuXG4vLyBwb3NpdGlvbnMgYWxsIGNlbGxzXG5wcm90by5wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHNpemUgYWxsIGNlbGxzXG4gIHRoaXMuX3NpemVDZWxscyggdGhpcy5jZWxscyApO1xuICAvLyBwb3NpdGlvbiBhbGwgY2VsbHNcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggMCApO1xufTtcblxuLyoqXG4gKiBwb3NpdGlvbiBjZXJ0YWluIGNlbGxzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gd2hpY2ggY2VsbCB0byBzdGFydCB3aXRoXG4gKi9cbnByb3RvLl9wb3NpdGlvbkNlbGxzID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICBpbmRleCA9IGluZGV4IHx8IDA7XG4gIC8vIGFsc28gbWVhc3VyZSBtYXhDZWxsSGVpZ2h0XG4gIC8vIHN0YXJ0IDAgaWYgcG9zaXRpb25pbmcgYWxsIGNlbGxzXG4gIHRoaXMubWF4Q2VsbEhlaWdodCA9IGluZGV4ID8gdGhpcy5tYXhDZWxsSGVpZ2h0IHx8IDAgOiAwO1xuICB2YXIgY2VsbFggPSAwO1xuICAvLyBnZXQgY2VsbFhcbiAgaWYgKCBpbmRleCA+IDAgKSB7XG4gICAgdmFyIHN0YXJ0Q2VsbCA9IHRoaXMuY2VsbHNbIGluZGV4IC0gMSBdO1xuICAgIGNlbGxYID0gc3RhcnRDZWxsLnggKyBzdGFydENlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHZhciBsZW4gPSB0aGlzLmNlbGxzLmxlbmd0aDtcbiAgZm9yICggdmFyIGk9aW5kZXg7IGkgPCBsZW47IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgY2VsbC5zZXRQb3NpdGlvbiggY2VsbFggKTtcbiAgICBjZWxsWCArPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1heENlbGxIZWlnaHQgPSBNYXRoLm1heCggY2VsbC5zaXplLm91dGVySGVpZ2h0LCB0aGlzLm1heENlbGxIZWlnaHQgKTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIGNlbGxYIGZvciB3cmFwLWFyb3VuZFxuICB0aGlzLnNsaWRlYWJsZVdpZHRoID0gY2VsbFg7XG4gIC8vIHNsaWRlc1xuICB0aGlzLnVwZGF0ZVNsaWRlcygpO1xuICAvLyBjb250YWluIHNsaWRlcyB0YXJnZXRcbiAgdGhpcy5fY29udGFpblNsaWRlcygpO1xuICAvLyB1cGRhdGUgc2xpZGVzV2lkdGhcbiAgdGhpcy5zbGlkZXNXaWR0aCA9IGxlbiA/IHRoaXMuZ2V0TGFzdFNsaWRlKCkudGFyZ2V0IC0gdGhpcy5zbGlkZXNbMF0udGFyZ2V0IDogMDtcbn07XG5cbi8qKlxuICogY2VsbC5nZXRTaXplKCkgb24gbXVsdGlwbGUgY2VsbHNcbiAqIEBwYXJhbSB7QXJyYXl9IGNlbGxzXG4gKi9cbnByb3RvLl9zaXplQ2VsbHMgPSBmdW5jdGlvbiggY2VsbHMgKSB7XG4gIGNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuZ2V0U2l6ZSgpO1xuICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgaWYgKCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gIHRoaXMuc2xpZGVzLnB1c2goIHNsaWRlICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB2YXIgbmV4dE1hcmdpbiA9IGlzT3JpZ2luTGVmdCA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCc7XG5cbiAgdmFyIGNhbkNlbGxGaXQgPSB0aGlzLl9nZXRDYW5DZWxsRml0KCk7XG5cbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCwgaSApIHtcbiAgICAvLyBqdXN0IGFkZCBjZWxsIGlmIGZpcnN0IGNlbGwgaW4gc2xpZGVcbiAgICBpZiAoICFzbGlkZS5jZWxscy5sZW5ndGggKSB7XG4gICAgICBzbGlkZS5hZGRDZWxsKCBjZWxsICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNsaWRlV2lkdGggPSAoIHNsaWRlLm91dGVyV2lkdGggLSBzbGlkZS5maXJzdE1hcmdpbiApICtcbiAgICAgICggY2VsbC5zaXplLm91dGVyV2lkdGggLSBjZWxsLnNpemVbIG5leHRNYXJnaW4gXSApO1xuXG4gICAgaWYgKCBjYW5DZWxsRml0LmNhbGwoIHRoaXMsIGksIHNsaWRlV2lkdGggKSApIHtcbiAgICAgIHNsaWRlLmFkZENlbGwoIGNlbGwgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9lc24ndCBmaXQsIG5ldyBzbGlkZVxuICAgICAgc2xpZGUudXBkYXRlVGFyZ2V0KCk7XG5cbiAgICAgIHNsaWRlID0gbmV3IFNsaWRlKCB0aGlzICk7XG4gICAgICB0aGlzLnNsaWRlcy5wdXNoKCBzbGlkZSApO1xuICAgICAgc2xpZGUuYWRkQ2VsbCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICAvLyBsYXN0IHNsaWRlXG4gIHNsaWRlLnVwZGF0ZVRhcmdldCgpO1xuICAvLyB1cGRhdGUgLnNlbGVjdGVkU2xpZGVcbiAgdGhpcy51cGRhdGVTZWxlY3RlZFNsaWRlKCk7XG59O1xuXG5wcm90by5fZ2V0Q2FuQ2VsbEZpdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3JvdXBDZWxscyA9IHRoaXMub3B0aW9ucy5ncm91cENlbGxzO1xuICBpZiAoICFncm91cENlbGxzICkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZ3JvdXBDZWxscyA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBncm91cCBieSBudW1iZXIuIDMgLT4gWzAsMSwyXSwgWzMsNCw1XSwgLi4uXG4gICAgdmFyIG51bWJlciA9IHBhcnNlSW50KCBncm91cENlbGxzLCAxMCApO1xuICAgIHJldHVybiBmdW5jdGlvbiggaSApIHtcbiAgICAgIHJldHVybiAoIGkgJSBudW1iZXIgKSAhPT0gMDtcbiAgICB9O1xuICB9XG4gIC8vIGRlZmF1bHQsIGdyb3VwIGJ5IHdpZHRoIG9mIHNsaWRlXG4gIC8vIHBhcnNlICc3NSVcbiAgdmFyIHBlcmNlbnRNYXRjaCA9IHR5cGVvZiBncm91cENlbGxzID09ICdzdHJpbmcnICYmXG4gICAgZ3JvdXBDZWxscy5tYXRjaCgvXihcXGQrKSUkLyk7XG4gIHZhciBwZXJjZW50ID0gcGVyY2VudE1hdGNoID8gcGFyc2VJbnQoIHBlcmNlbnRNYXRjaFsxXSwgMTAgKSAvIDEwMCA6IDE7XG4gIHJldHVybiBmdW5jdGlvbiggaSwgc2xpZGVXaWR0aCApIHtcbiAgICByZXR1cm4gc2xpZGVXaWR0aCA8PSAoIHRoaXMuc2l6ZS5pbm5lcldpZHRoICsgMSApICogcGVyY2VudDtcbiAgfTtcbn07XG5cbi8vIGFsaWFzIF9pbml0IGZvciBqUXVlcnkgcGx1Z2luIC5mbGlja2l0eSgpXG5wcm90by5faW5pdCA9XG5wcm90by5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLnBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCgpO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgdGhpcy5zZXRDZWxsQWxpZ24oKTtcbiAgdGhpcy5jdXJzb3JQb3NpdGlvbiA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoICogdGhpcy5jZWxsQWxpZ247XG59O1xuXG52YXIgY2VsbEFsaWduU2hvcnRoYW5kcyA9IHtcbiAgLy8gY2VsbCBhbGlnbiwgdGhlbiBiYXNlZCBvbiBvcmlnaW4gc2lkZVxuICBjZW50ZXI6IHtcbiAgICBsZWZ0OiAwLjUsXG4gICAgcmlnaHQ6IDAuNVxuICB9LFxuICBsZWZ0OiB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMVxuICB9LFxuICByaWdodDoge1xuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6IDFcbiAgfVxufTtcblxucHJvdG8uc2V0Q2VsbEFsaWduID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaG9ydGhhbmQgPSBjZWxsQWxpZ25TaG9ydGhhbmRzWyB0aGlzLm9wdGlvbnMuY2VsbEFsaWduIF07XG4gIHRoaXMuY2VsbEFsaWduID0gc2hvcnRoYW5kID8gc2hvcnRoYW5kWyB0aGlzLm9yaWdpblNpZGUgXSA6IHRoaXMub3B0aW9ucy5jZWxsQWxpZ247XG59O1xuXG5wcm90by5zZXRHYWxsZXJ5U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5zZXRHYWxsZXJ5U2l6ZSApIHtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ICYmIHRoaXMuc2VsZWN0ZWRTbGlkZSA/XG4gICAgICB0aGlzLnNlbGVjdGVkU2xpZGUuaGVpZ2h0IDogdGhpcy5tYXhDZWxsSGVpZ2h0O1xuICAgIHRoaXMudmlld3BvcnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgfVxufTtcblxucHJvdG8uX2dldFdyYXBTaGlmdENlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIG9ubHkgZm9yIHdyYXAtYXJvdW5kXG4gIGlmICggIXRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1bnNoaWZ0IHByZXZpb3VzIGNlbGxzXG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5iZWZvcmVTaGlmdENlbGxzICk7XG4gIHRoaXMuX3Vuc2hpZnRDZWxscyggdGhpcy5hZnRlclNoaWZ0Q2VsbHMgKTtcbiAgLy8gZ2V0IGJlZm9yZSBjZWxsc1xuICAvLyBpbml0aWFsIGdhcFxuICB2YXIgZ2FwWCA9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIHZhciBjZWxsSW5kZXggPSB0aGlzLmNlbGxzLmxlbmd0aCAtIDE7XG4gIHRoaXMuYmVmb3JlU2hpZnRDZWxscyA9IHRoaXMuX2dldEdhcENlbGxzKCBnYXBYLCBjZWxsSW5kZXgsIC0xICk7XG4gIC8vIGdldCBhZnRlciBjZWxsc1xuICAvLyBlbmRpbmcgZ2FwIGJldHdlZW4gbGFzdCBjZWxsIGFuZCBlbmQgb2YgZ2FsbGVyeSB2aWV3cG9ydFxuICBnYXBYID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICAvLyBzdGFydCBjbG9uaW5nIGF0IGZpcnN0IGNlbGwsIHdvcmtpbmcgZm9yd2FyZHNcbiAgdGhpcy5hZnRlclNoaWZ0Q2VsbHMgPSB0aGlzLl9nZXRHYXBDZWxscyggZ2FwWCwgMCwgMSApO1xufTtcblxucHJvdG8uX2dldEdhcENlbGxzID0gZnVuY3Rpb24oIGdhcFgsIGNlbGxJbmRleCwgaW5jcmVtZW50ICkge1xuICAvLyBrZWVwIGFkZGluZyBjZWxscyB1bnRpbCB0aGUgY292ZXIgdGhlIGluaXRpYWwgZ2FwXG4gIHZhciBjZWxscyA9IFtdO1xuICB3aGlsZSAoIGdhcFggPiAwICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1sgY2VsbEluZGV4IF07XG4gICAgaWYgKCAhY2VsbCApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjZWxscy5wdXNoKCBjZWxsICk7XG4gICAgY2VsbEluZGV4ICs9IGluY3JlbWVudDtcbiAgICBnYXBYIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG4gIHJldHVybiBjZWxscztcbn07XG5cbi8vIC0tLS0tIGNvbnRhaW4gLS0tLS0gLy9cblxuLy8gY29udGFpbiBjZWxsIHRhcmdldHMgc28gbm8gZXhjZXNzIHNsaWRpbmdcbnByb3RvLl9jb250YWluU2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5jb250YWluIHx8IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kIHx8ICF0aGlzLmNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGlzUmlnaHRUb0xlZnQgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQ7XG4gIHZhciBiZWdpbk1hcmdpbiA9IGlzUmlnaHRUb0xlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuICB2YXIgZW5kTWFyZ2luID0gaXNSaWdodFRvTGVmdCA/ICdtYXJnaW5MZWZ0JyA6ICdtYXJnaW5SaWdodCc7XG4gIHZhciBjb250ZW50V2lkdGggPSB0aGlzLnNsaWRlYWJsZVdpZHRoIC0gdGhpcy5nZXRMYXN0Q2VsbCgpLnNpemVbIGVuZE1hcmdpbiBdO1xuICAvLyBjb250ZW50IGlzIGxlc3MgdGhhbiBnYWxsZXJ5IHNpemVcbiAgdmFyIGlzQ29udGVudFNtYWxsZXIgPSBjb250ZW50V2lkdGggPCB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbiAgLy8gYm91bmRzXG4gIHZhciBiZWdpbkJvdW5kID0gdGhpcy5jdXJzb3JQb3NpdGlvbiArIHRoaXMuY2VsbHNbMF0uc2l6ZVsgYmVnaW5NYXJnaW4gXTtcbiAgdmFyIGVuZEJvdW5kID0gY29udGVudFdpZHRoIC0gdGhpcy5zaXplLmlubmVyV2lkdGggKiAoIDEgLSB0aGlzLmNlbGxBbGlnbiApO1xuICAvLyBjb250YWluIGVhY2ggY2VsbCB0YXJnZXRcbiAgdGhpcy5zbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuICAgIGlmICggaXNDb250ZW50U21hbGxlciApIHtcbiAgICAgIC8vIGFsbCBjZWxscyBmaXQgaW5zaWRlIGdhbGxlcnlcbiAgICAgIHNsaWRlLnRhcmdldCA9IGNvbnRlbnRXaWR0aCAqIHRoaXMuY2VsbEFsaWduO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb250YWluIHRvIGJvdW5kc1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5tYXgoIHNsaWRlLnRhcmdldCwgYmVnaW5Cb3VuZCApO1xuICAgICAgc2xpZGUudGFyZ2V0ID0gTWF0aC5taW4oIHNsaWRlLnRhcmdldCwgZW5kQm91bmQgKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgZXZlbnRFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIC8vIGRlZmF1bHQgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnRcbiAgICB0eXBlICs9IHRoaXMub3B0aW9ucy5uYW1lc3BhY2VKUXVlcnlFdmVudHMgPyAnLmZsaWNraXR5JyA6ICcnO1xuICAgIHZhciAkZXZlbnQgPSB0eXBlO1xuICAgIGlmICggZXZlbnQgKSB7XG4gICAgICAvLyBjcmVhdGUgalF1ZXJ5IGV2ZW50XG4gICAgICB2YXIgalFFdmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICAkZXZlbnQgPSBqUUV2ZW50O1xuICAgIH1cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZWxlY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV3JhcCAtIHdpbGwgd3JhcC1hcm91bmQgdG8gbGFzdC9maXJzdCBpZiBhdCB0aGUgZW5kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIHdpbGwgaW1tZWRpYXRlbHkgc2V0IHBvc2l0aW9uIGF0IHNlbGVjdGVkIGNlbGxcbiAqL1xucHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4LCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICk7XG4gIHRoaXMuX3dyYXBTZWxlY3QoIGluZGV4ICk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCB8fCBpc1dyYXAgKSB7XG4gICAgaW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCB0aGlzLnNsaWRlcy5sZW5ndGggKTtcbiAgfVxuICAvLyBiYWlsIGlmIGludmFsaWQgaW5kZXhcbiAgaWYgKCAhdGhpcy5zbGlkZXNbIGluZGV4IF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwcmV2SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB0aGlzLnVwZGF0ZVNlbGVjdGVkU2xpZGUoKTtcbiAgaWYgKCBpc0luc3RhbnQgKSB7XG4gICAgdGhpcy5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gIH1cbiAgaWYgKCB0aGlzLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgKSB7XG4gICAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB9XG4gIC8vIGV2ZW50c1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzZWxlY3QnLCBudWxsLCBbIGluZGV4IF0gKTtcbiAgLy8gY2hhbmdlIGV2ZW50IGlmIG5ldyBpbmRleFxuICBpZiAoIGluZGV4ICE9IHByZXZJbmRleCApIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoICdjaGFuZ2UnLCBudWxsLCBbIGluZGV4IF0gKTtcbiAgfVxuICAvLyBvbGQgdjEgZXZlbnQgbmFtZSwgcmVtb3ZlIGluIHYzXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2VsbFNlbGVjdCcpO1xufTtcblxuLy8gd3JhcHMgcG9zaXRpb24gZm9yIHdyYXBBcm91bmQsIHRvIG1vdmUgdG8gY2xvc2VzdCBzbGlkZS4gIzExM1xucHJvdG8uX3dyYXBTZWxlY3QgPSBmdW5jdGlvbiggaW5kZXggKSB7XG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIHZhciBpc1dyYXBwaW5nID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgbGVuID4gMTtcbiAgaWYgKCAhaXNXcmFwcGluZyApIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgdmFyIHdyYXBJbmRleCA9IHV0aWxzLm1vZHVsbyggaW5kZXgsIGxlbiApO1xuICAvLyBnbyB0byBzaG9ydGVzdFxuICB2YXIgZGVsdGEgPSBNYXRoLmFicyggd3JhcEluZGV4IC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBiYWNrV3JhcERlbHRhID0gTWF0aC5hYnMoICggd3JhcEluZGV4ICsgbGVuICkgLSB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgdmFyIGZvcmV3YXJkV3JhcERlbHRhID0gTWF0aC5hYnMoICggd3JhcEluZGV4IC0gbGVuICkgLSB0aGlzLnNlbGVjdGVkSW5kZXggKTtcbiAgaWYgKCAhdGhpcy5pc0RyYWdTZWxlY3QgJiYgYmFja1dyYXBEZWx0YSA8IGRlbHRhICkge1xuICAgIGluZGV4ICs9IGxlbjtcbiAgfSBlbHNlIGlmICggIXRoaXMuaXNEcmFnU2VsZWN0ICYmIGZvcmV3YXJkV3JhcERlbHRhIDwgZGVsdGEgKSB7XG4gICAgaW5kZXggLT0gbGVuO1xuICB9XG4gIC8vIHdyYXAgcG9zaXRpb24gc28gc2xpZGVyIGlzIHdpdGhpbiBub3JtYWwgYXJlYVxuICBpZiAoIGluZGV4IDwgMCApIHtcbiAgICB0aGlzLnggLT0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfSBlbHNlIGlmICggaW5kZXggPj0gbGVuICkge1xuICAgIHRoaXMueCArPSB0aGlzLnNsaWRlYWJsZVdpZHRoO1xuICB9XG59O1xuXG5wcm90by5wcmV2aW91cyA9IGZ1bmN0aW9uKCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCAtIDEsIGlzV3JhcCwgaXNJbnN0YW50ICk7XG59O1xuXG5wcm90by5uZXh0ID0gZnVuY3Rpb24oIGlzV3JhcCwgaXNJbnN0YW50ICkge1xuICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICsgMSwgaXNXcmFwLCBpc0luc3RhbnQgKTtcbn07XG5cbnByb3RvLnVwZGF0ZVNlbGVjdGVkU2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHRoaXMuc2VsZWN0ZWRJbmRleCBdO1xuICAvLyBzZWxlY3RlZEluZGV4IGNvdWxkIGJlIG91dHNpZGUgb2Ygc2xpZGVzLCBpZiB0cmlnZ2VyZWQgYmVmb3JlIHJlc2l6ZSgpXG4gIGlmICggIXNsaWRlICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1bnNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZCBzbGlkZVxuICB0aGlzLnVuc2VsZWN0U2VsZWN0ZWRTbGlkZSgpO1xuICAvLyB1cGRhdGUgbmV3IHNlbGVjdGVkIHNsaWRlXG4gIHRoaXMuc2VsZWN0ZWRTbGlkZSA9IHNsaWRlO1xuICBzbGlkZS5zZWxlY3QoKTtcbiAgdGhpcy5zZWxlY3RlZENlbGxzID0gc2xpZGUuY2VsbHM7XG4gIHRoaXMuc2VsZWN0ZWRFbGVtZW50cyA9IHNsaWRlLmdldENlbGxFbGVtZW50cygpO1xuICAvLyBIQUNLOiBzZWxlY3RlZENlbGwgJiBzZWxlY3RlZEVsZW1lbnQgaXMgZmlyc3QgY2VsbCBpbiBzbGlkZSwgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgLy8gUmVtb3ZlIGluIHYzP1xuICB0aGlzLnNlbGVjdGVkQ2VsbCA9IHNsaWRlLmNlbGxzWzBdO1xuICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50c1swXTtcbn07XG5cbnByb3RvLnVuc2VsZWN0U2VsZWN0ZWRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc2VsZWN0ZWRTbGlkZSApIHtcbiAgICB0aGlzLnNlbGVjdGVkU2xpZGUudW5zZWxlY3QoKTtcbiAgfVxufTtcblxucHJvdG8uc2VsZWN0SW5pdGlhbEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbml0aWFsSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5pdGlhbEluZGV4O1xuICAvLyBhbHJlYWR5IGFjdGl2YXRlZCwgc2VsZWN0IHByZXZpb3VzIHNlbGVjdGVkSW5kZXhcbiAgaWYgKCB0aGlzLmlzSW5pdEFjdGl2YXRlZCApIHtcbiAgICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4LCBmYWxzZSwgdHJ1ZSApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZWxlY3Qgd2l0aCBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCBpbml0aWFsSW5kZXggJiYgdHlwZW9mIGluaXRpYWxJbmRleCA9PSAnc3RyaW5nJyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMucXVlcnlDZWxsKCBpbml0aWFsSW5kZXggKTtcbiAgICBpZiAoIGNlbGwgKSB7XG4gICAgICB0aGlzLnNlbGVjdENlbGwoIGluaXRpYWxJbmRleCwgZmFsc2UsIHRydWUgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5kZXggPSAwO1xuICAvLyBzZWxlY3Qgd2l0aCBudW1iZXJcbiAgaWYgKCBpbml0aWFsSW5kZXggJiYgdGhpcy5zbGlkZXNbIGluaXRpYWxJbmRleCBdICkge1xuICAgIGluZGV4ID0gaW5pdGlhbEluZGV4O1xuICB9XG4gIC8vIHNlbGVjdCBpbnN0YW50bHlcbiAgdGhpcy5zZWxlY3QoIGluZGV4LCBmYWxzZSwgdHJ1ZSApO1xufTtcblxuLyoqXG4gKiBzZWxlY3Qgc2xpZGUgZnJvbSBudW1iZXIgb3IgY2VsbCBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnQgb3IgTnVtYmVyfSBlbGVtXG4gKi9cbnByb3RvLnNlbGVjdENlbGwgPSBmdW5jdGlvbiggdmFsdWUsIGlzV3JhcCwgaXNJbnN0YW50ICkge1xuICAvLyBnZXQgY2VsbFxuICB2YXIgY2VsbCA9IHRoaXMucXVlcnlDZWxsKCB2YWx1ZSApO1xuICBpZiAoICFjZWxsICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpbmRleCA9IHRoaXMuZ2V0Q2VsbFNsaWRlSW5kZXgoIGNlbGwgKTtcbiAgdGhpcy5zZWxlY3QoIGluZGV4LCBpc1dyYXAsIGlzSW5zdGFudCApO1xufTtcblxucHJvdG8uZ2V0Q2VsbFNsaWRlSW5kZXggPSBmdW5jdGlvbiggY2VsbCApIHtcbiAgLy8gZ2V0IGluZGV4IG9mIHNsaWRlcyB0aGF0IGhhcyBjZWxsXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1tpXTtcbiAgICB2YXIgaW5kZXggPSBzbGlkZS5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gICAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0IGNlbGxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IEZsaWNraXR5LkNlbGwsIGdpdmVuIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge0ZsaWNraXR5LkNlbGx9IGl0ZW1cbiAqL1xucHJvdG8uZ2V0Q2VsbCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBsb29wIHRocm91Z2ggY2VsbHMgdG8gZ2V0IHRoZSBvbmUgdGhhdCBtYXRjaGVzXG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5jZWxsc1tpXTtcbiAgICBpZiAoIGNlbGwuZWxlbWVudCA9PSBlbGVtICkge1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIEZsaWNraXR5LkNlbGxzLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxzIC0gRmxpY2tpdHkuQ2VsbHNcbiAqL1xucHJvdG8uZ2V0Q2VsbHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgY2VsbHMgPSBbXTtcbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgICBpZiAoIGNlbGwgKSB7XG4gICAgICBjZWxscy5wdXNoKCBjZWxsICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG4gIHJldHVybiBjZWxscztcbn07XG5cbi8qKlxuICogZ2V0IGNlbGwgZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gY2VsbEVsZW1zXG4gKi9cbnByb3RvLmdldENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jZWxscy5tYXAoIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIHJldHVybiBjZWxsLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBnZXQgcGFyZW50IGNlbGwgZnJvbSBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0LkNlbGx9IGNlbGxcbiAqL1xucHJvdG8uZ2V0UGFyZW50Q2VsbCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAvLyBmaXJzdCBjaGVjayBpZiBlbGVtIGlzIGNlbGxcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgaWYgKCBjZWxsICkge1xuICAgIHJldHVybiBjZWxsO1xuICB9XG4gIC8vIHRyeSB0byBnZXQgcGFyZW50IGNlbGwgZWxlbVxuICBlbGVtID0gdXRpbHMuZ2V0UGFyZW50KCBlbGVtLCAnLmZsaWNraXR5LXNsaWRlciA+IConICk7XG4gIHJldHVybiB0aGlzLmdldENlbGwoIGVsZW0gKTtcbn07XG5cbi8qKlxuICogZ2V0IGNlbGxzIGFkamFjZW50IHRvIGEgc2xpZGVcbiAqIEBwYXJhbSB7SW50ZWdlcn0gYWRqQ291bnQgLSBudW1iZXIgb2YgYWRqYWNlbnQgc2xpZGVzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4IC0gaW5kZXggb2Ygc2xpZGUgdG8gc3RhcnRcbiAqIEByZXR1cm5zIHtBcnJheX0gY2VsbHMgLSBhcnJheSBvZiBGbGlja2l0eS5DZWxsc1xuICovXG5wcm90by5nZXRBZGphY2VudENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCBhZGpDb3VudCwgaW5kZXggKSB7XG4gIGlmICggIWFkakNvdW50ICkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU2xpZGUuZ2V0Q2VsbEVsZW1lbnRzKCk7XG4gIH1cbiAgaW5kZXggPSBpbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZWxlY3RlZEluZGV4IDogaW5kZXg7XG5cbiAgdmFyIGxlbiA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgaWYgKCAxICsgKCBhZGpDb3VudCAqIDIgKSA+PSBsZW4gKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbEVsZW1lbnRzKCk7XG4gIH1cblxuICB2YXIgY2VsbEVsZW1zID0gW107XG4gIGZvciAoIHZhciBpID0gaW5kZXggLSBhZGpDb3VudDsgaSA8PSBpbmRleCArIGFkakNvdW50IDsgaSsrICkge1xuICAgIHZhciBzbGlkZUluZGV4ID0gdGhpcy5vcHRpb25zLndyYXBBcm91bmQgPyB1dGlscy5tb2R1bG8oIGksIGxlbiApIDogaTtcbiAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1sgc2xpZGVJbmRleCBdO1xuICAgIGlmICggc2xpZGUgKSB7XG4gICAgICBjZWxsRWxlbXMgPSBjZWxsRWxlbXMuY29uY2F0KCBzbGlkZS5nZXRDZWxsRWxlbWVudHMoKSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2VsbEVsZW1zO1xufTtcblxuLyoqXG4gKiBzZWxlY3Qgc2xpZGUgZnJvbSBudW1iZXIgb3IgY2VsbCBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnQsIFNlbGVjdG9yIFN0cmluZywgb3IgTnVtYmVyfSBzZWxlY3RvclxuICovXG5wcm90by5xdWVyeUNlbGwgPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gIGlmICggdHlwZW9mIHNlbGVjdG9yID09ICdudW1iZXInICkge1xuICAgIC8vIHVzZSBudW1iZXIgYXMgaW5kZXhcbiAgICByZXR1cm4gdGhpcy5jZWxsc1sgc2VsZWN0b3IgXTtcbiAgfVxuICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyApIHtcbiAgICAvLyBkbyBub3Qgc2VsZWN0IGludmFsaWQgc2VsZWN0b3JzIGZyb20gaGFzaDogIzEyMywgIy8uICM3OTFcbiAgICBpZiAoIHNlbGVjdG9yLm1hdGNoKC9eWyNcXC5dP1tcXGRcXC9dLykgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHVzZSBzdHJpbmcgYXMgc2VsZWN0b3IsIGdldCBlbGVtZW50XG4gICAgc2VsZWN0b3IgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcbiAgfVxuICAvLyBnZXQgY2VsbCBmcm9tIGVsZW1lbnRcbiAgcmV0dXJuIHRoaXMuZ2V0Q2VsbCggc2VsZWN0b3IgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51aUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVtaXRFdmVudCgndWlDaGFuZ2UnKTtcbn07XG5cbi8vIGtlZXAgZm9jdXMgb24gZWxlbWVudCB3aGVuIGNoaWxkIFVJIGVsZW1lbnRzIGFyZSBjbGlja2VkXG5wcm90by5jaGlsZFVJUG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIEhBQ0sgaU9TIGRvZXMgbm90IGFsbG93IHRvdWNoIGV2ZW50cyB0byBidWJibGUgdXA/IVxuICBpZiAoIGV2ZW50LnR5cGUgIT0gJ3RvdWNoc3RhcnQnICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgdGhpcy5mb2N1cygpO1xufTtcblxuLy8gLS0tLS0gcmVzaXplIC0tLS0tIC8vXG5cbnByb3RvLm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2F0Y2hDU1MoKTtcbiAgdGhpcy5yZXNpemUoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBGbGlja2l0eSwgJ29ucmVzaXplJywgMTUwICk7XG5cbnByb3RvLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmdldFNpemUoKTtcbiAgLy8gd3JhcCB2YWx1ZXNcbiAgaWYgKCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICB0aGlzLnggPSB1dGlscy5tb2R1bG8oIHRoaXMueCwgdGhpcy5zbGlkZWFibGVXaWR0aCApO1xuICB9XG4gIHRoaXMucG9zaXRpb25DZWxscygpO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG4gIHRoaXMuZW1pdEV2ZW50KCdyZXNpemUnKTtcbiAgLy8gdXBkYXRlIHNlbGVjdGVkIGluZGV4IGZvciBncm91cCBzbGlkZXMsIGluc3RhbnRcbiAgLy8gVE9ETzogcG9zaXRpb24gY2FuIGJlIGxvc3QgYmV0d2VlbiBncm91cHMgb2YgdmFyaW91cyBudW1iZXJzXG4gIHZhciBzZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnNlbGVjdGVkRWxlbWVudHMgJiYgdGhpcy5zZWxlY3RlZEVsZW1lbnRzWzBdO1xuICB0aGlzLnNlbGVjdENlbGwoIHNlbGVjdGVkRWxlbWVudCwgZmFsc2UsIHRydWUgKTtcbn07XG5cbi8vIHdhdGNoZXMgdGhlIDphZnRlciBwcm9wZXJ0eSwgYWN0aXZhdGVzL2RlYWN0aXZhdGVzXG5wcm90by53YXRjaENTUyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd2F0Y2hPcHRpb24gPSB0aGlzLm9wdGlvbnMud2F0Y2hDU1M7XG4gIGlmICggIXdhdGNoT3B0aW9uICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhZnRlckNvbnRlbnQgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLmVsZW1lbnQsICc6YWZ0ZXInICkuY29udGVudDtcbiAgLy8gYWN0aXZhdGUgaWYgOmFmdGVyIHsgY29udGVudDogJ2ZsaWNraXR5JyB9XG4gIGlmICggYWZ0ZXJDb250ZW50LmluZGV4T2YoJ2ZsaWNraXR5JykgIT0gLTEgKSB7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBrZXlkb3duIC0tLS0tIC8vXG5cbi8vIGdvIHByZXZpb3VzL25leHQgaWYgbGVmdC9yaWdodCBrZXlzIHByZXNzZWRcbnByb3RvLm9ua2V5ZG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gb25seSB3b3JrIGlmIGVsZW1lbnQgaXMgaW4gZm9jdXNcbiAgdmFyIGlzTm90Rm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0aGlzLmVsZW1lbnQ7XG4gIGlmICggIXRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5IHx8aXNOb3RGb2N1c2VkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gRmxpY2tpdHkua2V5Ym9hcmRIYW5kbGVyc1sgZXZlbnQua2V5Q29kZSBdO1xuICBpZiAoIGhhbmRsZXIgKSB7XG4gICAgaGFuZGxlci5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbkZsaWNraXR5LmtleWJvYXJkSGFuZGxlcnMgPSB7XG4gIC8vIGxlZnQgYXJyb3dcbiAgMzc6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZWZ0TWV0aG9kID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ25leHQnIDogJ3ByZXZpb3VzJztcbiAgICB0aGlzLnVpQ2hhbmdlKCk7XG4gICAgdGhpc1sgbGVmdE1ldGhvZCBdKCk7XG4gIH0sXG4gIC8vIHJpZ2h0IGFycm93XG4gIDM5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmlnaHRNZXRob2QgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAncHJldmlvdXMnIDogJ25leHQnO1xuICAgIHRoaXMudWlDaGFuZ2UoKTtcbiAgICB0aGlzWyByaWdodE1ldGhvZCBdKCk7XG4gIH0sXG59O1xuXG4vLyAtLS0tLSBmb2N1cyAtLS0tLSAvL1xuXG5wcm90by5mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAvLyBUT0RPIHJlbW92ZSBzY3JvbGxUbyBvbmNlIGZvY3VzIG9wdGlvbnMgZ2V0cyBtb3JlIHN1cHBvcnRcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L2ZvY3VzI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICB2YXIgcHJldlNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHRoaXMuZWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gIC8vIGhhY2sgdG8gZml4IHNjcm9sbCBqdW1wIGFmdGVyIGZvY3VzLCAjNzZcbiAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgIT0gcHJldlNjcm9sbFkgKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKCB3aW5kb3cucGFnZVhPZmZzZXQsIHByZXZTY3JvbGxZICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlc3Ryb3kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZGVhY3RpdmF0ZSBhbGwgRmxpY2tpdHkgZnVuY3Rpb25hbGl0eSwgYnV0IGtlZXAgc3R1ZmYgYXZhaWxhYmxlXG5wcm90by5kZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlja2l0eS1lbmFibGVkJyk7XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlja2l0eS1ydGwnKTtcbiAgdGhpcy51bnNlbGVjdFNlbGVjdGVkU2xpZGUoKTtcbiAgLy8gZGVzdHJveSBjZWxsc1xuICB0aGlzLmNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuZGVzdHJveSgpO1xuICB9KTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKCB0aGlzLnZpZXdwb3J0ICk7XG4gIC8vIG1vdmUgY2hpbGQgZWxlbWVudHMgYmFjayBpbnRvIGVsZW1lbnRcbiAgbW92ZUVsZW1lbnRzKCB0aGlzLnNsaWRlci5jaGlsZHJlbiwgdGhpcy5lbGVtZW50ICk7XG4gIGlmICggdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzICk7XG4gIH1cbiAgLy8gc2V0IGZsYWdzXG4gIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0RXZlbnQoJ2RlYWN0aXZhdGUnKTtcbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmFsbE9mZigpO1xuICB0aGlzLmVtaXRFdmVudCgnZGVzdHJveScpO1xuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsICdmbGlja2l0eScgKTtcbiAgfVxuICBkZWxldGUgdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgdGhpcy5ndWlkIF07XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBwcm90bywgYW5pbWF0ZVByb3RvdHlwZSApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBleHRyYXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXQgRmxpY2tpdHkgaW5zdGFuY2UgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0eX1cbiAqL1xuRmxpY2tpdHkuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIHZhciBpZCA9IGVsZW0gJiYgZWxlbS5mbGlja2l0eUdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG51dGlscy5odG1sSW5pdCggRmxpY2tpdHksICdmbGlja2l0eScgKTtcblxuaWYgKCBqUXVlcnkgJiYgalF1ZXJ5LmJyaWRnZXQgKSB7XG4gIGpRdWVyeS5icmlkZ2V0KCAnZmxpY2tpdHknLCBGbGlja2l0eSApO1xufVxuXG4vLyBzZXQgaW50ZXJuYWwgalF1ZXJ5LCBmb3IgV2VicGFjayArIGpRdWVyeSB2MywgIzQ3OFxuRmxpY2tpdHkuc2V0SlF1ZXJ5ID0gZnVuY3Rpb24oIGpxICkge1xuICBqUXVlcnkgPSBqcTtcbn07XG5cbkZsaWNraXR5LkNlbGwgPSBDZWxsO1xuRmxpY2tpdHkuU2xpZGUgPSBTbGlkZTtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvKiFcbiAqIEZsaWNraXR5IHYyLjIuMVxuICogVG91Y2gsIHJlc3BvbnNpdmUsIGZsaWNrYWJsZSBjYXJvdXNlbHNcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBGbGlja2l0eSBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKlxuICogaHR0cHM6Ly9mbGlja2l0eS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDE1LTIwMTkgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICcuL2RyYWcnLFxuICAgICAgJy4vcHJldi1uZXh0LWJ1dHRvbicsXG4gICAgICAnLi9wYWdlLWRvdHMnLFxuICAgICAgJy4vcGxheWVyJyxcbiAgICAgICcuL2FkZC1yZW1vdmUtY2VsbCcsXG4gICAgICAnLi9sYXp5bG9hZCdcbiAgICBdLCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCcuL2RyYWcnKSxcbiAgICAgIHJlcXVpcmUoJy4vcHJldi1uZXh0LWJ1dHRvbicpLFxuICAgICAgcmVxdWlyZSgnLi9wYWdlLWRvdHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vcGxheWVyJyksXG4gICAgICByZXF1aXJlKCcuL2FkZC1yZW1vdmUtY2VsbCcpLFxuICAgICAgcmVxdWlyZSgnLi9sYXp5bG9hZCcpXG4gICAgKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBGbGlja2l0eSApIHtcbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSovXG4gIHJldHVybiBGbGlja2l0eTtcbn0pO1xuIiwiLy8gbGF6eWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlTGF6eWxvYWQnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZUxhenlsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLmxhenlMb2FkICk7XG59O1xuXG5wcm90by5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF6eUxvYWQgPSB0aGlzLm9wdGlvbnMubGF6eUxvYWQ7XG4gIGlmICggIWxhenlMb2FkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgYWRqYWNlbnQgY2VsbHMsIHVzZSBsYXp5TG9hZCBvcHRpb24gZm9yIGFkamFjZW50IGNvdW50XG4gIHZhciBhZGpDb3VudCA9IHR5cGVvZiBsYXp5TG9hZCA9PSAnbnVtYmVyJyA/IGxhenlMb2FkIDogMDtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMoIGFkakNvdW50ICk7XG4gIC8vIGdldCBsYXp5IGltYWdlcyBpbiB0aG9zZSBjZWxsc1xuICB2YXIgbGF6eUltYWdlcyA9IFtdO1xuICBjZWxsRWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGxFbGVtICkge1xuICAgIHZhciBsYXp5Q2VsbEltYWdlcyA9IGdldENlbGxMYXp5SW1hZ2VzKCBjZWxsRWxlbSApO1xuICAgIGxhenlJbWFnZXMgPSBsYXp5SW1hZ2VzLmNvbmNhdCggbGF6eUNlbGxJbWFnZXMgKTtcbiAgfSk7XG4gIC8vIGxvYWQgbGF6eSBpbWFnZXNcbiAgbGF6eUltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggaW1nICkge1xuICAgIG5ldyBMYXp5TG9hZGVyKCBpbWcsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2VsbExhenlJbWFnZXMoIGNlbGxFbGVtICkge1xuICAvLyBjaGVjayBpZiBjZWxsIGVsZW1lbnQgaXMgbGF6eSBpbWFnZVxuICBpZiAoIGNlbGxFbGVtLm5vZGVOYW1lID09ICdJTUcnICkge1xuICAgIHZhciBsYXp5bG9hZEF0dHIgPSBjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgICB2YXIgc3JjQXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmMnKTtcbiAgICB2YXIgc3Jjc2V0QXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmNzZXQnKTtcbiAgICBpZiAoIGxhenlsb2FkQXR0ciB8fCBzcmNBdHRyIHx8IHNyY3NldEF0dHIgKSB7XG4gICAgICByZXR1cm4gWyBjZWxsRWxlbSBdO1xuICAgIH1cbiAgfVxuICAvLyBzZWxlY3QgbGF6eSBpbWFnZXMgaW4gY2VsbFxuICB2YXIgbGF6eVNlbGVjdG9yID0gJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkXSwgJyArXG4gICAgJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY10sIGltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY3NldF0nO1xuICB2YXIgaW1ncyA9IGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIGxhenlTZWxlY3RvciApO1xuICByZXR1cm4gdXRpbHMubWFrZUFycmF5KCBpbWdzICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExhenlMb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjbGFzcyB0byBoYW5kbGUgbG9hZGluZyBpbWFnZXNcbiAqL1xuZnVuY3Rpb24gTGF6eUxvYWRlciggaW1nLCBmbGlja2l0eSApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG4gIHRoaXMuZmxpY2tpdHkgPSBmbGlja2l0eTtcbiAgdGhpcy5sb2FkKCk7XG59XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gZ2V0IHNyYyAmIHNyY3NldFxuICB2YXIgc3JjID0gdGhpcy5pbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJykgfHxcbiAgICB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3JjJyk7XG4gIHZhciBzcmNzZXQgPSB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG4gIC8vIHNldCBzcmMgJiBzZXJzZXRcbiAgdGhpcy5pbWcuc3JjID0gc3JjO1xuICBpZiAoIHNyY3NldCApIHtcbiAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoICdzcmNzZXQnLCBzcmNzZXQgKTtcbiAgfVxuICAvLyByZW1vdmUgYXR0clxuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyYycpO1xuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG59O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWxvYWRlZCcgKTtcbn07XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWVycm9yJyApO1xufTtcblxuTGF6eUxvYWRlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiggZXZlbnQsIGNsYXNzTmFtZSApIHtcbiAgLy8gdW5iaW5kIGV2ZW50c1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuXG4gIHZhciBjZWxsID0gdGhpcy5mbGlja2l0eS5nZXRQYXJlbnRDZWxsKCB0aGlzLmltZyApO1xuICB2YXIgY2VsbEVsZW0gPSBjZWxsICYmIGNlbGwuZWxlbWVudDtcbiAgdGhpcy5mbGlja2l0eS5jZWxsU2l6ZUNoYW5nZSggY2VsbEVsZW0gKTtcblxuICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCBjbGFzc05hbWUgKTtcbiAgdGhpcy5mbGlja2l0eS5kaXNwYXRjaEV2ZW50KCAnbGF6eUxvYWQnLCBldmVudCwgY2VsbEVsZW0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5MYXp5TG9hZGVyID0gTGF6eUxvYWRlcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG4iLCIvLyBwYWdlIGRvdHNcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAndW5pcG9pbnRlci91bmlwb2ludGVyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscydcbiAgICBdLCBmdW5jdGlvbiggRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JyksXG4gICAgICByZXF1aXJlKCd1bmlwb2ludGVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRmxpY2tpdHksXG4gICAgICB3aW5kb3cuVW5pcG9pbnRlcixcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHNcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBhZ2VEb3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUGFnZURvdHMoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5QYWdlRG90cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG5QYWdlRG90cy5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgaG9sZGVyIGVsZW1lbnRcbiAgdGhpcy5ob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICB0aGlzLmhvbGRlci5jbGFzc05hbWUgPSAnZmxpY2tpdHktcGFnZS1kb3RzJztcbiAgLy8gY3JlYXRlIGRvdHMsIGFycmF5IG9mIGVsZW1lbnRzXG4gIHRoaXMuZG90cyA9IFtdO1xuICAvLyBldmVudHNcbiAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMucGFyZW50LmNoaWxkVUlQb2ludGVyRG93bi5iaW5kKCB0aGlzLnBhcmVudCApICk7XG59O1xuXG5QYWdlRG90cy5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZXREb3RzKCk7XG4gIHRoaXMuaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2sgKTtcbiAgdGhpcy5iaW5kU3RhcnRFdmVudCggdGhpcy5ob2xkZXIgKTtcbiAgLy8gYWRkIHRvIERPTVxuICB0aGlzLnBhcmVudC5lbGVtZW50LmFwcGVuZENoaWxkKCB0aGlzLmhvbGRlciApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5ob2xkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayApO1xuICB0aGlzLnVuYmluZFN0YXJ0RXZlbnQoIHRoaXMuaG9sZGVyICk7XG4gIC8vIHJlbW92ZSBmcm9tIERPTVxuICB0aGlzLnBhcmVudC5lbGVtZW50LnJlbW92ZUNoaWxkKCB0aGlzLmhvbGRlciApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnNldERvdHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGRpZmZlcmVuY2UgYmV0d2VlbiBudW1iZXIgb2Ygc2xpZGVzIGFuZCBudW1iZXIgb2YgZG90c1xuICB2YXIgZGVsdGEgPSB0aGlzLnBhcmVudC5zbGlkZXMubGVuZ3RoIC0gdGhpcy5kb3RzLmxlbmd0aDtcbiAgaWYgKCBkZWx0YSA+IDAgKSB7XG4gICAgdGhpcy5hZGREb3RzKCBkZWx0YSApO1xuICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XG4gICAgdGhpcy5yZW1vdmVEb3RzKCAtZGVsdGEgKTtcbiAgfVxufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmFkZERvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIG5ld0RvdHMgPSBbXTtcbiAgdmFyIGxlbmd0aCA9IHRoaXMuZG90cy5sZW5ndGg7XG4gIHZhciBtYXggPSBsZW5ndGggKyBjb3VudDtcblxuICBmb3IgKCB2YXIgaSA9IGxlbmd0aDsgaSA8IG1heDsgaSsrICkge1xuICAgIHZhciBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICBkb3Quc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdQYWdlIGRvdCAnICsgKCBpICsgMSApICk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvdCApO1xuICAgIG5ld0RvdHMucHVzaCggZG90ICk7XG4gIH1cblxuICB0aGlzLmhvbGRlci5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgdGhpcy5kb3RzID0gdGhpcy5kb3RzLmNvbmNhdCggbmV3RG90cyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnJlbW92ZURvdHMgPSBmdW5jdGlvbiggY291bnQgKSB7XG4gIC8vIHJlbW92ZSBmcm9tIHRoaXMuZG90cyBjb2xsZWN0aW9uXG4gIHZhciByZW1vdmVEb3RzID0gdGhpcy5kb3RzLnNwbGljZSggdGhpcy5kb3RzLmxlbmd0aCAtIGNvdW50LCBjb3VudCApO1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgcmVtb3ZlRG90cy5mb3JFYWNoKCBmdW5jdGlvbiggZG90ICkge1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZUNoaWxkKCBkb3QgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiBwcmV2aW91c1xuICBpZiAoIHRoaXMuc2VsZWN0ZWREb3QgKSB7XG4gICAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90JztcbiAgICB0aGlzLnNlbGVjdGVkRG90LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gIH1cbiAgLy8gZG9uJ3QgcHJvY2VlZCBpZiBubyBkb3RzXG4gIGlmICggIXRoaXMuZG90cy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc2VsZWN0ZWREb3QgPSB0aGlzLmRvdHNbIHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggXTtcbiAgdGhpcy5zZWxlY3RlZERvdC5jbGFzc05hbWUgPSAnZG90IGlzLXNlbGVjdGVkJztcbiAgdGhpcy5zZWxlY3RlZERvdC5zZXRBdHRyaWJ1dGUoICdhcmlhLWN1cnJlbnQnLCAnc3RlcCcgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5vblRhcCA9IC8vIG9sZCBtZXRob2QgbmFtZSwgYmFja3dhcmRzLWNvbXBhdGlibGVcblBhZ2VEb3RzLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBvbmx5IGNhcmUgYWJvdXQgZG90IGNsaWNrc1xuICBpZiAoIHRhcmdldC5ub2RlTmFtZSAhPSAnTEknICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucGFyZW50LnVpQ2hhbmdlKCk7XG4gIHZhciBpbmRleCA9IHRoaXMuZG90cy5pbmRleE9mKCB0YXJnZXQgKTtcbiAgdGhpcy5wYXJlbnQuc2VsZWN0KCBpbmRleCApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHRoaXMuYWxsT2ZmKCk7XG59O1xuXG5GbGlja2l0eS5QYWdlRG90cyA9IFBhZ2VEb3RzO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG51dGlscy5leHRlbmQoIEZsaWNraXR5LmRlZmF1bHRzLCB7XG4gIHBhZ2VEb3RzOiB0cnVlXG59KTtcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlUGFnZURvdHMnKTtcblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG5wcm90by5fY3JlYXRlUGFnZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnBhZ2VEb3RzICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBhZ2VEb3RzID0gbmV3IFBhZ2VEb3RzKCB0aGlzICk7XG4gIC8vIGV2ZW50c1xuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ3NlbGVjdCcsIHRoaXMudXBkYXRlU2VsZWN0ZWRQYWdlRG90cyApO1xuICB0aGlzLm9uKCAnY2VsbENoYW5nZScsIHRoaXMudXBkYXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ3Jlc2l6ZScsIHRoaXMudXBkYXRlUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQYWdlRG90cyApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLmFjdGl2YXRlKCk7XG59O1xuXG5wcm90by51cGRhdGVTZWxlY3RlZFBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMudXBkYXRlU2VsZWN0ZWQoKTtcbn07XG5cbnByb3RvLnVwZGF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMuc2V0RG90cygpO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFnZURvdHMuZGVhY3RpdmF0ZSgpO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbkZsaWNraXR5LlBhZ2VEb3RzID0gUGFnZURvdHM7XG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuIiwiLy8gcGxheWVyICYgYXV0b1BsYXlcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICdmaXp6eS11aS11dGlscy91dGlscycsXG4gICAgICAnLi9mbGlja2l0eSdcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyLCB1dGlscywgRmxpY2tpdHkgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggRXZFbWl0dGVyLCB1dGlscywgRmxpY2tpdHkgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2ZsaWNraXR5JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93LkZsaWNraXR5XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBQbGF5ZXIoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuc3RhdGUgPSAnc3RvcHBlZCc7XG4gIC8vIHZpc2liaWxpdHkgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UgPSB0aGlzLnZpc2liaWxpdHlDaGFuZ2UuYmluZCggdGhpcyApO1xuICB0aGlzLm9uVmlzaWJpbGl0eVBsYXkgPSB0aGlzLnZpc2liaWxpdHlQbGF5LmJpbmQoIHRoaXMgKTtcbn1cblxuUGxheWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuLy8gc3RhcnQgcGxheVxuUGxheWVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGxheWluZycgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGRvIG5vdCBwbGF5IGlmIHBhZ2UgaXMgaGlkZGVuLCBzdGFydCBwbGF5aW5nIHdoZW4gcGFnZSBpcyB2aXNpYmxlXG4gIHZhciBpc1BhZ2VIaWRkZW4gPSBkb2N1bWVudC5oaWRkZW47XG4gIGlmICggaXNQYWdlSGlkZGVuICkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5vblZpc2liaWxpdHlQbGF5ICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGF0ZSA9ICdwbGF5aW5nJztcbiAgLy8gbGlzdGVuIHRvIHZpc2liaWxpdHkgY2hhbmdlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UgKTtcbiAgLy8gc3RhcnQgdGlja2luZ1xuICB0aGlzLnRpY2soKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICAvLyBkbyBub3QgdGljayBpZiBub3QgcGxheWluZ1xuICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lID0gdGhpcy5wYXJlbnQub3B0aW9ucy5hdXRvUGxheTtcbiAgLy8gZGVmYXVsdCB0byAzIHNlY29uZHNcbiAgdGltZSA9IHR5cGVvZiB0aW1lID09ICdudW1iZXInID8gdGltZSA6IDMwMDA7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIC8vIEhBQ0s6IHJlc2V0IHRpY2tzIGlmIHN0b3BwZWQgYW5kIHN0YXJ0ZWQgd2l0aGluIGludGVydmFsXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMucGFyZW50Lm5leHQoIHRydWUgKTtcbiAgICBfdGhpcy50aWNrKCk7XG4gIH0sIHRpbWUgKTtcbn07XG5cblBsYXllci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlID0gJ3N0b3BwZWQnO1xuICB0aGlzLmNsZWFyKCk7XG4gIC8vIHJlbW92ZSB2aXNpYmlsaXR5IGNoYW5nZSBldmVudFxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gIGNsZWFyVGltZW91dCggdGhpcy50aW1lb3V0ICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGxheWluZycgKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdwYXVzZWQnO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxufTtcblxuUGxheWVyLnByb3RvdHlwZS51bnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlLXN0YXJ0IHBsYXkgaWYgcGF1c2VkXG4gIGlmICggdGhpcy5zdGF0ZSA9PSAncGF1c2VkJyApIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxufTtcblxuLy8gcGF1c2UgaWYgcGFnZSB2aXNpYmlsaXR5IGlzIGhpZGRlbiwgdW5wYXVzZSBpZiB2aXNpYmxlXG5QbGF5ZXIucHJvdG90eXBlLnZpc2liaWxpdHlDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGlzUGFnZUhpZGRlbiA9IGRvY3VtZW50LmhpZGRlbjtcbiAgdGhpc1sgaXNQYWdlSGlkZGVuID8gJ3BhdXNlJyA6ICd1bnBhdXNlJyBdKCk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnZpc2liaWxpdHlQbGF5ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheSgpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5UGxheSApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwYXVzZUF1dG9QbGF5T25Ib3ZlcjogdHJ1ZVxufSk7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZVBsYXllcicpO1xudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuXG5wcm90by5fY3JlYXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyID0gbmV3IFBsYXllciggdGhpcyApO1xuXG4gIHRoaXMub24oICdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGVQbGF5ZXIgKTtcbiAgdGhpcy5vbiggJ3VpQ2hhbmdlJywgdGhpcy5zdG9wUGxheWVyICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMuc3RvcFBsYXllciApO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMuZGVhY3RpdmF0ZVBsYXllciApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmF1dG9QbGF5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBsYXllci5wbGF5KCk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIHRoaXMgKTtcbn07XG5cbi8vIFBsYXllciBBUEksIGRvbid0IGhhdGUgdGhlIC4uLiB0aGFua3MgSSBrbm93IHdoZXJlIHRoZSBkb29yIGlzXG5cbnByb3RvLnBsYXlQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIucGxheSgpO1xufTtcblxucHJvdG8uc3RvcFBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5zdG9wKCk7XG59O1xuXG5wcm90by5wYXVzZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5wYXVzZSgpO1xufTtcblxucHJvdG8udW5wYXVzZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci51bnBhdXNlKCk7XG59O1xuXG5wcm90by5kZWFjdGl2YXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnN0b3AoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gbW91c2VlbnRlci9sZWF2ZSAtLS0tLSAvL1xuXG4vLyBwYXVzZSBhdXRvLXBsYXkgb24gaG92ZXJcbnByb3RvLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucGF1c2VBdXRvUGxheU9uSG92ZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIHRoaXMgKTtcbn07XG5cbi8vIHJlc3VtZSBhdXRvLXBsYXkgb24gaG92ZXIgb2ZmXG5wcm90by5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIudW5wYXVzZSgpO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuRmxpY2tpdHkuUGxheWVyID0gUGxheWVyO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIHByZXYvbmV4dCBidXR0b25zXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3VuaXBvaW50ZXIvdW5pcG9pbnRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3ZnVVJJID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJldk5leHRCdXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gUHJldk5leHRCdXR0b24oIGRpcmVjdGlvbiwgcGFyZW50ICkge1xuICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBVbmlwb2ludGVyLnByb3RvdHlwZSApO1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc1ByZXZpb3VzID0gdGhpcy5kaXJlY3Rpb24gPT0gLTE7XG4gIHZhciBsZWZ0RGlyZWN0aW9uID0gdGhpcy5wYXJlbnQub3B0aW9ucy5yaWdodFRvTGVmdCA/IDEgOiAtMTtcbiAgdGhpcy5pc0xlZnQgPSB0aGlzLmRpcmVjdGlvbiA9PSBsZWZ0RGlyZWN0aW9uO1xuXG4gIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LWJ1dHRvbiBmbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uJztcbiAgZWxlbWVudC5jbGFzc05hbWUgKz0gdGhpcy5pc1ByZXZpb3VzID8gJyBwcmV2aW91cycgOiAnIG5leHQnO1xuICAvLyBwcmV2ZW50IGJ1dHRvbiBmcm9tIHN1Ym1pdHRpbmcgZm9ybSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDgzNjA3Ni8xODIxODNcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2J1dHRvbicgKTtcbiAgLy8gaW5pdCBhcyBkaXNhYmxlZFxuICB0aGlzLmRpc2FibGUoKTtcblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCB0aGlzLmlzUHJldmlvdXMgPyAnUHJldmlvdXMnIDogJ05leHQnICk7XG5cbiAgLy8gY3JlYXRlIGFycm93XG4gIHZhciBzdmcgPSB0aGlzLmNyZWF0ZVNWRygpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKCBzdmcgKTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMucGFyZW50Lm9uKCAnc2VsZWN0JywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApICk7XG4gIHRoaXMub24oICdwb2ludGVyRG93bicsIHRoaXMucGFyZW50LmNoaWxkVUlQb2ludGVyRG93bi5iaW5kKCB0aGlzLnBhcmVudCApICk7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5iaW5kU3RhcnRFdmVudCggdGhpcy5lbGVtZW50ICk7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzICk7XG4gIC8vIGFkZCB0byBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNsaWNrIGV2ZW50c1xuICB0aGlzLnVuYmluZFN0YXJ0RXZlbnQoIHRoaXMuZWxlbWVudCApO1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmNyZWF0ZVNWRyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdzdmcnKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSggJ2NsYXNzJywgJ2ZsaWNraXR5LWJ1dHRvbi1pY29uJyApO1xuICBzdmcuc2V0QXR0cmlidXRlKCAndmlld0JveCcsICcwIDAgMTAwIDEwMCcgKTtcbiAgdmFyIHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIHN2Z1VSSSwgJ3BhdGgnKTtcbiAgdmFyIHBhdGhNb3ZlbWVudHMgPSBnZXRBcnJvd01vdmVtZW50cyggdGhpcy5wYXJlbnQub3B0aW9ucy5hcnJvd1NoYXBlICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKCAnZCcsIHBhdGhNb3ZlbWVudHMgKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdhcnJvdycgKTtcbiAgLy8gcm90YXRlIGFycm93XG4gIGlmICggIXRoaXMuaXNMZWZ0ICkge1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxMDAsIDEwMCkgcm90YXRlKDE4MCkgJyApO1xuICB9XG4gIHN2Zy5hcHBlbmRDaGlsZCggcGF0aCApO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLy8gZ2V0IFNWRyBwYXRoIG1vdm1lbWVudFxuZnVuY3Rpb24gZ2V0QXJyb3dNb3ZlbWVudHMoIHNoYXBlICkge1xuICAvLyB1c2Ugc2hhcGUgYXMgbW92ZW1lbnQgaWYgc3RyaW5nXG4gIGlmICggdHlwZW9mIHNoYXBlID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBzaGFwZTtcbiAgfVxuICAvLyBjcmVhdGUgbW92ZW1lbnQgc3RyaW5nXG4gIHJldHVybiAnTSAnICsgc2hhcGUueDAgKyAnLDUwJyArXG4gICAgJyBMICcgKyBzaGFwZS54MSArICcsJyArICggc2hhcGUueTEgKyA1MCApICtcbiAgICAnIEwgJyArIHNoYXBlLngyICsgJywnICsgKCBzaGFwZS55MiArIDUwICkgK1xuICAgICcgTCAnICsgc2hhcGUueDMgKyAnLDUwICcgK1xuICAgICcgTCAnICsgc2hhcGUueDIgKyAnLCcgKyAoIDUwIC0gc2hhcGUueTIgKSArXG4gICAgJyBMICcgKyBzaGFwZS54MSArICcsJyArICggNTAgLSBzaGFwZS55MSApICtcbiAgICAnIFonO1xufVxuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGFyZW50LnVpQ2hhbmdlKCk7XG4gIHZhciBtZXRob2QgPSB0aGlzLmlzUHJldmlvdXMgPyAncHJldmlvdXMnIDogJ25leHQnO1xuICB0aGlzLnBhcmVudFsgbWV0aG9kIF0oKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzRW5hYmxlZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gaW5kZXggb2YgZmlyc3Qgb3IgbGFzdCBzbGlkZSwgaWYgcHJldmlvdXMgb3IgbmV4dFxuICB2YXIgc2xpZGVzID0gdGhpcy5wYXJlbnQuc2xpZGVzO1xuICAvLyBlbmFibGUgaXMgd3JhcEFyb3VuZCBhbmQgYXQgbGVhc3QgMiBzbGlkZXNcbiAgaWYgKCB0aGlzLnBhcmVudC5vcHRpb25zLndyYXBBcm91bmQgJiYgc2xpZGVzLmxlbmd0aCA+IDEgKSB7XG4gICAgdGhpcy5lbmFibGUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IHNsaWRlcy5sZW5ndGggPyBzbGlkZXMubGVuZ3RoIC0gMSA6IDA7XG4gIHZhciBib3VuZEluZGV4ID0gdGhpcy5pc1ByZXZpb3VzID8gMCA6IGxhc3RJbmRleDtcbiAgdmFyIG1ldGhvZCA9IHRoaXMucGFyZW50LnNlbGVjdGVkSW5kZXggPT0gYm91bmRJbmRleCA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICB0aGlzWyBtZXRob2QgXSgpO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gIHRoaXMuYWxsT2ZmKCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSBwcm90b3R5cGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXG4gIGFycm93U2hhcGU6IHtcbiAgICB4MDogMTAsXG4gICAgeDE6IDYwLCB5MTogNTAsXG4gICAgeDI6IDcwLCB5MjogNDAsXG4gICAgeDM6IDMwXG4gIH1cbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQcmV2TmV4dEJ1dHRvbnMnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMucHJldk5leHRCdXR0b25zICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucHJldkJ1dHRvbiA9IG5ldyBQcmV2TmV4dEJ1dHRvbiggLTEsIHRoaXMgKTtcbiAgdGhpcy5uZXh0QnV0dG9uID0gbmV3IFByZXZOZXh0QnV0dG9uKCAxLCB0aGlzICk7XG5cbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2QnV0dG9uLmFjdGl2YXRlKCk7XG4gIHRoaXMubmV4dEJ1dHRvbi5hY3RpdmF0ZSgpO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMuZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyApO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVByZXZOZXh0QnV0dG9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnByZXZCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm5leHRCdXR0b24uZGVhY3RpdmF0ZSgpO1xuICB0aGlzLm9mZiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5GbGlja2l0eS5QcmV2TmV4dEJ1dHRvbiA9IFByZXZOZXh0QnV0dG9uO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcbiIsIi8vIHNsaWRlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LlNsaWRlID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU2xpZGUoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuaXNPcmlnaW5MZWZ0ID0gcGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB0aGlzLmNlbGxzID0gW107XG4gIHRoaXMub3V0ZXJXaWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxudmFyIHByb3RvID0gU2xpZGUucHJvdG90eXBlO1xuXG5wcm90by5hZGRDZWxsID0gZnVuY3Rpb24oIGNlbGwgKSB7XG4gIHRoaXMuY2VsbHMucHVzaCggY2VsbCApO1xuICB0aGlzLm91dGVyV2lkdGggKz0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgoIGNlbGwuc2l6ZS5vdXRlckhlaWdodCwgdGhpcy5oZWlnaHQgKTtcbiAgLy8gZmlyc3QgY2VsbCBzdHVmZlxuICBpZiAoIHRoaXMuY2VsbHMubGVuZ3RoID09IDEgKSB7XG4gICAgdGhpcy54ID0gY2VsbC54OyAvLyB4IGNvbWVzIGZyb20gZmlyc3QgY2VsbFxuICAgIHZhciBiZWdpbk1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgICB0aGlzLmZpcnN0TWFyZ2luID0gY2VsbC5zaXplWyBiZWdpbk1hcmdpbiBdO1xuICB9XG59O1xuXG5wcm90by51cGRhdGVUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVuZE1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0JztcbiAgdmFyIGxhc3RDZWxsID0gdGhpcy5nZXRMYXN0Q2VsbCgpO1xuICB2YXIgbGFzdE1hcmdpbiA9IGxhc3RDZWxsID8gbGFzdENlbGwuc2l6ZVsgZW5kTWFyZ2luIF0gOiAwO1xuICB2YXIgc2xpZGVXaWR0aCA9IHRoaXMub3V0ZXJXaWR0aCAtICggdGhpcy5maXJzdE1hcmdpbiArIGxhc3RNYXJnaW4gKTtcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLmZpcnN0TWFyZ2luICsgc2xpZGVXaWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLmdldExhc3RDZWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzWyB0aGlzLmNlbGxzLmxlbmd0aCAtIDEgXTtcbn07XG5cbnByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8udW5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnVuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8uZ2V0Q2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzLm1hcCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgcmV0dXJuIGNlbGwuZWxlbWVudDtcbiAgfSk7XG59O1xuXG5yZXR1cm4gU2xpZGU7XG5cbn0pKTtcbiIsIi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjNcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG4vKiBnbG9iYWxzIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZ2V0U2l6ZSA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGdldCBhIG51bWJlciBmcm9tIGEgc3RyaW5nLCBub3QgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBnZXRTdHlsZVNpemUoIHZhbHVlICkge1xuICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgLy8gbm90IGEgcGVyY2VudCBsaWtlICcxMDAlJywgYW5kIGEgbnVtYmVyXG4gIHZhciBpc1ZhbGlkID0gdmFsdWUuaW5kZXhPZignJScpID09IC0xICYmICFpc05hTiggbnVtICk7XG4gIHJldHVybiBpc1ZhbGlkICYmIG51bTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09ICd1bmRlZmluZWQnID8gbm9vcCA6XG4gIGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuICAgIGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBtZWFzdXJlbWVudHMgPSBbXG4gICdwYWRkaW5nTGVmdCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nQm90dG9tJyxcbiAgJ21hcmdpbkxlZnQnLFxuICAnbWFyZ2luUmlnaHQnLFxuICAnbWFyZ2luVG9wJyxcbiAgJ21hcmdpbkJvdHRvbScsXG4gICdib3JkZXJMZWZ0V2lkdGgnLFxuICAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gICdib3JkZXJUb3BXaWR0aCcsXG4gICdib3JkZXJCb3R0b21XaWR0aCdcbl07XG5cbnZhciBtZWFzdXJlbWVudHNMZW5ndGggPSBtZWFzdXJlbWVudHMubGVuZ3RoO1xuXG5mdW5jdGlvbiBnZXRaZXJvU2l6ZSgpIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGlubmVyV2lkdGg6IDAsXG4gICAgaW5uZXJIZWlnaHQ6IDAsXG4gICAgb3V0ZXJXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMFxuICB9O1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldFN0eWxlLCBnZXQgc3R5bGUgb2YgZWxlbWVudCwgY2hlY2sgZm9yIEZpcmVmb3ggYnVnXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUoIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgbG9nRXJyb3IoICdTdHlsZSByZXR1cm5lZCAnICsgc3R5bGUgK1xuICAgICAgJy4gQXJlIHlvdSBydW5uaW5nIHRoaXMgY29kZSBpbiBhIGhpZGRlbiBpZnJhbWUgb24gRmlyZWZveD8gJyArXG4gICAgICAnU2VlIGh0dHBzOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBDaHJvbWUgJiBTYWZhcmkgbWVhc3VyZSB0aGUgb3V0ZXItd2lkdGggb24gc3R5bGUud2lkdGggb24gYm9yZGVyLWJveCBlbGVtc1xuICAgKiBJRTExICYgRmlyZWZveDwyOSBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcbiAgLy8gcm91bmQgdmFsdWUgZm9yIGJyb3dzZXIgem9vbS4gZGVzYW5kcm8vbWFzb25yeSM5MjhcbiAgaXNCb3hTaXplT3V0ZXIgPSBNYXRoLnJvdW5kKCBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICkgKSA9PSAyMDA7XG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlcjtcblxuICBib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBnZXRTaXplKCBlbGVtICkge1xuICBzZXR1cCgpO1xuXG4gIC8vIHVzZSBxdWVyeVNlbGV0b3IgaWYgZWxlbSBpcyBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG5cbiAgLy8gZG8gbm90IHByb2NlZWQgb24gbm9uLW9iamVjdHNcbiAgaWYgKCAhZWxlbSB8fCB0eXBlb2YgZWxlbSAhPSAnb2JqZWN0JyB8fCAhZWxlbS5ub2RlVHlwZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZWxlbSApO1xuXG4gIC8vIGlmIGhpZGRlbiwgZXZlcnl0aGluZyBpcyAwXG4gIGlmICggc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XG4gICAgcmV0dXJuIGdldFplcm9TaXplKCk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IHt9O1xuICBzaXplLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgc2l6ZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICB2YXIgaXNCb3JkZXJCb3ggPSBzaXplLmlzQm9yZGVyQm94ID0gc3R5bGUuYm94U2l6aW5nID09ICdib3JkZXItYm94JztcblxuICAvLyBnZXQgYWxsIG1lYXN1cmVtZW50c1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgbWVhc3VyZW1lbnRzTGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRzW2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlWyBtZWFzdXJlbWVudCBdO1xuICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAgIC8vIGFueSAnYXV0bycsICdtZWRpdW0nIHZhbHVlIHdpbGwgYmUgMFxuICAgIHNpemVbIG1lYXN1cmVtZW50IF0gPSAhaXNOYU4oIG51bSApID8gbnVtIDogMDtcbiAgfVxuXG4gIHZhciBwYWRkaW5nV2lkdGggPSBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5wYWRkaW5nUmlnaHQ7XG4gIHZhciBwYWRkaW5nSGVpZ2h0ID0gc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5wYWRkaW5nQm90dG9tO1xuICB2YXIgbWFyZ2luV2lkdGggPSBzaXplLm1hcmdpbkxlZnQgKyBzaXplLm1hcmdpblJpZ2h0O1xuICB2YXIgbWFyZ2luSGVpZ2h0ID0gc2l6ZS5tYXJnaW5Ub3AgKyBzaXplLm1hcmdpbkJvdHRvbTtcbiAgdmFyIGJvcmRlcldpZHRoID0gc2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBzaXplLmJvcmRlclJpZ2h0V2lkdGg7XG4gIHZhciBib3JkZXJIZWlnaHQgPSBzaXplLmJvcmRlclRvcFdpZHRoICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcblxuICB2YXIgaXNCb3JkZXJCb3hTaXplT3V0ZXIgPSBpc0JvcmRlckJveCAmJiBpc0JveFNpemVPdXRlcjtcblxuICAvLyBvdmVyd3JpdGUgd2lkdGggYW5kIGhlaWdodCBpZiB3ZSBjYW4gZ2V0IGl0IGZyb20gc3R5bGVcbiAgdmFyIHN0eWxlV2lkdGggPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICk7XG4gIGlmICggc3R5bGVXaWR0aCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS53aWR0aCA9IHN0eWxlV2lkdGggK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICB9XG5cbiAgdmFyIHN0eWxlSGVpZ2h0ID0gZ2V0U3R5bGVTaXplKCBzdHlsZS5oZWlnaHQgKTtcbiAgaWYgKCBzdHlsZUhlaWdodCAhPT0gZmFsc2UgKSB7XG4gICAgc2l6ZS5oZWlnaHQgPSBzdHlsZUhlaWdodCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcbiAgfVxuXG4gIHNpemUuaW5uZXJXaWR0aCA9IHNpemUud2lkdGggLSAoIHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIHNpemUuaW5uZXJIZWlnaHQgPSBzaXplLmhlaWdodCAtICggcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuXG4gIHNpemUub3V0ZXJXaWR0aCA9IHNpemUud2lkdGggKyBtYXJnaW5XaWR0aDtcbiAgc2l6ZS5vdXRlckhlaWdodCA9IHNpemUuaGVpZ2h0ICsgbWFyZ2luSGVpZ2h0O1xuXG4gIHJldHVybiBzaXplO1xufVxuXG5yZXR1cm4gZ2V0U2l6ZTtcblxufSk7XG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cuanMubWFwXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG4iLCIvKipcbiogUGFyYWxsYXguanNcbiogQGF1dGhvciBNYXR0aGV3IFdhZ2VyZmllbGQgLSBAd2FnZXJmaWVsZCwgUmVuw6kgUm90aCAtIG1haWxAcmVuZXJvdGgub3JnXG4qIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyYWxsYXggZWZmZWN0IGJldHdlZW4gYW4gYXJyYXkgb2YgbGF5ZXJzLFxuKiAgICAgICAgICAgICAgZHJpdmluZyB0aGUgbW90aW9uIGZyb20gdGhlIGd5cm9zY29wZSBvdXRwdXQgb2YgYSBzbWFydGRldmljZS5cbiogICAgICAgICAgICAgIElmIG5vIGd5cm9zY29wZSBpcyBhdmFpbGFibGUsIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgdXNlZC5cbiovXG5cbmNvbnN0IHJxQW5GciA9IHJlcXVpcmUoJ3JhZicpXG5jb25zdCBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcblxuY29uc3QgaGVscGVycyA9IHtcbiAgcHJvcGVydHlDYWNoZToge30sXG4gIHZlbmRvcnM6IFtudWxsLCBbJy13ZWJraXQtJywnd2Via2l0J10sIFsnLW1vei0nLCdNb3onXSwgWyctby0nLCdPJ10sIFsnLW1zLScsJ21zJ11dLFxuXG4gIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBtaW4gPCBtYXhcbiAgICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbiAgfSxcblxuICBkYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gaGVscGVycy5kZXNlcmlhbGl6ZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nK25hbWUpKVxuICB9LFxuXG4gIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG4gIH0sXG5cbiAgY2FtZWxDYXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLy0rKC4pPy9nLCAobWF0Y2gsIGNoYXJhY3RlcikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXJhY3RlciA/IGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpIDogJydcbiAgICB9KVxuICB9LFxuXG4gIGFjY2VsZXJhdGUoZWxlbWVudCkge1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwLjAwMDFkZWcpJylcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtLXN0eWxlJywgJ3ByZXNlcnZlLTNkJylcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAnYmFja2ZhY2UtdmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICB9LFxuXG4gIHRyYW5zZm9ybVN1cHBvcnQodmFsdWUpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIGNzc1Byb3BlcnR5ID0gbnVsbCxcbiAgICAgICAganNQcm9wZXJ0eSA9IG51bGxcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMF0gKyAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJ1RyYW5zZm9ybSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgICAganNQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoKHZhbHVlKSB7XG4gICAgICBjYXNlICcyRCc6XG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlTdXBwb3J0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICczRCc6XG4gICAgICAgIGlmIChwcm9wZXJ0eVN1cHBvcnQpIHtcbiAgICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpLFxuICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgIGRvY3VtZW50T3ZlcmZsb3cgPSBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXG4gICAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSBmYWxzZVxuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gdHJ1ZVxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChib2R5KVxuICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldID0gJ3RyYW5zbGF0ZTNkKDFweCwxcHgsMXB4KSdcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NQcm9wZXJ0eSlcbiAgICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eVZhbHVlLmxlbmd0aCA+IDAgJiYgcHJvcGVydHlWYWx1ZSAhPT0gJ25vbmUnXG4gICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jdW1lbnRPdmVyZmxvd1xuICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudClcblxuICAgICAgICAgIGlmICggaXNDcmVhdGVkQm9keSApIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVTdXBwb3J0XG4gIH0sXG5cbiAgY3NzKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGxldCBqc1Byb3BlcnR5ID0gaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XVxuICAgIGlmICghanNQcm9wZXJ0eSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy5jYW1lbENhc2UoaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJy0nICsgcHJvcGVydHkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IHByb3BlcnR5XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV0gPSBqc1Byb3BlcnR5XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldID0gdmFsdWVcbiAgfVxuXG59XG5cbmNvbnN0IE1BR0lDX05VTUJFUiA9IDMwLFxuICAgICAgREVGQVVMVFMgPSB7XG4gICAgICAgIHJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICAgICAgICBjbGlwUmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGlucHV0RWxlbWVudDogbnVsbCxcbiAgICAgICAgaG92ZXJPbmx5OiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRpb25UaHJlc2hvbGQ6IDEwMCxcbiAgICAgICAgY2FsaWJyYXRpb25EZWxheTogNTAwLFxuICAgICAgICBzdXBwb3J0RGVsYXk6IDUwMCxcbiAgICAgICAgY2FsaWJyYXRlWDogZmFsc2UsXG4gICAgICAgIGNhbGlicmF0ZVk6IHRydWUsXG4gICAgICAgIGludmVydFg6IHRydWUsXG4gICAgICAgIGludmVydFk6IHRydWUsXG4gICAgICAgIGxpbWl0WDogZmFsc2UsXG4gICAgICAgIGxpbWl0WTogZmFsc2UsXG4gICAgICAgIHNjYWxhclg6IDEwLjAsXG4gICAgICAgIHNjYWxhclk6IDEwLjAsXG4gICAgICAgIGZyaWN0aW9uWDogMC4xLFxuICAgICAgICBmcmljdGlvblk6IDAuMSxcbiAgICAgICAgb3JpZ2luWDogMC41LFxuICAgICAgICBvcmlnaW5ZOiAwLjUsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IGZhbHNlLFxuICAgICAgICBwcmVjaXNpb246IDEsXG4gICAgICAgIG9uUmVhZHk6IG51bGwsXG4gICAgICAgIHNlbGVjdG9yOiBudWxsXG4gICAgICB9XG5cbmNsYXNzIFBhcmFsbGF4IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGNhbGlicmF0ZVg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteCcpLFxuICAgICAgY2FsaWJyYXRlWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS15JyksXG4gICAgICBpbnZlcnRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXgnKSxcbiAgICAgIGludmVydFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteScpLFxuICAgICAgbGltaXRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteCcpLFxuICAgICAgbGltaXRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteScpLFxuICAgICAgc2NhbGFyWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci14JyksXG4gICAgICBzY2FsYXJZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXknKSxcbiAgICAgIGZyaWN0aW9uWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXgnKSxcbiAgICAgIGZyaWN0aW9uWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXknKSxcbiAgICAgIG9yaWdpblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teCcpLFxuICAgICAgb3JpZ2luWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi15JyksXG4gICAgICBwb2ludGVyRXZlbnRzOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncG9pbnRlci1ldmVudHMnKSxcbiAgICAgIHByZWNpc2lvbjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3ByZWNpc2lvbicpLFxuICAgICAgcmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3JlbGF0aXZlLWlucHV0JyksXG4gICAgICBjbGlwUmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NsaXAtcmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGhvdmVyT25seTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2hvdmVyLW9ubHknKSxcbiAgICAgIGlucHV0RWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW5wdXQtZWxlbWVudCcpKSxcbiAgICAgIHNlbGVjdG9yOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2VsZWN0b3InKVxuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvYmplY3RBc3NpZ24odGhpcywgREVGQVVMVFMsIGRhdGEsIG9wdGlvbnMpXG5cbiAgICBpZighdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gbnVsbFxuICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZVxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuICAgIHRoaXMucmFmID0gbnVsbFxuXG4gICAgdGhpcy5ib3VuZHMgPSBudWxsXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gMFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IDBcbiAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IDBcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSAwXG5cbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gMFxuICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSAwXG5cbiAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSAwXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VZID0gMFxuXG4gICAgdGhpcy5jYWxpYnJhdGlvblggPSAwXG4gICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG5cbiAgICB0aGlzLmlucHV0WCA9IDBcbiAgICB0aGlzLmlucHV0WSA9IDBcblxuICAgIHRoaXMubW90aW9uWCA9IDBcbiAgICB0aGlzLm1vdGlvblkgPSAwXG5cbiAgICB0aGlzLnZlbG9jaXR5WCA9IDBcbiAgICB0aGlzLnZlbG9jaXR5WSA9IDBcblxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24gPSB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VNb3Rpb24gPSB0aGlzLm9uRGV2aWNlTW90aW9uLmJpbmQodGhpcylcbiAgICB0aGlzLm9uT3JpZW50YXRpb25UaW1lciA9IHRoaXMub25PcmllbnRhdGlvblRpbWVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTW90aW9uVGltZXIgPSB0aGlzLm9uTW90aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25DYWxpYnJhdGlvblRpbWVyID0gdGhpcy5vbkNhbGlicmF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25BbmltYXRpb25GcmFtZSA9IHRoaXMub25BbmltYXRpb25GcmFtZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSBudWxsXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBudWxsXG4gICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgdGhpcy5kZXNrdG9wID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxCQjEwfG1vYml8dGFibGV0fG9wZXJhIG1pbml8bmV4dXMgNykvaSlcbiAgICB0aGlzLm1vdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wXG4gICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMFxuICAgIHRoaXMubW90aW9uU3RhdHVzID0gMFxuXG4gICAgdGhpcy5pbml0aWFsaXNlKClcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCcyRCcpXG4gICAgICB0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnM0QnKVxuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyZSBDb250ZXh0IFN0eWxlc1xuICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgaGVscGVycy5hY2NlbGVyYXRlKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXG4gICAgaWYgKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gICAgfVxuXG4gICAgLy8gUG9pbnRlciBldmVudHNcbiAgICBpZighdGhpcy5wb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICAgIH1cblxuICAgIC8vIFNldHVwXG4gICAgdGhpcy51cGRhdGVMYXllcnMoKVxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gICAgdGhpcy5lbmFibGUoKVxuICAgIHRoaXMucXVldWVDYWxpYnJhdGlvbih0aGlzLmNhbGlicmF0aW9uRGVsYXkpXG4gIH1cblxuICBkb1JlYWR5Q2FsbGJhY2soKSB7XG4gICAgaWYodGhpcy5vblJlYWR5KSB7XG4gICAgICB0aGlzLm9uUmVhZHkoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxheWVycygpIHtcbiAgICBpZih0aGlzLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuXG4gICAgfVxuXG4gICAgaWYoIXRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdQYXJhbGxheEpTOiBZb3VyIHNjZW5lIGRvZXMgbm90IGhhdmUgYW55IGxheWVycy4nKVxuICAgIH1cblxuICAgIHRoaXMuZGVwdGhzWCA9IFtdXG4gICAgdGhpcy5kZXB0aHNZID0gW11cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XVxuXG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKGxheWVyKVxuICAgICAgfVxuXG4gICAgICBsYXllci5zdHlsZS5wb3NpdGlvbiA9IGluZGV4ID8gJ2Fic29sdXRlJyA6ICdyZWxhdGl2ZSdcbiAgICAgIGxheWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICBsYXllci5zdHlsZS5sZWZ0ID0gMFxuICAgICAgbGF5ZXIuc3R5bGUudG9wID0gMFxuXG4gICAgICBsZXQgZGVwdGggPSBoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aCcpIHx8IDBcbiAgICAgIHRoaXMuZGVwdGhzWC5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXgnKSB8fCBkZXB0aClcbiAgICAgIHRoaXMuZGVwdGhzWS5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXknKSB8fCBkZXB0aClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaW1lbnNpb25zKCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gdGhpcy53aW5kb3dXaWR0aCAqIHRoaXMub3JpZ2luWFxuICAgIHRoaXMud2luZG93Q2VudGVyWSA9IHRoaXMud2luZG93SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJYLCB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy53aW5kb3dDZW50ZXJYKVxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWSwgdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLndpbmRvd0NlbnRlclkpXG4gIH1cblxuICB1cGRhdGVCb3VuZHMoKSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmlucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuYm91bmRzLmxlZnRcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSB0aGlzLmJvdW5kcy50b3BcbiAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IHRoaXMuYm91bmRzLndpZHRoXG4gICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0XG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IHRoaXMuZWxlbWVudFdpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IHRoaXMuZWxlbWVudEhlaWdodCAqIHRoaXMub3JpZ2luWVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclgsIHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5lbGVtZW50Q2VudGVyWClcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJZLCB0aGlzLmVsZW1lbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKVxuICB9XG5cbiAgcXVldWVDYWxpYnJhdGlvbihkZWxheSkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpXG4gICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciwgZGVsYXkpXG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uT3JpZW50YXRpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb24pXG4gICAgICB0aGlzLmRldGVjdGlvblRpbWVyID0gc2V0VGltZW91dCh0aGlzLm9uTW90aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMFxuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKVxuICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgfVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpXG4gICAgcnFBbkZyLmNhbmNlbCh0aGlzLnJhZilcbiAgfVxuXG4gIGNhbGlicmF0ZSh4LCB5KSB7XG4gICAgdGhpcy5jYWxpYnJhdGVYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVYIDogeFxuICAgIHRoaXMuY2FsaWJyYXRlWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWSA6IHlcbiAgfVxuXG4gIGludmVydCh4LCB5KSB7XG4gICAgdGhpcy5pbnZlcnRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRYIDogeFxuICAgIHRoaXMuaW52ZXJ0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WSA6IHlcbiAgfVxuXG4gIGZyaWN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLmZyaWN0aW9uWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25YIDogeFxuICAgIHRoaXMuZnJpY3Rpb25ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblkgOiB5XG4gIH1cblxuICBzY2FsYXIoeCwgeSkge1xuICAgIHRoaXMuc2NhbGFyWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWCA6IHhcbiAgICB0aGlzLnNjYWxhclkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclkgOiB5XG4gIH1cblxuICBsaW1pdCh4LCB5KSB7XG4gICAgdGhpcy5saW1pdFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WCA6IHhcbiAgICB0aGlzLmxpbWl0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRZIDogeVxuICB9XG5cbiAgb3JpZ2luKHgsIHkpIHtcbiAgICB0aGlzLm9yaWdpblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblggOiB4XG4gICAgdGhpcy5vcmlnaW5ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5ZIDogeVxuICB9XG5cbiAgc2V0SW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICB9XG5cbiAgc2V0UG9zaXRpb24oZWxlbWVudCwgeCwgeSkge1xuICAgIHggPSB4LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4J1xuICAgIHkgPSB5LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4J1xuICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgeCArICcsJyArIHkgKyAnLDApJylcbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHhcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0geVxuICAgIH1cbiAgfVxuXG4gIG9uT3JpZW50YXRpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQgJiYgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgdGhpcy5kaXNhYmxlKClcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uTW90aW9uVGltZXIoKSB7XG4gICAgaWYgKHRoaXMubW90aW9uU3VwcG9ydCAmJiB0aGlzLm1vdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgdGhpcy5kaXNhYmxlKClcbiAgICAgIHRoaXMubW90aW9uU3VwcG9ydCA9IGZhbHNlXG4gICAgICB0aGlzLmVuYWJsZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBvbkNhbGlicmF0aW9uVGltZXIoKSB7XG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gIH1cblxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKVxuICB9XG5cbiAgb25BbmltYXRpb25GcmFtZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kcygpXG4gICAgbGV0IGNhbGlicmF0ZWRJbnB1dFggPSB0aGlzLmlucHV0WCAtIHRoaXMuY2FsaWJyYXRpb25YLFxuICAgICAgICBjYWxpYnJhdGVkSW5wdXRZID0gdGhpcy5pbnB1dFkgLSB0aGlzLmNhbGlicmF0aW9uWVxuICAgIGlmICgoTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WCkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkKSB8fCAoTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WSkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkKSkge1xuICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKDApXG4gICAgfVxuICAgIGlmICh0aGlzLnBvcnRyYWl0KSB7XG4gICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFlcbiAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFhcbiAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgIH1cbiAgICB0aGlzLm1vdGlvblggKj0gdGhpcy5lbGVtZW50V2lkdGggKiAodGhpcy5zY2FsYXJYIC8gMTAwKVxuICAgIHRoaXMubW90aW9uWSAqPSB0aGlzLmVsZW1lbnRIZWlnaHQgKiAodGhpcy5zY2FsYXJZIC8gMTAwKVxuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh0aGlzLmxpbWl0WCkpKSB7XG4gICAgICB0aGlzLm1vdGlvblggPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWCwgLXRoaXMubGltaXRYLCB0aGlzLmxpbWl0WClcbiAgICB9XG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRZKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWSA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25ZLCAtdGhpcy5saW1pdFksIHRoaXMubGltaXRZKVxuICAgIH1cbiAgICB0aGlzLnZlbG9jaXR5WCArPSAodGhpcy5tb3Rpb25YIC0gdGhpcy52ZWxvY2l0eVgpICogdGhpcy5mcmljdGlvblhcbiAgICB0aGlzLnZlbG9jaXR5WSArPSAodGhpcy5tb3Rpb25ZIC0gdGhpcy52ZWxvY2l0eVkpICogdGhpcy5mcmljdGlvbllcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF0sXG4gICAgICAgICAgZGVwdGhYID0gdGhpcy5kZXB0aHNYW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFkgPSB0aGlzLmRlcHRoc1lbaW5kZXhdLFxuICAgICAgICAgIHhPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WCAqIChkZXB0aFggKiAodGhpcy5pbnZlcnRYID8gLTEgOiAxKSksXG4gICAgICAgICAgeU9mZnNldCA9IHRoaXMudmVsb2NpdHlZICogKGRlcHRoWSAqICh0aGlzLmludmVydFkgPyAtMSA6IDEpKVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihsYXllciwgeE9mZnNldCwgeU9mZnNldClcbiAgICB9XG4gICAgdGhpcy5yYWYgPSBycUFuRnIodGhpcy5vbkFuaW1hdGlvbkZyYW1lKVxuICB9XG5cbiAgcm90YXRlKGJldGEsIGdhbW1hKXtcbiAgICAvLyBFeHRyYWN0IFJvdGF0aW9uXG4gICAgbGV0IHggPSAoYmV0YSB8fCAwKSAvIE1BR0lDX05VTUJFUiwgLy8gIC05MCA6OiA5MFxuICAgICAgICB5ID0gKGdhbW1hIHx8IDApIC8gTUFHSUNfTlVNQkVSIC8vIC0xODAgOjogMTgwXG5cbiAgICAvLyBEZXRlY3QgT3JpZW50YXRpb24gQ2hhbmdlXG4gICAgbGV0IHBvcnRyYWl0ID0gdGhpcy53aW5kb3dIZWlnaHQgPiB0aGlzLndpbmRvd1dpZHRoXG4gICAgaWYgKHRoaXMucG9ydHJhaXQgIT09IHBvcnRyYWl0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gcG9ydHJhaXRcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbGlicmF0aW9uRmxhZykge1xuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSBmYWxzZVxuICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSB4XG4gICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IHlcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0WCA9IHhcbiAgICB0aGlzLmlucHV0WSA9IHlcbiAgfVxuXG4gIG9uRGV2aWNlT3JpZW50YXRpb24oZXZlbnQpIHtcbiAgICBsZXQgYmV0YSA9IGV2ZW50LmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5nYW1tYVxuICAgIGlmIChiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMVxuICAgICAgdGhpcy5yb3RhdGUoYmV0YSwgZ2FtbWEpXG4gICAgfVxuICB9XG5cbiAgb25EZXZpY2VNb3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgYmV0YSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5iZXRhXG4gICAgbGV0IGdhbW1hID0gZXZlbnQucm90YXRpb25SYXRlLmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubW90aW9uU3RhdHVzID0gMVxuICAgICAgdGhpcy5yb3RhdGUoYmV0YSwgZ2FtbWEpXG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBsZXQgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZXG5cbiAgICAvLyByZXNldCBpbnB1dCB0byBjZW50ZXIgaWYgaG92ZXJPbmx5IGlzIHNldCBhbmQgd2UncmUgbm90IGhvdmVyaW5nIHRoZSBlbGVtZW50XG4gICAgaWYodGhpcy5ob3Zlck9ubHkgJiZcbiAgICAgICgoY2xpZW50WCA8IHRoaXMuZWxlbWVudFBvc2l0aW9uWCB8fCBjbGllbnRYID4gdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpIHx8XG4gICAgICAoY2xpZW50WSA8IHRoaXMuZWxlbWVudFBvc2l0aW9uWSB8fCBjbGllbnRZID4gdGhpcy5lbGVtZW50UG9zaXRpb25ZICsgdGhpcy5lbGVtZW50SGVpZ2h0KSkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFggPSAwXG4gICAgICAgIHRoaXMuaW5wdXRZID0gMFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgIGlmICh0aGlzLnJlbGF0aXZlSW5wdXQpIHtcbiAgICAgIC8vIENsaXAgbW91c2UgY29vcmRpbmF0ZXMgaW5zaWRlIGVsZW1lbnQgYm91bmRzLlxuICAgICAgaWYgKHRoaXMuY2xpcFJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgY2xpZW50WCA9IE1hdGgubWF4KGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWClcbiAgICAgICAgY2xpZW50WCA9IE1hdGgubWluKGNsaWVudFgsIHRoaXMuZWxlbWVudFBvc2l0aW9uWCArIHRoaXMuZWxlbWVudFdpZHRoKVxuICAgICAgICBjbGllbnRZID0gTWF0aC5tYXgoY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZKVxuICAgICAgICBjbGllbnRZID0gTWF0aC5taW4oY2xpZW50WSwgdGhpcy5lbGVtZW50UG9zaXRpb25ZICsgdGhpcy5lbGVtZW50SGVpZ2h0KVxuICAgICAgfVxuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LlxuICAgICAgaWYodGhpcy5lbGVtZW50UmFuZ2VYICYmIHRoaXMuZWxlbWVudFJhbmdlWSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb25YIC0gdGhpcy5lbGVtZW50Q2VudGVyWCkgLyB0aGlzLmVsZW1lbnRSYW5nZVhcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWSAtIHRoaXMuZWxlbWVudENlbnRlclkpIC8gdGhpcy5lbGVtZW50UmFuZ2VZXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgd2luZG93LlxuICAgICAgaWYodGhpcy53aW5kb3dSYWRpdXNYICYmIHRoaXMud2luZG93UmFkaXVzWSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy53aW5kb3dDZW50ZXJYKSAvIHRoaXMud2luZG93UmFkaXVzWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy53aW5kb3dDZW50ZXJZKSAvIHRoaXMud2luZG93UmFkaXVzWVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kaXNhYmxlKClcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhbGlicmF0aW9uVGltZXIpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZGV0ZWN0aW9uVGltZXIpXG5cbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5sYXllcnNbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnRcbiAgICBkZWxldGUgdGhpcy5sYXllcnNcbiAgfVxuXG4gIHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICczLjEuMCdcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyYWxsYXhcbiIsIi8qIVxuICogVW5pZHJhZ2dlciB2Mi4zLjFcbiAqIERyYWdnYWJsZSBiYXNlIGNsYXNzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAndW5pcG9pbnRlci91bmlwb2ludGVyJ1xuICAgIF0sIGZ1bmN0aW9uKCBVbmlwb2ludGVyICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgVW5pcG9pbnRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5VbmlkcmFnZ2VyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5Vbmlwb2ludGVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgVW5pcG9pbnRlciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVbmlkcmFnZ2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIFVuaWRyYWdnZXIoKSB7fVxuXG4vLyBpbmhlcml0IFVuaXBvaW50ZXIgJiBFdkVtaXR0ZXJcbnZhciBwcm90byA9IFVuaWRyYWdnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuLy8gLS0tLS0gYmluZCBzdGFydCAtLS0tLSAvL1xuXG5wcm90by5iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iaW5kSGFuZGxlcyggdHJ1ZSApO1xufTtcblxucHJvdG8udW5iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iaW5kSGFuZGxlcyggZmFsc2UgKTtcbn07XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBzdGFydCBldmVudFxuICogQHBhcmFtIHtCb29sZWFufSBpc0FkZFxuICovXG5wcm90by5fYmluZEhhbmRsZXMgPSBmdW5jdGlvbiggaXNBZGQgKSB7XG4gIC8vIG11bmdlIGlzQWRkLCBkZWZhdWx0IHRvIHRydWVcbiAgaXNBZGQgPSBpc0FkZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzQWRkO1xuICAvLyBiaW5kIGVhY2ggaGFuZGxlXG4gIHZhciBiaW5kTWV0aG9kID0gaXNBZGQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHZhciB0b3VjaEFjdGlvbiA9IGlzQWRkID8gdGhpcy5fdG91Y2hBY3Rpb25WYWx1ZSA6ICcnO1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5oYW5kbGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBoYW5kbGUgPSB0aGlzLmhhbmRsZXNbaV07XG4gICAgdGhpcy5fYmluZFN0YXJ0RXZlbnQoIGhhbmRsZSwgaXNBZGQgKTtcbiAgICBoYW5kbGVbIGJpbmRNZXRob2QgXSggJ2NsaWNrJywgdGhpcyApO1xuICAgIC8vIHRvdWNoLWFjdGlvbjogbm9uZSB0byBvdmVycmlkZSBicm93c2VyIHRvdWNoIGdlc3R1cmVzLiBtZXRhZml6enkvZmxpY2tpdHkjNTQwXG4gICAgaWYgKCB3aW5kb3cuUG9pbnRlckV2ZW50ICkge1xuICAgICAgaGFuZGxlLnN0eWxlLnRvdWNoQWN0aW9uID0gdG91Y2hBY3Rpb247XG4gICAgfVxuICB9XG59O1xuXG4vLyBwcm90b3R5cGUgc28gaXQgY2FuIGJlIG92ZXJ3cml0ZWFibGUgYnkgRmxpY2tpdHlcbnByb3RvLl90b3VjaEFjdGlvblZhbHVlID0gJ25vbmUnO1xuXG4vLyAtLS0tLSBzdGFydCBldmVudCAtLS0tLSAvL1xuXG4vKipcbiAqIHBvaW50ZXIgc3RhcnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgaXNPa2F5ID0gdGhpcy5va2F5UG9pbnRlckRvd24oIGV2ZW50ICk7XG4gIGlmICggIWlzT2theSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdHJhY2sgc3RhcnQgZXZlbnQgcG9zaXRpb25cbiAgLy8gU2FmYXJpIDkgb3ZlcnJpZGVzIHBhZ2VYIGFuZCBwYWdlWS4gVGhlc2UgdmFsdWVzIG5lZWRzIHRvIGJlIGNvcGllZC4gZmxpY2tpdHkjODQyXG4gIHRoaXMucG9pbnRlckRvd25Qb2ludGVyID0ge1xuICAgIHBhZ2VYOiBwb2ludGVyLnBhZ2VYLFxuICAgIHBhZ2VZOiBwb2ludGVyLnBhZ2VZLFxuICB9O1xuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMucG9pbnRlckRvd25CbHVyKCk7XG4gIC8vIGJpbmQgbW92ZSBhbmQgZW5kIGV2ZW50c1xuICB0aGlzLl9iaW5kUG9zdFN0YXJ0RXZlbnRzKCBldmVudCApO1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJEb3duJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyBub2RlcyB0aGF0IGhhdmUgdGV4dCBmaWVsZHNcbnZhciBjdXJzb3JOb2RlcyA9IHtcbiAgVEVYVEFSRUE6IHRydWUsXG4gIElOUFVUOiB0cnVlLFxuICBTRUxFQ1Q6IHRydWUsXG4gIE9QVElPTjogdHJ1ZSxcbn07XG5cbi8vIGlucHV0IHR5cGVzIHRoYXQgZG8gbm90IGhhdmUgdGV4dCBmaWVsZHNcbnZhciBjbGlja1R5cGVzID0ge1xuICByYWRpbzogdHJ1ZSxcbiAgY2hlY2tib3g6IHRydWUsXG4gIGJ1dHRvbjogdHJ1ZSxcbiAgc3VibWl0OiB0cnVlLFxuICBpbWFnZTogdHJ1ZSxcbiAgZmlsZTogdHJ1ZSxcbn07XG5cbi8vIGRpc21pc3MgaW5wdXRzIHdpdGggdGV4dCBmaWVsZHMuIGZsaWNraXR5IzQwMywgZmxpY2tpdHkjNDA0XG5wcm90by5va2F5UG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBpc0N1cnNvck5vZGUgPSBjdXJzb3JOb2Rlc1sgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIF07XG4gIHZhciBpc0NsaWNrVHlwZSA9IGNsaWNrVHlwZXNbIGV2ZW50LnRhcmdldC50eXBlIF07XG4gIHZhciBpc09rYXkgPSAhaXNDdXJzb3JOb2RlIHx8IGlzQ2xpY2tUeXBlO1xuICBpZiAoICFpc09rYXkgKSB7XG4gICAgdGhpcy5fcG9pbnRlclJlc2V0KCk7XG4gIH1cbiAgcmV0dXJuIGlzT2theTtcbn07XG5cbi8vIGtsdWRnZSB0byBibHVyIHByZXZpb3VzbHkgZm9jdXNlZCBpbnB1dFxucHJvdG8ucG9pbnRlckRvd25CbHVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgLy8gZG8gbm90IGJsdXIgYm9keSBmb3IgSUUxMCwgbWV0YWZpenp5L2ZsaWNraXR5IzExN1xuICB2YXIgY2FuQmx1ciA9IGZvY3VzZWQgJiYgZm9jdXNlZC5ibHVyICYmIGZvY3VzZWQgIT0gZG9jdW1lbnQuYm9keTtcbiAgaWYgKCBjYW5CbHVyICkge1xuICAgIGZvY3VzZWQuYmx1cigpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBtb3ZlIGV2ZW50IC0tLS0tIC8vXG5cbi8qKlxuICogZHJhZyBtb3ZlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdmFyIG1vdmVWZWN0b3IgPSB0aGlzLl9kcmFnUG9pbnRlck1vdmUoIGV2ZW50LCBwb2ludGVyICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlck1vdmUnLCBbIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbiAgdGhpcy5fZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG4vLyBiYXNlIHBvaW50ZXIgbW92ZSBsb2dpY1xucHJvdG8uX2RyYWdQb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdmFyIG1vdmVWZWN0b3IgPSB7XG4gICAgeDogcG9pbnRlci5wYWdlWCAtIHRoaXMucG9pbnRlckRvd25Qb2ludGVyLnBhZ2VYLFxuICAgIHk6IHBvaW50ZXIucGFnZVkgLSB0aGlzLnBvaW50ZXJEb3duUG9pbnRlci5wYWdlWVxuICB9O1xuICAvLyBzdGFydCBkcmFnIGlmIHBvaW50ZXIgaGFzIG1vdmVkIGZhciBlbm91Z2ggdG8gc3RhcnQgZHJhZ1xuICBpZiAoICF0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5oYXNEcmFnU3RhcnRlZCggbW92ZVZlY3RvciApICkge1xuICAgIHRoaXMuX2RyYWdTdGFydCggZXZlbnQsIHBvaW50ZXIgKTtcbiAgfVxuICByZXR1cm4gbW92ZVZlY3Rvcjtcbn07XG5cbi8vIGNvbmRpdGlvbiBpZiBwb2ludGVyIGhhcyBtb3ZlZCBmYXIgZW5vdWdoIHRvIHN0YXJ0IGRyYWdcbnByb3RvLmhhc0RyYWdTdGFydGVkID0gZnVuY3Rpb24oIG1vdmVWZWN0b3IgKSB7XG4gIHJldHVybiBNYXRoLmFicyggbW92ZVZlY3Rvci54ICkgPiAzIHx8IE1hdGguYWJzKCBtb3ZlVmVjdG9yLnkgKSA+IDM7XG59O1xuXG4vLyAtLS0tLSBlbmQgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlclVwJywgWyBldmVudCwgcG9pbnRlciBdICk7XG4gIHRoaXMuX2RyYWdQb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5fZHJhZ1BvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCB0aGlzLmlzRHJhZ2dpbmcgKSB7XG4gICAgdGhpcy5fZHJhZ0VuZCggZXZlbnQsIHBvaW50ZXIgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBwb2ludGVyIGRpZG4ndCBtb3ZlIGVub3VnaCBmb3IgZHJhZyB0byBzdGFydFxuICAgIHRoaXMuX3N0YXRpY0NsaWNrKCBldmVudCwgcG9pbnRlciApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGRyYWdTdGFydFxucHJvdG8uX2RyYWdTdGFydCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgLy8gcHJldmVudCBjbGlja3NcbiAgdGhpcy5pc1ByZXZlbnRpbmdDbGlja3MgPSB0cnVlO1xuICB0aGlzLmRyYWdTdGFydCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLmRyYWdTdGFydCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdkcmFnU3RhcnQnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGRyYWdNb3ZlXG5wcm90by5fZHJhZ01vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKSB7XG4gIC8vIGRvIG5vdCBkcmFnIGlmIG5vdCBkcmFnZ2luZyB5ZXRcbiAgaWYgKCAhdGhpcy5pc0RyYWdnaW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG5wcm90by5kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdkcmFnTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xufTtcblxuLy8gZHJhZ0VuZFxucHJvdG8uX2RyYWdFbmQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIHNldCBmbGFnc1xuICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgLy8gcmUtZW5hYmxlIGNsaWNraW5nIGFzeW5jXG4gIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLmlzUHJldmVudGluZ0NsaWNrcztcbiAgfS5iaW5kKCB0aGlzICkgKTtcblxuICB0aGlzLmRyYWdFbmQoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5kcmFnRW5kID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdFbmQnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIG9uY2xpY2sgLS0tLS0gLy9cblxuLy8gaGFuZGxlIGFsbCBjbGlja3MgYW5kIHByZXZlbnQgY2xpY2tzIHdoZW4gZHJhZ2dpbmdcbnByb3RvLm9uY2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggdGhpcy5pc1ByZXZlbnRpbmdDbGlja3MgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gc3RhdGljQ2xpY2sgLS0tLS0gLy9cblxuLy8gdHJpZ2dlcmVkIGFmdGVyIHBvaW50ZXIgZG93biAmIHVwIHdpdGggbm8vdGlueSBtb3ZlbWVudFxucHJvdG8uX3N0YXRpY0NsaWNrID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBpZ25vcmUgZW11bGF0ZWQgbW91c2UgdXAgY2xpY2tzXG4gIGlmICggdGhpcy5pc0lnbm9yaW5nTW91c2VVcCAmJiBldmVudC50eXBlID09ICdtb3VzZXVwJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN0YXRpY0NsaWNrKCBldmVudCwgcG9pbnRlciApO1xuXG4gIC8vIHNldCBmbGFnIGZvciBlbXVsYXRlZCBjbGlja3MgMzAwbXMgYWZ0ZXIgdG91Y2hlbmRcbiAgaWYgKCBldmVudC50eXBlICE9ICdtb3VzZXVwJyApIHtcbiAgICB0aGlzLmlzSWdub3JpbmdNb3VzZVVwID0gdHJ1ZTtcbiAgICAvLyByZXNldCBmbGFnIGFmdGVyIDMwMG1zXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBkZWxldGUgdGhpcy5pc0lnbm9yaW5nTW91c2VVcDtcbiAgICB9LmJpbmQoIHRoaXMgKSwgNDAwICk7XG4gIH1cbn07XG5cbnByb3RvLnN0YXRpY0NsaWNrID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3N0YXRpY0NsaWNrJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyAtLS0tLSB1dGlscyAtLS0tLSAvL1xuXG5VbmlkcmFnZ2VyLmdldFBvaW50ZXJQb2ludCA9IFVuaXBvaW50ZXIuZ2V0UG9pbnRlclBvaW50O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIFVuaWRyYWdnZXI7XG5cbn0pKTtcbiIsIi8qIVxuICogVW5pcG9pbnRlciB2Mi4zLjBcbiAqIGJhc2UgY2xhc3MgZm9yIGRvaW5nIG9uZSB0aGluZyB3aXRoIHBvaW50ZXIgZXZlbnRcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJ1xuICAgIF0sIGZ1bmN0aW9uKCBFdkVtaXR0ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuVW5pcG9pbnRlciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBVbmlwb2ludGVyKCkge31cblxuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnZhciBwcm90byA9IFVuaXBvaW50ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5wcm90by5iaW5kU3RhcnRFdmVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB0aGlzLl9iaW5kU3RhcnRFdmVudCggZWxlbSwgdHJ1ZSApO1xufTtcblxucHJvdG8udW5iaW5kU3RhcnRFdmVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB0aGlzLl9iaW5kU3RhcnRFdmVudCggZWxlbSwgZmFsc2UgKTtcbn07XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBzdGFydCBldmVudFxuICogQHBhcmFtIHtCb29sZWFufSBpc0FkZCAtIHJlbW92ZSBpZiBmYWxzZXlcbiAqL1xucHJvdG8uX2JpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIGlzQWRkICkge1xuICAvLyBtdW5nZSBpc0FkZCwgZGVmYXVsdCB0byB0cnVlXG4gIGlzQWRkID0gaXNBZGQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpc0FkZDtcbiAgdmFyIGJpbmRNZXRob2QgPSBpc0FkZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblxuICAvLyBkZWZhdWx0IHRvIG1vdXNlIGV2ZW50c1xuICB2YXIgc3RhcnRFdmVudCA9ICdtb3VzZWRvd24nO1xuICBpZiAoIHdpbmRvdy5Qb2ludGVyRXZlbnQgKSB7XG4gICAgLy8gUG9pbnRlciBFdmVudHNcbiAgICBzdGFydEV2ZW50ID0gJ3BvaW50ZXJkb3duJztcbiAgfSBlbHNlIGlmICggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkge1xuICAgIC8vIFRvdWNoIEV2ZW50cy4gaU9TIFNhZmFyaVxuICAgIHN0YXJ0RXZlbnQgPSAndG91Y2hzdGFydCc7XG4gIH1cbiAgZWxlbVsgYmluZE1ldGhvZCBdKCBzdGFydEV2ZW50LCB0aGlzICk7XG59O1xuXG4vLyB0cmlnZ2VyIGhhbmRsZXIgbWV0aG9kcyBmb3IgZXZlbnRzXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyByZXR1cm5zIHRoZSB0b3VjaCB0aGF0IHdlJ3JlIGtlZXBpbmcgdHJhY2sgb2ZcbnByb3RvLmdldFRvdWNoID0gZnVuY3Rpb24oIHRvdWNoZXMgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgaWYgKCB0b3VjaC5pZGVudGlmaWVyID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBzdGFydCBldmVudCAtLS0tLSAvL1xuXG5wcm90by5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzbWlzcyBjbGlja3MgZnJvbSByaWdodCBvciBtaWRkbGUgYnV0dG9uc1xuICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICBpZiAoIGJ1dHRvbiAmJiAoIGJ1dHRvbiAhPT0gMCAmJiBidXR0b24gIT09IDEgKSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fcG9pbnRlckRvd24oIGV2ZW50LCBldmVudCApO1xufTtcblxucHJvdG8ub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJkb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgc3RhcnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLl9wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gZGlzbWlzcyByaWdodCBjbGljayBhbmQgb3RoZXIgcG9pbnRlcnNcbiAgLy8gYnV0dG9uID0gMCBpcyBva2F5LCAxLTQgbm90XG4gIGlmICggZXZlbnQuYnV0dG9uIHx8IHRoaXMuaXNQb2ludGVyRG93biApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmlzUG9pbnRlckRvd24gPSB0cnVlO1xuICAvLyBzYXZlIHBvaW50ZXIgaWRlbnRpZmllciB0byBtYXRjaCB1cCB0b3VjaCBldmVudHNcbiAgdGhpcy5wb2ludGVySWRlbnRpZmllciA9IHBvaW50ZXIucG9pbnRlcklkICE9PSB1bmRlZmluZWQgP1xuICAgIC8vIHBvaW50ZXJJZCBmb3IgcG9pbnRlciBldmVudHMsIHRvdWNoLmluZGVudGlmaWVyIGZvciB0b3VjaCBldmVudHNcbiAgICBwb2ludGVyLnBvaW50ZXJJZCA6IHBvaW50ZXIuaWRlbnRpZmllcjtcblxuICB0aGlzLnBvaW50ZXJEb3duKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGhhc2ggb2YgZXZlbnRzIHRvIGJlIGJvdW5kIGFmdGVyIHN0YXJ0IGV2ZW50XG52YXIgcG9zdFN0YXJ0RXZlbnRzID0ge1xuICBtb3VzZWRvd246IFsgJ21vdXNlbW92ZScsICdtb3VzZXVwJyBdLFxuICB0b3VjaHN0YXJ0OiBbICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnIF0sXG4gIHBvaW50ZXJkb3duOiBbICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmNhbmNlbCcgXSxcbn07XG5cbnByb3RvLl9iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoICFldmVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IHByb3BlciBldmVudHMgdG8gbWF0Y2ggc3RhcnQgZXZlbnRcbiAgdmFyIGV2ZW50cyA9IHBvc3RTdGFydEV2ZW50c1sgZXZlbnQudHlwZSBdO1xuICAvLyBiaW5kIGV2ZW50cyB0byBub2RlXG4gIGV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuICAvLyBzYXZlIHRoZXNlIGFyZ3VtZW50c1xuICB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgPSBldmVudHM7XG59O1xuXG5wcm90by5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGZvciBfYm91bmRFdmVudHMsIGluIGNhc2UgZHJhZ0VuZCB0cmlnZ2VyZWQgdHdpY2UgKG9sZCBJRTggYnVnKVxuICBpZiAoICF0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuXG4gIGRlbGV0ZSB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHM7XG59O1xuXG4vLyAtLS0tLSBtb3ZlIGV2ZW50IC0tLS0tIC8vXG5cbnByb3RvLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyTW92ZSggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJNb3ZlKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaG1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmUoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgbW92ZVxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5wb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlck1vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlck1vdmUnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVuZCBldmVudCAtLS0tLSAvL1xuXG5cbnByb3RvLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcnVwID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJVcCggZXZlbnQsIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLm9udG91Y2hlbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgdG91Y2ggKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgdGhpcy5wb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBwdWJsaWNcbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyVXAnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIHBvaW50ZXIgZG9uZSAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyZWQgb24gcG9pbnRlciB1cCAmIHBvaW50ZXIgY2FuY2VsXG5wcm90by5fcG9pbnRlckRvbmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcG9pbnRlclJlc2V0KCk7XG4gIHRoaXMuX3VuYmluZFBvc3RTdGFydEV2ZW50cygpO1xuICB0aGlzLnBvaW50ZXJEb25lKCk7XG59O1xuXG5wcm90by5fcG9pbnRlclJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlc2V0IHByb3BlcnRpZXNcbiAgdGhpcy5pc1BvaW50ZXJEb3duID0gZmFsc2U7XG4gIGRlbGV0ZSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyO1xufTtcblxucHJvdG8ucG9pbnRlckRvbmUgPSBub29wO1xuXG4vLyAtLS0tLSBwb2ludGVyIGNhbmNlbCAtLS0tLSAvL1xuXG5wcm90by5vbnBvaW50ZXJjYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlckNhbmNlbCggZXZlbnQsIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLm9udG91Y2hjYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlckNhbmNlbCggZXZlbnQsIHRvdWNoICk7XG4gIH1cbn07XG5cbi8qKlxuICogcG9pbnRlciBjYW5jZWxcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fcG9pbnRlckNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgdGhpcy5wb2ludGVyQ2FuY2VsKCBldmVudCwgcG9pbnRlciApO1xufTtcblxuLy8gcHVibGljXG5wcm90by5wb2ludGVyQ2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJDYW5jZWwnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBnZXR0aW5nIHgveSBjb29yZHMgZnJvbSBldmVudFxuVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQgPSBmdW5jdGlvbiggcG9pbnRlciApIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBwb2ludGVyLnBhZ2VYLFxuICAgIHk6IHBvaW50ZXIucGFnZVlcbiAgfTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gVW5pcG9pbnRlcjtcblxufSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgaG9tZVBhcmFsbGF4LCBob21lUGFyYWxsYXhFbmcgfSBmcm9tICcuL3BhcmFsbGF4JztcbmltcG9ydCBsYXp5TG9hZCBmcm9tICcuL2xhenlMb2FkJztcbmltcG9ydCBzbGlkZXJzIGZyb20gJy4vc2xpZGVycyc7XG5pbXBvcnQgbWVudVRvZ2dsZXIgZnJvbSAnLi9tZW51VG9nZ2xlcic7XG5pbXBvcnQgbWVudUJyaWdodGVuIGZyb20gJy4vbWVudUJyaWdodGVuJztcblxuY29uc3QgcGFnZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuY29uc3QgaXNIb21lID0gKHBhZ2VVcmwgPT0gJy9kZS8nIHx8IHBhZ2VVcmwgPT0gJy9lbi8nKSA/IHRydWUgOiBmYWxzZTtcbmNvbnN0IGlzSG9tZUVuID0gKHBhZ2VVcmwgPT0gJy9lbi8nKSA/IHRydWUgOiBmYWxzZTtcbmNvbnN0IGlzTGVpc3R1bmdlbiA9IChwYWdlVXJsID09ICcvbGVpc3R1bmdlbi8nIHx8IHBhZ2VVcmwgPT0gJy9lbi9zZXJ2aWNlcy8nKSA/IHRydWUgOiBmYWxzZTtcbmNvbnN0IGlzS29udGFrdCA9IChwYWdlVXJsID09ICcva29udGFrdC8nIHx8IHBhZ2VVcmwgPT0gJy9lbi9jb250YWN0LycpID8gdHJ1ZSA6IGZhbHNlO1xuY29uc3QgaXNJbXByZXNzdW0gPSAocGFnZVVybCA9PSAnL2ltcHJlc3N1bS8nIHx8IHBhZ2VVcmwgPT0gJy9lbi9pbXByaW50LycpID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBHRU5FUkFMIElOSVRcblxubGF6eUxvYWQoKTtcbnNsaWRlcnMoKTtcbm1lbnVUb2dnbGVyKCk7XG5tZW51QnJpZ2h0ZW4oKTtcblxuLy8gUEFHRV9TUEVTSUZJQyBJTklUXG5cbmlmIChpc0hvbWUpIHtcblx0aG9tZVBhcmFsbGF4KCk7XG59XG5pZiAoaXNIb21lRW4pIHtcblx0aG9tZVBhcmFsbGF4RW5nKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0XHRsZXQgbGF6eUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenlMb2FkJyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5SXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBpbWdVcmwgPSBsYXp5SXRlbXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XG5cdFx0XHRsYXp5SXRlbXNbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWdVcmx9JylgXG5cdFx0fVxuXHR9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gNjApIHtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudVdoaXRlJylcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDw9IDYwKSB7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVXaGl0ZScpXG5cdFx0fVxuXHR9KVxufSIsImNvbnN0IG1lbnVDbGFzc0RlbCA9IChuYXYsIG1lbnUsIG1lbnVDb2xvckNsYXNzKSA9PiB7XG5cdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdyZXZlYWwnKTtcblx0bmF2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdHdpbmRvdy5zY3JvbGxZID4gNjAgJiZcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZChtZW51Q29sb3JDbGFzcyk7XG5cdH0sIDM1MCk7XG59XG5cbmNvbnN0IG1lbnVDbGFzc0FkZCA9IChuYXYsIG1lbnUsIG1lbnVDb2xvckNsYXNzKSA9PiB7XG5cdG5hdi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdG5hdi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblx0d2luZG93LnNjcm9sbFkgPCA2MCAmJlxuXHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShtZW51Q29sb3JDbGFzcyk7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCdyZXZlYWwnKTtcblx0fSwgMzUwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCB0b2dnbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZXInKTtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcblx0dG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKTtcblx0XHRpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG5cdFx0XHRtZW51Q2xhc3NEZWwobmF2LCBtZW51LCAnbWVudVdoaXRlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUNsYXNzQWRkKG5hdiwgbWVudSwgJ21lbnVXaGl0ZScpXG5cdFx0fVxuXHR9KVxufSIsImltcG9ydCBQYXJhbGxheCBmcm9tICdwYXJhbGxheC1qcydcblxuZXhwb3J0IGNvbnN0IGhvbWVQYXJhbGxheCA9ICgpID0+IHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheF9fd3JhcHBlcicpICE9IG51bGwpIHtcblx0XHRjb25zdCBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheF9fd3JhcHBlcicpO1xuXHRcdGxldCBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgaG9tZVBhcmFsbGF4RW5nID0gKCkgPT4ge1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4X193cmFwcGVyLS1tb3VudGFpbnMnKSAhPSBudWxsKSB7XG5cdFx0Y29uc3Qgc2NlbmVNb3VudGFpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXhfX3dyYXBwZXItLW1vdW50YWlucycpO1xuXHRcdGxldCBwYXJhbGxheEluc3RhbmNlTW91bnRhaW5zID0gbmV3IFBhcmFsbGF4KHNjZW5lTW91bnRhaW5zKTtcblx0fVxufSIsImltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dHVzX19xdW90ZS0td3JhcHBlcicpICE9IG51bGwpIHtcblx0XHRsZXQgc2xpZGVyID0gbmV3IEZsaWNraXR5KCcuYWJvdXR1c19fcXVvdGUtLXdyYXBwZXInLCB7XG5cdFx0XHRjZWxsQWxpZ246ICdjZW50ZXInLFxuXHRcdFx0Y29udGFpbjogdHJ1ZSxcblx0XHRcdHdyYXBBcm91bmQ6IHRydWUsXG5cdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuXHRcdFx0YXV0b1BsYXk6IDYwMDBcblx0XHR9KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=