import {
  c as wm,
  j as c,
  B as U,
  A as Jm,
  T as Wm,
  I as ue,
  M as km,
  a as H,
  D as Fr,
  F as Fm,
  b as Ne,
  L as $m,
  d as Im,
  e as Pm,
  f as ly,
  O as Jf,
  g as ty,
  Q as d0,
  V as ie,
  h as r0,
  S as h0,
  i as m0,
  R as y0,
  C as v0,
  G as g0,
  k as ri,
  l as yt,
  P as nt,
  m as ey,
  n as Al,
  o as Wl,
  p as qt,
  q as la,
  r as Hl,
  s as b0,
  t as ay,
  u as Rn,
  v as qn,
  w as Yn,
  x as Ht,
  y as Z,
  z as Gn,
  E as x0,
  H as Rt,
  J as hi,
  K as Be,
  N as mi,
  U as yi,
  W as vi,
  X as gi,
  Y as bi,
  Z as Qn,
  _ as Xn,
  $ as Zn,
  a0 as ae,
  a1 as xi,
  a2 as ny,
  a3 as S0,
  a4 as uy,
  a5 as $r,
  a6 as iy,
  a7 as cy,
  a8 as fy,
  a9 as sy,
  aa as oy,
} from "./vendor-mui-DR75qnwg.js";
import {
  d as dy,
  e as ry,
  r as A,
  u as p0,
  L as wf,
  B as hy,
  f as my,
  g as Dt,
} from "./vendor-react-BEvt7DW7.js";
import { l as yy } from "./vendor-socket-DdI-Egwi.js";
(function () {
  const C = document.createElement("link").relList;
  if (C && C.supports && C.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) d(E);
  new MutationObserver((E) => {
    for (const N of E)
      if (N.type === "childList")
        for (const w of N.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && d(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function T(E) {
    const N = {};
    return (
      E.integrity && (N.integrity = E.integrity),
      E.referrerPolicy && (N.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (N.credentials = "include")
        : E.crossOrigin === "anonymous"
          ? (N.credentials = "omit")
          : (N.credentials = "same-origin"),
      N
    );
  }
  function d(E) {
    if (E.ep) return;
    E.ep = !0;
    const N = T(E);
    fetch(E.href, N);
  }
})();
var Xf = { exports: {} },
  Bn = {},
  Zf = { exports: {} },
  Vf = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function vy() {
  return (
    Ir ||
      ((Ir = 1),
      (function (h) {
        function C(S, D) {
          var K = S.length;
          S.push(D);
          l: for (; 0 < K; ) {
            var yl = (K - 1) >>> 1,
              vl = S[yl];
            if (0 < E(vl, D)) (S[yl] = D), (S[K] = vl), (K = yl);
            else break l;
          }
        }
        function T(S) {
          return S.length === 0 ? null : S[0];
        }
        function d(S) {
          if (S.length === 0) return null;
          var D = S[0],
            K = S.pop();
          if (K !== D) {
            S[0] = K;
            l: for (var yl = 0, vl = S.length, kl = vl >>> 1; yl < kl; ) {
              var Sl = 2 * (yl + 1) - 1,
                il = S[Sl],
                Rl = Sl + 1,
                Ot = S[Rl];
              if (0 > E(il, K))
                Rl < vl && 0 > E(Ot, il)
                  ? ((S[yl] = Ot), (S[Rl] = K), (yl = Rl))
                  : ((S[yl] = il), (S[Sl] = K), (yl = Sl));
              else if (Rl < vl && 0 > E(Ot, K))
                (S[yl] = Ot), (S[Rl] = K), (yl = Rl);
              else break l;
            }
          }
          return D;
        }
        function E(S, D) {
          var K = S.sortIndex - D.sortIndex;
          return K !== 0 ? K : S.id - D.id;
        }
        if (
          ((h.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var N = performance;
          h.unstable_now = function () {
            return N.now();
          };
        } else {
          var w = Date,
            V = w.now();
          h.unstable_now = function () {
            return w.now() - V;
          };
        }
        var W = [],
          Y = [],
          q = 1,
          M = null,
          j = 3,
          Q = !1,
          X = !1,
          F = !1,
          wl = !1,
          Jl = typeof setTimeout == "function" ? setTimeout : null,
          Gl = typeof clearTimeout == "function" ? clearTimeout : null,
          Ml = typeof setImmediate < "u" ? setImmediate : null;
        function L(S) {
          for (var D = T(Y); D !== null; ) {
            if (D.callback === null) d(Y);
            else if (D.startTime <= S)
              d(Y), (D.sortIndex = D.expirationTime), C(W, D);
            else break;
            D = T(Y);
          }
        }
        function O(S) {
          if (((F = !1), L(S), !X))
            if (T(W) !== null) (X = !0), el || ((el = !0), Ql());
            else {
              var D = T(Y);
              D !== null && Yt(O, D.startTime - S);
            }
        }
        var el = !1,
          pl = -1,
          Cl = 5,
          z = -1;
        function rl() {
          return wl ? !0 : !(h.unstable_now() - z < Cl);
        }
        function ml() {
          if (((wl = !1), el)) {
            var S = h.unstable_now();
            z = S;
            var D = !0;
            try {
              l: {
                (X = !1), F && ((F = !1), Gl(pl), (pl = -1)), (Q = !0);
                var K = j;
                try {
                  t: {
                    for (
                      L(S), M = T(W);
                      M !== null && !(M.expirationTime > S && rl());
                    ) {
                      var yl = M.callback;
                      if (typeof yl == "function") {
                        (M.callback = null), (j = M.priorityLevel);
                        var vl = yl(M.expirationTime <= S);
                        if (((S = h.unstable_now()), typeof vl == "function")) {
                          (M.callback = vl), L(S), (D = !0);
                          break t;
                        }
                        M === T(W) && d(W), L(S);
                      } else d(W);
                      M = T(W);
                    }
                    if (M !== null) D = !0;
                    else {
                      var kl = T(Y);
                      kl !== null && Yt(O, kl.startTime - S), (D = !1);
                    }
                  }
                  break l;
                } finally {
                  (M = null), (j = K), (Q = !1);
                }
                D = void 0;
              }
            } finally {
              D ? Ql() : (el = !1);
            }
          }
        }
        var Ql;
        if (typeof Ml == "function")
          Ql = function () {
            Ml(ml);
          };
        else if (typeof MessageChannel < "u") {
          var Vn = new MessageChannel(),
            Qa = Vn.port2;
          (Vn.port1.onmessage = ml),
            (Ql = function () {
              Qa.postMessage(null);
            });
        } else
          Ql = function () {
            Jl(ml, 0);
          };
        function Yt(S, D) {
          pl = Jl(function () {
            S(h.unstable_now());
          }, D);
        }
        (h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (h.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Cl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (h.unstable_next = function (S) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = j;
            }
            var K = j;
            j = D;
            try {
              return S();
            } finally {
              j = K;
            }
          }),
          (h.unstable_requestPaint = function () {
            wl = !0;
          }),
          (h.unstable_runWithPriority = function (S, D) {
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
            var K = j;
            j = S;
            try {
              return D();
            } finally {
              j = K;
            }
          }),
          (h.unstable_scheduleCallback = function (S, D, K) {
            var yl = h.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? yl + K : yl))
                : (K = yl),
              S)
            ) {
              case 1:
                var vl = -1;
                break;
              case 2:
                vl = 250;
                break;
              case 5:
                vl = 1073741823;
                break;
              case 4:
                vl = 1e4;
                break;
              default:
                vl = 5e3;
            }
            return (
              (vl = K + vl),
              (S = {
                id: q++,
                callback: D,
                priorityLevel: S,
                startTime: K,
                expirationTime: vl,
                sortIndex: -1,
              }),
              K > yl
                ? ((S.sortIndex = K),
                  C(Y, S),
                  T(W) === null &&
                    S === T(Y) &&
                    (F ? (Gl(pl), (pl = -1)) : (F = !0), Yt(O, K - yl)))
                : ((S.sortIndex = vl),
                  C(W, S),
                  X || Q || ((X = !0), el || ((el = !0), Ql()))),
              S
            );
          }),
          (h.unstable_shouldYield = rl),
          (h.unstable_wrapCallback = function (S) {
            var D = j;
            return function () {
              var K = j;
              j = D;
              try {
                return S.apply(this, arguments);
              } finally {
                j = K;
              }
            };
          });
      })(Vf)),
    Vf
  );
}
var Pr;
function gy() {
  return Pr || ((Pr = 1), (Zf.exports = vy())), Zf.exports;
} /**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l0;
function by() {
  if (l0) return Bn;
  l0 = 1;
  var h = gy(),
    C = dy(),
    T = ry();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function E(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function N(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function w(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function V(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function W(l) {
    if (N(l) !== l) throw Error(d(188));
  }
  function Y(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = N(l)), t === null)) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return W(n), l;
          if (u === a) return W(n), t;
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (e.return !== a.return) (e = n), (a = u);
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === e) {
            (i = !0), (e = n), (a = u);
            break;
          }
          if (f === a) {
            (i = !0), (a = n), (e = u);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === e) {
              (i = !0), (e = u), (a = n);
              break;
            }
            if (f === a) {
              (i = !0), (a = u), (e = n);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== a) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? l : t;
  }
  function q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = q(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var M = Object.assign,
    j = Symbol.for("react.element"),
    Q = Symbol.for("react.transitional.element"),
    X = Symbol.for("react.portal"),
    F = Symbol.for("react.fragment"),
    wl = Symbol.for("react.strict_mode"),
    Jl = Symbol.for("react.profiler"),
    Gl = Symbol.for("react.consumer"),
    Ml = Symbol.for("react.context"),
    L = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    el = Symbol.for("react.suspense_list"),
    pl = Symbol.for("react.memo"),
    Cl = Symbol.for("react.lazy"),
    z = Symbol.for("react.activity"),
    rl = Symbol.for("react.memo_cache_sentinel"),
    ml = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ml && l[ml]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Vn = Symbol.for("react.client.reference");
  function Qa(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Vn ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case F:
        return "Fragment";
      case Jl:
        return "Profiler";
      case wl:
        return "StrictMode";
      case O:
        return "Suspense";
      case el:
        return "SuspenseList";
      case z:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case X:
          return "Portal";
        case Ml:
          return l.displayName || "Context";
        case Gl:
          return (l._context.displayName || "Context") + ".Consumer";
        case L:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case pl:
          return (
            (t = l.displayName || null), t !== null ? t : Qa(l.type) || "Memo"
          );
        case Cl:
          (t = l._payload), (l = l._init);
          try {
            return Qa(l(t));
          } catch {}
      }
    return null;
  }
  var Yt = Array.isArray,
    S = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    yl = [],
    vl = -1;
  function kl(l) {
    return { current: l };
  }
  function Sl(l) {
    0 > vl || ((l.current = yl[vl]), (yl[vl] = null), vl--);
  }
  function il(l, t) {
    vl++, (yl[vl] = l.current), (l.current = t);
  }
  var Rl = kl(null),
    Ot = kl(null),
    ce = kl(null),
    Ln = kl(null);
  function Kn(l, t) {
    switch ((il(ce, t), il(Ot, l), il(Rl, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? xr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = xr(t)), (l = Sr(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Sl(Rl), il(Rl, l);
  }
  function ta() {
    Sl(Rl), Sl(Ot), Sl(ce);
  }
  function pi(l) {
    l.memoizedState !== null && il(Ln, l);
    var t = Rl.current,
      e = Sr(t, l.type);
    t !== e && (il(Ot, l), il(Rl, e));
  }
  function wn(l) {
    Ot.current === l && (Sl(Rl), Sl(Ot)),
      Ln.current === l && (Sl(Ln), (On._currentValue = K));
  }
  var ji, Wf;
  function He(l) {
    if (ji === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (ji = (t && t[1]) || ""),
          (Wf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      ji +
      l +
      Wf
    );
  }
  var zi = !1;
  function Ai(l, t) {
    if (!l || zi) return "";
    zi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var p = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(p.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(p, []);
                } catch (g) {
                  var v = g;
                }
                Reflect.construct(l, [], p);
              } else {
                try {
                  p.call();
                } catch (g) {
                  v = g;
                }
                l.call(p.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                v = g;
              }
              (p = l()) &&
                typeof p.catch == "function" &&
                p.catch(function () {});
            }
          } catch (g) {
            if (g && v && typeof g.stack == "string") return [g.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        f = u[1];
      if (i && f) {
        var s = i.split(`
`),
          y = f.split(`
`);
        for (
          n = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === s.length || n === y.length)
          for (
            a = s.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && s[a] !== y[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== y[n])) {
                  var b =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (zi = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? He(e) : "";
  }
  function z0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return He(l.type);
      case 16:
        return He("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? He("Suspense Fallback")
          : He("Suspense");
      case 19:
        return He("SuspenseList");
      case 0:
      case 15:
        return Ai(l.type, !1);
      case 11:
        return Ai(l.type.render, !1);
      case 1:
        return Ai(l.type, !0);
      case 31:
        return He("Activity");
      default:
        return "";
    }
  }
  function kf(l) {
    try {
      var t = "",
        e = null;
      do (t += z0(l, e)), (e = l), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Ti = Object.prototype.hasOwnProperty,
    Ei = h.unstable_scheduleCallback,
    Mi = h.unstable_cancelCallback,
    A0 = h.unstable_shouldYield,
    T0 = h.unstable_requestPaint,
    ut = h.unstable_now,
    E0 = h.unstable_getCurrentPriorityLevel,
    Ff = h.unstable_ImmediatePriority,
    $f = h.unstable_UserBlockingPriority,
    Jn = h.unstable_NormalPriority,
    M0 = h.unstable_LowPriority,
    If = h.unstable_IdlePriority,
    C0 = h.log,
    D0 = h.unstable_setDisableYieldValue,
    Xa = null,
    it = null;
  function fe(l) {
    if (
      (typeof C0 == "function" && D0(l),
      it && typeof it.setStrictMode == "function")
    )
      try {
        it.setStrictMode(Xa, l);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : _0,
    O0 = Math.log,
    U0 = Math.LN2;
  function _0(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((O0(l) / U0) | 0)) | 0;
  }
  var Wn = 256,
    kn = 262144,
    Fn = 4194304;
  function Re(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function $n(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u),
          a !== 0
            ? (n = Re(a))
            : ((i &= f),
              i !== 0
                ? (n = Re(i))
                : e || ((e = f & ~l), e !== 0 && (n = Re(e)))))
        : ((f = a & ~u),
          f !== 0
            ? (n = Re(f))
            : i !== 0
              ? (n = Re(i))
              : e || ((e = a & ~l), e !== 0 && (n = Re(e)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (e = t & -t),
            u >= e || (u === 32 && (e & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Za(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function N0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var l = Fn;
    return (Fn <<= 1), (Fn & 62914560) === 0 && (Fn = 4194304), l;
  }
  function Ci(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Va(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function B0(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      s = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var b = 31 - ct(e),
        p = 1 << b;
      (f[b] = 0), (s[b] = -1);
      var v = y[b];
      if (v !== null)
        for (y[b] = null, b = 0; b < v.length; b++) {
          var g = v[b];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~p;
    }
    a !== 0 && ls(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function ls(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - ct(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930));
  }
  function ts(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ct(e),
        n = 1 << a;
      (n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n);
    }
  }
  function es(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : Di(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function Di(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Oi(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function as() {
    var l = D.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Vr(l.type));
  }
  function ns(l, t) {
    var e = D.p;
    try {
      return (D.p = l), t();
    } finally {
      D.p = e;
    }
  }
  var se = Math.random().toString(36).slice(2),
    Xl = "__reactFiber$" + se,
    $l = "__reactProps$" + se,
    ea = "__reactContainer$" + se,
    Ui = "__reactEvents$" + se,
    H0 = "__reactListeners$" + se,
    R0 = "__reactHandles$" + se,
    us = "__reactResources$" + se,
    La = "__reactMarker$" + se;
  function _i(l) {
    delete l[Xl], delete l[$l], delete l[Ui], delete l[H0], delete l[R0];
  }
  function aa(l) {
    var t = l[Xl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[ea] || e[Xl])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = Mr(l); l !== null; ) {
            if ((e = l[Xl])) return e;
            l = Mr(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function na(l) {
    if ((l = l[Xl] || l[ea])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ka(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function ua(l) {
    var t = l[us];
    return (
      t ||
        (t = l[us] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ql(l) {
    l[La] = !0;
  }
  var is = new Set(),
    cs = {};
  function qe(l, t) {
    ia(l, t), ia(l + "Capture", t);
  }
  function ia(l, t) {
    for (cs[l] = t, l = 0; l < t.length; l++) is.add(t[l]);
  }
  var q0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    fs = {},
    ss = {};
  function Y0(l) {
    return Ti.call(ss, l)
      ? !0
      : Ti.call(fs, l)
        ? !1
        : q0.test(l)
          ? (ss[l] = !0)
          : ((fs[l] = !0), !1);
  }
  function In(l, t, e) {
    if (Y0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Pn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Gt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function vt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function os(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function G0(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (e = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Ni(l) {
    if (!l._valueTracker) {
      var t = os(l) ? "checked" : "value";
      l._valueTracker = G0(l, t, "" + l[t]);
    }
  }
  function ds(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = os(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function lu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Q0 = /[\n"\\]/g;
  function gt(l) {
    return l.replace(Q0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Bi(l, t, e, a, n, u, i, f) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? Hi(l, i, vt(t))
        : e != null
          ? Hi(l, i, vt(e))
          : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + vt(f))
        : l.removeAttribute("name");
  }
  function rs(l, t, e, a, n, u, i, f) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Ni(l);
        return;
      }
      (e = e != null ? "" + vt(e) : ""),
        (t = t != null ? "" + vt(t) : e),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      Ni(l);
  }
  function Hi(l, t, e) {
    (t === "number" && lu(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function ca(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        (n = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== n && (l[e].selected = n),
          n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + vt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          (l[n].selected = !0), a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hs(l, t, e) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + vt(e) : "";
  }
  function ms(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(d(92));
        if (Yt(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = vt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      Ni(l);
  }
  function fa(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var X0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ys(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || X0.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function vs(l, t, e) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && e[n] !== a && ys(l, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && ys(l, u, t[u]);
  }
  function Ri(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Z0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    V0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function tu(l) {
    return V0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Qt() {}
  var qi = null;
  function Yi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var sa = null,
    oa = null;
  function gs(l) {
    var t = na(l);
    if (t && (l = t.stateNode)) {
      var e = l[$l] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Bi(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + gt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[$l] || null;
                if (!n) throw Error(d(90));
                Bi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && ds(a);
          }
          break l;
        case "textarea":
          hs(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && ca(l, !!e.multiple, t, !1);
      }
    }
  }
  var Gi = !1;
  function bs(l, t, e) {
    if (Gi) return l(t, e);
    Gi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((Gi = !1),
        (sa !== null || oa !== null) &&
          (Zu(), sa && ((t = sa), (l = oa), (oa = sa = null), gs(t), l)))
      )
        for (t = 0; t < l.length; t++) gs(l[t]);
    }
  }
  function wa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[$l] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(d(231, t, typeof e));
    return e;
  }
  var Xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Qi = !1;
  if (Xt)
    try {
      var Ja = {};
      Object.defineProperty(Ja, "passive", {
        get: function () {
          Qi = !0;
        },
      }),
        window.addEventListener("test", Ja, Ja),
        window.removeEventListener("test", Ja, Ja);
    } catch {
      Qi = !1;
    }
  var oe = null,
    Xi = null,
    eu = null;
  function xs() {
    if (eu) return eu;
    var l,
      t = Xi,
      e = t.length,
      a,
      n = "value" in oe ? oe.value : oe.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++);
    return (eu = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function au(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function nu() {
    return !0;
  }
  function Ss() {
    return !1;
  }
  function Il(l) {
    function t(e, a, n, u, i) {
      (this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((e = l[f]), (this[f] = e ? e(u) : u[f]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null
            ? u.defaultPrevented
            : u.returnValue === !1
        )
          ? nu
          : Ss),
        (this.isPropagationStopped = Ss),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = nu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = nu));
        },
        persist: function () {},
        isPersistent: nu,
      }),
      t
    );
  }
  var Ye = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    uu = Il(Ye),
    Wa = M({}, Ye, { view: 0, detail: 0 }),
    L0 = Il(Wa),
    Zi,
    Vi,
    ka,
    iu = M({}, Wa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ki,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== ka &&
              (ka && l.type === "mousemove"
                ? ((Zi = l.screenX - ka.screenX), (Vi = l.screenY - ka.screenY))
                : (Vi = Zi = 0),
              (ka = l)),
            Zi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Vi;
      },
    }),
    ps = Il(iu),
    K0 = M({}, iu, { dataTransfer: 0 }),
    w0 = Il(K0),
    J0 = M({}, Wa, { relatedTarget: 0 }),
    Li = Il(J0),
    W0 = M({}, Ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k0 = Il(W0),
    F0 = M({}, Ye, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    $0 = Il(F0),
    I0 = M({}, Ye, { data: 0 }),
    js = Il(I0),
    P0 = {
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
      MozPrintableKey: "Unidentified",
    },
    lh = {
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
      224: "Meta",
    },
    th = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function eh(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = th[l])
        ? !!t[l]
        : !1;
  }
  function Ki() {
    return eh;
  }
  var ah = M({}, Wa, {
      key: function (l) {
        if (l.key) {
          var t = P0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = au(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? lh[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ki,
      charCode: function (l) {
        return l.type === "keypress" ? au(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? au(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    nh = Il(ah),
    uh = M({}, iu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zs = Il(uh),
    ih = M({}, Wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ki,
    }),
    ch = Il(ih),
    fh = M({}, Ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sh = Il(fh),
    oh = M({}, iu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    dh = Il(oh),
    rh = M({}, Ye, { newState: 0, oldState: 0 }),
    hh = Il(rh),
    mh = [9, 13, 27, 32],
    wi = Xt && "CompositionEvent" in window,
    Fa = null;
  Xt && "documentMode" in document && (Fa = document.documentMode);
  var yh = Xt && "TextEvent" in window && !Fa,
    As = Xt && (!wi || (Fa && 8 < Fa && 11 >= Fa)),
    Ts = " ",
    Es = !1;
  function Ms(l, t) {
    switch (l) {
      case "keyup":
        return mh.indexOf(t.keyCode) !== -1;
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
  function Cs(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var da = !1;
  function vh(l, t) {
    switch (l) {
      case "compositionend":
        return Cs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Es = !0), Ts);
      case "textInput":
        return (l = t.data), l === Ts && Es ? null : l;
      default:
        return null;
    }
  }
  function gh(l, t) {
    if (da)
      return l === "compositionend" || (!wi && Ms(l, t))
        ? ((l = xs()), (eu = Xi = oe = null), (da = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return As && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var bh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ds(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!bh[l.type] : t === "textarea";
  }
  function Os(l, t, e, a) {
    sa ? (oa ? oa.push(a) : (oa = [a])) : (sa = a),
      (t = ku(t, "onChange")),
      0 < t.length &&
        ((e = new uu("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var $a = null,
    Ia = null;
  function xh(l) {
    hr(l, 0);
  }
  function cu(l) {
    var t = Ka(l);
    if (ds(t)) return l;
  }
  function Us(l, t) {
    if (l === "change") return t;
  }
  var _s = !1;
  if (Xt) {
    var Ji;
    if (Xt) {
      var Wi = "oninput" in document;
      if (!Wi) {
        var Ns = document.createElement("div");
        Ns.setAttribute("oninput", "return;"),
          (Wi = typeof Ns.oninput == "function");
      }
      Ji = Wi;
    } else Ji = !1;
    _s = Ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Bs() {
    $a && ($a.detachEvent("onpropertychange", Hs), (Ia = $a = null));
  }
  function Hs(l) {
    if (l.propertyName === "value" && cu(Ia)) {
      var t = [];
      Os(t, Ia, l, Yi(l)), bs(xh, t);
    }
  }
  function Sh(l, t, e) {
    l === "focusin"
      ? (Bs(), ($a = t), (Ia = e), $a.attachEvent("onpropertychange", Hs))
      : l === "focusout" && Bs();
  }
  function ph(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return cu(Ia);
  }
  function jh(l, t) {
    if (l === "click") return cu(t);
  }
  function zh(l, t) {
    if (l === "input" || l === "change") return cu(t);
  }
  function Ah(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : Ah;
  function Pa(l, t) {
    if (ft(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Ti.call(t, n) || !ft(l[n], t[n])) return !1;
    }
    return !0;
  }
  function Rs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function qs(l, t) {
    var e = Rs(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Rs(e);
    }
  }
  function Ys(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ys(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Gs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = lu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = lu(l.document);
    }
    return t;
  }
  function ki(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Th = Xt && "documentMode" in document && 11 >= document.documentMode,
    ra = null,
    Fi = null,
    ln = null,
    $i = !1;
  function Qs(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    $i ||
      ra == null ||
      ra !== lu(a) ||
      ((a = ra),
      "selectionStart" in a && ki(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ln && Pa(ln, a)) ||
        ((ln = a),
        (a = ku(Fi, "onSelect")),
        0 < a.length &&
          ((t = new uu("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ra))));
  }
  function Ge(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ha = {
      animationend: Ge("Animation", "AnimationEnd"),
      animationiteration: Ge("Animation", "AnimationIteration"),
      animationstart: Ge("Animation", "AnimationStart"),
      transitionrun: Ge("Transition", "TransitionRun"),
      transitionstart: Ge("Transition", "TransitionStart"),
      transitioncancel: Ge("Transition", "TransitionCancel"),
      transitionend: Ge("Transition", "TransitionEnd"),
    },
    Ii = {},
    Xs = {};
  Xt &&
    ((Xs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ha.animationend.animation,
      delete ha.animationiteration.animation,
      delete ha.animationstart.animation),
    "TransitionEvent" in window || delete ha.transitionend.transition);
  function Qe(l) {
    if (Ii[l]) return Ii[l];
    if (!ha[l]) return l;
    var t = ha[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in Xs) return (Ii[l] = t[e]);
    return l;
  }
  var Zs = Qe("animationend"),
    Vs = Qe("animationiteration"),
    Ls = Qe("animationstart"),
    Eh = Qe("transitionrun"),
    Mh = Qe("transitionstart"),
    Ch = Qe("transitioncancel"),
    Ks = Qe("transitionend"),
    ws = new Map(),
    Pi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Pi.push("scrollEnd");
  function Et(l, t) {
    ws.set(l, t), qe(t, [l]);
  }
  var fu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    bt = [],
    ma = 0,
    lc = 0;
  function su() {
    for (var l = ma, t = (lc = ma = 0); t < l; ) {
      var e = bt[t];
      bt[t++] = null;
      var a = bt[t];
      bt[t++] = null;
      var n = bt[t];
      bt[t++] = null;
      var u = bt[t];
      if (((bt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && Js(e, n, u);
    }
  }
  function ou(l, t, e, a) {
    (bt[ma++] = l),
      (bt[ma++] = t),
      (bt[ma++] = e),
      (bt[ma++] = a),
      (lc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function tc(l, t, e, a) {
    return ou(l, t, e, a), du(l);
  }
  function Xe(l, t) {
    return ou(l, null, null, t), du(l);
  }
  function Js(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      (u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return);
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ct(e)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        u)
      : null;
  }
  function du(l) {
    if (50 < zn) throw ((zn = 0), (df = null), Error(d(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ya = {};
  function Dh(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(l, t, e, a) {
    return new Dh(l, t, e, a);
  }
  function ec(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Zt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = st(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Ws(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function ru(l, t, e, a, n, u) {
    var i = 0;
    if (((a = l), typeof l == "function")) ec(l) && (i = 1);
    else if (typeof l == "string")
      i = Bm(l, e, Rl.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case z:
          return (l = st(31, e, t, n)), (l.elementType = z), (l.lanes = u), l;
        case F:
          return Ze(e.children, n, u, t);
        case wl:
          (i = 8), (n |= 24);
          break;
        case Jl:
          return (
            (l = st(12, e, t, n | 2)), (l.elementType = Jl), (l.lanes = u), l
          );
        case O:
          return (l = st(13, e, t, n)), (l.elementType = O), (l.lanes = u), l;
        case el:
          return (l = st(19, e, t, n)), (l.elementType = el), (l.lanes = u), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ml:
                i = 10;
                break l;
              case Gl:
                i = 9;
                break l;
              case L:
                i = 11;
                break l;
              case pl:
                i = 14;
                break l;
              case Cl:
                (i = 16), (a = null);
                break l;
            }
          (i = 29),
            (e = Error(d(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = st(i, e, t, n)), (t.elementType = l), (t.type = a), (t.lanes = u), t
    );
  }
  function Ze(l, t, e, a) {
    return (l = st(7, l, a, t)), (l.lanes = e), l;
  }
  function ac(l, t, e) {
    return (l = st(6, l, null, t)), (l.lanes = e), l;
  }
  function ks(l) {
    var t = st(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function nc(l, t, e) {
    return (
      (t = st(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Fs = new WeakMap();
  function xt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Fs.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: kf(t) }), Fs.set(l, t), t);
    }
    return { value: l, source: t, stack: kf(t) };
  }
  var va = [],
    ga = 0,
    hu = null,
    tn = 0,
    St = [],
    pt = 0,
    de = null,
    Ut = 1,
    _t = "";
  function Vt(l, t) {
    (va[ga++] = tn), (va[ga++] = hu), (hu = l), (tn = t);
  }
  function $s(l, t, e) {
    (St[pt++] = Ut), (St[pt++] = _t), (St[pt++] = de), (de = l);
    var a = Ut;
    l = _t;
    var n = 32 - ct(a) - 1;
    (a &= ~(1 << n)), (e += 1);
    var u = 32 - ct(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ut = (1 << (32 - ct(t) + n)) | (e << n) | a),
        (_t = u + l);
    } else (Ut = (1 << u) | (e << n) | a), (_t = l);
  }
  function uc(l) {
    l.return !== null && (Vt(l, 1), $s(l, 1, 0));
  }
  function ic(l) {
    for (; l === hu; )
      (hu = va[--ga]), (va[ga] = null), (tn = va[--ga]), (va[ga] = null);
    for (; l === de; )
      (de = St[--pt]),
        (St[pt] = null),
        (_t = St[--pt]),
        (St[pt] = null),
        (Ut = St[--pt]),
        (St[pt] = null);
  }
  function Is(l, t) {
    (St[pt++] = Ut),
      (St[pt++] = _t),
      (St[pt++] = de),
      (Ut = t.id),
      (_t = t.overflow),
      (de = l);
  }
  var Zl = null,
    gl = null,
    tl = !1,
    re = null,
    jt = !1,
    cc = Error(d(519));
  function he(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (en(xt(t, l)), cc);
  }
  function Ps(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Xl] = l), (t[$l] = a), e)) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Tn.length; e++) I(Tn[e], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t),
          rs(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          );
        break;
      case "select":
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), ms(t, a.value, a.defaultValue, a.children);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      gr(t.textContent, e)
        ? (a.popover != null && (I("beforetoggle", t), I("toggle", t)),
          a.onScroll != null && I("scroll", t),
          a.onScrollEnd != null && I("scrollend", t),
          a.onClick != null && (t.onclick = Qt),
          (t = !0))
        : (t = !1),
      t || he(l, !0);
  }
  function lo(l) {
    for (Zl = l.return; Zl; )
      switch (Zl.tag) {
        case 5:
        case 31:
        case 13:
          jt = !1;
          return;
        case 27:
        case 3:
          jt = !0;
          return;
        default:
          Zl = Zl.return;
      }
  }
  function ba(l) {
    if (l !== Zl) return !1;
    if (!tl) return lo(l), (tl = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Ef(l.type, l.memoizedProps))),
        (e = !e)),
      e && gl && he(l),
      lo(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      gl = Er(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      gl = Er(l);
    } else
      t === 27
        ? ((t = gl), Me(l.type) ? ((l = Uf), (Uf = null), (gl = l)) : (gl = t))
        : (gl = Zl ? At(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ve() {
    (gl = Zl = null), (tl = !1);
  }
  function fc() {
    var l = re;
    return (
      l !== null &&
        (et === null ? (et = l) : et.push.apply(et, l), (re = null)),
      l
    );
  }
  function en(l) {
    re === null ? (re = [l]) : re.push(l);
  }
  var sc = kl(null),
    Le = null,
    Lt = null;
  function me(l, t, e) {
    il(sc, t._currentValue), (t._currentValue = e);
  }
  function Kt(l) {
    (l._currentValue = sc.current), Sl(sc);
  }
  function oc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function dc(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var s = 0; s < t.length; s++)
            if (f.context === t[s]) {
              (u.lanes |= e),
                (f = u.alternate),
                f !== null && (f.lanes |= e),
                oc(u.return, e, l),
                a || (i = null);
              break l;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(d(341));
        (i.lanes |= e),
          (u = i.alternate),
          u !== null && (u.lanes |= e),
          oc(i, e, l),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function xa(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = n.type;
          ft(n.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (n === Ln.current) {
        if (((i = n.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(On) : (l = [On]));
      }
      n = n.return;
    }
    l !== null && dc(t, l, e, a), (t.flags |= 262144);
  }
  function mu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ke(l) {
    (Le = l),
      (Lt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Vl(l) {
    return to(Le, l);
  }
  function yu(l, t) {
    return Le === null && Ke(l), to(l, t);
  }
  function to(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Lt === null)) {
      if (l === null) throw Error(d(308));
      (Lt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Lt = Lt.next = t;
    return e;
  }
  var Oh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    Uh = h.unstable_scheduleCallback,
    _h = h.unstable_NormalPriority,
    Dl = {
      $$typeof: Ml,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function rc() {
    return { controller: new Oh(), data: new Map(), refCount: 0 };
  }
  function an(l) {
    l.refCount--,
      l.refCount === 0 &&
        Uh(_h, function () {
          l.controller.abort();
        });
  }
  var nn = null,
    hc = 0,
    Sa = 0,
    pa = null;
  function Nh(l, t) {
    if (nn === null) {
      var e = (nn = []);
      (hc = 0),
        (Sa = gf()),
        (pa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return hc++, t.then(eo, eo), t;
  }
  function eo() {
    if (--hc === 0 && nn !== null) {
      pa !== null && (pa.status = "fulfilled");
      var l = nn;
      (nn = null), (Sa = 0), (pa = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bh(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        },
      ),
      a
    );
  }
  var ao = S.S;
  S.S = function (l, t) {
    (Xd = ut()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Nh(l, t),
      ao !== null && ao(l, t);
  };
  var we = kl(null);
  function mc() {
    var l = we.current;
    return l !== null ? l : hl.pooledCache;
  }
  function vu(l, t) {
    t === null ? il(we, we.current) : il(we, t.pool);
  }
  function no() {
    var l = mc();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var ja = Error(d(460)),
    yc = Error(d(474)),
    gu = Error(d(542)),
    bu = { then: function () {} };
  function uo(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function io(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(Qt, Qt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), fo(l), l);
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (((l = hl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(d(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), fo(l), l);
        }
        throw ((We = t), ja);
    }
  }
  function Je(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((We = e), ja)
        : e;
    }
  }
  var We = null;
  function co() {
    if (We === null) throw Error(d(459));
    var l = We;
    return (We = null), l;
  }
  function fo(l) {
    if (l === ja || l === gu) throw Error(d(483));
  }
  var za = null,
    un = 0;
  function xu(l) {
    var t = un;
    return (un += 1), za === null && (za = []), io(za, l, t);
  }
  function cn(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function Su(l, t) {
    throw t.$$typeof === j
      ? Error(d(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function so(l) {
    function t(r, o) {
      if (l) {
        var m = r.deletions;
        m === null ? ((r.deletions = [o]), (r.flags |= 16)) : m.push(o);
      }
    }
    function e(r, o) {
      if (!l) return null;
      for (; o !== null; ) t(r, o), (o = o.sibling);
      return null;
    }
    function a(r) {
      for (var o = new Map(); r !== null; )
        r.key !== null ? o.set(r.key, r) : o.set(r.index, r), (r = r.sibling);
      return o;
    }
    function n(r, o) {
      return (r = Zt(r, o)), (r.index = 0), (r.sibling = null), r;
    }
    function u(r, o, m) {
      return (
        (r.index = m),
        l
          ? ((m = r.alternate),
            m !== null
              ? ((m = m.index), m < o ? ((r.flags |= 67108866), o) : m)
              : ((r.flags |= 67108866), o))
          : ((r.flags |= 1048576), o)
      );
    }
    function i(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function f(r, o, m, x) {
      return o === null || o.tag !== 6
        ? ((o = ac(m, r.mode, x)), (o.return = r), o)
        : ((o = n(o, m)), (o.return = r), o);
    }
    function s(r, o, m, x) {
      var R = m.type;
      return R === F
        ? b(r, o, m.props.children, x, m.key)
        : o !== null &&
            (o.elementType === R ||
              (typeof R == "object" &&
                R !== null &&
                R.$$typeof === Cl &&
                Je(R) === o.type))
          ? ((o = n(o, m.props)), cn(o, m), (o.return = r), o)
          : ((o = ru(m.type, m.key, m.props, null, r.mode, x)),
            cn(o, m),
            (o.return = r),
            o);
    }
    function y(r, o, m, x) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== m.containerInfo ||
        o.stateNode.implementation !== m.implementation
        ? ((o = nc(m, r.mode, x)), (o.return = r), o)
        : ((o = n(o, m.children || [])), (o.return = r), o);
    }
    function b(r, o, m, x, R) {
      return o === null || o.tag !== 7
        ? ((o = Ze(m, r.mode, x, R)), (o.return = r), o)
        : ((o = n(o, m)), (o.return = r), o);
    }
    function p(r, o, m) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = ac("" + o, r.mode, m)), (o.return = r), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Q:
            return (
              (m = ru(o.type, o.key, o.props, null, r.mode, m)),
              cn(m, o),
              (m.return = r),
              m
            );
          case X:
            return (o = nc(o, r.mode, m)), (o.return = r), o;
          case Cl:
            return (o = Je(o)), p(r, o, m);
        }
        if (Yt(o) || Ql(o))
          return (o = Ze(o, r.mode, m, null)), (o.return = r), o;
        if (typeof o.then == "function") return p(r, xu(o), m);
        if (o.$$typeof === Ml) return p(r, yu(r, o), m);
        Su(r, o);
      }
      return null;
    }
    function v(r, o, m, x) {
      var R = o !== null ? o.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return R !== null ? null : f(r, o, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Q:
            return m.key === R ? s(r, o, m, x) : null;
          case X:
            return m.key === R ? y(r, o, m, x) : null;
          case Cl:
            return (m = Je(m)), v(r, o, m, x);
        }
        if (Yt(m) || Ql(m)) return R !== null ? null : b(r, o, m, x, null);
        if (typeof m.then == "function") return v(r, o, xu(m), x);
        if (m.$$typeof === Ml) return v(r, o, yu(r, m), x);
        Su(r, m);
      }
      return null;
    }
    function g(r, o, m, x, R) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (r = r.get(m) || null), f(o, r, "" + x, R);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Q:
            return (
              (r = r.get(x.key === null ? m : x.key) || null), s(o, r, x, R)
            );
          case X:
            return (
              (r = r.get(x.key === null ? m : x.key) || null), y(o, r, x, R)
            );
          case Cl:
            return (x = Je(x)), g(r, o, m, x, R);
        }
        if (Yt(x) || Ql(x)) return (r = r.get(m) || null), b(o, r, x, R, null);
        if (typeof x.then == "function") return g(r, o, m, xu(x), R);
        if (x.$$typeof === Ml) return g(r, o, m, yu(o, x), R);
        Su(o, x);
      }
      return null;
    }
    function _(r, o, m, x) {
      for (
        var R = null, al = null, B = o, k = (o = 0), ll = null;
        B !== null && k < m.length;
        k++
      ) {
        B.index > k ? ((ll = B), (B = null)) : (ll = B.sibling);
        var nl = v(r, B, m[k], x);
        if (nl === null) {
          B === null && (B = ll);
          break;
        }
        l && B && nl.alternate === null && t(r, B),
          (o = u(nl, o, k)),
          al === null ? (R = nl) : (al.sibling = nl),
          (al = nl),
          (B = ll);
      }
      if (k === m.length) return e(r, B), tl && Vt(r, k), R;
      if (B === null) {
        for (; k < m.length; k++)
          (B = p(r, m[k], x)),
            B !== null &&
              ((o = u(B, o, k)),
              al === null ? (R = B) : (al.sibling = B),
              (al = B));
        return tl && Vt(r, k), R;
      }
      for (B = a(B); k < m.length; k++)
        (ll = g(B, r, k, m[k], x)),
          ll !== null &&
            (l &&
              ll.alternate !== null &&
              B.delete(ll.key === null ? k : ll.key),
            (o = u(ll, o, k)),
            al === null ? (R = ll) : (al.sibling = ll),
            (al = ll));
      return (
        l &&
          B.forEach(function (_e) {
            return t(r, _e);
          }),
        tl && Vt(r, k),
        R
      );
    }
    function G(r, o, m, x) {
      if (m == null) throw Error(d(151));
      for (
        var R = null, al = null, B = o, k = (o = 0), ll = null, nl = m.next();
        B !== null && !nl.done;
        k++, nl = m.next()
      ) {
        B.index > k ? ((ll = B), (B = null)) : (ll = B.sibling);
        var _e = v(r, B, nl.value, x);
        if (_e === null) {
          B === null && (B = ll);
          break;
        }
        l && B && _e.alternate === null && t(r, B),
          (o = u(_e, o, k)),
          al === null ? (R = _e) : (al.sibling = _e),
          (al = _e),
          (B = ll);
      }
      if (nl.done) return e(r, B), tl && Vt(r, k), R;
      if (B === null) {
        for (; !nl.done; k++, nl = m.next())
          (nl = p(r, nl.value, x)),
            nl !== null &&
              ((o = u(nl, o, k)),
              al === null ? (R = nl) : (al.sibling = nl),
              (al = nl));
        return tl && Vt(r, k), R;
      }
      for (B = a(B); !nl.done; k++, nl = m.next())
        (nl = g(B, r, k, nl.value, x)),
          nl !== null &&
            (l &&
              nl.alternate !== null &&
              B.delete(nl.key === null ? k : nl.key),
            (o = u(nl, o, k)),
            al === null ? (R = nl) : (al.sibling = nl),
            (al = nl));
      return (
        l &&
          B.forEach(function (Km) {
            return t(r, Km);
          }),
        tl && Vt(r, k),
        R
      );
    }
    function dl(r, o, m, x) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === F &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Q:
            l: {
              for (var R = m.key; o !== null; ) {
                if (o.key === R) {
                  if (((R = m.type), R === F)) {
                    if (o.tag === 7) {
                      e(r, o.sibling),
                        (x = n(o, m.props.children)),
                        (x.return = r),
                        (r = x);
                      break l;
                    }
                  } else if (
                    o.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$$typeof === Cl &&
                      Je(R) === o.type)
                  ) {
                    e(r, o.sibling),
                      (x = n(o, m.props)),
                      cn(x, m),
                      (x.return = r),
                      (r = x);
                    break l;
                  }
                  e(r, o);
                  break;
                } else t(r, o);
                o = o.sibling;
              }
              m.type === F
                ? ((x = Ze(m.props.children, r.mode, x, m.key)),
                  (x.return = r),
                  (r = x))
                : ((x = ru(m.type, m.key, m.props, null, r.mode, x)),
                  cn(x, m),
                  (x.return = r),
                  (r = x));
            }
            return i(r);
          case X:
            l: {
              for (R = m.key; o !== null; ) {
                if (o.key === R)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === m.containerInfo &&
                    o.stateNode.implementation === m.implementation
                  ) {
                    e(r, o.sibling),
                      (x = n(o, m.children || [])),
                      (x.return = r),
                      (r = x);
                    break l;
                  } else {
                    e(r, o);
                    break;
                  }
                else t(r, o);
                o = o.sibling;
              }
              (x = nc(m, r.mode, x)), (x.return = r), (r = x);
            }
            return i(r);
          case Cl:
            return (m = Je(m)), dl(r, o, m, x);
        }
        if (Yt(m)) return _(r, o, m, x);
        if (Ql(m)) {
          if (((R = Ql(m)), typeof R != "function")) throw Error(d(150));
          return (m = R.call(m)), G(r, o, m, x);
        }
        if (typeof m.then == "function") return dl(r, o, xu(m), x);
        if (m.$$typeof === Ml) return dl(r, o, yu(r, m), x);
        Su(r, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          o !== null && o.tag === 6
            ? (e(r, o.sibling), (x = n(o, m)), (x.return = r), (r = x))
            : (e(r, o), (x = ac(m, r.mode, x)), (x.return = r), (r = x)),
          i(r))
        : e(r, o);
    }
    return function (r, o, m, x) {
      try {
        un = 0;
        var R = dl(r, o, m, x);
        return (za = null), R;
      } catch (B) {
        if (B === ja || B === gu) throw B;
        var al = st(29, B, null, r.mode);
        return (al.lanes = x), (al.return = r), al;
      } finally {
      }
    };
  }
  var ke = so(!0),
    oo = so(!1),
    ye = !1;
  function vc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ve(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ge(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ul & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = du(l)),
        Js(l, null, e),
        t
      );
    }
    return ou(l, a, t, e), du(l);
  }
  function fn(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), ts(l, e);
    }
  }
  function bc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (e = e.next);
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var xc = !1;
  function sn() {
    if (xc) {
      var l = pa;
      if (l !== null) throw l;
    }
  }
  function on(l, t, e, a) {
    xc = !1;
    var n = l.updateQueue;
    ye = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var s = f,
        y = s.next;
      (s.next = null), i === null ? (u = y) : (i.next = y), (i = s);
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (f = b.lastBaseUpdate),
        f !== i &&
          (f === null ? (b.firstBaseUpdate = y) : (f.next = y),
          (b.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var p = n.baseState;
      (i = 0), (b = y = s = null), (f = u);
      do {
        var v = f.lane & -536870913,
          g = v !== f.lane;
        if (g ? (P & v) === v : (a & v) === v) {
          v !== 0 && v === Sa && (xc = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var _ = l,
              G = f;
            v = t;
            var dl = e;
            switch (G.tag) {
              case 1:
                if (((_ = G.payload), typeof _ == "function")) {
                  p = _.call(dl, p, v);
                  break l;
                }
                p = _;
                break l;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = G.payload),
                  (v = typeof _ == "function" ? _.call(dl, p, v) : _),
                  v == null)
                )
                  break l;
                p = M({}, p, v);
                break l;
              case 2:
                ye = !0;
            }
          }
          (v = f.callback),
            v !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = n.callbacks),
              g === null ? (n.callbacks = [v]) : g.push(v));
        } else
          (g = {
            lane: v,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            b === null ? ((y = b = g), (s = p)) : (b = b.next = g),
            (i |= v);
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          (g = f),
            (f = g.next),
            (g.next = null),
            (n.lastBaseUpdate = g),
            (n.shared.pending = null);
        }
      } while (!0);
      b === null && (s = p),
        (n.baseState = s),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = b),
        u === null && (n.shared.lanes = 0),
        (je |= i),
        (l.lanes = i),
        (l.memoizedState = p);
    }
  }
  function ro(l, t) {
    if (typeof l != "function") throw Error(d(191, l));
    l.call(t);
  }
  function ho(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) ro(e[l], t);
  }
  var Aa = kl(null),
    pu = kl(0);
  function mo(l, t) {
    (l = le), il(pu, l), il(Aa, t), (le = l | t.baseLanes);
  }
  function Sc() {
    il(pu, le), il(Aa, Aa.current);
  }
  function pc() {
    (le = pu.current), Sl(Aa), Sl(pu);
  }
  var ot = kl(null),
    zt = null;
  function be(l) {
    var t = l.alternate;
    il(Tl, Tl.current & 1),
      il(ot, l),
      zt === null &&
        (t === null || Aa.current !== null || t.memoizedState !== null) &&
        (zt = l);
  }
  function jc(l) {
    il(Tl, Tl.current), il(ot, l), zt === null && (zt = l);
  }
  function yo(l) {
    l.tag === 22
      ? (il(Tl, Tl.current), il(ot, l), zt === null && (zt = l))
      : xe();
  }
  function xe() {
    il(Tl, Tl.current), il(ot, ot.current);
  }
  function dt(l) {
    Sl(ot), zt === l && (zt = null), Sl(Tl);
  }
  var Tl = kl(0);
  function ju(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || Df(e) || Of(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var wt = 0,
    J = null,
    sl = null,
    Ol = null,
    zu = !1,
    Ta = !1,
    Fe = !1,
    Au = 0,
    dn = 0,
    Ea = null,
    Hh = 0;
  function jl() {
    throw Error(d(321));
  }
  function zc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ft(l[e], t[e])) return !1;
    return !0;
  }
  function Ac(l, t, e, a, n, u) {
    return (
      (wt = u),
      (J = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? Io : Gc),
      (Fe = !1),
      (u = e(a, n)),
      (Fe = !1),
      Ta && (u = go(t, e, a, n)),
      vo(l),
      u
    );
  }
  function vo(l) {
    S.H = mn;
    var t = sl !== null && sl.next !== null;
    if (((wt = 0), (Ol = sl = J = null), (zu = !1), (dn = 0), (Ea = null), t))
      throw Error(d(300));
    l === null ||
      Ul ||
      ((l = l.dependencies), l !== null && mu(l) && (Ul = !0));
  }
  function go(l, t, e, a) {
    J = l;
    var n = 0;
    do {
      if ((Ta && (Ea = null), (dn = 0), (Ta = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (Ol = sl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (S.H = Po), (u = t(e, a));
    } while (Ta);
    return u;
  }
  function Rh() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? rn(t) : t),
      (l = l.useState()[0]),
      (sl !== null ? sl.memoizedState : null) !== l && (J.flags |= 1024),
      t
    );
  }
  function Tc() {
    var l = Au !== 0;
    return (Au = 0), l;
  }
  function Ec(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function Mc(l) {
    if (zu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      zu = !1;
    }
    (wt = 0), (Ol = sl = J = null), (Ta = !1), (dn = Au = 0), (Ea = null);
  }
  function Fl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ol === null ? (J.memoizedState = Ol = l) : (Ol = Ol.next = l), Ol;
  }
  function El() {
    if (sl === null) {
      var l = J.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = sl.next;
    var t = Ol === null ? J.memoizedState : Ol.next;
    if (t !== null) (Ol = t), (sl = l);
    else {
      if (l === null)
        throw J.alternate === null ? Error(d(467)) : Error(d(310));
      (sl = l),
        (l = {
          memoizedState: sl.memoizedState,
          baseState: sl.baseState,
          baseQueue: sl.baseQueue,
          queue: sl.queue,
          next: null,
        }),
        Ol === null ? (J.memoizedState = Ol = l) : (Ol = Ol.next = l);
    }
    return Ol;
  }
  function Tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(l) {
    var t = dn;
    return (
      (dn += 1),
      Ea === null && (Ea = []),
      (l = io(Ea, l, t)),
      (t = J),
      (Ol === null ? t.memoizedState : Ol.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? Io : Gc)),
      l
    );
  }
  function Eu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return rn(l);
      if (l.$$typeof === Ml) return Vl(l);
    }
    throw Error(d(438, String(l)));
  }
  function Cc(l) {
    var t = null,
      e = J.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = J.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = Tu()), (J.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = rl;
    return t.index++, e;
  }
  function Jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Mu(l) {
    var t = El();
    return Dc(t, sl, l);
  }
  function Dc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var f = (i = null),
        s = null,
        y = t,
        b = !1;
      do {
        var p = y.lane & -536870913;
        if (p !== y.lane ? (P & p) === p : (wt & p) === p) {
          var v = y.revertLane;
          if (v === 0)
            s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              p === Sa && (b = !0);
          else if ((wt & v) === v) {
            (y = y.next), v === Sa && (b = !0);
            continue;
          } else
            (p = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              s === null ? ((f = s = p), (i = u)) : (s = s.next = p),
              (J.lanes |= v),
              (je |= v);
          (p = y.action),
            Fe && e(u, p),
            (u = y.hasEagerState ? y.eagerState : e(u, p));
        } else
          (v = {
            lane: p,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            s === null ? ((f = s = v), (i = u)) : (s = s.next = v),
            (J.lanes |= p),
            (je |= p);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (s === null ? (i = u) : (s.next = f),
        !ft(u, l.memoizedState) && ((Ul = !0), b && ((e = pa), e !== null)))
      )
        throw e;
      (l.memoizedState = u),
        (l.baseState = i),
        (l.baseQueue = s),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Oc(l) {
    var t = El(),
      e = t.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = (n = n.next);
      do (u = l(u, i.action)), (i = i.next);
      while (i !== n);
      ft(u, t.memoizedState) || (Ul = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (e.lastRenderedState = u);
    }
    return [u, a];
  }
  function bo(l, t, e) {
    var a = J,
      n = El(),
      u = tl;
    if (u) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = t();
    var i = !ft((sl || n).memoizedState, e);
    if (
      (i && ((n.memoizedState = e), (Ul = !0)),
      (n = n.queue),
      Nc(po.bind(null, a, n, l), [l]),
      n.getSnapshot !== t || i || (Ol !== null && Ol.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ma(9, { destroy: void 0 }, So.bind(null, a, n, e, t), null),
        hl === null)
      )
        throw Error(d(349));
      u || (wt & 127) !== 0 || xo(a, t, e);
    }
    return e;
  }
  function xo(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = J.updateQueue),
      t === null
        ? ((t = Tu()), (J.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function So(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), jo(t) && zo(l);
  }
  function po(l, t, e) {
    return e(function () {
      jo(t) && zo(l);
    });
  }
  function jo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ft(l, e);
    } catch {
      return !0;
    }
  }
  function zo(l) {
    var t = Xe(l, 2);
    t !== null && at(t, l, 2);
  }
  function Uc(l) {
    var t = Fl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Fe)) {
        fe(!0);
        try {
          e();
        } finally {
          fe(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ao(l, t, e, a) {
    return (l.baseState = e), Dc(l, sl, typeof a == "function" ? a : Jt);
  }
  function qh(l, t, e, a, n) {
    if (Ou(l)) throw Error(d(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      S.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null
          ? ((u.next = t.pending = u), To(t, u))
          : ((u.next = e.next), (t.pending = e.next = u));
    }
  }
  function To(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = S.T,
        i = {};
      S.T = i;
      try {
        var f = e(n, a),
          s = S.S;
        s !== null && s(i, f), Eo(l, t, f);
      } catch (y) {
        _c(l, t, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), (S.T = u);
      }
    } else
      try {
        (u = e(n, a)), Eo(l, t, u);
      } catch (y) {
        _c(l, t, y);
      }
  }
  function Eo(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            Mo(l, t, a);
          },
          function (a) {
            return _c(l, t, a);
          },
        )
      : Mo(l, t, e);
  }
  function Mo(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      Co(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), To(l, e)));
  }
  function _c(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), Co(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function Co(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Do(l, t) {
    return t;
  }
  function Oo(l, t) {
    if (tl) {
      var e = hl.formState;
      if (e !== null) {
        l: {
          var a = J;
          if (tl) {
            if (gl) {
              t: {
                for (var n = gl, u = jt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = At(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (gl = At(n.nextSibling)), (a = n.data === "F!");
                break l;
              }
            }
            he(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = Fl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Do,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = ko.bind(null, J, a)),
      (a.dispatch = e),
      (a = Uc(!1)),
      (u = Yc.bind(null, J, !1, a.queue)),
      (a = Fl()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = qh.bind(null, J, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function Uo(l) {
    var t = El();
    return _o(t, sl, l);
  }
  function _o(l, t, e) {
    if (
      ((t = Dc(l, t, Do)[0]),
      (l = Mu(Jt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = rn(t);
      } catch (i) {
        throw i === ja ? gu : i;
      }
    else a = t;
    t = El();
    var n = t.queue,
      u = n.dispatch;
    return (
      e !== t.memoizedState &&
        ((J.flags |= 2048),
        Ma(9, { destroy: void 0 }, Yh.bind(null, n, e), null)),
      [a, u, l]
    );
  }
  function Yh(l, t) {
    l.action = t;
  }
  function No(l) {
    var t = El(),
      e = sl;
    if (e !== null) return _o(t, e, l);
    El(), (t = t.memoizedState), (e = El());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function Ma(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = J.updateQueue),
      t === null && ((t = Tu()), (J.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function Bo() {
    return El().memoizedState;
  }
  function Cu(l, t, e, a) {
    var n = Fl();
    (J.flags |= l),
      (n.memoizedState = Ma(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      ));
  }
  function Du(l, t, e, a) {
    var n = El();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    sl !== null && a !== null && zc(a, sl.memoizedState.deps)
      ? (n.memoizedState = Ma(t, u, e, a))
      : ((J.flags |= l), (n.memoizedState = Ma(1 | t, u, e, a)));
  }
  function Ho(l, t) {
    Cu(8390656, 8, l, t);
  }
  function Nc(l, t) {
    Du(2048, 8, l, t);
  }
  function Gh(l) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null) (t = Tu()), (J.updateQueue = t), (t.events = [l]);
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function Ro(l) {
    var t = El().memoizedState;
    return (
      Gh({ ref: t, nextImpl: l }),
      function () {
        if ((ul & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function qo(l, t) {
    return Du(4, 2, l, t);
  }
  function Yo(l, t) {
    return Du(4, 4, l, t);
  }
  function Go(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Qo(l, t, e) {
    (e = e != null ? e.concat([l]) : null), Du(4, 4, Go.bind(null, t, l), e);
  }
  function Bc() {}
  function Xo(l, t) {
    var e = El();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && zc(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function Zo(l, t) {
    var e = El();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && zc(t, a[1])) return a[0];
    if (((a = l()), Fe)) {
      fe(!0);
      try {
        l();
      } finally {
        fe(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function Hc(l, t, e) {
    return e === void 0 || ((wt & 1073741824) !== 0 && (P & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = Vd()), (J.lanes |= l), (je |= l), e);
  }
  function Vo(l, t, e, a) {
    return ft(e, t)
      ? e
      : Aa.current !== null
        ? ((l = Hc(l, e, a)), ft(l, t) || (Ul = !0), l)
        : (wt & 42) === 0 || ((wt & 1073741824) !== 0 && (P & 261930) === 0)
          ? ((Ul = !0), (l.memoizedState = e))
          : ((l = Vd()), (J.lanes |= l), (je |= l), t);
  }
  function Lo(l, t, e, a, n) {
    var u = D.p;
    D.p = u !== 0 && 8 > u ? u : 8;
    var i = S.T,
      f = {};
    (S.T = f), Yc(l, !1, t, e);
    try {
      var s = n(),
        y = S.S;
      if (
        (y !== null && y(f, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var b = Bh(s, a);
        hn(l, t, b, mt(l));
      } else hn(l, t, a, mt(l));
    } catch (p) {
      hn(l, t, { then: function () {}, status: "rejected", reason: p }, mt());
    } finally {
      (D.p = u),
        i !== null && f.types !== null && (i.types = f.types),
        (S.T = i);
    }
  }
  function Qh() {}
  function Rc(l, t, e, a) {
    if (l.tag !== 5) throw Error(d(476));
    var n = Ko(l).queue;
    Lo(
      l,
      n,
      t,
      K,
      e === null
        ? Qh
        : function () {
            return wo(l), e(a);
          },
    );
  }
  function Ko(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: K,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Jt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function wo(l) {
    var t = Ko(l);
    t.next === null && (t = l.alternate.memoizedState),
      hn(l, t.next.queue, {}, mt());
  }
  function qc() {
    return Vl(On);
  }
  function Jo() {
    return El().memoizedState;
  }
  function Wo() {
    return El().memoizedState;
  }
  function Xh(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = mt();
          l = ve(e);
          var a = ge(t, l, e);
          a !== null && (at(a, t, e), fn(a, t, e)),
            (t = { cache: rc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Zh(l, t, e) {
    var a = mt();
    (e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ou(l)
        ? Fo(t, e)
        : ((e = tc(l, t, e, a)), e !== null && (at(e, l, a), $o(e, t, a)));
  }
  function ko(l, t, e) {
    var a = mt();
    hn(l, t, e, a);
  }
  function hn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ou(l)) Fo(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = u(i, e);
          if (((n.hasEagerState = !0), (n.eagerState = f), ft(f, i)))
            return ou(l, t, n, 0), hl === null && su(), !1;
        } catch {
        } finally {
        }
      if (((e = tc(l, t, n, a)), e !== null))
        return at(e, l, a), $o(e, t, a), !0;
    }
    return !1;
  }
  function Yc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: gf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ou(l))
    ) {
      if (t) throw Error(d(479));
    } else (t = tc(l, e, a, 2)), t !== null && at(t, l, 2);
  }
  function Ou(l) {
    var t = l.alternate;
    return l === J || (t !== null && t === J);
  }
  function Fo(l, t) {
    Ta = zu = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function $o(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), ts(l, e);
    }
  }
  var mn = {
    readContext: Vl,
    use: Eu,
    useCallback: jl,
    useContext: jl,
    useEffect: jl,
    useImperativeHandle: jl,
    useLayoutEffect: jl,
    useInsertionEffect: jl,
    useMemo: jl,
    useReducer: jl,
    useRef: jl,
    useState: jl,
    useDebugValue: jl,
    useDeferredValue: jl,
    useTransition: jl,
    useSyncExternalStore: jl,
    useId: jl,
    useHostTransitionStatus: jl,
    useFormState: jl,
    useActionState: jl,
    useOptimistic: jl,
    useMemoCache: jl,
    useCacheRefresh: jl,
  };
  mn.useEffectEvent = jl;
  var Io = {
      readContext: Vl,
      use: Eu,
      useCallback: function (l, t) {
        return (Fl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Vl,
      useEffect: Ho,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          Cu(4194308, 4, Go.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return Cu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Cu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = Fl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Fe) {
          fe(!0);
          try {
            l();
          } finally {
            fe(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = Fl();
        if (e !== void 0) {
          var n = e(t);
          if (Fe) {
            fe(!0);
            try {
              e(t);
            } finally {
              fe(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = Zh.bind(null, J, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Fl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Uc(l);
        var t = l.queue,
          e = ko.bind(null, J, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: Bc,
      useDeferredValue: function (l, t) {
        var e = Fl();
        return Hc(e, l, t);
      },
      useTransition: function () {
        var l = Uc(!1);
        return (
          (l = Lo.bind(null, J, l.queue, !0, !1)),
          (Fl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = J,
          n = Fl();
        if (tl) {
          if (e === void 0) throw Error(d(407));
          e = e();
        } else {
          if (((e = t()), hl === null)) throw Error(d(349));
          (P & 127) !== 0 || xo(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return (
          (n.queue = u),
          Ho(po.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          Ma(9, { destroy: void 0 }, So.bind(null, a, u, e, t), null),
          e
        );
      },
      useId: function () {
        var l = Fl(),
          t = hl.identifierPrefix;
        if (tl) {
          var e = _t,
            a = Ut;
          (e = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = Au++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_");
        } else (e = Hh++), (t = "_" + t + "r_" + e.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: qc,
      useFormState: Oo,
      useActionState: Oo,
      useOptimistic: function (l) {
        var t = Fl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = Yc.bind(null, J, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: Cc,
      useCacheRefresh: function () {
        return (Fl().memoizedState = Xh.bind(null, J));
      },
      useEffectEvent: function (l) {
        var t = Fl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((ul & 2) !== 0) throw Error(d(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Gc = {
      readContext: Vl,
      use: Eu,
      useCallback: Xo,
      useContext: Vl,
      useEffect: Nc,
      useImperativeHandle: Qo,
      useInsertionEffect: qo,
      useLayoutEffect: Yo,
      useMemo: Zo,
      useReducer: Mu,
      useRef: Bo,
      useState: function () {
        return Mu(Jt);
      },
      useDebugValue: Bc,
      useDeferredValue: function (l, t) {
        var e = El();
        return Vo(e, sl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Mu(Jt)[0],
          t = El().memoizedState;
        return [typeof l == "boolean" ? l : rn(l), t];
      },
      useSyncExternalStore: bo,
      useId: Jo,
      useHostTransitionStatus: qc,
      useFormState: Uo,
      useActionState: Uo,
      useOptimistic: function (l, t) {
        var e = El();
        return Ao(e, sl, l, t);
      },
      useMemoCache: Cc,
      useCacheRefresh: Wo,
    };
  Gc.useEffectEvent = Ro;
  var Po = {
    readContext: Vl,
    use: Eu,
    useCallback: Xo,
    useContext: Vl,
    useEffect: Nc,
    useImperativeHandle: Qo,
    useInsertionEffect: qo,
    useLayoutEffect: Yo,
    useMemo: Zo,
    useReducer: Oc,
    useRef: Bo,
    useState: function () {
      return Oc(Jt);
    },
    useDebugValue: Bc,
    useDeferredValue: function (l, t) {
      var e = El();
      return sl === null ? Hc(e, l, t) : Vo(e, sl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Oc(Jt)[0],
        t = El().memoizedState;
      return [typeof l == "boolean" ? l : rn(l), t];
    },
    useSyncExternalStore: bo,
    useId: Jo,
    useHostTransitionStatus: qc,
    useFormState: No,
    useActionState: No,
    useOptimistic: function (l, t) {
      var e = El();
      return sl !== null
        ? Ao(e, sl, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: Cc,
    useCacheRefresh: Wo,
  };
  Po.useEffectEvent = Ro;
  function Qc(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : M({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Xc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        n = ve(a);
      (n.payload = t),
        e != null && (n.callback = e),
        (t = ge(l, n, a)),
        t !== null && (at(t, l, a), fn(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        n = ve(a);
      (n.tag = 1),
        (n.payload = t),
        e != null && (n.callback = e),
        (t = ge(l, n, a)),
        t !== null && (at(t, l, a), fn(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = mt(),
        a = ve(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ge(l, a, e)),
        t !== null && (at(t, l, e), fn(t, l, e));
    },
  };
  function ld(l, t, e, a, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pa(e, a) || !Pa(n, u)
          : !0
    );
  }
  function td(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && Xc.enqueueReplaceState(t, t.state, null);
  }
  function $e(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = M({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function ed(l) {
    fu(l);
  }
  function ad(l) {
    console.error(l);
  }
  function nd(l) {
    fu(l);
  }
  function Uu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ud(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Zc(l, t, e) {
    return (
      (e = ve(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        Uu(l, t);
      }),
      e
    );
  }
  function id(l) {
    return (l = ve(l)), (l.tag = 3), l;
  }
  function cd(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          ud(t, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        ud(t, e, a),
          typeof n != "function" &&
            (ze === null ? (ze = new Set([this])) : ze.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Vh(l, t, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && xa(t, e, n, !0),
        (e = ot.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              zt === null ? Vu() : e.alternate === null && zl === 0 && (zl = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === bu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  mf(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === bu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  mf(l, a, n)),
              !1
            );
        }
        throw Error(d(435, e.tag));
      }
      return mf(l, a, n), Vu(), !1;
    }
    if (tl)
      return (
        (t = ot.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== cc && ((l = Error(d(422), { cause: a })), en(xt(l, e))))
          : (a !== cc && ((t = Error(d(423), { cause: a })), en(xt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = xt(a, e)),
            (n = Zc(l.stateNode, a, n)),
            bc(l, n),
            zl !== 4 && (zl = 2)),
        !1
      );
    var u = Error(d(520), { cause: a });
    if (
      ((u = xt(u, e)),
      jn === null ? (jn = [u]) : jn.push(u),
      zl !== 4 && (zl = 2),
      t === null)
    )
      return !0;
    (a = xt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = n & -n),
            (e.lanes |= l),
            (l = Zc(e.stateNode, a, l)),
            bc(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ze === null || !ze.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = id(n)),
              cd(n, l, e, a),
              bc(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Vc = Error(d(461)),
    Ul = !1;
  function Ll(l, t, e, a) {
    t.child = l === null ? oo(t, null, e, a) : ke(t, l.child, e, a);
  }
  function fd(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      Ke(t),
      (a = Ac(l, t, e, i, u, n)),
      (f = Tc()),
      l !== null && !Ul
        ? (Ec(l, t, n), Wt(l, t, n))
        : (tl && f && uc(t), (t.flags |= 1), Ll(l, t, a, n), t.child)
    );
  }
  function sd(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" &&
        !ec(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = u), od(l, t, u, a, n))
        : ((l = ru(e.type, null, a, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !$c(l, n))) {
      var i = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Pa), e(i, a) && l.ref === t.ref)
      )
        return Wt(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Zt(u, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function od(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Pa(u, a) && l.ref === t.ref)
        if (((Ul = !1), (t.pendingProps = a = u), $c(l, n)))
          (l.flags & 131072) !== 0 && (Ul = !0);
        else return (t.lanes = l.lanes), Wt(l, t, n);
    }
    return Lc(l, t, e, a, n);
  }
  function dd(l, t, e, a) {
    var n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (t.child = null);
        return rd(l, t, u, e, a);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && vu(t, u !== null ? u.cachePool : null),
          u !== null ? mo(t, u) : Sc(),
          yo(t);
      else
        return (
          (a = t.lanes = 536870912),
          rd(l, t, u !== null ? u.baseLanes | e : e, e, a)
        );
    } else
      u !== null
        ? (vu(t, u.cachePool), mo(t, u), xe(), (t.memoizedState = null))
        : (l !== null && vu(t, null), Sc(), xe());
    return Ll(l, t, n, e), t.child;
  }
  function yn(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function rd(l, t, e, a, n) {
    var u = mc();
    return (
      (u = u === null ? null : { parent: Dl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && vu(t, null),
      Sc(),
      yo(t),
      l !== null && xa(l, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function _u(l, t) {
    return (
      (t = Bu({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function hd(l, t, e) {
    return (
      ke(t, l.child, null, e),
      (l = _u(t, t.pendingProps)),
      (l.flags |= 2),
      dt(t),
      (t.memoizedState = null),
      l
    );
  }
  function Lh(l, t, e) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (tl) {
        if (a.mode === "hidden")
          return (l = _u(t, a)), (t.lanes = 536870912), yn(null, l);
        if (
          (jc(t),
          (l = gl)
            ? ((l = Tr(l, jt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: de !== null ? { id: Ut, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ks(l)),
                (e.return = t),
                (t.child = e),
                (Zl = t),
                (gl = null)))
            : (l = null),
          l === null)
        )
          throw he(t);
        return (t.lanes = 536870912), null;
      }
      return _u(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((jc(t), n))
        if (t.flags & 256) (t.flags &= -257), (t = hd(l, t, e));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(d(558));
      else if (
        (Ul || xa(l, t, e, !1), (n = (e & l.childLanes) !== 0), Ul || n)
      ) {
        if (
          ((a = hl),
          a !== null && ((i = es(a, e)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Xe(l, i), at(a, l, i), Vc);
        Vu(), (t = hd(l, t, e));
      } else
        (l = u.treeContext),
          (gl = At(i.nextSibling)),
          (Zl = t),
          (tl = !0),
          (re = null),
          (jt = !1),
          l !== null && Is(t, l),
          (t = _u(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = Zt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Nu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(d(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Lc(l, t, e, a, n) {
    return (
      Ke(t),
      (e = Ac(l, t, e, a, void 0, n)),
      (a = Tc()),
      l !== null && !Ul
        ? (Ec(l, t, n), Wt(l, t, n))
        : (tl && a && uc(t), (t.flags |= 1), Ll(l, t, e, n), t.child)
    );
  }
  function md(l, t, e, a, n, u) {
    return (
      Ke(t),
      (t.updateQueue = null),
      (e = go(t, a, e, n)),
      vo(l),
      (a = Tc()),
      l !== null && !Ul
        ? (Ec(l, t, u), Wt(l, t, u))
        : (tl && a && uc(t), (t.flags |= 1), Ll(l, t, e, u), t.child)
    );
  }
  function yd(l, t, e, a, n) {
    if ((Ke(t), t.stateNode === null)) {
      var u = ya,
        i = e.contextType;
      typeof i == "object" && i !== null && (u = Vl(i)),
        (u = new e(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Xc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        vc(t),
        (i = e.contextType),
        (u.context = typeof i == "object" && i !== null ? Vl(i) : ya),
        (u.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (Qc(t, e, i, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Xc.enqueueReplaceState(u, u.state, null),
          on(t, a, u, n),
          sn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      u = t.stateNode;
      var f = t.memoizedProps,
        s = $e(e, f);
      u.props = s;
      var y = u.context,
        b = e.contextType;
      (i = ya), typeof b == "object" && b !== null && (i = Vl(b));
      var p = e.getDerivedStateFromProps;
      (b =
        typeof p == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        b ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f || y !== i) && td(t, u, a, i)),
        (ye = !1);
      var v = t.memoizedState;
      (u.state = v),
        on(t, a, u, n),
        sn(),
        (y = t.memoizedState),
        f || v !== y || ye
          ? (typeof p == "function" && (Qc(t, e, p, a), (y = t.memoizedState)),
            (s = ye || ld(t, e, s, a, v, y, i))
              ? (b ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        gc(l, t),
        (i = t.memoizedProps),
        (b = $e(e, i)),
        (u.props = b),
        (p = t.pendingProps),
        (v = u.context),
        (y = e.contextType),
        (s = ya),
        typeof y == "object" && y !== null && (s = Vl(y)),
        (f = e.getDerivedStateFromProps),
        (y =
          typeof f == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== p || v !== s) && td(t, u, a, s)),
        (ye = !1),
        (v = t.memoizedState),
        (u.state = v),
        on(t, a, u, n),
        sn();
      var g = t.memoizedState;
      i !== p ||
      v !== g ||
      ye ||
      (l !== null && l.dependencies !== null && mu(l.dependencies))
        ? (typeof f == "function" && (Qc(t, e, f, a), (g = t.memoizedState)),
          (b =
            ye ||
            ld(t, e, b, a, v, g, s) ||
            (l !== null && l.dependencies !== null && mu(l.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, g, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, g, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (u.props = a),
          (u.state = g),
          (u.context = s),
          (a = b))
        : (typeof u.componentDidUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Nu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = ke(t, l.child, null, n)),
              (t.child = ke(t, null, e, n)))
            : Ll(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Wt(l, t, n)),
      l
    );
  }
  function vd(l, t, e, a) {
    return Ve(), (t.flags |= 256), Ll(l, t, e, a), t.child;
  }
  var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function wc(l) {
    return { baseLanes: l, cachePool: no() };
  }
  function Jc(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= ht), l;
  }
  function gd(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (tl) {
        if (
          (n ? be(t) : xe(),
          (l = gl)
            ? ((l = Tr(l, jt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: de !== null ? { id: Ut, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = ks(l)),
                (e.return = t),
                (t.child = e),
                (Zl = t),
                (gl = null)))
            : (l = null),
          l === null)
        )
          throw he(t);
        return Of(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (xe(),
            (n = t.mode),
            (f = Bu({ mode: "hidden", children: f }, n)),
            (a = Ze(a, n, e, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = wc(e)),
            (a.childLanes = Jc(l, i, e)),
            (t.memoizedState = Kc),
            yn(null, a))
          : (be(t), Wc(t, f))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((f = s.dehydrated), f !== null)) {
      if (u)
        t.flags & 256
          ? (be(t), (t.flags &= -257), (t = kc(l, t, e)))
          : t.memoizedState !== null
            ? (xe(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (xe(),
              (f = a.fallback),
              (n = t.mode),
              (a = Bu({ mode: "visible", children: a.children }, n)),
              (f = Ze(f, n, e, null)),
              (f.flags |= 2),
              (a.return = t),
              (f.return = t),
              (a.sibling = f),
              (t.child = a),
              ke(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = wc(e)),
              (a.childLanes = Jc(l, i, e)),
              (t.memoizedState = Kc),
              (t = yn(null, a)));
      else if ((be(t), Of(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var y = i.dgst;
        (i = y),
          (a = Error(d(419))),
          (a.stack = ""),
          (a.digest = i),
          en({ value: a, source: null, stack: null }),
          (t = kc(l, t, e));
      } else if (
        (Ul || xa(l, t, e, !1), (i = (e & l.childLanes) !== 0), Ul || i)
      ) {
        if (
          ((i = hl),
          i !== null && ((a = es(i, e)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Xe(l, a), at(i, l, a), Vc);
        Df(f) || Vu(), (t = kc(l, t, e));
      } else
        Df(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (gl = At(f.nextSibling)),
            (Zl = t),
            (tl = !0),
            (re = null),
            (jt = !1),
            l !== null && Is(t, l),
            (t = Wc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (xe(),
        (f = a.fallback),
        (n = t.mode),
        (s = l.child),
        (y = s.sibling),
        (a = Zt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        y !== null ? (f = Zt(y, f)) : ((f = Ze(f, n, e, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        yn(null, a),
        (a = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = wc(e))
          : ((n = f.cachePool),
            n !== null
              ? ((s = Dl._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = no()),
            (f = { baseLanes: f.baseLanes | e, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = Jc(l, i, e)),
        (t.memoizedState = Kc),
        yn(l.child, a))
      : (be(t),
        (e = l.child),
        (l = e.sibling),
        (e = Zt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function Wc(l, t) {
    return (
      (t = Bu({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Bu(l, t) {
    return (l = st(22, l, null, t)), (l.lanes = 0), l;
  }
  function kc(l, t, e) {
    return (
      ke(t, l.child, null, e),
      (l = Wc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function bd(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), oc(l.return, t, e);
  }
  function Fc(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function xd(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Tl.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      il(Tl, i),
      Ll(l, t, a, e),
      (a = tl ? tn : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && bd(l, e, t);
        else if (l.tag === 19) bd(l, e, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          (l = e.alternate),
            l !== null && ju(l) === null && (n = e),
            (e = e.sibling);
        (e = n),
          e === null
            ? ((n = t.child), (t.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          Fc(t, !1, n, e, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && ju(l) === null)) {
            t.child = n;
            break;
          }
          (l = n.sibling), (n.sibling = e), (e = n), (n = l);
        }
        Fc(t, !0, e, null, u, a);
        break;
      case "together":
        Fc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (je |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((xa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Zt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;
      )
        (l = l.sibling),
          (e = e.sibling = Zt(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function $c(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && mu(l)));
  }
  function Kh(l, t, e) {
    switch (t.tag) {
      case 3:
        Kn(t, t.stateNode.containerInfo),
          me(t, Dl, l.memoizedState.cache),
          Ve();
        break;
      case 27:
      case 5:
        pi(t);
        break;
      case 4:
        Kn(t, t.stateNode.containerInfo);
        break;
      case 10:
        me(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), jc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (be(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
              ? gd(l, t, e)
              : (be(t), (l = Wt(l, t, e)), l !== null ? l.sibling : null);
        be(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (xa(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return xd(l, t, e);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          il(Tl, Tl.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), dd(l, t, e, t.pendingProps);
      case 24:
        me(t, Dl, l.memoizedState.cache);
    }
    return Wt(l, t, e);
  }
  function Sd(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ul = !0;
      else {
        if (!$c(l, e) && (t.flags & 128) === 0) return (Ul = !1), Kh(l, t, e);
        Ul = (l.flags & 131072) !== 0;
      }
    else (Ul = !1), tl && (t.flags & 1048576) !== 0 && $s(t, tn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Je(t.elementType)), (t.type = l), typeof l == "function"))
            ec(l)
              ? ((a = $e(l, a)), (t.tag = 1), (t = yd(null, t, l, a, e)))
              : ((t.tag = 0), (t = Lc(null, t, l, a, e)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === L) {
                (t.tag = 11), (t = fd(null, t, l, a, e));
                break l;
              } else if (n === pl) {
                (t.tag = 14), (t = sd(null, t, l, a, e));
                break l;
              }
            }
            throw ((t = Qa(l) || l), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return Lc(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (n = $e(a, t.pendingProps)), yd(l, t, a, n, e);
      case 3:
        l: {
          if ((Kn(t, t.stateNode.containerInfo), l === null))
            throw Error(d(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), gc(l, t), on(t, a, null, e);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            me(t, Dl, a),
            a !== u.cache && dc(t, [Dl], e, !0),
            sn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = vd(l, t, a, e);
              break l;
            } else if (a !== n) {
              (n = xt(Error(d(424)), t)), en(n), (t = vd(l, t, a, e));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                gl = At(l.firstChild),
                  Zl = t,
                  tl = !0,
                  re = null,
                  jt = !0,
                  e = oo(t, null, a, e),
                  t.child = e;
                e;
              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Ve(), a === n)) {
              t = Wt(l, t, e);
              break l;
            }
            Ll(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Nu(l, t),
          l === null
            ? (e = Ur(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : tl ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Fu(ce.current).createElement(e)),
                (a[Xl] = t),
                (a[$l] = l),
                Kl(a, e, l),
                ql(a),
                (t.stateNode = a))
            : (t.memoizedState = Ur(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pi(t),
          l === null &&
            tl &&
            ((a = t.stateNode = Cr(t.type, t.pendingProps, ce.current)),
            (Zl = t),
            (jt = !0),
            (n = gl),
            Me(t.type) ? ((Uf = n), (gl = At(a.firstChild))) : (gl = n)),
          Ll(l, t, t.pendingProps.children, e),
          Nu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            tl &&
            ((n = a = gl) &&
              ((a = pm(a, t.type, t.pendingProps, jt)),
              a !== null
                ? ((t.stateNode = a),
                  (Zl = t),
                  (gl = At(a.firstChild)),
                  (jt = !1),
                  (n = !0))
                : (n = !1)),
            n || he(t)),
          pi(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = u.children),
          Ef(n, u) ? (a = null) : i !== null && Ef(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Ac(l, t, Rh, null, null, e)), (On._currentValue = n)),
          Nu(l, t),
          Ll(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            tl &&
            ((l = e = gl) &&
              ((e = jm(e, t.pendingProps, jt)),
              e !== null
                ? ((t.stateNode = e), (Zl = t), (gl = null), (l = !0))
                : (l = !1)),
            l || he(t)),
          null
        );
      case 13:
        return gd(l, t, e);
      case 4:
        return (
          Kn(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = ke(t, null, a, e)) : Ll(l, t, a, e),
          t.child
        );
      case 11:
        return fd(l, t, t.type, t.pendingProps, e);
      case 7:
        return Ll(l, t, t.pendingProps, e), t.child;
      case 8:
        return Ll(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Ll(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          me(t, t.type, a.value),
          Ll(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ke(t),
          (n = Vl(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ll(l, t, a, e),
          t.child
        );
      case 14:
        return sd(l, t, t.type, t.pendingProps, e);
      case 15:
        return od(l, t, t.type, t.pendingProps, e);
      case 19:
        return xd(l, t, e);
      case 31:
        return Lh(l, t, e);
      case 22:
        return dd(l, t, e, t.pendingProps);
      case 24:
        return (
          Ke(t),
          (a = Vl(Dl)),
          l === null
            ? ((n = mc()),
              n === null &&
                ((n = hl),
                (u = rc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              vc(t),
              me(t, Dl, n))
            : ((l.lanes & e) !== 0 && (gc(l, t), on(t, null, null, e), sn()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  me(t, Dl, a))
                : ((a = u.cache),
                  me(t, Dl, a),
                  a !== n.cache && dc(t, [Dl], e, !0))),
          Ll(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function kt(l) {
    l.flags |= 4;
  }
  function Ic(l, t, e, a, n) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Jd()) l.flags |= 8192;
        else throw ((We = bu), yc);
    } else l.flags &= -16777217;
  }
  function pd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Rr(t)))
      if (Jd()) l.flags |= 8192;
      else throw ((We = bu), yc);
  }
  function Hu(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Pf() : 536870912), (l.lanes |= t), (Ua |= t));
  }
  function vn(l, t) {
    if (!tl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function bl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling);
    else
      for (n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function wh(l, t, e) {
    var a = t.pendingProps;
    switch ((ic(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bl(t), null;
      case 1:
        return bl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Kt(Dl),
          ta(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ba(t)
              ? kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), fc())),
          bl(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          l === null
            ? (kt(t),
              u !== null ? (bl(t), pd(t, u)) : (bl(t), Ic(t, n, null, a, e)))
            : u
              ? u !== l.memoizedState
                ? (kt(t), bl(t), pd(t, u))
                : (bl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && kt(t),
                bl(t),
                Ic(t, n, l, a, e)),
          null
        );
      case 27:
        if (
          (wn(t),
          (e = ce.current),
          (n = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return bl(t), null;
          }
          (l = Rl.current),
            ba(t) ? Ps(t) : ((l = Cr(n, a, e)), (t.stateNode = l), kt(t));
        }
        return bl(t), null;
      case 5:
        if ((wn(t), (n = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return bl(t), null;
          }
          if (((u = Rl.current), ba(t))) Ps(t);
          else {
            var i = Fu(ce.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            (u[Xl] = t), (u[$l] = a);
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = u;
            l: switch ((Kl(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && kt(t);
          }
        }
        return (
          bl(t),
          Ic(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
          if (((l = ce.current), ba(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (n = Zl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (l[Xl] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                gr(l.nodeValue, e)
              )),
              l || he(t, !0);
          } else (l = Fu(l).createTextNode(a)), (l[Xl] = t), (t.stateNode = l);
        }
        return bl(t), null;
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ba(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(d(557));
              l[Xl] = t;
            } else
              Ve(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            bl(t), (l = !1);
          } else
            (e = fc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0);
          if (!l) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return bl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = ba(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[Xl] = t;
            } else
              Ve(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            bl(t), (n = !1);
          } else
            (n = fc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return (
          dt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              Hu(t, t.updateQueue),
              bl(t),
              null)
        );
      case 4:
        return ta(), l === null && pf(t.stateNode.containerInfo), bl(t), null;
      case 10:
        return Kt(t.type), bl(t), null;
      case 19:
        if ((Sl(Tl), (a = t.memoizedState), a === null)) return bl(t), null;
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) vn(a, !1);
          else {
            if (zl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = ju(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      vn(a, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      Hu(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;
                  )
                    Ws(e, l), (e = e.sibling);
                  return (
                    il(Tl, (Tl.current & 1) | 2),
                    tl && Vt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              ut() > Qu &&
              ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = ju(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                Hu(t, l),
                vn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !tl)
              )
                return bl(t), null;
            } else
              2 * ut() - a.renderingStartTime > Qu &&
                e !== 536870912 &&
                ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = a.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = ut()),
            (l.sibling = null),
            (e = Tl.current),
            il(Tl, n ? (e & 1) | 2 : e & 1),
            tl && Vt(t, a.treeForkCount),
            l)
          : (bl(t), null);
      case 22:
      case 23:
        return (
          dt(t),
          pc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : bl(t),
          (e = t.updateQueue),
          e !== null && Hu(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && Sl(we),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Kt(Dl),
          bl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function Jh(l, t) {
    switch ((ic(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kt(Dl),
          ta(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return wn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((dt(t), t.alternate === null)) throw Error(d(340));
          Ve();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (dt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          Ve();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return Sl(Tl), null;
      case 4:
        return ta(), null;
      case 10:
        return Kt(t.type), null;
      case 22:
      case 23:
        return (
          dt(t),
          pc(),
          l !== null && Sl(we),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Kt(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(l, t) {
    switch ((ic(t), t.tag)) {
      case 3:
        Kt(Dl), ta();
        break;
      case 26:
      case 27:
      case 5:
        wn(t);
        break;
      case 4:
        ta();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        Sl(Tl);
        break;
      case 10:
        Kt(t.type);
        break;
      case 22:
      case 23:
        dt(t), pc(), l !== null && Sl(we);
        break;
      case 24:
        Kt(Dl);
    }
  }
  function gn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            (a = u()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (f) {
      fl(t, t.return, f);
    }
  }
  function Se(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (n = t);
              var s = e,
                y = f;
              try {
                y();
              } catch (b) {
                fl(n, s, b);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (b) {
      fl(t, t.return, b);
    }
  }
  function zd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        ho(t, e);
      } catch (a) {
        fl(l, l.return, a);
      }
    }
  }
  function Ad(l, t, e) {
    (e.props = $e(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      fl(l, t, a);
    }
  }
  function bn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      fl(l, t, n);
    }
  }
  function Nt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          fl(l, t, n);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          fl(l, t, n);
        }
      else e.current = null;
  }
  function Td(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  function Pc(l, t, e) {
    try {
      var a = l.stateNode;
      ym(a, l.type, e, t), (a[$l] = t);
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  function Ed(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Me(l.type)) ||
      l.tag === 4
    );
  }
  function lf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ed(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Me(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function tf(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Qt));
    else if (
      a !== 4 &&
      (a === 27 && Me(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (tf(l, t, e), l = l.sibling; l !== null; )
        tf(l, t, e), (l = l.sibling);
  }
  function Ru(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && Me(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (Ru(l, t, e), l = l.sibling; l !== null; )
        Ru(l, t, e), (l = l.sibling);
  }
  function Md(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Kl(t, a, e), (t[Xl] = l), (t[$l] = e);
    } catch (u) {
      fl(l, l.return, u);
    }
  }
  var Ft = !1,
    _l = !1,
    ef = !1,
    Cd = typeof WeakSet == "function" ? WeakSet : Set,
    Yl = null;
  function Wh(l, t) {
    if (((l = l.containerInfo), (Af = ai), (l = Gs(l)), ki(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              f = -1,
              s = -1,
              y = 0,
              b = 0,
              p = l,
              v = null;
            t: for (;;) {
              for (
                var g;
                p !== e || (n !== 0 && p.nodeType !== 3) || (f = i + n),
                  p !== u || (a !== 0 && p.nodeType !== 3) || (s = i + a),
                  p.nodeType === 3 && (i += p.nodeValue.length),
                  (g = p.firstChild) !== null;
              )
                (v = p), (p = g);
              for (;;) {
                if (p === l) break t;
                if (
                  (v === e && ++y === n && (f = i),
                  v === u && ++b === a && (s = i),
                  (g = p.nextSibling) !== null)
                )
                  break;
                (p = v), (v = p.parentNode);
              }
              p = g;
            }
            e = f === -1 || s === -1 ? null : { start: f, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Tf = { focusedElem: l, selectionRange: e }, ai = !1, Yl = t;
      Yl !== null;
    )
      if (
        ((t = Yl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Yl = l);
      else
        for (; Yl !== null; ) {
          switch (((t = Yl), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  (n = l[e]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                (l = void 0),
                  (e = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode);
                try {
                  var _ = $e(e.type, n);
                  (l = a.getSnapshotBeforeUpdate(_, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (G) {
                  fl(e, e.return, G);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Cf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Yl = l);
            break;
          }
          Yl = t.return;
        }
  }
  function Dd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        It(l, e), a & 4 && gn(5, e);
        break;
      case 1:
        if ((It(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              fl(e, e.return, i);
            }
          else {
            var n = $e(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              fl(e, e.return, i);
            }
          }
        a & 64 && zd(e), a & 512 && bn(e, e.return);
        break;
      case 3:
        if ((It(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            ho(l, t);
          } catch (i) {
            fl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Md(e);
      case 26:
      case 5:
        It(l, e), t === null && a & 4 && Td(e), a & 512 && bn(e, e.return);
        break;
      case 12:
        It(l, e);
        break;
      case 31:
        It(l, e), a & 4 && _d(l, e);
        break;
      case 13:
        It(l, e),
          a & 4 && Nd(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = am.bind(null, e)), zm(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Ft), !a)) {
          (t = (t !== null && t.memoizedState !== null) || _l), (n = Ft);
          var u = _l;
          (Ft = a),
            (_l = t) && !u ? Pt(l, e, (e.subtreeFlags & 8772) !== 0) : It(l, e),
            (Ft = n),
            (_l = u);
        }
        break;
      case 30:
        break;
      default:
        It(l, e);
    }
  }
  function Od(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Od(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && _i(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var xl = null,
    Pl = !1;
  function $t(l, t, e) {
    for (e = e.child; e !== null; ) Ud(l, t, e), (e = e.sibling);
  }
  function Ud(l, t, e) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(Xa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        _l || Nt(e, t),
          $t(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        _l || Nt(e, t);
        var a = xl,
          n = Pl;
        Me(e.type) && ((xl = e.stateNode), (Pl = !1)),
          $t(l, t, e),
          Mn(e.stateNode),
          (xl = a),
          (Pl = n);
        break;
      case 5:
        _l || Nt(e, t);
      case 6:
        if (
          ((a = xl),
          (n = Pl),
          (xl = null),
          $t(l, t, e),
          (xl = a),
          (Pl = n),
          xl !== null)
        )
          if (Pl)
            try {
              (xl.nodeType === 9
                ? xl.body
                : xl.nodeName === "HTML"
                  ? xl.ownerDocument.body
                  : xl
              ).removeChild(e.stateNode);
            } catch (u) {
              fl(e, t, u);
            }
          else
            try {
              xl.removeChild(e.stateNode);
            } catch (u) {
              fl(e, t, u);
            }
        break;
      case 18:
        xl !== null &&
          (Pl
            ? ((l = xl),
              zr(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                e.stateNode,
              ),
              Ga(l))
            : zr(xl, e.stateNode));
        break;
      case 4:
        (a = xl),
          (n = Pl),
          (xl = e.stateNode.containerInfo),
          (Pl = !0),
          $t(l, t, e),
          (xl = a),
          (Pl = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Se(2, e, t), _l || Se(4, e, t), $t(l, t, e);
        break;
      case 1:
        _l ||
          (Nt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Ad(e, t, a)),
          $t(l, t, e);
        break;
      case 21:
        $t(l, t, e);
        break;
      case 22:
        (_l = (a = _l) || e.memoizedState !== null), $t(l, t, e), (_l = a);
        break;
      default:
        $t(l, t, e);
    }
  }
  function _d(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ga(l);
      } catch (e) {
        fl(t, t.return, e);
      }
    }
  }
  function Nd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ga(l);
      } catch (e) {
        fl(t, t.return, e);
      }
  }
  function kh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Cd()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Cd()),
          t
        );
      default:
        throw Error(d(435, l.tag));
    }
  }
  function qu(l, t) {
    var e = kh(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var n = nm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function lt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          i = t,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Me(f.type)) {
                (xl = f.stateNode), (Pl = !1);
                break l;
              }
              break;
            case 5:
              (xl = f.stateNode), (Pl = !1);
              break l;
            case 3:
            case 4:
              (xl = f.stateNode.containerInfo), (Pl = !0);
              break l;
          }
          f = f.return;
        }
        if (xl === null) throw Error(d(160));
        Ud(u, i, n),
          (xl = null),
          (Pl = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) Bd(t, l), (t = t.sibling);
  }
  var Mt = null;
  function Bd(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l),
          tt(l),
          a & 4 && (Se(3, l, l.return), gn(3, l), Se(5, l, l.return));
        break;
      case 1:
        lt(t, l),
          tt(l),
          a & 512 && (_l || e === null || Nt(e, e.return)),
          a & 64 &&
            Ft &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var n = Mt;
        if (
          (lt(t, l),
          tt(l),
          a & 512 && (_l || e === null || Nt(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[La] ||
                          u[Xl] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Kl(u, a, e),
                        (u[Xl] = l),
                        ql(u),
                        (a = u);
                      break l;
                    case "link":
                      var i = Br("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Kl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = Br("meta", "content", n).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Kl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  (u[Xl] = l), ql(u), (a = u);
                }
                l.stateNode = a;
              } else Hr(n, l.type, l.stateNode);
            else l.stateNode = Nr(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? Hr(n, l.type, l.stateNode)
                  : Nr(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Pc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        lt(t, l),
          tt(l),
          a & 512 && (_l || e === null || Nt(e, e.return)),
          e !== null && a & 4 && Pc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (lt(t, l),
          tt(l),
          a & 512 && (_l || e === null || Nt(e, e.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            fa(n, "");
          } catch (_) {
            fl(l, l.return, _);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), Pc(l, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (ef = !0);
        break;
      case 6:
        if ((lt(t, l), tt(l), a & 4)) {
          if (l.stateNode === null) throw Error(d(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (_) {
            fl(l, l.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Pu = null),
          (n = Mt),
          (Mt = $u(t.containerInfo)),
          lt(t, l),
          (Mt = n),
          tt(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ga(t.containerInfo);
          } catch (_) {
            fl(l, l.return, _);
          }
        ef && ((ef = !1), Hd(l));
        break;
      case 4:
        (a = Mt),
          (Mt = $u(l.stateNode.containerInfo)),
          lt(t, l),
          tt(l),
          (Mt = a);
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 31:
        lt(t, l),
          tt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), qu(l, a)));
        break;
      case 13:
        lt(t, l),
          tt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Gu = ut()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), qu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          y = Ft,
          b = _l;
        if (
          ((Ft = y || n),
          (_l = b || s),
          lt(t, l),
          (_l = b),
          (Ft = y),
          tt(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (e === null || s || Ft || _l || Ie(l)),
              e = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (((u = s.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    f = s.stateNode;
                    var p = s.memoizedProps.style,
                      v =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null;
                    f.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (_) {
                  fl(s, s.return, _);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (_) {
                  fl(s, s.return, _);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var g = s.stateNode;
                  n ? Ar(g, !0) : Ar(s.stateNode, !1);
                } catch (_) {
                  fl(s, s.return, _);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), qu(l, e))));
        break;
      case 19:
        lt(t, l),
          tt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), qu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (Ed(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = lf(l);
            Ru(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (fa(i, ""), (e.flags &= -33));
            var f = lf(l);
            Ru(l, f, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              y = lf(l);
            tf(l, y, s);
            break;
          default:
            throw Error(d(161));
        }
      } catch (b) {
        fl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Hd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Hd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function It(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Dd(l, t.alternate, t), (t = t.sibling);
  }
  function Ie(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Se(4, t, t.return), Ie(t);
          break;
        case 1:
          Nt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && Ad(t, t.return, e),
            Ie(t);
          break;
        case 27:
          Mn(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), Ie(t);
          break;
        case 22:
          t.memoizedState === null && Ie(t);
          break;
        case 30:
          Ie(t);
          break;
        default:
          Ie(t);
      }
      l = l.sibling;
    }
  }
  function Pt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pt(n, u, e), gn(4, u);
          break;
        case 1:
          if (
            (Pt(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              fl(a, a.return, y);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  ro(s[n], f);
            } catch (y) {
              fl(a, a.return, y);
            }
          }
          e && i & 64 && zd(u), bn(u, u.return);
          break;
        case 27:
          Md(u);
        case 26:
        case 5:
          Pt(n, u, e), e && a === null && i & 4 && Td(u), bn(u, u.return);
          break;
        case 12:
          Pt(n, u, e);
          break;
        case 31:
          Pt(n, u, e), e && i & 4 && _d(n, u);
          break;
        case 13:
          Pt(n, u, e), e && i & 4 && Nd(n, u);
          break;
        case 22:
          u.memoizedState === null && Pt(n, u, e), bn(u, u.return);
          break;
        case 30:
          break;
        default:
          Pt(n, u, e);
      }
      t = t.sibling;
    }
  }
  function af(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && an(e));
  }
  function nf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && an(l));
  }
  function Ct(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Rd(l, t, e, a), (t = t.sibling);
  }
  function Rd(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ct(l, t, e, a), n & 2048 && gn(9, t);
        break;
      case 1:
        Ct(l, t, e, a);
        break;
      case 3:
        Ct(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && an(l)));
        break;
      case 12:
        if (n & 2048) {
          Ct(l, t, e, a), (l = t.stateNode);
          try {
            var u = t.memoizedProps,
              i = u.id,
              f = u.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            fl(t, t.return, s);
          }
        } else Ct(l, t, e, a);
        break;
      case 31:
        Ct(l, t, e, a);
        break;
      case 13:
        Ct(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ct(l, t, e, a)
              : xn(l, t)
            : u._visibility & 2
              ? Ct(l, t, e, a)
              : ((u._visibility |= 2),
                Ca(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && af(i, t);
        break;
      case 24:
        Ct(l, t, e, a), n & 2048 && nf(t.alternate, t);
        break;
      default:
        Ct(l, t, e, a);
    }
  }
  function Ca(l, t, e, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = l,
        i = t,
        f = e,
        s = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ca(u, i, f, s, n), gn(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null
            ? b._visibility & 2
              ? Ca(u, i, f, s, n)
              : xn(u, i)
            : ((b._visibility |= 2), Ca(u, i, f, s, n)),
            n && y & 2048 && af(i.alternate, i);
          break;
        case 24:
          Ca(u, i, f, s, n), n && y & 2048 && nf(i.alternate, i);
          break;
        default:
          Ca(u, i, f, s, n);
      }
      t = t.sibling;
    }
  }
  function xn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            xn(e, a), n & 2048 && af(a.alternate, a);
            break;
          case 24:
            xn(e, a), n & 2048 && nf(a.alternate, a);
            break;
          default:
            xn(e, a);
        }
        t = t.sibling;
      }
  }
  var Sn = 8192;
  function Da(l, t, e) {
    if (l.subtreeFlags & Sn)
      for (l = l.child; l !== null; ) qd(l, t, e), (l = l.sibling);
  }
  function qd(l, t, e) {
    switch (l.tag) {
      case 26:
        Da(l, t, e),
          l.flags & Sn &&
            l.memoizedState !== null &&
            Hm(e, Mt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Da(l, t, e);
        break;
      case 3:
      case 4:
        var a = Mt;
        (Mt = $u(l.stateNode.containerInfo)), Da(l, t, e), (Mt = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Sn), (Sn = 16777216), Da(l, t, e), (Sn = a))
            : Da(l, t, e));
        break;
      default:
        Da(l, t, e);
    }
  }
  function Yd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function pn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Yl = a), Qd(a, l);
        }
      Yd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Gd(l), (l = l.sibling);
  }
  function Gd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        pn(l), l.flags & 2048 && Se(9, l, l.return);
        break;
      case 3:
        pn(l);
        break;
      case 12:
        pn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Yu(l))
          : pn(l);
        break;
      default:
        pn(l);
    }
  }
  function Yu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Yl = a), Qd(a, l);
        }
      Yd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Se(8, t, t.return), Yu(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Yu(t));
          break;
        default:
          Yu(t);
      }
      l = l.sibling;
    }
  }
  function Qd(l, t) {
    for (; Yl !== null; ) {
      var e = Yl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          an(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Yl = a);
      else
        l: for (e = l; Yl !== null; ) {
          a = Yl;
          var n = a.sibling,
            u = a.return;
          if ((Od(a), a === e)) {
            Yl = null;
            break l;
          }
          if (n !== null) {
            (n.return = u), (Yl = n);
            break l;
          }
          Yl = u;
        }
    }
  }
  var Fh = {
      getCacheForType: function (l) {
        var t = Vl(Dl),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
      cacheSignal: function () {
        return Vl(Dl).controller.signal;
      },
    },
    $h = typeof WeakMap == "function" ? WeakMap : Map,
    ul = 0,
    hl = null,
    $ = null,
    P = 0,
    cl = 0,
    rt = null,
    pe = !1,
    Oa = !1,
    uf = !1,
    le = 0,
    zl = 0,
    je = 0,
    Pe = 0,
    cf = 0,
    ht = 0,
    Ua = 0,
    jn = null,
    et = null,
    ff = !1,
    Gu = 0,
    Xd = 0,
    Qu = 1 / 0,
    Xu = null,
    ze = null,
    Nl = 0,
    Ae = null,
    _a = null,
    te = 0,
    sf = 0,
    of = null,
    Zd = null,
    zn = 0,
    df = null;
  function mt() {
    return (ul & 2) !== 0 && P !== 0 ? P & -P : S.T !== null ? gf() : as();
  }
  function Vd() {
    if (ht === 0)
      if ((P & 536870912) === 0 || tl) {
        var l = kn;
        (kn <<= 1), (kn & 3932160) === 0 && (kn = 262144), (ht = l);
      } else ht = 536870912;
    return (l = ot.current), l !== null && (l.flags |= 32), ht;
  }
  function at(l, t, e) {
    ((l === hl && (cl === 2 || cl === 9)) || l.cancelPendingCommit !== null) &&
      (Na(l, 0), Te(l, P, ht, !1)),
      Va(l, e),
      ((ul & 2) === 0 || l !== hl) &&
        (l === hl &&
          ((ul & 2) === 0 && (Pe |= e), zl === 4 && Te(l, P, ht, !1)),
        Bt(l));
  }
  function Ld(l, t, e) {
    if ((ul & 6) !== 0) throw Error(d(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Za(l, t),
      n = a ? lm(l, t) : hf(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        Oa && !a && Te(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !Ih(e))) {
          (n = hf(l, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              n = jn;
              var s = f.current.memoizedState.isDehydrated;
              if ((s && (Na(f, i).flags |= 256), (i = hf(f, i, !1)), i !== 2)) {
                if (uf && !s) {
                  (f.errorRecoveryDisabledLanes |= u), (Pe |= u), (n = 4);
                  break l;
                }
                (u = et),
                  (et = n),
                  u !== null && (et === null ? (et = u) : et.push.apply(et, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Na(l, 0), Te(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Te(a, t, ht, !pe);
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((n = Gu + 300 - ut()), 10 < n)) {
            if ((Te(a, t, ht, !pe), $n(a, 0, !0) !== 0)) break l;
            (te = t),
              (a.timeoutHandle = pr(
                Kd.bind(
                  null,
                  a,
                  e,
                  et,
                  Xu,
                  ff,
                  t,
                  ht,
                  Pe,
                  Ua,
                  pe,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              ));
            break l;
          }
          Kd(a, e, et, Xu, ff, t, ht, Pe, Ua, pe, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Bt(l);
  }
  function Kd(l, t, e, a, n, u, i, f, s, y, b, p, v, g) {
    if (
      ((l.timeoutHandle = -1),
      (p = t.subtreeFlags),
      p & 8192 || (p & 16785408) === 16785408)
    ) {
      (p = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt,
      }),
        qd(t, u, p);
      var _ =
        (u & 62914560) === u ? Gu - ut() : (u & 4194048) === u ? Xd - ut() : 0;
      if (((_ = Rm(p, _)), _ !== null)) {
        (te = u),
          (l.cancelPendingCommit = _(
            Pd.bind(null, l, t, u, e, a, n, i, f, s, b, p, null, v, g),
          )),
          Te(l, u, i, !y);
        return;
      }
    }
    Pd(l, t, u, e, a, n, i, f, s);
  }
  function Ih(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ft(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Te(l, t, e, a) {
    (t &= ~cf),
      (t &= ~Pe),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - ct(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    e !== 0 && ls(l, e, t);
  }
  function Zu() {
    return (ul & 6) === 0 ? (An(0), !1) : !0;
  }
  function rf() {
    if ($ !== null) {
      if (cl === 0) var l = $.return;
      else (l = $), (Lt = Le = null), Mc(l), (za = null), (un = 0), (l = $);
      for (; l !== null; ) jd(l.alternate, l), (l = l.return);
      $ = null;
    }
  }
  function Na(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), bm(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (te = 0),
      rf(),
      (hl = l),
      ($ = e = Zt(l.current, null)),
      (P = t),
      (cl = 0),
      (rt = null),
      (pe = !1),
      (Oa = Za(l, t)),
      (uf = !1),
      (Ua = ht = cf = Pe = je = zl = 0),
      (et = jn = null),
      (ff = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ct(a),
          u = 1 << n;
        (t |= l[n]), (a &= ~u);
      }
    return (le = t), su(), e;
  }
  function wd(l, t) {
    (J = null),
      (S.H = mn),
      t === ja || t === gu
        ? ((t = co()), (cl = 3))
        : t === yc
          ? ((t = co()), (cl = 4))
          : (cl =
              t === Vc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (rt = t),
      $ === null && ((zl = 1), Uu(l, xt(t, l.current)));
  }
  function Jd() {
    var l = ot.current;
    return l === null
      ? !0
      : (P & 4194048) === P
        ? zt === null
        : (P & 62914560) === P || (P & 536870912) !== 0
          ? l === zt
          : !1;
  }
  function Wd() {
    var l = S.H;
    return (S.H = mn), l === null ? mn : l;
  }
  function kd() {
    var l = S.A;
    return (S.A = Fh), l;
  }
  function Vu() {
    (zl = 4),
      pe || ((P & 4194048) !== P && ot.current !== null) || (Oa = !0),
      ((je & 134217727) === 0 && (Pe & 134217727) === 0) ||
        hl === null ||
        Te(hl, P, ht, !1);
  }
  function hf(l, t, e) {
    var a = ul;
    ul |= 2;
    var n = Wd(),
      u = kd();
    (hl !== l || P !== t) && ((Xu = null), Na(l, t)), (t = !1);
    var i = zl;
    l: do
      try {
        if (cl !== 0 && $ !== null) {
          var f = $,
            s = rt;
          switch (cl) {
            case 8:
              rf(), (i = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ot.current === null && (t = !0);
              var y = cl;
              if (((cl = 0), (rt = null), Ba(l, f, s, y), e && Oa)) {
                i = 0;
                break l;
              }
              break;
            default:
              (y = cl), (cl = 0), (rt = null), Ba(l, f, s, y);
          }
        }
        Ph(), (i = zl);
        break;
      } catch (b) {
        wd(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Lt = Le = null),
      (ul = a),
      (S.H = n),
      (S.A = u),
      $ === null && ((hl = null), (P = 0), su()),
      i
    );
  }
  function Ph() {
    for (; $ !== null; ) Fd($);
  }
  function lm(l, t) {
    var e = ul;
    ul |= 2;
    var a = Wd(),
      n = kd();
    hl !== l || P !== t
      ? ((Xu = null), (Qu = ut() + 500), Na(l, t))
      : (Oa = Za(l, t));
    l: do
      try {
        if (cl !== 0 && $ !== null) {
          t = $;
          var u = rt;
          t: switch (cl) {
            case 1:
              (cl = 0), (rt = null), Ba(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (uo(u)) {
                (cl = 0), (rt = null), $d(t);
                break;
              }
              (t = function () {
                (cl !== 2 && cl !== 9) || hl !== l || (cl = 7), Bt(l);
              }),
                u.then(t, t);
              break l;
            case 3:
              cl = 7;
              break l;
            case 4:
              cl = 5;
              break l;
            case 7:
              uo(u)
                ? ((cl = 0), (rt = null), $d(t))
                : ((cl = 0), (rt = null), Ba(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch ($.tag) {
                case 26:
                  i = $.memoizedState;
                case 5:
                case 27:
                  var f = $;
                  if (i ? Rr(i) : f.stateNode.complete) {
                    (cl = 0), (rt = null);
                    var s = f.sibling;
                    if (s !== null) $ = s;
                    else {
                      var y = f.return;
                      y !== null ? (($ = y), Lu(y)) : ($ = null);
                    }
                    break t;
                  }
              }
              (cl = 0), (rt = null), Ba(l, t, u, 5);
              break;
            case 6:
              (cl = 0), (rt = null), Ba(l, t, u, 6);
              break;
            case 8:
              rf(), (zl = 6);
              break l;
            default:
              throw Error(d(462));
          }
        }
        tm();
        break;
      } catch (b) {
        wd(l, b);
      }
    while (!0);
    return (
      (Lt = Le = null),
      (S.H = a),
      (S.A = n),
      (ul = e),
      $ !== null ? 0 : ((hl = null), (P = 0), su(), zl)
    );
  }
  function tm() {
    for (; $ !== null && !A0(); ) Fd($);
  }
  function Fd(l) {
    var t = Sd(l.alternate, l, le);
    (l.memoizedProps = l.pendingProps), t === null ? Lu(l) : ($ = t);
  }
  function $d(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = md(e, t, t.pendingProps, t.type, void 0, P);
        break;
      case 11:
        t = md(e, t, t.pendingProps, t.type.render, t.ref, P);
        break;
      case 5:
        Mc(t);
      default:
        jd(e, t), (t = $ = Ws(t, le)), (t = Sd(e, t, le));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Lu(l) : ($ = t);
  }
  function Ba(l, t, e, a) {
    (Lt = Le = null), Mc(t), (za = null), (un = 0);
    var n = t.return;
    try {
      if (Vh(l, n, t, e, P)) {
        (zl = 1), Uu(l, xt(e, l.current)), ($ = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw (($ = n), u);
      (zl = 1), Uu(l, xt(e, l.current)), ($ = null);
      return;
    }
    t.flags & 32768
      ? (tl || a === 1
          ? (l = !0)
          : Oa || (P & 536870912) !== 0
            ? (l = !1)
            : ((pe = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ot.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Id(t, l))
      : Lu(t);
  }
  function Lu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Id(t, pe);
        return;
      }
      l = t.return;
      var e = wh(t.alternate, t, le);
      if (e !== null) {
        $ = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function Id(l, t) {
    do {
      var e = Jh(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), ($ = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        $ = l;
        return;
      }
      $ = l = e;
    } while (l !== null);
    (zl = 6), ($ = null);
  }
  function Pd(l, t, e, a, n, u, i, f, s) {
    l.cancelPendingCommit = null;
    do Ku();
    while (Nl !== 0);
    if ((ul & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= lc),
        B0(l, e, u, i, f, s),
        l === hl && (($ = hl = null), (P = 0)),
        (_a = t),
        (Ae = l),
        (te = e),
        (sf = u),
        (of = n),
        (Zd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            um(Jn, function () {
              return nr(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = S.T), (S.T = null), (n = D.p), (D.p = 2), (i = ul), (ul |= 4);
        try {
          Wh(l, t, e);
        } finally {
          (ul = i), (D.p = n), (S.T = a);
        }
      }
      (Nl = 1), lr(), tr(), er();
    }
  }
  function lr() {
    if (Nl === 1) {
      Nl = 0;
      var l = Ae,
        t = _a,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = D.p;
        D.p = 2;
        var n = ul;
        ul |= 4;
        try {
          Bd(t, l);
          var u = Tf,
            i = Gs(l.containerInfo),
            f = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            Ys(f.ownerDocument.documentElement, f)
          ) {
            if (s !== null && ki(f)) {
              var y = s.start,
                b = s.end;
              if ((b === void 0 && (b = y), "selectionStart" in f))
                (f.selectionStart = y),
                  (f.selectionEnd = Math.min(b, f.value.length));
              else {
                var p = f.ownerDocument || document,
                  v = (p && p.defaultView) || window;
                if (v.getSelection) {
                  var g = v.getSelection(),
                    _ = f.textContent.length,
                    G = Math.min(s.start, _),
                    dl = s.end === void 0 ? G : Math.min(s.end, _);
                  !g.extend && G > dl && ((i = dl), (dl = G), (G = i));
                  var r = qs(f, G),
                    o = qs(f, dl);
                  if (
                    r &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== r.node ||
                      g.anchorOffset !== r.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var m = p.createRange();
                    m.setStart(r.node, r.offset),
                      g.removeAllRanges(),
                      G > dl
                        ? (g.addRange(m), g.extend(o.node, o.offset))
                        : (m.setEnd(o.node, o.offset), g.addRange(m));
                  }
                }
              }
            }
            for (p = [], g = f; (g = g.parentNode); )
              g.nodeType === 1 &&
                p.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < p.length;
              f++
            ) {
              var x = p[f];
              (x.element.scrollLeft = x.left), (x.element.scrollTop = x.top);
            }
          }
          (ai = !!Af), (Tf = Af = null);
        } finally {
          (ul = n), (D.p = a), (S.T = e);
        }
      }
      (l.current = t), (Nl = 2);
    }
  }
  function tr() {
    if (Nl === 2) {
      Nl = 0;
      var l = Ae,
        t = _a,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = S.T), (S.T = null);
        var a = D.p;
        D.p = 2;
        var n = ul;
        ul |= 4;
        try {
          Dd(l, t.alternate, t);
        } finally {
          (ul = n), (D.p = a), (S.T = e);
        }
      }
      Nl = 3;
    }
  }
  function er() {
    if (Nl === 4 || Nl === 3) {
      (Nl = 0), T0();
      var l = Ae,
        t = _a,
        e = te,
        a = Zd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Nl = 5)
        : ((Nl = 0), (_a = Ae = null), ar(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (ze = null),
        Oi(e),
        (t = t.stateNode),
        it && typeof it.onCommitFiberRoot == "function")
      )
        try {
          it.onCommitFiberRoot(Xa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = S.T), (n = D.p), (D.p = 2), (S.T = null);
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          (S.T = t), (D.p = n);
        }
      }
      (te & 3) !== 0 && Ku(),
        Bt(l),
        (n = l.pendingLanes),
        (e & 261930) !== 0 && (n & 42) !== 0
          ? l === df
            ? zn++
            : ((zn = 0), (df = l))
          : (zn = 0),
        An(0);
    }
  }
  function ar(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), an(t)));
  }
  function Ku() {
    return lr(), tr(), er(), nr();
  }
  function nr() {
    if (Nl !== 5) return !1;
    var l = Ae,
      t = sf;
    sf = 0;
    var e = Oi(te),
      a = S.T,
      n = D.p;
    try {
      (D.p = 32 > e ? 32 : e), (S.T = null), (e = of), (of = null);
      var u = Ae,
        i = te;
      if (((Nl = 0), (_a = Ae = null), (te = 0), (ul & 6) !== 0))
        throw Error(d(331));
      var f = ul;
      if (
        ((ul |= 4),
        Gd(u.current),
        Rd(u, u.current, i, e),
        (ul = f),
        An(0, !1),
        it && typeof it.onPostCommitFiberRoot == "function")
      )
        try {
          it.onPostCommitFiberRoot(Xa, u);
        } catch {}
      return !0;
    } finally {
      (D.p = n), (S.T = a), ar(l, t);
    }
  }
  function ur(l, t, e) {
    (t = xt(e, t)),
      (t = Zc(l.stateNode, t, 2)),
      (l = ge(l, t, 2)),
      l !== null && (Va(l, 2), Bt(l));
  }
  function fl(l, t, e) {
    if (l.tag === 3) ur(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ur(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ze === null || !ze.has(a)))
          ) {
            (l = xt(e, l)),
              (e = id(2)),
              (a = ge(t, e, 2)),
              a !== null && (cd(e, a, t, l), Va(a, 2), Bt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function mf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new $h();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(e) ||
      ((uf = !0), n.add(e), (l = em.bind(null, l, t, e)), t.then(l, l));
  }
  function em(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      hl === l &&
        (P & e) === e &&
        (zl === 4 || (zl === 3 && (P & 62914560) === P && 300 > ut() - Gu)
          ? (ul & 2) === 0 && Na(l, 0)
          : (cf |= e),
        Ua === P && (Ua = 0)),
      Bt(l);
  }
  function ir(l, t) {
    t === 0 && (t = Pf()), (l = Xe(l, t)), l !== null && (Va(l, t), Bt(l));
  }
  function am(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), ir(l, e);
  }
  function nm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    a !== null && a.delete(t), ir(l, e);
  }
  function um(l, t) {
    return Ei(l, t);
  }
  var wu = null,
    Ha = null,
    yf = !1,
    Ju = !1,
    vf = !1,
    Ee = 0;
  function Bt(l) {
    l !== Ha &&
      l.next === null &&
      (Ha === null ? (wu = Ha = l) : (Ha = Ha.next = l)),
      (Ju = !0),
      yf || ((yf = !0), cm());
  }
  function An(l, t) {
    if (!vf && Ju) {
      vf = !0;
      do
        for (var e = !1, a = wu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              (u = (1 << (31 - ct(42 | l) + 1)) - 1),
                (u &= n & ~(i & ~f)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((e = !0), or(a, u));
          } else
            (u = P),
              (u = $n(
                a,
                a === hl ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Za(a, u) || ((e = !0), or(a, u));
          a = a.next;
        }
      while (e);
      vf = !1;
    }
  }
  function im() {
    cr();
  }
  function cr() {
    Ju = yf = !1;
    var l = 0;
    Ee !== 0 && gm() && (l = Ee);
    for (var t = ut(), e = null, a = wu; a !== null; ) {
      var n = a.next,
        u = fr(a, t);
      u === 0
        ? ((a.next = null),
          e === null ? (wu = n) : (e.next = n),
          n === null && (Ha = e))
        : ((e = a), (l !== 0 || (u & 3) !== 0) && (Ju = !0)),
        (a = n);
    }
    (Nl !== 0 && Nl !== 5) || An(l), Ee !== 0 && (Ee = 0);
  }
  function fr(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ct(u),
        f = 1 << i,
        s = n[i];
      s === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (n[i] = N0(f, t))
        : s <= t && (l.expiredLanes |= f),
        (u &= ~f);
    }
    if (
      ((t = hl),
      (e = P),
      (e = $n(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (cl === 2 || cl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Mi(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Za(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Mi(a), Oi(e))) {
        case 2:
        case 8:
          e = $f;
          break;
        case 32:
          e = Jn;
          break;
        case 268435456:
          e = If;
          break;
        default:
          e = Jn;
      }
      return (
        (a = sr.bind(null, l)),
        (e = Ei(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Mi(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function sr(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (Ku() && l.callbackNode !== e) return null;
    var a = P;
    return (
      (a = $n(
        l,
        l === hl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Ld(l, a, t),
          fr(l, ut()),
          l.callbackNode != null && l.callbackNode === e
            ? sr.bind(null, l)
            : null)
    );
  }
  function or(l, t) {
    if (Ku()) return null;
    Ld(l, t, !0);
  }
  function cm() {
    xm(function () {
      (ul & 6) !== 0 ? Ei(Ff, im) : cr();
    });
  }
  function gf() {
    if (Ee === 0) {
      var l = Sa;
      l === 0 && ((l = Wn), (Wn <<= 1), (Wn & 261888) === 0 && (Wn = 256)),
        (Ee = l);
    }
    return Ee;
  }
  function dr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : tu("" + l);
  }
  function rr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function fm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = dr((n[$l] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[$l] || null)
          ? dr(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var f = new uu("action", "action", null, a, n);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ee !== 0) {
                  var s = i ? rr(n, i) : new FormData(n);
                  Rc(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(),
                  (s = i ? rr(n, i) : new FormData(n)),
                  Rc(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var bf = 0; bf < Pi.length; bf++) {
    var xf = Pi[bf],
      sm = xf.toLowerCase(),
      om = xf[0].toUpperCase() + xf.slice(1);
    Et(sm, "on" + om);
  }
  Et(Zs, "onAnimationEnd"),
    Et(Vs, "onAnimationIteration"),
    Et(Ls, "onAnimationStart"),
    Et("dblclick", "onDoubleClick"),
    Et("focusin", "onFocus"),
    Et("focusout", "onBlur"),
    Et(Eh, "onTransitionRun"),
    Et(Mh, "onTransitionStart"),
    Et(Ch, "onTransitionCancel"),
    Et(Ks, "onTransitionEnd"),
    ia("onMouseEnter", ["mouseout", "mouseover"]),
    ia("onMouseLeave", ["mouseout", "mouseover"]),
    ia("onPointerEnter", ["pointerout", "pointerover"]),
    ia("onPointerLeave", ["pointerout", "pointerover"]),
    qe(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    qe(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qe(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    qe(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    qe(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Tn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    dm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Tn),
    );
  function hr(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              y = f.currentTarget;
            if (((f = f.listener), s !== u && n.isPropagationStopped()))
              break l;
            (u = f), (n.currentTarget = y);
            try {
              u(n);
            } catch (b) {
              fu(b);
            }
            (n.currentTarget = null), (u = s);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (s = f.instance),
              (y = f.currentTarget),
              (f = f.listener),
              s !== u && n.isPropagationStopped())
            )
              break l;
            (u = f), (n.currentTarget = y);
            try {
              u(n);
            } catch (b) {
              fu(b);
            }
            (n.currentTarget = null), (u = s);
          }
      }
    }
  }
  function I(l, t) {
    var e = t[Ui];
    e === void 0 && (e = t[Ui] = new Set());
    var a = l + "__bubble";
    e.has(a) || (mr(t, l, 2, !1), e.add(a));
  }
  function Sf(l, t, e) {
    var a = 0;
    t && (a |= 4), mr(e, l, a, t);
  }
  var Wu = "_reactListening" + Math.random().toString(36).slice(2);
  function pf(l) {
    if (!l[Wu]) {
      (l[Wu] = !0),
        is.forEach(function (e) {
          e !== "selectionchange" && (dm.has(e) || Sf(e, !1, l), Sf(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Wu] || ((t[Wu] = !0), Sf("selectionchange", !1, t));
    }
  }
  function mr(l, t, e, a) {
    switch (Vr(t)) {
      case 2:
        var n = Gm;
        break;
      case 8:
        n = Qm;
        break;
      default:
        n = Rf;
    }
    (e = n.bind(null, t, e, l)),
      (n = void 0),
      !Qi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
          ? l.addEventListener(t, e, { passive: n })
          : l.addEventListener(t, e, !1);
  }
  function jf(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = aa(f)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    bs(function () {
      var y = u,
        b = Yi(e),
        p = [];
      l: {
        var v = ws.get(l);
        if (v !== void 0) {
          var g = uu,
            _ = l;
          switch (l) {
            case "keypress":
              if (au(e) === 0) break l;
            case "keydown":
            case "keyup":
              g = nh;
              break;
            case "focusin":
              (_ = "focus"), (g = Li);
              break;
            case "focusout":
              (_ = "blur"), (g = Li);
              break;
            case "beforeblur":
            case "afterblur":
              g = Li;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = ps;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = w0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ch;
              break;
            case Zs:
            case Vs:
            case Ls:
              g = k0;
              break;
            case Ks:
              g = sh;
              break;
            case "scroll":
            case "scrollend":
              g = L0;
              break;
            case "wheel":
              g = dh;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = $0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = zs;
              break;
            case "toggle":
            case "beforetoggle":
              g = hh;
          }
          var G = (t & 4) !== 0,
            dl = !G && (l === "scroll" || l === "scrollend"),
            r = G ? (v !== null ? v + "Capture" : null) : v;
          G = [];
          for (var o = y, m; o !== null; ) {
            var x = o;
            if (
              ((m = x.stateNode),
              (x = x.tag),
              (x !== 5 && x !== 26 && x !== 27) ||
                m === null ||
                r === null ||
                ((x = wa(o, r)), x != null && G.push(En(o, x, m))),
              dl)
            )
              break;
            o = o.return;
          }
          0 < G.length &&
            ((v = new g(v, _, null, e, b)), p.push({ event: v, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            v &&
              e !== qi &&
              (_ = e.relatedTarget || e.fromElement) &&
              (aa(_) || _[ea]))
          )
            break l;
          if (
            (g || v) &&
            ((v =
              b.window === b
                ? b
                : (v = b.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            g
              ? ((_ = e.relatedTarget || e.toElement),
                (g = y),
                (_ = _ ? aa(_) : null),
                _ !== null &&
                  ((dl = N(_)),
                  (G = _.tag),
                  _ !== dl || (G !== 5 && G !== 27 && G !== 6)) &&
                  (_ = null))
              : ((g = null), (_ = y)),
            g !== _)
          ) {
            if (
              ((G = ps),
              (x = "onMouseLeave"),
              (r = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((G = zs),
                (x = "onPointerLeave"),
                (r = "onPointerEnter"),
                (o = "pointer")),
              (dl = g == null ? v : Ka(g)),
              (m = _ == null ? v : Ka(_)),
              (v = new G(x, o + "leave", g, e, b)),
              (v.target = dl),
              (v.relatedTarget = m),
              (x = null),
              aa(b) === y &&
                ((G = new G(r, o + "enter", _, e, b)),
                (G.target = m),
                (G.relatedTarget = dl),
                (x = G)),
              (dl = x),
              g && _)
            )
              t: {
                for (G = rm, r = g, o = _, m = 0, x = r; x; x = G(x)) m++;
                x = 0;
                for (var R = o; R; R = G(R)) x++;
                for (; 0 < m - x; ) (r = G(r)), m--;
                for (; 0 < x - m; ) (o = G(o)), x--;
                for (; m--; ) {
                  if (r === o || (o !== null && r === o.alternate)) {
                    G = r;
                    break t;
                  }
                  (r = G(r)), (o = G(o));
                }
                G = null;
              }
            else G = null;
            g !== null && yr(p, v, g, G, !1),
              _ !== null && dl !== null && yr(p, dl, _, G, !0);
          }
        }
        l: {
          if (
            ((v = y ? Ka(y) : window),
            (g = v.nodeName && v.nodeName.toLowerCase()),
            g === "select" || (g === "input" && v.type === "file"))
          )
            var al = Us;
          else if (Ds(v))
            if (_s) al = zh;
            else {
              al = ph;
              var B = Sh;
            }
          else
            (g = v.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? y && Ri(y.elementType) && (al = Us)
                : (al = jh);
          if (al && (al = al(l, y))) {
            Os(p, al, e, b);
            break l;
          }
          B && B(l, v, y),
            l === "focusout" &&
              y &&
              v.type === "number" &&
              y.memoizedProps.value != null &&
              Hi(v, "number", v.value);
        }
        switch (((B = y ? Ka(y) : window), l)) {
          case "focusin":
            (Ds(B) || B.contentEditable === "true") &&
              ((ra = B), (Fi = y), (ln = null));
            break;
          case "focusout":
            ln = Fi = ra = null;
            break;
          case "mousedown":
            $i = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ($i = !1), Qs(p, e, b);
            break;
          case "selectionchange":
            if (Th) break;
          case "keydown":
          case "keyup":
            Qs(p, e, b);
        }
        var k;
        if (wi)
          l: {
            switch (l) {
              case "compositionstart":
                var ll = "onCompositionStart";
                break l;
              case "compositionend":
                ll = "onCompositionEnd";
                break l;
              case "compositionupdate":
                ll = "onCompositionUpdate";
                break l;
            }
            ll = void 0;
          }
        else
          da
            ? Ms(l, e) && (ll = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (ll = "onCompositionStart");
        ll &&
          (As &&
            e.locale !== "ko" &&
            (da || ll !== "onCompositionStart"
              ? ll === "onCompositionEnd" && da && (k = xs())
              : ((oe = b),
                (Xi = "value" in oe ? oe.value : oe.textContent),
                (da = !0))),
          (B = ku(y, ll)),
          0 < B.length &&
            ((ll = new js(ll, l, null, e, b)),
            p.push({ event: ll, listeners: B }),
            k ? (ll.data = k) : ((k = Cs(e)), k !== null && (ll.data = k)))),
          (k = yh ? vh(l, e) : gh(l, e)) &&
            ((ll = ku(y, "onBeforeInput")),
            0 < ll.length &&
              ((B = new js("onBeforeInput", "beforeinput", null, e, b)),
              p.push({ event: B, listeners: ll }),
              (B.data = k))),
          fm(p, l, y, e, b);
      }
      hr(p, t);
    });
  }
  function En(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function ku(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = wa(l, e)),
          n != null && a.unshift(En(l, n, u)),
          (n = wa(l, t)),
          n != null && a.push(En(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function rm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function yr(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        s = f.alternate,
        y = f.stateNode;
      if (((f = f.tag), s !== null && s === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        y === null ||
        ((s = y),
        n
          ? ((y = wa(e, u)), y != null && i.unshift(En(e, y, s)))
          : n || ((y = wa(e, u)), y != null && i.push(En(e, y, s)))),
        (e = e.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var hm = /\r\n?/g,
    mm = /\u0000|\uFFFD/g;
  function vr(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        hm,
        `
`,
      )
      .replace(mm, "");
  }
  function gr(l, t) {
    return (t = vr(t)), vr(l) === t;
  }
  function ol(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || fa(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            fa(l, "" + a);
        break;
      case "className":
        Pn(l, "class", a);
        break;
      case "tabIndex":
        Pn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pn(l, e, a);
        break;
      case "style":
        vs(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Pn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = tu("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && ol(l, t, "name", n.name, n, null),
                ol(l, t, "formEncType", n.formEncType, n, null),
                ol(l, t, "formMethod", n.formMethod, n, null),
                ol(l, t, "formTarget", n.formTarget, n, null))
              : (ol(l, t, "encType", n.encType, n, null),
                ol(l, t, "method", n.method, n, null),
                ol(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = tu("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = tu("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        I("beforetoggle", l), I("toggle", l), In(l, "popover", a);
        break;
      case "xlinkActuate":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Gt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Gt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Gt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Gt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        In(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Z0.get(e) || e), In(l, e, a));
    }
  }
  function zf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        vs(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? fa(l, a)
          : (typeof a == "number" || typeof a == "bigint") && fa(l, "" + a);
        break;
      case "onScroll":
        a != null && I("scroll", l);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!cs.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[$l] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
                ? l.setAttribute(e, "")
                : In(l, e, a);
          }
    }
  }
  function Kl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", l), I("load", l);
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  ol(l, t, u, i, e, null);
              }
          }
        n && ol(l, t, "srcSet", e.srcSet, e, null),
          a && ol(l, t, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", l);
        var f = (u = i = n = null),
          s = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var b = e[a];
            if (b != null)
              switch (a) {
                case "name":
                  n = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  y = b;
                  break;
                case "value":
                  u = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(d(137, t));
                  break;
                default:
                  ol(l, t, a, b, e, null);
              }
          }
        rs(l, u, f, s, y, i, n, !1);
        return;
      case "select":
        I("invalid", l), (a = i = u = null);
        for (n in e)
          if (e.hasOwnProperty(n) && ((f = e[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                ol(l, t, n, f, e, null);
            }
        (t = u),
          (e = i),
          (l.multiple = !!a),
          t != null ? ca(l, !!a, t, !1) : e != null && ca(l, !!a, e, !0);
        return;
      case "textarea":
        I("invalid", l), (u = n = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(d(91));
                break;
              default:
                ol(l, t, i, f, e, null);
            }
        ms(l, a, n, u);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ol(l, t, s, a, e, null);
            }
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tn.length; a++) I(Tn[a], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                ol(l, t, y, a, e, null);
            }
        return;
      default:
        if (Ri(t)) {
          for (b in e)
            e.hasOwnProperty(b) &&
              ((a = e[b]), a !== void 0 && zf(l, t, b, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && ol(l, t, f, a, e, null));
  }
  function ym(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          f = null,
          s = null,
          y = null,
          b = null;
        for (g in e) {
          var p = e[g];
          if (e.hasOwnProperty(g) && p != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = p;
              default:
                a.hasOwnProperty(g) || ol(l, t, g, null, a, p);
            }
        }
        for (var v in a) {
          var g = a[v];
          if (((p = e[v]), a.hasOwnProperty(v) && (g != null || p != null)))
            switch (v) {
              case "type":
                u = g;
                break;
              case "name":
                n = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                g !== p && ol(l, t, v, g, a, p);
            }
        }
        Bi(l, i, f, s, y, b, u, n);
        return;
      case "select":
        g = i = f = v = null;
        for (u in e)
          if (((s = e[u]), e.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                a.hasOwnProperty(u) || ol(l, t, u, null, a, s);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (s = e[n]),
            a.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && ol(l, t, n, u, a, s);
            }
        (t = f),
          (e = i),
          (a = g),
          v != null
            ? ca(l, !!e, v, !1)
            : !!a != !!e &&
              (t != null ? ca(l, !!e, t, !0) : ca(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = v = null;
        for (f in e)
          if (
            ((n = e[f]),
            e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ol(l, t, f, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = e[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                g = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && ol(l, t, i, n, a, u);
            }
        hs(l, v, g);
        return;
      case "option":
        for (var _ in e)
          if (
            ((v = e[_]),
            e.hasOwnProperty(_) && v != null && !a.hasOwnProperty(_))
          )
            switch (_) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ol(l, t, _, null, a, v);
            }
        for (s in a)
          if (
            ((v = a[s]),
            (g = e[s]),
            a.hasOwnProperty(s) && v !== g && (v != null || g != null))
          )
            switch (s) {
              case "selected":
                l.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                ol(l, t, s, v, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in e)
          (v = e[G]),
            e.hasOwnProperty(G) &&
              v != null &&
              !a.hasOwnProperty(G) &&
              ol(l, t, G, null, a, v);
        for (y in a)
          if (
            ((v = a[y]),
            (g = e[y]),
            a.hasOwnProperty(y) && v !== g && (v != null || g != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(d(137, t));
                break;
              default:
                ol(l, t, y, v, a, g);
            }
        return;
      default:
        if (Ri(t)) {
          for (var dl in e)
            (v = e[dl]),
              e.hasOwnProperty(dl) &&
                v !== void 0 &&
                !a.hasOwnProperty(dl) &&
                zf(l, t, dl, void 0, a, v);
          for (b in a)
            (v = a[b]),
              (g = e[b]),
              !a.hasOwnProperty(b) ||
                v === g ||
                (v === void 0 && g === void 0) ||
                zf(l, t, b, v, a, g);
          return;
        }
    }
    for (var r in e)
      (v = e[r]),
        e.hasOwnProperty(r) &&
          v != null &&
          !a.hasOwnProperty(r) &&
          ol(l, t, r, null, a, v);
    for (p in a)
      (v = a[p]),
        (g = e[p]),
        !a.hasOwnProperty(p) ||
          v === g ||
          (v == null && g == null) ||
          ol(l, t, p, v, a, g);
  }
  function br(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function vm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var n = e[a],
          u = n.transferSize,
          i = n.initiatorType,
          f = n.duration;
        if (u && f && br(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              y = s.startTime;
            if (y > f) break;
            var b = s.transferSize,
              p = s.initiatorType;
            b &&
              br(p) &&
              ((s = s.responseEnd), (i += b * (s < f ? 1 : (f - y) / (s - y))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Af = null,
    Tf = null;
  function Fu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function xr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sr(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ef(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mf = null;
  function gm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Mf
        ? !1
        : ((Mf = l), !0)
      : ((Mf = null), !1);
  }
  var pr = typeof setTimeout == "function" ? setTimeout : void 0,
    bm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jr = typeof Promise == "function" ? Promise : void 0,
    xm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jr < "u"
          ? function (l) {
              return jr.resolve(null).then(l).catch(Sm);
            }
          : pr;
  function Sm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Me(l) {
    return l === "head";
  }
  function zr(l, t) {
    var e = t,
      a = 0;
    do {
      var n = e.nextSibling;
      if ((l.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            l.removeChild(n), Ga(t);
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") Mn(l.ownerDocument.documentElement);
        else if (e === "head") {
          (e = l.ownerDocument.head), Mn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling,
              f = u.nodeName;
            u[La] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(u),
              (u = i);
          }
        } else e === "body" && Mn(l.ownerDocument.body);
      e = n;
    } while (e);
    Ga(t);
  }
  function Ar(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function Cf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Cf(e), _i(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function pm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[La])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = At(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function jm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Tr(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = At(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Df(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Of(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function zm(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Uf = null;
  function Er(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return At(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Mr(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Cr(l, t, e) {
    switch (((t = Fu(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(d(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(d(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function Mn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    _i(l);
  }
  var Tt = new Map(),
    Dr = new Set();
  function $u(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var ee = D.d;
  D.d = { f: Am, r: Tm, D: Em, C: Mm, L: Cm, m: Dm, X: Um, S: Om, M: _m };
  function Am() {
    var l = ee.f(),
      t = Zu();
    return l || t;
  }
  function Tm(l) {
    var t = na(l);
    t !== null && t.tag === 5 && t.type === "form" ? wo(t) : ee.r(l);
  }
  var Ra = typeof document > "u" ? null : document;
  function Or(l, t, e) {
    var a = Ra;
    if (a && typeof t == "string" && t) {
      var n = gt(t);
      (n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        Dr.has(n) ||
          (Dr.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Kl(t, "link", l),
            ql(t),
            a.head.appendChild(t)));
    }
  }
  function Em(l) {
    ee.D(l), Or("dns-prefetch", l, null);
  }
  function Mm(l, t) {
    ee.C(l, t), Or("preconnect", l, t);
  }
  function Cm(l, t, e) {
    ee.L(l, t, e);
    var a = Ra;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + gt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + gt(e.imageSizes) + '"]'))
        : (n += '[href="' + gt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = qa(l);
          break;
        case "script":
          u = Ya(l);
      }
      Tt.has(u) ||
        ((l = M(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e,
        )),
        Tt.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Cn(u))) ||
          (t === "script" && a.querySelector(Dn(u))) ||
          ((t = a.createElement("link")),
          Kl(t, "link", l),
          ql(t),
          a.head.appendChild(t)));
    }
  }
  function Dm(l, t) {
    ee.m(l, t);
    var e = Ra;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ya(l);
      }
      if (
        !Tt.has(u) &&
        ((l = M({ rel: "modulepreload", href: l }, t)),
        Tt.set(u, l),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Dn(u))) return;
        }
        (a = e.createElement("link")),
          Kl(a, "link", l),
          ql(a),
          e.head.appendChild(a);
      }
    }
  }
  function Om(l, t, e) {
    ee.S(l, t, e);
    var a = Ra;
    if (a && l) {
      var n = ua(a).hoistableStyles,
        u = qa(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(Cn(u)))) f.loading = 5;
        else {
          (l = M({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = Tt.get(u)) && _f(l, e);
          var s = (i = a.createElement("link"));
          ql(s),
            Kl(s, "link", l),
            (s._p = new Promise(function (y, b) {
              (s.onload = y), (s.onerror = b);
            })),
            s.addEventListener("load", function () {
              f.loading |= 1;
            }),
            s.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Iu(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          n.set(u, i);
      }
    }
  }
  function Um(l, t) {
    ee.X(l, t);
    var e = Ra;
    if (e && l) {
      var a = ua(e).hoistableScripts,
        n = Ya(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(Dn(n))),
        u ||
          ((l = M({ src: l, async: !0 }, t)),
          (t = Tt.get(n)) && Nf(l, t),
          (u = e.createElement("script")),
          ql(u),
          Kl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function _m(l, t) {
    ee.M(l, t);
    var e = Ra;
    if (e && l) {
      var a = ua(e).hoistableScripts,
        n = Ya(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(Dn(n))),
        u ||
          ((l = M({ src: l, async: !0, type: "module" }, t)),
          (t = Tt.get(n)) && Nf(l, t),
          (u = e.createElement("script")),
          ql(u),
          Kl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Ur(l, t, e, a) {
    var n = (n = ce.current) ? $u(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = qa(e.href)),
            (e = ua(n).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = qa(e.href);
          var u = ua(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, i),
              (u = n.querySelector(Cn(l))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Tt.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Tt.set(l, e),
                u || Nm(n, l, e, i.state))),
            t && a === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ya(e)),
              (e = ua(n).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, l));
    }
  }
  function qa(l) {
    return 'href="' + gt(l) + '"';
  }
  function Cn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function _r(l) {
    return M({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Nm(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Kl(t, "link", e),
        ql(t),
        l.head.appendChild(t));
  }
  function Ya(l) {
    return '[src="' + gt(l) + '"]';
  }
  function Dn(l) {
    return "script[async]" + l;
  }
  function Nr(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + gt(e.href) + '"]');
          if (a) return (t.instance = a), ql(a), a;
          var n = M({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            ql(a),
            Kl(a, "style", n),
            Iu(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          n = qa(e.href);
          var u = l.querySelector(Cn(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), ql(u), u;
          (a = _r(e)),
            (n = Tt.get(n)) && _f(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            ql(u);
          var i = u;
          return (
            (i._p = new Promise(function (f, s) {
              (i.onload = f), (i.onerror = s);
            })),
            Kl(u, "link", a),
            (t.state.loading |= 4),
            Iu(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ya(e.src)),
            (n = l.querySelector(Dn(u)))
              ? ((t.instance = n), ql(n), n)
              : ((a = e),
                (n = Tt.get(u)) && ((a = M({}, e)), Nf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                ql(n),
                Kl(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Iu(a, e.precedence, l));
    return t.instance;
  }
  function Iu(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === t) u = f;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function _f(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Nf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Pu = null;
  function Br(l, t, e) {
    if (Pu === null) {
      var a = new Map(),
        n = (Pu = new Map());
      n.set(e, a);
    } else (n = Pu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[La] ||
          u[Xl] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Hr(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null,
      );
  }
  function Bm(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Rr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Hm(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = qa(a.href),
          u = t.querySelector(Cn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = li.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            ql(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = _r(a)),
          (n = Tt.get(n)) && _f(a, n),
          (u = u.createElement("link")),
          ql(u);
        var i = u;
        (i._p = new Promise(function (f, s) {
          (i.onload = f), (i.onerror = s);
        })),
          Kl(u, "link", a),
          (e.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = li.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  var Bf = 0;
  function Rm(l, t) {
    return (
      l.stylesheets && l.count === 0 && ei(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && ei(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < l.imgBytes && Bf === 0 && (Bf = 62500 * vm());
            var n = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && ei(l, l.stylesheets), l.unsuspend))
                ) {
                  var u = l.unsuspend;
                  (l.unsuspend = null), u();
                }
              },
              (l.imgBytes > Bf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = e),
              function () {
                (l.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function li() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ei(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var ti = null;
  function ei(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (ti = new Map()),
        t.forEach(qm, l),
        (ti = null),
        li.call(l));
  }
  function qm(l, t) {
    if (!(t.state.loading & 4)) {
      var e = ti.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), ti.set(l, e);
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = e.get(i) || a),
        u === a && e.set(null, n),
        e.set(i, n),
        this.count++,
        (a = li.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var On = {
    $$typeof: Ml,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function Ym(l, t, e, a, n, u, i, f, s) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ci(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ci(0)),
      (this.hiddenUpdates = Ci(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function qr(l, t, e, a, n, u, i, f, s, y, b, p) {
    return (
      (l = new Ym(l, t, e, i, s, y, b, p, f)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = st(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = rc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      vc(u),
      l
    );
  }
  function Yr(l) {
    return l ? ((l = ya), l) : ya;
  }
  function Gr(l, t, e, a, n, u) {
    (n = Yr(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ve(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = ge(l, a, t)),
      e !== null && (at(e, l, t), fn(e, l, t));
  }
  function Qr(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Hf(l, t) {
    Qr(l, t), (l = l.alternate) && Qr(l, t);
  }
  function Xr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Xe(l, 67108864);
      t !== null && at(t, l, 67108864), Hf(l, 67108864);
    }
  }
  function Zr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = Di(t);
      var e = Xe(l, t);
      e !== null && at(e, l, t), Hf(l, t);
    }
  }
  var ai = !0;
  function Gm(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = D.p;
    try {
      (D.p = 2), Rf(l, t, e, a);
    } finally {
      (D.p = u), (S.T = n);
    }
  }
  function Qm(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = D.p;
    try {
      (D.p = 8), Rf(l, t, e, a);
    } finally {
      (D.p = u), (S.T = n);
    }
  }
  function Rf(l, t, e, a) {
    if (ai) {
      var n = qf(a);
      if (n === null) jf(l, t, a, ni, e), Lr(l, a);
      else if (Zm(n, l, t, e, a)) a.stopPropagation();
      else if ((Lr(l, a), t & 4 && -1 < Xm.indexOf(l))) {
        for (; n !== null; ) {
          var u = na(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Re(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - ct(i));
                      (f.entanglements[1] |= s), (i &= ~s);
                    }
                    Bt(u), (ul & 6) === 0 && ((Qu = ut() + 500), An(0));
                  }
                }
                break;
              case 31:
              case 13:
                (f = Xe(u, 2)), f !== null && at(f, u, 2), Zu(), Hf(u, 2);
            }
          if (((u = qf(a)), u === null && jf(l, t, a, ni, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else jf(l, t, a, null, e);
    }
  }
  function qf(l) {
    return (l = Yi(l)), Yf(l);
  }
  var ni = null;
  function Yf(l) {
    if (((ni = null), (l = aa(l)), l !== null)) {
      var t = N(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = w(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = V(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (ni = l), null;
  }
  function Vr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (E0()) {
          case Ff:
            return 2;
          case $f:
            return 8;
          case Jn:
          case M0:
            return 32;
          case If:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1,
    Ce = null,
    De = null,
    Oe = null,
    Un = new Map(),
    _n = new Map(),
    Ue = [],
    Xm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Lr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ce = null;
        break;
      case "dragenter":
      case "dragleave":
        De = null;
        break;
      case "mouseover":
      case "mouseout":
        Oe = null;
        break;
      case "pointerover":
      case "pointerout":
        Un.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function Nn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = na(t)), t !== null && Xr(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function Zm(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return (Ce = Nn(Ce, l, t, e, a, n)), !0;
      case "dragenter":
        return (De = Nn(De, l, t, e, a, n)), !0;
      case "mouseover":
        return (Oe = Nn(Oe, l, t, e, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Un.set(u, Nn(Un.get(u) || null, l, t, e, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), _n.set(u, Nn(_n.get(u) || null, l, t, e, a, n)), !0
        );
    }
    return !1;
  }
  function Kr(l) {
    var t = aa(l.target);
    if (t !== null) {
      var e = N(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = w(e)), t !== null)) {
            (l.blockedOn = t),
              ns(l.priority, function () {
                Zr(e);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = V(e)), t !== null)) {
            (l.blockedOn = t),
              ns(l.priority, function () {
                Zr(e);
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ui(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = qf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (qi = a), e.target.dispatchEvent(a), (qi = null);
      } else return (t = na(e)), t !== null && Xr(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function wr(l, t, e) {
    ui(l) && e.delete(t);
  }
  function Vm() {
    (Gf = !1),
      Ce !== null && ui(Ce) && (Ce = null),
      De !== null && ui(De) && (De = null),
      Oe !== null && ui(Oe) && (Oe = null),
      Un.forEach(wr),
      _n.forEach(wr);
  }
  function ii(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Gf ||
        ((Gf = !0),
        h.unstable_scheduleCallback(h.unstable_NormalPriority, Vm)));
  }
  var ci = null;
  function Jr(l) {
    ci !== l &&
      ((ci = l),
      h.unstable_scheduleCallback(h.unstable_NormalPriority, function () {
        ci === l && (ci = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (Yf(a || e) === null) continue;
            break;
          }
          var u = na(e);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Rc(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function Ga(l) {
    function t(s) {
      return ii(s, l);
    }
    Ce !== null && ii(Ce, l),
      De !== null && ii(De, l),
      Oe !== null && ii(Oe, l),
      Un.forEach(t),
      _n.forEach(t);
    for (var e = 0; e < Ue.length; e++) {
      var a = Ue[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ue.length && ((e = Ue[0]), e.blockedOn === null); )
      Kr(e), e.blockedOn === null && Ue.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[$l] || null;
        if (typeof u == "function") i || Jr(e);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[$l] || null))) f = i.formAction;
            else if (Yf(n) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            Jr(e);
        }
      }
  }
  function Wr() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      n !== null && (n(), (n = null)), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Qf(l) {
    this._internalRoot = l;
  }
  (fi.prototype.render = Qf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var e = t.current,
        a = mt();
      Gr(e, a, l, t, null, null);
    }),
    (fi.prototype.unmount = Qf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Gr(l.current, 2, null, l, null, null), Zu(), (t[ea] = null);
        }
      });
  function fi(l) {
    this._internalRoot = l;
  }
  fi.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = as();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ue.length && t !== 0 && t < Ue[e].priority; e++);
      Ue.splice(e, 0, l), e === 0 && Kr(l);
    }
  };
  var kr = C.version;
  if (kr !== "19.2.4") throw Error(d(527, kr, "19.2.4"));
  D.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(d(188))
        : ((l = Object.keys(l).join(",")), Error(d(268, l)));
    return (
      (l = Y(t)),
      (l = l !== null ? q(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Lm = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
      try {
        (Xa = si.inject(Lm)), (it = si);
      } catch {}
  }
  return (
    (Bn.createRoot = function (l, t) {
      if (!E(l)) throw Error(d(299));
      var e = !1,
        a = "",
        n = ed,
        u = ad,
        i = nd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = qr(l, 1, !1, null, null, e, a, null, n, u, i, Wr)),
        (l[ea] = t.current),
        pf(l),
        new Qf(t)
      );
    }),
    (Bn.hydrateRoot = function (l, t, e) {
      if (!E(l)) throw Error(d(299));
      var a = !1,
        n = "",
        u = ed,
        i = ad,
        f = nd,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (t = qr(l, 1, !0, t, e ?? null, a, n, s, u, i, f, Wr)),
        (t.context = Yr(null)),
        (e = t.current),
        (a = mt()),
        (a = Di(a)),
        (n = ve(a)),
        (n.callback = null),
        ge(e, n, a),
        (e = a),
        (t.current.lanes = e),
        Va(t, e),
        Bt(t),
        (l[ea] = t.current),
        pf(l),
        new fi(t)
      );
    }),
    (Bn.version = "19.2.4"),
    Bn
  );
}
var t0;
function xy() {
  if (t0) return Xf.exports;
  t0 = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (C) {
        console.error(C);
      }
  }
  return h(), (Xf.exports = by()), Xf.exports;
}
var Sy = xy();
const py = wm({
  palette: {
    mode: "dark",
    primary: {
      main: "#69F000",
      light: "#8FFF3A",
      dark: "#4DB800",
      contrastText: "#0A0A0A",
    },
    secondary: {
      main: "#00BCD4",
      light: "#4DD0E1",
      dark: "#00838F",
      contrastText: "#0A0A0A",
    },
    background: { default: "#0D0D0D", paper: "#161616" },
    success: { main: "#69F000" },
    warning: { main: "#FFB300" },
    error: { main: "#FF5252" },
    info: { main: "#40C4FF" },
    text: { primary: "#EFEFEF", secondary: "#757575", disabled: "#424242" },
    divider: "rgba(255,255,255,0.07)",
    action: {
      hover: "rgba(105,240,0,0.05)",
      selected: "rgba(105,240,0,0.10)",
      disabledBackground: "rgba(255,255,255,0.05)",
    },
  },
  typography: {
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    overline: { fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.65rem" },
    button: { fontWeight: 600, letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        body { background: #0D0D0D; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #424242; }
      `,
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          background: "#111111",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          background: "#161616",
          border: "1px solid rgba(255,255,255,0.07)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 6,
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        containedPrimary: {
          color: "#0A0A0A",
          backgroundColor: "#69F000",
          "&:hover": { backgroundColor: "#7AFF10", boxShadow: "none" },
        },
        outlinedPrimary: {
          borderColor: "rgba(105,240,0,0.4)",
          color: "#69F000",
          "&:hover": {
            borderColor: "#69F000",
            backgroundColor: "rgba(105,240,0,0.05)",
          },
        },
      },
    },
    MuiIconButton: { styleOverrides: { root: { borderRadius: 6 } } },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, fontSize: "0.7rem", borderRadius: 4 },
        colorPrimary: {
          backgroundColor: "rgba(105,240,0,0.12)",
          color: "#69F000",
          border: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: "rgba(255,255,255,0.05)", padding: "10px 16px" },
        head: {
          fontWeight: 700,
          color: "#616161",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          background: "#111111",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "rgba(255,255,255,0.02) !important" },
          "&:last-child td": { borderBottom: "none" },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase.Mui-checked": { color: "#69F000" },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#69F000",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
          "&:hover fieldset": {
            borderColor: "rgba(255,255,255,0.2) !important",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#69F000 !important",
            borderWidth: "1px !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { "&.Mui-focused": { color: "#69F000" } } },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: 8,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: { fontSize: "1rem", fontWeight: 600, padding: "20px 24px 16px" },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "&.Mui-selected": {
            backgroundColor: "rgba(105,240,0,0.10)",
            "& .MuiListItemIcon-root": { color: "#69F000" },
            "& .MuiListItemText-primary": { color: "#69F000", fontWeight: 600 },
            "&:hover": { backgroundColor: "rgba(105,240,0,0.13)" },
          },
          "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { backgroundColor: "rgba(105,240,0,0.12)", borderRadius: 2 },
        bar: { backgroundColor: "#69F000", borderRadius: 2 },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 6, border: "1px solid" },
        standardInfo: {
          borderColor: "rgba(64,196,255,0.2)",
          backgroundColor: "rgba(64,196,255,0.05)",
        },
        standardError: {
          borderColor: "rgba(255,82,82,0.2)",
          backgroundColor: "rgba(255,82,82,0.05)",
        },
        standardSuccess: {
          borderColor: "rgba(105,240,0,0.2)",
          backgroundColor: "rgba(105,240,0,0.05)",
        },
        standardWarning: {
          borderColor: "rgba(255,179,0,0.2)",
          backgroundColor: "rgba(255,179,0,0.05)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: "rgba(255,255,255,0.07)" } },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#2A2A2A",
          border: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.75rem",
          fontWeight: 500,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
          "&.Mui-selected": {
            backgroundColor: "rgba(105,240,0,0.1)",
            "&:hover": { backgroundColor: "rgba(105,240,0,0.13)" },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: { colorPrimary: { color: "#69F000" } },
    },
    MuiSlider: { styleOverrides: { root: { color: "#69F000" } } },
  },
});
let oi = null,
  di = null;
async function jy() {
  return (
    oi ||
    di ||
    ((di = (async () => {
      const h = await fetch("/api/socket"),
        { url: C } = await h.json();
      return (oi = yy(C, { transports: ["websocket"] })), oi;
    })()),
    di)
  );
}
function Si() {
  const [h, C] = A.useState(!1),
    [T, d] = A.useState(null);
  return (
    A.useEffect(() => {
      let E = !1;
      return (
        jy().then((N) => {
          if (E) return;
          d(N);
          const w = () => C(!0),
            V = () => C(!1);
          return (
            N.on("connect", w),
            N.on("disconnect", V),
            C(N.connected),
            () => {
              N.off("connect", w), N.off("disconnect", V);
            }
          );
        }),
        () => {
          E = !0;
        }
      );
    }, []),
    { socket: T, connected: h }
  );
}
function ne(h, C) {
  const { socket: T } = Si(),
    d = A.useRef(C);
  A.useEffect(() => {
    d.current = C;
  }),
    A.useEffect(() => {
      if (!T) return;
      const E = (N) => d.current(N);
      return (
        T.on(h, E),
        () => {
          T.off(h, E);
        }
      );
    }, [T, h]);
}
const Lf = 232,
  e0 = [
    { label: "Home", icon: c.jsx(ty, {}), path: "/" },
    { label: "Song Queue", icon: c.jsx(d0, {}), path: "/queue" },
    { label: "Soundboard", icon: c.jsx(ie, {}), path: "/soundboard" },
    {
      label: "Commands",
      icon: c.jsx(r0, {}),
      path: "/commands",
      section: "Manager",
    },
    { label: "Config", icon: c.jsx(h0, {}), path: "/config" },
    { label: "Custom Replies", icon: c.jsx(m0, {}), path: "/replies" },
    { label: "Channel Points", icon: c.jsx(y0, {}), path: "/channel-points" },
    {
      label: "Chat Overlay",
      icon: c.jsx(v0, {}),
      path: "/overlay/chat",
      section: "Overlays",
    },
    { label: "Feed Overlay", icon: c.jsx(g0, {}), path: "/overlay/feed" },
    { label: "Music Overlay", icon: c.jsx(ri, {}), path: "/overlay/music" },
    { label: "Sound Overlay", icon: c.jsx(ie, {}), path: "/overlay/sound" },
  ];
function a0({ onClose: h }) {
  const C = p0(),
    { connected: T } = Si();
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs(U, {
        sx: { px: 2.5, pt: 3, pb: 2.5 },
        children: [
          c.jsxs(U, {
            sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 2 },
            children: [
              c.jsx(U, {
                component: "img",
                src: "/manao_mini.png",
                alt: "Manao",
                sx: { width: 32, height: 32, flexShrink: 0, display: "block" },
              }),
              c.jsxs(U, {
                children: [
                  c.jsx(H, {
                    variant: "subtitle1",
                    sx: {
                      fontWeight: 700,
                      color: "text.primary",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    },
                    children: "Manao",
                  }),
                  c.jsx(H, {
                    variant: "caption",
                    sx: { color: "text.disabled", fontSize: "0.65rem" },
                    children: "v5.0.0-alpha",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs(U, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              px: 1.5,
              py: 0.75,
              borderRadius: 1,
              background: T ? "rgba(105,240,0,0.06)" : "rgba(255,255,255,0.03)",
              border: "1px solid",
              borderColor: T
                ? "rgba(105,240,0,0.15)"
                : "rgba(255,255,255,0.06)",
            },
            children: [
              c.jsx(Fm, {
                sx: {
                  fontSize: 8,
                  color: T ? "#69F000" : "#424242",
                  flexShrink: 0,
                },
              }),
              c.jsx(H, {
                variant: "caption",
                sx: {
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: T ? "#69F000" : "text.disabled",
                  letterSpacing: "0.03em",
                },
                children: T ? "Connected" : "Disconnected",
              }),
            ],
          }),
        ],
      }),
      c.jsx(Ne, {}),
      c.jsx($m, {
        sx: { flex: 1, px: 1.5, py: 1.5, overflowY: "auto" },
        children: e0.map((d, E) => {
          var V;
          const N = C.pathname === d.path,
            w =
              d.section &&
              (E === 0 ||
                ((V = e0[E - 1]) == null ? void 0 : V.section) !== d.section);
          return c.jsxs(
            U,
            {
              children: [
                w &&
                  c.jsx(H, {
                    variant: "overline",
                    sx: {
                      px: 1,
                      py: 0.5,
                      display: "block",
                      color: "text.disabled",
                      mt: E === 0 ? 0 : 1.5,
                      mb: 0.5,
                    },
                    children: d.section,
                  }),
                c.jsxs(Im, {
                  component: wf,
                  to: d.path,
                  selected: N,
                  onClick: h,
                  sx: { mb: 0.25, px: 1, py: 0.75, minHeight: 36 },
                  children: [
                    c.jsx(Pm, {
                      sx: {
                        minWidth: 32,
                        color: N ? "primary.main" : "text.disabled",
                        "& svg": { fontSize: "1rem" },
                      },
                      children: d.icon,
                    }),
                    c.jsx(ly, {
                      primary: d.label,
                      slotProps: {
                        primary: {
                          fontSize: "0.8125rem",
                          fontWeight: N ? 600 : 400,
                          color: N ? "primary.main" : "text.secondary",
                        },
                      },
                    }),
                  ],
                }),
              ],
            },
            d.path,
          );
        }),
      }),
      c.jsx(Ne, {}),
      c.jsx(U, {
        sx: { px: 2.5, py: 1.5 },
        children: c.jsxs(U, {
          component: "a",
          href: "https://manaobot.netlify.app/",
          target: "_blank",
          rel: "noopener noreferrer",
          sx: {
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "text.disabled",
            fontSize: "0.65rem",
            textDecoration: "none",
            "&:hover": { color: "primary.main" },
            transition: "color 0.15s",
          },
          children: ["Open Docs", c.jsx(Jf, { sx: { fontSize: "0.6rem" } })],
        }),
      }),
    ],
  });
}
function zy({ children: h }) {
  const C = p0(),
    [T, d] = A.useState(!1);
  return C.pathname.startsWith("/overlay/")
    ? c.jsx(c.Fragment, { children: h })
    : c.jsxs(U, {
        sx: {
          display: "flex",
          minHeight: "100vh",
          bgcolor: "background.default",
        },
        children: [
          c.jsx(Jm, {
            position: "fixed",
            elevation: 0,
            sx: {
              display: { xs: "flex", md: "none" },
              background: "#111",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              zIndex: (N) => N.zIndex.drawer + 1,
            },
            children: c.jsxs(Wm, {
              sx: { minHeight: "52px !important", px: 2, gap: 1.5 },
              children: [
                c.jsx(ue, {
                  edge: "start",
                  onClick: () => d(!0),
                  sx: { color: "text.secondary", p: 0.75 },
                  children: c.jsx(km, { fontSize: "small" }),
                }),
                c.jsx(U, {
                  component: "img",
                  src: "/manao_mini.png",
                  alt: "Manao",
                  sx: { width: 24, height: 24, display: "block" },
                }),
                c.jsx(H, {
                  variant: "subtitle2",
                  sx: {
                    fontWeight: 700,
                    color: "text.primary",
                    letterSpacing: "-0.01em",
                  },
                  children: "Manao",
                }),
              ],
            }),
          }),
          c.jsx(Fr, {
            variant: "temporary",
            open: T,
            onClose: () => d(!1),
            ModalProps: { keepMounted: !0 },
            sx: {
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: Lf,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              },
            },
            children: c.jsx(a0, { onClose: () => d(!1) }),
          }),
          c.jsx(Fr, {
            variant: "permanent",
            sx: {
              display: { xs: "none", md: "block" },
              width: Lf,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: Lf,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              },
            },
            children: c.jsx(a0, {}),
          }),
          c.jsx(U, {
            component: "main",
            sx: {
              flexGrow: 1,
              p: { xs: 2, sm: 3 },
              pt: { xs: "68px", md: 3 },
              overflow: "auto",
              minWidth: 0,
              background: "#0D0D0D",
            },
            children: h,
          }),
        ],
      });
}
const Ay = [
    {
      title: "Commands",
      description: "Enable/disable built-in commands and manage custom ones.",
      icon: c.jsx(r0, {}),
      to: "/commands",
    },
    {
      title: "Config",
      description:
        "Language, currency, prefixes, custom messages, chat rewards.",
      icon: c.jsx(h0, {}),
      to: "/config",
    },
    {
      title: "Song Queue",
      description: "View the current song queue and control playback.",
      icon: c.jsx(d0, {}),
      to: "/queue",
    },
    {
      title: "Custom Replies",
      description: "Auto-reply to keywords in chat.",
      icon: c.jsx(m0, {}),
      to: "/replies",
    },
    {
      title: "Channel Points",
      description: "Manage sound rewards and channel point redemptions.",
      icon: c.jsx(y0, {}),
      to: "/channel-points",
    },
    {
      title: "Soundboard",
      description: "Manage and play sounds for your stream.",
      icon: c.jsx(ie, {}),
      to: "/soundboard",
    },
  ],
  Ty = [
    {
      label: "Chat",
      path: "/overlay/chat",
      icon: c.jsx(v0, { fontSize: "small" }),
    },
    {
      label: "Feed",
      path: "/overlay/feed",
      icon: c.jsx(g0, { fontSize: "small" }),
    },
    {
      label: "Music",
      path: "/overlay/music",
      icon: c.jsx(ri, { fontSize: "small" }),
    },
    {
      label: "Sound",
      path: "/overlay/sound",
      icon: c.jsx(ie, { fontSize: "small" }),
    },
  ];
function Ey() {
  return c.jsxs(U, {
    sx: { maxWidth: 900 },
    children: [
      c.jsxs(U, {
        sx: { display: "flex", alignItems: "center", gap: 1.5 },
        children: [
          c.jsx(U, {
            component: "img",
            src: "/manao_mini.png",
            alt: "Manao",
            sx: {
              width: 40,
              height: 40,
              flexShrink: 0,
              display: { xs: "none", md: "block" },
            },
          }),
          c.jsx(H, {
            variant: "h4",
            sx: {
              fontWeight: 700,
              color: "text.primary",
              letterSpacing: "-0.02em",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            },
            children: "Manao Dashboard",
          }),
        ],
      }),
      c.jsx(H, {
        variant: "overline",
        color: "text.disabled",
        sx: { mb: 1.5, display: "block" },
        children: "Quick Access",
      }),
      c.jsx(yt, {
        container: !0,
        spacing: 1.5,
        sx: { mb: 5 },
        children: Ay.map((h) =>
          c.jsx(
            yt,
            {
              size: { xs: 12, sm: 6, md: 4 },
              children: c.jsxs(nt, {
                component: wf,
                to: h.to,
                sx: {
                  p: 2.5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  transition: "border-color 0.15s, background 0.15s",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "rgba(105,240,0,0.25)",
                    background: "#1A1A1A",
                    "& .arrow-icon": { opacity: 1, transform: "translateX(0)" },
                  },
                },
                children: [
                  c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      mb: 2,
                    },
                    children: [
                      c.jsx(U, {
                        sx: {
                          width: 36,
                          height: 36,
                          borderRadius: 1,
                          background: "rgba(105,240,0,0.08)",
                          border: "1px solid rgba(105,240,0,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#69F000",
                          "& svg": { fontSize: "1.1rem" },
                        },
                        children: h.icon,
                      }),
                      c.jsx(ey, {
                        className: "arrow-icon",
                        sx: {
                          fontSize: "0.875rem",
                          color: "text.disabled",
                          opacity: 0,
                          transform: "translateX(-4px)",
                          transition: "opacity 0.15s, transform 0.15s",
                        },
                      }),
                    ],
                  }),
                  c.jsx(H, {
                    variant: "subtitle2",
                    sx: { fontWeight: 600, color: "text.primary", mb: 0.5 },
                    children: h.title,
                  }),
                  c.jsx(H, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: { lineHeight: 1.5 },
                    children: h.description,
                  }),
                ],
              }),
            },
            h.title,
          ),
        ),
      }),
      c.jsx(H, {
        variant: "overline",
        color: "text.disabled",
        sx: { mb: 1.5, display: "block" },
        children: "Stream Overlays",
      }),
      c.jsx(nt, {
        sx: { p: 2.5 },
        children: c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          },
          children: [
            c.jsxs(U, {
              children: [
                c.jsx(H, {
                  variant: "subtitle2",
                  sx: { fontWeight: 600, mb: 0.5 },
                  children: "Browser Sources",
                }),
                c.jsx(H, {
                  variant: "caption",
                  color: "text.secondary",
                  children:
                    "Add these URLs as Browser Sources in OBS or Streamlabs.",
                }),
              ],
            }),
            c.jsx(Al, {
              direction: "row",
              spacing: 1,
              flexWrap: "wrap",
              useFlexGap: !0,
              children: Ty.map((h) =>
                c.jsx(
                  Wl,
                  {
                    component: wf,
                    to: h.path,
                    target: "_blank",
                    size: "small",
                    variant: "outlined",
                    startIcon: h.icon,
                    endIcon: c.jsx(Jf, { sx: { fontSize: "11px !important" } }),
                    sx: { fontSize: "0.75rem" },
                    children: h.label,
                  },
                  h.label,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
const My = "";
async function Hn(h, C) {
  const T = await fetch(`${My}${h}`, {
    headers: { "Content-Type": "application/json" },
    ...C,
  });
  if (!T.ok) throw new Error(`${T.status} ${T.statusText}`);
  return await T.json();
}
const Bl = {
    get: (h) => Hn(h),
    post: (h, C) => Hn(h, { method: "POST", body: JSON.stringify(C) }),
    put: (h, C) => Hn(h, { method: "PUT", body: JSON.stringify(C) }),
    patch: (h, C) => Hn(h, { method: "PATCH", body: JSON.stringify(C) }),
    delete: (h) => Hn(h, { method: "DELETE" }),
  },
  Cy = [
    "everyone",
    "follower",
    "subscriber",
    "vip",
    "moderator",
    "broadcaster",
  ],
  n0 = {
    everyone: "default",
    follower: "info",
    subscriber: "success",
    vip: "secondary",
    moderator: "warning",
    broadcaster: "error",
  },
  u0 = () => ({
    name: "",
    description: "",
    aliases: "",
    permission: "everyone",
    code: 'await context.reply("Hello world!");',
  });
function Dy() {
  const [h, C] = A.useState([]),
    [T, d] = A.useState([]),
    [E, N] = A.useState([]),
    [w, V] = A.useState(""),
    [W, Y] = A.useState(!0),
    [q, M] = A.useState(null),
    [j, Q] = A.useState(!1),
    [X, F] = A.useState(u0()),
    [wl, Jl] = A.useState(!1),
    Gl = A.useCallback(async () => {
      try {
        Y(!0);
        const [z, rl, ml] = await Promise.all([
          Bl.get("/api/commands"),
          Bl.get("/api/config"),
          Bl.get("/api/custom-commands"),
        ]);
        C(z), N(rl.disabledCommands), d(ml);
      } catch (z) {
        M(String(z));
      } finally {
        Y(!1);
      }
    }, []);
  A.useEffect(() => {
    Gl();
  }, [Gl]);
  const Ml = async (z, rl) => {
      const ml = rl ? E.filter((Ql) => Ql !== z) : [...E, z];
      N(ml), await Bl.post("/api/config", { disabledCommands: ml });
    },
    L = () => {
      F(u0()), Q(!0);
    },
    O = (z) => {
      F({
        id: z.id,
        name: z.name,
        description: z.description,
        aliases: z.aliases,
        permission: z.permission,
        code: z.code,
      }),
        Q(!0);
    },
    el = async () => {
      try {
        Jl(!0),
          X.id
            ? await Bl.put(`/api/custom-commands/${X.id}`, X)
            : await Bl.post("/api/custom-commands", X),
          Q(!1),
          await Gl();
      } catch (z) {
        M(String(z));
      } finally {
        Jl(!1);
      }
    },
    pl = async (z) => {
      confirm("Delete this custom command?") &&
        (await Bl.delete(`/api/custom-commands/${z}`), await Gl());
    },
    Cl = h.filter((z) => z.name.toLowerCase().includes(w.toLowerCase()));
  return W
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : c.jsxs(U, {
        children: [
          c.jsx(H, {
            variant: "h5",
            fontWeight: 700,
            gutterBottom: !0,
            children: "Commands",
          }),
          c.jsx(H, {
            variant: "body2",
            color: "text.secondary",
            sx: { mb: 3 },
            children:
              "Enable or disable built-in commands. Add custom commands with TypeScript code.",
          }),
          q &&
            c.jsx(la, {
              severity: "error",
              sx: { mb: 2 },
              onClose: () => M(null),
              children: q,
            }),
          c.jsxs(H, {
            variant: "overline",
            color: "text.secondary",
            fontWeight: 700,
            children: ["Built-in (", Cl.length, ")"],
          }),
          c.jsxs(nt, {
            sx: { mt: 1, mb: 4 },
            children: [
              c.jsx(U, {
                sx: { p: 2, borderBottom: "1px solid rgba(255,255,255,0.06)" },
                children: c.jsx(Hl, {
                  size: "small",
                  placeholder: "Search commands…",
                  value: w,
                  onChange: (z) => V(z.target.value),
                  slotProps: {
                    htmlInput: {
                      startAdornment: c.jsx(b0, {
                        position: "start",
                        children: c.jsx(ay, { fontSize: "small" }),
                      }),
                    },
                  },
                  sx: { width: 280 },
                }),
              }),
              c.jsx(Rn, {
                children: c.jsxs(qn, {
                  size: "small",
                  children: [
                    c.jsx(Yn, {
                      children: c.jsxs(Ht, {
                        children: [
                          c.jsx(Z, { children: "Enabled" }),
                          c.jsx(Z, { children: "Name" }),
                          c.jsx(Z, { children: "Description" }),
                          c.jsx(Z, { children: "Aliases" }),
                          c.jsx(Z, { children: "Permission" }),
                          c.jsx(Z, { children: "Platforms" }),
                        ],
                      }),
                    }),
                    c.jsx(Gn, {
                      children: Cl.map((z) => {
                        const rl = !E.includes(z.name);
                        return c.jsxs(
                          Ht,
                          {
                            hover: !0,
                            children: [
                              c.jsx(Z, {
                                children: c.jsx(x0, {
                                  size: "small",
                                  checked: rl,
                                  onChange: () => Ml(z.name, rl),
                                }),
                              }),
                              c.jsx(Z, {
                                children: c.jsx(H, {
                                  variant: "body2",
                                  fontWeight: 600,
                                  children: z.name,
                                }),
                              }),
                              c.jsx(Z, {
                                children: c.jsx(H, {
                                  variant: "body2",
                                  color: "text.secondary",
                                  children: z.description,
                                }),
                              }),
                              c.jsx(Z, {
                                children: c.jsx(Al, {
                                  direction: "row",
                                  spacing: 0.5,
                                  flexWrap: "wrap",
                                  useFlexGap: !0,
                                  children: (z.aliases ?? []).map((ml) =>
                                    c.jsx(
                                      Rt,
                                      {
                                        label: ml,
                                        size: "small",
                                        variant: "outlined",
                                      },
                                      ml,
                                    ),
                                  ),
                                }),
                              }),
                              c.jsx(Z, {
                                children:
                                  z.permission &&
                                  c.jsx(Rt, {
                                    label: z.permission,
                                    size: "small",
                                    color: n0[z.permission],
                                  }),
                              }),
                              c.jsx(Z, {
                                children: c.jsx(Al, {
                                  direction: "row",
                                  spacing: 0.5,
                                  flexWrap: "wrap",
                                  useFlexGap: !0,
                                  children: (z.platforms.length > 0
                                    ? z.platforms
                                    : ["twitch", "kick", "discord"]
                                  ).map((ml) =>
                                    c.jsx(
                                      Rt,
                                      {
                                        label: ml,
                                        size: "small",
                                        variant: "outlined",
                                      },
                                      ml,
                                    ),
                                  ),
                                }),
                              }),
                            ],
                          },
                          z.name,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          c.jsxs(Al, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { mb: 1 },
            children: [
              c.jsxs(H, {
                variant: "overline",
                color: "text.secondary",
                fontWeight: 700,
                children: ["Custom (", T.length, ")"],
              }),
              c.jsx(Wl, {
                size: "small",
                variant: "contained",
                startIcon: c.jsx(hi, {}),
                onClick: L,
                children: "Add Command",
              }),
            ],
          }),
          c.jsx(nt, {
            children:
              T.length === 0
                ? c.jsx(U, {
                    sx: { p: 4, textAlign: "center" },
                    children: c.jsx(H, {
                      color: "text.secondary",
                      children: "No custom commands yet.",
                    }),
                  })
                : c.jsx(Rn, {
                    children: c.jsxs(qn, {
                      size: "small",
                      children: [
                        c.jsx(Yn, {
                          children: c.jsxs(Ht, {
                            children: [
                              c.jsx(Z, { children: "Name" }),
                              c.jsx(Z, { children: "Description" }),
                              c.jsx(Z, { children: "Permission" }),
                              c.jsx(Z, { align: "right", children: "Actions" }),
                            ],
                          }),
                        }),
                        c.jsx(Gn, {
                          children: T.map((z) =>
                            c.jsxs(
                              Ht,
                              {
                                hover: !0,
                                children: [
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      fontWeight: 600,
                                      children: z.name,
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      children: z.description,
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(Rt, {
                                      label: z.permission,
                                      size: "small",
                                      color: n0[z.permission],
                                    }),
                                  }),
                                  c.jsxs(Z, {
                                    align: "right",
                                    children: [
                                      c.jsx(Be, {
                                        title: "Edit",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          onClick: () => O(z),
                                          children: c.jsx(mi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                      c.jsx(Be, {
                                        title: "Delete",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          color: "error",
                                          onClick: () => pl(z.id),
                                          children: c.jsx(yi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              z.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
          }),
          c.jsxs(vi, {
            open: j,
            onClose: () => Q(!1),
            maxWidth: "sm",
            fullWidth: !0,
            children: [
              c.jsx(gi, {
                children: X.id ? "Edit Custom Command" : "New Custom Command",
              }),
              c.jsx(Ne, {}),
              c.jsx(bi, {
                sx: { pt: 2 },
                children: c.jsxs(Al, {
                  spacing: 2,
                  children: [
                    c.jsx(Hl, {
                      label: "Name",
                      size: "small",
                      value: X.name,
                      onChange: (z) => F({ ...X, name: z.target.value }),
                      required: !0,
                    }),
                    c.jsx(Hl, {
                      label: "Description",
                      size: "small",
                      value: X.description,
                      onChange: (z) => F({ ...X, description: z.target.value }),
                    }),
                    c.jsx(Hl, {
                      label: "Aliases (comma separated)",
                      size: "small",
                      value: X.aliases,
                      onChange: (z) => F({ ...X, aliases: z.target.value }),
                    }),
                    c.jsxs(Qn, {
                      size: "small",
                      children: [
                        c.jsx(Xn, { children: "Permission" }),
                        c.jsx(Zn, {
                          value: X.permission,
                          label: "Permission",
                          onChange: (z) =>
                            F({ ...X, permission: z.target.value }),
                          children: Cy.map((z) =>
                            c.jsx(ae, { value: z, children: z }, z),
                          ),
                        }),
                      ],
                    }),
                    c.jsx(Hl, {
                      label: "Code",
                      multiline: !0,
                      rows: 5,
                      value: X.code,
                      onChange: (z) => F({ ...X, code: z.target.value }),
                      slotProps: {
                        htmlInput: {
                          sx: { fontFamily: "monospace", fontSize: "0.8rem" },
                        },
                      },
                    }),
                  ],
                }),
              }),
              c.jsxs(xi, {
                sx: { p: 2 },
                children: [
                  c.jsx(Wl, { onClick: () => Q(!1), children: "Cancel" }),
                  c.jsx(Wl, {
                    variant: "contained",
                    onClick: el,
                    disabled: wl,
                    children: wl ? c.jsx(qt, { size: 16 }) : "Save",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const Oy = ["twitch", "kick", "discord"],
  Uy = [
    {
      key: "onFollow",
      label: "On Follow",
      placeholder: "[user] just followed!",
    },
    {
      key: "onSubscribe",
      label: "On Subscribe",
      placeholder: "[user] just subscribed!",
    },
    {
      key: "onGiftSubscribe",
      label: "On Gift Subscribe",
      placeholder: "[user] gifted a sub!",
    },
    {
      key: "onRaid",
      label: "On Raid",
      placeholder: "[user] raided with [viewers] viewers!",
    },
    {
      key: "onCheer",
      label: "On Cheer",
      placeholder: "[user] cheered [amount] bits!",
    },
  ];
function _y() {
  const [h, C] = A.useState(null),
    [T, d] = A.useState(!0),
    [E, N] = A.useState(!1),
    [w, V] = A.useState(null),
    [W, Y] = A.useState(null),
    q = A.useCallback(async () => {
      try {
        const j = await Bl.get("/api/config");
        C(j);
      } catch (j) {
        Y(String(j));
      } finally {
        d(!1);
      }
    }, []);
  A.useEffect(() => {
    q();
  }, [q]);
  const M = async () => {
    if (h)
      try {
        N(!0), await Bl.post("/api/config", h), V("Saved!");
      } catch (j) {
        Y(String(j));
      } finally {
        N(!1);
      }
  };
  return T
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : h
      ? c.jsxs(U, {
          sx: { maxWidth: 800 },
          children: [
            c.jsxs(Al, {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              sx: { mb: 3 },
              children: [
                c.jsxs(U, {
                  children: [
                    c.jsx(H, {
                      variant: "h5",
                      fontWeight: 700,
                      children: "Config",
                    }),
                    c.jsx(H, {
                      variant: "body2",
                      color: "text.secondary",
                      children: "Changes are saved to userConfig.json",
                    }),
                  ],
                }),
                c.jsx(Wl, {
                  variant: "contained",
                  startIcon: E ? c.jsx(qt, { size: 14 }) : c.jsx(ny, {}),
                  onClick: M,
                  disabled: E,
                  children: "Save Changes",
                }),
              ],
            }),
            W &&
              c.jsx(la, {
                severity: "error",
                sx: { mb: 2 },
                onClose: () => Y(null),
                children: W,
              }),
            c.jsxs(Al, {
              spacing: 3,
              children: [
                c.jsxs(nt, {
                  sx: { p: 3 },
                  children: [
                    c.jsx(H, {
                      variant: "subtitle1",
                      fontWeight: 700,
                      sx: { mb: 2 },
                      children: "General",
                    }),
                    c.jsxs(yt, {
                      container: !0,
                      spacing: 2,
                      children: [
                        c.jsx(yt, {
                          size: { xs: 12, sm: 6 },
                          children: c.jsxs(Qn, {
                            fullWidth: !0,
                            size: "small",
                            children: [
                              c.jsx(Xn, { children: "Language" }),
                              c.jsxs(Zn, {
                                value: h.language,
                                label: "Language",
                                onChange: (j) =>
                                  C({ ...h, language: j.target.value }),
                                children: [
                                  c.jsx(ae, {
                                    value: "en",
                                    children: "English",
                                  }),
                                  c.jsx(ae, {
                                    value: "th",
                                    children: "ภาษาไทย",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        c.jsx(yt, {
                          size: { xs: 12, sm: 6 },
                          children: c.jsx(Hl, {
                            fullWidth: !0,
                            size: "small",
                            label: "Currency Name",
                            value: h.currency,
                            onChange: (j) =>
                              C({ ...h, currency: j.target.value }),
                            placeholder: "COIN",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs(nt, {
                  sx: { p: 3 },
                  children: [
                    c.jsx(H, {
                      variant: "subtitle1",
                      fontWeight: 700,
                      sx: { mb: 2 },
                      children: "Command Prefixes",
                    }),
                    c.jsx(yt, {
                      container: !0,
                      spacing: 2,
                      children: ["twitch", "kick", "discord"].map((j) =>
                        c.jsx(
                          yt,
                          {
                            size: { xs: 6, sm: 4 },
                            children: c.jsx(Hl, {
                              fullWidth: !0,
                              size: "small",
                              label: `${j.charAt(0).toUpperCase() + j.slice(1)} Prefix`,
                              value: h.prefix[j],
                              onChange: (Q) =>
                                C({
                                  ...h,
                                  prefix: { ...h.prefix, [j]: Q.target.value },
                                }),
                              slotProps: { htmlInput: { maxLength: 3 } },
                            }),
                          },
                          j,
                        ),
                      ),
                    }),
                  ],
                }),
                c.jsxs(nt, {
                  sx: { p: 3 },
                  children: [
                    c.jsx(H, {
                      variant: "subtitle1",
                      fontWeight: 700,
                      sx: { mb: 0.5 },
                      children: "Chat Rewards",
                    }),
                    c.jsx(H, {
                      variant: "caption",
                      color: "text.secondary",
                      sx: { mb: 2, display: "block" },
                      children:
                        "Currency earned by chatters for sending messages.",
                    }),
                    c.jsx(Al, {
                      spacing: 3,
                      divider: c.jsx(Ne, {
                        sx: { borderColor: "rgba(255,255,255,0.06)" },
                      }),
                      children: Oy.map((j) =>
                        c.jsxs(
                          U,
                          {
                            children: [
                              c.jsx(H, {
                                variant: "body2",
                                fontWeight: 700,
                                sx: { mb: 1.5, textTransform: "capitalize" },
                                children: j,
                              }),
                              c.jsxs(yt, {
                                container: !0,
                                spacing: 2,
                                children: [
                                  ["minimum", "maximum", "cooldown"].map((Q) =>
                                    c.jsx(
                                      yt,
                                      {
                                        size: { xs: 6, sm: 3 },
                                        children: c.jsx(Hl, {
                                          fullWidth: !0,
                                          size: "small",
                                          label:
                                            Q.charAt(0).toUpperCase() +
                                            Q.slice(1),
                                          type: "number",
                                          value: h.chatRewards[j][Q],
                                          onChange: (X) =>
                                            C({
                                              ...h,
                                              chatRewards: {
                                                ...h.chatRewards,
                                                [j]: {
                                                  ...h.chatRewards[j],
                                                  [Q]: Number(X.target.value),
                                                },
                                              },
                                            }),
                                          slotProps: {
                                            htmlInput:
                                              Q === "cooldown"
                                                ? {
                                                    endAdornment: c.jsx(b0, {
                                                      position: "end",
                                                      children: "s",
                                                    }),
                                                  }
                                                : void 0,
                                          },
                                        }),
                                      },
                                      Q,
                                    ),
                                  ),
                                  c.jsxs(yt, {
                                    size: { xs: 6, sm: 3 },
                                    children: [
                                      c.jsxs(H, {
                                        variant: "caption",
                                        color: "text.secondary",
                                        gutterBottom: !0,
                                        children: [
                                          "Chance: ",
                                          h.chatRewards[j].chance,
                                          "%",
                                        ],
                                      }),
                                      c.jsx(S0, {
                                        size: "small",
                                        value: h.chatRewards[j].chance,
                                        min: 0,
                                        max: 100,
                                        step: 5,
                                        onChange: (Q, X) =>
                                          C({
                                            ...h,
                                            chatRewards: {
                                              ...h.chatRewards,
                                              [j]: {
                                                ...h.chatRewards[j],
                                                chance: X,
                                              },
                                            },
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          j,
                        ),
                      ),
                    }),
                  ],
                }),
                c.jsxs(nt, {
                  sx: { p: 3 },
                  children: [
                    c.jsx(H, {
                      variant: "subtitle1",
                      fontWeight: 700,
                      sx: { mb: 0.5 },
                      children: "Custom Messages",
                    }),
                    c.jsxs(H, {
                      variant: "caption",
                      color: "text.secondary",
                      sx: { mb: 2, display: "block" },
                      children: [
                        "Use ",
                        c.jsx("code", { children: "[user]" }),
                        ", ",
                        c.jsx("code", { children: "[viewers]" }),
                        ",",
                        " ",
                        c.jsx("code", { children: "[amount]" }),
                        " as placeholders.",
                      ],
                    }),
                    c.jsx(Al, {
                      spacing: 2.5,
                      divider: c.jsx(Ne, {
                        sx: { borderColor: "rgba(255,255,255,0.06)" },
                      }),
                      children: Uy.map(({ key: j, label: Q, placeholder: X }) =>
                        c.jsxs(
                          U,
                          {
                            children: [
                              c.jsx(H, {
                                variant: "body2",
                                fontWeight: 600,
                                sx: { mb: 1 },
                                children: Q,
                              }),
                              c.jsxs(yt, {
                                container: !0,
                                spacing: 2,
                                children: [
                                  c.jsx(yt, {
                                    size: { xs: 12, sm: 6 },
                                    children: c.jsx(Hl, {
                                      fullWidth: !0,
                                      size: "small",
                                      label: "English",
                                      value: h.customMessages[j].en,
                                      onChange: (F) =>
                                        C({
                                          ...h,
                                          customMessages: {
                                            ...h.customMessages,
                                            [j]: {
                                              ...h.customMessages[j],
                                              en: F.target.value,
                                            },
                                          },
                                        }),
                                      placeholder: X,
                                    }),
                                  }),
                                  c.jsx(yt, {
                                    size: { xs: 12, sm: 6 },
                                    children: c.jsx(Hl, {
                                      fullWidth: !0,
                                      size: "small",
                                      label: "Thai",
                                      value: h.customMessages[j].th,
                                      onChange: (F) =>
                                        C({
                                          ...h,
                                          customMessages: {
                                            ...h.customMessages,
                                            [j]: {
                                              ...h.customMessages[j],
                                              th: F.target.value,
                                            },
                                          },
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          j,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            c.jsx(uy, {
              open: !!w,
              autoHideDuration: 3e3,
              onClose: () => V(null),
              message: w,
            }),
          ],
        })
      : c.jsx(la, { severity: "error", children: "Failed to load config." });
}
const i0 = () => ({
  keywordType: "includes",
  responseType: "random",
  keywords: [],
  responses: [],
});
function Ny() {
  const [h, C] = A.useState([]),
    [T, d] = A.useState(!0),
    [E, N] = A.useState(null),
    [w, V] = A.useState(!1),
    [W, Y] = A.useState(null),
    [q, M] = A.useState({ ...i0(), keywordsStr: "", responsesStr: "" }),
    [j, Q] = A.useState(!1),
    X = A.useCallback(async () => {
      try {
        const L = await Bl.get("/api/config");
        C(L.customReplies);
      } catch (L) {
        N(String(L));
      } finally {
        d(!1);
      }
    }, []);
  A.useEffect(() => {
    X();
  }, [X]);
  const F = async (L) => {
      await Bl.post("/api/config", { customReplies: L }), C(L);
    },
    wl = () => {
      Y(null), M({ ...i0(), keywordsStr: "", responsesStr: "" }), V(!0);
    },
    Jl = (L) => {
      const O = h[L];
      Y(L),
        M({
          ...O,
          keywordsStr: O.keywords.join(", "),
          responsesStr: O.responses.join(", "),
        }),
        V(!0);
    },
    Gl = async () => {
      try {
        Q(!0);
        const L = {
            keywordType: q.keywordType,
            responseType: q.responseType,
            keywords: q.keywordsStr
              .split(",")
              .map((el) => el.trim())
              .filter(Boolean),
            responses: q.responsesStr
              .split(",")
              .map((el) => el.trim())
              .filter(Boolean),
          },
          O = W !== null ? h.map((el, pl) => (pl === W ? L : el)) : [...h, L];
        await F(O), V(!1);
      } catch (L) {
        N(String(L));
      } finally {
        Q(!1);
      }
    },
    Ml = async (L) => {
      confirm("Delete this reply?") && (await F(h.filter((O, el) => el !== L)));
    };
  return T
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : c.jsxs(U, {
        children: [
          c.jsxs(Al, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { mb: 3 },
            children: [
              c.jsxs(U, {
                children: [
                  c.jsx(H, {
                    variant: "h5",
                    fontWeight: 700,
                    children: "Custom Replies",
                  }),
                  c.jsx(H, {
                    variant: "body2",
                    color: "text.secondary",
                    children: "Auto-reply when chat messages match a keyword.",
                  }),
                ],
              }),
              c.jsx(Wl, {
                variant: "contained",
                startIcon: c.jsx(hi, {}),
                onClick: wl,
                children: "Add Reply",
              }),
            ],
          }),
          E &&
            c.jsx(la, {
              severity: "error",
              sx: { mb: 2 },
              onClose: () => N(null),
              children: E,
            }),
          c.jsx(nt, {
            children:
              h.length === 0
                ? c.jsx(U, {
                    sx: { p: 4, textAlign: "center" },
                    children: c.jsx(H, {
                      color: "text.secondary",
                      children: "No custom replies yet.",
                    }),
                  })
                : c.jsx(Rn, {
                    children: c.jsxs(qn, {
                      size: "small",
                      children: [
                        c.jsx(Yn, {
                          children: c.jsxs(Ht, {
                            children: [
                              c.jsx(Z, { children: "Match Type" }),
                              c.jsx(Z, { children: "Response Type" }),
                              c.jsx(Z, { children: "Keywords" }),
                              c.jsx(Z, { children: "Responses" }),
                              c.jsx(Z, { align: "right", children: "Actions" }),
                            ],
                          }),
                        }),
                        c.jsx(Gn, {
                          children: h.map((L, O) =>
                            c.jsxs(
                              Ht,
                              {
                                hover: !0,
                                children: [
                                  c.jsx(Z, {
                                    children: c.jsx(Rt, {
                                      label: L.keywordType,
                                      size: "small",
                                      color:
                                        L.keywordType === "exact"
                                          ? "secondary"
                                          : "default",
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(Rt, {
                                      label: L.responseType,
                                      size: "small",
                                      color:
                                        L.responseType === "random"
                                          ? "info"
                                          : "default",
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(Al, {
                                      direction: "row",
                                      spacing: 0.5,
                                      flexWrap: "wrap",
                                      useFlexGap: !0,
                                      children: L.keywords.map((el) =>
                                        c.jsx(
                                          Rt,
                                          {
                                            label: el,
                                            size: "small",
                                            variant: "outlined",
                                          },
                                          el,
                                        ),
                                      ),
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      sx: {
                                        maxWidth: 240,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                      },
                                      children: L.responses.join(" | "),
                                    }),
                                  }),
                                  c.jsxs(Z, {
                                    align: "right",
                                    children: [
                                      c.jsx(Be, {
                                        title: "Edit",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          onClick: () => Jl(O),
                                          children: c.jsx(mi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                      c.jsx(Be, {
                                        title: "Delete",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          color: "error",
                                          onClick: () => Ml(O),
                                          children: c.jsx(yi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              O,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
          }),
          c.jsxs(vi, {
            open: w,
            onClose: () => V(!1),
            maxWidth: "sm",
            fullWidth: !0,
            children: [
              c.jsx(gi, { children: W !== null ? "Edit Reply" : "New Reply" }),
              c.jsx(Ne, {}),
              c.jsx(bi, {
                sx: { pt: 2 },
                children: c.jsxs(Al, {
                  spacing: 2,
                  children: [
                    c.jsxs(Qn, {
                      size: "small",
                      fullWidth: !0,
                      children: [
                        c.jsx(Xn, { children: "Keyword Match Type" }),
                        c.jsxs(Zn, {
                          value: q.keywordType,
                          label: "Keyword Match Type",
                          onChange: (L) =>
                            M({ ...q, keywordType: L.target.value }),
                          children: [
                            c.jsx(ae, {
                              value: "includes",
                              children: "Includes (contains keyword)",
                            }),
                            c.jsx(ae, {
                              value: "exact",
                              children: "Exact (full message match)",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs(Qn, {
                      size: "small",
                      fullWidth: !0,
                      children: [
                        c.jsx(Xn, { children: "Response Type" }),
                        c.jsxs(Zn, {
                          value: q.responseType,
                          label: "Response Type",
                          onChange: (L) =>
                            M({ ...q, responseType: L.target.value }),
                          children: [
                            c.jsx(ae, { value: "random", children: "Random" }),
                            c.jsx(ae, {
                              value: "sequential",
                              children: "Sequential",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Keywords (comma separated)",
                      value: q.keywordsStr,
                      onChange: (L) => M({ ...q, keywordsStr: L.target.value }),
                      placeholder: "hello, hi, hey",
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      multiline: !0,
                      rows: 3,
                      label: "Responses (comma separated)",
                      value: q.responsesStr,
                      onChange: (L) =>
                        M({ ...q, responsesStr: L.target.value }),
                      placeholder: "Hello!, Hi there!, Hey!",
                    }),
                  ],
                }),
              }),
              c.jsxs(xi, {
                sx: { p: 2 },
                children: [
                  c.jsx(Wl, { onClick: () => V(!1), children: "Cancel" }),
                  c.jsx(Wl, {
                    variant: "contained",
                    onClick: Gl,
                    disabled: j,
                    children: j ? c.jsx(qt, { size: 16 }) : "Save",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const c0 = () => ({
  title: "",
  cost: 100,
  prompt: "Redeem to trigger a sound | Generated by Manao",
  isEnabled: !0,
  userInputRequired: !1,
  globalCooldown: 0,
  soundFile: null,
});
function By() {
  const [h, C] = A.useState([]),
    [T, d] = A.useState(!0),
    [E, N] = A.useState(null),
    [w, V] = A.useState(!1),
    [W, Y] = A.useState(null),
    [q, M] = A.useState(c0()),
    [j, Q] = A.useState(!1),
    X = A.useCallback(async () => {
      try {
        const O = await Bl.get("/api/config");
        C(O.soundRewards);
      } catch (O) {
        N(String(O));
      } finally {
        d(!1);
      }
    }, []);
  A.useEffect(() => {
    X();
  }, [X]);
  const F = async (O) => {
      await Bl.post("/api/config", { soundRewards: O }), C(O);
    },
    wl = () => {
      Y(null), M(c0()), V(!0);
    },
    Jl = (O) => {
      Y(O.id),
        M({
          title: O.title,
          cost: O.cost,
          prompt: O.prompt,
          isEnabled: O.isEnabled,
          userInputRequired: O.userInputRequired,
          globalCooldown: O.globalCooldown,
          soundFile: O.soundFile,
        }),
        V(!0);
    },
    Gl = async () => {
      try {
        Q(!0);
        const O = W ?? crypto.randomUUID(),
          el = W
            ? h.map((pl) => (pl.id === W ? { ...q, id: O } : pl))
            : [...h, { ...q, id: O }];
        await F(el), V(!1);
      } catch (O) {
        N(String(O));
      } finally {
        Q(!1);
      }
    },
    Ml = async (O) => {
      confirm("Delete this reward?") &&
        (await F(h.filter((el) => el.id !== O)));
    },
    L = async (O, el) => {
      const pl = h.map((Cl) => (Cl.id === O ? { ...Cl, isEnabled: el } : Cl));
      await F(pl);
    };
  return T
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : c.jsxs(U, {
        children: [
          c.jsxs(Al, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { mb: 3 },
            children: [
              c.jsxs(U, {
                children: [
                  c.jsx(H, {
                    variant: "h5",
                    fontWeight: 700,
                    children: "Channel Points",
                  }),
                  c.jsx(H, {
                    variant: "body2",
                    color: "text.secondary",
                    children:
                      "Sound rewards redeemable via Twitch Channel Points.",
                  }),
                ],
              }),
              c.jsx(Wl, {
                variant: "contained",
                startIcon: c.jsx(hi, {}),
                onClick: wl,
                children: "Add Reward",
              }),
            ],
          }),
          E &&
            c.jsx(la, {
              severity: "error",
              sx: { mb: 2 },
              onClose: () => N(null),
              children: E,
            }),
          c.jsx(nt, {
            children:
              h.length === 0
                ? c.jsx(U, {
                    sx: { p: 4, textAlign: "center" },
                    children: c.jsx(H, {
                      color: "text.secondary",
                      children: "No sound rewards yet.",
                    }),
                  })
                : c.jsx(Rn, {
                    children: c.jsxs(qn, {
                      size: "small",
                      children: [
                        c.jsx(Yn, {
                          children: c.jsxs(Ht, {
                            children: [
                              c.jsx(Z, { children: "Enabled" }),
                              c.jsx(Z, { children: "Title" }),
                              c.jsx(Z, { children: "Cost" }),
                              c.jsx(Z, { children: "Cooldown" }),
                              c.jsx(Z, { children: "Sound" }),
                              c.jsx(Z, { align: "right", children: "Actions" }),
                            ],
                          }),
                        }),
                        c.jsx(Gn, {
                          children: h.map((O) =>
                            c.jsxs(
                              Ht,
                              {
                                hover: !0,
                                children: [
                                  c.jsx(Z, {
                                    children: c.jsx(x0, {
                                      size: "small",
                                      checked: O.isEnabled,
                                      onChange: (el, pl) => L(O.id, pl),
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      fontWeight: 600,
                                      children: O.title,
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(Rt, {
                                      label: O.cost.toLocaleString(),
                                      size: "small",
                                      color: "primary",
                                      variant: "outlined",
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsxs(H, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      children: [O.globalCooldown, "s"],
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: O.soundFile
                                      ? c.jsx(Rt, {
                                          icon: c.jsx(ie, {}),
                                          label: O.soundFile.split("/").pop(),
                                          size: "small",
                                          color: "success",
                                          variant: "outlined",
                                        })
                                      : c.jsx(H, {
                                          variant: "caption",
                                          color: "text.disabled",
                                          children: "No file",
                                        }),
                                  }),
                                  c.jsxs(Z, {
                                    align: "right",
                                    children: [
                                      c.jsx(Be, {
                                        title: "Edit",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          onClick: () => Jl(O),
                                          children: c.jsx(mi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                      c.jsx(Be, {
                                        title: "Delete",
                                        children: c.jsx(ue, {
                                          size: "small",
                                          color: "error",
                                          onClick: () => Ml(O.id),
                                          children: c.jsx(yi, {
                                            fontSize: "small",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              O.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
          }),
          c.jsxs(vi, {
            open: w,
            onClose: () => V(!1),
            maxWidth: "sm",
            fullWidth: !0,
            children: [
              c.jsx(gi, { children: W ? "Edit Reward" : "New Reward" }),
              c.jsx(Ne, {}),
              c.jsx(bi, {
                sx: { pt: 2 },
                children: c.jsxs(Al, {
                  spacing: 2,
                  children: [
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Title",
                      required: !0,
                      value: q.title,
                      onChange: (O) => M({ ...q, title: O.target.value }),
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Cost",
                      type: "number",
                      value: q.cost,
                      onChange: (O) =>
                        M({ ...q, cost: Number(O.target.value) }),
                      slotProps: { htmlInput: { min: 0 } },
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Description/Prompt",
                      value: q.prompt,
                      onChange: (O) => M({ ...q, prompt: O.target.value }),
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Cooldown (seconds)",
                      type: "number",
                      value: q.globalCooldown,
                      onChange: (O) =>
                        M({ ...q, globalCooldown: Number(O.target.value) }),
                      slotProps: { htmlInput: { min: 0 } },
                    }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Sound file path",
                      value: q.soundFile ?? "",
                      onChange: (O) =>
                        M({ ...q, soundFile: O.target.value || null }),
                      placeholder: "./sounds/mySound.mp3",
                    }),
                  ],
                }),
              }),
              c.jsxs(xi, {
                sx: { p: 2 },
                children: [
                  c.jsx(Wl, { onClick: () => V(!1), children: "Cancel" }),
                  c.jsx(Wl, {
                    variant: "contained",
                    onClick: Gl,
                    disabled: j,
                    children: j ? c.jsx(qt, { size: 16 }) : "Save",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function Hy() {
  const [h, C] = A.useState([]),
    [T, d] = A.useState(!0),
    [E, N] = A.useState(0),
    w = A.useCallback(async () => {
      try {
        const Y = await Bl.get("/api/queue");
        C(Y);
      } catch {
      } finally {
        d(!1);
      }
    }, []);
  A.useEffect(() => {
    w();
  }, [w]),
    ne("songQueue", (Y) => C(Y)),
    ne("songPlayNext", (Y) => C(Y)),
    ne("currentSongProgress", (Y) => N(Y.percent ?? 0));
  const V = h[0],
    W = h.slice(1);
  return T
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : c.jsxs(U, {
        children: [
          c.jsx(H, {
            variant: "h5",
            fontWeight: 700,
            sx: { mb: 3 },
            children: "Song Queue",
          }),
          V
            ? c.jsx(nt, {
                sx: {
                  p: 2.5,
                  mb: 3,
                  background: "rgba(105,240,0,0.04)",
                  border: "1px solid rgba(105,240,0,0.18)",
                },
                children: c.jsxs(Al, {
                  direction: "row",
                  alignItems: "center",
                  spacing: 2,
                  children: [
                    c.jsx($r, {
                      src: V.thumbnail,
                      variant: "rounded",
                      sx: { width: 64, height: 64 },
                      children: c.jsx(ri, {}),
                    }),
                    c.jsxs(U, {
                      sx: { flex: 1, minWidth: 0 },
                      children: [
                        c.jsx(Al, {
                          direction: "row",
                          alignItems: "center",
                          spacing: 1,
                          sx: { mb: 0.5 },
                          children: c.jsx(Rt, {
                            icon: c.jsx(iy, {}),
                            label: "Now Playing",
                            size: "small",
                            color: "primary",
                          }),
                        }),
                        c.jsx(H, {
                          variant: "subtitle1",
                          fontWeight: 700,
                          noWrap: !0,
                          children: V.title,
                        }),
                        c.jsx(H, {
                          variant: "body2",
                          color: "text.secondary",
                          noWrap: !0,
                          children: V.author,
                        }),
                        c.jsxs(H, {
                          variant: "caption",
                          color: "text.secondary",
                          children: ["Requested by ", V.requestedBy],
                        }),
                        c.jsx(cy, {
                          variant: "determinate",
                          value: E,
                          sx: { mt: 1, borderRadius: 1, height: 3 },
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : c.jsxs(la, {
                severity: "info",
                sx: { mb: 3 },
                children: [
                  "No songs in queue. Request a song with ",
                  c.jsx("code", { children: "!sr" }),
                  ".",
                ],
              }),
          W.length > 0 &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs(H, {
                  variant: "overline",
                  color: "text.secondary",
                  fontWeight: 700,
                  children: ["Up Next (", W.length, ")"],
                }),
                c.jsx(nt, {
                  sx: { mt: 1 },
                  children: c.jsx(Rn, {
                    children: c.jsxs(qn, {
                      size: "small",
                      children: [
                        c.jsx(Yn, {
                          children: c.jsxs(Ht, {
                            children: [
                              c.jsx(Z, { children: "#" }),
                              c.jsx(Z, { children: "Song" }),
                              c.jsx(Z, { children: "Requested By" }),
                            ],
                          }),
                        }),
                        c.jsx(Gn, {
                          children: W.map((Y, q) =>
                            c.jsxs(
                              Ht,
                              {
                                hover: !0,
                                children: [
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      fontWeight: 700,
                                      children: q + 2,
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsxs(Al, {
                                      direction: "row",
                                      spacing: 1.5,
                                      alignItems: "center",
                                      children: [
                                        c.jsx($r, {
                                          src: Y.thumbnail,
                                          variant: "rounded",
                                          sx: { width: 40, height: 40 },
                                          children: c.jsx(ri, {
                                            fontSize: "small",
                                          }),
                                        }),
                                        c.jsxs(U, {
                                          sx: { minWidth: 0 },
                                          children: [
                                            c.jsx(H, {
                                              variant: "body2",
                                              fontWeight: 600,
                                              noWrap: !0,
                                              children: Y.title,
                                            }),
                                            c.jsx(H, {
                                              variant: "caption",
                                              color: "text.secondary",
                                              noWrap: !0,
                                              children: Y.author,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  c.jsx(Z, {
                                    children: c.jsx(H, {
                                      variant: "body2",
                                      color: "text.secondary",
                                      children: Y.requestedBy,
                                    }),
                                  }),
                                ],
                              },
                              Y.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
        ],
      });
}
const Ry = { twitch: "#9146FF", kick: "#53FC18", discord: "#5865F2" };
function qy() {
  const [h, C] = A.useState([]),
    T = A.useRef(null);
  return (
    ne("message", (d) => {
      C((E) =>
        [...E, { ...d, key: `${Date.now()}-${Math.random()}` }].slice(-50),
      );
    }),
    A.useEffect(() => {
      var d;
      (d = T.current) == null || d.scrollIntoView({ behavior: "smooth" });
    }, [h]),
    c.jsxs(U, {
      sx: {
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        p: 2,
        overflow: "hidden",
        background: "transparent",
        fontFamily: "'DM Sans', sans-serif",
      },
      children: [
        h.map((d) =>
          c.jsxs(
            U,
            {
              sx: {
                mb: 0.75,
                p: "6px 10px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(4px)",
                borderLeft: `3px solid ${Ry[d.from] ?? "#888"}`,
                maxWidth: 480,
                animation: "fadeSlideIn 0.2s ease",
                "@keyframes fadeSlideIn": {
                  from: { opacity: 0, transform: "translateX(-8px)" },
                  to: { opacity: 1, transform: "translateX(0)" },
                },
              },
              children: [
                d.badges.length > 0 &&
                  c.jsx(U, {
                    sx: {
                      display: "inline-flex",
                      gap: 0.25,
                      mr: 0.5,
                      verticalAlign: "middle",
                    },
                    children: d.badges.map((E, N) =>
                      c.jsx(
                        "img",
                        {
                          src: E,
                          alt: "",
                          style: { width: 16, height: 16, borderRadius: 2 },
                        },
                        N,
                      ),
                    ),
                  }),
                c.jsx("span", {
                  style: {
                    fontWeight: 700,
                    color: d.color || "#fff",
                    fontSize: 14,
                  },
                  children: d.user,
                }),
                c.jsx("span", {
                  style: {
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 4px",
                    fontSize: 12,
                  },
                  children: "·",
                }),
                c.jsx("span", {
                  style: { color: "#e8e8e8", fontSize: 14 },
                  dangerouslySetInnerHTML: { __html: d.message },
                }),
              ],
            },
            d.key,
          ),
        ),
        c.jsx("div", { ref: T }),
      ],
    })
  );
}
const Yy = {
  neutral: "#94A3B8",
  normal: "#69F000",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
};
function Gy() {
  const [h, C] = A.useState([]);
  return (
    ne("feed", (T) => {
      const d = { ...T, key: `${Date.now()}-${Math.random()}` };
      C((E) => [d, ...E.slice(0, 9)]),
        setTimeout(() => {
          C((E) => E.filter((N) => N.key !== d.key));
        }, 8e3);
    }),
    c.jsx(U, {
      sx: {
        position: "fixed",
        top: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
      },
      children: h.map((T) => {
        const d = Yy[T.status];
        return c.jsxs(
          U,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.75,
              borderRadius: "10px",
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${d}55`,
              boxShadow: `0 0 12px ${d}33`,
              minWidth: 220,
              animation: "feedIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              "@keyframes feedIn": {
                from: { opacity: 0, transform: "translateX(40px) scale(0.9)" },
                to: { opacity: 1, transform: "translateX(0) scale(1)" },
              },
            },
            children: [
              c.jsx(U, {
                sx: {
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: `${d}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                },
                children: T.icon,
              }),
              c.jsxs(U, {
                sx: { minWidth: 0 },
                children: [
                  c.jsx(U, {
                    sx: {
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.2,
                    },
                    children: T.name,
                  }),
                  c.jsx(U, {
                    sx: { fontSize: 12, color: d, lineHeight: 1.2 },
                    children: T.action,
                  }),
                ],
              }),
            ],
          },
          T.key,
        );
      }),
    })
  );
}
let f0 = !1,
  s0 = !1;
const Kf = [];
function Qy(h) {
  if (s0) {
    h();
    return;
  }
  if ((Kf.push(h), f0)) return;
  f0 = !0;
  const C = document.createElement("script");
  (C.src = "https://www.youtube.com/iframe_api"),
    document.head.appendChild(C),
    (window.onYouTubeIframeAPIReady = () => {
      (s0 = !0), Kf.forEach((T) => T()), (Kf.length = 0);
    });
}
function Xy() {
  const [h, C] = A.useState(null),
    [T, d] = A.useState(0),
    [E, N] = A.useState(!1),
    w = A.useRef(null),
    V = A.useRef(null),
    W = A.useRef(null),
    { socket: Y } = Si();
  A.useEffect(() => {
    Bl.get("/api/queue")
      .then((j) => {
        C(j[0] ?? null);
      })
      .catch(() => {});
  }, []),
    ne("songRequest", (j) => {
      j.queue[0] && C(j.queue[0]);
    }),
    ne("songPlayNext", (j) => {
      C(j[0] ?? null), d(0);
    }),
    ne("currentSongProgress", (j) => {
      d(j.percent ?? 0);
    });
  const q = A.useCallback(() => {
      W.current && (clearInterval(W.current), (W.current = null));
    }, []),
    M = A.useCallback(() => {
      q(),
        (W.current = setInterval(() => {
          const j = V.current;
          if (!j) return;
          const Q = j.getCurrentTime(),
            X = j.getDuration();
          if (!X) return;
          const F = (Q / X) * 100;
          d(F),
            Y &&
              Y.emit("currentSongProgress", {
                percent: F,
                currentTime: Q,
                duration: X,
              });
        }, 1e3));
    }, [Y, q]);
  return (
    A.useEffect(() => {
      var j;
      if (!h) {
        (j = V.current) == null || j.destroy(), (V.current = null), q();
        return;
      }
      return (
        Qy(() => {
          var X;
          if (!w.current) return;
          (X = V.current) == null || X.destroy(), q();
          const Q = document.createElement("div");
          (w.current.innerHTML = ""),
            w.current.appendChild(Q),
            (V.current = new window.YT.Player(Q, {
              videoId: h.id,
              playerVars: { autoplay: 1, controls: 1 },
              events: {
                onStateChange: (F) => {
                  if (F.data === window.YT.PlayerState.PLAYING) M();
                  else if (F.data === window.YT.PlayerState.ENDED) {
                    if ((q(), d(0), !Y)) return;
                    Y.emit("songEnded");
                  } else q();
                },
              },
            }));
        }),
        () => {
          q();
        }
      );
    }, [h == null ? void 0 : h.id, Y, M, q]),
    c.jsxs(U, {
      sx: {
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        p: 2,
        background: "transparent",
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
      },
      children: [
        c.jsx(U, {
          ref: w,
          sx: {
            position: "absolute",
            bottom: E ? 90 : 1,
            left: E ? 16 : 0,
            width: E ? 320 : 1,
            height: E ? 180 : 1,
            opacity: E ? 1 : 0,
            borderRadius: E ? "12px" : 0,
            overflow: "hidden",
            border: E ? "1px solid rgba(255,255,255,0.15)" : "none",
            boxShadow: E ? "0 8px 32px rgba(0,0,0,0.6)" : "none",
            pointerEvents: E ? "auto" : "none",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            "& iframe": { width: "100% !important", height: "100% !important" },
          },
        }),
        h &&
          c.jsxs(U, {
            onClick: () => N((j) => !j),
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(12px)",
              borderRadius: "14px",
              p: "10px 14px",
              width: 320,
              height: 76,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              pointerEvents: "auto",
              outline: E
                ? "1px solid rgba(105,240,0,0.6)"
                : "1px solid transparent",
              animation: "musicIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transition: "outline 0.2s ease",
              "@keyframes musicIn": {
                from: { opacity: 0, transform: "translateY(20px) scale(0.92)" },
                to: { opacity: 1, transform: "translateY(0) scale(1)" },
              },
            },
            children: [
              c.jsx(U, {
                component: "img",
                src: h.thumbnail,
                alt: "thumbnail",
                sx: {
                  width: 56,
                  height: 56,
                  borderRadius: "99999px",
                  objectFit: "cover",
                  flexShrink: 0,
                  animation: "spin 8s linear infinite",
                  "@keyframes spin": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                  },
                },
              }),
              c.jsxs(U, {
                sx: { minWidth: 0, flex: 1 },
                children: [
                  c.jsx(U, {
                    sx: {
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#fff",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    },
                    children: h.title,
                  }),
                  c.jsx(U, {
                    sx: {
                      fontSize: 11,
                      color: "rgba(255,255,255,0.6)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    },
                    children: h.author,
                  }),
                  c.jsxs(U, {
                    sx: { fontSize: 10, color: "#69F000", mt: 0.25 },
                    children: ["♪ ", h.requestedBy],
                  }),
                ],
              }),
              c.jsx(U, {
                sx: {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: `${T}%`,
                  background: "#69F000",
                  transition: "width 1s linear",
                },
              }),
            ],
          }),
      ],
    })
  );
}
function Zy() {
  const [h, C] = A.useState(80),
    [T, d] = A.useState(!1),
    [E, N] = A.useState(null),
    w = A.useRef(null),
    V = A.useRef(h),
    W = A.useRef(T);
  A.useEffect(() => {
    V.current = h;
  }, [h]),
    A.useEffect(() => {
      W.current = T;
    }, [T]),
    ne("play-sound", (M) => {
      var Q;
      (Q = w.current) == null || Q.pause();
      const j = new Audio(M.url);
      (j.volume = W.current ? 0 : V.current / 100),
        (w.current = j),
        N({ name: M.name, redeemedBy: M.redeemedBy }),
        j.play().catch(() => {}),
        (j.onended = () => N(null));
    });
  const Y = (M, j) => {
      const Q = j;
      C(Q), w.current && (w.current.volume = W.current ? 0 : Q / 100);
    },
    q = () => {
      const M = !T;
      d(M), w.current && (w.current.volume = M ? 0 : V.current / 100);
    };
  return c.jsxs(U, {
    sx: {
      position: "fixed",
      inset: 0,
      background: "transparent",
      fontFamily: "'DM Sans', sans-serif",
      pointerEvents: "none",
    },
    children: [
      c.jsxs(U, {
        sx: {
          position: "absolute",
          bottom: 16,
          right: 16,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          p: "10px 14px",
          width: 200,
          pointerEvents: "auto",
        },
        children: [
          c.jsxs(Al, {
            direction: "row",
            alignItems: "center",
            gap: 1,
            sx: { mb: 1 },
            children: [
              c.jsx(U, {
                onClick: q,
                sx: {
                  cursor: "pointer",
                  color: T ? "error.main" : "primary.main",
                  display: "flex",
                },
                children: T
                  ? c.jsx(fy, { fontSize: "small" })
                  : c.jsx(ie, { fontSize: "small" }),
              }),
              c.jsx(H, {
                variant: "caption",
                color: "text.secondary",
                sx: { flex: 1 },
                children: "Volume",
              }),
              c.jsx(H, {
                variant: "caption",
                fontWeight: 700,
                color: "white",
                children: T ? "Muted" : `${h}%`,
              }),
            ],
          }),
          c.jsx(S0, {
            size: "small",
            value: h,
            min: 0,
            max: 100,
            step: 5,
            onChange: Y,
            sx: { color: T ? "error.main" : "primary.main" },
          }),
        ],
      }),
      E &&
        c.jsxs(U, {
          sx: {
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            p: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            animation: "soundIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            "@keyframes soundIn": {
              from: { opacity: 0, transform: "translateY(12px) scale(0.95)" },
              to: { opacity: 1, transform: "translateY(0) scale(1)" },
            },
          },
          children: [
            c.jsx(U, {
              sx: {
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "rgba(105,240,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: c.jsx(ie, {
                sx: { fontSize: 18, color: "primary.main" },
              }),
            }),
            c.jsxs(U, {
              children: [
                c.jsx(H, {
                  sx: {
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                  },
                  children: E.name,
                }),
                E.redeemedBy &&
                  c.jsxs(H, {
                    sx: {
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.2,
                    },
                    children: ["by ", E.redeemedBy],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
const o0 = { name: "", url: "" };
function Vy() {
  const [h, C] = A.useState([]),
    [T, d] = A.useState([]),
    [E, N] = A.useState(!0),
    [w, V] = A.useState(null),
    [W, Y] = A.useState(!1),
    [q, M] = A.useState(null),
    [j, Q] = A.useState(o0),
    [X, F] = A.useState(null),
    { socket: wl } = Si(),
    Jl = A.useCallback(async () => {
      try {
        const [z, rl] = await Promise.all([
          Bl.get("/api/soundboard"),
          Bl.get("/api/sounds"),
        ]);
        if ((d(rl), (z.soundboard ?? []).length === 0 && rl.length > 0)) {
          const ml = rl.map((Ql) => ({
            name: Ql.replace("/sounds/", "")
              .replace(/\.[^.]+$/, "")
              .replace(/[-_]/g, " "),
            url: Ql,
          }));
          await Bl.post("/api/soundboard", { soundboard: ml }), C(ml);
        } else C(z.soundboard ?? []);
      } catch (z) {
        V(String(z));
      } finally {
        N(!1);
      }
    }, []);
  A.useEffect(() => {
    Jl();
  }, [Jl]);
  const Gl = async (z) => {
      await Bl.post("/api/soundboard", { soundboard: z }), C(z);
    },
    Ml = () => {
      M(null), Q(o0), Y(!0);
    },
    L = (z) => {
      M(z), Q(h[z]), Y(!0);
    },
    O = async () => {
      if (!j.name || !j.url) return;
      const z = q !== null ? h.map((rl, ml) => (ml === q ? j : rl)) : [...h, j];
      await Gl(z), Y(!1);
    },
    el = async (z) => {
      confirm(`Delete "${h[z].name}"?`) &&
        (await Gl(h.filter((rl, ml) => ml !== z)));
    },
    pl = (z, rl) => {
      wl && wl.emit("play-sound", { url: z, name: rl });
    },
    Cl = (z) => {
      X == null || X.pause();
      const rl = new Audio(z);
      rl.play().catch(() => {}), F(rl);
    };
  return E
    ? c.jsx(U, {
        sx: { display: "flex", justifyContent: "center", pt: 8 },
        children: c.jsx(qt, {}),
      })
    : c.jsxs(U, {
        children: [
          c.jsxs(Al, {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            sx: { mb: 3 },
            children: [
              c.jsxs(U, {
                children: [
                  c.jsx(H, {
                    variant: "h5",
                    fontWeight: 700,
                    children: "Soundboard",
                  }),
                  c.jsx(H, {
                    variant: "body2",
                    color: "text.secondary",
                    children:
                      "Click a button to play a sound through the overlay.",
                  }),
                ],
              }),
              c.jsxs(Al, {
                direction: "row",
                gap: 1,
                children: [
                  c.jsx(Wl, {
                    variant: "outlined",
                    size: "small",
                    startIcon: c.jsx(Jf, {}),
                    href: "/overlay/sound",
                    target: "_blank",
                    children: "Open Player",
                  }),
                  c.jsx(Wl, {
                    variant: "contained",
                    startIcon: c.jsx(hi, {}),
                    onClick: Ml,
                    children: "Add Sound",
                  }),
                ],
              }),
            ],
          }),
          w &&
            c.jsx(la, {
              severity: "error",
              sx: { mb: 2 },
              onClose: () => V(null),
              children: w,
            }),
          h.length === 0
            ? c.jsx(nt, {
                sx: { p: 4, textAlign: "center" },
                children: c.jsx(H, {
                  color: "text.secondary",
                  children: "No sounds yet. Add one to get started.",
                }),
              })
            : c.jsx(U, {
                sx: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                  gap: 1.5,
                },
                children: h.map((z, rl) =>
                  c.jsxs(
                    nt,
                    {
                      sx: {
                        position: "relative",
                        aspectRatio: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 1.5,
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "all 0.15s ease",
                        "&:hover": {
                          bgcolor: "rgba(105,240,0,0.12)",
                          borderColor: "primary.main",
                        },
                        "&:active": { transform: "scale(0.96)" },
                        border: "1px solid rgba(255,255,255,0.06)",
                      },
                      onClick: () => pl(z.url, z.name),
                      children: [
                        c.jsx(ie, {
                          sx: { fontSize: 28, color: "primary.main", mb: 1 },
                        }),
                        c.jsx(H, {
                          variant: "body2",
                          fontWeight: 700,
                          textAlign: "center",
                          sx: {
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            wordBreak: "break-word",
                          },
                          children: z.name,
                        }),
                        c.jsxs(Al, {
                          direction: "row",
                          sx: {
                            position: "absolute",
                            top: 4,
                            right: 4,
                            opacity: 0,
                            ".MuiPaper-root:hover &": { opacity: 1 },
                            transition: "opacity 0.15s",
                          },
                          onClick: (ml) => ml.stopPropagation(),
                          children: [
                            c.jsx(Be, {
                              title: "Edit",
                              children: c.jsx(ue, {
                                size: "small",
                                onClick: () => L(rl),
                                children: c.jsx(mi, { sx: { fontSize: 14 } }),
                              }),
                            }),
                            c.jsx(Be, {
                              title: "Delete",
                              children: c.jsx(ue, {
                                size: "small",
                                color: "error",
                                onClick: () => el(rl),
                                children: c.jsx(yi, { sx: { fontSize: 14 } }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    rl,
                  ),
                ),
              }),
          c.jsxs(vi, {
            open: W,
            onClose: () => Y(!1),
            maxWidth: "xs",
            fullWidth: !0,
            children: [
              c.jsx(gi, { children: q !== null ? "Edit Sound" : "Add Sound" }),
              c.jsx(Ne, {}),
              c.jsx(bi, {
                sx: { pt: 2 },
                children: c.jsxs(Al, {
                  spacing: 2,
                  children: [
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Name",
                      required: !0,
                      value: j.name,
                      onChange: (z) => Q({ ...j, name: z.target.value }),
                    }),
                    T.length > 0 &&
                      c.jsxs(Qn, {
                        size: "small",
                        fullWidth: !0,
                        children: [
                          c.jsx(Xn, { children: "Local file" }),
                          c.jsxs(Zn, {
                            value: T.includes(j.url) ? j.url : "",
                            label: "Local file",
                            onChange: (z) => Q({ ...j, url: z.target.value }),
                            children: [
                              c.jsx(ae, {
                                value: "",
                                children: c.jsx("em", { children: "None" }),
                              }),
                              T.map((z) =>
                                c.jsx(
                                  ae,
                                  {
                                    value: z,
                                    children: z.replace("/sounds/", ""),
                                  },
                                  z,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                    c.jsx(Hl, {
                      size: "small",
                      fullWidth: !0,
                      label: "Or paste URL",
                      value: T.includes(j.url) ? "" : j.url,
                      onChange: (z) => Q({ ...j, url: z.target.value }),
                      placeholder: "https://example.com/sound.mp3",
                    }),
                    j.url &&
                      c.jsx(Wl, {
                        size: "small",
                        startIcon: c.jsx(ie, {}),
                        onClick: () => Cl(j.url),
                        children: "Preview",
                      }),
                  ],
                }),
              }),
              c.jsxs(xi, {
                sx: { p: 2 },
                children: [
                  c.jsx(Wl, { onClick: () => Y(!1), children: "Cancel" }),
                  c.jsx(Wl, {
                    variant: "contained",
                    onClick: O,
                    disabled: !j.name || !j.url,
                    children: q !== null ? "Save" : "Add",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function Ly() {
  return c.jsxs(sy, {
    theme: py,
    children: [
      c.jsx(oy, {}),
      c.jsx(hy, {
        children: c.jsx(zy, {
          children: c.jsxs(my, {
            children: [
              c.jsx(Dt, { path: "/", element: c.jsx(Ey, {}) }),
              c.jsx(Dt, { path: "/commands", element: c.jsx(Dy, {}) }),
              c.jsx(Dt, { path: "/config", element: c.jsx(_y, {}) }),
              c.jsx(Dt, { path: "/replies", element: c.jsx(Ny, {}) }),
              c.jsx(Dt, { path: "/channel-points", element: c.jsx(By, {}) }),
              c.jsx(Dt, { path: "/queue", element: c.jsx(Hy, {}) }),
              c.jsx(Dt, { path: "/overlay/chat", element: c.jsx(qy, {}) }),
              c.jsx(Dt, { path: "/overlay/feed", element: c.jsx(Gy, {}) }),
              c.jsx(Dt, { path: "/overlay/music", element: c.jsx(Xy, {}) }),
              c.jsx(Dt, { path: "/overlay/sound", element: c.jsx(Zy, {}) }),
              c.jsx(Dt, { path: "/soundboard", element: c.jsx(Vy, {}) }),
            ],
          }),
        }),
      }),
    ],
  });
}
const j0 = document.getElementById("root");
if (!j0) throw new Error("Root element not found");
Sy.createRoot(j0).render(c.jsx(A.StrictMode, { children: c.jsx(Ly, {}) }));
