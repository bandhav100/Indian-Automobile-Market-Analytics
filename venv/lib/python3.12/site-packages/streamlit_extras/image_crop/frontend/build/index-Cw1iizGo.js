function Qf(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var Ii = { exports: {} }, Rr = {}, Fi = { exports: {} }, Z = {};
var Fa;
function Yf() {
  if (Fa) return Z;
  Fa = 1;
  var g = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), P = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.provider"), z = /* @__PURE__ */ Symbol.for("react.context"), j = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), I = Symbol.iterator;
  function U(d) {
    return d === null || typeof d != "object" ? null : (d = I && d[I] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, K = {};
  function X(d, k, V) {
    this.props = d, this.context = k, this.refs = K, this.updater = V || L;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(d, k) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, k, "setState");
  }, X.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = X.prototype;
  function me(d, k, V) {
    this.props = d, this.context = k, this.refs = K, this.updater = V || L;
  }
  var Re = me.prototype = new ye();
  Re.constructor = me, q(Re, X.prototype), Re.isPureReactComponent = !0;
  var xe = Array.isArray, Le = Object.prototype.hasOwnProperty, Te = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(d, k, V) {
    var Y, ee = {}, te = null, re = null;
    if (k != null) for (Y in k.ref !== void 0 && (re = k.ref), k.key !== void 0 && (te = "" + k.key), k) Le.call(k, Y) && !Pe.hasOwnProperty(Y) && (ee[Y] = k[Y]);
    var J = arguments.length - 2;
    if (J === 1) ee.children = V;
    else if (1 < J) {
      for (var fe = Array(J), Ze = 0; Ze < J; Ze++) fe[Ze] = arguments[Ze + 2];
      ee.children = fe;
    }
    if (d && d.defaultProps) for (Y in J = d.defaultProps, J) ee[Y] === void 0 && (ee[Y] = J[Y]);
    return { $$typeof: g, type: d, key: te, ref: re, props: ee, _owner: Te.current };
  }
  function We(d, k) {
    return { $$typeof: g, type: d.type, key: k, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function st(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function Ct(d) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(V) {
      return k[V];
    });
  }
  var tt = /\/+/g;
  function Ae(d, k) {
    return typeof d == "object" && d !== null && d.key != null ? Ct("" + d.key) : k.toString(36);
  }
  function G(d, k, V, Y, ee) {
    var te = typeof d;
    (te === "undefined" || te === "boolean") && (d = null);
    var re = !1;
    if (d === null) re = !0;
    else switch (te) {
      case "string":
      case "number":
        re = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case g:
          case f:
            re = !0;
        }
    }
    if (re) return re = d, ee = ee(re), d = Y === "" ? "." + Ae(re, 0) : Y, xe(ee) ? (V = "", d != null && (V = d.replace(tt, "$&/") + "/"), G(ee, k, V, "", function(Ze) {
      return Ze;
    })) : ee != null && (st(ee) && (ee = We(ee, V + (!ee.key || re && re.key === ee.key ? "" : ("" + ee.key).replace(tt, "$&/") + "/") + d)), k.push(ee)), 1;
    if (re = 0, Y = Y === "" ? "." : Y + ":", xe(d)) for (var J = 0; J < d.length; J++) {
      te = d[J];
      var fe = Y + Ae(te, J);
      re += G(te, k, V, fe, ee);
    }
    else if (fe = U(d), typeof fe == "function") for (d = fe.call(d), J = 0; !(te = d.next()).done; ) te = te.value, fe = Y + Ae(te, J++), re += G(te, k, V, fe, ee);
    else if (te === "object") throw k = String(d), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return re;
  }
  function b(d, k, V) {
    if (d == null) return d;
    var Y = [], ee = 0;
    return G(d, Y, "", "", function(te) {
      return k.call(V, te, ee++);
    }), Y;
  }
  function oe(d) {
    if (d._status === -1) {
      var k = d._result;
      k = k(), k.then(function(V) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = V);
      }, function(V) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = V);
      }), d._status === -1 && (d._status = 0, d._result = k);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var Q = { current: null }, E = { transition: null }, H = { ReactCurrentDispatcher: Q, ReactCurrentBatchConfig: E, ReactCurrentOwner: Te };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Z.Children = { map: b, forEach: function(d, k, V) {
    b(d, function() {
      k.apply(this, arguments);
    }, V);
  }, count: function(d) {
    var k = 0;
    return b(d, function() {
      k++;
    }), k;
  }, toArray: function(d) {
    return b(d, function(k) {
      return k;
    }) || [];
  }, only: function(d) {
    if (!st(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, Z.Component = X, Z.Fragment = u, Z.Profiler = v, Z.PureComponent = me, Z.StrictMode = P, Z.Suspense = x, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, Z.act = D, Z.cloneElement = function(d, k, V) {
    if (d == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var Y = q({}, d.props), ee = d.key, te = d.ref, re = d._owner;
    if (k != null) {
      if (k.ref !== void 0 && (te = k.ref, re = Te.current), k.key !== void 0 && (ee = "" + k.key), d.type && d.type.defaultProps) var J = d.type.defaultProps;
      for (fe in k) Le.call(k, fe) && !Pe.hasOwnProperty(fe) && (Y[fe] = k[fe] === void 0 && J !== void 0 ? J[fe] : k[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) Y.children = V;
    else if (1 < fe) {
      J = Array(fe);
      for (var Ze = 0; Ze < fe; Ze++) J[Ze] = arguments[Ze + 2];
      Y.children = J;
    }
    return { $$typeof: g, type: d.type, key: ee, ref: te, props: Y, _owner: re };
  }, Z.createContext = function(d) {
    return d = { $$typeof: z, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: y, _context: d }, d.Consumer = d;
  }, Z.createElement = $e, Z.createFactory = function(d) {
    var k = $e.bind(null, d);
    return k.type = d, k;
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(d) {
    return { $$typeof: j, render: d };
  }, Z.isValidElement = st, Z.lazy = function(d) {
    return { $$typeof: M, _payload: { _status: -1, _result: d }, _init: oe };
  }, Z.memo = function(d, k) {
    return { $$typeof: w, type: d, compare: k === void 0 ? null : k };
  }, Z.startTransition = function(d) {
    var k = E.transition;
    E.transition = {};
    try {
      d();
    } finally {
      E.transition = k;
    }
  }, Z.unstable_act = D, Z.useCallback = function(d, k) {
    return Q.current.useCallback(d, k);
  }, Z.useContext = function(d) {
    return Q.current.useContext(d);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(d) {
    return Q.current.useDeferredValue(d);
  }, Z.useEffect = function(d, k) {
    return Q.current.useEffect(d, k);
  }, Z.useId = function() {
    return Q.current.useId();
  }, Z.useImperativeHandle = function(d, k, V) {
    return Q.current.useImperativeHandle(d, k, V);
  }, Z.useInsertionEffect = function(d, k) {
    return Q.current.useInsertionEffect(d, k);
  }, Z.useLayoutEffect = function(d, k) {
    return Q.current.useLayoutEffect(d, k);
  }, Z.useMemo = function(d, k) {
    return Q.current.useMemo(d, k);
  }, Z.useReducer = function(d, k, V) {
    return Q.current.useReducer(d, k, V);
  }, Z.useRef = function(d) {
    return Q.current.useRef(d);
  }, Z.useState = function(d) {
    return Q.current.useState(d);
  }, Z.useSyncExternalStore = function(d, k, V) {
    return Q.current.useSyncExternalStore(d, k, V);
  }, Z.useTransition = function() {
    return Q.current.useTransition();
  }, Z.version = "18.3.1", Z;
}
var ja;
function Bi() {
  return ja || (ja = 1, Fi.exports = Yf()), Fi.exports;
}
var Ua;
function Kf() {
  if (Ua) return Rr;
  Ua = 1;
  var g = Bi(), f = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, v = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(j, x, w) {
    var M, I = {}, U = null, L = null;
    w !== void 0 && (U = "" + w), x.key !== void 0 && (U = "" + x.key), x.ref !== void 0 && (L = x.ref);
    for (M in x) P.call(x, M) && !y.hasOwnProperty(M) && (I[M] = x[M]);
    if (j && j.defaultProps) for (M in x = j.defaultProps, x) I[M] === void 0 && (I[M] = x[M]);
    return { $$typeof: f, type: j, key: U, ref: L, props: I, _owner: v.current };
  }
  return Rr.Fragment = u, Rr.jsx = z, Rr.jsxs = z, Rr;
}
var Aa;
function Xf() {
  return Aa || (Aa = 1, Ii.exports = Kf()), Ii.exports;
}
var Hn = Xf(), pe = Bi();
const ue = /* @__PURE__ */ Qf(pe);
var jl = {}, ji = { exports: {} }, Ge = {}, Ui = { exports: {} }, Ai = {};
var Ha;
function Gf() {
  return Ha || (Ha = 1, (function(g) {
    function f(E, H) {
      var D = E.length;
      E.push(H);
      e: for (; 0 < D; ) {
        var d = D - 1 >>> 1, k = E[d];
        if (0 < v(k, H)) E[d] = H, E[D] = k, D = d;
        else break e;
      }
    }
    function u(E) {
      return E.length === 0 ? null : E[0];
    }
    function P(E) {
      if (E.length === 0) return null;
      var H = E[0], D = E.pop();
      if (D !== H) {
        E[0] = D;
        e: for (var d = 0, k = E.length, V = k >>> 1; d < V; ) {
          var Y = 2 * (d + 1) - 1, ee = E[Y], te = Y + 1, re = E[te];
          if (0 > v(ee, D)) te < k && 0 > v(re, ee) ? (E[d] = re, E[te] = D, d = te) : (E[d] = ee, E[Y] = D, d = Y);
          else if (te < k && 0 > v(re, D)) E[d] = re, E[te] = D, d = te;
          else break e;
        }
      }
      return H;
    }
    function v(E, H) {
      var D = E.sortIndex - H.sortIndex;
      return D !== 0 ? D : E.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      g.unstable_now = function() {
        return y.now();
      };
    } else {
      var z = Date, j = z.now();
      g.unstable_now = function() {
        return z.now() - j;
      };
    }
    var x = [], w = [], M = 1, I = null, U = 3, L = !1, q = !1, K = !1, X = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(E) {
      for (var H = u(w); H !== null; ) {
        if (H.callback === null) P(w);
        else if (H.startTime <= E) P(w), H.sortIndex = H.expirationTime, f(x, H);
        else break;
        H = u(w);
      }
    }
    function xe(E) {
      if (K = !1, Re(E), !q) if (u(x) !== null) q = !0, oe(Le);
      else {
        var H = u(w);
        H !== null && Q(xe, H.startTime - E);
      }
    }
    function Le(E, H) {
      q = !1, K && (K = !1, ye($e), $e = -1), L = !0;
      var D = U;
      try {
        for (Re(H), I = u(x); I !== null && (!(I.expirationTime > H) || E && !Ct()); ) {
          var d = I.callback;
          if (typeof d == "function") {
            I.callback = null, U = I.priorityLevel;
            var k = d(I.expirationTime <= H);
            H = g.unstable_now(), typeof k == "function" ? I.callback = k : I === u(x) && P(x), Re(H);
          } else P(x);
          I = u(x);
        }
        if (I !== null) var V = !0;
        else {
          var Y = u(w);
          Y !== null && Q(xe, Y.startTime - H), V = !1;
        }
        return V;
      } finally {
        I = null, U = D, L = !1;
      }
    }
    var Te = !1, Pe = null, $e = -1, We = 5, st = -1;
    function Ct() {
      return !(g.unstable_now() - st < We);
    }
    function tt() {
      if (Pe !== null) {
        var E = g.unstable_now();
        st = E;
        var H = !0;
        try {
          H = Pe(!0, E);
        } finally {
          H ? Ae() : (Te = !1, Pe = null);
        }
      } else Te = !1;
    }
    var Ae;
    if (typeof me == "function") Ae = function() {
      me(tt);
    };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(), b = G.port2;
      G.port1.onmessage = tt, Ae = function() {
        b.postMessage(null);
      };
    } else Ae = function() {
      X(tt, 0);
    };
    function oe(E) {
      Pe = E, Te || (Te = !0, Ae());
    }
    function Q(E, H) {
      $e = X(function() {
        E(g.unstable_now());
      }, H);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, g.unstable_continueExecution = function() {
      q || L || (q = !0, oe(Le));
    }, g.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : We = 0 < E ? Math.floor(1e3 / E) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, g.unstable_getFirstCallbackNode = function() {
      return u(x);
    }, g.unstable_next = function(E) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = U;
      }
      var D = U;
      U = H;
      try {
        return E();
      } finally {
        U = D;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(E, H) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = U;
      U = E;
      try {
        return H();
      } finally {
        U = D;
      }
    }, g.unstable_scheduleCallback = function(E, H, D) {
      var d = g.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? d + D : d) : D = d, E) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = D + k, E = { id: M++, callback: H, priorityLevel: E, startTime: D, expirationTime: k, sortIndex: -1 }, D > d ? (E.sortIndex = D, f(w, E), u(x) === null && E === u(w) && (K ? (ye($e), $e = -1) : K = !0, Q(xe, D - d))) : (E.sortIndex = k, f(x, E), q || L || (q = !0, oe(Le))), E;
    }, g.unstable_shouldYield = Ct, g.unstable_wrapCallback = function(E) {
      var H = U;
      return function() {
        var D = U;
        U = H;
        try {
          return E.apply(this, arguments);
        } finally {
          U = D;
        }
      };
    };
  })(Ai)), Ai;
}
var Ba;
function Zf() {
  return Ba || (Ba = 1, Ui.exports = Gf()), Ui.exports;
}
var $a;
function Jf() {
  if ($a) return Ge;
  $a = 1;
  var g = Bi(), f = Zf();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var P = /* @__PURE__ */ new Set(), v = {};
  function y(e, t) {
    z(e, t), z(e + "Capture", t);
  }
  function z(e, t) {
    for (v[e] = t, e = 0; e < t.length; e++) P.add(t[e]);
  }
  var j = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, I = {};
  function U(e) {
    return x.call(I, e) ? !0 : x.call(M, e) ? !1 : w.test(e) ? I[e] = !0 : (M[e] = !0, !1);
  }
  function L(e, t, n, r) {
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
  function q(e, t, n, r) {
    if (t === null || typeof t > "u" || L(e, t, n, r)) return !0;
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
  function K(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var X = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    X[e] = new K(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    X[t] = new K(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    X[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    X[e] = new K(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    X[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    X[e] = new K(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    X[e] = new K(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    X[e] = new K(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    X[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    X[t] = new K(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ye, me);
    X[t] = new K(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ye, me);
    X[t] = new K(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    X[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), X.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    X[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Re(e, t, n, r) {
    var l = X.hasOwnProperty(t) ? X[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (q(t, n, l, r) && (n = null), r || l === null ? U(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var xe = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Le = /* @__PURE__ */ Symbol.for("react.element"), Te = /* @__PURE__ */ Symbol.for("react.portal"), Pe = /* @__PURE__ */ Symbol.for("react.fragment"), $e = /* @__PURE__ */ Symbol.for("react.strict_mode"), We = /* @__PURE__ */ Symbol.for("react.profiler"), st = /* @__PURE__ */ Symbol.for("react.provider"), Ct = /* @__PURE__ */ Symbol.for("react.context"), tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ae = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), b = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.offscreen"), E = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = E && e[E] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, d;
  function k(e) {
    if (d === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      d = t && t[1] || "";
    }
    return `
` + d + e;
  }
  var V = !1;
  function Y(e, t) {
    if (!e || V) return "";
    V = !0;
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
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s]; ) s--;
        for (; 1 <= i && 0 <= s; i--, s--) if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if (i--, s--, 0 > s || l[i] !== o[s]) {
                var a = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= i && 0 <= s);
          break;
        }
      }
    } finally {
      V = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? k(e) : "";
  }
  function ee(e) {
    switch (e.tag) {
      case 5:
        return k(e.type);
      case 16:
        return k("Lazy");
      case 13:
        return k("Suspense");
      case 19:
        return k("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Y(e.type, !1), e;
      case 11:
        return e = Y(e.type.render, !1), e;
      case 1:
        return e = Y(e.type, !0), e;
      default:
        return "";
    }
  }
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case Te:
        return "Portal";
      case We:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case G:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ct:
        return (e.displayName || "Context") + ".Consumer";
      case st:
        return (e._context.displayName || "Context") + ".Provider";
      case tt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case b:
        return t = e.displayName || null, t !== null ? t : te(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return te(e(t));
        } catch {
        }
    }
    return null;
  }
  function re(e) {
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
        return te(t);
      case 8:
        return t === $e ? "StrictMode" : "Mode";
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
  function J(e) {
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
  function fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ze(e) {
    var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Pr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function $i(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = fe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function zr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bl(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Wi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = J(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Vi(e, t) {
    t = t.checked, t != null && Re(e, "checked", t, !1);
  }
  function $l(e, t) {
    Vi(e, t);
    var n = J(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wl(e, t.type, J(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Qi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Wl(e, t, n) {
    (t !== "number" || zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Bn = Array.isArray;
  function dn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + J(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Yi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Bn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: J(n) };
  }
  function Ki(e, t) {
    var n = J(t.value), r = J(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Gi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Gi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nr, Zi = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Nr = Nr || document.createElement("div"), Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Nr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function $n(e, t) {
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
  }, Xa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function(e) {
    Xa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Wn[t] = Wn[e];
    });
  });
  function Ji(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px";
  }
  function qi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ji(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ga = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Yl(e, t) {
    if (t) {
      if (Ga[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Kl(e, t) {
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
  var Xl = null;
  function Gl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Zl = null, pn = null, hn = null;
  function bi(e) {
    if (e = fr(e)) {
      if (typeof Zl != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = qr(t), Zl(e.stateNode, e.type, t));
    }
  }
  function eu(e) {
    pn ? hn ? hn.push(e) : hn = [e] : pn = e;
  }
  function tu() {
    if (pn) {
      var e = pn, t = hn;
      if (hn = pn = null, bi(e), t) for (e = 0; e < t.length; e++) bi(t[e]);
    }
  }
  function nu(e, t) {
    return e(t);
  }
  function ru() {
  }
  var Jl = !1;
  function lu(e, t, n) {
    if (Jl) return e(t, n);
    Jl = !0;
    try {
      return nu(e, t, n);
    } finally {
      Jl = !1, (pn !== null || hn !== null) && (ru(), tu());
    }
  }
  function Vn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = qr(n);
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var ql = !1;
  if (j) try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", { get: function() {
      ql = !0;
    } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    ql = !1;
  }
  function Za(e, t, n, r, l, o, i, s, a) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (C) {
      this.onError(C);
    }
  }
  var Yn = !1, Dr = null, Lr = !1, bl = null, Ja = { onError: function(e) {
    Yn = !0, Dr = e;
  } };
  function qa(e, t, n, r, l, o, i, s, a) {
    Yn = !1, Dr = null, Za.apply(Ja, arguments);
  }
  function ba(e, t, n, r, l, o, i, s, a) {
    if (qa.apply(this, arguments), Yn) {
      if (Yn) {
        var m = Dr;
        Yn = !1, Dr = null;
      } else throw Error(u(198));
      Lr || (Lr = !0, bl = m);
    }
  }
  function qt(e) {
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
  function ou(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function iu(e) {
    if (qt(e) !== e) throw Error(u(188));
  }
  function ec(e) {
    var t = e.alternate;
    if (!t) {
      if (t = qt(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return iu(l), e;
          if (o === r) return iu(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, s = l.child; s; ) {
          if (s === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = o.child; s; ) {
            if (s === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (s === r) {
              i = !0, r = o, n = l;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function uu(e) {
    return e = ec(e), e !== null ? su(e) : null;
  }
  function su(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = su(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var au = f.unstable_scheduleCallback, cu = f.unstable_cancelCallback, tc = f.unstable_shouldYield, nc = f.unstable_requestPaint, ke = f.unstable_now, rc = f.unstable_getCurrentPriorityLevel, eo = f.unstable_ImmediatePriority, fu = f.unstable_UserBlockingPriority, Tr = f.unstable_NormalPriority, lc = f.unstable_LowPriority, du = f.unstable_IdlePriority, Mr = null, gt = null;
  function oc(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function") try {
      gt.onCommitFiberRoot(Mr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : sc, ic = Math.log, uc = Math.LN2;
  function sc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ic(e) / uc | 0) | 0;
  }
  var Or = 64, Ir = 4194304;
  function Kn(e) {
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
  function Fr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var s = i & ~l;
      s !== 0 ? r = Kn(s) : (o &= i, o !== 0 && (r = Kn(o)));
    } else i = n & ~l, i !== 0 ? r = Kn(i) : o !== 0 && (r = Kn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ac(e, t) {
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
  function cc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - at(o), s = 1 << i, a = l[i];
      a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (l[i] = ac(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s;
    }
  }
  function to(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function pu() {
    var e = Or;
    return Or <<= 1, (Or & 4194240) === 0 && (Or = 64), e;
  }
  function no(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
  }
  function fc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function ro(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var ie = 0;
  function hu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var mu, lo, vu, gu, yu, oo = !1, jr = [], Lt = null, Tt = null, Mt = null, Gn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), Ot = [], dc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wu(e, t) {
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
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        Gn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function Jn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = fr(t), t !== null && lo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function pc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Lt = Jn(Lt, e, t, n, r, l), !0;
      case "dragenter":
        return Tt = Jn(Tt, e, t, n, r, l), !0;
      case "mouseover":
        return Mt = Jn(Mt, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Gn.set(o, Jn(Gn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Zn.set(o, Jn(Zn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function ku(e) {
    var t = bt(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ou(n), t !== null) {
            e.blockedOn = t, yu(e.priority, function() {
              vu(n);
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
  function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Xl = r, n.target.dispatchEvent(r), Xl = null;
      } else return t = fr(n), t !== null && lo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Su(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function hc() {
    oo = !1, Lt !== null && Ur(Lt) && (Lt = null), Tt !== null && Ur(Tt) && (Tt = null), Mt !== null && Ur(Mt) && (Mt = null), Gn.forEach(Su), Zn.forEach(Su);
  }
  function qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oo || (oo = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, hc)));
  }
  function bn(e) {
    function t(l) {
      return qn(l, e);
    }
    if (0 < jr.length) {
      qn(jr[0], e);
      for (var n = 1; n < jr.length; n++) {
        var r = jr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Lt !== null && qn(Lt, e), Tt !== null && qn(Tt, e), Mt !== null && qn(Mt, e), Gn.forEach(t), Zn.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) ku(n), n.blockedOn === null && Ot.shift();
  }
  var mn = xe.ReactCurrentBatchConfig, Ar = !0;
  function mc(e, t, n, r) {
    var l = ie, o = mn.transition;
    mn.transition = null;
    try {
      ie = 1, io(e, t, n, r);
    } finally {
      ie = l, mn.transition = o;
    }
  }
  function vc(e, t, n, r) {
    var l = ie, o = mn.transition;
    mn.transition = null;
    try {
      ie = 4, io(e, t, n, r);
    } finally {
      ie = l, mn.transition = o;
    }
  }
  function io(e, t, n, r) {
    if (Ar) {
      var l = uo(e, t, n, r);
      if (l === null) Eo(e, t, r, Hr, n), wu(e, r);
      else if (pc(l, e, t, n, r)) r.stopPropagation();
      else if (wu(e, r), t & 4 && -1 < dc.indexOf(e)) {
        for (; l !== null; ) {
          var o = fr(l);
          if (o !== null && mu(o), o = uo(e, t, n, r), o === null && Eo(e, t, r, Hr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Eo(e, t, r, null, n);
    }
  }
  var Hr = null;
  function uo(e, t, n, r) {
    if (Hr = null, e = Gl(r), e = bt(e), e !== null) if (t = qt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ou(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Hr = e, null;
  }
  function Cu(e) {
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
        switch (rc()) {
          case eo:
            return 1;
          case fu:
            return 4;
          case Tr:
          case lc:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null, so = null, Br = null;
  function xu() {
    if (Br) return Br;
    var e, t = so, n = t.length, r, l = "value" in It ? It.value : It.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Br = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function $r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wr() {
    return !0;
  }
  function _u() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Wr : _u, this.isPropagationStopped = _u, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wr);
    }, persist: function() {
    }, isPersistent: Wr }), t;
  }
  var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ao = Je(vn), er = D({}, vn, { view: 0, detail: 0 }), gc = Je(er), co, fo, tr, Vr = D({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ho, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (co = e.screenX - tr.screenX, fo = e.screenY - tr.screenY) : fo = co = 0, tr = e), co);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : fo;
  } }), Eu = Je(Vr), yc = D({}, Vr, { dataTransfer: 0 }), wc = Je(yc), kc = D({}, er, { relatedTarget: 0 }), po = Je(kc), Sc = D({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Je(Sc), xc = D({}, vn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), _c = Je(xc), Ec = D({}, vn, { data: 0 }), Ru = Je(Ec), Rc = {
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
  }, Pc = {
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
  }, zc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Nc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zc[e]) ? !!t[e] : !1;
  }
  function ho() {
    return Nc;
  }
  var Dc = D({}, er, { key: function(e) {
    if (e.key) {
      var t = Rc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = $r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ho, charCode: function(e) {
    return e.type === "keypress" ? $r(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? $r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Lc = Je(Dc), Tc = D({}, Vr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Pu = Je(Tc), Mc = D({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ho }), Oc = Je(Mc), Ic = D({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fc = Je(Ic), jc = D({}, Vr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Uc = Je(jc), Ac = [9, 13, 27, 32], mo = j && "CompositionEvent" in window, nr = null;
  j && "documentMode" in document && (nr = document.documentMode);
  var Hc = j && "TextEvent" in window && !nr, zu = j && (!mo || nr && 8 < nr && 11 >= nr), Nu = " ", Du = !1;
  function Lu(e, t) {
    switch (e) {
      case "keyup":
        return Ac.indexOf(t.keyCode) !== -1;
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
  function Tu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var gn = !1;
  function Bc(e, t) {
    switch (e) {
      case "compositionend":
        return Tu(t);
      case "keypress":
        return t.which !== 32 ? null : (Du = !0, Nu);
      case "textInput":
        return e = t.data, e === Nu && Du ? null : e;
      default:
        return null;
    }
  }
  function $c(e, t) {
    if (gn) return e === "compositionend" || !mo && Lu(e, t) ? (e = xu(), Br = so = It = null, gn = !1, e) : null;
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
        return zu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wc[e.type] : t === "textarea";
  }
  function Ou(e, t, n, r) {
    eu(r), t = Gr(t, "onChange"), 0 < t.length && (n = new ao("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var rr = null, lr = null;
  function Vc(e) {
    qu(e, 0);
  }
  function Qr(e) {
    var t = Cn(e);
    if ($i(t)) return e;
  }
  function Qc(e, t) {
    if (e === "change") return t;
  }
  var Iu = !1;
  if (j) {
    var vo;
    if (j) {
      var go = "oninput" in document;
      if (!go) {
        var Fu = document.createElement("div");
        Fu.setAttribute("oninput", "return;"), go = typeof Fu.oninput == "function";
      }
      vo = go;
    } else vo = !1;
    Iu = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    rr && (rr.detachEvent("onpropertychange", Uu), lr = rr = null);
  }
  function Uu(e) {
    if (e.propertyName === "value" && Qr(lr)) {
      var t = [];
      Ou(t, lr, e, Gl(e)), lu(Vc, t);
    }
  }
  function Yc(e, t, n) {
    e === "focusin" ? (ju(), rr = t, lr = n, rr.attachEvent("onpropertychange", Uu)) : e === "focusout" && ju();
  }
  function Kc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qr(lr);
  }
  function Xc(e, t) {
    if (e === "click") return Qr(t);
  }
  function Gc(e, t) {
    if (e === "input" || e === "change") return Qr(t);
  }
  function Zc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : Zc;
  function or(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!x.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Au(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hu(e, t) {
    var n = Au(e);
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
      n = Au(n);
    }
  }
  function Bu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $u() {
    for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zr(e.document);
    }
    return t;
  }
  function yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Jc(e) {
    var t = $u(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bu(n.ownerDocument.documentElement, n)) {
      if (r !== null && yo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Hu(n, o);
          var i = Hu(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var qc = j && "documentMode" in document && 11 >= document.documentMode, yn = null, wo = null, ir = null, ko = !1;
  function Wu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ko || yn == null || yn !== zr(r) || (r = yn, "selectionStart" in r && yo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ir && or(ir, r) || (ir = r, r = Gr(wo, "onSelect"), 0 < r.length && (t = new ao("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
  }
  function Yr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wn = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, So = {}, Vu = {};
  j && (Vu = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
  function Kr(e) {
    if (So[e]) return So[e];
    if (!wn[e]) return e;
    var t = wn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Vu) return So[e] = t[n];
    return e;
  }
  var Qu = Kr("animationend"), Yu = Kr("animationiteration"), Ku = Kr("animationstart"), Xu = Kr("transitionend"), Gu = /* @__PURE__ */ new Map(), Zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ft(e, t) {
    Gu.set(e, t), y(t, [e]);
  }
  for (var Co = 0; Co < Zu.length; Co++) {
    var xo = Zu[Co], bc = xo.toLowerCase(), ef = xo[0].toUpperCase() + xo.slice(1);
    Ft(bc, "on" + ef);
  }
  Ft(Qu, "onAnimationEnd"), Ft(Yu, "onAnimationIteration"), Ft(Ku, "onAnimationStart"), Ft("dblclick", "onDoubleClick"), Ft("focusin", "onFocus"), Ft("focusout", "onBlur"), Ft(Xu, "onTransitionEnd"), z("onMouseEnter", ["mouseout", "mouseover"]), z("onMouseLeave", ["mouseout", "mouseover"]), z("onPointerEnter", ["pointerout", "pointerover"]), z("onPointerLeave", ["pointerout", "pointerover"]), y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
  function Ju(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ba(r, t, void 0, e), e.currentTarget = null;
  }
  function qu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i], a = s.instance, m = s.currentTarget;
          if (s = s.listener, a !== o && l.isPropagationStopped()) break e;
          Ju(l, s, m), o = a;
        }
        else for (i = 0; i < r.length; i++) {
          if (s = r[i], a = s.instance, m = s.currentTarget, s = s.listener, a !== o && l.isPropagationStopped()) break e;
          Ju(l, s, m), o = a;
        }
      }
    }
    if (Lr) throw e = bl, Lr = !1, bl = null, e;
  }
  function ae(e, t) {
    var n = t[Lo];
    n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (bu(t, e, 2, !1), n.add(r));
  }
  function _o(e, t, n) {
    var r = 0;
    t && (r |= 4), bu(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(e) {
    if (!e[Xr]) {
      e[Xr] = !0, P.forEach(function(n) {
        n !== "selectionchange" && (tf.has(n) || _o(n, !1, e), _o(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, _o("selectionchange", !1, t));
    }
  }
  function bu(e, t, n, r) {
    switch (Cu(t)) {
      case 1:
        var l = mc;
        break;
      case 4:
        l = vc;
        break;
      default:
        l = io;
    }
    n = l.bind(null, t, n, e), l = void 0, !ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Eo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || s.nodeType === 8 && s.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var a = i.tag;
          if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          i = i.return;
        }
        for (; s !== null; ) {
          if (i = bt(s), i === null) return;
          if (a = i.tag, a === 5 || a === 6) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
    lu(function() {
      var m = o, C = Gl(n), _ = [];
      e: {
        var S = Gu.get(e);
        if (S !== void 0) {
          var N = ao, O = e;
          switch (e) {
            case "keypress":
              if ($r(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Lc;
              break;
            case "focusin":
              O = "focus", N = po;
              break;
            case "focusout":
              O = "blur", N = po;
              break;
            case "beforeblur":
            case "afterblur":
              N = po;
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
              N = Eu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = wc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Oc;
              break;
            case Qu:
            case Yu:
            case Ku:
              N = Cc;
              break;
            case Xu:
              N = Fc;
              break;
            case "scroll":
              N = gc;
              break;
            case "wheel":
              N = Uc;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Pu;
          }
          var F = (t & 4) !== 0, Se = !F && e === "scroll", p = F ? S !== null ? S + "Capture" : null : S;
          F = [];
          for (var c = m, h; c !== null; ) {
            h = c;
            var R = h.stateNode;
            if (h.tag === 5 && R !== null && (h = R, p !== null && (R = Vn(c, p), R != null && F.push(ar(c, R, h)))), Se) break;
            c = c.return;
          }
          0 < F.length && (S = new N(S, O, null, n, C), _.push({ event: S, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (S = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", S && n !== Xl && (O = n.relatedTarget || n.fromElement) && (bt(O) || O[xt])) break e;
          if ((N || S) && (S = C.window === C ? C : (S = C.ownerDocument) ? S.defaultView || S.parentWindow : window, N ? (O = n.relatedTarget || n.toElement, N = m, O = O ? bt(O) : null, O !== null && (Se = qt(O), O !== Se || O.tag !== 5 && O.tag !== 6) && (O = null)) : (N = null, O = m), N !== O)) {
            if (F = Eu, R = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (F = Pu, R = "onPointerLeave", p = "onPointerEnter", c = "pointer"), Se = N == null ? S : Cn(N), h = O == null ? S : Cn(O), S = new F(R, c + "leave", N, n, C), S.target = Se, S.relatedTarget = h, R = null, bt(C) === m && (F = new F(p, c + "enter", O, n, C), F.target = h, F.relatedTarget = Se, R = F), Se = R, N && O) t: {
              for (F = N, p = O, c = 0, h = F; h; h = kn(h)) c++;
              for (h = 0, R = p; R; R = kn(R)) h++;
              for (; 0 < c - h; ) F = kn(F), c--;
              for (; 0 < h - c; ) p = kn(p), h--;
              for (; c--; ) {
                if (F === p || p !== null && F === p.alternate) break t;
                F = kn(F), p = kn(p);
              }
              F = null;
            }
            else F = null;
            N !== null && es(_, S, N, F, !1), O !== null && Se !== null && es(_, Se, O, F, !0);
          }
        }
        e: {
          if (S = m ? Cn(m) : window, N = S.nodeName && S.nodeName.toLowerCase(), N === "select" || N === "input" && S.type === "file") var A = Qc;
          else if (Mu(S)) if (Iu) A = Gc;
          else {
            A = Kc;
            var B = Yc;
          }
          else (N = S.nodeName) && N.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (A = Xc);
          if (A && (A = A(e, m))) {
            Ou(_, A, n, C);
            break e;
          }
          B && B(e, S, m), e === "focusout" && (B = S._wrapperState) && B.controlled && S.type === "number" && Wl(S, "number", S.value);
        }
        switch (B = m ? Cn(m) : window, e) {
          case "focusin":
            (Mu(B) || B.contentEditable === "true") && (yn = B, wo = m, ir = null);
            break;
          case "focusout":
            ir = wo = yn = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ko = !1, Wu(_, n, C);
            break;
          case "selectionchange":
            if (qc) break;
          case "keydown":
          case "keyup":
            Wu(_, n, C);
        }
        var $;
        if (mo) e: {
          switch (e) {
            case "compositionstart":
              var W = "onCompositionStart";
              break e;
            case "compositionend":
              W = "onCompositionEnd";
              break e;
            case "compositionupdate":
              W = "onCompositionUpdate";
              break e;
          }
          W = void 0;
        }
        else gn ? Lu(e, n) && (W = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (W = "onCompositionStart");
        W && (zu && n.locale !== "ko" && (gn || W !== "onCompositionStart" ? W === "onCompositionEnd" && gn && ($ = xu()) : (It = C, so = "value" in It ? It.value : It.textContent, gn = !0)), B = Gr(m, W), 0 < B.length && (W = new Ru(W, e, null, n, C), _.push({ event: W, listeners: B }), $ ? W.data = $ : ($ = Tu(n), $ !== null && (W.data = $)))), ($ = Hc ? Bc(e, n) : $c(e, n)) && (m = Gr(m, "onBeforeInput"), 0 < m.length && (C = new Ru("onBeforeInput", "beforeinput", null, n, C), _.push({ event: C, listeners: m }), C.data = $));
      }
      qu(_, t);
    });
  }
  function ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Gr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Vn(e, n), o != null && r.unshift(ar(e, o, l)), o = Vn(e, t), o != null && r.push(ar(e, o, l))), e = e.return;
    }
    return r;
  }
  function kn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function es(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var s = n, a = s.alternate, m = s.stateNode;
      if (a !== null && a === r) break;
      s.tag === 5 && m !== null && (s = m, l ? (a = Vn(n, o), a != null && i.unshift(ar(n, a, s))) : l || (a = Vn(n, o), a != null && i.push(ar(n, a, s)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var nf = /\r\n?/g, rf = /\u0000|\uFFFD/g;
  function ts(e) {
    return (typeof e == "string" ? e : "" + e).replace(nf, `
`).replace(rf, "");
  }
  function Zr(e, t, n) {
    if (t = ts(t), ts(e) !== t && n) throw Error(u(425));
  }
  function Jr() {
  }
  var Ro = null, Po = null;
  function zo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var No = typeof setTimeout == "function" ? setTimeout : void 0, lf = typeof clearTimeout == "function" ? clearTimeout : void 0, ns = typeof Promise == "function" ? Promise : void 0, of = typeof queueMicrotask == "function" ? queueMicrotask : typeof ns < "u" ? function(e) {
    return ns.resolve(null).then(e).catch(uf);
  } : No;
  function uf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Do(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), bn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    bn(t);
  }
  function jt(e) {
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
  function rs(e) {
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
  var Sn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + Sn, cr = "__reactProps$" + Sn, xt = "__reactContainer$" + Sn, Lo = "__reactEvents$" + Sn, sf = "__reactListeners$" + Sn, af = "__reactHandles$" + Sn;
  function bt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = rs(e); e !== null; ) {
          if (n = e[yt]) return n;
          e = rs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function fr(e) {
    return e = e[yt] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function qr(e) {
    return e[cr] || null;
  }
  var To = [], xn = -1;
  function Ut(e) {
    return { current: e };
  }
  function ce(e) {
    0 > xn || (e.current = To[xn], To[xn] = null, xn--);
  }
  function se(e, t) {
    xn++, To[xn] = e.current, e.current = t;
  }
  var At = {}, Ie = Ut(At), Ve = Ut(!1), en = At;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return At;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Qe(e) {
    return e = e.childContextTypes, e != null;
  }
  function br() {
    ce(Ve), ce(Ie);
  }
  function ls(e, t, n) {
    if (Ie.current !== At) throw Error(u(168));
    se(Ie, t), se(Ve, n);
  }
  function os(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, re(e) || "Unknown", l));
    return D({}, n, r);
  }
  function el(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, en = Ie.current, se(Ie, e), se(Ve, Ve.current), !0;
  }
  function is(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = os(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, ce(Ve), ce(Ie), se(Ie, e)) : ce(Ve), se(Ve, n);
  }
  var _t = null, tl = !1, Mo = !1;
  function us(e) {
    _t === null ? _t = [e] : _t.push(e);
  }
  function cf(e) {
    tl = !0, us(e);
  }
  function Ht() {
    if (!Mo && _t !== null) {
      Mo = !0;
      var e = 0, t = ie;
      try {
        var n = _t;
        for (ie = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        _t = null, tl = !1;
      } catch (l) {
        throw _t !== null && (_t = _t.slice(e + 1)), au(eo, Ht), l;
      } finally {
        ie = t, Mo = !1;
      }
    }
    return null;
  }
  var En = [], Rn = 0, nl = null, rl = 0, nt = [], rt = 0, tn = null, Et = 1, Rt = "";
  function nn(e, t) {
    En[Rn++] = rl, En[Rn++] = nl, nl = e, rl = t;
  }
  function ss(e, t, n) {
    nt[rt++] = Et, nt[rt++] = Rt, nt[rt++] = tn, tn = e;
    var r = Et;
    e = Rt;
    var l = 32 - at(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - at(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Et = 1 << 32 - at(t) + l | n << l | r, Rt = o + e;
    } else Et = 1 << o | n << l | r, Rt = e;
  }
  function Oo(e) {
    e.return !== null && (nn(e, 1), ss(e, 1, 0));
  }
  function Io(e) {
    for (; e === nl; ) nl = En[--Rn], En[Rn] = null, rl = En[--Rn], En[Rn] = null;
    for (; e === tn; ) tn = nt[--rt], nt[rt] = null, Rt = nt[--rt], nt[rt] = null, Et = nt[--rt], nt[rt] = null;
  }
  var qe = null, be = null, de = !1, ft = null;
  function as(e, t) {
    var n = ut(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function cs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, be = jt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, be = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: Et, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, be = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jo(e) {
    if (de) {
      var t = be;
      if (t) {
        var n = t;
        if (!cs(e, t)) {
          if (Fo(e)) throw Error(u(418));
          t = jt(n.nextSibling);
          var r = qe;
          t && cs(e, t) ? as(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, qe = e);
        }
      } else {
        if (Fo(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, de = !1, qe = e;
      }
    }
  }
  function fs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    qe = e;
  }
  function ll(e) {
    if (e !== qe) return !1;
    if (!de) return fs(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps)), t && (t = be)) {
      if (Fo(e)) throw ds(), Error(u(418));
      for (; t; ) as(e, t), t = jt(t.nextSibling);
    }
    if (fs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                be = jt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        be = null;
      }
    } else be = qe ? jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var e = be; e; ) e = jt(e.nextSibling);
  }
  function Pn() {
    be = qe = null, de = !1;
  }
  function Uo(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var ff = xe.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var s = l.refs;
          i === null ? delete s[o] : s[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ps(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hs(e) {
    function t(p, c) {
      if (e) {
        var h = p.deletions;
        h === null ? (p.deletions = [c], p.flags |= 16) : h.push(c);
      }
    }
    function n(p, c) {
      if (!e) return null;
      for (; c !== null; ) t(p, c), c = c.sibling;
      return null;
    }
    function r(p, c) {
      for (p = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
      return p;
    }
    function l(p, c) {
      return p = Xt(p, c), p.index = 0, p.sibling = null, p;
    }
    function o(p, c, h) {
      return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function s(p, c, h, R) {
      return c === null || c.tag !== 6 ? (c = Ni(h, p.mode, R), c.return = p, c) : (c = l(c, h), c.return = p, c);
    }
    function a(p, c, h, R) {
      var A = h.type;
      return A === Pe ? C(p, c, h.props.children, R, h.key) : c !== null && (c.elementType === A || typeof A == "object" && A !== null && A.$$typeof === oe && ps(A) === c.type) ? (R = l(c, h.props), R.ref = dr(p, c, h), R.return = p, R) : (R = Nl(h.type, h.key, h.props, null, p.mode, R), R.ref = dr(p, c, h), R.return = p, R);
    }
    function m(p, c, h, R) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Di(h, p.mode, R), c.return = p, c) : (c = l(c, h.children || []), c.return = p, c);
    }
    function C(p, c, h, R, A) {
      return c === null || c.tag !== 7 ? (c = fn(h, p.mode, R, A), c.return = p, c) : (c = l(c, h), c.return = p, c);
    }
    function _(p, c, h) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ni("" + c, p.mode, h), c.return = p, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Le:
            return h = Nl(c.type, c.key, c.props, null, p.mode, h), h.ref = dr(p, null, c), h.return = p, h;
          case Te:
            return c = Di(c, p.mode, h), c.return = p, c;
          case oe:
            var R = c._init;
            return _(p, R(c._payload), h);
        }
        if (Bn(c) || H(c)) return c = fn(c, p.mode, h, null), c.return = p, c;
        ol(p, c);
      }
      return null;
    }
    function S(p, c, h, R) {
      var A = c !== null ? c.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number") return A !== null ? null : s(p, c, "" + h, R);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Le:
            return h.key === A ? a(p, c, h, R) : null;
          case Te:
            return h.key === A ? m(p, c, h, R) : null;
          case oe:
            return A = h._init, S(
              p,
              c,
              A(h._payload),
              R
            );
        }
        if (Bn(h) || H(h)) return A !== null ? null : C(p, c, h, R, null);
        ol(p, h);
      }
      return null;
    }
    function N(p, c, h, R, A) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return p = p.get(h) || null, s(c, p, "" + R, A);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Le:
            return p = p.get(R.key === null ? h : R.key) || null, a(c, p, R, A);
          case Te:
            return p = p.get(R.key === null ? h : R.key) || null, m(c, p, R, A);
          case oe:
            var B = R._init;
            return N(p, c, h, B(R._payload), A);
        }
        if (Bn(R) || H(R)) return p = p.get(h) || null, C(c, p, R, A, null);
        ol(c, R);
      }
      return null;
    }
    function O(p, c, h, R) {
      for (var A = null, B = null, $ = c, W = c = 0, De = null; $ !== null && W < h.length; W++) {
        $.index > W ? (De = $, $ = null) : De = $.sibling;
        var le = S(p, $, h[W], R);
        if (le === null) {
          $ === null && ($ = De);
          break;
        }
        e && $ && le.alternate === null && t(p, $), c = o(le, c, W), B === null ? A = le : B.sibling = le, B = le, $ = De;
      }
      if (W === h.length) return n(p, $), de && nn(p, W), A;
      if ($ === null) {
        for (; W < h.length; W++) $ = _(p, h[W], R), $ !== null && (c = o($, c, W), B === null ? A = $ : B.sibling = $, B = $);
        return de && nn(p, W), A;
      }
      for ($ = r(p, $); W < h.length; W++) De = N($, p, W, h[W], R), De !== null && (e && De.alternate !== null && $.delete(De.key === null ? W : De.key), c = o(De, c, W), B === null ? A = De : B.sibling = De, B = De);
      return e && $.forEach(function(Gt) {
        return t(p, Gt);
      }), de && nn(p, W), A;
    }
    function F(p, c, h, R) {
      var A = H(h);
      if (typeof A != "function") throw Error(u(150));
      if (h = A.call(h), h == null) throw Error(u(151));
      for (var B = A = null, $ = c, W = c = 0, De = null, le = h.next(); $ !== null && !le.done; W++, le = h.next()) {
        $.index > W ? (De = $, $ = null) : De = $.sibling;
        var Gt = S(p, $, le.value, R);
        if (Gt === null) {
          $ === null && ($ = De);
          break;
        }
        e && $ && Gt.alternate === null && t(p, $), c = o(Gt, c, W), B === null ? A = Gt : B.sibling = Gt, B = Gt, $ = De;
      }
      if (le.done) return n(
        p,
        $
      ), de && nn(p, W), A;
      if ($ === null) {
        for (; !le.done; W++, le = h.next()) le = _(p, le.value, R), le !== null && (c = o(le, c, W), B === null ? A = le : B.sibling = le, B = le);
        return de && nn(p, W), A;
      }
      for ($ = r(p, $); !le.done; W++, le = h.next()) le = N($, p, W, le.value, R), le !== null && (e && le.alternate !== null && $.delete(le.key === null ? W : le.key), c = o(le, c, W), B === null ? A = le : B.sibling = le, B = le);
      return e && $.forEach(function(Vf) {
        return t(p, Vf);
      }), de && nn(p, W), A;
    }
    function Se(p, c, h, R) {
      if (typeof h == "object" && h !== null && h.type === Pe && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Le:
            e: {
              for (var A = h.key, B = c; B !== null; ) {
                if (B.key === A) {
                  if (A = h.type, A === Pe) {
                    if (B.tag === 7) {
                      n(p, B.sibling), c = l(B, h.props.children), c.return = p, p = c;
                      break e;
                    }
                  } else if (B.elementType === A || typeof A == "object" && A !== null && A.$$typeof === oe && ps(A) === B.type) {
                    n(p, B.sibling), c = l(B, h.props), c.ref = dr(p, B, h), c.return = p, p = c;
                    break e;
                  }
                  n(p, B);
                  break;
                } else t(p, B);
                B = B.sibling;
              }
              h.type === Pe ? (c = fn(h.props.children, p.mode, R, h.key), c.return = p, p = c) : (R = Nl(h.type, h.key, h.props, null, p.mode, R), R.ref = dr(p, c, h), R.return = p, p = R);
            }
            return i(p);
          case Te:
            e: {
              for (B = h.key; c !== null; ) {
                if (c.key === B) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(p, c.sibling), c = l(c, h.children || []), c.return = p, p = c;
                  break e;
                } else {
                  n(p, c);
                  break;
                }
                else t(p, c);
                c = c.sibling;
              }
              c = Di(h, p.mode, R), c.return = p, p = c;
            }
            return i(p);
          case oe:
            return B = h._init, Se(p, c, B(h._payload), R);
        }
        if (Bn(h)) return O(p, c, h, R);
        if (H(h)) return F(p, c, h, R);
        ol(p, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = l(c, h), c.return = p, p = c) : (n(p, c), c = Ni(h, p.mode, R), c.return = p, p = c), i(p)) : n(p, c);
    }
    return Se;
  }
  var zn = hs(!0), ms = hs(!1), il = Ut(null), ul = null, Nn = null, Ao = null;
  function Ho() {
    Ao = Nn = ul = null;
  }
  function Bo(e) {
    var t = il.current;
    ce(il), e._currentValue = t;
  }
  function $o(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Dn(e, t) {
    ul = e, Ao = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ye = !0), e.firstContext = null);
  }
  function lt(e) {
    var t = e._currentValue;
    if (Ao !== e) if (e = { context: e, memoizedValue: t, next: null }, Nn === null) {
      if (ul === null) throw Error(u(308));
      Nn = e, ul.dependencies = { lanes: 0, firstContext: e };
    } else Nn = Nn.next = e;
    return t;
  }
  var rn = null;
  function Wo(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  function vs(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Wo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Pt(e, r);
  }
  function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Vo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ne & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Pt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Pt(e, n);
  }
  function sl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
    }
  }
  function ys(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function al(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var a = s, m = a.next;
      a.next = null, i === null ? o = m : i.next = m, i = a;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, s = C.lastBaseUpdate, s !== i && (s === null ? C.firstBaseUpdate = m : s.next = m, C.lastBaseUpdate = a));
    }
    if (o !== null) {
      var _ = l.baseState;
      i = 0, C = m = a = null, s = o;
      do {
        var S = s.lane, N = s.eventTime;
        if ((r & S) === S) {
          C !== null && (C = C.next = {
            eventTime: N,
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          });
          e: {
            var O = e, F = s;
            switch (S = t, N = n, F.tag) {
              case 1:
                if (O = F.payload, typeof O == "function") {
                  _ = O.call(N, _, S);
                  break e;
                }
                _ = O;
                break e;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = F.payload, S = typeof O == "function" ? O.call(N, _, S) : O, S == null) break e;
                _ = D({}, _, S);
                break e;
              case 2:
                Bt = !0;
            }
          }
          s.callback !== null && s.lane !== 0 && (e.flags |= 64, S = l.effects, S === null ? l.effects = [s] : S.push(s));
        } else N = { eventTime: N, lane: S, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, C === null ? (m = C = N, a = _) : C = C.next = N, i |= S;
        if (s = s.next, s === null) {
          if (s = l.shared.pending, s === null) break;
          S = s, s = S.next, S.next = null, l.lastBaseUpdate = S, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (a = _), l.baseState = a, l.firstBaseUpdate = m, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      un |= i, e.lanes = i, e.memoizedState = _;
    }
  }
  function ws(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(u(191, l));
        l.call(r);
      }
    }
  }
  var pr = {}, wt = Ut(pr), hr = Ut(pr), mr = Ut(pr);
  function ln(e) {
    if (e === pr) throw Error(u(174));
    return e;
  }
  function Qo(e, t) {
    switch (se(mr, t), se(hr, e), se(wt, pr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ql(t, e);
    }
    ce(wt), se(wt, t);
  }
  function Ln() {
    ce(wt), ce(hr), ce(mr);
  }
  function ks(e) {
    ln(mr.current);
    var t = ln(wt.current), n = Ql(t, e.type);
    t !== n && (se(hr, e), se(wt, n));
  }
  function Yo(e) {
    hr.current === e && (ce(wt), ce(hr));
  }
  var ve = Ut(0);
  function cl(e) {
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
  var Ko = [];
  function Xo() {
    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
    Ko.length = 0;
  }
  var fl = xe.ReactCurrentDispatcher, Go = xe.ReactCurrentBatchConfig, on = 0, ge = null, _e = null, ze = null, dl = !1, vr = !1, gr = 0, df = 0;
  function Fe() {
    throw Error(u(321));
  }
  function Zo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function Jo(e, t, n, r, l, o) {
    if (on = o, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? vf : gf, e = n(r, l), vr) {
      o = 0;
      do {
        if (vr = !1, gr = 0, 25 <= o) throw Error(u(301));
        o += 1, ze = _e = null, t.updateQueue = null, fl.current = yf, e = n(r, l);
      } while (vr);
    }
    if (fl.current = ml, t = _e !== null && _e.next !== null, on = 0, ze = _e = ge = null, dl = !1, t) throw Error(u(300));
    return e;
  }
  function qo() {
    var e = gr !== 0;
    return gr = 0, e;
  }
  function kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ze === null ? ge.memoizedState = ze = e : ze = ze.next = e, ze;
  }
  function ot() {
    if (_e === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = ze === null ? ge.memoizedState : ze.next;
    if (t !== null) ze = t, _e = e;
    else {
      if (e === null) throw Error(u(310));
      _e = e, e = { memoizedState: _e.memoizedState, baseState: _e.baseState, baseQueue: _e.baseQueue, queue: _e.queue, next: null }, ze === null ? ge.memoizedState = ze = e : ze = ze.next = e;
    }
    return ze;
  }
  function yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bo(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = _e, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var s = i = null, a = null, m = o;
      do {
        var C = m.lane;
        if ((on & C) === C) a !== null && (a = a.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
        else {
          var _ = {
            lane: C,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          };
          a === null ? (s = a = _, i = r) : a = a.next = _, ge.lanes |= C, un |= C;
        }
        m = m.next;
      } while (m !== null && m !== o);
      a === null ? i = r : a.next = s, ct(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ge.lanes |= o, un |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ei(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      ct(o, t.memoizedState) || (Ye = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Ss() {
  }
  function Cs(e, t) {
    var n = ge, r = ot(), l = t(), o = !ct(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ye = !0), r = r.queue, ti(Es.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ze !== null && ze.memoizedState.tag & 1) {
      if (n.flags |= 2048, wr(9, _s.bind(null, n, r, l, t), void 0, null), Ne === null) throw Error(u(349));
      (on & 30) !== 0 || xs(n, t, l);
    }
    return l;
  }
  function xs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function _s(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Rs(t) && Ps(e);
  }
  function Es(e, t, n) {
    return n(function() {
      Rs(t) && Ps(e);
    });
  }
  function Rs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function Ps(e) {
    var t = Pt(e, 1);
    t !== null && mt(t, e, 1, -1);
  }
  function zs(e) {
    var t = kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yr, lastRenderedState: e }, t.queue = e, e = e.dispatch = mf.bind(null, ge, e), [t.memoizedState, e];
  }
  function wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ns() {
    return ot().memoizedState;
  }
  function pl(e, t, n, r) {
    var l = kt();
    ge.flags |= e, l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function hl(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (_e !== null) {
      var i = _e.memoizedState;
      if (o = i.destroy, r !== null && Zo(r, i.deps)) {
        l.memoizedState = wr(t, n, o, r);
        return;
      }
    }
    ge.flags |= e, l.memoizedState = wr(1 | t, n, o, r);
  }
  function Ds(e, t) {
    return pl(8390656, 8, e, t);
  }
  function ti(e, t) {
    return hl(2048, 8, e, t);
  }
  function Ls(e, t) {
    return hl(4, 2, e, t);
  }
  function Ts(e, t) {
    return hl(4, 4, e, t);
  }
  function Ms(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Os(e, t, n) {
    return n = n != null ? n.concat([e]) : null, hl(4, 4, Ms.bind(null, t, e), n);
  }
  function ni() {
  }
  function Is(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Fs(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function js(e, t, n) {
    return (on & 21) === 0 ? (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n) : (ct(n, t) || (n = pu(), ge.lanes |= n, un |= n, e.baseState = !0), t);
  }
  function pf(e, t) {
    var n = ie;
    ie = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      ie = n, Go.transition = r;
    }
  }
  function Us() {
    return ot().memoizedState;
  }
  function hf(e, t, n) {
    var r = Yt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, As(e)) Hs(t, n);
    else if (n = vs(e, t, n, r), n !== null) {
      var l = Be();
      mt(n, e, r, l), Bs(n, t, r);
    }
  }
  function mf(e, t, n) {
    var r = Yt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (As(e)) Hs(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, s = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = s, ct(s, i)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Wo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = vs(e, t, l, r), n !== null && (l = Be(), mt(n, e, r, l), Bs(n, t, r));
    }
  }
  function As(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge;
  }
  function Hs(e, t) {
    vr = dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Bs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
    }
  }
  var ml = { readContext: lt, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, vf = { readContext: lt, useCallback: function(e, t) {
    return kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: lt, useEffect: Ds, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, pl(
      4194308,
      4,
      Ms.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return pl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return pl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = kt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hf.bind(null, ge, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: zs, useDebugValue: ni, useDeferredValue: function(e) {
    return kt().memoizedState = e;
  }, useTransition: function() {
    var e = zs(!1), t = e[0];
    return e = pf.bind(null, e[1]), kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ge, l = kt();
    if (de) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), Ne === null) throw Error(u(349));
      (on & 30) !== 0 || xs(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Ds(Es.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, wr(9, _s.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = kt(), t = Ne.identifierPrefix;
    if (de) {
      var n = Rt, r = Et;
      n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = df++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, gf = {
    readContext: lt,
    useCallback: Is,
    useContext: lt,
    useEffect: ti,
    useImperativeHandle: Os,
    useInsertionEffect: Ls,
    useLayoutEffect: Ts,
    useMemo: Fs,
    useReducer: bo,
    useRef: Ns,
    useState: function() {
      return bo(yr);
    },
    useDebugValue: ni,
    useDeferredValue: function(e) {
      var t = ot();
      return js(t, _e.memoizedState, e);
    },
    useTransition: function() {
      var e = bo(yr)[0], t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Ss,
    useSyncExternalStore: Cs,
    useId: Us,
    unstable_isNewReconciler: !1
  }, yf = { readContext: lt, useCallback: Is, useContext: lt, useEffect: ti, useImperativeHandle: Os, useInsertionEffect: Ls, useLayoutEffect: Ts, useMemo: Fs, useReducer: ei, useRef: Ns, useState: function() {
    return ei(yr);
  }, useDebugValue: ni, useDeferredValue: function(e) {
    var t = ot();
    return _e === null ? t.memoizedState = e : js(t, _e.memoizedState, e);
  }, useTransition: function() {
    var e = ei(yr)[0], t = ot().memoizedState;
    return [e, t];
  }, useMutableSource: Ss, useSyncExternalStore: Cs, useId: Us, unstable_isNewReconciler: !1 };
  function dt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ri(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vl = { isMounted: function(e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Be(), l = Yt(e), o = zt(r, l);
    o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (mt(t, e, l, r), sl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Be(), l = Yt(e), o = zt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (mt(t, e, l, r), sl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Be(), r = Yt(e), l = zt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = $t(e, l, r), t !== null && (mt(t, e, r, n), sl(t, e, r));
  } };
  function $s(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(l, o) : !0;
  }
  function Ws(e, t, n) {
    var r = !1, l = At, o = t.contextType;
    return typeof o == "object" && o !== null ? o = lt(o) : (l = Qe(t) ? en : Ie.current, r = t.contextTypes, o = (r = r != null) ? _n(e, l) : At), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Vs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
  }
  function li(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Vo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = lt(o) : (o = Qe(t) ? en : Ie.current, l.context = _n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ri(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Tn(e, t) {
    try {
      var n = "", r = t;
      do
        n += ee(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function oi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ii(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var wf = typeof WeakMap == "function" ? WeakMap : Map;
  function Qs(e, t, n) {
    n = zt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      xl || (xl = !0, Si = r), ii(e, t);
    }, n;
  }
  function Ys(e, t, n) {
    n = zt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ii(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ii(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Ks(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new wf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Mf.bind(null, e, t, n), t.then(e, e));
  }
  function Xs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var kf = xe.ReactCurrentOwner, Ye = !1;
  function He(e, t, n, r) {
    t.child = e === null ? ms(t, null, n, r) : zn(t, e.child, n, r);
  }
  function Zs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Dn(t, l), r = Jo(e, t, n, r, o, l), n = qo(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && n && Oo(t), t.flags |= 1, He(e, t, r, l), t.child);
  }
  function Js(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, qs(e, t, o, r, l)) : (e = Nl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : or, n(i, r) && e.ref === t.ref) return Nt(e, t, l);
    }
    return t.flags |= 1, e = Xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qs(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (or(o, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ye = !0);
      else return t.lanes = e.lanes, Nt(e, t, l);
    }
    return ui(e, t, n, r, l);
  }
  function bs(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(On, et), et |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(On, et), et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, se(On, et), et |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, se(On, et), et |= r;
    return He(e, t, l, n), t.child;
  }
  function ea(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ui(e, t, n, r, l) {
    var o = Qe(n) ? en : Ie.current;
    return o = _n(t, o), Dn(t, l), n = Jo(e, t, n, r, o, l), r = qo(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (de && r && Oo(t), t.flags |= 1, He(e, t, n, l), t.child);
  }
  function ta(e, t, n, r, l) {
    if (Qe(n)) {
      var o = !0;
      el(t);
    } else o = !1;
    if (Dn(t, l), t.stateNode === null) yl(e, t), Ws(t, n, r), li(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, s = t.memoizedProps;
      i.props = s;
      var a = i.context, m = n.contextType;
      typeof m == "object" && m !== null ? m = lt(m) : (m = Qe(n) ? en : Ie.current, m = _n(t, m));
      var C = n.getDerivedStateFromProps, _ = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      _ || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== m) && Vs(t, i, r, m), Bt = !1;
      var S = t.memoizedState;
      i.state = S, al(t, r, i, l), a = t.memoizedState, s !== r || S !== a || Ve.current || Bt ? (typeof C == "function" && (ri(t, n, C, r), a = t.memoizedState), (s = Bt || $s(t, n, s, r, S, a, m)) ? (_ || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = m, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, gs(e, t), s = t.memoizedProps, m = t.type === t.elementType ? s : dt(t.type, s), i.props = m, _ = t.pendingProps, S = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = lt(a) : (a = Qe(n) ? en : Ie.current, a = _n(t, a));
      var N = n.getDerivedStateFromProps;
      (C = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== _ || S !== a) && Vs(t, i, r, a), Bt = !1, S = t.memoizedState, i.state = S, al(t, r, i, l);
      var O = t.memoizedState;
      s !== _ || S !== O || Ve.current || Bt ? (typeof N == "function" && (ri(t, n, N, r), O = t.memoizedState), (m = Bt || $s(t, n, m, r, S, O, a) || !1) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, O, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, O, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = O), i.props = r, i.state = O, i.context = a, r = m) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return si(e, t, n, r, o, l);
  }
  function si(e, t, n, r, l, o) {
    ea(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && is(t, n, !1), Nt(e, t, o);
    r = t.stateNode, kf.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, s, o)) : He(e, t, s, o), t.memoizedState = r.state, l && is(t, n, !0), t.child;
  }
  function na(e) {
    var t = e.stateNode;
    t.pendingContext ? ls(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ls(e, t.context, !1), Qo(e, t.containerInfo);
  }
  function ra(e, t, n, r, l) {
    return Pn(), Uo(l), t.flags |= 256, He(e, t, n, r), t.child;
  }
  var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ci(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function la(e, t, n) {
    var r = t.pendingProps, l = ve.current, o = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), se(ve, l & 1), e === null)
      return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Dl(i, r, 0, null), e = fn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ci(n), t.memoizedState = ai, e) : fi(t, i));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Sf(e, t, i, r, s, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Xt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = Xt(s, o) : (o = fn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ci(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ai, r;
    }
    return o = e.child, e = o.sibling, r = Xt(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fi(e, t) {
    return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function gl(e, t, n, r) {
    return r !== null && Uo(r), zn(t, e.child, null, n), e = fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Sf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oi(Error(u(422))), gl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Dl({ mode: "visible", children: r.children }, l, 0, null), o = fn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && zn(t, e.child, null, i), t.child.memoizedState = ci(i), t.memoizedState = ai, o);
    if ((t.mode & 1) === 0) return gl(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
      return r = s, o = Error(u(419)), r = oi(o, r, void 0), gl(e, t, i, r);
    }
    if (s = (i & e.childLanes) !== 0, Ye || s) {
      if (r = Ne, r !== null) {
        switch (i & -i) {
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
        l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Pt(e, l), mt(r, e, l, -1));
      }
      return Pi(), r = oi(Error(u(421))), gl(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Of.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, be = jt(l.nextSibling), qe = t, de = !0, ft = null, e !== null && (nt[rt++] = Et, nt[rt++] = Rt, nt[rt++] = tn, Et = e.id, Rt = e.overflow, tn = t), t = fi(t, r.children), t.flags |= 4096, t);
  }
  function oa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), $o(e.return, t, n);
  }
  function di(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function ia(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (He(e, t, r.children, n), r = ve.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oa(e, n, t);
        else if (e.tag === 19) oa(e, n, t);
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
    if (se(ve, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && cl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), di(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && cl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        di(t, !0, n, null, o);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function yl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Cf(e, t, n) {
    switch (t.tag) {
      case 3:
        na(t), Pn();
        break;
      case 5:
        ks(t);
        break;
      case 1:
        Qe(t.type) && el(t);
        break;
      case 4:
        Qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        se(il, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (se(ve, ve.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? la(e, t, n) : (se(ve, ve.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
        se(ve, ve.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ia(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), se(ve, ve.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, bs(e, t, n);
    }
    return Nt(e, t, n);
  }
  var ua, pi, sa, aa;
  ua = function(e, t) {
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
  }, pi = function() {
  }, sa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, ln(wt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Bl(e, l), r = Bl(e, r), o = [];
          break;
        case "select":
          l = D({}, l, { value: void 0 }), r = D({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Vl(e, l), r = Vl(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
      }
      Yl(n, r);
      var i;
      n = null;
      for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
        var s = l[m];
        for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (v.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
      for (m in r) {
        var a = r[m];
        if (s = l?.[m], r.hasOwnProperty(m) && a !== s && (a != null || s != null)) if (m === "style") if (s) {
          for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
        } else n || (o || (o = []), o.push(
          m,
          n
        )), n = a;
        else m === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(m, a)) : m === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(m, "" + a) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (v.hasOwnProperty(m) ? (a != null && m === "onScroll" && ae("scroll", e), o || s === a || (o = [])) : (o = o || []).push(m, a));
      }
      n && (o = o || []).push("style", n);
      var m = o;
      (t.updateQueue = m) && (t.flags |= 4);
    }
  }, aa = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function kr(e, t) {
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
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function xf(e, t, n) {
    var r = t.pendingProps;
    switch (Io(t), t.tag) {
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
        return je(t), null;
      case 1:
        return Qe(t.type) && br(), je(t), null;
      case 3:
        return r = t.stateNode, Ln(), ce(Ve), ce(Ie), Xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ft !== null && (_i(ft), ft = null))), pi(e, t), je(t), null;
      case 5:
        Yo(t);
        var l = ln(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) sa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return je(t), null;
          }
          if (e = ln(wt.current), ll(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[yt] = t, r[cr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ae("cancel", r), ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ur.length; l++) ae(ur[l], r);
                break;
              case "source":
                ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  r
                ), ae("load", r);
                break;
              case "details":
                ae("toggle", r);
                break;
              case "input":
                Wi(r, o), ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ae("invalid", r);
                break;
              case "textarea":
                Yi(r, o), ae("invalid", r);
            }
            Yl(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Zr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Zr(
                r.textContent,
                s,
                e
              ), l = ["children", "" + s]) : v.hasOwnProperty(i) && s != null && i === "onScroll" && ae("scroll", r);
            }
            switch (n) {
              case "input":
                Pr(r), Qi(r, o, !0);
                break;
              case "textarea":
                Pr(r), Xi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Jr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[yt] = t, e[cr] = r, ua(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Kl(n, r), n) {
                case "dialog":
                  ae("cancel", e), ae("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ae("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ur.length; l++) ae(ur[l], e);
                  l = r;
                  break;
                case "source":
                  ae("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ae(
                    "error",
                    e
                  ), ae("load", e), l = r;
                  break;
                case "details":
                  ae("toggle", e), l = r;
                  break;
                case "input":
                  Wi(e, r), l = Bl(e, r), ae("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = D({}, r, { value: void 0 }), ae("invalid", e);
                  break;
                case "textarea":
                  Yi(e, r), l = Vl(e, r), ae("invalid", e);
                  break;
                default:
                  l = r;
              }
              Yl(n, l), s = l;
              for (o in s) if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style" ? qi(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Zi(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && $n(e, a) : typeof a == "number" && $n(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (v.hasOwnProperty(o) ? a != null && o === "onScroll" && ae("scroll", e) : a != null && Re(e, o, a, i));
              }
              switch (n) {
                case "input":
                  Pr(e), Qi(e, r, !1);
                  break;
                case "textarea":
                  Pr(e), Xi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + J(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? dn(e, !!r.multiple, o, !1) : r.defaultValue != null && dn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Jr);
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
        return je(t), null;
      case 6:
        if (e && t.stateNode != null) aa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = ln(mr.current), ln(wt.current), ll(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (o = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
        }
        return je(t), null;
      case 13:
        if (ce(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (de && be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ds(), Pn(), t.flags |= 98560, o = !1;
          else if (o = ll(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[yt] = t;
            } else Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), o = !1;
          } else ft !== null && (_i(ft), ft = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ve.current & 1) !== 0 ? Ee === 0 && (Ee = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
      case 4:
        return Ln(), pi(e, t), e === null && sr(t.stateNode.containerInfo), je(t), null;
      case 10:
        return Bo(t.type._context), je(t), null;
      case 17:
        return Qe(t.type) && br(), je(t), null;
      case 19:
        if (ce(ve), o = t.memoizedState, o === null) return je(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) kr(o, !1);
        else {
          if (Ee !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = cl(e), i !== null) {
              for (t.flags |= 128, kr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return se(ve, ve.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && ke() > In && (t.flags |= 128, r = !0, kr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = cl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !de) return je(t), null;
          } else 2 * ke() - o.renderingStartTime > In && n !== 1073741824 && (t.flags |= 128, r = !0, kr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ke(), t.sibling = null, n = ve.current, se(ve, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
      case 22:
      case 23:
        return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (et & 1073741824) !== 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function _f(e, t) {
    switch (Io(t), t.tag) {
      case 1:
        return Qe(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ln(), ce(Ve), ce(Ie), Xo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Yo(t), null;
      case 13:
        if (ce(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(ve), null;
      case 4:
        return Ln(), null;
      case 10:
        return Bo(t.type._context), null;
      case 22:
      case 23:
        return Ri(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var wl = !1, Ue = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, T = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      we(e, t, r);
    }
    else n.current = null;
  }
  function hi(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var ca = !1;
  function Rf(e, t) {
    if (Ro = Ar, e = $u(), yo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, s = -1, a = -1, m = 0, C = 0, _ = e, S = null;
          t: for (; ; ) {
            for (var N; _ !== n || l !== 0 && _.nodeType !== 3 || (s = i + l), _ !== o || r !== 0 && _.nodeType !== 3 || (a = i + r), _.nodeType === 3 && (i += _.nodeValue.length), (N = _.firstChild) !== null; )
              S = _, _ = N;
            for (; ; ) {
              if (_ === e) break t;
              if (S === n && ++m === l && (s = i), S === o && ++C === r && (a = i), (N = _.nextSibling) !== null) break;
              _ = S, S = _.parentNode;
            }
            _ = N;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Po = { focusedElem: e, selectionRange: n }, Ar = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
    else for (; T !== null; ) {
      t = T;
      try {
        var O = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (O !== null) {
              var F = O.memoizedProps, Se = O.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? F : dt(t.type, F), Se);
              p.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var h = t.stateNode.containerInfo;
            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (R) {
        we(t, t.return, R);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, T = e;
        break;
      }
      T = t.return;
    }
    return O = ca, ca = !1, O;
  }
  function Sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && hi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function kl(e, t) {
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
  function mi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function fa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[cr], delete t[Lo], delete t[sf], delete t[af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function da(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function pa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || da(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
    else if (r !== 4 && (e = e.child, e !== null)) for (vi(e, t, n), e = e.sibling; e !== null; ) vi(e, t, n), e = e.sibling;
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  var Me = null, pt = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) ha(e, t, n), n = n.sibling;
  }
  function ha(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
      gt.onCommitFiberUnmount(Mr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ue || Mn(n, t);
      case 6:
        var r = Me, l = pt;
        Me = null, Wt(e, t, n), Me = r, pt = l, Me !== null && (pt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
        break;
      case 18:
        Me !== null && (pt ? (e = Me, n = n.stateNode, e.nodeType === 8 ? Do(e.parentNode, n) : e.nodeType === 1 && Do(e, n), bn(e)) : Do(Me, n.stateNode));
        break;
      case 4:
        r = Me, l = pt, Me = n.stateNode.containerInfo, pt = !0, Wt(e, t, n), Me = r, pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && hi(n, t, i), l = l.next;
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (!Ue && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          we(n, t, s);
        }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Wt(e, t, n), Ue = r) : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function ma(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ef()), t.forEach(function(r) {
        var l = If.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              Me = s.stateNode, pt = !1;
              break e;
            case 3:
              Me = s.stateNode.containerInfo, pt = !0;
              break e;
            case 4:
              Me = s.stateNode.containerInfo, pt = !0;
              break e;
          }
          s = s.return;
        }
        if (Me === null) throw Error(u(160));
        ha(o, i, l), Me = null, pt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (m) {
        we(l, t, m);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) va(t, e), t = t.sibling;
  }
  function va(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), St(e), r & 4) {
          try {
            Sr(3, e, e.return), kl(3, e);
          } catch (F) {
            we(e, e.return, F);
          }
          try {
            Sr(5, e, e.return);
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 1:
        ht(t, e), St(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (ht(t, e), St(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            $n(l, "");
          } catch (F) {
            we(e, e.return, F);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, s = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            s === "input" && o.type === "radio" && o.name != null && Vi(l, o), Kl(s, i);
            var m = Kl(s, o);
            for (i = 0; i < a.length; i += 2) {
              var C = a[i], _ = a[i + 1];
              C === "style" ? qi(l, _) : C === "dangerouslySetInnerHTML" ? Zi(l, _) : C === "children" ? $n(l, _) : Re(l, C, _, m);
            }
            switch (s) {
              case "input":
                $l(l, o);
                break;
              case "textarea":
                Ki(l, o);
                break;
              case "select":
                var S = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var N = o.value;
                N != null ? dn(l, !!o.multiple, N, !1) : S !== !!o.multiple && (o.defaultValue != null ? dn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : dn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[cr] = o;
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 6:
        if (ht(t, e), St(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (F) {
            we(e, e.return, F);
          }
        }
        break;
      case 3:
        if (ht(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          bn(t.containerInfo);
        } catch (F) {
          we(e, e.return, F);
        }
        break;
      case 4:
        ht(t, e), St(e);
        break;
      case 13:
        ht(t, e), St(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ki = ke())), r & 4 && ma(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (m = Ue) || C, ht(t, e), Ue = m) : ht(t, e), St(e), r & 8192) {
          if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !C && (e.mode & 1) !== 0) for (T = e, C = e.child; C !== null; ) {
            for (_ = T = C; T !== null; ) {
              switch (S = T, N = S.child, S.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sr(4, S, S.return);
                  break;
                case 1:
                  Mn(S, S.return);
                  var O = S.stateNode;
                  if (typeof O.componentWillUnmount == "function") {
                    r = S, n = S.return;
                    try {
                      t = r, O.props = t.memoizedProps, O.state = t.memoizedState, O.componentWillUnmount();
                    } catch (F) {
                      we(r, n, F);
                    }
                  }
                  break;
                case 5:
                  Mn(S, S.return);
                  break;
                case 22:
                  if (S.memoizedState !== null) {
                    wa(_);
                    continue;
                  }
              }
              N !== null ? (N.return = S, T = N) : wa(_);
            }
            C = C.sibling;
          }
          e: for (C = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (C === null) {
                C = _;
                try {
                  l = _.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = _.stateNode, a = _.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ji("display", i));
                } catch (F) {
                  we(e, e.return, F);
                }
              }
            } else if (_.tag === 6) {
              if (C === null) try {
                _.stateNode.nodeValue = m ? "" : _.memoizedProps;
              } catch (F) {
                we(e, e.return, F);
              }
            } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
              _.child.return = _, _ = _.child;
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              C === _ && (C = null), _ = _.return;
            }
            C === _ && (C = null), _.sibling.return = _.return, _ = _.sibling;
          }
        }
        break;
      case 19:
        ht(t, e), St(e), r & 4 && ma(e);
        break;
      case 21:
        break;
      default:
        ht(
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
            if (da(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && ($n(l, ""), r.flags &= -33);
            var o = pa(e);
            gi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, s = pa(e);
            vi(e, s, i);
            break;
          default:
            throw Error(u(161));
        }
      } catch (a) {
        we(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pf(e, t, n) {
    T = e, ga(e);
  }
  function ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var l = T, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || wl;
        if (!i) {
          var s = l.alternate, a = s !== null && s.memoizedState !== null || Ue;
          s = wl;
          var m = Ue;
          if (wl = i, (Ue = a) && !m) for (T = l; T !== null; ) i = T, a = i.child, i.tag === 22 && i.memoizedState !== null ? ka(l) : a !== null ? (a.return = i, T = a) : ka(l);
          for (; o !== null; ) T = o, ga(o), o = o.sibling;
          T = l, wl = s, Ue = m;
        }
        ya(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, T = o) : ya(e);
    }
  }
  function ya(e) {
    for (; T !== null; ) {
      var t = T;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && ws(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ws(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                  var C = m.memoizedState;
                  if (C !== null) {
                    var _ = C.dehydrated;
                    _ !== null && bn(_);
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
              throw Error(u(163));
          }
          Ue || t.flags & 512 && mi(t);
        } catch (S) {
          we(t, t.return, S);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function wa(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function ka(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              kl(4, t);
            } catch (a) {
              we(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                we(t, l, a);
              }
            }
            var o = t.return;
            try {
              mi(t);
            } catch (a) {
              we(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              mi(t);
            } catch (a) {
              we(t, i, a);
            }
        }
      } catch (a) {
        we(t, t.return, a);
      }
      if (t === e) {
        T = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, T = s;
        break;
      }
      T = t.return;
    }
  }
  var zf = Math.ceil, Sl = xe.ReactCurrentDispatcher, yi = xe.ReactCurrentOwner, it = xe.ReactCurrentBatchConfig, ne = 0, Ne = null, Ce = null, Oe = 0, et = 0, On = Ut(0), Ee = 0, Cr = null, un = 0, Cl = 0, wi = 0, xr = null, Ke = null, ki = 0, In = 1 / 0, Dt = null, xl = !1, Si = null, Vt = null, _l = !1, Qt = null, El = 0, _r = 0, Ci = null, Rl = -1, Pl = 0;
  function Be() {
    return (ne & 6) !== 0 ? ke() : Rl !== -1 ? Rl : Rl = ke();
  }
  function Yt(e) {
    return (e.mode & 1) === 0 ? 1 : (ne & 2) !== 0 && Oe !== 0 ? Oe & -Oe : ff.transition !== null ? (Pl === 0 && (Pl = pu()), Pl) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cu(e.type)), e);
  }
  function mt(e, t, n, r) {
    if (50 < _r) throw _r = 0, Ci = null, Error(u(185));
    Xn(e, n, r), ((ne & 2) === 0 || e !== Ne) && (e === Ne && ((ne & 2) === 0 && (Cl |= n), Ee === 4 && Kt(e, Oe)), Xe(e, r), n === 1 && ne === 0 && (t.mode & 1) === 0 && (In = ke() + 500, tl && Ht()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    cc(e, t);
    var r = Fr(e, e === Ne ? Oe : 0);
    if (r === 0) n !== null && cu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && cu(n), t === 1) e.tag === 0 ? cf(Ca.bind(null, e)) : us(Ca.bind(null, e)), of(function() {
        (ne & 6) === 0 && Ht();
      }), n = null;
      else {
        switch (hu(r)) {
          case 1:
            n = eo;
            break;
          case 4:
            n = fu;
            break;
          case 16:
            n = Tr;
            break;
          case 536870912:
            n = du;
            break;
          default:
            n = Tr;
        }
        n = Da(n, Sa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Sa(e, t) {
    if (Rl = -1, Pl = 0, (ne & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = Fr(e, e === Ne ? Oe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = zl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = _a();
      (Ne !== e || Oe !== t) && (Dt = null, In = ke() + 500, an(e, t));
      do
        try {
          Lf();
          break;
        } catch (s) {
          xa(e, s);
        }
      while (!0);
      Ho(), Sl.current = o, ne = l, Ce !== null ? t = 0 : (Ne = null, Oe = 0, t = Ee);
    }
    if (t !== 0) {
      if (t === 2 && (l = to(e), l !== 0 && (r = l, t = xi(e, l))), t === 1) throw n = Cr, an(e, 0), Kt(e, r), Xe(e, ke()), n;
      if (t === 6) Kt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Nf(l) && (t = zl(e, r), t === 2 && (o = to(e), o !== 0 && (r = o, t = xi(e, o))), t === 1)) throw n = Cr, an(e, 0), Kt(e, r), Xe(e, ke()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            cn(e, Ke, Dt);
            break;
          case 3:
            if (Kt(e, r), (r & 130023424) === r && (t = ki + 500 - ke(), 10 < t)) {
              if (Fr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Be(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = No(cn.bind(null, e, Ke, Dt), t);
              break;
            }
            cn(e, Ke, Dt);
            break;
          case 4:
            if (Kt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - at(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = No(cn.bind(null, e, Ke, Dt), r);
              break;
            }
            cn(e, Ke, Dt);
            break;
          case 5:
            cn(e, Ke, Dt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return Xe(e, ke()), e.callbackNode === n ? Sa.bind(null, e) : null;
  }
  function xi(e, t) {
    var n = xr;
    return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = zl(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && _i(t)), e;
  }
  function _i(e) {
    Ke === null ? Ke = e : Ke.push.apply(Ke, e);
  }
  function Nf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ct(o(), l)) return !1;
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
    for (t &= ~wi, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - at(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ca(e) {
    if ((ne & 6) !== 0) throw Error(u(327));
    Fn();
    var t = Fr(e, 0);
    if ((t & 1) === 0) return Xe(e, ke()), null;
    var n = zl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = to(e);
      r !== 0 && (t = r, n = xi(e, r));
    }
    if (n === 1) throw n = Cr, an(e, 0), Kt(e, t), Xe(e, ke()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, cn(e, Ke, Dt), Xe(e, ke()), null;
  }
  function Ei(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      ne = n, ne === 0 && (In = ke() + 500, tl && Ht());
    }
  }
  function sn(e) {
    Qt !== null && Qt.tag === 0 && (ne & 6) === 0 && Fn();
    var t = ne;
    ne |= 1;
    var n = it.transition, r = ie;
    try {
      if (it.transition = null, ie = 1, e) return e();
    } finally {
      ie = r, it.transition = n, ne = t, (ne & 6) === 0 && Ht();
    }
  }
  function Ri() {
    et = On.current, ce(On);
  }
  function an(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lf(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
      var r = n;
      switch (Io(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && br();
          break;
        case 3:
          Ln(), ce(Ve), ce(Ie), Xo();
          break;
        case 5:
          Yo(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          ce(ve);
          break;
        case 19:
          ce(ve);
          break;
        case 10:
          Bo(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      n = n.return;
    }
    if (Ne = e, Ce = e = Xt(e.current, null), Oe = et = t, Ee = 0, Cr = null, wi = Cl = un = 0, Ke = xr = null, rn !== null) {
      for (t = 0; t < rn.length; t++) if (n = rn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      rn = null;
    }
    return e;
  }
  function xa(e, t) {
    do {
      var n = Ce;
      try {
        if (Ho(), fl.current = ml, dl) {
          for (var r = ge.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          dl = !1;
        }
        if (on = 0, ze = _e = ge = null, vr = !1, gr = 0, yi.current = null, n === null || n.return === null) {
          Ee = 1, Cr = t, Ce = null;
          break;
        }
        e: {
          var o = e, i = n.return, s = n, a = t;
          if (t = Oe, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var m = a, C = s, _ = C.tag;
            if ((C.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var S = C.alternate;
              S ? (C.updateQueue = S.updateQueue, C.memoizedState = S.memoizedState, C.lanes = S.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var N = Xs(i);
            if (N !== null) {
              N.flags &= -257, Gs(N, i, s, o, t), N.mode & 1 && Ks(o, m, t), t = N, a = m;
              var O = t.updateQueue;
              if (O === null) {
                var F = /* @__PURE__ */ new Set();
                F.add(a), t.updateQueue = F;
              } else O.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ks(o, m, t), Pi();
                break e;
              }
              a = Error(u(426));
            }
          } else if (de && s.mode & 1) {
            var Se = Xs(i);
            if (Se !== null) {
              (Se.flags & 65536) === 0 && (Se.flags |= 256), Gs(Se, i, s, o, t), Uo(Tn(a, s));
              break e;
            }
          }
          o = a = Tn(a, s), Ee !== 4 && (Ee = 2), xr === null ? xr = [o] : xr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Qs(o, a, t);
                ys(o, p);
                break e;
              case 1:
                s = a;
                var c = o.type, h = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Vt === null || !Vt.has(h)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var R = Ys(o, s, t);
                  ys(o, R);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ra(n);
      } catch (A) {
        t = A, Ce === n && n !== null && (Ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _a() {
    var e = Sl.current;
    return Sl.current = ml, e === null ? ml : e;
  }
  function Pi() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), Ne === null || (un & 268435455) === 0 && (Cl & 268435455) === 0 || Kt(Ne, Oe);
  }
  function zl(e, t) {
    var n = ne;
    ne |= 2;
    var r = _a();
    (Ne !== e || Oe !== t) && (Dt = null, an(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        xa(e, l);
      }
    while (!0);
    if (Ho(), ne = n, Sl.current = r, Ce !== null) throw Error(u(261));
    return Ne = null, Oe = 0, Ee;
  }
  function Df() {
    for (; Ce !== null; ) Ea(Ce);
  }
  function Lf() {
    for (; Ce !== null && !tc(); ) Ea(Ce);
  }
  function Ea(e) {
    var t = Na(e.alternate, e, et);
    e.memoizedProps = e.pendingProps, t === null ? Ra(e) : Ce = t, yi.current = null;
  }
  function Ra(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = xf(n, t, et), n !== null) {
          Ce = n;
          return;
        }
      } else {
        if (n = _f(n, t), n !== null) {
          n.flags &= 32767, Ce = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ee = 6, Ce = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    Ee === 0 && (Ee = 5);
  }
  function cn(e, t, n) {
    var r = ie, l = it.transition;
    try {
      it.transition = null, ie = 1, Tf(e, t, n, r);
    } finally {
      it.transition = l, ie = r;
    }
    return null;
  }
  function Tf(e, t, n, r) {
    do
      Fn();
    while (Qt !== null);
    if ((ne & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (fc(e, o), e === Ne && (Ce = Ne = null, Oe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || _l || (_l = !0, Da(Tr, function() {
      return Fn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = it.transition, it.transition = null;
      var i = ie;
      ie = 1;
      var s = ne;
      ne |= 4, yi.current = null, Rf(e, n), va(n, e), Jc(Po), Ar = !!Ro, Po = Ro = null, e.current = n, Pf(n), nc(), ne = s, ie = i, it.transition = o;
    } else e.current = n;
    if (_l && (_l = !1, Qt = e, El = l), o = e.pendingLanes, o === 0 && (Vt = null), oc(n.stateNode), Xe(e, ke()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (xl) throw xl = !1, e = Si, Si = null, e;
    return (El & 1) !== 0 && e.tag !== 0 && Fn(), o = e.pendingLanes, (o & 1) !== 0 ? e === Ci ? _r++ : (_r = 0, Ci = e) : _r = 0, Ht(), null;
  }
  function Fn() {
    if (Qt !== null) {
      var e = hu(El), t = it.transition, n = ie;
      try {
        if (it.transition = null, ie = 16 > e ? 16 : e, Qt === null) var r = !1;
        else {
          if (e = Qt, Qt = null, El = 0, (ne & 6) !== 0) throw Error(u(331));
          var l = ne;
          for (ne |= 4, T = e.current; T !== null; ) {
            var o = T, i = o.child;
            if ((T.flags & 16) !== 0) {
              var s = o.deletions;
              if (s !== null) {
                for (var a = 0; a < s.length; a++) {
                  var m = s[a];
                  for (T = m; T !== null; ) {
                    var C = T;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Sr(8, C, o);
                    }
                    var _ = C.child;
                    if (_ !== null) _.return = C, T = _;
                    else for (; T !== null; ) {
                      C = T;
                      var S = C.sibling, N = C.return;
                      if (fa(C), C === m) {
                        T = null;
                        break;
                      }
                      if (S !== null) {
                        S.return = N, T = S;
                        break;
                      }
                      T = N;
                    }
                  }
                }
                var O = o.alternate;
                if (O !== null) {
                  var F = O.child;
                  if (F !== null) {
                    O.child = null;
                    do {
                      var Se = F.sibling;
                      F.sibling = null, F = Se;
                    } while (F !== null);
                  }
                }
                T = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) i.return = o, T = i;
            else e: for (; T !== null; ) {
              if (o = T, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Sr(9, o, o.return);
              }
              var p = o.sibling;
              if (p !== null) {
                p.return = o.return, T = p;
                break e;
              }
              T = o.return;
            }
          }
          var c = e.current;
          for (T = c; T !== null; ) {
            i = T;
            var h = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && h !== null) h.return = i, T = h;
            else e: for (i = c; T !== null; ) {
              if (s = T, (s.flags & 2048) !== 0) try {
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, s);
                }
              } catch (A) {
                we(s, s.return, A);
              }
              if (s === i) {
                T = null;
                break e;
              }
              var R = s.sibling;
              if (R !== null) {
                R.return = s.return, T = R;
                break e;
              }
              T = s.return;
            }
          }
          if (ne = l, Ht(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
            gt.onPostCommitFiberRoot(Mr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ie = n, it.transition = t;
      }
    }
    return !1;
  }
  function Pa(e, t, n) {
    t = Tn(n, t), t = Qs(e, t, 1), e = $t(e, t, 1), t = Be(), e !== null && (Xn(e, 1, t), Xe(e, t));
  }
  function we(e, t, n) {
    if (e.tag === 3) Pa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Pa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = Tn(n, e), e = Ys(t, e, 1), t = $t(t, e, 1), e = Be(), t !== null && (Xn(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Oe & n) === n && (Ee === 4 || Ee === 3 && (Oe & 130023424) === Oe && 500 > ke() - ki ? an(e, 0) : wi |= n), Xe(e, t);
  }
  function za(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ir, Ir <<= 1, (Ir & 130023424) === 0 && (Ir = 4194304)));
    var n = Be();
    e = Pt(e, t), e !== null && (Xn(e, t, n), Xe(e, n));
  }
  function Of(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), za(e, n);
  }
  function If(e, t) {
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
        throw Error(u(314));
    }
    r !== null && r.delete(t), za(e, n);
  }
  var Na;
  Na = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) Ye = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ye = !1, Cf(e, t, n);
      Ye = (e.flags & 131072) !== 0;
    }
    else Ye = !1, de && (t.flags & 1048576) !== 0 && ss(t, rl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        yl(e, t), e = t.pendingProps;
        var l = _n(t, Ie.current);
        Dn(t, n), l = Jo(null, t, r, e, l, n);
        var o = qo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qe(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vo(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, li(t, r, e, n), t = si(null, t, r, !0, o, n)) : (t.tag = 0, de && o && Oo(t), He(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (yl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = jf(r), e = dt(r, e), l) {
            case 0:
              t = ui(null, t, r, e, n);
              break e;
            case 1:
              t = ta(null, t, r, e, n);
              break e;
            case 11:
              t = Zs(null, t, r, e, n);
              break e;
            case 14:
              t = Js(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), ui(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), ta(e, t, r, l, n);
      case 3:
        e: {
          if (na(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, gs(e, t), al(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Tn(Error(u(423)), t), t = ra(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Tn(Error(u(424)), t), t = ra(e, t, r, n, l);
            break e;
          } else for (be = jt(t.stateNode.containerInfo.firstChild), qe = t, de = !0, ft = null, n = ms(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Pn(), r === l) {
              t = Nt(e, t, n);
              break e;
            }
            He(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ks(t), e === null && jo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zo(r, l) ? i = null : o !== null && zo(r, o) && (t.flags |= 32), ea(e, t), He(e, t, i, n), t.child;
      case 6:
        return e === null && jo(t), null;
      case 13:
        return la(e, t, n);
      case 4:
        return Qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : He(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Zs(e, t, r, l, n);
      case 7:
        return He(e, t, t.pendingProps, n), t.child;
      case 8:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, se(il, r._currentValue), r._currentValue = i, o !== null) if (ct(o.value, i)) {
            if (o.children === l.children && !Ve.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var s = o.dependencies;
            if (s !== null) {
              i = o.child;
              for (var a = s.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (o.tag === 1) {
                    a = zt(-1, n & -n), a.tag = 2;
                    var m = o.updateQueue;
                    if (m !== null) {
                      m = m.shared;
                      var C = m.pending;
                      C === null ? a.next = a : (a.next = C.next, C.next = a), m.pending = a;
                    }
                  }
                  o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), $o(
                    o.return,
                    n,
                    t
                  ), s.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(u(341));
              i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), $o(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          He(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Dn(t, n), l = lt(l), r = r(l), t.flags |= 1, He(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), Js(e, t, r, l, n);
      case 15:
        return qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), yl(e, t), t.tag = 1, Qe(r) ? (e = !0, el(t)) : e = !1, Dn(t, n), Ws(t, r, l), li(t, r, l, n), si(null, t, r, !0, e, n);
      case 19:
        return ia(e, t, n);
      case 22:
        return bs(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Da(e, t) {
    return au(e, t);
  }
  function Ff(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(e, t, n, r) {
    return new Ff(e, t, n, r);
  }
  function zi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jf(e) {
    if (typeof e == "function") return zi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === tt) return 11;
      if (e === b) return 14;
    }
    return 2;
  }
  function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Nl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") zi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Pe:
        return fn(n.children, l, o, t);
      case $e:
        i = 8, l |= 8;
        break;
      case We:
        return e = ut(12, n, t, l | 2), e.elementType = We, e.lanes = o, e;
      case Ae:
        return e = ut(13, n, t, l), e.elementType = Ae, e.lanes = o, e;
      case G:
        return e = ut(19, n, t, l), e.elementType = G, e.lanes = o, e;
      case Q:
        return Dl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case st:
            i = 10;
            break e;
          case Ct:
            i = 9;
            break e;
          case tt:
            i = 11;
            break e;
          case b:
            i = 14;
            break e;
          case oe:
            i = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = ut(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function fn(e, t, n, r) {
    return e = ut(7, e, r, t), e.lanes = n, e;
  }
  function Dl(e, t, n, r) {
    return e = ut(22, e, r, t), e.elementType = Q, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ni(e, t, n) {
    return e = ut(6, e, null, t), e.lanes = n, e;
  }
  function Di(e, t, n) {
    return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Uf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = no(0), this.expirationTimes = no(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = no(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Li(e, t, n, r, l, o, i, s, a) {
    return e = new Uf(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ut(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vo(o), e;
  }
  function Af(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function La(e) {
    if (!e) return At;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Qe(n)) return os(e, n, t);
    }
    return t;
  }
  function Ta(e, t, n, r, l, o, i, s, a) {
    return e = Li(n, r, !0, e, l, o, i, s, a), e.context = La(null), n = e.current, r = Be(), l = Yt(n), o = zt(r, l), o.callback = t ?? null, $t(n, o, l), e.current.lanes = l, Xn(e, l, r), Xe(e, r), e;
  }
  function Ll(e, t, n, r) {
    var l = t.current, o = Be(), i = Yt(l);
    return n = La(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(l, t, i), e !== null && (mt(e, l, i, o), sl(e, l, i)), i;
  }
  function Tl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ma(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ti(e, t) {
    Ma(e, t), (e = e.alternate) && Ma(e, t);
  }
  function Hf() {
    return null;
  }
  var Oa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Mi(e) {
    this._internalRoot = e;
  }
  Ml.prototype.render = Mi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    Ll(e, t, null, null);
  }, Ml.prototype.unmount = Mi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      sn(function() {
        Ll(null, e, null, null);
      }), t[xt] = null;
    }
  };
  function Ml(e) {
    this._internalRoot = e;
  }
  Ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++) ;
      Ot.splice(n, 0, e), n === 0 && ku(e);
    }
  };
  function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ol(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ia() {
  }
  function Bf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var m = Tl(i);
          o.call(m);
        };
      }
      var i = Ta(t, r, e, 0, null, !1, !1, "", Ia);
      return e._reactRootContainer = i, e[xt] = i.current, sr(e.nodeType === 8 ? e.parentNode : e), sn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var m = Tl(a);
        s.call(m);
      };
    }
    var a = Li(e, 0, !1, null, null, !1, !1, "", Ia);
    return e._reactRootContainer = a, e[xt] = a.current, sr(e.nodeType === 8 ? e.parentNode : e), sn(function() {
      Ll(t, a, n, r);
    }), a;
  }
  function Il(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var s = l;
        l = function() {
          var a = Tl(i);
          s.call(a);
        };
      }
      Ll(t, i, e, l);
    } else i = Bf(n, t, e, l, r);
    return Tl(i);
  }
  mu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Kn(t.pendingLanes);
          n !== 0 && (ro(t, n | 1), Xe(t, ke()), (ne & 6) === 0 && (In = ke() + 500, Ht()));
        }
        break;
      case 13:
        sn(function() {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Be();
            mt(r, e, 1, l);
          }
        }), Ti(e, 1);
    }
  }, lo = function(e) {
    if (e.tag === 13) {
      var t = Pt(e, 134217728);
      if (t !== null) {
        var n = Be();
        mt(t, e, 134217728, n);
      }
      Ti(e, 134217728);
    }
  }, vu = function(e) {
    if (e.tag === 13) {
      var t = Yt(e), n = Pt(e, t);
      if (n !== null) {
        var r = Be();
        mt(n, e, t, r);
      }
      Ti(e, t);
    }
  }, gu = function() {
    return ie;
  }, yu = function(e, t) {
    var n = ie;
    try {
      return ie = e, t();
    } finally {
      ie = n;
    }
  }, Zl = function(e, t, n) {
    switch (t) {
      case "input":
        if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = qr(r);
              if (!l) throw Error(u(90));
              $i(r), $l(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ki(e, n);
        break;
      case "select":
        t = n.value, t != null && dn(e, !!n.multiple, t, !1);
    }
  }, nu = Ei, ru = sn;
  var $f = { usingClientEntryPoint: !1, Events: [fr, Cn, qr, eu, tu, Ei] }, Er = { findFiberByHostInstance: bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wf = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = uu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Er.findFiberByHostInstance || Hf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fl.isDisabled && Fl.supportsFiber) try {
      Mr = Fl.inject(Wf), gt = Fl;
    } catch {
    }
  }
  return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f, Ge.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oi(t)) throw Error(u(200));
    return Af(e, t, null, n);
  }, Ge.createRoot = function(e, t) {
    if (!Oi(e)) throw Error(u(299));
    var n = !1, r = "", l = Oa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Li(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, sr(e.nodeType === 8 ? e.parentNode : e), new Mi(t);
  }, Ge.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = uu(t), e = e === null ? null : e.stateNode, e;
  }, Ge.flushSync = function(e) {
    return sn(e);
  }, Ge.hydrate = function(e, t, n) {
    if (!Ol(t)) throw Error(u(200));
    return Il(null, e, t, !0, n);
  }, Ge.hydrateRoot = function(e, t, n) {
    if (!Oi(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Oa;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ta(t, null, e, 1, n ?? null, l, !1, o, i), e[xt] = t.current, sr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ml(t);
  }, Ge.render = function(e, t, n) {
    if (!Ol(t)) throw Error(u(200));
    return Il(null, e, t, !1, n);
  }, Ge.unmountComponentAtNode = function(e) {
    if (!Ol(e)) throw Error(u(40));
    return e._reactRootContainer ? (sn(function() {
      Il(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xt] = null;
      });
    }), !0) : !1;
  }, Ge.unstable_batchedUpdates = Ei, Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ol(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return Il(e, t, n, !1, r);
  }, Ge.version = "18.3.1-next-f1338f8080-20240426", Ge;
}
var Wa;
function qf() {
  if (Wa) return ji.exports;
  Wa = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (f) {
        console.error(f);
      }
  }
  return g(), ji.exports = Jf(), ji.exports;
}
var Va;
function bf() {
  if (Va) return jl;
  Va = 1;
  var g = qf();
  return jl.createRoot = g.createRoot, jl.hydrateRoot = g.hydrateRoot, jl;
}
var ed = bf(), td = Object.defineProperty, nd = (g, f, u) => f in g ? td(g, f, { enumerable: !0, configurable: !0, writable: !0, value: u }) : g[f] = u, he = (g, f, u) => nd(g, typeof f != "symbol" ? f + "" : f, u);
const Hl = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: "px"
}, jn = (g, f, u) => Math.min(Math.max(g, f), u), rd = (...g) => g.filter((f) => f && typeof f == "string").join(" "), Qa = (g, f) => g === f || g.width === f.width && g.height === f.height && g.x === f.x && g.y === f.y && g.unit === f.unit;
function Un(g, f, u) {
  return g.unit === "%" ? { ...Hl, ...g, unit: "%" } : {
    unit: "%",
    x: g.x ? g.x / f * 100 : 0,
    y: g.y ? g.y / u * 100 : 0,
    width: g.width ? g.width / f * 100 : 0,
    height: g.height ? g.height / u * 100 : 0
  };
}
function Zt(g, f, u) {
  return g.unit ? g.unit === "px" ? { ...Hl, ...g, unit: "px" } : {
    unit: "px",
    x: g.x ? g.x * f / 100 : 0,
    y: g.y ? g.y * u / 100 : 0,
    width: g.width ? g.width * f / 100 : 0,
    height: g.height ? g.height * u / 100 : 0
  } : { ...Hl, ...g, unit: "px" };
}
function Ya(g, f, u, P, v, y = 0, z = 0, j = P, x = v) {
  const w = { ...g };
  let M = Math.min(y, P), I = Math.min(z, v), U = Math.min(j, P), L = Math.min(x, v);
  f && (f > 1 ? (M = z ? z * f : M, I = M / f, U = j * f) : (I = y ? y / f : I, M = I * f, L = x / f)), w.y < 0 && (w.height = Math.max(w.height + w.y, I), w.y = 0), w.x < 0 && (w.width = Math.max(w.width + w.x, M), w.x = 0);
  const q = P - (w.x + w.width);
  q < 0 && (w.x = Math.min(w.x, P - M), w.width += q);
  const K = v - (w.y + w.height);
  if (K < 0 && (w.y = Math.min(w.y, v - I), w.height += K), w.width < M && ((u === "sw" || u == "nw") && (w.x -= M - w.width), w.width = M), w.height < I && ((u === "nw" || u == "ne") && (w.y -= I - w.height), w.height = I), w.width > U && ((u === "sw" || u == "nw") && (w.x -= U - w.width), w.width = U), w.height > L && ((u === "nw" || u == "ne") && (w.y -= L - w.height), w.height = L), f) {
    const X = w.width / w.height;
    if (X < f) {
      const ye = Math.max(w.width / f, I);
      (u === "nw" || u == "ne") && (w.y -= ye - w.height), w.height = ye;
    } else if (X > f) {
      const ye = Math.max(w.height * f, M);
      (u === "sw" || u == "nw") && (w.x -= ye - w.width), w.width = ye;
    }
  }
  return w;
}
function ld(g, f, u, P) {
  const v = { ...g };
  return f === "ArrowLeft" ? P === "nw" ? (v.x -= u, v.y -= u, v.width += u, v.height += u) : P === "w" ? (v.x -= u, v.width += u) : P === "sw" ? (v.x -= u, v.width += u, v.height += u) : P === "ne" ? (v.y += u, v.width -= u, v.height -= u) : P === "e" ? v.width -= u : P === "se" && (v.width -= u, v.height -= u) : f === "ArrowRight" && (P === "nw" ? (v.x += u, v.y += u, v.width -= u, v.height -= u) : P === "w" ? (v.x += u, v.width -= u) : P === "sw" ? (v.x += u, v.width -= u, v.height -= u) : P === "ne" ? (v.y -= u, v.width += u, v.height += u) : P === "e" ? v.width += u : P === "se" && (v.width += u, v.height += u)), f === "ArrowUp" ? P === "nw" ? (v.x -= u, v.y -= u, v.width += u, v.height += u) : P === "n" ? (v.y -= u, v.height += u) : P === "ne" ? (v.y -= u, v.width += u, v.height += u) : P === "sw" ? (v.x += u, v.width -= u, v.height -= u) : P === "s" ? v.height -= u : P === "se" && (v.width -= u, v.height -= u) : f === "ArrowDown" && (P === "nw" ? (v.x += u, v.y += u, v.width -= u, v.height -= u) : P === "n" ? (v.y += u, v.height -= u) : P === "ne" ? (v.y += u, v.width -= u, v.height -= u) : P === "sw" ? (v.x -= u, v.width += u, v.height += u) : P === "s" ? v.height += u : P === "se" && (v.width += u, v.height += u)), v;
}
const An = { capture: !0, passive: !1 };
let od = 0;
const Jt = class vt extends pe.PureComponent {
  constructor() {
    super(...arguments), he(this, "docMoveBound", !1), he(this, "mouseDownOnCrop", !1), he(this, "dragStarted", !1), he(this, "evData", {
      startClientX: 0,
      startClientY: 0,
      startCropX: 0,
      startCropY: 0,
      clientX: 0,
      clientY: 0,
      isResize: !0
    }), he(this, "componentRef", pe.createRef()), he(this, "mediaRef", pe.createRef()), he(this, "resizeObserver"), he(this, "initChangeCalled", !1), he(this, "instanceId", `rc-${od++}`), he(this, "state", {
      cropIsActive: !1,
      newCropIsBeingDrawn: !1
    }), he(this, "onCropPointerDown", (f) => {
      const { crop: u, disabled: P } = this.props, v = this.getBox();
      if (!u)
        return;
      const y = Zt(u, v.width, v.height);
      if (P)
        return;
      f.cancelable && f.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const z = f.target.dataset.ord, j = !!z;
      let x = f.clientX, w = f.clientY, M = y.x, I = y.y;
      if (z) {
        const U = f.clientX - v.x, L = f.clientY - v.y;
        let q = 0, K = 0;
        z === "ne" || z == "e" ? (q = U - (y.x + y.width), K = L - y.y, M = y.x, I = y.y + y.height) : z === "se" || z === "s" ? (q = U - (y.x + y.width), K = L - (y.y + y.height), M = y.x, I = y.y) : z === "sw" || z == "w" ? (q = U - y.x, K = L - (y.y + y.height), M = y.x + y.width, I = y.y) : (z === "nw" || z == "n") && (q = U - y.x, K = L - y.y, M = y.x + y.width, I = y.y + y.height), x = M + v.x + q, w = I + v.y + K;
      }
      this.evData = {
        startClientX: x,
        startClientY: w,
        startCropX: M,
        startCropY: I,
        clientX: f.clientX,
        clientY: f.clientY,
        isResize: j,
        ord: z
      }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
    }), he(this, "onComponentPointerDown", (f) => {
      const { crop: u, disabled: P, locked: v, keepSelection: y, onChange: z } = this.props, j = this.getBox();
      if (P || v || y && u)
        return;
      f.cancelable && f.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const x = f.clientX - j.x, w = f.clientY - j.y, M = {
        unit: "px",
        x,
        y: w,
        width: 0,
        height: 0
      };
      this.evData = {
        startClientX: f.clientX,
        startClientY: f.clientY,
        startCropX: x,
        startCropY: w,
        clientX: f.clientX,
        clientY: f.clientY,
        isResize: !0
      }, this.mouseDownOnCrop = !0, z(Zt(M, j.width, j.height), Un(M, j.width, j.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
    }), he(this, "onDocPointerMove", (f) => {
      const { crop: u, disabled: P, onChange: v, onDragStart: y } = this.props, z = this.getBox();
      if (P || !u || !this.mouseDownOnCrop)
        return;
      f.cancelable && f.preventDefault(), this.dragStarted || (this.dragStarted = !0, y && y(f));
      const { evData: j } = this;
      j.clientX = f.clientX, j.clientY = f.clientY;
      let x;
      j.isResize ? x = this.resizeCrop() : x = this.dragCrop(), Qa(u, x) || v(
        Zt(x, z.width, z.height),
        Un(x, z.width, z.height)
      );
    }), he(this, "onComponentKeyDown", (f) => {
      const { crop: u, disabled: P, onChange: v, onComplete: y } = this.props;
      if (P)
        return;
      const z = f.key;
      let j = !1;
      if (!u)
        return;
      const x = this.getBox(), w = this.makePixelCrop(x), M = (navigator.platform.match("Mac") ? f.metaKey : f.ctrlKey) ? vt.nudgeStepLarge : f.shiftKey ? vt.nudgeStepMedium : vt.nudgeStep;
      if (z === "ArrowLeft" ? (w.x -= M, j = !0) : z === "ArrowRight" ? (w.x += M, j = !0) : z === "ArrowUp" ? (w.y -= M, j = !0) : z === "ArrowDown" && (w.y += M, j = !0), j) {
        f.cancelable && f.preventDefault(), w.x = jn(w.x, 0, x.width - w.width), w.y = jn(w.y, 0, x.height - w.height);
        const I = Zt(w, x.width, x.height), U = Un(w, x.width, x.height);
        v(I, U), y && y(I, U);
      }
    }), he(this, "onHandlerKeyDown", (f, u) => {
      const {
        aspect: P = 0,
        crop: v,
        disabled: y,
        minWidth: z = 0,
        minHeight: j = 0,
        maxWidth: x,
        maxHeight: w,
        onChange: M,
        onComplete: I
      } = this.props, U = this.getBox();
      if (y || !v)
        return;
      if (f.key === "ArrowUp" || f.key === "ArrowDown" || f.key === "ArrowLeft" || f.key === "ArrowRight")
        f.stopPropagation(), f.preventDefault();
      else
        return;
      const L = (navigator.platform.match("Mac") ? f.metaKey : f.ctrlKey) ? vt.nudgeStepLarge : f.shiftKey ? vt.nudgeStepMedium : vt.nudgeStep, q = Zt(v, U.width, U.height), K = ld(q, f.key, L, u), X = Ya(
        K,
        P,
        u,
        U.width,
        U.height,
        z,
        j,
        x,
        w
      );
      if (!Qa(v, X)) {
        const ye = Un(X, U.width, U.height);
        M(X, ye), I && I(X, ye);
      }
    }), he(this, "onDocPointerDone", (f) => {
      const { crop: u, disabled: P, onComplete: v, onDragEnd: y } = this.props, z = this.getBox();
      this.unbindDocMove(), !(P || !u) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, y && y(f), v && v(Zt(u, z.width, z.height), Un(u, z.width, z.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
    }), he(this, "onDragFocus", () => {
      var f;
      (f = this.componentRef.current) == null || f.scrollTo(0, 0);
    });
  }
  get document() {
    return document;
  }
  // We unfortunately get the bounding box every time as x+y changes
  // due to scrolling.
  getBox() {
    const f = this.mediaRef.current;
    if (!f)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: u, y: P, width: v, height: y } = f.getBoundingClientRect();
    return { x: u, y: P, width: v, height: y };
  }
  componentDidUpdate(f) {
    const { crop: u, onComplete: P } = this.props;
    if (P && !f.crop && u) {
      const { width: v, height: y } = this.getBox();
      v && y && P(Zt(u, v, y), Un(u, v, y));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
  }
  bindDocMove() {
    this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, An), this.document.addEventListener("pointerup", this.onDocPointerDone, An), this.document.addEventListener("pointercancel", this.onDocPointerDone, An), this.docMoveBound = !0);
  }
  unbindDocMove() {
    this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, An), this.document.removeEventListener("pointerup", this.onDocPointerDone, An), this.document.removeEventListener("pointercancel", this.onDocPointerDone, An), this.docMoveBound = !1);
  }
  getCropStyle() {
    const { crop: f } = this.props;
    if (f)
      return {
        top: `${f.y}${f.unit}`,
        left: `${f.x}${f.unit}`,
        width: `${f.width}${f.unit}`,
        height: `${f.height}${f.unit}`
      };
  }
  dragCrop() {
    const { evData: f } = this, u = this.getBox(), P = this.makePixelCrop(u), v = f.clientX - f.startClientX, y = f.clientY - f.startClientY;
    return P.x = jn(f.startCropX + v, 0, u.width - P.width), P.y = jn(f.startCropY + y, 0, u.height - P.height), P;
  }
  getPointRegion(f, u, P, v) {
    const { evData: y } = this, z = y.clientX - f.x, j = y.clientY - f.y;
    let x;
    v && u ? x = u === "nw" || u === "n" || u === "ne" : x = j < y.startCropY;
    let w;
    return P && u ? w = u === "nw" || u === "w" || u === "sw" : w = z < y.startCropX, w ? x ? "nw" : "sw" : x ? "ne" : "se";
  }
  resolveMinDimensions(f, u, P = 0, v = 0) {
    const y = Math.min(P, f.width), z = Math.min(v, f.height);
    return !u || !y && !z ? [y, z] : u > 1 ? y ? [y, y / u] : [z * u, z] : z ? [z * u, z] : [y, y / u];
  }
  resizeCrop() {
    const { evData: f } = this, { aspect: u = 0, maxWidth: P, maxHeight: v } = this.props, y = this.getBox(), [z, j] = this.resolveMinDimensions(y, u, this.props.minWidth, this.props.minHeight);
    let x = this.makePixelCrop(y);
    const w = this.getPointRegion(y, f.ord, z, j), M = f.ord || w;
    let I = f.clientX - f.startClientX, U = f.clientY - f.startClientY;
    (z && M === "nw" || M === "w" || M === "sw") && (I = Math.min(I, -z)), (j && M === "nw" || M === "n" || M === "ne") && (U = Math.min(U, -j));
    const L = {
      unit: "px",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    w === "ne" ? (L.x = f.startCropX, L.width = I, u ? (L.height = L.width / u, L.y = f.startCropY - L.height) : (L.height = Math.abs(U), L.y = f.startCropY - L.height)) : w === "se" ? (L.x = f.startCropX, L.y = f.startCropY, L.width = I, u ? L.height = L.width / u : L.height = U) : w === "sw" ? (L.x = f.startCropX + I, L.y = f.startCropY, L.width = Math.abs(I), u ? L.height = L.width / u : L.height = U) : w === "nw" && (L.x = f.startCropX + I, L.width = Math.abs(I), u ? (L.height = L.width / u, L.y = f.startCropY - L.height) : (L.height = Math.abs(U), L.y = f.startCropY + U));
    const q = Ya(
      L,
      u,
      w,
      y.width,
      y.height,
      z,
      j,
      P,
      v
    );
    return u || vt.xyOrds.indexOf(M) > -1 ? x = q : vt.xOrds.indexOf(M) > -1 ? (x.x = q.x, x.width = q.width) : vt.yOrds.indexOf(M) > -1 && (x.y = q.y, x.height = q.height), x.x = jn(x.x, 0, y.width - x.width), x.y = jn(x.y, 0, y.height - x.height), x;
  }
  renderCropSelection() {
    const {
      ariaLabels: f = vt.defaultProps.ariaLabels,
      disabled: u,
      locked: P,
      renderSelectionAddon: v,
      ruleOfThirds: y,
      crop: z
    } = this.props, j = this.getCropStyle();
    if (z)
      return /* @__PURE__ */ ue.createElement(
        "div",
        {
          style: j,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": f.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          role: "group"
        },
        !u && !P && /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": f.nwDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "nw"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": f.nDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "n"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": f.neDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "ne"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": f.eDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "e"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": f.seDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "se"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": f.sDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "s"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": f.swDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "sw"),
            role: "button"
          }
        ), /* @__PURE__ */ ue.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": f.wDragHandle,
            onKeyDown: (x) => this.onHandlerKeyDown(x, "w"),
            role: "button"
          }
        )),
        v && /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (x) => x.stopPropagation() }, v(this.state)),
        y && /* @__PURE__ */ ue.createElement(ue.Fragment, null, /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ ue.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
      );
  }
  makePixelCrop(f) {
    const u = { ...Hl, ...this.props.crop || {} };
    return Zt(u, f.width, f.height);
  }
  render() {
    const { aspect: f, children: u, circularCrop: P, className: v, crop: y, disabled: z, locked: j, style: x, ruleOfThirds: w } = this.props, { cropIsActive: M, newCropIsBeingDrawn: I } = this.state, U = y ? this.renderCropSelection() : null, L = rd(
      "ReactCrop",
      v,
      M && "ReactCrop--active",
      z && "ReactCrop--disabled",
      j && "ReactCrop--locked",
      I && "ReactCrop--new-crop",
      y && f && "ReactCrop--fixed-aspect",
      y && P && "ReactCrop--circular-crop",
      y && w && "ReactCrop--rule-of-thirds",
      !this.dragStarted && y && !y.width && !y.height && "ReactCrop--invisible-crop",
      P && "ReactCrop--no-animate"
    );
    return /* @__PURE__ */ ue.createElement("div", { ref: this.componentRef, className: L, style: x }, /* @__PURE__ */ ue.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, u), y ? /* @__PURE__ */ ue.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ ue.createElement("defs", null, /* @__PURE__ */ ue.createElement("mask", { id: `hole-${this.instanceId}` }, /* @__PURE__ */ ue.createElement("rect", { width: "100%", height: "100%", fill: "white" }), P ? /* @__PURE__ */ ue.createElement(
      "ellipse",
      {
        cx: `${y.x + y.width / 2}${y.unit}`,
        cy: `${y.y + y.height / 2}${y.unit}`,
        rx: `${y.width / 2}${y.unit}`,
        ry: `${y.height / 2}${y.unit}`,
        fill: "black"
      }
    ) : /* @__PURE__ */ ue.createElement(
      "rect",
      {
        x: `${y.x}${y.unit}`,
        y: `${y.y}${y.unit}`,
        width: `${y.width}${y.unit}`,
        height: `${y.height}${y.unit}`,
        fill: "black"
      }
    ))), /* @__PURE__ */ ue.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: `url(#hole-${this.instanceId})` })) : void 0, U);
  }
};
he(Jt, "xOrds", ["e", "w"]), he(Jt, "yOrds", ["n", "s"]), he(Jt, "xyOrds", ["nw", "ne", "se", "sw"]), he(Jt, "nudgeStep", 1), he(Jt, "nudgeStepMedium", 10), he(Jt, "nudgeStepLarge", 100), he(Jt, "defaultProps", {
  ariaLabels: {
    cropArea: "Use the arrow keys to move the crop selection area",
    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
  }
});
let id = Jt;
const ud = `@keyframes marching-ants{0%{background-position:0 0,0 100%,0 0,100% 0}to{background-position:20px 0,-20px 100%,0 -20px,100% 20px}}:root{--rc-drag-handle-size: 12px;--rc-drag-handle-mobile-size: 24px;--rc-drag-handle-bg-colour: rgba(0, 0, 0, .2);--rc-drag-bar-size: 6px;--rc-border-color: rgba(255, 255, 255, .7);--rc-focus-color: #0088ff}.ReactCrop{position:relative;display:inline-block;cursor:crosshair;max-width:100%}.ReactCrop *,.ReactCrop *:before,.ReactCrop *:after{box-sizing:border-box}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__child-wrapper{overflow:hidden;max-height:inherit}.ReactCrop__child-wrapper>img,.ReactCrop__child-wrapper>video{display:block;max-width:100%;max-height:inherit}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>img,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>video{touch-action:none}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__crop-selection{touch-action:none}.ReactCrop__crop-mask{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;width:calc(100% + .5px);height:calc(100% + .5px)}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translateZ(0);cursor:move}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%}.ReactCrop--circular-crop .ReactCrop__crop-selection:after{pointer-events:none;content:"";position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;border:1px solid var(--rc-border-color);opacity:.3}.ReactCrop--no-animate .ReactCrop__crop-selection{outline:1px dashed white}.ReactCrop__crop-selection:not(.ReactCrop--no-animate .ReactCrop__crop-selection){animation:marching-ants 1s;background-image:linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to right,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%),linear-gradient(to bottom,#fff 50%,#444 50%);background-size:10px 1px,10px 1px,1px 10px,1px 10px;background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;color:#fff;animation-play-state:running;animation-timing-function:linear;animation-iteration-count:infinite}.ReactCrop__crop-selection:focus{outline:2px solid var(--rc-focus-color);outline-offset:-1px}.ReactCrop--invisible-crop .ReactCrop__crop-mask,.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after,.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{content:"";display:block;position:absolute;background-color:#fff6}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt:before{left:33.3333333333%}.ReactCrop__rule-of-thirds-vt:after{left:66.6666666667%}.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz:before{top:33.3333333333%}.ReactCrop__rule-of-thirds-hz:after{top:66.6666666667%}.ReactCrop__drag-handle{position:absolute;width:var(--rc-drag-handle-size);height:var(--rc-drag-handle-size);background-color:var(--rc-drag-handle-bg-colour);border:1px solid var(--rc-border-color)}.ReactCrop__drag-handle:focus{background:var(--rc-focus-color)}.ReactCrop .ord-nw{top:0;left:0;transform:translate(-50%,-50%);cursor:nw-resize}.ReactCrop .ord-n{top:0;left:50%;transform:translate(-50%,-50%);cursor:n-resize}.ReactCrop .ord-ne{top:0;right:0;transform:translate(50%,-50%);cursor:ne-resize}.ReactCrop .ord-e{top:50%;right:0;transform:translate(50%,-50%);cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;transform:translate(50%,50%);cursor:se-resize}.ReactCrop .ord-s{bottom:0;left:50%;transform:translate(-50%,50%);cursor:s-resize}.ReactCrop .ord-sw{bottom:0;left:0;transform:translate(-50%,50%);cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;transform:translate(-50%,-50%);cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(-50%)}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(50%)}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:var(--rc-drag-bar-size);transform:translateY(50%)}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:var(--rc-drag-bar-size);height:100%;transform:translate(-50%)}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (pointer: coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:var(--rc-drag-handle-mobile-size);height:var(--rc-drag-handle-mobile-size)}}
`, sd = `
.ReactCrop__crop-selection {
  border: 2px solid var(--st-primary-color, #ff4b4b) !important;
}
.ReactCrop__drag-handle {
  width: 12px !important;
  height: 12px !important;
  background-color: var(--st-primary-color, #ff4b4b) !important;
  border: 2px solid #fff !important;
}
/* Make edge handles easier to grab */
.ReactCrop .ord-n,
.ReactCrop .ord-s {
  width: 24px !important;
  height: 10px !important;
  border-radius: 4px !important;
}
.ReactCrop .ord-e,
.ReactCrop .ord-w {
  width: 10px !important;
  height: 24px !important;
  border-radius: 4px !important;
}
`, ad = ud + `
` + sd;
function cd(g) {
  if (!g || g.startsWith("http://") || g.startsWith("https://") || g.startsWith("data:"))
    return g;
  if (g.startsWith("/media/") || g.startsWith("media/")) {
    const f = g.startsWith("/") ? g : "/" + g;
    let u = "";
    if (window.__streamlit?.DOWNLOAD_ASSETS_BASE_URL ? u = window.__streamlit.DOWNLOAD_ASSETS_BASE_URL : window.location && (u = window.location.origin + window.location.pathname), u)
      try {
        const P = new URL(u);
        let v = P.pathname;
        if (v.endsWith("/"))
          v = v.slice(0, -1);
        else {
          const y = v.lastIndexOf("/");
          v = y > 0 ? v.substring(0, y) : "";
        }
        return P.origin + (v + f).replace(/\/+/g, "/");
      } catch {
        return g;
      }
  }
  return g;
}
function Ka(g) {
  return {
    unit: "%",
    x: g.x,
    y: g.y,
    width: g.width,
    height: g.height
  };
}
function Ul(g) {
  const f = typeof g == "number" && Number.isFinite(g) ? g : 0;
  return Math.min(100, Math.max(0, f));
}
function Hi(g) {
  return {
    x: Ul(g.x),
    y: Ul(g.y),
    width: Ul(g.width),
    height: Ul(g.height)
  };
}
const fd = ({
  imageUrl: g,
  aspect: f,
  minWidth: u,
  minHeight: P,
  initialCrop: v,
  circular: y,
  ruleOfThirds: z,
  height: j,
  width: x,
  trackCrop: w,
  setStateValue: M
}) => {
  const [I, U] = pe.useState(
    () => v ? Ka(v) : void 0
  ), [L, q] = pe.useState(
    typeof j == "number" ? j : null
  ), K = pe.useRef(null), X = pe.useRef(null), ye = pe.useRef(null), me = pe.useRef(null), Re = pe.useRef(v), xe = pe.useRef(v), [Le, Te] = pe.useState(null), Pe = pe.useRef(!1), $e = 150, We = pe.useMemo(
    () => cd(g),
    [g]
  ), st = (G, b) => G === b ? !0 : !G || !b ? !1 : G.x === b.x && G.y === b.y && G.width === b.width && G.height === b.height;
  pe.useEffect(() => {
    const G = new Image();
    return G.onload = () => {
      G.width > 0 && G.height > 0 && Te(G.width / G.height);
    }, G.src = We, () => {
      G.onload = null;
    };
  }, [We]), pe.useEffect(() => {
    const G = !st(v, xe.current);
    if (xe.current = v, !G && Pe.current && Le !== null)
      return;
    if (!v) {
      U(void 0), Re.current = null, Pe.current = !0;
      return;
    }
    if (f && Le === null)
      return;
    let b = Ka(v);
    if (f && Le) {
      const Q = b.width ?? 0, E = b.height ?? 0, H = b.x ?? 0, D = b.y ?? 0;
      if (Q > 0 && E > 0) {
        const d = f / Le, k = Q / E;
        if (Math.abs(k - d) >= 0.01) {
          let V = Q, Y = E;
          k > d ? V = E * d : Y = Q / d;
          const ee = H + Q / 2, te = D + E / 2;
          let re = ee - V / 2, J = te - Y / 2;
          re < 0 ? re = 0 : re + V > 100 && (re = 100 - V), J < 0 ? J = 0 : J + Y > 100 && (J = 100 - Y), b = {
            unit: "%",
            x: re,
            y: J,
            width: V,
            height: Y
          };
        }
      }
    }
    U(b);
    const oe = Hi(b);
    Re.current = oe, Pe.current = !0, w && M("crop", oe);
  }, [v, f, Le, w, M]), pe.useEffect(() => () => {
    me.current !== null && clearTimeout(me.current);
  }, []), pe.useEffect(() => {
    !w && me.current !== null && (clearTimeout(me.current), me.current = null);
  }, [w]), pe.useEffect(() => {
    if (typeof j == "number") {
      q(j);
      return;
    }
    let G = !0, b = null;
    const oe = K.current, Q = () => {
      if (!G || !K.current || b === null)
        return;
      const D = K.current.clientWidth;
      q(Math.round(D * b));
    }, E = new Image();
    E.onload = () => {
      !G || E.width === 0 || (b = E.height / E.width, Q());
    }, E.src = We;
    let H = null;
    return oe && (H = new ResizeObserver(() => {
      Q();
    }), H.observe(oe)), () => {
      G = !1, E.onload = null, H && H.disconnect();
    };
  }, [j, We]);
  const Ct = pe.useCallback(
    (G, b) => {
      if (U(b), !w)
        return;
      const oe = Hi(b);
      ye.current = oe, me.current !== null && clearTimeout(me.current), me.current = setTimeout(() => {
        if (me.current = null, ye.current !== null) {
          const Q = ye.current, E = Re.current;
          (!E || Q.x !== E.x || Q.y !== E.y || Q.width !== E.width || Q.height !== E.height) && (Re.current = Q, M("crop", Q));
        }
      }, $e);
    },
    [M, w]
  ), tt = pe.useCallback(
    (G, b) => {
      if (!w)
        return;
      me.current !== null && (clearTimeout(me.current), me.current = null);
      const oe = Hi(b), Q = Re.current;
      oe.width === 0 || oe.height === 0 || Q && oe.x === Q.x && oe.y === Q.y && oe.width === Q.width && oe.height === Q.height || (Re.current = oe, M("crop", oe));
    },
    [M, w]
  ), Ae = pe.useMemo(() => {
    const G = {
      position: "relative",
      overflow: "hidden"
    };
    return x === "stretch" ? G.width = "100%" : typeof x == "number" ? G.width = `${x}px` : G.width = "fit-content", L !== null && (G.height = `${L}px`), G;
  }, [x, L]);
  return /* @__PURE__ */ Hn.jsxs("div", { ref: K, style: Ae, children: [
    /* @__PURE__ */ Hn.jsx("style", { children: ad }),
    /* @__PURE__ */ Hn.jsx(
      id,
      {
        crop: I,
        onChange: Ct,
        onComplete: tt,
        aspect: f ?? void 0,
        minWidth: u,
        minHeight: P,
        circularCrop: y,
        ruleOfThirds: z,
        style: {
          width: "100%",
          height: L !== null ? `${L}px` : "auto"
        },
        children: /* @__PURE__ */ Hn.jsx(
          "img",
          {
            ref: X,
            src: We,
            alt: "Crop source",
            style: {
              display: "block",
              maxWidth: "100%",
              height: L !== null ? `${L}px` : "auto",
              objectFit: "contain"
            }
          }
        )
      }
    )
  ] });
}, Al = /* @__PURE__ */ new WeakMap(), dd = (g) => {
  const { data: f, parentElement: u, setStateValue: P } = g, v = u.querySelector(".react-root");
  if (!v)
    throw new Error("Unexpected: React root element not found");
  let y = Al.get(u);
  y || (y = ed.createRoot(v), Al.set(u, y));
  const {
    image_url: z,
    aspect: j,
    min_width: x,
    min_height: w,
    initial_crop: M,
    circular: I,
    rule_of_thirds: U,
    height: L,
    width: q,
    track_crop: K
  } = f;
  return y.render(
    /* @__PURE__ */ Hn.jsx(pe.StrictMode, { children: /* @__PURE__ */ Hn.jsx(
      fd,
      {
        setStateValue: P,
        imageUrl: z,
        aspect: j,
        minWidth: x,
        minHeight: w,
        initialCrop: M,
        circular: I,
        ruleOfThirds: U,
        height: L,
        width: q,
        trackCrop: K
      }
    ) })
  ), () => {
    const X = Al.get(u);
    X && (X.unmount(), Al.delete(u));
  };
};
export {
  dd as default
};
