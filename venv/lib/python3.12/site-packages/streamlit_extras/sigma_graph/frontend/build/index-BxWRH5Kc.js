function Ti(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Fs = { exports: {} }, vi = {}, Gs = { exports: {} }, _e = {};
var nd;
function Lp() {
  if (nd) return _e;
  nd = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.provider"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), m = Symbol.iterator;
  function _(w) {
    return w === null || typeof w != "object" ? null : (w = m && w[m] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, G = {};
  function z(w, E, W) {
    this.props = w, this.context = E, this.refs = G, this.updater = W || L;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(w, E) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, E, "setState");
  }, z.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = z.prototype;
  function U(w, E, W) {
    this.props = w, this.context = E, this.refs = G, this.updater = W || L;
  }
  var j = U.prototype = new Q();
  j.constructor = U, O(j, z.prototype), j.isPureReactComponent = !0;
  var x = Array.isArray, A = Object.prototype.hasOwnProperty, P = { current: null }, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(w, E, W) {
    var te, de = {}, Se = null, Ee = null;
    if (E != null) for (te in E.ref !== void 0 && (Ee = E.ref), E.key !== void 0 && (Se = "" + E.key), E) A.call(E, te) && !N.hasOwnProperty(te) && (de[te] = E[te]);
    var X = arguments.length - 2;
    if (X === 1) de.children = W;
    else if (1 < X) {
      for (var be = Array(X), ze = 0; ze < X; ze++) be[ze] = arguments[ze + 2];
      de.children = be;
    }
    if (w && w.defaultProps) for (te in X = w.defaultProps, X) de[te] === void 0 && (de[te] = X[te]);
    return { $$typeof: u, type: w, key: Se, ref: Ee, props: de, _owner: P.current };
  }
  function re(w, E) {
    return { $$typeof: u, type: w.type, key: E, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function J(w) {
    return typeof w == "object" && w !== null && w.$$typeof === u;
  }
  function ke(w) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(W) {
      return E[W];
    });
  }
  var ye = /\/+/g;
  function ve(w, E) {
    return typeof w == "object" && w !== null && w.key != null ? ke("" + w.key) : E.toString(36);
  }
  function Z(w, E, W, te, de) {
    var Se = typeof w;
    (Se === "undefined" || Se === "boolean") && (w = null);
    var Ee = !1;
    if (w === null) Ee = !0;
    else switch (Se) {
      case "string":
      case "number":
        Ee = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case u:
          case o:
            Ee = !0;
        }
    }
    if (Ee) return Ee = w, de = de(Ee), w = te === "" ? "." + ve(Ee, 0) : te, x(de) ? (W = "", w != null && (W = w.replace(ye, "$&/") + "/"), Z(de, E, W, "", function(ze) {
      return ze;
    })) : de != null && (J(de) && (de = re(de, W + (!de.key || Ee && Ee.key === de.key ? "" : ("" + de.key).replace(ye, "$&/") + "/") + w)), E.push(de)), 1;
    if (Ee = 0, te = te === "" ? "." : te + ":", x(w)) for (var X = 0; X < w.length; X++) {
      Se = w[X];
      var be = te + ve(Se, X);
      Ee += Z(Se, E, W, be, de);
    }
    else if (be = _(w), typeof be == "function") for (w = be.call(w), X = 0; !(Se = w.next()).done; ) Se = Se.value, be = te + ve(Se, X++), Ee += Z(Se, E, W, be, de);
    else if (Se === "object") throw E = String(w), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return Ee;
  }
  function we(w, E, W) {
    if (w == null) return w;
    var te = [], de = 0;
    return Z(w, te, "", "", function(Se) {
      return E.call(W, Se, de++);
    }), te;
  }
  function Ce(w) {
    if (w._status === -1) {
      var E = w._result;
      E = E(), E.then(function(W) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = W);
      }, function(W) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = W);
      }), w._status === -1 && (w._status = 0, w._result = E);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ie = { current: null }, S = { transition: null }, q = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: S, ReactCurrentOwner: P };
  function I() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _e.Children = { map: we, forEach: function(w, E, W) {
    we(w, function() {
      E.apply(this, arguments);
    }, W);
  }, count: function(w) {
    var E = 0;
    return we(w, function() {
      E++;
    }), E;
  }, toArray: function(w) {
    return we(w, function(E) {
      return E;
    }) || [];
  }, only: function(w) {
    if (!J(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, _e.Component = z, _e.Fragment = r, _e.Profiler = a, _e.PureComponent = U, _e.StrictMode = i, _e.Suspense = p, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, _e.act = I, _e.cloneElement = function(w, E, W) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var te = O({}, w.props), de = w.key, Se = w.ref, Ee = w._owner;
    if (E != null) {
      if (E.ref !== void 0 && (Se = E.ref, Ee = P.current), E.key !== void 0 && (de = "" + E.key), w.type && w.type.defaultProps) var X = w.type.defaultProps;
      for (be in E) A.call(E, be) && !N.hasOwnProperty(be) && (te[be] = E[be] === void 0 && X !== void 0 ? X[be] : E[be]);
    }
    var be = arguments.length - 2;
    if (be === 1) te.children = W;
    else if (1 < be) {
      X = Array(be);
      for (var ze = 0; ze < be; ze++) X[ze] = arguments[ze + 2];
      te.children = X;
    }
    return { $$typeof: u, type: w.type, key: de, ref: Se, props: te, _owner: Ee };
  }, _e.createContext = function(w) {
    return w = { $$typeof: d, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: l, _context: w }, w.Consumer = w;
  }, _e.createElement = V, _e.createFactory = function(w) {
    var E = V.bind(null, w);
    return E.type = w, E;
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(w) {
    return { $$typeof: h, render: w };
  }, _e.isValidElement = J, _e.lazy = function(w) {
    return { $$typeof: y, _payload: { _status: -1, _result: w }, _init: Ce };
  }, _e.memo = function(w, E) {
    return { $$typeof: v, type: w, compare: E === void 0 ? null : E };
  }, _e.startTransition = function(w) {
    var E = S.transition;
    S.transition = {};
    try {
      w();
    } finally {
      S.transition = E;
    }
  }, _e.unstable_act = I, _e.useCallback = function(w, E) {
    return ie.current.useCallback(w, E);
  }, _e.useContext = function(w) {
    return ie.current.useContext(w);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(w) {
    return ie.current.useDeferredValue(w);
  }, _e.useEffect = function(w, E) {
    return ie.current.useEffect(w, E);
  }, _e.useId = function() {
    return ie.current.useId();
  }, _e.useImperativeHandle = function(w, E, W) {
    return ie.current.useImperativeHandle(w, E, W);
  }, _e.useInsertionEffect = function(w, E) {
    return ie.current.useInsertionEffect(w, E);
  }, _e.useLayoutEffect = function(w, E) {
    return ie.current.useLayoutEffect(w, E);
  }, _e.useMemo = function(w, E) {
    return ie.current.useMemo(w, E);
  }, _e.useReducer = function(w, E, W) {
    return ie.current.useReducer(w, E, W);
  }, _e.useRef = function(w) {
    return ie.current.useRef(w);
  }, _e.useState = function(w) {
    return ie.current.useState(w);
  }, _e.useSyncExternalStore = function(w, E, W) {
    return ie.current.useSyncExternalStore(w, E, W);
  }, _e.useTransition = function() {
    return ie.current.useTransition();
  }, _e.version = "18.3.1", _e;
}
var rd;
function cu() {
  return rd || (rd = 1, Gs.exports = Lp()), Gs.exports;
}
var id;
function bp() {
  if (id) return vi;
  id = 1;
  var u = cu(), o = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, p, v) {
    var y, m = {}, _ = null, L = null;
    v !== void 0 && (_ = "" + v), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (L = p.ref);
    for (y in p) i.call(p, y) && !l.hasOwnProperty(y) && (m[y] = p[y]);
    if (h && h.defaultProps) for (y in p = h.defaultProps, p) m[y] === void 0 && (m[y] = p[y]);
    return { $$typeof: o, type: h, key: _, ref: L, props: m, _owner: a.current };
  }
  return vi.Fragment = r, vi.jsx = d, vi.jsxs = d, vi;
}
var od;
function Dp() {
  return od || (od = 1, Fs.exports = bp()), Fs.exports;
}
var iu = Dp(), Xe = cu(), Go = {}, zs = { exports: {} }, pt = {}, Is = { exports: {} }, Os = {};
var ad;
function Ap() {
  return ad || (ad = 1, (function(u) {
    function o(S, q) {
      var I = S.length;
      S.push(q);
      e: for (; 0 < I; ) {
        var w = I - 1 >>> 1, E = S[w];
        if (0 < a(E, q)) S[w] = q, S[I] = E, I = w;
        else break e;
      }
    }
    function r(S) {
      return S.length === 0 ? null : S[0];
    }
    function i(S) {
      if (S.length === 0) return null;
      var q = S[0], I = S.pop();
      if (I !== q) {
        S[0] = I;
        e: for (var w = 0, E = S.length, W = E >>> 1; w < W; ) {
          var te = 2 * (w + 1) - 1, de = S[te], Se = te + 1, Ee = S[Se];
          if (0 > a(de, I)) Se < E && 0 > a(Ee, de) ? (S[w] = Ee, S[Se] = I, w = Se) : (S[w] = de, S[te] = I, w = te);
          else if (Se < E && 0 > a(Ee, I)) S[w] = Ee, S[Se] = I, w = Se;
          else break e;
        }
      }
      return q;
    }
    function a(S, q) {
      var I = S.sortIndex - q.sortIndex;
      return I !== 0 ? I : S.id - q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      u.unstable_now = function() {
        return l.now();
      };
    } else {
      var d = Date, h = d.now();
      u.unstable_now = function() {
        return d.now() - h;
      };
    }
    var p = [], v = [], y = 1, m = null, _ = 3, L = !1, O = !1, G = !1, z = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(S) {
      for (var q = r(v); q !== null; ) {
        if (q.callback === null) i(v);
        else if (q.startTime <= S) i(v), q.sortIndex = q.expirationTime, o(p, q);
        else break;
        q = r(v);
      }
    }
    function x(S) {
      if (G = !1, j(S), !O) if (r(p) !== null) O = !0, Ce(A);
      else {
        var q = r(v);
        q !== null && ie(x, q.startTime - S);
      }
    }
    function A(S, q) {
      O = !1, G && (G = !1, Q(V), V = -1), L = !0;
      var I = _;
      try {
        for (j(q), m = r(p); m !== null && (!(m.expirationTime > q) || S && !ke()); ) {
          var w = m.callback;
          if (typeof w == "function") {
            m.callback = null, _ = m.priorityLevel;
            var E = w(m.expirationTime <= q);
            q = u.unstable_now(), typeof E == "function" ? m.callback = E : m === r(p) && i(p), j(q);
          } else i(p);
          m = r(p);
        }
        if (m !== null) var W = !0;
        else {
          var te = r(v);
          te !== null && ie(x, te.startTime - q), W = !1;
        }
        return W;
      } finally {
        m = null, _ = I, L = !1;
      }
    }
    var P = !1, N = null, V = -1, re = 5, J = -1;
    function ke() {
      return !(u.unstable_now() - J < re);
    }
    function ye() {
      if (N !== null) {
        var S = u.unstable_now();
        J = S;
        var q = !0;
        try {
          q = N(!0, S);
        } finally {
          q ? ve() : (P = !1, N = null);
        }
      } else P = !1;
    }
    var ve;
    if (typeof U == "function") ve = function() {
      U(ye);
    };
    else if (typeof MessageChannel < "u") {
      var Z = new MessageChannel(), we = Z.port2;
      Z.port1.onmessage = ye, ve = function() {
        we.postMessage(null);
      };
    } else ve = function() {
      z(ye, 0);
    };
    function Ce(S) {
      N = S, P || (P = !0, ve());
    }
    function ie(S, q) {
      V = z(function() {
        S(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, u.unstable_continueExecution = function() {
      O || L || (O = !0, Ce(A));
    }, u.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < S ? Math.floor(1e3 / S) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, u.unstable_getFirstCallbackNode = function() {
      return r(p);
    }, u.unstable_next = function(S) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = _;
      }
      var I = _;
      _ = q;
      try {
        return S();
      } finally {
        _ = I;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(S, q) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var I = _;
      _ = S;
      try {
        return q();
      } finally {
        _ = I;
      }
    }, u.unstable_scheduleCallback = function(S, q, I) {
      var w = u.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? w + I : w) : I = w, S) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = I + E, S = { id: y++, callback: q, priorityLevel: S, startTime: I, expirationTime: E, sortIndex: -1 }, I > w ? (S.sortIndex = I, o(v, S), r(p) === null && S === r(v) && (G ? (Q(V), V = -1) : G = !0, ie(x, I - w))) : (S.sortIndex = E, o(p, S), O || L || (O = !0, Ce(A))), S;
    }, u.unstable_shouldYield = ke, u.unstable_wrapCallback = function(S) {
      var q = _;
      return function() {
        var I = _;
        _ = q;
        try {
          return S.apply(this, arguments);
        } finally {
          _ = I;
        }
      };
    };
  })(Os)), Os;
}
var sd;
function Pp() {
  return sd || (sd = 1, Is.exports = Ap()), Is.exports;
}
var ud;
function Np() {
  if (ud) return pt;
  ud = 1;
  var u = cu(), o = Pp();
  function r(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), a = {};
  function l(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, m = {};
  function _(e) {
    return p.call(m, e) ? !0 : p.call(y, e) ? !1 : v.test(e) ? m[e] = !0 : (y[e] = !0, !1);
  }
  function L(e, t, n, s) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, n, s) {
    if (t === null || typeof t > "u" || L(e, t, n, s)) return !0;
    if (s) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function G(e, t, n, s, c, f, g) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = c, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    z[t] = new G(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Q = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Q,
      U
    );
    z[t] = new G(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Q, U);
    z[t] = new G(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Q, U);
    z[t] = new G(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, n, s) {
    var c = z.hasOwnProperty(t) ? z[t] : null;
    (c !== null ? c.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, c, s) && (n = null), s || c === null ? _(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : c.mustUseProperty ? e[c.propertyName] = n === null ? c.type === 3 ? !1 : "" : n : (t = c.attributeName, s = c.attributeNamespace, n === null ? e.removeAttribute(t) : (c = c.type, n = c === 3 || c === 4 && n === !0 ? "" : "" + n, s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
  }
  var x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, A = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), re = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.provider"), ke = /* @__PURE__ */ Symbol.for("react.context"), ye = /* @__PURE__ */ Symbol.for("react.forward_ref"), ve = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), we = /* @__PURE__ */ Symbol.for("react.memo"), Ce = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), S = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var I = Object.assign, w;
  function E(e) {
    if (w === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      w = t && t[1] || "";
    }
    return `
` + w + e;
  }
  var W = !1;
  function te(e, t) {
    if (!e || W) return "";
    W = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (D) {
          var s = D;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (D) {
          s = D;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          s = D;
        }
        e();
      }
    } catch (D) {
      if (D && s && typeof D.stack == "string") {
        for (var c = D.stack.split(`
`), f = s.stack.split(`
`), g = c.length - 1, k = f.length - 1; 1 <= g && 0 <= k && c[g] !== f[k]; ) k--;
        for (; 1 <= g && 0 <= k; g--, k--) if (c[g] !== f[k]) {
          if (g !== 1 || k !== 1)
            do
              if (g--, k--, 0 > k || c[g] !== f[k]) {
                var C = `
` + c[g].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= g && 0 <= k);
          break;
        }
      }
    } finally {
      W = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = te(e.type, !1), e;
      case 11:
        return e = te(e.type.render, !1), e;
      case 1:
        return e = te(e.type, !0), e;
      default:
        return "";
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case P:
        return "Portal";
      case re:
        return "Profiler";
      case V:
        return "StrictMode";
      case ve:
        return "Suspense";
      case Z:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ke:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case ye:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case we:
        return t = e.displayName || null, t !== null ? t : Se(e.type) || "Memo";
      case Ce:
        t = e._payload, e = e._init;
        try {
          return Se(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ee(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(t);
      case 8:
        return t === V ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function X(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function be(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ze(e) {
    var t = be(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var c = n.get, f = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        s = "" + g, f.call(this, g);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(g) {
        s = "" + g;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function tr(e) {
    e._valueTracker || (e._valueTracker = ze(e));
  }
  function pn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), s = "";
    return e && (s = be(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== n ? (t.setValue(e), !0) : !1;
  }
  function nr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function gn(e, t) {
    var n = t.checked;
    return I({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Pe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    n = X(t.value != null ? t.value : n), e._wrapperState = { initialChecked: s, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Re(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function Te(e, t) {
    Re(e, t);
    var n = X(t.value), s = t.type;
    if (n != null) s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? pe(e, t.type, n) : t.hasOwnProperty("defaultValue") && pe(e, t.type, X(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function wt(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function pe(e, t, n) {
    (t !== "number" || nr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ce = Array.isArray;
  function F(e, t, n, s) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < n.length; c++) t["$" + n[c]] = !0;
      for (n = 0; n < e.length; n++) c = t.hasOwnProperty("$" + e[n].value), e[n].selected !== c && (e[n].selected = c), c && s && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + X(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          e[c].selected = !0, s && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function At(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return I({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Zt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(r(92));
        if (ce(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: X(n) };
  }
  function Bt(e, t) {
    var n = X(t.value), s = X(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), s != null && (e.defaultValue = "" + s);
  }
  function Jt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function at(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? at(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var vn, On = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, s, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, s, c);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (vn = vn || document.createElement("div"), vn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Ht(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Un = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wt).forEach(function(e) {
    Un.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Wt[t] = Wt[e];
    });
  });
  function $n(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wt.hasOwnProperty(e) && Wt[e] ? ("" + t).trim() : t + "px";
  }
  function Vt(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0, c = $n(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, c) : e[n] = c;
    }
  }
  var rr = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function mn(e, t) {
    if (t) {
      if (rr[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(r(62));
    }
  }
  function Ko(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yo = null;
  function Qo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xo = null, ir = null, or = null;
  function wu(e) {
    if (e = ti(e)) {
      if (typeof Xo != "function") throw Error(r(280));
      var t = e.stateNode;
      t && (t = Qi(t), Xo(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    ir ? or ? or.push(e) : or = [e] : ir = e;
  }
  function Su() {
    if (ir) {
      var e = ir, t = or;
      if (or = ir = null, wu(e), t) for (e = 0; e < t.length; e++) wu(t[e]);
    }
  }
  function ku(e, t) {
    return e(t);
  }
  function _u() {
  }
  var qo = !1;
  function Cu(e, t, n) {
    if (qo) return e(t, n);
    qo = !0;
    try {
      return ku(e, t, n);
    } finally {
      qo = !1, (ir !== null || or !== null) && (_u(), Su());
    }
  }
  function Fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var s = Qi(n);
    if (s === null) return null;
    n = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var Zo = !1;
  if (h) try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", { get: function() {
      Zo = !0;
    } }), window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr);
  } catch {
    Zo = !1;
  }
  function Ff(e, t, n, s, c, f, g, k, C) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (B) {
      this.onError(B);
    }
  }
  var zr = !1, xi = null, Li = !1, Jo = null, Gf = { onError: function(e) {
    zr = !0, xi = e;
  } };
  function zf(e, t, n, s, c, f, g, k, C) {
    zr = !1, xi = null, Ff.apply(Gf, arguments);
  }
  function If(e, t, n, s, c, f, g, k, C) {
    if (zf.apply(this, arguments), zr) {
      if (zr) {
        var D = xi;
        zr = !1, xi = null;
      } else throw Error(r(198));
      Li || (Li = !0, Jo = D);
    }
  }
  function Mn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Tu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ru(e) {
    if (Mn(e) !== e) throw Error(r(188));
  }
  function Of(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mn(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, s = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (s = c.return, s !== null) {
          n = s;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === n) return Ru(c), e;
          if (f === s) return Ru(c), t;
          f = f.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== s.return) n = c, s = f;
      else {
        for (var g = !1, k = c.child; k; ) {
          if (k === n) {
            g = !0, n = c, s = f;
            break;
          }
          if (k === s) {
            g = !0, s = c, n = f;
            break;
          }
          k = k.sibling;
        }
        if (!g) {
          for (k = f.child; k; ) {
            if (k === n) {
              g = !0, n = f, s = c;
              break;
            }
            if (k === s) {
              g = !0, s = f, n = c;
              break;
            }
            k = k.sibling;
          }
          if (!g) throw Error(r(189));
        }
      }
      if (n.alternate !== s) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function xu(e) {
    return e = Of(e), e !== null ? Lu(e) : null;
  }
  function Lu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Lu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bu = o.unstable_scheduleCallback, Du = o.unstable_cancelCallback, Uf = o.unstable_shouldYield, $f = o.unstable_requestPaint, Me = o.unstable_now, Mf = o.unstable_getCurrentPriorityLevel, ea = o.unstable_ImmediatePriority, Au = o.unstable_UserBlockingPriority, bi = o.unstable_NormalPriority, Bf = o.unstable_LowPriority, Pu = o.unstable_IdlePriority, Di = null, Kt = null;
  function jf(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Pt = Math.clz32 ? Math.clz32 : Vf, Hf = Math.log, Wf = Math.LN2;
  function Vf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hf(e) / Wf | 0) | 0;
  }
  var Ai = 64, Pi = 4194304;
  function Ir(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ni(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, c = e.suspendedLanes, f = e.pingedLanes, g = n & 268435455;
    if (g !== 0) {
      var k = g & ~c;
      k !== 0 ? s = Ir(k) : (f &= g, f !== 0 && (s = Ir(f)));
    } else g = n & ~c, g !== 0 ? s = Ir(g) : f !== 0 && (s = Ir(f));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, f = t & -t, c >= f || c === 16 && (f & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) n = 31 - Pt(t), c = 1 << n, s |= e[n], t &= ~c;
    return s;
  }
  function Kf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yf(e, t) {
    for (var n = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var g = 31 - Pt(f), k = 1 << g, C = c[g];
      C === -1 ? ((k & n) === 0 || (k & s) !== 0) && (c[g] = Kf(k, t)) : C <= t && (e.expiredLanes |= k), f &= ~k;
    }
  }
  function ta(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Nu() {
    var e = Ai;
    return Ai <<= 1, (Ai & 4194240) === 0 && (Ai = 64), e;
  }
  function na(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Or(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Pt(t), e[t] = n;
  }
  function Qf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var c = 31 - Pt(n), f = 1 << c;
      t[c] = 0, s[c] = -1, e[c] = -1, n &= ~f;
    }
  }
  function ra(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var s = 31 - Pt(n), c = 1 << s;
      c & t | e[s] & t && (e[s] |= t), n &= ~c;
    }
  }
  var De = 0;
  function Fu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Gu, ia, zu, Iu, Ou, oa = !1, Fi = [], yn = null, wn = null, En = null, Ur = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), Sn = [], Xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Uu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        wn = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $r.delete(t.pointerId);
    }
  }
  function Mr(e, t, n, s, c, f) {
    return e === null || e.nativeEvent !== f ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: s, nativeEvent: f, targetContainers: [c] }, t !== null && (t = ti(t), t !== null && ia(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function qf(e, t, n, s, c) {
    switch (t) {
      case "focusin":
        return yn = Mr(yn, e, t, n, s, c), !0;
      case "dragenter":
        return wn = Mr(wn, e, t, n, s, c), !0;
      case "mouseover":
        return En = Mr(En, e, t, n, s, c), !0;
      case "pointerover":
        var f = c.pointerId;
        return Ur.set(f, Mr(Ur.get(f) || null, e, t, n, s, c)), !0;
      case "gotpointercapture":
        return f = c.pointerId, $r.set(f, Mr($r.get(f) || null, e, t, n, s, c)), !0;
    }
    return !1;
  }
  function $u(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var n = Mn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Tu(n), t !== null) {
            e.blockedOn = t, Ou(e.priority, function() {
              zu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var s = new n.constructor(n.type, n);
        Yo = s, n.target.dispatchEvent(s), Yo = null;
      } else return t = ti(n), t !== null && ia(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Mu(e, t, n) {
    Gi(e) && n.delete(t);
  }
  function Zf() {
    oa = !1, yn !== null && Gi(yn) && (yn = null), wn !== null && Gi(wn) && (wn = null), En !== null && Gi(En) && (En = null), Ur.forEach(Mu), $r.forEach(Mu);
  }
  function Br(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oa || (oa = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Zf)));
  }
  function jr(e) {
    function t(c) {
      return Br(c, e);
    }
    if (0 < Fi.length) {
      Br(Fi[0], e);
      for (var n = 1; n < Fi.length; n++) {
        var s = Fi[n];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (yn !== null && Br(yn, e), wn !== null && Br(wn, e), En !== null && Br(En, e), Ur.forEach(t), $r.forEach(t), n = 0; n < Sn.length; n++) s = Sn[n], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < Sn.length && (n = Sn[0], n.blockedOn === null); ) $u(n), n.blockedOn === null && Sn.shift();
  }
  var ar = x.ReactCurrentBatchConfig, zi = !0;
  function Jf(e, t, n, s) {
    var c = De, f = ar.transition;
    ar.transition = null;
    try {
      De = 1, aa(e, t, n, s);
    } finally {
      De = c, ar.transition = f;
    }
  }
  function eh(e, t, n, s) {
    var c = De, f = ar.transition;
    ar.transition = null;
    try {
      De = 4, aa(e, t, n, s);
    } finally {
      De = c, ar.transition = f;
    }
  }
  function aa(e, t, n, s) {
    if (zi) {
      var c = sa(e, t, n, s);
      if (c === null) Ca(e, t, s, Ii, n), Uu(e, s);
      else if (qf(c, e, t, n, s)) s.stopPropagation();
      else if (Uu(e, s), t & 4 && -1 < Xf.indexOf(e)) {
        for (; c !== null; ) {
          var f = ti(c);
          if (f !== null && Gu(f), f = sa(e, t, n, s), f === null && Ca(e, t, s, Ii, n), f === c) break;
          c = f;
        }
        c !== null && s.stopPropagation();
      } else Ca(e, t, s, null, n);
    }
  }
  var Ii = null;
  function sa(e, t, n, s) {
    if (Ii = null, e = Qo(s), e = Bn(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Tu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ii = e, null;
  }
  function Bu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Mf()) {
          case ea:
            return 1;
          case Au:
            return 4;
          case bi:
          case Bf:
            return 16;
          case Pu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kn = null, ua = null, Oi = null;
  function ju() {
    if (Oi) return Oi;
    var e, t = ua, n = t.length, s, c = "value" in kn ? kn.value : kn.textContent, f = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++) ;
    var g = n - e;
    for (s = 1; s <= g && t[n - s] === c[f - s]; s++) ;
    return Oi = c.slice(e, 1 < s ? 1 - s : void 0);
  }
  function Ui(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $i() {
    return !0;
  }
  function Hu() {
    return !1;
  }
  function gt(e) {
    function t(n, s, c, f, g) {
      this._reactName = n, this._targetInst = c, this.type = s, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (n = e[k], this[k] = n ? n(f) : f[k]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? $i : Hu, this.isPropagationStopped = Hu, this;
    }
    return I(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $i);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $i);
    }, persist: function() {
    }, isPersistent: $i }), t;
  }
  var sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, la = gt(sr), Hr = I({}, sr, { view: 0, detail: 0 }), th = gt(Hr), ca, da, Wr, Mi = I({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ha, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Wr && (Wr && e.type === "mousemove" ? (ca = e.screenX - Wr.screenX, da = e.screenY - Wr.screenY) : da = ca = 0, Wr = e), ca);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : da;
  } }), Wu = gt(Mi), nh = I({}, Mi, { dataTransfer: 0 }), rh = gt(nh), ih = I({}, Hr, { relatedTarget: 0 }), fa = gt(ih), oh = I({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ah = gt(oh), sh = I({}, sr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uh = gt(sh), lh = I({}, sr, { data: 0 }), Vu = gt(lh), ch = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, dh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, fh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fh[e]) ? !!t[e] : !1;
  }
  function ha() {
    return hh;
  }
  var ph = I({}, Hr, { key: function(e) {
    if (e.key) {
      var t = ch[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ha, charCode: function(e) {
    return e.type === "keypress" ? Ui(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), gh = gt(ph), vh = I({}, Mi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ku = gt(vh), mh = I({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ha }), yh = gt(mh), wh = I({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Eh = gt(wh), Sh = I({}, Mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kh = gt(Sh), _h = [9, 13, 27, 32], pa = h && "CompositionEvent" in window, Vr = null;
  h && "documentMode" in document && (Vr = document.documentMode);
  var Ch = h && "TextEvent" in window && !Vr, Yu = h && (!pa || Vr && 8 < Vr && 11 >= Vr), Qu = " ", Xu = !1;
  function qu(e, t) {
    switch (e) {
      case "keyup":
        return _h.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ur = !1;
  function Th(e, t) {
    switch (e) {
      case "compositionend":
        return Zu(t);
      case "keypress":
        return t.which !== 32 ? null : (Xu = !0, Qu);
      case "textInput":
        return e = t.data, e === Qu && Xu ? null : e;
      default:
        return null;
    }
  }
  function Rh(e, t) {
    if (ur) return e === "compositionend" || !pa && qu(e, t) ? (e = ju(), Oi = ua = kn = null, ur = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xh[e.type] : t === "textarea";
  }
  function el(e, t, n, s) {
    Eu(s), t = Vi(t, "onChange"), 0 < t.length && (n = new la("onChange", "change", null, n, s), e.push({ event: n, listeners: t }));
  }
  var Kr = null, Yr = null;
  function Lh(e) {
    yl(e, 0);
  }
  function Bi(e) {
    var t = hr(e);
    if (pn(t)) return e;
  }
  function bh(e, t) {
    if (e === "change") return t;
  }
  var tl = !1;
  if (h) {
    var ga;
    if (h) {
      var va = "oninput" in document;
      if (!va) {
        var nl = document.createElement("div");
        nl.setAttribute("oninput", "return;"), va = typeof nl.oninput == "function";
      }
      ga = va;
    } else ga = !1;
    tl = ga && (!document.documentMode || 9 < document.documentMode);
  }
  function rl() {
    Kr && (Kr.detachEvent("onpropertychange", il), Yr = Kr = null);
  }
  function il(e) {
    if (e.propertyName === "value" && Bi(Yr)) {
      var t = [];
      el(t, Yr, e, Qo(e)), Cu(Lh, t);
    }
  }
  function Dh(e, t, n) {
    e === "focusin" ? (rl(), Kr = t, Yr = n, Kr.attachEvent("onpropertychange", il)) : e === "focusout" && rl();
  }
  function Ah(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bi(Yr);
  }
  function Ph(e, t) {
    if (e === "click") return Bi(t);
  }
  function Nh(e, t) {
    if (e === "input" || e === "change") return Bi(t);
  }
  function Fh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : Fh;
  function Qr(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), s = Object.keys(t);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var c = n[s];
      if (!p.call(t, c) || !Nt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function ol(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function al(e, t) {
    var n = ol(e);
    e = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (s = e + n.textContent.length, e <= t && s >= t) return { node: n, offset: t - e };
        e = s;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ol(n);
    }
  }
  function sl(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sl(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ul() {
    for (var e = window, t = nr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = nr(e.document);
    }
    return t;
  }
  function ma(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Gh(e) {
    var t = ul(), n = e.focusedElem, s = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sl(n.ownerDocument.documentElement, n)) {
      if (s !== null && ma(n)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = n.textContent.length, f = Math.min(s.start, c);
          s = s.end === void 0 ? f : Math.min(s.end, c), !e.extend && f > s && (c = s, s = f, f = c), c = al(n, f);
          var g = al(
            n,
            s
          );
          c && g && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), f > s ? (e.addRange(t), e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var zh = h && "documentMode" in document && 11 >= document.documentMode, lr = null, ya = null, Xr = null, wa = !1;
  function ll(e, t, n) {
    var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wa || lr == null || lr !== nr(s) || (s = lr, "selectionStart" in s && ma(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Xr && Qr(Xr, s) || (Xr = s, s = Vi(ya, "onSelect"), 0 < s.length && (t = new la("onSelect", "select", null, t, n), e.push({ event: t, listeners: s }), t.target = lr)));
  }
  function ji(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: ji("Animation", "AnimationEnd"), animationiteration: ji("Animation", "AnimationIteration"), animationstart: ji("Animation", "AnimationStart"), transitionend: ji("Transition", "TransitionEnd") }, Ea = {}, cl = {};
  h && (cl = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function Hi(e) {
    if (Ea[e]) return Ea[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in cl) return Ea[e] = t[n];
    return e;
  }
  var dl = Hi("animationend"), fl = Hi("animationiteration"), hl = Hi("animationstart"), pl = Hi("transitionend"), gl = /* @__PURE__ */ new Map(), vl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _n(e, t) {
    gl.set(e, t), l(t, [e]);
  }
  for (var Sa = 0; Sa < vl.length; Sa++) {
    var ka = vl[Sa], Ih = ka.toLowerCase(), Oh = ka[0].toUpperCase() + ka.slice(1);
    _n(Ih, "on" + Oh);
  }
  _n(dl, "onAnimationEnd"), _n(fl, "onAnimationIteration"), _n(hl, "onAnimationStart"), _n("dblclick", "onDoubleClick"), _n("focusin", "onFocus"), _n("focusout", "onBlur"), _n(pl, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uh = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
  function ml(e, t, n) {
    var s = e.type || "unknown-event";
    e.currentTarget = n, If(s, t, void 0, e), e.currentTarget = null;
  }
  function yl(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var s = e[n], c = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t) for (var g = s.length - 1; 0 <= g; g--) {
          var k = s[g], C = k.instance, D = k.currentTarget;
          if (k = k.listener, C !== f && c.isPropagationStopped()) break e;
          ml(c, k, D), f = C;
        }
        else for (g = 0; g < s.length; g++) {
          if (k = s[g], C = k.instance, D = k.currentTarget, k = k.listener, C !== f && c.isPropagationStopped()) break e;
          ml(c, k, D), f = C;
        }
      }
    }
    if (Li) throw e = Jo, Li = !1, Jo = null, e;
  }
  function Fe(e, t) {
    var n = t[Da];
    n === void 0 && (n = t[Da] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    n.has(s) || (wl(t, e, 2, !1), n.add(s));
  }
  function _a(e, t, n) {
    var s = 0;
    t && (s |= 4), wl(n, e, s, t);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Zr(e) {
    if (!e[Wi]) {
      e[Wi] = !0, i.forEach(function(n) {
        n !== "selectionchange" && (Uh.has(n) || _a(n, !1, e), _a(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || (t[Wi] = !0, _a("selectionchange", !1, t));
    }
  }
  function wl(e, t, n, s) {
    switch (Bu(t)) {
      case 1:
        var c = Jf;
        break;
      case 4:
        c = eh;
        break;
      default:
        c = aa;
    }
    n = c.bind(null, t, n, e), c = void 0, !Zo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), s ? c !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: c }) : e.addEventListener(t, n, !0) : c !== void 0 ? e.addEventListener(t, n, { passive: c }) : e.addEventListener(t, n, !1);
  }
  function Ca(e, t, n, s, c) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var g = s.tag;
      if (g === 3 || g === 4) {
        var k = s.stateNode.containerInfo;
        if (k === c || k.nodeType === 8 && k.parentNode === c) break;
        if (g === 4) for (g = s.return; g !== null; ) {
          var C = g.tag;
          if ((C === 3 || C === 4) && (C = g.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          g = g.return;
        }
        for (; k !== null; ) {
          if (g = Bn(k), g === null) return;
          if (C = g.tag, C === 5 || C === 6) {
            s = f = g;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    Cu(function() {
      var D = f, B = Qo(n), H = [];
      e: {
        var $ = gl.get(e);
        if ($ !== void 0) {
          var ne = la, ae = e;
          switch (e) {
            case "keypress":
              if (Ui(n) === 0) break e;
            case "keydown":
            case "keyup":
              ne = gh;
              break;
            case "focusin":
              ae = "focus", ne = fa;
              break;
            case "focusout":
              ae = "blur", ne = fa;
              break;
            case "beforeblur":
            case "afterblur":
              ne = fa;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ne = Wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = rh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = yh;
              break;
            case dl:
            case fl:
            case hl:
              ne = ah;
              break;
            case pl:
              ne = Eh;
              break;
            case "scroll":
              ne = th;
              break;
            case "wheel":
              ne = kh;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = uh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Ku;
          }
          var se = (t & 4) !== 0, Be = !se && e === "scroll", R = se ? $ !== null ? $ + "Capture" : null : $;
          se = [];
          for (var T = D, b; T !== null; ) {
            b = T;
            var K = b.stateNode;
            if (b.tag === 5 && K !== null && (b = K, R !== null && (K = Fr(T, R), K != null && se.push(Jr(T, K, b)))), Be) break;
            T = T.return;
          }
          0 < se.length && ($ = new ne($, ae, null, n, B), H.push({ event: $, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", ne = e === "mouseout" || e === "pointerout", $ && n !== Yo && (ae = n.relatedTarget || n.fromElement) && (Bn(ae) || ae[en])) break e;
          if ((ne || $) && ($ = B.window === B ? B : ($ = B.ownerDocument) ? $.defaultView || $.parentWindow : window, ne ? (ae = n.relatedTarget || n.toElement, ne = D, ae = ae ? Bn(ae) : null, ae !== null && (Be = Mn(ae), ae !== Be || ae.tag !== 5 && ae.tag !== 6) && (ae = null)) : (ne = null, ae = D), ne !== ae)) {
            if (se = Wu, K = "onMouseLeave", R = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (se = Ku, K = "onPointerLeave", R = "onPointerEnter", T = "pointer"), Be = ne == null ? $ : hr(ne), b = ae == null ? $ : hr(ae), $ = new se(K, T + "leave", ne, n, B), $.target = Be, $.relatedTarget = b, K = null, Bn(B) === D && (se = new se(R, T + "enter", ae, n, B), se.target = b, se.relatedTarget = Be, K = se), Be = K, ne && ae) t: {
              for (se = ne, R = ae, T = 0, b = se; b; b = dr(b)) T++;
              for (b = 0, K = R; K; K = dr(K)) b++;
              for (; 0 < T - b; ) se = dr(se), T--;
              for (; 0 < b - T; ) R = dr(R), b--;
              for (; T--; ) {
                if (se === R || R !== null && se === R.alternate) break t;
                se = dr(se), R = dr(R);
              }
              se = null;
            }
            else se = null;
            ne !== null && El(H, $, ne, se, !1), ae !== null && Be !== null && El(H, Be, ae, se, !0);
          }
        }
        e: {
          if ($ = D ? hr(D) : window, ne = $.nodeName && $.nodeName.toLowerCase(), ne === "select" || ne === "input" && $.type === "file") var le = bh;
          else if (Ju($)) if (tl) le = Nh;
          else {
            le = Ah;
            var fe = Dh;
          }
          else (ne = $.nodeName) && ne.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (le = Ph);
          if (le && (le = le(e, D))) {
            el(H, le, n, B);
            break e;
          }
          fe && fe(e, $, D), e === "focusout" && (fe = $._wrapperState) && fe.controlled && $.type === "number" && pe($, "number", $.value);
        }
        switch (fe = D ? hr(D) : window, e) {
          case "focusin":
            (Ju(fe) || fe.contentEditable === "true") && (lr = fe, ya = D, Xr = null);
            break;
          case "focusout":
            Xr = ya = lr = null;
            break;
          case "mousedown":
            wa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wa = !1, ll(H, n, B);
            break;
          case "selectionchange":
            if (zh) break;
          case "keydown":
          case "keyup":
            ll(H, n, B);
        }
        var he;
        if (pa) e: {
          switch (e) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else ur ? qu(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (Yu && n.locale !== "ko" && (ur || me !== "onCompositionStart" ? me === "onCompositionEnd" && ur && (he = ju()) : (kn = B, ua = "value" in kn ? kn.value : kn.textContent, ur = !0)), fe = Vi(D, me), 0 < fe.length && (me = new Vu(me, e, null, n, B), H.push({ event: me, listeners: fe }), he ? me.data = he : (he = Zu(n), he !== null && (me.data = he)))), (he = Ch ? Th(e, n) : Rh(e, n)) && (D = Vi(D, "onBeforeInput"), 0 < D.length && (B = new Vu("onBeforeInput", "beforeinput", null, n, B), H.push({ event: B, listeners: D }), B.data = he));
      }
      yl(H, t);
    });
  }
  function Jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vi(e, t) {
    for (var n = t + "Capture", s = []; e !== null; ) {
      var c = e, f = c.stateNode;
      c.tag === 5 && f !== null && (c = f, f = Fr(e, n), f != null && s.unshift(Jr(e, f, c)), f = Fr(e, t), f != null && s.push(Jr(e, f, c))), e = e.return;
    }
    return s;
  }
  function dr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function El(e, t, n, s, c) {
    for (var f = t._reactName, g = []; n !== null && n !== s; ) {
      var k = n, C = k.alternate, D = k.stateNode;
      if (C !== null && C === s) break;
      k.tag === 5 && D !== null && (k = D, c ? (C = Fr(n, f), C != null && g.unshift(Jr(n, C, k))) : c || (C = Fr(n, f), C != null && g.push(Jr(n, C, k)))), n = n.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var $h = /\r\n?/g, Mh = /\u0000|\uFFFD/g;
  function Sl(e) {
    return (typeof e == "string" ? e : "" + e).replace($h, `
`).replace(Mh, "");
  }
  function Ki(e, t, n) {
    if (t = Sl(t), Sl(e) !== t && n) throw Error(r(425));
  }
  function Yi() {
  }
  var Ta = null, Ra = null;
  function xa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var La = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, kl = typeof Promise == "function" ? Promise : void 0, jh = typeof queueMicrotask == "function" ? queueMicrotask : typeof kl < "u" ? function(e) {
    return kl.resolve(null).then(e).catch(Hh);
  } : La;
  function Hh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ba(e, t) {
    var n = t, s = 0;
    do {
      var c = n.nextSibling;
      if (e.removeChild(n), c && c.nodeType === 8) if (n = c.data, n === "/$") {
        if (s === 0) {
          e.removeChild(c), jr(t);
          return;
        }
        s--;
      } else n !== "$" && n !== "$?" && n !== "$!" || s++;
      n = c;
    } while (n);
    jr(t);
  }
  function Cn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function _l(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var fr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + fr, ei = "__reactProps$" + fr, en = "__reactContainer$" + fr, Da = "__reactEvents$" + fr, Wh = "__reactListeners$" + fr, Vh = "__reactHandles$" + fr;
  function Bn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = _l(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = _l(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ti(e) {
    return e = e[Yt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function hr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function Qi(e) {
    return e[ei] || null;
  }
  var Aa = [], pr = -1;
  function Tn(e) {
    return { current: e };
  }
  function Ge(e) {
    0 > pr || (e.current = Aa[pr], Aa[pr] = null, pr--);
  }
  function Ne(e, t) {
    pr++, Aa[pr] = e.current, e.current = t;
  }
  var Rn = {}, et = Tn(Rn), lt = Tn(!1), jn = Rn;
  function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Rn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var c = {}, f;
    for (f in n) c[f] = t[f];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function ct(e) {
    return e = e.childContextTypes, e != null;
  }
  function Xi() {
    Ge(lt), Ge(et);
  }
  function Cl(e, t, n) {
    if (et.current !== Rn) throw Error(r(168));
    Ne(et, t), Ne(lt, n);
  }
  function Tl(e, t, n) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return n;
    s = s.getChildContext();
    for (var c in s) if (!(c in t)) throw Error(r(108, Ee(e) || "Unknown", c));
    return I({}, n, s);
  }
  function qi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn, jn = et.current, Ne(et, e), Ne(lt, lt.current), !0;
  }
  function Rl(e, t, n) {
    var s = e.stateNode;
    if (!s) throw Error(r(169));
    n ? (e = Tl(e, t, jn), s.__reactInternalMemoizedMergedChildContext = e, Ge(lt), Ge(et), Ne(et, e)) : Ge(lt), Ne(lt, n);
  }
  var tn = null, Zi = !1, Pa = !1;
  function xl(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function Kh(e) {
    Zi = !0, xl(e);
  }
  function xn() {
    if (!Pa && tn !== null) {
      Pa = !0;
      var e = 0, t = De;
      try {
        var n = tn;
        for (De = 1; e < n.length; e++) {
          var s = n[e];
          do
            s = s(!0);
          while (s !== null);
        }
        tn = null, Zi = !1;
      } catch (c) {
        throw tn !== null && (tn = tn.slice(e + 1)), bu(ea, xn), c;
      } finally {
        De = t, Pa = !1;
      }
    }
    return null;
  }
  var vr = [], mr = 0, Ji = null, eo = 0, Et = [], St = 0, Hn = null, nn = 1, rn = "";
  function Wn(e, t) {
    vr[mr++] = eo, vr[mr++] = Ji, Ji = e, eo = t;
  }
  function Ll(e, t, n) {
    Et[St++] = nn, Et[St++] = rn, Et[St++] = Hn, Hn = e;
    var s = nn;
    e = rn;
    var c = 32 - Pt(s) - 1;
    s &= ~(1 << c), n += 1;
    var f = 32 - Pt(t) + c;
    if (30 < f) {
      var g = c - c % 5;
      f = (s & (1 << g) - 1).toString(32), s >>= g, c -= g, nn = 1 << 32 - Pt(t) + c | n << c | s, rn = f + e;
    } else nn = 1 << f | n << c | s, rn = e;
  }
  function Na(e) {
    e.return !== null && (Wn(e, 1), Ll(e, 1, 0));
  }
  function Fa(e) {
    for (; e === Ji; ) Ji = vr[--mr], vr[mr] = null, eo = vr[--mr], vr[mr] = null;
    for (; e === Hn; ) Hn = Et[--St], Et[St] = null, rn = Et[--St], Et[St] = null, nn = Et[--St], Et[St] = null;
  }
  var vt = null, mt = null, Ie = !1, Ft = null;
  function bl(e, t) {
    var n = Tt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Dl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, mt = Cn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, mt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Hn !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vt = e, mt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ga(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function za(e) {
    if (Ie) {
      var t = mt;
      if (t) {
        var n = t;
        if (!Dl(e, t)) {
          if (Ga(e)) throw Error(r(418));
          t = Cn(n.nextSibling);
          var s = vt;
          t && Dl(e, t) ? bl(s, n) : (e.flags = e.flags & -4097 | 2, Ie = !1, vt = e);
        }
      } else {
        if (Ga(e)) throw Error(r(418));
        e.flags = e.flags & -4097 | 2, Ie = !1, vt = e;
      }
    }
  }
  function Al(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    vt = e;
  }
  function to(e) {
    if (e !== vt) return !1;
    if (!Ie) return Al(e), Ie = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps)), t && (t = mt)) {
      if (Ga(e)) throw Pl(), Error(r(418));
      for (; t; ) bl(e, t), t = Cn(t.nextSibling);
    }
    if (Al(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                mt = Cn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = vt ? Cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pl() {
    for (var e = mt; e; ) e = Cn(e.nextSibling);
  }
  function yr() {
    mt = vt = null, Ie = !1;
  }
  function Ia(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var Yh = x.ReactCurrentBatchConfig;
  function ni(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(r(309));
          var s = n.stateNode;
        }
        if (!s) throw Error(r(147, e));
        var c = s, f = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(g) {
          var k = c.refs;
          g === null ? delete k[f] : k[f] = g;
        }, t._stringRef = f, t);
      }
      if (typeof e != "string") throw Error(r(284));
      if (!n._owner) throw Error(r(290, e));
    }
    return e;
  }
  function no(e, t) {
    throw e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Nl(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fl(e) {
    function t(R, T) {
      if (e) {
        var b = R.deletions;
        b === null ? (R.deletions = [T], R.flags |= 16) : b.push(T);
      }
    }
    function n(R, T) {
      if (!e) return null;
      for (; T !== null; ) t(R, T), T = T.sibling;
      return null;
    }
    function s(R, T) {
      for (R = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? R.set(T.key, T) : R.set(T.index, T), T = T.sibling;
      return R;
    }
    function c(R, T) {
      return R = Gn(R, T), R.index = 0, R.sibling = null, R;
    }
    function f(R, T, b) {
      return R.index = b, e ? (b = R.alternate, b !== null ? (b = b.index, b < T ? (R.flags |= 2, T) : b) : (R.flags |= 2, T)) : (R.flags |= 1048576, T);
    }
    function g(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function k(R, T, b, K) {
      return T === null || T.tag !== 6 ? (T = Ls(b, R.mode, K), T.return = R, T) : (T = c(T, b), T.return = R, T);
    }
    function C(R, T, b, K) {
      var le = b.type;
      return le === N ? B(R, T, b.props.children, K, b.key) : T !== null && (T.elementType === le || typeof le == "object" && le !== null && le.$$typeof === Ce && Nl(le) === T.type) ? (K = c(T, b.props), K.ref = ni(R, T, b), K.return = R, K) : (K = xo(b.type, b.key, b.props, null, R.mode, K), K.ref = ni(R, T, b), K.return = R, K);
    }
    function D(R, T, b, K) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== b.containerInfo || T.stateNode.implementation !== b.implementation ? (T = bs(b, R.mode, K), T.return = R, T) : (T = c(T, b.children || []), T.return = R, T);
    }
    function B(R, T, b, K, le) {
      return T === null || T.tag !== 7 ? (T = Jn(b, R.mode, K, le), T.return = R, T) : (T = c(T, b), T.return = R, T);
    }
    function H(R, T, b) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = Ls("" + T, R.mode, b), T.return = R, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case A:
            return b = xo(T.type, T.key, T.props, null, R.mode, b), b.ref = ni(R, null, T), b.return = R, b;
          case P:
            return T = bs(T, R.mode, b), T.return = R, T;
          case Ce:
            var K = T._init;
            return H(R, K(T._payload), b);
        }
        if (ce(T) || q(T)) return T = Jn(T, R.mode, b, null), T.return = R, T;
        no(R, T);
      }
      return null;
    }
    function $(R, T, b, K) {
      var le = T !== null ? T.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number") return le !== null ? null : k(R, T, "" + b, K);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case A:
            return b.key === le ? C(R, T, b, K) : null;
          case P:
            return b.key === le ? D(R, T, b, K) : null;
          case Ce:
            return le = b._init, $(
              R,
              T,
              le(b._payload),
              K
            );
        }
        if (ce(b) || q(b)) return le !== null ? null : B(R, T, b, K, null);
        no(R, b);
      }
      return null;
    }
    function ne(R, T, b, K, le) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return R = R.get(b) || null, k(T, R, "" + K, le);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case A:
            return R = R.get(K.key === null ? b : K.key) || null, C(T, R, K, le);
          case P:
            return R = R.get(K.key === null ? b : K.key) || null, D(T, R, K, le);
          case Ce:
            var fe = K._init;
            return ne(R, T, b, fe(K._payload), le);
        }
        if (ce(K) || q(K)) return R = R.get(b) || null, B(T, R, K, le, null);
        no(T, K);
      }
      return null;
    }
    function ae(R, T, b, K) {
      for (var le = null, fe = null, he = T, me = T = 0, Qe = null; he !== null && me < b.length; me++) {
        he.index > me ? (Qe = he, he = null) : Qe = he.sibling;
        var Le = $(R, he, b[me], K);
        if (Le === null) {
          he === null && (he = Qe);
          break;
        }
        e && he && Le.alternate === null && t(R, he), T = f(Le, T, me), fe === null ? le = Le : fe.sibling = Le, fe = Le, he = Qe;
      }
      if (me === b.length) return n(R, he), Ie && Wn(R, me), le;
      if (he === null) {
        for (; me < b.length; me++) he = H(R, b[me], K), he !== null && (T = f(he, T, me), fe === null ? le = he : fe.sibling = he, fe = he);
        return Ie && Wn(R, me), le;
      }
      for (he = s(R, he); me < b.length; me++) Qe = ne(he, R, me, b[me], K), Qe !== null && (e && Qe.alternate !== null && he.delete(Qe.key === null ? me : Qe.key), T = f(Qe, T, me), fe === null ? le = Qe : fe.sibling = Qe, fe = Qe);
      return e && he.forEach(function(zn) {
        return t(R, zn);
      }), Ie && Wn(R, me), le;
    }
    function se(R, T, b, K) {
      var le = q(b);
      if (typeof le != "function") throw Error(r(150));
      if (b = le.call(b), b == null) throw Error(r(151));
      for (var fe = le = null, he = T, me = T = 0, Qe = null, Le = b.next(); he !== null && !Le.done; me++, Le = b.next()) {
        he.index > me ? (Qe = he, he = null) : Qe = he.sibling;
        var zn = $(R, he, Le.value, K);
        if (zn === null) {
          he === null && (he = Qe);
          break;
        }
        e && he && zn.alternate === null && t(R, he), T = f(zn, T, me), fe === null ? le = zn : fe.sibling = zn, fe = zn, he = Qe;
      }
      if (Le.done) return n(
        R,
        he
      ), Ie && Wn(R, me), le;
      if (he === null) {
        for (; !Le.done; me++, Le = b.next()) Le = H(R, Le.value, K), Le !== null && (T = f(Le, T, me), fe === null ? le = Le : fe.sibling = Le, fe = Le);
        return Ie && Wn(R, me), le;
      }
      for (he = s(R, he); !Le.done; me++, Le = b.next()) Le = ne(he, R, me, Le.value, K), Le !== null && (e && Le.alternate !== null && he.delete(Le.key === null ? me : Le.key), T = f(Le, T, me), fe === null ? le = Le : fe.sibling = Le, fe = Le);
      return e && he.forEach(function(xp) {
        return t(R, xp);
      }), Ie && Wn(R, me), le;
    }
    function Be(R, T, b, K) {
      if (typeof b == "object" && b !== null && b.type === N && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case A:
            e: {
              for (var le = b.key, fe = T; fe !== null; ) {
                if (fe.key === le) {
                  if (le = b.type, le === N) {
                    if (fe.tag === 7) {
                      n(R, fe.sibling), T = c(fe, b.props.children), T.return = R, R = T;
                      break e;
                    }
                  } else if (fe.elementType === le || typeof le == "object" && le !== null && le.$$typeof === Ce && Nl(le) === fe.type) {
                    n(R, fe.sibling), T = c(fe, b.props), T.ref = ni(R, fe, b), T.return = R, R = T;
                    break e;
                  }
                  n(R, fe);
                  break;
                } else t(R, fe);
                fe = fe.sibling;
              }
              b.type === N ? (T = Jn(b.props.children, R.mode, K, b.key), T.return = R, R = T) : (K = xo(b.type, b.key, b.props, null, R.mode, K), K.ref = ni(R, T, b), K.return = R, R = K);
            }
            return g(R);
          case P:
            e: {
              for (fe = b.key; T !== null; ) {
                if (T.key === fe) if (T.tag === 4 && T.stateNode.containerInfo === b.containerInfo && T.stateNode.implementation === b.implementation) {
                  n(R, T.sibling), T = c(T, b.children || []), T.return = R, R = T;
                  break e;
                } else {
                  n(R, T);
                  break;
                }
                else t(R, T);
                T = T.sibling;
              }
              T = bs(b, R.mode, K), T.return = R, R = T;
            }
            return g(R);
          case Ce:
            return fe = b._init, Be(R, T, fe(b._payload), K);
        }
        if (ce(b)) return ae(R, T, b, K);
        if (q(b)) return se(R, T, b, K);
        no(R, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, T !== null && T.tag === 6 ? (n(R, T.sibling), T = c(T, b), T.return = R, R = T) : (n(R, T), T = Ls(b, R.mode, K), T.return = R, R = T), g(R)) : n(R, T);
    }
    return Be;
  }
  var wr = Fl(!0), Gl = Fl(!1), ro = Tn(null), io = null, Er = null, Oa = null;
  function Ua() {
    Oa = Er = io = null;
  }
  function $a(e) {
    var t = ro.current;
    Ge(ro), e._currentValue = t;
  }
  function Ma(e, t, n) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    io = e, Oa = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (dt = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (Oa !== e) if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
      if (io === null) throw Error(r(308));
      Er = e, io.dependencies = { lanes: 0, firstContext: e };
    } else Er = Er.next = e;
    return t;
  }
  var Vn = null;
  function Ba(e) {
    Vn === null ? Vn = [e] : Vn.push(e);
  }
  function zl(e, t, n, s) {
    var c = t.interleaved;
    return c === null ? (n.next = n, Ba(t)) : (n.next = c.next, c.next = n), t.interleaved = n, on(e, s);
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ln = !1;
  function ja(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Il(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(e, t, n) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (xe & 2) !== 0) {
      var c = s.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, on(e, n);
    }
    return c = s.interleaved, c === null ? (t.next = t, Ba(s)) : (t.next = c.next, c.next = t), s.interleaved = t, on(e, n);
  }
  function oo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, ra(e, n);
    }
  }
  function Ol(e, t) {
    var n = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, n === s)) {
      var c = null, f = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var g = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          f === null ? c = f = g : f = f.next = g, n = n.next;
        } while (n !== null);
        f === null ? c = f = t : f = f.next = t;
      } else c = f = t;
      n = { baseState: s.baseState, firstBaseUpdate: c, lastBaseUpdate: f, shared: s.shared, effects: s.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ao(e, t, n, s) {
    var c = e.updateQueue;
    Ln = !1;
    var f = c.firstBaseUpdate, g = c.lastBaseUpdate, k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var C = k, D = C.next;
      C.next = null, g === null ? f = D : g.next = D, g = C;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, k = B.lastBaseUpdate, k !== g && (k === null ? B.firstBaseUpdate = D : k.next = D, B.lastBaseUpdate = C));
    }
    if (f !== null) {
      var H = c.baseState;
      g = 0, B = D = C = null, k = f;
      do {
        var $ = k.lane, ne = k.eventTime;
        if ((s & $) === $) {
          B !== null && (B = B.next = {
            eventTime: ne,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ae = e, se = k;
            switch ($ = t, ne = n, se.tag) {
              case 1:
                if (ae = se.payload, typeof ae == "function") {
                  H = ae.call(ne, H, $);
                  break e;
                }
                H = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = se.payload, $ = typeof ae == "function" ? ae.call(ne, H, $) : ae, $ == null) break e;
                H = I({}, H, $);
                break e;
              case 2:
                Ln = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, $ = c.effects, $ === null ? c.effects = [k] : $.push(k));
        } else ne = { eventTime: ne, lane: $, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, B === null ? (D = B = ne, C = H) : B = B.next = ne, g |= $;
        if (k = k.next, k === null) {
          if (k = c.shared.pending, k === null) break;
          $ = k, k = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = H), c.baseState = C, c.firstBaseUpdate = D, c.lastBaseUpdate = B, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          g |= c.lane, c = c.next;
        while (c !== t);
      } else f === null && (c.shared.lanes = 0);
      Qn |= g, e.lanes = g, e.memoizedState = H;
    }
  }
  function Ul(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], c = s.callback;
      if (c !== null) {
        if (s.callback = null, s = n, typeof c != "function") throw Error(r(191, c));
        c.call(s);
      }
    }
  }
  var ri = {}, Qt = Tn(ri), ii = Tn(ri), oi = Tn(ri);
  function Kn(e) {
    if (e === ri) throw Error(r(174));
    return e;
  }
  function Ha(e, t) {
    switch (Ne(oi, t), Ne(ii, e), Ne(Qt, ri), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : jt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jt(t, e);
    }
    Ge(Qt), Ne(Qt, t);
  }
  function kr() {
    Ge(Qt), Ge(ii), Ge(oi);
  }
  function $l(e) {
    Kn(oi.current);
    var t = Kn(Qt.current), n = jt(t, e.type);
    t !== n && (Ne(ii, e), Ne(Qt, n));
  }
  function Wa(e) {
    ii.current === e && (Ge(Qt), Ge(ii));
  }
  var Oe = Tn(0);
  function so(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Va = [];
  function Ka() {
    for (var e = 0; e < Va.length; e++) Va[e]._workInProgressVersionPrimary = null;
    Va.length = 0;
  }
  var uo = x.ReactCurrentDispatcher, Ya = x.ReactCurrentBatchConfig, Yn = 0, Ue = null, He = null, Ke = null, lo = !1, ai = !1, si = 0, Qh = 0;
  function tt() {
    throw Error(r(321));
  }
  function Qa(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function Xa(e, t, n, s, c, f) {
    if (Yn = f, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, uo.current = e === null || e.memoizedState === null ? Jh : ep, e = n(s, c), ai) {
      f = 0;
      do {
        if (ai = !1, si = 0, 25 <= f) throw Error(r(301));
        f += 1, Ke = He = null, t.updateQueue = null, uo.current = tp, e = n(s, c);
      } while (ai);
    }
    if (uo.current = ho, t = He !== null && He.next !== null, Yn = 0, Ke = He = Ue = null, lo = !1, t) throw Error(r(300));
    return e;
  }
  function qa() {
    var e = si !== 0;
    return si = 0, e;
  }
  function Xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ke === null ? Ue.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function _t() {
    if (He === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = Ke === null ? Ue.memoizedState : Ke.next;
    if (t !== null) Ke = t, He = e;
    else {
      if (e === null) throw Error(r(310));
      He = e, e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }, Ke === null ? Ue.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Za(e) {
    var t = _t(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var s = He, c = s.baseQueue, f = n.pending;
    if (f !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = f.next, f.next = g;
      }
      s.baseQueue = c = f, n.pending = null;
    }
    if (c !== null) {
      f = c.next, s = s.baseState;
      var k = g = null, C = null, D = f;
      do {
        var B = D.lane;
        if ((Yn & B) === B) C !== null && (C = C.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), s = D.hasEagerState ? D.eagerState : e(s, D.action);
        else {
          var H = {
            lane: B,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          C === null ? (k = C = H, g = s) : C = C.next = H, Ue.lanes |= B, Qn |= B;
        }
        D = D.next;
      } while (D !== null && D !== f);
      C === null ? g = s : C.next = k, Nt(s, t.memoizedState) || (dt = !0), t.memoizedState = s, t.baseState = g, t.baseQueue = C, n.lastRenderedState = s;
    }
    if (e = n.interleaved, e !== null) {
      c = e;
      do
        f = c.lane, Ue.lanes |= f, Qn |= f, c = c.next;
      while (c !== e);
    } else c === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ja(e) {
    var t = _t(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var s = n.dispatch, c = n.pending, f = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var g = c = c.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== c);
      Nt(f, t.memoizedState) || (dt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, s];
  }
  function Ml() {
  }
  function Bl(e, t) {
    var n = Ue, s = _t(), c = t(), f = !Nt(s.memoizedState, c);
    if (f && (s.memoizedState = c, dt = !0), s = s.queue, es(Wl.bind(null, n, s, e), [e]), s.getSnapshot !== t || f || Ke !== null && Ke.memoizedState.tag & 1) {
      if (n.flags |= 2048, li(9, Hl.bind(null, n, s, c, t), void 0, null), Ye === null) throw Error(r(349));
      (Yn & 30) !== 0 || jl(n, t, c);
    }
    return c;
  }
  function jl(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Hl(e, t, n, s) {
    t.value = n, t.getSnapshot = s, Vl(t) && Kl(e);
  }
  function Wl(e, t, n) {
    return n(function() {
      Vl(t) && Kl(e);
    });
  }
  function Vl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function Kl(e) {
    var t = on(e, 1);
    t !== null && Ot(t, e, 1, -1);
  }
  function Yl(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ui, lastRenderedState: e }, t.queue = e, e = e.dispatch = Zh.bind(null, Ue, e), [t.memoizedState, e];
  }
  function li(e, t, n, s) {
    return e = { tag: e, create: t, destroy: n, deps: s, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (s = n.next, n.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Ql() {
    return _t().memoizedState;
  }
  function co(e, t, n, s) {
    var c = Xt();
    Ue.flags |= e, c.memoizedState = li(1 | t, n, void 0, s === void 0 ? null : s);
  }
  function fo(e, t, n, s) {
    var c = _t();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (He !== null) {
      var g = He.memoizedState;
      if (f = g.destroy, s !== null && Qa(s, g.deps)) {
        c.memoizedState = li(t, n, f, s);
        return;
      }
    }
    Ue.flags |= e, c.memoizedState = li(1 | t, n, f, s);
  }
  function Xl(e, t) {
    return co(8390656, 8, e, t);
  }
  function es(e, t) {
    return fo(2048, 8, e, t);
  }
  function ql(e, t) {
    return fo(4, 2, e, t);
  }
  function Zl(e, t) {
    return fo(4, 4, e, t);
  }
  function Jl(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ec(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fo(4, 4, Jl.bind(null, t, e), n);
  }
  function ts() {
  }
  function tc(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Qa(t, s[1]) ? s[0] : (n.memoizedState = [e, t], e);
  }
  function nc(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var s = n.memoizedState;
    return s !== null && t !== null && Qa(t, s[1]) ? s[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function rc(e, t, n) {
    return (Yn & 21) === 0 ? (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = n) : (Nt(n, t) || (n = Nu(), Ue.lanes |= n, Qn |= n, e.baseState = !0), t);
  }
  function Xh(e, t) {
    var n = De;
    De = n !== 0 && 4 > n ? n : 4, e(!0);
    var s = Ya.transition;
    Ya.transition = {};
    try {
      e(!1), t();
    } finally {
      De = n, Ya.transition = s;
    }
  }
  function ic() {
    return _t().memoizedState;
  }
  function qh(e, t, n) {
    var s = Nn(e);
    if (n = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null }, oc(e)) ac(t, n);
    else if (n = zl(e, t, n, s), n !== null) {
      var c = ut();
      Ot(n, e, s, c), sc(n, t, s);
    }
  }
  function Zh(e, t, n) {
    var s = Nn(e), c = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (oc(e)) ac(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var g = t.lastRenderedState, k = f(g, n);
        if (c.hasEagerState = !0, c.eagerState = k, Nt(k, g)) {
          var C = t.interleaved;
          C === null ? (c.next = c, Ba(t)) : (c.next = C.next, C.next = c), t.interleaved = c;
          return;
        }
      } catch {
      }
      n = zl(e, t, c, s), n !== null && (c = ut(), Ot(n, e, s, c), sc(n, t, s));
    }
  }
  function oc(e) {
    var t = e.alternate;
    return e === Ue || t !== null && t === Ue;
  }
  function ac(e, t) {
    ai = lo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, n |= s, t.lanes = n, ra(e, n);
    }
  }
  var ho = { readContext: kt, useCallback: tt, useContext: tt, useEffect: tt, useImperativeHandle: tt, useInsertionEffect: tt, useLayoutEffect: tt, useMemo: tt, useReducer: tt, useRef: tt, useState: tt, useDebugValue: tt, useDeferredValue: tt, useTransition: tt, useMutableSource: tt, useSyncExternalStore: tt, useId: tt, unstable_isNewReconciler: !1 }, Jh = { readContext: kt, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: Xl, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, co(
      4194308,
      4,
      Jl.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return co(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return co(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var s = Xt();
    return t = n !== void 0 ? n(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = qh.bind(null, Ue, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Yl, useDebugValue: ts, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = Yl(!1), t = e[0];
    return e = Xh.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var s = Ue, c = Xt();
    if (Ie) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else {
      if (n = t(), Ye === null) throw Error(r(349));
      (Yn & 30) !== 0 || jl(s, t, n);
    }
    c.memoizedState = n;
    var f = { value: n, getSnapshot: t };
    return c.queue = f, Xl(Wl.bind(
      null,
      s,
      f,
      e
    ), [e]), s.flags |= 2048, li(9, Hl.bind(null, s, f, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = Ye.identifierPrefix;
    if (Ie) {
      var n = rn, s = nn;
      n = (s & ~(1 << 32 - Pt(s) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = si++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Qh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ep = {
    readContext: kt,
    useCallback: tc,
    useContext: kt,
    useEffect: es,
    useImperativeHandle: ec,
    useInsertionEffect: ql,
    useLayoutEffect: Zl,
    useMemo: nc,
    useReducer: Za,
    useRef: Ql,
    useState: function() {
      return Za(ui);
    },
    useDebugValue: ts,
    useDeferredValue: function(e) {
      var t = _t();
      return rc(t, He.memoizedState, e);
    },
    useTransition: function() {
      var e = Za(ui)[0], t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: Ml,
    useSyncExternalStore: Bl,
    useId: ic,
    unstable_isNewReconciler: !1
  }, tp = { readContext: kt, useCallback: tc, useContext: kt, useEffect: es, useImperativeHandle: ec, useInsertionEffect: ql, useLayoutEffect: Zl, useMemo: nc, useReducer: Ja, useRef: Ql, useState: function() {
    return Ja(ui);
  }, useDebugValue: ts, useDeferredValue: function(e) {
    var t = _t();
    return He === null ? t.memoizedState = e : rc(t, He.memoizedState, e);
  }, useTransition: function() {
    var e = Ja(ui)[0], t = _t().memoizedState;
    return [e, t];
  }, useMutableSource: Ml, useSyncExternalStore: Bl, useId: ic, unstable_isNewReconciler: !1 };
  function Gt(e, t) {
    if (e && e.defaultProps) {
      t = I({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ns(e, t, n, s) {
    t = e.memoizedState, n = n(s, t), n = n == null ? t : I({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var po = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var s = ut(), c = Nn(e), f = an(s, c);
    f.payload = t, n != null && (f.callback = n), t = bn(e, f, c), t !== null && (Ot(t, e, c, s), oo(t, e, c));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var s = ut(), c = Nn(e), f = an(s, c);
    f.tag = 1, f.payload = t, n != null && (f.callback = n), t = bn(e, f, c), t !== null && (Ot(t, e, c, s), oo(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ut(), s = Nn(e), c = an(n, s);
    c.tag = 2, t != null && (c.callback = t), t = bn(e, c, s), t !== null && (Ot(t, e, s, n), oo(t, e, s));
  } };
  function uc(e, t, n, s, c, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, f, g) : t.prototype && t.prototype.isPureReactComponent ? !Qr(n, s) || !Qr(c, f) : !0;
  }
  function lc(e, t, n) {
    var s = !1, c = Rn, f = t.contextType;
    return typeof f == "object" && f !== null ? f = kt(f) : (c = ct(t) ? jn : et.current, s = t.contextTypes, f = (s = s != null) ? gr(e, c) : Rn), t = new t(n, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = po, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = f), t;
  }
  function cc(e, t, n, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, s), t.state !== e && po.enqueueReplaceState(t, t.state, null);
  }
  function rs(e, t, n, s) {
    var c = e.stateNode;
    c.props = n, c.state = e.memoizedState, c.refs = {}, ja(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? c.context = kt(f) : (f = ct(t) ? jn : et.current, c.context = gr(e, f)), c.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (ns(e, t, f, n), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && po.enqueueReplaceState(c, c.state, null), ao(e, n, c, s), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function _r(e, t) {
    try {
      var n = "", s = t;
      do
        n += de(s), s = s.return;
      while (s);
      var c = n;
    } catch (f) {
      c = `
Error generating stack: ` + f.message + `
` + f.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function is(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function os(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var np = typeof WeakMap == "function" ? WeakMap : Map;
  function dc(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var s = t.value;
    return n.callback = function() {
      So || (So = !0, Es = s), os(e, t);
    }, n;
  }
  function fc(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = t.value;
      n.payload = function() {
        return s(c);
      }, n.callback = function() {
        os(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (n.callback = function() {
      os(e, t), typeof s != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
      var g = t.stack;
      this.componentDidCatch(t.value, { componentStack: g !== null ? g : "" });
    }), n;
  }
  function hc(e, t, n) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new np();
      var c = /* @__PURE__ */ new Set();
      s.set(t, c);
    } else c = s.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(t, c));
    c.has(n) || (c.add(n), e = vp.bind(null, e, t, n), t.then(e, e));
  }
  function pc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function gc(e, t, n, s, c) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, bn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = c, e);
  }
  var rp = x.ReactCurrentOwner, dt = !1;
  function st(e, t, n, s) {
    t.child = e === null ? Gl(t, null, n, s) : wr(t, e.child, n, s);
  }
  function vc(e, t, n, s, c) {
    n = n.render;
    var f = t.ref;
    return Sr(t, c), s = Xa(e, t, n, s, f, c), n = qa(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, sn(e, t, c)) : (Ie && n && Na(t), t.flags |= 1, st(e, t, s, c), t.child);
  }
  function mc(e, t, n, s, c) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !xs(f) && f.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = f, yc(e, t, f, s, c)) : (e = xo(n.type, null, s, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, (e.lanes & c) === 0) {
      var g = f.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Qr, n(g, s) && e.ref === t.ref) return sn(e, t, c);
    }
    return t.flags |= 1, e = Gn(f, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function yc(e, t, n, s, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Qr(f, s) && e.ref === t.ref) if (dt = !1, t.pendingProps = s = f, (e.lanes & c) !== 0) (e.flags & 131072) !== 0 && (dt = !0);
      else return t.lanes = e.lanes, sn(e, t, c);
    }
    return as(e, t, n, s, c);
  }
  function wc(e, t, n) {
    var s = t.pendingProps, c = s.children, f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(Tr, yt), yt |= n;
    else {
      if ((n & 1073741824) === 0) return e = f !== null ? f.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(Tr, yt), yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = f !== null ? f.baseLanes : n, Ne(Tr, yt), yt |= s;
    }
    else f !== null ? (s = f.baseLanes | n, t.memoizedState = null) : s = n, Ne(Tr, yt), yt |= s;
    return st(e, t, c, n), t.child;
  }
  function Ec(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function as(e, t, n, s, c) {
    var f = ct(n) ? jn : et.current;
    return f = gr(t, f), Sr(t, c), n = Xa(e, t, n, s, f, c), s = qa(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, sn(e, t, c)) : (Ie && s && Na(t), t.flags |= 1, st(e, t, n, c), t.child);
  }
  function Sc(e, t, n, s, c) {
    if (ct(n)) {
      var f = !0;
      qi(t);
    } else f = !1;
    if (Sr(t, c), t.stateNode === null) vo(e, t), lc(t, n, s), rs(t, n, s, c), s = !0;
    else if (e === null) {
      var g = t.stateNode, k = t.memoizedProps;
      g.props = k;
      var C = g.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = kt(D) : (D = ct(n) ? jn : et.current, D = gr(t, D));
      var B = n.getDerivedStateFromProps, H = typeof B == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      H || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (k !== s || C !== D) && cc(t, g, s, D), Ln = !1;
      var $ = t.memoizedState;
      g.state = $, ao(t, s, g, c), C = t.memoizedState, k !== s || $ !== C || lt.current || Ln ? (typeof B == "function" && (ns(t, n, B, s), C = t.memoizedState), (k = Ln || uc(t, n, k, s, $, C, D)) ? (H || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), g.props = s, g.state = C, g.context = D, s = k) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      g = t.stateNode, Il(e, t), k = t.memoizedProps, D = t.type === t.elementType ? k : Gt(t.type, k), g.props = D, H = t.pendingProps, $ = g.context, C = n.contextType, typeof C == "object" && C !== null ? C = kt(C) : (C = ct(n) ? jn : et.current, C = gr(t, C));
      var ne = n.getDerivedStateFromProps;
      (B = typeof ne == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (k !== H || $ !== C) && cc(t, g, s, C), Ln = !1, $ = t.memoizedState, g.state = $, ao(t, s, g, c);
      var ae = t.memoizedState;
      k !== H || $ !== ae || lt.current || Ln ? (typeof ne == "function" && (ns(t, n, ne, s), ae = t.memoizedState), (D = Ln || uc(t, n, D, s, $, ae, C) || !1) ? (B || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, ae, C), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, ae, C)), typeof g.componentDidUpdate == "function" && (t.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || k === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = ae), g.props = s, g.state = ae, g.context = C, s = D) : (typeof g.componentDidUpdate != "function" || k === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return ss(e, t, n, s, f, c);
  }
  function ss(e, t, n, s, c, f) {
    Ec(e, t);
    var g = (t.flags & 128) !== 0;
    if (!s && !g) return c && Rl(t, n, !1), sn(e, t, f);
    s = t.stateNode, rp.current = t;
    var k = g && typeof n.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && g ? (t.child = wr(t, e.child, null, f), t.child = wr(t, null, k, f)) : st(e, t, k, f), t.memoizedState = s.state, c && Rl(t, n, !0), t.child;
  }
  function kc(e) {
    var t = e.stateNode;
    t.pendingContext ? Cl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cl(e, t.context, !1), Ha(e, t.containerInfo);
  }
  function _c(e, t, n, s, c) {
    return yr(), Ia(c), t.flags |= 256, st(e, t, n, s), t.child;
  }
  var us = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ls(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cc(e, t, n) {
    var s = t.pendingProps, c = Oe.current, f = !1, g = (t.flags & 128) !== 0, k;
    if ((k = g) || (k = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), k ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Ne(Oe, c & 1), e === null)
      return za(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (g = s.children, e = s.fallback, f ? (s = t.mode, f = t.child, g = { mode: "hidden", children: g }, (s & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = Lo(g, s, 0, null), e = Jn(e, s, n, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = ls(n), t.memoizedState = us, e) : cs(t, g));
    if (c = e.memoizedState, c !== null && (k = c.dehydrated, k !== null)) return ip(e, t, g, s, k, c, n);
    if (f) {
      f = s.fallback, g = t.mode, c = e.child, k = c.sibling;
      var C = { mode: "hidden", children: s.children };
      return (g & 1) === 0 && t.child !== c ? (s = t.child, s.childLanes = 0, s.pendingProps = C, t.deletions = null) : (s = Gn(c, C), s.subtreeFlags = c.subtreeFlags & 14680064), k !== null ? f = Gn(k, f) : (f = Jn(f, g, n, null), f.flags |= 2), f.return = t, s.return = t, s.sibling = f, t.child = s, s = f, f = t.child, g = e.child.memoizedState, g = g === null ? ls(n) : { baseLanes: g.baseLanes | n, cachePool: null, transitions: g.transitions }, f.memoizedState = g, f.childLanes = e.childLanes & ~n, t.memoizedState = us, s;
    }
    return f = e.child, e = f.sibling, s = Gn(f, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = n), s.return = t, s.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function cs(e, t) {
    return t = Lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function go(e, t, n, s) {
    return s !== null && Ia(s), wr(t, e.child, null, n), e = cs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ip(e, t, n, s, c, f, g) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, s = is(Error(r(422))), go(e, t, g, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = s.fallback, c = t.mode, s = Lo({ mode: "visible", children: s.children }, c, 0, null), f = Jn(f, c, g, null), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, (t.mode & 1) !== 0 && wr(t, e.child, null, g), t.child.memoizedState = ls(g), t.memoizedState = us, f);
    if ((t.mode & 1) === 0) return go(e, t, g, null);
    if (c.data === "$!") {
      if (s = c.nextSibling && c.nextSibling.dataset, s) var k = s.dgst;
      return s = k, f = Error(r(419)), s = is(f, s, void 0), go(e, t, g, s);
    }
    if (k = (g & e.childLanes) !== 0, dt || k) {
      if (s = Ye, s !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (s.suspendedLanes | g)) !== 0 ? 0 : c, c !== 0 && c !== f.retryLane && (f.retryLane = c, on(e, c), Ot(s, e, c, -1));
      }
      return Rs(), s = is(Error(r(421))), go(e, t, g, s);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mp.bind(null, e), c._reactRetry = t, null) : (e = f.treeContext, mt = Cn(c.nextSibling), vt = t, Ie = !0, Ft = null, e !== null && (Et[St++] = nn, Et[St++] = rn, Et[St++] = Hn, nn = e.id, rn = e.overflow, Hn = t), t = cs(t, s.children), t.flags |= 4096, t);
  }
  function Tc(e, t, n) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Ma(e.return, t, n);
  }
  function ds(e, t, n, s, c) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: n, tailMode: c } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = s, f.tail = n, f.tailMode = c);
  }
  function Rc(e, t, n) {
    var s = t.pendingProps, c = s.revealOrder, f = s.tail;
    if (st(e, t, s.children, n), s = Oe.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
        else if (e.tag === 19) Tc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      s &= 1;
    }
    if (Ne(Oe, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (n = t.child, c = null; n !== null; ) e = n.alternate, e !== null && so(e) === null && (c = n), n = n.sibling;
        n = c, n === null ? (c = t.child, t.child = null) : (c = n.sibling, n.sibling = null), ds(t, !1, c, n, f);
        break;
      case "backwards":
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && so(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = n, n = c, c = e;
        }
        ds(t, !0, n, null, f);
        break;
      case "together":
        ds(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function vo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function op(e, t, n) {
    switch (t.tag) {
      case 3:
        kc(t), yr();
        break;
      case 5:
        $l(t);
        break;
      case 1:
        ct(t.type) && qi(t);
        break;
      case 4:
        Ha(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, c = t.memoizedProps.value;
        Ne(ro, s._currentValue), s._currentValue = c;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ne(Oe, Oe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Cc(e, t, n) : (Ne(Oe, Oe.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Ne(Oe, Oe.current & 1);
        break;
      case 19:
        if (s = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return Rc(e, t, n);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ne(Oe, Oe.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wc(e, t, n);
    }
    return sn(e, t, n);
  }
  var xc, fs, Lc, bc;
  xc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, fs = function() {
  }, Lc = function(e, t, n, s) {
    var c = e.memoizedProps;
    if (c !== s) {
      e = t.stateNode, Kn(Qt.current);
      var f = null;
      switch (n) {
        case "input":
          c = gn(e, c), s = gn(e, s), f = [];
          break;
        case "select":
          c = I({}, c, { value: void 0 }), s = I({}, s, { value: void 0 }), f = [];
          break;
        case "textarea":
          c = At(e, c), s = At(e, s), f = [];
          break;
        default:
          typeof c.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Yi);
      }
      mn(n, s);
      var g;
      n = null;
      for (D in c) if (!s.hasOwnProperty(D) && c.hasOwnProperty(D) && c[D] != null) if (D === "style") {
        var k = c[D];
        for (g in k) k.hasOwnProperty(g) && (n || (n = {}), n[g] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (a.hasOwnProperty(D) ? f || (f = []) : (f = f || []).push(D, null));
      for (D in s) {
        var C = s[D];
        if (k = c?.[D], s.hasOwnProperty(D) && C !== k && (C != null || k != null)) if (D === "style") if (k) {
          for (g in k) !k.hasOwnProperty(g) || C && C.hasOwnProperty(g) || (n || (n = {}), n[g] = "");
          for (g in C) C.hasOwnProperty(g) && k[g] !== C[g] && (n || (n = {}), n[g] = C[g]);
        } else n || (f || (f = []), f.push(
          D,
          n
        )), n = C;
        else D === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, k = k ? k.__html : void 0, C != null && k !== C && (f = f || []).push(D, C)) : D === "children" ? typeof C != "string" && typeof C != "number" || (f = f || []).push(D, "" + C) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (a.hasOwnProperty(D) ? (C != null && D === "onScroll" && Fe("scroll", e), f || k === C || (f = [])) : (f = f || []).push(D, C));
      }
      n && (f = f || []).push("style", n);
      var D = f;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, bc = function(e, t, n, s) {
    n !== s && (t.flags |= 4);
  };
  function ci(e, t) {
    if (!Ie) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; ) n.alternate !== null && (s = n), n = n.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, s = 0;
    if (t) for (var c = e.child; c !== null; ) n |= c.lanes | c.childLanes, s |= c.subtreeFlags & 14680064, s |= c.flags & 14680064, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) n |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= s, e.childLanes = n, t;
  }
  function ap(e, t, n) {
    var s = t.pendingProps;
    switch (Fa(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return ct(t.type) && Xi(), nt(t), null;
      case 3:
        return s = t.stateNode, kr(), Ge(lt), Ge(et), Ka(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (to(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ft !== null && (_s(Ft), Ft = null))), fs(e, t), nt(t), null;
      case 5:
        Wa(t);
        var c = Kn(oi.current);
        if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, s, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(r(166));
            return nt(t), null;
          }
          if (e = Kn(Qt.current), to(t)) {
            s = t.stateNode, n = t.type;
            var f = t.memoizedProps;
            switch (s[Yt] = t, s[ei] = f, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Fe("cancel", s), Fe("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fe("load", s);
                break;
              case "video":
              case "audio":
                for (c = 0; c < qr.length; c++) Fe(qr[c], s);
                break;
              case "source":
                Fe("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Fe(
                  "error",
                  s
                ), Fe("load", s);
                break;
              case "details":
                Fe("toggle", s);
                break;
              case "input":
                Pe(s, f), Fe("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!f.multiple }, Fe("invalid", s);
                break;
              case "textarea":
                Zt(s, f), Fe("invalid", s);
            }
            mn(n, f), c = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var k = f[g];
              g === "children" ? typeof k == "string" ? s.textContent !== k && (f.suppressHydrationWarning !== !0 && Ki(s.textContent, k, e), c = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (f.suppressHydrationWarning !== !0 && Ki(
                s.textContent,
                k,
                e
              ), c = ["children", "" + k]) : a.hasOwnProperty(g) && k != null && g === "onScroll" && Fe("scroll", s);
            }
            switch (n) {
              case "input":
                tr(s), wt(s, f, !0);
                break;
              case "textarea":
                tr(s), Jt(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (s.onclick = Yi);
            }
            s = c, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = at(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = g.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = g.createElement(n, { is: s.is }) : (e = g.createElement(n), n === "select" && (g = e, s.multiple ? g.multiple = !0 : s.size && (g.size = s.size))) : e = g.createElementNS(e, n), e[Yt] = t, e[ei] = s, xc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (g = Ko(n, s), n) {
                case "dialog":
                  Fe("cancel", e), Fe("close", e), c = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fe("load", e), c = s;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < qr.length; c++) Fe(qr[c], e);
                  c = s;
                  break;
                case "source":
                  Fe("error", e), c = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Fe(
                    "error",
                    e
                  ), Fe("load", e), c = s;
                  break;
                case "details":
                  Fe("toggle", e), c = s;
                  break;
                case "input":
                  Pe(e, s), c = gn(e, s), Fe("invalid", e);
                  break;
                case "option":
                  c = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, c = I({}, s, { value: void 0 }), Fe("invalid", e);
                  break;
                case "textarea":
                  Zt(e, s), c = At(e, s), Fe("invalid", e);
                  break;
                default:
                  c = s;
              }
              mn(n, c), k = c;
              for (f in k) if (k.hasOwnProperty(f)) {
                var C = k[f];
                f === "style" ? Vt(e, C) : f === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && On(e, C)) : f === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && Ht(e, C) : typeof C == "number" && Ht(e, "" + C) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (a.hasOwnProperty(f) ? C != null && f === "onScroll" && Fe("scroll", e) : C != null && j(e, f, C, g));
              }
              switch (n) {
                case "input":
                  tr(e), wt(e, s, !1);
                  break;
                case "textarea":
                  tr(e), Jt(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + X(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, f = s.value, f != null ? F(e, !!s.multiple, f, !1) : s.defaultValue != null && F(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = Yi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null) bc(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(r(166));
          if (n = Kn(oi.current), Kn(Qt.current), to(t)) {
            if (s = t.stateNode, n = t.memoizedProps, s[Yt] = t, (f = s.nodeValue !== n) && (e = vt, e !== null)) switch (e.tag) {
              case 3:
                Ki(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ki(s.nodeValue, n, (e.mode & 1) !== 0);
            }
            f && (t.flags |= 4);
          } else s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s), s[Yt] = t, t.stateNode = s;
        }
        return nt(t), null;
      case 13:
        if (Ge(Oe), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ie && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Pl(), yr(), t.flags |= 98560, f = !1;
          else if (f = to(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(r(318));
              if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(r(317));
              f[Yt] = t;
            } else yr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), f = !1;
          } else Ft !== null && (_s(Ft), Ft = null), f = !0;
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Oe.current & 1) !== 0 ? We === 0 && (We = 3) : Rs())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return kr(), fs(e, t), e === null && Zr(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return $a(t.type._context), nt(t), null;
      case 17:
        return ct(t.type) && Xi(), nt(t), null;
      case 19:
        if (Ge(Oe), f = t.memoizedState, f === null) return nt(t), null;
        if (s = (t.flags & 128) !== 0, g = f.rendering, g === null) if (s) ci(f, !1);
        else {
          if (We !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (g = so(e), g !== null) {
              for (t.flags |= 128, ci(f, !1), s = g.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = n, n = t.child; n !== null; ) f = n, e = s, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, e = g.dependencies, f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ne(Oe, Oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          f.tail !== null && Me() > Rr && (t.flags |= 128, s = !0, ci(f, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = so(g), e !== null) {
            if (t.flags |= 128, s = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ci(f, !0), f.tail === null && f.tailMode === "hidden" && !g.alternate && !Ie) return nt(t), null;
          } else 2 * Me() - f.renderingStartTime > Rr && n !== 1073741824 && (t.flags |= 128, s = !0, ci(f, !1), t.lanes = 4194304);
          f.isBackwards ? (g.sibling = t.child, t.child = g) : (n = f.last, n !== null ? n.sibling = g : t.child = g, f.last = g);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = Me(), t.sibling = null, n = Oe.current, Ne(Oe, s ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return Ts(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (yt & 1073741824) !== 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function sp(e, t) {
    switch (Fa(t), t.tag) {
      case 1:
        return ct(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return kr(), Ge(lt), Ge(et), Ka(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Wa(t), null;
      case 13:
        if (Ge(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(r(340));
          yr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ge(Oe), null;
      case 4:
        return kr(), null;
      case 10:
        return $a(t.type._context), null;
      case 22:
      case 23:
        return Ts(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mo = !1, rt = !1, up = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (s) {
      $e(e, t, s);
    }
    else n.current = null;
  }
  function hs(e, t, n) {
    try {
      n();
    } catch (s) {
      $e(e, t, s);
    }
  }
  var Dc = !1;
  function lp(e, t) {
    if (Ta = zi, e = ul(), ma(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var c = s.anchorOffset, f = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, f.nodeType;
          } catch {
            n = null;
            break e;
          }
          var g = 0, k = -1, C = -1, D = 0, B = 0, H = e, $ = null;
          t: for (; ; ) {
            for (var ne; H !== n || c !== 0 && H.nodeType !== 3 || (k = g + c), H !== f || s !== 0 && H.nodeType !== 3 || (C = g + s), H.nodeType === 3 && (g += H.nodeValue.length), (ne = H.firstChild) !== null; )
              $ = H, H = ne;
            for (; ; ) {
              if (H === e) break t;
              if ($ === n && ++D === c && (k = g), $ === f && ++B === s && (C = g), (ne = H.nextSibling) !== null) break;
              H = $, $ = H.parentNode;
            }
            H = ne;
          }
          n = k === -1 || C === -1 ? null : { start: k, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ra = { focusedElem: e, selectionRange: n }, zi = !1, oe = t; oe !== null; ) if (t = oe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, oe = e;
    else for (; oe !== null; ) {
      t = oe;
      try {
        var ae = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ae !== null) {
              var se = ae.memoizedProps, Be = ae.memoizedState, R = t.stateNode, T = R.getSnapshotBeforeUpdate(t.elementType === t.type ? se : Gt(t.type, se), Be);
              R.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var b = t.stateNode.containerInfo;
            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (K) {
        $e(t, t.return, K);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, oe = e;
        break;
      }
      oe = t.return;
    }
    return ae = Dc, Dc = !1, ae;
  }
  function di(e, t, n) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var c = s = s.next;
      do {
        if ((c.tag & e) === e) {
          var f = c.destroy;
          c.destroy = void 0, f !== void 0 && hs(t, n, f);
        }
        c = c.next;
      } while (c !== s);
    }
  }
  function yo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var s = n.create;
          n.destroy = s();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ps(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Ac(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ac(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[ei], delete t[Da], delete t[Wh], delete t[Vh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Pc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Nc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gs(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yi));
    else if (s !== 4 && (e = e.child, e !== null)) for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), e = e.sibling;
  }
  function vs(e, t, n) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), e = e.sibling;
  }
  var qe = null, zt = !1;
  function Dn(e, t, n) {
    for (n = n.child; n !== null; ) Fc(e, t, n), n = n.sibling;
  }
  function Fc(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(Di, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        rt || Cr(n, t);
      case 6:
        var s = qe, c = zt;
        qe = null, Dn(e, t, n), qe = s, zt = c, qe !== null && (zt ? (e = qe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : qe.removeChild(n.stateNode));
        break;
      case 18:
        qe !== null && (zt ? (e = qe, n = n.stateNode, e.nodeType === 8 ? ba(e.parentNode, n) : e.nodeType === 1 && ba(e, n), jr(e)) : ba(qe, n.stateNode));
        break;
      case 4:
        s = qe, c = zt, qe = n.stateNode.containerInfo, zt = !0, Dn(e, t, n), qe = s, zt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (s = n.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          c = s = s.next;
          do {
            var f = c, g = f.destroy;
            f = f.tag, g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && hs(n, t, g), c = c.next;
          } while (c !== s);
        }
        Dn(e, t, n);
        break;
      case 1:
        if (!rt && (Cr(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = n.memoizedProps, s.state = n.memoizedState, s.componentWillUnmount();
        } catch (k) {
          $e(n, t, k);
        }
        Dn(e, t, n);
        break;
      case 21:
        Dn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (rt = (s = rt) || n.memoizedState !== null, Dn(e, t, n), rt = s) : Dn(e, t, n);
        break;
      default:
        Dn(e, t, n);
    }
  }
  function Gc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new up()), t.forEach(function(s) {
        var c = yp.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(c, c));
      });
    }
  }
  function It(e, t) {
    var n = t.deletions;
    if (n !== null) for (var s = 0; s < n.length; s++) {
      var c = n[s];
      try {
        var f = e, g = t, k = g;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              qe = k.stateNode, zt = !1;
              break e;
            case 3:
              qe = k.stateNode.containerInfo, zt = !0;
              break e;
            case 4:
              qe = k.stateNode.containerInfo, zt = !0;
              break e;
          }
          k = k.return;
        }
        if (qe === null) throw Error(r(160));
        Fc(f, g, c), qe = null, zt = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (D) {
        $e(c, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zc(t, e), t = t.sibling;
  }
  function zc(e, t) {
    var n = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (It(t, e), qt(e), s & 4) {
          try {
            di(3, e, e.return), yo(3, e);
          } catch (se) {
            $e(e, e.return, se);
          }
          try {
            di(5, e, e.return);
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 1:
        It(t, e), qt(e), s & 512 && n !== null && Cr(n, n.return);
        break;
      case 5:
        if (It(t, e), qt(e), s & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            Ht(c, "");
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        if (s & 4 && (c = e.stateNode, c != null)) {
          var f = e.memoizedProps, g = n !== null ? n.memoizedProps : f, k = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            k === "input" && f.type === "radio" && f.name != null && Re(c, f), Ko(k, g);
            var D = Ko(k, f);
            for (g = 0; g < C.length; g += 2) {
              var B = C[g], H = C[g + 1];
              B === "style" ? Vt(c, H) : B === "dangerouslySetInnerHTML" ? On(c, H) : B === "children" ? Ht(c, H) : j(c, B, H, D);
            }
            switch (k) {
              case "input":
                Te(c, f);
                break;
              case "textarea":
                Bt(c, f);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!f.multiple;
                var ne = f.value;
                ne != null ? F(c, !!f.multiple, ne, !1) : $ !== !!f.multiple && (f.defaultValue != null ? F(
                  c,
                  !!f.multiple,
                  f.defaultValue,
                  !0
                ) : F(c, !!f.multiple, f.multiple ? [] : "", !1));
            }
            c[ei] = f;
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 6:
        if (It(t, e), qt(e), s & 4) {
          if (e.stateNode === null) throw Error(r(162));
          c = e.stateNode, f = e.memoizedProps;
          try {
            c.nodeValue = f;
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 3:
        if (It(t, e), qt(e), s & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (se) {
          $e(e, e.return, se);
        }
        break;
      case 4:
        It(t, e), qt(e);
        break;
      case 13:
        It(t, e), qt(e), c = e.child, c.flags & 8192 && (f = c.memoizedState !== null, c.stateNode.isHidden = f, !f || c.alternate !== null && c.alternate.memoizedState !== null || (ws = Me())), s & 4 && Gc(e);
        break;
      case 22:
        if (B = n !== null && n.memoizedState !== null, e.mode & 1 ? (rt = (D = rt) || B, It(t, e), rt = D) : It(t, e), qt(e), s & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !B && (e.mode & 1) !== 0) for (oe = e, B = e.child; B !== null; ) {
            for (H = oe = B; oe !== null; ) {
              switch ($ = oe, ne = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  di(4, $, $.return);
                  break;
                case 1:
                  Cr($, $.return);
                  var ae = $.stateNode;
                  if (typeof ae.componentWillUnmount == "function") {
                    s = $, n = $.return;
                    try {
                      t = s, ae.props = t.memoizedProps, ae.state = t.memoizedState, ae.componentWillUnmount();
                    } catch (se) {
                      $e(s, n, se);
                    }
                  }
                  break;
                case 5:
                  Cr($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Uc(H);
                    continue;
                  }
              }
              ne !== null ? (ne.return = $, oe = ne) : Uc(H);
            }
            B = B.sibling;
          }
          e: for (B = null, H = e; ; ) {
            if (H.tag === 5) {
              if (B === null) {
                B = H;
                try {
                  c = H.stateNode, D ? (f = c.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (k = H.stateNode, C = H.memoizedProps.style, g = C != null && C.hasOwnProperty("display") ? C.display : null, k.style.display = $n("display", g));
                } catch (se) {
                  $e(e, e.return, se);
                }
              }
            } else if (H.tag === 6) {
              if (B === null) try {
                H.stateNode.nodeValue = D ? "" : H.memoizedProps;
              } catch (se) {
                $e(e, e.return, se);
              }
            } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === e) && H.child !== null) {
              H.child.return = H, H = H.child;
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              B === H && (B = null), H = H.return;
            }
            B === H && (B = null), H.sibling.return = H.return, H = H.sibling;
          }
        }
        break;
      case 19:
        It(t, e), qt(e), s & 4 && Gc(e);
        break;
      case 21:
        break;
      default:
        It(
          t,
          e
        ), qt(e);
    }
  }
  function qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Pc(n)) {
              var s = n;
              break e;
            }
            n = n.return;
          }
          throw Error(r(160));
        }
        switch (s.tag) {
          case 5:
            var c = s.stateNode;
            s.flags & 32 && (Ht(c, ""), s.flags &= -33);
            var f = Nc(e);
            vs(e, f, c);
            break;
          case 3:
          case 4:
            var g = s.stateNode.containerInfo, k = Nc(e);
            gs(e, k, g);
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        $e(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function cp(e, t, n) {
    oe = e, Ic(e);
  }
  function Ic(e, t, n) {
    for (var s = (e.mode & 1) !== 0; oe !== null; ) {
      var c = oe, f = c.child;
      if (c.tag === 22 && s) {
        var g = c.memoizedState !== null || mo;
        if (!g) {
          var k = c.alternate, C = k !== null && k.memoizedState !== null || rt;
          k = mo;
          var D = rt;
          if (mo = g, (rt = C) && !D) for (oe = c; oe !== null; ) g = oe, C = g.child, g.tag === 22 && g.memoizedState !== null ? $c(c) : C !== null ? (C.return = g, oe = C) : $c(c);
          for (; f !== null; ) oe = f, Ic(f), f = f.sibling;
          oe = c, mo = k, rt = D;
        }
        Oc(e);
      } else (c.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = c, oe = f) : Oc(e);
    }
  }
  function Oc(e) {
    for (; oe !== null; ) {
      var t = oe;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || yo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !rt) if (n === null) s.componentDidMount();
              else {
                var c = t.elementType === t.type ? n.memoizedProps : Gt(t.type, n.memoizedProps);
                s.componentDidUpdate(c, n.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var f = t.updateQueue;
              f !== null && Ul(t, f, s);
              break;
            case 3:
              var g = t.updateQueue;
              if (g !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ul(t, g, n);
              }
              break;
            case 5:
              var k = t.stateNode;
              if (n === null && t.flags & 4) {
                n = k;
                var C = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && n.focus();
                    break;
                  case "img":
                    C.src && (n.src = C.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var D = t.alternate;
                if (D !== null) {
                  var B = D.memoizedState;
                  if (B !== null) {
                    var H = B.dehydrated;
                    H !== null && jr(H);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(r(163));
          }
          rt || t.flags & 512 && ps(t);
        } catch ($) {
          $e(t, t.return, $);
        }
      }
      if (t === e) {
        oe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, oe = n;
        break;
      }
      oe = t.return;
    }
  }
  function Uc(e) {
    for (; oe !== null; ) {
      var t = oe;
      if (t === e) {
        oe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, oe = n;
        break;
      }
      oe = t.return;
    }
  }
  function $c(e) {
    for (; oe !== null; ) {
      var t = oe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              yo(4, t);
            } catch (C) {
              $e(t, n, C);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var c = t.return;
              try {
                s.componentDidMount();
              } catch (C) {
                $e(t, c, C);
              }
            }
            var f = t.return;
            try {
              ps(t);
            } catch (C) {
              $e(t, f, C);
            }
            break;
          case 5:
            var g = t.return;
            try {
              ps(t);
            } catch (C) {
              $e(t, g, C);
            }
        }
      } catch (C) {
        $e(t, t.return, C);
      }
      if (t === e) {
        oe = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        k.return = t.return, oe = k;
        break;
      }
      oe = t.return;
    }
  }
  var dp = Math.ceil, wo = x.ReactCurrentDispatcher, ms = x.ReactCurrentOwner, Ct = x.ReactCurrentBatchConfig, xe = 0, Ye = null, je = null, Ze = 0, yt = 0, Tr = Tn(0), We = 0, fi = null, Qn = 0, Eo = 0, ys = 0, hi = null, ft = null, ws = 0, Rr = 1 / 0, un = null, So = !1, Es = null, An = null, ko = !1, Pn = null, _o = 0, pi = 0, Ss = null, Co = -1, To = 0;
  function ut() {
    return (xe & 6) !== 0 ? Me() : Co !== -1 ? Co : Co = Me();
  }
  function Nn(e) {
    return (e.mode & 1) === 0 ? 1 : (xe & 2) !== 0 && Ze !== 0 ? Ze & -Ze : Yh.transition !== null ? (To === 0 && (To = Nu()), To) : (e = De, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bu(e.type)), e);
  }
  function Ot(e, t, n, s) {
    if (50 < pi) throw pi = 0, Ss = null, Error(r(185));
    Or(e, n, s), ((xe & 2) === 0 || e !== Ye) && (e === Ye && ((xe & 2) === 0 && (Eo |= n), We === 4 && Fn(e, Ze)), ht(e, s), n === 1 && xe === 0 && (t.mode & 1) === 0 && (Rr = Me() + 500, Zi && xn()));
  }
  function ht(e, t) {
    var n = e.callbackNode;
    Yf(e, t);
    var s = Ni(e, e === Ye ? Ze : 0);
    if (s === 0) n !== null && Du(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (n != null && Du(n), t === 1) e.tag === 0 ? Kh(Bc.bind(null, e)) : xl(Bc.bind(null, e)), jh(function() {
        (xe & 6) === 0 && xn();
      }), n = null;
      else {
        switch (Fu(s)) {
          case 1:
            n = ea;
            break;
          case 4:
            n = Au;
            break;
          case 16:
            n = bi;
            break;
          case 536870912:
            n = Pu;
            break;
          default:
            n = bi;
        }
        n = Xc(n, Mc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Mc(e, t) {
    if (Co = -1, To = 0, (xe & 6) !== 0) throw Error(r(327));
    var n = e.callbackNode;
    if (xr() && e.callbackNode !== n) return null;
    var s = Ni(e, e === Ye ? Ze : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ro(e, s);
    else {
      t = s;
      var c = xe;
      xe |= 2;
      var f = Hc();
      (Ye !== e || Ze !== t) && (un = null, Rr = Me() + 500, qn(e, t));
      do
        try {
          pp();
          break;
        } catch (k) {
          jc(e, k);
        }
      while (!0);
      Ua(), wo.current = f, xe = c, je !== null ? t = 0 : (Ye = null, Ze = 0, t = We);
    }
    if (t !== 0) {
      if (t === 2 && (c = ta(e), c !== 0 && (s = c, t = ks(e, c))), t === 1) throw n = fi, qn(e, 0), Fn(e, s), ht(e, Me()), n;
      if (t === 6) Fn(e, s);
      else {
        if (c = e.current.alternate, (s & 30) === 0 && !fp(c) && (t = Ro(e, s), t === 2 && (f = ta(e), f !== 0 && (s = f, t = ks(e, f))), t === 1)) throw n = fi, qn(e, 0), Fn(e, s), ht(e, Me()), n;
        switch (e.finishedWork = c, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Zn(e, ft, un);
            break;
          case 3:
            if (Fn(e, s), (s & 130023424) === s && (t = ws + 500 - Me(), 10 < t)) {
              if (Ni(e, 0) !== 0) break;
              if (c = e.suspendedLanes, (c & s) !== s) {
                ut(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = La(Zn.bind(null, e, ft, un), t);
              break;
            }
            Zn(e, ft, un);
            break;
          case 4:
            if (Fn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, c = -1; 0 < s; ) {
              var g = 31 - Pt(s);
              f = 1 << g, g = t[g], g > c && (c = g), s &= ~f;
            }
            if (s = c, s = Me() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * dp(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = La(Zn.bind(null, e, ft, un), s);
              break;
            }
            Zn(e, ft, un);
            break;
          case 5:
            Zn(e, ft, un);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return ht(e, Me()), e.callbackNode === n ? Mc.bind(null, e) : null;
  }
  function ks(e, t) {
    var n = hi;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = Ro(e, t), e !== 2 && (t = ft, ft = n, t !== null && _s(t)), e;
  }
  function _s(e) {
    ft === null ? ft = e : ft.push.apply(ft, e);
  }
  function fp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var s = 0; s < n.length; s++) {
          var c = n[s], f = c.getSnapshot;
          c = c.value;
          try {
            if (!Nt(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Fn(e, t) {
    for (t &= ~ys, t &= ~Eo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Pt(t), s = 1 << n;
      e[n] = -1, t &= ~s;
    }
  }
  function Bc(e) {
    if ((xe & 6) !== 0) throw Error(r(327));
    xr();
    var t = Ni(e, 0);
    if ((t & 1) === 0) return ht(e, Me()), null;
    var n = Ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var s = ta(e);
      s !== 0 && (t = s, n = ks(e, s));
    }
    if (n === 1) throw n = fi, qn(e, 0), Fn(e, t), ht(e, Me()), n;
    if (n === 6) throw Error(r(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zn(e, ft, un), ht(e, Me()), null;
  }
  function Cs(e, t) {
    var n = xe;
    xe |= 1;
    try {
      return e(t);
    } finally {
      xe = n, xe === 0 && (Rr = Me() + 500, Zi && xn());
    }
  }
  function Xn(e) {
    Pn !== null && Pn.tag === 0 && (xe & 6) === 0 && xr();
    var t = xe;
    xe |= 1;
    var n = Ct.transition, s = De;
    try {
      if (Ct.transition = null, De = 1, e) return e();
    } finally {
      De = s, Ct.transition = n, xe = t, (xe & 6) === 0 && xn();
    }
  }
  function Ts() {
    yt = Tr.current, Ge(Tr);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Bh(n)), je !== null) for (n = je.return; n !== null; ) {
      var s = n;
      switch (Fa(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Xi();
          break;
        case 3:
          kr(), Ge(lt), Ge(et), Ka();
          break;
        case 5:
          Wa(s);
          break;
        case 4:
          kr();
          break;
        case 13:
          Ge(Oe);
          break;
        case 19:
          Ge(Oe);
          break;
        case 10:
          $a(s.type._context);
          break;
        case 22:
        case 23:
          Ts();
      }
      n = n.return;
    }
    if (Ye = e, je = e = Gn(e.current, null), Ze = yt = t, We = 0, fi = null, ys = Eo = Qn = 0, ft = hi = null, Vn !== null) {
      for (t = 0; t < Vn.length; t++) if (n = Vn[t], s = n.interleaved, s !== null) {
        n.interleaved = null;
        var c = s.next, f = n.pending;
        if (f !== null) {
          var g = f.next;
          f.next = c, s.next = g;
        }
        n.pending = s;
      }
      Vn = null;
    }
    return e;
  }
  function jc(e, t) {
    do {
      var n = je;
      try {
        if (Ua(), uo.current = ho, lo) {
          for (var s = Ue.memoizedState; s !== null; ) {
            var c = s.queue;
            c !== null && (c.pending = null), s = s.next;
          }
          lo = !1;
        }
        if (Yn = 0, Ke = He = Ue = null, ai = !1, si = 0, ms.current = null, n === null || n.return === null) {
          We = 1, fi = t, je = null;
          break;
        }
        e: {
          var f = e, g = n.return, k = n, C = t;
          if (t = Ze, k.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var D = C, B = k, H = B.tag;
            if ((B.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var $ = B.alternate;
              $ ? (B.updateQueue = $.updateQueue, B.memoizedState = $.memoizedState, B.lanes = $.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var ne = pc(g);
            if (ne !== null) {
              ne.flags &= -257, gc(ne, g, k, f, t), ne.mode & 1 && hc(f, D, t), t = ne, C = D;
              var ae = t.updateQueue;
              if (ae === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(C), t.updateQueue = se;
              } else ae.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                hc(f, D, t), Rs();
                break e;
              }
              C = Error(r(426));
            }
          } else if (Ie && k.mode & 1) {
            var Be = pc(g);
            if (Be !== null) {
              (Be.flags & 65536) === 0 && (Be.flags |= 256), gc(Be, g, k, f, t), Ia(_r(C, k));
              break e;
            }
          }
          f = C = _r(C, k), We !== 4 && (We = 2), hi === null ? hi = [f] : hi.push(f), f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536, t &= -t, f.lanes |= t;
                var R = dc(f, C, t);
                Ol(f, R);
                break e;
              case 1:
                k = C;
                var T = f.type, b = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (An === null || !An.has(b)))) {
                  f.flags |= 65536, t &= -t, f.lanes |= t;
                  var K = fc(f, k, t);
                  Ol(f, K);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Vc(n);
      } catch (le) {
        t = le, je === n && n !== null && (je = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Hc() {
    var e = wo.current;
    return wo.current = ho, e === null ? ho : e;
  }
  function Rs() {
    (We === 0 || We === 3 || We === 2) && (We = 4), Ye === null || (Qn & 268435455) === 0 && (Eo & 268435455) === 0 || Fn(Ye, Ze);
  }
  function Ro(e, t) {
    var n = xe;
    xe |= 2;
    var s = Hc();
    (Ye !== e || Ze !== t) && (un = null, qn(e, t));
    do
      try {
        hp();
        break;
      } catch (c) {
        jc(e, c);
      }
    while (!0);
    if (Ua(), xe = n, wo.current = s, je !== null) throw Error(r(261));
    return Ye = null, Ze = 0, We;
  }
  function hp() {
    for (; je !== null; ) Wc(je);
  }
  function pp() {
    for (; je !== null && !Uf(); ) Wc(je);
  }
  function Wc(e) {
    var t = Qc(e.alternate, e, yt);
    e.memoizedProps = e.pendingProps, t === null ? Vc(e) : je = t, ms.current = null;
  }
  function Vc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ap(n, t, yt), n !== null) {
          je = n;
          return;
        }
      } else {
        if (n = sp(n, t), n !== null) {
          n.flags &= 32767, je = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          We = 6, je = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function Zn(e, t, n) {
    var s = De, c = Ct.transition;
    try {
      Ct.transition = null, De = 1, gp(e, t, n, s);
    } finally {
      Ct.transition = c, De = s;
    }
    return null;
  }
  function gp(e, t, n, s) {
    do
      xr();
    while (Pn !== null);
    if ((xe & 6) !== 0) throw Error(r(327));
    n = e.finishedWork;
    var c = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(r(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var f = n.lanes | n.childLanes;
    if (Qf(e, f), e === Ye && (je = Ye = null, Ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ko || (ko = !0, Xc(bi, function() {
      return xr(), null;
    })), f = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || f) {
      f = Ct.transition, Ct.transition = null;
      var g = De;
      De = 1;
      var k = xe;
      xe |= 4, ms.current = null, lp(e, n), zc(n, e), Gh(Ra), zi = !!Ta, Ra = Ta = null, e.current = n, cp(n), $f(), xe = k, De = g, Ct.transition = f;
    } else e.current = n;
    if (ko && (ko = !1, Pn = e, _o = c), f = e.pendingLanes, f === 0 && (An = null), jf(n.stateNode), ht(e, Me()), t !== null) for (s = e.onRecoverableError, n = 0; n < t.length; n++) c = t[n], s(c.value, { componentStack: c.stack, digest: c.digest });
    if (So) throw So = !1, e = Es, Es = null, e;
    return (_o & 1) !== 0 && e.tag !== 0 && xr(), f = e.pendingLanes, (f & 1) !== 0 ? e === Ss ? pi++ : (pi = 0, Ss = e) : pi = 0, xn(), null;
  }
  function xr() {
    if (Pn !== null) {
      var e = Fu(_o), t = Ct.transition, n = De;
      try {
        if (Ct.transition = null, De = 16 > e ? 16 : e, Pn === null) var s = !1;
        else {
          if (e = Pn, Pn = null, _o = 0, (xe & 6) !== 0) throw Error(r(331));
          var c = xe;
          for (xe |= 4, oe = e.current; oe !== null; ) {
            var f = oe, g = f.child;
            if ((oe.flags & 16) !== 0) {
              var k = f.deletions;
              if (k !== null) {
                for (var C = 0; C < k.length; C++) {
                  var D = k[C];
                  for (oe = D; oe !== null; ) {
                    var B = oe;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        di(8, B, f);
                    }
                    var H = B.child;
                    if (H !== null) H.return = B, oe = H;
                    else for (; oe !== null; ) {
                      B = oe;
                      var $ = B.sibling, ne = B.return;
                      if (Ac(B), B === D) {
                        oe = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = ne, oe = $;
                        break;
                      }
                      oe = ne;
                    }
                  }
                }
                var ae = f.alternate;
                if (ae !== null) {
                  var se = ae.child;
                  if (se !== null) {
                    ae.child = null;
                    do {
                      var Be = se.sibling;
                      se.sibling = null, se = Be;
                    } while (se !== null);
                  }
                }
                oe = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && g !== null) g.return = f, oe = g;
            else e: for (; oe !== null; ) {
              if (f = oe, (f.flags & 2048) !== 0) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  di(9, f, f.return);
              }
              var R = f.sibling;
              if (R !== null) {
                R.return = f.return, oe = R;
                break e;
              }
              oe = f.return;
            }
          }
          var T = e.current;
          for (oe = T; oe !== null; ) {
            g = oe;
            var b = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && b !== null) b.return = g, oe = b;
            else e: for (g = T; oe !== null; ) {
              if (k = oe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yo(9, k);
                }
              } catch (le) {
                $e(k, k.return, le);
              }
              if (k === g) {
                oe = null;
                break e;
              }
              var K = k.sibling;
              if (K !== null) {
                K.return = k.return, oe = K;
                break e;
              }
              oe = k.return;
            }
          }
          if (xe = c, xn(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(Di, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        De = n, Ct.transition = t;
      }
    }
    return !1;
  }
  function Kc(e, t, n) {
    t = _r(n, t), t = dc(e, t, 1), e = bn(e, t, 1), t = ut(), e !== null && (Or(e, 1, t), ht(e, t));
  }
  function $e(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (An === null || !An.has(s))) {
          e = _r(n, e), e = fc(t, e, 1), t = bn(t, e, 1), e = ut(), t !== null && (Or(t, 1, e), ht(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function vp(e, t, n) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ut(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (Ze & n) === n && (We === 4 || We === 3 && (Ze & 130023424) === Ze && 500 > Me() - ws ? qn(e, 0) : ys |= n), ht(e, t);
  }
  function Yc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pi, Pi <<= 1, (Pi & 130023424) === 0 && (Pi = 4194304)));
    var n = ut();
    e = on(e, t), e !== null && (Or(e, t, n), ht(e, n));
  }
  function mp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Yc(e, n);
  }
  function yp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    s !== null && s.delete(t), Yc(e, n);
  }
  var Qc;
  Qc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || lt.current) dt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return dt = !1, op(e, t, n);
      dt = (e.flags & 131072) !== 0;
    }
    else dt = !1, Ie && (t.flags & 1048576) !== 0 && Ll(t, eo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        vo(e, t), e = t.pendingProps;
        var c = gr(t, et.current);
        Sr(t, n), c = Xa(null, t, s, e, c, n);
        var f = qa();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ct(s) ? (f = !0, qi(t)) : f = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, ja(t), c.updater = po, t.stateNode = c, c._reactInternals = t, rs(t, s, e, n), t = ss(null, t, s, !0, f, n)) : (t.tag = 0, Ie && f && Na(t), st(null, t, c, n), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (vo(e, t), e = t.pendingProps, c = s._init, s = c(s._payload), t.type = s, c = t.tag = Ep(s), e = Gt(s, e), c) {
            case 0:
              t = as(null, t, s, e, n);
              break e;
            case 1:
              t = Sc(null, t, s, e, n);
              break e;
            case 11:
              t = vc(null, t, s, e, n);
              break e;
            case 14:
              t = mc(null, t, s, Gt(s.type, e), n);
              break e;
          }
          throw Error(r(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Gt(s, c), as(e, t, s, c, n);
      case 1:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Gt(s, c), Sc(e, t, s, c, n);
      case 3:
        e: {
          if (kc(t), e === null) throw Error(r(387));
          s = t.pendingProps, f = t.memoizedState, c = f.element, Il(e, t), ao(t, s, null, n);
          var g = t.memoizedState;
          if (s = g.element, f.isDehydrated) if (f = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            c = _r(Error(r(423)), t), t = _c(e, t, s, n, c);
            break e;
          } else if (s !== c) {
            c = _r(Error(r(424)), t), t = _c(e, t, s, n, c);
            break e;
          } else for (mt = Cn(t.stateNode.containerInfo.firstChild), vt = t, Ie = !0, Ft = null, n = Gl(t, null, s, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (yr(), s === c) {
              t = sn(e, t, n);
              break e;
            }
            st(e, t, s, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return $l(t), e === null && za(t), s = t.type, c = t.pendingProps, f = e !== null ? e.memoizedProps : null, g = c.children, xa(s, c) ? g = null : f !== null && xa(s, f) && (t.flags |= 32), Ec(e, t), st(e, t, g, n), t.child;
      case 6:
        return e === null && za(t), null;
      case 13:
        return Cc(e, t, n);
      case 4:
        return Ha(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = wr(t, null, s, n) : st(e, t, s, n), t.child;
      case 11:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Gt(s, c), vc(e, t, s, c, n);
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (s = t.type._context, c = t.pendingProps, f = t.memoizedProps, g = c.value, Ne(ro, s._currentValue), s._currentValue = g, f !== null) if (Nt(f.value, g)) {
            if (f.children === c.children && !lt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (f = t.child, f !== null && (f.return = t); f !== null; ) {
            var k = f.dependencies;
            if (k !== null) {
              g = f.child;
              for (var C = k.firstContext; C !== null; ) {
                if (C.context === s) {
                  if (f.tag === 1) {
                    C = an(-1, n & -n), C.tag = 2;
                    var D = f.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var B = D.pending;
                      B === null ? C.next = C : (C.next = B.next, B.next = C), D.pending = C;
                    }
                  }
                  f.lanes |= n, C = f.alternate, C !== null && (C.lanes |= n), Ma(
                    f.return,
                    n,
                    t
                  ), k.lanes |= n;
                  break;
                }
                C = C.next;
              }
            } else if (f.tag === 10) g = f.type === t.type ? null : f.child;
            else if (f.tag === 18) {
              if (g = f.return, g === null) throw Error(r(341));
              g.lanes |= n, k = g.alternate, k !== null && (k.lanes |= n), Ma(g, n, t), g = f.sibling;
            } else g = f.child;
            if (g !== null) g.return = f;
            else for (g = f; g !== null; ) {
              if (g === t) {
                g = null;
                break;
              }
              if (f = g.sibling, f !== null) {
                f.return = g.return, g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          st(e, t, c.children, n), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, s = t.pendingProps.children, Sr(t, n), c = kt(c), s = s(c), t.flags |= 1, st(e, t, s, n), t.child;
      case 14:
        return s = t.type, c = Gt(s, t.pendingProps), c = Gt(s.type, c), mc(e, t, s, c, n);
      case 15:
        return yc(e, t, t.type, t.pendingProps, n);
      case 17:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Gt(s, c), vo(e, t), t.tag = 1, ct(s) ? (e = !0, qi(t)) : e = !1, Sr(t, n), lc(t, s, c), rs(t, s, c, n), ss(null, t, s, !0, e, n);
      case 19:
        return Rc(e, t, n);
      case 22:
        return wc(e, t, n);
    }
    throw Error(r(156, t.tag));
  };
  function Xc(e, t) {
    return bu(e, t);
  }
  function wp(e, t, n, s) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Tt(e, t, n, s) {
    return new wp(e, t, n, s);
  }
  function xs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ep(e) {
    if (typeof e == "function") return xs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ye) return 11;
      if (e === we) return 14;
    }
    return 2;
  }
  function Gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function xo(e, t, n, s, c, f) {
    var g = 2;
    if (s = e, typeof e == "function") xs(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else e: switch (e) {
      case N:
        return Jn(n.children, c, f, t);
      case V:
        g = 8, c |= 8;
        break;
      case re:
        return e = Tt(12, n, t, c | 2), e.elementType = re, e.lanes = f, e;
      case ve:
        return e = Tt(13, n, t, c), e.elementType = ve, e.lanes = f, e;
      case Z:
        return e = Tt(19, n, t, c), e.elementType = Z, e.lanes = f, e;
      case ie:
        return Lo(n, c, f, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            g = 10;
            break e;
          case ke:
            g = 9;
            break e;
          case ye:
            g = 11;
            break e;
          case we:
            g = 14;
            break e;
          case Ce:
            g = 16, s = null;
            break e;
        }
        throw Error(r(130, e == null ? e : typeof e, ""));
    }
    return t = Tt(g, n, t, c), t.elementType = e, t.type = s, t.lanes = f, t;
  }
  function Jn(e, t, n, s) {
    return e = Tt(7, e, s, t), e.lanes = n, e;
  }
  function Lo(e, t, n, s) {
    return e = Tt(22, e, s, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ls(e, t, n) {
    return e = Tt(6, e, null, t), e.lanes = n, e;
  }
  function bs(e, t, n) {
    return t = Tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Sp(e, t, n, s, c) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = na(0), this.expirationTimes = na(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = na(0), this.identifierPrefix = s, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ds(e, t, n, s, c, f, g, k, C) {
    return e = new Sp(e, t, n, k, C), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Tt(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = { element: s, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ja(f), e;
  }
  function kp(e, t, n) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: P, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: n };
  }
  function qc(e) {
    if (!e) return Rn;
    e = e._reactInternals;
    e: {
      if (Mn(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ct(n)) return Tl(e, n, t);
    }
    return t;
  }
  function Zc(e, t, n, s, c, f, g, k, C) {
    return e = Ds(n, s, !0, e, c, f, g, k, C), e.context = qc(null), n = e.current, s = ut(), c = Nn(n), f = an(s, c), f.callback = t ?? null, bn(n, f, c), e.current.lanes = c, Or(e, c, s), ht(e, s), e;
  }
  function bo(e, t, n, s) {
    var c = t.current, f = ut(), g = Nn(c);
    return n = qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(f, g), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = bn(c, t, g), e !== null && (Ot(e, c, g, f), oo(e, c, g)), g;
  }
  function Do(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Jc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    Jc(e, t), (e = e.alternate) && Jc(e, t);
  }
  function _p() {
    return null;
  }
  var ed = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ps(e) {
    this._internalRoot = e;
  }
  Ao.prototype.render = Ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    bo(e, t, null, null);
  }, Ao.prototype.unmount = Ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xn(function() {
        bo(null, e, null, null);
      }), t[en] = null;
    }
  };
  function Ao(e) {
    this._internalRoot = e;
  }
  Ao.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Iu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++) ;
      Sn.splice(n, 0, e), n === 0 && $u(e);
    }
  };
  function Ns(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function td() {
  }
  function Cp(e, t, n, s, c) {
    if (c) {
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var D = Do(g);
          f.call(D);
        };
      }
      var g = Zc(t, s, e, 0, null, !1, !1, "", td);
      return e._reactRootContainer = g, e[en] = g.current, Zr(e.nodeType === 8 ? e.parentNode : e), Xn(), g;
    }
    for (; c = e.lastChild; ) e.removeChild(c);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var D = Do(C);
        k.call(D);
      };
    }
    var C = Ds(e, 0, !1, null, null, !1, !1, "", td);
    return e._reactRootContainer = C, e[en] = C.current, Zr(e.nodeType === 8 ? e.parentNode : e), Xn(function() {
      bo(t, C, n, s);
    }), C;
  }
  function No(e, t, n, s, c) {
    var f = n._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof c == "function") {
        var k = c;
        c = function() {
          var C = Do(g);
          k.call(C);
        };
      }
      bo(t, g, e, c);
    } else g = Cp(n, t, e, c, s);
    return Do(g);
  }
  Gu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ir(t.pendingLanes);
          n !== 0 && (ra(t, n | 1), ht(t, Me()), (xe & 6) === 0 && (Rr = Me() + 500, xn()));
        }
        break;
      case 13:
        Xn(function() {
          var s = on(e, 1);
          if (s !== null) {
            var c = ut();
            Ot(s, e, 1, c);
          }
        }), As(e, 1);
    }
  }, ia = function(e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = ut();
        Ot(t, e, 134217728, n);
      }
      As(e, 134217728);
    }
  }, zu = function(e) {
    if (e.tag === 13) {
      var t = Nn(e), n = on(e, t);
      if (n !== null) {
        var s = ut();
        Ot(n, e, t, s);
      }
      As(e, t);
    }
  }, Iu = function() {
    return De;
  }, Ou = function(e, t) {
    var n = De;
    try {
      return De = e, t();
    } finally {
      De = n;
    }
  }, Xo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Te(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var s = n[t];
            if (s !== e && s.form === e.form) {
              var c = Qi(s);
              if (!c) throw Error(r(90));
              pn(s), Te(s, c);
            }
          }
        }
        break;
      case "textarea":
        Bt(e, n);
        break;
      case "select":
        t = n.value, t != null && F(e, !!n.multiple, t, !1);
    }
  }, ku = Cs, _u = Xn;
  var Tp = { usingClientEntryPoint: !1, Events: [ti, hr, Qi, Eu, Su, Cs] }, gi = { findFiberByHostInstance: Bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Rp = { bundleType: gi.bundleType, version: gi.version, rendererPackageName: gi.rendererPackageName, rendererConfig: gi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: x.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = xu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: gi.findFiberByHostInstance || _p, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber) try {
      Di = Fo.inject(Rp), Kt = Fo;
    } catch {
    }
  }
  return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp, pt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ns(t)) throw Error(r(200));
    return kp(e, t, null, n);
  }, pt.createRoot = function(e, t) {
    if (!Ns(e)) throw Error(r(299));
    var n = !1, s = "", c = ed;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Ds(e, 1, !1, null, null, n, !1, s, c), e[en] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new Ps(t);
  }, pt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = xu(t), e = e === null ? null : e.stateNode, e;
  }, pt.flushSync = function(e) {
    return Xn(e);
  }, pt.hydrate = function(e, t, n) {
    if (!Po(t)) throw Error(r(200));
    return No(null, e, t, !0, n);
  }, pt.hydrateRoot = function(e, t, n) {
    if (!Ns(e)) throw Error(r(405));
    var s = n != null && n.hydratedSources || null, c = !1, f = "", g = ed;
    if (n != null && (n.unstable_strictMode === !0 && (c = !0), n.identifierPrefix !== void 0 && (f = n.identifierPrefix), n.onRecoverableError !== void 0 && (g = n.onRecoverableError)), t = Zc(t, null, e, 1, n ?? null, c, !1, f, g), e[en] = t.current, Zr(e), s) for (e = 0; e < s.length; e++) n = s[e], c = n._getVersion, c = c(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, c] : t.mutableSourceEagerHydrationData.push(
      n,
      c
    );
    return new Ao(t);
  }, pt.render = function(e, t, n) {
    if (!Po(t)) throw Error(r(200));
    return No(null, e, t, !1, n);
  }, pt.unmountComponentAtNode = function(e) {
    if (!Po(e)) throw Error(r(40));
    return e._reactRootContainer ? (Xn(function() {
      No(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, pt.unstable_batchedUpdates = Cs, pt.unstable_renderSubtreeIntoContainer = function(e, t, n, s) {
    if (!Po(n)) throw Error(r(200));
    if (e == null || e._reactInternals === void 0) throw Error(r(38));
    return No(e, t, n, !1, s);
  }, pt.version = "18.3.1-next-f1338f8080-20240426", pt;
}
var ld;
function Fp() {
  if (ld) return zs.exports;
  ld = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (o) {
        console.error(o);
      }
  }
  return u(), zs.exports = Np(), zs.exports;
}
var cd;
function Gp() {
  if (cd) return Go;
  cd = 1;
  var u = Fp();
  return Go.createRoot = u.createRoot, Go.hydrateRoot = u.hydrateRoot, Go;
}
var zp = Gp(), zo = { exports: {} }, dd;
function Ip() {
  if (dd) return zo.exports;
  dd = 1;
  var u = typeof Reflect == "object" ? Reflect : null, o = u && typeof u.apply == "function" ? u.apply : function(A, P, N) {
    return Function.prototype.apply.call(A, P, N);
  }, r;
  u && typeof u.ownKeys == "function" ? r = u.ownKeys : Object.getOwnPropertySymbols ? r = function(A) {
    return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A));
  } : r = function(A) {
    return Object.getOwnPropertyNames(A);
  };
  function i(x) {
    console && console.warn && console.warn(x);
  }
  var a = Number.isNaN || function(A) {
    return A !== A;
  };
  function l() {
    l.init.call(this);
  }
  zo.exports = l, zo.exports.once = Q, l.EventEmitter = l, l.prototype._events = void 0, l.prototype._eventsCount = 0, l.prototype._maxListeners = void 0;
  var d = 10;
  function h(x) {
    if (typeof x != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof x);
  }
  Object.defineProperty(l, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return d;
    },
    set: function(x) {
      if (typeof x != "number" || x < 0 || a(x))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + x + ".");
      d = x;
    }
  }), l.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, l.prototype.setMaxListeners = function(A) {
    if (typeof A != "number" || A < 0 || a(A))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + A + ".");
    return this._maxListeners = A, this;
  };
  function p(x) {
    return x._maxListeners === void 0 ? l.defaultMaxListeners : x._maxListeners;
  }
  l.prototype.getMaxListeners = function() {
    return p(this);
  }, l.prototype.emit = function(A) {
    for (var P = [], N = 1; N < arguments.length; N++) P.push(arguments[N]);
    var V = A === "error", re = this._events;
    if (re !== void 0)
      V = V && re.error === void 0;
    else if (!V)
      return !1;
    if (V) {
      var J;
      if (P.length > 0 && (J = P[0]), J instanceof Error)
        throw J;
      var ke = new Error("Unhandled error." + (J ? " (" + J.message + ")" : ""));
      throw ke.context = J, ke;
    }
    var ye = re[A];
    if (ye === void 0)
      return !1;
    if (typeof ye == "function")
      o(ye, this, P);
    else
      for (var ve = ye.length, Z = O(ye, ve), N = 0; N < ve; ++N)
        o(Z[N], this, P);
    return !0;
  };
  function v(x, A, P, N) {
    var V, re, J;
    if (h(P), re = x._events, re === void 0 ? (re = x._events = /* @__PURE__ */ Object.create(null), x._eventsCount = 0) : (re.newListener !== void 0 && (x.emit(
      "newListener",
      A,
      P.listener ? P.listener : P
    ), re = x._events), J = re[A]), J === void 0)
      J = re[A] = P, ++x._eventsCount;
    else if (typeof J == "function" ? J = re[A] = N ? [P, J] : [J, P] : N ? J.unshift(P) : J.push(P), V = p(x), V > 0 && J.length > V && !J.warned) {
      J.warned = !0;
      var ke = new Error("Possible EventEmitter memory leak detected. " + J.length + " " + String(A) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      ke.name = "MaxListenersExceededWarning", ke.emitter = x, ke.type = A, ke.count = J.length, i(ke);
    }
    return x;
  }
  l.prototype.addListener = function(A, P) {
    return v(this, A, P, !1);
  }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function(A, P) {
    return v(this, A, P, !0);
  };
  function y() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function m(x, A, P) {
    var N = { fired: !1, wrapFn: void 0, target: x, type: A, listener: P }, V = y.bind(N);
    return V.listener = P, N.wrapFn = V, V;
  }
  l.prototype.once = function(A, P) {
    return h(P), this.on(A, m(this, A, P)), this;
  }, l.prototype.prependOnceListener = function(A, P) {
    return h(P), this.prependListener(A, m(this, A, P)), this;
  }, l.prototype.removeListener = function(A, P) {
    var N, V, re, J, ke;
    if (h(P), V = this._events, V === void 0)
      return this;
    if (N = V[A], N === void 0)
      return this;
    if (N === P || N.listener === P)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete V[A], V.removeListener && this.emit("removeListener", A, N.listener || P));
    else if (typeof N != "function") {
      for (re = -1, J = N.length - 1; J >= 0; J--)
        if (N[J] === P || N[J].listener === P) {
          ke = N[J].listener, re = J;
          break;
        }
      if (re < 0)
        return this;
      re === 0 ? N.shift() : G(N, re), N.length === 1 && (V[A] = N[0]), V.removeListener !== void 0 && this.emit("removeListener", A, ke || P);
    }
    return this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.removeAllListeners = function(A) {
    var P, N, V;
    if (N = this._events, N === void 0)
      return this;
    if (N.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : N[A] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete N[A]), this;
    if (arguments.length === 0) {
      var re = Object.keys(N), J;
      for (V = 0; V < re.length; ++V)
        J = re[V], J !== "removeListener" && this.removeAllListeners(J);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (P = N[A], typeof P == "function")
      this.removeListener(A, P);
    else if (P !== void 0)
      for (V = P.length - 1; V >= 0; V--)
        this.removeListener(A, P[V]);
    return this;
  };
  function _(x, A, P) {
    var N = x._events;
    if (N === void 0)
      return [];
    var V = N[A];
    return V === void 0 ? [] : typeof V == "function" ? P ? [V.listener || V] : [V] : P ? z(V) : O(V, V.length);
  }
  l.prototype.listeners = function(A) {
    return _(this, A, !0);
  }, l.prototype.rawListeners = function(A) {
    return _(this, A, !1);
  }, l.listenerCount = function(x, A) {
    return typeof x.listenerCount == "function" ? x.listenerCount(A) : L.call(x, A);
  }, l.prototype.listenerCount = L;
  function L(x) {
    var A = this._events;
    if (A !== void 0) {
      var P = A[x];
      if (typeof P == "function")
        return 1;
      if (P !== void 0)
        return P.length;
    }
    return 0;
  }
  l.prototype.eventNames = function() {
    return this._eventsCount > 0 ? r(this._events) : [];
  };
  function O(x, A) {
    for (var P = new Array(A), N = 0; N < A; ++N)
      P[N] = x[N];
    return P;
  }
  function G(x, A) {
    for (; A + 1 < x.length; A++)
      x[A] = x[A + 1];
    x.pop();
  }
  function z(x) {
    for (var A = new Array(x.length), P = 0; P < A.length; ++P)
      A[P] = x[P].listener || x[P];
    return A;
  }
  function Q(x, A) {
    return new Promise(function(P, N) {
      function V(J) {
        x.removeListener(A, re), N(J);
      }
      function re() {
        typeof x.removeListener == "function" && x.removeListener("error", V), P([].slice.call(arguments));
      }
      j(x, A, re, { once: !0 }), A !== "error" && U(x, V, { once: !0 });
    });
  }
  function U(x, A, P) {
    typeof x.on == "function" && j(x, "error", A, P);
  }
  function j(x, A, P, N) {
    if (typeof x.on == "function")
      N.once ? x.once(A, P) : x.on(A, P);
    else if (typeof x.addEventListener == "function")
      x.addEventListener(A, function V(re) {
        N.once && x.removeEventListener(A, V), P(re);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof x);
  }
  return zo.exports;
}
var Xd = Ip(), Us, fd;
function du() {
  if (fd) return Us;
  fd = 1;
  function u(o) {
    if (typeof o != "function")
      throw new Error("obliterator/iterator: expecting a function!");
    this.next = o;
  }
  return typeof Symbol < "u" && (u.prototype[Symbol.iterator] = function() {
    return this;
  }), u.of = function() {
    var o = arguments, r = o.length, i = 0;
    return new u(function() {
      return i >= r ? { done: !0 } : { done: !1, value: o[i++] };
    });
  }, u.empty = function() {
    var o = new u(function() {
      return { done: !0 };
    });
    return o;
  }, u.fromSequence = function(o) {
    var r = 0, i = o.length;
    return new u(function() {
      return r >= i ? { done: !0 } : { done: !1, value: o[r++] };
    });
  }, u.is = function(o) {
    return o instanceof u ? !0 : typeof o == "object" && o !== null && typeof o.next == "function";
  }, Us = u, Us;
}
var Op = du();
const Lt = /* @__PURE__ */ Ti(Op);
var Io = {}, hd;
function Up() {
  return hd || (hd = 1, Io.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer < "u", Io.SYMBOL_SUPPORT = typeof Symbol < "u"), Io;
}
var $s, pd;
function qd() {
  if (pd) return $s;
  pd = 1;
  var u = du(), o = Up(), r = o.ARRAY_BUFFER_SUPPORT, i = o.SYMBOL_SUPPORT;
  function a(l) {
    return typeof l == "string" || Array.isArray(l) || r && ArrayBuffer.isView(l) ? u.fromSequence(l) : typeof l != "object" || l === null ? null : i && typeof l[Symbol.iterator] == "function" ? l[Symbol.iterator]() : typeof l.next == "function" ? l : null;
  }
  return $s = function(d) {
    var h = a(d);
    if (!h)
      throw new Error(
        "obliterator: target is not iterable nor a valid iterator."
      );
    return h;
  }, $s;
}
var Ms, gd;
function $p() {
  if (gd) return Ms;
  gd = 1;
  var u = qd();
  return Ms = function(r, i) {
    for (var a = arguments.length > 1 ? i : 1 / 0, l = a !== 1 / 0 ? new Array(a) : [], d, h = 0, p = u(r); ; ) {
      if (h === a) return l;
      if (d = p.next(), d.done)
        return h !== i && (l.length = h), l;
      l[h++] = d.value;
    }
  }, Ms;
}
var Mp = $p();
const Zd = /* @__PURE__ */ Ti(Mp);
var Bs, vd;
function Bp() {
  if (vd) return Bs;
  vd = 1;
  var u = du(), o = qd();
  return Bs = function() {
    var i = arguments, a = null, l = -1;
    return new u(function() {
      var h = null;
      do {
        if (a === null) {
          if (l++, l >= i.length) return { done: !0 };
          a = o(i[l]);
        }
        if (h = a.next(), h.done === !0) {
          a = null;
          continue;
        }
        break;
      } while (!0);
      return h;
    });
  }, Bs;
}
var jp = Bp();
const fn = /* @__PURE__ */ Ti(jp);
function Hp() {
  const u = arguments[0];
  for (let o = 1, r = arguments.length; o < r; o++)
    if (arguments[o])
      for (const i in arguments[o]) u[i] = arguments[o][i];
  return u;
}
let Ve = Hp;
typeof Object.assign == "function" && (Ve = Object.assign);
function xt(u, o, r, i) {
  const a = u._nodes.get(o);
  let l = null;
  return a && (i === "mixed" ? l = a.out && a.out[r] || a.undirected && a.undirected[r] : i === "directed" ? l = a.out && a.out[r] : l = a.undirected && a.undirected[r]), l;
}
function Je(u) {
  return typeof u == "object" && u !== null;
}
function Jd(u) {
  let o;
  for (o in u) return !1;
  return !0;
}
function Rt(u, o, r) {
  Object.defineProperty(u, o, {
    enumerable: !1,
    configurable: !1,
    writable: !0,
    value: r
  });
}
function Ut(u, o, r) {
  const i = {
    enumerable: !0,
    configurable: !0
  };
  typeof r == "function" ? i.get = r : (i.value = r, i.writable = !1), Object.defineProperty(u, o, i);
}
function md(u) {
  return !(!Je(u) || u.attributes && !Array.isArray(u.attributes));
}
function Wp() {
  let u = Math.floor(Math.random() * 256) & 255;
  return () => u++;
}
class fu extends Error {
  constructor(o) {
    super(), this.name = "GraphError", this.message = o;
  }
}
class ee extends fu {
  constructor(o) {
    super(o), this.name = "InvalidArgumentsGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(
      this,
      ee.prototype.constructor
    );
  }
}
class Y extends fu {
  constructor(o) {
    super(o), this.name = "NotFoundGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, Y.prototype.constructor);
  }
}
class ge extends fu {
  constructor(o) {
    super(o), this.name = "UsageGraphError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, ge.prototype.constructor);
  }
}
function ef(u, o) {
  this.key = u, this.attributes = o, this.clear();
}
ef.prototype.clear = function() {
  this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
};
function tf(u, o) {
  this.key = u, this.attributes = o, this.clear();
}
tf.prototype.clear = function() {
  this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
};
function nf(u, o) {
  this.key = u, this.attributes = o, this.clear();
}
nf.prototype.clear = function() {
  this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
};
function Pr(u, o, r, i, a) {
  this.key = o, this.attributes = a, this.undirected = u, this.source = r, this.target = i;
}
Pr.prototype.attach = function() {
  let u = "out", o = "in";
  this.undirected && (u = o = "undirected");
  const r = this.source.key, i = this.target.key;
  this.source[u][i] = this, !(this.undirected && r === i) && (this.target[o][r] = this);
};
Pr.prototype.attachMulti = function() {
  let u = "out", o = "in";
  const r = this.source.key, i = this.target.key;
  this.undirected && (u = o = "undirected");
  const a = this.source[u], l = a[i];
  if (typeof l > "u") {
    a[i] = this, this.undirected && r === i || (this.target[o][r] = this);
    return;
  }
  l.previous = this, this.next = l, a[i] = this, this.target[o][r] = this;
};
Pr.prototype.detach = function() {
  const u = this.source.key, o = this.target.key;
  let r = "out", i = "in";
  this.undirected && (r = i = "undirected"), delete this.source[r][o], delete this.target[i][u];
};
Pr.prototype.detachMulti = function() {
  const u = this.source.key, o = this.target.key;
  let r = "out", i = "in";
  this.undirected && (r = i = "undirected"), this.previous === void 0 ? this.next === void 0 ? (delete this.source[r][o], delete this.target[i][u]) : (this.next.previous = void 0, this.source[r][o] = this.next, this.target[i][u] = this.next) : (this.previous.next = this.next, this.next !== void 0 && (this.next.previous = this.previous));
};
const rf = 0, of = 1, Vp = 2, af = 3;
function hn(u, o, r, i, a, l, d) {
  let h, p, v, y;
  if (i = "" + i, r === rf) {
    if (h = u._nodes.get(i), !h)
      throw new Y(
        `Graph.${o}: could not find the "${i}" node in the graph.`
      );
    v = a, y = l;
  } else if (r === af) {
    if (a = "" + a, p = u._edges.get(a), !p)
      throw new Y(
        `Graph.${o}: could not find the "${a}" edge in the graph.`
      );
    const m = p.source.key, _ = p.target.key;
    if (i === m)
      h = p.target;
    else if (i === _)
      h = p.source;
    else
      throw new Y(
        `Graph.${o}: the "${i}" node is not attached to the "${a}" edge (${m}, ${_}).`
      );
    v = l, y = d;
  } else {
    if (p = u._edges.get(i), !p)
      throw new Y(
        `Graph.${o}: could not find the "${i}" edge in the graph.`
      );
    r === of ? h = p.source : h = p.target, v = a, y = l;
  }
  return [h, v, y];
}
function Kp(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    return d.attributes[h];
  };
}
function Yp(u, o, r) {
  u.prototype[o] = function(i, a) {
    const [l] = hn(
      this,
      o,
      r,
      i,
      a
    );
    return l.attributes;
  };
}
function Qp(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    return d.attributes.hasOwnProperty(h);
  };
}
function Xp(u, o, r) {
  u.prototype[o] = function(i, a, l, d) {
    const [h, p, v] = hn(
      this,
      o,
      r,
      i,
      a,
      l,
      d
    );
    return h.attributes[p] = v, this.emit("nodeAttributesUpdated", {
      key: h.key,
      type: "set",
      attributes: h.attributes,
      name: p
    }), this;
  };
}
function qp(u, o, r) {
  u.prototype[o] = function(i, a, l, d) {
    const [h, p, v] = hn(
      this,
      o,
      r,
      i,
      a,
      l,
      d
    );
    if (typeof v != "function")
      throw new ee(
        `Graph.${o}: updater should be a function.`
      );
    const y = h.attributes, m = v(y[p]);
    return y[p] = m, this.emit("nodeAttributesUpdated", {
      key: h.key,
      type: "set",
      attributes: h.attributes,
      name: p
    }), this;
  };
}
function Zp(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    return delete d.attributes[h], this.emit("nodeAttributesUpdated", {
      key: d.key,
      type: "remove",
      attributes: d.attributes,
      name: h
    }), this;
  };
}
function Jp(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    if (!Je(h))
      throw new ee(
        `Graph.${o}: provided attributes are not a plain object.`
      );
    return d.attributes = h, this.emit("nodeAttributesUpdated", {
      key: d.key,
      type: "replace",
      attributes: d.attributes
    }), this;
  };
}
function eg(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    if (!Je(h))
      throw new ee(
        `Graph.${o}: provided attributes are not a plain object.`
      );
    return Ve(d.attributes, h), this.emit("nodeAttributesUpdated", {
      key: d.key,
      type: "merge",
      attributes: d.attributes,
      data: h
    }), this;
  };
}
function tg(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    const [d, h] = hn(
      this,
      o,
      r,
      i,
      a,
      l
    );
    if (typeof h != "function")
      throw new ee(
        `Graph.${o}: provided updater is not a function.`
      );
    return d.attributes = h(d.attributes), this.emit("nodeAttributesUpdated", {
      key: d.key,
      type: "update",
      attributes: d.attributes
    }), this;
  };
}
const ng = [
  {
    name: (u) => `get${u}Attribute`,
    attacher: Kp
  },
  {
    name: (u) => `get${u}Attributes`,
    attacher: Yp
  },
  {
    name: (u) => `has${u}Attribute`,
    attacher: Qp
  },
  {
    name: (u) => `set${u}Attribute`,
    attacher: Xp
  },
  {
    name: (u) => `update${u}Attribute`,
    attacher: qp
  },
  {
    name: (u) => `remove${u}Attribute`,
    attacher: Zp
  },
  {
    name: (u) => `replace${u}Attributes`,
    attacher: Jp
  },
  {
    name: (u) => `merge${u}Attributes`,
    attacher: eg
  },
  {
    name: (u) => `update${u}Attributes`,
    attacher: tg
  }
];
function rg(u) {
  ng.forEach(function({ name: o, attacher: r }) {
    r(u, o("Node"), rf), r(u, o("Source"), of), r(u, o("Target"), Vp), r(u, o("Opposite"), af);
  });
}
function ig(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    return l.attributes[a];
  };
}
function og(u, o, r) {
  u.prototype[o] = function(i) {
    let a;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 1) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const l = "" + i, d = "" + arguments[1];
      if (a = xt(this, l, d, r), !a)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${l}" - "${d}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, a = this._edges.get(i), !a)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    return a.attributes;
  };
}
function ag(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    return l.attributes.hasOwnProperty(a);
  };
}
function sg(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    let d;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 3) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const h = "" + i, p = "" + a;
      if (a = arguments[2], l = arguments[3], d = xt(this, h, p, r), !d)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${h}" - "${p}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, d = this._edges.get(i), !d)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    return d.attributes[a] = l, this.emit("edgeAttributesUpdated", {
      key: d.key,
      type: "set",
      attributes: d.attributes,
      name: a
    }), this;
  };
}
function ug(u, o, r) {
  u.prototype[o] = function(i, a, l) {
    let d;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 3) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const h = "" + i, p = "" + a;
      if (a = arguments[2], l = arguments[3], d = xt(this, h, p, r), !d)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${h}" - "${p}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, d = this._edges.get(i), !d)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    if (typeof l != "function")
      throw new ee(
        `Graph.${o}: updater should be a function.`
      );
    return d.attributes[a] = l(d.attributes[a]), this.emit("edgeAttributesUpdated", {
      key: d.key,
      type: "set",
      attributes: d.attributes,
      name: a
    }), this;
  };
}
function lg(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    return delete l.attributes[a], this.emit("edgeAttributesUpdated", {
      key: l.key,
      type: "remove",
      attributes: l.attributes,
      name: a
    }), this;
  };
}
function cg(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    if (!Je(a))
      throw new ee(
        `Graph.${o}: provided attributes are not a plain object.`
      );
    return l.attributes = a, this.emit("edgeAttributesUpdated", {
      key: l.key,
      type: "replace",
      attributes: l.attributes
    }), this;
  };
}
function dg(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    if (!Je(a))
      throw new ee(
        `Graph.${o}: provided attributes are not a plain object.`
      );
    return Ve(l.attributes, a), this.emit("edgeAttributesUpdated", {
      key: l.key,
      type: "merge",
      attributes: l.attributes,
      data: a
    }), this;
  };
}
function fg(u, o, r) {
  u.prototype[o] = function(i, a) {
    let l;
    if (this.type !== "mixed" && r !== "mixed" && r !== this.type)
      throw new ge(
        `Graph.${o}: cannot find this type of edges in your ${this.type} graph.`
      );
    if (arguments.length > 2) {
      if (this.multi)
        throw new ge(
          `Graph.${o}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`
        );
      const d = "" + i, h = "" + a;
      if (a = arguments[2], l = xt(this, d, h, r), !l)
        throw new Y(
          `Graph.${o}: could not find an edge for the given path ("${d}" - "${h}").`
        );
    } else {
      if (r !== "mixed")
        throw new ge(
          `Graph.${o}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`
        );
      if (i = "" + i, l = this._edges.get(i), !l)
        throw new Y(
          `Graph.${o}: could not find the "${i}" edge in the graph.`
        );
    }
    if (typeof a != "function")
      throw new ee(
        `Graph.${o}: provided updater is not a function.`
      );
    return l.attributes = a(l.attributes), this.emit("edgeAttributesUpdated", {
      key: l.key,
      type: "update",
      attributes: l.attributes
    }), this;
  };
}
const hg = [
  {
    name: (u) => `get${u}Attribute`,
    attacher: ig
  },
  {
    name: (u) => `get${u}Attributes`,
    attacher: og
  },
  {
    name: (u) => `has${u}Attribute`,
    attacher: ag
  },
  {
    name: (u) => `set${u}Attribute`,
    attacher: sg
  },
  {
    name: (u) => `update${u}Attribute`,
    attacher: ug
  },
  {
    name: (u) => `remove${u}Attribute`,
    attacher: lg
  },
  {
    name: (u) => `replace${u}Attributes`,
    attacher: cg
  },
  {
    name: (u) => `merge${u}Attributes`,
    attacher: dg
  },
  {
    name: (u) => `update${u}Attributes`,
    attacher: fg
  }
];
function pg(u) {
  hg.forEach(function({ name: o, attacher: r }) {
    r(u, o("Edge"), "mixed"), r(u, o("DirectedEdge"), "directed"), r(u, o("UndirectedEdge"), "undirected");
  });
}
const gg = [
  {
    name: "edges",
    type: "mixed"
  },
  {
    name: "inEdges",
    type: "directed",
    direction: "in"
  },
  {
    name: "outEdges",
    type: "directed",
    direction: "out"
  },
  {
    name: "inboundEdges",
    type: "mixed",
    direction: "in"
  },
  {
    name: "outboundEdges",
    type: "mixed",
    direction: "out"
  },
  {
    name: "directedEdges",
    type: "directed"
  },
  {
    name: "undirectedEdges",
    type: "undirected"
  }
];
function vg(u, o, r, i) {
  let a = !1;
  for (const l in o) {
    if (l === i) continue;
    const d = o[l];
    if (a = r(
      d.key,
      d.attributes,
      d.source.key,
      d.target.key,
      d.source.attributes,
      d.target.attributes,
      d.undirected
    ), u && a) return d.key;
  }
}
function mg(u, o, r, i) {
  let a, l, d, h = !1;
  for (const p in o)
    if (p !== i) {
      a = o[p];
      do {
        if (l = a.source, d = a.target, h = r(
          a.key,
          a.attributes,
          l.key,
          d.key,
          l.attributes,
          d.attributes,
          a.undirected
        ), u && h) return a.key;
        a = a.next;
      } while (a !== void 0);
    }
}
function js(u, o) {
  const r = Object.keys(u), i = r.length;
  let a, l = 0;
  return new Lt(function() {
    do
      if (a)
        a = a.next;
      else {
        if (l >= i) return { done: !0 };
        const h = r[l++];
        if (h === o) {
          a = void 0;
          continue;
        }
        a = u[h];
      }
    while (!a);
    return {
      done: !1,
      value: {
        edge: a.key,
        attributes: a.attributes,
        source: a.source.key,
        target: a.target.key,
        sourceAttributes: a.source.attributes,
        targetAttributes: a.target.attributes,
        undirected: a.undirected
      }
    };
  });
}
function yg(u, o, r, i) {
  const a = o[r];
  if (!a) return;
  const l = a.source, d = a.target;
  if (i(
    a.key,
    a.attributes,
    l.key,
    d.key,
    l.attributes,
    d.attributes,
    a.undirected
  ) && u)
    return a.key;
}
function wg(u, o, r, i) {
  let a = o[r];
  if (!a) return;
  let l = !1;
  do {
    if (l = i(
      a.key,
      a.attributes,
      a.source.key,
      a.target.key,
      a.source.attributes,
      a.target.attributes,
      a.undirected
    ), u && l) return a.key;
    a = a.next;
  } while (a !== void 0);
}
function Hs(u, o) {
  let r = u[o];
  return r.next !== void 0 ? new Lt(function() {
    if (!r) return { done: !0 };
    const i = {
      edge: r.key,
      attributes: r.attributes,
      source: r.source.key,
      target: r.target.key,
      sourceAttributes: r.source.attributes,
      targetAttributes: r.target.attributes,
      undirected: r.undirected
    };
    return r = r.next, {
      done: !1,
      value: i
    };
  }) : Lt.of({
    edge: r.key,
    attributes: r.attributes,
    source: r.source.key,
    target: r.target.key,
    sourceAttributes: r.source.attributes,
    targetAttributes: r.target.attributes,
    undirected: r.undirected
  });
}
function Eg(u, o) {
  if (u.size === 0) return [];
  if (o === "mixed" || o === u.type)
    return typeof Array.from == "function" ? Array.from(u._edges.keys()) : Zd(u._edges.keys(), u._edges.size);
  const r = o === "undirected" ? u.undirectedSize : u.directedSize, i = new Array(r), a = o === "undirected", l = u._edges.values();
  let d = 0, h, p;
  for (; h = l.next(), h.done !== !0; )
    p = h.value, p.undirected === a && (i[d++] = p.key);
  return i;
}
function sf(u, o, r, i) {
  if (o.size === 0) return;
  const a = r !== "mixed" && r !== o.type, l = r === "undirected";
  let d, h, p = !1;
  const v = o._edges.values();
  for (; d = v.next(), d.done !== !0; ) {
    if (h = d.value, a && h.undirected !== l) continue;
    const { key: y, attributes: m, source: _, target: L } = h;
    if (p = i(
      y,
      m,
      _.key,
      L.key,
      _.attributes,
      L.attributes,
      h.undirected
    ), u && p) return y;
  }
}
function Sg(u, o) {
  if (u.size === 0) return Lt.empty();
  const r = o !== "mixed" && o !== u.type, i = o === "undirected", a = u._edges.values();
  return new Lt(function() {
    let d, h;
    for (; ; ) {
      if (d = a.next(), d.done) return d;
      if (h = d.value, !(r && h.undirected !== i))
        break;
    }
    return { value: {
      edge: h.key,
      attributes: h.attributes,
      source: h.source.key,
      target: h.target.key,
      sourceAttributes: h.source.attributes,
      targetAttributes: h.target.attributes,
      undirected: h.undirected
    }, done: !1 };
  });
}
function hu(u, o, r, i, a, l) {
  const d = o ? mg : vg;
  let h;
  if (r !== "undirected" && (i !== "out" && (h = d(u, a.in, l), u && h) || i !== "in" && (h = d(
    u,
    a.out,
    l,
    i ? void 0 : a.key
  ), u && h)) || r !== "directed" && (h = d(u, a.undirected, l), u && h))
    return h;
}
function kg(u, o, r, i) {
  const a = [];
  return hu(!1, u, o, r, i, function(l) {
    a.push(l);
  }), a;
}
function _g(u, o, r) {
  let i = Lt.empty();
  return u !== "undirected" && (o !== "out" && typeof r.in < "u" && (i = fn(i, js(r.in))), o !== "in" && typeof r.out < "u" && (i = fn(
    i,
    js(r.out, o ? void 0 : r.key)
  ))), u !== "directed" && typeof r.undirected < "u" && (i = fn(i, js(r.undirected))), i;
}
function pu(u, o, r, i, a, l, d) {
  const h = r ? wg : yg;
  let p;
  if (o !== "undirected" && (typeof a.in < "u" && i !== "out" && (p = h(u, a.in, l, d), u && p) || typeof a.out < "u" && i !== "in" && (i || a.key !== l) && (p = h(u, a.out, l, d), u && p)) || o !== "directed" && typeof a.undirected < "u" && (p = h(u, a.undirected, l, d), u && p))
    return p;
}
function Cg(u, o, r, i, a) {
  const l = [];
  return pu(
    !1,
    u,
    o,
    r,
    i,
    a,
    function(d) {
      l.push(d);
    }
  ), l;
}
function Tg(u, o, r, i) {
  let a = Lt.empty();
  return u !== "undirected" && (typeof r.in < "u" && o !== "out" && i in r.in && (a = fn(a, Hs(r.in, i))), typeof r.out < "u" && o !== "in" && i in r.out && (o || r.key !== i) && (a = fn(a, Hs(r.out, i)))), u !== "directed" && typeof r.undirected < "u" && i in r.undirected && (a = fn(
    a,
    Hs(r.undirected, i)
  )), a;
}
function Rg(u, o) {
  const { name: r, type: i, direction: a } = o;
  u.prototype[r] = function(l, d) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type)
      return [];
    if (!arguments.length) return Eg(this, i);
    if (arguments.length === 1) {
      l = "" + l;
      const h = this._nodes.get(l);
      if (typeof h > "u")
        throw new Y(
          `Graph.${r}: could not find the "${l}" node in the graph.`
        );
      return kg(
        this.multi,
        i === "mixed" ? this.type : i,
        a,
        h
      );
    }
    if (arguments.length === 2) {
      l = "" + l, d = "" + d;
      const h = this._nodes.get(l);
      if (!h)
        throw new Y(
          `Graph.${r}:  could not find the "${l}" source node in the graph.`
        );
      if (!this._nodes.has(d))
        throw new Y(
          `Graph.${r}:  could not find the "${d}" target node in the graph.`
        );
      return Cg(
        i,
        this.multi,
        a,
        h,
        d
      );
    }
    throw new ee(
      `Graph.${r}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`
    );
  };
}
function xg(u, o) {
  const { name: r, type: i, direction: a } = o, l = "forEach" + r[0].toUpperCase() + r.slice(1, -1);
  u.prototype[l] = function(v, y, m) {
    if (!(i !== "mixed" && this.type !== "mixed" && i !== this.type)) {
      if (arguments.length === 1)
        return m = v, sf(!1, this, i, m);
      if (arguments.length === 2) {
        v = "" + v, m = y;
        const _ = this._nodes.get(v);
        if (typeof _ > "u")
          throw new Y(
            `Graph.${l}: could not find the "${v}" node in the graph.`
          );
        return hu(
          !1,
          this.multi,
          i === "mixed" ? this.type : i,
          a,
          _,
          m
        );
      }
      if (arguments.length === 3) {
        v = "" + v, y = "" + y;
        const _ = this._nodes.get(v);
        if (!_)
          throw new Y(
            `Graph.${l}:  could not find the "${v}" source node in the graph.`
          );
        if (!this._nodes.has(y))
          throw new Y(
            `Graph.${l}:  could not find the "${y}" target node in the graph.`
          );
        return pu(
          !1,
          i,
          this.multi,
          a,
          _,
          y,
          m
        );
      }
      throw new ee(
        `Graph.${l}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`
      );
    }
  };
  const d = "map" + r[0].toUpperCase() + r.slice(1);
  u.prototype[d] = function() {
    const v = Array.prototype.slice.call(arguments), y = v.pop();
    let m;
    if (v.length === 0) {
      let _ = 0;
      i !== "directed" && (_ += this.undirectedSize), i !== "undirected" && (_ += this.directedSize), m = new Array(_);
      let L = 0;
      v.push((O, G, z, Q, U, j, x) => {
        m[L++] = y(O, G, z, Q, U, j, x);
      });
    } else
      m = [], v.push((_, L, O, G, z, Q, U) => {
        m.push(y(_, L, O, G, z, Q, U));
      });
    return this[l].apply(this, v), m;
  };
  const h = "filter" + r[0].toUpperCase() + r.slice(1);
  u.prototype[h] = function() {
    const v = Array.prototype.slice.call(arguments), y = v.pop(), m = [];
    return v.push((_, L, O, G, z, Q, U) => {
      y(_, L, O, G, z, Q, U) && m.push(_);
    }), this[l].apply(this, v), m;
  };
  const p = "reduce" + r[0].toUpperCase() + r.slice(1);
  u.prototype[p] = function() {
    let v = Array.prototype.slice.call(arguments);
    if (v.length < 2 || v.length > 4)
      throw new ee(
        `Graph.${p}: invalid number of arguments (expecting 2, 3 or 4 and got ${v.length}).`
      );
    if (typeof v[v.length - 1] == "function" && typeof v[v.length - 2] != "function")
      throw new ee(
        `Graph.${p}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`
      );
    let y, m;
    v.length === 2 ? (y = v[0], m = v[1], v = []) : v.length === 3 ? (y = v[1], m = v[2], v = [v[0]]) : v.length === 4 && (y = v[2], m = v[3], v = [v[0], v[1]]);
    let _ = m;
    return v.push((L, O, G, z, Q, U, j) => {
      _ = y(_, L, O, G, z, Q, U, j);
    }), this[l].apply(this, v), _;
  };
}
function Lg(u, o) {
  const { name: r, type: i, direction: a } = o, l = "find" + r[0].toUpperCase() + r.slice(1, -1);
  u.prototype[l] = function(p, v, y) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type)
      return !1;
    if (arguments.length === 1)
      return y = p, sf(!0, this, i, y);
    if (arguments.length === 2) {
      p = "" + p, y = v;
      const m = this._nodes.get(p);
      if (typeof m > "u")
        throw new Y(
          `Graph.${l}: could not find the "${p}" node in the graph.`
        );
      return hu(
        !0,
        this.multi,
        i === "mixed" ? this.type : i,
        a,
        m,
        y
      );
    }
    if (arguments.length === 3) {
      p = "" + p, v = "" + v;
      const m = this._nodes.get(p);
      if (!m)
        throw new Y(
          `Graph.${l}:  could not find the "${p}" source node in the graph.`
        );
      if (!this._nodes.has(v))
        throw new Y(
          `Graph.${l}:  could not find the "${v}" target node in the graph.`
        );
      return pu(
        !0,
        i,
        this.multi,
        a,
        m,
        v,
        y
      );
    }
    throw new ee(
      `Graph.${l}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`
    );
  };
  const d = "some" + r[0].toUpperCase() + r.slice(1, -1);
  u.prototype[d] = function() {
    const p = Array.prototype.slice.call(arguments), v = p.pop();
    return p.push((m, _, L, O, G, z, Q) => v(m, _, L, O, G, z, Q)), !!this[l].apply(this, p);
  };
  const h = "every" + r[0].toUpperCase() + r.slice(1, -1);
  u.prototype[h] = function() {
    const p = Array.prototype.slice.call(arguments), v = p.pop();
    return p.push((m, _, L, O, G, z, Q) => !v(m, _, L, O, G, z, Q)), !this[l].apply(this, p);
  };
}
function bg(u, o) {
  const { name: r, type: i, direction: a } = o, l = r.slice(0, -1) + "Entries";
  u.prototype[l] = function(d, h) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type)
      return Lt.empty();
    if (!arguments.length) return Sg(this, i);
    if (arguments.length === 1) {
      d = "" + d;
      const p = this._nodes.get(d);
      if (!p)
        throw new Y(
          `Graph.${l}: could not find the "${d}" node in the graph.`
        );
      return _g(i, a, p);
    }
    if (arguments.length === 2) {
      d = "" + d, h = "" + h;
      const p = this._nodes.get(d);
      if (!p)
        throw new Y(
          `Graph.${l}:  could not find the "${d}" source node in the graph.`
        );
      if (!this._nodes.has(h))
        throw new Y(
          `Graph.${l}:  could not find the "${h}" target node in the graph.`
        );
      return Tg(i, a, p, h);
    }
    throw new ee(
      `Graph.${l}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`
    );
  };
}
function Dg(u) {
  gg.forEach((o) => {
    Rg(u, o), xg(u, o), Lg(u, o), bg(u, o);
  });
}
const Ag = [
  {
    name: "neighbors",
    type: "mixed"
  },
  {
    name: "inNeighbors",
    type: "directed",
    direction: "in"
  },
  {
    name: "outNeighbors",
    type: "directed",
    direction: "out"
  },
  {
    name: "inboundNeighbors",
    type: "mixed",
    direction: "in"
  },
  {
    name: "outboundNeighbors",
    type: "mixed",
    direction: "out"
  },
  {
    name: "directedNeighbors",
    type: "directed"
  },
  {
    name: "undirectedNeighbors",
    type: "undirected"
  }
];
function Wo() {
  this.A = null, this.B = null;
}
Wo.prototype.wrap = function(u) {
  this.A === null ? this.A = u : this.B === null && (this.B = u);
};
Wo.prototype.has = function(u) {
  return this.A !== null && u in this.A || this.B !== null && u in this.B;
};
function mi(u, o, r, i, a) {
  for (const l in i) {
    const d = i[l], h = d.source, p = d.target, v = h === r ? p : h;
    if (o && o.has(v.key)) continue;
    const y = a(v.key, v.attributes);
    if (u && y) return v.key;
  }
}
function gu(u, o, r, i, a) {
  if (o !== "mixed") {
    if (o === "undirected")
      return mi(
        u,
        null,
        i,
        i.undirected,
        a
      );
    if (typeof r == "string")
      return mi(
        u,
        null,
        i,
        i[r],
        a
      );
  }
  const l = new Wo();
  let d;
  if (o !== "undirected") {
    if (r !== "out") {
      if (d = mi(
        u,
        null,
        i,
        i.in,
        a
      ), u && d) return d;
      l.wrap(i.in);
    }
    if (r !== "in") {
      if (d = mi(
        u,
        l,
        i,
        i.out,
        a
      ), u && d) return d;
      l.wrap(i.out);
    }
  }
  if (o !== "directed" && (d = mi(
    u,
    l,
    i,
    i.undirected,
    a
  ), u && d))
    return d;
}
function Pg(u, o, r) {
  if (u !== "mixed") {
    if (u === "undirected") return Object.keys(r.undirected);
    if (typeof o == "string") return Object.keys(r[o]);
  }
  const i = [];
  return gu(!1, u, o, r, function(a) {
    i.push(a);
  }), i;
}
function yi(u, o, r) {
  const i = Object.keys(r), a = i.length;
  let l = 0;
  return new Lt(function() {
    let h = null;
    do {
      if (l >= a)
        return u && u.wrap(r), { done: !0 };
      const p = r[i[l++]], v = p.source, y = p.target;
      if (h = v === o ? y : v, u && u.has(h.key)) {
        h = null;
        continue;
      }
    } while (h === null);
    return {
      done: !1,
      value: { neighbor: h.key, attributes: h.attributes }
    };
  });
}
function Ng(u, o, r) {
  if (u !== "mixed") {
    if (u === "undirected")
      return yi(null, r, r.undirected);
    if (typeof o == "string")
      return yi(null, r, r[o]);
  }
  let i = Lt.empty();
  const a = new Wo();
  return u !== "undirected" && (o !== "out" && (i = fn(
    i,
    yi(a, r, r.in)
  )), o !== "in" && (i = fn(
    i,
    yi(a, r, r.out)
  ))), u !== "directed" && (i = fn(
    i,
    yi(a, r, r.undirected)
  )), i;
}
function Fg(u, o) {
  const { name: r, type: i, direction: a } = o;
  u.prototype[r] = function(l) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type)
      return [];
    l = "" + l;
    const d = this._nodes.get(l);
    if (typeof d > "u")
      throw new Y(
        `Graph.${r}: could not find the "${l}" node in the graph.`
      );
    return Pg(
      i === "mixed" ? this.type : i,
      a,
      d
    );
  };
}
function Gg(u, o) {
  const { name: r, type: i, direction: a } = o, l = "forEach" + r[0].toUpperCase() + r.slice(1, -1);
  u.prototype[l] = function(v, y) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type) return;
    v = "" + v;
    const m = this._nodes.get(v);
    if (typeof m > "u")
      throw new Y(
        `Graph.${l}: could not find the "${v}" node in the graph.`
      );
    gu(
      !1,
      i === "mixed" ? this.type : i,
      a,
      m,
      y
    );
  };
  const d = "map" + r[0].toUpperCase() + r.slice(1);
  u.prototype[d] = function(v, y) {
    const m = [];
    return this[l](v, (_, L) => {
      m.push(y(_, L));
    }), m;
  };
  const h = "filter" + r[0].toUpperCase() + r.slice(1);
  u.prototype[h] = function(v, y) {
    const m = [];
    return this[l](v, (_, L) => {
      y(_, L) && m.push(_);
    }), m;
  };
  const p = "reduce" + r[0].toUpperCase() + r.slice(1);
  u.prototype[p] = function(v, y, m) {
    if (arguments.length < 3)
      throw new ee(
        `Graph.${p}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`
      );
    let _ = m;
    return this[l](v, (L, O) => {
      _ = y(_, L, O);
    }), _;
  };
}
function zg(u, o) {
  const { name: r, type: i, direction: a } = o, l = r[0].toUpperCase() + r.slice(1, -1), d = "find" + l;
  u.prototype[d] = function(v, y) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type) return;
    v = "" + v;
    const m = this._nodes.get(v);
    if (typeof m > "u")
      throw new Y(
        `Graph.${d}: could not find the "${v}" node in the graph.`
      );
    return gu(
      !0,
      i === "mixed" ? this.type : i,
      a,
      m,
      y
    );
  };
  const h = "some" + l;
  u.prototype[h] = function(v, y) {
    return !!this[d](v, y);
  };
  const p = "every" + l;
  u.prototype[p] = function(v, y) {
    return !this[d](v, (_, L) => !y(_, L));
  };
}
function Ig(u, o) {
  const { name: r, type: i, direction: a } = o, l = r.slice(0, -1) + "Entries";
  u.prototype[l] = function(d) {
    if (i !== "mixed" && this.type !== "mixed" && i !== this.type)
      return Lt.empty();
    d = "" + d;
    const h = this._nodes.get(d);
    if (typeof h > "u")
      throw new Y(
        `Graph.${l}: could not find the "${d}" node in the graph.`
      );
    return Ng(
      i === "mixed" ? this.type : i,
      a,
      h
    );
  };
}
function Og(u) {
  Ag.forEach((o) => {
    Fg(u, o), Gg(u, o), zg(u, o), Ig(u, o);
  });
}
function Oo(u, o, r, i, a) {
  const l = i._nodes.values(), d = i.type;
  let h, p, v, y, m, _;
  for (; h = l.next(), h.done !== !0; ) {
    let L = !1;
    if (p = h.value, d !== "undirected") {
      y = p.out;
      for (v in y) {
        m = y[v];
        do
          _ = m.target, L = !0, a(
            p.key,
            _.key,
            p.attributes,
            _.attributes,
            m.key,
            m.attributes,
            m.undirected
          ), m = m.next;
        while (m);
      }
    }
    if (d !== "directed") {
      y = p.undirected;
      for (v in y)
        if (!(o && p.key > v)) {
          m = y[v];
          do
            _ = m.target, _.key !== v && (_ = m.source), L = !0, a(
              p.key,
              _.key,
              p.attributes,
              _.attributes,
              m.key,
              m.attributes,
              m.undirected
            ), m = m.next;
          while (m);
        }
    }
    r && !L && a(
      p.key,
      null,
      p.attributes,
      null,
      null,
      null,
      null
    );
  }
}
function Ug(u, o) {
  const r = { key: u };
  return Jd(o.attributes) || (r.attributes = Ve({}, o.attributes)), r;
}
function $g(u, o, r) {
  const i = {
    key: o,
    source: r.source.key,
    target: r.target.key
  };
  return Jd(r.attributes) || (i.attributes = Ve({}, r.attributes)), u === "mixed" && r.undirected && (i.undirected = !0), i;
}
function Mg(u) {
  if (!Je(u))
    throw new ee(
      'Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.'
    );
  if (!("key" in u))
    throw new ee(
      "Graph.import: serialized node is missing its key."
    );
  if ("attributes" in u && (!Je(u.attributes) || u.attributes === null))
    throw new ee(
      "Graph.import: invalid attributes. Attributes should be a plain object, null or omitted."
    );
}
function Bg(u) {
  if (!Je(u))
    throw new ee(
      'Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.'
    );
  if (!("source" in u))
    throw new ee(
      "Graph.import: serialized edge is missing its source."
    );
  if (!("target" in u))
    throw new ee(
      "Graph.import: serialized edge is missing its target."
    );
  if ("attributes" in u && (!Je(u.attributes) || u.attributes === null))
    throw new ee(
      "Graph.import: invalid attributes. Attributes should be a plain object, null or omitted."
    );
  if ("undirected" in u && typeof u.undirected != "boolean")
    throw new ee(
      "Graph.import: invalid undirectedness information. Undirected should be boolean or omitted."
    );
}
const jg = Wp(), Hg = /* @__PURE__ */ new Set(["directed", "undirected", "mixed"]), yd = /* @__PURE__ */ new Set([
  "domain",
  "_events",
  "_eventsCount",
  "_maxListeners"
]), Wg = [
  {
    name: (u) => `${u}Edge`,
    generateKey: !0
  },
  {
    name: (u) => `${u}DirectedEdge`,
    generateKey: !0,
    type: "directed"
  },
  {
    name: (u) => `${u}UndirectedEdge`,
    generateKey: !0,
    type: "undirected"
  },
  {
    name: (u) => `${u}EdgeWithKey`
  },
  {
    name: (u) => `${u}DirectedEdgeWithKey`,
    type: "directed"
  },
  {
    name: (u) => `${u}UndirectedEdgeWithKey`,
    type: "undirected"
  }
], Vg = {
  allowSelfLoops: !0,
  multi: !1,
  type: "mixed"
};
function Kg(u, o, r) {
  if (r && !Je(r))
    throw new ee(
      `Graph.addNode: invalid attributes. Expecting an object but got "${r}"`
    );
  if (o = "" + o, r = r || {}, u._nodes.has(o))
    throw new ge(
      `Graph.addNode: the "${o}" node already exist in the graph.`
    );
  const i = new u.NodeDataClass(o, r);
  return u._nodes.set(o, i), u.emit("nodeAdded", {
    key: o,
    attributes: r
  }), i;
}
function wd(u, o, r) {
  const i = new u.NodeDataClass(o, r);
  return u._nodes.set(o, i), u.emit("nodeAdded", {
    key: o,
    attributes: r
  }), i;
}
function uf(u, o, r, i, a, l, d, h) {
  if (!i && u.type === "undirected")
    throw new ge(
      `Graph.${o}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`
    );
  if (i && u.type === "directed")
    throw new ge(
      `Graph.${o}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`
    );
  if (h && !Je(h))
    throw new ee(
      `Graph.${o}: invalid attributes. Expecting an object but got "${h}"`
    );
  if (l = "" + l, d = "" + d, h = h || {}, !u.allowSelfLoops && l === d)
    throw new ge(
      `Graph.${o}: source & target are the same ("${l}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`
    );
  const p = u._nodes.get(l), v = u._nodes.get(d);
  if (!p)
    throw new Y(
      `Graph.${o}: source node "${l}" not found.`
    );
  if (!v)
    throw new Y(
      `Graph.${o}: target node "${d}" not found.`
    );
  const y = {
    key: null,
    undirected: i,
    source: l,
    target: d,
    attributes: h
  };
  if (r)
    a = u._edgeKeyGenerator();
  else if (a = "" + a, u._edges.has(a))
    throw new ge(
      `Graph.${o}: the "${a}" edge already exists in the graph.`
    );
  if (!u.multi && (i ? typeof p.undirected[d] < "u" : typeof p.out[d] < "u"))
    throw new ge(
      `Graph.${o}: an edge linking "${l}" to "${d}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`
    );
  const m = new Pr(
    i,
    a,
    p,
    v,
    h
  );
  u._edges.set(a, m);
  const _ = l === d;
  return i ? (p.undirectedDegree++, v.undirectedDegree++, _ && (p.undirectedLoops++, u._undirectedSelfLoopCount++)) : (p.outDegree++, v.inDegree++, _ && (p.directedLoops++, u._directedSelfLoopCount++)), u.multi ? m.attachMulti() : m.attach(), i ? u._undirectedSize++ : u._directedSize++, y.key = a, u.emit("edgeAdded", y), a;
}
function Yg(u, o, r, i, a, l, d, h, p) {
  if (!i && u.type === "undirected")
    throw new ge(
      `Graph.${o}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`
    );
  if (i && u.type === "directed")
    throw new ge(
      `Graph.${o}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`
    );
  if (h) {
    if (p) {
      if (typeof h != "function")
        throw new ee(
          `Graph.${o}: invalid updater function. Expecting a function but got "${h}"`
        );
    } else if (!Je(h))
      throw new ee(
        `Graph.${o}: invalid attributes. Expecting an object but got "${h}"`
      );
  }
  l = "" + l, d = "" + d;
  let v;
  if (p && (v = h, h = void 0), !u.allowSelfLoops && l === d)
    throw new ge(
      `Graph.${o}: source & target are the same ("${l}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`
    );
  let y = u._nodes.get(l), m = u._nodes.get(d), _, L;
  if (!r && (_ = u._edges.get(a), _)) {
    if ((_.source.key !== l || _.target.key !== d) && (!i || _.source.key !== d || _.target.key !== l))
      throw new ge(
        `Graph.${o}: inconsistency detected when attempting to merge the "${a}" edge with "${l}" source & "${d}" target vs. ("${_.source.key}", "${_.target.key}").`
      );
    L = _;
  }
  if (!L && !u.multi && y && (L = i ? y.undirected[d] : y.out[d]), L) {
    const U = [L.key, !1, !1, !1];
    if (p ? !v : !h) return U;
    if (p) {
      const j = L.attributes;
      L.attributes = v(j), u.emit("edgeAttributesUpdated", {
        type: "replace",
        key: L.key,
        attributes: L.attributes
      });
    } else
      Ve(L.attributes, h), u.emit("edgeAttributesUpdated", {
        type: "merge",
        key: L.key,
        attributes: L.attributes,
        data: h
      });
    return U;
  }
  h = h || {}, p && v && (h = v(h));
  const O = {
    key: null,
    undirected: i,
    source: l,
    target: d,
    attributes: h
  };
  if (r)
    a = u._edgeKeyGenerator();
  else if (a = "" + a, u._edges.has(a))
    throw new ge(
      `Graph.${o}: the "${a}" edge already exists in the graph.`
    );
  let G = !1, z = !1;
  y || (y = wd(u, l, {}), G = !0, l === d && (m = y, z = !0)), m || (m = wd(u, d, {}), z = !0), _ = new Pr(i, a, y, m, h), u._edges.set(a, _);
  const Q = l === d;
  return i ? (y.undirectedDegree++, m.undirectedDegree++, Q && (y.undirectedLoops++, u._undirectedSelfLoopCount++)) : (y.outDegree++, m.inDegree++, Q && (y.directedLoops++, u._directedSelfLoopCount++)), u.multi ? _.attachMulti() : _.attach(), i ? u._undirectedSize++ : u._directedSize++, O.key = a, u.emit("edgeAdded", O), [a, !0, G, z];
}
function Lr(u, o) {
  u._edges.delete(o.key);
  const { source: r, target: i, attributes: a } = o, l = o.undirected, d = r === i;
  l ? (r.undirectedDegree--, i.undirectedDegree--, d && (r.undirectedLoops--, u._undirectedSelfLoopCount--)) : (r.outDegree--, i.inDegree--, d && (r.directedLoops--, u._directedSelfLoopCount--)), u.multi ? o.detachMulti() : o.detach(), l ? u._undirectedSize-- : u._directedSize--, u.emit("edgeDropped", {
    key: o.key,
    attributes: a,
    source: r.key,
    target: i.key,
    undirected: l
  });
}
class Ae extends Xd.EventEmitter {
  constructor(o) {
    if (super(), o = Ve({}, Vg, o), typeof o.multi != "boolean")
      throw new ee(
        `Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${o.multi}".`
      );
    if (!Hg.has(o.type))
      throw new ee(
        `Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${o.type}".`
      );
    if (typeof o.allowSelfLoops != "boolean")
      throw new ee(
        `Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${o.allowSelfLoops}".`
      );
    const r = o.type === "mixed" ? ef : o.type === "directed" ? tf : nf;
    Rt(this, "NodeDataClass", r);
    const i = "geid_" + jg() + "_";
    let a = 0;
    const l = () => {
      let d;
      do
        d = i + a++;
      while (this._edges.has(d));
      return d;
    };
    Rt(this, "_attributes", {}), Rt(this, "_nodes", /* @__PURE__ */ new Map()), Rt(this, "_edges", /* @__PURE__ */ new Map()), Rt(this, "_directedSize", 0), Rt(this, "_undirectedSize", 0), Rt(this, "_directedSelfLoopCount", 0), Rt(this, "_undirectedSelfLoopCount", 0), Rt(this, "_edgeKeyGenerator", l), Rt(this, "_options", o), yd.forEach((d) => Rt(this, d, this[d])), Ut(this, "order", () => this._nodes.size), Ut(this, "size", () => this._edges.size), Ut(this, "directedSize", () => this._directedSize), Ut(this, "undirectedSize", () => this._undirectedSize), Ut(
      this,
      "selfLoopCount",
      () => this._directedSelfLoopCount + this._undirectedSelfLoopCount
    ), Ut(
      this,
      "directedSelfLoopCount",
      () => this._directedSelfLoopCount
    ), Ut(
      this,
      "undirectedSelfLoopCount",
      () => this._undirectedSelfLoopCount
    ), Ut(this, "multi", this._options.multi), Ut(this, "type", this._options.type), Ut(this, "allowSelfLoops", this._options.allowSelfLoops), Ut(this, "implementation", () => "graphology");
  }
  _resetInstanceCounters() {
    this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
  }
  /**---------------------------------------------------------------------------
   * Read
   **---------------------------------------------------------------------------
   */
  /**
   * Method returning whether the given node is found in the graph.
   *
   * @param  {any}     node - The node.
   * @return {boolean}
   */
  hasNode(o) {
    return this._nodes.has("" + o);
  }
  /**
   * Method returning whether the given directed edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  hasDirectedEdge(o, r) {
    if (this.type === "undirected") return !1;
    if (arguments.length === 1) {
      const i = "" + o, a = this._edges.get(i);
      return !!a && !a.undirected;
    } else if (arguments.length === 2) {
      o = "" + o, r = "" + r;
      const i = this._nodes.get(o);
      return i ? i.out.hasOwnProperty(r) : !1;
    }
    throw new ee(
      `Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`
    );
  }
  /**
   * Method returning whether the given undirected edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  hasUndirectedEdge(o, r) {
    if (this.type === "directed") return !1;
    if (arguments.length === 1) {
      const i = "" + o, a = this._edges.get(i);
      return !!a && a.undirected;
    } else if (arguments.length === 2) {
      o = "" + o, r = "" + r;
      const i = this._nodes.get(o);
      return i ? i.undirected.hasOwnProperty(r) : !1;
    }
    throw new ee(
      `Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`
    );
  }
  /**
   * Method returning whether the given edge is found in the graph.
   *
   * Arity 1:
   * @param  {any}     edge - The edge's key.
   *
   * Arity 2:
   * @param  {any}     source - The edge's source.
   * @param  {any}     target - The edge's target.
   *
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the arguments are invalid.
   */
  hasEdge(o, r) {
    if (arguments.length === 1) {
      const i = "" + o;
      return this._edges.has(i);
    } else if (arguments.length === 2) {
      o = "" + o, r = "" + r;
      const i = this._nodes.get(o);
      return i ? typeof i.out < "u" && i.out.hasOwnProperty(r) || typeof i.undirected < "u" && i.undirected.hasOwnProperty(r) : !1;
    }
    throw new ee(
      `Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`
    );
  }
  /**
   * Method returning the edge matching source & target in a directed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  directedEdge(o, r) {
    if (this.type === "undirected") return;
    if (o = "" + o, r = "" + r, this.multi)
      throw new ge(
        "Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead."
      );
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.directedEdge: could not find the "${o}" source node in the graph.`
      );
    if (!this._nodes.has(r))
      throw new Y(
        `Graph.directedEdge: could not find the "${r}" target node in the graph.`
      );
    const a = i.out && i.out[r] || void 0;
    if (a) return a.key;
  }
  /**
   * Method returning the edge matching source & target in a undirected fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  undirectedEdge(o, r) {
    if (this.type === "directed") return;
    if (o = "" + o, r = "" + r, this.multi)
      throw new ge(
        "Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead."
      );
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.undirectedEdge: could not find the "${o}" source node in the graph.`
      );
    if (!this._nodes.has(r))
      throw new Y(
        `Graph.undirectedEdge: could not find the "${r}" target node in the graph.`
      );
    const a = i.undirected && i.undirected[r] || void 0;
    if (a) return a.key;
  }
  /**
   * Method returning the edge matching source & target in a mixed fashion.
   *
   * @param  {any} source - The edge's source.
   * @param  {any} target - The edge's target.
   *
   * @return {any|undefined}
   *
   * @throws {Error} - Will throw if the graph is multi.
   * @throws {Error} - Will throw if source or target doesn't exist.
   */
  edge(o, r) {
    if (this.multi)
      throw new ge(
        "Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead."
      );
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.edge: could not find the "${o}" source node in the graph.`
      );
    if (!this._nodes.has(r))
      throw new Y(
        `Graph.edge: could not find the "${r}" target node in the graph.`
      );
    const a = i.out && i.out[r] || i.undirected && i.undirected[r] || void 0;
    if (a) return a.key;
  }
  /**
   * Method returning whether two nodes are directed neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areDirectedNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areDirectedNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? !1 : r in i.in || r in i.out;
  }
  /**
   * Method returning whether two nodes are out neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areOutNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areOutNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? !1 : r in i.out;
  }
  /**
   * Method returning whether two nodes are in neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areInNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areInNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? !1 : r in i.in;
  }
  /**
   * Method returning whether two nodes are undirected neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areUndirectedNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areUndirectedNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type === "directed" ? !1 : r in i.undirected;
  }
  /**
   * Method returning whether two nodes are neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type !== "undirected" && (r in i.in || r in i.out) || this.type !== "directed" && r in i.undirected;
  }
  /**
   * Method returning whether two nodes are inbound neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areInboundNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areInboundNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type !== "undirected" && r in i.in || this.type !== "directed" && r in i.undirected;
  }
  /**
   * Method returning whether two nodes are outbound neighbors.
   *
   * @param  {any}     node     - The node's key.
   * @param  {any}     neighbor - The neighbor's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  areOutboundNeighbors(o, r) {
    o = "" + o, r = "" + r;
    const i = this._nodes.get(o);
    if (!i)
      throw new Y(
        `Graph.areOutboundNeighbors: could not find the "${o}" node in the graph.`
      );
    return this.type !== "undirected" && r in i.out || this.type !== "directed" && r in i.undirected;
  }
  /**
   * Method returning the given node's in degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  inDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.inDegree: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.inDegree;
  }
  /**
   * Method returning the given node's out degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  outDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.outDegree: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.outDegree;
  }
  /**
   * Method returning the given node's directed degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  directedDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.directedDegree: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.inDegree + r.outDegree;
  }
  /**
   * Method returning the given node's undirected degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  undirectedDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.undirectedDegree: could not find the "${o}" node in the graph.`
      );
    return this.type === "directed" ? 0 : r.undirectedDegree;
  }
  /**
   * Method returning the given node's inbound degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's inbound degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  inboundDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.inboundDegree: could not find the "${o}" node in the graph.`
      );
    let i = 0;
    return this.type !== "directed" && (i += r.undirectedDegree), this.type !== "undirected" && (i += r.inDegree), i;
  }
  /**
   * Method returning the given node's outbound degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's outbound degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  outboundDegree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.outboundDegree: could not find the "${o}" node in the graph.`
      );
    let i = 0;
    return this.type !== "directed" && (i += r.undirectedDegree), this.type !== "undirected" && (i += r.outDegree), i;
  }
  /**
   * Method returning the given node's directed degree.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  degree(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.degree: could not find the "${o}" node in the graph.`
      );
    let i = 0;
    return this.type !== "directed" && (i += r.undirectedDegree), this.type !== "undirected" && (i += r.inDegree + r.outDegree), i;
  }
  /**
   * Method returning the given node's in degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  inDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.inDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.inDegree - r.directedLoops;
  }
  /**
   * Method returning the given node's out degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  outDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.outDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.outDegree - r.directedLoops;
  }
  /**
   * Method returning the given node's directed degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  directedDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.directedDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    return this.type === "undirected" ? 0 : r.inDegree + r.outDegree - r.directedLoops * 2;
  }
  /**
   * Method returning the given node's undirected degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's in degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  undirectedDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.undirectedDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    return this.type === "directed" ? 0 : r.undirectedDegree - r.undirectedLoops * 2;
  }
  /**
   * Method returning the given node's inbound degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's inbound degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  inboundDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.inboundDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    let i = 0, a = 0;
    return this.type !== "directed" && (i += r.undirectedDegree, a += r.undirectedLoops * 2), this.type !== "undirected" && (i += r.inDegree, a += r.directedLoops), i - a;
  }
  /**
   * Method returning the given node's outbound degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's outbound degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  outboundDegreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.outboundDegreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    let i = 0, a = 0;
    return this.type !== "directed" && (i += r.undirectedDegree, a += r.undirectedLoops * 2), this.type !== "undirected" && (i += r.outDegree, a += r.directedLoops), i - a;
  }
  /**
   * Method returning the given node's directed degree without considering self loops.
   *
   * @param  {any}     node - The node's key.
   * @return {number}       - The node's degree.
   *
   * @throws {Error} - Will throw if the node isn't in the graph.
   */
  degreeWithoutSelfLoops(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.degreeWithoutSelfLoops: could not find the "${o}" node in the graph.`
      );
    let i = 0, a = 0;
    return this.type !== "directed" && (i += r.undirectedDegree, a += r.undirectedLoops * 2), this.type !== "undirected" && (i += r.inDegree + r.outDegree, a += r.directedLoops * 2), i - a;
  }
  /**
   * Method returning the given edge's source.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's source.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  source(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.source: could not find the "${o}" edge in the graph.`
      );
    return r.source.key;
  }
  /**
   * Method returning the given edge's target.
   *
   * @param  {any} edge - The edge's key.
   * @return {any}      - The edge's target.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  target(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.target: could not find the "${o}" edge in the graph.`
      );
    return r.target.key;
  }
  /**
   * Method returning the given edge's extremities.
   *
   * @param  {any}   edge - The edge's key.
   * @return {array}      - The edge's extremities.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  extremities(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.extremities: could not find the "${o}" edge in the graph.`
      );
    return [r.source.key, r.target.key];
  }
  /**
   * Given a node & an edge, returns the other extremity of the edge.
   *
   * @param  {any}   node - The node's key.
   * @param  {any}   edge - The edge's key.
   * @return {any}        - The related node.
   *
   * @throws {Error} - Will throw if the edge isn't in the graph or if the
   *                   edge & node are not related.
   */
  opposite(o, r) {
    o = "" + o, r = "" + r;
    const i = this._edges.get(r);
    if (!i)
      throw new Y(
        `Graph.opposite: could not find the "${r}" edge in the graph.`
      );
    const a = i.source.key, l = i.target.key;
    if (o === a) return l;
    if (o === l) return a;
    throw new Y(
      `Graph.opposite: the "${o}" node is not attached to the "${r}" edge (${a}, ${l}).`
    );
  }
  /**
   * Returns whether the given edge has the given node as extremity.
   *
   * @param  {any}     edge - The edge's key.
   * @param  {any}     node - The node's key.
   * @return {boolean}      - The related node.
   *
   * @throws {Error} - Will throw if either the node or the edge isn't in the graph.
   */
  hasExtremity(o, r) {
    o = "" + o, r = "" + r;
    const i = this._edges.get(o);
    if (!i)
      throw new Y(
        `Graph.hasExtremity: could not find the "${o}" edge in the graph.`
      );
    return i.source.key === r || i.target.key === r;
  }
  /**
   * Method returning whether the given edge is undirected.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  isUndirected(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.isUndirected: could not find the "${o}" edge in the graph.`
      );
    return r.undirected;
  }
  /**
   * Method returning whether the given edge is directed.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  isDirected(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.isDirected: could not find the "${o}" edge in the graph.`
      );
    return !r.undirected;
  }
  /**
   * Method returning whether the given edge is a self loop.
   *
   * @param  {any}     edge - The edge's key.
   * @return {boolean}
   *
   * @throws {Error} - Will throw if the edge isn't in the graph.
   */
  isSelfLoop(o) {
    o = "" + o;
    const r = this._edges.get(o);
    if (!r)
      throw new Y(
        `Graph.isSelfLoop: could not find the "${o}" edge in the graph.`
      );
    return r.source === r.target;
  }
  /**---------------------------------------------------------------------------
   * Mutation
   **---------------------------------------------------------------------------
   */
  /**
   * Method used to add a node to the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   *
   * @throws {Error} - Will throw if the given node already exist.
   * @throws {Error} - Will throw if the given attributes are not an object.
   */
  addNode(o, r) {
    return Kg(this, o, r).key;
  }
  /**
   * Method used to merge a node into the graph.
   *
   * @param  {any}    node         - The node.
   * @param  {object} [attributes] - Optional attributes.
   * @return {any}                 - The node.
   */
  mergeNode(o, r) {
    if (r && !Je(r))
      throw new ee(
        `Graph.mergeNode: invalid attributes. Expecting an object but got "${r}"`
      );
    o = "" + o, r = r || {};
    let i = this._nodes.get(o);
    return i ? (r && (Ve(i.attributes, r), this.emit("nodeAttributesUpdated", {
      type: "merge",
      key: o,
      attributes: i.attributes,
      data: r
    })), [o, !1]) : (i = new this.NodeDataClass(o, r), this._nodes.set(o, i), this.emit("nodeAdded", {
      key: o,
      attributes: r
    }), [o, !0]);
  }
  /**
   * Method used to add a node if it does not exist in the graph or else to
   * update its attributes using a function.
   *
   * @param  {any}      node      - The node.
   * @param  {function} [updater] - Optional updater function.
   * @return {any}                - The node.
   */
  updateNode(o, r) {
    if (r && typeof r != "function")
      throw new ee(
        `Graph.updateNode: invalid updater function. Expecting a function but got "${r}"`
      );
    o = "" + o;
    let i = this._nodes.get(o);
    if (i) {
      if (r) {
        const l = i.attributes;
        i.attributes = r(l), this.emit("nodeAttributesUpdated", {
          type: "replace",
          key: o,
          attributes: i.attributes
        });
      }
      return [o, !1];
    }
    const a = r ? r({}) : {};
    return i = new this.NodeDataClass(o, a), this._nodes.set(o, i), this.emit("nodeAdded", {
      key: o,
      attributes: a
    }), [o, !0];
  }
  /**
   * Method used to drop a single node & all its attached edges from the graph.
   *
   * @param  {any}    node - The node.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the node doesn't exist.
   */
  dropNode(o) {
    o = "" + o;
    const r = this._nodes.get(o);
    if (!r)
      throw new Y(
        `Graph.dropNode: could not find the "${o}" node in the graph.`
      );
    let i;
    if (this.type !== "undirected") {
      for (const a in r.out) {
        i = r.out[a];
        do
          Lr(this, i), i = i.next;
        while (i);
      }
      for (const a in r.in) {
        i = r.in[a];
        do
          Lr(this, i), i = i.next;
        while (i);
      }
    }
    if (this.type !== "directed")
      for (const a in r.undirected) {
        i = r.undirected[a];
        do
          Lr(this, i), i = i.next;
        while (i);
      }
    this._nodes.delete(o), this.emit("nodeDropped", {
      key: o,
      attributes: r.attributes
    });
  }
  /**
   * Method used to drop a single edge from the graph.
   *
   * Arity 1:
   * @param  {any}    edge - The edge.
   *
   * Arity 2:
   * @param  {any}    source - Source node.
   * @param  {any}    target - Target node.
   *
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the edge doesn't exist.
   */
  dropEdge(o) {
    let r;
    if (arguments.length > 1) {
      const i = "" + arguments[0], a = "" + arguments[1];
      if (r = xt(this, i, a, this.type), !r)
        throw new Y(
          `Graph.dropEdge: could not find the "${i}" -> "${a}" edge in the graph.`
        );
    } else if (o = "" + o, r = this._edges.get(o), !r)
      throw new Y(
        `Graph.dropEdge: could not find the "${o}" edge in the graph.`
      );
    return Lr(this, r), this;
  }
  /**
   * Method used to drop a single directed edge from the graph.
   *
   * @param  {any}    source - Source node.
   * @param  {any}    target - Target node.
   *
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the edge doesn't exist.
   */
  dropDirectedEdge(o, r) {
    if (arguments.length < 2)
      throw new ge(
        "Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead."
      );
    if (this.multi)
      throw new ge(
        "Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones."
      );
    o = "" + o, r = "" + r;
    const i = xt(this, o, r, "directed");
    if (!i)
      throw new Y(
        `Graph.dropDirectedEdge: could not find a "${o}" -> "${r}" edge in the graph.`
      );
    return Lr(this, i), this;
  }
  /**
   * Method used to drop a single undirected edge from the graph.
   *
   * @param  {any}    source - Source node.
   * @param  {any}    target - Target node.
   *
   * @return {Graph}
   *
   * @throws {Error} - Will throw if the edge doesn't exist.
   */
  dropUndirectedEdge(o, r) {
    if (arguments.length < 2)
      throw new ge(
        "Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead."
      );
    if (this.multi)
      throw new ge(
        "Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones."
      );
    const i = xt(this, o, r, "undirected");
    if (!i)
      throw new Y(
        `Graph.dropUndirectedEdge: could not find a "${o}" -> "${r}" edge in the graph.`
      );
    return Lr(this, i), this;
  }
  /**
   * Method used to remove every edge & every node from the graph.
   *
   * @return {Graph}
   */
  clear() {
    this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
  }
  /**
   * Method used to remove every edge from the graph.
   *
   * @return {Graph}
   */
  clearEdges() {
    const o = this._nodes.values();
    let r;
    for (; r = o.next(), r.done !== !0; )
      r.value.clear();
    this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
  }
  /**---------------------------------------------------------------------------
   * Attributes-related methods
   **---------------------------------------------------------------------------
   */
  /**
   * Method returning the desired graph's attribute.
   *
   * @param  {string} name - Name of the attribute.
   * @return {any}
   */
  getAttribute(o) {
    return this._attributes[o];
  }
  /**
   * Method returning the graph's attributes.
   *
   * @return {object}
   */
  getAttributes() {
    return this._attributes;
  }
  /**
   * Method returning whether the graph has the desired attribute.
   *
   * @param  {string}  name - Name of the attribute.
   * @return {boolean}
   */
  hasAttribute(o) {
    return this._attributes.hasOwnProperty(o);
  }
  /**
   * Method setting a value for the desired graph's attribute.
   *
   * @param  {string}  name  - Name of the attribute.
   * @param  {any}     value - Value for the attribute.
   * @return {Graph}
   */
  setAttribute(o, r) {
    return this._attributes[o] = r, this.emit("attributesUpdated", {
      type: "set",
      attributes: this._attributes,
      name: o
    }), this;
  }
  /**
   * Method using a function to update the desired graph's attribute's value.
   *
   * @param  {string}   name    - Name of the attribute.
   * @param  {function} updater - Function use to update the attribute's value.
   * @return {Graph}
   */
  updateAttribute(o, r) {
    if (typeof r != "function")
      throw new ee(
        "Graph.updateAttribute: updater should be a function."
      );
    const i = this._attributes[o];
    return this._attributes[o] = r(i), this.emit("attributesUpdated", {
      type: "set",
      attributes: this._attributes,
      name: o
    }), this;
  }
  /**
   * Method removing the desired graph's attribute.
   *
   * @param  {string} name  - Name of the attribute.
   * @return {Graph}
   */
  removeAttribute(o) {
    return delete this._attributes[o], this.emit("attributesUpdated", {
      type: "remove",
      attributes: this._attributes,
      name: o
    }), this;
  }
  /**
   * Method replacing the graph's attributes.
   *
   * @param  {object} attributes - New attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */
  replaceAttributes(o) {
    if (!Je(o))
      throw new ee(
        "Graph.replaceAttributes: provided attributes are not a plain object."
      );
    return this._attributes = o, this.emit("attributesUpdated", {
      type: "replace",
      attributes: this._attributes
    }), this;
  }
  /**
   * Method merging the graph's attributes.
   *
   * @param  {object} attributes - Attributes to merge.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given attributes are not a plain object.
   */
  mergeAttributes(o) {
    if (!Je(o))
      throw new ee(
        "Graph.mergeAttributes: provided attributes are not a plain object."
      );
    return Ve(this._attributes, o), this.emit("attributesUpdated", {
      type: "merge",
      attributes: this._attributes,
      data: o
    }), this;
  }
  /**
   * Method updating the graph's attributes.
   *
   * @param  {function} updater - Function used to update the attributes.
   * @return {Graph}
   *
   * @throws {Error} - Will throw if given updater is not a function.
   */
  updateAttributes(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.updateAttributes: provided updater is not a function."
      );
    return this._attributes = o(this._attributes), this.emit("attributesUpdated", {
      type: "update",
      attributes: this._attributes
    }), this;
  }
  /**
   * Method used to update each node's attributes using the given function.
   *
   * @param {function}  updater - Updater function to use.
   * @param {object}    [hints] - Optional hints.
   */
  updateEachNodeAttributes(o, r) {
    if (typeof o != "function")
      throw new ee(
        "Graph.updateEachNodeAttributes: expecting an updater function."
      );
    if (r && !md(r))
      throw new ee(
        "Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}"
      );
    const i = this._nodes.values();
    let a, l;
    for (; a = i.next(), a.done !== !0; )
      l = a.value, l.attributes = o(l.key, l.attributes);
    this.emit("eachNodeAttributesUpdated", {
      hints: r || null
    });
  }
  /**
   * Method used to update each edge's attributes using the given function.
   *
   * @param {function}  updater - Updater function to use.
   * @param {object}    [hints] - Optional hints.
   */
  updateEachEdgeAttributes(o, r) {
    if (typeof o != "function")
      throw new ee(
        "Graph.updateEachEdgeAttributes: expecting an updater function."
      );
    if (r && !md(r))
      throw new ee(
        "Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}"
      );
    const i = this._edges.values();
    let a, l, d, h;
    for (; a = i.next(), a.done !== !0; )
      l = a.value, d = l.source, h = l.target, l.attributes = o(
        l.key,
        l.attributes,
        d.key,
        h.key,
        d.attributes,
        h.attributes,
        l.undirected
      );
    this.emit("eachEdgeAttributesUpdated", {
      hints: r || null
    });
  }
  /**---------------------------------------------------------------------------
   * Iteration-related methods
   **---------------------------------------------------------------------------
   */
  /**
   * Method iterating over the graph's adjacency using the given callback.
   *
   * @param  {function}  callback - Callback to use.
   */
  forEachAdjacencyEntry(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.forEachAdjacencyEntry: expecting a callback."
      );
    Oo(!1, !1, !1, this, o);
  }
  forEachAdjacencyEntryWithOrphans(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.forEachAdjacencyEntryWithOrphans: expecting a callback."
      );
    Oo(!1, !1, !0, this, o);
  }
  /**
   * Method iterating over the graph's assymetric adjacency using the given callback.
   *
   * @param  {function}  callback - Callback to use.
   */
  forEachAssymetricAdjacencyEntry(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.forEachAssymetricAdjacencyEntry: expecting a callback."
      );
    Oo(!1, !0, !1, this, o);
  }
  forEachAssymetricAdjacencyEntryWithOrphans(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback."
      );
    Oo(!1, !0, !0, this, o);
  }
  /**
   * Method returning the list of the graph's nodes.
   *
   * @return {array} - The nodes.
   */
  nodes() {
    return typeof Array.from == "function" ? Array.from(this._nodes.keys()) : Zd(this._nodes.keys(), this._nodes.size);
  }
  /**
   * Method iterating over the graph's nodes using the given callback.
   *
   * @param  {function}  callback - Callback (key, attributes, index).
   */
  forEachNode(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.forEachNode: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    for (; i = r.next(), i.done !== !0; )
      a = i.value, o(a.key, a.attributes);
  }
  /**
   * Method iterating attempting to find a node matching the given predicate
   * function.
   *
   * @param  {function}  callback - Callback (key, attributes).
   */
  findNode(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.findNode: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    for (; i = r.next(), i.done !== !0; )
      if (a = i.value, o(a.key, a.attributes)) return a.key;
  }
  /**
   * Method mapping nodes.
   *
   * @param  {function}  callback - Callback (key, attributes).
   */
  mapNodes(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.mapNode: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    const l = new Array(this.order);
    let d = 0;
    for (; i = r.next(), i.done !== !0; )
      a = i.value, l[d++] = o(a.key, a.attributes);
    return l;
  }
  /**
   * Method returning whether some node verify the given predicate.
   *
   * @param  {function}  callback - Callback (key, attributes).
   */
  someNode(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.someNode: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    for (; i = r.next(), i.done !== !0; )
      if (a = i.value, o(a.key, a.attributes)) return !0;
    return !1;
  }
  /**
   * Method returning whether all node verify the given predicate.
   *
   * @param  {function}  callback - Callback (key, attributes).
   */
  everyNode(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.everyNode: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    for (; i = r.next(), i.done !== !0; )
      if (a = i.value, !o(a.key, a.attributes)) return !1;
    return !0;
  }
  /**
   * Method filtering nodes.
   *
   * @param  {function}  callback - Callback (key, attributes).
   */
  filterNodes(o) {
    if (typeof o != "function")
      throw new ee(
        "Graph.filterNodes: expecting a callback."
      );
    const r = this._nodes.values();
    let i, a;
    const l = [];
    for (; i = r.next(), i.done !== !0; )
      a = i.value, o(a.key, a.attributes) && l.push(a.key);
    return l;
  }
  /**
   * Method reducing nodes.
   *
   * @param  {function}  callback - Callback (accumulator, key, attributes).
   */
  reduceNodes(o, r) {
    if (typeof o != "function")
      throw new ee(
        "Graph.reduceNodes: expecting a callback."
      );
    if (arguments.length < 2)
      throw new ee(
        "Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."
      );
    let i = r;
    const a = this._nodes.values();
    let l, d;
    for (; l = a.next(), l.done !== !0; )
      d = l.value, i = o(i, d.key, d.attributes);
    return i;
  }
  /**
   * Method returning an iterator over the graph's node entries.
   *
   * @return {Iterator}
   */
  nodeEntries() {
    const o = this._nodes.values();
    return new Lt(() => {
      const r = o.next();
      if (r.done) return r;
      const i = r.value;
      return {
        value: { node: i.key, attributes: i.attributes },
        done: !1
      };
    });
  }
  /**---------------------------------------------------------------------------
   * Serialization
   **---------------------------------------------------------------------------
   */
  /**
   * Method used to export the whole graph.
   *
   * @return {object} - The serialized graph.
   */
  export() {
    const o = new Array(this._nodes.size);
    let r = 0;
    this._nodes.forEach((a, l) => {
      o[r++] = Ug(l, a);
    });
    const i = new Array(this._edges.size);
    return r = 0, this._edges.forEach((a, l) => {
      i[r++] = $g(this.type, l, a);
    }), {
      options: {
        type: this.type,
        multi: this.multi,
        allowSelfLoops: this.allowSelfLoops
      },
      attributes: this.getAttributes(),
      nodes: o,
      edges: i
    };
  }
  /**
   * Method used to import a serialized graph.
   *
   * @param  {object|Graph} data  - The serialized graph.
   * @param  {boolean}      merge - Whether to merge data.
   * @return {Graph}              - Returns itself for chaining.
   */
  import(o, r = !1) {
    if (o instanceof Ae)
      return o.forEachNode((p, v) => {
        r ? this.mergeNode(p, v) : this.addNode(p, v);
      }), o.forEachEdge((p, v, y, m, _, L, O) => {
        r ? O ? this.mergeUndirectedEdgeWithKey(p, y, m, v) : this.mergeDirectedEdgeWithKey(p, y, m, v) : O ? this.addUndirectedEdgeWithKey(p, y, m, v) : this.addDirectedEdgeWithKey(p, y, m, v);
      }), this;
    if (!Je(o))
      throw new ee(
        "Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance."
      );
    if (o.attributes) {
      if (!Je(o.attributes))
        throw new ee(
          "Graph.import: invalid attributes. Expecting a plain object."
        );
      r ? this.mergeAttributes(o.attributes) : this.replaceAttributes(o.attributes);
    }
    let i, a, l, d, h;
    if (o.nodes) {
      if (l = o.nodes, !Array.isArray(l))
        throw new ee(
          "Graph.import: invalid nodes. Expecting an array."
        );
      for (i = 0, a = l.length; i < a; i++) {
        d = l[i], Mg(d);
        const { key: p, attributes: v } = d;
        r ? this.mergeNode(p, v) : this.addNode(p, v);
      }
    }
    if (o.edges) {
      let p = !1;
      if (this.type === "undirected" && (p = !0), l = o.edges, !Array.isArray(l))
        throw new ee(
          "Graph.import: invalid edges. Expecting an array."
        );
      for (i = 0, a = l.length; i < a; i++) {
        h = l[i], Bg(h);
        const {
          source: v,
          target: y,
          attributes: m,
          undirected: _ = p
        } = h;
        let L;
        "key" in h ? (L = r ? _ ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : _ ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey, L.call(this, h.key, v, y, m)) : (L = r ? _ ? this.mergeUndirectedEdge : this.mergeDirectedEdge : _ ? this.addUndirectedEdge : this.addDirectedEdge, L.call(this, v, y, m));
      }
    }
    return this;
  }
  /**---------------------------------------------------------------------------
   * Utils
   **---------------------------------------------------------------------------
   */
  /**
   * Method returning a null copy of the graph, i.e. a graph without nodes
   * & edges but with the exact same options.
   *
   * @param  {object} options - Options to merge with the current ones.
   * @return {Graph}          - The null copy.
   */
  nullCopy(o) {
    const r = new Ae(Ve({}, this._options, o));
    return r.replaceAttributes(Ve({}, this.getAttributes())), r;
  }
  /**
   * Method returning an empty copy of the graph, i.e. a graph without edges but
   * with the exact same options.
   *
   * @param  {object} options - Options to merge with the current ones.
   * @return {Graph}          - The empty copy.
   */
  emptyCopy(o) {
    const r = this.nullCopy(o);
    return this._nodes.forEach((i, a) => {
      const l = Ve({}, i.attributes);
      i = new r.NodeDataClass(a, l), r._nodes.set(a, i);
    }), r;
  }
  /**
   * Method returning an exact copy of the graph.
   *
   * @param  {object} options - Upgrade options.
   * @return {Graph}          - The copy.
   */
  copy(o) {
    if (o = o || {}, typeof o.type == "string" && o.type !== this.type && o.type !== "mixed")
      throw new ge(
        `Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${o.type}" because this would mean losing information about the current graph.`
      );
    if (typeof o.multi == "boolean" && o.multi !== this.multi && o.multi !== !0)
      throw new ge(
        "Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph."
      );
    if (typeof o.allowSelfLoops == "boolean" && o.allowSelfLoops !== this.allowSelfLoops && o.allowSelfLoops !== !0)
      throw new ge(
        "Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph."
      );
    const r = this.emptyCopy(o), i = this._edges.values();
    let a, l;
    for (; a = i.next(), a.done !== !0; )
      l = a.value, uf(
        r,
        "copy",
        !1,
        l.undirected,
        l.key,
        l.source.key,
        l.target.key,
        Ve({}, l.attributes)
      );
    return r;
  }
  /**---------------------------------------------------------------------------
   * Known methods
   **---------------------------------------------------------------------------
   */
  /**
   * Method used by JavaScript to perform JSON serialization.
   *
   * @return {object} - The serialized graph.
   */
  toJSON() {
    return this.export();
  }
  /**
   * Method returning [object Graph].
   */
  toString() {
    return "[object Graph]";
  }
  /**
   * Method used internally by node's console to display a custom object.
   *
   * @return {object} - Formatted object representation of the graph.
   */
  inspect() {
    const o = {};
    this._nodes.forEach((l, d) => {
      o[d] = l.attributes;
    });
    const r = {}, i = {};
    this._edges.forEach((l, d) => {
      const h = l.undirected ? "--" : "->";
      let p = "", v = l.source.key, y = l.target.key, m;
      l.undirected && v > y && (m = v, v = y, y = m);
      const _ = `(${v})${h}(${y})`;
      d.startsWith("geid_") ? this.multi && (typeof i[_] > "u" ? i[_] = 0 : i[_]++, p += `${i[_]}. `) : p += `[${d}]: `, p += _, r[p] = l.attributes;
    });
    const a = {};
    for (const l in this)
      this.hasOwnProperty(l) && !yd.has(l) && typeof this[l] != "function" && typeof l != "symbol" && (a[l] = this[l]);
    return a.attributes = this._attributes, a.nodes = o, a.edges = r, Rt(a, "constructor", this.constructor), a;
  }
}
typeof Symbol < "u" && (Ae.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = Ae.prototype.inspect);
Wg.forEach((u) => {
  ["add", "merge", "update"].forEach((o) => {
    const r = u.name(o), i = o === "add" ? uf : Yg;
    u.generateKey ? Ae.prototype[r] = function(a, l, d) {
      return i(
        this,
        r,
        !0,
        (u.type || this.type) === "undirected",
        null,
        a,
        l,
        d,
        o === "update"
      );
    } : Ae.prototype[r] = function(a, l, d, h) {
      return i(
        this,
        r,
        !1,
        (u.type || this.type) === "undirected",
        a,
        l,
        d,
        h,
        o === "update"
      );
    };
  });
});
rg(Ae);
pg(Ae);
Dg(Ae);
Og(Ae);
class lf extends Ae {
  constructor(o) {
    const r = Ve({ type: "directed" }, o);
    if ("multi" in r && r.multi !== !1)
      throw new ee(
        "DirectedGraph.from: inconsistent indication that the graph should be multi in given options!"
      );
    if (r.type !== "directed")
      throw new ee(
        'DirectedGraph.from: inconsistent "' + r.type + '" type in given options!'
      );
    super(r);
  }
}
class cf extends Ae {
  constructor(o) {
    const r = Ve({ type: "undirected" }, o);
    if ("multi" in r && r.multi !== !1)
      throw new ee(
        "UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!"
      );
    if (r.type !== "undirected")
      throw new ee(
        'UndirectedGraph.from: inconsistent "' + r.type + '" type in given options!'
      );
    super(r);
  }
}
class df extends Ae {
  constructor(o) {
    const r = Ve({ multi: !0 }, o);
    if ("multi" in r && r.multi !== !0)
      throw new ee(
        "MultiGraph.from: inconsistent indication that the graph should be simple in given options!"
      );
    super(r);
  }
}
class ff extends Ae {
  constructor(o) {
    const r = Ve({ type: "directed", multi: !0 }, o);
    if ("multi" in r && r.multi !== !0)
      throw new ee(
        "MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!"
      );
    if (r.type !== "directed")
      throw new ee(
        'MultiDirectedGraph.from: inconsistent "' + r.type + '" type in given options!'
      );
    super(r);
  }
}
class hf extends Ae {
  constructor(o) {
    const r = Ve({ type: "undirected", multi: !0 }, o);
    if ("multi" in r && r.multi !== !0)
      throw new ee(
        "MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!"
      );
    if (r.type !== "undirected")
      throw new ee(
        'MultiUndirectedGraph.from: inconsistent "' + r.type + '" type in given options!'
      );
    super(r);
  }
}
function Nr(u) {
  u.from = function(o, r) {
    const i = Ve({}, o.options, r), a = new u(i);
    return a.import(o), a;
  };
}
Nr(Ae);
Nr(lf);
Nr(cf);
Nr(df);
Nr(ff);
Nr(hf);
Ae.Graph = Ae;
Ae.DirectedGraph = lf;
Ae.UndirectedGraph = cf;
Ae.MultiGraph = df;
Ae.MultiDirectedGraph = ff;
Ae.MultiUndirectedGraph = hf;
Ae.InvalidArgumentsGraphError = ee;
Ae.NotFoundGraphError = Y;
Ae.UsageGraphError = ge;
var Ws, Ed;
function Qg() {
  return Ed || (Ed = 1, Ws = function() {
    var o, r, i = {};
    (function() {
      var l = 0, d = 1, h = 2, p = 3, v = 4, y = 5, m = 6, _ = 7, L = 8, O = 9, G = 0, z = 1, Q = 2, U = 0, j = 1, x = 2, A = 3, P = 4, N = 5, V = 6, re = 7, J = 8, ke = 3, ye = 10, ve = 3, Z = 9, we = 10;
      i.exports = function(ie, S, q) {
        var I, w, E, W, te, de, Se, Ee, X, be, ze = S.length, tr = q.length, pn = ie.adjustSizes, nr = ie.barnesHutTheta * ie.barnesHutTheta, gn, Pe, Re, Te, wt, pe, ce, F = [];
        for (E = 0; E < ze; E += ye)
          S[E + v] = S[E + h], S[E + y] = S[E + p], S[E + h] = 0, S[E + p] = 0;
        if (ie.outboundAttractionDistribution) {
          for (gn = 0, E = 0; E < ze; E += ye)
            gn += S[E + m];
          gn /= ze / ye;
        }
        if (ie.barnesHutOptimize) {
          var At = 1 / 0, Zt = -1 / 0, Bt = 1 / 0, Jt = -1 / 0, at, jt, vn;
          for (E = 0; E < ze; E += ye)
            At = Math.min(At, S[E + l]), Zt = Math.max(Zt, S[E + l]), Bt = Math.min(Bt, S[E + d]), Jt = Math.max(Jt, S[E + d]);
          var On = Zt - At, Ht = Jt - Bt;
          for (On > Ht ? (Bt -= (On - Ht) / 2, Jt = Bt + On) : (At -= (Ht - On) / 2, Zt = At + Ht), F[0 + U] = -1, F[0 + j] = (At + Zt) / 2, F[0 + x] = (Bt + Jt) / 2, F[0 + A] = Math.max(Zt - At, Jt - Bt), F[0 + P] = -1, F[0 + N] = -1, F[0 + V] = 0, F[0 + re] = 0, F[0 + J] = 0, I = 1, E = 0; E < ze; E += ye)
            for (w = 0, vn = ke; ; )
              if (F[w + N] >= 0) {
                S[E + l] < F[w + j] ? S[E + d] < F[w + x] ? at = F[w + N] : at = F[w + N] + Z : S[E + d] < F[w + x] ? at = F[w + N] + Z * 2 : at = F[w + N] + Z * 3, F[w + re] = (F[w + re] * F[w + V] + S[E + l] * S[E + m]) / (F[w + V] + S[E + m]), F[w + J] = (F[w + J] * F[w + V] + S[E + d] * S[E + m]) / (F[w + V] + S[E + m]), F[w + V] += S[E + m], w = at;
                continue;
              } else if (F[w + U] < 0) {
                F[w + U] = E;
                break;
              } else {
                if (F[w + N] = I * Z, Ee = F[w + A] / 2, X = F[w + N], F[X + U] = -1, F[X + j] = F[w + j] - Ee, F[X + x] = F[w + x] - Ee, F[X + A] = Ee, F[X + P] = X + Z, F[X + N] = -1, F[X + V] = 0, F[X + re] = 0, F[X + J] = 0, X += Z, F[X + U] = -1, F[X + j] = F[w + j] - Ee, F[X + x] = F[w + x] + Ee, F[X + A] = Ee, F[X + P] = X + Z, F[X + N] = -1, F[X + V] = 0, F[X + re] = 0, F[X + J] = 0, X += Z, F[X + U] = -1, F[X + j] = F[w + j] + Ee, F[X + x] = F[w + x] - Ee, F[X + A] = Ee, F[X + P] = X + Z, F[X + N] = -1, F[X + V] = 0, F[X + re] = 0, F[X + J] = 0, X += Z, F[X + U] = -1, F[X + j] = F[w + j] + Ee, F[X + x] = F[w + x] + Ee, F[X + A] = Ee, F[X + P] = F[w + P], F[X + N] = -1, F[X + V] = 0, F[X + re] = 0, F[X + J] = 0, I += 4, S[F[w + U] + l] < F[w + j] ? S[F[w + U] + d] < F[w + x] ? at = F[w + N] : at = F[w + N] + Z : S[F[w + U] + d] < F[w + x] ? at = F[w + N] + Z * 2 : at = F[w + N] + Z * 3, F[w + V] = S[F[w + U] + m], F[w + re] = S[F[w + U] + l], F[w + J] = S[F[w + U] + d], F[at + U] = F[w + U], F[w + U] = -1, S[E + l] < F[w + j] ? S[E + d] < F[w + x] ? jt = F[w + N] : jt = F[w + N] + Z : S[E + d] < F[w + x] ? jt = F[w + N] + Z * 2 : jt = F[w + N] + Z * 3, at === jt)
                  if (vn--) {
                    w = at;
                    continue;
                  } else {
                    vn = ke;
                    break;
                  }
                F[jt + U] = E;
                break;
              }
        }
        if (ie.barnesHutOptimize)
          for (Pe = ie.scalingRatio, E = 0; E < ze; E += ye)
            for (w = 0; ; )
              if (F[w + N] >= 0)
                if (pe = Math.pow(
                  S[E + l] - F[w + re],
                  2
                ) + Math.pow(
                  S[E + d] - F[w + J],
                  2
                ), be = F[w + A], 4 * be * be / pe < nr) {
                  if (Re = S[E + l] - F[w + re], Te = S[E + d] - F[w + J], pn === !0 ? pe > 0 ? (ce = Pe * S[E + m] * F[w + V] / pe, S[E + h] += Re * ce, S[E + p] += Te * ce) : pe < 0 && (ce = -Pe * S[E + m] * F[w + V] / Math.sqrt(pe), S[E + h] += Re * ce, S[E + p] += Te * ce) : pe > 0 && (ce = Pe * S[E + m] * F[w + V] / pe, S[E + h] += Re * ce, S[E + p] += Te * ce), w = F[w + P], w < 0) break;
                  continue;
                } else {
                  w = F[w + N];
                  continue;
                }
              else {
                if (de = F[w + U], de >= 0 && de !== E && (Re = S[E + l] - S[de + l], Te = S[E + d] - S[de + d], pe = Re * Re + Te * Te, pn === !0 ? pe > 0 ? (ce = Pe * S[E + m] * S[de + m] / pe, S[E + h] += Re * ce, S[E + p] += Te * ce) : pe < 0 && (ce = -Pe * S[E + m] * S[de + m] / Math.sqrt(pe), S[E + h] += Re * ce, S[E + p] += Te * ce) : pe > 0 && (ce = Pe * S[E + m] * S[de + m] / pe, S[E + h] += Re * ce, S[E + p] += Te * ce)), w = F[w + P], w < 0) break;
                continue;
              }
        else
          for (Pe = ie.scalingRatio, W = 0; W < ze; W += ye)
            for (te = 0; te < W; te += ye)
              Re = S[W + l] - S[te + l], Te = S[W + d] - S[te + d], pn === !0 ? (pe = Math.sqrt(Re * Re + Te * Te) - S[W + L] - S[te + L], pe > 0 ? (ce = Pe * S[W + m] * S[te + m] / pe / pe, S[W + h] += Re * ce, S[W + p] += Te * ce, S[te + h] -= Re * ce, S[te + p] -= Te * ce) : pe < 0 && (ce = 100 * Pe * S[W + m] * S[te + m], S[W + h] += Re * ce, S[W + p] += Te * ce, S[te + h] -= Re * ce, S[te + p] -= Te * ce)) : (pe = Math.sqrt(Re * Re + Te * Te), pe > 0 && (ce = Pe * S[W + m] * S[te + m] / pe / pe, S[W + h] += Re * ce, S[W + p] += Te * ce, S[te + h] -= Re * ce, S[te + p] -= Te * ce));
        for (X = ie.gravity / ie.scalingRatio, Pe = ie.scalingRatio, E = 0; E < ze; E += ye)
          ce = 0, Re = S[E + l], Te = S[E + d], pe = Math.sqrt(Math.pow(Re, 2) + Math.pow(Te, 2)), ie.strongGravityMode ? pe > 0 && (ce = Pe * S[E + m] * X) : pe > 0 && (ce = Pe * S[E + m] * X / pe), S[E + h] -= Re * ce, S[E + p] -= Te * ce;
        for (Pe = 1 * (ie.outboundAttractionDistribution ? gn : 1), Se = 0; Se < tr; Se += ve)
          W = q[Se + G], te = q[Se + z], Ee = q[Se + Q], wt = Math.pow(Ee, ie.edgeWeightInfluence), Re = S[W + l] - S[te + l], Te = S[W + d] - S[te + d], pn === !0 ? (pe = Math.sqrt(Re * Re + Te * Te) - S[W + L] - S[te + L], ie.linLogMode ? ie.outboundAttractionDistribution ? pe > 0 && (ce = -Pe * wt * Math.log(1 + pe) / pe / S[W + m]) : pe > 0 && (ce = -Pe * wt * Math.log(1 + pe) / pe) : ie.outboundAttractionDistribution ? pe > 0 && (ce = -Pe * wt / S[W + m]) : pe > 0 && (ce = -Pe * wt)) : (pe = Math.sqrt(Math.pow(Re, 2) + Math.pow(Te, 2)), ie.linLogMode ? ie.outboundAttractionDistribution ? pe > 0 && (ce = -Pe * wt * Math.log(1 + pe) / pe / S[W + m]) : pe > 0 && (ce = -Pe * wt * Math.log(1 + pe) / pe) : ie.outboundAttractionDistribution ? (pe = 1, ce = -Pe * wt / S[W + m]) : (pe = 1, ce = -Pe * wt)), pe > 0 && (S[W + h] += Re * ce, S[W + p] += Te * ce, S[te + h] -= Re * ce, S[te + p] -= Te * ce);
        var Wt, Un, $n, Vt, rr, mn;
        if (pn === !0)
          for (E = 0; E < ze; E += ye)
            S[E + O] !== 1 && (Wt = Math.sqrt(
              Math.pow(S[E + h], 2) + Math.pow(S[E + p], 2)
            ), Wt > we && (S[E + h] = S[E + h] * we / Wt, S[E + p] = S[E + p] * we / Wt), Un = S[E + m] * Math.sqrt(
              (S[E + v] - S[E + h]) * (S[E + v] - S[E + h]) + (S[E + y] - S[E + p]) * (S[E + y] - S[E + p])
            ), $n = Math.sqrt(
              (S[E + v] + S[E + h]) * (S[E + v] + S[E + h]) + (S[E + y] + S[E + p]) * (S[E + y] + S[E + p])
            ) / 2, Vt = 0.1 * Math.log(1 + $n) / (1 + Math.sqrt(Un)), rr = S[E + l] + S[E + h] * (Vt / ie.slowDown), S[E + l] = rr, mn = S[E + d] + S[E + p] * (Vt / ie.slowDown), S[E + d] = mn);
        else
          for (E = 0; E < ze; E += ye)
            S[E + O] !== 1 && (Un = S[E + m] * Math.sqrt(
              (S[E + v] - S[E + h]) * (S[E + v] - S[E + h]) + (S[E + y] - S[E + p]) * (S[E + y] - S[E + p])
            ), $n = Math.sqrt(
              (S[E + v] + S[E + h]) * (S[E + v] + S[E + h]) + (S[E + y] + S[E + p]) * (S[E + y] + S[E + p])
            ) / 2, Vt = S[E + _] * Math.log(1 + $n) / (1 + Math.sqrt(Un)), S[E + _] = Math.min(
              1,
              Math.sqrt(
                Vt * (Math.pow(S[E + h], 2) + Math.pow(S[E + p], 2)) / (1 + Math.sqrt(Un))
              )
            ), rr = S[E + l] + S[E + h] * (Vt / ie.slowDown), S[E + l] = rr, mn = S[E + d] + S[E + p] * (Vt / ie.slowDown), S[E + d] = mn);
        return {};
      };
    })();
    var a = i.exports;
    self.addEventListener("message", function(l) {
      var d = l.data;
      o = new Float32Array(d.nodes), d.edges && (r = new Float32Array(d.edges)), a(d.settings, o, r), self.postMessage(
        {
          nodes: o.buffer
        },
        [o.buffer]
      );
    });
  }), Ws;
}
var Vs, Sd;
function pf() {
  return Sd || (Sd = 1, Vs = function(o) {
    return o !== null && typeof o == "object" && typeof o.addUndirectedEdgeWithKey == "function" && typeof o.dropNode == "function" && typeof o.multi == "boolean";
  }), Vs;
}
var wi = {}, kd;
function Xg() {
  if (kd) return wi;
  kd = 1;
  function u(i) {
    return typeof i != "number" || isNaN(i) ? 1 : i;
  }
  function o(i, a) {
    var l = {}, d = function(v) {
      return typeof v > "u" ? a : v;
    };
    typeof a == "function" && (d = a);
    var h = function(v) {
      return d(v[i]);
    }, p = function() {
      return d(void 0);
    };
    return typeof i == "string" ? (l.fromAttributes = h, l.fromGraph = function(v, y) {
      return h(v.getNodeAttributes(y));
    }, l.fromEntry = function(v, y) {
      return h(y);
    }) : typeof i == "function" ? (l.fromAttributes = function() {
      throw new Error(
        "graphology-utils/getters/createNodeValueGetter: irrelevant usage."
      );
    }, l.fromGraph = function(v, y) {
      return d(
        i(y, v.getNodeAttributes(y))
      );
    }, l.fromEntry = function(v, y) {
      return d(i(v, y));
    }) : (l.fromAttributes = p, l.fromGraph = p, l.fromEntry = p), l;
  }
  function r(i, a) {
    var l = {}, d = function(v) {
      return typeof v > "u" ? a : v;
    };
    typeof a == "function" && (d = a);
    var h = function(v) {
      return d(v[i]);
    }, p = function() {
      return d(void 0);
    };
    return typeof i == "string" ? (l.fromAttributes = h, l.fromGraph = function(v, y) {
      return h(v.getEdgeAttributes(y));
    }, l.fromEntry = function(v, y) {
      return h(y);
    }, l.fromPartialEntry = l.fromEntry, l.fromMinimalEntry = l.fromEntry) : typeof i == "function" ? (l.fromAttributes = function() {
      throw new Error(
        "graphology-utils/getters/createEdgeValueGetter: irrelevant usage."
      );
    }, l.fromGraph = function(v, y) {
      var m = v.extremities(y);
      return d(
        i(
          y,
          v.getEdgeAttributes(y),
          m[0],
          m[1],
          v.getNodeAttributes(m[0]),
          v.getNodeAttributes(m[1]),
          v.isUndirected(y)
        )
      );
    }, l.fromEntry = function(v, y, m, _, L, O, G) {
      return d(i(v, y, m, _, L, O, G));
    }, l.fromPartialEntry = function(v, y, m, _) {
      return d(i(v, y, m, _));
    }, l.fromMinimalEntry = function(v, y) {
      return d(i(v, y));
    }) : (l.fromAttributes = p, l.fromGraph = p, l.fromEntry = p, l.fromMinimalEntry = p), l;
  }
  return wi.createNodeValueGetter = o, wi.createEdgeValueGetter = r, wi.createEdgeWeightGetter = function(i) {
    return r(i, u);
  }, wi;
}
var ln = {}, _d;
function qg() {
  if (_d) return ln;
  _d = 1;
  var u = 10, o = 3;
  return ln.assign = function(r) {
    r = r || {};
    var i = Array.prototype.slice.call(arguments).slice(1), a, l, d;
    for (a = 0, d = i.length; a < d; a++)
      if (i[a])
        for (l in i[a]) r[l] = i[a][l];
    return r;
  }, ln.validateSettings = function(r) {
    return "linLogMode" in r && typeof r.linLogMode != "boolean" ? { message: "the `linLogMode` setting should be a boolean." } : "outboundAttractionDistribution" in r && typeof r.outboundAttractionDistribution != "boolean" ? {
      message: "the `outboundAttractionDistribution` setting should be a boolean."
    } : "adjustSizes" in r && typeof r.adjustSizes != "boolean" ? { message: "the `adjustSizes` setting should be a boolean." } : "edgeWeightInfluence" in r && typeof r.edgeWeightInfluence != "number" ? {
      message: "the `edgeWeightInfluence` setting should be a number."
    } : "scalingRatio" in r && !(typeof r.scalingRatio == "number" && r.scalingRatio >= 0) ? { message: "the `scalingRatio` setting should be a number >= 0." } : "strongGravityMode" in r && typeof r.strongGravityMode != "boolean" ? { message: "the `strongGravityMode` setting should be a boolean." } : "gravity" in r && !(typeof r.gravity == "number" && r.gravity >= 0) ? { message: "the `gravity` setting should be a number >= 0." } : "slowDown" in r && !(typeof r.slowDown == "number" || r.slowDown >= 0) ? { message: "the `slowDown` setting should be a number >= 0." } : "barnesHutOptimize" in r && typeof r.barnesHutOptimize != "boolean" ? { message: "the `barnesHutOptimize` setting should be a boolean." } : "barnesHutTheta" in r && !(typeof r.barnesHutTheta == "number" && r.barnesHutTheta >= 0) ? { message: "the `barnesHutTheta` setting should be a number >= 0." } : null;
  }, ln.graphToByteArrays = function(r, i) {
    var a = r.order, l = r.size, d = {}, h, p = new Float32Array(a * u), v = new Float32Array(l * o);
    return h = 0, r.forEachNode(function(y, m) {
      d[y] = h, p[h] = m.x, p[h + 1] = m.y, p[h + 2] = 0, p[h + 3] = 0, p[h + 4] = 0, p[h + 5] = 0, p[h + 6] = 1, p[h + 7] = 1, p[h + 8] = m.size || 1, p[h + 9] = m.fixed ? 1 : 0, h += u;
    }), h = 0, r.forEachEdge(function(y, m, _, L, O, G, z) {
      var Q = d[_], U = d[L], j = i(y, m, _, L, O, G, z);
      p[Q + 6] += j, p[U + 6] += j, v[h] = Q, v[h + 1] = U, v[h + 2] = j, h += o;
    }), {
      nodes: p,
      edges: v
    };
  }, ln.assignLayoutChanges = function(r, i, a) {
    var l = 0;
    r.updateEachNodeAttributes(function(d, h) {
      return h.x = i[l], h.y = i[l + 1], l += u, a ? a(d, h) : h;
    });
  }, ln.readGraphPositions = function(r, i) {
    var a = 0;
    r.forEachNode(function(l, d) {
      i[a] = d.x, i[a + 1] = d.y, a += u;
    });
  }, ln.collectLayoutChanges = function(r, i, a) {
    for (var l = r.nodes(), d = {}, h = 0, p = 0, v = i.length; h < v; h += u) {
      if (a) {
        var y = Object.assign({}, r.getNodeAttributes(l[p]));
        y.x = i[h], y.y = i[h + 1], y = a(l[p], y), d[l[p]] = {
          x: y.x,
          y: y.y
        };
      } else
        d[l[p]] = {
          x: i[h],
          y: i[h + 1]
        };
      p++;
    }
    return d;
  }, ln.createWorker = function(i) {
    var a = window.URL || window.webkitURL, l = i.toString(), d = a.createObjectURL(
      new Blob(["(" + l + ").call(this);"], { type: "text/javascript" })
    ), h = new Worker(d);
    return a.revokeObjectURL(d), h;
  }, ln;
}
var Ks, Cd;
function Zg() {
  return Cd || (Cd = 1, Ks = {
    linLogMode: !1,
    outboundAttractionDistribution: !1,
    adjustSizes: !1,
    edgeWeightInfluence: 1,
    scalingRatio: 1,
    strongGravityMode: !1,
    gravity: 1,
    slowDown: 1,
    barnesHutOptimize: !1,
    barnesHutTheta: 0.5
  }), Ks;
}
var Ys, Td;
function Jg() {
  if (Td) return Ys;
  Td = 1;
  var u = Qg(), o = pf(), r = Xg().createEdgeWeightGetter, i = qg(), a = Zg();
  function l(d, h) {
    if (h = h || {}, !o(d))
      throw new Error(
        "graphology-layout-forceatlas2/worker: the given graph is not a valid graphology instance."
      );
    var p = r(
      "getEdgeWeight" in h ? h.getEdgeWeight : "weight"
    ).fromEntry, v = i.assign({}, a, h.settings), y = i.validateSettings(v);
    if (y)
      throw new Error(
        "graphology-layout-forceatlas2/worker: " + y.message
      );
    this.worker = null, this.graph = d, this.settings = v, this.getEdgeWeight = p, this.matrices = null, this.running = !1, this.killed = !1, this.outputReducer = typeof h.outputReducer == "function" ? h.outputReducer : null, this.handleMessage = this.handleMessage.bind(this);
    var m = void 0, _ = this;
    this.handleGraphUpdate = function() {
      _.worker && _.worker.terminate(), m && clearTimeout(m), m = setTimeout(function() {
        m = void 0, _.spawnWorker();
      }, 0);
    }, d.on("nodeAdded", this.handleGraphUpdate), d.on("edgeAdded", this.handleGraphUpdate), d.on("nodeDropped", this.handleGraphUpdate), d.on("edgeDropped", this.handleGraphUpdate), this.spawnWorker();
  }
  return l.prototype.isRunning = function() {
    return this.running;
  }, l.prototype.spawnWorker = function() {
    this.worker && this.worker.terminate(), this.worker = i.createWorker(u), this.worker.addEventListener("message", this.handleMessage), this.running && (this.running = !1, this.start());
  }, l.prototype.handleMessage = function(d) {
    if (this.running) {
      var h = new Float32Array(d.data.nodes);
      i.assignLayoutChanges(this.graph, h, this.outputReducer), this.outputReducer && i.readGraphPositions(this.graph, h), this.matrices.nodes = h, this.askForIterations();
    }
  }, l.prototype.askForIterations = function(d) {
    var h = this.matrices, p = {
      settings: this.settings,
      nodes: h.nodes.buffer
    }, v = [h.nodes.buffer];
    return d && (p.edges = h.edges.buffer, v.push(h.edges.buffer)), this.worker.postMessage(p, v), this;
  }, l.prototype.start = function() {
    if (this.killed)
      throw new Error(
        "graphology-layout-forceatlas2/worker.start: layout was killed."
      );
    return this.running ? this : (this.matrices = i.graphToByteArrays(this.graph, this.getEdgeWeight), this.running = !0, this.askForIterations(!0), this);
  }, l.prototype.stop = function() {
    return this.running = !1, this;
  }, l.prototype.kill = function() {
    if (this.killed) return this;
    this.running = !1, this.killed = !0, this.matrices = null, this.worker.terminate(), this.graph.removeListener("nodeAdded", this.handleGraphUpdate), this.graph.removeListener("edgeAdded", this.handleGraphUpdate), this.graph.removeListener("nodeDropped", this.handleGraphUpdate), this.graph.removeListener("edgeDropped", this.handleGraphUpdate);
  }, Ys = l, Ys;
}
var ev = Jg();
const tv = /* @__PURE__ */ Ti(ev);
function nv(u, o) {
  if (typeof u != "object" || !u) return u;
  var r = u[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(u, o);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(u);
}
function Ci(u) {
  var o = nv(u, "string");
  return typeof o == "symbol" ? o : o + "";
}
function it(u, o) {
  if (!(u instanceof o)) throw new TypeError("Cannot call a class as a function");
}
function Rd(u, o) {
  for (var r = 0; r < o.length; r++) {
    var i = o[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(u, Ci(i.key), i);
  }
}
function ot(u, o, r) {
  return o && Rd(u.prototype, o), r && Rd(u, r), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function Dr(u) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Dr(u);
}
function gf() {
  try {
    var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gf = function() {
    return !!u;
  })();
}
function rv(u) {
  if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function iv(u, o) {
  if (o && (typeof o == "object" || typeof o == "function")) return o;
  if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rv(u);
}
function bt(u, o, r) {
  return o = Dr(o), iv(u, gf() ? Reflect.construct(o, r || [], Dr(u).constructor) : o.apply(u, r));
}
function ou(u, o) {
  return ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ou(u, o);
}
function Dt(u, o) {
  if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
  u.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: u,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(u, "prototype", {
    writable: !1
  }), o && ou(u, o);
}
function ov(u) {
  if (Array.isArray(u)) return u;
}
function av(u, o) {
  var r = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (r != null) {
    var i, a, l, d, h = [], p = !0, v = !1;
    try {
      if (l = (r = r.call(u)).next, o === 0) {
        if (Object(r) !== r) return;
        p = !1;
      } else for (; !(p = (i = l.call(r)).done) && (h.push(i.value), h.length !== o); p = !0) ;
    } catch (y) {
      v = !0, a = y;
    } finally {
      try {
        if (!p && r.return != null && (d = r.return(), Object(d) !== d)) return;
      } finally {
        if (v) throw a;
      }
    }
    return h;
  }
}
function au(u, o) {
  (o == null || o > u.length) && (o = u.length);
  for (var r = 0, i = Array(o); r < o; r++) i[r] = u[r];
  return i;
}
function vf(u, o) {
  if (u) {
    if (typeof u == "string") return au(u, o);
    var r = {}.toString.call(u).slice(8, -1);
    return r === "Object" && u.constructor && (r = u.constructor.name), r === "Map" || r === "Set" ? Array.from(u) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? au(u, o) : void 0;
  }
}
function sv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ar(u, o) {
  return ov(u) || av(u, o) || vf(u, o) || sv();
}
var Qs = {
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  white: "#FFFFFF",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  darkgreen: "#006400",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  springgreen: "#00FF7F",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  rebeccapurple: "#663399",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  dimgrey: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  slategrey: "#708090",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370DB",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  palevioletred: "#DB7093",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0"
}, mf = new Int8Array(4), Xs = new Int32Array(mf.buffer, 0, 1), uv = new Float32Array(mf.buffer, 0, 1), lv = /^\s*rgba?\s*\(/, cv = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function dv(u) {
  var o = 0, r = 0, i = 0, a = 1;
  if (u[0] === "#")
    u.length === 4 ? (o = parseInt(u.charAt(1) + u.charAt(1), 16), r = parseInt(u.charAt(2) + u.charAt(2), 16), i = parseInt(u.charAt(3) + u.charAt(3), 16)) : (o = parseInt(u.charAt(1) + u.charAt(2), 16), r = parseInt(u.charAt(3) + u.charAt(4), 16), i = parseInt(u.charAt(5) + u.charAt(6), 16)), u.length === 9 && (a = parseInt(u.charAt(7) + u.charAt(8), 16) / 255);
  else if (lv.test(u)) {
    var l = u.match(cv);
    l && (o = +l[1], r = +l[2], i = +l[3], l[4] && (a = +l[4]));
  }
  return {
    r: o,
    g: r,
    b: i,
    a
  };
}
var br = {};
for (var Uo in Qs)
  br[Uo] = Ri(Qs[Uo]), br[Qs[Uo]] = br[Uo];
function yf(u, o, r, i, a) {
  return Xs[0] = i << 24 | r << 16 | o << 8 | u, Xs[0] = Xs[0] & 4278190079, uv[0];
}
function Ri(u) {
  if (u = u.toLowerCase(), typeof br[u] < "u") return br[u];
  var o = dv(u), r = o.r, i = o.g, a = o.b, l = o.a;
  l = l * 255 | 0;
  var d = yf(r, i, a, l);
  return br[u] = d, d;
}
var qs = {};
function wf(u) {
  if (typeof qs[u] < "u") return qs[u];
  var o = (u & 16711680) >>> 16, r = (u & 65280) >>> 8, i = u & 255, a = 255, l = yf(o, r, i, a);
  return qs[u] = l, l;
}
function xd(u, o, r, i) {
  return r + (o << 8) + (u << 16);
}
function Ld(u, o, r, i, a, l) {
  var d = Math.floor(r / l * a), h = Math.floor(u.drawingBufferHeight / l - i / l * a), p = new Uint8Array(4);
  u.bindFramebuffer(u.FRAMEBUFFER, o), u.readPixels(d, h, 1, 1, u.RGBA, u.UNSIGNED_BYTE, p);
  var v = Ar(p, 4), y = v[0], m = v[1], _ = v[2], L = v[3];
  return [y, m, _, L];
}
function M(u, o, r) {
  return (o = Ci(o)) in u ? Object.defineProperty(u, o, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[o] = r, u;
}
function bd(u, o) {
  var r = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(u);
    o && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(u, a).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function ue(u) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? bd(Object(r), !0).forEach(function(i) {
      M(u, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(r)) : bd(Object(r)).forEach(function(i) {
      Object.defineProperty(u, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return u;
}
function fv(u, o) {
  for (; !{}.hasOwnProperty.call(u, o) && (u = Dr(u)) !== null; ) ;
  return u;
}
function su() {
  return su = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(u, o, r) {
    var i = fv(u, o);
    if (i) {
      var a = Object.getOwnPropertyDescriptor(i, o);
      return a.get ? a.get.call(arguments.length < 3 ? u : r) : a.value;
    }
  }, su.apply(null, arguments);
}
function Ef(u, o, r, i) {
  var a = su(Dr(u.prototype), o, r);
  return typeof a == "function" ? function(l) {
    return a.apply(r, l);
  } : a;
}
function hv(u) {
  return u.normalized ? 1 : u.size;
}
function Zs(u) {
  var o = 0;
  return u.forEach(function(r) {
    return o += hv(r);
  }), o;
}
function Sf(u, o, r) {
  var i = u === "VERTEX" ? o.VERTEX_SHADER : o.FRAGMENT_SHADER, a = o.createShader(i);
  if (a === null)
    throw new Error("loadShader: error while creating the shader");
  o.shaderSource(a, r), o.compileShader(a);
  var l = o.getShaderParameter(a, o.COMPILE_STATUS);
  if (!l) {
    var d = o.getShaderInfoLog(a);
    throw o.deleteShader(a), new Error(`loadShader: error while compiling the shader:
`.concat(d, `
`).concat(r));
  }
  return a;
}
function pv(u, o) {
  return Sf("VERTEX", u, o);
}
function gv(u, o) {
  return Sf("FRAGMENT", u, o);
}
function vv(u, o) {
  var r = u.createProgram();
  if (r === null)
    throw new Error("loadProgram: error while creating the program.");
  var i, a;
  for (i = 0, a = o.length; i < a; i++) u.attachShader(r, o[i]);
  u.linkProgram(r);
  var l = u.getProgramParameter(r, u.LINK_STATUS);
  if (!l) {
    var d = u.getProgramInfoLog(r);
    throw u.deleteProgram(r), new Error("loadProgram: error while linking the program: ".concat(d));
  }
  return r;
}
function Dd(u) {
  var o = u.gl, r = u.buffer, i = u.program, a = u.vertexShader, l = u.fragmentShader;
  o.deleteShader(a), o.deleteShader(l), o.deleteProgram(i), o.deleteBuffer(r);
}
var Ad = `#define PICKING_MODE
`, mv = M(M(M(M(M(M(M(M({}, WebGL2RenderingContext.BOOL, 1), WebGL2RenderingContext.BYTE, 1), WebGL2RenderingContext.UNSIGNED_BYTE, 1), WebGL2RenderingContext.SHORT, 2), WebGL2RenderingContext.UNSIGNED_SHORT, 2), WebGL2RenderingContext.INT, 4), WebGL2RenderingContext.UNSIGNED_INT, 4), WebGL2RenderingContext.FLOAT, 4), kf = /* @__PURE__ */ (function() {
  function u(o, r, i) {
    it(this, u), M(this, "array", new Float32Array()), M(this, "constantArray", new Float32Array()), M(this, "capacity", 0), M(this, "verticesCount", 0);
    var a = this.getDefinition();
    if (this.VERTICES = a.VERTICES, this.VERTEX_SHADER_SOURCE = a.VERTEX_SHADER_SOURCE, this.FRAGMENT_SHADER_SOURCE = a.FRAGMENT_SHADER_SOURCE, this.UNIFORMS = a.UNIFORMS, this.ATTRIBUTES = a.ATTRIBUTES, this.METHOD = a.METHOD, this.CONSTANT_ATTRIBUTES = "CONSTANT_ATTRIBUTES" in a ? a.CONSTANT_ATTRIBUTES : [], this.CONSTANT_DATA = "CONSTANT_DATA" in a ? a.CONSTANT_DATA : [], this.isInstanced = "CONSTANT_ATTRIBUTES" in a, this.ATTRIBUTES_ITEMS_COUNT = Zs(this.ATTRIBUTES), this.STRIDE = this.VERTICES * this.ATTRIBUTES_ITEMS_COUNT, this.renderer = i, this.normalProgram = this.getProgramInfo("normal", o, a.VERTEX_SHADER_SOURCE, a.FRAGMENT_SHADER_SOURCE, null), this.pickProgram = r ? this.getProgramInfo("pick", o, Ad + a.VERTEX_SHADER_SOURCE, Ad + a.FRAGMENT_SHADER_SOURCE, r) : null, this.isInstanced) {
      var l = Zs(this.CONSTANT_ATTRIBUTES);
      if (this.CONSTANT_DATA.length !== this.VERTICES) throw new Error("Program: error while getting constant data (expected ".concat(this.VERTICES, " items, received ").concat(this.CONSTANT_DATA.length, " instead)"));
      this.constantArray = new Float32Array(this.CONSTANT_DATA.length * l);
      for (var d = 0; d < this.CONSTANT_DATA.length; d++) {
        var h = this.CONSTANT_DATA[d];
        if (h.length !== l) throw new Error("Program: error while getting constant data (one vector has ".concat(h.length, " items instead of ").concat(l, ")"));
        for (var p = 0; p < h.length; p++) this.constantArray[d * l + p] = h[p];
      }
      this.STRIDE = this.ATTRIBUTES_ITEMS_COUNT;
    }
  }
  return ot(u, [{
    key: "kill",
    value: function() {
      Dd(this.normalProgram), this.pickProgram && (Dd(this.pickProgram), this.pickProgram = null);
    }
  }, {
    key: "getProgramInfo",
    value: function(r, i, a, l, d) {
      var h = this.getDefinition(), p = i.createBuffer();
      if (p === null) throw new Error("Program: error while creating the WebGL buffer.");
      var v = pv(i, a), y = gv(i, l), m = vv(i, [v, y]), _ = {};
      h.UNIFORMS.forEach(function(G) {
        var z = i.getUniformLocation(m, G);
        z && (_[G] = z);
      });
      var L = {};
      h.ATTRIBUTES.forEach(function(G) {
        L[G.name] = i.getAttribLocation(m, G.name);
      });
      var O;
      if ("CONSTANT_ATTRIBUTES" in h && (h.CONSTANT_ATTRIBUTES.forEach(function(G) {
        L[G.name] = i.getAttribLocation(m, G.name);
      }), O = i.createBuffer(), O === null))
        throw new Error("Program: error while creating the WebGL constant buffer.");
      return {
        name: r,
        program: m,
        gl: i,
        frameBuffer: d,
        buffer: p,
        constantBuffer: O || {},
        uniformLocations: _,
        attributeLocations: L,
        isPicking: r === "pick",
        vertexShader: v,
        fragmentShader: y
      };
    }
  }, {
    key: "bindProgram",
    value: function(r) {
      var i = this, a = 0, l = r.gl, d = r.buffer;
      this.isInstanced ? (l.bindBuffer(l.ARRAY_BUFFER, r.constantBuffer), a = 0, this.CONSTANT_ATTRIBUTES.forEach(function(h) {
        return a += i.bindAttribute(h, r, a, !1);
      }), l.bufferData(l.ARRAY_BUFFER, this.constantArray, l.STATIC_DRAW), l.bindBuffer(l.ARRAY_BUFFER, r.buffer), a = 0, this.ATTRIBUTES.forEach(function(h) {
        return a += i.bindAttribute(h, r, a, !0);
      }), l.bufferData(l.ARRAY_BUFFER, this.array, l.DYNAMIC_DRAW)) : (l.bindBuffer(l.ARRAY_BUFFER, d), a = 0, this.ATTRIBUTES.forEach(function(h) {
        return a += i.bindAttribute(h, r, a);
      }), l.bufferData(l.ARRAY_BUFFER, this.array, l.DYNAMIC_DRAW)), l.bindBuffer(l.ARRAY_BUFFER, null);
    }
  }, {
    key: "unbindProgram",
    value: function(r) {
      var i = this;
      this.isInstanced ? (this.CONSTANT_ATTRIBUTES.forEach(function(a) {
        return i.unbindAttribute(a, r, !1);
      }), this.ATTRIBUTES.forEach(function(a) {
        return i.unbindAttribute(a, r, !0);
      })) : this.ATTRIBUTES.forEach(function(a) {
        return i.unbindAttribute(a, r);
      });
    }
  }, {
    key: "bindAttribute",
    value: function(r, i, a, l) {
      var d = mv[r.type];
      if (typeof d != "number") throw new Error('Program.bind: yet unsupported attribute type "'.concat(r.type, '"'));
      var h = i.attributeLocations[r.name], p = i.gl;
      if (h !== -1) {
        p.enableVertexAttribArray(h);
        var v = this.isInstanced ? (l ? this.ATTRIBUTES_ITEMS_COUNT : Zs(this.CONSTANT_ATTRIBUTES)) * Float32Array.BYTES_PER_ELEMENT : this.ATTRIBUTES_ITEMS_COUNT * Float32Array.BYTES_PER_ELEMENT;
        if (p.vertexAttribPointer(h, r.size, r.type, r.normalized || !1, v, a), this.isInstanced && l)
          if (p instanceof WebGL2RenderingContext)
            p.vertexAttribDivisor(h, 1);
          else {
            var y = p.getExtension("ANGLE_instanced_arrays");
            y && y.vertexAttribDivisorANGLE(h, 1);
          }
      }
      return r.size * d;
    }
  }, {
    key: "unbindAttribute",
    value: function(r, i, a) {
      var l = i.attributeLocations[r.name], d = i.gl;
      if (l !== -1 && (d.disableVertexAttribArray(l), this.isInstanced && a))
        if (d instanceof WebGL2RenderingContext)
          d.vertexAttribDivisor(l, 0);
        else {
          var h = d.getExtension("ANGLE_instanced_arrays");
          h && h.vertexAttribDivisorANGLE(l, 0);
        }
    }
  }, {
    key: "reallocate",
    value: function(r) {
      r !== this.capacity && (this.capacity = r, this.verticesCount = this.VERTICES * r, this.array = new Float32Array(this.isInstanced ? this.capacity * this.ATTRIBUTES_ITEMS_COUNT : this.verticesCount * this.ATTRIBUTES_ITEMS_COUNT));
    }
  }, {
    key: "hasNothingToRender",
    value: function() {
      return this.verticesCount === 0;
    }
  }, {
    key: "renderProgram",
    value: function(r, i) {
      var a = i.gl, l = i.program;
      a.enable(a.BLEND), a.useProgram(l), this.setUniforms(r, i), this.drawWebGL(this.METHOD, i);
    }
  }, {
    key: "render",
    value: function(r) {
      this.hasNothingToRender() || (this.pickProgram && (this.pickProgram.gl.viewport(0, 0, r.width * r.pixelRatio / r.downSizingRatio, r.height * r.pixelRatio / r.downSizingRatio), this.bindProgram(this.pickProgram), this.renderProgram(ue(ue({}, r), {}, {
        pixelRatio: r.pixelRatio / r.downSizingRatio
      }), this.pickProgram), this.unbindProgram(this.pickProgram)), this.normalProgram.gl.viewport(0, 0, r.width * r.pixelRatio, r.height * r.pixelRatio), this.bindProgram(this.normalProgram), this.renderProgram(r, this.normalProgram), this.unbindProgram(this.normalProgram));
    }
  }, {
    key: "drawWebGL",
    value: function(r, i) {
      var a = i.gl, l = i.frameBuffer;
      if (a.bindFramebuffer(a.FRAMEBUFFER, l), !this.isInstanced)
        a.drawArrays(r, 0, this.verticesCount);
      else if (a instanceof WebGL2RenderingContext)
        a.drawArraysInstanced(r, 0, this.VERTICES, this.capacity);
      else {
        var d = a.getExtension("ANGLE_instanced_arrays");
        d && d.drawArraysInstancedANGLE(r, 0, this.VERTICES, this.capacity);
      }
    }
  }]);
})(), yv = /* @__PURE__ */ (function(u) {
  function o() {
    return it(this, o), bt(this, o, arguments);
  }
  return Dt(o, u), ot(o, [{
    key: "kill",
    value: function() {
      Ef(o, "kill", this)([]);
    }
  }, {
    key: "process",
    value: function(i, a, l) {
      var d = a * this.STRIDE;
      if (l.hidden) {
        for (var h = d + this.STRIDE; d < h; d++)
          this.array[d] = 0;
        return;
      }
      return this.processVisibleItem(wf(i), d, l);
    }
  }]);
})(kf), vu = /* @__PURE__ */ (function(u) {
  function o() {
    var r;
    it(this, o);
    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    return r = bt(this, o, [].concat(a)), M(r, "drawLabel", void 0), r;
  }
  return Dt(o, u), ot(o, [{
    key: "kill",
    value: function() {
      Ef(o, "kill", this)([]);
    }
  }, {
    key: "process",
    value: function(i, a, l, d, h) {
      var p = a * this.STRIDE;
      if (h.hidden || l.hidden || d.hidden) {
        for (var v = p + this.STRIDE; p < v; p++)
          this.array[p] = 0;
        return;
      }
      return this.processVisibleItem(wf(i), p, l, d, h);
    }
  }]);
})(kf);
function wv(u, o) {
  return /* @__PURE__ */ (function() {
    function r(i, a, l) {
      it(this, r), M(this, "drawLabel", o), this.programs = u.map(function(d) {
        return new d(i, a, l);
      });
    }
    return ot(r, [{
      key: "reallocate",
      value: function(a) {
        this.programs.forEach(function(l) {
          return l.reallocate(a);
        });
      }
    }, {
      key: "process",
      value: function(a, l, d, h, p) {
        this.programs.forEach(function(v) {
          return v.process(a, l, d, h, p);
        });
      }
    }, {
      key: "render",
      value: function(a) {
        this.programs.forEach(function(l) {
          return l.render(a);
        });
      }
    }, {
      key: "kill",
      value: function() {
        this.programs.forEach(function(a) {
          return a.kill();
        });
      }
    }]);
  })();
}
function Ev(u, o, r, i, a) {
  var l = a.edgeLabelSize, d = a.edgeLabelFont, h = a.edgeLabelWeight, p = a.edgeLabelColor.attribute ? o[a.edgeLabelColor.attribute] || a.edgeLabelColor.color || "#000" : a.edgeLabelColor.color, v = o.label;
  if (v) {
    u.fillStyle = p, u.font = "".concat(h, " ").concat(l, "px ").concat(d);
    var y = r.size, m = i.size, _ = r.x, L = r.y, O = i.x, G = i.y, z = (_ + O) / 2, Q = (L + G) / 2, U = O - _, j = G - L, x = Math.sqrt(U * U + j * j);
    if (!(x < y + m)) {
      _ += U * y / x, L += j * y / x, O -= U * m / x, G -= j * m / x, z = (_ + O) / 2, Q = (L + G) / 2, U = O - _, j = G - L, x = Math.sqrt(U * U + j * j);
      var A = u.measureText(v).width;
      if (A > x) {
        var P = "…";
        for (v = v + P, A = u.measureText(v).width; A > x && v.length > 1; )
          v = v.slice(0, -2) + P, A = u.measureText(v).width;
        if (v.length < 4) return;
      }
      var N;
      U > 0 ? j > 0 ? N = Math.acos(U / x) : N = Math.asin(j / x) : j > 0 ? N = Math.acos(U / x) + Math.PI : N = Math.asin(U / x) + Math.PI / 2, u.save(), u.translate(z, Q), u.rotate(N), u.fillText(v, -A / 2, o.size / 2 + l), u.restore();
    }
  }
}
function _f(u, o, r) {
  if (o.label) {
    var i = r.labelSize, a = r.labelFont, l = r.labelWeight, d = r.labelColor.attribute ? o[r.labelColor.attribute] || r.labelColor.color || "#000" : r.labelColor.color;
    u.fillStyle = d, u.font = "".concat(l, " ").concat(i, "px ").concat(a), u.fillText(o.label, o.x + o.size + 3, o.y + i / 3);
  }
}
function Sv(u, o, r) {
  var i = r.labelSize, a = r.labelFont, l = r.labelWeight;
  u.font = "".concat(l, " ").concat(i, "px ").concat(a), u.fillStyle = "#FFF", u.shadowOffsetX = 0, u.shadowOffsetY = 0, u.shadowBlur = 8, u.shadowColor = "#000";
  var d = 2;
  if (typeof o.label == "string") {
    var h = u.measureText(o.label).width, p = Math.round(h + 5), v = Math.round(i + 2 * d), y = Math.max(o.size, i / 2) + d, m = Math.asin(v / 2 / y), _ = Math.sqrt(Math.abs(Math.pow(y, 2) - Math.pow(v / 2, 2)));
    u.beginPath(), u.moveTo(o.x + _, o.y + v / 2), u.lineTo(o.x + y + p, o.y + v / 2), u.lineTo(o.x + y + p, o.y - v / 2), u.lineTo(o.x + _, o.y - v / 2), u.arc(o.x, o.y, y, m, -m), u.closePath(), u.fill();
  } else
    u.beginPath(), u.arc(o.x, o.y, o.size + d, 0, Math.PI * 2), u.closePath(), u.fill();
  u.shadowOffsetX = 0, u.shadowOffsetY = 0, u.shadowBlur = 0, _f(u, o, r);
}
var kv = (
  /*glsl*/
  `
precision highp float;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;

uniform float u_correctionRatio;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  float border = u_correctionRatio * 2.0;
  float dist = length(v_diffVector) - v_radius + border;

  // No antialiasing for picking mode:
  #ifdef PICKING_MODE
  if (dist > border)
    gl_FragColor = transparent;
  else
    gl_FragColor = v_color;

  #else
  float t = 0.0;
  if (dist > border)
    t = 1.0;
  else if (dist > 0.0)
    t = dist / border;

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`
), _v = kv, Cv = (
  /*glsl*/
  `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_position;
attribute float a_size;
attribute float a_angle;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;

varying vec4 v_color;
varying vec2 v_diffVector;
varying float v_radius;
varying float v_border;

const float bias = 255.0 / 254.0;

void main() {
  float size = a_size * u_correctionRatio / u_sizeRatio * 4.0;
  vec2 diffVector = size * vec2(cos(a_angle), sin(a_angle));
  vec2 position = a_position + diffVector;
  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  v_diffVector = diffVector;
  v_radius = size / 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`
), Tv = Cv, Cf = WebGLRenderingContext, Pd = Cf.UNSIGNED_BYTE, Js = Cf.FLOAT, Rv = ["u_sizeRatio", "u_correctionRatio", "u_matrix"], Vo = /* @__PURE__ */ (function(u) {
  function o() {
    return it(this, o), bt(this, o, arguments);
  }
  return Dt(o, u), ot(o, [{
    key: "getDefinition",
    value: function() {
      return {
        VERTICES: 3,
        VERTEX_SHADER_SOURCE: Tv,
        FRAGMENT_SHADER_SOURCE: _v,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: Rv,
        ATTRIBUTES: [{
          name: "a_position",
          size: 2,
          type: Js
        }, {
          name: "a_size",
          size: 1,
          type: Js
        }, {
          name: "a_color",
          size: 4,
          type: Pd,
          normalized: !0
        }, {
          name: "a_id",
          size: 4,
          type: Pd,
          normalized: !0
        }],
        CONSTANT_ATTRIBUTES: [{
          name: "a_angle",
          size: 1,
          type: Js
        }],
        CONSTANT_DATA: [[o.ANGLE_1], [o.ANGLE_2], [o.ANGLE_3]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function(i, a, l) {
      var d = this.array, h = Ri(l.color);
      d[a++] = l.x, d[a++] = l.y, d[a++] = l.size, d[a++] = h, d[a++] = i;
    }
  }, {
    key: "setUniforms",
    value: function(i, a) {
      var l = a.gl, d = a.uniformLocations, h = d.u_sizeRatio, p = d.u_correctionRatio, v = d.u_matrix;
      l.uniform1f(p, i.correctionRatio), l.uniform1f(h, i.sizeRatio), l.uniformMatrix3fv(v, !1, i.matrix);
    }
  }]);
})(yv);
M(Vo, "ANGLE_1", 0);
M(Vo, "ANGLE_2", 2 * Math.PI / 3);
M(Vo, "ANGLE_3", 4 * Math.PI / 3);
var xv = (
  /*glsl*/
  `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}
`
), Lv = xv, bv = (
  /*glsl*/
  `
attribute vec2 a_position;
attribute vec2 a_normal;
attribute float a_radius;
attribute vec3 a_barycentric;

#ifdef PICKING_MODE
attribute vec4 a_id;
#else
attribute vec4 a_color;
#endif

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_widenessToThicknessRatio;

varying vec4 v_color;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float normalLength = length(a_normal);
  vec2 unitNormal = a_normal / normalLength;

  // These first computations are taken from edge.vert.glsl and
  // edge.clamped.vert.glsl. Please read it to get better comments on what's
  // happening:
  float pixelsThickness = max(normalLength / u_sizeRatio, minThickness);
  float webGLThickness = pixelsThickness * u_correctionRatio;
  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;
  float webGLArrowHeadThickness = webGLThickness * u_widenessToThicknessRatio;

  float da = a_barycentric.x;
  float db = a_barycentric.y;
  float dc = a_barycentric.z;

  vec2 delta = vec2(
      da * (webGLNodeRadius * unitNormal.y)
    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadThickness * unitNormal.x)
    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadThickness * unitNormal.x),

      da * (-webGLNodeRadius * unitNormal.x)
    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadThickness * unitNormal.y)
    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadThickness * unitNormal.y)
  );

  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;

  gl_Position = vec4(position, 0, 1);

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`
), Dv = bv, Tf = WebGLRenderingContext, Nd = Tf.UNSIGNED_BYTE, $o = Tf.FLOAT, Av = ["u_matrix", "u_sizeRatio", "u_correctionRatio", "u_minEdgeThickness", "u_lengthToThicknessRatio", "u_widenessToThicknessRatio"], Rf = {
  extremity: "target",
  lengthToThicknessRatio: 2.5,
  widenessToThicknessRatio: 2
};
function xf(u) {
  var o = ue(ue({}, Rf), {});
  return /* @__PURE__ */ (function(r) {
    function i() {
      return it(this, i), bt(this, i, arguments);
    }
    return Dt(i, r), ot(i, [{
      key: "getDefinition",
      value: function() {
        return {
          VERTICES: 3,
          VERTEX_SHADER_SOURCE: Dv,
          FRAGMENT_SHADER_SOURCE: Lv,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: Av,
          ATTRIBUTES: [{
            name: "a_position",
            size: 2,
            type: $o
          }, {
            name: "a_normal",
            size: 2,
            type: $o
          }, {
            name: "a_radius",
            size: 1,
            type: $o
          }, {
            name: "a_color",
            size: 4,
            type: Nd,
            normalized: !0
          }, {
            name: "a_id",
            size: 4,
            type: Nd,
            normalized: !0
          }],
          CONSTANT_ATTRIBUTES: [{
            name: "a_barycentric",
            size: 3,
            type: $o
          }],
          CONSTANT_DATA: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function(l, d, h, p, v) {
        if (o.extremity === "source") {
          var y = [p, h];
          h = y[0], p = y[1];
        }
        var m = v.size || 1, _ = p.size || 1, L = h.x, O = h.y, G = p.x, z = p.y, Q = Ri(v.color), U = G - L, j = z - O, x = U * U + j * j, A = 0, P = 0;
        x && (x = 1 / Math.sqrt(x), A = -j * x * m, P = U * x * m);
        var N = this.array;
        N[d++] = G, N[d++] = z, N[d++] = -A, N[d++] = -P, N[d++] = _, N[d++] = Q, N[d++] = l;
      }
    }, {
      key: "setUniforms",
      value: function(l, d) {
        var h = d.gl, p = d.uniformLocations, v = p.u_matrix, y = p.u_sizeRatio, m = p.u_correctionRatio, _ = p.u_minEdgeThickness, L = p.u_lengthToThicknessRatio, O = p.u_widenessToThicknessRatio;
        h.uniformMatrix3fv(v, !1, l.matrix), h.uniform1f(y, l.sizeRatio), h.uniform1f(m, l.correctionRatio), h.uniform1f(_, l.minEdgeThickness), h.uniform1f(L, o.lengthToThicknessRatio), h.uniform1f(O, o.widenessToThicknessRatio);
      }
    }]);
  })(vu);
}
xf();
var Pv = (
  /*glsl*/
  `
precision mediump float;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);

void main(void) {
  // We only handle antialiasing for normal mode:
  #ifdef PICKING_MODE
  gl_FragColor = v_color;
  #else
  float dist = length(v_normal) * v_thickness;

  float t = smoothstep(
    v_thickness - v_feather,
    v_thickness,
    dist
  );

  gl_FragColor = mix(v_color, transparent, t);
  #endif
}
`
), Lf = Pv, Nv = (
  /*glsl*/
  `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;
attribute float a_radius;
attribute float a_radiusCoef;

uniform mat3 u_matrix;
uniform float u_zoomRatio;
uniform float u_sizeRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_lengthToThicknessRatio;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  float radius = a_radius * a_radiusCoef;
  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // These first computations are taken from edge.vert.glsl. Please read it to
  // get better comments on what's happening:
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here, we move the point to leave space for the arrow head:
  float direction = sign(radius);
  float webGLNodeRadius = direction * radius * 2.0 * u_correctionRatio / u_sizeRatio;
  float webGLArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;

  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);

  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`
), Fv = Nv, bf = WebGLRenderingContext, Fd = bf.UNSIGNED_BYTE, er = bf.FLOAT, Gv = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness", "u_lengthToThicknessRatio"], zv = {
  lengthToThicknessRatio: Rf.lengthToThicknessRatio
};
function Df(u) {
  var o = ue(ue({}, zv), {});
  return /* @__PURE__ */ (function(r) {
    function i() {
      return it(this, i), bt(this, i, arguments);
    }
    return Dt(i, r), ot(i, [{
      key: "getDefinition",
      value: function() {
        return {
          VERTICES: 6,
          VERTEX_SHADER_SOURCE: Fv,
          FRAGMENT_SHADER_SOURCE: Lf,
          METHOD: WebGLRenderingContext.TRIANGLES,
          UNIFORMS: Gv,
          ATTRIBUTES: [{
            name: "a_positionStart",
            size: 2,
            type: er
          }, {
            name: "a_positionEnd",
            size: 2,
            type: er
          }, {
            name: "a_normal",
            size: 2,
            type: er
          }, {
            name: "a_color",
            size: 4,
            type: Fd,
            normalized: !0
          }, {
            name: "a_id",
            size: 4,
            type: Fd,
            normalized: !0
          }, {
            name: "a_radius",
            size: 1,
            type: er
          }],
          CONSTANT_ATTRIBUTES: [
            // If 0, then position will be a_positionStart
            // If 1, then position will be a_positionEnd
            {
              name: "a_positionCoef",
              size: 1,
              type: er
            },
            {
              name: "a_normalCoef",
              size: 1,
              type: er
            },
            {
              name: "a_radiusCoef",
              size: 1,
              type: er
            }
          ],
          CONSTANT_DATA: [[0, 1, 0], [0, -1, 0], [1, 1, 1], [1, 1, 1], [0, -1, 0], [1, -1, -1]]
        };
      }
    }, {
      key: "processVisibleItem",
      value: function(l, d, h, p, v) {
        var y = v.size || 1, m = h.x, _ = h.y, L = p.x, O = p.y, G = Ri(v.color), z = L - m, Q = O - _, U = p.size || 1, j = z * z + Q * Q, x = 0, A = 0;
        j && (j = 1 / Math.sqrt(j), x = -Q * j * y, A = z * j * y);
        var P = this.array;
        P[d++] = m, P[d++] = _, P[d++] = L, P[d++] = O, P[d++] = x, P[d++] = A, P[d++] = G, P[d++] = l, P[d++] = U;
      }
    }, {
      key: "setUniforms",
      value: function(l, d) {
        var h = d.gl, p = d.uniformLocations, v = p.u_matrix, y = p.u_zoomRatio, m = p.u_feather, _ = p.u_pixelRatio, L = p.u_correctionRatio, O = p.u_sizeRatio, G = p.u_minEdgeThickness, z = p.u_lengthToThicknessRatio;
        h.uniformMatrix3fv(v, !1, l.matrix), h.uniform1f(y, l.zoomRatio), h.uniform1f(O, l.sizeRatio), h.uniform1f(L, l.correctionRatio), h.uniform1f(_, l.pixelRatio), h.uniform1f(m, l.antiAliasingFeather), h.uniform1f(G, l.minEdgeThickness), h.uniform1f(z, o.lengthToThicknessRatio);
      }
    }]);
  })(vu);
}
Df();
function Iv(u) {
  return wv([Df(), xf()]);
}
var Ov = Iv(), Uv = Ov, $v = (
  /*glsl*/
  `
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec2 a_normal;
attribute float a_normalCoef;
attribute vec2 a_positionStart;
attribute vec2 a_positionEnd;
attribute float a_positionCoef;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_correctionRatio;
uniform float u_minEdgeThickness;
uniform float u_feather;

varying vec4 v_color;
varying vec2 v_normal;
varying float v_thickness;
varying float v_feather;

const float bias = 255.0 / 254.0;

void main() {
  float minThickness = u_minEdgeThickness;

  vec2 normal = a_normal * a_normalCoef;
  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;

  float normalLength = length(normal);
  vec2 unitNormal = normal / normalLength;

  // We require edges to be at least "minThickness" pixels thick *on screen*
  // (so we need to compensate the size ratio):
  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);

  // Then, we need to retrieve the normalized thickness of the edge in the WebGL
  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction
  // ratio:
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Here is the proper position of the vertex
  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness, 1)).xy, 0, 1);

  // For the fragment shader though, we need a thickness that takes the "magic"
  // correction ratio into account (as in webGLThickness), but so that the
  // antialiasing effect does not depend on the zoom level. So here's yet
  // another thickness version:
  v_thickness = webGLThickness / u_zoomRatio;

  v_normal = unitNormal;

  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;

  #ifdef PICKING_MODE
  // For picking mode, we use the ID as the color:
  v_color = a_id;
  #else
  // For normal mode, we use the color:
  v_color = a_color;
  #endif

  v_color.a *= bias;
}
`
), Mv = $v, Af = WebGLRenderingContext, Gd = Af.UNSIGNED_BYTE, Ei = Af.FLOAT, Bv = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio", "u_pixelRatio", "u_feather", "u_minEdgeThickness"], jv = /* @__PURE__ */ (function(u) {
  function o() {
    return it(this, o), bt(this, o, arguments);
  }
  return Dt(o, u), ot(o, [{
    key: "getDefinition",
    value: function() {
      return {
        VERTICES: 6,
        VERTEX_SHADER_SOURCE: Mv,
        FRAGMENT_SHADER_SOURCE: Lf,
        METHOD: WebGLRenderingContext.TRIANGLES,
        UNIFORMS: Bv,
        ATTRIBUTES: [{
          name: "a_positionStart",
          size: 2,
          type: Ei
        }, {
          name: "a_positionEnd",
          size: 2,
          type: Ei
        }, {
          name: "a_normal",
          size: 2,
          type: Ei
        }, {
          name: "a_color",
          size: 4,
          type: Gd,
          normalized: !0
        }, {
          name: "a_id",
          size: 4,
          type: Gd,
          normalized: !0
        }],
        CONSTANT_ATTRIBUTES: [
          // If 0, then position will be a_positionStart
          // If 2, then position will be a_positionEnd
          {
            name: "a_positionCoef",
            size: 1,
            type: Ei
          },
          {
            name: "a_normalCoef",
            size: 1,
            type: Ei
          }
        ],
        CONSTANT_DATA: [[0, 1], [0, -1], [1, 1], [1, 1], [0, -1], [1, -1]]
      };
    }
  }, {
    key: "processVisibleItem",
    value: function(i, a, l, d, h) {
      var p = h.size || 1, v = l.x, y = l.y, m = d.x, _ = d.y, L = Ri(h.color), O = m - v, G = _ - y, z = O * O + G * G, Q = 0, U = 0;
      z && (z = 1 / Math.sqrt(z), Q = -G * z * p, U = O * z * p);
      var j = this.array;
      j[a++] = v, j[a++] = y, j[a++] = m, j[a++] = _, j[a++] = Q, j[a++] = U, j[a++] = L, j[a++] = i;
    }
  }, {
    key: "setUniforms",
    value: function(i, a) {
      var l = a.gl, d = a.uniformLocations, h = d.u_matrix, p = d.u_zoomRatio, v = d.u_feather, y = d.u_pixelRatio, m = d.u_correctionRatio, _ = d.u_sizeRatio, L = d.u_minEdgeThickness;
      l.uniformMatrix3fv(h, !1, i.matrix), l.uniform1f(p, i.zoomRatio), l.uniform1f(_, i.sizeRatio), l.uniform1f(m, i.correctionRatio), l.uniform1f(y, i.pixelRatio), l.uniform1f(v, i.antiAliasingFeather), l.uniform1f(L, i.minEdgeThickness);
    }
  }]);
})(vu), mu = /* @__PURE__ */ (function(u) {
  function o() {
    var r;
    return it(this, o), r = bt(this, o), r.rawEmitter = r, r;
  }
  return Dt(o, u), ot(o);
})(Xd.EventEmitter), Hv = pf();
const Wv = /* @__PURE__ */ Ti(Hv);
var Vv = function(o) {
  return o;
}, Kv = function(o) {
  return o * o;
}, Yv = function(o) {
  return o * (2 - o);
}, Qv = function(o) {
  return (o *= 2) < 1 ? 0.5 * o * o : -0.5 * (--o * (o - 2) - 1);
}, Xv = function(o) {
  return o * o * o;
}, qv = function(o) {
  return --o * o * o + 1;
}, Zv = function(o) {
  return (o *= 2) < 1 ? 0.5 * o * o * o : 0.5 * ((o -= 2) * o * o + 2);
}, Jv = {
  linear: Vv,
  quadraticIn: Kv,
  quadraticOut: Yv,
  quadraticInOut: Qv,
  cubicIn: Xv,
  cubicOut: qv,
  cubicInOut: Zv
}, em = {
  easing: "quadraticInOut",
  duration: 150
};
function $t() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
function Mo(u, o, r) {
  return u[0] = o, u[4] = typeof r == "number" ? r : o, u;
}
function zd(u, o) {
  var r = Math.sin(o), i = Math.cos(o);
  return u[0] = i, u[1] = r, u[3] = -r, u[4] = i, u;
}
function Id(u, o, r) {
  return u[6] = o, u[7] = r, u;
}
function In(u, o) {
  var r = u[0], i = u[1], a = u[2], l = u[3], d = u[4], h = u[5], p = u[6], v = u[7], y = u[8], m = o[0], _ = o[1], L = o[2], O = o[3], G = o[4], z = o[5], Q = o[6], U = o[7], j = o[8];
  return u[0] = m * r + _ * l + L * p, u[1] = m * i + _ * d + L * v, u[2] = m * a + _ * h + L * y, u[3] = O * r + G * l + z * p, u[4] = O * i + G * d + z * v, u[5] = O * a + G * h + z * y, u[6] = Q * r + U * l + j * p, u[7] = Q * i + U * d + j * v, u[8] = Q * a + U * h + j * y, u;
}
function uu(u, o) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, i = u[0], a = u[1], l = u[3], d = u[4], h = u[6], p = u[7], v = o.x, y = o.y;
  return {
    x: v * i + y * l + h * r,
    y: v * a + y * d + p * r
  };
}
function tm(u, o) {
  var r = u.height / u.width, i = o.height / o.width;
  return r < 1 && i > 1 || r > 1 && i < 1 ? 1 : Math.min(Math.max(i, 1 / i), Math.max(1 / r, r));
}
function Si(u, o, r, i, a) {
  var l = u.angle, d = u.ratio, h = u.x, p = u.y, v = o.width, y = o.height, m = $t(), _ = Math.min(v, y) - 2 * i, L = tm(o, r);
  return a ? (In(m, Id($t(), h, p)), In(m, Mo($t(), d)), In(m, zd($t(), l)), In(m, Mo($t(), v / _ / 2 / L, y / _ / 2 / L))) : (In(m, Mo($t(), 2 * (_ / v) * L, 2 * (_ / y) * L)), In(m, zd($t(), -l)), In(m, Mo($t(), 1 / d)), In(m, Id($t(), -h, -p))), m;
}
function nm(u, o, r) {
  var i = uu(u, {
    x: Math.cos(o.angle),
    y: Math.sin(o.angle)
  }, 0), a = i.x, l = i.y;
  return 1 / Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2)) / r.width;
}
function rm(u) {
  if (!u.order) return {
    x: [0, 1],
    y: [0, 1]
  };
  var o = 1 / 0, r = -1 / 0, i = 1 / 0, a = -1 / 0;
  return u.forEachNode(function(l, d) {
    var h = d.x, p = d.y;
    h < o && (o = h), h > r && (r = h), p < i && (i = p), p > a && (a = p);
  }), {
    x: [o, r],
    y: [i, a]
  };
}
function im(u) {
  if (!Wv(u)) throw new Error("Sigma: invalid graph instance.");
  u.forEachNode(function(o, r) {
    if (!Number.isFinite(r.x) || !Number.isFinite(r.y))
      throw new Error("Sigma: Coordinates of node ".concat(o, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
  });
}
function om(u, o, r) {
  var i = document.createElement(u);
  if (o)
    for (var a in o)
      i.style[a] = o[a];
  if (r)
    for (var l in r)
      i.setAttribute(l, r[l]);
  return i;
}
function Od() {
  return typeof window.devicePixelRatio < "u" ? window.devicePixelRatio : 1;
}
function Ud(u, o, r) {
  return r.sort(function(i, a) {
    var l = o(i) || 0, d = o(a) || 0;
    return l < d ? -1 : l > d ? 1 : 0;
  });
}
function $d(u) {
  var o = Ar(u.x, 2), r = o[0], i = o[1], a = Ar(u.y, 2), l = a[0], d = a[1], h = Math.max(i - r, d - l), p = (i + r) / 2, v = (d + l) / 2;
  (h === 0 || Math.abs(h) === 1 / 0 || isNaN(h)) && (h = 1), isNaN(p) && (p = 0), isNaN(v) && (v = 0);
  var y = function(_) {
    return {
      x: 0.5 + (_.x - p) / h,
      y: 0.5 + (_.y - v) / h
    };
  };
  return y.applyTo = function(m) {
    m.x = 0.5 + (m.x - p) / h, m.y = 0.5 + (m.y - v) / h;
  }, y.inverse = function(m) {
    return {
      x: p + h * (m.x - 0.5),
      y: v + h * (m.y - 0.5)
    };
  }, y.ratio = h, y;
}
function lu(u) {
  "@babel/helpers - typeof";
  return lu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, lu(u);
}
function Md(u, o) {
  var r = o.size;
  if (r !== 0) {
    var i = u.length;
    u.length += r;
    var a = 0;
    o.forEach(function(l) {
      u[i + a] = l, a++;
    });
  }
}
function eu(u) {
  u = u || {};
  for (var o = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; o < r; o++) {
    var i = o + 1 < 1 || arguments.length <= o + 1 ? void 0 : arguments[o + 1];
    i && Object.assign(u, i);
  }
  return u;
}
var yu = {
  // Performance
  hideEdgesOnMove: !1,
  hideLabelsOnMove: !1,
  renderLabels: !0,
  renderEdgeLabels: !1,
  enableEdgeEvents: !1,
  // Component rendering
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  defaultDrawEdgeLabel: Ev,
  defaultDrawNodeLabel: _f,
  defaultDrawNodeHover: Sv,
  minEdgeThickness: 1.7,
  antiAliasingFeather: 1,
  // Mouse and touch settings
  dragTimeout: 100,
  draggedEventsTolerance: 3,
  inertiaDuration: 200,
  inertiaRatio: 3,
  zoomDuration: 250,
  zoomingRatio: 1.7,
  doubleClickTimeout: 300,
  doubleClickZoomingRatio: 2.2,
  doubleClickZoomingDuration: 200,
  tapMoveTolerance: 10,
  // Size and scaling
  zoomToSizeRatioFunction: Math.sqrt,
  itemSizesReference: "screen",
  autoRescale: !0,
  autoCenter: !0,
  // Labels
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: !1,
  minCameraRatio: null,
  maxCameraRatio: null,
  enableCameraZooming: !0,
  enableCameraPanning: !0,
  enableCameraRotation: !0,
  cameraPanBoundaries: null,
  // Lifecycle
  allowInvalidContainer: !1,
  // Program classes
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
}, am = {
  circle: Vo
}, sm = {
  arrow: Uv,
  line: jv
};
function tu(u) {
  if (typeof u.labelDensity != "number" || u.labelDensity < 0)
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  var o = u.minCameraRatio, r = u.maxCameraRatio;
  if (typeof o == "number" && typeof r == "number" && r < o)
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
}
function um(u) {
  var o = eu({}, yu, u);
  return o.nodeProgramClasses = eu({}, am, o.nodeProgramClasses), o.edgeProgramClasses = eu({}, sm, o.edgeProgramClasses), o;
}
var Bo = 1.5, Bd = /* @__PURE__ */ (function(u) {
  function o() {
    var r;
    return it(this, o), r = bt(this, o), M(r, "x", 0.5), M(r, "y", 0.5), M(r, "angle", 0), M(r, "ratio", 1), M(r, "minRatio", null), M(r, "maxRatio", null), M(r, "enabledZooming", !0), M(r, "enabledPanning", !0), M(r, "enabledRotation", !0), M(r, "clean", null), M(r, "nextFrame", null), M(r, "previousState", null), M(r, "enabled", !0), r.previousState = r.getState(), r;
  }
  return Dt(o, u), ot(o, [{
    key: "enable",
    value: (
      /**
       * Method used to enable the camera.
       */
      function() {
        return this.enabled = !0, this;
      }
    )
    /**
     * Method used to disable the camera.
     */
  }, {
    key: "disable",
    value: function() {
      return this.enabled = !1, this;
    }
    /**
     * Method used to retrieve the camera's current state.
     */
  }, {
    key: "getState",
    value: function() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }
    /**
     * Method used to check whether the camera has the given state.
     */
  }, {
    key: "hasState",
    value: function(i) {
      return this.x === i.x && this.y === i.y && this.ratio === i.ratio && this.angle === i.angle;
    }
    /**
     * Method used to retrieve the camera's previous state.
     */
  }, {
    key: "getPreviousState",
    value: function() {
      var i = this.previousState;
      return i ? {
        x: i.x,
        y: i.y,
        angle: i.angle,
        ratio: i.ratio
      } : null;
    }
    /**
     * Method used to check minRatio and maxRatio values.
     */
  }, {
    key: "getBoundedRatio",
    value: function(i) {
      var a = i;
      return typeof this.minRatio == "number" && (a = Math.max(a, this.minRatio)), typeof this.maxRatio == "number" && (a = Math.min(a, this.maxRatio)), a;
    }
    /**
     * Method used to check various things to return a legit state candidate.
     */
  }, {
    key: "validateState",
    value: function(i) {
      var a = {};
      return this.enabledPanning && typeof i.x == "number" && (a.x = i.x), this.enabledPanning && typeof i.y == "number" && (a.y = i.y), this.enabledZooming && typeof i.ratio == "number" && (a.ratio = this.getBoundedRatio(i.ratio)), this.enabledRotation && typeof i.angle == "number" && (a.angle = i.angle), this.clean ? this.clean(ue(ue({}, this.getState()), a)) : a;
    }
    /**
     * Method used to check whether the camera is currently being animated.
     */
  }, {
    key: "isAnimated",
    value: function() {
      return !!this.nextFrame;
    }
    /**
     * Method used to set the camera's state.
     */
  }, {
    key: "setState",
    value: function(i) {
      if (!this.enabled) return this;
      this.previousState = this.getState();
      var a = this.validateState(i);
      return typeof a.x == "number" && (this.x = a.x), typeof a.y == "number" && (this.y = a.y), typeof a.ratio == "number" && (this.ratio = a.ratio), typeof a.angle == "number" && (this.angle = a.angle), this.hasState(this.previousState) || this.emit("updated", this.getState()), this;
    }
    /**
     * Method used to update the camera's state using a function.
     */
  }, {
    key: "updateState",
    value: function(i) {
      return this.setState(i(this.getState())), this;
    }
    /**
     * Method used to animate the camera.
     */
  }, {
    key: "animate",
    value: function(i) {
      var a = this, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = arguments.length > 2 ? arguments[2] : void 0;
      if (!d) return new Promise(function(L) {
        return a.animate(i, l, L);
      });
      if (this.enabled) {
        var h = ue(ue({}, em), l), p = this.validateState(i), v = typeof h.easing == "function" ? h.easing : Jv[h.easing], y = Date.now(), m = this.getState(), _ = function() {
          var O = (Date.now() - y) / h.duration;
          if (O >= 1) {
            a.nextFrame = null, a.setState(p), a.animationCallback && (a.animationCallback.call(null), a.animationCallback = void 0);
            return;
          }
          var G = v(O), z = {};
          typeof p.x == "number" && (z.x = m.x + (p.x - m.x) * G), typeof p.y == "number" && (z.y = m.y + (p.y - m.y) * G), a.enabledRotation && typeof p.angle == "number" && (z.angle = m.angle + (p.angle - m.angle) * G), typeof p.ratio == "number" && (z.ratio = m.ratio + (p.ratio - m.ratio) * G), a.setState(z), a.nextFrame = requestAnimationFrame(_);
        };
        this.nextFrame ? (cancelAnimationFrame(this.nextFrame), this.animationCallback && this.animationCallback.call(null), this.nextFrame = requestAnimationFrame(_)) : _(), this.animationCallback = d;
      }
    }
    /**
     * Method used to zoom the camera.
     */
  }, {
    key: "animatedZoom",
    value: function(i) {
      return i ? typeof i == "number" ? this.animate({
        ratio: this.ratio / i
      }) : this.animate({
        ratio: this.ratio / (i.factor || Bo)
      }, i) : this.animate({
        ratio: this.ratio / Bo
      });
    }
    /**
     * Method used to unzoom the camera.
     */
  }, {
    key: "animatedUnzoom",
    value: function(i) {
      return i ? typeof i == "number" ? this.animate({
        ratio: this.ratio * i
      }) : this.animate({
        ratio: this.ratio * (i.factor || Bo)
      }, i) : this.animate({
        ratio: this.ratio * Bo
      });
    }
    /**
     * Method used to reset the camera.
     */
  }, {
    key: "animatedReset",
    value: function(i) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, i);
    }
    /**
     * Returns a new Camera instance, with the same state as the current camera.
     */
  }, {
    key: "copy",
    value: function() {
      return o.from(this.getState());
    }
  }], [{
    key: "from",
    value: function(i) {
      var a = new o();
      return a.setState(i);
    }
  }]);
})(mu);
function Mt(u, o) {
  var r = o.getBoundingClientRect();
  return {
    x: u.clientX - r.left,
    y: u.clientY - r.top
  };
}
function cn(u, o) {
  var r = ue(ue({}, Mt(u, o)), {}, {
    sigmaDefaultPrevented: !1,
    preventSigmaDefault: function() {
      r.sigmaDefaultPrevented = !0;
    },
    original: u
  });
  return r;
}
function ki(u) {
  var o = "x" in u ? u : ue(ue({}, u.touches[0] || u.previousTouches[0]), {}, {
    original: u.original,
    sigmaDefaultPrevented: u.sigmaDefaultPrevented,
    preventSigmaDefault: function() {
      u.sigmaDefaultPrevented = !0, o.sigmaDefaultPrevented = !0;
    }
  });
  return o;
}
function lm(u, o) {
  return ue(ue({}, cn(u, o)), {}, {
    delta: Pf(u)
  });
}
var cm = 2;
function Ho(u) {
  for (var o = [], r = 0, i = Math.min(u.length, cm); r < i; r++) o.push(u[r]);
  return o;
}
function _i(u, o, r) {
  var i = {
    touches: Ho(u.touches).map(function(a) {
      return Mt(a, r);
    }),
    previousTouches: o.map(function(a) {
      return Mt(a, r);
    }),
    sigmaDefaultPrevented: !1,
    preventSigmaDefault: function() {
      i.sigmaDefaultPrevented = !0;
    },
    original: u
  };
  return i;
}
function Pf(u) {
  if (typeof u.deltaY < "u") return u.deltaY * -3 / 360;
  if (typeof u.detail < "u") return u.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}
var Nf = /* @__PURE__ */ (function(u) {
  function o(r, i) {
    var a;
    return it(this, o), a = bt(this, o), a.container = r, a.renderer = i, a;
  }
  return Dt(o, u), ot(o);
})(mu), dm = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"], fm = dm.reduce(function(u, o) {
  return ue(ue({}, u), {}, M({}, o, yu[o]));
}, {}), hm = /* @__PURE__ */ (function(u) {
  function o(r, i) {
    var a;
    return it(this, o), a = bt(this, o, [r, i]), M(a, "enabled", !0), M(a, "draggedEvents", 0), M(a, "downStartTime", null), M(a, "lastMouseX", null), M(a, "lastMouseY", null), M(a, "isMouseDown", !1), M(a, "isMoving", !1), M(a, "movingTimeout", null), M(a, "startCameraState", null), M(a, "clicks", 0), M(a, "doubleClickTimeout", null), M(a, "currentWheelDirection", 0), M(a, "settings", fm), a.handleClick = a.handleClick.bind(a), a.handleRightClick = a.handleRightClick.bind(a), a.handleDown = a.handleDown.bind(a), a.handleUp = a.handleUp.bind(a), a.handleMove = a.handleMove.bind(a), a.handleWheel = a.handleWheel.bind(a), a.handleLeave = a.handleLeave.bind(a), a.handleEnter = a.handleEnter.bind(a), r.addEventListener("click", a.handleClick, {
      capture: !1
    }), r.addEventListener("contextmenu", a.handleRightClick, {
      capture: !1
    }), r.addEventListener("mousedown", a.handleDown, {
      capture: !1
    }), r.addEventListener("wheel", a.handleWheel, {
      capture: !1
    }), r.addEventListener("mouseleave", a.handleLeave, {
      capture: !1
    }), r.addEventListener("mouseenter", a.handleEnter, {
      capture: !1
    }), document.addEventListener("mousemove", a.handleMove, {
      capture: !1
    }), document.addEventListener("mouseup", a.handleUp, {
      capture: !1
    }), a;
  }
  return Dt(o, u), ot(o, [{
    key: "kill",
    value: function() {
      var i = this.container;
      i.removeEventListener("click", this.handleClick), i.removeEventListener("contextmenu", this.handleRightClick), i.removeEventListener("mousedown", this.handleDown), i.removeEventListener("wheel", this.handleWheel), i.removeEventListener("mouseleave", this.handleLeave), i.removeEventListener("mouseenter", this.handleEnter), document.removeEventListener("mousemove", this.handleMove), document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function(i) {
      var a = this;
      if (this.enabled) {
        if (this.clicks++, this.clicks === 2)
          return this.clicks = 0, typeof this.doubleClickTimeout == "number" && (clearTimeout(this.doubleClickTimeout), this.doubleClickTimeout = null), this.handleDoubleClick(i);
        setTimeout(function() {
          a.clicks = 0, a.doubleClickTimeout = null;
        }, this.settings.doubleClickTimeout), this.draggedEvents < this.settings.draggedEventsTolerance && this.emit("click", cn(i, this.container));
      }
    }
  }, {
    key: "handleRightClick",
    value: function(i) {
      this.enabled && this.emit("rightClick", cn(i, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function(i) {
      if (this.enabled) {
        i.preventDefault(), i.stopPropagation();
        var a = cn(i, this.container);
        if (this.emit("doubleClick", a), !a.sigmaDefaultPrevented) {
          var l = this.renderer.getCamera(), d = l.getBoundedRatio(l.getState().ratio / this.settings.doubleClickZoomingRatio);
          l.animate(this.renderer.getViewportZoomedState(Mt(i, this.container), d), {
            easing: "quadraticInOut",
            duration: this.settings.doubleClickZoomingDuration
          });
        }
      }
    }
  }, {
    key: "handleDown",
    value: function(i) {
      if (this.enabled) {
        if (i.button === 0) {
          this.startCameraState = this.renderer.getCamera().getState();
          var a = Mt(i, this.container), l = a.x, d = a.y;
          this.lastMouseX = l, this.lastMouseY = d, this.draggedEvents = 0, this.downStartTime = Date.now(), this.isMouseDown = !0;
        }
        this.emit("mousedown", cn(i, this.container));
      }
    }
  }, {
    key: "handleUp",
    value: function(i) {
      var a = this;
      if (!(!this.enabled || !this.isMouseDown)) {
        var l = this.renderer.getCamera();
        this.isMouseDown = !1, typeof this.movingTimeout == "number" && (clearTimeout(this.movingTimeout), this.movingTimeout = null);
        var d = Mt(i, this.container), h = d.x, p = d.y, v = l.getState(), y = l.getPreviousState() || {
          x: 0,
          y: 0
        };
        this.isMoving ? l.animate({
          x: v.x + this.settings.inertiaRatio * (v.x - y.x),
          y: v.y + this.settings.inertiaRatio * (v.y - y.y)
        }, {
          duration: this.settings.inertiaDuration,
          easing: "quadraticOut"
        }) : (this.lastMouseX !== h || this.lastMouseY !== p) && l.setState({
          x: v.x,
          y: v.y
        }), this.isMoving = !1, setTimeout(function() {
          var m = a.draggedEvents > 0;
          a.draggedEvents = 0, m && a.renderer.getSetting("hideEdgesOnMove") && a.renderer.refresh();
        }, 0), this.emit("mouseup", cn(i, this.container));
      }
    }
  }, {
    key: "handleMove",
    value: function(i) {
      var a = this;
      if (this.enabled) {
        var l = cn(i, this.container);
        if (this.emit("mousemovebody", l), (i.target === this.container || i.composedPath()[0] === this.container) && this.emit("mousemove", l), !l.sigmaDefaultPrevented && this.isMouseDown) {
          this.isMoving = !0, this.draggedEvents++, typeof this.movingTimeout == "number" && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(function() {
            a.movingTimeout = null, a.isMoving = !1;
          }, this.settings.dragTimeout);
          var d = this.renderer.getCamera(), h = Mt(i, this.container), p = h.x, v = h.y, y = this.renderer.viewportToFramedGraph({
            x: this.lastMouseX,
            y: this.lastMouseY
          }), m = this.renderer.viewportToFramedGraph({
            x: p,
            y: v
          }), _ = y.x - m.x, L = y.y - m.y, O = d.getState(), G = O.x + _, z = O.y + L;
          d.setState({
            x: G,
            y: z
          }), this.lastMouseX = p, this.lastMouseY = v, i.preventDefault(), i.stopPropagation();
        }
      }
    }
  }, {
    key: "handleLeave",
    value: function(i) {
      this.emit("mouseleave", cn(i, this.container));
    }
  }, {
    key: "handleEnter",
    value: function(i) {
      this.emit("mouseenter", cn(i, this.container));
    }
  }, {
    key: "handleWheel",
    value: function(i) {
      var a = this, l = this.renderer.getCamera();
      if (!(!this.enabled || !l.enabledZooming)) {
        var d = Pf(i);
        if (d) {
          var h = lm(i, this.container);
          if (this.emit("wheel", h), h.sigmaDefaultPrevented) {
            i.preventDefault(), i.stopPropagation();
            return;
          }
          var p = l.getState().ratio, v = d > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio, y = l.getBoundedRatio(p * v), m = d > 0 ? 1 : -1, _ = Date.now();
          p !== y && (i.preventDefault(), i.stopPropagation(), !(this.currentWheelDirection === m && this.lastWheelTriggerTime && _ - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) && (l.animate(this.renderer.getViewportZoomedState(Mt(i, this.container), y), {
            easing: "quadraticOut",
            duration: this.settings.zoomDuration
          }, function() {
            a.currentWheelDirection = 0;
          }), this.currentWheelDirection = m, this.lastWheelTriggerTime = _));
        }
      }
    }
  }, {
    key: "setSettings",
    value: function(i) {
      this.settings = i;
    }
  }]);
})(Nf), pm = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"], gm = pm.reduce(function(u, o) {
  return ue(ue({}, u), {}, M({}, o, yu[o]));
}, {}), vm = /* @__PURE__ */ (function(u) {
  function o(r, i) {
    var a;
    return it(this, o), a = bt(this, o, [r, i]), M(a, "enabled", !0), M(a, "isMoving", !1), M(a, "hasMoved", !1), M(a, "touchMode", 0), M(a, "startTouchesPositions", []), M(a, "lastTouches", []), M(a, "lastTap", null), M(a, "settings", gm), a.handleStart = a.handleStart.bind(a), a.handleLeave = a.handleLeave.bind(a), a.handleMove = a.handleMove.bind(a), r.addEventListener("touchstart", a.handleStart, {
      capture: !1
    }), r.addEventListener("touchcancel", a.handleLeave, {
      capture: !1
    }), document.addEventListener("touchend", a.handleLeave, {
      capture: !1,
      passive: !1
    }), document.addEventListener("touchmove", a.handleMove, {
      capture: !1,
      passive: !1
    }), a;
  }
  return Dt(o, u), ot(o, [{
    key: "kill",
    value: function() {
      var i = this.container;
      i.removeEventListener("touchstart", this.handleStart), i.removeEventListener("touchcancel", this.handleLeave), document.removeEventListener("touchend", this.handleLeave), document.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "handleStart",
    value: function(i) {
      var a = this;
      if (this.enabled) {
        i.preventDefault();
        var l = Ho(i.touches);
        if (this.touchMode = l.length, this.startCameraState = this.renderer.getCamera().getState(), this.startTouchesPositions = l.map(function(L) {
          return Mt(L, a.container);
        }), this.touchMode === 2) {
          var d = Ar(this.startTouchesPositions, 2), h = d[0], p = h.x, v = h.y, y = d[1], m = y.x, _ = y.y;
          this.startTouchesAngle = Math.atan2(_ - v, m - p), this.startTouchesDistance = Math.sqrt(Math.pow(m - p, 2) + Math.pow(_ - v, 2));
        }
        this.emit("touchdown", _i(i, this.lastTouches, this.container)), this.lastTouches = l, this.lastTouchesPositions = this.startTouchesPositions;
      }
    }
  }, {
    key: "handleLeave",
    value: function(i) {
      if (!(!this.enabled || !this.startTouchesPositions.length)) {
        switch (i.cancelable && i.preventDefault(), this.movingTimeout && (this.isMoving = !1, clearTimeout(this.movingTimeout)), this.touchMode) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          case 2:
            if (i.touches.length === 1) {
              this.handleStart(i), i.preventDefault();
              break;
            }
          /* falls through */
          case 1:
            if (this.isMoving) {
              var a = this.renderer.getCamera(), l = a.getState(), d = a.getPreviousState() || {
                x: 0,
                y: 0
              };
              a.animate({
                x: l.x + this.settings.inertiaRatio * (l.x - d.x),
                y: l.y + this.settings.inertiaRatio * (l.y - d.y)
              }, {
                duration: this.settings.inertiaDuration,
                easing: "quadraticOut"
              });
            }
            this.hasMoved = !1, this.isMoving = !1, this.touchMode = 0;
            break;
        }
        if (this.emit("touchup", _i(i, this.lastTouches, this.container)), !i.touches.length) {
          var h = Mt(this.lastTouches[0], this.container), p = this.startTouchesPositions[0], v = Math.pow(h.x - p.x, 2) + Math.pow(h.y - p.y, 2);
          if (!i.touches.length && v < Math.pow(this.settings.tapMoveTolerance, 2))
            if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
              var y = _i(i, this.lastTouches, this.container);
              if (this.emit("doubletap", y), this.lastTap = null, !y.sigmaDefaultPrevented) {
                var m = this.renderer.getCamera(), _ = m.getBoundedRatio(m.getState().ratio / this.settings.doubleClickZoomingRatio);
                m.animate(this.renderer.getViewportZoomedState(h, _), {
                  easing: "quadraticInOut",
                  duration: this.settings.doubleClickZoomingDuration
                });
              }
            } else {
              var L = _i(i, this.lastTouches, this.container);
              this.emit("tap", L), this.lastTap = {
                time: Date.now(),
                position: L.touches[0] || L.previousTouches[0]
              };
            }
        }
        this.lastTouches = Ho(i.touches), this.startTouchesPositions = [];
      }
    }
  }, {
    key: "handleMove",
    value: function(i) {
      var a = this;
      if (!(!this.enabled || !this.startTouchesPositions.length)) {
        i.preventDefault();
        var l = Ho(i.touches), d = l.map(function(w) {
          return Mt(w, a.container);
        }), h = this.lastTouches;
        this.lastTouches = l, this.lastTouchesPositions = d;
        var p = _i(i, h, this.container);
        if (this.emit("touchmove", p), !p.sigmaDefaultPrevented && (this.hasMoved || (this.hasMoved = d.some(function(w, E) {
          var W = a.startTouchesPositions[E];
          return W && (w.x !== W.x || w.y !== W.y);
        })), !!this.hasMoved)) {
          this.isMoving = !0, this.movingTimeout && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(function() {
            a.isMoving = !1;
          }, this.settings.dragTimeout);
          var v = this.renderer.getCamera(), y = this.startCameraState, m = this.renderer.getSetting("stagePadding");
          switch (this.touchMode) {
            case 1: {
              var _ = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), L = _.x, O = _.y, G = this.renderer.viewportToFramedGraph(d[0]), z = G.x, Q = G.y;
              v.setState({
                x: y.x + L - z,
                y: y.y + O - Q
              });
              break;
            }
            case 2: {
              var U = {
                x: 0.5,
                y: 0.5,
                angle: 0,
                ratio: 1
              }, j = d[0], x = j.x, A = j.y, P = d[1], N = P.x, V = P.y, re = Math.atan2(V - A, N - x) - this.startTouchesAngle, J = Math.hypot(V - A, N - x) / this.startTouchesDistance, ke = v.getBoundedRatio(y.ratio / J);
              U.ratio = ke, U.angle = y.angle + re;
              var ye = this.getDimensions(), ve = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
                cameraState: y
              }), Z = Math.min(ye.width, ye.height) - 2 * m, we = Z / ye.width, Ce = Z / ye.height, ie = ke / Z, S = x - Z / 2 / we, q = A - Z / 2 / Ce, I = [S * Math.cos(-U.angle) - q * Math.sin(-U.angle), q * Math.cos(-U.angle) + S * Math.sin(-U.angle)];
              S = I[0], q = I[1], U.x = ve.x - S * ie, U.y = ve.y + q * ie, v.setState(U);
              break;
            }
          }
        }
      }
    }
  }, {
    key: "setSettings",
    value: function(i) {
      this.settings = i;
    }
  }]);
})(Nf);
function mm(u) {
  if (Array.isArray(u)) return au(u);
}
function ym(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null) return Array.from(u);
}
function wm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jd(u) {
  return mm(u) || ym(u) || vf(u) || wm();
}
function Em(u, o) {
  if (u == null) return {};
  var r = {};
  for (var i in u) if ({}.hasOwnProperty.call(u, i)) {
    if (o.indexOf(i) !== -1) continue;
    r[i] = u[i];
  }
  return r;
}
function nu(u, o) {
  if (u == null) return {};
  var r, i, a = Em(u, o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(u);
    for (i = 0; i < l.length; i++) r = l[i], o.indexOf(r) === -1 && {}.propertyIsEnumerable.call(u, r) && (a[r] = u[r]);
  }
  return a;
}
var Hd = /* @__PURE__ */ (function() {
  function u(o, r) {
    it(this, u), this.key = o, this.size = r;
  }
  return ot(u, null, [{
    key: "compare",
    value: function(r, i) {
      return r.size > i.size ? -1 : r.size < i.size || r.key > i.key ? 1 : -1;
    }
  }]);
})(), Wd = /* @__PURE__ */ (function() {
  function u() {
    it(this, u), M(this, "width", 0), M(this, "height", 0), M(this, "cellSize", 0), M(this, "columns", 0), M(this, "rows", 0), M(this, "cells", {});
  }
  return ot(u, [{
    key: "resizeAndClear",
    value: function(r, i) {
      this.width = r.width, this.height = r.height, this.cellSize = i, this.columns = Math.ceil(r.width / i), this.rows = Math.ceil(r.height / i), this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function(r) {
      var i = Math.floor(r.x / this.cellSize), a = Math.floor(r.y / this.cellSize);
      return a * this.columns + i;
    }
  }, {
    key: "add",
    value: function(r, i, a) {
      var l = new Hd(r, i), d = this.getIndex(a), h = this.cells[d];
      h || (h = [], this.cells[d] = h), h.push(l);
    }
  }, {
    key: "organize",
    value: function() {
      for (var r in this.cells) {
        var i = this.cells[r];
        i.sort(Hd.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function(r, i) {
      var a = this.cellSize * this.cellSize, l = a / r / r, d = l * i / a, h = Math.ceil(d), p = [];
      for (var v in this.cells)
        for (var y = this.cells[v], m = 0; m < Math.min(h, y.length); m++)
          p.push(y[m].key);
      return p;
    }
  }]);
})();
function Sm(u) {
  var o = u.graph, r = u.hoveredNode, i = u.highlightedNodes, a = u.displayedNodeLabels, l = [];
  return o.forEachEdge(function(d, h, p, v) {
    (p === r || v === r || i.has(p) || i.has(v) || a.has(p) && a.has(v)) && l.push(d);
  }), l;
}
var Vd = 150, Kd = 50, dn = Object.prototype.hasOwnProperty;
function km(u, o, r) {
  if (!dn.call(r, "x") || !dn.call(r, "y")) throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(o, '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));
  return r.color || (r.color = u.defaultNodeColor), !r.label && r.label !== "" && (r.label = null), r.label !== void 0 && r.label !== null ? r.label = "" + r.label : r.label = null, r.size || (r.size = 2), dn.call(r, "hidden") || (r.hidden = !1), dn.call(r, "highlighted") || (r.highlighted = !1), dn.call(r, "forceLabel") || (r.forceLabel = !1), (!r.type || r.type === "") && (r.type = u.defaultNodeType), r.zIndex || (r.zIndex = 0), r;
}
function _m(u, o, r) {
  return r.color || (r.color = u.defaultEdgeColor), r.label || (r.label = ""), r.size || (r.size = 0.5), dn.call(r, "hidden") || (r.hidden = !1), dn.call(r, "forceLabel") || (r.forceLabel = !1), (!r.type || r.type === "") && (r.type = u.defaultEdgeType), r.zIndex || (r.zIndex = 0), r;
}
var Cm = /* @__PURE__ */ (function(u) {
  function o(r, i) {
    var a, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (it(this, o), a = bt(this, o), M(a, "elements", {}), M(a, "canvasContexts", {}), M(a, "webGLContexts", {}), M(a, "pickingLayers", /* @__PURE__ */ new Set()), M(a, "textures", {}), M(a, "frameBuffers", {}), M(a, "activeListeners", {}), M(a, "labelGrid", new Wd()), M(a, "nodeDataCache", {}), M(a, "edgeDataCache", {}), M(a, "nodeProgramIndex", {}), M(a, "edgeProgramIndex", {}), M(a, "nodesWithForcedLabels", /* @__PURE__ */ new Set()), M(a, "edgesWithForcedLabels", /* @__PURE__ */ new Set()), M(a, "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    }), M(a, "nodeZExtent", [1 / 0, -1 / 0]), M(a, "edgeZExtent", [1 / 0, -1 / 0]), M(a, "matrix", $t()), M(a, "invMatrix", $t()), M(a, "correctionRatio", 1), M(a, "customBBox", null), M(a, "normalizationFunction", $d({
      x: [0, 1],
      y: [0, 1]
    })), M(a, "graphToViewportRatio", 1), M(a, "itemIDsIndex", {}), M(a, "nodeIndices", {}), M(a, "edgeIndices", {}), M(a, "width", 0), M(a, "height", 0), M(a, "pixelRatio", Od()), M(a, "pickingDownSizingRatio", 2 * a.pixelRatio), M(a, "displayedNodeLabels", /* @__PURE__ */ new Set()), M(a, "displayedEdgeLabels", /* @__PURE__ */ new Set()), M(a, "highlightedNodes", /* @__PURE__ */ new Set()), M(a, "hoveredNode", null), M(a, "hoveredEdge", null), M(a, "renderFrame", null), M(a, "renderHighlightedNodesFrame", null), M(a, "needToProcess", !1), M(a, "checkEdgesEventsFrame", null), M(a, "nodePrograms", {}), M(a, "nodeHoverPrograms", {}), M(a, "edgePrograms", {}), a.settings = um(l), tu(a.settings), im(r), !(i instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
    a.graph = r, a.container = i, a.createWebGLContext("edges", {
      picking: l.enableEdgeEvents
    }), a.createCanvasContext("edgeLabels"), a.createWebGLContext("nodes", {
      picking: !0
    }), a.createCanvasContext("labels"), a.createCanvasContext("hovers"), a.createWebGLContext("hoverNodes"), a.createCanvasContext("mouse", {
      style: {
        touchAction: "none",
        userSelect: "none"
      }
    }), a.resize();
    for (var d in a.settings.nodeProgramClasses)
      a.registerNodeProgram(d, a.settings.nodeProgramClasses[d], a.settings.nodeHoverProgramClasses[d]);
    for (var h in a.settings.edgeProgramClasses)
      a.registerEdgeProgram(h, a.settings.edgeProgramClasses[h]);
    return a.camera = new Bd(), a.bindCameraHandlers(), a.mouseCaptor = new hm(a.elements.mouse, a), a.mouseCaptor.setSettings(a.settings), a.touchCaptor = new vm(a.elements.mouse, a), a.touchCaptor.setSettings(a.settings), a.bindEventHandlers(), a.bindGraphHandlers(), a.handleSettingsUpdate(), a.refresh(), a;
  }
  return Dt(o, u), ot(o, [{
    key: "registerNodeProgram",
    value: function(i, a, l) {
      return this.nodePrograms[i] && this.nodePrograms[i].kill(), this.nodeHoverPrograms[i] && this.nodeHoverPrograms[i].kill(), this.nodePrograms[i] = new a(this.webGLContexts.nodes, this.frameBuffers.nodes, this), this.nodeHoverPrograms[i] = new (l || a)(this.webGLContexts.hoverNodes, null, this), this;
    }
    /**
     * Internal function used to register an edge program
     *
     * @param  {string}          key              - The program's key, matching the related edges "type" values.
     * @param  {EdgeProgramType} EdgeProgramClass - An edges program class.
     * @return {Sigma}
     */
  }, {
    key: "registerEdgeProgram",
    value: function(i, a) {
      return this.edgePrograms[i] && this.edgePrograms[i].kill(), this.edgePrograms[i] = new a(this.webGLContexts.edges, this.frameBuffers.edges, this), this;
    }
    /**
     * Internal function used to unregister a node program
     *
     * @param  {string} key - The program's key, matching the related nodes "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterNodeProgram",
    value: function(i) {
      if (this.nodePrograms[i]) {
        var a = this.nodePrograms, l = a[i], d = nu(a, [i].map(Ci));
        l.kill(), this.nodePrograms = d;
      }
      if (this.nodeHoverPrograms[i]) {
        var h = this.nodeHoverPrograms, p = h[i], v = nu(h, [i].map(Ci));
        p.kill(), this.nodePrograms = v;
      }
      return this;
    }
    /**
     * Internal function used to unregister an edge program
     *
     * @param  {string} key - The program's key, matching the related edges "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterEdgeProgram",
    value: function(i) {
      if (this.edgePrograms[i]) {
        var a = this.edgePrograms, l = a[i], d = nu(a, [i].map(Ci));
        l.kill(), this.edgePrograms = d;
      }
      return this;
    }
    /**
     * Method (re)binding WebGL texture (for picking).
     *
     * @return {Sigma}
     */
  }, {
    key: "resetWebGLTexture",
    value: function(i) {
      var a = this.webGLContexts[i], l = this.frameBuffers[i], d = this.textures[i];
      d && a.deleteTexture(d);
      var h = a.createTexture();
      return a.bindFramebuffer(a.FRAMEBUFFER, l), a.bindTexture(a.TEXTURE_2D, h), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, this.width, this.height, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, h, 0), this.textures[i] = h, this;
    }
    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindCameraHandlers",
    value: function() {
      var i = this;
      return this.activeListeners.camera = function() {
        i.scheduleRender();
      }, this.camera.on("updated", this.activeListeners.camera), this;
    }
    /**
     * Method unbinding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "unbindCameraHandlers",
    value: function() {
      return this.camera.removeListener("updated", this.activeListeners.camera), this;
    }
    /**
     * Method that returns the closest node to a given position.
     */
  }, {
    key: "getNodeAtPosition",
    value: function(i) {
      var a = i.x, l = i.y, d = Ld(this.webGLContexts.nodes, this.frameBuffers.nodes, a, l, this.pixelRatio, this.pickingDownSizingRatio), h = xd.apply(void 0, jd(d)), p = this.itemIDsIndex[h];
      return p && p.type === "node" ? p.id : null;
    }
    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindEventHandlers",
    value: function() {
      var i = this;
      this.activeListeners.handleResize = function() {
        i.scheduleRefresh();
      }, window.addEventListener("resize", this.activeListeners.handleResize), this.activeListeners.handleMove = function(l) {
        var d = ki(l), h = {
          event: d,
          preventSigmaDefault: function() {
            d.preventSigmaDefault();
          }
        }, p = i.getNodeAtPosition(d);
        if (p && i.hoveredNode !== p && !i.nodeDataCache[p].hidden) {
          i.hoveredNode && i.emit("leaveNode", ue(ue({}, h), {}, {
            node: i.hoveredNode
          })), i.hoveredNode = p, i.emit("enterNode", ue(ue({}, h), {}, {
            node: p
          })), i.scheduleHighlightedNodesRender();
          return;
        }
        if (i.hoveredNode && i.getNodeAtPosition(d) !== i.hoveredNode) {
          var v = i.hoveredNode;
          i.hoveredNode = null, i.emit("leaveNode", ue(ue({}, h), {}, {
            node: v
          })), i.scheduleHighlightedNodesRender();
          return;
        }
        if (i.settings.enableEdgeEvents) {
          var y = i.hoveredNode ? null : i.getEdgeAtPoint(h.event.x, h.event.y);
          y !== i.hoveredEdge && (i.hoveredEdge && i.emit("leaveEdge", ue(ue({}, h), {}, {
            edge: i.hoveredEdge
          })), y && i.emit("enterEdge", ue(ue({}, h), {}, {
            edge: y
          })), i.hoveredEdge = y);
        }
      }, this.activeListeners.handleMoveBody = function(l) {
        var d = ki(l);
        i.emit("moveBody", {
          event: d,
          preventSigmaDefault: function() {
            d.preventSigmaDefault();
          }
        });
      }, this.activeListeners.handleLeave = function(l) {
        var d = ki(l), h = {
          event: d,
          preventSigmaDefault: function() {
            d.preventSigmaDefault();
          }
        };
        i.hoveredNode && (i.emit("leaveNode", ue(ue({}, h), {}, {
          node: i.hoveredNode
        })), i.scheduleHighlightedNodesRender()), i.settings.enableEdgeEvents && i.hoveredEdge && (i.emit("leaveEdge", ue(ue({}, h), {}, {
          edge: i.hoveredEdge
        })), i.scheduleHighlightedNodesRender()), i.emit("leaveStage", ue({}, h));
      }, this.activeListeners.handleEnter = function(l) {
        var d = ki(l), h = {
          event: d,
          preventSigmaDefault: function() {
            d.preventSigmaDefault();
          }
        };
        i.emit("enterStage", ue({}, h));
      };
      var a = function(d) {
        return function(h) {
          var p = ki(h), v = {
            event: p,
            preventSigmaDefault: function() {
              p.preventSigmaDefault();
            }
          }, y = i.getNodeAtPosition(p);
          if (y) return i.emit("".concat(d, "Node"), ue(ue({}, v), {}, {
            node: y
          }));
          if (i.settings.enableEdgeEvents) {
            var m = i.getEdgeAtPoint(p.x, p.y);
            if (m) return i.emit("".concat(d, "Edge"), ue(ue({}, v), {}, {
              edge: m
            }));
          }
          return i.emit("".concat(d, "Stage"), v);
        };
      };
      return this.activeListeners.handleClick = a("click"), this.activeListeners.handleRightClick = a("rightClick"), this.activeListeners.handleDoubleClick = a("doubleClick"), this.activeListeners.handleWheel = a("wheel"), this.activeListeners.handleDown = a("down"), this.activeListeners.handleUp = a("up"), this.mouseCaptor.on("mousemove", this.activeListeners.handleMove), this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody), this.mouseCaptor.on("click", this.activeListeners.handleClick), this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick), this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick), this.mouseCaptor.on("wheel", this.activeListeners.handleWheel), this.mouseCaptor.on("mousedown", this.activeListeners.handleDown), this.mouseCaptor.on("mouseup", this.activeListeners.handleUp), this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave), this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter), this.touchCaptor.on("touchdown", this.activeListeners.handleDown), this.touchCaptor.on("touchdown", this.activeListeners.handleMove), this.touchCaptor.on("touchup", this.activeListeners.handleUp), this.touchCaptor.on("touchmove", this.activeListeners.handleMove), this.touchCaptor.on("tap", this.activeListeners.handleClick), this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick), this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody), this;
    }
    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
  }, {
    key: "bindGraphHandlers",
    value: function() {
      var i = this, a = this.graph, l = /* @__PURE__ */ new Set(["x", "y", "zIndex", "type"]);
      return this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function(d) {
        var h, p = (h = d.hints) === null || h === void 0 ? void 0 : h.attributes;
        i.graph.forEachNode(function(y) {
          return i.updateNode(y);
        });
        var v = !p || p.some(function(y) {
          return l.has(y);
        });
        i.refresh({
          partialGraph: {
            nodes: a.nodes()
          },
          skipIndexation: !v,
          schedule: !0
        });
      }, this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function(d) {
        var h, p = (h = d.hints) === null || h === void 0 ? void 0 : h.attributes;
        i.graph.forEachEdge(function(y) {
          return i.updateEdge(y);
        });
        var v = p && ["zIndex", "type"].some(function(y) {
          return p?.includes(y);
        });
        i.refresh({
          partialGraph: {
            edges: a.edges()
          },
          skipIndexation: !v,
          schedule: !0
        });
      }, this.activeListeners.addNodeGraphUpdate = function(d) {
        var h = d.key;
        i.addNode(h), i.refresh({
          partialGraph: {
            nodes: [h]
          },
          skipIndexation: !1,
          schedule: !0
        });
      }, this.activeListeners.updateNodeGraphUpdate = function(d) {
        var h = d.key;
        i.refresh({
          partialGraph: {
            nodes: [h]
          },
          skipIndexation: !1,
          schedule: !0
        });
      }, this.activeListeners.dropNodeGraphUpdate = function(d) {
        var h = d.key;
        i.removeNode(h), i.refresh({
          schedule: !0
        });
      }, this.activeListeners.addEdgeGraphUpdate = function(d) {
        var h = d.key;
        i.addEdge(h), i.refresh({
          partialGraph: {
            edges: [h]
          },
          schedule: !0
        });
      }, this.activeListeners.updateEdgeGraphUpdate = function(d) {
        var h = d.key;
        i.refresh({
          partialGraph: {
            edges: [h]
          },
          skipIndexation: !1,
          schedule: !0
        });
      }, this.activeListeners.dropEdgeGraphUpdate = function(d) {
        var h = d.key;
        i.removeEdge(h), i.refresh({
          schedule: !0
        });
      }, this.activeListeners.clearEdgesGraphUpdate = function() {
        i.clearEdgeState(), i.clearEdgeIndices(), i.refresh({
          schedule: !0
        });
      }, this.activeListeners.clearGraphUpdate = function() {
        i.clearEdgeState(), i.clearNodeState(), i.clearEdgeIndices(), i.clearNodeIndices(), i.refresh({
          schedule: !0
        });
      }, a.on("nodeAdded", this.activeListeners.addNodeGraphUpdate), a.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate), a.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate), a.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate), a.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate), a.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), a.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate), a.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate), a.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), a.on("cleared", this.activeListeners.clearGraphUpdate), this;
    }
    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
  }, {
    key: "unbindGraphHandlers",
    value: function() {
      var i = this.graph;
      i.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate), i.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate), i.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate), i.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate), i.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate), i.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), i.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate), i.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate), i.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), i.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }
    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
  }, {
    key: "getEdgeAtPoint",
    value: function(i, a) {
      var l = Ld(this.webGLContexts.edges, this.frameBuffers.edges, i, a, this.pixelRatio, this.pickingDownSizingRatio), d = xd.apply(void 0, jd(l)), h = this.itemIDsIndex[d];
      return h && h.type === "edge" ? h.id : null;
    }
    /**
     * Method used to process the whole graph's data.
     *  - extent
     *  - normalizationFunction
     *  - compute node's coordinate
     *  - labelgrid
     *  - program data allocation
     * @return {Sigma}
     */
  }, {
    key: "process",
    value: function() {
      var i = this;
      this.emit("beforeProcess");
      var a = this.graph, l = this.settings, d = this.getDimensions();
      if (this.nodeExtent = rm(this.graph), !this.settings.autoRescale) {
        var h = d.width, p = d.height, v = this.nodeExtent, y = v.x, m = v.y;
        this.nodeExtent = {
          x: [(y[0] + y[1]) / 2 - h / 2, (y[0] + y[1]) / 2 + h / 2],
          y: [(m[0] + m[1]) / 2 - p / 2, (m[0] + m[1]) / 2 + p / 2]
        };
      }
      this.normalizationFunction = $d(this.customBBox || this.nodeExtent);
      var _ = new Bd(), L = Si(_.getState(), d, this.getGraphDimensions(), this.getStagePadding());
      this.labelGrid.resizeAndClear(d, l.labelGridCellSize);
      for (var O = {}, G = {}, z = {}, Q = {}, U = 1, j = a.nodes(), x = 0, A = j.length; x < A; x++) {
        var P = j[x], N = this.nodeDataCache[P], V = a.getNodeAttributes(P);
        N.x = V.x, N.y = V.y, this.normalizationFunction.applyTo(N), typeof N.label == "string" && !N.hidden && this.labelGrid.add(P, N.size, this.framedGraphToViewport(N, {
          matrix: L
        })), O[N.type] = (O[N.type] || 0) + 1;
      }
      this.labelGrid.organize();
      for (var re in this.nodePrograms) {
        if (!dn.call(this.nodePrograms, re))
          throw new Error('Sigma: could not find a suitable program for node type "'.concat(re, '"!'));
        this.nodePrograms[re].reallocate(O[re] || 0), O[re] = 0;
      }
      this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1] && (j = Ud(this.nodeZExtent, function(de) {
        return i.nodeDataCache[de].zIndex;
      }, j));
      for (var J = 0, ke = j.length; J < ke; J++) {
        var ye = j[J];
        G[ye] = U, Q[G[ye]] = {
          type: "node",
          id: ye
        }, U++;
        var ve = this.nodeDataCache[ye];
        this.addNodeToProgram(ye, G[ye], O[ve.type]++);
      }
      for (var Z = {}, we = a.edges(), Ce = 0, ie = we.length; Ce < ie; Ce++) {
        var S = we[Ce], q = this.edgeDataCache[S];
        Z[q.type] = (Z[q.type] || 0) + 1;
      }
      this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1] && (we = Ud(this.edgeZExtent, function(de) {
        return i.edgeDataCache[de].zIndex;
      }, we));
      for (var I in this.edgePrograms) {
        if (!dn.call(this.edgePrograms, I))
          throw new Error('Sigma: could not find a suitable program for edge type "'.concat(I, '"!'));
        this.edgePrograms[I].reallocate(Z[I] || 0), Z[I] = 0;
      }
      for (var w = 0, E = we.length; w < E; w++) {
        var W = we[w];
        z[W] = U, Q[z[W]] = {
          type: "edge",
          id: W
        }, U++;
        var te = this.edgeDataCache[W];
        this.addEdgeToProgram(W, z[W], Z[te.type]++);
      }
      return this.itemIDsIndex = Q, this.nodeIndices = G, this.edgeIndices = z, this.emit("afterProcess"), this;
    }
    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
  }, {
    key: "handleSettingsUpdate",
    value: function(i) {
      var a = this, l = this.settings;
      if (this.camera.minRatio = l.minCameraRatio, this.camera.maxRatio = l.maxCameraRatio, this.camera.enabledZooming = l.enableCameraZooming, this.camera.enabledPanning = l.enableCameraPanning, this.camera.enabledRotation = l.enableCameraRotation, l.cameraPanBoundaries ? this.camera.clean = function(y) {
        return a.cleanCameraState(y, l.cameraPanBoundaries && lu(l.cameraPanBoundaries) === "object" ? l.cameraPanBoundaries : {});
      } : this.camera.clean = null, this.camera.setState(this.camera.validateState(this.camera.getState())), i) {
        if (i.edgeProgramClasses !== l.edgeProgramClasses) {
          for (var d in l.edgeProgramClasses)
            l.edgeProgramClasses[d] !== i.edgeProgramClasses[d] && this.registerEdgeProgram(d, l.edgeProgramClasses[d]);
          for (var h in i.edgeProgramClasses)
            l.edgeProgramClasses[h] || this.unregisterEdgeProgram(h);
        }
        if (i.nodeProgramClasses !== l.nodeProgramClasses || i.nodeHoverProgramClasses !== l.nodeHoverProgramClasses) {
          for (var p in l.nodeProgramClasses)
            (l.nodeProgramClasses[p] !== i.nodeProgramClasses[p] || l.nodeHoverProgramClasses[p] !== i.nodeHoverProgramClasses[p]) && this.registerNodeProgram(p, l.nodeProgramClasses[p], l.nodeHoverProgramClasses[p]);
          for (var v in i.nodeProgramClasses)
            l.nodeProgramClasses[v] || this.unregisterNodeProgram(v);
        }
      }
      return this.mouseCaptor.setSettings(this.settings), this.touchCaptor.setSettings(this.settings), this;
    }
  }, {
    key: "cleanCameraState",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = a.tolerance, d = l === void 0 ? 0 : l, h = a.boundaries, p = ue({}, i), v = h || this.nodeExtent, y = Ar(v.x, 2), m = y[0], _ = y[1], L = Ar(v.y, 2), O = L[0], G = L[1], z = [this.graphToViewport({
        x: m,
        y: O
      }, {
        cameraState: i
      }), this.graphToViewport({
        x: _,
        y: O
      }, {
        cameraState: i
      }), this.graphToViewport({
        x: m,
        y: G
      }, {
        cameraState: i
      }), this.graphToViewport({
        x: _,
        y: G
      }, {
        cameraState: i
      })], Q = 1 / 0, U = -1 / 0, j = 1 / 0, x = -1 / 0;
      z.forEach(function(Z) {
        var we = Z.x, Ce = Z.y;
        Q = Math.min(Q, we), U = Math.max(U, we), j = Math.min(j, Ce), x = Math.max(x, Ce);
      });
      var A = U - Q, P = x - j, N = this.getDimensions(), V = N.width, re = N.height, J = 0, ke = 0;
      if (A >= V ? U < V - d ? J = U - (V - d) : Q > d && (J = Q - d) : U > V + d ? J = U - (V + d) : Q < -d && (J = Q + d), P >= re ? x < re - d ? ke = x - (re - d) : j > d && (ke = j - d) : x > re + d ? ke = x - (re + d) : j < -d && (ke = j + d), J || ke) {
        var ye = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }, {
          cameraState: i
        }), ve = this.viewportToFramedGraph({
          x: J,
          y: ke
        }, {
          cameraState: i
        });
        J = ve.x - ye.x, ke = ve.y - ye.y, p.x += J, p.y += ke;
      }
      return p;
    }
    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderLabels",
    value: function() {
      if (!this.settings.renderLabels) return this;
      var i = this.camera.getState(), a = this.labelGrid.getLabelsToDisplay(i.ratio, this.settings.labelDensity);
      Md(a, this.nodesWithForcedLabels), this.displayedNodeLabels = /* @__PURE__ */ new Set();
      for (var l = this.canvasContexts.labels, d = 0, h = a.length; d < h; d++) {
        var p = a[d], v = this.nodeDataCache[p];
        if (!this.displayedNodeLabels.has(p) && !v.hidden) {
          var y = this.framedGraphToViewport(v), m = y.x, _ = y.y, L = this.scaleSize(v.size);
          if (!(!v.forceLabel && L < this.settings.labelRenderedSizeThreshold) && !(m < -Vd || m > this.width + Vd || _ < -Kd || _ > this.height + Kd)) {
            this.displayedNodeLabels.add(p);
            var O = this.settings.defaultDrawNodeLabel, G = this.nodePrograms[v.type], z = G?.drawLabel || O;
            z(l, ue(ue({
              key: p
            }, v), {}, {
              size: L,
              x: m,
              y: _
            }), this.settings);
          }
        }
      }
      return this;
    }
    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderEdgeLabels",
    value: function() {
      if (!this.settings.renderEdgeLabels) return this;
      var i = this.canvasContexts.edgeLabels;
      i.clearRect(0, 0, this.width, this.height);
      var a = Sm({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      Md(a, this.edgesWithForcedLabels);
      for (var l = /* @__PURE__ */ new Set(), d = 0, h = a.length; d < h; d++) {
        var p = a[d], v = this.graph.extremities(p), y = this.nodeDataCache[v[0]], m = this.nodeDataCache[v[1]], _ = this.edgeDataCache[p];
        if (!l.has(p) && !(_.hidden || y.hidden || m.hidden)) {
          var L = this.settings.defaultDrawEdgeLabel, O = this.edgePrograms[_.type], G = O?.drawLabel || L;
          G(i, ue(ue({
            key: p
          }, _), {}, {
            size: this.scaleSize(_.size)
          }), ue(ue(ue({
            key: v[0]
          }, y), this.framedGraphToViewport(y)), {}, {
            size: this.scaleSize(y.size)
          }), ue(ue(ue({
            key: v[1]
          }, m), this.framedGraphToViewport(m)), {}, {
            size: this.scaleSize(m.size)
          }), this.settings), l.add(p);
        }
      }
      return this.displayedEdgeLabels = l, this;
    }
    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderHighlightedNodes",
    value: function() {
      var i = this, a = this.canvasContexts.hovers;
      a.clearRect(0, 0, this.width, this.height);
      var l = function(L) {
        var O = i.nodeDataCache[L], G = i.framedGraphToViewport(O), z = G.x, Q = G.y, U = i.scaleSize(O.size), j = i.settings.defaultDrawNodeHover, x = i.nodePrograms[O.type], A = x?.drawHover || j;
        A(a, ue(ue({
          key: L
        }, O), {}, {
          size: U,
          x: z,
          y: Q
        }), i.settings);
      }, d = [];
      this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden && d.push(this.hoveredNode), this.highlightedNodes.forEach(function(_) {
        _ !== i.hoveredNode && d.push(_);
      }), d.forEach(function(_) {
        return l(_);
      });
      var h = {};
      d.forEach(function(_) {
        var L = i.nodeDataCache[_].type;
        h[L] = (h[L] || 0) + 1;
      });
      for (var p in this.nodeHoverPrograms)
        this.nodeHoverPrograms[p].reallocate(h[p] || 0), h[p] = 0;
      d.forEach(function(_) {
        var L = i.nodeDataCache[_];
        i.nodeHoverPrograms[L.type].process(0, h[L.type]++, L);
      }), this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      var v = this.getRenderParams();
      for (var y in this.nodeHoverPrograms) {
        var m = this.nodeHoverPrograms[y];
        m.render(v);
      }
    }
    /**
     * Method used to schedule a hover render.
     *
     */
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function() {
      var i = this;
      this.renderHighlightedNodesFrame || this.renderFrame || (this.renderHighlightedNodesFrame = requestAnimationFrame(function() {
        i.renderHighlightedNodesFrame = null, i.renderHighlightedNodes(), i.renderEdgeLabels();
      }));
    }
    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
  }, {
    key: "render",
    value: function() {
      var i = this;
      this.emit("beforeRender");
      var a = function() {
        return i.emit("afterRender"), i;
      };
      if (this.renderFrame && (cancelAnimationFrame(this.renderFrame), this.renderFrame = null), this.resize(), this.needToProcess && this.process(), this.needToProcess = !1, this.clear(), this.pickingLayers.forEach(function(z) {
        return i.resetWebGLTexture(z);
      }), !this.graph.order) return a();
      var l = this.mouseCaptor, d = this.camera.isAnimated() || l.isMoving || l.draggedEvents || l.currentWheelDirection, h = this.camera.getState(), p = this.getDimensions(), v = this.getGraphDimensions(), y = this.getStagePadding();
      this.matrix = Si(h, p, v, y), this.invMatrix = Si(h, p, v, y, !0), this.correctionRatio = nm(this.matrix, h, p), this.graphToViewportRatio = this.getGraphToViewportRatio();
      var m = this.getRenderParams();
      for (var _ in this.nodePrograms) {
        var L = this.nodePrograms[_];
        L.render(m);
      }
      if (!this.settings.hideEdgesOnMove || !d)
        for (var O in this.edgePrograms) {
          var G = this.edgePrograms[O];
          G.render(m);
        }
      return this.settings.hideLabelsOnMove && d || (this.renderLabels(), this.renderEdgeLabels(), this.renderHighlightedNodes()), a();
    }
    /**
     * Add a node in the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "addNode",
    value: function(i) {
      var a = Object.assign({}, this.graph.getNodeAttributes(i));
      this.settings.nodeReducer && (a = this.settings.nodeReducer(i, a));
      var l = km(this.settings, i, a);
      this.nodeDataCache[i] = l, this.nodesWithForcedLabels.delete(i), l.forceLabel && !l.hidden && this.nodesWithForcedLabels.add(i), this.highlightedNodes.delete(i), l.highlighted && !l.hidden && this.highlightedNodes.add(i), this.settings.zIndex && (l.zIndex < this.nodeZExtent[0] && (this.nodeZExtent[0] = l.zIndex), l.zIndex > this.nodeZExtent[1] && (this.nodeZExtent[1] = l.zIndex));
    }
    /**
     * Update a node the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "updateNode",
    value: function(i) {
      this.addNode(i);
      var a = this.nodeDataCache[i];
      this.normalizationFunction.applyTo(a);
    }
    /**
     * Remove a node from the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "removeNode",
    value: function(i) {
      delete this.nodeDataCache[i], delete this.nodeProgramIndex[i], this.highlightedNodes.delete(i), this.hoveredNode === i && (this.hoveredNode = null), this.nodesWithForcedLabels.delete(i);
    }
    /**
     * Add an edge into the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "addEdge",
    value: function(i) {
      var a = Object.assign({}, this.graph.getEdgeAttributes(i));
      this.settings.edgeReducer && (a = this.settings.edgeReducer(i, a));
      var l = _m(this.settings, i, a);
      this.edgeDataCache[i] = l, this.edgesWithForcedLabels.delete(i), l.forceLabel && !l.hidden && this.edgesWithForcedLabels.add(i), this.settings.zIndex && (l.zIndex < this.edgeZExtent[0] && (this.edgeZExtent[0] = l.zIndex), l.zIndex > this.edgeZExtent[1] && (this.edgeZExtent[1] = l.zIndex));
    }
    /**
     * Update an edge in the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "updateEdge",
    value: function(i) {
      this.addEdge(i);
    }
    /**
     * Remove an edge from the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "removeEdge",
    value: function(i) {
      delete this.edgeDataCache[i], delete this.edgeProgramIndex[i], this.hoveredEdge === i && (this.hoveredEdge = null), this.edgesWithForcedLabels.delete(i);
    }
    /**
     * Clear all indices related to nodes.
     * @private
     */
  }, {
    key: "clearNodeIndices",
    value: function() {
      this.labelGrid = new Wd(), this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      }, this.nodeDataCache = {}, this.edgeProgramIndex = {}, this.nodesWithForcedLabels = /* @__PURE__ */ new Set(), this.nodeZExtent = [1 / 0, -1 / 0], this.highlightedNodes = /* @__PURE__ */ new Set();
    }
    /**
     * Clear all indices related to edges.
     * @private
     */
  }, {
    key: "clearEdgeIndices",
    value: function() {
      this.edgeDataCache = {}, this.edgeProgramIndex = {}, this.edgesWithForcedLabels = /* @__PURE__ */ new Set(), this.edgeZExtent = [1 / 0, -1 / 0];
    }
    /**
     * Clear all indices.
     * @private
     */
  }, {
    key: "clearIndices",
    value: function() {
      this.clearEdgeIndices(), this.clearNodeIndices();
    }
    /**
     * Clear all graph state related to nodes.
     * @private
     */
  }, {
    key: "clearNodeState",
    value: function() {
      this.displayedNodeLabels = /* @__PURE__ */ new Set(), this.highlightedNodes = /* @__PURE__ */ new Set(), this.hoveredNode = null;
    }
    /**
     * Clear all graph state related to edges.
     * @private
     */
  }, {
    key: "clearEdgeState",
    value: function() {
      this.displayedEdgeLabels = /* @__PURE__ */ new Set(), this.highlightedNodes = /* @__PURE__ */ new Set(), this.hoveredEdge = null;
    }
    /**
     * Clear all graph state.
     * @private
     */
  }, {
    key: "clearState",
    value: function() {
      this.clearEdgeState(), this.clearNodeState();
    }
    /**
     * Add the node data to its program.
     * @private
     * @param node The node's graphology ID
     * @param fingerprint A fingerprint used to identity the node with picking
     * @param position The index where to place the node in the program
     */
  }, {
    key: "addNodeToProgram",
    value: function(i, a, l) {
      var d = this.nodeDataCache[i], h = this.nodePrograms[d.type];
      if (!h) throw new Error('Sigma: could not find a suitable program for node type "'.concat(d.type, '"!'));
      h.process(a, l, d), this.nodeProgramIndex[i] = l;
    }
    /**
     * Add the edge data to its program.
     * @private
     * @param edge The edge's graphology ID
     * @param fingerprint A fingerprint used to identity the edge with picking
     * @param position The index where to place the edge in the program
     */
  }, {
    key: "addEdgeToProgram",
    value: function(i, a, l) {
      var d = this.edgeDataCache[i], h = this.edgePrograms[d.type];
      if (!h) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(d.type, '"!'));
      var p = this.graph.extremities(i), v = this.nodeDataCache[p[0]], y = this.nodeDataCache[p[1]];
      h.process(a, l, v, y, d), this.edgeProgramIndex[i] = l;
    }
    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */
    /**
     * Function used to get the render params.
     *
     * @return {RenderParams}
     */
  }, {
    key: "getRenderParams",
    value: function() {
      return {
        matrix: this.matrix,
        invMatrix: this.invMatrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness,
        antiAliasingFeather: this.settings.antiAliasingFeather
      };
    }
    /**
     * Function used to retrieve the actual stage padding value.
     *
     * @return {number}
     */
  }, {
    key: "getStagePadding",
    value: function() {
      var i = this.settings, a = i.stagePadding, l = i.autoRescale;
      return l && a || 0;
    }
    /**
     * Function used to create a layer element.
     *
     * @param {string} id - Context's id.
     * @param {string} tag - The HTML tag to use.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createLayer",
    value: function(i, a) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (this.elements[i]) throw new Error('Sigma: a layer named "'.concat(i, '" already exists'));
      var d = om(a, {
        position: "absolute"
      }, {
        class: "sigma-".concat(i)
      });
      return l.style && Object.assign(d.style, l.style), this.elements[i] = d, "beforeLayer" in l && l.beforeLayer ? this.elements[l.beforeLayer].before(d) : "afterLayer" in l && l.afterLayer ? this.elements[l.afterLayer].after(d) : this.container.appendChild(d), d;
    }
    /**
     * Function used to create a canvas element.
     *
     * @param {string} id - Context's id.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createCanvas",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.createLayer(i, "canvas", a);
    }
    /**
     * Function used to create a canvas context and add the relevant DOM elements.
     *
     * @param  {string} id - Context's id.
     * @param  options
     * @return {Sigma}
     */
  }, {
    key: "createCanvasContext",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = this.createCanvas(i, a), d = {
        preserveDrawingBuffer: !1,
        antialias: !1
      };
      return this.canvasContexts[i] = l.getContext("2d", d), this;
    }
    /**
     * Function used to create a WebGL context and add the relevant DOM
     * elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "createWebGLContext",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = a?.canvas || this.createCanvas(i, a);
      a.hidden && l.remove();
      var d = ue({
        preserveDrawingBuffer: !1,
        antialias: !1
      }, a), h;
      h = l.getContext("webgl2", d), h || (h = l.getContext("webgl", d)), h || (h = l.getContext("experimental-webgl", d));
      var p = h;
      if (this.webGLContexts[i] = p, p.blendFunc(p.ONE, p.ONE_MINUS_SRC_ALPHA), a.picking) {
        this.pickingLayers.add(i);
        var v = p.createFramebuffer();
        if (!v) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(i));
        this.frameBuffers[i] = v;
      }
      return p;
    }
    /**
     * Function used to properly kill a layer.
     *
     * @param  {string} id - Layer id.
     * @return {Sigma}
     */
  }, {
    key: "killLayer",
    value: function(i) {
      var a = this.elements[i];
      if (!a) throw new Error("Sigma: cannot kill layer ".concat(i, ", which does not exist"));
      if (this.webGLContexts[i]) {
        var l, d = this.webGLContexts[i];
        (l = d.getExtension("WEBGL_lose_context")) === null || l === void 0 || l.loseContext(), delete this.webGLContexts[i];
      } else this.canvasContexts[i] && delete this.canvasContexts[i];
      return a.remove(), delete this.elements[i], this;
    }
    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
  }, {
    key: "getCamera",
    value: function() {
      return this.camera;
    }
    /**
     * Method setting the renderer's camera.
     *
     * @param  {Camera} camera - New camera.
     * @return {Sigma}
     */
  }, {
    key: "setCamera",
    value: function(i) {
      this.unbindCameraHandlers(), this.camera = i, this.bindCameraHandlers();
    }
    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
  }, {
    key: "getContainer",
    value: function() {
      return this.container;
    }
    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "getGraph",
    value: function() {
      return this.graph;
    }
    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "setGraph",
    value: function(i) {
      i !== this.graph && (this.hoveredNode && !i.hasNode(this.hoveredNode) && (this.hoveredNode = null), this.hoveredEdge && !i.hasEdge(this.hoveredEdge) && (this.hoveredEdge = null), this.unbindGraphHandlers(), this.checkEdgesEventsFrame !== null && (cancelAnimationFrame(this.checkEdgesEventsFrame), this.checkEdgesEventsFrame = null), this.graph = i, this.bindGraphHandlers(), this.refresh());
    }
    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
  }, {
    key: "getMouseCaptor",
    value: function() {
      return this.mouseCaptor;
    }
    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
  }, {
    key: "getTouchCaptor",
    value: function() {
      return this.touchCaptor;
    }
    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getDimensions",
    value: function() {
      return {
        width: this.width,
        height: this.height
      };
    }
    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getGraphDimensions",
    value: function() {
      var i = this.customBBox || this.nodeExtent;
      return {
        width: i.x[1] - i.x[0] || 1,
        height: i.y[1] - i.y[0] || 1
      };
    }
    /**
     * Method used to get all the sigma node attributes.
     * It's useful for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
  }, {
    key: "getNodeDisplayData",
    value: function(i) {
      var a = this.nodeDataCache[i];
      return a ? Object.assign({}, a) : void 0;
    }
    /**
     * Method used to get all the sigma edge attributes.
     * It's useful for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
  }, {
    key: "getEdgeDisplayData",
    value: function(i) {
      var a = this.edgeDataCache[i];
      return a ? Object.assign({}, a) : void 0;
    }
    /**
     * Method used to get the set of currently displayed node labels.
     *
     * @return {Set<string>} A set of node keys whose label is displayed.
     */
  }, {
    key: "getNodeDisplayedLabels",
    value: function() {
      return new Set(this.displayedNodeLabels);
    }
    /**
     * Method used to get the set of currently displayed edge labels.
     *
     * @return {Set<string>} A set of edge keys whose label is displayed.
     */
  }, {
    key: "getEdgeDisplayedLabels",
    value: function() {
      return new Set(this.displayedEdgeLabels);
    }
    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
  }, {
    key: "getSettings",
    value: function() {
      return ue({}, this.settings);
    }
    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
  }, {
    key: "getSetting",
    value: function(i) {
      return this.settings[i];
    }
    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
  }, {
    key: "setSetting",
    value: function(i, a) {
      var l = ue({}, this.settings);
      return this.settings[i] = a, tu(this.settings), this.handleSettingsUpdate(l), this.scheduleRefresh(), this;
    }
    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
  }, {
    key: "updateSetting",
    value: function(i, a) {
      return this.setSetting(i, a(this.settings[i])), this;
    }
    /**
     * Method setting multiple settings at once.
     *
     * @param  {Partial<Settings>} settings - The settings to set.
     * @return {Sigma}
     */
  }, {
    key: "setSettings",
    value: function(i) {
      var a = ue({}, this.settings);
      return this.settings = ue(ue({}, this.settings), i), tu(this.settings), this.handleSettingsUpdate(a), this.scheduleRefresh(), this;
    }
    /**
     * Method used to resize the renderer.
     *
     * @param  {boolean} force - If true, then resize is processed even if size is unchanged (optional).
     * @return {Sigma}
     */
  }, {
    key: "resize",
    value: function(i) {
      var a = this.width, l = this.height;
      if (this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.pixelRatio = Od(), this.width === 0)
        if (this.settings.allowInvalidContainer) this.width = 1;
        else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      if (this.height === 0)
        if (this.settings.allowInvalidContainer) this.height = 1;
        else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      if (!i && a === this.width && l === this.height) return this;
      for (var d in this.elements) {
        var h = this.elements[d];
        h.style.width = this.width + "px", h.style.height = this.height + "px";
      }
      for (var p in this.canvasContexts)
        this.elements[p].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[p].setAttribute("height", this.height * this.pixelRatio + "px"), this.pixelRatio !== 1 && this.canvasContexts[p].scale(this.pixelRatio, this.pixelRatio);
      for (var v in this.webGLContexts) {
        this.elements[v].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[v].setAttribute("height", this.height * this.pixelRatio + "px");
        var y = this.webGLContexts[v];
        if (y.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio), this.pickingLayers.has(v)) {
          var m = this.textures[v];
          m && y.deleteTexture(m);
        }
      }
      return this.emit("resize"), this;
    }
    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
  }, {
    key: "clear",
    value: function() {
      return this.emit("beforeClear"), this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null), this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null), this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT), this.canvasContexts.labels.clearRect(0, 0, this.width, this.height), this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height), this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height), this.emit("afterClear"), this;
    }
    /**
     * Method used to refresh, i.e. force the renderer to reprocess graph
     * data and render, but keep the state.
     * - if a partialGraph is provided, we only reprocess those nodes & edges.
     * - if schedule is TRUE, we schedule a render instead of sync render
     * - if skipIndexation is TRUE, then labelGrid & program indexation are skipped (can be used if you haven't modify x, y, zIndex & size)
     *
     * @return {Sigma}
     */
  }, {
    key: "refresh",
    value: function(i) {
      var a = this, l = i?.skipIndexation !== void 0 ? i?.skipIndexation : !1, d = i?.schedule !== void 0 ? i.schedule : !1, h = !i || !i.partialGraph;
      if (h)
        this.clearEdgeIndices(), this.clearNodeIndices(), this.graph.forEachNode(function(x) {
          return a.addNode(x);
        }), this.graph.forEachEdge(function(x) {
          return a.addEdge(x);
        });
      else {
        for (var p, v, y = ((p = i.partialGraph) === null || p === void 0 ? void 0 : p.nodes) || [], m = 0, _ = y?.length || 0; m < _; m++) {
          var L = y[m];
          if (this.updateNode(L), l) {
            var O = this.nodeProgramIndex[L];
            if (O === void 0) throw new Error('Sigma: node "'.concat(L, `" can't be repaint`));
            this.addNodeToProgram(L, this.nodeIndices[L], O);
          }
        }
        for (var G = (i == null || (v = i.partialGraph) === null || v === void 0 ? void 0 : v.edges) || [], z = 0, Q = G.length; z < Q; z++) {
          var U = G[z];
          if (this.updateEdge(U), l) {
            var j = this.edgeProgramIndex[U];
            if (j === void 0) throw new Error('Sigma: edge "'.concat(U, `" can't be repaint`));
            this.addEdgeToProgram(U, this.edgeIndices[U], j);
          }
        }
      }
      return (h || !l) && (this.needToProcess = !0), d ? this.scheduleRender() : this.render(), this;
    }
    /**
     * Method used to schedule a render at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRender",
    value: function() {
      var i = this;
      return this.renderFrame || (this.renderFrame = requestAnimationFrame(function() {
        i.render();
      })), this;
    }
    /**
     * Method used to schedule a refresh (i.e. fully reprocess graph data and render)
     * at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRefresh",
    value: function(i) {
      return this.refresh(ue(ue({}, i), {}, {
        schedule: !0
      }));
    }
    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
  }, {
    key: "getViewportZoomedState",
    value: function(i, a) {
      var l = this.camera.getState(), d = l.ratio, h = l.angle, p = l.x, v = l.y, y = this.settings, m = y.minCameraRatio, _ = y.maxCameraRatio;
      typeof _ == "number" && (a = Math.min(a, _)), typeof m == "number" && (a = Math.max(a, m));
      var L = a / d, O = {
        x: this.width / 2,
        y: this.height / 2
      }, G = this.viewportToFramedGraph(i), z = this.viewportToFramedGraph(O);
      return {
        angle: h,
        x: (G.x - z.x) * (1 - L) + p,
        y: (G.y - z.y) * (1 - L) + v,
        ratio: a
      };
    }
    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
  }, {
    key: "viewRectangle",
    value: function() {
      var i = this.viewportToFramedGraph({
        x: 0,
        y: 0
      }), a = this.viewportToFramedGraph({
        x: this.width,
        y: 0
      }), l = this.viewportToFramedGraph({
        x: 0,
        y: this.height
      });
      return {
        x1: i.x,
        y1: i.y,
        x2: a.x,
        y2: a.y,
        height: a.y - l.y
      };
    }
    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "framedGraphToViewport",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = !!a.cameraState || !!a.viewportDimensions || !!a.graphDimensions, d = a.matrix ? a.matrix : l ? Si(a.cameraState || this.camera.getState(), a.viewportDimensions || this.getDimensions(), a.graphDimensions || this.getGraphDimensions(), a.padding || this.getStagePadding()) : this.matrix, h = uu(d, i);
      return {
        x: (1 + h.x) * this.width / 2,
        y: (1 - h.y) * this.height / 2
      };
    }
    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "viewportToFramedGraph",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = !!a.cameraState || !!a.viewportDimensions || !a.graphDimensions, d = a.matrix ? a.matrix : l ? Si(a.cameraState || this.camera.getState(), a.viewportDimensions || this.getDimensions(), a.graphDimensions || this.getGraphDimensions(), a.padding || this.getStagePadding(), !0) : this.invMatrix, h = uu(d, {
        x: i.x / this.width * 2 - 1,
        y: 1 - i.y / this.height * 2
      });
      return isNaN(h.x) && (h.x = 0), isNaN(h.y) && (h.y = 0), h;
    }
    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "viewportToGraph",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(i, a));
    }
    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "graphToViewport",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(i), a);
    }
    /**
     * Method returning the distance multiplier between the graph system and the
     * viewport system.
     */
  }, {
    key: "getGraphToViewportRatio",
    value: function() {
      var i = {
        x: 0,
        y: 0
      }, a = {
        x: 1,
        y: 1
      }, l = Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)), d = this.graphToViewport(i), h = this.graphToViewport(a), p = Math.sqrt(Math.pow(d.x - h.x, 2) + Math.pow(d.y - h.y, 2));
      return p / l;
    }
    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
  }, {
    key: "getBBox",
    value: function() {
      return this.nodeExtent;
    }
    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
  }, {
    key: "getCustomBBox",
    value: function() {
      return this.customBBox;
    }
    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
  }, {
    key: "setCustomBBox",
    value: function(i) {
      return this.customBBox = i, this.scheduleRender(), this;
    }
    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
  }, {
    key: "kill",
    value: function() {
      this.emit("kill"), this.removeAllListeners(), this.unbindCameraHandlers(), window.removeEventListener("resize", this.activeListeners.handleResize), this.mouseCaptor.kill(), this.touchCaptor.kill(), this.unbindGraphHandlers(), this.clearIndices(), this.clearState(), this.nodeDataCache = {}, this.edgeDataCache = {}, this.highlightedNodes.clear(), this.renderFrame && (cancelAnimationFrame(this.renderFrame), this.renderFrame = null), this.renderHighlightedNodesFrame && (cancelAnimationFrame(this.renderHighlightedNodesFrame), this.renderHighlightedNodesFrame = null);
      for (var i = this.container; i.firstChild; ) i.removeChild(i.firstChild);
      for (var a in this.nodePrograms)
        this.nodePrograms[a].kill();
      for (var l in this.nodeHoverPrograms)
        this.nodeHoverPrograms[l].kill();
      for (var d in this.edgePrograms)
        this.edgePrograms[d].kill();
      this.nodePrograms = {}, this.nodeHoverPrograms = {}, this.edgePrograms = {};
      for (var h in this.elements)
        this.killLayer(h);
      this.canvasContexts = {}, this.webGLContexts = {}, this.elements = {};
    }
    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number?} size -        The size to scale (node size, edge thickness etc.).
     * @param  {number?} cameraRatio - A camera ratio (defaults to the actual camera ratio).
     * @return {number}              - The scaled size.
     */
  }, {
    key: "scaleSize",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.camera.ratio;
      return i / this.settings.zoomToSizeRatioFunction(a) * (this.getSetting("itemSizesReference") === "positions" ? a * this.graphToViewportRatio : 1);
    }
    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
  }, {
    key: "getCanvases",
    value: function() {
      var i = {};
      for (var a in this.elements) this.elements[a] instanceof HTMLCanvasElement && (i[a] = this.elements[a]);
      return i;
    }
  }]);
})(mu), Tm = Cm;
function Yd(u) {
  if (u.startsWith("#")) {
    let r = u.slice(1);
    r.length === 3 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]), r.length === 8 && (r = r.slice(0, 6));
    const i = parseInt(r.slice(0, 2), 16), a = parseInt(r.slice(2, 4), 16), l = parseInt(r.slice(4, 6), 16);
    return [i, a, l];
  }
  const o = u.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return o ? [parseInt(o[1]), parseInt(o[2]), parseInt(o[3])] : null;
}
function ru(u, o, r) {
  const i = Yd(u), a = Yd(o);
  if (!i || !a) return u;
  const l = Math.round(a[0] + (i[0] - a[0]) * r), d = Math.round(a[1] + (i[1] - a[1]) * r), h = Math.round(a[2] + (i[2] - a[2]) * r);
  return `rgb(${l}, ${d}, ${h})`;
}
function Qd(u, o) {
  return (r, i, a) => {
    const l = i.size;
    if (r.beginPath(), r.arc(i.x, i.y, l + 4, 0, Math.PI * 2), r.closePath(), r.fillStyle = i.color, r.globalAlpha = 0.3, r.fill(), r.globalAlpha = 1, i.label) {
      const d = `${a.labelWeight} ${a.labelSize}px ${a.labelFont}`;
      r.font = d;
      const h = r.measureText(i.label).width, p = a.labelSize, v = 2, y = 2, m = i.x + l + 6, _ = i.y + p / 3, L = m - v, O = i.y - p / 2 - v, G = h + v * 2, z = p + v * 2;
      r.beginPath(), r.roundRect(L, O, G, z, y), r.fillStyle = u, r.fill(), r.fillStyle = o, r.fillText(i.label, m, _);
    }
  };
}
const Rm = ({
  graph: u,
  useForceLayout: o,
  width: r,
  height: i,
  nodeColor: a,
  edgeColor: l,
  nodeSizeConfig: d,
  selectionMode: h,
  selectionEnabled: p,
  currentSelection: v,
  setStateValue: y
}) => {
  const m = Xe.useRef(null), _ = Xe.useRef(null), L = Xe.useRef(null), [O, G] = Xe.useState(null), z = {
    primaryColor: "#ff4b4b",
    textColor: "#262730",
    backgroundColor: "#ffffff",
    secondaryBackgroundColor: "#f0f2f6",
    borderColor: "#d3d3d3"
  }, [Q, U] = Xe.useState(z), j = Xe.useRef("");
  Xe.useEffect(() => {
    if (!m.current) return;
    const Z = m.current.getRootNode()?.host ?? m.current, we = (S, q) => getComputedStyle(Z).getPropertyValue(S).trim() || q, Ce = () => {
      const S = {
        primaryColor: we("--st-primary-color", z.primaryColor),
        textColor: we("--st-text-color", z.textColor),
        backgroundColor: we("--st-background-color", z.backgroundColor),
        secondaryBackgroundColor: we("--st-secondary-background-color", z.secondaryBackgroundColor),
        borderColor: we("--st-border-color", z.borderColor)
      }, q = JSON.stringify(S);
      q !== j.current && (j.current = q, U(S));
    };
    Ce();
    const ie = setInterval(Ce, 100);
    return () => clearInterval(ie);
  }, []);
  const x = Xe.useRef(() => {
  }), A = Xe.useRef(() => {
  }), P = a || Q.primaryColor, N = l || ru(Q.textColor, Q.backgroundColor, 0.4), V = Xe.useMemo(
    () => d,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(d)]
  ), re = Xe.useMemo(
    () => u,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(u)]
  ), J = Xe.useCallback(
    (ve) => {
      if (!p || h === "edges") return;
      const Z = L.current;
      if (!Z) return;
      const we = Z.getNodeAttributes(ve);
      y("selection", {
        type: "node",
        id: ve,
        attributes: we
      });
    },
    [p, h, y]
  ), ke = Xe.useCallback(
    (ve) => {
      if (!p || h === "nodes") return;
      const Z = L.current;
      if (!Z) return;
      const we = Z.getEdgeAttributes(ve);
      y("selection", {
        type: "edge",
        id: ve,
        attributes: we
      });
    },
    [p, h, y]
  );
  Xe.useEffect(() => {
    x.current = J, A.current = ke;
  }, [J, ke]), Xe.useEffect(() => {
    const ve = m.current;
    if (!ve) return;
    const Z = new Ae({
      type: re.directed ? "directed" : "undirected",
      multi: re.multigraph
    }), we = (I, w) => {
      switch (V.mode) {
        case "uniform":
          return V.value;
        case "degree":
          return 8;
        case "attribute": {
          const E = I[V.attribute];
          return typeof E == "number" ? E : 8;
        }
      }
    };
    for (const I of re.nodes) {
      const { id: w, ...E } = I, W = !!E.color, te = {
        label: E.label ?? String(w),
        x: E.x ?? Math.random() * 100,
        y: E.y ?? Math.random() * 100,
        size: we(I),
        color: E.color || P,
        hidden: E.hidden ?? !1,
        forceLabel: E.forceLabel ?? !1,
        _hasExplicitColor: W,
        ...E
      };
      Z.addNode(w, te);
    }
    for (let I = 0; I < re.edges.length; I++) {
      const w = re.edges[I], { source: E, target: W, key: te, ...de } = w, Se = te ?? (re.multigraph ? `${E}-${W}-${I}` : `${E}-${W}`), Ee = !!de.color, X = {
        label: de.label,
        size: de.size ?? 1,
        color: de.color || N,
        hidden: de.hidden ?? !1,
        _hasExplicitColor: Ee,
        ...de
      };
      try {
        Z.addEdgeWithKey(Se, E, W, X);
      } catch {
        if (!re.multigraph) {
          const be = Z.edge(E, W);
          be && Z.mergeEdgeAttributes(be, X);
        }
      }
    }
    V.mode === "degree" && Z.forEachNode((I) => {
      const w = Z.degree(I);
      Z.setNodeAttribute(I, "size", 4 + w * 1.5);
    }), L.current = Z;
    const Ce = {
      defaultNodeColor: P,
      defaultEdgeColor: N,
      renderEdgeLabels: !1,
      labelRenderedSizeThreshold: 8,
      labelDensity: 0.1,
      labelGridCellSize: 60,
      labelFont: "var(--st-font, sans-serif)",
      labelSize: 12,
      labelWeight: "500",
      labelColor: { color: Q.textColor },
      edgeLabelFont: "var(--st-font, sans-serif)",
      edgeLabelSize: 10,
      // Custom hover drawer with themed label background
      defaultDrawNodeHover: Qd(
        Q.secondaryBackgroundColor,
        Q.textColor
      ),
      // Enable z-index based rendering for proper layering on hover
      zIndex: !0,
      // Enable edge events only when selection mode includes edges
      enableEdgeEvents: h === "edges" || h === "all"
    }, ie = new Tm(Z, ve, Ce);
    _.current = ie;
    let S = null, q = null;
    if (o) {
      const I = Z.order;
      S = new tv(Z, {
        settings: {
          // Very low gravity to allow nodes to spread out significantly
          gravity: I > 500 ? 1e-3 : I > 100 ? 5e-3 : 0.02,
          // Very high scaling ratio = strong repulsion between nodes
          scalingRatio: I > 500 ? 500 : I > 100 ? 200 : 50,
          // Strong gravity pulls disconnected components toward center
          strongGravityMode: !1,
          // Barnes-Hut optimization for large graphs
          barnesHutOptimize: I > 50,
          barnesHutTheta: 0.5,
          // Slower convergence = more stable result
          slowDown: 1 + Math.log10(I + 1),
          // Edge weight influence
          edgeWeightInfluence: 1
        }
      }), S.start();
      const w = Math.min(15e3, Math.max(3e3, I * 10));
      q = setTimeout(() => {
        S && S.isRunning() && S.stop();
      }, w);
    }
    return ie.on("enterNode", ({ node: I }) => {
      G(I);
    }), ie.on("leaveNode", () => {
      G(null);
    }), ie.on("clickNode", ({ node: I }) => {
      x.current(I);
    }), ie.on("clickEdge", ({ edge: I }) => {
      A.current(I);
    }), () => {
      q && clearTimeout(q), S && S.kill(), ie.kill(), _.current = null, L.current = null;
    };
  }, [
    re,
    o,
    V,
    h,
    P,
    N
  ]), Xe.useEffect(() => {
    const ve = _.current, Z = L.current;
    !ve || !Z || (ve.setSetting("defaultNodeColor", P), ve.setSetting("defaultEdgeColor", N), ve.setSetting("labelColor", { color: Q.textColor }), ve.setSetting(
      "defaultDrawNodeHover",
      Qd(Q.secondaryBackgroundColor, Q.textColor)
    ), Z.forEachNode((we, Ce) => {
      Ce._hasExplicitColor || Z.setNodeAttribute(we, "color", P);
    }), Z.forEachEdge((we, Ce) => {
      Ce._hasExplicitColor || Z.setEdgeAttribute(we, "color", N);
    }), ve.refresh());
  }, [P, N, Q.textColor, Q.secondaryBackgroundColor]), Xe.useEffect(() => {
    const ve = _.current, Z = L.current;
    if (!ve || !Z) return;
    const we = v?.type === "node" ? v.id : null, Ce = v?.type === "edge" ? v.id : null, ie = O || we, S = ie ? new Set(Z.neighbors(ie)) : null;
    ve.setSetting("nodeReducer", (q, I) => {
      const w = { ...I }, E = q === we, W = q === O, te = I.color || P;
      return w.color = te, E ? (w.highlighted = !0, w.zIndex = 3, w.forceLabel = !0, w.size = (I.size ?? 8) * 1.3) : W && (w.highlighted = !0, w.zIndex = 2, w.forceLabel = !0), ie && S && !W && !E && (S.has(q) ? (w.zIndex = 1, w.forceLabel = !0) : (w.color = ru(te, Q.secondaryBackgroundColor, 0.25), w.label = void 0, w.zIndex = 0)), w;
    }), ve.setSetting("edgeReducer", (q, I) => {
      const w = { ...I }, E = q === Ce, W = I.color || N;
      if (w.color = W, E && (w.color = Q.primaryColor, w.size = (I.size ?? 1) * 2), ie) {
        const [te, de] = Z.extremities(q);
        te !== ie && de !== ie ? E || (w.color = ru(W, Q.secondaryBackgroundColor, 0.15)) : w.size = (I.size ?? 1) * 1.5;
      }
      return w;
    }), ve.refresh();
  }, [O, v, Q.primaryColor, Q.secondaryBackgroundColor, P, N]);
  const ye = {
    width: r === "stretch" ? "100%" : `${r}px`,
    height: `${i}px`,
    backgroundColor: "var(--st-secondary-background-color, #f0f2f6)",
    borderRadius: "var(--st-base-radius, 0.5rem)",
    border: "1px solid var(--st-border-color, #d3d3d3)",
    overflow: "hidden",
    cursor: p ? "pointer" : "default"
  };
  return /* @__PURE__ */ iu.jsx("div", { ref: m, style: ye });
}, jo = /* @__PURE__ */ new WeakMap(), xm = (u) => {
  const { data: o, parentElement: r, setStateValue: i } = u, a = r.querySelector(".sigma-root");
  if (!a)
    throw new Error("Unexpected: Sigma root element not found");
  let l = jo.get(r);
  l || (l = zp.createRoot(a), jo.set(r, l));
  const {
    graph: d,
    useForceLayout: h,
    width: p,
    height: v,
    nodeColor: y,
    edgeColor: m,
    nodeSizeConfig: _,
    selectionMode: L,
    selectionEnabled: O,
    currentSelection: G
  } = o;
  return l.render(
    /* @__PURE__ */ iu.jsx(Xe.StrictMode, { children: /* @__PURE__ */ iu.jsx(
      Rm,
      {
        setStateValue: i,
        graph: d,
        useForceLayout: h,
        width: p,
        height: v,
        nodeColor: y,
        edgeColor: m,
        nodeSizeConfig: _,
        selectionMode: L,
        selectionEnabled: O,
        currentSelection: G
      }
    ) })
  ), () => {
    const z = jo.get(r);
    z && (z.unmount(), jo.delete(r));
  };
};
export {
  xm as default
};
