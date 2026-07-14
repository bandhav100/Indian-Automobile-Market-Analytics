var Ro = { exports: {} }, Er = {}, zo = { exports: {} }, $ = {};
var za;
function Vf() {
  if (za) return $;
  za = 1;
  var y = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), A = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.provider"), te = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), X = Symbol.iterator;
  function G(a) {
    return a === null || typeof a != "object" ? null : (a = X && a[X] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var _e = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ye = Object.assign, Y = {};
  function M(a, h, O) {
    this.props = a, this.context = h, this.refs = Y, this.updater = O || _e;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, h, "setState");
  }, M.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function De() {
  }
  De.prototype = M.prototype;
  function xe(a, h, O) {
    this.props = a, this.context = h, this.refs = Y, this.updater = O || _e;
  }
  var ie = xe.prototype = new De();
  ie.constructor = xe, ye(ie, M.prototype), ie.isPureReactComponent = !0;
  var ce = Array.isArray, Ie = Object.prototype.hasOwnProperty, Ce = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(a, h, O) {
    var I, V = {}, Q = null, J = null;
    if (h != null) for (I in h.ref !== void 0 && (J = h.ref), h.key !== void 0 && (Q = "" + h.key), h) Ie.call(h, I) && !ge.hasOwnProperty(I) && (V[I] = h[I]);
    var K = arguments.length - 2;
    if (K === 1) V.children = O;
    else if (1 < K) {
      for (var ue = Array(K), Be = 0; Be < K; Be++) ue[Be] = arguments[Be + 2];
      V.children = ue;
    }
    if (a && a.defaultProps) for (I in K = a.defaultProps, K) V[I] === void 0 && (V[I] = K[I]);
    return { $$typeof: y, type: a, key: Q, ref: J, props: V, _owner: Ce.current };
  }
  function tt(a, h) {
    return { $$typeof: y, type: a.type, key: h, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function He(a) {
    return typeof a == "object" && a !== null && a.$$typeof === y;
  }
  function nt(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(O) {
      return h[O];
    });
  }
  var H = /\/+/g;
  function fe(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? nt("" + a.key) : h.toString(36);
  }
  function we(a, h, O, I, V) {
    var Q = typeof a;
    (Q === "undefined" || Q === "boolean") && (a = null);
    var J = !1;
    if (a === null) J = !0;
    else switch (Q) {
      case "string":
      case "number":
        J = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case y:
          case P:
            J = !0;
        }
    }
    if (J) return J = a, V = V(J), a = I === "" ? "." + fe(J, 0) : I, ce(V) ? (O = "", a != null && (O = a.replace(H, "$&/") + "/"), we(V, h, O, "", function(Be) {
      return Be;
    })) : V != null && (He(V) && (V = tt(V, O + (!V.key || J && J.key === V.key ? "" : ("" + V.key).replace(H, "$&/") + "/") + a)), h.push(V)), 1;
    if (J = 0, I = I === "" ? "." : I + ":", ce(a)) for (var K = 0; K < a.length; K++) {
      Q = a[K];
      var ue = I + fe(Q, K);
      J += we(Q, h, O, ue, V);
    }
    else if (ue = G(a), typeof ue == "function") for (a = ue.call(a), K = 0; !(Q = a.next()).done; ) Q = Q.value, ue = I + fe(Q, K++), J += we(Q, h, O, ue, V);
    else if (Q === "object") throw h = String(a), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return J;
  }
  function Ne(a, h, O) {
    if (a == null) return a;
    var I = [], V = 0;
    return we(a, I, "", "", function(Q) {
      return h.call(O, Q, V++);
    }), I;
  }
  function pe(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(function(O) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = O);
      }, function(O) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = O);
      }), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var ne = { current: null }, k = { transition: null }, z = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ce };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return $.Children = { map: Ne, forEach: function(a, h, O) {
    Ne(a, function() {
      h.apply(this, arguments);
    }, O);
  }, count: function(a) {
    var h = 0;
    return Ne(a, function() {
      h++;
    }), h;
  }, toArray: function(a) {
    return Ne(a, function(h) {
      return h;
    }) || [];
  }, only: function(a) {
    if (!He(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, $.Component = M, $.Fragment = p, $.Profiler = F, $.PureComponent = xe, $.StrictMode = A, $.Suspense = W, $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, $.act = E, $.cloneElement = function(a, h, O) {
    if (a == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var I = ye({}, a.props), V = a.key, Q = a.ref, J = a._owner;
    if (h != null) {
      if (h.ref !== void 0 && (Q = h.ref, J = Ce.current), h.key !== void 0 && (V = "" + h.key), a.type && a.type.defaultProps) var K = a.type.defaultProps;
      for (ue in h) Ie.call(h, ue) && !ge.hasOwnProperty(ue) && (I[ue] = h[ue] === void 0 && K !== void 0 ? K[ue] : h[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) I.children = O;
    else if (1 < ue) {
      K = Array(ue);
      for (var Be = 0; Be < ue; Be++) K[Be] = arguments[Be + 2];
      I.children = K;
    }
    return { $$typeof: y, type: a.type, key: V, ref: Q, props: I, _owner: J };
  }, $.createContext = function(a) {
    return a = { $$typeof: te, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: U, _context: a }, a.Consumer = a;
  }, $.createElement = Pe, $.createFactory = function(a) {
    var h = Pe.bind(null, a);
    return h.type = a, h;
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(a) {
    return { $$typeof: b, render: a };
  }, $.isValidElement = He, $.lazy = function(a) {
    return { $$typeof: B, _payload: { _status: -1, _result: a }, _init: pe };
  }, $.memo = function(a, h) {
    return { $$typeof: le, type: a, compare: h === void 0 ? null : h };
  }, $.startTransition = function(a) {
    var h = k.transition;
    k.transition = {};
    try {
      a();
    } finally {
      k.transition = h;
    }
  }, $.unstable_act = E, $.useCallback = function(a, h) {
    return ne.current.useCallback(a, h);
  }, $.useContext = function(a) {
    return ne.current.useContext(a);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(a) {
    return ne.current.useDeferredValue(a);
  }, $.useEffect = function(a, h) {
    return ne.current.useEffect(a, h);
  }, $.useId = function() {
    return ne.current.useId();
  }, $.useImperativeHandle = function(a, h, O) {
    return ne.current.useImperativeHandle(a, h, O);
  }, $.useInsertionEffect = function(a, h) {
    return ne.current.useInsertionEffect(a, h);
  }, $.useLayoutEffect = function(a, h) {
    return ne.current.useLayoutEffect(a, h);
  }, $.useMemo = function(a, h) {
    return ne.current.useMemo(a, h);
  }, $.useReducer = function(a, h, O) {
    return ne.current.useReducer(a, h, O);
  }, $.useRef = function(a) {
    return ne.current.useRef(a);
  }, $.useState = function(a) {
    return ne.current.useState(a);
  }, $.useSyncExternalStore = function(a, h, O) {
    return ne.current.useSyncExternalStore(a, h, O);
  }, $.useTransition = function() {
    return ne.current.useTransition();
  }, $.version = "18.3.1", $;
}
var La;
function Io() {
  return La || (La = 1, zo.exports = Vf()), zo.exports;
}
var Ta;
function $f() {
  if (Ta) return Er;
  Ta = 1;
  var y = Io(), P = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), A = Object.prototype.hasOwnProperty, F = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(b, W, le) {
    var B, X = {}, G = null, _e = null;
    le !== void 0 && (G = "" + le), W.key !== void 0 && (G = "" + W.key), W.ref !== void 0 && (_e = W.ref);
    for (B in W) A.call(W, B) && !U.hasOwnProperty(B) && (X[B] = W[B]);
    if (b && b.defaultProps) for (B in W = b.defaultProps, W) X[B] === void 0 && (X[B] = W[B]);
    return { $$typeof: P, type: b, key: G, ref: _e, props: X, _owner: F.current };
  }
  return Er.Fragment = p, Er.jsx = te, Er.jsxs = te, Er;
}
var Oa;
function Hf() {
  return Oa || (Oa = 1, Ro.exports = $f()), Ro.exports;
}
var Z = Hf(), D = Io(), Ol = {}, Lo = { exports: {} }, Ze = {}, To = { exports: {} }, Oo = {};
var Ma;
function Qf() {
  return Ma || (Ma = 1, (function(y) {
    function P(k, z) {
      var E = k.length;
      k.push(z);
      e: for (; 0 < E; ) {
        var a = E - 1 >>> 1, h = k[a];
        if (0 < F(h, z)) k[a] = z, k[E] = h, E = a;
        else break e;
      }
    }
    function p(k) {
      return k.length === 0 ? null : k[0];
    }
    function A(k) {
      if (k.length === 0) return null;
      var z = k[0], E = k.pop();
      if (E !== z) {
        k[0] = E;
        e: for (var a = 0, h = k.length, O = h >>> 1; a < O; ) {
          var I = 2 * (a + 1) - 1, V = k[I], Q = I + 1, J = k[Q];
          if (0 > F(V, E)) Q < h && 0 > F(J, V) ? (k[a] = J, k[Q] = E, a = Q) : (k[a] = V, k[I] = E, a = I);
          else if (Q < h && 0 > F(J, E)) k[a] = J, k[Q] = E, a = Q;
          else break e;
        }
      }
      return z;
    }
    function F(k, z) {
      var E = k.sortIndex - z.sortIndex;
      return E !== 0 ? E : k.id - z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      y.unstable_now = function() {
        return U.now();
      };
    } else {
      var te = Date, b = te.now();
      y.unstable_now = function() {
        return te.now() - b;
      };
    }
    var W = [], le = [], B = 1, X = null, G = 3, _e = !1, ye = !1, Y = !1, M = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ie(k) {
      for (var z = p(le); z !== null; ) {
        if (z.callback === null) A(le);
        else if (z.startTime <= k) A(le), z.sortIndex = z.expirationTime, P(W, z);
        else break;
        z = p(le);
      }
    }
    function ce(k) {
      if (Y = !1, ie(k), !ye) if (p(W) !== null) ye = !0, pe(Ie);
      else {
        var z = p(le);
        z !== null && ne(ce, z.startTime - k);
      }
    }
    function Ie(k, z) {
      ye = !1, Y && (Y = !1, De(Pe), Pe = -1), _e = !0;
      var E = G;
      try {
        for (ie(z), X = p(W); X !== null && (!(X.expirationTime > z) || k && !nt()); ) {
          var a = X.callback;
          if (typeof a == "function") {
            X.callback = null, G = X.priorityLevel;
            var h = a(X.expirationTime <= z);
            z = y.unstable_now(), typeof h == "function" ? X.callback = h : X === p(W) && A(W), ie(z);
          } else A(W);
          X = p(W);
        }
        if (X !== null) var O = !0;
        else {
          var I = p(le);
          I !== null && ne(ce, I.startTime - z), O = !1;
        }
        return O;
      } finally {
        X = null, G = E, _e = !1;
      }
    }
    var Ce = !1, ge = null, Pe = -1, tt = 5, He = -1;
    function nt() {
      return !(y.unstable_now() - He < tt);
    }
    function H() {
      if (ge !== null) {
        var k = y.unstable_now();
        He = k;
        var z = !0;
        try {
          z = ge(!0, k);
        } finally {
          z ? fe() : (Ce = !1, ge = null);
        }
      } else Ce = !1;
    }
    var fe;
    if (typeof xe == "function") fe = function() {
      xe(H);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), Ne = we.port2;
      we.port1.onmessage = H, fe = function() {
        Ne.postMessage(null);
      };
    } else fe = function() {
      M(H, 0);
    };
    function pe(k) {
      ge = k, Ce || (Ce = !0, fe());
    }
    function ne(k, z) {
      Pe = M(function() {
        k(y.unstable_now());
      }, z);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, y.unstable_continueExecution = function() {
      ye || _e || (ye = !0, pe(Ie));
    }, y.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < k ? Math.floor(1e3 / k) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, y.unstable_getFirstCallbackNode = function() {
      return p(W);
    }, y.unstable_next = function(k) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = G;
      }
      var E = G;
      G = z;
      try {
        return k();
      } finally {
        G = E;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(k, z) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var E = G;
      G = k;
      try {
        return z();
      } finally {
        G = E;
      }
    }, y.unstable_scheduleCallback = function(k, z, E) {
      var a = y.unstable_now();
      switch (typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? a + E : a) : E = a, k) {
        case 1:
          var h = -1;
          break;
        case 2:
          h = 250;
          break;
        case 5:
          h = 1073741823;
          break;
        case 4:
          h = 1e4;
          break;
        default:
          h = 5e3;
      }
      return h = E + h, k = { id: B++, callback: z, priorityLevel: k, startTime: E, expirationTime: h, sortIndex: -1 }, E > a ? (k.sortIndex = E, P(le, k), p(W) === null && k === p(le) && (Y ? (De(Pe), Pe = -1) : Y = !0, ne(ce, E - a))) : (k.sortIndex = h, P(W, k), ye || _e || (ye = !0, pe(Ie))), k;
    }, y.unstable_shouldYield = nt, y.unstable_wrapCallback = function(k) {
      var z = G;
      return function() {
        var E = G;
        G = z;
        try {
          return k.apply(this, arguments);
        } finally {
          G = E;
        }
      };
    };
  })(Oo)), Oo;
}
var ja;
function Kf() {
  return ja || (ja = 1, To.exports = Qf()), To.exports;
}
var Da;
function Yf() {
  if (Da) return Ze;
  Da = 1;
  var y = Io(), P = Kf();
  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = /* @__PURE__ */ new Set(), F = {};
  function U(e, t) {
    te(e, t), te(e + "Capture", t);
  }
  function te(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) A.add(t[e]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), W = Object.prototype.hasOwnProperty, le = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, X = {};
  function G(e) {
    return W.call(X, e) ? !0 : W.call(B, e) ? !1 : le.test(e) ? X[e] = !0 : (B[e] = !0, !1);
  }
  function _e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ye(e, t, n, r) {
    if (t === null || typeof t > "u" || _e(e, t, n, r)) return !0;
    if (r) return !1;
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
  function Y(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    M[e] = new Y(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    M[t] = new Y(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    M[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    M[e] = new Y(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    M[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    M[e] = new Y(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    M[e] = new Y(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    M[e] = new Y(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    M[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var De = /[\-:]([a-z])/g;
  function xe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      De,
      xe
    );
    M[t] = new Y(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(De, xe);
    M[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(De, xe);
    M[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    M[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    M[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ie(e, t, n, r) {
    var l = M.hasOwnProperty(t) ? M[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ye(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ce = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ie = /* @__PURE__ */ Symbol.for("react.element"), Ce = /* @__PURE__ */ Symbol.for("react.portal"), ge = /* @__PURE__ */ Symbol.for("react.fragment"), Pe = /* @__PURE__ */ Symbol.for("react.strict_mode"), tt = /* @__PURE__ */ Symbol.for("react.profiler"), He = /* @__PURE__ */ Symbol.for("react.provider"), nt = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), fe = /* @__PURE__ */ Symbol.for("react.suspense"), we = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ne = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), ne = /* @__PURE__ */ Symbol.for("react.offscreen"), k = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var E = Object.assign, a;
  function h(e) {
    if (a === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      a = t && t[1] || "";
    }
    return `
` + a + e;
  }
  var O = !1;
  function I(e, t) {
    if (!e || O) return "";
    O = !0;
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
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (var l = m.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
        for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? h(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return h(e.type);
      case 16:
        return h("Lazy");
      case 13:
        return h("Suspense");
      case 19:
        return h("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = I(e.type, !1), e;
      case 11:
        return e = I(e.type.render, !1), e;
      case 1:
        return e = I(e.type, !0), e;
      default:
        return "";
    }
  }
  function Q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ge:
        return "Fragment";
      case Ce:
        return "Portal";
      case tt:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case fe:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case nt:
        return (e.displayName || "Context") + ".Consumer";
      case He:
        return (e._context.displayName || "Context") + ".Provider";
      case H:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ne:
        return t = e.displayName || null, t !== null ? t : Q(e.type) || "Memo";
      case pe:
        t = e._payload, e = e._init;
        try {
          return Q(e(t));
        } catch {
        }
    }
    return null;
  }
  function J(e) {
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
        return Q(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
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
  function K(e) {
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
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Be(e) {
    var t = ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function cn(e) {
    e._valueTracker || (e._valueTracker = Be(e));
  }
  function Fn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ue(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function zt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fn(e, t) {
    var n = t.checked;
    return E({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Gt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = K(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Fo(e, t) {
    t = t.checked, t != null && ie(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Fo(e, t);
    var n = K(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, K(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Uo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || zt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Un = Array.isArray;
  function dn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + K(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return E({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ao(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (Un(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: K(n) };
  }
  function Wo(e, t) {
    var n = K(t.value), r = K(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Bo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ul(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var _r, $o = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _r.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function An(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wn = {
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
  }, Qa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function(e) {
    Qa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Wn[t] = Wn[e];
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px";
  }
  function Qo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ho(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ka = E({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Al(e, t) {
    if (t) {
      if (Ka[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Wl(e, t) {
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
  var Bl = null;
  function Vl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $l = null, pn = null, mn = null;
  function Ko(e) {
    if (e = sr(e)) {
      if (typeof $l != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = Yr(t), $l(e.stateNode, e.type, t));
    }
  }
  function Yo(e) {
    pn ? mn ? mn.push(e) : mn = [e] : pn = e;
  }
  function Xo() {
    if (pn) {
      var e = pn, t = mn;
      if (mn = pn = null, Ko(e), t) for (e = 0; e < t.length; e++) Ko(t[e]);
    }
  }
  function Go(e, t) {
    return e(t);
  }
  function Zo() {
  }
  var Hl = !1;
  function Jo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Go(e, t, n);
    } finally {
      Hl = !1, (pn !== null || mn !== null) && (Zo(), Xo());
    }
  }
  function Bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if (b) try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", { get: function() {
      Ql = !0;
    } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
  } catch {
    Ql = !1;
  }
  function Ya(e, t, n, r, l, u, o, i, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var $n = !1, Cr = null, Pr = !1, Kl = null, Xa = { onError: function(e) {
    $n = !0, Cr = e;
  } };
  function Ga(e, t, n, r, l, u, o, i, s) {
    $n = !1, Cr = null, Ya.apply(Xa, arguments);
  }
  function Za(e, t, n, r, l, u, o, i, s) {
    if (Ga.apply(this, arguments), $n) {
      if ($n) {
        var m = Cr;
        $n = !1, Cr = null;
      } else throw Error(p(198));
      Pr || (Pr = !0, Kl = m);
    }
  }
  function Zt(e) {
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
  function qo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function bo(e) {
    if (Zt(e) !== e) throw Error(p(188));
  }
  function Ja(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Zt(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return bo(l), e;
          if (u === r) return bo(l), t;
          u = u.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) n = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === n) {
            o = !0, n = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, n = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === n) {
              o = !0, n = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function ei(e) {
    return e = Ja(e), e !== null ? ti(e) : null;
  }
  function ti(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ti(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ni = P.unstable_scheduleCallback, ri = P.unstable_cancelCallback, qa = P.unstable_shouldYield, ba = P.unstable_requestPaint, Se = P.unstable_now, ec = P.unstable_getCurrentPriorityLevel, Yl = P.unstable_ImmediatePriority, li = P.unstable_UserBlockingPriority, Nr = P.unstable_NormalPriority, tc = P.unstable_LowPriority, ui = P.unstable_IdlePriority, Rr = null, vt = null;
  function nc(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function") try {
      vt.onCommitFiberRoot(Rr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : uc, rc = Math.log, lc = Math.LN2;
  function uc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (rc(e) / lc | 0) | 0;
  }
  var zr = 64, Lr = 4194304;
  function Hn(e) {
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Hn(i) : (u &= o, u !== 0 && (r = Hn(u)));
    } else o = n & ~l, o !== 0 ? r = Hn(o) : u !== 0 && (r = Hn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function oc(e, t) {
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
  function ic(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - at(u), i = 1 << o, s = l[o];
      s === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = oc(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function oi() {
    var e = zr;
    return zr <<= 1, (zr & 4194240) === 0 && (zr = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Qn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
  }
  function sc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Zl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var re = 0;
  function ii(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var si, Jl, ai, ci, fi, ql = !1, Or = [], Lt = null, Tt = null, Ot = null, Kn = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), Mt = [], ac = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function di(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Kn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && Jl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function cc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Lt = Xn(Lt, e, t, n, r, l), !0;
      case "dragenter":
        return Tt = Xn(Tt, e, t, n, r, l), !0;
      case "mouseover":
        return Ot = Xn(Ot, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Kn.set(u, Xn(Kn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Yn.set(u, Xn(Yn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function pi(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = qo(n), t !== null) {
            e.blockedOn = t, fi(e.priority, function() {
              ai(n);
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
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Bl = r, n.target.dispatchEvent(r), Bl = null;
      } else return t = sr(n), t !== null && Jl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function mi(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function fc() {
    ql = !1, Lt !== null && Mr(Lt) && (Lt = null), Tt !== null && Mr(Tt) && (Tt = null), Ot !== null && Mr(Ot) && (Ot = null), Kn.forEach(mi), Yn.forEach(mi);
  }
  function Gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ql || (ql = !0, P.unstable_scheduleCallback(P.unstable_NormalPriority, fc)));
  }
  function Zn(e) {
    function t(l) {
      return Gn(l, e);
    }
    if (0 < Or.length) {
      Gn(Or[0], e);
      for (var n = 1; n < Or.length; n++) {
        var r = Or[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Lt !== null && Gn(Lt, e), Tt !== null && Gn(Tt, e), Ot !== null && Gn(Ot, e), Kn.forEach(t), Yn.forEach(t), n = 0; n < Mt.length; n++) r = Mt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && (n = Mt[0], n.blockedOn === null); ) pi(n), n.blockedOn === null && Mt.shift();
  }
  var hn = ce.ReactCurrentBatchConfig, jr = !0;
  function dc(e, t, n, r) {
    var l = re, u = hn.transition;
    hn.transition = null;
    try {
      re = 1, bl(e, t, n, r);
    } finally {
      re = l, hn.transition = u;
    }
  }
  function pc(e, t, n, r) {
    var l = re, u = hn.transition;
    hn.transition = null;
    try {
      re = 4, bl(e, t, n, r);
    } finally {
      re = l, hn.transition = u;
    }
  }
  function bl(e, t, n, r) {
    if (jr) {
      var l = eu(e, t, n, r);
      if (l === null) yu(e, t, r, Dr, n), di(e, r);
      else if (cc(l, e, t, n, r)) r.stopPropagation();
      else if (di(e, r), t & 4 && -1 < ac.indexOf(e)) {
        for (; l !== null; ) {
          var u = sr(l);
          if (u !== null && si(u), u = eu(e, t, n, r), u === null && yu(e, t, r, Dr, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else yu(e, t, r, null, n);
    }
  }
  var Dr = null;
  function eu(e, t, n, r) {
    if (Dr = null, e = Vl(r), e = Jt(e), e !== null) if (t = Zt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = qo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Dr = e, null;
  }
  function hi(e) {
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
        switch (ec()) {
          case Yl:
            return 1;
          case li:
            return 4;
          case Nr:
          case tc:
            return 16;
          case ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jt = null, tu = null, Ir = null;
  function vi() {
    if (Ir) return Ir;
    var e, t = tu, n = t.length, r, l = "value" in jt ? jt.value : jt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Fr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ur() {
    return !0;
  }
  function yi() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ur : yi, this.isPropagationStopped = yi, this;
    }
    return E(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
    }, persist: function() {
    }, isPersistent: Ur }), t;
  }
  var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, nu = Je(vn), Jn = E({}, vn, { view: 0, detail: 0 }), mc = Je(Jn), ru, lu, qn, Ar = E({}, Jn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ou, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (ru = e.screenX - qn.screenX, lu = e.screenY - qn.screenY) : lu = ru = 0, qn = e), ru);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : lu;
  } }), gi = Je(Ar), hc = E({}, Ar, { dataTransfer: 0 }), vc = Je(hc), yc = E({}, Jn, { relatedTarget: 0 }), uu = Je(yc), gc = E({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wc = Je(gc), Sc = E({}, vn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), kc = Je(Sc), xc = E({}, vn, { data: 0 }), wi = Je(xc), Ec = {
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
  }, _c = {
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
  }, Cc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Cc[e]) ? !!t[e] : !1;
  }
  function ou() {
    return Pc;
  }
  var Nc = E({}, Jn, { key: function(e) {
    if (e.key) {
      var t = Ec[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _c[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ou, charCode: function(e) {
    return e.type === "keypress" ? Fr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Rc = Je(Nc), zc = E({}, Ar, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Si = Je(zc), Lc = E({}, Jn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ou }), Tc = Je(Lc), Oc = E({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = Je(Oc), jc = E({}, Ar, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Dc = Je(jc), Ic = [9, 13, 27, 32], iu = b && "CompositionEvent" in window, bn = null;
  b && "documentMode" in document && (bn = document.documentMode);
  var Fc = b && "TextEvent" in window && !bn, ki = b && (!iu || bn && 8 < bn && 11 >= bn), xi = " ", Ei = !1;
  function _i(e, t) {
    switch (e) {
      case "keyup":
        return Ic.indexOf(t.keyCode) !== -1;
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
  function Ci(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yn = !1;
  function Uc(e, t) {
    switch (e) {
      case "compositionend":
        return Ci(t);
      case "keypress":
        return t.which !== 32 ? null : (Ei = !0, xi);
      case "textInput":
        return e = t.data, e === xi && Ei ? null : e;
      default:
        return null;
    }
  }
  function Ac(e, t) {
    if (yn) return e === "compositionend" || !iu && _i(e, t) ? (e = vi(), Ir = tu = jt = null, yn = !1, e) : null;
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
        return ki && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wc[e.type] : t === "textarea";
  }
  function Ni(e, t, n, r) {
    Yo(r), t = Hr(t, "onChange"), 0 < t.length && (n = new nu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var er = null, tr = null;
  function Bc(e) {
    Qi(e, 0);
  }
  function Wr(e) {
    var t = xn(e);
    if (Fn(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var Ri = !1;
  if (b) {
    var su;
    if (b) {
      var au = "oninput" in document;
      if (!au) {
        var zi = document.createElement("div");
        zi.setAttribute("oninput", "return;"), au = typeof zi.oninput == "function";
      }
      su = au;
    } else su = !1;
    Ri = su && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    er && (er.detachEvent("onpropertychange", Ti), tr = er = null);
  }
  function Ti(e) {
    if (e.propertyName === "value" && Wr(tr)) {
      var t = [];
      Ni(t, tr, e, Vl(e)), Jo(Bc, t);
    }
  }
  function $c(e, t, n) {
    e === "focusin" ? (Li(), er = t, tr = n, er.attachEvent("onpropertychange", Ti)) : e === "focusout" && Li();
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wr(tr);
  }
  function Qc(e, t) {
    if (e === "click") return Wr(t);
  }
  function Kc(e, t) {
    if (e === "input" || e === "change") return Wr(t);
  }
  function Yc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : Yc;
  function nr(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Oi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Oi(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
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
      n = Oi(n);
    }
  }
  function ji(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ji(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Di() {
    for (var e = window, t = zt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zt(e.document);
    }
    return t;
  }
  function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Xc(e) {
    var t = Di(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ji(n.ownerDocument.documentElement, n)) {
      if (r !== null && cu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Mi(n, u);
          var o = Mi(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Gc = b && "documentMode" in document && 11 >= document.documentMode, gn = null, fu = null, rr = null, du = !1;
  function Ii(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    du || gn == null || gn !== zt(r) || (r = gn, "selectionStart" in r && cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rr && nr(rr, r) || (rr = r, r = Hr(fu, "onSelect"), 0 < r.length && (t = new nu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
  }
  function Br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wn = { animationend: Br("Animation", "AnimationEnd"), animationiteration: Br("Animation", "AnimationIteration"), animationstart: Br("Animation", "AnimationStart"), transitionend: Br("Transition", "TransitionEnd") }, pu = {}, Fi = {};
  b && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
  function Vr(e) {
    if (pu[e]) return pu[e];
    if (!wn[e]) return e;
    var t = wn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fi) return pu[e] = t[n];
    return e;
  }
  var Ui = Vr("animationend"), Ai = Vr("animationiteration"), Wi = Vr("animationstart"), Bi = Vr("transitionend"), Vi = /* @__PURE__ */ new Map(), $i = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dt(e, t) {
    Vi.set(e, t), U(t, [e]);
  }
  for (var mu = 0; mu < $i.length; mu++) {
    var hu = $i[mu], Zc = hu.toLowerCase(), Jc = hu[0].toUpperCase() + hu.slice(1);
    Dt(Zc, "on" + Jc);
  }
  Dt(Ui, "onAnimationEnd"), Dt(Ai, "onAnimationIteration"), Dt(Wi, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Bi, "onTransitionEnd"), te("onMouseEnter", ["mouseout", "mouseover"]), te("onMouseLeave", ["mouseout", "mouseover"]), te("onPointerEnter", ["pointerout", "pointerover"]), te("onPointerLeave", ["pointerout", "pointerover"]), U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), U("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qc = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
  function Hi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Za(r, t, void 0, e), e.currentTarget = null;
  }
  function Qi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, m = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Hi(l, i, m), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, m = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Hi(l, i, m), u = s;
        }
      }
    }
    if (Pr) throw e = Kl, Pr = !1, Kl = null, e;
  }
  function se(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ki(t, e, 2, !1), n.add(r));
  }
  function vu(e, t, n) {
    var r = 0;
    t && (r |= 4), Ki(n, e, r, t);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[$r]) {
      e[$r] = !0, A.forEach(function(n) {
        n !== "selectionchange" && (qc.has(n) || vu(n, !1, e), vu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || (t[$r] = !0, vu("selectionchange", !1, t));
    }
  }
  function Ki(e, t, n, r) {
    switch (hi(t)) {
      case 1:
        var l = dc;
        break;
      case 4:
        l = pc;
        break;
      default:
        l = bl;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function yu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; i !== null; ) {
          if (o = Jt(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Jo(function() {
      var m = u, g = Vl(n), w = [];
      e: {
        var v = Vi.get(e);
        if (v !== void 0) {
          var x = nu, C = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = Rc;
              break;
            case "focusin":
              C = "focus", x = uu;
              break;
            case "focusout":
              C = "blur", x = uu;
              break;
            case "beforeblur":
            case "afterblur":
              x = uu;
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
              x = gi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = vc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Tc;
              break;
            case Ui:
            case Ai:
            case Wi:
              x = wc;
              break;
            case Bi:
              x = Mc;
              break;
            case "scroll":
              x = mc;
              break;
            case "wheel":
              x = Dc;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = kc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Si;
          }
          var N = (t & 4) !== 0, ke = !N && e === "scroll", f = N ? v !== null ? v + "Capture" : null : v;
          N = [];
          for (var c = m, d; c !== null; ) {
            d = c;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, f !== null && (S = Bn(c, f), S != null && N.push(or(c, S, d)))), ke) break;
            c = c.return;
          }
          0 < N.length && (v = new x(v, C, null, n, g), w.push({ event: v, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== Bl && (C = n.relatedTarget || n.fromElement) && (Jt(C) || C[kt])) break e;
          if ((x || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (C = n.relatedTarget || n.toElement, x = m, C = C ? Jt(C) : null, C !== null && (ke = Zt(C), C !== ke || C.tag !== 5 && C.tag !== 6) && (C = null)) : (x = null, C = m), x !== C)) {
            if (N = gi, S = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (N = Si, S = "onPointerLeave", f = "onPointerEnter", c = "pointer"), ke = x == null ? v : xn(x), d = C == null ? v : xn(C), v = new N(S, c + "leave", x, n, g), v.target = ke, v.relatedTarget = d, S = null, Jt(g) === m && (N = new N(f, c + "enter", C, n, g), N.target = d, N.relatedTarget = ke, S = N), ke = S, x && C) t: {
              for (N = x, f = C, c = 0, d = N; d; d = Sn(d)) c++;
              for (d = 0, S = f; S; S = Sn(S)) d++;
              for (; 0 < c - d; ) N = Sn(N), c--;
              for (; 0 < d - c; ) f = Sn(f), d--;
              for (; c--; ) {
                if (N === f || f !== null && N === f.alternate) break t;
                N = Sn(N), f = Sn(f);
              }
              N = null;
            }
            else N = null;
            x !== null && Yi(w, v, x, N, !1), C !== null && ke !== null && Yi(w, ke, C, N, !0);
          }
        }
        e: {
          if (v = m ? xn(m) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var R = Vc;
          else if (Pi(v)) if (Ri) R = Kc;
          else {
            R = Hc;
            var L = $c;
          }
          else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (R = Qc);
          if (R && (R = R(e, m))) {
            Ni(w, R, n, g);
            break e;
          }
          L && L(e, v, m), e === "focusout" && (L = v._wrapperState) && L.controlled && v.type === "number" && Il(v, "number", v.value);
        }
        switch (L = m ? xn(m) : window, e) {
          case "focusin":
            (Pi(L) || L.contentEditable === "true") && (gn = L, fu = m, rr = null);
            break;
          case "focusout":
            rr = fu = gn = null;
            break;
          case "mousedown":
            du = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            du = !1, Ii(w, n, g);
            break;
          case "selectionchange":
            if (Gc) break;
          case "keydown":
          case "keyup":
            Ii(w, n, g);
        }
        var T;
        if (iu) e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
        else yn ? _i(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        j && (ki && n.locale !== "ko" && (yn || j !== "onCompositionStart" ? j === "onCompositionEnd" && yn && (T = vi()) : (jt = g, tu = "value" in jt ? jt.value : jt.textContent, yn = !0)), L = Hr(m, j), 0 < L.length && (j = new wi(j, e, null, n, g), w.push({ event: j, listeners: L }), T ? j.data = T : (T = Ci(n), T !== null && (j.data = T)))), (T = Fc ? Uc(e, n) : Ac(e, n)) && (m = Hr(m, "onBeforeInput"), 0 < m.length && (g = new wi("onBeforeInput", "beforeinput", null, n, g), w.push({ event: g, listeners: m }), g.data = T));
      }
      Qi(w, t);
    });
  }
  function or(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Bn(e, n), u != null && r.unshift(or(e, u, l)), u = Bn(e, t), u != null && r.push(or(e, u, l))), e = e.return;
    }
    return r;
  }
  function Sn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yi(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, m = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && m !== null && (i = m, l ? (s = Bn(n, u), s != null && o.unshift(or(n, s, i))) : l || (s = Bn(n, u), s != null && o.push(or(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var bc = /\r\n?/g, ef = /\u0000|\uFFFD/g;
  function Xi(e) {
    return (typeof e == "string" ? e : "" + e).replace(bc, `
`).replace(ef, "");
  }
  function Qr(e, t, n) {
    if (t = Xi(t), Xi(e) !== t && n) throw Error(p(425));
  }
  function Kr() {
  }
  var gu = null, wu = null;
  function Su(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ku = typeof setTimeout == "function" ? setTimeout : void 0, tf = typeof clearTimeout == "function" ? clearTimeout : void 0, Gi = typeof Promise == "function" ? Promise : void 0, nf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gi < "u" ? function(e) {
    return Gi.resolve(null).then(e).catch(rf);
  } : ku;
  function rf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xu(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Zn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Zn(t);
  }
  function It(e) {
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
  function Zi(e) {
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
  var kn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + kn, ir = "__reactProps$" + kn, kt = "__reactContainer$" + kn, Eu = "__reactEvents$" + kn, lf = "__reactListeners$" + kn, uf = "__reactHandles$" + kn;
  function Jt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[kt] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Zi(e); e !== null; ) {
          if (n = e[yt]) return n;
          e = Zi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function sr(e) {
    return e = e[yt] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Yr(e) {
    return e[ir] || null;
  }
  var _u = [], En = -1;
  function Ft(e) {
    return { current: e };
  }
  function ae(e) {
    0 > En || (e.current = _u[En], _u[En] = null, En--);
  }
  function oe(e, t) {
    En++, _u[En] = e.current, e.current = t;
  }
  var Ut = {}, Fe = Ft(Ut), Qe = Ft(!1), qt = Ut;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function Xr() {
    ae(Qe), ae(Fe);
  }
  function Ji(e, t, n) {
    if (Fe.current !== Ut) throw Error(p(168));
    oe(Fe, t), oe(Qe, n);
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, J(e) || "Unknown", l));
    return E({}, n, r);
  }
  function Gr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, qt = Fe.current, oe(Fe, e), oe(Qe, Qe.current), !0;
  }
  function bi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = qi(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, ae(Qe), ae(Fe), oe(Fe, e)) : ae(Qe), oe(Qe, n);
  }
  var xt = null, Zr = !1, Cu = !1;
  function es(e) {
    xt === null ? xt = [e] : xt.push(e);
  }
  function of(e) {
    Zr = !0, es(e);
  }
  function At() {
    if (!Cu && xt !== null) {
      Cu = !0;
      var e = 0, t = re;
      try {
        var n = xt;
        for (re = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        xt = null, Zr = !1;
      } catch (l) {
        throw xt !== null && (xt = xt.slice(e + 1)), ni(Yl, At), l;
      } finally {
        re = t, Cu = !1;
      }
    }
    return null;
  }
  var Cn = [], Pn = 0, Jr = null, qr = 0, rt = [], lt = 0, bt = null, Et = 1, _t = "";
  function en(e, t) {
    Cn[Pn++] = qr, Cn[Pn++] = Jr, Jr = e, qr = t;
  }
  function ts(e, t, n) {
    rt[lt++] = Et, rt[lt++] = _t, rt[lt++] = bt, bt = e;
    var r = Et;
    e = _t;
    var l = 32 - at(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - at(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Et = 1 << 32 - at(t) + l | n << l | r, _t = u + e;
    } else Et = 1 << u | n << l | r, _t = e;
  }
  function Pu(e) {
    e.return !== null && (en(e, 1), ts(e, 1, 0));
  }
  function Nu(e) {
    for (; e === Jr; ) Jr = Cn[--Pn], Cn[Pn] = null, qr = Cn[--Pn], Cn[Pn] = null;
    for (; e === bt; ) bt = rt[--lt], rt[lt] = null, _t = rt[--lt], rt[lt] = null, Et = rt[--lt], rt[lt] = null;
  }
  var qe = null, be = null, de = !1, ft = null;
  function ns(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function rs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, be = It(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, be = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: Et, overflow: _t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, be = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ru(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (de) {
      var t = be;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Ru(e)) throw Error(p(418));
          t = It(n.nextSibling);
          var r = qe;
          t && rs(e, t) ? ns(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, qe = e);
        }
      } else {
        if (Ru(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, de = !1, qe = e;
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qe = e;
  }
  function br(e) {
    if (e !== qe) return !1;
    if (!de) return ls(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Su(e.type, e.memoizedProps)), t && (t = be)) {
      if (Ru(e)) throw us(), Error(p(418));
      for (; t; ) ns(e, t), t = It(t.nextSibling);
    }
    if (ls(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = It(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = qe ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = be; e; ) e = It(e.nextSibling);
  }
  function Nn() {
    be = qe = null, de = !1;
  }
  function Lu(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var sf = ce.ReactCurrentBatchConfig;
  function ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function os(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
    function t(f, c) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
      }
    }
    function n(f, c) {
      if (!e) return null;
      for (; c !== null; ) t(f, c), c = c.sibling;
      return null;
    }
    function r(f, c) {
      for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f;
    }
    function l(f, c) {
      return f = Yt(f, c), f.index = 0, f.sibling = null, f;
    }
    function u(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, c, d, S) {
      return c === null || c.tag !== 6 ? (c = xo(d, f.mode, S), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, S) {
      var R = d.type;
      return R === ge ? g(f, c, d.props.children, S, d.key) : c !== null && (c.elementType === R || typeof R == "object" && R !== null && R.$$typeof === pe && os(R) === c.type) ? (S = l(c, d.props), S.ref = ar(f, c, d), S.return = f, S) : (S = _l(d.type, d.key, d.props, null, f.mode, S), S.ref = ar(f, c, d), S.return = f, S);
    }
    function m(f, c, d, S) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Eo(d, f.mode, S), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function g(f, c, d, S, R) {
      return c === null || c.tag !== 7 ? (c = an(d, f.mode, S, R), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function w(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = xo("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Ie:
            return d = _l(c.type, c.key, c.props, null, f.mode, d), d.ref = ar(f, null, c), d.return = f, d;
          case Ce:
            return c = Eo(c, f.mode, d), c.return = f, c;
          case pe:
            var S = c._init;
            return w(f, S(c._payload), d);
        }
        if (Un(c) || z(c)) return c = an(c, f.mode, d, null), c.return = f, c;
        el(f, c);
      }
      return null;
    }
    function v(f, c, d, S) {
      var R = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return R !== null ? null : i(f, c, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ie:
            return d.key === R ? s(f, c, d, S) : null;
          case Ce:
            return d.key === R ? m(f, c, d, S) : null;
          case pe:
            return R = d._init, v(
              f,
              c,
              R(d._payload),
              S
            );
        }
        if (Un(d) || z(d)) return R !== null ? null : g(f, c, d, S, null);
        el(f, d);
      }
      return null;
    }
    function x(f, c, d, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(d) || null, i(c, f, "" + S, R);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ie:
            return f = f.get(S.key === null ? d : S.key) || null, s(c, f, S, R);
          case Ce:
            return f = f.get(S.key === null ? d : S.key) || null, m(c, f, S, R);
          case pe:
            var L = S._init;
            return x(f, c, d, L(S._payload), R);
        }
        if (Un(S) || z(S)) return f = f.get(d) || null, g(c, f, S, R, null);
        el(c, S);
      }
      return null;
    }
    function C(f, c, d, S) {
      for (var R = null, L = null, T = c, j = c = 0, Oe = null; T !== null && j < d.length; j++) {
        T.index > j ? (Oe = T, T = null) : Oe = T.sibling;
        var ee = v(f, T, d[j], S);
        if (ee === null) {
          T === null && (T = Oe);
          break;
        }
        e && T && ee.alternate === null && t(f, T), c = u(ee, c, j), L === null ? R = ee : L.sibling = ee, L = ee, T = Oe;
      }
      if (j === d.length) return n(f, T), de && en(f, j), R;
      if (T === null) {
        for (; j < d.length; j++) T = w(f, d[j], S), T !== null && (c = u(T, c, j), L === null ? R = T : L.sibling = T, L = T);
        return de && en(f, j), R;
      }
      for (T = r(f, T); j < d.length; j++) Oe = x(T, f, j, d[j], S), Oe !== null && (e && Oe.alternate !== null && T.delete(Oe.key === null ? j : Oe.key), c = u(Oe, c, j), L === null ? R = Oe : L.sibling = Oe, L = Oe);
      return e && T.forEach(function(Xt) {
        return t(f, Xt);
      }), de && en(f, j), R;
    }
    function N(f, c, d, S) {
      var R = z(d);
      if (typeof R != "function") throw Error(p(150));
      if (d = R.call(d), d == null) throw Error(p(151));
      for (var L = R = null, T = c, j = c = 0, Oe = null, ee = d.next(); T !== null && !ee.done; j++, ee = d.next()) {
        T.index > j ? (Oe = T, T = null) : Oe = T.sibling;
        var Xt = v(f, T, ee.value, S);
        if (Xt === null) {
          T === null && (T = Oe);
          break;
        }
        e && T && Xt.alternate === null && t(f, T), c = u(Xt, c, j), L === null ? R = Xt : L.sibling = Xt, L = Xt, T = Oe;
      }
      if (ee.done) return n(
        f,
        T
      ), de && en(f, j), R;
      if (T === null) {
        for (; !ee.done; j++, ee = d.next()) ee = w(f, ee.value, S), ee !== null && (c = u(ee, c, j), L === null ? R = ee : L.sibling = ee, L = ee);
        return de && en(f, j), R;
      }
      for (T = r(f, T); !ee.done; j++, ee = d.next()) ee = x(T, f, j, ee.value, S), ee !== null && (e && ee.alternate !== null && T.delete(ee.key === null ? j : ee.key), c = u(ee, c, j), L === null ? R = ee : L.sibling = ee, L = ee);
      return e && T.forEach(function(Bf) {
        return t(f, Bf);
      }), de && en(f, j), R;
    }
    function ke(f, c, d, S) {
      if (typeof d == "object" && d !== null && d.type === ge && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ie:
            e: {
              for (var R = d.key, L = c; L !== null; ) {
                if (L.key === R) {
                  if (R = d.type, R === ge) {
                    if (L.tag === 7) {
                      n(f, L.sibling), c = l(L, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (L.elementType === R || typeof R == "object" && R !== null && R.$$typeof === pe && os(R) === L.type) {
                    n(f, L.sibling), c = l(L, d.props), c.ref = ar(f, L, d), c.return = f, f = c;
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === ge ? (c = an(d.props.children, f.mode, S, d.key), c.return = f, f = c) : (S = _l(d.type, d.key, d.props, null, f.mode, S), S.ref = ar(f, c, d), S.return = f, f = S);
            }
            return o(f);
          case Ce:
            e: {
              for (L = d.key; c !== null; ) {
                if (c.key === L) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
                else t(f, c);
                c = c.sibling;
              }
              c = Eo(d, f.mode, S), c.return = f, f = c;
            }
            return o(f);
          case pe:
            return L = d._init, ke(f, c, L(d._payload), S);
        }
        if (Un(d)) return C(f, c, d, S);
        if (z(d)) return N(f, c, d, S);
        el(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = xo(d, f.mode, S), c.return = f, f = c), o(f)) : n(f, c);
    }
    return ke;
  }
  var Rn = is(!0), ss = is(!1), tl = Ft(null), nl = null, zn = null, Tu = null;
  function Ou() {
    Tu = zn = nl = null;
  }
  function Mu(e) {
    var t = tl.current;
    ae(tl), e._currentValue = t;
  }
  function ju(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ln(e, t) {
    nl = e, Tu = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
      if (nl === null) throw Error(p(308));
      zn = e, nl.dependencies = { lanes: 0, firstContext: e };
    } else zn = zn.next = e;
    return t;
  }
  var tn = null;
  function Du(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Wt = !1;
  function Iu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function cs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (q & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
  }
  function rl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
    }
  }
  function fs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = o : u = u.next = o, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, m = s.next;
      s.next = null, o === null ? u = m : o.next = m, o = s;
      var g = e.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== o && (i === null ? g.firstBaseUpdate = m : i.next = m, g.lastBaseUpdate = s));
    }
    if (u !== null) {
      var w = l.baseState;
      o = 0, g = m = s = null, i = u;
      do {
        var v = i.lane, x = i.eventTime;
        if ((r & v) === v) {
          g !== null && (g = g.next = {
            eventTime: x,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, N = i;
            switch (v = t, x = n, N.tag) {
              case 1:
                if (C = N.payload, typeof C == "function") {
                  w = C.call(x, w, v);
                  break e;
                }
                w = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = N.payload, v = typeof C == "function" ? C.call(x, w, v) : C, v == null) break e;
                w = E({}, w, v);
                break e;
              case 2:
                Wt = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
        } else x = { eventTime: x, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, g === null ? (m = g = x, s = w) : g = g.next = x, o |= v;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (g === null && (s = w), l.baseState = s, l.firstBaseUpdate = m, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ln |= o, e.lanes = o, e.memoizedState = w;
    }
  }
  function ds(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(p(191, l));
        l.call(r);
      }
    }
  }
  var cr = {}, gt = Ft(cr), fr = Ft(cr), dr = Ft(cr);
  function nn(e) {
    if (e === cr) throw Error(p(174));
    return e;
  }
  function Fu(e, t) {
    switch (oe(dr, t), oe(fr, e), oe(gt, cr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ul(t, e);
    }
    ae(gt), oe(gt, t);
  }
  function Tn() {
    ae(gt), ae(fr), ae(dr);
  }
  function ps(e) {
    nn(dr.current);
    var t = nn(gt.current), n = Ul(t, e.type);
    t !== n && (oe(fr, e), oe(gt, n));
  }
  function Uu(e) {
    fr.current === e && (ae(gt), ae(fr));
  }
  var me = Ft(0);
  function ul(e) {
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
  var Au = [];
  function Wu() {
    for (var e = 0; e < Au.length; e++) Au[e]._workInProgressVersionPrimary = null;
    Au.length = 0;
  }
  var ol = ce.ReactCurrentDispatcher, Bu = ce.ReactCurrentBatchConfig, rn = 0, he = null, Re = null, Le = null, il = !1, pr = !1, mr = 0, af = 0;
  function Ue() {
    throw Error(p(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function $u(e, t, n, r, l, u) {
    if (rn = u, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ol.current = e === null || e.memoizedState === null ? pf : mf, e = n(r, l), pr) {
      u = 0;
      do {
        if (pr = !1, mr = 0, 25 <= u) throw Error(p(301));
        u += 1, Le = Re = null, t.updateQueue = null, ol.current = hf, e = n(r, l);
      } while (pr);
    }
    if (ol.current = cl, t = Re !== null && Re.next !== null, rn = 0, Le = Re = he = null, il = !1, t) throw Error(p(300));
    return e;
  }
  function Hu() {
    var e = mr !== 0;
    return mr = 0, e;
  }
  function wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Le === null ? he.memoizedState = Le = e : Le = Le.next = e, Le;
  }
  function ot() {
    if (Re === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Le === null ? he.memoizedState : Le.next;
    if (t !== null) Le = t, Re = e;
    else {
      if (e === null) throw Error(p(310));
      Re = e, e = { memoizedState: Re.memoizedState, baseState: Re.baseState, baseQueue: Re.baseQueue, queue: Re.queue, next: null }, Le === null ? he.memoizedState = Le = e : Le = Le.next = e;
    }
    return Le;
  }
  function hr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = Re, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, m = u;
      do {
        var g = m.lane;
        if ((rn & g) === g) s !== null && (s = s.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
        else {
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          };
          s === null ? (i = s = w, o = r) : s = s.next = w, he.lanes |= g, ln |= g;
        }
        m = m.next;
      } while (m !== null && m !== u);
      s === null ? o = r : s.next = i, ct(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, he.lanes |= u, ln |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ku(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      ct(u, t.memoizedState) || (Ye = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ms() {
  }
  function hs(e, t) {
    var n = he, r = ot(), l = t(), u = !ct(r.memoizedState, l);
    if (u && (r.memoizedState = l, Ye = !0), r = r.queue, Yu(gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Le !== null && Le.memoizedState.tag & 1) {
      if (n.flags |= 2048, vr(9, ys.bind(null, n, r, l, t), void 0, null), Te === null) throw Error(p(349));
      (rn & 30) !== 0 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ys(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ws(t) && Ss(e);
  }
  function gs(e, t, n) {
    return n(function() {
      ws(t) && Ss(e);
    });
  }
  function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Ss(e) {
    var t = Ct(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function ks(e) {
    var t = wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = df.bind(null, he, e), [t.memoizedState, e];
  }
  function vr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function xs() {
    return ot().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = wt();
    he.flags |= e, l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function al(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Re !== null) {
      var o = Re.memoizedState;
      if (u = o.destroy, r !== null && Vu(r, o.deps)) {
        l.memoizedState = vr(t, n, u, r);
        return;
      }
    }
    he.flags |= e, l.memoizedState = vr(1 | t, n, u, r);
  }
  function Es(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Yu(e, t) {
    return al(2048, 8, e, t);
  }
  function _s(e, t) {
    return al(4, 2, e, t);
  }
  function Cs(e, t) {
    return al(4, 4, e, t);
  }
  function Ps(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(4, 4, Ps.bind(null, t, e), n);
  }
  function Xu() {
  }
  function Rs(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function zs(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ls(e, t, n) {
    return (rn & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n) : (ct(n, t) || (n = oi(), he.lanes |= n, ln |= n, e.baseState = !0), t);
  }
  function cf(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Bu.transition;
    Bu.transition = {};
    try {
      e(!1), t();
    } finally {
      re = n, Bu.transition = r;
    }
  }
  function Ts() {
    return ot().memoizedState;
  }
  function ff(e, t, n) {
    var r = Qt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Os(e)) Ms(t, n);
    else if (n = as(e, t, n, r), n !== null) {
      var l = $e();
      ht(n, e, r, l), js(n, t, r);
    }
  }
  function df(e, t, n) {
    var r = Qt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Os(e)) Ms(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, ct(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Du(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = as(e, t, l, r), n !== null && (l = $e(), ht(n, e, r, l), js(n, t, r));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function Ms(e, t) {
    pr = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
    }
  }
  var cl = { readContext: ut, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, pf = { readContext: ut, useCallback: function(e, t) {
    return wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: Es, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, sl(
      4194308,
      4,
      Ps.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return sl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return sl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = wt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ff.bind(null, he, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ks, useDebugValue: Xu, useDeferredValue: function(e) {
    return wt().memoizedState = e;
  }, useTransition: function() {
    var e = ks(!1), t = e[0];
    return e = cf.bind(null, e[1]), wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = he, l = wt();
    if (de) {
      if (n === void 0) throw Error(p(407));
      n = n();
    } else {
      if (n = t(), Te === null) throw Error(p(349));
      (rn & 30) !== 0 || vs(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Es(gs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, vr(9, ys.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wt(), t = Te.identifierPrefix;
    if (de) {
      var n = _t, r = Et;
      n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = af++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, mf = {
    readContext: ut,
    useCallback: Rs,
    useContext: ut,
    useEffect: Yu,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: Cs,
    useMemo: zs,
    useReducer: Qu,
    useRef: xs,
    useState: function() {
      return Qu(hr);
    },
    useDebugValue: Xu,
    useDeferredValue: function(e) {
      var t = ot();
      return Ls(t, Re.memoizedState, e);
    },
    useTransition: function() {
      var e = Qu(hr)[0], t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: ms,
    useSyncExternalStore: hs,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, hf = { readContext: ut, useCallback: Rs, useContext: ut, useEffect: Yu, useImperativeHandle: Ns, useInsertionEffect: _s, useLayoutEffect: Cs, useMemo: zs, useReducer: Ku, useRef: xs, useState: function() {
    return Ku(hr);
  }, useDebugValue: Xu, useDeferredValue: function(e) {
    var t = ot();
    return Re === null ? t.memoizedState = e : Ls(t, Re.memoizedState, e);
  }, useTransition: function() {
    var e = Ku(hr)[0], t = ot().memoizedState;
    return [e, t];
  }, useMutableSource: ms, useSyncExternalStore: hs, useId: Ts, unstable_isNewReconciler: !1 };
  function dt(e, t) {
    if (e && e.defaultProps) {
      t = E({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Zt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Qt(e), u = Pt(r, l);
    u.payload = t, n != null && (u.callback = n), t = Bt(e, u, l), t !== null && (ht(t, e, l, r), rl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Qt(e), u = Pt(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Bt(e, u, l), t !== null && (ht(t, e, l, r), rl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = Qt(e), l = Pt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (ht(t, e, r, n), rl(t, e, r));
  } };
  function Ds(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, u) : !0;
  }
  function Is(e, t, n) {
    var r = !1, l = Ut, u = t.contextType;
    return typeof u == "object" && u !== null ? u = ut(u) : (l = Ke(t) ? qt : Fe.current, r = t.contextTypes, u = (r = r != null) ? _n(e, l) : Ut), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Fs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function Zu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Iu(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = ut(u) : (u = Ke(t) ? qt : Fe.current, l.context = _n(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Gu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), ll(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function On(e, t) {
    try {
      var n = "", r = t;
      do
        n += V(r), r = r.return;
      while (r);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ju(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function qu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var vf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      gl || (gl = !0, mo = r), qu(e, t);
    }, n;
  }
  function As(e, t, n) {
    n = Pt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        qu(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      qu(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Ws(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Lf.bind(null, e, t, n), t.then(e, e));
  }
  function Bs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var yf = ce.ReactCurrentOwner, Ye = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : Rn(t, e.child, n, r);
  }
  function $s(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Ln(t, l), r = $u(e, t, n, r, u, l), n = Hu(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && n && Pu(t), t.flags |= 1, Ve(e, t, r, l), t.child);
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ko(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Qs(e, t, u, r, l)) : (e = _l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : nr, n(o, r) && e.ref === t.ref) return Nt(e, t, l);
    }
    return t.flags |= 1, e = Yt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (nr(u, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return t.lanes = e.lanes, Nt(e, t, l);
    }
    return bu(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, oe(jn, et), et |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, oe(jn, et), et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, oe(jn, et), et |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, oe(jn, et), et |= r;
    return Ve(e, t, l, n), t.child;
  }
  function Ys(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bu(e, t, n, r, l) {
    var u = Ke(n) ? qt : Fe.current;
    return u = _n(t, u), Ln(t, l), n = $u(e, t, n, r, u, l), r = Hu(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && r && Pu(t), t.flags |= 1, Ve(e, t, n, l), t.child);
  }
  function Xs(e, t, n, r, l) {
    if (Ke(n)) {
      var u = !0;
      Gr(t);
    } else u = !1;
    if (Ln(t, l), t.stateNode === null) pl(e, t), Is(t, n, r), Zu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, m = n.contextType;
      typeof m == "object" && m !== null ? m = ut(m) : (m = Ke(n) ? qt : Fe.current, m = _n(t, m));
      var g = n.getDerivedStateFromProps, w = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      w || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== m) && Fs(t, o, r, m), Wt = !1;
      var v = t.memoizedState;
      o.state = v, ll(t, r, o, l), s = t.memoizedState, i !== r || v !== s || Qe.current || Wt ? (typeof g == "function" && (Gu(t, n, g, r), s = t.memoizedState), (i = Wt || Ds(t, n, i, r, v, s, m)) ? (w || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = m, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, cs(e, t), i = t.memoizedProps, m = t.type === t.elementType ? i : dt(t.type, i), o.props = m, w = t.pendingProps, v = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = ut(s) : (s = Ke(n) ? qt : Fe.current, s = _n(t, s));
      var x = n.getDerivedStateFromProps;
      (g = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== w || v !== s) && Fs(t, o, r, s), Wt = !1, v = t.memoizedState, o.state = v, ll(t, r, o, l);
      var C = t.memoizedState;
      i !== w || v !== C || Qe.current || Wt ? (typeof x == "function" && (Gu(t, n, x, r), C = t.memoizedState), (m = Wt || Ds(t, n, m, r, v, C, s) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), o.props = r, o.state = C, o.context = s, r = m) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return eo(e, t, n, r, u, l);
  }
  function eo(e, t, n, r, l, u) {
    Ys(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && bi(t, n, !1), Nt(e, t, u);
    r = t.stateNode, yf.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Rn(t, e.child, null, u), t.child = Rn(t, null, i, u)) : Ve(e, t, i, u), t.memoizedState = r.state, l && bi(t, n, !0), t.child;
  }
  function Gs(e) {
    var t = e.stateNode;
    t.pendingContext ? Ji(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ji(e, t.context, !1), Fu(e, t.containerInfo);
  }
  function Zs(e, t, n, r, l) {
    return Nn(), Lu(l), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var to = { dehydrated: null, treeContext: null, retryLane: 0 };
  function no(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = me.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), oe(me, l & 1), e === null)
      return zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = Cl(o, r, 0, null), e = an(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = no(n), t.memoizedState = to, e) : ro(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return gf(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Yt(i, u) : (u = an(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? no(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = to, r;
    }
    return u = e.child, e = u.sibling, r = Yt(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ro(e, t) {
    return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function dl(e, t, n, r) {
    return r !== null && Lu(r), Rn(t, e.child, null, n), e = ro(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ju(Error(p(422))), dl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), u = an(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && Rn(t, e.child, null, o), t.child.memoizedState = no(o), t.memoizedState = to, u);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(p(419)), r = Ju(u, r, void 0), dl(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, Ye || i) {
      if (r = Te, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ct(e, l), ht(r, e, l, -1));
      }
      return So(), r = Ju(Error(p(421))), dl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, be = It(l.nextSibling), qe = t, de = !0, ft = null, e !== null && (rt[lt++] = Et, rt[lt++] = _t, rt[lt++] = bt, Et = e.id, _t = e.overflow, bt = t), t = ro(t, r.children), t.flags |= 4096, t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ju(e.return, t, n);
  }
  function lo(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function bs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ve(e, t, r.children, n), r = me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qs(e, n, t);
        else if (e.tag === 19) qs(e, n, t);
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
      r &= 1;
    }
    if (oe(me, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), lo(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ul(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        lo(t, !0, n, null, u);
        break;
      case "together":
        lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function wf(e, t, n) {
    switch (t.tag) {
      case 3:
        Gs(t), Nn();
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Ke(t.type) && Gr(t);
        break;
      case 4:
        Fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        oe(tl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (oe(me, me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Js(e, t, n) : (oe(me, me.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
        oe(me, me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), oe(me, me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ks(e, t, n);
    }
    return Nt(e, t, n);
  }
  var ea, uo, ta, na;
  ea = function(e, t) {
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
  }, uo = function() {
  }, ta = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, nn(gt.current);
      var u = null;
      switch (n) {
        case "input":
          l = fn(e, l), r = fn(e, r), u = [];
          break;
        case "select":
          l = E({}, l, { value: void 0 }), r = E({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Fl(e, l), r = Fl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
      }
      Al(n, r);
      var o;
      n = null;
      for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
        var i = l[m];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (F.hasOwnProperty(m) ? u || (u = []) : (u = u || []).push(m, null));
      for (m in r) {
        var s = r[m];
        if (i = l?.[m], r.hasOwnProperty(m) && s !== i && (s != null || i != null)) if (m === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          m,
          n
        )), n = s;
        else m === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(m, s)) : m === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(m, "" + s) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (F.hasOwnProperty(m) ? (s != null && m === "onScroll" && se("scroll", e), u || i === s || (u = [])) : (u = u || []).push(m, s));
      }
      n && (u = u || []).push("style", n);
      var m = u;
      (t.updateQueue = m) && (t.flags |= 4);
    }
  }, na = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yr(e, t) {
    if (!de) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Sf(e, t, n) {
    var r = t.pendingProps;
    switch (Nu(t), t.tag) {
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
        return Ae(t), null;
      case 1:
        return Ke(t.type) && Xr(), Ae(t), null;
      case 3:
        return r = t.stateNode, Tn(), ae(Qe), ae(Fe), Wu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ft !== null && (yo(ft), ft = null))), uo(e, t), Ae(t), null;
      case 5:
        Uu(t);
        var l = nn(dr.current);
        if (n = t.type, e !== null && t.stateNode != null) ta(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Ae(t), null;
          }
          if (e = nn(gt.current), br(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[yt] = t, r[ir] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                se("cancel", r), se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < lr.length; l++) se(lr[l], r);
                break;
              case "source":
                se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  r
                ), se("load", r);
                break;
              case "details":
                se("toggle", r);
                break;
              case "input":
                Gt(r, u), se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, se("invalid", r);
                break;
              case "textarea":
                Ao(r, u), se("invalid", r);
            }
            Al(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Qr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Qr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : F.hasOwnProperty(o) && i != null && o === "onScroll" && se("scroll", r);
            }
            switch (n) {
              case "input":
                cn(r), Uo(r, u, !0);
                break;
              case "textarea":
                cn(r), Bo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Kr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[yt] = t, e[ir] = r, ea(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Wl(n, r), n) {
                case "dialog":
                  se("cancel", e), se("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  se("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < lr.length; l++) se(lr[l], e);
                  l = r;
                  break;
                case "source":
                  se("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  se(
                    "error",
                    e
                  ), se("load", e), l = r;
                  break;
                case "details":
                  se("toggle", e), l = r;
                  break;
                case "input":
                  Gt(e, r), l = fn(e, r), se("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = E({}, r, { value: void 0 }), se("invalid", e);
                  break;
                case "textarea":
                  Ao(e, r), l = Fl(e, r), se("invalid", e);
                  break;
                default:
                  l = r;
              }
              Al(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Qo(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $o(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && An(e, s) : typeof s == "number" && An(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (F.hasOwnProperty(u) ? s != null && u === "onScroll" && se("scroll", e) : s != null && ie(e, u, s, o));
              }
              switch (n) {
                case "input":
                  cn(e), Uo(e, r, !1);
                  break;
                case "textarea":
                  cn(e), Bo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? dn(e, !!r.multiple, u, !1) : r.defaultValue != null && dn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Kr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ae(t), null;
      case 6:
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = nn(dr.current), nn(gt.current), br(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (u = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
              case 3:
                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
        }
        return Ae(t), null;
      case 13:
        if (ae(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) us(), Nn(), t.flags |= 98560, u = !1;
          else if (u = br(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(p(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(p(317));
              u[yt] = t;
            } else Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), u = !1;
          } else ft !== null && (yo(ft), ft = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (me.current & 1) !== 0 ? ze === 0 && (ze = 3) : So())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
      case 4:
        return Tn(), uo(e, t), e === null && ur(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return Mu(t.type._context), Ae(t), null;
      case 17:
        return Ke(t.type) && Xr(), Ae(t), null;
      case 19:
        if (ae(me), u = t.memoizedState, u === null) return Ae(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) yr(u, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = ul(e), o !== null) {
              for (t.flags |= 128, yr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return oe(me, me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Se() > Dn && (t.flags |= 128, r = !0, yr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ul(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !de) return Ae(t), null;
          } else 2 * Se() - u.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128, r = !0, yr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Se(), t.sibling = null, n = me.current, oe(me, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
      case 22:
      case 23:
        return wo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (et & 1073741824) !== 0 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function kf(e, t) {
    switch (Nu(t), t.tag) {
      case 1:
        return Ke(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Tn(), ae(Qe), ae(Fe), Wu(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Uu(t), null;
      case 13:
        if (ae(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          Nn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(me), null;
      case 4:
        return Tn(), null;
      case 10:
        return Mu(t.type._context), null;
      case 22:
      case 23:
        return wo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1, We = !1, xf = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ve(e, t, r);
    }
    else n.current = null;
  }
  function oo(e, t, n) {
    try {
      n();
    } catch (r) {
      ve(e, t, r);
    }
  }
  var ra = !1;
  function Ef(e, t) {
    if (gu = jr, e = Di(), cu(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, i = -1, s = -1, m = 0, g = 0, w = e, v = null;
          t: for (; ; ) {
            for (var x; w !== n || l !== 0 && w.nodeType !== 3 || (i = o + l), w !== u || r !== 0 && w.nodeType !== 3 || (s = o + r), w.nodeType === 3 && (o += w.nodeValue.length), (x = w.firstChild) !== null; )
              v = w, w = x;
            for (; ; ) {
              if (w === e) break t;
              if (v === n && ++m === l && (i = o), v === u && ++g === r && (s = o), (x = w.nextSibling) !== null) break;
              w = v, v = w.parentNode;
            }
            w = x;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wu = { focusedElem: e, selectionRange: n }, jr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
    else for (; _ !== null; ) {
      t = _;
      try {
        var C = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var N = C.memoizedProps, ke = C.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? N : dt(t.type, N), ke);
              f.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (S) {
        ve(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _ = e;
        break;
      }
      _ = t.return;
    }
    return C = ra, ra = !1, C;
  }
  function gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && oo(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function io(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function la(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, la(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[ir], delete t[Eu], delete t[lf], delete t[uf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function oa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ua(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
    else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
  }
  function ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), e = e.sibling;
  }
  var Me = null, pt = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) ia(e, t, n), n = n.sibling;
  }
  function ia(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function") try {
      vt.onCommitFiberUnmount(Rr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        We || Mn(n, t);
      case 6:
        var r = Me, l = pt;
        Me = null, Vt(e, t, n), Me = r, pt = l, Me !== null && (pt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
      case 18:
        Me !== null && (pt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? xu(e.parentNode, n) : e.nodeType === 1 && xu(e, n), Zn(e)) : xu(Me, n.stateNode));
        break;
      case 4:
        r = Me, l = pt, Me = n.stateNode.containerInfo, pt = !0, Vt(e, t, n), Me = r, pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && oo(n, t, o), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!We && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ve(n, t, i);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, Vt(e, t, n), We = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new xf()), t.forEach(function(r) {
        var l = Of.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              Me = i.stateNode, pt = !1;
              break e;
            case 3:
              Me = i.stateNode.containerInfo, pt = !0;
              break e;
            case 4:
              Me = i.stateNode.containerInfo, pt = !0;
              break e;
          }
          i = i.return;
        }
        if (Me === null) throw Error(p(160));
        ia(u, o, l), Me = null, pt = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (m) {
        ve(l, t, m);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) aa(t, e), t = t.sibling;
  }
  function aa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mt(t, e), St(e), r & 4) {
          try {
            gr(3, e, e.return), hl(3, e);
          } catch (N) {
            ve(e, e.return, N);
          }
          try {
            gr(5, e, e.return);
          } catch (N) {
            ve(e, e.return, N);
          }
        }
        break;
      case 1:
        mt(t, e), St(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (mt(t, e), St(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            An(l, "");
          } catch (N) {
            ve(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && Fo(l, u), Wl(i, o);
            var m = Wl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var g = s[o], w = s[o + 1];
              g === "style" ? Qo(l, w) : g === "dangerouslySetInnerHTML" ? $o(l, w) : g === "children" ? An(l, w) : ie(l, g, w, m);
            }
            switch (i) {
              case "input":
                Dl(l, u);
                break;
              case "textarea":
                Wo(l, u);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var x = u.value;
                x != null ? dn(l, !!u.multiple, x, !1) : v !== !!u.multiple && (u.defaultValue != null ? dn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : dn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[ir] = u;
          } catch (N) {
            ve(e, e.return, N);
          }
        }
        break;
      case 6:
        if (mt(t, e), St(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (N) {
            ve(e, e.return, N);
          }
        }
        break;
      case 3:
        if (mt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Zn(t.containerInfo);
        } catch (N) {
          ve(e, e.return, N);
        }
        break;
      case 4:
        mt(t, e), St(e);
        break;
      case 13:
        mt(t, e), St(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (po = Se())), r & 4 && sa(e);
        break;
      case 22:
        if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (m = We) || g, mt(t, e), We = m) : mt(t, e), St(e), r & 8192) {
          if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0) for (_ = e, g = e.child; g !== null; ) {
            for (w = _ = g; _ !== null; ) {
              switch (v = _, x = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gr(4, v, v.return);
                  break;
                case 1:
                  Mn(v, v.return);
                  var C = v.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                    } catch (N) {
                      ve(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Mn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    da(w);
                    continue;
                  }
              }
              x !== null ? (x.return = v, _ = x) : da(w);
            }
            g = g.sibling;
          }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  l = w.stateNode, m ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = w.stateNode, s = w.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ho("display", o));
                } catch (N) {
                  ve(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (g === null) try {
                w.stateNode.nodeValue = m ? "" : w.memoizedProps;
              } catch (N) {
                ve(e, e.return, N);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              g === w && (g = null), w = w.return;
            }
            g === w && (g = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        mt(t, e), St(e), r & 4 && sa(e);
        break;
      case 21:
        break;
      default:
        mt(
          t,
          e
        ), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ua(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (An(l, ""), r.flags &= -33);
            var u = oa(e);
            ao(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = oa(e);
            so(e, i, o);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ve(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _f(e, t, n) {
    _ = e, ca(e);
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || We;
          i = ml;
          var m = We;
          if (ml = o, (We = s) && !m) for (_ = l; _ !== null; ) o = _, s = o.child, o.tag === 22 && o.memoizedState !== null ? pa(l) : s !== null ? (s.return = o, _ = s) : pa(l);
          for (; u !== null; ) _ = u, ca(u), u = u.sibling;
          _ = l, ml = i, We = m;
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, _ = u) : fa(e);
    }
  }
  function fa(e) {
    for (; _ !== null; ) {
      var t = _;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && ds(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ds(t, o, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var w = g.dehydrated;
                    w !== null && Zn(w);
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
              throw Error(p(163));
          }
          We || t.flags & 512 && io(t);
        } catch (v) {
          ve(t, t.return, v);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function da(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function pa(e) {
    for (; _ !== null; ) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (s) {
              ve(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ve(t, l, s);
              }
            }
            var u = t.return;
            try {
              io(t);
            } catch (s) {
              ve(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              io(t);
            } catch (s) {
              ve(t, o, s);
            }
        }
      } catch (s) {
        ve(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, _ = i;
        break;
      }
      _ = t.return;
    }
  }
  var Cf = Math.ceil, vl = ce.ReactCurrentDispatcher, co = ce.ReactCurrentOwner, it = ce.ReactCurrentBatchConfig, q = 0, Te = null, Ee = null, je = 0, et = 0, jn = Ft(0), ze = 0, wr = null, ln = 0, yl = 0, fo = 0, Sr = null, Xe = null, po = 0, Dn = 1 / 0, Rt = null, gl = !1, mo = null, $t = null, wl = !1, Ht = null, Sl = 0, kr = 0, ho = null, kl = -1, xl = 0;
  function $e() {
    return (q & 6) !== 0 ? Se() : kl !== -1 ? kl : kl = Se();
  }
  function Qt(e) {
    return (e.mode & 1) === 0 ? 1 : (q & 2) !== 0 && je !== 0 ? je & -je : sf.transition !== null ? (xl === 0 && (xl = oi()), xl) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hi(e.type)), e);
  }
  function ht(e, t, n, r) {
    if (50 < kr) throw kr = 0, ho = null, Error(p(185));
    Qn(e, n, r), ((q & 2) === 0 || e !== Te) && (e === Te && ((q & 2) === 0 && (yl |= n), ze === 4 && Kt(e, je)), Ge(e, r), n === 1 && q === 0 && (t.mode & 1) === 0 && (Dn = Se() + 500, Zr && At()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    ic(e, t);
    var r = Tr(e, e === Te ? je : 0);
    if (r === 0) n !== null && ri(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ri(n), t === 1) e.tag === 0 ? of(ha.bind(null, e)) : es(ha.bind(null, e)), nf(function() {
        (q & 6) === 0 && At();
      }), n = null;
      else {
        switch (ii(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = li;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = ui;
            break;
          default:
            n = Nr;
        }
        n = Ea(n, ma.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ma(e, t) {
    if (kl = -1, xl = 0, (q & 6) !== 0) throw Error(p(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = Tr(e, e === Te ? je : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var u = ya();
      (Te !== e || je !== t) && (Rt = null, Dn = Se() + 500, on(e, t));
      do
        try {
          Rf();
          break;
        } catch (i) {
          va(e, i);
        }
      while (!0);
      Ou(), vl.current = u, q = l, Ee !== null ? t = 0 : (Te = null, je = 0, t = ze);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xl(e), l !== 0 && (r = l, t = vo(e, l))), t === 1) throw n = wr, on(e, 0), Kt(e, r), Ge(e, Se()), n;
      if (t === 6) Kt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Pf(l) && (t = El(e, r), t === 2 && (u = Xl(e), u !== 0 && (r = u, t = vo(e, u))), t === 1)) throw n = wr, on(e, 0), Kt(e, r), Ge(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            sn(e, Xe, Rt);
            break;
          case 3:
            if (Kt(e, r), (r & 130023424) === r && (t = po + 500 - Se(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ku(sn.bind(null, e, Xe, Rt), t);
              break;
            }
            sn(e, Xe, Rt);
            break;
          case 4:
            if (Kt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - at(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ku(sn.bind(null, e, Xe, Rt), r);
              break;
            }
            sn(e, Xe, Rt);
            break;
          case 5:
            sn(e, Xe, Rt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Ge(e, Se()), e.callbackNode === n ? ma.bind(null, e) : null;
  }
  function vo(e, t) {
    var n = Sr;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = El(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && yo(t)), e;
  }
  function yo(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e);
  }
  function Pf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!ct(u(), l)) return !1;
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
  function Kt(e, t) {
    for (t &= ~fo, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - at(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ha(e) {
    if ((q & 6) !== 0) throw Error(p(327));
    In();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return Ge(e, Se()), null;
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && (t = r, n = vo(e, r));
    }
    if (n === 1) throw n = wr, on(e, 0), Kt(e, t), Ge(e, Se()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Xe, Rt), Ge(e, Se()), null;
  }
  function go(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      q = n, q === 0 && (Dn = Se() + 500, Zr && At());
    }
  }
  function un(e) {
    Ht !== null && Ht.tag === 0 && (q & 6) === 0 && In();
    var t = q;
    q |= 1;
    var n = it.transition, r = re;
    try {
      if (it.transition = null, re = 1, e) return e();
    } finally {
      re = r, it.transition = n, q = t, (q & 6) === 0 && At();
    }
  }
  function wo() {
    et = jn.current, ae(jn);
  }
  function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, tf(n)), Ee !== null) for (n = Ee.return; n !== null; ) {
      var r = n;
      switch (Nu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xr();
          break;
        case 3:
          Tn(), ae(Qe), ae(Fe), Wu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          ae(me);
          break;
        case 19:
          ae(me);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          wo();
      }
      n = n.return;
    }
    if (Te = e, Ee = e = Yt(e.current, null), je = et = t, ze = 0, wr = null, fo = yl = ln = 0, Xe = Sr = null, tn !== null) {
      for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      tn = null;
    }
    return e;
  }
  function va(e, t) {
    do {
      var n = Ee;
      try {
        if (Ou(), ol.current = cl, il) {
          for (var r = he.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          il = !1;
        }
        if (rn = 0, Le = Re = he = null, pr = !1, mr = 0, co.current = null, n === null || n.return === null) {
          ze = 1, wr = t, Ee = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = je, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var m = s, g = i, w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
            }
            var x = Bs(o);
            if (x !== null) {
              x.flags &= -257, Vs(x, o, i, u, t), x.mode & 1 && Ws(u, m, t), t = x, s = m;
              var C = t.updateQueue;
              if (C === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), t.updateQueue = N;
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ws(u, m, t), So();
                break e;
              }
              s = Error(p(426));
            }
          } else if (de && i.mode & 1) {
            var ke = Bs(o);
            if (ke !== null) {
              (ke.flags & 65536) === 0 && (ke.flags |= 256), Vs(ke, o, i, u, t), Lu(On(s, i));
              break e;
            }
          }
          u = s = On(s, i), ze !== 4 && (ze = 2), Sr === null ? Sr = [u] : Sr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var f = Us(u, s, t);
                fs(u, f);
                break e;
              case 1:
                i = s;
                var c = u.type, d = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && ($t === null || !$t.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var S = As(u, i, t);
                  fs(u, S);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        wa(n);
      } catch (R) {
        t = R, Ee === n && n !== null && (Ee = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = vl.current;
    return vl.current = cl, e === null ? cl : e;
  }
  function So() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), Te === null || (ln & 268435455) === 0 && (yl & 268435455) === 0 || Kt(Te, je);
  }
  function El(e, t) {
    var n = q;
    q |= 2;
    var r = ya();
    (Te !== e || je !== t) && (Rt = null, on(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if (Ou(), q = n, vl.current = r, Ee !== null) throw Error(p(261));
    return Te = null, je = 0, ze;
  }
  function Nf() {
    for (; Ee !== null; ) ga(Ee);
  }
  function Rf() {
    for (; Ee !== null && !qa(); ) ga(Ee);
  }
  function ga(e) {
    var t = xa(e.alternate, e, et);
    e.memoizedProps = e.pendingProps, t === null ? wa(e) : Ee = t, co.current = null;
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Sf(n, t, et), n !== null) {
          Ee = n;
          return;
        }
      } else {
        if (n = kf(n, t), n !== null) {
          n.flags &= 32767, Ee = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ze = 6, Ee = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function sn(e, t, n) {
    var r = re, l = it.transition;
    try {
      it.transition = null, re = 1, zf(e, t, n, r);
    } finally {
      it.transition = l, re = r;
    }
    return null;
  }
  function zf(e, t, n, r) {
    do
      In();
    while (Ht !== null);
    if ((q & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (sc(e, u), e === Te && (Ee = Te = null, je = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || wl || (wl = !0, Ea(Nr, function() {
      return In(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = it.transition, it.transition = null;
      var o = re;
      re = 1;
      var i = q;
      q |= 4, co.current = null, Ef(e, n), aa(n, e), Xc(wu), jr = !!gu, wu = gu = null, e.current = n, _f(n), ba(), q = i, re = o, it.transition = u;
    } else e.current = n;
    if (wl && (wl = !1, Ht = e, Sl = l), u = e.pendingLanes, u === 0 && ($t = null), nc(n.stateNode), Ge(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (gl) throw gl = !1, e = mo, mo = null, e;
    return (Sl & 1) !== 0 && e.tag !== 0 && In(), u = e.pendingLanes, (u & 1) !== 0 ? e === ho ? kr++ : (kr = 0, ho = e) : kr = 0, At(), null;
  }
  function In() {
    if (Ht !== null) {
      var e = ii(Sl), t = it.transition, n = re;
      try {
        if (it.transition = null, re = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, Sl = 0, (q & 6) !== 0) throw Error(p(331));
          var l = q;
          for (q |= 4, _ = e.current; _ !== null; ) {
            var u = _, o = u.child;
            if ((_.flags & 16) !== 0) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var m = i[s];
                  for (_ = m; _ !== null; ) {
                    var g = _;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gr(8, g, u);
                    }
                    var w = g.child;
                    if (w !== null) w.return = g, _ = w;
                    else for (; _ !== null; ) {
                      g = _;
                      var v = g.sibling, x = g.return;
                      if (la(g), g === m) {
                        _ = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = x, _ = v;
                        break;
                      }
                      _ = x;
                    }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var N = C.child;
                  if (N !== null) {
                    C.child = null;
                    do {
                      var ke = N.sibling;
                      N.sibling = null, N = ke;
                    } while (N !== null);
                  }
                }
                _ = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && o !== null) o.return = u, _ = o;
            else e: for (; _ !== null; ) {
              if (u = _, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  gr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, _ = f;
                break e;
              }
              _ = u.return;
            }
          }
          var c = e.current;
          for (_ = c; _ !== null; ) {
            o = _;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, _ = d;
            else e: for (o = c; _ !== null; ) {
              if (i = _, (i.flags & 2048) !== 0) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hl(9, i);
                }
              } catch (R) {
                ve(i, i.return, R);
              }
              if (i === o) {
                _ = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                S.return = i.return, _ = S;
                break e;
              }
              _ = i.return;
            }
          }
          if (q = l, At(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
            vt.onPostCommitFiberRoot(Rr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        re = n, it.transition = t;
      }
    }
    return !1;
  }
  function Sa(e, t, n) {
    t = On(n, t), t = Us(e, t, 1), e = Bt(e, t, 1), t = $e(), e !== null && (Qn(e, 1, t), Ge(e, t));
  }
  function ve(e, t, n) {
    if (e.tag === 3) Sa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Sa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
          e = On(n, e), e = As(t, e, 1), t = Bt(t, e, 1), e = $e(), t !== null && (Qn(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Lf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (je & n) === n && (ze === 4 || ze === 3 && (je & 130023424) === je && 500 > Se() - po ? on(e, 0) : fo |= n), Ge(e, t);
  }
  function ka(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Lr, Lr <<= 1, (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = $e();
    e = Ct(e, t), e !== null && (Qn(e, t, n), Ge(e, n));
  }
  function Tf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ka(e, n);
  }
  function Of(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(t), ka(e, n);
  }
  var xa;
  xa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Ye = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ye = !1, wf(e, t, n);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, de && (t.flags & 1048576) !== 0 && ts(t, qr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        pl(e, t), e = t.pendingProps;
        var l = _n(t, Fe.current);
        Ln(t, n), l = $u(null, t, r, e, l, n);
        var u = Hu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (u = !0, Gr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Iu(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Zu(t, r, e, n), t = eo(null, t, r, !0, u, n)) : (t.tag = 0, de && u && Pu(t), Ve(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (pl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = jf(r), e = dt(r, e), l) {
            case 0:
              t = bu(null, t, r, e, n);
              break e;
            case 1:
              t = Xs(null, t, r, e, n);
              break e;
            case 11:
              t = $s(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(p(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), bu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Xs(e, t, r, l, n);
      case 3:
        e: {
          if (Gs(t), e === null) throw Error(p(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, cs(e, t), ll(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = On(Error(p(423)), t), t = Zs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = On(Error(p(424)), t), t = Zs(e, t, r, n, l);
            break e;
          } else for (be = It(t.stateNode.containerInfo.firstChild), qe = t, de = !0, ft = null, n = ss(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nn(), r === l) {
              t = Nt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ps(t), e === null && zu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, Su(r, l) ? o = null : u !== null && Su(r, u) && (t.flags |= 32), Ys(e, t), Ve(e, t, o, n), t.child;
      case 6:
        return e === null && zu(t), null;
      case 13:
        return Js(e, t, n);
      case 4:
        return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), $s(e, t, r, l, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, oe(tl, r._currentValue), r._currentValue = o, u !== null) if (ct(u.value, o)) {
            if (u.children === l.children && !Qe.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = Pt(-1, n & -n), s.tag = 2;
                    var m = u.updateQueue;
                    if (m !== null) {
                      m = m.shared;
                      var g = m.pending;
                      g === null ? s.next = s : (s.next = g.next, g.next = s), m.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), ju(
                    u.return,
                    n,
                    t
                  ), i.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(p(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), ju(o, n, t), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Ve(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Ln(t, n), l = ut(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), Hs(e, t, r, l, n);
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), pl(e, t), t.tag = 1, Ke(r) ? (e = !0, Gr(t)) : e = !1, Ln(t, n), Is(t, r, l), Zu(t, r, l, n), eo(null, t, r, !0, e, n);
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Ea(e, t) {
    return ni(e, t);
  }
  function Mf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(e, t, n, r) {
    return new Mf(e, t, n, r);
  }
  function ko(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jf(e) {
    if (typeof e == "function") return ko(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === H) return 11;
      if (e === Ne) return 14;
    }
    return 2;
  }
  function Yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function _l(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") ko(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case ge:
        return an(n.children, l, u, t);
      case Pe:
        o = 8, l |= 8;
        break;
      case tt:
        return e = st(12, n, t, l | 2), e.elementType = tt, e.lanes = u, e;
      case fe:
        return e = st(13, n, t, l), e.elementType = fe, e.lanes = u, e;
      case we:
        return e = st(19, n, t, l), e.elementType = we, e.lanes = u, e;
      case ne:
        return Cl(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case He:
            o = 10;
            break e;
          case nt:
            o = 9;
            break e;
          case H:
            o = 11;
            break e;
          case Ne:
            o = 14;
            break e;
          case pe:
            o = 16, r = null;
            break e;
        }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
    return t = st(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function an(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e;
  }
  function Cl(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = ne, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function xo(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e;
  }
  function Eo(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Df(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _o(e, t, n, r, l, u, o, i, s) {
    return e = new Df(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = st(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(u), e;
  }
  function If(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function _a(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return qi(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, u, o, i, s) {
    return e = _o(n, r, !0, e, l, u, o, i, s), e.context = _a(null), n = e.current, r = $e(), l = Qt(n), u = Pt(r, l), u.callback = t ?? null, Bt(n, u, l), e.current.lanes = l, Qn(e, l, r), Ge(e, r), e;
  }
  function Pl(e, t, n, r) {
    var l = t.current, u = $e(), o = Qt(l);
    return n = _a(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, o), e !== null && (ht(e, l, o, u), rl(e, l, o)), o;
  }
  function Nl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Pa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Co(e, t) {
    Pa(e, t), (e = e.alternate) && Pa(e, t);
  }
  function Ff() {
    return null;
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Po(e) {
    this._internalRoot = e;
  }
  Rl.prototype.render = Po.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    Pl(e, t, null, null);
  }, Rl.prototype.unmount = Po.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      un(function() {
        Pl(null, e, null, null);
      }), t[kt] = null;
    }
  };
  function Rl(e) {
    this._internalRoot = e;
  }
  Rl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ci();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++) ;
      Mt.splice(n, 0, e), n === 0 && pi(e);
    }
  };
  function No(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ra() {
  }
  function Uf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var m = Nl(o);
          u.call(m);
        };
      }
      var o = Ca(t, r, e, 0, null, !1, !1, "", Ra);
      return e._reactRootContainer = o, e[kt] = o.current, ur(e.nodeType === 8 ? e.parentNode : e), un(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var m = Nl(s);
        i.call(m);
      };
    }
    var s = _o(e, 0, !1, null, null, !1, !1, "", Ra);
    return e._reactRootContainer = s, e[kt] = s.current, ur(e.nodeType === 8 ? e.parentNode : e), un(function() {
      Pl(t, s, n, r);
    }), s;
  }
  function Ll(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Nl(o);
          i.call(s);
        };
      }
      Pl(t, o, e, l);
    } else o = Uf(n, t, e, l, r);
    return Nl(o);
  }
  si = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hn(t.pendingLanes);
          n !== 0 && (Zl(t, n | 1), Ge(t, Se()), (q & 6) === 0 && (Dn = Se() + 500, At()));
        }
        break;
      case 13:
        un(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = $e();
            ht(r, e, 1, l);
          }
        }), Co(e, 1);
    }
  }, Jl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = $e();
        ht(t, e, 134217728, n);
      }
      Co(e, 134217728);
    }
  }, ai = function(e) {
    if (e.tag === 13) {
      var t = Qt(e), n = Ct(e, t);
      if (n !== null) {
        var r = $e();
        ht(n, e, t, r);
      }
      Co(e, t);
    }
  }, ci = function() {
    return re;
  }, fi = function(e, t) {
    var n = re;
    try {
      return re = e, t();
    } finally {
      re = n;
    }
  }, $l = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Yr(r);
              if (!l) throw Error(p(90));
              Fn(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Wo(e, n);
        break;
      case "select":
        t = n.value, t != null && dn(e, !!n.multiple, t, !1);
    }
  }, Go = go, Zo = un;
  var Af = { usingClientEntryPoint: !1, Events: [sr, xn, Yr, Yo, Xo, go] }, xr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wf = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ei(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: xr.findFiberByHostInstance || Ff, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Rr = Tl.inject(Wf), vt = Tl;
    } catch {
    }
  }
  return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af, Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!No(t)) throw Error(p(200));
    return If(e, t, null, n);
  }, Ze.createRoot = function(e, t) {
    if (!No(e)) throw Error(p(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = _o(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new Po(t);
  }, Ze.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = ei(t), e = e === null ? null : e.stateNode, e;
  }, Ze.flushSync = function(e) {
    return un(e);
  }, Ze.hydrate = function(e, t, n) {
    if (!zl(t)) throw Error(p(200));
    return Ll(null, e, t, !0, n);
  }, Ze.hydrateRoot = function(e, t, n) {
    if (!No(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ca(t, null, e, 1, n ?? null, l, !1, u, o), e[kt] = t.current, ur(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Rl(t);
  }, Ze.render = function(e, t, n) {
    if (!zl(t)) throw Error(p(200));
    return Ll(null, e, t, !1, n);
  }, Ze.unmountComponentAtNode = function(e) {
    if (!zl(e)) throw Error(p(40));
    return e._reactRootContainer ? (un(function() {
      Ll(null, null, e, !1, function() {
        e._reactRootContainer = null, e[kt] = null;
      });
    }), !0) : !1;
  }, Ze.unstable_batchedUpdates = go, Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zl(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return Ll(e, t, n, !1, r);
  }, Ze.version = "18.3.1-next-f1338f8080-20240426", Ze;
}
var Ia;
function Xf() {
  if (Ia) return Lo.exports;
  Ia = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (P) {
        console.error(P);
      }
  }
  return y(), Lo.exports = Yf(), Lo.exports;
}
var Fa;
function Gf() {
  if (Fa) return Ol;
  Fa = 1;
  var y = Xf();
  return Ol.createRoot = y.createRoot, Ol.hydrateRoot = y.hydrateRoot, Ol;
}
var Zf = Gf(), Ba = D.forwardRef(({ transition: y, ...P }, p) => {
  let A = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", transition: y ? `clip-path ${y}` : void 0, userSelect: "none", willChange: "clip-path, transition", KhtmlUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none" };
  return Z.jsx("div", { ...P, style: A, "data-rcs": "clip-item", ref: p });
});
Ba.displayName = "ContainerClip";
var Va = D.forwardRef(({ children: y, disabled: P, portrait: p, position: A, transition: F }, U) => {
  let te = { position: "absolute", top: 0, width: p ? "100%" : void 0, height: p ? void 0 : "100%", background: "none", border: 0, padding: 0, pointerEvents: "all", appearance: "none", WebkitAppearance: "none", MozAppearance: "none", outline: 0, transform: p ? "translate3d(0, -50% ,0)" : "translate3d(-50%, 0, 0)", transition: F ? `${p ? "top" : "left"} ${F}` : void 0 };
  return Z.jsx("button", { ref: U, "aria-label": "Drag to move or focus and use arrow keys", "aria-orientation": p ? "vertical" : "horizontal", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": A, "data-rcs": "handle-container", disabled: P, role: "slider", style: te, children: y });
});
Va.displayName = "ThisHandleContainer";
var Ua = ({ flip: y }) => Z.jsx("div", { className: "__rcs-handle-arrow", style: { width: 0, height: 0, borderTop: "8px solid transparent", borderRight: "10px solid", borderBottom: "8px solid transparent", transform: y ? "rotate(180deg)" : void 0 } }), Jf = ({ className: y = "__rcs-handle-root", disabled: P, buttonStyle: p, linesStyle: A, portrait: F, style: U, ...te }) => {
  let b = { display: "flex", flexDirection: F ? "row" : "column", placeItems: "center", height: "100%", cursor: P ? "not-allowed" : F ? "ns-resize" : "ew-resize", pointerEvents: "none", color: "#fff", ...U }, W = { flexGrow: 1, height: F ? 2 : "100%", width: F ? "100%" : 2, backgroundColor: "currentColor", pointerEvents: "auto", boxShadow: "0 0 4px rgba(0,0,0,.5)", ...A }, le = { display: "grid", gridAutoFlow: "column", gap: 8, placeContent: "center", flexShrink: 0, width: 56, height: 56, borderRadius: "50%", borderStyle: "solid", borderWidth: 2, pointerEvents: "auto", backdropFilter: "blur(7px)", WebkitBackdropFilter: "blur(7px)", backgroundColor: "rgba(0, 0, 0, 0.125)", boxShadow: "0 0 4px rgba(0,0,0,.35)", transform: F ? "rotate(90deg)" : void 0, ...p };
  return Z.jsxs("div", { ...te, className: y, style: b, children: [Z.jsx("div", { className: "__rcs-handle-line", style: W }), Z.jsxs("div", { className: "__rcs-handle-button", style: le, children: [Z.jsx(Ua, {}), Z.jsx(Ua, { flip: !0 })] }), Z.jsx("div", { className: "__rcs-handle-line", style: W })] });
}, $a = ((y) => (y.ARROW_LEFT = "ArrowLeft", y.ARROW_RIGHT = "ArrowRight", y.ARROW_UP = "ArrowUp", y.ARROW_DOWN = "ArrowDown", y))($a || {}), qf = ({ boxSizing: y = "border-box", objectFit: P = "cover", objectPosition: p = "center center", ...A } = {}) => ({ display: "block", width: "100%", height: "100%", maxWidth: "100%", boxSizing: y, objectFit: P, objectPosition: p, ...A }), bf = (y) => {
  let P = D.useRef(y);
  return D.useEffect(() => {
    P.current = y;
  }), P.current;
}, Mo = (y, P, p, A) => {
  let F = D.useRef();
  D.useEffect(() => {
    F.current = P;
  }, [P]), D.useEffect(() => {
    if (!(p && p.addEventListener)) return;
    let U = (te) => F.current && F.current(te);
    return p.addEventListener(y, U, A), () => {
      p.removeEventListener(y, U, A);
    };
  }, [y, p, A]);
}, ed = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? D.useLayoutEffect : D.useEffect, td = (y, P) => {
  let p = D.useRef(), A = D.useCallback(() => {
    y.current && p.current && p.current.observe(y.current);
  }, [y]);
  ed(() => (p.current = new ResizeObserver(([F]) => P(F.contentRect)), A(), () => {
    p.current && p.current.disconnect();
  }), [P, A]);
}, Ml = { capture: !1, passive: !0 }, jo = { capture: !0, passive: !1 }, nd = (y) => {
  y.preventDefault(), y.currentTarget.focus();
}, Ha = D.forwardRef(({ boundsPadding: y = 0, browsingContext: P = globalThis, changePositionOnHover: p = !1, disabled: A = !1, handle: F, itemOne: U, itemTwo: te, keyboardIncrement: b = "5%", onlyHandleDraggable: W = !1, onPositionChange: le, portrait: B = !1, position: X = 50, style: G, transition: _e, ...ye }, Y) => {
  let M = D.useRef(null), De = D.useRef(null), xe = D.useRef(null), ie = D.useRef(X), [ce, Ie] = D.useState(!1), [Ce, ge] = D.useState(!0), Pe = D.useRef(!1), [tt, He] = D.useState(), nt = bf(X), H = D.useCallback(function({ x: a, y: h, isOffset: O }) {
    let I = M.current, V = xe.current, Q = De.current, { width: J, height: K, left: ue, top: Be } = I.getBoundingClientRect();
    if (J === 0 || K === 0) return;
    let cn = B ? O ? h - Be - P.scrollY : h : O ? a - ue - P.scrollX : a, Fn = Math.min(Math.max(cn / (B ? K : J) * 100, 0), 100), zt = B ? K / (I.offsetHeight || 1) : J / (I.offsetWidth || 1), fn = y * zt / (B ? K : J) * 100, Gt = Math.min(Math.max(Fn, fn * zt), 100 - fn * zt);
    ie.current = Fn, V.setAttribute("aria-valuenow", `${Math.round(ie.current)}`), V.style.top = B ? `${Gt}%` : "0", V.style.left = B ? "0" : `${Gt}%`, Q.style.clipPath = B ? `inset(${Gt}% 0 0 0)` : `inset(0 0 0 ${Gt}%)`, le && le(ie.current);
  }, [y, le, B, P]);
  D.useEffect(() => {
    let { width: a, height: h } = M.current.getBoundingClientRect(), O = X === nt ? ie.current : X;
    H({ x: a / 100 * O, y: h / 100 * O });
  }, [y, X, B, nt, H]);
  let fe = D.useCallback((a) => {
    a.preventDefault(), !(A || a.button !== 0) && (H({ isOffset: !0, x: a.pageX, y: a.pageY }), Ie(!0), ge(!0));
  }, [A, H]), we = D.useCallback(function(a) {
    H({ isOffset: !0, x: a.pageX, y: a.pageY }), ge(!1);
  }, [H]), Ne = D.useCallback(() => {
    Ie(!1), ge(!0);
  }, []), pe = D.useCallback(({ width: a, height: h }) => {
    let { width: O, height: I } = M.current.getBoundingClientRect();
    H({ x: a / 100 * ie.current * O / a, y: h / 100 * ie.current * I / h });
  }, [H]), ne = D.useCallback((a) => {
    if (!Object.values($a).includes(a.key)) return;
    a.preventDefault(), ge(!0);
    let { top: h, left: O } = xe.current.getBoundingClientRect(), { width: I, height: V } = M.current.getBoundingClientRect(), Q = typeof b == "string" ? parseFloat(b) : b / I * 100, J = B ? a.key === "ArrowLeft" || a.key === "ArrowDown" : a.key === "ArrowRight" || a.key === "ArrowUp", K = Math.min(Math.max(J ? ie.current + Q : ie.current - Q, 0), 100);
    H({ x: B ? O : I * K / 100, y: B ? V * K / 100 : h });
  }, [b, B, H]);
  D.useEffect(() => {
    He(W ? xe.current : M.current);
  }, [W]), D.useEffect(() => {
    let a = M.current, h = () => {
      ce || Ne();
    };
    return p && (a.addEventListener("pointermove", we, Ml), a.addEventListener("pointerleave", h, Ml)), () => {
      a.removeEventListener("pointermove", we), a.removeEventListener("pointerleave", h);
    };
  }, [p, we, Ne, ce]), D.useEffect(() => (ce && !Pe.current && (P.addEventListener("pointermove", we, Ml), P.addEventListener("pointerup", Ne, Ml), Pe.current = !0), () => {
    Pe.current && (P.removeEventListener("pointermove", we), P.removeEventListener("pointerup", Ne), Pe.current = !1);
  }), [we, Ne, ce, P]), D.useImperativeHandle(Y, () => ({ rootContainer: M.current, handleContainer: xe.current, setPosition(a) {
    let { width: h, height: O } = M.current.getBoundingClientRect();
    H({ x: h / 100 * a, y: O / 100 * a });
  } }), [H]), td(M, pe), Mo("keydown", ne, xe.current, jo), Mo("click", nd, xe.current, jo), Mo("pointerdown", fe, tt, jo);
  let k = F || Z.jsx(Jf, { disabled: A, portrait: B }), z = Ce ? _e : void 0, E = { position: "relative", display: "flex", overflow: "hidden", cursor: ce ? B ? "ns-resize" : "ew-resize" : void 0, touchAction: "none", userSelect: "none", KhtmlUserSelect: "none", msUserSelect: "none", MozUserSelect: "none", WebkitUserSelect: "none", ...G };
  return Z.jsxs("div", { ...ye, ref: M, style: E, "data-rcs": "root", children: [U, Z.jsx(Ba, { ref: De, transition: z, children: te }), Z.jsx(Va, { disabled: A, portrait: B, position: Math.round(ie.current), ref: xe, transition: z, children: k })] });
});
Ha.displayName = "ReactCompareSlider";
var Do = D.forwardRef(({ style: y, ...P }, p) => {
  let A = qf(y);
  return Z.jsx("img", { ref: p, ...P, style: A, "data-rcs": "image" });
});
Do.displayName = "ReactCompareSliderImage";
function Aa(y) {
  if (!y || y.startsWith("http://") || y.startsWith("https://") || y.startsWith("data:"))
    return y;
  if (y.startsWith("/media/") || y.startsWith("media/")) {
    const P = y.startsWith("/") ? y : "/" + y;
    let p = "";
    if (window.__streamlit?.DOWNLOAD_ASSETS_BASE_URL ? p = window.__streamlit.DOWNLOAD_ASSETS_BASE_URL : window.location && (p = window.location.origin + window.location.pathname), p)
      try {
        const A = new URL(p);
        let F = A.pathname;
        if (F.endsWith("/"))
          F = F.slice(0, -1);
        else {
          const U = F.lastIndexOf("/");
          F = U > 0 ? F.substring(0, U) : "";
        }
        return A.origin + (F + P).replace(/\/+/g, "/");
      } catch {
        return y;
      }
  }
  return y;
}
const Wa = ({ label: y, position: P }) => {
  if (!y) return null;
  const p = {
    position: "absolute",
    padding: "4px 8px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "4px",
    pointerEvents: "none",
    zIndex: 10,
    ...P === "left" && { top: "8px", left: "8px" },
    ...P === "right" && { top: "8px", right: "8px" },
    ...P === "top" && { top: "8px", left: "8px" },
    ...P === "bottom" && { bottom: "8px", left: "8px" }
  };
  return /* @__PURE__ */ Z.jsx("div", { style: p, children: y });
}, rd = ({
  initialPosition: y,
  image1Url: P,
  image2Url: p,
  label1: A,
  label2: F,
  portrait: U,
  height: te,
  width: b,
  trackPosition: W,
  setStateValue: le
}) => {
  const [B, X] = D.useState(y), [G, _e] = D.useState(
    typeof te == "number" ? te : null
  ), ye = D.useRef(null), Y = D.useRef(null), M = D.useRef(null), De = D.useRef(B), xe = 150, ie = D.useMemo(
    () => Aa(P),
    [P]
  ), ce = D.useMemo(
    () => Aa(p),
    [p]
  );
  D.useEffect(() => {
    X(y), De.current = y;
  }, [y]), D.useEffect(() => () => {
    M.current !== null && clearTimeout(M.current);
  }, []), D.useEffect(() => {
    !W && M.current !== null && (clearTimeout(M.current), M.current = null);
  }, [W]), D.useEffect(() => {
    if (typeof te == "number") {
      _e(te);
      return;
    }
    let H = !0, fe = null;
    const we = ye.current, Ne = () => {
      if (!H || !ye.current || fe === null)
        return;
      const k = ye.current.clientWidth;
      _e(Math.round(k * fe));
    }, pe = new Image();
    pe.onload = () => {
      !H || pe.width === 0 || (fe = pe.height / pe.width, Ne());
    }, pe.src = ie;
    let ne = null;
    return we && (ne = new ResizeObserver(() => {
      Ne();
    }), ne.observe(we)), () => {
      H = !1, pe.onload = null, ne && ne.disconnect();
    };
  }, [te, ie]);
  const Ie = D.useCallback(
    (H) => {
      const fe = Math.min(100, Math.max(0, H));
      X(fe), W && (Y.current = fe, M.current !== null && clearTimeout(M.current), M.current = setTimeout(() => {
        M.current = null, Y.current !== null && Y.current !== De.current && (De.current = Y.current, le("position", Y.current));
      }, xe));
    },
    [le, W]
  ), Ce = D.useMemo(() => {
    const H = {
      position: "relative",
      overflow: "hidden",
      borderRadius: "4px"
    };
    return b === "stretch" ? H.width = "100%" : typeof b == "number" ? H.width = `${b}px` : H.width = "fit-content", G !== null && (H.height = `${G}px`), H;
  }, [b, G]), ge = {
    width: U ? "100%" : "3px",
    height: U ? "3px" : "100%",
    backgroundColor: "var(--st-primary-color, #ff4b4b)",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)"
  }, Pe = {
    position: "absolute",
    top: U ? "-12px" : "50%",
    left: U ? "50%" : "-12px",
    transform: U ? "translateX(-50%)" : "translateY(-50%)",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "var(--st-primary-color, #ff4b4b)",
    border: "2px solid white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: U ? "ns-resize" : "ew-resize"
  }, tt = {
    display: "flex",
    flexDirection: U ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1px",
    color: "white"
  }, He = ({ direction: H }) => {
    const fe = {
      left: 180,
      right: 0,
      up: -90,
      down: 90
    }[H];
    return /* @__PURE__ */ Z.jsx(
      "svg",
      {
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        style: { transform: `rotate(${fe}deg)` },
        children: /* @__PURE__ */ Z.jsx(
          "path",
          {
            d: "M2 1L6 4L2 7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    );
  }, nt = /* @__PURE__ */ Z.jsx("div", { style: { ...ge, position: "relative" }, children: /* @__PURE__ */ Z.jsx("div", { style: Pe, children: /* @__PURE__ */ Z.jsxs("div", { style: tt, children: [
    /* @__PURE__ */ Z.jsx(He, { direction: U ? "up" : "left" }),
    /* @__PURE__ */ Z.jsx(He, { direction: U ? "down" : "right" })
  ] }) }) });
  return /* @__PURE__ */ Z.jsx("div", { ref: ye, style: Ce, children: /* @__PURE__ */ Z.jsx(
    Ha,
    {
      itemOne: /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
        /* @__PURE__ */ Z.jsx(
          Do,
          {
            src: ie,
            alt: A || "Image 1",
            style: { objectFit: "cover", width: "100%", height: "100%" }
          }
        ),
        /* @__PURE__ */ Z.jsx(
          Wa,
          {
            label: A,
            position: U ? "top" : "left"
          }
        )
      ] }),
      itemTwo: /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
        /* @__PURE__ */ Z.jsx(
          Do,
          {
            src: ce,
            alt: F || "Image 2",
            style: { objectFit: "cover", width: "100%", height: "100%" }
          }
        ),
        /* @__PURE__ */ Z.jsx(
          Wa,
          {
            label: F,
            position: U ? "bottom" : "right"
          }
        )
      ] }),
      handle: nt,
      position: B,
      onPositionChange: Ie,
      portrait: U,
      style: {
        width: "100%",
        height: G !== null ? `${G}px` : "auto"
      }
    }
  ) });
}, jl = /* @__PURE__ */ new WeakMap(), ld = (y) => {
  const { data: P, parentElement: p, setStateValue: A } = y, F = p.querySelector(".react-root");
  if (!F)
    throw new Error("Unexpected: React root element not found");
  let U = jl.get(p);
  U || (U = Zf.createRoot(F), jl.set(p, U));
  const {
    image1_url: te,
    image2_url: b,
    label1: W,
    label2: le,
    portrait: B,
    height: X,
    width: G,
    initial_position: _e,
    track_position: ye
  } = P;
  return U.render(
    /* @__PURE__ */ Z.jsx(D.StrictMode, { children: /* @__PURE__ */ Z.jsx(
      rd,
      {
        setStateValue: A,
        initialPosition: _e,
        image1Url: te,
        image2Url: b,
        label1: W,
        label2: le,
        portrait: B,
        height: X,
        width: G,
        trackPosition: ye
      }
    ) })
  ), () => {
    const Y = jl.get(p);
    Y && (Y.unmount(), jl.delete(p));
  };
};
export {
  ld as default
};
