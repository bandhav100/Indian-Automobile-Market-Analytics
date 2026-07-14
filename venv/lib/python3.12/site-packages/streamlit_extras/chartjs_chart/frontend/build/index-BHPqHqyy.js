var Ta = { exports: {} }, ks = {}, Oa = { exports: {} }, ht = {};
var _d;
function Xm() {
  if (_d) return ht;
  _d = 1;
  var i = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), e = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), l = /* @__PURE__ */ Symbol.for("react.provider"), u = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), d = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), y = Symbol.iterator;
  function v(P) {
    return P === null || typeof P != "object" ? null : (P = y && P[y] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, S = {};
  function b(P, F, rt) {
    this.props = P, this.context = F, this.refs = S, this.updater = rt || _;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(P, F) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, F, "setState");
  }, b.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function E() {
  }
  E.prototype = b.prototype;
  function L(P, F, rt) {
    this.props = P, this.context = F, this.refs = S, this.updater = rt || _;
  }
  var z = L.prototype = new E();
  z.constructor = L, k(z, b.prototype), z.isPureReactComponent = !0;
  var A = Array.isArray, R = Object.prototype.hasOwnProperty, V = { current: null }, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(P, F, rt) {
    var ot, dt = {}, ut = null, wt = null;
    if (F != null) for (ot in F.ref !== void 0 && (wt = F.ref), F.key !== void 0 && (ut = "" + F.key), F) R.call(F, ot) && !j.hasOwnProperty(ot) && (dt[ot] = F[ot]);
    var _t = arguments.length - 2;
    if (_t === 1) dt.children = rt;
    else if (1 < _t) {
      for (var Tt = Array(_t), ge = 0; ge < _t; ge++) Tt[ge] = arguments[ge + 2];
      dt.children = Tt;
    }
    if (P && P.defaultProps) for (ot in _t = P.defaultProps, _t) dt[ot] === void 0 && (dt[ot] = _t[ot]);
    return { $$typeof: i, type: P, key: ut, ref: wt, props: dt, _owner: V.current };
  }
  function Z(P, F) {
    return { $$typeof: i, type: P.type, key: F, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function et(P) {
    return typeof P == "object" && P !== null && P.$$typeof === i;
  }
  function nt(P) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(rt) {
      return F[rt];
    });
  }
  var st = /\/+/g;
  function xt(P, F) {
    return typeof P == "object" && P !== null && P.key != null ? nt("" + P.key) : F.toString(36);
  }
  function Mt(P, F, rt, ot, dt) {
    var ut = typeof P;
    (ut === "undefined" || ut === "boolean") && (P = null);
    var wt = !1;
    if (P === null) wt = !0;
    else switch (ut) {
      case "string":
      case "number":
        wt = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case i:
          case t:
            wt = !0;
        }
    }
    if (wt) return wt = P, dt = dt(wt), P = ot === "" ? "." + xt(wt, 0) : ot, A(dt) ? (rt = "", P != null && (rt = P.replace(st, "$&/") + "/"), Mt(dt, F, rt, "", function(ge) {
      return ge;
    })) : dt != null && (et(dt) && (dt = Z(dt, rt + (!dt.key || wt && wt.key === dt.key ? "" : ("" + dt.key).replace(st, "$&/") + "/") + P)), F.push(dt)), 1;
    if (wt = 0, ot = ot === "" ? "." : ot + ":", A(P)) for (var _t = 0; _t < P.length; _t++) {
      ut = P[_t];
      var Tt = ot + xt(ut, _t);
      wt += Mt(ut, F, rt, Tt, dt);
    }
    else if (Tt = v(P), typeof Tt == "function") for (P = Tt.call(P), _t = 0; !(ut = P.next()).done; ) ut = ut.value, Tt = ot + xt(ut, _t++), wt += Mt(ut, F, rt, Tt, dt);
    else if (ut === "object") throw F = String(P), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return wt;
  }
  function ct(P, F, rt) {
    if (P == null) return P;
    var ot = [], dt = 0;
    return Mt(P, ot, "", "", function(ut) {
      return F.call(rt, ut, dt++);
    }), ot;
  }
  function ft(P) {
    if (P._status === -1) {
      var F = P._result;
      F = F(), F.then(function(rt) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = rt);
      }, function(rt) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = rt);
      }), P._status === -1 && (P._status = 0, P._result = F);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var lt = { current: null }, U = { transition: null }, X = { ReactCurrentDispatcher: lt, ReactCurrentBatchConfig: U, ReactCurrentOwner: V };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ht.Children = { map: ct, forEach: function(P, F, rt) {
    ct(P, function() {
      F.apply(this, arguments);
    }, rt);
  }, count: function(P) {
    var F = 0;
    return ct(P, function() {
      F++;
    }), F;
  }, toArray: function(P) {
    return ct(P, function(F) {
      return F;
    }) || [];
  }, only: function(P) {
    if (!et(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, ht.Component = b, ht.Fragment = e, ht.Profiler = o, ht.PureComponent = L, ht.StrictMode = r, ht.Suspense = d, ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, ht.act = $, ht.cloneElement = function(P, F, rt) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var ot = k({}, P.props), dt = P.key, ut = P.ref, wt = P._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ut = F.ref, wt = V.current), F.key !== void 0 && (dt = "" + F.key), P.type && P.type.defaultProps) var _t = P.type.defaultProps;
      for (Tt in F) R.call(F, Tt) && !j.hasOwnProperty(Tt) && (ot[Tt] = F[Tt] === void 0 && _t !== void 0 ? _t[Tt] : F[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) ot.children = rt;
    else if (1 < Tt) {
      _t = Array(Tt);
      for (var ge = 0; ge < Tt; ge++) _t[ge] = arguments[ge + 2];
      ot.children = _t;
    }
    return { $$typeof: i, type: P.type, key: dt, ref: ut, props: ot, _owner: wt };
  }, ht.createContext = function(P) {
    return P = { $$typeof: u, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: l, _context: P }, P.Consumer = P;
  }, ht.createElement = H, ht.createFactory = function(P) {
    var F = H.bind(null, P);
    return F.type = P, F;
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(P) {
    return { $$typeof: c, render: P };
  }, ht.isValidElement = et, ht.lazy = function(P) {
    return { $$typeof: m, _payload: { _status: -1, _result: P }, _init: ft };
  }, ht.memo = function(P, F) {
    return { $$typeof: p, type: P, compare: F === void 0 ? null : F };
  }, ht.startTransition = function(P) {
    var F = U.transition;
    U.transition = {};
    try {
      P();
    } finally {
      U.transition = F;
    }
  }, ht.unstable_act = $, ht.useCallback = function(P, F) {
    return lt.current.useCallback(P, F);
  }, ht.useContext = function(P) {
    return lt.current.useContext(P);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(P) {
    return lt.current.useDeferredValue(P);
  }, ht.useEffect = function(P, F) {
    return lt.current.useEffect(P, F);
  }, ht.useId = function() {
    return lt.current.useId();
  }, ht.useImperativeHandle = function(P, F, rt) {
    return lt.current.useImperativeHandle(P, F, rt);
  }, ht.useInsertionEffect = function(P, F) {
    return lt.current.useInsertionEffect(P, F);
  }, ht.useLayoutEffect = function(P, F) {
    return lt.current.useLayoutEffect(P, F);
  }, ht.useMemo = function(P, F) {
    return lt.current.useMemo(P, F);
  }, ht.useReducer = function(P, F, rt) {
    return lt.current.useReducer(P, F, rt);
  }, ht.useRef = function(P) {
    return lt.current.useRef(P);
  }, ht.useState = function(P) {
    return lt.current.useState(P);
  }, ht.useSyncExternalStore = function(P, F, rt) {
    return lt.current.useSyncExternalStore(P, F, rt);
  }, ht.useTransition = function() {
    return lt.current.useTransition();
  }, ht.version = "18.3.1", ht;
}
var Sd;
function ou() {
  return Sd || (Sd = 1, Oa.exports = Xm()), Oa.exports;
}
var kd;
function Km() {
  if (kd) return ks;
  kd = 1;
  var i = ou(), t = /* @__PURE__ */ Symbol.for("react.element"), e = /* @__PURE__ */ Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, d, p) {
    var m, y = {}, v = null, _ = null;
    p !== void 0 && (v = "" + p), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (_ = d.ref);
    for (m in d) r.call(d, m) && !l.hasOwnProperty(m) && (y[m] = d[m]);
    if (c && c.defaultProps) for (m in d = c.defaultProps, d) y[m] === void 0 && (y[m] = d[m]);
    return { $$typeof: t, type: c, key: v, ref: _, props: y, _owner: o.current };
  }
  return ks.Fragment = e, ks.jsx = u, ks.jsxs = u, ks;
}
var wd;
function Qm() {
  return wd || (wd = 1, Ta.exports = Km()), Ta.exports;
}
var _o = Qm(), Ee = ou(), no = {}, La = { exports: {} }, de = {}, Ra = { exports: {} }, Aa = {};
var bd;
function Gm() {
  return bd || (bd = 1, (function(i) {
    function t(U, X) {
      var $ = U.length;
      U.push(X);
      t: for (; 0 < $; ) {
        var P = $ - 1 >>> 1, F = U[P];
        if (0 < o(F, X)) U[P] = X, U[$] = F, $ = P;
        else break t;
      }
    }
    function e(U) {
      return U.length === 0 ? null : U[0];
    }
    function r(U) {
      if (U.length === 0) return null;
      var X = U[0], $ = U.pop();
      if ($ !== X) {
        U[0] = $;
        t: for (var P = 0, F = U.length, rt = F >>> 1; P < rt; ) {
          var ot = 2 * (P + 1) - 1, dt = U[ot], ut = ot + 1, wt = U[ut];
          if (0 > o(dt, $)) ut < F && 0 > o(wt, dt) ? (U[P] = wt, U[ut] = $, P = ut) : (U[P] = dt, U[ot] = $, P = ot);
          else if (ut < F && 0 > o(wt, $)) U[P] = wt, U[ut] = $, P = ut;
          else break t;
        }
      }
      return X;
    }
    function o(U, X) {
      var $ = U.sortIndex - X.sortIndex;
      return $ !== 0 ? $ : U.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      i.unstable_now = function() {
        return l.now();
      };
    } else {
      var u = Date, c = u.now();
      i.unstable_now = function() {
        return u.now() - c;
      };
    }
    var d = [], p = [], m = 1, y = null, v = 3, _ = !1, k = !1, S = !1, b = typeof setTimeout == "function" ? setTimeout : null, E = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(U) {
      for (var X = e(p); X !== null; ) {
        if (X.callback === null) r(p);
        else if (X.startTime <= U) r(p), X.sortIndex = X.expirationTime, t(d, X);
        else break;
        X = e(p);
      }
    }
    function A(U) {
      if (S = !1, z(U), !k) if (e(d) !== null) k = !0, ft(R);
      else {
        var X = e(p);
        X !== null && lt(A, X.startTime - U);
      }
    }
    function R(U, X) {
      k = !1, S && (S = !1, E(H), H = -1), _ = !0;
      var $ = v;
      try {
        for (z(X), y = e(d); y !== null && (!(y.expirationTime > X) || U && !nt()); ) {
          var P = y.callback;
          if (typeof P == "function") {
            y.callback = null, v = y.priorityLevel;
            var F = P(y.expirationTime <= X);
            X = i.unstable_now(), typeof F == "function" ? y.callback = F : y === e(d) && r(d), z(X);
          } else r(d);
          y = e(d);
        }
        if (y !== null) var rt = !0;
        else {
          var ot = e(p);
          ot !== null && lt(A, ot.startTime - X), rt = !1;
        }
        return rt;
      } finally {
        y = null, v = $, _ = !1;
      }
    }
    var V = !1, j = null, H = -1, Z = 5, et = -1;
    function nt() {
      return !(i.unstable_now() - et < Z);
    }
    function st() {
      if (j !== null) {
        var U = i.unstable_now();
        et = U;
        var X = !0;
        try {
          X = j(!0, U);
        } finally {
          X ? xt() : (V = !1, j = null);
        }
      } else V = !1;
    }
    var xt;
    if (typeof L == "function") xt = function() {
      L(st);
    };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), ct = Mt.port2;
      Mt.port1.onmessage = st, xt = function() {
        ct.postMessage(null);
      };
    } else xt = function() {
      b(st, 0);
    };
    function ft(U) {
      j = U, V || (V = !0, xt());
    }
    function lt(U, X) {
      H = b(function() {
        U(i.unstable_now());
      }, X);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, i.unstable_continueExecution = function() {
      k || _ || (k = !0, ft(R));
    }, i.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < U ? Math.floor(1e3 / U) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, i.unstable_getFirstCallbackNode = function() {
      return e(d);
    }, i.unstable_next = function(U) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = v;
      }
      var $ = v;
      v = X;
      try {
        return U();
      } finally {
        v = $;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(U, X) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var $ = v;
      v = U;
      try {
        return X();
      } finally {
        v = $;
      }
    }, i.unstable_scheduleCallback = function(U, X, $) {
      var P = i.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? P + $ : P) : $ = P, U) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = $ + F, U = { id: m++, callback: X, priorityLevel: U, startTime: $, expirationTime: F, sortIndex: -1 }, $ > P ? (U.sortIndex = $, t(p, U), e(d) === null && U === e(p) && (S ? (E(H), H = -1) : S = !0, lt(A, $ - P))) : (U.sortIndex = F, t(d, U), k || _ || (k = !0, ft(R))), U;
    }, i.unstable_shouldYield = nt, i.unstable_wrapCallback = function(U) {
      var X = v;
      return function() {
        var $ = v;
        v = X;
        try {
          return U.apply(this, arguments);
        } finally {
          v = $;
        }
      };
    };
  })(Aa)), Aa;
}
var Cd;
function Zm() {
  return Cd || (Cd = 1, Ra.exports = Gm()), Ra.exports;
}
var Md;
function qm() {
  if (Md) return de;
  Md = 1;
  var i = ou(), t = Zm();
  function e(n) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, a = 1; a < arguments.length; a++) s += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = /* @__PURE__ */ new Set(), o = {};
  function l(n, s) {
    u(n, s), u(n + "Capture", s);
  }
  function u(n, s) {
    for (o[n] = s, n = 0; n < s.length; n++) r.add(s[n]);
  }
  var c = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), d = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, m = {}, y = {};
  function v(n) {
    return d.call(y, n) ? !0 : d.call(m, n) ? !1 : p.test(n) ? y[n] = !0 : (m[n] = !0, !1);
  }
  function _(n, s, a, f) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof s) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : a !== null ? !a.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function k(n, s, a, f) {
    if (s === null || typeof s > "u" || _(n, s, a, f)) return !0;
    if (f) return !1;
    if (a !== null) switch (a.type) {
      case 3:
        return !s;
      case 4:
        return s === !1;
      case 5:
        return isNaN(s);
      case 6:
        return isNaN(s) || 1 > s;
    }
    return !1;
  }
  function S(n, s, a, f, h, g, x) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = a, this.propertyName = n, this.type = s, this.sanitizeURL = g, this.removeEmptyString = x;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    b[n] = new S(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var s = n[0];
    b[s] = new S(s, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    b[n] = new S(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    b[n] = new S(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    b[n] = new S(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    b[n] = new S(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    b[n] = new S(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    b[n] = new S(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    b[n] = new S(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function L(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var s = n.replace(
      E,
      L
    );
    b[s] = new S(s, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var s = n.replace(E, L);
    b[s] = new S(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var s = n.replace(E, L);
    b[s] = new S(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    b[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    b[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function z(n, s, a, f) {
    var h = b.hasOwnProperty(s) ? b[s] : null;
    (h !== null ? h.type !== 0 : f || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (k(s, a, h, f) && (a = null), f || h === null ? v(s) && (a === null ? n.removeAttribute(s) : n.setAttribute(s, "" + a)) : h.mustUseProperty ? n[h.propertyName] = a === null ? h.type === 3 ? !1 : "" : a : (s = h.attributeName, f = h.attributeNamespace, a === null ? n.removeAttribute(s) : (h = h.type, a = h === 3 || h === 4 && a === !0 ? "" : "" + a, f ? n.setAttributeNS(f, s, a) : n.setAttribute(s, a))));
  }
  var A = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), H = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), et = /* @__PURE__ */ Symbol.for("react.provider"), nt = /* @__PURE__ */ Symbol.for("react.context"), st = /* @__PURE__ */ Symbol.for("react.forward_ref"), xt = /* @__PURE__ */ Symbol.for("react.suspense"), Mt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ct = /* @__PURE__ */ Symbol.for("react.memo"), ft = /* @__PURE__ */ Symbol.for("react.lazy"), lt = /* @__PURE__ */ Symbol.for("react.offscreen"), U = Symbol.iterator;
  function X(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var $ = Object.assign, P;
  function F(n) {
    if (P === void 0) try {
      throw Error();
    } catch (a) {
      var s = a.stack.trim().match(/\n( *(at )?)/);
      P = s && s[1] || "";
    }
    return `
` + P + n;
  }
  var rt = !1;
  function ot(n, s) {
    if (!n || rt) return "";
    rt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (s) if (s = function() {
        throw Error();
      }, Object.defineProperty(s.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(s, []);
        } catch (O) {
          var f = O;
        }
        Reflect.construct(n, [], s);
      } else {
        try {
          s.call();
        } catch (O) {
          f = O;
        }
        n.call(s.prototype);
      }
      else {
        try {
          throw Error();
        } catch (O) {
          f = O;
        }
        n();
      }
    } catch (O) {
      if (O && f && typeof O.stack == "string") {
        for (var h = O.stack.split(`
`), g = f.stack.split(`
`), x = h.length - 1, w = g.length - 1; 1 <= x && 0 <= w && h[x] !== g[w]; ) w--;
        for (; 1 <= x && 0 <= w; x--, w--) if (h[x] !== g[w]) {
          if (x !== 1 || w !== 1)
            do
              if (x--, w--, 0 > w || h[x] !== g[w]) {
                var C = `
` + h[x].replace(" at new ", " at ");
                return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
              }
            while (1 <= x && 0 <= w);
          break;
        }
      }
    } finally {
      rt = !1, Error.prepareStackTrace = a;
    }
    return (n = n ? n.displayName || n.name : "") ? F(n) : "";
  }
  function dt(n) {
    switch (n.tag) {
      case 5:
        return F(n.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ot(n.type, !1), n;
      case 11:
        return n = ot(n.type.render, !1), n;
      case 1:
        return n = ot(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case j:
        return "Fragment";
      case V:
        return "Portal";
      case Z:
        return "Profiler";
      case H:
        return "StrictMode";
      case xt:
        return "Suspense";
      case Mt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case nt:
        return (n.displayName || "Context") + ".Consumer";
      case et:
        return (n._context.displayName || "Context") + ".Provider";
      case st:
        var s = n.render;
        return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ct:
        return s = n.displayName || null, s !== null ? s : ut(n.type) || "Memo";
      case ft:
        s = n._payload, n = n._init;
        try {
          return ut(n(s));
        } catch {
        }
    }
    return null;
  }
  function wt(n) {
    var s = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(s);
      case 8:
        return s === H ? "StrictMode" : "Mode";
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
        if (typeof s == "function") return s.displayName || s.name || null;
        if (typeof s == "string") return s;
    }
    return null;
  }
  function _t(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Tt(n) {
    var s = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
  }
  function ge(n) {
    var s = Tt(n) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(n.constructor.prototype, s), f = "" + n[s];
    if (!n.hasOwnProperty(s) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var h = a.get, g = a.set;
      return Object.defineProperty(n, s, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(x) {
        f = "" + x, g.call(this, x);
      } }), Object.defineProperty(n, s, { enumerable: a.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(x) {
        f = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[s];
      } };
    }
  }
  function Ys(n) {
    n._valueTracker || (n._valueTracker = ge(n));
  }
  function Cu(n) {
    if (!n) return !1;
    var s = n._valueTracker;
    if (!s) return !0;
    var a = s.getValue(), f = "";
    return n && (f = Tt(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== a ? (s.setValue(n), !0) : !1;
  }
  function Xs(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Io(n, s) {
    var a = s.checked;
    return $({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ?? n._wrapperState.initialChecked });
  }
  function Mu(n, s) {
    var a = s.defaultValue == null ? "" : s.defaultValue, f = s.checked != null ? s.checked : s.defaultChecked;
    a = _t(s.value != null ? s.value : a), n._wrapperState = { initialChecked: f, initialValue: a, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
  }
  function Pu(n, s) {
    s = s.checked, s != null && z(n, "checked", s, !1);
  }
  function No(n, s) {
    Pu(n, s);
    var a = _t(s.value), f = s.type;
    if (a != null) f === "number" ? (a === 0 && n.value === "" || n.value != a) && (n.value = "" + a) : n.value !== "" + a && (n.value = "" + a);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    s.hasOwnProperty("value") ? Bo(n, s.type, a) : s.hasOwnProperty("defaultValue") && Bo(n, s.type, _t(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked);
  }
  function Eu(n, s, a) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var f = s.type;
      if (!(f !== "submit" && f !== "reset" || s.value !== void 0 && s.value !== null)) return;
      s = "" + n._wrapperState.initialValue, a || s === n.value || (n.value = s), n.defaultValue = s;
    }
    a = n.name, a !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, a !== "" && (n.name = a);
  }
  function Bo(n, s, a) {
    (s !== "number" || Xs(n.ownerDocument) !== n) && (a == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + a && (n.defaultValue = "" + a));
  }
  var Ii = Array.isArray;
  function oi(n, s, a, f) {
    if (n = n.options, s) {
      s = {};
      for (var h = 0; h < a.length; h++) s["$" + a[h]] = !0;
      for (a = 0; a < n.length; a++) h = s.hasOwnProperty("$" + n[a].value), n[a].selected !== h && (n[a].selected = h), h && f && (n[a].defaultSelected = !0);
    } else {
      for (a = "" + _t(a), s = null, h = 0; h < n.length; h++) {
        if (n[h].value === a) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        s !== null || n[h].disabled || (s = n[h]);
      }
      s !== null && (s.selected = !0);
    }
  }
  function Vo(n, s) {
    if (s.dangerouslySetInnerHTML != null) throw Error(e(91));
    return $({}, s, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Du(n, s) {
    var a = s.value;
    if (a == null) {
      if (a = s.children, s = s.defaultValue, a != null) {
        if (s != null) throw Error(e(92));
        if (Ii(a)) {
          if (1 < a.length) throw Error(e(93));
          a = a[0];
        }
        s = a;
      }
      s == null && (s = ""), a = s;
    }
    n._wrapperState = { initialValue: _t(a) };
  }
  function Tu(n, s) {
    var a = _t(s.value), f = _t(s.defaultValue);
    a != null && (a = "" + a, a !== n.value && (n.value = a), s.defaultValue == null && n.defaultValue !== a && (n.defaultValue = a)), f != null && (n.defaultValue = "" + f);
  }
  function Ou(n) {
    var s = n.textContent;
    s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s);
  }
  function Lu(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jo(n, s) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Lu(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ks, Ru = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, a, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(s, a, f, h);
      });
    } : n;
  })(function(n, s) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
    else {
      for (Ks = Ks || document.createElement("div"), Ks.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = Ks.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; s.firstChild; ) n.appendChild(s.firstChild);
    }
  });
  function Ni(n, s) {
    if (s) {
      var a = n.firstChild;
      if (a && a === n.lastChild && a.nodeType === 3) {
        a.nodeValue = s;
        return;
      }
    }
    n.textContent = s;
  }
  var Bi = {
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
  }, Zp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bi).forEach(function(n) {
    Zp.forEach(function(s) {
      s = s + n.charAt(0).toUpperCase() + n.substring(1), Bi[s] = Bi[n];
    });
  });
  function Au(n, s, a) {
    return s == null || typeof s == "boolean" || s === "" ? "" : a || typeof s != "number" || s === 0 || Bi.hasOwnProperty(n) && Bi[n] ? ("" + s).trim() : s + "px";
  }
  function zu(n, s) {
    n = n.style;
    for (var a in s) if (s.hasOwnProperty(a)) {
      var f = a.indexOf("--") === 0, h = Au(a, s[a], f);
      a === "float" && (a = "cssFloat"), f ? n.setProperty(a, h) : n[a] = h;
    }
  }
  var qp = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Wo(n, s) {
    if (s) {
      if (qp[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(e(137, n));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(e(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(e(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(e(62));
    }
  }
  function Ho(n, s) {
    if (n.indexOf("-") === -1) return typeof s.is == "string";
    switch (n) {
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
  var Uo = null;
  function $o(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yo = null, li = null, ai = null;
  function Fu(n) {
    if (n = ls(n)) {
      if (typeof Yo != "function") throw Error(e(280));
      var s = n.stateNode;
      s && (s = yr(s), Yo(n.stateNode, n.type, s));
    }
  }
  function Iu(n) {
    li ? ai ? ai.push(n) : ai = [n] : li = n;
  }
  function Nu() {
    if (li) {
      var n = li, s = ai;
      if (ai = li = null, Fu(n), s) for (n = 0; n < s.length; n++) Fu(s[n]);
    }
  }
  function Bu(n, s) {
    return n(s);
  }
  function Vu() {
  }
  var Xo = !1;
  function ju(n, s, a) {
    if (Xo) return n(s, a);
    Xo = !0;
    try {
      return Bu(n, s, a);
    } finally {
      Xo = !1, (li !== null || ai !== null) && (Vu(), Nu());
    }
  }
  function Vi(n, s) {
    var a = n.stateNode;
    if (a === null) return null;
    var f = yr(a);
    if (f === null) return null;
    a = f[s];
    t: switch (s) {
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
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break t;
      default:
        n = !1;
    }
    if (n) return null;
    if (a && typeof a != "function") throw Error(e(231, s, typeof a));
    return a;
  }
  var Ko = !1;
  if (c) try {
    var ji = {};
    Object.defineProperty(ji, "passive", { get: function() {
      Ko = !0;
    } }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji);
  } catch {
    Ko = !1;
  }
  function Jp(n, s, a, f, h, g, x, w, C) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(a, O);
    } catch (N) {
      this.onError(N);
    }
  }
  var Wi = !1, Qs = null, Gs = !1, Qo = null, tg = { onError: function(n) {
    Wi = !0, Qs = n;
  } };
  function eg(n, s, a, f, h, g, x, w, C) {
    Wi = !1, Qs = null, Jp.apply(tg, arguments);
  }
  function ng(n, s, a, f, h, g, x, w, C) {
    if (eg.apply(this, arguments), Wi) {
      if (Wi) {
        var O = Qs;
        Wi = !1, Qs = null;
      } else throw Error(e(198));
      Gs || (Gs = !0, Qo = O);
    }
  }
  function Fn(n) {
    var s = n, a = n;
    if (n.alternate) for (; s.return; ) s = s.return;
    else {
      n = s;
      do
        s = n, (s.flags & 4098) !== 0 && (a = s.return), n = s.return;
      while (n);
    }
    return s.tag === 3 ? a : null;
  }
  function Wu(n) {
    if (n.tag === 13) {
      var s = n.memoizedState;
      if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function Hu(n) {
    if (Fn(n) !== n) throw Error(e(188));
  }
  function ig(n) {
    var s = n.alternate;
    if (!s) {
      if (s = Fn(n), s === null) throw Error(e(188));
      return s !== n ? null : n;
    }
    for (var a = n, f = s; ; ) {
      var h = a.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (f = h.return, f !== null) {
          a = f;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === a) return Hu(h), n;
          if (g === f) return Hu(h), s;
          g = g.sibling;
        }
        throw Error(e(188));
      }
      if (a.return !== f.return) a = h, f = g;
      else {
        for (var x = !1, w = h.child; w; ) {
          if (w === a) {
            x = !0, a = h, f = g;
            break;
          }
          if (w === f) {
            x = !0, f = h, a = g;
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = g.child; w; ) {
            if (w === a) {
              x = !0, a = g, f = h;
              break;
            }
            if (w === f) {
              x = !0, f = g, a = h;
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(e(189));
        }
      }
      if (a.alternate !== f) throw Error(e(190));
    }
    if (a.tag !== 3) throw Error(e(188));
    return a.stateNode.current === a ? n : s;
  }
  function Uu(n) {
    return n = ig(n), n !== null ? $u(n) : null;
  }
  function $u(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var s = $u(n);
      if (s !== null) return s;
      n = n.sibling;
    }
    return null;
  }
  var Yu = t.unstable_scheduleCallback, Xu = t.unstable_cancelCallback, sg = t.unstable_shouldYield, rg = t.unstable_requestPaint, Nt = t.unstable_now, og = t.unstable_getCurrentPriorityLevel, Go = t.unstable_ImmediatePriority, Ku = t.unstable_UserBlockingPriority, Zs = t.unstable_NormalPriority, lg = t.unstable_LowPriority, Qu = t.unstable_IdlePriority, qs = null, Ie = null;
  function ag(n) {
    if (Ie && typeof Ie.onCommitFiberRoot == "function") try {
      Ie.onCommitFiberRoot(qs, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var De = Math.clz32 ? Math.clz32 : fg, ug = Math.log, cg = Math.LN2;
  function fg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ug(n) / cg | 0) | 0;
  }
  var Js = 64, tr = 4194304;
  function Hi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function er(n, s) {
    var a = n.pendingLanes;
    if (a === 0) return 0;
    var f = 0, h = n.suspendedLanes, g = n.pingedLanes, x = a & 268435455;
    if (x !== 0) {
      var w = x & ~h;
      w !== 0 ? f = Hi(w) : (g &= x, g !== 0 && (f = Hi(g)));
    } else x = a & ~h, x !== 0 ? f = Hi(x) : g !== 0 && (f = Hi(g));
    if (f === 0) return 0;
    if (s !== 0 && s !== f && (s & h) === 0 && (h = f & -f, g = s & -s, h >= g || h === 16 && (g & 4194240) !== 0)) return s;
    if ((f & 4) !== 0 && (f |= a & 16), s = n.entangledLanes, s !== 0) for (n = n.entanglements, s &= f; 0 < s; ) a = 31 - De(s), h = 1 << a, f |= n[a], s &= ~h;
    return f;
  }
  function dg(n, s) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return s + 250;
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
        return s + 5e3;
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
  function hg(n, s) {
    for (var a = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var x = 31 - De(g), w = 1 << x, C = h[x];
      C === -1 ? ((w & a) === 0 || (w & f) !== 0) && (h[x] = dg(w, s)) : C <= s && (n.expiredLanes |= w), g &= ~w;
    }
  }
  function Zo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gu() {
    var n = Js;
    return Js <<= 1, (Js & 4194240) === 0 && (Js = 64), n;
  }
  function qo(n) {
    for (var s = [], a = 0; 31 > a; a++) s.push(n);
    return s;
  }
  function Ui(n, s, a) {
    n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - De(s), n[s] = a;
  }
  function pg(n, s) {
    var a = n.pendingLanes & ~s;
    n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < a; ) {
      var h = 31 - De(a), g = 1 << h;
      s[h] = 0, f[h] = -1, n[h] = -1, a &= ~g;
    }
  }
  function Jo(n, s) {
    var a = n.entangledLanes |= s;
    for (n = n.entanglements; a; ) {
      var f = 31 - De(a), h = 1 << f;
      h & s | n[f] & s && (n[f] |= s), a &= ~h;
    }
  }
  var St = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var qu, tl, Ju, tc, ec, el = !1, nr = [], an = null, un = null, cn = null, $i = /* @__PURE__ */ new Map(), Yi = /* @__PURE__ */ new Map(), fn = [], gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nc(n, s) {
    switch (n) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        un = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        $i.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yi.delete(s.pointerId);
    }
  }
  function Xi(n, s, a, f, h, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: s, domEventName: a, eventSystemFlags: f, nativeEvent: g, targetContainers: [h] }, s !== null && (s = ls(s), s !== null && tl(s)), n) : (n.eventSystemFlags |= f, s = n.targetContainers, h !== null && s.indexOf(h) === -1 && s.push(h), n);
  }
  function mg(n, s, a, f, h) {
    switch (s) {
      case "focusin":
        return an = Xi(an, n, s, a, f, h), !0;
      case "dragenter":
        return un = Xi(un, n, s, a, f, h), !0;
      case "mouseover":
        return cn = Xi(cn, n, s, a, f, h), !0;
      case "pointerover":
        var g = h.pointerId;
        return $i.set(g, Xi($i.get(g) || null, n, s, a, f, h)), !0;
      case "gotpointercapture":
        return g = h.pointerId, Yi.set(g, Xi(Yi.get(g) || null, n, s, a, f, h)), !0;
    }
    return !1;
  }
  function ic(n) {
    var s = In(n.target);
    if (s !== null) {
      var a = Fn(s);
      if (a !== null) {
        if (s = a.tag, s === 13) {
          if (s = Wu(a), s !== null) {
            n.blockedOn = s, ec(n.priority, function() {
              Ju(a);
            });
            return;
          }
        } else if (s === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ir(n) {
    if (n.blockedOn !== null) return !1;
    for (var s = n.targetContainers; 0 < s.length; ) {
      var a = il(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
      if (a === null) {
        a = n.nativeEvent;
        var f = new a.constructor(a.type, a);
        Uo = f, a.target.dispatchEvent(f), Uo = null;
      } else return s = ls(a), s !== null && tl(s), n.blockedOn = a, !1;
      s.shift();
    }
    return !0;
  }
  function sc(n, s, a) {
    ir(n) && a.delete(s);
  }
  function yg() {
    el = !1, an !== null && ir(an) && (an = null), un !== null && ir(un) && (un = null), cn !== null && ir(cn) && (cn = null), $i.forEach(sc), Yi.forEach(sc);
  }
  function Ki(n, s) {
    n.blockedOn === s && (n.blockedOn = null, el || (el = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, yg)));
  }
  function Qi(n) {
    function s(h) {
      return Ki(h, n);
    }
    if (0 < nr.length) {
      Ki(nr[0], n);
      for (var a = 1; a < nr.length; a++) {
        var f = nr[a];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (an !== null && Ki(an, n), un !== null && Ki(un, n), cn !== null && Ki(cn, n), $i.forEach(s), Yi.forEach(s), a = 0; a < fn.length; a++) f = fn[a], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < fn.length && (a = fn[0], a.blockedOn === null); ) ic(a), a.blockedOn === null && fn.shift();
  }
  var ui = A.ReactCurrentBatchConfig, sr = !0;
  function vg(n, s, a, f) {
    var h = St, g = ui.transition;
    ui.transition = null;
    try {
      St = 1, nl(n, s, a, f);
    } finally {
      St = h, ui.transition = g;
    }
  }
  function xg(n, s, a, f) {
    var h = St, g = ui.transition;
    ui.transition = null;
    try {
      St = 4, nl(n, s, a, f);
    } finally {
      St = h, ui.transition = g;
    }
  }
  function nl(n, s, a, f) {
    if (sr) {
      var h = il(n, s, a, f);
      if (h === null) _l(n, s, f, rr, a), nc(n, f);
      else if (mg(h, n, s, a, f)) f.stopPropagation();
      else if (nc(n, f), s & 4 && -1 < gg.indexOf(n)) {
        for (; h !== null; ) {
          var g = ls(h);
          if (g !== null && qu(g), g = il(n, s, a, f), g === null && _l(n, s, f, rr, a), g === h) break;
          h = g;
        }
        h !== null && f.stopPropagation();
      } else _l(n, s, f, null, a);
    }
  }
  var rr = null;
  function il(n, s, a, f) {
    if (rr = null, n = $o(f), n = In(n), n !== null) if (s = Fn(n), s === null) n = null;
    else if (a = s.tag, a === 13) {
      if (n = Wu(s), n !== null) return n;
      n = null;
    } else if (a === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      n = null;
    } else s !== n && (n = null);
    return rr = n, null;
  }
  function rc(n) {
    switch (n) {
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
        switch (og()) {
          case Go:
            return 1;
          case Ku:
            return 4;
          case Zs:
          case lg:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var dn = null, sl = null, or = null;
  function oc() {
    if (or) return or;
    var n, s = sl, a = s.length, f, h = "value" in dn ? dn.value : dn.textContent, g = h.length;
    for (n = 0; n < a && s[n] === h[n]; n++) ;
    var x = a - n;
    for (f = 1; f <= x && s[a - f] === h[g - f]; f++) ;
    return or = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function lr(n) {
    var s = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ar() {
    return !0;
  }
  function lc() {
    return !1;
  }
  function me(n) {
    function s(a, f, h, g, x) {
      this._reactName = a, this._targetInst = h, this.type = f, this.nativeEvent = g, this.target = x, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (a = n[w], this[w] = a ? a(g) : g[w]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? ar : lc, this.isPropagationStopped = lc, this;
    }
    return $(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
    }, persist: function() {
    }, isPersistent: ar }), s;
  }
  var ci = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rl = me(ci), Gi = $({}, ci, { view: 0, detail: 0 }), _g = me(Gi), ol, ll, Zi, ur = $({}, Gi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ul, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zi && (Zi && n.type === "mousemove" ? (ol = n.screenX - Zi.screenX, ll = n.screenY - Zi.screenY) : ll = ol = 0, Zi = n), ol);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ll;
  } }), ac = me(ur), Sg = $({}, ur, { dataTransfer: 0 }), kg = me(Sg), wg = $({}, Gi, { relatedTarget: 0 }), al = me(wg), bg = $({}, ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cg = me(bg), Mg = $({}, ci, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pg = me(Mg), Eg = $({}, ci, { data: 0 }), uc = me(Eg), Dg = {
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
  }, Tg = {
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
  }, Og = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lg(n) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(n) : (n = Og[n]) ? !!s[n] : !1;
  }
  function ul() {
    return Lg;
  }
  var Rg = $({}, Gi, { key: function(n) {
    if (n.key) {
      var s = Dg[n.key] || n.key;
      if (s !== "Unidentified") return s;
    }
    return n.type === "keypress" ? (n = lr(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Tg[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ul, charCode: function(n) {
    return n.type === "keypress" ? lr(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? lr(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ag = me(Rg), zg = $({}, ur, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = me(zg), Fg = $({}, Gi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ul }), Ig = me(Fg), Ng = $({}, ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bg = me(Ng), Vg = $({}, ur, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jg = me(Vg), Wg = [9, 13, 27, 32], cl = c && "CompositionEvent" in window, qi = null;
  c && "documentMode" in document && (qi = document.documentMode);
  var Hg = c && "TextEvent" in window && !qi, fc = c && (!cl || qi && 8 < qi && 11 >= qi), dc = " ", hc = !1;
  function pc(n, s) {
    switch (n) {
      case "keyup":
        return Wg.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var fi = !1;
  function Ug(n, s) {
    switch (n) {
      case "compositionend":
        return gc(s);
      case "keypress":
        return s.which !== 32 ? null : (hc = !0, dc);
      case "textInput":
        return n = s.data, n === dc && hc ? null : n;
      default:
        return null;
    }
  }
  function $g(n, s) {
    if (fi) return n === "compositionend" || !cl && pc(n, s) ? (n = oc(), or = sl = dn = null, fi = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
          if (s.char && 1 < s.char.length) return s.char;
          if (s.which) return String.fromCharCode(s.which);
        }
        return null;
      case "compositionend":
        return fc && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var Yg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mc(n) {
    var s = n && n.nodeName && n.nodeName.toLowerCase();
    return s === "input" ? !!Yg[n.type] : s === "textarea";
  }
  function yc(n, s, a, f) {
    Iu(f), s = pr(s, "onChange"), 0 < s.length && (a = new rl("onChange", "change", null, a, f), n.push({ event: a, listeners: s }));
  }
  var Ji = null, ts = null;
  function Xg(n) {
    zc(n, 0);
  }
  function cr(n) {
    var s = mi(n);
    if (Cu(s)) return n;
  }
  function Kg(n, s) {
    if (n === "change") return s;
  }
  var vc = !1;
  if (c) {
    var fl;
    if (c) {
      var dl = "oninput" in document;
      if (!dl) {
        var xc = document.createElement("div");
        xc.setAttribute("oninput", "return;"), dl = typeof xc.oninput == "function";
      }
      fl = dl;
    } else fl = !1;
    vc = fl && (!document.documentMode || 9 < document.documentMode);
  }
  function _c() {
    Ji && (Ji.detachEvent("onpropertychange", Sc), ts = Ji = null);
  }
  function Sc(n) {
    if (n.propertyName === "value" && cr(ts)) {
      var s = [];
      yc(s, ts, n, $o(n)), ju(Xg, s);
    }
  }
  function Qg(n, s, a) {
    n === "focusin" ? (_c(), Ji = s, ts = a, Ji.attachEvent("onpropertychange", Sc)) : n === "focusout" && _c();
  }
  function Gg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return cr(ts);
  }
  function Zg(n, s) {
    if (n === "click") return cr(s);
  }
  function qg(n, s) {
    if (n === "input" || n === "change") return cr(s);
  }
  function Jg(n, s) {
    return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s;
  }
  var Te = typeof Object.is == "function" ? Object.is : Jg;
  function es(n, s) {
    if (Te(n, s)) return !0;
    if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
    var a = Object.keys(n), f = Object.keys(s);
    if (a.length !== f.length) return !1;
    for (f = 0; f < a.length; f++) {
      var h = a[f];
      if (!d.call(s, h) || !Te(n[h], s[h])) return !1;
    }
    return !0;
  }
  function kc(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function wc(n, s) {
    var a = kc(n);
    n = 0;
    for (var f; a; ) {
      if (a.nodeType === 3) {
        if (f = n + a.textContent.length, n <= s && f >= s) return { node: a, offset: s - n };
        n = f;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = kc(a);
    }
  }
  function bc(n, s) {
    return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? bc(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function Cc() {
    for (var n = window, s = Xs(); s instanceof n.HTMLIFrameElement; ) {
      try {
        var a = typeof s.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) n = s.contentWindow;
      else break;
      s = Xs(n.document);
    }
    return s;
  }
  function hl(n) {
    var s = n && n.nodeName && n.nodeName.toLowerCase();
    return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true");
  }
  function tm(n) {
    var s = Cc(), a = n.focusedElem, f = n.selectionRange;
    if (s !== a && a && a.ownerDocument && bc(a.ownerDocument.documentElement, a)) {
      if (f !== null && hl(a)) {
        if (s = f.start, n = f.end, n === void 0 && (n = s), "selectionStart" in a) a.selectionStart = s, a.selectionEnd = Math.min(n, a.value.length);
        else if (n = (s = a.ownerDocument || document) && s.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = a.textContent.length, g = Math.min(f.start, h);
          f = f.end === void 0 ? g : Math.min(f.end, h), !n.extend && g > f && (h = f, f = g, g = h), h = wc(a, g);
          var x = wc(
            a,
            f
          );
          h && x && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (s = s.createRange(), s.setStart(h.node, h.offset), n.removeAllRanges(), g > f ? (n.addRange(s), n.extend(x.node, x.offset)) : (s.setEnd(x.node, x.offset), n.addRange(s)));
        }
      }
      for (s = [], n = a; n = n.parentNode; ) n.nodeType === 1 && s.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < s.length; a++) n = s[a], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var em = c && "documentMode" in document && 11 >= document.documentMode, di = null, pl = null, ns = null, gl = !1;
  function Mc(n, s, a) {
    var f = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gl || di == null || di !== Xs(f) || (f = di, "selectionStart" in f && hl(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), ns && es(ns, f) || (ns = f, f = pr(pl, "onSelect"), 0 < f.length && (s = new rl("onSelect", "select", null, s, a), n.push({ event: s, listeners: f }), s.target = di)));
  }
  function fr(n, s) {
    var a = {};
    return a[n.toLowerCase()] = s.toLowerCase(), a["Webkit" + n] = "webkit" + s, a["Moz" + n] = "moz" + s, a;
  }
  var hi = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, ml = {}, Pc = {};
  c && (Pc = document.createElement("div").style, "AnimationEvent" in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation), "TransitionEvent" in window || delete hi.transitionend.transition);
  function dr(n) {
    if (ml[n]) return ml[n];
    if (!hi[n]) return n;
    var s = hi[n], a;
    for (a in s) if (s.hasOwnProperty(a) && a in Pc) return ml[n] = s[a];
    return n;
  }
  var Ec = dr("animationend"), Dc = dr("animationiteration"), Tc = dr("animationstart"), Oc = dr("transitionend"), Lc = /* @__PURE__ */ new Map(), Rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hn(n, s) {
    Lc.set(n, s), l(s, [n]);
  }
  for (var yl = 0; yl < Rc.length; yl++) {
    var vl = Rc[yl], nm = vl.toLowerCase(), im = vl[0].toUpperCase() + vl.slice(1);
    hn(nm, "on" + im);
  }
  hn(Ec, "onAnimationEnd"), hn(Dc, "onAnimationIteration"), hn(Tc, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(Oc, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Ac(n, s, a) {
    var f = n.type || "unknown-event";
    n.currentTarget = a, ng(f, s, void 0, n), n.currentTarget = null;
  }
  function zc(n, s) {
    s = (s & 4) !== 0;
    for (var a = 0; a < n.length; a++) {
      var f = n[a], h = f.event;
      f = f.listeners;
      t: {
        var g = void 0;
        if (s) for (var x = f.length - 1; 0 <= x; x--) {
          var w = f[x], C = w.instance, O = w.currentTarget;
          if (w = w.listener, C !== g && h.isPropagationStopped()) break t;
          Ac(h, w, O), g = C;
        }
        else for (x = 0; x < f.length; x++) {
          if (w = f[x], C = w.instance, O = w.currentTarget, w = w.listener, C !== g && h.isPropagationStopped()) break t;
          Ac(h, w, O), g = C;
        }
      }
    }
    if (Gs) throw n = Qo, Gs = !1, Qo = null, n;
  }
  function Pt(n, s) {
    var a = s[Ml];
    a === void 0 && (a = s[Ml] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    a.has(f) || (Fc(s, n, 2, !1), a.add(f));
  }
  function xl(n, s, a) {
    var f = 0;
    s && (f |= 4), Fc(a, n, f, s);
  }
  var hr = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(n) {
    if (!n[hr]) {
      n[hr] = !0, r.forEach(function(a) {
        a !== "selectionchange" && (sm.has(a) || xl(a, !1, n), xl(a, !0, n));
      });
      var s = n.nodeType === 9 ? n : n.ownerDocument;
      s === null || s[hr] || (s[hr] = !0, xl("selectionchange", !1, s));
    }
  }
  function Fc(n, s, a, f) {
    switch (rc(s)) {
      case 1:
        var h = vg;
        break;
      case 4:
        h = xg;
        break;
      default:
        h = nl;
    }
    a = h.bind(null, s, a, n), h = void 0, !Ko || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(s, a, { capture: !0, passive: h }) : n.addEventListener(s, a, !0) : h !== void 0 ? n.addEventListener(s, a, { passive: h }) : n.addEventListener(s, a, !1);
  }
  function _l(n, s, a, f, h) {
    var g = f;
    if ((s & 1) === 0 && (s & 2) === 0 && f !== null) t: for (; ; ) {
      if (f === null) return;
      var x = f.tag;
      if (x === 3 || x === 4) {
        var w = f.stateNode.containerInfo;
        if (w === h || w.nodeType === 8 && w.parentNode === h) break;
        if (x === 4) for (x = f.return; x !== null; ) {
          var C = x.tag;
          if ((C === 3 || C === 4) && (C = x.stateNode.containerInfo, C === h || C.nodeType === 8 && C.parentNode === h)) return;
          x = x.return;
        }
        for (; w !== null; ) {
          if (x = In(w), x === null) return;
          if (C = x.tag, C === 5 || C === 6) {
            f = g = x;
            continue t;
          }
          w = w.parentNode;
        }
      }
      f = f.return;
    }
    ju(function() {
      var O = g, N = $o(a), B = [];
      t: {
        var I = Lc.get(n);
        if (I !== void 0) {
          var Y = rl, Q = n;
          switch (n) {
            case "keypress":
              if (lr(a) === 0) break t;
            case "keydown":
            case "keyup":
              Y = Ag;
              break;
            case "focusin":
              Q = "focus", Y = al;
              break;
            case "focusout":
              Q = "blur", Y = al;
              break;
            case "beforeblur":
            case "afterblur":
              Y = al;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = ac;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = kg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Ig;
              break;
            case Ec:
            case Dc:
            case Tc:
              Y = Cg;
              break;
            case Oc:
              Y = Bg;
              break;
            case "scroll":
              Y = _g;
              break;
            case "wheel":
              Y = jg;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Pg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = cc;
          }
          var G = (s & 4) !== 0, Bt = !G && n === "scroll", D = G ? I !== null ? I + "Capture" : null : I;
          G = [];
          for (var M = O, T; M !== null; ) {
            T = M;
            var W = T.stateNode;
            if (T.tag === 5 && W !== null && (T = W, D !== null && (W = Vi(M, D), W != null && G.push(rs(M, W, T)))), Bt) break;
            M = M.return;
          }
          0 < G.length && (I = new Y(I, Q, null, a, N), B.push({ event: I, listeners: G }));
        }
      }
      if ((s & 7) === 0) {
        t: {
          if (I = n === "mouseover" || n === "pointerover", Y = n === "mouseout" || n === "pointerout", I && a !== Uo && (Q = a.relatedTarget || a.fromElement) && (In(Q) || Q[$e])) break t;
          if ((Y || I) && (I = N.window === N ? N : (I = N.ownerDocument) ? I.defaultView || I.parentWindow : window, Y ? (Q = a.relatedTarget || a.toElement, Y = O, Q = Q ? In(Q) : null, Q !== null && (Bt = Fn(Q), Q !== Bt || Q.tag !== 5 && Q.tag !== 6) && (Q = null)) : (Y = null, Q = O), Y !== Q)) {
            if (G = ac, W = "onMouseLeave", D = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (G = cc, W = "onPointerLeave", D = "onPointerEnter", M = "pointer"), Bt = Y == null ? I : mi(Y), T = Q == null ? I : mi(Q), I = new G(W, M + "leave", Y, a, N), I.target = Bt, I.relatedTarget = T, W = null, In(N) === O && (G = new G(D, M + "enter", Q, a, N), G.target = T, G.relatedTarget = Bt, W = G), Bt = W, Y && Q) e: {
              for (G = Y, D = Q, M = 0, T = G; T; T = pi(T)) M++;
              for (T = 0, W = D; W; W = pi(W)) T++;
              for (; 0 < M - T; ) G = pi(G), M--;
              for (; 0 < T - M; ) D = pi(D), T--;
              for (; M--; ) {
                if (G === D || D !== null && G === D.alternate) break e;
                G = pi(G), D = pi(D);
              }
              G = null;
            }
            else G = null;
            Y !== null && Ic(B, I, Y, G, !1), Q !== null && Bt !== null && Ic(B, Bt, Q, G, !0);
          }
        }
        t: {
          if (I = O ? mi(O) : window, Y = I.nodeName && I.nodeName.toLowerCase(), Y === "select" || Y === "input" && I.type === "file") var q = Kg;
          else if (mc(I)) if (vc) q = qg;
          else {
            q = Gg;
            var J = Qg;
          }
          else (Y = I.nodeName) && Y.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (q = Zg);
          if (q && (q = q(n, O))) {
            yc(B, q, a, N);
            break t;
          }
          J && J(n, I, O), n === "focusout" && (J = I._wrapperState) && J.controlled && I.type === "number" && Bo(I, "number", I.value);
        }
        switch (J = O ? mi(O) : window, n) {
          case "focusin":
            (mc(J) || J.contentEditable === "true") && (di = J, pl = O, ns = null);
            break;
          case "focusout":
            ns = pl = di = null;
            break;
          case "mousedown":
            gl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gl = !1, Mc(B, a, N);
            break;
          case "selectionchange":
            if (em) break;
          case "keydown":
          case "keyup":
            Mc(B, a, N);
        }
        var tt;
        if (cl) t: {
          switch (n) {
            case "compositionstart":
              var it = "onCompositionStart";
              break t;
            case "compositionend":
              it = "onCompositionEnd";
              break t;
            case "compositionupdate":
              it = "onCompositionUpdate";
              break t;
          }
          it = void 0;
        }
        else fi ? pc(n, a) && (it = "onCompositionEnd") : n === "keydown" && a.keyCode === 229 && (it = "onCompositionStart");
        it && (fc && a.locale !== "ko" && (fi || it !== "onCompositionStart" ? it === "onCompositionEnd" && fi && (tt = oc()) : (dn = N, sl = "value" in dn ? dn.value : dn.textContent, fi = !0)), J = pr(O, it), 0 < J.length && (it = new uc(it, n, null, a, N), B.push({ event: it, listeners: J }), tt ? it.data = tt : (tt = gc(a), tt !== null && (it.data = tt)))), (tt = Hg ? Ug(n, a) : $g(n, a)) && (O = pr(O, "onBeforeInput"), 0 < O.length && (N = new uc("onBeforeInput", "beforeinput", null, a, N), B.push({ event: N, listeners: O }), N.data = tt));
      }
      zc(B, s);
    });
  }
  function rs(n, s, a) {
    return { instance: n, listener: s, currentTarget: a };
  }
  function pr(n, s) {
    for (var a = s + "Capture", f = []; n !== null; ) {
      var h = n, g = h.stateNode;
      h.tag === 5 && g !== null && (h = g, g = Vi(n, a), g != null && f.unshift(rs(n, g, h)), g = Vi(n, s), g != null && f.push(rs(n, g, h))), n = n.return;
    }
    return f;
  }
  function pi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Ic(n, s, a, f, h) {
    for (var g = s._reactName, x = []; a !== null && a !== f; ) {
      var w = a, C = w.alternate, O = w.stateNode;
      if (C !== null && C === f) break;
      w.tag === 5 && O !== null && (w = O, h ? (C = Vi(a, g), C != null && x.unshift(rs(a, C, w))) : h || (C = Vi(a, g), C != null && x.push(rs(a, C, w)))), a = a.return;
    }
    x.length !== 0 && n.push({ event: s, listeners: x });
  }
  var rm = /\r\n?/g, om = /\u0000|\uFFFD/g;
  function Nc(n) {
    return (typeof n == "string" ? n : "" + n).replace(rm, `
`).replace(om, "");
  }
  function gr(n, s, a) {
    if (s = Nc(s), Nc(n) !== s && a) throw Error(e(425));
  }
  function mr() {
  }
  var Sl = null, kl = null;
  function wl(n, s) {
    return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var bl = typeof setTimeout == "function" ? setTimeout : void 0, lm = typeof clearTimeout == "function" ? clearTimeout : void 0, Bc = typeof Promise == "function" ? Promise : void 0, am = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bc < "u" ? function(n) {
    return Bc.resolve(null).then(n).catch(um);
  } : bl;
  function um(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cl(n, s) {
    var a = s, f = 0;
    do {
      var h = a.nextSibling;
      if (n.removeChild(a), h && h.nodeType === 8) if (a = h.data, a === "/$") {
        if (f === 0) {
          n.removeChild(h), Qi(s);
          return;
        }
        f--;
      } else a !== "$" && a !== "$?" && a !== "$!" || f++;
      a = h;
    } while (a);
    Qi(s);
  }
  function pn(n) {
    for (; n != null; n = n.nextSibling) {
      var s = n.nodeType;
      if (s === 1 || s === 3) break;
      if (s === 8) {
        if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
        if (s === "/$") return null;
      }
    }
    return n;
  }
  function Vc(n) {
    n = n.previousSibling;
    for (var s = 0; n; ) {
      if (n.nodeType === 8) {
        var a = n.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (s === 0) return n;
          s--;
        } else a === "/$" && s++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var gi = Math.random().toString(36).slice(2), Ne = "__reactFiber$" + gi, os = "__reactProps$" + gi, $e = "__reactContainer$" + gi, Ml = "__reactEvents$" + gi, cm = "__reactListeners$" + gi, fm = "__reactHandles$" + gi;
  function In(n) {
    var s = n[Ne];
    if (s) return s;
    for (var a = n.parentNode; a; ) {
      if (s = a[$e] || a[Ne]) {
        if (a = s.alternate, s.child !== null || a !== null && a.child !== null) for (n = Vc(n); n !== null; ) {
          if (a = n[Ne]) return a;
          n = Vc(n);
        }
        return s;
      }
      n = a, a = n.parentNode;
    }
    return null;
  }
  function ls(n) {
    return n = n[Ne] || n[$e], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function mi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(e(33));
  }
  function yr(n) {
    return n[os] || null;
  }
  var Pl = [], yi = -1;
  function gn(n) {
    return { current: n };
  }
  function Et(n) {
    0 > yi || (n.current = Pl[yi], Pl[yi] = null, yi--);
  }
  function bt(n, s) {
    yi++, Pl[yi] = n.current, n.current = s;
  }
  var mn = {}, Zt = gn(mn), le = gn(!1), Nn = mn;
  function vi(n, s) {
    var a = n.type.contextTypes;
    if (!a) return mn;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === s) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, g;
    for (g in a) h[g] = s[g];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function ae(n) {
    return n = n.childContextTypes, n != null;
  }
  function vr() {
    Et(le), Et(Zt);
  }
  function jc(n, s, a) {
    if (Zt.current !== mn) throw Error(e(168));
    bt(Zt, s), bt(le, a);
  }
  function Wc(n, s, a) {
    var f = n.stateNode;
    if (s = s.childContextTypes, typeof f.getChildContext != "function") return a;
    f = f.getChildContext();
    for (var h in f) if (!(h in s)) throw Error(e(108, wt(n) || "Unknown", h));
    return $({}, a, f);
  }
  function xr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mn, Nn = Zt.current, bt(Zt, n), bt(le, le.current), !0;
  }
  function Hc(n, s, a) {
    var f = n.stateNode;
    if (!f) throw Error(e(169));
    a ? (n = Wc(n, s, Nn), f.__reactInternalMemoizedMergedChildContext = n, Et(le), Et(Zt), bt(Zt, n)) : Et(le), bt(le, a);
  }
  var Ye = null, _r = !1, El = !1;
  function Uc(n) {
    Ye === null ? Ye = [n] : Ye.push(n);
  }
  function dm(n) {
    _r = !0, Uc(n);
  }
  function yn() {
    if (!El && Ye !== null) {
      El = !0;
      var n = 0, s = St;
      try {
        var a = Ye;
        for (St = 1; n < a.length; n++) {
          var f = a[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Ye = null, _r = !1;
      } catch (h) {
        throw Ye !== null && (Ye = Ye.slice(n + 1)), Yu(Go, yn), h;
      } finally {
        St = s, El = !1;
      }
    }
    return null;
  }
  var xi = [], _i = 0, Sr = null, kr = 0, Se = [], ke = 0, Bn = null, Xe = 1, Ke = "";
  function Vn(n, s) {
    xi[_i++] = kr, xi[_i++] = Sr, Sr = n, kr = s;
  }
  function $c(n, s, a) {
    Se[ke++] = Xe, Se[ke++] = Ke, Se[ke++] = Bn, Bn = n;
    var f = Xe;
    n = Ke;
    var h = 32 - De(f) - 1;
    f &= ~(1 << h), a += 1;
    var g = 32 - De(s) + h;
    if (30 < g) {
      var x = h - h % 5;
      g = (f & (1 << x) - 1).toString(32), f >>= x, h -= x, Xe = 1 << 32 - De(s) + h | a << h | f, Ke = g + n;
    } else Xe = 1 << g | a << h | f, Ke = n;
  }
  function Dl(n) {
    n.return !== null && (Vn(n, 1), $c(n, 1, 0));
  }
  function Tl(n) {
    for (; n === Sr; ) Sr = xi[--_i], xi[_i] = null, kr = xi[--_i], xi[_i] = null;
    for (; n === Bn; ) Bn = Se[--ke], Se[ke] = null, Ke = Se[--ke], Se[ke] = null, Xe = Se[--ke], Se[ke] = null;
  }
  var ye = null, ve = null, Ot = !1, Oe = null;
  function Yc(n, s) {
    var a = Me(5, null, null, 0);
    a.elementType = "DELETED", a.stateNode = s, a.return = n, s = n.deletions, s === null ? (n.deletions = [a], n.flags |= 16) : s.push(a);
  }
  function Xc(n, s) {
    switch (n.tag) {
      case 5:
        var a = n.type;
        return s = s.nodeType !== 1 || a.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, ye = n, ve = pn(s.firstChild), !0) : !1;
      case 6:
        return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, ye = n, ve = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (a = Bn !== null ? { id: Xe, overflow: Ke } : null, n.memoizedState = { dehydrated: s, treeContext: a, retryLane: 1073741824 }, a = Me(18, null, null, 0), a.stateNode = s, a.return = n, n.child = a, ye = n, ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ol(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ll(n) {
    if (Ot) {
      var s = ve;
      if (s) {
        var a = s;
        if (!Xc(n, s)) {
          if (Ol(n)) throw Error(e(418));
          s = pn(a.nextSibling);
          var f = ye;
          s && Xc(n, s) ? Yc(f, a) : (n.flags = n.flags & -4097 | 2, Ot = !1, ye = n);
        }
      } else {
        if (Ol(n)) throw Error(e(418));
        n.flags = n.flags & -4097 | 2, Ot = !1, ye = n;
      }
    }
  }
  function Kc(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ye = n;
  }
  function wr(n) {
    if (n !== ye) return !1;
    if (!Ot) return Kc(n), Ot = !0, !1;
    var s;
    if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !wl(n.type, n.memoizedProps)), s && (s = ve)) {
      if (Ol(n)) throw Qc(), Error(e(418));
      for (; s; ) Yc(n, s), s = pn(s.nextSibling);
    }
    if (Kc(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(e(317));
      t: {
        for (n = n.nextSibling, s = 0; n; ) {
          if (n.nodeType === 8) {
            var a = n.data;
            if (a === "/$") {
              if (s === 0) {
                ve = pn(n.nextSibling);
                break t;
              }
              s--;
            } else a !== "$" && a !== "$!" && a !== "$?" || s++;
          }
          n = n.nextSibling;
        }
        ve = null;
      }
    } else ve = ye ? pn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Qc() {
    for (var n = ve; n; ) n = pn(n.nextSibling);
  }
  function Si() {
    ve = ye = null, Ot = !1;
  }
  function Rl(n) {
    Oe === null ? Oe = [n] : Oe.push(n);
  }
  var hm = A.ReactCurrentBatchConfig;
  function as(n, s, a) {
    if (n = a.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (a._owner) {
        if (a = a._owner, a) {
          if (a.tag !== 1) throw Error(e(309));
          var f = a.stateNode;
        }
        if (!f) throw Error(e(147, n));
        var h = f, g = "" + n;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === g ? s.ref : (s = function(x) {
          var w = h.refs;
          x === null ? delete w[g] : w[g] = x;
        }, s._stringRef = g, s);
      }
      if (typeof n != "string") throw Error(e(284));
      if (!a._owner) throw Error(e(290, n));
    }
    return n;
  }
  function br(n, s) {
    throw n = Object.prototype.toString.call(s), Error(e(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n));
  }
  function Gc(n) {
    var s = n._init;
    return s(n._payload);
  }
  function Zc(n) {
    function s(D, M) {
      if (n) {
        var T = D.deletions;
        T === null ? (D.deletions = [M], D.flags |= 16) : T.push(M);
      }
    }
    function a(D, M) {
      if (!n) return null;
      for (; M !== null; ) s(D, M), M = M.sibling;
      return null;
    }
    function f(D, M) {
      for (D = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? D.set(M.key, M) : D.set(M.index, M), M = M.sibling;
      return D;
    }
    function h(D, M) {
      return D = Cn(D, M), D.index = 0, D.sibling = null, D;
    }
    function g(D, M, T) {
      return D.index = T, n ? (T = D.alternate, T !== null ? (T = T.index, T < M ? (D.flags |= 2, M) : T) : (D.flags |= 2, M)) : (D.flags |= 1048576, M);
    }
    function x(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function w(D, M, T, W) {
      return M === null || M.tag !== 6 ? (M = ba(T, D.mode, W), M.return = D, M) : (M = h(M, T), M.return = D, M);
    }
    function C(D, M, T, W) {
      var q = T.type;
      return q === j ? N(D, M, T.props.children, W, T.key) : M !== null && (M.elementType === q || typeof q == "object" && q !== null && q.$$typeof === ft && Gc(q) === M.type) ? (W = h(M, T.props), W.ref = as(D, M, T), W.return = D, W) : (W = Kr(T.type, T.key, T.props, null, D.mode, W), W.ref = as(D, M, T), W.return = D, W);
    }
    function O(D, M, T, W) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== T.containerInfo || M.stateNode.implementation !== T.implementation ? (M = Ca(T, D.mode, W), M.return = D, M) : (M = h(M, T.children || []), M.return = D, M);
    }
    function N(D, M, T, W, q) {
      return M === null || M.tag !== 7 ? (M = Kn(T, D.mode, W, q), M.return = D, M) : (M = h(M, T), M.return = D, M);
    }
    function B(D, M, T) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = ba("" + M, D.mode, T), M.return = D, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case R:
            return T = Kr(M.type, M.key, M.props, null, D.mode, T), T.ref = as(D, null, M), T.return = D, T;
          case V:
            return M = Ca(M, D.mode, T), M.return = D, M;
          case ft:
            var W = M._init;
            return B(D, W(M._payload), T);
        }
        if (Ii(M) || X(M)) return M = Kn(M, D.mode, T, null), M.return = D, M;
        br(D, M);
      }
      return null;
    }
    function I(D, M, T, W) {
      var q = M !== null ? M.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return q !== null ? null : w(D, M, "" + T, W);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case R:
            return T.key === q ? C(D, M, T, W) : null;
          case V:
            return T.key === q ? O(D, M, T, W) : null;
          case ft:
            return q = T._init, I(
              D,
              M,
              q(T._payload),
              W
            );
        }
        if (Ii(T) || X(T)) return q !== null ? null : N(D, M, T, W, null);
        br(D, T);
      }
      return null;
    }
    function Y(D, M, T, W, q) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return D = D.get(T) || null, w(M, D, "" + W, q);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case R:
            return D = D.get(W.key === null ? T : W.key) || null, C(M, D, W, q);
          case V:
            return D = D.get(W.key === null ? T : W.key) || null, O(M, D, W, q);
          case ft:
            var J = W._init;
            return Y(D, M, T, J(W._payload), q);
        }
        if (Ii(W) || X(W)) return D = D.get(T) || null, N(M, D, W, q, null);
        br(M, W);
      }
      return null;
    }
    function Q(D, M, T, W) {
      for (var q = null, J = null, tt = M, it = M = 0, Xt = null; tt !== null && it < T.length; it++) {
        tt.index > it ? (Xt = tt, tt = null) : Xt = tt.sibling;
        var yt = I(D, tt, T[it], W);
        if (yt === null) {
          tt === null && (tt = Xt);
          break;
        }
        n && tt && yt.alternate === null && s(D, tt), M = g(yt, M, it), J === null ? q = yt : J.sibling = yt, J = yt, tt = Xt;
      }
      if (it === T.length) return a(D, tt), Ot && Vn(D, it), q;
      if (tt === null) {
        for (; it < T.length; it++) tt = B(D, T[it], W), tt !== null && (M = g(tt, M, it), J === null ? q = tt : J.sibling = tt, J = tt);
        return Ot && Vn(D, it), q;
      }
      for (tt = f(D, tt); it < T.length; it++) Xt = Y(tt, D, it, T[it], W), Xt !== null && (n && Xt.alternate !== null && tt.delete(Xt.key === null ? it : Xt.key), M = g(Xt, M, it), J === null ? q = Xt : J.sibling = Xt, J = Xt);
      return n && tt.forEach(function(Mn) {
        return s(D, Mn);
      }), Ot && Vn(D, it), q;
    }
    function G(D, M, T, W) {
      var q = X(T);
      if (typeof q != "function") throw Error(e(150));
      if (T = q.call(T), T == null) throw Error(e(151));
      for (var J = q = null, tt = M, it = M = 0, Xt = null, yt = T.next(); tt !== null && !yt.done; it++, yt = T.next()) {
        tt.index > it ? (Xt = tt, tt = null) : Xt = tt.sibling;
        var Mn = I(D, tt, yt.value, W);
        if (Mn === null) {
          tt === null && (tt = Xt);
          break;
        }
        n && tt && Mn.alternate === null && s(D, tt), M = g(Mn, M, it), J === null ? q = Mn : J.sibling = Mn, J = Mn, tt = Xt;
      }
      if (yt.done) return a(
        D,
        tt
      ), Ot && Vn(D, it), q;
      if (tt === null) {
        for (; !yt.done; it++, yt = T.next()) yt = B(D, yt.value, W), yt !== null && (M = g(yt, M, it), J === null ? q = yt : J.sibling = yt, J = yt);
        return Ot && Vn(D, it), q;
      }
      for (tt = f(D, tt); !yt.done; it++, yt = T.next()) yt = Y(tt, D, it, yt.value, W), yt !== null && (n && yt.alternate !== null && tt.delete(yt.key === null ? it : yt.key), M = g(yt, M, it), J === null ? q = yt : J.sibling = yt, J = yt);
      return n && tt.forEach(function(Ym) {
        return s(D, Ym);
      }), Ot && Vn(D, it), q;
    }
    function Bt(D, M, T, W) {
      if (typeof T == "object" && T !== null && T.type === j && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case R:
            t: {
              for (var q = T.key, J = M; J !== null; ) {
                if (J.key === q) {
                  if (q = T.type, q === j) {
                    if (J.tag === 7) {
                      a(D, J.sibling), M = h(J, T.props.children), M.return = D, D = M;
                      break t;
                    }
                  } else if (J.elementType === q || typeof q == "object" && q !== null && q.$$typeof === ft && Gc(q) === J.type) {
                    a(D, J.sibling), M = h(J, T.props), M.ref = as(D, J, T), M.return = D, D = M;
                    break t;
                  }
                  a(D, J);
                  break;
                } else s(D, J);
                J = J.sibling;
              }
              T.type === j ? (M = Kn(T.props.children, D.mode, W, T.key), M.return = D, D = M) : (W = Kr(T.type, T.key, T.props, null, D.mode, W), W.ref = as(D, M, T), W.return = D, D = W);
            }
            return x(D);
          case V:
            t: {
              for (J = T.key; M !== null; ) {
                if (M.key === J) if (M.tag === 4 && M.stateNode.containerInfo === T.containerInfo && M.stateNode.implementation === T.implementation) {
                  a(D, M.sibling), M = h(M, T.children || []), M.return = D, D = M;
                  break t;
                } else {
                  a(D, M);
                  break;
                }
                else s(D, M);
                M = M.sibling;
              }
              M = Ca(T, D.mode, W), M.return = D, D = M;
            }
            return x(D);
          case ft:
            return J = T._init, Bt(D, M, J(T._payload), W);
        }
        if (Ii(T)) return Q(D, M, T, W);
        if (X(T)) return G(D, M, T, W);
        br(D, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, M !== null && M.tag === 6 ? (a(D, M.sibling), M = h(M, T), M.return = D, D = M) : (a(D, M), M = ba(T, D.mode, W), M.return = D, D = M), x(D)) : a(D, M);
    }
    return Bt;
  }
  var ki = Zc(!0), qc = Zc(!1), Cr = gn(null), Mr = null, wi = null, Al = null;
  function zl() {
    Al = wi = Mr = null;
  }
  function Fl(n) {
    var s = Cr.current;
    Et(Cr), n._currentValue = s;
  }
  function Il(n, s, a) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & s) !== s ? (n.childLanes |= s, f !== null && (f.childLanes |= s)) : f !== null && (f.childLanes & s) !== s && (f.childLanes |= s), n === a) break;
      n = n.return;
    }
  }
  function bi(n, s) {
    Mr = n, Al = wi = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (ue = !0), n.firstContext = null);
  }
  function we(n) {
    var s = n._currentValue;
    if (Al !== n) if (n = { context: n, memoizedValue: s, next: null }, wi === null) {
      if (Mr === null) throw Error(e(308));
      wi = n, Mr.dependencies = { lanes: 0, firstContext: n };
    } else wi = wi.next = n;
    return s;
  }
  var jn = null;
  function Nl(n) {
    jn === null ? jn = [n] : jn.push(n);
  }
  function Jc(n, s, a, f) {
    var h = s.interleaved;
    return h === null ? (a.next = a, Nl(s)) : (a.next = h.next, h.next = a), s.interleaved = a, Qe(n, f);
  }
  function Qe(n, s) {
    n.lanes |= s;
    var a = n.alternate;
    for (a !== null && (a.lanes |= s), a = n, n = n.return; n !== null; ) n.childLanes |= s, a = n.alternate, a !== null && (a.childLanes |= s), a = n, n = n.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var vn = !1;
  function Bl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function tf(n, s) {
    n = n.updateQueue, s.updateQueue === n && (s.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ge(n, s) {
    return { eventTime: n, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function xn(n, s, a) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (mt & 2) !== 0) {
      var h = f.pending;
      return h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s, Qe(n, a);
    }
    return h = f.interleaved, h === null ? (s.next = s, Nl(f)) : (s.next = h.next, h.next = s), f.interleaved = s, Qe(n, a);
  }
  function Pr(n, s, a) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (a & 4194240) !== 0)) {
      var f = s.lanes;
      f &= n.pendingLanes, a |= f, s.lanes = a, Jo(n, a);
    }
  }
  function ef(n, s) {
    var a = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, a === f)) {
      var h = null, g = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var x = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
          g === null ? h = g = x : g = g.next = x, a = a.next;
        } while (a !== null);
        g === null ? h = g = s : g = g.next = s;
      } else h = g = s;
      a = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, n.updateQueue = a;
      return;
    }
    n = a.lastBaseUpdate, n === null ? a.firstBaseUpdate = s : n.next = s, a.lastBaseUpdate = s;
  }
  function Er(n, s, a, f) {
    var h = n.updateQueue;
    vn = !1;
    var g = h.firstBaseUpdate, x = h.lastBaseUpdate, w = h.shared.pending;
    if (w !== null) {
      h.shared.pending = null;
      var C = w, O = C.next;
      C.next = null, x === null ? g = O : x.next = O, x = C;
      var N = n.alternate;
      N !== null && (N = N.updateQueue, w = N.lastBaseUpdate, w !== x && (w === null ? N.firstBaseUpdate = O : w.next = O, N.lastBaseUpdate = C));
    }
    if (g !== null) {
      var B = h.baseState;
      x = 0, N = O = C = null, w = g;
      do {
        var I = w.lane, Y = w.eventTime;
        if ((f & I) === I) {
          N !== null && (N = N.next = {
            eventTime: Y,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          t: {
            var Q = n, G = w;
            switch (I = s, Y = a, G.tag) {
              case 1:
                if (Q = G.payload, typeof Q == "function") {
                  B = Q.call(Y, B, I);
                  break t;
                }
                B = Q;
                break t;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = G.payload, I = typeof Q == "function" ? Q.call(Y, B, I) : Q, I == null) break t;
                B = $({}, B, I);
                break t;
              case 2:
                vn = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, I = h.effects, I === null ? h.effects = [w] : I.push(w));
        } else Y = { eventTime: Y, lane: I, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, N === null ? (O = N = Y, C = B) : N = N.next = Y, x |= I;
        if (w = w.next, w === null) {
          if (w = h.shared.pending, w === null) break;
          I = w, w = I.next, I.next = null, h.lastBaseUpdate = I, h.shared.pending = null;
        }
      } while (!0);
      if (N === null && (C = B), h.baseState = C, h.firstBaseUpdate = O, h.lastBaseUpdate = N, s = h.shared.interleaved, s !== null) {
        h = s;
        do
          x |= h.lane, h = h.next;
        while (h !== s);
      } else g === null && (h.shared.lanes = 0);
      Un |= x, n.lanes = x, n.memoizedState = B;
    }
  }
  function nf(n, s, a) {
    if (n = s.effects, s.effects = null, n !== null) for (s = 0; s < n.length; s++) {
      var f = n[s], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = a, typeof h != "function") throw Error(e(191, h));
        h.call(f);
      }
    }
  }
  var us = {}, Be = gn(us), cs = gn(us), fs = gn(us);
  function Wn(n) {
    if (n === us) throw Error(e(174));
    return n;
  }
  function Vl(n, s) {
    switch (bt(fs, s), bt(cs, n), bt(Be, us), n = s.nodeType, n) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : jo(null, "");
        break;
      default:
        n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = jo(s, n);
    }
    Et(Be), bt(Be, s);
  }
  function Ci() {
    Et(Be), Et(cs), Et(fs);
  }
  function sf(n) {
    Wn(fs.current);
    var s = Wn(Be.current), a = jo(s, n.type);
    s !== a && (bt(cs, n), bt(Be, a));
  }
  function jl(n) {
    cs.current === n && (Et(Be), Et(cs));
  }
  var At = gn(0);
  function Dr(n) {
    for (var s = n; s !== null; ) {
      if (s.tag === 13) {
        var a = s.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return s;
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
        if ((s.flags & 128) !== 0) return s;
      } else if (s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === n) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n) return null;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
    return null;
  }
  var Wl = [];
  function Hl() {
    for (var n = 0; n < Wl.length; n++) Wl[n]._workInProgressVersionPrimary = null;
    Wl.length = 0;
  }
  var Tr = A.ReactCurrentDispatcher, Ul = A.ReactCurrentBatchConfig, Hn = 0, zt = null, Wt = null, $t = null, Or = !1, ds = !1, hs = 0, pm = 0;
  function qt() {
    throw Error(e(321));
  }
  function $l(n, s) {
    if (s === null) return !1;
    for (var a = 0; a < s.length && a < n.length; a++) if (!Te(n[a], s[a])) return !1;
    return !0;
  }
  function Yl(n, s, a, f, h, g) {
    if (Hn = g, zt = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Tr.current = n === null || n.memoizedState === null ? vm : xm, n = a(f, h), ds) {
      g = 0;
      do {
        if (ds = !1, hs = 0, 25 <= g) throw Error(e(301));
        g += 1, $t = Wt = null, s.updateQueue = null, Tr.current = _m, n = a(f, h);
      } while (ds);
    }
    if (Tr.current = Ar, s = Wt !== null && Wt.next !== null, Hn = 0, $t = Wt = zt = null, Or = !1, s) throw Error(e(300));
    return n;
  }
  function Xl() {
    var n = hs !== 0;
    return hs = 0, n;
  }
  function Ve() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return $t === null ? zt.memoizedState = $t = n : $t = $t.next = n, $t;
  }
  function be() {
    if (Wt === null) {
      var n = zt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Wt.next;
    var s = $t === null ? zt.memoizedState : $t.next;
    if (s !== null) $t = s, Wt = n;
    else {
      if (n === null) throw Error(e(310));
      Wt = n, n = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null }, $t === null ? zt.memoizedState = $t = n : $t = $t.next = n;
    }
    return $t;
  }
  function ps(n, s) {
    return typeof s == "function" ? s(n) : s;
  }
  function Kl(n) {
    var s = be(), a = s.queue;
    if (a === null) throw Error(e(311));
    a.lastRenderedReducer = n;
    var f = Wt, h = f.baseQueue, g = a.pending;
    if (g !== null) {
      if (h !== null) {
        var x = h.next;
        h.next = g.next, g.next = x;
      }
      f.baseQueue = h = g, a.pending = null;
    }
    if (h !== null) {
      g = h.next, f = f.baseState;
      var w = x = null, C = null, O = g;
      do {
        var N = O.lane;
        if ((Hn & N) === N) C !== null && (C = C.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), f = O.hasEagerState ? O.eagerState : n(f, O.action);
        else {
          var B = {
            lane: N,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          C === null ? (w = C = B, x = f) : C = C.next = B, zt.lanes |= N, Un |= N;
        }
        O = O.next;
      } while (O !== null && O !== g);
      C === null ? x = f : C.next = w, Te(f, s.memoizedState) || (ue = !0), s.memoizedState = f, s.baseState = x, s.baseQueue = C, a.lastRenderedState = f;
    }
    if (n = a.interleaved, n !== null) {
      h = n;
      do
        g = h.lane, zt.lanes |= g, Un |= g, h = h.next;
      while (h !== n);
    } else h === null && (a.lanes = 0);
    return [s.memoizedState, a.dispatch];
  }
  function Ql(n) {
    var s = be(), a = s.queue;
    if (a === null) throw Error(e(311));
    a.lastRenderedReducer = n;
    var f = a.dispatch, h = a.pending, g = s.memoizedState;
    if (h !== null) {
      a.pending = null;
      var x = h = h.next;
      do
        g = n(g, x.action), x = x.next;
      while (x !== h);
      Te(g, s.memoizedState) || (ue = !0), s.memoizedState = g, s.baseQueue === null && (s.baseState = g), a.lastRenderedState = g;
    }
    return [g, f];
  }
  function rf() {
  }
  function of(n, s) {
    var a = zt, f = be(), h = s(), g = !Te(f.memoizedState, h);
    if (g && (f.memoizedState = h, ue = !0), f = f.queue, Gl(uf.bind(null, a, f, n), [n]), f.getSnapshot !== s || g || $t !== null && $t.memoizedState.tag & 1) {
      if (a.flags |= 2048, gs(9, af.bind(null, a, f, h, s), void 0, null), Yt === null) throw Error(e(349));
      (Hn & 30) !== 0 || lf(a, s, h);
    }
    return h;
  }
  function lf(n, s, a) {
    n.flags |= 16384, n = { getSnapshot: s, value: a }, s = zt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, zt.updateQueue = s, s.stores = [n]) : (a = s.stores, a === null ? s.stores = [n] : a.push(n));
  }
  function af(n, s, a, f) {
    s.value = a, s.getSnapshot = f, cf(s) && ff(n);
  }
  function uf(n, s, a) {
    return a(function() {
      cf(s) && ff(n);
    });
  }
  function cf(n) {
    var s = n.getSnapshot;
    n = n.value;
    try {
      var a = s();
      return !Te(n, a);
    } catch {
      return !0;
    }
  }
  function ff(n) {
    var s = Qe(n, 1);
    s !== null && ze(s, n, 1, -1);
  }
  function df(n) {
    var s = Ve();
    return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: n }, s.queue = n, n = n.dispatch = ym.bind(null, zt, n), [s.memoizedState, n];
  }
  function gs(n, s, a, f) {
    return n = { tag: n, create: s, destroy: a, deps: f, next: null }, s = zt.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, zt.updateQueue = s, s.lastEffect = n.next = n) : (a = s.lastEffect, a === null ? s.lastEffect = n.next = n : (f = a.next, a.next = n, n.next = f, s.lastEffect = n)), n;
  }
  function hf() {
    return be().memoizedState;
  }
  function Lr(n, s, a, f) {
    var h = Ve();
    zt.flags |= n, h.memoizedState = gs(1 | s, a, void 0, f === void 0 ? null : f);
  }
  function Rr(n, s, a, f) {
    var h = be();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (Wt !== null) {
      var x = Wt.memoizedState;
      if (g = x.destroy, f !== null && $l(f, x.deps)) {
        h.memoizedState = gs(s, a, g, f);
        return;
      }
    }
    zt.flags |= n, h.memoizedState = gs(1 | s, a, g, f);
  }
  function pf(n, s) {
    return Lr(8390656, 8, n, s);
  }
  function Gl(n, s) {
    return Rr(2048, 8, n, s);
  }
  function gf(n, s) {
    return Rr(4, 2, n, s);
  }
  function mf(n, s) {
    return Rr(4, 4, n, s);
  }
  function yf(n, s) {
    if (typeof s == "function") return n = n(), s(n), function() {
      s(null);
    };
    if (s != null) return n = n(), s.current = n, function() {
      s.current = null;
    };
  }
  function vf(n, s, a) {
    return a = a != null ? a.concat([n]) : null, Rr(4, 4, yf.bind(null, s, n), a);
  }
  function Zl() {
  }
  function xf(n, s) {
    var a = be();
    s = s === void 0 ? null : s;
    var f = a.memoizedState;
    return f !== null && s !== null && $l(s, f[1]) ? f[0] : (a.memoizedState = [n, s], n);
  }
  function _f(n, s) {
    var a = be();
    s = s === void 0 ? null : s;
    var f = a.memoizedState;
    return f !== null && s !== null && $l(s, f[1]) ? f[0] : (n = n(), a.memoizedState = [n, s], n);
  }
  function Sf(n, s, a) {
    return (Hn & 21) === 0 ? (n.baseState && (n.baseState = !1, ue = !0), n.memoizedState = a) : (Te(a, s) || (a = Gu(), zt.lanes |= a, Un |= a, n.baseState = !0), s);
  }
  function gm(n, s) {
    var a = St;
    St = a !== 0 && 4 > a ? a : 4, n(!0);
    var f = Ul.transition;
    Ul.transition = {};
    try {
      n(!1), s();
    } finally {
      St = a, Ul.transition = f;
    }
  }
  function kf() {
    return be().memoizedState;
  }
  function mm(n, s, a) {
    var f = wn(n);
    if (a = { lane: f, action: a, hasEagerState: !1, eagerState: null, next: null }, wf(n)) bf(s, a);
    else if (a = Jc(n, s, a, f), a !== null) {
      var h = oe();
      ze(a, n, f, h), Cf(a, s, f);
    }
  }
  function ym(n, s, a) {
    var f = wn(n), h = { lane: f, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (wf(n)) bf(s, h);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = s.lastRenderedReducer, g !== null)) try {
        var x = s.lastRenderedState, w = g(x, a);
        if (h.hasEagerState = !0, h.eagerState = w, Te(w, x)) {
          var C = s.interleaved;
          C === null ? (h.next = h, Nl(s)) : (h.next = C.next, C.next = h), s.interleaved = h;
          return;
        }
      } catch {
      }
      a = Jc(n, s, h, f), a !== null && (h = oe(), ze(a, n, f, h), Cf(a, s, f));
    }
  }
  function wf(n) {
    var s = n.alternate;
    return n === zt || s !== null && s === zt;
  }
  function bf(n, s) {
    ds = Or = !0;
    var a = n.pending;
    a === null ? s.next = s : (s.next = a.next, a.next = s), n.pending = s;
  }
  function Cf(n, s, a) {
    if ((a & 4194240) !== 0) {
      var f = s.lanes;
      f &= n.pendingLanes, a |= f, s.lanes = a, Jo(n, a);
    }
  }
  var Ar = { readContext: we, useCallback: qt, useContext: qt, useEffect: qt, useImperativeHandle: qt, useInsertionEffect: qt, useLayoutEffect: qt, useMemo: qt, useReducer: qt, useRef: qt, useState: qt, useDebugValue: qt, useDeferredValue: qt, useTransition: qt, useMutableSource: qt, useSyncExternalStore: qt, useId: qt, unstable_isNewReconciler: !1 }, vm = { readContext: we, useCallback: function(n, s) {
    return Ve().memoizedState = [n, s === void 0 ? null : s], n;
  }, useContext: we, useEffect: pf, useImperativeHandle: function(n, s, a) {
    return a = a != null ? a.concat([n]) : null, Lr(
      4194308,
      4,
      yf.bind(null, s, n),
      a
    );
  }, useLayoutEffect: function(n, s) {
    return Lr(4194308, 4, n, s);
  }, useInsertionEffect: function(n, s) {
    return Lr(4, 2, n, s);
  }, useMemo: function(n, s) {
    var a = Ve();
    return s = s === void 0 ? null : s, n = n(), a.memoizedState = [n, s], n;
  }, useReducer: function(n, s, a) {
    var f = Ve();
    return s = a !== void 0 ? a(s) : s, f.memoizedState = f.baseState = s, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: s }, f.queue = n, n = n.dispatch = mm.bind(null, zt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var s = Ve();
    return n = { current: n }, s.memoizedState = n;
  }, useState: df, useDebugValue: Zl, useDeferredValue: function(n) {
    return Ve().memoizedState = n;
  }, useTransition: function() {
    var n = df(!1), s = n[0];
    return n = gm.bind(null, n[1]), Ve().memoizedState = n, [s, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, s, a) {
    var f = zt, h = Ve();
    if (Ot) {
      if (a === void 0) throw Error(e(407));
      a = a();
    } else {
      if (a = s(), Yt === null) throw Error(e(349));
      (Hn & 30) !== 0 || lf(f, s, a);
    }
    h.memoizedState = a;
    var g = { value: a, getSnapshot: s };
    return h.queue = g, pf(uf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, gs(9, af.bind(null, f, g, a, s), void 0, null), a;
  }, useId: function() {
    var n = Ve(), s = Yt.identifierPrefix;
    if (Ot) {
      var a = Ke, f = Xe;
      a = (f & ~(1 << 32 - De(f) - 1)).toString(32) + a, s = ":" + s + "R" + a, a = hs++, 0 < a && (s += "H" + a.toString(32)), s += ":";
    } else a = pm++, s = ":" + s + "r" + a.toString(32) + ":";
    return n.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, xm = {
    readContext: we,
    useCallback: xf,
    useContext: we,
    useEffect: Gl,
    useImperativeHandle: vf,
    useInsertionEffect: gf,
    useLayoutEffect: mf,
    useMemo: _f,
    useReducer: Kl,
    useRef: hf,
    useState: function() {
      return Kl(ps);
    },
    useDebugValue: Zl,
    useDeferredValue: function(n) {
      var s = be();
      return Sf(s, Wt.memoizedState, n);
    },
    useTransition: function() {
      var n = Kl(ps)[0], s = be().memoizedState;
      return [n, s];
    },
    useMutableSource: rf,
    useSyncExternalStore: of,
    useId: kf,
    unstable_isNewReconciler: !1
  }, _m = { readContext: we, useCallback: xf, useContext: we, useEffect: Gl, useImperativeHandle: vf, useInsertionEffect: gf, useLayoutEffect: mf, useMemo: _f, useReducer: Ql, useRef: hf, useState: function() {
    return Ql(ps);
  }, useDebugValue: Zl, useDeferredValue: function(n) {
    var s = be();
    return Wt === null ? s.memoizedState = n : Sf(s, Wt.memoizedState, n);
  }, useTransition: function() {
    var n = Ql(ps)[0], s = be().memoizedState;
    return [n, s];
  }, useMutableSource: rf, useSyncExternalStore: of, useId: kf, unstable_isNewReconciler: !1 };
  function Le(n, s) {
    if (n && n.defaultProps) {
      s = $({}, s), n = n.defaultProps;
      for (var a in n) s[a] === void 0 && (s[a] = n[a]);
      return s;
    }
    return s;
  }
  function ql(n, s, a, f) {
    s = n.memoizedState, a = a(f, s), a = a == null ? s : $({}, s, a), n.memoizedState = a, n.lanes === 0 && (n.updateQueue.baseState = a);
  }
  var zr = { isMounted: function(n) {
    return (n = n._reactInternals) ? Fn(n) === n : !1;
  }, enqueueSetState: function(n, s, a) {
    n = n._reactInternals;
    var f = oe(), h = wn(n), g = Ge(f, h);
    g.payload = s, a != null && (g.callback = a), s = xn(n, g, h), s !== null && (ze(s, n, h, f), Pr(s, n, h));
  }, enqueueReplaceState: function(n, s, a) {
    n = n._reactInternals;
    var f = oe(), h = wn(n), g = Ge(f, h);
    g.tag = 1, g.payload = s, a != null && (g.callback = a), s = xn(n, g, h), s !== null && (ze(s, n, h, f), Pr(s, n, h));
  }, enqueueForceUpdate: function(n, s) {
    n = n._reactInternals;
    var a = oe(), f = wn(n), h = Ge(a, f);
    h.tag = 2, s != null && (h.callback = s), s = xn(n, h, f), s !== null && (ze(s, n, f, a), Pr(s, n, f));
  } };
  function Mf(n, s, a, f, h, g, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, x) : s.prototype && s.prototype.isPureReactComponent ? !es(a, f) || !es(h, g) : !0;
  }
  function Pf(n, s, a) {
    var f = !1, h = mn, g = s.contextType;
    return typeof g == "object" && g !== null ? g = we(g) : (h = ae(s) ? Nn : Zt.current, f = s.contextTypes, g = (f = f != null) ? vi(n, h) : mn), s = new s(a, g), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = zr, n.stateNode = s, s._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = g), s;
  }
  function Ef(n, s, a, f) {
    n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(a, f), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(a, f), s.state !== n && zr.enqueueReplaceState(s, s.state, null);
  }
  function Jl(n, s, a, f) {
    var h = n.stateNode;
    h.props = a, h.state = n.memoizedState, h.refs = {}, Bl(n);
    var g = s.contextType;
    typeof g == "object" && g !== null ? h.context = we(g) : (g = ae(s) ? Nn : Zt.current, h.context = vi(n, g)), h.state = n.memoizedState, g = s.getDerivedStateFromProps, typeof g == "function" && (ql(n, s, g, a), h.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (s = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), s !== h.state && zr.enqueueReplaceState(h, h.state, null), Er(n, a, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Mi(n, s) {
    try {
      var a = "", f = s;
      do
        a += dt(f), f = f.return;
      while (f);
      var h = a;
    } catch (g) {
      h = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: s, stack: h, digest: null };
  }
  function ta(n, s, a) {
    return { value: n, source: null, stack: a ?? null, digest: s ?? null };
  }
  function ea(n, s) {
    try {
      console.error(s.value);
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  var Sm = typeof WeakMap == "function" ? WeakMap : Map;
  function Df(n, s, a) {
    a = Ge(-1, a), a.tag = 3, a.payload = { element: null };
    var f = s.value;
    return a.callback = function() {
      Wr || (Wr = !0, ma = f), ea(n, s);
    }, a;
  }
  function Tf(n, s, a) {
    a = Ge(-1, a), a.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = s.value;
      a.payload = function() {
        return f(h);
      }, a.callback = function() {
        ea(n, s);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
      ea(n, s), typeof f != "function" && (Sn === null ? Sn = /* @__PURE__ */ new Set([this]) : Sn.add(this));
      var x = s.stack;
      this.componentDidCatch(s.value, { componentStack: x !== null ? x : "" });
    }), a;
  }
  function Of(n, s, a) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Sm();
      var h = /* @__PURE__ */ new Set();
      f.set(s, h);
    } else h = f.get(s), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(s, h));
    h.has(a) || (h.add(a), n = zm.bind(null, n, s, a), s.then(n, n));
  }
  function Lf(n) {
    do {
      var s;
      if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Rf(n, s, a, f, h) {
    return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (s = Ge(-1, 1), s.tag = 2, xn(a, s, 1))), a.lanes |= 1), n) : (n.flags |= 65536, n.lanes = h, n);
  }
  var km = A.ReactCurrentOwner, ue = !1;
  function re(n, s, a, f) {
    s.child = n === null ? qc(s, null, a, f) : ki(s, n.child, a, f);
  }
  function Af(n, s, a, f, h) {
    a = a.render;
    var g = s.ref;
    return bi(s, h), f = Yl(n, s, a, f, g, h), a = Xl(), n !== null && !ue ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~h, Ze(n, s, h)) : (Ot && a && Dl(s), s.flags |= 1, re(n, s, f, h), s.child);
  }
  function zf(n, s, a, f, h) {
    if (n === null) {
      var g = a.type;
      return typeof g == "function" && !wa(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (s.tag = 15, s.type = g, Ff(n, s, g, f, h)) : (n = Kr(a.type, null, f, s, s.mode, h), n.ref = s.ref, n.return = s, s.child = n);
    }
    if (g = n.child, (n.lanes & h) === 0) {
      var x = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : es, a(x, f) && n.ref === s.ref) return Ze(n, s, h);
    }
    return s.flags |= 1, n = Cn(g, f), n.ref = s.ref, n.return = s, s.child = n;
  }
  function Ff(n, s, a, f, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (es(g, f) && n.ref === s.ref) if (ue = !1, s.pendingProps = f = g, (n.lanes & h) !== 0) (n.flags & 131072) !== 0 && (ue = !0);
      else return s.lanes = n.lanes, Ze(n, s, h);
    }
    return na(n, s, a, f, h);
  }
  function If(n, s, a) {
    var f = s.pendingProps, h = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, bt(Ei, xe), xe |= a;
    else {
      if ((a & 1073741824) === 0) return n = g !== null ? g.baseLanes | a : a, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, s.updateQueue = null, bt(Ei, xe), xe |= n, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : a, bt(Ei, xe), xe |= f;
    }
    else g !== null ? (f = g.baseLanes | a, s.memoizedState = null) : f = a, bt(Ei, xe), xe |= f;
    return re(n, s, h, a), s.child;
  }
  function Nf(n, s) {
    var a = s.ref;
    (n === null && a !== null || n !== null && n.ref !== a) && (s.flags |= 512, s.flags |= 2097152);
  }
  function na(n, s, a, f, h) {
    var g = ae(a) ? Nn : Zt.current;
    return g = vi(s, g), bi(s, h), a = Yl(n, s, a, f, g, h), f = Xl(), n !== null && !ue ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~h, Ze(n, s, h)) : (Ot && f && Dl(s), s.flags |= 1, re(n, s, a, h), s.child);
  }
  function Bf(n, s, a, f, h) {
    if (ae(a)) {
      var g = !0;
      xr(s);
    } else g = !1;
    if (bi(s, h), s.stateNode === null) Ir(n, s), Pf(s, a, f), Jl(s, a, f, h), f = !0;
    else if (n === null) {
      var x = s.stateNode, w = s.memoizedProps;
      x.props = w;
      var C = x.context, O = a.contextType;
      typeof O == "object" && O !== null ? O = we(O) : (O = ae(a) ? Nn : Zt.current, O = vi(s, O));
      var N = a.getDerivedStateFromProps, B = typeof N == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      B || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (w !== f || C !== O) && Ef(s, x, f, O), vn = !1;
      var I = s.memoizedState;
      x.state = I, Er(s, f, x, h), C = s.memoizedState, w !== f || I !== C || le.current || vn ? (typeof N == "function" && (ql(s, a, N, f), C = s.memoizedState), (w = vn || Mf(s, a, w, f, I, C, O)) ? (B || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = f, s.memoizedState = C), x.props = f, x.state = C, x.context = O, f = w) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308), f = !1);
    } else {
      x = s.stateNode, tf(n, s), w = s.memoizedProps, O = s.type === s.elementType ? w : Le(s.type, w), x.props = O, B = s.pendingProps, I = x.context, C = a.contextType, typeof C == "object" && C !== null ? C = we(C) : (C = ae(a) ? Nn : Zt.current, C = vi(s, C));
      var Y = a.getDerivedStateFromProps;
      (N = typeof Y == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (w !== B || I !== C) && Ef(s, x, f, C), vn = !1, I = s.memoizedState, x.state = I, Er(s, f, x, h);
      var Q = s.memoizedState;
      w !== B || I !== Q || le.current || vn ? (typeof Y == "function" && (ql(s, a, Y, f), Q = s.memoizedState), (O = vn || Mf(s, a, O, f, I, Q, C) || !1) ? (N || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(f, Q, C), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(f, Q, C)), typeof x.componentDidUpdate == "function" && (s.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || w === n.memoizedProps && I === n.memoizedState || (s.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && I === n.memoizedState || (s.flags |= 1024), s.memoizedProps = f, s.memoizedState = Q), x.props = f, x.state = Q, x.context = C, f = O) : (typeof x.componentDidUpdate != "function" || w === n.memoizedProps && I === n.memoizedState || (s.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && I === n.memoizedState || (s.flags |= 1024), f = !1);
    }
    return ia(n, s, a, f, g, h);
  }
  function ia(n, s, a, f, h, g) {
    Nf(n, s);
    var x = (s.flags & 128) !== 0;
    if (!f && !x) return h && Hc(s, a, !1), Ze(n, s, g);
    f = s.stateNode, km.current = s;
    var w = x && typeof a.getDerivedStateFromError != "function" ? null : f.render();
    return s.flags |= 1, n !== null && x ? (s.child = ki(s, n.child, null, g), s.child = ki(s, null, w, g)) : re(n, s, w, g), s.memoizedState = f.state, h && Hc(s, a, !0), s.child;
  }
  function Vf(n) {
    var s = n.stateNode;
    s.pendingContext ? jc(n, s.pendingContext, s.pendingContext !== s.context) : s.context && jc(n, s.context, !1), Vl(n, s.containerInfo);
  }
  function jf(n, s, a, f, h) {
    return Si(), Rl(h), s.flags |= 256, re(n, s, a, f), s.child;
  }
  var sa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ra(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Wf(n, s, a) {
    var f = s.pendingProps, h = At.current, g = !1, x = (s.flags & 128) !== 0, w;
    if ((w = x) || (w = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), w ? (g = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), bt(At, h & 1), n === null)
      return Ll(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (x = f.children, n = f.fallback, g ? (f = s.mode, g = s.child, x = { mode: "hidden", children: x }, (f & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = x) : g = Qr(x, f, 0, null), n = Kn(n, f, a, null), g.return = s, n.return = s, g.sibling = n, s.child = g, s.child.memoizedState = ra(a), s.memoizedState = sa, n) : oa(s, x));
    if (h = n.memoizedState, h !== null && (w = h.dehydrated, w !== null)) return wm(n, s, x, f, w, h, a);
    if (g) {
      g = f.fallback, x = s.mode, h = n.child, w = h.sibling;
      var C = { mode: "hidden", children: f.children };
      return (x & 1) === 0 && s.child !== h ? (f = s.child, f.childLanes = 0, f.pendingProps = C, s.deletions = null) : (f = Cn(h, C), f.subtreeFlags = h.subtreeFlags & 14680064), w !== null ? g = Cn(w, g) : (g = Kn(g, x, a, null), g.flags |= 2), g.return = s, f.return = s, f.sibling = g, s.child = f, f = g, g = s.child, x = n.child.memoizedState, x = x === null ? ra(a) : { baseLanes: x.baseLanes | a, cachePool: null, transitions: x.transitions }, g.memoizedState = x, g.childLanes = n.childLanes & ~a, s.memoizedState = sa, f;
    }
    return g = n.child, n = g.sibling, f = Cn(g, { mode: "visible", children: f.children }), (s.mode & 1) === 0 && (f.lanes = a), f.return = s, f.sibling = null, n !== null && (a = s.deletions, a === null ? (s.deletions = [n], s.flags |= 16) : a.push(n)), s.child = f, s.memoizedState = null, f;
  }
  function oa(n, s) {
    return s = Qr({ mode: "visible", children: s }, n.mode, 0, null), s.return = n, n.child = s;
  }
  function Fr(n, s, a, f) {
    return f !== null && Rl(f), ki(s, n.child, null, a), n = oa(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n;
  }
  function wm(n, s, a, f, h, g, x) {
    if (a)
      return s.flags & 256 ? (s.flags &= -257, f = ta(Error(e(422))), Fr(n, s, x, f)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (g = f.fallback, h = s.mode, f = Qr({ mode: "visible", children: f.children }, h, 0, null), g = Kn(g, h, x, null), g.flags |= 2, f.return = s, g.return = s, f.sibling = g, s.child = f, (s.mode & 1) !== 0 && ki(s, n.child, null, x), s.child.memoizedState = ra(x), s.memoizedState = sa, g);
    if ((s.mode & 1) === 0) return Fr(n, s, x, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var w = f.dgst;
      return f = w, g = Error(e(419)), f = ta(g, f, void 0), Fr(n, s, x, f);
    }
    if (w = (x & n.childLanes) !== 0, ue || w) {
      if (f = Yt, f !== null) {
        switch (x & -x) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
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
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = (h & (f.suspendedLanes | x)) !== 0 ? 0 : h, h !== 0 && h !== g.retryLane && (g.retryLane = h, Qe(n, h), ze(f, n, h, -1));
      }
      return ka(), f = ta(Error(e(421))), Fr(n, s, x, f);
    }
    return h.data === "$?" ? (s.flags |= 128, s.child = n.child, s = Fm.bind(null, n), h._reactRetry = s, null) : (n = g.treeContext, ve = pn(h.nextSibling), ye = s, Ot = !0, Oe = null, n !== null && (Se[ke++] = Xe, Se[ke++] = Ke, Se[ke++] = Bn, Xe = n.id, Ke = n.overflow, Bn = s), s = oa(s, f.children), s.flags |= 4096, s);
  }
  function Hf(n, s, a) {
    n.lanes |= s;
    var f = n.alternate;
    f !== null && (f.lanes |= s), Il(n.return, s, a);
  }
  function la(n, s, a, f, h) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: f, tail: a, tailMode: h } : (g.isBackwards = s, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = a, g.tailMode = h);
  }
  function Uf(n, s, a) {
    var f = s.pendingProps, h = f.revealOrder, g = f.tail;
    if (re(n, s, f.children, a), f = At.current, (f & 2) !== 0) f = f & 1 | 2, s.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) t: for (n = s.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Hf(n, a, s);
        else if (n.tag === 19) Hf(n, a, s);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === s) break t;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === s) break t;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (bt(At, f), (s.mode & 1) === 0) s.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (a = s.child, h = null; a !== null; ) n = a.alternate, n !== null && Dr(n) === null && (h = a), a = a.sibling;
        a = h, a === null ? (h = s.child, s.child = null) : (h = a.sibling, a.sibling = null), la(s, !1, h, a, g);
        break;
      case "backwards":
        for (a = null, h = s.child, s.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && Dr(n) === null) {
            s.child = h;
            break;
          }
          n = h.sibling, h.sibling = a, a = h, h = n;
        }
        la(s, !0, a, null, g);
        break;
      case "together":
        la(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function Ir(n, s) {
    (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Ze(n, s, a) {
    if (n !== null && (s.dependencies = n.dependencies), Un |= s.lanes, (a & s.childLanes) === 0) return null;
    if (n !== null && s.child !== n.child) throw Error(e(153));
    if (s.child !== null) {
      for (n = s.child, a = Cn(n, n.pendingProps), s.child = a, a.return = s; n.sibling !== null; ) n = n.sibling, a = a.sibling = Cn(n, n.pendingProps), a.return = s;
      a.sibling = null;
    }
    return s.child;
  }
  function bm(n, s, a) {
    switch (s.tag) {
      case 3:
        Vf(s), Si();
        break;
      case 5:
        sf(s);
        break;
      case 1:
        ae(s.type) && xr(s);
        break;
      case 4:
        Vl(s, s.stateNode.containerInfo);
        break;
      case 10:
        var f = s.type._context, h = s.memoizedProps.value;
        bt(Cr, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = s.memoizedState, f !== null)
          return f.dehydrated !== null ? (bt(At, At.current & 1), s.flags |= 128, null) : (a & s.child.childLanes) !== 0 ? Wf(n, s, a) : (bt(At, At.current & 1), n = Ze(n, s, a), n !== null ? n.sibling : null);
        bt(At, At.current & 1);
        break;
      case 19:
        if (f = (a & s.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (f) return Uf(n, s, a);
          s.flags |= 128;
        }
        if (h = s.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), bt(At, At.current), f) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, If(n, s, a);
    }
    return Ze(n, s, a);
  }
  var $f, aa, Yf, Xf;
  $f = function(n, s) {
    for (var a = s.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) n.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === s) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === s) return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }, aa = function() {
  }, Yf = function(n, s, a, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = s.stateNode, Wn(Be.current);
      var g = null;
      switch (a) {
        case "input":
          h = Io(n, h), f = Io(n, f), g = [];
          break;
        case "select":
          h = $({}, h, { value: void 0 }), f = $({}, f, { value: void 0 }), g = [];
          break;
        case "textarea":
          h = Vo(n, h), f = Vo(n, f), g = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = mr);
      }
      Wo(a, f);
      var x;
      a = null;
      for (O in h) if (!f.hasOwnProperty(O) && h.hasOwnProperty(O) && h[O] != null) if (O === "style") {
        var w = h[O];
        for (x in w) w.hasOwnProperty(x) && (a || (a = {}), a[x] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (o.hasOwnProperty(O) ? g || (g = []) : (g = g || []).push(O, null));
      for (O in f) {
        var C = f[O];
        if (w = h?.[O], f.hasOwnProperty(O) && C !== w && (C != null || w != null)) if (O === "style") if (w) {
          for (x in w) !w.hasOwnProperty(x) || C && C.hasOwnProperty(x) || (a || (a = {}), a[x] = "");
          for (x in C) C.hasOwnProperty(x) && w[x] !== C[x] && (a || (a = {}), a[x] = C[x]);
        } else a || (g || (g = []), g.push(
          O,
          a
        )), a = C;
        else O === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, w = w ? w.__html : void 0, C != null && w !== C && (g = g || []).push(O, C)) : O === "children" ? typeof C != "string" && typeof C != "number" || (g = g || []).push(O, "" + C) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (o.hasOwnProperty(O) ? (C != null && O === "onScroll" && Pt("scroll", n), g || w === C || (g = [])) : (g = g || []).push(O, C));
      }
      a && (g = g || []).push("style", a);
      var O = g;
      (s.updateQueue = O) && (s.flags |= 4);
    }
  }, Xf = function(n, s, a, f) {
    a !== f && (s.flags |= 4);
  };
  function ms(n, s) {
    if (!Ot) switch (n.tailMode) {
      case "hidden":
        s = n.tail;
        for (var a = null; s !== null; ) s.alternate !== null && (a = s), s = s.sibling;
        a === null ? n.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = n.tail;
        for (var f = null; a !== null; ) a.alternate !== null && (f = a), a = a.sibling;
        f === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function Jt(n) {
    var s = n.alternate !== null && n.alternate.child === n.child, a = 0, f = 0;
    if (s) for (var h = n.child; h !== null; ) a |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) a |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = a, s;
  }
  function Cm(n, s, a) {
    var f = s.pendingProps;
    switch (Tl(s), s.tag) {
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
        return Jt(s), null;
      case 1:
        return ae(s.type) && vr(), Jt(s), null;
      case 3:
        return f = s.stateNode, Ci(), Et(le), Et(Zt), Hl(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (wr(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, Oe !== null && (xa(Oe), Oe = null))), aa(n, s), Jt(s), null;
      case 5:
        jl(s);
        var h = Wn(fs.current);
        if (a = s.type, n !== null && s.stateNode != null) Yf(n, s, a, f, h), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!f) {
            if (s.stateNode === null) throw Error(e(166));
            return Jt(s), null;
          }
          if (n = Wn(Be.current), wr(s)) {
            f = s.stateNode, a = s.type;
            var g = s.memoizedProps;
            switch (f[Ne] = s, f[os] = g, n = (s.mode & 1) !== 0, a) {
              case "dialog":
                Pt("cancel", f), Pt("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < is.length; h++) Pt(is[h], f);
                break;
              case "source":
                Pt("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  f
                ), Pt("load", f);
                break;
              case "details":
                Pt("toggle", f);
                break;
              case "input":
                Mu(f, g), Pt("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!g.multiple }, Pt("invalid", f);
                break;
              case "textarea":
                Du(f, g), Pt("invalid", f);
            }
            Wo(a, g), h = null;
            for (var x in g) if (g.hasOwnProperty(x)) {
              var w = g[x];
              x === "children" ? typeof w == "string" ? f.textContent !== w && (g.suppressHydrationWarning !== !0 && gr(f.textContent, w, n), h = ["children", w]) : typeof w == "number" && f.textContent !== "" + w && (g.suppressHydrationWarning !== !0 && gr(
                f.textContent,
                w,
                n
              ), h = ["children", "" + w]) : o.hasOwnProperty(x) && w != null && x === "onScroll" && Pt("scroll", f);
            }
            switch (a) {
              case "input":
                Ys(f), Eu(f, g, !0);
                break;
              case "textarea":
                Ys(f), Ou(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = mr);
            }
            f = h, s.updateQueue = f, f !== null && (s.flags |= 4);
          } else {
            x = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Lu(a)), n === "http://www.w3.org/1999/xhtml" ? a === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = x.createElement(a, { is: f.is }) : (n = x.createElement(a), a === "select" && (x = n, f.multiple ? x.multiple = !0 : f.size && (x.size = f.size))) : n = x.createElementNS(n, a), n[Ne] = s, n[os] = f, $f(n, s, !1, !1), s.stateNode = n;
            t: {
              switch (x = Ho(a, f), a) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < is.length; h++) Pt(is[h], n);
                  h = f;
                  break;
                case "source":
                  Pt("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), h = f;
                  break;
                case "details":
                  Pt("toggle", n), h = f;
                  break;
                case "input":
                  Mu(n, f), h = Io(n, f), Pt("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = $({}, f, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Du(n, f), h = Vo(n, f), Pt("invalid", n);
                  break;
                default:
                  h = f;
              }
              Wo(a, h), w = h;
              for (g in w) if (w.hasOwnProperty(g)) {
                var C = w[g];
                g === "style" ? zu(n, C) : g === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Ru(n, C)) : g === "children" ? typeof C == "string" ? (a !== "textarea" || C !== "") && Ni(n, C) : typeof C == "number" && Ni(n, "" + C) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (o.hasOwnProperty(g) ? C != null && g === "onScroll" && Pt("scroll", n) : C != null && z(n, g, C, x));
              }
              switch (a) {
                case "input":
                  Ys(n), Eu(n, f, !1);
                  break;
                case "textarea":
                  Ys(n), Ou(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + _t(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, g = f.value, g != null ? oi(n, !!f.multiple, g, !1) : f.defaultValue != null && oi(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = mr);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break t;
                case "img":
                  f = !0;
                  break t;
                default:
                  f = !1;
              }
            }
            f && (s.flags |= 4);
          }
          s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
        }
        return Jt(s), null;
      case 6:
        if (n && s.stateNode != null) Xf(n, s, n.memoizedProps, f);
        else {
          if (typeof f != "string" && s.stateNode === null) throw Error(e(166));
          if (a = Wn(fs.current), Wn(Be.current), wr(s)) {
            if (f = s.stateNode, a = s.memoizedProps, f[Ne] = s, (g = f.nodeValue !== a) && (n = ye, n !== null)) switch (n.tag) {
              case 3:
                gr(f.nodeValue, a, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gr(f.nodeValue, a, (n.mode & 1) !== 0);
            }
            g && (s.flags |= 4);
          } else f = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(f), f[Ne] = s, s.stateNode = f;
        }
        return Jt(s), null;
      case 13:
        if (Et(At), f = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ot && ve !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Qc(), Si(), s.flags |= 98560, g = !1;
          else if (g = wr(s), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(e(318));
              if (g = s.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(e(317));
              g[Ne] = s;
            } else Si(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            Jt(s), g = !1;
          } else Oe !== null && (xa(Oe), Oe = null), g = !0;
          if (!g) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = a, s) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || (At.current & 1) !== 0 ? Ht === 0 && (Ht = 3) : ka())), s.updateQueue !== null && (s.flags |= 4), Jt(s), null);
      case 4:
        return Ci(), aa(n, s), n === null && ss(s.stateNode.containerInfo), Jt(s), null;
      case 10:
        return Fl(s.type._context), Jt(s), null;
      case 17:
        return ae(s.type) && vr(), Jt(s), null;
      case 19:
        if (Et(At), g = s.memoizedState, g === null) return Jt(s), null;
        if (f = (s.flags & 128) !== 0, x = g.rendering, x === null) if (f) ms(g, !1);
        else {
          if (Ht !== 0 || n !== null && (n.flags & 128) !== 0) for (n = s.child; n !== null; ) {
            if (x = Dr(n), x !== null) {
              for (s.flags |= 128, ms(g, !1), f = x.updateQueue, f !== null && (s.updateQueue = f, s.flags |= 4), s.subtreeFlags = 0, f = a, a = s.child; a !== null; ) g = a, n = f, g.flags &= 14680066, x = g.alternate, x === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = x.childLanes, g.lanes = x.lanes, g.child = x.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = x.memoizedProps, g.memoizedState = x.memoizedState, g.updateQueue = x.updateQueue, g.type = x.type, n = x.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), a = a.sibling;
              return bt(At, At.current & 1 | 2), s.child;
            }
            n = n.sibling;
          }
          g.tail !== null && Nt() > Di && (s.flags |= 128, f = !0, ms(g, !1), s.lanes = 4194304);
        }
        else {
          if (!f) if (n = Dr(x), n !== null) {
            if (s.flags |= 128, f = !0, a = n.updateQueue, a !== null && (s.updateQueue = a, s.flags |= 4), ms(g, !0), g.tail === null && g.tailMode === "hidden" && !x.alternate && !Ot) return Jt(s), null;
          } else 2 * Nt() - g.renderingStartTime > Di && a !== 1073741824 && (s.flags |= 128, f = !0, ms(g, !1), s.lanes = 4194304);
          g.isBackwards ? (x.sibling = s.child, s.child = x) : (a = g.last, a !== null ? a.sibling = x : s.child = x, g.last = x);
        }
        return g.tail !== null ? (s = g.tail, g.rendering = s, g.tail = s.sibling, g.renderingStartTime = Nt(), s.sibling = null, a = At.current, bt(At, f ? a & 1 | 2 : a & 1), s) : (Jt(s), null);
      case 22:
      case 23:
        return Sa(), f = s.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (s.flags |= 8192), f && (s.mode & 1) !== 0 ? (xe & 1073741824) !== 0 && (Jt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : Jt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(e(156, s.tag));
  }
  function Mm(n, s) {
    switch (Tl(s), s.tag) {
      case 1:
        return ae(s.type) && vr(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
      case 3:
        return Ci(), Et(le), Et(Zt), Hl(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
      case 5:
        return jl(s), null;
      case 13:
        if (Et(At), n = s.memoizedState, n !== null && n.dehydrated !== null) {
          if (s.alternate === null) throw Error(e(340));
          Si();
        }
        return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
      case 19:
        return Et(At), null;
      case 4:
        return Ci(), null;
      case 10:
        return Fl(s.type._context), null;
      case 22:
      case 23:
        return Sa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nr = !1, te = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function Pi(n, s) {
    var a = n.ref;
    if (a !== null) if (typeof a == "function") try {
      a(null);
    } catch (f) {
      Ft(n, s, f);
    }
    else a.current = null;
  }
  function ua(n, s, a) {
    try {
      a();
    } catch (f) {
      Ft(n, s, f);
    }
  }
  var Kf = !1;
  function Em(n, s) {
    if (Sl = sr, n = Cc(), hl(n)) {
      if ("selectionStart" in n) var a = { start: n.selectionStart, end: n.selectionEnd };
      else t: {
        a = (a = n.ownerDocument) && a.defaultView || window;
        var f = a.getSelection && a.getSelection();
        if (f && f.rangeCount !== 0) {
          a = f.anchorNode;
          var h = f.anchorOffset, g = f.focusNode;
          f = f.focusOffset;
          try {
            a.nodeType, g.nodeType;
          } catch {
            a = null;
            break t;
          }
          var x = 0, w = -1, C = -1, O = 0, N = 0, B = n, I = null;
          e: for (; ; ) {
            for (var Y; B !== a || h !== 0 && B.nodeType !== 3 || (w = x + h), B !== g || f !== 0 && B.nodeType !== 3 || (C = x + f), B.nodeType === 3 && (x += B.nodeValue.length), (Y = B.firstChild) !== null; )
              I = B, B = Y;
            for (; ; ) {
              if (B === n) break e;
              if (I === a && ++O === h && (w = x), I === g && ++N === f && (C = x), (Y = B.nextSibling) !== null) break;
              B = I, I = B.parentNode;
            }
            B = Y;
          }
          a = w === -1 || C === -1 ? null : { start: w, end: C };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kl = { focusedElem: n, selectionRange: a }, sr = !1, K = s; K !== null; ) if (s = K, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, K = n;
    else for (; K !== null; ) {
      s = K;
      try {
        var Q = s.alternate;
        if ((s.flags & 1024) !== 0) switch (s.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Q !== null) {
              var G = Q.memoizedProps, Bt = Q.memoizedState, D = s.stateNode, M = D.getSnapshotBeforeUpdate(s.elementType === s.type ? G : Le(s.type, G), Bt);
              D.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var T = s.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(e(163));
        }
      } catch (W) {
        Ft(s, s.return, W);
      }
      if (n = s.sibling, n !== null) {
        n.return = s.return, K = n;
        break;
      }
      K = s.return;
    }
    return Q = Kf, Kf = !1, Q;
  }
  function ys(n, s, a) {
    var f = s.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var g = h.destroy;
          h.destroy = void 0, g !== void 0 && ua(s, a, g);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function Br(n, s) {
    if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
      var a = s = s.next;
      do {
        if ((a.tag & n) === n) {
          var f = a.create;
          a.destroy = f();
        }
        a = a.next;
      } while (a !== s);
    }
  }
  function ca(n) {
    var s = n.ref;
    if (s !== null) {
      var a = n.stateNode;
      n.tag, n = a, typeof s == "function" ? s(n) : s.current = n;
    }
  }
  function Qf(n) {
    var s = n.alternate;
    s !== null && (n.alternate = null, Qf(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[Ne], delete s[os], delete s[Ml], delete s[cm], delete s[fm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Gf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zf(n) {
    t: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Gf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function fa(n, s, a) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, s ? a.nodeType === 8 ? a.parentNode.insertBefore(n, s) : a.insertBefore(n, s) : (a.nodeType === 8 ? (s = a.parentNode, s.insertBefore(n, a)) : (s = a, s.appendChild(n)), a = a._reactRootContainer, a != null || s.onclick !== null || (s.onclick = mr));
    else if (f !== 4 && (n = n.child, n !== null)) for (fa(n, s, a), n = n.sibling; n !== null; ) fa(n, s, a), n = n.sibling;
  }
  function da(n, s, a) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, s ? a.insertBefore(n, s) : a.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (da(n, s, a), n = n.sibling; n !== null; ) da(n, s, a), n = n.sibling;
  }
  var Qt = null, Re = !1;
  function _n(n, s, a) {
    for (a = a.child; a !== null; ) qf(n, s, a), a = a.sibling;
  }
  function qf(n, s, a) {
    if (Ie && typeof Ie.onCommitFiberUnmount == "function") try {
      Ie.onCommitFiberUnmount(qs, a);
    } catch {
    }
    switch (a.tag) {
      case 5:
        te || Pi(a, s);
      case 6:
        var f = Qt, h = Re;
        Qt = null, _n(n, s, a), Qt = f, Re = h, Qt !== null && (Re ? (n = Qt, a = a.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(a) : n.removeChild(a)) : Qt.removeChild(a.stateNode));
        break;
      case 18:
        Qt !== null && (Re ? (n = Qt, a = a.stateNode, n.nodeType === 8 ? Cl(n.parentNode, a) : n.nodeType === 1 && Cl(n, a), Qi(n)) : Cl(Qt, a.stateNode));
        break;
      case 4:
        f = Qt, h = Re, Qt = a.stateNode.containerInfo, Re = !0, _n(n, s, a), Qt = f, Re = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!te && (f = a.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var g = h, x = g.destroy;
            g = g.tag, x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && ua(a, s, x), h = h.next;
          } while (h !== f);
        }
        _n(n, s, a);
        break;
      case 1:
        if (!te && (Pi(a, s), f = a.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = a.memoizedProps, f.state = a.memoizedState, f.componentWillUnmount();
        } catch (w) {
          Ft(a, s, w);
        }
        _n(n, s, a);
        break;
      case 21:
        _n(n, s, a);
        break;
      case 22:
        a.mode & 1 ? (te = (f = te) || a.memoizedState !== null, _n(n, s, a), te = f) : _n(n, s, a);
        break;
      default:
        _n(n, s, a);
    }
  }
  function Jf(n) {
    var s = n.updateQueue;
    if (s !== null) {
      n.updateQueue = null;
      var a = n.stateNode;
      a === null && (a = n.stateNode = new Pm()), s.forEach(function(f) {
        var h = Im.bind(null, n, f);
        a.has(f) || (a.add(f), f.then(h, h));
      });
    }
  }
  function Ae(n, s) {
    var a = s.deletions;
    if (a !== null) for (var f = 0; f < a.length; f++) {
      var h = a[f];
      try {
        var g = n, x = s, w = x;
        t: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              Qt = w.stateNode, Re = !1;
              break t;
            case 3:
              Qt = w.stateNode.containerInfo, Re = !0;
              break t;
            case 4:
              Qt = w.stateNode.containerInfo, Re = !0;
              break t;
          }
          w = w.return;
        }
        if (Qt === null) throw Error(e(160));
        qf(g, x, h), Qt = null, Re = !1;
        var C = h.alternate;
        C !== null && (C.return = null), h.return = null;
      } catch (O) {
        Ft(h, s, O);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) td(s, n), s = s.sibling;
  }
  function td(n, s) {
    var a = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ae(s, n), je(n), f & 4) {
          try {
            ys(3, n, n.return), Br(3, n);
          } catch (G) {
            Ft(n, n.return, G);
          }
          try {
            ys(5, n, n.return);
          } catch (G) {
            Ft(n, n.return, G);
          }
        }
        break;
      case 1:
        Ae(s, n), je(n), f & 512 && a !== null && Pi(a, a.return);
        break;
      case 5:
        if (Ae(s, n), je(n), f & 512 && a !== null && Pi(a, a.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Ni(h, "");
          } catch (G) {
            Ft(n, n.return, G);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var g = n.memoizedProps, x = a !== null ? a.memoizedProps : g, w = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            w === "input" && g.type === "radio" && g.name != null && Pu(h, g), Ho(w, x);
            var O = Ho(w, g);
            for (x = 0; x < C.length; x += 2) {
              var N = C[x], B = C[x + 1];
              N === "style" ? zu(h, B) : N === "dangerouslySetInnerHTML" ? Ru(h, B) : N === "children" ? Ni(h, B) : z(h, N, B, O);
            }
            switch (w) {
              case "input":
                No(h, g);
                break;
              case "textarea":
                Tu(h, g);
                break;
              case "select":
                var I = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!g.multiple;
                var Y = g.value;
                Y != null ? oi(h, !!g.multiple, Y, !1) : I !== !!g.multiple && (g.defaultValue != null ? oi(
                  h,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : oi(h, !!g.multiple, g.multiple ? [] : "", !1));
            }
            h[os] = g;
          } catch (G) {
            Ft(n, n.return, G);
          }
        }
        break;
      case 6:
        if (Ae(s, n), je(n), f & 4) {
          if (n.stateNode === null) throw Error(e(162));
          h = n.stateNode, g = n.memoizedProps;
          try {
            h.nodeValue = g;
          } catch (G) {
            Ft(n, n.return, G);
          }
        }
        break;
      case 3:
        if (Ae(s, n), je(n), f & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Qi(s.containerInfo);
        } catch (G) {
          Ft(n, n.return, G);
        }
        break;
      case 4:
        Ae(s, n), je(n);
        break;
      case 13:
        Ae(s, n), je(n), h = n.child, h.flags & 8192 && (g = h.memoizedState !== null, h.stateNode.isHidden = g, !g || h.alternate !== null && h.alternate.memoizedState !== null || (ga = Nt())), f & 4 && Jf(n);
        break;
      case 22:
        if (N = a !== null && a.memoizedState !== null, n.mode & 1 ? (te = (O = te) || N, Ae(s, n), te = O) : Ae(s, n), je(n), f & 8192) {
          if (O = n.memoizedState !== null, (n.stateNode.isHidden = O) && !N && (n.mode & 1) !== 0) for (K = n, N = n.child; N !== null; ) {
            for (B = K = N; K !== null; ) {
              switch (I = K, Y = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ys(4, I, I.return);
                  break;
                case 1:
                  Pi(I, I.return);
                  var Q = I.stateNode;
                  if (typeof Q.componentWillUnmount == "function") {
                    f = I, a = I.return;
                    try {
                      s = f, Q.props = s.memoizedProps, Q.state = s.memoizedState, Q.componentWillUnmount();
                    } catch (G) {
                      Ft(f, a, G);
                    }
                  }
                  break;
                case 5:
                  Pi(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    id(B);
                    continue;
                  }
              }
              Y !== null ? (Y.return = I, K = Y) : id(B);
            }
            N = N.sibling;
          }
          t: for (N = null, B = n; ; ) {
            if (B.tag === 5) {
              if (N === null) {
                N = B;
                try {
                  h = B.stateNode, O ? (g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (w = B.stateNode, C = B.memoizedProps.style, x = C != null && C.hasOwnProperty("display") ? C.display : null, w.style.display = Au("display", x));
                } catch (G) {
                  Ft(n, n.return, G);
                }
              }
            } else if (B.tag === 6) {
              if (N === null) try {
                B.stateNode.nodeValue = O ? "" : B.memoizedProps;
              } catch (G) {
                Ft(n, n.return, G);
              }
            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === n) && B.child !== null) {
              B.child.return = B, B = B.child;
              continue;
            }
            if (B === n) break t;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === n) break t;
              N === B && (N = null), B = B.return;
            }
            N === B && (N = null), B.sibling.return = B.return, B = B.sibling;
          }
        }
        break;
      case 19:
        Ae(s, n), je(n), f & 4 && Jf(n);
        break;
      case 21:
        break;
      default:
        Ae(
          s,
          n
        ), je(n);
    }
  }
  function je(n) {
    var s = n.flags;
    if (s & 2) {
      try {
        t: {
          for (var a = n.return; a !== null; ) {
            if (Gf(a)) {
              var f = a;
              break t;
            }
            a = a.return;
          }
          throw Error(e(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (Ni(h, ""), f.flags &= -33);
            var g = Zf(n);
            da(n, g, h);
            break;
          case 3:
          case 4:
            var x = f.stateNode.containerInfo, w = Zf(n);
            fa(n, w, x);
            break;
          default:
            throw Error(e(161));
        }
      } catch (C) {
        Ft(n, n.return, C);
      }
      n.flags &= -3;
    }
    s & 4096 && (n.flags &= -4097);
  }
  function Dm(n, s, a) {
    K = n, ed(n);
  }
  function ed(n, s, a) {
    for (var f = (n.mode & 1) !== 0; K !== null; ) {
      var h = K, g = h.child;
      if (h.tag === 22 && f) {
        var x = h.memoizedState !== null || Nr;
        if (!x) {
          var w = h.alternate, C = w !== null && w.memoizedState !== null || te;
          w = Nr;
          var O = te;
          if (Nr = x, (te = C) && !O) for (K = h; K !== null; ) x = K, C = x.child, x.tag === 22 && x.memoizedState !== null ? sd(h) : C !== null ? (C.return = x, K = C) : sd(h);
          for (; g !== null; ) K = g, ed(g), g = g.sibling;
          K = h, Nr = w, te = O;
        }
        nd(n);
      } else (h.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = h, K = g) : nd(n);
    }
  }
  function nd(n) {
    for (; K !== null; ) {
      var s = K;
      if ((s.flags & 8772) !== 0) {
        var a = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              te || Br(5, s);
              break;
            case 1:
              var f = s.stateNode;
              if (s.flags & 4 && !te) if (a === null) f.componentDidMount();
              else {
                var h = s.elementType === s.type ? a.memoizedProps : Le(s.type, a.memoizedProps);
                f.componentDidUpdate(h, a.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var g = s.updateQueue;
              g !== null && nf(s, g, f);
              break;
            case 3:
              var x = s.updateQueue;
              if (x !== null) {
                if (a = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    a = s.child.stateNode;
                    break;
                  case 1:
                    a = s.child.stateNode;
                }
                nf(s, x, a);
              }
              break;
            case 5:
              var w = s.stateNode;
              if (a === null && s.flags & 4) {
                a = w;
                var C = s.memoizedProps;
                switch (s.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && a.focus();
                    break;
                  case "img":
                    C.src && (a.src = C.src);
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
              if (s.memoizedState === null) {
                var O = s.alternate;
                if (O !== null) {
                  var N = O.memoizedState;
                  if (N !== null) {
                    var B = N.dehydrated;
                    B !== null && Qi(B);
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
              throw Error(e(163));
          }
          te || s.flags & 512 && ca(s);
        } catch (I) {
          Ft(s, s.return, I);
        }
      }
      if (s === n) {
        K = null;
        break;
      }
      if (a = s.sibling, a !== null) {
        a.return = s.return, K = a;
        break;
      }
      K = s.return;
    }
  }
  function id(n) {
    for (; K !== null; ) {
      var s = K;
      if (s === n) {
        K = null;
        break;
      }
      var a = s.sibling;
      if (a !== null) {
        a.return = s.return, K = a;
        break;
      }
      K = s.return;
    }
  }
  function sd(n) {
    for (; K !== null; ) {
      var s = K;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var a = s.return;
            try {
              Br(4, s);
            } catch (C) {
              Ft(s, a, C);
            }
            break;
          case 1:
            var f = s.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = s.return;
              try {
                f.componentDidMount();
              } catch (C) {
                Ft(s, h, C);
              }
            }
            var g = s.return;
            try {
              ca(s);
            } catch (C) {
              Ft(s, g, C);
            }
            break;
          case 5:
            var x = s.return;
            try {
              ca(s);
            } catch (C) {
              Ft(s, x, C);
            }
        }
      } catch (C) {
        Ft(s, s.return, C);
      }
      if (s === n) {
        K = null;
        break;
      }
      var w = s.sibling;
      if (w !== null) {
        w.return = s.return, K = w;
        break;
      }
      K = s.return;
    }
  }
  var Tm = Math.ceil, Vr = A.ReactCurrentDispatcher, ha = A.ReactCurrentOwner, Ce = A.ReactCurrentBatchConfig, mt = 0, Yt = null, jt = null, Gt = 0, xe = 0, Ei = gn(0), Ht = 0, vs = null, Un = 0, jr = 0, pa = 0, xs = null, ce = null, ga = 0, Di = 1 / 0, qe = null, Wr = !1, ma = null, Sn = null, Hr = !1, kn = null, Ur = 0, _s = 0, ya = null, $r = -1, Yr = 0;
  function oe() {
    return (mt & 6) !== 0 ? Nt() : $r !== -1 ? $r : $r = Nt();
  }
  function wn(n) {
    return (n.mode & 1) === 0 ? 1 : (mt & 2) !== 0 && Gt !== 0 ? Gt & -Gt : hm.transition !== null ? (Yr === 0 && (Yr = Gu()), Yr) : (n = St, n !== 0 || (n = window.event, n = n === void 0 ? 16 : rc(n.type)), n);
  }
  function ze(n, s, a, f) {
    if (50 < _s) throw _s = 0, ya = null, Error(e(185));
    Ui(n, a, f), ((mt & 2) === 0 || n !== Yt) && (n === Yt && ((mt & 2) === 0 && (jr |= a), Ht === 4 && bn(n, Gt)), fe(n, f), a === 1 && mt === 0 && (s.mode & 1) === 0 && (Di = Nt() + 500, _r && yn()));
  }
  function fe(n, s) {
    var a = n.callbackNode;
    hg(n, s);
    var f = er(n, n === Yt ? Gt : 0);
    if (f === 0) a !== null && Xu(a), n.callbackNode = null, n.callbackPriority = 0;
    else if (s = f & -f, n.callbackPriority !== s) {
      if (a != null && Xu(a), s === 1) n.tag === 0 ? dm(od.bind(null, n)) : Uc(od.bind(null, n)), am(function() {
        (mt & 6) === 0 && yn();
      }), a = null;
      else {
        switch (Zu(f)) {
          case 1:
            a = Go;
            break;
          case 4:
            a = Ku;
            break;
          case 16:
            a = Zs;
            break;
          case 536870912:
            a = Qu;
            break;
          default:
            a = Zs;
        }
        a = pd(a, rd.bind(null, n));
      }
      n.callbackPriority = s, n.callbackNode = a;
    }
  }
  function rd(n, s) {
    if ($r = -1, Yr = 0, (mt & 6) !== 0) throw Error(e(327));
    var a = n.callbackNode;
    if (Ti() && n.callbackNode !== a) return null;
    var f = er(n, n === Yt ? Gt : 0);
    if (f === 0) return null;
    if ((f & 30) !== 0 || (f & n.expiredLanes) !== 0 || s) s = Xr(n, f);
    else {
      s = f;
      var h = mt;
      mt |= 2;
      var g = ad();
      (Yt !== n || Gt !== s) && (qe = null, Di = Nt() + 500, Yn(n, s));
      do
        try {
          Rm();
          break;
        } catch (w) {
          ld(n, w);
        }
      while (!0);
      zl(), Vr.current = g, mt = h, jt !== null ? s = 0 : (Yt = null, Gt = 0, s = Ht);
    }
    if (s !== 0) {
      if (s === 2 && (h = Zo(n), h !== 0 && (f = h, s = va(n, h))), s === 1) throw a = vs, Yn(n, 0), bn(n, f), fe(n, Nt()), a;
      if (s === 6) bn(n, f);
      else {
        if (h = n.current.alternate, (f & 30) === 0 && !Om(h) && (s = Xr(n, f), s === 2 && (g = Zo(n), g !== 0 && (f = g, s = va(n, g))), s === 1)) throw a = vs, Yn(n, 0), bn(n, f), fe(n, Nt()), a;
        switch (n.finishedWork = h, n.finishedLanes = f, s) {
          case 0:
          case 1:
            throw Error(e(345));
          case 2:
            Xn(n, ce, qe);
            break;
          case 3:
            if (bn(n, f), (f & 130023424) === f && (s = ga + 500 - Nt(), 10 < s)) {
              if (er(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                oe(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = bl(Xn.bind(null, n, ce, qe), s);
              break;
            }
            Xn(n, ce, qe);
            break;
          case 4:
            if (bn(n, f), (f & 4194240) === f) break;
            for (s = n.eventTimes, h = -1; 0 < f; ) {
              var x = 31 - De(f);
              g = 1 << x, x = s[x], x > h && (h = x), f &= ~g;
            }
            if (f = h, f = Nt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Tm(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = bl(Xn.bind(null, n, ce, qe), f);
              break;
            }
            Xn(n, ce, qe);
            break;
          case 5:
            Xn(n, ce, qe);
            break;
          default:
            throw Error(e(329));
        }
      }
    }
    return fe(n, Nt()), n.callbackNode === a ? rd.bind(null, n) : null;
  }
  function va(n, s) {
    var a = xs;
    return n.current.memoizedState.isDehydrated && (Yn(n, s).flags |= 256), n = Xr(n, s), n !== 2 && (s = ce, ce = a, s !== null && xa(s)), n;
  }
  function xa(n) {
    ce === null ? ce = n : ce.push.apply(ce, n);
  }
  function Om(n) {
    for (var s = n; ; ) {
      if (s.flags & 16384) {
        var a = s.updateQueue;
        if (a !== null && (a = a.stores, a !== null)) for (var f = 0; f < a.length; f++) {
          var h = a[f], g = h.getSnapshot;
          h = h.value;
          try {
            if (!Te(g(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (a = s.child, s.subtreeFlags & 16384 && a !== null) a.return = s, s = a;
      else {
        if (s === n) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === n) return !0;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }
    return !0;
  }
  function bn(n, s) {
    for (s &= ~pa, s &= ~jr, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s; ) {
      var a = 31 - De(s), f = 1 << a;
      n[a] = -1, s &= ~f;
    }
  }
  function od(n) {
    if ((mt & 6) !== 0) throw Error(e(327));
    Ti();
    var s = er(n, 0);
    if ((s & 1) === 0) return fe(n, Nt()), null;
    var a = Xr(n, s);
    if (n.tag !== 0 && a === 2) {
      var f = Zo(n);
      f !== 0 && (s = f, a = va(n, f));
    }
    if (a === 1) throw a = vs, Yn(n, 0), bn(n, s), fe(n, Nt()), a;
    if (a === 6) throw Error(e(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = s, Xn(n, ce, qe), fe(n, Nt()), null;
  }
  function _a(n, s) {
    var a = mt;
    mt |= 1;
    try {
      return n(s);
    } finally {
      mt = a, mt === 0 && (Di = Nt() + 500, _r && yn());
    }
  }
  function $n(n) {
    kn !== null && kn.tag === 0 && (mt & 6) === 0 && Ti();
    var s = mt;
    mt |= 1;
    var a = Ce.transition, f = St;
    try {
      if (Ce.transition = null, St = 1, n) return n();
    } finally {
      St = f, Ce.transition = a, mt = s, (mt & 6) === 0 && yn();
    }
  }
  function Sa() {
    xe = Ei.current, Et(Ei);
  }
  function Yn(n, s) {
    n.finishedWork = null, n.finishedLanes = 0;
    var a = n.timeoutHandle;
    if (a !== -1 && (n.timeoutHandle = -1, lm(a)), jt !== null) for (a = jt.return; a !== null; ) {
      var f = a;
      switch (Tl(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && vr();
          break;
        case 3:
          Ci(), Et(le), Et(Zt), Hl();
          break;
        case 5:
          jl(f);
          break;
        case 4:
          Ci();
          break;
        case 13:
          Et(At);
          break;
        case 19:
          Et(At);
          break;
        case 10:
          Fl(f.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      a = a.return;
    }
    if (Yt = n, jt = n = Cn(n.current, null), Gt = xe = s, Ht = 0, vs = null, pa = jr = Un = 0, ce = xs = null, jn !== null) {
      for (s = 0; s < jn.length; s++) if (a = jn[s], f = a.interleaved, f !== null) {
        a.interleaved = null;
        var h = f.next, g = a.pending;
        if (g !== null) {
          var x = g.next;
          g.next = h, f.next = x;
        }
        a.pending = f;
      }
      jn = null;
    }
    return n;
  }
  function ld(n, s) {
    do {
      var a = jt;
      try {
        if (zl(), Tr.current = Ar, Or) {
          for (var f = zt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          Or = !1;
        }
        if (Hn = 0, $t = Wt = zt = null, ds = !1, hs = 0, ha.current = null, a === null || a.return === null) {
          Ht = 1, vs = s, jt = null;
          break;
        }
        t: {
          var g = n, x = a.return, w = a, C = s;
          if (s = Gt, w.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var O = C, N = w, B = N.tag;
            if ((N.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var I = N.alternate;
              I ? (N.updateQueue = I.updateQueue, N.memoizedState = I.memoizedState, N.lanes = I.lanes) : (N.updateQueue = null, N.memoizedState = null);
            }
            var Y = Lf(x);
            if (Y !== null) {
              Y.flags &= -257, Rf(Y, x, w, g, s), Y.mode & 1 && Of(g, O, s), s = Y, C = O;
              var Q = s.updateQueue;
              if (Q === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(C), s.updateQueue = G;
              } else Q.add(C);
              break t;
            } else {
              if ((s & 1) === 0) {
                Of(g, O, s), ka();
                break t;
              }
              C = Error(e(426));
            }
          } else if (Ot && w.mode & 1) {
            var Bt = Lf(x);
            if (Bt !== null) {
              (Bt.flags & 65536) === 0 && (Bt.flags |= 256), Rf(Bt, x, w, g, s), Rl(Mi(C, w));
              break t;
            }
          }
          g = C = Mi(C, w), Ht !== 4 && (Ht = 2), xs === null ? xs = [g] : xs.push(g), g = x;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, s &= -s, g.lanes |= s;
                var D = Df(g, C, s);
                ef(g, D);
                break t;
              case 1:
                w = C;
                var M = g.type, T = g.stateNode;
                if ((g.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (Sn === null || !Sn.has(T)))) {
                  g.flags |= 65536, s &= -s, g.lanes |= s;
                  var W = Tf(g, w, s);
                  ef(g, W);
                  break t;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        cd(a);
      } catch (q) {
        s = q, jt === a && a !== null && (jt = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ad() {
    var n = Vr.current;
    return Vr.current = Ar, n === null ? Ar : n;
  }
  function ka() {
    (Ht === 0 || Ht === 3 || Ht === 2) && (Ht = 4), Yt === null || (Un & 268435455) === 0 && (jr & 268435455) === 0 || bn(Yt, Gt);
  }
  function Xr(n, s) {
    var a = mt;
    mt |= 2;
    var f = ad();
    (Yt !== n || Gt !== s) && (qe = null, Yn(n, s));
    do
      try {
        Lm();
        break;
      } catch (h) {
        ld(n, h);
      }
    while (!0);
    if (zl(), mt = a, Vr.current = f, jt !== null) throw Error(e(261));
    return Yt = null, Gt = 0, Ht;
  }
  function Lm() {
    for (; jt !== null; ) ud(jt);
  }
  function Rm() {
    for (; jt !== null && !sg(); ) ud(jt);
  }
  function ud(n) {
    var s = hd(n.alternate, n, xe);
    n.memoizedProps = n.pendingProps, s === null ? cd(n) : jt = s, ha.current = null;
  }
  function cd(n) {
    var s = n;
    do {
      var a = s.alternate;
      if (n = s.return, (s.flags & 32768) === 0) {
        if (a = Cm(a, s, xe), a !== null) {
          jt = a;
          return;
        }
      } else {
        if (a = Mm(a, s), a !== null) {
          a.flags &= 32767, jt = a;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Ht = 6, jt = null;
          return;
        }
      }
      if (s = s.sibling, s !== null) {
        jt = s;
        return;
      }
      jt = s = n;
    } while (s !== null);
    Ht === 0 && (Ht = 5);
  }
  function Xn(n, s, a) {
    var f = St, h = Ce.transition;
    try {
      Ce.transition = null, St = 1, Am(n, s, a, f);
    } finally {
      Ce.transition = h, St = f;
    }
    return null;
  }
  function Am(n, s, a, f) {
    do
      Ti();
    while (kn !== null);
    if ((mt & 6) !== 0) throw Error(e(327));
    a = n.finishedWork;
    var h = n.finishedLanes;
    if (a === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, a === n.current) throw Error(e(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = a.lanes | a.childLanes;
    if (pg(n, g), n === Yt && (jt = Yt = null, Gt = 0), (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || Hr || (Hr = !0, pd(Zs, function() {
      return Ti(), null;
    })), g = (a.flags & 15990) !== 0, (a.subtreeFlags & 15990) !== 0 || g) {
      g = Ce.transition, Ce.transition = null;
      var x = St;
      St = 1;
      var w = mt;
      mt |= 4, ha.current = null, Em(n, a), td(a, n), tm(kl), sr = !!Sl, kl = Sl = null, n.current = a, Dm(a), rg(), mt = w, St = x, Ce.transition = g;
    } else n.current = a;
    if (Hr && (Hr = !1, kn = n, Ur = h), g = n.pendingLanes, g === 0 && (Sn = null), ag(a.stateNode), fe(n, Nt()), s !== null) for (f = n.onRecoverableError, a = 0; a < s.length; a++) h = s[a], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Wr) throw Wr = !1, n = ma, ma = null, n;
    return (Ur & 1) !== 0 && n.tag !== 0 && Ti(), g = n.pendingLanes, (g & 1) !== 0 ? n === ya ? _s++ : (_s = 0, ya = n) : _s = 0, yn(), null;
  }
  function Ti() {
    if (kn !== null) {
      var n = Zu(Ur), s = Ce.transition, a = St;
      try {
        if (Ce.transition = null, St = 16 > n ? 16 : n, kn === null) var f = !1;
        else {
          if (n = kn, kn = null, Ur = 0, (mt & 6) !== 0) throw Error(e(331));
          var h = mt;
          for (mt |= 4, K = n.current; K !== null; ) {
            var g = K, x = g.child;
            if ((K.flags & 16) !== 0) {
              var w = g.deletions;
              if (w !== null) {
                for (var C = 0; C < w.length; C++) {
                  var O = w[C];
                  for (K = O; K !== null; ) {
                    var N = K;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(8, N, g);
                    }
                    var B = N.child;
                    if (B !== null) B.return = N, K = B;
                    else for (; K !== null; ) {
                      N = K;
                      var I = N.sibling, Y = N.return;
                      if (Qf(N), N === O) {
                        K = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = Y, K = I;
                        break;
                      }
                      K = Y;
                    }
                  }
                }
                var Q = g.alternate;
                if (Q !== null) {
                  var G = Q.child;
                  if (G !== null) {
                    Q.child = null;
                    do {
                      var Bt = G.sibling;
                      G.sibling = null, G = Bt;
                    } while (G !== null);
                  }
                }
                K = g;
              }
            }
            if ((g.subtreeFlags & 2064) !== 0 && x !== null) x.return = g, K = x;
            else t: for (; K !== null; ) {
              if (g = K, (g.flags & 2048) !== 0) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  ys(9, g, g.return);
              }
              var D = g.sibling;
              if (D !== null) {
                D.return = g.return, K = D;
                break t;
              }
              K = g.return;
            }
          }
          var M = n.current;
          for (K = M; K !== null; ) {
            x = K;
            var T = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && T !== null) T.return = x, K = T;
            else t: for (x = M; K !== null; ) {
              if (w = K, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, w);
                }
              } catch (q) {
                Ft(w, w.return, q);
              }
              if (w === x) {
                K = null;
                break t;
              }
              var W = w.sibling;
              if (W !== null) {
                W.return = w.return, K = W;
                break t;
              }
              K = w.return;
            }
          }
          if (mt = h, yn(), Ie && typeof Ie.onPostCommitFiberRoot == "function") try {
            Ie.onPostCommitFiberRoot(qs, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        St = a, Ce.transition = s;
      }
    }
    return !1;
  }
  function fd(n, s, a) {
    s = Mi(a, s), s = Df(n, s, 1), n = xn(n, s, 1), s = oe(), n !== null && (Ui(n, 1, s), fe(n, s));
  }
  function Ft(n, s, a) {
    if (n.tag === 3) fd(n, n, a);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        fd(s, n, a);
        break;
      } else if (s.tag === 1) {
        var f = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Sn === null || !Sn.has(f))) {
          n = Mi(a, n), n = Tf(s, n, 1), s = xn(s, n, 1), n = oe(), s !== null && (Ui(s, 1, n), fe(s, n));
          break;
        }
      }
      s = s.return;
    }
  }
  function zm(n, s, a) {
    var f = n.pingCache;
    f !== null && f.delete(s), s = oe(), n.pingedLanes |= n.suspendedLanes & a, Yt === n && (Gt & a) === a && (Ht === 4 || Ht === 3 && (Gt & 130023424) === Gt && 500 > Nt() - ga ? Yn(n, 0) : pa |= a), fe(n, s);
  }
  function dd(n, s) {
    s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = tr, tr <<= 1, (tr & 130023424) === 0 && (tr = 4194304)));
    var a = oe();
    n = Qe(n, s), n !== null && (Ui(n, s, a), fe(n, a));
  }
  function Fm(n) {
    var s = n.memoizedState, a = 0;
    s !== null && (a = s.retryLane), dd(n, a);
  }
  function Im(n, s) {
    var a = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(e(314));
    }
    f !== null && f.delete(s), dd(n, a);
  }
  var hd;
  hd = function(n, s, a) {
    if (n !== null) if (n.memoizedProps !== s.pendingProps || le.current) ue = !0;
    else {
      if ((n.lanes & a) === 0 && (s.flags & 128) === 0) return ue = !1, bm(n, s, a);
      ue = (n.flags & 131072) !== 0;
    }
    else ue = !1, Ot && (s.flags & 1048576) !== 0 && $c(s, kr, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var f = s.type;
        Ir(n, s), n = s.pendingProps;
        var h = vi(s, Zt.current);
        bi(s, a), h = Yl(null, s, f, n, h, a);
        var g = Xl();
        return s.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, ae(f) ? (g = !0, xr(s)) : g = !1, s.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Bl(s), h.updater = zr, s.stateNode = h, h._reactInternals = s, Jl(s, f, n, a), s = ia(null, s, f, !0, g, a)) : (s.tag = 0, Ot && g && Dl(s), re(null, s, h, a), s = s.child), s;
      case 16:
        f = s.elementType;
        t: {
          switch (Ir(n, s), n = s.pendingProps, h = f._init, f = h(f._payload), s.type = f, h = s.tag = Bm(f), n = Le(f, n), h) {
            case 0:
              s = na(null, s, f, n, a);
              break t;
            case 1:
              s = Bf(null, s, f, n, a);
              break t;
            case 11:
              s = Af(null, s, f, n, a);
              break t;
            case 14:
              s = zf(null, s, f, Le(f.type, n), a);
              break t;
          }
          throw Error(e(
            306,
            f,
            ""
          ));
        }
        return s;
      case 0:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Le(f, h), na(n, s, f, h, a);
      case 1:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Le(f, h), Bf(n, s, f, h, a);
      case 3:
        t: {
          if (Vf(s), n === null) throw Error(e(387));
          f = s.pendingProps, g = s.memoizedState, h = g.element, tf(n, s), Er(s, f, null, a);
          var x = s.memoizedState;
          if (f = x.element, g.isDehydrated) if (g = { element: f, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, s.updateQueue.baseState = g, s.memoizedState = g, s.flags & 256) {
            h = Mi(Error(e(423)), s), s = jf(n, s, f, a, h);
            break t;
          } else if (f !== h) {
            h = Mi(Error(e(424)), s), s = jf(n, s, f, a, h);
            break t;
          } else for (ve = pn(s.stateNode.containerInfo.firstChild), ye = s, Ot = !0, Oe = null, a = qc(s, null, f, a), s.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Si(), f === h) {
              s = Ze(n, s, a);
              break t;
            }
            re(n, s, f, a);
          }
          s = s.child;
        }
        return s;
      case 5:
        return sf(s), n === null && Ll(s), f = s.type, h = s.pendingProps, g = n !== null ? n.memoizedProps : null, x = h.children, wl(f, h) ? x = null : g !== null && wl(f, g) && (s.flags |= 32), Nf(n, s), re(n, s, x, a), s.child;
      case 6:
        return n === null && Ll(s), null;
      case 13:
        return Wf(n, s, a);
      case 4:
        return Vl(s, s.stateNode.containerInfo), f = s.pendingProps, n === null ? s.child = ki(s, null, f, a) : re(n, s, f, a), s.child;
      case 11:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Le(f, h), Af(n, s, f, h, a);
      case 7:
        return re(n, s, s.pendingProps, a), s.child;
      case 8:
        return re(n, s, s.pendingProps.children, a), s.child;
      case 12:
        return re(n, s, s.pendingProps.children, a), s.child;
      case 10:
        t: {
          if (f = s.type._context, h = s.pendingProps, g = s.memoizedProps, x = h.value, bt(Cr, f._currentValue), f._currentValue = x, g !== null) if (Te(g.value, x)) {
            if (g.children === h.children && !le.current) {
              s = Ze(n, s, a);
              break t;
            }
          } else for (g = s.child, g !== null && (g.return = s); g !== null; ) {
            var w = g.dependencies;
            if (w !== null) {
              x = g.child;
              for (var C = w.firstContext; C !== null; ) {
                if (C.context === f) {
                  if (g.tag === 1) {
                    C = Ge(-1, a & -a), C.tag = 2;
                    var O = g.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var N = O.pending;
                      N === null ? C.next = C : (C.next = N.next, N.next = C), O.pending = C;
                    }
                  }
                  g.lanes |= a, C = g.alternate, C !== null && (C.lanes |= a), Il(
                    g.return,
                    a,
                    s
                  ), w.lanes |= a;
                  break;
                }
                C = C.next;
              }
            } else if (g.tag === 10) x = g.type === s.type ? null : g.child;
            else if (g.tag === 18) {
              if (x = g.return, x === null) throw Error(e(341));
              x.lanes |= a, w = x.alternate, w !== null && (w.lanes |= a), Il(x, a, s), x = g.sibling;
            } else x = g.child;
            if (x !== null) x.return = g;
            else for (x = g; x !== null; ) {
              if (x === s) {
                x = null;
                break;
              }
              if (g = x.sibling, g !== null) {
                g.return = x.return, x = g;
                break;
              }
              x = x.return;
            }
            g = x;
          }
          re(n, s, h.children, a), s = s.child;
        }
        return s;
      case 9:
        return h = s.type, f = s.pendingProps.children, bi(s, a), h = we(h), f = f(h), s.flags |= 1, re(n, s, f, a), s.child;
      case 14:
        return f = s.type, h = Le(f, s.pendingProps), h = Le(f.type, h), zf(n, s, f, h, a);
      case 15:
        return Ff(n, s, s.type, s.pendingProps, a);
      case 17:
        return f = s.type, h = s.pendingProps, h = s.elementType === f ? h : Le(f, h), Ir(n, s), s.tag = 1, ae(f) ? (n = !0, xr(s)) : n = !1, bi(s, a), Pf(s, f, h), Jl(s, f, h, a), ia(null, s, f, !0, n, a);
      case 19:
        return Uf(n, s, a);
      case 22:
        return If(n, s, a);
    }
    throw Error(e(156, s.tag));
  };
  function pd(n, s) {
    return Yu(n, s);
  }
  function Nm(n, s, a, f) {
    this.tag = n, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Me(n, s, a, f) {
    return new Nm(n, s, a, f);
  }
  function wa(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Bm(n) {
    if (typeof n == "function") return wa(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === st) return 11;
      if (n === ct) return 14;
    }
    return 2;
  }
  function Cn(n, s) {
    var a = n.alternate;
    return a === null ? (a = Me(n.tag, s, n.key, n.mode), a.elementType = n.elementType, a.type = n.type, a.stateNode = n.stateNode, a.alternate = n, n.alternate = a) : (a.pendingProps = s, a.type = n.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = n.flags & 14680064, a.childLanes = n.childLanes, a.lanes = n.lanes, a.child = n.child, a.memoizedProps = n.memoizedProps, a.memoizedState = n.memoizedState, a.updateQueue = n.updateQueue, s = n.dependencies, a.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, a.sibling = n.sibling, a.index = n.index, a.ref = n.ref, a;
  }
  function Kr(n, s, a, f, h, g) {
    var x = 2;
    if (f = n, typeof n == "function") wa(n) && (x = 1);
    else if (typeof n == "string") x = 5;
    else t: switch (n) {
      case j:
        return Kn(a.children, h, g, s);
      case H:
        x = 8, h |= 8;
        break;
      case Z:
        return n = Me(12, a, s, h | 2), n.elementType = Z, n.lanes = g, n;
      case xt:
        return n = Me(13, a, s, h), n.elementType = xt, n.lanes = g, n;
      case Mt:
        return n = Me(19, a, s, h), n.elementType = Mt, n.lanes = g, n;
      case lt:
        return Qr(a, h, g, s);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case et:
            x = 10;
            break t;
          case nt:
            x = 9;
            break t;
          case st:
            x = 11;
            break t;
          case ct:
            x = 14;
            break t;
          case ft:
            x = 16, f = null;
            break t;
        }
        throw Error(e(130, n == null ? n : typeof n, ""));
    }
    return s = Me(x, a, s, h), s.elementType = n, s.type = f, s.lanes = g, s;
  }
  function Kn(n, s, a, f) {
    return n = Me(7, n, f, s), n.lanes = a, n;
  }
  function Qr(n, s, a, f) {
    return n = Me(22, n, f, s), n.elementType = lt, n.lanes = a, n.stateNode = { isHidden: !1 }, n;
  }
  function ba(n, s, a) {
    return n = Me(6, n, null, s), n.lanes = a, n;
  }
  function Ca(n, s, a) {
    return s = Me(4, n.children !== null ? n.children : [], n.key, s), s.lanes = a, s.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, s;
  }
  function Vm(n, s, a, f, h) {
    this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qo(0), this.expirationTimes = qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qo(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Ma(n, s, a, f, h, g, x, w, C) {
    return n = new Vm(n, s, a, w, C), s === 1 ? (s = 1, g === !0 && (s |= 8)) : s = 0, g = Me(3, null, null, s), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bl(g), n;
  }
  function jm(n, s, a) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: f == null ? null : "" + f, children: n, containerInfo: s, implementation: a };
  }
  function gd(n) {
    if (!n) return mn;
    n = n._reactInternals;
    t: {
      if (Fn(n) !== n || n.tag !== 1) throw Error(e(170));
      var s = n;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break t;
          case 1:
            if (ae(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(e(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (ae(a)) return Wc(n, a, s);
    }
    return s;
  }
  function md(n, s, a, f, h, g, x, w, C) {
    return n = Ma(a, f, !0, n, h, g, x, w, C), n.context = gd(null), a = n.current, f = oe(), h = wn(a), g = Ge(f, h), g.callback = s ?? null, xn(a, g, h), n.current.lanes = h, Ui(n, h, f), fe(n, f), n;
  }
  function Gr(n, s, a, f) {
    var h = s.current, g = oe(), x = wn(h);
    return a = gd(a), s.context === null ? s.context = a : s.pendingContext = a, s = Ge(g, x), s.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (s.callback = f), n = xn(h, s, x), n !== null && (ze(n, h, x, g), Pr(n, h, x)), x;
  }
  function Zr(n) {
    return n = n.current, n.child ? (n.child.tag === 5, n.child.stateNode) : null;
  }
  function yd(n, s) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var a = n.retryLane;
      n.retryLane = a !== 0 && a < s ? a : s;
    }
  }
  function Pa(n, s) {
    yd(n, s), (n = n.alternate) && yd(n, s);
  }
  function Wm() {
    return null;
  }
  var vd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ea(n) {
    this._internalRoot = n;
  }
  qr.prototype.render = Ea.prototype.render = function(n) {
    var s = this._internalRoot;
    if (s === null) throw Error(e(409));
    Gr(n, s, null, null);
  }, qr.prototype.unmount = Ea.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var s = n.containerInfo;
      $n(function() {
        Gr(null, n, null, null);
      }), s[$e] = null;
    }
  };
  function qr(n) {
    this._internalRoot = n;
  }
  qr.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var s = tc();
      n = { blockedOn: null, target: n, priority: s };
      for (var a = 0; a < fn.length && s !== 0 && s < fn[a].priority; a++) ;
      fn.splice(a, 0, n), a === 0 && ic(n);
    }
  };
  function Da(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Jr(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function xd() {
  }
  function Hm(n, s, a, f, h) {
    if (h) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var O = Zr(x);
          g.call(O);
        };
      }
      var x = md(s, f, n, 0, null, !1, !1, "", xd);
      return n._reactRootContainer = x, n[$e] = x.current, ss(n.nodeType === 8 ? n.parentNode : n), $n(), x;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var w = f;
      f = function() {
        var O = Zr(C);
        w.call(O);
      };
    }
    var C = Ma(n, 0, !1, null, null, !1, !1, "", xd);
    return n._reactRootContainer = C, n[$e] = C.current, ss(n.nodeType === 8 ? n.parentNode : n), $n(function() {
      Gr(s, C, a, f);
    }), C;
  }
  function to(n, s, a, f, h) {
    var g = a._reactRootContainer;
    if (g) {
      var x = g;
      if (typeof h == "function") {
        var w = h;
        h = function() {
          var C = Zr(x);
          w.call(C);
        };
      }
      Gr(s, x, n, h);
    } else x = Hm(a, s, n, h, f);
    return Zr(x);
  }
  qu = function(n) {
    switch (n.tag) {
      case 3:
        var s = n.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var a = Hi(s.pendingLanes);
          a !== 0 && (Jo(s, a | 1), fe(s, Nt()), (mt & 6) === 0 && (Di = Nt() + 500, yn()));
        }
        break;
      case 13:
        $n(function() {
          var f = Qe(n, 1);
          if (f !== null) {
            var h = oe();
            ze(f, n, 1, h);
          }
        }), Pa(n, 1);
    }
  }, tl = function(n) {
    if (n.tag === 13) {
      var s = Qe(n, 134217728);
      if (s !== null) {
        var a = oe();
        ze(s, n, 134217728, a);
      }
      Pa(n, 134217728);
    }
  }, Ju = function(n) {
    if (n.tag === 13) {
      var s = wn(n), a = Qe(n, s);
      if (a !== null) {
        var f = oe();
        ze(a, n, s, f);
      }
      Pa(n, s);
    }
  }, tc = function() {
    return St;
  }, ec = function(n, s) {
    var a = St;
    try {
      return St = n, s();
    } finally {
      St = a;
    }
  }, Yo = function(n, s, a) {
    switch (s) {
      case "input":
        if (No(n, a), s = a.name, a.type === "radio" && s != null) {
          for (a = n; a.parentNode; ) a = a.parentNode;
          for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < a.length; s++) {
            var f = a[s];
            if (f !== n && f.form === n.form) {
              var h = yr(f);
              if (!h) throw Error(e(90));
              Cu(f), No(f, h);
            }
          }
        }
        break;
      case "textarea":
        Tu(n, a);
        break;
      case "select":
        s = a.value, s != null && oi(n, !!a.multiple, s, !1);
    }
  }, Bu = _a, Vu = $n;
  var Um = { usingClientEntryPoint: !1, Events: [ls, mi, yr, Iu, Nu, _a] }, Ss = { findFiberByHostInstance: In, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $m = { bundleType: Ss.bundleType, version: Ss.version, rendererPackageName: Ss.rendererPackageName, rendererConfig: Ss.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: A.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Uu(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ss.findFiberByHostInstance || Wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eo.isDisabled && eo.supportsFiber) try {
      qs = eo.inject($m), Ie = eo;
    } catch {
    }
  }
  return de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um, de.createPortal = function(n, s) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Da(s)) throw Error(e(200));
    return jm(n, s, null, a);
  }, de.createRoot = function(n, s) {
    if (!Da(n)) throw Error(e(299));
    var a = !1, f = "", h = vd;
    return s != null && (s.unstable_strictMode === !0 && (a = !0), s.identifierPrefix !== void 0 && (f = s.identifierPrefix), s.onRecoverableError !== void 0 && (h = s.onRecoverableError)), s = Ma(n, 1, !1, null, null, a, !1, f, h), n[$e] = s.current, ss(n.nodeType === 8 ? n.parentNode : n), new Ea(s);
  }, de.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var s = n._reactInternals;
    if (s === void 0)
      throw typeof n.render == "function" ? Error(e(188)) : (n = Object.keys(n).join(","), Error(e(268, n)));
    return n = Uu(s), n = n === null ? null : n.stateNode, n;
  }, de.flushSync = function(n) {
    return $n(n);
  }, de.hydrate = function(n, s, a) {
    if (!Jr(s)) throw Error(e(200));
    return to(null, n, s, !0, a);
  }, de.hydrateRoot = function(n, s, a) {
    if (!Da(n)) throw Error(e(405));
    var f = a != null && a.hydratedSources || null, h = !1, g = "", x = vd;
    if (a != null && (a.unstable_strictMode === !0 && (h = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (x = a.onRecoverableError)), s = md(s, null, n, 1, a ?? null, h, !1, g, x), n[$e] = s.current, ss(n), f) for (n = 0; n < f.length; n++) a = f[n], h = a._getVersion, h = h(a._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [a, h] : s.mutableSourceEagerHydrationData.push(
      a,
      h
    );
    return new qr(s);
  }, de.render = function(n, s, a) {
    if (!Jr(s)) throw Error(e(200));
    return to(null, n, s, !1, a);
  }, de.unmountComponentAtNode = function(n) {
    if (!Jr(n)) throw Error(e(40));
    return n._reactRootContainer ? ($n(function() {
      to(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$e] = null;
      });
    }), !0) : !1;
  }, de.unstable_batchedUpdates = _a, de.unstable_renderSubtreeIntoContainer = function(n, s, a, f) {
    if (!Jr(a)) throw Error(e(200));
    if (n == null || n._reactInternals === void 0) throw Error(e(38));
    return to(n, s, a, !1, f);
  }, de.version = "18.3.1-next-f1338f8080-20240426", de;
}
var Pd;
function Jm() {
  if (Pd) return La.exports;
  Pd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (t) {
        console.error(t);
      }
  }
  return i(), La.exports = qm(), La.exports;
}
var Ed;
function t0() {
  if (Ed) return no;
  Ed = 1;
  var i = Jm();
  return no.createRoot = i.createRoot, no.hydrateRoot = i.hydrateRoot, no;
}
var e0 = t0();
function Us(i) {
  return i + 0.5 | 0;
}
const Pn = (i, t, e) => Math.max(Math.min(i, e), t);
function Es(i) {
  return Pn(Us(i * 2.55), 0, 255);
}
function On(i) {
  return Pn(Us(i * 255), 0, 255);
}
function nn(i) {
  return Pn(Us(i / 2.55) / 100, 0, 1);
}
function Dd(i) {
  return Pn(Us(i * 100), 0, 100);
}
const Pe = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Qa = [..."0123456789ABCDEF"], n0 = (i) => Qa[i & 15], i0 = (i) => Qa[(i & 240) >> 4] + Qa[i & 15], io = (i) => (i & 240) >> 4 === (i & 15), s0 = (i) => io(i.r) && io(i.g) && io(i.b) && io(i.a);
function r0(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Pe[i[1]] * 17,
    g: 255 & Pe[i[2]] * 17,
    b: 255 & Pe[i[3]] * 17,
    a: t === 5 ? Pe[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Pe[i[1]] << 4 | Pe[i[2]],
    g: Pe[i[3]] << 4 | Pe[i[4]],
    b: Pe[i[5]] << 4 | Pe[i[6]],
    a: t === 9 ? Pe[i[7]] << 4 | Pe[i[8]] : 255
  })), e;
}
const o0 = (i, t) => i < 255 ? t(i) : "";
function l0(i) {
  var t = s0(i) ? n0 : i0;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + o0(i.a, t) : void 0;
}
const a0 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function qh(i, t, e) {
  const r = t * Math.min(e, 1 - e), o = (l, u = (l + i / 30) % 12) => e - r * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [o(0), o(8), o(4)];
}
function u0(i, t, e) {
  const r = (o, l = (o + i / 60) % 6) => e - e * t * Math.max(Math.min(l, 4 - l, 1), 0);
  return [r(5), r(3), r(1)];
}
function c0(i, t, e) {
  const r = qh(i, 1, 0.5);
  let o;
  for (t + e > 1 && (o = 1 / (t + e), t *= o, e *= o), o = 0; o < 3; o++)
    r[o] *= 1 - t - e, r[o] += t;
  return r;
}
function f0(i, t, e, r, o) {
  return i === o ? (t - e) / r + (t < e ? 6 : 0) : t === o ? (e - i) / r + 2 : (i - t) / r + 4;
}
function lu(i) {
  const e = i.r / 255, r = i.g / 255, o = i.b / 255, l = Math.max(e, r, o), u = Math.min(e, r, o), c = (l + u) / 2;
  let d, p, m;
  return l !== u && (m = l - u, p = c > 0.5 ? m / (2 - l - u) : m / (l + u), d = f0(e, r, o, m, l), d = d * 60 + 0.5), [d | 0, p || 0, c];
}
function au(i, t, e, r) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, r)).map(On);
}
function uu(i, t, e) {
  return au(qh, i, t, e);
}
function d0(i, t, e) {
  return au(c0, i, t, e);
}
function h0(i, t, e) {
  return au(u0, i, t, e);
}
function Jh(i) {
  return (i % 360 + 360) % 360;
}
function p0(i) {
  const t = a0.exec(i);
  let e = 255, r;
  if (!t)
    return;
  t[5] !== r && (e = t[6] ? Es(+t[5]) : On(+t[5]));
  const o = Jh(+t[2]), l = +t[3] / 100, u = +t[4] / 100;
  return t[1] === "hwb" ? r = d0(o, l, u) : t[1] === "hsv" ? r = h0(o, l, u) : r = uu(o, l, u), {
    r: r[0],
    g: r[1],
    b: r[2],
    a: e
  };
}
function g0(i, t) {
  var e = lu(i);
  e[0] = Jh(e[0] + t), e = uu(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function m0(i) {
  if (!i)
    return;
  const t = lu(i), e = t[0], r = Dd(t[1]), o = Dd(t[2]);
  return i.a < 255 ? `hsla(${e}, ${r}%, ${o}%, ${nn(i.a)})` : `hsl(${e}, ${r}%, ${o}%)`;
}
const Td = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Od = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function y0() {
  const i = {}, t = Object.keys(Od), e = Object.keys(Td);
  let r, o, l, u, c;
  for (r = 0; r < t.length; r++) {
    for (u = c = t[r], o = 0; o < e.length; o++)
      l = e[o], c = c.replace(l, Td[l]);
    l = parseInt(Od[u], 16), i[c] = [l >> 16 & 255, l >> 8 & 255, l & 255];
  }
  return i;
}
let so;
function v0(i) {
  so || (so = y0(), so.transparent = [0, 0, 0, 0]);
  const t = so[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const x0 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function _0(i) {
  const t = x0.exec(i);
  let e = 255, r, o, l;
  if (t) {
    if (t[7] !== r) {
      const u = +t[7];
      e = t[8] ? Es(u) : Pn(u * 255, 0, 255);
    }
    return r = +t[1], o = +t[3], l = +t[5], r = 255 & (t[2] ? Es(r) : Pn(r, 0, 255)), o = 255 & (t[4] ? Es(o) : Pn(o, 0, 255)), l = 255 & (t[6] ? Es(l) : Pn(l, 0, 255)), {
      r,
      g: o,
      b: l,
      a: e
    };
  }
}
function S0(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${nn(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const za = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Oi = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function k0(i, t, e) {
  const r = Oi(nn(i.r)), o = Oi(nn(i.g)), l = Oi(nn(i.b));
  return {
    r: On(za(r + e * (Oi(nn(t.r)) - r))),
    g: On(za(o + e * (Oi(nn(t.g)) - o))),
    b: On(za(l + e * (Oi(nn(t.b)) - l))),
    a: i.a + e * (t.a - i.a)
  };
}
function ro(i, t, e) {
  if (i) {
    let r = lu(i);
    r[t] = Math.max(0, Math.min(r[t] + r[t] * e, t === 0 ? 360 : 1)), r = uu(r), i.r = r[0], i.g = r[1], i.b = r[2];
  }
}
function tp(i, t) {
  return i && Object.assign(t || {}, i);
}
function Ld(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = On(i[3]))) : (t = tp(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = On(t.a)), t;
}
function w0(i) {
  return i.charAt(0) === "r" ? _0(i) : p0(i);
}
class Is {
  constructor(t) {
    if (t instanceof Is)
      return t;
    const e = typeof t;
    let r;
    e === "object" ? r = Ld(t) : e === "string" && (r = r0(t) || v0(t) || w0(t)), this._rgb = r, this._valid = !!r;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = tp(this._rgb);
    return t && (t.a = nn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Ld(t);
  }
  rgbString() {
    return this._valid ? S0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? l0(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? m0(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const r = this.rgb, o = t.rgb;
      let l;
      const u = e === l ? 0.5 : e, c = 2 * u - 1, d = r.a - o.a, p = ((c * d === -1 ? c : (c + d) / (1 + c * d)) + 1) / 2;
      l = 1 - p, r.r = 255 & p * r.r + l * o.r + 0.5, r.g = 255 & p * r.g + l * o.g + 0.5, r.b = 255 & p * r.b + l * o.b + 0.5, r.a = u * r.a + (1 - u) * o.a, this.rgb = r;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = k0(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Is(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = On(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Us(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return ro(this._rgb, 2, t), this;
  }
  darken(t) {
    return ro(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ro(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ro(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return g0(this._rgb, t), this;
  }
}
function Je() {
}
const b0 = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function pt(i) {
  return i == null;
}
function Lt(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function gt(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function It(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function _e(i, t) {
  return It(i) ? i : t;
}
function at(i, t) {
  return typeof i > "u" ? t : i;
}
const C0 = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, ep = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function Ct(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function kt(i, t, e, r) {
  let o, l, u;
  if (Lt(i))
    for (l = i.length, o = 0; o < l; o++)
      t.call(e, i[o], o);
  else if (gt(i))
    for (u = Object.keys(i), l = u.length, o = 0; o < l; o++)
      t.call(e, i[u[o]], u[o]);
}
function So(i, t) {
  let e, r, o, l;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, r = i.length; e < r; ++e)
    if (o = i[e], l = t[e], o.datasetIndex !== l.datasetIndex || o.index !== l.index)
      return !1;
  return !0;
}
function ko(i) {
  if (Lt(i))
    return i.map(ko);
  if (gt(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), r = e.length;
    let o = 0;
    for (; o < r; ++o)
      t[e[o]] = ko(i[e[o]]);
    return t;
  }
  return i;
}
function np(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function M0(i, t, e, r) {
  if (!np(i))
    return;
  const o = t[i], l = e[i];
  gt(o) && gt(l) ? Ns(o, l, r) : t[i] = ko(l);
}
function Ns(i, t, e) {
  const r = Lt(t) ? t : [
    t
  ], o = r.length;
  if (!gt(i))
    return i;
  e = e || {};
  const l = e.merger || M0;
  let u;
  for (let c = 0; c < o; ++c) {
    if (u = r[c], !gt(u))
      continue;
    const d = Object.keys(u);
    for (let p = 0, m = d.length; p < m; ++p)
      l(d[p], i, u, e);
  }
  return i;
}
function Rs(i, t) {
  return Ns(i, t, {
    merger: P0
  });
}
function P0(i, t, e) {
  if (!np(i))
    return;
  const r = t[i], o = e[i];
  gt(r) && gt(o) ? Rs(r, o) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = ko(o));
}
const Rd = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function E0(i) {
  const t = i.split("."), e = [];
  let r = "";
  for (const o of t)
    r += o, r.endsWith("\\") ? r = r.slice(0, -1) + "." : (e.push(r), r = "");
  return e;
}
function D0(i) {
  const t = E0(i);
  return (e) => {
    for (const r of t) {
      if (r === "")
        break;
      e = e && e[r];
    }
    return e;
  };
}
function Ln(i, t) {
  return (Rd[t] || (Rd[t] = D0(t)))(i);
}
function cu(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Bs = (i) => typeof i < "u", Rn = (i) => typeof i == "function", Ad = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function T0(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const vt = Math.PI, Dt = 2 * vt, O0 = Dt + vt, wo = Number.POSITIVE_INFINITY, L0 = vt / 180, Vt = vt / 2, Qn = vt / 4, zd = vt * 2 / 3, En = Math.log10, Ue = Math.sign;
function As(i, t, e) {
  return Math.abs(i - t) < e;
}
function Fd(i) {
  const t = Math.round(i);
  i = As(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(En(i))), r = i / e;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * e;
}
function R0(i) {
  const t = [], e = Math.sqrt(i);
  let r;
  for (r = 1; r < e; r++)
    i % r === 0 && (t.push(r), t.push(i / r));
  return e === (e | 0) && t.push(e), t.sort((o, l) => o - l).pop(), t;
}
function A0(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function Ai(i) {
  return !A0(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function z0(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function ip(i, t, e) {
  let r, o, l;
  for (r = 0, o = i.length; r < o; r++)
    l = i[r][e], isNaN(l) || (t.min = Math.min(t.min, l), t.max = Math.max(t.max, l));
}
function Fe(i) {
  return i * (vt / 180);
}
function fu(i) {
  return i * (180 / vt);
}
function Id(i) {
  if (!It(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function sp(i, t) {
  const e = t.x - i.x, r = t.y - i.y, o = Math.sqrt(e * e + r * r);
  let l = Math.atan2(r, e);
  return l < -0.5 * vt && (l += Dt), {
    angle: l,
    distance: o
  };
}
function Ga(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function F0(i, t) {
  return (i - t + O0) % Dt - vt;
}
function ne(i) {
  return (i % Dt + Dt) % Dt;
}
function Vs(i, t, e, r) {
  const o = ne(i), l = ne(t), u = ne(e), c = ne(l - o), d = ne(u - o), p = ne(o - l), m = ne(o - u);
  return o === l || o === u || r && l === u || c > d && p < m;
}
function Kt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function I0(i) {
  return Kt(i, -32768, 32767);
}
function sn(i, t, e, r = 1e-6) {
  return i >= Math.min(t, e) - r && i <= Math.max(t, e) + r;
}
function du(i, t, e) {
  e = e || ((u) => i[u] < t);
  let r = i.length - 1, o = 0, l;
  for (; r - o > 1; )
    l = o + r >> 1, e(l) ? o = l : r = l;
  return {
    lo: o,
    hi: r
  };
}
const rn = (i, t, e, r) => du(i, e, r ? (o) => {
  const l = i[o][t];
  return l < e || l === e && i[o + 1][t] === e;
} : (o) => i[o][t] < e), N0 = (i, t, e) => du(i, e, (r) => i[r][t] >= e);
function B0(i, t, e) {
  let r = 0, o = i.length;
  for (; r < o && i[r] < t; )
    r++;
  for (; o > r && i[o - 1] > e; )
    o--;
  return r > 0 || o < i.length ? i.slice(r, o) : i;
}
const rp = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function V0(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), rp.forEach((e) => {
    const r = "_onData" + cu(e), o = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...l) {
        const u = o.apply(this, l);
        return i._chartjs.listeners.forEach((c) => {
          typeof c[r] == "function" && c[r](...l);
        }), u;
      }
    });
  });
}
function Nd(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const r = e.listeners, o = r.indexOf(t);
  o !== -1 && r.splice(o, 1), !(r.length > 0) && (rp.forEach((l) => {
    delete i[l];
  }), delete i._chartjs);
}
function op(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const lp = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function ap(i, t) {
  let e = [], r = !1;
  return function(...o) {
    e = o, r || (r = !0, lp.call(window, () => {
      r = !1, i.apply(t, e);
    }));
  };
}
function j0(i, t) {
  let e;
  return function(...r) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, r)) : i.apply(this, r), t;
  };
}
const hu = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", ee = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, W0 = (i, t, e, r) => i === (r ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function up(i, t, e) {
  const r = t.length;
  let o = 0, l = r;
  if (i._sorted) {
    const { iScale: u, vScale: c, _parsed: d } = i, p = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, m = u.axis, { min: y, max: v, minDefined: _, maxDefined: k } = u.getUserBounds();
    if (_) {
      if (o = Math.min(
        // @ts-expect-error Need to type _parsed
        rn(d, m, y).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? r : rn(t, m, u.getPixelForValue(y)).lo
      ), p) {
        const S = d.slice(0, o + 1).reverse().findIndex((b) => !pt(b[c.axis]));
        o -= Math.max(0, S);
      }
      o = Kt(o, 0, r - 1);
    }
    if (k) {
      let S = Math.max(
        // @ts-expect-error Need to type _parsed
        rn(d, u.axis, v, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : rn(t, m, u.getPixelForValue(v), !0).hi + 1
      );
      if (p) {
        const b = d.slice(S - 1).findIndex((E) => !pt(E[c.axis]));
        S += Math.max(0, b);
      }
      l = Kt(S, o, r) - o;
    } else
      l = r - o;
  }
  return {
    start: o,
    count: l
  };
}
function cp(i) {
  const { xScale: t, yScale: e, _scaleRanges: r } = i, o = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!r)
    return i._scaleRanges = o, !0;
  const l = r.xmin !== t.min || r.xmax !== t.max || r.ymin !== e.min || r.ymax !== e.max;
  return Object.assign(r, o), l;
}
const oo = (i) => i === 0 || i === 1, Bd = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * Dt / e)), Vd = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * Dt / e) + 1, zs = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * Vt) + 1,
  easeOutSine: (i) => Math.sin(i * Vt),
  easeInOutSine: (i) => -0.5 * (Math.cos(vt * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => oo(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => oo(i) ? i : Bd(i, 0.075, 0.3),
  easeOutElastic: (i) => oo(i) ? i : Vd(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return oo(i) ? i : i < 0.5 ? 0.5 * Bd(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Vd(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - zs.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? zs.easeInBounce(i * 2) * 0.5 : zs.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function pu(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function jd(i) {
  return pu(i) ? i : new Is(i);
}
function Fa(i) {
  return pu(i) ? i : new Is(i).saturate(0.5).darken(0.1).hexString();
}
const H0 = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], U0 = [
  "color",
  "borderColor",
  "backgroundColor"
];
function $0(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: U0
    },
    numbers: {
      type: "number",
      properties: H0
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Y0(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Wd = /* @__PURE__ */ new Map();
function X0(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let r = Wd.get(e);
  return r || (r = new Intl.NumberFormat(i, t), Wd.set(e, r)), r;
}
function $s(i, t, e) {
  return X0(t, e).format(i);
}
const fp = {
  values(i) {
    return Lt(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const r = this.chart.options.locale;
    let o, l = i;
    if (e.length > 1) {
      const p = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (p < 1e-4 || p > 1e15) && (o = "scientific"), l = K0(i, e);
    }
    const u = En(Math.abs(l)), c = isNaN(u) ? 1 : Math.max(Math.min(-1 * Math.floor(u), 20), 0), d = {
      notation: o,
      minimumFractionDigits: c,
      maximumFractionDigits: c
    };
    return Object.assign(d, this.options.ticks.format), $s(i, r, d);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const r = e[t].significand || i / Math.pow(10, Math.floor(En(i)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(r) || t > 0.8 * e.length ? fp.numeric.call(this, i, t, e) : "";
  }
};
function K0(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Do = {
  formatters: fp
};
function Q0(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Do.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const ii = /* @__PURE__ */ Object.create(null), Za = /* @__PURE__ */ Object.create(null);
function Fs(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let r = 0, o = e.length; r < o; ++r) {
    const l = e[r];
    i = i[l] || (i[l] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function Ia(i, t, e) {
  return typeof t == "string" ? Ns(Fs(i, t), e) : Ns(Fs(i, ""), t);
}
class G0 {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (r, o) => Fa(o.backgroundColor), this.hoverBorderColor = (r, o) => Fa(o.borderColor), this.hoverColor = (r, o) => Fa(o.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return Ia(this, t, e);
  }
  get(t) {
    return Fs(this, t);
  }
  describe(t, e) {
    return Ia(Za, t, e);
  }
  override(t, e) {
    return Ia(ii, t, e);
  }
  route(t, e, r, o) {
    const l = Fs(this, t), u = Fs(this, r), c = "_" + e;
    Object.defineProperties(l, {
      [c]: {
        value: l[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const d = this[c], p = u[o];
          return gt(d) ? Object.assign({}, p, d) : at(d, p);
        },
        set(d) {
          this[c] = d;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var Rt = /* @__PURE__ */ new G0({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  $0,
  Y0,
  Q0
]);
function Z0(i) {
  return !i || pt(i.size) || pt(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function bo(i, t, e, r, o) {
  let l = t[o];
  return l || (l = t[o] = i.measureText(o).width, e.push(o)), l > r && (r = l), r;
}
function q0(i, t, e, r) {
  r = r || {};
  let o = r.data = r.data || {}, l = r.garbageCollect = r.garbageCollect || [];
  r.font !== t && (o = r.data = {}, l = r.garbageCollect = [], r.font = t), i.save(), i.font = t;
  let u = 0;
  const c = e.length;
  let d, p, m, y, v;
  for (d = 0; d < c; d++)
    if (y = e[d], y != null && !Lt(y))
      u = bo(i, o, l, u, y);
    else if (Lt(y))
      for (p = 0, m = y.length; p < m; p++)
        v = y[p], v != null && !Lt(v) && (u = bo(i, o, l, u, v));
  i.restore();
  const _ = l.length / 2;
  if (_ > e.length) {
    for (d = 0; d < _; d++)
      delete o[l[d]];
    l.splice(0, _);
  }
  return u;
}
function Gn(i, t, e) {
  const r = i.currentDevicePixelRatio, o = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - o) * r) / r + o;
}
function Hd(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function qa(i, t, e, r) {
  dp(i, t, e, r, null);
}
function dp(i, t, e, r, o) {
  let l, u, c, d, p, m, y, v;
  const _ = t.pointStyle, k = t.rotation, S = t.radius;
  let b = (k || 0) * L0;
  if (_ && typeof _ == "object" && (l = _.toString(), l === "[object HTMLImageElement]" || l === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, r), i.rotate(b), i.drawImage(_, -_.width / 2, -_.height / 2, _.width, _.height), i.restore();
    return;
  }
  if (!(isNaN(S) || S <= 0)) {
    switch (i.beginPath(), _) {
      // Default includes circle
      default:
        o ? i.ellipse(e, r, o / 2, S, 0, 0, Dt) : i.arc(e, r, S, 0, Dt), i.closePath();
        break;
      case "triangle":
        m = o ? o / 2 : S, i.moveTo(e + Math.sin(b) * m, r - Math.cos(b) * S), b += zd, i.lineTo(e + Math.sin(b) * m, r - Math.cos(b) * S), b += zd, i.lineTo(e + Math.sin(b) * m, r - Math.cos(b) * S), i.closePath();
        break;
      case "rectRounded":
        p = S * 0.516, d = S - p, u = Math.cos(b + Qn) * d, y = Math.cos(b + Qn) * (o ? o / 2 - p : d), c = Math.sin(b + Qn) * d, v = Math.sin(b + Qn) * (o ? o / 2 - p : d), i.arc(e - y, r - c, p, b - vt, b - Vt), i.arc(e + v, r - u, p, b - Vt, b), i.arc(e + y, r + c, p, b, b + Vt), i.arc(e - v, r + u, p, b + Vt, b + vt), i.closePath();
        break;
      case "rect":
        if (!k) {
          d = Math.SQRT1_2 * S, m = o ? o / 2 : d, i.rect(e - m, r - d, 2 * m, 2 * d);
          break;
        }
        b += Qn;
      /* falls through */
      case "rectRot":
        y = Math.cos(b) * (o ? o / 2 : S), u = Math.cos(b) * S, c = Math.sin(b) * S, v = Math.sin(b) * (o ? o / 2 : S), i.moveTo(e - y, r - c), i.lineTo(e + v, r - u), i.lineTo(e + y, r + c), i.lineTo(e - v, r + u), i.closePath();
        break;
      case "crossRot":
        b += Qn;
      /* falls through */
      case "cross":
        y = Math.cos(b) * (o ? o / 2 : S), u = Math.cos(b) * S, c = Math.sin(b) * S, v = Math.sin(b) * (o ? o / 2 : S), i.moveTo(e - y, r - c), i.lineTo(e + y, r + c), i.moveTo(e + v, r - u), i.lineTo(e - v, r + u);
        break;
      case "star":
        y = Math.cos(b) * (o ? o / 2 : S), u = Math.cos(b) * S, c = Math.sin(b) * S, v = Math.sin(b) * (o ? o / 2 : S), i.moveTo(e - y, r - c), i.lineTo(e + y, r + c), i.moveTo(e + v, r - u), i.lineTo(e - v, r + u), b += Qn, y = Math.cos(b) * (o ? o / 2 : S), u = Math.cos(b) * S, c = Math.sin(b) * S, v = Math.sin(b) * (o ? o / 2 : S), i.moveTo(e - y, r - c), i.lineTo(e + y, r + c), i.moveTo(e + v, r - u), i.lineTo(e - v, r + u);
        break;
      case "line":
        u = o ? o / 2 : Math.cos(b) * S, c = Math.sin(b) * S, i.moveTo(e - u, r - c), i.lineTo(e + u, r + c);
        break;
      case "dash":
        i.moveTo(e, r), i.lineTo(e + Math.cos(b) * (o ? o / 2 : S), r + Math.sin(b) * S);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function on(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function To(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Oo(i) {
  i.restore();
}
function J0(i, t, e, r, o) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (o === "middle") {
    const l = (t.x + e.x) / 2;
    i.lineTo(l, t.y), i.lineTo(l, e.y);
  } else o === "after" != !!r ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function ty(i, t, e, r) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(r ? t.cp1x : t.cp2x, r ? t.cp1y : t.cp2y, r ? e.cp2x : e.cp1x, r ? e.cp2y : e.cp1y, e.x, e.y);
}
function ey(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), pt(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function ny(i, t, e, r, o) {
  if (o.strikethrough || o.underline) {
    const l = i.measureText(r), u = t - l.actualBoundingBoxLeft, c = t + l.actualBoundingBoxRight, d = e - l.actualBoundingBoxAscent, p = e + l.actualBoundingBoxDescent, m = o.strikethrough ? (d + p) / 2 : p;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = o.decorationWidth || 2, i.moveTo(u, m), i.lineTo(c, m), i.stroke();
  }
}
function iy(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function si(i, t, e, r, o, l = {}) {
  const u = Lt(t) ? t : [
    t
  ], c = l.strokeWidth > 0 && l.strokeColor !== "";
  let d, p;
  for (i.save(), i.font = o.string, ey(i, l), d = 0; d < u.length; ++d)
    p = u[d], l.backdrop && iy(i, l.backdrop), c && (l.strokeColor && (i.strokeStyle = l.strokeColor), pt(l.strokeWidth) || (i.lineWidth = l.strokeWidth), i.strokeText(p, e, r, l.maxWidth)), i.fillText(p, e, r, l.maxWidth), ny(i, e, r, p, l), r += Number(o.lineHeight);
  i.restore();
}
function js(i, t) {
  const { x: e, y: r, w: o, h: l, radius: u } = t;
  i.arc(e + u.topLeft, r + u.topLeft, u.topLeft, 1.5 * vt, vt, !0), i.lineTo(e, r + l - u.bottomLeft), i.arc(e + u.bottomLeft, r + l - u.bottomLeft, u.bottomLeft, vt, Vt, !0), i.lineTo(e + o - u.bottomRight, r + l), i.arc(e + o - u.bottomRight, r + l - u.bottomRight, u.bottomRight, Vt, 0, !0), i.lineTo(e + o, r + u.topRight), i.arc(e + o - u.topRight, r + u.topRight, u.topRight, 0, -Vt, !0), i.lineTo(e + u.topLeft, r);
}
const sy = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, ry = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function oy(i, t) {
  const e = ("" + i).match(sy);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const ly = (i) => +i || 0;
function gu(i, t) {
  const e = {}, r = gt(t), o = r ? Object.keys(t) : t, l = gt(i) ? r ? (u) => at(i[u], i[t[u]]) : (u) => i[u] : () => i;
  for (const u of o)
    e[u] = ly(l(u));
  return e;
}
function hp(i) {
  return gu(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ei(i) {
  return gu(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function se(i) {
  const t = hp(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function Ut(i, t) {
  i = i || {}, t = t || Rt.font;
  let e = at(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let r = at(i.style, t.style);
  r && !("" + r).match(ry) && (console.warn('Invalid font style specified: "' + r + '"'), r = void 0);
  const o = {
    family: at(i.family, t.family),
    lineHeight: oy(at(i.lineHeight, t.lineHeight), e),
    size: e,
    style: r,
    weight: at(i.weight, t.weight),
    string: ""
  };
  return o.string = Z0(o), o;
}
function Ds(i, t, e, r) {
  let o, l, u;
  for (o = 0, l = i.length; o < l; ++o)
    if (u = i[o], u !== void 0 && u !== void 0)
      return u;
}
function ay(i, t, e) {
  const { min: r, max: o } = i, l = ep(t, (o - r) / 2), u = (c, d) => e && c === 0 ? 0 : c + d;
  return {
    min: u(r, -Math.abs(l)),
    max: u(o, l)
  };
}
function An(i, t) {
  return Object.assign(Object.create(i), t);
}
function mu(i, t = [
  ""
], e, r, o = () => i[0]) {
  const l = e || i;
  typeof r > "u" && (r = yp("_fallback", i));
  const u = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: l,
    _fallback: r,
    _getTarget: o,
    override: (c) => mu([
      c,
      ...i
    ], t, l, r)
  };
  return new Proxy(u, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(c, d) {
      return delete c[d], delete c._keys, delete i[0][d], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(c, d) {
      return gp(c, d, () => my(d, t, i, c));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(c, d) {
      return Reflect.getOwnPropertyDescriptor(c._scopes[0], d);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(c, d) {
      return $d(c).includes(d);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(c) {
      return $d(c);
    },
    /**
    * A trap for setting property values.
    */
    set(c, d, p) {
      const m = c._storage || (c._storage = o());
      return c[d] = m[d] = p, delete c._keys, !0;
    }
  });
}
function zi(i, t, e, r) {
  const o = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: pp(i, r),
    setContext: (l) => zi(i, l, e, r),
    override: (l) => zi(i.override(l), t, e, r)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(l, u) {
      return delete l[u], delete i[u], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(l, u, c) {
      return gp(l, u, () => cy(l, u, c));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(l, u) {
      return l._descriptors.allKeys ? Reflect.has(i, u) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, u);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(l, u) {
      return Reflect.has(i, u);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(l, u, c) {
      return i[u] = c, delete l[u], !0;
    }
  });
}
function pp(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: r = t.indexable, _allKeys: o = t.allKeys } = i;
  return {
    allKeys: o,
    scriptable: e,
    indexable: r,
    isScriptable: Rn(e) ? e : () => e,
    isIndexable: Rn(r) ? r : () => r
  };
}
const uy = (i, t) => i ? i + cu(t) : t, yu = (i, t) => gt(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function gp(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const r = e();
  return i[t] = r, r;
}
function cy(i, t, e) {
  const { _proxy: r, _context: o, _subProxy: l, _descriptors: u } = i;
  let c = r[t];
  return Rn(c) && u.isScriptable(t) && (c = fy(t, c, i, e)), Lt(c) && c.length && (c = dy(t, c, i, u.isIndexable)), yu(t, c) && (c = zi(c, o, l && l[t], u)), c;
}
function fy(i, t, e, r) {
  const { _proxy: o, _context: l, _subProxy: u, _stack: c } = e;
  if (c.has(i))
    throw new Error("Recursion detected: " + Array.from(c).join("->") + "->" + i);
  c.add(i);
  let d = t(l, u || r);
  return c.delete(i), yu(i, d) && (d = vu(o._scopes, o, i, d)), d;
}
function dy(i, t, e, r) {
  const { _proxy: o, _context: l, _subProxy: u, _descriptors: c } = e;
  if (typeof l.index < "u" && r(i))
    return t[l.index % t.length];
  if (gt(t[0])) {
    const d = t, p = o._scopes.filter((m) => m !== d);
    t = [];
    for (const m of d) {
      const y = vu(p, o, i, m);
      t.push(zi(y, l, u && u[i], c));
    }
  }
  return t;
}
function mp(i, t, e) {
  return Rn(i) ? i(t, e) : i;
}
const hy = (i, t) => i === !0 ? t : typeof i == "string" ? Ln(t, i) : void 0;
function py(i, t, e, r, o) {
  for (const l of t) {
    const u = hy(e, l);
    if (u) {
      i.add(u);
      const c = mp(u._fallback, e, o);
      if (typeof c < "u" && c !== e && c !== r)
        return c;
    } else if (u === !1 && typeof r < "u" && e !== r)
      return null;
  }
  return !1;
}
function vu(i, t, e, r) {
  const o = t._rootScopes, l = mp(t._fallback, e, r), u = [
    ...i,
    ...o
  ], c = /* @__PURE__ */ new Set();
  c.add(r);
  let d = Ud(c, u, e, l || e, r);
  return d === null || typeof l < "u" && l !== e && (d = Ud(c, u, l, d, r), d === null) ? !1 : mu(Array.from(c), [
    ""
  ], o, l, () => gy(t, e, r));
}
function Ud(i, t, e, r, o) {
  for (; e; )
    e = py(i, t, e, r, o);
  return e;
}
function gy(i, t, e) {
  const r = i._getTarget();
  t in r || (r[t] = {});
  const o = r[t];
  return Lt(o) && gt(e) ? e : o || {};
}
function my(i, t, e, r) {
  let o;
  for (const l of t)
    if (o = yp(uy(l, i), e), typeof o < "u")
      return yu(i, o) ? vu(e, r, i, o) : o;
}
function yp(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const r = e[i];
    if (typeof r < "u")
      return r;
  }
}
function $d(i) {
  let t = i._keys;
  return t || (t = i._keys = yy(i._scopes)), t;
}
function yy(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const r of Object.keys(e).filter((o) => !o.startsWith("_")))
      t.add(r);
  return Array.from(t);
}
function vp(i, t, e, r) {
  const { iScale: o } = i, { key: l = "r" } = this._parsing, u = new Array(r);
  let c, d, p, m;
  for (c = 0, d = r; c < d; ++c)
    p = c + e, m = t[p], u[c] = {
      r: o.parse(Ln(m, l), p)
    };
  return u;
}
const vy = Number.EPSILON || 1e-14, Fi = (i, t) => t < i.length && !i[t].skip && i[t], xp = (i) => i === "x" ? "y" : "x";
function xy(i, t, e, r) {
  const o = i.skip ? t : i, l = t, u = e.skip ? t : e, c = Ga(l, o), d = Ga(u, l);
  let p = c / (c + d), m = d / (c + d);
  p = isNaN(p) ? 0 : p, m = isNaN(m) ? 0 : m;
  const y = r * p, v = r * m;
  return {
    previous: {
      x: l.x - y * (u.x - o.x),
      y: l.y - y * (u.y - o.y)
    },
    next: {
      x: l.x + v * (u.x - o.x),
      y: l.y + v * (u.y - o.y)
    }
  };
}
function _y(i, t, e) {
  const r = i.length;
  let o, l, u, c, d, p = Fi(i, 0);
  for (let m = 0; m < r - 1; ++m)
    if (d = p, p = Fi(i, m + 1), !(!d || !p)) {
      if (As(t[m], 0, vy)) {
        e[m] = e[m + 1] = 0;
        continue;
      }
      o = e[m] / t[m], l = e[m + 1] / t[m], c = Math.pow(o, 2) + Math.pow(l, 2), !(c <= 9) && (u = 3 / Math.sqrt(c), e[m] = o * u * t[m], e[m + 1] = l * u * t[m]);
    }
}
function Sy(i, t, e = "x") {
  const r = xp(e), o = i.length;
  let l, u, c, d = Fi(i, 0);
  for (let p = 0; p < o; ++p) {
    if (u = c, c = d, d = Fi(i, p + 1), !c)
      continue;
    const m = c[e], y = c[r];
    u && (l = (m - u[e]) / 3, c[`cp1${e}`] = m - l, c[`cp1${r}`] = y - l * t[p]), d && (l = (d[e] - m) / 3, c[`cp2${e}`] = m + l, c[`cp2${r}`] = y + l * t[p]);
  }
}
function ky(i, t = "x") {
  const e = xp(t), r = i.length, o = Array(r).fill(0), l = Array(r);
  let u, c, d, p = Fi(i, 0);
  for (u = 0; u < r; ++u)
    if (c = d, d = p, p = Fi(i, u + 1), !!d) {
      if (p) {
        const m = p[t] - d[t];
        o[u] = m !== 0 ? (p[e] - d[e]) / m : 0;
      }
      l[u] = c ? p ? Ue(o[u - 1]) !== Ue(o[u]) ? 0 : (o[u - 1] + o[u]) / 2 : o[u - 1] : o[u];
    }
  _y(i, o, l), Sy(i, l, t);
}
function lo(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function wy(i, t) {
  let e, r, o, l, u, c = on(i[0], t);
  for (e = 0, r = i.length; e < r; ++e)
    u = l, l = c, c = e < r - 1 && on(i[e + 1], t), l && (o = i[e], u && (o.cp1x = lo(o.cp1x, t.left, t.right), o.cp1y = lo(o.cp1y, t.top, t.bottom)), c && (o.cp2x = lo(o.cp2x, t.left, t.right), o.cp2y = lo(o.cp2y, t.top, t.bottom)));
}
function by(i, t, e, r, o) {
  let l, u, c, d;
  if (t.spanGaps && (i = i.filter((p) => !p.skip)), t.cubicInterpolationMode === "monotone")
    ky(i, o);
  else {
    let p = r ? i[i.length - 1] : i[0];
    for (l = 0, u = i.length; l < u; ++l)
      c = i[l], d = xy(p, c, i[Math.min(l + 1, u - (r ? 0 : 1)) % u], t.tension), c.cp1x = d.previous.x, c.cp1y = d.previous.y, c.cp2x = d.next.x, c.cp2y = d.next.y, p = c;
  }
  t.capBezierPoints && wy(i, e);
}
function xu() {
  return typeof window < "u" && typeof document < "u";
}
function _u(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Co(i, t, e) {
  let r;
  return typeof i == "string" ? (r = parseInt(i, 10), i.indexOf("%") !== -1 && (r = r / 100 * t.parentNode[e])) : r = i, r;
}
const Lo = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Cy(i, t) {
  return Lo(i).getPropertyValue(t);
}
const My = [
  "top",
  "right",
  "bottom",
  "left"
];
function ni(i, t, e) {
  const r = {};
  e = e ? "-" + e : "";
  for (let o = 0; o < 4; o++) {
    const l = My[o];
    r[l] = parseFloat(i[t + "-" + l + e]) || 0;
  }
  return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
}
const Py = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ey(i, t) {
  const e = i.touches, r = e && e.length ? e[0] : i, { offsetX: o, offsetY: l } = r;
  let u = !1, c, d;
  if (Py(o, l, i.target))
    c = o, d = l;
  else {
    const p = t.getBoundingClientRect();
    c = r.clientX - p.left, d = r.clientY - p.top, u = !0;
  }
  return {
    x: c,
    y: d,
    box: u
  };
}
function Jn(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: r } = t, o = Lo(e), l = o.boxSizing === "border-box", u = ni(o, "padding"), c = ni(o, "border", "width"), { x: d, y: p, box: m } = Ey(i, e), y = u.left + (m && c.left), v = u.top + (m && c.top);
  let { width: _, height: k } = t;
  return l && (_ -= u.width + c.width, k -= u.height + c.height), {
    x: Math.round((d - y) / _ * e.width / r),
    y: Math.round((p - v) / k * e.height / r)
  };
}
function Dy(i, t, e) {
  let r, o;
  if (t === void 0 || e === void 0) {
    const l = i && _u(i);
    if (!l)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const u = l.getBoundingClientRect(), c = Lo(l), d = ni(c, "border", "width"), p = ni(c, "padding");
      t = u.width - p.width - d.width, e = u.height - p.height - d.height, r = Co(c.maxWidth, l, "clientWidth"), o = Co(c.maxHeight, l, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: r || wo,
    maxHeight: o || wo
  };
}
const Dn = (i) => Math.round(i * 10) / 10;
function Ty(i, t, e, r) {
  const o = Lo(i), l = ni(o, "margin"), u = Co(o.maxWidth, i, "clientWidth") || wo, c = Co(o.maxHeight, i, "clientHeight") || wo, d = Dy(i, t, e);
  let { width: p, height: m } = d;
  if (o.boxSizing === "content-box") {
    const v = ni(o, "border", "width"), _ = ni(o, "padding");
    p -= _.width + v.width, m -= _.height + v.height;
  }
  return p = Math.max(0, p - l.width), m = Math.max(0, r ? p / r : m - l.height), p = Dn(Math.min(p, u, d.maxWidth)), m = Dn(Math.min(m, c, d.maxHeight)), p && !m && (m = Dn(p / 2)), (t !== void 0 || e !== void 0) && r && d.height && m > d.height && (m = d.height, p = Dn(Math.floor(m * r))), {
    width: p,
    height: m
  };
}
function Yd(i, t, e) {
  const r = t || 1, o = Dn(i.height * r), l = Dn(i.width * r);
  i.height = Dn(i.height), i.width = Dn(i.width);
  const u = i.canvas;
  return u.style && (e || !u.style.height && !u.style.width) && (u.style.height = `${i.height}px`, u.style.width = `${i.width}px`), i.currentDevicePixelRatio !== r || u.height !== o || u.width !== l ? (i.currentDevicePixelRatio = r, u.height = o, u.width = l, i.ctx.setTransform(r, 0, 0, r, 0, 0), !0) : !1;
}
const Oy = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    xu() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Xd(i, t) {
  const e = Cy(i, t), r = e && e.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
function ti(i, t, e, r) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Ly(i, t, e, r) {
  return {
    x: i.x + e * (t.x - i.x),
    y: r === "middle" ? e < 0.5 ? i.y : t.y : r === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Ry(i, t, e, r) {
  const o = {
    x: i.cp2x,
    y: i.cp2y
  }, l = {
    x: t.cp1x,
    y: t.cp1y
  }, u = ti(i, o, e), c = ti(o, l, e), d = ti(l, t, e), p = ti(u, c, e), m = ti(c, d, e);
  return ti(p, m, e);
}
const Ay = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, r) {
      return e - r;
    },
    leftForLtr(e, r) {
      return e - r;
    }
  };
}, zy = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Ri(i, t, e) {
  return i ? Ay(t, e) : zy();
}
function _p(i, t) {
  let e, r;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, r = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = r);
}
function Sp(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function kp(i) {
  return i === "angle" ? {
    between: Vs,
    compare: F0,
    normalize: ne
  } : {
    between: sn,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Kd({ start: i, end: t, count: e, loop: r, style: o }) {
  return {
    start: i % e,
    end: t % e,
    loop: r && (t - i + 1) % e === 0,
    style: o
  };
}
function Fy(i, t, e) {
  const { property: r, start: o, end: l } = e, { between: u, normalize: c } = kp(r), d = t.length;
  let { start: p, end: m, loop: y } = i, v, _;
  if (y) {
    for (p += d, m += d, v = 0, _ = d; v < _ && u(c(t[p % d][r]), o, l); ++v)
      p--, m--;
    p %= d, m %= d;
  }
  return m < p && (m += d), {
    start: p,
    end: m,
    loop: y,
    style: i.style
  };
}
function wp(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: r, start: o, end: l } = e, u = t.length, { compare: c, between: d, normalize: p } = kp(r), { start: m, end: y, loop: v, style: _ } = Fy(i, t, e), k = [];
  let S = !1, b = null, E, L, z;
  const A = () => d(o, z, E) && c(o, z) !== 0, R = () => c(l, E) === 0 || d(l, z, E), V = () => S || A(), j = () => !S || R();
  for (let H = m, Z = m; H <= y; ++H)
    L = t[H % u], !L.skip && (E = p(L[r]), E !== z && (S = d(E, o, l), b === null && V() && (b = c(E, o) === 0 ? H : Z), b !== null && j() && (k.push(Kd({
      start: b,
      end: H,
      loop: v,
      count: u,
      style: _
    })), b = null), Z = H, z = E));
  return b !== null && k.push(Kd({
    start: b,
    end: y,
    loop: v,
    count: u,
    style: _
  })), k;
}
function bp(i, t) {
  const e = [], r = i.segments;
  for (let o = 0; o < r.length; o++) {
    const l = wp(r[o], i.points, t);
    l.length && e.push(...l);
  }
  return e;
}
function Iy(i, t, e, r) {
  let o = 0, l = t - 1;
  if (e && !r)
    for (; o < t && !i[o].skip; )
      o++;
  for (; o < t && i[o].skip; )
    o++;
  for (o %= t, e && (l += o); l > o && i[l % t].skip; )
    l--;
  return l %= t, {
    start: o,
    end: l
  };
}
function Ny(i, t, e, r) {
  const o = i.length, l = [];
  let u = t, c = i[t], d;
  for (d = t + 1; d <= e; ++d) {
    const p = i[d % o];
    p.skip || p.stop ? c.skip || (r = !1, l.push({
      start: t % o,
      end: (d - 1) % o,
      loop: r
    }), t = u = p.stop ? d : null) : (u = d, c.skip && (t = d)), c = p;
  }
  return u !== null && l.push({
    start: t % o,
    end: u % o,
    loop: r
  }), l;
}
function By(i, t) {
  const e = i.points, r = i.options.spanGaps, o = e.length;
  if (!o)
    return [];
  const l = !!i._loop, { start: u, end: c } = Iy(e, o, l, r);
  if (r === !0)
    return Qd(i, [
      {
        start: u,
        end: c,
        loop: l
      }
    ], e, t);
  const d = c < u ? c + o : c, p = !!i._fullLoop && u === 0 && c === o - 1;
  return Qd(i, Ny(e, u, d, p), e, t);
}
function Qd(i, t, e, r) {
  return !r || !r.setContext || !e ? t : Vy(i, t, e, r);
}
function Vy(i, t, e, r) {
  const o = i._chart.getContext(), l = Gd(i.options), { _datasetIndex: u, options: { spanGaps: c } } = i, d = e.length, p = [];
  let m = l, y = t[0].start, v = y;
  function _(k, S, b, E) {
    const L = c ? -1 : 1;
    if (k !== S) {
      for (k += d; e[k % d].skip; )
        k -= L;
      for (; e[S % d].skip; )
        S += L;
      k % d !== S % d && (p.push({
        start: k % d,
        end: S % d,
        loop: b,
        style: E
      }), m = E, y = S % d);
    }
  }
  for (const k of t) {
    y = c ? y : k.start;
    let S = e[y % d], b;
    for (v = y + 1; v <= k.end; v++) {
      const E = e[v % d];
      b = Gd(r.setContext(An(o, {
        type: "segment",
        p0: S,
        p1: E,
        p0DataIndex: (v - 1) % d,
        p1DataIndex: v % d,
        datasetIndex: u
      }))), jy(b, m) && _(y, v - 1, k.loop, m), S = E, m = b;
    }
    y < v - 1 && _(y, v - 1, k.loop, m);
  }
  return p;
}
function Gd(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function jy(i, t) {
  if (!t)
    return !1;
  const e = [], r = function(o, l) {
    return pu(l) ? (e.includes(l) || e.push(l), e.indexOf(l)) : l;
  };
  return JSON.stringify(i, r) !== JSON.stringify(t, r);
}
function ao(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Wy(i, t) {
  const { xScale: e, yScale: r } = i;
  return e && r ? {
    left: ao(e, t, "left"),
    right: ao(e, t, "right"),
    top: ao(r, t, "top"),
    bottom: ao(r, t, "bottom")
  } : t;
}
function Cp(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const r = Wy(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : r.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : r.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : r.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : r.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
class Hy {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, r, o) {
    const l = e.listeners[o], u = e.duration;
    l.forEach((c) => c({
      chart: t,
      initial: e.initial,
      numSteps: u,
      currentStep: Math.min(r - e.start, u)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = lp.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((r, o) => {
      if (!r.running || !r.items.length)
        return;
      const l = r.items;
      let u = l.length - 1, c = !1, d;
      for (; u >= 0; --u)
        d = l[u], d._active ? (d._total > r.duration && (r.duration = d._total), d.tick(t), c = !0) : (l[u] = l[l.length - 1], l.pop());
      c && (o.draw(), this._notify(o, r, t, "progress")), l.length || (r.running = !1, this._notify(o, r, t, "complete"), r.initial = !1), e += l.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let r = e.get(t);
    return r || (r = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, r)), r;
  }
  listen(t, e, r) {
    this._getAnims(t).listeners[e].push(r);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((r, o) => Math.max(r, o._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const r = e.items;
    let o = r.length - 1;
    for (; o >= 0; --o)
      r[o].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var tn = /* @__PURE__ */ new Hy();
const Zd = "transparent", Uy = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const r = jd(i || Zd), o = r.valid && jd(t || Zd);
    return o && o.valid ? o.mix(r, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class $y {
  constructor(t, e, r, o) {
    const l = e[r];
    o = Ds([
      t.to,
      o,
      l,
      t.from
    ]);
    const u = Ds([
      t.from,
      l,
      o
    ]);
    this._active = !0, this._fn = t.fn || Uy[t.type || typeof u], this._easing = zs[t.easing] || zs.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = r, this._from = u, this._to = o, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, r) {
    if (this._active) {
      this._notify(!1);
      const o = this._target[this._prop], l = r - this._start, u = this._duration - l;
      this._start = r, this._duration = Math.floor(Math.max(u, t.duration)), this._total += l, this._loop = !!t.loop, this._to = Ds([
        t.to,
        e,
        o,
        t.from
      ]), this._from = Ds([
        t.from,
        o,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, r = this._duration, o = this._prop, l = this._from, u = this._loop, c = this._to;
    let d;
    if (this._active = l !== c && (u || e < r), !this._active) {
      this._target[o] = c, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[o] = l;
      return;
    }
    d = e / r % 2, d = u && d > 1 ? 2 - d : d, d = this._easing(Math.min(1, Math.max(0, d))), this._target[o] = this._fn(l, c, d);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, r) => {
      t.push({
        res: e,
        rej: r
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", r = this._promises || [];
    for (let o = 0; o < r.length; o++)
      r[o][e]();
  }
}
class Mp {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!gt(t))
      return;
    const e = Object.keys(Rt.animation), r = this._properties;
    Object.getOwnPropertyNames(t).forEach((o) => {
      const l = t[o];
      if (!gt(l))
        return;
      const u = {};
      for (const c of e)
        u[c] = l[c];
      (Lt(l.properties) && l.properties || [
        o
      ]).forEach((c) => {
        (c === o || !r.has(c)) && r.set(c, u);
      });
    });
  }
  _animateOptions(t, e) {
    const r = e.options, o = Xy(t, r);
    if (!o)
      return [];
    const l = this._createAnimations(o, r);
    return r.$shared && Yy(t.options.$animations, r).then(() => {
      t.options = r;
    }, () => {
    }), l;
  }
  _createAnimations(t, e) {
    const r = this._properties, o = [], l = t.$animations || (t.$animations = {}), u = Object.keys(e), c = Date.now();
    let d;
    for (d = u.length - 1; d >= 0; --d) {
      const p = u[d];
      if (p.charAt(0) === "$")
        continue;
      if (p === "options") {
        o.push(...this._animateOptions(t, e));
        continue;
      }
      const m = e[p];
      let y = l[p];
      const v = r.get(p);
      if (y)
        if (v && y.active()) {
          y.update(v, m, c);
          continue;
        } else
          y.cancel();
      if (!v || !v.duration) {
        t[p] = m;
        continue;
      }
      l[p] = y = new $y(v, t, p, m), o.push(y);
    }
    return o;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const r = this._createAnimations(t, e);
    if (r.length)
      return tn.add(this._chart, r), !0;
  }
}
function Yy(i, t) {
  const e = [], r = Object.keys(t);
  for (let o = 0; o < r.length; o++) {
    const l = i[r[o]];
    l && l.active() && e.push(l.wait());
  }
  return Promise.all(e);
}
function Xy(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function qd(i, t) {
  const e = i && i.options || {}, r = e.reverse, o = e.min === void 0 ? t : 0, l = e.max === void 0 ? t : 0;
  return {
    start: r ? l : o,
    end: r ? o : l
  };
}
function Ky(i, t, e) {
  if (e === !1)
    return !1;
  const r = qd(i, e), o = qd(t, e);
  return {
    top: o.end,
    right: r.end,
    bottom: o.start,
    left: r.start
  };
}
function Qy(i) {
  let t, e, r, o;
  return gt(i) ? (t = i.top, e = i.right, r = i.bottom, o = i.left) : t = e = r = o = i, {
    top: t,
    right: e,
    bottom: r,
    left: o,
    disabled: i === !1
  };
}
function Pp(i, t) {
  const e = [], r = i._getSortedDatasetMetas(t);
  let o, l;
  for (o = 0, l = r.length; o < l; ++o)
    e.push(r[o].index);
  return e;
}
function Jd(i, t, e, r = {}) {
  const o = i.keys, l = r.mode === "single";
  let u, c, d, p;
  if (t === null)
    return;
  let m = !1;
  for (u = 0, c = o.length; u < c; ++u) {
    if (d = +o[u], d === e) {
      if (m = !0, r.all)
        continue;
      break;
    }
    p = i.values[d], It(p) && (l || t === 0 || Ue(t) === Ue(p)) && (t += p);
  }
  return !m && !r.all ? 0 : t;
}
function Gy(i, t) {
  const { iScale: e, vScale: r } = t, o = e.axis === "x" ? "x" : "y", l = r.axis === "x" ? "x" : "y", u = Object.keys(i), c = new Array(u.length);
  let d, p, m;
  for (d = 0, p = u.length; d < p; ++d)
    m = u[d], c[d] = {
      [o]: m,
      [l]: i[m]
    };
  return c;
}
function Na(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Zy(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function qy(i) {
  const { min: t, max: e, minDefined: r, maxDefined: o } = i.getUserBounds();
  return {
    min: r ? t : Number.NEGATIVE_INFINITY,
    max: o ? e : Number.POSITIVE_INFINITY
  };
}
function Jy(i, t, e) {
  const r = i[t] || (i[t] = {});
  return r[e] || (r[e] = {});
}
function th(i, t, e, r) {
  for (const o of t.getMatchingVisibleMetas(r).reverse()) {
    const l = i[o.index];
    if (e && l > 0 || !e && l < 0)
      return o.index;
  }
  return null;
}
function eh(i, t) {
  const { chart: e, _cachedMeta: r } = i, o = e._stacks || (e._stacks = {}), { iScale: l, vScale: u, index: c } = r, d = l.axis, p = u.axis, m = Zy(l, u, r), y = t.length;
  let v;
  for (let _ = 0; _ < y; ++_) {
    const k = t[_], { [d]: S, [p]: b } = k, E = k._stacks || (k._stacks = {});
    v = E[p] = Jy(o, m, S), v[c] = b, v._top = th(v, u, !0, r.type), v._bottom = th(v, u, !1, r.type);
    const L = v._visualValues || (v._visualValues = {});
    L[c] = b;
  }
}
function Ba(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((r) => e[r].axis === t).shift();
}
function tv(i, t) {
  return An(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function ev(i, t, e) {
  return An(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function ws(i, t) {
  const e = i.controller.index, r = i.vScale && i.vScale.axis;
  if (r) {
    t = t || i._parsed;
    for (const o of t) {
      const l = o._stacks;
      if (!l || l[r] === void 0 || l[r][e] === void 0)
        return;
      delete l[r][e], l[r]._visualValues !== void 0 && l[r]._visualValues[e] !== void 0 && delete l[r]._visualValues[e];
    }
  }
}
const Va = (i) => i === "reset" || i === "none", nh = (i, t) => t ? i : Object.assign({}, i), nv = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Pp(e, !0),
  values: null
};
class zn {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Na(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && ws(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, r = this.getDataset(), o = (y, v, _, k) => y === "x" ? v : y === "r" ? k : _, l = e.xAxisID = at(r.xAxisID, Ba(t, "x")), u = e.yAxisID = at(r.yAxisID, Ba(t, "y")), c = e.rAxisID = at(r.rAxisID, Ba(t, "r")), d = e.indexAxis, p = e.iAxisID = o(d, l, u, c), m = e.vAxisID = o(d, u, l, c);
    e.xScale = this.getScaleForId(l), e.yScale = this.getScaleForId(u), e.rScale = this.getScaleForId(c), e.iScale = this.getScaleForId(p), e.vScale = this.getScaleForId(m);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Nd(this._data, this), t._stacked && ws(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), r = this._data;
    if (gt(e)) {
      const o = this._cachedMeta;
      this._data = Gy(e, o);
    } else if (r !== e) {
      if (r) {
        Nd(r, this);
        const o = this._cachedMeta;
        ws(o), o._parsed = [];
      }
      e && Object.isExtensible(e) && V0(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, r = this.getDataset();
    let o = !1;
    this._dataCheck();
    const l = e._stacked;
    e._stacked = Na(e.vScale, e), e.stack !== r.stack && (o = !0, ws(e), e.stack = r.stack), this._resyncElements(t), (o || l !== e._stacked) && (eh(this, e._parsed), e._stacked = Na(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), r = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(r, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: r, _data: o } = this, { iScale: l, _stacked: u } = r, c = l.axis;
    let d = t === 0 && e === o.length ? !0 : r._sorted, p = t > 0 && r._parsed[t - 1], m, y, v;
    if (this._parsing === !1)
      r._parsed = o, r._sorted = !0, v = o;
    else {
      Lt(o[t]) ? v = this.parseArrayData(r, o, t, e) : gt(o[t]) ? v = this.parseObjectData(r, o, t, e) : v = this.parsePrimitiveData(r, o, t, e);
      const _ = () => y[c] === null || p && y[c] < p[c];
      for (m = 0; m < e; ++m)
        r._parsed[m + t] = y = v[m], d && (_() && (d = !1), p = y);
      r._sorted = d;
    }
    u && eh(this, v);
  }
  parsePrimitiveData(t, e, r, o) {
    const { iScale: l, vScale: u } = t, c = l.axis, d = u.axis, p = l.getLabels(), m = l === u, y = new Array(o);
    let v, _, k;
    for (v = 0, _ = o; v < _; ++v)
      k = v + r, y[v] = {
        [c]: m || l.parse(p[k], k),
        [d]: u.parse(e[k], k)
      };
    return y;
  }
  parseArrayData(t, e, r, o) {
    const { xScale: l, yScale: u } = t, c = new Array(o);
    let d, p, m, y;
    for (d = 0, p = o; d < p; ++d)
      m = d + r, y = e[m], c[d] = {
        x: l.parse(y[0], m),
        y: u.parse(y[1], m)
      };
    return c;
  }
  parseObjectData(t, e, r, o) {
    const { xScale: l, yScale: u } = t, { xAxisKey: c = "x", yAxisKey: d = "y" } = this._parsing, p = new Array(o);
    let m, y, v, _;
    for (m = 0, y = o; m < y; ++m)
      v = m + r, _ = e[v], p[m] = {
        x: l.parse(Ln(_, c), v),
        y: u.parse(Ln(_, d), v)
      };
    return p;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, r) {
    const o = this.chart, l = this._cachedMeta, u = e[t.axis], c = {
      keys: Pp(o, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Jd(c, u, l.index, {
      mode: r
    });
  }
  updateRangeFromParsed(t, e, r, o) {
    const l = r[e.axis];
    let u = l === null ? NaN : l;
    const c = o && r._stacks[e.axis];
    o && c && (o.values = c, u = Jd(o, l, this._cachedMeta.index)), t.min = Math.min(t.min, u), t.max = Math.max(t.max, u);
  }
  getMinMax(t, e) {
    const r = this._cachedMeta, o = r._parsed, l = r._sorted && t === r.iScale, u = o.length, c = this._getOtherScale(t), d = nv(e, r, this.chart), p = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: m, max: y } = qy(c);
    let v, _;
    function k() {
      _ = o[v];
      const S = _[c.axis];
      return !It(_[t.axis]) || m > S || y < S;
    }
    for (v = 0; v < u && !(!k() && (this.updateRangeFromParsed(p, t, _, d), l)); ++v)
      ;
    if (l) {
      for (v = u - 1; v >= 0; --v)
        if (!k()) {
          this.updateRangeFromParsed(p, t, _, d);
          break;
        }
    }
    return p;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, r = [];
    let o, l, u;
    for (o = 0, l = e.length; o < l; ++o)
      u = e[o][t.axis], It(u) && r.push(u);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, r = e.iScale, o = e.vScale, l = this.getParsed(t);
    return {
      label: r ? "" + r.getLabelForValue(l[r.axis]) : "",
      value: o ? "" + o.getLabelForValue(l[o.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Qy(at(this.options.clip, Ky(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, r = this._cachedMeta, o = r.data || [], l = e.chartArea, u = [], c = this._drawStart || 0, d = this._drawCount || o.length - c, p = this.options.drawActiveElementsOnTop;
    let m;
    for (r.dataset && r.dataset.draw(t, l, c, d), m = c; m < c + d; ++m) {
      const y = o[m];
      y.hidden || (y.active && p ? u.push(y) : y.draw(t, l));
    }
    for (m = 0; m < u.length; ++m)
      u[m].draw(t, l);
  }
  getStyle(t, e) {
    const r = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(r) : this.resolveDataElementOptions(t || 0, r);
  }
  getContext(t, e, r) {
    const o = this.getDataset();
    let l;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const u = this._cachedMeta.data[t];
      l = u.$context || (u.$context = ev(this.getContext(), t, u)), l.parsed = this.getParsed(t), l.raw = o.data[t], l.index = l.dataIndex = t;
    } else
      l = this.$context || (this.$context = tv(this.chart.getContext(), this.index)), l.dataset = o, l.index = l.datasetIndex = this.index;
    return l.active = !!e, l.mode = r, l;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", r) {
    const o = e === "active", l = this._cachedDataOpts, u = t + "-" + e, c = l[u], d = this.enableOptionSharing && Bs(r);
    if (c)
      return nh(c, d);
    const p = this.chart.config, m = p.datasetElementScopeKeys(this._type, t), y = o ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], v = p.getOptionScopes(this.getDataset(), m), _ = Object.keys(Rt.elements[t]), k = () => this.getContext(r, o, e), S = p.resolveNamedOptions(v, _, k, y);
    return S.$shared && (S.$shared = d, l[u] = Object.freeze(nh(S, d))), S;
  }
  _resolveAnimations(t, e, r) {
    const o = this.chart, l = this._cachedDataOpts, u = `animation-${e}`, c = l[u];
    if (c)
      return c;
    let d;
    if (o.options.animation !== !1) {
      const m = this.chart.config, y = m.datasetAnimationScopeKeys(this._type, e), v = m.getOptionScopes(this.getDataset(), y);
      d = m.createResolver(v, this.getContext(t, r, e));
    }
    const p = new Mp(o, d && d.animations);
    return d && d._cacheable && (l[u] = Object.freeze(p)), p;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Va(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const r = this.resolveDataElementOptions(t, e), o = this._sharedOptions, l = this.getSharedOptions(r), u = this.includeOptions(e, l) || l !== o;
    return this.updateSharedOptions(l, e, r), {
      sharedOptions: l,
      includeOptions: u
    };
  }
  updateElement(t, e, r, o) {
    Va(o) ? Object.assign(t, r) : this._resolveAnimations(e, o).update(t, r);
  }
  updateSharedOptions(t, e, r) {
    t && !Va(e) && this._resolveAnimations(void 0, e).update(t, r);
  }
  _setStyle(t, e, r, o) {
    t.active = o;
    const l = this.getStyle(e, o);
    this._resolveAnimations(e, r, o).update(t, {
      options: !o && this.getSharedOptions(l) || l
    });
  }
  removeHoverStyle(t, e, r) {
    this._setStyle(t, r, "active", !1);
  }
  setHoverStyle(t, e, r) {
    this._setStyle(t, r, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, r = this._cachedMeta.data;
    for (const [c, d, p] of this._syncList)
      this[c](d, p);
    this._syncList = [];
    const o = r.length, l = e.length, u = Math.min(l, o);
    u && this.parse(0, u), l > o ? this._insertElements(o, l - o, t) : l < o && this._removeElements(l, o - l);
  }
  _insertElements(t, e, r = !0) {
    const o = this._cachedMeta, l = o.data, u = t + e;
    let c;
    const d = (p) => {
      for (p.length += e, c = p.length - 1; c >= u; c--)
        p[c] = p[c - e];
    };
    for (d(l), c = t; c < u; ++c)
      l[c] = new this.dataElementType();
    this._parsing && d(o._parsed), this.parse(t, e), r && this.updateElements(l, t, e, "reset");
  }
  updateElements(t, e, r, o) {
  }
  _removeElements(t, e) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const o = r._parsed.splice(t, e);
      r._stacked && ws(r, o);
    }
    r.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, r, o] = t;
      this[e](r, o);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const r = arguments.length - 2;
    r && this._sync([
      "_insertElements",
      t,
      r
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
function iv(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let r = [];
    for (let o = 0, l = e.length; o < l; o++)
      r = r.concat(e[o].controller.getAllParsedValues(i));
    i._cache.$bar = op(r.sort((o, l) => o - l));
  }
  return i._cache.$bar;
}
function sv(i) {
  const t = i.iScale, e = iv(t, i.type);
  let r = t._length, o, l, u, c;
  const d = () => {
    u === 32767 || u === -32768 || (Bs(c) && (r = Math.min(r, Math.abs(u - c) || r)), c = u);
  };
  for (o = 0, l = e.length; o < l; ++o)
    u = t.getPixelForValue(e[o]), d();
  for (c = void 0, o = 0, l = t.ticks.length; o < l; ++o)
    u = t.getPixelForTick(o), d();
  return r;
}
function rv(i, t, e, r) {
  const o = e.barThickness;
  let l, u;
  return pt(o) ? (l = t.min * e.categoryPercentage, u = e.barPercentage) : (l = o * r, u = 1), {
    chunk: l / r,
    ratio: u,
    start: t.pixels[i] - l / 2
  };
}
function ov(i, t, e, r) {
  const o = t.pixels, l = o[i];
  let u = i > 0 ? o[i - 1] : null, c = i < o.length - 1 ? o[i + 1] : null;
  const d = e.categoryPercentage;
  u === null && (u = l - (c === null ? t.end - t.start : c - l)), c === null && (c = l + l - u);
  const p = l - (l - Math.min(u, c)) / 2 * d;
  return {
    chunk: Math.abs(c - u) / 2 * d / r,
    ratio: e.barPercentage,
    start: p
  };
}
function lv(i, t, e, r) {
  const o = e.parse(i[0], r), l = e.parse(i[1], r), u = Math.min(o, l), c = Math.max(o, l);
  let d = u, p = c;
  Math.abs(u) > Math.abs(c) && (d = c, p = u), t[e.axis] = p, t._custom = {
    barStart: d,
    barEnd: p,
    start: o,
    end: l,
    min: u,
    max: c
  };
}
function Ep(i, t, e, r) {
  return Lt(i) ? lv(i, t, e, r) : t[e.axis] = e.parse(i, r), t;
}
function ih(i, t, e, r) {
  const o = i.iScale, l = i.vScale, u = o.getLabels(), c = o === l, d = [];
  let p, m, y, v;
  for (p = e, m = e + r; p < m; ++p)
    v = t[p], y = {}, y[o.axis] = c || o.parse(u[p], p), d.push(Ep(v, y, l, p));
  return d;
}
function ja(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function av(i, t, e) {
  return i !== 0 ? Ue(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function uv(i) {
  let t, e, r, o, l;
  return i.horizontal ? (t = i.base > i.x, e = "left", r = "right") : (t = i.base < i.y, e = "bottom", r = "top"), t ? (o = "end", l = "start") : (o = "start", l = "end"), {
    start: e,
    end: r,
    reverse: t,
    top: o,
    bottom: l
  };
}
function cv(i, t, e, r) {
  let o = t.borderSkipped;
  const l = {};
  if (!o) {
    i.borderSkipped = l;
    return;
  }
  if (o === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: u, end: c, reverse: d, top: p, bottom: m } = uv(i);
  o === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === r ? o = p : (e._bottom || 0) === r ? o = m : (l[sh(m, u, c, d)] = !0, o = p)), l[sh(o, u, c, d)] = !0, i.borderSkipped = l;
}
function sh(i, t, e, r) {
  return r ? (i = fv(i, t, e), i = rh(i, e, t)) : i = rh(i, t, e), i;
}
function fv(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function rh(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function dv(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class hv extends zn {
  static id = "bar";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "base",
          "width",
          "height"
        ]
      }
    }
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: !0,
        grid: {
          offset: !0
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: !0
      }
    }
  };
  parsePrimitiveData(t, e, r, o) {
    return ih(t, e, r, o);
  }
  parseArrayData(t, e, r, o) {
    return ih(t, e, r, o);
  }
  parseObjectData(t, e, r, o) {
    const { iScale: l, vScale: u } = t, { xAxisKey: c = "x", yAxisKey: d = "y" } = this._parsing, p = l.axis === "x" ? c : d, m = u.axis === "x" ? c : d, y = [];
    let v, _, k, S;
    for (v = r, _ = r + o; v < _; ++v)
      S = e[v], k = {}, k[l.axis] = l.parse(Ln(S, p), v), y.push(Ep(Ln(S, m), k, u, v));
    return y;
  }
  updateRangeFromParsed(t, e, r, o) {
    super.updateRangeFromParsed(t, e, r, o);
    const l = r._custom;
    l && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, l.min), t.max = Math.max(t.max, l.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: r, vScale: o } = e, l = this.getParsed(t), u = l._custom, c = ja(u) ? "[" + u.start + ", " + u.end + "]" : "" + o.getLabelForValue(l[o.axis]);
    return {
      label: "" + r.getLabelForValue(l[r.axis]),
      value: c
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", { index: u, _cachedMeta: { vScale: c } } = this, d = c.getBasePixel(), p = c.isHorizontal(), m = this._getRuler(), { sharedOptions: y, includeOptions: v } = this._getSharedOptions(e, o);
    for (let _ = e; _ < e + r; _++) {
      const k = this.getParsed(_), S = l || pt(k[c.axis]) ? {
        base: d,
        head: d
      } : this._calculateBarValuePixels(_), b = this._calculateBarIndexPixels(_, m), E = (k._stacks || {})[c.axis], L = {
        horizontal: p,
        base: S.base,
        enableBorderRadius: !E || ja(k._custom) || u === E._top || u === E._bottom,
        x: p ? S.head : b.center,
        y: p ? b.center : S.head,
        height: p ? b.size : Math.abs(S.size),
        width: p ? Math.abs(S.size) : b.size
      };
      v && (L.options = y || this.resolveDataElementOptions(_, t[_].active ? "active" : o));
      const z = L.options || t[_].options;
      cv(L, z, E, u), dv(L, z, m.ratio), this.updateElement(t[_], _, L, o);
    }
  }
  _getStacks(t, e) {
    const { iScale: r } = this._cachedMeta, o = r.getMatchingVisibleMetas(this._type).filter((m) => m.controller.options.grouped), l = r.options.stacked, u = [], c = this._cachedMeta.controller.getParsed(e), d = c && c[r.axis], p = (m) => {
      const y = m._parsed.find((_) => _[r.axis] === d), v = y && y[m.vScale.axis];
      if (pt(v) || isNaN(v))
        return !0;
    };
    for (const m of o)
      if (!(e !== void 0 && p(m)) && ((l === !1 || u.indexOf(m.stack) === -1 || l === void 0 && m.stack === void 0) && u.push(m.stack), m.index === t))
        break;
    return u.length || u.push(void 0), u;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales, e = this.chart.options.indexAxis;
    return Object.keys(t).filter((r) => t[r].axis === e).shift();
  }
  _getAxis() {
    const t = {}, e = this.getFirstScaleIdForIndexAxis();
    for (const r of this.chart.data.datasets)
      t[at(this.chart.options.indexAxis === "x" ? r.xAxisID : r.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, r) {
    const o = this._getStacks(t, r), l = e !== void 0 ? o.indexOf(e) : -1;
    return l === -1 ? o.length - 1 : l;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, r = e.iScale, o = [];
    let l, u;
    for (l = 0, u = e.data.length; l < u; ++l)
      o.push(r.getPixelForValue(this.getParsed(l)[r.axis], l));
    const c = t.barThickness;
    return {
      min: c || sv(e),
      pixels: o,
      start: r._startPixel,
      end: r._endPixel,
      stackCount: this._getStackCount(),
      scale: r,
      grouped: t.grouped,
      ratio: c ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: r, index: o }, options: { base: l, minBarLength: u } } = this, c = l || 0, d = this.getParsed(t), p = d._custom, m = ja(p);
    let y = d[e.axis], v = 0, _ = r ? this.applyStack(e, d, r) : y, k, S;
    _ !== y && (v = _ - y, _ = y), m && (y = p.barStart, _ = p.barEnd - p.barStart, y !== 0 && Ue(y) !== Ue(p.barEnd) && (v = 0), v += y);
    const b = !pt(l) && !m ? l : v;
    let E = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? k = e.getPixelForValue(v + _) : k = E, S = k - E, Math.abs(S) < u) {
      S = av(S, e, c) * u, y === c && (E -= S / 2);
      const L = e.getPixelForDecimal(0), z = e.getPixelForDecimal(1), A = Math.min(L, z), R = Math.max(L, z);
      E = Math.max(Math.min(E, R), A), k = E + S, r && !m && (d._stacks[e.axis]._visualValues[o] = e.getValueForPixel(k) - e.getValueForPixel(E));
    }
    if (E === e.getPixelForValue(c)) {
      const L = Ue(S) * e.getLineWidthForValue(c) / 2;
      E += L, S -= L;
    }
    return {
      size: S,
      base: E,
      head: k,
      center: k + S / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const r = e.scale, o = this.options, l = o.skipNull, u = at(o.maxBarThickness, 1 / 0);
    let c, d;
    const p = this._getAxisCount();
    if (e.grouped) {
      const m = l ? this._getStackCount(t) : e.stackCount, y = o.barThickness === "flex" ? ov(t, e, o, m * p) : rv(t, e, o, m * p), v = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, _ = this._getAxis().indexOf(at(v, this.getFirstScaleIdForIndexAxis())), k = this._getStackIndex(this.index, this._cachedMeta.stack, l ? t : void 0) + _;
      c = y.start + y.chunk * k + y.chunk / 2, d = Math.min(u, y.chunk * y.ratio);
    } else
      c = r.getPixelForValue(this.getParsed(t)[r.axis], t), d = Math.min(u, e.min * e.ratio);
    return {
      base: c - d / 2,
      head: c + d / 2,
      center: c,
      size: d
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, r = t.data, o = r.length;
    let l = 0;
    for (; l < o; ++l)
      this.getParsed(l)[e.axis] !== null && !r[l].hidden && r[l].draw(this._ctx);
  }
}
class pv extends zn {
  static id = "bubble";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "borderWidth",
          "radius"
        ]
      }
    }
  };
  static overrides = {
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, r, o) {
    const l = super.parsePrimitiveData(t, e, r, o);
    for (let u = 0; u < l.length; u++)
      l[u]._custom = this.resolveDataElementOptions(u + r).radius;
    return l;
  }
  parseArrayData(t, e, r, o) {
    const l = super.parseArrayData(t, e, r, o);
    for (let u = 0; u < l.length; u++) {
      const c = e[r + u];
      l[u]._custom = at(c[2], this.resolveDataElementOptions(u + r).radius);
    }
    return l;
  }
  parseObjectData(t, e, r, o) {
    const l = super.parseObjectData(t, e, r, o);
    for (let u = 0; u < l.length; u++) {
      const c = e[r + u];
      l[u]._custom = at(c && c.r && +c.r, this.resolveDataElementOptions(u + r).radius);
    }
    return l;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let r = t.length - 1; r >= 0; --r)
      e = Math.max(e, t[r].size(this.resolveDataElementOptions(r)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, r = this.chart.data.labels || [], { xScale: o, yScale: l } = e, u = this.getParsed(t), c = o.getLabelForValue(u.x), d = l.getLabelForValue(u.y), p = u._custom;
    return {
      label: r[t] || "",
      value: "(" + c + ", " + d + (p ? ", " + p : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", { iScale: u, vScale: c } = this._cachedMeta, { sharedOptions: d, includeOptions: p } = this._getSharedOptions(e, o), m = u.axis, y = c.axis;
    for (let v = e; v < e + r; v++) {
      const _ = t[v], k = !l && this.getParsed(v), S = {}, b = S[m] = l ? u.getPixelForDecimal(0.5) : u.getPixelForValue(k[m]), E = S[y] = l ? c.getBasePixel() : c.getPixelForValue(k[y]);
      S.skip = isNaN(b) || isNaN(E), p && (S.options = d || this.resolveDataElementOptions(v, _.active ? "active" : o), l && (S.options.radius = 0)), this.updateElement(_, v, S, o);
    }
  }
  resolveDataElementOptions(t, e) {
    const r = this.getParsed(t);
    let o = super.resolveDataElementOptions(t, e);
    o.$shared && (o = Object.assign({}, o, {
      $shared: !1
    }));
    const l = o.radius;
    return e !== "active" && (o.radius = 0), o.radius += at(r && r._custom, l), o;
  }
}
function gv(i, t, e) {
  let r = 1, o = 1, l = 0, u = 0;
  if (t < Dt) {
    const c = i, d = c + t, p = Math.cos(c), m = Math.sin(c), y = Math.cos(d), v = Math.sin(d), _ = (z, A, R) => Vs(z, c, d, !0) ? 1 : Math.max(A, A * e, R, R * e), k = (z, A, R) => Vs(z, c, d, !0) ? -1 : Math.min(A, A * e, R, R * e), S = _(0, p, y), b = _(Vt, m, v), E = k(vt, p, y), L = k(vt + Vt, m, v);
    r = (S - E) / 2, o = (b - L) / 2, l = -(S + E) / 2, u = -(b + L) / 2;
  }
  return {
    ratioX: r,
    ratioY: o,
    offsetX: l,
    offsetY: u
  };
}
class Su extends zn {
  static id = "doughnut";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing"
        ]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  static descriptors = {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data, { labels: { pointStyle: r, textAlign: o, color: l, useBorderRadius: u, borderRadius: c } } = t.legend.options;
            return e.labels.length && e.datasets.length ? e.labels.map((d, p) => {
              const y = t.getDatasetMeta(0).controller.getStyle(p);
              return {
                text: d,
                fillStyle: y.backgroundColor,
                fontColor: l,
                hidden: !t.getDataVisibility(p),
                lineDash: y.borderDash,
                lineDashOffset: y.borderDashOffset,
                lineJoin: y.borderJoinStyle,
                lineWidth: y.borderWidth,
                strokeStyle: y.borderColor,
                textAlign: o,
                pointStyle: r,
                borderRadius: u && (c || y.borderRadius),
                index: p
              };
            }) : [];
          }
        },
        onClick(t, e, r) {
          r.chart.toggleDataVisibility(e.index), r.chart.update();
        }
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const r = this.getDataset().data, o = this._cachedMeta;
    if (this._parsing === !1)
      o._parsed = r;
    else {
      let l = (d) => +r[d];
      if (gt(r[t])) {
        const { key: d = "value" } = this._parsing;
        l = (p) => +Ln(r[p], d);
      }
      let u, c;
      for (u = t, c = t + e; u < c; ++u)
        o._parsed[u] = l(u);
    }
  }
  _getRotation() {
    return Fe(this.options.rotation - 90);
  }
  _getCircumference() {
    return Fe(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Dt, e = -Dt;
    for (let r = 0; r < this.chart.data.datasets.length; ++r)
      if (this.chart.isDatasetVisible(r) && this.chart.getDatasetMeta(r).type === this._type) {
        const o = this.chart.getDatasetMeta(r).controller, l = o._getRotation(), u = o._getCircumference();
        t = Math.min(t, l), e = Math.max(e, l + u);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: r } = e, o = this._cachedMeta, l = o.data, u = this.getMaxBorderWidth() + this.getMaxOffset(l) + this.options.spacing, c = Math.max((Math.min(r.width, r.height) - u) / 2, 0), d = Math.min(C0(this.options.cutout, c), 1), p = this._getRingWeight(this.index), { circumference: m, rotation: y } = this._getRotationExtents(), { ratioX: v, ratioY: _, offsetX: k, offsetY: S } = gv(y, m, d), b = (r.width - u) / v, E = (r.height - u) / _, L = Math.max(Math.min(b, E) / 2, 0), z = ep(this.options.radius, L), A = Math.max(z * d, 0), R = (z - A) / this._getVisibleDatasetWeightTotal();
    this.offsetX = k * z, this.offsetY = S * z, o.total = this.calculateTotal(), this.outerRadius = z - R * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - R * p, 0), this.updateElements(l, 0, l.length, t);
  }
  _circumference(t, e) {
    const r = this.options, o = this._cachedMeta, l = this._getCircumference();
    return e && r.animation.animateRotate || !this.chart.getDataVisibility(t) || o._parsed[t] === null || o.data[t].hidden ? 0 : this.calculateCircumference(o._parsed[t] * l / Dt);
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", u = this.chart, c = u.chartArea, p = u.options.animation, m = (c.left + c.right) / 2, y = (c.top + c.bottom) / 2, v = l && p.animateScale, _ = v ? 0 : this.innerRadius, k = v ? 0 : this.outerRadius, { sharedOptions: S, includeOptions: b } = this._getSharedOptions(e, o);
    let E = this._getRotation(), L;
    for (L = 0; L < e; ++L)
      E += this._circumference(L, l);
    for (L = e; L < e + r; ++L) {
      const z = this._circumference(L, l), A = t[L], R = {
        x: m + this.offsetX,
        y: y + this.offsetY,
        startAngle: E,
        endAngle: E + z,
        circumference: z,
        outerRadius: k,
        innerRadius: _
      };
      b && (R.options = S || this.resolveDataElementOptions(L, A.active ? "active" : o)), E += z, this.updateElement(A, L, R, o);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let r = 0, o;
    for (o = 0; o < e.length; o++) {
      const l = t._parsed[o];
      l !== null && !isNaN(l) && this.chart.getDataVisibility(o) && !e[o].hidden && (r += Math.abs(l));
    }
    return r;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? Dt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, r = this.chart, o = r.data.labels || [], l = $s(e._parsed[t], r.options.locale);
    return {
      label: o[t] || "",
      value: l
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const r = this.chart;
    let o, l, u, c, d;
    if (!t) {
      for (o = 0, l = r.data.datasets.length; o < l; ++o)
        if (r.isDatasetVisible(o)) {
          u = r.getDatasetMeta(o), t = u.data, c = u.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (o = 0, l = t.length; o < l; ++o)
      d = c.resolveDataElementOptions(o), d.borderAlign !== "inner" && (e = Math.max(e, d.borderWidth || 0, d.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let r = 0, o = t.length; r < o; ++r) {
      const l = this.resolveDataElementOptions(r);
      e = Math.max(e, l.offset || 0, l.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let r = 0; r < t; ++r)
      this.chart.isDatasetVisible(r) && (e += this._getRingWeight(r));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(at(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class mv extends zn {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: r, data: o = [], _dataset: l } = e, u = this.chart._animationsDisabled;
    let { start: c, count: d } = up(e, o, u);
    this._drawStart = c, this._drawCount = d, cp(e) && (c = 0, d = o.length), r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = o;
    const p = this.resolveDatasetElementOptions(t);
    this.options.showLine || (p.borderWidth = 0), p.segment = this.options.segment, this.updateElement(r, void 0, {
      animated: !u,
      options: p
    }, t), this.updateElements(o, c, d, t);
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", { iScale: u, vScale: c, _stacked: d, _dataset: p } = this._cachedMeta, { sharedOptions: m, includeOptions: y } = this._getSharedOptions(e, o), v = u.axis, _ = c.axis, { spanGaps: k, segment: S } = this.options, b = Ai(k) ? k : Number.POSITIVE_INFINITY, E = this.chart._animationsDisabled || l || o === "none", L = e + r, z = t.length;
    let A = e > 0 && this.getParsed(e - 1);
    for (let R = 0; R < z; ++R) {
      const V = t[R], j = E ? V : {};
      if (R < e || R >= L) {
        j.skip = !0;
        continue;
      }
      const H = this.getParsed(R), Z = pt(H[_]), et = j[v] = u.getPixelForValue(H[v], R), nt = j[_] = l || Z ? c.getBasePixel() : c.getPixelForValue(d ? this.applyStack(c, H, d) : H[_], R);
      j.skip = isNaN(et) || isNaN(nt) || Z, j.stop = R > 0 && Math.abs(H[v] - A[v]) > b, S && (j.parsed = H, j.raw = p.data[R]), y && (j.options = m || this.resolveDataElementOptions(R, V.active ? "active" : o)), E || this.updateElement(V, R, j, o), A = H;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, r = e.options && e.options.borderWidth || 0, o = t.data || [];
    if (!o.length)
      return r;
    const l = o[0].size(this.resolveDataElementOptions(0)), u = o[o.length - 1].size(this.resolveDataElementOptions(o.length - 1));
    return Math.max(r, l, u) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
class Dp extends zn {
  static id = "polarArea";
  static defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius"
        ]
      }
    },
    indexAxis: "r",
    startAngle: 0
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const { labels: { pointStyle: r, color: o } } = t.legend.options;
              return e.labels.map((l, u) => {
                const d = t.getDatasetMeta(0).controller.getStyle(u);
                return {
                  text: l,
                  fillStyle: d.backgroundColor,
                  strokeStyle: d.borderColor,
                  fontColor: o,
                  lineWidth: d.borderWidth,
                  pointStyle: r,
                  hidden: !t.getDataVisibility(u),
                  index: u
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, r) {
          r.chart.toggleDataVisibility(e.index), r.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, r = this.chart, o = r.data.labels || [], l = $s(e._parsed[t].r, r.options.locale);
    return {
      label: o[t] || "",
      value: l
    };
  }
  parseObjectData(t, e, r, o) {
    return vp.bind(this)(t, e, r, o);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((r, o) => {
      const l = this.getParsed(o).r;
      !isNaN(l) && this.chart.getDataVisibility(o) && (l < e.min && (e.min = l), l > e.max && (e.max = l));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, r = t.options, o = Math.min(e.right - e.left, e.bottom - e.top), l = Math.max(o / 2, 0), u = Math.max(r.cutoutPercentage ? l / 100 * r.cutoutPercentage : 1, 0), c = (l - u) / t.getVisibleDatasetCount();
    this.outerRadius = l - c * this.index, this.innerRadius = this.outerRadius - c;
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", u = this.chart, d = u.options.animation, p = this._cachedMeta.rScale, m = p.xCenter, y = p.yCenter, v = p.getIndexAngle(0) - 0.5 * vt;
    let _ = v, k;
    const S = 360 / this.countVisibleElements();
    for (k = 0; k < e; ++k)
      _ += this._computeAngle(k, o, S);
    for (k = e; k < e + r; k++) {
      const b = t[k];
      let E = _, L = _ + this._computeAngle(k, o, S), z = u.getDataVisibility(k) ? p.getDistanceFromCenterForValue(this.getParsed(k).r) : 0;
      _ = L, l && (d.animateScale && (z = 0), d.animateRotate && (E = L = v));
      const A = {
        x: m,
        y,
        innerRadius: 0,
        outerRadius: z,
        startAngle: E,
        endAngle: L,
        options: this.resolveDataElementOptions(k, b.active ? "active" : o)
      };
      this.updateElement(b, k, A, o);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((r, o) => {
      !isNaN(this.getParsed(o).r) && this.chart.getDataVisibility(o) && e++;
    }), e;
  }
  _computeAngle(t, e, r) {
    return this.chart.getDataVisibility(t) ? Fe(this.resolveDataElementOptions(t, e).angle || r) : 0;
  }
}
class yv extends Su {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class vv extends zn {
  static id = "radar";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
      line: {
        fill: "start"
      }
    }
  };
  static overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, r = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(r[e.axis])
    };
  }
  parseObjectData(t, e, r, o) {
    return vp.bind(this)(t, e, r, o);
  }
  update(t) {
    const e = this._cachedMeta, r = e.dataset, o = e.data || [], l = e.iScale.getLabels();
    if (r.points = o, t !== "resize") {
      const u = this.resolveDatasetElementOptions(t);
      this.options.showLine || (u.borderWidth = 0);
      const c = {
        _loop: !0,
        _fullLoop: l.length === o.length,
        options: u
      };
      this.updateElement(r, void 0, c, t);
    }
    this.updateElements(o, 0, o.length, t);
  }
  updateElements(t, e, r, o) {
    const l = this._cachedMeta.rScale, u = o === "reset";
    for (let c = e; c < e + r; c++) {
      const d = t[c], p = this.resolveDataElementOptions(c, d.active ? "active" : o), m = l.getPointPositionForValue(c, this.getParsed(c).r), y = u ? l.xCenter : m.x, v = u ? l.yCenter : m.y, _ = {
        x: y,
        y: v,
        angle: m.angle,
        skip: isNaN(y) || isNaN(v),
        options: p
      };
      this.updateElement(d, c, _, o);
    }
  }
}
class xv extends zn {
  static id = "scatter";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1
  };
  static overrides = {
    interaction: {
      mode: "point"
    },
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  getLabelAndValue(t) {
    const e = this._cachedMeta, r = this.chart.data.labels || [], { xScale: o, yScale: l } = e, u = this.getParsed(t), c = o.getLabelForValue(u.x), d = l.getLabelForValue(u.y);
    return {
      label: r[t] || "",
      value: "(" + c + ", " + d + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: r = [] } = e, o = this.chart._animationsDisabled;
    let { start: l, count: u } = up(e, r, o);
    if (this._drawStart = l, this._drawCount = u, cp(e) && (l = 0, u = r.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: c, _dataset: d } = e;
      c._chart = this.chart, c._datasetIndex = this.index, c._decimated = !!d._decimated, c.points = r;
      const p = this.resolveDatasetElementOptions(t);
      p.segment = this.options.segment, this.updateElement(c, void 0, {
        animated: !o,
        options: p
      }, t);
    } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
    this.updateElements(r, l, u, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, e, r, o) {
    const l = o === "reset", { iScale: u, vScale: c, _stacked: d, _dataset: p } = this._cachedMeta, m = this.resolveDataElementOptions(e, o), y = this.getSharedOptions(m), v = this.includeOptions(o, y), _ = u.axis, k = c.axis, { spanGaps: S, segment: b } = this.options, E = Ai(S) ? S : Number.POSITIVE_INFINITY, L = this.chart._animationsDisabled || l || o === "none";
    let z = e > 0 && this.getParsed(e - 1);
    for (let A = e; A < e + r; ++A) {
      const R = t[A], V = this.getParsed(A), j = L ? R : {}, H = pt(V[k]), Z = j[_] = u.getPixelForValue(V[_], A), et = j[k] = l || H ? c.getBasePixel() : c.getPixelForValue(d ? this.applyStack(c, V, d) : V[k], A);
      j.skip = isNaN(Z) || isNaN(et) || H, j.stop = A > 0 && Math.abs(V[_] - z[_]) > E, b && (j.parsed = V, j.raw = p.data[A]), v && (j.options = y || this.resolveDataElementOptions(A, R.active ? "active" : o)), L || this.updateElement(R, A, j, o), z = V;
    }
    this.updateSharedOptions(y, o, m);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let c = 0;
      for (let d = e.length - 1; d >= 0; --d)
        c = Math.max(c, e[d].size(this.resolveDataElementOptions(d)) / 2);
      return c > 0 && c;
    }
    const r = t.dataset, o = r.options && r.options.borderWidth || 0;
    if (!e.length)
      return o;
    const l = e[0].size(this.resolveDataElementOptions(0)), u = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(o, l, u) / 2;
  }
}
var _v = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: hv,
  BubbleController: pv,
  DoughnutController: Su,
  LineController: mv,
  PieController: yv,
  PolarAreaController: Dp,
  RadarController: vv,
  ScatterController: xv
});
function Zn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class ku {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(ku.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Zn();
  }
  parse() {
    return Zn();
  }
  format() {
    return Zn();
  }
  add() {
    return Zn();
  }
  diff() {
    return Zn();
  }
  startOf() {
    return Zn();
  }
  endOf() {
    return Zn();
  }
}
var Sv = {
  _date: ku
};
function kv(i, t, e, r) {
  const { controller: o, data: l, _sorted: u } = i, c = o._cachedMeta.iScale, d = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (c && t === c.axis && t !== "r" && u && l.length) {
    const p = c._reversePixels ? N0 : rn;
    if (r) {
      if (o._sharedOptions) {
        const m = l[0], y = typeof m.getRange == "function" && m.getRange(t);
        if (y) {
          const v = p(l, t, e - y), _ = p(l, t, e + y);
          return {
            lo: v.lo,
            hi: _.hi
          };
        }
      }
    } else {
      const m = p(l, t, e);
      if (d) {
        const { vScale: y } = o._cachedMeta, { _parsed: v } = i, _ = v.slice(0, m.lo + 1).reverse().findIndex((S) => !pt(S[y.axis]));
        m.lo -= Math.max(0, _);
        const k = v.slice(m.hi).findIndex((S) => !pt(S[y.axis]));
        m.hi += Math.max(0, k);
      }
      return m;
    }
  }
  return {
    lo: 0,
    hi: l.length - 1
  };
}
function Ro(i, t, e, r, o) {
  const l = i.getSortedVisibleDatasetMetas(), u = e[t];
  for (let c = 0, d = l.length; c < d; ++c) {
    const { index: p, data: m } = l[c], { lo: y, hi: v } = kv(l[c], t, u, o);
    for (let _ = y; _ <= v; ++_) {
      const k = m[_];
      k.skip || r(k, p, _);
    }
  }
}
function wv(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(r, o) {
    const l = t ? Math.abs(r.x - o.x) : 0, u = e ? Math.abs(r.y - o.y) : 0;
    return Math.sqrt(Math.pow(l, 2) + Math.pow(u, 2));
  };
}
function Wa(i, t, e, r, o) {
  const l = [];
  return !o && !i.isPointInArea(t) || Ro(i, e, t, function(c, d, p) {
    !o && !on(c, i.chartArea, 0) || c.inRange(t.x, t.y, r) && l.push({
      element: c,
      datasetIndex: d,
      index: p
    });
  }, !0), l;
}
function bv(i, t, e, r) {
  let o = [];
  function l(u, c, d) {
    const { startAngle: p, endAngle: m } = u.getProps([
      "startAngle",
      "endAngle"
    ], r), { angle: y } = sp(u, {
      x: t.x,
      y: t.y
    });
    Vs(y, p, m) && o.push({
      element: u,
      datasetIndex: c,
      index: d
    });
  }
  return Ro(i, e, t, l), o;
}
function Cv(i, t, e, r, o, l) {
  let u = [];
  const c = wv(e);
  let d = Number.POSITIVE_INFINITY;
  function p(m, y, v) {
    const _ = m.inRange(t.x, t.y, o);
    if (r && !_)
      return;
    const k = m.getCenterPoint(o);
    if (!(!!l || i.isPointInArea(k)) && !_)
      return;
    const b = c(t, k);
    b < d ? (u = [
      {
        element: m,
        datasetIndex: y,
        index: v
      }
    ], d = b) : b === d && u.push({
      element: m,
      datasetIndex: y,
      index: v
    });
  }
  return Ro(i, e, t, p), u;
}
function Ha(i, t, e, r, o, l) {
  return !l && !i.isPointInArea(t) ? [] : e === "r" && !r ? bv(i, t, e, o) : Cv(i, t, e, r, o, l);
}
function oh(i, t, e, r, o) {
  const l = [], u = e === "x" ? "inXRange" : "inYRange";
  let c = !1;
  return Ro(i, e, t, (d, p, m) => {
    d[u] && d[u](t[e], o) && (l.push({
      element: d,
      datasetIndex: p,
      index: m
    }), c = c || d.inRange(t.x, t.y, o));
  }), r && !c ? [] : l;
}
var Mv = {
  modes: {
    index(i, t, e, r) {
      const o = Jn(t, i), l = e.axis || "x", u = e.includeInvisible || !1, c = e.intersect ? Wa(i, o, l, r, u) : Ha(i, o, l, !1, r, u), d = [];
      return c.length ? (i.getSortedVisibleDatasetMetas().forEach((p) => {
        const m = c[0].index, y = p.data[m];
        y && !y.skip && d.push({
          element: y,
          datasetIndex: p.index,
          index: m
        });
      }), d) : [];
    },
    dataset(i, t, e, r) {
      const o = Jn(t, i), l = e.axis || "xy", u = e.includeInvisible || !1;
      let c = e.intersect ? Wa(i, o, l, r, u) : Ha(i, o, l, !1, r, u);
      if (c.length > 0) {
        const d = c[0].datasetIndex, p = i.getDatasetMeta(d).data;
        c = [];
        for (let m = 0; m < p.length; ++m)
          c.push({
            element: p[m],
            datasetIndex: d,
            index: m
          });
      }
      return c;
    },
    point(i, t, e, r) {
      const o = Jn(t, i), l = e.axis || "xy", u = e.includeInvisible || !1;
      return Wa(i, o, l, r, u);
    },
    nearest(i, t, e, r) {
      const o = Jn(t, i), l = e.axis || "xy", u = e.includeInvisible || !1;
      return Ha(i, o, l, e.intersect, r, u);
    },
    x(i, t, e, r) {
      const o = Jn(t, i);
      return oh(i, o, "x", e.intersect, r);
    },
    y(i, t, e, r) {
      const o = Jn(t, i);
      return oh(i, o, "y", e.intersect, r);
    }
  }
};
const Tp = [
  "left",
  "top",
  "right",
  "bottom"
];
function bs(i, t) {
  return i.filter((e) => e.pos === t);
}
function lh(i, t) {
  return i.filter((e) => Tp.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Cs(i, t) {
  return i.sort((e, r) => {
    const o = t ? r : e, l = t ? e : r;
    return o.weight === l.weight ? o.index - l.index : o.weight - l.weight;
  });
}
function Pv(i) {
  const t = [];
  let e, r, o, l, u, c;
  for (e = 0, r = (i || []).length; e < r; ++e)
    o = i[e], { position: l, options: { stack: u, stackWeight: c = 1 } } = o, t.push({
      index: e,
      box: o,
      pos: l,
      horizontal: o.isHorizontal(),
      weight: o.weight,
      stack: u && l + u,
      stackWeight: c
    });
  return t;
}
function Ev(i) {
  const t = {};
  for (const e of i) {
    const { stack: r, pos: o, stackWeight: l } = e;
    if (!r || !Tp.includes(o))
      continue;
    const u = t[r] || (t[r] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    u.count++, u.weight += l;
  }
  return t;
}
function Dv(i, t) {
  const e = Ev(i), { vBoxMaxWidth: r, hBoxMaxHeight: o } = t;
  let l, u, c;
  for (l = 0, u = i.length; l < u; ++l) {
    c = i[l];
    const { fullSize: d } = c.box, p = e[c.stack], m = p && c.stackWeight / p.weight;
    c.horizontal ? (c.width = m ? m * r : d && t.availableWidth, c.height = o) : (c.width = r, c.height = m ? m * o : d && t.availableHeight);
  }
  return e;
}
function Tv(i) {
  const t = Pv(i), e = Cs(t.filter((p) => p.box.fullSize), !0), r = Cs(bs(t, "left"), !0), o = Cs(bs(t, "right")), l = Cs(bs(t, "top"), !0), u = Cs(bs(t, "bottom")), c = lh(t, "x"), d = lh(t, "y");
  return {
    fullSize: e,
    leftAndTop: r.concat(l),
    rightAndBottom: o.concat(d).concat(u).concat(c),
    chartArea: bs(t, "chartArea"),
    vertical: r.concat(o).concat(d),
    horizontal: l.concat(u).concat(c)
  };
}
function ah(i, t, e, r) {
  return Math.max(i[e], t[e]) + Math.max(i[r], t[r]);
}
function Op(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Ov(i, t, e, r) {
  const { pos: o, box: l } = e, u = i.maxPadding;
  if (!gt(o)) {
    e.size && (i[o] -= e.size);
    const y = r[e.stack] || {
      size: 0,
      count: 1
    };
    y.size = Math.max(y.size, e.horizontal ? l.height : l.width), e.size = y.size / y.count, i[o] += e.size;
  }
  l.getPadding && Op(u, l.getPadding());
  const c = Math.max(0, t.outerWidth - ah(u, i, "left", "right")), d = Math.max(0, t.outerHeight - ah(u, i, "top", "bottom")), p = c !== i.w, m = d !== i.h;
  return i.w = c, i.h = d, e.horizontal ? {
    same: p,
    other: m
  } : {
    same: m,
    other: p
  };
}
function Lv(i) {
  const t = i.maxPadding;
  function e(r) {
    const o = Math.max(t[r] - i[r], 0);
    return i[r] += o, o;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Rv(i, t) {
  const e = t.maxPadding;
  function r(o) {
    const l = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return o.forEach((u) => {
      l[u] = Math.max(t[u], e[u]);
    }), l;
  }
  return r(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ts(i, t, e, r) {
  const o = [];
  let l, u, c, d, p, m;
  for (l = 0, u = i.length, p = 0; l < u; ++l) {
    c = i[l], d = c.box, d.update(c.width || t.w, c.height || t.h, Rv(c.horizontal, t));
    const { same: y, other: v } = Ov(t, e, c, r);
    p |= y && o.length, m = m || v, d.fullSize || o.push(c);
  }
  return p && Ts(o, t, e, r) || m;
}
function uo(i, t, e, r, o) {
  i.top = e, i.left = t, i.right = t + r, i.bottom = e + o, i.width = r, i.height = o;
}
function uh(i, t, e, r) {
  const o = e.padding;
  let { x: l, y: u } = t;
  for (const c of i) {
    const d = c.box, p = r[c.stack] || {
      placed: 0,
      weight: 1
    }, m = c.stackWeight / p.weight || 1;
    if (c.horizontal) {
      const y = t.w * m, v = p.size || d.height;
      Bs(p.start) && (u = p.start), d.fullSize ? uo(d, o.left, u, e.outerWidth - o.right - o.left, v) : uo(d, t.left + p.placed, u, y, v), p.start = u, p.placed += y, u = d.bottom;
    } else {
      const y = t.h * m, v = p.size || d.width;
      Bs(p.start) && (l = p.start), d.fullSize ? uo(d, l, o.top, v, e.outerHeight - o.bottom - o.top) : uo(d, l, t.top + p.placed, v, y), p.start = l, p.placed += y, l = d.right;
    }
  }
  t.x = l, t.y = u;
}
var ie = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, r) {
    if (!i)
      return;
    const o = se(i.options.layout.padding), l = Math.max(t - o.width, 0), u = Math.max(e - o.height, 0), c = Tv(i.boxes), d = c.vertical, p = c.horizontal;
    kt(i.boxes, (S) => {
      typeof S.beforeLayout == "function" && S.beforeLayout();
    });
    const m = d.reduce((S, b) => b.box.options && b.box.options.display === !1 ? S : S + 1, 0) || 1, y = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: o,
      availableWidth: l,
      availableHeight: u,
      vBoxMaxWidth: l / 2 / m,
      hBoxMaxHeight: u / 2
    }), v = Object.assign({}, o);
    Op(v, se(r));
    const _ = Object.assign({
      maxPadding: v,
      w: l,
      h: u,
      x: o.left,
      y: o.top
    }, o), k = Dv(d.concat(p), y);
    Ts(c.fullSize, _, y, k), Ts(d, _, y, k), Ts(p, _, y, k) && Ts(d, _, y, k), Lv(_), uh(c.leftAndTop, _, y, k), _.x += _.w, _.y += _.h, uh(c.rightAndBottom, _, y, k), i.chartArea = {
      left: _.left,
      top: _.top,
      right: _.left + _.w,
      bottom: _.top + _.h,
      height: _.h,
      width: _.w
    }, kt(c.chartArea, (S) => {
      const b = S.box;
      Object.assign(b, i.chartArea), b.update(_.w, _.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Lp {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, r) {
  }
  removeEventListener(t, e, r) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, r, o) {
    return e = Math.max(0, e || t.width), r = r || t.height, {
      width: e,
      height: Math.max(0, o ? Math.floor(e / o) : r)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Av extends Lp {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const vo = "$chartjs", zv = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, ch = (i) => i === null || i === "";
function Fv(i, t) {
  const e = i.style, r = i.getAttribute("height"), o = i.getAttribute("width");
  if (i[vo] = {
    initial: {
      height: r,
      width: o,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", ch(o)) {
    const l = Xd(i, "width");
    l !== void 0 && (i.width = l);
  }
  if (ch(r))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const l = Xd(i, "height");
      l !== void 0 && (i.height = l);
    }
  return i;
}
const Rp = Oy ? {
  passive: !0
} : !1;
function Iv(i, t, e) {
  i && i.addEventListener(t, e, Rp);
}
function Nv(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Rp);
}
function Bv(i, t) {
  const e = zv[i.type] || i.type, { x: r, y: o } = Jn(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: r !== void 0 ? r : null,
    y: o !== void 0 ? o : null
  };
}
function Mo(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Vv(i, t, e) {
  const r = i.canvas, o = new MutationObserver((l) => {
    let u = !1;
    for (const c of l)
      u = u || Mo(c.addedNodes, r), u = u && !Mo(c.removedNodes, r);
    u && e();
  });
  return o.observe(document, {
    childList: !0,
    subtree: !0
  }), o;
}
function jv(i, t, e) {
  const r = i.canvas, o = new MutationObserver((l) => {
    let u = !1;
    for (const c of l)
      u = u || Mo(c.removedNodes, r), u = u && !Mo(c.addedNodes, r);
    u && e();
  });
  return o.observe(document, {
    childList: !0,
    subtree: !0
  }), o;
}
const Ws = /* @__PURE__ */ new Map();
let fh = 0;
function Ap() {
  const i = window.devicePixelRatio;
  i !== fh && (fh = i, Ws.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Wv(i, t) {
  Ws.size || window.addEventListener("resize", Ap), Ws.set(i, t);
}
function Hv(i) {
  Ws.delete(i), Ws.size || window.removeEventListener("resize", Ap);
}
function Uv(i, t, e) {
  const r = i.canvas, o = r && _u(r);
  if (!o)
    return;
  const l = ap((c, d) => {
    const p = o.clientWidth;
    e(c, d), p < o.clientWidth && e();
  }, window), u = new ResizeObserver((c) => {
    const d = c[0], p = d.contentRect.width, m = d.contentRect.height;
    p === 0 && m === 0 || l(p, m);
  });
  return u.observe(o), Wv(i, l), u;
}
function Ua(i, t, e) {
  e && e.disconnect(), t === "resize" && Hv(i);
}
function $v(i, t, e) {
  const r = i.canvas, o = ap((l) => {
    i.ctx !== null && e(Bv(l, i));
  }, i);
  return Iv(r, t, o), o;
}
class Yv extends Lp {
  acquireContext(t, e) {
    const r = t && t.getContext && t.getContext("2d");
    return r && r.canvas === t ? (Fv(t, e), r) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[vo])
      return !1;
    const r = e[vo].initial;
    [
      "height",
      "width"
    ].forEach((l) => {
      const u = r[l];
      pt(u) ? e.removeAttribute(l) : e.setAttribute(l, u);
    });
    const o = r.style || {};
    return Object.keys(o).forEach((l) => {
      e.style[l] = o[l];
    }), e.width = e.width, delete e[vo], !0;
  }
  addEventListener(t, e, r) {
    this.removeEventListener(t, e);
    const o = t.$proxies || (t.$proxies = {}), u = {
      attach: Vv,
      detach: jv,
      resize: Uv
    }[e] || $v;
    o[e] = u(t, e, r);
  }
  removeEventListener(t, e) {
    const r = t.$proxies || (t.$proxies = {}), o = r[e];
    if (!o)
      return;
    ({
      attach: Ua,
      detach: Ua,
      resize: Ua
    }[e] || Nv)(t, e, o), r[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, r, o) {
    return Ty(t, e, r, o);
  }
  isAttached(t) {
    const e = t && _u(t);
    return !!(e && e.isConnected);
  }
}
function Xv(i) {
  return !xu() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Av : Yv;
}
class ln {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: r } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: r
    };
  }
  hasValue() {
    return Ai(this.x) && Ai(this.y);
  }
  getProps(t, e) {
    const r = this.$animations;
    if (!e || !r)
      return this;
    const o = {};
    return t.forEach((l) => {
      o[l] = r[l] && r[l].active() ? r[l]._to : this[l];
    }), o;
  }
}
function Kv(i, t) {
  const e = i.options.ticks, r = Qv(i), o = Math.min(e.maxTicksLimit || r, r), l = e.major.enabled ? Zv(t) : [], u = l.length, c = l[0], d = l[u - 1], p = [];
  if (u > o)
    return qv(t, p, l, u / o), p;
  const m = Gv(l, t, o);
  if (u > 0) {
    let y, v;
    const _ = u > 1 ? Math.round((d - c) / (u - 1)) : null;
    for (co(t, p, m, pt(_) ? 0 : c - _, c), y = 0, v = u - 1; y < v; y++)
      co(t, p, m, l[y], l[y + 1]);
    return co(t, p, m, d, pt(_) ? t.length : d + _), p;
  }
  return co(t, p, m), p;
}
function Qv(i) {
  const t = i.options.offset, e = i._tickSize(), r = i._length / e + (t ? 0 : 1), o = i._maxLength / e;
  return Math.floor(Math.min(r, o));
}
function Gv(i, t, e) {
  const r = Jv(i), o = t.length / e;
  if (!r)
    return Math.max(o, 1);
  const l = R0(r);
  for (let u = 0, c = l.length - 1; u < c; u++) {
    const d = l[u];
    if (d > o)
      return d;
  }
  return Math.max(o, 1);
}
function Zv(i) {
  const t = [];
  let e, r;
  for (e = 0, r = i.length; e < r; e++)
    i[e].major && t.push(e);
  return t;
}
function qv(i, t, e, r) {
  let o = 0, l = e[0], u;
  for (r = Math.ceil(r), u = 0; u < i.length; u++)
    u === l && (t.push(i[u]), o++, l = e[o * r]);
}
function co(i, t, e, r, o) {
  const l = at(r, 0), u = Math.min(at(o, i.length), i.length);
  let c = 0, d, p, m;
  for (e = Math.ceil(e), o && (d = o - r, e = d / Math.floor(d / e)), m = l; m < 0; )
    c++, m = Math.round(l + c * e);
  for (p = Math.max(l, 0); p < u; p++)
    p === m && (t.push(i[p]), c++, m = Math.round(l + c * e));
}
function Jv(i) {
  const t = i.length;
  let e, r;
  if (t < 2)
    return !1;
  for (r = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== r)
      return !1;
  return r;
}
const tx = (i) => i === "left" ? "right" : i === "right" ? "left" : i, dh = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, hh = (i, t) => Math.min(t || i, i);
function ph(i, t) {
  const e = [], r = i.length / t, o = i.length;
  let l = 0;
  for (; l < o; l += r)
    e.push(i[Math.floor(l)]);
  return e;
}
function ex(i, t, e) {
  const r = i.ticks.length, o = Math.min(t, r - 1), l = i._startPixel, u = i._endPixel, c = 1e-6;
  let d = i.getPixelForTick(o), p;
  if (!(e && (r === 1 ? p = Math.max(d - l, u - d) : t === 0 ? p = (i.getPixelForTick(1) - d) / 2 : p = (d - i.getPixelForTick(o - 1)) / 2, d += o < t ? p : -p, d < l - c || d > u + c)))
    return d;
}
function nx(i, t) {
  kt(i, (e) => {
    const r = e.gc, o = r.length / 2;
    let l;
    if (o > t) {
      for (l = 0; l < o; ++l)
        delete e.data[r[l]];
      r.splice(0, o);
    }
  });
}
function Ms(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function gh(i, t) {
  if (!i.display)
    return 0;
  const e = Ut(i.font, t), r = se(i.padding);
  return (Lt(i.text) ? i.text.length : 1) * e.lineHeight + r.height;
}
function ix(i, t) {
  return An(i, {
    scale: t,
    type: "scale"
  });
}
function sx(i, t, e) {
  return An(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function rx(i, t, e) {
  let r = hu(i);
  return (e && t !== "right" || !e && t === "right") && (r = tx(r)), r;
}
function ox(i, t, e, r) {
  const { top: o, left: l, bottom: u, right: c, chart: d } = i, { chartArea: p, scales: m } = d;
  let y = 0, v, _, k;
  const S = u - o, b = c - l;
  if (i.isHorizontal()) {
    if (_ = ee(r, l, c), gt(e)) {
      const E = Object.keys(e)[0], L = e[E];
      k = m[E].getPixelForValue(L) + S - t;
    } else e === "center" ? k = (p.bottom + p.top) / 2 + S - t : k = dh(i, e, t);
    v = c - l;
  } else {
    if (gt(e)) {
      const E = Object.keys(e)[0], L = e[E];
      _ = m[E].getPixelForValue(L) - b + t;
    } else e === "center" ? _ = (p.left + p.right) / 2 - b + t : _ = dh(i, e, t);
    k = ee(r, u, o), y = e === "left" ? -Vt : Vt;
  }
  return {
    titleX: _,
    titleY: k,
    maxWidth: v,
    rotation: y
  };
}
class ri extends ln {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: r, _suggestedMax: o } = this;
    return t = _e(t, Number.POSITIVE_INFINITY), e = _e(e, Number.NEGATIVE_INFINITY), r = _e(r, Number.POSITIVE_INFINITY), o = _e(o, Number.NEGATIVE_INFINITY), {
      min: _e(t, r),
      max: _e(e, o),
      minDefined: It(t),
      maxDefined: It(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: r, minDefined: o, maxDefined: l } = this.getUserBounds(), u;
    if (o && l)
      return {
        min: e,
        max: r
      };
    const c = this.getMatchingVisibleMetas();
    for (let d = 0, p = c.length; d < p; ++d)
      u = c[d].controller.getMinMax(this, t), o || (e = Math.min(e, u.min)), l || (r = Math.max(r, u.max));
    return e = l && e > r ? r : e, r = o && e > r ? e : r, {
      min: _e(e, _e(r, e)),
      max: _e(r, _e(e, r))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    Ct(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, r) {
    const { beginAtZero: o, grace: l, ticks: u } = this.options, c = u.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = r = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, r), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + r.left + r.right : this.height + r.top + r.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ay(this, l, o), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const d = c < this.ticks.length;
    this._convertTicksToLabels(d ? ph(this.ticks, c) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), u.display && (u.autoSkip || u.source === "auto") && (this.ticks = Kv(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), d && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, r;
    this.isHorizontal() ? (e = this.left, r = this.right) : (e = this.top, r = this.bottom, t = !t), this._startPixel = e, this._endPixel = r, this._reversePixels = t, this._length = r - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ct(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ct(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ct(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ct(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Ct(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let r, o, l;
    for (r = 0, o = t.length; r < o; r++)
      l = t[r], l.label = Ct(e.callback, [
        l.value,
        r,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Ct(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ct(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, r = hh(this.ticks.length, t.ticks.maxTicksLimit), o = e.minRotation || 0, l = e.maxRotation;
    let u = o, c, d, p;
    if (!this._isVisible() || !e.display || o >= l || r <= 1 || !this.isHorizontal()) {
      this.labelRotation = o;
      return;
    }
    const m = this._getLabelSizes(), y = m.widest.width, v = m.highest.height, _ = Kt(this.chart.width - y, 0, this.maxWidth);
    c = t.offset ? this.maxWidth / r : _ / (r - 1), y + 6 > c && (c = _ / (r - (t.offset ? 0.5 : 1)), d = this.maxHeight - Ms(t.grid) - e.padding - gh(t.title, this.chart.options.font), p = Math.sqrt(y * y + v * v), u = fu(Math.min(Math.asin(Kt((m.highest.height + 6) / c, -1, 1)), Math.asin(Kt(d / p, -1, 1)) - Math.asin(Kt(v / p, -1, 1)))), u = Math.max(o, Math.min(l, u))), this.labelRotation = u;
  }
  afterCalculateLabelRotation() {
    Ct(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ct(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: r, title: o, grid: l } } = this, u = this._isVisible(), c = this.isHorizontal();
    if (u) {
      const d = gh(o, e.options.font);
      if (c ? (t.width = this.maxWidth, t.height = Ms(l) + d) : (t.height = this.maxHeight, t.width = Ms(l) + d), r.display && this.ticks.length) {
        const { first: p, last: m, widest: y, highest: v } = this._getLabelSizes(), _ = r.padding * 2, k = Fe(this.labelRotation), S = Math.cos(k), b = Math.sin(k);
        if (c) {
          const E = r.mirror ? 0 : b * y.width + S * v.height;
          t.height = Math.min(this.maxHeight, t.height + E + _);
        } else {
          const E = r.mirror ? 0 : S * y.width + b * v.height;
          t.width = Math.min(this.maxWidth, t.width + E + _);
        }
        this._calculatePadding(p, m, b, S);
      }
    }
    this._handleMargins(), c ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, r, o) {
    const { ticks: { align: l, padding: u }, position: c } = this.options, d = this.labelRotation !== 0, p = c !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const m = this.getPixelForTick(0) - this.left, y = this.right - this.getPixelForTick(this.ticks.length - 1);
      let v = 0, _ = 0;
      d ? p ? (v = o * t.width, _ = r * e.height) : (v = r * t.height, _ = o * e.width) : l === "start" ? _ = e.width : l === "end" ? v = t.width : l !== "inner" && (v = t.width / 2, _ = e.width / 2), this.paddingLeft = Math.max((v - m + u) * this.width / (this.width - m), 0), this.paddingRight = Math.max((_ - y + u) * this.width / (this.width - y), 0);
    } else {
      let m = e.height / 2, y = t.height / 2;
      l === "start" ? (m = 0, y = t.height) : l === "end" && (m = e.height, y = 0), this.paddingTop = m + u, this.paddingBottom = y + u;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Ct(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, r;
    for (e = 0, r = t.length; e < r; e++)
      pt(t[e].label) && (t.splice(e, 1), r--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let r = this.ticks;
      e < r.length && (r = ph(r, e)), this._labelSizes = t = this._computeLabelSizes(r, r.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, r) {
    const { ctx: o, _longestTextCache: l } = this, u = [], c = [], d = Math.floor(e / hh(e, r));
    let p = 0, m = 0, y, v, _, k, S, b, E, L, z, A, R;
    for (y = 0; y < e; y += d) {
      if (k = t[y].label, S = this._resolveTickFontOptions(y), o.font = b = S.string, E = l[b] = l[b] || {
        data: {},
        gc: []
      }, L = S.lineHeight, z = A = 0, !pt(k) && !Lt(k))
        z = bo(o, E.data, E.gc, z, k), A = L;
      else if (Lt(k))
        for (v = 0, _ = k.length; v < _; ++v)
          R = k[v], !pt(R) && !Lt(R) && (z = bo(o, E.data, E.gc, z, R), A += L);
      u.push(z), c.push(A), p = Math.max(z, p), m = Math.max(A, m);
    }
    nx(l, e);
    const V = u.indexOf(p), j = c.indexOf(m), H = (Z) => ({
      width: u[Z] || 0,
      height: c[Z] || 0
    });
    return {
      first: H(0),
      last: H(e - 1),
      widest: H(V),
      highest: H(j),
      widths: u,
      heights: c
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return I0(this._alignToPixels ? Gn(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const r = e[t];
      return r.$context || (r.$context = sx(this.getContext(), t, r));
    }
    return this.$context || (this.$context = ix(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Fe(this.labelRotation), r = Math.abs(Math.cos(e)), o = Math.abs(Math.sin(e)), l = this._getLabelSizes(), u = t.autoSkipPadding || 0, c = l ? l.widest.width + u : 0, d = l ? l.highest.height + u : 0;
    return this.isHorizontal() ? d * r > c * o ? c / r : d / o : d * o < c * r ? d / r : c / o;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, r = this.chart, o = this.options, { grid: l, position: u, border: c } = o, d = l.offset, p = this.isHorizontal(), y = this.ticks.length + (d ? 1 : 0), v = Ms(l), _ = [], k = c.setContext(this.getContext()), S = k.display ? k.width : 0, b = S / 2, E = function(ft) {
      return Gn(r, ft, S);
    };
    let L, z, A, R, V, j, H, Z, et, nt, st, xt;
    if (u === "top")
      L = E(this.bottom), j = this.bottom - v, Z = L - b, nt = E(t.top) + b, xt = t.bottom;
    else if (u === "bottom")
      L = E(this.top), nt = t.top, xt = E(t.bottom) - b, j = L + b, Z = this.top + v;
    else if (u === "left")
      L = E(this.right), V = this.right - v, H = L - b, et = E(t.left) + b, st = t.right;
    else if (u === "right")
      L = E(this.left), et = t.left, st = E(t.right) - b, V = L + b, H = this.left + v;
    else if (e === "x") {
      if (u === "center")
        L = E((t.top + t.bottom) / 2 + 0.5);
      else if (gt(u)) {
        const ft = Object.keys(u)[0], lt = u[ft];
        L = E(this.chart.scales[ft].getPixelForValue(lt));
      }
      nt = t.top, xt = t.bottom, j = L + b, Z = j + v;
    } else if (e === "y") {
      if (u === "center")
        L = E((t.left + t.right) / 2);
      else if (gt(u)) {
        const ft = Object.keys(u)[0], lt = u[ft];
        L = E(this.chart.scales[ft].getPixelForValue(lt));
      }
      V = L - b, H = V - v, et = t.left, st = t.right;
    }
    const Mt = at(o.ticks.maxTicksLimit, y), ct = Math.max(1, Math.ceil(y / Mt));
    for (z = 0; z < y; z += ct) {
      const ft = this.getContext(z), lt = l.setContext(ft), U = c.setContext(ft), X = lt.lineWidth, $ = lt.color, P = U.dash || [], F = U.dashOffset, rt = lt.tickWidth, ot = lt.tickColor, dt = lt.tickBorderDash || [], ut = lt.tickBorderDashOffset;
      A = ex(this, z, d), A !== void 0 && (R = Gn(r, A, X), p ? V = H = et = st = R : j = Z = nt = xt = R, _.push({
        tx1: V,
        ty1: j,
        tx2: H,
        ty2: Z,
        x1: et,
        y1: nt,
        x2: st,
        y2: xt,
        width: X,
        color: $,
        borderDash: P,
        borderDashOffset: F,
        tickWidth: rt,
        tickColor: ot,
        tickBorderDash: dt,
        tickBorderDashOffset: ut
      }));
    }
    return this._ticksLength = y, this._borderValue = L, _;
  }
  _computeLabelItems(t) {
    const e = this.axis, r = this.options, { position: o, ticks: l } = r, u = this.isHorizontal(), c = this.ticks, { align: d, crossAlign: p, padding: m, mirror: y } = l, v = Ms(r.grid), _ = v + m, k = y ? -m : _, S = -Fe(this.labelRotation), b = [];
    let E, L, z, A, R, V, j, H, Z, et, nt, st, xt = "middle";
    if (o === "top")
      V = this.bottom - k, j = this._getXAxisLabelAlignment();
    else if (o === "bottom")
      V = this.top + k, j = this._getXAxisLabelAlignment();
    else if (o === "left") {
      const ct = this._getYAxisLabelAlignment(v);
      j = ct.textAlign, R = ct.x;
    } else if (o === "right") {
      const ct = this._getYAxisLabelAlignment(v);
      j = ct.textAlign, R = ct.x;
    } else if (e === "x") {
      if (o === "center")
        V = (t.top + t.bottom) / 2 + _;
      else if (gt(o)) {
        const ct = Object.keys(o)[0], ft = o[ct];
        V = this.chart.scales[ct].getPixelForValue(ft) + _;
      }
      j = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (o === "center")
        R = (t.left + t.right) / 2 - _;
      else if (gt(o)) {
        const ct = Object.keys(o)[0], ft = o[ct];
        R = this.chart.scales[ct].getPixelForValue(ft);
      }
      j = this._getYAxisLabelAlignment(v).textAlign;
    }
    e === "y" && (d === "start" ? xt = "top" : d === "end" && (xt = "bottom"));
    const Mt = this._getLabelSizes();
    for (E = 0, L = c.length; E < L; ++E) {
      z = c[E], A = z.label;
      const ct = l.setContext(this.getContext(E));
      H = this.getPixelForTick(E) + l.labelOffset, Z = this._resolveTickFontOptions(E), et = Z.lineHeight, nt = Lt(A) ? A.length : 1;
      const ft = nt / 2, lt = ct.color, U = ct.textStrokeColor, X = ct.textStrokeWidth;
      let $ = j;
      u ? (R = H, j === "inner" && (E === L - 1 ? $ = this.options.reverse ? "left" : "right" : E === 0 ? $ = this.options.reverse ? "right" : "left" : $ = "center"), o === "top" ? p === "near" || S !== 0 ? st = -nt * et + et / 2 : p === "center" ? st = -Mt.highest.height / 2 - ft * et + et : st = -Mt.highest.height + et / 2 : p === "near" || S !== 0 ? st = et / 2 : p === "center" ? st = Mt.highest.height / 2 - ft * et : st = Mt.highest.height - nt * et, y && (st *= -1), S !== 0 && !ct.showLabelBackdrop && (R += et / 2 * Math.sin(S))) : (V = H, st = (1 - nt) * et / 2);
      let P;
      if (ct.showLabelBackdrop) {
        const F = se(ct.backdropPadding), rt = Mt.heights[E], ot = Mt.widths[E];
        let dt = st - F.top, ut = 0 - F.left;
        switch (xt) {
          case "middle":
            dt -= rt / 2;
            break;
          case "bottom":
            dt -= rt;
            break;
        }
        switch (j) {
          case "center":
            ut -= ot / 2;
            break;
          case "right":
            ut -= ot;
            break;
          case "inner":
            E === L - 1 ? ut -= ot : E > 0 && (ut -= ot / 2);
            break;
        }
        P = {
          left: ut,
          top: dt,
          width: ot + F.width,
          height: rt + F.height,
          color: ct.backdropColor
        };
      }
      b.push({
        label: A,
        font: Z,
        textOffset: st,
        options: {
          rotation: S,
          color: lt,
          strokeColor: U,
          strokeWidth: X,
          textAlign: $,
          textBaseline: xt,
          translation: [
            R,
            V
          ],
          backdrop: P
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Fe(this.labelRotation))
      return t === "top" ? "left" : "right";
    let o = "center";
    return e.align === "start" ? o = "left" : e.align === "end" ? o = "right" : e.align === "inner" && (o = "inner"), o;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: r, mirror: o, padding: l } } = this.options, u = this._getLabelSizes(), c = t + l, d = u.widest.width;
    let p, m;
    return e === "left" ? o ? (m = this.right + l, r === "near" ? p = "left" : r === "center" ? (p = "center", m += d / 2) : (p = "right", m += d)) : (m = this.right - c, r === "near" ? p = "right" : r === "center" ? (p = "center", m -= d / 2) : (p = "left", m = this.left)) : e === "right" ? o ? (m = this.left + l, r === "near" ? p = "right" : r === "center" ? (p = "center", m -= d / 2) : (p = "left", m -= d)) : (m = this.left + c, r === "near" ? p = "left" : r === "center" ? (p = "center", m += d / 2) : (p = "right", m = this.right)) : p = "right", {
      textAlign: p,
      x: m
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: r, top: o, width: l, height: u } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(r, o, l, u), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const o = this.ticks.findIndex((l) => l.value === t);
    return o >= 0 ? e.setContext(this.getContext(o)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, r = this.ctx, o = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let l, u;
    const c = (d, p, m) => {
      !m.width || !m.color || (r.save(), r.lineWidth = m.width, r.strokeStyle = m.color, r.setLineDash(m.borderDash || []), r.lineDashOffset = m.borderDashOffset, r.beginPath(), r.moveTo(d.x, d.y), r.lineTo(p.x, p.y), r.stroke(), r.restore());
    };
    if (e.display)
      for (l = 0, u = o.length; l < u; ++l) {
        const d = o[l];
        e.drawOnChartArea && c({
          x: d.x1,
          y: d.y1
        }, {
          x: d.x2,
          y: d.y2
        }, d), e.drawTicks && c({
          x: d.tx1,
          y: d.ty1
        }, {
          x: d.tx2,
          y: d.ty2
        }, {
          color: d.tickColor,
          width: d.tickWidth,
          borderDash: d.tickBorderDash,
          borderDashOffset: d.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: r, grid: o } } = this, l = r.setContext(this.getContext()), u = r.display ? l.width : 0;
    if (!u)
      return;
    const c = o.setContext(this.getContext(0)).lineWidth, d = this._borderValue;
    let p, m, y, v;
    this.isHorizontal() ? (p = Gn(t, this.left, u) - u / 2, m = Gn(t, this.right, c) + c / 2, y = v = d) : (y = Gn(t, this.top, u) - u / 2, v = Gn(t, this.bottom, c) + c / 2, p = m = d), e.save(), e.lineWidth = l.width, e.strokeStyle = l.color, e.beginPath(), e.moveTo(p, y), e.lineTo(m, v), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const r = this.ctx, o = this._computeLabelArea();
    o && To(r, o);
    const l = this.getLabelItems(t);
    for (const u of l) {
      const c = u.options, d = u.font, p = u.label, m = u.textOffset;
      si(r, p, 0, m, d, c);
    }
    o && Oo(r);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: r, reverse: o } } = this;
    if (!r.display)
      return;
    const l = Ut(r.font), u = se(r.padding), c = r.align;
    let d = l.lineHeight / 2;
    e === "bottom" || e === "center" || gt(e) ? (d += u.bottom, Lt(r.text) && (d += l.lineHeight * (r.text.length - 1))) : d += u.top;
    const { titleX: p, titleY: m, maxWidth: y, rotation: v } = ox(this, d, e, c);
    si(t, r.text, 0, 0, l, {
      color: r.color,
      maxWidth: y,
      rotation: v,
      textAlign: rx(c, e, o),
      textBaseline: "middle",
      translation: [
        p,
        m
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, r = at(t.grid && t.grid.z, -1), o = at(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ri.prototype.draw ? [
      {
        z: e,
        draw: (l) => {
          this.draw(l);
        }
      }
    ] : [
      {
        z: r,
        draw: (l) => {
          this.drawBackground(), this.drawGrid(l), this.drawTitle();
        }
      },
      {
        z: o,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (l) => {
          this.drawLabels(l);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), r = this.axis + "AxisID", o = [];
    let l, u;
    for (l = 0, u = e.length; l < u; ++l) {
      const c = e[l];
      c[r] === this.id && (!t || c.type === t) && o.push(c);
    }
    return o;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Ut(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class fo {
  constructor(t, e, r) {
    this.type = t, this.scope = e, this.override = r, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let r;
    ux(e) && (r = this.register(e));
    const o = this.items, l = t.id, u = this.scope + "." + l;
    if (!l)
      throw new Error("class does not have id: " + t);
    return l in o || (o[l] = t, lx(t, u, r), this.override && Rt.override(t.id, t.overrides)), u;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, r = t.id, o = this.scope;
    r in e && delete e[r], o && r in Rt[o] && (delete Rt[o][r], this.override && delete ii[r]);
  }
}
function lx(i, t, e) {
  const r = Ns(/* @__PURE__ */ Object.create(null), [
    e ? Rt.get(e) : {},
    Rt.get(t),
    i.defaults
  ]);
  Rt.set(t, r), i.defaultRoutes && ax(t, i.defaultRoutes), i.descriptors && Rt.describe(t, i.descriptors);
}
function ax(i, t) {
  Object.keys(t).forEach((e) => {
    const r = e.split("."), o = r.pop(), l = [
      i
    ].concat(r).join("."), u = t[e].split("."), c = u.pop(), d = u.join(".");
    Rt.route(l, o, d, c);
  });
}
function ux(i) {
  return "id" in i && "defaults" in i;
}
class cx {
  constructor() {
    this.controllers = new fo(zn, "datasets", !0), this.elements = new fo(ln, "elements"), this.plugins = new fo(Object, "plugins"), this.scales = new fo(ri, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, r) {
    [
      ...e
    ].forEach((o) => {
      const l = r || this._getRegistryForType(o);
      r || l.isForType(o) || l === this.plugins && o.id ? this._exec(t, l, o) : kt(o, (u) => {
        const c = r || this._getRegistryForType(u);
        this._exec(t, c, u);
      });
    });
  }
  _exec(t, e, r) {
    const o = cu(t);
    Ct(r["before" + o], [], r), e[t](r), Ct(r["after" + o], [], r);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const r = this._typedRegistries[e];
      if (r.isForType(t))
        return r;
    }
    return this.plugins;
  }
  _get(t, e, r) {
    const o = e.get(t);
    if (o === void 0)
      throw new Error('"' + t + '" is not a registered ' + r + ".");
    return o;
  }
}
var He = /* @__PURE__ */ new cx();
class fx {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, r, o) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const l = o ? this._descriptors(t).filter(o) : this._descriptors(t), u = this._notify(l, t, e, r);
    return e === "afterDestroy" && (this._notify(l, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), u;
  }
  _notify(t, e, r, o) {
    o = o || {};
    for (const l of t) {
      const u = l.plugin, c = u[r], d = [
        e,
        o,
        l.options
      ];
      if (Ct(c, d, u) === !1 && o.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    pt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const r = t && t.config, o = at(r.options && r.options.plugins, {}), l = dx(r);
    return o === !1 && !e ? [] : px(t, l, o, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], r = this._cache, o = (l, u) => l.filter((c) => !u.some((d) => c.plugin.id === d.plugin.id));
    this._notify(o(e, r), t, "stop"), this._notify(o(r, e), t, "start");
  }
}
function dx(i) {
  const t = {}, e = [], r = Object.keys(He.plugins.items);
  for (let l = 0; l < r.length; l++)
    e.push(He.getPlugin(r[l]));
  const o = i.plugins || [];
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    e.indexOf(u) === -1 && (e.push(u), t[u.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function hx(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function px(i, { plugins: t, localIds: e }, r, o) {
  const l = [], u = i.getContext();
  for (const c of t) {
    const d = c.id, p = hx(r[d], o);
    p !== null && l.push({
      plugin: c,
      options: gx(i.config, {
        plugin: c,
        local: e[d]
      }, p, u)
    });
  }
  return l;
}
function gx(i, { plugin: t, local: e }, r, o) {
  const l = i.pluginScopeKeys(t), u = i.getOptionScopes(r, l);
  return e && t.defaults && u.push(t.defaults), i.createResolver(u, o, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ja(i, t) {
  const e = Rt.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function mx(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function yx(i, t) {
  return i === t ? "_index_" : "_value_";
}
function mh(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function vx(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function tu(i, ...t) {
  if (mh(i))
    return i;
  for (const e of t) {
    const r = e.axis || vx(e.position) || i.length > 1 && mh(i[0].toLowerCase());
    if (r)
      return r;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function yh(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function xx(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((r) => r.xAxisID === i || r.yAxisID === i);
    if (e.length)
      return yh(i, "x", e[0]) || yh(i, "y", e[0]);
  }
  return {};
}
function _x(i, t) {
  const e = ii[i.type] || {
    scales: {}
  }, r = t.scales || {}, o = Ja(i.type, t), l = /* @__PURE__ */ Object.create(null);
  return Object.keys(r).forEach((u) => {
    const c = r[u];
    if (!gt(c))
      return console.error(`Invalid scale configuration for scale: ${u}`);
    if (c._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${u}`);
    const d = tu(u, c, xx(u, i), Rt.scales[c.type]), p = yx(d, o), m = e.scales || {};
    l[u] = Rs(/* @__PURE__ */ Object.create(null), [
      {
        axis: d
      },
      c,
      m[d],
      m[p]
    ]);
  }), i.data.datasets.forEach((u) => {
    const c = u.type || i.type, d = u.indexAxis || Ja(c, t), m = (ii[c] || {}).scales || {};
    Object.keys(m).forEach((y) => {
      const v = mx(y, d), _ = u[v + "AxisID"] || v;
      l[_] = l[_] || /* @__PURE__ */ Object.create(null), Rs(l[_], [
        {
          axis: v
        },
        r[_],
        m[y]
      ]);
    });
  }), Object.keys(l).forEach((u) => {
    const c = l[u];
    Rs(c, [
      Rt.scales[c.type],
      Rt.scale
    ]);
  }), l;
}
function zp(i) {
  const t = i.options || (i.options = {});
  t.plugins = at(t.plugins, {}), t.scales = _x(i, t);
}
function Fp(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Sx(i) {
  return i = i || {}, i.data = Fp(i.data), zp(i), i;
}
const vh = /* @__PURE__ */ new Map(), Ip = /* @__PURE__ */ new Set();
function ho(i, t) {
  let e = vh.get(i);
  return e || (e = t(), vh.set(i, e), Ip.add(e)), e;
}
const Ps = (i, t, e) => {
  const r = Ln(t, e);
  r !== void 0 && i.add(r);
};
class kx {
  constructor(t) {
    this._config = Sx(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Fp(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), zp(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ho(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ho(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return ho(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, r = this.type;
    return ho(`${r}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const r = this._scopeCache;
    let o = r.get(t);
    return (!o || e) && (o = /* @__PURE__ */ new Map(), r.set(t, o)), o;
  }
  getOptionScopes(t, e, r) {
    const { options: o, type: l } = this, u = this._cachedScopes(t, r), c = u.get(e);
    if (c)
      return c;
    const d = /* @__PURE__ */ new Set();
    e.forEach((m) => {
      t && (d.add(t), m.forEach((y) => Ps(d, t, y))), m.forEach((y) => Ps(d, o, y)), m.forEach((y) => Ps(d, ii[l] || {}, y)), m.forEach((y) => Ps(d, Rt, y)), m.forEach((y) => Ps(d, Za, y));
    });
    const p = Array.from(d);
    return p.length === 0 && p.push(/* @__PURE__ */ Object.create(null)), Ip.has(e) && u.set(e, p), p;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ii[e] || {},
      Rt.datasets[e] || {},
      {
        type: e
      },
      Rt,
      Za
    ];
  }
  resolveNamedOptions(t, e, r, o = [
    ""
  ]) {
    const l = {
      $shared: !0
    }, { resolver: u, subPrefixes: c } = xh(this._resolverCache, t, o);
    let d = u;
    if (bx(u, e)) {
      l.$shared = !1, r = Rn(r) ? r() : r;
      const p = this.createResolver(t, r, c);
      d = zi(u, r, p);
    }
    for (const p of e)
      l[p] = d[p];
    return l;
  }
  createResolver(t, e, r = [
    ""
  ], o) {
    const { resolver: l } = xh(this._resolverCache, t, r);
    return gt(e) ? zi(l, e, void 0, o) : l;
  }
}
function xh(i, t, e) {
  let r = i.get(t);
  r || (r = /* @__PURE__ */ new Map(), i.set(t, r));
  const o = e.join();
  let l = r.get(o);
  return l || (l = {
    resolver: mu(t, e),
    subPrefixes: e.filter((c) => !c.toLowerCase().includes("hover"))
  }, r.set(o, l)), l;
}
const wx = (i) => gt(i) && Object.getOwnPropertyNames(i).some((t) => Rn(i[t]));
function bx(i, t) {
  const { isScriptable: e, isIndexable: r } = pp(i);
  for (const o of t) {
    const l = e(o), u = r(o), c = (u || l) && i[o];
    if (l && (Rn(c) || wx(c)) || u && Lt(c))
      return !0;
  }
  return !1;
}
var Cx = "4.5.1";
const Mx = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function _h(i, t) {
  return i === "top" || i === "bottom" || Mx.indexOf(i) === -1 && t === "x";
}
function Sh(i, t) {
  return function(e, r) {
    return e[i] === r[i] ? e[t] - r[t] : e[i] - r[i];
  };
}
function kh(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), Ct(e && e.onComplete, [
    i
  ], t);
}
function Px(i) {
  const t = i.chart, e = t.options.animation;
  Ct(e && e.onProgress, [
    i
  ], t);
}
function Np(i) {
  return xu() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const xo = {}, wh = (i) => {
  const t = Np(i);
  return Object.values(xo).filter((e) => e.canvas === t).pop();
};
function Ex(i, t, e) {
  const r = Object.keys(i);
  for (const o of r) {
    const l = +o;
    if (l >= t) {
      const u = i[o];
      delete i[o], (e > 0 || l > t) && (i[l + e] = u);
    }
  }
}
function Dx(i, t, e, r) {
  return !e || i.type === "mouseout" ? null : r ? t : i;
}
class wu {
  static defaults = Rt;
  static instances = xo;
  static overrides = ii;
  static registry = He;
  static version = Cx;
  static getChart = wh;
  static register(...t) {
    He.add(...t), bh();
  }
  static unregister(...t) {
    He.remove(...t), bh();
  }
  constructor(t, e) {
    const r = this.config = new kx(e), o = Np(t), l = wh(o);
    if (l)
      throw new Error("Canvas is already in use. Chart with ID '" + l.id + "' must be destroyed before the canvas with ID '" + l.canvas.id + "' can be reused.");
    const u = r.createResolver(r.chartOptionScopes(), this.getContext());
    this.platform = new (r.platform || Xv(o))(), this.platform.updateConfig(r);
    const c = this.platform.acquireContext(o, u.aspectRatio), d = c && c.canvas, p = d && d.height, m = d && d.width;
    if (this.id = b0(), this.ctx = c, this.canvas = d, this.width = m, this.height = p, this._options = u, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new fx(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = j0((y) => this.update(y), u.resizeDelay || 0), this._dataChanges = [], xo[this.id] = this, !c || !d) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    tn.listen(this, "complete", kh), tn.listen(this, "progress", Px), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: r, height: o, _aspectRatio: l } = this;
    return pt(t) ? e && l ? l : o ? r / o : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return He;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Yd(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Hd(this.canvas, this.ctx), this;
  }
  stop() {
    return tn.stop(this), this;
  }
  resize(t, e) {
    tn.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const r = this.options, o = this.canvas, l = r.maintainAspectRatio && this.aspectRatio, u = this.platform.getMaximumSize(o, t, e, l), c = r.devicePixelRatio || this.platform.getDevicePixelRatio(), d = this.width ? "resize" : "attach";
    this.width = u.width, this.height = u.height, this._aspectRatio = this.aspectRatio, Yd(this, c, !0) && (this.notifyPlugins("resize", {
      size: u
    }), Ct(r.onResize, [
      this,
      u
    ], this), this.attached && this._doResize(d) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    kt(e, (r, o) => {
      r.id = o;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, r = this.scales, o = Object.keys(r).reduce((u, c) => (u[c] = !1, u), {});
    let l = [];
    e && (l = l.concat(Object.keys(e).map((u) => {
      const c = e[u], d = tu(u, c), p = d === "r", m = d === "x";
      return {
        options: c,
        dposition: p ? "chartArea" : m ? "bottom" : "left",
        dtype: p ? "radialLinear" : m ? "category" : "linear"
      };
    }))), kt(l, (u) => {
      const c = u.options, d = c.id, p = tu(d, c), m = at(c.type, u.dtype);
      (c.position === void 0 || _h(c.position, p) !== _h(u.dposition)) && (c.position = u.dposition), o[d] = !0;
      let y = null;
      if (d in r && r[d].type === m)
        y = r[d];
      else {
        const v = He.getScale(m);
        y = new v({
          id: d,
          type: m,
          ctx: this.ctx,
          chart: this
        }), r[y.id] = y;
      }
      y.init(c, t);
    }), kt(o, (u, c) => {
      u || delete r[c];
    }), kt(r, (u) => {
      ie.configure(this, u, u.options), ie.addBox(this, u);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, r = t.length;
    if (t.sort((o, l) => o.index - l.index), r > e) {
      for (let o = e; o < r; ++o)
        this._destroyDatasetMeta(o);
      t.splice(e, r - e);
    }
    this._sortedMetasets = t.slice(0).sort(Sh("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((r, o) => {
      e.filter((l) => l === r._dataset).length === 0 && this._destroyDatasetMeta(o);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let r, o;
    for (this._removeUnreferencedMetasets(), r = 0, o = e.length; r < o; r++) {
      const l = e[r];
      let u = this.getDatasetMeta(r);
      const c = l.type || this.config.type;
      if (u.type && u.type !== c && (this._destroyDatasetMeta(r), u = this.getDatasetMeta(r)), u.type = c, u.indexAxis = l.indexAxis || Ja(c, this.options), u.order = l.order || 0, u.index = r, u.label = "" + l.label, u.visible = this.isDatasetVisible(r), u.controller)
        u.controller.updateIndex(r), u.controller.linkScales();
      else {
        const d = He.getController(c), { datasetElementType: p, dataElementType: m } = Rt.datasets[c];
        Object.assign(d, {
          dataElementType: He.getElement(m),
          datasetElementType: p && He.getElement(p)
        }), u.controller = new d(this, r), t.push(u.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    kt(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const r = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), o = this._animationsDisabled = !r.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const l = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let u = 0;
    for (let p = 0, m = this.data.datasets.length; p < m; p++) {
      const { controller: y } = this.getDatasetMeta(p), v = !o && l.indexOf(y) === -1;
      y.buildOrUpdateElements(v), u = Math.max(+y.getMaxOverflow(), u);
    }
    u = this._minPadding = r.layout.autoPadding ? u : 0, this._updateLayout(u), o || kt(l, (p) => {
      p.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Sh("z", "_idx"));
    const { _active: c, _lastEvent: d } = this;
    d ? this._eventHandler(d, !0) : c.length && this._updateHoverStyles(c, c, !0), this.render();
  }
  _updateScales() {
    kt(this.scales, (t) => {
      ie.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), r = new Set(t.events);
    (!Ad(e, r) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: r, start: o, count: l } of e) {
      const u = r === "_removeElements" ? -l : l;
      Ex(t, o, u);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, r = (l) => new Set(t.filter((u) => u[0] === l).map((u, c) => c + "," + u.splice(1).join(","))), o = r(0);
    for (let l = 1; l < e; l++)
      if (!Ad(o, r(l)))
        return;
    return Array.from(o).map((l) => l.split(",")).map((l) => ({
      method: l[1],
      start: +l[2],
      count: +l[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    ie.update(this, this.width, this.height, t);
    const e = this.chartArea, r = e.width <= 0 || e.height <= 0;
    this._layers = [], kt(this.boxes, (o) => {
      r && o.position === "chartArea" || (o.configure && o.configure(), this._layers.push(...o._layers()));
    }, this), this._layers.forEach((o, l) => {
      o._idx = l;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, r = this.data.datasets.length; e < r; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, r = this.data.datasets.length; e < r; ++e)
        this._updateDataset(e, Rn(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const r = this.getDatasetMeta(t), o = {
      meta: r,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", o) !== !1 && (r.controller._update(e), o.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", o));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (tn.has(this) ? this.attached && !tn.running(this) && tn.start(this) : (this.draw(), kh({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: r, height: o } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(r, o);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, r = [];
    let o, l;
    for (o = 0, l = e.length; o < l; ++o) {
      const u = e[o];
      (!t || u.visible) && r.push(u);
    }
    return r;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, o = Cp(this, t);
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (o && To(e, o), t.controller.draw(), o && Oo(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return on(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, r, o) {
    const l = Mv.modes[e];
    return typeof l == "function" ? l(this, t, r, o) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], r = this._metasets;
    let o = r.filter((l) => l && l._dataset === e).pop();
    return o || (o = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, r.push(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = An(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const r = this.getDatasetMeta(t);
    return typeof r.hidden == "boolean" ? !r.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const r = this.getDatasetMeta(t);
    r.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, r) {
    const o = r ? "show" : "hide", l = this.getDatasetMeta(t), u = l.controller._resolveAnimations(void 0, o);
    Bs(e) ? (l.data[e].hidden = !r, this.update()) : (this.setDatasetVisibility(t, r), u.update(l, {
      visible: r
    }), this.update((c) => c.datasetIndex === t ? o : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), tn.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Hd(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete xo[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, r = (l, u) => {
      e.addEventListener(this, l, u), t[l] = u;
    }, o = (l, u, c) => {
      l.offsetX = u, l.offsetY = c, this._eventHandler(l);
    };
    kt(this.options.events, (l) => r(l, o));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, r = (d, p) => {
      e.addEventListener(this, d, p), t[d] = p;
    }, o = (d, p) => {
      t[d] && (e.removeEventListener(this, d, p), delete t[d]);
    }, l = (d, p) => {
      this.canvas && this.resize(d, p);
    };
    let u;
    const c = () => {
      o("attach", c), this.attached = !0, this.resize(), r("resize", l), r("detach", u);
    };
    u = () => {
      this.attached = !1, o("resize", l), this._stop(), this._resize(0, 0), r("attach", c);
    }, e.isAttached(this.canvas) ? c() : u();
  }
  unbindEvents() {
    kt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, kt(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, r) {
    const o = r ? "set" : "remove";
    let l, u, c, d;
    for (e === "dataset" && (l = this.getDatasetMeta(t[0].datasetIndex), l.controller["_" + o + "DatasetHoverStyle"]()), c = 0, d = t.length; c < d; ++c) {
      u = t[c];
      const p = u && this.getDatasetMeta(u.datasetIndex).controller;
      p && p[o + "HoverStyle"](u.element, u.datasetIndex, u.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], r = t.map(({ datasetIndex: l, index: u }) => {
      const c = this.getDatasetMeta(l);
      if (!c)
        throw new Error("No dataset found at index " + l);
      return {
        datasetIndex: l,
        element: c.data[u],
        index: u
      };
    });
    !So(r, e) && (this._active = r, this._lastEvent = null, this._updateHoverStyles(r, e));
  }
  notifyPlugins(t, e, r) {
    return this._plugins.notify(this, t, e, r);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, r) {
    const o = this.options.hover, l = (d, p) => d.filter((m) => !p.some((y) => m.datasetIndex === y.datasetIndex && m.index === y.index)), u = l(e, t), c = r ? t : l(t, e);
    u.length && this.updateHoverStyle(u, o.mode, !1), c.length && o.mode && this.updateHoverStyle(c, o.mode, !0);
  }
  _eventHandler(t, e) {
    const r = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, o = (u) => (u.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", r, o) === !1)
      return;
    const l = this._handleEvent(t, e, r.inChartArea);
    return r.cancelable = !1, this.notifyPlugins("afterEvent", r, o), (l || r.changed) && this.render(), this;
  }
  _handleEvent(t, e, r) {
    const { _active: o = [], options: l } = this, u = e, c = this._getActiveElements(t, o, r, u), d = T0(t), p = Dx(t, this._lastEvent, r, d);
    r && (this._lastEvent = null, Ct(l.onHover, [
      t,
      c,
      this
    ], this), d && Ct(l.onClick, [
      t,
      c,
      this
    ], this));
    const m = !So(c, o);
    return (m || e) && (this._active = c, this._updateHoverStyles(c, o, e)), this._lastEvent = p, m;
  }
  _getActiveElements(t, e, r, o) {
    if (t.type === "mouseout")
      return [];
    if (!r)
      return e;
    const l = this.options.hover;
    return this.getElementsAtEventForMode(t, l.mode, l, o);
  }
}
function bh() {
  return kt(wu.instances, (i) => i._plugins.invalidate());
}
function Tx(i, t, e) {
  const { startAngle: r, x: o, y: l, outerRadius: u, innerRadius: c, options: d } = t, { borderWidth: p, borderJoinStyle: m } = d, y = Math.min(p / u, ne(r - e));
  if (i.beginPath(), i.arc(o, l, u - p / 2, r + y / 2, e - y / 2), c > 0) {
    const v = Math.min(p / c, ne(r - e));
    i.arc(o, l, c + p / 2, e - v / 2, r + v / 2, !0);
  } else {
    const v = Math.min(p / 2, u * ne(r - e));
    if (m === "round")
      i.arc(o, l, v, e - vt / 2, r + vt / 2, !0);
    else if (m === "bevel") {
      const _ = 2 * v * v, k = -_ * Math.cos(e + vt / 2) + o, S = -_ * Math.sin(e + vt / 2) + l, b = _ * Math.cos(r + vt / 2) + o, E = _ * Math.sin(r + vt / 2) + l;
      i.lineTo(k, S), i.lineTo(b, E);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Ox(i, t, e) {
  const { startAngle: r, pixelMargin: o, x: l, y: u, outerRadius: c, innerRadius: d } = t;
  let p = o / c;
  i.beginPath(), i.arc(l, u, c, r - p, e + p), d > o ? (p = o / d, i.arc(l, u, d, e + p, r - p, !0)) : i.arc(l, u, o, e + Vt, r - Vt), i.closePath(), i.clip();
}
function Lx(i) {
  return gu(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Rx(i, t, e, r) {
  const o = Lx(i.options.borderRadius), l = (e - t) / 2, u = Math.min(l, r * t / 2), c = (d) => {
    const p = (e - Math.min(l, d)) * r / 2;
    return Kt(d, 0, Math.min(l, p));
  };
  return {
    outerStart: c(o.outerStart),
    outerEnd: c(o.outerEnd),
    innerStart: Kt(o.innerStart, 0, u),
    innerEnd: Kt(o.innerEnd, 0, u)
  };
}
function Li(i, t, e, r) {
  return {
    x: e + i * Math.cos(t),
    y: r + i * Math.sin(t)
  };
}
function Po(i, t, e, r, o, l) {
  const { x: u, y: c, startAngle: d, pixelMargin: p, innerRadius: m } = t, y = Math.max(t.outerRadius + r + e - p, 0), v = m > 0 ? m + r + e + p : 0;
  let _ = 0;
  const k = o - d;
  if (r) {
    const ct = m > 0 ? m - r : 0, ft = y > 0 ? y - r : 0, lt = (ct + ft) / 2, U = lt !== 0 ? k * lt / (lt + r) : k;
    _ = (k - U) / 2;
  }
  const S = Math.max(1e-3, k * y - e / vt) / y, b = (k - S) / 2, E = d + b + _, L = o - b - _, { outerStart: z, outerEnd: A, innerStart: R, innerEnd: V } = Rx(t, v, y, L - E), j = y - z, H = y - A, Z = E + z / j, et = L - A / H, nt = v + R, st = v + V, xt = E + R / nt, Mt = L - V / st;
  if (i.beginPath(), l) {
    const ct = (Z + et) / 2;
    if (i.arc(u, c, y, Z, ct), i.arc(u, c, y, ct, et), A > 0) {
      const X = Li(H, et, u, c);
      i.arc(X.x, X.y, A, et, L + Vt);
    }
    const ft = Li(st, L, u, c);
    if (i.lineTo(ft.x, ft.y), V > 0) {
      const X = Li(st, Mt, u, c);
      i.arc(X.x, X.y, V, L + Vt, Mt + Math.PI);
    }
    const lt = (L - V / v + (E + R / v)) / 2;
    if (i.arc(u, c, v, L - V / v, lt, !0), i.arc(u, c, v, lt, E + R / v, !0), R > 0) {
      const X = Li(nt, xt, u, c);
      i.arc(X.x, X.y, R, xt + Math.PI, E - Vt);
    }
    const U = Li(j, E, u, c);
    if (i.lineTo(U.x, U.y), z > 0) {
      const X = Li(j, Z, u, c);
      i.arc(X.x, X.y, z, E - Vt, Z);
    }
  } else {
    i.moveTo(u, c);
    const ct = Math.cos(Z) * y + u, ft = Math.sin(Z) * y + c;
    i.lineTo(ct, ft);
    const lt = Math.cos(et) * y + u, U = Math.sin(et) * y + c;
    i.lineTo(lt, U);
  }
  i.closePath();
}
function Ax(i, t, e, r, o) {
  const { fullCircles: l, startAngle: u, circumference: c } = t;
  let d = t.endAngle;
  if (l) {
    Po(i, t, e, r, d, o);
    for (let p = 0; p < l; ++p)
      i.fill();
    isNaN(c) || (d = u + (c % Dt || Dt));
  }
  return Po(i, t, e, r, d, o), i.fill(), d;
}
function zx(i, t, e, r, o) {
  const { fullCircles: l, startAngle: u, circumference: c, options: d } = t, { borderWidth: p, borderJoinStyle: m, borderDash: y, borderDashOffset: v, borderRadius: _ } = d, k = d.borderAlign === "inner";
  if (!p)
    return;
  i.setLineDash(y || []), i.lineDashOffset = v, k ? (i.lineWidth = p * 2, i.lineJoin = m || "round") : (i.lineWidth = p, i.lineJoin = m || "bevel");
  let S = t.endAngle;
  if (l) {
    Po(i, t, e, r, S, o);
    for (let b = 0; b < l; ++b)
      i.stroke();
    isNaN(c) || (S = u + (c % Dt || Dt));
  }
  k && Ox(i, t, S), d.selfJoin && S - u >= vt && _ === 0 && m !== "miter" && Tx(i, t, S), l || (Po(i, t, e, r, S, o), i.stroke());
}
class Fx extends ln {
  static id = "arc";
  static defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash"
  };
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, r) {
    const o = this.getProps([
      "x",
      "y"
    ], r), { angle: l, distance: u } = sp(o, {
      x: t,
      y: e
    }), { startAngle: c, endAngle: d, innerRadius: p, outerRadius: m, circumference: y } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], r), v = (this.options.spacing + this.options.borderWidth) / 2, _ = at(y, d - c), k = Vs(l, c, d) && c !== d, S = _ >= Dt || k, b = sn(u, p + v, m + v);
    return S && b;
  }
  getCenterPoint(t) {
    const { x: e, y: r, startAngle: o, endAngle: l, innerRadius: u, outerRadius: c } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: d, spacing: p } = this.options, m = (o + l) / 2, y = (u + c + p + d) / 2;
    return {
      x: e + Math.cos(m) * y,
      y: r + Math.sin(m) * y
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: r } = this, o = (e.offset || 0) / 4, l = (e.spacing || 0) / 2, u = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = r > Dt ? Math.floor(r / Dt) : 0, r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const c = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(c) * o, Math.sin(c) * o);
    const d = 1 - Math.sin(Math.min(vt, r || 0)), p = o * d;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Ax(t, this, p, l, u), zx(t, this, p, l, u), t.restore();
  }
}
function Bp(i, t, e = t) {
  i.lineCap = at(e.borderCapStyle, t.borderCapStyle), i.setLineDash(at(e.borderDash, t.borderDash)), i.lineDashOffset = at(e.borderDashOffset, t.borderDashOffset), i.lineJoin = at(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = at(e.borderWidth, t.borderWidth), i.strokeStyle = at(e.borderColor, t.borderColor);
}
function Ix(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Nx(i) {
  return i.stepped ? J0 : i.tension || i.cubicInterpolationMode === "monotone" ? ty : Ix;
}
function Vp(i, t, e = {}) {
  const r = i.length, { start: o = 0, end: l = r - 1 } = e, { start: u, end: c } = t, d = Math.max(o, u), p = Math.min(l, c), m = o < u && l < u || o > c && l > c;
  return {
    count: r,
    start: d,
    loop: t.loop,
    ilen: p < d && !m ? r + p - d : p - d
  };
}
function Bx(i, t, e, r) {
  const { points: o, options: l } = t, { count: u, start: c, loop: d, ilen: p } = Vp(o, e, r), m = Nx(l);
  let { move: y = !0, reverse: v } = r || {}, _, k, S;
  for (_ = 0; _ <= p; ++_)
    k = o[(c + (v ? p - _ : _)) % u], !k.skip && (y ? (i.moveTo(k.x, k.y), y = !1) : m(i, S, k, v, l.stepped), S = k);
  return d && (k = o[(c + (v ? p : 0)) % u], m(i, S, k, v, l.stepped)), !!d;
}
function Vx(i, t, e, r) {
  const o = t.points, { count: l, start: u, ilen: c } = Vp(o, e, r), { move: d = !0, reverse: p } = r || {};
  let m = 0, y = 0, v, _, k, S, b, E;
  const L = (A) => (u + (p ? c - A : A)) % l, z = () => {
    S !== b && (i.lineTo(m, b), i.lineTo(m, S), i.lineTo(m, E));
  };
  for (d && (_ = o[L(0)], i.moveTo(_.x, _.y)), v = 0; v <= c; ++v) {
    if (_ = o[L(v)], _.skip)
      continue;
    const A = _.x, R = _.y, V = A | 0;
    V === k ? (R < S ? S = R : R > b && (b = R), m = (y * m + A) / ++y) : (z(), i.lineTo(A, R), k = V, y = 0, S = b = R), E = R;
  }
  z();
}
function eu(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Vx : Bx;
}
function jx(i) {
  return i.stepped ? Ly : i.tension || i.cubicInterpolationMode === "monotone" ? Ry : ti;
}
function Wx(i, t, e, r) {
  let o = t._path;
  o || (o = t._path = new Path2D(), t.path(o, e, r) && o.closePath()), Bp(i, t.options), i.stroke(o);
}
function Hx(i, t, e, r) {
  const { segments: o, options: l } = t, u = eu(t);
  for (const c of o)
    Bp(i, l, c.style), i.beginPath(), u(i, t, c, {
      start: e,
      end: e + r - 1
    }) && i.closePath(), i.stroke();
}
const Ux = typeof Path2D == "function";
function $x(i, t, e, r) {
  Ux && !t.options.segment ? Wx(i, t, e, r) : Hx(i, t, e, r);
}
class Ao extends ln {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill"
  };
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const r = this.options;
    if ((r.tension || r.cubicInterpolationMode === "monotone") && !r.stepped && !this._pointsUpdated) {
      const o = r.spanGaps ? this._loop : this._fullLoop;
      by(this._points, r, t, o, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = By(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, r = t.length;
    return r && e[t[r - 1].end];
  }
  interpolate(t, e) {
    const r = this.options, o = t[e], l = this.points, u = bp(this, {
      property: e,
      start: o,
      end: o
    });
    if (!u.length)
      return;
    const c = [], d = jx(r);
    let p, m;
    for (p = 0, m = u.length; p < m; ++p) {
      const { start: y, end: v } = u[p], _ = l[y], k = l[v];
      if (_ === k) {
        c.push(_);
        continue;
      }
      const S = Math.abs((o - _[e]) / (k[e] - _[e])), b = d(_, k, S, r.stepped);
      b[e] = t[e], c.push(b);
    }
    return c.length === 1 ? c[0] : c;
  }
  pathSegment(t, e, r) {
    return eu(this)(t, this, e, r);
  }
  path(t, e, r) {
    const o = this.segments, l = eu(this);
    let u = this._loop;
    e = e || 0, r = r || this.points.length - e;
    for (const c of o)
      u &= l(t, this, c, {
        start: e,
        end: e + r - 1
      });
    return !!u;
  }
  draw(t, e, r, o) {
    const l = this.options || {};
    (this.points || []).length && l.borderWidth && (t.save(), $x(t, this, r, o), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function Ch(i, t, e, r) {
  const o = i.options, { [e]: l } = i.getProps([
    e
  ], r);
  return Math.abs(t - l) < o.radius + o.hitRadius;
}
class Yx extends ln {
  static id = "point";
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, r) {
    const o = this.options, { x: l, y: u } = this.getProps([
      "x",
      "y"
    ], r);
    return Math.pow(t - l, 2) + Math.pow(e - u, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(t, e) {
    return Ch(this, t, "x", e);
  }
  inYRange(t, e) {
    return Ch(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: r } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: r
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const r = e && t.borderWidth || 0;
    return (e + r) * 2;
  }
  draw(t, e) {
    const r = this.options;
    this.skip || r.radius < 0.1 || !on(this, e, this.size(r) / 2) || (t.strokeStyle = r.borderColor, t.lineWidth = r.borderWidth, t.fillStyle = r.backgroundColor, qa(t, r, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function jp(i, t) {
  const { x: e, y: r, base: o, width: l, height: u } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let c, d, p, m, y;
  return i.horizontal ? (y = u / 2, c = Math.min(e, o), d = Math.max(e, o), p = r - y, m = r + y) : (y = l / 2, c = e - y, d = e + y, p = Math.min(r, o), m = Math.max(r, o)), {
    left: c,
    top: p,
    right: d,
    bottom: m
  };
}
function Tn(i, t, e, r) {
  return i ? 0 : Kt(t, e, r);
}
function Xx(i, t, e) {
  const r = i.options.borderWidth, o = i.borderSkipped, l = hp(r);
  return {
    t: Tn(o.top, l.top, 0, e),
    r: Tn(o.right, l.right, 0, t),
    b: Tn(o.bottom, l.bottom, 0, e),
    l: Tn(o.left, l.left, 0, t)
  };
}
function Kx(i, t, e) {
  const { enableBorderRadius: r } = i.getProps([
    "enableBorderRadius"
  ]), o = i.options.borderRadius, l = ei(o), u = Math.min(t, e), c = i.borderSkipped, d = r || gt(o);
  return {
    topLeft: Tn(!d || c.top || c.left, l.topLeft, 0, u),
    topRight: Tn(!d || c.top || c.right, l.topRight, 0, u),
    bottomLeft: Tn(!d || c.bottom || c.left, l.bottomLeft, 0, u),
    bottomRight: Tn(!d || c.bottom || c.right, l.bottomRight, 0, u)
  };
}
function Qx(i) {
  const t = jp(i), e = t.right - t.left, r = t.bottom - t.top, o = Xx(i, e / 2, r / 2), l = Kx(i, e / 2, r / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: r,
      radius: l
    },
    inner: {
      x: t.left + o.l,
      y: t.top + o.t,
      w: e - o.l - o.r,
      h: r - o.t - o.b,
      radius: {
        topLeft: Math.max(0, l.topLeft - Math.max(o.t, o.l)),
        topRight: Math.max(0, l.topRight - Math.max(o.t, o.r)),
        bottomLeft: Math.max(0, l.bottomLeft - Math.max(o.b, o.l)),
        bottomRight: Math.max(0, l.bottomRight - Math.max(o.b, o.r))
      }
    }
  };
}
function $a(i, t, e, r) {
  const o = t === null, l = e === null, c = i && !(o && l) && jp(i, r);
  return c && (o || sn(t, c.left, c.right)) && (l || sn(e, c.top, c.bottom));
}
function Gx(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Zx(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Ya(i, t, e = {}) {
  const r = i.x !== e.x ? -t : 0, o = i.y !== e.y ? -t : 0, l = (i.x + i.w !== e.x + e.w ? t : 0) - r, u = (i.y + i.h !== e.y + e.h ? t : 0) - o;
  return {
    x: i.x + r,
    y: i.y + o,
    w: i.w + l,
    h: i.h + u,
    radius: i.radius
  };
}
class qx extends ln {
  static id = "bar";
  static defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: r, backgroundColor: o } } = this, { inner: l, outer: u } = Qx(this), c = Gx(u.radius) ? js : Zx;
    t.save(), (u.w !== l.w || u.h !== l.h) && (t.beginPath(), c(t, Ya(u, e, l)), t.clip(), c(t, Ya(l, -e, u)), t.fillStyle = r, t.fill("evenodd")), t.beginPath(), c(t, Ya(l, e)), t.fillStyle = o, t.fill(), t.restore();
  }
  inRange(t, e, r) {
    return $a(this, t, e, r);
  }
  inXRange(t, e) {
    return $a(this, t, null, e);
  }
  inYRange(t, e) {
    return $a(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: r, base: o, horizontal: l } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: l ? (e + o) / 2 : e,
      y: l ? r : (r + o) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
var Jx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: Fx,
  BarElement: qx,
  LineElement: Ao,
  PointElement: Yx
});
const nu = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Mh = /* @__PURE__ */ nu.map((i) => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Wp(i) {
  return nu[i % nu.length];
}
function Hp(i) {
  return Mh[i % Mh.length];
}
function t_(i, t) {
  return i.borderColor = Wp(t), i.backgroundColor = Hp(t), ++t;
}
function e_(i, t) {
  return i.backgroundColor = i.data.map(() => Wp(t++)), t;
}
function n_(i, t) {
  return i.backgroundColor = i.data.map(() => Hp(t++)), t;
}
function i_(i) {
  let t = 0;
  return (e, r) => {
    const o = i.getDatasetMeta(r).controller;
    o instanceof Su ? t = e_(e, t) : o instanceof Dp ? t = n_(e, t) : o && (t = t_(e, t));
  };
}
function Ph(i) {
  let t;
  for (t in i)
    if (i[t].borderColor || i[t].backgroundColor)
      return !0;
  return !1;
}
function s_(i) {
  return i && (i.borderColor || i.backgroundColor);
}
function r_() {
  return Rt.borderColor !== "rgba(0,0,0,0.1)" || Rt.backgroundColor !== "rgba(0,0,0,0.1)";
}
var o_ = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(i, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: r }, options: o } = i.config, { elements: l } = o, u = Ph(r) || s_(o) || l && Ph(l) || r_();
    if (!e.forceOverride && u)
      return;
    const c = i_(i);
    r.forEach(c);
  }
};
function l_(i, t, e, r, o) {
  const l = o.samples || r;
  if (l >= e)
    return i.slice(t, t + e);
  const u = [], c = (e - 2) / (l - 2);
  let d = 0;
  const p = t + e - 1;
  let m = t, y, v, _, k, S;
  for (u[d++] = i[m], y = 0; y < l - 2; y++) {
    let b = 0, E = 0, L;
    const z = Math.floor((y + 1) * c) + 1 + t, A = Math.min(Math.floor((y + 2) * c) + 1, e) + t, R = A - z;
    for (L = z; L < A; L++)
      b += i[L].x, E += i[L].y;
    b /= R, E /= R;
    const V = Math.floor(y * c) + 1 + t, j = Math.min(Math.floor((y + 1) * c) + 1, e) + t, { x: H, y: Z } = i[m];
    for (_ = k = -1, L = V; L < j; L++)
      k = 0.5 * Math.abs((H - b) * (i[L].y - Z) - (H - i[L].x) * (E - Z)), k > _ && (_ = k, v = i[L], S = L);
    u[d++] = v, m = S;
  }
  return u[d++] = i[p], u;
}
function a_(i, t, e, r) {
  let o = 0, l = 0, u, c, d, p, m, y, v, _, k, S;
  const b = [], E = t + e - 1, L = i[t].x, A = i[E].x - L;
  for (u = t; u < t + e; ++u) {
    c = i[u], d = (c.x - L) / A * r, p = c.y;
    const R = d | 0;
    if (R === m)
      p < k ? (k = p, y = u) : p > S && (S = p, v = u), o = (l * o + c.x) / ++l;
    else {
      const V = u - 1;
      if (!pt(y) && !pt(v)) {
        const j = Math.min(y, v), H = Math.max(y, v);
        j !== _ && j !== V && b.push({
          ...i[j],
          x: o
        }), H !== _ && H !== V && b.push({
          ...i[H],
          x: o
        });
      }
      u > 0 && V !== _ && b.push(i[V]), b.push(c), m = R, l = 0, k = S = p, y = v = _ = u;
    }
  }
  return b;
}
function Up(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  }
}
function Eh(i) {
  i.data.datasets.forEach((t) => {
    Up(t);
  });
}
function u_(i, t) {
  const e = t.length;
  let r = 0, o;
  const { iScale: l } = i, { min: u, max: c, minDefined: d, maxDefined: p } = l.getUserBounds();
  return d && (r = Kt(rn(t, l.axis, u).lo, 0, e - 1)), p ? o = Kt(rn(t, l.axis, c).hi + 1, r, e) - r : o = e - r, {
    start: r,
    count: o
  };
}
var c_ = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      Eh(i);
      return;
    }
    const r = i.width;
    i.data.datasets.forEach((o, l) => {
      const { _data: u, indexAxis: c } = o, d = i.getDatasetMeta(l), p = u || o.data;
      if (Ds([
        c,
        i.options.indexAxis
      ]) === "y" || !d.controller.supportsDecimation)
        return;
      const m = i.scales[d.xAxisID];
      if (m.type !== "linear" && m.type !== "time" || i.options.parsing)
        return;
      let { start: y, count: v } = u_(d, p);
      const _ = e.threshold || 4 * r;
      if (v <= _) {
        Up(o);
        return;
      }
      pt(u) && (o._data = p, delete o.data, Object.defineProperty(o, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(S) {
          this._data = S;
        }
      }));
      let k;
      switch (e.algorithm) {
        case "lttb":
          k = l_(p, y, v, r, e);
          break;
        case "min-max":
          k = a_(p, y, v, r);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      o._decimated = k;
    });
  },
  destroy(i) {
    Eh(i);
  }
};
function f_(i, t, e) {
  const r = i.segments, o = i.points, l = t.points, u = [];
  for (const c of r) {
    let { start: d, end: p } = c;
    p = zo(d, p, o);
    const m = iu(e, o[d], o[p], c.loop);
    if (!t.segments) {
      u.push({
        source: c,
        target: m,
        start: o[d],
        end: o[p]
      });
      continue;
    }
    const y = bp(t, m);
    for (const v of y) {
      const _ = iu(e, l[v.start], l[v.end], v.loop), k = wp(c, o, _);
      for (const S of k)
        u.push({
          source: S,
          target: v,
          start: {
            [e]: Dh(m, _, "start", Math.max)
          },
          end: {
            [e]: Dh(m, _, "end", Math.min)
          }
        });
    }
  }
  return u;
}
function iu(i, t, e, r) {
  if (r)
    return;
  let o = t[i], l = e[i];
  return i === "angle" && (o = ne(o), l = ne(l)), {
    property: i,
    start: o,
    end: l
  };
}
function d_(i, t) {
  const { x: e = null, y: r = null } = i || {}, o = t.points, l = [];
  return t.segments.forEach(({ start: u, end: c }) => {
    c = zo(u, c, o);
    const d = o[u], p = o[c];
    r !== null ? (l.push({
      x: d.x,
      y: r
    }), l.push({
      x: p.x,
      y: r
    })) : e !== null && (l.push({
      x: e,
      y: d.y
    }), l.push({
      x: e,
      y: p.y
    }));
  }), l;
}
function zo(i, t, e) {
  for (; t > i; t--) {
    const r = e[t];
    if (!isNaN(r.x) && !isNaN(r.y))
      break;
  }
  return t;
}
function Dh(i, t, e, r) {
  return i && t ? r(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function $p(i, t) {
  let e = [], r = !1;
  return Lt(i) ? (r = !0, e = i) : e = d_(i, t), e.length ? new Ao({
    points: e,
    options: {
      tension: 0
    },
    _loop: r,
    _fullLoop: r
  }) : null;
}
function Th(i) {
  return i && i.fill !== !1;
}
function h_(i, t, e) {
  let o = i[t].fill;
  const l = [
    t
  ];
  let u;
  if (!e)
    return o;
  for (; o !== !1 && l.indexOf(o) === -1; ) {
    if (!It(o))
      return o;
    if (u = i[o], !u)
      return !1;
    if (u.visible)
      return o;
    l.push(o), o = u.fill;
  }
  return !1;
}
function p_(i, t, e) {
  const r = v_(i);
  if (gt(r))
    return isNaN(r.value) ? !1 : r;
  let o = parseFloat(r);
  return It(o) && Math.floor(o) === o ? g_(r[0], t, o, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(r) >= 0 && r;
}
function g_(i, t, e, r) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= r ? !1 : e;
}
function m_(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : gt(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function y_(i, t, e) {
  let r;
  return i === "start" ? r = e : i === "end" ? r = t.options.reverse ? t.min : t.max : gt(i) ? r = i.value : r = t.getBaseValue(), r;
}
function v_(i) {
  const t = i.options, e = t.fill;
  let r = at(e && e.target, e);
  return r === void 0 && (r = !!t.backgroundColor), r === !1 || r === null ? !1 : r === !0 ? "origin" : r;
}
function x_(i) {
  const { scale: t, index: e, line: r } = i, o = [], l = r.segments, u = r.points, c = __(t, e);
  c.push($p({
    x: null,
    y: t.bottom
  }, r));
  for (let d = 0; d < l.length; d++) {
    const p = l[d];
    for (let m = p.start; m <= p.end; m++)
      S_(o, u[m], c);
  }
  return new Ao({
    points: o,
    options: {}
  });
}
function __(i, t) {
  const e = [], r = i.getMatchingVisibleMetas("line");
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    if (l.index === t)
      break;
    l.hidden || e.unshift(l.dataset);
  }
  return e;
}
function S_(i, t, e) {
  const r = [];
  for (let o = 0; o < e.length; o++) {
    const l = e[o], { first: u, last: c, point: d } = k_(l, t, "x");
    if (!(!d || u && c)) {
      if (u)
        r.unshift(d);
      else if (i.push(d), !c)
        break;
    }
  }
  i.push(...r);
}
function k_(i, t, e) {
  const r = i.interpolate(t, e);
  if (!r)
    return {};
  const o = r[e], l = i.segments, u = i.points;
  let c = !1, d = !1;
  for (let p = 0; p < l.length; p++) {
    const m = l[p], y = u[m.start][e], v = u[m.end][e];
    if (sn(o, y, v)) {
      c = o === y, d = o === v;
      break;
    }
  }
  return {
    first: c,
    last: d,
    point: r
  };
}
class Yp {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, r) {
    const { x: o, y: l, radius: u } = this;
    return e = e || {
      start: 0,
      end: Dt
    }, t.arc(o, l, u, e.end, e.start, !0), !r.bounds;
  }
  interpolate(t) {
    const { x: e, y: r, radius: o } = this, l = t.angle;
    return {
      x: e + Math.cos(l) * o,
      y: r + Math.sin(l) * o,
      angle: l
    };
  }
}
function w_(i) {
  const { chart: t, fill: e, line: r } = i;
  if (It(e))
    return b_(t, e);
  if (e === "stack")
    return x_(i);
  if (e === "shape")
    return !0;
  const o = C_(i);
  return o instanceof Yp ? o : $p(o, r);
}
function b_(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function C_(i) {
  return (i.scale || {}).getPointPositionForValue ? P_(i) : M_(i);
}
function M_(i) {
  const { scale: t = {}, fill: e } = i, r = m_(e, t);
  if (It(r)) {
    const o = t.isHorizontal();
    return {
      x: o ? r : null,
      y: o ? null : r
    };
  }
  return null;
}
function P_(i) {
  const { scale: t, fill: e } = i, r = t.options, o = t.getLabels().length, l = r.reverse ? t.max : t.min, u = y_(e, t, l), c = [];
  if (r.grid.circular) {
    const d = t.getPointPositionForValue(0, l);
    return new Yp({
      x: d.x,
      y: d.y,
      radius: t.getDistanceFromCenterForValue(u)
    });
  }
  for (let d = 0; d < o; ++d)
    c.push(t.getPointPositionForValue(d, u));
  return c;
}
function Xa(i, t, e) {
  const r = w_(t), { chart: o, index: l, line: u, scale: c, axis: d } = t, p = u.options, m = p.fill, y = p.backgroundColor, { above: v = y, below: _ = y } = m || {}, k = o.getDatasetMeta(l), S = Cp(o, k);
  r && u.points.length && (To(i, e), E_(i, {
    line: u,
    target: r,
    above: v,
    below: _,
    area: e,
    scale: c,
    axis: d,
    clip: S
  }), Oo(i));
}
function E_(i, t) {
  const { line: e, target: r, above: o, below: l, area: u, scale: c, clip: d } = t, p = e._loop ? "angle" : t.axis;
  i.save();
  let m = l;
  l !== o && (p === "x" ? (Oh(i, r, u.top), Ka(i, {
    line: e,
    target: r,
    color: o,
    scale: c,
    property: p,
    clip: d
  }), i.restore(), i.save(), Oh(i, r, u.bottom)) : p === "y" && (Lh(i, r, u.left), Ka(i, {
    line: e,
    target: r,
    color: l,
    scale: c,
    property: p,
    clip: d
  }), i.restore(), i.save(), Lh(i, r, u.right), m = o)), Ka(i, {
    line: e,
    target: r,
    color: m,
    scale: c,
    property: p,
    clip: d
  }), i.restore();
}
function Oh(i, t, e) {
  const { segments: r, points: o } = t;
  let l = !0, u = !1;
  i.beginPath();
  for (const c of r) {
    const { start: d, end: p } = c, m = o[d], y = o[zo(d, p, o)];
    l ? (i.moveTo(m.x, m.y), l = !1) : (i.lineTo(m.x, e), i.lineTo(m.x, m.y)), u = !!t.pathSegment(i, c, {
      move: u
    }), u ? i.closePath() : i.lineTo(y.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Lh(i, t, e) {
  const { segments: r, points: o } = t;
  let l = !0, u = !1;
  i.beginPath();
  for (const c of r) {
    const { start: d, end: p } = c, m = o[d], y = o[zo(d, p, o)];
    l ? (i.moveTo(m.x, m.y), l = !1) : (i.lineTo(e, m.y), i.lineTo(m.x, m.y)), u = !!t.pathSegment(i, c, {
      move: u
    }), u ? i.closePath() : i.lineTo(e, y.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function Ka(i, t) {
  const { line: e, target: r, property: o, color: l, scale: u, clip: c } = t, d = f_(e, r, o);
  for (const { source: p, target: m, start: y, end: v } of d) {
    const { style: { backgroundColor: _ = l } = {} } = p, k = r !== !0;
    i.save(), i.fillStyle = _, D_(i, u, c, k && iu(o, y, v)), i.beginPath();
    const S = !!e.pathSegment(i, p);
    let b;
    if (k) {
      S ? i.closePath() : Rh(i, r, v, o);
      const E = !!r.pathSegment(i, m, {
        move: S,
        reverse: !0
      });
      b = S && E, b || Rh(i, r, y, o);
    }
    i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore();
  }
}
function D_(i, t, e, r) {
  const o = t.chart.chartArea, { property: l, start: u, end: c } = r || {};
  if (l === "x" || l === "y") {
    let d, p, m, y;
    l === "x" ? (d = u, p = o.top, m = c, y = o.bottom) : (d = o.left, p = u, m = o.right, y = c), i.beginPath(), e && (d = Math.max(d, e.left), m = Math.min(m, e.right), p = Math.max(p, e.top), y = Math.min(y, e.bottom)), i.rect(d, p, m - d, y - p), i.clip();
  }
}
function Rh(i, t, e, r) {
  const o = t.interpolate(e, r);
  o && i.lineTo(o.x, o.y);
}
var T_ = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const r = (i.data.datasets || []).length, o = [];
    let l, u, c, d;
    for (u = 0; u < r; ++u)
      l = i.getDatasetMeta(u), c = l.dataset, d = null, c && c.options && c instanceof Ao && (d = {
        visible: i.isDatasetVisible(u),
        index: u,
        fill: p_(c, u, r),
        chart: i,
        axis: l.controller.options.indexAxis,
        scale: l.vScale,
        line: c
      }), l.$filler = d, o.push(d);
    for (u = 0; u < r; ++u)
      d = o[u], !(!d || d.fill === !1) && (d.fill = h_(o, u, e.propagate));
  },
  beforeDraw(i, t, e) {
    const r = e.drawTime === "beforeDraw", o = i.getSortedVisibleDatasetMetas(), l = i.chartArea;
    for (let u = o.length - 1; u >= 0; --u) {
      const c = o[u].$filler;
      c && (c.line.updateControlPoints(l, c.axis), r && c.fill && Xa(i.ctx, c, l));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const r = i.getSortedVisibleDatasetMetas();
    for (let o = r.length - 1; o >= 0; --o) {
      const l = r[o].$filler;
      Th(l) && Xa(i.ctx, l, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const r = t.meta.$filler;
    !Th(r) || e.drawTime !== "beforeDatasetDraw" || Xa(i.ctx, r, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Ah = (i, t) => {
  let { boxHeight: e = t, boxWidth: r = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), r = i.pointStyleWidth || Math.min(r, t)), {
    boxWidth: r,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, O_ = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class zh extends ln {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, r) {
    this.maxWidth = t, this.maxHeight = e, this._margins = r, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = Ct(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((r) => t.filter(r, this.chart.data))), t.sort && (e = e.sort((r, o) => t.sort(r, o, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const r = t.labels, o = Ut(r.font), l = o.size, u = this._computeTitleHeight(), { boxWidth: c, itemHeight: d } = Ah(r, l);
    let p, m;
    e.font = o.string, this.isHorizontal() ? (p = this.maxWidth, m = this._fitRows(u, l, c, d) + 10) : (m = this.maxHeight, p = this._fitCols(u, o, c, d) + 10), this.width = Math.min(p, t.maxWidth || this.maxWidth), this.height = Math.min(m, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, r, o) {
    const { ctx: l, maxWidth: u, options: { labels: { padding: c } } } = this, d = this.legendHitBoxes = [], p = this.lineWidths = [
      0
    ], m = o + c;
    let y = t;
    l.textAlign = "left", l.textBaseline = "middle";
    let v = -1, _ = -m;
    return this.legendItems.forEach((k, S) => {
      const b = r + e / 2 + l.measureText(k.text).width;
      (S === 0 || p[p.length - 1] + b + 2 * c > u) && (y += m, p[p.length - (S > 0 ? 0 : 1)] = 0, _ += m, v++), d[S] = {
        left: 0,
        top: _,
        row: v,
        width: b,
        height: o
      }, p[p.length - 1] += b + c;
    }), y;
  }
  _fitCols(t, e, r, o) {
    const { ctx: l, maxHeight: u, options: { labels: { padding: c } } } = this, d = this.legendHitBoxes = [], p = this.columnSizes = [], m = u - t;
    let y = c, v = 0, _ = 0, k = 0, S = 0;
    return this.legendItems.forEach((b, E) => {
      const { itemWidth: L, itemHeight: z } = L_(r, e, l, b, o);
      E > 0 && _ + z + 2 * c > m && (y += v + c, p.push({
        width: v,
        height: _
      }), k += v + c, S++, v = _ = 0), d[E] = {
        left: k,
        top: _,
        col: S,
        width: L,
        height: z
      }, v = Math.max(v, L), _ += z + c;
    }), y += v, p.push({
      width: v,
      height: _
    }), y;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: r, labels: { padding: o }, rtl: l } } = this, u = Ri(l, this.left, this.width);
    if (this.isHorizontal()) {
      let c = 0, d = ee(r, this.left + o, this.right - this.lineWidths[c]);
      for (const p of e)
        c !== p.row && (c = p.row, d = ee(r, this.left + o, this.right - this.lineWidths[c])), p.top += this.top + t + o, p.left = u.leftForLtr(u.x(d), p.width), d += p.width + o;
    } else {
      let c = 0, d = ee(r, this.top + t + o, this.bottom - this.columnSizes[c].height);
      for (const p of e)
        p.col !== c && (c = p.col, d = ee(r, this.top + t + o, this.bottom - this.columnSizes[c].height)), p.top = d, p.left += this.left + o, p.left = u.leftForLtr(u.x(p.left), p.width), d += p.height + o;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      To(t, this), this._draw(), Oo(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: r, ctx: o } = this, { align: l, labels: u } = t, c = Rt.color, d = Ri(t.rtl, this.left, this.width), p = Ut(u.font), { padding: m } = u, y = p.size, v = y / 2;
    let _;
    this.drawTitle(), o.textAlign = d.textAlign("left"), o.textBaseline = "middle", o.lineWidth = 0.5, o.font = p.string;
    const { boxWidth: k, boxHeight: S, itemHeight: b } = Ah(u, y), E = function(V, j, H) {
      if (isNaN(k) || k <= 0 || isNaN(S) || S < 0)
        return;
      o.save();
      const Z = at(H.lineWidth, 1);
      if (o.fillStyle = at(H.fillStyle, c), o.lineCap = at(H.lineCap, "butt"), o.lineDashOffset = at(H.lineDashOffset, 0), o.lineJoin = at(H.lineJoin, "miter"), o.lineWidth = Z, o.strokeStyle = at(H.strokeStyle, c), o.setLineDash(at(H.lineDash, [])), u.usePointStyle) {
        const et = {
          radius: S * Math.SQRT2 / 2,
          pointStyle: H.pointStyle,
          rotation: H.rotation,
          borderWidth: Z
        }, nt = d.xPlus(V, k / 2), st = j + v;
        dp(o, et, nt, st, u.pointStyleWidth && k);
      } else {
        const et = j + Math.max((y - S) / 2, 0), nt = d.leftForLtr(V, k), st = ei(H.borderRadius);
        o.beginPath(), Object.values(st).some((xt) => xt !== 0) ? js(o, {
          x: nt,
          y: et,
          w: k,
          h: S,
          radius: st
        }) : o.rect(nt, et, k, S), o.fill(), Z !== 0 && o.stroke();
      }
      o.restore();
    }, L = function(V, j, H) {
      si(o, H.text, V, j + b / 2, p, {
        strikethrough: H.hidden,
        textAlign: d.textAlign(H.textAlign)
      });
    }, z = this.isHorizontal(), A = this._computeTitleHeight();
    z ? _ = {
      x: ee(l, this.left + m, this.right - r[0]),
      y: this.top + m + A,
      line: 0
    } : _ = {
      x: this.left + m,
      y: ee(l, this.top + A + m, this.bottom - e[0].height),
      line: 0
    }, _p(this.ctx, t.textDirection);
    const R = b + m;
    this.legendItems.forEach((V, j) => {
      o.strokeStyle = V.fontColor, o.fillStyle = V.fontColor;
      const H = o.measureText(V.text).width, Z = d.textAlign(V.textAlign || (V.textAlign = u.textAlign)), et = k + v + H;
      let nt = _.x, st = _.y;
      d.setWidth(this.width), z ? j > 0 && nt + et + m > this.right && (st = _.y += R, _.line++, nt = _.x = ee(l, this.left + m, this.right - r[_.line])) : j > 0 && st + R > this.bottom && (nt = _.x = nt + e[_.line].width + m, _.line++, st = _.y = ee(l, this.top + A + m, this.bottom - e[_.line].height));
      const xt = d.x(nt);
      if (E(xt, st, V), nt = W0(Z, nt + k + v, z ? nt + et : this.right, t.rtl), L(d.x(nt), st, V), z)
        _.x += et + m;
      else if (typeof V.text != "string") {
        const Mt = p.lineHeight;
        _.y += Xp(V, Mt) + m;
      } else
        _.y += R;
    }), Sp(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, r = Ut(e.font), o = se(e.padding);
    if (!e.display)
      return;
    const l = Ri(t.rtl, this.left, this.width), u = this.ctx, c = e.position, d = r.size / 2, p = o.top + d;
    let m, y = this.left, v = this.width;
    if (this.isHorizontal())
      v = Math.max(...this.lineWidths), m = this.top + p, y = ee(t.align, y, this.right - v);
    else {
      const k = this.columnSizes.reduce((S, b) => Math.max(S, b.height), 0);
      m = p + ee(t.align, this.top, this.bottom - k - t.labels.padding - this._computeTitleHeight());
    }
    const _ = ee(c, y, y + v);
    u.textAlign = l.textAlign(hu(c)), u.textBaseline = "middle", u.strokeStyle = e.color, u.fillStyle = e.color, u.font = r.string, si(u, e.text, _, m, r);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = Ut(t.font), r = se(t.padding);
    return t.display ? e.lineHeight + r.height : 0;
  }
  _getLegendItemAt(t, e) {
    let r, o, l;
    if (sn(t, this.left, this.right) && sn(e, this.top, this.bottom)) {
      for (l = this.legendHitBoxes, r = 0; r < l.length; ++r)
        if (o = l[r], sn(t, o.left, o.left + o.width) && sn(e, o.top, o.top + o.height))
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!z_(t.type, e))
      return;
    const r = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const o = this._hoveredItem, l = O_(o, r);
      o && !l && Ct(e.onLeave, [
        t,
        o,
        this
      ], this), this._hoveredItem = r, r && !l && Ct(e.onHover, [
        t,
        r,
        this
      ], this);
    } else r && Ct(e.onClick, [
      t,
      r,
      this
    ], this);
  }
}
function L_(i, t, e, r, o) {
  const l = R_(r, i, t, e), u = A_(o, r, t.lineHeight);
  return {
    itemWidth: l,
    itemHeight: u
  };
}
function R_(i, t, e, r) {
  let o = i.text;
  return o && typeof o != "string" && (o = o.reduce((l, u) => l.length > u.length ? l : u)), t + e.size / 2 + r.measureText(o).width;
}
function A_(i, t, e) {
  let r = i;
  return typeof t.text != "string" && (r = Xp(t, e)), r;
}
function Xp(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function z_(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var F_ = {
  id: "legend",
  _element: zh,
  start(i, t, e) {
    const r = i.legend = new zh({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    ie.configure(i, r, e), ie.addBox(i, r);
  },
  stop(i) {
    ie.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const r = i.legend;
    ie.configure(i, r, e), r.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const r = t.datasetIndex, o = e.chart;
      o.isDatasetVisible(r) ? (o.hide(r), t.hidden = !0) : (o.show(r), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: r, textAlign: o, color: l, useBorderRadius: u, borderRadius: c } } = i.legend.options;
        return i._getSortedDatasetMetas().map((d) => {
          const p = d.controller.getStyle(e ? 0 : void 0), m = se(p.borderWidth);
          return {
            text: t[d.index].label,
            fillStyle: p.backgroundColor,
            fontColor: l,
            hidden: !d.visible,
            lineCap: p.borderCapStyle,
            lineDash: p.borderDash,
            lineDashOffset: p.borderDashOffset,
            lineJoin: p.borderJoinStyle,
            lineWidth: (m.width + m.height) / 4,
            strokeStyle: p.borderColor,
            pointStyle: r || p.pointStyle,
            rotation: p.rotation,
            textAlign: o || p.textAlign,
            borderRadius: u && (c || p.borderRadius),
            datasetIndex: d.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class bu extends ln {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const r = this.options;
    if (this.left = 0, this.top = 0, !r.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const o = Lt(r.text) ? r.text.length : 1;
    this._padding = se(r.padding);
    const l = o * Ut(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = l : this.width = l;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: r, bottom: o, right: l, options: u } = this, c = u.align;
    let d = 0, p, m, y;
    return this.isHorizontal() ? (m = ee(c, r, l), y = e + t, p = l - r) : (u.position === "left" ? (m = r + t, y = ee(c, o, e), d = vt * -0.5) : (m = l - t, y = ee(c, e, o), d = vt * 0.5), p = o - e), {
      titleX: m,
      titleY: y,
      maxWidth: p,
      rotation: d
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const r = Ut(e.font), l = r.lineHeight / 2 + this._padding.top, { titleX: u, titleY: c, maxWidth: d, rotation: p } = this._drawArgs(l);
    si(t, e.text, 0, 0, r, {
      color: e.color,
      maxWidth: d,
      rotation: p,
      textAlign: hu(e.align),
      textBaseline: "middle",
      translation: [
        u,
        c
      ]
    });
  }
}
function I_(i, t) {
  const e = new bu({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  ie.configure(i, e, t), ie.addBox(i, e), i.titleBlock = e;
}
var N_ = {
  id: "title",
  _element: bu,
  start(i, t, e) {
    I_(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    ie.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const r = i.titleBlock;
    ie.configure(i, r, e), r.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const po = /* @__PURE__ */ new WeakMap();
var B_ = {
  id: "subtitle",
  start(i, t, e) {
    const r = new bu({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    ie.configure(i, r, e), ie.addBox(i, r), po.set(i, r);
  },
  stop(i) {
    ie.removeBox(i, po.get(i)), po.delete(i);
  },
  beforeUpdate(i, t, e) {
    const r = po.get(i);
    ie.configure(i, r, e), r.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Os = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, r = /* @__PURE__ */ new Set(), o = 0, l = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const c = i[t].element;
      if (c && c.hasValue()) {
        const d = c.tooltipPosition();
        r.add(d.x), o += d.y, ++l;
      }
    }
    return l === 0 || r.size === 0 ? !1 : {
      x: [
        ...r
      ].reduce((c, d) => c + d) / r.size,
      y: o / l
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, r = t.y, o = Number.POSITIVE_INFINITY, l, u, c;
    for (l = 0, u = i.length; l < u; ++l) {
      const d = i[l].element;
      if (d && d.hasValue()) {
        const p = d.getCenterPoint(), m = Ga(t, p);
        m < o && (o = m, c = d);
      }
    }
    if (c) {
      const d = c.tooltipPosition();
      e = d.x, r = d.y;
    }
    return {
      x: e,
      y: r
    };
  }
};
function We(i, t) {
  return t && (Lt(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function en(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function V_(i, t) {
  const { element: e, datasetIndex: r, index: o } = t, l = i.getDatasetMeta(r).controller, { label: u, value: c } = l.getLabelAndValue(o);
  return {
    chart: i,
    label: u,
    parsed: l.getParsed(o),
    raw: i.data.datasets[r].data[o],
    formattedValue: c,
    dataset: l.getDataset(),
    dataIndex: o,
    datasetIndex: r,
    element: e
  };
}
function Fh(i, t) {
  const e = i.chart.ctx, { body: r, footer: o, title: l } = i, { boxWidth: u, boxHeight: c } = t, d = Ut(t.bodyFont), p = Ut(t.titleFont), m = Ut(t.footerFont), y = l.length, v = o.length, _ = r.length, k = se(t.padding);
  let S = k.height, b = 0, E = r.reduce((A, R) => A + R.before.length + R.lines.length + R.after.length, 0);
  if (E += i.beforeBody.length + i.afterBody.length, y && (S += y * p.lineHeight + (y - 1) * t.titleSpacing + t.titleMarginBottom), E) {
    const A = t.displayColors ? Math.max(c, d.lineHeight) : d.lineHeight;
    S += _ * A + (E - _) * d.lineHeight + (E - 1) * t.bodySpacing;
  }
  v && (S += t.footerMarginTop + v * m.lineHeight + (v - 1) * t.footerSpacing);
  let L = 0;
  const z = function(A) {
    b = Math.max(b, e.measureText(A).width + L);
  };
  return e.save(), e.font = p.string, kt(i.title, z), e.font = d.string, kt(i.beforeBody.concat(i.afterBody), z), L = t.displayColors ? u + 2 + t.boxPadding : 0, kt(r, (A) => {
    kt(A.before, z), kt(A.lines, z), kt(A.after, z);
  }), L = 0, e.font = m.string, kt(i.footer, z), e.restore(), b += k.width, {
    width: b,
    height: S
  };
}
function j_(i, t) {
  const { y: e, height: r } = t;
  return e < r / 2 ? "top" : e > i.height - r / 2 ? "bottom" : "center";
}
function W_(i, t, e, r) {
  const { x: o, width: l } = r, u = e.caretSize + e.caretPadding;
  if (i === "left" && o + l + u > t.width || i === "right" && o - l - u < 0)
    return !0;
}
function H_(i, t, e, r) {
  const { x: o, width: l } = e, { width: u, chartArea: { left: c, right: d } } = i;
  let p = "center";
  return r === "center" ? p = o <= (c + d) / 2 ? "left" : "right" : o <= l / 2 ? p = "left" : o >= u - l / 2 && (p = "right"), W_(p, i, t, e) && (p = "center"), p;
}
function Ih(i, t, e) {
  const r = e.yAlign || t.yAlign || j_(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || H_(i, t, e, r),
    yAlign: r
  };
}
function U_(i, t) {
  let { x: e, width: r } = i;
  return t === "right" ? e -= r : t === "center" && (e -= r / 2), e;
}
function $_(i, t, e) {
  let { y: r, height: o } = i;
  return t === "top" ? r += e : t === "bottom" ? r -= o + e : r -= o / 2, r;
}
function Nh(i, t, e, r) {
  const { caretSize: o, caretPadding: l, cornerRadius: u } = i, { xAlign: c, yAlign: d } = e, p = o + l, { topLeft: m, topRight: y, bottomLeft: v, bottomRight: _ } = ei(u);
  let k = U_(t, c);
  const S = $_(t, d, p);
  return d === "center" ? c === "left" ? k += p : c === "right" && (k -= p) : c === "left" ? k -= Math.max(m, v) + o : c === "right" && (k += Math.max(y, _) + o), {
    x: Kt(k, 0, r.width - t.width),
    y: Kt(S, 0, r.height - t.height)
  };
}
function go(i, t, e) {
  const r = se(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - r.right : i.x + r.left;
}
function Bh(i) {
  return We([], en(i));
}
function Y_(i, t, e) {
  return An(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Vh(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Kp = {
  beforeTitle: Je,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, r = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (r > 0 && t.dataIndex < r)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Je,
  beforeBody: Je,
  beforeLabel: Je,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return pt(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Je,
  afterBody: Je,
  beforeFooter: Je,
  footer: Je,
  afterFooter: Je
};
function he(i, t, e, r) {
  const o = i[t].call(e, r);
  return typeof o > "u" ? Kp[t].call(e, r) : o;
}
class jh extends ln {
  static positioners = Os;
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, r = this.options.setContext(this.getContext()), o = r.enabled && e.options.animation && r.animations, l = new Mp(this.chart, o);
    return o._cacheable && (this._cachedAnimations = Object.freeze(l)), l;
  }
  getContext() {
    return this.$context || (this.$context = Y_(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: r } = e, o = he(r, "beforeTitle", this, t), l = he(r, "title", this, t), u = he(r, "afterTitle", this, t);
    let c = [];
    return c = We(c, en(o)), c = We(c, en(l)), c = We(c, en(u)), c;
  }
  getBeforeBody(t, e) {
    return Bh(he(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: r } = e, o = [];
    return kt(t, (l) => {
      const u = {
        before: [],
        lines: [],
        after: []
      }, c = Vh(r, l);
      We(u.before, en(he(c, "beforeLabel", this, l))), We(u.lines, he(c, "label", this, l)), We(u.after, en(he(c, "afterLabel", this, l))), o.push(u);
    }), o;
  }
  getAfterBody(t, e) {
    return Bh(he(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: r } = e, o = he(r, "beforeFooter", this, t), l = he(r, "footer", this, t), u = he(r, "afterFooter", this, t);
    let c = [];
    return c = We(c, en(o)), c = We(c, en(l)), c = We(c, en(u)), c;
  }
  _createItems(t) {
    const e = this._active, r = this.chart.data, o = [], l = [], u = [];
    let c = [], d, p;
    for (d = 0, p = e.length; d < p; ++d)
      c.push(V_(this.chart, e[d]));
    return t.filter && (c = c.filter((m, y, v) => t.filter(m, y, v, r))), t.itemSort && (c = c.sort((m, y) => t.itemSort(m, y, r))), kt(c, (m) => {
      const y = Vh(t.callbacks, m);
      o.push(he(y, "labelColor", this, m)), l.push(he(y, "labelPointStyle", this, m)), u.push(he(y, "labelTextColor", this, m));
    }), this.labelColors = o, this.labelPointStyles = l, this.labelTextColors = u, this.dataPoints = c, c;
  }
  update(t, e) {
    const r = this.options.setContext(this.getContext()), o = this._active;
    let l, u = [];
    if (!o.length)
      this.opacity !== 0 && (l = {
        opacity: 0
      });
    else {
      const c = Os[r.position].call(this, o, this._eventPosition);
      u = this._createItems(r), this.title = this.getTitle(u, r), this.beforeBody = this.getBeforeBody(u, r), this.body = this.getBody(u, r), this.afterBody = this.getAfterBody(u, r), this.footer = this.getFooter(u, r);
      const d = this._size = Fh(this, r), p = Object.assign({}, c, d), m = Ih(this.chart, r, p), y = Nh(r, p, m, this.chart);
      this.xAlign = m.xAlign, this.yAlign = m.yAlign, l = {
        opacity: 1,
        x: y.x,
        y: y.y,
        width: d.width,
        height: d.height,
        caretX: c.x,
        caretY: c.y
      };
    }
    this._tooltipItems = u, this.$context = void 0, l && this._resolveAnimations().update(this, l), t && r.external && r.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, r, o) {
    const l = this.getCaretPosition(t, r, o);
    e.lineTo(l.x1, l.y1), e.lineTo(l.x2, l.y2), e.lineTo(l.x3, l.y3);
  }
  getCaretPosition(t, e, r) {
    const { xAlign: o, yAlign: l } = this, { caretSize: u, cornerRadius: c } = r, { topLeft: d, topRight: p, bottomLeft: m, bottomRight: y } = ei(c), { x: v, y: _ } = t, { width: k, height: S } = e;
    let b, E, L, z, A, R;
    return l === "center" ? (A = _ + S / 2, o === "left" ? (b = v, E = b - u, z = A + u, R = A - u) : (b = v + k, E = b + u, z = A - u, R = A + u), L = b) : (o === "left" ? E = v + Math.max(d, m) + u : o === "right" ? E = v + k - Math.max(p, y) - u : E = this.caretX, l === "top" ? (z = _, A = z - u, b = E - u, L = E + u) : (z = _ + S, A = z + u, b = E + u, L = E - u), R = z), {
      x1: b,
      x2: E,
      x3: L,
      y1: z,
      y2: A,
      y3: R
    };
  }
  drawTitle(t, e, r) {
    const o = this.title, l = o.length;
    let u, c, d;
    if (l) {
      const p = Ri(r.rtl, this.x, this.width);
      for (t.x = go(this, r.titleAlign, r), e.textAlign = p.textAlign(r.titleAlign), e.textBaseline = "middle", u = Ut(r.titleFont), c = r.titleSpacing, e.fillStyle = r.titleColor, e.font = u.string, d = 0; d < l; ++d)
        e.fillText(o[d], p.x(t.x), t.y + u.lineHeight / 2), t.y += u.lineHeight + c, d + 1 === l && (t.y += r.titleMarginBottom - c);
    }
  }
  _drawColorBox(t, e, r, o, l) {
    const u = this.labelColors[r], c = this.labelPointStyles[r], { boxHeight: d, boxWidth: p } = l, m = Ut(l.bodyFont), y = go(this, "left", l), v = o.x(y), _ = d < m.lineHeight ? (m.lineHeight - d) / 2 : 0, k = e.y + _;
    if (l.usePointStyle) {
      const S = {
        radius: Math.min(p, d) / 2,
        pointStyle: c.pointStyle,
        rotation: c.rotation,
        borderWidth: 1
      }, b = o.leftForLtr(v, p) + p / 2, E = k + d / 2;
      t.strokeStyle = l.multiKeyBackground, t.fillStyle = l.multiKeyBackground, qa(t, S, b, E), t.strokeStyle = u.borderColor, t.fillStyle = u.backgroundColor, qa(t, S, b, E);
    } else {
      t.lineWidth = gt(u.borderWidth) ? Math.max(...Object.values(u.borderWidth)) : u.borderWidth || 1, t.strokeStyle = u.borderColor, t.setLineDash(u.borderDash || []), t.lineDashOffset = u.borderDashOffset || 0;
      const S = o.leftForLtr(v, p), b = o.leftForLtr(o.xPlus(v, 1), p - 2), E = ei(u.borderRadius);
      Object.values(E).some((L) => L !== 0) ? (t.beginPath(), t.fillStyle = l.multiKeyBackground, js(t, {
        x: S,
        y: k,
        w: p,
        h: d,
        radius: E
      }), t.fill(), t.stroke(), t.fillStyle = u.backgroundColor, t.beginPath(), js(t, {
        x: b,
        y: k + 1,
        w: p - 2,
        h: d - 2,
        radius: E
      }), t.fill()) : (t.fillStyle = l.multiKeyBackground, t.fillRect(S, k, p, d), t.strokeRect(S, k, p, d), t.fillStyle = u.backgroundColor, t.fillRect(b, k + 1, p - 2, d - 2));
    }
    t.fillStyle = this.labelTextColors[r];
  }
  drawBody(t, e, r) {
    const { body: o } = this, { bodySpacing: l, bodyAlign: u, displayColors: c, boxHeight: d, boxWidth: p, boxPadding: m } = r, y = Ut(r.bodyFont);
    let v = y.lineHeight, _ = 0;
    const k = Ri(r.rtl, this.x, this.width), S = function(H) {
      e.fillText(H, k.x(t.x + _), t.y + v / 2), t.y += v + l;
    }, b = k.textAlign(u);
    let E, L, z, A, R, V, j;
    for (e.textAlign = u, e.textBaseline = "middle", e.font = y.string, t.x = go(this, b, r), e.fillStyle = r.bodyColor, kt(this.beforeBody, S), _ = c && b !== "right" ? u === "center" ? p / 2 + m : p + 2 + m : 0, A = 0, V = o.length; A < V; ++A) {
      for (E = o[A], L = this.labelTextColors[A], e.fillStyle = L, kt(E.before, S), z = E.lines, c && z.length && (this._drawColorBox(e, t, A, k, r), v = Math.max(y.lineHeight, d)), R = 0, j = z.length; R < j; ++R)
        S(z[R]), v = y.lineHeight;
      kt(E.after, S);
    }
    _ = 0, v = y.lineHeight, kt(this.afterBody, S), t.y -= l;
  }
  drawFooter(t, e, r) {
    const o = this.footer, l = o.length;
    let u, c;
    if (l) {
      const d = Ri(r.rtl, this.x, this.width);
      for (t.x = go(this, r.footerAlign, r), t.y += r.footerMarginTop, e.textAlign = d.textAlign(r.footerAlign), e.textBaseline = "middle", u = Ut(r.footerFont), e.fillStyle = r.footerColor, e.font = u.string, c = 0; c < l; ++c)
        e.fillText(o[c], d.x(t.x), t.y + u.lineHeight / 2), t.y += u.lineHeight + r.footerSpacing;
    }
  }
  drawBackground(t, e, r, o) {
    const { xAlign: l, yAlign: u } = this, { x: c, y: d } = t, { width: p, height: m } = r, { topLeft: y, topRight: v, bottomLeft: _, bottomRight: k } = ei(o.cornerRadius);
    e.fillStyle = o.backgroundColor, e.strokeStyle = o.borderColor, e.lineWidth = o.borderWidth, e.beginPath(), e.moveTo(c + y, d), u === "top" && this.drawCaret(t, e, r, o), e.lineTo(c + p - v, d), e.quadraticCurveTo(c + p, d, c + p, d + v), u === "center" && l === "right" && this.drawCaret(t, e, r, o), e.lineTo(c + p, d + m - k), e.quadraticCurveTo(c + p, d + m, c + p - k, d + m), u === "bottom" && this.drawCaret(t, e, r, o), e.lineTo(c + _, d + m), e.quadraticCurveTo(c, d + m, c, d + m - _), u === "center" && l === "left" && this.drawCaret(t, e, r, o), e.lineTo(c, d + y), e.quadraticCurveTo(c, d, c + y, d), e.closePath(), e.fill(), o.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, r = this.$animations, o = r && r.x, l = r && r.y;
    if (o || l) {
      const u = Os[t.position].call(this, this._active, this._eventPosition);
      if (!u)
        return;
      const c = this._size = Fh(this, t), d = Object.assign({}, u, this._size), p = Ih(e, t, d), m = Nh(t, d, p, e);
      (o._to !== m.x || l._to !== m.y) && (this.xAlign = p.xAlign, this.yAlign = p.yAlign, this.width = c.width, this.height = c.height, this.caretX = u.x, this.caretY = u.y, this._resolveAnimations().update(this, m));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r)
      return;
    this._updateAnimationTarget(e);
    const o = {
      width: this.width,
      height: this.height
    }, l = {
      x: this.x,
      y: this.y
    };
    r = Math.abs(r) < 1e-3 ? 0 : r;
    const u = se(e.padding), c = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && c && (t.save(), t.globalAlpha = r, this.drawBackground(l, t, o, e), _p(t, e.textDirection), l.y += u.top, this.drawTitle(l, t, e), this.drawBody(l, t, e), this.drawFooter(l, t, e), Sp(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const r = this._active, o = t.map(({ datasetIndex: c, index: d }) => {
      const p = this.chart.getDatasetMeta(c);
      if (!p)
        throw new Error("Cannot find a dataset at index " + c);
      return {
        datasetIndex: c,
        element: p.data[d],
        index: d
      };
    }), l = !So(r, o), u = this._positionChanged(o, e);
    (l || u) && (this._active = o, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, r = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const o = this.options, l = this._active || [], u = this._getActiveElements(t, l, e, r), c = this._positionChanged(u, t), d = e || !So(u, l) || c;
    return d && (this._active = u, (o.enabled || o.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), d;
  }
  _getActiveElements(t, e, r, o) {
    const l = this.options;
    if (t.type === "mouseout")
      return [];
    if (!o)
      return e.filter((c) => this.chart.data.datasets[c.datasetIndex] && this.chart.getDatasetMeta(c.datasetIndex).controller.getParsed(c.index) !== void 0);
    const u = this.chart.getElementsAtEventForMode(t, l.mode, l, r);
    return l.reverse && u.reverse(), u;
  }
  _positionChanged(t, e) {
    const { caretX: r, caretY: o, options: l } = this, u = Os[l.position].call(this, t, e);
    return u !== !1 && (r !== u.x || o !== u.y);
  }
}
var X_ = {
  id: "tooltip",
  _element: jh,
  positioners: Os,
  afterInit(i, t, e) {
    e && (i.tooltip = new jh({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Kp
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, K_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: o_,
  Decimation: c_,
  Filler: T_,
  Legend: F_,
  SubTitle: B_,
  Title: N_,
  Tooltip: X_
});
const Q_ = (i, t, e, r) => (typeof t == "string" ? (e = i.push(t) - 1, r.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function G_(i, t, e, r) {
  const o = i.indexOf(t);
  if (o === -1)
    return Q_(i, t, e, r);
  const l = i.lastIndexOf(t);
  return o !== l ? e : o;
}
const Z_ = (i, t) => i === null ? null : Kt(Math.round(i), 0, t);
function Wh(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class q_ extends ri {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Wh
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const r = this.getLabels();
      for (const { index: o, label: l } of e)
        r[o] === l && r.splice(o, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (pt(t))
      return null;
    const r = this.getLabels();
    return e = isFinite(e) && r[e] === t ? e : G_(r, t, at(e, t), this._addedLabels), Z_(e, r.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: r, max: o } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (r = 0), e || (o = this.getLabels().length - 1)), this.min = r, this.max = o;
  }
  buildTicks() {
    const t = this.min, e = this.max, r = this.options.offset, o = [];
    let l = this.getLabels();
    l = t === 0 && e === l.length - 1 ? l : l.slice(t, e + 1), this._valueRange = Math.max(l.length - (r ? 0 : 1), 1), this._startValue = this.min - (r ? 0.5 : 0);
    for (let u = t; u <= e; u++)
      o.push({
        value: u
      });
    return o;
  }
  getLabelForValue(t) {
    return Wh.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function J_(i, t) {
  const e = [], { bounds: o, step: l, min: u, max: c, precision: d, count: p, maxTicks: m, maxDigits: y, includeBounds: v } = i, _ = l || 1, k = m - 1, { min: S, max: b } = t, E = !pt(u), L = !pt(c), z = !pt(p), A = (b - S) / (y + 1);
  let R = Fd((b - S) / k / _) * _, V, j, H, Z;
  if (R < 1e-14 && !E && !L)
    return [
      {
        value: S
      },
      {
        value: b
      }
    ];
  Z = Math.ceil(b / R) - Math.floor(S / R), Z > k && (R = Fd(Z * R / k / _) * _), pt(d) || (V = Math.pow(10, d), R = Math.ceil(R * V) / V), o === "ticks" ? (j = Math.floor(S / R) * R, H = Math.ceil(b / R) * R) : (j = S, H = b), E && L && l && z0((c - u) / l, R / 1e3) ? (Z = Math.round(Math.min((c - u) / R, m)), R = (c - u) / Z, j = u, H = c) : z ? (j = E ? u : j, H = L ? c : H, Z = p - 1, R = (H - j) / Z) : (Z = (H - j) / R, As(Z, Math.round(Z), R / 1e3) ? Z = Math.round(Z) : Z = Math.ceil(Z));
  const et = Math.max(Id(R), Id(j));
  V = Math.pow(10, pt(d) ? et : d), j = Math.round(j * V) / V, H = Math.round(H * V) / V;
  let nt = 0;
  for (E && (v && j !== u ? (e.push({
    value: u
  }), j < u && nt++, As(Math.round((j + nt * R) * V) / V, u, Hh(u, A, i)) && nt++) : j < u && nt++); nt < Z; ++nt) {
    const st = Math.round((j + nt * R) * V) / V;
    if (L && st > c)
      break;
    e.push({
      value: st
    });
  }
  return L && v && H !== c ? e.length && As(e[e.length - 1].value, c, Hh(c, A, i)) ? e[e.length - 1].value = c : e.push({
    value: c
  }) : (!L || H === c) && e.push({
    value: H
  }), e;
}
function Hh(i, t, { horizontal: e, minRotation: r }) {
  const o = Fe(r), l = (e ? Math.sin(o) : Math.cos(o)) || 1e-3, u = 0.75 * t * ("" + i).length;
  return Math.min(t / l, u);
}
class Eo extends ri {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return pt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: r } = this.getUserBounds();
    let { min: o, max: l } = this;
    const u = (d) => o = e ? o : d, c = (d) => l = r ? l : d;
    if (t) {
      const d = Ue(o), p = Ue(l);
      d < 0 && p < 0 ? c(0) : d > 0 && p > 0 && u(0);
    }
    if (o === l) {
      let d = l === 0 ? 1 : Math.abs(l * 0.05);
      c(l + d), t || u(o - d);
    }
    this.min = o, this.max = l;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: r } = t, o;
    return r ? (o = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1, o > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${o} ticks. Limiting to 1000.`), o = 1e3)) : (o = this.computeTickLimit(), e = e || 11), e && (o = Math.min(e, o)), o;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const o = {
      maxTicks: r,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, l = this._range || this, u = J_(o, l);
    return t.bounds === "ticks" && ip(u, this, "value"), t.reverse ? (u.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), u;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, r = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const o = (r - e) / Math.max(t.length - 1, 1) / 2;
      e -= o, r += o;
    }
    this._startValue = e, this._endValue = r, this._valueRange = r - e;
  }
  getLabelForValue(t) {
    return $s(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class t1 extends Eo {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Do.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = It(t) ? t : 0, this.max = It(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, r = Fe(this.options.ticks.minRotation), o = (t ? Math.sin(r) : Math.cos(r)) || 1e-3, l = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, l.lineHeight / o));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const Hs = (i) => Math.floor(En(i)), qn = (i, t) => Math.pow(10, Hs(i) + t);
function Uh(i) {
  return i / Math.pow(10, Hs(i)) === 1;
}
function $h(i, t, e) {
  const r = Math.pow(10, e), o = Math.floor(i / r);
  return Math.ceil(t / r) - o;
}
function e1(i, t) {
  const e = t - i;
  let r = Hs(e);
  for (; $h(i, t, r) > 10; )
    r++;
  for (; $h(i, t, r) < 10; )
    r--;
  return Math.min(r, Hs(i));
}
function n1(i, { min: t, max: e }) {
  t = _e(i.min, t);
  const r = [], o = Hs(t);
  let l = e1(t, e), u = l < 0 ? Math.pow(10, Math.abs(l)) : 1;
  const c = Math.pow(10, l), d = o > l ? Math.pow(10, o) : 0, p = Math.round((t - d) * u) / u, m = Math.floor((t - d) / c / 10) * c * 10;
  let y = Math.floor((p - m) / Math.pow(10, l)), v = _e(i.min, Math.round((d + m + y * Math.pow(10, l)) * u) / u);
  for (; v < e; )
    r.push({
      value: v,
      major: Uh(v),
      significand: y
    }), y >= 10 ? y = y < 15 ? 15 : 20 : y++, y >= 20 && (l++, y = 2, u = l >= 0 ? 1 : u), v = Math.round((d + m + y * Math.pow(10, l)) * u) / u;
  const _ = _e(i.max, v);
  return r.push({
    value: _,
    major: Uh(_),
    significand: y
  }), r;
}
class i1 extends ri {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: Do.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const r = Eo.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (r === 0) {
      this._zero = !0;
      return;
    }
    return It(r) && r > 0 ? r : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = It(t) ? Math.max(0, t) : null, this.max = It(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !It(this._userMin) && (this.min = t === qn(this.min, 0) ? qn(this.min, -1) : qn(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let r = this.min, o = this.max;
    const l = (c) => r = t ? r : c, u = (c) => o = e ? o : c;
    r === o && (r <= 0 ? (l(1), u(10)) : (l(qn(r, -1)), u(qn(o, 1)))), r <= 0 && l(qn(o, -1)), o <= 0 && u(qn(r, 1)), this.min = r, this.max = o;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, r = n1(e, this);
    return t.bounds === "ticks" && ip(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : $s(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = En(t), this._valueRange = En(this.max) - En(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (En(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function su(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = se(t.backdropPadding);
    return at(t.font && t.font.size, Rt.font.size) + e.height;
  }
  return 0;
}
function s1(i, t, e) {
  return e = Lt(e) ? e : [
    e
  ], {
    w: q0(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Yh(i, t, e, r, o) {
  return i === r || i === o ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < r || i > o ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function r1(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), r = [], o = [], l = i._pointLabels.length, u = i.options.pointLabels, c = u.centerPointLabels ? vt / l : 0;
  for (let d = 0; d < l; d++) {
    const p = u.setContext(i.getPointLabelContext(d));
    o[d] = p.padding;
    const m = i.getPointPosition(d, i.drawingArea + o[d], c), y = Ut(p.font), v = s1(i.ctx, y, i._pointLabels[d]);
    r[d] = v;
    const _ = ne(i.getIndexAngle(d) + c), k = Math.round(fu(_)), S = Yh(k, m.x, v.w, 0, 180), b = Yh(k, m.y, v.h, 90, 270);
    o1(e, t, _, S, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = u1(i, r, o);
}
function o1(i, t, e, r, o) {
  const l = Math.abs(Math.sin(e)), u = Math.abs(Math.cos(e));
  let c = 0, d = 0;
  r.start < t.l ? (c = (t.l - r.start) / l, i.l = Math.min(i.l, t.l - c)) : r.end > t.r && (c = (r.end - t.r) / l, i.r = Math.max(i.r, t.r + c)), o.start < t.t ? (d = (t.t - o.start) / u, i.t = Math.min(i.t, t.t - d)) : o.end > t.b && (d = (o.end - t.b) / u, i.b = Math.max(i.b, t.b + d));
}
function l1(i, t, e) {
  const r = i.drawingArea, { extra: o, additionalAngle: l, padding: u, size: c } = e, d = i.getPointPosition(t, r + o + u, l), p = Math.round(fu(ne(d.angle + Vt))), m = d1(d.y, c.h, p), y = c1(p), v = f1(d.x, c.w, y);
  return {
    visible: !0,
    x: d.x,
    y: m,
    textAlign: y,
    left: v,
    top: m,
    right: v + c.w,
    bottom: m + c.h
  };
}
function a1(i, t) {
  if (!t)
    return !0;
  const { left: e, top: r, right: o, bottom: l } = i;
  return !(on({
    x: e,
    y: r
  }, t) || on({
    x: e,
    y: l
  }, t) || on({
    x: o,
    y: r
  }, t) || on({
    x: o,
    y: l
  }, t));
}
function u1(i, t, e) {
  const r = [], o = i._pointLabels.length, l = i.options, { centerPointLabels: u, display: c } = l.pointLabels, d = {
    extra: su(l) / 2,
    additionalAngle: u ? vt / o : 0
  };
  let p;
  for (let m = 0; m < o; m++) {
    d.padding = e[m], d.size = t[m];
    const y = l1(i, m, d);
    r.push(y), c === "auto" && (y.visible = a1(y, p), y.visible && (p = y));
  }
  return r;
}
function c1(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function f1(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function d1(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function h1(i, t, e) {
  const { left: r, top: o, right: l, bottom: u } = e, { backdropColor: c } = t;
  if (!pt(c)) {
    const d = ei(t.borderRadius), p = se(t.backdropPadding);
    i.fillStyle = c;
    const m = r - p.left, y = o - p.top, v = l - r + p.width, _ = u - o + p.height;
    Object.values(d).some((k) => k !== 0) ? (i.beginPath(), js(i, {
      x: m,
      y,
      w: v,
      h: _,
      radius: d
    }), i.fill()) : i.fillRect(m, y, v, _);
  }
}
function p1(i, t) {
  const { ctx: e, options: { pointLabels: r } } = i;
  for (let o = t - 1; o >= 0; o--) {
    const l = i._pointLabelItems[o];
    if (!l.visible)
      continue;
    const u = r.setContext(i.getPointLabelContext(o));
    h1(e, u, l);
    const c = Ut(u.font), { x: d, y: p, textAlign: m } = l;
    si(e, i._pointLabels[o], d, p + c.lineHeight / 2, c, {
      color: u.color,
      textAlign: m,
      textBaseline: "middle"
    });
  }
}
function Qp(i, t, e, r) {
  const { ctx: o } = i;
  if (e)
    o.arc(i.xCenter, i.yCenter, t, 0, Dt);
  else {
    let l = i.getPointPosition(0, t);
    o.moveTo(l.x, l.y);
    for (let u = 1; u < r; u++)
      l = i.getPointPosition(u, t), o.lineTo(l.x, l.y);
  }
}
function g1(i, t, e, r, o) {
  const l = i.ctx, u = t.circular, { color: c, lineWidth: d } = t;
  !u && !r || !c || !d || e < 0 || (l.save(), l.strokeStyle = c, l.lineWidth = d, l.setLineDash(o.dash || []), l.lineDashOffset = o.dashOffset, l.beginPath(), Qp(i, e, u, r), l.closePath(), l.stroke(), l.restore());
}
function m1(i, t, e) {
  return An(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class y1 extends Eo {
  static id = "radialLinear";
  static defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Do.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = se(su(this.options) / 2), e = this.width = this.maxWidth - t.width, r = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + r / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, r) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = It(t) && !isNaN(t) ? t : 0, this.max = It(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / su(this.options));
  }
  generateTickLabels(t) {
    Eo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, r) => {
      const o = Ct(this.options.pointLabels.callback, [
        e,
        r
      ], this);
      return o || o === 0 ? o : "";
    }).filter((e, r) => this.chart.getDataVisibility(r));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? r1(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, r, o) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((r - o) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, r, o));
  }
  getIndexAngle(t) {
    const e = Dt / (this._pointLabels.length || 1), r = this.options.startAngle || 0;
    return ne(t * e + Fe(r));
  }
  getDistanceFromCenterForValue(t) {
    if (pt(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (pt(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const r = e[t];
      return m1(this.getContext(), t, r);
    }
  }
  getPointPosition(t, e, r = 0) {
    const o = this.getIndexAngle(t) - Vt + r;
    return {
      x: Math.cos(o) * e + this.xCenter,
      y: Math.sin(o) * e + this.yCenter,
      angle: o
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: r, right: o, bottom: l } = this._pointLabelItems[t];
    return {
      left: e,
      top: r,
      right: o,
      bottom: l
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const r = this.ctx;
      r.save(), r.beginPath(), Qp(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), r.closePath(), r.fillStyle = t, r.fill(), r.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: r, grid: o, border: l } = e, u = this._pointLabels.length;
    let c, d, p;
    if (e.pointLabels.display && p1(this, u), o.display && this.ticks.forEach((m, y) => {
      if (y !== 0 || y === 0 && this.min < 0) {
        d = this.getDistanceFromCenterForValue(m.value);
        const v = this.getContext(y), _ = o.setContext(v), k = l.setContext(v);
        g1(this, _, d, u, k);
      }
    }), r.display) {
      for (t.save(), c = u - 1; c >= 0; c--) {
        const m = r.setContext(this.getPointLabelContext(c)), { color: y, lineWidth: v } = m;
        !v || !y || (t.lineWidth = v, t.strokeStyle = y, t.setLineDash(m.borderDash), t.lineDashOffset = m.borderDashOffset, d = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), p = this.getPointPosition(c, d), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(p.x, p.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, r = e.ticks;
    if (!r.display)
      return;
    const o = this.getIndexAngle(0);
    let l, u;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(o), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((c, d) => {
      if (d === 0 && this.min >= 0 && !e.reverse)
        return;
      const p = r.setContext(this.getContext(d)), m = Ut(p.font);
      if (l = this.getDistanceFromCenterForValue(this.ticks[d].value), p.showLabelBackdrop) {
        t.font = m.string, u = t.measureText(c.label).width, t.fillStyle = p.backdropColor;
        const y = se(p.backdropPadding);
        t.fillRect(-u / 2 - y.left, -l - m.size / 2 - y.top, u + y.width, m.size + y.height);
      }
      si(t, c.label, 0, -l, m, {
        color: p.color,
        strokeColor: p.textStrokeColor,
        strokeWidth: p.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Fo = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, pe = /* @__PURE__ */ Object.keys(Fo);
function Xh(i, t) {
  return i - t;
}
function Kh(i, t) {
  if (pt(t))
    return null;
  const e = i._adapter, { parser: r, round: o, isoWeekday: l } = i._parseOpts;
  let u = t;
  return typeof r == "function" && (u = r(u)), It(u) || (u = typeof r == "string" ? e.parse(u, r) : e.parse(u)), u === null ? null : (o && (u = o === "week" && (Ai(l) || l === !0) ? e.startOf(u, "isoWeek", l) : e.startOf(u, o)), +u);
}
function Qh(i, t, e, r) {
  const o = pe.length;
  for (let l = pe.indexOf(i); l < o - 1; ++l) {
    const u = Fo[pe[l]], c = u.steps ? u.steps : Number.MAX_SAFE_INTEGER;
    if (u.common && Math.ceil((e - t) / (c * u.size)) <= r)
      return pe[l];
  }
  return pe[o - 1];
}
function v1(i, t, e, r, o) {
  for (let l = pe.length - 1; l >= pe.indexOf(e); l--) {
    const u = pe[l];
    if (Fo[u].common && i._adapter.diff(o, r, u) >= t - 1)
      return u;
  }
  return pe[e ? pe.indexOf(e) : 0];
}
function x1(i) {
  for (let t = pe.indexOf(i) + 1, e = pe.length; t < e; ++t)
    if (Fo[pe[t]].common)
      return pe[t];
}
function Gh(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: r, hi: o } = du(e, t), l = e[r] >= t ? e[r] : e[o];
    i[l] = !0;
  }
}
function _1(i, t, e, r) {
  const o = i._adapter, l = +o.startOf(t[0].value, r), u = t[t.length - 1].value;
  let c, d;
  for (c = l; c <= u; c = +o.add(c, 1, r))
    d = e[c], d >= 0 && (t[d].major = !0);
  return t;
}
function Zh(i, t, e) {
  const r = [], o = {}, l = t.length;
  let u, c;
  for (u = 0; u < l; ++u)
    c = t[u], o[c] = u, r.push({
      value: c,
      major: !1
    });
  return l === 0 || !e ? r : _1(i, r, o, e);
}
class ru extends ri {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  };
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const r = t.time || (t.time = {}), o = this._adapter = new Sv._date(t.adapters.date);
    o.init(e), Rs(r.displayFormats, o.formats()), this._parseOpts = {
      parser: r.parser,
      round: r.round,
      isoWeekday: r.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Kh(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, r = t.time.unit || "day";
    let { min: o, max: l, minDefined: u, maxDefined: c } = this.getUserBounds();
    function d(p) {
      !u && !isNaN(p.min) && (o = Math.min(o, p.min)), !c && !isNaN(p.max) && (l = Math.max(l, p.max));
    }
    (!u || !c) && (d(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && d(this.getMinMax(!1))), o = It(o) && !isNaN(o) ? o : +e.startOf(Date.now(), r), l = It(l) && !isNaN(l) ? l : +e.endOf(Date.now(), r) + 1, this.min = Math.min(o, l - 1), this.max = Math.max(o + 1, l);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], r = t[t.length - 1]), {
      min: e,
      max: r
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, r = t.ticks, o = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && o.length && (this.min = this._userMin || o[0], this.max = this._userMax || o[o.length - 1]);
    const l = this.min, u = this.max, c = B0(o, l, u);
    return this._unit = e.unit || (r.autoSkip ? Qh(e.minUnit, this.min, this.max, this._getLabelCapacity(l)) : v1(this, c.length, e.minUnit, this.min, this.max)), this._majorUnit = !r.major.enabled || this._unit === "year" ? void 0 : x1(this._unit), this.initOffsets(o), t.reverse && c.reverse(), Zh(this, c, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, r = 0, o, l;
    this.options.offset && t.length && (o = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - o : e = (this.getDecimalForValue(t[1]) - o) / 2, l = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? r = l : r = (l - this.getDecimalForValue(t[t.length - 2])) / 2);
    const u = t.length < 3 ? 0.5 : 0.25;
    e = Kt(e, 0, u), r = Kt(r, 0, u), this._offsets = {
      start: e,
      end: r,
      factor: 1 / (e + 1 + r)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, r = this.max, o = this.options, l = o.time, u = l.unit || Qh(l.minUnit, e, r, this._getLabelCapacity(e)), c = at(o.ticks.stepSize, 1), d = u === "week" ? l.isoWeekday : !1, p = Ai(d) || d === !0, m = {};
    let y = e, v, _;
    if (p && (y = +t.startOf(y, "isoWeek", d)), y = +t.startOf(y, p ? "day" : u), t.diff(r, e, u) > 1e5 * c)
      throw new Error(e + " and " + r + " are too far apart with stepSize of " + c + " " + u);
    const k = o.ticks.source === "data" && this.getDataTimestamps();
    for (v = y, _ = 0; v < r; v = +t.add(v, c, u), _++)
      Gh(m, v, k);
    return (v === r || o.bounds === "ticks" || _ === 1) && Gh(m, v, k), Object.keys(m).sort(Xh).map((S) => +S);
  }
  getLabelForValue(t) {
    const e = this._adapter, r = this.options.time;
    return r.tooltipFormat ? e.format(t, r.tooltipFormat) : e.format(t, r.displayFormats.datetime);
  }
  format(t, e) {
    const o = this.options.time.displayFormats, l = this._unit, u = e || o[l];
    return this._adapter.format(t, u);
  }
  _tickFormatFunction(t, e, r, o) {
    const l = this.options, u = l.ticks.callback;
    if (u)
      return Ct(u, [
        t,
        e,
        r
      ], this);
    const c = l.time.displayFormats, d = this._unit, p = this._majorUnit, m = d && c[d], y = p && c[p], v = r[e], _ = p && y && v && v.major;
    return this._adapter.format(t, o || (_ ? y : m));
  }
  generateTickLabels(t) {
    let e, r, o;
    for (e = 0, r = t.length; e < r; ++e)
      o = t[e], o.label = this._tickFormatFunction(o.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, r = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + r) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, r = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, r = this.ctx.measureText(t).width, o = Fe(this.isHorizontal() ? e.maxRotation : e.minRotation), l = Math.cos(o), u = Math.sin(o), c = this._resolveTickFontOptions(0).size;
    return {
      w: r * l + c * u,
      h: r * u + c * l
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, r = e.displayFormats, o = r[e.unit] || r.millisecond, l = this._tickFormatFunction(t, 0, Zh(this, [
      t
    ], this._majorUnit), o), u = this._getLabelSize(l), c = Math.floor(this.isHorizontal() ? this.width / u.w : this.height / u.h) - 1;
    return c > 0 ? c : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, r;
    if (t.length)
      return t;
    const o = this.getMatchingVisibleMetas();
    if (this._normalized && o.length)
      return this._cache.data = o[0].controller.getAllParsedValues(this);
    for (e = 0, r = o.length; e < r; ++e)
      t = t.concat(o[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, r;
    if (t.length)
      return t;
    const o = this.getLabels();
    for (e = 0, r = o.length; e < r; ++e)
      t.push(Kh(this, o[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return op(t.sort(Xh));
  }
}
function mo(i, t, e) {
  let r = 0, o = i.length - 1, l, u, c, d;
  e ? (t >= i[r].pos && t <= i[o].pos && ({ lo: r, hi: o } = rn(i, "pos", t)), { pos: l, time: c } = i[r], { pos: u, time: d } = i[o]) : (t >= i[r].time && t <= i[o].time && ({ lo: r, hi: o } = rn(i, "time", t)), { time: l, pos: c } = i[r], { time: u, pos: d } = i[o]);
  const p = u - l;
  return p ? c + (d - c) * (t - l) / p : c;
}
class S1 extends ru {
  static id = "timeseries";
  static defaults = ru.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = mo(e, this.min), this._tableRange = mo(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: r } = this, o = [], l = [];
    let u, c, d, p, m;
    for (u = 0, c = t.length; u < c; ++u)
      p = t[u], p >= e && p <= r && o.push(p);
    if (o.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: r,
          pos: 1
        }
      ];
    for (u = 0, c = o.length; u < c; ++u)
      m = o[u + 1], d = o[u - 1], p = o[u], Math.round((m + d) / 2) !== p && l.push({
        time: p,
        pos: u / (c - 1)
      });
    return l;
  }
  _generate() {
    const t = this.min, e = this.max;
    let r = super.getDataTimestamps();
    return (!r.includes(t) || !r.length) && r.splice(0, 0, t), (!r.includes(e) || r.length === 1) && r.push(e), r.sort((o, l) => o - l);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), r = this.getLabelTimestamps();
    return e.length && r.length ? t = this.normalize(e.concat(r)) : t = e.length ? e : r, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (mo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, r = this.getDecimalForPixel(t) / e.factor - e.end;
    return mo(this._table, r * this._tableRange + this._minPos, !0);
  }
}
var k1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: q_,
  LinearScale: t1,
  LogarithmicScale: i1,
  RadialLinearScale: y1,
  TimeScale: ru,
  TimeSeriesScale: S1
});
const w1 = [
  _v,
  Jx,
  K_,
  k1
];
wu.register(...w1);
const Gp = [
  "#FF4B4B",
  "#1C83E1",
  "#00C4B4",
  "#FA8C16",
  "#9254DE",
  "#F5222D",
  "#52C41A",
  "#FAAD14",
  "#13C2C2",
  "#EB2F96"
], Ls = (i, t, e) => {
  if (!i) return e;
  const r = i.getRootNode()?.host ?? i;
  return getComputedStyle(r).getPropertyValue(t).trim() || e;
}, b1 = (i) => {
  const t = Ls(i, "--st-chart-categorical-colors", "");
  return t ? t.split(",").map((e) => e.trim()) : Gp;
}, C1 = (i) => ({
  textColor: Ls(i, "--st-text-color", "#31333F"),
  backgroundColor: Ls(i, "--st-background-color", "#FFFFFF"),
  borderColor: Ls(
    i,
    "--st-border-color-light",
    "rgba(128, 128, 128, 0.2)"
  ),
  fontFamily: Ls(
    i,
    "--st-font",
    '"Source Sans Pro", sans-serif'
  ),
  chartColors: b1(i)
}), M1 = (i, t) => {
  const e = JSON.parse(JSON.stringify(i)), { textColor: r, backgroundColor: o, borderColor: l, fontFamily: u, chartColors: c } = t;
  return e.data?.datasets && (e.data.datasets = e.data.datasets.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (p, m) => {
      const y = c[m % c.length];
      if (["pie", "doughnut", "polarArea"].includes(
        e.type
      )) {
        const k = p.data?.length || c.length;
        return {
          ...p,
          backgroundColor: p.backgroundColor || c.slice(0, k),
          borderColor: p.borderColor || o,
          borderWidth: p.borderWidth ?? 2
        };
      }
      return ["line", "radar"].includes(
        e.type
      ) ? {
        ...p,
        borderColor: p.borderColor || y,
        backgroundColor: p.backgroundColor || `${y}33`,
        // 20% opacity
        pointBackgroundColor: p.pointBackgroundColor || y,
        pointBorderColor: p.pointBorderColor || o,
        tension: p.tension ?? 0.4
        // Smooth curves by default
      } : {
        ...p,
        backgroundColor: p.backgroundColor || `${y}CC`,
        // 80% opacity
        borderColor: p.borderColor || y,
        borderWidth: p.borderWidth ?? 1
      };
    }
  )), e.options = e.options || {}, e.options.plugins = e.options.plugins || {}, e.options.plugins.legend = {
    labels: {
      color: r,
      font: {
        family: u
      }
    },
    ...e.options.plugins.legend
  }, e.options.plugins.title && (e.options.plugins.title = {
    color: r,
    font: {
      family: u,
      size: 14,
      weight: "bold"
    },
    ...e.options.plugins.title
  }), e.options.plugins.tooltip = {
    backgroundColor: o,
    titleColor: r,
    bodyColor: r,
    borderColor: l,
    borderWidth: 1,
    cornerRadius: 4,
    ...e.options.plugins.tooltip
  }, !["pie", "doughnut", "polarArea", "radar"].includes(
    e.type
  ) && (e.options.scales = e.options.scales || {}, e.options.scales.x = {
    ticks: {
      color: r,
      font: {
        family: u
      }
    },
    grid: {
      color: l
    },
    ...e.options.scales.x
  }, e.options.scales.y = {
    ticks: {
      color: r,
      font: {
        family: u
      }
    },
    grid: {
      color: l
    },
    ...e.options.scales.y
  }), e.type === "radar" && (e.options.scales = e.options.scales || {}, e.options.scales.r = {
    ticks: {
      color: r,
      backdropColor: "transparent"
    },
    pointLabels: {
      color: r
    },
    grid: {
      color: l
    },
    angleLines: {
      color: l
    },
    ...e.options.scales.r
  }), e.type === "polarArea" && (e.options.scales = e.options.scales || {}, e.options.scales.r = {
    ticks: {
      color: r,
      backdropColor: "transparent"
    },
    grid: {
      color: l
    },
    ...e.options.scales.r
  }), e;
}, P1 = ({ spec: i, height: t, theme: e }) => {
  const r = Ee.useRef(null), o = Ee.useRef(null), l = Ee.useRef(null), [u, c] = Ee.useState(
    "auto"
  ), [d, p] = Ee.useState(() => ({
    textColor: "#31333F",
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(128, 128, 128, 0.2)",
    fontFamily: '"Source Sans Pro", sans-serif',
    chartColors: Gp
  })), m = Ee.useRef("");
  Ee.useEffect(() => {
    if (e !== "streamlit" || !r.current) return;
    const k = () => {
      const b = C1(r.current), E = JSON.stringify(b);
      E !== m.current && (m.current = E, p(b));
    };
    k();
    const S = setInterval(k, 100);
    return () => clearInterval(S);
  }, [e]);
  const y = Ee.useCallback(() => e === "streamlit" ? M1(i, d) : i, [i, e, d]);
  Ee.useEffect(() => {
    c(typeof t == "number" ? t : t === "stretch" ? "100%" : "auto");
  }, [t]), Ee.useEffect(() => {
    if (!o.current) return;
    const k = o.current.getContext("2d");
    if (!k) return;
    l.current && (l.current.destroy(), l.current = null);
    const S = y(), b = S.type, L = ["pie", "doughnut", "radar", "polarArea"].includes(
      b
    ) ? 1.5 : 2, z = {
      ...S,
      options: {
        ...S.options,
        responsive: !0,
        maintainAspectRatio: t === "content",
        // Use chart-type-appropriate aspect ratio, allow user override
        aspectRatio: S.options?.aspectRatio ?? L
      }
    };
    return l.current = new wu(k, z), () => {
      l.current && (l.current.destroy(), l.current = null);
    };
  }, [y, t]), Ee.useEffect(() => {
    const k = r.current;
    if (!k) return;
    const S = new ResizeObserver(() => {
      l.current && l.current.resize();
    });
    return S.observe(k), () => {
      S.disconnect();
    };
  }, []);
  const v = {
    width: "100%",
    height: u,
    minHeight: t === "stretch" ? "200px" : void 0,
    position: "relative"
  }, _ = {
    width: "100%",
    height: "100%"
  };
  return /* @__PURE__ */ _o.jsx("div", { ref: r, style: v, children: /* @__PURE__ */ _o.jsx("canvas", { ref: o, style: _ }) });
}, yo = /* @__PURE__ */ new WeakMap(), E1 = (i) => {
  const { data: t, parentElement: e } = i, r = e.querySelector(".react-root");
  if (!r)
    throw new Error("Unexpected: React root element not found");
  let o = yo.get(e);
  o || (o = e0.createRoot(r), yo.set(e, o));
  const { spec: l, height: u, theme: c } = t;
  return o.render(
    /* @__PURE__ */ _o.jsx(Ee.StrictMode, { children: /* @__PURE__ */ _o.jsx(P1, { spec: l, height: u, theme: c }) })
  ), () => {
    const d = yo.get(e);
    d && (d.unmount(), yo.delete(e));
  };
};
export {
  E1 as default
};
