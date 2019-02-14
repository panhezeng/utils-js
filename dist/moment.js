!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("moment")))
    : "function" == typeof define && define.amd
    ? define("moment", ["moment"], t)
    : "object" == typeof exports
    ? (exports.moment = t(require("moment")))
    : (e.moment = t(e.moment));
})(window, function(e) {
  return (function(e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function(t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 5))
    );
  })({
    5: function(e, t, n) {
      var o = n(6);
      function r(e) {
        o.locale("".concat(e.toLowerCase(), "-custom"));
      }
      (o.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return e.year() < t.year()
          ? "sameElse"
          : n < -t.weekday()
          ? "lastMonth"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : "sameElse";
      }),
        o.defineLocale("zh-cn-custom", {
          parentLocale: "zh-cn",
          weekdaysShort: [
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六"
          ],
          calendar: {
            lastDay: "[昨天]",
            sameDay: "A h:mm",
            lastWeek: "ddd",
            lastMonth: "l",
            sameElse: "L"
          },
          meridiem: function(e, t, n) {
            return e < 9
              ? "早上"
              : e < 11 && t < 30
              ? "上午"
              : e < 13 && t < 30
              ? "中午"
              : e < 18
              ? "下午"
              : "晚上";
          }
        }),
        o.defineLocale("en-custom", {
          parentLocale: "en",
          weekdaysShort: [
            "Sun.",
            "Mon.",
            "Tue.",
            "Wed.",
            "Thu.",
            "Fri.",
            "Sat."
          ],
          calendar: {
            lastDay: "[Yesterday]",
            sameDay: "A h:mm",
            lastWeek: "ddd",
            lastMonth: "l",
            sameElse: "L"
          },
          meridiem: function(e, t, n) {
            return e < 9
              ? "morning"
              : e < 11 && t < 30
              ? "morning"
              : e < 13 && t < 30
              ? "noon"
              : e < 18
              ? "afternoon"
              : "night";
          }
        }),
        Object.defineProperty(o, "i18n", {
          get: function() {
            return r;
          }
        }),
        (e.exports = o);
    },
    6: function(t, n) {
      t.exports = e;
    }
  });
});
