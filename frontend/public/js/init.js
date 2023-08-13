jQuery(document).ready(function () {
  "use strict";
  tokyo_tm_projects();
  tokyo_tm_portfolio();
  tokyo_tm_cursor();
  tokyo_tm_popup();
});
function tokyo_tm_projects() {
  "use strict";
  jQuery(".tokyo_tm_portfolio_animation_wrap").each(function () {
    jQuery(this)
      .on("mouseenter", function () {
        if (jQuery(this).data("title")) {
          jQuery(".tokyo_tm_portfolio_titles").html(
            jQuery(this).data("title") +
              '<span class="work__cat">' +
              jQuery(this).data("category") +
              "</span>"
          );
          jQuery(".tokyo_tm_portfolio_titles").addClass("visible");
        }
        jQuery(document).on("mousemove", function (e) {
          jQuery(".tokyo_tm_portfolio_titles").css({
            left: e.clientX - 10,
            top: e.clientY + 25,
          });
        });
      })
      .on("mouseleave", function () {
        jQuery(".tokyo_tm_portfolio_titles").removeClass("visible");
      });
  });
}
function tokyo_tm_portfolio() {
  "use strict";
  if (jQuery().isotope) {
    var list = jQuery(".tokyo_tm_portfolio .portfolio_list");
    var filter = jQuery(".tokyo_tm_portfolio .portfolio_filter ul");
    if (filter.length) {
      filter.find("a").on("click", function () {
        var selector = jQuery(this).attr("data-filter");
        list.isotope({
          filter: selector,
          animationOptions: { duration: 750, easing: "linear", queue: false },
        });
        return false;
      });
      filter.find("a").on("click", function () {
        filter.find("a").removeClass("current");
        jQuery(this).addClass("current");
        return false;
      });
    }
  }
}
function tokyo_tm_cursor() {
  "use strict";
  var myCursor = jQuery(".mouse-cursor");
  if (myCursor.length) {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
}
function tokyo_tm_popup() {
  "use strict";
  jQuery(".gallery_zoom").each(function () {
    jQuery(this).magnificPopup({
      delegate: "a.zoom",
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });
  jQuery(".popup-youtube, .popup-vimeo").each(function () {
    jQuery(this).magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
  jQuery(".soundcloude_link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
}
