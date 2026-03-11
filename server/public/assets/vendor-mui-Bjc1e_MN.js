var lc = Object.defineProperty;
var cc = (e, t, r) =>
  t in e
    ? lc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Ur = (e, t, r) => cc(e, typeof t != "symbol" ? t + "" : t, r);
import {
  R as qn,
  r as m,
  a as jt,
  b as Eo,
  c as uc,
} from "./vendor-react-BEvt7DW7.js";
var On = { exports: {} },
  _r = {}; /**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function dc() {
  if (ia) return _r;
  ia = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(o, n, i) {
    var a = null;
    if (
      (i !== void 0 && (a = "" + i),
      n.key !== void 0 && (a = "" + n.key),
      "key" in n)
    ) {
      i = {};
      for (var s in n) s !== "key" && (i[s] = n[s]);
    } else i = n;
    return (
      (n = i.ref),
      { $$typeof: e, type: o, key: a, ref: n !== void 0 ? n : null, props: i }
    );
  }
  return (_r.Fragment = t), (_r.jsx = r), (_r.jsxs = r), _r;
}
var aa;
function pc() {
  return aa || ((aa = 1), (On.exports = dc())), On.exports;
}
var w = pc();
const uo = { black: "#000", white: "#fff" },
  hr = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  yr = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  vr = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  br = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  xr = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  Gr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  fc = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function Ft(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((o) => r.searchParams.append("args[]", o)),
    `Minified MUI error #${e}; visit ${r} for the full message.`
  );
}
const It = "$$material";
function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
          return e;
        }),
    Jo.apply(null, arguments)
  );
}
function mc(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function gc(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var hc = (function () {
    function e(r) {
      var o = this;
      (this._insertTag = function (n) {
        var i;
        o.tags.length === 0
          ? o.insertionPoint
            ? (i = o.insertionPoint.nextSibling)
            : o.prepend
              ? (i = o.container.firstChild)
              : (i = o.before)
          : (i = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(n, i),
          o.tags.push(n);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (o) {
        o.forEach(this._insertTag);
      }),
      (t.insert = function (o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(gc(this));
        var n = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = mc(n);
          try {
            i.insertRule(o, i.cssRules.length);
          } catch {}
        } else n.appendChild(document.createTextNode(o));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (o) {
          var n;
          return (n = o.parentNode) == null ? void 0 : n.removeChild(o);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ze = "-ms-",
  Qo = "-moz-",
  Oe = "-webkit-",
  Ws = "comm",
  Si = "rule",
  Ci = "decl",
  yc = "@import",
  Hs = "@keyframes",
  vc = "@layer",
  bc = Math.abs,
  ln = String.fromCharCode,
  xc = Object.assign;
function Sc(e, t) {
  return Qe(e, 0) ^ 45
    ? (((((((t << 2) ^ Qe(e, 0)) << 2) ^ Qe(e, 1)) << 2) ^ Qe(e, 2)) << 2) ^
        Qe(e, 3)
    : 0;
}
function Vs(e) {
  return e.trim();
}
function Cc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Le(e, t, r) {
  return e.replace(t, r);
}
function Yn(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function po(e, t, r) {
  return e.slice(t, r);
}
function $t(e) {
  return e.length;
}
function wi(e) {
  return e.length;
}
function Io(e, t) {
  return t.push(e), e;
}
function wc(e, t) {
  return e.map(t).join("");
}
var cn = 1,
  Ir = 1,
  Us = 0,
  it = 0,
  qe = 0,
  jr = "";
function un(e, t, r, o, n, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: o,
    props: n,
    children: i,
    line: cn,
    column: Ir,
    length: a,
    return: "",
  };
}
function Kr(e, t) {
  return xc(un("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function kc() {
  return qe;
}
function Rc() {
  return (
    (qe = it > 0 ? Qe(jr, --it) : 0), Ir--, qe === 10 && ((Ir = 1), cn--), qe
  );
}
function lt() {
  return (
    (qe = it < Us ? Qe(jr, it++) : 0), Ir++, qe === 10 && ((Ir = 1), cn++), qe
  );
}
function Mt() {
  return Qe(jr, it);
}
function Uo() {
  return it;
}
function xo(e, t) {
  return po(jr, e, t);
}
function fo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _s(e) {
  return (cn = Ir = 1), (Us = $t((jr = e))), (it = 0), [];
}
function Gs(e) {
  return (jr = ""), e;
}
function _o(e) {
  return Vs(xo(it - 1, Xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tc(e) {
  for (; (qe = Mt()) && qe < 33; ) lt();
  return fo(e) > 2 || fo(qe) > 3 ? "" : " ";
}
function $c(e, t) {
  for (
    ;
    --t &&
    lt() &&
    !(qe < 48 || qe > 102 || (qe > 57 && qe < 65) || (qe > 70 && qe < 97));
  );
  return xo(e, Uo() + (t < 6 && Mt() == 32 && lt() == 32));
}
function Xn(e) {
  for (; lt(); )
    switch (qe) {
      case e:
        return it;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xn(qe);
        break;
      case 40:
        e === 41 && Xn(e);
        break;
      case 92:
        lt();
        break;
    }
  return it;
}
function Pc(e, t) {
  for (; lt() && e + qe !== 57; ) if (e + qe === 84 && Mt() === 47) break;
  return "/*" + xo(t, it - 1) + "*" + ln(e === 47 ? e : lt());
}
function Ec(e) {
  for (; !fo(Mt()); ) lt();
  return xo(e, it);
}
function Ic(e) {
  return Gs(Go("", null, null, null, [""], (e = _s(e)), 0, [0], e));
}
function Go(e, t, r, o, n, i, a, s, l) {
  for (
    var c = 0,
      u = 0,
      h = a,
      y = 0,
      d = 0,
      f = 0,
      g = 1,
      b = 1,
      x = 1,
      k = 0,
      S = "",
      v = n,
      C = i,
      R = o,
      P = S;
    b;
  )
    switch (((f = k), (k = lt()))) {
      case 40:
        if (f != 108 && Qe(P, h - 1) == 58) {
          Yn((P += Le(_o(k), "&", "&\f")), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += _o(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Tc(f);
        break;
      case 92:
        P += $c(Uo() - 1, 7);
        continue;
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Io(Mc(Pc(lt(), Uo()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * g:
        s[c++] = $t(P) * x;
      case 125 * g:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + u:
            x == -1 && (P = Le(P, /\f/g, "")),
              d > 0 &&
                $t(P) - h &&
                Io(
                  d > 32
                    ? la(P + ";", o, r, h - 1)
                    : la(Le(P, " ", "") + ";", o, r, h - 2),
                  l,
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (Io((R = sa(P, t, r, c, u, n, s, S, (v = []), (C = []), h)), i),
              k === 123)
            )
              if (u === 0) Go(P, t, R, R, v, i, h, s, C);
              else
                switch (y === 99 && Qe(P, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Go(
                      e,
                      R,
                      R,
                      o && Io(sa(e, R, R, 0, 0, n, s, S, n, (v = []), h), C),
                      n,
                      C,
                      h,
                      s,
                      o ? v : C,
                    );
                    break;
                  default:
                    Go(P, R, R, R, [""], C, 0, s, C);
                }
        }
        (c = u = d = 0), (g = x = 1), (S = P = ""), (h = a);
        break;
      case 58:
        (h = 1 + $t(P)), (d = f);
      default:
        if (g < 1) {
          if (k == 123) --g;
          else if (k == 125 && g++ == 0 && Rc() == 125) continue;
        }
        switch (((P += ln(k)), k * g)) {
          case 38:
            x = u > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (s[c++] = ($t(P) - 1) * x), (x = 1);
            break;
          case 64:
            Mt() === 45 && (P += _o(lt())),
              (y = Mt()),
              (u = h = $t((S = P += Ec(Uo())))),
              k++;
            break;
          case 45:
            f === 45 && $t(P) == 2 && (g = 0);
        }
    }
  return i;
}
function sa(e, t, r, o, n, i, a, s, l, c, u) {
  for (
    var h = n - 1, y = n === 0 ? i : [""], d = wi(y), f = 0, g = 0, b = 0;
    f < o;
    ++f
  )
    for (var x = 0, k = po(e, h + 1, (h = bc((g = a[f])))), S = e; x < d; ++x)
      (S = Vs(g > 0 ? y[x] + " " + k : Le(k, /&\f/g, y[x]))) && (l[b++] = S);
  return un(e, t, r, n === 0 ? Si : s, l, c, u);
}
function Mc(e, t, r) {
  return un(e, t, r, Ws, ln(kc()), po(e, 2, -2), 0);
}
function la(e, t, r, o) {
  return un(e, t, r, Ci, po(e, 0, o), po(e, o + 1, -1), o);
}
function $r(e, t) {
  for (var r = "", o = wi(e), n = 0; n < o; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function Ac(e, t, r, o) {
  switch (e.type) {
    case vc:
      if (e.children.length) break;
    case yc:
    case Ci:
      return (e.return = e.return || e.value);
    case Ws:
      return "";
    case Hs:
      return (e.return = e.value + "{" + $r(e.children, o) + "}");
    case Si:
      e.value = e.props.join(",");
  }
  return $t((r = $r(e.children, o)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Oc(e) {
  var t = wi(e);
  return function (r, o, n, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](r, o, n, i) || "";
    return a;
  };
}
function Lc(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Ks(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Bc = function (t, r, o) {
    for (
      var n = 0, i = 0;
      (n = i), (i = Mt()), n === 38 && i === 12 && (r[o] = 1), !fo(i);
    )
      lt();
    return xo(t, it);
  },
  Nc = function (t, r) {
    var o = -1,
      n = 44;
    do
      switch (fo(n)) {
        case 0:
          n === 38 && Mt() === 12 && (r[o] = 1), (t[o] += Bc(it - 1, r, o));
          break;
        case 2:
          t[o] += _o(n);
          break;
        case 4:
          if (n === 44) {
            (t[++o] = Mt() === 58 ? "&\f" : ""), (r[o] = t[o].length);
            break;
          }
        default:
          t[o] += ln(n);
      }
    while ((n = lt()));
    return t;
  },
  zc = function (t, r) {
    return Gs(Nc(_s(t), r));
  },
  ca = new WeakMap(),
  jc = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          o = t.parent,
          n = t.column === o.column && t.line === o.line;
        o.type !== "rule";
      )
        if (((o = o.parent), !o)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ca.get(o)) &&
        !n
      ) {
        ca.set(t, !0);
        for (
          var i = [], a = zc(r, i), s = o.props, l = 0, c = 0;
          l < a.length;
          l++
        )
          for (var u = 0; u < s.length; u++, c++)
            t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
      }
    }
  },
  Fc = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function qs(e, t) {
  switch (Sc(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + Qo + e + Ze + e + e;
    case 6828:
    case 4268:
      return Oe + e + Ze + e + e;
    case 6165:
      return Oe + e + Ze + "flex-" + e + e;
    case 5187:
      return (
        Oe + e + Le(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + Ze + "flex-$1$2") + e
      );
    case 5443:
      return Oe + e + Ze + "flex-item-" + Le(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Oe +
        e +
        Ze +
        "flex-line-pack" +
        Le(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Oe + e + Ze + Le(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + Ze + Le(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Oe +
        "box-" +
        Le(e, "-grow", "") +
        Oe +
        e +
        Ze +
        Le(e, "grow", "positive") +
        e
      );
    case 4554:
      return Oe + Le(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return (
        Le(
          Le(Le(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return Le(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return (
        Le(
          Le(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + Ze + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Oe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Le(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6)
        switch (Qe(e, t + 1)) {
          case 109:
            if (Qe(e, t + 4) !== 45) break;
          case 102:
            return (
              Le(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Oe +
                  "$2-$3$1" +
                  Qo +
                  (Qe(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Yn(e, "stretch")
              ? qs(Le(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115) break;
    case 6444:
      switch (Qe(e, $t(e) - 3 - (~Yn(e, "!important") && 10))) {
        case 107:
          return Le(e, ":", ":" + Oe) + e;
        case 101:
          return (
            Le(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Oe +
                (Qe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Oe +
                "$2$3$1" +
                Ze +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Qe(e, t + 11)) {
        case 114:
          return Oe + e + Ze + Le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + Ze + Le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + Ze + Le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + Ze + e + e;
  }
  return e;
}
var Dc = function (t, r, o, n) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ci:
          t.return = qs(t.value, t.length);
          break;
        case Hs:
          return $r([Kr(t, { value: Le(t.value, "@", "@" + Oe) })], n);
        case Si:
          if (t.length)
            return wc(t.props, function (i) {
              switch (Cc(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return $r(
                    [Kr(t, { props: [Le(i, /:(read-\w+)/, ":" + Qo + "$1")] })],
                    n,
                  );
                case "::placeholder":
                  return $r(
                    [
                      Kr(t, {
                        props: [Le(i, /:(plac\w+)/, ":" + Oe + "input-$1")],
                      }),
                      Kr(t, { props: [Le(i, /:(plac\w+)/, ":" + Qo + "$1")] }),
                      Kr(t, { props: [Le(i, /:(plac\w+)/, Ze + "input-$1")] }),
                    ],
                    n,
                  );
              }
              return "";
            });
      }
  },
  Wc = [Dc],
  Hc = function (t) {
    var r = t.key;
    if (r === "css") {
      var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(o, function (g) {
        var b = g.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var n = t.stylisPlugins || Wc,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (g) {
          for (
            var b = g.getAttribute("data-emotion").split(" "), x = 1;
            x < b.length;
            x++
          )
            i[b[x]] = !0;
          s.push(g);
        },
      );
    var l,
      c = [jc, Fc];
    {
      var u,
        h = [
          Ac,
          Lc(function (g) {
            u.insert(g);
          }),
        ],
        y = Oc(c.concat(n, h)),
        d = function (b) {
          return $r(Ic(b), y);
        };
      l = function (b, x, k, S) {
        (u = k),
          d(b ? b + "{" + x.styles + "}" : x.styles),
          S && (f.inserted[x.name] = !0);
      };
    }
    var f = {
      key: r,
      sheet: new hc({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return f.sheet.hydrate(s), f;
  },
  Ln = { exports: {} },
  Be = {}; /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Vc() {
  if (ua) return Be;
  ua = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    o = e ? Symbol.for("react.fragment") : 60107,
    n = e ? Symbol.for("react.strict_mode") : 60108,
    i = e ? Symbol.for("react.profiler") : 60114,
    a = e ? Symbol.for("react.provider") : 60109,
    s = e ? Symbol.for("react.context") : 60110,
    l = e ? Symbol.for("react.async_mode") : 60111,
    c = e ? Symbol.for("react.concurrent_mode") : 60111,
    u = e ? Symbol.for("react.forward_ref") : 60112,
    h = e ? Symbol.for("react.suspense") : 60113,
    y = e ? Symbol.for("react.suspense_list") : 60120,
    d = e ? Symbol.for("react.memo") : 60115,
    f = e ? Symbol.for("react.lazy") : 60116,
    g = e ? Symbol.for("react.block") : 60121,
    b = e ? Symbol.for("react.fundamental") : 60117,
    x = e ? Symbol.for("react.responder") : 60118,
    k = e ? Symbol.for("react.scope") : 60119;
  function S(C) {
    if (typeof C == "object" && C !== null) {
      var R = C.$$typeof;
      switch (R) {
        case t:
          switch (((C = C.type), C)) {
            case l:
            case c:
            case o:
            case i:
            case n:
            case h:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case s:
                case u:
                case f:
                case d:
                case a:
                  return C;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function v(C) {
    return S(C) === c;
  }
  return (
    (Be.AsyncMode = l),
    (Be.ConcurrentMode = c),
    (Be.ContextConsumer = s),
    (Be.ContextProvider = a),
    (Be.Element = t),
    (Be.ForwardRef = u),
    (Be.Fragment = o),
    (Be.Lazy = f),
    (Be.Memo = d),
    (Be.Portal = r),
    (Be.Profiler = i),
    (Be.StrictMode = n),
    (Be.Suspense = h),
    (Be.isAsyncMode = function (C) {
      return v(C) || S(C) === l;
    }),
    (Be.isConcurrentMode = v),
    (Be.isContextConsumer = function (C) {
      return S(C) === s;
    }),
    (Be.isContextProvider = function (C) {
      return S(C) === a;
    }),
    (Be.isElement = function (C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }),
    (Be.isForwardRef = function (C) {
      return S(C) === u;
    }),
    (Be.isFragment = function (C) {
      return S(C) === o;
    }),
    (Be.isLazy = function (C) {
      return S(C) === f;
    }),
    (Be.isMemo = function (C) {
      return S(C) === d;
    }),
    (Be.isPortal = function (C) {
      return S(C) === r;
    }),
    (Be.isProfiler = function (C) {
      return S(C) === i;
    }),
    (Be.isStrictMode = function (C) {
      return S(C) === n;
    }),
    (Be.isSuspense = function (C) {
      return S(C) === h;
    }),
    (Be.isValidElementType = function (C) {
      return (
        typeof C == "string" ||
        typeof C == "function" ||
        C === o ||
        C === c ||
        C === i ||
        C === n ||
        C === h ||
        C === y ||
        (typeof C == "object" &&
          C !== null &&
          (C.$$typeof === f ||
            C.$$typeof === d ||
            C.$$typeof === a ||
            C.$$typeof === s ||
            C.$$typeof === u ||
            C.$$typeof === b ||
            C.$$typeof === x ||
            C.$$typeof === k ||
            C.$$typeof === g))
      );
    }),
    (Be.typeOf = S),
    Be
  );
}
var da;
function Uc() {
  return da || ((da = 1), (Ln.exports = Vc())), Ln.exports;
}
var Bn, pa;
function _c() {
  if (pa) return Bn;
  pa = 1;
  var e = Uc(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    o = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    n = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    i = {};
  (i[e.ForwardRef] = o), (i[e.Memo] = n);
  function a(f) {
    return e.isMemo(f) ? n : i[f.$$typeof] || t;
  }
  var s = Object.defineProperty,
    l = Object.getOwnPropertyNames,
    c = Object.getOwnPropertySymbols,
    u = Object.getOwnPropertyDescriptor,
    h = Object.getPrototypeOf,
    y = Object.prototype;
  function d(f, g, b) {
    if (typeof g != "string") {
      if (y) {
        var x = h(g);
        x && x !== y && d(f, x, b);
      }
      var k = l(g);
      c && (k = k.concat(c(g)));
      for (var S = a(f), v = a(g), C = 0; C < k.length; ++C) {
        var R = k[C];
        if (!r[R] && !(b && b[R]) && !(v && v[R]) && !(S && S[R])) {
          var P = u(g, R);
          try {
            s(f, R, P);
          } catch {}
        }
      }
    }
    return f;
  }
  return (Bn = d), Bn;
}
_c();
var Gc = !0;
function Ys(e, t, r) {
  var o = "";
  return (
    r.split(" ").forEach(function (n) {
      e[n] !== void 0 ? t.push(e[n] + ";") : n && (o += n + " ");
    }),
    o
  );
}
var ki = function (t, r, o) {
    var n = t.key + "-" + r.name;
    (o === !1 || Gc === !1) &&
      t.registered[n] === void 0 &&
      (t.registered[n] = r.styles);
  },
  Ri = function (t, r, o) {
    ki(t, r, o);
    var n = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + n : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Kc(e) {
  for (var t = 0, r, o = 0, n = e.length; n >= 4; ++o, n -= 4)
    (r =
      (e.charCodeAt(o) & 255) |
      ((e.charCodeAt(++o) & 255) << 8) |
      ((e.charCodeAt(++o) & 255) << 16) |
      ((e.charCodeAt(++o) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(o) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var qc = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Yc = /[A-Z]|^ms/g,
  Xc = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Xs = function (t) {
    return t.charCodeAt(1) === 45;
  },
  fa = function (t) {
    return t != null && typeof t != "boolean";
  },
  Nn = Ks(function (e) {
    return Xs(e) ? e : e.replace(Yc, "-$&").toLowerCase();
  }),
  ma = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Xc, function (o, n, i) {
            return (Pt = { name: n, styles: i, next: Pt }), n;
          });
    }
    return qc[t] !== 1 && !Xs(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function mo(e, t, r) {
  if (r == null) return "";
  var o = r;
  if (o.__emotion_styles !== void 0) return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var n = r;
      if (n.anim === 1)
        return (Pt = { name: n.name, styles: n.styles, next: Pt }), n.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            (Pt = { name: a.name, styles: a.styles, next: Pt }), (a = a.next);
        var s = i.styles + ";";
        return s;
      }
      return Jc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Pt,
          c = r(e);
        return (Pt = l), mo(e, t, c);
      }
      break;
    }
  }
  var u = r;
  if (t == null) return u;
  var h = t[u];
  return h !== void 0 ? h : u;
}
function Jc(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++) o += mo(e, t, r[n]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0
          ? (o += i + "{" + t[s] + "}")
          : fa(s) && (o += Nn(i) + ":" + ma(i, s) + ";");
      } else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          fa(a[l]) && (o += Nn(i) + ":" + ma(i, a[l]) + ";");
      else {
        var c = mo(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            o += Nn(i) + ":" + c + ";";
            break;
          }
          default:
            o += i + "{" + c + "}";
        }
      }
    }
  return o;
}
var ga = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Pt;
function So(e, t, r) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var o = !0,
    n = "";
  Pt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (o = !1), (n += mo(r, t, i));
  else {
    var a = i;
    n += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((n += mo(r, t, e[s])), o)) {
      var l = i;
      n += l[s];
    }
  ga.lastIndex = 0;
  for (var c = "", u; (u = ga.exec(n)) !== null; ) c += "-" + u[1];
  var h = Kc(n) + c;
  return { name: h, styles: n, next: Pt };
}
var Qc = function (t) {
    return t();
  },
  Js = qn.useInsertionEffect ? qn.useInsertionEffect : !1,
  Qs = Js || Qc,
  ha = Js || m.useLayoutEffect,
  Zs = m.createContext(typeof HTMLElement < "u" ? Hc({ key: "css" }) : null);
Zs.Provider;
var Ti = function (t) {
    return m.forwardRef(function (r, o) {
      var n = m.useContext(Zs);
      return t(r, n, o);
    });
  },
  Co = m.createContext({}),
  $i = {}.hasOwnProperty,
  Jn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Zc = function (t, r) {
    var o = {};
    for (var n in r) $i.call(r, n) && (o[n] = r[n]);
    return (o[Jn] = t), o;
  },
  eu = function (t) {
    var r = t.cache,
      o = t.serialized,
      n = t.isStringTag;
    return (
      ki(r, o, n),
      Qs(function () {
        return Ri(r, o, n);
      }),
      null
    );
  },
  tu = Ti(function (e, t, r) {
    var o = e.css;
    typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
    var n = e[Jn],
      i = [o],
      a = "";
    typeof e.className == "string"
      ? (a = Ys(t.registered, i, e.className))
      : e.className != null && (a = e.className + " ");
    var s = So(i, void 0, m.useContext(Co));
    a += t.key + "-" + s.name;
    var l = {};
    for (var c in e) $i.call(e, c) && c !== "css" && c !== Jn && (l[c] = e[c]);
    return (
      (l.className = a),
      r && (l.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(eu, {
          cache: t,
          serialized: s,
          isStringTag: typeof n == "string",
        }),
        m.createElement(n, l),
      )
    );
  }),
  ru = tu,
  ya = function (t, r) {
    var o = arguments;
    if (r == null || !$i.call(r, "css"))
      return m.createElement.apply(void 0, o);
    var n = o.length,
      i = new Array(n);
    (i[0] = ru), (i[1] = Zc(t, r));
    for (var a = 2; a < n; a++) i[a] = o[a];
    return m.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ya || (ya = {}));
var ou = Ti(function (e, t) {
  var r = e.styles,
    o = So([r], void 0, m.useContext(Co)),
    n = m.useRef();
  return (
    ha(
      function () {
        var i = t.key + "-global",
          a = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          s = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + o.name + '"]',
          );
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          l !== null &&
            ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
          (n.current = [a, s]),
          function () {
            a.flush();
          }
        );
      },
      [t],
    ),
    ha(
      function () {
        var i = n.current,
          a = i[0],
          s = i[1];
        if (s) {
          i[1] = !1;
          return;
        }
        if ((o.next !== void 0 && Ri(t, o.next, !0), a.tags.length)) {
          var l = a.tags[a.tags.length - 1].nextElementSibling;
          (a.before = l), a.flush();
        }
        t.insert("", o, a, !1);
      },
      [t, o.name],
    ),
    null
  );
});
function Fr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return So(t);
}
function Xt() {
  var e = Fr.apply(void 0, arguments),
    t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var nu =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  iu = Ks(function (e) {
    return (
      nu.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  au = iu,
  su = function (t) {
    return t !== "theme";
  },
  va = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? au : su;
  },
  ba = function (t, r, o) {
    var n;
    if (r) {
      var i = r.shouldForwardProp;
      n =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof n != "function" && o && (n = t.__emotion_forwardProp), n;
  },
  lu = function (t) {
    var r = t.cache,
      o = t.serialized,
      n = t.isStringTag;
    return (
      ki(r, o, n),
      Qs(function () {
        return Ri(r, o, n);
      }),
      null
    );
  },
  cu = function e(t, r) {
    var o = t.__emotion_real === t,
      n = (o && t.__emotion_base) || t,
      i,
      a;
    r !== void 0 && ((i = r.label), (a = r.target));
    var s = ba(t, r, o),
      l = s || va(n),
      c = !l("as");
    return function () {
      var u = arguments,
        h =
          o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && h.push("label:" + i + ";"),
        u[0] == null || u[0].raw === void 0)
      )
        h.push.apply(h, u);
      else {
        var y = u[0];
        h.push(y[0]);
        for (var d = u.length, f = 1; f < d; f++) h.push(u[f], y[f]);
      }
      var g = Ti(function (b, x, k) {
        var S = (c && b.as) || n,
          v = "",
          C = [],
          R = b;
        if (b.theme == null) {
          R = {};
          for (var P in b) R[P] = b[P];
          R.theme = m.useContext(Co);
        }
        typeof b.className == "string"
          ? (v = Ys(x.registered, C, b.className))
          : b.className != null && (v = b.className + " ");
        var I = So(h.concat(C), x.registered, R);
        (v += x.key + "-" + I.name), a !== void 0 && (v += " " + a);
        var A = c && s === void 0 ? va(S) : l,
          O = {};
        for (var L in b) (c && L === "as") || (A(L) && (O[L] = b[L]));
        return (
          (O.className = v),
          k && (O.ref = k),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(lu, {
              cache: x,
              serialized: I,
              isStringTag: typeof S == "string",
            }),
            m.createElement(S, O),
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof n == "string"
                ? n
                : n.displayName || n.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = n),
        (g.__emotion_styles = h),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (g.withComponent = function (b, x) {
          var k = e(b, Jo({}, r, x, { shouldForwardProp: ba(g, x, !0) }));
          return k.apply(void 0, h);
        }),
        g
      );
    };
  },
  uu = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Qn = cu.bind(null);
uu.forEach(function (e) {
  Qn[e] = Qn(e);
});
function du(e) {
  return e == null || Object.keys(e).length === 0;
}
function el(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    o = typeof t == "function" ? (n) => t(du(n) ? r : n) : t;
  return w.jsx(ou, { styles: o });
}
function tl(e, t) {
  return Qn(e, t);
}
function pu(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const xa = [];
function Gt(e) {
  return (xa[0] = e), So(xa);
}
var zn = { exports: {} },
  je = {}; /**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function fu() {
  if (Sa) return je;
  Sa = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    n = Symbol.for("react.profiler"),
    i = Symbol.for("react.consumer"),
    a = Symbol.for("react.context"),
    s = Symbol.for("react.forward_ref"),
    l = Symbol.for("react.suspense"),
    c = Symbol.for("react.suspense_list"),
    u = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy"),
    y = Symbol.for("react.view_transition"),
    d = Symbol.for("react.client.reference");
  function f(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (((g = g.type), g)) {
            case r:
            case n:
            case o:
            case l:
            case c:
            case y:
              return g;
            default:
              switch (((g = g && g.$$typeof), g)) {
                case a:
                case s:
                case h:
                case u:
                  return g;
                case i:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return (
    (je.ContextConsumer = i),
    (je.ContextProvider = a),
    (je.Element = e),
    (je.ForwardRef = s),
    (je.Fragment = r),
    (je.Lazy = h),
    (je.Memo = u),
    (je.Portal = t),
    (je.Profiler = n),
    (je.StrictMode = o),
    (je.Suspense = l),
    (je.SuspenseList = c),
    (je.isContextConsumer = function (g) {
      return f(g) === i;
    }),
    (je.isContextProvider = function (g) {
      return f(g) === a;
    }),
    (je.isElement = function (g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }),
    (je.isForwardRef = function (g) {
      return f(g) === s;
    }),
    (je.isFragment = function (g) {
      return f(g) === r;
    }),
    (je.isLazy = function (g) {
      return f(g) === h;
    }),
    (je.isMemo = function (g) {
      return f(g) === u;
    }),
    (je.isPortal = function (g) {
      return f(g) === t;
    }),
    (je.isProfiler = function (g) {
      return f(g) === n;
    }),
    (je.isStrictMode = function (g) {
      return f(g) === o;
    }),
    (je.isSuspense = function (g) {
      return f(g) === l;
    }),
    (je.isSuspenseList = function (g) {
      return f(g) === c;
    }),
    (je.isValidElementType = function (g) {
      return (
        typeof g == "string" ||
        typeof g == "function" ||
        g === r ||
        g === n ||
        g === o ||
        g === l ||
        g === c ||
        (typeof g == "object" &&
          g !== null &&
          (g.$$typeof === h ||
            g.$$typeof === u ||
            g.$$typeof === a ||
            g.$$typeof === i ||
            g.$$typeof === s ||
            g.$$typeof === d ||
            g.getModuleId !== void 0))
      );
    }),
    (je.typeOf = f),
    je
  );
}
var Ca;
function mu() {
  return Ca || ((Ca = 1), (zn.exports = fu())), zn.exports;
}
var rl = mu();
function Et(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function ol(e) {
  if (m.isValidElement(e) || rl.isValidElementType(e) || !Et(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = ol(e[r]);
    }),
    t
  );
}
function Xe(e, t, r = { clone: !0 }) {
  const o = r.clone ? { ...e } : e;
  return (
    Et(e) &&
      Et(t) &&
      Object.keys(t).forEach((n) => {
        m.isValidElement(t[n]) || rl.isValidElementType(t[n])
          ? (o[n] = t[n])
          : Et(t[n]) && Object.prototype.hasOwnProperty.call(e, n) && Et(e[n])
            ? (o[n] = Xe(e[n], t[n], r))
            : r.clone
              ? (o[n] = Et(t[n]) ? ol(t[n]) : t[n])
              : (o[n] = t[n]);
      }),
    o
  );
}
const gu = (e) => {
  const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
  return (
    t.sort((r, o) => r.val - o.val),
    t.reduce((r, o) => ({ ...r, [o.key]: o.val }), {})
  );
};
function hu(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = "px",
      step: o = 5,
      ...n
    } = e,
    i = gu(t),
    a = Object.keys(i);
  function s(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - o / 100}${r})`;
  }
  function c(y, d) {
    const f = a.indexOf(d);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(f !== -1 && typeof t[a[f]] == "number" ? t[a[f]] : d) - o / 100}${r})`;
  }
  function u(y) {
    return a.indexOf(y) + 1 < a.length ? c(y, a[a.indexOf(y) + 1]) : s(y);
  }
  function h(y) {
    const d = a.indexOf(y);
    return d === 0
      ? s(a[1])
      : d === a.length - 1
        ? l(a[d])
        : c(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: c,
    only: u,
    not: h,
    unit: r,
    ...n,
  };
}
function wa(e, t) {
  if (!e.containerQueries) return t;
  const r = Object.keys(t)
    .filter((o) => o.startsWith("@container"))
    .sort((o, n) => {
      var a, s;
      const i = /min-width:\s*([0-9.]+)/;
      return (
        +(((a = o.match(i)) == null ? void 0 : a[1]) || 0) -
        +(((s = n.match(i)) == null ? void 0 : s[1]) || 0)
      );
    });
  return r.length
    ? r.reduce(
        (o, n) => {
          const i = t[n];
          return delete o[n], (o[n] = i), o;
        },
        { ...t },
      )
    : t;
}
function yu(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/)))
  );
}
function vu(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, o, n] = r,
    i = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(n).up(i);
}
function bu(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    (i.up = (...s) => t(e.breakpoints.up(...s), a)),
      (i.down = (...s) => t(e.breakpoints.down(...s), a)),
      (i.between = (...s) => t(e.breakpoints.between(...s), a)),
      (i.only = (...s) => t(e.breakpoints.only(...s), a)),
      (i.not = (...s) => {
        const l = t(e.breakpoints.not(...s), a);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const o = {},
    n = (i) => (r(o, i), o);
  return r(n), { ...e, containerQueries: n };
}
const xu = { borderRadius: 4 };
function io(e, t) {
  return t ? Xe(e, t, { clone: !1 }) : e;
}
const dn = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ka = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${dn[e]}px)`,
  },
  Su = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : dn[t] || t;
        return (
          typeof r == "number" && (r = `${r}px`),
          e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`
        );
      },
    }),
  };
function St(e, t, r) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || ka;
    return t.reduce((a, s, l) => ((a[i.up(i.keys[l])] = r(t[l])), a), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || ka;
    return Object.keys(t).reduce((a, s) => {
      if (yu(i.keys, s)) {
        const l = vu(o.containerQueries ? o : Su, s);
        l && (a[l] = r(t[s], s));
      } else if (Object.keys(i.values || dn).includes(s)) {
        const l = i.up(s);
        a[l] = r(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function nl(e = {}) {
  var r;
  return (
    ((r = e.keys) == null
      ? void 0
      : r.reduce((o, n) => {
          const i = e.up(n);
          return (o[i] = {}), o;
        }, {})) || {}
  );
}
function Zn(e, t) {
  return e.reduce((r, o) => {
    const n = r[o];
    return (!n || Object.keys(n).length === 0) && delete r[o], r;
  }, t);
}
function Cu(e, ...t) {
  const r = nl(e),
    o = [r, ...t].reduce((n, i) => Xe(n, i), {});
  return Zn(Object.keys(r), o);
}
function wu(e, t) {
  if (typeof e != "object") return {};
  const r = {},
    o = Object.keys(t);
  return (
    Array.isArray(e)
      ? o.forEach((n, i) => {
          i < e.length && (r[n] = !0);
        })
      : o.forEach((n) => {
          e[n] != null && (r[n] = !0);
        }),
    r
  );
}
function jn({ values: e, breakpoints: t, base: r }) {
  const o = r || wu(e, t),
    n = Object.keys(o);
  if (n.length === 0) return e;
  let i;
  return n.reduce(
    (a, s, l) => (
      Array.isArray(e)
        ? ((a[s] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
          ? ((a[s] = e[s] != null ? e[s] : e[i]), (i = s))
          : (a[s] = e),
      a
    ),
    {},
  );
}
function z(e) {
  if (typeof e != "string") throw new Error(Ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function pn(e, t, r = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`
      .split(".")
      .reduce((n, i) => (n && n[i] ? n[i] : null), e);
    if (o != null) return o;
  }
  return t.split(".").reduce((o, n) => (o && o[n] != null ? o[n] : null), e);
}
function Zo(e, t, r, o = r) {
  let n;
  return (
    typeof e == "function"
      ? (n = e(r))
      : Array.isArray(e)
        ? (n = e[r] || o)
        : (n = pn(e, r) || o),
    t && (n = t(n, o, e)),
    n
  );
}
function Ke(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: o, transform: n } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        c = pn(l, o) || {};
      return St(a, s, (h) => {
        let y = Zo(c, n, h);
        return (
          h === y &&
            typeof h == "string" &&
            (y = Zo(c, n, `${t}${h === "default" ? "" : z(h)}`, h)),
          r === !1 ? y : { [r]: y }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function ku(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ru = { m: "margin", p: "padding" },
  Tu = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Ra = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  $u = ku((e) => {
    if (e.length > 2)
      if (Ra[e]) e = Ra[e];
      else return [e];
    const [t, r] = e.split(""),
      o = Ru[t],
      n = Tu[r] || "";
    return Array.isArray(n) ? n.map((i) => o + i) : [o + n];
  }),
  Pi = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Ei = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Pi, ...Ei];
function wo(e, t, r, o) {
  const n = pn(e, t, !0) ?? r;
  return typeof n == "number" || typeof n == "string"
    ? (i) =>
        typeof i == "string"
          ? i
          : typeof n == "string"
            ? n.startsWith("var(") && i === 0
              ? 0
              : n.startsWith("var(") && i === 1
                ? n
                : `calc(${i} * ${n})`
            : n * i
    : Array.isArray(n)
      ? (i) => {
          if (typeof i == "string") return i;
          const a = Math.abs(i),
            s = n[a];
          return i >= 0
            ? s
            : typeof s == "number"
              ? -s
              : typeof s == "string" && s.startsWith("var(")
                ? `calc(-1 * ${s})`
                : `-${s}`;
        }
      : typeof n == "function"
        ? n
        : () => {};
}
function fn(e) {
  return wo(e, "spacing", 8);
}
function ur(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Pu(e, t) {
  return (r) => e.reduce((o, n) => ((o[n] = ur(t, r)), o), {});
}
function Eu(e, t, r, o) {
  if (!t.includes(r)) return null;
  const n = $u(r),
    i = Pu(n, o),
    a = e[r];
  return St(e, a, i);
}
function il(e, t) {
  const r = fn(e.theme);
  return Object.keys(e)
    .map((o) => Eu(e, t, o, r))
    .reduce(io, {});
}
function Ue(e) {
  return il(e, Pi);
}
Ue.propTypes = {};
Ue.filterProps = Pi;
function _e(e) {
  return il(e, Ei);
}
_e.propTypes = {};
_e.filterProps = Ei;
function al(e = 8, t = fn({ spacing: e })) {
  if (e.mui) return e;
  const r = (...o) =>
    (o.length === 0 ? [1] : o)
      .map((i) => {
        const a = t(i);
        return typeof a == "number" ? `${a}px` : a;
      })
      .join(" ");
  return (r.mui = !0), r;
}
function mn(...e) {
  const t = e.reduce(
      (o, n) => (
        n.filterProps.forEach((i) => {
          o[i] = n;
        }),
        o
      ),
      {},
    ),
    r = (o) => Object.keys(o).reduce((n, i) => (t[i] ? io(n, t[i](o)) : n), {});
  return (
    (r.propTypes = {}),
    (r.filterProps = e.reduce((o, n) => o.concat(n.filterProps), [])),
    r
  );
}
function pt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yt(e, t) {
  return Ke({ prop: e, themeKey: "borders", transform: t });
}
const Iu = yt("border", pt),
  Mu = yt("borderTop", pt),
  Au = yt("borderRight", pt),
  Ou = yt("borderBottom", pt),
  Lu = yt("borderLeft", pt),
  Bu = yt("borderColor"),
  Nu = yt("borderTopColor"),
  zu = yt("borderRightColor"),
  ju = yt("borderBottomColor"),
  Fu = yt("borderLeftColor"),
  Du = yt("outline", pt),
  Wu = yt("outlineColor"),
  gn = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = wo(e.theme, "shape.borderRadius", 4),
        r = (o) => ({ borderRadius: ur(t, o) });
      return St(e, e.borderRadius, r);
    }
    return null;
  };
gn.propTypes = {};
gn.filterProps = ["borderRadius"];
mn(Iu, Mu, Au, Ou, Lu, Bu, Nu, zu, ju, Fu, gn, Du, Wu);
const hn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wo(e.theme, "spacing", 8),
      r = (o) => ({ gap: ur(t, o) });
    return St(e, e.gap, r);
  }
  return null;
};
hn.propTypes = {};
hn.filterProps = ["gap"];
const yn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wo(e.theme, "spacing", 8),
      r = (o) => ({ columnGap: ur(t, o) });
    return St(e, e.columnGap, r);
  }
  return null;
};
yn.propTypes = {};
yn.filterProps = ["columnGap"];
const vn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wo(e.theme, "spacing", 8),
      r = (o) => ({ rowGap: ur(t, o) });
    return St(e, e.rowGap, r);
  }
  return null;
};
vn.propTypes = {};
vn.filterProps = ["rowGap"];
const Hu = Ke({ prop: "gridColumn" }),
  Vu = Ke({ prop: "gridRow" }),
  Uu = Ke({ prop: "gridAutoFlow" }),
  _u = Ke({ prop: "gridAutoColumns" }),
  Gu = Ke({ prop: "gridAutoRows" }),
  Ku = Ke({ prop: "gridTemplateColumns" }),
  qu = Ke({ prop: "gridTemplateRows" }),
  Yu = Ke({ prop: "gridTemplateAreas" }),
  Xu = Ke({ prop: "gridArea" });
mn(hn, yn, vn, Hu, Vu, Uu, _u, Gu, Ku, qu, Yu, Xu);
function Pr(e, t) {
  return t === "grey" ? t : e;
}
const Ju = Ke({ prop: "color", themeKey: "palette", transform: Pr }),
  Qu = Ke({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Pr,
  }),
  Zu = Ke({ prop: "backgroundColor", themeKey: "palette", transform: Pr });
mn(Ju, Qu, Zu);
function st(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ed = Ke({ prop: "width", transform: st }),
  Ii = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, i, a, s, l;
        const o =
          ((a =
            (i = (n = e.theme) == null ? void 0 : n.breakpoints) == null
              ? void 0
              : i.values) == null
            ? void 0
            : a[r]) || dn[r];
        return o
          ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: st(r) };
      };
      return St(e, e.maxWidth, t);
    }
    return null;
  };
Ii.filterProps = ["maxWidth"];
const td = Ke({ prop: "minWidth", transform: st }),
  rd = Ke({ prop: "height", transform: st }),
  od = Ke({ prop: "maxHeight", transform: st }),
  nd = Ke({ prop: "minHeight", transform: st });
Ke({ prop: "size", cssProperty: "width", transform: st });
Ke({ prop: "size", cssProperty: "height", transform: st });
const id = Ke({ prop: "boxSizing" });
mn(ed, Ii, td, rd, od, nd, id);
const ko = {
  border: { themeKey: "borders", transform: pt },
  borderTop: { themeKey: "borders", transform: pt },
  borderRight: { themeKey: "borders", transform: pt },
  borderBottom: { themeKey: "borders", transform: pt },
  borderLeft: { themeKey: "borders", transform: pt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: pt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: gn },
  color: { themeKey: "palette", transform: Pr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Pr,
  },
  backgroundColor: { themeKey: "palette", transform: Pr },
  p: { style: _e },
  pt: { style: _e },
  pr: { style: _e },
  pb: { style: _e },
  pl: { style: _e },
  px: { style: _e },
  py: { style: _e },
  padding: { style: _e },
  paddingTop: { style: _e },
  paddingRight: { style: _e },
  paddingBottom: { style: _e },
  paddingLeft: { style: _e },
  paddingX: { style: _e },
  paddingY: { style: _e },
  paddingInline: { style: _e },
  paddingInlineStart: { style: _e },
  paddingInlineEnd: { style: _e },
  paddingBlock: { style: _e },
  paddingBlockStart: { style: _e },
  paddingBlockEnd: { style: _e },
  m: { style: Ue },
  mt: { style: Ue },
  mr: { style: Ue },
  mb: { style: Ue },
  ml: { style: Ue },
  mx: { style: Ue },
  my: { style: Ue },
  margin: { style: Ue },
  marginTop: { style: Ue },
  marginRight: { style: Ue },
  marginBottom: { style: Ue },
  marginLeft: { style: Ue },
  marginX: { style: Ue },
  marginY: { style: Ue },
  marginInline: { style: Ue },
  marginInlineStart: { style: Ue },
  marginInlineEnd: { style: Ue },
  marginBlock: { style: Ue },
  marginBlockStart: { style: Ue },
  marginBlockEnd: { style: Ue },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: hn },
  rowGap: { style: vn },
  columnGap: { style: yn },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: st },
  maxWidth: { style: Ii },
  minWidth: { transform: st },
  height: { transform: st },
  maxHeight: { transform: st },
  minHeight: { transform: st },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function ad(...e) {
  const t = e.reduce((o, n) => o.concat(Object.keys(n)), []),
    r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function sd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ld() {
  function e(r, o, n, i) {
    const a = { [r]: o, theme: n },
      s = i[r];
    if (!s) return { [r]: o };
    const { cssProperty: l = r, themeKey: c, transform: u, style: h } = s;
    if (o == null) return null;
    if (c === "typography" && o === "inherit") return { [r]: o };
    const y = pn(n, c) || {};
    return h
      ? h(a)
      : St(a, o, (f) => {
          let g = Zo(y, u, f);
          return (
            f === g &&
              typeof f == "string" &&
              (g = Zo(y, u, `${r}${f === "default" ? "" : z(f)}`, f)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(r) {
    const { sx: o, theme: n = {}, nested: i } = r || {};
    if (!o) return null;
    const a = n.unstable_sxConfig ?? ko;
    function s(l) {
      let c = l;
      if (typeof l == "function") c = l(n);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const u = nl(n.breakpoints),
        h = Object.keys(u);
      let y = u;
      return (
        Object.keys(c).forEach((d) => {
          const f = sd(c[d], n);
          if (f != null)
            if (typeof f == "object")
              if (a[d]) y = io(y, e(d, f, n, a));
              else {
                const g = St({ theme: n }, f, (b) => ({ [d]: b }));
                ad(g, f)
                  ? (y[d] = t({ sx: f, theme: n, nested: !0 }))
                  : (y = io(y, g));
              }
            else y = io(y, e(d, f, n, a));
        }),
        !i && n.modularCssLayers
          ? { "@layer sx": wa(n, Zn(h, y)) }
          : wa(n, Zn(h, y))
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const qt = ld();
qt.filterProps = ["sx"];
function cd(e, t) {
  var o;
  const r = this;
  if (r.vars) {
    if (
      !((o = r.colorSchemes) != null && o[e]) ||
      typeof r.getColorSchemeSelector != "function"
    )
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&"
      ? t
      : ((n.includes("data-") || n.includes(".")) &&
          (n = `*:where(${n.replace(/\s*&$/, "")}) &`),
        { [n]: t });
  }
  return r.palette.mode === e ? t : {};
}
function Ro(e = {}, ...t) {
  const {
      breakpoints: r = {},
      palette: o = {},
      spacing: n,
      shape: i = {},
      ...a
    } = e,
    s = hu(r),
    l = al(n);
  let c = Xe(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...o },
      spacing: l,
      shape: { ...xu, ...i },
    },
    a,
  );
  return (
    (c = bu(c)),
    (c.applyStyles = cd),
    (c = t.reduce((u, h) => Xe(u, h), c)),
    (c.unstable_sxConfig = {
      ...ko,
      ...(a == null ? void 0 : a.unstable_sxConfig),
    }),
    (c.unstable_sx = function (h) {
      return qt({ sx: h, theme: this });
    }),
    c
  );
}
function ud(e) {
  return Object.keys(e).length === 0;
}
function Mi(e = null) {
  const t = m.useContext(Co);
  return !t || ud(t) ? e : t;
}
const dd = Ro();
function To(e = dd) {
  return Mi(e);
}
function Fn(e) {
  const t = Gt(e);
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) ||
        (t.styles = `@layer global{${t.styles}}`),
      t)
    : e;
}
function sl({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const o = To(r),
    n = (t && o[t]) || o;
  let i = typeof e == "function" ? e(n) : e;
  return (
    n.modularCssLayers &&
      (Array.isArray(i)
        ? (i = i.map((a) => Fn(typeof a == "function" ? a(n) : a)))
        : (i = Fn(i))),
    w.jsx(el, { styles: i })
  );
}
const pd = (e) => {
  var o;
  const t = { systemProps: {}, otherProps: {} },
    r =
      ((o = e == null ? void 0 : e.theme) == null
        ? void 0
        : o.unstable_sxConfig) ?? ko;
  return (
    Object.keys(e).forEach((n) => {
      r[n] ? (t.systemProps[n] = e[n]) : (t.otherProps[n] = e[n]);
    }),
    t
  );
};
function bn(e) {
  const { sx: t, ...r } = e,
    { systemProps: o, otherProps: n } = pd(r);
  let i;
  return (
    Array.isArray(t)
      ? (i = [o, ...t])
      : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Et(s) ? { ...o, ...s } : o;
          })
        : (i = { ...o, ...t }),
    { ...n, sx: i }
  );
}
const Ta = (e) => e,
  fd = () => {
    let e = Ta;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ta;
      },
    };
  },
  ll = fd();
function cl(e) {
  var t,
    r,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (r = cl(e[t])) && (o && (o += " "), (o += r));
    } else for (r in e) e[r] && (o && (o += " "), (o += r));
  return o;
}
function U() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
    (e = arguments[r]) && (t = cl(e)) && (o && (o += " "), (o += t));
  return o;
}
function md(e = {}) {
  const {
      themeId: t,
      defaultTheme: r,
      defaultClassName: o = "MuiBox-root",
      generateClassName: n,
    } = e,
    i = tl("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(qt);
  return m.forwardRef(function (l, c) {
    const u = To(r),
      { className: h, component: y = "div", ...d } = bn(l);
    return w.jsx(i, {
      as: y,
      ref: c,
      className: U(h, n ? n(o) : o),
      theme: (t && u[t]) || u,
      ...d,
    });
  });
}
const gd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function ce(e, t, r = "Mui") {
  const o = gd[t];
  return o ? `${r}-${o}` : `${ll.generate(e)}-${t}`;
}
function de(e, t, r = "Mui") {
  const o = {};
  return (
    t.forEach((n) => {
      o[n] = ce(e, n, r);
    }),
    o
  );
}
function ul(e) {
  const { variants: t, ...r } = e,
    o = { variants: t, style: Gt(r), isProcessed: !0 };
  return (
    o.style === r ||
      (t &&
        t.forEach((n) => {
          typeof n.style != "function" && (n.style = Gt(n.style));
        })),
    o
  );
}
const hd = Ro();
function Dn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ir(e, t) {
  return (
    t &&
      e &&
      typeof e == "object" &&
      e.styles &&
      !e.styles.startsWith("@layer") &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  );
}
function yd(e) {
  return e ? (t, r) => r[e] : null;
}
function vd(e, t, r) {
  e.theme = xd(e.theme) ? r : e.theme[t] || e.theme;
}
function Ko(e, t, r) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o)) return o.flatMap((n) => Ko(e, n, r));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let n;
    if (o.isProcessed) n = r ? ir(o.style, r) : o.style;
    else {
      const { variants: i, ...a } = o;
      n = r ? ir(Gt(a), r) : a;
    }
    return dl(e, o.variants, [n], r);
  }
  return o != null && o.isProcessed
    ? r
      ? ir(Gt(o.style), r)
      : o.style
    : r
      ? ir(Gt(o), r)
      : o;
}
function dl(e, t, r = [], o = void 0) {
  var i;
  let n;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (
        (n ?? (n = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        !s.props(n))
      )
        continue;
    } else
      for (const l in s.props)
        if (
          e[l] !== s.props[l] &&
          ((i = e.ownerState) == null ? void 0 : i[l]) !== s.props[l]
        )
          continue e;
    typeof s.style == "function"
      ? (n ?? (n = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        r.push(o ? ir(Gt(s.style(n)), o) : s.style(n)))
      : r.push(o ? ir(Gt(s.style), o) : s.style);
  }
  return r;
}
function pl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = hd,
    rootShouldForwardProp: o = Dn,
    slotShouldForwardProp: n = Dn,
  } = e;
  function i(s) {
    vd(s, t, r);
  }
  return (s, l = {}) => {
    pu(s, (R) => R.filter((P) => P !== qt));
    const {
        name: c,
        slot: u,
        skipVariantsResolver: h,
        skipSx: y,
        overridesResolver: d = yd(Cd(u)),
        ...f
      } = l,
      g = (c && c.startsWith("Mui")) || u ? "components" : "custom",
      b = h !== void 0 ? h : (u && u !== "Root" && u !== "root") || !1,
      x = y || !1;
    let k = Dn;
    u === "Root" || u === "root"
      ? (k = o)
      : u
        ? (k = n)
        : Sd(s) && (k = void 0);
    const S = tl(s, { shouldForwardProp: k, label: bd(), ...f }),
      v = (R) => {
        if (R.__emotion_real === R) return R;
        if (typeof R == "function")
          return function (I) {
            return Ko(I, R, I.theme.modularCssLayers ? g : void 0);
          };
        if (Et(R)) {
          const P = ul(R);
          return function (A) {
            return P.variants
              ? Ko(A, P, A.theme.modularCssLayers ? g : void 0)
              : A.theme.modularCssLayers
                ? ir(P.style, g)
                : P.style;
          };
        }
        return R;
      },
      C = (...R) => {
        const P = [],
          I = R.map(v),
          A = [];
        if (
          (P.push(i),
          c &&
            d &&
            A.push(function ($) {
              var F, B;
              const M =
                (B = (F = $.theme.components) == null ? void 0 : F[c]) == null
                  ? void 0
                  : B.styleOverrides;
              if (!M) return null;
              const E = {};
              for (const j in M)
                E[j] = Ko($, M[j], $.theme.modularCssLayers ? "theme" : void 0);
              return d($, E);
            }),
          c &&
            !b &&
            A.push(function ($) {
              var E, F;
              const T = $.theme,
                M =
                  (F =
                    (E = T == null ? void 0 : T.components) == null
                      ? void 0
                      : E[c]) == null
                    ? void 0
                    : F.variants;
              return M
                ? dl($, M, [], $.theme.modularCssLayers ? "theme" : void 0)
                : null;
            }),
          x || A.push(qt),
          Array.isArray(I[0]))
        ) {
          const p = I.shift(),
            $ = new Array(P.length).fill(""),
            T = new Array(A.length).fill("");
          let M;
          (M = [...$, ...p, ...T]),
            (M.raw = [...$, ...p.raw, ...T]),
            P.unshift(M);
        }
        const O = [...P, ...I, ...A],
          L = S(...O);
        return s.muiName && (L.muiName = s.muiName), L;
      };
    return S.withConfig && (C.withConfig = S.withConfig), C;
  };
}
function bd(e, t) {
  return void 0;
}
function xd(e) {
  for (const t in e) return !1;
  return !0;
}
function Sd(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Cd(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const fl = pl();
function go(e, t, r = !1) {
  const o = { ...t };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const i = n;
      if (i === "components" || i === "slots") o[i] = { ...e[i], ...o[i] };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i],
          s = t[i];
        if (!s) o[i] = a || {};
        else if (!a) o[i] = s;
        else {
          o[i] = { ...s };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const c = l;
              o[i][c] = go(a[c], s[c], r);
            }
        }
      } else
        i === "className" && r && t.className
          ? (o.className = U(
              e == null ? void 0 : e.className,
              t == null ? void 0 : t.className,
            ))
          : i === "style" && r && t.style
            ? (o.style = {
                ...(e == null ? void 0 : e.style),
                ...(t == null ? void 0 : t.style),
              })
            : o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
function wd(e) {
  const { theme: t, name: r, props: o } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? o
    : go(t.components[r].defaultProps, o);
}
function ml({ props: e, name: t, defaultTheme: r, themeId: o }) {
  let n = To(r);
  return o && (n = n[o] || n), wd({ theme: n, name: t, props: e });
}
const at = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function wr(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ai(e, t = 0, r = 1) {
  return wr(e, t, r);
}
function kd(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((o) => o + o)),
    r
      ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, n) => (n < 3 ? parseInt(o, 16) : Math.round((parseInt(o, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function Yt(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Yt(kd(e));
  const t = e.indexOf("("),
    r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(Ft(9, e));
  let o = e.substring(t + 1, e.length - 1),
    n;
  if (r === "color") {
    if (
      ((o = o.split(" ")),
      (n = o.shift()),
      o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        n,
      ))
    )
      throw new Error(Ft(10, n));
  } else o = o.split(",");
  return (
    (o = o.map((i) => parseFloat(i))), { type: r, values: o, colorSpace: n }
  );
}
const Rd = (e) => {
    const t = Yt(e);
    return t.values
      .slice(0, 3)
      .map((r, o) => (t.type.includes("hsl") && o !== 0 ? `${r}%` : r))
      .join(" ");
  },
  to = (e, t) => {
    try {
      return Rd(e);
    } catch {
      return e;
    }
  };
function xn(e) {
  const { type: t, colorSpace: r } = e;
  let { values: o } = e;
  return (
    t.includes("rgb")
      ? (o = o.map((n, i) => (i < 3 ? parseInt(n, 10) : n)))
      : t.includes("hsl") && ((o[1] = `${o[1]}%`), (o[2] = `${o[2]}%`)),
    t.includes("color") ? (o = `${r} ${o.join(" ")}`) : (o = `${o.join(", ")}`),
    `${t}(${o})`
  );
}
function gl(e) {
  e = Yt(e);
  const { values: t } = e,
    r = t[0],
    o = t[1] / 100,
    n = t[2] / 100,
    i = o * Math.min(n, 1 - n),
    a = (c, u = (c + r / 30) % 12) =>
      n - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let s = "rgb";
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), l.push(t[3])), xn({ type: s, values: l })
  );
}
function ei(e) {
  e = Yt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Yt(gl(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== "color" && (r /= 255),
        r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Td(e, t) {
  const r = ei(e),
    o = ei(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function en(e, t) {
  return (
    (e = Yt(e)),
    (t = Ai(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    xn(e)
  );
}
function er(e, t, r) {
  try {
    return en(e, t);
  } catch {
    return e;
  }
}
function Sn(e, t) {
  if (((e = Yt(e)), (t = Ai(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return xn(e);
}
function Ne(e, t, r) {
  try {
    return Sn(e, t);
  } catch {
    return e;
  }
}
function Cn(e, t) {
  if (((e = Yt(e)), (t = Ai(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return xn(e);
}
function ze(e, t, r) {
  try {
    return Cn(e, t);
  } catch {
    return e;
  }
}
function ti(e, t = 0.15) {
  return ei(e) > 0.5 ? Sn(e, t) : Cn(e, t);
}
function Mo(e, t, r) {
  try {
    return ti(e, t);
  } catch {
    return e;
  }
}
const hl = m.createContext(null);
function Oi() {
  return m.useContext(hl);
}
const $d = typeof Symbol == "function" && Symbol.for,
  Pd = $d ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ed(e, t) {
  return typeof t == "function" ? t(e) : { ...e, ...t };
}
function Id(e) {
  const { children: t, theme: r } = e,
    o = Oi(),
    n = m.useMemo(() => {
      const i = o === null ? { ...r } : Ed(o, r);
      return i != null && (i[Pd] = o !== null), i;
    }, [r, o]);
  return w.jsx(hl.Provider, { value: n, children: t });
}
const yl = m.createContext();
function Md({ value: e, ...t }) {
  return w.jsx(yl.Provider, { value: e ?? !0, ...t });
}
const Dr = () => m.useContext(yl) ?? !1,
  vl = m.createContext(void 0);
function Ad({ value: e, children: t }) {
  return w.jsx(vl.Provider, { value: e, children: t });
}
function Od(e) {
  const { theme: t, name: r, props: o } = e;
  if (!t || !t.components || !t.components[r]) return o;
  const n = t.components[r];
  return n.defaultProps
    ? go(n.defaultProps, o, t.components.mergeClassNameAndStyle)
    : !n.styleOverrides && !n.variants
      ? go(n, o, t.components.mergeClassNameAndStyle)
      : o;
}
function Ld({ props: e, name: t }) {
  const r = m.useContext(vl);
  return Od({ props: e, name: t, theme: { components: r } });
}
let $a = 0;
function Bd(e) {
  const [t, r] = m.useState(e),
    o = e || t;
  return (
    m.useEffect(() => {
      t == null && (($a += 1), r(`mui-${$a}`));
    }, [t]),
    o
  );
}
const Nd = { ...qn },
  Pa = Nd.useId;
function mr(e) {
  if (Pa !== void 0) {
    const t = Pa();
    return e ?? t;
  }
  return Bd(e);
}
function zd(e) {
  const t = Mi(),
    r = mr() || "",
    { modularCssLayers: o } = e;
  let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return (
    !o || t !== null
      ? (n = "")
      : typeof o == "string"
        ? (n = o.replace(/mui(?!\.)/g, n))
        : (n = `@layer ${n};`),
    at(() => {
      var s, l;
      const i = document.querySelector("head");
      if (!i) return;
      const a = i.firstChild;
      if (n) {
        if (
          a &&
          (s = a.hasAttribute) != null &&
          s.call(a, "data-mui-layer-order") &&
          a.getAttribute("data-mui-layer-order") === r
        )
          return;
        const c = document.createElement("style");
        c.setAttribute("data-mui-layer-order", r),
          (c.textContent = n),
          i.prepend(c);
      } else
        (l = i.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ||
          l.remove();
    }, [n, r]),
    n ? w.jsx(sl, { styles: n }) : null
  );
}
const Ea = {};
function Ia(e, t, r, o = !1) {
  return m.useMemo(() => {
    const n = (e && t[e]) || t;
    if (typeof r == "function") {
      const i = r(n),
        a = e ? { ...t, [e]: i } : i;
      return o ? () => a : a;
    }
    return e ? { ...t, [e]: r } : { ...t, ...r };
  }, [e, t, r, o]);
}
function bl(e) {
  const { children: t, theme: r, themeId: o } = e,
    n = Mi(Ea),
    i = Oi() || Ea,
    a = Ia(o, n, r),
    s = Ia(o, i, r, !0),
    l = (o ? a[o] : a).direction === "rtl",
    c = zd(a);
  return w.jsx(Id, {
    theme: s,
    children: w.jsx(Co.Provider, {
      value: a,
      children: w.jsx(Md, {
        value: l,
        children: w.jsxs(Ad, {
          value: o ? a[o].components : a.components,
          children: [c, t],
        }),
      }),
    }),
  });
}
const Ma = { theme: void 0 };
function jd(e) {
  let t, r;
  return function (n) {
    let i = t;
    return (
      (i === void 0 || n.theme !== r) &&
        ((Ma.theme = n.theme), (i = ul(e(Ma))), (t = i), (r = n.theme)),
      i
    );
  };
}
const Li = "mode",
  Bi = "color-scheme",
  Fd = "data-color-scheme";
function Dd(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: n = Li,
    colorSchemeStorageKey: i = Bi,
    attribute: a = Fd,
    colorSchemeNode: s = "document.documentElement",
    nonce: l,
  } = e || {};
  let c = "",
    u = a;
  if (
    (a === "class" && (u = ".%s"),
    a === "data" && (u = "[data-%s]"),
    u.startsWith("."))
  ) {
    const y = u.substring(1);
    c += `${s}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${s}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const h = u.match(/\[([^[\]]+)\]/);
  if (h) {
    const [y, d] = h[1].split("=");
    d ||
      (c += `${s}.removeAttribute('${y}'.replace('%s', light));
      ${s}.removeAttribute('${y}'.replace('%s', dark));`),
      (c += `
      ${s}.setAttribute('${y}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`);
  } else u !== ".%s" && (c += `${s}.setAttribute('${u}', colorScheme);`);
  return w.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? l : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${o}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${c}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init",
  );
}
function Wd() {}
const Hd = ({ key: e, storageWindow: t }) => (
  !t && typeof window < "u" && (t = window),
  {
    get(r) {
      if (typeof window > "u") return;
      if (!t) return r;
      let o;
      try {
        o = t.localStorage.getItem(e);
      } catch {}
      return o || r;
    },
    set: (r) => {
      if (t)
        try {
          t.localStorage.setItem(e, r);
        } catch {}
    },
    subscribe: (r) => {
      if (!t) return Wd;
      const o = (n) => {
        const i = n.newValue;
        n.key === e && r(i);
      };
      return (
        t.addEventListener("storage", o),
        () => {
          t.removeEventListener("storage", o);
        }
      );
    },
  }
);
function Wn() {}
function Aa(e) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    e === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function xl(e, t) {
  if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
    return t("light");
  if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
    return t("dark");
}
function Vd(e) {
  return xl(e, (t) => {
    if (t === "light") return e.lightColorScheme;
    if (t === "dark") return e.darkColorScheme;
  });
}
function Ud(e) {
  const {
      defaultMode: t = "light",
      defaultLightColorScheme: r,
      defaultDarkColorScheme: o,
      supportedColorSchemes: n = [],
      modeStorageKey: i = Li,
      colorSchemeStorageKey: a = Bi,
      storageWindow: s = typeof window > "u" ? void 0 : window,
      storageManager: l = Hd,
      noSsr: c = !1,
    } = e,
    u = n.join(","),
    h = n.length > 1,
    y = m.useMemo(
      () => (l == null ? void 0 : l({ key: i, storageWindow: s })),
      [l, i, s],
    ),
    d = m.useMemo(
      () => (l == null ? void 0 : l({ key: `${a}-light`, storageWindow: s })),
      [l, a, s],
    ),
    f = m.useMemo(
      () => (l == null ? void 0 : l({ key: `${a}-dark`, storageWindow: s })),
      [l, a, s],
    ),
    [g, b] = m.useState(() => {
      const I = (y == null ? void 0 : y.get(t)) || t,
        A = (d == null ? void 0 : d.get(r)) || r,
        O = (f == null ? void 0 : f.get(o)) || o;
      return {
        mode: I,
        systemMode: Aa(I),
        lightColorScheme: A,
        darkColorScheme: O,
      };
    }),
    [x, k] = m.useState(c || !h);
  m.useEffect(() => {
    k(!0);
  }, []);
  const S = Vd(g),
    v = m.useCallback(
      (I) => {
        b((A) => {
          if (I === A.mode) return A;
          const O = I ?? t;
          return y == null || y.set(O), { ...A, mode: O, systemMode: Aa(O) };
        });
      },
      [y, t],
    ),
    C = m.useCallback(
      (I) => {
        I
          ? typeof I == "string"
            ? I && !u.includes(I)
              ? console.error(
                  `\`${I}\` does not exist in \`theme.colorSchemes\`.`,
                )
              : b((A) => {
                  const O = { ...A };
                  return (
                    xl(A, (L) => {
                      L === "light" &&
                        (d == null || d.set(I), (O.lightColorScheme = I)),
                        L === "dark" &&
                          (f == null || f.set(I), (O.darkColorScheme = I));
                    }),
                    O
                  );
                })
            : b((A) => {
                const O = { ...A },
                  L = I.light === null ? r : I.light,
                  p = I.dark === null ? o : I.dark;
                return (
                  L &&
                    (u.includes(L)
                      ? ((O.lightColorScheme = L), d == null || d.set(L))
                      : console.error(
                          `\`${L}\` does not exist in \`theme.colorSchemes\`.`,
                        )),
                  p &&
                    (u.includes(p)
                      ? ((O.darkColorScheme = p), f == null || f.set(p))
                      : console.error(
                          `\`${p}\` does not exist in \`theme.colorSchemes\`.`,
                        )),
                  O
                );
              })
          : b(
              (A) => (
                d == null || d.set(r),
                f == null || f.set(o),
                { ...A, lightColorScheme: r, darkColorScheme: o }
              ),
            );
      },
      [u, d, f, r, o],
    ),
    R = m.useCallback(
      (I) => {
        g.mode === "system" &&
          b((A) => {
            const O = I != null && I.matches ? "dark" : "light";
            return A.systemMode === O ? A : { ...A, systemMode: O };
          });
      },
      [g.mode],
    ),
    P = m.useRef(R);
  return (
    (P.current = R),
    m.useEffect(() => {
      if (typeof window.matchMedia != "function" || !h) return;
      const I = (...O) => P.current(...O),
        A = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        A.addListener(I),
        I(A),
        () => {
          A.removeListener(I);
        }
      );
    }, [h]),
    m.useEffect(() => {
      if (h) {
        const I =
            (y == null
              ? void 0
              : y.subscribe((L) => {
                  (!L || ["light", "dark", "system"].includes(L)) && v(L || t);
                })) || Wn,
          A =
            (d == null
              ? void 0
              : d.subscribe((L) => {
                  (!L || u.match(L)) && C({ light: L });
                })) || Wn,
          O =
            (f == null
              ? void 0
              : f.subscribe((L) => {
                  (!L || u.match(L)) && C({ dark: L });
                })) || Wn;
        return () => {
          I(), A(), O();
        };
      }
    }, [C, v, u, t, s, h, y, d, f]),
    {
      ...g,
      mode: x ? g.mode : void 0,
      systemMode: x ? g.systemMode : void 0,
      colorScheme: x ? S : void 0,
      setMode: v,
      setColorScheme: C,
    }
  );
}
const _d =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Gd(e) {
  const {
      themeId: t,
      theme: r = {},
      modeStorageKey: o = Li,
      colorSchemeStorageKey: n = Bi,
      disableTransitionOnChange: i = !1,
      defaultColorScheme: a,
      resolveTheme: s,
    } = e,
    l = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    c = m.createContext(void 0),
    u = () => m.useContext(c) || l,
    h = {},
    y = {};
  function d(x) {
    var V, Q, he, xe;
    const {
        children: k,
        theme: S,
        modeStorageKey: v = o,
        colorSchemeStorageKey: C = n,
        disableTransitionOnChange: R = i,
        storageManager: P,
        storageWindow: I = typeof window > "u" ? void 0 : window,
        documentNode: A = typeof document > "u" ? void 0 : document,
        colorSchemeNode: O = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: L = !1,
        disableStyleSheetGeneration: p = !1,
        defaultMode: $ = "system",
        forceThemeRerender: T = !1,
        noSsr: M,
      } = x,
      E = m.useRef(!1),
      F = Oi(),
      B = m.useContext(c),
      j = !!B && !L,
      G = m.useMemo(() => S || (typeof r == "function" ? r() : r), [S]),
      H = G[t],
      X = H || G,
      { colorSchemes: ee = h, components: ye = y, cssVarPrefix: J } = X,
      _ = Object.keys(ee)
        .filter((q) => !!ee[q])
        .join(","),
      te = m.useMemo(() => _.split(","), [_]),
      me = typeof a == "string" ? a : a.light,
      ve = typeof a == "string" ? a : a.dark,
      Z =
        ee[me] && ee[ve]
          ? $
          : ((Q =
              (V = ee[X.defaultColorScheme]) == null ? void 0 : V.palette) ==
            null
              ? void 0
              : Q.mode) || ((he = X.palette) == null ? void 0 : he.mode),
      {
        mode: se,
        setMode: ne,
        systemMode: oe,
        lightColorScheme: Y,
        darkColorScheme: le,
        colorScheme: Ae,
        setColorScheme: Se,
      } = Ud({
        supportedColorSchemes: te,
        defaultLightColorScheme: me,
        defaultDarkColorScheme: ve,
        modeStorageKey: v,
        colorSchemeStorageKey: C,
        defaultMode: Z,
        storageManager: P,
        storageWindow: I,
        noSsr: M,
      });
    let Pe = se,
      Ee = Ae;
    j && ((Pe = B.mode), (Ee = B.colorScheme));
    let Me = Ee || X.defaultColorScheme;
    X.vars && !T && (Me = X.defaultColorScheme);
    const Re = m.useMemo(() => {
        var ke;
        const q =
            ((ke = X.generateThemeVars) == null ? void 0 : ke.call(X)) ||
            X.vars,
          K = {
            ...X,
            components: ye,
            colorSchemes: ee,
            cssVarPrefix: J,
            vars: q,
          };
        if (
          (typeof K.generateSpacing == "function" &&
            (K.spacing = K.generateSpacing()),
          Me)
        ) {
          const be = ee[Me];
          be &&
            typeof be == "object" &&
            Object.keys(be).forEach((we) => {
              be[we] && typeof be[we] == "object"
                ? (K[we] = { ...K[we], ...be[we] })
                : (K[we] = be[we]);
            });
        }
        return s ? s(K) : K;
      }, [X, Me, ye, ee, J]),
      re = X.colorSchemeSelector;
    at(() => {
      if (Ee && O && re && re !== "media") {
        const q = re;
        let K = re;
        if (
          (q === "class" && (K = ".%s"),
          q === "data" && (K = "[data-%s]"),
          q != null &&
            q.startsWith("data-") &&
            !q.includes("%s") &&
            (K = `[${q}="%s"]`),
          K.startsWith("."))
        )
          O.classList.remove(
            ...te.map((ke) => K.substring(1).replace("%s", ke)),
          ),
            O.classList.add(K.substring(1).replace("%s", Ee));
        else {
          const ke = K.replace("%s", Ee).match(/\[([^\]]+)\]/);
          if (ke) {
            const [be, we] = ke[1].split("=");
            we ||
              te.forEach((vt) => {
                O.removeAttribute(be.replace(Ee, vt));
              }),
              O.setAttribute(be, we ? we.replace(/"|'/g, "") : "");
          } else O.setAttribute(K, Ee);
        }
      }
    }, [Ee, re, O, te]),
      m.useEffect(() => {
        let q;
        if (R && E.current && A) {
          const K = A.createElement("style");
          K.appendChild(A.createTextNode(_d)),
            A.head.appendChild(K),
            window.getComputedStyle(A.body),
            (q = setTimeout(() => {
              A.head.removeChild(K);
            }, 1));
        }
        return () => {
          clearTimeout(q);
        };
      }, [Ee, R, A]),
      m.useEffect(
        () => (
          (E.current = !0),
          () => {
            E.current = !1;
          }
        ),
        [],
      );
    const Ve = m.useMemo(
      () => ({
        allColorSchemes: te,
        colorScheme: Ee,
        darkColorScheme: le,
        lightColorScheme: Y,
        mode: Pe,
        setColorScheme: Se,
        setMode: ne,
        systemMode: oe,
      }),
      [te, Ee, le, Y, Pe, Se, ne, oe, Re.colorSchemeSelector],
    );
    let Ie = !0;
    (p ||
      X.cssVariables === !1 ||
      (j && (F == null ? void 0 : F.cssVarPrefix) === J)) &&
      (Ie = !1);
    const W = w.jsxs(m.Fragment, {
      children: [
        w.jsx(bl, { themeId: H ? t : void 0, theme: Re, children: k }),
        Ie &&
          w.jsx(el, {
            styles:
              ((xe = Re.generateStyleSheets) == null ? void 0 : xe.call(Re)) ||
              [],
          }),
      ],
    });
    return j ? W : w.jsx(c.Provider, { value: Ve, children: W });
  }
  const f = typeof a == "string" ? a : a.light,
    g = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: u,
    getInitColorSchemeScript: (x) =>
      Dd({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: f,
        defaultDarkColorScheme: g,
        modeStorageKey: o,
        ...x,
      }),
  };
}
function Kd(e = "") {
  function t(...o) {
    if (!o.length) return "";
    const n = o[0];
    return typeof n == "string" &&
      !n.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ""}${n}${t(...o.slice(1))})`
      : `, ${n}`;
  }
  return (o, ...n) => `var(--${e ? `${e}-` : ""}${o}${t(...n)})`;
}
const Oa = (e, t, r, o = []) => {
    let n = e;
    t.forEach((i, a) => {
      a === t.length - 1
        ? Array.isArray(n)
          ? (n[Number(i)] = r)
          : n && typeof n == "object" && (n[i] = r)
        : n &&
          typeof n == "object" &&
          (n[i] || (n[i] = o.includes(i) ? [] : {}), (n = n[i]));
    });
  },
  qd = (e, t, r) => {
    function o(n, i = [], a = []) {
      Object.entries(n).forEach(([s, l]) => {
        (!r || (r && !r([...i, s]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? o(l, [...i, s], Array.isArray(l) ? [...a, s] : a)
            : t([...i, s], l, a));
      });
    }
    o(e);
  },
  Yd = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) =>
          e.includes(o),
        ) || e[e.length - 1].toLowerCase().includes("opacity")
        ? t
        : `${t}px`
      : t;
function Hn(e, t) {
  const { prefix: r, shouldSkipGeneratingVar: o } = t || {},
    n = {},
    i = {},
    a = {};
  return (
    qd(
      e,
      (s, l, c) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!o || !o(s, l))
        ) {
          const u = `--${r ? `${r}-` : ""}${s.join("-")}`,
            h = Yd(s, l);
          Object.assign(n, { [u]: h }),
            Oa(i, s, `var(${u})`, c),
            Oa(a, s, `var(${u}, ${h})`, c);
        }
      },
      (s) => s[0] === "vars",
    ),
    { css: n, vars: i, varsWithDefaults: a }
  );
}
function Xd(e, t = {}) {
  const {
      getSelector: r = x,
      disableCssColorScheme: o,
      colorSchemeSelector: n,
      enableContrastVars: i,
    } = t,
    {
      colorSchemes: a = {},
      components: s,
      defaultColorScheme: l = "light",
      ...c
    } = e,
    { vars: u, css: h, varsWithDefaults: y } = Hn(c, t);
  let d = y;
  const f = {},
    { [l]: g, ...b } = a;
  if (
    (Object.entries(b || {}).forEach(([v, C]) => {
      const { vars: R, css: P, varsWithDefaults: I } = Hn(C, t);
      (d = Xe(d, I)), (f[v] = { css: P, vars: R });
    }),
    g)
  ) {
    const { css: v, vars: C, varsWithDefaults: R } = Hn(g, t);
    (d = Xe(d, R)), (f[l] = { css: v, vars: C });
  }
  function x(v, C) {
    var P, I;
    let R = n;
    if (
      (n === "class" && (R = ".%s"),
      n === "data" && (R = "[data-%s]"),
      n != null &&
        n.startsWith("data-") &&
        !n.includes("%s") &&
        (R = `[${n}="%s"]`),
      v)
    ) {
      if (R === "media")
        return e.defaultColorScheme === v
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${((I = (P = a[v]) == null ? void 0 : P.palette) == null ? void 0 : I.mode) || v})`]:
                { ":root": C },
            };
      if (R)
        return e.defaultColorScheme === v
          ? `:root, ${R.replace("%s", String(v))}`
          : R.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let v = { ...u };
      return (
        Object.entries(f).forEach(([, { vars: C }]) => {
          v = Xe(v, C);
        }),
        v
      );
    },
    generateStyleSheets: () => {
      var A, O;
      const v = [],
        C = e.defaultColorScheme || "light";
      function R(L, p) {
        Object.keys(p).length &&
          v.push(typeof L == "string" ? { [L]: { ...p } } : L);
      }
      R(r(void 0, { ...h }), h);
      const { [C]: P, ...I } = f;
      if (P) {
        const { css: L } = P,
          p =
            (O = (A = a[C]) == null ? void 0 : A.palette) == null
              ? void 0
              : O.mode,
          $ = !o && p ? { colorScheme: p, ...L } : { ...L };
        R(r(C, { ...$ }), $);
      }
      return (
        Object.entries(I).forEach(([L, { css: p }]) => {
          var M, E;
          const $ =
              (E = (M = a[L]) == null ? void 0 : M.palette) == null
                ? void 0
                : E.mode,
            T = !o && $ ? { colorScheme: $, ...p } : { ...p };
          R(r(L, { ...T }), T);
        }),
        i &&
          v.push({
            ":root": {
              "--__l-threshold": "0.7",
              "--__l":
                "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
              "--__a":
                "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)",
            },
          }),
        v
      );
    },
  };
}
function Jd(e) {
  return function (r) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${r})`
      : e
        ? e.startsWith("data-") && !e.includes("%s")
          ? `[${e}="${r}"] &`
          : e === "class"
            ? `.${r} &`
            : e === "data"
              ? `[data-${r}] &`
              : `${e.replace("%s", r)} &`
        : "&";
  };
}
function ue(e, t, r = void 0) {
  const o = {};
  for (const n in e) {
    const i = e[n];
    let a = "",
      s = !0;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      c &&
        ((a += (s === !0 ? "" : " ") + t(c)),
        (s = !1),
        r && r[c] && (a += " " + r[c]));
    }
    o[n] = a;
  }
  return o;
}
function qo(e, t) {
  var r, o, n;
  return (
    m.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((n =
          (o = (r = e.type) == null ? void 0 : r._payload) == null
            ? void 0
            : o.value) == null
          ? void 0
          : n.muiName),
    ) !== -1
  );
}
const Qd = (e, t) => e.filter((r) => t.includes(r)),
  Wr = (e, t, r) => {
    const o = e.keys[0];
    Array.isArray(t)
      ? t.forEach((n, i) => {
          r((a, s) => {
            i <= e.keys.length - 1 &&
              (i === 0 ? Object.assign(a, s) : (a[e.up(e.keys[i])] = s));
          }, n);
        })
      : t && typeof t == "object"
        ? (Object.keys(t).length > e.keys.length
            ? e.keys
            : Qd(e.keys, Object.keys(t))
          ).forEach((i) => {
            if (e.keys.includes(i)) {
              const a = t[i];
              a !== void 0 &&
                r((s, l) => {
                  o === i ? Object.assign(s, l) : (s[e.up(i)] = l);
                }, a);
            }
          })
        : (typeof t == "number" || typeof t == "string") &&
          r((n, i) => {
            Object.assign(n, i);
          }, t);
  };
function tn(e) {
  return `--Grid-${e}Spacing`;
}
function wn(e) {
  return `--Grid-parent-${e}Spacing`;
}
const La = "--Grid-columns",
  Er = "--Grid-parent-columns",
  Zd = ({ theme: e, ownerState: t }) => {
    const r = {};
    return (
      Wr(e.breakpoints, t.size, (o, n) => {
        let i = {};
        n === "grow" && (i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          n === "auto" &&
            (i = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof n == "number" &&
            (i = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${n} / var(${Er}) - (var(${Er}) - ${n}) * (var(${wn("column")}) / var(${Er})))`,
            }),
          o(r, i);
      }),
      r
    );
  },
  ep = ({ theme: e, ownerState: t }) => {
    const r = {};
    return (
      Wr(e.breakpoints, t.offset, (o, n) => {
        let i = {};
        n === "auto" && (i = { marginLeft: "auto" }),
          typeof n == "number" &&
            (i = {
              marginLeft:
                n === 0
                  ? "0px"
                  : `calc(100% * ${n} / var(${Er}) + var(${wn("column")}) * ${n} / var(${Er}))`,
            }),
          o(r, i);
      }),
      r
    );
  },
  tp = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = { [La]: 12 };
    return (
      Wr(e.breakpoints, t.columns, (o, n) => {
        const i = n ?? 12;
        o(r, { [La]: i, "> *": { [Er]: i } });
      }),
      r
    );
  },
  rp = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Wr(e.breakpoints, t.rowSpacing, (o, n) => {
        var a;
        const i =
          typeof n == "string"
            ? n
            : (a = e.spacing) == null
              ? void 0
              : a.call(e, n);
        o(r, { [tn("row")]: i, "> *": { [wn("row")]: i } });
      }),
      r
    );
  },
  op = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Wr(e.breakpoints, t.columnSpacing, (o, n) => {
        var a;
        const i =
          typeof n == "string"
            ? n
            : (a = e.spacing) == null
              ? void 0
              : a.call(e, n);
        o(r, { [tn("column")]: i, "> *": { [wn("column")]: i } });
      }),
      r
    );
  },
  np = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Wr(e.breakpoints, t.direction, (o, n) => {
        o(r, { flexDirection: n });
      }),
      r
    );
  },
  ip = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...(e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...(e.wrap && e.wrap !== "wrap" && { flexWrap: e.wrap }),
      gap: `var(${tn("row")}) var(${tn("column")})`,
    }),
  }),
  ap = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([r, o]) => {
        o !== !1 && o !== void 0 && t.push(`grid-${r}-${String(o)}`);
      }),
      t
    );
  },
  sp = (e, t = "xs") => {
    function r(o) {
      return o === void 0
        ? !1
        : (typeof o == "string" && !Number.isNaN(Number(o))) ||
            (typeof o == "number" && o > 0);
    }
    if (r(e)) return [`spacing-${t}-${String(e)}`];
    if (typeof e == "object" && !Array.isArray(e)) {
      const o = [];
      return (
        Object.entries(e).forEach(([n, i]) => {
          r(i) && o.push(`spacing-${n}-${String(i)}`);
        }),
        o
      );
    }
    return [];
  },
  lp = (e) =>
    e === void 0
      ? []
      : typeof e == "object"
        ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`)
        : [`direction-xs-${String(e)}`];
function cp(e, t) {
  e.item !== void 0 && delete e.item,
    e.zeroMinWidth !== void 0 && delete e.zeroMinWidth,
    t.keys.forEach((r) => {
      e[r] !== void 0 && delete e[r];
    });
}
const up = Ro(),
  dp = fl("div", { name: "MuiGrid", slot: "Root" });
function pp(e) {
  return ml({ props: e, name: "MuiGrid", defaultTheme: up });
}
function fp(e = {}) {
  const {
      createStyledComponent: t = dp,
      useThemeProps: r = pp,
      useTheme: o = To,
      componentName: n = "MuiGrid",
    } = e,
    i = (c, u) => {
      const { container: h, direction: y, spacing: d, wrap: f, size: g } = c,
        b = {
          root: [
            "root",
            h && "container",
            f !== "wrap" && `wrap-xs-${String(f)}`,
            ...lp(y),
            ...ap(g),
            ...(h ? sp(d, u.breakpoints.keys[0]) : []),
          ],
        };
      return ue(b, (x) => ce(n, x), {});
    };
  function a(c, u, h = () => !0) {
    const y = {};
    return (
      c === null ||
        (Array.isArray(c)
          ? c.forEach((d, f) => {
              d !== null && h(d) && u.keys[f] && (y[u.keys[f]] = d);
            })
          : typeof c == "object"
            ? Object.keys(c).forEach((d) => {
                const f = c[d];
                f != null && h(f) && (y[d] = f);
              })
            : (y[u.keys[0]] = c)),
      y
    );
  }
  const s = t(tp, op, rp, Zd, np, ip, ep),
    l = m.forwardRef(function (u, h) {
      const y = o(),
        d = r(u),
        f = bn(d);
      cp(f, y.breakpoints);
      const {
          className: g,
          children: b,
          columns: x = 12,
          container: k = !1,
          component: S = "div",
          direction: v = "row",
          wrap: C = "wrap",
          size: R = {},
          offset: P = {},
          spacing: I = 0,
          rowSpacing: A = I,
          columnSpacing: O = I,
          unstable_level: L = 0,
          ...p
        } = f,
        $ = a(R, y.breakpoints, (H) => H !== !1),
        T = a(P, y.breakpoints),
        M = u.columns ?? (L ? void 0 : x),
        E = u.spacing ?? (L ? void 0 : I),
        F = u.rowSpacing ?? u.spacing ?? (L ? void 0 : A),
        B = u.columnSpacing ?? u.spacing ?? (L ? void 0 : O),
        j = {
          ...f,
          level: L,
          columns: M,
          container: k,
          direction: v,
          wrap: C,
          spacing: E,
          rowSpacing: F,
          columnSpacing: B,
          size: $,
          offset: T,
        },
        G = i(j, y);
      return w.jsx(s, {
        ref: h,
        as: S,
        ownerState: j,
        className: U(G.root, g),
        ...p,
        children: m.Children.map(b, (H) => {
          var X;
          return m.isValidElement(H) &&
            qo(H, ["Grid"]) &&
            k &&
            H.props.container
            ? m.cloneElement(H, {
                unstable_level:
                  ((X = H.props) == null ? void 0 : X.unstable_level) ?? L + 1,
              })
            : H;
        }),
      });
    });
  return (l.muiName = "Grid"), l;
}
const mp = Ro(),
  gp = fl("div", { name: "MuiStack", slot: "Root" });
function hp(e) {
  return ml({ props: e, name: "MuiStack", defaultTheme: mp });
}
function yp(e, t) {
  const r = m.Children.toArray(e).filter(Boolean);
  return r.reduce(
    (o, n, i) => (
      o.push(n),
      i < r.length - 1 && o.push(m.cloneElement(t, { key: `separator-${i}` })),
      o
    ),
    [],
  );
}
const vp = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    })[e],
  bp = ({ ownerState: e, theme: t }) => {
    let r = {
      display: "flex",
      flexDirection: "column",
      ...St(
        { theme: t },
        jn({ values: e.direction, breakpoints: t.breakpoints.values }),
        (o) => ({ flexDirection: o }),
      ),
    };
    if (e.spacing) {
      const o = fn(t),
        n = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == "object" && e.spacing[c] != null) ||
              (typeof e.direction == "object" && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {},
        ),
        i = jn({ values: e.direction, base: n }),
        a = jn({ values: e.spacing, base: n });
      typeof i == "object" &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const y = c > 0 ? i[u[c - 1]] : "column";
            i[l] = y;
          }
        }),
        (r = Xe(
          r,
          St({ theme: t }, a, (l, c) =>
            e.useFlexGap
              ? { gap: ur(o, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${vp(c ? i[c] : e.direction)}`]: ur(o, l),
                  },
                },
          ),
        ));
    }
    return (r = Cu(t.breakpoints, r)), r;
  };
function xp(e = {}) {
  const {
      createStyledComponent: t = gp,
      useThemeProps: r = hp,
      componentName: o = "MuiStack",
    } = e,
    n = () => ue({ root: ["root"] }, (l) => ce(o, l), {}),
    i = t(bp);
  return m.forwardRef(function (l, c) {
    const u = r(l),
      h = bn(u),
      {
        component: y = "div",
        direction: d = "column",
        spacing: f = 0,
        divider: g,
        children: b,
        className: x,
        useFlexGap: k = !1,
        ...S
      } = h,
      v = { direction: d, spacing: f, useFlexGap: k },
      C = n();
    return w.jsx(i, {
      as: y,
      ownerState: v,
      ref: c,
      className: U(C.root, x),
      ...S,
      children: g ? yp(b, g) : b,
    });
  });
}
function Sl() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: uo.white, default: uo.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Cl = Sl();
function wl() {
  return {
    text: {
      primary: uo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: uo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const ri = wl();
function Ba(e, t, r, o) {
  const n = o.light || o,
    i = o.dark || o * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === "light"
        ? (e.light = Cn(e.main, n))
        : t === "dark" && (e.dark = Sn(e.main, i)));
}
function Na(e, t, r, o, n) {
  const i = n.light || n,
    a = n.dark || n * 1.5;
  t[r] ||
    (t.hasOwnProperty(o)
      ? (t[r] = t[o])
      : r === "light"
        ? (t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)`)
        : r === "dark" &&
          (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Sp(e = "light") {
  return e === "dark"
    ? { main: vr[200], light: vr[50], dark: vr[400] }
    : { main: vr[700], light: vr[400], dark: vr[800] };
}
function Cp(e = "light") {
  return e === "dark"
    ? { main: yr[200], light: yr[50], dark: yr[400] }
    : { main: yr[500], light: yr[300], dark: yr[700] };
}
function wp(e = "light") {
  return e === "dark"
    ? { main: hr[500], light: hr[300], dark: hr[700] }
    : { main: hr[700], light: hr[400], dark: hr[800] };
}
function kp(e = "light") {
  return e === "dark"
    ? { main: br[400], light: br[300], dark: br[700] }
    : { main: br[700], light: br[500], dark: br[900] };
}
function Rp(e = "light") {
  return e === "dark"
    ? { main: xr[400], light: xr[300], dark: xr[700] }
    : { main: xr[800], light: xr[500], dark: xr[900] };
}
function Tp(e = "light") {
  return e === "dark"
    ? { main: Gr[400], light: Gr[300], dark: Gr[700] }
    : { main: "#ed6c02", light: Gr[500], dark: Gr[900] };
}
function $p(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ni(e) {
  const {
      mode: t = "light",
      contrastThreshold: r = 3,
      tonalOffset: o = 0.2,
      colorSpace: n,
      ...i
    } = e,
    a = e.primary || Sp(t),
    s = e.secondary || Cp(t),
    l = e.error || wp(t),
    c = e.info || kp(t),
    u = e.success || Rp(t),
    h = e.warning || Tp(t);
  function y(b) {
    return n
      ? $p(b)
      : Td(b, ri.text.primary) >= r
        ? ri.text.primary
        : Cl.text.primary;
  }
  const d = ({
    color: b,
    name: x,
    mainShade: k = 500,
    lightShade: S = 300,
    darkShade: v = 700,
  }) => {
    if (
      ((b = { ...b }),
      !b.main && b[k] && (b.main = b[k]),
      !b.hasOwnProperty("main"))
    )
      throw new Error(Ft(11, x ? ` (${x})` : "", k));
    if (typeof b.main != "string")
      throw new Error(Ft(12, x ? ` (${x})` : "", JSON.stringify(b.main)));
    return (
      n
        ? (Na(n, b, "light", S, o), Na(n, b, "dark", v, o))
        : (Ba(b, "light", S, o), Ba(b, "dark", v, o)),
      b.contrastText || (b.contrastText = y(b.main)),
      b
    );
  };
  let f;
  return (
    t === "light" ? (f = Sl()) : t === "dark" && (f = wl()),
    Xe(
      {
        common: { ...uo },
        mode: t,
        primary: d({ color: a, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: l, name: "error" }),
        warning: d({ color: h, name: "warning" }),
        info: d({ color: c, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: fc,
        contrastThreshold: r,
        getContrastText: y,
        augmentColor: d,
        tonalOffset: o,
        ...f,
      },
      i,
    )
  );
}
function Pp(e) {
  const t = {};
  return (
    Object.entries(e).forEach((o) => {
      const [n, i] = o;
      typeof i == "object" &&
        (t[n] =
          `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
    }),
    t
  );
}
function Ep(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function Ip(e) {
  return Math.round(e * 1e5) / 1e5;
}
const za = { textTransform: "uppercase" },
  ja = '"Roboto", "Helvetica", "Arial", sans-serif';
function kl(e, t) {
  const {
      fontFamily: r = ja,
      fontSize: o = 14,
      fontWeightLight: n = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: s = 700,
      htmlFontSize: l = 16,
      allVariants: c,
      pxToRem: u,
      ...h
    } = typeof t == "function" ? t(e) : t,
    y = o / 14,
    d = u || ((b) => `${(b / l) * y}rem`),
    f = (b, x, k, S, v) => ({
      fontFamily: r,
      fontWeight: b,
      fontSize: d(x),
      lineHeight: k,
      ...(r === ja ? { letterSpacing: `${Ip(S / x)}em` } : {}),
      ...v,
      ...c,
    }),
    g = {
      h1: f(n, 96, 1.167, -1.5),
      h2: f(n, 60, 1.2, -0.5),
      h3: f(i, 48, 1.167, 0),
      h4: f(i, 34, 1.235, 0.25),
      h5: f(i, 24, 1.334, 0),
      h6: f(a, 20, 1.6, 0.15),
      subtitle1: f(i, 16, 1.75, 0.15),
      subtitle2: f(a, 14, 1.57, 0.1),
      body1: f(i, 16, 1.5, 0.15),
      body2: f(i, 14, 1.43, 0.15),
      button: f(a, 14, 1.75, 0.4, za),
      caption: f(i, 12, 1.66, 0.4),
      overline: f(i, 12, 2.66, 1, za),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Xe(
    {
      htmlFontSize: l,
      pxToRem: d,
      fontFamily: r,
      fontSize: o,
      fontWeightLight: n,
      fontWeightRegular: i,
      fontWeightMedium: a,
      fontWeightBold: s,
      ...g,
    },
    h,
    { clone: !1 },
  );
}
const Mp = 0.2,
  Ap = 0.14,
  Op = 0.12;
function We(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mp})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ap})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Op})`,
  ].join(",");
}
const Lp = [
    "none",
    We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Bp = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Np = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Fa(e) {
  return `${Math.round(e)}ms`;
}
function zp(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function jp(e) {
  const t = { ...Bp, ...e.easing },
    r = { ...Np, ...e.duration };
  return {
    getAutoHeightDuration: zp,
    create: (n = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...c
      } = i;
      return (Array.isArray(n) ? n : [n])
        .map(
          (u) =>
            `${u} ${typeof a == "string" ? a : Fa(a)} ${s} ${typeof l == "string" ? l : Fa(l)}`,
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: r,
  };
}
const Fp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Dp(e) {
  return (
    Et(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Rl(e = {}) {
  const t = { ...e };
  function r(o) {
    const n = Object.entries(o);
    for (let i = 0; i < n.length; i++) {
      const [a, s] = n[i];
      !Dp(s) || a.startsWith("unstable_")
        ? delete o[a]
        : Et(s) && ((o[a] = { ...s }), r(o[a]));
    }
  }
  return (
    r(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Da(e) {
  return typeof e == "number"
    ? `${(e * 100).toFixed(0)}%`
    : `calc((${e}) * 100%)`;
}
const Wp = (e) => {
  if (!Number.isNaN(+e)) return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t) return 0;
  let r = 0;
  for (let o = 0; o < t.length; o += 1) r += +t[o];
  return r;
};
function Hp(e) {
  Object.assign(e, {
    alpha(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})`
        : o.vars
          ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})`
          : en(t, Wp(r));
    },
    lighten(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${Da(r)})`
        : Cn(t, r);
    },
    darken(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${Da(r)})`
        : Sn(t, r);
    },
  });
}
function oi(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: o = {},
    spacing: n,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    colorSpace: c,
    ...u
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(Ft(20));
  const h = Ni({ ...i, colorSpace: c }),
    y = Ro(e);
  let d = Xe(y, {
    mixins: Ep(y.breakpoints, o),
    palette: h,
    shadows: Lp.slice(),
    typography: kl(h, s),
    transitions: jp(a),
    zIndex: { ...Fp },
  });
  return (
    (d = Xe(d, u)),
    (d = t.reduce((f, g) => Xe(f, g), d)),
    (d.unstable_sxConfig = {
      ...ko,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (d.unstable_sx = function (g) {
      return qt({ sx: g, theme: this });
    }),
    (d.toRuntimeSource = Rl),
    Hp(d),
    d
  );
}
function ni(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const Vp = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const r = ni(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Tl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function $l(e) {
  return e === "dark" ? Vp : [];
}
function Up(e) {
  const {
      palette: t = { mode: "light" },
      opacity: r,
      overlays: o,
      colorSpace: n,
      ...i
    } = e,
    a = Ni({ ...t, colorSpace: n });
  return {
    palette: a,
    opacity: { ...Tl(a.mode), ...r },
    overlays: o || $l(a.mode),
    ...i,
  };
}
function _p(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const Gp = (e) => [
    ...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  Kp = (e) => (t, r) => {
    const o = e.rootSelector || ":root",
      n = e.colorSchemeSelector;
    let i = n;
    if (
      (n === "class" && (i = ".%s"),
      n === "data" && (i = "[data-%s]"),
      n != null &&
        n.startsWith("data-") &&
        !n.includes("%s") &&
        (i = `[${n}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const a = {};
        return (
          Gp(e.cssVarPrefix).forEach((s) => {
            (a[s] = r[s]), delete r[s];
          }),
          i === "media"
            ? { [o]: r, "@media (prefers-color-scheme: dark)": { [o]: a } }
            : i
              ? { [i.replace("%s", t)]: a, [`${o}, ${i.replace("%s", t)}`]: r }
              : { [o]: { ...r, ...a } }
        );
      }
      if (i && i !== "media") return `${o}, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [o]: r } };
      if (i) return i.replace("%s", String(t));
    }
    return o;
  };
function qp(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function N(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ro(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : gl(e);
}
function Nt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = to(ro(e[t])));
}
function Yp(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
      ? e
      : "8px";
}
const kt = (e) => {
    try {
      return e();
    } catch {}
  },
  Xp = (e = "mui") => Kd(e);
function Vn(e, t, r, o, n) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const i = n === "dark" ? "dark" : "light";
  if (!o) {
    t[n] = Up({
      ...r,
      palette: { mode: i, ...(r == null ? void 0 : r.palette) },
      colorSpace: e,
    });
    return;
  }
  const { palette: a, ...s } = oi({
    ...o,
    palette: { mode: i, ...(r == null ? void 0 : r.palette) },
    colorSpace: e,
  });
  return (
    (t[n] = {
      ...r,
      palette: a,
      opacity: { ...Tl(i), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || $l(i),
    }),
    s
  );
}
function Jp(e = {}, ...t) {
  const {
      colorSchemes: r = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: n = !1,
      cssVarPrefix: i = "mui",
      nativeColor: a = !1,
      shouldSkipGeneratingVar: s = _p,
      colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
      rootSelector: c = ":root",
      ...u
    } = e,
    h = Object.keys(r)[0],
    y = o || (r.light && h !== "light" ? "light" : h),
    d = Xp(i),
    { [y]: f, light: g, dark: b, ...x } = r,
    k = { ...x };
  let S = f;
  if (
    (((y === "dark" && !("dark" in r)) || (y === "light" && !("light" in r))) &&
      (S = !0),
    !S)
  )
    throw new Error(Ft(21, y));
  let v;
  a && (v = "oklch");
  const C = Vn(v, k, S, u, y);
  g && !k.light && Vn(v, k, g, void 0, "light"),
    b && !k.dark && Vn(v, k, b, void 0, "dark");
  let R = {
    defaultColorScheme: y,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: k,
    font: { ...Pp(C.typography), ...C.font },
    spacing: Yp(u.spacing),
  };
  Object.keys(R.colorSchemes).forEach((L) => {
    const p = R.colorSchemes[L].palette,
      $ = (M) => {
        const E = M.split("-"),
          F = E[1],
          B = E[2];
        return d(M, p[F][B]);
      };
    p.mode === "light" &&
      (N(p.common, "background", "#fff"), N(p.common, "onBackground", "#000")),
      p.mode === "dark" &&
        (N(p.common, "background", "#000"),
        N(p.common, "onBackground", "#fff"));
    function T(M, E, F) {
      if (v) {
        let B;
        return (
          M === er && (B = `transparent ${((1 - F) * 100).toFixed(0)}%`),
          M === Ne && (B = `#000 ${(F * 100).toFixed(0)}%`),
          M === ze && (B = `#fff ${(F * 100).toFixed(0)}%`),
          `color-mix(in ${v}, ${E}, ${B})`
        );
      }
      return M(E, F);
    }
    if (
      (qp(p, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      p.mode === "light")
    ) {
      N(
        p.Alert,
        "errorColor",
        T(Ne, a ? d("palette-error-light") : p.error.light, 0.6),
      ),
        N(
          p.Alert,
          "infoColor",
          T(Ne, a ? d("palette-info-light") : p.info.light, 0.6),
        ),
        N(
          p.Alert,
          "successColor",
          T(Ne, a ? d("palette-success-light") : p.success.light, 0.6),
        ),
        N(
          p.Alert,
          "warningColor",
          T(Ne, a ? d("palette-warning-light") : p.warning.light, 0.6),
        ),
        N(p.Alert, "errorFilledBg", $("palette-error-main")),
        N(p.Alert, "infoFilledBg", $("palette-info-main")),
        N(p.Alert, "successFilledBg", $("palette-success-main")),
        N(p.Alert, "warningFilledBg", $("palette-warning-main")),
        N(
          p.Alert,
          "errorFilledColor",
          kt(() => p.getContrastText(p.error.main)),
        ),
        N(
          p.Alert,
          "infoFilledColor",
          kt(() => p.getContrastText(p.info.main)),
        ),
        N(
          p.Alert,
          "successFilledColor",
          kt(() => p.getContrastText(p.success.main)),
        ),
        N(
          p.Alert,
          "warningFilledColor",
          kt(() => p.getContrastText(p.warning.main)),
        ),
        N(
          p.Alert,
          "errorStandardBg",
          T(ze, a ? d("palette-error-light") : p.error.light, 0.9),
        ),
        N(
          p.Alert,
          "infoStandardBg",
          T(ze, a ? d("palette-info-light") : p.info.light, 0.9),
        ),
        N(
          p.Alert,
          "successStandardBg",
          T(ze, a ? d("palette-success-light") : p.success.light, 0.9),
        ),
        N(
          p.Alert,
          "warningStandardBg",
          T(ze, a ? d("palette-warning-light") : p.warning.light, 0.9),
        ),
        N(p.Alert, "errorIconColor", $("palette-error-main")),
        N(p.Alert, "infoIconColor", $("palette-info-main")),
        N(p.Alert, "successIconColor", $("palette-success-main")),
        N(p.Alert, "warningIconColor", $("palette-warning-main")),
        N(p.AppBar, "defaultBg", $("palette-grey-100")),
        N(p.Avatar, "defaultBg", $("palette-grey-400")),
        N(p.Button, "inheritContainedBg", $("palette-grey-300")),
        N(p.Button, "inheritContainedHoverBg", $("palette-grey-A100")),
        N(p.Chip, "defaultBorder", $("palette-grey-400")),
        N(p.Chip, "defaultAvatarColor", $("palette-grey-700")),
        N(p.Chip, "defaultIconColor", $("palette-grey-700")),
        N(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        N(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        N(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        N(
          p.LinearProgress,
          "primaryBg",
          T(ze, a ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        N(
          p.LinearProgress,
          "secondaryBg",
          T(ze, a ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        N(
          p.LinearProgress,
          "errorBg",
          T(ze, a ? d("palette-error-main") : p.error.main, 0.62),
        ),
        N(
          p.LinearProgress,
          "infoBg",
          T(ze, a ? d("palette-info-main") : p.info.main, 0.62),
        ),
        N(
          p.LinearProgress,
          "successBg",
          T(ze, a ? d("palette-success-main") : p.success.main, 0.62),
        ),
        N(
          p.LinearProgress,
          "warningBg",
          T(ze, a ? d("palette-warning-light") : p.warning.main, 0.62),
        ),
        N(
          p.Skeleton,
          "bg",
          v
            ? T(er, a ? d("palette-text-primary") : p.text.primary, 0.11)
            : `rgba(${$("palette-text-primaryChannel")} / 0.11)`,
        ),
        N(
          p.Slider,
          "primaryTrack",
          T(ze, a ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        N(
          p.Slider,
          "secondaryTrack",
          T(ze, a ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        N(
          p.Slider,
          "errorTrack",
          T(ze, a ? d("palette-error-main") : p.error.main, 0.62),
        ),
        N(
          p.Slider,
          "infoTrack",
          T(ze, a ? d("palette-info-main") : p.info.main, 0.62),
        ),
        N(
          p.Slider,
          "successTrack",
          T(ze, a ? d("palette-success-main") : p.success.main, 0.62),
        ),
        N(
          p.Slider,
          "warningTrack",
          T(ze, a ? d("palette-warning-main") : p.warning.main, 0.62),
        );
      const M = v
        ? T(
            Ne,
            a ? d("palette-background-default") : p.background.default,
            0.6825,
          )
        : Mo(p.background.default, 0.8);
      N(p.SnackbarContent, "bg", M),
        N(
          p.SnackbarContent,
          "color",
          kt(() => (v ? ri.text.primary : p.getContrastText(M))),
        ),
        N(p.SpeedDialAction, "fabHoverBg", Mo(p.background.paper, 0.15)),
        N(p.StepConnector, "border", $("palette-grey-400")),
        N(p.StepContent, "border", $("palette-grey-400")),
        N(p.Switch, "defaultColor", $("palette-common-white")),
        N(p.Switch, "defaultDisabledColor", $("palette-grey-100")),
        N(
          p.Switch,
          "primaryDisabledColor",
          T(ze, a ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        N(
          p.Switch,
          "secondaryDisabledColor",
          T(ze, a ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        N(
          p.Switch,
          "errorDisabledColor",
          T(ze, a ? d("palette-error-main") : p.error.main, 0.62),
        ),
        N(
          p.Switch,
          "infoDisabledColor",
          T(ze, a ? d("palette-info-main") : p.info.main, 0.62),
        ),
        N(
          p.Switch,
          "successDisabledColor",
          T(ze, a ? d("palette-success-main") : p.success.main, 0.62),
        ),
        N(
          p.Switch,
          "warningDisabledColor",
          T(ze, a ? d("palette-warning-main") : p.warning.main, 0.62),
        ),
        N(
          p.TableCell,
          "border",
          T(ze, er(a ? d("palette-divider") : p.divider, 1), 0.88),
        ),
        N(
          p.Tooltip,
          "bg",
          T(er, a ? d("palette-grey-700") : p.grey[700], 0.92),
        );
    }
    if (p.mode === "dark") {
      N(
        p.Alert,
        "errorColor",
        T(ze, a ? d("palette-error-light") : p.error.light, 0.6),
      ),
        N(
          p.Alert,
          "infoColor",
          T(ze, a ? d("palette-info-light") : p.info.light, 0.6),
        ),
        N(
          p.Alert,
          "successColor",
          T(ze, a ? d("palette-success-light") : p.success.light, 0.6),
        ),
        N(
          p.Alert,
          "warningColor",
          T(ze, a ? d("palette-warning-light") : p.warning.light, 0.6),
        ),
        N(p.Alert, "errorFilledBg", $("palette-error-dark")),
        N(p.Alert, "infoFilledBg", $("palette-info-dark")),
        N(p.Alert, "successFilledBg", $("palette-success-dark")),
        N(p.Alert, "warningFilledBg", $("palette-warning-dark")),
        N(
          p.Alert,
          "errorFilledColor",
          kt(() => p.getContrastText(p.error.dark)),
        ),
        N(
          p.Alert,
          "infoFilledColor",
          kt(() => p.getContrastText(p.info.dark)),
        ),
        N(
          p.Alert,
          "successFilledColor",
          kt(() => p.getContrastText(p.success.dark)),
        ),
        N(
          p.Alert,
          "warningFilledColor",
          kt(() => p.getContrastText(p.warning.dark)),
        ),
        N(
          p.Alert,
          "errorStandardBg",
          T(Ne, a ? d("palette-error-light") : p.error.light, 0.9),
        ),
        N(
          p.Alert,
          "infoStandardBg",
          T(Ne, a ? d("palette-info-light") : p.info.light, 0.9),
        ),
        N(
          p.Alert,
          "successStandardBg",
          T(Ne, a ? d("palette-success-light") : p.success.light, 0.9),
        ),
        N(
          p.Alert,
          "warningStandardBg",
          T(Ne, a ? d("palette-warning-light") : p.warning.light, 0.9),
        ),
        N(p.Alert, "errorIconColor", $("palette-error-main")),
        N(p.Alert, "infoIconColor", $("palette-info-main")),
        N(p.Alert, "successIconColor", $("palette-success-main")),
        N(p.Alert, "warningIconColor", $("palette-warning-main")),
        N(p.AppBar, "defaultBg", $("palette-grey-900")),
        N(p.AppBar, "darkBg", $("palette-background-paper")),
        N(p.AppBar, "darkColor", $("palette-text-primary")),
        N(p.Avatar, "defaultBg", $("palette-grey-600")),
        N(p.Button, "inheritContainedBg", $("palette-grey-800")),
        N(p.Button, "inheritContainedHoverBg", $("palette-grey-700")),
        N(p.Chip, "defaultBorder", $("palette-grey-700")),
        N(p.Chip, "defaultAvatarColor", $("palette-grey-300")),
        N(p.Chip, "defaultIconColor", $("palette-grey-300")),
        N(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        N(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        N(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        N(
          p.LinearProgress,
          "primaryBg",
          T(Ne, a ? d("palette-primary-main") : p.primary.main, 0.5),
        ),
        N(
          p.LinearProgress,
          "secondaryBg",
          T(Ne, a ? d("palette-secondary-main") : p.secondary.main, 0.5),
        ),
        N(
          p.LinearProgress,
          "errorBg",
          T(Ne, a ? d("palette-error-main") : p.error.main, 0.5),
        ),
        N(
          p.LinearProgress,
          "infoBg",
          T(Ne, a ? d("palette-info-main") : p.info.main, 0.5),
        ),
        N(
          p.LinearProgress,
          "successBg",
          T(Ne, a ? d("palette-success-main") : p.success.main, 0.5),
        ),
        N(
          p.LinearProgress,
          "warningBg",
          T(Ne, a ? d("palette-warning-main") : p.warning.main, 0.5),
        ),
        N(
          p.Skeleton,
          "bg",
          v
            ? T(er, a ? d("palette-text-primary") : p.text.primary, 0.13)
            : `rgba(${$("palette-text-primaryChannel")} / 0.13)`,
        ),
        N(
          p.Slider,
          "primaryTrack",
          T(Ne, a ? d("palette-primary-main") : p.primary.main, 0.5),
        ),
        N(
          p.Slider,
          "secondaryTrack",
          T(Ne, a ? d("palette-secondary-main") : p.secondary.main, 0.5),
        ),
        N(
          p.Slider,
          "errorTrack",
          T(Ne, a ? d("palette-error-main") : p.error.main, 0.5),
        ),
        N(
          p.Slider,
          "infoTrack",
          T(Ne, a ? d("palette-info-main") : p.info.main, 0.5),
        ),
        N(
          p.Slider,
          "successTrack",
          T(Ne, a ? d("palette-success-main") : p.success.main, 0.5),
        ),
        N(
          p.Slider,
          "warningTrack",
          T(Ne, a ? d("palette-warning-light") : p.warning.main, 0.5),
        );
      const M = v
        ? T(
            ze,
            a ? d("palette-background-default") : p.background.default,
            0.985,
          )
        : Mo(p.background.default, 0.98);
      N(p.SnackbarContent, "bg", M),
        N(
          p.SnackbarContent,
          "color",
          kt(() => (v ? Cl.text.primary : p.getContrastText(M))),
        ),
        N(p.SpeedDialAction, "fabHoverBg", Mo(p.background.paper, 0.15)),
        N(p.StepConnector, "border", $("palette-grey-600")),
        N(p.StepContent, "border", $("palette-grey-600")),
        N(p.Switch, "defaultColor", $("palette-grey-300")),
        N(p.Switch, "defaultDisabledColor", $("palette-grey-600")),
        N(
          p.Switch,
          "primaryDisabledColor",
          T(Ne, a ? d("palette-primary-main") : p.primary.main, 0.55),
        ),
        N(
          p.Switch,
          "secondaryDisabledColor",
          T(Ne, a ? d("palette-secondary-main") : p.secondary.main, 0.55),
        ),
        N(
          p.Switch,
          "errorDisabledColor",
          T(Ne, a ? d("palette-error-main") : p.error.main, 0.55),
        ),
        N(
          p.Switch,
          "infoDisabledColor",
          T(Ne, a ? d("palette-info-main") : p.info.main, 0.55),
        ),
        N(
          p.Switch,
          "successDisabledColor",
          T(Ne, a ? d("palette-success-main") : p.success.main, 0.55),
        ),
        N(
          p.Switch,
          "warningDisabledColor",
          T(Ne, a ? d("palette-warning-light") : p.warning.main, 0.55),
        ),
        N(
          p.TableCell,
          "border",
          T(Ne, er(a ? d("palette-divider") : p.divider, 1), 0.68),
        ),
        N(
          p.Tooltip,
          "bg",
          T(er, a ? d("palette-grey-700") : p.grey[700], 0.92),
        );
    }
    Nt(p.background, "default"),
      Nt(p.background, "paper"),
      Nt(p.common, "background"),
      Nt(p.common, "onBackground"),
      Nt(p, "divider"),
      Object.keys(p).forEach((M) => {
        const E = p[M];
        M !== "tonalOffset" &&
          E &&
          typeof E == "object" &&
          (E.main && N(p[M], "mainChannel", to(ro(E.main))),
          E.light && N(p[M], "lightChannel", to(ro(E.light))),
          E.dark && N(p[M], "darkChannel", to(ro(E.dark))),
          E.contrastText &&
            N(p[M], "contrastTextChannel", to(ro(E.contrastText))),
          M === "text" && (Nt(p[M], "primary"), Nt(p[M], "secondary")),
          M === "action" &&
            (E.active && Nt(p[M], "active"),
            E.selected && Nt(p[M], "selected")));
      });
  }),
    (R = t.reduce((L, p) => Xe(L, p), R));
  const P = {
      prefix: i,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: s,
      getSelector: Kp(R),
      enableContrastVars: a,
    },
    { vars: I, generateThemeVars: A, generateStyleSheets: O } = Xd(R, P);
  return (
    (R.vars = I),
    Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([L, p]) => {
      R[L] = p;
    }),
    (R.generateThemeVars = A),
    (R.generateStyleSheets = O),
    (R.generateSpacing = function () {
      return al(u.spacing, fn(this));
    }),
    (R.getColorSchemeSelector = Jd(l)),
    (R.spacing = R.generateSpacing()),
    (R.shouldSkipGeneratingVar = s),
    (R.unstable_sxConfig = {
      ...ko,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (R.unstable_sx = function (p) {
      return qt({ sx: p, theme: this });
    }),
    (R.toRuntimeSource = Rl),
    R
  );
}
function Wa(e, t, r) {
  e.colorSchemes &&
    r &&
    (e.colorSchemes[t] = {
      ...(r !== !0 && r),
      palette: Ni({ ...(r === !0 ? {} : r.palette), mode: t }),
    });
}
function zi(e = {}, ...t) {
  const {
      palette: r,
      cssVariables: o = !1,
      colorSchemes: n = r ? void 0 : { light: !0 },
      defaultColorScheme: i = r == null ? void 0 : r.mode,
      ...a
    } = e,
    s = i || "light",
    l = n == null ? void 0 : n[s],
    c = {
      ...n,
      ...(r
        ? { [s]: { ...(typeof l != "boolean" && l), palette: r } }
        : void 0),
    };
  if (o === !1) {
    if (!("colorSchemes" in e)) return oi(e, ...t);
    let u = r;
    "palette" in e ||
      (c[s] &&
        (c[s] !== !0
          ? (u = c[s].palette)
          : s === "dark" && (u = { mode: "dark" })));
    const h = oi({ ...e, palette: u }, ...t);
    return (
      (h.defaultColorScheme = s),
      (h.colorSchemes = c),
      h.palette.mode === "light" &&
        ((h.colorSchemes.light = {
          ...(c.light !== !0 && c.light),
          palette: h.palette,
        }),
        Wa(h, "dark", c.dark)),
      h.palette.mode === "dark" &&
        ((h.colorSchemes.dark = {
          ...(c.dark !== !0 && c.dark),
          palette: h.palette,
        }),
        Wa(h, "light", c.light)),
      h
    );
  }
  return (
    !r && !("light" in c) && s === "light" && (c.light = !0),
    Jp(
      {
        ...a,
        colorSchemes: c,
        defaultColorScheme: s,
        ...(typeof o != "boolean" && o),
      },
      ...t,
    )
  );
}
const ji = zi();
function Wt() {
  const e = To(ji);
  return e[It] || e;
}
function kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rt = (e) => kn(e) && e !== "classes",
  D = pl({ themeId: It, defaultTheme: ji, rootShouldForwardProp: rt });
function Qp({ theme: e, ...t }) {
  const r = It in e ? e[It] : void 0;
  return w.jsx(bl, { ...t, themeId: r ? It : void 0, theme: r || e });
}
const Ao = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  { CssVarsProvider: Zp } = Gd({
    themeId: It,
    theme: () => zi({ cssVariables: !0 }),
    colorSchemeStorageKey: Ao.colorSchemeStorageKey,
    modeStorageKey: Ao.modeStorageKey,
    defaultColorScheme: {
      light: Ao.defaultLightColorScheme,
      dark: Ao.defaultDarkColorScheme,
    },
    resolveTheme: (e) => {
      const t = { ...e, typography: kl(e.palette, e.typography) };
      return (
        (t.unstable_sx = function (o) {
          return qt({ sx: o, theme: this });
        }),
        t
      );
    },
  }),
  ef = Zp;
function f0({ theme: e, ...t }) {
  const r = m.useMemo(() => {
    if (typeof e == "function") return e;
    const o = It in e ? e[It] : e;
    return "colorSchemes" in o ? null : "vars" in o ? e : { ...e, vars: null };
  }, [e]);
  return r ? w.jsx(Qp, { theme: r, ...t }) : w.jsx(ef, { theme: e, ...t });
}
function Ha(...e) {
  return e.reduce(
    (t, r) =>
      r == null
        ? t
        : function (...n) {
            t.apply(this, n), r.apply(this, n);
          },
    () => {},
  );
}
function tf(e) {
  return w.jsx(sl, { ...e, defaultTheme: ji, themeId: It });
}
function Fi(e) {
  return function (r) {
    return w.jsx(tf, {
      styles: typeof e == "function" ? (o) => e({ theme: o, ...r }) : e,
    });
  };
}
function rf() {
  return bn;
}
const ie = jd;
function pe(e) {
  return Ld(e);
}
function of(e) {
  return ce("MuiSvgIcon", e);
}
de("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const nf = (e) => {
    const { color: t, fontSize: r, classes: o } = e,
      n = {
        root: ["root", t !== "inherit" && `color${z(t)}`, `fontSize${z(r)}`],
      };
    return ue(n, of, o);
  },
  af = D("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "inherit" && t[`color${z(r.color)}`],
        t[`fontSize${z(r.fontSize)}`],
      ];
    },
  })(
    ie(({ theme: e }) => {
      var t, r, o, n, i, a, s, l, c, u, h, y, d, f;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (n = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : n.call(t, "fill", {
                duration:
                  (o =
                    (r = (e.vars ?? e).transitions) == null
                      ? void 0
                      : r.duration) == null
                    ? void 0
                    : o.shorter,
              }),
        variants: [
          { props: (g) => !g.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : a.call(i, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (s = e.typography) == null ? void 0 : s.pxToRem) == null
                  ? void 0
                  : l.call(s, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null
                  ? void 0
                  : u.call(c, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, g]) => g && g.main)
            .map(([g]) => {
              var b, x;
              return {
                props: { color: g },
                style: {
                  color:
                    (x = (b = (e.vars ?? e).palette) == null ? void 0 : b[g]) ==
                    null
                      ? void 0
                      : x.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (y = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) ==
                null
                  ? void 0
                  : y.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (f = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) ==
                null
                  ? void 0
                  : f.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  ii = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiSvgIcon" }),
      {
        children: n,
        className: i,
        color: a = "inherit",
        component: s = "svg",
        fontSize: l = "medium",
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: h,
        viewBox: y = "0 0 24 24",
        ...d
      } = o,
      f = m.isValidElement(n) && n.type === "svg",
      g = {
        ...o,
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: y,
        hasSvgAsChild: f,
      },
      b = {};
    u || (b.viewBox = y);
    const x = nf(g);
    return w.jsxs(af, {
      as: s,
      className: U(x.root, i),
      focusable: "false",
      color: c,
      "aria-hidden": h ? void 0 : !0,
      role: h ? "img" : void 0,
      ref: r,
      ...b,
      ...d,
      ...(f && n.props),
      ownerState: g,
      children: [
        f ? n.props.children : n,
        h ? w.jsx("title", { children: h }) : null,
      ],
    });
  });
ii.muiName = "SvgIcon";
function Fe(e, t) {
  function r(o, n) {
    return w.jsx(ii, { "data-testid": void 0, ref: n, ...o, children: e });
  }
  return (r.muiName = ii.muiName), m.memo(m.forwardRef(r));
}
function Di(e, t = 166) {
  let r;
  function o(...n) {
    const i = () => {
      e.apply(this, n);
    };
    clearTimeout(r), (r = setTimeout(i, t));
  }
  return (
    (o.clear = () => {
      clearTimeout(r);
    }),
    o
  );
}
function Ye(e) {
  return (e && e.ownerDocument) || document;
}
function Ct(e) {
  return Ye(e).defaultView || window;
}
function Va(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ho(e) {
  const { controlled: t, default: r, name: o, state: n = "value" } = e,
    { current: i } = m.useRef(t !== void 0),
    [a, s] = m.useState(r),
    l = i ? t : a,
    c = m.useCallback((u) => {
      i || s(u);
    }, []);
  return [l, c];
}
function tt(e) {
  const t = m.useRef(e);
  return (
    at(() => {
      t.current = e;
    }),
    m.useRef((...r) => (0, t.current)(...r)).current
  );
}
function He(...e) {
  const t = m.useRef(void 0),
    r = m.useCallback((o) => {
      const n = e.map((i) => {
        if (i == null) return null;
        if (typeof i == "function") {
          const a = i,
            s = a(o);
          return typeof s == "function"
            ? s
            : () => {
                a(null);
              };
        }
        return (
          (i.current = o),
          () => {
            i.current = null;
          }
        );
      });
      return () => {
        n.forEach((i) => (i == null ? void 0 : i()));
      };
    }, e);
  return m.useMemo(
    () =>
      e.every((o) => o == null)
        ? null
        : (o) => {
            t.current && (t.current(), (t.current = void 0)),
              o != null && (t.current = r(o));
          },
    e,
  );
}
function sf(e, t) {
  const r = e.charCodeAt(2);
  return (
    e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function"
  );
}
function Pl(e, t) {
  if (!e) return t;
  function r(a, s) {
    const l = {};
    return (
      Object.keys(s).forEach((c) => {
        sf(c, s[c]) &&
          typeof a[c] == "function" &&
          (l[c] = (...u) => {
            a[c](...u), s[c](...u);
          });
      }),
      l
    );
  }
  if (typeof e == "function" || typeof t == "function")
    return (a) => {
      const s = typeof t == "function" ? t(a) : t,
        l = typeof e == "function" ? e({ ...a, ...s }) : e,
        c = U(
          a == null ? void 0 : a.className,
          s == null ? void 0 : s.className,
          l == null ? void 0 : l.className,
        ),
        u = r(l, s);
      return {
        ...s,
        ...l,
        ...u,
        ...(!!c && { className: c }),
        ...((s == null ? void 0 : s.style) &&
          (l == null ? void 0 : l.style) && {
            style: { ...s.style, ...l.style },
          }),
        ...((s == null ? void 0 : s.sx) &&
          (l == null ? void 0 : l.sx) && {
            sx: [
              ...(Array.isArray(s.sx) ? s.sx : [s.sx]),
              ...(Array.isArray(l.sx) ? l.sx : [l.sx]),
            ],
          }),
      };
    };
  const o = t,
    n = r(e, o),
    i = U(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...n,
    ...(!!i && { className: i }),
    ...((o == null ? void 0 : o.style) &&
      (e == null ? void 0 : e.style) && { style: { ...o.style, ...e.style } }),
    ...((o == null ? void 0 : o.sx) &&
      (e == null ? void 0 : e.sx) && {
        sx: [
          ...(Array.isArray(o.sx) ? o.sx : [o.sx]),
          ...(Array.isArray(e.sx) ? e.sx : [e.sx]),
        ],
      }),
  };
}
function El(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e)
    if ({}.hasOwnProperty.call(e, o)) {
      if (t.indexOf(o) !== -1) continue;
      r[o] = e[o];
    }
  return r;
}
function ai(e, t) {
  return (
    (ai = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    ai(e, t)
  );
}
function Il(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ai(e, t);
}
const Ua = { disabled: !1 },
  rn = jt.createContext(null);
var lf = function (t) {
    return t.scrollTop;
  },
  oo = "unmounted",
  or = "exited",
  nr = "entering",
  kr = "entered",
  si = "exiting",
  wt = (function (e) {
    Il(t, e);
    function t(o, n) {
      var i;
      i = e.call(this, o, n) || this;
      var a = n,
        s = a && !a.isMounting ? o.enter : o.appear,
        l;
      return (
        (i.appearStatus = null),
        o.in
          ? s
            ? ((l = or), (i.appearStatus = nr))
            : (l = kr)
          : o.unmountOnExit || o.mountOnEnter
            ? (l = oo)
            : (l = or),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (n, i) {
      var a = n.in;
      return a && i.status === oo ? { status: or } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (n) {
        var i = null;
        if (n !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== nr && a !== kr && (i = nr)
            : (a === nr || a === kr) && (i = si);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var n = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = n),
          n != null &&
            typeof n != "number" &&
            ((i = n.exit),
            (a = n.enter),
            (s = n.appear !== void 0 ? n.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (r.updateStatus = function (n, i) {
        if ((n === void 0 && (n = !1), i !== null))
          if ((this.cancelNextCallback(), i === nr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Eo.findDOMNode(this);
              a && lf(a);
            }
            this.performEnter(n);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === or &&
            this.setState({ status: oo });
      }),
      (r.performEnter = function (n) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : n,
          l = this.props.nodeRef ? [s] : [Eo.findDOMNode(this), s],
          c = l[0],
          u = l[1],
          h = this.getTimeouts(),
          y = s ? h.appear : h.enter;
        if ((!n && !a) || Ua.disabled) {
          this.safeSetState({ status: kr }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: nr }, function () {
            i.props.onEntering(c, u),
              i.onTransitionEnd(y, function () {
                i.safeSetState({ status: kr }, function () {
                  i.props.onEntered(c, u);
                });
              });
          });
      }),
      (r.performExit = function () {
        var n = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Eo.findDOMNode(this);
        if (!i || Ua.disabled) {
          this.safeSetState({ status: or }, function () {
            n.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: si }, function () {
            n.props.onExiting(s),
              n.onTransitionEnd(a.exit, function () {
                n.safeSetState({ status: or }, function () {
                  n.props.onExited(s);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (n, i) {
        (i = this.setNextCallback(i)), this.setState(n, i);
      }),
      (r.setNextCallback = function (n) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), n(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (n, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Eo.findDOMNode(this),
          s = n == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        n != null && setTimeout(this.nextCallback, n);
      }),
      (r.render = function () {
        var n = this.state.status;
        if (n === oo) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = El(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return jt.createElement(
          rn.Provider,
          { value: null },
          typeof a == "function"
            ? a(n, s)
            : jt.cloneElement(jt.Children.only(a), s),
        );
      }),
      t
    );
  })(jt.Component);
wt.contextType = rn;
wt.propTypes = {};
function Sr() {}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Sr,
  onEntering: Sr,
  onEntered: Sr,
  onExit: Sr,
  onExiting: Sr,
  onExited: Sr,
};
wt.UNMOUNTED = oo;
wt.EXITED = or;
wt.ENTERING = nr;
wt.ENTERED = kr;
wt.EXITING = si;
function cf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Wi(e, t) {
  var r = function (i) {
      return t && m.isValidElement(i) ? t(i) : i;
    },
    o = Object.create(null);
  return (
    e &&
      m.Children.map(e, function (n) {
        return n;
      }).forEach(function (n) {
        o[n.key] = r(n);
      }),
    o
  );
}
function uf(e, t) {
  (e = e || {}), (t = t || {});
  function r(u) {
    return u in t ? t[u] : e[u];
  }
  var o = Object.create(null),
    n = [];
  for (var i in e) i in t ? n.length && ((o[i] = n), (n = [])) : n.push(i);
  var a,
    s = {};
  for (var l in t) {
    if (o[l])
      for (a = 0; a < o[l].length; a++) {
        var c = o[l][a];
        s[o[l][a]] = r(c);
      }
    s[l] = r(l);
  }
  for (a = 0; a < n.length; a++) s[n[a]] = r(n[a]);
  return s;
}
function ar(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function df(e, t) {
  return Wi(e.children, function (r) {
    return m.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ar(r, "appear", e),
      enter: ar(r, "enter", e),
      exit: ar(r, "exit", e),
    });
  });
}
function pf(e, t, r) {
  var o = Wi(e.children),
    n = uf(t, o);
  return (
    Object.keys(n).forEach(function (i) {
      var a = n[i];
      if (m.isValidElement(a)) {
        var s = i in t,
          l = i in o,
          c = t[i],
          u = m.isValidElement(c) && !c.props.in;
        l && (!s || u)
          ? (n[i] = m.cloneElement(a, {
              onExited: r.bind(null, a),
              in: !0,
              exit: ar(a, "exit", e),
              enter: ar(a, "enter", e),
            }))
          : !l && s && !u
            ? (n[i] = m.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              m.isValidElement(c) &&
              (n[i] = m.cloneElement(a, {
                onExited: r.bind(null, a),
                in: c.props.in,
                exit: ar(a, "exit", e),
                enter: ar(a, "enter", e),
              }));
      }
    }),
    n
  );
}
var ff =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  mf = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Hi = (function (e) {
    Il(t, e);
    function t(o, n) {
      var i;
      i = e.call(this, o, n) || this;
      var a = i.handleExited.bind(cf(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (r.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (n, i) {
        var a = i.children,
          s = i.handleExited,
          l = i.firstRender;
        return { children: l ? df(n, s) : pf(n, a, s), firstRender: !1 };
      }),
      (r.handleExited = function (n, i) {
        var a = Wi(this.props.children);
        n.key in a ||
          (n.props.onExited && n.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = Jo({}, s.children);
              return delete l[n.key], { children: l };
            }));
      }),
      (r.render = function () {
        var n = this.props,
          i = n.component,
          a = n.childFactory,
          s = El(n, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = ff(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? jt.createElement(rn.Provider, { value: l }, c)
            : jt.createElement(
                rn.Provider,
                { value: l },
                jt.createElement(i, s, c),
              )
        );
      }),
      t
    );
  })(jt.Component);
Hi.propTypes = {};
Hi.defaultProps = mf;
const _a = {};
function Ml(e, t) {
  const r = m.useRef(_a);
  return r.current === _a && (r.current = e(t)), r;
}
const gf = [];
function hf(e) {
  m.useEffect(e, gf);
}
class Rn {
  constructor() {
    Ur(this, "currentId", null);
    Ur(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Ur(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Rn();
  }
  start(t, r) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), r();
      }, t));
  }
}
function sr() {
  const e = Ml(Rn.create).current;
  return hf(e.disposeEffect), e;
}
const Vi = (e) => e.scrollTop;
function Mr(e, t) {
  const { timeout: r, easing: o, style: n = {} } = e;
  return {
    duration:
      n.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing:
      n.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: n.transitionDelay,
  };
}
function Kt(e) {
  return typeof e == "string";
}
function Al(e, t, r) {
  return e === void 0 || Kt(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...r } };
}
function Ol(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function lr(e, t = []) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter(
        (o) =>
          o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o),
      )
      .forEach((o) => {
        r[o] = e[o];
      }),
    r
  );
}
function Ga(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function"))
      .forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
function Ll(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: o,
    externalForwardedProps: n,
    className: i,
  } = e;
  if (!t) {
    const d = U(
        r == null ? void 0 : r.className,
        i,
        n == null ? void 0 : n.className,
        o == null ? void 0 : o.className,
      ),
      f = {
        ...(r == null ? void 0 : r.style),
        ...(n == null ? void 0 : n.style),
        ...(o == null ? void 0 : o.style),
      },
      g = { ...r, ...n, ...o };
    return (
      d.length > 0 && (g.className = d),
      Object.keys(f).length > 0 && (g.style = f),
      { props: g, internalRef: void 0 }
    );
  }
  const a = lr({ ...n, ...o }),
    s = Ga(o),
    l = Ga(n),
    c = t(a),
    u = U(
      c == null ? void 0 : c.className,
      r == null ? void 0 : r.className,
      i,
      n == null ? void 0 : n.className,
      o == null ? void 0 : o.className,
    ),
    h = {
      ...(c == null ? void 0 : c.style),
      ...(r == null ? void 0 : r.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
    },
    y = { ...c, ...r, ...l, ...s };
  return (
    u.length > 0 && (y.className = u),
    Object.keys(h).length > 0 && (y.style = h),
    { props: y, internalRef: c.ref }
  );
}
function fe(e, t) {
  const {
      className: r,
      elementType: o,
      ownerState: n,
      externalForwardedProps: i,
      internalForwardedProps: a,
      shouldForwardComponentProp: s = !1,
      ...l
    } = t,
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: h = { [e]: void 0 },
      ...y
    } = i,
    d = u[e] || o,
    f = Ol(h[e], n),
    {
      props: { component: g, ...b },
      internalRef: x,
    } = Ll({
      className: r,
      ...l,
      externalForwardedProps: e === "root" ? y : void 0,
      externalSlotProps: f,
    }),
    k = He(x, f == null ? void 0 : f.ref, t.ref),
    S = e === "root" ? g || c : g,
    v = Al(
      d,
      {
        ...(e === "root" && !c && !u[e] && a),
        ...(e !== "root" && !u[e] && a),
        ...b,
        ...(S && !s && { as: S }),
        ...(S && s && { component: S }),
        ref: k,
      },
      n,
    );
  return [d, v];
}
function yf(e) {
  return ce("MuiPaper", e);
}
de("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const vf = (e) => {
    const { square: t, elevation: r, variant: o, classes: n } = e,
      i = {
        root: [
          "root",
          o,
          !t && "rounded",
          o === "elevation" && `elevation${r}`,
        ],
      };
    return ue(i, yf, n);
  },
  bf = D("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        !r.square && t.rounded,
        r.variant === "elevation" && t[`elevation${r.elevation}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    })),
  ),
  Hr = m.forwardRef(function (t, r) {
    var d;
    const o = pe({ props: t, name: "MuiPaper" }),
      n = Wt(),
      {
        className: i,
        component: a = "div",
        elevation: s = 1,
        square: l = !1,
        variant: c = "elevation",
        ...u
      } = o,
      h = { ...o, component: a, elevation: s, square: l, variant: c },
      y = vf(h);
    return w.jsx(bf, {
      as: a,
      ownerState: h,
      className: U(y.root, i),
      ref: r,
      ...u,
      style: {
        ...(c === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[s],
          ...(n.vars && {
            "--Paper-overlay": (d = n.vars.overlays) == null ? void 0 : d[s],
          }),
          ...(!n.vars &&
            n.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${en("#fff", ni(s))}, ${en("#fff", ni(s))})`,
            }),
        }),
        ...u.style,
      },
    });
  });
function Ar(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
class on {
  constructor() {
    Ur(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new on();
  }
  static use() {
    const t = Ml(on.create).current,
      [r, o] = m.useState(!1);
    return (
      (t.shouldMount = r),
      (t.setShouldMount = o),
      m.useEffect(t.mountEffect, [r]),
      t
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = Sf()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function xf() {
  return on.use();
}
function Sf() {
  let e, t;
  const r = new Promise((o, n) => {
    (e = o), (t = n);
  });
  return (r.resolve = e), (r.reject = t), r;
}
function Cf(e) {
  const {
      className: t,
      classes: r,
      pulsate: o = !1,
      rippleX: n,
      rippleY: i,
      rippleSize: a,
      in: s,
      onExited: l,
      timeout: c,
    } = e,
    [u, h] = m.useState(!1),
    y = U(t, r.ripple, r.rippleVisible, o && r.ripplePulsate),
    d = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + n },
    f = U(r.child, u && r.childLeaving, o && r.childPulsate);
  return (
    !s && !u && h(!0),
    m.useEffect(() => {
      if (!s && l != null) {
        const g = setTimeout(l, c);
        return () => {
          clearTimeout(g);
        };
      }
    }, [l, s, c]),
    w.jsx("span", {
      className: y,
      style: d,
      children: w.jsx("span", { className: f }),
    })
  );
}
const dt = de("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  li = 550,
  wf = 80,
  kf = Xt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Rf = Xt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  Tf = Xt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  $f = D("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  Pf = D(Cf, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${kf};
    animation-duration: ${li}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${dt.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${dt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${dt.childLeaving} {
    opacity: 0;
    animation-name: ${Rf};
    animation-duration: ${li}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Tf};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  Ef = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTouchRipple" }),
      { center: n = !1, classes: i = {}, className: a, ...s } = o,
      [l, c] = m.useState([]),
      u = m.useRef(0),
      h = m.useRef(null);
    m.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [l]);
    const y = m.useRef(!1),
      d = sr(),
      f = m.useRef(null),
      g = m.useRef(null),
      b = m.useCallback(
        (v) => {
          const {
            pulsate: C,
            rippleX: R,
            rippleY: P,
            rippleSize: I,
            cb: A,
          } = v;
          c((O) => [
            ...O,
            w.jsx(
              Pf,
              {
                classes: {
                  ripple: U(i.ripple, dt.ripple),
                  rippleVisible: U(i.rippleVisible, dt.rippleVisible),
                  ripplePulsate: U(i.ripplePulsate, dt.ripplePulsate),
                  child: U(i.child, dt.child),
                  childLeaving: U(i.childLeaving, dt.childLeaving),
                  childPulsate: U(i.childPulsate, dt.childPulsate),
                },
                timeout: li,
                pulsate: C,
                rippleX: R,
                rippleY: P,
                rippleSize: I,
              },
              u.current,
            ),
          ]),
            (u.current += 1),
            (h.current = A);
        },
        [i],
      ),
      x = m.useCallback(
        (v = {}, C = {}, R = () => {}) => {
          const {
            pulsate: P = !1,
            center: I = n || C.pulsate,
            fakeElement: A = !1,
          } = C;
          if ((v == null ? void 0 : v.type) === "mousedown" && y.current) {
            y.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === "touchstart" && (y.current = !0);
          const O = A ? null : g.current,
            L = O
              ? O.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let p, $, T;
          if (
            I ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (p = Math.round(L.width / 2)), ($ = Math.round(L.height / 2));
          else {
            const { clientX: M, clientY: E } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (p = Math.round(M - L.left)), ($ = Math.round(E - L.top));
          }
          if (I)
            (T = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3)),
              T % 2 === 0 && (T += 1);
          else {
            const M =
                Math.max(Math.abs((O ? O.clientWidth : 0) - p), p) * 2 + 2,
              E = Math.max(Math.abs((O ? O.clientHeight : 0) - $), $) * 2 + 2;
            T = Math.sqrt(M ** 2 + E ** 2);
          }
          v != null && v.touches
            ? f.current === null &&
              ((f.current = () => {
                b({ pulsate: P, rippleX: p, rippleY: $, rippleSize: T, cb: R });
              }),
              d.start(wf, () => {
                f.current && (f.current(), (f.current = null));
              }))
            : b({ pulsate: P, rippleX: p, rippleY: $, rippleSize: T, cb: R });
        },
        [n, b, d],
      ),
      k = m.useCallback(() => {
        x({}, { pulsate: !0 });
      }, [x]),
      S = m.useCallback(
        (v, C) => {
          if (
            (d.clear(),
            (v == null ? void 0 : v.type) === "touchend" && f.current)
          ) {
            f.current(),
              (f.current = null),
              d.start(0, () => {
                S(v, C);
              });
            return;
          }
          (f.current = null),
            c((R) => (R.length > 0 ? R.slice(1) : R)),
            (h.current = C);
        },
        [d],
      );
    return (
      m.useImperativeHandle(r, () => ({ pulsate: k, start: x, stop: S }), [
        k,
        x,
        S,
      ]),
      w.jsx($f, {
        className: U(dt.root, i.root, a),
        ref: g,
        ...s,
        children: w.jsx(Hi, { component: null, exit: !0, children: l }),
      })
    );
  });
function If(e) {
  return ce("MuiButtonBase", e);
}
const Mf = de("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  Af = (e) => {
    const {
        disabled: t,
        focusVisible: r,
        focusVisibleClassName: o,
        classes: n,
      } = e,
      a = ue({ root: ["root", t && "disabled", r && "focusVisible"] }, If, n);
    return r && o && (a.root += ` ${o}`), a;
  },
  Of = D("button", { name: "MuiButtonBase", slot: "Root" })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${Mf.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  dr = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiButtonBase" }),
      {
        action: n,
        centerRipple: i = !1,
        children: a,
        className: s,
        component: l = "button",
        disabled: c = !1,
        disableRipple: u = !1,
        disableTouchRipple: h = !1,
        focusRipple: y = !1,
        focusVisibleClassName: d,
        LinkComponent: f = "a",
        onBlur: g,
        onClick: b,
        onContextMenu: x,
        onDragLeave: k,
        onFocus: S,
        onFocusVisible: v,
        onKeyDown: C,
        onKeyUp: R,
        onMouseDown: P,
        onMouseLeave: I,
        onMouseUp: A,
        onTouchEnd: O,
        onTouchMove: L,
        onTouchStart: p,
        tabIndex: $ = 0,
        TouchRippleProps: T,
        touchRippleRef: M,
        type: E,
        ...F
      } = o,
      B = m.useRef(null),
      j = xf(),
      G = He(j.ref, M),
      [H, X] = m.useState(!1);
    c && H && X(!1),
      m.useImperativeHandle(
        n,
        () => ({
          focusVisible: () => {
            X(!0), B.current.focus();
          },
        }),
        [],
      );
    const ee = j.shouldMount && !u && !c;
    m.useEffect(() => {
      H && y && !u && j.pulsate();
    }, [u, y, H, j]);
    const ye = zt(j, "start", P, h),
      J = zt(j, "stop", x, h),
      _ = zt(j, "stop", k, h),
      te = zt(j, "stop", A, h),
      me = zt(
        j,
        "stop",
        (re) => {
          H && re.preventDefault(), I && I(re);
        },
        h,
      ),
      ve = zt(j, "start", p, h),
      Z = zt(j, "stop", O, h),
      se = zt(j, "stop", L, h),
      ne = zt(
        j,
        "stop",
        (re) => {
          Ar(re.target) || X(!1), g && g(re);
        },
        !1,
      ),
      oe = tt((re) => {
        B.current || (B.current = re.currentTarget),
          Ar(re.target) && (X(!0), v && v(re)),
          S && S(re);
      }),
      Y = () => {
        const re = B.current;
        return l && l !== "button" && !(re.tagName === "A" && re.href);
      },
      le = tt((re) => {
        y &&
          !re.repeat &&
          H &&
          re.key === " " &&
          j.stop(re, () => {
            j.start(re);
          }),
          re.target === re.currentTarget &&
            Y() &&
            re.key === " " &&
            re.preventDefault(),
          C && C(re),
          re.target === re.currentTarget &&
            Y() &&
            re.key === "Enter" &&
            !c &&
            (re.preventDefault(), b && b(re));
      }),
      Ae = tt((re) => {
        y &&
          re.key === " " &&
          H &&
          !re.defaultPrevented &&
          j.stop(re, () => {
            j.pulsate(re);
          }),
          R && R(re),
          b &&
            re.target === re.currentTarget &&
            Y() &&
            re.key === " " &&
            !re.defaultPrevented &&
            b(re);
      });
    let Se = l;
    Se === "button" && (F.href || F.to) && (Se = f);
    const Pe = {};
    if (Se === "button") {
      const re = !!F.formAction;
      (Pe.type = E === void 0 && !re ? "button" : E), (Pe.disabled = c);
    } else
      !F.href && !F.to && (Pe.role = "button"), c && (Pe["aria-disabled"] = c);
    const Ee = He(r, B),
      Me = {
        ...o,
        centerRipple: i,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: h,
        focusRipple: y,
        tabIndex: $,
        focusVisible: H,
      },
      Re = Af(Me);
    return w.jsxs(Of, {
      as: Se,
      className: U(Re.root, s),
      ownerState: Me,
      onBlur: ne,
      onClick: b,
      onContextMenu: J,
      onFocus: oe,
      onKeyDown: le,
      onKeyUp: Ae,
      onMouseDown: ye,
      onMouseLeave: me,
      onMouseUp: te,
      onDragLeave: _,
      onTouchEnd: Z,
      onTouchMove: se,
      onTouchStart: ve,
      ref: Ee,
      tabIndex: c ? -1 : $,
      type: E,
      ...Pe,
      ...F,
      children: [a, ee ? w.jsx(Ef, { ref: G, center: i, ...T }) : null],
    });
  });
function zt(e, t, r, o = !1) {
  return tt((n) => (r && r(n), o || e[t](n), !0));
}
function Lf(e) {
  return typeof e.main == "string";
}
function Bf(e, t = []) {
  if (!Lf(e)) return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string") return !1;
  return !0;
}
function De(e = []) {
  return ([, t]) => t && Bf(t, e);
}
function Nf(e) {
  return ce("MuiAlert", e);
}
const Ka = de("MuiAlert", [
  "root",
  "action",
  "icon",
  "message",
  "filled",
  "colorSuccess",
  "colorInfo",
  "colorWarning",
  "colorError",
  "filledSuccess",
  "filledInfo",
  "filledWarning",
  "filledError",
  "outlined",
  "outlinedSuccess",
  "outlinedInfo",
  "outlinedWarning",
  "outlinedError",
  "standard",
  "standardSuccess",
  "standardInfo",
  "standardWarning",
  "standardError",
]);
function zf(e) {
  return ce("MuiCircularProgress", e);
}
de("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "track",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const xt = 44,
  ci = Xt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  ui = Xt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  jf =
    typeof ci != "string"
      ? Fr`
        animation: ${ci} 1.4s linear infinite;
      `
      : null,
  Ff =
    typeof ui != "string"
      ? Fr`
        animation: ${ui} 1.4s ease-in-out infinite;
      `
      : null,
  Df = (e) => {
    const { classes: t, variant: r, color: o, disableShrink: n } = e,
      i = {
        root: ["root", r, `color${z(o)}`],
        svg: ["svg"],
        track: ["track"],
        circle: ["circle", `circle${z(r)}`, n && "circleDisableShrink"],
      };
    return ue(i, zf, t);
  },
  Wf = D("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], t[`color${z(r.color)}`]];
    },
  })(
    ie(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: jf || { animation: `${ci} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
      ],
    })),
  ),
  Hf = D("svg", { name: "MuiCircularProgress", slot: "Svg" })({
    display: "block",
  }),
  Vf = D("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.circle,
        t[`circle${z(r.variant)}`],
        r.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" && !t.disableShrink,
          style: Ff || { animation: `${ui} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  Uf = D("circle", { name: "MuiCircularProgress", slot: "Track" })(
    ie(({ theme: e }) => ({
      stroke: "currentColor",
      opacity: (e.vars || e).palette.action.activatedOpacity,
    })),
  ),
  Bl = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiCircularProgress" }),
      {
        className: n,
        color: i = "primary",
        disableShrink: a = !1,
        enableTrackSlot: s = !1,
        size: l = 40,
        style: c,
        thickness: u = 3.6,
        value: h = 0,
        variant: y = "indeterminate",
        ...d
      } = o,
      f = {
        ...o,
        color: i,
        disableShrink: a,
        size: l,
        thickness: u,
        value: h,
        variant: y,
        enableTrackSlot: s,
      },
      g = Df(f),
      b = {},
      x = {},
      k = {};
    if (y === "determinate") {
      const S = 2 * Math.PI * ((xt - u) / 2);
      (b.strokeDasharray = S.toFixed(3)),
        (k["aria-valuenow"] = Math.round(h)),
        (b.strokeDashoffset = `${(((100 - h) / 100) * S).toFixed(3)}px`),
        (x.transform = "rotate(-90deg)");
    }
    return w.jsx(Wf, {
      className: U(g.root, n),
      style: { width: l, height: l, ...x, ...c },
      ownerState: f,
      ref: r,
      role: "progressbar",
      ...k,
      ...d,
      children: w.jsxs(Hf, {
        className: g.svg,
        ownerState: f,
        viewBox: `${xt / 2} ${xt / 2} ${xt} ${xt}`,
        children: [
          s
            ? w.jsx(Uf, {
                className: g.track,
                ownerState: f,
                cx: xt,
                cy: xt,
                r: (xt - u) / 2,
                fill: "none",
                strokeWidth: u,
                "aria-hidden": "true",
              })
            : null,
          w.jsx(Vf, {
            className: g.circle,
            style: b,
            ownerState: f,
            cx: xt,
            cy: xt,
            r: (xt - u) / 2,
            fill: "none",
            strokeWidth: u,
          }),
        ],
      }),
    });
  });
function _f(e) {
  return ce("MuiIconButton", e);
}
const qa = de("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper",
  ]),
  Gf = (e) => {
    const {
        classes: t,
        disabled: r,
        color: o,
        edge: n,
        size: i,
        loading: a,
      } = e,
      s = {
        root: [
          "root",
          a && "loading",
          r && "disabled",
          o !== "default" && `color${z(o)}`,
          n && `edge${z(n)}`,
          `size${z(i)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return ue(s, _f, t);
  },
  Kf = D(dr, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.loading && t.loading,
        r.color !== "default" && t[`color${z(r.color)}`],
        r.edge && t[`edge${z(r.edge)}`],
        t[`size${z(r.size)}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            "--IconButton-hoverBg": e.alpha(
              (e.vars || e).palette.action.active,
              (e.vars || e).palette.action.hoverOpacity,
            ),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    ie(({ theme: e }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--IconButton-hoverBg": e.alpha(
                (e.vars || e).palette[t].main,
                (e.vars || e).palette.action.hoverOpacity,
              ),
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: e.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: e.typography.pxToRem(28) },
        },
      ],
      [`&.${qa.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${qa.loading}`]: { color: "transparent" },
    })),
  ),
  qf = D("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(
    ({ theme: e }) => ({
      display: "none",
      position: "absolute",
      visibility: "visible",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: (e.vars || e).palette.action.disabled,
      variants: [{ props: { loading: !0 }, style: { display: "flex" } }],
    }),
  ),
  Yf = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiIconButton" }),
      {
        edge: n = !1,
        children: i,
        className: a,
        color: s = "default",
        disabled: l = !1,
        disableFocusRipple: c = !1,
        size: u = "medium",
        id: h,
        loading: y = null,
        loadingIndicator: d,
        ...f
      } = o,
      g = mr(h),
      b = d ?? w.jsx(Bl, { "aria-labelledby": g, color: "inherit", size: 16 }),
      x = {
        ...o,
        edge: n,
        color: s,
        disabled: l,
        disableFocusRipple: c,
        loading: y,
        loadingIndicator: b,
        size: u,
      },
      k = Gf(x);
    return w.jsxs(Kf, {
      id: y ? g : h,
      className: U(k.root, a),
      centerRipple: !0,
      focusRipple: !c,
      disabled: l || y,
      ref: r,
      ...f,
      ownerState: x,
      children: [
        typeof y == "boolean" &&
          w.jsx("span", {
            className: k.loadingWrapper,
            style: { display: "contents" },
            children: w.jsx(qf, {
              className: k.loadingIndicator,
              ownerState: x,
              children: y && b,
            }),
          }),
        i,
      ],
    });
  }),
  Xf = Fe(
    w.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
  ),
  Jf = Fe(
    w.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
  ),
  Qf = Fe(
    w.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
  ),
  Zf = Fe(
    w.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
  ),
  em = Fe(
    w.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
  ),
  tm = (e) => {
    const { variant: t, color: r, severity: o, classes: n } = e,
      i = {
        root: ["root", `color${z(r || o)}`, `${t}${z(r || o)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return ue(i, Nf, n);
  },
  rm = D(Hr, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${z(r.color || r.severity)}`],
      ];
    },
  })(
    ie(({ theme: e }) => {
      const t = e.palette.mode === "light" ? e.darken : e.lighten,
        r = e.palette.mode === "light" ? e.lighten : e.darken;
      return {
        ...e.typography.body2,
        backgroundColor: "transparent",
        display: "flex",
        padding: "6px 16px",
        variants: [
          ...Object.entries(e.palette)
            .filter(De(["light"]))
            .map(([o]) => ({
              props: { colorSeverity: o, variant: "standard" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${o}Color`]
                  : t(e.palette[o].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${o}StandardBg`]
                  : r(e.palette[o].light, 0.9),
                [`& .${Ka.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${o}IconColor`] }
                  : { color: e.palette[o].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(De(["light"]))
            .map(([o]) => ({
              props: { colorSeverity: o, variant: "outlined" },
              style: {
                color: e.vars
                  ? e.vars.palette.Alert[`${o}Color`]
                  : t(e.palette[o].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[o].light}`,
                [`& .${Ka.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${o}IconColor`] }
                  : { color: e.palette[o].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(De(["dark"]))
            .map(([o]) => ({
              props: { colorSeverity: o, variant: "filled" },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${o}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === "dark"
                          ? e.palette[o].dark
                          : e.palette[o].main,
                      color: e.palette.getContrastText(e.palette[o].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  om = D("div", { name: "MuiAlert", slot: "Icon" })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  nm = D("div", { name: "MuiAlert", slot: "Message" })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto",
  }),
  im = D("div", { name: "MuiAlert", slot: "Action" })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Ya = {
    success: w.jsx(Xf, { fontSize: "inherit" }),
    warning: w.jsx(Jf, { fontSize: "inherit" }),
    error: w.jsx(Qf, { fontSize: "inherit" }),
    info: w.jsx(Zf, { fontSize: "inherit" }),
  },
  m0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiAlert" }),
      {
        action: n,
        children: i,
        className: a,
        closeText: s = "Close",
        color: l,
        components: c = {},
        componentsProps: u = {},
        icon: h,
        iconMapping: y = Ya,
        onClose: d,
        role: f = "alert",
        severity: g = "success",
        slotProps: b = {},
        slots: x = {},
        variant: k = "standard",
        ...S
      } = o,
      v = { ...o, color: l, severity: g, variant: k, colorSeverity: l || g },
      C = tm(v),
      R = {
        slots: { closeButton: c.CloseButton, closeIcon: c.CloseIcon, ...x },
        slotProps: { ...u, ...b },
      },
      [P, I] = fe("root", {
        ref: r,
        shouldForwardComponentProp: !0,
        className: U(C.root, a),
        elementType: rm,
        externalForwardedProps: { ...R, ...S },
        ownerState: v,
        additionalProps: { role: f, elevation: 0 },
      }),
      [A, O] = fe("icon", {
        className: C.icon,
        elementType: om,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [L, p] = fe("message", {
        className: C.message,
        elementType: nm,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [$, T] = fe("action", {
        className: C.action,
        elementType: im,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [M, E] = fe("closeButton", {
        elementType: Yf,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [F, B] = fe("closeIcon", {
        elementType: em,
        externalForwardedProps: R,
        ownerState: v,
      });
    return w.jsxs(P, {
      ...I,
      children: [
        h !== !1 ? w.jsx(A, { ...O, children: h || y[g] || Ya[g] }) : null,
        w.jsx(L, { ...p, children: i }),
        n != null ? w.jsx($, { ...T, children: n }) : null,
        n == null && d
          ? w.jsx($, {
              ...T,
              children: w.jsx(M, {
                size: "small",
                "aria-label": s,
                title: s,
                color: "inherit",
                onClick: d,
                ...E,
                children: w.jsx(F, { fontSize: "small", ...B }),
              }),
            })
          : null,
      ],
    });
  });
function am(e) {
  return ce("MuiTypography", e);
}
const Xa = de("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]),
  sm = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  lm = rf(),
  cm = (e) => {
    const {
        align: t,
        gutterBottom: r,
        noWrap: o,
        paragraph: n,
        variant: i,
        classes: a,
      } = e,
      s = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${z(t)}`,
          r && "gutterBottom",
          o && "noWrap",
          n && "paragraph",
        ],
      };
    return ue(s, am, a);
  },
  um = D("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.variant && t[r.variant],
        r.align !== "inherit" && t[`align${z(r.align)}`],
        r.noWrap && t.noWrap,
        r.gutterBottom && t.gutterBottom,
        r.paragraph && t.paragraph,
      ];
    },
  })(
    ie(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([r, o]) => r !== "inherit" && o && typeof o == "object")
            .map(([r, o]) => ({ props: { variant: r }, style: o })),
          ...Object.entries(e.palette)
            .filter(De())
            .map(([r]) => ({
              props: { color: r },
              style: { color: (e.vars || e).palette[r].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, r]) => typeof r == "string")
            .map(([r]) => ({
              props: { color: `text${z(r)}` },
              style: { color: (e.vars || e).palette.text[r] },
            })),
          {
            props: ({ ownerState: r }) => r.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: r }) => r.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: r }) => r.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: r }) => r.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    }),
  ),
  Ja = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Rr = m.forwardRef(function (t, r) {
    const { color: o, ...n } = pe({ props: t, name: "MuiTypography" }),
      i = !sm[o],
      a = lm({ ...n, ...(i && { color: o }) }),
      {
        align: s = "inherit",
        className: l,
        component: c,
        gutterBottom: u = !1,
        noWrap: h = !1,
        paragraph: y = !1,
        variant: d = "body1",
        variantMapping: f = Ja,
        ...g
      } = a,
      b = {
        ...a,
        align: s,
        color: o,
        className: l,
        component: c,
        gutterBottom: u,
        noWrap: h,
        paragraph: y,
        variant: d,
        variantMapping: f,
      },
      x = c || (y ? "p" : f[d] || Ja[d]) || "span",
      k = cm(b);
    return w.jsx(um, {
      as: x,
      ref: r,
      className: U(k.root, l),
      ...g,
      ownerState: b,
      style: {
        ...(s !== "inherit" && { "--Typography-textAlign": s }),
        ...g.style,
      },
    });
  });
var ot = "top",
  gt = "bottom",
  ht = "right",
  nt = "left",
  Ui = "auto",
  $o = [ot, gt, ht, nt],
  Or = "start",
  yo = "end",
  dm = "clippingParents",
  Nl = "viewport",
  qr = "popper",
  pm = "reference",
  Qa = $o.reduce(function (e, t) {
    return e.concat([t + "-" + Or, t + "-" + yo]);
  }, []),
  zl = [].concat($o, [Ui]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Or, t + "-" + yo]);
  }, []),
  fm = "beforeRead",
  mm = "read",
  gm = "afterRead",
  hm = "beforeMain",
  ym = "main",
  vm = "afterMain",
  bm = "beforeWrite",
  xm = "write",
  Sm = "afterWrite",
  Cm = [fm, mm, gm, hm, ym, vm, bm, xm, Sm];
function Ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ct(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function pr(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function mt(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _i(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var o = t.styles[r] || {},
      n = t.attributes[r] || {},
      i = t.elements[r];
    !mt(i) ||
      !Ot(i) ||
      (Object.assign(i.style, o),
      Object.keys(n).forEach(function (a) {
        var s = n[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function km(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var n = t.elements[o],
          i = t.attributes[o] || {},
          a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]),
          s = a.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !mt(n) ||
          !Ot(n) ||
          (Object.assign(n.style, s),
          Object.keys(i).forEach(function (l) {
            n.removeAttribute(l);
          }));
      });
    }
  );
}
const Rm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wm,
  effect: km,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var cr = Math.max,
  nn = Math.min,
  Lr = Math.round;
function di() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function jl() {
  return !/^((?!chrome|android).)*safari/i.test(di());
}
function Br(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(),
    n = 1,
    i = 1;
  t &&
    mt(e) &&
    ((n = (e.offsetWidth > 0 && Lr(o.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Lr(o.height) / e.offsetHeight) || 1));
  var a = pr(e) ? ct(e) : window,
    s = a.visualViewport,
    l = !jl() && r,
    c = (o.left + (l && s ? s.offsetLeft : 0)) / n,
    u = (o.top + (l && s ? s.offsetTop : 0)) / i,
    h = o.width / n,
    y = o.height / i;
  return {
    width: h,
    height: y,
    top: u,
    right: c + h,
    bottom: u + y,
    left: c,
    x: c,
    y: u,
  };
}
function Gi(e) {
  var t = Br(e),
    r = e.offsetWidth,
    o = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: o }
  );
}
function Fl(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && _i(r)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Dt(e) {
  return ct(e).getComputedStyle(e);
}
function Tm(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function Jt(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Tn(e) {
  return Ot(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (_i(e) ? e.host : null) || Jt(e);
}
function Za(e) {
  return !mt(e) || Dt(e).position === "fixed" ? null : e.offsetParent;
}
function $m(e) {
  var t = /firefox/i.test(di()),
    r = /Trident/i.test(di());
  if (r && mt(e)) {
    var o = Dt(e);
    if (o.position === "fixed") return null;
  }
  var n = Tn(e);
  for (_i(n) && (n = n.host); mt(n) && ["html", "body"].indexOf(Ot(n)) < 0; ) {
    var i = Dt(n);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return n;
    n = n.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = ct(e), r = Za(e); r && Tm(r) && Dt(r).position === "static"; )
    r = Za(r);
  return r &&
    (Ot(r) === "html" || (Ot(r) === "body" && Dt(r).position === "static"))
    ? t
    : r || $m(e) || t;
}
function Ki(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ao(e, t, r) {
  return cr(e, nn(t, r));
}
function Pm(e, t, r) {
  var o = ao(e, t, r);
  return o > r ? r : o;
}
function Dl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Wl(e) {
  return Object.assign({}, Dl(), e);
}
function Hl(e, t) {
  return t.reduce(function (r, o) {
    return (r[o] = e), r;
  }, {});
}
var Em = function (t, r) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    Wl(typeof t != "number" ? t : Hl(t, $o))
  );
};
function Im(e) {
  var t,
    r = e.state,
    o = e.name,
    n = e.options,
    i = r.elements.arrow,
    a = r.modifiersData.popperOffsets,
    s = At(r.placement),
    l = Ki(s),
    c = [nt, ht].indexOf(s) >= 0,
    u = c ? "height" : "width";
  if (!(!i || !a)) {
    var h = Em(n.padding, r),
      y = Gi(i),
      d = l === "y" ? ot : nt,
      f = l === "y" ? gt : ht,
      g =
        r.rects.reference[u] + r.rects.reference[l] - a[l] - r.rects.popper[u],
      b = a[l] - r.rects.reference[l],
      x = Po(i),
      k = x ? (l === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      S = g / 2 - b / 2,
      v = h[d],
      C = k - y[u] - h[f],
      R = k / 2 - y[u] / 2 + S,
      P = ao(v, R, C),
      I = l;
    r.modifiersData[o] = ((t = {}), (t[I] = P), (t.centerOffset = P - R), t);
  }
}
function Mm(e) {
  var t = e.state,
    r = e.options,
    o = r.element,
    n = o === void 0 ? "[data-popper-arrow]" : o;
  n != null &&
    ((typeof n == "string" && ((n = t.elements.popper.querySelector(n)), !n)) ||
      (Fl(t.elements.popper, n) && (t.elements.arrow = n)));
}
const Am = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Im,
  effect: Mm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Nr(e) {
  return e.split("-")[1];
}
var Om = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Lm(e, t) {
  var r = e.x,
    o = e.y,
    n = t.devicePixelRatio || 1;
  return { x: Lr(r * n) / n || 0, y: Lr(o * n) / n || 0 };
}
function es(e) {
  var t,
    r = e.popper,
    o = e.popperRect,
    n = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    h = e.isFixed,
    y = a.x,
    d = y === void 0 ? 0 : y,
    f = a.y,
    g = f === void 0 ? 0 : f,
    b = typeof u == "function" ? u({ x: d, y: g }) : { x: d, y: g };
  (d = b.x), (g = b.y);
  var x = a.hasOwnProperty("x"),
    k = a.hasOwnProperty("y"),
    S = nt,
    v = ot,
    C = window;
  if (c) {
    var R = Po(r),
      P = "clientHeight",
      I = "clientWidth";
    if (
      (R === ct(r) &&
        ((R = Jt(r)),
        Dt(R).position !== "static" &&
          s === "absolute" &&
          ((P = "scrollHeight"), (I = "scrollWidth"))),
      (R = R),
      n === ot || ((n === nt || n === ht) && i === yo))
    ) {
      v = gt;
      var A = h && R === C && C.visualViewport ? C.visualViewport.height : R[P];
      (g -= A - o.height), (g *= l ? 1 : -1);
    }
    if (n === nt || ((n === ot || n === gt) && i === yo)) {
      S = ht;
      var O = h && R === C && C.visualViewport ? C.visualViewport.width : R[I];
      (d -= O - o.width), (d *= l ? 1 : -1);
    }
  }
  var L = Object.assign({ position: s }, c && Om),
    p = u === !0 ? Lm({ x: d, y: g }, ct(r)) : { x: d, y: g };
  if (((d = p.x), (g = p.y), l)) {
    var $;
    return Object.assign(
      {},
      L,
      (($ = {}),
      ($[v] = k ? "0" : ""),
      ($[S] = x ? "0" : ""),
      ($.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + d + "px, " + g + "px)"
          : "translate3d(" + d + "px, " + g + "px, 0)"),
      $),
    );
  }
  return Object.assign(
    {},
    L,
    ((t = {}),
    (t[v] = k ? g + "px" : ""),
    (t[S] = x ? d + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function Bm(e) {
  var t = e.state,
    r = e.options,
    o = r.gpuAcceleration,
    n = o === void 0 ? !0 : o,
    i = r.adaptive,
    a = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    c = {
      placement: At(t.placement),
      variation: Nr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      es(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        es(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Nm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Bm,
  data: {},
};
var Oo = { passive: !0 };
function zm(e) {
  var t = e.state,
    r = e.instance,
    o = e.options,
    n = o.scroll,
    i = n === void 0 ? !0 : n,
    a = o.resize,
    s = a === void 0 ? !0 : a,
    l = ct(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener("scroll", r.update, Oo);
      }),
    s && l.addEventListener("resize", r.update, Oo),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", r.update, Oo);
        }),
        s && l.removeEventListener("resize", r.update, Oo);
    }
  );
}
const jm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: zm,
  data: {},
};
var Fm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Yo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Fm[t];
  });
}
var Dm = { start: "end", end: "start" };
function ts(e) {
  return e.replace(/start|end/g, function (t) {
    return Dm[t];
  });
}
function qi(e) {
  var t = ct(e),
    r = t.pageXOffset,
    o = t.pageYOffset;
  return { scrollLeft: r, scrollTop: o };
}
function Yi(e) {
  return Br(Jt(e)).left + qi(e).scrollLeft;
}
function Wm(e, t) {
  var r = ct(e),
    o = Jt(e),
    n = r.visualViewport,
    i = o.clientWidth,
    a = o.clientHeight,
    s = 0,
    l = 0;
  if (n) {
    (i = n.width), (a = n.height);
    var c = jl();
    (c || (!c && t === "fixed")) && ((s = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: i, height: a, x: s + Yi(e), y: l };
}
function Hm(e) {
  var t,
    r = Jt(e),
    o = qi(e),
    n = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = cr(
      r.scrollWidth,
      r.clientWidth,
      n ? n.scrollWidth : 0,
      n ? n.clientWidth : 0,
    ),
    a = cr(
      r.scrollHeight,
      r.clientHeight,
      n ? n.scrollHeight : 0,
      n ? n.clientHeight : 0,
    ),
    s = -o.scrollLeft + Yi(e),
    l = -o.scrollTop;
  return (
    Dt(n || r).direction === "rtl" &&
      (s += cr(r.clientWidth, n ? n.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function Xi(e) {
  var t = Dt(e),
    r = t.overflow,
    o = t.overflowX,
    n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + n + o);
}
function Vl(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0
    ? e.ownerDocument.body
    : mt(e) && Xi(e)
      ? e
      : Vl(Tn(e));
}
function so(e, t) {
  var r;
  t === void 0 && (t = []);
  var o = Vl(e),
    n = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ct(o),
    a = n ? [i].concat(i.visualViewport || [], Xi(o) ? o : []) : o,
    s = t.concat(a);
  return n ? s : s.concat(so(Tn(a)));
}
function pi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Vm(e, t) {
  var r = Br(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function rs(e, t, r) {
  return t === Nl ? pi(Wm(e, r)) : pr(t) ? Vm(t, r) : pi(Hm(Jt(e)));
}
function Um(e) {
  var t = so(Tn(e)),
    r = ["absolute", "fixed"].indexOf(Dt(e).position) >= 0,
    o = r && mt(e) ? Po(e) : e;
  return pr(o)
    ? t.filter(function (n) {
        return pr(n) && Fl(n, o) && Ot(n) !== "body";
      })
    : [];
}
function _m(e, t, r, o) {
  var n = t === "clippingParents" ? Um(e) : [].concat(t),
    i = [].concat(n, [r]),
    a = i[0],
    s = i.reduce(
      function (l, c) {
        var u = rs(e, c, o);
        return (
          (l.top = cr(u.top, l.top)),
          (l.right = nn(u.right, l.right)),
          (l.bottom = nn(u.bottom, l.bottom)),
          (l.left = cr(u.left, l.left)),
          l
        );
      },
      rs(e, a, o),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Ul(e) {
  var t = e.reference,
    r = e.element,
    o = e.placement,
    n = o ? At(o) : null,
    i = o ? Nr(o) : null,
    a = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l;
  switch (n) {
    case ot:
      l = { x: a, y: t.y - r.height };
      break;
    case gt:
      l = { x: a, y: t.y + t.height };
      break;
    case ht:
      l = { x: t.x + t.width, y: s };
      break;
    case nt:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = n ? Ki(n) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Or:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case yo:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function vo(e, t) {
  t === void 0 && (t = {});
  var r = t,
    o = r.placement,
    n = o === void 0 ? e.placement : o,
    i = r.strategy,
    a = i === void 0 ? e.strategy : i,
    s = r.boundary,
    l = s === void 0 ? dm : s,
    c = r.rootBoundary,
    u = c === void 0 ? Nl : c,
    h = r.elementContext,
    y = h === void 0 ? qr : h,
    d = r.altBoundary,
    f = d === void 0 ? !1 : d,
    g = r.padding,
    b = g === void 0 ? 0 : g,
    x = Wl(typeof b != "number" ? b : Hl(b, $o)),
    k = y === qr ? pm : qr,
    S = e.rects.popper,
    v = e.elements[f ? k : y],
    C = _m(pr(v) ? v : v.contextElement || Jt(e.elements.popper), l, u, a),
    R = Br(e.elements.reference),
    P = Ul({ reference: R, element: S, placement: n }),
    I = pi(Object.assign({}, S, P)),
    A = y === qr ? I : R,
    O = {
      top: C.top - A.top + x.top,
      bottom: A.bottom - C.bottom + x.bottom,
      left: C.left - A.left + x.left,
      right: A.right - C.right + x.right,
    },
    L = e.modifiersData.offset;
  if (y === qr && L) {
    var p = L[n];
    Object.keys(O).forEach(function ($) {
      var T = [ht, gt].indexOf($) >= 0 ? 1 : -1,
        M = [ot, gt].indexOf($) >= 0 ? "y" : "x";
      O[$] += p[M] * T;
    });
  }
  return O;
}
function Gm(e, t) {
  t === void 0 && (t = {});
  var r = t,
    o = r.placement,
    n = r.boundary,
    i = r.rootBoundary,
    a = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? zl : l,
    u = Nr(o),
    h = u
      ? s
        ? Qa
        : Qa.filter(function (f) {
            return Nr(f) === u;
          })
      : $o,
    y = h.filter(function (f) {
      return c.indexOf(f) >= 0;
    });
  y.length === 0 && (y = h);
  var d = y.reduce(function (f, g) {
    return (
      (f[g] = vo(e, { placement: g, boundary: n, rootBoundary: i, padding: a })[
        At(g)
      ]),
      f
    );
  }, {});
  return Object.keys(d).sort(function (f, g) {
    return d[f] - d[g];
  });
}
function Km(e) {
  if (At(e) === Ui) return [];
  var t = Yo(e);
  return [ts(e), t, ts(t)];
}
function qm(e) {
  var t = e.state,
    r = e.options,
    o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (
      var n = r.mainAxis,
        i = n === void 0 ? !0 : n,
        a = r.altAxis,
        s = a === void 0 ? !0 : a,
        l = r.fallbackPlacements,
        c = r.padding,
        u = r.boundary,
        h = r.rootBoundary,
        y = r.altBoundary,
        d = r.flipVariations,
        f = d === void 0 ? !0 : d,
        g = r.allowedAutoPlacements,
        b = t.options.placement,
        x = At(b),
        k = x === b,
        S = l || (k || !f ? [Yo(b)] : Km(b)),
        v = [b].concat(S).reduce(function (ye, J) {
          return ye.concat(
            At(J) === Ui
              ? Gm(t, {
                  placement: J,
                  boundary: u,
                  rootBoundary: h,
                  padding: c,
                  flipVariations: f,
                  allowedAutoPlacements: g,
                })
              : J,
          );
        }, []),
        C = t.rects.reference,
        R = t.rects.popper,
        P = new Map(),
        I = !0,
        A = v[0],
        O = 0;
      O < v.length;
      O++
    ) {
      var L = v[O],
        p = At(L),
        $ = Nr(L) === Or,
        T = [ot, gt].indexOf(p) >= 0,
        M = T ? "width" : "height",
        E = vo(t, {
          placement: L,
          boundary: u,
          rootBoundary: h,
          altBoundary: y,
          padding: c,
        }),
        F = T ? ($ ? ht : nt) : $ ? gt : ot;
      C[M] > R[M] && (F = Yo(F));
      var B = Yo(F),
        j = [];
      if (
        (i && j.push(E[p] <= 0),
        s && j.push(E[F] <= 0, E[B] <= 0),
        j.every(function (ye) {
          return ye;
        }))
      ) {
        (A = L), (I = !1);
        break;
      }
      P.set(L, j);
    }
    if (I)
      for (
        var G = f ? 3 : 1,
          H = function (J) {
            var _ = v.find(function (te) {
              var me = P.get(te);
              if (me)
                return me.slice(0, J).every(function (ve) {
                  return ve;
                });
            });
            if (_) return (A = _), "break";
          },
          X = G;
        X > 0;
        X--
      ) {
        var ee = H(X);
        if (ee === "break") break;
      }
    t.placement !== A &&
      ((t.modifiersData[o]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const Ym = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: qm,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function os(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function ns(e) {
  return [ot, ht, gt, nt].some(function (t) {
    return e[t] >= 0;
  });
}
function Xm(e) {
  var t = e.state,
    r = e.name,
    o = t.rects.reference,
    n = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = vo(t, { elementContext: "reference" }),
    s = vo(t, { altBoundary: !0 }),
    l = os(a, o),
    c = os(s, n, i),
    u = ns(l),
    h = ns(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: h,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": h,
    }));
}
const Jm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Xm,
};
function Qm(e, t, r) {
  var o = At(e),
    n = [nt, ot].indexOf(o) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * n),
    [nt, ht].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function Zm(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.offset,
    i = n === void 0 ? [0, 0] : n,
    a = zl.reduce(function (u, h) {
      return (u[h] = Qm(h, t.rects, i)), u;
    }, {}),
    s = a[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[o] = a);
}
const eg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Zm,
};
function tg(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Ul({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const rg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tg,
  data: {},
};
function og(e) {
  return e === "x" ? "y" : "x";
}
function ng(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.mainAxis,
    i = n === void 0 ? !0 : n,
    a = r.altAxis,
    s = a === void 0 ? !1 : a,
    l = r.boundary,
    c = r.rootBoundary,
    u = r.altBoundary,
    h = r.padding,
    y = r.tether,
    d = y === void 0 ? !0 : y,
    f = r.tetherOffset,
    g = f === void 0 ? 0 : f,
    b = vo(t, { boundary: l, rootBoundary: c, padding: h, altBoundary: u }),
    x = At(t.placement),
    k = Nr(t.placement),
    S = !k,
    v = Ki(x),
    C = og(v),
    R = t.modifiersData.popperOffsets,
    P = t.rects.reference,
    I = t.rects.popper,
    A =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    O =
      typeof A == "number"
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    p = { x: 0, y: 0 };
  if (R) {
    if (i) {
      var $,
        T = v === "y" ? ot : nt,
        M = v === "y" ? gt : ht,
        E = v === "y" ? "height" : "width",
        F = R[v],
        B = F + b[T],
        j = F - b[M],
        G = d ? -I[E] / 2 : 0,
        H = k === Or ? P[E] : I[E],
        X = k === Or ? -I[E] : -P[E],
        ee = t.elements.arrow,
        ye = d && ee ? Gi(ee) : { width: 0, height: 0 },
        J = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Dl(),
        _ = J[T],
        te = J[M],
        me = ao(0, P[E], ye[E]),
        ve = S ? P[E] / 2 - G - me - _ - O.mainAxis : H - me - _ - O.mainAxis,
        Z = S ? -P[E] / 2 + G + me + te + O.mainAxis : X + me + te + O.mainAxis,
        se = t.elements.arrow && Po(t.elements.arrow),
        ne = se ? (v === "y" ? se.clientTop || 0 : se.clientLeft || 0) : 0,
        oe = ($ = L == null ? void 0 : L[v]) != null ? $ : 0,
        Y = F + ve - oe - ne,
        le = F + Z - oe,
        Ae = ao(d ? nn(B, Y) : B, F, d ? cr(j, le) : j);
      (R[v] = Ae), (p[v] = Ae - F);
    }
    if (s) {
      var Se,
        Pe = v === "x" ? ot : nt,
        Ee = v === "x" ? gt : ht,
        Me = R[C],
        Re = C === "y" ? "height" : "width",
        re = Me + b[Pe],
        Ve = Me - b[Ee],
        Ie = [ot, nt].indexOf(x) !== -1,
        W = (Se = L == null ? void 0 : L[C]) != null ? Se : 0,
        V = Ie ? re : Me - P[Re] - I[Re] - W + O.altAxis,
        Q = Ie ? Me + P[Re] + I[Re] - W - O.altAxis : Ve,
        he = d && Ie ? Pm(V, Me, Q) : ao(d ? V : re, Me, d ? Q : Ve);
      (R[C] = he), (p[C] = he - Me);
    }
    t.modifiersData[o] = p;
  }
}
const ig = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ng,
  requiresIfExists: ["offset"],
};
function ag(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function sg(e) {
  return e === ct(e) || !mt(e) ? qi(e) : ag(e);
}
function lg(e) {
  var t = e.getBoundingClientRect(),
    r = Lr(t.width) / e.offsetWidth || 1,
    o = Lr(t.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function cg(e, t, r) {
  r === void 0 && (r = !1);
  var o = mt(t),
    n = mt(t) && lg(t),
    i = Jt(t),
    a = Br(e, n, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (o || (!o && !r)) &&
      ((Ot(t) !== "body" || Xi(i)) && (s = sg(t)),
      mt(t)
        ? ((l = Br(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Yi(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function ug(e) {
  var t = new Map(),
    r = new Set(),
    o = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function n(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && n(l);
      }
    }),
      o.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || n(i);
    }),
    o
  );
}
function dg(e) {
  var t = ug(e);
  return Cm.reduce(function (r, o) {
    return r.concat(
      t.filter(function (n) {
        return n.phase === o;
      }),
    );
  }, []);
}
function pg(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function fg(e) {
  var t = e.reduce(function (r, o) {
    var n = r[o.name];
    return (
      (r[o.name] = n
        ? Object.assign({}, n, o, {
            options: Object.assign({}, n.options, o.options),
            data: Object.assign({}, n.data, o.data),
          })
        : o),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var is = { placement: "bottom", modifiers: [], strategy: "absolute" };
function as() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function mg(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    o = r === void 0 ? [] : r,
    n = t.defaultOptions,
    i = n === void 0 ? is : n;
  return function (s, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, is, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      h = [],
      y = !1,
      d = {
        state: u,
        setOptions: function (x) {
          var k = typeof x == "function" ? x(u.options) : x;
          g(),
            (u.options = Object.assign({}, i, u.options, k)),
            (u.scrollParents = {
              reference: pr(s)
                ? so(s)
                : s.contextElement
                  ? so(s.contextElement)
                  : [],
              popper: so(l),
            });
          var S = dg(fg([].concat(o, u.options.modifiers)));
          return (
            (u.orderedModifiers = S.filter(function (v) {
              return v.enabled;
            })),
            f(),
            d.update()
          );
        },
        forceUpdate: function () {
          if (!y) {
            var x = u.elements,
              k = x.reference,
              S = x.popper;
            if (as(k, S)) {
              (u.rects = {
                reference: cg(k, Po(S), u.options.strategy === "fixed"),
                popper: Gi(S),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (O) {
                  return (u.modifiersData[O.name] = Object.assign({}, O.data));
                });
              for (var v = 0; v < u.orderedModifiers.length; v++) {
                if (u.reset === !0) {
                  (u.reset = !1), (v = -1);
                  continue;
                }
                var C = u.orderedModifiers[v],
                  R = C.fn,
                  P = C.options,
                  I = P === void 0 ? {} : P,
                  A = C.name;
                typeof R == "function" &&
                  (u = R({ state: u, options: I, name: A, instance: d }) || u);
              }
            }
          }
        },
        update: pg(function () {
          return new Promise(function (b) {
            d.forceUpdate(), b(u);
          });
        }),
        destroy: function () {
          g(), (y = !0);
        },
      };
    if (!as(s, l)) return d;
    d.setOptions(c).then(function (b) {
      !y && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function f() {
      u.orderedModifiers.forEach(function (b) {
        var x = b.name,
          k = b.options,
          S = k === void 0 ? {} : k,
          v = b.effect;
        if (typeof v == "function") {
          var C = v({ state: u, name: x, instance: d, options: S }),
            R = function () {};
          h.push(C || R);
        }
      });
    }
    function g() {
      h.forEach(function (b) {
        return b();
      }),
        (h = []);
    }
    return d;
  };
}
var gg = [jm, rg, Nm, Rm, eg, Ym, ig, Am, Jm],
  hg = mg({ defaultModifiers: gg });
function Tt(e) {
  var h;
  const {
      elementType: t,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: n = !1,
      ...i
    } = e,
    a = n ? {} : Ol(r, o),
    { props: s, internalRef: l } = Ll({ ...i, externalSlotProps: a }),
    c = He(
      l,
      a == null ? void 0 : a.ref,
      (h = e.additionalProps) == null ? void 0 : h.ref,
    );
  return Al(t, { ...s, ref: c }, o);
}
function Qt(e) {
  var t;
  return parseInt(m.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
function yg(e) {
  return typeof e == "function" ? e() : e;
}
const _l = m.forwardRef(function (t, r) {
  const { children: o, container: n, disablePortal: i = !1 } = t,
    [a, s] = m.useState(null),
    l = He(m.isValidElement(o) ? Qt(o) : null, r);
  if (
    (at(() => {
      i || s(yg(n) || document.body);
    }, [n, i]),
    at(() => {
      if (a && !i)
        return (
          Va(r, a),
          () => {
            Va(r, null);
          }
        );
    }, [r, a, i]),
    i)
  ) {
    if (m.isValidElement(o)) {
      const c = { ref: l };
      return m.cloneElement(o, c);
    }
    return o;
  }
  return a && uc.createPortal(o, a);
});
function vg(e) {
  return ce("MuiPopper", e);
}
de("MuiPopper", ["root"]);
function bg(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function fi(e) {
  return typeof e == "function" ? e() : e;
}
function xg(e) {
  return e.nodeType !== void 0;
}
const Sg = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, vg, t);
  },
  Cg = {},
  wg = m.forwardRef(function (t, r) {
    const {
        anchorEl: o,
        children: n,
        direction: i,
        disablePortal: a,
        modifiers: s,
        open: l,
        placement: c,
        popperOptions: u,
        popperRef: h,
        slotProps: y = {},
        slots: d = {},
        TransitionProps: f,
        ownerState: g,
        ...b
      } = t,
      x = m.useRef(null),
      k = He(x, r),
      S = m.useRef(null),
      v = He(S, h),
      C = m.useRef(v);
    at(() => {
      C.current = v;
    }, [v]),
      m.useImperativeHandle(h, () => S.current, []);
    const R = bg(c, i),
      [P, I] = m.useState(R),
      [A, O] = m.useState(fi(o));
    m.useEffect(() => {
      S.current && S.current.forceUpdate();
    }),
      m.useEffect(() => {
        o && O(fi(o));
      }, [o]),
      at(() => {
        if (!A || !l) return;
        const M = (B) => {
          I(B.placement);
        };
        let E = [
          { name: "preventOverflow", options: { altBoundary: a } },
          { name: "flip", options: { altBoundary: a } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: B }) => {
              M(B);
            },
          },
        ];
        s != null && (E = E.concat(s)),
          u && u.modifiers != null && (E = E.concat(u.modifiers));
        const F = hg(A, x.current, { placement: R, ...u, modifiers: E });
        return (
          C.current(F),
          () => {
            F.destroy(), C.current(null);
          }
        );
      }, [A, a, s, l, u, R]);
    const L = { placement: P };
    f !== null && (L.TransitionProps = f);
    const p = Sg(t),
      $ = d.root ?? "div",
      T = Tt({
        elementType: $,
        externalSlotProps: y.root,
        externalForwardedProps: b,
        additionalProps: { role: "tooltip", ref: k },
        ownerState: t,
        className: p.root,
      });
    return w.jsx($, { ...T, children: typeof n == "function" ? n(L) : n });
  }),
  kg = m.forwardRef(function (t, r) {
    const {
        anchorEl: o,
        children: n,
        container: i,
        direction: a = "ltr",
        disablePortal: s = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: h = "bottom",
        popperOptions: y = Cg,
        popperRef: d,
        style: f,
        transition: g = !1,
        slotProps: b = {},
        slots: x = {},
        ...k
      } = t,
      [S, v] = m.useState(!0),
      C = () => {
        v(!1);
      },
      R = () => {
        v(!0);
      };
    if (!l && !u && (!g || S)) return null;
    let P;
    if (i) P = i;
    else if (o) {
      const O = fi(o);
      P = O && xg(O) ? Ye(O).body : Ye(null).body;
    }
    const I = !u && l && (!g || S) ? "none" : void 0,
      A = g ? { in: u, onEnter: C, onExited: R } : void 0;
    return w.jsx(_l, {
      disablePortal: s,
      container: P,
      children: w.jsx(wg, {
        anchorEl: o,
        direction: a,
        disablePortal: s,
        modifiers: c,
        ref: r,
        open: g ? !S : u,
        placement: h,
        popperOptions: y,
        popperRef: d,
        slotProps: b,
        slots: x,
        ...k,
        style: { position: "fixed", top: 0, left: 0, display: I, ...f },
        TransitionProps: A,
        children: n,
      }),
    });
  }),
  Rg = D(kg, { name: "MuiPopper", slot: "Root" })({}),
  Gl = m.forwardRef(function (t, r) {
    const o = Dr(),
      n = pe({ props: t, name: "MuiPopper" }),
      {
        anchorEl: i,
        component: a,
        components: s,
        componentsProps: l,
        container: c,
        disablePortal: u,
        keepMounted: h,
        modifiers: y,
        open: d,
        placement: f,
        popperOptions: g,
        popperRef: b,
        transition: x,
        slots: k,
        slotProps: S,
        ...v
      } = n,
      C = (k == null ? void 0 : k.root) ?? (s == null ? void 0 : s.Root),
      R = {
        anchorEl: i,
        container: c,
        disablePortal: u,
        keepMounted: h,
        modifiers: y,
        open: d,
        placement: f,
        popperOptions: g,
        popperRef: b,
        transition: x,
        ...v,
      };
    return w.jsx(Rg, {
      as: a,
      direction: o ? "rtl" : "ltr",
      slots: { root: C },
      slotProps: S ?? l,
      ...R,
      ref: r,
    });
  }),
  Tg = Fe(
    w.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
  );
function $g(e) {
  return ce("MuiChip", e);
}
const $e = de("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  Pg = (e) => {
    const {
        classes: t,
        disabled: r,
        size: o,
        color: n,
        iconColor: i,
        onDelete: a,
        clickable: s,
        variant: l,
      } = e,
      c = {
        root: [
          "root",
          l,
          r && "disabled",
          `size${z(o)}`,
          `color${z(n)}`,
          s && "clickable",
          s && `clickableColor${z(n)}`,
          a && "deletable",
          a && `deletableColor${z(n)}`,
          `${l}${z(n)}`,
        ],
        label: ["label", `label${z(o)}`],
        avatar: ["avatar", `avatar${z(o)}`, `avatarColor${z(n)}`],
        icon: ["icon", `icon${z(o)}`, `iconColor${z(i)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${z(o)}`,
          `deleteIconColor${z(n)}`,
          `deleteIcon${z(l)}Color${z(n)}`,
        ],
      };
    return ue(c, $g, t);
  },
  Eg = D("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        {
          color: o,
          iconColor: n,
          clickable: i,
          onDelete: a,
          size: s,
          variant: l,
        } = r;
      return [
        { [`& .${$e.avatar}`]: t.avatar },
        { [`& .${$e.avatar}`]: t[`avatar${z(s)}`] },
        { [`& .${$e.avatar}`]: t[`avatarColor${z(o)}`] },
        { [`& .${$e.icon}`]: t.icon },
        { [`& .${$e.icon}`]: t[`icon${z(s)}`] },
        { [`& .${$e.icon}`]: t[`iconColor${z(n)}`] },
        { [`& .${$e.deleteIcon}`]: t.deleteIcon },
        { [`& .${$e.deleteIcon}`]: t[`deleteIcon${z(s)}`] },
        { [`& .${$e.deleteIcon}`]: t[`deleteIconColor${z(o)}`] },
        { [`& .${$e.deleteIcon}`]: t[`deleteIcon${z(l)}Color${z(o)}`] },
        t.root,
        t[`size${z(s)}`],
        t[`color${z(o)}`],
        i && t.clickable,
        i && o !== "default" && t[`clickableColor${z(o)}`],
        a && t.deletable,
        a && o !== "default" && t[`deletableColor${z(o)}`],
        t[l],
        t[`${l}${z(o)}`],
      ];
    },
  })(
    ie(({ theme: e }) => {
      const t =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return {
        maxWidth: "100%",
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        lineHeight: 1.5,
        color: (e.vars || e).palette.text.primary,
        backgroundColor: (e.vars || e).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: e.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${$e.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
          pointerEvents: "none",
        },
        [`& .${$e.avatar}`]: {
          marginLeft: 5,
          marginRight: -6,
          width: 24,
          height: 24,
          color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
          fontSize: e.typography.pxToRem(12),
        },
        [`& .${$e.avatarColorPrimary}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark,
        },
        [`& .${$e.avatarColorSecondary}`]: {
          color: (e.vars || e).palette.secondary.contrastText,
          backgroundColor: (e.vars || e).palette.secondary.dark,
        },
        [`& .${$e.avatarSmall}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10),
        },
        [`& .${$e.icon}`]: { marginLeft: 5, marginRight: -6 },
        [`& .${$e.deleteIcon}`]: {
          WebkitTapHighlightColor: "transparent",
          color: e.alpha((e.vars || e).palette.text.primary, 0.26),
          fontSize: 22,
          cursor: "pointer",
          margin: "0 5px 0 -6px",
          "&:hover": {
            color: e.alpha((e.vars || e).palette.text.primary, 0.4),
          },
        },
        variants: [
          {
            props: { size: "small" },
            style: {
              height: 24,
              [`& .${$e.icon}`]: {
                fontSize: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              [`& .${$e.deleteIcon}`]: {
                fontSize: 16,
                marginRight: 4,
                marginLeft: -4,
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(De(["contrastText"]))
            .map(([r]) => ({
              props: { color: r },
              style: {
                backgroundColor: (e.vars || e).palette[r].main,
                color: (e.vars || e).palette[r].contrastText,
                [`& .${$e.deleteIcon}`]: {
                  color: e.alpha((e.vars || e).palette[r].contrastText, 0.7),
                  "&:hover, &:active": {
                    color: (e.vars || e).palette[r].contrastText,
                  },
                },
              },
            })),
          {
            props: (r) => r.iconColor === r.color,
            style: {
              [`& .${$e.icon}`]: {
                color: e.vars ? e.vars.palette.Chip.defaultIconColor : t,
              },
            },
          },
          {
            props: (r) => r.iconColor === r.color && r.color !== "default",
            style: { [`& .${$e.icon}`]: { color: "inherit" } },
          },
          {
            props: { onDelete: !0 },
            style: {
              [`&.${$e.focusVisible}`]: {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
                ),
              },
            },
          },
          ...Object.entries(e.palette)
            .filter(De(["dark"]))
            .map(([r]) => ({
              props: { color: r, onDelete: !0 },
              style: {
                [`&.${$e.focusVisible}`]: {
                  background: (e.vars || e).palette[r].dark,
                },
              },
            })),
          {
            props: { clickable: !0 },
            style: {
              userSelect: "none",
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
                ),
              },
              [`&.${$e.focusVisible}`]: {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.selected,
                  `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
                ),
              },
              "&:active": { boxShadow: (e.vars || e).shadows[1] },
            },
          },
          ...Object.entries(e.palette)
            .filter(De(["dark"]))
            .map(([r]) => ({
              props: { color: r, clickable: !0 },
              style: {
                [`&:hover, &.${$e.focusVisible}`]: {
                  backgroundColor: (e.vars || e).palette[r].dark,
                },
              },
            })),
          {
            props: { variant: "outlined" },
            style: {
              backgroundColor: "transparent",
              border: e.vars
                ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
              [`&.${$e.clickable}:hover`]: {
                backgroundColor: (e.vars || e).palette.action.hover,
              },
              [`&.${$e.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette.action.focus,
              },
              [`& .${$e.avatar}`]: { marginLeft: 4 },
              [`& .${$e.avatarSmall}`]: { marginLeft: 2 },
              [`& .${$e.icon}`]: { marginLeft: 4 },
              [`& .${$e.iconSmall}`]: { marginLeft: 2 },
              [`& .${$e.deleteIcon}`]: { marginRight: 5 },
              [`& .${$e.deleteIconSmall}`]: { marginRight: 3 },
            },
          },
          ...Object.entries(e.palette)
            .filter(De())
            .map(([r]) => ({
              props: { variant: "outlined", color: r },
              style: {
                color: (e.vars || e).palette[r].main,
                border: `1px solid ${e.alpha((e.vars || e).palette[r].main, 0.7)}`,
                [`&.${$e.clickable}:hover`]: {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[r].main,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                },
                [`&.${$e.focusVisible}`]: {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[r].main,
                    (e.vars || e).palette.action.focusOpacity,
                  ),
                },
                [`& .${$e.deleteIcon}`]: {
                  color: e.alpha((e.vars || e).palette[r].main, 0.7),
                  "&:hover, &:active": { color: (e.vars || e).palette[r].main },
                },
              },
            })),
        ],
      };
    }),
  ),
  Ig = D("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        { size: o } = r;
      return [t.label, t[`label${z(o)}`]];
    },
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: { variant: "outlined" },
        style: { paddingLeft: 11, paddingRight: 11 },
      },
      { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } },
      {
        props: { size: "small", variant: "outlined" },
        style: { paddingLeft: 7, paddingRight: 7 },
      },
    ],
  });
function ss(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const g0 = m.forwardRef(function (t, r) {
  const o = pe({ props: t, name: "MuiChip" }),
    {
      avatar: n,
      className: i,
      clickable: a,
      color: s = "default",
      component: l,
      deleteIcon: c,
      disabled: u = !1,
      icon: h,
      label: y,
      onClick: d,
      onDelete: f,
      onKeyDown: g,
      onKeyUp: b,
      size: x = "medium",
      variant: k = "filled",
      tabIndex: S,
      skipFocusWhenDisabled: v = !1,
      slots: C = {},
      slotProps: R = {},
      ...P
    } = o,
    I = m.useRef(null),
    A = He(I, r),
    O = (_) => {
      _.stopPropagation(), f(_);
    },
    L = (_) => {
      _.currentTarget === _.target && ss(_) && _.preventDefault(), g && g(_);
    },
    p = (_) => {
      _.currentTarget === _.target && f && ss(_) && f(_), b && b(_);
    },
    $ = a !== !1 && d ? !0 : a,
    T = $ || f ? dr : l || "div",
    M = {
      ...o,
      component: T,
      disabled: u,
      size: x,
      color: s,
      iconColor: (m.isValidElement(h) && h.props.color) || s,
      onDelete: !!f,
      clickable: $,
      variant: k,
    },
    E = Pg(M),
    F =
      T === dr
        ? {
            component: l || "div",
            focusVisibleClassName: E.focusVisible,
            ...(f && { disableRipple: !0 }),
          }
        : {};
  let B = null;
  f &&
    (B =
      c && m.isValidElement(c)
        ? m.cloneElement(c, {
            className: U(c.props.className, E.deleteIcon),
            onClick: O,
          })
        : w.jsx(Tg, { className: E.deleteIcon, onClick: O }));
  let j = null;
  n &&
    m.isValidElement(n) &&
    (j = m.cloneElement(n, { className: U(E.avatar, n.props.className) }));
  let G = null;
  h &&
    m.isValidElement(h) &&
    (G = m.cloneElement(h, { className: U(E.icon, h.props.className) }));
  const H = { slots: C, slotProps: R },
    [X, ee] = fe("root", {
      elementType: Eg,
      externalForwardedProps: { ...H, ...P },
      ownerState: M,
      shouldForwardComponentProp: !0,
      ref: A,
      className: U(E.root, i),
      additionalProps: {
        disabled: $ && u ? !0 : void 0,
        tabIndex: v && u ? -1 : S,
        ...F,
      },
      getSlotProps: (_) => ({
        ..._,
        onClick: (te) => {
          var me;
          (me = _.onClick) == null || me.call(_, te), d == null || d(te);
        },
        onKeyDown: (te) => {
          var me;
          (me = _.onKeyDown) == null || me.call(_, te), L(te);
        },
        onKeyUp: (te) => {
          var me;
          (me = _.onKeyUp) == null || me.call(_, te), p(te);
        },
      }),
    }),
    [ye, J] = fe("label", {
      elementType: Ig,
      externalForwardedProps: H,
      ownerState: M,
      className: E.label,
    });
  return w.jsxs(X, {
    as: T,
    ...ee,
    children: [j || G, w.jsx(ye, { ...J, children: y }), B],
  });
});
function Lo(e) {
  return parseInt(e, 10) || 0;
}
const Mg = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function Ag(e) {
  for (const t in e) return !1;
  return !0;
}
function ls(e) {
  return Ag(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const Og = m.forwardRef(function (t, r) {
  const {
      onChange: o,
      maxRows: n,
      minRows: i = 1,
      style: a,
      value: s,
      ...l
    } = t,
    { current: c } = m.useRef(s != null),
    u = m.useRef(null),
    h = He(r, u),
    y = m.useRef(null),
    d = m.useRef(null),
    f = m.useCallback(() => {
      const S = u.current,
        v = d.current;
      if (!S || !v) return;
      const R = Ct(S).getComputedStyle(S);
      if (R.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      (v.style.width = R.width),
        (v.value = S.value || t.placeholder || "x"),
        v.value.slice(-1) ===
          `
` && (v.value += " ");
      const P = R.boxSizing,
        I = Lo(R.paddingBottom) + Lo(R.paddingTop),
        A = Lo(R.borderBottomWidth) + Lo(R.borderTopWidth),
        O = v.scrollHeight;
      v.value = "x";
      const L = v.scrollHeight;
      let p = O;
      i && (p = Math.max(Number(i) * L, p)),
        n && (p = Math.min(Number(n) * L, p)),
        (p = Math.max(p, L));
      const $ = p + (P === "border-box" ? I + A : 0),
        T = Math.abs(p - O) <= 1;
      return { outerHeightStyle: $, overflowing: T };
    }, [n, i, t.placeholder]),
    g = tt(() => {
      const S = u.current,
        v = f();
      if (!S || !v || ls(v)) return !1;
      const C = v.outerHeightStyle;
      return y.current != null && y.current !== C;
    }),
    b = m.useCallback(() => {
      const S = u.current,
        v = f();
      if (!S || !v || ls(v)) return;
      const C = v.outerHeightStyle;
      y.current !== C && ((y.current = C), (S.style.height = `${C}px`)),
        (S.style.overflow = v.overflowing ? "hidden" : "");
    }, [f]),
    x = m.useRef(-1);
  at(() => {
    const S = Di(b),
      v = u == null ? void 0 : u.current;
    if (!v) return;
    const C = Ct(v);
    C.addEventListener("resize", S);
    let R;
    return (
      typeof ResizeObserver < "u" &&
        ((R = new ResizeObserver(() => {
          g() &&
            (R.unobserve(v),
            cancelAnimationFrame(x.current),
            b(),
            (x.current = requestAnimationFrame(() => {
              R.observe(v);
            })));
        })),
        R.observe(v)),
      () => {
        S.clear(),
          cancelAnimationFrame(x.current),
          C.removeEventListener("resize", S),
          R && R.disconnect();
      }
    );
  }, [f, b, g]),
    at(() => {
      b();
    });
  const k = (S) => {
    c || b();
    const v = S.target,
      C = v.value.length,
      R = v.value.endsWith(`
`),
      P = v.selectionStart === C;
    R && P && v.setSelectionRange(C, C), o && o(S);
  };
  return w.jsxs(m.Fragment, {
    children: [
      w.jsx("textarea", {
        value: s,
        onChange: k,
        ref: h,
        rows: i,
        style: a,
        ...l,
      }),
      w.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: d,
        tabIndex: -1,
        style: { ...Mg.shadow, ...a, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Vr({ props: e, states: t, muiFormControl: r }) {
  return t.reduce(
    (o, n) => ((o[n] = e[n]), r && typeof e[n] > "u" && (o[n] = r[n]), o),
    {},
  );
}
const $n = m.createContext(void 0);
function Zt() {
  return m.useContext($n);
}
function cs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function an(e, t = !1) {
  return (
    e &&
    ((cs(e.value) && e.value !== "") ||
      (t && cs(e.defaultValue) && e.defaultValue !== ""))
  );
}
function Lg(e) {
  return e.startAdornment;
}
function Bg(e) {
  return ce("MuiInputBase", e);
}
const zr = de("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var us;
const Pn = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.formControl && t.formControl,
      r.startAdornment && t.adornedStart,
      r.endAdornment && t.adornedEnd,
      r.error && t.error,
      r.size === "small" && t.sizeSmall,
      r.multiline && t.multiline,
      r.color && t[`color${z(r.color)}`],
      r.fullWidth && t.fullWidth,
      r.hiddenLabel && t.hiddenLabel,
    ];
  },
  En = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.input,
      r.size === "small" && t.inputSizeSmall,
      r.multiline && t.inputMultiline,
      r.type === "search" && t.inputTypeSearch,
      r.startAdornment && t.inputAdornedStart,
      r.endAdornment && t.inputAdornedEnd,
      r.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  Ng = (e) => {
    const {
        classes: t,
        color: r,
        disabled: o,
        error: n,
        endAdornment: i,
        focused: a,
        formControl: s,
        fullWidth: l,
        hiddenLabel: c,
        multiline: u,
        readOnly: h,
        size: y,
        startAdornment: d,
        type: f,
      } = e,
      g = {
        root: [
          "root",
          `color${z(r)}`,
          o && "disabled",
          n && "error",
          l && "fullWidth",
          a && "focused",
          s && "formControl",
          y && y !== "medium" && `size${z(y)}`,
          u && "multiline",
          d && "adornedStart",
          i && "adornedEnd",
          c && "hiddenLabel",
          h && "readOnly",
        ],
        input: [
          "input",
          o && "disabled",
          f === "search" && "inputTypeSearch",
          u && "inputMultiline",
          y === "small" && "inputSizeSmall",
          c && "inputHiddenLabel",
          d && "inputAdornedStart",
          i && "inputAdornedEnd",
          h && "readOnly",
        ],
      };
    return ue(g, Bg, t);
  },
  In = D("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Pn })(
    ie(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${zr.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: t, size: r }) => t.multiline && r === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: "100%" } },
      ],
    })),
  ),
  Mn = D("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: En,
  })(
    ie(({ theme: e }) => {
      const t = e.palette.mode === "light",
        r = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        o = { opacity: "0 !important" },
        n = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${zr.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": n,
          "&:focus::-moz-placeholder": n,
          "&:focus::-ms-input-placeholder": n,
        },
        [`&.${zr.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    }),
  ),
  ds = Fi({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  Ji = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": n,
        autoComplete: i,
        autoFocus: a,
        className: s,
        color: l,
        components: c = {},
        componentsProps: u = {},
        defaultValue: h,
        disabled: y,
        disableInjectingGlobalStyles: d,
        endAdornment: f,
        error: g,
        fullWidth: b = !1,
        id: x,
        inputComponent: k = "input",
        inputProps: S = {},
        inputRef: v,
        margin: C,
        maxRows: R,
        minRows: P,
        multiline: I = !1,
        name: A,
        onBlur: O,
        onChange: L,
        onClick: p,
        onFocus: $,
        onKeyDown: T,
        onKeyUp: M,
        placeholder: E,
        readOnly: F,
        renderSuffix: B,
        rows: j,
        size: G,
        slotProps: H = {},
        slots: X = {},
        startAdornment: ee,
        type: ye = "text",
        value: J,
        ..._
      } = o,
      te = S.value != null ? S.value : J,
      { current: me } = m.useRef(te != null),
      ve = m.useRef(),
      Z = m.useCallback((K) => {}, []),
      se = He(ve, v, S.ref, Z),
      [ne, oe] = m.useState(!1),
      Y = Zt(),
      le = Vr({
        props: o,
        muiFormControl: Y,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (le.focused = Y ? Y.focused : ne),
      m.useEffect(() => {
        !Y && y && ne && (oe(!1), O && O());
      }, [Y, y, ne, O]);
    const Ae = Y && Y.onFilled,
      Se = Y && Y.onEmpty,
      Pe = m.useCallback(
        (K) => {
          an(K) ? Ae && Ae() : Se && Se();
        },
        [Ae, Se],
      );
    at(() => {
      me && Pe({ value: te });
    }, [te, Pe, me]);
    const Ee = (K) => {
        $ && $(K),
          S.onFocus && S.onFocus(K),
          Y && Y.onFocus ? Y.onFocus(K) : oe(!0);
      },
      Me = (K) => {
        O && O(K),
          S.onBlur && S.onBlur(K),
          Y && Y.onBlur ? Y.onBlur(K) : oe(!1);
      },
      Re = (K, ...ke) => {
        if (!me) {
          const be = K.target || ve.current;
          if (be == null) throw new Error(Ft(1));
          Pe({ value: be.value });
        }
        S.onChange && S.onChange(K, ...ke), L && L(K, ...ke);
      };
    m.useEffect(() => {
      Pe(ve.current);
    }, []);
    const re = (K) => {
      ve.current && K.currentTarget === K.target && ve.current.focus(),
        p && p(K);
    };
    let Ve = k,
      Ie = S;
    I &&
      Ve === "input" &&
      (j
        ? (Ie = { type: void 0, minRows: j, maxRows: j, ...Ie })
        : (Ie = { type: void 0, maxRows: R, minRows: P, ...Ie }),
      (Ve = Og));
    const W = (K) => {
      Pe(
        K.animationName === "mui-auto-fill-cancel"
          ? ve.current
          : { value: "x" },
      );
    };
    m.useEffect(() => {
      Y && Y.setAdornedStart(!!ee);
    }, [Y, ee]);
    const V = {
        ...o,
        color: le.color || "primary",
        disabled: le.disabled,
        endAdornment: f,
        error: le.error,
        focused: le.focused,
        formControl: Y,
        fullWidth: b,
        hiddenLabel: le.hiddenLabel,
        multiline: I,
        size: le.size,
        startAdornment: ee,
        type: ye,
      },
      Q = Ng(V),
      he = X.root || c.Root || In,
      xe = H.root || u.root || {},
      q = X.input || c.Input || Mn;
    return (
      (Ie = { ...Ie, ...(H.input ?? u.input) }),
      w.jsxs(m.Fragment, {
        children: [
          !d && typeof ds == "function" && (us || (us = w.jsx(ds, {}))),
          w.jsxs(he, {
            ...xe,
            ref: r,
            onClick: re,
            ..._,
            ...(!Kt(he) && { ownerState: { ...V, ...xe.ownerState } }),
            className: U(Q.root, xe.className, s, F && "MuiInputBase-readOnly"),
            children: [
              ee,
              w.jsx($n.Provider, {
                value: null,
                children: w.jsx(q, {
                  "aria-invalid": le.error,
                  "aria-describedby": n,
                  autoComplete: i,
                  autoFocus: a,
                  defaultValue: h,
                  disabled: le.disabled,
                  id: x,
                  onAnimationStart: W,
                  name: A,
                  placeholder: E,
                  readOnly: F,
                  required: le.required,
                  rows: j,
                  value: te,
                  onKeyDown: T,
                  onKeyUp: M,
                  type: ye,
                  ...Ie,
                  ...(!Kt(q) && {
                    as: Ve,
                    ownerState: { ...V, ...Ie.ownerState },
                  }),
                  ref: se,
                  className: U(
                    Q.input,
                    Ie.className,
                    F && "MuiInputBase-readOnly",
                  ),
                  onBlur: Me,
                  onChange: Re,
                  onFocus: Ee,
                }),
              }),
              f,
              B ? B({ ...le, startAdornment: ee }) : null,
            ],
          }),
        ],
      })
    );
  });
function zg(e) {
  return ce("MuiInput", e);
}
const Yr = { ...zr, ...de("MuiInput", ["root", "underline", "input"]) };
function jg(e) {
  return ce("MuiOutlinedInput", e);
}
const Rt = {
  ...zr,
  ...de("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function Fg(e) {
  return ce("MuiFilledInput", e);
}
const tr = {
    ...zr,
    ...de("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  Dg = Fe(w.jsx("path", { d: "M7 10l5 5 5-5z" })),
  Wg = Fe(
    w.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
  );
function Hg(e) {
  return ce("MuiAvatar", e);
}
de("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const Vg = (e) => {
    const { classes: t, variant: r, colorDefault: o } = e;
    return ue(
      {
        root: ["root", r, o && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      Hg,
      t,
    );
  },
  Ug = D("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
    },
  })(
    ie(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      variants: [
        {
          props: { variant: "rounded" },
          style: { borderRadius: (e.vars || e).shape.borderRadius },
        },
        { props: { variant: "square" }, style: { borderRadius: 0 } },
        {
          props: { colorDefault: !0 },
          style: {
            color: (e.vars || e).palette.background.default,
            ...(e.vars
              ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
              : {
                  backgroundColor: e.palette.grey[400],
                  ...e.applyStyles("dark", {
                    backgroundColor: e.palette.grey[600],
                  }),
                }),
          },
        },
      ],
    })),
  ),
  _g = D("img", { name: "MuiAvatar", slot: "Img" })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  Gg = D(Wg, { name: "MuiAvatar", slot: "Fallback" })({
    width: "75%",
    height: "75%",
  });
function Kg({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: o }) {
  const [n, i] = m.useState(!1);
  return (
    m.useEffect(() => {
      if (!r && !o) return;
      i(!1);
      let a = !0;
      const s = new Image();
      return (
        (s.onload = () => {
          a && i("loaded");
        }),
        (s.onerror = () => {
          a && i("error");
        }),
        (s.crossOrigin = e),
        (s.referrerPolicy = t),
        (s.src = r),
        o && (s.srcset = o),
        () => {
          a = !1;
        }
      );
    }, [e, t, r, o]),
    n
  );
}
const h0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiAvatar" }),
      {
        alt: n,
        children: i,
        className: a,
        component: s = "div",
        slots: l = {},
        slotProps: c = {},
        imgProps: u,
        sizes: h,
        src: y,
        srcSet: d,
        variant: f = "circular",
        ...g
      } = o;
    let b = null;
    const x = { ...o, component: s, variant: f },
      k = Kg({
        ...u,
        ...(typeof c.img == "function" ? c.img(x) : c.img),
        src: y,
        srcSet: d,
      }),
      S = y || d,
      v = S && k !== "error";
    (x.colorDefault = !v), delete x.ownerState;
    const C = Vg(x),
      [R, P] = fe("root", {
        ref: r,
        className: U(C.root, a),
        elementType: Ug,
        externalForwardedProps: { slots: l, slotProps: c, component: s, ...g },
        ownerState: x,
      }),
      [I, A] = fe("img", {
        className: C.img,
        elementType: _g,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: { ...u, ...c.img } },
        },
        additionalProps: { alt: n, src: y, srcSet: d, sizes: h },
        ownerState: x,
      }),
      [O, L] = fe("fallback", {
        className: C.fallback,
        elementType: Gg,
        externalForwardedProps: { slots: l, slotProps: c },
        shouldForwardComponentProp: !0,
        ownerState: x,
      });
    return (
      v
        ? (b = w.jsx(I, { ...A }))
        : i || i === 0
          ? (b = i)
          : S && n
            ? (b = n[0])
            : (b = w.jsx(O, { ...L })),
      w.jsx(R, { ...P, children: b })
    );
  }),
  qg = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  mi = m.forwardRef(function (t, r) {
    const o = Wt(),
      n = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: s,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: h,
        onEntering: y,
        onExit: d,
        onExited: f,
        onExiting: g,
        style: b,
        timeout: x = n,
        TransitionComponent: k = wt,
        ...S
      } = t,
      v = m.useRef(null),
      C = He(v, Qt(s), r),
      R = (T) => (M) => {
        if (T) {
          const E = v.current;
          M === void 0 ? T(E) : T(E, M);
        }
      },
      P = R(y),
      I = R((T, M) => {
        Vi(T);
        const E = Mr({ style: b, timeout: x, easing: l }, { mode: "enter" });
        (T.style.webkitTransition = o.transitions.create("opacity", E)),
          (T.style.transition = o.transitions.create("opacity", E)),
          u && u(T, M);
      }),
      A = R(h),
      O = R(g),
      L = R((T) => {
        const M = Mr({ style: b, timeout: x, easing: l }, { mode: "exit" });
        (T.style.webkitTransition = o.transitions.create("opacity", M)),
          (T.style.transition = o.transitions.create("opacity", M)),
          d && d(T);
      }),
      p = R(f),
      $ = (T) => {
        i && i(v.current, T);
      };
    return w.jsx(k, {
      appear: a,
      in: c,
      nodeRef: v,
      onEnter: I,
      onEntered: A,
      onEntering: P,
      onExit: L,
      onExited: p,
      onExiting: O,
      addEndListener: $,
      timeout: x,
      ...S,
      children: (T, { ownerState: M, ...E }) =>
        m.cloneElement(s, {
          style: {
            opacity: 0,
            visibility: T === "exited" && !c ? "hidden" : void 0,
            ...qg[T],
            ...b,
            ...s.props.style,
          },
          ref: C,
          ...E,
        }),
    });
  });
function Yg(e) {
  return ce("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const Xg = (e) => {
    const { classes: t, invisible: r } = e;
    return ue({ root: ["root", r && "invisible"] }, Yg, t);
  },
  Jg = D("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  Kl = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiBackdrop" }),
      {
        children: n,
        className: i,
        component: a = "div",
        invisible: s = !1,
        open: l,
        components: c = {},
        componentsProps: u = {},
        slotProps: h = {},
        slots: y = {},
        TransitionComponent: d,
        transitionDuration: f,
        ...g
      } = o,
      b = { ...o, component: a, invisible: s },
      x = Xg(b),
      k = { transition: d, root: c.Root, ...y },
      S = { ...u, ...h },
      v = { component: a, slots: k, slotProps: S },
      [C, R] = fe("root", {
        elementType: Jg,
        externalForwardedProps: v,
        className: U(x.root, i),
        ownerState: b,
      }),
      [P, I] = fe("transition", {
        elementType: mi,
        externalForwardedProps: v,
        ownerState: b,
      });
    return w.jsx(P, {
      in: l,
      timeout: f,
      ...g,
      ...I,
      children: w.jsx(C, { "aria-hidden": !0, ...R, ref: r, children: n }),
    });
  }),
  Qg = de("MuiBox", ["root"]),
  Zg = zi(),
  y0 = md({
    themeId: It,
    defaultTheme: Zg,
    defaultClassName: Qg.root,
    generateClassName: ll.generate,
  });
function eh(e) {
  return ce("MuiButton", e);
}
const rr = de("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  th = m.createContext({}),
  rh = m.createContext(void 0),
  oh = (e) => {
    const {
        color: t,
        disableElevation: r,
        fullWidth: o,
        size: n,
        variant: i,
        loading: a,
        loadingPosition: s,
        classes: l,
      } = e,
      c = {
        root: [
          "root",
          a && "loading",
          i,
          `${i}${z(t)}`,
          `size${z(n)}`,
          `${i}Size${z(n)}`,
          `color${z(t)}`,
          r && "disableElevation",
          o && "fullWidth",
          a && `loadingPosition${z(s)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${z(n)}`],
        endIcon: ["icon", "endIcon", `iconSize${z(n)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      u = ue(c, eh, l);
    return { ...l, ...u };
  },
  ql = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  nh = D(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${z(r.color)}`],
        t[`size${z(r.size)}`],
        t[`${r.variant}Size${z(r.size)}`],
        r.color === "inherit" && t.colorInherit,
        r.disableElevation && t.disableElevation,
        r.fullWidth && t.fullWidth,
        r.loading && t.loading,
      ];
    },
  })(
    ie(({ theme: e }) => {
      const t =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        r =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short },
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${rr.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${rr.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${rr.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${rr.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(De())
            .map(([o]) => ({
              props: { color: o },
              style: {
                "--variant-textColor": (e.vars || e).palette[o].main,
                "--variant-outlinedColor": (e.vars || e).palette[o].main,
                "--variant-outlinedBorder": e.alpha(
                  (e.vars || e).palette[o].main,
                  0.5,
                ),
                "--variant-containedColor": (e.vars || e).palette[o]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[o].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[o].dark,
                    "--variant-textBg": e.alpha(
                      (e.vars || e).palette[o].main,
                      (e.vars || e).palette.action.hoverOpacity,
                    ),
                    "--variant-outlinedBorder": (e.vars || e).palette[o].main,
                    "--variant-outlinedBg": e.alpha(
                      (e.vars || e).palette[o].main,
                      (e.vars || e).palette.action.hoverOpacity,
                    ),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : r,
                  "--variant-textBg": e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                  "--variant-outlinedBg": e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${rr.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${rr.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: e.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: e.transitions.duration.short },
              ),
              [`&.${rr.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    }),
  ),
  ih = D("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.startIcon,
        r.loading && t.startIconLoadingStart,
        t[`iconSize${z(r.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...ql,
    ],
  })),
  ah = D("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.endIcon,
        r.loading && t.endIconLoadingEnd,
        t[`iconSize${z(r.size)}`],
      ];
    },
  })(({ theme: e }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: e.transitions.create(["opacity"], {
            duration: e.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...ql,
    ],
  })),
  sh = D("span", { name: "MuiButton", slot: "LoadingIndicator" })(
    ({ theme: e }) => ({
      display: "none",
      position: "absolute",
      visibility: "visible",
      variants: [
        { props: { loading: !0 }, style: { display: "flex" } },
        { props: { loadingPosition: "start" }, style: { left: 14 } },
        {
          props: { loadingPosition: "start", size: "small" },
          style: { left: 10 },
        },
        {
          props: { variant: "text", loadingPosition: "start" },
          style: { left: 6 },
        },
        {
          props: { loadingPosition: "center" },
          style: {
            left: "50%",
            transform: "translate(-50%)",
            color: (e.vars || e).palette.action.disabled,
          },
        },
        { props: { loadingPosition: "end" }, style: { right: 14 } },
        {
          props: { loadingPosition: "end", size: "small" },
          style: { right: 10 },
        },
        {
          props: { variant: "text", loadingPosition: "end" },
          style: { right: 6 },
        },
        {
          props: { loadingPosition: "start", fullWidth: !0 },
          style: { position: "relative", left: -10 },
        },
        {
          props: { loadingPosition: "end", fullWidth: !0 },
          style: { position: "relative", right: -10 },
        },
      ],
    }),
  ),
  ps = D("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({
    display: "inline-block",
    width: "1em",
    height: "1em",
  }),
  v0 = m.forwardRef(function (t, r) {
    const o = m.useContext(th),
      n = m.useContext(rh),
      i = go(o, t),
      a = pe({ props: i, name: "MuiButton" }),
      {
        children: s,
        color: l = "primary",
        component: c = "button",
        className: u,
        disabled: h = !1,
        disableElevation: y = !1,
        disableFocusRipple: d = !1,
        endIcon: f,
        focusVisibleClassName: g,
        fullWidth: b = !1,
        id: x,
        loading: k = null,
        loadingIndicator: S,
        loadingPosition: v = "center",
        size: C = "medium",
        startIcon: R,
        type: P,
        variant: I = "text",
        ...A
      } = a,
      O = mr(x),
      L = S ?? w.jsx(Bl, { "aria-labelledby": O, color: "inherit", size: 16 }),
      p = {
        ...a,
        color: l,
        component: c,
        disabled: h,
        disableElevation: y,
        disableFocusRipple: d,
        fullWidth: b,
        loading: k,
        loadingIndicator: L,
        loadingPosition: v,
        size: C,
        type: P,
        variant: I,
      },
      $ = oh(p),
      T =
        (R || (k && v === "start")) &&
        w.jsx(ih, {
          className: $.startIcon,
          ownerState: p,
          children:
            R ||
            w.jsx(ps, { className: $.loadingIconPlaceholder, ownerState: p }),
        }),
      M =
        (f || (k && v === "end")) &&
        w.jsx(ah, {
          className: $.endIcon,
          ownerState: p,
          children:
            f ||
            w.jsx(ps, { className: $.loadingIconPlaceholder, ownerState: p }),
        }),
      E = n || "",
      F =
        typeof k == "boolean"
          ? w.jsx("span", {
              className: $.loadingWrapper,
              style: { display: "contents" },
              children:
                k &&
                w.jsx(sh, {
                  className: $.loadingIndicator,
                  ownerState: p,
                  children: L,
                }),
            })
          : null;
    return w.jsxs(nh, {
      ownerState: p,
      className: U(o.className, $.root, u, E),
      component: c,
      disabled: h || k,
      focusRipple: !d,
      focusVisibleClassName: U($.focusVisible, g),
      ref: r,
      type: P,
      id: k ? O : x,
      ...A,
      classes: $,
      children: [T, v !== "end" && F, s, v === "end" && F, M],
    });
  });
function lh(e) {
  return ce("PrivateSwitchBase", e);
}
de("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const ch = (e) => {
    const { classes: t, checked: r, disabled: o, edge: n } = e,
      i = {
        root: ["root", r && "checked", o && "disabled", n && `edge${z(n)}`],
        input: ["input"],
      };
    return ue(i, lh, t);
  },
  uh = D(dr, { name: "MuiSwitchBase" })({
    padding: 9,
    borderRadius: "50%",
    variants: [
      { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "start" && t.size !== "small",
        style: { marginLeft: -12 },
      },
      { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      {
        props: ({ edge: e, ownerState: t }) =>
          e === "end" && t.size !== "small",
        style: { marginRight: -12 },
      },
    ],
  }),
  dh = D("input", { name: "MuiSwitchBase", shouldForwardProp: rt })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  ph = m.forwardRef(function (t, r) {
    const {
        autoFocus: o,
        checked: n,
        checkedIcon: i,
        defaultChecked: a,
        disabled: s,
        disableFocusRipple: l = !1,
        edge: c = !1,
        icon: u,
        id: h,
        inputProps: y,
        inputRef: d,
        name: f,
        onBlur: g,
        onChange: b,
        onFocus: x,
        readOnly: k,
        required: S = !1,
        tabIndex: v,
        type: C,
        value: R,
        slots: P = {},
        slotProps: I = {},
        ...A
      } = t,
      [O, L] = ho({
        controlled: n,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      p = Zt(),
      $ = (J) => {
        x && x(J), p && p.onFocus && p.onFocus(J);
      },
      T = (J) => {
        g && g(J), p && p.onBlur && p.onBlur(J);
      },
      M = (J) => {
        if (J.nativeEvent.defaultPrevented || k) return;
        const _ = J.target.checked;
        L(_), b && b(J, _);
      };
    let E = s;
    p && typeof E > "u" && (E = p.disabled);
    const F = C === "checkbox" || C === "radio",
      B = { ...t, checked: O, disabled: E, disableFocusRipple: l, edge: c },
      j = ch(B),
      G = { slots: P, slotProps: { input: y, ...I } },
      [H, X] = fe("root", {
        ref: r,
        elementType: uh,
        className: j.root,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...G, component: "span", ...A },
        getSlotProps: (J) => ({
          ...J,
          onFocus: (_) => {
            var te;
            (te = J.onFocus) == null || te.call(J, _), $(_);
          },
          onBlur: (_) => {
            var te;
            (te = J.onBlur) == null || te.call(J, _), T(_);
          },
        }),
        ownerState: B,
        additionalProps: {
          centerRipple: !0,
          focusRipple: !l,
          role: void 0,
          tabIndex: null,
        },
      }),
      [ee, ye] = fe("input", {
        ref: d,
        elementType: dh,
        className: j.input,
        externalForwardedProps: G,
        getSlotProps: (J) => ({
          ...J,
          onChange: (_) => {
            var te;
            (te = J.onChange) == null || te.call(J, _), M(_);
          },
        }),
        ownerState: B,
        additionalProps: {
          autoFocus: o,
          checked: n,
          defaultChecked: a,
          disabled: E,
          id: F ? h : void 0,
          name: f,
          readOnly: k,
          required: S,
          tabIndex: v,
          type: C,
          ...(C === "checkbox" && R === void 0 ? {} : { value: R }),
        },
      });
    return w.jsxs(H, { ...X, children: [w.jsx(ee, { ...ye }), O ? i : u] });
  });
function fs(e) {
  return e.substring(2).toLowerCase();
}
function fh(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function mh(e) {
  const {
      children: t,
      disableReactTree: r = !1,
      mouseEvent: o = "onClick",
      onClickAway: n,
      touchEvent: i = "onTouchEnd",
    } = e,
    a = m.useRef(!1),
    s = m.useRef(null),
    l = m.useRef(!1),
    c = m.useRef(!1);
  m.useEffect(
    () => (
      setTimeout(() => {
        l.current = !0;
      }, 0),
      () => {
        l.current = !1;
      }
    ),
    [],
  );
  const u = He(Qt(t), s),
    h = tt((f) => {
      const g = c.current;
      c.current = !1;
      const b = Ye(s.current);
      if (!l.current || !s.current || ("clientX" in f && fh(f, b))) return;
      if (a.current) {
        a.current = !1;
        return;
      }
      let x;
      f.composedPath
        ? (x = f.composedPath().includes(s.current))
        : (x =
            !b.documentElement.contains(f.target) ||
            s.current.contains(f.target)),
        !x && (r || !g) && n(f);
    }),
    y = (f) => (g) => {
      c.current = !0;
      const b = t.props[f];
      b && b(g);
    },
    d = { ref: u };
  return (
    i !== !1 && (d[i] = y(i)),
    m.useEffect(() => {
      if (i !== !1) {
        const f = fs(i),
          g = Ye(s.current),
          b = () => {
            a.current = !0;
          };
        return (
          g.addEventListener(f, h),
          g.addEventListener("touchmove", b),
          () => {
            g.removeEventListener(f, h), g.removeEventListener("touchmove", b);
          }
        );
      }
    }, [h, i]),
    o !== !1 && (d[o] = y(o)),
    m.useEffect(() => {
      if (o !== !1) {
        const f = fs(o),
          g = Ye(s.current);
        return (
          g.addEventListener(f, h),
          () => {
            g.removeEventListener(f, h);
          }
        );
      }
    }, [h, o]),
    m.cloneElement(t, d)
  );
}
const gi = typeof Fi({}) == "function",
  gh = (e, t) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(t && !e.vars && { colorScheme: e.palette.mode }),
  }),
  hh = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    "@media print": { backgroundColor: (e.vars || e).palette.common.white },
  }),
  Yl = (e, t = !1) => {
    var i, a;
    const r = {};
    t &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == "function" &&
      Object.entries(e.colorSchemes).forEach(([s, l]) => {
        var u, h;
        const c = e.getColorSchemeSelector(s);
        c.startsWith("@")
          ? (r[c] = {
              ":root": {
                colorScheme: (u = l.palette) == null ? void 0 : u.mode,
              },
            })
          : (r[c.replace(/\s*&/, "")] = {
              colorScheme: (h = l.palette) == null ? void 0 : h.mode,
            });
      });
    let o = {
      html: gh(e, t),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...hh(e),
        "&::backdrop": {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...r,
    };
    const n =
      (a = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null
        ? void 0
        : a.styleOverrides;
    return n && (o = [o, n]), o;
  },
  Xo = "mui-ecs",
  yh = (e) => {
    const t = Yl(e, !1),
      r = Array.isArray(t) ? t[0] : t;
    return (
      !e.vars &&
        r &&
        (r.html[`:root:has(${Xo})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([o, n]) => {
          var a, s;
          const i = e.getColorSchemeSelector(o);
          i.startsWith("@")
            ? (r[i] = {
                [`:root:not(:has(.${Xo}))`]: {
                  colorScheme: (a = n.palette) == null ? void 0 : a.mode,
                },
              })
            : (r[i.replace(/\s*&/, "")] = {
                [`&:not(:has(.${Xo}))`]: {
                  colorScheme: (s = n.palette) == null ? void 0 : s.mode,
                },
              });
        }),
      t
    );
  },
  vh = Fi(
    gi
      ? ({ theme: e, enableColorScheme: t }) => Yl(e, t)
      : ({ theme: e }) => yh(e),
  );
function b0(e) {
  const t = pe({ props: e, name: "MuiCssBaseline" }),
    { children: r, enableColorScheme: o = !1 } = t;
  return w.jsxs(m.Fragment, {
    children: [
      gi && w.jsx(vh, { enableColorScheme: o }),
      !gi && !o && w.jsx("span", { className: Xo, style: { display: "none" } }),
      r,
    ],
  });
}
function Xl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function bh(e) {
  const t = Ye(e);
  return t.body === e
    ? Ct(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function lo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ms(e) {
  return parseFloat(Ct(e).getComputedStyle(e).paddingRight) || 0;
}
function xh(e) {
  const r = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(e.tagName),
    o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || o;
}
function gs(e, t, r, o, n) {
  const i = [t, r, ...o];
  [].forEach.call(e.children, (a) => {
    const s = !i.includes(a),
      l = !xh(a);
    s && l && lo(a, n);
  });
}
function Un(e, t) {
  let r = -1;
  return e.some((o, n) => (t(o) ? ((r = n), !0) : !1)), r;
}
function Sh(e, t) {
  const r = [],
    o = e.container;
  if (!t.disableScrollLock) {
    if (bh(o)) {
      const a = Xl(Ct(o));
      r.push({ value: o.style.paddingRight, property: "padding-right", el: o }),
        (o.style.paddingRight = `${ms(o) + a}px`);
      const s = Ye(o).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${ms(l) + a}px`);
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment) i = Ye(o).body;
    else {
      const a = o.parentElement,
        s = Ct(o);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        s.getComputedStyle(a).overflowY === "scroll"
          ? a
          : o;
    }
    r.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i },
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    r.forEach(({ value: i, el: a, property: s }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function Ch(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute("aria-hidden") === "true" && t.push(r);
    }),
    t
  );
}
class wh {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, r) {
    let o = this.modals.indexOf(t);
    if (o !== -1) return o;
    (o = this.modals.length),
      this.modals.push(t),
      t.modalRef && lo(t.modalRef, !1);
    const n = Ch(r);
    gs(r, t.mount, t.modalRef, n, !0);
    const i = Un(this.containers, (a) => a.container === r);
    return i !== -1
      ? (this.containers[i].modals.push(t), o)
      : (this.containers.push({
          modals: [t],
          container: r,
          restore: null,
          hiddenSiblings: n,
        }),
        o);
  }
  mount(t, r) {
    const o = Un(this.containers, (i) => i.modals.includes(t)),
      n = this.containers[o];
    n.restore || (n.restore = Sh(n, r));
  }
  remove(t, r = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1) return o;
    const n = Un(this.containers, (a) => a.modals.includes(t)),
      i = this.containers[n];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(o, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && lo(t.modalRef, r),
        gs(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(n, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && lo(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function no(e) {
  var r;
  let t = e.activeElement;
  for (
    ;
    ((r = t == null ? void 0 : t.shadowRoot) == null
      ? void 0
      : r.activeElement) != null;
  )
    t = t.shadowRoot.activeElement;
  return t;
}
const kh = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function Rh(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function Th(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function $h(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    Th(e)
  );
}
function Ph(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(kh)).forEach((o, n) => {
      const i = Rh(o);
      i === -1 ||
        !$h(o) ||
        (i === 0
          ? t.push(o)
          : r.push({ documentOrder: n, tabIndex: i, node: o }));
    }),
    r
      .sort((o, n) =>
        o.tabIndex === n.tabIndex
          ? o.documentOrder - n.documentOrder
          : o.tabIndex - n.tabIndex,
      )
      .map((o) => o.node)
      .concat(t)
  );
}
function Eh() {
  return !0;
}
function Ih(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: o = !1,
      disableRestoreFocus: n = !1,
      getTabbable: i = Ph,
      isEnabled: a = Eh,
      open: s,
    } = e,
    l = m.useRef(!1),
    c = m.useRef(null),
    u = m.useRef(null),
    h = m.useRef(null),
    y = m.useRef(null),
    d = m.useRef(!1),
    f = m.useRef(null),
    g = He(Qt(t), f),
    b = m.useRef(null);
  m.useEffect(() => {
    !s || !f.current || (d.current = !r);
  }, [r, s]),
    m.useEffect(() => {
      if (!s || !f.current) return;
      const S = Ye(f.current),
        v = no(S);
      return (
        f.current.contains(v) ||
          (f.current.hasAttribute("tabIndex") ||
            f.current.setAttribute("tabIndex", "-1"),
          d.current && f.current.focus()),
        () => {
          n ||
            (h.current &&
              h.current.focus &&
              ((l.current = !0), h.current.focus()),
            (h.current = null));
        }
      );
    }, [s]),
    m.useEffect(() => {
      if (!s || !f.current) return;
      const S = Ye(f.current),
        v = (P) => {
          if (((b.current = P), o || !a() || P.key !== "Tab")) return;
          no(S) === f.current &&
            P.shiftKey &&
            ((l.current = !0), u.current && u.current.focus());
        },
        C = () => {
          var O, L;
          const P = f.current;
          if (P === null) return;
          const I = no(S);
          if (!S.hasFocus() || !a() || l.current) {
            l.current = !1;
            return;
          }
          if (P.contains(I) || (o && I !== c.current && I !== u.current))
            return;
          if (I !== y.current) y.current = null;
          else if (y.current !== null) return;
          if (!d.current) return;
          let A = [];
          if (
            ((I === c.current || I === u.current) && (A = i(f.current)),
            A.length > 0)
          ) {
            const p = !!(
                (O = b.current) != null &&
                O.shiftKey &&
                ((L = b.current) == null ? void 0 : L.key) === "Tab"
              ),
              $ = A[0],
              T = A[A.length - 1];
            typeof $ != "string" &&
              typeof T != "string" &&
              (p ? T.focus() : $.focus());
          } else P.focus();
        };
      S.addEventListener("focusin", C), S.addEventListener("keydown", v, !0);
      const R = setInterval(() => {
        const P = no(S);
        P && P.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(R),
          S.removeEventListener("focusin", C),
          S.removeEventListener("keydown", v, !0);
      };
    }, [r, o, n, a, s, i]);
  const x = (S) => {
      h.current === null && (h.current = S.relatedTarget),
        (d.current = !0),
        (y.current = S.target);
      const v = t.props.onFocus;
      v && v(S);
    },
    k = (S) => {
      h.current === null && (h.current = S.relatedTarget), (d.current = !0);
    };
  return w.jsxs(m.Fragment, {
    children: [
      w.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: k,
        ref: c,
        "data-testid": "sentinelStart",
      }),
      m.cloneElement(t, { ref: g, onFocus: x }),
      w.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: k,
        ref: u,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function Mh(e) {
  return typeof e == "function" ? e() : e;
}
function Ah(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const hs = () => {},
  Bo = new wh();
function Oh(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: o = !1,
      closeAfterTransition: n = !1,
      onTransitionEnter: i,
      onTransitionExited: a,
      children: s,
      onClose: l,
      open: c,
      rootRef: u,
    } = e,
    h = m.useRef({}),
    y = m.useRef(null),
    d = m.useRef(null),
    f = He(d, u),
    [g, b] = m.useState(!c),
    x = Ah(s);
  let k = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (k = !1);
  const S = () => Ye(y.current),
    v = () => (
      (h.current.modalRef = d.current), (h.current.mount = y.current), h.current
    ),
    C = () => {
      Bo.mount(v(), { disableScrollLock: o }),
        d.current && (d.current.scrollTop = 0);
    },
    R = tt(() => {
      const M = Mh(t) || S().body;
      Bo.add(v(), M), d.current && C();
    }),
    P = () => Bo.isTopModal(v()),
    I = tt((M) => {
      (y.current = M), M && (c && P() ? C() : d.current && lo(d.current, k));
    }),
    A = m.useCallback(() => {
      Bo.remove(v(), k);
    }, [k]);
  m.useEffect(
    () => () => {
      A();
    },
    [A],
  ),
    m.useEffect(() => {
      c ? R() : (!x || !n) && A();
    }, [c, A, x, n, R]);
  const O = (M) => (E) => {
      var F;
      (F = M.onKeyDown) == null || F.call(M, E),
        !(E.key !== "Escape" || E.which === 229 || !P()) &&
          (r || (E.stopPropagation(), l && l(E, "escapeKeyDown")));
    },
    L = (M) => (E) => {
      var F;
      (F = M.onClick) == null || F.call(M, E),
        E.target === E.currentTarget && l && l(E, "backdropClick");
    };
  return {
    getRootProps: (M = {}) => {
      const E = lr(e);
      delete E.onTransitionEnter, delete E.onTransitionExited;
      const F = { ...E, ...M };
      return { role: "presentation", ...F, onKeyDown: O(F), ref: f };
    },
    getBackdropProps: (M = {}) => {
      const E = M;
      return { "aria-hidden": !0, ...E, onClick: L(E), open: c };
    },
    getTransitionProps: () => {
      const M = () => {
          b(!1), i && i();
        },
        E = () => {
          b(!0), a && a(), n && A();
        };
      return {
        onEnter: Ha(M, (s == null ? void 0 : s.props.onEnter) ?? hs),
        onExited: Ha(E, (s == null ? void 0 : s.props.onExited) ?? hs),
      };
    },
    rootRef: f,
    portalRef: I,
    isTopModal: P,
    exited: g,
    hasTransition: x,
  };
}
function Lh(e) {
  return ce("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const Bh = (e) => {
    const { open: t, exited: r, classes: o } = e;
    return ue(
      { root: ["root", !t && r && "hidden"], backdrop: ["backdrop"] },
      Lh,
      o,
    );
  },
  Nh = D("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.open && r.exited && t.hidden];
    },
  })(
    ie(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    })),
  ),
  zh = D(Kl, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }),
  Qi = m.forwardRef(function (t, r) {
    const o = pe({ name: "MuiModal", props: t }),
      {
        BackdropComponent: n = zh,
        BackdropProps: i,
        classes: a,
        className: s,
        closeAfterTransition: l = !1,
        children: c,
        container: u,
        component: h,
        components: y = {},
        componentsProps: d = {},
        disableAutoFocus: f = !1,
        disableEnforceFocus: g = !1,
        disableEscapeKeyDown: b = !1,
        disablePortal: x = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: S = !1,
        hideBackdrop: v = !1,
        keepMounted: C = !1,
        onClose: R,
        onTransitionEnter: P,
        onTransitionExited: I,
        open: A,
        slotProps: O = {},
        slots: L = {},
        theme: p,
        ...$
      } = o,
      T = {
        ...o,
        closeAfterTransition: l,
        disableAutoFocus: f,
        disableEnforceFocus: g,
        disableEscapeKeyDown: b,
        disablePortal: x,
        disableRestoreFocus: k,
        disableScrollLock: S,
        hideBackdrop: v,
        keepMounted: C,
      },
      {
        getRootProps: M,
        getBackdropProps: E,
        getTransitionProps: F,
        portalRef: B,
        isTopModal: j,
        exited: G,
        hasTransition: H,
      } = Oh({ ...T, rootRef: r }),
      X = { ...T, exited: G },
      ee = Bh(X),
      ye = {};
    if ((c.props.tabIndex === void 0 && (ye.tabIndex = "-1"), H)) {
      const { onEnter: Z, onExited: se } = F();
      (ye.onEnter = Z), (ye.onExited = se);
    }
    const J = {
        slots: { root: y.Root, backdrop: y.Backdrop, ...L },
        slotProps: { ...d, ...O },
      },
      [_, te] = fe("root", {
        ref: r,
        elementType: Nh,
        externalForwardedProps: { ...J, ...$, component: h },
        getSlotProps: M,
        ownerState: X,
        className: U(
          s,
          ee == null ? void 0 : ee.root,
          !X.open && X.exited && (ee == null ? void 0 : ee.hidden),
        ),
      }),
      [me, ve] = fe("backdrop", {
        ref: i == null ? void 0 : i.ref,
        elementType: n,
        externalForwardedProps: J,
        shouldForwardComponentProp: !0,
        additionalProps: i,
        getSlotProps: (Z) =>
          E({
            ...Z,
            onClick: (se) => {
              Z != null && Z.onClick && Z.onClick(se);
            },
          }),
        className: U(
          i == null ? void 0 : i.className,
          ee == null ? void 0 : ee.backdrop,
        ),
        ownerState: X,
      });
    return !C && !A && (!H || G)
      ? null
      : w.jsx(_l, {
          ref: B,
          container: u,
          disablePortal: x,
          children: w.jsxs(_, {
            ...te,
            children: [
              !v && n ? w.jsx(me, { ...ve }) : null,
              w.jsx(Ih, {
                disableEnforceFocus: g,
                disableAutoFocus: f,
                disableRestoreFocus: k,
                isEnabled: j,
                open: A,
                children: m.cloneElement(c, ye),
              }),
            ],
          }),
        });
  });
function jh(e) {
  return ce("MuiDialog", e);
}
const _n = de("MuiDialog", [
    "root",
    "backdrop",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  Jl = m.createContext({}),
  Fh = D(Kl, { name: "MuiDialog", slot: "Backdrop" })({ zIndex: -1 }),
  Dh = (e) => {
    const {
        classes: t,
        scroll: r,
        maxWidth: o,
        fullWidth: n,
        fullScreen: i,
      } = e,
      a = {
        root: ["root"],
        backdrop: ["backdrop"],
        container: ["container", `scroll${z(r)}`],
        paper: [
          "paper",
          `paperScroll${z(r)}`,
          `paperWidth${z(String(o))}`,
          n && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return ue(a, jh, t);
  },
  Wh = D(Qi, { name: "MuiDialog", slot: "Root" })({
    "@media print": { position: "absolute !important" },
  }),
  Hh = D("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.container, t[`scroll${z(r.scroll)}`]];
    },
  })({
    height: "100%",
    "@media print": { height: "auto" },
    outline: 0,
    variants: [
      {
        props: { scroll: "paper" },
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        props: { scroll: "body" },
        style: {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0",
          },
        },
      },
    ],
  }),
  Vh = D(Hr, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`scrollPaper${z(r.scroll)}`],
        t[`paperWidth${z(String(r.maxWidth))}`],
        r.fullWidth && t.paperFullWidth,
        r.fullScreen && t.paperFullScreen,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      margin: 32,
      position: "relative",
      overflowY: "auto",
      "@media print": { overflowY: "visible", boxShadow: "none" },
      variants: [
        {
          props: { scroll: "paper" },
          style: {
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100% - 64px)",
          },
        },
        {
          props: { scroll: "body" },
          style: {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "initial",
          },
        },
        {
          props: ({ ownerState: t }) => !t.maxWidth,
          style: { maxWidth: "calc(100% - 64px)" },
        },
        {
          props: { maxWidth: "xs" },
          style: {
            maxWidth:
              e.breakpoints.unit === "px"
                ? Math.max(e.breakpoints.values.xs, 444)
                : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
            [`&.${_n.paperScrollBody}`]: {
              [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]:
                { maxWidth: "calc(100% - 64px)" },
            },
          },
        },
        ...Object.keys(e.breakpoints.values)
          .filter((t) => t !== "xs")
          .map((t) => ({
            props: { maxWidth: t },
            style: {
              maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
              [`&.${_n.paperScrollBody}`]: {
                [e.breakpoints.down(e.breakpoints.values[t] + 64)]: {
                  maxWidth: "calc(100% - 64px)",
                },
              },
            },
          })),
        {
          props: ({ ownerState: t }) => t.fullWidth,
          style: { width: "calc(100% - 64px)" },
        },
        {
          props: ({ ownerState: t }) => t.fullScreen,
          style: {
            margin: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "none",
            borderRadius: 0,
            [`&.${_n.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
          },
        },
      ],
    })),
  ),
  x0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDialog" }),
      n = Wt(),
      i = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": a,
        "aria-labelledby": s,
        "aria-modal": l = !0,
        BackdropComponent: c,
        BackdropProps: u,
        children: h,
        className: y,
        disableEscapeKeyDown: d = !1,
        fullScreen: f = !1,
        fullWidth: g = !1,
        maxWidth: b = "sm",
        onClick: x,
        onClose: k,
        open: S,
        PaperComponent: v = Hr,
        PaperProps: C = {},
        scroll: R = "paper",
        slots: P = {},
        slotProps: I = {},
        TransitionComponent: A = mi,
        transitionDuration: O = i,
        TransitionProps: L,
        ...p
      } = o,
      $ = {
        ...o,
        disableEscapeKeyDown: d,
        fullScreen: f,
        fullWidth: g,
        maxWidth: b,
        scroll: R,
      },
      T = Dh($),
      M = m.useRef(),
      E = (oe) => {
        M.current = oe.target === oe.currentTarget;
      },
      F = (oe) => {
        x && x(oe),
          M.current && ((M.current = null), k && k(oe, "backdropClick"));
      },
      B = mr(s),
      j = m.useMemo(() => ({ titleId: B }), [B]),
      G = { transition: A, ...P },
      H = { transition: L, paper: C, backdrop: u, ...I },
      X = { slots: G, slotProps: H },
      [ee, ye] = fe("root", {
        elementType: Wh,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: U(T.root, y),
        ref: r,
      }),
      [J, _] = fe("backdrop", {
        elementType: Fh,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: T.backdrop,
      }),
      [te, me] = fe("paper", {
        elementType: Vh,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: U(T.paper, C.className),
      }),
      [ve, Z] = fe("container", {
        elementType: Hh,
        externalForwardedProps: X,
        ownerState: $,
        className: T.container,
      }),
      [se, ne] = fe("transition", {
        elementType: mi,
        externalForwardedProps: X,
        ownerState: $,
        additionalProps: {
          appear: !0,
          in: S,
          timeout: O,
          role: "presentation",
        },
      });
    return w.jsx(ee, {
      closeAfterTransition: !0,
      slots: { backdrop: J },
      slotProps: { backdrop: { transitionDuration: O, as: c, ..._ } },
      disableEscapeKeyDown: d,
      onClose: k,
      open: S,
      onClick: F,
      ...ye,
      ...p,
      children: w.jsx(se, {
        ...ne,
        children: w.jsx(ve, {
          onMouseDown: E,
          ...Z,
          children: w.jsx(te, {
            as: v,
            elevation: 24,
            role: "dialog",
            "aria-describedby": a,
            "aria-labelledby": B,
            "aria-modal": l,
            ...me,
            children: w.jsx(Jl.Provider, { value: j, children: h }),
          }),
        }),
      }),
    });
  });
function Uh(e) {
  return ce("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const _h = (e) => {
    const { classes: t, disableSpacing: r } = e;
    return ue({ root: ["root", !r && "spacing"] }, Uh, t);
  },
  Gh = D("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.disableSpacing && t.spacing];
    },
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableSpacing,
        style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
      },
    ],
  }),
  S0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDialogActions" }),
      { className: n, disableSpacing: i = !1, ...a } = o,
      s = { ...o, disableSpacing: i },
      l = _h(s);
    return w.jsx(Gh, { className: U(l.root, n), ownerState: s, ref: r, ...a });
  });
function Kh(e) {
  return ce("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
function qh(e) {
  return ce("MuiDialogTitle", e);
}
const Yh = de("MuiDialogTitle", ["root"]),
  Xh = (e) => {
    const { classes: t, dividers: r } = e;
    return ue({ root: ["root", r && "dividers"] }, Kh, t);
  },
  Jh = D("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.dividers && t.dividers];
    },
  })(
    ie(({ theme: e }) => ({
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "20px 24px",
      variants: [
        {
          props: ({ ownerState: t }) => t.dividers,
          style: {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          },
        },
        {
          props: ({ ownerState: t }) => !t.dividers,
          style: { [`.${Yh.root} + &`]: { paddingTop: 0 } },
        },
      ],
    })),
  ),
  C0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDialogContent" }),
      { className: n, dividers: i = !1, ...a } = o,
      s = { ...o, dividers: i },
      l = Xh(s);
    return w.jsx(Jh, { className: U(l.root, n), ownerState: s, ref: r, ...a });
  }),
  Qh = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, qh, t);
  },
  Zh = D(Rr, { name: "MuiDialogTitle", slot: "Root" })({
    padding: "16px 24px",
    flex: "0 0 auto",
  }),
  w0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDialogTitle" }),
      { className: n, id: i, ...a } = o,
      s = o,
      l = Qh(s),
      { titleId: c = i } = m.useContext(Jl);
    return w.jsx(Zh, {
      component: "h2",
      className: U(l.root, n),
      ownerState: s,
      ref: r,
      variant: "h6",
      id: i ?? c,
      ...a,
    });
  });
function ey(e) {
  return ce("MuiDivider", e);
}
const ys = de("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  ty = (e) => {
    const {
      absolute: t,
      children: r,
      classes: o,
      flexItem: n,
      light: i,
      orientation: a,
      textAlign: s,
      variant: l,
    } = e;
    return ue(
      {
        root: [
          "root",
          t && "absolute",
          l,
          i && "light",
          a === "vertical" && "vertical",
          n && "flexItem",
          r && "withChildren",
          r && a === "vertical" && "withChildrenVertical",
          s === "right" && a !== "vertical" && "textAlignRight",
          s === "left" && a !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", a === "vertical" && "wrapperVertical"],
      },
      ey,
      o,
    );
  },
  ry = D("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.absolute && t.absolute,
        t[r.variant],
        r.light && t.light,
        r.orientation === "vertical" && t.vertical,
        r.flexItem && t.flexItem,
        r.children && t.withChildren,
        r.children && r.orientation === "vertical" && t.withChildrenVertical,
        r.textAlign === "right" &&
          r.orientation !== "vertical" &&
          t.textAlignRight,
        r.textAlign === "left" &&
          r.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: (e.vars || e).palette.divider,
      borderBottomWidth: "thin",
      variants: [
        {
          props: { absolute: !0 },
          style: { position: "absolute", bottom: 0, left: 0, width: "100%" },
        },
        {
          props: { light: !0 },
          style: { borderColor: e.alpha((e.vars || e).palette.divider, 0.08) },
        },
        { props: { variant: "inset" }, style: { marginLeft: 72 } },
        {
          props: { variant: "middle", orientation: "horizontal" },
          style: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        },
        {
          props: { variant: "middle", orientation: "vertical" },
          style: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            borderBottomWidth: 0,
            borderRightWidth: "thin",
          },
        },
        {
          props: { flexItem: !0 },
          style: { alignSelf: "stretch", height: "auto" },
        },
        {
          props: ({ ownerState: t }) => !!t.children,
          style: {
            display: "flex",
            textAlign: "center",
            border: 0,
            borderTopStyle: "solid",
            borderLeftStyle: "solid",
            "&::before, &::after": { content: '""', alignSelf: "center" },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.children && t.orientation !== "vertical",
          style: {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.orientation === "vertical" && t.children,
          style: {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.textAlign === "right" && t.orientation !== "vertical",
          style: {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.textAlign === "left" && t.orientation !== "vertical",
          style: {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          },
        },
      ],
    })),
  ),
  oy = D("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.wrapper, r.orientation === "vertical" && t.wrapperVertical];
    },
  })(
    ie(({ theme: e }) => ({
      display: "inline-block",
      paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
      paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      whiteSpace: "nowrap",
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            paddingTop: `calc(${e.spacing(1)} * 1.2)`,
            paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
          },
        },
      ],
    })),
  ),
  vs = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDivider" }),
      {
        absolute: n = !1,
        children: i,
        className: a,
        orientation: s = "horizontal",
        component: l = i || s === "vertical" ? "div" : "hr",
        flexItem: c = !1,
        light: u = !1,
        role: h = l !== "hr" ? "separator" : void 0,
        textAlign: y = "center",
        variant: d = "fullWidth",
        ...f
      } = o,
      g = {
        ...o,
        absolute: n,
        component: l,
        flexItem: c,
        light: u,
        orientation: s,
        role: h,
        textAlign: y,
        variant: d,
      },
      b = ty(g);
    return w.jsx(ry, {
      as: l,
      className: U(b.root, a),
      role: h,
      ref: r,
      ownerState: g,
      "aria-orientation":
        h === "separator" && (l !== "hr" || s === "vertical") ? s : void 0,
      ...f,
      children: i
        ? w.jsx(oy, { className: b.wrapper, ownerState: g, children: i })
        : null,
    });
  });
vs && (vs.muiSkipListHighlight = !0);
function ny(e, t, r) {
  const o = t.getBoundingClientRect(),
    n = r && r.getBoundingClientRect(),
    i = Ct(t);
  let a;
  if (t.fakeTransform) a = t.fakeTransform;
  else {
    const c = i.getComputedStyle(t);
    a =
      c.getPropertyValue("-webkit-transform") ||
      c.getPropertyValue("transform");
  }
  let s = 0,
    l = 0;
  if (a && a !== "none" && typeof a == "string") {
    const c = a.split("(")[1].split(")")[0].split(",");
    (s = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === "left"
    ? n
      ? `translateX(${n.right + s - o.left}px)`
      : `translateX(${i.innerWidth + s - o.left}px)`
    : e === "right"
      ? n
        ? `translateX(-${o.right - n.left - s}px)`
        : `translateX(-${o.left + o.width - s}px)`
      : e === "up"
        ? n
          ? `translateY(${n.bottom + l - o.top}px)`
          : `translateY(${i.innerHeight + l - o.top}px)`
        : n
          ? `translateY(-${o.top - n.top + o.height - l}px)`
          : `translateY(-${o.top + o.height - l}px)`;
}
function iy(e) {
  return typeof e == "function" ? e() : e;
}
function No(e, t, r) {
  const o = iy(r),
    n = ny(e, t, o);
  n && ((t.style.webkitTransform = n), (t.style.transform = n));
}
const ay = m.forwardRef(function (t, r) {
  const o = Wt(),
    n = {
      enter: o.transitions.easing.easeOut,
      exit: o.transitions.easing.sharp,
    },
    i = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen,
    },
    {
      addEndListener: a,
      appear: s = !0,
      children: l,
      container: c,
      direction: u = "down",
      easing: h = n,
      in: y,
      onEnter: d,
      onEntered: f,
      onEntering: g,
      onExit: b,
      onExited: x,
      onExiting: k,
      style: S,
      timeout: v = i,
      TransitionComponent: C = wt,
      ...R
    } = t,
    P = m.useRef(null),
    I = He(Qt(l), P, r),
    A = (B) => (j) => {
      B && (j === void 0 ? B(P.current) : B(P.current, j));
    },
    O = A((B, j) => {
      No(u, B, c), Vi(B), d && d(B, j);
    }),
    L = A((B, j) => {
      const G = Mr({ timeout: v, style: S, easing: h }, { mode: "enter" });
      (B.style.webkitTransition = o.transitions.create("-webkit-transform", {
        ...G,
      })),
        (B.style.transition = o.transitions.create("transform", { ...G })),
        (B.style.webkitTransform = "none"),
        (B.style.transform = "none"),
        g && g(B, j);
    }),
    p = A(f),
    $ = A(k),
    T = A((B) => {
      const j = Mr({ timeout: v, style: S, easing: h }, { mode: "exit" });
      (B.style.webkitTransition = o.transitions.create("-webkit-transform", j)),
        (B.style.transition = o.transitions.create("transform", j)),
        No(u, B, c),
        b && b(B);
    }),
    M = A((B) => {
      (B.style.webkitTransition = ""), (B.style.transition = ""), x && x(B);
    }),
    E = (B) => {
      a && a(P.current, B);
    },
    F = m.useCallback(() => {
      P.current && No(u, P.current, c);
    }, [u, c]);
  return (
    m.useEffect(() => {
      if (y || u === "down" || u === "right") return;
      const B = Di(() => {
          P.current && No(u, P.current, c);
        }),
        j = Ct(P.current);
      return (
        j.addEventListener("resize", B),
        () => {
          B.clear(), j.removeEventListener("resize", B);
        }
      );
    }, [u, y, c]),
    m.useEffect(() => {
      y || F();
    }, [y, F]),
    w.jsx(C, {
      nodeRef: P,
      onEnter: O,
      onEntered: p,
      onEntering: L,
      onExit: T,
      onExited: M,
      onExiting: $,
      addEndListener: E,
      appear: s,
      in: y,
      timeout: v,
      ...R,
      children: (B, { ownerState: j, ...G }) =>
        m.cloneElement(l, {
          ref: I,
          style: {
            visibility: B === "exited" && !y ? "hidden" : void 0,
            ...S,
            ...l.props.style,
          },
          ...G,
        }),
    })
  );
});
function sy(e) {
  return ce("MuiDrawer", e);
}
de("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "anchorLeft",
  "anchorRight",
  "anchorTop",
  "anchorBottom",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const Ql = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === "permanent" || r.variant === "persistent") && t.docked,
      r.variant === "temporary" && t.modal,
    ];
  },
  ly = (e) => {
    const { classes: t, anchor: r, variant: o } = e,
      n = {
        root: ["root", `anchor${z(r)}`],
        docked: [(o === "permanent" || o === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${z(r)}`,
          o !== "temporary" && `paperAnchorDocked${z(r)}`,
        ],
      };
    return ue(n, sy, t);
  },
  cy = D(Qi, { name: "MuiDrawer", slot: "Root", overridesResolver: Ql })(
    ie(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })),
  ),
  uy = D("div", {
    shouldForwardProp: rt,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Ql,
  })({ flex: "0 0 auto" }),
  dy = D(Hr, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`paperAnchor${z(r.anchor)}`],
        r.variant !== "temporary" && t[`paperAnchorDocked${z(r.anchor)}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flex: "1 0 auto",
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: "touch",
      position: "fixed",
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: "left" }, style: { left: 0 } },
        {
          props: { anchor: "top" },
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        { props: { anchor: "right" }, style: { right: 0 } },
        {
          props: { anchor: "bottom" },
          style: {
            top: "auto",
            left: 0,
            bottom: 0,
            right: 0,
            height: "auto",
            maxHeight: "100%",
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "left" && t.variant !== "temporary",
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "top" && t.variant !== "temporary",
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "right" && t.variant !== "temporary",
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) =>
            t.anchor === "bottom" && t.variant !== "temporary",
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    })),
  ),
  Zl = { left: "right", right: "left", top: "down", bottom: "up" };
function py(e) {
  return ["left", "right"].includes(e);
}
function fy({ direction: e }, t) {
  return e === "rtl" && py(t) ? Zl[t] : t;
}
const k0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiDrawer" }),
      n = Wt(),
      i = Dr(),
      a = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        anchor: s = "left",
        BackdropProps: l,
        children: c,
        className: u,
        elevation: h = 16,
        hideBackdrop: y = !1,
        ModalProps: { BackdropProps: d, ...f } = {},
        onClose: g,
        open: b = !1,
        PaperProps: x = {},
        SlideProps: k,
        TransitionComponent: S,
        transitionDuration: v = a,
        variant: C = "temporary",
        slots: R = {},
        slotProps: P = {},
        ...I
      } = o,
      A = m.useRef(!1);
    m.useEffect(() => {
      A.current = !0;
    }, []);
    const O = fy({ direction: i ? "rtl" : "ltr" }, s),
      p = { ...o, anchor: s, elevation: h, open: b, variant: C, ...I },
      $ = ly(p),
      T = {
        slots: { transition: S, ...R },
        slotProps: {
          paper: x,
          transition: k,
          ...P,
          backdrop: Pl(P.backdrop || { ...l, ...d }, { transitionDuration: v }),
        },
      },
      [M, E] = fe("root", {
        ref: r,
        elementType: cy,
        className: U($.root, $.modal, u),
        shouldForwardComponentProp: !0,
        ownerState: p,
        externalForwardedProps: { ...T, ...I, ...f },
        additionalProps: {
          open: b,
          onClose: g,
          hideBackdrop: y,
          slots: { backdrop: T.slots.backdrop },
          slotProps: { backdrop: T.slotProps.backdrop },
        },
      }),
      [F, B] = fe("paper", {
        elementType: dy,
        shouldForwardComponentProp: !0,
        className: U($.paper, x.className),
        ownerState: p,
        externalForwardedProps: T,
        additionalProps: {
          elevation: C === "temporary" ? h : 0,
          square: !0,
          ...(C === "temporary" && { role: "dialog", "aria-modal": "true" }),
        },
      }),
      [j, G] = fe("docked", {
        elementType: uy,
        ref: r,
        className: U($.root, $.docked, u),
        ownerState: p,
        externalForwardedProps: T,
        additionalProps: I,
      }),
      [H, X] = fe("transition", {
        elementType: ay,
        ownerState: p,
        externalForwardedProps: T,
        additionalProps: {
          in: b,
          direction: Zl[O],
          timeout: v,
          appear: A.current,
        },
      }),
      ee = w.jsx(F, { ...B, children: c });
    if (C === "permanent") return w.jsx(j, { ...G, children: ee });
    const ye = w.jsx(H, { ...X, children: ee });
    return C === "persistent"
      ? w.jsx(j, { ...G, children: ye })
      : w.jsx(M, { ...E, children: ye });
  }),
  my = (e) => {
    const {
        classes: t,
        disableUnderline: r,
        startAdornment: o,
        endAdornment: n,
        size: i,
        hiddenLabel: a,
        multiline: s,
      } = e,
      l = {
        root: [
          "root",
          !r && "underline",
          o && "adornedStart",
          n && "adornedEnd",
          i === "small" && `size${z(i)}`,
          a && "hiddenLabel",
          s && "multiline",
        ],
        input: ["input"],
      },
      c = ue(l, Fg, t);
    return { ...t, ...c };
  },
  gy = D(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...Pn(e, t), !r.disableUnderline && t.underline];
    },
  })(
    ie(({ theme: e }) => {
      const t = e.palette.mode === "light",
        r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        n = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : n,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
          },
        },
        [`&.${tr.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
        },
        [`&.${tr.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: a }) => !a.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${tr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${tr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : r}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${tr.disabled}, .${tr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${tr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(De())
            .map(([a]) => {
              var s;
              return {
                props: { disableUnderline: !1, color: a },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${((s = (e.vars || e).palette[a])) == null ? void 0 : s.main}`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: a }) => a.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: a }) => a.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: a }) => a.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: a, size: s }) => a.multiline && s === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: a }) => a.multiline && a.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: a }) =>
              a.multiline && a.hiddenLabel && a.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  hy = D(Mn, { name: "MuiFilledInput", slot: "Input", overridesResolver: En })(
    ie(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    })),
  ),
  Zi = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: n = !1,
        components: i = {},
        componentsProps: a,
        fullWidth: s = !1,
        hiddenLabel: l,
        inputComponent: c = "input",
        multiline: u = !1,
        slotProps: h,
        slots: y = {},
        type: d = "text",
        ...f
      } = o,
      g = {
        ...o,
        disableUnderline: n,
        fullWidth: s,
        inputComponent: c,
        multiline: u,
        type: d,
      },
      b = my(o),
      x = { root: { ownerState: g }, input: { ownerState: g } },
      k = (h ?? a) ? Xe(x, h ?? a) : x,
      S = y.root ?? i.Root ?? gy,
      v = y.input ?? i.Input ?? hy;
    return w.jsx(Ji, {
      slots: { root: S, input: v },
      slotProps: k,
      fullWidth: s,
      inputComponent: c,
      multiline: u,
      ref: r,
      type: d,
      ...f,
      classes: b,
    });
  });
Zi.muiName = "Input";
function yy(e) {
  return ce("MuiFormControl", e);
}
de("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const vy = (e) => {
    const { classes: t, margin: r, fullWidth: o } = e,
      n = { root: ["root", r !== "none" && `margin${z(r)}`, o && "fullWidth"] };
    return ue(n, yy, t);
  },
  by = D("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`margin${z(r.margin)}`], r.fullWidth && t.fullWidth];
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  xy = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiFormControl" }),
      {
        children: n,
        className: i,
        color: a = "primary",
        component: s = "div",
        disabled: l = !1,
        error: c = !1,
        focused: u,
        fullWidth: h = !1,
        hiddenLabel: y = !1,
        margin: d = "none",
        required: f = !1,
        size: g = "medium",
        variant: b = "outlined",
        ...x
      } = o,
      k = {
        ...o,
        color: a,
        component: s,
        disabled: l,
        error: c,
        fullWidth: h,
        hiddenLabel: y,
        margin: d,
        required: f,
        size: g,
        variant: b,
      },
      S = vy(k),
      [v, C] = m.useState(() => {
        let M = !1;
        return (
          n &&
            m.Children.forEach(n, (E) => {
              if (!qo(E, ["Input", "Select"])) return;
              const F = qo(E, ["Select"]) ? E.props.input : E;
              F && Lg(F.props) && (M = !0);
            }),
          M
        );
      }),
      [R, P] = m.useState(() => {
        let M = !1;
        return (
          n &&
            m.Children.forEach(n, (E) => {
              qo(E, ["Input", "Select"]) &&
                (an(E.props, !0) || an(E.props.inputProps, !0)) &&
                (M = !0);
            }),
          M
        );
      }),
      [I, A] = m.useState(!1);
    l && I && A(!1);
    const O = u !== void 0 && !l ? u : I;
    let L;
    m.useRef(!1);
    const p = m.useCallback(() => {
        P(!0);
      }, []),
      $ = m.useCallback(() => {
        P(!1);
      }, []),
      T = m.useMemo(
        () => ({
          adornedStart: v,
          setAdornedStart: C,
          color: a,
          disabled: l,
          error: c,
          filled: R,
          focused: O,
          fullWidth: h,
          hiddenLabel: y,
          size: g,
          onBlur: () => {
            A(!1);
          },
          onFocus: () => {
            A(!0);
          },
          onEmpty: $,
          onFilled: p,
          registerEffect: L,
          required: f,
          variant: b,
        }),
        [v, a, l, c, R, O, h, y, L, $, p, f, g, b],
      );
    return w.jsx($n.Provider, {
      value: T,
      children: w.jsx(by, {
        as: s,
        ownerState: k,
        className: U(S.root, i),
        ref: r,
        ...x,
        children: n,
      }),
    });
  });
function Sy(e) {
  return ce("MuiFormHelperText", e);
}
const bs = de("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var xs;
const Cy = (e) => {
    const {
        classes: t,
        contained: r,
        size: o,
        disabled: n,
        error: i,
        filled: a,
        focused: s,
        required: l,
      } = e,
      c = {
        root: [
          "root",
          n && "disabled",
          i && "error",
          o && `size${z(o)}`,
          r && "contained",
          s && "focused",
          a && "filled",
          l && "required",
        ],
      };
    return ue(c, Sy, t);
  },
  wy = D("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.size && t[`size${z(r.size)}`],
        r.contained && t.contained,
        r.filled && t.filled,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${bs.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${bs.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  ky = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiFormHelperText" }),
      {
        children: n,
        className: i,
        component: a = "p",
        disabled: s,
        error: l,
        filled: c,
        focused: u,
        margin: h,
        required: y,
        variant: d,
        ...f
      } = o,
      g = Zt(),
      b = Vr({
        props: o,
        muiFormControl: g,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      x = {
        ...o,
        component: a,
        contained: b.variant === "filled" || b.variant === "outlined",
        variant: b.variant,
        size: b.size,
        disabled: b.disabled,
        error: b.error,
        filled: b.filled,
        focused: b.focused,
        required: b.required,
      };
    delete x.ownerState;
    const k = Cy(x);
    return w.jsx(wy, {
      as: a,
      className: U(k.root, i),
      ref: r,
      ...f,
      ownerState: x,
      children:
        n === " "
          ? xs ||
            (xs = w.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : n,
    });
  });
function Ry(e) {
  return ce("MuiFormLabel", e);
}
const co = de("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Ty = (e) => {
    const {
        classes: t,
        color: r,
        focused: o,
        disabled: n,
        error: i,
        filled: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          `color${z(r)}`,
          n && "disabled",
          i && "error",
          a && "filled",
          o && "focused",
          s && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ue(l, Ry, t);
  },
  $y = D("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color === "secondary" && t.colorSecondary,
        r.filled && t.filled,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${co.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${co.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${co.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  Py = D("span", { name: "MuiFormLabel", slot: "Asterisk" })(
    ie(({ theme: e }) => ({
      [`&.${co.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Ey = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiFormLabel" }),
      {
        children: n,
        className: i,
        color: a,
        component: s = "label",
        disabled: l,
        error: c,
        filled: u,
        focused: h,
        required: y,
        ...d
      } = o,
      f = Zt(),
      g = Vr({
        props: o,
        muiFormControl: f,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      b = {
        ...o,
        color: g.color || "primary",
        component: s,
        disabled: g.disabled,
        error: g.error,
        filled: g.filled,
        focused: g.focused,
        required: g.required,
      },
      x = Ty(b);
    return w.jsxs($y, {
      as: s,
      ownerState: b,
      className: U(x.root, i),
      ref: r,
      ...d,
      children: [
        n,
        g.required &&
          w.jsxs(Py, {
            ownerState: b,
            "aria-hidden": !0,
            className: x.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  R0 = fp({
    createStyledComponent: D("div", {
      name: "MuiGrid",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, r.container && t.container];
      },
    }),
    componentName: "MuiGrid",
    useThemeProps: (e) => pe({ props: e, name: "MuiGrid" }),
    useTheme: Wt,
  });
function hi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Iy = {
    entering: { opacity: 1, transform: hi(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Gn =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  bo = m.forwardRef(function (t, r) {
    const {
        addEndListener: o,
        appear: n = !0,
        children: i,
        easing: a,
        in: s,
        onEnter: l,
        onEntered: c,
        onEntering: u,
        onExit: h,
        onExited: y,
        onExiting: d,
        style: f,
        timeout: g = "auto",
        TransitionComponent: b = wt,
        ...x
      } = t,
      k = sr(),
      S = m.useRef(),
      v = Wt(),
      C = m.useRef(null),
      R = He(C, Qt(i), r),
      P = (M) => (E) => {
        if (M) {
          const F = C.current;
          E === void 0 ? M(F) : M(F, E);
        }
      },
      I = P(u),
      A = P((M, E) => {
        Vi(M);
        const {
          duration: F,
          delay: B,
          easing: j,
        } = Mr({ style: f, timeout: g, easing: a }, { mode: "enter" });
        let G;
        g === "auto"
          ? ((G = v.transitions.getAutoHeightDuration(M.clientHeight)),
            (S.current = G))
          : (G = F),
          (M.style.transition = [
            v.transitions.create("opacity", { duration: G, delay: B }),
            v.transitions.create("transform", {
              duration: Gn ? G : G * 0.666,
              delay: B,
              easing: j,
            }),
          ].join(",")),
          l && l(M, E);
      }),
      O = P(c),
      L = P(d),
      p = P((M) => {
        const {
          duration: E,
          delay: F,
          easing: B,
        } = Mr({ style: f, timeout: g, easing: a }, { mode: "exit" });
        let j;
        g === "auto"
          ? ((j = v.transitions.getAutoHeightDuration(M.clientHeight)),
            (S.current = j))
          : (j = E),
          (M.style.transition = [
            v.transitions.create("opacity", { duration: j, delay: F }),
            v.transitions.create("transform", {
              duration: Gn ? j : j * 0.666,
              delay: Gn ? F : F || j * 0.333,
              easing: B,
            }),
          ].join(",")),
          (M.style.opacity = 0),
          (M.style.transform = hi(0.75)),
          h && h(M);
      }),
      $ = P(y),
      T = (M) => {
        g === "auto" && k.start(S.current || 0, M), o && o(C.current, M);
      };
    return w.jsx(b, {
      appear: n,
      in: s,
      nodeRef: C,
      onEnter: A,
      onEntered: O,
      onEntering: I,
      onExit: p,
      onExited: $,
      onExiting: L,
      addEndListener: T,
      timeout: g === "auto" ? null : g,
      ...x,
      children: (M, { ownerState: E, ...F }) =>
        m.cloneElement(i, {
          style: {
            opacity: 0,
            transform: hi(0.75),
            visibility: M === "exited" && !s ? "hidden" : void 0,
            ...Iy[M],
            ...f,
            ...i.props.style,
          },
          ref: R,
          ...F,
        }),
    });
  });
bo && (bo.muiSupportAuto = !0);
const My = (e) => {
    const { classes: t, disableUnderline: r } = e,
      n = ue({ root: ["root", !r && "underline"], input: ["input"] }, zg, t);
    return { ...t, ...n };
  },
  Ay = D(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...Pn(e, t), !r.disableUnderline && t.underline];
    },
  })(
    ie(({ theme: e }) => {
      let r =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (r = e.alpha(
            e.vars.palette.common.onBackground,
            e.vars.opacity.inputUnderline,
          )),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: o }) => o.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: o }) => !o.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Yr.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Yr.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${r}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Yr.disabled}, .${Yr.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  "@media (hover: none)": { borderBottom: `1px solid ${r}` },
                },
                [`&.${Yr.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(De())
              .map(([o]) => ({
                props: { color: o, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[o].main}`,
                  },
                },
              })),
          ],
        }
      );
    }),
  ),
  Oy = D(Mn, { name: "MuiInput", slot: "Input", overridesResolver: En })({}),
  ea = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiInput" }),
      {
        disableUnderline: n = !1,
        components: i = {},
        componentsProps: a,
        fullWidth: s = !1,
        inputComponent: l = "input",
        multiline: c = !1,
        slotProps: u,
        slots: h = {},
        type: y = "text",
        ...d
      } = o,
      f = My(o),
      b = { root: { ownerState: { disableUnderline: n } } },
      x = (u ?? a) ? Xe(u ?? a, b) : b,
      k = h.root ?? i.Root ?? Ay,
      S = h.input ?? i.Input ?? Oy;
    return w.jsx(Ji, {
      slots: { root: k, input: S },
      slotProps: x,
      fullWidth: s,
      inputComponent: l,
      multiline: c,
      ref: r,
      type: y,
      ...d,
      classes: f,
    });
  });
ea.muiName = "Input";
function Ly(e) {
  return ce("MuiInputAdornment", e);
}
const Ss = de("MuiInputAdornment", [
  "root",
  "filled",
  "standard",
  "outlined",
  "positionStart",
  "positionEnd",
  "disablePointerEvents",
  "hiddenLabel",
  "sizeSmall",
]);
var Cs;
const By = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      t[`position${z(r.position)}`],
      r.disablePointerEvents === !0 && t.disablePointerEvents,
      t[r.variant],
    ];
  },
  Ny = (e) => {
    const {
        classes: t,
        disablePointerEvents: r,
        hiddenLabel: o,
        position: n,
        size: i,
        variant: a,
      } = e,
      s = {
        root: [
          "root",
          r && "disablePointerEvents",
          n && `position${z(n)}`,
          a,
          o && "hiddenLabel",
          i && `size${z(i)}`,
        ],
      };
    return ue(s, Ly, t);
  },
  zy = D("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: By,
  })(
    ie(({ theme: e }) => ({
      display: "flex",
      maxHeight: "2em",
      alignItems: "center",
      whiteSpace: "nowrap",
      color: (e.vars || e).palette.action.active,
      variants: [
        {
          props: { variant: "filled" },
          style: {
            [`&.${Ss.positionStart}&:not(.${Ss.hiddenLabel})`]: {
              marginTop: 16,
            },
          },
        },
        { props: { position: "start" }, style: { marginRight: 8 } },
        { props: { position: "end" }, style: { marginLeft: 8 } },
        {
          props: { disablePointerEvents: !0 },
          style: { pointerEvents: "none" },
        },
      ],
    })),
  ),
  T0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiInputAdornment" }),
      {
        children: n,
        className: i,
        component: a = "div",
        disablePointerEvents: s = !1,
        disableTypography: l = !1,
        position: c,
        variant: u,
        ...h
      } = o,
      y = Zt() || {};
    let d = u;
    u && y.variant, y && !d && (d = y.variant);
    const f = {
        ...o,
        hiddenLabel: y.hiddenLabel,
        size: y.size,
        disablePointerEvents: s,
        position: c,
        variant: d,
      },
      g = Ny(f);
    return w.jsx($n.Provider, {
      value: null,
      children: w.jsx(zy, {
        as: a,
        ownerState: f,
        className: U(g.root, i),
        ref: r,
        ...h,
        children:
          typeof n == "string" && !l
            ? w.jsx(Rr, { color: "textSecondary", children: n })
            : w.jsxs(m.Fragment, {
                children: [
                  c === "start"
                    ? Cs ||
                      (Cs = w.jsx("span", {
                        className: "notranslate",
                        "aria-hidden": !0,
                        children: "​",
                      }))
                    : null,
                  n,
                ],
              }),
      }),
    });
  });
function jy(e) {
  return ce("MuiInputLabel", e);
}
de("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const Fy = (e) => {
    const {
        classes: t,
        formControl: r,
        size: o,
        shrink: n,
        disableAnimation: i,
        variant: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          r && "formControl",
          !i && "animated",
          n && "shrink",
          o && o !== "medium" && `size${z(o)}`,
          a,
        ],
        asterisk: [s && "asterisk"],
      },
      c = ue(l, jy, t);
    return { ...t, ...c };
  },
  Dy = D(Ey, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${co.asterisk}`]: t.asterisk },
        t.root,
        r.formControl && t.formControl,
        r.size === "small" && t.sizeSmall,
        r.shrink && t.shrink,
        !r.disableAnimation && t.animated,
        r.focused && t.focused,
        t[r.variant],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              },
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: r }) => t === "filled" && r.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: t, ownerState: r, size: o }) =>
            t === "filled" && r.shrink && o === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: r }) =>
            t === "outlined" && r.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    })),
  ),
  Wy = m.forwardRef(function (t, r) {
    const o = pe({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: n = !1,
        margin: i,
        shrink: a,
        variant: s,
        className: l,
        ...c
      } = o,
      u = Zt();
    let h = a;
    typeof h > "u" && u && (h = u.filled || u.focused || u.adornedStart);
    const y = Vr({
        props: o,
        muiFormControl: u,
        states: ["size", "variant", "required", "focused"],
      }),
      d = {
        ...o,
        disableAnimation: n,
        formControl: u,
        shrink: h,
        size: y.size,
        variant: y.variant,
        required: y.required,
        focused: y.focused,
      },
      f = Fy(d);
    return w.jsx(Dy, {
      "data-shrink": h,
      ref: r,
      className: U(f.root, l),
      ...c,
      ownerState: d,
      classes: f,
    });
  });
function Hy(e) {
  return ce("MuiLinearProgress", e);
}
de("MuiLinearProgress", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "determinate",
  "indeterminate",
  "buffer",
  "query",
  "dashed",
  "dashedColorPrimary",
  "dashedColorSecondary",
  "bar",
  "bar1",
  "bar2",
  "barColorPrimary",
  "barColorSecondary",
  "bar1Indeterminate",
  "bar1Determinate",
  "bar1Buffer",
  "bar2Indeterminate",
  "bar2Buffer",
]);
const yi = 4,
  vi = Xt`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,
  Vy =
    typeof vi != "string"
      ? Fr`
        animation: ${vi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `
      : null,
  bi = Xt`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,
  Uy =
    typeof bi != "string"
      ? Fr`
        animation: ${bi} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `
      : null,
  xi = Xt`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,
  _y =
    typeof xi != "string"
      ? Fr`
        animation: ${xi} 3s infinite linear;
      `
      : null,
  Gy = (e) => {
    const { classes: t, variant: r, color: o } = e,
      n = {
        root: ["root", `color${z(o)}`, r],
        dashed: ["dashed", `dashedColor${z(o)}`],
        bar1: [
          "bar",
          "bar1",
          `barColor${z(o)}`,
          (r === "indeterminate" || r === "query") && "bar1Indeterminate",
          r === "determinate" && "bar1Determinate",
          r === "buffer" && "bar1Buffer",
        ],
        bar2: [
          "bar",
          "bar2",
          r !== "buffer" && `barColor${z(o)}`,
          r === "buffer" && `color${z(o)}`,
          (r === "indeterminate" || r === "query") && "bar2Indeterminate",
          r === "buffer" && "bar2Buffer",
        ],
      };
    return ue(n, Hy, t);
  },
  ta = (e, t) =>
    e.vars
      ? e.vars.palette.LinearProgress[`${t}Bg`]
      : e.palette.mode === "light"
        ? e.lighten(e.palette[t].main, 0.62)
        : e.darken(e.palette[t].main, 0.5),
  Ky = D("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`color${z(r.color)}`], t[r.variant]];
    },
  })(
    ie(({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      display: "block",
      height: 4,
      zIndex: 0,
      "@media print": { colorAdjust: "exact" },
      variants: [
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { backgroundColor: ta(e, t) },
          })),
        {
          props: ({ ownerState: t }) =>
            t.color === "inherit" && t.variant !== "buffer",
          style: {
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "currentColor",
              opacity: 0.3,
            },
          },
        },
        {
          props: { variant: "buffer" },
          style: { backgroundColor: "transparent" },
        },
        { props: { variant: "query" }, style: { transform: "rotate(180deg)" } },
      ],
    })),
  ),
  qy = D("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.dashed, t[`dashedColor${z(r.color)}`]];
    },
  })(
    ie(({ theme: e }) => ({
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px",
      variants: [
        {
          props: { color: "inherit" },
          style: {
            opacity: 0.3,
            backgroundImage:
              "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)",
          },
        },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => {
            const r = ta(e, t);
            return {
              props: { color: t },
              style: {
                backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,
              },
            };
          }),
      ],
    })),
    _y || { animation: `${xi} 3s infinite linear` },
  ),
  Yy = D("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${z(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") &&
          t.bar1Indeterminate,
        r.variant === "determinate" && t.bar1Determinate,
        r.variant === "buffer" && t.bar1Buffer,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        {
          props: { color: "inherit" },
          style: { backgroundColor: "currentColor" },
        },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { backgroundColor: (e.vars || e).palette[t].main },
          })),
        {
          props: { variant: "determinate" },
          style: { transition: `transform .${yi}s linear` },
        },
        {
          props: { variant: "buffer" },
          style: { zIndex: 1, transition: `transform .${yi}s linear` },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: Vy || {
            animation: `${vi} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
          },
        },
      ],
    })),
  ),
  Xy = D("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${z(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") &&
          t.bar2Indeterminate,
        r.variant === "buffer" && t.bar2Buffer,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main,
            },
          })),
        {
          props: ({ ownerState: t }) =>
            t.variant !== "buffer" && t.color !== "inherit",
          style: {
            backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)",
          },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant !== "buffer" && t.color === "inherit",
          style: { backgroundColor: "currentColor" },
        },
        { props: { color: "inherit" }, style: { opacity: 0.3 } },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t, variant: "buffer" },
            style: {
              backgroundColor: ta(e, t),
              transition: `transform .${yi}s linear`,
            },
          })),
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: Uy || {
            animation: `${bi} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
          },
        },
      ],
    })),
  ),
  $0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiLinearProgress" }),
      {
        className: n,
        color: i = "primary",
        value: a,
        valueBuffer: s,
        variant: l = "indeterminate",
        ...c
      } = o,
      u = { ...o, color: i, variant: l },
      h = Gy(u),
      y = Dr(),
      d = {},
      f = { bar1: {}, bar2: {} };
    if ((l === "determinate" || l === "buffer") && a !== void 0) {
      (d["aria-valuenow"] = Math.round(a)),
        (d["aria-valuemin"] = 0),
        (d["aria-valuemax"] = 100);
      let g = a - 100;
      y && (g = -g), (f.bar1.transform = `translateX(${g}%)`);
    }
    if (l === "buffer" && s !== void 0) {
      let g = (s || 0) - 100;
      y && (g = -g), (f.bar2.transform = `translateX(${g}%)`);
    }
    return w.jsxs(Ky, {
      className: U(h.root, n),
      ownerState: u,
      role: "progressbar",
      ...d,
      ref: r,
      ...c,
      children: [
        l === "buffer"
          ? w.jsx(qy, { className: h.dashed, ownerState: u })
          : null,
        w.jsx(Yy, { className: h.bar1, ownerState: u, style: f.bar1 }),
        l === "determinate"
          ? null
          : w.jsx(Xy, { className: h.bar2, ownerState: u, style: f.bar2 }),
      ],
    });
  }),
  fr = m.createContext({});
function Jy(e) {
  return ce("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const Qy = (e) => {
    const { classes: t, disablePadding: r, dense: o, subheader: n } = e;
    return ue(
      { root: ["root", !r && "padding", o && "dense", n && "subheader"] },
      Jy,
      t,
    );
  },
  Zy = D("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disablePadding && t.padding,
        r.dense && t.dense,
        r.subheader && t.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  ev = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiList" }),
      {
        children: n,
        className: i,
        component: a = "ul",
        dense: s = !1,
        disablePadding: l = !1,
        subheader: c,
        ...u
      } = o,
      h = m.useMemo(() => ({ dense: s }), [s]),
      y = { ...o, component: a, dense: s, disablePadding: l },
      d = Qy(y);
    return w.jsx(fr.Provider, {
      value: h,
      children: w.jsxs(Zy, {
        as: a,
        className: U(d.root, i),
        ref: r,
        ownerState: y,
        ...u,
        children: [c, n],
      }),
    });
  });
function tv(e) {
  return ce("MuiListItemButton", e);
}
const Xr = de("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  rv = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === "flex-start" && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  ov = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: o,
        disabled: n,
        disableGutters: i,
        divider: a,
        selected: s,
      } = e,
      c = ue(
        {
          root: [
            "root",
            o && "dense",
            !i && "gutters",
            a && "divider",
            n && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            s && "selected",
          ],
        },
        tv,
        r,
      );
    return { ...r, ...c };
  },
  nv = D(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: rv,
  })(
    ie(({ theme: e }) => ({
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minWidth: 0,
      boxSizing: "border-box",
      textAlign: "left",
      paddingTop: 8,
      paddingBottom: 8,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest,
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Xr.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity,
        ),
        [`&.${Xr.focusVisible}`]: {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
          ),
        },
      },
      [`&.${Xr.selected}:hover`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
        ),
        "@media (hover: none)": {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            (e.vars || e).palette.action.selectedOpacity,
          ),
        },
      },
      [`&.${Xr.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Xr.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
      ],
    })),
  ),
  P0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: n = "center",
        autoFocus: i = !1,
        component: a = "div",
        children: s,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: h,
        selected: y = !1,
        className: d,
        ...f
      } = o,
      g = m.useContext(fr),
      b = m.useMemo(
        () => ({ dense: l || g.dense || !1, alignItems: n, disableGutters: c }),
        [n, g.dense, l, c],
      ),
      x = m.useRef(null);
    at(() => {
      i && x.current && x.current.focus();
    }, [i]);
    const k = {
        ...o,
        alignItems: n,
        dense: b.dense,
        disableGutters: c,
        divider: u,
        selected: y,
      },
      S = ov(k),
      v = He(x, r);
    return w.jsx(fr.Provider, {
      value: b,
      children: w.jsx(nv, {
        ref: v,
        href: f.href || f.to,
        component: (f.href || f.to) && a === "div" ? "button" : a,
        focusVisibleClassName: U(S.focusVisible, h),
        ownerState: k,
        className: U(S.root, d),
        ...f,
        classes: S,
        children: s,
      }),
    });
  });
function iv(e) {
  return ce("MuiListItemIcon", e);
}
const ws = de("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  av = (e) => {
    const { alignItems: t, classes: r } = e;
    return ue(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      iv,
      r,
    );
  },
  sv = D("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
    },
  })(
    ie(({ theme: e }) => ({
      minWidth: 56,
      color: (e.vars || e).palette.action.active,
      flexShrink: 0,
      display: "inline-flex",
      variants: [
        { props: { alignItems: "flex-start" }, style: { marginTop: 8 } },
      ],
    })),
  ),
  E0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiListItemIcon" }),
      { className: n, ...i } = o,
      a = m.useContext(fr),
      s = { ...o, alignItems: a.alignItems },
      l = av(s);
    return w.jsx(sv, { className: U(l.root, n), ownerState: s, ref: r, ...i });
  });
function lv(e) {
  return ce("MuiListItemText", e);
}
const Tr = de("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  cv = (e) => {
    const { classes: t, inset: r, primary: o, secondary: n, dense: i } = e;
    return ue(
      {
        root: ["root", r && "inset", i && "dense", o && n && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      lv,
      t,
    );
  },
  uv = D("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${Tr.primary}`]: t.primary },
        { [`& .${Tr.secondary}`]: t.secondary },
        t.root,
        r.inset && t.inset,
        r.primary && r.secondary && t.multiline,
        r.dense && t.dense,
      ];
    },
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${Xa.root}:where(& .${Tr.primary}), .${Xa.root}:where(& .${Tr.secondary})`]:
      { display: "block" },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  I0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiListItemText" }),
      {
        children: n,
        className: i,
        disableTypography: a = !1,
        inset: s = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: h,
        slots: y = {},
        slotProps: d = {},
        ...f
      } = o,
      { dense: g } = m.useContext(fr);
    let b = l ?? n,
      x = u;
    const k = {
        ...o,
        disableTypography: a,
        inset: s,
        primary: !!b,
        secondary: !!x,
        dense: g,
      },
      S = cv(k),
      v = { slots: y, slotProps: { primary: c, secondary: h, ...d } },
      [C, R] = fe("root", {
        className: U(S.root, i),
        elementType: uv,
        externalForwardedProps: { ...v, ...f },
        ownerState: k,
        ref: r,
      }),
      [P, I] = fe("primary", {
        className: S.primary,
        elementType: Rr,
        externalForwardedProps: v,
        ownerState: k,
      }),
      [A, O] = fe("secondary", {
        className: S.secondary,
        elementType: Rr,
        externalForwardedProps: v,
        ownerState: k,
      });
    return (
      b != null &&
        b.type !== Rr &&
        !a &&
        (b = w.jsx(P, {
          variant: g ? "body2" : "body1",
          component: I != null && I.variant ? void 0 : "span",
          ...I,
          children: b,
        })),
      x != null &&
        x.type !== Rr &&
        !a &&
        (x = w.jsx(A, {
          variant: "body2",
          color: "textSecondary",
          ...O,
          children: x,
        })),
      w.jsxs(C, { ...R, children: [b, x] })
    );
  });
function Kn(e, t, r) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : r
        ? null
        : e.firstChild;
}
function ks(e, t, r) {
  return e === t
    ? r
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : r
        ? null
        : e.lastChild;
}
function ec(e, t) {
  if (t === void 0) return !0;
  let r = e.innerText;
  return (
    r === void 0 && (r = e.textContent),
    (r = r.trim().toLowerCase()),
    r.length === 0
      ? !1
      : t.repeating
        ? r[0] === t.keys[0]
        : r.startsWith(t.keys.join(""))
  );
}
function Jr(e, t, r, o, n, i) {
  let a = !1,
    s = n(e, t, t ? r : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const l = o ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !ec(s, i) || l) s = n(e, s, r);
    else return s.focus(), !0;
  }
  return !1;
}
const dv = m.forwardRef(function (t, r) {
  const {
      actions: o,
      autoFocus: n = !1,
      autoFocusItem: i = !1,
      children: a,
      className: s,
      disabledItemsFocusable: l = !1,
      disableListWrap: c = !1,
      onKeyDown: u,
      variant: h = "selectedMenu",
      ...y
    } = t,
    d = m.useRef(null),
    f = m.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  at(() => {
    n && d.current.focus();
  }, [n]),
    m.useImperativeHandle(
      o,
      () => ({
        adjustStyleForScrollbar: (S, { direction: v }) => {
          const C = !d.current.style.width;
          if (S.clientHeight < d.current.clientHeight && C) {
            const R = `${Xl(Ct(S))}px`;
            (d.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = R),
              (d.current.style.width = `calc(100% + ${R})`);
          }
          return d.current;
        },
      }),
      [],
    );
  const g = (S) => {
      const v = d.current,
        C = S.key;
      if (S.ctrlKey || S.metaKey || S.altKey) {
        u && u(S);
        return;
      }
      const P = no(Ye(v));
      if (C === "ArrowDown") S.preventDefault(), Jr(v, P, c, l, Kn);
      else if (C === "ArrowUp") S.preventDefault(), Jr(v, P, c, l, ks);
      else if (C === "Home") S.preventDefault(), Jr(v, null, c, l, Kn);
      else if (C === "End") S.preventDefault(), Jr(v, null, c, l, ks);
      else if (C.length === 1) {
        const I = f.current,
          A = C.toLowerCase(),
          O = performance.now();
        I.keys.length > 0 &&
          (O - I.lastTime > 500
            ? ((I.keys = []), (I.repeating = !0), (I.previousKeyMatched = !0))
            : I.repeating && A !== I.keys[0] && (I.repeating = !1)),
          (I.lastTime = O),
          I.keys.push(A);
        const L = P && !I.repeating && ec(P, I);
        I.previousKeyMatched && (L || Jr(v, P, !1, l, Kn, I))
          ? S.preventDefault()
          : (I.previousKeyMatched = !1);
      }
      u && u(S);
    },
    b = He(d, r);
  let x = -1;
  m.Children.forEach(a, (S, v) => {
    if (!m.isValidElement(S)) {
      x === v && ((x += 1), x >= a.length && (x = -1));
      return;
    }
    S.props.disabled ||
      (((h === "selectedMenu" && S.props.selected) || x === -1) && (x = v)),
      x === v &&
        (S.props.disabled ||
          S.props.muiSkipListHighlight ||
          S.type.muiSkipListHighlight) &&
        ((x += 1), x >= a.length && (x = -1));
  });
  const k = m.Children.map(a, (S, v) => {
    if (v === x) {
      const C = {};
      return (
        i && (C.autoFocus = !0),
        S.props.tabIndex === void 0 && h === "selectedMenu" && (C.tabIndex = 0),
        m.cloneElement(S, C)
      );
    }
    return S;
  });
  return w.jsx(ev, {
    role: "menu",
    ref: b,
    className: s,
    onKeyDown: g,
    tabIndex: n ? 0 : -1,
    ...y,
    children: k,
  });
});
function pv(e) {
  return ce("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
function Rs(e, t) {
  let r = 0;
  return (
    typeof t == "number"
      ? (r = t)
      : t === "center"
        ? (r = e.height / 2)
        : t === "bottom" && (r = e.height),
    r
  );
}
function Ts(e, t) {
  let r = 0;
  return (
    typeof t == "number"
      ? (r = t)
      : t === "center"
        ? (r = e.width / 2)
        : t === "right" && (r = e.width),
    r
  );
}
function $s(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function zo(e) {
  return typeof e == "function" ? e() : e;
}
const fv = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"], paper: ["paper"] }, pv, t);
  },
  mv = D(Qi, { name: "MuiPopover", slot: "Root" })({}),
  tc = D(Hr, { name: "MuiPopover", slot: "Paper" })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  gv = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiPopover" }),
      {
        action: n,
        anchorEl: i,
        anchorOrigin: a = { vertical: "top", horizontal: "left" },
        anchorPosition: s,
        anchorReference: l = "anchorEl",
        children: c,
        className: u,
        container: h,
        elevation: y = 8,
        marginThreshold: d = 16,
        open: f,
        PaperProps: g = {},
        slots: b = {},
        slotProps: x = {},
        transformOrigin: k = { vertical: "top", horizontal: "left" },
        TransitionComponent: S,
        transitionDuration: v = "auto",
        TransitionProps: C = {},
        disableScrollLock: R = !1,
        ...P
      } = o,
      I = m.useRef(),
      A = {
        ...o,
        anchorOrigin: a,
        anchorReference: l,
        elevation: y,
        marginThreshold: d,
        transformOrigin: k,
        TransitionComponent: S,
        transitionDuration: v,
        TransitionProps: C,
      },
      O = fv(A),
      L = m.useCallback(() => {
        if (l === "anchorPosition") return s;
        const Z = zo(i),
          ne = (
            Z && Z.nodeType === 1 ? Z : Ye(I.current).body
          ).getBoundingClientRect();
        return {
          top: ne.top + Rs(ne, a.vertical),
          left: ne.left + Ts(ne, a.horizontal),
        };
      }, [i, a.horizontal, a.vertical, s, l]),
      p = m.useCallback(
        (Z) => ({
          vertical: Rs(Z, k.vertical),
          horizontal: Ts(Z, k.horizontal),
        }),
        [k.horizontal, k.vertical],
      ),
      $ = m.useCallback(
        (Z) => {
          const se = { width: Z.offsetWidth, height: Z.offsetHeight },
            ne = p(se);
          if (l === "none")
            return { top: null, left: null, transformOrigin: $s(ne) };
          const oe = L();
          let Y = oe.top - ne.vertical,
            le = oe.left - ne.horizontal;
          const Ae = Y + se.height,
            Se = le + se.width,
            Pe = Ct(zo(i)),
            Ee = Pe.innerHeight - d,
            Me = Pe.innerWidth - d;
          if (d !== null && Y < d) {
            const Re = Y - d;
            (Y -= Re), (ne.vertical += Re);
          } else if (d !== null && Ae > Ee) {
            const Re = Ae - Ee;
            (Y -= Re), (ne.vertical += Re);
          }
          if (d !== null && le < d) {
            const Re = le - d;
            (le -= Re), (ne.horizontal += Re);
          } else if (Se > Me) {
            const Re = Se - Me;
            (le -= Re), (ne.horizontal += Re);
          }
          return {
            top: `${Math.round(Y)}px`,
            left: `${Math.round(le)}px`,
            transformOrigin: $s(ne),
          };
        },
        [i, l, L, p, d],
      ),
      [T, M] = m.useState(f),
      E = m.useCallback(() => {
        const Z = I.current;
        if (!Z) return;
        const se = $(Z);
        se.top !== null && Z.style.setProperty("top", se.top),
          se.left !== null && (Z.style.left = se.left),
          (Z.style.transformOrigin = se.transformOrigin),
          M(!0);
      }, [$]);
    m.useEffect(
      () => (
        R && window.addEventListener("scroll", E),
        () => window.removeEventListener("scroll", E)
      ),
      [i, R, E],
    );
    const F = () => {
        E();
      },
      B = () => {
        M(!1);
      };
    m.useEffect(() => {
      f && E();
    }),
      m.useImperativeHandle(
        n,
        () =>
          f
            ? {
                updatePosition: () => {
                  E();
                },
              }
            : null,
        [f, E],
      ),
      m.useEffect(() => {
        if (!f) return;
        const Z = Di(() => {
            E();
          }),
          se = Ct(zo(i));
        return (
          se.addEventListener("resize", Z),
          () => {
            Z.clear(), se.removeEventListener("resize", Z);
          }
        );
      }, [i, f, E]);
    let j = v;
    const G = {
        slots: { transition: S, ...b },
        slotProps: { transition: C, paper: g, ...x },
      },
      [H, X] = fe("transition", {
        elementType: bo,
        externalForwardedProps: G,
        ownerState: A,
        getSlotProps: (Z) => ({
          ...Z,
          onEntering: (se, ne) => {
            var oe;
            (oe = Z.onEntering) == null || oe.call(Z, se, ne), F();
          },
          onExited: (se) => {
            var ne;
            (ne = Z.onExited) == null || ne.call(Z, se), B();
          },
        }),
        additionalProps: { appear: !0, in: f },
      });
    v === "auto" && !H.muiSupportAuto && (j = void 0);
    const ee = h || (i ? Ye(zo(i)).body : void 0),
      [ye, { slots: J, slotProps: _, ...te }] = fe("root", {
        ref: r,
        elementType: mv,
        externalForwardedProps: { ...G, ...P },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: b.backdrop },
          slotProps: {
            backdrop: Pl(
              typeof x.backdrop == "function" ? x.backdrop(A) : x.backdrop,
              { invisible: !0 },
            ),
          },
          container: ee,
          open: f,
        },
        ownerState: A,
        className: U(O.root, u),
      }),
      [me, ve] = fe("paper", {
        ref: I,
        className: O.paper,
        elementType: tc,
        externalForwardedProps: G,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: y, style: T ? void 0 : { opacity: 0 } },
        ownerState: A,
      });
    return w.jsx(ye, {
      ...te,
      ...(!Kt(ye) && { slots: J, slotProps: _, disableScrollLock: R }),
      children: w.jsx(H, {
        ...X,
        timeout: j,
        children: w.jsx(me, { ...ve, children: c }),
      }),
    });
  });
function hv(e) {
  return ce("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const yv = { vertical: "top", horizontal: "right" },
  vv = { vertical: "top", horizontal: "left" },
  bv = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"], paper: ["paper"], list: ["list"] }, hv, t);
  },
  xv = D(gv, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
  })({}),
  Sv = D(tc, { name: "MuiMenu", slot: "Paper" })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch",
  }),
  Cv = D(dv, { name: "MuiMenu", slot: "List" })({ outline: 0 }),
  wv = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiMenu" }),
      {
        autoFocus: n = !0,
        children: i,
        className: a,
        disableAutoFocusItem: s = !1,
        MenuListProps: l = {},
        onClose: c,
        open: u,
        PaperProps: h = {},
        PopoverClasses: y,
        transitionDuration: d = "auto",
        TransitionProps: { onEntering: f, ...g } = {},
        variant: b = "selectedMenu",
        slots: x = {},
        slotProps: k = {},
        ...S
      } = o,
      v = Dr(),
      C = {
        ...o,
        autoFocus: n,
        disableAutoFocusItem: s,
        MenuListProps: l,
        onEntering: f,
        PaperProps: h,
        transitionDuration: d,
        TransitionProps: g,
        variant: b,
      },
      R = bv(C),
      P = n && !s && u,
      I = m.useRef(null),
      A = (j, G) => {
        I.current &&
          I.current.adjustStyleForScrollbar(j, {
            direction: v ? "rtl" : "ltr",
          }),
          f && f(j, G);
      },
      O = (j) => {
        j.key === "Tab" && (j.preventDefault(), c && c(j, "tabKeyDown"));
      };
    let L = -1;
    m.Children.map(i, (j, G) => {
      m.isValidElement(j) &&
        (j.props.disabled ||
          (((b === "selectedMenu" && j.props.selected) || L === -1) &&
            (L = G)));
    });
    const p = {
        slots: x,
        slotProps: { list: l, transition: g, paper: h, ...k },
      },
      $ = Tt({
        elementType: x.root,
        externalSlotProps: k.root,
        ownerState: C,
        className: [R.root, a],
      }),
      [T, M] = fe("paper", {
        className: R.paper,
        elementType: Sv,
        externalForwardedProps: p,
        shouldForwardComponentProp: !0,
        ownerState: C,
      }),
      [E, F] = fe("list", {
        className: U(R.list, l.className),
        elementType: Cv,
        shouldForwardComponentProp: !0,
        externalForwardedProps: p,
        getSlotProps: (j) => ({
          ...j,
          onKeyDown: (G) => {
            var H;
            O(G), (H = j.onKeyDown) == null || H.call(j, G);
          },
        }),
        ownerState: C,
      }),
      B =
        typeof p.slotProps.transition == "function"
          ? p.slotProps.transition(C)
          : p.slotProps.transition;
    return w.jsx(xv, {
      onClose: c,
      anchorOrigin: { vertical: "bottom", horizontal: v ? "right" : "left" },
      transformOrigin: v ? yv : vv,
      slots: {
        root: x.root,
        paper: T,
        backdrop: x.backdrop,
        ...(x.transition && { transition: x.transition }),
      },
      slotProps: {
        root: $,
        paper: M,
        backdrop: typeof k.backdrop == "function" ? k.backdrop(C) : k.backdrop,
        transition: {
          ...B,
          onEntering: (...j) => {
            var G;
            A(...j),
              (G = B == null ? void 0 : B.onEntering) == null ||
                G.call(B, ...j);
          },
        },
      },
      open: u,
      ref: r,
      transitionDuration: d,
      ownerState: C,
      ...S,
      classes: y,
      children: w.jsx(E, {
        actions: I,
        autoFocus: n && (L === -1 || s),
        autoFocusItem: P,
        variant: b,
        ...F,
        children: i,
      }),
    });
  });
function kv(e) {
  return ce("MuiMenuItem", e);
}
const Qr = de("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Rv = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  Tv = (e) => {
    const {
        disabled: t,
        dense: r,
        divider: o,
        disableGutters: n,
        selected: i,
        classes: a,
      } = e,
      l = ue(
        {
          root: [
            "root",
            r && "dense",
            t && "disabled",
            !n && "gutters",
            o && "divider",
            i && "selected",
          ],
        },
        kv,
        a,
      );
    return { ...a, ...l };
  },
  $v = D(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: Rv,
  })(
    ie(({ theme: e }) => ({
      ...e.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${Qr.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity,
        ),
        [`&.${Qr.focusVisible}`]: {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
          ),
        },
      },
      [`&.${Qr.selected}:hover`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
        ),
        "@media (hover: none)": {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            (e.vars || e).palette.action.selectedOpacity,
          ),
        },
      },
      [`&.${Qr.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      [`&.${Qr.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
      },
      [`& + .${ys.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${ys.inset}`]: { marginLeft: 52 },
      [`& .${Tr.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${Tr.inset}`]: { paddingLeft: 36 },
      [`& .${ws.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: t }) => !t.dense,
          style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${ws.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    })),
  ),
  M0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: n = !1,
        component: i = "li",
        dense: a = !1,
        divider: s = !1,
        disableGutters: l = !1,
        focusVisibleClassName: c,
        role: u = "menuitem",
        tabIndex: h,
        className: y,
        ...d
      } = o,
      f = m.useContext(fr),
      g = m.useMemo(
        () => ({ dense: a || f.dense || !1, disableGutters: l }),
        [f.dense, a, l],
      ),
      b = m.useRef(null);
    at(() => {
      n && b.current && b.current.focus();
    }, [n]);
    const x = { ...o, dense: g.dense, divider: s, disableGutters: l },
      k = Tv(o),
      S = He(b, r);
    let v;
    return (
      o.disabled || (v = h !== void 0 ? h : -1),
      w.jsx(fr.Provider, {
        value: g,
        children: w.jsx($v, {
          ref: S,
          role: u,
          tabIndex: v,
          component: i,
          focusVisibleClassName: U(k.focusVisible, c),
          className: U(k.root, y),
          ...d,
          ownerState: x,
          classes: k,
        }),
      })
    );
  });
function Pv(e) {
  return ce("MuiNativeSelect", e);
}
const ra = de("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  Ev = (e) => {
    const {
        classes: t,
        variant: r,
        disabled: o,
        multiple: n,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", r, o && "disabled", n && "multiple", a && "error"],
        icon: ["icon", `icon${z(r)}`, i && "iconOpen", o && "disabled"],
      };
    return ue(s, Pv, t);
  },
  rc = D("select", { name: "MuiNativeSelect" })(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${ra.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== "filled" && t.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  Iv = D(rc, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rt,
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.select,
        t[r.variant],
        r.error && t.error,
        { [`&.${ra.multiple}`]: t.multiple },
      ];
    },
  })({}),
  oc = D("svg", { name: "MuiNativeSelect" })(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${ra.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  Mv = D(oc, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${z(r.variant)}`],
        r.open && t.iconOpen,
      ];
    },
  })({}),
  Av = m.forwardRef(function (t, r) {
    const {
        className: o,
        disabled: n,
        error: i,
        IconComponent: a,
        inputRef: s,
        variant: l = "standard",
        ...c
      } = t,
      u = { ...t, disabled: n, variant: l, error: i },
      h = Ev(u);
    return w.jsxs(m.Fragment, {
      children: [
        w.jsx(Iv, {
          ownerState: u,
          className: U(h.select, o),
          disabled: n,
          ref: s || r,
          ...c,
        }),
        t.multiple
          ? null
          : w.jsx(Mv, { as: a, ownerState: u, className: h.icon }),
      ],
    });
  });
var Ps;
const Ov = D("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: rt })(
    {
      textAlign: "left",
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden",
      minWidth: "0%",
    },
  ),
  Lv = D("legend", { name: "MuiNotchedOutlined", shouldForwardProp: rt })(
    ie(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function Bv(e) {
  const {
      children: t,
      classes: r,
      className: o,
      label: n,
      notched: i,
      ...a
    } = e,
    s = n != null && n !== "",
    l = { ...e, notched: i, withLabel: s };
  return w.jsx(Ov, {
    "aria-hidden": !0,
    className: o,
    ownerState: l,
    ...a,
    children: w.jsx(Lv, {
      ownerState: l,
      children: s
        ? w.jsx("span", { children: n })
        : Ps ||
          (Ps = w.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const Nv = (e) => {
    const { classes: t } = e,
      o = ue(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        jg,
        t,
      );
    return { ...t, ...o };
  },
  zv = D(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Pn,
  })(
    ie(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Rt.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Rt.notchedOutline}`]: {
            borderColor: e.vars
              ? e.alpha(e.vars.palette.common.onBackground, 0.23)
              : t,
          },
        },
        [`&.${Rt.focused} .${Rt.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(De())
            .map(([r]) => ({
              props: { color: r },
              style: {
                [`&.${Rt.focused} .${Rt.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[r].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Rt.error} .${Rt.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Rt.disabled} .${Rt.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: r }) => r.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: r }) => r.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: r }) => r.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: r, size: o }) => r.multiline && o === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    }),
  ),
  jv = D(Bv, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(
    ie(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? e.alpha(e.vars.palette.common.onBackground, 0.23)
          : t,
      };
    }),
  ),
  Fv = D(Mn, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: En,
  })(
    ie(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    })),
  ),
  oa = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiOutlinedInput" }),
      {
        components: n = {},
        fullWidth: i = !1,
        inputComponent: a = "input",
        label: s,
        multiline: l = !1,
        notched: c,
        slots: u = {},
        slotProps: h = {},
        type: y = "text",
        ...d
      } = o,
      f = Nv(o),
      g = Zt(),
      b = Vr({
        props: o,
        muiFormControl: g,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      x = {
        ...o,
        color: b.color || "primary",
        disabled: b.disabled,
        error: b.error,
        focused: b.focused,
        formControl: g,
        fullWidth: i,
        hiddenLabel: b.hiddenLabel,
        multiline: l,
        size: b.size,
        type: y,
      },
      k = u.root ?? n.Root ?? zv,
      S = u.input ?? n.Input ?? Fv,
      [v, C] = fe("notchedOutline", {
        elementType: jv,
        className: f.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: x,
        externalForwardedProps: { slots: u, slotProps: h },
        additionalProps: {
          label:
            s != null && s !== "" && b.required
              ? w.jsxs(m.Fragment, { children: [s, " ", "*"] })
              : s,
        },
      });
    return w.jsx(Ji, {
      slots: { root: k, input: S },
      slotProps: h,
      renderSuffix: (R) =>
        w.jsx(v, {
          ...C,
          notched:
            typeof c < "u" ? c : !!(R.startAdornment || R.filled || R.focused),
        }),
      fullWidth: i,
      inputComponent: a,
      multiline: l,
      ref: r,
      type: y,
      ...d,
      classes: { ...f, notchedOutline: null },
    });
  });
oa.muiName = "Input";
const Dv = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};
function nc(e) {
  return ce("MuiSelect", e);
}
const Zr = de("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Es;
const Wv = D(rc, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`&.${Zr.select}`]: t.select },
        { [`&.${Zr.select}`]: t[r.variant] },
        { [`&.${Zr.error}`]: t.error },
        { [`&.${Zr.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${Zr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  Hv = D(oc, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${z(r.variant)}`],
        r.open && t.iconOpen,
      ];
    },
  })({}),
  Vv = D("input", {
    shouldForwardProp: (e) => kn(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Is(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Uv(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const _v = (e) => {
    const {
        classes: t,
        variant: r,
        disabled: o,
        multiple: n,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", r, o && "disabled", n && "multiple", a && "error"],
        icon: ["icon", `icon${z(r)}`, i && "iconOpen", o && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ue(s, nc, t);
  },
  Gv = m.forwardRef(function (t, r) {
    var Vt, Lt, Ut, _t;
    const {
        "aria-describedby": o,
        "aria-label": n,
        autoFocus: i,
        autoWidth: a,
        children: s,
        className: l,
        defaultOpen: c,
        defaultValue: u,
        disabled: h,
        displayEmpty: y,
        error: d = !1,
        IconComponent: f,
        inputRef: g,
        labelId: b,
        MenuProps: x = {},
        multiple: k,
        name: S,
        onBlur: v,
        onChange: C,
        onClose: R,
        onFocus: P,
        onKeyDown: I,
        onMouseDown: A,
        onOpen: O,
        open: L,
        readOnly: p,
        renderValue: $,
        required: T,
        SelectDisplayProps: M = {},
        tabIndex: E,
        type: F,
        value: B,
        variant: j = "standard",
        ...G
      } = t,
      [H, X] = ho({ controlled: B, default: u, name: "Select" }),
      [ee, ye] = ho({ controlled: L, default: c, name: "Select" }),
      J = m.useRef(null),
      _ = m.useRef(null),
      [te, me] = m.useState(null),
      { current: ve } = m.useRef(L != null),
      [Z, se] = m.useState(),
      ne = He(r, g),
      oe = m.useCallback((ae) => {
        (_.current = ae), ae && me(ae);
      }, []),
      Y = te == null ? void 0 : te.parentNode;
    m.useImperativeHandle(
      ne,
      () => ({
        focus: () => {
          _.current.focus();
        },
        node: J.current,
        value: H,
      }),
      [H],
    );
    const le = te !== null && ee;
    m.useEffect(() => {
      if (!le || !Y || a || typeof ResizeObserver > "u") return;
      const ae = new ResizeObserver(() => {
        se(Y.clientWidth);
      });
      return (
        ae.observe(Y),
        () => {
          ae.disconnect();
        }
      );
    }, [le, Y, a]),
      m.useEffect(() => {
        c &&
          ee &&
          te &&
          !ve &&
          (se(a ? null : Y.clientWidth), _.current.focus());
      }, [te, a]),
      m.useEffect(() => {
        i && _.current.focus();
      }, [i]),
      m.useEffect(() => {
        if (!b) return;
        const ae = Ye(_.current).getElementById(b);
        if (ae) {
          const ge = () => {
            getSelection().isCollapsed && _.current.focus();
          };
          return (
            ae.addEventListener("click", ge),
            () => {
              ae.removeEventListener("click", ge);
            }
          );
        }
      }, [b]);
    const Ae = (ae, ge) => {
        ae ? O && O(ge) : R && R(ge),
          ve || (se(a ? null : Y.clientWidth), ye(ae));
      },
      Se = (ae) => {
        A == null || A(ae),
          ae.button === 0 &&
            (ae.preventDefault(), _.current.focus(), Ae(!0, ae));
      },
      Pe = (ae) => {
        Ae(!1, ae);
      },
      Ee = m.Children.toArray(s),
      Me = (ae) => {
        const ge = Ee.find((Te) => Te.props.value === ae.target.value);
        ge !== void 0 && (X(ge.props.value), C && C(ae, ge));
      },
      Re = (ae) => (ge) => {
        let Te;
        if (ge.currentTarget.hasAttribute("tabindex")) {
          if (k) {
            Te = Array.isArray(H) ? H.slice() : [];
            const ut = H.indexOf(ae.props.value);
            ut === -1 ? Te.push(ae.props.value) : Te.splice(ut, 1);
          } else Te = ae.props.value;
          if (
            (ae.props.onClick && ae.props.onClick(ge), H !== Te && (X(Te), C))
          ) {
            const ut = ge.nativeEvent || ge,
              Bt = new ut.constructor(ut.type, ut);
            Object.defineProperty(Bt, "target", {
              writable: !0,
              value: { value: Te, name: S },
            }),
              C(Bt, ae);
          }
          k || Ae(!1, ge);
        }
      },
      re = (ae) => {
        p ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(ae.key) &&
            (ae.preventDefault(), Ae(!0, ae)),
          I == null || I(ae));
      },
      Ve = (ae) => {
        !le &&
          v &&
          (Object.defineProperty(ae, "target", {
            writable: !0,
            value: { value: H, name: S },
          }),
          v(ae));
      };
    delete G["aria-invalid"];
    let Ie, W;
    const V = [];
    let Q = !1;
    (an({ value: H }) || y) && ($ ? (Ie = $(H)) : (Q = !0));
    const he = Ee.map((ae) => {
      if (!m.isValidElement(ae)) return null;
      let ge;
      if (k) {
        if (!Array.isArray(H)) throw new Error(Ft(2));
        (ge = H.some((Te) => Is(Te, ae.props.value))),
          ge && Q && V.push(ae.props.children);
      } else (ge = Is(H, ae.props.value)), ge && Q && (W = ae.props.children);
      return m.cloneElement(ae, {
        "aria-selected": ge ? "true" : "false",
        onClick: Re(ae),
        onKeyUp: (Te) => {
          Te.key === " " && Te.preventDefault(),
            ae.props.onKeyUp && ae.props.onKeyUp(Te);
        },
        role: "option",
        selected: ge,
        value: void 0,
        "data-value": ae.props.value,
      });
    });
    Q &&
      (k
        ? V.length === 0
          ? (Ie = null)
          : (Ie = V.reduce(
              (ae, ge, Te) => (
                ae.push(ge), Te < V.length - 1 && ae.push(", "), ae
              ),
              [],
            ))
        : (Ie = W));
    let xe = Z;
    !a && ve && te && (xe = Y.clientWidth);
    let q;
    typeof E < "u" ? (q = E) : (q = h ? null : 0);
    const K = M.id || (S ? `mui-component-select-${S}` : void 0),
      ke = { ...t, variant: j, value: H, open: le, error: d },
      be = _v(ke),
      we = {
        ...x.PaperProps,
        ...(typeof ((Vt = x.slotProps) == null ? void 0 : Vt.paper) ==
        "function"
          ? x.slotProps.paper(ke)
          : (Lt = x.slotProps) == null
            ? void 0
            : Lt.paper),
      },
      vt = {
        ...x.MenuListProps,
        ...(typeof ((Ut = x.slotProps) == null ? void 0 : Ut.list) == "function"
          ? x.slotProps.list(ke)
          : (_t = x.slotProps) == null
            ? void 0
            : _t.list),
      },
      Ht = mr();
    return w.jsxs(m.Fragment, {
      children: [
        w.jsx(Wv, {
          as: "div",
          ref: oe,
          tabIndex: q,
          role: "combobox",
          "aria-controls": le ? Ht : void 0,
          "aria-disabled": h ? "true" : void 0,
          "aria-expanded": le ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [b, K].filter(Boolean).join(" ") || void 0,
          "aria-describedby": o,
          "aria-required": T ? "true" : void 0,
          "aria-invalid": d ? "true" : void 0,
          onKeyDown: re,
          onMouseDown: h || p ? null : Se,
          onBlur: Ve,
          onFocus: P,
          ...M,
          ownerState: ke,
          className: U(M.className, be.select, l),
          id: K,
          children: Uv(Ie)
            ? Es ||
              (Es = w.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : Ie,
        }),
        w.jsx(Vv, {
          "aria-invalid": d,
          value: Array.isArray(H) ? H.join(",") : H,
          name: S,
          ref: J,
          "aria-hidden": !0,
          onChange: Me,
          tabIndex: -1,
          disabled: h,
          className: be.nativeInput,
          autoFocus: i,
          required: T,
          ...G,
          ownerState: ke,
        }),
        w.jsx(Hv, { as: f, className: be.icon, ownerState: ke }),
        w.jsx(wv, {
          id: `menu-${S || ""}`,
          anchorEl: Y,
          open: le,
          onClose: Pe,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...x,
          slotProps: {
            ...x.slotProps,
            list: {
              "aria-labelledby": b,
              role: "listbox",
              "aria-multiselectable": k ? "true" : void 0,
              disableListWrap: !0,
              id: Ht,
              ...vt,
            },
            paper: {
              ...we,
              style: { minWidth: xe, ...(we != null ? we.style : null) },
            },
          },
          children: he,
        }),
      ],
    });
  }),
  Kv = (e) => {
    const { classes: t } = e,
      o = ue({ root: ["root"] }, nc, t);
    return { ...t, ...o };
  },
  na = {
    name: "MuiSelect",
    slot: "Root",
    shouldForwardProp: (e) => rt(e) && e !== "variant",
  },
  qv = D(ea, na)(""),
  Yv = D(oa, na)(""),
  Xv = D(Zi, na)(""),
  ic = m.forwardRef(function (t, r) {
    const o = pe({ name: "MuiSelect", props: t }),
      {
        autoWidth: n = !1,
        children: i,
        classes: a = {},
        className: s,
        defaultOpen: l = !1,
        displayEmpty: c = !1,
        IconComponent: u = Dg,
        id: h,
        input: y,
        inputProps: d,
        label: f,
        labelId: g,
        MenuProps: b,
        multiple: x = !1,
        native: k = !1,
        onClose: S,
        onOpen: v,
        open: C,
        renderValue: R,
        SelectDisplayProps: P,
        variant: I = "outlined",
        ...A
      } = o,
      O = k ? Av : Gv,
      L = Zt(),
      p = Vr({ props: o, muiFormControl: L, states: ["variant", "error"] }),
      $ = p.variant || I,
      T = { ...o, variant: $, classes: a },
      M = Kv(T),
      { root: E, ...F } = M,
      B =
        y ||
        {
          standard: w.jsx(qv, { ownerState: T }),
          outlined: w.jsx(Yv, { label: f, ownerState: T }),
          filled: w.jsx(Xv, { ownerState: T }),
        }[$],
      j = He(r, Qt(B));
    return w.jsx(m.Fragment, {
      children: m.cloneElement(B, {
        inputComponent: O,
        inputProps: {
          children: i,
          error: p.error,
          IconComponent: u,
          variant: $,
          type: void 0,
          multiple: x,
          ...(k
            ? { id: h }
            : {
                autoWidth: n,
                defaultOpen: l,
                displayEmpty: c,
                labelId: g,
                MenuProps: b,
                onClose: S,
                onOpen: v,
                open: C,
                renderValue: R,
                SelectDisplayProps: { id: h, ...P },
              }),
          ...d,
          classes: d ? Xe(F, d.classes) : F,
          ...(y ? y.props.inputProps : {}),
        },
        ...(((x && k) || c) && $ === "outlined" ? { notched: !0 } : {}),
        ref: j,
        className: U(B.props.className, s, M.root),
        ...(!y && { variant: $ }),
        ...A,
      }),
    });
  });
ic.muiName = "Select";
function Jv(e, t, r = (o, n) => o === n) {
  return e.length === t.length && e.every((o, n) => r(o, t[n]));
}
const Qv = 2;
function Cr(e, t, r, o, n) {
  return r === 1 ? Math.min(e + t, n) : Math.max(e - t, o);
}
function ac(e, t) {
  return e - t;
}
function Ms(e, t) {
  const { index: r } =
    e.reduce((o, n, i) => {
      const a = Math.abs(t - n);
      return o === null || a < o.distance || a === o.distance
        ? { distance: a, index: i }
        : o;
    }, null) ?? {};
  return r;
}
function jo(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let o = 0; o < r.changedTouches.length; o += 1) {
      const n = r.changedTouches[o];
      if (n.identifier === t.current) return { x: n.clientX, y: n.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function sn(e, t, r) {
  return ((e - t) * 100) / (r - t);
}
function Zv(e, t, r) {
  return (r - t) * e + t;
}
function eb(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"),
      o = r[0].split(".")[1];
    return (o ? o.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function tb(e, t, r) {
  const o = Math.round((e - r) / t) * t + r;
  return Number(o.toFixed(eb(t)));
}
function As({ values: e, newValue: t, index: r }) {
  const o = e.slice();
  return (o[r] = t), o.sort(ac);
}
function Fo({ sliderRef: e, activeIndex: t, setActive: r }) {
  var n, i, a;
  const o = Ye(e.current);
  (!((n = e.current) != null && n.contains(o.activeElement)) ||
    Number(
      (i = o == null ? void 0 : o.activeElement) == null
        ? void 0
        : i.getAttribute("data-index"),
    ) !== t) &&
    ((a = e.current) == null ||
      a.querySelector(`[type="range"][data-index="${t}"]`).focus()),
    r && r(t);
}
function Do(e, t) {
  return typeof e == "number" && typeof t == "number"
    ? e === t
    : typeof e == "object" && typeof t == "object"
      ? Jv(e, t)
      : !1;
}
const rb = {
    horizontal: {
      offset: (e) => ({ left: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: {
      offset: (e) => ({ bottom: `${e}%` }),
      leap: (e) => ({ height: `${e}%` }),
    },
  },
  ob = (e) => e;
let Wo;
function Os() {
  return (
    Wo === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (Wo = CSS.supports("touch-action", "none"))
        : (Wo = !0)),
    Wo
  );
}
function nb(e) {
  const {
      "aria-labelledby": t,
      defaultValue: r,
      disabled: o = !1,
      disableSwap: n = !1,
      isRtl: i = !1,
      marks: a = !1,
      max: s = 100,
      min: l = 0,
      name: c,
      onChange: u,
      onChangeCommitted: h,
      orientation: y = "horizontal",
      rootRef: d,
      scale: f = ob,
      step: g = 1,
      shiftStep: b = 10,
      tabIndex: x,
      value: k,
    } = e,
    S = m.useRef(void 0),
    [v, C] = m.useState(-1),
    [R, P] = m.useState(-1),
    [I, A] = m.useState(!1),
    O = m.useRef(0),
    L = m.useRef(null),
    [p, $] = ho({ controlled: k, default: r ?? l, name: "Slider" }),
    T =
      u &&
      ((W, V, Q) => {
        const he = W.nativeEvent || W,
          xe = new he.constructor(he.type, he);
        Object.defineProperty(xe, "target", {
          writable: !0,
          value: { value: V, name: c },
        }),
          (L.current = V),
          u(xe, V, Q);
      }),
    M = Array.isArray(p);
  let E = M ? p.slice().sort(ac) : [p];
  E = E.map((W) => (W == null ? l : wr(W, l, s)));
  const F =
      a === !0 && g !== null
        ? [...Array(Math.floor((s - l) / g) + 1)].map((W, V) => ({
            value: l + g * V,
          }))
        : a || [],
    B = F.map((W) => W.value),
    [j, G] = m.useState(-1),
    H = m.useRef(null),
    X = He(d, H),
    ee = (W) => (V) => {
      var he;
      const Q = Number(V.currentTarget.getAttribute("data-index"));
      Ar(V.target) && G(Q),
        P(Q),
        (he = W == null ? void 0 : W.onFocus) == null || he.call(W, V);
    },
    ye = (W) => (V) => {
      var Q;
      Ar(V.target) || G(-1),
        P(-1),
        (Q = W == null ? void 0 : W.onBlur) == null || Q.call(W, V);
    },
    J = (W, V) => {
      const Q = Number(W.currentTarget.getAttribute("data-index")),
        he = E[Q],
        xe = B.indexOf(he);
      let q = V;
      if (F && g == null) {
        const K = B[B.length - 1];
        q >= K
          ? (q = K)
          : q <= B[0]
            ? (q = B[0])
            : (q = q < he ? B[xe - 1] : B[xe + 1]);
      }
      if (((q = wr(q, l, s)), M)) {
        n && (q = wr(q, E[Q - 1] || -1 / 0, E[Q + 1] || 1 / 0));
        const K = q;
        q = As({ values: E, newValue: q, index: Q });
        let ke = Q;
        n || (ke = q.indexOf(K)), Fo({ sliderRef: H, activeIndex: ke });
      }
      $(q), G(Q), T && !Do(q, p) && T(W, q, Q), h && h(W, L.current ?? q);
    },
    _ = (W) => (V) => {
      var Q;
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(V.key)
      ) {
        V.preventDefault();
        const he = Number(V.currentTarget.getAttribute("data-index")),
          xe = E[he];
        let q = null;
        if (g != null) {
          const K = V.shiftKey ? b : g;
          switch (V.key) {
            case "ArrowUp":
              q = Cr(xe, K, 1, l, s);
              break;
            case "ArrowRight":
              q = Cr(xe, K, i ? -1 : 1, l, s);
              break;
            case "ArrowDown":
              q = Cr(xe, K, -1, l, s);
              break;
            case "ArrowLeft":
              q = Cr(xe, K, i ? 1 : -1, l, s);
              break;
            case "PageUp":
              q = Cr(xe, b, 1, l, s);
              break;
            case "PageDown":
              q = Cr(xe, b, -1, l, s);
              break;
            case "Home":
              q = l;
              break;
            case "End":
              q = s;
              break;
          }
        } else if (F) {
          const K = B[B.length - 1],
            ke = B.indexOf(xe),
            be = [
              i ? "ArrowRight" : "ArrowLeft",
              "ArrowDown",
              "PageDown",
              "Home",
            ],
            we = [i ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
          be.includes(V.key)
            ? ke === 0
              ? (q = B[0])
              : (q = B[ke - 1])
            : we.includes(V.key) &&
              (ke === B.length - 1 ? (q = K) : (q = B[ke + 1]));
        }
        q != null && J(V, q);
      }
      (Q = W == null ? void 0 : W.onKeyDown) == null || Q.call(W, V);
    };
  at(() => {
    var W;
    o &&
      H.current.contains(document.activeElement) &&
      ((W = document.activeElement) == null || W.blur());
  }, [o]),
    o && v !== -1 && C(-1),
    o && j !== -1 && G(-1);
  const te = (W) => (V) => {
      var Q;
      (Q = W.onChange) == null || Q.call(W, V), J(V, V.target.valueAsNumber);
    },
    me = m.useRef(void 0);
  let ve = y;
  i && y === "horizontal" && (ve += "-reverse");
  const Z = ({ finger: W, move: V = !1 }) => {
      const { current: Q } = H,
        {
          width: he,
          height: xe,
          bottom: q,
          left: K,
        } = Q.getBoundingClientRect();
      let ke;
      ve.startsWith("vertical") ? (ke = (q - W.y) / xe) : (ke = (W.x - K) / he),
        ve.includes("-reverse") && (ke = 1 - ke);
      let be;
      if (((be = Zv(ke, l, s)), g)) be = tb(be, g, l);
      else {
        const vt = Ms(B, be);
        be = B[vt];
      }
      be = wr(be, l, s);
      let we = 0;
      if (M) {
        V ? (we = me.current) : (we = Ms(E, be)),
          n && (be = wr(be, E[we - 1] || -1 / 0, E[we + 1] || 1 / 0));
        const vt = be;
        (be = As({ values: E, newValue: be, index: we })),
          (n && V) || ((we = be.indexOf(vt)), (me.current = we));
      }
      return { newValue: be, activeIndex: we };
    },
    se = tt((W) => {
      const V = jo(W, S);
      if (!V) return;
      if (((O.current += 1), W.type === "mousemove" && W.buttons === 0)) {
        ne(W);
        return;
      }
      const { newValue: Q, activeIndex: he } = Z({ finger: V, move: !0 });
      Fo({ sliderRef: H, activeIndex: he, setActive: C }),
        $(Q),
        !I && O.current > Qv && A(!0),
        T && !Do(Q, p) && T(W, Q, he);
    }),
    ne = tt((W) => {
      const V = jo(W, S);
      if ((A(!1), !V)) return;
      const { newValue: Q } = Z({ finger: V, move: !0 });
      C(-1),
        W.type === "touchend" && P(-1),
        h && h(W, L.current ?? Q),
        (S.current = void 0),
        Y();
    }),
    oe = tt((W) => {
      if (o) return;
      Os() || W.preventDefault();
      const V = W.changedTouches[0];
      V != null && (S.current = V.identifier);
      const Q = jo(W, S);
      if (Q !== !1) {
        const { newValue: xe, activeIndex: q } = Z({ finger: Q });
        Fo({ sliderRef: H, activeIndex: q, setActive: C }),
          $(xe),
          T && !Do(xe, p) && T(W, xe, q);
      }
      O.current = 0;
      const he = Ye(H.current);
      he.addEventListener("touchmove", se, { passive: !0 }),
        he.addEventListener("touchend", ne, { passive: !0 });
    }),
    Y = m.useCallback(() => {
      const W = Ye(H.current);
      W.removeEventListener("mousemove", se),
        W.removeEventListener("mouseup", ne),
        W.removeEventListener("touchmove", se),
        W.removeEventListener("touchend", ne);
    }, [ne, se]);
  m.useEffect(() => {
    const { current: W } = H;
    return (
      W.addEventListener("touchstart", oe, { passive: Os() }),
      () => {
        W.removeEventListener("touchstart", oe), Y();
      }
    );
  }, [Y, oe]),
    m.useEffect(() => {
      o && Y();
    }, [o, Y]);
  const le = (W) => (V) => {
      var xe;
      if (
        ((xe = W.onMouseDown) == null || xe.call(W, V),
        o || V.defaultPrevented || V.button !== 0)
      )
        return;
      V.preventDefault();
      const Q = jo(V, S);
      if (Q !== !1) {
        const { newValue: q, activeIndex: K } = Z({ finger: Q });
        Fo({ sliderRef: H, activeIndex: K, setActive: C }),
          $(q),
          T && !Do(q, p) && T(V, q, K);
      }
      O.current = 0;
      const he = Ye(H.current);
      he.addEventListener("mousemove", se, { passive: !0 }),
        he.addEventListener("mouseup", ne);
    },
    Ae = sn(M ? E[0] : l, l, s),
    Se = sn(E[E.length - 1], l, s) - Ae,
    Pe = (W = {}) => {
      const V = lr(W),
        Q = { onMouseDown: le(V || {}) },
        he = { ...V, ...Q };
      return { ...W, ref: X, ...he };
    },
    Ee = (W) => (V) => {
      var he;
      (he = W.onMouseOver) == null || he.call(W, V);
      const Q = Number(V.currentTarget.getAttribute("data-index"));
      P(Q);
    },
    Me = (W) => (V) => {
      var Q;
      (Q = W.onMouseLeave) == null || Q.call(W, V), P(-1);
    },
    Re = (W = {}) => {
      const V = lr(W),
        Q = { onMouseOver: Ee(V || {}), onMouseLeave: Me(V || {}) };
      return { ...W, ...V, ...Q };
    },
    re = (W) => ({ pointerEvents: v !== -1 && v !== W ? "none" : void 0 });
  let Ve;
  return (
    y === "vertical" && (Ve = i ? "vertical-rl" : "vertical-lr"),
    {
      active: v,
      axis: ve,
      axisProps: rb,
      dragging: I,
      focusedThumbIndex: j,
      getHiddenInputProps: (W = {}) => {
        const V = lr(W),
          Q = {
            onChange: te(V || {}),
            onFocus: ee(V || {}),
            onBlur: ye(V || {}),
            onKeyDown: _(V || {}),
          },
          he = { ...V, ...Q };
        return {
          tabIndex: x,
          "aria-labelledby": t,
          "aria-orientation": y,
          "aria-valuemax": f(s),
          "aria-valuemin": f(l),
          name: c,
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step === null && e.marks ? "any" : (e.step ?? void 0),
          disabled: o,
          ...W,
          ...he,
          style: {
            ...Dv,
            direction: i ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: Ve,
          },
        };
      },
      getRootProps: Pe,
      getThumbProps: Re,
      marks: F,
      open: R,
      range: M,
      rootRef: X,
      trackLeap: Se,
      trackOffset: Ae,
      values: E,
      getThumbStyle: re,
    }
  );
}
const ib = (e) => !e || !Kt(e);
function ab(e) {
  return ce("MuiSlider", e);
}
const ft = de("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical",
  ]),
  sb = (e) => {
    const { open: t } = e;
    return {
      offset: U(t && ft.valueLabelOpen),
      circle: ft.valueLabelCircle,
      label: ft.valueLabelLabel,
    };
  };
function lb(e) {
  const { children: t, className: r, value: o } = e,
    n = sb(e);
  return t
    ? m.cloneElement(
        t,
        { className: t.props.className },
        w.jsxs(m.Fragment, {
          children: [
            t.props.children,
            w.jsx("span", {
              className: U(n.offset, r),
              "aria-hidden": !0,
              children: w.jsx("span", {
                className: n.circle,
                children: w.jsx("span", { className: n.label, children: o }),
              }),
            }),
          ],
        }),
      )
    : null;
}
function Ls(e) {
  return e;
}
const cb = D("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`color${z(r.color)}`],
        r.size !== "medium" && t[`size${z(r.size)}`],
        r.marked && t.marked,
        r.orientation === "vertical" && t.vertical,
        r.track === "inverted" && t.trackInverted,
        r.track === !1 && t.trackFalse,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      borderRadius: 12,
      boxSizing: "content-box",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      touchAction: "none",
      WebkitTapHighlightColor: "transparent",
      "@media print": { colorAdjust: "exact" },
      [`&.${ft.disabled}`]: {
        pointerEvents: "none",
        cursor: "default",
        color: (e.vars || e).palette.grey[400],
      },
      [`&.${ft.dragging}`]: {
        [`& .${ft.thumb}, & .${ft.track}`]: { transition: "none" },
      },
      variants: [
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
        {
          props: { orientation: "horizontal" },
          style: {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
        },
        {
          props: { orientation: "horizontal", size: "small" },
          style: { height: 2 },
        },
        {
          props: { orientation: "horizontal", marked: !0 },
          style: { marginBottom: 20 },
        },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
        },
        {
          props: { orientation: "vertical", size: "small" },
          style: { width: 2 },
        },
        {
          props: { orientation: "vertical", marked: !0 },
          style: { marginRight: 44 },
        },
      ],
    })),
  ),
  ub = D("span", { name: "MuiSlider", slot: "Rail" })({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38,
    variants: [
      {
        props: { orientation: "horizontal" },
        style: {
          width: "100%",
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      {
        props: { orientation: "vertical" },
        style: {
          height: "100%",
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      { props: { track: "inverted" }, style: { opacity: 1 } },
    ],
  }),
  db = D("span", { name: "MuiSlider", slot: "Track" })(
    ie(({ theme: e }) => ({
      display: "block",
      position: "absolute",
      borderRadius: "inherit",
      border: "1px solid currentColor",
      backgroundColor: "currentColor",
      transition: e.transitions.create(["left", "width", "bottom", "height"], {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        { props: { size: "small" }, style: { border: "none" } },
        {
          props: { orientation: "horizontal" },
          style: {
            height: "inherit",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            width: "inherit",
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
        { props: { track: !1 }, style: { display: "none" } },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t, track: "inverted" },
            style: {
              ...(e.vars
                ? {
                    backgroundColor: e.vars.palette.Slider[`${t}Track`],
                    borderColor: e.vars.palette.Slider[`${t}Track`],
                  }
                : {
                    backgroundColor: e.lighten(e.palette[t].main, 0.62),
                    borderColor: e.lighten(e.palette[t].main, 0.62),
                    ...e.applyStyles("dark", {
                      backgroundColor: e.darken(e.palette[t].main, 0.5),
                    }),
                    ...e.applyStyles("dark", {
                      borderColor: e.darken(e.palette[t].main, 0.5),
                    }),
                  }),
            },
          })),
      ],
    })),
  ),
  pb = D("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.thumb,
        t[`thumbColor${z(r.color)}`],
        r.size !== "medium" && t[`thumbSize${z(r.size)}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      position: "absolute",
      width: 20,
      height: 20,
      boxSizing: "border-box",
      borderRadius: "50%",
      outline: 0,
      backgroundColor: "currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: e.transitions.create(["box-shadow", "left", "bottom"], {
        duration: e.transitions.duration.shortest,
      }),
      "&::before": {
        position: "absolute",
        content: '""',
        borderRadius: "inherit",
        width: "100%",
        height: "100%",
        boxShadow: (e.vars || e).shadows[2],
      },
      "&::after": {
        position: "absolute",
        content: '""',
        borderRadius: "50%",
        width: 42,
        height: 42,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      [`&.${ft.disabled}`]: { "&:hover": { boxShadow: "none" } },
      variants: [
        {
          props: { size: "small" },
          style: { width: 12, height: 12, "&::before": { boxShadow: "none" } },
        },
        {
          props: { orientation: "horizontal" },
          style: { top: "50%", transform: "translate(-50%, -50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { left: "50%", transform: "translate(-50%, 50%)" },
        },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&:hover, &.${ft.focusVisible}`]: {
                boxShadow: `0px 0px 0px 8px ${e.alpha((e.vars || e).palette[t].main, 0.16)}`,
                "@media (hover: none)": { boxShadow: "none" },
              },
              [`&.${ft.active}`]: {
                boxShadow: `0px 0px 0px 14px ${e.alpha((e.vars || e).palette[t].main, 0.16)}`,
              },
            },
          })),
      ],
    })),
  ),
  fb = D(lb, { name: "MuiSlider", slot: "ValueLabel" })(
    ie(({ theme: e }) => ({
      zIndex: 1,
      whiteSpace: "nowrap",
      ...e.typography.body2,
      fontWeight: 500,
      transition: e.transitions.create(["transform"], {
        duration: e.transitions.duration.shortest,
      }),
      position: "absolute",
      backgroundColor: (e.vars || e).palette.grey[600],
      borderRadius: 2,
      color: (e.vars || e).palette.common.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.25rem 0.75rem",
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            transform: "translateY(-100%) scale(0)",
            top: "-10px",
            transformOrigin: "bottom center",
            "&::before": {
              position: "absolute",
              content: '""',
              width: 8,
              height: 8,
              transform: "translate(-50%, 50%) rotate(45deg)",
              backgroundColor: "inherit",
              bottom: 0,
              left: "50%",
            },
            [`&.${ft.valueLabelOpen}`]: {
              transform: "translateY(-100%) scale(1)",
            },
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            transform: "translateY(-50%) scale(0)",
            right: "30px",
            top: "50%",
            transformOrigin: "right center",
            "&::before": {
              position: "absolute",
              content: '""',
              width: 8,
              height: 8,
              transform: "translate(-50%, -50%) rotate(45deg)",
              backgroundColor: "inherit",
              right: -8,
              top: "50%",
            },
            [`&.${ft.valueLabelOpen}`]: {
              transform: "translateY(-50%) scale(1)",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: e.typography.pxToRem(12),
            padding: "0.25rem 0.5rem",
          },
        },
        {
          props: { orientation: "vertical", size: "small" },
          style: { right: "20px" },
        },
      ],
    })),
  ),
  mb = D("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => kn(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: r } = e;
      return [t.mark, r && t.markActive];
    },
  })(
    ie(({ theme: e }) => ({
      position: "absolute",
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor",
      variants: [
        {
          props: { orientation: "horizontal" },
          style: { top: "50%", transform: "translate(-1px, -50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { left: "50%", transform: "translate(-50%, 1px)" },
        },
        {
          props: { markActive: !0 },
          style: {
            backgroundColor: (e.vars || e).palette.background.paper,
            opacity: 0.8,
          },
        },
      ],
    })),
  ),
  gb = D("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => kn(e) && e !== "markLabelActive",
  })(
    ie(({ theme: e }) => ({
      ...e.typography.body2,
      color: (e.vars || e).palette.text.secondary,
      position: "absolute",
      whiteSpace: "nowrap",
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            top: 30,
            transform: "translateX(-50%)",
            "@media (pointer: coarse)": { top: 40 },
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            left: 36,
            transform: "translateY(50%)",
            "@media (pointer: coarse)": { left: 44 },
          },
        },
        {
          props: { markLabelActive: !0 },
          style: { color: (e.vars || e).palette.text.primary },
        },
      ],
    })),
  ),
  hb = (e) => {
    const {
        disabled: t,
        dragging: r,
        marked: o,
        orientation: n,
        track: i,
        classes: a,
        color: s,
        size: l,
      } = e,
      c = {
        root: [
          "root",
          t && "disabled",
          r && "dragging",
          o && "marked",
          n === "vertical" && "vertical",
          i === "inverted" && "trackInverted",
          i === !1 && "trackFalse",
          s && `color${z(s)}`,
          l && `size${z(l)}`,
        ],
        rail: ["rail"],
        track: ["track"],
        mark: ["mark"],
        markActive: ["markActive"],
        markLabel: ["markLabel"],
        markLabelActive: ["markLabelActive"],
        valueLabel: ["valueLabel"],
        thumb: [
          "thumb",
          t && "disabled",
          l && `thumbSize${z(l)}`,
          s && `thumbColor${z(s)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return ue(c, ab, a);
  },
  yb = ({ children: e }) => e,
  A0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiSlider" }),
      n = Dr(),
      {
        "aria-label": i,
        "aria-valuetext": a,
        "aria-labelledby": s,
        component: l = "span",
        components: c = {},
        componentsProps: u = {},
        color: h = "primary",
        classes: y,
        className: d,
        disableSwap: f = !1,
        disabled: g = !1,
        getAriaLabel: b,
        getAriaValueText: x,
        marks: k = !1,
        max: S = 100,
        min: v = 0,
        name: C,
        onChange: R,
        onChangeCommitted: P,
        orientation: I = "horizontal",
        shiftStep: A = 10,
        size: O = "medium",
        step: L = 1,
        scale: p = Ls,
        slotProps: $,
        slots: T,
        tabIndex: M,
        track: E = "normal",
        value: F,
        valueLabelDisplay: B = "off",
        valueLabelFormat: j = Ls,
        ...G
      } = o,
      H = {
        ...o,
        isRtl: n,
        max: S,
        min: v,
        classes: y,
        disabled: g,
        disableSwap: f,
        orientation: I,
        marks: k,
        color: h,
        size: O,
        step: L,
        shiftStep: A,
        scale: p,
        track: E,
        valueLabelDisplay: B,
        valueLabelFormat: j,
      },
      {
        axisProps: X,
        getRootProps: ee,
        getHiddenInputProps: ye,
        getThumbProps: J,
        open: _,
        active: te,
        axis: me,
        focusedThumbIndex: ve,
        range: Z,
        dragging: se,
        marks: ne,
        values: oe,
        trackOffset: Y,
        trackLeap: le,
        getThumbStyle: Ae,
      } = nb({ ...H, rootRef: r });
    (H.marked = ne.length > 0 && ne.some((ge) => ge.label)),
      (H.dragging = se),
      (H.focusedThumbIndex = ve);
    const Se = hb(H),
      Pe = (T == null ? void 0 : T.root) ?? c.Root ?? cb,
      Ee = (T == null ? void 0 : T.rail) ?? c.Rail ?? ub,
      Me = (T == null ? void 0 : T.track) ?? c.Track ?? db,
      Re = (T == null ? void 0 : T.thumb) ?? c.Thumb ?? pb,
      re = (T == null ? void 0 : T.valueLabel) ?? c.ValueLabel ?? fb,
      Ve = (T == null ? void 0 : T.mark) ?? c.Mark ?? mb,
      Ie = (T == null ? void 0 : T.markLabel) ?? c.MarkLabel ?? gb,
      W = (T == null ? void 0 : T.input) ?? c.Input ?? "input",
      V = ($ == null ? void 0 : $.root) ?? u.root,
      Q = ($ == null ? void 0 : $.rail) ?? u.rail,
      he = ($ == null ? void 0 : $.track) ?? u.track,
      xe = ($ == null ? void 0 : $.thumb) ?? u.thumb,
      q = ($ == null ? void 0 : $.valueLabel) ?? u.valueLabel,
      K = ($ == null ? void 0 : $.mark) ?? u.mark,
      ke = ($ == null ? void 0 : $.markLabel) ?? u.markLabel,
      be = ($ == null ? void 0 : $.input) ?? u.input,
      we = Tt({
        elementType: Pe,
        getSlotProps: ee,
        externalSlotProps: V,
        externalForwardedProps: G,
        additionalProps: { ...(ib(Pe) && { as: l }) },
        ownerState: { ...H, ...(V == null ? void 0 : V.ownerState) },
        className: [Se.root, d],
      }),
      vt = Tt({
        elementType: Ee,
        externalSlotProps: Q,
        ownerState: H,
        className: Se.rail,
      }),
      Ht = Tt({
        elementType: Me,
        externalSlotProps: he,
        additionalProps: { style: { ...X[me].offset(Y), ...X[me].leap(le) } },
        ownerState: { ...H, ...(he == null ? void 0 : he.ownerState) },
        className: Se.track,
      }),
      Vt = Tt({
        elementType: Re,
        getSlotProps: J,
        externalSlotProps: xe,
        ownerState: { ...H, ...(xe == null ? void 0 : xe.ownerState) },
        className: Se.thumb,
      }),
      Lt = Tt({
        elementType: re,
        externalSlotProps: q,
        ownerState: { ...H, ...(q == null ? void 0 : q.ownerState) },
        className: Se.valueLabel,
      }),
      Ut = Tt({
        elementType: Ve,
        externalSlotProps: K,
        ownerState: H,
        className: Se.mark,
      }),
      _t = Tt({
        elementType: Ie,
        externalSlotProps: ke,
        ownerState: H,
        className: Se.markLabel,
      }),
      ae = Tt({
        elementType: W,
        getSlotProps: ye,
        externalSlotProps: be,
        ownerState: H,
      });
    return w.jsxs(Pe, {
      ...we,
      children: [
        w.jsx(Ee, { ...vt }),
        w.jsx(Me, { ...Ht }),
        ne
          .filter((ge) => ge.value >= v && ge.value <= S)
          .map((ge, Te) => {
            const ut = sn(ge.value, v, S),
              Bt = X[me].offset(ut);
            let bt;
            return (
              E === !1
                ? (bt = oe.includes(ge.value))
                : (bt =
                    (E === "normal" &&
                      (Z
                        ? ge.value >= oe[0] && ge.value <= oe[oe.length - 1]
                        : ge.value <= oe[0])) ||
                    (E === "inverted" &&
                      (Z
                        ? ge.value <= oe[0] || ge.value >= oe[oe.length - 1]
                        : ge.value >= oe[0]))),
              w.jsxs(
                m.Fragment,
                {
                  children: [
                    w.jsx(Ve, {
                      "data-index": Te,
                      ...Ut,
                      ...(!Kt(Ve) && { markActive: bt }),
                      style: { ...Bt, ...Ut.style },
                      className: U(Ut.className, bt && Se.markActive),
                    }),
                    ge.label != null
                      ? w.jsx(Ie, {
                          "aria-hidden": !0,
                          "data-index": Te,
                          ..._t,
                          ...(!Kt(Ie) && { markLabelActive: bt }),
                          style: { ...Bt, ..._t.style },
                          className: U(
                            Se.markLabel,
                            _t.className,
                            bt && Se.markLabelActive,
                          ),
                          children: ge.label,
                        })
                      : null,
                  ],
                },
                Te,
              )
            );
          }),
        oe.map((ge, Te) => {
          const ut = sn(ge, v, S),
            Bt = X[me].offset(ut),
            bt = B === "off" ? yb : re;
          return w.jsx(
            bt,
            {
              ...(!Kt(bt) && {
                valueLabelFormat: j,
                valueLabelDisplay: B,
                value: typeof j == "function" ? j(p(ge), Te) : j,
                index: Te,
                open: _ === Te || te === Te || B === "on",
                disabled: g,
              }),
              ...Lt,
              children: w.jsx(Re, {
                "data-index": Te,
                ...Vt,
                className: U(
                  Se.thumb,
                  Vt.className,
                  te === Te && Se.active,
                  ve === Te && Se.focusVisible,
                ),
                style: { ...Bt, ...Ae(Te), ...Vt.style },
                children: w.jsx(W, {
                  "data-index": Te,
                  "aria-label": b ? b(Te) : i,
                  "aria-valuenow": p(ge),
                  "aria-labelledby": s,
                  "aria-valuetext": x ? x(p(ge), Te) : a,
                  value: oe[Te],
                  ...ae,
                }),
              }),
            },
            Te,
          );
        }),
      ],
    });
  });
function vb(e = {}) {
  const {
      autoHideDuration: t = null,
      disableWindowBlurListener: r = !1,
      onClose: o,
      open: n,
      resumeHideDuration: i,
    } = e,
    a = sr();
  m.useEffect(() => {
    if (!n) return;
    function x(k) {
      k.defaultPrevented ||
        (k.key === "Escape" && (o == null || o(k, "escapeKeyDown")));
    }
    return (
      document.addEventListener("keydown", x),
      () => {
        document.removeEventListener("keydown", x);
      }
    );
  }, [n, o]);
  const s = tt((x, k) => {
      o == null || o(x, k);
    }),
    l = tt((x) => {
      !o ||
        x == null ||
        a.start(x, () => {
          s(null, "timeout");
        });
    });
  m.useEffect(() => (n && l(t), a.clear), [n, t, l, a]);
  const c = (x) => {
      o == null || o(x, "clickaway");
    },
    u = a.clear,
    h = m.useCallback(() => {
      t != null && l(i ?? t * 0.5);
    }, [t, i, l]),
    y = (x) => (k) => {
      const S = x.onBlur;
      S == null || S(k), h();
    },
    d = (x) => (k) => {
      const S = x.onFocus;
      S == null || S(k), u();
    },
    f = (x) => (k) => {
      const S = x.onMouseEnter;
      S == null || S(k), u();
    },
    g = (x) => (k) => {
      const S = x.onMouseLeave;
      S == null || S(k), h();
    };
  return (
    m.useEffect(() => {
      if (!r && n)
        return (
          window.addEventListener("focus", h),
          window.addEventListener("blur", u),
          () => {
            window.removeEventListener("focus", h),
              window.removeEventListener("blur", u);
          }
        );
    }, [r, n, h, u]),
    {
      getRootProps: (x = {}) => {
        const k = { ...lr(e), ...lr(x) };
        return {
          role: "presentation",
          ...x,
          ...k,
          onBlur: y(k),
          onFocus: d(k),
          onMouseEnter: f(k),
          onMouseLeave: g(k),
        };
      },
      onClickAway: c,
    }
  );
}
function bb(e) {
  return ce("MuiSnackbarContent", e);
}
de("MuiSnackbarContent", ["root", "message", "action"]);
const xb = (e) => {
    const { classes: t } = e;
    return ue(
      { root: ["root"], action: ["action"], message: ["message"] },
      bb,
      t,
    );
  },
  Sb = D(Hr, { name: "MuiSnackbarContent", slot: "Root" })(
    ie(({ theme: e }) => {
      const t = e.palette.mode === "light" ? 0.8 : 0.98;
      return {
        ...e.typography.body2,
        color: e.vars
          ? e.vars.palette.SnackbarContent.color
          : e.palette.getContrastText(ti(e.palette.background.default, t)),
        backgroundColor: e.vars
          ? e.vars.palette.SnackbarContent.bg
          : ti(e.palette.background.default, t),
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "6px 16px",
        flexGrow: 1,
        [e.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 },
      };
    }),
  ),
  Cb = D("div", { name: "MuiSnackbarContent", slot: "Message" })({
    padding: "8px 0",
  }),
  wb = D("div", { name: "MuiSnackbarContent", slot: "Action" })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8,
  }),
  kb = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiSnackbarContent" }),
      { action: n, className: i, message: a, role: s = "alert", ...l } = o,
      c = o,
      u = xb(c);
    return w.jsxs(Sb, {
      role: s,
      elevation: 6,
      className: U(u.root, i),
      ownerState: c,
      ref: r,
      ...l,
      children: [
        w.jsx(Cb, { className: u.message, ownerState: c, children: a }),
        n
          ? w.jsx(wb, { className: u.action, ownerState: c, children: n })
          : null,
      ],
    });
  });
function Rb(e) {
  return ce("MuiSnackbar", e);
}
de("MuiSnackbar", [
  "root",
  "anchorOriginTopCenter",
  "anchorOriginBottomCenter",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
]);
const Tb = (e) => {
    const { classes: t, anchorOrigin: r } = e,
      o = { root: ["root", `anchorOrigin${z(r.vertical)}${z(r.horizontal)}`] };
    return ue(o, Rb, t);
  },
  $b = D("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[
          `anchorOrigin${z(r.anchorOrigin.vertical)}${z(r.anchorOrigin.horizontal)}`
        ],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      zIndex: (e.vars || e).zIndex.snackbar,
      position: "fixed",
      display: "flex",
      left: 8,
      right: 8,
      justifyContent: "center",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top",
          style: { top: 8, [e.breakpoints.up("sm")]: { top: 24 } },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top",
          style: { bottom: 8, [e.breakpoints.up("sm")]: { bottom: 24 } },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left",
          style: {
            justifyContent: "flex-start",
            [e.breakpoints.up("sm")]: { left: 24, right: "auto" },
          },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right",
          style: {
            justifyContent: "flex-end",
            [e.breakpoints.up("sm")]: { right: 24, left: "auto" },
          },
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center",
          style: {
            [e.breakpoints.up("sm")]: {
              left: "50%",
              right: "auto",
              transform: "translateX(-50%)",
            },
          },
        },
      ],
    })),
  ),
  O0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiSnackbar" }),
      n = Wt(),
      i = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        action: a,
        anchorOrigin: { vertical: s, horizontal: l } = {
          vertical: "bottom",
          horizontal: "left",
        },
        autoHideDuration: c = null,
        children: u,
        className: h,
        ClickAwayListenerProps: y,
        ContentProps: d,
        disableWindowBlurListener: f = !1,
        message: g,
        onBlur: b,
        onClose: x,
        onFocus: k,
        onMouseEnter: S,
        onMouseLeave: v,
        open: C,
        resumeHideDuration: R,
        slots: P = {},
        slotProps: I = {},
        TransitionComponent: A,
        transitionDuration: O = i,
        TransitionProps: { onEnter: L, onExited: p, ...$ } = {},
        ...T
      } = o,
      M = {
        ...o,
        anchorOrigin: { vertical: s, horizontal: l },
        autoHideDuration: c,
        disableWindowBlurListener: f,
        TransitionComponent: A,
        transitionDuration: O,
      },
      E = Tb(M),
      { getRootProps: F, onClickAway: B } = vb(M),
      [j, G] = m.useState(!0),
      H = (oe) => {
        G(!0), p && p(oe);
      },
      X = (oe, Y) => {
        G(!1), L && L(oe, Y);
      },
      ee = {
        slots: { transition: A, ...P },
        slotProps: { content: d, clickAwayListener: y, transition: $, ...I },
      },
      [ye, J] = fe("root", {
        ref: r,
        className: [E.root, h],
        elementType: $b,
        getSlotProps: F,
        externalForwardedProps: { ...ee, ...T },
        ownerState: M,
      }),
      [_, { ownerState: te, ...me }] = fe("clickAwayListener", {
        elementType: mh,
        externalForwardedProps: ee,
        getSlotProps: (oe) => ({
          onClickAway: (...Y) => {
            var Ae;
            const le = Y[0];
            (Ae = oe.onClickAway) == null || Ae.call(oe, ...Y),
              !(le != null && le.defaultMuiPrevented) && B(...Y);
          },
        }),
        ownerState: M,
      }),
      [ve, Z] = fe("content", {
        elementType: kb,
        shouldForwardComponentProp: !0,
        externalForwardedProps: ee,
        additionalProps: { message: g, action: a },
        ownerState: M,
      }),
      [se, ne] = fe("transition", {
        elementType: bo,
        externalForwardedProps: ee,
        getSlotProps: (oe) => ({
          onEnter: (...Y) => {
            var le;
            (le = oe.onEnter) == null || le.call(oe, ...Y), X(...Y);
          },
          onExited: (...Y) => {
            var le;
            (le = oe.onExited) == null || le.call(oe, ...Y), H(...Y);
          },
        }),
        additionalProps: {
          appear: !0,
          in: C,
          timeout: O,
          direction: s === "top" ? "down" : "up",
        },
        ownerState: M,
      });
    return !C && j
      ? null
      : w.jsx(_, {
          ...me,
          ...(P.clickAwayListener && { ownerState: te }),
          children: w.jsx(ye, {
            ...J,
            children: w.jsx(se, { ...ne, children: u || w.jsx(ve, { ...Z }) }),
          }),
        });
  });
function Pb(e) {
  return ce("MuiTooltip", e);
}
const Ge = de("MuiTooltip", [
  "popper",
  "popperInteractive",
  "popperArrow",
  "popperClose",
  "tooltip",
  "tooltipArrow",
  "touch",
  "tooltipPlacementLeft",
  "tooltipPlacementRight",
  "tooltipPlacementTop",
  "tooltipPlacementBottom",
  "arrow",
]);
function Eb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ib = (e) => {
    const {
        classes: t,
        disableInteractive: r,
        arrow: o,
        touch: n,
        placement: i,
      } = e,
      a = {
        popper: ["popper", !r && "popperInteractive", o && "popperArrow"],
        tooltip: [
          "tooltip",
          o && "tooltipArrow",
          n && "touch",
          `tooltipPlacement${z(i.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return ue(a, Pb, t);
  },
  Mb = D(Gl, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.popper,
        !r.disableInteractive && t.popperInteractive,
        r.arrow && t.popperArrow,
        !r.open && t.popperClose,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      zIndex: (e.vars || e).zIndex.tooltip,
      pointerEvents: "none",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableInteractive,
          style: { pointerEvents: "auto" },
        },
        { props: ({ open: t }) => !t, style: { pointerEvents: "none" } },
        {
          props: ({ ownerState: t }) => t.arrow,
          style: {
            [`&[data-popper-placement*="bottom"] .${Ge.arrow}`]: {
              top: 0,
              marginTop: "-0.71em",
              "&::before": { transformOrigin: "0 100%" },
            },
            [`&[data-popper-placement*="top"] .${Ge.arrow}`]: {
              bottom: 0,
              marginBottom: "-0.71em",
              "&::before": { transformOrigin: "100% 0" },
            },
            [`&[data-popper-placement*="right"] .${Ge.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "100% 100%" },
            },
            [`&[data-popper-placement*="left"] .${Ge.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "0 0" },
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.arrow && !t.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${Ge.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${Ge.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.arrow && !t.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${Ge.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${Ge.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
      ],
    })),
  ),
  Ab = D("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.tooltip,
        r.touch && t.touch,
        r.arrow && t.tooltipArrow,
        t[`tooltipPlacement${z(r.placement.split("-")[0])}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      backgroundColor: e.vars
        ? e.vars.palette.Tooltip.bg
        : e.alpha(e.palette.grey[700], 0.92),
      borderRadius: (e.vars || e).shape.borderRadius,
      color: (e.vars || e).palette.common.white,
      fontFamily: e.typography.fontFamily,
      padding: "4px 8px",
      fontSize: e.typography.pxToRem(11),
      maxWidth: 300,
      margin: 2,
      wordWrap: "break-word",
      fontWeight: e.typography.fontWeightMedium,
      [`.${Ge.popper}[data-popper-placement*="left"] &`]: {
        transformOrigin: "right center",
      },
      [`.${Ge.popper}[data-popper-placement*="right"] &`]: {
        transformOrigin: "left center",
      },
      [`.${Ge.popper}[data-popper-placement*="top"] &`]: {
        transformOrigin: "center bottom",
        marginBottom: "14px",
      },
      [`.${Ge.popper}[data-popper-placement*="bottom"] &`]: {
        transformOrigin: "center top",
        marginTop: "14px",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.arrow,
          style: { position: "relative", margin: 0 },
        },
        {
          props: ({ ownerState: t }) => t.touch,
          style: {
            padding: "8px 16px",
            fontSize: e.typography.pxToRem(14),
            lineHeight: `${Eb(16 / 14)}em`,
            fontWeight: e.typography.fontWeightRegular,
          },
        },
        {
          props: ({ ownerState: t }) => !t.isRtl,
          style: {
            [`.${Ge.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "14px",
            },
            [`.${Ge.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "14px",
            },
          },
        },
        {
          props: ({ ownerState: t }) => !t.isRtl && t.touch,
          style: {
            [`.${Ge.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "24px",
            },
            [`.${Ge.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "24px",
            },
          },
        },
        {
          props: ({ ownerState: t }) => !!t.isRtl,
          style: {
            [`.${Ge.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "14px",
            },
            [`.${Ge.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "14px",
            },
          },
        },
        {
          props: ({ ownerState: t }) => !!t.isRtl && t.touch,
          style: {
            [`.${Ge.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "24px",
            },
            [`.${Ge.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "24px",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.touch,
          style: {
            [`.${Ge.popper}[data-popper-placement*="top"] &`]: {
              marginBottom: "24px",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.touch,
          style: {
            [`.${Ge.popper}[data-popper-placement*="bottom"] &`]: {
              marginTop: "24px",
            },
          },
        },
      ],
    })),
  ),
  Ob = D("span", { name: "MuiTooltip", slot: "Arrow" })(
    ie(({ theme: e }) => ({
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: e.vars
        ? e.vars.palette.Tooltip.bg
        : e.alpha(e.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)",
      },
    })),
  );
let Ho = !1;
const Bs = new Rn();
let eo = { x: 0, y: 0 };
function Vo(e, t) {
  return (r, ...o) => {
    t && t(r, ...o), e(r, ...o);
  };
}
const L0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTooltip" }),
      {
        arrow: n = !1,
        children: i,
        classes: a,
        components: s = {},
        componentsProps: l = {},
        describeChild: c = !1,
        disableFocusListener: u = !1,
        disableHoverListener: h = !1,
        disableInteractive: y = !1,
        disableTouchListener: d = !1,
        enterDelay: f = 100,
        enterNextDelay: g = 0,
        enterTouchDelay: b = 700,
        followCursor: x = !1,
        id: k,
        leaveDelay: S = 0,
        leaveTouchDelay: v = 1500,
        onClose: C,
        onOpen: R,
        open: P,
        placement: I = "bottom",
        PopperComponent: A,
        PopperProps: O = {},
        slotProps: L = {},
        slots: p = {},
        title: $,
        TransitionComponent: T,
        TransitionProps: M,
        ...E
      } = o,
      F = m.isValidElement(i) ? i : w.jsx("span", { children: i }),
      B = Wt(),
      j = Dr(),
      [G, H] = m.useState(),
      [X, ee] = m.useState(null),
      ye = m.useRef(!1),
      J = y || x,
      _ = sr(),
      te = sr(),
      me = sr(),
      ve = sr(),
      [Z, se] = ho({
        controlled: P,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let ne = Z;
    const oe = mr(k),
      Y = m.useRef(),
      le = tt(() => {
        Y.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = Y.current),
          (Y.current = void 0)),
          ve.clear();
      });
    m.useEffect(() => le, [le]);
    const Ae = (Ce) => {
        Bs.clear(), (Ho = !0), se(!0), R && !ne && R(Ce);
      },
      Se = tt((Ce) => {
        Bs.start(800 + S, () => {
          Ho = !1;
        }),
          se(!1),
          C && ne && C(Ce),
          _.start(B.transitions.duration.shortest, () => {
            ye.current = !1;
          });
      }),
      Pe = (Ce) => {
        (ye.current && Ce.type !== "touchstart") ||
          (G && G.removeAttribute("title"),
          te.clear(),
          me.clear(),
          f || (Ho && g)
            ? te.start(Ho ? g : f, () => {
                Ae(Ce);
              })
            : Ae(Ce));
      },
      Ee = (Ce) => {
        te.clear(),
          me.start(S, () => {
            Se(Ce);
          });
      },
      [, Me] = m.useState(!1),
      Re = (Ce) => {
        const Je = (Ce == null ? void 0 : Ce.target) ?? G;
        if (!Je || !Ar(Je)) {
          Me(!1);
          const gr = Ce ?? new Event("blur");
          !Ce &&
            Je &&
            (Object.defineProperty(gr, "target", { value: Je }),
            Object.defineProperty(gr, "currentTarget", { value: Je })),
            Ee(gr);
        }
      },
      re = (Ce) => {
        G || H(Ce.currentTarget), Ar(Ce.target) && (Me(!0), Pe(Ce));
      },
      Ve = (Ce) => {
        ye.current = !0;
        const Je = F.props;
        Je.onTouchStart && Je.onTouchStart(Ce);
      },
      Ie = (Ce) => {
        Ve(Ce),
          me.clear(),
          _.clear(),
          le(),
          (Y.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          ve.start(b, () => {
            (document.body.style.WebkitUserSelect = Y.current), Pe(Ce);
          });
      },
      W = (Ce) => {
        F.props.onTouchEnd && F.props.onTouchEnd(Ce),
          le(),
          me.start(v, () => {
            Se(Ce);
          });
      };
    m.useEffect(() => {
      if (!ne) return;
      function Ce(Je) {
        Je.key === "Escape" && Se(Je);
      }
      return (
        document.addEventListener("keydown", Ce),
        () => {
          document.removeEventListener("keydown", Ce);
        }
      );
    }, [Se, ne]);
    const V = He(Qt(F), H, r);
    !$ && $ !== 0 && (ne = !1);
    const Q = m.useRef(),
      he = (Ce) => {
        const Je = F.props;
        Je.onMouseMove && Je.onMouseMove(Ce),
          (eo = { x: Ce.clientX, y: Ce.clientY }),
          Q.current && Q.current.update();
      },
      xe = {},
      q = typeof $ == "string";
    c
      ? ((xe.title = !ne && q && !h ? $ : null),
        (xe["aria-describedby"] = ne ? oe : null))
      : ((xe["aria-label"] = q ? $ : null),
        (xe["aria-labelledby"] = ne && !q ? oe : null));
    const K = {
        ...xe,
        ...E,
        ...F.props,
        className: U(E.className, F.props.className),
        onTouchStart: Ve,
        ref: V,
        ...(x ? { onMouseMove: he } : {}),
      },
      ke = {};
    d || ((K.onTouchStart = Ie), (K.onTouchEnd = W)),
      h ||
        ((K.onMouseOver = Vo(Pe, K.onMouseOver)),
        (K.onMouseLeave = Vo(Ee, K.onMouseLeave)),
        J || ((ke.onMouseOver = Pe), (ke.onMouseLeave = Ee))),
      u ||
        ((K.onFocus = Vo(re, K.onFocus)),
        (K.onBlur = Vo(Re, K.onBlur)),
        J || ((ke.onFocus = re), (ke.onBlur = Re)));
    const be = {
        ...o,
        isRtl: j,
        arrow: n,
        disableInteractive: J,
        placement: I,
        PopperComponentProp: A,
        touch: ye.current,
      },
      we = typeof L.popper == "function" ? L.popper(be) : L.popper,
      vt = m.useMemo(() => {
        var Je, gr;
        let Ce = [
          { name: "arrow", enabled: !!X, options: { element: X, padding: 4 } },
        ];
        return (
          (Je = O.popperOptions) != null &&
            Je.modifiers &&
            (Ce = Ce.concat(O.popperOptions.modifiers)),
          (gr = we == null ? void 0 : we.popperOptions) != null &&
            gr.modifiers &&
            (Ce = Ce.concat(we.popperOptions.modifiers)),
          {
            ...O.popperOptions,
            ...(we == null ? void 0 : we.popperOptions),
            modifiers: Ce,
          }
        );
      }, [X, O.popperOptions, we == null ? void 0 : we.popperOptions]),
      Ht = Ib(be),
      Vt = typeof L.transition == "function" ? L.transition(be) : L.transition,
      Lt = {
        slots: {
          popper: s.Popper,
          transition: s.Transition ?? T,
          tooltip: s.Tooltip,
          arrow: s.Arrow,
          ...p,
        },
        slotProps: {
          arrow: L.arrow ?? l.arrow,
          popper: { ...O, ...(we ?? l.popper) },
          tooltip: L.tooltip ?? l.tooltip,
          transition: { ...M, ...(Vt ?? l.transition) },
        },
      },
      [Ut, _t] = fe("popper", {
        elementType: Mb,
        externalForwardedProps: Lt,
        ownerState: be,
        className: U(Ht.popper, O == null ? void 0 : O.className),
      }),
      [ae, ge] = fe("transition", {
        elementType: bo,
        externalForwardedProps: Lt,
        ownerState: be,
      }),
      [Te, ut] = fe("tooltip", {
        elementType: Ab,
        className: Ht.tooltip,
        externalForwardedProps: Lt,
        ownerState: be,
      }),
      [Bt, bt] = fe("arrow", {
        elementType: Ob,
        className: Ht.arrow,
        externalForwardedProps: Lt,
        ownerState: be,
        ref: ee,
      });
    return w.jsxs(m.Fragment, {
      children: [
        m.cloneElement(F, K),
        w.jsx(Ut, {
          as: A ?? Gl,
          placement: I,
          anchorEl: x
            ? {
                getBoundingClientRect: () => ({
                  top: eo.y,
                  left: eo.x,
                  right: eo.x,
                  bottom: eo.y,
                  width: 0,
                  height: 0,
                }),
              }
            : G,
          popperRef: Q,
          open: G ? ne : !1,
          id: oe,
          transition: !0,
          ...ke,
          ..._t,
          popperOptions: vt,
          children: ({ TransitionProps: Ce }) =>
            w.jsx(ae, {
              timeout: B.transitions.duration.shorter,
              ...Ce,
              ...ge,
              children: w.jsxs(Te, {
                ...ut,
                children: [$, n ? w.jsx(Bt, { ...bt }) : null],
              }),
            }),
        }),
      ],
    });
  }),
  B0 = xp({
    createStyledComponent: D("div", { name: "MuiStack", slot: "Root" }),
    useThemeProps: (e) => pe({ props: e, name: "MuiStack" }),
  });
function Lb(e) {
  return ce("MuiSwitch", e);
}
const et = de("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  Bb = (e) => {
    const {
        classes: t,
        edge: r,
        size: o,
        color: n,
        checked: i,
        disabled: a,
      } = e,
      s = {
        root: ["root", r && `edge${z(r)}`, `size${z(o)}`],
        switchBase: [
          "switchBase",
          `color${z(n)}`,
          i && "checked",
          a && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = ue(s, Lb, t);
    return { ...t, ...l };
  },
  Nb = D("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.edge && t[`edge${z(r.edge)}`], t[`size${z(r.size)}`]];
    },
  })({
    display: "inline-flex",
    width: 58,
    height: 38,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": { colorAdjust: "exact" },
    variants: [
      { props: { edge: "start" }, style: { marginLeft: -8 } },
      { props: { edge: "end" }, style: { marginRight: -8 } },
      {
        props: { size: "small" },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${et.thumb}`]: { width: 16, height: 16 },
          [`& .${et.switchBase}`]: {
            padding: 4,
            [`&.${et.checked}`]: { transform: "translateX(16px)" },
          },
        },
      },
    ],
  }),
  zb = D(ph, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.switchBase,
        { [`& .${et.input}`]: t.input },
        r.color !== "default" && t[`color${z(r.color)}`],
      ];
    },
  })(
    ie(({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${et.checked}`]: { transform: "translateX(20px)" },
      [`&.${et.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`,
      },
      [`&.${et.checked} + .${et.track}`]: { opacity: 0.5 },
      [`&.${et.disabled} + .${et.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${et.input}`]: { left: "-100%", width: "300%" },
    })),
    ie(({ theme: e }) => ({
      "&:hover": {
        backgroundColor: e.alpha(
          (e.vars || e).palette.action.active,
          (e.vars || e).palette.action.hoverOpacity,
        ),
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      variants: [
        ...Object.entries(e.palette)
          .filter(De(["light"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${et.checked}`]: {
                color: (e.vars || e).palette[t].main,
                "&:hover": {
                  backgroundColor: e.alpha(
                    (e.vars || e).palette[t].main,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${et.disabled}`]: {
                  color: e.vars
                    ? e.vars.palette.Switch[`${t}DisabledColor`]
                    : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`,
                },
              },
              [`&.${et.checked} + .${et.track}`]: {
                backgroundColor: (e.vars || e).palette[t].main,
              },
            },
          })),
      ],
    })),
  ),
  jb = D("span", { name: "MuiSwitch", slot: "Track" })(
    ie(({ theme: e }) => ({
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: e.transitions.create(["opacity", "background-color"], {
        duration: e.transitions.duration.shortest,
      }),
      backgroundColor: e.vars
        ? e.vars.palette.common.onBackground
        : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
      opacity: e.vars
        ? e.vars.opacity.switchTrack
        : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
    })),
  ),
  Fb = D("span", { name: "MuiSwitch", slot: "Thumb" })(
    ie(({ theme: e }) => ({
      boxShadow: (e.vars || e).shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%",
    })),
  ),
  N0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiSwitch" }),
      {
        className: n,
        color: i = "primary",
        edge: a = !1,
        size: s = "medium",
        sx: l,
        slots: c = {},
        slotProps: u = {},
        ...h
      } = o,
      y = { ...o, color: i, edge: a, size: s },
      d = Bb(y),
      f = { slots: c, slotProps: u },
      [g, b] = fe("root", {
        className: U(d.root, n),
        elementType: Nb,
        externalForwardedProps: f,
        ownerState: y,
        additionalProps: { sx: l },
      }),
      [x, k] = fe("thumb", {
        className: d.thumb,
        elementType: Fb,
        externalForwardedProps: f,
        ownerState: y,
      }),
      S = w.jsx(x, { ...k }),
      [v, C] = fe("track", {
        className: d.track,
        elementType: jb,
        externalForwardedProps: f,
        ownerState: y,
      });
    return w.jsxs(g, {
      ...b,
      children: [
        w.jsx(zb, {
          type: "checkbox",
          icon: S,
          checkedIcon: S,
          ref: r,
          ownerState: y,
          ...h,
          classes: { ...d, root: d.switchBase },
          slots: {
            ...(c.switchBase && { root: c.switchBase }),
            ...(c.input && { input: c.input }),
          },
          slotProps: {
            ...(u.switchBase && {
              root:
                typeof u.switchBase == "function"
                  ? u.switchBase(y)
                  : u.switchBase,
            }),
            input: { role: "switch" },
            ...(u.input && {
              input: typeof u.input == "function" ? u.input(y) : u.input,
            }),
          },
        }),
        w.jsx(v, { ...C }),
      ],
    });
  }),
  sc = m.createContext();
function Db(e) {
  return ce("MuiTable", e);
}
de("MuiTable", ["root", "stickyHeader"]);
const Wb = (e) => {
    const { classes: t, stickyHeader: r } = e;
    return ue({ root: ["root", r && "stickyHeader"] }, Db, t);
  },
  Hb = D("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.stickyHeader && t.stickyHeader];
    },
  })(
    ie(({ theme: e }) => ({
      display: "table",
      width: "100%",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "& caption": {
        ...e.typography.body2,
        padding: e.spacing(2),
        color: (e.vars || e).palette.text.secondary,
        textAlign: "left",
        captionSide: "bottom",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: { borderCollapse: "separate" },
        },
      ],
    })),
  ),
  Ns = "table",
  z0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTable" }),
      {
        className: n,
        component: i = Ns,
        padding: a = "normal",
        size: s = "medium",
        stickyHeader: l = !1,
        ...c
      } = o,
      u = { ...o, component: i, padding: a, size: s, stickyHeader: l },
      h = Wb(u),
      y = m.useMemo(
        () => ({ padding: a, size: s, stickyHeader: l }),
        [a, s, l],
      );
    return w.jsx(sc.Provider, {
      value: y,
      children: w.jsx(Hb, {
        as: i,
        role: i === Ns ? null : "table",
        ref: r,
        className: U(h.root, n),
        ownerState: u,
        ...c,
      }),
    });
  }),
  An = m.createContext();
function Vb(e) {
  return ce("MuiTableBody", e);
}
de("MuiTableBody", ["root"]);
const Ub = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, Vb, t);
  },
  _b = D("tbody", { name: "MuiTableBody", slot: "Root" })({
    display: "table-row-group",
  }),
  Gb = { variant: "body" },
  zs = "tbody",
  j0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTableBody" }),
      { className: n, component: i = zs, ...a } = o,
      s = { ...o, component: i },
      l = Ub(s);
    return w.jsx(An.Provider, {
      value: Gb,
      children: w.jsx(_b, {
        className: U(l.root, n),
        as: i,
        ref: r,
        role: i === zs ? null : "rowgroup",
        ownerState: s,
        ...a,
      }),
    });
  });
function Kb(e) {
  return ce("MuiTableCell", e);
}
const qb = de("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  Yb = (e) => {
    const {
        classes: t,
        variant: r,
        align: o,
        padding: n,
        size: i,
        stickyHeader: a,
      } = e,
      s = {
        root: [
          "root",
          r,
          a && "stickyHeader",
          o !== "inherit" && `align${z(o)}`,
          n !== "normal" && `padding${z(n)}`,
          `size${z(i)}`,
        ],
      };
    return ue(s, Kb, t);
  },
  Xb = D("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`size${z(r.size)}`],
        r.padding !== "normal" && t[`padding${z(r.padding)}`],
        r.align !== "inherit" && t[`align${z(r.align)}`],
        r.stickyHeader && t.stickyHeader,
      ];
    },
  })(
    ie(({ theme: e }) => ({
      ...e.typography.body2,
      display: "table-cell",
      verticalAlign: "inherit",
      borderBottom: e.vars
        ? `1px solid ${e.vars.palette.TableCell.border}`
        : `1px solid
    ${e.palette.mode === "light" ? e.lighten(e.alpha(e.palette.divider, 1), 0.88) : e.darken(e.alpha(e.palette.divider, 1), 0.68)}`,
      textAlign: "left",
      padding: 16,
      variants: [
        {
          props: { variant: "head" },
          style: {
            color: (e.vars || e).palette.text.primary,
            lineHeight: e.typography.pxToRem(24),
            fontWeight: e.typography.fontWeightMedium,
          },
        },
        {
          props: { variant: "body" },
          style: { color: (e.vars || e).palette.text.primary },
        },
        {
          props: { variant: "footer" },
          style: {
            color: (e.vars || e).palette.text.secondary,
            lineHeight: e.typography.pxToRem(21),
            fontSize: e.typography.pxToRem(12),
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: "6px 16px",
            [`&.${qb.paddingCheckbox}`]: {
              width: 24,
              padding: "0 12px 0 16px",
              "& > *": { padding: 0 },
            },
          },
        },
        {
          props: { padding: "checkbox" },
          style: { width: 48, padding: "0 0 0 4px" },
        },
        { props: { padding: "none" }, style: { padding: 0 } },
        { props: { align: "left" }, style: { textAlign: "left" } },
        { props: { align: "center" }, style: { textAlign: "center" } },
        {
          props: { align: "right" },
          style: { textAlign: "right", flexDirection: "row-reverse" },
        },
        { props: { align: "justify" }, style: { textAlign: "justify" } },
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: (e.vars || e).palette.background.default,
          },
        },
      ],
    })),
  ),
  F0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTableCell" }),
      {
        align: n = "inherit",
        className: i,
        component: a,
        padding: s,
        scope: l,
        size: c,
        sortDirection: u,
        variant: h,
        ...y
      } = o,
      d = m.useContext(sc),
      f = m.useContext(An),
      g = f && f.variant === "head";
    let b;
    a ? (b = a) : (b = g ? "th" : "td");
    let x = l;
    b === "td" ? (x = void 0) : !x && g && (x = "col");
    const k = h || (f && f.variant),
      S = {
        ...o,
        align: n,
        component: b,
        padding: s || (d && d.padding ? d.padding : "normal"),
        size: c || (d && d.size ? d.size : "medium"),
        sortDirection: u,
        stickyHeader: k === "head" && d && d.stickyHeader,
        variant: k,
      },
      v = Yb(S);
    let C = null;
    return (
      u && (C = u === "asc" ? "ascending" : "descending"),
      w.jsx(Xb, {
        as: b,
        ref: r,
        className: U(v.root, i),
        "aria-sort": C,
        scope: x,
        ownerState: S,
        ...y,
      })
    );
  });
function Jb(e) {
  return ce("MuiTableContainer", e);
}
de("MuiTableContainer", ["root"]);
const Qb = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, Jb, t);
  },
  Zb = D("div", { name: "MuiTableContainer", slot: "Root" })({
    width: "100%",
    overflowX: "auto",
  }),
  D0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTableContainer" }),
      { className: n, component: i = "div", ...a } = o,
      s = { ...o, component: i },
      l = Qb(s);
    return w.jsx(Zb, {
      ref: r,
      as: i,
      className: U(l.root, n),
      ownerState: s,
      ...a,
    });
  });
function e0(e) {
  return ce("MuiTableHead", e);
}
de("MuiTableHead", ["root"]);
const t0 = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, e0, t);
  },
  r0 = D("thead", { name: "MuiTableHead", slot: "Root" })({
    display: "table-header-group",
  }),
  o0 = { variant: "head" },
  js = "thead",
  W0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTableHead" }),
      { className: n, component: i = js, ...a } = o,
      s = { ...o, component: i },
      l = t0(s);
    return w.jsx(An.Provider, {
      value: o0,
      children: w.jsx(r0, {
        as: i,
        className: U(l.root, n),
        ref: r,
        role: i === js ? null : "rowgroup",
        ownerState: s,
        ...a,
      }),
    });
  });
function n0(e) {
  return ce("MuiTableRow", e);
}
const Fs = de("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  i0 = (e) => {
    const { classes: t, selected: r, hover: o, head: n, footer: i } = e;
    return ue(
      {
        root: [
          "root",
          r && "selected",
          o && "hover",
          n && "head",
          i && "footer",
        ],
      },
      n0,
      t,
    );
  },
  a0 = D("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.head && t.head, r.footer && t.footer];
    },
  })(
    ie(({ theme: e }) => ({
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      outline: 0,
      [`&.${Fs.hover}:hover`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
      },
      [`&.${Fs.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity,
        ),
        "&:hover": {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
          ),
        },
      },
    })),
  ),
  Ds = "tr",
  H0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTableRow" }),
      {
        className: n,
        component: i = Ds,
        hover: a = !1,
        selected: s = !1,
        ...l
      } = o,
      c = m.useContext(An),
      u = {
        ...o,
        component: i,
        hover: a,
        selected: s,
        head: c && c.variant === "head",
        footer: c && c.variant === "footer",
      },
      h = i0(u);
    return w.jsx(a0, {
      as: i,
      ref: r,
      className: U(h.root, n),
      role: i === Ds ? null : "row",
      ownerState: u,
      ...l,
    });
  });
function s0(e) {
  return ce("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const l0 = { standard: ea, filled: Zi, outlined: oa },
  c0 = (e) => {
    const { classes: t } = e;
    return ue({ root: ["root"] }, s0, t);
  },
  u0 = D(xy, { name: "MuiTextField", slot: "Root" })({}),
  V0 = m.forwardRef(function (t, r) {
    const o = pe({ props: t, name: "MuiTextField" }),
      {
        autoComplete: n,
        autoFocus: i = !1,
        children: a,
        className: s,
        color: l = "primary",
        defaultValue: c,
        disabled: u = !1,
        error: h = !1,
        FormHelperTextProps: y,
        fullWidth: d = !1,
        helperText: f,
        id: g,
        InputLabelProps: b,
        inputProps: x,
        InputProps: k,
        inputRef: S,
        label: v,
        maxRows: C,
        minRows: R,
        multiline: P = !1,
        name: I,
        onBlur: A,
        onChange: O,
        onFocus: L,
        placeholder: p,
        required: $ = !1,
        rows: T,
        select: M = !1,
        SelectProps: E,
        slots: F = {},
        slotProps: B = {},
        type: j,
        value: G,
        variant: H = "outlined",
        ...X
      } = o,
      ee = {
        ...o,
        autoFocus: i,
        color: l,
        disabled: u,
        error: h,
        fullWidth: d,
        multiline: P,
        required: $,
        select: M,
        variant: H,
      },
      ye = c0(ee),
      J = mr(g),
      _ = f && J ? `${J}-helper-text` : void 0,
      te = v && J ? `${J}-label` : void 0,
      me = l0[H],
      ve = {
        slots: F,
        slotProps: {
          input: k,
          inputLabel: b,
          htmlInput: x,
          formHelperText: y,
          select: E,
          ...B,
        },
      },
      Z = {},
      se = ve.slotProps.inputLabel;
    H === "outlined" &&
      (se && typeof se.shrink < "u" && (Z.notched = se.shrink), (Z.label = v)),
      M &&
        ((!E || !E.native) && (Z.id = void 0),
        (Z["aria-describedby"] = void 0));
    const [ne, oe] = fe("root", {
        elementType: u0,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...ve, ...X },
        ownerState: ee,
        className: U(ye.root, s),
        ref: r,
        additionalProps: {
          disabled: u,
          error: h,
          fullWidth: d,
          required: $,
          color: l,
          variant: H,
        },
      }),
      [Y, le] = fe("input", {
        elementType: me,
        externalForwardedProps: ve,
        additionalProps: Z,
        ownerState: ee,
      }),
      [Ae, Se] = fe("inputLabel", {
        elementType: Wy,
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      [Pe, Ee] = fe("htmlInput", {
        elementType: "input",
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      [Me, Re] = fe("formHelperText", {
        elementType: ky,
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      [re, Ve] = fe("select", {
        elementType: ic,
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      Ie = w.jsx(Y, {
        "aria-describedby": _,
        autoComplete: n,
        autoFocus: i,
        defaultValue: c,
        fullWidth: d,
        multiline: P,
        name: I,
        rows: T,
        maxRows: C,
        minRows: R,
        type: j,
        value: G,
        id: J,
        inputRef: S,
        onBlur: A,
        onChange: O,
        onFocus: L,
        placeholder: p,
        inputProps: Ee,
        slots: { input: F.htmlInput ? Pe : void 0 },
        ...le,
      });
    return w.jsxs(ne, {
      ...oe,
      children: [
        v != null &&
          v !== "" &&
          w.jsx(Ae, { htmlFor: J, id: te, ...Se, children: v }),
        M
          ? w.jsx(re, {
              "aria-describedby": _,
              id: J,
              labelId: te,
              value: G,
              input: Ie,
              ...Ve,
              children: a,
            })
          : Ie,
        f && w.jsx(Me, { id: _, ...Re, children: f }),
      ],
    });
  }),
  U0 = Fe(
    w.jsx("path", { d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z" }),
  ),
  _0 = Fe(
    w.jsx("path", {
      d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z",
    }),
  ),
  G0 = Fe(
    w.jsx("path", {
      d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
    }),
  ),
  K0 = Fe(
    w.jsx("path", {
      d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z",
    }),
  ),
  q0 = Fe(
    w.jsx("path", {
      d: "M7 18h2V6H7zm4 4h2V2h-2zm-8-8h2v-4H3zm12 4h2V6h-2zm4-8v4h2v-4z",
    }),
  ),
  Y0 = Fe(
    w.jsx("path", {
      d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3z",
    }),
  ),
  X0 = Fe(
    w.jsx("path", {
      d: "M15 6H3v2h12zm0 4H3v2h12zM3 16h8v-2H3zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6z",
    }),
  ),
  J0 = Fe(
    w.jsx("path", {
      d: "M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77",
    }),
  ),
  Q0 = Fe(
    w.jsx("path", {
      d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z",
    }),
  ),
  Z0 = Fe(
    w.jsx("path", {
      d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1",
    }),
  ),
  e1 = Fe(
    w.jsx("path", {
      d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0m-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13",
    }),
  ),
  t1 = Fe(
    w.jsx("path", {
      d: "M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7zm-4 4c-1.29-1.29-2.84-2.13-4.49-2.56l3.53 3.53zM2 3.05 5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24C7.81 10.89 6.27 11.73 5 13v.01L6.99 15c1.36-1.36 3.14-2.04 4.92-2.06L18.98 20l1.27-1.26L3.29 1.79zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0",
    }),
  ),
  r1 = Fe(
    w.jsx("path", {
      d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z",
    }),
  ),
  o1 = Fe(
    w.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
  ),
  n1 = Fe(w.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" })),
  i1 = Fe(
    w.jsx("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z",
    }),
  ),
  a1 = Fe(
    w.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z",
    }),
  ),
  s1 = Fe(
    w.jsx("path", {
      d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z",
    }),
  ),
  l1 = Fe(
    w.jsx("path", {
      d: "M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9",
    }),
  ),
  c1 = Fe(
    w.jsx("path", {
      d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z",
    }),
  );
export {
  s1 as $,
  m0 as A,
  y0 as B,
  g0 as C,
  k0 as D,
  i1 as E,
  Z0 as F,
  q0 as G,
  a1 as H,
  T0 as I,
  x0 as J,
  w0 as K,
  ev as L,
  Y0 as M,
  C0 as N,
  r1 as O,
  Hr as P,
  X0 as Q,
  Q0 as R,
  G0 as S,
  Rr as T,
  xy as U,
  J0 as V,
  e1 as W,
  Wy as X,
  ic as Y,
  M0 as Z,
  S0 as _,
  t1 as a,
  A0 as a0,
  O0 as a1,
  h0 as a2,
  l1 as a3,
  $0 as a4,
  c1 as a5,
  f0 as a6,
  b0 as a7,
  vs as b,
  zi as c,
  P0 as d,
  E0 as e,
  I0 as f,
  U0 as g,
  _0 as h,
  K0 as i,
  w as j,
  R0 as k,
  B0 as l,
  v0 as m,
  Bl as n,
  V0 as o,
  o1 as p,
  D0 as q,
  z0 as r,
  W0 as s,
  H0 as t,
  F0 as u,
  j0 as v,
  N0 as w,
  n1 as x,
  L0 as y,
  Yf as z,
};
