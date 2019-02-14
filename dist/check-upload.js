!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("checkUpload", [], t)
    : "object" == typeof exports
    ? (exports.checkUpload = t())
    : (e.checkUpload = t());
})(window, function() {
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
      n((n.s = 0))
    );
  })([
    function(e, t) {
      e.exports = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          o = { message: "", error: 0, validate: !0 };
        if ("[object File]" === Object.prototype.toString.call(e)) {
          void 0 === n && (n = 1024e3);
          var r = !0,
            i = "",
            a = e.name.lastIndexOf(".");
          -1 !== a && (i = e.name.substring(a));
          var c = i ? i.substring(1) : e.type && e.type.split("/")[0];
          e.type &&
            t &&
            ((r = t.split(",").some(function(t) {
              return (
                (t = t.trim()) &&
                (new RegExp("^".concat(t)).test(e.type) ||
                  new RegExp("^".concat(t)).test(i))
              );
            })),
            void 0 === n &&
              (/^\.(png|jpe?g|gif|svg|webp)/.test(i) || /^image/.test(e.type)
                ? (n = 10240)
                : (/^\.(ogg|mp3|wav|flac|aac)/.test(i) ||
                    /^audio/.test(e.type)) &&
                  (n = 102400)));
          var u = !0;
          if (
            (n && (u = e.size / 1024 < n),
            r ||
              ((o.message = "只能上传".concat(c, "!")),
              (o.error = 1),
              (o.validate = !1)),
            !u)
          ) {
            var l = n >= 1024 ? "".concat(n / 1024, "M") : "".concat(n, "KB");
            (o.message = "上传".concat(c, "大小不能超过").concat(l, "!")),
              (o.error = 2),
              (o.validate = !1);
          }
        } else
          (o.message = "file参数必须为File数据类型"),
            (o.error = 3),
            (o.validate = !1);
        return o;
      };
    }
  ]);
});
