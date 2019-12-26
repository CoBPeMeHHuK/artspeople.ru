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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/backend/editor.js":
/*!****************************************!*\
  !*** ./resources/js/backend/editor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! bootstrap3-wysihtml5-bower 2014-09-26 */
var wysihtml5, Base, Handlebars;
Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get && !function () {
  var a = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
  Object.defineProperty(Element.prototype, "textContent", {
    get: function get() {
      return a.get.call(this);
    },
    set: function set(b) {
      return a.set.call(this, b);
    }
  });
}(), Array.isArray || (Array.isArray = function (a) {
  return "[object Array]" === Object.prototype.toString.call(a);
}), wysihtml5 = {
  version: "0.4.15",
  commands: {},
  dom: {},
  quirks: {},
  toolbar: {},
  lang: {},
  selection: {},
  views: {},
  INVISIBLE_SPACE: "﻿",
  EMPTY_FUNCTION: function EMPTY_FUNCTION() {},
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  BACKSPACE_KEY: 8,
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SPACE_KEY: 32,
  DELETE_KEY: 46
}, function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function () {
  function a(a, b) {
    var c = _typeof(a[b]);

    return c == x || !(c != w || !a[b]) || "unknown" == c;
  }

  function b(a, b) {
    return !(_typeof(a[b]) != w || !a[b]);
  }

  function c(a, b) {
    return _typeof(a[b]) != y;
  }

  function d(a) {
    return function (b, c) {
      for (var d = c.length; d--;) {
        if (!a(b, c[d])) return !1;
      }

      return !0;
    };
  }

  function e(a) {
    return a && D(a, C) && F(a, B);
  }

  function f(a) {
    return b(a, "body") ? a.body : a.getElementsByTagName("body")[0];
  }

  function g(c) {
    b(window, "console") && a(window.console, "log") && window.console.log(c);
  }

  function h(a, b) {
    b ? window.alert(a) : g(a);
  }

  function i(a) {
    H.initialized = !0, H.supported = !1, h("Rangy is not supported on this page in your browser. Reason: " + a, H.config.alertOnFail);
  }

  function j(a) {
    h("Rangy warning: " + a, H.config.alertOnWarn);
  }

  function k(a) {
    return a.message || a.description || a + "";
  }

  function l() {
    var b, c, d, h, j, l, m, o, p;

    if (!H.initialized) {
      if (c = !1, d = !1, a(document, "createRange") && (b = document.createRange(), D(b, A) && F(b, z) && (c = !0)), h = f(document), !h || "body" != h.nodeName.toLowerCase()) return i("No body element found"), void 0;
      if (h && a(h, "createTextRange") && (b = h.createTextRange(), e(b) && (d = !0)), !c && !d) return i("Neither Range nor TextRange are available"), void 0;
      H.initialized = !0, H.features = {
        implementsDomRange: c,
        implementsTextRange: d
      };

      for (m in G) {
        (j = G[m]) instanceof n && j.init(j, H);
      }

      for (o = 0, p = s.length; p > o; ++o) {
        try {
          s[o](H);
        } catch (q) {
          l = "Rangy init listener threw an exception. Continuing. Detail: " + k(q), g(l);
        }
      }
    }
  }

  function m(a) {
    a = a || window, l();

    for (var b = 0, c = t.length; c > b; ++b) {
      t[b](a);
    }
  }

  function n(a, b, c) {
    this.name = a, this.dependencies = b, this.initialized = !1, this.supported = !1, this.initializer = c;
  }

  function o(a, b, c, d) {
    var e = new n(b, c, function (a) {
      if (!a.initialized) {
        a.initialized = !0;

        try {
          d(H, a), a.supported = !0;
        } catch (c) {
          var e = "Module '" + b + "' failed to load: " + k(c);
          g(e);
        }
      }
    });
    G[b] = e;
  }

  function p() {}

  function q() {}

  var r,
      s,
      t,
      u,
      v,
      w = "object",
      x = "function",
      y = "undefined",
      z = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
      A = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore", "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents", "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"],
      B = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"],
      C = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select", "setEndPoint", "getBoundingClientRect"],
      D = d(a),
      E = d(b),
      F = d(c),
      G = {},
      H = {
    version: "1.3alpha.20140804",
    initialized: !1,
    supported: !0,
    util: {
      isHostMethod: a,
      isHostObject: b,
      isHostProperty: c,
      areHostMethods: D,
      areHostObjects: E,
      areHostProperties: F,
      isTextRange: e,
      getBody: f
    },
    features: {},
    modules: G,
    config: {
      alertOnFail: !0,
      alertOnWarn: !1,
      preferTextRange: !1,
      autoInitialize: (typeof rangyAutoInitialize === "undefined" ? "undefined" : _typeof(rangyAutoInitialize)) == y ? !0 : rangyAutoInitialize
    }
  };
  return H.fail = i, H.warn = j, {}.hasOwnProperty ? H.util.extend = function (a, b, c) {
    var d, e, f;

    for (f in b) {
      b.hasOwnProperty(f) && (d = a[f], e = b[f], c && null !== d && "object" == _typeof(d) && null !== e && "object" == _typeof(e) && H.util.extend(d, e, !0), a[f] = e);
    }

    return b.hasOwnProperty("toString") && (a.toString = b.toString), a;
  } : i("hasOwnProperty not supported"), function () {
    var a,
        b,
        c = document.createElement("div");
    c.appendChild(document.createElement("span")), a = [].slice;

    try {
      1 == a.call(c.childNodes, 0)[0].nodeType && (b = function b(_b) {
        return a.call(_b, 0);
      });
    } catch (d) {}

    b || (b = function b(a) {
      var b,
          c,
          d = [];

      for (b = 0, c = a.length; c > b; ++b) {
        d[b] = a[b];
      }

      return d;
    }), H.util.toArray = b;
  }(), a(document, "addEventListener") ? r = function r(a, b, c) {
    a.addEventListener(b, c, !1);
  } : a(document, "attachEvent") ? r = function r(a, b, c) {
    a.attachEvent("on" + b, c);
  } : i("Document does not have required addEventListener or attachEvent method"), H.util.addListener = r, s = [], H.init = l, H.addInitListener = function (a) {
    H.initialized ? a(H) : s.push(a);
  }, t = [], H.addShimListener = function (a) {
    t.push(a);
  }, H.shim = H.createMissingNativeApi = m, n.prototype = {
    init: function init() {
      var a,
          b,
          c,
          d,
          e = this.dependencies || [];

      for (a = 0, b = e.length; b > a; ++a) {
        if (d = e[a], c = G[d], !(c && c instanceof n)) throw Error("required module '" + d + "' not found");
        if (c.init(), !c.supported) throw Error("required module '" + d + "' not supported");
      }

      this.initializer(this);
    },
    fail: function fail(a) {
      throw this.initialized = !0, this.supported = !1, Error("Module '" + this.name + "' failed to load: " + a);
    },
    warn: function warn(a) {
      H.warn("Module " + this.name + ": " + a);
    },
    deprecationNotice: function deprecationNotice(a, b) {
      H.warn("DEPRECATED: " + a + " in module " + this.name + "is deprecated. Please use " + b + " instead");
    },
    createError: function createError(a) {
      return Error("Error in Rangy " + this.name + " module: " + a);
    }
  }, H.createModule = function (a) {
    var b, c, d;
    2 == arguments.length ? (b = arguments[1], c = []) : (b = arguments[2], c = arguments[1]), d = o(!1, a, c, b), H.initialized && d.init();
  }, H.createCoreModule = function (a, b, c) {
    o(!0, a, b, c);
  }, H.RangePrototype = p, H.rangePrototype = new p(), H.selectionPrototype = new q(), u = !1, v = function v() {
    u || (u = !0, !H.initialized && H.config.autoInitialize && l());
  }, (typeof window === "undefined" ? "undefined" : _typeof(window)) == y ? (i("No window found"), void 0) : (typeof document === "undefined" ? "undefined" : _typeof(document)) == y ? (i("No document found"), void 0) : (a(document, "addEventListener") && document.addEventListener("DOMContentLoaded", v, !1), r(window, "load", v), H.createCoreModule("DomUtil", [], function (a, b) {
    function c(a) {
      var b;
      return _typeof(a.namespaceURI) == I || null === (b = a.namespaceURI) || "http://www.w3.org/1999/xhtml" == b;
    }

    function d(a) {
      var b = a.parentNode;
      return 1 == b.nodeType ? b : null;
    }

    function e(a) {
      for (var b = 0; a = a.previousSibling;) {
        ++b;
      }

      return b;
    }

    function f(a) {
      switch (a.nodeType) {
        case 7:
        case 10:
          return 0;

        case 3:
        case 8:
          return a.length;

        default:
          return a.childNodes.length;
      }
    }

    function g(a, b) {
      var c,
          d = [];

      for (c = a; c; c = c.parentNode) {
        d.push(c);
      }

      for (c = b; c; c = c.parentNode) {
        if (F(d, c)) return c;
      }

      return null;
    }

    function h(a, b, c) {
      for (var d = c ? b : b.parentNode; d;) {
        if (d === a) return !0;
        d = d.parentNode;
      }

      return !1;
    }

    function i(a, b) {
      return h(a, b, !0);
    }

    function j(a, b, c) {
      for (var d, e = c ? a : a.parentNode; e;) {
        if (d = e.parentNode, d === b) return e;
        e = d;
      }

      return null;
    }

    function k(a) {
      var b = a.nodeType;
      return 3 == b || 4 == b || 8 == b;
    }

    function l(a) {
      if (!a) return !1;
      var b = a.nodeType;
      return 3 == b || 8 == b;
    }

    function m(a, b) {
      var c = b.nextSibling,
          d = b.parentNode;
      return c ? d.insertBefore(a, c) : d.appendChild(a), a;
    }

    function n(a, b, c) {
      var d,
          f,
          g = a.cloneNode(!1);
      if (g.deleteData(0, b), a.deleteData(b, a.length - b), m(g, a), c) for (d = 0; f = c[d++];) {
        f.node == a && f.offset > b ? (f.node = g, f.offset -= b) : f.node == a.parentNode && f.offset > e(a) && ++f.offset;
      }
      return g;
    }

    function o(a) {
      if (9 == a.nodeType) return a;
      if (_typeof(a.ownerDocument) != I) return a.ownerDocument;
      if (_typeof(a.document) != I) return a.document;
      if (a.parentNode) return o(a.parentNode);
      throw b.createError("getDocument: no document found for node");
    }

    function p(a) {
      var c = o(a);
      if (_typeof(c.defaultView) != I) return c.defaultView;
      if (_typeof(c.parentWindow) != I) return c.parentWindow;
      throw b.createError("Cannot get a window object for node");
    }

    function q(a) {
      if (_typeof(a.contentDocument) != I) return a.contentDocument;
      if (_typeof(a.contentWindow) != I) return a.contentWindow.document;
      throw b.createError("getIframeDocument: No Document object found for iframe element");
    }

    function r(a) {
      if (_typeof(a.contentWindow) != I) return a.contentWindow;
      if (_typeof(a.contentDocument) != I) return a.contentDocument.defaultView;
      throw b.createError("getIframeWindow: No Window object found for iframe element");
    }

    function s(a) {
      return a && J.isHostMethod(a, "setTimeout") && J.isHostObject(a, "document");
    }

    function t(a, b, c) {
      var d;
      if (a ? J.isHostProperty(a, "nodeType") ? d = 1 == a.nodeType && "iframe" == a.tagName.toLowerCase() ? q(a) : o(a) : s(a) && (d = a.document) : d = document, !d) throw b.createError(c + "(): Parameter must be a Window object or DOM node");
      return d;
    }

    function u(a) {
      for (var b; b = a.parentNode;) {
        a = b;
      }

      return a;
    }

    function v(a, c, d, f) {
      var h, i, k, l, m;
      if (a == d) return c === f ? 0 : f > c ? -1 : 1;
      if (h = j(d, a, !0)) return c <= e(h) ? -1 : 1;
      if (h = j(a, d, !0)) return e(h) < f ? -1 : 1;
      if (i = g(a, d), !i) throw Error("comparePoints error: nodes have no common ancestor");
      if (k = a === i ? i : j(a, i, !0), l = d === i ? i : j(d, i, !0), k === l) throw b.createError("comparePoints got to case 4 and childA and childB are the same!");

      for (m = i.firstChild; m;) {
        if (m === k) return -1;
        if (m === l) return 1;
        m = m.nextSibling;
      }
    }

    function w(a) {
      var b;

      try {
        return b = a.parentNode, !1;
      } catch (c) {
        return !0;
      }
    }

    function x(a) {
      if (!a) return "[No node]";
      if (G && w(a)) return "[Broken node]";
      if (k(a)) return '"' + a.data + '"';

      if (1 == a.nodeType) {
        var b = a.id ? ' id="' + a.id + '"' : "";
        return "<" + a.nodeName + b + ">[index:" + e(a) + ",length:" + a.childNodes.length + "][" + (a.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
      }

      return a.nodeName;
    }

    function y(a) {
      for (var b, c = o(a).createDocumentFragment(); b = a.firstChild;) {
        c.appendChild(b);
      }

      return c;
    }

    function z(a) {
      this.root = a, this._next = a;
    }

    function A(a) {
      return new z(a);
    }

    function B(a, b) {
      this.node = a, this.offset = b;
    }

    function C(a) {
      this.code = this[a], this.codeName = a, this.message = "DOMException: " + this.codeName;
    }

    var D,
        E,
        F,
        G,
        H,
        I = "undefined",
        J = a.util;
    J.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || b.fail("document missing a Node creation method"), J.isHostMethod(document, "getElementsByTagName") || b.fail("document missing getElementsByTagName method"), D = document.createElement("div"), J.areHostMethods(D, ["insertBefore", "appendChild", "cloneNode"] || false) || b.fail("Incomplete Element implementation"), J.isHostProperty(D, "innerHTML") || b.fail("Element is missing innerHTML property"), E = document.createTextNode("test"), J.areHostMethods(E, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] || false || false) || b.fail("Incomplete Text Node implementation"), F = function F(a, b) {
      for (var c = a.length; c--;) {
        if (a[c] === b) return !0;
      }

      return !1;
    }, G = !1, function () {
      var b,
          c = document.createElement("b");
      c.innerHTML = "1", b = c.firstChild, c.innerHTML = "<br>", G = w(b), a.features.crashyTextNodes = G;
    }(), _typeof(window.getComputedStyle) != I ? H = function H(a, b) {
      return p(a).getComputedStyle(a, null)[b];
    } : _typeof(document.documentElement.currentStyle) != I ? H = function H(a, b) {
      return a.currentStyle[b];
    } : b.fail("No means of obtaining computed style properties found"), z.prototype = {
      _current: null,
      hasNext: function hasNext() {
        return !!this._next;
      },
      next: function next() {
        var a,
            b,
            c = this._current = this._next;
        if (this._current) if (a = c.firstChild, a) this._next = a;else {
          for (b = null; c !== this.root && !(b = c.nextSibling);) {
            c = c.parentNode;
          }

          this._next = b;
        }
        return this._current;
      },
      detach: function detach() {
        this._current = this._next = this.root = null;
      }
    }, B.prototype = {
      equals: function equals(a) {
        return !!a && this.node === a.node && this.offset == a.offset;
      },
      inspect: function inspect() {
        return "[DomPosition(" + x(this.node) + ":" + this.offset + ")]";
      },
      toString: function toString() {
        return this.inspect();
      }
    }, C.prototype = {
      INDEX_SIZE_ERR: 1,
      HIERARCHY_REQUEST_ERR: 3,
      WRONG_DOCUMENT_ERR: 4,
      NO_MODIFICATION_ALLOWED_ERR: 7,
      NOT_FOUND_ERR: 8,
      NOT_SUPPORTED_ERR: 9,
      INVALID_STATE_ERR: 11,
      INVALID_NODE_TYPE_ERR: 24
    }, C.prototype.toString = function () {
      return this.message;
    }, a.dom = {
      arrayContains: F,
      isHtmlNamespace: c,
      parentElement: d,
      getNodeIndex: e,
      getNodeLength: f,
      getCommonAncestor: g,
      isAncestorOf: h,
      isOrIsAncestorOf: i,
      getClosestAncestorIn: j,
      isCharacterDataNode: k,
      isTextOrCommentNode: l,
      insertAfter: m,
      splitDataNode: n,
      getDocument: o,
      getWindow: p,
      getIframeWindow: r,
      getIframeDocument: q,
      getBody: J.getBody,
      isWindow: s,
      getContentDocument: t,
      getRootContainer: u,
      comparePoints: v,
      isBrokenNode: w,
      inspectNode: x,
      getComputedStyleProperty: H,
      fragmentFromNodeChildren: y,
      createIterator: A,
      DomPosition: B
    }, a.DOMException = C;
  }), H.createCoreModule("DomRange", ["DomUtil"], function (a) {
    function b(a, b) {
      return 3 != a.nodeType && (gb(a, b.startContainer) || gb(a, b.endContainer));
    }

    function c(a) {
      return a.document || hb(a.startContainer);
    }

    function d(a) {
      return new cb(a.parentNode, fb(a));
    }

    function e(a) {
      return new cb(a.parentNode, fb(a) + 1);
    }

    function f(a, b, c) {
      var d = 11 == a.nodeType ? a.firstChild : a;
      return eb(b) ? c == b.length ? ab.insertAfter(a, b) : b.parentNode.insertBefore(a, 0 == c ? b : jb(b, c)) : c >= b.childNodes.length ? b.appendChild(a) : b.insertBefore(a, b.childNodes[c]), d;
    }

    function g(a, b, d) {
      if (y(a), y(b), c(b) != c(a)) throw new db("WRONG_DOCUMENT_ERR");
      var e = ib(a.startContainer, a.startOffset, b.endContainer, b.endOffset),
          f = ib(a.endContainer, a.endOffset, b.startContainer, b.startOffset);
      return d ? 0 >= e && f >= 0 : 0 > e && f > 0;
    }

    function h(a) {
      var b, d, e, f;

      for (e = c(a.range).createDocumentFragment(); d = a.next();) {
        if (b = a.isPartiallySelectedSubtree(), d = d.cloneNode(!b), b && (f = a.getSubtreeIterator(), d.appendChild(h(f)), f.detach()), 10 == d.nodeType) throw new db("HIERARCHY_REQUEST_ERR");
        e.appendChild(d);
      }

      return e;
    }

    function i(a, b, c) {
      var d, e, f, g;

      for (c = c || {
        stop: !1
      }; f = a.next();) {
        if (a.isPartiallySelectedSubtree()) {
          if (b(f) === !1) return c.stop = !0, void 0;
          if (g = a.getSubtreeIterator(), i(g, b, c), g.detach(), c.stop) return;
        } else for (d = ab.createIterator(f); e = d.next();) {
          if (b(e) === !1) return c.stop = !0, void 0;
        }
      }
    }

    function j(a) {
      for (var b; a.next();) {
        a.isPartiallySelectedSubtree() ? (b = a.getSubtreeIterator(), j(b), b.detach()) : a.remove();
      }
    }

    function k(a) {
      for (var b, d, e = c(a.range).createDocumentFragment(); b = a.next();) {
        if (a.isPartiallySelectedSubtree() ? (b = b.cloneNode(!1), d = a.getSubtreeIterator(), b.appendChild(k(d)), d.detach()) : a.remove(), 10 == b.nodeType) throw new db("HIERARCHY_REQUEST_ERR");
        e.appendChild(b);
      }

      return e;
    }

    function l(a, b, c) {
      var d,
          e,
          f = !(!b || !b.length),
          g = !!c;
      return f && (d = RegExp("^(" + b.join("|") + ")$")), e = [], i(new n(a, !1), function (b) {
        var h, i;
        (!f || d.test(b.nodeType)) && (!g || c(b)) && (h = a.startContainer, b == h && eb(h) && a.startOffset == h.length || (i = a.endContainer, b == i && eb(i) && 0 == a.endOffset || e.push(b)));
      }), e;
    }

    function m(a) {
      var b = void 0 === a.getName ? "Range" : a.getName();
      return "[" + b + "(" + ab.inspectNode(a.startContainer) + ":" + a.startOffset + ", " + ab.inspectNode(a.endContainer) + ":" + a.endOffset + ")]";
    }

    function n(a, b) {
      if (this.range = a, this.clonePartiallySelectedTextNodes = b, !a.collapsed) {
        this.sc = a.startContainer, this.so = a.startOffset, this.ec = a.endContainer, this.eo = a.endOffset;
        var c = a.commonAncestorContainer;
        this.sc === this.ec && eb(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc !== c || eb(this.sc) ? kb(this.sc, c, !0) : this.sc.childNodes[this.so], this._last = this.ec !== c || eb(this.ec) ? kb(this.ec, c, !0) : this.ec.childNodes[this.eo - 1]);
      }
    }

    function o(a) {
      return function (b, c) {
        for (var d, e = c ? b : b.parentNode; e;) {
          if (d = e.nodeType, mb(a, d)) return e;
          e = e.parentNode;
        }

        return null;
      };
    }

    function p(a, b) {
      if (P(a, b)) throw new db("INVALID_NODE_TYPE_ERR");
    }

    function q(a, b) {
      if (!mb(b, a.nodeType)) throw new db("INVALID_NODE_TYPE_ERR");
    }

    function r(a, b) {
      if (0 > b || b > (eb(a) ? a.length : a.childNodes.length)) throw new db("INDEX_SIZE_ERR");
    }

    function s(a, b) {
      if (N(a, !0) !== N(b, !0)) throw new db("WRONG_DOCUMENT_ERR");
    }

    function t(a) {
      if (O(a, !0)) throw new db("NO_MODIFICATION_ALLOWED_ERR");
    }

    function u(a, b) {
      if (!a) throw new db(b);
    }

    function v(a) {
      return ob && ab.isBrokenNode(a) || !mb(J, a.nodeType) && !N(a, !0);
    }

    function w(a, b) {
      return b <= (eb(a) ? a.length : a.childNodes.length);
    }

    function x(a) {
      return !!a.startContainer && !!a.endContainer && !v(a.startContainer) && !v(a.endContainer) && w(a.startContainer, a.startOffset) && w(a.endContainer, a.endOffset);
    }

    function y(a) {
      if (!x(a)) throw Error("Range error: Range is no longer valid after DOM mutation (" + a.inspect() + ")");
    }

    function z(a, b) {
      var c, d, e, f, g;
      y(a), c = a.startContainer, d = a.startOffset, e = a.endContainer, f = a.endOffset, g = c === e, eb(e) && f > 0 && f < e.length && jb(e, f, b), eb(c) && d > 0 && d < c.length && (c = jb(c, d, b), g ? (f -= d, e = c) : e == c.parentNode && f >= fb(c) && f++, d = 0), a.setStartAndEnd(c, d, e, f);
    }

    function A(a) {
      y(a);
      var b = a.commonAncestorContainer.parentNode.cloneNode(!1);
      return b.appendChild(a.cloneContents()), b.innerHTML;
    }

    function B(a) {
      a.START_TO_START = U, a.START_TO_END = V, a.END_TO_END = W, a.END_TO_START = X, a.NODE_BEFORE = Y, a.NODE_AFTER = Z, a.NODE_BEFORE_AND_AFTER = $, a.NODE_INSIDE = _;
    }

    function C(a) {
      B(a), B(a.prototype);
    }

    function D(a, b) {
      return function () {
        var c, d, f, g, h, j, k;
        return y(this), c = this.startContainer, d = this.startOffset, f = this.commonAncestorContainer, g = new n(this, !0), c !== f && (h = kb(c, f, !0), j = e(h), c = j.node, d = j.offset), i(g, t), g.reset(), k = a(g), g.detach(), b(this, c, d, c, d), k;
      };
    }

    function E(c, f) {
      function g(a, b) {
        return function (c) {
          q(c, I), q(nb(c), J);
          var f = (a ? d : e)(c);
          (b ? h : i)(this, f.node, f.offset);
        };
      }

      function h(a, b, c) {
        var d = a.endContainer,
            e = a.endOffset;
        (b !== a.startContainer || c !== a.startOffset) && ((nb(b) != nb(d) || 1 == ib(b, c, d, e)) && (d = b, e = c), f(a, b, c, d, e));
      }

      function i(a, b, c) {
        var d = a.startContainer,
            e = a.startOffset;
        (b !== a.endContainer || c !== a.endOffset) && ((nb(b) != nb(d) || -1 == ib(b, c, d, e)) && (d = b, e = c), f(a, d, e, b, c));
      }

      var l = function l() {};

      l.prototype = a.rangePrototype, c.prototype = new l(), bb.extend(c.prototype, {
        setStart: function setStart(a, b) {
          p(a, !0), r(a, b), h(this, a, b);
        },
        setEnd: function setEnd(a, b) {
          p(a, !0), r(a, b), i(this, a, b);
        },
        setStartAndEnd: function setStartAndEnd() {
          var a = arguments,
              b = a[0],
              c = a[1],
              d = b,
              e = c;

          switch (a.length) {
            case 3:
              e = a[2];
              break;

            case 4:
              d = a[2], e = a[3];
          }

          f(this, b, c, d, e);
        },
        setBoundary: function setBoundary(a, b, c) {
          this["set" + (c ? "Start" : "End")](a, b);
        },
        setStartBefore: g(!0, !0),
        setStartAfter: g(!1, !0),
        setEndBefore: g(!0, !1),
        setEndAfter: g(!1, !1),
        collapse: function collapse(a) {
          y(this), a ? f(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : f(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
        },
        selectNodeContents: function selectNodeContents(a) {
          p(a, !0), f(this, a, 0, a, lb(a));
        },
        selectNode: function selectNode(a) {
          p(a, !1), q(a, I);
          var b = d(a),
              c = e(a);
          f(this, b.node, b.offset, c.node, c.offset);
        },
        extractContents: D(k, f),
        deleteContents: D(j, f),
        canSurroundContents: function canSurroundContents() {
          var a, c;
          return y(this), t(this.startContainer), t(this.endContainer), a = new n(this, !0), c = a._first && b(a._first, this) || a._last && b(a._last, this), a.detach(), !c;
        },
        splitBoundaries: function splitBoundaries() {
          z(this);
        },
        splitBoundariesPreservingPositions: function splitBoundariesPreservingPositions(a) {
          z(this, a);
        },
        normalizeBoundaries: function normalizeBoundaries() {
          var a, b, c, d, e, g, h, i, j;
          y(this), a = this.startContainer, b = this.startOffset, c = this.endContainer, d = this.endOffset, e = function e(a) {
            var b = a.nextSibling;
            b && b.nodeType == a.nodeType && (c = a, d = a.length, a.appendData(b.data), b.parentNode.removeChild(b));
          }, g = function g(e) {
            var f,
                g,
                h = e.previousSibling;
            h && h.nodeType == e.nodeType && (a = e, f = e.length, b = h.length, e.insertData(0, h.data), h.parentNode.removeChild(h), a == c ? (d += b, c = a) : c == e.parentNode && (g = fb(e), d == g ? (c = e, d = f) : d > g && d--));
          }, h = !0, eb(c) ? c.length == d && e(c) : (d > 0 && (i = c.childNodes[d - 1], i && eb(i) && e(i)), h = !this.collapsed), h ? eb(a) ? 0 == b && g(a) : b < a.childNodes.length && (j = a.childNodes[b], j && eb(j) && g(j)) : (a = c, b = d), f(this, a, b, c, d);
        },
        collapseToPoint: function collapseToPoint(a, b) {
          p(a, !0), r(a, b), this.setStartAndEnd(a, b);
        }
      }), C(c);
    }

    function F(a) {
      a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset, a.commonAncestorContainer = a.collapsed ? a.startContainer : ab.getCommonAncestor(a.startContainer, a.endContainer);
    }

    function G(a, b, c, d, e) {
      a.startContainer = b, a.startOffset = c, a.endContainer = d, a.endOffset = e, a.document = ab.getDocument(b), F(a);
    }

    function H(a) {
      this.startContainer = a, this.startOffset = 0, this.endContainer = a, this.endOffset = 0, this.document = a, F(this);
    }

    var I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X,
        Y,
        Z,
        $,
        _,
        ab = a.dom,
        bb = a.util,
        cb = ab.DomPosition,
        db = a.DOMException,
        eb = ab.isCharacterDataNode,
        fb = ab.getNodeIndex,
        gb = ab.isOrIsAncestorOf,
        hb = ab.getDocument,
        ib = ab.comparePoints,
        jb = ab.splitDataNode,
        kb = ab.getClosestAncestorIn,
        lb = ab.getNodeLength,
        mb = ab.arrayContains,
        nb = ab.getRootContainer,
        ob = a.features.crashyTextNodes;

    n.prototype = {
      _current: null,
      _next: null,
      _first: null,
      _last: null,
      isSingleCharacterDataNode: !1,
      reset: function reset() {
        this._current = null, this._next = this._first;
      },
      hasNext: function hasNext() {
        return !!this._next;
      },
      next: function next() {
        var a = this._current = this._next;
        return a && (this._next = a !== this._last ? a.nextSibling : null, eb(a) && this.clonePartiallySelectedTextNodes && (a === this.ec && (a = a.cloneNode(!0)).deleteData(this.eo, a.length - this.eo), this._current === this.sc && (a = a.cloneNode(!0)).deleteData(0, this.so))), a;
      },
      remove: function remove() {
        var a,
            b,
            c = this._current;
        !eb(c) || c !== this.sc && c !== this.ec ? c.parentNode && c.parentNode.removeChild(c) : (a = c === this.sc ? this.so : 0, b = c === this.ec ? this.eo : c.length, a != b && c.deleteData(a, b - a));
      },
      isPartiallySelectedSubtree: function isPartiallySelectedSubtree() {
        var a = this._current;
        return b(a, this.range);
      },
      getSubtreeIterator: function getSubtreeIterator() {
        var a, b, d, e, f, g;
        return this.isSingleCharacterDataNode ? (a = this.range.cloneRange(), a.collapse(!1)) : (a = new H(c(this.range)), b = this._current, d = b, e = 0, f = b, g = lb(b), gb(b, this.sc) && (d = this.sc, e = this.so), gb(b, this.ec) && (f = this.ec, g = this.eo), G(a, d, e, f, g)), new n(a, this.clonePartiallySelectedTextNodes);
      },
      detach: function detach() {
        this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
      }
    }, I = [1, 3, 4, 5, 7, 8, 10], J = [2, 9, 11], K = [5, 6, 10, 12], L = [1, 3, 4, 5, 7, 8, 10, 11], M = [1, 3, 4, 5, 7, 8], N = o([9, 11]), O = o(K), P = o([6, 10, 12]), Q = document.createElement("style"), R = !1;

    try {
      Q.innerHTML = "<b>x</b>", R = 3 == Q.firstChild.nodeType;
    } catch (pb) {}

    a.features.htmlParsingConforms = R, S = R ? function (a) {
      var b,
          c = this.startContainer,
          d = hb(c);
      if (!c) throw new db("INVALID_STATE_ERR");
      return b = null, 1 == c.nodeType ? b = c : eb(c) && (b = ab.parentElement(c)), b = null === b || "HTML" == b.nodeName && ab.isHtmlNamespace(hb(b).documentElement) && ab.isHtmlNamespace(b) ? d.createElement("body") : b.cloneNode(!1), b.innerHTML = a, ab.fragmentFromNodeChildren(b);
    } : function (a) {
      var b = c(this),
          d = b.createElement("body");
      return d.innerHTML = a, ab.fragmentFromNodeChildren(d);
    }, T = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"], U = 0, V = 1, W = 2, X = 3, Y = 0, Z = 1, $ = 2, _ = 3, bb.extend(a.rangePrototype, {
      compareBoundaryPoints: function compareBoundaryPoints(a, b) {
        var c, d, e, f, g, h;
        return y(this), s(this.startContainer, b.startContainer), g = a == X || a == U ? "start" : "end", h = a == V || a == U ? "start" : "end", c = this[g + "Container"], d = this[g + "Offset"], e = b[h + "Container"], f = b[h + "Offset"], ib(c, d, e, f);
      },
      insertNode: function insertNode(a) {
        if (y(this), q(a, L), t(this.startContainer), gb(a, this.startContainer)) throw new db("HIERARCHY_REQUEST_ERR");
        var b = f(a, this.startContainer, this.startOffset);
        this.setStartBefore(b);
      },
      cloneContents: function cloneContents() {
        var a, b, d;
        return y(this), this.collapsed ? c(this).createDocumentFragment() : this.startContainer === this.endContainer && eb(this.startContainer) ? (a = this.startContainer.cloneNode(!0), a.data = a.data.slice(this.startOffset, this.endOffset), b = c(this).createDocumentFragment(), b.appendChild(a), b) : (d = new n(this, !0), a = h(d), d.detach(), a);
      },
      canSurroundContents: function canSurroundContents() {
        var a, c;
        return y(this), t(this.startContainer), t(this.endContainer), a = new n(this, !0), c = a._first && b(a._first, this) || a._last && b(a._last, this), a.detach(), !c;
      },
      surroundContents: function surroundContents(a) {
        if (q(a, M), !this.canSurroundContents()) throw new db("INVALID_STATE_ERR");
        var b = this.extractContents();
        if (a.hasChildNodes()) for (; a.lastChild;) {
          a.removeChild(a.lastChild);
        }
        f(a, this.startContainer, this.startOffset), a.appendChild(b), this.selectNode(a);
      },
      cloneRange: function cloneRange() {
        var a, b, d;

        for (y(this), a = new H(c(this)), b = T.length; b--;) {
          d = T[b], a[d] = this[d];
        }

        return a;
      },
      toString: function toString() {
        var a, b, c;
        return y(this), a = this.startContainer, a === this.endContainer && eb(a) ? 3 == a.nodeType || 4 == a.nodeType ? a.data.slice(this.startOffset, this.endOffset) : "" : (b = [], c = new n(this, !0), i(c, function (a) {
          (3 == a.nodeType || 4 == a.nodeType) && b.push(a.data);
        }), c.detach(), b.join(""));
      },
      compareNode: function compareNode(a) {
        var b, c, d, e;
        if (y(this), b = a.parentNode, c = fb(a), !b) throw new db("NOT_FOUND_ERR");
        return d = this.comparePoint(b, c), e = this.comparePoint(b, c + 1), 0 > d ? e > 0 ? $ : Y : e > 0 ? Z : _;
      },
      comparePoint: function comparePoint(a, b) {
        return y(this), u(a, "HIERARCHY_REQUEST_ERR"), s(a, this.startContainer), ib(a, b, this.startContainer, this.startOffset) < 0 ? -1 : ib(a, b, this.endContainer, this.endOffset) > 0 ? 1 : 0;
      },
      createContextualFragment: S,
      toHtml: function toHtml() {
        return A(this);
      },
      intersectsNode: function intersectsNode(a, b) {
        var d, e, f, g;
        return y(this), u(a, "NOT_FOUND_ERR"), hb(a) !== c(this) ? !1 : (d = a.parentNode, e = fb(a), u(d, "NOT_FOUND_ERR"), f = ib(d, e, this.endContainer, this.endOffset), g = ib(d, e + 1, this.startContainer, this.startOffset), b ? 0 >= f && g >= 0 : 0 > f && g > 0);
      },
      isPointInRange: function isPointInRange(a, b) {
        return y(this), u(a, "HIERARCHY_REQUEST_ERR"), s(a, this.startContainer), ib(a, b, this.startContainer, this.startOffset) >= 0 && ib(a, b, this.endContainer, this.endOffset) <= 0;
      },
      intersectsRange: function intersectsRange(a) {
        return g(this, a, !1);
      },
      intersectsOrTouchesRange: function intersectsOrTouchesRange(a) {
        return g(this, a, !0);
      },
      intersection: function intersection(a) {
        var b, c, d;
        return this.intersectsRange(a) ? (b = ib(this.startContainer, this.startOffset, a.startContainer, a.startOffset), c = ib(this.endContainer, this.endOffset, a.endContainer, a.endOffset), d = this.cloneRange(), -1 == b && d.setStart(a.startContainer, a.startOffset), 1 == c && d.setEnd(a.endContainer, a.endOffset), d) : null;
      },
      union: function union(a) {
        if (this.intersectsOrTouchesRange(a)) {
          var b = this.cloneRange();
          return -1 == ib(a.startContainer, a.startOffset, this.startContainer, this.startOffset) && b.setStart(a.startContainer, a.startOffset), 1 == ib(a.endContainer, a.endOffset, this.endContainer, this.endOffset) && b.setEnd(a.endContainer, a.endOffset), b;
        }

        throw new db("Ranges do not intersect");
      },
      containsNode: function containsNode(a, b) {
        return b ? this.intersectsNode(a, !1) : this.compareNode(a) == _;
      },
      containsNodeContents: function containsNodeContents(a) {
        return this.comparePoint(a, 0) >= 0 && this.comparePoint(a, lb(a)) <= 0;
      },
      containsRange: function containsRange(a) {
        var b = this.intersection(a);
        return null !== b && a.equals(b);
      },
      containsNodeText: function containsNodeText(a) {
        var b,
            c,
            d = this.cloneRange();
        return d.selectNode(a), b = d.getNodes([3]), b.length > 0 ? (d.setStart(b[0], 0), c = b.pop(), d.setEnd(c, c.length), this.containsRange(d)) : this.containsNodeContents(a);
      },
      getNodes: function getNodes(a, b) {
        return y(this), l(this, a, b);
      },
      getDocument: function getDocument() {
        return c(this);
      },
      collapseBefore: function collapseBefore(a) {
        this.setEndBefore(a), this.collapse(!1);
      },
      collapseAfter: function collapseAfter(a) {
        this.setStartAfter(a), this.collapse(!0);
      },
      getBookmark: function getBookmark(b) {
        var d,
            e,
            f,
            g = c(this),
            h = a.createRange(g);
        return b = b || ab.getBody(g), h.selectNodeContents(b), d = this.intersection(h), e = 0, f = 0, d && (h.setEnd(d.startContainer, d.startOffset), e = ("" + h).length, f = e + ("" + d).length), {
          start: e,
          end: f,
          containerNode: b
        };
      },
      moveToBookmark: function moveToBookmark(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = a.containerNode,
            j = 0;

        for (this.setStart(i, 0), this.collapse(!0), b = [i], d = !1, e = !1; !e && (c = b.pop());) {
          if (3 == c.nodeType) f = j + c.length, !d && a.start >= j && a.start <= f && (this.setStart(c, a.start - j), d = !0), d && a.end >= j && a.end <= f && (this.setEnd(c, a.end - j), e = !0), j = f;else for (h = c.childNodes, g = h.length; g--;) {
            b.push(h[g]);
          }
        }
      },
      getName: function getName() {
        return "DomRange";
      },
      equals: function equals(a) {
        return H.rangesEqual(this, a);
      },
      isValid: function isValid() {
        return x(this);
      },
      inspect: function inspect() {
        return m(this);
      },
      detach: function detach() {}
    }), E(H, G), bb.extend(H, {
      rangeProperties: T,
      RangeIterator: n,
      copyComparisonConstants: C,
      createPrototypeRange: E,
      inspect: m,
      toHtml: A,
      getRangeDocument: c,
      rangesEqual: function rangesEqual(a, b) {
        return a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset;
      }
    }), a.DomRange = H;
  }), H.createCoreModule("WrappedRange", ["DomRange"], function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = a.dom,
        l = a.util,
        m = k.DomPosition,
        n = a.DomRange,
        o = k.getBody,
        p = k.getContentDocument,
        q = k.isCharacterDataNode;
    a.features.implementsDomRange && !function () {
      function d(a) {
        for (var b, c = s.length; c--;) {
          b = s[c], a[b] = a.nativeRange[b];
        }

        a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset;
      }

      function e(a, b, c, d, e) {
        var f = a.startContainer !== b || a.startOffset != c,
            g = a.endContainer !== d || a.endOffset != e,
            h = !a.equals(a.nativeRange);
        (f || g || h) && (a.setEnd(d, e), a.setStart(b, c));
      }

      var f,
          g,
          h,
          i,
          j,
          m,
          q,
          r,
          s = n.rangeProperties;
      c = function c(a) {
        if (!a) throw b.createError("WrappedRange: Range must be specified");
        this.nativeRange = a, d(this);
      }, n.createPrototypeRange(c, e), f = c.prototype, f.selectNode = function (a) {
        this.nativeRange.selectNode(a), d(this);
      }, f.cloneContents = function () {
        return this.nativeRange.cloneContents();
      }, f.surroundContents = function (a) {
        this.nativeRange.surroundContents(a), d(this);
      }, f.collapse = function (a) {
        this.nativeRange.collapse(a), d(this);
      }, f.cloneRange = function () {
        return new c(this.nativeRange.cloneRange());
      }, f.refresh = function () {
        d(this);
      }, f.toString = function () {
        return "" + this.nativeRange;
      }, h = document.createTextNode("test"), o(document).appendChild(h), i = document.createRange(), i.setStart(h, 0), i.setEnd(h, 0);

      try {
        i.setStart(h, 1), f.setStart = function (a, b) {
          this.nativeRange.setStart(a, b), d(this);
        }, f.setEnd = function (a, b) {
          this.nativeRange.setEnd(a, b), d(this);
        }, g = function g(a) {
          return function (b) {
            this.nativeRange[a](b), d(this);
          };
        };
      } catch (t) {
        f.setStart = function (a, b) {
          try {
            this.nativeRange.setStart(a, b);
          } catch (c) {
            this.nativeRange.setEnd(a, b), this.nativeRange.setStart(a, b);
          }

          d(this);
        }, f.setEnd = function (a, b) {
          try {
            this.nativeRange.setEnd(a, b);
          } catch (c) {
            this.nativeRange.setStart(a, b), this.nativeRange.setEnd(a, b);
          }

          d(this);
        }, g = function g(a, b) {
          return function (c) {
            try {
              this.nativeRange[a](c);
            } catch (e) {
              this.nativeRange[b](c), this.nativeRange[a](c);
            }

            d(this);
          };
        };
      }

      f.setStartBefore = g("setStartBefore", "setEndBefore"), f.setStartAfter = g("setStartAfter", "setEndAfter"), f.setEndBefore = g("setEndBefore", "setStartBefore"), f.setEndAfter = g("setEndAfter", "setStartAfter"), f.selectNodeContents = function (a) {
        this.setStartAndEnd(a, 0, k.getNodeLength(a));
      }, i.selectNodeContents(h), i.setEnd(h, 3), j = document.createRange(), j.selectNodeContents(h), j.setEnd(h, 4), j.setStart(h, 2), f.compareBoundaryPoints = -1 == i.compareBoundaryPoints(i.START_TO_END, j) && 1 == i.compareBoundaryPoints(i.END_TO_START, j) ? function (a, b) {
        return b = b.nativeRange || b, a == b.START_TO_END ? a = b.END_TO_START : a == b.END_TO_START && (a = b.START_TO_END), this.nativeRange.compareBoundaryPoints(a, b);
      } : function (a, b) {
        return this.nativeRange.compareBoundaryPoints(a, b.nativeRange || b);
      }, m = document.createElement("div"), m.innerHTML = "123", q = m.firstChild, r = o(document), r.appendChild(m), i.setStart(q, 1), i.setEnd(q, 2), i.deleteContents(), "13" == q.data && (f.deleteContents = function () {
        this.nativeRange.deleteContents(), d(this);
      }, f.extractContents = function () {
        var a = this.nativeRange.extractContents();
        return d(this), a;
      }), r.removeChild(m), r = null, l.isHostMethod(i, "createContextualFragment") && (f.createContextualFragment = function (a) {
        return this.nativeRange.createContextualFragment(a);
      }), o(document).removeChild(h), f.getName = function () {
        return "WrappedRange";
      }, a.WrappedRange = c, a.createNativeRange = function (a) {
        return a = p(a, b, "createNativeRange"), a.createRange();
      };
    }(), a.features.implementsTextRange && (e = function e(a) {
      var b,
          c,
          d,
          e = a.parentElement(),
          f = a.duplicate();
      return f.collapse(!0), b = f.parentElement(), f = a.duplicate(), f.collapse(!1), c = f.parentElement(), d = b == c ? b : k.getCommonAncestor(b, c), d == e ? d : k.getCommonAncestor(e, d);
    }, f = function f(a) {
      return 0 == a.compareEndPoints("StartToEnd", a);
    }, g = function g(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          l,
          n,
          o,
          p,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y = a.duplicate();
      if (y.collapse(c), f = y.parentElement(), k.isOrIsAncestorOf(b, f) || (f = b), !f.canHaveHTML) return g = new m(f.parentNode, k.getNodeIndex(f)), {
        boundaryPosition: g,
        nodeInfo: {
          nodeIndex: g.offset,
          containerElement: g.node
        }
      };

      for (h = k.getDocument(f).createElement("span"), h.parentNode && h.parentNode.removeChild(h), j = c ? "StartToStart" : "StartToEnd", r = e && e.containerElement == f ? e.nodeIndex : 0, s = f.childNodes.length, t = s, u = t;;) {
        if (u == s ? f.appendChild(h) : f.insertBefore(h, f.childNodes[u]), y.moveToElementText(h), i = y.compareEndPoints(j, a), 0 == i || r == t) break;

        if (-1 == i) {
          if (t == r + 1) break;
          r = u;
        } else t = t == r + 1 ? r : u;

        u = Math.floor((r + t) / 2), f.removeChild(h);
      }

      if (p = h.nextSibling, -1 == i && p && q(p)) {
        if (y.setEndPoint(c ? "EndToStart" : "EndToEnd", a), /[\r\n]/.test(p.data)) for (w = y.duplicate(), x = w.text.replace(/\r\n/g, "\r").length, v = w.moveStart("character", x); -1 == (i = w.compareEndPoints("StartToEnd", w));) {
          v++, w.moveStart("character", 1);
        } else v = y.text.length;
        o = new m(p, v);
      } else l = (d || !c) && h.previousSibling, n = (d || c) && h.nextSibling, o = n && q(n) ? new m(n, 0) : l && q(l) ? new m(l, l.data.length) : new m(f, k.getNodeIndex(h));

      return h.parentNode.removeChild(h), {
        boundaryPosition: o,
        nodeInfo: {
          nodeIndex: u,
          containerElement: f
        }
      };
    }, h = function h(a, b) {
      var c,
          d,
          e,
          f,
          g = a.offset,
          h = k.getDocument(a.node),
          i = o(h).createTextRange(),
          j = q(a.node);
      return j ? (c = a.node, d = c.parentNode) : (f = a.node.childNodes, c = g < f.length ? f[g] : null, d = a.node), e = h.createElement("span"), e.innerHTML = "&#feff;", c ? d.insertBefore(e, c) : d.appendChild(e), i.moveToElementText(e), i.collapse(!b), d.removeChild(e), j && i[b ? "moveStart" : "moveEnd"]("character", g), i;
    }, d = function d(a) {
      this.textRange = a, this.refresh();
    }, d.prototype = new n(document), d.prototype.refresh = function () {
      var a,
          b,
          c,
          d = e(this.textRange);
      f(this.textRange) ? b = a = g(this.textRange, d, !0, !0).boundaryPosition : (c = g(this.textRange, d, !0, !1), a = c.boundaryPosition, b = g(this.textRange, d, !1, !1, c.nodeInfo).boundaryPosition), this.setStart(a.node, a.offset), this.setEnd(b.node, b.offset);
    }, d.prototype.getName = function () {
      return "WrappedTextRange";
    }, n.copyComparisonConstants(d), i = function i(a) {
      var b, c, d;
      return a.collapsed ? h(new m(a.startContainer, a.startOffset), !0) : (b = h(new m(a.startContainer, a.startOffset), !0), c = h(new m(a.endContainer, a.endOffset), !1), d = o(n.getRangeDocument(a)).createTextRange(), d.setEndPoint("StartToStart", b), d.setEndPoint("EndToEnd", c), d);
    }, d.rangeToTextRange = i, d.prototype.toTextRange = function () {
      return i(this);
    }, a.WrappedTextRange = d, (!a.features.implementsDomRange || a.config.preferTextRange) && (j = function () {
      return this;
    }(), void 0 === j.Range && (j.Range = d), a.createNativeRange = function (a) {
      return a = p(a, b, "createNativeRange"), o(a).createTextRange();
    }, a.WrappedRange = d)), a.createRange = function (c) {
      return c = p(c, b, "createRange"), new a.WrappedRange(a.createNativeRange(c));
    }, a.createRangyRange = function (a) {
      return a = p(a, b, "createRangyRange"), new n(a);
    }, a.createIframeRange = function (c) {
      return b.deprecationNotice("createIframeRange()", "createRange(iframeEl)"), a.createRange(c);
    }, a.createIframeRangyRange = function (c) {
      return b.deprecationNotice("createIframeRangyRange()", "createRangyRange(iframeEl)"), a.createRangyRange(c);
    }, a.addShimListener(function (b) {
      var c = b.document;
      void 0 === c.createRange && (c.createRange = function () {
        return a.createRange(c);
      }), c = b = null;
    });
  }), H.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function (a, b) {
    function c(a) {
      return "string" == typeof a ? /^backward(s)?$/i.test(a) : !!a;
    }

    function d(a, c) {
      if (a) {
        if (A.isWindow(a)) return a;
        if (a instanceof r) return a.win;
        var d = A.getContentDocument(a, b, c);
        return A.getWindow(d);
      }

      return window;
    }

    function e(a) {
      return d(a, "getWinSelection").getSelection();
    }

    function f(a) {
      return d(a, "getDocSelection").document.selection;
    }

    function g(a) {
      var b = !1;
      return a.anchorNode && (b = 1 == A.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)), b;
    }

    function h(a, b, c) {
      var d = c ? "end" : "start",
          e = c ? "start" : "end";
      a.anchorNode = b[d + "Container"], a.anchorOffset = b[d + "Offset"], a.focusNode = b[e + "Container"], a.focusOffset = b[e + "Offset"];
    }

    function i(a) {
      var b = a.nativeSelection;
      a.anchorNode = b.anchorNode, a.anchorOffset = b.anchorOffset, a.focusNode = b.focusNode, a.focusOffset = b.focusOffset;
    }

    function j(a) {
      a.anchorNode = a.focusNode = null, a.anchorOffset = a.focusOffset = 0, a.rangeCount = 0, a.isCollapsed = !0, a._ranges.length = 0;
    }

    function k(b) {
      var c;
      return b instanceof D ? (c = a.createNativeRange(b.getDocument()), c.setEnd(b.endContainer, b.endOffset), c.setStart(b.startContainer, b.startOffset)) : b instanceof E ? c = b.nativeRange : J.implementsDomRange && b instanceof A.getWindow(b.startContainer).Range && (c = b), c;
    }

    function l(a) {
      if (!a.length || 1 != a[0].nodeType) return !1;

      for (var b = 1, c = a.length; c > b; ++b) {
        if (!A.isAncestorOf(a[0], a[b])) return !1;
      }

      return !0;
    }

    function m(a) {
      var c = a.getNodes();
      if (!l(c)) throw b.createError("getSingleElementFromRange: range " + a.inspect() + " did not consist of a single element");
      return c[0];
    }

    function n(a) {
      return !!a && void 0 !== a.text;
    }

    function o(a, b) {
      var c = new E(b);
      a._ranges = [c], h(a, c, !1), a.rangeCount = 1, a.isCollapsed = c.collapsed;
    }

    function p(b) {
      var c, d, e, f;
      if (b._ranges.length = 0, "None" == b.docSelection.type) j(b);else if (c = b.docSelection.createRange(), n(c)) o(b, c);else {
        for (b.rangeCount = c.length, e = L(c.item(0)), f = 0; f < b.rangeCount; ++f) {
          d = a.createRange(e), d.selectNode(c.item(f)), b._ranges.push(d);
        }

        b.isCollapsed = 1 == b.rangeCount && b._ranges[0].collapsed, h(b, b._ranges[b.rangeCount - 1], !1);
      }
    }

    function q(a, c) {
      var d,
          e,
          f = a.docSelection.createRange(),
          g = m(c),
          h = L(f.item(0)),
          i = M(h).createControlRange();

      for (d = 0, e = f.length; e > d; ++d) {
        i.add(f.item(d));
      }

      try {
        i.add(g);
      } catch (j) {
        throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
      }

      i.select(), p(a);
    }

    function r(a, b, c) {
      this.nativeSelection = a, this.docSelection = b, this._ranges = [], this.win = c, this.refresh();
    }

    function s(a) {
      a.win = a.anchorNode = a.focusNode = a._ranges = null, a.rangeCount = a.anchorOffset = a.focusOffset = 0, a.detached = !0;
    }

    function t(a, b) {
      for (var c, d, e = bb.length; e--;) {
        if (c = bb[e], d = c.selection, "deleteAll" == b) s(d);else if (c.win == a) return "delete" == b ? (bb.splice(e, 1), !0) : d;
      }

      return "deleteAll" == b && (bb.length = 0), null;
    }

    function u(a, c) {
      var d,
          e,
          f,
          g = L(c[0].startContainer),
          h = M(g).createControlRange();

      for (d = 0, f = c.length; f > d; ++d) {
        e = m(c[d]);

        try {
          h.add(e);
        } catch (i) {
          throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
        }
      }

      h.select(), p(a);
    }

    function v(a, b) {
      if (a.win.document != L(b)) throw new F("WRONG_DOCUMENT_ERR");
    }

    function w(b) {
      return function (c, d) {
        var e;
        this.rangeCount ? (e = this.getRangeAt(0), e["set" + (b ? "Start" : "End")](c, d)) : (e = a.createRange(this.win.document), e.setStartAndEnd(c, d)), this.setSingleRange(e, this.isBackward());
      };
    }

    function x(a) {
      var b,
          c,
          d = [],
          e = new G(a.anchorNode, a.anchorOffset),
          f = new G(a.focusNode, a.focusOffset),
          g = "function" == typeof a.getName ? a.getName() : "Selection";
      if (void 0 !== a.rangeCount) for (b = 0, c = a.rangeCount; c > b; ++b) {
        d[b] = D.inspect(a.getRangeAt(b));
      }
      return "[" + g + "(Ranges: " + d.join(", ") + ")(anchor: " + e.inspect() + ", focus: " + f.inspect() + "]";
    }

    var y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb;

    if (a.config.checkSelectionRanges = !0, y = "boolean", z = "number", A = a.dom, B = a.util, C = B.isHostMethod, D = a.DomRange, E = a.WrappedRange, F = a.DOMException, G = A.DomPosition, J = a.features, K = "Control", L = A.getDocument, M = A.getBody, N = D.rangesEqual, O = C(window, "getSelection"), P = B.isHostObject(document, "selection"), J.implementsWinGetSelection = O, J.implementsDocSelection = P, Q = P && (!O || a.config.preferTextRange), Q ? (H = f, a.isSelectionValid = function (a) {
      var b = d(a, "isSelectionValid").document,
          c = b.selection;
      return "None" != c.type || L(c.createRange().parentElement()) == b;
    }) : O ? (H = e, a.isSelectionValid = function () {
      return !0;
    }) : b.fail("Neither document.selection or window.getSelection() detected."), a.getNativeSelection = H, R = H(), S = a.createNativeRange(document), T = M(document), U = B.areHostProperties(R, ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]), J.selectionHasAnchorAndFocus = U, V = C(R, "extend"), J.selectionHasExtend = V, W = _typeof(R.rangeCount) == z, J.selectionHasRangeCount = W, X = !1, Y = !0, Z = V ? function (b, c) {
      var d = D.getRangeDocument(c),
          e = a.createRange(d);
      e.collapseToPoint(c.endContainer, c.endOffset), b.addRange(k(e)), b.extend(c.startContainer, c.startOffset);
    } : null, B.areHostMethods(R, ["addRange", "getRangeAt", "removeAllRanges"]) && _typeof(R.rangeCount) == z && J.implementsDomRange && !function () {
      var b,
          c,
          d,
          e,
          f,
          h,
          i,
          j,
          k,
          l,
          m,
          n = window.getSelection();

      if (n) {
        for (b = n.rangeCount, c = b > 1, d = [], e = g(n), f = 0; b > f; ++f) {
          d[f] = n.getRangeAt(f);
        }

        for (h = M(document), i = h.appendChild(document.createElement("div")), i.contentEditable = "false", j = i.appendChild(document.createTextNode("   ")), k = document.createRange(), k.setStart(j, 1), k.collapse(!0), n.addRange(k), Y = 1 == n.rangeCount, n.removeAllRanges(), c || (l = window.navigator.appVersion.match(/Chrome\/(.*?) /), l && parseInt(l[1]) >= 36 ? X = !1 : (m = k.cloneRange(), k.setStart(j, 0), m.setEnd(j, 3), m.setStart(j, 2), n.addRange(k), n.addRange(m), X = 2 == n.rangeCount)), h.removeChild(i), n.removeAllRanges(), f = 0; b > f; ++f) {
          0 == f && e ? Z ? Z(n, d[f]) : (a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"), n.addRange(d[f])) : n.addRange(d[f]);
        }
      }
    }(), J.selectionSupportsMultipleRanges = X, J.collapsedNonEditableSelectionsSupported = Y, $ = !1, T && C(T, "createControlRange") && (_ = T.createControlRange(), B.areHostProperties(_, ["item", "add"]) && ($ = !0)), J.implementsControlRange = $, I = U ? function (a) {
      return a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset;
    } : function (a) {
      return a.rangeCount ? a.getRangeAt(a.rangeCount - 1).collapsed : !1;
    }, C(R, "getRangeAt") ? ab = function ab(a, b) {
      try {
        return a.getRangeAt(b);
      } catch (c) {
        return null;
      }
    } : U && (ab = function ab(b) {
      var c = L(b.anchorNode),
          d = a.createRange(c);
      return d.setStartAndEnd(b.anchorNode, b.anchorOffset, b.focusNode, b.focusOffset), d.collapsed !== this.isCollapsed && d.setStartAndEnd(b.focusNode, b.focusOffset, b.anchorNode, b.anchorOffset), d;
    }), r.prototype = a.selectionPrototype, bb = [], cb = function cb(a) {
      var b, c, e;
      return a && a instanceof r ? (a.refresh(), a) : (a = d(a, "getNativeSelection"), b = t(a), c = H(a), e = P ? f(a) : null, b ? (b.nativeSelection = c, b.docSelection = e, b.refresh()) : (b = new r(c, e, a), bb.push({
        win: a,
        selection: b
      })), b);
    }, a.getSelection = cb, a.getIframeSelection = function (c) {
      return b.deprecationNotice("getIframeSelection()", "getSelection(iframeEl)"), a.getSelection(A.getIframeWindow(c));
    }, db = r.prototype, !Q && U && B.areHostMethods(R, ["removeAllRanges", "addRange"])) db.removeAllRanges = function () {
      this.nativeSelection.removeAllRanges(), j(this);
    }, eb = function eb(a, b) {
      Z(a.nativeSelection, b), a.refresh();
    }, db.addRange = W ? function (b, d) {
      var e, f;
      $ && P && this.docSelection.type == K ? q(this, b) : c(d) && V ? eb(this, b) : (X ? e = this.rangeCount : (this.removeAllRanges(), e = 0), this.nativeSelection.addRange(k(b).cloneRange()), this.rangeCount = this.nativeSelection.rangeCount, this.rangeCount == e + 1 ? (a.config.checkSelectionRanges && (f = ab(this.nativeSelection, this.rangeCount - 1), f && !N(f, b) && (b = new E(f))), this._ranges[this.rangeCount - 1] = b, h(this, b, hb(this.nativeSelection)), this.isCollapsed = I(this)) : this.refresh());
    } : function (a, b) {
      c(b) && V ? eb(this, a) : (this.nativeSelection.addRange(k(a)), this.refresh());
    }, db.setRanges = function (a) {
      if ($ && P && a.length > 1) u(this, a);else {
        this.removeAllRanges();

        for (var b = 0, c = a.length; c > b; ++b) {
          this.addRange(a[b]);
        }
      }
    };else {
      if (!(C(R, "empty") && C(S, "select") && $ && Q)) return b.fail("No means of selecting a Range or TextRange was found"), !1;
      db.removeAllRanges = function () {
        var a, b, c;

        try {
          this.docSelection.empty(), "None" != this.docSelection.type && (this.anchorNode ? a = L(this.anchorNode) : this.docSelection.type == K && (b = this.docSelection.createRange(), b.length && (a = L(b.item(0)))), a && (c = M(a).createTextRange(), c.select(), this.docSelection.empty()));
        } catch (d) {}

        j(this);
      }, db.addRange = function (b) {
        this.docSelection.type == K ? q(this, b) : (a.WrappedTextRange.rangeToTextRange(b).select(), this._ranges[0] = b, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, h(this, b, !1));
      }, db.setRanges = function (a) {
        this.removeAllRanges();
        var b = a.length;
        b > 1 ? u(this, a) : b && this.addRange(a[0]);
      };
    }
    if (db.getRangeAt = function (a) {
      if (0 > a || a >= this.rangeCount) throw new F("INDEX_SIZE_ERR");
      return this._ranges[a].cloneRange();
    }, Q) fb = function fb(b) {
      var c;
      a.isSelectionValid(b.win) ? c = b.docSelection.createRange() : (c = M(b.win.document).createTextRange(), c.collapse(!0)), b.docSelection.type == K ? p(b) : n(c) ? o(b, c) : j(b);
    };else if (C(R, "getRangeAt") && _typeof(R.rangeCount) == z) fb = function fb(b) {
      if ($ && P && b.docSelection.type == K) p(b);else if (b._ranges.length = b.rangeCount = b.nativeSelection.rangeCount, b.rangeCount) {
        for (var c = 0, d = b.rangeCount; d > c; ++c) {
          b._ranges[c] = new a.WrappedRange(b.nativeSelection.getRangeAt(c));
        }

        h(b, b._ranges[b.rangeCount - 1], hb(b.nativeSelection)), b.isCollapsed = I(b);
      } else j(b);
    };else {
      if (!U || _typeof(R.isCollapsed) != y || _typeof(S.collapsed) != y || !J.implementsDomRange) return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;

      fb = function fb(a) {
        var b,
            c = a.nativeSelection;
        c.anchorNode ? (b = ab(c, 0), a._ranges = [b], a.rangeCount = 1, i(a), a.isCollapsed = I(a)) : j(a);
      };
    }
    db.refresh = function (a) {
      var b,
          c = a ? this._ranges.slice(0) : null,
          d = this.anchorNode,
          e = this.anchorOffset;

      if (fb(this), a) {
        if (b = c.length, b != this._ranges.length) return !0;
        if (this.anchorNode != d || this.anchorOffset != e) return !0;

        for (; b--;) {
          if (!N(c[b], this._ranges[b])) return !0;
        }

        return !1;
      }
    }, gb = function gb(a, b) {
      var c,
          d,
          e = a.getAllRanges();

      for (a.removeAllRanges(), c = 0, d = e.length; d > c; ++c) {
        N(b, e[c]) || a.addRange(e[c]);
      }

      a.rangeCount || j(a);
    }, db.removeRange = $ && P ? function (a) {
      var b, c, d, e, f, g, h, i;

      if (this.docSelection.type == K) {
        for (b = this.docSelection.createRange(), c = m(a), d = L(b.item(0)), e = M(d).createControlRange(), g = !1, h = 0, i = b.length; i > h; ++h) {
          f = b.item(h), f !== c || g ? e.add(b.item(h)) : g = !0;
        }

        e.select(), p(this);
      } else gb(this, a);
    } : function (a) {
      gb(this, a);
    }, !Q && U && J.implementsDomRange ? (hb = g, db.isBackward = function () {
      return hb(this);
    }) : hb = db.isBackward = function () {
      return !1;
    }, db.isBackwards = db.isBackward, db.toString = function () {
      var a,
          b,
          c = [];

      for (a = 0, b = this.rangeCount; b > a; ++a) {
        c[a] = "" + this._ranges[a];
      }

      return c.join("");
    }, db.collapse = function (b, c) {
      v(this, b);
      var d = a.createRange(b);
      d.collapseToPoint(b, c), this.setSingleRange(d), this.isCollapsed = !0;
    }, db.collapseToStart = function () {
      if (!this.rangeCount) throw new F("INVALID_STATE_ERR");
      var a = this._ranges[0];
      this.collapse(a.startContainer, a.startOffset);
    }, db.collapseToEnd = function () {
      if (!this.rangeCount) throw new F("INVALID_STATE_ERR");
      var a = this._ranges[this.rangeCount - 1];
      this.collapse(a.endContainer, a.endOffset);
    }, db.selectAllChildren = function (b) {
      v(this, b);
      var c = a.createRange(b);
      c.selectNodeContents(b), this.setSingleRange(c);
    }, db.deleteFromDocument = function () {
      var a, b, c, d, e;

      if ($ && P && this.docSelection.type == K) {
        for (a = this.docSelection.createRange(); a.length;) {
          b = a.item(0), a.remove(b), b.parentNode.removeChild(b);
        }

        this.refresh();
      } else if (this.rangeCount && (c = this.getAllRanges(), c.length)) {
        for (this.removeAllRanges(), d = 0, e = c.length; e > d; ++d) {
          c[d].deleteContents();
        }

        this.addRange(c[e - 1]);
      }
    }, db.eachRange = function (a, b) {
      for (var c = 0, d = this._ranges.length; d > c; ++c) {
        if (a(this.getRangeAt(c))) return b;
      }
    }, db.getAllRanges = function () {
      var a = [];
      return this.eachRange(function (b) {
        a.push(b);
      }), a;
    }, db.setSingleRange = function (a, b) {
      this.removeAllRanges(), this.addRange(a, b);
    }, db.callMethodOnEachRange = function (a, b) {
      var c = [];
      return this.eachRange(function (d) {
        c.push(d[a].apply(d, b));
      }), c;
    }, db.setStart = w(!0), db.setEnd = w(!1), a.rangePrototype.select = function (a) {
      cb(this.getDocument()).setSingleRange(this, a);
    }, db.changeEachRange = function (a) {
      var b = [],
          c = this.isBackward();
      this.eachRange(function (c) {
        a(c), b.push(c);
      }), this.removeAllRanges(), c && 1 == b.length ? this.addRange(b[0], "backward") : this.setRanges(b);
    }, db.containsNode = function (a, b) {
      return this.eachRange(function (c) {
        return c.containsNode(a, b);
      }, !0) || !1;
    }, db.getBookmark = function (a) {
      return {
        backward: this.isBackward(),
        rangeBookmarks: this.callMethodOnEachRange("getBookmark", [a])
      };
    }, db.moveToBookmark = function (b) {
      var c,
          d,
          e,
          f = [];

      for (c = 0; d = b.rangeBookmarks[c++];) {
        e = a.createRange(this.win), e.moveToBookmark(d), f.push(e);
      }

      b.backward ? this.setSingleRange(f[0], "backward") : this.setRanges(f);
    }, db.toHtml = function () {
      var a = [];
      return this.eachRange(function (b) {
        a.push(D.toHtml(b));
      }), a.join("");
    }, J.implementsTextRange && (db.getNativeTextRange = function () {
      var c, d;

      if (c = this.docSelection) {
        if (d = c.createRange(), n(d)) return d;
        throw b.createError("getNativeTextRange: selection is a control selection");
      }

      if (this.rangeCount > 0) return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));
      throw b.createError("getNativeTextRange: selection contains no range");
    }), db.getName = function () {
      return "WrappedSelection";
    }, db.inspect = function () {
      return x(this);
    }, db.detach = function () {
      t(this.win, "delete"), s(this);
    }, r.detachAll = function () {
      t(null, "deleteAll");
    }, r.inspect = x, r.isDirectionBackward = c, a.Selection = r, a.selectionPrototype = db, a.addShimListener(function (a) {
      void 0 === a.getSelection && (a.getSelection = function () {
        return cb(a);
      }), a = null;
    });
  }), H);
}, this), function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'rangy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  a.createModule("SaveRestore", ["WrappedRange"], function (a, b) {
    function c(a, b) {
      return (b || document).getElementById(a);
    }

    function d(a, b) {
      var c,
          d = "selectionBoundary_" + +new Date() + "_" + ("" + Math.random()).slice(2),
          e = o.getDocument(a.startContainer),
          f = a.cloneRange();
      return f.collapse(b), c = e.createElement("span"), c.id = d, c.style.lineHeight = "0", c.style.display = "none", c.className = "rangySelectionBoundary", c.appendChild(e.createTextNode(p)), f.insertNode(c), c;
    }

    function e(a, d, e, f) {
      var g = c(e, a);
      g ? (d[f ? "setStartBefore" : "setEndBefore"](g), g.parentNode.removeChild(g)) : b.warn("Marker element has been removed. Cannot restore selection.");
    }

    function f(a, b) {
      return b.compareBoundaryPoints(a.START_TO_START, a);
    }

    function g(b, c) {
      var e,
          f,
          g = a.DomRange.getRangeDocument(b),
          h = "" + b;
      return b.collapsed ? (f = d(b, !1), {
        document: g,
        markerId: f.id,
        collapsed: !0
      }) : (f = d(b, !1), e = d(b, !0), {
        document: g,
        startMarkerId: e.id,
        endMarkerId: f.id,
        collapsed: !1,
        backward: c,
        toString: function toString() {
          return "original text: '" + h + "', new text: '" + b + "'";
        }
      });
    }

    function h(d, f) {
      var g,
          h,
          i,
          j = d.document;
      return void 0 === f && (f = !0), g = a.createRange(j), d.collapsed ? (h = c(d.markerId, j), h ? (h.style.display = "inline", i = h.previousSibling, i && 3 == i.nodeType ? (h.parentNode.removeChild(h), g.collapseToPoint(i, i.length)) : (g.collapseBefore(h), h.parentNode.removeChild(h))) : b.warn("Marker element has been removed. Cannot restore selection.")) : (e(j, g, d.startMarkerId, !0), e(j, g, d.endMarkerId, !1)), f && g.normalizeBoundaries(), g;
    }

    function i(b, d) {
      var e,
          h,
          i,
          j,
          k = [];

      for (b = b.slice(0), b.sort(f), i = 0, j = b.length; j > i; ++i) {
        k[i] = g(b[i], d);
      }

      for (i = j - 1; i >= 0; --i) {
        e = b[i], h = a.DomRange.getRangeDocument(e), e.collapsed ? e.collapseAfter(c(k[i].markerId, h)) : (e.setEndBefore(c(k[i].endMarkerId, h)), e.setStartAfter(c(k[i].startMarkerId, h)));
      }

      return k;
    }

    function j(c) {
      var d, e, f, g;
      return a.isSelectionValid(c) ? (d = a.getSelection(c), e = d.getAllRanges(), f = 1 == e.length && d.isBackward(), g = i(e, f), f ? d.setSingleRange(e[0], "backward") : d.setRanges(e), {
        win: c,
        rangeInfos: g,
        restored: !1
      }) : (b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."), null);
    }

    function k(a) {
      var b,
          c = [],
          d = a.length;

      for (b = d - 1; b >= 0; b--) {
        c[b] = h(a[b], !0);
      }

      return c;
    }

    function l(b, c) {
      var d, e, f, g;
      b.restored || (d = b.rangeInfos, e = a.getSelection(b.win), f = k(d), g = d.length, 1 == g && c && a.features.selectionHasExtend && d[0].backward ? (e.removeAllRanges(), e.addRange(f[0], !0)) : e.setRanges(f), b.restored = !0);
    }

    function m(a, b) {
      var d = c(b, a);
      d && d.parentNode.removeChild(d);
    }

    function n(a) {
      var b,
          c,
          d,
          e = a.rangeInfos;

      for (b = 0, c = e.length; c > b; ++b) {
        d = e[b], d.collapsed ? m(a.doc, d.markerId) : (m(a.doc, d.startMarkerId), m(a.doc, d.endMarkerId));
      }
    }

    var o = a.dom,
        p = "﻿";
    a.util.extend(a, {
      saveRange: g,
      restoreRange: h,
      saveRanges: i,
      restoreRanges: k,
      saveSelection: j,
      restoreSelection: l,
      removeMarkerElement: m,
      removeMarkers: n
    });
  });
}, this), Base = function Base() {}, Base.extend = function (a, b) {
  var c,
      d,
      e,
      f = Base.prototype.extend;
  return Base._prototyping = !0, c = new this(), f.call(c, a), c.base = function () {}, delete Base._prototyping, d = c.constructor, e = c.constructor = function () {
    if (!Base._prototyping) if (this._constructing || this.constructor == e) this._constructing = !0, d.apply(this, arguments), delete this._constructing;else if (null != arguments[0]) return (arguments[0].extend || f).call(arguments[0], c);
  }, e.ancestor = this, e.extend = this.extend, e.forEach = this.forEach, e.implement = this.implement, e.prototype = c, e.toString = this.toString, e.valueOf = function (a) {
    return "object" == a ? e : d.valueOf();
  }, f.call(e, b), "function" == typeof e.init && e.init(), e;
}, Base.prototype = {
  extend: function extend(a, b) {
    var c, d, e, f, g, h, i;
    if (arguments.length > 1) c = this[a], !c || "function" != typeof b || c.valueOf && c.valueOf() == b.valueOf() || !/\bbase\b/.test(b) || (d = b.valueOf(), b = function b() {
      var a,
          b = this.base || Base.prototype.base;
      return this.base = c, a = d.apply(this, arguments), this.base = b, a;
    }, b.valueOf = function (a) {
      return "object" == a ? b : d;
    }, b.toString = Base.toString), this[a] = b;else if (a) {
      for (e = Base.prototype.extend, Base._prototyping || "function" == typeof this || (e = this.extend || e), f = {
        toSource: null
      }, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];) {
        a[i] != f[i] && e.call(this, i, a[i]);
      }

      for (i in a) {
        f[i] || e.call(this, i, a[i]);
      }
    }
    return this;
  }
}, Base = Base.extend({
  constructor: function constructor() {
    this.extend(arguments[0]);
  }
}, {
  ancestor: Object,
  version: "1.1",
  forEach: function forEach(a, b, c) {
    for (var d in a) {
      void 0 === this.prototype[d] && b.call(c, a[d], d, a);
    }
  },
  implement: function implement() {
    for (var a = 0; a < arguments.length; a++) {
      "function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
    }

    return this;
  },
  toString: function toString() {
    return this.valueOf() + "";
  }
}), wysihtml5.browser = function () {
  function a(a) {
    return +(/ipad|iphone|ipod/.test(a) && a.match(/ os (\d+).+? like mac os x/) || [void 0, 0])[1];
  }

  function b(a) {
    return +(a.match(/android (\d+)/) || [void 0, 0])[1];
  }

  function c(a, b) {
    var c,
        d = -1;
    return "Microsoft Internet Explorer" == navigator.appName ? c = RegExp("MSIE ([0-9]{1,}[.0-9]{0,})") : "Netscape" == navigator.appName && (c = RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")), c && null != c.exec(navigator.userAgent) && (d = parseFloat(RegExp.$1)), -1 === d ? !1 : a ? b ? "<" === b ? d > a : ">" === b ? a > d : "<=" === b ? d >= a : ">=" === b ? a >= d : void 0 : a === d : !0;
  }

  var d = navigator.userAgent,
      e = document.createElement("div"),
      f = -1 !== d.indexOf("Gecko") && -1 === d.indexOf("KHTML"),
      g = -1 !== d.indexOf("AppleWebKit/"),
      h = -1 !== d.indexOf("Chrome/"),
      i = -1 !== d.indexOf("Opera/");
  return {
    USER_AGENT: d,
    supported: function supported() {
      var c = this.USER_AGENT.toLowerCase(),
          d = "contentEditable" in e,
          f = document.execCommand && document.queryCommandSupported && document.queryCommandState,
          g = document.querySelector && document.querySelectorAll,
          h = this.isIos() && a(c) < 5 || this.isAndroid() && b(c) < 4 || -1 !== c.indexOf("opera mobi") || -1 !== c.indexOf("hpwos/");
      return d && f && g && !h;
    },
    isTouchDevice: function isTouchDevice() {
      return this.supportsEvent("touchmove");
    },
    isIos: function isIos() {
      return /ipad|iphone|ipod/i.test(this.USER_AGENT);
    },
    isAndroid: function isAndroid() {
      return -1 !== this.USER_AGENT.indexOf("Android");
    },
    supportsSandboxedIframes: function supportsSandboxedIframes() {
      return c();
    },
    throwsMixedContentWarningWhenIframeSrcIsEmpty: function throwsMixedContentWarningWhenIframeSrcIsEmpty() {
      return !("querySelector" in document);
    },
    displaysCaretInEmptyContentEditableCorrectly: function displaysCaretInEmptyContentEditableCorrectly() {
      return c();
    },
    hasCurrentStyleProperty: function hasCurrentStyleProperty() {
      return "currentStyle" in e;
    },
    hasHistoryIssue: function hasHistoryIssue() {
      return f && "Mac" === navigator.platform.substr(0, 3);
    },
    insertsLineBreaksOnReturn: function insertsLineBreaksOnReturn() {
      return f;
    },
    supportsPlaceholderAttributeOn: function supportsPlaceholderAttributeOn(a) {
      return "placeholder" in a;
    },
    supportsEvent: function supportsEvent(a) {
      return "on" + a in e || function () {
        return e.setAttribute("on" + a, "return;"), "function" == typeof e["on" + a];
      }();
    },
    supportsEventsInIframeCorrectly: function supportsEventsInIframeCorrectly() {
      return !i;
    },
    supportsHTML5Tags: function supportsHTML5Tags(a) {
      var b = a.createElement("div"),
          c = "<article>foo</article>";
      return b.innerHTML = c, b.innerHTML.toLowerCase() === c;
    },
    supportsCommand: function () {
      var a = {
        formatBlock: c(10, "<="),
        insertUnorderedList: c(),
        insertOrderedList: c()
      },
          b = {
        insertHTML: f
      };
      return function (c, d) {
        var e = a[d];

        if (!e) {
          try {
            return c.queryCommandSupported(d);
          } catch (f) {}

          try {
            return c.queryCommandEnabled(d);
          } catch (g) {
            return !!b[d];
          }
        }

        return !1;
      };
    }(),
    doesAutoLinkingInContentEditable: function doesAutoLinkingInContentEditable() {
      return c();
    },
    canDisableAutoLinking: function canDisableAutoLinking() {
      return this.supportsCommand(document, "AutoUrlDetect");
    },
    clearsContentEditableCorrectly: function clearsContentEditableCorrectly() {
      return f || i || g;
    },
    supportsGetAttributeCorrectly: function supportsGetAttributeCorrectly() {
      var a = document.createElement("td");
      return "1" != a.getAttribute("rowspan");
    },
    canSelectImagesInContentEditable: function canSelectImagesInContentEditable() {
      return f || c() || i;
    },
    autoScrollsToCaret: function autoScrollsToCaret() {
      return !g;
    },
    autoClosesUnclosedTags: function autoClosesUnclosedTags() {
      var a,
          b,
          c = e.cloneNode(!1);
      return c.innerHTML = "<p><div></div>", b = c.innerHTML.toLowerCase(), a = "<p></p><div></div>" === b || "<p><div></div></p>" === b, this.autoClosesUnclosedTags = function () {
        return a;
      }, a;
    },
    supportsNativeGetElementsByClassName: function supportsNativeGetElementsByClassName() {
      return -1 !== (document.getElementsByClassName + "").indexOf("[native code]");
    },
    supportsSelectionModify: function supportsSelectionModify() {
      return "getSelection" in window && "modify" in window.getSelection();
    },
    needsSpaceAfterLineBreak: function needsSpaceAfterLineBreak() {
      return i;
    },
    supportsSpeechApiOn: function supportsSpeechApiOn(a) {
      var b = d.match(/Chrome\/(\d+)/) || [void 0, 0];
      return b[1] >= 11 && ("onwebkitspeechchange" in a || "speech" in a);
    },
    crashesWhenDefineProperty: function crashesWhenDefineProperty(a) {
      return c(9) && ("XMLHttpRequest" === a || "XDomainRequest" === a);
    },
    doesAsyncFocus: function doesAsyncFocus() {
      return c();
    },
    hasProblemsSettingCaretAfterImg: function hasProblemsSettingCaretAfterImg() {
      return c();
    },
    hasUndoInContextMenu: function hasUndoInContextMenu() {
      return f || h || i;
    },
    hasInsertNodeIssue: function hasInsertNodeIssue() {
      return i;
    },
    hasIframeFocusIssue: function hasIframeFocusIssue() {
      return c();
    },
    createsNestedInvalidMarkupAfterPaste: function createsNestedInvalidMarkupAfterPaste() {
      return g;
    },
    supportsMutationEvents: function supportsMutationEvents() {
      return "MutationEvent" in window;
    },
    supportsModenPaste: function supportsModenPaste() {
      return !("clipboardData" in window);
    }
  };
}(), wysihtml5.lang.array = function (a) {
  return {
    contains: function contains(b) {
      if (Array.isArray(b)) {
        for (var c = b.length; c--;) {
          if (-1 !== wysihtml5.lang.array(a).indexOf(b[c])) return !0;
        }

        return !1;
      }

      return -1 !== wysihtml5.lang.array(a).indexOf(b);
    },
    indexOf: function indexOf(b) {
      if (a.indexOf) return a.indexOf(b);

      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
    without: function without(b) {
      b = wysihtml5.lang.array(b);

      for (var c = [], d = 0, e = a.length; e > d; d++) {
        b.contains(a[d]) || c.push(a[d]);
      }

      return c;
    },
    get: function get() {
      for (var b = 0, c = a.length, d = []; c > b; b++) {
        d.push(a[b]);
      }

      return d;
    },
    map: function map(b, c) {
      if (Array.prototype.map) return a.map(b, c);

      for (var d = a.length >>> 0, e = Array(d), f = 0; d > f; f++) {
        e[f] = b.call(c, a[f], f, a);
      }

      return e;
    },
    unique: function unique() {
      for (var b = [], c = a.length, d = 0; c > d;) {
        wysihtml5.lang.array(b).contains(a[d]) || b.push(a[d]), d++;
      }

      return b;
    }
  };
}, wysihtml5.lang.Dispatcher = Base.extend({
  on: function on(a, b) {
    return this.events = this.events || {}, this.events[a] = this.events[a] || [], this.events[a].push(b), this;
  },
  off: function off(a, b) {
    this.events = this.events || {};
    var c,
        d,
        e = 0;

    if (a) {
      for (c = this.events[a] || [], d = []; e < c.length; e++) {
        c[e] !== b && b && d.push(c[e]);
      }

      this.events[a] = d;
    } else this.events = {};

    return this;
  },
  fire: function fire(a, b) {
    this.events = this.events || {};

    for (var c = this.events[a] || [], d = 0; d < c.length; d++) {
      c[d].call(this, b);
    }

    return this;
  },
  observe: function observe() {
    return this.on.apply(this, arguments);
  },
  stopObserving: function stopObserving() {
    return this.off.apply(this, arguments);
  }
}), wysihtml5.lang.object = function (a) {
  return {
    merge: function merge(b) {
      for (var c in b) {
        a[c] = b[c];
      }

      return this;
    },
    get: function get() {
      return a;
    },
    clone: function clone(b) {
      var c,
          d = {};
      if (null === a || !wysihtml5.lang.object(a).isPlainObject()) return a;

      for (c in a) {
        a.hasOwnProperty(c) && (d[c] = b ? wysihtml5.lang.object(a[c]).clone(b) : a[c]);
      }

      return d;
    },
    isArray: function isArray() {
      return "[object Array]" === Object.prototype.toString.call(a);
    },
    isFunction: function isFunction() {
      return "[object Function]" === Object.prototype.toString.call(a);
    },
    isPlainObject: function isPlainObject() {
      return "[object Object]" === Object.prototype.toString.call(a);
    }
  };
}, function () {
  var a = /^\s+/,
      b = /\s+$/,
      c = /[&<>\t"]/g,
      d = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "	": "&nbsp; "
  };

  wysihtml5.lang.string = function (e) {
    return e += "", {
      trim: function trim() {
        return e.replace(a, "").replace(b, "");
      },
      interpolate: function interpolate(a) {
        for (var b in a) {
          e = this.replace("#{" + b + "}").by(a[b]);
        }

        return e;
      },
      replace: function replace(a) {
        return {
          by: function by(b) {
            return e.split(a).join(b);
          }
        };
      },
      escapeHTML: function escapeHTML(a, b) {
        var f = e.replace(c, function (a) {
          return d[a];
        });
        return a && (f = f.replace(/(?:\r\n|\r|\n)/g, "<br />")), b && (f = f.replace(/  /gi, "&nbsp; ")), f;
      }
    };
  };
}(), function (a) {
  function b(a, b) {
    return f(a, b) ? a : (a === a.ownerDocument.documentElement && (a = a.ownerDocument.body), g(a, b));
  }

  function c(a) {
    return a.replace(i, function (a, b) {
      var c,
          d,
          e = (b.match(j) || [])[1] || "",
          f = l[e];
      return b = b.replace(j, ""), b.split(f).length > b.split(e).length && (b += e, e = ""), c = b, d = b, b.length > k && (d = d.substr(0, k) + "..."), "www." === c.substr(0, 4) && (c = "http://" + c), '<a href="' + c + '">' + d + "</a>" + e;
    });
  }

  function d(a) {
    var b = a._wysihtml5_tempElement;
    return b || (b = a._wysihtml5_tempElement = a.createElement("div")), b;
  }

  function e(b) {
    var e = b.parentNode,
        f = a.lang.string(b.data).escapeHTML(),
        g = d(e.ownerDocument);

    for (g.innerHTML = "<span></span>" + c(f), g.removeChild(g.firstChild); g.firstChild;) {
      e.insertBefore(g.firstChild, b);
    }

    e.removeChild(b);
  }

  function f(b, c) {
    for (var d; b.parentNode;) {
      if (b = b.parentNode, d = b.nodeName, b.className && a.lang.array(b.className.split(" ")).contains(c)) return !0;
      if (h.contains(d)) return !0;
      if ("body" === d) return !1;
    }

    return !1;
  }

  function g(b, c) {
    if (!(h.contains(b.nodeName) || b.className && a.lang.array(b.className.split(" ")).contains(c))) {
      if (b.nodeType === a.TEXT_NODE && b.data.match(i)) return e(b), void 0;

      for (var d = a.lang.array(b.childNodes).get(), f = d.length, j = 0; f > j; j++) {
        g(d[j], c);
      }

      return b;
    }
  }

  var h = a.lang.array(["CODE", "PRE", "A", "SCRIPT", "HEAD", "TITLE", "STYLE"]),
      i = /((https?:\/\/|www\.)[^\s<]{3,})/gi,
      j = /([^\w\/\-](,?))$/i,
      k = 100,
      l = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  a.dom.autoLink = b, a.dom.autoLink.URL_REG_EXP = i;
}(wysihtml5), function (a) {
  var b = a.dom;
  b.addClass = function (a, c) {
    var d = a.classList;
    return d ? d.add(c) : (b.hasClass(a, c) || (a.className += " " + c), void 0);
  }, b.removeClass = function (a, b) {
    var c = a.classList;
    return c ? c.remove(b) : (a.className = a.className.replace(RegExp("(^|\\s+)" + b + "(\\s+|$)"), " "), void 0);
  }, b.hasClass = function (a, b) {
    var c,
        d = a.classList;
    return d ? d.contains(b) : (c = a.className, c.length > 0 && (c == b || RegExp("(^|\\s)" + b + "(\\s|$)").test(c)));
  };
}(wysihtml5), wysihtml5.dom.contains = function () {
  var a = document.documentElement;
  return a.contains ? function (a, b) {
    return b.nodeType !== wysihtml5.ELEMENT_NODE && (b = b.parentNode), a !== b && a.contains(b);
  } : a.compareDocumentPosition ? function (a, b) {
    return !!(16 & a.compareDocumentPosition(b));
  } : void 0;
}(), wysihtml5.dom.convertToList = function () {
  function a(a, b) {
    var c = a.createElement("li");
    return b.appendChild(c), c;
  }

  function b(a, b) {
    return a.createElement(b);
  }

  function c(c, d, e) {
    if ("UL" === c.nodeName || "OL" === c.nodeName || "MENU" === c.nodeName) return c;
    var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = c.ownerDocument,
        p = b(o, d),
        q = c.querySelectorAll("br"),
        r = q.length;

    for (n = 0; r > n; n++) {
      for (i = q[n]; (j = i.parentNode) && j !== c && j.lastChild === i;) {
        if ("block" === wysihtml5.dom.getStyle("display").from(j)) {
          j.removeChild(i);
          break;
        }

        wysihtml5.dom.insert(i).after(i.parentNode);
      }
    }

    for (f = wysihtml5.lang.array(c.childNodes).get(), g = f.length, n = 0; g > n; n++) {
      m = m || a(o, p), h = f[n], k = "block" === wysihtml5.dom.getStyle("display").from(h), l = "BR" === h.nodeName, !k || e && wysihtml5.dom.hasClass(h, e) ? l ? m = m.firstChild ? null : m : m.appendChild(h) : (m = m.firstChild ? a(o, p) : m, m.appendChild(h), m = null);
    }

    return 0 === f.length && a(o, p), c.parentNode.replaceChild(p, c), p;
  }

  return c;
}(), wysihtml5.dom.copyAttributes = function (a) {
  return {
    from: function from(b) {
      return {
        to: function to(c) {
          for (var d, e = 0, f = a.length; f > e; e++) {
            d = a[e], void 0 !== b[d] && "" !== b[d] && (c[d] = b[d]);
          }

          return {
            andTo: arguments.callee
          };
        }
      };
    }
  };
}, function (a) {
  var b = ["-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing"],
      c = function c(b) {
    return d(b) ? parseInt(a.getStyle("width").from(b), 10) < b.offsetWidth : !1;
  },
      d = function d(c) {
    for (var d = 0, e = b.length; e > d; d++) {
      if ("border-box" === a.getStyle(b[d]).from(c)) return b[d];
    }
  };

  a.copyStyles = function (d) {
    return {
      from: function from(e) {
        c(e) && (d = wysihtml5.lang.array(d).without(b));

        for (var f, g = "", h = d.length, i = 0; h > i; i++) {
          f = d[i], g += f + ":" + a.getStyle(f).from(e) + ";";
        }

        return {
          to: function to(b) {
            return a.setStyles(g).on(b), {
              andTo: arguments.callee
            };
          }
        };
      }
    };
  };
}(wysihtml5.dom), function (a) {
  a.dom.delegate = function (b, c, d, e) {
    return a.dom.observe(b, d, function (d) {
      for (var f = d.target, g = a.lang.array(b.querySelectorAll(c)); f && f !== b;) {
        if (g.contains(f)) {
          e.call(f, d);
          break;
        }

        f = f.parentNode;
      }
    });
  };
}(wysihtml5), function (a) {
  a.dom.domNode = function (b) {
    var c = [a.ELEMENT_NODE, a.TEXT_NODE],
        d = function d(b) {
      return b.nodeType === a.TEXT_NODE && /^\s*$/g.test(b.data);
    };

    return {
      prev: function prev(e) {
        var f = b.previousSibling,
            g = e && e.nodeTypes ? e.nodeTypes : c;
        return f ? !a.lang.array(g).contains(f.nodeType) || e && e.ignoreBlankTexts && d(f) ? a.dom.domNode(f).prev(e) : f : null;
      },
      next: function next(e) {
        var f = b.nextSibling,
            g = e && e.nodeTypes ? e.nodeTypes : c;
        return f ? !a.lang.array(g).contains(f.nodeType) || e && e.ignoreBlankTexts && d(f) ? a.dom.domNode(f).next(e) : f : null;
      }
    };
  };
}(wysihtml5), wysihtml5.dom.getAsDom = function () {
  var a = function a(_a, b) {
    var c = b.createElement("div");
    c.style.display = "none", b.body.appendChild(c);

    try {
      c.innerHTML = _a;
    } catch (d) {}

    return b.body.removeChild(c), c;
  },
      b = function b(a) {
    if (!a._wysihtml5_supportsHTML5Tags) {
      for (var b = 0, d = c.length; d > b; b++) {
        a.createElement(c[b]);
      }

      a._wysihtml5_supportsHTML5Tags = !0;
    }
  },
      c = ["abbr", "article", "aside", "audio", "bdi", "canvas", "command", "datalist", "details", "figcaption", "figure", "footer", "header", "hgroup", "keygen", "mark", "meter", "nav", "output", "progress", "rp", "rt", "ruby", "svg", "section", "source", "summary", "time", "track", "video", "wbr"];

  return function (c, d) {
    d = d || document;
    var e;
    return "object" == _typeof(c) && c.nodeType ? (e = d.createElement("div"), e.appendChild(c)) : wysihtml5.browser.supportsHTML5Tags(d) ? (e = d.createElement("div"), e.innerHTML = c) : (b(d), e = a(c, d)), e;
  };
}(), wysihtml5.dom.getParentElement = function () {
  function a(a, b) {
    return b && b.length ? "string" == typeof b ? a === b : wysihtml5.lang.array(b).contains(a) : !0;
  }

  function b(a) {
    return a.nodeType === wysihtml5.ELEMENT_NODE;
  }

  function c(a, b, c) {
    var d = (a.className || "").match(c) || [];
    return b ? d[d.length - 1] === b : !!d.length;
  }

  function d(a, b, c) {
    var d = (a.getAttribute("style") || "").match(c) || [];
    return b ? d[d.length - 1] === b : !!d.length;
  }

  return function (e, f, g, h) {
    var i = f.cssStyle || f.styleRegExp,
        j = f.className || f.classRegExp;

    for (g = g || 50; g-- && e && "BODY" !== e.nodeName && (!h || e !== h);) {
      if (b(e) && a(e.nodeName, f.nodeName) && (!i || d(e, f.cssStyle, f.styleRegExp)) && (!j || c(e, f.className, f.classRegExp))) return e;
      e = e.parentNode;
    }

    return null;
  };
}(), wysihtml5.dom.getStyle = function () {
  function a(a) {
    return a.replace(c, function (a) {
      return a.charAt(1).toUpperCase();
    });
  }

  var b = {
    "float": "styleFloat" in document.createElement("div").style ? "styleFloat" : "cssFloat"
  },
      c = /\-[a-z]/g;
  return function (c) {
    return {
      from: function from(d) {
        var e, f, g, h, i, j, k, l, m;

        if (d.nodeType === wysihtml5.ELEMENT_NODE) {
          if (e = d.ownerDocument, f = b[c] || a(c), g = d.style, h = d.currentStyle, i = g[f], i) return i;
          if (h) try {
            return h[f];
          } catch (n) {}
          return j = e.defaultView || e.parentWindow, k = ("height" === c || "width" === c) && "TEXTAREA" === d.nodeName, j.getComputedStyle ? (k && (l = g.overflow, g.overflow = "hidden"), m = j.getComputedStyle(d, null).getPropertyValue(c), k && (g.overflow = l || ""), m) : void 0;
        }
      }
    };
  };
}(), wysihtml5.dom.getTextNodes = function (a, b) {
  var c = [];

  for (a = a.firstChild; a; a = a.nextSibling) {
    3 == a.nodeType ? b && /^\s*$/.test(a.innerText || a.textContent) || c.push(a) : c = c.concat(wysihtml5.dom.getTextNodes(a, b));
  }

  return c;
}, wysihtml5.dom.hasElementWithTagName = function () {
  function a(a) {
    return a._wysihtml5_identifier || (a._wysihtml5_identifier = c++);
  }

  var b = {},
      c = 1;
  return function (c, d) {
    var e = a(c) + ":" + d,
        f = b[e];
    return f || (f = b[e] = c.getElementsByTagName(d)), f.length > 0;
  };
}(), function (a) {
  function b(a) {
    return a._wysihtml5_identifier || (a._wysihtml5_identifier = d++);
  }

  var c = {},
      d = 1;

  a.dom.hasElementWithClassName = function (d, e) {
    if (!a.browser.supportsNativeGetElementsByClassName()) return !!d.querySelector("." + e);
    var f = b(d) + ":" + e,
        g = c[f];
    return g || (g = c[f] = d.getElementsByClassName(e)), g.length > 0;
  };
}(wysihtml5), wysihtml5.dom.insert = function (a) {
  return {
    after: function after(b) {
      b.parentNode.insertBefore(a, b.nextSibling);
    },
    before: function before(b) {
      b.parentNode.insertBefore(a, b);
    },
    into: function into(b) {
      b.appendChild(a);
    }
  };
}, wysihtml5.dom.insertCSS = function (a) {
  return a = a.join("\n"), {
    into: function into(b) {
      var c,
          d,
          e = b.createElement("style");
      return e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(b.createTextNode(a)), c = b.querySelector("head link"), c ? (c.parentNode.insertBefore(e, c), void 0) : (d = b.querySelector("head"), d && d.appendChild(e), void 0);
    }
  };
}, function (a) {
  a.dom.lineBreaks = function (b) {
    function c(a) {
      return "BR" === a.nodeName;
    }

    function d(b) {
      return c(b) ? !0 : "block" === a.dom.getStyle("display").from(b) ? !0 : !1;
    }

    return {
      add: function add() {
        var c = b.ownerDocument,
            e = a.dom.domNode(b).next({
          ignoreBlankTexts: !0
        }),
            f = a.dom.domNode(b).prev({
          ignoreBlankTexts: !0
        });
        e && !d(e) && a.dom.insert(c.createElement("br")).after(b), f && !d(f) && a.dom.insert(c.createElement("br")).before(b);
      },
      remove: function remove() {
        var d = a.dom.domNode(b).next({
          ignoreBlankTexts: !0
        }),
            e = a.dom.domNode(b).prev({
          ignoreBlankTexts: !0
        });
        d && c(d) && d.parentNode.removeChild(d), e && c(e) && e.parentNode.removeChild(e);
      }
    };
  };
}(wysihtml5), wysihtml5.dom.observe = function (a, b, c) {
  b = "string" == typeof b ? [b] : b;

  for (var d, e, f = 0, g = b.length; g > f; f++) {
    e = b[f], a.addEventListener ? a.addEventListener(e, c, !1) : (d = function d(b) {
      "target" in b || (b.target = b.srcElement), b.preventDefault = b.preventDefault || function () {
        this.returnValue = !1;
      }, b.stopPropagation = b.stopPropagation || function () {
        this.cancelBubble = !0;
      }, c.call(a, b);
    }, a.attachEvent("on" + e, d));
  }

  return {
    stop: function stop() {
      for (var e, f = 0, g = b.length; g > f; f++) {
        e = b[f], a.removeEventListener ? a.removeEventListener(e, c, !1) : a.detachEvent("on" + e, d);
      }
    }
  };
}, wysihtml5.dom.parse = function (a, b) {
  function c(a, b) {
    var c, f, g, h, i, j, k, l, m;

    for (wysihtml5.lang.object(t).merge(s).merge(b.rules).get(), c = b.context || a.ownerDocument || document, f = c.createDocumentFragment(), g = "string" == typeof a, h = !1, b.clearInternals === !0 && (h = !0), i = g ? wysihtml5.dom.getAsDom(a, c) : a, t.selectors && e(i, t.selectors); i.firstChild;) {
      k = i.firstChild, j = d(k, b.cleanUp, h, b.uneditableClass), j && f.appendChild(j), k !== j && i.removeChild(k);
    }

    if (b.unjoinNbsps) for (l = wysihtml5.dom.getTextNodes(f), m = l.length; m--;) {
      l[m].nodeValue = l[m].nodeValue.replace(/([\S\u00A0])\u00A0/gi, "$1 ");
    }
    return i.innerHTML = "", i.appendChild(f), g ? wysihtml5.quirks.getCorrectInnerHTML(i) : i;
  }

  function d(a, b, c, e) {
    var f,
        g,
        h,
        i = a.nodeType,
        j = a.childNodes,
        k = j.length,
        l = p[i],
        m = 0;
    if (e && 1 === i && wysihtml5.dom.hasClass(a, e)) return a;

    if (g = l && l(a, c), !g) {
      if (g === !1) {
        for (f = a.ownerDocument.createDocumentFragment(), m = k; m--;) {
          j[m] && (h = d(j[m], b, c, e), h && (j[m] === h && m--, f.insertBefore(h, f.firstChild)));
        }

        return "block" === wysihtml5.dom.getStyle("display").from(a) && f.appendChild(a.ownerDocument.createElement("br")), wysihtml5.lang.array(["div", "pre", "p", "table", "td", "th", "ul", "ol", "li", "dd", "dl", "footer", "header", "section", "h1", "h2", "h3", "h4", "h5", "h6"]).contains(a.nodeName.toLowerCase()) && a.parentNode.lastChild !== a && (a.nextSibling && 3 === a.nextSibling.nodeType && /^\s/.test(a.nextSibling.nodeValue) || f.appendChild(a.ownerDocument.createTextNode(" "))), f.normalize && f.normalize(), f;
      }

      return null;
    }

    for (m = 0; k > m; m++) {
      j[m] && (h = d(j[m], b, c, e), h && (j[m] === h && m--, g.appendChild(h)));
    }

    if (b && g.nodeName.toLowerCase() === q && (!g.childNodes.length || /^\s*$/gi.test(g.innerHTML) && (c || "_wysihtml5-temp-placeholder" !== a.className && "rangySelectionBoundary" !== a.className) || !g.attributes.length)) {
      for (f = g.ownerDocument.createDocumentFragment(); g.firstChild;) {
        f.appendChild(g.firstChild);
      }

      return f.normalize && f.normalize(), f;
    }

    return g.normalize && g.normalize(), g;
  }

  function e(a, b) {
    var c, d, e, f;

    for (c in b) {
      if (b.hasOwnProperty(c)) for (wysihtml5.lang.object(b[c]).isFunction() ? d = b[c] : "string" == typeof b[c] && z[b[c]] && (d = z[b[c]]), e = a.querySelectorAll(c), f = e.length; f--;) {
        d(e[f]);
      }
    }
  }

  function f(a, b) {
    var c,
        d,
        e,
        f = t.tags,
        h = a.nodeName.toLowerCase(),
        j = a.scopeName;
    if (a._wysihtml5) return null;
    if (a._wysihtml5 = 1, "wysihtml5-temp" === a.className) return null;

    if (j && "HTML" != j && (h = j + ":" + h), "outerHTML" in a && (wysihtml5.browser.autoClosesUnclosedTags() || "P" !== a.nodeName || "</p>" === a.outerHTML.slice(-4).toLowerCase() || (h = "div")), h in f) {
      if (c = f[h], !c || c.remove) return null;
      if (c.unwrap) return !1;
      c = "string" == typeof c ? {
        rename_tag: c
      } : c;
    } else {
      if (!a.firstChild) return null;
      c = {
        rename_tag: q
      };
    }

    if (c.one_of_type && !g(a, t, c.one_of_type, b)) {
      if (!c.remove_action) return null;
      if ("unwrap" === c.remove_action) return !1;
      if ("rename" !== c.remove_action) return null;
      e = c.remove_action_rename_to || q;
    }

    return d = a.ownerDocument.createElement(e || c.rename_tag || h), m(a, d, c, b), i(a, d, c), a = null, d.normalize && d.normalize(), d;
  }

  function g(a, b, c, d) {
    var e, f;
    if ("SPAN" === a.nodeName && !d && ("_wysihtml5-temp-placeholder" === a.className || "rangySelectionBoundary" === a.className)) return !0;

    for (f in c) {
      if (c.hasOwnProperty(f) && b.type_definitions && b.type_definitions[f] && (e = b.type_definitions[f], h(a, e))) return !0;
    }

    return !1;
  }

  function h(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = a.getAttribute("class"),
        l = a.getAttribute("style");
    if (b.methods) for (h in b.methods) {
      if (b.methods.hasOwnProperty(h) && y[h] && y[h](a)) return !0;
    }
    if (k && b.classes) for (k = k.replace(/^\s+/g, "").replace(/\s+$/g, "").split(r), c = k.length, i = 0; c > i; i++) {
      if (b.classes[k[i]]) return !0;
    }

    if (l && b.styles) {
      l = l.split(";");

      for (d in b.styles) {
        if (b.styles.hasOwnProperty(d)) for (j = l.length; j--;) {
          if (g = l[j].split(":"), g[0].replace(/\s/g, "").toLowerCase() === d && (b.styles[d] === !0 || 1 === b.styles[d] || wysihtml5.lang.array(b.styles[d]).contains(g[1].replace(/\s/g, "").toLowerCase()))) return !0;
        }
      }
    }

    if (b.attrs) for (e in b.attrs) {
      if (b.attrs.hasOwnProperty(e) && (f = wysihtml5.dom.getAttribute(a, e), "string" == typeof f && f.search(b.attrs[e]) > -1)) return !0;
    }
    return !1;
  }

  function i(a, b, c) {
    var d, e;
    if (c && c.keep_styles) for (d in c.keep_styles) {
      if (c.keep_styles.hasOwnProperty(d)) {
        if (e = "float" === d ? a.style.styleFloat || a.style.cssFloat : a.style[d], c.keep_styles[d] instanceof RegExp && !c.keep_styles[d].test(e)) continue;
        "float" === d ? b.style[a.style.styleFloat ? "styleFloat" : "cssFloat"] = e : a.style[d] && (b.style[d] = e);
      }
    }
  }

  function j(a, b) {
    var c,
        d = [];

    for (c in b) {
      b.hasOwnProperty(c) && 0 === c.indexOf(a) && d.push(c);
    }

    return d;
  }

  function k(a, b, c, d) {
    var e,
        f = v[c];
    return f && (b || "alt" === a && "IMG" == d) && (e = f(b), "string" == typeof e) ? e : !1;
  }

  function l(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = wysihtml5.lang.object(t.attributes || {}).clone(),
        i = wysihtml5.lang.object(h).merge(wysihtml5.lang.object(b || {}).clone()).get(),
        l = {},
        m = wysihtml5.dom.getAttributes(a);

    for (c in i) {
      if (/\*$/.test(c)) for (e = j(c.slice(0, -1), m), f = 0, g = e.length; g > f; f++) {
        d = k(e[f], m[e[f]], i[c], a.nodeName), d !== !1 && (l[e[f]] = d);
      } else d = k(c, m[c], i[c], a.nodeName), d !== !1 && (l[c] = d);
    }

    return l;
  }

  function m(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = c.set_class,
        m = c.add_class,
        n = c.add_style,
        o = c.set_attributes,
        p = t.classes,
        q = 0,
        s = [],
        u = [],
        v = [],
        y = [];
    if (o && (j = wysihtml5.lang.object(o).clone()), j = wysihtml5.lang.object(j).merge(l(a, c.check_attributes)).get(), k && s.push(k), m) for (h in m) {
      i = x[m[h]], i && (g = i(wysihtml5.dom.getAttribute(a, h)), "string" == typeof g && s.push(g));
    }
    if (n) for (h in n) {
      i = w[n[h]], i && (newStyle = i(wysihtml5.dom.getAttribute(a, h)), "string" == typeof newStyle && u.push(newStyle));
    }
    if ("string" == typeof p && "any" === p && a.getAttribute("class")) {
      if (t.classes_blacklist) {
        for (y = a.getAttribute("class"), y && (s = s.concat(y.split(r))), e = s.length; e > q; q++) {
          f = s[q], t.classes_blacklist[f] || v.push(f);
        }

        v.length && (j["class"] = wysihtml5.lang.array(v).unique().join(" "));
      } else j["class"] = a.getAttribute("class");
    } else {
      for (d || (p["_wysihtml5-temp-placeholder"] = 1, p._rangySelectionBoundary = 1, p["wysiwyg-tmp-selected-cell"] = 1), y = a.getAttribute("class"), y && (s = s.concat(y.split(r))), e = s.length; e > q; q++) {
        f = s[q], p[f] && v.push(f);
      }

      v.length && (j["class"] = wysihtml5.lang.array(v).unique().join(" "));
    }
    j["class"] && d && (j["class"] = j["class"].replace("wysiwyg-tmp-selected-cell", ""), /^\s*$/g.test(j["class"]) && delete j["class"]), u.length && (j.style = wysihtml5.lang.array(u).unique().join(" "));

    for (h in j) {
      try {
        b.setAttribute(h, j[h]);
      } catch (z) {}
    }

    j.src && (void 0 !== j.width && b.setAttribute("width", j.width), void 0 !== j.height && b.setAttribute("height", j.height));
  }

  function n(a) {
    var b,
        c = a.nextSibling;
    return c && c.nodeType === wysihtml5.TEXT_NODE ? (c.data = a.data.replace(u, "") + c.data.replace(u, ""), void 0) : (b = a.data.replace(u, ""), a.ownerDocument.createTextNode(b));
  }

  function o(a) {
    return t.comments ? a.ownerDocument.createComment(a.nodeValue) : void 0;
  }

  var p = {
    1: f,
    3: n,
    8: o
  },
      q = "span",
      r = /\s+/,
      s = {
    tags: {},
    classes: {}
  },
      t = {},
      u = /\uFEFF/g,
      v = {
    url: function () {
      var a = /^https?:\/\//i;
      return function (b) {
        return b && b.match(a) ? b.replace(a, function (a) {
          return a.toLowerCase();
        }) : null;
      };
    }(),
    src: function () {
      var a = /^(\/|https?:\/\/)/i;
      return function (b) {
        return b && b.match(a) ? b.replace(a, function (a) {
          return a.toLowerCase();
        }) : null;
      };
    }(),
    href: function () {
      var a = /^(#|\/|https?:\/\/|mailto:)/i;
      return function (b) {
        return b && b.match(a) ? b.replace(a, function (a) {
          return a.toLowerCase();
        }) : null;
      };
    }(),
    alt: function () {
      var a = /[^ a-z0-9_\-]/gi;
      return function (b) {
        return b ? b.replace(a, "") : "";
      };
    }(),
    numbers: function () {
      var a = /\D/g;
      return function (b) {
        return b = (b || "").replace(a, ""), b || null;
      };
    }(),
    any: function () {
      return function (a) {
        return a;
      };
    }()
  },
      w = {
    align_text: function () {
      var a = {
        left: "text-align: left;",
        right: "text-align: right;",
        center: "text-align: center;"
      };
      return function (b) {
        return a[(b + "").toLowerCase()];
      };
    }()
  },
      x = {
    align_img: function () {
      var a = {
        left: "wysiwyg-float-left",
        right: "wysiwyg-float-right"
      };
      return function (b) {
        return a[(b + "").toLowerCase()];
      };
    }(),
    align_text: function () {
      var a = {
        left: "wysiwyg-text-align-left",
        right: "wysiwyg-text-align-right",
        center: "wysiwyg-text-align-center",
        justify: "wysiwyg-text-align-justify"
      };
      return function (b) {
        return a[(b + "").toLowerCase()];
      };
    }(),
    clear_br: function () {
      var a = {
        left: "wysiwyg-clear-left",
        right: "wysiwyg-clear-right",
        both: "wysiwyg-clear-both",
        all: "wysiwyg-clear-both"
      };
      return function (b) {
        return a[(b + "").toLowerCase()];
      };
    }(),
    size_font: function () {
      var a = {
        1: "wysiwyg-font-size-xx-small",
        2: "wysiwyg-font-size-small",
        3: "wysiwyg-font-size-medium",
        4: "wysiwyg-font-size-large",
        5: "wysiwyg-font-size-x-large",
        6: "wysiwyg-font-size-xx-large",
        7: "wysiwyg-font-size-xx-large",
        "-": "wysiwyg-font-size-smaller",
        "+": "wysiwyg-font-size-larger"
      };
      return function (b) {
        return a[(b + "").charAt(0)];
      };
    }()
  },
      y = {
    has_visible_contet: function () {
      var a,
          b = ["img", "video", "picture", "br", "script", "noscript", "style", "table", "iframe", "object", "embed", "audio", "svg", "input", "button", "select", "textarea", "canvas"];
      return function (c) {
        if (a = (c.innerText || c.textContent).replace(/\s/g, ""), a && a.length > 0) return !0;

        for (var d = b.length; d--;) {
          if (c.querySelector(b[d])) return !0;
        }

        return c.offsetWidth && c.offsetWidth > 0 && c.offsetHeight && c.offsetHeight > 0 ? !0 : !1;
      };
    }()
  },
      z = {
    unwrap: function unwrap(a) {
      wysihtml5.dom.unwrap(a);
    },
    remove: function remove(a) {
      a.parentNode.removeChild(a);
    }
  };
  return c(a, b);
}, wysihtml5.dom.removeEmptyTextNodes = function (a) {
  for (var b, c = wysihtml5.lang.array(a.childNodes).get(), d = c.length, e = 0; d > e; e++) {
    b = c[e], b.nodeType === wysihtml5.TEXT_NODE && "" === b.data && b.parentNode.removeChild(b);
  }
}, wysihtml5.dom.renameElement = function (a, b) {
  for (var c, d = a.ownerDocument.createElement(b); c = a.firstChild;) {
    d.appendChild(c);
  }

  return wysihtml5.dom.copyAttributes(["align", "className"]).from(a).to(d), a.parentNode.replaceChild(d, a), d;
}, wysihtml5.dom.replaceWithChildNodes = function (a) {
  if (a.parentNode) {
    if (!a.firstChild) return a.parentNode.removeChild(a), void 0;

    for (var b = a.ownerDocument.createDocumentFragment(); a.firstChild;) {
      b.appendChild(a.firstChild);
    }

    a.parentNode.replaceChild(b, a), a = b = null;
  }
}, function (a) {
  function b(b) {
    return "block" === a.getStyle("display").from(b);
  }

  function c(a) {
    return "BR" === a.nodeName;
  }

  function d(a) {
    var b = a.ownerDocument.createElement("br");
    a.appendChild(b);
  }

  function e(a, e) {
    if (a.nodeName.match(/^(MENU|UL|OL)$/)) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l = a.ownerDocument,
          m = l.createDocumentFragment(),
          n = wysihtml5.dom.domNode(a).prev({
        ignoreBlankTexts: !0
      });
      if (e) for (!n || b(n) || c(n) || d(m); k = a.firstElementChild || a.firstChild;) {
        for (g = k.lastChild; f = k.firstChild;) {
          h = f === g, i = h && !b(f) && !c(f), m.appendChild(f), i && d(m);
        }

        k.parentNode.removeChild(k);
      } else for (; k = a.firstElementChild || a.firstChild;) {
        if (k.querySelector && k.querySelector("div, p, ul, ol, menu, blockquote, h1, h2, h3, h4, h5, h6")) for (; f = k.firstChild;) {
          m.appendChild(f);
        } else {
          for (j = l.createElement("p"); f = k.firstChild;) {
            j.appendChild(f);
          }

          m.appendChild(j);
        }
        k.parentNode.removeChild(k);
      }
      a.parentNode.replaceChild(m, a);
    }
  }

  a.resolveList = e;
}(wysihtml5.dom), function (a) {
  var b = document,
      c = ["parent", "top", "opener", "frameElement", "frames", "localStorage", "globalStorage", "sessionStorage", "indexedDB"],
      d = ["open", "close", "openDialog", "showModalDialog", "alert", "confirm", "prompt", "openDatabase", "postMessage", "XMLHttpRequest", "XDomainRequest"],
      e = ["referrer", "write", "open", "close"];
  a.dom.Sandbox = Base.extend({
    constructor: function constructor(b, c) {
      this.callback = b || a.EMPTY_FUNCTION, this.config = a.lang.object({}).merge(c).get(), this.editableArea = this._createIframe();
    },
    insertInto: function insertInto(a) {
      "string" == typeof a && (a = b.getElementById(a)), a.appendChild(this.editableArea);
    },
    getIframe: function getIframe() {
      return this.editableArea;
    },
    getWindow: function getWindow() {
      this._readyError();
    },
    getDocument: function getDocument() {
      this._readyError();
    },
    destroy: function destroy() {
      var a = this.getIframe();
      a.parentNode.removeChild(a);
    },
    _readyError: function _readyError() {
      throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet");
    },
    _createIframe: function _createIframe() {
      var c = this,
          d = b.createElement("iframe");
      return d.className = "wysihtml5-sandbox", a.dom.setAttributes({
        security: "restricted",
        allowtransparency: "true",
        frameborder: 0,
        width: 0,
        height: 0,
        marginwidth: 0,
        marginheight: 0
      }).on(d), a.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty() && (d.src = "javascript:'<html></html>'"), d.onload = function () {
        d.onreadystatechange = d.onload = null, c._onLoadIframe(d);
      }, d.onreadystatechange = function () {
        /loaded|complete/.test(d.readyState) && (d.onreadystatechange = d.onload = null, c._onLoadIframe(d));
      }, d;
    },
    _onLoadIframe: function _onLoadIframe(f) {
      var g, h, i, j, k, l, m;

      if (a.dom.contains(b.documentElement, f)) {
        if (g = this, h = f.contentWindow, i = f.contentWindow.document, j = b.characterSet || b.charset || "utf-8", k = this._getHtml({
          charset: j,
          stylesheets: this.config.stylesheets
        }), i.open("text/html", "replace"), i.write(k), i.close(), this.getWindow = function () {
          return f.contentWindow;
        }, this.getDocument = function () {
          return f.contentWindow.document;
        }, h.onerror = function (a, b, c) {
          throw Error("wysihtml5.Sandbox: " + a, b, c);
        }, !a.browser.supportsSandboxedIframes()) {
          for (l = 0, m = c.length; m > l; l++) {
            this._unset(h, c[l]);
          }

          for (l = 0, m = d.length; m > l; l++) {
            this._unset(h, d[l], a.EMPTY_FUNCTION);
          }

          for (l = 0, m = e.length; m > l; l++) {
            this._unset(i, e[l]);
          }

          this._unset(i, "cookie", "", !0);
        }

        this.loaded = !0, setTimeout(function () {
          g.callback(g);
        }, 0);
      }
    },
    _getHtml: function _getHtml(b) {
      var c,
          d = b.stylesheets,
          e = "",
          f = 0;
      if (d = "string" == typeof d ? [d] : d, d) for (c = d.length; c > f; f++) {
        e += '<link rel="stylesheet" href="' + d[f] + '">';
      }
      return b.stylesheets = e, a.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(b);
    },
    _unset: function _unset(b, c, d, e) {
      try {
        b[c] = d;
      } catch (f) {}

      try {
        b.__defineGetter__(c, function () {
          return d;
        });
      } catch (f) {}

      if (e) try {
        b.__defineSetter__(c, function () {});
      } catch (f) {}
      if (!a.browser.crashesWhenDefineProperty(c)) try {
        var g = {
          get: function get() {
            return d;
          }
        };
        e && (g.set = function () {}), Object.defineProperty(b, c, g);
      } catch (f) {}
    }
  });
}(wysihtml5), function (a) {
  var b = document;
  a.dom.ContentEditableArea = Base.extend({
    getContentEditable: function getContentEditable() {
      return this.element;
    },
    getWindow: function getWindow() {
      return this.element.ownerDocument.defaultView;
    },
    getDocument: function getDocument() {
      return this.element.ownerDocument;
    },
    constructor: function constructor(b, c, d) {
      this.callback = b || a.EMPTY_FUNCTION, this.config = a.lang.object({}).merge(c).get(), this.element = d ? this._bindElement(d) : this._createElement();
    },
    _createElement: function _createElement() {
      var a = b.createElement("div");
      return a.className = "wysihtml5-sandbox", this._loadElement(a), a;
    },
    _bindElement: function _bindElement(a) {
      return a.className = a.className && "" != a.className ? a.className + " wysihtml5-sandbox" : "wysihtml5-sandbox", this._loadElement(a, !0), a;
    },
    _loadElement: function _loadElement(a, b) {
      var c,
          d = this;
      b || (c = this._getHtml(), a.innerHTML = c), this.getWindow = function () {
        return a.ownerDocument.defaultView;
      }, this.getDocument = function () {
        return a.ownerDocument;
      }, this.loaded = !0, setTimeout(function () {
        d.callback(d);
      }, 0);
    },
    _getHtml: function _getHtml() {
      return "";
    }
  });
}(wysihtml5), function () {
  var a = {
    className: "class"
  };

  wysihtml5.dom.setAttributes = function (b) {
    return {
      on: function on(c) {
        for (var d in b) {
          c.setAttribute(a[d] || d, b[d]);
        }
      }
    };
  };
}(), wysihtml5.dom.setStyles = function (a) {
  return {
    on: function on(b) {
      var c,
          d = b.style;
      if ("string" == typeof a) return d.cssText += ";" + a, void 0;

      for (c in a) {
        "float" === c ? (d.cssFloat = a[c], d.styleFloat = a[c]) : d[c] = a[c];
      }
    }
  };
}, function (a) {
  a.simulatePlaceholder = function (b, c, d) {
    var e = "placeholder",
        f = function f() {
      var b = c.element.offsetWidth > 0 && c.element.offsetHeight > 0;
      c.hasPlaceholderSet() && (c.clear(), c.element.focus(), b && setTimeout(function () {
        var a = c.selection.getSelection();
        a.focusNode && a.anchorNode || c.selection.selectNode(c.element.firstChild || c.element);
      }, 0)), c.placeholderSet = !1, a.removeClass(c.element, e);
    },
        g = function g() {
      c.isEmpty() && (c.placeholderSet = !0, c.setValue(d), a.addClass(c.element, e));
    };

    b.on("set_placeholder", g).on("unset_placeholder", f).on("focus:composer", f).on("paste:composer", f).on("blur:composer", g), g();
  };
}(wysihtml5.dom), function (a) {
  var b = document.documentElement;
  "textContent" in b ? (a.setTextContent = function (a, b) {
    a.textContent = b;
  }, a.getTextContent = function (a) {
    return a.textContent;
  }) : "innerText" in b ? (a.setTextContent = function (a, b) {
    a.innerText = b;
  }, a.getTextContent = function (a) {
    return a.innerText;
  }) : (a.setTextContent = function (a, b) {
    a.nodeValue = b;
  }, a.getTextContent = function (a) {
    return a.nodeValue;
  });
}(wysihtml5.dom), wysihtml5.dom.getAttribute = function (a, b) {
  var c,
      d,
      e,
      f = !wysihtml5.browser.supportsGetAttributeCorrectly();
  return b = b.toLowerCase(), c = a.nodeName, "IMG" == c && "src" == b && wysihtml5.dom.isLoadedImage(a) === !0 ? a.src : f && "outerHTML" in a ? (d = a.outerHTML.toLowerCase(), e = -1 != d.indexOf(" " + b + "="), e ? a.getAttribute(b) : null) : a.getAttribute(b);
}, wysihtml5.dom.getAttributes = function (a) {
  var b,
      c = !wysihtml5.browser.supportsGetAttributeCorrectly(),
      d = a.nodeName,
      e = [];

  for (b in a.attributes) {
    (a.attributes.hasOwnProperty && a.attributes.hasOwnProperty(b) || !a.attributes.hasOwnProperty && Object.prototype.hasOwnProperty.call(a.attributes, b)) && a.attributes[b].specified && ("IMG" == d && "src" == a.attributes[b].name.toLowerCase() && wysihtml5.dom.isLoadedImage(a) === !0 ? e.src = a.src : wysihtml5.lang.array(["rowspan", "colspan"]).contains(a.attributes[b].name.toLowerCase()) && c ? 1 !== a.attributes[b].value && (e[a.attributes[b].name] = a.attributes[b].value) : e[a.attributes[b].name] = a.attributes[b].value);
  }

  return e;
}, wysihtml5.dom.isLoadedImage = function (a) {
  try {
    return a.complete && !a.mozMatchesSelector(":-moz-broken");
  } catch (b) {
    if (a.complete && "complete" === a.readyState) return !0;
  }
}, function (a) {
  function b(a, b) {
    var c,
        d,
        e,
        f,
        g = [];

    for (d = 0, e = a.length; e > d; d++) {
      if (c = a[d].querySelectorAll(b), c) for (f = c.length; f--; g.unshift(c[f])) {
        ;
      }
    }

    return g;
  }

  function d(a) {
    a.parentNode.removeChild(a);
  }

  function e(a, b) {
    a.parentNode.insertBefore(b, a.nextSibling);
  }

  function f(a, b) {
    for (var c = a.nextSibling; 1 != c.nodeType;) {
      if (c = c.nextSibling, !b || b == c.tagName.toLowerCase()) return c;
    }

    return null;
  }

  var g = a.dom,
      h = function h(a) {
    this.el = a, this.isColspan = !1, this.isRowspan = !1, this.firstCol = !0, this.lastCol = !0, this.firstRow = !0, this.lastRow = !0, this.isReal = !0, this.spanCollection = [], this.modified = !1;
  },
      i = function i(a, b) {
    a ? (this.cell = a, this.table = g.getParentElement(a, {
      nodeName: ["TABLE"]
    })) : b && (this.table = b, this.cell = this.table.querySelectorAll("th, td")[0]);
  };

  i.prototype = {
    addSpannedCellToMap: function addSpannedCellToMap(a, b, c, d, e, f) {
      var g,
          i,
          j = [],
          k = c + (f ? parseInt(f, 10) - 1 : 0),
          l = d + (e ? parseInt(e, 10) - 1 : 0);

      for (g = c; k >= g; g++) {
        for (void 0 === b[g] && (b[g] = []), i = d; l >= i; i++) {
          b[g][i] = new h(a), b[g][i].isColspan = e && parseInt(e, 10) > 1, b[g][i].isRowspan = f && parseInt(f, 10) > 1, b[g][i].firstCol = i == d, b[g][i].lastCol = i == l, b[g][i].firstRow = g == c, b[g][i].lastRow = g == k, b[g][i].isReal = i == d && g == c, b[g][i].spanCollection = j, j.push(b[g][i]);
        }
      }
    },
    setCellAsModified: function setCellAsModified(a) {
      if (a.modified = !0, a.spanCollection.length > 0) for (var b = 0, c = a.spanCollection.length; c > b; b++) {
        a.spanCollection[b].modified = !0;
      }
    },
    setTableMap: function setTableMap() {
      var a,
          b,
          c,
          d,
          e,
          f,
          i,
          j,
          k = [],
          l = this.getTableRows();

      for (a = 0; a < l.length; a++) {
        for (b = l[a], c = this.getRowCells(b), f = 0, void 0 === k[a] && (k[a] = []), d = 0; d < c.length; d++) {
          for (e = c[d]; void 0 !== k[a][f];) {
            f++;
          }

          i = g.getAttribute(e, "colspan"), j = g.getAttribute(e, "rowspan"), i || j ? (this.addSpannedCellToMap(e, k, a, f, i, j), f += i ? parseInt(i, 10) : 1) : (k[a][f] = new h(e), f++);
        }
      }

      return this.map = k, k;
    },
    getRowCells: function getRowCells(c) {
      var d = this.table.querySelectorAll("table"),
          e = d ? b(d, "th, td") : [],
          f = c.querySelectorAll("th, td"),
          g = e.length > 0 ? a.lang.array(f).without(e) : f;
      return g;
    },
    getTableRows: function getTableRows() {
      var c = this.table.querySelectorAll("table"),
          d = c ? b(c, "tr") : [],
          e = this.table.querySelectorAll("tr"),
          f = d.length > 0 ? a.lang.array(e).without(d) : e;
      return f;
    },
    getMapIndex: function getMapIndex(a) {
      var b,
          c,
          d = this.map.length,
          e = this.map && this.map[0] ? this.map[0].length : 0;

      for (b = 0; d > b; b++) {
        for (c = 0; e > c; c++) {
          if (this.map[b][c].el === a) return {
            row: b,
            col: c
          };
        }
      }

      return !1;
    },
    getElementAtIndex: function getElementAtIndex(a) {
      return this.setTableMap(), this.map[a.row] && this.map[a.row][a.col] && this.map[a.row][a.col].el ? this.map[a.row][a.col].el : null;
    },
    getMapElsTo: function getMapElsTo(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = [];
      if (this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(a), (this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) && (b = this.idx_start, this.idx_start = this.idx_end, this.idx_end = b), this.idx_start.col > this.idx_end.col && (c = this.idx_start.col, this.idx_start.col = this.idx_end.col, this.idx_end.col = c), null != this.idx_start && null != this.idx_end) for (d = this.idx_start.row, e = this.idx_end.row; e >= d; d++) {
        for (f = this.idx_start.col, g = this.idx_end.col; g >= f; f++) {
          h.push(this.map[d][f].el);
        }
      }
      return h;
    },
    orderSelectionEnds: function orderSelectionEnds(a) {
      var b, c;
      return this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(a), (this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) && (b = this.idx_start, this.idx_start = this.idx_end, this.idx_end = b), this.idx_start.col > this.idx_end.col && (c = this.idx_start.col, this.idx_start.col = this.idx_end.col, this.idx_end.col = c), {
        start: this.map[this.idx_start.row][this.idx_start.col].el,
        end: this.map[this.idx_end.row][this.idx_end.col].el
      };
    },
    createCells: function createCells(a, b, c) {
      var d,
          e,
          f,
          g = this.table.ownerDocument,
          h = g.createDocumentFragment();

      for (e = 0; b > e; e++) {
        if (d = g.createElement(a), c) for (f in c) {
          c.hasOwnProperty(f) && d.setAttribute(f, c[f]);
        }
        d.appendChild(document.createTextNode(" ")), h.appendChild(d);
      }

      return h;
    },
    correctColIndexForUnreals: function correctColIndexForUnreals(a, b) {
      var c,
          d,
          e = this.map[b],
          f = -1;

      for (c = 0, d = a; a > c; c++) {
        e[c].isReal && f++;
      }

      return f;
    },
    getLastNewCellOnRow: function getLastNewCellOnRow(a, b) {
      var c,
          d,
          e,
          f,
          g = this.getRowCells(a);

      for (e = 0, f = g.length; f > e; e++) {
        if (c = g[e], d = this.getMapIndex(c), d === !1 || void 0 !== b && d.row != b) return c;
      }

      return null;
    },
    removeEmptyTable: function removeEmptyTable() {
      var a = this.table.querySelectorAll("td, th");
      return a && 0 != a.length ? !1 : (d(this.table), !0);
    },
    splitRowToCells: function splitRowToCells(a) {
      var b, c, d;
      a.isColspan && (b = parseInt(g.getAttribute(a.el, "colspan") || 1, 10), c = a.el.tagName.toLowerCase(), b > 1 && (d = this.createCells(c, b - 1), e(a.el, d)), a.el.removeAttribute("colspan"));
    },
    getRealRowEl: function getRealRowEl(a, b) {
      var c,
          d,
          e = null,
          f = null;

      for (b = b || this.idx, c = 0, d = this.map[b.row].length; d > c; c++) {
        if (f = this.map[b.row][c], f.isReal && (e = g.getParentElement(f.el, {
          nodeName: ["TR"]
        }), e)) return e;
      }

      return null === e && a && (e = g.getParentElement(this.map[b.row][b.col].el, {
        nodeName: ["TR"]
      }) || null), e;
    },
    injectRowAt: function injectRowAt(a, b, c, d, f) {
      var h,
          i,
          j = this.getRealRowEl(!1, {
        row: a,
        col: b
      }),
          k = this.createCells(d, c);
      j ? (h = this.correctColIndexForUnreals(b, a), h >= 0 ? e(this.getRowCells(j)[h], k) : j.insertBefore(k, j.firstChild)) : (i = this.table.ownerDocument.createElement("tr"), i.appendChild(k), e(g.getParentElement(f.el, {
        nodeName: ["TR"]
      }), i));
    },
    canMerge: function canMerge(a) {
      var b, c, d, e, f, g;

      for (this.to = a, this.setTableMap(), this.idx_start = this.getMapIndex(this.cell), this.idx_end = this.getMapIndex(this.to), (this.idx_start.row > this.idx_end.row || this.idx_start.row == this.idx_end.row && this.idx_start.col > this.idx_end.col) && (b = this.idx_start, this.idx_start = this.idx_end, this.idx_end = b), this.idx_start.col > this.idx_end.col && (c = this.idx_start.col, this.idx_start.col = this.idx_end.col, this.idx_end.col = c), d = this.idx_start.row, e = this.idx_end.row; e >= d; d++) {
        for (f = this.idx_start.col, g = this.idx_end.col; g >= f; f++) {
          if (this.map[d][f].isColspan || this.map[d][f].isRowspan) return !1;
        }
      }

      return !0;
    },
    decreaseCellSpan: function decreaseCellSpan(a, b) {
      var c = parseInt(g.getAttribute(a.el, b), 10) - 1;
      c >= 1 ? a.el.setAttribute(b, c) : (a.el.removeAttribute(b), "colspan" == b && (a.isColspan = !1), "rowspan" == b && (a.isRowspan = !1), a.firstCol = !0, a.lastCol = !0, a.firstRow = !0, a.lastRow = !0, a.isReal = !0);
    },
    removeSurplusLines: function removeSurplusLines() {
      var a, b, c, e, f, h, i, j;

      if (this.setTableMap(), this.map) {
        for (c = 0, e = this.map.length; e > c; c++) {
          for (a = this.map[c], i = !0, f = 0, h = a.length; h > f; f++) {
            if (b = a[f], !(g.getAttribute(b.el, "rowspan") && parseInt(g.getAttribute(b.el, "rowspan"), 10) > 1 && b.firstRow !== !0)) {
              i = !1;
              break;
            }
          }

          if (i) for (f = 0; h > f; f++) {
            this.decreaseCellSpan(a[f], "rowspan");
          }
        }

        for (j = this.getTableRows(), c = 0, e = j.length; e > c; c++) {
          a = j[c], 0 == a.childNodes.length && /^\s*$/.test(a.textContent || a.innerText) && d(a);
        }
      }
    },
    fillMissingCells: function fillMissingCells() {
      var a,
          b,
          c,
          d = 0,
          f = 0,
          g = null;

      if (this.setTableMap(), this.map) {
        for (d = this.map.length, a = 0; d > a; a++) {
          this.map[a].length > f && (f = this.map[a].length);
        }

        for (b = 0; d > b; b++) {
          for (c = 0; f > c; c++) {
            this.map[b] && !this.map[b][c] && c > 0 && (this.map[b][c] = new h(this.createCells("td", 1)), g = this.map[b][c - 1], g && g.el && g.el.parent && e(this.map[b][c - 1].el, this.map[b][c].el));
          }
        }
      }
    },
    rectify: function rectify() {
      return this.removeEmptyTable() ? !1 : (this.removeSurplusLines(), this.fillMissingCells(), !0);
    },
    unmerge: function unmerge() {
      var a, b, c, d, e, f;

      if (this.rectify() && (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx)) {
        if (a = this.map[this.idx.row][this.idx.col], b = g.getAttribute(a.el, "colspan") ? parseInt(g.getAttribute(a.el, "colspan"), 10) : 1, c = a.el.tagName.toLowerCase(), a.isRowspan) {
          if (d = parseInt(g.getAttribute(a.el, "rowspan"), 10), d > 1) for (e = 1, f = d - 1; f >= e; e++) {
            this.injectRowAt(this.idx.row + e, this.idx.col, b, c, a);
          }
          a.el.removeAttribute("rowspan");
        }

        this.splitRowToCells(a);
      }
    },
    merge: function merge(a) {
      var b, c, e, f, g, h;
      if (this.rectify()) if (this.canMerge(a)) {
        for (b = this.idx_end.row - this.idx_start.row + 1, c = this.idx_end.col - this.idx_start.col + 1, e = this.idx_start.row, f = this.idx_end.row; f >= e; e++) {
          for (g = this.idx_start.col, h = this.idx_end.col; h >= g; g++) {
            e == this.idx_start.row && g == this.idx_start.col ? (b > 1 && this.map[e][g].el.setAttribute("rowspan", b), c > 1 && this.map[e][g].el.setAttribute("colspan", c)) : (/^\s*<br\/?>\s*$/.test(this.map[e][g].el.innerHTML.toLowerCase()) || (this.map[this.idx_start.row][this.idx_start.col].el.innerHTML += " " + this.map[e][g].el.innerHTML), d(this.map[e][g].el));
          }
        }

        this.rectify();
      } else window.console && void 0;
    },
    collapseCellToNextRow: function collapseCellToNextRow(a) {
      var b,
          c,
          d,
          f = this.getMapIndex(a.el),
          h = f.row + 1,
          i = {
        row: h,
        col: f.col
      };
      h < this.map.length && (b = this.getRealRowEl(!1, i), null !== b && (c = this.correctColIndexForUnreals(i.col, i.row), c >= 0 ? e(this.getRowCells(b)[c], a.el) : (d = this.getLastNewCellOnRow(b, h), null !== d ? e(d, a.el) : b.insertBefore(a.el, b.firstChild)), parseInt(g.getAttribute(a.el, "rowspan"), 10) > 2 ? a.el.setAttribute("rowspan", parseInt(g.getAttribute(a.el, "rowspan"), 10) - 1) : a.el.removeAttribute("rowspan")));
    },
    removeRowCell: function removeRowCell(a) {
      a.isReal ? a.isRowspan ? this.collapseCellToNextRow(a) : d(a.el) : parseInt(g.getAttribute(a.el, "rowspan"), 10) > 2 ? a.el.setAttribute("rowspan", parseInt(g.getAttribute(a.el, "rowspan"), 10) - 1) : a.el.removeAttribute("rowspan");
    },
    getRowElementsByCell: function getRowElementsByCell() {
      var a,
          b,
          c,
          d = [];
      if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx !== !1) for (a = this.map[this.idx.row], b = 0, c = a.length; c > b; b++) {
        a[b].isReal && d.push(a[b].el);
      }
      return d;
    },
    getColumnElementsByCell: function getColumnElementsByCell() {
      var a,
          b,
          c = [];
      if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx !== !1) for (a = 0, b = this.map.length; b > a; a++) {
        this.map[a][this.idx.col] && this.map[a][this.idx.col].isReal && c.push(this.map[a][this.idx.col].el);
      }
      return c;
    },
    removeRow: function removeRow() {
      var a,
          b,
          c,
          e = g.getParentElement(this.cell, {
        nodeName: ["TR"]
      });

      if (e) {
        if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx !== !1) for (a = this.map[this.idx.row], b = 0, c = a.length; c > b; b++) {
          a[b].modified || (this.setCellAsModified(a[b]), this.removeRowCell(a[b]));
        }
        d(e);
      }
    },
    removeColCell: function removeColCell(a) {
      a.isColspan ? parseInt(g.getAttribute(a.el, "colspan"), 10) > 2 ? a.el.setAttribute("colspan", parseInt(g.getAttribute(a.el, "colspan"), 10) - 1) : a.el.removeAttribute("colspan") : a.isReal && d(a.el);
    },
    removeColumn: function removeColumn() {
      if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), this.idx !== !1) for (var a = 0, b = this.map.length; b > a; a++) {
        this.map[a][this.idx.col].modified || (this.setCellAsModified(this.map[a][this.idx.col]), this.removeColCell(this.map[a][this.idx.col]));
      }
    },
    remove: function remove(a) {
      if (this.rectify()) {
        switch (a) {
          case "row":
            this.removeRow();
            break;

          case "column":
            this.removeColumn();
        }

        this.rectify();
      }
    },
    addRow: function addRow(a) {
      var b,
          c,
          d,
          f,
          h,
          i = this.table.ownerDocument;

      if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), "below" == a && g.getAttribute(this.cell, "rowspan") && (this.idx.row = this.idx.row + parseInt(g.getAttribute(this.cell, "rowspan"), 10) - 1), this.idx !== !1) {
        for (b = this.map[this.idx.row], c = i.createElement("tr"), d = 0, f = b.length; f > d; d++) {
          b[d].modified || (this.setCellAsModified(b[d]), this.addRowCell(b[d], c, a));
        }

        switch (a) {
          case "below":
            e(this.getRealRowEl(!0), c);
            break;

          case "above":
            h = g.getParentElement(this.map[this.idx.row][this.idx.col].el, {
              nodeName: ["TR"]
            }), h && h.parentNode.insertBefore(c, h);
        }
      }
    },
    addRowCell: function addRowCell(a, b, d) {
      var e = a.isColspan ? {
        colspan: g.getAttribute(a.el, "colspan")
      } : null;
      a.isReal ? "above" != d && a.isRowspan ? a.el.setAttribute("rowspan", parseInt(g.getAttribute(a.el, "rowspan"), 10) + 1) : b.appendChild(this.createCells("td", 1, e)) : "above" != d && a.isRowspan && a.lastRow ? b.appendChild(this.createCells("td", 1, e)) : c.isRowspan && a.el.attr("rowspan", parseInt(g.getAttribute(a.el, "rowspan"), 10) + 1);
    },
    add: function add(a) {
      this.rectify() && (("below" == a || "above" == a) && this.addRow(a), ("before" == a || "after" == a) && this.addColumn(a));
    },
    addColCell: function addColCell(a, b, d) {
      var f,
          h = a.el.tagName.toLowerCase();

      switch (d) {
        case "before":
          f = !a.isColspan || a.firstCol;
          break;

        case "after":
          f = !a.isColspan || a.lastCol || a.isColspan && c.el == this.cell;
      }

      if (f) {
        switch (d) {
          case "before":
            a.el.parentNode.insertBefore(this.createCells(h, 1), a.el);
            break;

          case "after":
            e(a.el, this.createCells(h, 1));
        }

        a.isRowspan && this.handleCellAddWithRowspan(a, b + 1, d);
      } else a.el.setAttribute("colspan", parseInt(g.getAttribute(a.el, "colspan"), 10) + 1);
    },
    addColumn: function addColumn(a) {
      var b, c, d, e;
      if (this.setTableMap(), this.idx = this.getMapIndex(this.cell), "after" == a && g.getAttribute(this.cell, "colspan") && (this.idx.col = this.idx.col + parseInt(g.getAttribute(this.cell, "colspan"), 10) - 1), this.idx !== !1) for (d = 0, e = this.map.length; e > d; d++) {
        b = this.map[d], b[this.idx.col] && (c = b[this.idx.col], c.modified || (this.setCellAsModified(c), this.addColCell(c, d, a)));
      }
    },
    handleCellAddWithRowspan: function handleCellAddWithRowspan(a, b, c) {
      var d,
          h,
          i,
          j,
          k = parseInt(g.getAttribute(this.cell, "rowspan"), 10) - 1,
          l = g.getParentElement(a.el, {
        nodeName: ["TR"]
      }),
          m = a.el.tagName.toLowerCase(),
          n = this.table.ownerDocument;

      for (j = 0; k > j; j++) {
        if (d = this.correctColIndexForUnreals(this.idx.col, b + j), l = f(l, "tr"), l) {
          if (d > 0) switch (c) {
            case "before":
              h = this.getRowCells(l), d > 0 && this.map[b + j][this.idx.col].el != h[d] && d == h.length - 1 ? e(h[d], this.createCells(m, 1)) : h[d].parentNode.insertBefore(this.createCells(m, 1), h[d]);
              break;

            case "after":
              e(this.getRowCells(l)[d], this.createCells(m, 1));
          } else l.insertBefore(this.createCells(m, 1), l.firstChild);
        } else i = n.createElement("tr"), i.appendChild(this.createCells(m, 1)), this.table.appendChild(i);
      }
    }
  }, g.table = {
    getCellsBetween: function getCellsBetween(a, b) {
      var c = new i(a);
      return c.getMapElsTo(b);
    },
    addCells: function addCells(a, b) {
      var c = new i(a);
      c.add(b);
    },
    removeCells: function removeCells(a, b) {
      var c = new i(a);
      c.remove(b);
    },
    mergeCellsBetween: function mergeCellsBetween(a, b) {
      var c = new i(a);
      c.merge(b);
    },
    unmergeCell: function unmergeCell(a) {
      var b = new i(a);
      b.unmerge();
    },
    orderSelectionEnds: function orderSelectionEnds(a, b) {
      var c = new i(a);
      return c.orderSelectionEnds(b);
    },
    indexOf: function indexOf(a) {
      var b = new i(a);
      return b.setTableMap(), b.getMapIndex(a);
    },
    findCell: function findCell(a, b) {
      var c = new i(null, a);
      return c.getElementAtIndex(b);
    },
    findRowByCell: function findRowByCell(a) {
      var b = new i(a);
      return b.getRowElementsByCell();
    },
    findColumnByCell: function findColumnByCell(a) {
      var b = new i(a);
      return b.getColumnElementsByCell();
    },
    canMerge: function canMerge(a, b) {
      var c = new i(a);
      return c.canMerge(b);
    }
  };
}(wysihtml5), wysihtml5.dom.query = function (a, b) {
  var c,
      d,
      e,
      f,
      g = [];

  for (a.nodeType && (a = [a]), d = 0, e = a.length; e > d; d++) {
    if (c = a[d].querySelectorAll(b), c) for (f = c.length; f--; g.unshift(c[f])) {
      ;
    }
  }

  return g;
}, wysihtml5.dom.compareDocumentPosition = function () {
  var a = document.documentElement;
  return a.compareDocumentPosition ? function (a, b) {
    return a.compareDocumentPosition(b);
  } : function (a, b) {
    var c, d, e, f, g, h, i, j, k;
    if (c = 9 === a.nodeType ? a : a.ownerDocument, d = 9 === b.nodeType ? b : b.ownerDocument, a === b) return 0;
    if (a === b.ownerDocument) return 20;
    if (a.ownerDocument === b) return 10;
    if (c !== d) return 1;
    if (2 === a.nodeType && a.childNodes && -1 !== wysihtml5.lang.array(a.childNodes).indexOf(b)) return 20;
    if (2 === b.nodeType && b.childNodes && -1 !== wysihtml5.lang.array(b.childNodes).indexOf(a)) return 10;

    for (e = a, f = [], g = null; e;) {
      if (e == b) return 10;
      f.push(e), e = e.parentNode;
    }

    for (e = b, g = null; e;) {
      if (e == a) return 20;
      if (h = wysihtml5.lang.array(f).indexOf(e), -1 !== h) return i = f[h], j = wysihtml5.lang.array(i.childNodes).indexOf(f[h - 1]), k = wysihtml5.lang.array(i.childNodes).indexOf(g), j > k ? 2 : 4;
      g = e, e = e.parentNode;
    }

    return 1;
  };
}(), wysihtml5.dom.unwrap = function (a) {
  if (a.parentNode) {
    for (; a.lastChild;) {
      wysihtml5.dom.insert(a.lastChild).after(a);
    }

    a.parentNode.removeChild(a);
  }
}, wysihtml5.dom.getPastedHtml = function (a) {
  var b;
  return a.clipboardData && (wysihtml5.lang.array(a.clipboardData.types).contains("text/html") ? b = a.clipboardData.getData("text/html") : wysihtml5.lang.array(a.clipboardData.types).contains("text/plain") && (b = wysihtml5.lang.string(a.clipboardData.getData("text/plain")).escapeHTML(!0, !0))), b;
}, wysihtml5.dom.getPastedHtmlWithDiv = function (a, b) {
  var c = a.selection.getBookmark(),
      d = a.element.ownerDocument,
      e = d.createElement("DIV");
  d.body.appendChild(e), e.style.width = "1px", e.style.height = "1px", e.style.overflow = "hidden", e.setAttribute("contenteditable", "true"), e.focus(), setTimeout(function () {
    a.selection.setBookmark(c), b(e.innerHTML), e.parentNode.removeChild(e);
  }, 0);
}, wysihtml5.quirks.cleanPastedHTML = function () {
  var a = function a(_a2) {
    var b = wysihtml5.lang.string(_a2).trim(),
        c = b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    return RegExp("^((?!^" + c + "$).)*$", "i");
  },
      b = function b(_b2, c) {
    var d,
        e,
        f = wysihtml5.lang.object(_b2).clone(!0);

    for (d in f.tags) {
      if (f.tags.hasOwnProperty(d) && f.tags[d].keep_styles) for (e in f.tags[d].keep_styles) {
        f.tags[d].keep_styles.hasOwnProperty(e) && c[e] && (f.tags[d].keep_styles[e] = a(c[e]));
      }
    }

    return f;
  },
      c = function c(a, b) {
    var c, d, e;
    if (!a) return null;

    for (d = 0, e = a.length; e > d; d++) {
      if (a[d].condition || (c = a[d].set), a[d].condition && a[d].condition.test(b)) return a[d].set;
    }

    return c;
  };

  return function (a, d) {
    var e,
        f = {
      color: wysihtml5.dom.getStyle("color").from(d.referenceNode),
      fontSize: wysihtml5.dom.getStyle("font-size").from(d.referenceNode)
    },
        g = b(c(d.rules, a) || {}, f);
    return e = wysihtml5.dom.parse(a, {
      rules: g,
      cleanUp: !0,
      context: d.referenceNode.ownerDocument,
      uneditableClass: d.uneditableClass,
      clearInternals: !0,
      unjoinNbsps: !0
    }), e;
  };
}(), wysihtml5.quirks.ensureProperClearing = function () {
  var a = function a() {
    var a = this;
    setTimeout(function () {
      var b = a.innerHTML.toLowerCase();
      ("<p>&nbsp;</p>" == b || "<p>&nbsp;</p><p>&nbsp;</p>" == b) && (a.innerHTML = "");
    }, 0);
  };

  return function (b) {
    wysihtml5.dom.observe(b.element, ["cut", "keydown"], a);
  };
}(), function (a) {
  var b = "%7E";

  a.quirks.getCorrectInnerHTML = function (c) {
    var d,
        e,
        f,
        g,
        h,
        i = c.innerHTML;
    if (-1 === i.indexOf(b)) return i;

    for (d = c.querySelectorAll("[href*='~'], [src*='~']"), h = 0, g = d.length; g > h; h++) {
      e = d[h].href || d[h].src, f = a.lang.string(e).replace("~").by(b), i = a.lang.string(i).replace(f).by(e);
    }

    return i;
  };
}(wysihtml5), function (a) {
  var b = "wysihtml5-quirks-redraw";

  a.quirks.redraw = function (c) {
    a.dom.addClass(c, b), a.dom.removeClass(c, b);

    try {
      var d = c.ownerDocument;
      d.execCommand("italic", !1, null), d.execCommand("italic", !1, null);
    } catch (e) {}
  };
}(wysihtml5), wysihtml5.quirks.tableCellsSelection = function (a, b) {
  function c() {
    return k.observe(a, "mousedown", function (a) {
      var b = wysihtml5.dom.getParentElement(a.target, {
        nodeName: ["TD", "TH"]
      });
      b && d(b);
    }), l;
  }

  function d(c) {
    l.start = c, l.end = c, l.cells = [c], l.table = k.getParentElement(l.start, {
      nodeName: ["TABLE"]
    }), l.table && (e(), k.addClass(c, m), n = k.observe(a, "mousemove", g), o = k.observe(a, "mouseup", h), b.fire("tableselectstart").fire("tableselectstart:composer"));
  }

  function e() {
    var b, c;
    if (a && (b = a.querySelectorAll("." + m), b.length > 0)) for (c = 0; c < b.length; c++) {
      k.removeClass(b[c], m);
    }
  }

  function f(a) {
    for (var b = 0; b < a.length; b++) {
      k.addClass(a[b], m);
    }
  }

  function g(a) {
    var c,
        d = null,
        g = k.getParentElement(a.target, {
      nodeName: ["TD", "TH"]
    });
    g && l.table && l.start && (d = k.getParentElement(g, {
      nodeName: ["TABLE"]
    }), d && d === l.table && (e(), c = l.end, l.end = g, l.cells = k.table.getCellsBetween(l.start, g), l.cells.length > 1 && b.composer.selection.deselect(), f(l.cells), l.end !== c && b.fire("tableselectchange").fire("tableselectchange:composer")));
  }

  function h() {
    n.stop(), o.stop(), b.fire("tableselect").fire("tableselect:composer"), setTimeout(function () {
      i();
    }, 0);
  }

  function i() {
    var c = k.observe(a.ownerDocument, "click", function (a) {
      c.stop(), k.getParentElement(a.target, {
        nodeName: ["TABLE"]
      }) != l.table && (e(), l.table = null, l.start = null, l.end = null, b.fire("tableunselect").fire("tableunselect:composer"));
    });
  }

  function j(a, c) {
    l.start = a, l.end = c, l.table = k.getParentElement(l.start, {
      nodeName: ["TABLE"]
    }), selectedCells = k.table.getCellsBetween(l.start, l.end), f(selectedCells), i(), b.fire("tableselect").fire("tableselect:composer");
  }

  var k = wysihtml5.dom,
      l = {
    table: null,
    start: null,
    end: null,
    cells: null,
    select: j
  },
      m = "wysiwyg-tmp-selected-cell",
      n = null,
      o = null;
  return c();
}, function (a) {
  var b = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]+)\s*\)/i,
      c = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,
      d = /^#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i,
      e = /^#([0-9a-f])([0-9a-f])([0-9a-f])/i,
      f = function f(a) {
    return RegExp("(^|\\s|;)" + a + "\\s*:\\s*[^;$]+", "gi");
  };

  a.quirks.styleParser = {
    parseColor: function parseColor(g, h) {
      var i,
          j,
          k,
          l = f(h),
          m = g.match(l),
          n = 10;

      if (m) {
        for (k = m.length; k--;) {
          m[k] = a.lang.string(m[k].split(":")[1]).trim();
        }

        if (i = m[m.length - 1], b.test(i)) j = i.match(b);else if (c.test(i)) j = i.match(c);else if (d.test(i)) j = i.match(d), n = 16;else if (e.test(i)) return j = i.match(e), j.shift(), j.push(1), a.lang.array(j).map(function (a, b) {
          return 3 > b ? 16 * parseInt(a, 16) + parseInt(a, 16) : parseFloat(a);
        });
        if (j) return j.shift(), j[3] || j.push(1), a.lang.array(j).map(function (a, b) {
          return 3 > b ? parseInt(a, n) : parseFloat(a);
        });
      }

      return !1;
    },
    unparseColor: function unparseColor(a, b) {
      if (b) {
        if ("hex" == b) return a[0].toString(16).toUpperCase() + a[1].toString(16).toUpperCase() + a[2].toString(16).toUpperCase();
        if ("hash" == b) return "#" + a[0].toString(16).toUpperCase() + a[1].toString(16).toUpperCase() + a[2].toString(16).toUpperCase();
        if ("rgb" == b) return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")";
        if ("rgba" == b) return "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ")";
        if ("csv" == b) return a[0] + "," + a[1] + "," + a[2] + "," + a[3];
      }

      return a[3] && 1 !== a[3] ? "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + ")" : "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")";
    },
    parseFontSize: function parseFontSize(b) {
      var c = b.match(f("font-size"));
      return c ? a.lang.string(c[c.length - 1].split(":")[1]).trim() : !1;
    }
  };
}(wysihtml5), function (a) {
  function b(a) {
    var b = 0;
    if (a.parentNode) do {
      b += a.offsetTop || 0, a = a.offsetParent;
    } while (a);
    return b;
  }

  function c(a, b) {
    for (var c = 0; b !== a;) {
      if (c++, b = b.parentNode, !b) throw Error("not a descendant of ancestor!");
    }

    return c;
  }

  function d(a) {
    if (!a.canSurroundContents()) for (var b = a.commonAncestorContainer, d = c(b, a.startContainer), e = c(b, a.endContainer); !a.canSurroundContents();) {
      d > e ? (a.setStartBefore(a.startContainer), d = c(b, a.startContainer)) : (a.setEndAfter(a.endContainer), e = c(b, a.endContainer));
    }
  }

  var e = a.dom;
  a.Selection = Base.extend({
    constructor: function constructor(a, b, c) {
      window.rangy.init(), this.editor = a, this.composer = a.composer, this.doc = this.composer.doc, this.contain = b, this.unselectableClass = c || !1;
    },
    getBookmark: function getBookmark() {
      var a = this.getRange();
      return a && d(a), a && a.cloneRange();
    },
    setBookmark: function setBookmark(a) {
      a && this.setSelection(a);
    },
    setBefore: function setBefore(a) {
      var b = rangy.createRange(this.doc);
      return b.setStartBefore(a), b.setEndBefore(a), this.setSelection(b);
    },
    setAfter: function setAfter(a) {
      var b = rangy.createRange(this.doc);
      return b.setStartAfter(a), b.setEndAfter(a), this.setSelection(b);
    },
    selectNode: function selectNode(b, c) {
      var d = rangy.createRange(this.doc),
          f = b.nodeType === a.ELEMENT_NODE,
          g = "canHaveHTML" in b ? b.canHaveHTML : "IMG" !== b.nodeName,
          h = f ? b.innerHTML : b.data,
          i = "" === h || h === a.INVISIBLE_SPACE,
          j = e.getStyle("display").from(b),
          k = "block" === j || "list-item" === j;
      if (i && f && g && !c) try {
        b.innerHTML = a.INVISIBLE_SPACE;
      } catch (l) {}
      g ? d.selectNodeContents(b) : d.selectNode(b), g && i && f ? d.collapse(k) : g && i && (d.setStartAfter(b), d.setEndAfter(b)), this.setSelection(d);
    },
    getSelectedNode: function getSelectedNode(a) {
      var b, c;
      return a && this.doc.selection && "Control" === this.doc.selection.type && (c = this.doc.selection.createRange(), c && c.length) ? c.item(0) : (b = this.getSelection(this.doc), b.focusNode === b.anchorNode ? b.focusNode : (c = this.getRange(this.doc), c ? c.commonAncestorContainer : this.doc.body));
    },
    fixSelBorders: function fixSelBorders() {
      var a = this.getRange();
      d(a), this.setSelection(a);
    },
    getSelectedOwnNodes: function getSelectedOwnNodes() {
      var a,
          b,
          c = this.getOwnRanges(),
          d = [];

      for (a = 0, b = c.length; b > a; a++) {
        d.push(c[a].commonAncestorContainer || this.doc.body);
      }

      return d;
    },
    findNodesInSelection: function findNodesInSelection(b) {
      var c,
          d,
          e,
          f = this.getOwnRanges(),
          g = [];

      for (d = 0, e = f.length; e > d; d++) {
        c = f[d].getNodes([1], function (c) {
          return a.lang.array(b).contains(c.nodeName);
        }), g = g.concat(c);
      }

      return g;
    },
    containsUneditable: function containsUneditable() {
      var a,
          b,
          c = this.getOwnUneditables(),
          d = this.getSelection();

      for (a = 0, b = c.length; b > a; a++) {
        if (d.containsNode(c[a])) return !0;
      }

      return !1;
    },
    deleteContents: function deleteContents() {
      var a,
          b = this.getOwnRanges();

      for (a = b.length; a--;) {
        b[a].deleteContents();
      }

      this.setSelection(b[0]);
    },
    getPreviousNode: function getPreviousNode(b, c) {
      var d, e, f;
      return b || (d = this.getSelection(), b = d.anchorNode), b === this.contain ? !1 : (e = b.previousSibling, e === this.contain ? !1 : (e && 3 !== e.nodeType && 1 !== e.nodeType ? e = this.getPreviousNode(e, c) : e && 3 === e.nodeType && /^\s*$/.test(e.textContent) ? e = this.getPreviousNode(e, c) : c && e && 1 === e.nodeType && !a.lang.array(["BR", "HR", "IMG"]).contains(e.nodeName) && /^[\s]*$/.test(e.innerHTML) ? e = this.getPreviousNode(e, c) : e || b === this.contain || (f = b.parentNode, f !== this.contain && (e = this.getPreviousNode(f, c))), e !== this.contain ? e : !1));
    },
    getSelectionParentsByTag: function getSelectionParentsByTag() {
      var b,
          c,
          d,
          e = this.getSelectedOwnNodes(),
          f = [];

      for (c = 0, d = e.length; d > c; c++) {
        b = e[c].nodeName && "LI" === e[c].nodeName ? e[c] : a.dom.getParentElement(e[c], {
          nodeName: ["LI"]
        }, !1, this.contain), b && f.push(b);
      }

      return f.length ? f : null;
    },
    getRangeToNodeEnd: function getRangeToNodeEnd() {
      if (this.isCollapsed()) {
        var a = this.getRange(),
            b = a.startContainer,
            c = a.startOffset,
            d = rangy.createRange(this.doc);
        return d.selectNodeContents(b), d.setStart(b, c), d;
      }
    },
    caretIsLastInSelection: function caretIsLastInSelection() {
      var a = (rangy.createRange(this.doc), this.getSelection(), this.getRangeToNodeEnd().cloneContents()),
          b = a.textContent;
      return /^\s*$/.test(b);
    },
    caretIsFirstInSelection: function caretIsFirstInSelection() {
      var b = rangy.createRange(this.doc),
          c = this.getSelection(),
          d = this.getRange(),
          e = d.startContainer;
      return e.nodeType === a.TEXT_NODE ? this.isCollapsed() && e.nodeType === a.TEXT_NODE && /^\s*$/.test(e.data.substr(0, d.startOffset)) : (b.selectNodeContents(this.getRange().commonAncestorContainer), b.collapse(!0), this.isCollapsed() && (b.startContainer === c.anchorNode || b.endContainer === c.anchorNode) && b.startOffset === c.anchorOffset);
    },
    caretIsInTheBeginnig: function caretIsInTheBeginnig(b) {
      var c = this.getSelection(),
          d = c.anchorNode,
          e = c.anchorOffset;
      return b ? 0 === e && (d.nodeName && d.nodeName === b.toUpperCase() || a.dom.getParentElement(d.parentNode, {
        nodeName: b
      }, 1)) : 0 === e && !this.getPreviousNode(d, !0);
    },
    caretIsBeforeUneditable: function caretIsBeforeUneditable() {
      var a,
          b,
          c,
          d,
          e = this.getSelection(),
          f = e.anchorNode,
          g = e.anchorOffset;
      if (0 === g && (a = this.getPreviousNode(f, !0), a)) for (b = this.getOwnUneditables(), c = 0, d = b.length; d > c; c++) {
        if (a === b[c]) return b[c];
      }
      return !1;
    },
    executeAndRestoreRangy: function executeAndRestoreRangy(a) {
      var b = this.doc.defaultView || this.doc.parentWindow,
          c = rangy.saveSelection(b);
      if (c) try {
        a();
      } catch (d) {
        setTimeout(function () {
          throw d;
        }, 0);
      } else a();
      rangy.restoreSelection(c);
    },
    executeAndRestore: function executeAndRestore(b, c) {
      var d,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n = this.doc.body,
          o = c && n.scrollTop,
          p = c && n.scrollLeft,
          q = "_wysihtml5-temp-placeholder",
          r = '<span class="' + q + '">' + a.INVISIBLE_SPACE + "</span>",
          s = this.getRange(!0);
      if (!s) return b(n, n), void 0;
      s.collapsed || (k = s.cloneRange(), j = k.createContextualFragment(r), k.collapse(!1), k.insertNode(j), k.detach()), i = s.createContextualFragment(r), s.insertNode(i), j && (d = this.contain.querySelectorAll("." + q), s.setStartBefore(d[0]), s.setEndAfter(d[d.length - 1])), this.setSelection(s);

      try {
        b(s.startContainer, s.endContainer);
      } catch (t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }

      if (d = this.contain.querySelectorAll("." + q), d && d.length) for (l = rangy.createRange(this.doc), g = d[0].nextSibling, d.length > 1 && (h = d[d.length - 1].previousSibling), h && g ? (l.setStartBefore(g), l.setEndAfter(h)) : (f = this.doc.createTextNode(a.INVISIBLE_SPACE), e.insert(f).after(d[0]), l.setStartBefore(f), l.setEndAfter(f)), this.setSelection(l), m = d.length; m--;) {
        d[m].parentNode.removeChild(d[m]);
      } else this.contain.focus();
      c && (n.scrollTop = o, n.scrollLeft = p);

      try {
        d.parentNode.removeChild(d);
      } catch (u) {}
    },
    set: function set(a, b) {
      var c = rangy.createRange(this.doc);
      c.setStart(a, b || 0), this.setSelection(c);
    },
    insertHTML: function insertHTML(a) {
      var b,
          c = (rangy.createRange(this.doc), this.doc.createElement("DIV")),
          d = this.doc.createDocumentFragment();

      for (c.innerHTML = a, b = c.lastChild; c.firstChild;) {
        d.appendChild(c.firstChild);
      }

      this.insertNode(d), b && this.setAfter(b);
    },
    insertNode: function insertNode(a) {
      var b = this.getRange();
      b && b.insertNode(a);
    },
    surround: function surround(a) {
      var b,
          c,
          d = this.getOwnRanges(),
          e = [];
      if (0 == d.length) return e;

      for (c = d.length; c--;) {
        b = this.doc.createElement(a.nodeName), e.push(b), a.className && (b.className = a.className), a.cssStyle && b.setAttribute("style", a.cssStyle);

        try {
          d[c].surroundContents(b), this.selectNode(b);
        } catch (f) {
          b.appendChild(d[c].extractContents()), d[c].insertNode(b);
        }
      }

      return e;
    },
    deblockAndSurround: function deblockAndSurround(b) {
      var c,
          d,
          e,
          f = this.doc.createElement("div"),
          g = rangy.createRange(this.doc);
      if (f.className = b.className, this.composer.commands.exec("formatBlock", b.nodeName, b.className), c = this.contain.querySelectorAll("." + b.className), c[0]) for (c[0].parentNode.insertBefore(f, c[0]), g.setStartBefore(c[0]), g.setEndAfter(c[c.length - 1]), d = g.extractContents(); d.firstChild;) {
        if (e = d.firstChild, 1 == e.nodeType && a.dom.hasClass(e, b.className)) {
          for (; e.firstChild;) {
            f.appendChild(e.firstChild);
          }

          "BR" !== e.nodeName && f.appendChild(this.doc.createElement("br")), d.removeChild(e);
        } else f.appendChild(e);
      } else f = null;
      return f;
    },
    scrollIntoView: function scrollIntoView() {
      var c,
          d = this.doc,
          e = 5,
          f = d.documentElement.scrollHeight > d.documentElement.offsetHeight,
          g = d._wysihtml5ScrollIntoViewElement = d._wysihtml5ScrollIntoViewElement || function () {
        var b = d.createElement("span");
        return b.innerHTML = a.INVISIBLE_SPACE, b;
      }();

      f && (this.insertNode(g), c = b(g), g.parentNode.removeChild(g), c >= d.body.scrollTop + d.documentElement.offsetHeight - e && (d.body.scrollTop = c));
    },
    selectLine: function selectLine() {
      a.browser.supportsSelectionModify() ? this._selectLine_W3C() : this.doc.selection && this._selectLine_MSIE();
    },
    _selectLine_W3C: function _selectLine_W3C() {
      var a = this.doc.defaultView,
          b = a.getSelection();
      b.modify("move", "left", "lineboundary"), b.modify("extend", "right", "lineboundary");
    },
    _selectLine_MSIE: function _selectLine_MSIE() {
      var a,
          b,
          c,
          d,
          e,
          f = this.doc.selection.createRange(),
          g = f.boundingTop,
          h = this.doc.body.scrollWidth;

      if (f.moveToPoint) {
        for (0 === g && (c = this.doc.createElement("span"), this.insertNode(c), g = c.offsetTop, c.parentNode.removeChild(c)), g += 1, d = -10; h > d; d += 2) {
          try {
            f.moveToPoint(d, g);
            break;
          } catch (i) {}
        }

        for (a = g, b = this.doc.selection.createRange(), e = h; e >= 0; e--) {
          try {
            b.moveToPoint(e, a);
            break;
          } catch (j) {}
        }

        f.setEndPoint("EndToEnd", b), f.select();
      }
    },
    getText: function getText() {
      var a = this.getSelection();
      return a ? "" + a : "";
    },
    getNodes: function getNodes(a, b) {
      var c = this.getRange();
      return c ? c.getNodes([a], b) : [];
    },
    fixRangeOverflow: function fixRangeOverflow(a) {
      var b, c;
      this.contain && this.contain.firstChild && a && (b = a.compareNode(this.contain), 2 !== b ? (1 === b && a.setStartBefore(this.contain.firstChild), 0 === b && a.setEndAfter(this.contain.lastChild), 3 === b && (a.setStartBefore(this.contain.firstChild), a.setEndAfter(this.contain.lastChild))) : this._detectInlineRangeProblems(a) && (c = a.endContainer.previousElementSibling, c && a.setEnd(c, this._endOffsetForNode(c))));
    },
    _endOffsetForNode: function _endOffsetForNode(a) {
      var b = document.createRange();
      return b.selectNodeContents(a), b.endOffset;
    },
    _detectInlineRangeProblems: function _detectInlineRangeProblems(a) {
      var b = e.compareDocumentPosition(a.startContainer, a.endContainer);
      return 0 == a.endOffset && 4 & b;
    },
    getRange: function getRange(a) {
      var b = this.getSelection(),
          c = b && b.rangeCount && b.getRangeAt(0);
      return a !== !0 && this.fixRangeOverflow(c), c;
    },
    getOwnUneditables: function getOwnUneditables() {
      var b = e.query(this.contain, "." + this.unselectableClass),
          c = e.query(b, "." + this.unselectableClass);
      return a.lang.array(b).without(c);
    },
    getOwnRanges: function getOwnRanges() {
      var a,
          b,
          c,
          d,
          e,
          f,
          g,
          h = [],
          i = this.getRange();
      if (i && h.push(i), this.unselectableClass && this.contain && i && (b = this.getOwnUneditables(), b.length > 0)) for (d = 0, e = b.length; e > d; d++) {
        for (a = [], f = 0, g = h.length; g > f; f++) {
          if (h[f]) switch (h[f].compareNode(b[d])) {
            case 2:
              break;

            case 3:
              c = h[f].cloneRange(), c.setEndBefore(b[d]), a.push(c), c = h[f].cloneRange(), c.setStartAfter(b[d]), a.push(c);
              break;

            default:
              a.push(h[f]);
          }
          h = a;
        }
      }
      return h;
    },
    getSelection: function getSelection() {
      return rangy.getSelection(this.doc.defaultView || this.doc.parentWindow);
    },
    setSelection: function setSelection(a) {
      var b = this.doc.defaultView || this.doc.parentWindow,
          c = rangy.getSelection(b);
      return c.setSingleRange(a);
    },
    createRange: function createRange() {
      return rangy.createRange(this.doc);
    },
    isCollapsed: function isCollapsed() {
      return this.getSelection().isCollapsed;
    },
    getHtml: function getHtml() {
      return this.getSelection().toHtml();
    },
    isEndToEndInNode: function isEndToEndInNode(b) {
      var c = this.getRange(),
          d = c.commonAncestorContainer,
          e = c.startContainer,
          f = c.endContainer;
      if (d.nodeType === a.TEXT_NODE && (d = d.parentNode), e.nodeType === a.TEXT_NODE && !/^\s*$/.test(e.data.substr(c.startOffset))) return !1;
      if (f.nodeType === a.TEXT_NODE && !/^\s*$/.test(f.data.substr(c.endOffset))) return !1;

      for (; e && e !== d;) {
        if (e.nodeType !== a.TEXT_NODE && !a.dom.contains(d, e)) return !1;
        if (a.dom.domNode(e).prev({
          ignoreBlankTexts: !0
        })) return !1;
        e = e.parentNode;
      }

      for (; f && f !== d;) {
        if (f.nodeType !== a.TEXT_NODE && !a.dom.contains(d, f)) return !1;
        if (a.dom.domNode(f).next({
          ignoreBlankTexts: !0
        })) return !1;
        f = f.parentNode;
      }

      return a.lang.array(b).contains(d.nodeName) ? d : !1;
    },
    deselect: function deselect() {
      var a = this.getSelection();
      a && a.removeAllRanges();
    }
  });
}(wysihtml5), function (a, b) {
  function c(a, b, c) {
    if (!a.className) return !1;
    var d = a.className.match(c) || [];
    return d[d.length - 1] === b;
  }

  function d(a, b) {
    if (!a.getAttribute || !a.getAttribute("style")) return !1;
    a.getAttribute("style").match(b);
    return a.getAttribute("style").match(b) ? !0 : !1;
  }

  function e(a, b, c) {
    a.getAttribute("style") ? (h(a, c), a.getAttribute("style") && !/^\s*$/.test(a.getAttribute("style")) ? a.setAttribute("style", b + ";" + a.getAttribute("style")) : a.setAttribute("style", b)) : a.setAttribute("style", b);
  }

  function f(a, b, c) {
    a.className ? (g(a, c), a.className += " " + b) : a.className = b;
  }

  function g(a, b) {
    a.className && (a.className = a.className.replace(b, ""));
  }

  function h(a, b) {
    var c,
        d,
        e = [];

    if (a.getAttribute("style")) {
      for (c = a.getAttribute("style").split(";"), d = c.length; d--;) {
        c[d].match(b) || /^\s*$/.test(c[d]) || e.push(c[d]);
      }

      e.length ? a.setAttribute("style", e.join(";")) : a.removeAttribute("style");
    }
  }

  function i(a, b) {
    var c,
        d,
        e,
        f = [],
        g = b.split(";"),
        h = a.getAttribute("style");

    if (h) {
      for (h = h.replace(/\s/gi, "").toLowerCase(), f.push(RegExp("(^|\\s|;)" + b.replace(/\s/gi, "").replace(/([\(\)])/gi, "\\$1").toLowerCase().replace(";", ";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi, "\\s?rgb\\($1,\\s?$2,\\s?$3\\)"), "gi")), c = g.length; c-- > 0;) {
        /^\s*$/.test(g[c]) || f.push(RegExp("(^|\\s|;)" + g[c].replace(/\s/gi, "").replace(/([\(\)])/gi, "\\$1").toLowerCase().replace(";", ";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi, "\\s?rgb\\($1,\\s?$2,\\s?$3\\)"), "gi"));
      }

      for (d = 0, e = f.length; e > d; d++) {
        if (h.match(f[d])) return f[d];
      }
    }

    return !1;
  }

  function j(c, d, e, f) {
    return e ? i(c, e) : f ? a.dom.hasClass(c, f) : b.dom.arrayContains(d, c.tagName.toLowerCase());
  }

  function k(a, b, c, d) {
    for (var e = a.length; e--;) {
      if (!j(a[e], b, c, d)) return !1;
    }

    return a.length ? !0 : !1;
  }

  function l(a, b, c) {
    var d = i(a, b);
    return d ? (h(a, d), "remove") : (e(a, b, c), "change");
  }

  function m(a, b) {
    return a.className.replace(u, " ") == b.className.replace(u, " ");
  }

  function n(a) {
    for (var b = a.parentNode; a.firstChild;) {
      b.insertBefore(a.firstChild, a);
    }

    b.removeChild(a);
  }

  function o(a, b) {
    if (a.attributes.length != b.attributes.length) return !1;

    for (var c, d, e, f = 0, g = a.attributes.length; g > f; ++f) {
      if (c = a.attributes[f], e = c.name, "class" != e) {
        if (d = b.attributes.getNamedItem(e), c.specified != d.specified) return !1;
        if (c.specified && c.nodeValue !== d.nodeValue) return !1;
      }
    }

    return !0;
  }

  function p(a, c) {
    return b.dom.isCharacterDataNode(a) ? 0 == c ? !!a.previousSibling : c == a.length ? !!a.nextSibling : !0 : c > 0 && c < a.childNodes.length;
  }

  function q(a, c, d, e) {
    var f, g;

    if (b.dom.isCharacterDataNode(c) && (0 == d ? (d = b.dom.getNodeIndex(c), c = c.parentNode) : d == c.length ? (d = b.dom.getNodeIndex(c) + 1, c = c.parentNode) : f = b.dom.splitDataNode(c, d)), !(f || e && c === e)) {
      for (f = c.cloneNode(!1), f.id && f.removeAttribute("id"); g = c.childNodes[d];) {
        f.appendChild(g);
      }

      b.dom.insertAfter(f, c);
    }

    return c == a ? f : q(a, f.parentNode, b.dom.getNodeIndex(f), e);
  }

  function r(b) {
    this.isElementMerge = b.nodeType == a.ELEMENT_NODE, this.firstTextNode = this.isElementMerge ? b.lastChild : b, this.textNodes = [this.firstTextNode];
  }

  function s(a, b, c, d, e, f, g) {
    this.tagNames = a || [t], this.cssClass = b || (b === !1 ? !1 : ""), this.similarClassRegExp = c, this.cssStyle = e || "", this.similarStyleRegExp = f, this.normalize = d, this.applyToAnyTagName = !1, this.container = g;
  }

  var t = "span",
      u = /\s+/g;
  r.prototype = {
    doMerge: function doMerge() {
      var a,
          b,
          c,
          d,
          e,
          f = [];

      for (d = 0, e = this.textNodes.length; e > d; ++d) {
        a = this.textNodes[d], b = a.parentNode, f[d] = a.data, d && (b.removeChild(a), b.hasChildNodes() || b.parentNode.removeChild(b));
      }

      return this.firstTextNode.data = c = f.join(""), c;
    },
    getLength: function getLength() {
      for (var a = this.textNodes.length, b = 0; a--;) {
        b += this.textNodes[a].length;
      }

      return b;
    },
    toString: function toString() {
      var a,
          b,
          c = [];

      for (a = 0, b = this.textNodes.length; b > a; ++a) {
        c[a] = "'" + this.textNodes[a].data + "'";
      }

      return "[Merge(" + c.join(",") + ")]";
    }
  }, s.prototype = {
    getAncestorWithClass: function getAncestorWithClass(d) {
      for (var e; d;) {
        if (e = this.cssClass ? c(d, this.cssClass, this.similarClassRegExp) : "" !== this.cssStyle ? !1 : !0, d.nodeType == a.ELEMENT_NODE && "false" != d.getAttribute("contenteditable") && b.dom.arrayContains(this.tagNames, d.tagName.toLowerCase()) && e) return d;
        d = d.parentNode;
      }

      return !1;
    },
    getAncestorWithStyle: function getAncestorWithStyle(c) {
      for (var e; c;) {
        if (e = this.cssStyle ? d(c, this.similarStyleRegExp) : !1, c.nodeType == a.ELEMENT_NODE && "false" != c.getAttribute("contenteditable") && b.dom.arrayContains(this.tagNames, c.tagName.toLowerCase()) && e) return c;
        c = c.parentNode;
      }

      return !1;
    },
    getMatchingAncestor: function getMatchingAncestor(a) {
      var b = this.getAncestorWithClass(a),
          c = !1;
      return b ? this.cssStyle && (c = "class") : (b = this.getAncestorWithStyle(a), b && (c = "style")), {
        element: b,
        type: c
      };
    },
    postApply: function postApply(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i = a[0],
          j = a[a.length - 1],
          k = [],
          l = i,
          m = j,
          n = 0,
          o = j.length;

      for (f = 0, g = a.length; g > f; ++f) {
        d = a[f], e = null, d && d.parentNode && (e = this.getAdjacentMergeableTextNode(d.parentNode, !1)), e ? (c || (c = new r(e), k.push(c)), c.textNodes.push(d), d === i && (l = c.firstTextNode, n = l.length), d === j && (m = c.firstTextNode, o = c.getLength())) : c = null;
      }

      if (j && j.parentNode && (h = this.getAdjacentMergeableTextNode(j.parentNode, !0), h && (c || (c = new r(j), k.push(c)), c.textNodes.push(h))), k.length) {
        for (f = 0, g = k.length; g > f; ++f) {
          k[f].doMerge();
        }

        b.setStart(l, n), b.setEnd(m, o);
      }
    },
    getAdjacentMergeableTextNode: function getAdjacentMergeableTextNode(b, c) {
      var d,
          e = b.nodeType == a.TEXT_NODE,
          f = e ? b.parentNode : b,
          g = c ? "nextSibling" : "previousSibling";

      if (e) {
        if (d = b[g], d && d.nodeType == a.TEXT_NODE) return d;
      } else if (d = f[g], d && this.areElementsMergeable(b, d)) return d[c ? "firstChild" : "lastChild"];

      return null;
    },
    areElementsMergeable: function areElementsMergeable(a, c) {
      return b.dom.arrayContains(this.tagNames, (a.tagName || "").toLowerCase()) && b.dom.arrayContains(this.tagNames, (c.tagName || "").toLowerCase()) && m(a, c) && o(a, c);
    },
    createContainer: function createContainer(a) {
      var b = a.createElement(this.tagNames[0]);
      return this.cssClass && (b.className = this.cssClass), this.cssStyle && b.setAttribute("style", this.cssStyle), b;
    },
    applyToTextNode: function applyToTextNode(a) {
      var c,
          d = a.parentNode;
      1 == d.childNodes.length && b.dom.arrayContains(this.tagNames, d.tagName.toLowerCase()) ? (this.cssClass && f(d, this.cssClass, this.similarClassRegExp), this.cssStyle && e(d, this.cssStyle, this.similarStyleRegExp)) : (c = this.createContainer(b.dom.getDocument(a)), a.parentNode.insertBefore(c, a), c.appendChild(a));
    },
    isRemovable: function isRemovable(c) {
      return b.dom.arrayContains(this.tagNames, c.tagName.toLowerCase()) && "" === a.lang.string(c.className).trim() && (!c.getAttribute("style") || "" === a.lang.string(c.getAttribute("style")).trim());
    },
    undoToTextNode: function undoToTextNode(a, b, c, d) {
      var e,
          f = c ? !1 : !0,
          h = c || d,
          i = !1;
      b.containsNode(h) || (e = b.cloneRange(), e.selectNode(h), e.isPointInRange(b.endContainer, b.endOffset) && p(b.endContainer, b.endOffset) && (q(h, b.endContainer, b.endOffset, this.container), b.setEndAfter(h)), e.isPointInRange(b.startContainer, b.startOffset) && p(b.startContainer, b.startOffset) && (h = q(h, b.startContainer, b.startOffset, this.container))), !f && this.similarClassRegExp && g(h, this.similarClassRegExp), f && this.similarStyleRegExp && (i = "change" === l(h, this.cssStyle, this.similarStyleRegExp)), this.isRemovable(h) && !i && n(h);
    },
    applyToRange: function applyToRange(b) {
      var c, d, e, f, g, h;

      for (d = b.length; d--;) {
        if (c = b[d].getNodes([a.TEXT_NODE]), !c.length) try {
          return e = this.createContainer(b[d].endContainer.ownerDocument), b[d].surroundContents(e), this.selectNode(b[d], e), void 0;
        } catch (i) {}

        if (b[d].splitBoundaries(), c = b[d].getNodes([a.TEXT_NODE]), c.length) {
          for (g = 0, h = c.length; h > g; ++g) {
            f = c[g], this.getMatchingAncestor(f).element || this.applyToTextNode(f);
          }

          b[d].setStart(c[0], 0), f = c[c.length - 1], b[d].setEnd(f, f.length), this.normalize && this.postApply(c, b[d]);
        }
      }
    },
    undoToRange: function undoToRange(b) {
      var c, d, e, f, g, h, i, j;

      for (f = b.length; f--;) {
        for (c = b[f].getNodes([a.TEXT_NODE]), c.length ? (b[f].splitBoundaries(), c = b[f].getNodes([a.TEXT_NODE])) : (g = b[f].endContainer.ownerDocument, h = g.createTextNode(a.INVISIBLE_SPACE), b[f].insertNode(h), b[f].selectNode(h), c = [h]), i = 0, j = c.length; j > i; ++i) {
          b[f].isValid() && (d = c[i], e = this.getMatchingAncestor(d), "style" === e.type ? this.undoToTextNode(d, b[f], !1, e.element) : e.element && this.undoToTextNode(d, b[f], e.element));
        }

        1 == j ? this.selectNode(b[f], c[0]) : (b[f].setStart(c[0], 0), d = c[c.length - 1], b[f].setEnd(d, d.length), this.normalize && this.postApply(c, b[f]));
      }
    },
    selectNode: function selectNode(b, c) {
      var d = c.nodeType === a.ELEMENT_NODE,
          e = "canHaveHTML" in c ? c.canHaveHTML : !0,
          f = d ? c.innerHTML : c.data,
          g = "" === f || f === a.INVISIBLE_SPACE;
      if (g && d && e) try {
        c.innerHTML = a.INVISIBLE_SPACE;
      } catch (h) {}
      b.selectNodeContents(c), g && d ? b.collapse(!1) : g && (b.setStartAfter(c), b.setEndAfter(c));
    },
    getTextSelectedByRange: function getTextSelectedByRange(a, b) {
      var c,
          d,
          e = b.cloneRange();
      return e.selectNodeContents(a), c = e.intersection(b), d = c ? "" + c : "", e.detach(), d;
    },
    isAppliedToRange: function isAppliedToRange(b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i = [],
          j = "full";

      for (e = b.length; e--;) {
        if (d = b[e].getNodes([a.TEXT_NODE]), !d.length) return c = this.getMatchingAncestor(b[e].startContainer).element, c ? {
          elements: [c],
          coverage: j
        } : !1;

        for (f = 0, g = d.length; g > f; ++f) {
          h = this.getTextSelectedByRange(d[f], b[e]), c = this.getMatchingAncestor(d[f]).element, c && "" != h ? (i.push(c), 1 === a.dom.getTextNodes(c, !0).length ? j = "full" : "full" === j && (j = "inline")) : c || (j = "partial");
        }
      }

      return i.length ? {
        elements: i,
        coverage: j
      } : !1;
    },
    toggleRange: function toggleRange(a) {
      var b,
          c = this.isAppliedToRange(a);
      c ? "full" === c.coverage ? this.undoToRange(a) : "inline" === c.coverage ? (b = k(c.elements, this.tagNames, this.cssStyle, this.cssClass), this.undoToRange(a), b || this.applyToRange(a)) : (k(c.elements, this.tagNames, this.cssStyle, this.cssClass) || this.undoToRange(a), this.applyToRange(a)) : this.applyToRange(a);
    }
  }, a.selection.HTMLApplier = s;
}(wysihtml5, rangy), wysihtml5.Commands = Base.extend({
  constructor: function constructor(a) {
    this.editor = a, this.composer = a.composer, this.doc = this.composer.doc;
  },
  support: function support(a) {
    return wysihtml5.browser.supportsCommand(this.doc, a);
  },
  exec: function exec(a, b) {
    var c = wysihtml5.commands[a],
        d = wysihtml5.lang.array(arguments).get(),
        e = c && c.exec,
        f = null;
    if (this.editor.fire("beforecommand:composer"), e) d.unshift(this.composer), f = e.apply(c, d);else try {
      f = this.doc.execCommand(a, !1, b);
    } catch (g) {}
    return this.editor.fire("aftercommand:composer"), f;
  },
  state: function state(a) {
    var b = wysihtml5.commands[a],
        c = wysihtml5.lang.array(arguments).get(),
        d = b && b.state;
    if (d) return c.unshift(this.composer), d.apply(b, c);

    try {
      return this.doc.queryCommandState(a);
    } catch (e) {
      return !1;
    }
  },
  stateValue: function stateValue(a) {
    var b = wysihtml5.commands[a],
        c = wysihtml5.lang.array(arguments).get(),
        d = b && b.stateValue;
    return d ? (c.unshift(this.composer), d.apply(b, c)) : !1;
  }
}), wysihtml5.commands.bold = {
  exec: function exec(a, b) {
    wysihtml5.commands.formatInline.execWithToggle(a, b, "b");
  },
  state: function state(a, b) {
    return wysihtml5.commands.formatInline.state(a, b, "b");
  }
}, function (a) {
  function b(b, c) {
    var g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = b.doc,
        q = "_wysihtml5-temp-" + +new Date(),
        r = /non-matching-class/g,
        s = 0;

    for (a.commands.formatInline.exec(b, d, e, q, r, d, d, !0, !0), h = p.querySelectorAll(e + "." + q), g = h.length; g > s; s++) {
      i = h[s], i.removeAttribute("class");

      for (o in c) {
        "text" !== o && i.setAttribute(o, c[o]);
      }
    }

    l = i, 1 === g && (m = f.getTextContent(i), j = !!i.querySelector("*"), k = "" === m || m === a.INVISIBLE_SPACE, !j && k && (f.setTextContent(i, c.text || i.href), n = p.createTextNode(" "), b.selection.setAfter(i), f.insert(n).after(i), l = n)), b.selection.setAfter(l);
  }

  function c(a, b, c) {
    var d, e, f, g;

    for (e = b.length; e--;) {
      for (d = b[e].attributes, f = d.length; f--;) {
        b[e].removeAttribute(d.item(f).name);
      }

      for (g in c) {
        c.hasOwnProperty(g) && b[e].setAttribute(g, c[g]);
      }
    }
  }

  var d,
      e = "A",
      f = a.dom;
  a.commands.createLink = {
    exec: function exec(a, d, e) {
      var f = this.state(a, d);
      f ? a.selection.executeAndRestore(function () {
        c(a, f, e);
      }) : (e = "object" == _typeof(e) ? e : {
        href: e
      }, b(a, e));
    },
    state: function state(b, c) {
      return a.commands.formatInline.state(b, c, "A");
    }
  };
}(wysihtml5), function (a) {
  function b(a, b) {
    for (var d, e, f, g = b.length, h = 0; g > h; h++) {
      d = b[h], e = c.getParentElement(d, {
        nodeName: "code"
      }), f = c.getTextContent(d), f.match(c.autoLink.URL_REG_EXP) && !e ? e = c.renameElement(d, "code") : c.replaceWithChildNodes(d);
    }
  }

  var c = a.dom;
  a.commands.removeLink = {
    exec: function exec(a, c) {
      var d = this.state(a, c);
      d && a.selection.executeAndRestore(function () {
        b(a, d);
      });
    },
    state: function state(b, c) {
      return a.commands.formatInline.state(b, c, "A");
    }
  };
}(wysihtml5), function (a) {
  var b = /wysiwyg-font-size-[0-9a-z\-]+/g;
  a.commands.fontSize = {
    exec: function exec(c, d, e) {
      a.commands.formatInline.execWithToggle(c, d, "span", "wysiwyg-font-size-" + e, b);
    },
    state: function state(c, d, e) {
      return a.commands.formatInline.state(c, d, "span", "wysiwyg-font-size-" + e, b);
    }
  };
}(wysihtml5), function (a) {
  var b = /(\s|^)font-size\s*:\s*[^;\s]+;?/gi;
  a.commands.fontSizeStyle = {
    exec: function exec(c, d, e) {
      e = "object" == _typeof(e) ? e.size : e, /^\s*$/.test(e) || a.commands.formatInline.execWithToggle(c, d, "span", !1, !1, "font-size:" + e, b);
    },
    state: function state(c, d) {
      return a.commands.formatInline.state(c, d, "span", !1, !1, "font-size", b);
    },
    stateValue: function stateValue(b, c) {
      var d,
          e = this.state(b, c);
      return e && a.lang.object(e).isArray() && (e = e[0]), e && (d = e.getAttribute("style"), d) ? a.quirks.styleParser.parseFontSize(d) : !1;
    }
  };
}(wysihtml5), function (a) {
  var b = /wysiwyg-color-[0-9a-z]+/g;
  a.commands.foreColor = {
    exec: function exec(c, d, e) {
      a.commands.formatInline.execWithToggle(c, d, "span", "wysiwyg-color-" + e, b);
    },
    state: function state(c, d, e) {
      return a.commands.formatInline.state(c, d, "span", "wysiwyg-color-" + e, b);
    }
  };
}(wysihtml5), function (a) {
  var b = /(\s|^)color\s*:\s*[^;\s]+;?/gi;
  a.commands.foreColorStyle = {
    exec: function exec(c, d, e) {
      var f,
          g = a.quirks.styleParser.parseColor("object" == _typeof(e) ? "color:" + e.color : "color:" + e, "color");
      g && (f = "color: rgb(" + g[0] + "," + g[1] + "," + g[2] + ");", 1 !== g[3] && (f += "color: rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + g[3] + ");"), a.commands.formatInline.execWithToggle(c, d, "span", !1, !1, f, b));
    },
    state: function state(c, d) {
      return a.commands.formatInline.state(c, d, "span", !1, !1, "color", b);
    },
    stateValue: function stateValue(b, c, d) {
      var e,
          f = this.state(b, c);
      return f && a.lang.object(f).isArray() && (f = f[0]), f && (e = f.getAttribute("style"), e && e) ? (val = a.quirks.styleParser.parseColor(e, "color"), a.quirks.styleParser.unparseColor(val, d)) : !1;
    }
  };
}(wysihtml5), function (a) {
  var b = /(\s|^)background-color\s*:\s*[^;\s]+;?/gi;
  a.commands.bgColorStyle = {
    exec: function exec(c, d, e) {
      var f,
          g = a.quirks.styleParser.parseColor("object" == _typeof(e) ? "background-color:" + e.color : "background-color:" + e, "background-color");
      g && (f = "background-color: rgb(" + g[0] + "," + g[1] + "," + g[2] + ");", 1 !== g[3] && (f += "background-color: rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + g[3] + ");"), a.commands.formatInline.execWithToggle(c, d, "span", !1, !1, f, b));
    },
    state: function state(c, d) {
      return a.commands.formatInline.state(c, d, "span", !1, !1, "background-color", b);
    },
    stateValue: function stateValue(b, c, d) {
      var e,
          f = this.state(b, c),
          g = !1;
      return f && a.lang.object(f).isArray() && (f = f[0]), f && (e = f.getAttribute("style"), e) ? (g = a.quirks.styleParser.parseColor(e, "background-color"), a.quirks.styleParser.unparseColor(g, d)) : !1;
    }
  };
}(wysihtml5), function (a) {
  function b(b, c, e) {
    b.className ? (d(b, e), b.className = a.lang.string(b.className + " " + c).trim()) : b.className = c;
  }

  function c(b, c, d) {
    e(b, d), b.getAttribute("style") ? b.setAttribute("style", a.lang.string(b.getAttribute("style") + " " + c).trim()) : b.setAttribute("style", c);
  }

  function d(b, c) {
    var d = c.test(b.className);
    return b.className = b.className.replace(c, ""), "" == a.lang.string(b.className).trim() && b.removeAttribute("class"), d;
  }

  function e(b, c) {
    var d = c.test(b.getAttribute("style"));
    return b.setAttribute("style", (b.getAttribute("style") || "").replace(c, "")), "" == a.lang.string(b.getAttribute("style") || "").trim() && b.removeAttribute("style"), d;
  }

  function f(a) {
    var b = a.lastChild;
    b && g(b) && b.parentNode.removeChild(b);
  }

  function g(a) {
    return "BR" === a.nodeName;
  }

  function h(b, c) {
    var d, e, g;

    for (b.selection.isCollapsed() && b.selection.selectLine(), d = b.selection.surround(c), e = 0, g = d.length; g > e; e++) {
      a.dom.lineBreaks(d[e]).remove(), f(d[e]);
    }
  }

  function i(b) {
    return !!a.lang.string(b.className).trim();
  }

  function j(b) {
    return !!a.lang.string(b.getAttribute("style") || "").trim();
  }

  var k = a.dom,
      l = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
  a.commands.formatBlock = {
    exec: function exec(f, g, m, n, o, p, q) {
      var r,
          s,
          t,
          u,
          v,
          w = (f.doc, this.state(f, g, m, n, o, p, q)),
          x = f.config.useLineBreaks,
          y = x ? "DIV" : "P";
      return m = "string" == typeof m ? m.toUpperCase() : m, w.length ? (f.selection.executeAndRestoreRangy(function () {
        var b, c, f;

        for (b = w.length; b--;) {
          if (o && (s = d(w[b], o)), q && (u = e(w[b], q)), (u || s) && null === m && w[b].nodeName != y) return;
          c = i(w[b]), f = j(w[b]), c || f || !x && "P" !== m ? k.renameElement(w[b], "P" === m ? "DIV" : y) : (a.dom.lineBreaks(w[b]).add(), k.replaceWithChildNodes(w[b]));
        }
      }), void 0) : ((null !== m && !a.lang.array(l).contains(m) || (r = f.selection.findNodesInSelection(l).concat(f.selection.getSelectedOwnNodes()), f.selection.executeAndRestoreRangy(function () {
        for (var a = r.length; a--;) {
          v = k.getParentElement(r[a], {
            nodeName: l
          }), v == f.element && (v = null), v && (m && (v = k.renameElement(v, m)), n && b(v, n, o), p && c(v, p, q), t = !0);
        }
      }), !t)) && h(f, {
        nodeName: m || y,
        className: n || null,
        cssStyle: p || null
      }), void 0);
    },
    state: function state(b, c, d, e, f, g, h) {
      var i,
          j,
          l,
          m = b.selection.getSelectedOwnNodes(),
          n = [];

      for (d = "string" == typeof d ? d.toUpperCase() : d, j = 0, l = m.length; l > j; j++) {
        i = k.getParentElement(m[j], {
          nodeName: d,
          className: e,
          classRegExp: f,
          cssStyle: g,
          styleRegExp: h
        }), i && -1 == a.lang.array(n).indexOf(i) && n.push(i);
      }

      return 0 == n.length ? !1 : n;
    }
  };
}(wysihtml5), wysihtml5.commands.formatCode = {
  exec: function exec(a, b, c) {
    var d,
        e,
        f,
        g = this.state(a);
    g ? a.selection.executeAndRestore(function () {
      d = g.querySelector("code"), wysihtml5.dom.replaceWithChildNodes(g), d && wysihtml5.dom.replaceWithChildNodes(d);
    }) : (e = a.selection.getRange(), f = e.extractContents(), g = a.doc.createElement("pre"), d = a.doc.createElement("code"), c && (d.className = c), g.appendChild(d), d.appendChild(f), e.insertNode(g), a.selection.selectNode(g));
  },
  state: function state(a) {
    var b = a.selection.getSelectedNode();
    return b && b.nodeName && "PRE" == b.nodeName && b.firstChild && b.firstChild.nodeName && "CODE" == b.firstChild.nodeName ? b : wysihtml5.dom.getParentElement(b, {
      nodeName: "CODE"
    }) && wysihtml5.dom.getParentElement(b, {
      nodeName: "PRE"
    });
  }
}, function (a) {
  function b(a) {
    var b = d[a];
    return b ? [a.toLowerCase(), b.toLowerCase()] : [a.toLowerCase()];
  }

  function c(c, d, f, g, h, i) {
    var j = c;
    return d && (j += ":" + d), g && (j += ":" + g), e[j] || (e[j] = new a.selection.HTMLApplier(b(c), d, f, !0, g, h, i)), e[j];
  }

  var d = {
    strong: "b",
    em: "i",
    b: "strong",
    i: "em"
  },
      e = {};
  a.commands.formatInline = {
    exec: function exec(a, b, d, e, f, g, h, i, j) {
      var k = a.selection.createRange(),
          l = a.selection.getOwnRanges();
      return l && 0 != l.length ? (a.selection.getSelection().removeAllRanges(), c(d, e, f, g, h, a.element).toggleRange(l), i ? j || a.cleanUp() : (k.setStart(l[0].startContainer, l[0].startOffset), k.setEnd(l[l.length - 1].endContainer, l[l.length - 1].endOffset), a.selection.setSelection(k), a.selection.executeAndRestore(function () {
        j || a.cleanUp();
      }, !0, !0)), void 0) : !1;
    },
    execWithToggle: function execWithToggle(b, c, d, e, f, g, h) {
      var i,
          j = this;
      this.state(b, c, d, e, f, g, h) && b.selection.isCollapsed() && !b.selection.caretIsLastInSelection() && !b.selection.caretIsFirstInSelection() ? (i = j.state(b, c, d, e, f)[0], b.selection.executeAndRestoreRangy(function () {
        i.parentNode;
        b.selection.selectNode(i, !0), a.commands.formatInline.exec(b, c, d, e, f, g, h, !0, !0);
      })) : this.state(b, c, d, e, f, g, h) && !b.selection.isCollapsed() ? b.selection.executeAndRestoreRangy(function () {
        a.commands.formatInline.exec(b, c, d, e, f, g, h, !0, !0);
      }) : a.commands.formatInline.exec(b, c, d, e, f, g, h);
    },
    state: function state(b, e, f, g, h, i, j) {
      var k,
          l,
          m = b.doc,
          n = d[f] || f;
      return a.dom.hasElementWithTagName(m, f) || a.dom.hasElementWithTagName(m, n) ? g && !a.dom.hasElementWithClassName(m, g) ? !1 : (k = b.selection.getOwnRanges(), k && 0 !== k.length ? (l = c(f, g, h, i, j, b.element).isAppliedToRange(k), l && l.elements ? l.elements : !1) : !1) : !1;
    }
  };
}(wysihtml5), function (a) {
  a.commands.insertBlockQuote = {
    exec: function exec(b, c) {
      var d = this.state(b, c),
          e = b.selection.isEndToEndInNode(["H1", "H2", "H3", "H4", "H5", "H6", "P"]);
      b.selection.executeAndRestore(function () {
        if (d) b.config.useLineBreaks && a.dom.lineBreaks(d).add(), a.dom.unwrap(d);else if (b.selection.isCollapsed() && b.selection.selectLine(), e) {
          var c = e.ownerDocument.createElement("blockquote");
          a.dom.insert(c).after(e), c.appendChild(e);
        } else b.selection.surround({
          nodeName: "blockquote"
        });
      });
    },
    state: function state(b) {
      var c = b.selection.getSelectedNode(),
          d = a.dom.getParentElement(c, {
        nodeName: "BLOCKQUOTE"
      }, !1, b.element);
      return d ? d : !1;
    }
  };
}(wysihtml5), wysihtml5.commands.insertHTML = {
  exec: function exec(a, b, c) {
    a.commands.support(b) ? a.doc.execCommand(b, !1, c) : a.selection.insertHTML(c);
  },
  state: function state() {
    return !1;
  }
}, function (a) {
  var b = "IMG";
  a.commands.insertImage = {
    exec: function exec(c, d, e) {
      var f, g, h, i, j;
      if (e = "object" == _typeof(e) ? e : {
        src: e
      }, f = c.doc, g = this.state(c), g) return c.selection.setBefore(g), i = g.parentNode, i.removeChild(g), a.dom.removeEmptyTextNodes(i), "A" !== i.nodeName || i.firstChild || (c.selection.setAfter(i), i.parentNode.removeChild(i)), a.quirks.redraw(c.element), void 0;
      g = f.createElement(b);

      for (j in e) {
        g.setAttribute("className" === j ? "class" : j, e[j]);
      }

      c.selection.insertNode(g), a.browser.hasProblemsSettingCaretAfterImg() ? (h = f.createTextNode(a.INVISIBLE_SPACE), c.selection.insertNode(h), c.selection.setAfter(h)) : c.selection.setAfter(g);
    },
    state: function state(c) {
      var d,
          e,
          f,
          g = c.doc;
      return a.dom.hasElementWithTagName(g, b) ? (d = c.selection.getSelectedNode(), d ? d.nodeName === b ? d : d.nodeType !== a.ELEMENT_NODE ? !1 : (e = c.selection.getText(), e = a.lang.string(e).trim(), e ? !1 : (f = c.selection.getNodes(a.ELEMENT_NODE, function (a) {
        return "IMG" === a.nodeName;
      }), 1 !== f.length ? !1 : f[0])) : !1) : !1;
    }
  };
}(wysihtml5), function (a) {
  var b = "<br>" + (a.browser.needsSpaceAfterLineBreak() ? " " : "");
  a.commands.insertLineBreak = {
    exec: function exec(c, d) {
      c.commands.support(d) ? (c.doc.execCommand(d, !1, null), a.browser.autoScrollsToCaret() || c.selection.scrollIntoView()) : c.commands.exec("insertHTML", b);
    },
    state: function state() {
      return !1;
    }
  };
}(wysihtml5), wysihtml5.commands.insertOrderedList = {
  exec: function exec(a, b) {
    wysihtml5.commands.insertList.exec(a, b, "OL");
  },
  state: function state(a, b) {
    return wysihtml5.commands.insertList.state(a, b, "OL");
  }
}, wysihtml5.commands.insertUnorderedList = {
  exec: function exec(a, b) {
    wysihtml5.commands.insertList.exec(a, b, "UL");
  },
  state: function state(a, b) {
    return wysihtml5.commands.insertList.state(a, b, "UL");
  }
}, wysihtml5.commands.insertList = function (a) {
  var b = function b(a, _b3) {
    if (a && a.nodeName) {
      "string" == typeof _b3 && (_b3 = [_b3]);

      for (var c = _b3.length; c--;) {
        if (a.nodeName === _b3[c]) return !0;
      }
    }

    return !1;
  },
      c = function (_c) {
    function c(_x, _x2, _x3) {
      return _c.apply(this, arguments);
    }

    c.toString = function () {
      return _c.toString();
    };

    return c;
  }(function (c, d, e) {
    var f,
        g,
        h = {
      el: null,
      other: !1
    };
    return c && (f = a.dom.getParentElement(c, {
      nodeName: "LI"
    }), g = "UL" === d ? "OL" : "UL", b(c, d) ? h.el = c : b(c, g) ? h = {
      el: c,
      other: !0
    } : f && (b(f.parentNode, d) ? h.el = f.parentNode : b(f.parentNode, g) && (h = {
      el: f.parentNode,
      other: !0
    }))), h.el && !e.element.contains(h.el) && (h.el = null), h;
  }),
      d = function d(b, c, _d) {
    var e,
        g = "UL" === c ? "OL" : "UL";

    _d.selection.executeAndRestore(function () {
      var h,
          i,
          j = f(g, _d);
      if (j.length) for (h = j.length; h--;) {
        a.dom.renameElement(j[h], c.toLowerCase());
      } else {
        for (e = f(["OL", "UL"], _d), i = e.length; i--;) {
          a.dom.resolveList(e[i], _d.config.useLineBreaks);
        }

        a.dom.resolveList(b, _d.config.useLineBreaks);
      }
    });
  },
      e = function e(b, c, d) {
    var e = "UL" === c ? "OL" : "UL";
    d.selection.executeAndRestore(function () {
      var g,
          h = [b].concat(f(e, d));

      for (g = h.length; g--;) {
        a.dom.renameElement(h[g], c.toLowerCase());
      }
    });
  },
      f = function f(a, c) {
    var d,
        e = c.selection.getOwnRanges(),
        f = [];

    for (d = e.length; d--;) {
      f = f.concat(e[d].getNodes([1], function (c) {
        return b(c, a);
      }));
    }

    return f;
  },
      g = function g(b, c) {
    c.selection.executeAndRestoreRangy(function () {
      var d,
          e,
          f = "_wysihtml5-temp-" + new Date().getTime(),
          g = c.selection.deblockAndSurround({
        nodeName: "div",
        className: f
      }),
          h = /\uFEFF/g;
      g.innerHTML = g.innerHTML.replace(h, ""), g && (d = a.lang.array(["", "<br>", a.INVISIBLE_SPACE]).contains(g.innerHTML), e = a.dom.convertToList(g, b.toLowerCase(), c.parent.config.uneditableContainerClassname), d && c.selection.selectNode(e.querySelector("li"), !0));
    });
  };

  return {
    exec: function exec(a, b, f) {
      var h = a.doc,
          i = "OL" === f ? "insertOrderedList" : "insertUnorderedList",
          j = a.selection.getSelectedNode(),
          k = c(j, f, a);
      k.el ? k.other ? e(k.el, f, a) : d(k.el, f, a) : a.commands.support(i) ? h.execCommand(i, !1, null) : g(f, a);
    },
    state: function state(a, b, d) {
      var e = a.selection.getSelectedNode(),
          f = c(e, d, a);
      return f.el && !f.other ? f.el : !1;
    }
  };
}(wysihtml5), wysihtml5.commands.italic = {
  exec: function exec(a, b) {
    wysihtml5.commands.formatInline.execWithToggle(a, b, "i");
  },
  state: function state(a, b) {
    return wysihtml5.commands.formatInline.state(a, b, "i");
  }
}, function (a) {
  var b = "wysiwyg-text-align-center",
      c = /wysiwyg-text-align-[0-9a-z]+/g;
  a.commands.justifyCenter = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "wysiwyg-text-align-left",
      c = /wysiwyg-text-align-[0-9a-z]+/g;
  a.commands.justifyLeft = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "wysiwyg-text-align-right",
      c = /wysiwyg-text-align-[0-9a-z]+/g;
  a.commands.justifyRight = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "wysiwyg-text-align-justify",
      c = /wysiwyg-text-align-[0-9a-z]+/g;
  a.commands.justifyFull = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "text-align: right;",
      c = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
  a.commands.alignRightStyle = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, null, null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, null, null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "text-align: left;",
      c = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
  a.commands.alignLeftStyle = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, null, null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, null, null, b, c);
    }
  };
}(wysihtml5), function (a) {
  var b = "text-align: center;",
      c = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;
  a.commands.alignCenterStyle = {
    exec: function exec(d) {
      return a.commands.formatBlock.exec(d, "formatBlock", null, null, null, b, c);
    },
    state: function state(d) {
      return a.commands.formatBlock.state(d, "formatBlock", null, null, null, b, c);
    }
  };
}(wysihtml5), wysihtml5.commands.redo = {
  exec: function exec(a) {
    return a.undoManager.redo();
  },
  state: function state() {
    return !1;
  }
}, wysihtml5.commands.underline = {
  exec: function exec(a, b) {
    wysihtml5.commands.formatInline.execWithToggle(a, b, "u");
  },
  state: function state(a, b) {
    return wysihtml5.commands.formatInline.state(a, b, "u");
  }
}, wysihtml5.commands.undo = {
  exec: function exec(a) {
    return a.undoManager.undo();
  },
  state: function state() {
    return !1;
  }
}, wysihtml5.commands.createTable = {
  exec: function exec(a, b, c) {
    var d, e, f;

    if (c && c.cols && c.rows && parseInt(c.cols, 10) > 0 && parseInt(c.rows, 10) > 0) {
      for (f = c.tableStyle ? '<table style="' + c.tableStyle + '">' : "<table>", f += "<tbody>", e = 0; e < c.rows; e++) {
        for (f += "<tr>", d = 0; d < c.cols; d++) {
          f += "<td>&nbsp;</td>";
        }

        f += "</tr>";
      }

      f += "</tbody></table>", a.commands.exec("insertHTML", f);
    }
  },
  state: function state() {
    return !1;
  }
}, wysihtml5.commands.mergeTableCells = {
  exec: function exec(a, b) {
    a.tableSelection && a.tableSelection.start && a.tableSelection.end && (this.state(a, b) ? wysihtml5.dom.table.unmergeCell(a.tableSelection.start) : wysihtml5.dom.table.mergeCellsBetween(a.tableSelection.start, a.tableSelection.end));
  },
  state: function state(a) {
    if (a.tableSelection) {
      var b = a.tableSelection.start,
          c = a.tableSelection.end;
      if (b && c && b == c && (wysihtml5.dom.getAttribute(b, "colspan") && parseInt(wysihtml5.dom.getAttribute(b, "colspan"), 10) > 1 || wysihtml5.dom.getAttribute(b, "rowspan") && parseInt(wysihtml5.dom.getAttribute(b, "rowspan"), 10) > 1)) return [b];
    }

    return !1;
  }
}, wysihtml5.commands.addTableCells = {
  exec: function exec(a, b, c) {
    if (a.tableSelection && a.tableSelection.start && a.tableSelection.end) {
      var d = wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start, a.tableSelection.end);
      "before" == c || "above" == c ? wysihtml5.dom.table.addCells(d.start, c) : ("after" == c || "below" == c) && wysihtml5.dom.table.addCells(d.end, c), setTimeout(function () {
        a.tableSelection.select(d.start, d.end);
      }, 0);
    }
  },
  state: function state() {
    return !1;
  }
}, wysihtml5.commands.deleteTableCells = {
  exec: function exec(a, b, c) {
    if (a.tableSelection && a.tableSelection.start && a.tableSelection.end) {
      var d,
          e = wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start, a.tableSelection.end),
          f = wysihtml5.dom.table.indexOf(e.start),
          g = a.tableSelection.table;
      wysihtml5.dom.table.removeCells(e.start, c), setTimeout(function () {
        d = wysihtml5.dom.table.findCell(g, f), d || ("row" == c && (d = wysihtml5.dom.table.findCell(g, {
          row: f.row - 1,
          col: f.col
        })), "column" == c && (d = wysihtml5.dom.table.findCell(g, {
          row: f.row,
          col: f.col - 1
        }))), d && a.tableSelection.select(d, d);
      }, 0);
    }
  },
  state: function state() {
    return !1;
  }
}, wysihtml5.commands.indentList = {
  exec: function exec(a) {
    var b = a.selection.getSelectionParentsByTag("LI");
    return b ? this.tryToPushLiLevel(b, a.selection) : !1;
  },
  state: function state() {
    return !1;
  },
  tryToPushLiLevel: function tryToPushLiLevel(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = !1;
    return b.executeAndRestoreRangy(function () {
      for (var b = a.length; b--;) {
        f = a[b], c = "OL" === f.parentNode.nodeName ? "OL" : "UL", d = f.ownerDocument.createElement(c), e = wysihtml5.dom.domNode(f).prev({
          nodeTypes: [wysihtml5.ELEMENT_NODE]
        }), g = e ? e.querySelector("ul, ol") : null, e && (g ? g.appendChild(f) : (d.appendChild(f), e.appendChild(d)), h = !0);
      }
    }), h;
  }
}, wysihtml5.commands.outdentList = {
  exec: function exec(a) {
    var b = a.selection.getSelectionParentsByTag("LI");
    return b ? this.tryToPullLiLevel(b, a) : !1;
  },
  state: function state() {
    return !1;
  },
  tryToPullLiLevel: function tryToPullLiLevel(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = !1,
        i = this;
    return b.selection.executeAndRestoreRangy(function () {
      var j, k;

      for (j = a.length; j--;) {
        if (f = a[j], f.parentNode && (c = f.parentNode, "OL" === c.tagName || "UL" === c.tagName)) {
          if (h = !0, d = wysihtml5.dom.getParentElement(c.parentNode, {
            nodeName: ["OL", "UL"]
          }, !1, b.element), e = wysihtml5.dom.getParentElement(c.parentNode, {
            nodeName: ["LI"]
          }, !1, b.element), d && e) f.nextSibling && (g = i.getAfterList(c, f), f.appendChild(g)), d.insertBefore(f, e.nextSibling);else {
            for (f.nextSibling && (g = i.getAfterList(c, f), f.appendChild(g)), k = f.childNodes.length; k--;) {
              c.parentNode.insertBefore(f.childNodes[k], c.nextSibling);
            }

            c.parentNode.insertBefore(document.createElement("br"), c.nextSibling), f.parentNode.removeChild(f);
          }
          0 === c.childNodes.length && c.parentNode.removeChild(c);
        }
      }
    }), h;
  },
  getAfterList: function getAfterList(a, b) {
    for (var c = a.nodeName, d = document.createElement(c); b.nextSibling;) {
      d.appendChild(b.nextSibling);
    }

    return d;
  }
}, function (a) {
  var b = 90,
      c = 89,
      d = 8,
      e = 46,
      f = 25,
      g = "data-wysihtml5-selection-node",
      h = "data-wysihtml5-selection-offset",
      i = ('<span id="_wysihtml5-undo" class="_wysihtml5-temp">' + a.INVISIBLE_SPACE + "</span>", '<span id="_wysihtml5-redo" class="_wysihtml5-temp">' + a.INVISIBLE_SPACE + "</span>", a.dom);
  a.UndoManager = a.lang.Dispatcher.extend({
    constructor: function constructor(a) {
      this.editor = a, this.composer = a.composer, this.element = this.composer.element, this.position = 0, this.historyStr = [], this.historyDom = [], this.transact(), this._observe();
    },
    _observe: function _observe() {
      {
        var a,
            f = this;
        this.composer.sandbox.getDocument();
      }
      i.observe(this.element, "keydown", function (a) {
        if (!a.altKey && (a.ctrlKey || a.metaKey)) {
          var d = a.keyCode,
              e = d === b && !a.shiftKey,
              g = d === b && a.shiftKey || d === c;
          e ? (f.undo(), a.preventDefault()) : g && (f.redo(), a.preventDefault());
        }
      }), i.observe(this.element, "keydown", function (b) {
        var c = b.keyCode;
        c !== a && (a = c, (c === d || c === e) && f.transact());
      }), this.editor.on("newword:composer", function () {
        f.transact();
      }).on("beforecommand:composer", function () {
        f.transact();
      });
    },
    transact: function transact() {
      var b,
          c,
          d,
          e,
          i,
          j,
          k,
          l = this.historyStr[this.position - 1],
          m = this.composer.getValue(!1, !1),
          n = this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
      m !== l && (j = this.historyStr.length = this.historyDom.length = this.position, j > f && (this.historyStr.shift(), this.historyDom.shift(), this.position--), this.position++, n && (b = this.composer.selection.getRange(), c = b && b.startContainer ? b.startContainer : this.element, d = b && b.startOffset ? b.startOffset : 0, c.nodeType === a.ELEMENT_NODE ? e = c : (e = c.parentNode, i = this.getChildNodeIndex(e, c)), e.setAttribute(h, d), void 0 !== i && e.setAttribute(g, i)), k = this.element.cloneNode(!!m), this.historyDom.push(k), this.historyStr.push(m), e && (e.removeAttribute(h), e.removeAttribute(g)));
    },
    undo: function undo() {
      this.transact(), this.undoPossible() && (this.set(this.historyDom[--this.position - 1]), this.editor.fire("undo:composer"));
    },
    redo: function redo() {
      this.redoPossible() && (this.set(this.historyDom[++this.position - 1]), this.editor.fire("redo:composer"));
    },
    undoPossible: function undoPossible() {
      return this.position > 1;
    },
    redoPossible: function redoPossible() {
      return this.position < this.historyStr.length;
    },
    set: function set(a) {
      var b, c, d, e, f, i;

      for (this.element.innerHTML = "", b = 0, c = a.childNodes, d = a.childNodes.length; d > b; b++) {
        this.element.appendChild(c[b].cloneNode(!0));
      }

      a.hasAttribute(h) ? (e = a.getAttribute(h), i = a.getAttribute(g), f = this.element) : (f = this.element.querySelector("[" + h + "]") || this.element, e = f.getAttribute(h), i = f.getAttribute(g), f.removeAttribute(h), f.removeAttribute(g)), null !== i && (f = this.getChildNodeByIndex(f, +i)), this.composer.selection.set(f, e);
    },
    getChildNodeIndex: function getChildNodeIndex(a, b) {
      for (var c = 0, d = a.childNodes, e = d.length; e > c; c++) {
        if (d[c] === b) return c;
      }
    },
    getChildNodeByIndex: function getChildNodeByIndex(a, b) {
      return a.childNodes[b];
    }
  });
}(wysihtml5), wysihtml5.views.View = Base.extend({
  constructor: function constructor(a, b, c) {
    this.parent = a, this.element = b, this.config = c, this.config.noTextarea || this._observeViewChange();
  },
  _observeViewChange: function _observeViewChange() {
    var a = this;
    this.parent.on("beforeload", function () {
      a.parent.on("change_view", function (b) {
        b === a.name ? (a.parent.currentView = a, a.show(), setTimeout(function () {
          a.focus();
        }, 0)) : a.hide();
      });
    });
  },
  focus: function focus() {
    if (this.element.ownerDocument.querySelector(":focus") !== this.element) try {
      this.element.focus();
    } catch (a) {}
  },
  hide: function hide() {
    this.element.style.display = "none";
  },
  show: function show() {
    this.element.style.display = "";
  },
  disable: function disable() {
    this.element.setAttribute("disabled", "disabled");
  },
  enable: function enable() {
    this.element.removeAttribute("disabled");
  }
}), function (a) {
  var b = a.dom,
      c = a.browser;
  a.views.Composer = a.views.View.extend({
    name: "composer",
    CARET_HACK: "<br>",
    constructor: function constructor(a, b, c) {
      this.base(a, b, c), this.config.noTextarea ? this.editableArea = b : this.textarea = this.parent.textarea, this.config.contentEditableMode ? this._initContentEditableArea() : this._initSandbox();
    },
    clear: function clear() {
      this.element.innerHTML = c.displaysCaretInEmptyContentEditableCorrectly() ? "" : this.CARET_HACK;
    },
    getValue: function getValue(b, c) {
      var d = this.isEmpty() ? "" : a.quirks.getCorrectInnerHTML(this.element);
      return b !== !1 && (d = this.parent.parse(d, c === !1 ? !1 : !0)), d;
    },
    setValue: function setValue(a, b) {
      b && (a = this.parent.parse(a));

      try {
        this.element.innerHTML = a;
      } catch (c) {
        this.element.innerText = a;
      }
    },
    cleanUp: function cleanUp() {
      this.parent.parse(this.element);
    },
    show: function show() {
      this.editableArea.style.display = this._displayStyle || "", this.config.noTextarea || this.textarea.element.disabled || (this.disable(), this.enable());
    },
    hide: function hide() {
      this._displayStyle = b.getStyle("display").from(this.editableArea), "none" === this._displayStyle && (this._displayStyle = null), this.editableArea.style.display = "none";
    },
    disable: function disable() {
      this.parent.fire("disable:composer"), this.element.removeAttribute("contentEditable");
    },
    enable: function enable() {
      this.parent.fire("enable:composer"), this.element.setAttribute("contentEditable", "true");
    },
    focus: function focus(b) {
      a.browser.doesAsyncFocus() && this.hasPlaceholderSet() && this.clear(), this.base();
      var c = this.element.lastChild;
      b && c && this.selection && ("BR" === c.nodeName ? this.selection.setBefore(this.element.lastChild) : this.selection.setAfter(this.element.lastChild));
    },
    getTextContent: function getTextContent() {
      return b.getTextContent(this.element);
    },
    hasPlaceholderSet: function hasPlaceholderSet() {
      return this.getTextContent() == (this.config.noTextarea ? this.editableArea.getAttribute("data-placeholder") : this.textarea.element.getAttribute("placeholder")) && this.placeholderSet;
    },
    isEmpty: function isEmpty() {
      var a = this.element.innerHTML.toLowerCase();
      return /^(\s|<br>|<\/br>|<p>|<\/p>)*$/i.test(a) || "" === a || "<br>" === a || "<p></p>" === a || "<p><br></p>" === a || this.hasPlaceholderSet();
    },
    _initContentEditableArea: function _initContentEditableArea() {
      var a = this;
      this.config.noTextarea ? this.sandbox = new b.ContentEditableArea(function () {
        a._create();
      }, {}, this.editableArea) : (this.sandbox = new b.ContentEditableArea(function () {
        a._create();
      }), this.editableArea = this.sandbox.getContentEditable(), b.insert(this.editableArea).after(this.textarea.element), this._createWysiwygFormField());
    },
    _initSandbox: function _initSandbox() {
      var a,
          c = this;
      this.sandbox = new b.Sandbox(function () {
        c._create();
      }, {
        stylesheets: this.config.stylesheets
      }), this.editableArea = this.sandbox.getIframe(), a = this.textarea.element, b.insert(this.editableArea).after(a), this._createWysiwygFormField();
    },
    _createWysiwygFormField: function _createWysiwygFormField() {
      if (this.textarea.element.form) {
        var a = document.createElement("input");
        a.type = "hidden", a.name = "_wysihtml5_mode", a.value = 1, b.insert(a).after(this.textarea.element);
      }
    },
    _create: function _create() {
      var d,
          e,
          f = this;
      this.doc = this.sandbox.getDocument(), this.element = this.config.contentEditableMode ? this.sandbox.getContentEditable() : this.doc.body, this.config.noTextarea ? this.cleanUp() : (this.textarea = this.parent.textarea, this.element.innerHTML = this.textarea.getValue(!0, !1)), this.selection = new a.Selection(this.parent, this.element, this.config.uneditableContainerClassname), this.commands = new a.Commands(this.parent), this.config.noTextarea || b.copyAttributes(["className", "spellcheck", "title", "lang", "dir", "accessKey"]).from(this.textarea.element).to(this.element), b.addClass(this.element, this.config.composerClassName), this.config.style && !this.config.contentEditableMode && this.style(), this.observe(), d = this.config.name, d && (b.addClass(this.element, d), this.config.contentEditableMode || b.addClass(this.editableArea, d)), this.enable(), !this.config.noTextarea && this.textarea.element.disabled && this.disable(), e = "string" == typeof this.config.placeholder ? this.config.placeholder : this.config.noTextarea ? this.editableArea.getAttribute("data-placeholder") : this.textarea.element.getAttribute("placeholder"), e && b.simulatePlaceholder(this.parent, this, e), this.commands.exec("styleWithCSS", !1), this._initAutoLinking(), this._initObjectResizing(), this._initUndoManager(), this._initLineBreaking(), this.config.noTextarea || !this.textarea.element.hasAttribute("autofocus") && document.querySelector(":focus") != this.textarea.element || c.isIos() || setTimeout(function () {
        f.focus(!0);
      }, 100), c.clearsContentEditableCorrectly() || a.quirks.ensureProperClearing(this), this.initSync && this.config.sync && this.initSync(), this.config.noTextarea || this.textarea.hide(), this.parent.fire("beforeload").fire("load");
    },
    _initAutoLinking: function _initAutoLinking() {
      var d,
          e,
          f,
          g = this,
          h = c.canDisableAutoLinking(),
          i = c.doesAutoLinkingInContentEditable();
      h && this.commands.exec("autoUrlDetect", !1), this.config.autoLink && ((!i || i && h) && (this.parent.on("newword:composer", function () {
        b.getTextContent(g.element).match(b.autoLink.URL_REG_EXP) && g.selection.executeAndRestore(function (c, d) {
          var e,
              f = g.element.querySelectorAll("." + g.config.uneditableContainerClassname),
              h = !1;

          for (e = f.length; e--;) {
            a.dom.contains(f[e], d) && (h = !0);
          }

          h || b.autoLink(d.parentNode, [g.config.uneditableContainerClassname]);
        });
      }), b.observe(this.element, "blur", function () {
        b.autoLink(g.element, [g.config.uneditableContainerClassname]);
      })), d = this.sandbox.getDocument().getElementsByTagName("a"), e = b.autoLink.URL_REG_EXP, f = function f(c) {
        var d = a.lang.string(b.getTextContent(c)).trim();
        return "www." === d.substr(0, 4) && (d = "http://" + d), d;
      }, b.observe(this.element, "keydown", function (a) {
        if (d.length) {
          var c,
              h = g.selection.getSelectedNode(a.target.ownerDocument),
              i = b.getParentElement(h, {
            nodeName: "A"
          }, 4);
          i && (c = f(i), setTimeout(function () {
            var a = f(i);
            a !== c && a.match(e) && i.setAttribute("href", a);
          }, 0));
        }
      }));
    },
    _initObjectResizing: function _initObjectResizing() {
      if (this.commands.exec("enableObjectResizing", !0), c.supportsEvent("resizeend")) {
        var d = ["width", "height"],
            e = d.length,
            f = this.element;
        b.observe(f, "resizeend", function (b) {
          var c,
              g = b.target || b.srcElement,
              h = g.style,
              i = 0;

          if ("IMG" === g.nodeName) {
            for (; e > i; i++) {
              c = d[i], h[c] && (g.setAttribute(c, parseInt(h[c], 10)), h[c] = "");
            }

            a.quirks.redraw(f);
          }
        });
      }
    },
    _initUndoManager: function _initUndoManager() {
      this.undoManager = new a.UndoManager(this.parent);
    },
    _initLineBreaking: function _initLineBreaking() {
      function d(a) {
        var c = b.getParentElement(a, {
          nodeName: ["P", "DIV"]
        }, 2);
        c && b.contains(e.element, c) && e.selection.executeAndRestore(function () {
          e.config.useLineBreaks ? b.replaceWithChildNodes(c) : "P" !== c.nodeName && b.renameElement(c, "p");
        });
      }

      var e = this,
          f = ["LI", "P", "H1", "H2", "H3", "H4", "H5", "H6"],
          g = ["UL", "OL", "MENU"];
      this.config.useLineBreaks || b.observe(this.element, ["focus", "keydown"], function () {
        if (e.isEmpty()) {
          var a = e.doc.createElement("P");
          e.element.innerHTML = "", e.element.appendChild(a), c.displaysCaretInEmptyContentEditableCorrectly() ? e.selection.selectNode(a, !0) : (a.innerHTML = "<br>", e.selection.setBefore(a.firstChild));
        }
      }), b.observe(this.element, "keydown", function (c) {
        var h,
            i = c.keyCode;
        if (!c.shiftKey && (i === a.ENTER_KEY || i === a.BACKSPACE_KEY)) return h = b.getParentElement(e.selection.getSelectedNode(), {
          nodeName: f
        }, 4), h ? (setTimeout(function () {
          var c,
              f = e.selection.getSelectedNode();

          if ("LI" === h.nodeName) {
            if (!f) return;
            c = b.getParentElement(f, {
              nodeName: g
            }, 2), c || d(f);
          }

          i === a.ENTER_KEY && h.nodeName.match(/^H[1-6]$/) && d(f);
        }, 0), void 0) : (e.config.useLineBreaks && i === a.ENTER_KEY && !a.browser.insertsLineBreaksOnReturn() && (c.preventDefault(), e.commands.exec("insertLineBreak")), void 0);
      });
    }
  });
}(wysihtml5), function (a) {
  var b = a.dom,
      c = document,
      d = window,
      e = c.createElement("div"),
      f = ["background-color", "color", "cursor", "font-family", "font-size", "font-style", "font-variant", "font-weight", "line-height", "letter-spacing", "text-align", "text-decoration", "text-indent", "text-rendering", "word-break", "word-wrap", "word-spacing"],
      g = ["background-color", "border-collapse", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-left-color", "border-left-style", "border-left-width", "border-right-color", "border-right-style", "border-right-width", "border-top-color", "border-top-style", "border-top-width", "clear", "display", "float", "margin-bottom", "margin-left", "margin-right", "margin-top", "outline-color", "outline-offset", "outline-width", "outline-style", "padding-left", "padding-right", "padding-top", "padding-bottom", "position", "top", "left", "right", "bottom", "z-index", "vertical-align", "text-align", "-webkit-box-sizing", "-moz-box-sizing", "-ms-box-sizing", "box-sizing", "-webkit-box-shadow", "-moz-box-shadow", "-ms-box-shadow", "box-shadow", "-webkit-border-top-right-radius", "-moz-border-radius-topright", "border-top-right-radius", "-webkit-border-bottom-right-radius", "-moz-border-radius-bottomright", "border-bottom-right-radius", "-webkit-border-bottom-left-radius", "-moz-border-radius-bottomleft", "border-bottom-left-radius", "-webkit-border-top-left-radius", "-moz-border-radius-topleft", "border-top-left-radius", "width", "height"],
      h = ["html                 { height: 100%; }", "body                 { height: 100%; padding: 1px 0 0 0; margin: -1px 0 0 0; }", "body > p:first-child { margin-top: 0; }", "._wysihtml5-temp     { display: none; }", a.browser.isGecko ? "body.placeholder { color: graytext !important; }" : "body.placeholder { color: #a9a9a9 !important; }", "img:-moz-broken      { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],
      i = function i(a) {
    if (a.setActive) try {
      a.setActive();
    } catch (e) {} else {
      var f = a.style,
          g = c.documentElement.scrollTop || c.body.scrollTop,
          h = c.documentElement.scrollLeft || c.body.scrollLeft,
          i = {
        position: f.position,
        top: f.top,
        left: f.left,
        WebkitUserSelect: f.WebkitUserSelect
      };
      b.setStyles({
        position: "absolute",
        top: "-99999px",
        left: "-99999px",
        WebkitUserSelect: "none"
      }).on(a), a.focus(), b.setStyles(i).on(a), d.scrollTo && d.scrollTo(h, g);
    }
  };

  a.views.Composer.prototype.style = function () {
    var d,
        j,
        k = this,
        l = c.querySelector(":focus"),
        m = this.textarea.element,
        n = m.hasAttribute("placeholder"),
        o = n && m.getAttribute("placeholder"),
        p = m.style.display,
        q = m.disabled;
    return this.focusStylesHost = e.cloneNode(!1), this.blurStylesHost = e.cloneNode(!1), this.disabledStylesHost = e.cloneNode(!1), n && m.removeAttribute("placeholder"), m === l && m.blur(), m.disabled = !1, m.style.display = d = "none", (m.getAttribute("rows") && "auto" === b.getStyle("height").from(m) || m.getAttribute("cols") && "auto" === b.getStyle("width").from(m)) && (m.style.display = d = p), b.copyStyles(g).from(m).to(this.editableArea).andTo(this.blurStylesHost), b.copyStyles(f).from(m).to(this.element).andTo(this.blurStylesHost), b.insertCSS(h).into(this.element.ownerDocument), m.disabled = !0, b.copyStyles(g).from(m).to(this.disabledStylesHost), b.copyStyles(f).from(m).to(this.disabledStylesHost), m.disabled = q, m.style.display = p, i(m), m.style.display = d, b.copyStyles(g).from(m).to(this.focusStylesHost), b.copyStyles(f).from(m).to(this.focusStylesHost), m.style.display = p, b.copyStyles(["display"]).from(m).to(this.editableArea), j = a.lang.array(g).without(["display"]), l ? l.focus() : m.blur(), n && m.setAttribute("placeholder", o), this.parent.on("focus:composer", function () {
      b.copyStyles(j).from(k.focusStylesHost).to(k.editableArea), b.copyStyles(f).from(k.focusStylesHost).to(k.element);
    }), this.parent.on("blur:composer", function () {
      b.copyStyles(j).from(k.blurStylesHost).to(k.editableArea), b.copyStyles(f).from(k.blurStylesHost).to(k.element);
    }), this.parent.observe("disable:composer", function () {
      b.copyStyles(j).from(k.disabledStylesHost).to(k.editableArea), b.copyStyles(f).from(k.disabledStylesHost).to(k.element);
    }), this.parent.observe("enable:composer", function () {
      b.copyStyles(j).from(k.blurStylesHost).to(k.editableArea), b.copyStyles(f).from(k.blurStylesHost).to(k.element);
    }), this;
  };
}(wysihtml5), function (a) {
  var b = a.dom,
      c = a.browser,
      d = {
    66: "bold",
    73: "italic",
    85: "underline"
  },
      e = function e(a, b, c) {
    var d,
        e = a.getPreviousNode(b, !0),
        f = a.getSelectedNode();
    if (1 !== f.nodeType && f.parentNode !== c && (f = f.parentNode), e) if (1 == f.nodeType) {
      if (d = f.firstChild, 1 == e.nodeType) for (; f.firstChild;) {
        e.appendChild(f.firstChild);
      } else for (; f.firstChild;) {
        b.parentNode.insertBefore(f.firstChild, b);
      }
      f.parentNode && f.parentNode.removeChild(f), a.setBefore(d);
    } else 1 == e.nodeType ? e.appendChild(f) : b.parentNode.insertBefore(f, b), a.setBefore(f);
  },
      f = function f(a, b, c, d) {
    var f, g, h;
    b.isCollapsed() ? b.caretIsInTheBeginnig("LI") ? (a.preventDefault(), d.commands.exec("outdentList")) : b.caretIsInTheBeginnig() ? a.preventDefault() : (b.caretIsFirstInSelection() && b.getPreviousNode() && b.getPreviousNode().nodeName && /^H\d$/gi.test(b.getPreviousNode().nodeName) && (f = b.getPreviousNode(), a.preventDefault(), /^\s*$/.test(f.textContent || f.innerText) ? f.parentNode.removeChild(f) : (g = f.ownerDocument.createRange(), g.selectNodeContents(f), g.collapse(!1), b.setSelection(g))), h = b.caretIsBeforeUneditable(), h && (a.preventDefault(), e(b, h, c))) : b.containsUneditable() && (a.preventDefault(), b.deleteContents());
  },
      g = function g(a) {
    if (a.selection.isCollapsed()) {
      if (a.selection.caretIsInTheBeginnig("LI") && a.commands.exec("indentList")) return;
    } else a.selection.deleteContents();

    a.commands.exec("insertHTML", "&emsp;");
  };

  a.views.Composer.prototype.observe = function () {
    var e,
        h,
        i = this,
        j = this.getValue(!1, !1),
        k = this.sandbox.getIframe ? this.sandbox.getIframe() : this.sandbox.getContentEditable(),
        l = this.element,
        m = c.supportsEventsInIframeCorrectly() || this.sandbox.getContentEditable ? l : this.sandbox.getWindow(),
        n = ["drop", "paste", "beforepaste"],
        o = ["drop", "paste", "mouseup", "focus", "keyup"];
    b.observe(k, "DOMNodeRemoved", function () {
      clearInterval(e), i.parent.fire("destroy:composer");
    }), c.supportsMutationEvents() || (e = setInterval(function () {
      b.contains(document.documentElement, k) || (clearInterval(e), i.parent.fire("destroy:composer"));
    }, 250)), b.observe(m, o, function () {
      setTimeout(function () {
        i.parent.fire("interaction").fire("interaction:composer");
      }, 0);
    }), this.config.handleTables && (!this.tableClickHandle && this.doc.execCommand && a.browser.supportsCommand(this.doc, "enableObjectResizing") && a.browser.supportsCommand(this.doc, "enableInlineTableEditing") && (this.sandbox.getIframe ? this.tableClickHandle = b.observe(k, ["focus", "mouseup", "mouseover"], function () {
      i.doc.execCommand("enableObjectResizing", !1, "false"), i.doc.execCommand("enableInlineTableEditing", !1, "false"), i.tableClickHandle.stop();
    }) : setTimeout(function () {
      i.doc.execCommand("enableObjectResizing", !1, "false"), i.doc.execCommand("enableInlineTableEditing", !1, "false");
    }, 0)), this.tableSelection = a.quirks.tableCellsSelection(l, i.parent)), b.observe(m, "focus", function (a) {
      i.parent.fire("focus", a).fire("focus:composer", a), setTimeout(function () {
        j = i.getValue(!1, !1);
      }, 0);
    }), b.observe(m, "blur", function (a) {
      if (j !== i.getValue(!1, !1)) {
        var b = a;
        "function" == typeof Object.create && (b = Object.create(a, {
          type: {
            value: "change"
          }
        })), i.parent.fire("change", b).fire("change:composer", b);
      }

      i.parent.fire("blur", a).fire("blur:composer", a);
    }), b.observe(l, "dragenter", function () {
      i.parent.fire("unset_placeholder");
    }), b.observe(l, n, function (a) {
      i.parent.fire(a.type, a).fire(a.type + ":composer", a);
    }), this.config.copyedFromMarking && b.observe(l, "copy", function (a) {
      a.clipboardData && (a.clipboardData.setData("text/html", i.config.copyedFromMarking + i.selection.getHtml()), a.preventDefault()), i.parent.fire(a.type, a).fire(a.type + ":composer", a);
    }), b.observe(l, "keyup", function (b) {
      var c = b.keyCode;
      (c === a.SPACE_KEY || c === a.ENTER_KEY) && i.parent.fire("newword:composer");
    }), this.parent.on("paste:composer", function () {
      setTimeout(function () {
        i.parent.fire("newword:composer");
      }, 0);
    }), c.canSelectImagesInContentEditable() || b.observe(l, "mousedown", function (b) {
      var c = b.target,
          d = l.querySelectorAll("img"),
          e = l.querySelectorAll("." + i.config.uneditableContainerClassname + " img"),
          f = a.lang.array(d).without(e);
      "IMG" === c.nodeName && a.lang.array(f).contains(c) && i.selection.selectNode(c);
    }), c.canSelectImagesInContentEditable() || b.observe(l, "drop", function () {
      setTimeout(function () {
        i.selection.getSelection().removeAllRanges();
      }, 0);
    }), c.hasHistoryIssue() && c.supportsSelectionModify() && b.observe(l, "keydown", function (a) {
      if (a.metaKey || a.ctrlKey) {
        var b = a.keyCode,
            c = l.ownerDocument.defaultView,
            d = c.getSelection();
        (37 === b || 39 === b) && (37 === b && (d.modify("extend", "left", "lineboundary"), a.shiftKey || d.collapseToStart()), 39 === b && (d.modify("extend", "right", "lineboundary"), a.shiftKey || d.collapseToEnd()), a.preventDefault());
      }
    }), b.observe(l, "keydown", function (a) {
      var b = a.keyCode,
          c = d[b];
      (a.ctrlKey || a.metaKey) && !a.altKey && c && (i.commands.exec(c), a.preventDefault()), 8 === b ? f(a, i.selection, l, i) : i.config.handleTabKey && 9 === b && (a.preventDefault(), g(i, l));
    }), b.observe(l, "keydown", function (b) {
      var c,
          d = i.selection.getSelectedNode(!0),
          e = b.keyCode;
      !d || "IMG" !== d.nodeName || e !== a.BACKSPACE_KEY && e !== a.DELETE_KEY || (c = d.parentNode, c.removeChild(d), "A" !== c.nodeName || c.firstChild || c.parentNode.removeChild(c), setTimeout(function () {
        a.quirks.redraw(l);
      }, 0), b.preventDefault());
    }), !this.config.contentEditableMode && c.hasIframeFocusIssue() && (b.observe(k, "focus", function () {
      setTimeout(function () {
        i.doc.querySelector(":focus") !== i.element && i.focus();
      }, 0);
    }), b.observe(this.element, "blur", function () {
      setTimeout(function () {
        i.selection.getSelection().removeAllRanges();
      }, 0);
    })), h = {
      IMG: "Image: ",
      A: "Link: "
    }, b.observe(l, "mouseover", function (a) {
      var b,
          c,
          d = a.target,
          e = d.nodeName;
      ("A" === e || "IMG" === e) && (c = d.hasAttribute("title"), c || (b = h[e] + (d.getAttribute("href") || d.getAttribute("src")), d.setAttribute("title", b)));
    });
  };
}(wysihtml5), function (a) {
  var b = 400;
  a.views.Synchronizer = Base.extend({
    constructor: function constructor(a, b, c) {
      this.editor = a, this.textarea = b, this.composer = c, this._observe();
    },
    fromComposerToTextarea: function fromComposerToTextarea(b) {
      this.textarea.setValue(a.lang.string(this.composer.getValue(!1, !1)).trim(), b);
    },
    fromTextareaToComposer: function fromTextareaToComposer(a) {
      var b = this.textarea.getValue(!1, !1);
      b ? this.composer.setValue(b, a) : (this.composer.clear(), this.editor.fire("set_placeholder"));
    },
    sync: function sync(a) {
      "textarea" === this.editor.currentView.name ? this.fromTextareaToComposer(a) : this.fromComposerToTextarea(a);
    },
    _observe: function _observe() {
      var c,
          d = this,
          e = this.textarea.element.form,
          f = function f() {
        c = setInterval(function () {
          d.fromComposerToTextarea();
        }, b);
      },
          g = function g() {
        clearInterval(c), c = null;
      };

      f(), e && (a.dom.observe(e, "submit", function () {
        d.sync(!0);
      }), a.dom.observe(e, "reset", function () {
        setTimeout(function () {
          d.fromTextareaToComposer();
        }, 0);
      })), this.editor.on("change_view", function (a) {
        "composer" !== a || c ? "textarea" === a && (d.fromComposerToTextarea(!0), g()) : (d.fromTextareaToComposer(!0), f());
      }), this.editor.on("destroy:composer", g);
    }
  });
}(wysihtml5), wysihtml5.views.Textarea = wysihtml5.views.View.extend({
  name: "textarea",
  constructor: function constructor(a, b, c) {
    this.base(a, b, c), this._observe();
  },
  clear: function clear() {
    this.element.value = "";
  },
  getValue: function getValue(a) {
    var b = this.isEmpty() ? "" : this.element.value;
    return a !== !1 && (b = this.parent.parse(b)), b;
  },
  setValue: function setValue(a, b) {
    b && (a = this.parent.parse(a)), this.element.value = a;
  },
  cleanUp: function cleanUp() {
    var a = this.parent.parse(this.element.value);
    this.element.value = a;
  },
  hasPlaceholderSet: function hasPlaceholderSet() {
    var a = wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),
        b = this.element.getAttribute("placeholder") || null,
        c = this.element.value,
        d = !c;
    return a && d || c === b;
  },
  isEmpty: function isEmpty() {
    return !wysihtml5.lang.string(this.element.value).trim() || this.hasPlaceholderSet();
  },
  _observe: function _observe() {
    var a = this.element,
        b = this.parent,
        c = {
      focusin: "focus",
      focusout: "blur"
    },
        d = wysihtml5.browser.supportsEvent("focusin") ? ["focusin", "focusout", "change"] : ["focus", "blur", "change"];
    b.on("beforeload", function () {
      wysihtml5.dom.observe(a, d, function (a) {
        var d = c[a.type] || a.type;
        b.fire(d).fire(d + ":textarea");
      }), wysihtml5.dom.observe(a, ["paste", "drop"], function () {
        setTimeout(function () {
          b.fire("paste").fire("paste:textarea");
        }, 0);
      });
    });
  }
}), function (a) {
  var b,
      c = {
    name: b,
    style: !0,
    toolbar: b,
    showToolbarAfterInit: !0,
    autoLink: !0,
    handleTables: !0,
    handleTabKey: !0,
    parserRules: {
      tags: {
        br: {},
        span: {},
        div: {},
        p: {}
      },
      classes: {}
    },
    pasteParserRulesets: null,
    parser: a.dom.parse,
    composerClassName: "wysihtml5-editor",
    bodyClassName: "wysihtml5-supported",
    useLineBreaks: !0,
    stylesheets: [],
    placeholderText: b,
    supportTouchDevices: !0,
    cleanUp: !0,
    contentEditableMode: !1,
    uneditableContainerClassname: "wysihtml5-uneditable-container",
    copyedFromMarking: '<meta name="copied-from" content="wysihtml5">'
  };
  a.Editor = a.lang.Dispatcher.extend({
    constructor: function constructor(b, d) {
      if (this.editableElement = "string" == typeof b ? document.getElementById(b) : b, this.config = a.lang.object({}).merge(c).merge(d).get(), this._isCompatible = a.browser.supported(), "textarea" != this.editableElement.nodeName.toLowerCase() && (this.config.contentEditableMode = !0, this.config.noTextarea = !0), this.config.noTextarea || (this.textarea = new a.views.Textarea(this, this.editableElement, this.config), this.currentView = this.textarea), !this._isCompatible || !this.config.supportTouchDevices && a.browser.isTouchDevice()) {
        var e = this;
        return setTimeout(function () {
          e.fire("beforeload").fire("load");
        }, 0), void 0;
      }

      a.dom.addClass(document.body, this.config.bodyClassName), this.composer = new a.views.Composer(this, this.editableElement, this.config), this.currentView = this.composer, "function" == typeof this.config.parser && this._initParser(), this.on("beforeload", this.handleBeforeLoad);
    },
    handleBeforeLoad: function handleBeforeLoad() {
      this.config.noTextarea || (this.synchronizer = new a.views.Synchronizer(this, this.textarea, this.composer)), this.config.toolbar && (this.toolbar = new a.toolbar.Toolbar(this, this.config.toolbar, this.config.showToolbarAfterInit));
    },
    isCompatible: function isCompatible() {
      return this._isCompatible;
    },
    clear: function clear() {
      return this.currentView.clear(), this;
    },
    getValue: function getValue(a, b) {
      return this.currentView.getValue(a, b);
    },
    setValue: function setValue(a, b) {
      return this.fire("unset_placeholder"), a ? (this.currentView.setValue(a, b), this) : this.clear();
    },
    cleanUp: function cleanUp() {
      this.currentView.cleanUp();
    },
    focus: function focus(a) {
      return this.currentView.focus(a), this;
    },
    disable: function disable() {
      return this.currentView.disable(), this;
    },
    enable: function enable() {
      return this.currentView.enable(), this;
    },
    isEmpty: function isEmpty() {
      return this.currentView.isEmpty();
    },
    hasPlaceholderSet: function hasPlaceholderSet() {
      return this.currentView.hasPlaceholderSet();
    },
    parse: function parse(b, c) {
      var d = this.config.contentEditableMode ? document : this.composer ? this.composer.sandbox.getDocument() : null,
          e = this.config.parser(b, {
        rules: this.config.parserRules,
        cleanUp: this.config.cleanUp,
        context: d,
        uneditableClass: this.config.uneditableContainerClassname,
        clearInternals: c
      });
      return "object" == _typeof(b) && a.quirks.redraw(b), e;
    },
    _initParser: function _initParser() {
      var b,
          c = this;
      a.browser.supportsModenPaste() ? this.on("paste:composer", function (d) {
        d.preventDefault(), b = a.dom.getPastedHtml(d), b && c._cleanAndPaste(b);
      }) : this.on("beforepaste:composer", function (b) {
        b.preventDefault(), a.dom.getPastedHtmlWithDiv(c.composer, function (a) {
          a && c._cleanAndPaste(a);
        });
      });
    },
    _cleanAndPaste: function _cleanAndPaste(b) {
      var c = a.quirks.cleanPastedHTML(b, {
        referenceNode: this.composer.element,
        rules: this.config.pasteParserRulesets || [{
          set: this.config.parserRules
        }],
        uneditableClass: this.config.uneditableContainerClassname
      });
      this.composer.selection.deleteContents(), this.composer.selection.insertHTML(c);
    }
  });
}(wysihtml5), function (a) {
  var b = a.dom,
      c = "wysihtml5-command-dialog-opened",
      d = "input, select, textarea",
      e = "[data-wysihtml5-dialog-field]",
      f = "data-wysihtml5-dialog-field";
  a.toolbar.Dialog = a.lang.Dispatcher.extend({
    constructor: function constructor(a, b) {
      this.link = a, this.container = b;
    },
    _observe: function _observe() {
      var e, f, g, h, i, j;

      if (!this._observed) {
        for (e = this, f = function f(a) {
          var b = e._serialize();

          b == e.elementToChange ? e.fire("edit", b) : e.fire("save", b), e.hide(), a.preventDefault(), a.stopPropagation();
        }, b.observe(e.link, "click", function () {
          b.hasClass(e.link, c) && setTimeout(function () {
            e.hide();
          }, 0);
        }), b.observe(this.container, "keydown", function (b) {
          var c = b.keyCode;
          c === a.ENTER_KEY && f(b), c === a.ESCAPE_KEY && (e.fire("cancel"), e.hide());
        }), b.delegate(this.container, "[data-wysihtml5-dialog-action=save]", "click", f), b.delegate(this.container, "[data-wysihtml5-dialog-action=cancel]", "click", function (a) {
          e.fire("cancel"), e.hide(), a.preventDefault(), a.stopPropagation();
        }), g = this.container.querySelectorAll(d), h = 0, i = g.length, j = function j() {
          clearInterval(e.interval);
        }; i > h; h++) {
          b.observe(g[h], "change", j);
        }

        this._observed = !0;
      }
    },
    _serialize: function _serialize() {
      for (var a = this.elementToChange || {}, b = this.container.querySelectorAll(e), c = b.length, d = 0; c > d; d++) {
        a[b[d].getAttribute(f)] = b[d].value;
      }

      return a;
    },
    _interpolate: function _interpolate(a) {
      for (var b, c, d, g = document.querySelector(":focus"), h = this.container.querySelectorAll(e), i = h.length, j = 0; i > j; j++) {
        b = h[j], b !== g && (a && "hidden" === b.type || (c = b.getAttribute(f), d = this.elementToChange && "boolean" != typeof this.elementToChange ? this.elementToChange.getAttribute(c) || "" : b.defaultValue, b.value = d));
      }
    },
    show: function show(a) {
      if (!b.hasClass(this.link, c)) {
        var e = this,
            f = this.container.querySelector(d);
        if (this.elementToChange = a, this._observe(), this._interpolate(), a && (this.interval = setInterval(function () {
          e._interpolate(!0);
        }, 500)), b.addClass(this.link, c), this.container.style.display = "", this.fire("show"), f && !a) try {
          f.focus();
        } catch (g) {}
      }
    },
    hide: function hide() {
      clearInterval(this.interval), this.elementToChange = null, b.removeClass(this.link, c), this.container.style.display = "none", this.fire("hide");
    }
  });
}(wysihtml5), function (a) {
  var b = a.dom,
      c = {
    position: "relative"
  },
      d = {
    left: 0,
    margin: 0,
    opacity: 0,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 0,
    zIndex: 1
  },
      e = {
    cursor: "inherit",
    fontSize: "50px",
    height: "50px",
    marginTop: "-25px",
    outline: 0,
    padding: 0,
    position: "absolute",
    right: "-4px",
    top: "50%"
  },
      f = {
    "x-webkit-speech": "",
    speech: ""
  };

  a.toolbar.Speech = function (g, h) {
    var i,
        j,
        k,
        l = document.createElement("input");
    return a.browser.supportsSpeechApiOn(l) ? (i = g.editor.textarea.element.getAttribute("lang"), i && (f.lang = i), j = document.createElement("div"), a.lang.object(d).merge({
      width: h.offsetWidth + "px",
      height: h.offsetHeight + "px"
    }), b.insert(l).into(j), b.insert(j).into(h), b.setStyles(e).on(l), b.setAttributes(f).on(l), b.setStyles(d).on(j), b.setStyles(c).on(h), k = "onwebkitspeechchange" in l ? "webkitspeechchange" : "speechchange", b.observe(l, k, function () {
      g.execCommand("insertText", l.value), l.value = "";
    }), b.observe(l, "click", function (a) {
      b.hasClass(h, "wysihtml5-command-disabled") && a.preventDefault(), a.stopPropagation();
    }), void 0) : (h.style.display = "none", void 0);
  };
}(wysihtml5), function (a) {
  var b = "wysihtml5-command-disabled",
      c = "wysihtml5-commands-disabled",
      d = "wysihtml5-command-active",
      e = "wysihtml5-action-active",
      f = a.dom;
  a.toolbar.Toolbar = Base.extend({
    constructor: function constructor(f, g, h) {
      this.editor = f, this.container = "string" == typeof g ? document.getElementById(g) : g, this.composer = f.composer, this._getLinks("command"), this._getLinks("action"), this._observe(), h && this.show(), null != f.config.classNameCommandDisabled && (b = f.config.classNameCommandDisabled), null != f.config.classNameCommandsDisabled && (c = f.config.classNameCommandsDisabled), null != f.config.classNameCommandActive && (d = f.config.classNameCommandActive), null != f.config.classNameActionActive && (e = f.config.classNameActionActive);

      for (var i = this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"), j = i.length, k = 0; j > k; k++) {
        new a.toolbar.Speech(this, i[k]);
      }
    },
    _getLinks: function _getLinks(b) {
      for (var c, d, e, f, g, h = this[b + "Links"] = a.lang.array(this.container.querySelectorAll("[data-wysihtml5-" + b + "]")).get(), i = h.length, j = 0, k = this[b + "Mapping"] = {}; i > j; j++) {
        c = h[j], e = c.getAttribute("data-wysihtml5-" + b), f = c.getAttribute("data-wysihtml5-" + b + "-value"), d = this.container.querySelector("[data-wysihtml5-" + b + "-group='" + e + "']"), g = this._getDialog(c, e), k[e + ":" + f] = {
          link: c,
          group: d,
          name: e,
          value: f,
          dialog: g,
          state: !1
        };
      }
    },
    _getDialog: function _getDialog(b, c) {
      var d,
          e,
          f = this,
          g = this.container.querySelector("[data-wysihtml5-dialog='" + c + "']");
      return g && (d = a.toolbar["Dialog_" + c] ? new a.toolbar["Dialog_" + c](b, g) : new a.toolbar.Dialog(b, g), d.on("show", function () {
        e = f.composer.selection.getBookmark(), f.editor.fire("show:dialog", {
          command: c,
          dialogContainer: g,
          commandLink: b
        });
      }), d.on("save", function (a) {
        e && f.composer.selection.setBookmark(e), f._execCommand(c, a), f.editor.fire("save:dialog", {
          command: c,
          dialogContainer: g,
          commandLink: b
        });
      }), d.on("cancel", function () {
        f.editor.focus(!1), f.editor.fire("cancel:dialog", {
          command: c,
          dialogContainer: g,
          commandLink: b
        });
      })), d;
    },
    execCommand: function execCommand(a, b) {
      if (!this.commandsDisabled) {
        var c = this.commandMapping[a + ":" + b];
        c && c.dialog && !c.state ? c.dialog.show() : this._execCommand(a, b);
      }
    },
    _execCommand: function _execCommand(a, b) {
      this.editor.focus(!1), this.composer.commands.exec(a, b), this._updateLinkStates();
    },
    execAction: function execAction(a) {
      var b = this.editor;
      "change_view" === a && b.textarea && (b.currentView === b.textarea ? b.fire("change_view", "composer") : b.fire("change_view", "textarea")), "showSource" == a && b.fire("showSource");
    },
    _observe: function _observe() {
      for (var a = this, b = this.editor, d = this.container, e = this.commandLinks.concat(this.actionLinks), g = e.length, h = 0; g > h; h++) {
        "A" === e[h].nodeName ? f.setAttributes({
          href: "javascript:;",
          unselectable: "on"
        }).on(e[h]) : f.setAttributes({
          unselectable: "on"
        }).on(e[h]);
      }

      f.delegate(d, "[data-wysihtml5-command], [data-wysihtml5-action]", "mousedown", function (a) {
        a.preventDefault();
      }), f.delegate(d, "[data-wysihtml5-command]", "click", function (b) {
        var c = this,
            d = c.getAttribute("data-wysihtml5-command"),
            e = c.getAttribute("data-wysihtml5-command-value");
        a.execCommand(d, e), b.preventDefault();
      }), f.delegate(d, "[data-wysihtml5-action]", "click", function (b) {
        var c = this.getAttribute("data-wysihtml5-action");
        a.execAction(c), b.preventDefault();
      }), b.on("interaction:composer", function () {
        a._updateLinkStates();
      }), b.on("focus:composer", function () {
        a.bookmark = null;
      }), this.editor.config.handleTables && (b.on("tableselect:composer", function () {
        a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display = "";
      }), b.on("tableunselect:composer", function () {
        a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display = "none";
      })), b.on("change_view", function (e) {
        b.textarea && setTimeout(function () {
          a.commandsDisabled = "composer" !== e, a._updateLinkStates(), a.commandsDisabled ? f.addClass(d, c) : f.removeClass(d, c);
        }, 0);
      });
    },
    _updateLinkStates: function _updateLinkStates() {
      var c,
          g,
          h,
          i,
          j = this.commandMapping,
          k = this.actionMapping;

      for (c in j) {
        i = j[c], this.commandsDisabled ? (g = !1, f.removeClass(i.link, d), i.group && f.removeClass(i.group, d), i.dialog && i.dialog.hide()) : (g = this.composer.commands.state(i.name, i.value), f.removeClass(i.link, b), i.group && f.removeClass(i.group, b)), i.state !== g && (i.state = g, g ? (f.addClass(i.link, d), i.group && f.addClass(i.group, d), i.dialog && ("object" == _typeof(g) || a.lang.object(g).isArray() ? (!i.dialog.multiselect && a.lang.object(g).isArray() && (g = 1 === g.length ? g[0] : !0, i.state = g), i.dialog.show(g)) : i.dialog.hide())) : (f.removeClass(i.link, d), i.group && f.removeClass(i.group, d), i.dialog && i.dialog.hide()));
      }

      for (c in k) {
        h = k[c], "change_view" === h.name && (h.state = this.editor.currentView === this.editor.textarea, h.state ? f.addClass(h.link, e) : f.removeClass(h.link, e));
      }
    },
    show: function show() {
      this.container.style.display = "";
    },
    hide: function hide() {
      this.container.style.display = "none";
    }
  });
}(wysihtml5), function (a) {
  a.toolbar.Dialog_createTable = a.toolbar.Dialog.extend({
    show: function show(a) {
      this.base(a);
    }
  });
}(wysihtml5), function (a) {
  var b = (a.dom, "[data-wysihtml5-dialog-field]"),
      c = "data-wysihtml5-dialog-field";
  a.toolbar.Dialog_foreColorStyle = a.toolbar.Dialog.extend({
    multiselect: !0,
    _serialize: function _serialize() {
      for (var a = {}, d = this.container.querySelectorAll(b), e = d.length, f = 0; e > f; f++) {
        a[d[f].getAttribute(c)] = d[f].value;
      }

      return a;
    },
    _interpolate: function _interpolate(d) {
      for (var e, f = document.querySelector(":focus"), g = this.container.querySelectorAll(b), h = g.length, i = 0, j = this.elementToChange ? a.lang.object(this.elementToChange).isArray() ? this.elementToChange[0] : this.elementToChange : null, k = j ? j.getAttribute("style") : null, l = k ? a.quirks.styleParser.parseColor(k, "color") : null; h > i; i++) {
        e = g[i], e !== f && (d && "hidden" === e.type || "color" === e.getAttribute(c) && (e.value = l ? l[3] && 1 != l[3] ? "rgba(" + l[0] + "," + l[1] + "," + l[2] + "," + l[3] + ");" : "rgb(" + l[0] + "," + l[1] + "," + l[2] + ");" : "rgb(0,0,0);"));
      }
    }
  });
}(wysihtml5), function (a) {
  a.dom;
  a.toolbar.Dialog_fontSizeStyle = a.toolbar.Dialog.extend({
    multiselect: !0,
    _serialize: function _serialize() {
      return {
        size: this.container.querySelector('[data-wysihtml5-dialog-field="size"]').value
      };
    },
    _interpolate: function _interpolate() {
      var b = document.querySelector(":focus"),
          c = this.container.querySelector("[data-wysihtml5-dialog-field='size']"),
          d = this.elementToChange ? a.lang.object(this.elementToChange).isArray() ? this.elementToChange[0] : this.elementToChange : null,
          e = d ? d.getAttribute("style") : null,
          f = e ? a.quirks.styleParser.parseFontSize(e) : null;
      c && c !== b && f && !/^\s*$/.test(f) && (c.value = f);
    }
  });
}(wysihtml5), Handlebars = function () {
  var a = function () {
    "use strict";

    function a(a) {
      this.string = a;
    }

    var b;
    return a.prototype.toString = function () {
      return "" + this.string;
    }, b = a;
  }(),
      b = function (a) {
    "use strict";

    function b(a) {
      return k[a] || "&amp;";
    }

    function c(a, b) {
      for (var c in b) {
        Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
      }
    }

    function d(a) {
      return a instanceof j ? "" + a : a || 0 === a ? (a = "" + a, m.test(a) ? a.replace(l, b) : a) : "";
    }

    function e(a) {
      return a || 0 === a ? h(a) && 0 === a.length ? !0 : !1 : !0;
    }

    var f,
        g,
        h,
        i = {},
        j = a,
        k = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
        l = /[&<>"'`]/g,
        m = /[&<>"'`]/;
    return i.extend = c, f = Object.prototype.toString, i.toString = f, g = function g(a) {
      return "function" == typeof a;
    }, g(/x/) && (g = function g(a) {
      return "function" == typeof a && "[object Function]" === f.call(a);
    }), i.isFunction = g, h = Array.isArray || function (a) {
      return a && "object" == _typeof(a) ? "[object Array]" === f.call(a) : !1;
    }, i.isArray = h, i.escapeExpression = d, i.isEmpty = e, i;
  }(a),
      c = function () {
    "use strict";

    function a(a, b) {
      var d, e, f;

      for (b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn), e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) {
        this[c[f]] = e[c[f]];
      }

      d && (this.lineNumber = d, this.column = b.firstColumn);
    }

    var b,
        c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    return a.prototype = Error(), b = a;
  }(),
      d = function (a, b) {
    "use strict";

    function c(a, b) {
      this.helpers = a || {}, this.partials = b || {}, d(this);
    }

    function d(a) {
      a.registerHelper("helperMissing", function (a) {
        if (2 === arguments.length) return void 0;
        throw new p("Missing helper: '" + a + "'");
      }), a.registerHelper("blockHelperMissing", function (b, c) {
        var d = c.inverse || function () {},
            e = c.fn;

        return i(b) && (b = b.call(this)), b === !0 ? e(this) : b === !1 || null == b ? d(this) : h(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b);
      }), a.registerHelper("each", function (a, b) {
        var c,
            d,
            e,
            f = b.fn,
            g = b.inverse,
            j = 0,
            k = "";
        if (i(a) && (a = a.call(this)), b.data && (c = m(b.data)), a && "object" == _typeof(a)) if (h(a)) for (d = a.length; d > j; j++) {
          c && (c.index = j, c.first = 0 === j, c.last = j === a.length - 1), k += f(a[j], {
            data: c
          });
        } else for (e in a) {
          a.hasOwnProperty(e) && (c && (c.key = e, c.index = j, c.first = 0 === j), k += f(a[e], {
            data: c
          }), j++);
        }
        return 0 === j && (k = g(this)), k;
      }), a.registerHelper("if", function (a, b) {
        return i(a) && (a = a.call(this)), !b.hash.includeZero && !a || o.isEmpty(a) ? b.inverse(this) : b.fn(this);
      }), a.registerHelper("unless", function (b, c) {
        return a.helpers["if"].call(this, b, {
          fn: c.inverse,
          inverse: c.fn,
          hash: c.hash
        });
      }), a.registerHelper("with", function (a, b) {
        return i(a) && (a = a.call(this)), o.isEmpty(a) ? void 0 : b.fn(a);
      }), a.registerHelper("log", function (b, c) {
        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
        a.log(d, b);
      });
    }

    function e(a, b) {
      l.log(a, b);
    }

    var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = {},
        o = a,
        p = b,
        q = "1.3.0";
    return n.VERSION = q, f = 4, n.COMPILER_REVISION = f, g = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: ">= 1.0.0"
    }, n.REVISION_CHANGES = g, h = o.isArray, i = o.isFunction, j = o.toString, k = "[object Object]", n.HandlebarsEnvironment = c, c.prototype = {
      constructor: c,
      logger: l,
      log: e,
      registerHelper: function registerHelper(a, b, c) {
        if (j.call(a) === k) {
          if (c || b) throw new p("Arg not supported with multiple helpers");
          o.extend(this.helpers, a);
        } else c && (b.not = c), this.helpers[a] = b;
      },
      registerPartial: function registerPartial(a, b) {
        j.call(a) === k ? o.extend(this.partials, a) : this.partials[a] = b;
      }
    }, l = {
      methodMap: {
        0: "debug",
        1: "info",
        2: "warn",
        3: "error"
      },
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      log: function log(a, b) {
        if (l.level <= a) {
          var c = l.methodMap[a];
          "undefined" != typeof console && console[c] && console[c].call(console, b);
        }
      }
    }, n.logger = l, n.log = e, m = function m(a) {
      var b = {};
      return o.extend(b, a), b;
    }, n.createFrame = m, n;
  }(b, c),
      e = function (a, b, c) {
    "use strict";

    function d(a) {
      var b,
          c,
          d = a && a[0] || 1,
          e = m;

      if (d !== e) {
        if (e > d) throw b = n[e], c = n[d], new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + b + ") or downgrade your runtime to an older version (" + c + ").");
        throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
      }
    }

    function e(a, b) {
      if (!b) throw new l("No environment passed to template");

      var c = function (_c2) {
        function c(_x4, _x5, _x6, _x7, _x8, _x9) {
          return _c2.apply(this, arguments);
        }

        c.toString = function () {
          return _c2.toString();
        };

        return c;
      }(function (a, c, d, e, f, g) {
        var h,
            i = b.VM.invokePartial.apply(this, arguments);
        if (null != i) return i;
        if (b.compile) return h = {
          helpers: e,
          partials: f,
          data: g
        }, f[c] = b.compile(a, {
          data: void 0 !== g
        }, b), f[c](d, h);
        throw new l("The partial " + c + " could not be compiled when running in runtime-only mode");
      }),
          d = {
        escapeExpression: k.escapeExpression,
        invokePartial: c,
        programs: [],
        program: function program(a, b, c) {
          var d = this.programs[a];
          return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)), d;
        },
        merge: function merge(a, b) {
          var c = a || b;
          return a && b && a !== b && (c = {}, k.extend(c, b), k.extend(c, a)), c;
        },
        programWithDepth: b.VM.programWithDepth,
        noop: b.VM.noop,
        compilerInfo: null
      };

      return function (c, e) {
        var f, g, h, i;
        return e = e || {}, h = e.partial ? e : b, e.partial || (f = e.helpers, g = e.partials), i = a.call(d, h, c, f, g, e.data), e.partial || b.VM.checkRevision(d.compilerInfo), i;
      };
    }

    function f(a, b, c) {
      var d = Array.prototype.slice.call(arguments, 3),
          e = function e(a, _e) {
        return _e = _e || {}, b.apply(this, [a, _e.data || c].concat(d));
      };

      return e.program = a, e.depth = d.length, e;
    }

    function g(a, b, c) {
      var d = function d(a, _d2) {
        return _d2 = _d2 || {}, b(a, _d2.data || c);
      };

      return d.program = a, d.depth = 0, d;
    }

    function h(a, b, c, d, e, f) {
      var g = {
        partial: !0,
        helpers: d,
        partials: e,
        data: f
      };
      if (void 0 === a) throw new l("The partial " + b + " could not be found");
      return a instanceof Function ? a(c, g) : void 0;
    }

    function i() {
      return "";
    }

    var j = {},
        k = a,
        l = b,
        m = c.COMPILER_REVISION,
        n = c.REVISION_CHANGES;
    return j.checkRevision = d, j.template = e, j.programWithDepth = f, j.program = g, j.invokePartial = h, j.noop = i, j;
  }(b, c, d),
      f = function (a, b, c, d, e) {
    "use strict";

    var f,
        g = a,
        h = b,
        i = c,
        j = d,
        k = e,
        l = function l() {
      var a = new g.HandlebarsEnvironment();
      return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.VM = k, a.template = function (b) {
        return k.template(b, a);
      }, a;
    },
        m = l();

    return m.create = l, f = m;
  }(d, a, c, b, e);

  return f;
}(), this.wysihtml5 = this.wysihtml5 || {}, this.wysihtml5.tpl = this.wysihtml5.tpl || {}, this.wysihtml5.tpl.blockquote = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + l((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === k ? b.apply(a) : b)), c;
  }

  function g() {
    return ' \n      <span class="fa fa-quote-left"></span>\n    ';
  }

  function h() {
    return '\n      <span class="glyphicon glyphicon-quote"></span>\n    ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var i,
      j = "",
      k = "function",
      l = this.escapeExpression,
      m = this;
  return j += '<li>\n  <a class="btn ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.size), {
    hash: {},
    inverse: m.noop,
    fn: m.program(1, f, e),
    data: e
  }), (i || 0 === i) && (j += i), j += ' btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1">\n    ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.fa), {
    hash: {},
    inverse: m.program(5, h, e),
    fn: m.program(3, g, e),
    data: e
  }), (i || 0 === i) && (j += i), j += "\n  </a>\n</li>\n", j;
}), this.wysihtml5.tpl.color = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + j((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === i ? b.apply(a) : b)), c;
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var g,
      h = "",
      i = "function",
      j = this.escapeExpression,
      k = this;
  return h += '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ', g = c["if"].call(b, (g = b && b.options, g = null == g || g === !1 ? g : g.toolbar, null == g || g === !1 ? g : g.size), {
    hash: {},
    inverse: k.noop,
    fn: k.program(1, f, e),
    data: e
  }), (g || 0 === g) && (h += g), h += '" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.black, _typeof(g) === i ? g.apply(b) : g)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.black, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.silver, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.gray, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.maroon, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.red, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.purple, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.green, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.olive, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.navy, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.blue, _typeof(g) === i ? g.apply(b) : g)) + '</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">' + j((g = b && b.locale, g = null == g || g === !1 ? g : g.colours, g = null == g || g === !1 ? g : g.orange, _typeof(g) === i ? g.apply(b) : g)) + "</a></li>\n  </ul>\n</li>\n", h;
}), this.wysihtml5.tpl.emphasis = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + k((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === j ? b.apply(a) : b)), c;
  }

  function g(a, b) {
    var d,
        e = "";
    return e += '\n    <a class="btn ', d = c["if"].call(a, (d = a && a.options, d = null == d || d === !1 ? d : d.toolbar, null == d || d === !1 ? d : d.size), {
      hash: {},
      inverse: l.noop,
      fn: l.program(1, f, b),
      data: b
    }), (d || 0 === d) && (e += d), e += ' btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1">' + k((d = a && a.locale, d = null == d || d === !1 ? d : d.emphasis, d = null == d || d === !1 ? d : d.small, _typeof(d) === j ? d.apply(a) : d)) + "</a>\n    ", e;
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var h,
      i = "",
      j = "function",
      k = this.escapeExpression,
      l = this;
  return i += '<li>\n  <div class="btn-group">\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, h = null == h || h === !1 ? h : h.toolbar, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.bold, _typeof(h) === j ? h.apply(b) : h)) + '</a>\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, h = null == h || h === !1 ? h : h.toolbar, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.italic, _typeof(h) === j ? h.apply(b) : h)) + '</a>\n    <a class="btn ', h = c["if"].call(b, (h = b && b.options, h = null == h || h === !1 ? h : h.toolbar, null == h || h === !1 ? h : h.size), {
    hash: {},
    inverse: l.noop,
    fn: l.program(1, f, e),
    data: e
  }), (h || 0 === h) && (i += h), i += ' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">' + k((h = b && b.locale, h = null == h || h === !1 ? h : h.emphasis, h = null == h || h === !1 ? h : h.underline, _typeof(h) === j ? h.apply(b) : h)) + "</a>\n    ", h = c["if"].call(b, (h = b && b.options, h = null == h || h === !1 ? h : h.toolbar, h = null == h || h === !1 ? h : h.emphasis, null == h || h === !1 ? h : h.small), {
    hash: {},
    inverse: l.noop,
    fn: l.program(3, g, e),
    data: e
  }), (h || 0 === h) && (i += h), i += "\n  </div>\n</li>\n", i;
}), this.wysihtml5.tpl["font-styles"] = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + l((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === k ? b.apply(a) : b)), c;
  }

  function g() {
    return '\n      <span class="fa fa-font"></span>\n    ';
  }

  function h() {
    return '\n      <span class="glyphicon glyphicon-font"></span>\n    ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var i,
      j = "",
      k = "function",
      l = this.escapeExpression,
      m = this;
  return j += '<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.size), {
    hash: {},
    inverse: m.noop,
    fn: m.program(1, f, e),
    data: e
  }), (i || 0 === i) && (j += i), j += '" data-toggle="dropdown">\n    ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.fa), {
    hash: {},
    inverse: m.program(5, h, e),
    fn: m.program(3, g, e),
    data: e
  }), (i || 0 === i) && (j += i), j += '\n    <span class="current-font">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.normal, _typeof(i) === k ? i.apply(b) : i)) + '</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.normal, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h1, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h2, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h3, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h4, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h5, _typeof(i) === k ? i.apply(b) : i)) + '</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.font_styles, i = null == i || i === !1 ? i : i.h6, _typeof(i) === k ? i.apply(b) : i)) + "</a></li>\n  </ul>\n</li>\n", j;
}), this.wysihtml5.tpl.html = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + l((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === k ? b.apply(a) : b)), c;
  }

  function g() {
    return '\n        <span class="fa fa-pencil"></span>\n      ';
  }

  function h() {
    return '\n        <span class="glyphicon glyphicon-pencil"></span>\n      ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var i,
      j = "",
      k = "function",
      l = this.escapeExpression,
      m = this;
  return j += '<li>\n  <div class="btn-group">\n    <a class="btn ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.size), {
    hash: {},
    inverse: m.noop,
    fn: m.program(1, f, e),
    data: e
  }), (i || 0 === i) && (j += i), j += ' btn-default" data-wysihtml5-action="change_view" title="' + l((i = b && b.locale, i = null == i || i === !1 ? i : i.html, i = null == i || i === !1 ? i : i.edit, _typeof(i) === k ? i.apply(b) : i)) + '" tabindex="-1">\n      ', i = c["if"].call(b, (i = b && b.options, i = null == i || i === !1 ? i : i.toolbar, null == i || i === !1 ? i : i.fa), {
    hash: {},
    inverse: m.program(5, h, e),
    fn: m.program(3, g, e),
    data: e
  }), (i || 0 === i) && (j += i), j += "\n    </a>\n  </div>\n</li>\n", j;
}), this.wysihtml5.tpl.image = Handlebars.template(function (a, b, c, d, e) {
  function f() {
    return "modal-sm";
  }

  function g(a) {
    var b,
        c = "";
    return c += "btn-" + m((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === l ? b.apply(a) : b)), c;
  }

  function h() {
    return '\n      <span class="fa fa-file-image-o"></span>\n    ';
  }

  function i() {
    return '\n      <span class="glyphicon glyphicon-picture"></span>\n    ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var j,
      k = "",
      l = "function",
      m = this.escapeExpression,
      n = this;
  return k += '<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade" data-wysihtml5-dialog="insertImage">\n    <div class="modal-dialog ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.smallmodals), {
    hash: {},
    inverse: n.noop,
    fn: n.program(1, f, e),
    data: e
  }), (j || 0 === j) && (k += j), k += '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.image, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control" data-wysihtml5-dialog-field="src">\n          </div> \n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.image, j = null == j || j === !1 ? j : j.cancel, _typeof(j) === l ? j.apply(b) : j)) + '</a>\n          <a class="btn btn-primary" data-dismiss="modal"  data-wysihtml5-dialog-action="save" href="#">' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.image, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.size), {
    hash: {},
    inverse: n.noop,
    fn: n.program(3, g, e),
    data: e
  }), (j || 0 === j) && (k += j), k += ' btn-default" data-wysihtml5-command="insertImage" title="' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.image, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '" tabindex="-1">\n    ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.fa), {
    hash: {},
    inverse: n.program(7, i, e),
    fn: n.program(5, h, e),
    data: e
  }), (j || 0 === j) && (k += j), k += "\n  </a>\n</li>\n", k;
}), this.wysihtml5.tpl.link = Handlebars.template(function (a, b, c, d, e) {
  function f() {
    return "modal-sm";
  }

  function g(a) {
    var b,
        c = "";
    return c += "btn-" + m((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === l ? b.apply(a) : b)), c;
  }

  function h() {
    return '\n      <span class="fa fa-share-square-o"></span>\n    ';
  }

  function i() {
    return '\n      <span class="glyphicon glyphicon-share"></span>\n    ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var j,
      k = "",
      l = "function",
      m = this.escapeExpression,
      n = this;
  return k += '<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade" data-wysihtml5-dialog="createLink">\n    <div class="modal-dialog ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.smallmodals), {
    hash: {},
    inverse: n.noop,
    fn: n.program(1, f, e),
    data: e
  }), (j || 0 === j) && (k += j), k += '">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.link, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control" data-wysihtml5-dialog-field="href">\n          </div> \n          <div class="checkbox">\n            <label> \n              <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.link, j = null == j || j === !1 ? j : j.target, _typeof(j) === l ? j.apply(b) : j)) + '\n            </label>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.link, j = null == j || j === !1 ? j : j.cancel, _typeof(j) === l ? j.apply(b) : j)) + '</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save">' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.link, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.size), {
    hash: {},
    inverse: n.noop,
    fn: n.program(3, g, e),
    data: e
  }), (j || 0 === j) && (k += j), k += ' btn-default" data-wysihtml5-command="createLink" title="' + m((j = b && b.locale, j = null == j || j === !1 ? j : j.link, j = null == j || j === !1 ? j : j.insert, _typeof(j) === l ? j.apply(b) : j)) + '" tabindex="-1">\n    ', j = c["if"].call(b, (j = b && b.options, j = null == j || j === !1 ? j : j.toolbar, null == j || j === !1 ? j : j.fa), {
    hash: {},
    inverse: n.program(7, i, e),
    fn: n.program(5, h, e),
    data: e
  }), (j || 0 === j) && (k += j), k += "\n  </a>\n</li>\n", k;
}), this.wysihtml5.tpl.lists = Handlebars.template(function (a, b, c, d, e) {
  function f(a) {
    var b,
        c = "";
    return c += "btn-" + r((b = a && a.options, b = null == b || b === !1 ? b : b.toolbar, b = null == b || b === !1 ? b : b.size, _typeof(b) === q ? b.apply(a) : b)), c;
  }

  function g() {
    return '\n      <span class="fa fa-list-ul"></span>\n    ';
  }

  function h() {
    return '\n      <span class="glyphicon glyphicon-list"></span>\n    ';
  }

  function i() {
    return '\n      <span class="fa fa-list-ol"></span>\n    ';
  }

  function j() {
    return '\n      <span class="glyphicon glyphicon-th-list"></span>\n    ';
  }

  function k() {
    return '\n      <span class="fa fa-outdent"></span>\n    ';
  }

  function l() {
    return '\n      <span class="glyphicon glyphicon-indent-right"></span>\n    ';
  }

  function m() {
    return '\n      <span class="fa fa-indent"></span>\n    ';
  }

  function n() {
    return '\n      <span class="glyphicon glyphicon-indent-left"></span>\n    ';
  }

  this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
  var o,
      p = "",
      q = "function",
      r = this.escapeExpression,
      s = this;
  return p += '<li>\n  <div class="btn-group">\n    <a class="btn ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.size), {
    hash: {},
    inverse: s.noop,
    fn: s.program(1, f, e),
    data: e
  }), (o || 0 === o) && (p += o), p += ' btn-default" data-wysihtml5-command="insertUnorderedList" title="' + r((o = b && b.locale, o = null == o || o === !1 ? o : o.lists, o = null == o || o === !1 ? o : o.unordered, _typeof(o) === q ? o.apply(b) : o)) + '" tabindex="-1">\n    ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.fa), {
    hash: {},
    inverse: s.program(5, h, e),
    fn: s.program(3, g, e),
    data: e
  }), (o || 0 === o) && (p += o), p += '\n    </a>\n    <a class="btn ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.size), {
    hash: {},
    inverse: s.noop,
    fn: s.program(1, f, e),
    data: e
  }), (o || 0 === o) && (p += o), p += ' btn-default" data-wysihtml5-command="insertOrderedList" title="' + r((o = b && b.locale, o = null == o || o === !1 ? o : o.lists, o = null == o || o === !1 ? o : o.ordered, _typeof(o) === q ? o.apply(b) : o)) + '" tabindex="-1">\n    ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.fa), {
    hash: {},
    inverse: s.program(9, j, e),
    fn: s.program(7, i, e),
    data: e
  }), (o || 0 === o) && (p += o), p += '\n    </a>\n    <a class="btn ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.size), {
    hash: {},
    inverse: s.noop,
    fn: s.program(1, f, e),
    data: e
  }), (o || 0 === o) && (p += o), p += ' btn-default" data-wysihtml5-command="Outdent" title="' + r((o = b && b.locale, o = null == o || o === !1 ? o : o.lists, o = null == o || o === !1 ? o : o.outdent, _typeof(o) === q ? o.apply(b) : o)) + '" tabindex="-1">\n    ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.fa), {
    hash: {},
    inverse: s.program(13, l, e),
    fn: s.program(11, k, e),
    data: e
  }), (o || 0 === o) && (p += o), p += '\n    </a>\n    <a class="btn ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.size), {
    hash: {},
    inverse: s.noop,
    fn: s.program(1, f, e),
    data: e
  }), (o || 0 === o) && (p += o), p += ' btn-default" data-wysihtml5-command="Indent" title="' + r((o = b && b.locale, o = null == o || o === !1 ? o : o.lists, o = null == o || o === !1 ? o : o.indent, _typeof(o) === q ? o.apply(b) : o)) + '" tabindex="-1">\n    ', o = c["if"].call(b, (o = b && b.options, o = null == o || o === !1 ? o : o.toolbar, null == o || o === !1 ? o : o.fa), {
    hash: {},
    inverse: s.program(17, n, e),
    fn: s.program(15, m, e),
    data: e
  }), (o || 0 === o) && (p += o), p += "\n    </a>\n  </div>\n</li>\n", p;
}), function (a) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'wysihtml5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap.wysihtml5.templates'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap.wysihtml5.commands'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(function (a, b) {
  "use strict";

  var c = function c(a, b) {
    var c,
        d,
        e,
        f = function f(a, c, d) {
      return b.tpl[a] ? b.tpl[a]({
        locale: c,
        options: d
      }) : void 0;
    },
        g = function g(c, e) {
      var f, g;
      this.el = c, f = a.extend(!0, {}, d, e);

      for (g in f.customTemplates) {
        f.customTemplates.hasOwnProperty(g) && (b.tpl[g] = f.customTemplates[g]);
      }

      this.toolbar = this.createToolbar(c, f), this.editor = this.createEditor(f);
    };

    g.prototype = {
      constructor: g,
      createEditor: function createEditor(b) {
        b = b || {}, b = a.extend(!0, {}, b), b.toolbar = this.toolbar[0], this.initializeEditor(this.el[0], b);
      },
      initializeEditor: function initializeEditor(a, c) {
        var d,
            e = new b.Editor(this.el[0], c);
        if (e.on("beforeload", this.syncBootstrapDialogEvents), e.on("beforeload", this.loadParserRules), e.composer.editableArea.contentDocument ? this.addMoreShortcuts(e, e.composer.editableArea.contentDocument.body || e.composer.editableArea.contentDocument, c.shortcuts) : this.addMoreShortcuts(e, e.composer.editableArea, c.shortcuts), c && c.events) for (d in c.events) {
          c.events.hasOwnProperty(d) && e.on(d, c.events[d]);
        }
        return e;
      },
      loadParserRules: function loadParserRules() {
        "string" === a.type(this.config.parserRules) && a.ajax({
          dataType: "json",
          url: this.config.parserRules,
          context: this,
          error: function error(a, b, c) {
            void 0;
          },
          success: function success(a) {
            this.config.parserRules = a, void 0;
          }
        }), this.config.pasteParserRulesets && "string" === a.type(this.config.pasteParserRulesets) && a.ajax({
          dataType: "json",
          url: this.config.pasteParserRulesets,
          context: this,
          error: function error(a, b, c) {
            void 0;
          },
          success: function success(a) {
            this.config.pasteParserRulesets = a;
          }
        });
      },
      syncBootstrapDialogEvents: function syncBootstrapDialogEvents() {
        var b = this;
        a.map(this.toolbar.commandMapping, function (a) {
          return [a];
        }).filter(function (a) {
          return a.dialog;
        }).map(function (a) {
          return a.dialog;
        }).forEach(function (c) {
          c.on("show", function () {
            a(this.container).modal("show");
          }), c.on("hide", function () {
            a(this.container).modal("hide"), setTimeout(b.composer.focus, 0);
          }), a(c.container).on("shown.bs.modal", function () {
            a(this).find("input, select, textarea").first().focus();
          });
        }), this.on("change_view", function () {
          a(this.toolbar.container.children).find("a.btn").not('[data-wysihtml5-action="change_view"]').toggleClass("disabled");
        });
      },
      createToolbar: function createToolbar(b, c) {
        var g,
            h,
            i = this,
            j = a("<ul/>", {
          "class": "wysihtml5-toolbar",
          style: "display:none"
        }),
            k = c.locale || d.locale || "en";
        e.hasOwnProperty(k) || (void 0, k = "en"), g = a.extend(!0, {}, e.en, e[k]);

        for (h in c.toolbar) {
          c.toolbar[h] && j.append(f(h, g, c));
        }

        return j.find('a[data-wysihtml5-command="formatBlock"]').click(function (b) {
          var c = b.delegateTarget || b.target || b.srcElement,
              d = a(c),
              e = d.data("wysihtml5-display-format-name"),
              f = d.data("wysihtml5-format-name") || d.html();
          (void 0 === e || "true" === e) && i.toolbar.find(".current-font").text(f);
        }), j.find('a[data-wysihtml5-command="foreColor"]').click(function (b) {
          var c = b.target || b.srcElement,
              d = a(c);
          i.toolbar.find(".current-color").text(d.html());
        }), this.el.before(j), j;
      },
      addMoreShortcuts: function addMoreShortcuts(a, c, d) {
        b.dom.observe(c, "keydown", function (c) {
          var e,
              f = c.keyCode,
              g = d[f];
          (c.ctrlKey || c.metaKey || c.altKey) && g && b.commands[g] && (e = a.toolbar.commandMapping[g + ":null"], e && e.dialog && !e.state ? e.dialog.show() : b.commands[g].exec(a.composer, g), c.preventDefault());
        });
      }
    }, c = {
      resetDefaults: function resetDefaults() {
        a.fn.wysihtml5.defaultOptions = a.extend(!0, {}, a.fn.wysihtml5.defaultOptionsCache);
      },
      bypassDefaults: function bypassDefaults(b) {
        return this.each(function () {
          var c = a(this);
          c.data("wysihtml5", new g(c, b));
        });
      },
      shallowExtend: function shallowExtend(b) {
        var d = a.extend({}, a.fn.wysihtml5.defaultOptions, b || {}, a(this).data()),
            e = this;
        return c.bypassDefaults.apply(e, [d]);
      },
      deepExtend: function deepExtend(b) {
        var d = a.extend(!0, {}, a.fn.wysihtml5.defaultOptions, b || {}),
            e = this;
        return c.bypassDefaults.apply(e, [d]);
      },
      init: function init(a) {
        var b = this;
        return c.shallowExtend.apply(b, [a]);
      }
    }, a.fn.wysihtml5 = function (b) {
      return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(b) && b ? (a.error("Method " + b + " does not exist on jQuery.wysihtml5"), void 0) : c.init.apply(this, arguments);
    }, a.fn.wysihtml5.Constructor = g, d = a.fn.wysihtml5.defaultOptions = {
      toolbar: {
        "font-styles": !0,
        color: !1,
        emphasis: {
          small: !0
        },
        blockquote: !0,
        lists: !0,
        html: !1,
        link: !0,
        image: !0,
        smallmodals: !1
      },
      useLineBreaks: !1,
      parserRules: {
        classes: {
          "wysiwyg-color-silver": 1,
          "wysiwyg-color-gray": 1,
          "wysiwyg-color-white": 1,
          "wysiwyg-color-maroon": 1,
          "wysiwyg-color-red": 1,
          "wysiwyg-color-purple": 1,
          "wysiwyg-color-fuchsia": 1,
          "wysiwyg-color-green": 1,
          "wysiwyg-color-lime": 1,
          "wysiwyg-color-olive": 1,
          "wysiwyg-color-yellow": 1,
          "wysiwyg-color-navy": 1,
          "wysiwyg-color-blue": 1,
          "wysiwyg-color-teal": 1,
          "wysiwyg-color-aqua": 1,
          "wysiwyg-color-orange": 1
        },
        tags: {
          b: {},
          i: {},
          strong: {},
          em: {},
          p: {},
          br: {},
          ol: {},
          ul: {},
          li: {},
          h1: {},
          h2: {},
          h3: {},
          h4: {},
          h5: {},
          h6: {},
          blockquote: {},
          u: 1,
          img: {
            check_attributes: {
              width: "numbers",
              alt: "alt",
              src: "url",
              height: "numbers"
            }
          },
          a: {
            check_attributes: {
              href: "url"
            },
            set_attributes: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          span: 1,
          div: 1,
          small: 1,
          code: 1,
          pre: 1
        }
      },
      locale: "en",
      shortcuts: {
        83: "small",
        75: "createLink"
      }
    }, void 0 === a.fn.wysihtml5.defaultOptionsCache && (a.fn.wysihtml5.defaultOptionsCache = a.extend(!0, {}, a.fn.wysihtml5.defaultOptions)), e = a.fn.wysihtml5.locale = {};
  };

  c(a, b);
}), function (a) {
  a.commands.small = {
    exec: function exec(b, c) {
      return a.commands.formatInline.exec(b, c, "small");
    },
    state: function state(b, c) {
      return a.commands.formatInline.state(b, c, "small");
    }
  };
}(wysihtml5), function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  a.fn.wysihtml5.locale.en = a.fn.wysihtml5.locale["en-US"] = {
    font_styles: {
      normal: "Normal text",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3",
      h4: "Heading 4",
      h5: "Heading 5",
      h6: "Heading 6"
    },
    emphasis: {
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      small: "Small"
    },
    lists: {
      unordered: "Unordered list",
      ordered: "Ordered list",
      outdent: "Outdent",
      indent: "Indent"
    },
    link: {
      insert: "Insert link",
      cancel: "Cancel",
      target: "Open link in new window"
    },
    image: {
      insert: "Insert image",
      cancel: "Cancel"
    },
    html: {
      edit: "Edit HTML"
    },
    colours: {
      black: "Black",
      silver: "Silver",
      gray: "Grey",
      maroon: "Maroon",
      red: "Red",
      purple: "Purple",
      green: "Green",
      olive: "Olive",
      navy: "Navy",
      blue: "Blue",
      orange: "Orange"
    }
  };
});

/***/ }),

/***/ 5:
/*!**********************************************!*\
  !*** multi ./resources/js/backend/editor.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/artspeople.ru9/data/www/artspeople.ru/resources/js/backend/editor.js */"./resources/js/backend/editor.js");


/***/ })

/******/ });