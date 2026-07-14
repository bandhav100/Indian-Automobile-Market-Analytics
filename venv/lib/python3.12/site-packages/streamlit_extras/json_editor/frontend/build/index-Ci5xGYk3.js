var di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ed(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var lu = { exports: {} }, ja = {}, iu = { exports: {} }, Me = {};
var Xc;
function td() {
  if (Xc) return Me;
  Xc = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.provider"), I = /* @__PURE__ */ Symbol.for("react.context"), z = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), q = Symbol.iterator;
  function R(b) {
    return b === null || typeof b != "object" ? null : (b = q && b[q] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var ke = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, y = Object.assign, S = {};
  function x(b, H, Se) {
    this.props = b, this.context = H, this.refs = S, this.updater = Se || ke;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(b, H) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, H, "setState");
  }, x.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function O() {
  }
  O.prototype = x.prototype;
  function v(b, H, Se) {
    this.props = b, this.context = H, this.refs = S, this.updater = Se || ke;
  }
  var A = v.prototype = new O();
  A.constructor = v, y(A, x.prototype), A.isPureReactComponent = !0;
  var h = Array.isArray, F = Object.prototype.hasOwnProperty, f = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(b, H, Se) {
    var je, ze = {}, xe = null, Te = null;
    if (H != null) for (je in H.ref !== void 0 && (Te = H.ref), H.key !== void 0 && (xe = "" + H.key), H) F.call(H, je) && !P.hasOwnProperty(je) && (ze[je] = H[je]);
    var Re = arguments.length - 2;
    if (Re === 1) ze.children = Se;
    else if (1 < Re) {
      for (var Ue = Array(Re), St = 0; St < Re; St++) Ue[St] = arguments[St + 2];
      ze.children = Ue;
    }
    if (b && b.defaultProps) for (je in Re = b.defaultProps, Re) ze[je] === void 0 && (ze[je] = Re[je]);
    return { $$typeof: u, type: b, key: xe, ref: Te, props: ze, _owner: f.current };
  }
  function J(b, H) {
    return { $$typeof: u, type: b.type, key: H, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function fe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === u;
  }
  function me(b) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Se) {
      return H[Se];
    });
  }
  var se = /\/+/g;
  function we(b, H) {
    return typeof b == "object" && b !== null && b.key != null ? me("" + b.key) : H.toString(36);
  }
  function Pe(b, H, Se, je, ze) {
    var xe = typeof b;
    (xe === "undefined" || xe === "boolean") && (b = null);
    var Te = !1;
    if (b === null) Te = !0;
    else switch (xe) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case u:
          case m:
            Te = !0;
        }
    }
    if (Te) return Te = b, ze = ze(Te), b = je === "" ? "." + we(Te, 0) : je, h(ze) ? (Se = "", b != null && (Se = b.replace(se, "$&/") + "/"), Pe(ze, H, Se, "", function(St) {
      return St;
    })) : ze != null && (fe(ze) && (ze = J(ze, Se + (!ze.key || Te && Te.key === ze.key ? "" : ("" + ze.key).replace(se, "$&/") + "/") + b)), H.push(ze)), 1;
    if (Te = 0, je = je === "" ? "." : je + ":", h(b)) for (var Re = 0; Re < b.length; Re++) {
      xe = b[Re];
      var Ue = je + we(xe, Re);
      Te += Pe(xe, H, Se, Ue, ze);
    }
    else if (Ue = R(b), typeof Ue == "function") for (b = Ue.call(b), Re = 0; !(xe = b.next()).done; ) xe = xe.value, Ue = je + we(xe, Re++), Te += Pe(xe, H, Se, Ue, ze);
    else if (xe === "object") throw H = String(b), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function Ne(b, H, Se) {
    if (b == null) return b;
    var je = [], ze = 0;
    return Pe(b, je, "", "", function(xe) {
      return H.call(Se, xe, ze++);
    }), je;
  }
  function Be(b) {
    if (b._status === -1) {
      var H = b._result;
      H = H(), H.then(function(Se) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Se);
      }, function(Se) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Se);
      }), b._status === -1 && (b._status = 0, b._result = H);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var qe = { current: null }, re = { transition: null }, be = { ReactCurrentDispatcher: qe, ReactCurrentBatchConfig: re, ReactCurrentOwner: f };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Me.Children = { map: Ne, forEach: function(b, H, Se) {
    Ne(b, function() {
      H.apply(this, arguments);
    }, Se);
  }, count: function(b) {
    var H = 0;
    return Ne(b, function() {
      H++;
    }), H;
  }, toArray: function(b) {
    return Ne(b, function(H) {
      return H;
    }) || [];
  }, only: function(b) {
    if (!fe(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Me.Component = x, Me.Fragment = p, Me.Profiler = E, Me.PureComponent = v, Me.StrictMode = k, Me.Suspense = U, Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Me.act = le, Me.cloneElement = function(b, H, Se) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var je = y({}, b.props), ze = b.key, xe = b.ref, Te = b._owner;
    if (H != null) {
      if (H.ref !== void 0 && (xe = H.ref, Te = f.current), H.key !== void 0 && (ze = "" + H.key), b.type && b.type.defaultProps) var Re = b.type.defaultProps;
      for (Ue in H) F.call(H, Ue) && !P.hasOwnProperty(Ue) && (je[Ue] = H[Ue] === void 0 && Re !== void 0 ? Re[Ue] : H[Ue]);
    }
    var Ue = arguments.length - 2;
    if (Ue === 1) je.children = Se;
    else if (1 < Ue) {
      Re = Array(Ue);
      for (var St = 0; St < Ue; St++) Re[St] = arguments[St + 2];
      je.children = Re;
    }
    return { $$typeof: u, type: b.type, key: ze, ref: xe, props: je, _owner: Te };
  }, Me.createContext = function(b) {
    return b = { $$typeof: I, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: D, _context: b }, b.Consumer = b;
  }, Me.createElement = K, Me.createFactory = function(b) {
    var H = K.bind(null, b);
    return H.type = b, H;
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(b) {
    return { $$typeof: z, render: b };
  }, Me.isValidElement = fe, Me.lazy = function(b) {
    return { $$typeof: oe, _payload: { _status: -1, _result: b }, _init: Be };
  }, Me.memo = function(b, H) {
    return { $$typeof: Y, type: b, compare: H === void 0 ? null : H };
  }, Me.startTransition = function(b) {
    var H = re.transition;
    re.transition = {};
    try {
      b();
    } finally {
      re.transition = H;
    }
  }, Me.unstable_act = le, Me.useCallback = function(b, H) {
    return qe.current.useCallback(b, H);
  }, Me.useContext = function(b) {
    return qe.current.useContext(b);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(b) {
    return qe.current.useDeferredValue(b);
  }, Me.useEffect = function(b, H) {
    return qe.current.useEffect(b, H);
  }, Me.useId = function() {
    return qe.current.useId();
  }, Me.useImperativeHandle = function(b, H, Se) {
    return qe.current.useImperativeHandle(b, H, Se);
  }, Me.useInsertionEffect = function(b, H) {
    return qe.current.useInsertionEffect(b, H);
  }, Me.useLayoutEffect = function(b, H) {
    return qe.current.useLayoutEffect(b, H);
  }, Me.useMemo = function(b, H) {
    return qe.current.useMemo(b, H);
  }, Me.useReducer = function(b, H, Se) {
    return qe.current.useReducer(b, H, Se);
  }, Me.useRef = function(b) {
    return qe.current.useRef(b);
  }, Me.useState = function(b) {
    return qe.current.useState(b);
  }, Me.useSyncExternalStore = function(b, H, Se) {
    return qe.current.useSyncExternalStore(b, H, Se);
  }, Me.useTransition = function() {
    return qe.current.useTransition();
  }, Me.version = "18.3.1", Me;
}
var Jc;
function yi() {
  return Jc || (Jc = 1, iu.exports = td()), iu.exports;
}
var Zc;
function nd() {
  if (Zc) return ja;
  Zc = 1;
  var u = yi(), m = /* @__PURE__ */ Symbol.for("react.element"), p = /* @__PURE__ */ Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(z, U, Y) {
    var oe, q = {}, R = null, ke = null;
    Y !== void 0 && (R = "" + Y), U.key !== void 0 && (R = "" + U.key), U.ref !== void 0 && (ke = U.ref);
    for (oe in U) k.call(U, oe) && !D.hasOwnProperty(oe) && (q[oe] = U[oe]);
    if (z && z.defaultProps) for (oe in U = z.defaultProps, U) q[oe] === void 0 && (q[oe] = U[oe]);
    return { $$typeof: m, type: z, key: R, ref: ke, props: q, _owner: E.current };
  }
  return ja.Fragment = p, ja.jsx = I, ja.jsxs = I, ja;
}
var ef;
function rd() {
  return ef || (ef = 1, lu.exports = nd()), lu.exports;
}
var gi = rd(), tn = yi(), pi = {}, su = { exports: {} }, Ft = {}, uu = { exports: {} }, cu = {};
var tf;
function od() {
  return tf || (tf = 1, (function(u) {
    function m(re, be) {
      var le = re.length;
      re.push(be);
      e: for (; 0 < le; ) {
        var b = le - 1 >>> 1, H = re[b];
        if (0 < E(H, be)) re[b] = be, re[le] = H, le = b;
        else break e;
      }
    }
    function p(re) {
      return re.length === 0 ? null : re[0];
    }
    function k(re) {
      if (re.length === 0) return null;
      var be = re[0], le = re.pop();
      if (le !== be) {
        re[0] = le;
        e: for (var b = 0, H = re.length, Se = H >>> 1; b < Se; ) {
          var je = 2 * (b + 1) - 1, ze = re[je], xe = je + 1, Te = re[xe];
          if (0 > E(ze, le)) xe < H && 0 > E(Te, ze) ? (re[b] = Te, re[xe] = le, b = xe) : (re[b] = ze, re[je] = le, b = je);
          else if (xe < H && 0 > E(Te, le)) re[b] = Te, re[xe] = le, b = xe;
          else break e;
        }
      }
      return be;
    }
    function E(re, be) {
      var le = re.sortIndex - be.sortIndex;
      return le !== 0 ? le : re.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      u.unstable_now = function() {
        return D.now();
      };
    } else {
      var I = Date, z = I.now();
      u.unstable_now = function() {
        return I.now() - z;
      };
    }
    var U = [], Y = [], oe = 1, q = null, R = 3, ke = !1, y = !1, S = !1, x = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(re) {
      for (var be = p(Y); be !== null; ) {
        if (be.callback === null) k(Y);
        else if (be.startTime <= re) k(Y), be.sortIndex = be.expirationTime, m(U, be);
        else break;
        be = p(Y);
      }
    }
    function h(re) {
      if (S = !1, A(re), !y) if (p(U) !== null) y = !0, Be(F);
      else {
        var be = p(Y);
        be !== null && qe(h, be.startTime - re);
      }
    }
    function F(re, be) {
      y = !1, S && (S = !1, O(K), K = -1), ke = !0;
      var le = R;
      try {
        for (A(be), q = p(U); q !== null && (!(q.expirationTime > be) || re && !me()); ) {
          var b = q.callback;
          if (typeof b == "function") {
            q.callback = null, R = q.priorityLevel;
            var H = b(q.expirationTime <= be);
            be = u.unstable_now(), typeof H == "function" ? q.callback = H : q === p(U) && k(U), A(be);
          } else k(U);
          q = p(U);
        }
        if (q !== null) var Se = !0;
        else {
          var je = p(Y);
          je !== null && qe(h, je.startTime - be), Se = !1;
        }
        return Se;
      } finally {
        q = null, R = le, ke = !1;
      }
    }
    var f = !1, P = null, K = -1, J = 5, fe = -1;
    function me() {
      return !(u.unstable_now() - fe < J);
    }
    function se() {
      if (P !== null) {
        var re = u.unstable_now();
        fe = re;
        var be = !0;
        try {
          be = P(!0, re);
        } finally {
          be ? we() : (f = !1, P = null);
        }
      } else f = !1;
    }
    var we;
    if (typeof v == "function") we = function() {
      v(se);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), Ne = Pe.port2;
      Pe.port1.onmessage = se, we = function() {
        Ne.postMessage(null);
      };
    } else we = function() {
      x(se, 0);
    };
    function Be(re) {
      P = re, f || (f = !0, we());
    }
    function qe(re, be) {
      K = x(function() {
        re(u.unstable_now());
      }, be);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, u.unstable_continueExecution = function() {
      y || ke || (y = !0, Be(F));
    }, u.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < re ? Math.floor(1e3 / re) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, u.unstable_getFirstCallbackNode = function() {
      return p(U);
    }, u.unstable_next = function(re) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = R;
      }
      var le = R;
      R = be;
      try {
        return re();
      } finally {
        R = le;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(re, be) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var le = R;
      R = re;
      try {
        return be();
      } finally {
        R = le;
      }
    }, u.unstable_scheduleCallback = function(re, be, le) {
      var b = u.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? b + le : b) : le = b, re) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = le + H, re = { id: oe++, callback: be, priorityLevel: re, startTime: le, expirationTime: H, sortIndex: -1 }, le > b ? (re.sortIndex = le, m(Y, re), p(U) === null && re === p(Y) && (S ? (O(K), K = -1) : S = !0, qe(h, le - b))) : (re.sortIndex = H, m(U, re), y || ke || (y = !0, Be(F))), re;
    }, u.unstable_shouldYield = me, u.unstable_wrapCallback = function(re) {
      var be = R;
      return function() {
        var le = R;
        R = be;
        try {
          return re.apply(this, arguments);
        } finally {
          R = le;
        }
      };
    };
  })(cu)), cu;
}
var nf;
function ad() {
  return nf || (nf = 1, uu.exports = od()), uu.exports;
}
var rf;
function ld() {
  if (rf) return Ft;
  rf = 1;
  var u = yi(), m = ad();
  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = /* @__PURE__ */ new Set(), E = {};
  function D(e, t) {
    I(e, t), I(e + "Capture", t);
  }
  function I(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var z = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, q = {};
  function R(e) {
    return U.call(q, e) ? !0 : U.call(oe, e) ? !1 : Y.test(e) ? q[e] = !0 : (oe[e] = !0, !1);
  }
  function ke(e, t, n, r) {
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
  function y(e, t, n, r) {
    if (t === null || typeof t > "u" || ke(e, t, n, r)) return !0;
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
  function S(e, t, n, r, o, i, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = d;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    x[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var O = /[\-:]([a-z])/g;
  function v(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      O,
      v
    );
    x[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(O, v);
    x[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(O, v);
    x[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, t, n, r) {
    var o = x.hasOwnProperty(t) ? x[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (y(t, n, o, r) && (n = null), r || o === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var h = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), fe = /* @__PURE__ */ Symbol.for("react.provider"), me = /* @__PURE__ */ Symbol.for("react.context"), se = /* @__PURE__ */ Symbol.for("react.forward_ref"), we = /* @__PURE__ */ Symbol.for("react.suspense"), Pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ne = /* @__PURE__ */ Symbol.for("react.memo"), Be = /* @__PURE__ */ Symbol.for("react.lazy"), qe = /* @__PURE__ */ Symbol.for("react.offscreen"), re = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Object.assign, b;
  function H(e) {
    if (b === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      b = t && t[1] || "";
    }
    return `
` + b + e;
  }
  var Se = !1;
  function je(e, t) {
    if (!e || Se) return "";
    Se = !0;
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
        } catch (V) {
          var r = V;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (V) {
          r = V;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (V) {
          r = V;
        }
        e();
      }
    } catch (V) {
      if (V && r && typeof V.stack == "string") {
        for (var o = V.stack.split(`
`), i = r.stack.split(`
`), d = o.length - 1, w = i.length - 1; 1 <= d && 0 <= w && o[d] !== i[w]; ) w--;
        for (; 1 <= d && 0 <= w; d--, w--) if (o[d] !== i[w]) {
          if (d !== 1 || w !== 1)
            do
              if (d--, w--, 0 > w || o[d] !== i[w]) {
                var j = `
` + o[d].replace(" at new ", " at ");
                return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
              }
            while (1 <= d && 0 <= w);
          break;
        }
      }
    } finally {
      Se = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function ze(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = je(e.type, !1), e;
      case 11:
        return e = je(e.type.render, !1), e;
      case 1:
        return e = je(e.type, !0), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case P:
        return "Fragment";
      case f:
        return "Portal";
      case J:
        return "Profiler";
      case K:
        return "StrictMode";
      case we:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case me:
        return (e.displayName || "Context") + ".Consumer";
      case fe:
        return (e._context.displayName || "Context") + ".Provider";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ne:
        return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
      case Be:
        t = e._payload, e = e._init;
        try {
          return xe(e(t));
        } catch {
        }
    }
    return null;
  }
  function Te(e) {
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
        return xe(t);
      case 8:
        return t === K ? "StrictMode" : "Mode";
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
  function Re(e) {
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
  function Ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function St(e) {
    var t = Ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(d) {
        r = "" + d, i.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function nn(e) {
    e._valueTracker || (e._valueTracker = St(e));
  }
  function Oa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ue(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Lr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fo(e, t) {
    var n = t.checked;
    return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ro(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Re(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ao(e, t) {
    t = t.checked, t != null && A(e, "checked", t, !1);
  }
  function rn(e, t) {
    Ao(e, t);
    var n = Re(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? or(e, t.type, n) : t.hasOwnProperty("defaultValue") && or(e, t.type, Re(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ma(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function or(e, t, n) {
    (t !== "number" || Lr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var zn = Array.isArray;
  function vn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Re(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pa(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (zn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Re(n) };
  }
  function Na(e, t) {
    var n = Re(t.value), r = Re(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function za(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Fa(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Do(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Fa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Dr, Ra = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Dr = Dr || document.createElement("div"), Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Dr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function ar(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var lr = {
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
  }, bi = ["Webkit", "ms", "Moz", "O"];
  Object.keys(lr).forEach(function(e) {
    bi.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e];
    });
  });
  function To(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px";
  }
  function Io(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = To(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var Tr = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ir(e, t) {
    if (t) {
      if (Tr[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Br(e, t) {
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
  var ir = null;
  function gn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bo = null, yn = null, Fn = null;
  function Vo(e) {
    if (e = da(e)) {
      if (typeof Bo != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = jl(t), Bo(e.stateNode, e.type, t));
    }
  }
  function Aa(e) {
    yn ? Fn ? Fn.push(e) : Fn = [e] : yn = e;
  }
  function Uo() {
    if (yn) {
      var e = yn, t = Fn;
      if (Fn = yn = null, Vo(e), t) for (e = 0; e < t.length; e++) Vo(t[e]);
    }
  }
  function La(e, t) {
    return e(t);
  }
  function Vr() {
  }
  var Rn = !1;
  function Ur(e, t, n) {
    if (Rn) return e(t, n);
    Rn = !0;
    try {
      return La(e, t, n);
    } finally {
      Rn = !1, (yn !== null || Fn !== null) && (Vr(), Uo());
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = jl(n);
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
  var Wr = !1;
  if (z) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      Wr = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    Wr = !1;
  }
  function ki(e, t, n, r, o, i, d, w, j) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, V);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var on = !1, Ln = null, qr = !1, Kr = null, Da = { onError: function(e) {
    on = !0, Ln = e;
  } };
  function wi(e, t, n, r, o, i, d, w, j) {
    on = !1, Ln = null, ki.apply(Da, arguments);
  }
  function Ei(e, t, n, r, o, i, d, w, j) {
    if (wi.apply(this, arguments), on) {
      if (on) {
        var V = Ln;
        on = !1, Ln = null;
      } else throw Error(p(198));
      qr || (qr = !0, Kr = V);
    }
  }
  function Bt(e) {
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
  function Ta(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ia(e) {
    if (Bt(e) !== e) throw Error(p(188));
  }
  function _i(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Bt(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return Ia(o), e;
          if (i === r) return Ia(o), t;
          i = i.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) n = o, r = i;
      else {
        for (var d = !1, w = o.child; w; ) {
          if (w === n) {
            d = !0, n = o, r = i;
            break;
          }
          if (w === r) {
            d = !0, r = o, n = i;
            break;
          }
          w = w.sibling;
        }
        if (!d) {
          for (w = i.child; w; ) {
            if (w === n) {
              d = !0, n = i, r = o;
              break;
            }
            if (w === r) {
              d = !0, r = i, n = o;
              break;
            }
            w = w.sibling;
          }
          if (!d) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function Wo(e) {
    return e = _i(e), e !== null ? qo(e) : null;
  }
  function qo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ba = m.unstable_scheduleCallback, Va = m.unstable_cancelCallback, Si = m.unstable_shouldYield, xi = m.unstable_requestPaint, $e = m.unstable_now, Ci = m.unstable_getCurrentPriorityLevel, Hr = m.unstable_ImmediatePriority, Ua = m.unstable_UserBlockingPriority, $r = m.unstable_NormalPriority, ji = m.unstable_LowPriority, Wa = m.unstable_IdlePriority, Qr = null, Vt = null;
  function Oi(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(Qr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Rt = Math.clz32 ? Math.clz32 : Ka, Mi = Math.log, qa = Math.LN2;
  function Ka(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Mi(e) / qa | 0) | 0;
  }
  var ur = 64, Yr = 4194304;
  function cr(e) {
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
  function Gr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var w = d & ~o;
      w !== 0 ? r = cr(w) : (i &= d, i !== 0 && (r = cr(i)));
    } else d = n & ~o, d !== 0 ? r = cr(d) : i !== 0 && (r = cr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Rt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Pi(e, t) {
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
  function Ha(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var d = 31 - Rt(i), w = 1 << d, j = o[d];
      j === -1 ? ((w & n) === 0 || (w & r) !== 0) && (o[d] = Pi(w, t)) : j <= t && (e.expiredLanes |= w), i &= ~w;
    }
  }
  function Dn(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ko() {
    var e = ur;
    return ur <<= 1, (ur & 4194240) === 0 && (ur = 64), e;
  }
  function Ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function fr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
  }
  function $a(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Rt(n), i = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
    }
  }
  function dr(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Rt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var Ie = 0;
  function Qa(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ya, $o, Ga, Xa, Ja, Qo = !1, Xr = [], an = null, ln = null, sn = null, pr = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), Yt = [], Za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function el(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        ln = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hr.delete(t.pointerId);
    }
  }
  function bn(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = da(t), t !== null && $o(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function tl(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return an = bn(an, e, t, n, r, o), !0;
      case "dragenter":
        return ln = bn(ln, e, t, n, r, o), !0;
      case "mouseover":
        return sn = bn(sn, e, t, n, r, o), !0;
      case "pointerover":
        var i = o.pointerId;
        return pr.set(i, bn(pr.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return i = o.pointerId, hr.set(i, bn(hr.get(i) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function Yo(e) {
    var t = Sr(e.target);
    if (t !== null) {
      var n = Bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ta(n), t !== null) {
            e.blockedOn = t, Ja(e.priority, function() {
              Ga(n);
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
  function mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ir = r, n.target.dispatchEvent(r), ir = null;
      } else return t = da(n), t !== null && $o(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Go(e, t, n) {
    mr(e) && n.delete(t);
  }
  function Ni() {
    Qo = !1, an !== null && mr(an) && (an = null), ln !== null && mr(ln) && (ln = null), sn !== null && mr(sn) && (sn = null), pr.forEach(Go), hr.forEach(Go);
  }
  function Ut(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qo || (Qo = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Ni)));
  }
  function vr(e) {
    function t(o) {
      return Ut(o, e);
    }
    if (0 < Xr.length) {
      Ut(Xr[0], e);
      for (var n = 1; n < Xr.length; n++) {
        var r = Xr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (an !== null && Ut(an, e), ln !== null && Ut(ln, e), sn !== null && Ut(sn, e), pr.forEach(t), hr.forEach(t), n = 0; n < Yt.length; n++) r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null); ) Yo(n), n.blockedOn === null && Yt.shift();
  }
  var Tn = h.ReactCurrentBatchConfig, Jr = !0;
  function zi(e, t, n, r) {
    var o = Ie, i = Tn.transition;
    Tn.transition = null;
    try {
      Ie = 1, Xo(e, t, n, r);
    } finally {
      Ie = o, Tn.transition = i;
    }
  }
  function Fi(e, t, n, r) {
    var o = Ie, i = Tn.transition;
    Tn.transition = null;
    try {
      Ie = 4, Xo(e, t, n, r);
    } finally {
      Ie = o, Tn.transition = i;
    }
  }
  function Xo(e, t, n, r) {
    if (Jr) {
      var o = Jo(e, t, n, r);
      if (o === null) ca(e, t, r, Zr, n), el(e, r);
      else if (tl(o, e, t, n, r)) r.stopPropagation();
      else if (el(e, r), t & 4 && -1 < Za.indexOf(e)) {
        for (; o !== null; ) {
          var i = da(o);
          if (i !== null && Ya(i), i = Jo(e, t, n, r), i === null && ca(e, t, r, Zr, n), i === o) break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else ca(e, t, r, null, n);
    }
  }
  var Zr = null;
  function Jo(e, t, n, r) {
    if (Zr = null, e = gn(r), e = Sr(e), e !== null) if (t = Bt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ta(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Zr = e, null;
  }
  function Z(e) {
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
        switch (Ci()) {
          case Hr:
            return 1;
          case Ua:
            return 4;
          case $r:
          case ji:
            return 16;
          case Wa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ft = null, eo = null, gr = null;
  function Zo() {
    if (gr) return gr;
    var e, t = eo, n = t.length, r, o = "value" in ft ? ft.value : ft.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === o[i - r]; r++) ;
    return gr = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function to(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function no() {
    return !0;
  }
  function At() {
    return !1;
  }
  function dt(e) {
    function t(n, r, o, i, d) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var w in e) e.hasOwnProperty(w) && (n = e[w], this[w] = n ? n(i) : i[w]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? no : At, this.isPropagationStopped = At, this;
    }
    return le(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = no);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = no);
    }, persist: function() {
    }, isPersistent: no }), t;
  }
  var un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ot = dt(un), In = le({}, un, { view: 0, detail: 0 }), nl = dt(In), ro, oo, yr, br = le({}, In, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ra, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== yr && (yr && e.type === "mousemove" ? (ro = e.screenX - yr.screenX, oo = e.screenY - yr.screenY) : oo = ro = 0, yr = e), ro);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : oo;
  } }), ea = dt(br), rl = le({}, br, { dataTransfer: 0 }), ta = dt(rl), Ri = le({}, In, { relatedTarget: 0 }), ao = dt(Ri), ol = le({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), al = dt(ol), yt = le({}, un, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ll = dt(yt), il = le({}, un, { data: 0 }), sl = dt(il), Ai = {
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
  }, Li = {
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
  }, na = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Di(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = na[e]) ? !!t[e] : !1;
  }
  function ra() {
    return Di;
  }
  var Ti = le({}, In, { key: function(e) {
    if (e.key) {
      var t = Ai[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = to(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Li[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ra, charCode: function(e) {
    return e.type === "keypress" ? to(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? to(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ul = dt(Ti), pt = le({}, br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lo = dt(pt), Ii = le({}, In, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ra }), Bi = dt(Ii), Vi = le({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ui = dt(Vi), Wi = le({}, br, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qi = dt(Wi), Ki = [9, 13, 27, 32], oa = z && "CompositionEvent" in window, kr = null;
  z && "documentMode" in document && (kr = document.documentMode);
  var Hi = z && "TextEvent" in window && !kr, cl = z && (!oa || kr && 8 < kr && 11 >= kr), fl = " ", dl = !1;
  function pl(e, t) {
    switch (e) {
      case "keyup":
        return Ki.indexOf(t.keyCode) !== -1;
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
  function hl(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bn = !1;
  function $i(e, t) {
    switch (e) {
      case "compositionend":
        return hl(t);
      case "keypress":
        return t.which !== 32 ? null : (dl = !0, fl);
      case "textInput":
        return e = t.data, e === fl && dl ? null : e;
      default:
        return null;
    }
  }
  function Qi(e, t) {
    if (Bn) return e === "compositionend" || !oa && pl(e, t) ? (e = Zo(), gr = eo = ft = null, Bn = !1, e) : null;
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
        return cl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ml = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ml[e.type] : t === "textarea";
  }
  function vl(e, t, n, r) {
    Aa(r), t = Sl(t, "onChange"), 0 < t.length && (n = new ot("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Vn = null, wr = null;
  function aa(e) {
    fo(e, 0);
  }
  function ht(e) {
    var t = vo(e);
    if (Oa(t)) return e;
  }
  function gl(e, t) {
    if (e === "change") return t;
  }
  var yl = !1;
  if (z) {
    var so;
    if (z) {
      var uo = "oninput" in document;
      if (!uo) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"), uo = typeof la.oninput == "function";
      }
      so = uo;
    } else so = !1;
    yl = so && (!document.documentMode || 9 < document.documentMode);
  }
  function ia() {
    Vn && (Vn.detachEvent("onpropertychange", bl), wr = Vn = null);
  }
  function bl(e) {
    if (e.propertyName === "value" && ht(wr)) {
      var t = [];
      vl(t, wr, e, gn(e)), Ur(aa, t);
    }
  }
  function kl(e, t, n) {
    e === "focusin" ? (ia(), Vn = t, wr = n, Vn.attachEvent("onpropertychange", bl)) : e === "focusout" && ia();
  }
  function Yi(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ht(wr);
  }
  function sa(e, t) {
    if (e === "click") return ht(t);
  }
  function Gi(e, t) {
    if (e === "input" || e === "change") return ht(t);
  }
  function co(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Lt = typeof Object.is == "function" ? Object.is : co;
  function Er(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!U.call(t, o) || !Lt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function wl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function El(e, t) {
    var n = wl(e);
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
      n = wl(n);
    }
  }
  function _r(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _r(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _l() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Lr(e.document);
    }
    return t;
  }
  function l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function a(e) {
    var t = _l(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _r(n.ownerDocument.documentElement, n)) {
      if (r !== null && l(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, i = Math.min(r.start, o);
          r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = El(n, i);
          var d = El(
            n,
            r
          );
          o && d && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var s = z && "documentMode" in document && 11 >= document.documentMode, c = null, g = null, C = null, M = !1;
  function _(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    M || c == null || c !== Lr(r) || (r = c, "selectionStart" in r && l(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), C && Er(C, r) || (C = r, r = Sl(g, "onSelect"), 0 < r.length && (t = new ot("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = c)));
  }
  function L(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var W = { animationend: L("Animation", "AnimationEnd"), animationiteration: L("Animation", "AnimationIteration"), animationstart: L("Animation", "AnimationStart"), transitionend: L("Transition", "TransitionEnd") }, G = {}, te = {};
  z && (te = document.createElement("div").style, "AnimationEvent" in window || (delete W.animationend.animation, delete W.animationiteration.animation, delete W.animationstart.animation), "TransitionEvent" in window || delete W.transitionend.transition);
  function de(e) {
    if (G[e]) return G[e];
    if (!W[e]) return e;
    var t = W[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in te) return G[e] = t[n];
    return e;
  }
  var ie = de("animationend"), Oe = de("animationiteration"), Ae = de("animationstart"), ve = de("transitionend"), Ce = /* @__PURE__ */ new Map(), Le = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _e(e, t) {
    Ce.set(e, t), D(t, [e]);
  }
  for (var mt = 0; mt < Le.length; mt++) {
    var at = Le[mt], kn = at.toLowerCase(), cn = at[0].toUpperCase() + at.slice(1);
    _e(kn, "on" + cn);
  }
  _e(ie, "onAnimationEnd"), _e(Oe, "onAnimationIteration"), _e(Ae, "onAnimationStart"), _e("dblclick", "onDoubleClick"), _e("focusin", "onFocus"), _e("focusout", "onBlur"), _e(ve, "onTransitionEnd"), I("onMouseEnter", ["mouseout", "mouseover"]), I("onMouseLeave", ["mouseout", "mouseover"]), I("onPointerEnter", ["pointerout", "pointerover"]), I("onPointerLeave", ["pointerout", "pointerover"]), D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), D("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), D("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bt = new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));
  function ua(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ei(r, t, void 0, e), e.currentTarget = null;
  }
  function fo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var w = r[d], j = w.instance, V = w.currentTarget;
          if (w = w.listener, j !== i && o.isPropagationStopped()) break e;
          ua(o, w, V), i = j;
        }
        else for (d = 0; d < r.length; d++) {
          if (w = r[d], j = w.instance, V = w.currentTarget, w = w.listener, j !== i && o.isPropagationStopped()) break e;
          ua(o, w, V), i = j;
        }
      }
    }
    if (qr) throw e = Kr, qr = !1, Kr = null, e;
  }
  function Ve(e, t) {
    var n = t[ns];
    n === void 0 && (n = t[ns] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (po(t, e, 2, !1), n.add(r));
  }
  function wn(e, t, n) {
    var r = 0;
    t && (r |= 4), po(n, e, r, t);
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);
  function En(e) {
    if (!e[Un]) {
      e[Un] = !0, k.forEach(function(n) {
        n !== "selectionchange" && (bt.has(n) || wn(n, !1, e), wn(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Un] || (t[Un] = !0, wn("selectionchange", !1, t));
    }
  }
  function po(e, t, n, r) {
    switch (Z(t)) {
      case 1:
        var o = zi;
        break;
      case 4:
        o = Fi;
        break;
      default:
        o = Xo;
    }
    n = o.bind(null, t, n, e), o = void 0, !Wr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function ca(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var w = r.stateNode.containerInfo;
        if (w === o || w.nodeType === 8 && w.parentNode === o) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var j = d.tag;
          if ((j === 3 || j === 4) && (j = d.stateNode.containerInfo, j === o || j.nodeType === 8 && j.parentNode === o)) return;
          d = d.return;
        }
        for (; w !== null; ) {
          if (d = Sr(w), d === null) return;
          if (j = d.tag, j === 5 || j === 6) {
            r = i = d;
            continue e;
          }
          w = w.parentNode;
        }
      }
      r = r.return;
    }
    Ur(function() {
      var V = i, Q = gn(n), X = [];
      e: {
        var $ = Ce.get(e);
        if ($ !== void 0) {
          var ae = ot, ce = e;
          switch (e) {
            case "keypress":
              if (to(n) === 0) break e;
            case "keydown":
            case "keyup":
              ae = ul;
              break;
            case "focusin":
              ce = "focus", ae = ao;
              break;
            case "focusout":
              ce = "blur", ae = ao;
              break;
            case "beforeblur":
            case "afterblur":
              ae = ao;
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
              ae = ea;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = ta;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = Bi;
              break;
            case ie:
            case Oe:
            case Ae:
              ae = al;
              break;
            case ve:
              ae = Ui;
              break;
            case "scroll":
              ae = nl;
              break;
            case "wheel":
              ae = qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = ll;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = lo;
          }
          var pe = (t & 4) !== 0, Je = !pe && e === "scroll", T = pe ? $ !== null ? $ + "Capture" : null : $;
          pe = [];
          for (var N = V, B; N !== null; ) {
            B = N;
            var ee = B.stateNode;
            if (B.tag === 5 && ee !== null && (B = ee, T !== null && (ee = An(N, T), ee != null && pe.push(Wn(N, ee, B)))), Je) break;
            N = N.return;
          }
          0 < pe.length && ($ = new ae($, ce, null, n, Q), X.push({ event: $, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", $ && n !== ir && (ce = n.relatedTarget || n.fromElement) && (Sr(ce) || ce[_n])) break e;
          if ((ae || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, ae ? (ce = n.relatedTarget || n.toElement, ae = V, ce = ce ? Sr(ce) : null, ce !== null && (Je = Bt(ce), ce !== Je || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ae = null, ce = V), ae !== ce)) {
            if (pe = ea, ee = "onMouseLeave", T = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (pe = lo, ee = "onPointerLeave", T = "onPointerEnter", N = "pointer"), Je = ae == null ? $ : vo(ae), B = ce == null ? $ : vo(ce), $ = new pe(ee, N + "leave", ae, n, Q), $.target = Je, $.relatedTarget = B, ee = null, Sr(Q) === V && (pe = new pe(T, N + "enter", ce, n, Q), pe.target = B, pe.relatedTarget = Je, ee = pe), Je = ee, ae && ce) t: {
              for (pe = ae, T = ce, N = 0, B = pe; B; B = ho(B)) N++;
              for (B = 0, ee = T; ee; ee = ho(ee)) B++;
              for (; 0 < N - B; ) pe = ho(pe), N--;
              for (; 0 < B - N; ) T = ho(T), B--;
              for (; N--; ) {
                if (pe === T || T !== null && pe === T.alternate) break t;
                pe = ho(pe), T = ho(T);
              }
              pe = null;
            }
            else pe = null;
            ae !== null && mu(X, $, ae, pe, !1), ce !== null && Je !== null && mu(X, Je, ce, pe, !0);
          }
        }
        e: {
          if ($ = V ? vo(V) : window, ae = $.nodeName && $.nodeName.toLowerCase(), ae === "select" || ae === "input" && $.type === "file") var he = gl;
          else if (io($)) if (yl) he = Gi;
          else {
            he = Yi;
            var ge = kl;
          }
          else (ae = $.nodeName) && ae.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (he = sa);
          if (he && (he = he(e, V))) {
            vl(X, he, n, Q);
            break e;
          }
          ge && ge(e, $, V), e === "focusout" && (ge = $._wrapperState) && ge.controlled && $.type === "number" && or($, "number", $.value);
        }
        switch (ge = V ? vo(V) : window, e) {
          case "focusin":
            (io(ge) || ge.contentEditable === "true") && (c = ge, g = V, C = null);
            break;
          case "focusout":
            C = g = c = null;
            break;
          case "mousedown":
            M = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            M = !1, _(X, n, Q);
            break;
          case "selectionchange":
            if (s) break;
          case "keydown":
          case "keyup":
            _(X, n, Q);
        }
        var ye;
        if (oa) e: {
          switch (e) {
            case "compositionstart":
              var Ee = "onCompositionStart";
              break e;
            case "compositionend":
              Ee = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ee = "onCompositionUpdate";
              break e;
          }
          Ee = void 0;
        }
        else Bn ? pl(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (cl && n.locale !== "ko" && (Bn || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Bn && (ye = Zo()) : (ft = Q, eo = "value" in ft ? ft.value : ft.textContent, Bn = !0)), ge = Sl(V, Ee), 0 < ge.length && (Ee = new sl(Ee, e, null, n, Q), X.push({ event: Ee, listeners: ge }), ye ? Ee.data = ye : (ye = hl(n), ye !== null && (Ee.data = ye)))), (ye = Hi ? $i(e, n) : Qi(e, n)) && (V = Sl(V, "onBeforeInput"), 0 < V.length && (Q = new sl("onBeforeInput", "beforeinput", null, n, Q), X.push({ event: Q, listeners: V }), Q.data = ye));
      }
      fo(X, t);
    });
  }
  function Wn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Sl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, i = o.stateNode;
      o.tag === 5 && i !== null && (o = i, i = An(e, n), i != null && r.unshift(Wn(e, i, o)), i = An(e, t), i != null && r.push(Wn(e, i, o))), e = e.return;
    }
    return r;
  }
  function ho(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function mu(e, t, n, r, o) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var w = n, j = w.alternate, V = w.stateNode;
      if (j !== null && j === r) break;
      w.tag === 5 && V !== null && (w = V, o ? (j = An(n, i), j != null && d.unshift(Wn(n, j, w))) : o || (j = An(n, i), j != null && d.push(Wn(n, j, w)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var df = /\r\n?/g, pf = /\u0000|\uFFFD/g;
  function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(df, `
`).replace(pf, "");
  }
  function xl(e, t, n) {
    if (t = vu(t), vu(e) !== t && n) throw Error(p(425));
  }
  function Cl() {
  }
  var Xi = null, Ji = null;
  function Zi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var es = typeof setTimeout == "function" ? setTimeout : void 0, hf = typeof clearTimeout == "function" ? clearTimeout : void 0, gu = typeof Promise == "function" ? Promise : void 0, mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
    return gu.resolve(null).then(e).catch(vf);
  } : es;
  function vf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ts(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), vr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    vr(t);
  }
  function qn(e) {
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
  function yu(e) {
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
  var mo = Math.random().toString(36).slice(2), fn = "__reactFiber$" + mo, fa = "__reactProps$" + mo, _n = "__reactContainer$" + mo, ns = "__reactEvents$" + mo, gf = "__reactListeners$" + mo, yf = "__reactHandles$" + mo;
  function Sr(e) {
    var t = e[fn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[_n] || n[fn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yu(e); e !== null; ) {
          if (n = e[fn]) return n;
          e = yu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function da(e) {
    return e = e[fn] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function jl(e) {
    return e[fa] || null;
  }
  var rs = [], go = -1;
  function Kn(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > go || (e.current = rs[go], rs[go] = null, go--);
  }
  function We(e, t) {
    go++, rs[go] = e.current, e.current = t;
  }
  var Hn = {}, kt = Kn(Hn), Ot = Kn(!1), xr = Hn;
  function yo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Mt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ol() {
    Ke(Ot), Ke(kt);
  }
  function bu(e, t, n) {
    if (kt.current !== Hn) throw Error(p(168));
    We(kt, t), We(Ot, n);
  }
  function ku(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(p(108, Te(e) || "Unknown", o));
    return le({}, n, r);
  }
  function Ml(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hn, xr = kt.current, We(kt, e), We(Ot, Ot.current), !0;
  }
  function wu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = ku(e, t, xr), r.__reactInternalMemoizedMergedChildContext = e, Ke(Ot), Ke(kt), We(kt, e)) : Ke(Ot), We(Ot, n);
  }
  var Sn = null, Pl = !1, os = !1;
  function Eu(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function bf(e) {
    Pl = !0, Eu(e);
  }
  function $n() {
    if (!os && Sn !== null) {
      os = !0;
      var e = 0, t = Ie;
      try {
        var n = Sn;
        for (Ie = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Pl = !1;
      } catch (o) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Ba(Hr, $n), o;
      } finally {
        Ie = t, os = !1;
      }
    }
    return null;
  }
  var bo = [], ko = 0, Nl = null, zl = 0, Wt = [], qt = 0, Cr = null, xn = 1, Cn = "";
  function jr(e, t) {
    bo[ko++] = zl, bo[ko++] = Nl, Nl = e, zl = t;
  }
  function _u(e, t, n) {
    Wt[qt++] = xn, Wt[qt++] = Cn, Wt[qt++] = Cr, Cr = e;
    var r = xn;
    e = Cn;
    var o = 32 - Rt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - Rt(t) + o;
    if (30 < i) {
      var d = o - o % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, o -= d, xn = 1 << 32 - Rt(t) + o | n << o | r, Cn = i + e;
    } else xn = 1 << i | n << o | r, Cn = e;
  }
  function as(e) {
    e.return !== null && (jr(e, 1), _u(e, 1, 0));
  }
  function ls(e) {
    for (; e === Nl; ) Nl = bo[--ko], bo[ko] = null, zl = bo[--ko], bo[ko] = null;
    for (; e === Cr; ) Cr = Wt[--qt], Wt[qt] = null, Cn = Wt[--qt], Wt[qt] = null, xn = Wt[--qt], Wt[qt] = null;
  }
  var Dt = null, Tt = null, He = !1, Gt = null;
  function Su(e, t) {
    var n = Qt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function xu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Dt = e, Tt = qn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Dt = e, Tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cr !== null ? { id: xn, overflow: Cn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Qt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Dt = e, Tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function is(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ss(e) {
    if (He) {
      var t = Tt;
      if (t) {
        var n = t;
        if (!xu(e, t)) {
          if (is(e)) throw Error(p(418));
          t = qn(n.nextSibling);
          var r = Dt;
          t && xu(e, t) ? Su(r, n) : (e.flags = e.flags & -4097 | 2, He = !1, Dt = e);
        }
      } else {
        if (is(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, He = !1, Dt = e;
      }
    }
  }
  function Cu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Dt = e;
  }
  function Fl(e) {
    if (e !== Dt) return !1;
    if (!He) return Cu(e), He = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps)), t && (t = Tt)) {
      if (is(e)) throw ju(), Error(p(418));
      for (; t; ) Su(e, t), t = qn(t.nextSibling);
    }
    if (Cu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Tt = qn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Dt ? qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ju() {
    for (var e = Tt; e; ) e = qn(e.nextSibling);
  }
  function wo() {
    Tt = Dt = null, He = !1;
  }
  function us(e) {
    Gt === null ? Gt = [e] : Gt.push(e);
  }
  var kf = h.ReactCurrentBatchConfig;
  function pa(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(d) {
          var w = o.refs;
          d === null ? delete w[i] : w[i] = d;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function Rl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ou(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Mu(e) {
    function t(T, N) {
      if (e) {
        var B = T.deletions;
        B === null ? (T.deletions = [N], T.flags |= 16) : B.push(N);
      }
    }
    function n(T, N) {
      if (!e) return null;
      for (; N !== null; ) t(T, N), N = N.sibling;
      return null;
    }
    function r(T, N) {
      for (T = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? T.set(N.key, N) : T.set(N.index, N), N = N.sibling;
      return T;
    }
    function o(T, N) {
      return T = tr(T, N), T.index = 0, T.sibling = null, T;
    }
    function i(T, N, B) {
      return T.index = B, e ? (B = T.alternate, B !== null ? (B = B.index, B < N ? (T.flags |= 2, N) : B) : (T.flags |= 2, N)) : (T.flags |= 1048576, N);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function w(T, N, B, ee) {
      return N === null || N.tag !== 6 ? (N = eu(B, T.mode, ee), N.return = T, N) : (N = o(N, B), N.return = T, N);
    }
    function j(T, N, B, ee) {
      var he = B.type;
      return he === P ? Q(T, N, B.props.children, ee, B.key) : N !== null && (N.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Be && Ou(he) === N.type) ? (ee = o(N, B.props), ee.ref = pa(T, N, B), ee.return = T, ee) : (ee = oi(B.type, B.key, B.props, null, T.mode, ee), ee.ref = pa(T, N, B), ee.return = T, ee);
    }
    function V(T, N, B, ee) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== B.containerInfo || N.stateNode.implementation !== B.implementation ? (N = tu(B, T.mode, ee), N.return = T, N) : (N = o(N, B.children || []), N.return = T, N);
    }
    function Q(T, N, B, ee, he) {
      return N === null || N.tag !== 7 ? (N = Ar(B, T.mode, ee, he), N.return = T, N) : (N = o(N, B), N.return = T, N);
    }
    function X(T, N, B) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = eu("" + N, T.mode, B), N.return = T, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case F:
            return B = oi(N.type, N.key, N.props, null, T.mode, B), B.ref = pa(T, null, N), B.return = T, B;
          case f:
            return N = tu(N, T.mode, B), N.return = T, N;
          case Be:
            var ee = N._init;
            return X(T, ee(N._payload), B);
        }
        if (zn(N) || be(N)) return N = Ar(N, T.mode, B, null), N.return = T, N;
        Rl(T, N);
      }
      return null;
    }
    function $(T, N, B, ee) {
      var he = N !== null ? N.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number") return he !== null ? null : w(T, N, "" + B, ee);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case F:
            return B.key === he ? j(T, N, B, ee) : null;
          case f:
            return B.key === he ? V(T, N, B, ee) : null;
          case Be:
            return he = B._init, $(
              T,
              N,
              he(B._payload),
              ee
            );
        }
        if (zn(B) || be(B)) return he !== null ? null : Q(T, N, B, ee, null);
        Rl(T, B);
      }
      return null;
    }
    function ae(T, N, B, ee, he) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return T = T.get(B) || null, w(N, T, "" + ee, he);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case F:
            return T = T.get(ee.key === null ? B : ee.key) || null, j(N, T, ee, he);
          case f:
            return T = T.get(ee.key === null ? B : ee.key) || null, V(N, T, ee, he);
          case Be:
            var ge = ee._init;
            return ae(T, N, B, ge(ee._payload), he);
        }
        if (zn(ee) || be(ee)) return T = T.get(B) || null, Q(N, T, ee, he, null);
        Rl(N, ee);
      }
      return null;
    }
    function ce(T, N, B, ee) {
      for (var he = null, ge = null, ye = N, Ee = N = 0, st = null; ye !== null && Ee < B.length; Ee++) {
        ye.index > Ee ? (st = ye, ye = null) : st = ye.sibling;
        var De = $(T, ye, B[Ee], ee);
        if (De === null) {
          ye === null && (ye = st);
          break;
        }
        e && ye && De.alternate === null && t(T, ye), N = i(De, N, Ee), ge === null ? he = De : ge.sibling = De, ge = De, ye = st;
      }
      if (Ee === B.length) return n(T, ye), He && jr(T, Ee), he;
      if (ye === null) {
        for (; Ee < B.length; Ee++) ye = X(T, B[Ee], ee), ye !== null && (N = i(ye, N, Ee), ge === null ? he = ye : ge.sibling = ye, ge = ye);
        return He && jr(T, Ee), he;
      }
      for (ye = r(T, ye); Ee < B.length; Ee++) st = ae(ye, T, Ee, B[Ee], ee), st !== null && (e && st.alternate !== null && ye.delete(st.key === null ? Ee : st.key), N = i(st, N, Ee), ge === null ? he = st : ge.sibling = st, ge = st);
      return e && ye.forEach(function(nr) {
        return t(T, nr);
      }), He && jr(T, Ee), he;
    }
    function pe(T, N, B, ee) {
      var he = be(B);
      if (typeof he != "function") throw Error(p(150));
      if (B = he.call(B), B == null) throw Error(p(151));
      for (var ge = he = null, ye = N, Ee = N = 0, st = null, De = B.next(); ye !== null && !De.done; Ee++, De = B.next()) {
        ye.index > Ee ? (st = ye, ye = null) : st = ye.sibling;
        var nr = $(T, ye, De.value, ee);
        if (nr === null) {
          ye === null && (ye = st);
          break;
        }
        e && ye && nr.alternate === null && t(T, ye), N = i(nr, N, Ee), ge === null ? he = nr : ge.sibling = nr, ge = nr, ye = st;
      }
      if (De.done) return n(
        T,
        ye
      ), He && jr(T, Ee), he;
      if (ye === null) {
        for (; !De.done; Ee++, De = B.next()) De = X(T, De.value, ee), De !== null && (N = i(De, N, Ee), ge === null ? he = De : ge.sibling = De, ge = De);
        return He && jr(T, Ee), he;
      }
      for (ye = r(T, ye); !De.done; Ee++, De = B.next()) De = ae(ye, T, Ee, De.value, ee), De !== null && (e && De.alternate !== null && ye.delete(De.key === null ? Ee : De.key), N = i(De, N, Ee), ge === null ? he = De : ge.sibling = De, ge = De);
      return e && ye.forEach(function(Zf) {
        return t(T, Zf);
      }), He && jr(T, Ee), he;
    }
    function Je(T, N, B, ee) {
      if (typeof B == "object" && B !== null && B.type === P && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case F:
            e: {
              for (var he = B.key, ge = N; ge !== null; ) {
                if (ge.key === he) {
                  if (he = B.type, he === P) {
                    if (ge.tag === 7) {
                      n(T, ge.sibling), N = o(ge, B.props.children), N.return = T, T = N;
                      break e;
                    }
                  } else if (ge.elementType === he || typeof he == "object" && he !== null && he.$$typeof === Be && Ou(he) === ge.type) {
                    n(T, ge.sibling), N = o(ge, B.props), N.ref = pa(T, ge, B), N.return = T, T = N;
                    break e;
                  }
                  n(T, ge);
                  break;
                } else t(T, ge);
                ge = ge.sibling;
              }
              B.type === P ? (N = Ar(B.props.children, T.mode, ee, B.key), N.return = T, T = N) : (ee = oi(B.type, B.key, B.props, null, T.mode, ee), ee.ref = pa(T, N, B), ee.return = T, T = ee);
            }
            return d(T);
          case f:
            e: {
              for (ge = B.key; N !== null; ) {
                if (N.key === ge) if (N.tag === 4 && N.stateNode.containerInfo === B.containerInfo && N.stateNode.implementation === B.implementation) {
                  n(T, N.sibling), N = o(N, B.children || []), N.return = T, T = N;
                  break e;
                } else {
                  n(T, N);
                  break;
                }
                else t(T, N);
                N = N.sibling;
              }
              N = tu(B, T.mode, ee), N.return = T, T = N;
            }
            return d(T);
          case Be:
            return ge = B._init, Je(T, N, ge(B._payload), ee);
        }
        if (zn(B)) return ce(T, N, B, ee);
        if (be(B)) return pe(T, N, B, ee);
        Rl(T, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, N !== null && N.tag === 6 ? (n(T, N.sibling), N = o(N, B), N.return = T, T = N) : (n(T, N), N = eu(B, T.mode, ee), N.return = T, T = N), d(T)) : n(T, N);
    }
    return Je;
  }
  var Eo = Mu(!0), Pu = Mu(!1), Al = Kn(null), Ll = null, _o = null, cs = null;
  function fs() {
    cs = _o = Ll = null;
  }
  function ds(e) {
    var t = Al.current;
    Ke(Al), e._currentValue = t;
  }
  function ps(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function So(e, t) {
    Ll = e, cs = _o = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Pt = !0), e.firstContext = null);
  }
  function Kt(e) {
    var t = e._currentValue;
    if (cs !== e) if (e = { context: e, memoizedValue: t, next: null }, _o === null) {
      if (Ll === null) throw Error(p(308));
      _o = e, Ll.dependencies = { lanes: 0, firstContext: e };
    } else _o = _o.next = e;
    return t;
  }
  var Or = null;
  function hs(e) {
    Or === null ? Or = [e] : Or.push(e);
  }
  function Nu(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, hs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, jn(e, r);
  }
  function jn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qn = !1;
  function ms(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Fe & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, jn(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, hs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, jn(e, n);
  }
  function Dl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, dr(e, n);
    }
  }
  function Fu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? o = i = d : i = i.next = d, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
      } else o = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Tl(e, t, n, r) {
    var o = e.updateQueue;
    Qn = !1;
    var i = o.firstBaseUpdate, d = o.lastBaseUpdate, w = o.shared.pending;
    if (w !== null) {
      o.shared.pending = null;
      var j = w, V = j.next;
      j.next = null, d === null ? i = V : d.next = V, d = j;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, w = Q.lastBaseUpdate, w !== d && (w === null ? Q.firstBaseUpdate = V : w.next = V, Q.lastBaseUpdate = j));
    }
    if (i !== null) {
      var X = o.baseState;
      d = 0, Q = V = j = null, w = i;
      do {
        var $ = w.lane, ae = w.eventTime;
        if ((r & $) === $) {
          Q !== null && (Q = Q.next = {
            eventTime: ae,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var ce = e, pe = w;
            switch ($ = t, ae = n, pe.tag) {
              case 1:
                if (ce = pe.payload, typeof ce == "function") {
                  X = ce.call(ae, X, $);
                  break e;
                }
                X = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = pe.payload, $ = typeof ce == "function" ? ce.call(ae, X, $) : ce, $ == null) break e;
                X = le({}, X, $);
                break e;
              case 2:
                Qn = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (e.flags |= 64, $ = o.effects, $ === null ? o.effects = [w] : $.push(w));
        } else ae = { eventTime: ae, lane: $, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, Q === null ? (V = Q = ae, j = X) : Q = Q.next = ae, d |= $;
        if (w = w.next, w === null) {
          if (w = o.shared.pending, w === null) break;
          $ = w, w = $.next, $.next = null, o.lastBaseUpdate = $, o.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (j = X), o.baseState = j, o.firstBaseUpdate = V, o.lastBaseUpdate = Q, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          d |= o.lane, o = o.next;
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      Nr |= d, e.lanes = d, e.memoizedState = X;
    }
  }
  function Ru(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(p(191, o));
        o.call(r);
      }
    }
  }
  var ha = {}, dn = Kn(ha), ma = Kn(ha), va = Kn(ha);
  function Mr(e) {
    if (e === ha) throw Error(p(174));
    return e;
  }
  function vs(e, t) {
    switch (We(va, t), We(ma, e), We(dn, ha), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Do(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Do(t, e);
    }
    Ke(dn), We(dn, t);
  }
  function xo() {
    Ke(dn), Ke(ma), Ke(va);
  }
  function Au(e) {
    Mr(va.current);
    var t = Mr(dn.current), n = Do(t, e.type);
    t !== n && (We(ma, e), We(dn, n));
  }
  function gs(e) {
    ma.current === e && (Ke(dn), Ke(ma));
  }
  var Qe = Kn(0);
  function Il(e) {
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
  var ys = [];
  function bs() {
    for (var e = 0; e < ys.length; e++) ys[e]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var Bl = h.ReactCurrentDispatcher, ks = h.ReactCurrentBatchConfig, Pr = 0, Ye = null, et = null, lt = null, Vl = !1, ga = !1, ya = 0, wf = 0;
  function wt() {
    throw Error(p(321));
  }
  function ws(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
    return !0;
  }
  function Es(e, t, n, r, o, i) {
    if (Pr = i, Ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bl.current = e === null || e.memoizedState === null ? xf : Cf, e = n(r, o), ga) {
      i = 0;
      do {
        if (ga = !1, ya = 0, 25 <= i) throw Error(p(301));
        i += 1, lt = et = null, t.updateQueue = null, Bl.current = jf, e = n(r, o);
      } while (ga);
    }
    if (Bl.current = ql, t = et !== null && et.next !== null, Pr = 0, lt = et = Ye = null, Vl = !1, t) throw Error(p(300));
    return e;
  }
  function _s() {
    var e = ya !== 0;
    return ya = 0, e;
  }
  function pn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Ye.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function Ht() {
    if (et === null) {
      var e = Ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = lt === null ? Ye.memoizedState : lt.next;
    if (t !== null) lt = t, et = e;
    else {
      if (e === null) throw Error(p(310));
      et = e, e = { memoizedState: et.memoizedState, baseState: et.baseState, baseQueue: et.baseQueue, queue: et.queue, next: null }, lt === null ? Ye.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function ba(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ss(e) {
    var t = Ht(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = et, o = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var d = o.next;
        o.next = i.next, i.next = d;
      }
      r.baseQueue = o = i, n.pending = null;
    }
    if (o !== null) {
      i = o.next, r = r.baseState;
      var w = d = null, j = null, V = i;
      do {
        var Q = V.lane;
        if ((Pr & Q) === Q) j !== null && (j = j.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), r = V.hasEagerState ? V.eagerState : e(r, V.action);
        else {
          var X = {
            lane: Q,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          j === null ? (w = j = X, d = r) : j = j.next = X, Ye.lanes |= Q, Nr |= Q;
        }
        V = V.next;
      } while (V !== null && V !== i);
      j === null ? d = r : j.next = w, Lt(r, t.memoizedState) || (Pt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = j, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        i = o.lane, Ye.lanes |= i, Nr |= i, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function xs(e) {
    var t = Ht(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var d = o = o.next;
      do
        i = e(i, d.action), d = d.next;
      while (d !== o);
      Lt(i, t.memoizedState) || (Pt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Lu() {
  }
  function Du(e, t) {
    var n = Ye, r = Ht(), o = t(), i = !Lt(r.memoizedState, o);
    if (i && (r.memoizedState = o, Pt = !0), r = r.queue, Cs(Bu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || lt !== null && lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, ka(9, Iu.bind(null, n, r, o, t), void 0, null), it === null) throw Error(p(349));
      (Pr & 30) !== 0 || Tu(n, t, o);
    }
    return o;
  }
  function Tu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Iu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Vu(t) && Uu(e);
  }
  function Bu(e, t, n) {
    return n(function() {
      Vu(t) && Uu(e);
    });
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Lt(e, n);
    } catch {
      return !0;
    }
  }
  function Uu(e) {
    var t = jn(e, 1);
    t !== null && en(t, e, 1, -1);
  }
  function Wu(e) {
    var t = pn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ba, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sf.bind(null, Ye, e), [t.memoizedState, e];
  }
  function ka(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function qu() {
    return Ht().memoizedState;
  }
  function Ul(e, t, n, r) {
    var o = pn();
    Ye.flags |= e, o.memoizedState = ka(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Wl(e, t, n, r) {
    var o = Ht();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (et !== null) {
      var d = et.memoizedState;
      if (i = d.destroy, r !== null && ws(r, d.deps)) {
        o.memoizedState = ka(t, n, i, r);
        return;
      }
    }
    Ye.flags |= e, o.memoizedState = ka(1 | t, n, i, r);
  }
  function Ku(e, t) {
    return Ul(8390656, 8, e, t);
  }
  function Cs(e, t) {
    return Wl(2048, 8, e, t);
  }
  function Hu(e, t) {
    return Wl(4, 2, e, t);
  }
  function $u(e, t) {
    return Wl(4, 4, e, t);
  }
  function Qu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Yu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Wl(4, 4, Qu.bind(null, t, e), n);
  }
  function js() {
  }
  function Gu(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ws(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Xu(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ws(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ju(e, t, n) {
    return (Pr & 21) === 0 ? (e.baseState && (e.baseState = !1, Pt = !0), e.memoizedState = n) : (Lt(n, t) || (n = Ko(), Ye.lanes |= n, Nr |= n, e.baseState = !0), t);
  }
  function Ef(e, t) {
    var n = Ie;
    Ie = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ks.transition;
    ks.transition = {};
    try {
      e(!1), t();
    } finally {
      Ie = n, ks.transition = r;
    }
  }
  function Zu() {
    return Ht().memoizedState;
  }
  function _f(e, t, n) {
    var r = Zn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ec(e)) tc(t, n);
    else if (n = Nu(e, t, n, r), n !== null) {
      var o = jt();
      en(n, e, r, o), nc(n, t, r);
    }
  }
  function Sf(e, t, n) {
    var r = Zn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ec(e)) tc(t, o);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, w = i(d, n);
        if (o.hasEagerState = !0, o.eagerState = w, Lt(w, d)) {
          var j = t.interleaved;
          j === null ? (o.next = o, hs(t)) : (o.next = j.next, j.next = o), t.interleaved = o;
          return;
        }
      } catch {
      }
      n = Nu(e, t, o, r), n !== null && (o = jt(), en(n, e, r, o), nc(n, t, r));
    }
  }
  function ec(e) {
    var t = e.alternate;
    return e === Ye || t !== null && t === Ye;
  }
  function tc(e, t) {
    ga = Vl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, dr(e, n);
    }
  }
  var ql = { readContext: Kt, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, xf = { readContext: Kt, useCallback: function(e, t) {
    return pn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Kt, useEffect: Ku, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ul(
      4194308,
      4,
      Qu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ul(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ul(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = pn();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = pn();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _f.bind(null, Ye, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = pn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wu, useDebugValue: js, useDeferredValue: function(e) {
    return pn().memoizedState = e;
  }, useTransition: function() {
    var e = Wu(!1), t = e[0];
    return e = Ef.bind(null, e[1]), pn().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ye, o = pn();
    if (He) {
      if (n === void 0) throw Error(p(407));
      n = n();
    } else {
      if (n = t(), it === null) throw Error(p(349));
      (Pr & 30) !== 0 || Tu(r, t, n);
    }
    o.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return o.queue = i, Ku(Bu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, ka(9, Iu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = pn(), t = it.identifierPrefix;
    if (He) {
      var n = Cn, r = xn;
      n = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ya++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = wf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Cf = {
    readContext: Kt,
    useCallback: Gu,
    useContext: Kt,
    useEffect: Cs,
    useImperativeHandle: Yu,
    useInsertionEffect: Hu,
    useLayoutEffect: $u,
    useMemo: Xu,
    useReducer: Ss,
    useRef: qu,
    useState: function() {
      return Ss(ba);
    },
    useDebugValue: js,
    useDeferredValue: function(e) {
      var t = Ht();
      return Ju(t, et.memoizedState, e);
    },
    useTransition: function() {
      var e = Ss(ba)[0], t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Lu,
    useSyncExternalStore: Du,
    useId: Zu,
    unstable_isNewReconciler: !1
  }, jf = { readContext: Kt, useCallback: Gu, useContext: Kt, useEffect: Cs, useImperativeHandle: Yu, useInsertionEffect: Hu, useLayoutEffect: $u, useMemo: Xu, useReducer: xs, useRef: qu, useState: function() {
    return xs(ba);
  }, useDebugValue: js, useDeferredValue: function(e) {
    var t = Ht();
    return et === null ? t.memoizedState = e : Ju(t, et.memoizedState, e);
  }, useTransition: function() {
    var e = xs(ba)[0], t = Ht().memoizedState;
    return [e, t];
  }, useMutableSource: Lu, useSyncExternalStore: Du, useId: Zu, unstable_isNewReconciler: !1 };
  function Xt(e, t) {
    if (e && e.defaultProps) {
      t = le({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Os(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Kl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = jt(), o = Zn(e), i = On(r, o);
    i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (en(t, e, o, r), Dl(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = jt(), o = Zn(e), i = On(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yn(e, i, o), t !== null && (en(t, e, o, r), Dl(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = jt(), r = Zn(e), o = On(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Yn(e, o, r), t !== null && (en(t, e, r, n), Dl(t, e, r));
  } };
  function rc(e, t, n, r, o, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(o, i) : !0;
  }
  function oc(e, t, n) {
    var r = !1, o = Hn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Kt(i) : (o = Mt(t) ? xr : kt.current, r = t.contextTypes, i = (r = r != null) ? yo(e, o) : Hn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Kl.enqueueReplaceState(t, t.state, null);
  }
  function Ms(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, ms(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Kt(i) : (i = Mt(t) ? xr : kt.current, o.context = yo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Os(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Kl.enqueueReplaceState(o, o.state, null), Tl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Co(e, t) {
    try {
      var n = "", r = t;
      do
        n += ze(r), r = r.return;
      while (r);
      var o = n;
    } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ps(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ns(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Of = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = On(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Jl || (Jl = !0, Hs = r), Ns(e, t);
    }, n;
  }
  function ic(e, t, n) {
    n = On(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        Ns(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Ns(e, t), typeof r != "function" && (Xn === null ? Xn = /* @__PURE__ */ new Set([this]) : Xn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Of();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Uf.bind(null, e, t, n), t.then(e, e));
  }
  function uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cc(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = On(-1, 1), t.tag = 2, Yn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Mf = h.ReactCurrentOwner, Pt = !1;
  function Ct(e, t, n, r) {
    t.child = e === null ? Pu(t, null, n, r) : Eo(t, e.child, n, r);
  }
  function fc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return So(t, o), r = Es(e, t, n, r, i, o), n = _s(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mn(e, t, o)) : (He && n && as(t), t.flags |= 1, Ct(e, t, r, o), t.child);
  }
  function dc(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Zs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, pc(e, t, i, r, o)) : (e = oi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & o) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Er, n(d, r) && e.ref === t.ref) return Mn(e, t, o);
    }
    return t.flags |= 1, e = tr(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pc(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Er(i, r) && e.ref === t.ref) if (Pt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Pt = !0);
      else return t.lanes = e.lanes, Mn(e, t, o);
    }
    return zs(e, t, n, r, o);
  }
  function hc(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, We(Oo, It), It |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, We(Oo, It), It |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, We(Oo, It), It |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, We(Oo, It), It |= r;
    return Ct(e, t, o, n), t.child;
  }
  function mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function zs(e, t, n, r, o) {
    var i = Mt(n) ? xr : kt.current;
    return i = yo(t, i), So(t, o), n = Es(e, t, n, r, i, o), r = _s(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mn(e, t, o)) : (He && r && as(t), t.flags |= 1, Ct(e, t, n, o), t.child);
  }
  function vc(e, t, n, r, o) {
    if (Mt(n)) {
      var i = !0;
      Ml(t);
    } else i = !1;
    if (So(t, o), t.stateNode === null) $l(e, t), oc(t, n, r), Ms(t, n, r, o), r = !0;
    else if (e === null) {
      var d = t.stateNode, w = t.memoizedProps;
      d.props = w;
      var j = d.context, V = n.contextType;
      typeof V == "object" && V !== null ? V = Kt(V) : (V = Mt(n) ? xr : kt.current, V = yo(t, V));
      var Q = n.getDerivedStateFromProps, X = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      X || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (w !== r || j !== V) && ac(t, d, r, V), Qn = !1;
      var $ = t.memoizedState;
      d.state = $, Tl(t, r, d, o), j = t.memoizedState, w !== r || $ !== j || Ot.current || Qn ? (typeof Q == "function" && (Os(t, n, Q, r), j = t.memoizedState), (w = Qn || rc(t, n, w, r, $, j, V)) ? (X || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = j), d.props = r, d.state = j, d.context = V, r = w) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, zu(e, t), w = t.memoizedProps, V = t.type === t.elementType ? w : Xt(t.type, w), d.props = V, X = t.pendingProps, $ = d.context, j = n.contextType, typeof j == "object" && j !== null ? j = Kt(j) : (j = Mt(n) ? xr : kt.current, j = yo(t, j));
      var ae = n.getDerivedStateFromProps;
      (Q = typeof ae == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (w !== X || $ !== j) && ac(t, d, r, j), Qn = !1, $ = t.memoizedState, d.state = $, Tl(t, r, d, o);
      var ce = t.memoizedState;
      w !== X || $ !== ce || Ot.current || Qn ? (typeof ae == "function" && (Os(t, n, ae, r), ce = t.memoizedState), (V = Qn || rc(t, n, V, r, $, ce, j) || !1) ? (Q || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, ce, j), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, ce, j)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || w === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = ce), d.props = r, d.state = ce, d.context = j, r = V) : (typeof d.componentDidUpdate != "function" || w === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Fs(e, t, n, r, i, o);
  }
  function Fs(e, t, n, r, o, i) {
    mc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return o && wu(t, n, !1), Mn(e, t, i);
    r = t.stateNode, Mf.current = t;
    var w = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Eo(t, e.child, null, i), t.child = Eo(t, null, w, i)) : Ct(e, t, w, i), t.memoizedState = r.state, o && wu(t, n, !0), t.child;
  }
  function gc(e) {
    var t = e.stateNode;
    t.pendingContext ? bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bu(e, t.context, !1), vs(e, t.containerInfo);
  }
  function yc(e, t, n, r, o) {
    return wo(), us(o), t.flags |= 256, Ct(e, t, n, r), t.child;
  }
  var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function As(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bc(e, t, n) {
    var r = t.pendingProps, o = Qe.current, i = !1, d = (t.flags & 128) !== 0, w;
    if ((w = d) || (w = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), w ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), We(Qe, o & 1), e === null)
      return ss(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = ai(d, r, 0, null), e = Ar(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = As(n), t.memoizedState = Rs, e) : Ls(t, d));
    if (o = e.memoizedState, o !== null && (w = o.dehydrated, w !== null)) return Pf(e, t, d, r, w, o, n);
    if (i) {
      i = r.fallback, d = t.mode, o = e.child, w = o.sibling;
      var j = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = j, t.deletions = null) : (r = tr(o, j), r.subtreeFlags = o.subtreeFlags & 14680064), w !== null ? i = tr(w, i) : (i = Ar(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? As(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = Rs, r;
    }
    return i = e.child, e = i.sibling, r = tr(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ls(e, t) {
    return t = ai({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hl(e, t, n, r) {
    return r !== null && us(r), Eo(t, e.child, null, n), e = Ls(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pf(e, t, n, r, o, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ps(Error(p(422))), Hl(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ai({ mode: "visible", children: r.children }, o, 0, null), i = Ar(i, o, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Eo(t, e.child, null, d), t.child.memoizedState = As(d), t.memoizedState = Rs, i);
    if ((t.mode & 1) === 0) return Hl(e, t, d, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var w = r.dgst;
      return r = w, i = Error(p(419)), r = Ps(i, r, void 0), Hl(e, t, d, r);
    }
    if (w = (d & e.childLanes) !== 0, Pt || w) {
      if (r = it, r !== null) {
        switch (d & -d) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | d)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, jn(e, o), en(r, e, o, -1));
      }
      return Js(), r = Ps(Error(p(421))), Hl(e, t, d, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wf.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Tt = qn(o.nextSibling), Dt = t, He = !0, Gt = null, e !== null && (Wt[qt++] = xn, Wt[qt++] = Cn, Wt[qt++] = Cr, xn = e.id, Cn = e.overflow, Cr = t), t = Ls(t, r.children), t.flags |= 4096, t);
  }
  function kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ps(e.return, t, n);
  }
  function Ds(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
  }
  function wc(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (Ct(e, t, r.children, n), r = Qe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
        else if (e.tag === 19) kc(e, n, t);
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
    if (We(Qe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Il(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ds(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Il(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ds(t, !0, n, null, i);
        break;
      case "together":
        Ds(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $l(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Mn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Nr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = tr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Nf(e, t, n) {
    switch (t.tag) {
      case 3:
        gc(t), wo();
        break;
      case 5:
        Au(t);
        break;
      case 1:
        Mt(t.type) && Ml(t);
        break;
      case 4:
        vs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        We(Al, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (We(Qe, Qe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? bc(e, t, n) : (We(Qe, Qe.current & 1), e = Mn(e, t, n), e !== null ? e.sibling : null);
        We(Qe, Qe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return wc(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), We(Qe, Qe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, hc(e, t, n);
    }
    return Mn(e, t, n);
  }
  var Ec, Ts, _c, Sc;
  Ec = function(e, t) {
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
  }, Ts = function() {
  }, _c = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, Mr(dn.current);
      var i = null;
      switch (n) {
        case "input":
          o = Fo(e, o), r = Fo(e, r), i = [];
          break;
        case "select":
          o = le({}, o, { value: void 0 }), r = le({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          o = Lo(e, o), r = Lo(e, r), i = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Cl);
      }
      Ir(n, r);
      var d;
      n = null;
      for (V in o) if (!r.hasOwnProperty(V) && o.hasOwnProperty(V) && o[V] != null) if (V === "style") {
        var w = o[V];
        for (d in w) w.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (E.hasOwnProperty(V) ? i || (i = []) : (i = i || []).push(V, null));
      for (V in r) {
        var j = r[V];
        if (w = o?.[V], r.hasOwnProperty(V) && j !== w && (j != null || w != null)) if (V === "style") if (w) {
          for (d in w) !w.hasOwnProperty(d) || j && j.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in j) j.hasOwnProperty(d) && w[d] !== j[d] && (n || (n = {}), n[d] = j[d]);
        } else n || (i || (i = []), i.push(
          V,
          n
        )), n = j;
        else V === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, w = w ? w.__html : void 0, j != null && w !== j && (i = i || []).push(V, j)) : V === "children" ? typeof j != "string" && typeof j != "number" || (i = i || []).push(V, "" + j) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (E.hasOwnProperty(V) ? (j != null && V === "onScroll" && Ve("scroll", e), i || w === j || (i = [])) : (i = i || []).push(V, j));
      }
      n && (i = i || []).push("style", n);
      var V = i;
      (t.updateQueue = V) && (t.flags |= 4);
    }
  }, Sc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function wa(e, t) {
    if (!He) switch (e.tailMode) {
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
  function Et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function zf(e, t, n) {
    var r = t.pendingProps;
    switch (ls(t), t.tag) {
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
        return Et(t), null;
      case 1:
        return Mt(t.type) && Ol(), Et(t), null;
      case 3:
        return r = t.stateNode, xo(), Ke(Ot), Ke(kt), bs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gt !== null && (Ys(Gt), Gt = null))), Ts(e, t), Et(t), null;
      case 5:
        gs(t);
        var o = Mr(va.current);
        if (n = t.type, e !== null && t.stateNode != null) _c(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Et(t), null;
          }
          if (e = Mr(dn.current), Fl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[fn] = t, r[fa] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ve("cancel", r), Ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < xt.length; o++) Ve(xt[o], r);
                break;
              case "source":
                Ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ve(
                  "error",
                  r
                ), Ve("load", r);
                break;
              case "details":
                Ve("toggle", r);
                break;
              case "input":
                Ro(r, i), Ve("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Ve("invalid", r);
                break;
              case "textarea":
                Pa(r, i), Ve("invalid", r);
            }
            Ir(n, i), o = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var w = i[d];
              d === "children" ? typeof w == "string" ? r.textContent !== w && (i.suppressHydrationWarning !== !0 && xl(r.textContent, w, e), o = ["children", w]) : typeof w == "number" && r.textContent !== "" + w && (i.suppressHydrationWarning !== !0 && xl(
                r.textContent,
                w,
                e
              ), o = ["children", "" + w]) : E.hasOwnProperty(d) && w != null && d === "onScroll" && Ve("scroll", r);
            }
            switch (n) {
              case "input":
                nn(r), Ma(r, i, !0);
                break;
              case "textarea":
                nn(r), za(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Cl);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[fn] = t, e[fa] = r, Ec(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Br(n, r), n) {
                case "dialog":
                  Ve("cancel", e), Ve("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ve("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < xt.length; o++) Ve(xt[o], e);
                  o = r;
                  break;
                case "source":
                  Ve("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ve(
                    "error",
                    e
                  ), Ve("load", e), o = r;
                  break;
                case "details":
                  Ve("toggle", e), o = r;
                  break;
                case "input":
                  Ro(e, r), o = Fo(e, r), Ve("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = le({}, r, { value: void 0 }), Ve("invalid", e);
                  break;
                case "textarea":
                  Pa(e, r), o = Lo(e, r), Ve("invalid", e);
                  break;
                default:
                  o = r;
              }
              Ir(n, o), w = o;
              for (i in w) if (w.hasOwnProperty(i)) {
                var j = w[i];
                i === "style" ? Io(e, j) : i === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Ra(e, j)) : i === "children" ? typeof j == "string" ? (n !== "textarea" || j !== "") && ar(e, j) : typeof j == "number" && ar(e, "" + j) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (E.hasOwnProperty(i) ? j != null && i === "onScroll" && Ve("scroll", e) : j != null && A(e, i, j, d));
              }
              switch (n) {
                case "input":
                  nn(e), Ma(e, r, !1);
                  break;
                case "textarea":
                  nn(e), za(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Re(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? vn(e, !!r.multiple, i, !1) : r.defaultValue != null && vn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Cl);
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
        return Et(t), null;
      case 6:
        if (e && t.stateNode != null) Sc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = Mr(va.current), Mr(dn.current), Fl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[fn] = t, (i = r.nodeValue !== n) && (e = Dt, e !== null)) switch (e.tag) {
              case 3:
                xl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[fn] = t, t.stateNode = r;
        }
        return Et(t), null;
      case 13:
        if (Ke(Qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (He && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ju(), wo(), t.flags |= 98560, i = !1;
          else if (i = Fl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(p(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(p(317));
              i[fn] = t;
            } else wo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Et(t), i = !1;
          } else Gt !== null && (Ys(Gt), Gt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Qe.current & 1) !== 0 ? tt === 0 && (tt = 3) : Js())), t.updateQueue !== null && (t.flags |= 4), Et(t), null);
      case 4:
        return xo(), Ts(e, t), e === null && En(t.stateNode.containerInfo), Et(t), null;
      case 10:
        return ds(t.type._context), Et(t), null;
      case 17:
        return Mt(t.type) && Ol(), Et(t), null;
      case 19:
        if (Ke(Qe), i = t.memoizedState, i === null) return Et(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) wa(i, !1);
        else {
          if (tt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Il(e), d !== null) {
              for (t.flags |= 128, wa(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return We(Qe, Qe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && $e() > Mo && (t.flags |= 128, r = !0, wa(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Il(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wa(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !He) return Et(t), null;
          } else 2 * $e() - i.renderingStartTime > Mo && n !== 1073741824 && (t.flags |= 128, r = !0, wa(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = $e(), t.sibling = null, n = Qe.current, We(Qe, r ? n & 1 | 2 : n & 1), t) : (Et(t), null);
      case 22:
      case 23:
        return Xs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (It & 1073741824) !== 0 && (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Et(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function Ff(e, t) {
    switch (ls(t), t.tag) {
      case 1:
        return Mt(t.type) && Ol(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return xo(), Ke(Ot), Ke(kt), bs(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return gs(t), null;
      case 13:
        if (Ke(Qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          wo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ke(Qe), null;
      case 4:
        return xo(), null;
      case 10:
        return ds(t.type._context), null;
      case 22:
      case 23:
        return Xs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ql = !1, _t = !1, Rf = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
  function jo(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ge(e, t, r);
    }
    else n.current = null;
  }
  function Is(e, t, n) {
    try {
      n();
    } catch (r) {
      Ge(e, t, r);
    }
  }
  var xc = !1;
  function Af(e, t) {
    if (Xi = Jr, e = _l(), l(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, w = -1, j = -1, V = 0, Q = 0, X = e, $ = null;
          t: for (; ; ) {
            for (var ae; X !== n || o !== 0 && X.nodeType !== 3 || (w = d + o), X !== i || r !== 0 && X.nodeType !== 3 || (j = d + r), X.nodeType === 3 && (d += X.nodeValue.length), (ae = X.firstChild) !== null; )
              $ = X, X = ae;
            for (; ; ) {
              if (X === e) break t;
              if ($ === n && ++V === o && (w = d), $ === i && ++Q === r && (j = d), (ae = X.nextSibling) !== null) break;
              X = $, $ = X.parentNode;
            }
            X = ae;
          }
          n = w === -1 || j === -1 ? null : { start: w, end: j };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ji = { focusedElem: e, selectionRange: n }, Jr = !1, ue = t; ue !== null; ) if (t = ue, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ue = e;
    else for (; ue !== null; ) {
      t = ue;
      try {
        var ce = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ce !== null) {
              var pe = ce.memoizedProps, Je = ce.memoizedState, T = t.stateNode, N = T.getSnapshotBeforeUpdate(t.elementType === t.type ? pe : Xt(t.type, pe), Je);
              T.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var B = t.stateNode.containerInfo;
            B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (ee) {
        Ge(t, t.return, ee);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ue = e;
        break;
      }
      ue = t.return;
    }
    return ce = xc, xc = !1, ce;
  }
  function Ea(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          o.destroy = void 0, i !== void 0 && Is(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Yl(e, t) {
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
  function Bs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Cc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fn], delete t[fa], delete t[ns], delete t[gf], delete t[yf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Oc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Cl));
    else if (r !== 4 && (e = e.child, e !== null)) for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), e = e.sibling;
  }
  function Us(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
  }
  var vt = null, Jt = !1;
  function Gn(e, t, n) {
    for (n = n.child; n !== null; ) Mc(e, t, n), n = n.sibling;
  }
  function Mc(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(Qr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        _t || jo(n, t);
      case 6:
        var r = vt, o = Jt;
        vt = null, Gn(e, t, n), vt = r, Jt = o, vt !== null && (Jt ? (e = vt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : vt.removeChild(n.stateNode));
        break;
      case 18:
        vt !== null && (Jt ? (e = vt, n = n.stateNode, e.nodeType === 8 ? ts(e.parentNode, n) : e.nodeType === 1 && ts(e, n), vr(e)) : ts(vt, n.stateNode));
        break;
      case 4:
        r = vt, o = Jt, vt = n.stateNode.containerInfo, Jt = !0, Gn(e, t, n), vt = r, Jt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var i = o, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Is(n, t, d), o = o.next;
          } while (o !== r);
        }
        Gn(e, t, n);
        break;
      case 1:
        if (!_t && (jo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (w) {
          Ge(n, t, w);
        }
        Gn(e, t, n);
        break;
      case 21:
        Gn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (_t = (r = _t) || n.memoizedState !== null, Gn(e, t, n), _t = r) : Gn(e, t, n);
        break;
      default:
        Gn(e, t, n);
    }
  }
  function Pc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rf()), t.forEach(function(r) {
        var o = qf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function Zt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, d = t, w = d;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              vt = w.stateNode, Jt = !1;
              break e;
            case 3:
              vt = w.stateNode.containerInfo, Jt = !0;
              break e;
            case 4:
              vt = w.stateNode.containerInfo, Jt = !0;
              break e;
          }
          w = w.return;
        }
        if (vt === null) throw Error(p(160));
        Mc(i, d, o), vt = null, Jt = !1;
        var j = o.alternate;
        j !== null && (j.return = null), o.return = null;
      } catch (V) {
        Ge(o, t, V);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nc(t, e), t = t.sibling;
  }
  function Nc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Zt(t, e), hn(e), r & 4) {
          try {
            Ea(3, e, e.return), Yl(3, e);
          } catch (pe) {
            Ge(e, e.return, pe);
          }
          try {
            Ea(5, e, e.return);
          } catch (pe) {
            Ge(e, e.return, pe);
          }
        }
        break;
      case 1:
        Zt(t, e), hn(e), r & 512 && n !== null && jo(n, n.return);
        break;
      case 5:
        if (Zt(t, e), hn(e), r & 512 && n !== null && jo(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            ar(o, "");
          } catch (pe) {
            Ge(e, e.return, pe);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, w = e.type, j = e.updateQueue;
          if (e.updateQueue = null, j !== null) try {
            w === "input" && i.type === "radio" && i.name != null && Ao(o, i), Br(w, d);
            var V = Br(w, i);
            for (d = 0; d < j.length; d += 2) {
              var Q = j[d], X = j[d + 1];
              Q === "style" ? Io(o, X) : Q === "dangerouslySetInnerHTML" ? Ra(o, X) : Q === "children" ? ar(o, X) : A(o, Q, X, V);
            }
            switch (w) {
              case "input":
                rn(o, i);
                break;
              case "textarea":
                Na(o, i);
                break;
              case "select":
                var $ = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var ae = i.value;
                ae != null ? vn(o, !!i.multiple, ae, !1) : $ !== !!i.multiple && (i.defaultValue != null ? vn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : vn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[fa] = i;
          } catch (pe) {
            Ge(e, e.return, pe);
          }
        }
        break;
      case 6:
        if (Zt(t, e), hn(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          o = e.stateNode, i = e.memoizedProps;
          try {
            o.nodeValue = i;
          } catch (pe) {
            Ge(e, e.return, pe);
          }
        }
        break;
      case 3:
        if (Zt(t, e), hn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          vr(t.containerInfo);
        } catch (pe) {
          Ge(e, e.return, pe);
        }
        break;
      case 4:
        Zt(t, e), hn(e);
        break;
      case 13:
        Zt(t, e), hn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ks = $e())), r & 4 && Pc(e);
        break;
      case 22:
        if (Q = n !== null && n.memoizedState !== null, e.mode & 1 ? (_t = (V = _t) || Q, Zt(t, e), _t = V) : Zt(t, e), hn(e), r & 8192) {
          if (V = e.memoizedState !== null, (e.stateNode.isHidden = V) && !Q && (e.mode & 1) !== 0) for (ue = e, Q = e.child; Q !== null; ) {
            for (X = ue = Q; ue !== null; ) {
              switch ($ = ue, ae = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ea(4, $, $.return);
                  break;
                case 1:
                  jo($, $.return);
                  var ce = $.stateNode;
                  if (typeof ce.componentWillUnmount == "function") {
                    r = $, n = $.return;
                    try {
                      t = r, ce.props = t.memoizedProps, ce.state = t.memoizedState, ce.componentWillUnmount();
                    } catch (pe) {
                      Ge(r, n, pe);
                    }
                  }
                  break;
                case 5:
                  jo($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Rc(X);
                    continue;
                  }
              }
              ae !== null ? (ae.return = $, ue = ae) : Rc(X);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, X = e; ; ) {
            if (X.tag === 5) {
              if (Q === null) {
                Q = X;
                try {
                  o = X.stateNode, V ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (w = X.stateNode, j = X.memoizedProps.style, d = j != null && j.hasOwnProperty("display") ? j.display : null, w.style.display = To("display", d));
                } catch (pe) {
                  Ge(e, e.return, pe);
                }
              }
            } else if (X.tag === 6) {
              if (Q === null) try {
                X.stateNode.nodeValue = V ? "" : X.memoizedProps;
              } catch (pe) {
                Ge(e, e.return, pe);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === e) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === e) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === e) break e;
              Q === X && (Q = null), X = X.return;
            }
            Q === X && (Q = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        Zt(t, e), hn(e), r & 4 && Pc(e);
        break;
      case 21:
        break;
      default:
        Zt(
          t,
          e
        ), hn(e);
    }
  }
  function hn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (jc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (ar(o, ""), r.flags &= -33);
            var i = Oc(e);
            Us(e, i, o);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, w = Oc(e);
            Vs(e, w, d);
            break;
          default:
            throw Error(p(161));
        }
      } catch (j) {
        Ge(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lf(e, t, n) {
    ue = e, zc(e);
  }
  function zc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ue !== null; ) {
      var o = ue, i = o.child;
      if (o.tag === 22 && r) {
        var d = o.memoizedState !== null || Ql;
        if (!d) {
          var w = o.alternate, j = w !== null && w.memoizedState !== null || _t;
          w = Ql;
          var V = _t;
          if (Ql = d, (_t = j) && !V) for (ue = o; ue !== null; ) d = ue, j = d.child, d.tag === 22 && d.memoizedState !== null ? Ac(o) : j !== null ? (j.return = d, ue = j) : Ac(o);
          for (; i !== null; ) ue = i, zc(i), i = i.sibling;
          ue = o, Ql = w, _t = V;
        }
        Fc(e);
      } else (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, ue = i) : Fc(e);
    }
  }
  function Fc(e) {
    for (; ue !== null; ) {
      var t = ue;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || Yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : Xt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Ru(t, i, r);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ru(t, d, n);
              }
              break;
            case 5:
              var w = t.stateNode;
              if (n === null && t.flags & 4) {
                n = w;
                var j = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && n.focus();
                    break;
                  case "img":
                    j.src && (n.src = j.src);
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
                var V = t.alternate;
                if (V !== null) {
                  var Q = V.memoizedState;
                  if (Q !== null) {
                    var X = Q.dehydrated;
                    X !== null && vr(X);
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
          _t || t.flags & 512 && Bs(t);
        } catch ($) {
          Ge(t, t.return, $);
        }
      }
      if (t === e) {
        ue = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ue = n;
        break;
      }
      ue = t.return;
    }
  }
  function Rc(e) {
    for (; ue !== null; ) {
      var t = ue;
      if (t === e) {
        ue = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ue = n;
        break;
      }
      ue = t.return;
    }
  }
  function Ac(e) {
    for (; ue !== null; ) {
      var t = ue;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Yl(4, t);
            } catch (j) {
              Ge(t, n, j);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (j) {
                Ge(t, o, j);
              }
            }
            var i = t.return;
            try {
              Bs(t);
            } catch (j) {
              Ge(t, i, j);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Bs(t);
            } catch (j) {
              Ge(t, d, j);
            }
        }
      } catch (j) {
        Ge(t, t.return, j);
      }
      if (t === e) {
        ue = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        w.return = t.return, ue = w;
        break;
      }
      ue = t.return;
    }
  }
  var Df = Math.ceil, Gl = h.ReactCurrentDispatcher, Ws = h.ReactCurrentOwner, $t = h.ReactCurrentBatchConfig, Fe = 0, it = null, Ze = null, gt = 0, It = 0, Oo = Kn(0), tt = 0, _a = null, Nr = 0, Xl = 0, qs = 0, Sa = null, Nt = null, Ks = 0, Mo = 1 / 0, Pn = null, Jl = !1, Hs = null, Xn = null, Zl = !1, Jn = null, ei = 0, xa = 0, $s = null, ti = -1, ni = 0;
  function jt() {
    return (Fe & 6) !== 0 ? $e() : ti !== -1 ? ti : ti = $e();
  }
  function Zn(e) {
    return (e.mode & 1) === 0 ? 1 : (Fe & 2) !== 0 && gt !== 0 ? gt & -gt : kf.transition !== null ? (ni === 0 && (ni = Ko()), ni) : (e = Ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Z(e.type)), e);
  }
  function en(e, t, n, r) {
    if (50 < xa) throw xa = 0, $s = null, Error(p(185));
    fr(e, n, r), ((Fe & 2) === 0 || e !== it) && (e === it && ((Fe & 2) === 0 && (Xl |= n), tt === 4 && er(e, gt)), zt(e, r), n === 1 && Fe === 0 && (t.mode & 1) === 0 && (Mo = $e() + 500, Pl && $n()));
  }
  function zt(e, t) {
    var n = e.callbackNode;
    Ha(e, t);
    var r = Gr(e, e === it ? gt : 0);
    if (r === 0) n !== null && Va(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Va(n), t === 1) e.tag === 0 ? bf(Dc.bind(null, e)) : Eu(Dc.bind(null, e)), mf(function() {
        (Fe & 6) === 0 && $n();
      }), n = null;
      else {
        switch (Qa(r)) {
          case 1:
            n = Hr;
            break;
          case 4:
            n = Ua;
            break;
          case 16:
            n = $r;
            break;
          case 536870912:
            n = Wa;
            break;
          default:
            n = $r;
        }
        n = Kc(n, Lc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Lc(e, t) {
    if (ti = -1, ni = 0, (Fe & 6) !== 0) throw Error(p(327));
    var n = e.callbackNode;
    if (Po() && e.callbackNode !== n) return null;
    var r = Gr(e, e === it ? gt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ri(e, r);
    else {
      t = r;
      var o = Fe;
      Fe |= 2;
      var i = Ic();
      (it !== e || gt !== t) && (Pn = null, Mo = $e() + 500, Fr(e, t));
      do
        try {
          Bf();
          break;
        } catch (w) {
          Tc(e, w);
        }
      while (!0);
      fs(), Gl.current = i, Fe = o, Ze !== null ? t = 0 : (it = null, gt = 0, t = tt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Dn(e), o !== 0 && (r = o, t = Qs(e, o))), t === 1) throw n = _a, Fr(e, 0), er(e, r), zt(e, $e()), n;
      if (t === 6) er(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !Tf(o) && (t = ri(e, r), t === 2 && (i = Dn(e), i !== 0 && (r = i, t = Qs(e, i))), t === 1)) throw n = _a, Fr(e, 0), er(e, r), zt(e, $e()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Rr(e, Nt, Pn);
            break;
          case 3:
            if (er(e, r), (r & 130023424) === r && (t = Ks + 500 - $e(), 10 < t)) {
              if (Gr(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                jt(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = es(Rr.bind(null, e, Nt, Pn), t);
              break;
            }
            Rr(e, Nt, Pn);
            break;
          case 4:
            if (er(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var d = 31 - Rt(r);
              i = 1 << d, d = t[d], d > o && (o = d), r &= ~i;
            }
            if (r = o, r = $e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Df(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = es(Rr.bind(null, e, Nt, Pn), r);
              break;
            }
            Rr(e, Nt, Pn);
            break;
          case 5:
            Rr(e, Nt, Pn);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return zt(e, $e()), e.callbackNode === n ? Lc.bind(null, e) : null;
  }
  function Qs(e, t) {
    var n = Sa;
    return e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256), e = ri(e, t), e !== 2 && (t = Nt, Nt = n, t !== null && Ys(t)), e;
  }
  function Ys(e) {
    Nt === null ? Nt = e : Nt.push.apply(Nt, e);
  }
  function Tf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Lt(i(), o)) return !1;
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
  function er(e, t) {
    for (t &= ~qs, t &= ~Xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Rt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Dc(e) {
    if ((Fe & 6) !== 0) throw Error(p(327));
    Po();
    var t = Gr(e, 0);
    if ((t & 1) === 0) return zt(e, $e()), null;
    var n = ri(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Dn(e);
      r !== 0 && (t = r, n = Qs(e, r));
    }
    if (n === 1) throw n = _a, Fr(e, 0), er(e, t), zt(e, $e()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rr(e, Nt, Pn), zt(e, $e()), null;
  }
  function Gs(e, t) {
    var n = Fe;
    Fe |= 1;
    try {
      return e(t);
    } finally {
      Fe = n, Fe === 0 && (Mo = $e() + 500, Pl && $n());
    }
  }
  function zr(e) {
    Jn !== null && Jn.tag === 0 && (Fe & 6) === 0 && Po();
    var t = Fe;
    Fe |= 1;
    var n = $t.transition, r = Ie;
    try {
      if ($t.transition = null, Ie = 1, e) return e();
    } finally {
      Ie = r, $t.transition = n, Fe = t, (Fe & 6) === 0 && $n();
    }
  }
  function Xs() {
    It = Oo.current, Ke(Oo);
  }
  function Fr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, hf(n)), Ze !== null) for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (ls(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ol();
          break;
        case 3:
          xo(), Ke(Ot), Ke(kt), bs();
          break;
        case 5:
          gs(r);
          break;
        case 4:
          xo();
          break;
        case 13:
          Ke(Qe);
          break;
        case 19:
          Ke(Qe);
          break;
        case 10:
          ds(r.type._context);
          break;
        case 22:
        case 23:
          Xs();
      }
      n = n.return;
    }
    if (it = e, Ze = e = tr(e.current, null), gt = It = t, tt = 0, _a = null, qs = Xl = Nr = 0, Nt = Sa = null, Or !== null) {
      for (t = 0; t < Or.length; t++) if (n = Or[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var d = i.next;
          i.next = o, r.next = d;
        }
        n.pending = r;
      }
      Or = null;
    }
    return e;
  }
  function Tc(e, t) {
    do {
      var n = Ze;
      try {
        if (fs(), Bl.current = ql, Vl) {
          for (var r = Ye.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Vl = !1;
        }
        if (Pr = 0, lt = et = Ye = null, ga = !1, ya = 0, Ws.current = null, n === null || n.return === null) {
          tt = 1, _a = t, Ze = null;
          break;
        }
        e: {
          var i = e, d = n.return, w = n, j = t;
          if (t = gt, w.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var V = j, Q = w, X = Q.tag;
            if ((Q.mode & 1) === 0 && (X === 0 || X === 11 || X === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ae = uc(d);
            if (ae !== null) {
              ae.flags &= -257, cc(ae, d, w, i, t), ae.mode & 1 && sc(i, V, t), t = ae, j = V;
              var ce = t.updateQueue;
              if (ce === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(j), t.updateQueue = pe;
              } else ce.add(j);
              break e;
            } else {
              if ((t & 1) === 0) {
                sc(i, V, t), Js();
                break e;
              }
              j = Error(p(426));
            }
          } else if (He && w.mode & 1) {
            var Je = uc(d);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), cc(Je, d, w, i, t), us(Co(j, w));
              break e;
            }
          }
          i = j = Co(j, w), tt !== 4 && (tt = 2), Sa === null ? Sa = [i] : Sa.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var T = lc(i, j, t);
                Fu(i, T);
                break e;
              case 1:
                w = j;
                var N = i.type, B = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (Xn === null || !Xn.has(B)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var ee = ic(i, w, t);
                  Fu(i, ee);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Vc(n);
      } catch (he) {
        t = he, Ze === n && n !== null && (Ze = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ic() {
    var e = Gl.current;
    return Gl.current = ql, e === null ? ql : e;
  }
  function Js() {
    (tt === 0 || tt === 3 || tt === 2) && (tt = 4), it === null || (Nr & 268435455) === 0 && (Xl & 268435455) === 0 || er(it, gt);
  }
  function ri(e, t) {
    var n = Fe;
    Fe |= 2;
    var r = Ic();
    (it !== e || gt !== t) && (Pn = null, Fr(e, t));
    do
      try {
        If();
        break;
      } catch (o) {
        Tc(e, o);
      }
    while (!0);
    if (fs(), Fe = n, Gl.current = r, Ze !== null) throw Error(p(261));
    return it = null, gt = 0, tt;
  }
  function If() {
    for (; Ze !== null; ) Bc(Ze);
  }
  function Bf() {
    for (; Ze !== null && !Si(); ) Bc(Ze);
  }
  function Bc(e) {
    var t = qc(e.alternate, e, It);
    e.memoizedProps = e.pendingProps, t === null ? Vc(e) : Ze = t, Ws.current = null;
  }
  function Vc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = zf(n, t, It), n !== null) {
          Ze = n;
          return;
        }
      } else {
        if (n = Ff(n, t), n !== null) {
          n.flags &= 32767, Ze = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          tt = 6, Ze = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ze = t;
        return;
      }
      Ze = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function Rr(e, t, n) {
    var r = Ie, o = $t.transition;
    try {
      $t.transition = null, Ie = 1, Vf(e, t, n, r);
    } finally {
      $t.transition = o, Ie = r;
    }
    return null;
  }
  function Vf(e, t, n, r) {
    do
      Po();
    while (Jn !== null);
    if ((Fe & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($a(e, i), e === it && (Ze = it = null, gt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Zl || (Zl = !0, Kc($r, function() {
      return Po(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = $t.transition, $t.transition = null;
      var d = Ie;
      Ie = 1;
      var w = Fe;
      Fe |= 4, Ws.current = null, Af(e, n), Nc(n, e), a(Ji), Jr = !!Xi, Ji = Xi = null, e.current = n, Lf(n), xi(), Fe = w, Ie = d, $t.transition = i;
    } else e.current = n;
    if (Zl && (Zl = !1, Jn = e, ei = o), i = e.pendingLanes, i === 0 && (Xn = null), Oi(n.stateNode), zt(e, $e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Jl) throw Jl = !1, e = Hs, Hs = null, e;
    return (ei & 1) !== 0 && e.tag !== 0 && Po(), i = e.pendingLanes, (i & 1) !== 0 ? e === $s ? xa++ : (xa = 0, $s = e) : xa = 0, $n(), null;
  }
  function Po() {
    if (Jn !== null) {
      var e = Qa(ei), t = $t.transition, n = Ie;
      try {
        if ($t.transition = null, Ie = 16 > e ? 16 : e, Jn === null) var r = !1;
        else {
          if (e = Jn, Jn = null, ei = 0, (Fe & 6) !== 0) throw Error(p(331));
          var o = Fe;
          for (Fe |= 4, ue = e.current; ue !== null; ) {
            var i = ue, d = i.child;
            if ((ue.flags & 16) !== 0) {
              var w = i.deletions;
              if (w !== null) {
                for (var j = 0; j < w.length; j++) {
                  var V = w[j];
                  for (ue = V; ue !== null; ) {
                    var Q = ue;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ea(8, Q, i);
                    }
                    var X = Q.child;
                    if (X !== null) X.return = Q, ue = X;
                    else for (; ue !== null; ) {
                      Q = ue;
                      var $ = Q.sibling, ae = Q.return;
                      if (Cc(Q), Q === V) {
                        ue = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = ae, ue = $;
                        break;
                      }
                      ue = ae;
                    }
                  }
                }
                var ce = i.alternate;
                if (ce !== null) {
                  var pe = ce.child;
                  if (pe !== null) {
                    ce.child = null;
                    do {
                      var Je = pe.sibling;
                      pe.sibling = null, pe = Je;
                    } while (pe !== null);
                  }
                }
                ue = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) d.return = i, ue = d;
            else e: for (; ue !== null; ) {
              if (i = ue, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Ea(9, i, i.return);
              }
              var T = i.sibling;
              if (T !== null) {
                T.return = i.return, ue = T;
                break e;
              }
              ue = i.return;
            }
          }
          var N = e.current;
          for (ue = N; ue !== null; ) {
            d = ue;
            var B = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && B !== null) B.return = d, ue = B;
            else e: for (d = N; ue !== null; ) {
              if (w = ue, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yl(9, w);
                }
              } catch (he) {
                Ge(w, w.return, he);
              }
              if (w === d) {
                ue = null;
                break e;
              }
              var ee = w.sibling;
              if (ee !== null) {
                ee.return = w.return, ue = ee;
                break e;
              }
              ue = w.return;
            }
          }
          if (Fe = o, $n(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(Qr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ie = n, $t.transition = t;
      }
    }
    return !1;
  }
  function Uc(e, t, n) {
    t = Co(n, t), t = lc(e, t, 1), e = Yn(e, t, 1), t = jt(), e !== null && (fr(e, 1, t), zt(e, t));
  }
  function Ge(e, t, n) {
    if (e.tag === 3) Uc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xn === null || !Xn.has(r))) {
          e = Co(n, e), e = ic(t, e, 1), t = Yn(t, e, 1), e = jt(), t !== null && (fr(t, 1, e), zt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Uf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = jt(), e.pingedLanes |= e.suspendedLanes & n, it === e && (gt & n) === n && (tt === 4 || tt === 3 && (gt & 130023424) === gt && 500 > $e() - Ks ? Fr(e, 0) : qs |= n), zt(e, t);
  }
  function Wc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Yr, Yr <<= 1, (Yr & 130023424) === 0 && (Yr = 4194304)));
    var n = jt();
    e = jn(e, t), e !== null && (fr(e, t, n), zt(e, n));
  }
  function Wf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wc(e, n);
  }
  function qf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(t), Wc(e, n);
  }
  var qc;
  qc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ot.current) Pt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Pt = !1, Nf(e, t, n);
      Pt = (e.flags & 131072) !== 0;
    }
    else Pt = !1, He && (t.flags & 1048576) !== 0 && _u(t, zl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        $l(e, t), e = t.pendingProps;
        var o = yo(t, kt.current);
        So(t, n), o = Es(null, t, r, e, o, n);
        var i = _s();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Mt(r) ? (i = !0, Ml(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ms(t), o.updater = Kl, t.stateNode = o, o._reactInternals = t, Ms(t, r, e, n), t = Fs(null, t, r, !0, i, n)) : (t.tag = 0, He && i && as(t), Ct(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch ($l(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Hf(r), e = Xt(r, e), o) {
            case 0:
              t = zs(null, t, r, e, n);
              break e;
            case 1:
              t = vc(null, t, r, e, n);
              break e;
            case 11:
              t = fc(null, t, r, e, n);
              break e;
            case 14:
              t = dc(null, t, r, Xt(r.type, e), n);
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
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), zs(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), vc(e, t, r, o, n);
      case 3:
        e: {
          if (gc(t), e === null) throw Error(p(387));
          r = t.pendingProps, i = t.memoizedState, o = i.element, zu(e, t), Tl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Co(Error(p(423)), t), t = yc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Co(Error(p(424)), t), t = yc(e, t, r, n, o);
            break e;
          } else for (Tt = qn(t.stateNode.containerInfo.firstChild), Dt = t, He = !0, Gt = null, n = Pu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (wo(), r === o) {
              t = Mn(e, t, n);
              break e;
            }
            Ct(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Au(t), e === null && ss(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = o.children, Zi(r, o) ? d = null : i !== null && Zi(r, i) && (t.flags |= 32), mc(e, t), Ct(e, t, d, n), t.child;
      case 6:
        return e === null && ss(t), null;
      case 13:
        return bc(e, t, n);
      case 4:
        return vs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Eo(t, null, r, n) : Ct(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), fc(e, t, r, o, n);
      case 7:
        return Ct(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ct(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ct(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, d = o.value, We(Al, r._currentValue), r._currentValue = d, i !== null) if (Lt(i.value, d)) {
            if (i.children === o.children && !Ot.current) {
              t = Mn(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var w = i.dependencies;
            if (w !== null) {
              d = i.child;
              for (var j = w.firstContext; j !== null; ) {
                if (j.context === r) {
                  if (i.tag === 1) {
                    j = On(-1, n & -n), j.tag = 2;
                    var V = i.updateQueue;
                    if (V !== null) {
                      V = V.shared;
                      var Q = V.pending;
                      Q === null ? j.next = j : (j.next = Q.next, Q.next = j), V.pending = j;
                    }
                  }
                  i.lanes |= n, j = i.alternate, j !== null && (j.lanes |= n), ps(
                    i.return,
                    n,
                    t
                  ), w.lanes |= n;
                  break;
                }
                j = j.next;
              }
            } else if (i.tag === 10) d = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (d = i.return, d === null) throw Error(p(341));
              d.lanes |= n, w = d.alternate, w !== null && (w.lanes |= n), ps(d, n, t), d = i.sibling;
            } else d = i.child;
            if (d !== null) d.return = i;
            else for (d = i; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (i = d.sibling, i !== null) {
                i.return = d.return, d = i;
                break;
              }
              d = d.return;
            }
            i = d;
          }
          Ct(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, So(t, n), o = Kt(o), r = r(o), t.flags |= 1, Ct(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = Xt(r, t.pendingProps), o = Xt(r.type, o), dc(e, t, r, o, n);
      case 15:
        return pc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), $l(e, t), t.tag = 1, Mt(r) ? (e = !0, Ml(t)) : e = !1, So(t, n), oc(t, r, o), Ms(t, r, o, n), Fs(null, t, r, !0, e, n);
      case 19:
        return wc(e, t, n);
      case 22:
        return hc(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Kc(e, t) {
    return Ba(e, t);
  }
  function Kf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(e, t, n, r) {
    return new Kf(e, t, n, r);
  }
  function Zs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hf(e) {
    if (typeof e == "function") return Zs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === se) return 11;
      if (e === Ne) return 14;
    }
    return 2;
  }
  function tr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function oi(e, t, n, r, o, i) {
    var d = 2;
    if (r = e, typeof e == "function") Zs(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case P:
        return Ar(n.children, o, i, t);
      case K:
        d = 8, o |= 8;
        break;
      case J:
        return e = Qt(12, n, t, o | 2), e.elementType = J, e.lanes = i, e;
      case we:
        return e = Qt(13, n, t, o), e.elementType = we, e.lanes = i, e;
      case Pe:
        return e = Qt(19, n, t, o), e.elementType = Pe, e.lanes = i, e;
      case qe:
        return ai(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case fe:
            d = 10;
            break e;
          case me:
            d = 9;
            break e;
          case se:
            d = 11;
            break e;
          case Ne:
            d = 14;
            break e;
          case Be:
            d = 16, r = null;
            break e;
        }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
    return t = Qt(d, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Ar(e, t, n, r) {
    return e = Qt(7, e, r, t), e.lanes = n, e;
  }
  function ai(e, t, n, r) {
    return e = Qt(22, e, r, t), e.elementType = qe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function eu(e, t, n) {
    return e = Qt(6, e, null, t), e.lanes = n, e;
  }
  function tu(e, t, n) {
    return t = Qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function $f(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function nu(e, t, n, r, o, i, d, w, j) {
    return e = new $f(e, t, n, w, j), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Qt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ms(i), e;
  }
  function Qf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: f, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Hc(e) {
    if (!e) return Hn;
    e = e._reactInternals;
    e: {
      if (Bt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Mt(t.type)) {
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
      if (Mt(n)) return ku(e, n, t);
    }
    return t;
  }
  function $c(e, t, n, r, o, i, d, w, j) {
    return e = nu(n, r, !0, e, o, i, d, w, j), e.context = Hc(null), n = e.current, r = jt(), o = Zn(n), i = On(r, o), i.callback = t ?? null, Yn(n, i, o), e.current.lanes = o, fr(e, o, r), zt(e, r), e;
  }
  function li(e, t, n, r) {
    var o = t.current, i = jt(), d = Zn(o);
    return n = Hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = On(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yn(o, t, d), e !== null && (en(e, o, d, i), Dl(e, o, d)), d;
  }
  function ii(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Qc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ru(e, t) {
    Qc(e, t), (e = e.alternate) && Qc(e, t);
  }
  function Yf() {
    return null;
  }
  var Yc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ou(e) {
    this._internalRoot = e;
  }
  si.prototype.render = ou.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    li(e, t, null, null);
  }, si.prototype.unmount = ou.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zr(function() {
        li(null, e, null, null);
      }), t[_n] = null;
    }
  };
  function si(e) {
    this._internalRoot = e;
  }
  si.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Xa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++) ;
      Yt.splice(n, 0, e), n === 0 && Yo(e);
    }
  };
  function au(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ui(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Gc() {
  }
  function Gf(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var V = ii(d);
          i.call(V);
        };
      }
      var d = $c(t, r, e, 0, null, !1, !1, "", Gc);
      return e._reactRootContainer = d, e[_n] = d.current, En(e.nodeType === 8 ? e.parentNode : e), zr(), d;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var w = r;
      r = function() {
        var V = ii(j);
        w.call(V);
      };
    }
    var j = nu(e, 0, !1, null, null, !1, !1, "", Gc);
    return e._reactRootContainer = j, e[_n] = j.current, En(e.nodeType === 8 ? e.parentNode : e), zr(function() {
      li(t, j, n, r);
    }), j;
  }
  function ci(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof o == "function") {
        var w = o;
        o = function() {
          var j = ii(d);
          w.call(j);
        };
      }
      li(t, d, e, o);
    } else d = Gf(n, t, e, o, r);
    return ii(d);
  }
  Ya = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = cr(t.pendingLanes);
          n !== 0 && (dr(t, n | 1), zt(t, $e()), (Fe & 6) === 0 && (Mo = $e() + 500, $n()));
        }
        break;
      case 13:
        zr(function() {
          var r = jn(e, 1);
          if (r !== null) {
            var o = jt();
            en(r, e, 1, o);
          }
        }), ru(e, 1);
    }
  }, $o = function(e) {
    if (e.tag === 13) {
      var t = jn(e, 134217728);
      if (t !== null) {
        var n = jt();
        en(t, e, 134217728, n);
      }
      ru(e, 134217728);
    }
  }, Ga = function(e) {
    if (e.tag === 13) {
      var t = Zn(e), n = jn(e, t);
      if (n !== null) {
        var r = jt();
        en(n, e, t, r);
      }
      ru(e, t);
    }
  }, Xa = function() {
    return Ie;
  }, Ja = function(e, t) {
    var n = Ie;
    try {
      return Ie = e, t();
    } finally {
      Ie = n;
    }
  }, Bo = function(e, t, n) {
    switch (t) {
      case "input":
        if (rn(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = jl(r);
              if (!o) throw Error(p(90));
              Oa(r), rn(r, o);
            }
          }
        }
        break;
      case "textarea":
        Na(e, n);
        break;
      case "select":
        t = n.value, t != null && vn(e, !!n.multiple, t, !1);
    }
  }, La = Gs, Vr = zr;
  var Xf = { usingClientEntryPoint: !1, Events: [da, vo, jl, Aa, Uo, Gs] }, Ca = { findFiberByHostInstance: Sr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jf = { bundleType: Ca.bundleType, version: Ca.version, rendererPackageName: Ca.rendererPackageName, rendererConfig: Ca.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: h.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Wo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ca.findFiberByHostInstance || Yf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fi.isDisabled && fi.supportsFiber) try {
      Qr = fi.inject(Jf), Vt = fi;
    } catch {
    }
  }
  return Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf, Ft.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!au(t)) throw Error(p(200));
    return Qf(e, t, null, n);
  }, Ft.createRoot = function(e, t) {
    if (!au(e)) throw Error(p(299));
    var n = !1, r = "", o = Yc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = nu(e, 1, !1, null, null, n, !1, r, o), e[_n] = t.current, En(e.nodeType === 8 ? e.parentNode : e), new ou(t);
  }, Ft.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = Wo(t), e = e === null ? null : e.stateNode, e;
  }, Ft.flushSync = function(e) {
    return zr(e);
  }, Ft.hydrate = function(e, t, n) {
    if (!ui(t)) throw Error(p(200));
    return ci(null, e, t, !0, n);
  }, Ft.hydrateRoot = function(e, t, n) {
    if (!au(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null, o = !1, i = "", d = Yc;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = $c(t, null, e, 1, n ?? null, o, !1, i, d), e[_n] = t.current, En(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new si(t);
  }, Ft.render = function(e, t, n) {
    if (!ui(t)) throw Error(p(200));
    return ci(null, e, t, !1, n);
  }, Ft.unmountComponentAtNode = function(e) {
    if (!ui(e)) throw Error(p(40));
    return e._reactRootContainer ? (zr(function() {
      ci(null, null, e, !1, function() {
        e._reactRootContainer = null, e[_n] = null;
      });
    }), !0) : !1;
  }, Ft.unstable_batchedUpdates = Gs, Ft.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ui(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return ci(e, t, n, !1, r);
  }, Ft.version = "18.3.1-next-f1338f8080-20240426", Ft;
}
var of;
function id() {
  if (of) return su.exports;
  of = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (m) {
        console.error(m);
      }
  }
  return u(), su.exports = ld(), su.exports;
}
var af;
function sd() {
  if (af) return pi;
  af = 1;
  var u = id();
  return pi.createRoot = u.createRoot, pi.hydrateRoot = u.hydrateRoot, pi;
}
var ud = sd(), vi = { exports: {} }, cd = vi.exports, lf;
function fd() {
  return lf || (lf = 1, (function(u, m) {
    (function(p, k) {
      u.exports = k(yi());
    })(cd, (p) => (() => {
      var k = { 165(z, U, Y) {
        const oe = Y(877), q = {};
        for (const y of Object.keys(oe)) q[oe[y]] = y;
        const R = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
        z.exports = R;
        for (const y of Object.keys(R)) {
          if (!("channels" in R[y])) throw new Error("missing channels property: " + y);
          if (!("labels" in R[y])) throw new Error("missing channel labels property: " + y);
          if (R[y].labels.length !== R[y].channels) throw new Error("channel and label counts mismatch: " + y);
          const { channels: S, labels: x } = R[y];
          delete R[y].channels, delete R[y].labels, Object.defineProperty(R[y], "channels", { value: S }), Object.defineProperty(R[y], "labels", { value: x });
        }
        function ke(y, S) {
          return (y[0] - S[0]) ** 2 + (y[1] - S[1]) ** 2 + (y[2] - S[2]) ** 2;
        }
        R.rgb.hsl = function(y) {
          const S = y[0] / 255, x = y[1] / 255, O = y[2] / 255, v = Math.min(S, x, O), A = Math.max(S, x, O), h = A - v;
          let F, f;
          A === v ? F = 0 : S === A ? F = (x - O) / h : x === A ? F = 2 + (O - S) / h : O === A && (F = 4 + (S - x) / h), F = Math.min(60 * F, 360), F < 0 && (F += 360);
          const P = (v + A) / 2;
          return f = A === v ? 0 : P <= 0.5 ? h / (A + v) : h / (2 - A - v), [F, 100 * f, 100 * P];
        }, R.rgb.hsv = function(y) {
          let S, x, O, v, A;
          const h = y[0] / 255, F = y[1] / 255, f = y[2] / 255, P = Math.max(h, F, f), K = P - Math.min(h, F, f), J = function(fe) {
            return (P - fe) / 6 / K + 0.5;
          };
          return K === 0 ? (v = 0, A = 0) : (A = K / P, S = J(h), x = J(F), O = J(f), h === P ? v = O - x : F === P ? v = 0.3333333333333333 + S - O : f === P && (v = 0.6666666666666666 + x - S), v < 0 ? v += 1 : v > 1 && (v -= 1)), [360 * v, 100 * A, 100 * P];
        }, R.rgb.hwb = function(y) {
          const S = y[0], x = y[1];
          let O = y[2];
          const v = R.rgb.hsl(y)[0], A = 1 / 255 * Math.min(S, Math.min(x, O));
          return O = 1 - 0.00392156862745098 * Math.max(S, Math.max(x, O)), [v, 100 * A, 100 * O];
        }, R.rgb.cmyk = function(y) {
          const S = y[0] / 255, x = y[1] / 255, O = y[2] / 255, v = Math.min(1 - S, 1 - x, 1 - O);
          return [100 * ((1 - S - v) / (1 - v) || 0), 100 * ((1 - x - v) / (1 - v) || 0), 100 * ((1 - O - v) / (1 - v) || 0), 100 * v];
        }, R.rgb.keyword = function(y) {
          const S = q[y];
          if (S) return S;
          let x, O = 1 / 0;
          for (const v of Object.keys(oe)) {
            const A = ke(y, oe[v]);
            A < O && (O = A, x = v);
          }
          return x;
        }, R.keyword.rgb = function(y) {
          return oe[y];
        }, R.rgb.xyz = function(y) {
          let S = y[0] / 255, x = y[1] / 255, O = y[2] / 255;
          return S = S > 0.04045 ? ((S + 0.055) / 1.055) ** 2.4 : S / 12.92, x = x > 0.04045 ? ((x + 0.055) / 1.055) ** 2.4 : x / 12.92, O = O > 0.04045 ? ((O + 0.055) / 1.055) ** 2.4 : O / 12.92, [100 * (0.4124 * S + 0.3576 * x + 0.1805 * O), 100 * (0.2126 * S + 0.7152 * x + 0.0722 * O), 100 * (0.0193 * S + 0.1192 * x + 0.9505 * O)];
        }, R.rgb.lab = function(y) {
          const S = R.rgb.xyz(y);
          let x = S[0], O = S[1], v = S[2];
          return x /= 95.047, O /= 100, v /= 108.883, x = x > 8856e-6 ? x ** 0.3333333333333333 : 7.787 * x + 0.13793103448275862, O = O > 8856e-6 ? O ** 0.3333333333333333 : 7.787 * O + 0.13793103448275862, v = v > 8856e-6 ? v ** 0.3333333333333333 : 7.787 * v + 0.13793103448275862, [116 * O - 16, 500 * (x - O), 200 * (O - v)];
        }, R.hsl.rgb = function(y) {
          const S = y[0] / 360, x = y[1] / 100, O = y[2] / 100;
          let v, A, h;
          if (x === 0) return h = 255 * O, [h, h, h];
          v = O < 0.5 ? O * (1 + x) : O + x - O * x;
          const F = 2 * O - v, f = [0, 0, 0];
          for (let P = 0; P < 3; P++) A = S + 0.3333333333333333 * -(P - 1), A < 0 && A++, A > 1 && A--, h = 6 * A < 1 ? F + 6 * (v - F) * A : 2 * A < 1 ? v : 3 * A < 2 ? F + (v - F) * (0.6666666666666666 - A) * 6 : F, f[P] = 255 * h;
          return f;
        }, R.hsl.hsv = function(y) {
          const S = y[0];
          let x = y[1] / 100, O = y[2] / 100, v = x;
          const A = Math.max(O, 0.01);
          return O *= 2, x *= O <= 1 ? O : 2 - O, v *= A <= 1 ? A : 2 - A, [S, 100 * (O === 0 ? 2 * v / (A + v) : 2 * x / (O + x)), 100 * ((O + x) / 2)];
        }, R.hsv.rgb = function(y) {
          const S = y[0] / 60, x = y[1] / 100;
          let O = y[2] / 100;
          const v = Math.floor(S) % 6, A = S - Math.floor(S), h = 255 * O * (1 - x), F = 255 * O * (1 - x * A), f = 255 * O * (1 - x * (1 - A));
          switch (O *= 255, v) {
            case 0:
              return [O, f, h];
            case 1:
              return [F, O, h];
            case 2:
              return [h, O, f];
            case 3:
              return [h, F, O];
            case 4:
              return [f, h, O];
            case 5:
              return [O, h, F];
          }
        }, R.hsv.hsl = function(y) {
          const S = y[0], x = y[1] / 100, O = y[2] / 100, v = Math.max(O, 0.01);
          let A, h;
          h = (2 - x) * O;
          const F = (2 - x) * v;
          return A = x * v, A /= F <= 1 ? F : 2 - F, A = A || 0, h /= 2, [S, 100 * A, 100 * h];
        }, R.hwb.rgb = function(y) {
          const S = y[0] / 360;
          let x = y[1] / 100, O = y[2] / 100;
          const v = x + O;
          let A;
          v > 1 && (x /= v, O /= v);
          const h = Math.floor(6 * S), F = 1 - O;
          A = 6 * S - h, 1 & h && (A = 1 - A);
          const f = x + A * (F - x);
          let P, K, J;
          switch (h) {
            default:
            case 6:
            case 0:
              P = F, K = f, J = x;
              break;
            case 1:
              P = f, K = F, J = x;
              break;
            case 2:
              P = x, K = F, J = f;
              break;
            case 3:
              P = x, K = f, J = F;
              break;
            case 4:
              P = f, K = x, J = F;
              break;
            case 5:
              P = F, K = x, J = f;
          }
          return [255 * P, 255 * K, 255 * J];
        }, R.cmyk.rgb = function(y) {
          const S = y[0] / 100, x = y[1] / 100, O = y[2] / 100, v = y[3] / 100;
          return [255 * (1 - Math.min(1, S * (1 - v) + v)), 255 * (1 - Math.min(1, x * (1 - v) + v)), 255 * (1 - Math.min(1, O * (1 - v) + v))];
        }, R.xyz.rgb = function(y) {
          const S = y[0] / 100, x = y[1] / 100, O = y[2] / 100;
          let v, A, h;
          return v = 3.2406 * S + -1.5372 * x + -0.4986 * O, A = -0.9689 * S + 1.8758 * x + 0.0415 * O, h = 0.0557 * S + -0.204 * x + 1.057 * O, v = v > 31308e-7 ? 1.055 * v ** 0.4166666666666667 - 0.055 : 12.92 * v, A = A > 31308e-7 ? 1.055 * A ** 0.4166666666666667 - 0.055 : 12.92 * A, h = h > 31308e-7 ? 1.055 * h ** 0.4166666666666667 - 0.055 : 12.92 * h, v = Math.min(Math.max(0, v), 1), A = Math.min(Math.max(0, A), 1), h = Math.min(Math.max(0, h), 1), [255 * v, 255 * A, 255 * h];
        }, R.xyz.lab = function(y) {
          let S = y[0], x = y[1], O = y[2];
          return S /= 95.047, x /= 100, O /= 108.883, S = S > 8856e-6 ? S ** 0.3333333333333333 : 7.787 * S + 0.13793103448275862, x = x > 8856e-6 ? x ** 0.3333333333333333 : 7.787 * x + 0.13793103448275862, O = O > 8856e-6 ? O ** 0.3333333333333333 : 7.787 * O + 0.13793103448275862, [116 * x - 16, 500 * (S - x), 200 * (x - O)];
        }, R.lab.xyz = function(y) {
          let S, x, O;
          x = (y[0] + 16) / 116, S = y[1] / 500 + x, O = x - y[2] / 200;
          const v = x ** 3, A = S ** 3, h = O ** 3;
          return x = v > 8856e-6 ? v : (x - 0.13793103448275862) / 7.787, S = A > 8856e-6 ? A : (S - 0.13793103448275862) / 7.787, O = h > 8856e-6 ? h : (O - 0.13793103448275862) / 7.787, S *= 95.047, x *= 100, O *= 108.883, [S, x, O];
        }, R.lab.lch = function(y) {
          const S = y[0], x = y[1], O = y[2];
          let v;
          return v = 360 * Math.atan2(O, x) / 2 / Math.PI, v < 0 && (v += 360), [S, Math.sqrt(x * x + O * O), v];
        }, R.lch.lab = function(y) {
          const S = y[0], x = y[1], O = y[2] / 360 * 2 * Math.PI;
          return [S, x * Math.cos(O), x * Math.sin(O)];
        }, R.rgb.ansi16 = function(y, S = null) {
          const [x, O, v] = y;
          let A = S === null ? R.rgb.hsv(y)[2] : S;
          if (A = Math.round(A / 50), A === 0) return 30;
          let h = 30 + (Math.round(v / 255) << 2 | Math.round(O / 255) << 1 | Math.round(x / 255));
          return A === 2 && (h += 60), h;
        }, R.hsv.ansi16 = function(y) {
          return R.rgb.ansi16(R.hsv.rgb(y), y[2]);
        }, R.rgb.ansi256 = function(y) {
          const S = y[0], x = y[1], O = y[2];
          return S === x && x === O ? S < 8 ? 16 : S > 248 ? 231 : Math.round((S - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(S / 255 * 5) + 6 * Math.round(x / 255 * 5) + Math.round(O / 255 * 5);
        }, R.ansi16.rgb = function(y) {
          let S = y % 10;
          if (S === 0 || S === 7) return y > 50 && (S += 3.5), S = S / 10.5 * 255, [S, S, S];
          const x = 0.5 * (1 + ~~(y > 50));
          return [(1 & S) * x * 255, (S >> 1 & 1) * x * 255, (S >> 2 & 1) * x * 255];
        }, R.ansi256.rgb = function(y) {
          if (y >= 232) {
            const x = 10 * (y - 232) + 8;
            return [x, x, x];
          }
          let S;
          return y -= 16, [Math.floor(y / 36) / 5 * 255, Math.floor((S = y % 36) / 6) / 5 * 255, S % 6 / 5 * 255];
        }, R.rgb.hex = function(y) {
          const S = (((255 & Math.round(y[0])) << 16) + ((255 & Math.round(y[1])) << 8) + (255 & Math.round(y[2]))).toString(16).toUpperCase();
          return "000000".substring(S.length) + S;
        }, R.hex.rgb = function(y) {
          const S = y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!S) return [0, 0, 0];
          let x = S[0];
          S[0].length === 3 && (x = x.split("").map((v) => v + v).join(""));
          const O = parseInt(x, 16);
          return [O >> 16 & 255, O >> 8 & 255, 255 & O];
        }, R.rgb.hcg = function(y) {
          const S = y[0] / 255, x = y[1] / 255, O = y[2] / 255, v = Math.max(Math.max(S, x), O), A = Math.min(Math.min(S, x), O), h = v - A;
          let F, f;
          return F = h < 1 ? A / (1 - h) : 0, f = h <= 0 ? 0 : v === S ? (x - O) / h % 6 : v === x ? 2 + (O - S) / h : 4 + (S - x) / h, f /= 6, f %= 1, [360 * f, 100 * h, 100 * F];
        }, R.hsl.hcg = function(y) {
          const S = y[1] / 100, x = y[2] / 100, O = x < 0.5 ? 2 * S * x : 2 * S * (1 - x);
          let v = 0;
          return O < 1 && (v = (x - 0.5 * O) / (1 - O)), [y[0], 100 * O, 100 * v];
        }, R.hsv.hcg = function(y) {
          const S = y[1] / 100, x = y[2] / 100, O = S * x;
          let v = 0;
          return O < 1 && (v = (x - O) / (1 - O)), [y[0], 100 * O, 100 * v];
        }, R.hcg.rgb = function(y) {
          const S = y[0] / 360, x = y[1] / 100, O = y[2] / 100;
          if (x === 0) return [255 * O, 255 * O, 255 * O];
          const v = [0, 0, 0], A = S % 1 * 6, h = A % 1, F = 1 - h;
          let f = 0;
          switch (Math.floor(A)) {
            case 0:
              v[0] = 1, v[1] = h, v[2] = 0;
              break;
            case 1:
              v[0] = F, v[1] = 1, v[2] = 0;
              break;
            case 2:
              v[0] = 0, v[1] = 1, v[2] = h;
              break;
            case 3:
              v[0] = 0, v[1] = F, v[2] = 1;
              break;
            case 4:
              v[0] = h, v[1] = 0, v[2] = 1;
              break;
            default:
              v[0] = 1, v[1] = 0, v[2] = F;
          }
          return f = (1 - x) * O, [255 * (x * v[0] + f), 255 * (x * v[1] + f), 255 * (x * v[2] + f)];
        }, R.hcg.hsv = function(y) {
          const S = y[1] / 100, x = S + y[2] / 100 * (1 - S);
          let O = 0;
          return x > 0 && (O = S / x), [y[0], 100 * O, 100 * x];
        }, R.hcg.hsl = function(y) {
          const S = y[1] / 100, x = y[2] / 100 * (1 - S) + 0.5 * S;
          let O = 0;
          return x > 0 && x < 0.5 ? O = S / (2 * x) : x >= 0.5 && x < 1 && (O = S / (2 * (1 - x))), [y[0], 100 * O, 100 * x];
        }, R.hcg.hwb = function(y) {
          const S = y[1] / 100, x = S + y[2] / 100 * (1 - S);
          return [y[0], 100 * (x - S), 100 * (1 - x)];
        }, R.hwb.hcg = function(y) {
          const S = y[1] / 100, x = 1 - y[2] / 100, O = x - S;
          let v = 0;
          return O < 1 && (v = (x - O) / (1 - O)), [y[0], 100 * O, 100 * v];
        }, R.apple.rgb = function(y) {
          return [y[0] / 65535 * 255, y[1] / 65535 * 255, y[2] / 65535 * 255];
        }, R.rgb.apple = function(y) {
          return [y[0] / 255 * 65535, y[1] / 255 * 65535, y[2] / 255 * 65535];
        }, R.gray.rgb = function(y) {
          return [y[0] / 100 * 255, y[0] / 100 * 255, y[0] / 100 * 255];
        }, R.gray.hsl = function(y) {
          return [0, 0, y[0]];
        }, R.gray.hsv = R.gray.hsl, R.gray.hwb = function(y) {
          return [0, 100, y[0]];
        }, R.gray.cmyk = function(y) {
          return [0, 0, 0, y[0]];
        }, R.gray.lab = function(y) {
          return [y[0], 0, 0];
        }, R.gray.hex = function(y) {
          const S = 255 & Math.round(y[0] / 100 * 255), x = ((S << 16) + (S << 8) + S).toString(16).toUpperCase();
          return "000000".substring(x.length) + x;
        }, R.rgb.gray = function(y) {
          return [(y[0] + y[1] + y[2]) / 3 / 255 * 100];
        };
      }, 880(z, U, Y) {
        const oe = Y(165), q = Y(985), R = {};
        Object.keys(oe).forEach((ke) => {
          R[ke] = {}, Object.defineProperty(R[ke], "channels", { value: oe[ke].channels }), Object.defineProperty(R[ke], "labels", { value: oe[ke].labels });
          const y = q(ke);
          Object.keys(y).forEach((S) => {
            const x = y[S];
            R[ke][S] = (function(O) {
              const v = function(...A) {
                const h = A[0];
                if (h == null) return h;
                h.length > 1 && (A = h);
                const F = O(A);
                if (typeof F == "object") for (let f = F.length, P = 0; P < f; P++) F[P] = Math.round(F[P]);
                return F;
              };
              return "conversion" in O && (v.conversion = O.conversion), v;
            })(x), R[ke][S].raw = (function(O) {
              const v = function(...A) {
                const h = A[0];
                return h == null ? h : (h.length > 1 && (A = h), O(A));
              };
              return "conversion" in O && (v.conversion = O.conversion), v;
            })(x);
          });
        }), z.exports = R;
      }, 985(z, U, Y) {
        const oe = Y(165);
        function q(y) {
          const S = (function() {
            const O = {}, v = Object.keys(oe);
            for (let A = v.length, h = 0; h < A; h++) O[v[h]] = { distance: -1, parent: null };
            return O;
          })(), x = [y];
          for (S[y].distance = 0; x.length; ) {
            const O = x.pop(), v = Object.keys(oe[O]);
            for (let A = v.length, h = 0; h < A; h++) {
              const F = v[h], f = S[F];
              f.distance === -1 && (f.distance = S[O].distance + 1, f.parent = O, x.unshift(F));
            }
          }
          return S;
        }
        function R(y, S) {
          return function(x) {
            return S(y(x));
          };
        }
        function ke(y, S) {
          const x = [S[y].parent, y];
          let O = oe[S[y].parent][y], v = S[y].parent;
          for (; S[v].parent; ) x.unshift(S[v].parent), O = R(oe[S[v].parent][v], O), v = S[v].parent;
          return O.conversion = x, O;
        }
        z.exports = function(y) {
          const S = q(y), x = {}, O = Object.keys(S);
          for (let v = O.length, A = 0; A < v; A++) {
            const h = O[A];
            S[h].parent !== null && (x[h] = ke(h, S));
          }
          return x;
        };
      }, 877(z) {
        z.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
      }, 138(z, U, Y) {
        var oe = Y(877), q = Y(403), R = Object.hasOwnProperty, ke = /* @__PURE__ */ Object.create(null);
        for (var y in oe) R.call(oe, y) && (ke[oe[y]] = y);
        var S = z.exports = { to: {}, get: {} };
        function x(v, A, h) {
          return Math.min(Math.max(A, v), h);
        }
        function O(v) {
          var A = Math.round(v).toString(16).toUpperCase();
          return A.length < 2 ? "0" + A : A;
        }
        S.get = function(v) {
          var A, h;
          switch (v.substring(0, 3).toLowerCase()) {
            case "hsl":
              A = S.get.hsl(v), h = "hsl";
              break;
            case "hwb":
              A = S.get.hwb(v), h = "hwb";
              break;
            default:
              A = S.get.rgb(v), h = "rgb";
          }
          return A ? { model: h, value: A } : null;
        }, S.get.rgb = function(v) {
          if (!v) return null;
          var A, h, F, f = [0, 0, 0, 1];
          if (A = v.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
            for (F = A[2], A = A[1], h = 0; h < 3; h++) {
              var P = 2 * h;
              f[h] = parseInt(A.slice(P, P + 2), 16);
            }
            F && (f[3] = parseInt(F, 16) / 255);
          } else if (A = v.match(/^#([a-f0-9]{3,4})$/i)) {
            for (F = (A = A[1])[3], h = 0; h < 3; h++) f[h] = parseInt(A[h] + A[h], 16);
            F && (f[3] = parseInt(F + F, 16) / 255);
          } else if (A = v.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
            for (h = 0; h < 3; h++) f[h] = parseInt(A[h + 1], 0);
            A[4] && (A[5] ? f[3] = 0.01 * parseFloat(A[4]) : f[3] = parseFloat(A[4]));
          } else {
            if (!(A = v.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (A = v.match(/^(\w+)$/)) ? A[1] === "transparent" ? [0, 0, 0, 0] : R.call(oe, A[1]) ? ((f = oe[A[1]])[3] = 1, f) : null : null;
            for (h = 0; h < 3; h++) f[h] = Math.round(2.55 * parseFloat(A[h + 1]));
            A[4] && (A[5] ? f[3] = 0.01 * parseFloat(A[4]) : f[3] = parseFloat(A[4]));
          }
          for (h = 0; h < 3; h++) f[h] = x(f[h], 0, 255);
          return f[3] = x(f[3], 0, 1), f;
        }, S.get.hsl = function(v) {
          if (!v) return null;
          var A = v.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
          if (A) {
            var h = parseFloat(A[4]);
            return [(parseFloat(A[1]) % 360 + 360) % 360, x(parseFloat(A[2]), 0, 100), x(parseFloat(A[3]), 0, 100), x(isNaN(h) ? 1 : h, 0, 1)];
          }
          return null;
        }, S.get.hwb = function(v) {
          if (!v) return null;
          var A = v.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
          if (A) {
            var h = parseFloat(A[4]);
            return [(parseFloat(A[1]) % 360 + 360) % 360, x(parseFloat(A[2]), 0, 100), x(parseFloat(A[3]), 0, 100), x(isNaN(h) ? 1 : h, 0, 1)];
          }
          return null;
        }, S.to.hex = function() {
          var v = q(arguments);
          return "#" + O(v[0]) + O(v[1]) + O(v[2]) + (v[3] < 1 ? O(Math.round(255 * v[3])) : "");
        }, S.to.rgb = function() {
          var v = q(arguments);
          return v.length < 4 || v[3] === 1 ? "rgb(" + Math.round(v[0]) + ", " + Math.round(v[1]) + ", " + Math.round(v[2]) + ")" : "rgba(" + Math.round(v[0]) + ", " + Math.round(v[1]) + ", " + Math.round(v[2]) + ", " + v[3] + ")";
        }, S.to.rgb.percent = function() {
          var v = q(arguments), A = Math.round(v[0] / 255 * 100), h = Math.round(v[1] / 255 * 100), F = Math.round(v[2] / 255 * 100);
          return v.length < 4 || v[3] === 1 ? "rgb(" + A + "%, " + h + "%, " + F + "%)" : "rgba(" + A + "%, " + h + "%, " + F + "%, " + v[3] + ")";
        }, S.to.hsl = function() {
          var v = q(arguments);
          return v.length < 4 || v[3] === 1 ? "hsl(" + v[0] + ", " + v[1] + "%, " + v[2] + "%)" : "hsla(" + v[0] + ", " + v[1] + "%, " + v[2] + "%, " + v[3] + ")";
        }, S.to.hwb = function() {
          var v = q(arguments), A = "";
          return v.length >= 4 && v[3] !== 1 && (A = ", " + v[3]), "hwb(" + v[0] + ", " + v[1] + "%, " + v[2] + "%" + A + ")";
        }, S.to.keyword = function(v) {
          return ke[v.slice(0, 3)];
        };
      }, 742(z, U, Y) {
        const oe = Y(138), q = Y(880), R = ["keyword", "gray", "hex"], ke = {};
        for (const h of Object.keys(q)) ke[[...q[h].labels].sort().join("")] = h;
        const y = {};
        function S(h, F) {
          if (!(this instanceof S)) return new S(h, F);
          if (F && F in R && (F = null), F && !(F in q)) throw new Error("Unknown model: " + F);
          let f, P;
          if (h == null) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
          else if (h instanceof S) this.model = h.model, this.color = [...h.color], this.valpha = h.valpha;
          else if (typeof h == "string") {
            const K = oe.get(h);
            if (K === null) throw new Error("Unable to parse color from string: " + h);
            this.model = K.model, P = q[this.model].channels, this.color = K.value.slice(0, P), this.valpha = typeof K.value[P] == "number" ? K.value[P] : 1;
          } else if (h.length > 0) {
            this.model = F || "rgb", P = q[this.model].channels;
            const K = Array.prototype.slice.call(h, 0, P);
            this.color = A(K, P), this.valpha = typeof h[P] == "number" ? h[P] : 1;
          } else if (typeof h == "number") this.model = "rgb", this.color = [h >> 16 & 255, h >> 8 & 255, 255 & h], this.valpha = 1;
          else {
            this.valpha = 1;
            const K = Object.keys(h);
            "alpha" in h && (K.splice(K.indexOf("alpha"), 1), this.valpha = typeof h.alpha == "number" ? h.alpha : 0);
            const J = K.sort().join("");
            if (!(J in ke)) throw new Error("Unable to parse color from object: " + JSON.stringify(h));
            this.model = ke[J];
            const { labels: fe } = q[this.model], me = [];
            for (f = 0; f < fe.length; f++) me.push(h[fe[f]]);
            this.color = A(me);
          }
          if (y[this.model]) for (P = q[this.model].channels, f = 0; f < P; f++) {
            const K = y[this.model][f];
            K && (this.color[f] = K(this.color[f]));
          }
          this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
        }
        S.prototype = { toString() {
          return this.string();
        }, toJSON() {
          return this[this.model]();
        }, string(h) {
          let F = this.model in oe.to ? this : this.rgb();
          F = F.round(typeof h == "number" ? h : 1);
          const f = F.valpha === 1 ? F.color : [...F.color, this.valpha];
          return oe.to[F.model](f);
        }, percentString(h) {
          const F = this.rgb().round(typeof h == "number" ? h : 1), f = F.valpha === 1 ? F.color : [...F.color, this.valpha];
          return oe.to.rgb.percent(f);
        }, array() {
          return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
        }, object() {
          const h = {}, { channels: F } = q[this.model], { labels: f } = q[this.model];
          for (let P = 0; P < F; P++) h[f[P]] = this.color[P];
          return this.valpha !== 1 && (h.alpha = this.valpha), h;
        }, unitArray() {
          const h = this.rgb().color;
          return h[0] /= 255, h[1] /= 255, h[2] /= 255, this.valpha !== 1 && h.push(this.valpha), h;
        }, unitObject() {
          const h = this.rgb().object();
          return h.r /= 255, h.g /= 255, h.b /= 255, this.valpha !== 1 && (h.alpha = this.valpha), h;
        }, round(h) {
          return h = Math.max(h || 0, 0), new S([...this.color.map(x(h)), this.valpha], this.model);
        }, alpha(h) {
          return h !== void 0 ? new S([...this.color, Math.max(0, Math.min(1, h))], this.model) : this.valpha;
        }, red: O("rgb", 0, v(255)), green: O("rgb", 1, v(255)), blue: O("rgb", 2, v(255)), hue: O(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (h) => (h % 360 + 360) % 360), saturationl: O("hsl", 1, v(100)), lightness: O("hsl", 2, v(100)), saturationv: O("hsv", 1, v(100)), value: O("hsv", 2, v(100)), chroma: O("hcg", 1, v(100)), gray: O("hcg", 2, v(100)), white: O("hwb", 1, v(100)), wblack: O("hwb", 2, v(100)), cyan: O("cmyk", 0, v(100)), magenta: O("cmyk", 1, v(100)), yellow: O("cmyk", 2, v(100)), black: O("cmyk", 3, v(100)), x: O("xyz", 0, v(95.047)), y: O("xyz", 1, v(100)), z: O("xyz", 2, v(108.833)), l: O("lab", 0, v(100)), a: O("lab", 1), b: O("lab", 2), keyword(h) {
          return h !== void 0 ? new S(h) : q[this.model].keyword(this.color);
        }, hex(h) {
          return h !== void 0 ? new S(h) : oe.to.hex(this.rgb().round().color);
        }, hexa(h) {
          if (h !== void 0) return new S(h);
          const F = this.rgb().round().color;
          let f = Math.round(255 * this.valpha).toString(16).toUpperCase();
          return f.length === 1 && (f = "0" + f), oe.to.hex(F) + f;
        }, rgbNumber() {
          const h = this.rgb().color;
          return (255 & h[0]) << 16 | (255 & h[1]) << 8 | 255 & h[2];
        }, luminosity() {
          const h = this.rgb().color, F = [];
          for (const [f, P] of h.entries()) {
            const K = P / 255;
            F[f] = K <= 0.04045 ? K / 12.92 : ((K + 0.055) / 1.055) ** 2.4;
          }
          return 0.2126 * F[0] + 0.7152 * F[1] + 0.0722 * F[2];
        }, contrast(h) {
          const F = this.luminosity(), f = h.luminosity();
          return F > f ? (F + 0.05) / (f + 0.05) : (f + 0.05) / (F + 0.05);
        }, level(h) {
          const F = this.contrast(h);
          return F >= 7 ? "AAA" : F >= 4.5 ? "AA" : "";
        }, isDark() {
          const h = this.rgb().color;
          return (2126 * h[0] + 7152 * h[1] + 722 * h[2]) / 1e4 < 128;
        }, isLight() {
          return !this.isDark();
        }, negate() {
          const h = this.rgb();
          for (let F = 0; F < 3; F++) h.color[F] = 255 - h.color[F];
          return h;
        }, lighten(h) {
          const F = this.hsl();
          return F.color[2] += F.color[2] * h, F;
        }, darken(h) {
          const F = this.hsl();
          return F.color[2] -= F.color[2] * h, F;
        }, saturate(h) {
          const F = this.hsl();
          return F.color[1] += F.color[1] * h, F;
        }, desaturate(h) {
          const F = this.hsl();
          return F.color[1] -= F.color[1] * h, F;
        }, whiten(h) {
          const F = this.hwb();
          return F.color[1] += F.color[1] * h, F;
        }, blacken(h) {
          const F = this.hwb();
          return F.color[2] += F.color[2] * h, F;
        }, grayscale() {
          const h = this.rgb().color, F = 0.3 * h[0] + 0.59 * h[1] + 0.11 * h[2];
          return S.rgb(F, F, F);
        }, fade(h) {
          return this.alpha(this.valpha - this.valpha * h);
        }, opaquer(h) {
          return this.alpha(this.valpha + this.valpha * h);
        }, rotate(h) {
          const F = this.hsl();
          let f = F.color[0];
          return f = (f + h) % 360, f = f < 0 ? 360 + f : f, F.color[0] = f, F;
        }, mix(h, F) {
          if (!h || !h.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof h);
          const f = h.rgb(), P = this.rgb(), K = F === void 0 ? 0.5 : F, J = 2 * K - 1, fe = f.alpha() - P.alpha(), me = ((J * fe === -1 ? J : (J + fe) / (1 + J * fe)) + 1) / 2, se = 1 - me;
          return S.rgb(me * f.red() + se * P.red(), me * f.green() + se * P.green(), me * f.blue() + se * P.blue(), f.alpha() * K + P.alpha() * (1 - K));
        } };
        for (const h of Object.keys(q)) {
          if (R.includes(h)) continue;
          const { channels: F } = q[h];
          S.prototype[h] = function(...f) {
            return this.model === h ? new S(this) : f.length > 0 ? new S(f, h) : new S([...(P = q[this.model][h].raw(this.color), Array.isArray(P) ? P : [P]), this.valpha], h);
            var P;
          }, S[h] = function(...f) {
            let P = f[0];
            return typeof P == "number" && (P = A(f, F)), new S(P, h);
          };
        }
        function x(h) {
          return function(F) {
            return (function(f, P) {
              return Number(f.toFixed(P));
            })(F, h);
          };
        }
        function O(h, F, f) {
          h = Array.isArray(h) ? h : [h];
          for (const P of h) (y[P] || (y[P] = []))[F] = f;
          return h = h[0], function(P) {
            let K;
            return P !== void 0 ? (f && (P = f(P)), K = this[h](), K.color[F] = P, K) : (K = this[h]().color[F], f && (K = f(K)), K);
          };
        }
        function v(h) {
          return function(F) {
            return Math.max(0, Math.min(h, F));
          };
        }
        function A(h, F) {
          for (let f = 0; f < F; f++) typeof h[f] != "number" && (h[f] = 0);
          return h;
        }
        z.exports = S;
      }, 784(z) {
        var U, Y = typeof Reflect == "object" ? Reflect : null, oe = Y && typeof Y.apply == "function" ? Y.apply : function(P, K, J) {
          return Function.prototype.apply.call(P, K, J);
        };
        U = Y && typeof Y.ownKeys == "function" ? Y.ownKeys : Object.getOwnPropertySymbols ? function(P) {
          return Object.getOwnPropertyNames(P).concat(Object.getOwnPropertySymbols(P));
        } : function(P) {
          return Object.getOwnPropertyNames(P);
        };
        var q = Number.isNaN || function(P) {
          return P != P;
        };
        function R() {
          R.init.call(this);
        }
        z.exports = R, z.exports.once = function(P, K) {
          return new Promise(function(J, fe) {
            function me(we) {
              P.removeListener(K, se), fe(we);
            }
            function se() {
              typeof P.removeListener == "function" && P.removeListener("error", me), J([].slice.call(arguments));
            }
            f(P, K, se, { once: !0 }), K !== "error" && (function(we, Pe, Ne) {
              typeof we.on == "function" && f(we, "error", Pe, Ne);
            })(P, me, { once: !0 });
          });
        }, R.EventEmitter = R, R.prototype._events = void 0, R.prototype._eventsCount = 0, R.prototype._maxListeners = void 0;
        var ke = 10;
        function y(P) {
          if (typeof P != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof P);
        }
        function S(P) {
          return P._maxListeners === void 0 ? R.defaultMaxListeners : P._maxListeners;
        }
        function x(P, K, J, fe) {
          var me, se, we, Pe;
          if (y(J), (se = P._events) === void 0 ? (se = P._events = /* @__PURE__ */ Object.create(null), P._eventsCount = 0) : (se.newListener !== void 0 && (P.emit("newListener", K, J.listener ? J.listener : J), se = P._events), we = se[K]), we === void 0) we = se[K] = J, ++P._eventsCount;
          else if (typeof we == "function" ? we = se[K] = fe ? [J, we] : [we, J] : fe ? we.unshift(J) : we.push(J), (me = S(P)) > 0 && we.length > me && !we.warned) {
            we.warned = !0;
            var Ne = new Error("Possible EventEmitter memory leak detected. " + we.length + " " + String(K) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            Ne.name = "MaxListenersExceededWarning", Ne.emitter = P, Ne.type = K, Ne.count = we.length, Pe = Ne, console && console.warn && console.warn(Pe);
          }
          return P;
        }
        function O() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function v(P, K, J) {
          var fe = { fired: !1, wrapFn: void 0, target: P, type: K, listener: J }, me = O.bind(fe);
          return me.listener = J, fe.wrapFn = me, me;
        }
        function A(P, K, J) {
          var fe = P._events;
          if (fe === void 0) return [];
          var me = fe[K];
          return me === void 0 ? [] : typeof me == "function" ? J ? [me.listener || me] : [me] : J ? (function(se) {
            for (var we = new Array(se.length), Pe = 0; Pe < we.length; ++Pe) we[Pe] = se[Pe].listener || se[Pe];
            return we;
          })(me) : F(me, me.length);
        }
        function h(P) {
          var K = this._events;
          if (K !== void 0) {
            var J = K[P];
            if (typeof J == "function") return 1;
            if (J !== void 0) return J.length;
          }
          return 0;
        }
        function F(P, K) {
          for (var J = new Array(K), fe = 0; fe < K; ++fe) J[fe] = P[fe];
          return J;
        }
        function f(P, K, J, fe) {
          if (typeof P.on == "function") fe.once ? P.once(K, J) : P.on(K, J);
          else {
            if (typeof P.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof P);
            P.addEventListener(K, function me(se) {
              fe.once && P.removeEventListener(K, me), J(se);
            });
          }
        }
        Object.defineProperty(R, "defaultMaxListeners", { enumerable: !0, get: function() {
          return ke;
        }, set: function(P) {
          if (typeof P != "number" || P < 0 || q(P)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + P + ".");
          ke = P;
        } }), R.init = function() {
          this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, R.prototype.setMaxListeners = function(P) {
          if (typeof P != "number" || P < 0 || q(P)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + P + ".");
          return this._maxListeners = P, this;
        }, R.prototype.getMaxListeners = function() {
          return S(this);
        }, R.prototype.emit = function(P) {
          for (var K = [], J = 1; J < arguments.length; J++) K.push(arguments[J]);
          var fe = P === "error", me = this._events;
          if (me !== void 0) fe = fe && me.error === void 0;
          else if (!fe) return !1;
          if (fe) {
            var se;
            if (K.length > 0 && (se = K[0]), se instanceof Error) throw se;
            var we = new Error("Unhandled error." + (se ? " (" + se.message + ")" : ""));
            throw we.context = se, we;
          }
          var Pe = me[P];
          if (Pe === void 0) return !1;
          if (typeof Pe == "function") oe(Pe, this, K);
          else {
            var Ne = Pe.length, Be = F(Pe, Ne);
            for (J = 0; J < Ne; ++J) oe(Be[J], this, K);
          }
          return !0;
        }, R.prototype.addListener = function(P, K) {
          return x(this, P, K, !1);
        }, R.prototype.on = R.prototype.addListener, R.prototype.prependListener = function(P, K) {
          return x(this, P, K, !0);
        }, R.prototype.once = function(P, K) {
          return y(K), this.on(P, v(this, P, K)), this;
        }, R.prototype.prependOnceListener = function(P, K) {
          return y(K), this.prependListener(P, v(this, P, K)), this;
        }, R.prototype.removeListener = function(P, K) {
          var J, fe, me, se, we;
          if (y(K), (fe = this._events) === void 0) return this;
          if ((J = fe[P]) === void 0) return this;
          if (J === K || J.listener === K) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete fe[P], fe.removeListener && this.emit("removeListener", P, J.listener || K));
          else if (typeof J != "function") {
            for (me = -1, se = J.length - 1; se >= 0; se--) if (J[se] === K || J[se].listener === K) {
              we = J[se].listener, me = se;
              break;
            }
            if (me < 0) return this;
            me === 0 ? J.shift() : (function(Pe, Ne) {
              for (; Ne + 1 < Pe.length; Ne++) Pe[Ne] = Pe[Ne + 1];
              Pe.pop();
            })(J, me), J.length === 1 && (fe[P] = J[0]), fe.removeListener !== void 0 && this.emit("removeListener", P, we || K);
          }
          return this;
        }, R.prototype.off = R.prototype.removeListener, R.prototype.removeAllListeners = function(P) {
          var K, J, fe;
          if ((J = this._events) === void 0) return this;
          if (J.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : J[P] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete J[P]), this;
          if (arguments.length === 0) {
            var me, se = Object.keys(J);
            for (fe = 0; fe < se.length; ++fe) (me = se[fe]) !== "removeListener" && this.removeAllListeners(me);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (typeof (K = J[P]) == "function") this.removeListener(P, K);
          else if (K !== void 0) for (fe = K.length - 1; fe >= 0; fe--) this.removeListener(P, K[fe]);
          return this;
        }, R.prototype.listeners = function(P) {
          return A(this, P, !0);
        }, R.prototype.rawListeners = function(P) {
          return A(this, P, !1);
        }, R.listenerCount = function(P, K) {
          return typeof P.listenerCount == "function" ? P.listenerCount(K) : h.call(P, K);
        }, R.prototype.listenerCount = h, R.prototype.eventNames = function() {
          return this._eventsCount > 0 ? U(this._events) : [];
        };
      }, 94(z) {
        z.exports = function(U) {
          return !(!U || typeof U == "string") && (U instanceof Array || Array.isArray(U) || U.length >= 0 && (U.splice instanceof Function || Object.getOwnPropertyDescriptor(U, U.length - 1) && U.constructor.name !== "String"));
        };
      }, 403(z, U, Y) {
        var oe = Y(94), q = Array.prototype.concat, R = Array.prototype.slice, ke = z.exports = function(y) {
          for (var S = [], x = 0, O = y.length; x < O; x++) {
            var v = y[x];
            oe(v) ? S = q.call(S, R.call(v)) : S.push(v);
          }
          return S;
        };
        ke.wrap = function(y) {
          return function() {
            return y(ke(arguments));
          };
        };
      }, 119(z) {
        z.exports = p;
      } }, E = {};
      function D(z) {
        var U = E[z];
        if (U !== void 0) return U.exports;
        var Y = E[z] = { exports: {} };
        return k[z](Y, Y.exports, D), Y.exports;
      }
      D.n = (z) => {
        var U = z && z.__esModule ? () => z.default : () => z;
        return D.d(U, { a: U }), U;
      }, D.d = (z, U) => {
        for (var Y in U) D.o(U, Y) && !D.o(z, Y) && Object.defineProperty(z, Y, { enumerable: !0, get: U[Y] });
      }, D.o = (z, U) => Object.prototype.hasOwnProperty.call(z, U), D.r = (z) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(z, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(z, "__esModule", { value: !0 });
      };
      var I = {};
      return (() => {
        function z(l) {
          return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
            return typeof a;
          } : function(a) {
            return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
          }, z(l);
        }
        function U(l) {
          var a = (function(s, c) {
            if (z(s) != "object" || !s) return s;
            var g = s[Symbol.toPrimitive];
            if (g !== void 0) {
              var C = g.call(s, c);
              if (z(C) != "object") return C;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (c === "string" ? String : Number)(s);
          })(l, "string");
          return z(a) == "symbol" ? a : a + "";
        }
        function Y(l, a, s) {
          return (a = U(a)) in l ? Object.defineProperty(l, a, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : l[a] = s, l;
        }
        function oe(l, a) {
          var s = Object.keys(l);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(l);
            a && (c = c.filter(function(g) {
              return Object.getOwnPropertyDescriptor(l, g).enumerable;
            })), s.push.apply(s, c);
          }
          return s;
        }
        function q(l) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a] != null ? arguments[a] : {};
            a % 2 ? oe(Object(s), !0).forEach(function(c) {
              Y(l, c, s[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : oe(Object(s)).forEach(function(c) {
              Object.defineProperty(l, c, Object.getOwnPropertyDescriptor(s, c));
            });
          }
          return l;
        }
        function R(l, a) {
          if (!(l instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function ke(l, a) {
          for (var s = 0; s < a.length; s++) {
            var c = a[s];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(l, U(c.key), c);
          }
        }
        function y(l, a, s) {
          return a && ke(l.prototype, a), s && ke(l, s), Object.defineProperty(l, "prototype", { writable: !1 }), l;
        }
        function S(l) {
          return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
          }, S(l);
        }
        function x() {
          try {
            var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch {
          }
          return (x = function() {
            return !!l;
          })();
        }
        function O(l, a) {
          if (a && (z(a) == "object" || typeof a == "function")) return a;
          if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return (function(s) {
            if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s;
          })(l);
        }
        function v(l, a, s) {
          return a = S(a), O(l, x() ? Reflect.construct(a, s || [], S(l).constructor) : a.apply(l, s));
        }
        function A(l, a) {
          return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, c) {
            return s.__proto__ = c, s;
          }, A(l, a);
        }
        function h(l, a) {
          if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
          l.prototype = Object.create(a && a.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), a && A(l, a);
        }
        D.r(I), D.d(I, { default: () => _l });
        var F = D(119), f = D.n(F);
        function P() {
          var l = this.constructor.getDerivedStateFromProps(this.props, this.state);
          l != null && this.setState(l);
        }
        function K(l) {
          this.setState((function(a) {
            var s = this.constructor.getDerivedStateFromProps(l, a);
            return s ?? null;
          }).bind(this));
        }
        function J(l, a) {
          try {
            var s = this.props, c = this.state;
            this.props = l, this.state = a, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(s, c);
          } finally {
            this.props = s, this.state = c;
          }
        }
        function fe(l) {
          var a = l.prototype;
          if (!a || !a.isReactComponent) throw new Error("Can only polyfill class components");
          if (typeof l.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function") return l;
          var s = null, c = null, g = null;
          if (typeof a.componentWillMount == "function" ? s = "componentWillMount" : typeof a.UNSAFE_componentWillMount == "function" && (s = "UNSAFE_componentWillMount"), typeof a.componentWillReceiveProps == "function" ? c = "componentWillReceiveProps" : typeof a.UNSAFE_componentWillReceiveProps == "function" && (c = "UNSAFE_componentWillReceiveProps"), typeof a.componentWillUpdate == "function" ? g = "componentWillUpdate" : typeof a.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), s !== null || c !== null || g !== null) {
            var C = l.displayName || l.name, M = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + C + " uses " + M + " but also contains the following legacy lifecycles:" + (s !== null ? `
  ` + s : "") + (c !== null ? `
  ` + c : "") + (g !== null ? `
  ` + g : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
          }
          if (typeof l.getDerivedStateFromProps == "function" && (a.componentWillMount = P, a.componentWillReceiveProps = K), typeof a.getSnapshotBeforeUpdate == "function") {
            if (typeof a.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
            a.componentWillUpdate = J;
            var _ = a.componentDidUpdate;
            a.componentDidUpdate = function(L, W, G) {
              var te = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : G;
              _.call(this, L, W, te);
            };
          }
          return l;
        }
        function me(l, a) {
          if (l == null) return {};
          var s = {};
          for (var c in l) if ({}.hasOwnProperty.call(l, c)) {
            if (a.indexOf(c) !== -1) continue;
            s[c] = l[c];
          }
          return s;
        }
        function se(l, a) {
          if (l == null) return {};
          var s, c, g = me(l, a);
          if (Object.getOwnPropertySymbols) {
            var C = Object.getOwnPropertySymbols(l);
            for (c = 0; c < C.length; c++) s = C[c], a.indexOf(s) === -1 && {}.propertyIsEnumerable.call(l, s) && (g[s] = l[s]);
          }
          return g;
        }
        function we(l, a) {
          (a == null || a > l.length) && (a = l.length);
          for (var s = 0, c = Array(a); s < a; s++) c[s] = l[s];
          return c;
        }
        function Pe(l, a) {
          if (l) {
            if (typeof l == "string") return we(l, a);
            var s = {}.toString.call(l).slice(8, -1);
            return s === "Object" && l.constructor && (s = l.constructor.name), s === "Map" || s === "Set" ? Array.from(l) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? we(l, a) : void 0;
          }
        }
        function Ne(l) {
          return (function(a) {
            if (Array.isArray(a)) return we(a);
          })(l) || (function(a) {
            if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
          })(l) || Pe(l) || (function() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })();
        }
        function Be(l, a) {
          if (a && l?.constructor === a) return "bigNumber";
          var s = (function(c) {
            return {}.toString.call(c).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
          })(l);
          return s === "number" && (s = isNaN(l) ? "nan" : (0 | l) !== l ? "float" : "integer"), s;
        }
        function qe(l) {
          return l.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\f/g, "\\f");
        }
        P.__suppressDeprecationWarning = !0, K.__suppressDeprecationWarning = !0, J.__suppressDeprecationWarning = !0;
        var re = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = (s.parent_type, s.namespace), g = s.quotesOnKeys, C = s.indentWidth, M = s.theme, _ = s.singleIndent, L = s.showComma, W = s.isLast, G = s.jsvRoot, te = s.name ? s.name : "";
            return f().createElement("div", { className: "variable-row" }, f().createElement("span", Object.assign({}, Z(M, "object-name"), { key: c }, Z(M, "objectKeyVal", { paddingLeft: C * _ })), f().createElement("span", { className: "object-key" }, g && f().createElement("span", { style: { verticalAlign: "top" } }, '"'), f().createElement("span", null, te), g && f().createElement("span", { style: { verticalAlign: "top" } }, '"')), f().createElement("span", Z(M, "colon"), ":")), f().createElement("span", Z(M, "circularReference"), "[CIRCULAR REFERENCE]"), L && !W && !G && f().createElement("span", Z(M, "comma"), ","));
          } }]);
        })(f().PureComponent), be = { scheme: "rjv-default", author: "mac gainor", base00: "rgba(0, 0, 0, 0)", base01: "rgb(245, 245, 245)", base02: "rgb(235, 235, 235)", base03: "#93a1a1", base04: "rgba(0, 0, 0, 0.3)", base05: "#586e75", base06: "#073642", base07: "#002b36", base08: "#d33682", base09: "#cb4b16", base0A: "#dc322f", base0B: "#859900", base0C: "#6c71c4", base0D: "#586e75", base0E: "#2aa198", base0F: "#268bd2" }, le = { scheme: "rjv-grey", author: "mac gainor", base00: "rgba(1, 1, 1, 0)", base01: "rgba(1, 1, 1, 0.1)", base02: "rgba(0, 0, 0, 0.2)", base03: "rgba(1, 1, 1, 0.3)", base04: "rgba(0, 0, 0, 0.4)", base05: "rgba(1, 1, 1, 0.5)", base06: "rgba(1, 1, 1, 0.6)", base07: "rgba(1, 1, 1, 0.7)", base08: "rgba(1, 1, 1, 0.8)", base09: "rgba(1, 1, 1, 0.8)", base0A: "rgba(1, 1, 1, 0.8)", base0B: "rgba(1, 1, 1, 0.8)", base0C: "rgba(1, 1, 1, 0.8)", base0D: "rgba(1, 1, 1, 0.8)", base0E: "rgba(1, 1, 1, 0.8)", base0F: "rgba(1, 1, 1, 0.8)" };
        const b = { globalFontFamily: "monospace", globalCursor: "default", braceFontWeight: "bold", braceCursor: "pointer", ellipsisFontSize: "18px", ellipsisLineHeight: "10px", ellipsisCursor: "pointer", keyMargin: "0px 5px", keyLetterSpacing: "0.5px", keyFontStyle: "none", keyVerticalAlign: "top", keyOpacity: "0.85", keyOpacityHover: "1", keyValPaddingTop: "3px", keyValPaddingBottom: "3px", keyValPaddingRight: "5px", keyValBorderLeft: "1px solid", keyValBorderHover: "2px solid", pushedContentMarginLeft: "6px", variableValuePaddingRight: "6px", nullFontSize: "11px", nullFontWeight: "bold", nullPadding: "1px 2px", nullBorderRadius: "3px", nanFontSize: "11px", nanFontWeight: "bold", nanPadding: "1px 2px", nanBorderRadius: "3px", undefinedFontSize: "11px", undefinedPadding: "1px 2px", undefinedBorderRadius: "3px", dataTypeFontSize: "11px", dataTypeMarginRight: "4px", datatypeOpacity: "0.8", objectSizeBorderRadius: "3px", objectSizeFontStyle: "italic", objectSizeMargin: "0px 6px 0px 0px", clipboardCursor: "pointer", clipboardCheckMarginLeft: "-12px", metaDataPadding: "0px 0px 0px 10px", arrayGroupMetaPadding: "0px 0px 0px 4px", iconContainerWidth: "17px", tooltipPadding: "4px", editInputMinWidth: "130px", editInputBorderRadius: "2px", editInputPadding: "5px", editInputMarginRight: "4px", editInputFontFamily: "monospace", iconCursor: "pointer", iconFontSize: "15px", iconPaddingRight: "1px", dateValueMarginLeft: "2px", iconMarginRight: "3px", detectedRowPaddingTop: "3px", addKeyCoverBackground: "rgba(255, 255, 255, 0.3)", addKeyCoverPosition: "absolute", addKeyCoverPositionPx: "0px", addKeyModalWidth: "200px", addKeyModalMargin: "auto", addKeyModalPadding: "10px", addKeyModalRadius: "3px", commaColor: "#666", commaFontSize: "12px", commaMarginRight: "4px" };
        var H = D(742);
        const Se = function(l) {
          return l;
        }, je = typeof di == "object" && di && di.Object === Object && di;
        var ze = typeof self == "object" && self && self.Object === Object && self;
        const xe = je || ze || Function("return this")(), Te = xe.Symbol;
        var Re = Object.prototype, Ue = Re.hasOwnProperty, St = Re.toString, nn = Te ? Te.toStringTag : void 0;
        const Oa = function(l) {
          var a = Ue.call(l, nn), s = l[nn];
          try {
            l[nn] = void 0;
            var c = !0;
          } catch {
          }
          var g = St.call(l);
          return c && (a ? l[nn] = s : delete l[nn]), g;
        };
        var Lr = Object.prototype.toString;
        const Fo = function(l) {
          return Lr.call(l);
        };
        var Ro = Te ? Te.toStringTag : void 0;
        const Ao = function(l) {
          return l == null ? l === void 0 ? "[object Undefined]" : "[object Null]" : Ro && Ro in Object(l) ? Oa(l) : Fo(l);
        }, rn = function(l) {
          var a = typeof l;
          return l != null && (a == "object" || a == "function");
        }, Ma = function(l) {
          if (!rn(l)) return !1;
          var a = Ao(l);
          return a == "[object Function]" || a == "[object GeneratorFunction]" || a == "[object AsyncFunction]" || a == "[object Proxy]";
        }, or = xe["__core-js_shared__"];
        var zn, vn = (zn = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "")) ? "Symbol(src)_1." + zn : "";
        const Lo = function(l) {
          return !!vn && vn in l;
        };
        var Pa = Function.prototype.toString;
        const Na = function(l) {
          if (l != null) {
            try {
              return Pa.call(l);
            } catch {
            }
            try {
              return l + "";
            } catch {
            }
          }
          return "";
        };
        var za = /^\[object .+?Constructor\]$/, Fa = Function.prototype, Do = Object.prototype, Dr = Fa.toString, Ra = Do.hasOwnProperty, ar = RegExp("^" + Dr.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        const lr = function(l) {
          return !(!rn(l) || Lo(l)) && (Ma(l) ? ar : za).test(Na(l));
        }, bi = function(l, a) {
          return l?.[a];
        }, To = function(l, a) {
          var s = bi(l, a);
          return lr(s) ? s : void 0;
        };
        var Io = To(xe, "WeakMap");
        const Tr = Io && new Io(), Ir = Tr ? function(l, a) {
          return Tr.set(l, a), l;
        } : Se;
        var Br = Object.create;
        const ir = /* @__PURE__ */ (function() {
          function l() {
          }
          return function(a) {
            if (!rn(a)) return {};
            if (Br) return Br(a);
            l.prototype = a;
            var s = new l();
            return l.prototype = void 0, s;
          };
        })(), gn = function(l) {
          return function() {
            var a = arguments;
            switch (a.length) {
              case 0:
                return new l();
              case 1:
                return new l(a[0]);
              case 2:
                return new l(a[0], a[1]);
              case 3:
                return new l(a[0], a[1], a[2]);
              case 4:
                return new l(a[0], a[1], a[2], a[3]);
              case 5:
                return new l(a[0], a[1], a[2], a[3], a[4]);
              case 6:
                return new l(a[0], a[1], a[2], a[3], a[4], a[5]);
              case 7:
                return new l(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            }
            var s = ir(l.prototype), c = l.apply(s, a);
            return rn(c) ? c : s;
          };
        }, Bo = function(l, a, s) {
          var c = 1 & a, g = gn(l);
          return function C() {
            return (this && this !== xe && this instanceof C ? g : l).apply(c ? s : this, arguments);
          };
        }, yn = function(l, a, s) {
          switch (s.length) {
            case 0:
              return l.call(a);
            case 1:
              return l.call(a, s[0]);
            case 2:
              return l.call(a, s[0], s[1]);
            case 3:
              return l.call(a, s[0], s[1], s[2]);
          }
          return l.apply(a, s);
        };
        var Fn = Math.max;
        const Vo = function(l, a, s, c) {
          for (var g = -1, C = l.length, M = s.length, _ = -1, L = a.length, W = Fn(C - M, 0), G = Array(L + W), te = !c; ++_ < L; ) G[_] = a[_];
          for (; ++g < M; ) (te || g < C) && (G[s[g]] = l[g]);
          for (; W--; ) G[_++] = l[g++];
          return G;
        };
        var Aa = Math.max;
        const Uo = function(l, a, s, c) {
          for (var g = -1, C = l.length, M = -1, _ = s.length, L = -1, W = a.length, G = Aa(C - _, 0), te = Array(G + W), de = !c; ++g < G; ) te[g] = l[g];
          for (var ie = g; ++L < W; ) te[ie + L] = a[L];
          for (; ++M < _; ) (de || g < C) && (te[ie + s[M]] = l[g++]);
          return te;
        }, La = function(l, a) {
          for (var s = l.length, c = 0; s--; ) l[s] === a && ++c;
          return c;
        }, Vr = function() {
        };
        function Rn(l) {
          this.__wrapped__ = l, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
        }
        Rn.prototype = ir(Vr.prototype), Rn.prototype.constructor = Rn;
        const Ur = Rn, An = Tr ? function(l) {
          return Tr.get(l);
        } : function() {
        }, Wr = {};
        var sr = Object.prototype.hasOwnProperty;
        const ki = function(l) {
          for (var a = l.name + "", s = Wr[a], c = sr.call(Wr, a) ? s.length : 0; c--; ) {
            var g = s[c], C = g.func;
            if (C == null || C == l) return g.name;
          }
          return a;
        };
        function on(l, a) {
          this.__wrapped__ = l, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = void 0;
        }
        on.prototype = ir(Vr.prototype), on.prototype.constructor = on;
        const Ln = on, qr = Array.isArray, Kr = function(l) {
          return l != null && typeof l == "object";
        }, Da = function(l, a) {
          var s = -1, c = l.length;
          for (a || (a = Array(c)); ++s < c; ) a[s] = l[s];
          return a;
        }, wi = function(l) {
          if (l instanceof Ur) return l.clone();
          var a = new Ln(l.__wrapped__, l.__chain__);
          return a.__actions__ = Da(l.__actions__), a.__index__ = l.__index__, a.__values__ = l.__values__, a;
        };
        var Ei = Object.prototype.hasOwnProperty;
        function Bt(l) {
          if (Kr(l) && !qr(l) && !(l instanceof Ur)) {
            if (l instanceof Ln) return l;
            if (Ei.call(l, "__wrapped__")) return wi(l);
          }
          return new Ln(l);
        }
        Bt.prototype = Vr.prototype, Bt.prototype.constructor = Bt;
        const Ta = Bt, Ia = function(l) {
          var a = ki(l), s = Ta[a];
          if (typeof s != "function" || !(a in Ur.prototype)) return !1;
          if (l === s) return !0;
          var c = An(s);
          return !!c && l === c[0];
        };
        var _i = Date.now;
        const Wo = function(l) {
          var a = 0, s = 0;
          return function() {
            var c = _i(), g = 16 - (c - s);
            if (s = c, g > 0) {
              if (++a >= 800) return arguments[0];
            } else a = 0;
            return l.apply(void 0, arguments);
          };
        }, qo = Wo(Ir);
        var Ba = /\{\n\/\* \[wrapped with (.+)\] \*/, Va = /,? & /;
        const Si = function(l) {
          var a = l.match(Ba);
          return a ? a[1].split(Va) : [];
        };
        var xi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
        const $e = function(l, a) {
          var s = a.length;
          if (!s) return l;
          var c = s - 1;
          return a[c] = (s > 1 ? "& " : "") + a[c], a = a.join(s > 2 ? ", " : " "), l.replace(xi, `{
/* [wrapped with ` + a + `] */
`);
        }, Ci = function(l) {
          return function() {
            return l;
          };
        }, Hr = (function() {
          try {
            var l = To(Object, "defineProperty");
            return l({}, "", {}), l;
          } catch {
          }
        })(), Ua = Wo(Hr ? function(l, a) {
          return Hr(l, "toString", { configurable: !0, enumerable: !1, value: Ci(a), writable: !0 });
        } : Se), $r = function(l, a) {
          for (var s = -1, c = l == null ? 0 : l.length; ++s < c && a(l[s], s, l) !== !1; ) ;
          return l;
        }, ji = function(l, a, s, c) {
          for (var g = l.length, C = s + -1; ++C < g; ) if (a(l[C], C, l)) return C;
          return -1;
        }, Wa = function(l) {
          return l != l;
        }, Qr = function(l, a, s) {
          for (var c = s - 1, g = l.length; ++c < g; ) if (l[c] === a) return c;
          return -1;
        }, Vt = function(l, a, s) {
          return a == a ? Qr(l, a, s) : ji(l, Wa, s);
        }, Oi = function(l, a) {
          return !!(l != null && l.length) && Vt(l, a, 0) > -1;
        };
        var Rt = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]];
        const Mi = function(l, a) {
          return $r(Rt, function(s) {
            var c = "_." + s[0];
            a & s[1] && !Oi(l, c) && l.push(c);
          }), l.sort();
        }, qa = function(l, a, s) {
          var c = a + "";
          return Ua(l, $e(c, Mi(Si(c), s)));
        }, Ka = function(l, a, s, c, g, C, M, _, L, W) {
          var G = 8 & a;
          a |= G ? 32 : 64, 4 & (a &= ~(G ? 64 : 32)) || (a &= -4);
          var te = [l, a, g, G ? C : void 0, G ? M : void 0, G ? void 0 : C, G ? void 0 : M, _, L, W], de = s.apply(void 0, te);
          return Ia(l) && qo(de, te), de.placeholder = c, qa(de, l, a);
        }, ur = function(l) {
          return l.placeholder;
        };
        var Yr = /^(?:0|[1-9]\d*)$/;
        const cr = function(l, a) {
          var s = typeof l;
          return !!(a = a ?? 9007199254740991) && (s == "number" || s != "symbol" && Yr.test(l)) && l > -1 && l % 1 == 0 && l < a;
        };
        var Gr = Math.min;
        const Pi = function(l, a) {
          for (var s = l.length, c = Gr(a.length, s), g = Da(l); c--; ) {
            var C = a[c];
            l[c] = cr(C, s) ? g[C] : void 0;
          }
          return l;
        };
        var Ha = "__lodash_placeholder__";
        const Dn = function(l, a) {
          for (var s = -1, c = l.length, g = 0, C = []; ++s < c; ) {
            var M = l[s];
            M !== a && M !== Ha || (l[s] = Ha, C[g++] = s);
          }
          return C;
        }, Ko = function l(a, s, c, g, C, M, _, L, W, G) {
          var te = 128 & s, de = 1 & s, ie = 2 & s, Oe = 24 & s, Ae = 512 & s, ve = ie ? void 0 : gn(a);
          return function Ce() {
            for (var Le = arguments.length, _e = Array(Le), mt = Le; mt--; ) _e[mt] = arguments[mt];
            if (Oe) var at = ur(Ce), kn = La(_e, at);
            if (g && (_e = Vo(_e, g, C, Oe)), M && (_e = Uo(_e, M, _, Oe)), Le -= kn, Oe && Le < G) {
              var cn = Dn(_e, at);
              return Ka(a, s, l, Ce.placeholder, c, _e, cn, L, W, G - Le);
            }
            var xt = de ? c : this, bt = ie ? xt[a] : a;
            return Le = _e.length, L ? _e = Pi(_e, L) : Ae && Le > 1 && _e.reverse(), te && W < Le && (_e.length = W), this && this !== xe && this instanceof Ce && (bt = ve || gn(bt)), bt.apply(xt, _e);
          };
        }, Ho = function(l, a, s) {
          var c = gn(l);
          return function g() {
            for (var C = arguments.length, M = Array(C), _ = C, L = ur(g); _--; ) M[_] = arguments[_];
            var W = C < 3 && M[0] !== L && M[C - 1] !== L ? [] : Dn(M, L);
            return (C -= W.length) < s ? Ka(l, a, Ko, g.placeholder, void 0, M, W, void 0, void 0, s - C) : yn(this && this !== xe && this instanceof g ? c : l, this, M);
          };
        }, fr = function(l, a, s, c) {
          var g = 1 & a, C = gn(l);
          return function M() {
            for (var _ = -1, L = arguments.length, W = -1, G = c.length, te = Array(G + L), de = this && this !== xe && this instanceof M ? C : l; ++W < G; ) te[W] = c[W];
            for (; L--; ) te[W++] = arguments[++_];
            return yn(de, g ? s : this, te);
          };
        };
        var $a = "__lodash_placeholder__", dr = 128, Ie = Math.min;
        const Qa = function(l, a) {
          var s = l[1], c = a[1], g = s | c, C = g < 131, M = c == dr && s == 8 || c == dr && s == 256 && l[7].length <= a[8] || c == 384 && a[7].length <= a[8] && s == 8;
          if (!C && !M) return l;
          1 & c && (l[2] = a[2], g |= 1 & s ? 0 : 4);
          var _ = a[3];
          if (_) {
            var L = l[3];
            l[3] = L ? Vo(L, _, a[4]) : _, l[4] = L ? Dn(l[3], $a) : a[4];
          }
          return (_ = a[5]) && (L = l[5], l[5] = L ? Uo(L, _, a[6]) : _, l[6] = L ? Dn(l[5], $a) : a[6]), (_ = a[7]) && (l[7] = _), c & dr && (l[8] = l[8] == null ? a[8] : Ie(l[8], a[8])), l[9] == null && (l[9] = a[9]), l[0] = a[0], l[1] = g, l;
        };
        var Ya = /\s/;
        const $o = function(l) {
          for (var a = l.length; a-- && Ya.test(l.charAt(a)); ) ;
          return a;
        };
        var Ga = /^\s+/;
        const Xa = function(l) {
          return l && l.slice(0, $o(l) + 1).replace(Ga, "");
        }, Ja = function(l) {
          return typeof l == "symbol" || Kr(l) && Ao(l) == "[object Symbol]";
        };
        var Qo = /^[-+]0x[0-9a-f]+$/i, Xr = /^0b[01]+$/i, an = /^0o[0-7]+$/i, ln = parseInt;
        const sn = function(l) {
          if (typeof l == "number") return l;
          if (Ja(l)) return NaN;
          if (rn(l)) {
            var a = typeof l.valueOf == "function" ? l.valueOf() : l;
            l = rn(a) ? a + "" : a;
          }
          if (typeof l != "string") return l === 0 ? l : +l;
          l = Xa(l);
          var s = Xr.test(l);
          return s || an.test(l) ? ln(l.slice(2), s ? 2 : 8) : Qo.test(l) ? NaN : +l;
        };
        var pr = 1 / 0;
        const hr = function(l) {
          return l ? (l = sn(l)) === pr || l === -1 / 0 ? 17976931348623157e292 * (l < 0 ? -1 : 1) : l == l ? l : 0 : l === 0 ? l : 0;
        }, Yt = function(l) {
          var a = hr(l), s = a % 1;
          return a == a ? s ? a - s : a : 0;
        };
        var Za = Math.max;
        const el = function(l, a, s, c, g, C, M, _) {
          var L = 2 & a;
          if (!L && typeof l != "function") throw new TypeError("Expected a function");
          var W = c ? c.length : 0;
          if (W || (a &= -97, c = g = void 0), M = M === void 0 ? M : Za(Yt(M), 0), _ = _ === void 0 ? _ : Yt(_), W -= g ? g.length : 0, 64 & a) {
            var G = c, te = g;
            c = g = void 0;
          }
          var de = L ? void 0 : An(l), ie = [l, a, s, c, g, G, te, C, M, _];
          if (de && Qa(ie, de), l = ie[0], a = ie[1], s = ie[2], c = ie[3], g = ie[4], !(_ = ie[9] = ie[9] === void 0 ? L ? 0 : l.length : Za(ie[9] - W, 0)) && 24 & a && (a &= -25), a && a != 1) Oe = a == 8 || a == 16 ? Ho(l, a, _) : a != 32 && a != 33 || g.length ? Ko.apply(void 0, ie) : fr(l, a, s, c);
          else var Oe = Bo(l, a, s);
          return qa((de ? Ir : qo)(Oe, ie), l, a);
        };
        function bn(l, a, s) {
          var c = el(l, 8, void 0, void 0, void 0, void 0, void 0, a = s ? void 0 : a);
          return c.placeholder = bn.placeholder, c;
        }
        bn.placeholder = {};
        const tl = bn, Yo = { threezerotwofour: { scheme: "threezerotwofour", author: "jan t. sott (http://github.com/idleberg)", base00: "#090300", base01: "#3a3432", base02: "#4a4543", base03: "#5c5855", base04: "#807d7c", base05: "#a5a2a2", base06: "#d6d5d4", base07: "#f7f7f7", base08: "#db2d20", base09: "#e8bbd0", base0A: "#fded02", base0B: "#01a252", base0C: "#b5e4f4", base0D: "#01a0e4", base0E: "#a16a94", base0F: "#cdab53" }, apathy: { scheme: "apathy", author: "jannik siebert (https://github.com/janniks)", base00: "#031A16", base01: "#0B342D", base02: "#184E45", base03: "#2B685E", base04: "#5F9C92", base05: "#81B5AC", base06: "#A7CEC8", base07: "#D2E7E4", base08: "#3E9688", base09: "#3E7996", base0A: "#3E4C96", base0B: "#883E96", base0C: "#963E4C", base0D: "#96883E", base0E: "#4C963E", base0F: "#3E965B" }, ashes: { scheme: "ashes", author: "jannik siebert (https://github.com/janniks)", base00: "#1C2023", base01: "#393F45", base02: "#565E65", base03: "#747C84", base04: "#ADB3BA", base05: "#C7CCD1", base06: "#DFE2E5", base07: "#F3F4F5", base08: "#C7AE95", base09: "#C7C795", base0A: "#AEC795", base0B: "#95C7AE", base0C: "#95AEC7", base0D: "#AE95C7", base0E: "#C795AE", base0F: "#C79595" }, atelierDune: { scheme: "atelier dune", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)", base00: "#20201d", base01: "#292824", base02: "#6e6b5e", base03: "#7d7a68", base04: "#999580", base05: "#a6a28c", base06: "#e8e4cf", base07: "#fefbec", base08: "#d73737", base09: "#b65611", base0A: "#cfb017", base0B: "#60ac39", base0C: "#1fad83", base0D: "#6684e1", base0E: "#b854d4", base0F: "#d43552" }, atelierForest: { scheme: "atelier forest", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)", base00: "#1b1918", base01: "#2c2421", base02: "#68615e", base03: "#766e6b", base04: "#9c9491", base05: "#a8a19f", base06: "#e6e2e0", base07: "#f1efee", base08: "#f22c40", base09: "#df5320", base0A: "#d5911a", base0B: "#5ab738", base0C: "#00ad9c", base0D: "#407ee7", base0E: "#6666ea", base0F: "#c33ff3" }, atelierHeath: { scheme: "atelier heath", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)", base00: "#1b181b", base01: "#292329", base02: "#695d69", base03: "#776977", base04: "#9e8f9e", base05: "#ab9bab", base06: "#d8cad8", base07: "#f7f3f7", base08: "#ca402b", base09: "#a65926", base0A: "#bb8a35", base0B: "#379a37", base0C: "#159393", base0D: "#516aec", base0E: "#7b59c0", base0F: "#cc33cc" }, atelierLakeside: { scheme: "atelier lakeside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)", base00: "#161b1d", base01: "#1f292e", base02: "#516d7b", base03: "#5a7b8c", base04: "#7195a8", base05: "#7ea2b4", base06: "#c1e4f6", base07: "#ebf8ff", base08: "#d22d72", base09: "#935c25", base0A: "#8a8a0f", base0B: "#568c3b", base0C: "#2d8f6f", base0D: "#257fad", base0E: "#5d5db1", base0F: "#b72dd2" }, atelierSeaside: { scheme: "atelier seaside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)", base00: "#131513", base01: "#242924", base02: "#5e6e5e", base03: "#687d68", base04: "#809980", base05: "#8ca68c", base06: "#cfe8cf", base07: "#f0fff0", base08: "#e6193c", base09: "#87711d", base0A: "#c3c322", base0B: "#29a329", base0C: "#1999b3", base0D: "#3d62f5", base0E: "#ad2bee", base0F: "#e619c3" }, bespin: { scheme: "bespin", author: "jan t. sott", base00: "#28211c", base01: "#36312e", base02: "#5e5d5c", base03: "#666666", base04: "#797977", base05: "#8a8986", base06: "#9d9b97", base07: "#baae9e", base08: "#cf6a4c", base09: "#cf7d34", base0A: "#f9ee98", base0B: "#54be0d", base0C: "#afc4db", base0D: "#5ea6ea", base0E: "#9b859d", base0F: "#937121" }, brewer: { scheme: "brewer", author: "timothée poisot (http://github.com/tpoisot)", base00: "#0c0d0e", base01: "#2e2f30", base02: "#515253", base03: "#737475", base04: "#959697", base05: "#b7b8b9", base06: "#dadbdc", base07: "#fcfdfe", base08: "#e31a1c", base09: "#e6550d", base0A: "#dca060", base0B: "#31a354", base0C: "#80b1d3", base0D: "#3182bd", base0E: "#756bb1", base0F: "#b15928" }, bright: { scheme: "bright", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#303030", base02: "#505050", base03: "#b0b0b0", base04: "#d0d0d0", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ffffff", base08: "#fb0120", base09: "#fc6d24", base0A: "#fda331", base0B: "#a1c659", base0C: "#76c7b7", base0D: "#6fb3d2", base0E: "#d381c3", base0F: "#be643c" }, chalk: { scheme: "chalk", author: "chris kempson (http://chriskempson.com)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#f5f5f5", base08: "#fb9fb1", base09: "#eda987", base0A: "#ddb26f", base0B: "#acc267", base0C: "#12cfc0", base0D: "#6fc2ef", base0E: "#e1a3ee", base0F: "#deaf8f" }, codeschool: { scheme: "codeschool", author: "brettof86", base00: "#232c31", base01: "#1c3657", base02: "#2a343a", base03: "#3f4944", base04: "#84898c", base05: "#9ea7a6", base06: "#a7cfa3", base07: "#b5d8f6", base08: "#2a5491", base09: "#43820d", base0A: "#a03b1e", base0B: "#237986", base0C: "#b02f30", base0D: "#484d79", base0E: "#c59820", base0F: "#c98344" }, colors: { scheme: "colors", author: "mrmrs (http://clrs.cc)", base00: "#111111", base01: "#333333", base02: "#555555", base03: "#777777", base04: "#999999", base05: "#bbbbbb", base06: "#dddddd", base07: "#ffffff", base08: "#ff4136", base09: "#ff851b", base0A: "#ffdc00", base0B: "#2ecc40", base0C: "#7fdbff", base0D: "#0074d9", base0E: "#b10dc9", base0F: "#85144b" }, default: { scheme: "default", author: "chris kempson (http://chriskempson.com)", base00: "#181818", base01: "#282828", base02: "#383838", base03: "#585858", base04: "#b8b8b8", base05: "#d8d8d8", base06: "#e8e8e8", base07: "#f8f8f8", base08: "#ab4642", base09: "#dc9656", base0A: "#f7ca88", base0B: "#a1b56c", base0C: "#86c1b9", base0D: "#7cafc2", base0E: "#ba8baf", base0F: "#a16946" }, eighties: { scheme: "eighties", author: "chris kempson (http://chriskempson.com)", base00: "#2d2d2d", base01: "#393939", base02: "#515151", base03: "#747369", base04: "#a09f93", base05: "#d3d0c8", base06: "#e8e6df", base07: "#f2f0ec", base08: "#f2777a", base09: "#f99157", base0A: "#ffcc66", base0B: "#99cc99", base0C: "#66cccc", base0D: "#6699cc", base0E: "#cc99cc", base0F: "#d27b53" }, embers: { scheme: "embers", author: "jannik siebert (https://github.com/janniks)", base00: "#16130F", base01: "#2C2620", base02: "#433B32", base03: "#5A5047", base04: "#8A8075", base05: "#A39A90", base06: "#BEB6AE", base07: "#DBD6D1", base08: "#826D57", base09: "#828257", base0A: "#6D8257", base0B: "#57826D", base0C: "#576D82", base0D: "#6D5782", base0E: "#82576D", base0F: "#825757" }, flat: { scheme: "flat", author: "chris kempson (http://chriskempson.com)", base00: "#2C3E50", base01: "#34495E", base02: "#7F8C8D", base03: "#95A5A6", base04: "#BDC3C7", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ECF0F1", base08: "#E74C3C", base09: "#E67E22", base0A: "#F1C40F", base0B: "#2ECC71", base0C: "#1ABC9C", base0D: "#3498DB", base0E: "#9B59B6", base0F: "#be643c" }, google: { scheme: "google", author: "seth wright (http://sethawright.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#CC342B", base09: "#F96A38", base0A: "#FBA922", base0B: "#198844", base0C: "#3971ED", base0D: "#3971ED", base0E: "#A36AC7", base0F: "#3971ED" }, grayscale: { scheme: "grayscale", author: "alexandre gavioli (https://github.com/alexx2/)", base00: "#101010", base01: "#252525", base02: "#464646", base03: "#525252", base04: "#ababab", base05: "#b9b9b9", base06: "#e3e3e3", base07: "#f7f7f7", base08: "#7c7c7c", base09: "#999999", base0A: "#a0a0a0", base0B: "#8e8e8e", base0C: "#868686", base0D: "#686868", base0E: "#747474", base0F: "#5e5e5e" }, greenscreen: { scheme: "green screen", author: "chris kempson (http://chriskempson.com)", base00: "#001100", base01: "#003300", base02: "#005500", base03: "#007700", base04: "#009900", base05: "#00bb00", base06: "#00dd00", base07: "#00ff00", base08: "#007700", base09: "#009900", base0A: "#007700", base0B: "#00bb00", base0C: "#005500", base0D: "#009900", base0E: "#00bb00", base0F: "#005500" }, harmonic: { scheme: "harmonic16", author: "jannik siebert (https://github.com/janniks)", base00: "#0b1c2c", base01: "#223b54", base02: "#405c79", base03: "#627e99", base04: "#aabcce", base05: "#cbd6e2", base06: "#e5ebf1", base07: "#f7f9fb", base08: "#bf8b56", base09: "#bfbf56", base0A: "#8bbf56", base0B: "#56bf8b", base0C: "#568bbf", base0D: "#8b56bf", base0E: "#bf568b", base0F: "#bf5656" }, hopscotch: { scheme: "hopscotch", author: "jan t. sott", base00: "#322931", base01: "#433b42", base02: "#5c545b", base03: "#797379", base04: "#989498", base05: "#b9b5b8", base06: "#d5d3d5", base07: "#ffffff", base08: "#dd464c", base09: "#fd8b19", base0A: "#fdcc59", base0B: "#8fc13e", base0C: "#149b93", base0D: "#1290bf", base0E: "#c85e7c", base0F: "#b33508" }, isotope: { scheme: "isotope", author: "jan t. sott", base00: "#000000", base01: "#404040", base02: "#606060", base03: "#808080", base04: "#c0c0c0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#ff0000", base09: "#ff9900", base0A: "#ff0099", base0B: "#33ff00", base0C: "#00ffff", base0D: "#0066ff", base0E: "#cc00ff", base0F: "#3300ff" }, marrakesh: { scheme: "marrakesh", author: "alexandre gavioli (http://github.com/alexx2/)", base00: "#201602", base01: "#302e00", base02: "#5f5b17", base03: "#6c6823", base04: "#86813b", base05: "#948e48", base06: "#ccc37a", base07: "#faf0a5", base08: "#c35359", base09: "#b36144", base0A: "#a88339", base0B: "#18974e", base0C: "#75a738", base0D: "#477ca1", base0E: "#8868b3", base0F: "#b3588e" }, mocha: { scheme: "mocha", author: "chris kempson (http://chriskempson.com)", base00: "#3B3228", base01: "#534636", base02: "#645240", base03: "#7e705a", base04: "#b8afad", base05: "#d0c8c6", base06: "#e9e1dd", base07: "#f5eeeb", base08: "#cb6077", base09: "#d28b71", base0A: "#f4bc87", base0B: "#beb55b", base0C: "#7bbda4", base0D: "#8ab3b5", base0E: "#a89bb9", base0F: "#bb9584" }, monokai: { scheme: "monokai", author: "wimer hazenberg (http://www.monokai.nl)", base00: "#272822", base01: "#383830", base02: "#49483e", base03: "#75715e", base04: "#a59f85", base05: "#f8f8f2", base06: "#f5f4f1", base07: "#f9f8f5", base08: "#f92672", base09: "#fd971f", base0A: "#f4bf75", base0B: "#a6e22e", base0C: "#a1efe4", base0D: "#66d9ef", base0E: "#ae81ff", base0F: "#cc6633" }, nicinabox: { scheme: "nicinabox", author: "nicinabox (http://github.com/nicinabox)", base00: "#2A2F3A", base01: "#3C444F", base02: "#4F5A65", base03: "#BEBEBE", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#FFFFFF", base07: "#f5f5f5", base08: "#fb9fb1", base09: "#FC6D24", base0A: "#ddb26f", base0B: "#A1C659", base0C: "#12cfc0", base0D: "#6FB3D2", base0E: "#D381C3", base0F: "#deaf8f" }, ocean: { scheme: "ocean", author: "chris kempson (http://chriskempson.com)", base00: "#2b303b", base01: "#343d46", base02: "#4f5b66", base03: "#65737e", base04: "#a7adba", base05: "#c0c5ce", base06: "#dfe1e8", base07: "#eff1f5", base08: "#bf616a", base09: "#d08770", base0A: "#ebcb8b", base0B: "#a3be8c", base0C: "#96b5b4", base0D: "#8fa1b3", base0E: "#b48ead", base0F: "#ab7967" }, paraiso: { scheme: "paraiso", author: "jan t. sott", base00: "#2f1e2e", base01: "#41323f", base02: "#4f424c", base03: "#776e71", base04: "#8d8687", base05: "#a39e9b", base06: "#b9b6b0", base07: "#e7e9db", base08: "#ef6155", base09: "#f99b15", base0A: "#fec418", base0B: "#48b685", base0C: "#5bc4bf", base0D: "#06b6ef", base0E: "#815ba4", base0F: "#e96ba8" }, pop: { scheme: "pop", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#eb008a", base09: "#f29333", base0A: "#f8ca12", base0B: "#37b349", base0C: "#00aabb", base0D: "#0e5a94", base0E: "#b31e8d", base0F: "#7a2d00" }, railscasts: { scheme: "railscasts", author: "ryan bates (http://railscasts.com)", base00: "#2b2b2b", base01: "#272935", base02: "#3a4055", base03: "#5a647e", base04: "#d4cfc9", base05: "#e6e1dc", base06: "#f4f1ed", base07: "#f9f7f3", base08: "#da4939", base09: "#cc7833", base0A: "#ffc66d", base0B: "#a5c261", base0C: "#519f50", base0D: "#6d9cbe", base0E: "#b6b3eb", base0F: "#bc9458" }, shapeshifter: { scheme: "shapeshifter", author: "tyler benziger (http://tybenz.com)", base00: "#000000", base01: "#040404", base02: "#102015", base03: "#343434", base04: "#555555", base05: "#ababab", base06: "#e0e0e0", base07: "#f9f9f9", base08: "#e92f2f", base09: "#e09448", base0A: "#dddd13", base0B: "#0ed839", base0C: "#23edda", base0D: "#3b48e3", base0E: "#f996e2", base0F: "#69542d" }, solarized: { scheme: "solarized", author: "ethan schoonover (http://ethanschoonover.com/solarized)", base00: "#002b36", base01: "#073642", base02: "#586e75", base03: "#657b83", base04: "#839496", base05: "#93a1a1", base06: "#eee8d5", base07: "#fdf6e3", base08: "#dc322f", base09: "#cb4b16", base0A: "#b58900", base0B: "#859900", base0C: "#2aa198", base0D: "#268bd2", base0E: "#6c71c4", base0F: "#d33682" }, summerfruit: { scheme: "summerfruit", author: "christopher corley (http://cscorley.github.io/)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#B0B0B0", base05: "#D0D0D0", base06: "#E0E0E0", base07: "#FFFFFF", base08: "#FF0086", base09: "#FD8900", base0A: "#ABA800", base0B: "#00C918", base0C: "#1faaaa", base0D: "#3777E6", base0E: "#AD00A1", base0F: "#cc6633" }, tomorrow: { scheme: "tomorrow", author: "chris kempson (http://chriskempson.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#cc6666", base09: "#de935f", base0A: "#f0c674", base0B: "#b5bd68", base0C: "#8abeb7", base0D: "#81a2be", base0E: "#b294bb", base0F: "#a3685a" }, tube: { scheme: "london tube", author: "jan t. sott", base00: "#231f20", base01: "#1c3f95", base02: "#5a5758", base03: "#737171", base04: "#959ca1", base05: "#d9d8d8", base06: "#e7e7e8", base07: "#ffffff", base08: "#ee2e24", base09: "#f386a1", base0A: "#ffd204", base0B: "#00853e", base0C: "#85cebc", base0D: "#009ddc", base0E: "#98005d", base0F: "#b06110" }, twilight: { scheme: "twilight", author: "david hart (http://hart-dev.com)", base00: "#1e1e1e", base01: "#323537", base02: "#464b50", base03: "#5f5a60", base04: "#838184", base05: "#a7a7a7", base06: "#c3c3c3", base07: "#ffffff", base08: "#cf6a4c", base09: "#cda869", base0A: "#f9ee98", base0B: "#8f9d6a", base0C: "#afc4db", base0D: "#7587a6", base0E: "#9b859d", base0F: "#9b703f" } }, mr = Yo.default, Go = Object.keys(mr), Ni = (l) => {
          const a = H(l), [s, c, g] = (function(_) {
            const L = _[0] / 255, W = _[1] / 255, G = _[2] / 255;
            return [0.299 * L + 0.587 * W + 0.114 * G, -0.14713 * L + -0.28886 * W + 0.436 * G, 0.615 * L + -0.51499 * W + -0.10001 * G];
          })(a.array());
          var C;
          const M = (function(_) {
            const L = _[0], W = _[1], G = _[2];
            let te, de, ie;
            return te = 1 * L + 0 * W + 1.13983 * G, de = 1 * L + -0.39465 * W + -0.5806 * G, ie = 1 * L + 2.02311 * W + 0 * G, te = Math.min(Math.max(0, te), 1), de = Math.min(Math.max(0, de), 1), ie = Math.min(Math.max(0, ie), 1), [255 * te, 255 * de, 255 * ie];
          })([(C = s, C < 0.25 ? 1 : C < 0.5 ? 0.9 - C : 1.1 - C), c, g]);
          return H.rgb(M).hex();
        }, Ut = (l) => (a) => ({ className: [a.className, l.className].filter(Boolean).join(" "), style: { ...a.style || {}, ...l.style || {} } }), vr = (l, a) => {
          const s = Object.keys(a);
          for (const c in l) s.indexOf(c) === -1 && s.push(c);
          return s.reduce((c, g) => (c[g] = ((C, M) => {
            if (C === void 0) return M;
            if (M === void 0) return C;
            const _ = typeof M;
            switch (typeof C) {
              case "string":
                switch (_) {
                  case "string":
                    return [M, C].filter(Boolean).join(" ");
                  case "object":
                    return Ut({ className: C, style: M });
                  case "function":
                    return (L, ...W) => Ut({ className: C })(M(L, ...W));
                }
                break;
              case "object":
                switch (_) {
                  case "string":
                    return Ut({ className: M, style: C });
                  case "object":
                    return { ...M, ...C };
                  case "function":
                    return (L, ...W) => Ut({ style: C })(M(L, ...W));
                }
                break;
              case "function":
                switch (_) {
                  case "string":
                    return (L, ...W) => C(Ut(L)({ className: M }), ...W);
                  case "object":
                    return (L, ...W) => C(Ut(L)({ style: M }), ...W);
                  case "function":
                    return (L, ...W) => C(M(L, ...W), ...W);
                }
            }
          })(l[g], a[g]), c), {});
        }, Tn = (l, a, ...s) => {
          if (a === null) return l;
          Array.isArray(a) || (a = [a]);
          const c = a.map((g) => l[g]).filter(Boolean).reduce((g, C) => (typeof C == "string" ? g.className = [g.className, C].filter(Boolean).join(" ") : typeof C == "object" ? g.style = { ...g.style, ...C } : typeof C == "function" && (g = { ...g, ...C(g, ...s) }), g), { className: "", style: {} });
          return c.className || delete c.className, Object.keys(c.style).length === 0 && delete c.style, c;
        }, Jr = (l) => Object.keys(l).reduce((a, s) => (a[s] = /^base/.test(s) ? Ni(l[s]) : s === "scheme" ? l[s] + ":inverted" : l[s], a), {}), zi = tl((l, a = {}, s = {}, ...c) => {
          const { defaultBase16: g = mr, base16Themes: C = null } = a, M = Xo(s, C);
          M && (s = { ...M, ...s });
          const _ = Go.reduce((te, de) => (te[de] = s[de] || g[de], te), {}), L = Object.keys(s).reduce((te, de) => (Go.indexOf(de) === -1 && (te[de] = s[de]), te), {}), W = l(_), G = vr(L, W);
          return tl(Tn, 2)(G, ...c);
        }, 3), Fi = (l) => !!l.extend, Xo = (l, a) => {
          if (l && Fi(l) && l.extend && (l = l.extend), typeof l == "string") {
            const [s, c] = l.split(":");
            l = a ? a[s] : Yo[s], c === "inverted" && (l = Jr(l));
          }
          return l && Object.prototype.hasOwnProperty.call(l, "base00") ? l : void 0;
        };
        var Zr = function(l) {
          var a = (function(s) {
            return { backgroundColor: s.base00, ellipsisColor: s.base09, braceColor: s.base07, expandedIcon: s.base0D, collapsedIcon: s.base0E, keyColor: s.base07, arrayKeyColor: s.base0C, objectSize: s.base04, copyToClipboard: s.base0F, copyToClipboardCheck: s.base0D, objectBorder: s.base02, dataTypes: { boolean: s.base0E, date: s.base0D, float: s.base0B, function: s.base0D, integer: s.base0F, string: s.base09, nan: s.base08, null: s.base0A, undefined: s.base05, regexp: s.base0A, background: s.base02, bigNumber: s.base09 }, editVariable: { editIcon: s.base0E, cancelIcon: s.base09, removeIcon: s.base09, addIcon: s.base0E, checkIcon: s.base0E, background: s.base01, color: s.base0A, border: s.base07 }, addKeyModal: { background: s.base05, border: s.base04, color: s.base0A, labelColor: s.base01 }, validationFailure: { background: s.base09, iconColor: s.base01, fontColor: s.base01 } };
          })(l);
          return { "app-container": { fontFamily: b.globalFontFamily, cursor: b.globalCursor, backgroundColor: a.backgroundColor, position: "relative" }, ellipsis: { display: "inline-block", color: a.ellipsisColor, fontSize: b.ellipsisFontSize, lineHeight: b.ellipsisLineHeight, cursor: b.ellipsisCursor }, "brace-row": { display: "inline-block", cursor: "pointer" }, brace: { display: "inline-block", cursor: b.braceCursor, fontWeight: b.braceFontWeight, color: a.braceColor }, "expanded-icon": { color: a.expandedIcon }, "collapsed-icon": { color: a.collapsedIcon }, colon: { display: "inline-block", margin: b.keyMargin, color: a.keyColor, verticalAlign: "top" }, objectKeyVal: function(s, c) {
            return { style: q({ paddingTop: b.keyValPaddingTop, paddingRight: b.keyValPaddingRight, paddingBottom: b.keyValPaddingBottom, borderLeft: b.keyValBorderLeft + " " + a.objectBorder, ":hover": { paddingLeft: c.paddingLeft - 1 + "px", borderLeft: b.keyValBorderHover + " " + a.objectBorder } }, c) };
          }, "object-key-val-no-border": { padding: b.keyValPadding }, "pushed-content": { marginLeft: b.pushedContentMarginLeft }, variableValue: function(s, c) {
            return { style: q({ display: "inline-block", paddingRight: b.variableValuePaddingRight, position: "relative" }, c) };
          }, "object-name": { display: "inline-block", color: a.keyColor, letterSpacing: b.keyLetterSpacing, fontStyle: b.keyFontStyle, verticalAlign: b.keyVerticalAlign, opacity: b.keyOpacity, ":hover": { opacity: b.keyOpacityHover } }, "array-key": { display: "inline-block", color: a.arrayKeyColor, letterSpacing: b.keyLetterSpacing, fontStyle: b.keyFontStyle, verticalAlign: b.keyVerticalAlign, opacity: b.keyOpacity, ":hover": { opacity: b.keyOpacityHover } }, "object-size": { color: a.objectSize, borderRadius: b.objectSizeBorderRadius, fontStyle: b.objectSizeFontStyle, margin: b.objectSizeMargin, cursor: "default" }, "data-type-label": { fontSize: b.dataTypeFontSize, marginRight: b.dataTypeMarginRight, opacity: b.datatypeOpacity }, boolean: { display: "inline-block", color: a.dataTypes.boolean }, date: { display: "inline-block", color: a.dataTypes.date }, "date-value": { marginLeft: b.dateValueMarginLeft }, float: { display: "inline-block", color: a.dataTypes.float }, function: { display: "inline-block", color: a.dataTypes.function, cursor: "pointer", whiteSpace: "pre-line" }, "function-value": { fontStyle: "italic" }, integer: { display: "inline-block", color: a.dataTypes.integer }, bigNumber: { display: "inline-block", color: a.dataTypes.bigNumber }, string: { display: "inline-block", color: a.dataTypes.string }, nan: { display: "inline-block", color: a.dataTypes.nan, fontSize: b.nanFontSize, fontWeight: b.nanFontWeight, backgroundColor: a.dataTypes.background, padding: b.nanPadding, borderRadius: b.nanBorderRadius }, null: { display: "inline-block", color: a.dataTypes.null, fontSize: b.nullFontSize, fontWeight: b.nullFontWeight, backgroundColor: a.dataTypes.background, padding: b.nullPadding, borderRadius: b.nullBorderRadius }, undefined: { display: "inline-block", color: a.dataTypes.undefined, fontSize: b.undefinedFontSize, padding: b.undefinedPadding, borderRadius: b.undefinedBorderRadius, backgroundColor: a.dataTypes.background }, circularReference: { display: "inline-block", color: a.dataTypes.null, fontSize: b.nullFontSize, fontWeight: b.nullFontWeight, backgroundColor: a.dataTypes.background, padding: b.nullPadding, borderRadius: b.nullBorderRadius }, regexp: { display: "inline-block", color: a.dataTypes.regexp }, "copy-to-clipboard": { cursor: b.clipboardCursor }, "copy-icon": { color: a.copyToClipboard, fontSize: b.iconFontSize, marginRight: b.iconMarginRight, verticalAlign: "top" }, "copy-icon-copied": { color: a.copyToClipboardCheck, marginLeft: b.clipboardCheckMarginLeft }, "array-group-meta-data": { display: "inline-block", padding: b.arrayGroupMetaPadding }, "object-meta-data": { display: "inline-block", padding: b.metaDataPadding }, "icon-container": { display: "inline-block", width: b.iconContainerWidth }, tooltip: { padding: b.tooltipPadding }, removeVarIcon: { verticalAlign: "top", display: "inline-block", color: a.editVariable.removeIcon, cursor: b.iconCursor, fontSize: b.iconFontSize, marginRight: b.iconMarginRight }, addVarIcon: { verticalAlign: "top", display: "inline-block", color: a.editVariable.addIcon, cursor: b.iconCursor, fontSize: b.iconFontSize, marginRight: b.iconMarginRight }, editVarIcon: { verticalAlign: "top", display: "inline-block", color: a.editVariable.editIcon, cursor: b.iconCursor, fontSize: b.iconFontSize, marginRight: b.iconMarginRight }, "edit-icon-container": { display: "inline-block", verticalAlign: "top" }, "check-icon": { display: "inline-block", cursor: b.iconCursor, color: a.editVariable.checkIcon, fontSize: b.iconFontSize, paddingRight: b.iconPaddingRight }, "cancel-icon": { display: "inline-block", cursor: b.iconCursor, color: a.editVariable.cancelIcon, fontSize: b.iconFontSize, paddingRight: b.iconPaddingRight }, "edit-input": { display: "inline-block", minWidth: b.editInputMinWidth, borderRadius: b.editInputBorderRadius, backgroundColor: a.editVariable.background, color: a.editVariable.color, padding: b.editInputPadding, marginRight: b.editInputMarginRight, fontFamily: b.editInputFontFamily }, "detected-row": { paddingTop: b.detectedRowPaddingTop }, "key-modal-request": { position: b.addKeyCoverPosition, top: b.addKeyCoverPositionPx, left: b.addKeyCoverPositionPx, right: b.addKeyCoverPositionPx, bottom: b.addKeyCoverPositionPx, backgroundColor: b.addKeyCoverBackground }, "key-modal": { width: b.addKeyModalWidth, backgroundColor: a.addKeyModal.background, marginLeft: b.addKeyModalMargin, marginRight: b.addKeyModalMargin, padding: b.addKeyModalPadding, borderRadius: b.addKeyModalRadius, marginTop: "15px", position: "relative" }, "key-modal-label": { color: a.addKeyModal.labelColor, marginLeft: "2px", marginBottom: "5px", fontSize: "11px" }, "key-modal-input-container": { overflow: "hidden" }, "key-modal-input": { width: "100%", padding: "3px 6px", fontFamily: "monospace", color: a.addKeyModal.color, border: "none", boxSizing: "border-box", borderRadius: "2px" }, "key-modal-cancel": { backgroundColor: a.editVariable.removeIcon, position: "absolute", top: "0px", right: "0px", borderRadius: "0px 3px 0px 3px", cursor: "pointer" }, "key-modal-cancel-icon": { color: a.addKeyModal.labelColor, fontSize: b.iconFontSize, transform: "rotate(45deg)" }, "key-modal-submit": { color: a.editVariable.addIcon, fontSize: b.iconFontSize, position: "absolute", right: "2px", top: "3px", cursor: "pointer" }, "function-ellipsis": { display: "inline-block", color: a.ellipsisColor, fontSize: b.ellipsisFontSize, lineHeight: b.ellipsisLineHeight, cursor: b.ellipsisCursor }, "validation-failure": { float: "right", padding: "3px 6px", borderRadius: "2px", cursor: "pointer", color: a.validationFailure.fontColor, backgroundColor: a.validationFailure.background }, "validation-failure-label": { marginRight: "6px" }, "validation-failure-clear": { position: "relative", verticalAlign: "top", cursor: "pointer", color: a.validationFailure.iconColor, fontSize: b.iconFontSize, transform: "rotate(45deg)" }, comma: { display: "inline-block", color: b.commaColor, fontSize: b.commaFontSize, marginRight: b.commaMarginRight, cursor: "default" } };
        }, Jo = function(l) {
          var a = be;
          return l !== !1 && l !== "none" || (a = le), zi(Zr, { defaultBase16: a })(l);
        };
        function Z(l, a, s) {
          return l || console.error("theme has not been set"), Jo(l)(a, s);
        }
        var ft = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.typeName, g = s.displayDataTypes, C = s.theme;
            return g ? f().createElement("span", Object.assign({ className: "data-type-label" }, Z(C, "data-type-label")), c) : null;
          } }]);
        })(f().PureComponent), eo = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "boolean"), f().createElement(ft, Object.assign({ typeName: "bool" }, s)), s.value ? "true" : "false");
          } }]);
        })(f().PureComponent), gr = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "date"), f().createElement(ft, Object.assign({ typeName: "date" }, s)), f().createElement("span", Object.assign({ className: "date-value" }, Z(s.theme, "date-value")), s.value.toLocaleTimeString("en-us", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })));
          } }]);
        })(f().PureComponent), Zo = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "float"), f().createElement(ft, Object.assign({ typeName: "float" }, s)), this.props.value);
          } }]);
        })(f().PureComponent), to = D(784), no = (function() {
          return y(function l() {
            R(this, l), this.handler = function() {
            };
          }, [{ key: "register", value: function(l) {
            this.handler = l;
          } }, { key: "dispatch", value: function(l) {
            var a;
            (a = this.handler) === null || a === void 0 || a.call(this, l);
          } }]);
        })();
        globalThis.__globalDispatcherInstance || (globalThis.__globalDispatcherInstance = new no());
        const At = globalThis.__globalDispatcherInstance;
        var dt = "updated_src", un = new ((function(l) {
          function a() {
            var s;
            R(this, a);
            for (var c = arguments.length, g = new Array(c), C = 0; C < c; C++) g[C] = arguments[C];
            return (s = v(this, a, [].concat(g))).objects = {}, s.set = function(M, _, L, W) {
              s.objects[M] === void 0 && (s.objects[M] = {}), s.objects[M][_] === void 0 && (s.objects[M][_] = {}), s.objects[M][_][L] = W;
            }, s.get = function(M, _, L, W) {
              return s.objects[M] === void 0 || s.objects[M][_] === void 0 || s.objects[M][_][L] === void 0 ? W : s.objects[M][_][L];
            }, s.handleAction = function(M) {
              var _ = M.rjvId, L = M.data;
              switch (M.name) {
                case "RESET":
                  s.emit("reset-" + _);
                  break;
                case "VARIABLE_UPDATED":
                  M.data[dt] = s.updateSrc(_, L), s.set(_, "action", "variable-update", q(q({}, L), {}, { type: "variable-edited" })), s.emit("variable-update-" + _);
                  break;
                case "VARIABLE_REMOVED":
                  M.data[dt] = s.updateSrc(_, L), s.set(_, "action", "variable-update", q(q({}, L), {}, { type: "variable-removed" })), s.emit("variable-update-" + _);
                  break;
                case "VARIABLE_ADDED":
                  M.data[dt] = s.updateSrc(_, L), s.set(_, "action", "variable-update", q(q({}, L), {}, { type: "variable-added" })), s.emit("variable-update-" + _);
                  break;
                case "ADD_VARIABLE_KEY_REQUEST":
                  s.set(_, "action", "new-key-request", L), s.emit("add-key-request-" + _);
              }
            }, s.updateSrc = function(M, _) {
              var L = _.name, W = _.namespace, G = _.new_value, te = _.variable_removed;
              W.shift();
              var de, ie = s.get(M, "global", "src"), Oe = s.deepCopy(ie, Ne(W)), Ae = Oe, ve = (function(Ce, Le) {
                var _e = typeof Symbol < "u" && Ce[Symbol.iterator] || Ce["@@iterator"];
                if (!_e) {
                  if (Array.isArray(Ce) || (_e = Pe(Ce)) || Le) {
                    _e && (Ce = _e);
                    var mt = 0, at = function() {
                    };
                    return { s: at, n: function() {
                      return mt >= Ce.length ? { done: !0 } : { done: !1, value: Ce[mt++] };
                    }, e: function(bt) {
                      throw bt;
                    }, f: at };
                  }
                  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                }
                var kn, cn = !0, xt = !1;
                return { s: function() {
                  _e = _e.call(Ce);
                }, n: function() {
                  var bt = _e.next();
                  return cn = bt.done, bt;
                }, e: function(bt) {
                  xt = !0, kn = bt;
                }, f: function() {
                  try {
                    cn || _e.return == null || _e.return();
                  } finally {
                    if (xt) throw kn;
                  }
                } };
              })(W);
              try {
                for (ve.s(); !(de = ve.n()).done; )
                  Ae = Ae[de.value];
              } catch (Ce) {
                ve.e(Ce);
              } finally {
                ve.f();
              }
              return te ? Be(Ae) === "array" ? Ae.splice(L, 1) : delete Ae[L] : L !== null ? Ae[L] = G : Oe = G, s.set(M, "global", "src", Oe), Oe;
            }, s.deepCopy = function(M, _) {
              var L, W = Be(M), G = _.shift();
              return W === "array" ? L = Ne(M) : W === "object" && (L = q({}, M)), G !== void 0 && (L[G] = s.deepCopy(M[G], _)), L;
            }, s;
          }
          return h(a, l), y(a);
        })(to.EventEmitter))();
        At.register(un.handleAction.bind(un));
        const ot = un;
        var In = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).handleToggleCollapsed = function() {
              c.setState({ collapsed: !c.state.collapsed }, function() {
                ot.set(c.props.rjvId, c.props.namespace, "collapsed", c.state.collapsed);
              });
            }, c.getFunctionDisplay = function(g) {
              var C = c.props;
              return g ? f().createElement("span", null, c.props.value.toString().slice(9, -1).replace(/\{[\s\S]+/, ""), f().createElement("span", { className: "function-collapsed", style: { fontWeight: "bold" } }, f().createElement("span", null, "{"), f().createElement("span", Z(C.theme, "ellipsis"), "..."), f().createElement("span", null, "}"))) : c.props.value.toString().slice(9, -1);
            }, c.state = { collapsed: ot.get(s.rjvId, s.namespace, "collapsed", !0) }, c;
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = this.state.collapsed;
            return f().createElement("div", Z(s.theme, "function"), f().createElement(ft, Object.assign({ typeName: "function" }, s)), f().createElement("span", Object.assign({}, Z(s.theme, "function-value"), { className: "rjv-function-container", onClick: this.handleToggleCollapsed }), this.getFunctionDisplay(c)));
          } }]);
        })(f().PureComponent), nl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            return f().createElement("div", Z(this.props.theme, "nan"), "NaN");
          } }]);
        })(f().PureComponent), ro = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            return f().createElement("div", Z(this.props.theme, "null"), "NULL");
          } }]);
        })(f().PureComponent), oo = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "integer"), f().createElement(ft, Object.assign({ typeName: "int" }, s)), this.props.value);
          } }]);
        })(f().PureComponent), yr = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "regexp"), f().createElement(ft, Object.assign({ typeName: "regexp" }, s)), this.props.value.toString());
          } }]);
        })(f().PureComponent), br = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).handleToggleCollapsed = function() {
              c.setState({ collapsed: !c.state.collapsed }, function() {
                ot.set(c.props.rjvId, c.props.namespace, "collapsed", c.state.collapsed);
              });
            }, c.state = { collapsed: ot.get(s.rjvId, s.namespace, "collapsed", !0) }, c;
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.state.collapsed, c = this.props, g = c.collapseStringsAfterLength, C = c.theme, M = c.escapeStrings, _ = c.value, L = Be(g) === "integer", W = { style: { cursor: "default", wordBreak: "break-all" } };
            return M && (_ = qe(_)), L && _.length > g && (W.style.cursor = "pointer", s && (_ = f().createElement("span", null, _.substring(0, g), f().createElement("span", Z(C, "ellipsis"), " ...")))), f().createElement("div", Z(C, "string"), f().createElement(ft, Object.assign({ typeName: "string" }, c)), f().createElement("span", Object.assign({ className: "string-value" }, W, { onClick: this.handleToggleCollapsed }), '"', _, '"'));
          } }]);
        })(f().PureComponent), ea = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            return f().createElement("div", Z(this.props.theme, "undefined"), "undefined");
          } }]);
        })(f().PureComponent), rl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props;
            return f().createElement("div", Z(s.theme, "bigNumber"), f().createElement(ft, Object.assign({ typeName: "bigNumber" }, s)), this.props.value.toString());
          } }]);
        })(f().PureComponent);
        function ta() {
          return ta = Object.assign ? Object.assign.bind() : function(l) {
            for (var a = 1; a < arguments.length; a++) {
              var s = arguments[a];
              for (var c in s) ({}).hasOwnProperty.call(s, c) && (l[c] = s[c]);
            }
            return l;
          }, ta.apply(null, arguments);
        }
        var Ri = F.useLayoutEffect, ao = function(l, a) {
          typeof l != "function" ? l.current = a : l(a);
        }, ol = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0", display: "block" }, al = function(l) {
          Object.keys(ol).forEach(function(a) {
            l.style.setProperty(a, ol[a], "important");
          });
        }, yt = null, ll = function(l, a) {
          var s = l.scrollHeight;
          return a.sizingStyle.boxSizing === "border-box" ? s + a.borderSize : s - a.paddingSize;
        }, il = function() {
        }, sl = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak", "wordSpacing", "scrollbarGutter"], Ai = !!document.documentElement.currentStyle, Li = function(l) {
          var a = window.getComputedStyle(l);
          if (a === null) return null;
          var s, c = (s = a, sl.reduce(function(C, M) {
            return C[M] = s[M], C;
          }, {})), g = c.boxSizing;
          return g === "" ? null : (Ai && g === "border-box" && (c.width = parseFloat(c.width) + parseFloat(c.borderRightWidth) + parseFloat(c.borderLeftWidth) + parseFloat(c.paddingRight) + parseFloat(c.paddingLeft) + "px"), { sizingStyle: c, paddingSize: parseFloat(c.paddingBottom) + parseFloat(c.paddingTop), borderSize: parseFloat(c.borderBottomWidth) + parseFloat(c.borderTopWidth) });
        };
        function na(l, a, s) {
          var c, g, C = (c = s, g = f().useRef(c), Ri(function() {
            g.current = c;
          }), g);
          F.useLayoutEffect(function() {
            var M = function(_) {
              return C.current(_);
            };
            if (l) return l.addEventListener(a, M), function() {
              return l.removeEventListener(a, M);
            };
          }, []);
        }
        var Di = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], ra = function(l, a) {
          var s = l.cacheMeasurements, c = l.maxRows, g = l.minRows, C = l.onChange, M = C === void 0 ? il : C, _ = l.onHeightChange, L = _ === void 0 ? il : _, W = me(l, Di), G = W.value !== void 0, te = F.useRef(null), de = (function(ve, Ce) {
            var Le = f().useRef();
            return f().useCallback(function(_e) {
              ve.current = _e, Le.current && ao(Le.current, null), Le.current = Ce, Ce && ao(Ce, _e);
            }, [Ce]);
          })(te, a), ie = F.useRef(0), Oe = F.useRef(), Ae = function() {
            var ve = te.current, Ce = s && Oe.current ? Oe.current : Li(ve);
            if (Ce) {
              Oe.current = Ce;
              var Le = (function(at, kn, cn, xt) {
                cn === void 0 && (cn = 1), xt === void 0 && (xt = 1 / 0), yt || ((yt = document.createElement("textarea")).setAttribute("tabindex", "-1"), yt.setAttribute("aria-hidden", "true"), al(yt)), yt.parentNode === null && document.body.appendChild(yt);
                var bt = at.paddingSize, ua = at.borderSize, fo = at.sizingStyle, Ve = fo.boxSizing;
                Object.keys(fo).forEach(function(ca) {
                  var Wn = ca;
                  yt.style[Wn] = fo[Wn];
                }), al(yt), yt.value = kn;
                var wn = ll(yt, at);
                yt.value = kn, wn = ll(yt, at), yt.value = "x";
                var Un = yt.scrollHeight - bt, En = Un * cn;
                Ve === "border-box" && (En = En + bt + ua), wn = Math.max(En, wn);
                var po = Un * xt;
                return Ve === "border-box" && (po = po + bt + ua), [wn = Math.min(po, wn), Un];
              })(Ce, ve.value || ve.placeholder || "x", g, c), _e = Le[0], mt = Le[1];
              ie.current !== _e && (ie.current = _e, ve.style.setProperty("height", _e + "px", "important"), L(_e, { rowHeight: mt }));
            }
          };
          return F.useLayoutEffect(Ae), (function(ve, Ce) {
            na(document.body, "reset", function(Le) {
              ve.current.form === Le.target && Ce(Le);
            });
          })(te, function() {
            if (!G) {
              var ve = te.current.value;
              requestAnimationFrame(function() {
                var Ce = te.current;
                Ce && ve !== Ce.value && Ae();
              });
            }
          }), na(window, "resize", Ae), (function(ve) {
            na(document.fonts, "loadingdone", ve);
          })(Ae), F.createElement("textarea", ta({}, W, { onChange: function(ve) {
            G || Ae(), M(ve);
          }, ref: de }));
        }, Ti = F.forwardRef(ra);
        function ul(l, a) {
          l = l.trim();
          try {
            if ((l = structuredClone(l))[0] === "[") return pt("array", JSON.parse(l));
            if (l[0] === "{") return pt("object", JSON.parse(l));
            if (l.match(/-?\d+\.\d+/) && l.match(/-?\d+\.\d+/)[0] === l) return a && parseFloat(l).toString() !== l ? pt("bigNumber", l) : pt("float", parseFloat(l));
            if (l.match(/-?\d+e-\d+/) && l.match(/-?\d+e-\d+/)[0] === l) return pt("float", Number(l));
            if (l.match(/-?\d+/) && l.match(/-?\d+/)[0] === l) return a && parseInt(l).toString() !== l ? pt("bigNumber", l) : pt("integer", parseInt(l));
            if (l.match(/-?\d+e\+\d+/) && l.match(/-?\d+e\+\d+/)[0] === l) return pt("integer", Number(l));
          } catch {
          }
          switch (l = l.toLowerCase()) {
            case "undefined":
              return pt("undefined", void 0);
            case "nan":
              return pt("nan", NaN);
            case "null":
              return pt("null", null);
            case "true":
              return pt("boolean", !0);
            case "false":
              return pt("boolean", !1);
            default:
              if (l = Date.parse(l)) return pt("date", new Date(l));
          }
          return pt(!1, null);
        }
        function pt(l, a) {
          return { type: l, value: a };
        }
        const lo = function(l, a) {
          var s;
          switch (Be(l, a)) {
            case "undefined":
              s = "undefined";
              break;
            case "nan":
              s = "NaN";
              break;
            case "string":
              s = l;
              break;
            case "bigNumber":
            case "date":
            case "function":
            case "regexp":
              s = l.toString();
              break;
            default:
              try {
                s = JSON.stringify(l, null, "  ");
              } catch {
                s = "";
              }
          }
          return s;
        };
        (Object.getOwnPropertyDescriptor(lo, "name") || {}).writable || Object.defineProperty(lo, "name", { value: "default", configurable: !0 });
        var Ii = ["style"], Bi = ["style"], Vi = ["style"], Ui = ["style"], Wi = ["style"], qi = ["style"], Ki = ["style"], oa = ["style"], kr = ["style"], Hi = ["style"], cl = ["style"], fl = ["style"], dl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Ii);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" })));
          } }]);
        })(f().PureComponent), pl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Bi);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" })));
          } }]);
        })(f().PureComponent), hl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Vi), C = ht(c).style;
            return f().createElement("span", g, f().createElement("svg", { fill: C.color, width: C.height, height: C.width, style: C, viewBox: "0 0 1792 1792" }, f().createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
          } }]);
        })(f().PureComponent), Bn = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Ui), C = ht(c).style;
            return f().createElement("span", g, f().createElement("svg", { fill: C.color, width: C.height, height: C.width, style: C, viewBox: "0 0 1792 1792" }, f().createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
          } }]);
        })(f().PureComponent), $i = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Wi);
            return f().createElement("span", g, f().createElement("svg", { style: q(q({}, ht(c).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, f().createElement("path", { d: "M0 14l6-6-6-6z" })));
          } }]);
        })(f().PureComponent), Qi = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, qi);
            return f().createElement("span", g, f().createElement("svg", { style: q(q({}, ht(c).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, f().createElement("path", { d: "M0 5l6 6 6-6z" })));
          } }]);
        })(f().PureComponent), ml = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Ki);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" }))));
          } }]);
        })(f().PureComponent), io = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, oa);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
          } }]);
        })(f().PureComponent), vl = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, kr);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
          } }]);
        })(f().PureComponent), Vn = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, Hi);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" }))));
          } }]);
        })(f().PureComponent), wr = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, cl);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" }))));
          } }]);
        })(f().PureComponent), aa = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.style, g = se(s, fl);
            return f().createElement("span", g, f().createElement("svg", Object.assign({}, ht(c), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), f().createElement("g", null, f().createElement("path", { d: "m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
          } }]);
        })(f().PureComponent);
        function ht(l) {
          return l || (l = {}), { style: q(q({ verticalAlign: "middle" }, l), {}, { color: l.color ? l.color : "#000000", height: "1em", width: "1em" }) };
        }
        var gl = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).copiedTimer = null, c.copyToClipboardFallback = function(g) {
              var C = document.createElement("textarea");
              C.value = g, document.body.appendChild(C), C.select(), document.execCommand("copy"), document.body.removeChild(C);
            }, c.handleCopy = function() {
              var g = c.props, C = g.clickCallback, M = g.src, _ = g.namespace, L = JSON.stringify(c.clipboardValue(M), null, "  ");
              navigator.clipboard ? navigator.clipboard.writeText(L).catch(function() {
                c.copyToClipboardFallback(L);
              }) : c.copyToClipboardFallback(L), c.copiedTimer = setTimeout(function() {
                c.setState({ copied: !1 });
              }, 5500), c.setState({ copied: !0 }, function() {
                typeof C == "function" && C({ src: M, namespace: _, name: _[_.length - 1] });
              });
            }, c.getClippyIcon = function() {
              var g = c.props.theme;
              return c.state.copied ? f().createElement("span", null, f().createElement(ml, Object.assign({ className: "copy-icon" }, Z(g, "copy-icon"))), f().createElement("span", Z(g, "copy-icon-copied"), "✔")) : f().createElement(ml, Object.assign({ className: "copy-icon" }, Z(g, "copy-icon")));
            }, c.clipboardValue = function(g) {
              switch (Be(g)) {
                case "function":
                case "regexp":
                  return g.toString();
                default:
                  return g;
              }
            }, c.state = { copied: !1 }, c;
          }
          return h(a, l), y(a, [{ key: "componentWillUnmount", value: function() {
            this.copiedTimer && (clearTimeout(this.copiedTimer), this.copiedTimer = null);
          } }, { key: "render", value: function() {
            var s = this.props, c = s.theme, g = s.hidden, C = s.rowHovered, M = Z(c, "copy-to-clipboard").style, _ = "inline";
            return g && (_ = "none"), f().createElement("span", { className: "copy-to-clipboard-container", title: "Copy to clipboard", style: { verticalAlign: "top", display: C ? "inline-block" : "none" } }, f().createElement("span", { style: q(q({}, M), {}, { display: _ }), onClick: this.handleCopy }, this.getClippyIcon()));
          } }]);
        })(f().PureComponent);
        const yl = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).handleSelect = function(g) {
              var C = c.props, M = C.variable, _ = C.namespace, L = C.onEdit, W = C.onSelect, G = C.keyModifier, te = Ne(_);
              G(g, "edit") && L !== !1 ? c.prepopInput(M) : W !== !1 && (te.shift(), W(q(q({}, M), {}, { namespace: te })));
            }, c.getEditIcon = function() {
              var g = c.props, C = g.variable, M = g.theme;
              return f().createElement("div", { className: "click-to-edit", style: { verticalAlign: "top", display: c.state.hovered ? "inline-block" : "none" } }, f().createElement(wr, Object.assign({ className: "click-to-edit-icon" }, Z(M, "editVarIcon"), { onClick: function() {
                c.prepopInput(C);
              } })));
            }, c.prepopInput = function(g) {
              if (c.props.onEdit !== !1) {
                var C = lo(g.value, c.props.bigNumber), M = ul(C, c.props.bigNumber);
                c.setState({ editMode: !0, editValue: C, parsedInput: { type: M.type, value: M.value } });
              }
            }, c.getRemoveIcon = function() {
              var g = c.props, C = g.variable, M = g.namespace, _ = g.theme, L = g.rjvId;
              return f().createElement("div", { className: "click-to-remove", style: { verticalAlign: "top", display: c.state.hovered ? "inline-block" : "none" } }, f().createElement(io, Object.assign({ className: "click-to-remove-icon" }, Z(_, "removeVarIcon"), { onClick: function() {
                At.dispatch({ name: "VARIABLE_REMOVED", rjvId: L, data: { name: C.name, namespace: M, existing_value: C.value, variable_removed: !0 } });
              } })));
            }, c.getValue = function(g, C) {
              var M = !C && g.type, _ = c.props;
              switch (M) {
                case !1:
                  return c.getEditInput();
                case "string":
                  return f().createElement(br, Object.assign({ value: g.value }, _));
                case "integer":
                  return f().createElement(oo, Object.assign({ value: g.value }, _));
                case "float":
                  return f().createElement(Zo, Object.assign({ value: g.value }, _));
                case "boolean":
                  return f().createElement(eo, Object.assign({ value: g.value }, _));
                case "function":
                  return f().createElement(In, Object.assign({ value: g.value }, _));
                case "null":
                  return f().createElement(ro, _);
                case "nan":
                  return f().createElement(nl, _);
                case "undefined":
                  return f().createElement(ea, _);
                case "date":
                  return f().createElement(gr, Object.assign({ value: g.value }, _));
                case "regexp":
                  return f().createElement(yr, Object.assign({ value: g.value }, _));
                case "bigNumber":
                  return f().createElement(rl, Object.assign({ value: g.value }, _));
                case "circularReference":
                  return f().createElement(JsonCircularReference, Object.assign({ value: g.value }, _));
                default:
                  var L = "";
                  try {
                    L = JSON.stringify(g.value);
                  } catch {
                    L = "";
                  }
                  return f().createElement("div", { className: "object-value" }, L);
              }
            }, c.getEditInput = function() {
              var g = c.props, C = g.keyModifier, M = g.selectOnFocus, _ = g.theme, L = c.state.editValue;
              return f().createElement("div", null, f().createElement(Ti, Object.assign({ type: "text", ref: function(W) {
                W && W[M ? "select" : "focus"]();
              }, value: L, className: "variable-editor", onChange: function(W) {
                var G = W.target.value, te = ul(G, c.props.bigNumber);
                c.setState({ editValue: G, parsedInput: { type: te.type, value: te.value } });
              }, onKeyDown: function(W) {
                switch (W.key) {
                  case "Escape":
                    c.setState({ editMode: !1, editValue: "" });
                    break;
                  case "Enter":
                    C(W, "submit") && c.submitEdit(!0);
                }
                W.stopPropagation();
              }, placeholder: "update this value", minRows: 2 }, Z(_, "edit-input"))), f().createElement("div", Z(_, "edit-icon-container"), f().createElement(io, Object.assign({ className: "edit-cancel" }, Z(_, "cancel-icon"), { onClick: function(W) {
                W && W.stopPropagation(), c.setState({ editMode: !1, editValue: "" });
              } })), f().createElement(aa, Object.assign({ className: "edit-check string-value" }, Z(_, "check-icon"), { onClick: function(W) {
                W && W.stopPropagation(), c.submitEdit();
              } })), f().createElement("div", null, c.showDetected())));
            }, c.submitEdit = function(g) {
              var C = c.props, M = C.variable, _ = C.namespace, L = C.rjvId, W = C.bigNumber, G = c.state, te = G.editValue, de = G.parsedInput, ie = te;
              g && de.type && (ie = de.value, W && de.type === "bigNumber" && (ie = new W(ie))), c.setState({ editMode: !1 }), At.dispatch({ name: "VARIABLE_UPDATED", rjvId: L, data: { name: M.name, namespace: _, existing_value: M.value, new_value: ie, variable_removed: !1 } });
            }, c.showDetected = function() {
              var g = c.props.theme, C = c.getDetectedInput();
              if (C) return f().createElement("div", null, f().createElement("div", Z(g, "detected-row"), C, f().createElement(aa, { className: "edit-check detected", style: q({ verticalAlign: "top", paddingLeft: "3px" }, Z(g, "check-icon").style), onClick: function(M) {
                M && M.stopPropagation(), c.submitEdit(!0);
              } })));
            }, c.getDetectedInput = function() {
              var g = c.state.parsedInput, C = g.type, M = g.value, _ = c.props, L = _.theme;
              if (C !== !1) switch (C.toLowerCase()) {
                case "object":
                  return f().createElement("span", null, f().createElement("span", { style: q(q({}, Z(L, "brace").style), {}, { cursor: "default" }) }, "{"), f().createElement("span", { style: q(q({}, Z(L, "ellipsis").style), {}, { cursor: "default" }) }, "..."), f().createElement("span", { style: q(q({}, Z(L, "brace").style), {}, { cursor: "default" }) }, "}"));
                case "array":
                  return f().createElement("span", null, f().createElement("span", { style: q(q({}, Z(L, "brace").style), {}, { cursor: "default" }) }, "["), f().createElement("span", { style: q(q({}, Z(L, "ellipsis").style), {}, { cursor: "default" }) }, "..."), f().createElement("span", { style: q(q({}, Z(L, "brace").style), {}, { cursor: "default" }) }, "]"));
                case "string":
                  return f().createElement(br, Object.assign({ value: M }, _));
                case "integer":
                  return f().createElement(oo, Object.assign({ value: M }, _));
                case "float":
                  return f().createElement(Zo, Object.assign({ value: M }, _));
                case "boolean":
                  return f().createElement(eo, Object.assign({ value: M }, _));
                case "function":
                  return f().createElement(In, Object.assign({ value: M }, _));
                case "null":
                  return f().createElement(ro, _);
                case "nan":
                  return f().createElement(nl, _);
                case "undefined":
                  return f().createElement(ea, _);
                case "date":
                  return f().createElement(gr, Object.assign({ value: new Date(M) }, _));
                case "bignumber":
                  return f().createElement(rl, Object.assign({ value: M }, _));
                case "circularreference":
                  return f().createElement(JsonCircularReference, Object.assign({ value: variable.value }, _));
              }
            }, c.state = { editMode: !1, editValue: "", hovered: !1, renameKey: !1, parsedInput: { type: !1, value: null } }, c;
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this, c = this.props, g = c.variable, C = c.singleIndent, M = c.type, _ = c.theme, L = c.namespace, W = c.indentWidth, G = c.enableClipboard, te = c.onEdit, de = c.onDelete, ie = c.onSelect, Oe = c.displayArrayKey, Ae = c.quotesOnKeys, ve = c.showComma, Ce = c.isLast, Le = this.state.editMode, _e = ie !== !1 || te !== !1;
            return f().createElement("div", Object.assign({}, Z(_, "objectKeyVal", { paddingLeft: W * C }), { onMouseEnter: function() {
              return s.setState(q(q({}, s.state), {}, { hovered: !0 }));
            }, onMouseLeave: function() {
              return s.setState(q(q({}, s.state), {}, { hovered: !1 }));
            }, className: "variable-row", key: g.name }), M === "array" ? Oe ? f().createElement("span", Object.assign({}, Z(_, "array-key"), { key: g.name + "_" + L }), g.name, f().createElement("div", Z(_, "colon"), ":")) : null : f().createElement("span", null, f().createElement("span", Object.assign({}, Z(_, "object-name"), { className: "object-key", key: g.name + "_" + L, onClick: _e ? this.handleSelect : null }), !!Ae && f().createElement("span", { style: { verticalAlign: "top" } }, '"'), f().createElement("span", { style: { display: "inline-block" } }, qe(g.name)), !!Ae && f().createElement("span", { style: { verticalAlign: "top" } }, '"')), f().createElement("span", Z(_, "colon"), ":")), f().createElement("div", Object.assign({ className: "variable-value", onClick: _e ? this.handleSelect : null }, Z(_, "variableValue", { cursor: ie === !1 ? "default" : "pointer" })), this.getValue(g, Le)), ve && !Ce && f().createElement("span", Z(_, "comma"), ","), G ? f().createElement(gl, { rowHovered: this.state.hovered, hidden: Le, src: g.value, clickCallback: G, theme: _, namespace: [].concat(Ne(L), [g.name]) }) : null, te !== !1 && Le === !1 ? this.getEditIcon() : null, de !== !1 && Le === !1 ? this.getRemoveIcon() : null);
          } }]);
        })(f().PureComponent);
        var so = (function(l) {
          function a() {
            var s;
            R(this, a);
            for (var c = arguments.length, g = new Array(c), C = 0; C < c; C++) g[C] = arguments[C];
            return (s = v(this, a, [].concat(g))).getObjectSize = function() {
              var M = s.props, _ = M.size, L = M.theme;
              if (M.displayObjectSize) return f().createElement("span", Object.assign({ className: "object-size" }, Z(L, "object-size")), _, " item", _ === 1 ? "" : "s");
            }, s.getAddAttribute = function(M) {
              var _ = s.props, L = _.theme, W = _.namespace, G = _.name, te = _.src, de = _.rjvId, ie = _.depth;
              return f().createElement("span", { className: "click-to-add", style: { verticalAlign: "top", display: M ? "inline-block" : "none" } }, f().createElement(vl, Object.assign({ className: "click-to-add-icon" }, Z(L, "addVarIcon"), { onClick: function() {
                var Oe = { name: ie > 0 ? G : null, namespace: W.splice(0, W.length - 1), existing_value: te, variable_removed: !1, key_name: null };
                Be(te) === "object" ? At.dispatch({ name: "ADD_VARIABLE_KEY_REQUEST", rjvId: de, data: Oe }) : At.dispatch({ name: "VARIABLE_ADDED", rjvId: de, data: q(q({}, Oe), {}, { new_value: [].concat(Ne(te), [null]) }) });
              } })));
            }, s.getRemoveObject = function(M) {
              var _ = s.props, L = _.theme, W = _.namespace, G = _.name, te = _.src, de = _.rjvId;
              if (W.length !== 1) return f().createElement("span", { className: "click-to-remove", style: { display: M ? "inline-block" : "none" } }, f().createElement(io, Object.assign({ className: "click-to-remove-icon" }, Z(L, "removeVarIcon"), { onClick: function() {
                At.dispatch({ name: "VARIABLE_REMOVED", rjvId: de, data: { name: G, namespace: W.splice(0, W.length - 1), existing_value: te, variable_removed: !0 } });
              } })));
            }, s.render = function() {
              var M = s.props, _ = M.theme, L = M.onDelete, W = M.onAdd, G = M.enableClipboard, te = M.src, de = M.namespace, ie = M.rowHovered;
              return f().createElement("div", Object.assign({}, Z(_, "object-meta-data"), { className: "object-meta-data", onClick: function(Oe) {
                Oe.stopPropagation();
              } }), s.getObjectSize(), G ? f().createElement(gl, { rowHovered: ie, clickCallback: G, src: te, theme: _, namespace: de }) : null, W !== !1 ? s.getAddAttribute(ie) : null, L !== !1 ? s.getRemoveObject(ie) : null);
            }, s;
          }
          return h(a, l), y(a);
        })(f().PureComponent);
        function uo(l) {
          var a = l.parent_type, s = l.namespace, c = l.quotesOnKeys, g = l.theme, C = l.jsvRoot, M = l.name, _ = l.displayArrayKey, L = l.onKeyClick, W = l.name ? l.name : "", G = typeof L == "function" ? L : null;
          return !C || M !== !1 && M !== null ? a === "array" ? _ ? f().createElement("span", Object.assign({}, Z(g, "array-key"), { key: s, onClick: G }), f().createElement("span", { className: "array-key" }, W), f().createElement("span", Z(g, "colon"), ":")) : f().createElement("span", null) : f().createElement("span", Object.assign({}, Z(g, "object-name"), { key: s, onClick: G }), f().createElement("span", { className: "object-key" }, c && f().createElement("span", { style: { verticalAlign: "top" } }, '"'), f().createElement("span", null, W), c && f().createElement("span", { style: { verticalAlign: "top" } }, '"')), f().createElement("span", Z(g, "colon"), ":")) : f().createElement("span", null);
        }
        function la(l) {
          var a = l.theme;
          switch (l.iconStyle) {
            case "triangle":
              return f().createElement(Qi, Object.assign({}, Z(a, "expanded-icon"), { className: "expanded-icon" }));
            case "square":
              return f().createElement(hl, Object.assign({}, Z(a, "expanded-icon"), { className: "expanded-icon" }));
            default:
              return f().createElement(dl, Object.assign({}, Z(a, "expanded-icon"), { className: "expanded-icon" }));
          }
        }
        function ia(l) {
          var a = l.theme;
          switch (l.iconStyle) {
            case "triangle":
              return f().createElement($i, Object.assign({}, Z(a, "collapsed-icon"), { className: "collapsed-icon" }));
            case "square":
              return f().createElement(Bn, Object.assign({}, Z(a, "collapsed-icon"), { className: "collapsed-icon" }));
            default:
              return f().createElement(pl, Object.assign({}, Z(a, "collapsed-icon"), { className: "collapsed-icon" }));
          }
        }
        var bl = ["src", "groupArraysAfterLength", "depth", "name", "theme", "jsvRoot", "namespace"], kl = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).toggleCollapsed = function(g) {
              for (var C = c.state.expanded, M = [], _ = Math.max(C.length || 0, g + 1), L = 0; L < _; L++) M[L] = C[L] === !0;
              M[g] = !M[g], c.setState({ expanded: M });
            }, c.handleKeySelect = function() {
              var g = c.props, C = g.name, M = g.namespace, _ = g.onSelect, L = g.src;
              if (typeof _ == "function") {
                var W = Ne(M);
                W.shift(), W.length > 0 && W.pop(), _({ name: C, value: L, type: "array", namespace: W });
              }
            }, c.state = { expanded: [] }, c;
          }
          return h(a, l), y(a, [{ key: "getExpandedIcon", value: function(s) {
            var c = this.props, g = c.theme, C = c.iconStyle;
            return this.state.expanded[s] ? f().createElement(la, { theme: g, iconStyle: C }) : f().createElement(ia, { theme: g, iconStyle: C });
          } }, { key: "render", value: function() {
            var s = this, c = this.props, g = c.src, C = c.groupArraysAfterLength, M = (c.depth, c.name), _ = c.theme, L = c.jsvRoot, W = c.namespace, G = se(c, bl), te = 0, de = 5 * this.props.indentWidth;
            L || (te = 5 * this.props.indentWidth);
            var ie = C, Oe = Math.ceil(g.length / ie);
            return f().createElement("div", Object.assign({ className: "object-key-val" }, Z(_, L ? "jsv-root" : "objectKeyVal", { paddingLeft: te })), f().createElement(uo, Object.assign({}, this.props, { onKeyClick: this.handleKeySelect })), f().createElement("span", null, f().createElement(so, Object.assign({ size: g.length }, this.props))), Ne(Array(Oe)).map(function(Ae, ve) {
              return f().createElement("div", Object.assign({ key: ve, className: "object-key-val array-group" }, Z(_, "objectKeyVal", { marginLeft: 6, paddingLeft: de })), f().createElement("span", Z(_, "brace-row"), f().createElement("div", Object.assign({ className: "icon-container" }, Z(_, "icon-container"), { onClick: function(Ce) {
                s.toggleCollapsed(ve);
              } }), s.getExpandedIcon(ve)), s.state.expanded[ve] ? f().createElement(co, Object.assign({ key: M + ve, depth: 0, name: !1, collapsed: !1, groupArraysAfterLength: ie, index_offset: ve * ie, src: g.slice(ve * ie, ve * ie + ie), namespace: W, type: "array", parent_type: "array_group", theme: _, showComma: s.props.showComma, isLast: ve === Oe - 1 }, G)) : f().createElement("span", Object.assign({}, Z(_, "brace"), { onClick: function(Ce) {
                s.toggleCollapsed(ve);
              }, className: "array-group-brace" }), "[", f().createElement("div", Object.assign({}, Z(_, "array-group-meta-data"), { className: "array-group-meta-data" }), f().createElement("span", Object.assign({ className: "object-size" }, Z(_, "object-size")), ve * ie, " - ", ve * ie + ie - 1 > g.length ? g.length - 1 : ve * ie + ie - 1)), "]")));
            }));
          } }]);
        })(f().PureComponent), Yi = ["depth", "src", "namespace", "name", "type", "parent_type", "theme", "jsvRoot", "iconStyle", "showComma", "isLast"], sa = (function(l) {
          function a(s) {
            var c;
            R(this, a), (c = v(this, a, [s])).handleToggleCollapsed = function() {
              c.setState({ expanded: !c.state.expanded }, function() {
                ot.set(c.props.rjvId, c.props.namespace, "expanded", c.state.expanded);
              });
            }, c.handleKeySelect = function() {
              var C = c.props, M = C.name, _ = C.namespace, L = C.onSelect, W = C.src, G = c.state.object_type;
              if (typeof L == "function") {
                var te = Ne(_);
                te.shift(), te.length > 0 && te.pop(), L({ name: M, value: W, type: G, namespace: te });
              }
            }, c.getObjectContent = function(C, M, _) {
              return f().createElement("div", { className: "pushed-content object-container" }, f().createElement("div", Object.assign({ className: "object-content" }, Z(c.props.theme, "pushed-content")), c.renderObjectContents(M, _)));
            }, c.getEllipsis = function() {
              return c.state.size === 0 ? null : f().createElement("div", Object.assign({}, Z(c.props.theme, "ellipsis"), { className: "node-ellipsis", onClick: c.handleToggleCollapsed }), "...");
            }, c.getObjectMetaData = function(C) {
              var M = c.state, _ = M.size, L = M.hovered;
              return f().createElement(so, Object.assign({ rowHovered: L, size: _ }, c.props));
            }, c.renderObjectContents = function(C, M) {
              var _, L = c.props, W = L.depth, G = L.parent_type, te = L.index_offset, de = L.groupArraysAfterLength, ie = L.namespace, Oe = L.showComma, Ae = c.state.object_type, ve = [], Ce = Object.keys(C || {});
              return c.props.sortKeys && Ae !== "array" && (Ce = Ce.sort()), Ce.forEach(function(Le, _e) {
                _ = new Gi(Le, C[Le], M.bigNumber);
                var mt = _e === Ce.length - 1;
                if (G === "array_group" && te && (_.name = parseInt(_.name, 10) + te), Object.prototype.hasOwnProperty.call(C, Le) && _.type.toLowerCase() !== "window") if (c.isCircularReference(_)) ve.push(f().createElement(re, Object.assign({ key: _.name, depth: W + 1, name: _.name, src: _.value, namespace: ie.concat(_.name), type: "array", parent_type: Ae, isLast: mt, showComma: Oe, singleIndent: 5, indentWidth: c.props.indentWidth }, M)));
                else if (_.type === "object") ve.push(f().createElement(co, Object.assign({ key: _.name, depth: W + 1, name: _.name, src: _.value, namespace: ie.concat(_.name), parent_type: Ae, isLast: mt, showComma: Oe, listOfAncestors: c.listOfAncestors.concat([c.props.src]) }, M)));
                else if (_.type === "array") {
                  var at = co;
                  de && _.value.length > de && (at = kl), ve.push(f().createElement(at, Object.assign({ key: _.name, depth: W + 1, name: _.name, src: _.value, namespace: ie.concat(_.name), type: "array", parent_type: Ae, isLast: mt, showComma: Oe, listOfAncestors: c.listOfAncestors.concat([c.props.src]) }, M)));
                } else ve.push(f().createElement(yl, Object.assign({ key: _.name + "_" + ie, variable: _, singleIndent: 5, namespace: ie, type: c.props.type, isLast: mt, showComma: Oe }, M)));
              }), ve;
            };
            var g = a.getState(s);
            return c.state = q(q({}, g), {}, { prevProps: {} }), c.listOfAncestors = Array.from(c.props.listOfAncestors || []), c.listOfAncestors.push(s.src), c;
          }
          return h(a, l), y(a, [{ key: "getBraceStart", value: function(s, c) {
            var g = this.props, C = g.theme, M = g.iconStyle;
            if (g.parent_type === "array_group") return f().createElement("span", null, f().createElement("span", Z(C, "brace"), s === "array" ? "[" : "{"));
            var _ = c ? la : ia;
            return f().createElement("span", null, f().createElement("span", Object.assign({ onClick: this.handleToggleCollapsed }, Z(C, "brace-row")), f().createElement("div", Object.assign({ className: "icon-container" }, Z(C, "icon-container")), f().createElement(_, { theme: C, iconStyle: M })), f().createElement(uo, Object.assign({}, this.props, { onKeyClick: this.handleKeySelect })), f().createElement("span", Z(C, "brace"), s === "array" ? "[" : "{")));
          } }, { key: "isCircularReference", value: function(s) {
            return this.listOfAncestors.indexOf(s.value) > -1 || s.value === this.props.src;
          } }, { key: "render", value: function() {
            var s = this, c = this.props, g = c.depth, C = c.src, M = (c.namespace, c.name, c.type, c.parent_type), _ = c.theme, L = c.jsvRoot, W = c.iconStyle, G = c.showComma, te = c.isLast, de = se(c, Yi), ie = this.state, Oe = ie.object_type, Ae = ie.expanded, ve = {};
            return L || M === "array_group" ? M === "array_group" && (ve.borderLeft = 0, ve.display = "inline") : ve.paddingLeft = 5 * this.props.indentWidth, f().createElement("div", Object.assign({ className: "object-key-val", onMouseEnter: function() {
              return s.setState(q(q({}, s.state), {}, { hovered: !0 }));
            }, onMouseLeave: function() {
              return s.setState(q(q({}, s.state), {}, { hovered: !1 }));
            } }, Z(_, L ? "jsv-root" : "objectKeyVal", ve)), this.getBraceStart(Oe, Ae), Ae ? this.getObjectContent(g, C, q({ theme: _, iconStyle: W }, de)) : this.getEllipsis(), f().createElement("span", { className: "brace-row" }, f().createElement("span", { style: q(q({}, Z(_, "brace").style), {}, { paddingLeft: Ae ? "3px" : "0px" }) }, Oe === "array" ? "]" : "}")), G && !te && !L && f().createElement("span", Z(_, "comma"), ","), this.getObjectMetaData(C));
          } }], [{ key: "getDerivedStateFromProps", value: function(s, c) {
            var g = c.prevProps;
            return s.src !== g.src || s.collapsed !== g.collapsed || s.name !== g.name || s.namespace !== g.namespace || s.rjvId !== g.rjvId ? q(q({}, a.getState(s)), {}, { prevProps: s }) : null;
          } }]);
        })(f().PureComponent);
        sa.getState = function(l) {
          var a = Object.keys(l.src).length, s = (l.collapsed === !1 || l.collapsed !== !0 && l.collapsed > l.depth) && (!l.shouldCollapse || l.shouldCollapse({ name: l.name, src: l.src, type: Be(l.src), namespace: l.namespace }) === !1) && a !== 0;
          return { expanded: ot.get(l.rjvId, l.namespace, "expanded", s), object_type: l.type === "array" ? "array" : "object", parent_type: l.type === "array" ? "array" : "object", size: a, hovered: !1 };
        };
        var Gi = y(function l(a, s, c) {
          R(this, l), this.name = a, this.value = s, this.type = Be(s, c);
        });
        fe(sa);
        const co = sa;
        var Lt = (function(l) {
          function a() {
            var s;
            R(this, a);
            for (var c = arguments.length, g = new Array(c), C = 0; C < c; C++) g[C] = arguments[C];
            return (s = v(this, a, [].concat(g))).render = function() {
              var M, _, L, W, G = s.props, te = [G.name], de = co;
              return typeof G.name != "object" || Array.isArray(G.name) || (te = [((M = G.name) === null || M === void 0 ? void 0 : M.displayName) || ((_ = G.name) === null || _ === void 0 ? void 0 : _.name) || ((L = G.name) === null || L === void 0 || (W = L.type) === null || W === void 0 ? void 0 : W.name) || "Anonymous"]), Array.isArray(G.src) && G.groupArraysAfterLength && G.src.length > G.groupArraysAfterLength && (de = kl), f().createElement("div", { className: "pretty-json-container object-container" }, f().createElement("div", { className: "object-content" }, f().createElement(de, Object.assign({ namespace: te, depth: 0, jsvRoot: !0 }, G))));
            }, s;
          }
          return h(a, l), y(a);
        })(f().PureComponent), Er = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).handleCloseModal = function() {
              At.dispatch({ rjvId: c.props.rjvId, name: "RESET" });
            }, c.handleSubmit = function() {
              c.props.submit(c.state.input);
            }, c.state = { input: s.input ? s.input : "" }, c;
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this, c = this.props, g = c.theme, C = c.rjvId, M = c.isValid, _ = this.state.input, L = M(_);
            return f().createElement("div", Object.assign({ className: "key-modal-request" }, Z(g, "key-modal-request"), { onClick: this.handleCloseModal }), f().createElement("div", Object.assign({}, Z(g, "key-modal"), { onClick: function(W) {
              W.stopPropagation();
            } }), f().createElement("div", Z(g, "key-modal-label"), "Key Name:"), f().createElement("div", { style: { position: "relative" } }, f().createElement("input", Object.assign({}, Z(g, "key-modal-input"), { className: "key-modal-input", ref: function(W) {
              return W && W.focus();
            }, spellCheck: !1, value: _, placeholder: "...", onChange: function(W) {
              s.setState({ input: W.target.value });
            }, onKeyPress: function(W) {
              L && W.key === "Enter" ? s.handleSubmit() : W.key === "Escape" && s.handleCloseModal();
            } })), L ? f().createElement(aa, Object.assign({}, Z(g, "key-modal-submit"), { className: "key-modal-submit", onClick: this.handleSubmit })) : null), f().createElement("span", Z(g, "key-modal-cancel"), f().createElement(Vn, Object.assign({}, Z(g, "key-modal-cancel-icon"), { className: "key-modal-cancel", onClick: function() {
              At.dispatch({ rjvId: C, name: "RESET" });
            } })))));
          } }]);
        })(f().PureComponent), wl = (function(l) {
          function a() {
            var s;
            R(this, a);
            for (var c = arguments.length, g = new Array(c), C = 0; C < c; C++) g[C] = arguments[C];
            return (s = v(this, a, [].concat(g))).isValid = function(M) {
              var _ = s.props.rjvId, L = ot.get(_, "action", "new-key-request");
              return M !== "" && Object.keys(L.existing_value).indexOf(M) === -1;
            }, s.submit = function(M) {
              var _ = s.props.rjvId, L = ot.get(_, "action", "new-key-request");
              L.new_value = q({}, L.existing_value), L.new_value[M] = s.props.defaultValue, At.dispatch({ name: "VARIABLE_ADDED", rjvId: _, data: L });
            }, s;
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.active, g = s.theme, C = s.rjvId;
            return c ? f().createElement(Er, { rjvId: C, theme: g, isValid: this.isValid, submit: this.submit }) : null;
          } }]);
        })(f().PureComponent), El = (function(l) {
          function a() {
            return R(this, a), v(this, a, arguments);
          }
          return h(a, l), y(a, [{ key: "render", value: function() {
            var s = this.props, c = s.message, g = s.active, C = s.theme, M = s.rjvId;
            return g ? f().createElement("div", Object.assign({ className: "validation-failure" }, Z(C, "validation-failure"), { onClick: function() {
              At.dispatch({ rjvId: M, name: "RESET" });
            } }), f().createElement("span", Z(C, "validation-failure-label"), c), f().createElement(Vn, Z(C, "validation-failure-clear"))) : null;
          } }]);
        })(f().PureComponent), _r = (function(l) {
          function a(s) {
            var c;
            return R(this, a), (c = v(this, a, [s])).rjvId = Date.now().toString() + Math.random().toString(36).slice(2), c.getListeners = function() {
              return { reset: c.resetState, "variable-update": c.updateSrc, "add-key-request": c.addKeyRequest };
            }, c.updateSrc = function() {
              var g, C = ot.get(c.rjvId, "action", "variable-update"), M = C.name, _ = C.namespace, L = C.new_value, W = C.existing_value, G = C.updated_src, te = C.type, de = c.props, ie = de.onEdit, Oe = de.onDelete, Ae = de.onAdd, ve = { existing_src: c.state.src, new_value: L, updated_src: G, name: M, namespace: _, existing_value: W };
              switch (te) {
                case "variable-added":
                  g = Ae(ve);
                  break;
                case "variable-edited":
                  g = ie(ve);
                  break;
                case "variable-removed":
                  g = Oe(ve);
              }
              g !== !1 ? (ot.set(c.rjvId, "global", "src", G), c.setState({ src: G })) : c.setState({ validationFailure: !0 });
            }, c.addKeyRequest = function() {
              c.setState({ addKeyRequest: !0 });
            }, c.resetState = function() {
              c.setState({ validationFailure: !1, addKeyRequest: !1 });
            }, c.state = { addKeyRequest: !1, editKeyRequest: !1, validationFailure: !1, src: a.defaultProps.src, name: a.defaultProps.name, theme: a.defaultProps.theme, validationMessage: a.defaultProps.validationMessage, prevSrc: a.defaultProps.src, prevName: a.defaultProps.name, prevTheme: a.defaultProps.theme }, c;
          }
          return h(a, l), y(a, [{ key: "componentDidMount", value: function() {
            ot.set(this.rjvId, "global", "src", this.state.src);
            var s = this.getListeners();
            for (var c in s) ot.on(c + "-" + this.rjvId, s[c]);
            this.setState({ addKeyRequest: !1, editKeyRequest: !1 });
          } }, { key: "componentDidUpdate", value: function(s, c) {
            c.addKeyRequest !== !1 && this.setState({ addKeyRequest: !1 }), c.editKeyRequest !== !1 && this.setState({ editKeyRequest: !1 }), s.src !== this.state.src && ot.set(this.rjvId, "global", "src", this.state.src);
          } }, { key: "componentWillUnmount", value: function() {
            var s = this.getListeners();
            for (var c in s) ot.removeListener(c + "-" + this.rjvId, s[c]);
          } }, { key: "render", value: function() {
            var s = this.state, c = s.validationFailure, g = s.validationMessage, C = s.addKeyRequest, M = s.theme, _ = s.src, L = s.name, W = this.props, G = W.style, te = W.defaultValue;
            return f().createElement("div", { className: "react-json-view", style: q(q({}, Z(M, "app-container").style), G) }, f().createElement(El, { message: g, active: c, theme: M, rjvId: this.rjvId }), f().createElement(Lt, Object.assign({}, this.props, { src: _, name: L, theme: M, type: Be(_), rjvId: this.rjvId })), f().createElement(wl, { active: C, theme: M, rjvId: this.rjvId, defaultValue: te }));
          } }], [{ key: "getDerivedStateFromProps", value: function(s, c) {
            if (s.src !== c.prevSrc || s.name !== c.prevName || s.theme !== c.prevTheme) {
              var g = { src: s.src, name: s.name, theme: s.theme, validationMessage: s.validationMessage, prevSrc: s.src, prevName: s.name, prevTheme: s.theme };
              return a.validateState(g);
            }
            return null;
          } }]);
        })(f().PureComponent);
        _r.defaultProps = { src: {}, name: "root", theme: "rjv-default", collapsed: !1, collapseStringsAfterLength: !1, shouldCollapse: !1, sortKeys: !1, quotesOnKeys: !0, groupArraysAfterLength: 100, indentWidth: 4, enableClipboard: !0, escapeStrings: !0, displayObjectSize: !0, displayDataTypes: !0, onEdit: !1, onDelete: !1, onAdd: !1, onSelect: !1, iconStyle: "triangle", style: {}, validationMessage: "Validation Error", defaultValue: null, displayArrayKey: !0, selectOnFocus: !1, keyModifier: function(l) {
          return l.metaKey || l.ctrlKey;
        }, bigNumber: null, showComma: !0 }, _r.validateState = function(l) {
          var a = {};
          return Be(l.theme) !== "object" || (function(s) {
            var c = ["base00", "base01", "base02", "base03", "base04", "base05", "base06", "base07", "base08", "base09", "base0A", "base0B", "base0C", "base0D", "base0E", "base0F"];
            if (Be(s) === "object") {
              for (var g = 0; g < c.length; g++) if (!(c[g] in s)) return !1;
              return !0;
            }
            return !1;
          })(l.theme) || (console.error("react-json-view error:", "theme prop must be a theme name or valid base-16 theme object.", 'defaulting to "rjv-default" theme'), a.theme = "rjv-default"), Be(l.src) !== "object" && Be(l.src) !== "array" && (console.error("react-json-view error:", "src property must be a valid json object"), a.name = "ERROR", a.src = { message: "src property must be a valid json object" }), q(q({}, l), a);
        }, fe(_r);
        const _l = _r;
      })(), I;
    })());
  })(vi)), vi.exports;
}
var dd = fd();
const sf = /* @__PURE__ */ ed(dd), pd = sf.default || sf, fu = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
for (const u in fu) Object.freeze(fu[u]);
const mn = Object.freeze(fu), uf = /* @__PURE__ */ Object.create(null);
for (const u in mn)
  Object.hasOwn(mn, u) && (uf[mn[u]] = u);
const rt = {
  to: {},
  get: {}
};
rt.get = function(u) {
  const m = u.slice(0, 3).toLowerCase();
  let p, k;
  switch (m) {
    case "hsl": {
      p = rt.get.hsl(u), k = "hsl";
      break;
    }
    case "hwb": {
      p = rt.get.hwb(u), k = "hwb";
      break;
    }
    default: {
      p = rt.get.rgb(u), k = "rgb";
      break;
    }
  }
  return p ? { model: k, value: p } : null;
};
rt.get.rgb = function(u) {
  if (!u)
    return null;
  const m = /^#([a-f\d]{3,4})$/i, p = /^#([a-f\d]{6})([a-f\d]{2})?$/i, k = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i, E = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i, D = /^(\w+)$/;
  let I = [0, 0, 0, 1], z, U, Y;
  if (z = u.match(p)) {
    for (Y = z[2], z = z[1], U = 0; U < 3; U++) {
      const oe = U * 2;
      I[U] = Number.parseInt(z.slice(oe, oe + 2), 16);
    }
    Y && (I[3] = Number.parseInt(Y, 16) / 255);
  } else if (z = u.match(m)) {
    for (z = z[1], Y = z[3], U = 0; U < 3; U++)
      I[U] = Number.parseInt(z[U] + z[U], 16);
    Y && (I[3] = Number.parseInt(Y + Y, 16) / 255);
  } else if (z = u.match(k)) {
    for (U = 0; U < 3; U++)
      I[U] = Number.parseFloat(z[U + 1]);
    z[4] && (I[3] = z[5] ? Number.parseFloat(z[4]) * 0.01 : Number.parseFloat(z[4]));
  } else if (z = u.match(E)) {
    for (U = 0; U < 3; U++)
      I[U] = Math.round(Number.parseFloat(z[U + 1]) * 2.55);
    z[4] && (I[3] = z[5] ? Number.parseFloat(z[4]) * 0.01 : Number.parseFloat(z[4]));
  } else return (z = u.toLowerCase().match(D)) ? z[1] === "transparent" ? [0, 0, 0, 0] : Object.hasOwn(mn, z[1]) ? (I = mn[z[1]].slice(), I[3] = 1, I) : null : null;
  for (U = 0; U < 3; U++)
    I[U] = rr(I[U], 0, 255);
  return I[3] = rr(I[3], 0, 1), I;
};
rt.get.hsl = function(u) {
  if (!u)
    return null;
  const m = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i, p = u.match(m);
  if (p) {
    const k = Number.parseFloat(p[4]), E = (Number.parseFloat(p[1]) % 360 + 360) % 360, D = rr(Number.parseFloat(p[2]), 0, 100), I = rr(Number.parseFloat(p[3]), 0, 100), z = rr(Number.isNaN(k) ? 1 : k, 0, 1);
    return [E, D, I, z];
  }
  return null;
};
rt.get.hwb = function(u) {
  if (!u)
    return null;
  const m = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i, p = u.match(m);
  if (p) {
    const k = Number.parseFloat(p[4]), E = (Number.parseFloat(p[1]) % 360 + 360) % 360, D = rr(Number.parseFloat(p[2]), 0, 100), I = rr(Number.parseFloat(p[3]), 0, 100), z = rr(Number.isNaN(k) ? 1 : k, 0, 1);
    return [E, D, I, z];
  }
  return null;
};
rt.to.hex = function(...u) {
  return "#" + hi(u[0]) + hi(u[1]) + hi(u[2]) + (u[3] < 1 ? hi(Math.round(u[3] * 255)) : "");
};
rt.to.rgb = function(...u) {
  return u.length < 4 || u[3] === 1 ? "rgb(" + Math.round(u[0]) + ", " + Math.round(u[1]) + ", " + Math.round(u[2]) + ")" : "rgba(" + Math.round(u[0]) + ", " + Math.round(u[1]) + ", " + Math.round(u[2]) + ", " + u[3] + ")";
};
rt.to.rgb.percent = function(...u) {
  const m = Math.round(u[0] / 255 * 100), p = Math.round(u[1] / 255 * 100), k = Math.round(u[2] / 255 * 100);
  return u.length < 4 || u[3] === 1 ? "rgb(" + m + "%, " + p + "%, " + k + "%)" : "rgba(" + m + "%, " + p + "%, " + k + "%, " + u[3] + ")";
};
rt.to.hsl = function(...u) {
  return u.length < 4 || u[3] === 1 ? "hsl(" + u[0] + ", " + u[1] + "%, " + u[2] + "%)" : "hsla(" + u[0] + ", " + u[1] + "%, " + u[2] + "%, " + u[3] + ")";
};
rt.to.hwb = function(...u) {
  let m = "";
  return u.length >= 4 && u[3] !== 1 && (m = ", " + u[3]), "hwb(" + u[0] + ", " + u[1] + "%, " + u[2] + "%" + m + ")";
};
rt.to.keyword = function(...u) {
  return uf[u.slice(0, 3)];
};
function rr(u, m, p) {
  return Math.min(Math.max(m, u), p);
}
function hi(u) {
  const m = Math.round(u).toString(16).toUpperCase();
  return m.length < 2 ? "0" + m : m;
}
const cf = {};
for (const u of Object.keys(mn))
  cf[mn[u]] = u;
const ne = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
  lch: { channels: 3, labels: "lch" },
  oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
}, Nn = (6 / 29) ** 3;
function No(u) {
  const m = u > 31308e-7 ? 1.055 * u ** 0.4166666666666667 - 0.055 : u * 12.92;
  return Math.min(Math.max(0, m), 1);
}
function zo(u) {
  return u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92;
}
for (const u of Object.keys(ne)) {
  if (!("channels" in ne[u]))
    throw new Error("missing channels property: " + u);
  if (!("labels" in ne[u]))
    throw new Error("missing channel labels property: " + u);
  if (ne[u].labels.length !== ne[u].channels)
    throw new Error("channel and label counts mismatch: " + u);
  const { channels: m, labels: p } = ne[u];
  delete ne[u].channels, delete ne[u].labels, Object.defineProperty(ne[u], "channels", { value: m }), Object.defineProperty(ne[u], "labels", { value: p });
}
ne.rgb.hsl = function(u) {
  const m = u[0] / 255, p = u[1] / 255, k = u[2] / 255, E = Math.min(m, p, k), D = Math.max(m, p, k), I = D - E;
  let z, U;
  switch (D) {
    case E: {
      z = 0;
      break;
    }
    case m: {
      z = (p - k) / I;
      break;
    }
    case p: {
      z = 2 + (k - m) / I;
      break;
    }
    case k: {
      z = 4 + (m - p) / I;
      break;
    }
  }
  z = Math.min(z * 60, 360), z < 0 && (z += 360);
  const Y = (E + D) / 2;
  return D === E ? U = 0 : Y <= 0.5 ? U = I / (D + E) : U = I / (2 - D - E), [z, U * 100, Y * 100];
};
ne.rgb.hsv = function(u) {
  let m, p, k, E, D;
  const I = u[0] / 255, z = u[1] / 255, U = u[2] / 255, Y = Math.max(I, z, U), oe = Y - Math.min(I, z, U), q = function(R) {
    return (Y - R) / 6 / oe + 1 / 2;
  };
  if (oe === 0)
    E = 0, D = 0;
  else {
    switch (D = oe / Y, m = q(I), p = q(z), k = q(U), Y) {
      case I: {
        E = k - p;
        break;
      }
      case z: {
        E = 1 / 3 + m - k;
        break;
      }
      case U: {
        E = 2 / 3 + p - m;
        break;
      }
    }
    E < 0 ? E += 1 : E > 1 && (E -= 1);
  }
  return [
    E * 360,
    D * 100,
    Y * 100
  ];
};
ne.rgb.hwb = function(u) {
  const m = u[0], p = u[1];
  let k = u[2];
  const E = ne.rgb.hsl(u)[0], D = 1 / 255 * Math.min(m, Math.min(p, k));
  return k = 1 - 1 / 255 * Math.max(m, Math.max(p, k)), [E, D * 100, k * 100];
};
ne.rgb.oklab = function(u) {
  const m = zo(u[0] / 255), p = zo(u[1] / 255), k = zo(u[2] / 255), E = Math.cbrt(0.4122214708 * m + 0.5363325363 * p + 0.0514459929 * k), D = Math.cbrt(0.2119034982 * m + 0.6806995451 * p + 0.1073969566 * k), I = Math.cbrt(0.0883024619 * m + 0.2817188376 * p + 0.6299787005 * k), z = 0.2104542553 * E + 0.793617785 * D - 0.0040720468 * I, U = 1.9779984951 * E - 2.428592205 * D + 0.4505937099 * I, Y = 0.0259040371 * E + 0.7827717662 * D - 0.808675766 * I;
  return [z * 100, U * 100, Y * 100];
};
ne.rgb.cmyk = function(u) {
  const m = u[0] / 255, p = u[1] / 255, k = u[2] / 255, E = Math.min(1 - m, 1 - p, 1 - k), D = (1 - m - E) / (1 - E) || 0, I = (1 - p - E) / (1 - E) || 0, z = (1 - k - E) / (1 - E) || 0;
  return [D * 100, I * 100, z * 100, E * 100];
};
function hd(u, m) {
  return (u[0] - m[0]) ** 2 + (u[1] - m[1]) ** 2 + (u[2] - m[2]) ** 2;
}
ne.rgb.keyword = function(u) {
  const m = cf[u];
  if (m)
    return m;
  let p = Number.POSITIVE_INFINITY, k;
  for (const E of Object.keys(mn)) {
    const D = mn[E], I = hd(u, D);
    I < p && (p = I, k = E);
  }
  return k;
};
ne.keyword.rgb = function(u) {
  return [...mn[u]];
};
ne.rgb.xyz = function(u) {
  const m = zo(u[0] / 255), p = zo(u[1] / 255), k = zo(u[2] / 255), E = m * 0.4124564 + p * 0.3575761 + k * 0.1804375, D = m * 0.2126729 + p * 0.7151522 + k * 0.072175, I = m * 0.0193339 + p * 0.119192 + k * 0.9503041;
  return [E * 100, D * 100, I * 100];
};
ne.rgb.lab = function(u) {
  const m = ne.rgb.xyz(u);
  let p = m[0], k = m[1], E = m[2];
  p /= 95.047, k /= 100, E /= 108.883, p = p > Nn ? p ** (1 / 3) : 7.787 * p + 16 / 116, k = k > Nn ? k ** (1 / 3) : 7.787 * k + 16 / 116, E = E > Nn ? E ** (1 / 3) : 7.787 * E + 16 / 116;
  const D = 116 * k - 16, I = 500 * (p - k), z = 200 * (k - E);
  return [D, I, z];
};
ne.hsl.rgb = function(u) {
  const m = u[0] / 360, p = u[1] / 100, k = u[2] / 100;
  let E, D;
  if (p === 0)
    return D = k * 255, [D, D, D];
  const I = k < 0.5 ? k * (1 + p) : k + p - k * p, z = 2 * k - I, U = [0, 0, 0];
  for (let Y = 0; Y < 3; Y++)
    E = m + 1 / 3 * -(Y - 1), E < 0 && E++, E > 1 && E--, 6 * E < 1 ? D = z + (I - z) * 6 * E : 2 * E < 1 ? D = I : 3 * E < 2 ? D = z + (I - z) * (2 / 3 - E) * 6 : D = z, U[Y] = D * 255;
  return U;
};
ne.hsl.hsv = function(u) {
  const m = u[0];
  let p = u[1] / 100, k = u[2] / 100, E = p;
  const D = Math.max(k, 0.01);
  k *= 2, p *= k <= 1 ? k : 2 - k, E *= D <= 1 ? D : 2 - D;
  const I = (k + p) / 2, z = k === 0 ? 2 * E / (D + E) : 2 * p / (k + p);
  return [m, z * 100, I * 100];
};
ne.hsv.rgb = function(u) {
  const m = u[0] / 60, p = u[1] / 100;
  let k = u[2] / 100;
  const E = Math.floor(m) % 6, D = m - Math.floor(m), I = 255 * k * (1 - p), z = 255 * k * (1 - p * D), U = 255 * k * (1 - p * (1 - D));
  switch (k *= 255, E) {
    case 0:
      return [k, U, I];
    case 1:
      return [z, k, I];
    case 2:
      return [I, k, U];
    case 3:
      return [I, z, k];
    case 4:
      return [U, I, k];
    case 5:
      return [k, I, z];
  }
};
ne.hsv.hsl = function(u) {
  const m = u[0], p = u[1] / 100, k = u[2] / 100, E = Math.max(k, 0.01);
  let D, I;
  I = (2 - p) * k;
  const z = (2 - p) * E;
  return D = p * E, D /= z <= 1 ? z : 2 - z, D = D || 0, I /= 2, [m, D * 100, I * 100];
};
ne.hwb.rgb = function(u) {
  const m = u[0] / 360;
  let p = u[1] / 100, k = u[2] / 100;
  const E = p + k;
  let D;
  E > 1 && (p /= E, k /= E);
  const I = Math.floor(6 * m), z = 1 - k;
  D = 6 * m - I, (I & 1) !== 0 && (D = 1 - D);
  const U = p + D * (z - p);
  let Y, oe, q;
  switch (I) {
    default:
    case 6:
    case 0: {
      Y = z, oe = U, q = p;
      break;
    }
    case 1: {
      Y = U, oe = z, q = p;
      break;
    }
    case 2: {
      Y = p, oe = z, q = U;
      break;
    }
    case 3: {
      Y = p, oe = U, q = z;
      break;
    }
    case 4: {
      Y = U, oe = p, q = z;
      break;
    }
    case 5: {
      Y = z, oe = p, q = U;
      break;
    }
  }
  return [Y * 255, oe * 255, q * 255];
};
ne.cmyk.rgb = function(u) {
  const m = u[0] / 100, p = u[1] / 100, k = u[2] / 100, E = u[3] / 100, D = 1 - Math.min(1, m * (1 - E) + E), I = 1 - Math.min(1, p * (1 - E) + E), z = 1 - Math.min(1, k * (1 - E) + E);
  return [D * 255, I * 255, z * 255];
};
ne.xyz.rgb = function(u) {
  const m = u[0] / 100, p = u[1] / 100, k = u[2] / 100;
  let E, D, I;
  return E = m * 3.2404542 + p * -1.5371385 + k * -0.4985314, D = m * -0.969266 + p * 1.8760108 + k * 0.041556, I = m * 0.0556434 + p * -0.2040259 + k * 1.0572252, E = No(E), D = No(D), I = No(I), [E * 255, D * 255, I * 255];
};
ne.xyz.lab = function(u) {
  let m = u[0], p = u[1], k = u[2];
  m /= 95.047, p /= 100, k /= 108.883, m = m > Nn ? m ** (1 / 3) : 7.787 * m + 16 / 116, p = p > Nn ? p ** (1 / 3) : 7.787 * p + 16 / 116, k = k > Nn ? k ** (1 / 3) : 7.787 * k + 16 / 116;
  const E = 116 * p - 16, D = 500 * (m - p), I = 200 * (p - k);
  return [E, D, I];
};
ne.xyz.oklab = function(u) {
  const m = u[0] / 100, p = u[1] / 100, k = u[2] / 100, E = Math.cbrt(0.8189330101 * m + 0.3618667424 * p - 0.1288597137 * k), D = Math.cbrt(0.0329845436 * m + 0.9293118715 * p + 0.0361456387 * k), I = Math.cbrt(0.0482003018 * m + 0.2643662691 * p + 0.633851707 * k), z = 0.2104542553 * E + 0.793617785 * D - 0.0040720468 * I, U = 1.9779984951 * E - 2.428592205 * D + 0.4505937099 * I, Y = 0.0259040371 * E + 0.7827717662 * D - 0.808675766 * I;
  return [z * 100, U * 100, Y * 100];
};
ne.oklab.oklch = function(u) {
  return ne.lab.lch(u);
};
ne.oklab.xyz = function(u) {
  const m = u[0] / 100, p = u[1] / 100, k = u[2] / 100, E = (0.999999998 * m + 0.396337792 * p + 0.215803758 * k) ** 3, D = (1.000000008 * m - 0.105561342 * p - 0.063854175 * k) ** 3, I = (1.000000055 * m - 0.089484182 * p - 1.291485538 * k) ** 3, z = 1.227013851 * E - 0.55779998 * D + 0.281256149 * I, U = -0.040580178 * E + 1.11225687 * D - 0.071676679 * I, Y = -0.076381285 * E - 0.421481978 * D + 1.58616322 * I;
  return [z * 100, U * 100, Y * 100];
};
ne.oklab.rgb = function(u) {
  const m = u[0] / 100, p = u[1] / 100, k = u[2] / 100, E = (m + 0.3963377774 * p + 0.2158037573 * k) ** 3, D = (m - 0.1055613458 * p - 0.0638541728 * k) ** 3, I = (m - 0.0894841775 * p - 1.291485548 * k) ** 3, z = No(4.0767416621 * E - 3.3077115913 * D + 0.2309699292 * I), U = No(-1.2684380046 * E + 2.6097574011 * D - 0.3413193965 * I), Y = No(-0.0041960863 * E - 0.7034186147 * D + 1.707614701 * I);
  return [z * 255, U * 255, Y * 255];
};
ne.oklch.oklab = function(u) {
  return ne.lch.lab(u);
};
ne.lab.xyz = function(u) {
  const m = u[0], p = u[1], k = u[2];
  let E, D, I;
  D = (m + 16) / 116, E = p / 500 + D, I = D - k / 200;
  const z = D ** 3, U = E ** 3, Y = I ** 3;
  return D = z > Nn ? z : (D - 16 / 116) / 7.787, E = U > Nn ? U : (E - 16 / 116) / 7.787, I = Y > Nn ? Y : (I - 16 / 116) / 7.787, E *= 95.047, D *= 100, I *= 108.883, [E, D, I];
};
ne.lab.lch = function(u) {
  const m = u[0], p = u[1], k = u[2];
  let E;
  E = Math.atan2(k, p) * 360 / 2 / Math.PI, E < 0 && (E += 360);
  const I = Math.sqrt(p * p + k * k);
  return [m, I, E];
};
ne.lch.lab = function(u) {
  const m = u[0], p = u[1], E = u[2] / 360 * 2 * Math.PI, D = p * Math.cos(E), I = p * Math.sin(E);
  return [m, D, I];
};
ne.rgb.ansi16 = function(u, m = null) {
  const [p, k, E] = u;
  let D = m === null ? ne.rgb.hsv(u)[2] : m;
  if (D = Math.round(D / 50), D === 0)
    return 30;
  let I = 30 + (Math.round(E / 255) << 2 | Math.round(k / 255) << 1 | Math.round(p / 255));
  return D === 2 && (I += 60), I;
};
ne.hsv.ansi16 = function(u) {
  return ne.rgb.ansi16(ne.hsv.rgb(u), u[2]);
};
ne.rgb.ansi256 = function(u) {
  const m = u[0], p = u[1], k = u[2];
  return m >> 4 === p >> 4 && p >> 4 === k >> 4 ? m < 8 ? 16 : m > 248 ? 231 : Math.round((m - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(m / 255 * 5) + 6 * Math.round(p / 255 * 5) + Math.round(k / 255 * 5);
};
ne.ansi16.rgb = function(u) {
  u = u[0];
  let m = u % 10;
  if (m === 0 || m === 7)
    return u > 50 && (m += 3.5), m = m / 10.5 * 255, [m, m, m];
  const p = (Math.trunc(u > 50) + 1) * 0.5, k = (m & 1) * p * 255, E = (m >> 1 & 1) * p * 255, D = (m >> 2 & 1) * p * 255;
  return [k, E, D];
};
ne.ansi256.rgb = function(u) {
  if (u = u[0], u >= 232) {
    const D = (u - 232) * 10 + 8;
    return [D, D, D];
  }
  u -= 16;
  let m;
  const p = Math.floor(u / 36) / 5 * 255, k = Math.floor((m = u % 36) / 6) / 5 * 255, E = m % 6 / 5 * 255;
  return [p, k, E];
};
ne.rgb.hex = function(u) {
  const p = (((Math.round(u[0]) & 255) << 16) + ((Math.round(u[1]) & 255) << 8) + (Math.round(u[2]) & 255)).toString(16).toUpperCase();
  return "000000".slice(p.length) + p;
};
ne.hex.rgb = function(u) {
  const m = u.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
  if (!m)
    return [0, 0, 0];
  let p = m[0];
  m[0].length === 3 && (p = [...p].map((z) => z + z).join(""));
  const k = Number.parseInt(p, 16), E = k >> 16 & 255, D = k >> 8 & 255, I = k & 255;
  return [E, D, I];
};
ne.rgb.hcg = function(u) {
  const m = u[0] / 255, p = u[1] / 255, k = u[2] / 255, E = Math.max(Math.max(m, p), k), D = Math.min(Math.min(m, p), k), I = E - D;
  let z;
  const U = I < 1 ? D / (1 - I) : 0;
  return I <= 0 ? z = 0 : E === m ? z = (p - k) / I % 6 : E === p ? z = 2 + (k - m) / I : z = 4 + (m - p) / I, z /= 6, z %= 1, [z * 360, I * 100, U * 100];
};
ne.hsl.hcg = function(u) {
  const m = u[1] / 100, p = u[2] / 100, k = p < 0.5 ? 2 * m * p : 2 * m * (1 - p);
  let E = 0;
  return k < 1 && (E = (p - 0.5 * k) / (1 - k)), [u[0], k * 100, E * 100];
};
ne.hsv.hcg = function(u) {
  const m = u[1] / 100, p = u[2] / 100, k = m * p;
  let E = 0;
  return k < 1 && (E = (p - k) / (1 - k)), [u[0], k * 100, E * 100];
};
ne.hcg.rgb = function(u) {
  const m = u[0] / 360, p = u[1] / 100, k = u[2] / 100;
  if (p === 0)
    return [k * 255, k * 255, k * 255];
  const E = [0, 0, 0], D = m % 1 * 6, I = D % 1, z = 1 - I;
  let U = 0;
  switch (Math.floor(D)) {
    case 0: {
      E[0] = 1, E[1] = I, E[2] = 0;
      break;
    }
    case 1: {
      E[0] = z, E[1] = 1, E[2] = 0;
      break;
    }
    case 2: {
      E[0] = 0, E[1] = 1, E[2] = I;
      break;
    }
    case 3: {
      E[0] = 0, E[1] = z, E[2] = 1;
      break;
    }
    case 4: {
      E[0] = I, E[1] = 0, E[2] = 1;
      break;
    }
    default:
      E[0] = 1, E[1] = 0, E[2] = z;
  }
  return U = (1 - p) * k, [
    (p * E[0] + U) * 255,
    (p * E[1] + U) * 255,
    (p * E[2] + U) * 255
  ];
};
ne.hcg.hsv = function(u) {
  const m = u[1] / 100, p = u[2] / 100, k = m + p * (1 - m);
  let E = 0;
  return k > 0 && (E = m / k), [u[0], E * 100, k * 100];
};
ne.hcg.hsl = function(u) {
  const m = u[1] / 100, k = u[2] / 100 * (1 - m) + 0.5 * m;
  let E = 0;
  return k > 0 && k < 0.5 ? E = m / (2 * k) : k >= 0.5 && k < 1 && (E = m / (2 * (1 - k))), [u[0], E * 100, k * 100];
};
ne.hcg.hwb = function(u) {
  const m = u[1] / 100, p = u[2] / 100, k = m + p * (1 - m);
  return [u[0], (k - m) * 100, (1 - k) * 100];
};
ne.hwb.hcg = function(u) {
  const m = u[1] / 100, k = 1 - u[2] / 100, E = k - m;
  let D = 0;
  return E < 1 && (D = (k - E) / (1 - E)), [u[0], E * 100, D * 100];
};
ne.apple.rgb = function(u) {
  return [u[0] / 65535 * 255, u[1] / 65535 * 255, u[2] / 65535 * 255];
};
ne.rgb.apple = function(u) {
  return [u[0] / 255 * 65535, u[1] / 255 * 65535, u[2] / 255 * 65535];
};
ne.gray.rgb = function(u) {
  return [u[0] / 100 * 255, u[0] / 100 * 255, u[0] / 100 * 255];
};
ne.gray.hsl = function(u) {
  return [0, 0, u[0]];
};
ne.gray.hsv = ne.gray.hsl;
ne.gray.hwb = function(u) {
  return [0, 100, u[0]];
};
ne.gray.cmyk = function(u) {
  return [0, 0, 0, u[0]];
};
ne.gray.lab = function(u) {
  return [u[0], 0, 0];
};
ne.gray.hex = function(u) {
  const m = Math.round(u[0] / 100 * 255) & 255, k = ((m << 16) + (m << 8) + m).toString(16).toUpperCase();
  return "000000".slice(k.length) + k;
};
ne.rgb.gray = function(u) {
  return [(u[0] + u[1] + u[2]) / 3 / 255 * 100];
};
function md() {
  const u = {}, m = Object.keys(ne);
  for (let { length: p } = m, k = 0; k < p; k++)
    u[m[k]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return u;
}
function vd(u) {
  const m = md(), p = [u];
  for (m[u].distance = 0; p.length > 0; ) {
    const k = p.pop(), E = Object.keys(ne[k]);
    for (let { length: D } = E, I = 0; I < D; I++) {
      const z = E[I], U = m[z];
      U.distance === -1 && (U.distance = m[k].distance + 1, U.parent = k, p.unshift(z));
    }
  }
  return m;
}
function gd(u, m) {
  return function(p) {
    return m(u(p));
  };
}
function yd(u, m) {
  const p = [m[u].parent, u];
  let k = ne[m[u].parent][u], E = m[u].parent;
  for (; m[E].parent; )
    p.unshift(m[E].parent), k = gd(ne[m[E].parent][E], k), E = m[E].parent;
  return k.conversion = p, k;
}
function bd(u) {
  const m = vd(u), p = {}, k = Object.keys(m);
  for (let { length: E } = k, D = 0; D < E; D++) {
    const I = k[D];
    m[I].parent !== null && (p[I] = yd(I, m));
  }
  return p;
}
const ct = {}, kd = Object.keys(ne);
function wd(u) {
  const m = function(...p) {
    const k = p[0];
    return k == null ? k : (k.length > 1 && (p = k), u(p));
  };
  return "conversion" in u && (m.conversion = u.conversion), m;
}
function Ed(u) {
  const m = function(...p) {
    const k = p[0];
    if (k == null)
      return k;
    k.length > 1 && (p = k);
    const E = u(p);
    if (typeof E == "object")
      for (let { length: D } = E, I = 0; I < D; I++)
        E[I] = Math.round(E[I]);
    return E;
  };
  return "conversion" in u && (m.conversion = u.conversion), m;
}
for (const u of kd) {
  ct[u] = {}, Object.defineProperty(ct[u], "channels", { value: ne[u].channels }), Object.defineProperty(ct[u], "labels", { value: ne[u].labels });
  const m = bd(u), p = Object.keys(m);
  for (const k of p) {
    const E = m[k];
    ct[u][k] = Ed(E), ct[u][k].raw = wd(E);
  }
}
const ff = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], du = {};
for (const u of Object.keys(ct))
  du[[...ct[u].labels].sort().join("")] = u;
const pu = {};
function ut(u, m) {
  if (!(this instanceof ut))
    return new ut(u, m);
  if (m && m in ff && (m = null), m && !(m in ct))
    throw new Error("Unknown model: " + m);
  let p, k;
  if (u == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (u instanceof ut)
    this.model = u.model, this.color = [...u.color], this.valpha = u.valpha;
  else if (typeof u == "string") {
    const E = rt.get(u);
    if (E === null)
      throw new Error("Unable to parse color from string: " + u);
    this.model = E.model, k = ct[this.model].channels, this.color = E.value.slice(0, k), this.valpha = typeof E.value[k] == "number" ? E.value[k] : 1;
  } else if (u.length > 0) {
    this.model = m || "rgb", k = ct[this.model].channels;
    const E = Array.prototype.slice.call(u, 0, k);
    this.color = hu(E, k), this.valpha = typeof u[k] == "number" ? u[k] : 1;
  } else if (typeof u == "number")
    this.model = "rgb", this.color = [
      u >> 16 & 255,
      u >> 8 & 255,
      u & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const E = Object.keys(u);
    "alpha" in u && (E.splice(E.indexOf("alpha"), 1), this.valpha = typeof u.alpha == "number" ? u.alpha : 0);
    const D = E.sort().join("");
    if (!(D in du))
      throw new Error("Unable to parse color from object: " + JSON.stringify(u));
    this.model = du[D];
    const { labels: I } = ct[this.model], z = [];
    for (p = 0; p < I.length; p++)
      z.push(u[I[p]]);
    this.color = hu(z);
  }
  if (pu[this.model])
    for (k = ct[this.model].channels, p = 0; p < k; p++) {
      const E = pu[this.model][p];
      E && (this.color[p] = E(this.color[p]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
ut.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(u) {
    let m = this.model in rt.to ? this : this.rgb();
    m = m.round(typeof u == "number" ? u : 1);
    const p = m.valpha === 1 ? m.color : [...m.color, this.valpha];
    return rt.to[m.model](...p);
  },
  percentString(u) {
    const m = this.rgb().round(typeof u == "number" ? u : 1), p = m.valpha === 1 ? m.color : [...m.color, this.valpha];
    return rt.to.rgb.percent(...p);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const u = {}, { channels: m } = ct[this.model], { labels: p } = ct[this.model];
    for (let k = 0; k < m; k++)
      u[p[k]] = this.color[k];
    return this.valpha !== 1 && (u.alpha = this.valpha), u;
  },
  unitArray() {
    const u = this.rgb().color;
    return u[0] /= 255, u[1] /= 255, u[2] /= 255, this.valpha !== 1 && u.push(this.valpha), u;
  },
  unitObject() {
    const u = this.rgb().object();
    return u.r /= 255, u.g /= 255, u.b /= 255, this.valpha !== 1 && (u.alpha = this.valpha), u;
  },
  round(u) {
    return u = Math.max(u || 0, 0), new ut([...this.color.map(Sd(u)), this.valpha], this.model);
  },
  alpha(u) {
    return u !== void 0 ? new ut([...this.color, Math.max(0, Math.min(1, u))], this.model) : this.valpha;
  },
  // Rgb
  red: Xe("rgb", 0, nt(255)),
  green: Xe("rgb", 1, nt(255)),
  blue: Xe("rgb", 2, nt(255)),
  hue: Xe(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (u) => (u % 360 + 360) % 360),
  saturationl: Xe("hsl", 1, nt(100)),
  lightness: Xe("hsl", 2, nt(100)),
  saturationv: Xe("hsv", 1, nt(100)),
  value: Xe("hsv", 2, nt(100)),
  chroma: Xe("hcg", 1, nt(100)),
  gray: Xe("hcg", 2, nt(100)),
  white: Xe("hwb", 1, nt(100)),
  wblack: Xe("hwb", 2, nt(100)),
  cyan: Xe("cmyk", 0, nt(100)),
  magenta: Xe("cmyk", 1, nt(100)),
  yellow: Xe("cmyk", 2, nt(100)),
  black: Xe("cmyk", 3, nt(100)),
  x: Xe("xyz", 0, nt(95.047)),
  y: Xe("xyz", 1, nt(100)),
  z: Xe("xyz", 2, nt(108.833)),
  l: Xe("lab", 0, nt(100)),
  a: Xe("lab", 1),
  b: Xe("lab", 2),
  keyword(u) {
    return u !== void 0 ? new ut(u) : ct[this.model].keyword(this.color);
  },
  hex(u) {
    return u !== void 0 ? new ut(u) : rt.to.hex(...this.rgb().round().color);
  },
  hexa(u) {
    if (u !== void 0)
      return new ut(u);
    const m = this.rgb().round().color;
    let p = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return p.length === 1 && (p = "0" + p), rt.to.hex(...m) + p;
  },
  rgbNumber() {
    const u = this.rgb().color;
    return (u[0] & 255) << 16 | (u[1] & 255) << 8 | u[2] & 255;
  },
  luminosity() {
    const u = this.rgb().color, m = [];
    for (const [p, k] of u.entries()) {
      const E = k / 255;
      m[p] = E <= 0.04045 ? E / 12.92 : ((E + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2];
  },
  contrast(u) {
    const m = this.luminosity(), p = u.luminosity();
    return m > p ? (m + 0.05) / (p + 0.05) : (p + 0.05) / (m + 0.05);
  },
  level(u) {
    const m = this.contrast(u);
    return m >= 7 ? "AAA" : m >= 4.5 ? "AA" : "";
  },
  isDark() {
    const u = this.rgb().color;
    return (u[0] * 2126 + u[1] * 7152 + u[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const u = this.rgb();
    for (let m = 0; m < 3; m++)
      u.color[m] = 255 - u.color[m];
    return u;
  },
  lighten(u) {
    const m = this.hsl();
    return m.color[2] += m.color[2] * u, m;
  },
  darken(u) {
    const m = this.hsl();
    return m.color[2] -= m.color[2] * u, m;
  },
  saturate(u) {
    const m = this.hsl();
    return m.color[1] += m.color[1] * u, m;
  },
  desaturate(u) {
    const m = this.hsl();
    return m.color[1] -= m.color[1] * u, m;
  },
  whiten(u) {
    const m = this.hwb();
    return m.color[1] += m.color[1] * u, m;
  },
  blacken(u) {
    const m = this.hwb();
    return m.color[2] += m.color[2] * u, m;
  },
  grayscale() {
    const u = this.rgb().color, m = u[0] * 0.3 + u[1] * 0.59 + u[2] * 0.11;
    return ut.rgb(m, m, m);
  },
  fade(u) {
    return this.alpha(this.valpha - this.valpha * u);
  },
  opaquer(u) {
    return this.alpha(this.valpha + this.valpha * u);
  },
  rotate(u) {
    const m = this.hsl();
    let p = m.color[0];
    return p = (p + u) % 360, p = p < 0 ? 360 + p : p, m.color[0] = p, m;
  },
  mix(u, m) {
    if (!u || !u.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof u);
    const p = u.rgb(), k = this.rgb(), E = m === void 0 ? 0.5 : m, D = 2 * E - 1, I = p.alpha() - k.alpha(), z = ((D * I === -1 ? D : (D + I) / (1 + D * I)) + 1) / 2, U = 1 - z;
    return ut.rgb(
      z * p.red() + U * k.red(),
      z * p.green() + U * k.green(),
      z * p.blue() + U * k.blue(),
      p.alpha() * E + k.alpha() * (1 - E)
    );
  }
};
for (const u of Object.keys(ct)) {
  if (ff.includes(u))
    continue;
  const { channels: m } = ct[u];
  ut.prototype[u] = function(...p) {
    return this.model === u ? new ut(this) : p.length > 0 ? new ut(p, u) : new ut([...xd(ct[this.model][u].raw(this.color)), this.valpha], u);
  }, ut[u] = function(...p) {
    let k = p[0];
    return typeof k == "number" && (k = hu(p, m)), new ut(k, u);
  };
}
function _d(u, m) {
  return Number(u.toFixed(m));
}
function Sd(u) {
  return function(m) {
    return _d(m, u);
  };
}
function Xe(u, m, p) {
  u = Array.isArray(u) ? u : [u];
  for (const k of u)
    (pu[k] ||= [])[m] = p;
  return u = u[0], function(k) {
    let E;
    return k !== void 0 ? (p && (k = p(k)), E = this[u](), E.color[m] = k, E) : (E = this[u]().color[m], p && (E = p(E)), E);
  };
}
function nt(u) {
  return function(m) {
    return Math.max(0, Math.min(u, m));
  };
}
function xd(u) {
  return Array.isArray(u) ? u : [u];
}
function hu(u, m) {
  for (let p = 0; p < m; p++)
    typeof u[p] != "number" && (u[p] = 0);
  return u;
}
function Cd(u) {
  try {
    return ut(u).luminosity() > 0.5;
  } catch {
    return !0;
  }
}
const jd = ({
  json_data: u,
  name: m,
  collapsed: p,
  theme: k,
  display_data_types: E,
  display_object_size: D,
  enable_clipboard: I,
  sort_keys: z,
  editable: U,
  setStateValue: Y
}) => {
  const oe = tn.useRef(!1), q = tn.useRef(null), [R, ke] = tn.useState(() => (oe.current = !0, Y("data", u), u)), [y, S] = tn.useState("rjv-default"), x = tn.useRef("");
  tn.useEffect(() => {
    if (!q.current) return;
    const K = q.current.getRootNode()?.host ?? q.current, J = () => {
      const me = getComputedStyle(K).getPropertyValue("--st-background-color").trim();
      if (me && me !== x.current) {
        x.current = me;
        const se = Cd(me);
        S(se ? "rjv-default" : "monokai");
      }
    };
    J();
    const fe = setInterval(J, 100);
    return () => clearInterval(fe);
  }, []);
  const O = k || y, v = tn.useMemo(
    () => ({
      fontFamily: "var(--st-font)",
      fontSize: "0.875rem",
      lineHeight: 1.5
    }),
    []
  ), A = tn.useCallback(
    (P) => (ke(P.updated_src), Y("data", P.updated_src), !0),
    [Y]
  ), h = tn.useCallback(
    (P) => (ke(P.updated_src), Y("data", P.updated_src), !0),
    [Y]
  ), F = tn.useCallback(
    (P) => (ke(P.updated_src), Y("data", P.updated_src), !0),
    [Y]
  ), f = m === null ? !1 : m;
  return /* @__PURE__ */ gi.jsx("div", { ref: q, style: v, children: /* @__PURE__ */ gi.jsx(
    pd,
    {
      src: R,
      name: f,
      collapsed: p,
      theme: O,
      displayDataTypes: E,
      displayObjectSize: D,
      enableClipboard: I,
      sortKeys: z,
      onEdit: U ? A : !1,
      onAdd: U ? h : !1,
      onDelete: U ? F : !1,
      style: {
        backgroundColor: "transparent",
        fontFamily: "var(--st-code-font)"
      }
    }
  ) });
}, mi = /* @__PURE__ */ new WeakMap(), Od = (u) => {
  const { data: m, parentElement: p, setStateValue: k } = u, E = p.querySelector(".react-root");
  if (!E)
    throw new Error("Unexpected: React root element not found");
  let D = mi.get(p);
  D || (D = ud.createRoot(E), mi.set(p, D));
  const {
    json_data: I,
    name: z,
    collapsed: U,
    theme: Y,
    display_data_types: oe,
    display_object_size: q,
    enable_clipboard: R,
    sort_keys: ke,
    editable: y
  } = m;
  return D.render(
    /* @__PURE__ */ gi.jsx(tn.StrictMode, { children: /* @__PURE__ */ gi.jsx(
      jd,
      {
        setStateValue: k,
        json_data: I,
        name: z,
        collapsed: U,
        theme: Y,
        display_data_types: oe,
        display_object_size: q,
        enable_clipboard: R,
        sort_keys: ke,
        editable: y
      }
    ) })
  ), () => {
    const S = mi.get(p);
    S && (S.unmount(), mi.delete(p));
  };
};
export {
  Od as default
};
