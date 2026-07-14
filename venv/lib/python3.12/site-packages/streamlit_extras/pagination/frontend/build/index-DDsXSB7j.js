var Po = { exports: {} }, Sr = {}, Ro = { exports: {} }, j = {};
var Pa;
function If() {
  if (Pa) return j;
  Pa = 1;
  var k = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.provider"), de = /* @__PURE__ */ Symbol.for("react.context"), $ = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), G = Symbol.iterator;
  function Z(c) {
    return c === null || typeof c != "object" ? null : (c = G && c[G] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, De = Object.assign, J = {};
  function K(c, v, I) {
    this.props = c, this.context = v, this.refs = J, this.updater = I || ye;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, K.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = K.prototype;
  function Je(c, v, I) {
    this.props = c, this.context = v, this.refs = J, this.updater = I || ye;
  }
  var Ve = Je.prototype = new lt();
  Ve.constructor = Je, De(Ve, K.prototype), Ve.isPureReactComponent = !0;
  var he = Array.isArray, He = Object.prototype.hasOwnProperty, ge = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(c, v, I) {
    var U, B = {}, V = null, q = null;
    if (v != null) for (U in v.ref !== void 0 && (q = v.ref), v.key !== void 0 && (V = "" + v.key), v) He.call(v, U) && !Ee.hasOwnProperty(U) && (B[U] = v[U]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = I;
    else if (1 < Y) {
      for (var re = Array(Y), Ke = 0; Ke < Y; Ke++) re[Ke] = arguments[Ke + 2];
      B.children = re;
    }
    if (c && c.defaultProps) for (U in Y = c.defaultProps, Y) B[U] === void 0 && (B[U] = Y[U]);
    return { $$typeof: k, type: c, key: V, ref: q, props: B, _owner: ge.current };
  }
  function xe(c, v) {
    return { $$typeof: k, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function Ce(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
  }
  function Et(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(I) {
      return v[I];
    });
  }
  var ht = /\/+/g;
  function Qe(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Et("" + c.key) : v.toString(36);
  }
  function ut(c, v, I, U, B) {
    var V = typeof c;
    (V === "undefined" || V === "boolean") && (c = null);
    var q = !1;
    if (c === null) q = !0;
    else switch (V) {
      case "string":
      case "number":
        q = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case k:
          case O:
            q = !0;
        }
    }
    if (q) return q = c, B = B(q), c = U === "" ? "." + Qe(q, 0) : U, he(B) ? (I = "", c != null && (I = c.replace(ht, "$&/") + "/"), ut(B, v, I, "", function(Ke) {
      return Ke;
    })) : B != null && (Ce(B) && (B = xe(B, I + (!B.key || q && q.key === B.key ? "" : ("" + B.key).replace(ht, "$&/") + "/") + c)), v.push(B)), 1;
    if (q = 0, U = U === "" ? "." : U + ":", he(c)) for (var Y = 0; Y < c.length; Y++) {
      V = c[Y];
      var re = U + Qe(V, Y);
      q += ut(V, v, I, re, B);
    }
    else if (re = Z(c), typeof re == "function") for (c = re.call(c), Y = 0; !(V = c.next()).done; ) V = V.value, re = U + Qe(V, Y++), q += ut(V, v, I, re, B);
    else if (V === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function mt(c, v, I) {
    if (c == null) return c;
    var U = [], B = 0;
    return ut(c, U, "", "", function(V) {
      return v.call(I, V, B++);
    }), U;
  }
  function je(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(I) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = I);
      }, function(I) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = I);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var se = { current: null }, S = { transition: null }, L = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: S, ReactCurrentOwner: ge };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return j.Children = { map: mt, forEach: function(c, v, I) {
    mt(c, function() {
      v.apply(this, arguments);
    }, I);
  }, count: function(c) {
    var v = 0;
    return mt(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return mt(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!Ce(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, j.Component = K, j.Fragment = h, j.Profiler = ee, j.PureComponent = Je, j.StrictMode = Q, j.Suspense = F, j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, j.act = C, j.cloneElement = function(c, v, I) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var U = De({}, c.props), B = c.key, V = c.ref, q = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (V = v.ref, q = ge.current), v.key !== void 0 && (B = "" + v.key), c.type && c.type.defaultProps) var Y = c.type.defaultProps;
      for (re in v) He.call(v, re) && !Ee.hasOwnProperty(re) && (U[re] = v[re] === void 0 && Y !== void 0 ? Y[re] : v[re]);
    }
    var re = arguments.length - 2;
    if (re === 1) U.children = I;
    else if (1 < re) {
      Y = Array(re);
      for (var Ke = 0; Ke < re; Ke++) Y[Ke] = arguments[Ke + 2];
      U.children = Y;
    }
    return { $$typeof: k, type: c.type, key: B, ref: V, props: U, _owner: q };
  }, j.createContext = function(c) {
    return c = { $$typeof: de, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: W, _context: c }, c.Consumer = c;
  }, j.createElement = T, j.createFactory = function(c) {
    var v = T.bind(null, c);
    return v.type = c, v;
  }, j.createRef = function() {
    return { current: null };
  }, j.forwardRef = function(c) {
    return { $$typeof: $, render: c };
  }, j.isValidElement = Ce, j.lazy = function(c) {
    return { $$typeof: D, _payload: { _status: -1, _result: c }, _init: je };
  }, j.memo = function(c, v) {
    return { $$typeof: ue, type: c, compare: v === void 0 ? null : v };
  }, j.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, j.unstable_act = C, j.useCallback = function(c, v) {
    return se.current.useCallback(c, v);
  }, j.useContext = function(c) {
    return se.current.useContext(c);
  }, j.useDebugValue = function() {
  }, j.useDeferredValue = function(c) {
    return se.current.useDeferredValue(c);
  }, j.useEffect = function(c, v) {
    return se.current.useEffect(c, v);
  }, j.useId = function() {
    return se.current.useId();
  }, j.useImperativeHandle = function(c, v, I) {
    return se.current.useImperativeHandle(c, v, I);
  }, j.useInsertionEffect = function(c, v) {
    return se.current.useInsertionEffect(c, v);
  }, j.useLayoutEffect = function(c, v) {
    return se.current.useLayoutEffect(c, v);
  }, j.useMemo = function(c, v) {
    return se.current.useMemo(c, v);
  }, j.useReducer = function(c, v, I) {
    return se.current.useReducer(c, v, I);
  }, j.useRef = function(c) {
    return se.current.useRef(c);
  }, j.useState = function(c) {
    return se.current.useState(c);
  }, j.useSyncExternalStore = function(c, v, I) {
    return se.current.useSyncExternalStore(c, v, I);
  }, j.useTransition = function() {
    return se.current.useTransition();
  }, j.version = "18.3.1", j;
}
var Ra;
function Oo() {
  return Ra || (Ra = 1, Ro.exports = If()), Ro.exports;
}
var La;
function Df() {
  if (La) return Sr;
  La = 1;
  var k = Oo(), O = /* @__PURE__ */ Symbol.for("react.element"), h = /* @__PURE__ */ Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function de($, F, ue) {
    var D, G = {}, Z = null, ye = null;
    ue !== void 0 && (Z = "" + ue), F.key !== void 0 && (Z = "" + F.key), F.ref !== void 0 && (ye = F.ref);
    for (D in F) Q.call(F, D) && !W.hasOwnProperty(D) && (G[D] = F[D]);
    if ($ && $.defaultProps) for (D in F = $.defaultProps, F) G[D] === void 0 && (G[D] = F[D]);
    return { $$typeof: O, type: $, key: Z, ref: ye, props: G, _owner: ee.current };
  }
  return Sr.Fragment = h, Sr.jsx = de, Sr.jsxs = de, Sr;
}
var Ta;
function jf() {
  return Ta || (Ta = 1, Po.exports = Df()), Po.exports;
}
var Me = jf(), ze = Oo(), Ml = {}, Lo = { exports: {} }, Be = {}, To = { exports: {} }, Mo = {};
var Ma;
function Ff() {
  return Ma || (Ma = 1, (function(k) {
    function O(S, L) {
      var C = S.length;
      S.push(L);
      e: for (; 0 < C; ) {
        var c = C - 1 >>> 1, v = S[c];
        if (0 < ee(v, L)) S[c] = L, S[C] = v, C = c;
        else break e;
      }
    }
    function h(S) {
      return S.length === 0 ? null : S[0];
    }
    function Q(S) {
      if (S.length === 0) return null;
      var L = S[0], C = S.pop();
      if (C !== L) {
        S[0] = C;
        e: for (var c = 0, v = S.length, I = v >>> 1; c < I; ) {
          var U = 2 * (c + 1) - 1, B = S[U], V = U + 1, q = S[V];
          if (0 > ee(B, C)) V < v && 0 > ee(q, B) ? (S[c] = q, S[V] = C, c = V) : (S[c] = B, S[U] = C, c = U);
          else if (V < v && 0 > ee(q, C)) S[c] = q, S[V] = C, c = V;
          else break e;
        }
      }
      return L;
    }
    function ee(S, L) {
      var C = S.sortIndex - L.sortIndex;
      return C !== 0 ? C : S.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var W = performance;
      k.unstable_now = function() {
        return W.now();
      };
    } else {
      var de = Date, $ = de.now();
      k.unstable_now = function() {
        return de.now() - $;
      };
    }
    var F = [], ue = [], D = 1, G = null, Z = 3, ye = !1, De = !1, J = !1, K = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, Je = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(S) {
      for (var L = h(ue); L !== null; ) {
        if (L.callback === null) Q(ue);
        else if (L.startTime <= S) Q(ue), L.sortIndex = L.expirationTime, O(F, L);
        else break;
        L = h(ue);
      }
    }
    function he(S) {
      if (J = !1, Ve(S), !De) if (h(F) !== null) De = !0, je(He);
      else {
        var L = h(ue);
        L !== null && se(he, L.startTime - S);
      }
    }
    function He(S, L) {
      De = !1, J && (J = !1, lt(T), T = -1), ye = !0;
      var C = Z;
      try {
        for (Ve(L), G = h(F); G !== null && (!(G.expirationTime > L) || S && !Et()); ) {
          var c = G.callback;
          if (typeof c == "function") {
            G.callback = null, Z = G.priorityLevel;
            var v = c(G.expirationTime <= L);
            L = k.unstable_now(), typeof v == "function" ? G.callback = v : G === h(F) && Q(F), Ve(L);
          } else Q(F);
          G = h(F);
        }
        if (G !== null) var I = !0;
        else {
          var U = h(ue);
          U !== null && se(he, U.startTime - L), I = !1;
        }
        return I;
      } finally {
        G = null, Z = C, ye = !1;
      }
    }
    var ge = !1, Ee = null, T = -1, xe = 5, Ce = -1;
    function Et() {
      return !(k.unstable_now() - Ce < xe);
    }
    function ht() {
      if (Ee !== null) {
        var S = k.unstable_now();
        Ce = S;
        var L = !0;
        try {
          L = Ee(!0, S);
        } finally {
          L ? Qe() : (ge = !1, Ee = null);
        }
      } else ge = !1;
    }
    var Qe;
    if (typeof Je == "function") Qe = function() {
      Je(ht);
    };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), mt = ut.port2;
      ut.port1.onmessage = ht, Qe = function() {
        mt.postMessage(null);
      };
    } else Qe = function() {
      K(ht, 0);
    };
    function je(S) {
      Ee = S, ge || (ge = !0, Qe());
    }
    function se(S, L) {
      T = K(function() {
        S(k.unstable_now());
      }, L);
    }
    k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, k.unstable_continueExecution = function() {
      De || ye || (De = !0, je(He));
    }, k.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xe = 0 < S ? Math.floor(1e3 / S) : 5;
    }, k.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, k.unstable_getFirstCallbackNode = function() {
      return h(F);
    }, k.unstable_next = function(S) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = Z;
      }
      var C = Z;
      Z = L;
      try {
        return S();
      } finally {
        Z = C;
      }
    }, k.unstable_pauseExecution = function() {
    }, k.unstable_requestPaint = function() {
    }, k.unstable_runWithPriority = function(S, L) {
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
      var C = Z;
      Z = S;
      try {
        return L();
      } finally {
        Z = C;
      }
    }, k.unstable_scheduleCallback = function(S, L, C) {
      var c = k.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? c + C : c) : C = c, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = C + v, S = { id: D++, callback: L, priorityLevel: S, startTime: C, expirationTime: v, sortIndex: -1 }, C > c ? (S.sortIndex = C, O(ue, S), h(F) === null && S === h(ue) && (J ? (lt(T), T = -1) : J = !0, se(he, C - c))) : (S.sortIndex = v, O(F, S), De || ye || (De = !0, je(He))), S;
    }, k.unstable_shouldYield = Et, k.unstable_wrapCallback = function(S) {
      var L = Z;
      return function() {
        var C = Z;
        Z = L;
        try {
          return S.apply(this, arguments);
        } finally {
          Z = C;
        }
      };
    };
  })(Mo)), Mo;
}
var Oa;
function Uf() {
  return Oa || (Oa = 1, To.exports = Ff()), To.exports;
}
var Ia;
function Wf() {
  if (Ia) return Be;
  Ia = 1;
  var k = Oo(), O = Uf();
  function h(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Q = /* @__PURE__ */ new Set(), ee = {};
  function W(e, t) {
    de(e, t), de(e + "Capture", t);
  }
  function de(e, t) {
    for (ee[e] = t, e = 0; e < t.length; e++) Q.add(t[e]);
  }
  var $ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, G = {};
  function Z(e) {
    return F.call(G, e) ? !0 : F.call(D, e) ? !1 : ue.test(e) ? G[e] = !0 : (D[e] = !0, !1);
  }
  function ye(e, t, n, r) {
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
  function De(e, t, n, r) {
    if (t === null || typeof t > "u" || ye(e, t, n, r)) return !0;
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
  function J(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new J(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new J(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new J(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new J(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new J(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new J(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var lt = /[\-:]([a-z])/g;
  function Je(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      lt,
      Je
    );
    K[t] = new J(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(lt, Je);
    K[t] = new J(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(lt, Je);
    K[t] = new J(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ve(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (De(t, n, l, r) && (n = null), r || l === null ? Z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var he = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = /* @__PURE__ */ Symbol.for("react.element"), ge = /* @__PURE__ */ Symbol.for("react.portal"), Ee = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), xe = /* @__PURE__ */ Symbol.for("react.profiler"), Ce = /* @__PURE__ */ Symbol.for("react.provider"), Et = /* @__PURE__ */ Symbol.for("react.context"), ht = /* @__PURE__ */ Symbol.for("react.forward_ref"), Qe = /* @__PURE__ */ Symbol.for("react.suspense"), ut = /* @__PURE__ */ Symbol.for("react.suspense_list"), mt = /* @__PURE__ */ Symbol.for("react.memo"), je = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.offscreen"), S = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      c = t && t[1] || "";
    }
    return `
` + c + e;
  }
  var I = !1;
  function U(e, t) {
    if (!e || I) return "";
    I = !0;
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
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
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
      I = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = U(e.type, !1), e;
      case 11:
        return e = U(e.type.render, !1), e;
      case 1:
        return e = U(e.type, !0), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ee:
        return "Fragment";
      case ge:
        return "Portal";
      case xe:
        return "Profiler";
      case T:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Et:
        return (e.displayName || "Context") + ".Consumer";
      case Ce:
        return (e._context.displayName || "Context") + ".Provider";
      case ht:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case mt:
        return t = e.displayName || null, t !== null ? t : V(e.type) || "Memo";
      case je:
        t = e._payload, e = e._init;
        try {
          return V(e(t));
        } catch {
        }
    }
    return null;
  }
  function q(e) {
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
        return V(t);
      case 8:
        return t === T ? "StrictMode" : "Mode";
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
  function Y(e) {
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
  function re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ke(e) {
    var t = re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Er(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function Io(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = re(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function xr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Il(e, t) {
    var n = t.checked;
    return C({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Do(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Y(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function jo(e, t) {
    t = t.checked, t != null && Ve(e, "checked", t, !1);
  }
  function Dl(e, t) {
    jo(e, t);
    var n = Y(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? jl(e, t.type, n) : t.hasOwnProperty("defaultValue") && jl(e, t.type, Y(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function jl(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var jn = Array.isArray;
  function cn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return C({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(h(92));
        if (jn(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Wo(e, t) {
    var n = Y(t.value), r = Y(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function $o(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $o(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Cr, Bo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Cr = Cr || document.createElement("div"), Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Un = {
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
  }, Fa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Un).forEach(function(e) {
    Fa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e];
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ua = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Wl(e, t) {
    if (t) {
      if (Ua[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(h(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(h(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(h(62));
    }
  }
  function Al(e, t) {
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
  var $l = null;
  function Bl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, fn = null, dn = null;
  function Qo(e) {
    if (e = or(e)) {
      if (typeof Vl != "function") throw Error(h(280));
      var t = e.stateNode;
      t && (t = Yr(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    fn ? dn ? dn.push(e) : dn = [e] : fn = e;
  }
  function Yo() {
    if (fn) {
      var e = fn, t = dn;
      if (dn = fn = null, Qo(e), t) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Hl = !1;
  function Zo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      Hl = !1, (fn !== null || dn !== null) && (Go(), Yo());
    }
  }
  function Wn(e, t) {
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
    if (n && typeof n != "function") throw Error(h(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if ($) try {
    var An = {};
    Object.defineProperty(An, "passive", { get: function() {
      Ql = !0;
    } }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
  } catch {
    Ql = !1;
  }
  function Wa(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var $n = !1, _r = null, Nr = !1, Kl = null, Aa = { onError: function(e) {
    $n = !0, _r = e;
  } };
  function $a(e, t, n, r, l, u, o, i, s) {
    $n = !1, _r = null, Wa.apply(Aa, arguments);
  }
  function Ba(e, t, n, r, l, u, o, i, s) {
    if ($a.apply(this, arguments), $n) {
      if ($n) {
        var p = _r;
        $n = !1, _r = null;
      } else throw Error(h(198));
      Nr || (Nr = !0, Kl = p);
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
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (Zt(e) !== e) throw Error(h(188));
  }
  function Va(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Zt(e), t === null) throw Error(h(188));
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
          if (u === n) return qo(l), e;
          if (u === r) return qo(l), t;
          u = u.sibling;
        }
        throw Error(h(188));
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
          if (!o) throw Error(h(189));
        }
      }
      if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function bo(e) {
    return e = Va(e), e !== null ? ei(e) : null;
  }
  function ei(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ei(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ti = O.unstable_scheduleCallback, ni = O.unstable_cancelCallback, Ha = O.unstable_shouldYield, Qa = O.unstable_requestPaint, ce = O.unstable_now, Ka = O.unstable_getCurrentPriorityLevel, Yl = O.unstable_ImmediatePriority, ri = O.unstable_UserBlockingPriority, zr = O.unstable_NormalPriority, Ya = O.unstable_LowPriority, li = O.unstable_IdlePriority, Pr = null, vt = null;
  function Xa(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function") try {
      vt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ot = Math.clz32 ? Math.clz32 : Ja, Ga = Math.log, Za = Math.LN2;
  function Ja(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ga(e) / Za | 0) | 0;
  }
  var Rr = 64, Lr = 4194304;
  function Bn(e) {
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
      i !== 0 ? r = Bn(i) : (u &= o, u !== 0 && (r = Bn(u)));
    } else o = n & ~l, o !== 0 ? r = Bn(o) : u !== 0 && (r = Bn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ot(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function qa(e, t) {
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
  function ba(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - ot(u), i = 1 << o, s = l[o];
      s === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = qa(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Xl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ui() {
    var e = Rr;
    return Rr <<= 1, (Rr & 4194240) === 0 && (Rr = 64), e;
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n;
  }
  function ec(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ot(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Zl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ot(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var X = 0;
  function oi(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ii, Jl, si, ai, ci, ql = !1, Mr = [], Tt = null, Mt = null, Ot = null, Hn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), It = [], tc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        Mt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function Kn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = or(t), t !== null && Jl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function nc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Tt = Kn(Tt, e, t, n, r, l), !0;
      case "dragenter":
        return Mt = Kn(Mt, e, t, n, r, l), !0;
      case "mouseover":
        return Ot = Kn(Ot, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Hn.set(u, Kn(Hn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Qn.set(u, Kn(Qn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function di(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Jo(n), t !== null) {
            e.blockedOn = t, ci(e.priority, function() {
              si(n);
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
  function Or(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $l = r, n.target.dispatchEvent(r), $l = null;
      } else return t = or(n), t !== null && Jl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pi(e, t, n) {
    Or(e) && n.delete(t);
  }
  function rc() {
    ql = !1, Tt !== null && Or(Tt) && (Tt = null), Mt !== null && Or(Mt) && (Mt = null), Ot !== null && Or(Ot) && (Ot = null), Hn.forEach(pi), Qn.forEach(pi);
  }
  function Yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ql || (ql = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, rc)));
  }
  function Xn(e) {
    function t(l) {
      return Yn(l, e);
    }
    if (0 < Mr.length) {
      Yn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && Yn(Tt, e), Mt !== null && Yn(Mt, e), Ot !== null && Yn(Ot, e), Hn.forEach(t), Qn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) di(n), n.blockedOn === null && It.shift();
  }
  var pn = he.ReactCurrentBatchConfig, Ir = !0;
  function lc(e, t, n, r) {
    var l = X, u = pn.transition;
    pn.transition = null;
    try {
      X = 1, bl(e, t, n, r);
    } finally {
      X = l, pn.transition = u;
    }
  }
  function uc(e, t, n, r) {
    var l = X, u = pn.transition;
    pn.transition = null;
    try {
      X = 4, bl(e, t, n, r);
    } finally {
      X = l, pn.transition = u;
    }
  }
  function bl(e, t, n, r) {
    if (Ir) {
      var l = eu(e, t, n, r);
      if (l === null) yu(e, t, r, Dr, n), fi(e, r);
      else if (nc(l, e, t, n, r)) r.stopPropagation();
      else if (fi(e, r), t & 4 && -1 < tc.indexOf(e)) {
        for (; l !== null; ) {
          var u = or(l);
          if (u !== null && ii(u), u = eu(e, t, n, r), u === null && yu(e, t, r, Dr, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else yu(e, t, r, null, n);
    }
  }
  var Dr = null;
  function eu(e, t, n, r) {
    if (Dr = null, e = Bl(r), e = Jt(e), e !== null) if (t = Zt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Jo(t), e !== null) return e;
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
        switch (Ka()) {
          case Yl:
            return 1;
          case ri:
            return 4;
          case zr:
          case Ya:
            return 16;
          case li:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null, tu = null, jr = null;
  function mi() {
    if (jr) return jr;
    var e, t = tu, n = t.length, r, l = "value" in Dt ? Dt.value : Dt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return jr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Fr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ur() {
    return !0;
  }
  function vi() {
    return !1;
  }
  function Ye(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ur : vi, this.isPropagationStopped = vi, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
    }, persist: function() {
    }, isPersistent: Ur }), t;
  }
  var hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, nu = Ye(hn), Gn = C({}, hn, { view: 0, detail: 0 }), oc = Ye(Gn), ru, lu, Zn, Wr = C({}, Gn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ou, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (ru = e.screenX - Zn.screenX, lu = e.screenY - Zn.screenY) : lu = ru = 0, Zn = e), ru);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : lu;
  } }), yi = Ye(Wr), ic = C({}, Wr, { dataTransfer: 0 }), sc = Ye(ic), ac = C({}, Gn, { relatedTarget: 0 }), uu = Ye(ac), cc = C({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fc = Ye(cc), dc = C({}, hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), pc = Ye(dc), hc = C({}, hn, { data: 0 }), gi = Ye(hc), mc = {
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
  }, vc = {
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
  }, yc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yc[e]) ? !!t[e] : !1;
  }
  function ou() {
    return gc;
  }
  var wc = C({}, Gn, { key: function(e) {
    if (e.key) {
      var t = mc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ou, charCode: function(e) {
    return e.type === "keypress" ? Fr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), kc = Ye(wc), Sc = C({}, Wr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wi = Ye(Sc), Ec = C({}, Gn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ou }), xc = Ye(Ec), Cc = C({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _c = Ye(Cc), Nc = C({}, Wr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = Ye(Nc), Pc = [9, 13, 27, 32], iu = $ && "CompositionEvent" in window, Jn = null;
  $ && "documentMode" in document && (Jn = document.documentMode);
  var Rc = $ && "TextEvent" in window && !Jn, ki = $ && (!iu || Jn && 8 < Jn && 11 >= Jn), Si = " ", Ei = !1;
  function xi(e, t) {
    switch (e) {
      case "keyup":
        return Pc.indexOf(t.keyCode) !== -1;
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
  var mn = !1;
  function Lc(e, t) {
    switch (e) {
      case "compositionend":
        return Ci(t);
      case "keypress":
        return t.which !== 32 ? null : (Ei = !0, Si);
      case "textInput":
        return e = t.data, e === Si && Ei ? null : e;
      default:
        return null;
    }
  }
  function Tc(e, t) {
    if (mn) return e === "compositionend" || !iu && xi(e, t) ? (e = mi(), jr = tu = Dt = null, mn = !1, e) : null;
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
  var Mc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _i(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mc[e.type] : t === "textarea";
  }
  function Ni(e, t, n, r) {
    Ko(r), t = Hr(t, "onChange"), 0 < t.length && (n = new nu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var qn = null, bn = null;
  function Oc(e) {
    Hi(e, 0);
  }
  function Ar(e) {
    var t = kn(e);
    if (Io(t)) return e;
  }
  function Ic(e, t) {
    if (e === "change") return t;
  }
  var zi = !1;
  if ($) {
    var su;
    if ($) {
      var au = "oninput" in document;
      if (!au) {
        var Pi = document.createElement("div");
        Pi.setAttribute("oninput", "return;"), au = typeof Pi.oninput == "function";
      }
      su = au;
    } else su = !1;
    zi = su && (!document.documentMode || 9 < document.documentMode);
  }
  function Ri() {
    qn && (qn.detachEvent("onpropertychange", Li), bn = qn = null);
  }
  function Li(e) {
    if (e.propertyName === "value" && Ar(bn)) {
      var t = [];
      Ni(t, bn, e, Bl(e)), Zo(Oc, t);
    }
  }
  function Dc(e, t, n) {
    e === "focusin" ? (Ri(), qn = t, bn = n, qn.attachEvent("onpropertychange", Li)) : e === "focusout" && Ri();
  }
  function jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(bn);
  }
  function Fc(e, t) {
    if (e === "click") return Ar(t);
  }
  function Uc(e, t) {
    if (e === "input" || e === "change") return Ar(t);
  }
  function Wc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var it = typeof Object.is == "function" ? Object.is : Wc;
  function er(e, t) {
    if (it(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!F.call(t, l) || !it(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ti(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Ti(e);
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
      n = Ti(n);
    }
  }
  function Oi(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oi(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ii() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ac(e) {
    var t = Ii(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oi(n.ownerDocument.documentElement, n)) {
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
  var $c = $ && "documentMode" in document && 11 >= document.documentMode, vn = null, fu = null, tr = null, du = !1;
  function Di(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    du || vn == null || vn !== xr(r) || (r = vn, "selectionStart" in r && cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && er(tr, r) || (tr = r, r = Hr(fu, "onSelect"), 0 < r.length && (t = new nu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)));
  }
  function $r(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var yn = { animationend: $r("Animation", "AnimationEnd"), animationiteration: $r("Animation", "AnimationIteration"), animationstart: $r("Animation", "AnimationStart"), transitionend: $r("Transition", "TransitionEnd") }, pu = {}, ji = {};
  $ && (ji = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
  function Br(e) {
    if (pu[e]) return pu[e];
    if (!yn[e]) return e;
    var t = yn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ji) return pu[e] = t[n];
    return e;
  }
  var Fi = Br("animationend"), Ui = Br("animationiteration"), Wi = Br("animationstart"), Ai = Br("transitionend"), $i = /* @__PURE__ */ new Map(), Bi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function jt(e, t) {
    $i.set(e, t), W(t, [e]);
  }
  for (var hu = 0; hu < Bi.length; hu++) {
    var mu = Bi[hu], Bc = mu.toLowerCase(), Vc = mu[0].toUpperCase() + mu.slice(1);
    jt(Bc, "on" + Vc);
  }
  jt(Fi, "onAnimationEnd"), jt(Ui, "onAnimationIteration"), jt(Wi, "onAnimationStart"), jt("dblclick", "onDoubleClick"), jt("focusin", "onFocus"), jt("focusout", "onBlur"), jt(Ai, "onTransitionEnd"), de("onMouseEnter", ["mouseout", "mouseover"]), de("onMouseLeave", ["mouseout", "mouseover"]), de("onPointerEnter", ["pointerout", "pointerover"]), de("onPointerLeave", ["pointerout", "pointerover"]), W("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), W("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), W("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), W("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), W("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), W("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hc = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
  function Vi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ba(r, t, void 0, e), e.currentTarget = null;
  }
  function Hi(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Vi(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Vi(l, i, p), u = s;
        }
      }
    }
    if (Nr) throw e = Kl, Nr = !1, Kl = null, e;
  }
  function te(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Qi(t, e, 2, !1), n.add(r));
  }
  function vu(e, t, n) {
    var r = 0;
    t && (r |= 4), Qi(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Vr]) {
      e[Vr] = !0, Q.forEach(function(n) {
        n !== "selectionchange" && (Hc.has(n) || vu(n, !1, e), vu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || (t[Vr] = !0, vu("selectionchange", !1, t));
    }
  }
  function Qi(e, t, n, r) {
    switch (hi(t)) {
      case 1:
        var l = lc;
        break;
      case 4:
        l = uc;
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
    Zo(function() {
      var p = u, y = Bl(n), g = [];
      e: {
        var m = $i.get(e);
        if (m !== void 0) {
          var E = nu, _ = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = kc;
              break;
            case "focusin":
              _ = "focus", E = uu;
              break;
            case "focusout":
              _ = "blur", E = uu;
              break;
            case "beforeblur":
            case "afterblur":
              E = uu;
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
              E = yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = sc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = xc;
              break;
            case Fi:
            case Ui:
            case Wi:
              E = fc;
              break;
            case Ai:
              E = _c;
              break;
            case "scroll":
              E = oc;
              break;
            case "wheel":
              E = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = pc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = wi;
          }
          var N = (t & 4) !== 0, fe = !N && e === "scroll", f = N ? m !== null ? m + "Capture" : null : m;
          N = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Wn(a, f), w != null && N.push(lr(a, w, d)))), fe) break;
            a = a.return;
          }
          0 < N.length && (m = new E(m, _, null, n, y), g.push({ event: m, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (m = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", m && n !== $l && (_ = n.relatedTarget || n.fromElement) && (Jt(_) || _[xt])) break e;
          if ((E || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, E ? (_ = n.relatedTarget || n.toElement, E = p, _ = _ ? Jt(_) : null, _ !== null && (fe = Zt(_), _ !== fe || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (E = null, _ = p), E !== _)) {
            if (N = yi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = wi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), fe = E == null ? m : kn(E), d = _ == null ? m : kn(_), m = new N(w, a + "leave", E, n, y), m.target = fe, m.relatedTarget = d, w = null, Jt(y) === p && (N = new N(f, a + "enter", _, n, y), N.target = d, N.relatedTarget = fe, w = N), fe = w, E && _) t: {
              for (N = E, f = _, a = 0, d = N; d; d = gn(d)) a++;
              for (d = 0, w = f; w; w = gn(w)) d++;
              for (; 0 < a - d; ) N = gn(N), a--;
              for (; 0 < d - a; ) f = gn(f), d--;
              for (; a--; ) {
                if (N === f || f !== null && N === f.alternate) break t;
                N = gn(N), f = gn(f);
              }
              N = null;
            }
            else N = null;
            E !== null && Ki(g, m, E, N, !1), _ !== null && fe !== null && Ki(g, fe, _, N, !0);
          }
        }
        e: {
          if (m = p ? kn(p) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file") var z = Ic;
          else if (_i(m)) if (zi) z = Uc;
          else {
            z = jc;
            var P = Dc;
          }
          else (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (z = Fc);
          if (z && (z = z(e, p))) {
            Ni(g, z, n, y);
            break e;
          }
          P && P(e, m, p), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && jl(m, "number", m.value);
        }
        switch (P = p ? kn(p) : window, e) {
          case "focusin":
            (_i(P) || P.contentEditable === "true") && (vn = P, fu = p, tr = null);
            break;
          case "focusout":
            tr = fu = vn = null;
            break;
          case "mousedown":
            du = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            du = !1, Di(g, n, y);
            break;
          case "selectionchange":
            if ($c) break;
          case "keydown":
          case "keyup":
            Di(g, n, y);
        }
        var R;
        if (iu) e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
        else mn ? xi(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
        M && (ki && n.locale !== "ko" && (mn || M !== "onCompositionStart" ? M === "onCompositionEnd" && mn && (R = mi()) : (Dt = y, tu = "value" in Dt ? Dt.value : Dt.textContent, mn = !0)), P = Hr(p, M), 0 < P.length && (M = new gi(M, e, null, n, y), g.push({ event: M, listeners: P }), R ? M.data = R : (R = Ci(n), R !== null && (M.data = R)))), (R = Rc ? Lc(e, n) : Tc(e, n)) && (p = Hr(p, "onBeforeInput"), 0 < p.length && (y = new gi("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: p }), y.data = R));
      }
      Hi(g, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Wn(e, n), u != null && r.unshift(lr(e, u, l)), u = Wn(e, t), u != null && r.push(lr(e, u, l))), e = e.return;
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ki(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Wn(n, u), s != null && o.unshift(lr(n, s, i))) : l || (s = Wn(n, u), s != null && o.push(lr(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Qc = /\r\n?/g, Kc = /\u0000|\uFFFD/g;
  function Yi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qc, `
`).replace(Kc, "");
  }
  function Qr(e, t, n) {
    if (t = Yi(t), Yi(e) !== t && n) throw Error(h(425));
  }
  function Kr() {
  }
  var gu = null, wu = null;
  function ku(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Su = typeof setTimeout == "function" ? setTimeout : void 0, Yc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xi = typeof Promise == "function" ? Promise : void 0, Xc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xi < "u" ? function(e) {
    return Xi.resolve(null).then(e).catch(Gc);
  } : Su;
  function Gc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Eu(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Xn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Xn(t);
  }
  function Ft(e) {
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
  function Gi(e) {
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
  var wn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + wn, ur = "__reactProps$" + wn, xt = "__reactContainer$" + wn, xu = "__reactEvents$" + wn, Zc = "__reactListeners$" + wn, Jc = "__reactHandles$" + wn;
  function Jt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gi(e); e !== null; ) {
          if (n = e[yt]) return n;
          e = Gi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function or(e) {
    return e = e[yt] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
  }
  function Yr(e) {
    return e[ur] || null;
  }
  var Cu = [], Sn = -1;
  function Ut(e) {
    return { current: e };
  }
  function ne(e) {
    0 > Sn || (e.current = Cu[Sn], Cu[Sn] = null, Sn--);
  }
  function b(e, t) {
    Sn++, Cu[Sn] = e.current, e.current = t;
  }
  var Wt = {}, Pe = Ut(Wt), Fe = Ut(!1), qt = Wt;
  function En(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ue(e) {
    return e = e.childContextTypes, e != null;
  }
  function Xr() {
    ne(Fe), ne(Pe);
  }
  function Zi(e, t, n) {
    if (Pe.current !== Wt) throw Error(h(168));
    b(Pe, t), b(Fe, n);
  }
  function Ji(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(h(108, q(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Gr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt, qt = Pe.current, b(Pe, e), b(Fe, Fe.current), !0;
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    n ? (e = Ji(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, ne(Fe), ne(Pe), b(Pe, e)) : ne(Fe), b(Fe, n);
  }
  var Ct = null, Zr = !1, _u = !1;
  function bi(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  function qc(e) {
    Zr = !0, bi(e);
  }
  function At() {
    if (!_u && Ct !== null) {
      _u = !0;
      var e = 0, t = X;
      try {
        var n = Ct;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ct = null, Zr = !1;
      } catch (l) {
        throw Ct !== null && (Ct = Ct.slice(e + 1)), ti(Yl, At), l;
      } finally {
        X = t, _u = !1;
      }
    }
    return null;
  }
  var xn = [], Cn = 0, Jr = null, qr = 0, qe = [], be = 0, bt = null, _t = 1, Nt = "";
  function en(e, t) {
    xn[Cn++] = qr, xn[Cn++] = Jr, Jr = e, qr = t;
  }
  function es(e, t, n) {
    qe[be++] = _t, qe[be++] = Nt, qe[be++] = bt, bt = e;
    var r = _t;
    e = Nt;
    var l = 32 - ot(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - ot(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, _t = 1 << 32 - ot(t) + l | n << l | r, Nt = u + e;
    } else _t = 1 << u | n << l | r, Nt = e;
  }
  function Nu(e) {
    e.return !== null && (en(e, 1), es(e, 1, 0));
  }
  function zu(e) {
    for (; e === Jr; ) Jr = xn[--Cn], xn[Cn] = null, qr = xn[--Cn], xn[Cn] = null;
    for (; e === bt; ) bt = qe[--be], qe[be] = null, Nt = qe[--be], qe[be] = null, _t = qe[--be], qe[be] = null;
  }
  var Xe = null, Ge = null, le = !1, st = null;
  function ts(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = Ft(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: _t, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ge = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ru(e) {
    if (le) {
      var t = Ge;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (Pu(e)) throw Error(h(418));
          t = Ft(n.nextSibling);
          var r = Xe;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Xe = e);
        }
      } else {
        if (Pu(e)) throw Error(h(418));
        e.flags = e.flags & -4097 | 2, le = !1, Xe = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Xe = e;
  }
  function br(e) {
    if (e !== Xe) return !1;
    if (!le) return rs(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps)), t && (t = Ge)) {
      if (Pu(e)) throw ls(), Error(h(418));
      for (; t; ) ts(e, t), t = Ft(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ge = Ft(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ge = null;
      }
    } else Ge = Xe ? Ft(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = Ge; e; ) e = Ft(e.nextSibling);
  }
  function _n() {
    Ge = Xe = null, le = !1;
  }
  function Lu(e) {
    st === null ? st = [e] : st.push(e);
  }
  var bc = he.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(h(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(h(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(h(284));
      if (!n._owner) throw Error(h(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw e = Object.prototype.toString.call(t), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function us(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = Xt(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = Eo(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var z = d.type;
      return z === Ee ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === je && us(z) === a.type) ? (w = l(a, d.props), w.ref = ir(f, a, d), w.return = f, w) : (w = Cl(d.type, d.key, d.props, null, f.mode, w), w.ref = ir(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = xo(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, z) {
      return a === null || a.tag !== 7 ? (a = an(d, f.mode, w, z), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = Eo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case He:
            return d = Cl(a.type, a.key, a.props, null, f.mode, d), d.ref = ir(f, null, a), d.return = f, d;
          case ge:
            return a = xo(a, f.mode, d), a.return = f, a;
          case je:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (jn(a) || L(a)) return a = an(a, f.mode, d, null), a.return = f, a;
        el(f, a);
      }
      return null;
    }
    function m(f, a, d, w) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case He:
            return d.key === z ? s(f, a, d, w) : null;
          case ge:
            return d.key === z ? p(f, a, d, w) : null;
          case je:
            return z = d._init, m(
              f,
              a,
              z(d._payload),
              w
            );
        }
        if (jn(d) || L(d)) return z !== null ? null : y(f, a, d, w, null);
        el(f, d);
      }
      return null;
    }
    function E(f, a, d, w, z) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case He:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, z);
          case ge:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, z);
          case je:
            var P = w._init;
            return E(f, a, d, P(w._payload), z);
        }
        if (jn(w) || L(w)) return f = f.get(d) || null, y(a, f, w, z, null);
        el(a, w);
      }
      return null;
    }
    function _(f, a, d, w) {
      for (var z = null, P = null, R = a, M = a = 0, Se = null; R !== null && M < d.length; M++) {
        R.index > M ? (Se = R, R = null) : Se = R.sibling;
        var H = m(f, R, d[M], w);
        if (H === null) {
          R === null && (R = Se);
          break;
        }
        e && R && H.alternate === null && t(f, R), a = u(H, a, M), P === null ? z = H : P.sibling = H, P = H, R = Se;
      }
      if (M === d.length) return n(f, R), le && en(f, M), z;
      if (R === null) {
        for (; M < d.length; M++) R = g(f, d[M], w), R !== null && (a = u(R, a, M), P === null ? z = R : P.sibling = R, P = R);
        return le && en(f, M), z;
      }
      for (R = r(f, R); M < d.length; M++) Se = E(R, f, M, d[M], w), Se !== null && (e && Se.alternate !== null && R.delete(Se.key === null ? M : Se.key), a = u(Se, a, M), P === null ? z = Se : P.sibling = Se, P = Se);
      return e && R.forEach(function(Gt) {
        return t(f, Gt);
      }), le && en(f, M), z;
    }
    function N(f, a, d, w) {
      var z = L(d);
      if (typeof z != "function") throw Error(h(150));
      if (d = z.call(d), d == null) throw Error(h(151));
      for (var P = z = null, R = a, M = a = 0, Se = null, H = d.next(); R !== null && !H.done; M++, H = d.next()) {
        R.index > M ? (Se = R, R = null) : Se = R.sibling;
        var Gt = m(f, R, H.value, w);
        if (Gt === null) {
          R === null && (R = Se);
          break;
        }
        e && R && Gt.alternate === null && t(f, R), a = u(Gt, a, M), P === null ? z = Gt : P.sibling = Gt, P = Gt, R = Se;
      }
      if (H.done) return n(
        f,
        R
      ), le && en(f, M), z;
      if (R === null) {
        for (; !H.done; M++, H = d.next()) H = g(f, H.value, w), H !== null && (a = u(H, a, M), P === null ? z = H : P.sibling = H, P = H);
        return le && en(f, M), z;
      }
      for (R = r(f, R); !H.done; M++, H = d.next()) H = E(R, f, M, H.value, w), H !== null && (e && H.alternate !== null && R.delete(H.key === null ? M : H.key), a = u(H, a, M), P === null ? z = H : P.sibling = H, P = H);
      return e && R.forEach(function(Of) {
        return t(f, Of);
      }), le && en(f, M), z;
    }
    function fe(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Ee && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case He:
            e: {
              for (var z = d.key, P = a; P !== null; ) {
                if (P.key === z) {
                  if (z = d.type, z === Ee) {
                    if (P.tag === 7) {
                      n(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (P.elementType === z || typeof z == "object" && z !== null && z.$$typeof === je && us(z) === P.type) {
                    n(f, P.sibling), a = l(P, d.props), a.ref = ir(f, P, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, P);
                  break;
                } else t(f, P);
                P = P.sibling;
              }
              d.type === Ee ? (a = an(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Cl(d.type, d.key, d.props, null, f.mode, w), w.ref = ir(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case ge:
            e: {
              for (P = d.key; a !== null; ) {
                if (a.key === P) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = xo(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case je:
            return P = d._init, fe(f, a, P(d._payload), w);
        }
        if (jn(d)) return _(f, a, d, w);
        if (L(d)) return N(f, a, d, w);
        el(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Eo(d, f.mode, w), a.return = f, f = a), o(f)) : n(f, a);
    }
    return fe;
  }
  var Nn = os(!0), is = os(!1), tl = Ut(null), nl = null, zn = null, Tu = null;
  function Mu() {
    Tu = zn = nl = null;
  }
  function Ou(e) {
    var t = tl.current;
    ne(tl), e._currentValue = t;
  }
  function Iu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    nl = e, Tu = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (We = !0), e.firstContext = null);
  }
  function et(e) {
    var t = e._currentValue;
    if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, zn === null) {
      if (nl === null) throw Error(h(308));
      zn = e, nl.dependencies = { lanes: 0, firstContext: e };
    } else zn = zn.next = e;
    return t;
  }
  var tn = null;
  function Du(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, zt(e, r);
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var $t = !1;
  function ju(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (A & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, zt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, zt(e, n);
  }
  function rl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
    }
  }
  function cs(e, t) {
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
    $t = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var m = i.lane, E = i.eventTime;
        if ((r & m) === m) {
          y !== null && (y = y.next = {
            eventTime: E,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var _ = e, N = i;
            switch (m = t, E = n, N.tag) {
              case 1:
                if (_ = N.payload, typeof _ == "function") {
                  g = _.call(E, g, m);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = N.payload, m = typeof _ == "function" ? _.call(E, g, m) : _, m == null) break e;
                g = C({}, g, m);
                break e;
              case 2:
                $t = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [i] : m.push(i));
        } else E = { eventTime: E, lane: m, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = E, s = g) : y = y.next = E, o |= m;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          m = i, i = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ln |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(h(191, l));
        l.call(r);
      }
    }
  }
  var sr = {}, gt = Ut(sr), ar = Ut(sr), cr = Ut(sr);
  function nn(e) {
    if (e === sr) throw Error(h(174));
    return e;
  }
  function Fu(e, t) {
    switch (b(cr, t), b(ar, e), b(gt, sr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ul(t, e);
    }
    ne(gt), b(gt, t);
  }
  function Rn() {
    ne(gt), ne(ar), ne(cr);
  }
  function ds(e) {
    nn(cr.current);
    var t = nn(gt.current), n = Ul(t, e.type);
    t !== n && (b(ar, e), b(gt, n));
  }
  function Uu(e) {
    ar.current === e && (ne(gt), ne(ar));
  }
  var oe = Ut(0);
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
  var Wu = [];
  function Au() {
    for (var e = 0; e < Wu.length; e++) Wu[e]._workInProgressVersionPrimary = null;
    Wu.length = 0;
  }
  var ol = he.ReactCurrentDispatcher, $u = he.ReactCurrentBatchConfig, rn = 0, ie = null, me = null, we = null, il = !1, fr = !1, dr = 0, ef = 0;
  function Re() {
    throw Error(h(321));
  }
  function Bu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!it(e[n], t[n])) return !1;
    return !0;
  }
  function Vu(e, t, n, r, l, u) {
    if (rn = u, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ol.current = e === null || e.memoizedState === null ? lf : uf, e = n(r, l), fr) {
      u = 0;
      do {
        if (fr = !1, dr = 0, 25 <= u) throw Error(h(301));
        u += 1, we = me = null, t.updateQueue = null, ol.current = of, e = n(r, l);
      } while (fr);
    }
    if (ol.current = cl, t = me !== null && me.next !== null, rn = 0, we = me = ie = null, il = !1, t) throw Error(h(300));
    return e;
  }
  function Hu() {
    var e = dr !== 0;
    return dr = 0, e;
  }
  function wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return we === null ? ie.memoizedState = we = e : we = we.next = e, we;
  }
  function tt() {
    if (me === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = we === null ? ie.memoizedState : we.next;
    if (t !== null) we = t, me = e;
    else {
      if (e === null) throw Error(h(310));
      me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, we === null ? ie.memoizedState = we = e : we = we.next = e;
    }
    return we;
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = tt(), n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = me, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((rn & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, ie.lanes |= y, ln |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, it(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ie.lanes |= u, ln |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ku(e) {
    var t = tt(), n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      it(u, t.memoizedState) || (We = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ps() {
  }
  function hs(e, t) {
    var n = ie, r = tt(), l = t(), u = !it(r.memoizedState, l);
    if (u && (r.memoizedState = l, We = !0), r = r.queue, Yu(ys.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || we !== null && we.memoizedState.tag & 1) {
      if (n.flags |= 2048, hr(9, vs.bind(null, n, r, l, t), void 0, null), ke === null) throw Error(h(349));
      (rn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, gs(t) && ws(e);
  }
  function ys(e, t, n) {
    return n(function() {
      gs(t) && ws(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !it(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = zt(e, 1);
    t !== null && dt(t, e, 1, -1);
  }
  function ks(e) {
    var t = wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = rf.bind(null, ie, e), [t.memoizedState, e];
  }
  function hr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ss() {
    return tt().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = wt();
    ie.flags |= e, l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function al(e, t, n, r) {
    var l = tt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (u = o.destroy, r !== null && Bu(r, o.deps)) {
        l.memoizedState = hr(t, n, u, r);
        return;
      }
    }
    ie.flags |= e, l.memoizedState = hr(1 | t, n, u, r);
  }
  function Es(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Yu(e, t) {
    return al(2048, 8, e, t);
  }
  function xs(e, t) {
    return al(4, 2, e, t);
  }
  function Cs(e, t) {
    return al(4, 4, e, t);
  }
  function _s(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ns(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(4, 4, _s.bind(null, t, e), n);
  }
  function Xu() {
  }
  function zs(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ps(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Rs(e, t, n) {
    return (rn & 21) === 0 ? (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n) : (it(n, t) || (n = ui(), ie.lanes |= n, ln |= n, e.baseState = !0), t);
  }
  function tf(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = $u.transition;
    $u.transition = {};
    try {
      e(!1), t();
    } finally {
      X = n, $u.transition = r;
    }
  }
  function Ls() {
    return tt().memoizedState;
  }
  function nf(e, t, n) {
    var r = Kt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ts(e)) Ms(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = Ie();
      dt(n, e, r, l), Os(n, t, r);
    }
  }
  function rf(e, t, n) {
    var r = Kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(e)) Ms(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, it(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Du(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ss(e, t, l, r), n !== null && (l = Ie(), dt(n, e, r, l), Os(n, t, r));
    }
  }
  function Ts(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Ms(e, t) {
    fr = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
    }
  }
  var cl = { readContext: et, useCallback: Re, useContext: Re, useEffect: Re, useImperativeHandle: Re, useInsertionEffect: Re, useLayoutEffect: Re, useMemo: Re, useReducer: Re, useRef: Re, useState: Re, useDebugValue: Re, useDeferredValue: Re, useTransition: Re, useMutableSource: Re, useSyncExternalStore: Re, useId: Re, unstable_isNewReconciler: !1 }, lf = { readContext: et, useCallback: function(e, t) {
    return wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: et, useEffect: Es, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, sl(
      4194308,
      4,
      _s.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = nf.bind(null, ie, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ks, useDebugValue: Xu, useDeferredValue: function(e) {
    return wt().memoizedState = e;
  }, useTransition: function() {
    var e = ks(!1), t = e[0];
    return e = tf.bind(null, e[1]), wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ie, l = wt();
    if (le) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else {
      if (n = t(), ke === null) throw Error(h(349));
      (rn & 30) !== 0 || ms(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Es(ys.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, hr(9, vs.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = wt(), t = ke.identifierPrefix;
    if (le) {
      var n = Nt, r = _t;
      n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = ef++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, uf = {
    readContext: et,
    useCallback: zs,
    useContext: et,
    useEffect: Yu,
    useImperativeHandle: Ns,
    useInsertionEffect: xs,
    useLayoutEffect: Cs,
    useMemo: Ps,
    useReducer: Qu,
    useRef: Ss,
    useState: function() {
      return Qu(pr);
    },
    useDebugValue: Xu,
    useDeferredValue: function(e) {
      var t = tt();
      return Rs(t, me.memoizedState, e);
    },
    useTransition: function() {
      var e = Qu(pr)[0], t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: hs,
    useId: Ls,
    unstable_isNewReconciler: !1
  }, of = { readContext: et, useCallback: zs, useContext: et, useEffect: Yu, useImperativeHandle: Ns, useInsertionEffect: xs, useLayoutEffect: Cs, useMemo: Ps, useReducer: Ku, useRef: Ss, useState: function() {
    return Ku(pr);
  }, useDebugValue: Xu, useDeferredValue: function(e) {
    var t = tt();
    return me === null ? t.memoizedState = e : Rs(t, me.memoizedState, e);
  }, useTransition: function() {
    var e = Ku(pr)[0], t = tt().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: hs, useId: Ls, unstable_isNewReconciler: !1 };
  function at(e, t) {
    if (e && e.defaultProps) {
      t = C({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var fl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Zt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ie(), l = Kt(e), u = Pt(r, l);
    u.payload = t, n != null && (u.callback = n), t = Bt(e, u, l), t !== null && (dt(t, e, l, r), rl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ie(), l = Kt(e), u = Pt(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Bt(e, u, l), t !== null && (dt(t, e, l, r), rl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ie(), r = Kt(e), l = Pt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (dt(t, e, r, n), rl(t, e, r));
  } };
  function Is(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !er(n, r) || !er(l, u) : !0;
  }
  function Ds(e, t, n) {
    var r = !1, l = Wt, u = t.contextType;
    return typeof u == "object" && u !== null ? u = et(u) : (l = Ue(t) ? qt : Pe.current, r = t.contextTypes, u = (r = r != null) ? En(e, l) : Wt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function js(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
  }
  function Zu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ju(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = et(u) : (u = Ue(t) ? qt : Pe.current, l.context = En(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Gu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), ll(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ln(e, t) {
    try {
      var n = "", r = t;
      do
        n += B(r), r = r.return;
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
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      gl || (gl = !0, ho = r), qu(e, t);
    }, n;
  }
  function Us(e, t, n) {
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
      qu(e, t), typeof r != "function" && (Ht === null ? Ht = /* @__PURE__ */ new Set([this]) : Ht.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Ws(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Ef.bind(null, e, t, n), t.then(e, e));
  }
  function As(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $s(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var af = he.ReactCurrentOwner, We = !1;
  function Oe(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Pn(t, l), r = Vu(e, t, n, r, u, l), n = Hu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (le && n && Nu(t), t.flags |= 1, Oe(e, t, r, l), t.child);
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !So(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Hs(e, t, u, r, l)) : (e = Cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : er, n(o, r) && e.ref === t.ref) return Rt(e, t, l);
    }
    return t.flags |= 1, e = Xt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (er(u, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (We = !0);
      else return t.lanes = e.lanes, Rt(e, t, l);
    }
    return bu(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, b(Mn, Ze), Ze |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, b(Mn, Ze), Ze |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, b(Mn, Ze), Ze |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, b(Mn, Ze), Ze |= r;
    return Oe(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bu(e, t, n, r, l) {
    var u = Ue(n) ? qt : Pe.current;
    return u = En(t, u), Pn(t, l), n = Vu(e, t, n, r, u, l), r = Hu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (le && r && Nu(t), t.flags |= 1, Oe(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if (Ue(n)) {
      var u = !0;
      Gr(t);
    } else u = !1;
    if (Pn(t, l), t.stateNode === null) pl(e, t), Ds(t, n, r), Zu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = et(p) : (p = Ue(n) ? qt : Pe.current, p = En(t, p));
      var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && js(t, o, r, p), $t = !1;
      var m = t.memoizedState;
      o.state = m, ll(t, r, o, l), s = t.memoizedState, i !== r || m !== s || Fe.current || $t ? (typeof y == "function" && (Gu(t, n, y, r), s = t.memoizedState), (i = $t || Is(t, n, i, r, m, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, as(e, t), i = t.memoizedProps, p = t.type === t.elementType ? i : at(t.type, i), o.props = p, g = t.pendingProps, m = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = et(s) : (s = Ue(n) ? qt : Pe.current, s = En(t, s));
      var E = n.getDerivedStateFromProps;
      (y = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || m !== s) && js(t, o, r, s), $t = !1, m = t.memoizedState, o.state = m, ll(t, r, o, l);
      var _ = t.memoizedState;
      i !== g || m !== _ || Fe.current || $t ? (typeof E == "function" && (Gu(t, n, E, r), _ = t.memoizedState), (p = $t || Is(t, n, p, r, m, _, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), o.props = r, o.state = _, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return eo(e, t, n, r, u, l);
  }
  function eo(e, t, n, r, l, u) {
    Ks(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && qi(t, n, !1), Rt(e, t, u);
    r = t.stateNode, af.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Nn(t, e.child, null, u), t.child = Nn(t, null, i, u)) : Oe(e, t, i, u), t.memoizedState = r.state, l && qi(t, n, !0), t.child;
  }
  function Xs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), Fu(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return _n(), Lu(l), t.flags |= 256, Oe(e, t, n, r), t.child;
  }
  var to = { dehydrated: null, treeContext: null, retryLane: 0 };
  function no(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = oe.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), b(oe, l & 1), e === null)
      return Ru(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = _l(o, r, 0, null), e = an(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = no(n), t.memoizedState = to, e) : ro(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return cf(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Xt(i, u) : (u = an(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? no(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = to, r;
    }
    return u = e.child, e = u.sibling, r = Xt(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ro(e, t) {
    return t = _l({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function dl(e, t, n, r) {
    return r !== null && Lu(r), Nn(t, e.child, null, n), e = ro(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function cf(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ju(Error(h(422))), dl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), u = an(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && Nn(t, e.child, null, o), t.child.memoizedState = no(o), t.memoizedState = to, u);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(h(419)), r = Ju(u, r, void 0), dl(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, We || i) {
      if (r = ke, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, zt(e, l), dt(r, e, l, -1));
      }
      return ko(), r = Ju(Error(h(421))), dl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Ge = Ft(l.nextSibling), Xe = t, le = !0, st = null, e !== null && (qe[be++] = _t, qe[be++] = Nt, qe[be++] = bt, _t = e.id, Nt = e.overflow, bt = t), t = ro(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Iu(e.return, t, n);
  }
  function lo(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Oe(e, t, r.children, n), r = oe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
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
    if (b(oe, r), (t.mode & 1) === 0) t.memoizedState = null;
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
  function Rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function ff(e, t, n) {
    switch (t.tag) {
      case 3:
        Xs(t), _n();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        Ue(t.type) && Gr(t);
        break;
      case 4:
        Fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        b(tl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (b(oe, oe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (b(oe, oe.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
        b(oe, oe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), b(oe, oe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Qs(e, t, n);
    }
    return Rt(e, t, n);
  }
  var bs, uo, ea, ta;
  bs = function(e, t) {
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
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, nn(gt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Il(e, l), r = Il(e, r), u = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Fl(e, l), r = Fl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
      }
      Wl(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (ee.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l?.[p], r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (ee.hasOwnProperty(p) ? (s != null && p === "onScroll" && te("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      n && (u = u || []).push("style", n);
      var p = u;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function mr(e, t) {
    if (!le) switch (e.tailMode) {
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
  function Le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function df(e, t, n) {
    var r = t.pendingProps;
    switch (zu(t), t.tag) {
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
        return Le(t), null;
      case 1:
        return Ue(t.type) && Xr(), Le(t), null;
      case 3:
        return r = t.stateNode, Rn(), ne(Fe), ne(Pe), Au(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, st !== null && (yo(st), st = null))), uo(e, t), Le(t), null;
      case 5:
        Uu(t);
        var l = nn(cr.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166));
            return Le(t), null;
          }
          if (e = nn(gt.current), br(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[yt] = t, r[ur] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                te("cancel", r), te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) te(nr[l], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                te(
                  "error",
                  r
                ), te("load", r);
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                Do(r, u), te("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, te("invalid", r);
                break;
              case "textarea":
                Uo(r, u), te("invalid", r);
            }
            Wl(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Qr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Qr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : ee.hasOwnProperty(o) && i != null && o === "onScroll" && te("scroll", r);
            }
            switch (n) {
              case "input":
                Er(r), Fo(r, u, !0);
                break;
              case "textarea":
                Er(r), Ao(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Kr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $o(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[yt] = t, e[ur] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Al(n, r), n) {
                case "dialog":
                  te("cancel", e), te("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  te("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) te(nr[l], e);
                  l = r;
                  break;
                case "source":
                  te("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  te(
                    "error",
                    e
                  ), te("load", e), l = r;
                  break;
                case "details":
                  te("toggle", e), l = r;
                  break;
                case "input":
                  Do(e, r), l = Il(e, r), te("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), te("invalid", e);
                  break;
                case "textarea":
                  Uo(e, r), l = Fl(e, r), te("invalid", e);
                  break;
                default:
                  l = r;
              }
              Wl(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Ho(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bo(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Fn(e, s) : typeof s == "number" && Fn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ee.hasOwnProperty(u) ? s != null && u === "onScroll" && te("scroll", e) : s != null && Ve(e, u, s, o));
              }
              switch (n) {
                case "input":
                  Er(e), Fo(e, r, !1);
                  break;
                case "textarea":
                  Er(e), Ao(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? cn(e, !!r.multiple, u, !1) : r.defaultValue != null && cn(
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
        return Le(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(h(166));
          if (n = nn(cr.current), nn(gt.current), br(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (u = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
              case 3:
                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
        }
        return Le(t), null;
      case 13:
        if (ne(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (le && Ge !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ls(), _n(), t.flags |= 98560, u = !1;
          else if (u = br(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(h(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(h(317));
              u[yt] = t;
            } else _n(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), u = !1;
          } else st !== null && (yo(st), st = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (oe.current & 1) !== 0 ? ve === 0 && (ve = 3) : ko())), t.updateQueue !== null && (t.flags |= 4), Le(t), null);
      case 4:
        return Rn(), uo(e, t), e === null && rr(t.stateNode.containerInfo), Le(t), null;
      case 10:
        return Ou(t.type._context), Le(t), null;
      case 17:
        return Ue(t.type) && Xr(), Le(t), null;
      case 19:
        if (ne(oe), u = t.memoizedState, u === null) return Le(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) mr(u, !1);
        else {
          if (ve !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = ul(e), o !== null) {
              for (t.flags |= 128, mr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return b(oe, oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ce() > On && (t.flags |= 128, r = !0, mr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ul(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !le) return Le(t), null;
          } else 2 * ce() - u.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, mr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ce(), t.sibling = null, n = oe.current, b(oe, r ? n & 1 | 2 : n & 1), t) : (Le(t), null);
      case 22:
      case 23:
        return wo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ze & 1073741824) !== 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function pf(e, t) {
    switch (zu(t), t.tag) {
      case 1:
        return Ue(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(), ne(Fe), ne(Pe), Au(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Uu(t), null;
      case 13:
        if (ne(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(h(340));
          _n();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ne(oe), null;
      case 4:
        return Rn(), null;
      case 10:
        return Ou(t.type._context), null;
      case 22:
      case 23:
        return wo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1, Te = !1, hf = typeof WeakSet == "function" ? WeakSet : Set, x = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ae(e, t, r);
    }
    else n.current = null;
  }
  function oo(e, t, n) {
    try {
      n();
    } catch (r) {
      ae(e, t, r);
    }
  }
  var na = !1;
  function mf(e, t) {
    if (gu = Ir, e = Ii(), cu(e)) {
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
          var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, m = null;
          t: for (; ; ) {
            for (var E; g !== n || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (E = g.firstChild) !== null; )
              m = g, g = E;
            for (; ; ) {
              if (g === e) break t;
              if (m === n && ++p === l && (i = o), m === u && ++y === r && (s = o), (E = g.nextSibling) !== null) break;
              g = m, m = g.parentNode;
            }
            g = E;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wu = { focusedElem: e, selectionRange: n }, Ir = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
    else for (; x !== null; ) {
      t = x;
      try {
        var _ = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (_ !== null) {
              var N = _.memoizedProps, fe = _.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? N : at(t.type, N), fe);
              f.__reactInternalSnapshotBeforeUpdate = a;
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
            throw Error(h(163));
        }
      } catch (w) {
        ae(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, x = e;
        break;
      }
      x = t.return;
    }
    return _ = na, na = !1, _;
  }
  function vr(e, t, n) {
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
  function ml(e, t) {
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
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[ur], delete t[xu], delete t[Zc], delete t[Jc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ua(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
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
  var _e = null, ct = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function") try {
      vt.onCommitFiberUnmount(Pr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Te || Tn(n, t);
      case 6:
        var r = _e, l = ct;
        _e = null, Vt(e, t, n), _e = r, ct = l, _e !== null && (ct ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
      case 18:
        _e !== null && (ct ? (e = _e, n = n.stateNode, e.nodeType === 8 ? Eu(e.parentNode, n) : e.nodeType === 1 && Eu(e, n), Xn(e)) : Eu(_e, n.stateNode));
        break;
      case 4:
        r = _e, l = ct, _e = n.stateNode.containerInfo, ct = !0, Vt(e, t, n), _e = r, ct = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && oo(n, t, o), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Te && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ae(n, t, i);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, Vt(e, t, n), Te = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new hf()), t.forEach(function(r) {
        var l = Cf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              _e = i.stateNode, ct = !1;
              break e;
            case 3:
              _e = i.stateNode.containerInfo, ct = !0;
              break e;
            case 4:
              _e = i.stateNode.containerInfo, ct = !0;
              break e;
          }
          i = i.return;
        }
        if (_e === null) throw Error(h(160));
        oa(u, o, l), _e = null, ct = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ae(l, t, p);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sa(t, e), t = t.sibling;
  }
  function sa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ft(t, e), kt(e), r & 4) {
          try {
            vr(3, e, e.return), ml(3, e);
          } catch (N) {
            ae(e, e.return, N);
          }
          try {
            vr(5, e, e.return);
          } catch (N) {
            ae(e, e.return, N);
          }
        }
        break;
      case 1:
        ft(t, e), kt(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (ft(t, e), kt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (N) {
            ae(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && jo(l, u), Al(i, o);
            var p = Al(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Ho(l, g) : y === "dangerouslySetInnerHTML" ? Bo(l, g) : y === "children" ? Fn(l, g) : Ve(l, y, g, p);
            }
            switch (i) {
              case "input":
                Dl(l, u);
                break;
              case "textarea":
                Wo(l, u);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var E = u.value;
                E != null ? cn(l, !!u.multiple, E, !1) : m !== !!u.multiple && (u.defaultValue != null ? cn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : cn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[ur] = u;
          } catch (N) {
            ae(e, e.return, N);
          }
        }
        break;
      case 6:
        if (ft(t, e), kt(e), r & 4) {
          if (e.stateNode === null) throw Error(h(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (N) {
            ae(e, e.return, N);
          }
        }
        break;
      case 3:
        if (ft(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Xn(t.containerInfo);
        } catch (N) {
          ae(e, e.return, N);
        }
        break;
      case 4:
        ft(t, e), kt(e);
        break;
      case 13:
        ft(t, e), kt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (po = ce())), r & 4 && ia(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (p = Te) || y, ft(t, e), Te = p) : ft(t, e), kt(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0) for (x = e, y = e.child; y !== null; ) {
            for (g = x = y; x !== null; ) {
              switch (m = x, E = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vr(4, m, m.return);
                  break;
                case 1:
                  Tn(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                    } catch (N) {
                      ae(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              E !== null ? (E.return = m, x = E) : fa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Vo("display", o));
                } catch (N) {
                  ae(e, e.return, N);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (N) {
                ae(e, e.return, N);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        ft(t, e), kt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        ft(
          t,
          e
        ), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(h(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Fn(l, ""), r.flags &= -33);
            var u = ua(e);
            ao(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = ua(e);
            so(e, i, o);
            break;
          default:
            throw Error(h(161));
        }
      } catch (s) {
        ae(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vf(e, t, n) {
    x = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
      var l = x, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || hl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Te;
          i = hl;
          var p = Te;
          if (hl = o, (Te = s) && !p) for (x = l; x !== null; ) o = x, s = o.child, o.tag === 22 && o.memoizedState !== null ? da(l) : s !== null ? (s.return = o, x = s) : da(l);
          for (; u !== null; ) x = u, aa(u), u = u.sibling;
          x = l, hl = i, Te = p;
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, x = u) : ca(e);
    }
  }
  function ca(e) {
    for (; x !== null; ) {
      var t = x;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && fs(t, u, r);
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
                fs(t, o, n);
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
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && Xn(g);
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
              throw Error(h(163));
          }
          Te || t.flags & 512 && io(t);
        } catch (m) {
          ae(t, t.return, m);
        }
      }
      if (t === e) {
        x = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, x = n;
        break;
      }
      x = t.return;
    }
  }
  function fa(e) {
    for (; x !== null; ) {
      var t = x;
      if (t === e) {
        x = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, x = n;
        break;
      }
      x = t.return;
    }
  }
  function da(e) {
    for (; x !== null; ) {
      var t = x;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ml(4, t);
            } catch (s) {
              ae(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ae(t, l, s);
              }
            }
            var u = t.return;
            try {
              io(t);
            } catch (s) {
              ae(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              io(t);
            } catch (s) {
              ae(t, o, s);
            }
        }
      } catch (s) {
        ae(t, t.return, s);
      }
      if (t === e) {
        x = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, x = i;
        break;
      }
      x = t.return;
    }
  }
  var yf = Math.ceil, vl = he.ReactCurrentDispatcher, co = he.ReactCurrentOwner, nt = he.ReactCurrentBatchConfig, A = 0, ke = null, pe = null, Ne = 0, Ze = 0, Mn = Ut(0), ve = 0, yr = null, ln = 0, yl = 0, fo = 0, gr = null, Ae = null, po = 0, On = 1 / 0, Lt = null, gl = !1, ho = null, Ht = null, wl = !1, Qt = null, kl = 0, wr = 0, mo = null, Sl = -1, El = 0;
  function Ie() {
    return (A & 6) !== 0 ? ce() : Sl !== -1 ? Sl : Sl = ce();
  }
  function Kt(e) {
    return (e.mode & 1) === 0 ? 1 : (A & 2) !== 0 && Ne !== 0 ? Ne & -Ne : bc.transition !== null ? (El === 0 && (El = ui()), El) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hi(e.type)), e);
  }
  function dt(e, t, n, r) {
    if (50 < wr) throw wr = 0, mo = null, Error(h(185));
    Vn(e, n, r), ((A & 2) === 0 || e !== ke) && (e === ke && ((A & 2) === 0 && (yl |= n), ve === 4 && Yt(e, Ne)), $e(e, r), n === 1 && A === 0 && (t.mode & 1) === 0 && (On = ce() + 500, Zr && At()));
  }
  function $e(e, t) {
    var n = e.callbackNode;
    ba(e, t);
    var r = Tr(e, e === ke ? Ne : 0);
    if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ni(n), t === 1) e.tag === 0 ? qc(ha.bind(null, e)) : bi(ha.bind(null, e)), Xc(function() {
        (A & 6) === 0 && At();
      }), n = null;
      else {
        switch (oi(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = ri;
            break;
          case 16:
            n = zr;
            break;
          case 536870912:
            n = li;
            break;
          default:
            n = zr;
        }
        n = Ea(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (Sl = -1, El = 0, (A & 6) !== 0) throw Error(h(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ke ? Ne : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var u = va();
      (ke !== e || Ne !== t) && (Lt = null, On = ce() + 500, on(e, t));
      do
        try {
          kf();
          break;
        } catch (i) {
          ma(e, i);
        }
      while (!0);
      Mu(), vl.current = u, A = l, pe !== null ? t = 0 : (ke = null, Ne = 0, t = ve);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xl(e), l !== 0 && (r = l, t = vo(e, l))), t === 1) throw n = yr, on(e, 0), Yt(e, r), $e(e, ce()), n;
      if (t === 6) Yt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !gf(l) && (t = xl(e, r), t === 2 && (u = Xl(e), u !== 0 && (r = u, t = vo(e, u))), t === 1)) throw n = yr, on(e, 0), Yt(e, r), $e(e, ce()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            sn(e, Ae, Lt);
            break;
          case 3:
            if (Yt(e, r), (r & 130023424) === r && (t = po + 500 - ce(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ie(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Su(sn.bind(null, e, Ae, Lt), t);
              break;
            }
            sn(e, Ae, Lt);
            break;
          case 4:
            if (Yt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - ot(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Su(sn.bind(null, e, Ae, Lt), r);
              break;
            }
            sn(e, Ae, Lt);
            break;
          case 5:
            sn(e, Ae, Lt);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return $e(e, ce()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function vo(e, t) {
    var n = gr;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = xl(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && yo(t)), e;
  }
  function yo(e) {
    Ae === null ? Ae = e : Ae.push.apply(Ae, e);
  }
  function gf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!it(u(), l)) return !1;
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
  function Yt(e, t) {
    for (t &= ~fo, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ot(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ha(e) {
    if ((A & 6) !== 0) throw Error(h(327));
    In();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return $e(e, ce()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && (t = r, n = vo(e, r));
    }
    if (n === 1) throw n = yr, on(e, 0), Yt(e, t), $e(e, ce()), n;
    if (n === 6) throw Error(h(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Ae, Lt), $e(e, ce()), null;
  }
  function go(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      A = n, A === 0 && (On = ce() + 500, Zr && At());
    }
  }
  function un(e) {
    Qt !== null && Qt.tag === 0 && (A & 6) === 0 && In();
    var t = A;
    A |= 1;
    var n = nt.transition, r = X;
    try {
      if (nt.transition = null, X = 1, e) return e();
    } finally {
      X = r, nt.transition = n, A = t, (A & 6) === 0 && At();
    }
  }
  function wo() {
    Ze = Mn.current, ne(Mn);
  }
  function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Yc(n)), pe !== null) for (n = pe.return; n !== null; ) {
      var r = n;
      switch (zu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xr();
          break;
        case 3:
          Rn(), ne(Fe), ne(Pe), Au();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          wo();
      }
      n = n.return;
    }
    if (ke = e, pe = e = Xt(e.current, null), Ne = Ze = t, ve = 0, yr = null, fo = yl = ln = 0, Ae = gr = null, tn !== null) {
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
  function ma(e, t) {
    do {
      var n = pe;
      try {
        if (Mu(), ol.current = cl, il) {
          for (var r = ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          il = !1;
        }
        if (rn = 0, we = me = ie = null, fr = !1, dr = 0, co.current = null, n === null || n.return === null) {
          ve = 1, yr = t, pe = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = Ne, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var m = y.alternate;
              m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var E = As(o);
            if (E !== null) {
              E.flags &= -257, $s(E, o, i, u, t), E.mode & 1 && Ws(u, p, t), t = E, s = p;
              var _ = t.updateQueue;
              if (_ === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), t.updateQueue = N;
              } else _.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ws(u, p, t), ko();
                break e;
              }
              s = Error(h(426));
            }
          } else if (le && i.mode & 1) {
            var fe = As(o);
            if (fe !== null) {
              (fe.flags & 65536) === 0 && (fe.flags |= 256), $s(fe, o, i, u, t), Lu(Ln(s, i));
              break e;
            }
          }
          u = s = Ln(s, i), ve !== 4 && (ve = 2), gr === null ? gr = [u] : gr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var f = Fs(u, s, t);
                cs(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ht === null || !Ht.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var w = Us(u, i, t);
                  cs(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ga(n);
      } catch (z) {
        t = z, pe === n && n !== null && (pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = vl.current;
    return vl.current = cl, e === null ? cl : e;
  }
  function ko() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), ke === null || (ln & 268435455) === 0 && (yl & 268435455) === 0 || Yt(ke, Ne);
  }
  function xl(e, t) {
    var n = A;
    A |= 2;
    var r = va();
    (ke !== e || Ne !== t) && (Lt = null, on(e, t));
    do
      try {
        wf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (Mu(), A = n, vl.current = r, pe !== null) throw Error(h(261));
    return ke = null, Ne = 0, ve;
  }
  function wf() {
    for (; pe !== null; ) ya(pe);
  }
  function kf() {
    for (; pe !== null && !Ha(); ) ya(pe);
  }
  function ya(e) {
    var t = Sa(e.alternate, e, Ze);
    e.memoizedProps = e.pendingProps, t === null ? ga(e) : pe = t, co.current = null;
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = df(n, t, Ze), n !== null) {
          pe = n;
          return;
        }
      } else {
        if (n = pf(n, t), n !== null) {
          n.flags &= 32767, pe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ve = 6, pe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function sn(e, t, n) {
    var r = X, l = nt.transition;
    try {
      nt.transition = null, X = 1, Sf(e, t, n, r);
    } finally {
      nt.transition = l, X = r;
    }
    return null;
  }
  function Sf(e, t, n, r) {
    do
      In();
    while (Qt !== null);
    if ((A & 6) !== 0) throw Error(h(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(h(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (ec(e, u), e === ke && (pe = ke = null, Ne = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || wl || (wl = !0, Ea(zr, function() {
      return In(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = nt.transition, nt.transition = null;
      var o = X;
      X = 1;
      var i = A;
      A |= 4, co.current = null, mf(e, n), sa(n, e), Ac(wu), Ir = !!gu, wu = gu = null, e.current = n, vf(n), Qa(), A = i, X = o, nt.transition = u;
    } else e.current = n;
    if (wl && (wl = !1, Qt = e, kl = l), u = e.pendingLanes, u === 0 && (Ht = null), Xa(n.stateNode), $e(e, ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (gl) throw gl = !1, e = ho, ho = null, e;
    return (kl & 1) !== 0 && e.tag !== 0 && In(), u = e.pendingLanes, (u & 1) !== 0 ? e === mo ? wr++ : (wr = 0, mo = e) : wr = 0, At(), null;
  }
  function In() {
    if (Qt !== null) {
      var e = oi(kl), t = nt.transition, n = X;
      try {
        if (nt.transition = null, X = 16 > e ? 16 : e, Qt === null) var r = !1;
        else {
          if (e = Qt, Qt = null, kl = 0, (A & 6) !== 0) throw Error(h(331));
          var l = A;
          for (A |= 4, x = e.current; x !== null; ) {
            var u = x, o = u.child;
            if ((x.flags & 16) !== 0) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (x = p; x !== null; ) {
                    var y = x;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, x = g;
                    else for (; x !== null; ) {
                      y = x;
                      var m = y.sibling, E = y.return;
                      if (ra(y), y === p) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = E, x = m;
                        break;
                      }
                      x = E;
                    }
                  }
                }
                var _ = u.alternate;
                if (_ !== null) {
                  var N = _.child;
                  if (N !== null) {
                    _.child = null;
                    do {
                      var fe = N.sibling;
                      N.sibling = null, N = fe;
                    } while (N !== null);
                  }
                }
                x = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && o !== null) o.return = u, x = o;
            else e: for (; x !== null; ) {
              if (u = x, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  vr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, x = f;
                break e;
              }
              x = u.return;
            }
          }
          var a = e.current;
          for (x = a; x !== null; ) {
            o = x;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, x = d;
            else e: for (o = a; x !== null; ) {
              if (i = x, (i.flags & 2048) !== 0) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ml(9, i);
                }
              } catch (z) {
                ae(i, i.return, z);
              }
              if (i === o) {
                x = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, x = w;
                break e;
              }
              x = i.return;
            }
          }
          if (A = l, At(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
            vt.onPostCommitFiberRoot(Pr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        X = n, nt.transition = t;
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    t = Ln(n, t), t = Fs(e, t, 1), e = Bt(e, t, 1), t = Ie(), e !== null && (Vn(e, 1, t), $e(e, t));
  }
  function ae(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r))) {
          e = Ln(n, e), e = Us(t, e, 1), t = Bt(t, e, 1), e = Ie(), t !== null && (Vn(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, ke === e && (Ne & n) === n && (ve === 4 || ve === 3 && (Ne & 130023424) === Ne && 500 > ce() - po ? on(e, 0) : fo |= n), $e(e, t);
  }
  function ka(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Lr, Lr <<= 1, (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = Ie();
    e = zt(e, t), e !== null && (Vn(e, t, n), $e(e, n));
  }
  function xf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ka(e, n);
  }
  function Cf(e, t) {
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
        throw Error(h(314));
    }
    r !== null && r.delete(t), ka(e, n);
  }
  var Sa;
  Sa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) We = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return We = !1, ff(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
    else We = !1, le && (t.flags & 1048576) !== 0 && es(t, qr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        pl(e, t), e = t.pendingProps;
        var l = En(t, Pe.current);
        Pn(t, n), l = Vu(null, t, r, e, l, n);
        var u = Hu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (u = !0, Gr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ju(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Zu(t, r, e, n), t = eo(null, t, r, !0, u, n)) : (t.tag = 0, le && u && Nu(t), Oe(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (pl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Nf(r), e = at(r, e), l) {
            case 0:
              t = bu(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, at(r.type, e), n);
              break e;
          }
          throw Error(h(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), bu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Xs(t), e === null) throw Error(h(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, as(e, t), ll(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Ln(Error(h(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Ln(Error(h(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (Ge = Ft(t.stateNode.containerInfo.firstChild), Xe = t, le = !0, st = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (_n(), r === l) {
              t = Rt(e, t, n);
              break e;
            }
            Oe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && Ru(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, ku(r, l) ? o = null : u !== null && ku(r, u) && (t.flags |= 32), Ks(e, t), Oe(e, t, o, n), t.child;
      case 6:
        return e === null && Ru(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : Oe(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Bs(e, t, r, l, n);
      case 7:
        return Oe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Oe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Oe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, b(tl, r._currentValue), r._currentValue = o, u !== null) if (it(u.value, o)) {
            if (u.children === l.children && !Fe.current) {
              t = Rt(e, t, n);
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
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Iu(
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
              if (o = u.return, o === null) throw Error(h(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Iu(o, n, t), o = u.sibling;
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
          Oe(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = et(l), r = r(l), t.flags |= 1, Oe(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = at(r, t.pendingProps), l = at(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), pl(e, t), t.tag = 1, Ue(r) ? (e = !0, Gr(t)) : e = !1, Pn(t, n), Ds(t, r, l), Zu(t, r, l, n), eo(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(h(156, t.tag));
  };
  function Ea(e, t) {
    return ti(e, t);
  }
  function _f(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rt(e, t, n, r) {
    return new _f(e, t, n, r);
  }
  function So(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Nf(e) {
    if (typeof e == "function") return So(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ht) return 11;
      if (e === mt) return 14;
    }
    return 2;
  }
  function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Cl(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") So(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Ee:
        return an(n.children, l, u, t);
      case T:
        o = 8, l |= 8;
        break;
      case xe:
        return e = rt(12, n, t, l | 2), e.elementType = xe, e.lanes = u, e;
      case Qe:
        return e = rt(13, n, t, l), e.elementType = Qe, e.lanes = u, e;
      case ut:
        return e = rt(19, n, t, l), e.elementType = ut, e.lanes = u, e;
      case se:
        return _l(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ce:
            o = 10;
            break e;
          case Et:
            o = 9;
            break e;
          case ht:
            o = 11;
            break e;
          case mt:
            o = 14;
            break e;
          case je:
            o = 16, r = null;
            break e;
        }
        throw Error(h(130, e == null ? e : typeof e, ""));
    }
    return t = rt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function an(e, t, n, r) {
    return e = rt(7, e, r, t), e.lanes = n, e;
  }
  function _l(e, t, n, r) {
    return e = rt(22, e, r, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Eo(e, t, n) {
    return e = rt(6, e, null, t), e.lanes = n, e;
  }
  function xo(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function zf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Co(e, t, n, r, l, u, o, i, s) {
    return e = new zf(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = rt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(u), e;
  }
  function Pf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ge, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function xa(e) {
    if (!e) return Wt;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(h(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ue(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ue(n)) return Ji(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, u, o, i, s) {
    return e = Co(n, r, !0, e, l, u, o, i, s), e.context = xa(null), n = e.current, r = Ie(), l = Kt(n), u = Pt(r, l), u.callback = t ?? null, Bt(n, u, l), e.current.lanes = l, Vn(e, l, r), $e(e, r), e;
  }
  function Nl(e, t, n, r) {
    var l = t.current, u = Ie(), o = Kt(l);
    return n = xa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, o), e !== null && (dt(e, l, o, u), rl(e, l, o)), o;
  }
  function zl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function _a(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _o(e, t) {
    _a(e, t), (e = e.alternate) && _a(e, t);
  }
  function Rf() {
    return null;
  }
  var Na = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function No(e) {
    this._internalRoot = e;
  }
  Pl.prototype.render = No.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    Nl(e, t, null, null);
  }, Pl.prototype.unmount = No.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      un(function() {
        Nl(null, e, null, null);
      }), t[xt] = null;
    }
  };
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ai();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && di(e);
    }
  };
  function zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Rl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function za() {
  }
  function Lf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = zl(o);
          u.call(p);
        };
      }
      var o = Ca(t, r, e, 0, null, !1, !1, "", za);
      return e._reactRootContainer = o, e[xt] = o.current, rr(e.nodeType === 8 ? e.parentNode : e), un(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = zl(s);
        i.call(p);
      };
    }
    var s = Co(e, 0, !1, null, null, !1, !1, "", za);
    return e._reactRootContainer = s, e[xt] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), un(function() {
      Nl(t, s, n, r);
    }), s;
  }
  function Ll(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = zl(o);
          i.call(s);
        };
      }
      Nl(t, o, e, l);
    } else o = Lf(n, t, e, l, r);
    return zl(o);
  }
  ii = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Zl(t, n | 1), $e(t, ce()), (A & 6) === 0 && (On = ce() + 500, At()));
        }
        break;
      case 13:
        un(function() {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ie();
            dt(r, e, 1, l);
          }
        }), _o(e, 1);
    }
  }, Jl = function(e) {
    if (e.tag === 13) {
      var t = zt(e, 134217728);
      if (t !== null) {
        var n = Ie();
        dt(t, e, 134217728, n);
      }
      _o(e, 134217728);
    }
  }, si = function(e) {
    if (e.tag === 13) {
      var t = Kt(e), n = zt(e, t);
      if (n !== null) {
        var r = Ie();
        dt(n, e, t, r);
      }
      _o(e, t);
    }
  }, ai = function() {
    return X;
  }, ci = function(e, t) {
    var n = X;
    try {
      return X = e, t();
    } finally {
      X = n;
    }
  }, Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Yr(r);
              if (!l) throw Error(h(90));
              Io(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Wo(e, n);
        break;
      case "select":
        t = n.value, t != null && cn(e, !!n.multiple, t, !1);
    }
  }, Xo = go, Go = un;
  var Tf = { usingClientEntryPoint: !1, Events: [or, kn, Yr, Ko, Yo, go] }, kr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mf = { bundleType: kr.bundleType, version: kr.version, rendererPackageName: kr.rendererPackageName, rendererConfig: kr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: kr.findFiberByHostInstance || Rf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Pr = Tl.inject(Mf), vt = Tl;
    } catch {
    }
  }
  return Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tf, Be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zo(t)) throw Error(h(200));
    return Pf(e, t, null, n);
  }, Be.createRoot = function(e, t) {
    if (!zo(e)) throw Error(h(299));
    var n = !1, r = "", l = Na;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Co(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new No(t);
  }, Be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(h(188)) : (e = Object.keys(e).join(","), Error(h(268, e)));
    return e = bo(t), e = e === null ? null : e.stateNode, e;
  }, Be.flushSync = function(e) {
    return un(e);
  }, Be.hydrate = function(e, t, n) {
    if (!Rl(t)) throw Error(h(200));
    return Ll(null, e, t, !0, n);
  }, Be.hydrateRoot = function(e, t, n) {
    if (!zo(e)) throw Error(h(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = Na;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ca(t, null, e, 1, n ?? null, l, !1, u, o), e[xt] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Pl(t);
  }, Be.render = function(e, t, n) {
    if (!Rl(t)) throw Error(h(200));
    return Ll(null, e, t, !1, n);
  }, Be.unmountComponentAtNode = function(e) {
    if (!Rl(e)) throw Error(h(40));
    return e._reactRootContainer ? (un(function() {
      Ll(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xt] = null;
      });
    }), !0) : !1;
  }, Be.unstable_batchedUpdates = go, Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Rl(n)) throw Error(h(200));
    if (e == null || e._reactInternals === void 0) throw Error(h(38));
    return Ll(e, t, n, !1, r);
  }, Be.version = "18.3.1-next-f1338f8080-20240426", Be;
}
var Da;
function Af() {
  if (Da) return Lo.exports;
  Da = 1;
  function k() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (O) {
        console.error(O);
      }
  }
  return k(), Lo.exports = Wf(), Lo.exports;
}
var ja;
function $f() {
  if (ja) return Ml;
  ja = 1;
  var k = Af();
  return Ml.createRoot = k.createRoot, Ml.hydrateRoot = k.hydrateRoot, Ml;
}
var Bf = $f();
const pt = 32, St = 4, Dn = 32;
function Vf(k, O, h) {
  if (h === null || k <= h)
    return Array.from({ length: k }, (D, G) => ({
      type: "page",
      page: G + 1
    }));
  if (h === 0)
    return [];
  if (h === 1)
    return [{ type: "page", page: O }];
  if (h === 2)
    if (O === k) {
      const D = [{ type: "page", page: 1 }];
      return k > 2 && D.push({ type: "ellipsis", key: "middle" }), D.push({ type: "page", page: k }), D;
    } else {
      const D = [{ type: "page", page: O }];
      return O < k - 1 && D.push({ type: "ellipsis", key: "middle" }), D.push({ type: "page", page: k }), D;
    }
  const Q = [], ee = Math.max(0, h - 3), W = Math.floor(ee / 2), de = k > 1;
  let $ = Math.max(2, O - W), F = Math.min(k - 1, O + W);
  const ue = ee + 1;
  O <= W + 2 ? ($ = 2, F = Math.min(k - 1, 1 + ue)) : O >= k - W - 1 && (F = k - 1, $ = Math.max(2, k - ue)), Q.push({ type: "page", page: 1 }), $ > 2 && Q.push({ type: "ellipsis", key: "left" });
  for (let D = $; D <= F; D++)
    Q.push({ type: "page", page: D });
  return F < k - 1 && Q.push({ type: "ellipsis", key: "right" }), de && k > 1 && Q.push({ type: "page", page: k }), Q;
}
function Hf(k) {
  const O = k - 2 * Dn - 2 * St;
  if (O <= 0) return 0;
  const h = 2 * (pt + St), Q = O - h;
  if (Q <= 0) return 1;
  const ee = Math.floor((Q + St) / (pt + St));
  return Math.max(1, ee);
}
function Qf(k) {
  const O = 2 * Dn + St, h = 2 * Dn + pt + 2 * St, Q = 2 * Dn + 3 * pt + 4 * St;
  return k >= Q ? "full" : k >= h ? "current-only" : (k >= O, "arrows-only");
}
const Kf = `
  .st-pagination-btn:focus {
    outline: none;
  }
  .st-pagination-btn:focus-visible {
    box-shadow: 0 0 0 2px var(--st-primary-color) !important;
  }
`, Yf = ({
  numPages: k,
  disabled: O,
  maxVisiblePages: h,
  width: Q,
  setStateValue: ee
}) => {
  const [W, de] = ze.useState(1), [$, F] = ze.useState(null), ue = ze.useRef(null);
  ze.useEffect(() => {
    const T = ue.current;
    if (!T) return;
    const xe = new ResizeObserver((Ce) => {
      for (const Et of Ce)
        F(Et.contentRect.width);
    });
    return xe.observe(T), F(T.getBoundingClientRect().width), () => {
      xe.disconnect();
    };
  }, []);
  const D = ze.useMemo(() => $ === null ? "full" : Qf($), [$]), G = ze.useMemo(() => {
    if (D !== "full")
      return 0;
    if ($ === null)
      return h;
    const T = Hf($);
    return h === null ? T : Math.min(h, T);
  }, [$, h, D]), Z = ze.useMemo(() => D === "arrows-only" ? [] : D === "current-only" ? [{ type: "page", page: W }] : Vf(k, W, G), [k, W, G, D]), ye = ze.useCallback(
    (T) => {
      O || T < 1 || T > k || (de(T), ee("page", T));
    },
    [O, k, ee]
  ), De = ze.useCallback(() => {
    W > 1 && ye(W - 1);
  }, [W, ye]), J = ze.useCallback(() => {
    W < k && ye(W + 1);
  }, [W, k, ye]), K = ze.useMemo(() => {
    const T = {
      display: "flex",
      justifyContent: "center",
      // Center the inner content
      maxWidth: "100%"
    };
    return Q === "stretch" ? T.width = "100%" : typeof Q == "number" ? T.width = `${Q}px` : (T.justifyContent = "flex-start", T.width = "100%"), T;
  }, [Q]), lt = ze.useMemo(() => {
    const T = 2 * Dn + St;
    return {
      display: "flex",
      alignItems: "center",
      gap: `${St}px`,
      fontFamily: "var(--st-font)",
      fontSize: "14px",
      minWidth: `${T}px`,
      // Always show arrows
      maxWidth: "100%"
    };
  }, []), Je = ze.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      gap: `${St}px`,
      overflow: "hidden",
      // Only hide overflow for page items, not arrows
      flex: "0 1 auto",
      // Don't grow, can shrink, auto basis
      minWidth: 0
      // Allow shrinking
    }),
    []
  ), Ve = ze.useCallback(
    (T, xe) => {
      const Ce = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${pt}px`,
        // Fixed width for consistent sizing
        minWidth: `${pt}px`,
        height: `${pt}px`,
        padding: "0",
        border: "1px solid",
        borderRadius: "6px",
        cursor: xe ? "not-allowed" : "pointer",
        transition: "border-color 0.15s ease, background-color 0.15s ease",
        outline: "none",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: T ? 600 : 400,
        flexShrink: 0
        // Don't shrink
      };
      return xe ? {
        ...Ce,
        backgroundColor: "transparent",
        borderColor: "var(--st-gray-60)",
        color: "var(--st-gray-60)",
        opacity: 0.5
      } : T ? {
        ...Ce,
        backgroundColor: "transparent",
        borderColor: "var(--st-text-color)",
        color: "var(--st-text-color)"
      } : {
        ...Ce,
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "var(--st-text-color)"
      };
    },
    []
  ), he = ze.useCallback((T) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${Dn}px`,
    height: `${pt}px`,
    padding: 0,
    border: "none",
    borderRadius: "6px",
    cursor: T ? "not-allowed" : "pointer",
    transition: "opacity 0.15s ease",
    outline: "none",
    backgroundColor: "transparent",
    color: T ? "var(--st-gray-60)" : "var(--st-text-color)",
    opacity: T ? 0.5 : 1,
    fontFamily: "inherit",
    fontSize: "16px",
    flexShrink: 0
  }), []), He = ze.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${pt}px`,
      // Fixed width for consistent sizing
      minWidth: `${pt}px`,
      height: `${pt}px`,
      color: "var(--st-text-color)",
      userSelect: "none",
      flexShrink: 0
      // Don't shrink
    }),
    []
  ), ge = O || W === 1, Ee = O || W === k;
  return /* @__PURE__ */ Me.jsxs(Me.Fragment, { children: [
    /* @__PURE__ */ Me.jsx("style", { children: Kf }),
    /* @__PURE__ */ Me.jsx("div", { ref: ue, style: K, children: /* @__PURE__ */ Me.jsxs("div", { style: lt, children: [
      /* @__PURE__ */ Me.jsx(
        "button",
        {
          type: "button",
          className: "st-pagination-btn",
          style: he(ge),
          onClick: De,
          disabled: ge,
          "aria-label": "Previous page",
          children: /* @__PURE__ */ Me.jsx(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ Me.jsx(
                "path",
                {
                  d: "M10 12L6 8L10 4",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ Me.jsx("div", { style: Je, children: Z.map((T) => {
        if (T.type === "ellipsis")
          return /* @__PURE__ */ Me.jsx("span", { style: He, "aria-hidden": "true", children: "..." }, T.key);
        const xe = T.page === W, Ce = `page-${T.page}`;
        return /* @__PURE__ */ Me.jsx(
          "button",
          {
            type: "button",
            className: "st-pagination-btn",
            style: Ve(xe, O),
            onClick: () => ye(T.page),
            disabled: O,
            "aria-label": `Page ${T.page}`,
            "aria-current": xe ? "page" : void 0,
            children: T.page
          },
          Ce
        );
      }) }),
      /* @__PURE__ */ Me.jsx(
        "button",
        {
          type: "button",
          className: "st-pagination-btn",
          style: he(Ee),
          onClick: J,
          disabled: Ee,
          "aria-label": "Next page",
          children: /* @__PURE__ */ Me.jsx(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ Me.jsx(
                "path",
                {
                  d: "M6 4L10 8L6 12",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        }
      )
    ] }) })
  ] });
}, Ol = /* @__PURE__ */ new WeakMap(), Xf = (k) => {
  const { data: O, parentElement: h, setStateValue: Q } = k, ee = h.querySelector(".react-root");
  if (!ee)
    throw new Error("Unexpected: React root element not found");
  let W = Ol.get(h);
  W || (W = Bf.createRoot(ee), Ol.set(h, W));
  const { num_pages: de, disabled: $, max_visible_pages: F, width: ue } = O;
  return W.render(
    /* @__PURE__ */ Me.jsx(ze.StrictMode, { children: /* @__PURE__ */ Me.jsx(
      Yf,
      {
        setStateValue: Q,
        numPages: de,
        disabled: $,
        maxVisiblePages: F,
        width: ue
      }
    ) })
  ), () => {
    const D = Ol.get(h);
    D && (D.unmount(), Ol.delete(h));
  };
};
export {
  Xf as default
};
