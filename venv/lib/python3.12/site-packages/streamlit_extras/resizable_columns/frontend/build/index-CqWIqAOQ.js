var _o = { exports: {} }, gr = {}, zo = { exports: {} }, F = {};
var _a;
function Tf() {
  if (_a) return F;
  _a = 1;
  var P = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.provider"), ke = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), q = Symbol.iterator;
  function G(c) {
    return c === null || typeof c != "object" ? null : (c = q && c[q] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var Ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fe = Object.assign, O = {};
  function D(c, v, I) {
    this.props = c, this.context = v, this.refs = O, this.updater = I || Ie;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, D.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = D.prototype;
  function me(c, v, I) {
    this.props = c, this.context = v, this.refs = O, this.updater = I || Ie;
  }
  var he = me.prototype = new ye();
  he.constructor = me, Fe(he, D.prototype), he.isPureReactComponent = !0;
  var ce = Array.isArray, Ee = Object.prototype.hasOwnProperty, Y = { current: null }, xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(c, v, I) {
    var j, V = {}, B = null, Z = null;
    if (v != null) for (j in v.ref !== void 0 && (Z = v.ref), v.key !== void 0 && (B = "" + v.key), v) Ee.call(v, j) && !xe.hasOwnProperty(j) && (V[j] = v[j]);
    var W = arguments.length - 2;
    if (W === 1) V.children = I;
    else if (1 < W) {
      for (var re = Array(W), Xe = 0; Xe < W; Xe++) re[Xe] = arguments[Xe + 2];
      V.children = re;
    }
    if (c && c.defaultProps) for (j in W = c.defaultProps, W) V[j] === void 0 && (V[j] = W[j]);
    return { $$typeof: P, type: c, key: B, ref: Z, props: V, _owner: Y.current };
  }
  function dt(c, v) {
    return { $$typeof: P, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function pt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === P;
  }
  function mt(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(I) {
      return v[I];
    });
  }
  var Re = /\/+/g;
  function Le(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? mt("" + c.key) : v.toString(36);
  }
  function Ve(c, v, I, j, V) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else switch (B) {
      case "string":
      case "number":
        Z = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case P:
          case T:
            Z = !0;
        }
    }
    if (Z) return Z = c, V = V(Z), c = j === "" ? "." + Le(Z, 0) : j, ce(V) ? (I = "", c != null && (I = c.replace(Re, "$&/") + "/"), Ve(V, v, I, "", function(Xe) {
      return Xe;
    })) : V != null && (pt(V) && (V = dt(V, I + (!V.key || Z && Z.key === V.key ? "" : ("" + V.key).replace(Re, "$&/") + "/") + c)), v.push(V)), 1;
    if (Z = 0, j = j === "" ? "." : j + ":", ce(c)) for (var W = 0; W < c.length; W++) {
      B = c[W];
      var re = j + Le(B, W);
      Z += Ve(B, v, I, re, V);
    }
    else if (re = G(c), typeof re == "function") for (c = re.call(c), W = 0; !(B = c.next()).done; ) B = B.value, re = j + Le(B, W++), Z += Ve(B, v, I, re, V);
    else if (B === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return Z;
  }
  function ge(c, v, I) {
    if (c == null) return c;
    var j = [], V = 0;
    return Ve(c, j, "", "", function(B) {
      return v.call(I, B, V++);
    }), j;
  }
  function ue(c) {
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
  var b = { current: null }, S = { transition: null }, N = { ReactCurrentDispatcher: b, ReactCurrentBatchConfig: S, ReactCurrentOwner: Y };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return F.Children = { map: ge, forEach: function(c, v, I) {
    ge(c, function() {
      v.apply(this, arguments);
    }, I);
  }, count: function(c) {
    var v = 0;
    return ge(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return ge(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!pt(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, F.Component = D, F.Fragment = m, F.Profiler = K, F.PureComponent = me, F.StrictMode = $, F.Suspense = U, F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, F.act = x, F.cloneElement = function(c, v, I) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var j = Fe({}, c.props), V = c.key, B = c.ref, Z = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (B = v.ref, Z = Y.current), v.key !== void 0 && (V = "" + v.key), c.type && c.type.defaultProps) var W = c.type.defaultProps;
      for (re in v) Ee.call(v, re) && !xe.hasOwnProperty(re) && (j[re] = v[re] === void 0 && W !== void 0 ? W[re] : v[re]);
    }
    var re = arguments.length - 2;
    if (re === 1) j.children = I;
    else if (1 < re) {
      W = Array(re);
      for (var Xe = 0; Xe < re; Xe++) W[Xe] = arguments[Xe + 2];
      j.children = W;
    }
    return { $$typeof: P, type: c.type, key: V, ref: B, props: j, _owner: Z };
  }, F.createContext = function(c) {
    return c = { $$typeof: ke, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: ne, _context: c }, c.Consumer = c;
  }, F.createElement = je, F.createFactory = function(c) {
    var v = je.bind(null, c);
    return v.type = c, v;
  }, F.createRef = function() {
    return { current: null };
  }, F.forwardRef = function(c) {
    return { $$typeof: se, render: c };
  }, F.isValidElement = pt, F.lazy = function(c) {
    return { $$typeof: pe, _payload: { _status: -1, _result: c }, _init: ue };
  }, F.memo = function(c, v) {
    return { $$typeof: X, type: c, compare: v === void 0 ? null : v };
  }, F.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, F.unstable_act = x, F.useCallback = function(c, v) {
    return b.current.useCallback(c, v);
  }, F.useContext = function(c) {
    return b.current.useContext(c);
  }, F.useDebugValue = function() {
  }, F.useDeferredValue = function(c) {
    return b.current.useDeferredValue(c);
  }, F.useEffect = function(c, v) {
    return b.current.useEffect(c, v);
  }, F.useId = function() {
    return b.current.useId();
  }, F.useImperativeHandle = function(c, v, I) {
    return b.current.useImperativeHandle(c, v, I);
  }, F.useInsertionEffect = function(c, v) {
    return b.current.useInsertionEffect(c, v);
  }, F.useLayoutEffect = function(c, v) {
    return b.current.useLayoutEffect(c, v);
  }, F.useMemo = function(c, v) {
    return b.current.useMemo(c, v);
  }, F.useReducer = function(c, v, I) {
    return b.current.useReducer(c, v, I);
  }, F.useRef = function(c) {
    return b.current.useRef(c);
  }, F.useState = function(c) {
    return b.current.useState(c);
  }, F.useSyncExternalStore = function(c, v, I) {
    return b.current.useSyncExternalStore(c, v, I);
  }, F.useTransition = function() {
    return b.current.useTransition();
  }, F.version = "18.3.1", F;
}
var za;
function Lo() {
  return za || (za = 1, zo.exports = Tf()), zo.exports;
}
var Pa;
function Mf() {
  if (Pa) return gr;
  Pa = 1;
  var P = Lo(), T = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), $ = Object.prototype.hasOwnProperty, K = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ke(se, U, X) {
    var pe, q = {}, G = null, Ie = null;
    X !== void 0 && (G = "" + X), U.key !== void 0 && (G = "" + U.key), U.ref !== void 0 && (Ie = U.ref);
    for (pe in U) $.call(U, pe) && !ne.hasOwnProperty(pe) && (q[pe] = U[pe]);
    if (se && se.defaultProps) for (pe in U = se.defaultProps, U) q[pe] === void 0 && (q[pe] = U[pe]);
    return { $$typeof: T, type: se, key: G, ref: Ie, props: q, _owner: K.current };
  }
  return gr.Fragment = m, gr.jsx = ke, gr.jsxs = ke, gr;
}
var Na;
function Of() {
  return Na || (Na = 1, _o.exports = Mf()), _o.exports;
}
var Mn = Of(), ft = Lo(), Rl = {}, Po = { exports: {} }, Ke = {}, No = { exports: {} }, Ro = {};
var Ra;
function Df() {
  return Ra || (Ra = 1, (function(P) {
    function T(S, N) {
      var x = S.length;
      S.push(N);
      e: for (; 0 < x; ) {
        var c = x - 1 >>> 1, v = S[c];
        if (0 < K(v, N)) S[c] = N, S[x] = v, x = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function $(S) {
      if (S.length === 0) return null;
      var N = S[0], x = S.pop();
      if (x !== N) {
        S[0] = x;
        e: for (var c = 0, v = S.length, I = v >>> 1; c < I; ) {
          var j = 2 * (c + 1) - 1, V = S[j], B = j + 1, Z = S[B];
          if (0 > K(V, x)) B < v && 0 > K(Z, V) ? (S[c] = Z, S[B] = x, c = B) : (S[c] = V, S[j] = x, c = j);
          else if (B < v && 0 > K(Z, x)) S[c] = Z, S[B] = x, c = B;
          else break e;
        }
      }
      return N;
    }
    function K(S, N) {
      var x = S.sortIndex - N.sortIndex;
      return x !== 0 ? x : S.id - N.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ne = performance;
      P.unstable_now = function() {
        return ne.now();
      };
    } else {
      var ke = Date, se = ke.now();
      P.unstable_now = function() {
        return ke.now() - se;
      };
    }
    var U = [], X = [], pe = 1, q = null, G = 3, Ie = !1, Fe = !1, O = !1, D = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(S) {
      for (var N = m(X); N !== null; ) {
        if (N.callback === null) $(X);
        else if (N.startTime <= S) $(X), N.sortIndex = N.expirationTime, T(U, N);
        else break;
        N = m(X);
      }
    }
    function ce(S) {
      if (O = !1, he(S), !Fe) if (m(U) !== null) Fe = !0, ue(Ee);
      else {
        var N = m(X);
        N !== null && b(ce, N.startTime - S);
      }
    }
    function Ee(S, N) {
      Fe = !1, O && (O = !1, ye(je), je = -1), Ie = !0;
      var x = G;
      try {
        for (he(N), q = m(U); q !== null && (!(q.expirationTime > N) || S && !mt()); ) {
          var c = q.callback;
          if (typeof c == "function") {
            q.callback = null, G = q.priorityLevel;
            var v = c(q.expirationTime <= N);
            N = P.unstable_now(), typeof v == "function" ? q.callback = v : q === m(U) && $(U), he(N);
          } else $(U);
          q = m(U);
        }
        if (q !== null) var I = !0;
        else {
          var j = m(X);
          j !== null && b(ce, j.startTime - N), I = !1;
        }
        return I;
      } finally {
        q = null, G = x, Ie = !1;
      }
    }
    var Y = !1, xe = null, je = -1, dt = 5, pt = -1;
    function mt() {
      return !(P.unstable_now() - pt < dt);
    }
    function Re() {
      if (xe !== null) {
        var S = P.unstable_now();
        pt = S;
        var N = !0;
        try {
          N = xe(!0, S);
        } finally {
          N ? Le() : (Y = !1, xe = null);
        }
      } else Y = !1;
    }
    var Le;
    if (typeof me == "function") Le = function() {
      me(Re);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), ge = Ve.port2;
      Ve.port1.onmessage = Re, Le = function() {
        ge.postMessage(null);
      };
    } else Le = function() {
      D(Re, 0);
    };
    function ue(S) {
      xe = S, Y || (Y = !0, Le());
    }
    function b(S, N) {
      je = D(function() {
        S(P.unstable_now());
      }, N);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, P.unstable_continueExecution = function() {
      Fe || Ie || (Fe = !0, ue(Ee));
    }, P.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : dt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, P.unstable_getFirstCallbackNode = function() {
      return m(U);
    }, P.unstable_next = function(S) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = G;
      }
      var x = G;
      G = N;
      try {
        return S();
      } finally {
        G = x;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function(S, N) {
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
      var x = G;
      G = S;
      try {
        return N();
      } finally {
        G = x;
      }
    }, P.unstable_scheduleCallback = function(S, N, x) {
      var c = P.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? c + x : c) : x = c, S) {
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
      return v = x + v, S = { id: pe++, callback: N, priorityLevel: S, startTime: x, expirationTime: v, sortIndex: -1 }, x > c ? (S.sortIndex = x, T(X, S), m(U) === null && S === m(X) && (O ? (ye(je), je = -1) : O = !0, b(ce, x - c))) : (S.sortIndex = v, T(U, S), Fe || Ie || (Fe = !0, ue(Ee))), S;
    }, P.unstable_shouldYield = mt, P.unstable_wrapCallback = function(S) {
      var N = G;
      return function() {
        var x = G;
        G = N;
        try {
          return S.apply(this, arguments);
        } finally {
          G = x;
        }
      };
    };
  })(Ro)), Ro;
}
var La;
function If() {
  return La || (La = 1, No.exports = Df()), No.exports;
}
var Ta;
function Ff() {
  if (Ta) return Ke;
  Ta = 1;
  var P = Lo(), T = If();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var $ = /* @__PURE__ */ new Set(), K = {};
  function ne(e, t) {
    ke(e, t), ke(e + "Capture", t);
  }
  function ke(e, t) {
    for (K[e] = t, e = 0; e < t.length; e++) $.add(t[e]);
  }
  var se = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, q = {};
  function G(e) {
    return U.call(q, e) ? !0 : U.call(pe, e) ? !1 : X.test(e) ? q[e] = !0 : (pe[e] = !0, !1);
  }
  function Ie(e, t, n, r) {
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
  function Fe(e, t, n, r) {
    if (t === null || typeof t > "u" || Ie(e, t, n, r)) return !0;
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
  function O(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new O(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ye = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ye,
      me
    );
    D[t] = new O(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ye, me);
    D[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ye, me);
    D[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function he(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Fe(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ce = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), xe = /* @__PURE__ */ Symbol.for("react.fragment"), je = /* @__PURE__ */ Symbol.for("react.strict_mode"), dt = /* @__PURE__ */ Symbol.for("react.profiler"), pt = /* @__PURE__ */ Symbol.for("react.provider"), mt = /* @__PURE__ */ Symbol.for("react.context"), Re = /* @__PURE__ */ Symbol.for("react.forward_ref"), Le = /* @__PURE__ */ Symbol.for("react.suspense"), Ve = /* @__PURE__ */ Symbol.for("react.suspense_list"), ge = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.offscreen"), S = Symbol.iterator;
  function N(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var x = Object.assign, c;
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
  function j(e, t) {
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
  function V(e) {
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
        return e = j(e.type, !1), e;
      case 11:
        return e = j(e.type.render, !1), e;
      case 1:
        return e = j(e.type, !0), e;
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case xe:
        return "Fragment";
      case Y:
        return "Portal";
      case dt:
        return "Profiler";
      case je:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case mt:
        return (e.displayName || "Context") + ".Consumer";
      case pt:
        return (e._context.displayName || "Context") + ".Provider";
      case Re:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ge:
        return t = e.displayName || null, t !== null ? t : B(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return B(e(t));
        } catch {
        }
    }
    return null;
  }
  function Z(e) {
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
        return B(t);
      case 8:
        return t === je ? "StrictMode" : "Mode";
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
  function W(e) {
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
  function Xe(e) {
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
  function wr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function To(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = re(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, t) {
    var n = t.checked;
    return x({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = W(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Oo(e, t) {
    t = t.checked, t != null && he(e, "checked", t, !1);
  }
  function Ml(e, t) {
    Oo(e, t);
    var n = W(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, W(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Do(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ol(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function on(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + W(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Io(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(m(92));
        if (On(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: W(n) };
  }
  function Fo(e, t) {
    var n = W(t.value), r = W(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function jo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Uo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Ao = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var In = {
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
  }, Da = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Da.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function Bo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ia = x({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fl(e, t) {
    if (t) {
      if (Ia[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function jl(e, t) {
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
  var Ul = null;
  function Al(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, sn = null, an = null;
  function Ho(e) {
    if (e = rr(e)) {
      if (typeof Vl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Wr(t), Vl(e.stateNode, e.type, t));
    }
  }
  function $o(e) {
    sn ? an ? an.push(e) : an = [e] : sn = e;
  }
  function Wo() {
    if (sn) {
      var e = sn, t = an;
      if (an = sn = null, Ho(e), t) for (e = 0; e < t.length; e++) Ho(t[e]);
    }
  }
  function Qo(e, t) {
    return e(t);
  }
  function Ko() {
  }
  var Bl = !1;
  function Xo(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Qo(e, t, n);
    } finally {
      Bl = !1, (sn !== null || an !== null) && (Ko(), Wo());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
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
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (se) try {
    var jn = {};
    Object.defineProperty(jn, "passive", { get: function() {
      Hl = !0;
    } }), window.addEventListener("test", jn, jn), window.removeEventListener("test", jn, jn);
  } catch {
    Hl = !1;
  }
  function Fa(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1, Er = null, xr = !1, $l = null, ja = { onError: function(e) {
    Un = !0, Er = e;
  } };
  function Ua(e, t, n, r, l, u, o, i, s) {
    Un = !1, Er = null, Fa.apply(ja, arguments);
  }
  function Aa(e, t, n, r, l, u, o, i, s) {
    if (Ua.apply(this, arguments), Un) {
      if (Un) {
        var p = Er;
        Un = !1, Er = null;
      } else throw Error(m(198));
      xr || (xr = !0, $l = p);
    }
  }
  function Xt(e) {
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
  function Yo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Go(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Va(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(m(188));
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
          if (u === n) return Go(l), e;
          if (u === r) return Go(l), t;
          u = u.sibling;
        }
        throw Error(m(188));
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
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return e = Va(e), e !== null ? Jo(e) : null;
  }
  function Jo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Jo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qo = T.unstable_scheduleCallback, bo = T.unstable_cancelCallback, Ba = T.unstable_shouldYield, Ha = T.unstable_requestPaint, fe = T.unstable_now, $a = T.unstable_getCurrentPriorityLevel, Wl = T.unstable_ImmediatePriority, ei = T.unstable_UserBlockingPriority, Cr = T.unstable_NormalPriority, Wa = T.unstable_LowPriority, ti = T.unstable_IdlePriority, _r = null, ht = null;
  function Qa(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function") try {
      ht.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var lt = Math.clz32 ? Math.clz32 : Ya, Ka = Math.log, Xa = Math.LN2;
  function Ya(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ka(e) / Xa | 0) | 0;
  }
  var zr = 64, Pr = 4194304;
  function An(e) {
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
  function Nr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = An(i) : (u &= o, u !== 0 && (r = An(u)));
    } else o = n & ~l, o !== 0 ? r = An(o) : u !== 0 && (r = An(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - lt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Ga(e, t) {
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
  function Za(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - lt(u), i = 1 << o, s = l[o];
      s === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = Ga(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ni() {
    var e = zr;
    return zr <<= 1, (zr & 4194240) === 0 && (zr = 64), e;
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
  }
  function Ja(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - lt(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Xl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - lt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var Q = 0;
  function ri(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var li, Yl, ui, oi, ii, Gl = !1, Rr = [], Nt = null, Rt = null, Lt = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Tt = [], qa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function si(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nt = null;
        break;
      case "dragenter":
      case "dragleave":
        Rt = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Yl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ba(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Nt = $n(Nt, e, t, n, r, l), !0;
      case "dragenter":
        return Rt = $n(Rt, e, t, n, r, l), !0;
      case "mouseover":
        return Lt = $n(Lt, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Bn.set(u, $n(Bn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Hn.set(u, $n(Hn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function ai(e) {
    var t = Yt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Yo(n), t !== null) {
            e.blockedOn = t, ii(e.priority, function() {
              ui(n);
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
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ul = r, n.target.dispatchEvent(r), Ul = null;
      } else return t = rr(n), t !== null && Yl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ci(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function ec() {
    Gl = !1, Nt !== null && Lr(Nt) && (Nt = null), Rt !== null && Lr(Rt) && (Rt = null), Lt !== null && Lr(Lt) && (Lt = null), Bn.forEach(ci), Hn.forEach(ci);
  }
  function Wn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gl || (Gl = !0, T.unstable_scheduleCallback(T.unstable_NormalPriority, ec)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Rr.length) {
      Wn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Nt !== null && Wn(Nt, e), Rt !== null && Wn(Rt, e), Lt !== null && Wn(Lt, e), Bn.forEach(t), Hn.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) ai(n), n.blockedOn === null && Tt.shift();
  }
  var cn = ce.ReactCurrentBatchConfig, Tr = !0;
  function tc(e, t, n, r) {
    var l = Q, u = cn.transition;
    cn.transition = null;
    try {
      Q = 1, Zl(e, t, n, r);
    } finally {
      Q = l, cn.transition = u;
    }
  }
  function nc(e, t, n, r) {
    var l = Q, u = cn.transition;
    cn.transition = null;
    try {
      Q = 4, Zl(e, t, n, r);
    } finally {
      Q = l, cn.transition = u;
    }
  }
  function Zl(e, t, n, r) {
    if (Tr) {
      var l = Jl(e, t, n, r);
      if (l === null) mu(e, t, r, Mr, n), si(e, r);
      else if (ba(l, e, t, n, r)) r.stopPropagation();
      else if (si(e, r), t & 4 && -1 < qa.indexOf(e)) {
        for (; l !== null; ) {
          var u = rr(l);
          if (u !== null && li(u), u = Jl(e, t, n, r), u === null && mu(e, t, r, Mr, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (Mr = null, e = Al(r), e = Yt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Yo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Mr = e, null;
  }
  function fi(e) {
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
        switch ($a()) {
          case Wl:
            return 1;
          case ei:
            return 4;
          case Cr:
          case Wa:
            return 16;
          case ti:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null, ql = null, Or = null;
  function di() {
    if (Or) return Or;
    var e, t = ql, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function pi() {
    return !1;
  }
  function Ye(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ir : pi, this.isPropagationStopped = pi, this;
    }
    return x(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), t;
  }
  var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bl = Ye(fn), Kn = x({}, fn, { view: 0, detail: 0 }), rc = Ye(Kn), eu, tu, Xn, Fr = x({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ru, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Xn && (Xn && e.type === "mousemove" ? (eu = e.screenX - Xn.screenX, tu = e.screenY - Xn.screenY) : tu = eu = 0, Xn = e), eu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : tu;
  } }), mi = Ye(Fr), lc = x({}, Fr, { dataTransfer: 0 }), uc = Ye(lc), oc = x({}, Kn, { relatedTarget: 0 }), nu = Ye(oc), ic = x({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = Ye(ic), ac = x({}, fn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), cc = Ye(ac), fc = x({}, fn, { data: 0 }), hi = Ye(fc), dc = {
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
  }, pc = {
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
  }, mc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mc[e]) ? !!t[e] : !1;
  }
  function ru() {
    return hc;
  }
  var vc = x({}, Kn, { key: function(e) {
    if (e.key) {
      var t = dc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ru, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), yc = Ye(vc), gc = x({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vi = Ye(gc), wc = x({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ru }), Sc = Ye(wc), kc = x({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ec = Ye(kc), xc = x({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Cc = Ye(xc), _c = [9, 13, 27, 32], lu = se && "CompositionEvent" in window, Yn = null;
  se && "documentMode" in document && (Yn = document.documentMode);
  var zc = se && "TextEvent" in window && !Yn, yi = se && (!lu || Yn && 8 < Yn && 11 >= Yn), gi = " ", wi = !1;
  function Si(e, t) {
    switch (e) {
      case "keyup":
        return _c.indexOf(t.keyCode) !== -1;
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
  function ki(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dn = !1;
  function Pc(e, t) {
    switch (e) {
      case "compositionend":
        return ki(t);
      case "keypress":
        return t.which !== 32 ? null : (wi = !0, gi);
      case "textInput":
        return e = t.data, e === gi && wi ? null : e;
      default:
        return null;
    }
  }
  function Nc(e, t) {
    if (dn) return e === "compositionend" || !lu && Si(e, t) ? (e = di(), Or = ql = Mt = null, dn = !1, e) : null;
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
        return yi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ei(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rc[e.type] : t === "textarea";
  }
  function xi(e, t, n, r) {
    $o(r), t = Br(t, "onChange"), 0 < t.length && (n = new bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Lc(e) {
    Bi(e, 0);
  }
  function jr(e) {
    var t = yn(e);
    if (To(t)) return e;
  }
  function Tc(e, t) {
    if (e === "change") return t;
  }
  var Ci = !1;
  if (se) {
    var uu;
    if (se) {
      var ou = "oninput" in document;
      if (!ou) {
        var _i = document.createElement("div");
        _i.setAttribute("oninput", "return;"), ou = typeof _i.oninput == "function";
      }
      uu = ou;
    } else uu = !1;
    Ci = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function zi() {
    Gn && (Gn.detachEvent("onpropertychange", Pi), Zn = Gn = null);
  }
  function Pi(e) {
    if (e.propertyName === "value" && jr(Zn)) {
      var t = [];
      xi(t, Zn, e, Al(e)), Xo(Lc, t);
    }
  }
  function Mc(e, t, n) {
    e === "focusin" ? (zi(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", Pi)) : e === "focusout" && zi();
  }
  function Oc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Zn);
  }
  function Dc(e, t) {
    if (e === "click") return jr(t);
  }
  function Ic(e, t) {
    if (e === "input" || e === "change") return jr(t);
  }
  function Fc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : Fc;
  function Jn(e, t) {
    if (ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!U.call(t, l) || !ut(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ni(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ri(e, t) {
    var n = Ni(e);
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
      n = Ni(n);
    }
  }
  function Li(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Li(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ti() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function jc(e) {
    var t = Ti(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Li(n.ownerDocument.documentElement, n)) {
      if (r !== null && iu(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Ri(n, u);
          var o = Ri(
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
  var Uc = se && "documentMode" in document && 11 >= document.documentMode, pn = null, su = null, qn = null, au = !1;
  function Mi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au || pn == null || pn !== Sr(r) || (r = pn, "selectionStart" in r && iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Br(su, "onSelect"), 0 < r.length && (t = new bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
  }
  function Ur(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var mn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, cu = {}, Oi = {};
  se && (Oi = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
  function Ar(e) {
    if (cu[e]) return cu[e];
    if (!mn[e]) return e;
    var t = mn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Oi) return cu[e] = t[n];
    return e;
  }
  var Di = Ar("animationend"), Ii = Ar("animationiteration"), Fi = Ar("animationstart"), ji = Ar("transitionend"), Ui = /* @__PURE__ */ new Map(), Ai = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ot(e, t) {
    Ui.set(e, t), ne(t, [e]);
  }
  for (var fu = 0; fu < Ai.length; fu++) {
    var du = Ai[fu], Ac = du.toLowerCase(), Vc = du[0].toUpperCase() + du.slice(1);
    Ot(Ac, "on" + Vc);
  }
  Ot(Di, "onAnimationEnd"), Ot(Ii, "onAnimationIteration"), Ot(Fi, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(ji, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Vi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Aa(r, t, void 0, e), e.currentTarget = null;
  }
  function Bi(e, t) {
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
    if (xr) throw e = $l, xr = !1, $l = null, e;
  }
  function ee(e, t) {
    var n = t[Su];
    n === void 0 && (n = t[Su] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Hi(t, e, 2, !1), n.add(r));
  }
  function pu(e, t, n) {
    var r = 0;
    t && (r |= 4), Hi(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      e[Vr] = !0, $.forEach(function(n) {
        n !== "selectionchange" && (Bc.has(n) || pu(n, !1, e), pu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || (t[Vr] = !0, pu("selectionchange", !1, t));
    }
  }
  function Hi(e, t, n, r) {
    switch (fi(t)) {
      case 1:
        var l = tc;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Zl;
    }
    n = l.bind(null, t, n, e), l = void 0, !Hl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function mu(e, t, n, r, l) {
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
          if (o = Yt(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Xo(function() {
      var p = u, y = Al(n), g = [];
      e: {
        var h = Ui.get(e);
        if (h !== void 0) {
          var k = bl, C = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = yc;
              break;
            case "focusin":
              C = "focus", k = nu;
              break;
            case "focusout":
              C = "blur", k = nu;
              break;
            case "beforeblur":
            case "afterblur":
              k = nu;
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
              k = mi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Sc;
              break;
            case Di:
            case Ii:
            case Fi:
              k = sc;
              break;
            case ji:
              k = Ec;
              break;
            case "scroll":
              k = rc;
              break;
            case "wheel":
              k = Cc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = cc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = vi;
          }
          var _ = (t & 4) !== 0, de = !_ && e === "scroll", f = _ ? h !== null ? h + "Capture" : null : h;
          _ = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Fn(a, f), w != null && _.push(tr(a, w, d)))), de) break;
            a = a.return;
          }
          0 < _.length && (h = new k(h, C, null, n, y), g.push({ event: h, listeners: _ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && n !== Ul && (C = n.relatedTarget || n.fromElement) && (Yt(C) || C[St])) break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (C = n.relatedTarget || n.toElement, k = p, C = C ? Yt(C) : null, C !== null && (de = Xt(C), C !== de || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (_ = mi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (_ = vi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), de = k == null ? h : yn(k), d = C == null ? h : yn(C), h = new _(w, a + "leave", k, n, y), h.target = de, h.relatedTarget = d, w = null, Yt(y) === p && (_ = new _(f, a + "enter", C, n, y), _.target = d, _.relatedTarget = de, w = _), de = w, k && C) t: {
              for (_ = k, f = C, a = 0, d = _; d; d = hn(d)) a++;
              for (d = 0, w = f; w; w = hn(w)) d++;
              for (; 0 < a - d; ) _ = hn(_), a--;
              for (; 0 < d - a; ) f = hn(f), d--;
              for (; a--; ) {
                if (_ === f || f !== null && _ === f.alternate) break t;
                _ = hn(_), f = hn(f);
              }
              _ = null;
            }
            else _ = null;
            k !== null && $i(g, h, k, _, !1), C !== null && de !== null && $i(g, de, C, _, !0);
          }
        }
        e: {
          if (h = p ? yn(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var z = Tc;
          else if (Ei(h)) if (Ci) z = Ic;
          else {
            z = Oc;
            var R = Mc;
          }
          else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (z = Dc);
          if (z && (z = z(e, p))) {
            xi(g, z, n, y);
            break e;
          }
          R && R(e, h, p), e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && Ol(h, "number", h.value);
        }
        switch (R = p ? yn(p) : window, e) {
          case "focusin":
            (Ei(R) || R.contentEditable === "true") && (pn = R, su = p, qn = null);
            break;
          case "focusout":
            qn = su = pn = null;
            break;
          case "mousedown":
            au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            au = !1, Mi(g, n, y);
            break;
          case "selectionchange":
            if (Uc) break;
          case "keydown":
          case "keyup":
            Mi(g, n, y);
        }
        var L;
        if (lu) e: {
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
        else dn ? Si(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
        M && (yi && n.locale !== "ko" && (dn || M !== "onCompositionStart" ? M === "onCompositionEnd" && dn && (L = di()) : (Mt = y, ql = "value" in Mt ? Mt.value : Mt.textContent, dn = !0)), R = Br(p, M), 0 < R.length && (M = new hi(M, e, null, n, y), g.push({ event: M, listeners: R }), L ? M.data = L : (L = ki(n), L !== null && (M.data = L)))), (L = zc ? Pc(e, n) : Nc(e, n)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new hi("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: p }), y.data = L));
      }
      Bi(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Fn(e, n), u != null && r.unshift(tr(e, u, l)), u = Fn(e, t), u != null && r.push(tr(e, u, l))), e = e.return;
    }
    return r;
  }
  function hn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $i(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var i = n, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Fn(n, u), s != null && o.unshift(tr(n, s, i))) : l || (s = Fn(n, u), s != null && o.push(tr(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Hc = /\r\n?/g, $c = /\u0000|\uFFFD/g;
  function Wi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hc, `
`).replace($c, "");
  }
  function Hr(e, t, n) {
    if (t = Wi(t), Wi(e) !== t && n) throw Error(m(425));
  }
  function $r() {
  }
  var hu = null, vu = null;
  function yu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gu = typeof setTimeout == "function" ? setTimeout : void 0, Wc = typeof clearTimeout == "function" ? clearTimeout : void 0, Qi = typeof Promise == "function" ? Promise : void 0, Qc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qi < "u" ? function(e) {
    return Qi.resolve(null).then(e).catch(Kc);
  } : gu;
  function Kc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wu(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Dt(e) {
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
  function Ki(e) {
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
  var vn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + vn, nr = "__reactProps$" + vn, St = "__reactContainer$" + vn, Su = "__reactEvents$" + vn, Xc = "__reactListeners$" + vn, Yc = "__reactHandles$" + vn;
  function Yt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ki(e); e !== null; ) {
          if (n = e[vt]) return n;
          e = Ki(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[vt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var ku = [], gn = -1;
  function It(e) {
    return { current: e };
  }
  function te(e) {
    0 > gn || (e.current = ku[gn], ku[gn] = null, gn--);
  }
  function J(e, t) {
    gn++, ku[gn] = e.current, e.current = t;
  }
  var Ft = {}, Te = It(Ft), Be = It(!1), Gt = Ft;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function He(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    te(Be), te(Te);
  }
  function Xi(e, t, n) {
    if (Te.current !== Ft) throw Error(m(168));
    J(Te, t), J(Be, n);
  }
  function Yi(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Z(e) || "Unknown", l));
    return x({}, n, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Gt = Te.current, J(Te, e), J(Be, Be.current), !0;
  }
  function Gi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = Yi(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, te(Be), te(Te), J(Te, e)) : te(Be), J(Be, n);
  }
  var kt = null, Xr = !1, Eu = !1;
  function Zi(e) {
    kt === null ? kt = [e] : kt.push(e);
  }
  function Gc(e) {
    Xr = !0, Zi(e);
  }
  function jt() {
    if (!Eu && kt !== null) {
      Eu = !0;
      var e = 0, t = Q;
      try {
        var n = kt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        kt = null, Xr = !1;
      } catch (l) {
        throw kt !== null && (kt = kt.slice(e + 1)), qo(Wl, jt), l;
      } finally {
        Q = t, Eu = !1;
      }
    }
    return null;
  }
  var Sn = [], kn = 0, Yr = null, Gr = 0, qe = [], be = 0, Zt = null, Et = 1, xt = "";
  function Jt(e, t) {
    Sn[kn++] = Gr, Sn[kn++] = Yr, Yr = e, Gr = t;
  }
  function Ji(e, t, n) {
    qe[be++] = Et, qe[be++] = xt, qe[be++] = Zt, Zt = e;
    var r = Et;
    e = xt;
    var l = 32 - lt(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - lt(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Et = 1 << 32 - lt(t) + l | n << l | r, xt = u + e;
    } else Et = 1 << u | n << l | r, xt = e;
  }
  function xu(e) {
    e.return !== null && (Jt(e, 1), Ji(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Yr; ) Yr = Sn[--kn], Sn[kn] = null, Gr = Sn[--kn], Sn[kn] = null;
    for (; e === Zt; ) Zt = qe[--be], qe[be] = null, xt = qe[--be], qe[be] = null, Et = qe[--be], qe[be] = null;
  }
  var Ge = null, Ze = null, le = !1, ot = null;
  function qi(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function bi(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ze = Dt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ze = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: Et, overflow: xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ze = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (le) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!bi(e, t)) {
          if (_u(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = Ge;
          t && bi(e, t) ? qi(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Ge = e);
        }
      } else {
        if (_u(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, le = !1, Ge = e;
      }
    }
  }
  function es(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ge = e;
  }
  function Zr(e) {
    if (e !== Ge) return !1;
    if (!le) return es(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps)), t && (t = Ze)) {
      if (_u(e)) throw ts(), Error(m(418));
      for (; t; ) qi(e, t), t = Dt(t.nextSibling);
    }
    if (es(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Ge ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Ze; e; ) e = Dt(e.nextSibling);
  }
  function En() {
    Ze = Ge = null, le = !1;
  }
  function Pu(e) {
    ot === null ? ot = [e] : ot.push(e);
  }
  var Zc = ce.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ns(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rs(e) {
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
      return f = Qt(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = wo(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var z = d.type;
      return z === xe ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === ue && ns(z) === a.type) ? (w = l(a, d.props), w.ref = lr(f, a, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = So(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, z) {
      return a === null || a.tag !== 7 ? (a = un(d, f.mode, w, z), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wo("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Ee:
            return d = kl(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case Y:
            return a = So(a, f.mode, d), a.return = f, a;
          case ue:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (On(a) || N(a)) return a = un(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ee:
            return d.key === z ? s(f, a, d, w) : null;
          case Y:
            return d.key === z ? p(f, a, d, w) : null;
          case ue:
            return z = d._init, h(
              f,
              a,
              z(d._payload),
              w
            );
        }
        if (On(d) || N(d)) return z !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, z) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ee:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, z);
          case Y:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, z);
          case ue:
            var R = w._init;
            return k(f, a, d, R(w._payload), z);
        }
        if (On(w) || N(w)) return f = f.get(d) || null, y(a, f, w, z, null);
        Jr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var z = null, R = null, L = a, M = a = 0, ze = null; L !== null && M < d.length; M++) {
        L.index > M ? (ze = L, L = null) : ze = L.sibling;
        var H = h(f, L, d[M], w);
        if (H === null) {
          L === null && (L = ze);
          break;
        }
        e && L && H.alternate === null && t(f, L), a = u(H, a, M), R === null ? z = H : R.sibling = H, R = H, L = ze;
      }
      if (M === d.length) return n(f, L), le && Jt(f, M), z;
      if (L === null) {
        for (; M < d.length; M++) L = g(f, d[M], w), L !== null && (a = u(L, a, M), R === null ? z = L : R.sibling = L, R = L);
        return le && Jt(f, M), z;
      }
      for (L = r(f, L); M < d.length; M++) ze = k(L, f, M, d[M], w), ze !== null && (e && ze.alternate !== null && L.delete(ze.key === null ? M : ze.key), a = u(ze, a, M), R === null ? z = ze : R.sibling = ze, R = ze);
      return e && L.forEach(function(Kt) {
        return t(f, Kt);
      }), le && Jt(f, M), z;
    }
    function _(f, a, d, w) {
      var z = N(d);
      if (typeof z != "function") throw Error(m(150));
      if (d = z.call(d), d == null) throw Error(m(151));
      for (var R = z = null, L = a, M = a = 0, ze = null, H = d.next(); L !== null && !H.done; M++, H = d.next()) {
        L.index > M ? (ze = L, L = null) : ze = L.sibling;
        var Kt = h(f, L, H.value, w);
        if (Kt === null) {
          L === null && (L = ze);
          break;
        }
        e && L && Kt.alternate === null && t(f, L), a = u(Kt, a, M), R === null ? z = Kt : R.sibling = Kt, R = Kt, L = ze;
      }
      if (H.done) return n(
        f,
        L
      ), le && Jt(f, M), z;
      if (L === null) {
        for (; !H.done; M++, H = d.next()) H = g(f, H.value, w), H !== null && (a = u(H, a, M), R === null ? z = H : R.sibling = H, R = H);
        return le && Jt(f, M), z;
      }
      for (L = r(f, L); !H.done; M++, H = d.next()) H = k(L, f, M, H.value, w), H !== null && (e && H.alternate !== null && L.delete(H.key === null ? M : H.key), a = u(H, a, M), R === null ? z = H : R.sibling = H, R = H);
      return e && L.forEach(function(Lf) {
        return t(f, Lf);
      }), le && Jt(f, M), z;
    }
    function de(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === xe && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ee:
            e: {
              for (var z = d.key, R = a; R !== null; ) {
                if (R.key === z) {
                  if (z = d.type, z === xe) {
                    if (R.tag === 7) {
                      n(f, R.sibling), a = l(R, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (R.elementType === z || typeof z == "object" && z !== null && z.$$typeof === ue && ns(z) === R.type) {
                    n(f, R.sibling), a = l(R, d.props), a.ref = lr(f, R, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, R);
                  break;
                } else t(f, R);
                R = R.sibling;
              }
              d.type === xe ? (a = un(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case Y:
            e: {
              for (R = d.key; a !== null; ) {
                if (a.key === R) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = So(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case ue:
            return R = d._init, de(f, a, R(d._payload), w);
        }
        if (On(d)) return C(f, a, d, w);
        if (N(d)) return _(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = wo(d, f.mode, w), a.return = f, f = a), o(f)) : n(f, a);
    }
    return de;
  }
  var xn = rs(!0), ls = rs(!1), qr = It(null), br = null, Cn = null, Nu = null;
  function Ru() {
    Nu = Cn = br = null;
  }
  function Lu(e) {
    var t = qr.current;
    te(qr), e._currentValue = t;
  }
  function Tu(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function _n(e, t) {
    br = e, Nu = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && ($e = !0), e.firstContext = null);
  }
  function et(e) {
    var t = e._currentValue;
    if (Nu !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
      if (br === null) throw Error(m(308));
      Cn = e, br.dependencies = { lanes: 0, firstContext: e };
    } else Cn = Cn.next = e;
    return t;
  }
  var qt = null;
  function Mu(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Mu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r);
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Ou(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function os(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (A & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Mu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n);
  }
  function el(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  function is(e, t) {
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
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
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
        var h = i.lane, k = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, _ = i;
            switch (h = t, k = n, _.tag) {
              case 1:
                if (C = _.payload, typeof C == "function") {
                  g = C.call(k, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = _.payload, h = typeof C == "function" ? C.call(k, g, h) : C, h == null) break e;
                g = x({}, g, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else k = { eventTime: k, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, o |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      tn |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function ss(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var ur = {}, yt = It(ur), or = It(ur), ir = It(ur);
  function bt(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Du(e, t) {
    switch (J(ir, t), J(or, e), J(yt, ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Il(t, e);
    }
    te(yt), J(yt, t);
  }
  function zn() {
    te(yt), te(or), te(ir);
  }
  function as(e) {
    bt(ir.current);
    var t = bt(yt.current), n = Il(t, e.type);
    t !== n && (J(or, e), J(yt, n));
  }
  function Iu(e) {
    or.current === e && (te(yt), te(or));
  }
  var oe = It(0);
  function nl(e) {
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
  var Fu = [];
  function ju() {
    for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var rl = ce.ReactCurrentDispatcher, Uu = ce.ReactCurrentBatchConfig, en = 0, ie = null, we = null, Ce = null, ll = !1, sr = !1, ar = 0, Jc = 0;
  function Me() {
    throw Error(m(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
    return !0;
  }
  function Vu(e, t, n, r, l, u) {
    if (en = u, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? tf : nf, e = n(r, l), sr) {
      u = 0;
      do {
        if (sr = !1, ar = 0, 25 <= u) throw Error(m(301));
        u += 1, Ce = we = null, t.updateQueue = null, rl.current = rf, e = n(r, l);
      } while (sr);
    }
    if (rl.current = il, t = we !== null && we.next !== null, en = 0, Ce = we = ie = null, ll = !1, t) throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ce === null ? ie.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
  }
  function tt() {
    if (we === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Ce === null ? ie.memoizedState : Ce.next;
    if (t !== null) Ce = t, we = e;
    else {
      if (e === null) throw Error(m(310));
      we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, Ce === null ? ie.memoizedState = Ce = e : Ce = Ce.next = e;
    }
    return Ce;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hu(e) {
    var t = tt(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = we, l = r.baseQueue, u = n.pending;
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
        if ((en & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, ie.lanes |= y, tn |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, ut(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ie.lanes |= u, tn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $u(e) {
    var t = tt(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      ut(u, t.memoizedState) || ($e = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function cs() {
  }
  function fs(e, t) {
    var n = ie, r = tt(), l = t(), u = !ut(r.memoizedState, l);
    if (u && (r.memoizedState = l, $e = !0), r = r.queue, Wu(ms.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Ce !== null && Ce.memoizedState.tag & 1) {
      if (n.flags |= 2048, fr(9, ps.bind(null, n, r, l, t), void 0, null), _e === null) throw Error(m(349));
      (en & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ps(e, t, n, r) {
    t.value = n, t.getSnapshot = r, hs(t) && vs(e);
  }
  function ms(e, t, n) {
    return n(function() {
      hs(t) && vs(e);
    });
  }
  function hs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ut(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = Ct(e, 1);
    t !== null && ct(t, e, 1, -1);
  }
  function ys(e) {
    var t = gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ef.bind(null, ie, e), [t.memoizedState, e];
  }
  function fr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function gs() {
    return tt().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = gt();
    ie.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ol(e, t, n, r) {
    var l = tt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (we !== null) {
      var o = we.memoizedState;
      if (u = o.destroy, r !== null && Au(r, o.deps)) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    ie.flags |= e, l.memoizedState = fr(1 | t, n, u, r);
  }
  function ws(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Wu(e, t) {
    return ol(2048, 8, e, t);
  }
  function Ss(e, t) {
    return ol(4, 2, e, t);
  }
  function ks(e, t) {
    return ol(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function xs(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(4, 4, Es.bind(null, t, e), n);
  }
  function Qu() {
  }
  function Cs(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function _s(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zs(e, t, n) {
    return (en & 21) === 0 ? (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n) : (ut(n, t) || (n = ni(), ie.lanes |= n, tn |= n, e.baseState = !0), t);
  }
  function qc(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Uu.transition;
    Uu.transition = {};
    try {
      e(!1), t();
    } finally {
      Q = n, Uu.transition = r;
    }
  }
  function Ps() {
    return tt().memoizedState;
  }
  function bc(e, t, n) {
    var r = $t(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ns(e)) Rs(t, n);
    else if (n = us(e, t, n, r), n !== null) {
      var l = Ae();
      ct(n, e, r, l), Ls(n, t, r);
    }
  }
  function ef(e, t, n) {
    var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ns(e)) Rs(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, ut(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Mu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = us(e, t, l, r), n !== null && (l = Ae(), ct(n, e, r, l), Ls(n, t, r));
    }
  }
  function Ns(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Rs(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ls(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  var il = { readContext: et, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, tf = { readContext: et, useCallback: function(e, t) {
    return gt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: et, useEffect: ws, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(
      4194308,
      4,
      Es.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ul(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ul(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = gt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = gt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = bc.bind(null, ie, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = gt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ys, useDebugValue: Qu, useDeferredValue: function(e) {
    return gt().memoizedState = e;
  }, useTransition: function() {
    var e = ys(!1), t = e[0];
    return e = qc.bind(null, e[1]), gt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ie, l = gt();
    if (le) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), _e === null) throw Error(m(349));
      (en & 30) !== 0 || ds(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, ws(ms.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, fr(9, ps.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = gt(), t = _e.identifierPrefix;
    if (le) {
      var n = xt, r = Et;
      n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Jc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, nf = {
    readContext: et,
    useCallback: Cs,
    useContext: et,
    useEffect: Wu,
    useImperativeHandle: xs,
    useInsertionEffect: Ss,
    useLayoutEffect: ks,
    useMemo: _s,
    useReducer: Hu,
    useRef: gs,
    useState: function() {
      return Hu(cr);
    },
    useDebugValue: Qu,
    useDeferredValue: function(e) {
      var t = tt();
      return zs(t, we.memoizedState, e);
    },
    useTransition: function() {
      var e = Hu(cr)[0], t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: cs,
    useSyncExternalStore: fs,
    useId: Ps,
    unstable_isNewReconciler: !1
  }, rf = { readContext: et, useCallback: Cs, useContext: et, useEffect: Wu, useImperativeHandle: xs, useInsertionEffect: Ss, useLayoutEffect: ks, useMemo: _s, useReducer: $u, useRef: gs, useState: function() {
    return $u(cr);
  }, useDebugValue: Qu, useDeferredValue: function(e) {
    var t = tt();
    return we === null ? t.memoizedState = e : zs(t, we.memoizedState, e);
  }, useTransition: function() {
    var e = $u(cr)[0], t = tt().memoizedState;
    return [e, t];
  }, useMutableSource: cs, useSyncExternalStore: fs, useId: Ps, unstable_isNewReconciler: !1 };
  function it(e, t) {
    if (e && e.defaultProps) {
      t = x({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ku(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = $t(e), u = _t(r, l);
    u.payload = t, n != null && (u.callback = n), t = At(e, u, l), t !== null && (ct(t, e, l, r), el(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ae(), l = $t(e), u = _t(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = At(e, u, l), t !== null && (ct(t, e, l, r), el(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ae(), r = $t(e), l = _t(n, r);
    l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (ct(t, e, r, n), el(t, e, r));
  } };
  function Ts(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, u) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Ft, u = t.contextType;
    return typeof u == "object" && u !== null ? u = et(u) : (l = He(t) ? Gt : Te.current, r = t.contextTypes, u = (r = r != null) ? wn(e, l) : Ft), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Os(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ou(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = et(u) : (u = He(t) ? Gt : Te.current, l.context = wn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Ku(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && sl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
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
  function Yu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, co = r), Gu(e, t);
    }, n;
  }
  function Is(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Gu(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Gu(e, t), typeof r != "function" && (Bt === null ? Bt = /* @__PURE__ */ new Set([this]) : Bt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new lf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = wf.bind(null, e, t, n), t.then(e, e));
  }
  function js(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Us(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var uf = ce.ReactCurrentOwner, $e = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : xn(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return _n(t, l), r = Vu(e, t, n, r, u, l), n = Bu(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (le && n && xu(t), t.flags |= 1, Ue(e, t, r, l), t.child);
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !go(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Bs(e, t, u, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(o, r) && e.ref === t.ref) return zt(e, t, l);
    }
    return t.flags |= 1, e = Qt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Bs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref) if ($e = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && ($e = !0);
      else return t.lanes = e.lanes, zt(e, t, l);
    }
    return Zu(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Rn, Je), Je |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Rn, Je), Je |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, J(Rn, Je), Je |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, J(Rn, Je), Je |= r;
    return Ue(e, t, l, n), t.child;
  }
  function $s(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Zu(e, t, n, r, l) {
    var u = He(n) ? Gt : Te.current;
    return u = wn(t, u), _n(t, l), n = Vu(e, t, n, r, u, l), r = Bu(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, zt(e, t, l)) : (le && r && xu(t), t.flags |= 1, Ue(e, t, n, l), t.child);
  }
  function Ws(e, t, n, r, l) {
    if (He(n)) {
      var u = !0;
      Kr(t);
    } else u = !1;
    if (_n(t, l), t.stateNode === null) cl(e, t), Ms(t, n, r), Xu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = et(p) : (p = He(n) ? Gt : Te.current, p = wn(t, p));
      var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && Os(t, o, r, p), Ut = !1;
      var h = t.memoizedState;
      o.state = h, tl(t, r, o, l), s = t.memoizedState, i !== r || h !== s || Be.current || Ut ? (typeof y == "function" && (Ku(t, n, y, r), s = t.memoizedState), (i = Ut || Ts(t, n, i, r, h, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, os(e, t), i = t.memoizedProps, p = t.type === t.elementType ? i : it(t.type, i), o.props = p, g = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = et(s) : (s = He(n) ? Gt : Te.current, s = wn(t, s));
      var k = n.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || h !== s) && Os(t, o, r, s), Ut = !1, h = t.memoizedState, o.state = h, tl(t, r, o, l);
      var C = t.memoizedState;
      i !== g || h !== C || Be.current || Ut ? (typeof k == "function" && (Ku(t, n, k, r), C = t.memoizedState), (p = Ut || Ts(t, n, p, r, h, C, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), o.props = r, o.state = C, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ju(e, t, n, r, u, l);
  }
  function Ju(e, t, n, r, l, u) {
    $s(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Gi(t, n, !1), zt(e, t, u);
    r = t.stateNode, uf.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = xn(t, e.child, null, u), t.child = xn(t, null, i, u)) : Ue(e, t, i, u), t.memoizedState = r.state, l && Gi(t, n, !0), t.child;
  }
  function Qs(e) {
    var t = e.stateNode;
    t.pendingContext ? Xi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xi(e, t.context, !1), Du(e, t.containerInfo);
  }
  function Ks(e, t, n, r, l) {
    return En(), Pu(l), t.flags |= 256, Ue(e, t, n, r), t.child;
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps, l = oe.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), J(oe, l & 1), e === null)
      return zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = El(o, r, 0, null), e = un(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = bu(n), t.memoizedState = qu, e) : eo(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return of(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Qt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Qt(i, u) : (u = un(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? bu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = qu, r;
    }
    return u = e.child, e = u.sibling, r = Qt(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function eo(e, t) {
    return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function al(e, t, n, r) {
    return r !== null && Pu(r), xn(t, e.child, null, n), e = eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function of(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Yu(Error(m(422))), al(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), u = un(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && xn(t, e.child, null, o), t.child.memoizedState = bu(o), t.memoizedState = qu, u);
    if ((t.mode & 1) === 0) return al(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Yu(u, r, void 0), al(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, $e || i) {
      if (r = _e, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Ct(e, l), ct(r, e, l, -1));
      }
      return yo(), r = Yu(Error(m(421))), al(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Ze = Dt(l.nextSibling), Ge = t, le = !0, ot = null, e !== null && (qe[be++] = Et, qe[be++] = xt, qe[be++] = Zt, Et = e.id, xt = e.overflow, Zt = t), t = eo(t, r.children), t.flags |= 4096, t);
  }
  function Ys(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Tu(e.return, t, n);
  }
  function to(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function Gs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ue(e, t, r.children, n), r = oe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ys(e, n, t);
        else if (e.tag === 19) Ys(e, n, t);
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
    if (J(oe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        to(t, !0, n, null, u);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function cl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function zt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function sf(e, t, n) {
    switch (t.tag) {
      case 3:
        Qs(t), En();
        break;
      case 5:
        as(t);
        break;
      case 1:
        He(t.type) && Kr(t);
        break;
      case 4:
        Du(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        J(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(oe, oe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Xs(e, t, n) : (J(oe, oe.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
        J(oe, oe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), J(oe, oe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Hs(e, t, n);
    }
    return zt(e, t, n);
  }
  var Zs, no, Js, qs;
  Zs = function(e, t) {
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
  }, no = function() {
  }, Js = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, bt(yt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), u = [];
          break;
        case "select":
          l = x({}, l, { value: void 0 }), r = x({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Dl(e, l), r = Dl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Fl(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (K.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l?.[p], r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (K.hasOwnProperty(p) ? (s != null && p === "onScroll" && ee("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      n && (u = u || []).push("style", n);
      var p = u;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, qs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
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
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function af(e, t, n) {
    var r = t.pendingProps;
    switch (Cu(t), t.tag) {
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
        return Oe(t), null;
      case 1:
        return He(t.type) && Qr(), Oe(t), null;
      case 3:
        return r = t.stateNode, zn(), te(Be), te(Te), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ot !== null && (mo(ot), ot = null))), no(e, t), Oe(t), null;
      case 5:
        Iu(t);
        var l = bt(ir.current);
        if (n = t.type, e !== null && t.stateNode != null) Js(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Oe(t), null;
          }
          if (e = bt(yt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[vt] = t, r[nr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ee("cancel", r), ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) ee(bn[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  r
                ), ee("load", r);
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                Mo(r, u), ee("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, ee("invalid", r);
                break;
              case "textarea":
                Io(r, u), ee("invalid", r);
            }
            Fl(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Hr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : K.hasOwnProperty(o) && i != null && o === "onScroll" && ee("scroll", r);
            }
            switch (n) {
              case "input":
                wr(r), Do(r, u, !0);
                break;
              case "textarea":
                wr(r), jo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[vt] = t, e[nr] = r, Zs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = jl(n, r), n) {
                case "dialog":
                  ee("cancel", e), ee("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ee("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) ee(bn[l], e);
                  l = r;
                  break;
                case "source":
                  ee("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ee(
                    "error",
                    e
                  ), ee("load", e), l = r;
                  break;
                case "details":
                  ee("toggle", e), l = r;
                  break;
                case "input":
                  Mo(e, r), l = Tl(e, r), ee("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = x({}, r, { value: void 0 }), ee("invalid", e);
                  break;
                case "textarea":
                  Io(e, r), l = Dl(e, r), ee("invalid", e);
                  break;
                default:
                  l = r;
              }
              Fl(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Bo(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ao(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (K.hasOwnProperty(u) ? s != null && u === "onScroll" && ee("scroll", e) : s != null && he(e, u, s, o));
              }
              switch (n) {
                case "input":
                  wr(e), Do(e, r, !1);
                  break;
                case "textarea":
                  wr(e), jo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? on(e, !!r.multiple, u, !1) : r.defaultValue != null && on(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null) qs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = bt(ir.current), bt(yt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (u = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (te(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (le && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ts(), En(), t.flags |= 98560, u = !1;
          else if (u = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[vt] = t;
            } else En(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Oe(t), u = !1;
          } else ot !== null && (mo(ot), ot = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (oe.current & 1) !== 0 ? Se === 0 && (Se = 3) : yo())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return zn(), no(e, t), e === null && er(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return Lu(t.type._context), Oe(t), null;
      case 17:
        return He(t.type) && Qr(), Oe(t), null;
      case 19:
        if (te(oe), u = t.memoizedState, u === null) return Oe(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) dr(u, !1);
        else {
          if (Se !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (t.flags |= 128, dr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return J(oe, oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && fe() > Ln && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !le) return Oe(t), null;
          } else 2 * fe() - u.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = fe(), t.sibling = null, n = oe.current, J(oe, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return vo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Je & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function cf(e, t) {
    switch (Cu(t), t.tag) {
      case 1:
        return He(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return zn(), te(Be), te(Te), ju(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Iu(t), null;
      case 13:
        if (te(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return te(oe), null;
      case 4:
        return zn(), null;
      case 10:
        return Lu(t.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, De = !1, ff = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Nn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ae(e, t, r);
    }
    else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      ae(e, t, r);
    }
  }
  var bs = !1;
  function df(e, t) {
    if (hu = Tr, e = Ti(), iu(e)) {
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
          var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          t: for (; ; ) {
            for (var k; g !== n || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (k = g.firstChild) !== null; )
              h = g, g = k;
            for (; ; ) {
              if (g === e) break t;
              if (h === n && ++p === l && (i = o), h === u && ++y === r && (s = o), (k = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = k;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vu = { focusedElem: e, selectionRange: n }, Tr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
    else for (; E !== null; ) {
      t = E;
      try {
        var C = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var _ = C.memoizedProps, de = C.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : it(t.type, _), de);
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
            throw Error(m(163));
        }
      } catch (w) {
        ae(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, E = e;
        break;
      }
      E = t.return;
    }
    return C = bs, bs = !1, C;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ro(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
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
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ea(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ea(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[nr], delete t[Su], delete t[Xc], delete t[Yc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ta(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), e = e.sibling;
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
  }
  var Pe = null, st = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) ra(e, t, n), n = n.sibling;
  }
  function ra(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function") try {
      ht.onCommitFiberUnmount(_r, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        De || Nn(n, t);
      case 6:
        var r = Pe, l = st;
        Pe = null, Vt(e, t, n), Pe = r, st = l, Pe !== null && (st ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
        break;
      case 18:
        Pe !== null && (st ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n), Qn(e)) : wu(Pe, n.stateNode));
        break;
      case 4:
        r = Pe, l = st, Pe = n.stateNode.containerInfo, st = !0, Vt(e, t, n), Pe = r, st = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ro(n, t, o), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!De && (Nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, Vt(e, t, n), De = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ff()), t.forEach(function(r) {
        var l = kf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function at(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              Pe = i.stateNode, st = !1;
              break e;
            case 3:
              Pe = i.stateNode.containerInfo, st = !0;
              break e;
            case 4:
              Pe = i.stateNode.containerInfo, st = !0;
              break e;
          }
          i = i.return;
        }
        if (Pe === null) throw Error(m(160));
        ra(u, o, l), Pe = null, st = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ae(l, t, p);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ua(t, e), t = t.sibling;
  }
  function ua(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (at(t, e), wt(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (_) {
            ae(e, e.return, _);
          }
          try {
            pr(5, e, e.return);
          } catch (_) {
            ae(e, e.return, _);
          }
        }
        break;
      case 1:
        at(t, e), wt(e), r & 512 && n !== null && Nn(n, n.return);
        break;
      case 5:
        if (at(t, e), wt(e), r & 512 && n !== null && Nn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (_) {
            ae(e, e.return, _);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && Oo(l, u), jl(i, o);
            var p = jl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Bo(l, g) : y === "dangerouslySetInnerHTML" ? Ao(l, g) : y === "children" ? Dn(l, g) : he(l, y, g, p);
            }
            switch (i) {
              case "input":
                Ml(l, u);
                break;
              case "textarea":
                Fo(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var k = u.value;
                k != null ? on(l, !!u.multiple, k, !1) : h !== !!u.multiple && (u.defaultValue != null ? on(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : on(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (_) {
            ae(e, e.return, _);
          }
        }
        break;
      case 6:
        if (at(t, e), wt(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (_) {
            ae(e, e.return, _);
          }
        }
        break;
      case 3:
        if (at(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (_) {
          ae(e, e.return, _);
        }
        break;
      case 4:
        at(t, e), wt(e);
        break;
      case 13:
        at(t, e), wt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ao = fe())), r & 4 && la(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (p = De) || y, at(t, e), De = p) : at(t, e), wt(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (h = E, k = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, h, h.return);
                  break;
                case 1:
                  Nn(h, h.return);
                  var C = h.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                    } catch (_) {
                      ae(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Nn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    sa(g);
                    continue;
                  }
              }
              k !== null ? (k.return = h, E = k) : sa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Vo("display", o));
                } catch (_) {
                  ae(e, e.return, _);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (_) {
                ae(e, e.return, _);
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
        at(t, e), wt(e), r & 4 && la(e);
        break;
      case 21:
        break;
      default:
        at(
          t,
          e
        ), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ta(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ""), r.flags &= -33);
            var u = na(e);
            oo(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = na(e);
            uo(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ae(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pf(e, t, n) {
    E = e, oa(e);
  }
  function oa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || De;
          i = fl;
          var p = De;
          if (fl = o, (De = s) && !p) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? aa(l) : s !== null ? (s.return = o, E = s) : aa(l);
          for (; u !== null; ) E = u, oa(u), u = u.sibling;
          E = l, fl = i, De = p;
        }
        ia(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, E = u) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && ss(t, u, r);
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
                ss(t, o, n);
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
                    g !== null && Qn(g);
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
              throw Error(m(163));
          }
          De || t.flags & 512 && lo(t);
        } catch (h) {
          ae(t, t.return, h);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, E = n;
        break;
      }
      E = t.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, E = n;
        break;
      }
      E = t.return;
    }
  }
  function aa(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
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
              lo(t);
            } catch (s) {
              ae(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              ae(t, o, s);
            }
        }
      } catch (s) {
        ae(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, E = i;
        break;
      }
      E = t.return;
    }
  }
  var mf = Math.ceil, pl = ce.ReactCurrentDispatcher, io = ce.ReactCurrentOwner, nt = ce.ReactCurrentBatchConfig, A = 0, _e = null, ve = null, Ne = 0, Je = 0, Rn = It(0), Se = 0, mr = null, tn = 0, ml = 0, so = 0, hr = null, We = null, ao = 0, Ln = 1 / 0, Pt = null, hl = !1, co = null, Bt = null, vl = !1, Ht = null, yl = 0, vr = 0, fo = null, gl = -1, wl = 0;
  function Ae() {
    return (A & 6) !== 0 ? fe() : gl !== -1 ? gl : gl = fe();
  }
  function $t(e) {
    return (e.mode & 1) === 0 ? 1 : (A & 2) !== 0 && Ne !== 0 ? Ne & -Ne : Zc.transition !== null ? (wl === 0 && (wl = ni()), wl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fi(e.type)), e);
  }
  function ct(e, t, n, r) {
    if (50 < vr) throw vr = 0, fo = null, Error(m(185));
    Vn(e, n, r), ((A & 2) === 0 || e !== _e) && (e === _e && ((A & 2) === 0 && (ml |= n), Se === 4 && Wt(e, Ne)), Qe(e, r), n === 1 && A === 0 && (t.mode & 1) === 0 && (Ln = fe() + 500, Xr && jt()));
  }
  function Qe(e, t) {
    var n = e.callbackNode;
    Za(e, t);
    var r = Nr(e, e === _e ? Ne : 0);
    if (r === 0) n !== null && bo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && bo(n), t === 1) e.tag === 0 ? Gc(fa.bind(null, e)) : Zi(fa.bind(null, e)), Qc(function() {
        (A & 6) === 0 && jt();
      }), n = null;
      else {
        switch (ri(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = ei;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = ti;
            break;
          default:
            n = Cr;
        }
        n = wa(n, ca.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ca(e, t) {
    if (gl = -1, wl = 0, (A & 6) !== 0) throw Error(m(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Nr(e, e === _e ? Ne : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var u = pa();
      (_e !== e || Ne !== t) && (Pt = null, Ln = fe() + 500, rn(e, t));
      do
        try {
          yf();
          break;
        } catch (i) {
          da(e, i);
        }
      while (!0);
      Ru(), pl.current = u, A = l, ve !== null ? t = 0 : (_e = null, Ne = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ql(e), l !== 0 && (r = l, t = po(e, l))), t === 1) throw n = mr, rn(e, 0), Wt(e, r), Qe(e, fe()), n;
      if (t === 6) Wt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !hf(l) && (t = Sl(e, r), t === 2 && (u = Ql(e), u !== 0 && (r = u, t = po(e, u))), t === 1)) throw n = mr, rn(e, 0), Wt(e, r), Qe(e, fe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, We, Pt);
            break;
          case 3:
            if (Wt(e, r), (r & 130023424) === r && (t = ao + 500 - fe(), 10 < t)) {
              if (Nr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ae(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = gu(ln.bind(null, e, We, Pt), t);
              break;
            }
            ln(e, We, Pt);
            break;
          case 4:
            if (Wt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - lt(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = gu(ln.bind(null, e, We, Pt), r);
              break;
            }
            ln(e, We, Pt);
            break;
          case 5:
            ln(e, We, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Qe(e, fe()), e.callbackNode === n ? ca.bind(null, e) : null;
  }
  function po(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = We, We = n, t !== null && mo(t)), e;
  }
  function mo(e) {
    We === null ? We = e : We.push.apply(We, e);
  }
  function hf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!ut(u(), l)) return !1;
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
  function Wt(e, t) {
    for (t &= ~so, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - lt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function fa(e) {
    if ((A & 6) !== 0) throw Error(m(327));
    Tn();
    var t = Nr(e, 0);
    if ((t & 1) === 0) return Qe(e, fe()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && (t = r, n = po(e, r));
    }
    if (n === 1) throw n = mr, rn(e, 0), Wt(e, t), Qe(e, fe()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, We, Pt), Qe(e, fe()), null;
  }
  function ho(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      A = n, A === 0 && (Ln = fe() + 500, Xr && jt());
    }
  }
  function nn(e) {
    Ht !== null && Ht.tag === 0 && (A & 6) === 0 && Tn();
    var t = A;
    A |= 1;
    var n = nt.transition, r = Q;
    try {
      if (nt.transition = null, Q = 1, e) return e();
    } finally {
      Q = r, nt.transition = n, A = t, (A & 6) === 0 && jt();
    }
  }
  function vo() {
    Je = Rn.current, te(Rn);
  }
  function rn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Wc(n)), ve !== null) for (n = ve.return; n !== null; ) {
      var r = n;
      switch (Cu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          zn(), te(Be), te(Te), ju();
          break;
        case 5:
          Iu(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Lu(r.type._context);
          break;
        case 22:
        case 23:
          vo();
      }
      n = n.return;
    }
    if (_e = e, ve = e = Qt(e.current, null), Ne = Je = t, Se = 0, mr = null, so = ml = tn = 0, We = hr = null, qt !== null) {
      for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      qt = null;
    }
    return e;
  }
  function da(e, t) {
    do {
      var n = ve;
      try {
        if (Ru(), rl.current = il, ll) {
          for (var r = ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (en = 0, Ce = we = ie = null, sr = !1, ar = 0, io.current = null, n === null || n.return === null) {
          Se = 1, mr = t, ve = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = Ne, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = js(o);
            if (k !== null) {
              k.flags &= -257, Us(k, o, i, u, t), k.mode & 1 && Fs(u, p, t), t = k, s = p;
              var C = t.updateQueue;
              if (C === null) {
                var _ = /* @__PURE__ */ new Set();
                _.add(s), t.updateQueue = _;
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Fs(u, p, t), yo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (le && i.mode & 1) {
            var de = js(o);
            if (de !== null) {
              (de.flags & 65536) === 0 && (de.flags |= 256), Us(de, o, i, u, t), Pu(Pn(s, i));
              break e;
            }
          }
          u = s = Pn(s, i), Se !== 4 && (Se = 2), hr === null ? hr = [u] : hr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var f = Ds(u, s, t);
                is(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Bt === null || !Bt.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var w = Is(u, i, t);
                  is(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha(n);
      } catch (z) {
        t = z, ve === n && n !== null && (ve = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = pl.current;
    return pl.current = il, e === null ? il : e;
  }
  function yo() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), _e === null || (tn & 268435455) === 0 && (ml & 268435455) === 0 || Wt(_e, Ne);
  }
  function Sl(e, t) {
    var n = A;
    A |= 2;
    var r = pa();
    (_e !== e || Ne !== t) && (Pt = null, rn(e, t));
    do
      try {
        vf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if (Ru(), A = n, pl.current = r, ve !== null) throw Error(m(261));
    return _e = null, Ne = 0, Se;
  }
  function vf() {
    for (; ve !== null; ) ma(ve);
  }
  function yf() {
    for (; ve !== null && !Ba(); ) ma(ve);
  }
  function ma(e) {
    var t = ga(e.alternate, e, Je);
    e.memoizedProps = e.pendingProps, t === null ? ha(e) : ve = t, io.current = null;
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = af(n, t, Je), n !== null) {
          ve = n;
          return;
        }
      } else {
        if (n = cf(n, t), n !== null) {
          n.flags &= 32767, ve = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Se = 6, ve = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function ln(e, t, n) {
    var r = Q, l = nt.transition;
    try {
      nt.transition = null, Q = 1, gf(e, t, n, r);
    } finally {
      nt.transition = l, Q = r;
    }
    return null;
  }
  function gf(e, t, n, r) {
    do
      Tn();
    while (Ht !== null);
    if ((A & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Ja(e, u), e === _e && (ve = _e = null, Ne = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, wa(Cr, function() {
      return Tn(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = nt.transition, nt.transition = null;
      var o = Q;
      Q = 1;
      var i = A;
      A |= 4, io.current = null, df(e, n), ua(n, e), jc(vu), Tr = !!hu, vu = hu = null, e.current = n, pf(n), Ha(), A = i, Q = o, nt.transition = u;
    } else e.current = n;
    if (vl && (vl = !1, Ht = e, yl = l), u = e.pendingLanes, u === 0 && (Bt = null), Qa(n.stateNode), Qe(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = co, co = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && Tn(), u = e.pendingLanes, (u & 1) !== 0 ? e === fo ? vr++ : (vr = 0, fo = e) : vr = 0, jt(), null;
  }
  function Tn() {
    if (Ht !== null) {
      var e = ri(yl), t = nt.transition, n = Q;
      try {
        if (nt.transition = null, Q = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, yl = 0, (A & 6) !== 0) throw Error(m(331));
          var l = A;
          for (A |= 4, E = e.current; E !== null; ) {
            var u = E, o = u.child;
            if ((E.flags & 16) !== 0) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var h = y.sibling, k = y.return;
                      if (ea(y), y === p) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = k, E = h;
                        break;
                      }
                      E = k;
                    }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var _ = C.child;
                  if (_ !== null) {
                    C.child = null;
                    do {
                      var de = _.sibling;
                      _.sibling = null, _ = de;
                    } while (_ !== null);
                  }
                }
                E = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && o !== null) o.return = u, E = o;
            else e: for (; E !== null; ) {
              if (u = E, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, E = f;
                break e;
              }
              E = u.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            o = E;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, E = d;
            else e: for (o = a; E !== null; ) {
              if (i = E, (i.flags & 2048) !== 0) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, i);
                }
              } catch (z) {
                ae(i, i.return, z);
              }
              if (i === o) {
                E = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, E = w;
                break e;
              }
              E = i.return;
            }
          }
          if (A = l, jt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
            ht.onPostCommitFiberRoot(_r, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Q = n, nt.transition = t;
      }
    }
    return !1;
  }
  function va(e, t, n) {
    t = Pn(n, t), t = Ds(e, t, 1), e = At(e, t, 1), t = Ae(), e !== null && (Vn(e, 1, t), Qe(e, t));
  }
  function ae(e, t, n) {
    if (e.tag === 3) va(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r))) {
          e = Pn(n, e), e = Is(t, e, 1), t = At(t, e, 1), e = Ae(), t !== null && (Vn(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function wf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, _e === e && (Ne & n) === n && (Se === 4 || Se === 3 && (Ne & 130023424) === Ne && 500 > fe() - ao ? rn(e, 0) : so |= n), Qe(e, t);
  }
  function ya(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pr, Pr <<= 1, (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Ae();
    e = Ct(e, t), e !== null && (Vn(e, t, n), Qe(e, n));
  }
  function Sf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ya(e, n);
  }
  function kf(e, t) {
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
        throw Error(m(314));
    }
    r !== null && r.delete(t), ya(e, n);
  }
  var ga;
  ga = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return $e = !1, sf(e, t, n);
      $e = (e.flags & 131072) !== 0;
    }
    else $e = !1, le && (t.flags & 1048576) !== 0 && Ji(t, Gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        cl(e, t), e = t.pendingProps;
        var l = wn(t, Te.current);
        _n(t, n), l = Vu(null, t, r, e, l, n);
        var u = Bu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (u = !0, Kr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ou(t), l.updater = sl, t.stateNode = l, l._reactInternals = t, Xu(t, r, e, n), t = Ju(null, t, r, !0, u, n)) : (t.tag = 0, le && u && xu(t), Ue(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = xf(r), e = it(r, e), l) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = Ws(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, it(r.type, e), n);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), Zu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), Ws(e, t, r, l, n);
      case 3:
        e: {
          if (Qs(t), e === null) throw Error(m(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, os(e, t), tl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Pn(Error(m(423)), t), t = Ks(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Pn(Error(m(424)), t), t = Ks(e, t, r, n, l);
            break e;
          } else for (Ze = Dt(t.stateNode.containerInfo.firstChild), Ge = t, le = !0, ot = null, n = ls(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (En(), r === l) {
              t = zt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return as(t), e === null && zu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, yu(r, l) ? o = null : u !== null && yu(r, u) && (t.flags |= 32), $s(e, t), Ue(e, t, o, n), t.child;
      case 6:
        return e === null && zu(t), null;
      case 13:
        return Xs(e, t, n);
      case 4:
        return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : Ue(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), As(e, t, r, l, n);
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, J(qr, r._currentValue), r._currentValue = o, u !== null) if (ut(u.value, o)) {
            if (u.children === l.children && !Be.current) {
              t = zt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = _t(-1, n & -n), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Tu(
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
              if (o = u.return, o === null) throw Error(m(341));
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Tu(o, n, t), o = u.sibling;
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
          Ue(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, _n(t, n), l = et(l), r = r(l), t.flags |= 1, Ue(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = it(r, t.pendingProps), l = it(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), cl(e, t), t.tag = 1, He(r) ? (e = !0, Kr(t)) : e = !1, _n(t, n), Ms(t, r, l), Xu(t, r, l, n), Ju(null, t, r, !0, e, n);
      case 19:
        return Gs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return qo(e, t);
  }
  function Ef(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rt(e, t, n, r) {
    return new Ef(e, t, n, r);
  }
  function go(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Re) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case xe:
        return un(n.children, l, u, t);
      case je:
        o = 8, l |= 8;
        break;
      case dt:
        return e = rt(12, n, t, l | 2), e.elementType = dt, e.lanes = u, e;
      case Le:
        return e = rt(13, n, t, l), e.elementType = Le, e.lanes = u, e;
      case Ve:
        return e = rt(19, n, t, l), e.elementType = Ve, e.lanes = u, e;
      case b:
        return El(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pt:
            o = 10;
            break e;
          case mt:
            o = 9;
            break e;
          case Re:
            o = 11;
            break e;
          case ge:
            o = 14;
            break e;
          case ue:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = rt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function un(e, t, n, r) {
    return e = rt(7, e, r, t), e.lanes = n, e;
  }
  function El(e, t, n, r) {
    return e = rt(22, e, r, t), e.elementType = b, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wo(e, t, n) {
    return e = rt(6, e, null, t), e.lanes = n, e;
  }
  function So(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Cf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ko(e, t, n, r, l, u, o, i, s) {
    return e = new Cf(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = rt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ou(u), e;
  }
  function _f(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Sa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n)) return Yi(e, n, t);
    }
    return t;
  }
  function ka(e, t, n, r, l, u, o, i, s) {
    return e = ko(n, r, !0, e, l, u, o, i, s), e.context = Sa(null), n = e.current, r = Ae(), l = $t(n), u = _t(r, l), u.callback = t ?? null, At(n, u, l), e.current.lanes = l, Vn(e, l, r), Qe(e, r), e;
  }
  function xl(e, t, n, r) {
    var l = t.current, u = Ae(), o = $t(l);
    return n = Sa(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, o), e !== null && (ct(e, l, o, u), el(e, l, o)), o;
  }
  function Cl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ea(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Eo(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function zf() {
    return null;
  }
  var xa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xo(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = xo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    xl(e, t, null, null);
  }, _l.prototype.unmount = xo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      nn(function() {
        xl(null, e, null, null);
      }), t[St] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = oi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
      Tt.splice(n, 0, e), n === 0 && ai(e);
    }
  };
  function Co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ca() {
  }
  function Pf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Cl(o);
          u.call(p);
        };
      }
      var o = ka(t, r, e, 0, null, !1, !1, "", Ca);
      return e._reactRootContainer = o, e[St] = o.current, er(e.nodeType === 8 ? e.parentNode : e), nn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", Ca);
    return e._reactRootContainer = s, e[St] = s.current, er(e.nodeType === 8 ? e.parentNode : e), nn(function() {
      xl(t, s, n, r);
    }), s;
  }
  function Pl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(o);
          i.call(s);
        };
      }
      xl(t, o, e, l);
    } else o = Pf(n, t, e, l, r);
    return Cl(o);
  }
  li = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Qe(t, fe()), (A & 6) === 0 && (Ln = fe() + 500, jt()));
        }
        break;
      case 13:
        nn(function() {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ae();
            ct(r, e, 1, l);
          }
        }), Eo(e, 1);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
        var n = Ae();
        ct(t, e, 134217728, n);
      }
      Eo(e, 134217728);
    }
  }, ui = function(e) {
    if (e.tag === 13) {
      var t = $t(e), n = Ct(e, t);
      if (n !== null) {
        var r = Ae();
        ct(n, e, t, r);
      }
      Eo(e, t);
    }
  }, oi = function() {
    return Q;
  }, ii = function(e, t) {
    var n = Q;
    try {
      return Q = e, t();
    } finally {
      Q = n;
    }
  }, Vl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ml(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              To(r), Ml(r, l);
            }
          }
        }
        break;
      case "textarea":
        Fo(e, n);
        break;
      case "select":
        t = n.value, t != null && on(e, !!n.multiple, t, !1);
    }
  }, Qo = ho, Ko = nn;
  var Nf = { usingClientEntryPoint: !1, Events: [rr, yn, Wr, $o, Wo, ho] }, yr = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Rf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Zo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nl.isDisabled && Nl.supportsFiber) try {
      _r = Nl.inject(Rf), ht = Nl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf, Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Co(t)) throw Error(m(200));
    return _f(e, t, null, n);
  }, Ke.createRoot = function(e, t) {
    if (!Co(e)) throw Error(m(299));
    var n = !1, r = "", l = xa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ko(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new xo(t);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Zo(t), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return nn(e);
  }, Ke.hydrate = function(e, t, n) {
    if (!zl(t)) throw Error(m(200));
    return Pl(null, e, t, !0, n);
  }, Ke.hydrateRoot = function(e, t, n) {
    if (!Co(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = xa;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ka(t, null, e, 1, n ?? null, l, !1, u, o), e[St] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new _l(t);
  }, Ke.render = function(e, t, n) {
    if (!zl(t)) throw Error(m(200));
    return Pl(null, e, t, !1, n);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!zl(e)) throw Error(m(40));
    return e._reactRootContainer ? (nn(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = ho, Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, t, n, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
var Ma;
function jf() {
  if (Ma) return Po.exports;
  Ma = 1;
  function P() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (T) {
        console.error(T);
      }
  }
  return P(), Po.exports = Ff(), Po.exports;
}
var Oa;
function Uf() {
  if (Oa) return Rl;
  Oa = 1;
  var P = jf();
  return Rl.createRoot = P.createRoot, Rl.hydrateRoot = P.hydrateRoot, Rl;
}
var Af = Uf();
function Vf(P) {
  let T = P;
  for (; T; ) {
    const $ = T.parentElement;
    if (!$) break;
    const K = $.getAttribute("data-testid");
    if (K === "stVerticalBlock" || K === "stMainBlockContainer" || K === "stMain")
      break;
    T = $;
  }
  let m = T?.nextElementSibling;
  for (; m; ) {
    if (m.getAttribute("data-testid") === "stHorizontalBlock") return m;
    const $ = m.querySelector(
      '[data-testid="stHorizontalBlock"]'
    );
    if ($) return $;
    m = m.nextElementSibling;
  }
  return null;
}
function Bf(P) {
  let T = P;
  for (let m = 0; m < 8 && T; m++)
    T.style.overflow = "visible", T = T.parentElement;
}
function Hf(P) {
  const T = P.children;
  for (let m = 0; m < T.length; m++) {
    const $ = T[m], K = window.getComputedStyle($);
    (K.position !== "static" || K.zIndex !== "auto") && ($.style.zIndex = "1");
  }
}
const $f = ({
  numColumns: P,
  widths: T,
  minWidth: m,
  setStateValue: $
}) => {
  const K = ft.useRef(null), ne = ft.useRef(T), [ke, se] = ft.useState(300), U = ft.useRef(null);
  ft.useEffect(() => {
    ne.current = T;
  }, [T]);
  const X = ft.useCallback(() => {
    const O = K.current;
    if (!O) return null;
    Bf(O);
    const D = Vf(O);
    return U.current = D, D && Hf(D), D;
  }, []);
  ft.useEffect(() => {
    const O = X();
    if (!O) return;
    const D = () => {
      const ce = U.current;
      if ((!ce || !ce.isConnected) && !X())
        return;
      const Ee = U.current;
      if (!Ee) return;
      const Y = Ee.getBoundingClientRect();
      Y.height > 0 && se(Y.height);
    };
    D();
    const ye = new ResizeObserver(D);
    ye.observe(O);
    const me = new MutationObserver(() => {
      X(), D();
    }), he = O.parentElement;
    return he && me.observe(he, { childList: !0, subtree: !0 }), () => {
      ye.disconnect(), me.disconnect();
    };
  }, [P, X]);
  const pe = ft.useCallback((O) => {
    let D = U.current;
    if ((!D || !D.isConnected) && (D = X()), !D) return;
    const ye = D.children;
    for (let me = 0; me < ye.length && me < O.length; me++) {
      const he = ye[me];
      he.style.flex = `${O[me]} 1 0%`, he.style.minWidth = "0px";
    }
  }, [X]), q = ft.useCallback(
    (O) => (D) => {
      D.preventDefault(), D.stopPropagation();
      const ye = K.current;
      if (!ye) return;
      X();
      const he = ye.getBoundingClientRect().width, ce = D.clientX, Ee = [...ne.current], Y = m / he, xe = (dt) => {
        const mt = (dt.clientX - ce) / he, Re = [...Ee], Le = O, Ve = O + 1;
        let ge = Ee[Le] + mt, ue = Ee[Ve] - mt;
        ge < Y && (ue = ue - (Y - ge), ge = Y), ue < Y && (ge = ge - (Y - ue), ue = Y), ge = Math.max(ge, Y), ue = Math.max(ue, Y), Re[Le] = ge, Re[Ve] = ue, ne.current = Re;
        const b = ye.querySelectorAll("[data-handle]");
        let S = 0;
        for (let N = 0; N < b.length; N++)
          S += Re[N], b[N].style.left = `${S * 100}%`;
        pe(Re);
      }, je = () => {
        document.removeEventListener("mousemove", xe), document.removeEventListener("mouseup", je), document.body.style.cursor = "", document.body.style.userSelect = "", $("widths", ne.current);
      };
      document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", document.addEventListener("mousemove", xe), document.addEventListener("mouseup", je);
    },
    [m, $, pe, X]
  );
  ft.useEffect(() => {
    const O = requestAnimationFrame(() => {
      pe(ne.current);
    });
    return () => cancelAnimationFrame(O);
  });
  const G = {
    position: "relative",
    width: "100%",
    height: "0px",
    overflow: "visible"
  }, Ie = [];
  let Fe = 0;
  for (let O = 0; O < P - 1; O++)
    Fe += T[O], Ie.push(
      /* @__PURE__ */ Mn.jsx(
        Wf,
        {
          left: Fe * 100,
          height: ke,
          onMouseDown: q(O)
        },
        `handle-${O}`
      )
    );
  return /* @__PURE__ */ Mn.jsx("div", { ref: K, style: G, children: Ie });
}, Wf = ({ left: P, height: T, onMouseDown: m }) => /* @__PURE__ */ Mn.jsx(
  "div",
  {
    "data-handle": "",
    onMouseDown: m,
    style: {
      position: "absolute",
      left: `${P}%`,
      top: "0px",
      transform: "translateX(-50%)",
      width: "16px",
      height: `${T}px`,
      cursor: "col-resize",
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${T * 0.1}px 0`,
      boxSizing: "border-box"
    },
    children: /* @__PURE__ */ Mn.jsx(
      "div",
      {
        style: {
          width: "0px",
          height: "100%",
          pointerEvents: "none"
        }
      }
    )
  }
), Ll = /* @__PURE__ */ new WeakMap();
function Qf(P) {
  let T = P;
  for (let m = 0; m < 6 && T; m++) {
    const $ = T;
    $.style && ($.style.overflow = "visible", $.style.position = "relative", $.style.zIndex = "1000"), T = T.parentElement;
  }
}
const Kf = (P) => {
  const { data: T, parentElement: m, setStateValue: $ } = P, K = m.querySelector(".react-root");
  if (!K)
    throw new Error("Unexpected: React root element not found");
  Qf(m);
  let ne = Ll.get(m);
  ne || (ne = Af.createRoot(K), Ll.set(m, ne));
  const { num_columns: ke, widths: se, min_width: U } = T;
  return ne.render(
    /* @__PURE__ */ Mn.jsx(ft.StrictMode, { children: /* @__PURE__ */ Mn.jsx(
      $f,
      {
        setStateValue: $,
        numColumns: ke,
        widths: se,
        minWidth: U
      }
    ) })
  ), () => {
    const X = Ll.get(m);
    X && (X.unmount(), Ll.delete(m));
  };
};
export {
  Kf as default
};
