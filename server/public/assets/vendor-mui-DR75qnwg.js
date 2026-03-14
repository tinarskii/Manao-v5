var cc = Object.defineProperty;
var uc = (e, t, r) =>
  t in e
    ? cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Ur = (e, t, r) => uc(e, typeof t != "symbol" ? t + "" : t, r);
import {
  R as qn,
  r as m,
  a as jt,
  b as Eo,
  c as dc,
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
var ai;
function pc() {
  if (ai) return _r;
  ai = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(o, n, a) {
    var i = null;
    if (
      (a !== void 0 && (i = "" + a),
      n.key !== void 0 && (i = "" + n.key),
      "key" in n)
    ) {
      a = {};
      for (var s in n) s !== "key" && (a[s] = n[s]);
    } else a = n;
    return (
      (n = a.ref),
      { $$typeof: e, type: o, key: i, ref: n !== void 0 ? n : null, props: a }
    );
  }
  return (_r.Fragment = t), (_r.jsx = r), (_r.jsxs = r), _r;
}
var ii;
function fc() {
  return ii || ((ii = 1), (On.exports = pc())), On.exports;
}
var w = fc();
const uo = { black: "#000", white: "#fff" },
  yr = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  vr = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  br = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  xr = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  Sr = {
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
  mc = {
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
function gc(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function hc(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var yc = (function () {
    function e(r) {
      var o = this;
      (this._insertTag = function (n) {
        var a;
        o.tags.length === 0
          ? o.insertionPoint
            ? (a = o.insertionPoint.nextSibling)
            : o.prepend
              ? (a = o.container.firstChild)
              : (a = o.before)
          : (a = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(n, a),
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
          this._insertTag(hc(this));
        var n = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = gc(n);
          try {
            a.insertRule(o, a.cssRules.length);
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
  Hs = "comm",
  Sa = "rule",
  Ca = "decl",
  vc = "@import",
  Vs = "@keyframes",
  bc = "@layer",
  xc = Math.abs,
  ln = String.fromCharCode,
  Sc = Object.assign;
function Cc(e, t) {
  return Qe(e, 0) ^ 45
    ? (((((((t << 2) ^ Qe(e, 0)) << 2) ^ Qe(e, 1)) << 2) ^ Qe(e, 2)) << 2) ^
        Qe(e, 3)
    : 0;
}
function Us(e) {
  return e.trim();
}
function wc(e, t) {
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
function wa(e) {
  return e.length;
}
function Io(e, t) {
  return t.push(e), e;
}
function kc(e, t) {
  return e.map(t).join("");
}
var cn = 1,
  Mr = 1,
  _s = 0,
  at = 0,
  qe = 0,
  Fr = "";
function un(e, t, r, o, n, a, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: o,
    props: n,
    children: a,
    line: cn,
    column: Mr,
    length: i,
    return: "",
  };
}
function Kr(e, t) {
  return Sc(un("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rc() {
  return qe;
}
function Tc() {
  return (
    (qe = at > 0 ? Qe(Fr, --at) : 0), Mr--, qe === 10 && ((Mr = 1), cn--), qe
  );
}
function lt() {
  return (
    (qe = at < _s ? Qe(Fr, at++) : 0), Mr++, qe === 10 && ((Mr = 1), cn++), qe
  );
}
function Mt() {
  return Qe(Fr, at);
}
function Uo() {
  return at;
}
function xo(e, t) {
  return po(Fr, e, t);
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
function Gs(e) {
  return (cn = Mr = 1), (_s = $t((Fr = e))), (at = 0), [];
}
function Ks(e) {
  return (Fr = ""), e;
}
function _o(e) {
  return Us(xo(at - 1, Xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $c(e) {
  for (; (qe = Mt()) && qe < 33; ) lt();
  return fo(e) > 2 || fo(qe) > 3 ? "" : " ";
}
function Pc(e, t) {
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
        return at;
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
  return at;
}
function Ec(e, t) {
  for (; lt() && e + qe !== 57; ) if (e + qe === 84 && Mt() === 47) break;
  return "/*" + xo(t, at - 1) + "*" + ln(e === 47 ? e : lt());
}
function Ic(e) {
  for (; !fo(Mt()); ) lt();
  return xo(e, at);
}
function Mc(e) {
  return Ks(Go("", null, null, null, [""], (e = Gs(e)), 0, [0], e));
}
function Go(e, t, r, o, n, a, i, s, l) {
  for (
    var c = 0,
      u = 0,
      h = i,
      y = 0,
      d = 0,
      f = 0,
      g = 1,
      b = 1,
      x = 1,
      k = 0,
      S = "",
      v = n,
      C = a,
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
        P += $c(f);
        break;
      case 92:
        P += Pc(Uo() - 1, 7);
        continue;
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Io(Ac(Ec(lt(), Uo()), t, r), l);
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
                    ? li(P + ";", o, r, h - 1)
                    : li(Le(P, " ", "") + ";", o, r, h - 2),
                  l,
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (Io((R = si(P, t, r, c, u, n, s, S, (v = []), (C = []), h)), a),
              k === 123)
            )
              if (u === 0) Go(P, t, R, R, v, a, h, s, C);
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
                      o && Io(si(e, R, R, 0, 0, n, s, S, n, (v = []), h), C),
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
        (c = u = d = 0), (g = x = 1), (S = P = ""), (h = i);
        break;
      case 58:
        (h = 1 + $t(P)), (d = f);
      default:
        if (g < 1) {
          if (k == 123) --g;
          else if (k == 125 && g++ == 0 && Tc() == 125) continue;
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
              (u = h = $t((S = P += Ic(Uo())))),
              k++;
            break;
          case 45:
            f === 45 && $t(P) == 2 && (g = 0);
        }
    }
  return a;
}
function si(e, t, r, o, n, a, i, s, l, c, u) {
  for (
    var h = n - 1, y = n === 0 ? a : [""], d = wa(y), f = 0, g = 0, b = 0;
    f < o;
    ++f
  )
    for (var x = 0, k = po(e, h + 1, (h = xc((g = i[f])))), S = e; x < d; ++x)
      (S = Us(g > 0 ? y[x] + " " + k : Le(k, /&\f/g, y[x]))) && (l[b++] = S);
  return un(e, t, r, n === 0 ? Sa : s, l, c, u);
}
function Ac(e, t, r) {
  return un(e, t, r, Hs, ln(Rc()), po(e, 2, -2), 0);
}
function li(e, t, r, o) {
  return un(e, t, r, Ca, po(e, 0, o), po(e, o + 1, -1), o);
}
function Pr(e, t) {
  for (var r = "", o = wa(e), n = 0; n < o; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function Oc(e, t, r, o) {
  switch (e.type) {
    case bc:
      if (e.children.length) break;
    case vc:
    case Ca:
      return (e.return = e.return || e.value);
    case Hs:
      return "";
    case Vs:
      return (e.return = e.value + "{" + Pr(e.children, o) + "}");
    case Sa:
      e.value = e.props.join(",");
  }
  return $t((r = Pr(e.children, o)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Lc(e) {
  var t = wa(e);
  return function (r, o, n, a) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, o, n, a) || "";
    return i;
  };
}
function Bc(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function qs(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Nc = function (t, r, o) {
    for (
      var n = 0, a = 0;
      (n = a), (a = Mt()), n === 38 && a === 12 && (r[o] = 1), !fo(a);
    )
      lt();
    return xo(t, at);
  },
  zc = function (t, r) {
    var o = -1,
      n = 44;
    do
      switch (fo(n)) {
        case 0:
          n === 38 && Mt() === 12 && (r[o] = 1), (t[o] += Nc(at - 1, r, o));
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
  jc = function (t, r) {
    return Ks(zc(Gs(t), r));
  },
  ci = new WeakMap(),
  Fc = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          o = t.parent,
          n = t.column === o.column && t.line === o.line;
        o.type !== "rule";
      )
        if (((o = o.parent), !o)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ci.get(o)) &&
        !n
      ) {
        ci.set(t, !0);
        for (
          var a = [], i = jc(r, a), s = o.props, l = 0, c = 0;
          l < i.length;
          l++
        )
          for (var u = 0; u < s.length; u++, c++)
            t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
      }
    }
  },
  Dc = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Ys(e, t) {
  switch (Cc(e, t)) {
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
              ? Ys(Le(e, "stretch", "fill-available"), t) + e
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
var Wc = function (t, r, o, n) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ca:
          t.return = Ys(t.value, t.length);
          break;
        case Vs:
          return Pr([Kr(t, { value: Le(t.value, "@", "@" + Oe) })], n);
        case Sa:
          if (t.length)
            return kc(t.props, function (a) {
              switch (wc(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Pr(
                    [Kr(t, { props: [Le(a, /:(read-\w+)/, ":" + Qo + "$1")] })],
                    n,
                  );
                case "::placeholder":
                  return Pr(
                    [
                      Kr(t, {
                        props: [Le(a, /:(plac\w+)/, ":" + Oe + "input-$1")],
                      }),
                      Kr(t, { props: [Le(a, /:(plac\w+)/, ":" + Qo + "$1")] }),
                      Kr(t, { props: [Le(a, /:(plac\w+)/, Ze + "input-$1")] }),
                    ],
                    n,
                  );
              }
              return "";
            });
      }
  },
  Hc = [Wc],
  Vc = function (t) {
    var r = t.key;
    if (r === "css") {
      var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(o, function (g) {
        var b = g.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var n = t.stylisPlugins || Hc,
      a = {},
      i,
      s = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (g) {
          for (
            var b = g.getAttribute("data-emotion").split(" "), x = 1;
            x < b.length;
            x++
          )
            a[b[x]] = !0;
          s.push(g);
        },
      );
    var l,
      c = [Fc, Dc];
    {
      var u,
        h = [
          Oc,
          Bc(function (g) {
            u.insert(g);
          }),
        ],
        y = Lc(c.concat(n, h)),
        d = function (b) {
          return Pr(Mc(b), y);
        };
      l = function (b, x, k, S) {
        (u = k),
          d(b ? b + "{" + x.styles + "}" : x.styles),
          S && (f.inserted[x.name] = !0);
      };
    }
    var f = {
      key: r,
      sheet: new yc({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
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
var ui;
function Uc() {
  if (ui) return Be;
  ui = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    o = e ? Symbol.for("react.fragment") : 60107,
    n = e ? Symbol.for("react.strict_mode") : 60108,
    a = e ? Symbol.for("react.profiler") : 60114,
    i = e ? Symbol.for("react.provider") : 60109,
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
            case a:
            case n:
            case h:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case s:
                case u:
                case f:
                case d:
                case i:
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
    (Be.ContextProvider = i),
    (Be.Element = t),
    (Be.ForwardRef = u),
    (Be.Fragment = o),
    (Be.Lazy = f),
    (Be.Memo = d),
    (Be.Portal = r),
    (Be.Profiler = a),
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
      return S(C) === i;
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
      return S(C) === a;
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
        C === a ||
        C === n ||
        C === h ||
        C === y ||
        (typeof C == "object" &&
          C !== null &&
          (C.$$typeof === f ||
            C.$$typeof === d ||
            C.$$typeof === i ||
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
var di;
function _c() {
  return di || ((di = 1), (Ln.exports = Uc())), Ln.exports;
}
var Bn, pi;
function Gc() {
  if (pi) return Bn;
  pi = 1;
  var e = _c(),
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
    a = {};
  (a[e.ForwardRef] = o), (a[e.Memo] = n);
  function i(f) {
    return e.isMemo(f) ? n : a[f.$$typeof] || t;
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
      for (var S = i(f), v = i(g), C = 0; C < k.length; ++C) {
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
Gc();
var Kc = !0;
function Xs(e, t, r) {
  var o = "";
  return (
    r.split(" ").forEach(function (n) {
      e[n] !== void 0 ? t.push(e[n] + ";") : n && (o += n + " ");
    }),
    o
  );
}
var ka = function (t, r, o) {
    var n = t.key + "-" + r.name;
    (o === !1 || Kc === !1) &&
      t.registered[n] === void 0 &&
      (t.registered[n] = r.styles);
  },
  Ra = function (t, r, o) {
    ka(t, r, o);
    var n = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do t.insert(r === a ? "." + n : "", a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function qc(e) {
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
var Yc = {
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
  Xc = /[A-Z]|^ms/g,
  Jc = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Js = function (t) {
    return t.charCodeAt(1) === 45;
  },
  fi = function (t) {
    return t != null && typeof t != "boolean";
  },
  Nn = qs(function (e) {
    return Js(e) ? e : e.replace(Xc, "-$&").toLowerCase();
  }),
  mi = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Jc, function (o, n, a) {
            return (Pt = { name: n, styles: a, next: Pt }), n;
          });
    }
    return Yc[t] !== 1 && !Js(t) && typeof r == "number" && r !== 0
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
      var a = r;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (Pt = { name: i.name, styles: i.styles, next: Pt }), (i = i.next);
        var s = a.styles + ";";
        return s;
      }
      return Qc(e, t, r);
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
function Qc(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++) o += mo(e, t, r[n]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0
          ? (o += a + "{" + t[s] + "}")
          : fi(s) && (o += Nn(a) + ":" + mi(a, s) + ";");
      } else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (t == null || t[i[0]] === void 0)
      )
        for (var l = 0; l < i.length; l++)
          fi(i[l]) && (o += Nn(a) + ":" + mi(a, i[l]) + ";");
      else {
        var c = mo(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            o += Nn(a) + ":" + c + ";";
            break;
          }
          default:
            o += a + "{" + c + "}";
        }
      }
    }
  return o;
}
var gi = /label:\s*([^\s;{]+)\s*(;|$)/g,
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
  var a = e[0];
  if (a == null || a.raw === void 0) (o = !1), (n += mo(r, t, a));
  else {
    var i = a;
    n += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (((n += mo(r, t, e[s])), o)) {
      var l = a;
      n += l[s];
    }
  gi.lastIndex = 0;
  for (var c = "", u; (u = gi.exec(n)) !== null; ) c += "-" + u[1];
  var h = qc(n) + c;
  return { name: h, styles: n, next: Pt };
}
var Zc = function (t) {
    return t();
  },
  Qs = qn.useInsertionEffect ? qn.useInsertionEffect : !1,
  Zs = Qs || Zc,
  hi = Qs || m.useLayoutEffect,
  el = m.createContext(typeof HTMLElement < "u" ? Vc({ key: "css" }) : null);
el.Provider;
var Ta = function (t) {
    return m.forwardRef(function (r, o) {
      var n = m.useContext(el);
      return t(r, n, o);
    });
  },
  Co = m.createContext({}),
  $a = {}.hasOwnProperty,
  Jn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  eu = function (t, r) {
    var o = {};
    for (var n in r) $a.call(r, n) && (o[n] = r[n]);
    return (o[Jn] = t), o;
  },
  tu = function (t) {
    var r = t.cache,
      o = t.serialized,
      n = t.isStringTag;
    return (
      ka(r, o, n),
      Zs(function () {
        return Ra(r, o, n);
      }),
      null
    );
  },
  ru = Ta(function (e, t, r) {
    var o = e.css;
    typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
    var n = e[Jn],
      a = [o],
      i = "";
    typeof e.className == "string"
      ? (i = Xs(t.registered, a, e.className))
      : e.className != null && (i = e.className + " ");
    var s = So(a, void 0, m.useContext(Co));
    i += t.key + "-" + s.name;
    var l = {};
    for (var c in e) $a.call(e, c) && c !== "css" && c !== Jn && (l[c] = e[c]);
    return (
      (l.className = i),
      r && (l.ref = r),
      m.createElement(
        m.Fragment,
        null,
        m.createElement(tu, {
          cache: t,
          serialized: s,
          isStringTag: typeof n == "string",
        }),
        m.createElement(n, l),
      )
    );
  }),
  ou = ru,
  yi = function (t, r) {
    var o = arguments;
    if (r == null || !$a.call(r, "css"))
      return m.createElement.apply(void 0, o);
    var n = o.length,
      a = new Array(n);
    (a[0] = ou), (a[1] = eu(t, r));
    for (var i = 2; i < n; i++) a[i] = o[i];
    return m.createElement.apply(null, a);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(yi || (yi = {}));
var nu = Ta(function (e, t) {
  var r = e.styles,
    o = So([r], void 0, m.useContext(Co)),
    n = m.useRef();
  return (
    hi(
      function () {
        var a = t.key + "-global",
          i = new t.sheet.constructor({
            key: a,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          s = !1,
          l = document.querySelector(
            'style[data-emotion="' + a + " " + o.name + '"]',
          );
        return (
          t.sheet.tags.length && (i.before = t.sheet.tags[0]),
          l !== null &&
            ((s = !0), l.setAttribute("data-emotion", a), i.hydrate([l])),
          (n.current = [i, s]),
          function () {
            i.flush();
          }
        );
      },
      [t],
    ),
    hi(
      function () {
        var a = n.current,
          i = a[0],
          s = a[1];
        if (s) {
          a[1] = !1;
          return;
        }
        if ((o.next !== void 0 && Ra(t, o.next, !0), i.tags.length)) {
          var l = i.tags[i.tags.length - 1].nextElementSibling;
          (i.before = l), i.flush();
        }
        t.insert("", o, i, !1);
      },
      [t, o.name],
    ),
    null
  );
});
function Dr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return So(t);
}
function Xt() {
  var e = Dr.apply(void 0, arguments),
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
var au =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  iu = qs(function (e) {
    return (
      au.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  su = iu,
  lu = function (t) {
    return t !== "theme";
  },
  vi = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? su : lu;
  },
  bi = function (t, r, o) {
    var n;
    if (r) {
      var a = r.shouldForwardProp;
      n =
        t.__emotion_forwardProp && a
          ? function (i) {
              return t.__emotion_forwardProp(i) && a(i);
            }
          : a;
    }
    return typeof n != "function" && o && (n = t.__emotion_forwardProp), n;
  },
  cu = function (t) {
    var r = t.cache,
      o = t.serialized,
      n = t.isStringTag;
    return (
      ka(r, o, n),
      Zs(function () {
        return Ra(r, o, n);
      }),
      null
    );
  },
  uu = function e(t, r) {
    var o = t.__emotion_real === t,
      n = (o && t.__emotion_base) || t,
      a,
      i;
    r !== void 0 && ((a = r.label), (i = r.target));
    var s = bi(t, r, o),
      l = s || vi(n),
      c = !l("as");
    return function () {
      var u = arguments,
        h =
          o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (a !== void 0 && h.push("label:" + a + ";"),
        u[0] == null || u[0].raw === void 0)
      )
        h.push.apply(h, u);
      else {
        var y = u[0];
        h.push(y[0]);
        for (var d = u.length, f = 1; f < d; f++) h.push(u[f], y[f]);
      }
      var g = Ta(function (b, x, k) {
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
          ? (v = Xs(x.registered, C, b.className))
          : b.className != null && (v = b.className + " ");
        var I = So(h.concat(C), x.registered, R);
        (v += x.key + "-" + I.name), i !== void 0 && (v += " " + i);
        var A = c && s === void 0 ? vi(S) : l,
          O = {};
        for (var L in b) (c && L === "as") || (A(L) && (O[L] = b[L]));
        return (
          (O.className = v),
          k && (O.ref = k),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(cu, {
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
          a !== void 0
            ? a
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
            return "." + i;
          },
        }),
        (g.withComponent = function (b, x) {
          var k = e(b, Jo({}, r, x, { shouldForwardProp: bi(g, x, !0) }));
          return k.apply(void 0, h);
        }),
        g
      );
    };
  },
  du = [
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
  Qn = uu.bind(null);
du.forEach(function (e) {
  Qn[e] = Qn(e);
});
function pu(e) {
  return e == null || Object.keys(e).length === 0;
}
function tl(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    o = typeof t == "function" ? (n) => t(pu(n) ? r : n) : t;
  return w.jsx(nu, { styles: o });
}
function rl(e, t) {
  return Qn(e, t);
}
function fu(e, t) {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
}
const xi = [];
function Gt(e) {
  return (xi[0] = e), So(xi);
}
var zn = { exports: {} },
  Fe = {}; /**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function mu() {
  if (Si) return Fe;
  Si = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    n = Symbol.for("react.profiler"),
    a = Symbol.for("react.consumer"),
    i = Symbol.for("react.context"),
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
                case i:
                case s:
                case h:
                case u:
                  return g;
                case a:
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
    (Fe.ContextConsumer = a),
    (Fe.ContextProvider = i),
    (Fe.Element = e),
    (Fe.ForwardRef = s),
    (Fe.Fragment = r),
    (Fe.Lazy = h),
    (Fe.Memo = u),
    (Fe.Portal = t),
    (Fe.Profiler = n),
    (Fe.StrictMode = o),
    (Fe.Suspense = l),
    (Fe.SuspenseList = c),
    (Fe.isContextConsumer = function (g) {
      return f(g) === a;
    }),
    (Fe.isContextProvider = function (g) {
      return f(g) === i;
    }),
    (Fe.isElement = function (g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }),
    (Fe.isForwardRef = function (g) {
      return f(g) === s;
    }),
    (Fe.isFragment = function (g) {
      return f(g) === r;
    }),
    (Fe.isLazy = function (g) {
      return f(g) === h;
    }),
    (Fe.isMemo = function (g) {
      return f(g) === u;
    }),
    (Fe.isPortal = function (g) {
      return f(g) === t;
    }),
    (Fe.isProfiler = function (g) {
      return f(g) === n;
    }),
    (Fe.isStrictMode = function (g) {
      return f(g) === o;
    }),
    (Fe.isSuspense = function (g) {
      return f(g) === l;
    }),
    (Fe.isSuspenseList = function (g) {
      return f(g) === c;
    }),
    (Fe.isValidElementType = function (g) {
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
            g.$$typeof === i ||
            g.$$typeof === a ||
            g.$$typeof === s ||
            g.$$typeof === d ||
            g.getModuleId !== void 0))
      );
    }),
    (Fe.typeOf = f),
    Fe
  );
}
var Ci;
function gu() {
  return Ci || ((Ci = 1), (zn.exports = mu())), zn.exports;
}
var ol = gu();
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
function nl(e) {
  if (m.isValidElement(e) || ol.isValidElementType(e) || !Et(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = nl(e[r]);
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
        m.isValidElement(t[n]) || ol.isValidElementType(t[n])
          ? (o[n] = t[n])
          : Et(t[n]) && Object.prototype.hasOwnProperty.call(e, n) && Et(e[n])
            ? (o[n] = Xe(e[n], t[n], r))
            : r.clone
              ? (o[n] = Et(t[n]) ? nl(t[n]) : t[n])
              : (o[n] = t[n]);
      }),
    o
  );
}
const hu = (e) => {
  const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
  return (
    t.sort((r, o) => r.val - o.val),
    t.reduce((r, o) => ({ ...r, [o.key]: o.val }), {})
  );
};
function yu(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = "px",
      step: o = 5,
      ...n
    } = e,
    a = hu(t),
    i = Object.keys(a);
  function s(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - o / 100}${r})`;
  }
  function c(y, d) {
    const f = i.indexOf(d);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(f !== -1 && typeof t[i[f]] == "number" ? t[i[f]] : d) - o / 100}${r})`;
  }
  function u(y) {
    return i.indexOf(y) + 1 < i.length ? c(y, i[i.indexOf(y) + 1]) : s(y);
  }
  function h(y) {
    const d = i.indexOf(y);
    return d === 0
      ? s(i[1])
      : d === i.length - 1
        ? l(i[d])
        : c(y, i[i.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: a,
    up: s,
    down: l,
    between: c,
    only: u,
    not: h,
    unit: r,
    ...n,
  };
}
function wi(e, t) {
  if (!e.containerQueries) return t;
  const r = Object.keys(t)
    .filter((o) => o.startsWith("@container"))
    .sort((o, n) => {
      var i, s;
      const a = /min-width:\s*([0-9.]+)/;
      return (
        +(((i = o.match(a)) == null ? void 0 : i[1]) || 0) -
        +(((s = n.match(a)) == null ? void 0 : s[1]) || 0)
      );
    });
  return r.length
    ? r.reduce(
        (o, n) => {
          const a = t[n];
          return delete o[n], (o[n] = a), o;
        },
        { ...t },
      )
    : t;
}
function vu(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/)))
  );
}
function bu(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, o, n] = r,
    a = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(n).up(a);
}
function xu(e) {
  const t = (a, i) => a.replace("@media", i ? `@container ${i}` : "@container");
  function r(a, i) {
    (a.up = (...s) => t(e.breakpoints.up(...s), i)),
      (a.down = (...s) => t(e.breakpoints.down(...s), i)),
      (a.between = (...s) => t(e.breakpoints.between(...s), i)),
      (a.only = (...s) => t(e.breakpoints.only(...s), i)),
      (a.not = (...s) => {
        const l = t(e.breakpoints.not(...s), i);
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
    n = (a) => (r(o, a), o);
  return r(n), { ...e, containerQueries: n };
}
const Su = { borderRadius: 4 };
function ao(e, t) {
  return t ? Xe(e, t, { clone: !1 }) : e;
}
const dn = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  ki = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${dn[e]}px)`,
  },
  Cu = {
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
    const a = o.breakpoints || ki;
    return t.reduce((i, s, l) => ((i[a.up(a.keys[l])] = r(t[l])), i), {});
  }
  if (typeof t == "object") {
    const a = o.breakpoints || ki;
    return Object.keys(t).reduce((i, s) => {
      if (vu(a.keys, s)) {
        const l = bu(o.containerQueries ? o : Cu, s);
        l && (i[l] = r(t[s], s));
      } else if (Object.keys(a.values || dn).includes(s)) {
        const l = a.up(s);
        i[l] = r(t[s], s);
      } else {
        const l = s;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return r(t);
}
function al(e = {}) {
  var r;
  return (
    ((r = e.keys) == null
      ? void 0
      : r.reduce((o, n) => {
          const a = e.up(n);
          return (o[a] = {}), o;
        }, {})) || {}
  );
}
function Zn(e, t) {
  return e.reduce((r, o) => {
    const n = r[o];
    return (!n || Object.keys(n).length === 0) && delete r[o], r;
  }, t);
}
function wu(e, ...t) {
  const r = al(e),
    o = [r, ...t].reduce((n, a) => Xe(n, a), {});
  return Zn(Object.keys(r), o);
}
function ku(e, t) {
  if (typeof e != "object") return {};
  const r = {},
    o = Object.keys(t);
  return (
    Array.isArray(e)
      ? o.forEach((n, a) => {
          a < e.length && (r[n] = !0);
        })
      : o.forEach((n) => {
          e[n] != null && (r[n] = !0);
        }),
    r
  );
}
function jn({ values: e, breakpoints: t, base: r }) {
  const o = r || ku(e, t),
    n = Object.keys(o);
  if (n.length === 0) return e;
  let a;
  return n.reduce(
    (i, s, l) => (
      Array.isArray(e)
        ? ((i[s] = e[l] != null ? e[l] : e[a]), (a = l))
        : typeof e == "object"
          ? ((i[s] = e[s] != null ? e[s] : e[a]), (a = s))
          : (i[s] = e),
      i
    ),
    {},
  );
}
function N(e) {
  if (typeof e != "string") throw new Error(Ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function pn(e, t, r = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`
      .split(".")
      .reduce((n, a) => (n && n[a] ? n[a] : null), e);
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
    a = (i) => {
      if (i[t] == null) return null;
      const s = i[t],
        l = i.theme,
        c = pn(l, o) || {};
      return St(i, s, (h) => {
        let y = Zo(c, n, h);
        return (
          h === y &&
            typeof h == "string" &&
            (y = Zo(c, n, `${t}${h === "default" ? "" : N(h)}`, h)),
          r === !1 ? y : { [r]: y }
        );
      });
    };
  return (a.propTypes = {}), (a.filterProps = [t]), a;
}
function Ru(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Tu = { m: "margin", p: "padding" },
  $u = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Ri = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Pu = Ru((e) => {
    if (e.length > 2)
      if (Ri[e]) e = Ri[e];
      else return [e];
    const [t, r] = e.split(""),
      o = Tu[t],
      n = $u[r] || "";
    return Array.isArray(n) ? n.map((a) => o + a) : [o + n];
  }),
  Pa = [
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
  Ea = [
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
[...Pa, ...Ea];
function wo(e, t, r, o) {
  const n = pn(e, t, !0) ?? r;
  return typeof n == "number" || typeof n == "string"
    ? (a) =>
        typeof a == "string"
          ? a
          : typeof n == "string"
            ? n.startsWith("var(") && a === 0
              ? 0
              : n.startsWith("var(") && a === 1
                ? n
                : `calc(${a} * ${n})`
            : n * a
    : Array.isArray(n)
      ? (a) => {
          if (typeof a == "string") return a;
          const i = Math.abs(a),
            s = n[i];
          return a >= 0
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
function Eu(e, t) {
  return (r) => e.reduce((o, n) => ((o[n] = ur(t, r)), o), {});
}
function Iu(e, t, r, o) {
  if (!t.includes(r)) return null;
  const n = Pu(r),
    a = Eu(n, o),
    i = e[r];
  return St(e, i, a);
}
function il(e, t) {
  const r = fn(e.theme);
  return Object.keys(e)
    .map((o) => Iu(e, t, o, r))
    .reduce(ao, {});
}
function Ue(e) {
  return il(e, Pa);
}
Ue.propTypes = {};
Ue.filterProps = Pa;
function _e(e) {
  return il(e, Ea);
}
_e.propTypes = {};
_e.filterProps = Ea;
function sl(e = 8, t = fn({ spacing: e })) {
  if (e.mui) return e;
  const r = (...o) =>
    (o.length === 0 ? [1] : o)
      .map((a) => {
        const i = t(a);
        return typeof i == "number" ? `${i}px` : i;
      })
      .join(" ");
  return (r.mui = !0), r;
}
function mn(...e) {
  const t = e.reduce(
      (o, n) => (
        n.filterProps.forEach((a) => {
          o[a] = n;
        }),
        o
      ),
      {},
    ),
    r = (o) => Object.keys(o).reduce((n, a) => (t[a] ? ao(n, t[a](o)) : n), {});
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
const Mu = yt("border", pt),
  Au = yt("borderTop", pt),
  Ou = yt("borderRight", pt),
  Lu = yt("borderBottom", pt),
  Bu = yt("borderLeft", pt),
  Nu = yt("borderColor"),
  zu = yt("borderTopColor"),
  ju = yt("borderRightColor"),
  Fu = yt("borderBottomColor"),
  Du = yt("borderLeftColor"),
  Wu = yt("outline", pt),
  Hu = yt("outlineColor"),
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
mn(Mu, Au, Ou, Lu, Bu, Nu, zu, ju, Fu, Du, gn, Wu, Hu);
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
const Vu = Ke({ prop: "gridColumn" }),
  Uu = Ke({ prop: "gridRow" }),
  _u = Ke({ prop: "gridAutoFlow" }),
  Gu = Ke({ prop: "gridAutoColumns" }),
  Ku = Ke({ prop: "gridAutoRows" }),
  qu = Ke({ prop: "gridTemplateColumns" }),
  Yu = Ke({ prop: "gridTemplateRows" }),
  Xu = Ke({ prop: "gridTemplateAreas" }),
  Ju = Ke({ prop: "gridArea" });
mn(hn, yn, vn, Vu, Uu, _u, Gu, Ku, qu, Yu, Xu, Ju);
function Er(e, t) {
  return t === "grey" ? t : e;
}
const Qu = Ke({ prop: "color", themeKey: "palette", transform: Er }),
  Zu = Ke({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Er,
  }),
  ed = Ke({ prop: "backgroundColor", themeKey: "palette", transform: Er });
mn(Qu, Zu, ed);
function st(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const td = Ke({ prop: "width", transform: st }),
  Ia = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var n, a, i, s, l;
        const o =
          ((i =
            (a = (n = e.theme) == null ? void 0 : n.breakpoints) == null
              ? void 0
              : a.values) == null
            ? void 0
            : i[r]) || dn[r];
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
Ia.filterProps = ["maxWidth"];
const rd = Ke({ prop: "minWidth", transform: st }),
  od = Ke({ prop: "height", transform: st }),
  nd = Ke({ prop: "maxHeight", transform: st }),
  ad = Ke({ prop: "minHeight", transform: st });
Ke({ prop: "size", cssProperty: "width", transform: st });
Ke({ prop: "size", cssProperty: "height", transform: st });
const id = Ke({ prop: "boxSizing" });
mn(td, Ia, rd, od, nd, ad, id);
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
  color: { themeKey: "palette", transform: Er },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Er,
  },
  backgroundColor: { themeKey: "palette", transform: Er },
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
  maxWidth: { style: Ia },
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
function sd(...e) {
  const t = e.reduce((o, n) => o.concat(Object.keys(n)), []),
    r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function ld(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cd() {
  function e(r, o, n, a) {
    const i = { [r]: o, theme: n },
      s = a[r];
    if (!s) return { [r]: o };
    const { cssProperty: l = r, themeKey: c, transform: u, style: h } = s;
    if (o == null) return null;
    if (c === "typography" && o === "inherit") return { [r]: o };
    const y = pn(n, c) || {};
    return h
      ? h(i)
      : St(i, o, (f) => {
          let g = Zo(y, u, f);
          return (
            f === g &&
              typeof f == "string" &&
              (g = Zo(y, u, `${r}${f === "default" ? "" : N(f)}`, f)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(r) {
    const { sx: o, theme: n = {}, nested: a } = r || {};
    if (!o) return null;
    const i = n.unstable_sxConfig ?? ko;
    function s(l) {
      let c = l;
      if (typeof l == "function") c = l(n);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const u = al(n.breakpoints),
        h = Object.keys(u);
      let y = u;
      return (
        Object.keys(c).forEach((d) => {
          const f = ld(c[d], n);
          if (f != null)
            if (typeof f == "object")
              if (i[d]) y = ao(y, e(d, f, n, i));
              else {
                const g = St({ theme: n }, f, (b) => ({ [d]: b }));
                sd(g, f)
                  ? (y[d] = t({ sx: f, theme: n, nested: !0 }))
                  : (y = ao(y, g));
              }
            else y = ao(y, e(d, f, n, i));
        }),
        !a && n.modularCssLayers
          ? { "@layer sx": wi(n, Zn(h, y)) }
          : wi(n, Zn(h, y))
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const qt = cd();
qt.filterProps = ["sx"];
function ud(e, t) {
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
      shape: a = {},
      ...i
    } = e,
    s = yu(r),
    l = sl(n);
  let c = Xe(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...o },
      spacing: l,
      shape: { ...Su, ...a },
    },
    i,
  );
  return (
    (c = xu(c)),
    (c.applyStyles = ud),
    (c = t.reduce((u, h) => Xe(u, h), c)),
    (c.unstable_sxConfig = {
      ...ko,
      ...(i == null ? void 0 : i.unstable_sxConfig),
    }),
    (c.unstable_sx = function (h) {
      return qt({ sx: h, theme: this });
    }),
    c
  );
}
function dd(e) {
  return Object.keys(e).length === 0;
}
function Ma(e = null) {
  const t = m.useContext(Co);
  return !t || dd(t) ? e : t;
}
const pd = Ro();
function To(e = pd) {
  return Ma(e);
}
function Fn(e) {
  const t = Gt(e);
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) ||
        (t.styles = `@layer global{${t.styles}}`),
      t)
    : e;
}
function ll({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const o = To(r),
    n = (t && o[t]) || o;
  let a = typeof e == "function" ? e(n) : e;
  return (
    n.modularCssLayers &&
      (Array.isArray(a)
        ? (a = a.map((i) => Fn(typeof i == "function" ? i(n) : i)))
        : (a = Fn(a))),
    w.jsx(tl, { styles: a })
  );
}
const fd = (e) => {
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
    { systemProps: o, otherProps: n } = fd(r);
  let a;
  return (
    Array.isArray(t)
      ? (a = [o, ...t])
      : typeof t == "function"
        ? (a = (...i) => {
            const s = t(...i);
            return Et(s) ? { ...o, ...s } : o;
          })
        : (a = { ...o, ...t }),
    { ...n, sx: a }
  );
}
const Ti = (e) => e,
  md = () => {
    let e = Ti;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ti;
      },
    };
  },
  cl = md();
function ul(e) {
  var t,
    r,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (r = ul(e[t])) && (o && (o += " "), (o += r));
    } else for (r in e) e[r] && (o && (o += " "), (o += r));
  return o;
}
function U() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
    (e = arguments[r]) && (t = ul(e)) && (o && (o += " "), (o += t));
  return o;
}
function gd(e = {}) {
  const {
      themeId: t,
      defaultTheme: r,
      defaultClassName: o = "MuiBox-root",
      generateClassName: n,
    } = e,
    a = rl("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(qt);
  return m.forwardRef(function (l, c) {
    const u = To(r),
      { className: h, component: y = "div", ...d } = bn(l);
    return w.jsx(a, {
      as: y,
      ref: c,
      className: U(h, n ? n(o) : o),
      theme: (t && u[t]) || u,
      ...d,
    });
  });
}
const hd = {
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
function se(e, t, r = "Mui") {
  const o = hd[t];
  return o ? `${r}-${o}` : `${cl.generate(e)}-${t}`;
}
function ce(e, t, r = "Mui") {
  const o = {};
  return (
    t.forEach((n) => {
      o[n] = se(e, n, r);
    }),
    o
  );
}
function dl(e) {
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
const yd = Ro();
function Dn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ar(e, t) {
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
function vd(e) {
  return e ? (t, r) => r[e] : null;
}
function bd(e, t, r) {
  e.theme = Sd(e.theme) ? r : e.theme[t] || e.theme;
}
function Ko(e, t, r) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o)) return o.flatMap((n) => Ko(e, n, r));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let n;
    if (o.isProcessed) n = r ? ar(o.style, r) : o.style;
    else {
      const { variants: a, ...i } = o;
      n = r ? ar(Gt(i), r) : i;
    }
    return pl(e, o.variants, [n], r);
  }
  return o != null && o.isProcessed
    ? r
      ? ar(Gt(o.style), r)
      : o.style
    : r
      ? ar(Gt(o), r)
      : o;
}
function pl(e, t, r = [], o = void 0) {
  var a;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
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
          ((a = e.ownerState) == null ? void 0 : a[l]) !== s.props[l]
        )
          continue e;
    typeof s.style == "function"
      ? (n ?? (n = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        r.push(o ? ar(Gt(s.style(n)), o) : s.style(n)))
      : r.push(o ? ar(Gt(s.style), o) : s.style);
  }
  return r;
}
function fl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = yd,
    rootShouldForwardProp: o = Dn,
    slotShouldForwardProp: n = Dn,
  } = e;
  function a(s) {
    bd(s, t, r);
  }
  return (s, l = {}) => {
    fu(s, (R) => R.filter((P) => P !== qt));
    const {
        name: c,
        slot: u,
        skipVariantsResolver: h,
        skipSx: y,
        overridesResolver: d = vd(wd(u)),
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
        : Cd(s) && (k = void 0);
    const S = rl(s, { shouldForwardProp: k, label: xd(), ...f }),
      v = (R) => {
        if (R.__emotion_real === R) return R;
        if (typeof R == "function")
          return function (I) {
            return Ko(I, R, I.theme.modularCssLayers ? g : void 0);
          };
        if (Et(R)) {
          const P = dl(R);
          return function (A) {
            return P.variants
              ? Ko(A, P, A.theme.modularCssLayers ? g : void 0)
              : A.theme.modularCssLayers
                ? ar(P.style, g)
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
          (P.push(a),
          c &&
            d &&
            A.push(function ($) {
              var D, B;
              const M =
                (B = (D = $.theme.components) == null ? void 0 : D[c]) == null
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
              var E, D;
              const T = $.theme,
                M =
                  (D =
                    (E = T == null ? void 0 : T.components) == null
                      ? void 0
                      : E[c]) == null
                    ? void 0
                    : D.variants;
              return M
                ? pl($, M, [], $.theme.modularCssLayers ? "theme" : void 0)
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
function xd(e, t) {
  return void 0;
}
function Sd(e) {
  for (const t in e) return !1;
  return !0;
}
function Cd(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function wd(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ml = fl();
function go(e, t, r = !1) {
  const o = { ...t };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const a = n;
      if (a === "components" || a === "slots") o[a] = { ...e[a], ...o[a] };
      else if (a === "componentsProps" || a === "slotProps") {
        const i = e[a],
          s = t[a];
        if (!s) o[a] = i || {};
        else if (!i) o[a] = s;
        else {
          o[a] = { ...s };
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const c = l;
              o[a][c] = go(i[c], s[c], r);
            }
        }
      } else
        a === "className" && r && t.className
          ? (o.className = U(
              e == null ? void 0 : e.className,
              t == null ? void 0 : t.className,
            ))
          : a === "style" && r && t.style
            ? (o.style = {
                ...(e == null ? void 0 : e.style),
                ...(t == null ? void 0 : t.style),
              })
            : o[a] === void 0 && (o[a] = e[a]);
    }
  return o;
}
function kd(e) {
  const { theme: t, name: r, props: o } = e;
  return !t ||
    !t.components ||
    !t.components[r] ||
    !t.components[r].defaultProps
    ? o
    : go(t.components[r].defaultProps, o);
}
function gl({ props: e, name: t, defaultTheme: r, themeId: o }) {
  let n = To(r);
  return o && (n = n[o] || n), kd({ theme: n, name: t, props: e });
}
const it = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function kr(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Aa(e, t = 0, r = 1) {
  return kr(e, t, r);
}
function Rd(e) {
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
  if (e.charAt(0) === "#") return Yt(Rd(e));
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
    (o = o.map((a) => parseFloat(a))), { type: r, values: o, colorSpace: n }
  );
}
const Td = (e) => {
    const t = Yt(e);
    return t.values
      .slice(0, 3)
      .map((r, o) => (t.type.includes("hsl") && o !== 0 ? `${r}%` : r))
      .join(" ");
  },
  to = (e, t) => {
    try {
      return Td(e);
    } catch {
      return e;
    }
  };
function xn(e) {
  const { type: t, colorSpace: r } = e;
  let { values: o } = e;
  return (
    t.includes("rgb")
      ? (o = o.map((n, a) => (a < 3 ? parseInt(n, 10) : n)))
      : t.includes("hsl") && ((o[1] = `${o[1]}%`), (o[2] = `${o[2]}%`)),
    t.includes("color") ? (o = `${r} ${o.join(" ")}`) : (o = `${o.join(", ")}`),
    `${t}(${o})`
  );
}
function hl(e) {
  e = Yt(e);
  const { values: t } = e,
    r = t[0],
    o = t[1] / 100,
    n = t[2] / 100,
    a = o * Math.min(n, 1 - n),
    i = (c, u = (c + r / 30) % 12) =>
      n - a * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let s = "rgb";
  const l = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), l.push(t[3])), xn({ type: s, values: l })
  );
}
function ea(e) {
  e = Yt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Yt(hl(e)).values : e.values;
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
function $d(e, t) {
  const r = ea(e),
    o = ea(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function en(e, t) {
  return (
    (e = Yt(e)),
    (t = Aa(t)),
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
  if (((e = Yt(e)), (t = Aa(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
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
  if (((e = Yt(e)), (t = Aa(t)), e.type.includes("hsl")))
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
function ta(e, t = 0.15) {
  return ea(e) > 0.5 ? Sn(e, t) : Cn(e, t);
}
function Mo(e, t, r) {
  try {
    return ta(e, t);
  } catch {
    return e;
  }
}
const yl = m.createContext(null);
function Oa() {
  return m.useContext(yl);
}
const Pd = typeof Symbol == "function" && Symbol.for,
  Ed = Pd ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Id(e, t) {
  return typeof t == "function" ? t(e) : { ...e, ...t };
}
function Md(e) {
  const { children: t, theme: r } = e,
    o = Oa(),
    n = m.useMemo(() => {
      const a = o === null ? { ...r } : Id(o, r);
      return a != null && (a[Ed] = o !== null), a;
    }, [r, o]);
  return w.jsx(yl.Provider, { value: n, children: t });
}
const vl = m.createContext();
function Ad({ value: e, ...t }) {
  return w.jsx(vl.Provider, { value: e ?? !0, ...t });
}
const Wr = () => m.useContext(vl) ?? !1,
  bl = m.createContext(void 0);
function Od({ value: e, children: t }) {
  return w.jsx(bl.Provider, { value: e, children: t });
}
function Ld(e) {
  const { theme: t, name: r, props: o } = e;
  if (!t || !t.components || !t.components[r]) return o;
  const n = t.components[r];
  return n.defaultProps
    ? go(n.defaultProps, o, t.components.mergeClassNameAndStyle)
    : !n.styleOverrides && !n.variants
      ? go(n, o, t.components.mergeClassNameAndStyle)
      : o;
}
function Bd({ props: e, name: t }) {
  const r = m.useContext(bl);
  return Ld({ props: e, name: t, theme: { components: r } });
}
let $i = 0;
function Nd(e) {
  const [t, r] = m.useState(e),
    o = e || t;
  return (
    m.useEffect(() => {
      t == null && (($i += 1), r(`mui-${$i}`));
    }, [t]),
    o
  );
}
const zd = { ...qn },
  Pi = zd.useId;
function mr(e) {
  if (Pi !== void 0) {
    const t = Pi();
    return e ?? t;
  }
  return Nd(e);
}
function jd(e) {
  const t = Ma(),
    r = mr() || "",
    { modularCssLayers: o } = e;
  let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return (
    !o || t !== null
      ? (n = "")
      : typeof o == "string"
        ? (n = o.replace(/mui(?!\.)/g, n))
        : (n = `@layer ${n};`),
    it(() => {
      var s, l;
      const a = document.querySelector("head");
      if (!a) return;
      const i = a.firstChild;
      if (n) {
        if (
          i &&
          (s = i.hasAttribute) != null &&
          s.call(i, "data-mui-layer-order") &&
          i.getAttribute("data-mui-layer-order") === r
        )
          return;
        const c = document.createElement("style");
        c.setAttribute("data-mui-layer-order", r),
          (c.textContent = n),
          a.prepend(c);
      } else
        (l = a.querySelector(`style[data-mui-layer-order="${r}"]`)) == null ||
          l.remove();
    }, [n, r]),
    n ? w.jsx(ll, { styles: n }) : null
  );
}
const Ei = {};
function Ii(e, t, r, o = !1) {
  return m.useMemo(() => {
    const n = (e && t[e]) || t;
    if (typeof r == "function") {
      const a = r(n),
        i = e ? { ...t, [e]: a } : a;
      return o ? () => i : i;
    }
    return e ? { ...t, [e]: r } : { ...t, ...r };
  }, [e, t, r, o]);
}
function xl(e) {
  const { children: t, theme: r, themeId: o } = e,
    n = Ma(Ei),
    a = Oa() || Ei,
    i = Ii(o, n, r),
    s = Ii(o, a, r, !0),
    l = (o ? i[o] : i).direction === "rtl",
    c = jd(i);
  return w.jsx(Md, {
    theme: s,
    children: w.jsx(Co.Provider, {
      value: i,
      children: w.jsx(Ad, {
        value: l,
        children: w.jsxs(Od, {
          value: o ? i[o].components : i.components,
          children: [c, t],
        }),
      }),
    }),
  });
}
const Mi = { theme: void 0 };
function Fd(e) {
  let t, r;
  return function (n) {
    let a = t;
    return (
      (a === void 0 || n.theme !== r) &&
        ((Mi.theme = n.theme), (a = dl(e(Mi))), (t = a), (r = n.theme)),
      a
    );
  };
}
const La = "mode",
  Ba = "color-scheme",
  Dd = "data-color-scheme";
function Wd(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: n = La,
    colorSchemeStorageKey: a = Ba,
    attribute: i = Dd,
    colorSchemeNode: s = "document.documentElement",
    nonce: l,
  } = e || {};
  let c = "",
    u = i;
  if (
    (i === "class" && (u = ".%s"),
    i === "data" && (u = "[data-%s]"),
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
  const dark = localStorage.getItem('${a}-dark') || '${o}';
  const light = localStorage.getItem('${a}-light') || '${r}';
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
function Hd() {}
const Vd = ({ key: e, storageWindow: t }) => (
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
      if (!t) return Hd;
      const o = (n) => {
        const a = n.newValue;
        n.key === e && r(a);
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
function Ai(e) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    e === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function Sl(e, t) {
  if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
    return t("light");
  if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
    return t("dark");
}
function Ud(e) {
  return Sl(e, (t) => {
    if (t === "light") return e.lightColorScheme;
    if (t === "dark") return e.darkColorScheme;
  });
}
function _d(e) {
  const {
      defaultMode: t = "light",
      defaultLightColorScheme: r,
      defaultDarkColorScheme: o,
      supportedColorSchemes: n = [],
      modeStorageKey: a = La,
      colorSchemeStorageKey: i = Ba,
      storageWindow: s = typeof window > "u" ? void 0 : window,
      storageManager: l = Vd,
      noSsr: c = !1,
    } = e,
    u = n.join(","),
    h = n.length > 1,
    y = m.useMemo(
      () => (l == null ? void 0 : l({ key: a, storageWindow: s })),
      [l, a, s],
    ),
    d = m.useMemo(
      () => (l == null ? void 0 : l({ key: `${i}-light`, storageWindow: s })),
      [l, i, s],
    ),
    f = m.useMemo(
      () => (l == null ? void 0 : l({ key: `${i}-dark`, storageWindow: s })),
      [l, i, s],
    ),
    [g, b] = m.useState(() => {
      const I = (y == null ? void 0 : y.get(t)) || t,
        A = (d == null ? void 0 : d.get(r)) || r,
        O = (f == null ? void 0 : f.get(o)) || o;
      return {
        mode: I,
        systemMode: Ai(I),
        lightColorScheme: A,
        darkColorScheme: O,
      };
    }),
    [x, k] = m.useState(c || !h);
  m.useEffect(() => {
    k(!0);
  }, []);
  const S = Ud(g),
    v = m.useCallback(
      (I) => {
        b((A) => {
          if (I === A.mode) return A;
          const O = I ?? t;
          return y == null || y.set(O), { ...A, mode: O, systemMode: Ai(O) };
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
                    Sl(A, (L) => {
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
const Gd =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Kd(e) {
  const {
      themeId: t,
      theme: r = {},
      modeStorageKey: o = La,
      colorSchemeStorageKey: n = Ba,
      disableTransitionOnChange: a = !1,
      defaultColorScheme: i,
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
        disableTransitionOnChange: R = a,
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
      D = Oa(),
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
      me = typeof i == "string" ? i : i.light,
      ve = typeof i == "string" ? i : i.dark,
      Z =
        ee[me] && ee[ve]
          ? $
          : ((Q =
              (V = ee[X.defaultColorScheme]) == null ? void 0 : V.palette) ==
            null
              ? void 0
              : Q.mode) || ((he = X.palette) == null ? void 0 : he.mode),
      {
        mode: de,
        setMode: ae,
        systemMode: oe,
        lightColorScheme: Y,
        darkColorScheme: pe,
        colorScheme: Ae,
        setColorScheme: Se,
      } = _d({
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
    let Pe = de,
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
    it(() => {
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
          K.appendChild(A.createTextNode(Gd)),
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
        darkColorScheme: pe,
        lightColorScheme: Y,
        mode: Pe,
        setColorScheme: Se,
        setMode: ae,
        systemMode: oe,
      }),
      [te, Ee, pe, Y, Pe, Se, ae, oe, Re.colorSchemeSelector],
    );
    let Ie = !0;
    (p ||
      X.cssVariables === !1 ||
      (j && (D == null ? void 0 : D.cssVarPrefix) === J)) &&
      (Ie = !1);
    const W = w.jsxs(m.Fragment, {
      children: [
        w.jsx(xl, { themeId: H ? t : void 0, theme: Re, children: k }),
        Ie &&
          w.jsx(tl, {
            styles:
              ((xe = Re.generateStyleSheets) == null ? void 0 : xe.call(Re)) ||
              [],
          }),
      ],
    });
    return j ? W : w.jsx(c.Provider, { value: Ve, children: W });
  }
  const f = typeof i == "string" ? i : i.light,
    g = typeof i == "string" ? i : i.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: u,
    getInitColorSchemeScript: (x) =>
      Wd({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: f,
        defaultDarkColorScheme: g,
        modeStorageKey: o,
        ...x,
      }),
  };
}
function qd(e = "") {
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
const Oi = (e, t, r, o = []) => {
    let n = e;
    t.forEach((a, i) => {
      i === t.length - 1
        ? Array.isArray(n)
          ? (n[Number(a)] = r)
          : n && typeof n == "object" && (n[a] = r)
        : n &&
          typeof n == "object" &&
          (n[a] || (n[a] = o.includes(a) ? [] : {}), (n = n[a]));
    });
  },
  Yd = (e, t, r) => {
    function o(n, a = [], i = []) {
      Object.entries(n).forEach(([s, l]) => {
        (!r || (r && !r([...a, s]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? o(l, [...a, s], Array.isArray(l) ? [...i, s] : i)
            : t([...a, s], l, i));
      });
    }
    o(e);
  },
  Xd = (e, t) =>
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
    a = {},
    i = {};
  return (
    Yd(
      e,
      (s, l, c) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!o || !o(s, l))
        ) {
          const u = `--${r ? `${r}-` : ""}${s.join("-")}`,
            h = Xd(s, l);
          Object.assign(n, { [u]: h }),
            Oi(a, s, `var(${u})`, c),
            Oi(i, s, `var(${u}, ${h})`, c);
        }
      },
      (s) => s[0] === "vars",
    ),
    { css: n, vars: a, varsWithDefaults: i }
  );
}
function Jd(e, t = {}) {
  const {
      getSelector: r = x,
      disableCssColorScheme: o,
      colorSchemeSelector: n,
      enableContrastVars: a,
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: l = "light",
      ...c
    } = e,
    { vars: u, css: h, varsWithDefaults: y } = Hn(c, t);
  let d = y;
  const f = {},
    { [l]: g, ...b } = i;
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
              [`@media (prefers-color-scheme: ${((I = (P = i[v]) == null ? void 0 : P.palette) == null ? void 0 : I.mode) || v})`]:
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
            (O = (A = i[C]) == null ? void 0 : A.palette) == null
              ? void 0
              : O.mode,
          $ = !o && p ? { colorScheme: p, ...L } : { ...L };
        R(r(C, { ...$ }), $);
      }
      return (
        Object.entries(I).forEach(([L, { css: p }]) => {
          var M, E;
          const $ =
              (E = (M = i[L]) == null ? void 0 : M.palette) == null
                ? void 0
                : E.mode,
            T = !o && $ ? { colorScheme: $, ...p } : { ...p };
          R(r(L, { ...T }), T);
        }),
        a &&
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
function Qd(e) {
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
function le(e, t, r = void 0) {
  const o = {};
  for (const n in e) {
    const a = e[n];
    let i = "",
      s = !0;
    for (let l = 0; l < a.length; l += 1) {
      const c = a[l];
      c &&
        ((i += (s === !0 ? "" : " ") + t(c)),
        (s = !1),
        r && r[c] && (i += " " + r[c]));
    }
    o[n] = i;
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
const Zd = (e, t) => e.filter((r) => t.includes(r)),
  Hr = (e, t, r) => {
    const o = e.keys[0];
    Array.isArray(t)
      ? t.forEach((n, a) => {
          r((i, s) => {
            a <= e.keys.length - 1 &&
              (a === 0 ? Object.assign(i, s) : (i[e.up(e.keys[a])] = s));
          }, n);
        })
      : t && typeof t == "object"
        ? (Object.keys(t).length > e.keys.length
            ? e.keys
            : Zd(e.keys, Object.keys(t))
          ).forEach((a) => {
            if (e.keys.includes(a)) {
              const i = t[a];
              i !== void 0 &&
                r((s, l) => {
                  o === a ? Object.assign(s, l) : (s[e.up(a)] = l);
                }, i);
            }
          })
        : (typeof t == "number" || typeof t == "string") &&
          r((n, a) => {
            Object.assign(n, a);
          }, t);
  };
function tn(e) {
  return `--Grid-${e}Spacing`;
}
function wn(e) {
  return `--Grid-parent-${e}Spacing`;
}
const Li = "--Grid-columns",
  Ir = "--Grid-parent-columns",
  ep = ({ theme: e, ownerState: t }) => {
    const r = {};
    return (
      Hr(e.breakpoints, t.size, (o, n) => {
        let a = {};
        n === "grow" && (a = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          n === "auto" &&
            (a = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof n == "number" &&
            (a = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${n} / var(${Ir}) - (var(${Ir}) - ${n}) * (var(${wn("column")}) / var(${Ir})))`,
            }),
          o(r, a);
      }),
      r
    );
  },
  tp = ({ theme: e, ownerState: t }) => {
    const r = {};
    return (
      Hr(e.breakpoints, t.offset, (o, n) => {
        let a = {};
        n === "auto" && (a = { marginLeft: "auto" }),
          typeof n == "number" &&
            (a = {
              marginLeft:
                n === 0
                  ? "0px"
                  : `calc(100% * ${n} / var(${Ir}) + var(${wn("column")}) * ${n} / var(${Ir}))`,
            }),
          o(r, a);
      }),
      r
    );
  },
  rp = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = { [Li]: 12 };
    return (
      Hr(e.breakpoints, t.columns, (o, n) => {
        const a = n ?? 12;
        o(r, { [Li]: a, "> *": { [Ir]: a } });
      }),
      r
    );
  },
  op = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Hr(e.breakpoints, t.rowSpacing, (o, n) => {
        var i;
        const a =
          typeof n == "string"
            ? n
            : (i = e.spacing) == null
              ? void 0
              : i.call(e, n);
        o(r, { [tn("row")]: a, "> *": { [wn("row")]: a } });
      }),
      r
    );
  },
  np = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Hr(e.breakpoints, t.columnSpacing, (o, n) => {
        var i;
        const a =
          typeof n == "string"
            ? n
            : (i = e.spacing) == null
              ? void 0
              : i.call(e, n);
        o(r, { [tn("column")]: a, "> *": { [wn("column")]: a } });
      }),
      r
    );
  },
  ap = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return (
      Hr(e.breakpoints, t.direction, (o, n) => {
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
  sp = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([r, o]) => {
        o !== !1 && o !== void 0 && t.push(`grid-${r}-${String(o)}`);
      }),
      t
    );
  },
  lp = (e, t = "xs") => {
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
        Object.entries(e).forEach(([n, a]) => {
          r(a) && o.push(`spacing-${n}-${String(a)}`);
        }),
        o
      );
    }
    return [];
  },
  cp = (e) =>
    e === void 0
      ? []
      : typeof e == "object"
        ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`)
        : [`direction-xs-${String(e)}`];
function up(e, t) {
  e.item !== void 0 && delete e.item,
    e.zeroMinWidth !== void 0 && delete e.zeroMinWidth,
    t.keys.forEach((r) => {
      e[r] !== void 0 && delete e[r];
    });
}
const dp = Ro(),
  pp = ml("div", { name: "MuiGrid", slot: "Root" });
function fp(e) {
  return gl({ props: e, name: "MuiGrid", defaultTheme: dp });
}
function mp(e = {}) {
  const {
      createStyledComponent: t = pp,
      useThemeProps: r = fp,
      useTheme: o = To,
      componentName: n = "MuiGrid",
    } = e,
    a = (c, u) => {
      const { container: h, direction: y, spacing: d, wrap: f, size: g } = c,
        b = {
          root: [
            "root",
            h && "container",
            f !== "wrap" && `wrap-xs-${String(f)}`,
            ...cp(y),
            ...sp(g),
            ...(h ? lp(d, u.breakpoints.keys[0]) : []),
          ],
        };
      return le(b, (x) => se(n, x), {});
    };
  function i(c, u, h = () => !0) {
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
  const s = t(rp, np, op, ep, ap, ip, tp),
    l = m.forwardRef(function (u, h) {
      const y = o(),
        d = r(u),
        f = bn(d);
      up(f, y.breakpoints);
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
        $ = i(R, y.breakpoints, (H) => H !== !1),
        T = i(P, y.breakpoints),
        M = u.columns ?? (L ? void 0 : x),
        E = u.spacing ?? (L ? void 0 : I),
        D = u.rowSpacing ?? u.spacing ?? (L ? void 0 : A),
        B = u.columnSpacing ?? u.spacing ?? (L ? void 0 : O),
        j = {
          ...f,
          level: L,
          columns: M,
          container: k,
          direction: v,
          wrap: C,
          spacing: E,
          rowSpacing: D,
          columnSpacing: B,
          size: $,
          offset: T,
        },
        G = a(j, y);
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
const gp = Ro(),
  hp = ml("div", { name: "MuiStack", slot: "Root" });
function yp(e) {
  return gl({ props: e, name: "MuiStack", defaultTheme: gp });
}
function vp(e, t) {
  const r = m.Children.toArray(e).filter(Boolean);
  return r.reduce(
    (o, n, a) => (
      o.push(n),
      a < r.length - 1 && o.push(m.cloneElement(t, { key: `separator-${a}` })),
      o
    ),
    [],
  );
}
const bp = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    })[e],
  xp = ({ ownerState: e, theme: t }) => {
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
        a = jn({ values: e.direction, base: n }),
        i = jn({ values: e.spacing, base: n });
      typeof a == "object" &&
        Object.keys(a).forEach((l, c, u) => {
          if (!a[l]) {
            const y = c > 0 ? a[u[c - 1]] : "column";
            a[l] = y;
          }
        }),
        (r = Xe(
          r,
          St({ theme: t }, i, (l, c) =>
            e.useFlexGap
              ? { gap: ur(o, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${bp(c ? a[c] : e.direction)}`]: ur(o, l),
                  },
                },
          ),
        ));
    }
    return (r = wu(t.breakpoints, r)), r;
  };
function Sp(e = {}) {
  const {
      createStyledComponent: t = hp,
      useThemeProps: r = yp,
      componentName: o = "MuiStack",
    } = e,
    n = () => le({ root: ["root"] }, (l) => se(o, l), {}),
    a = t(xp);
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
    return w.jsx(a, {
      as: y,
      ownerState: v,
      ref: c,
      className: U(C.root, x),
      ...S,
      children: g ? vp(b, g) : b,
    });
  });
}
function Cl() {
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
const wl = Cl();
function kl() {
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
const ra = kl();
function Bi(e, t, r, o) {
  const n = o.light || o,
    a = o.dark || o * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === "light"
        ? (e.light = Cn(e.main, n))
        : t === "dark" && (e.dark = Sn(e.main, a)));
}
function Ni(e, t, r, o, n) {
  const a = n.light || n,
    i = n.dark || n * 1.5;
  t[r] ||
    (t.hasOwnProperty(o)
      ? (t[r] = t[o])
      : r === "light"
        ? (t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)`)
        : r === "dark" &&
          (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(i * 100).toFixed(0)}%)`));
}
function Cp(e = "light") {
  return e === "dark"
    ? { main: br[200], light: br[50], dark: br[400] }
    : { main: br[700], light: br[400], dark: br[800] };
}
function wp(e = "light") {
  return e === "dark"
    ? { main: vr[200], light: vr[50], dark: vr[400] }
    : { main: vr[500], light: vr[300], dark: vr[700] };
}
function kp(e = "light") {
  return e === "dark"
    ? { main: yr[500], light: yr[300], dark: yr[700] }
    : { main: yr[700], light: yr[400], dark: yr[800] };
}
function Rp(e = "light") {
  return e === "dark"
    ? { main: xr[400], light: xr[300], dark: xr[700] }
    : { main: xr[700], light: xr[500], dark: xr[900] };
}
function Tp(e = "light") {
  return e === "dark"
    ? { main: Sr[400], light: Sr[300], dark: Sr[700] }
    : { main: Sr[800], light: Sr[500], dark: Sr[900] };
}
function $p(e = "light") {
  return e === "dark"
    ? { main: Gr[400], light: Gr[300], dark: Gr[700] }
    : { main: "#ed6c02", light: Gr[500], dark: Gr[900] };
}
function Pp(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Na(e) {
  const {
      mode: t = "light",
      contrastThreshold: r = 3,
      tonalOffset: o = 0.2,
      colorSpace: n,
      ...a
    } = e,
    i = e.primary || Cp(t),
    s = e.secondary || wp(t),
    l = e.error || kp(t),
    c = e.info || Rp(t),
    u = e.success || Tp(t),
    h = e.warning || $p(t);
  function y(b) {
    return n
      ? Pp(b)
      : $d(b, ra.text.primary) >= r
        ? ra.text.primary
        : wl.text.primary;
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
        ? (Ni(n, b, "light", S, o), Ni(n, b, "dark", v, o))
        : (Bi(b, "light", S, o), Bi(b, "dark", v, o)),
      b.contrastText || (b.contrastText = y(b.main)),
      b
    );
  };
  let f;
  return (
    t === "light" ? (f = Cl()) : t === "dark" && (f = kl()),
    Xe(
      {
        common: { ...uo },
        mode: t,
        primary: d({ color: i, name: "primary" }),
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
        grey: mc,
        contrastThreshold: r,
        getContrastText: y,
        augmentColor: d,
        tonalOffset: o,
        ...f,
      },
      a,
    )
  );
}
function Ep(e) {
  const t = {};
  return (
    Object.entries(e).forEach((o) => {
      const [n, a] = o;
      typeof a == "object" &&
        (t[n] =
          `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
    }),
    t
  );
}
function Ip(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function Mp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zi = { textTransform: "uppercase" },
  ji = '"Roboto", "Helvetica", "Arial", sans-serif';
function Rl(e, t) {
  const {
      fontFamily: r = ji,
      fontSize: o = 14,
      fontWeightLight: n = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: i = 500,
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
      ...(r === ji ? { letterSpacing: `${Mp(S / x)}em` } : {}),
      ...v,
      ...c,
    }),
    g = {
      h1: f(n, 96, 1.167, -1.5),
      h2: f(n, 60, 1.2, -0.5),
      h3: f(a, 48, 1.167, 0),
      h4: f(a, 34, 1.235, 0.25),
      h5: f(a, 24, 1.334, 0),
      h6: f(i, 20, 1.6, 0.15),
      subtitle1: f(a, 16, 1.75, 0.15),
      subtitle2: f(i, 14, 1.57, 0.1),
      body1: f(a, 16, 1.5, 0.15),
      body2: f(a, 14, 1.43, 0.15),
      button: f(i, 14, 1.75, 0.4, zi),
      caption: f(a, 12, 1.66, 0.4),
      overline: f(a, 12, 2.66, 1, zi),
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
      fontWeightRegular: a,
      fontWeightMedium: i,
      fontWeightBold: s,
      ...g,
    },
    h,
    { clone: !1 },
  );
}
const Ap = 0.2,
  Op = 0.14,
  Lp = 0.12;
function We(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ap})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Op})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Lp})`,
  ].join(",");
}
const Bp = [
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
  Np = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  zp = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Fi(e) {
  return `${Math.round(e)}ms`;
}
function jp(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Fp(e) {
  const t = { ...Np, ...e.easing },
    r = { ...zp, ...e.duration };
  return {
    getAutoHeightDuration: jp,
    create: (n = ["all"], a = {}) => {
      const {
        duration: i = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...c
      } = a;
      return (Array.isArray(n) ? n : [n])
        .map(
          (u) =>
            `${u} ${typeof i == "string" ? i : Fi(i)} ${s} ${typeof l == "string" ? l : Fi(l)}`,
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: r,
  };
}
const Dp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Wp(e) {
  return (
    Et(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function Tl(e = {}) {
  const t = { ...e };
  function r(o) {
    const n = Object.entries(o);
    for (let a = 0; a < n.length; a++) {
      const [i, s] = n[a];
      !Wp(s) || i.startsWith("unstable_")
        ? delete o[i]
        : Et(s) && ((o[i] = { ...s }), r(o[i]));
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
function Di(e) {
  return typeof e == "number"
    ? `${(e * 100).toFixed(0)}%`
    : `calc((${e}) * 100%)`;
}
const Hp = (e) => {
  if (!Number.isNaN(+e)) return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t) return 0;
  let r = 0;
  for (let o = 0; o < t.length; o += 1) r += +t[o];
  return r;
};
function Vp(e) {
  Object.assign(e, {
    alpha(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})`
        : o.vars
          ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})`
          : en(t, Hp(r));
    },
    lighten(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${Di(r)})`
        : Cn(t, r);
    },
    darken(t, r) {
      const o = this || e;
      return o.colorSpace
        ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${Di(r)})`
        : Sn(t, r);
    },
  });
}
function oa(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: o = {},
    spacing: n,
    palette: a = {},
    transitions: i = {},
    typography: s = {},
    shape: l,
    colorSpace: c,
    ...u
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(Ft(20));
  const h = Na({ ...a, colorSpace: c }),
    y = Ro(e);
  let d = Xe(y, {
    mixins: Ip(y.breakpoints, o),
    palette: h,
    shadows: Bp.slice(),
    typography: Rl(h, s),
    transitions: Fp(i),
    zIndex: { ...Dp },
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
    (d.toRuntimeSource = Tl),
    Vp(d),
    d
  );
}
function na(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const Up = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const r = na(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function $l(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function Pl(e) {
  return e === "dark" ? Up : [];
}
function _p(e) {
  const {
      palette: t = { mode: "light" },
      opacity: r,
      overlays: o,
      colorSpace: n,
      ...a
    } = e,
    i = Na({ ...t, colorSpace: n });
  return {
    palette: i,
    opacity: { ...$l(i.mode), ...r },
    overlays: o || Pl(i.mode),
    ...a,
  };
}
function Gp(e) {
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
const Kp = (e) => [
    ...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  qp = (e) => (t, r) => {
    const o = e.rootSelector || ":root",
      n = e.colorSchemeSelector;
    let a = n;
    if (
      (n === "class" && (a = ".%s"),
      n === "data" && (a = "[data-%s]"),
      n != null &&
        n.startsWith("data-") &&
        !n.includes("%s") &&
        (a = `[${n}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const i = {};
        return (
          Kp(e.cssVarPrefix).forEach((s) => {
            (i[s] = r[s]), delete r[s];
          }),
          a === "media"
            ? { [o]: r, "@media (prefers-color-scheme: dark)": { [o]: i } }
            : a
              ? { [a.replace("%s", t)]: i, [`${o}, ${a.replace("%s", t)}`]: r }
              : { [o]: { ...r, ...i } }
        );
      }
      if (a && a !== "media") return `${o}, ${a.replace("%s", String(t))}`;
    } else if (t) {
      if (a === "media")
        return { [`@media (prefers-color-scheme: ${String(t)})`]: { [o]: r } };
      if (a) return a.replace("%s", String(t));
    }
    return o;
  };
function Yp(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function z(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ro(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : hl(e);
}
function Nt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = to(ro(e[t])));
}
function Xp(e) {
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
  Jp = (e = "mui") => qd(e);
function Vn(e, t, r, o, n) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const a = n === "dark" ? "dark" : "light";
  if (!o) {
    t[n] = _p({
      ...r,
      palette: { mode: a, ...(r == null ? void 0 : r.palette) },
      colorSpace: e,
    });
    return;
  }
  const { palette: i, ...s } = oa({
    ...o,
    palette: { mode: a, ...(r == null ? void 0 : r.palette) },
    colorSpace: e,
  });
  return (
    (t[n] = {
      ...r,
      palette: i,
      opacity: { ...$l(a), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || Pl(a),
    }),
    s
  );
}
function Qp(e = {}, ...t) {
  const {
      colorSchemes: r = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: n = !1,
      cssVarPrefix: a = "mui",
      nativeColor: i = !1,
      shouldSkipGeneratingVar: s = Gp,
      colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
      rootSelector: c = ":root",
      ...u
    } = e,
    h = Object.keys(r)[0],
    y = o || (r.light && h !== "light" ? "light" : h),
    d = Jp(a),
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
  i && (v = "oklch");
  const C = Vn(v, k, S, u, y);
  g && !k.light && Vn(v, k, g, void 0, "light"),
    b && !k.dark && Vn(v, k, b, void 0, "dark");
  let R = {
    defaultColorScheme: y,
    ...C,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: k,
    font: { ...Ep(C.typography), ...C.font },
    spacing: Xp(u.spacing),
  };
  Object.keys(R.colorSchemes).forEach((L) => {
    const p = R.colorSchemes[L].palette,
      $ = (M) => {
        const E = M.split("-"),
          D = E[1],
          B = E[2];
        return d(M, p[D][B]);
      };
    p.mode === "light" &&
      (z(p.common, "background", "#fff"), z(p.common, "onBackground", "#000")),
      p.mode === "dark" &&
        (z(p.common, "background", "#000"),
        z(p.common, "onBackground", "#fff"));
    function T(M, E, D) {
      if (v) {
        let B;
        return (
          M === er && (B = `transparent ${((1 - D) * 100).toFixed(0)}%`),
          M === Ne && (B = `#000 ${(D * 100).toFixed(0)}%`),
          M === ze && (B = `#fff ${(D * 100).toFixed(0)}%`),
          `color-mix(in ${v}, ${E}, ${B})`
        );
      }
      return M(E, D);
    }
    if (
      (Yp(p, [
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
      z(
        p.Alert,
        "errorColor",
        T(Ne, i ? d("palette-error-light") : p.error.light, 0.6),
      ),
        z(
          p.Alert,
          "infoColor",
          T(Ne, i ? d("palette-info-light") : p.info.light, 0.6),
        ),
        z(
          p.Alert,
          "successColor",
          T(Ne, i ? d("palette-success-light") : p.success.light, 0.6),
        ),
        z(
          p.Alert,
          "warningColor",
          T(Ne, i ? d("palette-warning-light") : p.warning.light, 0.6),
        ),
        z(p.Alert, "errorFilledBg", $("palette-error-main")),
        z(p.Alert, "infoFilledBg", $("palette-info-main")),
        z(p.Alert, "successFilledBg", $("palette-success-main")),
        z(p.Alert, "warningFilledBg", $("palette-warning-main")),
        z(
          p.Alert,
          "errorFilledColor",
          kt(() => p.getContrastText(p.error.main)),
        ),
        z(
          p.Alert,
          "infoFilledColor",
          kt(() => p.getContrastText(p.info.main)),
        ),
        z(
          p.Alert,
          "successFilledColor",
          kt(() => p.getContrastText(p.success.main)),
        ),
        z(
          p.Alert,
          "warningFilledColor",
          kt(() => p.getContrastText(p.warning.main)),
        ),
        z(
          p.Alert,
          "errorStandardBg",
          T(ze, i ? d("palette-error-light") : p.error.light, 0.9),
        ),
        z(
          p.Alert,
          "infoStandardBg",
          T(ze, i ? d("palette-info-light") : p.info.light, 0.9),
        ),
        z(
          p.Alert,
          "successStandardBg",
          T(ze, i ? d("palette-success-light") : p.success.light, 0.9),
        ),
        z(
          p.Alert,
          "warningStandardBg",
          T(ze, i ? d("palette-warning-light") : p.warning.light, 0.9),
        ),
        z(p.Alert, "errorIconColor", $("palette-error-main")),
        z(p.Alert, "infoIconColor", $("palette-info-main")),
        z(p.Alert, "successIconColor", $("palette-success-main")),
        z(p.Alert, "warningIconColor", $("palette-warning-main")),
        z(p.AppBar, "defaultBg", $("palette-grey-100")),
        z(p.Avatar, "defaultBg", $("palette-grey-400")),
        z(p.Button, "inheritContainedBg", $("palette-grey-300")),
        z(p.Button, "inheritContainedHoverBg", $("palette-grey-A100")),
        z(p.Chip, "defaultBorder", $("palette-grey-400")),
        z(p.Chip, "defaultAvatarColor", $("palette-grey-700")),
        z(p.Chip, "defaultIconColor", $("palette-grey-700")),
        z(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        z(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        z(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        z(
          p.LinearProgress,
          "primaryBg",
          T(ze, i ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        z(
          p.LinearProgress,
          "secondaryBg",
          T(ze, i ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        z(
          p.LinearProgress,
          "errorBg",
          T(ze, i ? d("palette-error-main") : p.error.main, 0.62),
        ),
        z(
          p.LinearProgress,
          "infoBg",
          T(ze, i ? d("palette-info-main") : p.info.main, 0.62),
        ),
        z(
          p.LinearProgress,
          "successBg",
          T(ze, i ? d("palette-success-main") : p.success.main, 0.62),
        ),
        z(
          p.LinearProgress,
          "warningBg",
          T(ze, i ? d("palette-warning-light") : p.warning.main, 0.62),
        ),
        z(
          p.Skeleton,
          "bg",
          v
            ? T(er, i ? d("palette-text-primary") : p.text.primary, 0.11)
            : `rgba(${$("palette-text-primaryChannel")} / 0.11)`,
        ),
        z(
          p.Slider,
          "primaryTrack",
          T(ze, i ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        z(
          p.Slider,
          "secondaryTrack",
          T(ze, i ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        z(
          p.Slider,
          "errorTrack",
          T(ze, i ? d("palette-error-main") : p.error.main, 0.62),
        ),
        z(
          p.Slider,
          "infoTrack",
          T(ze, i ? d("palette-info-main") : p.info.main, 0.62),
        ),
        z(
          p.Slider,
          "successTrack",
          T(ze, i ? d("palette-success-main") : p.success.main, 0.62),
        ),
        z(
          p.Slider,
          "warningTrack",
          T(ze, i ? d("palette-warning-main") : p.warning.main, 0.62),
        );
      const M = v
        ? T(
            Ne,
            i ? d("palette-background-default") : p.background.default,
            0.6825,
          )
        : Mo(p.background.default, 0.8);
      z(p.SnackbarContent, "bg", M),
        z(
          p.SnackbarContent,
          "color",
          kt(() => (v ? ra.text.primary : p.getContrastText(M))),
        ),
        z(p.SpeedDialAction, "fabHoverBg", Mo(p.background.paper, 0.15)),
        z(p.StepConnector, "border", $("palette-grey-400")),
        z(p.StepContent, "border", $("palette-grey-400")),
        z(p.Switch, "defaultColor", $("palette-common-white")),
        z(p.Switch, "defaultDisabledColor", $("palette-grey-100")),
        z(
          p.Switch,
          "primaryDisabledColor",
          T(ze, i ? d("palette-primary-main") : p.primary.main, 0.62),
        ),
        z(
          p.Switch,
          "secondaryDisabledColor",
          T(ze, i ? d("palette-secondary-main") : p.secondary.main, 0.62),
        ),
        z(
          p.Switch,
          "errorDisabledColor",
          T(ze, i ? d("palette-error-main") : p.error.main, 0.62),
        ),
        z(
          p.Switch,
          "infoDisabledColor",
          T(ze, i ? d("palette-info-main") : p.info.main, 0.62),
        ),
        z(
          p.Switch,
          "successDisabledColor",
          T(ze, i ? d("palette-success-main") : p.success.main, 0.62),
        ),
        z(
          p.Switch,
          "warningDisabledColor",
          T(ze, i ? d("palette-warning-main") : p.warning.main, 0.62),
        ),
        z(
          p.TableCell,
          "border",
          T(ze, er(i ? d("palette-divider") : p.divider, 1), 0.88),
        ),
        z(
          p.Tooltip,
          "bg",
          T(er, i ? d("palette-grey-700") : p.grey[700], 0.92),
        );
    }
    if (p.mode === "dark") {
      z(
        p.Alert,
        "errorColor",
        T(ze, i ? d("palette-error-light") : p.error.light, 0.6),
      ),
        z(
          p.Alert,
          "infoColor",
          T(ze, i ? d("palette-info-light") : p.info.light, 0.6),
        ),
        z(
          p.Alert,
          "successColor",
          T(ze, i ? d("palette-success-light") : p.success.light, 0.6),
        ),
        z(
          p.Alert,
          "warningColor",
          T(ze, i ? d("palette-warning-light") : p.warning.light, 0.6),
        ),
        z(p.Alert, "errorFilledBg", $("palette-error-dark")),
        z(p.Alert, "infoFilledBg", $("palette-info-dark")),
        z(p.Alert, "successFilledBg", $("palette-success-dark")),
        z(p.Alert, "warningFilledBg", $("palette-warning-dark")),
        z(
          p.Alert,
          "errorFilledColor",
          kt(() => p.getContrastText(p.error.dark)),
        ),
        z(
          p.Alert,
          "infoFilledColor",
          kt(() => p.getContrastText(p.info.dark)),
        ),
        z(
          p.Alert,
          "successFilledColor",
          kt(() => p.getContrastText(p.success.dark)),
        ),
        z(
          p.Alert,
          "warningFilledColor",
          kt(() => p.getContrastText(p.warning.dark)),
        ),
        z(
          p.Alert,
          "errorStandardBg",
          T(Ne, i ? d("palette-error-light") : p.error.light, 0.9),
        ),
        z(
          p.Alert,
          "infoStandardBg",
          T(Ne, i ? d("palette-info-light") : p.info.light, 0.9),
        ),
        z(
          p.Alert,
          "successStandardBg",
          T(Ne, i ? d("palette-success-light") : p.success.light, 0.9),
        ),
        z(
          p.Alert,
          "warningStandardBg",
          T(Ne, i ? d("palette-warning-light") : p.warning.light, 0.9),
        ),
        z(p.Alert, "errorIconColor", $("palette-error-main")),
        z(p.Alert, "infoIconColor", $("palette-info-main")),
        z(p.Alert, "successIconColor", $("palette-success-main")),
        z(p.Alert, "warningIconColor", $("palette-warning-main")),
        z(p.AppBar, "defaultBg", $("palette-grey-900")),
        z(p.AppBar, "darkBg", $("palette-background-paper")),
        z(p.AppBar, "darkColor", $("palette-text-primary")),
        z(p.Avatar, "defaultBg", $("palette-grey-600")),
        z(p.Button, "inheritContainedBg", $("palette-grey-800")),
        z(p.Button, "inheritContainedHoverBg", $("palette-grey-700")),
        z(p.Chip, "defaultBorder", $("palette-grey-700")),
        z(p.Chip, "defaultAvatarColor", $("palette-grey-300")),
        z(p.Chip, "defaultIconColor", $("palette-grey-300")),
        z(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        z(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        z(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        z(
          p.LinearProgress,
          "primaryBg",
          T(Ne, i ? d("palette-primary-main") : p.primary.main, 0.5),
        ),
        z(
          p.LinearProgress,
          "secondaryBg",
          T(Ne, i ? d("palette-secondary-main") : p.secondary.main, 0.5),
        ),
        z(
          p.LinearProgress,
          "errorBg",
          T(Ne, i ? d("palette-error-main") : p.error.main, 0.5),
        ),
        z(
          p.LinearProgress,
          "infoBg",
          T(Ne, i ? d("palette-info-main") : p.info.main, 0.5),
        ),
        z(
          p.LinearProgress,
          "successBg",
          T(Ne, i ? d("palette-success-main") : p.success.main, 0.5),
        ),
        z(
          p.LinearProgress,
          "warningBg",
          T(Ne, i ? d("palette-warning-main") : p.warning.main, 0.5),
        ),
        z(
          p.Skeleton,
          "bg",
          v
            ? T(er, i ? d("palette-text-primary") : p.text.primary, 0.13)
            : `rgba(${$("palette-text-primaryChannel")} / 0.13)`,
        ),
        z(
          p.Slider,
          "primaryTrack",
          T(Ne, i ? d("palette-primary-main") : p.primary.main, 0.5),
        ),
        z(
          p.Slider,
          "secondaryTrack",
          T(Ne, i ? d("palette-secondary-main") : p.secondary.main, 0.5),
        ),
        z(
          p.Slider,
          "errorTrack",
          T(Ne, i ? d("palette-error-main") : p.error.main, 0.5),
        ),
        z(
          p.Slider,
          "infoTrack",
          T(Ne, i ? d("palette-info-main") : p.info.main, 0.5),
        ),
        z(
          p.Slider,
          "successTrack",
          T(Ne, i ? d("palette-success-main") : p.success.main, 0.5),
        ),
        z(
          p.Slider,
          "warningTrack",
          T(Ne, i ? d("palette-warning-light") : p.warning.main, 0.5),
        );
      const M = v
        ? T(
            ze,
            i ? d("palette-background-default") : p.background.default,
            0.985,
          )
        : Mo(p.background.default, 0.98);
      z(p.SnackbarContent, "bg", M),
        z(
          p.SnackbarContent,
          "color",
          kt(() => (v ? wl.text.primary : p.getContrastText(M))),
        ),
        z(p.SpeedDialAction, "fabHoverBg", Mo(p.background.paper, 0.15)),
        z(p.StepConnector, "border", $("palette-grey-600")),
        z(p.StepContent, "border", $("palette-grey-600")),
        z(p.Switch, "defaultColor", $("palette-grey-300")),
        z(p.Switch, "defaultDisabledColor", $("palette-grey-600")),
        z(
          p.Switch,
          "primaryDisabledColor",
          T(Ne, i ? d("palette-primary-main") : p.primary.main, 0.55),
        ),
        z(
          p.Switch,
          "secondaryDisabledColor",
          T(Ne, i ? d("palette-secondary-main") : p.secondary.main, 0.55),
        ),
        z(
          p.Switch,
          "errorDisabledColor",
          T(Ne, i ? d("palette-error-main") : p.error.main, 0.55),
        ),
        z(
          p.Switch,
          "infoDisabledColor",
          T(Ne, i ? d("palette-info-main") : p.info.main, 0.55),
        ),
        z(
          p.Switch,
          "successDisabledColor",
          T(Ne, i ? d("palette-success-main") : p.success.main, 0.55),
        ),
        z(
          p.Switch,
          "warningDisabledColor",
          T(Ne, i ? d("palette-warning-light") : p.warning.main, 0.55),
        ),
        z(
          p.TableCell,
          "border",
          T(Ne, er(i ? d("palette-divider") : p.divider, 1), 0.68),
        ),
        z(
          p.Tooltip,
          "bg",
          T(er, i ? d("palette-grey-700") : p.grey[700], 0.92),
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
          (E.main && z(p[M], "mainChannel", to(ro(E.main))),
          E.light && z(p[M], "lightChannel", to(ro(E.light))),
          E.dark && z(p[M], "darkChannel", to(ro(E.dark))),
          E.contrastText &&
            z(p[M], "contrastTextChannel", to(ro(E.contrastText))),
          M === "text" && (Nt(p[M], "primary"), Nt(p[M], "secondary")),
          M === "action" &&
            (E.active && Nt(p[M], "active"),
            E.selected && Nt(p[M], "selected")));
      });
  }),
    (R = t.reduce((L, p) => Xe(L, p), R));
  const P = {
      prefix: a,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: s,
      getSelector: qp(R),
      enableContrastVars: i,
    },
    { vars: I, generateThemeVars: A, generateStyleSheets: O } = Jd(R, P);
  return (
    (R.vars = I),
    Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([L, p]) => {
      R[L] = p;
    }),
    (R.generateThemeVars = A),
    (R.generateStyleSheets = O),
    (R.generateSpacing = function () {
      return sl(u.spacing, fn(this));
    }),
    (R.getColorSchemeSelector = Qd(l)),
    (R.spacing = R.generateSpacing()),
    (R.shouldSkipGeneratingVar = s),
    (R.unstable_sxConfig = {
      ...ko,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (R.unstable_sx = function (p) {
      return qt({ sx: p, theme: this });
    }),
    (R.toRuntimeSource = Tl),
    R
  );
}
function Wi(e, t, r) {
  e.colorSchemes &&
    r &&
    (e.colorSchemes[t] = {
      ...(r !== !0 && r),
      palette: Na({ ...(r === !0 ? {} : r.palette), mode: t }),
    });
}
function za(e = {}, ...t) {
  const {
      palette: r,
      cssVariables: o = !1,
      colorSchemes: n = r ? void 0 : { light: !0 },
      defaultColorScheme: a = r == null ? void 0 : r.mode,
      ...i
    } = e,
    s = a || "light",
    l = n == null ? void 0 : n[s],
    c = {
      ...n,
      ...(r
        ? { [s]: { ...(typeof l != "boolean" && l), palette: r } }
        : void 0),
    };
  if (o === !1) {
    if (!("colorSchemes" in e)) return oa(e, ...t);
    let u = r;
    "palette" in e ||
      (c[s] &&
        (c[s] !== !0
          ? (u = c[s].palette)
          : s === "dark" && (u = { mode: "dark" })));
    const h = oa({ ...e, palette: u }, ...t);
    return (
      (h.defaultColorScheme = s),
      (h.colorSchemes = c),
      h.palette.mode === "light" &&
        ((h.colorSchemes.light = {
          ...(c.light !== !0 && c.light),
          palette: h.palette,
        }),
        Wi(h, "dark", c.dark)),
      h.palette.mode === "dark" &&
        ((h.colorSchemes.dark = {
          ...(c.dark !== !0 && c.dark),
          palette: h.palette,
        }),
        Wi(h, "light", c.light)),
      h
    );
  }
  return (
    !r && !("light" in c) && s === "light" && (c.light = !0),
    Qp(
      {
        ...i,
        colorSchemes: c,
        defaultColorScheme: s,
        ...(typeof o != "boolean" && o),
      },
      ...t,
    )
  );
}
const ja = za();
function Wt() {
  const e = To(ja);
  return e[It] || e;
}
function kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rt = (e) => kn(e) && e !== "classes",
  F = fl({ themeId: It, defaultTheme: ja, rootShouldForwardProp: rt });
function Zp({ theme: e, ...t }) {
  const r = It in e ? e[It] : void 0;
  return w.jsx(xl, { ...t, themeId: r ? It : void 0, theme: r || e });
}
const Ao = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  { CssVarsProvider: ef } = Kd({
    themeId: It,
    theme: () => za({ cssVariables: !0 }),
    colorSchemeStorageKey: Ao.colorSchemeStorageKey,
    modeStorageKey: Ao.modeStorageKey,
    defaultColorScheme: {
      light: Ao.defaultLightColorScheme,
      dark: Ao.defaultDarkColorScheme,
    },
    resolveTheme: (e) => {
      const t = { ...e, typography: Rl(e.palette, e.typography) };
      return (
        (t.unstable_sx = function (o) {
          return qt({ sx: o, theme: this });
        }),
        t
      );
    },
  }),
  tf = ef;
function x0({ theme: e, ...t }) {
  const r = m.useMemo(() => {
    if (typeof e == "function") return e;
    const o = It in e ? e[It] : e;
    return "colorSchemes" in o ? null : "vars" in o ? e : { ...e, vars: null };
  }, [e]);
  return r ? w.jsx(Zp, { theme: r, ...t }) : w.jsx(tf, { theme: e, ...t });
}
function Hi(...e) {
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
function rf(e) {
  return w.jsx(ll, { ...e, defaultTheme: ja, themeId: It });
}
function Fa(e) {
  return function (r) {
    return w.jsx(rf, {
      styles: typeof e == "function" ? (o) => e({ theme: o, ...r }) : e,
    });
  };
}
function of() {
  return bn;
}
const ne = Fd;
function ue(e) {
  return Bd(e);
}
function nf(e) {
  return se("MuiSvgIcon", e);
}
ce("MuiSvgIcon", [
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
const af = (e) => {
    const { color: t, fontSize: r, classes: o } = e,
      n = {
        root: ["root", t !== "inherit" && `color${N(t)}`, `fontSize${N(r)}`],
      };
    return le(n, nf, o);
  },
  sf = F("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "inherit" && t[`color${N(r.color)}`],
        t[`fontSize${N(r.fontSize)}`],
      ];
    },
  })(
    ne(({ theme: e }) => {
      var t, r, o, n, a, i, s, l, c, u, h, y, d, f;
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
                ((i = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : i.call(a, 20)) || "1.25rem",
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
  aa = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiSvgIcon" }),
      {
        children: n,
        className: a,
        color: i = "inherit",
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
        color: i,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: y,
        hasSvgAsChild: f,
      },
      b = {};
    u || (b.viewBox = y);
    const x = af(g);
    return w.jsxs(sf, {
      as: s,
      className: U(x.root, a),
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
aa.muiName = "SvgIcon";
function je(e, t) {
  function r(o, n) {
    return w.jsx(aa, { "data-testid": void 0, ref: n, ...o, children: e });
  }
  return (r.muiName = aa.muiName), m.memo(m.forwardRef(r));
}
function Da(e, t = 166) {
  let r;
  function o(...n) {
    const a = () => {
      e.apply(this, n);
    };
    clearTimeout(r), (r = setTimeout(a, t));
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
function Vi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ho(e) {
  const { controlled: t, default: r, name: o, state: n = "value" } = e,
    { current: a } = m.useRef(t !== void 0),
    [i, s] = m.useState(r),
    l = a ? t : i,
    c = m.useCallback((u) => {
      a || s(u);
    }, []);
  return [l, c];
}
function tt(e) {
  const t = m.useRef(e);
  return (
    it(() => {
      t.current = e;
    }),
    m.useRef((...r) => (0, t.current)(...r)).current
  );
}
function He(...e) {
  const t = m.useRef(void 0),
    r = m.useCallback((o) => {
      const n = e.map((a) => {
        if (a == null) return null;
        if (typeof a == "function") {
          const i = a,
            s = i(o);
          return typeof s == "function"
            ? s
            : () => {
                i(null);
              };
        }
        return (
          (a.current = o),
          () => {
            a.current = null;
          }
        );
      });
      return () => {
        n.forEach((a) => (a == null ? void 0 : a()));
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
function lf(e, t) {
  const r = e.charCodeAt(2);
  return (
    e[0] === "o" && e[1] === "n" && r >= 65 && r <= 90 && typeof t == "function"
  );
}
function El(e, t) {
  if (!e) return t;
  function r(i, s) {
    const l = {};
    return (
      Object.keys(s).forEach((c) => {
        lf(c, s[c]) &&
          typeof i[c] == "function" &&
          (l[c] = (...u) => {
            i[c](...u), s[c](...u);
          });
      }),
      l
    );
  }
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const s = typeof t == "function" ? t(i) : t,
        l = typeof e == "function" ? e({ ...i, ...s }) : e,
        c = U(
          i == null ? void 0 : i.className,
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
    a = U(o == null ? void 0 : o.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...n,
    ...(!!a && { className: a }),
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
function Il(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e)
    if ({}.hasOwnProperty.call(e, o)) {
      if (t.indexOf(o) !== -1) continue;
      r[o] = e[o];
    }
  return r;
}
function ia(e, t) {
  return (
    (ia = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    ia(e, t)
  );
}
function Ml(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ia(e, t);
}
const Ui = { disabled: !1 },
  rn = jt.createContext(null);
var cf = function (t) {
    return t.scrollTop;
  },
  oo = "unmounted",
  or = "exited",
  nr = "entering",
  Rr = "entered",
  sa = "exiting",
  wt = (function (e) {
    Ml(t, e);
    function t(o, n) {
      var a;
      a = e.call(this, o, n) || this;
      var i = n,
        s = i && !i.isMounting ? o.enter : o.appear,
        l;
      return (
        (a.appearStatus = null),
        o.in
          ? s
            ? ((l = or), (a.appearStatus = nr))
            : (l = Rr)
          : o.unmountOnExit || o.mountOnEnter
            ? (l = oo)
            : (l = or),
        (a.state = { status: l }),
        (a.nextCallback = null),
        a
      );
    }
    t.getDerivedStateFromProps = function (n, a) {
      var i = n.in;
      return i && a.status === oo ? { status: or } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (n) {
        var a = null;
        if (n !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== nr && i !== Rr && (a = nr)
            : (i === nr || i === Rr) && (a = sa);
        }
        this.updateStatus(!1, a);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var n = this.props.timeout,
          a,
          i,
          s;
        return (
          (a = i = s = n),
          n != null &&
            typeof n != "number" &&
            ((a = n.exit),
            (i = n.enter),
            (s = n.appear !== void 0 ? n.appear : i)),
          { exit: a, enter: i, appear: s }
        );
      }),
      (r.updateStatus = function (n, a) {
        if ((n === void 0 && (n = !1), a !== null))
          if ((this.cancelNextCallback(), a === nr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : Eo.findDOMNode(this);
              i && cf(i);
            }
            this.performEnter(n);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === or &&
            this.setState({ status: oo });
      }),
      (r.performEnter = function (n) {
        var a = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : n,
          l = this.props.nodeRef ? [s] : [Eo.findDOMNode(this), s],
          c = l[0],
          u = l[1],
          h = this.getTimeouts(),
          y = s ? h.appear : h.enter;
        if ((!n && !i) || Ui.disabled) {
          this.safeSetState({ status: Rr }, function () {
            a.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: nr }, function () {
            a.props.onEntering(c, u),
              a.onTransitionEnd(y, function () {
                a.safeSetState({ status: Rr }, function () {
                  a.props.onEntered(c, u);
                });
              });
          });
      }),
      (r.performExit = function () {
        var n = this,
          a = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Eo.findDOMNode(this);
        if (!a || Ui.disabled) {
          this.safeSetState({ status: or }, function () {
            n.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: sa }, function () {
            n.props.onExiting(s),
              n.onTransitionEnd(i.exit, function () {
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
      (r.safeSetState = function (n, a) {
        (a = this.setNextCallback(a)), this.setState(n, a);
      }),
      (r.setNextCallback = function (n) {
        var a = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (a.nextCallback = null), n(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (n, a) {
        this.setNextCallback(a);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : Eo.findDOMNode(this),
          s = n == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        n != null && setTimeout(this.nextCallback, n);
      }),
      (r.render = function () {
        var n = this.state.status;
        if (n === oo) return null;
        var a = this.props,
          i = a.children;
        a.in,
          a.mountOnEnter,
          a.unmountOnExit,
          a.appear,
          a.enter,
          a.exit,
          a.timeout,
          a.addEndListener,
          a.onEnter,
          a.onEntering,
          a.onEntered,
          a.onExit,
          a.onExiting,
          a.onExited,
          a.nodeRef;
        var s = Il(a, [
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
          typeof i == "function"
            ? i(n, s)
            : jt.cloneElement(jt.Children.only(i), s),
        );
      }),
      t
    );
  })(jt.Component);
wt.contextType = rn;
wt.propTypes = {};
function Cr() {}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Cr,
  onEntering: Cr,
  onEntered: Cr,
  onExit: Cr,
  onExiting: Cr,
  onExited: Cr,
};
wt.UNMOUNTED = oo;
wt.EXITED = or;
wt.ENTERING = nr;
wt.ENTERED = Rr;
wt.EXITING = sa;
function uf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Wa(e, t) {
  var r = function (a) {
      return t && m.isValidElement(a) ? t(a) : a;
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
function df(e, t) {
  (e = e || {}), (t = t || {});
  function r(u) {
    return u in t ? t[u] : e[u];
  }
  var o = Object.create(null),
    n = [];
  for (var a in e) a in t ? n.length && ((o[a] = n), (n = [])) : n.push(a);
  var i,
    s = {};
  for (var l in t) {
    if (o[l])
      for (i = 0; i < o[l].length; i++) {
        var c = o[l][i];
        s[o[l][i]] = r(c);
      }
    s[l] = r(l);
  }
  for (i = 0; i < n.length; i++) s[n[i]] = r(n[i]);
  return s;
}
function ir(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function pf(e, t) {
  return Wa(e.children, function (r) {
    return m.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ir(r, "appear", e),
      enter: ir(r, "enter", e),
      exit: ir(r, "exit", e),
    });
  });
}
function ff(e, t, r) {
  var o = Wa(e.children),
    n = df(t, o);
  return (
    Object.keys(n).forEach(function (a) {
      var i = n[a];
      if (m.isValidElement(i)) {
        var s = a in t,
          l = a in o,
          c = t[a],
          u = m.isValidElement(c) && !c.props.in;
        l && (!s || u)
          ? (n[a] = m.cloneElement(i, {
              onExited: r.bind(null, i),
              in: !0,
              exit: ir(i, "exit", e),
              enter: ir(i, "enter", e),
            }))
          : !l && s && !u
            ? (n[a] = m.cloneElement(i, { in: !1 }))
            : l &&
              s &&
              m.isValidElement(c) &&
              (n[a] = m.cloneElement(i, {
                onExited: r.bind(null, i),
                in: c.props.in,
                exit: ir(i, "exit", e),
                enter: ir(i, "enter", e),
              }));
      }
    }),
    n
  );
}
var mf =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  gf = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Ha = (function (e) {
    Ml(t, e);
    function t(o, n) {
      var a;
      a = e.call(this, o, n) || this;
      var i = a.handleExited.bind(uf(a));
      return (
        (a.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        a
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
      (t.getDerivedStateFromProps = function (n, a) {
        var i = a.children,
          s = a.handleExited,
          l = a.firstRender;
        return { children: l ? pf(n, s) : ff(n, i, s), firstRender: !1 };
      }),
      (r.handleExited = function (n, a) {
        var i = Wa(this.props.children);
        n.key in i ||
          (n.props.onExited && n.props.onExited(a),
          this.mounted &&
            this.setState(function (s) {
              var l = Jo({}, s.children);
              return delete l[n.key], { children: l };
            }));
      }),
      (r.render = function () {
        var n = this.props,
          a = n.component,
          i = n.childFactory,
          s = Il(n, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = mf(this.state.children).map(i);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          a === null
            ? jt.createElement(rn.Provider, { value: l }, c)
            : jt.createElement(
                rn.Provider,
                { value: l },
                jt.createElement(a, s, c),
              )
        );
      }),
      t
    );
  })(jt.Component);
Ha.propTypes = {};
Ha.defaultProps = gf;
const _i = {};
function Al(e, t) {
  const r = m.useRef(_i);
  return r.current === _i && (r.current = e(t)), r;
}
const hf = [];
function yf(e) {
  m.useEffect(e, hf);
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
  const e = Al(Rn.create).current;
  return yf(e.disposeEffect), e;
}
const Va = (e) => e.scrollTop;
function Ar(e, t) {
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
function Ol(e, t, r) {
  return e === void 0 || Kt(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...r } };
}
function Ll(e, t, r) {
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
function Gi(e) {
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
function Bl(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: o,
    externalForwardedProps: n,
    className: a,
  } = e;
  if (!t) {
    const d = U(
        r == null ? void 0 : r.className,
        a,
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
  const i = lr({ ...n, ...o }),
    s = Gi(o),
    l = Gi(n),
    c = t(i),
    u = U(
      c == null ? void 0 : c.className,
      r == null ? void 0 : r.className,
      a,
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
      externalForwardedProps: a,
      internalForwardedProps: i,
      shouldForwardComponentProp: s = !1,
      ...l
    } = t,
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: h = { [e]: void 0 },
      ...y
    } = a,
    d = u[e] || o,
    f = Ll(h[e], n),
    {
      props: { component: g, ...b },
      internalRef: x,
    } = Bl({
      className: r,
      ...l,
      externalForwardedProps: e === "root" ? y : void 0,
      externalSlotProps: f,
    }),
    k = He(x, f == null ? void 0 : f.ref, t.ref),
    S = e === "root" ? g || c : g,
    v = Ol(
      d,
      {
        ...(e === "root" && !c && !u[e] && i),
        ...(e !== "root" && !u[e] && i),
        ...b,
        ...(S && !s && { as: S }),
        ...(S && s && { component: S }),
        ref: k,
      },
      n,
    );
  return [d, v];
}
function vf(e) {
  return se("MuiPaper", e);
}
ce("MuiPaper", [
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
const bf = (e) => {
    const { square: t, elevation: r, variant: o, classes: n } = e,
      a = {
        root: [
          "root",
          o,
          !t && "rounded",
          o === "elevation" && `elevation${r}`,
        ],
      };
    return le(a, vf, n);
  },
  xf = F("div", {
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
    ne(({ theme: e }) => ({
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
  gr = m.forwardRef(function (t, r) {
    var d;
    const o = ue({ props: t, name: "MuiPaper" }),
      n = Wt(),
      {
        className: a,
        component: i = "div",
        elevation: s = 1,
        square: l = !1,
        variant: c = "elevation",
        ...u
      } = o,
      h = { ...o, component: i, elevation: s, square: l, variant: c },
      y = bf(h);
    return w.jsx(xf, {
      as: i,
      ownerState: h,
      className: U(y.root, a),
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
              "--Paper-overlay": `linear-gradient(${en("#fff", na(s))}, ${en("#fff", na(s))})`,
            }),
        }),
        ...u.style,
      },
    });
  });
function Or(e) {
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
    const t = Al(on.create).current,
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
        ((this.mounted = Cf()),
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
function Sf() {
  return on.use();
}
function Cf() {
  let e, t;
  const r = new Promise((o, n) => {
    (e = o), (t = n);
  });
  return (r.resolve = e), (r.reject = t), r;
}
function wf(e) {
  const {
      className: t,
      classes: r,
      pulsate: o = !1,
      rippleX: n,
      rippleY: a,
      rippleSize: i,
      in: s,
      onExited: l,
      timeout: c,
    } = e,
    [u, h] = m.useState(!1),
    y = U(t, r.ripple, r.rippleVisible, o && r.ripplePulsate),
    d = { width: i, height: i, top: -(i / 2) + a, left: -(i / 2) + n },
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
const dt = ce("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  la = 550,
  kf = 80,
  Rf = Xt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Tf = Xt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  $f = Xt`
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
  Pf = F("span", { name: "MuiTouchRipple", slot: "Root" })({
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
  Ef = F(wf, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${dt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Rf};
    animation-duration: ${la}ms;
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
    animation-name: ${Tf};
    animation-duration: ${la}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${dt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${$f};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  If = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTouchRipple" }),
      { center: n = !1, classes: a = {}, className: i, ...s } = o,
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
              Ef,
              {
                classes: {
                  ripple: U(a.ripple, dt.ripple),
                  rippleVisible: U(a.rippleVisible, dt.rippleVisible),
                  ripplePulsate: U(a.ripplePulsate, dt.ripplePulsate),
                  child: U(a.child, dt.child),
                  childLeaving: U(a.childLeaving, dt.childLeaving),
                  childPulsate: U(a.childPulsate, dt.childPulsate),
                },
                timeout: la,
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
        [a],
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
              d.start(kf, () => {
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
      w.jsx(Pf, {
        className: U(dt.root, a.root, i),
        ref: g,
        ...s,
        children: w.jsx(Ha, { component: null, exit: !0, children: l }),
      })
    );
  });
function Mf(e) {
  return se("MuiButtonBase", e);
}
const Af = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  Of = (e) => {
    const {
        disabled: t,
        focusVisible: r,
        focusVisibleClassName: o,
        classes: n,
      } = e,
      i = le({ root: ["root", t && "disabled", r && "focusVisible"] }, Mf, n);
    return r && o && (i.root += ` ${o}`), i;
  },
  Lf = F("button", { name: "MuiButtonBase", slot: "Root" })({
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
    [`&.${Af.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  dr = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiButtonBase" }),
      {
        action: n,
        centerRipple: a = !1,
        children: i,
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
        ...D
      } = o,
      B = m.useRef(null),
      j = Sf(),
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
      de = zt(j, "stop", L, h),
      ae = zt(
        j,
        "stop",
        (re) => {
          Or(re.target) || X(!1), g && g(re);
        },
        !1,
      ),
      oe = tt((re) => {
        B.current || (B.current = re.currentTarget),
          Or(re.target) && (X(!0), v && v(re)),
          S && S(re);
      }),
      Y = () => {
        const re = B.current;
        return l && l !== "button" && !(re.tagName === "A" && re.href);
      },
      pe = tt((re) => {
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
    Se === "button" && (D.href || D.to) && (Se = f);
    const Pe = {};
    if (Se === "button") {
      const re = !!D.formAction;
      (Pe.type = E === void 0 && !re ? "button" : E), (Pe.disabled = c);
    } else
      !D.href && !D.to && (Pe.role = "button"), c && (Pe["aria-disabled"] = c);
    const Ee = He(r, B),
      Me = {
        ...o,
        centerRipple: a,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: h,
        focusRipple: y,
        tabIndex: $,
        focusVisible: H,
      },
      Re = Of(Me);
    return w.jsxs(Lf, {
      as: Se,
      className: U(Re.root, s),
      ownerState: Me,
      onBlur: ae,
      onClick: b,
      onContextMenu: J,
      onFocus: oe,
      onKeyDown: pe,
      onKeyUp: Ae,
      onMouseDown: ye,
      onMouseLeave: me,
      onMouseUp: te,
      onDragLeave: _,
      onTouchEnd: Z,
      onTouchMove: de,
      onTouchStart: ve,
      ref: Ee,
      tabIndex: c ? -1 : $,
      type: E,
      ...Pe,
      ...D,
      children: [i, ee ? w.jsx(If, { ref: G, center: a, ...T }) : null],
    });
  });
function zt(e, t, r, o = !1) {
  return tt((n) => (r && r(n), o || e[t](n), !0));
}
function Bf(e) {
  return typeof e.main == "string";
}
function Nf(e, t = []) {
  if (!Bf(e)) return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string") return !1;
  return !0;
}
function De(e = []) {
  return ([, t]) => t && Nf(t, e);
}
function zf(e) {
  return se("MuiAlert", e);
}
const Ki = ce("MuiAlert", [
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
function jf(e) {
  return se("MuiCircularProgress", e);
}
ce("MuiCircularProgress", [
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
  ca = Xt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  ua = Xt`
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
  Ff =
    typeof ca != "string"
      ? Dr`
        animation: ${ca} 1.4s linear infinite;
      `
      : null,
  Df =
    typeof ua != "string"
      ? Dr`
        animation: ${ua} 1.4s ease-in-out infinite;
      `
      : null,
  Wf = (e) => {
    const { classes: t, variant: r, color: o, disableShrink: n } = e,
      a = {
        root: ["root", r, `color${N(o)}`],
        svg: ["svg"],
        track: ["track"],
        circle: ["circle", `circle${N(r)}`, n && "circleDisableShrink"],
      };
    return le(a, jf, t);
  },
  Hf = F("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], t[`color${N(r.color)}`]];
    },
  })(
    ne(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: Ff || { animation: `${ca} 1.4s linear infinite` },
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
  Vf = F("svg", { name: "MuiCircularProgress", slot: "Svg" })({
    display: "block",
  }),
  Uf = F("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.circle,
        t[`circle${N(r.variant)}`],
        r.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
          style: Df || { animation: `${ua} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  _f = F("circle", { name: "MuiCircularProgress", slot: "Track" })(
    ne(({ theme: e }) => ({
      stroke: "currentColor",
      opacity: (e.vars || e).palette.action.activatedOpacity,
    })),
  ),
  Nl = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiCircularProgress" }),
      {
        className: n,
        color: a = "primary",
        disableShrink: i = !1,
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
        color: a,
        disableShrink: i,
        size: l,
        thickness: u,
        value: h,
        variant: y,
        enableTrackSlot: s,
      },
      g = Wf(f),
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
    return w.jsx(Hf, {
      className: U(g.root, n),
      style: { width: l, height: l, ...x, ...c },
      ownerState: f,
      ref: r,
      role: "progressbar",
      ...k,
      ...d,
      children: w.jsxs(Vf, {
        className: g.svg,
        ownerState: f,
        viewBox: `${xt / 2} ${xt / 2} ${xt} ${xt}`,
        children: [
          s
            ? w.jsx(_f, {
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
          w.jsx(Uf, {
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
function Gf(e) {
  return se("MuiIconButton", e);
}
const qi = ce("MuiIconButton", [
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
  Kf = (e) => {
    const {
        classes: t,
        disabled: r,
        color: o,
        edge: n,
        size: a,
        loading: i,
      } = e,
      s = {
        root: [
          "root",
          i && "loading",
          r && "disabled",
          o !== "default" && `color${N(o)}`,
          n && `edge${N(n)}`,
          `size${N(a)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return le(s, Gf, t);
  },
  qf = F(dr, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.loading && t.loading,
        r.color !== "default" && t[`color${N(r.color)}`],
        r.edge && t[`edge${N(r.edge)}`],
        t[`size${N(r.size)}`],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
    ne(({ theme: e }) => ({
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
      [`&.${qi.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${qi.loading}`]: { color: "transparent" },
    })),
  ),
  Yf = F("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(
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
  Xf = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiIconButton" }),
      {
        edge: n = !1,
        children: a,
        className: i,
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
      b = d ?? w.jsx(Nl, { "aria-labelledby": g, color: "inherit", size: 16 }),
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
      k = Kf(x);
    return w.jsxs(qf, {
      id: y ? g : h,
      className: U(k.root, i),
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
            children: w.jsx(Yf, {
              className: k.loadingIndicator,
              ownerState: x,
              children: y && b,
            }),
          }),
        a,
      ],
    });
  }),
  Jf = je(
    w.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
  ),
  Qf = je(
    w.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
  ),
  Zf = je(
    w.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
  ),
  em = je(
    w.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
  ),
  tm = je(
    w.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
  ),
  rm = (e) => {
    const { variant: t, color: r, severity: o, classes: n } = e,
      a = {
        root: ["root", `color${N(r || o)}`, `${t}${N(r || o)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return le(a, zf, n);
  },
  om = F(gr, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${N(r.color || r.severity)}`],
      ];
    },
  })(
    ne(({ theme: e }) => {
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
                [`& .${Ki.icon}`]: e.vars
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
                [`& .${Ki.icon}`]: e.vars
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
  nm = F("div", { name: "MuiAlert", slot: "Icon" })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  am = F("div", { name: "MuiAlert", slot: "Message" })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto",
  }),
  im = F("div", { name: "MuiAlert", slot: "Action" })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Yi = {
    success: w.jsx(Jf, { fontSize: "inherit" }),
    warning: w.jsx(Qf, { fontSize: "inherit" }),
    error: w.jsx(Zf, { fontSize: "inherit" }),
    info: w.jsx(em, { fontSize: "inherit" }),
  },
  S0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiAlert" }),
      {
        action: n,
        children: a,
        className: i,
        closeText: s = "Close",
        color: l,
        components: c = {},
        componentsProps: u = {},
        icon: h,
        iconMapping: y = Yi,
        onClose: d,
        role: f = "alert",
        severity: g = "success",
        slotProps: b = {},
        slots: x = {},
        variant: k = "standard",
        ...S
      } = o,
      v = { ...o, color: l, severity: g, variant: k, colorSeverity: l || g },
      C = rm(v),
      R = {
        slots: { closeButton: c.CloseButton, closeIcon: c.CloseIcon, ...x },
        slotProps: { ...u, ...b },
      },
      [P, I] = fe("root", {
        ref: r,
        shouldForwardComponentProp: !0,
        className: U(C.root, i),
        elementType: om,
        externalForwardedProps: { ...R, ...S },
        ownerState: v,
        additionalProps: { role: f, elevation: 0 },
      }),
      [A, O] = fe("icon", {
        className: C.icon,
        elementType: nm,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [L, p] = fe("message", {
        className: C.message,
        elementType: am,
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
        elementType: Xf,
        externalForwardedProps: R,
        ownerState: v,
      }),
      [D, B] = fe("closeIcon", {
        elementType: tm,
        externalForwardedProps: R,
        ownerState: v,
      });
    return w.jsxs(P, {
      ...I,
      children: [
        h !== !1 ? w.jsx(A, { ...O, children: h || y[g] || Yi[g] }) : null,
        w.jsx(L, { ...p, children: a }),
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
                children: w.jsx(D, { fontSize: "small", ...B }),
              }),
            })
          : null,
      ],
    });
  });
function sm(e) {
  return se("MuiTypography", e);
}
const Xi = ce("MuiTypography", [
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
  lm = {
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
  cm = of(),
  um = (e) => {
    const {
        align: t,
        gutterBottom: r,
        noWrap: o,
        paragraph: n,
        variant: a,
        classes: i,
      } = e,
      s = {
        root: [
          "root",
          a,
          e.align !== "inherit" && `align${N(t)}`,
          r && "gutterBottom",
          o && "noWrap",
          n && "paragraph",
        ],
      };
    return le(s, sm, i);
  },
  dm = F("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.variant && t[r.variant],
        r.align !== "inherit" && t[`align${N(r.align)}`],
        r.noWrap && t.noWrap,
        r.gutterBottom && t.gutterBottom,
        r.paragraph && t.paragraph,
      ];
    },
  })(
    ne(({ theme: e }) => {
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
              props: { color: `text${N(r)}` },
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
  Ji = {
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
  Tr = m.forwardRef(function (t, r) {
    const { color: o, ...n } = ue({ props: t, name: "MuiTypography" }),
      a = !lm[o],
      i = cm({ ...n, ...(a && { color: o }) }),
      {
        align: s = "inherit",
        className: l,
        component: c,
        gutterBottom: u = !1,
        noWrap: h = !1,
        paragraph: y = !1,
        variant: d = "body1",
        variantMapping: f = Ji,
        ...g
      } = i,
      b = {
        ...i,
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
      x = c || (y ? "p" : f[d] || Ji[d]) || "span",
      k = um(b);
    return w.jsx(dm, {
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
function pm(e) {
  return se("MuiAppBar", e);
}
ce("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const fm = (e) => {
    const { color: t, position: r, classes: o } = e,
      n = { root: ["root", `color${N(t)}`, `position${N(r)}`] };
    return le(n, pm, o);
  },
  Qi = (e, t) => (e ? `${e.replace(")", "")}, ${t})` : t),
  mm = F(gr, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`position${N(r.position)}`], t[`color${N(r.color)}`]];
    },
  })(
    ne(({ theme: e }) => ({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0,
      variants: [
        {
          props: { position: "fixed" },
          style: {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": { position: "absolute" },
          },
        },
        {
          props: { position: "absolute" },
          style: {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        {
          props: { position: "sticky" },
          style: {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        { props: { position: "static" }, style: { position: "static" } },
        { props: { position: "relative" }, style: { position: "relative" } },
        {
          props: { color: "inherit" },
          style: { "--AppBar-color": "inherit", color: "var(--AppBar-color)" },
        },
        {
          props: { color: "default" },
          style: {
            "--AppBar-background": e.vars
              ? e.vars.palette.AppBar.defaultBg
              : e.palette.grey[100],
            "--AppBar-color": e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles("dark", {
              "--AppBar-background": e.vars
                ? e.vars.palette.AppBar.defaultBg
                : e.palette.grey[900],
              "--AppBar-color": e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(De(["contrastText"]))
          .map(([t]) => ({
            props: { color: t },
            style: {
              "--AppBar-background": (e.vars ?? e).palette[t].main,
              "--AppBar-color": (e.vars ?? e).palette[t].contrastText,
            },
          })),
        {
          props: (t) =>
            t.enableColorOnDark === !0 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
          },
        },
        {
          props: (t) =>
            t.enableColorOnDark === !1 &&
            !["inherit", "transparent"].includes(t.color),
          style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", {
              backgroundColor: e.vars
                ? Qi(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)")
                : null,
              color: e.vars
                ? Qi(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)")
                : null,
            }),
          },
        },
        {
          props: { color: "transparent" },
          style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...e.applyStyles("dark", { backgroundImage: "none" }),
          },
        },
      ],
    })),
  ),
  C0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiAppBar" }),
      {
        className: n,
        color: a = "primary",
        enableColorOnDark: i = !1,
        position: s = "fixed",
        ...l
      } = o,
      c = { ...o, color: a, position: s, enableColorOnDark: i },
      u = fm(c);
    return w.jsx(mm, {
      square: !0,
      component: "header",
      ownerState: c,
      elevation: 4,
      className: U(u.root, n, s === "fixed" && "mui-fixed"),
      ref: r,
      ...l,
    });
  });
var ot = "top",
  gt = "bottom",
  ht = "right",
  nt = "left",
  Ua = "auto",
  $o = [ot, gt, ht, nt],
  Lr = "start",
  yo = "end",
  gm = "clippingParents",
  zl = "viewport",
  qr = "popper",
  hm = "reference",
  Zi = $o.reduce(function (e, t) {
    return e.concat([t + "-" + Lr, t + "-" + yo]);
  }, []),
  jl = [].concat($o, [Ua]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Lr, t + "-" + yo]);
  }, []),
  ym = "beforeRead",
  vm = "read",
  bm = "afterRead",
  xm = "beforeMain",
  Sm = "main",
  Cm = "afterMain",
  wm = "beforeWrite",
  km = "write",
  Rm = "afterWrite",
  Tm = [ym, vm, bm, xm, Sm, Cm, wm, km, Rm];
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
function _a(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $m(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var o = t.styles[r] || {},
      n = t.attributes[r] || {},
      a = t.elements[r];
    !mt(a) ||
      !Ot(a) ||
      (Object.assign(a.style, o),
      Object.keys(n).forEach(function (i) {
        var s = n[i];
        s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function Pm(e) {
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
          a = t.attributes[o] || {},
          i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]),
          s = i.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !mt(n) ||
          !Ot(n) ||
          (Object.assign(n.style, s),
          Object.keys(a).forEach(function (l) {
            n.removeAttribute(l);
          }));
      });
    }
  );
}
const Em = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: $m,
  effect: Pm,
  requires: ["computeStyles"],
};
function At(e) {
  return e.split("-")[0];
}
var cr = Math.max,
  nn = Math.min,
  Br = Math.round;
function da() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Fl() {
  return !/^((?!chrome|android).)*safari/i.test(da());
}
function Nr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(),
    n = 1,
    a = 1;
  t &&
    mt(e) &&
    ((n = (e.offsetWidth > 0 && Br(o.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && Br(o.height) / e.offsetHeight) || 1));
  var i = pr(e) ? ct(e) : window,
    s = i.visualViewport,
    l = !Fl() && r,
    c = (o.left + (l && s ? s.offsetLeft : 0)) / n,
    u = (o.top + (l && s ? s.offsetTop : 0)) / a,
    h = o.width / n,
    y = o.height / a;
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
function Ga(e) {
  var t = Nr(e),
    r = e.offsetWidth,
    o = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: o }
  );
}
function Dl(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && _a(r)) {
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
function Im(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function Jt(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Tn(e) {
  return Ot(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (_a(e) ? e.host : null) || Jt(e);
}
function es(e) {
  return !mt(e) || Dt(e).position === "fixed" ? null : e.offsetParent;
}
function Mm(e) {
  var t = /firefox/i.test(da()),
    r = /Trident/i.test(da());
  if (r && mt(e)) {
    var o = Dt(e);
    if (o.position === "fixed") return null;
  }
  var n = Tn(e);
  for (_a(n) && (n = n.host); mt(n) && ["html", "body"].indexOf(Ot(n)) < 0; ) {
    var a = Dt(n);
    if (
      a.transform !== "none" ||
      a.perspective !== "none" ||
      a.contain === "paint" ||
      ["transform", "perspective"].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === "filter") ||
      (t && a.filter && a.filter !== "none")
    )
      return n;
    n = n.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = ct(e), r = es(e); r && Im(r) && Dt(r).position === "static"; )
    r = es(r);
  return r &&
    (Ot(r) === "html" || (Ot(r) === "body" && Dt(r).position === "static"))
    ? t
    : r || Mm(e) || t;
}
function Ka(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function io(e, t, r) {
  return cr(e, nn(t, r));
}
function Am(e, t, r) {
  var o = io(e, t, r);
  return o > r ? r : o;
}
function Wl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hl(e) {
  return Object.assign({}, Wl(), e);
}
function Vl(e, t) {
  return t.reduce(function (r, o) {
    return (r[o] = e), r;
  }, {});
}
var Om = function (t, r) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    Hl(typeof t != "number" ? t : Vl(t, $o))
  );
};
function Lm(e) {
  var t,
    r = e.state,
    o = e.name,
    n = e.options,
    a = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    s = At(r.placement),
    l = Ka(s),
    c = [nt, ht].indexOf(s) >= 0,
    u = c ? "height" : "width";
  if (!(!a || !i)) {
    var h = Om(n.padding, r),
      y = Ga(a),
      d = l === "y" ? ot : nt,
      f = l === "y" ? gt : ht,
      g =
        r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u],
      b = i[l] - r.rects.reference[l],
      x = Po(a),
      k = x ? (l === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      S = g / 2 - b / 2,
      v = h[d],
      C = k - y[u] - h[f],
      R = k / 2 - y[u] / 2 + S,
      P = io(v, R, C),
      I = l;
    r.modifiersData[o] = ((t = {}), (t[I] = P), (t.centerOffset = P - R), t);
  }
}
function Bm(e) {
  var t = e.state,
    r = e.options,
    o = r.element,
    n = o === void 0 ? "[data-popper-arrow]" : o;
  n != null &&
    ((typeof n == "string" && ((n = t.elements.popper.querySelector(n)), !n)) ||
      (Dl(t.elements.popper, n) && (t.elements.arrow = n)));
}
const Nm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Lm,
  effect: Bm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function zr(e) {
  return e.split("-")[1];
}
var zm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function jm(e, t) {
  var r = e.x,
    o = e.y,
    n = t.devicePixelRatio || 1;
  return { x: Br(r * n) / n || 0, y: Br(o * n) / n || 0 };
}
function ts(e) {
  var t,
    r = e.popper,
    o = e.popperRect,
    n = e.placement,
    a = e.variation,
    i = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    h = e.isFixed,
    y = i.x,
    d = y === void 0 ? 0 : y,
    f = i.y,
    g = f === void 0 ? 0 : f,
    b = typeof u == "function" ? u({ x: d, y: g }) : { x: d, y: g };
  (d = b.x), (g = b.y);
  var x = i.hasOwnProperty("x"),
    k = i.hasOwnProperty("y"),
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
      n === ot || ((n === nt || n === ht) && a === yo))
    ) {
      v = gt;
      var A = h && R === C && C.visualViewport ? C.visualViewport.height : R[P];
      (g -= A - o.height), (g *= l ? 1 : -1);
    }
    if (n === nt || ((n === ot || n === gt) && a === yo)) {
      S = ht;
      var O = h && R === C && C.visualViewport ? C.visualViewport.width : R[I];
      (d -= O - o.width), (d *= l ? 1 : -1);
    }
  }
  var L = Object.assign({ position: s }, c && zm),
    p = u === !0 ? jm({ x: d, y: g }, ct(r)) : { x: d, y: g };
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
function Fm(e) {
  var t = e.state,
    r = e.options,
    o = r.gpuAcceleration,
    n = o === void 0 ? !0 : o,
    a = r.adaptive,
    i = a === void 0 ? !0 : a,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    c = {
      placement: At(t.placement),
      variation: zr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ts(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: l,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ts(
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
const Dm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Fm,
  data: {},
};
var Oo = { passive: !0 };
function Wm(e) {
  var t = e.state,
    r = e.instance,
    o = e.options,
    n = o.scroll,
    a = n === void 0 ? !0 : n,
    i = o.resize,
    s = i === void 0 ? !0 : i,
    l = ct(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    a &&
      c.forEach(function (u) {
        u.addEventListener("scroll", r.update, Oo);
      }),
    s && l.addEventListener("resize", r.update, Oo),
    function () {
      a &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", r.update, Oo);
        }),
        s && l.removeEventListener("resize", r.update, Oo);
    }
  );
}
const Hm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Wm,
  data: {},
};
var Vm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Yo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Vm[t];
  });
}
var Um = { start: "end", end: "start" };
function rs(e) {
  return e.replace(/start|end/g, function (t) {
    return Um[t];
  });
}
function qa(e) {
  var t = ct(e),
    r = t.pageXOffset,
    o = t.pageYOffset;
  return { scrollLeft: r, scrollTop: o };
}
function Ya(e) {
  return Nr(Jt(e)).left + qa(e).scrollLeft;
}
function _m(e, t) {
  var r = ct(e),
    o = Jt(e),
    n = r.visualViewport,
    a = o.clientWidth,
    i = o.clientHeight,
    s = 0,
    l = 0;
  if (n) {
    (a = n.width), (i = n.height);
    var c = Fl();
    (c || (!c && t === "fixed")) && ((s = n.offsetLeft), (l = n.offsetTop));
  }
  return { width: a, height: i, x: s + Ya(e), y: l };
}
function Gm(e) {
  var t,
    r = Jt(e),
    o = qa(e),
    n = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = cr(
      r.scrollWidth,
      r.clientWidth,
      n ? n.scrollWidth : 0,
      n ? n.clientWidth : 0,
    ),
    i = cr(
      r.scrollHeight,
      r.clientHeight,
      n ? n.scrollHeight : 0,
      n ? n.clientHeight : 0,
    ),
    s = -o.scrollLeft + Ya(e),
    l = -o.scrollTop;
  return (
    Dt(n || r).direction === "rtl" &&
      (s += cr(r.clientWidth, n ? n.clientWidth : 0) - a),
    { width: a, height: i, x: s, y: l }
  );
}
function Xa(e) {
  var t = Dt(e),
    r = t.overflow,
    o = t.overflowX,
    n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + n + o);
}
function Ul(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0
    ? e.ownerDocument.body
    : mt(e) && Xa(e)
      ? e
      : Ul(Tn(e));
}
function so(e, t) {
  var r;
  t === void 0 && (t = []);
  var o = Ul(e),
    n = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = ct(o),
    i = n ? [a].concat(a.visualViewport || [], Xa(o) ? o : []) : o,
    s = t.concat(i);
  return n ? s : s.concat(so(Tn(i)));
}
function pa(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Km(e, t) {
  var r = Nr(e, !1, t === "fixed");
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
function os(e, t, r) {
  return t === zl ? pa(_m(e, r)) : pr(t) ? Km(t, r) : pa(Gm(Jt(e)));
}
function qm(e) {
  var t = so(Tn(e)),
    r = ["absolute", "fixed"].indexOf(Dt(e).position) >= 0,
    o = r && mt(e) ? Po(e) : e;
  return pr(o)
    ? t.filter(function (n) {
        return pr(n) && Dl(n, o) && Ot(n) !== "body";
      })
    : [];
}
function Ym(e, t, r, o) {
  var n = t === "clippingParents" ? qm(e) : [].concat(t),
    a = [].concat(n, [r]),
    i = a[0],
    s = a.reduce(
      function (l, c) {
        var u = os(e, c, o);
        return (
          (l.top = cr(u.top, l.top)),
          (l.right = nn(u.right, l.right)),
          (l.bottom = nn(u.bottom, l.bottom)),
          (l.left = cr(u.left, l.left)),
          l
        );
      },
      os(e, i, o),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function _l(e) {
  var t = e.reference,
    r = e.element,
    o = e.placement,
    n = o ? At(o) : null,
    a = o ? zr(o) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l;
  switch (n) {
    case ot:
      l = { x: i, y: t.y - r.height };
      break;
    case gt:
      l = { x: i, y: t.y + t.height };
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
  var c = n ? Ka(n) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Lr:
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
    a = r.strategy,
    i = a === void 0 ? e.strategy : a,
    s = r.boundary,
    l = s === void 0 ? gm : s,
    c = r.rootBoundary,
    u = c === void 0 ? zl : c,
    h = r.elementContext,
    y = h === void 0 ? qr : h,
    d = r.altBoundary,
    f = d === void 0 ? !1 : d,
    g = r.padding,
    b = g === void 0 ? 0 : g,
    x = Hl(typeof b != "number" ? b : Vl(b, $o)),
    k = y === qr ? hm : qr,
    S = e.rects.popper,
    v = e.elements[f ? k : y],
    C = Ym(pr(v) ? v : v.contextElement || Jt(e.elements.popper), l, u, i),
    R = Nr(e.elements.reference),
    P = _l({ reference: R, element: S, placement: n }),
    I = pa(Object.assign({}, S, P)),
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
function Xm(e, t) {
  t === void 0 && (t = {});
  var r = t,
    o = r.placement,
    n = r.boundary,
    a = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? jl : l,
    u = zr(o),
    h = u
      ? s
        ? Zi
        : Zi.filter(function (f) {
            return zr(f) === u;
          })
      : $o,
    y = h.filter(function (f) {
      return c.indexOf(f) >= 0;
    });
  y.length === 0 && (y = h);
  var d = y.reduce(function (f, g) {
    return (
      (f[g] = vo(e, { placement: g, boundary: n, rootBoundary: a, padding: i })[
        At(g)
      ]),
      f
    );
  }, {});
  return Object.keys(d).sort(function (f, g) {
    return d[f] - d[g];
  });
}
function Jm(e) {
  if (At(e) === Ua) return [];
  var t = Yo(e);
  return [rs(e), t, rs(t)];
}
function Qm(e) {
  var t = e.state,
    r = e.options,
    o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (
      var n = r.mainAxis,
        a = n === void 0 ? !0 : n,
        i = r.altAxis,
        s = i === void 0 ? !0 : i,
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
        S = l || (k || !f ? [Yo(b)] : Jm(b)),
        v = [b].concat(S).reduce(function (ye, J) {
          return ye.concat(
            At(J) === Ua
              ? Xm(t, {
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
        $ = zr(L) === Lr,
        T = [ot, gt].indexOf(p) >= 0,
        M = T ? "width" : "height",
        E = vo(t, {
          placement: L,
          boundary: u,
          rootBoundary: h,
          altBoundary: y,
          padding: c,
        }),
        D = T ? ($ ? ht : nt) : $ ? gt : ot;
      C[M] > R[M] && (D = Yo(D));
      var B = Yo(D),
        j = [];
      if (
        (a && j.push(E[p] <= 0),
        s && j.push(E[D] <= 0, E[B] <= 0),
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
const Zm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Qm,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ns(e, t, r) {
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
function as(e) {
  return [ot, ht, gt, nt].some(function (t) {
    return e[t] >= 0;
  });
}
function eg(e) {
  var t = e.state,
    r = e.name,
    o = t.rects.reference,
    n = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    i = vo(t, { elementContext: "reference" }),
    s = vo(t, { altBoundary: !0 }),
    l = ns(i, o),
    c = ns(s, n, a),
    u = as(l),
    h = as(c);
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
const tg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eg,
};
function rg(e, t, r) {
  var o = At(e),
    n = [nt, ot].indexOf(o) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = a[0],
    s = a[1];
  return (
    (i = i || 0),
    (s = (s || 0) * n),
    [nt, ht].indexOf(o) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function og(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.offset,
    a = n === void 0 ? [0, 0] : n,
    i = jl.reduce(function (u, h) {
      return (u[h] = rg(h, t.rects, a)), u;
    }, {}),
    s = i[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[o] = i);
}
const ng = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: og,
};
function ag(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = _l({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const ig = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ag,
  data: {},
};
function sg(e) {
  return e === "x" ? "y" : "x";
}
function lg(e) {
  var t = e.state,
    r = e.options,
    o = e.name,
    n = r.mainAxis,
    a = n === void 0 ? !0 : n,
    i = r.altAxis,
    s = i === void 0 ? !1 : i,
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
    k = zr(t.placement),
    S = !k,
    v = Ka(x),
    C = sg(v),
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
    if (a) {
      var $,
        T = v === "y" ? ot : nt,
        M = v === "y" ? gt : ht,
        E = v === "y" ? "height" : "width",
        D = R[v],
        B = D + b[T],
        j = D - b[M],
        G = d ? -I[E] / 2 : 0,
        H = k === Lr ? P[E] : I[E],
        X = k === Lr ? -I[E] : -P[E],
        ee = t.elements.arrow,
        ye = d && ee ? Ga(ee) : { width: 0, height: 0 },
        J = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Wl(),
        _ = J[T],
        te = J[M],
        me = io(0, P[E], ye[E]),
        ve = S ? P[E] / 2 - G - me - _ - O.mainAxis : H - me - _ - O.mainAxis,
        Z = S ? -P[E] / 2 + G + me + te + O.mainAxis : X + me + te + O.mainAxis,
        de = t.elements.arrow && Po(t.elements.arrow),
        ae = de ? (v === "y" ? de.clientTop || 0 : de.clientLeft || 0) : 0,
        oe = ($ = L == null ? void 0 : L[v]) != null ? $ : 0,
        Y = D + ve - oe - ae,
        pe = D + Z - oe,
        Ae = io(d ? nn(B, Y) : B, D, d ? cr(j, pe) : j);
      (R[v] = Ae), (p[v] = Ae - D);
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
        he = d && Ie ? Am(V, Me, Q) : io(d ? V : re, Me, d ? Q : Ve);
      (R[C] = he), (p[C] = he - Me);
    }
    t.modifiersData[o] = p;
  }
}
const cg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: lg,
  requiresIfExists: ["offset"],
};
function ug(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function dg(e) {
  return e === ct(e) || !mt(e) ? qa(e) : ug(e);
}
function pg(e) {
  var t = e.getBoundingClientRect(),
    r = Br(t.width) / e.offsetWidth || 1,
    o = Br(t.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function fg(e, t, r) {
  r === void 0 && (r = !1);
  var o = mt(t),
    n = mt(t) && pg(t),
    a = Jt(t),
    i = Nr(e, n, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (o || (!o && !r)) &&
      ((Ot(t) !== "body" || Xa(a)) && (s = dg(t)),
      mt(t)
        ? ((l = Nr(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : a && (l.x = Ya(a))),
    {
      x: i.left + s.scrollLeft - l.x,
      y: i.top + s.scrollTop - l.y,
      width: i.width,
      height: i.height,
    }
  );
}
function mg(e) {
  var t = new Map(),
    r = new Set(),
    o = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function n(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function (s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && n(l);
      }
    }),
      o.push(a);
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || n(a);
    }),
    o
  );
}
function gg(e) {
  var t = mg(e);
  return Tm.reduce(function (r, o) {
    return r.concat(
      t.filter(function (n) {
        return n.phase === o;
      }),
    );
  }, []);
}
function hg(e) {
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
function yg(e) {
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
function ss() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function vg(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    o = r === void 0 ? [] : r,
    n = t.defaultOptions,
    a = n === void 0 ? is : n;
  return function (s, l, c) {
    c === void 0 && (c = a);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, is, a),
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
            (u.options = Object.assign({}, a, u.options, k)),
            (u.scrollParents = {
              reference: pr(s)
                ? so(s)
                : s.contextElement
                  ? so(s.contextElement)
                  : [],
              popper: so(l),
            });
          var S = gg(yg([].concat(o, u.options.modifiers)));
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
            if (ss(k, S)) {
              (u.rects = {
                reference: fg(k, Po(S), u.options.strategy === "fixed"),
                popper: Ga(S),
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
        update: hg(function () {
          return new Promise(function (b) {
            d.forceUpdate(), b(u);
          });
        }),
        destroy: function () {
          g(), (y = !0);
        },
      };
    if (!ss(s, l)) return d;
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
var bg = [Hm, ig, Dm, Em, ng, Zm, cg, Nm, tg],
  xg = vg({ defaultModifiers: bg });
function Tt(e) {
  var h;
  const {
      elementType: t,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: n = !1,
      ...a
    } = e,
    i = n ? {} : Ll(r, o),
    { props: s, internalRef: l } = Bl({ ...a, externalSlotProps: i }),
    c = He(
      l,
      i == null ? void 0 : i.ref,
      (h = e.additionalProps) == null ? void 0 : h.ref,
    );
  return Ol(t, { ...s, ref: c }, o);
}
function Qt(e) {
  var t;
  return parseInt(m.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
function Sg(e) {
  return typeof e == "function" ? e() : e;
}
const Gl = m.forwardRef(function (t, r) {
  const { children: o, container: n, disablePortal: a = !1 } = t,
    [i, s] = m.useState(null),
    l = He(m.isValidElement(o) ? Qt(o) : null, r);
  if (
    (it(() => {
      a || s(Sg(n) || document.body);
    }, [n, a]),
    it(() => {
      if (i && !a)
        return (
          Vi(r, i),
          () => {
            Vi(r, null);
          }
        );
    }, [r, i, a]),
    a)
  ) {
    if (m.isValidElement(o)) {
      const c = { ref: l };
      return m.cloneElement(o, c);
    }
    return o;
  }
  return i && dc.createPortal(o, i);
});
function Cg(e) {
  return se("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function wg(e, t) {
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
function fa(e) {
  return typeof e == "function" ? e() : e;
}
function kg(e) {
  return e.nodeType !== void 0;
}
const Rg = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, Cg, t);
  },
  Tg = {},
  $g = m.forwardRef(function (t, r) {
    const {
        anchorEl: o,
        children: n,
        direction: a,
        disablePortal: i,
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
    it(() => {
      C.current = v;
    }, [v]),
      m.useImperativeHandle(h, () => S.current, []);
    const R = wg(c, a),
      [P, I] = m.useState(R),
      [A, O] = m.useState(fa(o));
    m.useEffect(() => {
      S.current && S.current.forceUpdate();
    }),
      m.useEffect(() => {
        o && O(fa(o));
      }, [o]),
      it(() => {
        if (!A || !l) return;
        const M = (B) => {
          I(B.placement);
        };
        let E = [
          { name: "preventOverflow", options: { altBoundary: i } },
          { name: "flip", options: { altBoundary: i } },
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
        const D = xg(A, x.current, { placement: R, ...u, modifiers: E });
        return (
          C.current(D),
          () => {
            D.destroy(), C.current(null);
          }
        );
      }, [A, i, s, l, u, R]);
    const L = { placement: P };
    f !== null && (L.TransitionProps = f);
    const p = Rg(t),
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
  Pg = m.forwardRef(function (t, r) {
    const {
        anchorEl: o,
        children: n,
        container: a,
        direction: i = "ltr",
        disablePortal: s = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: h = "bottom",
        popperOptions: y = Tg,
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
    if (a) P = a;
    else if (o) {
      const O = fa(o);
      P = O && kg(O) ? Ye(O).body : Ye(null).body;
    }
    const I = !u && l && (!g || S) ? "none" : void 0,
      A = g ? { in: u, onEnter: C, onExited: R } : void 0;
    return w.jsx(Gl, {
      disablePortal: s,
      container: P,
      children: w.jsx($g, {
        anchorEl: o,
        direction: i,
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
  Eg = F(Pg, { name: "MuiPopper", slot: "Root" })({}),
  Kl = m.forwardRef(function (t, r) {
    const o = Wr(),
      n = ue({ props: t, name: "MuiPopper" }),
      {
        anchorEl: a,
        component: i,
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
        anchorEl: a,
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
    return w.jsx(Eg, {
      as: i,
      direction: o ? "rtl" : "ltr",
      slots: { root: C },
      slotProps: S ?? l,
      ...R,
      ref: r,
    });
  }),
  Ig = je(
    w.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
  );
function Mg(e) {
  return se("MuiChip", e);
}
const $e = ce("MuiChip", [
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
  Ag = (e) => {
    const {
        classes: t,
        disabled: r,
        size: o,
        color: n,
        iconColor: a,
        onDelete: i,
        clickable: s,
        variant: l,
      } = e,
      c = {
        root: [
          "root",
          l,
          r && "disabled",
          `size${N(o)}`,
          `color${N(n)}`,
          s && "clickable",
          s && `clickableColor${N(n)}`,
          i && "deletable",
          i && `deletableColor${N(n)}`,
          `${l}${N(n)}`,
        ],
        label: ["label", `label${N(o)}`],
        avatar: ["avatar", `avatar${N(o)}`, `avatarColor${N(n)}`],
        icon: ["icon", `icon${N(o)}`, `iconColor${N(a)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${N(o)}`,
          `deleteIconColor${N(n)}`,
          `deleteIcon${N(l)}Color${N(n)}`,
        ],
      };
    return le(c, Mg, t);
  },
  Og = F("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        {
          color: o,
          iconColor: n,
          clickable: a,
          onDelete: i,
          size: s,
          variant: l,
        } = r;
      return [
        { [`& .${$e.avatar}`]: t.avatar },
        { [`& .${$e.avatar}`]: t[`avatar${N(s)}`] },
        { [`& .${$e.avatar}`]: t[`avatarColor${N(o)}`] },
        { [`& .${$e.icon}`]: t.icon },
        { [`& .${$e.icon}`]: t[`icon${N(s)}`] },
        { [`& .${$e.icon}`]: t[`iconColor${N(n)}`] },
        { [`& .${$e.deleteIcon}`]: t.deleteIcon },
        { [`& .${$e.deleteIcon}`]: t[`deleteIcon${N(s)}`] },
        { [`& .${$e.deleteIcon}`]: t[`deleteIconColor${N(o)}`] },
        { [`& .${$e.deleteIcon}`]: t[`deleteIcon${N(l)}Color${N(o)}`] },
        t.root,
        t[`size${N(s)}`],
        t[`color${N(o)}`],
        a && t.clickable,
        a && o !== "default" && t[`clickableColor${N(o)}`],
        i && t.deletable,
        i && o !== "default" && t[`deletableColor${N(o)}`],
        t[l],
        t[`${l}${N(o)}`],
      ];
    },
  })(
    ne(({ theme: e }) => {
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
  Lg = F("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        { size: o } = r;
      return [t.label, t[`label${N(o)}`]];
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
function ls(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const w0 = m.forwardRef(function (t, r) {
  const o = ue({ props: t, name: "MuiChip" }),
    {
      avatar: n,
      className: a,
      clickable: i,
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
      _.currentTarget === _.target && ls(_) && _.preventDefault(), g && g(_);
    },
    p = (_) => {
      _.currentTarget === _.target && f && ls(_) && f(_), b && b(_);
    },
    $ = i !== !1 && d ? !0 : i,
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
    E = Ag(M),
    D =
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
        : w.jsx(Ig, { className: E.deleteIcon, onClick: O }));
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
      elementType: Og,
      externalForwardedProps: { ...H, ...P },
      ownerState: M,
      shouldForwardComponentProp: !0,
      ref: A,
      className: U(E.root, a),
      additionalProps: {
        disabled: $ && u ? !0 : void 0,
        tabIndex: v && u ? -1 : S,
        ...D,
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
      elementType: Lg,
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
const Bg = {
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
function Ng(e) {
  for (const t in e) return !1;
  return !0;
}
function cs(e) {
  return Ng(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const zg = m.forwardRef(function (t, r) {
  const {
      onChange: o,
      maxRows: n,
      minRows: a = 1,
      style: i,
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
      a && (p = Math.max(Number(a) * L, p)),
        n && (p = Math.min(Number(n) * L, p)),
        (p = Math.max(p, L));
      const $ = p + (P === "border-box" ? I + A : 0),
        T = Math.abs(p - O) <= 1;
      return { outerHeightStyle: $, overflowing: T };
    }, [n, a, t.placeholder]),
    g = tt(() => {
      const S = u.current,
        v = f();
      if (!S || !v || cs(v)) return !1;
      const C = v.outerHeightStyle;
      return y.current != null && y.current !== C;
    }),
    b = m.useCallback(() => {
      const S = u.current,
        v = f();
      if (!S || !v || cs(v)) return;
      const C = v.outerHeightStyle;
      y.current !== C && ((y.current = C), (S.style.height = `${C}px`)),
        (S.style.overflow = v.overflowing ? "hidden" : "");
    }, [f]),
    x = m.useRef(-1);
  it(() => {
    const S = Da(b),
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
    it(() => {
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
        rows: a,
        style: i,
        ...l,
      }),
      w.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: d,
        tabIndex: -1,
        style: { ...Bg.shadow, ...i, paddingTop: 0, paddingBottom: 0 },
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
function us(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function an(e, t = !1) {
  return (
    e &&
    ((us(e.value) && e.value !== "") ||
      (t && us(e.defaultValue) && e.defaultValue !== ""))
  );
}
function jg(e) {
  return e.startAdornment;
}
function Fg(e) {
  return se("MuiInputBase", e);
}
const jr = ce("MuiInputBase", [
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
var ds;
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
      r.color && t[`color${N(r.color)}`],
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
  Dg = (e) => {
    const {
        classes: t,
        color: r,
        disabled: o,
        error: n,
        endAdornment: a,
        focused: i,
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
          `color${N(r)}`,
          o && "disabled",
          n && "error",
          l && "fullWidth",
          i && "focused",
          s && "formControl",
          y && y !== "medium" && `size${N(y)}`,
          u && "multiline",
          d && "adornedStart",
          a && "adornedEnd",
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
          a && "inputAdornedEnd",
          h && "readOnly",
        ],
      };
    return le(g, Fg, t);
  },
  In = F("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Pn })(
    ne(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${jr.disabled}`]: {
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
  Mn = F("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: En,
  })(
    ne(({ theme: e }) => {
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
        [`label[data-shrink=false] + .${jr.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": n,
          "&:focus::-moz-placeholder": n,
          "&:focus::-ms-input-placeholder": n,
        },
        [`&.${jr.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: a }) => !a.disableInjectingGlobalStyles,
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
            props: ({ ownerState: a }) => a.multiline,
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
  ps = Fa({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  Ja = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": n,
        autoComplete: a,
        autoFocus: i,
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
        readOnly: D,
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
      de = He(ve, v, S.ref, Z),
      [ae, oe] = m.useState(!1),
      Y = Zt(),
      pe = Vr({
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
    (pe.focused = Y ? Y.focused : ae),
      m.useEffect(() => {
        !Y && y && ae && (oe(!1), O && O());
      }, [Y, y, ae, O]);
    const Ae = Y && Y.onFilled,
      Se = Y && Y.onEmpty,
      Pe = m.useCallback(
        (K) => {
          an(K) ? Ae && Ae() : Se && Se();
        },
        [Ae, Se],
      );
    it(() => {
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
      (Ve = zg));
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
        color: pe.color || "primary",
        disabled: pe.disabled,
        endAdornment: f,
        error: pe.error,
        focused: pe.focused,
        formControl: Y,
        fullWidth: b,
        hiddenLabel: pe.hiddenLabel,
        multiline: I,
        size: pe.size,
        startAdornment: ee,
        type: ye,
      },
      Q = Dg(V),
      he = X.root || c.Root || In,
      xe = H.root || u.root || {},
      q = X.input || c.Input || Mn;
    return (
      (Ie = { ...Ie, ...(H.input ?? u.input) }),
      w.jsxs(m.Fragment, {
        children: [
          !d && typeof ps == "function" && (ds || (ds = w.jsx(ps, {}))),
          w.jsxs(he, {
            ...xe,
            ref: r,
            onClick: re,
            ..._,
            ...(!Kt(he) && { ownerState: { ...V, ...xe.ownerState } }),
            className: U(Q.root, xe.className, s, D && "MuiInputBase-readOnly"),
            children: [
              ee,
              w.jsx($n.Provider, {
                value: null,
                children: w.jsx(q, {
                  "aria-invalid": pe.error,
                  "aria-describedby": n,
                  autoComplete: a,
                  autoFocus: i,
                  defaultValue: h,
                  disabled: pe.disabled,
                  id: x,
                  onAnimationStart: W,
                  name: A,
                  placeholder: E,
                  readOnly: D,
                  required: pe.required,
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
                  ref: de,
                  className: U(
                    Q.input,
                    Ie.className,
                    D && "MuiInputBase-readOnly",
                  ),
                  onBlur: Me,
                  onChange: Re,
                  onFocus: Ee,
                }),
              }),
              f,
              B ? B({ ...pe, startAdornment: ee }) : null,
            ],
          }),
        ],
      })
    );
  });
function Wg(e) {
  return se("MuiInput", e);
}
const Yr = { ...jr, ...ce("MuiInput", ["root", "underline", "input"]) };
function Hg(e) {
  return se("MuiOutlinedInput", e);
}
const Rt = {
  ...jr,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function Vg(e) {
  return se("MuiFilledInput", e);
}
const tr = {
    ...jr,
    ...ce("MuiFilledInput", [
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
  Ug = je(w.jsx("path", { d: "M7 10l5 5 5-5z" })),
  _g = je(
    w.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
  );
function Gg(e) {
  return se("MuiAvatar", e);
}
ce("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const Kg = (e) => {
    const { classes: t, variant: r, colorDefault: o } = e;
    return le(
      {
        root: ["root", r, o && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      Gg,
      t,
    );
  },
  qg = F("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
    },
  })(
    ne(({ theme: e }) => ({
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
  Yg = F("img", { name: "MuiAvatar", slot: "Img" })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  Xg = F(_g, { name: "MuiAvatar", slot: "Fallback" })({
    width: "75%",
    height: "75%",
  });
function Jg({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: o }) {
  const [n, a] = m.useState(!1);
  return (
    m.useEffect(() => {
      if (!r && !o) return;
      a(!1);
      let i = !0;
      const s = new Image();
      return (
        (s.onload = () => {
          i && a("loaded");
        }),
        (s.onerror = () => {
          i && a("error");
        }),
        (s.crossOrigin = e),
        (s.referrerPolicy = t),
        (s.src = r),
        o && (s.srcset = o),
        () => {
          i = !1;
        }
      );
    }, [e, t, r, o]),
    n
  );
}
const k0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiAvatar" }),
      {
        alt: n,
        children: a,
        className: i,
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
      k = Jg({
        ...u,
        ...(typeof c.img == "function" ? c.img(x) : c.img),
        src: y,
        srcSet: d,
      }),
      S = y || d,
      v = S && k !== "error";
    (x.colorDefault = !v), delete x.ownerState;
    const C = Kg(x),
      [R, P] = fe("root", {
        ref: r,
        className: U(C.root, i),
        elementType: qg,
        externalForwardedProps: { slots: l, slotProps: c, component: s, ...g },
        ownerState: x,
      }),
      [I, A] = fe("img", {
        className: C.img,
        elementType: Yg,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: { ...u, ...c.img } },
        },
        additionalProps: { alt: n, src: y, srcSet: d, sizes: h },
        ownerState: x,
      }),
      [O, L] = fe("fallback", {
        className: C.fallback,
        elementType: Xg,
        externalForwardedProps: { slots: l, slotProps: c },
        shouldForwardComponentProp: !0,
        ownerState: x,
      });
    return (
      v
        ? (b = w.jsx(I, { ...A }))
        : a || a === 0
          ? (b = a)
          : S && n
            ? (b = n[0])
            : (b = w.jsx(O, { ...L })),
      w.jsx(R, { ...P, children: b })
    );
  }),
  Qg = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  ma = m.forwardRef(function (t, r) {
    const o = Wt(),
      n = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        addEndListener: a,
        appear: i = !0,
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
        Va(T);
        const E = Ar({ style: b, timeout: x, easing: l }, { mode: "enter" });
        (T.style.webkitTransition = o.transitions.create("opacity", E)),
          (T.style.transition = o.transitions.create("opacity", E)),
          u && u(T, M);
      }),
      A = R(h),
      O = R(g),
      L = R((T) => {
        const M = Ar({ style: b, timeout: x, easing: l }, { mode: "exit" });
        (T.style.webkitTransition = o.transitions.create("opacity", M)),
          (T.style.transition = o.transitions.create("opacity", M)),
          d && d(T);
      }),
      p = R(f),
      $ = (T) => {
        a && a(v.current, T);
      };
    return w.jsx(k, {
      appear: i,
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
            ...Qg[T],
            ...b,
            ...s.props.style,
          },
          ref: C,
          ...E,
        }),
    });
  });
function Zg(e) {
  return se("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const eh = (e) => {
    const { classes: t, invisible: r } = e;
    return le({ root: ["root", r && "invisible"] }, Zg, t);
  },
  th = F("div", {
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
  ql = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiBackdrop" }),
      {
        children: n,
        className: a,
        component: i = "div",
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
      b = { ...o, component: i, invisible: s },
      x = eh(b),
      k = { transition: d, root: c.Root, ...y },
      S = { ...u, ...h },
      v = { component: i, slots: k, slotProps: S },
      [C, R] = fe("root", {
        elementType: th,
        externalForwardedProps: v,
        className: U(x.root, a),
        ownerState: b,
      }),
      [P, I] = fe("transition", {
        elementType: ma,
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
  rh = ce("MuiBox", ["root"]),
  oh = za(),
  R0 = gd({
    themeId: It,
    defaultTheme: oh,
    defaultClassName: rh.root,
    generateClassName: cl.generate,
  });
function nh(e) {
  return se("MuiButton", e);
}
const rr = ce("MuiButton", [
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
  ah = m.createContext({}),
  ih = m.createContext(void 0),
  sh = (e) => {
    const {
        color: t,
        disableElevation: r,
        fullWidth: o,
        size: n,
        variant: a,
        loading: i,
        loadingPosition: s,
        classes: l,
      } = e,
      c = {
        root: [
          "root",
          i && "loading",
          a,
          `${a}${N(t)}`,
          `size${N(n)}`,
          `${a}Size${N(n)}`,
          `color${N(t)}`,
          r && "disableElevation",
          o && "fullWidth",
          i && `loadingPosition${N(s)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${N(n)}`],
        endIcon: ["icon", "endIcon", `iconSize${N(n)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      u = le(c, nh, l);
    return { ...l, ...u };
  },
  Yl = [
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
  lh = F(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${N(r.color)}`],
        t[`size${N(r.size)}`],
        t[`${r.variant}Size${N(r.size)}`],
        r.color === "inherit" && t.colorInherit,
        r.disableElevation && t.disableElevation,
        r.fullWidth && t.fullWidth,
        r.loading && t.loading,
      ];
    },
  })(
    ne(({ theme: e }) => {
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
  ch = F("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.startIcon,
        r.loading && t.startIconLoadingStart,
        t[`iconSize${N(r.size)}`],
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
      ...Yl,
    ],
  })),
  uh = F("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.endIcon,
        r.loading && t.endIconLoadingEnd,
        t[`iconSize${N(r.size)}`],
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
      ...Yl,
    ],
  })),
  dh = F("span", { name: "MuiButton", slot: "LoadingIndicator" })(
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
  fs = F("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({
    display: "inline-block",
    width: "1em",
    height: "1em",
  }),
  T0 = m.forwardRef(function (t, r) {
    const o = m.useContext(ah),
      n = m.useContext(ih),
      a = go(o, t),
      i = ue({ props: a, name: "MuiButton" }),
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
      } = i,
      O = mr(x),
      L = S ?? w.jsx(Nl, { "aria-labelledby": O, color: "inherit", size: 16 }),
      p = {
        ...i,
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
      $ = sh(p),
      T =
        (R || (k && v === "start")) &&
        w.jsx(ch, {
          className: $.startIcon,
          ownerState: p,
          children:
            R ||
            w.jsx(fs, { className: $.loadingIconPlaceholder, ownerState: p }),
        }),
      M =
        (f || (k && v === "end")) &&
        w.jsx(uh, {
          className: $.endIcon,
          ownerState: p,
          children:
            f ||
            w.jsx(fs, { className: $.loadingIconPlaceholder, ownerState: p }),
        }),
      E = n || "",
      D =
        typeof k == "boolean"
          ? w.jsx("span", {
              className: $.loadingWrapper,
              style: { display: "contents" },
              children:
                k &&
                w.jsx(dh, {
                  className: $.loadingIndicator,
                  ownerState: p,
                  children: L,
                }),
            })
          : null;
    return w.jsxs(lh, {
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
      children: [T, v !== "end" && D, s, v === "end" && D, M],
    });
  });
function ph(e) {
  return se("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const fh = (e) => {
    const { classes: t, checked: r, disabled: o, edge: n } = e,
      a = {
        root: ["root", r && "checked", o && "disabled", n && `edge${N(n)}`],
        input: ["input"],
      };
    return le(a, ph, t);
  },
  mh = F(dr, { name: "MuiSwitchBase" })({
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
  gh = F("input", { name: "MuiSwitchBase", shouldForwardProp: rt })({
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
  hh = m.forwardRef(function (t, r) {
    const {
        autoFocus: o,
        checked: n,
        checkedIcon: a,
        defaultChecked: i,
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
        default: !!i,
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
    const D = C === "checkbox" || C === "radio",
      B = { ...t, checked: O, disabled: E, disableFocusRipple: l, edge: c },
      j = fh(B),
      G = { slots: P, slotProps: { input: y, ...I } },
      [H, X] = fe("root", {
        ref: r,
        elementType: mh,
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
        elementType: gh,
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
          defaultChecked: i,
          disabled: E,
          id: D ? h : void 0,
          name: f,
          readOnly: k,
          required: S,
          tabIndex: v,
          type: C,
          ...(C === "checkbox" && R === void 0 ? {} : { value: R }),
        },
      });
    return w.jsxs(H, { ...X, children: [w.jsx(ee, { ...ye }), O ? a : u] });
  });
function ms(e) {
  return e.substring(2).toLowerCase();
}
function yh(e, t) {
  return (
    t.documentElement.clientWidth < e.clientX ||
    t.documentElement.clientHeight < e.clientY
  );
}
function vh(e) {
  const {
      children: t,
      disableReactTree: r = !1,
      mouseEvent: o = "onClick",
      onClickAway: n,
      touchEvent: a = "onTouchEnd",
    } = e,
    i = m.useRef(!1),
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
      if (!l.current || !s.current || ("clientX" in f && yh(f, b))) return;
      if (i.current) {
        i.current = !1;
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
    a !== !1 && (d[a] = y(a)),
    m.useEffect(() => {
      if (a !== !1) {
        const f = ms(a),
          g = Ye(s.current),
          b = () => {
            i.current = !0;
          };
        return (
          g.addEventListener(f, h),
          g.addEventListener("touchmove", b),
          () => {
            g.removeEventListener(f, h), g.removeEventListener("touchmove", b);
          }
        );
      }
    }, [h, a]),
    o !== !1 && (d[o] = y(o)),
    m.useEffect(() => {
      if (o !== !1) {
        const f = ms(o),
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
const ga = typeof Fa({}) == "function",
  bh = (e, t) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(t && !e.vars && { colorScheme: e.palette.mode }),
  }),
  xh = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    "@media print": { backgroundColor: (e.vars || e).palette.common.white },
  }),
  Xl = (e, t = !1) => {
    var a, i;
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
      html: bh(e, t),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: e.typography.fontWeightBold },
      body: {
        margin: 0,
        ...xh(e),
        "&::backdrop": {
          backgroundColor: (e.vars || e).palette.background.default,
        },
      },
      ...r,
    };
    const n =
      (i = (a = e.components) == null ? void 0 : a.MuiCssBaseline) == null
        ? void 0
        : i.styleOverrides;
    return n && (o = [o, n]), o;
  },
  Xo = "mui-ecs",
  Sh = (e) => {
    const t = Xl(e, !1),
      r = Array.isArray(t) ? t[0] : t;
    return (
      !e.vars &&
        r &&
        (r.html[`:root:has(${Xo})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([o, n]) => {
          var i, s;
          const a = e.getColorSchemeSelector(o);
          a.startsWith("@")
            ? (r[a] = {
                [`:root:not(:has(.${Xo}))`]: {
                  colorScheme: (i = n.palette) == null ? void 0 : i.mode,
                },
              })
            : (r[a.replace(/\s*&/, "")] = {
                [`&:not(:has(.${Xo}))`]: {
                  colorScheme: (s = n.palette) == null ? void 0 : s.mode,
                },
              });
        }),
      t
    );
  },
  Ch = Fa(
    ga
      ? ({ theme: e, enableColorScheme: t }) => Xl(e, t)
      : ({ theme: e }) => Sh(e),
  );
function $0(e) {
  const t = ue({ props: e, name: "MuiCssBaseline" }),
    { children: r, enableColorScheme: o = !1 } = t;
  return w.jsxs(m.Fragment, {
    children: [
      ga && w.jsx(Ch, { enableColorScheme: o }),
      !ga && !o && w.jsx("span", { className: Xo, style: { display: "none" } }),
      r,
    ],
  });
}
function Jl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function wh(e) {
  const t = Ye(e);
  return t.body === e
    ? Ct(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function lo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function gs(e) {
  return parseFloat(Ct(e).getComputedStyle(e).paddingRight) || 0;
}
function kh(e) {
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
function hs(e, t, r, o, n) {
  const a = [t, r, ...o];
  [].forEach.call(e.children, (i) => {
    const s = !a.includes(i),
      l = !kh(i);
    s && l && lo(i, n);
  });
}
function Un(e, t) {
  let r = -1;
  return e.some((o, n) => (t(o) ? ((r = n), !0) : !1)), r;
}
function Rh(e, t) {
  const r = [],
    o = e.container;
  if (!t.disableScrollLock) {
    if (wh(o)) {
      const i = Jl(Ct(o));
      r.push({ value: o.style.paddingRight, property: "padding-right", el: o }),
        (o.style.paddingRight = `${gs(o) + i}px`);
      const s = Ye(o).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${gs(l) + i}px`);
      });
    }
    let a;
    if (o.parentNode instanceof DocumentFragment) a = Ye(o).body;
    else {
      const i = o.parentElement,
        s = Ct(o);
      a =
        (i == null ? void 0 : i.nodeName) === "HTML" &&
        s.getComputedStyle(i).overflowY === "scroll"
          ? i
          : o;
    }
    r.push(
      { value: a.style.overflow, property: "overflow", el: a },
      { value: a.style.overflowX, property: "overflow-x", el: a },
      { value: a.style.overflowY, property: "overflow-y", el: a },
    ),
      (a.style.overflow = "hidden");
  }
  return () => {
    r.forEach(({ value: a, el: i, property: s }) => {
      a ? i.style.setProperty(s, a) : i.style.removeProperty(s);
    });
  };
}
function Th(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute("aria-hidden") === "true" && t.push(r);
    }),
    t
  );
}
class $h {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, r) {
    let o = this.modals.indexOf(t);
    if (o !== -1) return o;
    (o = this.modals.length),
      this.modals.push(t),
      t.modalRef && lo(t.modalRef, !1);
    const n = Th(r);
    hs(r, t.mount, t.modalRef, n, !0);
    const a = Un(this.containers, (i) => i.container === r);
    return a !== -1
      ? (this.containers[a].modals.push(t), o)
      : (this.containers.push({
          modals: [t],
          container: r,
          restore: null,
          hiddenSiblings: n,
        }),
        o);
  }
  mount(t, r) {
    const o = Un(this.containers, (a) => a.modals.includes(t)),
      n = this.containers[o];
    n.restore || (n.restore = Rh(n, r));
  }
  remove(t, r = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1) return o;
    const n = Un(this.containers, (i) => i.modals.includes(t)),
      a = this.containers[n];
    if (
      (a.modals.splice(a.modals.indexOf(t), 1),
      this.modals.splice(o, 1),
      a.modals.length === 0)
    )
      a.restore && a.restore(),
        t.modalRef && lo(t.modalRef, r),
        hs(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1),
        this.containers.splice(n, 1);
    else {
      const i = a.modals[a.modals.length - 1];
      i.modalRef && lo(i.modalRef, !1);
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
const Ph = [
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
function Eh(e) {
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
function Ih(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function Mh(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    Ih(e)
  );
}
function Ah(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(Ph)).forEach((o, n) => {
      const a = Eh(o);
      a === -1 ||
        !Mh(o) ||
        (a === 0
          ? t.push(o)
          : r.push({ documentOrder: n, tabIndex: a, node: o }));
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
function Oh() {
  return !0;
}
function Lh(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: o = !1,
      disableRestoreFocus: n = !1,
      getTabbable: a = Ah,
      isEnabled: i = Oh,
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
          if (((b.current = P), o || !i() || P.key !== "Tab")) return;
          no(S) === f.current &&
            P.shiftKey &&
            ((l.current = !0), u.current && u.current.focus());
        },
        C = () => {
          var O, L;
          const P = f.current;
          if (P === null) return;
          const I = no(S);
          if (!S.hasFocus() || !i() || l.current) {
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
            ((I === c.current || I === u.current) && (A = a(f.current)),
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
    }, [r, o, n, i, s, a]);
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
function Bh(e) {
  return typeof e == "function" ? e() : e;
}
function Nh(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ys = () => {},
  Bo = new $h();
function zh(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: o = !1,
      closeAfterTransition: n = !1,
      onTransitionEnter: a,
      onTransitionExited: i,
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
    x = Nh(s);
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
      const M = Bh(t) || S().body;
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
      var D;
      (D = M.onKeyDown) == null || D.call(M, E),
        !(E.key !== "Escape" || E.which === 229 || !P()) &&
          (r || (E.stopPropagation(), l && l(E, "escapeKeyDown")));
    },
    L = (M) => (E) => {
      var D;
      (D = M.onClick) == null || D.call(M, E),
        E.target === E.currentTarget && l && l(E, "backdropClick");
    };
  return {
    getRootProps: (M = {}) => {
      const E = lr(e);
      delete E.onTransitionEnter, delete E.onTransitionExited;
      const D = { ...E, ...M };
      return { role: "presentation", ...D, onKeyDown: O(D), ref: f };
    },
    getBackdropProps: (M = {}) => {
      const E = M;
      return { "aria-hidden": !0, ...E, onClick: L(E), open: c };
    },
    getTransitionProps: () => {
      const M = () => {
          b(!1), a && a();
        },
        E = () => {
          b(!0), i && i(), n && A();
        };
      return {
        onEnter: Hi(M, (s == null ? void 0 : s.props.onEnter) ?? ys),
        onExited: Hi(E, (s == null ? void 0 : s.props.onExited) ?? ys),
      };
    },
    rootRef: f,
    portalRef: I,
    isTopModal: P,
    exited: g,
    hasTransition: x,
  };
}
function jh(e) {
  return se("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const Fh = (e) => {
    const { open: t, exited: r, classes: o } = e;
    return le(
      { root: ["root", !t && r && "hidden"], backdrop: ["backdrop"] },
      jh,
      o,
    );
  },
  Dh = F("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.open && r.exited && t.hidden];
    },
  })(
    ne(({ theme: e }) => ({
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
  Wh = F(ql, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }),
  Qa = m.forwardRef(function (t, r) {
    const o = ue({ name: "MuiModal", props: t }),
      {
        BackdropComponent: n = Wh,
        BackdropProps: a,
        classes: i,
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
        getTransitionProps: D,
        portalRef: B,
        isTopModal: j,
        exited: G,
        hasTransition: H,
      } = zh({ ...T, rootRef: r }),
      X = { ...T, exited: G },
      ee = Fh(X),
      ye = {};
    if ((c.props.tabIndex === void 0 && (ye.tabIndex = "-1"), H)) {
      const { onEnter: Z, onExited: de } = D();
      (ye.onEnter = Z), (ye.onExited = de);
    }
    const J = {
        slots: { root: y.Root, backdrop: y.Backdrop, ...L },
        slotProps: { ...d, ...O },
      },
      [_, te] = fe("root", {
        ref: r,
        elementType: Dh,
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
        ref: a == null ? void 0 : a.ref,
        elementType: n,
        externalForwardedProps: J,
        shouldForwardComponentProp: !0,
        additionalProps: a,
        getSlotProps: (Z) =>
          E({
            ...Z,
            onClick: (de) => {
              Z != null && Z.onClick && Z.onClick(de);
            },
          }),
        className: U(
          a == null ? void 0 : a.className,
          ee == null ? void 0 : ee.backdrop,
        ),
        ownerState: X,
      });
    return !C && !A && (!H || G)
      ? null
      : w.jsx(Gl, {
          ref: B,
          container: u,
          disablePortal: x,
          children: w.jsxs(_, {
            ...te,
            children: [
              !v && n ? w.jsx(me, { ...ve }) : null,
              w.jsx(Lh, {
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
function Hh(e) {
  return se("MuiDialog", e);
}
const _n = ce("MuiDialog", [
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
  Ql = m.createContext({}),
  Vh = F(ql, { name: "MuiDialog", slot: "Backdrop" })({ zIndex: -1 }),
  Uh = (e) => {
    const {
        classes: t,
        scroll: r,
        maxWidth: o,
        fullWidth: n,
        fullScreen: a,
      } = e,
      i = {
        root: ["root"],
        backdrop: ["backdrop"],
        container: ["container", `scroll${N(r)}`],
        paper: [
          "paper",
          `paperScroll${N(r)}`,
          `paperWidth${N(String(o))}`,
          n && "paperFullWidth",
          a && "paperFullScreen",
        ],
      };
    return le(i, Hh, t);
  },
  _h = F(Qa, { name: "MuiDialog", slot: "Root" })({
    "@media print": { position: "absolute !important" },
  }),
  Gh = F("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.container, t[`scroll${N(r.scroll)}`]];
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
  Kh = F(gr, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`scrollPaper${N(r.scroll)}`],
        t[`paperWidth${N(String(r.maxWidth))}`],
        r.fullWidth && t.paperFullWidth,
        r.fullScreen && t.paperFullScreen,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
  P0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDialog" }),
      n = Wt(),
      a = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": i,
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
        PaperComponent: v = gr,
        PaperProps: C = {},
        scroll: R = "paper",
        slots: P = {},
        slotProps: I = {},
        TransitionComponent: A = ma,
        transitionDuration: O = a,
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
      T = Uh($),
      M = m.useRef(),
      E = (oe) => {
        M.current = oe.target === oe.currentTarget;
      },
      D = (oe) => {
        x && x(oe),
          M.current && ((M.current = null), k && k(oe, "backdropClick"));
      },
      B = mr(s),
      j = m.useMemo(() => ({ titleId: B }), [B]),
      G = { transition: A, ...P },
      H = { transition: L, paper: C, backdrop: u, ...I },
      X = { slots: G, slotProps: H },
      [ee, ye] = fe("root", {
        elementType: _h,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: U(T.root, y),
        ref: r,
      }),
      [J, _] = fe("backdrop", {
        elementType: Vh,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: T.backdrop,
      }),
      [te, me] = fe("paper", {
        elementType: Kh,
        shouldForwardComponentProp: !0,
        externalForwardedProps: X,
        ownerState: $,
        className: U(T.paper, C.className),
      }),
      [ve, Z] = fe("container", {
        elementType: Gh,
        externalForwardedProps: X,
        ownerState: $,
        className: T.container,
      }),
      [de, ae] = fe("transition", {
        elementType: ma,
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
      onClick: D,
      ...ye,
      ...p,
      children: w.jsx(de, {
        ...ae,
        children: w.jsx(ve, {
          onMouseDown: E,
          ...Z,
          children: w.jsx(te, {
            as: v,
            elevation: 24,
            role: "dialog",
            "aria-describedby": i,
            "aria-labelledby": B,
            "aria-modal": l,
            ...me,
            children: w.jsx(Ql.Provider, { value: j, children: h }),
          }),
        }),
      }),
    });
  });
function qh(e) {
  return se("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const Yh = (e) => {
    const { classes: t, disableSpacing: r } = e;
    return le({ root: ["root", !r && "spacing"] }, qh, t);
  },
  Xh = F("div", {
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
  E0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDialogActions" }),
      { className: n, disableSpacing: a = !1, ...i } = o,
      s = { ...o, disableSpacing: a },
      l = Yh(s);
    return w.jsx(Xh, { className: U(l.root, n), ownerState: s, ref: r, ...i });
  });
function Jh(e) {
  return se("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function Qh(e) {
  return se("MuiDialogTitle", e);
}
const Zh = ce("MuiDialogTitle", ["root"]),
  ey = (e) => {
    const { classes: t, dividers: r } = e;
    return le({ root: ["root", r && "dividers"] }, Jh, t);
  },
  ty = F("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.dividers && t.dividers];
    },
  })(
    ne(({ theme: e }) => ({
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
          style: { [`.${Zh.root} + &`]: { paddingTop: 0 } },
        },
      ],
    })),
  ),
  I0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDialogContent" }),
      { className: n, dividers: a = !1, ...i } = o,
      s = { ...o, dividers: a },
      l = ey(s);
    return w.jsx(ty, { className: U(l.root, n), ownerState: s, ref: r, ...i });
  }),
  ry = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, Qh, t);
  },
  oy = F(Tr, { name: "MuiDialogTitle", slot: "Root" })({
    padding: "16px 24px",
    flex: "0 0 auto",
  }),
  M0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDialogTitle" }),
      { className: n, id: a, ...i } = o,
      s = o,
      l = ry(s),
      { titleId: c = a } = m.useContext(Ql);
    return w.jsx(oy, {
      component: "h2",
      className: U(l.root, n),
      ownerState: s,
      ref: r,
      variant: "h6",
      id: a ?? c,
      ...i,
    });
  });
function ny(e) {
  return se("MuiDivider", e);
}
const vs = ce("MuiDivider", [
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
  ay = (e) => {
    const {
      absolute: t,
      children: r,
      classes: o,
      flexItem: n,
      light: a,
      orientation: i,
      textAlign: s,
      variant: l,
    } = e;
    return le(
      {
        root: [
          "root",
          t && "absolute",
          l,
          a && "light",
          i === "vertical" && "vertical",
          n && "flexItem",
          r && "withChildren",
          r && i === "vertical" && "withChildrenVertical",
          s === "right" && i !== "vertical" && "textAlignRight",
          s === "left" && i !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", i === "vertical" && "wrapperVertical"],
      },
      ny,
      o,
    );
  },
  iy = F("div", {
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
    ne(({ theme: e }) => ({
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
  sy = F("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.wrapper, r.orientation === "vertical" && t.wrapperVertical];
    },
  })(
    ne(({ theme: e }) => ({
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
  bs = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDivider" }),
      {
        absolute: n = !1,
        children: a,
        className: i,
        orientation: s = "horizontal",
        component: l = a || s === "vertical" ? "div" : "hr",
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
      b = ay(g);
    return w.jsx(iy, {
      as: l,
      className: U(b.root, i),
      role: h,
      ref: r,
      ownerState: g,
      "aria-orientation":
        h === "separator" && (l !== "hr" || s === "vertical") ? s : void 0,
      ...f,
      children: a
        ? w.jsx(sy, { className: b.wrapper, ownerState: g, children: a })
        : null,
    });
  });
bs && (bs.muiSkipListHighlight = !0);
function ly(e, t, r) {
  const o = t.getBoundingClientRect(),
    n = r && r.getBoundingClientRect(),
    a = Ct(t);
  let i;
  if (t.fakeTransform) i = t.fakeTransform;
  else {
    const c = a.getComputedStyle(t);
    i =
      c.getPropertyValue("-webkit-transform") ||
      c.getPropertyValue("transform");
  }
  let s = 0,
    l = 0;
  if (i && i !== "none" && typeof i == "string") {
    const c = i.split("(")[1].split(")")[0].split(",");
    (s = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === "left"
    ? n
      ? `translateX(${n.right + s - o.left}px)`
      : `translateX(${a.innerWidth + s - o.left}px)`
    : e === "right"
      ? n
        ? `translateX(-${o.right - n.left - s}px)`
        : `translateX(-${o.left + o.width - s}px)`
      : e === "up"
        ? n
          ? `translateY(${n.bottom + l - o.top}px)`
          : `translateY(${a.innerHeight + l - o.top}px)`
        : n
          ? `translateY(-${o.top - n.top + o.height - l}px)`
          : `translateY(-${o.top + o.height - l}px)`;
}
function cy(e) {
  return typeof e == "function" ? e() : e;
}
function No(e, t, r) {
  const o = cy(r),
    n = ly(e, t, o);
  n && ((t.style.webkitTransform = n), (t.style.transform = n));
}
const uy = m.forwardRef(function (t, r) {
  const o = Wt(),
    n = {
      enter: o.transitions.easing.easeOut,
      exit: o.transitions.easing.sharp,
    },
    a = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen,
    },
    {
      addEndListener: i,
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
      timeout: v = a,
      TransitionComponent: C = wt,
      ...R
    } = t,
    P = m.useRef(null),
    I = He(Qt(l), P, r),
    A = (B) => (j) => {
      B && (j === void 0 ? B(P.current) : B(P.current, j));
    },
    O = A((B, j) => {
      No(u, B, c), Va(B), d && d(B, j);
    }),
    L = A((B, j) => {
      const G = Ar({ timeout: v, style: S, easing: h }, { mode: "enter" });
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
      const j = Ar({ timeout: v, style: S, easing: h }, { mode: "exit" });
      (B.style.webkitTransition = o.transitions.create("-webkit-transform", j)),
        (B.style.transition = o.transitions.create("transform", j)),
        No(u, B, c),
        b && b(B);
    }),
    M = A((B) => {
      (B.style.webkitTransition = ""), (B.style.transition = ""), x && x(B);
    }),
    E = (B) => {
      i && i(P.current, B);
    },
    D = m.useCallback(() => {
      P.current && No(u, P.current, c);
    }, [u, c]);
  return (
    m.useEffect(() => {
      if (y || u === "down" || u === "right") return;
      const B = Da(() => {
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
      y || D();
    }, [y, D]),
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
function dy(e) {
  return se("MuiDrawer", e);
}
ce("MuiDrawer", [
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
const Zl = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === "permanent" || r.variant === "persistent") && t.docked,
      r.variant === "temporary" && t.modal,
    ];
  },
  py = (e) => {
    const { classes: t, anchor: r, variant: o } = e,
      n = {
        root: ["root", `anchor${N(r)}`],
        docked: [(o === "permanent" || o === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${N(r)}`,
          o !== "temporary" && `paperAnchorDocked${N(r)}`,
        ],
      };
    return le(n, dy, t);
  },
  fy = F(Qa, { name: "MuiDrawer", slot: "Root", overridesResolver: Zl })(
    ne(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })),
  ),
  my = F("div", {
    shouldForwardProp: rt,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Zl,
  })({ flex: "0 0 auto" }),
  gy = F(gr, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`paperAnchor${N(r.anchor)}`],
        r.variant !== "temporary" && t[`paperAnchorDocked${N(r.anchor)}`],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
  ec = { left: "right", right: "left", top: "down", bottom: "up" };
function hy(e) {
  return ["left", "right"].includes(e);
}
function yy({ direction: e }, t) {
  return e === "rtl" && hy(t) ? ec[t] : t;
}
const A0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiDrawer" }),
      n = Wt(),
      a = Wr(),
      i = {
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
        transitionDuration: v = i,
        variant: C = "temporary",
        slots: R = {},
        slotProps: P = {},
        ...I
      } = o,
      A = m.useRef(!1);
    m.useEffect(() => {
      A.current = !0;
    }, []);
    const O = yy({ direction: a ? "rtl" : "ltr" }, s),
      p = { ...o, anchor: s, elevation: h, open: b, variant: C, ...I },
      $ = py(p),
      T = {
        slots: { transition: S, ...R },
        slotProps: {
          paper: x,
          transition: k,
          ...P,
          backdrop: El(P.backdrop || { ...l, ...d }, { transitionDuration: v }),
        },
      },
      [M, E] = fe("root", {
        ref: r,
        elementType: fy,
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
      [D, B] = fe("paper", {
        elementType: gy,
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
        elementType: my,
        ref: r,
        className: U($.root, $.docked, u),
        ownerState: p,
        externalForwardedProps: T,
        additionalProps: I,
      }),
      [H, X] = fe("transition", {
        elementType: uy,
        ownerState: p,
        externalForwardedProps: T,
        additionalProps: {
          in: b,
          direction: ec[O],
          timeout: v,
          appear: A.current,
        },
      }),
      ee = w.jsx(D, { ...B, children: c });
    if (C === "permanent") return w.jsx(j, { ...G, children: ee });
    const ye = w.jsx(H, { ...X, children: ee });
    return C === "persistent"
      ? w.jsx(j, { ...G, children: ye })
      : w.jsx(M, { ...E, children: ye });
  }),
  vy = (e) => {
    const {
        classes: t,
        disableUnderline: r,
        startAdornment: o,
        endAdornment: n,
        size: a,
        hiddenLabel: i,
        multiline: s,
      } = e,
      l = {
        root: [
          "root",
          !r && "underline",
          o && "adornedStart",
          n && "adornedEnd",
          a === "small" && `size${N(a)}`,
          i && "hiddenLabel",
          s && "multiline",
        ],
        input: ["input"],
      },
      c = le(l, Vg, t);
    return { ...t, ...c };
  },
  by = F(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...Pn(e, t), !r.disableUnderline && t.underline];
    },
  })(
    ne(({ theme: e }) => {
      const t = e.palette.mode === "light",
        r = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        n = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableUnderline,
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
            .map(([i]) => {
              var s;
              return {
                props: { disableUnderline: !1, color: i },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${((s = (e.vars || e).palette[i])) == null ? void 0 : s.main}`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: i }) => i.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: i }) => i.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: i, size: s }) => i.multiline && s === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: i }) => i.multiline && i.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: i }) =>
              i.multiline && i.hiddenLabel && i.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  xy = F(Mn, { name: "MuiFilledInput", slot: "Input", overridesResolver: En })(
    ne(({ theme: e }) => ({
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
  Za = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: n = !1,
        components: a = {},
        componentsProps: i,
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
      b = vy(o),
      x = { root: { ownerState: g }, input: { ownerState: g } },
      k = (h ?? i) ? Xe(x, h ?? i) : x,
      S = y.root ?? a.Root ?? by,
      v = y.input ?? a.Input ?? xy;
    return w.jsx(Ja, {
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
Za.muiName = "Input";
function Sy(e) {
  return se("MuiFormControl", e);
}
ce("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const Cy = (e) => {
    const { classes: t, margin: r, fullWidth: o } = e,
      n = { root: ["root", r !== "none" && `margin${N(r)}`, o && "fullWidth"] };
    return le(n, Sy, t);
  },
  wy = F("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`margin${N(r.margin)}`], r.fullWidth && t.fullWidth];
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
  ky = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiFormControl" }),
      {
        children: n,
        className: a,
        color: i = "primary",
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
        color: i,
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
      S = Cy(k),
      [v, C] = m.useState(() => {
        let M = !1;
        return (
          n &&
            m.Children.forEach(n, (E) => {
              if (!qo(E, ["Input", "Select"])) return;
              const D = qo(E, ["Select"]) ? E.props.input : E;
              D && jg(D.props) && (M = !0);
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
          color: i,
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
        [v, i, l, c, R, O, h, y, L, $, p, f, g, b],
      );
    return w.jsx($n.Provider, {
      value: T,
      children: w.jsx(wy, {
        as: s,
        ownerState: k,
        className: U(S.root, a),
        ref: r,
        ...x,
        children: n,
      }),
    });
  });
function Ry(e) {
  return se("MuiFormHelperText", e);
}
const xs = ce("MuiFormHelperText", [
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
var Ss;
const Ty = (e) => {
    const {
        classes: t,
        contained: r,
        size: o,
        disabled: n,
        error: a,
        filled: i,
        focused: s,
        required: l,
      } = e,
      c = {
        root: [
          "root",
          n && "disabled",
          a && "error",
          o && `size${N(o)}`,
          r && "contained",
          s && "focused",
          i && "filled",
          l && "required",
        ],
      };
    return le(c, Ry, t);
  },
  $y = F("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.size && t[`size${N(r.size)}`],
        r.contained && t.contained,
        r.filled && t.filled,
      ];
    },
  })(
    ne(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${xs.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${xs.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    })),
  ),
  Py = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiFormHelperText" }),
      {
        children: n,
        className: a,
        component: i = "p",
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
        component: i,
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
    const k = Ty(x);
    return w.jsx($y, {
      as: i,
      className: U(k.root, a),
      ref: r,
      ...f,
      ownerState: x,
      children:
        n === " "
          ? Ss ||
            (Ss = w.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : n,
    });
  });
function Ey(e) {
  return se("MuiFormLabel", e);
}
const co = ce("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Iy = (e) => {
    const {
        classes: t,
        color: r,
        focused: o,
        disabled: n,
        error: a,
        filled: i,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          `color${N(r)}`,
          n && "disabled",
          a && "error",
          i && "filled",
          o && "focused",
          s && "required",
        ],
        asterisk: ["asterisk", a && "error"],
      };
    return le(l, Ey, t);
  },
  My = F("label", {
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
    ne(({ theme: e }) => ({
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
  Ay = F("span", { name: "MuiFormLabel", slot: "Asterisk" })(
    ne(({ theme: e }) => ({
      [`&.${co.error}`]: { color: (e.vars || e).palette.error.main },
    })),
  ),
  Oy = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiFormLabel" }),
      {
        children: n,
        className: a,
        color: i,
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
      x = Iy(b);
    return w.jsxs(My, {
      as: s,
      ownerState: b,
      className: U(x.root, a),
      ref: r,
      ...d,
      children: [
        n,
        g.required &&
          w.jsxs(Ay, {
            ownerState: b,
            "aria-hidden": !0,
            className: x.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  O0 = mp({
    createStyledComponent: F("div", {
      name: "MuiGrid",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [t.root, r.container && t.container];
      },
    }),
    componentName: "MuiGrid",
    useThemeProps: (e) => ue({ props: e, name: "MuiGrid" }),
    useTheme: Wt,
  });
function ha(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ly = {
    entering: { opacity: 1, transform: ha(1) },
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
        children: a,
        easing: i,
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
      R = He(C, Qt(a), r),
      P = (M) => (E) => {
        if (M) {
          const D = C.current;
          E === void 0 ? M(D) : M(D, E);
        }
      },
      I = P(u),
      A = P((M, E) => {
        Va(M);
        const {
          duration: D,
          delay: B,
          easing: j,
        } = Ar({ style: f, timeout: g, easing: i }, { mode: "enter" });
        let G;
        g === "auto"
          ? ((G = v.transitions.getAutoHeightDuration(M.clientHeight)),
            (S.current = G))
          : (G = D),
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
          delay: D,
          easing: B,
        } = Ar({ style: f, timeout: g, easing: i }, { mode: "exit" });
        let j;
        g === "auto"
          ? ((j = v.transitions.getAutoHeightDuration(M.clientHeight)),
            (S.current = j))
          : (j = E),
          (M.style.transition = [
            v.transitions.create("opacity", { duration: j, delay: D }),
            v.transitions.create("transform", {
              duration: Gn ? j : j * 0.666,
              delay: Gn ? D : D || j * 0.333,
              easing: B,
            }),
          ].join(",")),
          (M.style.opacity = 0),
          (M.style.transform = ha(0.75)),
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
      children: (M, { ownerState: E, ...D }) =>
        m.cloneElement(a, {
          style: {
            opacity: 0,
            transform: ha(0.75),
            visibility: M === "exited" && !s ? "hidden" : void 0,
            ...Ly[M],
            ...f,
            ...a.props.style,
          },
          ref: R,
          ...D,
        }),
    });
  });
bo && (bo.muiSupportAuto = !0);
const By = (e) => {
    const { classes: t, disableUnderline: r } = e,
      n = le({ root: ["root", !r && "underline"], input: ["input"] }, Wg, t);
    return { ...t, ...n };
  },
  Ny = F(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...Pn(e, t), !r.disableUnderline && t.underline];
    },
  })(
    ne(({ theme: e }) => {
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
  zy = F(Mn, { name: "MuiInput", slot: "Input", overridesResolver: En })({}),
  ei = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiInput" }),
      {
        disableUnderline: n = !1,
        components: a = {},
        componentsProps: i,
        fullWidth: s = !1,
        inputComponent: l = "input",
        multiline: c = !1,
        slotProps: u,
        slots: h = {},
        type: y = "text",
        ...d
      } = o,
      f = By(o),
      b = { root: { ownerState: { disableUnderline: n } } },
      x = (u ?? i) ? Xe(u ?? i, b) : b,
      k = h.root ?? a.Root ?? Ny,
      S = h.input ?? a.Input ?? zy;
    return w.jsx(Ja, {
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
ei.muiName = "Input";
function jy(e) {
  return se("MuiInputAdornment", e);
}
const Cs = ce("MuiInputAdornment", [
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
var ws;
const Fy = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      t[`position${N(r.position)}`],
      r.disablePointerEvents === !0 && t.disablePointerEvents,
      t[r.variant],
    ];
  },
  Dy = (e) => {
    const {
        classes: t,
        disablePointerEvents: r,
        hiddenLabel: o,
        position: n,
        size: a,
        variant: i,
      } = e,
      s = {
        root: [
          "root",
          r && "disablePointerEvents",
          n && `position${N(n)}`,
          i,
          o && "hiddenLabel",
          a && `size${N(a)}`,
        ],
      };
    return le(s, jy, t);
  },
  Wy = F("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Fy,
  })(
    ne(({ theme: e }) => ({
      display: "flex",
      maxHeight: "2em",
      alignItems: "center",
      whiteSpace: "nowrap",
      color: (e.vars || e).palette.action.active,
      variants: [
        {
          props: { variant: "filled" },
          style: {
            [`&.${Cs.positionStart}&:not(.${Cs.hiddenLabel})`]: {
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
  L0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiInputAdornment" }),
      {
        children: n,
        className: a,
        component: i = "div",
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
      g = Dy(f);
    return w.jsx($n.Provider, {
      value: null,
      children: w.jsx(Wy, {
        as: i,
        ownerState: f,
        className: U(g.root, a),
        ref: r,
        ...h,
        children:
          typeof n == "string" && !l
            ? w.jsx(Tr, { color: "textSecondary", children: n })
            : w.jsxs(m.Fragment, {
                children: [
                  c === "start"
                    ? ws ||
                      (ws = w.jsx("span", {
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
function Hy(e) {
  return se("MuiInputLabel", e);
}
ce("MuiInputLabel", [
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
const Vy = (e) => {
    const {
        classes: t,
        formControl: r,
        size: o,
        shrink: n,
        disableAnimation: a,
        variant: i,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          r && "formControl",
          !a && "animated",
          n && "shrink",
          o && o !== "medium" && `size${N(o)}`,
          i,
        ],
        asterisk: [s && "asterisk"],
      },
      c = le(l, Hy, t);
    return { ...t, ...c };
  },
  Uy = F(Oy, {
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
    ne(({ theme: e }) => ({
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
  _y = m.forwardRef(function (t, r) {
    const o = ue({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: n = !1,
        margin: a,
        shrink: i,
        variant: s,
        className: l,
        ...c
      } = o,
      u = Zt();
    let h = i;
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
      f = Vy(d);
    return w.jsx(Uy, {
      "data-shrink": h,
      ref: r,
      className: U(f.root, l),
      ...c,
      ownerState: d,
      classes: f,
    });
  });
function Gy(e) {
  return se("MuiLinearProgress", e);
}
ce("MuiLinearProgress", [
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
const ya = 4,
  va = Xt`
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
  Ky =
    typeof va != "string"
      ? Dr`
        animation: ${va} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `
      : null,
  ba = Xt`
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
  qy =
    typeof ba != "string"
      ? Dr`
        animation: ${ba} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `
      : null,
  xa = Xt`
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
  Yy =
    typeof xa != "string"
      ? Dr`
        animation: ${xa} 3s infinite linear;
      `
      : null,
  Xy = (e) => {
    const { classes: t, variant: r, color: o } = e,
      n = {
        root: ["root", `color${N(o)}`, r],
        dashed: ["dashed", `dashedColor${N(o)}`],
        bar1: [
          "bar",
          "bar1",
          `barColor${N(o)}`,
          (r === "indeterminate" || r === "query") && "bar1Indeterminate",
          r === "determinate" && "bar1Determinate",
          r === "buffer" && "bar1Buffer",
        ],
        bar2: [
          "bar",
          "bar2",
          r !== "buffer" && `barColor${N(o)}`,
          r === "buffer" && `color${N(o)}`,
          (r === "indeterminate" || r === "query") && "bar2Indeterminate",
          r === "buffer" && "bar2Buffer",
        ],
      };
    return le(n, Gy, t);
  },
  ti = (e, t) =>
    e.vars
      ? e.vars.palette.LinearProgress[`${t}Bg`]
      : e.palette.mode === "light"
        ? e.lighten(e.palette[t].main, 0.62)
        : e.darken(e.palette[t].main, 0.5),
  Jy = F("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`color${N(r.color)}`], t[r.variant]];
    },
  })(
    ne(({ theme: e }) => ({
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
            style: { backgroundColor: ti(e, t) },
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
  Qy = F("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.dashed, t[`dashedColor${N(r.color)}`]];
    },
  })(
    ne(({ theme: e }) => ({
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
            const r = ti(e, t);
            return {
              props: { color: t },
              style: {
                backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,
              },
            };
          }),
      ],
    })),
    Yy || { animation: `${xa} 3s infinite linear` },
  ),
  Zy = F("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${N(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") &&
          t.bar1Indeterminate,
        r.variant === "determinate" && t.bar1Determinate,
        r.variant === "buffer" && t.bar1Buffer,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
          style: { transition: `transform .${ya}s linear` },
        },
        {
          props: { variant: "buffer" },
          style: { zIndex: 1, transition: `transform .${ya}s linear` },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" || t.variant === "query",
          style: Ky || {
            animation: `${va} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
          },
        },
      ],
    })),
  ),
  ev = F("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${N(r.color)}`],
        (r.variant === "indeterminate" || r.variant === "query") &&
          t.bar2Indeterminate,
        r.variant === "buffer" && t.bar2Buffer,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
              backgroundColor: ti(e, t),
              transition: `transform .${ya}s linear`,
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
          style: qy || {
            animation: `${ba} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`,
          },
        },
      ],
    })),
  ),
  B0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiLinearProgress" }),
      {
        className: n,
        color: a = "primary",
        value: i,
        valueBuffer: s,
        variant: l = "indeterminate",
        ...c
      } = o,
      u = { ...o, color: a, variant: l },
      h = Xy(u),
      y = Wr(),
      d = {},
      f = { bar1: {}, bar2: {} };
    if ((l === "determinate" || l === "buffer") && i !== void 0) {
      (d["aria-valuenow"] = Math.round(i)),
        (d["aria-valuemin"] = 0),
        (d["aria-valuemax"] = 100);
      let g = i - 100;
      y && (g = -g), (f.bar1.transform = `translateX(${g}%)`);
    }
    if (l === "buffer" && s !== void 0) {
      let g = (s || 0) - 100;
      y && (g = -g), (f.bar2.transform = `translateX(${g}%)`);
    }
    return w.jsxs(Jy, {
      className: U(h.root, n),
      ownerState: u,
      role: "progressbar",
      ...d,
      ref: r,
      ...c,
      children: [
        l === "buffer"
          ? w.jsx(Qy, { className: h.dashed, ownerState: u })
          : null,
        w.jsx(Zy, { className: h.bar1, ownerState: u, style: f.bar1 }),
        l === "determinate"
          ? null
          : w.jsx(ev, { className: h.bar2, ownerState: u, style: f.bar2 }),
      ],
    });
  }),
  fr = m.createContext({});
function tv(e) {
  return se("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const rv = (e) => {
    const { classes: t, disablePadding: r, dense: o, subheader: n } = e;
    return le(
      { root: ["root", !r && "padding", o && "dense", n && "subheader"] },
      tv,
      t,
    );
  },
  ov = F("ul", {
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
  nv = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiList" }),
      {
        children: n,
        className: a,
        component: i = "ul",
        dense: s = !1,
        disablePadding: l = !1,
        subheader: c,
        ...u
      } = o,
      h = m.useMemo(() => ({ dense: s }), [s]),
      y = { ...o, component: i, dense: s, disablePadding: l },
      d = rv(y);
    return w.jsx(fr.Provider, {
      value: h,
      children: w.jsxs(ov, {
        as: i,
        className: U(d.root, a),
        ref: r,
        ownerState: y,
        ...u,
        children: [c, n],
      }),
    });
  });
function av(e) {
  return se("MuiListItemButton", e);
}
const Xr = ce("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  iv = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === "flex-start" && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  sv = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: o,
        disabled: n,
        disableGutters: a,
        divider: i,
        selected: s,
      } = e,
      c = le(
        {
          root: [
            "root",
            o && "dense",
            !a && "gutters",
            i && "divider",
            n && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            s && "selected",
          ],
        },
        av,
        r,
      );
    return { ...r, ...c };
  },
  lv = F(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: iv,
  })(
    ne(({ theme: e }) => ({
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
  N0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: n = "center",
        autoFocus: a = !1,
        component: i = "div",
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
    it(() => {
      a && x.current && x.current.focus();
    }, [a]);
    const k = {
        ...o,
        alignItems: n,
        dense: b.dense,
        disableGutters: c,
        divider: u,
        selected: y,
      },
      S = sv(k),
      v = He(x, r);
    return w.jsx(fr.Provider, {
      value: b,
      children: w.jsx(lv, {
        ref: v,
        href: f.href || f.to,
        component: (f.href || f.to) && i === "div" ? "button" : i,
        focusVisibleClassName: U(S.focusVisible, h),
        ownerState: k,
        className: U(S.root, d),
        ...f,
        classes: S,
        children: s,
      }),
    });
  });
function cv(e) {
  return se("MuiListItemIcon", e);
}
const ks = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  uv = (e) => {
    const { alignItems: t, classes: r } = e;
    return le(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      cv,
      r,
    );
  },
  dv = F("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
    },
  })(
    ne(({ theme: e }) => ({
      minWidth: 56,
      color: (e.vars || e).palette.action.active,
      flexShrink: 0,
      display: "inline-flex",
      variants: [
        { props: { alignItems: "flex-start" }, style: { marginTop: 8 } },
      ],
    })),
  ),
  z0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiListItemIcon" }),
      { className: n, ...a } = o,
      i = m.useContext(fr),
      s = { ...o, alignItems: i.alignItems },
      l = uv(s);
    return w.jsx(dv, { className: U(l.root, n), ownerState: s, ref: r, ...a });
  });
function pv(e) {
  return se("MuiListItemText", e);
}
const $r = ce("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  fv = (e) => {
    const { classes: t, inset: r, primary: o, secondary: n, dense: a } = e;
    return le(
      {
        root: ["root", r && "inset", a && "dense", o && n && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      pv,
      t,
    );
  },
  mv = F("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${$r.primary}`]: t.primary },
        { [`& .${$r.secondary}`]: t.secondary },
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
    [`.${Xi.root}:where(& .${$r.primary}), .${Xi.root}:where(& .${$r.secondary})`]:
      { display: "block" },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  j0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiListItemText" }),
      {
        children: n,
        className: a,
        disableTypography: i = !1,
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
        disableTypography: i,
        inset: s,
        primary: !!b,
        secondary: !!x,
        dense: g,
      },
      S = fv(k),
      v = { slots: y, slotProps: { primary: c, secondary: h, ...d } },
      [C, R] = fe("root", {
        className: U(S.root, a),
        elementType: mv,
        externalForwardedProps: { ...v, ...f },
        ownerState: k,
        ref: r,
      }),
      [P, I] = fe("primary", {
        className: S.primary,
        elementType: Tr,
        externalForwardedProps: v,
        ownerState: k,
      }),
      [A, O] = fe("secondary", {
        className: S.secondary,
        elementType: Tr,
        externalForwardedProps: v,
        ownerState: k,
      });
    return (
      b != null &&
        b.type !== Tr &&
        !i &&
        (b = w.jsx(P, {
          variant: g ? "body2" : "body1",
          component: I != null && I.variant ? void 0 : "span",
          ...I,
          children: b,
        })),
      x != null &&
        x.type !== Tr &&
        !i &&
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
function Rs(e, t, r) {
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
function tc(e, t) {
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
function Jr(e, t, r, o, n, a) {
  let i = !1,
    s = n(e, t, t ? r : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (i) return !1;
      i = !0;
    }
    const l = o ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !tc(s, a) || l) s = n(e, s, r);
    else return s.focus(), !0;
  }
  return !1;
}
const gv = m.forwardRef(function (t, r) {
  const {
      actions: o,
      autoFocus: n = !1,
      autoFocusItem: a = !1,
      children: i,
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
  it(() => {
    n && d.current.focus();
  }, [n]),
    m.useImperativeHandle(
      o,
      () => ({
        adjustStyleForScrollbar: (S, { direction: v }) => {
          const C = !d.current.style.width;
          if (S.clientHeight < d.current.clientHeight && C) {
            const R = `${Jl(Ct(S))}px`;
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
      else if (C === "ArrowUp") S.preventDefault(), Jr(v, P, c, l, Rs);
      else if (C === "Home") S.preventDefault(), Jr(v, null, c, l, Kn);
      else if (C === "End") S.preventDefault(), Jr(v, null, c, l, Rs);
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
        const L = P && !I.repeating && tc(P, I);
        I.previousKeyMatched && (L || Jr(v, P, !1, l, Kn, I))
          ? S.preventDefault()
          : (I.previousKeyMatched = !1);
      }
      u && u(S);
    },
    b = He(d, r);
  let x = -1;
  m.Children.forEach(i, (S, v) => {
    if (!m.isValidElement(S)) {
      x === v && ((x += 1), x >= i.length && (x = -1));
      return;
    }
    S.props.disabled ||
      (((h === "selectedMenu" && S.props.selected) || x === -1) && (x = v)),
      x === v &&
        (S.props.disabled ||
          S.props.muiSkipListHighlight ||
          S.type.muiSkipListHighlight) &&
        ((x += 1), x >= i.length && (x = -1));
  });
  const k = m.Children.map(i, (S, v) => {
    if (v === x) {
      const C = {};
      return (
        a && (C.autoFocus = !0),
        S.props.tabIndex === void 0 && h === "selectedMenu" && (C.tabIndex = 0),
        m.cloneElement(S, C)
      );
    }
    return S;
  });
  return w.jsx(nv, {
    role: "menu",
    ref: b,
    className: s,
    onKeyDown: g,
    tabIndex: n ? 0 : -1,
    ...y,
    children: k,
  });
});
function hv(e) {
  return se("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Ts(e, t) {
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
function $s(e, t) {
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
function Ps(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function zo(e) {
  return typeof e == "function" ? e() : e;
}
const yv = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"], paper: ["paper"] }, hv, t);
  },
  vv = F(Qa, { name: "MuiPopover", slot: "Root" })({}),
  rc = F(gr, { name: "MuiPopover", slot: "Paper" })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  bv = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiPopover" }),
      {
        action: n,
        anchorEl: a,
        anchorOrigin: i = { vertical: "top", horizontal: "left" },
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
        anchorOrigin: i,
        anchorReference: l,
        elevation: y,
        marginThreshold: d,
        transformOrigin: k,
        TransitionComponent: S,
        transitionDuration: v,
        TransitionProps: C,
      },
      O = yv(A),
      L = m.useCallback(() => {
        if (l === "anchorPosition") return s;
        const Z = zo(a),
          ae = (
            Z && Z.nodeType === 1 ? Z : Ye(I.current).body
          ).getBoundingClientRect();
        return {
          top: ae.top + Ts(ae, i.vertical),
          left: ae.left + $s(ae, i.horizontal),
        };
      }, [a, i.horizontal, i.vertical, s, l]),
      p = m.useCallback(
        (Z) => ({
          vertical: Ts(Z, k.vertical),
          horizontal: $s(Z, k.horizontal),
        }),
        [k.horizontal, k.vertical],
      ),
      $ = m.useCallback(
        (Z) => {
          const de = { width: Z.offsetWidth, height: Z.offsetHeight },
            ae = p(de);
          if (l === "none")
            return { top: null, left: null, transformOrigin: Ps(ae) };
          const oe = L();
          let Y = oe.top - ae.vertical,
            pe = oe.left - ae.horizontal;
          const Ae = Y + de.height,
            Se = pe + de.width,
            Pe = Ct(zo(a)),
            Ee = Pe.innerHeight - d,
            Me = Pe.innerWidth - d;
          if (d !== null && Y < d) {
            const Re = Y - d;
            (Y -= Re), (ae.vertical += Re);
          } else if (d !== null && Ae > Ee) {
            const Re = Ae - Ee;
            (Y -= Re), (ae.vertical += Re);
          }
          if (d !== null && pe < d) {
            const Re = pe - d;
            (pe -= Re), (ae.horizontal += Re);
          } else if (Se > Me) {
            const Re = Se - Me;
            (pe -= Re), (ae.horizontal += Re);
          }
          return {
            top: `${Math.round(Y)}px`,
            left: `${Math.round(pe)}px`,
            transformOrigin: Ps(ae),
          };
        },
        [a, l, L, p, d],
      ),
      [T, M] = m.useState(f),
      E = m.useCallback(() => {
        const Z = I.current;
        if (!Z) return;
        const de = $(Z);
        de.top !== null && Z.style.setProperty("top", de.top),
          de.left !== null && (Z.style.left = de.left),
          (Z.style.transformOrigin = de.transformOrigin),
          M(!0);
      }, [$]);
    m.useEffect(
      () => (
        R && window.addEventListener("scroll", E),
        () => window.removeEventListener("scroll", E)
      ),
      [a, R, E],
    );
    const D = () => {
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
        const Z = Da(() => {
            E();
          }),
          de = Ct(zo(a));
        return (
          de.addEventListener("resize", Z),
          () => {
            Z.clear(), de.removeEventListener("resize", Z);
          }
        );
      }, [a, f, E]);
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
          onEntering: (de, ae) => {
            var oe;
            (oe = Z.onEntering) == null || oe.call(Z, de, ae), D();
          },
          onExited: (de) => {
            var ae;
            (ae = Z.onExited) == null || ae.call(Z, de), B();
          },
        }),
        additionalProps: { appear: !0, in: f },
      });
    v === "auto" && !H.muiSupportAuto && (j = void 0);
    const ee = h || (a ? Ye(zo(a)).body : void 0),
      [ye, { slots: J, slotProps: _, ...te }] = fe("root", {
        ref: r,
        elementType: vv,
        externalForwardedProps: { ...G, ...P },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: b.backdrop },
          slotProps: {
            backdrop: El(
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
        elementType: rc,
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
function xv(e) {
  return se("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const Sv = { vertical: "top", horizontal: "right" },
  Cv = { vertical: "top", horizontal: "left" },
  wv = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"], paper: ["paper"], list: ["list"] }, xv, t);
  },
  kv = F(bv, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
  })({}),
  Rv = F(rc, { name: "MuiMenu", slot: "Paper" })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch",
  }),
  Tv = F(gv, { name: "MuiMenu", slot: "List" })({ outline: 0 }),
  $v = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiMenu" }),
      {
        autoFocus: n = !0,
        children: a,
        className: i,
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
      v = Wr(),
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
      R = wv(C),
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
    m.Children.map(a, (j, G) => {
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
        className: [R.root, i],
      }),
      [T, M] = fe("paper", {
        className: R.paper,
        elementType: Rv,
        externalForwardedProps: p,
        shouldForwardComponentProp: !0,
        ownerState: C,
      }),
      [E, D] = fe("list", {
        className: U(R.list, l.className),
        elementType: Tv,
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
    return w.jsx(kv, {
      onClose: c,
      anchorOrigin: { vertical: "bottom", horizontal: v ? "right" : "left" },
      transformOrigin: v ? Sv : Cv,
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
        ...D,
        children: a,
      }),
    });
  });
function Pv(e) {
  return se("MuiMenuItem", e);
}
const Qr = ce("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Ev = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  Iv = (e) => {
    const {
        disabled: t,
        dense: r,
        divider: o,
        disableGutters: n,
        selected: a,
        classes: i,
      } = e,
      l = le(
        {
          root: [
            "root",
            r && "dense",
            t && "disabled",
            !n && "gutters",
            o && "divider",
            a && "selected",
          ],
        },
        Pv,
        i,
      );
    return { ...i, ...l };
  },
  Mv = F(dr, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: Ev,
  })(
    ne(({ theme: e }) => ({
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
      [`& + .${vs.root}`]: {
        marginTop: e.spacing(1),
        marginBottom: e.spacing(1),
      },
      [`& + .${vs.inset}`]: { marginLeft: 52 },
      [`& .${$r.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${$r.inset}`]: { paddingLeft: 36 },
      [`& .${ks.root}`]: { minWidth: 36 },
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
            [`& .${ks.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    })),
  ),
  F0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: n = !1,
        component: a = "li",
        dense: i = !1,
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
        () => ({ dense: i || f.dense || !1, disableGutters: l }),
        [f.dense, i, l],
      ),
      b = m.useRef(null);
    it(() => {
      n && b.current && b.current.focus();
    }, [n]);
    const x = { ...o, dense: g.dense, divider: s, disableGutters: l },
      k = Iv(o),
      S = He(b, r);
    let v;
    return (
      o.disabled || (v = h !== void 0 ? h : -1),
      w.jsx(fr.Provider, {
        value: g,
        children: w.jsx(Mv, {
          ref: S,
          role: u,
          tabIndex: v,
          component: a,
          focusVisibleClassName: U(k.focusVisible, c),
          className: U(k.root, y),
          ...d,
          ownerState: x,
          classes: k,
        }),
      })
    );
  });
function Av(e) {
  return se("MuiNativeSelect", e);
}
const ri = ce("MuiNativeSelect", [
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
  Ov = (e) => {
    const {
        classes: t,
        variant: r,
        disabled: o,
        multiple: n,
        open: a,
        error: i,
      } = e,
      s = {
        select: ["select", r, o && "disabled", n && "multiple", i && "error"],
        icon: ["icon", `icon${N(r)}`, a && "iconOpen", o && "disabled"],
      };
    return le(s, Av, t);
  },
  oc = F("select", { name: "MuiNativeSelect" })(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${ri.disabled}`]: { cursor: "default" },
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
  Lv = F(oc, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rt,
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.select,
        t[r.variant],
        r.error && t.error,
        { [`&.${ri.multiple}`]: t.multiple },
      ];
    },
  })({}),
  nc = F("svg", { name: "MuiNativeSelect" })(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${ri.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  Bv = F(nc, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${N(r.variant)}`],
        r.open && t.iconOpen,
      ];
    },
  })({}),
  Nv = m.forwardRef(function (t, r) {
    const {
        className: o,
        disabled: n,
        error: a,
        IconComponent: i,
        inputRef: s,
        variant: l = "standard",
        ...c
      } = t,
      u = { ...t, disabled: n, variant: l, error: a },
      h = Ov(u);
    return w.jsxs(m.Fragment, {
      children: [
        w.jsx(Lv, {
          ownerState: u,
          className: U(h.select, o),
          disabled: n,
          ref: s || r,
          ...c,
        }),
        t.multiple
          ? null
          : w.jsx(Bv, { as: i, ownerState: u, className: h.icon }),
      ],
    });
  });
var Es;
const zv = F("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: rt })(
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
  jv = F("legend", { name: "MuiNotchedOutlined", shouldForwardProp: rt })(
    ne(({ theme: e }) => ({
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
function Fv(e) {
  const {
      children: t,
      classes: r,
      className: o,
      label: n,
      notched: a,
      ...i
    } = e,
    s = n != null && n !== "",
    l = { ...e, notched: a, withLabel: s };
  return w.jsx(zv, {
    "aria-hidden": !0,
    className: o,
    ownerState: l,
    ...i,
    children: w.jsx(jv, {
      ownerState: l,
      children: s
        ? w.jsx("span", { children: n })
        : Es ||
          (Es = w.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const Dv = (e) => {
    const { classes: t } = e,
      o = le(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        Hg,
        t,
      );
    return { ...t, ...o };
  },
  Wv = F(In, {
    shouldForwardProp: (e) => rt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Pn,
  })(
    ne(({ theme: e }) => {
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
  Hv = F(Fv, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(
    ne(({ theme: e }) => {
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
  Vv = F(Mn, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: En,
  })(
    ne(({ theme: e }) => ({
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
  oi = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiOutlinedInput" }),
      {
        components: n = {},
        fullWidth: a = !1,
        inputComponent: i = "input",
        label: s,
        multiline: l = !1,
        notched: c,
        slots: u = {},
        slotProps: h = {},
        type: y = "text",
        ...d
      } = o,
      f = Dv(o),
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
        fullWidth: a,
        hiddenLabel: b.hiddenLabel,
        multiline: l,
        size: b.size,
        type: y,
      },
      k = u.root ?? n.Root ?? Wv,
      S = u.input ?? n.Input ?? Vv,
      [v, C] = fe("notchedOutline", {
        elementType: Hv,
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
    return w.jsx(Ja, {
      slots: { root: k, input: S },
      slotProps: h,
      renderSuffix: (R) =>
        w.jsx(v, {
          ...C,
          notched:
            typeof c < "u" ? c : !!(R.startAdornment || R.filled || R.focused),
        }),
      fullWidth: a,
      inputComponent: i,
      multiline: l,
      ref: r,
      type: y,
      ...d,
      classes: { ...f, notchedOutline: null },
    });
  });
oi.muiName = "Input";
const Uv = {
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
function ac(e) {
  return se("MuiSelect", e);
}
const Zr = ce("MuiSelect", [
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
var Is;
const _v = F(oc, {
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
  Gv = F(nc, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.icon,
        r.variant && t[`icon${N(r.variant)}`],
        r.open && t.iconOpen,
      ];
    },
  })({}),
  Kv = F("input", {
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
function Ms(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function qv(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const Yv = (e) => {
    const {
        classes: t,
        variant: r,
        disabled: o,
        multiple: n,
        open: a,
        error: i,
      } = e,
      s = {
        select: ["select", r, o && "disabled", n && "multiple", i && "error"],
        icon: ["icon", `icon${N(r)}`, a && "iconOpen", o && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return le(s, ac, t);
  },
  Xv = m.forwardRef(function (t, r) {
    var Vt, Lt, Ut, _t;
    const {
        "aria-describedby": o,
        "aria-label": n,
        autoFocus: a,
        autoWidth: i,
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
        type: D,
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
      [Z, de] = m.useState(),
      ae = He(r, g),
      oe = m.useCallback((ie) => {
        (_.current = ie), ie && me(ie);
      }, []),
      Y = te == null ? void 0 : te.parentNode;
    m.useImperativeHandle(
      ae,
      () => ({
        focus: () => {
          _.current.focus();
        },
        node: J.current,
        value: H,
      }),
      [H],
    );
    const pe = te !== null && ee;
    m.useEffect(() => {
      if (!pe || !Y || i || typeof ResizeObserver > "u") return;
      const ie = new ResizeObserver(() => {
        de(Y.clientWidth);
      });
      return (
        ie.observe(Y),
        () => {
          ie.disconnect();
        }
      );
    }, [pe, Y, i]),
      m.useEffect(() => {
        c &&
          ee &&
          te &&
          !ve &&
          (de(i ? null : Y.clientWidth), _.current.focus());
      }, [te, i]),
      m.useEffect(() => {
        a && _.current.focus();
      }, [a]),
      m.useEffect(() => {
        if (!b) return;
        const ie = Ye(_.current).getElementById(b);
        if (ie) {
          const ge = () => {
            getSelection().isCollapsed && _.current.focus();
          };
          return (
            ie.addEventListener("click", ge),
            () => {
              ie.removeEventListener("click", ge);
            }
          );
        }
      }, [b]);
    const Ae = (ie, ge) => {
        ie ? O && O(ge) : R && R(ge),
          ve || (de(i ? null : Y.clientWidth), ye(ie));
      },
      Se = (ie) => {
        A == null || A(ie),
          ie.button === 0 &&
            (ie.preventDefault(), _.current.focus(), Ae(!0, ie));
      },
      Pe = (ie) => {
        Ae(!1, ie);
      },
      Ee = m.Children.toArray(s),
      Me = (ie) => {
        const ge = Ee.find((Te) => Te.props.value === ie.target.value);
        ge !== void 0 && (X(ge.props.value), C && C(ie, ge));
      },
      Re = (ie) => (ge) => {
        let Te;
        if (ge.currentTarget.hasAttribute("tabindex")) {
          if (k) {
            Te = Array.isArray(H) ? H.slice() : [];
            const ut = H.indexOf(ie.props.value);
            ut === -1 ? Te.push(ie.props.value) : Te.splice(ut, 1);
          } else Te = ie.props.value;
          if (
            (ie.props.onClick && ie.props.onClick(ge), H !== Te && (X(Te), C))
          ) {
            const ut = ge.nativeEvent || ge,
              Bt = new ut.constructor(ut.type, ut);
            Object.defineProperty(Bt, "target", {
              writable: !0,
              value: { value: Te, name: S },
            }),
              C(Bt, ie);
          }
          k || Ae(!1, ge);
        }
      },
      re = (ie) => {
        p ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(ie.key) &&
            (ie.preventDefault(), Ae(!0, ie)),
          I == null || I(ie));
      },
      Ve = (ie) => {
        !pe &&
          v &&
          (Object.defineProperty(ie, "target", {
            writable: !0,
            value: { value: H, name: S },
          }),
          v(ie));
      };
    delete G["aria-invalid"];
    let Ie, W;
    const V = [];
    let Q = !1;
    (an({ value: H }) || y) && ($ ? (Ie = $(H)) : (Q = !0));
    const he = Ee.map((ie) => {
      if (!m.isValidElement(ie)) return null;
      let ge;
      if (k) {
        if (!Array.isArray(H)) throw new Error(Ft(2));
        (ge = H.some((Te) => Ms(Te, ie.props.value))),
          ge && Q && V.push(ie.props.children);
      } else (ge = Ms(H, ie.props.value)), ge && Q && (W = ie.props.children);
      return m.cloneElement(ie, {
        "aria-selected": ge ? "true" : "false",
        onClick: Re(ie),
        onKeyUp: (Te) => {
          Te.key === " " && Te.preventDefault(),
            ie.props.onKeyUp && ie.props.onKeyUp(Te);
        },
        role: "option",
        selected: ge,
        value: void 0,
        "data-value": ie.props.value,
      });
    });
    Q &&
      (k
        ? V.length === 0
          ? (Ie = null)
          : (Ie = V.reduce(
              (ie, ge, Te) => (
                ie.push(ge), Te < V.length - 1 && ie.push(", "), ie
              ),
              [],
            ))
        : (Ie = W));
    let xe = Z;
    !i && ve && te && (xe = Y.clientWidth);
    let q;
    typeof E < "u" ? (q = E) : (q = h ? null : 0);
    const K = M.id || (S ? `mui-component-select-${S}` : void 0),
      ke = { ...t, variant: j, value: H, open: pe, error: d },
      be = Yv(ke),
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
        w.jsx(_v, {
          as: "div",
          ref: oe,
          tabIndex: q,
          role: "combobox",
          "aria-controls": pe ? Ht : void 0,
          "aria-disabled": h ? "true" : void 0,
          "aria-expanded": pe ? "true" : "false",
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
          children: qv(Ie)
            ? Is ||
              (Is = w.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : Ie,
        }),
        w.jsx(Kv, {
          "aria-invalid": d,
          value: Array.isArray(H) ? H.join(",") : H,
          name: S,
          ref: J,
          "aria-hidden": !0,
          onChange: Me,
          tabIndex: -1,
          disabled: h,
          className: be.nativeInput,
          autoFocus: a,
          required: T,
          ...G,
          ownerState: ke,
        }),
        w.jsx(Gv, { as: f, className: be.icon, ownerState: ke }),
        w.jsx($v, {
          id: `menu-${S || ""}`,
          anchorEl: Y,
          open: pe,
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
  Jv = (e) => {
    const { classes: t } = e,
      o = le({ root: ["root"] }, ac, t);
    return { ...t, ...o };
  },
  ni = {
    name: "MuiSelect",
    slot: "Root",
    shouldForwardProp: (e) => rt(e) && e !== "variant",
  },
  Qv = F(ei, ni)(""),
  Zv = F(oi, ni)(""),
  eb = F(Za, ni)(""),
  ic = m.forwardRef(function (t, r) {
    const o = ue({ name: "MuiSelect", props: t }),
      {
        autoWidth: n = !1,
        children: a,
        classes: i = {},
        className: s,
        defaultOpen: l = !1,
        displayEmpty: c = !1,
        IconComponent: u = Ug,
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
      O = k ? Nv : Xv,
      L = Zt(),
      p = Vr({ props: o, muiFormControl: L, states: ["variant", "error"] }),
      $ = p.variant || I,
      T = { ...o, variant: $, classes: i },
      M = Jv(T),
      { root: E, ...D } = M,
      B =
        y ||
        {
          standard: w.jsx(Qv, { ownerState: T }),
          outlined: w.jsx(Zv, { label: f, ownerState: T }),
          filled: w.jsx(eb, { ownerState: T }),
        }[$],
      j = He(r, Qt(B));
    return w.jsx(m.Fragment, {
      children: m.cloneElement(B, {
        inputComponent: O,
        inputProps: {
          children: a,
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
          classes: d ? Xe(D, d.classes) : D,
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
function tb(e, t, r = (o, n) => o === n) {
  return e.length === t.length && e.every((o, n) => r(o, t[n]));
}
const rb = 2;
function wr(e, t, r, o, n) {
  return r === 1 ? Math.min(e + t, n) : Math.max(e - t, o);
}
function sc(e, t) {
  return e - t;
}
function As(e, t) {
  const { index: r } =
    e.reduce((o, n, a) => {
      const i = Math.abs(t - n);
      return o === null || i < o.distance || i === o.distance
        ? { distance: i, index: a }
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
function ob(e, t, r) {
  return (r - t) * e + t;
}
function nb(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"),
      o = r[0].split(".")[1];
    return (o ? o.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function ab(e, t, r) {
  const o = Math.round((e - r) / t) * t + r;
  return Number(o.toFixed(nb(t)));
}
function Os({ values: e, newValue: t, index: r }) {
  const o = e.slice();
  return (o[r] = t), o.sort(sc);
}
function Fo({ sliderRef: e, activeIndex: t, setActive: r }) {
  var n, a, i;
  const o = Ye(e.current);
  (!((n = e.current) != null && n.contains(o.activeElement)) ||
    Number(
      (a = o == null ? void 0 : o.activeElement) == null
        ? void 0
        : a.getAttribute("data-index"),
    ) !== t) &&
    ((i = e.current) == null ||
      i.querySelector(`[type="range"][data-index="${t}"]`).focus()),
    r && r(t);
}
function Do(e, t) {
  return typeof e == "number" && typeof t == "number"
    ? e === t
    : typeof e == "object" && typeof t == "object"
      ? tb(e, t)
      : !1;
}
const ib = {
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
  sb = (e) => e;
let Wo;
function Ls() {
  return (
    Wo === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (Wo = CSS.supports("touch-action", "none"))
        : (Wo = !0)),
    Wo
  );
}
function lb(e) {
  const {
      "aria-labelledby": t,
      defaultValue: r,
      disabled: o = !1,
      disableSwap: n = !1,
      isRtl: a = !1,
      marks: i = !1,
      max: s = 100,
      min: l = 0,
      name: c,
      onChange: u,
      onChangeCommitted: h,
      orientation: y = "horizontal",
      rootRef: d,
      scale: f = sb,
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
  let E = M ? p.slice().sort(sc) : [p];
  E = E.map((W) => (W == null ? l : kr(W, l, s)));
  const D =
      i === !0 && g !== null
        ? [...Array(Math.floor((s - l) / g) + 1)].map((W, V) => ({
            value: l + g * V,
          }))
        : i || [],
    B = D.map((W) => W.value),
    [j, G] = m.useState(-1),
    H = m.useRef(null),
    X = He(d, H),
    ee = (W) => (V) => {
      var he;
      const Q = Number(V.currentTarget.getAttribute("data-index"));
      Or(V.target) && G(Q),
        P(Q),
        (he = W == null ? void 0 : W.onFocus) == null || he.call(W, V);
    },
    ye = (W) => (V) => {
      var Q;
      Or(V.target) || G(-1),
        P(-1),
        (Q = W == null ? void 0 : W.onBlur) == null || Q.call(W, V);
    },
    J = (W, V) => {
      const Q = Number(W.currentTarget.getAttribute("data-index")),
        he = E[Q],
        xe = B.indexOf(he);
      let q = V;
      if (D && g == null) {
        const K = B[B.length - 1];
        q >= K
          ? (q = K)
          : q <= B[0]
            ? (q = B[0])
            : (q = q < he ? B[xe - 1] : B[xe + 1]);
      }
      if (((q = kr(q, l, s)), M)) {
        n && (q = kr(q, E[Q - 1] || -1 / 0, E[Q + 1] || 1 / 0));
        const K = q;
        q = Os({ values: E, newValue: q, index: Q });
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
              q = wr(xe, K, 1, l, s);
              break;
            case "ArrowRight":
              q = wr(xe, K, a ? -1 : 1, l, s);
              break;
            case "ArrowDown":
              q = wr(xe, K, -1, l, s);
              break;
            case "ArrowLeft":
              q = wr(xe, K, a ? 1 : -1, l, s);
              break;
            case "PageUp":
              q = wr(xe, b, 1, l, s);
              break;
            case "PageDown":
              q = wr(xe, b, -1, l, s);
              break;
            case "Home":
              q = l;
              break;
            case "End":
              q = s;
              break;
          }
        } else if (D) {
          const K = B[B.length - 1],
            ke = B.indexOf(xe),
            be = [
              a ? "ArrowRight" : "ArrowLeft",
              "ArrowDown",
              "PageDown",
              "Home",
            ],
            we = [a ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
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
  it(() => {
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
  a && y === "horizontal" && (ve += "-reverse");
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
      if (((be = ob(ke, l, s)), g)) be = ab(be, g, l);
      else {
        const vt = As(B, be);
        be = B[vt];
      }
      be = kr(be, l, s);
      let we = 0;
      if (M) {
        V ? (we = me.current) : (we = As(E, be)),
          n && (be = kr(be, E[we - 1] || -1 / 0, E[we + 1] || 1 / 0));
        const vt = be;
        (be = Os({ values: E, newValue: be, index: we })),
          (n && V) || ((we = be.indexOf(vt)), (me.current = we));
      }
      return { newValue: be, activeIndex: we };
    },
    de = tt((W) => {
      const V = jo(W, S);
      if (!V) return;
      if (((O.current += 1), W.type === "mousemove" && W.buttons === 0)) {
        ae(W);
        return;
      }
      const { newValue: Q, activeIndex: he } = Z({ finger: V, move: !0 });
      Fo({ sliderRef: H, activeIndex: he, setActive: C }),
        $(Q),
        !I && O.current > rb && A(!0),
        T && !Do(Q, p) && T(W, Q, he);
    }),
    ae = tt((W) => {
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
      Ls() || W.preventDefault();
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
      he.addEventListener("touchmove", de, { passive: !0 }),
        he.addEventListener("touchend", ae, { passive: !0 });
    }),
    Y = m.useCallback(() => {
      const W = Ye(H.current);
      W.removeEventListener("mousemove", de),
        W.removeEventListener("mouseup", ae),
        W.removeEventListener("touchmove", de),
        W.removeEventListener("touchend", ae);
    }, [ae, de]);
  m.useEffect(() => {
    const { current: W } = H;
    return (
      W.addEventListener("touchstart", oe, { passive: Ls() }),
      () => {
        W.removeEventListener("touchstart", oe), Y();
      }
    );
  }, [Y, oe]),
    m.useEffect(() => {
      o && Y();
    }, [o, Y]);
  const pe = (W) => (V) => {
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
      he.addEventListener("mousemove", de, { passive: !0 }),
        he.addEventListener("mouseup", ae);
    },
    Ae = sn(M ? E[0] : l, l, s),
    Se = sn(E[E.length - 1], l, s) - Ae,
    Pe = (W = {}) => {
      const V = lr(W),
        Q = { onMouseDown: pe(V || {}) },
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
    y === "vertical" && (Ve = a ? "vertical-rl" : "vertical-lr"),
    {
      active: v,
      axis: ve,
      axisProps: ib,
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
            ...Uv,
            direction: a ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: Ve,
          },
        };
      },
      getRootProps: Pe,
      getThumbProps: Re,
      marks: D,
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
const cb = (e) => !e || !Kt(e);
function ub(e) {
  return se("MuiSlider", e);
}
const ft = ce("MuiSlider", [
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
  db = (e) => {
    const { open: t } = e;
    return {
      offset: U(t && ft.valueLabelOpen),
      circle: ft.valueLabelCircle,
      label: ft.valueLabelLabel,
    };
  };
function pb(e) {
  const { children: t, className: r, value: o } = e,
    n = db(e);
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
function Bs(e) {
  return e;
}
const fb = F("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`color${N(r.color)}`],
        r.size !== "medium" && t[`size${N(r.size)}`],
        r.marked && t.marked,
        r.orientation === "vertical" && t.vertical,
        r.track === "inverted" && t.trackInverted,
        r.track === !1 && t.trackFalse,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
  mb = F("span", { name: "MuiSlider", slot: "Rail" })({
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
  gb = F("span", { name: "MuiSlider", slot: "Track" })(
    ne(({ theme: e }) => ({
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
  hb = F("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.thumb,
        t[`thumbColor${N(r.color)}`],
        r.size !== "medium" && t[`thumbSize${N(r.size)}`],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
  yb = F(pb, { name: "MuiSlider", slot: "ValueLabel" })(
    ne(({ theme: e }) => ({
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
  vb = F("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => kn(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: r } = e;
      return [t.mark, r && t.markActive];
    },
  })(
    ne(({ theme: e }) => ({
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
  bb = F("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => kn(e) && e !== "markLabelActive",
  })(
    ne(({ theme: e }) => ({
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
  xb = (e) => {
    const {
        disabled: t,
        dragging: r,
        marked: o,
        orientation: n,
        track: a,
        classes: i,
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
          a === "inverted" && "trackInverted",
          a === !1 && "trackFalse",
          s && `color${N(s)}`,
          l && `size${N(l)}`,
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
          l && `thumbSize${N(l)}`,
          s && `thumbColor${N(s)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return le(c, ub, i);
  },
  Sb = ({ children: e }) => e,
  D0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiSlider" }),
      n = Wr(),
      {
        "aria-label": a,
        "aria-valuetext": i,
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
        scale: p = Bs,
        slotProps: $,
        slots: T,
        tabIndex: M,
        track: E = "normal",
        value: D,
        valueLabelDisplay: B = "off",
        valueLabelFormat: j = Bs,
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
        dragging: de,
        marks: ae,
        values: oe,
        trackOffset: Y,
        trackLeap: pe,
        getThumbStyle: Ae,
      } = lb({ ...H, rootRef: r });
    (H.marked = ae.length > 0 && ae.some((ge) => ge.label)),
      (H.dragging = de),
      (H.focusedThumbIndex = ve);
    const Se = xb(H),
      Pe = (T == null ? void 0 : T.root) ?? c.Root ?? fb,
      Ee = (T == null ? void 0 : T.rail) ?? c.Rail ?? mb,
      Me = (T == null ? void 0 : T.track) ?? c.Track ?? gb,
      Re = (T == null ? void 0 : T.thumb) ?? c.Thumb ?? hb,
      re = (T == null ? void 0 : T.valueLabel) ?? c.ValueLabel ?? yb,
      Ve = (T == null ? void 0 : T.mark) ?? c.Mark ?? vb,
      Ie = (T == null ? void 0 : T.markLabel) ?? c.MarkLabel ?? bb,
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
        additionalProps: { ...(cb(Pe) && { as: l }) },
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
        additionalProps: { style: { ...X[me].offset(Y), ...X[me].leap(pe) } },
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
      ie = Tt({
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
        ae
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
            bt = B === "off" ? Sb : re;
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
                  "aria-label": b ? b(Te) : a,
                  "aria-valuenow": p(ge),
                  "aria-labelledby": s,
                  "aria-valuetext": x ? x(p(ge), Te) : i,
                  value: oe[Te],
                  ...ie,
                }),
              }),
            },
            Te,
          );
        }),
      ],
    });
  });
function Cb(e = {}) {
  const {
      autoHideDuration: t = null,
      disableWindowBlurListener: r = !1,
      onClose: o,
      open: n,
      resumeHideDuration: a,
    } = e,
    i = sr();
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
        i.start(x, () => {
          s(null, "timeout");
        });
    });
  m.useEffect(() => (n && l(t), i.clear), [n, t, l, i]);
  const c = (x) => {
      o == null || o(x, "clickaway");
    },
    u = i.clear,
    h = m.useCallback(() => {
      t != null && l(a ?? t * 0.5);
    }, [t, a, l]),
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
function wb(e) {
  return se("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const kb = (e) => {
    const { classes: t } = e;
    return le(
      { root: ["root"], action: ["action"], message: ["message"] },
      wb,
      t,
    );
  },
  Rb = F(gr, { name: "MuiSnackbarContent", slot: "Root" })(
    ne(({ theme: e }) => {
      const t = e.palette.mode === "light" ? 0.8 : 0.98;
      return {
        ...e.typography.body2,
        color: e.vars
          ? e.vars.palette.SnackbarContent.color
          : e.palette.getContrastText(ta(e.palette.background.default, t)),
        backgroundColor: e.vars
          ? e.vars.palette.SnackbarContent.bg
          : ta(e.palette.background.default, t),
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "6px 16px",
        flexGrow: 1,
        [e.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 },
      };
    }),
  ),
  Tb = F("div", { name: "MuiSnackbarContent", slot: "Message" })({
    padding: "8px 0",
  }),
  $b = F("div", { name: "MuiSnackbarContent", slot: "Action" })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8,
  }),
  Pb = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiSnackbarContent" }),
      { action: n, className: a, message: i, role: s = "alert", ...l } = o,
      c = o,
      u = kb(c);
    return w.jsxs(Rb, {
      role: s,
      elevation: 6,
      className: U(u.root, a),
      ownerState: c,
      ref: r,
      ...l,
      children: [
        w.jsx(Tb, { className: u.message, ownerState: c, children: i }),
        n
          ? w.jsx($b, { className: u.action, ownerState: c, children: n })
          : null,
      ],
    });
  });
function Eb(e) {
  return se("MuiSnackbar", e);
}
ce("MuiSnackbar", [
  "root",
  "anchorOriginTopCenter",
  "anchorOriginBottomCenter",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
]);
const Ib = (e) => {
    const { classes: t, anchorOrigin: r } = e,
      o = { root: ["root", `anchorOrigin${N(r.vertical)}${N(r.horizontal)}`] };
    return le(o, Eb, t);
  },
  Mb = F("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[
          `anchorOrigin${N(r.anchorOrigin.vertical)}${N(r.anchorOrigin.horizontal)}`
        ],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
  W0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiSnackbar" }),
      n = Wt(),
      a = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        action: i,
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
        transitionDuration: O = a,
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
      E = Ib(M),
      { getRootProps: D, onClickAway: B } = Cb(M),
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
        elementType: Mb,
        getSlotProps: D,
        externalForwardedProps: { ...ee, ...T },
        ownerState: M,
      }),
      [_, { ownerState: te, ...me }] = fe("clickAwayListener", {
        elementType: vh,
        externalForwardedProps: ee,
        getSlotProps: (oe) => ({
          onClickAway: (...Y) => {
            var Ae;
            const pe = Y[0];
            (Ae = oe.onClickAway) == null || Ae.call(oe, ...Y),
              !(pe != null && pe.defaultMuiPrevented) && B(...Y);
          },
        }),
        ownerState: M,
      }),
      [ve, Z] = fe("content", {
        elementType: Pb,
        shouldForwardComponentProp: !0,
        externalForwardedProps: ee,
        additionalProps: { message: g, action: i },
        ownerState: M,
      }),
      [de, ae] = fe("transition", {
        elementType: bo,
        externalForwardedProps: ee,
        getSlotProps: (oe) => ({
          onEnter: (...Y) => {
            var pe;
            (pe = oe.onEnter) == null || pe.call(oe, ...Y), X(...Y);
          },
          onExited: (...Y) => {
            var pe;
            (pe = oe.onExited) == null || pe.call(oe, ...Y), H(...Y);
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
            children: w.jsx(de, { ...ae, children: u || w.jsx(ve, { ...Z }) }),
          }),
        });
  });
function Ab(e) {
  return se("MuiTooltip", e);
}
const Ge = ce("MuiTooltip", [
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
function Ob(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lb = (e) => {
    const {
        classes: t,
        disableInteractive: r,
        arrow: o,
        touch: n,
        placement: a,
      } = e,
      i = {
        popper: ["popper", !r && "popperInteractive", o && "popperArrow"],
        tooltip: [
          "tooltip",
          o && "tooltipArrow",
          n && "touch",
          `tooltipPlacement${N(a.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return le(i, Ab, t);
  },
  Bb = F(Kl, {
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
    ne(({ theme: e }) => ({
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
  Nb = F("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.tooltip,
        r.touch && t.touch,
        r.arrow && t.tooltipArrow,
        t[`tooltipPlacement${N(r.placement.split("-")[0])}`],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
            lineHeight: `${Ob(16 / 14)}em`,
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
  zb = F("span", { name: "MuiTooltip", slot: "Arrow" })(
    ne(({ theme: e }) => ({
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
const Ns = new Rn();
let eo = { x: 0, y: 0 };
function Vo(e, t) {
  return (r, ...o) => {
    t && t(r, ...o), e(r, ...o);
  };
}
const H0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTooltip" }),
      {
        arrow: n = !1,
        children: a,
        classes: i,
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
      D = m.isValidElement(a) ? a : w.jsx("span", { children: a }),
      B = Wt(),
      j = Wr(),
      [G, H] = m.useState(),
      [X, ee] = m.useState(null),
      ye = m.useRef(!1),
      J = y || x,
      _ = sr(),
      te = sr(),
      me = sr(),
      ve = sr(),
      [Z, de] = ho({
        controlled: P,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let ae = Z;
    const oe = mr(k),
      Y = m.useRef(),
      pe = tt(() => {
        Y.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = Y.current),
          (Y.current = void 0)),
          ve.clear();
      });
    m.useEffect(() => pe, [pe]);
    const Ae = (Ce) => {
        Ns.clear(), (Ho = !0), de(!0), R && !ae && R(Ce);
      },
      Se = tt((Ce) => {
        Ns.start(800 + S, () => {
          Ho = !1;
        }),
          de(!1),
          C && ae && C(Ce),
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
        if (!Je || !Or(Je)) {
          Me(!1);
          const hr = Ce ?? new Event("blur");
          !Ce &&
            Je &&
            (Object.defineProperty(hr, "target", { value: Je }),
            Object.defineProperty(hr, "currentTarget", { value: Je })),
            Ee(hr);
        }
      },
      re = (Ce) => {
        G || H(Ce.currentTarget), Or(Ce.target) && (Me(!0), Pe(Ce));
      },
      Ve = (Ce) => {
        ye.current = !0;
        const Je = D.props;
        Je.onTouchStart && Je.onTouchStart(Ce);
      },
      Ie = (Ce) => {
        Ve(Ce),
          me.clear(),
          _.clear(),
          pe(),
          (Y.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          ve.start(b, () => {
            (document.body.style.WebkitUserSelect = Y.current), Pe(Ce);
          });
      },
      W = (Ce) => {
        D.props.onTouchEnd && D.props.onTouchEnd(Ce),
          pe(),
          me.start(v, () => {
            Se(Ce);
          });
      };
    m.useEffect(() => {
      if (!ae) return;
      function Ce(Je) {
        Je.key === "Escape" && Se(Je);
      }
      return (
        document.addEventListener("keydown", Ce),
        () => {
          document.removeEventListener("keydown", Ce);
        }
      );
    }, [Se, ae]);
    const V = He(Qt(D), H, r);
    !$ && $ !== 0 && (ae = !1);
    const Q = m.useRef(),
      he = (Ce) => {
        const Je = D.props;
        Je.onMouseMove && Je.onMouseMove(Ce),
          (eo = { x: Ce.clientX, y: Ce.clientY }),
          Q.current && Q.current.update();
      },
      xe = {},
      q = typeof $ == "string";
    c
      ? ((xe.title = !ae && q && !h ? $ : null),
        (xe["aria-describedby"] = ae ? oe : null))
      : ((xe["aria-label"] = q ? $ : null),
        (xe["aria-labelledby"] = ae && !q ? oe : null));
    const K = {
        ...xe,
        ...E,
        ...D.props,
        className: U(E.className, D.props.className),
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
        var Je, hr;
        let Ce = [
          { name: "arrow", enabled: !!X, options: { element: X, padding: 4 } },
        ];
        return (
          (Je = O.popperOptions) != null &&
            Je.modifiers &&
            (Ce = Ce.concat(O.popperOptions.modifiers)),
          (hr = we == null ? void 0 : we.popperOptions) != null &&
            hr.modifiers &&
            (Ce = Ce.concat(we.popperOptions.modifiers)),
          {
            ...O.popperOptions,
            ...(we == null ? void 0 : we.popperOptions),
            modifiers: Ce,
          }
        );
      }, [X, O.popperOptions, we == null ? void 0 : we.popperOptions]),
      Ht = Lb(be),
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
        elementType: Bb,
        externalForwardedProps: Lt,
        ownerState: be,
        className: U(Ht.popper, O == null ? void 0 : O.className),
      }),
      [ie, ge] = fe("transition", {
        elementType: bo,
        externalForwardedProps: Lt,
        ownerState: be,
      }),
      [Te, ut] = fe("tooltip", {
        elementType: Nb,
        className: Ht.tooltip,
        externalForwardedProps: Lt,
        ownerState: be,
      }),
      [Bt, bt] = fe("arrow", {
        elementType: zb,
        className: Ht.arrow,
        externalForwardedProps: Lt,
        ownerState: be,
        ref: ee,
      });
    return w.jsxs(m.Fragment, {
      children: [
        m.cloneElement(D, K),
        w.jsx(Ut, {
          as: A ?? Kl,
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
          open: G ? ae : !1,
          id: oe,
          transition: !0,
          ...ke,
          ..._t,
          popperOptions: vt,
          children: ({ TransitionProps: Ce }) =>
            w.jsx(ie, {
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
  V0 = Sp({
    createStyledComponent: F("div", { name: "MuiStack", slot: "Root" }),
    useThemeProps: (e) => ue({ props: e, name: "MuiStack" }),
  });
function jb(e) {
  return se("MuiSwitch", e);
}
const et = ce("MuiSwitch", [
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
  Fb = (e) => {
    const {
        classes: t,
        edge: r,
        size: o,
        color: n,
        checked: a,
        disabled: i,
      } = e,
      s = {
        root: ["root", r && `edge${N(r)}`, `size${N(o)}`],
        switchBase: [
          "switchBase",
          `color${N(n)}`,
          a && "checked",
          i && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = le(s, jb, t);
    return { ...t, ...l };
  },
  Db = F("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.edge && t[`edge${N(r.edge)}`], t[`size${N(r.size)}`]];
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
  Wb = F(hh, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.switchBase,
        { [`& .${et.input}`]: t.input },
        r.color !== "default" && t[`color${N(r.color)}`],
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
    ne(({ theme: e }) => ({
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
  Hb = F("span", { name: "MuiSwitch", slot: "Track" })(
    ne(({ theme: e }) => ({
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
  Vb = F("span", { name: "MuiSwitch", slot: "Thumb" })(
    ne(({ theme: e }) => ({
      boxShadow: (e.vars || e).shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%",
    })),
  ),
  U0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiSwitch" }),
      {
        className: n,
        color: a = "primary",
        edge: i = !1,
        size: s = "medium",
        sx: l,
        slots: c = {},
        slotProps: u = {},
        ...h
      } = o,
      y = { ...o, color: a, edge: i, size: s },
      d = Fb(y),
      f = { slots: c, slotProps: u },
      [g, b] = fe("root", {
        className: U(d.root, n),
        elementType: Db,
        externalForwardedProps: f,
        ownerState: y,
        additionalProps: { sx: l },
      }),
      [x, k] = fe("thumb", {
        className: d.thumb,
        elementType: Vb,
        externalForwardedProps: f,
        ownerState: y,
      }),
      S = w.jsx(x, { ...k }),
      [v, C] = fe("track", {
        className: d.track,
        elementType: Hb,
        externalForwardedProps: f,
        ownerState: y,
      });
    return w.jsxs(g, {
      ...b,
      children: [
        w.jsx(Wb, {
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
  lc = m.createContext();
function Ub(e) {
  return se("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const _b = (e) => {
    const { classes: t, stickyHeader: r } = e;
    return le({ root: ["root", r && "stickyHeader"] }, Ub, t);
  },
  Gb = F("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.stickyHeader && t.stickyHeader];
    },
  })(
    ne(({ theme: e }) => ({
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
  zs = "table",
  _0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTable" }),
      {
        className: n,
        component: a = zs,
        padding: i = "normal",
        size: s = "medium",
        stickyHeader: l = !1,
        ...c
      } = o,
      u = { ...o, component: a, padding: i, size: s, stickyHeader: l },
      h = _b(u),
      y = m.useMemo(
        () => ({ padding: i, size: s, stickyHeader: l }),
        [i, s, l],
      );
    return w.jsx(lc.Provider, {
      value: y,
      children: w.jsx(Gb, {
        as: a,
        role: a === zs ? null : "table",
        ref: r,
        className: U(h.root, n),
        ownerState: u,
        ...c,
      }),
    });
  }),
  An = m.createContext();
function Kb(e) {
  return se("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const qb = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, Kb, t);
  },
  Yb = F("tbody", { name: "MuiTableBody", slot: "Root" })({
    display: "table-row-group",
  }),
  Xb = { variant: "body" },
  js = "tbody",
  G0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTableBody" }),
      { className: n, component: a = js, ...i } = o,
      s = { ...o, component: a },
      l = qb(s);
    return w.jsx(An.Provider, {
      value: Xb,
      children: w.jsx(Yb, {
        className: U(l.root, n),
        as: a,
        ref: r,
        role: a === js ? null : "rowgroup",
        ownerState: s,
        ...i,
      }),
    });
  });
function Jb(e) {
  return se("MuiTableCell", e);
}
const Qb = ce("MuiTableCell", [
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
  Zb = (e) => {
    const {
        classes: t,
        variant: r,
        align: o,
        padding: n,
        size: a,
        stickyHeader: i,
      } = e,
      s = {
        root: [
          "root",
          r,
          i && "stickyHeader",
          o !== "inherit" && `align${N(o)}`,
          n !== "normal" && `padding${N(n)}`,
          `size${N(a)}`,
        ],
      };
    return le(s, Jb, t);
  },
  e0 = F("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`size${N(r.size)}`],
        r.padding !== "normal" && t[`padding${N(r.padding)}`],
        r.align !== "inherit" && t[`align${N(r.align)}`],
        r.stickyHeader && t.stickyHeader,
      ];
    },
  })(
    ne(({ theme: e }) => ({
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
            [`&.${Qb.paddingCheckbox}`]: {
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
  K0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTableCell" }),
      {
        align: n = "inherit",
        className: a,
        component: i,
        padding: s,
        scope: l,
        size: c,
        sortDirection: u,
        variant: h,
        ...y
      } = o,
      d = m.useContext(lc),
      f = m.useContext(An),
      g = f && f.variant === "head";
    let b;
    i ? (b = i) : (b = g ? "th" : "td");
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
      v = Zb(S);
    let C = null;
    return (
      u && (C = u === "asc" ? "ascending" : "descending"),
      w.jsx(e0, {
        as: b,
        ref: r,
        className: U(v.root, a),
        "aria-sort": C,
        scope: x,
        ownerState: S,
        ...y,
      })
    );
  });
function t0(e) {
  return se("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const r0 = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, t0, t);
  },
  o0 = F("div", { name: "MuiTableContainer", slot: "Root" })({
    width: "100%",
    overflowX: "auto",
  }),
  q0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTableContainer" }),
      { className: n, component: a = "div", ...i } = o,
      s = { ...o, component: a },
      l = r0(s);
    return w.jsx(o0, {
      ref: r,
      as: a,
      className: U(l.root, n),
      ownerState: s,
      ...i,
    });
  });
function n0(e) {
  return se("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const a0 = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, n0, t);
  },
  i0 = F("thead", { name: "MuiTableHead", slot: "Root" })({
    display: "table-header-group",
  }),
  s0 = { variant: "head" },
  Fs = "thead",
  Y0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTableHead" }),
      { className: n, component: a = Fs, ...i } = o,
      s = { ...o, component: a },
      l = a0(s);
    return w.jsx(An.Provider, {
      value: s0,
      children: w.jsx(i0, {
        as: a,
        className: U(l.root, n),
        ref: r,
        role: a === Fs ? null : "rowgroup",
        ownerState: s,
        ...i,
      }),
    });
  });
function l0(e) {
  return se("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const c0 = (e) => {
    const { classes: t, disableGutters: r, variant: o } = e;
    return le({ root: ["root", !r && "gutters", o] }, l0, t);
  },
  u0 = F("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
    },
  })(
    ne(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          },
        },
        { props: { variant: "dense" }, style: { minHeight: 48 } },
        { props: { variant: "regular" }, style: e.mixins.toolbar },
      ],
    })),
  ),
  X0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiToolbar" }),
      {
        className: n,
        component: a = "div",
        disableGutters: i = !1,
        variant: s = "regular",
        ...l
      } = o,
      c = { ...o, component: a, disableGutters: i, variant: s },
      u = c0(c);
    return w.jsx(u0, {
      as: a,
      className: U(u.root, n),
      ref: r,
      ownerState: c,
      ...l,
    });
  });
function d0(e) {
  return se("MuiTableRow", e);
}
const Ds = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  p0 = (e) => {
    const { classes: t, selected: r, hover: o, head: n, footer: a } = e;
    return le(
      {
        root: [
          "root",
          r && "selected",
          o && "hover",
          n && "head",
          a && "footer",
        ],
      },
      d0,
      t,
    );
  },
  f0 = F("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.head && t.head, r.footer && t.footer];
    },
  })(
    ne(({ theme: e }) => ({
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      outline: 0,
      [`&.${Ds.hover}:hover`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
      },
      [`&.${Ds.selected}`]: {
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
  Ws = "tr",
  J0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTableRow" }),
      {
        className: n,
        component: a = Ws,
        hover: i = !1,
        selected: s = !1,
        ...l
      } = o,
      c = m.useContext(An),
      u = {
        ...o,
        component: a,
        hover: i,
        selected: s,
        head: c && c.variant === "head",
        footer: c && c.variant === "footer",
      },
      h = p0(u);
    return w.jsx(f0, {
      as: a,
      ref: r,
      className: U(h.root, n),
      role: a === Ws ? null : "row",
      ownerState: u,
      ...l,
    });
  });
function m0(e) {
  return se("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const g0 = { standard: ei, filled: Za, outlined: oi },
  h0 = (e) => {
    const { classes: t } = e;
    return le({ root: ["root"] }, m0, t);
  },
  y0 = F(ky, { name: "MuiTextField", slot: "Root" })({}),
  Q0 = m.forwardRef(function (t, r) {
    const o = ue({ props: t, name: "MuiTextField" }),
      {
        autoComplete: n,
        autoFocus: a = !1,
        children: i,
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
        slots: D = {},
        slotProps: B = {},
        type: j,
        value: G,
        variant: H = "outlined",
        ...X
      } = o,
      ee = {
        ...o,
        autoFocus: a,
        color: l,
        disabled: u,
        error: h,
        fullWidth: d,
        multiline: P,
        required: $,
        select: M,
        variant: H,
      },
      ye = h0(ee),
      J = mr(g),
      _ = f && J ? `${J}-helper-text` : void 0,
      te = v && J ? `${J}-label` : void 0,
      me = g0[H],
      ve = {
        slots: D,
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
      de = ve.slotProps.inputLabel;
    H === "outlined" &&
      (de && typeof de.shrink < "u" && (Z.notched = de.shrink), (Z.label = v)),
      M &&
        ((!E || !E.native) && (Z.id = void 0),
        (Z["aria-describedby"] = void 0));
    const [ae, oe] = fe("root", {
        elementType: y0,
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
      [Y, pe] = fe("input", {
        elementType: me,
        externalForwardedProps: ve,
        additionalProps: Z,
        ownerState: ee,
      }),
      [Ae, Se] = fe("inputLabel", {
        elementType: _y,
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      [Pe, Ee] = fe("htmlInput", {
        elementType: "input",
        externalForwardedProps: ve,
        ownerState: ee,
      }),
      [Me, Re] = fe("formHelperText", {
        elementType: Py,
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
        autoFocus: a,
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
        slots: { input: D.htmlInput ? Pe : void 0 },
        ...pe,
      });
    return w.jsxs(ae, {
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
              children: i,
            })
          : Ie,
        f && w.jsx(Me, { id: _, ...Re, children: f }),
      ],
    });
  }),
  Z0 = je(
    w.jsx("path", { d: "M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z" }),
  ),
  e1 = je(
    w.jsx("path", {
      d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z",
    }),
  ),
  t1 = je(
    w.jsx("path", {
      d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
    }),
  ),
  r1 = je(
    w.jsx("path", {
      d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z",
    }),
  ),
  o1 = je(
    w.jsx("path", {
      d: "M7 18h2V6H7zm4 4h2V2h-2zm-8-8h2v-4H3zm12 4h2V6h-2zm4-8v4h2v-4z",
    }),
  ),
  n1 = je(
    w.jsx("path", {
      d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3z",
    }),
  ),
  a1 = je(
    w.jsx("path", {
      d: "M15 6H3v2h12zm0 4H3v2h12zM3 16h8v-2H3zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6z",
    }),
  ),
  i1 = je(
    w.jsx("path", {
      d: "M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77",
    }),
  ),
  s1 = je(
    w.jsx("path", {
      d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z",
    }),
  ),
  l1 = je(
    w.jsx("path", {
      d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1",
    }),
  ),
  c1 = je(w.jsx("circle", { cx: "12", cy: "12", r: "8" })),
  u1 = je(w.jsx("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" })),
  d1 = je(
    w.jsx("path", {
      d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z",
    }),
  ),
  p1 = je(
    w.jsx("path", {
      d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    }),
  ),
  f1 = je(
    w.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
  ),
  m1 = je(w.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" })),
  g1 = je(
    w.jsx("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z",
    }),
  ),
  h1 = je(
    w.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z",
    }),
  ),
  y1 = je(
    w.jsx("path", {
      d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z",
    }),
  ),
  v1 = je(
    w.jsx("path", {
      d: "M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9",
    }),
  ),
  b1 = je(
    w.jsx("path", {
      d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z",
    }),
  );
export {
  ic as $,
  C0 as A,
  R0 as B,
  r1 as C,
  A0 as D,
  U0 as E,
  c1 as F,
  o1 as G,
  w0 as H,
  Xf as I,
  m1 as J,
  H0 as K,
  nv as L,
  u1 as M,
  g1 as N,
  d1 as O,
  gr as P,
  a1 as Q,
  s1 as R,
  t1 as S,
  X0 as T,
  h1 as U,
  i1 as V,
  P0 as W,
  M0 as X,
  I0 as Y,
  ky as Z,
  _y as _,
  Tr as a,
  F0 as a0,
  E0 as a1,
  y1 as a2,
  D0 as a3,
  W0 as a4,
  k0 as a5,
  v1 as a6,
  B0 as a7,
  b1 as a8,
  x0 as a9,
  $0 as aa,
  bs as b,
  za as c,
  N0 as d,
  z0 as e,
  j0 as f,
  Z0 as g,
  e1 as h,
  l1 as i,
  w as j,
  n1 as k,
  O0 as l,
  p1 as m,
  V0 as n,
  T0 as o,
  Nl as p,
  S0 as q,
  Q0 as r,
  L0 as s,
  f1 as t,
  q0 as u,
  _0 as v,
  Y0 as w,
  J0 as x,
  K0 as y,
  G0 as z,
};
