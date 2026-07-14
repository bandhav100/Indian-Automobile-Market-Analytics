var No = { exports: {} }, gr = {}, zo = { exports: {} }, I = {};
var za;
function jf() {
  if (za) return I;
  za = 1;
  var x = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.provider"), q = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), B = Symbol.iterator;
  function U(c) {
    return c === null || typeof c != "object" ? null : (c = B && c[B] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var Ce = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, W = {};
  function $(c, v, D) {
    this.props = c, this.context = v, this.refs = W, this.updater = D || Ce;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, $.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function tt() {
  }
  tt.prototype = $.prototype;
  function se(c, v, D) {
    this.props = c, this.context = v, this.refs = W, this.updater = D || Ce;
  }
  var Te = se.prototype = new tt();
  Te.constructor = se, ve(Te, $.prototype), Te.isPureReactComponent = !0;
  var ye = Array.isArray, He = Object.prototype.hasOwnProperty, ge = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, v, D) {
    var j, V = {}, A = null, Z = null;
    if (v != null) for (j in v.ref !== void 0 && (Z = v.ref), v.key !== void 0 && (A = "" + v.key), v) He.call(v, j) && !Ee.hasOwnProperty(j) && (V[j] = v[j]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = D;
    else if (1 < Q) {
      for (var ne = Array(Q), We = 0; We < Q; We++) ne[We] = arguments[We + 2];
      V.children = ne;
    }
    if (c && c.defaultProps) for (j in Q = c.defaultProps, Q) V[j] === void 0 && (V[j] = Q[j]);
    return { $$typeof: x, type: c, key: A, ref: Z, props: V, _owner: ge.current };
  }
  function Nt(c, v) {
    return { $$typeof: x, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === x;
  }
  function Yt(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(D) {
      return v[D];
    });
  }
  var ft = /\/+/g;
  function Be(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : v.toString(36);
  }
  function nt(c, v, D, j, V) {
    var A = typeof c;
    (A === "undefined" || A === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else switch (A) {
      case "string":
      case "number":
        Z = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case x:
          case O:
            Z = !0;
        }
    }
    if (Z) return Z = c, V = V(Z), c = j === "" ? "." + Be(Z, 0) : j, ye(V) ? (D = "", c != null && (D = c.replace(ft, "$&/") + "/"), nt(V, v, D, "", function(We) {
      return We;
    })) : V != null && (gt(V) && (V = Nt(V, D + (!V.key || Z && Z.key === V.key ? "" : ("" + V.key).replace(ft, "$&/") + "/") + c)), v.push(V)), 1;
    if (Z = 0, j = j === "" ? "." : j + ":", ye(c)) for (var Q = 0; Q < c.length; Q++) {
      A = c[Q];
      var ne = j + Be(A, Q);
      Z += nt(A, v, D, ne, V);
    }
    else if (ne = U(c), typeof ne == "function") for (c = ne.call(c), Q = 0; !(A = c.next()).done; ) A = A.value, ne = j + Be(A, Q++), Z += nt(A, v, D, ne, V);
    else if (A === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return Z;
  }
  function dt(c, v, D) {
    if (c == null) return c;
    var j = [], V = 0;
    return nt(c, j, "", "", function(A) {
      return v.call(D, A, V++);
    }), j;
  }
  function Oe(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = D);
      }, function(D) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = D);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ae = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: S, ReactCurrentOwner: ge };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return I.Children = { map: dt, forEach: function(c, v, D) {
    dt(c, function() {
      v.apply(this, arguments);
    }, D);
  }, count: function(c) {
    var v = 0;
    return dt(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return dt(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!gt(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, I.Component = $, I.Fragment = m, I.Profiler = le, I.PureComponent = se, I.StrictMode = ie, I.Suspense = M, I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, I.act = _, I.cloneElement = function(c, v, D) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var j = ve({}, c.props), V = c.key, A = c.ref, Z = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (A = v.ref, Z = ge.current), v.key !== void 0 && (V = "" + v.key), c.type && c.type.defaultProps) var Q = c.type.defaultProps;
      for (ne in v) He.call(v, ne) && !Ee.hasOwnProperty(ne) && (j[ne] = v[ne] === void 0 && Q !== void 0 ? Q[ne] : v[ne]);
    }
    var ne = arguments.length - 2;
    if (ne === 1) j.children = D;
    else if (1 < ne) {
      Q = Array(ne);
      for (var We = 0; We < ne; We++) Q[We] = arguments[We + 2];
      j.children = Q;
    }
    return { $$typeof: x, type: c.type, key: V, ref: A, props: j, _owner: Z };
  }, I.createContext = function(c) {
    return c = { $$typeof: q, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: X, _context: c }, c.Consumer = c;
  }, I.createElement = Xe, I.createFactory = function(c) {
    var v = Xe.bind(null, c);
    return v.type = c, v;
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(c) {
    return { $$typeof: G, render: c };
  }, I.isValidElement = gt, I.lazy = function(c) {
    return { $$typeof: Y, _payload: { _status: -1, _result: c }, _init: Oe };
  }, I.memo = function(c, v) {
    return { $$typeof: te, type: c, compare: v === void 0 ? null : v };
  }, I.startTransition = function(c) {
    var v = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = v;
    }
  }, I.unstable_act = _, I.useCallback = function(c, v) {
    return ae.current.useCallback(c, v);
  }, I.useContext = function(c) {
    return ae.current.useContext(c);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(c) {
    return ae.current.useDeferredValue(c);
  }, I.useEffect = function(c, v) {
    return ae.current.useEffect(c, v);
  }, I.useId = function() {
    return ae.current.useId();
  }, I.useImperativeHandle = function(c, v, D) {
    return ae.current.useImperativeHandle(c, v, D);
  }, I.useInsertionEffect = function(c, v) {
    return ae.current.useInsertionEffect(c, v);
  }, I.useLayoutEffect = function(c, v) {
    return ae.current.useLayoutEffect(c, v);
  }, I.useMemo = function(c, v) {
    return ae.current.useMemo(c, v);
  }, I.useReducer = function(c, v, D) {
    return ae.current.useReducer(c, v, D);
  }, I.useRef = function(c) {
    return ae.current.useRef(c);
  }, I.useState = function(c) {
    return ae.current.useState(c);
  }, I.useSyncExternalStore = function(c, v, D) {
    return ae.current.useSyncExternalStore(c, v, D);
  }, I.useTransition = function() {
    return ae.current.useTransition();
  }, I.version = "18.3.1", I;
}
var La;
function Oo() {
  return La || (La = 1, zo.exports = jf()), zo.exports;
}
var Ta;
function Ff() {
  if (Ta) return gr;
  Ta = 1;
  var x = Oo(), O = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.fragment"), ie = Object.prototype.hasOwnProperty, le = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(G, M, te) {
    var Y, B = {}, U = null, Ce = null;
    te !== void 0 && (U = "" + te), M.key !== void 0 && (U = "" + M.key), M.ref !== void 0 && (Ce = M.ref);
    for (Y in M) ie.call(M, Y) && !X.hasOwnProperty(Y) && (B[Y] = M[Y]);
    if (G && G.defaultProps) for (Y in M = G.defaultProps, M) B[Y] === void 0 && (B[Y] = M[Y]);
    return { $$typeof: O, type: G, key: U, ref: Ce, props: B, _owner: le.current };
  }
  return gr.Fragment = m, gr.jsx = q, gr.jsxs = q, gr;
}
var Ra;
function Uf() {
  return Ra || (Ra = 1, No.exports = Ff()), No.exports;
}
var Ae = Uf(), ct = Oo(), Tl = {}, Lo = { exports: {} }, Ve = {}, To = { exports: {} }, Ro = {};
var Ma;
function Vf() {
  return Ma || (Ma = 1, (function(x) {
    function O(S, T) {
      var _ = S.length;
      S.push(T);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, v = S[c];
        if (0 < le(v, T)) S[c] = T, S[_] = v, _ = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function ie(S) {
      if (S.length === 0) return null;
      var T = S[0], _ = S.pop();
      if (_ !== T) {
        S[0] = _;
        e: for (var c = 0, v = S.length, D = v >>> 1; c < D; ) {
          var j = 2 * (c + 1) - 1, V = S[j], A = j + 1, Z = S[A];
          if (0 > le(V, _)) A < v && 0 > le(Z, V) ? (S[c] = Z, S[A] = _, c = A) : (S[c] = V, S[j] = _, c = j);
          else if (A < v && 0 > le(Z, _)) S[c] = Z, S[A] = _, c = A;
          else break e;
        }
      }
      return T;
    }
    function le(S, T) {
      var _ = S.sortIndex - T.sortIndex;
      return _ !== 0 ? _ : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var X = performance;
      x.unstable_now = function() {
        return X.now();
      };
    } else {
      var q = Date, G = q.now();
      x.unstable_now = function() {
        return q.now() - G;
      };
    }
    var M = [], te = [], Y = 1, B = null, U = 3, Ce = !1, ve = !1, W = !1, $ = typeof setTimeout == "function" ? setTimeout : null, tt = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Te(S) {
      for (var T = m(te); T !== null; ) {
        if (T.callback === null) ie(te);
        else if (T.startTime <= S) ie(te), T.sortIndex = T.expirationTime, O(M, T);
        else break;
        T = m(te);
      }
    }
    function ye(S) {
      if (W = !1, Te(S), !ve) if (m(M) !== null) ve = !0, Oe(He);
      else {
        var T = m(te);
        T !== null && ae(ye, T.startTime - S);
      }
    }
    function He(S, T) {
      ve = !1, W && (W = !1, tt(Xe), Xe = -1), Ce = !0;
      var _ = U;
      try {
        for (Te(T), B = m(M); B !== null && (!(B.expirationTime > T) || S && !Yt()); ) {
          var c = B.callback;
          if (typeof c == "function") {
            B.callback = null, U = B.priorityLevel;
            var v = c(B.expirationTime <= T);
            T = x.unstable_now(), typeof v == "function" ? B.callback = v : B === m(M) && ie(M), Te(T);
          } else ie(M);
          B = m(M);
        }
        if (B !== null) var D = !0;
        else {
          var j = m(te);
          j !== null && ae(ye, j.startTime - T), D = !1;
        }
        return D;
      } finally {
        B = null, U = _, Ce = !1;
      }
    }
    var ge = !1, Ee = null, Xe = -1, Nt = 5, gt = -1;
    function Yt() {
      return !(x.unstable_now() - gt < Nt);
    }
    function ft() {
      if (Ee !== null) {
        var S = x.unstable_now();
        gt = S;
        var T = !0;
        try {
          T = Ee(!0, S);
        } finally {
          T ? Be() : (ge = !1, Ee = null);
        }
      } else ge = !1;
    }
    var Be;
    if (typeof se == "function") Be = function() {
      se(ft);
    };
    else if (typeof MessageChannel < "u") {
      var nt = new MessageChannel(), dt = nt.port2;
      nt.port1.onmessage = ft, Be = function() {
        dt.postMessage(null);
      };
    } else Be = function() {
      $(ft, 0);
    };
    function Oe(S) {
      Ee = S, ge || (ge = !0, Be());
    }
    function ae(S, T) {
      Xe = $(function() {
        S(x.unstable_now());
      }, T);
    }
    x.unstable_IdlePriority = 5, x.unstable_ImmediatePriority = 1, x.unstable_LowPriority = 4, x.unstable_NormalPriority = 3, x.unstable_Profiling = null, x.unstable_UserBlockingPriority = 2, x.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, x.unstable_continueExecution = function() {
      ve || Ce || (ve = !0, Oe(He));
    }, x.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Nt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, x.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, x.unstable_getFirstCallbackNode = function() {
      return m(M);
    }, x.unstable_next = function(S) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = U;
      }
      var _ = U;
      U = T;
      try {
        return S();
      } finally {
        U = _;
      }
    }, x.unstable_pauseExecution = function() {
    }, x.unstable_requestPaint = function() {
    }, x.unstable_runWithPriority = function(S, T) {
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
      var _ = U;
      U = S;
      try {
        return T();
      } finally {
        U = _;
      }
    }, x.unstable_scheduleCallback = function(S, T, _) {
      var c = x.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, S) {
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
      return v = _ + v, S = { id: Y++, callback: T, priorityLevel: S, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (S.sortIndex = _, O(te, S), m(M) === null && S === m(te) && (W ? (tt(Xe), Xe = -1) : W = !0, ae(ye, _ - c))) : (S.sortIndex = v, O(M, S), ve || Ce || (ve = !0, Oe(He))), S;
    }, x.unstable_shouldYield = Yt, x.unstable_wrapCallback = function(S) {
      var T = U;
      return function() {
        var _ = U;
        U = T;
        try {
          return S.apply(this, arguments);
        } finally {
          U = _;
        }
      };
    };
  })(Ro)), Ro;
}
var Oa;
function Af() {
  return Oa || (Oa = 1, To.exports = Vf()), To.exports;
}
var Da;
function Hf() {
  if (Da) return Ve;
  Da = 1;
  var x = Oo(), O = Af();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ie = /* @__PURE__ */ new Set(), le = {};
  function X(e, t) {
    q(e, t), q(e + "Capture", t);
  }
  function q(e, t) {
    for (le[e] = t, e = 0; e < t.length; e++) ie.add(t[e]);
  }
  var G = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, B = {};
  function U(e) {
    return M.call(B, e) ? !0 : M.call(Y, e) ? !1 : te.test(e) ? B[e] = !0 : (Y[e] = !0, !1);
  }
  function Ce(e, t, n, r) {
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
  function ve(e, t, n, r) {
    if (t === null || typeof t > "u" || Ce(e, t, n, r)) return !0;
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
  function W(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    $[e] = new W(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    $[t] = new W(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    $[e] = new W(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    $[e] = new W(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    $[e] = new W(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    $[e] = new W(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    $[e] = new W(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    $[e] = new W(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    $[e] = new W(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var tt = /[\-:]([a-z])/g;
  function se(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      tt,
      se
    );
    $[t] = new W(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(tt, se);
    $[t] = new W(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(tt, se);
    $[t] = new W(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    $[e] = new W(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    $[e] = new W(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Te(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ve(t, n, l, r) && (n = null), r || l === null ? U(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ye = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = /* @__PURE__ */ Symbol.for("react.element"), ge = /* @__PURE__ */ Symbol.for("react.portal"), Ee = /* @__PURE__ */ Symbol.for("react.fragment"), Xe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Nt = /* @__PURE__ */ Symbol.for("react.profiler"), gt = /* @__PURE__ */ Symbol.for("react.provider"), Yt = /* @__PURE__ */ Symbol.for("react.context"), ft = /* @__PURE__ */ Symbol.for("react.forward_ref"), Be = /* @__PURE__ */ Symbol.for("react.suspense"), nt = /* @__PURE__ */ Symbol.for("react.suspense_list"), dt = /* @__PURE__ */ Symbol.for("react.memo"), Oe = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
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
  var D = !1;
  function j(e, t) {
    if (!e || D) return "";
    D = !0;
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
      D = !1, Error.prepareStackTrace = n;
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
  function A(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ee:
        return "Fragment";
      case ge:
        return "Portal";
      case Nt:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yt:
        return (e.displayName || "Context") + ".Consumer";
      case gt:
        return (e._context.displayName || "Context") + ".Provider";
      case ft:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case dt:
        return t = e.displayName || null, t !== null ? t : A(e.type) || "Memo";
      case Oe:
        t = e._payload, e = e._init;
        try {
          return A(e(t));
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
        return A(t);
      case 8:
        return t === Xe ? "StrictMode" : "Mode";
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
  function Q(e) {
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
  function ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function We(e) {
    var t = ne(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Sr(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Do(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Io(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function jo(e, t) {
    t = t.checked, t != null && Te(e, "checked", t, !1);
  }
  function Dl(e, t) {
    jo(e, t);
    var n = Q(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, Q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Q(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uo(e, t) {
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
    e._wrapperState = { initialValue: Q(n) };
  }
  function Vo(e, t) {
    var n = Q(t.value), r = Q(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ao(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ho(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ho(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Er, Bo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Er = Er || document.createElement("div"), Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Er.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  }, Va = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function(e) {
    Va.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
    });
  });
  function Wo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
  }
  function $o(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Wo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Aa = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ul(e, t) {
    if (t) {
      if (Aa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Vl(e, t) {
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
  var Al = null;
  function Hl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bl = null, an = null, cn = null;
  function Qo(e) {
    if (e = rr(e)) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Qr(t), Bl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e;
  }
  function Yo() {
    if (an) {
      var e = an, t = cn;
      if (cn = an = null, Qo(e), t) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Wl = !1;
  function Zo(e, t, n) {
    if (Wl) return e(t, n);
    Wl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      Wl = !1, (an !== null || cn !== null) && (Go(), Yo());
    }
  }
  function jn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
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
  var $l = !1;
  if (G) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      $l = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    $l = !1;
  }
  function Ha(e, t, n, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1, xr = null, _r = !1, Ql = null, Ba = { onError: function(e) {
    Un = !0, xr = e;
  } };
  function Wa(e, t, n, r, l, u, o, i, s) {
    Un = !1, xr = null, Ha.apply(Ba, arguments);
  }
  function $a(e, t, n, r, l, u, o, i, s) {
    if (Wa.apply(this, arguments), Un) {
      if (Un) {
        var p = xr;
        Un = !1, xr = null;
      } else throw Error(m(198));
      _r || (_r = !0, Ql = p);
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
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
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
          if (u === n) return qo(l), e;
          if (u === r) return qo(l), t;
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
  function bo(e) {
    return e = Qa(e), e !== null ? ei(e) : null;
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
  var ti = O.unstable_scheduleCallback, ni = O.unstable_cancelCallback, Ka = O.unstable_shouldYield, Ya = O.unstable_requestPaint, fe = O.unstable_now, Xa = O.unstable_getCurrentPriorityLevel, Kl = O.unstable_ImmediatePriority, ri = O.unstable_UserBlockingPriority, Cr = O.unstable_NormalPriority, Ga = O.unstable_LowPriority, li = O.unstable_IdlePriority, Pr = null, pt = null;
  function Za(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function") try {
      pt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var rt = Math.clz32 ? Math.clz32 : ba, Ja = Math.log, qa = Math.LN2;
  function ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ja(e) / qa | 0) | 0;
  }
  var Nr = 64, zr = 4194304;
  function Vn(e) {
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
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Vn(i) : (u &= o, u !== 0 && (r = Vn(u)));
    } else o = n & ~l, o !== 0 ? r = Vn(o) : u !== 0 && (r = Vn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - rt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ec(e, t) {
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
  function tc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - rt(u), i = 1 << o, s = l[o];
      s === -1 ? ((i & n) === 0 || (i & r) !== 0) && (l[o] = ec(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ui() {
    var e = Nr;
    return Nr <<= 1, (Nr & 4194240) === 0 && (Nr = 64), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function An(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rt(t), e[t] = n;
  }
  function nc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - rt(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Gl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - rt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var K = 0;
  function oi(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ii, Zl, si, ai, ci, Jl = !1, Tr = [], zt = null, Lt = null, Tt = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Rt = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return zt = Wn(zt, e, t, n, r, l), !0;
      case "dragenter":
        return Lt = Wn(Lt, e, t, n, r, l), !0;
      case "mouseover":
        return Tt = Wn(Tt, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Bn.set(u, Wn(Bn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function di(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
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
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Al = r, n.target.dispatchEvent(r), Al = null;
      } else return t = rr(n), t !== null && Zl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pi(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function uc() {
    Jl = !1, zt !== null && Rr(zt) && (zt = null), Lt !== null && Rr(Lt) && (Lt = null), Tt !== null && Rr(Tt) && (Tt = null), Hn.forEach(pi), Bn.forEach(pi);
  }
  function $n(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, uc)));
  }
  function Qn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Tr.length) {
      $n(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zt !== null && $n(zt, e), Lt !== null && $n(Lt, e), Tt !== null && $n(Tt, e), Hn.forEach(t), Bn.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) di(n), n.blockedOn === null && Rt.shift();
  }
  var fn = ye.ReactCurrentBatchConfig, Mr = !0;
  function oc(e, t, n, r) {
    var l = K, u = fn.transition;
    fn.transition = null;
    try {
      K = 1, ql(e, t, n, r);
    } finally {
      K = l, fn.transition = u;
    }
  }
  function ic(e, t, n, r) {
    var l = K, u = fn.transition;
    fn.transition = null;
    try {
      K = 4, ql(e, t, n, r);
    } finally {
      K = l, fn.transition = u;
    }
  }
  function ql(e, t, n, r) {
    if (Mr) {
      var l = bl(e, t, n, r);
      if (l === null) vu(e, t, r, Or, n), fi(e, r);
      else if (lc(l, e, t, n, r)) r.stopPropagation();
      else if (fi(e, r), t & 4 && -1 < rc.indexOf(e)) {
        for (; l !== null; ) {
          var u = rr(l);
          if (u !== null && ii(u), u = bl(e, t, n, r), u === null && vu(e, t, r, Or, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vu(e, t, r, null, n);
    }
  }
  var Or = null;
  function bl(e, t, n, r) {
    if (Or = null, e = Hl(r), e = Gt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Jo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Or = e, null;
  }
  function mi(e) {
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
        switch (Xa()) {
          case Kl:
            return 1;
          case ri:
            return 4;
          case Cr:
          case Ga:
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
  var Mt = null, eu = null, Dr = null;
  function hi() {
    if (Dr) return Dr;
    var e, t = eu, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ir(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jr() {
    return !0;
  }
  function vi() {
    return !1;
  }
  function $e(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? jr : vi, this.isPropagationStopped = vi, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jr);
    }, persist: function() {
    }, isPersistent: jr }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tu = $e(dn), Kn = _({}, dn, { view: 0, detail: 0 }), sc = $e(Kn), nu, ru, Yn, Fr = _({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (nu = e.screenX - Yn.screenX, ru = e.screenY - Yn.screenY) : ru = nu = 0, Yn = e), nu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ru;
  } }), yi = $e(Fr), ac = _({}, Fr, { dataTransfer: 0 }), cc = $e(ac), fc = _({}, Kn, { relatedTarget: 0 }), lu = $e(fc), dc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = $e(dc), mc = _({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hc = $e(mc), vc = _({}, dn, { data: 0 }), gi = $e(vc), yc = {
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
  }, gc = {
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
  }, wc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wc[e]) ? !!t[e] : !1;
  }
  function uu() {
    return Sc;
  }
  var kc = _({}, Kn, { key: function(e) {
    if (e.key) {
      var t = yc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uu, charCode: function(e) {
    return e.type === "keypress" ? Ir(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ec = $e(kc), xc = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wi = $e(xc), _c = _({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uu }), Cc = $e(_c), Pc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nc = $e(Pc), zc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Lc = $e(zc), Tc = [9, 13, 27, 32], ou = G && "CompositionEvent" in window, Xn = null;
  G && "documentMode" in document && (Xn = document.documentMode);
  var Rc = G && "TextEvent" in window && !Xn, Si = G && (!ou || Xn && 8 < Xn && 11 >= Xn), ki = " ", Ei = !1;
  function xi(e, t) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(t.keyCode) !== -1;
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
  function _i(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pn = !1;
  function Mc(e, t) {
    switch (e) {
      case "compositionend":
        return _i(t);
      case "keypress":
        return t.which !== 32 ? null : (Ei = !0, ki);
      case "textInput":
        return e = t.data, e === ki && Ei ? null : e;
      default:
        return null;
    }
  }
  function Oc(e, t) {
    if (pn) return e === "compositionend" || !ou && xi(e, t) ? (e = hi(), Dr = eu = Mt = null, pn = !1, e) : null;
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
        return Si && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ci(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dc[e.type] : t === "textarea";
  }
  function Pi(e, t, n, r) {
    Ko(r), t = Br(t, "onChange"), 0 < t.length && (n = new tu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Ic(e) {
    $i(e, 0);
  }
  function Ur(e) {
    var t = gn(e);
    if (Do(t)) return e;
  }
  function jc(e, t) {
    if (e === "change") return t;
  }
  var Ni = !1;
  if (G) {
    var iu;
    if (G) {
      var su = "oninput" in document;
      if (!su) {
        var zi = document.createElement("div");
        zi.setAttribute("oninput", "return;"), su = typeof zi.oninput == "function";
      }
      iu = su;
    } else iu = !1;
    Ni = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Gn && (Gn.detachEvent("onpropertychange", Ti), Zn = Gn = null);
  }
  function Ti(e) {
    if (e.propertyName === "value" && Ur(Zn)) {
      var t = [];
      Pi(t, Zn, e, Hl(e)), Zo(Ic, t);
    }
  }
  function Fc(e, t, n) {
    e === "focusin" ? (Li(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", Ti)) : e === "focusout" && Li();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Zn);
  }
  function Vc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Ac(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Hc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : Hc;
  function Jn(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!M.call(t, l) || !lt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ri(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Ri(e);
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
      n = Ri(n);
    }
  }
  function Oi(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oi(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Di() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Bc(e) {
    var t = Di(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oi(n.ownerDocument.documentElement, n)) {
      if (r !== null && au(n)) {
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
  var Wc = G && "documentMode" in document && 11 >= document.documentMode, mn = null, cu = null, qn = null, fu = !1;
  function Ii(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu || mn == null || mn !== kr(r) || (r = mn, "selectionStart" in r && au(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Br(cu, "onSelect"), 0 < r.length && (t = new tu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, du = {}, ji = {};
  G && (ji = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (du[e]) return du[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ji) return du[e] = t[n];
    return e;
  }
  var Fi = Ar("animationend"), Ui = Ar("animationiteration"), Vi = Ar("animationstart"), Ai = Ar("transitionend"), Hi = /* @__PURE__ */ new Map(), Bi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ot(e, t) {
    Hi.set(e, t), X(t, [e]);
  }
  for (var pu = 0; pu < Bi.length; pu++) {
    var mu = Bi[pu], $c = mu.toLowerCase(), Qc = mu[0].toUpperCase() + mu.slice(1);
    Ot($c, "on" + Qc);
  }
  Ot(Fi, "onAnimationEnd"), Ot(Ui, "onAnimationIteration"), Ot(Vi, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(Ai, "onTransitionEnd"), q("onMouseEnter", ["mouseout", "mouseover"]), q("onMouseLeave", ["mouseout", "mouseover"]), q("onPointerEnter", ["pointerout", "pointerover"]), q("onPointerLeave", ["pointerout", "pointerover"]), X("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), X("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), X("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), X("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), X("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), X("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Wi(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $a(r, t, void 0, e), e.currentTarget = null;
  }
  function $i(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Wi(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Wi(l, i, p), u = s;
        }
      }
    }
    if (_r) throw e = Ql, _r = !1, Ql = null, e;
  }
  function b(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Qi(t, e, 2, !1), n.add(r));
  }
  function hu(e, t, n) {
    var r = 0;
    t && (r |= 4), Qi(n, e, r, t);
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Hr]) {
      e[Hr] = !0, ie.forEach(function(n) {
        n !== "selectionchange" && (Kc.has(n) || hu(n, !1, e), hu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || (t[Hr] = !0, hu("selectionchange", !1, t));
    }
  }
  function Qi(e, t, n, r) {
    switch (mi(t)) {
      case 1:
        var l = oc;
        break;
      case 4:
        l = ic;
        break;
      default:
        l = ql;
    }
    n = l.bind(null, t, n, e), l = void 0, !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function vu(e, t, n, r, l) {
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
          if (o = Gt(i), o === null) return;
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
      var p = u, y = Hl(n), g = [];
      e: {
        var h = Hi.get(e);
        if (h !== void 0) {
          var k = tu, C = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = Ec;
              break;
            case "focusin":
              C = "focus", k = lu;
              break;
            case "focusout":
              C = "blur", k = lu;
              break;
            case "beforeblur":
            case "afterblur":
              k = lu;
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
              k = yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = Cc;
              break;
            case Fi:
            case Ui:
            case Vi:
              k = pc;
              break;
            case Ai:
              k = Nc;
              break;
            case "scroll":
              k = sc;
              break;
            case "wheel":
              k = Lc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = wi;
          }
          var P = (t & 4) !== 0, de = !P && e === "scroll", f = P ? h !== null ? h + "Capture" : null : h;
          P = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = jn(a, f), w != null && P.push(tr(a, w, d)))), de) break;
            a = a.return;
          }
          0 < P.length && (h = new k(h, C, null, n, y), g.push({ event: h, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && n !== Al && (C = n.relatedTarget || n.fromElement) && (Gt(C) || C[wt])) break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (C = n.relatedTarget || n.toElement, k = p, C = C ? Gt(C) : null, C !== null && (de = Xt(C), C !== de || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (P = yi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (P = wi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), de = k == null ? h : gn(k), d = C == null ? h : gn(C), h = new P(w, a + "leave", k, n, y), h.target = de, h.relatedTarget = d, w = null, Gt(y) === p && (P = new P(f, a + "enter", C, n, y), P.target = d, P.relatedTarget = de, w = P), de = w, k && C) t: {
              for (P = k, f = C, a = 0, d = P; d; d = vn(d)) a++;
              for (d = 0, w = f; w; w = vn(w)) d++;
              for (; 0 < a - d; ) P = vn(P), a--;
              for (; 0 < d - a; ) f = vn(f), d--;
              for (; a--; ) {
                if (P === f || f !== null && P === f.alternate) break t;
                P = vn(P), f = vn(f);
              }
              P = null;
            }
            else P = null;
            k !== null && Ki(g, h, k, P, !1), C !== null && de !== null && Ki(g, de, C, P, !0);
          }
        }
        e: {
          if (h = p ? gn(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file") var N = jc;
          else if (Ci(h)) if (Ni) N = Ac;
          else {
            N = Uc;
            var z = Fc;
          }
          else (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Vc);
          if (N && (N = N(e, p))) {
            Pi(g, N, n, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (z = p ? gn(p) : window, e) {
          case "focusin":
            (Ci(z) || z.contentEditable === "true") && (mn = z, cu = p, qn = null);
            break;
          case "focusout":
            qn = cu = mn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fu = !1, Ii(g, n, y);
            break;
          case "selectionchange":
            if (Wc) break;
          case "keydown":
          case "keyup":
            Ii(g, n, y);
        }
        var L;
        if (ou) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else pn ? xi(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
        R && (Si && n.locale !== "ko" && (pn || R !== "onCompositionStart" ? R === "onCompositionEnd" && pn && (L = hi()) : (Mt = y, eu = "value" in Mt ? Mt.value : Mt.textContent, pn = !0)), z = Br(p, R), 0 < z.length && (R = new gi(R, e, null, n, y), g.push({ event: R, listeners: z }), L ? R.data = L : (L = _i(n), L !== null && (R.data = L)))), (L = Rc ? Mc(e, n) : Oc(e, n)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new gi("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: p }), y.data = L));
      }
      $i(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = jn(e, n), u != null && r.unshift(tr(e, u, l)), u = jn(e, t), u != null && r.push(tr(e, u, l))), e = e.return;
    }
    return r;
  }
  function vn(e) {
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
      i.tag === 5 && p !== null && (i = p, l ? (s = jn(n, u), s != null && o.unshift(tr(n, s, i))) : l || (s = jn(n, u), s != null && o.push(tr(n, s, i)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Yc = /\r\n?/g, Xc = /\u0000|\uFFFD/g;
  function Yi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yc, `
`).replace(Xc, "");
  }
  function Wr(e, t, n) {
    if (t = Yi(t), Yi(e) !== t && n) throw Error(m(425));
  }
  function $r() {
  }
  var yu = null, gu = null;
  function wu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Su = typeof setTimeout == "function" ? setTimeout : void 0, Gc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xi = typeof Promise == "function" ? Promise : void 0, Zc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xi < "u" ? function(e) {
    return Xi.resolve(null).then(e).catch(Jc);
  } : Su;
  function Jc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ku(e, t) {
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
  var yn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + yn, nr = "__reactProps$" + yn, wt = "__reactContainer$" + yn, Eu = "__reactEvents$" + yn, qc = "__reactListeners$" + yn, bc = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[wt] || n[mt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gi(e); e !== null; ) {
          if (n = e[mt]) return n;
          e = Gi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[mt] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[nr] || null;
  }
  var xu = [], wn = -1;
  function It(e) {
    return { current: e };
  }
  function ee(e) {
    0 > wn || (e.current = xu[wn], xu[wn] = null, wn--);
  }
  function J(e, t) {
    wn++, xu[wn] = e.current, e.current = t;
  }
  var jt = {}, Pe = It(jt), De = It(!1), Zt = jt;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ie(e) {
    return e = e.childContextTypes, e != null;
  }
  function Kr() {
    ee(De), ee(Pe);
  }
  function Zi(e, t, n) {
    if (Pe.current !== jt) throw Error(m(168));
    J(Pe, t), J(De, n);
  }
  function Ji(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Z(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jt, Zt = Pe.current, J(Pe, e), J(De, De.current), !0;
  }
  function qi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = Ji(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, ee(De), ee(Pe), J(Pe, e)) : ee(De), J(De, n);
  }
  var St = null, Xr = !1, _u = !1;
  function bi(e) {
    St === null ? St = [e] : St.push(e);
  }
  function ef(e) {
    Xr = !0, bi(e);
  }
  function Ft() {
    if (!_u && St !== null) {
      _u = !0;
      var e = 0, t = K;
      try {
        var n = St;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        St = null, Xr = !1;
      } catch (l) {
        throw St !== null && (St = St.slice(e + 1)), ti(Kl, Ft), l;
      } finally {
        K = t, _u = !1;
      }
    }
    return null;
  }
  var kn = [], En = 0, Gr = null, Zr = 0, Ge = [], Ze = 0, Jt = null, kt = 1, Et = "";
  function qt(e, t) {
    kn[En++] = Zr, kn[En++] = Gr, Gr = e, Zr = t;
  }
  function es(e, t, n) {
    Ge[Ze++] = kt, Ge[Ze++] = Et, Ge[Ze++] = Jt, Jt = e;
    var r = kt;
    e = Et;
    var l = 32 - rt(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - rt(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, kt = 1 << 32 - rt(t) + l | n << l | r, Et = u + e;
    } else kt = 1 << u | n << l | r, Et = e;
  }
  function Cu(e) {
    e.return !== null && (qt(e, 1), es(e, 1, 0));
  }
  function Pu(e) {
    for (; e === Gr; ) Gr = kn[--En], kn[En] = null, Zr = kn[--En], kn[En] = null;
    for (; e === Jt; ) Jt = Ge[--Ze], Ge[Ze] = null, Et = Ge[--Ze], Ge[Ze] = null, kt = Ge[--Ze], Ge[Ze] = null;
  }
  var Qe = null, Ke = null, re = !1, ut = null;
  function ts(e, t) {
    var n = et(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = Dt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: kt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ke = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (re) {
      var t = Ke;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (Nu(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = Qe;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Qe = e);
        }
      } else {
        if (Nu(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, re = !1, Qe = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Qe = e;
  }
  function Jr(e) {
    if (e !== Qe) return !1;
    if (!re) return rs(e), re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wu(e.type, e.memoizedProps)), t && (t = Ke)) {
      if (Nu(e)) throw ls(), Error(m(418));
      for (; t; ) ts(e, t), t = Dt(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ke = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ke = null;
      }
    } else Ke = Qe ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = Ke; e; ) e = Dt(e.nextSibling);
  }
  function xn() {
    Ke = Qe = null, re = !1;
  }
  function Lu(e) {
    ut === null ? ut = [e] : ut.push(e);
  }
  var tf = ye.ReactCurrentBatchConfig;
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
  function qr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
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
      return f = Qt(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = ko(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var N = d.type;
      return N === Ee ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Oe && us(N) === a.type) ? (w = l(a, d.props), w.ref = lr(f, a, d), w.return = f, w) : (w = El(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Eo(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, N) {
      return a === null || a.tag !== 7 ? (a = on(d, f.mode, w, N), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = ko("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case He:
            return d = El(a.type, a.key, a.props, null, f.mode, d), d.ref = lr(f, null, a), d.return = f, d;
          case ge:
            return a = Eo(a, f.mode, d), a.return = f, a;
          case Oe:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (On(a) || T(a)) return a = on(a, f.mode, d, null), a.return = f, a;
        qr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var N = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case He:
            return d.key === N ? s(f, a, d, w) : null;
          case ge:
            return d.key === N ? p(f, a, d, w) : null;
          case Oe:
            return N = d._init, h(
              f,
              a,
              N(d._payload),
              w
            );
        }
        if (On(d) || T(d)) return N !== null ? null : y(f, a, d, w, null);
        qr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case He:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, N);
          case ge:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, N);
          case Oe:
            var z = w._init;
            return k(f, a, d, z(w._payload), N);
        }
        if (On(w) || T(w)) return f = f.get(d) || null, y(a, f, w, N, null);
        qr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var N = null, z = null, L = a, R = a = 0, ke = null; L !== null && R < d.length; R++) {
        L.index > R ? (ke = L, L = null) : ke = L.sibling;
        var H = h(f, L, d[R], w);
        if (H === null) {
          L === null && (L = ke);
          break;
        }
        e && L && H.alternate === null && t(f, L), a = u(H, a, R), z === null ? N = H : z.sibling = H, z = H, L = ke;
      }
      if (R === d.length) return n(f, L), re && qt(f, R), N;
      if (L === null) {
        for (; R < d.length; R++) L = g(f, d[R], w), L !== null && (a = u(L, a, R), z === null ? N = L : z.sibling = L, z = L);
        return re && qt(f, R), N;
      }
      for (L = r(f, L); R < d.length; R++) ke = k(L, f, R, d[R], w), ke !== null && (e && ke.alternate !== null && L.delete(ke.key === null ? R : ke.key), a = u(ke, a, R), z === null ? N = ke : z.sibling = ke, z = ke);
      return e && L.forEach(function(Kt) {
        return t(f, Kt);
      }), re && qt(f, R), N;
    }
    function P(f, a, d, w) {
      var N = T(d);
      if (typeof N != "function") throw Error(m(150));
      if (d = N.call(d), d == null) throw Error(m(151));
      for (var z = N = null, L = a, R = a = 0, ke = null, H = d.next(); L !== null && !H.done; R++, H = d.next()) {
        L.index > R ? (ke = L, L = null) : ke = L.sibling;
        var Kt = h(f, L, H.value, w);
        if (Kt === null) {
          L === null && (L = ke);
          break;
        }
        e && L && Kt.alternate === null && t(f, L), a = u(Kt, a, R), z === null ? N = Kt : z.sibling = Kt, z = Kt, L = ke;
      }
      if (H.done) return n(
        f,
        L
      ), re && qt(f, R), N;
      if (L === null) {
        for (; !H.done; R++, H = d.next()) H = g(f, H.value, w), H !== null && (a = u(H, a, R), z === null ? N = H : z.sibling = H, z = H);
        return re && qt(f, R), N;
      }
      for (L = r(f, L); !H.done; R++, H = d.next()) H = k(L, f, R, H.value, w), H !== null && (e && H.alternate !== null && L.delete(H.key === null ? R : H.key), a = u(H, a, R), z === null ? N = H : z.sibling = H, z = H);
      return e && L.forEach(function(If) {
        return t(f, If);
      }), re && qt(f, R), N;
    }
    function de(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Ee && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case He:
            e: {
              for (var N = d.key, z = a; z !== null; ) {
                if (z.key === N) {
                  if (N = d.type, N === Ee) {
                    if (z.tag === 7) {
                      n(f, z.sibling), a = l(z, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (z.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Oe && us(N) === z.type) {
                    n(f, z.sibling), a = l(z, d.props), a.ref = lr(f, z, d), a.return = f, f = a;
                    break e;
                  }
                  n(f, z);
                  break;
                } else t(f, z);
                z = z.sibling;
              }
              d.type === Ee ? (a = on(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = El(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case ge:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  n(f, a);
                  break;
                }
                else t(f, a);
                a = a.sibling;
              }
              a = Eo(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case Oe:
            return z = d._init, de(f, a, z(d._payload), w);
        }
        if (On(d)) return C(f, a, d, w);
        if (T(d)) return P(f, a, d, w);
        qr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ko(d, f.mode, w), a.return = f, f = a), o(f)) : n(f, a);
    }
    return de;
  }
  var _n = os(!0), is = os(!1), br = It(null), el = null, Cn = null, Tu = null;
  function Ru() {
    Tu = Cn = el = null;
  }
  function Mu(e) {
    var t = br.current;
    ee(br), e._currentValue = t;
  }
  function Ou(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    el = e, Tu = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (je = !0), e.firstContext = null);
  }
  function Je(e) {
    var t = e._currentValue;
    if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
      if (el === null) throw Error(m(308));
      Cn = e, el.dependencies = { lanes: 0, firstContext: e };
    } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Du(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, xt(e, r);
  }
  function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Iu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (F & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, xt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, xt(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
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
  function nl(e, t, n, r) {
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
            var C = e, P = i;
            switch (h = t, k = n, P.tag) {
              case 1:
                if (C = P.payload, typeof C == "function") {
                  g = C.call(k, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = P.payload, h = typeof C == "function" ? C.call(k, g, h) : C, h == null) break e;
                g = _({}, g, h);
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
      nn |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var ur = {}, ht = It(ur), or = It(ur), ir = It(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function ju(e, t) {
    switch (J(ir, t), J(or, e), J(ht, ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
    }
    ee(ht), J(ht, t);
  }
  function Nn() {
    ee(ht), ee(or), ee(ir);
  }
  function ds(e) {
    en(ir.current);
    var t = en(ht.current), n = Fl(t, e.type);
    t !== n && (J(or, e), J(ht, n));
  }
  function Fu(e) {
    or.current === e && (ee(ht), ee(or));
  }
  var ue = It(0);
  function rl(e) {
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
  var Uu = [];
  function Vu() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var ll = ye.ReactCurrentDispatcher, Au = ye.ReactCurrentBatchConfig, tn = 0, oe = null, me = null, we = null, ul = !1, sr = !1, ar = 0, nf = 0;
  function Ne() {
    throw Error(m(321));
  }
  function Hu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
    return !0;
  }
  function Bu(e, t, n, r, l, u) {
    if (tn = u, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? of : sf, e = n(r, l), sr) {
      u = 0;
      do {
        if (sr = !1, ar = 0, 25 <= u) throw Error(m(301));
        u += 1, we = me = null, t.updateQueue = null, ll.current = af, e = n(r, l);
      } while (sr);
    }
    if (ll.current = sl, t = me !== null && me.next !== null, tn = 0, we = me = oe = null, ul = !1, t) throw Error(m(300));
    return e;
  }
  function Wu() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return we === null ? oe.memoizedState = we = e : we = we.next = e, we;
  }
  function qe() {
    if (me === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = we === null ? oe.memoizedState : we.next;
    if (t !== null) we = t, me = e;
    else {
      if (e === null) throw Error(m(310));
      me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, we === null ? oe.memoizedState = we = e : we = we.next = e;
    }
    return we;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $u(e) {
    var t = qe(), n = t.queue;
    if (n === null) throw Error(m(311));
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
        if ((tn & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, oe.lanes |= y, nn |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, lt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, oe.lanes |= u, nn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qu(e) {
    var t = qe(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      lt(u, t.memoizedState) || (je = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ps() {
  }
  function ms(e, t) {
    var n = oe, r = qe(), l = t(), u = !lt(r.memoizedState, l);
    if (u && (r.memoizedState = l, je = !0), r = r.queue, Ku(ys.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || we !== null && we.memoizedState.tag & 1) {
      if (n.flags |= 2048, fr(9, vs.bind(null, n, r, l, t), void 0, null), Se === null) throw Error(m(349));
      (tn & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !lt(e, n);
    } catch {
      return !0;
    }
  }
  function ws(e) {
    var t = xt(e, 1);
    t !== null && at(t, e, 1, -1);
  }
  function Ss(e) {
    var t = vt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = uf.bind(null, oe, e), [t.memoizedState, e];
  }
  function fr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return qe().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = vt();
    oe.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function il(e, t, n, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (u = o.destroy, r !== null && Hu(r, o.deps)) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    oe.flags |= e, l.memoizedState = fr(1 | t, n, u, r);
  }
  function Es(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Ku(e, t) {
    return il(2048, 8, e, t);
  }
  function xs(e, t) {
    return il(4, 2, e, t);
  }
  function _s(e, t) {
    return il(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ps(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(4, 4, Cs.bind(null, t, e), n);
  }
  function Yu() {
  }
  function Ns(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function zs(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Hu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ls(e, t, n) {
    return (tn & 21) === 0 ? (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n) : (lt(n, t) || (n = ui(), oe.lanes |= n, nn |= n, e.baseState = !0), t);
  }
  function rf(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Au.transition;
    Au.transition = {};
    try {
      e(!1), t();
    } finally {
      K = n, Au.transition = r;
    }
  }
  function Ts() {
    return qe().memoizedState;
  }
  function lf(e, t, n) {
    var r = Wt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ms(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = Me();
      at(n, e, r, l), Os(n, t, r);
    }
  }
  function uf(e, t, n) {
    var r = Wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ms(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, i = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = i, lt(i, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Du(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ss(e, t, l, r), n !== null && (l = Me(), at(n, e, r, l), Os(n, t, r));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe;
  }
  function Ms(e, t) {
    sr = ul = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
    }
  }
  var sl = { readContext: Je, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: !1 }, of = { readContext: Je, useCallback: function(e, t) {
    return vt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Je, useEffect: Es, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(
      4194308,
      4,
      Cs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ol(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ol(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = vt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = vt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lf.bind(null, oe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = vt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ss, useDebugValue: Yu, useDeferredValue: function(e) {
    return vt().memoizedState = e;
  }, useTransition: function() {
    var e = Ss(!1), t = e[0];
    return e = rf.bind(null, e[1]), vt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = oe, l = vt();
    if (re) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), Se === null) throw Error(m(349));
      (tn & 30) !== 0 || hs(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, Es(ys.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, fr(9, vs.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = vt(), t = Se.identifierPrefix;
    if (re) {
      var n = Et, r = kt;
      n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = nf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: Je,
    useCallback: Ns,
    useContext: Je,
    useEffect: Ku,
    useImperativeHandle: Ps,
    useInsertionEffect: xs,
    useLayoutEffect: _s,
    useMemo: zs,
    useReducer: $u,
    useRef: ks,
    useState: function() {
      return $u(cr);
    },
    useDebugValue: Yu,
    useDeferredValue: function(e) {
      var t = qe();
      return Ls(t, me.memoizedState, e);
    },
    useTransition: function() {
      var e = $u(cr)[0], t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, af = { readContext: Je, useCallback: Ns, useContext: Je, useEffect: Ku, useImperativeHandle: Ps, useInsertionEffect: xs, useLayoutEffect: _s, useMemo: zs, useReducer: Qu, useRef: ks, useState: function() {
    return Qu(cr);
  }, useDebugValue: Yu, useDeferredValue: function(e) {
    var t = qe();
    return me === null ? t.memoizedState = e : Ls(t, me.memoizedState, e);
  }, useTransition: function() {
    var e = Qu(cr)[0], t = qe().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: Ts, unstable_isNewReconciler: !1 };
  function ot(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Me(), l = Wt(e), u = _t(r, l);
    u.payload = t, n != null && (u.callback = n), t = Vt(e, u, l), t !== null && (at(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Me(), l = Wt(e), u = _t(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Vt(e, u, l), t !== null && (at(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Me(), r = Wt(e), l = _t(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Vt(e, l, r), t !== null && (at(t, e, r, n), tl(t, e, r));
  } };
  function Ds(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, u) : !0;
  }
  function Is(e, t, n) {
    var r = !1, l = jt, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Je(u) : (l = Ie(t) ? Zt : Pe.current, r = t.contextTypes, u = (r = r != null) ? Sn(e, l) : jt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function js(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Gu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Iu(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Je(u) : (u = Ie(t) ? Zt : Pe.current, l.context = Sn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Xu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
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
  function Zu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ju(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      vl || (vl = !0, po = r), Ju(e, t);
    }, n;
  }
  function Us(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ju(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ju(e, t), typeof r != "function" && (Ht === null ? Ht = /* @__PURE__ */ new Set([this]) : Ht.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = _f.bind(null, e, t, n), t.then(e, e));
  }
  function As(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var ff = ye.ReactCurrentOwner, je = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Pn(t, l), r = Bu(e, t, n, r, u, l), n = Wu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (re && n && Cu(t), t.flags |= 1, Re(e, t, r, l), t.child);
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !So(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, $s(e, t, u, r, l)) : (e = El(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(o, r) && e.ref === t.ref) return Ct(e, t, l);
    }
    return t.flags |= 1, e = Qt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $s(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref) if (je = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (je = !0);
      else return t.lanes = e.lanes, Ct(e, t, l);
    }
    return qu(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Tn, Ye), Ye |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Tn, Ye), Ye |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, J(Tn, Ye), Ye |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, J(Tn, Ye), Ye |= r;
    return Re(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function qu(e, t, n, r, l) {
    var u = Ie(n) ? Zt : Pe.current;
    return u = Sn(t, u), Pn(t, l), n = Bu(e, t, n, r, u, l), r = Wu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ct(e, t, l)) : (re && r && Cu(t), t.flags |= 1, Re(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if (Ie(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if (Pn(t, l), t.stateNode === null) fl(e, t), Is(t, n, r), Gu(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, i = t.memoizedProps;
      o.props = i;
      var s = o.context, p = n.contextType;
      typeof p == "object" && p !== null ? p = Je(p) : (p = Ie(n) ? Zt : Pe.current, p = Sn(t, p));
      var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && js(t, o, r, p), Ut = !1;
      var h = t.memoizedState;
      o.state = h, nl(t, r, o, l), s = t.memoizedState, i !== r || h !== s || De.current || Ut ? (typeof y == "function" && (Xu(t, n, y, r), s = t.memoizedState), (i = Ut || Ds(t, n, i, r, h, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, as(e, t), i = t.memoizedProps, p = t.type === t.elementType ? i : ot(t.type, i), o.props = p, g = t.pendingProps, h = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Je(s) : (s = Ie(n) ? Zt : Pe.current, s = Sn(t, s));
      var k = n.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || h !== s) && js(t, o, r, s), Ut = !1, h = t.memoizedState, o.state = h, nl(t, r, o, l);
      var C = t.memoizedState;
      i !== g || h !== C || De.current || Ut ? (typeof k == "function" && (Xu(t, n, k, r), C = t.memoizedState), (p = Ut || Ds(t, n, p, r, h, C, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), o.props = r, o.state = C, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bu(e, t, n, r, u, l);
  }
  function bu(e, t, n, r, l, u) {
    Ks(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && qi(t, n, !1), Ct(e, t, u);
    r = t.stateNode, ff.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = _n(t, e.child, null, u), t.child = _n(t, null, i, u)) : Re(e, t, i, u), t.memoizedState = r.state, l && qi(t, n, !0), t.child;
  }
  function Xs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), ju(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return xn(), Lu(l), t.flags |= 256, Re(e, t, n, r), t.child;
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = ue.current, u = !1, o = (t.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), J(ue, l & 1), e === null)
      return zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = xl(o, r, 0, null), e = on(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = to(n), t.memoizedState = eo, e) : no(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return df(e, t, o, r, i, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Qt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = Qt(i, u) : (u = on(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
    }
    return u = e.child, e = u.sibling, r = Qt(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function no(e, t) {
    return t = xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && Lu(r), _n(t, e.child, null, n), e = no(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function df(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zu(Error(m(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = xl({ mode: "visible", children: r.children }, l, 0, null), u = on(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && _n(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, u);
    if ((t.mode & 1) === 0) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Zu(u, r, void 0), cl(e, t, o, r);
    }
    if (i = (o & e.childLanes) !== 0, je || i) {
      if (r = Se, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, xt(e, l), at(r, e, l, -1));
      }
      return wo(), r = Zu(Error(m(421))), cl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cf.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Ke = Dt(l.nextSibling), Qe = t, re = !0, ut = null, e !== null && (Ge[Ze++] = kt, Ge[Ze++] = Et, Ge[Ze++] = Jt, kt = e.id, Et = e.overflow, Jt = t), t = no(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ou(e.return, t, n);
  }
  function ro(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Re(e, t, r.children, n), r = ue.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (J(ue, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ro(t, !0, n, null, u);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ct(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        Xs(t), xn();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        Ie(t.type) && Yr(t);
        break;
      case 4:
        ju(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        J(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(ue, ue.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (J(ue, ue.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
        J(ue, ue.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), J(ue, ue.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Qs(e, t, n);
    }
    return Ct(e, t, n);
  }
  var bs, lo, ea, ta;
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
  }, lo = function() {
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, en(ht.current);
      var u = null;
      switch (n) {
        case "input":
          l = Ol(e, l), r = Ol(e, r), u = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = jl(e, l), r = jl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Ul(n, r);
      var o;
      n = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (le.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l?.[p], r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (u || (u = []), u.push(
          p,
          n
        )), n = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (le.hasOwnProperty(p) ? (s != null && p === "onScroll" && b("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      n && (u = u || []).push("style", n);
      var p = u;
      (t.updateQueue = p) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
    if (!re) switch (e.tailMode) {
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
  function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch (Pu(t), t.tag) {
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
        return ze(t), null;
      case 1:
        return Ie(t.type) && Kr(), ze(t), null;
      case 3:
        return r = t.stateNode, Nn(), ee(De), ee(Pe), Vu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ut !== null && (vo(ut), ut = null))), lo(e, t), ze(t), null;
      case 5:
        Fu(t);
        var l = en(ir.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return ze(t), null;
          }
          if (e = en(ht.current), Jr(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[mt] = t, r[nr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                b("cancel", r), b("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) b(bn[l], r);
                break;
              case "source":
                b("error", r);
                break;
              case "img":
              case "image":
              case "link":
                b(
                  "error",
                  r
                ), b("load", r);
                break;
              case "details":
                b("toggle", r);
                break;
              case "input":
                Io(r, u), b("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, b("invalid", r);
                break;
              case "textarea":
                Uo(r, u), b("invalid", r);
            }
            Ul(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Wr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Wr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : le.hasOwnProperty(o) && i != null && o === "onScroll" && b("scroll", r);
            }
            switch (n) {
              case "input":
                Sr(r), Fo(r, u, !0);
                break;
              case "textarea":
                Sr(r), Ao(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ho(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[mt] = t, e[nr] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Vl(n, r), n) {
                case "dialog":
                  b("cancel", e), b("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  b("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) b(bn[l], e);
                  l = r;
                  break;
                case "source":
                  b("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  b(
                    "error",
                    e
                  ), b("load", e), l = r;
                  break;
                case "details":
                  b("toggle", e), l = r;
                  break;
                case "input":
                  Io(e, r), l = Ol(e, r), b("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), b("invalid", e);
                  break;
                case "textarea":
                  Uo(e, r), l = jl(e, r), b("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? $o(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bo(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (le.hasOwnProperty(u) ? s != null && u === "onScroll" && b("scroll", e) : s != null && Te(e, u, s, o));
              }
              switch (n) {
                case "input":
                  Sr(e), Fo(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), Ao(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? sn(e, !!r.multiple, u, !1) : r.defaultValue != null && sn(
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
        return ze(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = en(ir.current), en(ht.current), Jr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (u = r.nodeValue !== n) && (e = Qe, e !== null)) switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
        }
        return ze(t), null;
      case 13:
        if (ee(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (re && Ke !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ls(), xn(), t.flags |= 98560, u = !1;
          else if (u = Jr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[mt] = t;
            } else xn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ze(t), u = !1;
          } else ut !== null && (vo(ut), ut = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ue.current & 1) !== 0 ? he === 0 && (he = 3) : wo())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
      case 4:
        return Nn(), lo(e, t), e === null && er(t.stateNode.containerInfo), ze(t), null;
      case 10:
        return Mu(t.type._context), ze(t), null;
      case 17:
        return Ie(t.type) && Kr(), ze(t), null;
      case 19:
        if (ee(ue), u = t.memoizedState, u === null) return ze(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) dr(u, !1);
        else {
          if (he !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = rl(e), o !== null) {
              for (t.flags |= 128, dr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return J(ue, ue.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && fe() > Rn && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !re) return ze(t), null;
          } else 2 * fe() - u.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = fe(), t.sibling = null, n = ue.current, J(ue, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
      case 22:
      case 23:
        return go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ye & 1073741824) !== 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function hf(e, t) {
    switch (Pu(t), t.tag) {
      case 1:
        return Ie(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), ee(De), ee(Pe), Vu(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Fu(t), null;
      case 13:
        if (ee(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          xn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ee(ue), null;
      case 4:
        return Nn(), null;
      case 10:
        return Mu(t.type._context), null;
      case 22:
      case 23:
        return go(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Le = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ce(e, t, r);
    }
    else n.current = null;
  }
  function uo(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var na = !1;
  function yf(e, t) {
    if (yu = Mr, e = Di(), au(e)) {
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
    for (gu = { focusedElem: e, selectionRange: n }, Mr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
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
              var P = C.memoizedProps, de = C.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? P : ot(t.type, P), de);
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
        ce(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, E = e;
        break;
      }
      E = t.return;
    }
    return C = na, na = !1, C;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && uo(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
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
  function oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[nr], delete t[Eu], delete t[qc], delete t[bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
  }
  var xe = null, it = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function") try {
      pt.onCommitFiberUnmount(Pr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Le || Ln(n, t);
      case 6:
        var r = xe, l = it;
        xe = null, At(e, t, n), xe = r, it = l, xe !== null && (it ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
        break;
      case 18:
        xe !== null && (it ? (e = xe, n = n.stateNode, e.nodeType === 8 ? ku(e.parentNode, n) : e.nodeType === 1 && ku(e, n), Qn(e)) : ku(xe, n.stateNode));
        break;
      case 4:
        r = xe, l = it, xe = n.stateNode.containerInfo, it = !0, At(e, t, n), xe = r, it = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && uo(n, t, o), l = l.next;
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!Le && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          ce(n, t, i);
        }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, At(e, t, n), Le = r) : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vf()), t.forEach(function(r) {
        var l = Pf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function st(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              xe = i.stateNode, it = !1;
              break e;
            case 3:
              xe = i.stateNode.containerInfo, it = !0;
              break e;
            case 4:
              xe = i.stateNode.containerInfo, it = !0;
              break e;
          }
          i = i.return;
        }
        if (xe === null) throw Error(m(160));
        oa(u, o, l), xe = null, it = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        ce(l, t, p);
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
        if (st(t, e), yt(e), r & 4) {
          try {
            pr(3, e, e.return), pl(3, e);
          } catch (P) {
            ce(e, e.return, P);
          }
          try {
            pr(5, e, e.return);
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        break;
      case 1:
        st(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return);
        break;
      case 5:
        if (st(t, e), yt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && jo(l, u), Vl(i, o);
            var p = Vl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? $o(l, g) : y === "dangerouslySetInnerHTML" ? Bo(l, g) : y === "children" ? Dn(l, g) : Te(l, y, g, p);
            }
            switch (i) {
              case "input":
                Dl(l, u);
                break;
              case "textarea":
                Vo(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var k = u.value;
                k != null ? sn(l, !!u.multiple, k, !1) : h !== !!u.multiple && (u.defaultValue != null ? sn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        break;
      case 6:
        if (st(t, e), yt(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (P) {
            ce(e, e.return, P);
          }
        }
        break;
      case 3:
        if (st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (P) {
          ce(e, e.return, P);
        }
        break;
      case 4:
        st(t, e), yt(e);
        break;
      case 13:
        st(t, e), yt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (fo = fe())), r & 4 && ia(e);
        break;
      case 22:
        if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (p = Le) || y, st(t, e), Le = p) : st(t, e), yt(e), r & 8192) {
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
                  Ln(h, h.return);
                  var C = h.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                    } catch (P) {
                      ce(r, n, P);
                    }
                  }
                  break;
                case 5:
                  Ln(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              k !== null ? (k.return = h, E = k) : fa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Wo("display", o));
                } catch (P) {
                  ce(e, e.return, P);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (P) {
                ce(e, e.return, P);
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
        st(t, e), yt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        st(
          t,
          e
        ), yt(e);
    }
  }
  function yt(e) {
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
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ""), r.flags &= -33);
            var u = ua(e);
            so(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = ua(e);
            io(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ce(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e, t, n) {
    E = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Le;
          i = dl;
          var p = Le;
          if (dl = o, (Le = s) && !p) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? da(l) : s !== null ? (s.return = o, E = s) : da(l);
          for (; u !== null; ) E = u, aa(u), u = u.sibling;
          E = l, dl = i, Le = p;
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, E = u) : ca(e);
    }
  }
  function ca(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
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
          Le || t.flags & 512 && oo(t);
        } catch (h) {
          ce(t, t.return, h);
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
  function fa(e) {
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
  function da(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              ce(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ce(t, l, s);
              }
            }
            var u = t.return;
            try {
              oo(t);
            } catch (s) {
              ce(t, u, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              ce(t, o, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
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
  var wf = Math.ceil, ml = ye.ReactCurrentDispatcher, ao = ye.ReactCurrentOwner, be = ye.ReactCurrentBatchConfig, F = 0, Se = null, pe = null, _e = 0, Ye = 0, Tn = It(0), he = 0, mr = null, nn = 0, hl = 0, co = 0, hr = null, Fe = null, fo = 0, Rn = 1 / 0, Pt = null, vl = !1, po = null, Ht = null, yl = !1, Bt = null, gl = 0, vr = 0, mo = null, wl = -1, Sl = 0;
  function Me() {
    return (F & 6) !== 0 ? fe() : wl !== -1 ? wl : wl = fe();
  }
  function Wt(e) {
    return (e.mode & 1) === 0 ? 1 : (F & 2) !== 0 && _e !== 0 ? _e & -_e : tf.transition !== null ? (Sl === 0 && (Sl = ui()), Sl) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mi(e.type)), e);
  }
  function at(e, t, n, r) {
    if (50 < vr) throw vr = 0, mo = null, Error(m(185));
    An(e, n, r), ((F & 2) === 0 || e !== Se) && (e === Se && ((F & 2) === 0 && (hl |= n), he === 4 && $t(e, _e)), Ue(e, r), n === 1 && F === 0 && (t.mode & 1) === 0 && (Rn = fe() + 500, Xr && Ft()));
  }
  function Ue(e, t) {
    var n = e.callbackNode;
    tc(e, t);
    var r = Lr(e, e === Se ? _e : 0);
    if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ni(n), t === 1) e.tag === 0 ? ef(ma.bind(null, e)) : bi(ma.bind(null, e)), Zc(function() {
        (F & 6) === 0 && Ft();
      }), n = null;
      else {
        switch (oi(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = ri;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = li;
            break;
          default:
            n = Cr;
        }
        n = Ea(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (wl = -1, Sl = 0, (F & 6) !== 0) throw Error(m(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === Se ? _e : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = F;
      F |= 2;
      var u = va();
      (Se !== e || _e !== t) && (Pt = null, Rn = fe() + 500, ln(e, t));
      do
        try {
          Ef();
          break;
        } catch (i) {
          ha(e, i);
        }
      while (!0);
      Ru(), ml.current = u, F = l, pe !== null ? t = 0 : (Se = null, _e = 0, t = he);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = ho(e, l))), t === 1) throw n = mr, ln(e, 0), $t(e, r), Ue(e, fe()), n;
      if (t === 6) $t(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Sf(l) && (t = kl(e, r), t === 2 && (u = Yl(e), u !== 0 && (r = u, t = ho(e, u))), t === 1)) throw n = mr, ln(e, 0), $t(e, r), Ue(e, fe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Fe, Pt);
            break;
          case 3:
            if ($t(e, r), (r & 130023424) === r && (t = fo + 500 - fe(), 10 < t)) {
              if (Lr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Me(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Su(un.bind(null, e, Fe, Pt), t);
              break;
            }
            un(e, Fe, Pt);
            break;
          case 4:
            if ($t(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - rt(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Su(un.bind(null, e, Fe, Pt), r);
              break;
            }
            un(e, Fe, Pt);
            break;
          case 5:
            un(e, Fe, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ue(e, fe()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function ho(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = kl(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && vo(t)), e;
  }
  function vo(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e);
  }
  function Sf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!lt(u(), l)) return !1;
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
  function $t(e, t) {
    for (t &= ~co, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - rt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ma(e) {
    if ((F & 6) !== 0) throw Error(m(327));
    Mn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return Ue(e, fe()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = ho(e, r));
    }
    if (n === 1) throw n = mr, ln(e, 0), $t(e, t), Ue(e, fe()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, Fe, Pt), Ue(e, fe()), null;
  }
  function yo(e, t) {
    var n = F;
    F |= 1;
    try {
      return e(t);
    } finally {
      F = n, F === 0 && (Rn = fe() + 500, Xr && Ft());
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (F & 6) === 0 && Mn();
    var t = F;
    F |= 1;
    var n = be.transition, r = K;
    try {
      if (be.transition = null, K = 1, e) return e();
    } finally {
      K = r, be.transition = n, F = t, (F & 6) === 0 && Ft();
    }
  }
  function go() {
    Ye = Tn.current, ee(Tn);
  }
  function ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Gc(n)), pe !== null) for (n = pe.return; n !== null; ) {
      var r = n;
      switch (Pu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          Nn(), ee(De), ee(Pe), Vu();
          break;
        case 5:
          Fu(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          ee(ue);
          break;
        case 19:
          ee(ue);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          go();
      }
      n = n.return;
    }
    if (Se = e, pe = e = Qt(e.current, null), _e = Ye = t, he = 0, mr = null, co = hl = nn = 0, Fe = hr = null, bt !== null) {
      for (t = 0; t < bt.length; t++) if (n = bt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      bt = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = pe;
      try {
        if (Ru(), ll.current = sl, ul) {
          for (var r = oe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ul = !1;
        }
        if (tn = 0, we = me = oe = null, sr = !1, ar = 0, ao.current = null, n === null || n.return === null) {
          he = 1, mr = t, pe = null;
          break;
        }
        e: {
          var u = e, o = n.return, i = n, s = t;
          if (t = _e, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if ((y.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = As(o);
            if (k !== null) {
              k.flags &= -257, Hs(k, o, i, u, t), k.mode & 1 && Vs(u, p, t), t = k, s = p;
              var C = t.updateQueue;
              if (C === null) {
                var P = /* @__PURE__ */ new Set();
                P.add(s), t.updateQueue = P;
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                Vs(u, p, t), wo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (re && i.mode & 1) {
            var de = As(o);
            if (de !== null) {
              (de.flags & 65536) === 0 && (de.flags |= 256), Hs(de, o, i, u, t), Lu(zn(s, i));
              break e;
            }
          }
          u = s = zn(s, i), he !== 4 && (he = 2), hr === null ? hr = [u] : hr.push(u), u = o;
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
      } catch (N) {
        t = N, pe === n && n !== null && (pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = ml.current;
    return ml.current = sl, e === null ? sl : e;
  }
  function wo() {
    (he === 0 || he === 3 || he === 2) && (he = 4), Se === null || (nn & 268435455) === 0 && (hl & 268435455) === 0 || $t(Se, _e);
  }
  function kl(e, t) {
    var n = F;
    F |= 2;
    var r = va();
    (Se !== e || _e !== t) && (Pt = null, ln(e, t));
    do
      try {
        kf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (Ru(), F = n, ml.current = r, pe !== null) throw Error(m(261));
    return Se = null, _e = 0, he;
  }
  function kf() {
    for (; pe !== null; ) ya(pe);
  }
  function Ef() {
    for (; pe !== null && !Ka(); ) ya(pe);
  }
  function ya(e) {
    var t = ka(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps, t === null ? ga(e) : pe = t, ao.current = null;
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = mf(n, t, Ye), n !== null) {
          pe = n;
          return;
        }
      } else {
        if (n = hf(n, t), n !== null) {
          n.flags &= 32767, pe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          he = 6, pe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        pe = t;
        return;
      }
      pe = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function un(e, t, n) {
    var r = K, l = be.transition;
    try {
      be.transition = null, K = 1, xf(e, t, n, r);
    } finally {
      be.transition = l, K = r;
    }
    return null;
  }
  function xf(e, t, n, r) {
    do
      Mn();
    while (Bt !== null);
    if ((F & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (nc(e, u), e === Se && (pe = Se = null, _e = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || yl || (yl = !0, Ea(Cr, function() {
      return Mn(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = be.transition, be.transition = null;
      var o = K;
      K = 1;
      var i = F;
      F |= 4, ao.current = null, yf(e, n), sa(n, e), Bc(gu), Mr = !!yu, gu = yu = null, e.current = n, gf(n), Ya(), F = i, K = o, be.transition = u;
    } else e.current = n;
    if (yl && (yl = !1, Bt = e, gl = l), u = e.pendingLanes, u === 0 && (Ht = null), Za(n.stateNode), Ue(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw vl = !1, e = po, po = null, e;
    return (gl & 1) !== 0 && e.tag !== 0 && Mn(), u = e.pendingLanes, (u & 1) !== 0 ? e === mo ? vr++ : (vr = 0, mo = e) : vr = 0, Ft(), null;
  }
  function Mn() {
    if (Bt !== null) {
      var e = oi(gl), t = be.transition, n = K;
      try {
        if (be.transition = null, K = 16 > e ? 16 : e, Bt === null) var r = !1;
        else {
          if (e = Bt, Bt = null, gl = 0, (F & 6) !== 0) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
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
                      if (ra(y), y === p) {
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
                  var P = C.child;
                  if (P !== null) {
                    C.child = null;
                    do {
                      var de = P.sibling;
                      P.sibling = null, P = de;
                    } while (P !== null);
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
                    pl(9, i);
                }
              } catch (N) {
                ce(i, i.return, N);
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
          if (F = l, Ft(), pt && typeof pt.onPostCommitFiberRoot == "function") try {
            pt.onPostCommitFiberRoot(Pr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        K = n, be.transition = t;
      }
    }
    return !1;
  }
  function wa(e, t, n) {
    t = zn(n, t), t = Fs(e, t, 1), e = Vt(e, t, 1), t = Me(), e !== null && (An(e, 1, t), Ue(e, t));
  }
  function ce(e, t, n) {
    if (e.tag === 3) wa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r))) {
          e = zn(n, e), e = Us(t, e, 1), t = Vt(t, e, 1), e = Me(), t !== null && (An(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function _f(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (_e & n) === n && (he === 4 || he === 3 && (_e & 130023424) === _e && 500 > fe() - fo ? ln(e, 0) : co |= n), Ue(e, t);
  }
  function Sa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = zr, zr <<= 1, (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Me();
    e = xt(e, t), e !== null && (An(e, t, n), Ue(e, n));
  }
  function Cf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Sa(e, n);
  }
  function Pf(e, t) {
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
    r !== null && r.delete(t), Sa(e, n);
  }
  var ka;
  ka = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || De.current) je = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return je = !1, pf(e, t, n);
      je = (e.flags & 131072) !== 0;
    }
    else je = !1, re && (t.flags & 1048576) !== 0 && es(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = Sn(t, Pe.current);
        Pn(t, n), l = Bu(null, t, r, e, l, n);
        var u = Wu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (u = !0, Yr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Iu(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Gu(t, r, e, n), t = bu(null, t, r, !0, u, n)) : (t.tag = 0, re && u && Cu(t), Re(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = zf(r), e = ot(r, e), l) {
            case 0:
              t = qu(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, ot(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ot(r, l), qu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ot(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Xs(t), e === null) throw Error(m(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, as(e, t), nl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = zn(Error(m(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(m(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (Ke = Dt(t.stateNode.containerInfo.firstChild), Qe = t, re = !0, ut = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xn(), r === l) {
              t = Ct(e, t, n);
              break e;
            }
            Re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && zu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, wu(r, l) ? o = null : u !== null && wu(r, u) && (t.flags |= 32), Ks(e, t), Re(e, t, o, n), t.child;
      case 6:
        return e === null && zu(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return ju(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : Re(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ot(r, l), Bs(e, t, r, l, n);
      case 7:
        return Re(e, t, t.pendingProps, n), t.child;
      case 8:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, J(br, r._currentValue), r._currentValue = o, u !== null) if (lt(u.value, o)) {
            if (u.children === l.children && !De.current) {
              t = Ct(e, t, n);
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
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Ou(
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
              o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ou(o, n, t), o = u.sibling;
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
          Re(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = Je(l), r = r(l), t.flags |= 1, Re(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ot(r, t.pendingProps), l = ot(r.type, l), Ws(e, t, r, l, n);
      case 15:
        return $s(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ot(r, l), fl(e, t), t.tag = 1, Ie(r) ? (e = !0, Yr(t)) : e = !1, Pn(t, n), Is(t, r, l), Gu(t, r, l, n), bu(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ea(e, t) {
    return ti(e, t);
  }
  function Nf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(e, t, n, r) {
    return new Nf(e, t, n, r);
  }
  function So(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function zf(e) {
    if (typeof e == "function") return So(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ft) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function El(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") So(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Ee:
        return on(n.children, l, u, t);
      case Xe:
        o = 8, l |= 8;
        break;
      case Nt:
        return e = et(12, n, t, l | 2), e.elementType = Nt, e.lanes = u, e;
      case Be:
        return e = et(13, n, t, l), e.elementType = Be, e.lanes = u, e;
      case nt:
        return e = et(19, n, t, l), e.elementType = nt, e.lanes = u, e;
      case ae:
        return xl(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gt:
            o = 10;
            break e;
          case Yt:
            o = 9;
            break e;
          case ft:
            o = 11;
            break e;
          case dt:
            o = 14;
            break e;
          case Oe:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = et(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function on(e, t, n, r) {
    return e = et(7, e, r, t), e.lanes = n, e;
  }
  function xl(e, t, n, r) {
    return e = et(22, e, r, t), e.elementType = ae, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ko(e, t, n) {
    return e = et(6, e, null, t), e.lanes = n, e;
  }
  function Eo(e, t, n) {
    return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Lf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function xo(e, t, n, r, l, u, o, i, s) {
    return e = new Lf(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = et(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(u), e;
  }
  function Tf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ge, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function xa(e) {
    if (!e) return jt;
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
            if (Ie(t.type)) {
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
      if (Ie(n)) return Ji(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, u, o, i, s) {
    return e = xo(n, r, !0, e, l, u, o, i, s), e.context = xa(null), n = e.current, r = Me(), l = Wt(n), u = _t(r, l), u.callback = t ?? null, Vt(n, u, l), e.current.lanes = l, An(e, l, r), Ue(e, r), e;
  }
  function _l(e, t, n, r) {
    var l = t.current, u = Me(), o = Wt(l);
    return n = xa(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(l, t, o), e !== null && (at(e, l, o, u), tl(e, l, o)), o;
  }
  function Cl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ca(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _o(e, t) {
    Ca(e, t), (e = e.alternate) && Ca(e, t);
  }
  function Rf() {
    return null;
  }
  var Pa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Co(e) {
    this._internalRoot = e;
  }
  Pl.prototype.render = Co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    _l(e, t, null, null);
  }, Pl.prototype.unmount = Co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rn(function() {
        _l(null, e, null, null);
      }), t[wt] = null;
    }
  };
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ai();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
      Rt.splice(n, 0, e), n === 0 && di(e);
    }
  };
  function Po(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function Mf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Cl(o);
          u.call(p);
        };
      }
      var o = _a(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = o, e[wt] = o.current, er(e.nodeType === 8 ? e.parentNode : e), rn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = xo(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = s, e[wt] = s.current, er(e.nodeType === 8 ? e.parentNode : e), rn(function() {
      _l(t, s, n, r);
    }), s;
  }
  function zl(e, t, n, r, l) {
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
      _l(t, o, e, l);
    } else o = Mf(n, t, e, l, r);
    return Cl(o);
  }
  ii = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), Ue(t, fe()), (F & 6) === 0 && (Rn = fe() + 500, Ft()));
        }
        break;
      case 13:
        rn(function() {
          var r = xt(e, 1);
          if (r !== null) {
            var l = Me();
            at(r, e, 1, l);
          }
        }), _o(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = xt(e, 134217728);
      if (t !== null) {
        var n = Me();
        at(t, e, 134217728, n);
      }
      _o(e, 134217728);
    }
  }, si = function(e) {
    if (e.tag === 13) {
      var t = Wt(e), n = xt(e, t);
      if (n !== null) {
        var r = Me();
        at(n, e, t, r);
      }
      _o(e, t);
    }
  }, ai = function() {
    return K;
  }, ci = function(e, t) {
    var n = K;
    try {
      return K = e, t();
    } finally {
      K = n;
    }
  }, Bl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l) throw Error(m(90));
              Do(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Vo(e, n);
        break;
      case "select":
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Xo = yo, Go = rn;
  var Of = { usingClientEntryPoint: !1, Events: [rr, gn, Qr, Ko, Yo, yo] }, yr = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Df = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Rf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber) try {
      Pr = Ll.inject(Df), pt = Ll;
    } catch {
    }
  }
  return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of, Ve.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Po(t)) throw Error(m(200));
    return Tf(e, t, null, n);
  }, Ve.createRoot = function(e, t) {
    if (!Po(e)) throw Error(m(299));
    var n = !1, r = "", l = Pa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = xo(e, 1, !1, null, null, n, !1, r, l), e[wt] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Co(t);
  }, Ve.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = bo(t), e = e === null ? null : e.stateNode, e;
  }, Ve.flushSync = function(e) {
    return rn(e);
  }, Ve.hydrate = function(e, t, n) {
    if (!Nl(t)) throw Error(m(200));
    return zl(null, e, t, !0, n);
  }, Ve.hydrateRoot = function(e, t, n) {
    if (!Po(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = Pa;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = _a(t, null, e, 1, n ?? null, l, !1, u, o), e[wt] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Pl(t);
  }, Ve.render = function(e, t, n) {
    if (!Nl(t)) throw Error(m(200));
    return zl(null, e, t, !1, n);
  }, Ve.unmountComponentAtNode = function(e) {
    if (!Nl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rn(function() {
      zl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wt] = null;
      });
    }), !0) : !1;
  }, Ve.unstable_batchedUpdates = yo, Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Nl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return zl(e, t, n, !1, r);
  }, Ve.version = "18.3.1-next-f1338f8080-20240426", Ve;
}
var Ia;
function Bf() {
  if (Ia) return Lo.exports;
  Ia = 1;
  function x() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
      } catch (O) {
        console.error(O);
      }
  }
  return x(), Lo.exports = Hf(), Lo.exports;
}
var ja;
function Wf() {
  if (ja) return Tl;
  ja = 1;
  var x = Bf();
  return Tl.createRoot = x.createRoot, Tl.hydrateRoot = x.hydrateRoot, Tl;
}
var $f = Wf();
let Ml = !1;
const wr = [];
function Mo() {
  Ml = !0;
  for (const x of wr)
    x();
  wr.length = 0;
}
const Fa = "material-symbols-directory-tree";
if (typeof document < "u" && !document.getElementById(Fa)) {
  const x = document.createElement("link");
  x.id = Fa, x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap", document.head.appendChild(x), document.fonts.ready.then(() => {
    document.fonts.load("18px 'Material Symbols Outlined'").then(() => Mo()).catch(() => Mo());
  });
} else
  document.fonts.check("18px 'Material Symbols Outlined'") ? Ml = !0 : document.fonts.ready.then(() => Mo());
function Qf() {
  const [x, O] = ct.useState(Ml);
  return ct.useEffect(() => {
    if (Ml) {
      O(!0);
      return;
    }
    const m = () => O(!0);
    return wr.push(m), () => {
      const ie = wr.indexOf(m);
      ie >= 0 && wr.splice(ie, 1);
    };
  }, []), x;
}
function Kf(x) {
  switch (x.split(".").pop()?.toLowerCase() ?? "") {
    case "py":
    case "ts":
    case "tsx":
    case "js":
    case "jsx":
    case "rs":
    case "go":
    case "java":
    case "c":
    case "cpp":
    case "h":
    case "rb":
    case "php":
    case "swift":
    case "kt":
      return "code";
    case "md":
    case "mdx":
    case "txt":
    case "rst":
      return "description";
    case "json":
    case "yaml":
    case "yml":
    case "toml":
    case "xml":
    case "ini":
    case "cfg":
    case "conf":
      return "settings";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
    case "ico":
      return "image";
    case "css":
    case "scss":
    case "sass":
    case "less":
      return "palette";
    case "html":
    case "htm":
      return "web";
    case "sh":
    case "bash":
    case "zsh":
    case "fish":
      return "terminal";
    case "lock":
      return "lock";
    case "env":
      return "vpn_key";
    case "gitignore":
    case "dockerignore":
      return "visibility_off";
    default:
      return "draft";
  }
}
const Yf = {
  fontFamily: "'Material Symbols Outlined'",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: 1,
  letterSpacing: "normal",
  textTransform: "none",
  display: "inline-block",
  whiteSpace: "nowrap",
  wordWrap: "normal",
  direction: "ltr",
  fontFeatureSettings: "'liga'",
  WebkitFontSmoothing: "antialiased",
  flexShrink: 0,
  userSelect: "none"
}, Xf = (x, O, m) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "3px 6px",
  paddingLeft: `${x * 20 + 6}px`,
  borderRadius: "4px",
  cursor: O ? "pointer" : "default",
  backgroundColor: m ? "var(--st-secondary-background-color, #f0f2f6)" : "transparent",
  transition: "background-color 0.1s ease",
  userSelect: "none",
  minWidth: 0,
  overflow: "hidden"
}), Gf = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  lineHeight: "24px",
  minWidth: 0
}, Ua = ({
  name: x,
  value: O,
  path: m,
  depth: ie,
  expandDepth: le,
  color: X,
  selectable: q,
  onSelect: G
}) => {
  const M = O !== null, [te, Y] = ct.useState(ie < le), [B, U] = ct.useState(!1), Ce = Qf(), ve = ct.useCallback(() => {
    M && Y((se) => !se), q && G(m);
  }, [M, q, G, m]), W = ct.useMemo(() => M ? te ? "folder_open" : "folder" : Kf(x), [M, te, x]), $ = ct.useMemo(() => M ? X === null ? "var(--st-text-color, #262730)" : X === "primary" ? "var(--st-primary-color, #ff4b4b)" : X : "var(--st-text-color, #262730)", [M, X]), tt = ct.useMemo(() => !M || O === null ? [] : Object.entries(O).sort(([se, Te], [ye, He]) => {
    const ge = Te !== null, Ee = He !== null;
    return ge && !Ee ? -1 : !ge && Ee ? 1 : se.localeCompare(ye);
  }), [M, O]);
  return /* @__PURE__ */ Ae.jsxs("div", { children: [
    /* @__PURE__ */ Ae.jsxs(
      "div",
      {
        style: Xf(ie, q || M, B),
        onClick: ve,
        onMouseEnter: () => U(!0),
        onMouseLeave: () => U(!1),
        role: q ? "button" : void 0,
        tabIndex: q || M ? 0 : void 0,
        onKeyDown: (se) => {
          (se.key === "Enter" || se.key === " ") && (se.preventDefault(), ve());
        },
        children: [
          M ? /* @__PURE__ */ Ae.jsx(
            "span",
            {
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "16px",
                height: "16px",
                flexShrink: 0,
                transition: "transform 0.15s ease",
                transform: te ? "rotate(90deg)" : "rotate(0deg)",
                opacity: 0.6
              },
              children: /* @__PURE__ */ Ae.jsx(
                "svg",
                {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ Ae.jsx(
                    "path",
                    {
                      d: "M6 4L10 8L6 12",
                      stroke: "var(--st-text-color, #262730)",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            }
          ) : /* @__PURE__ */ Ae.jsx("span", { style: { width: "16px", flexShrink: 0 } }),
          /* @__PURE__ */ Ae.jsx(
            "span",
            {
              style: {
                ...Yf,
                color: $,
                visibility: Ce ? "visible" : "hidden"
              },
              children: W
            }
          ),
          /* @__PURE__ */ Ae.jsx("span", { style: Gf, children: x })
        ]
      }
    ),
    M && te && /* @__PURE__ */ Ae.jsx("div", { children: tt.map(([se, Te]) => /* @__PURE__ */ Ae.jsx(
      Ua,
      {
        name: se,
        value: Te,
        path: `${m}/${se}`,
        depth: ie + 1,
        expandDepth: le,
        color: X,
        selectable: q,
        onSelect: G
      },
      se
    )) })
  ] });
}, Zf = (x, O) => ({
  fontFamily: "var(--st-font, sans-serif)",
  fontSize: "var(--st-base-font-size, 14px)",
  color: "var(--st-text-color, #262730)",
  padding: "8px 4px",
  overflow: "hidden",
  ...x && {
    border: "1px solid var(--st-border-color, #e6e6e9)",
    borderRadius: "var(--st-base-radius, 0.5rem)",
    padding: "12px"
  },
  ...O && {
    maxHeight: `${O}px`,
    overflowY: "auto"
  }
}), Jf = ({
  tree: x,
  expandDepth: O,
  border: m,
  color: ie,
  selectable: le,
  height: X,
  setStateValue: q
}) => {
  const G = ct.useMemo(() => Zf(m, X), [m, X]), M = (Y) => {
    le && q("selected", Y);
  }, te = ct.useMemo(() => Object.entries(x).sort(([Y, B], [U, Ce]) => {
    const ve = B !== null, W = Ce !== null;
    return ve && !W ? -1 : !ve && W ? 1 : Y.localeCompare(U);
  }), [x]);
  return /* @__PURE__ */ Ae.jsx("div", { style: G, children: te.map(([Y, B]) => /* @__PURE__ */ Ae.jsx(
    Ua,
    {
      name: Y,
      value: B,
      path: Y,
      depth: 0,
      expandDepth: O,
      color: ie,
      selectable: le,
      onSelect: M
    },
    Y
  )) });
}, Rl = /* @__PURE__ */ new WeakMap(), qf = (x) => {
  const { data: O, parentElement: m, setStateValue: ie } = x, le = m.querySelector(".react-root");
  if (!le)
    throw new Error("Unexpected: React root element not found");
  let X = Rl.get(m);
  X || (X = $f.createRoot(le), Rl.set(m, X));
  const { tree: q, expand_depth: G, border: M, color: te, selectable: Y, height: B } = O;
  return X.render(
    /* @__PURE__ */ Ae.jsx(ct.StrictMode, { children: /* @__PURE__ */ Ae.jsx(
      Jf,
      {
        tree: q,
        expandDepth: G,
        border: M,
        color: te,
        selectable: Y,
        height: B,
        setStateValue: ie
      }
    ) })
  ), () => {
    const U = Rl.get(m);
    U && (U.unmount(), Rl.delete(m));
  };
};
export {
  qf as default
};
