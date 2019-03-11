! function (l) {
   l.fn.animatedModal = function (a) {
      var n = l(this),
         o = l.extend({
            modalTarget: n.attr("href").replace("#", ""),
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            zIndexIn: "9999",
            zIndexOut: "-9999",
            color: "#39BEB9",
            opacityIn: "1",
            opacityOut: "0",
            animatedIn: "zoomIn",
            animatedOut: "zoomOut",
            animationDuration: ".6s",
            overflow: "auto",
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {}
         }, a),
         t = l(".close-" + o.modalTarget),
         i = l(n).attr("href"),
         e = l("body").find("#" + o.modalTarget),
         d = "#" + e.attr("id");
      e.addClass("animated"), e.addClass(o.modalTarget + "-off");
      var r = {
         position: o.position,
         width: o.width,
         height: o.height,
         top: o.top,
         left: o.left,
         "background-color": o.color,
         "overflow-y": o.overflow,
         "z-index": o.zIndexOut,
         opacity: o.opacityOut,
         "-webkit-animation-duration": o.animationDuration,
         "-moz-animation-duration": o.animationDuration,
         "-ms-animation-duration": o.animationDuration,
         "animation-duration": o.animationDuration
      };

      function s() {
         e.css({
            "z-index": o.zIndexOut
         }), o.afterClose()
      }

      function m() {
         o.afterOpen()
      }
      e.css(r), n.click(function (a) {
         a.preventDefault(), l("body, html").css({
            overflow: "hidden"
         }), i == d && (e.hasClass(o.modalTarget + "-off") && (e.removeClass(o.animatedOut), e.removeClass(o.modalTarget + "-off"), e.addClass(o.modalTarget + "-on")), e.hasClass(o.modalTarget + "-on") && (o.beforeOpen(), e.css({
            opacity: o.opacityIn,
            "z-index": o.zIndexIn
         }), e.addClass(o.animatedIn), e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", m)))
      }), t.click(function (a) {
         a.preventDefault(), l("body, html").css({
            overflow: "auto"
         }), o.beforeClose(), e.hasClass(o.modalTarget + "-on") && (e.removeClass(o.modalTarget + "-on"), e.addClass(o.modalTarget + "-off")), e.hasClass(o.modalTarget + "-off") && (e.removeClass(o.animatedIn), e.addClass(o.animatedOut), e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", s))
      })
   }
}(jQuery);

