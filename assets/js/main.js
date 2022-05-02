///////////////////////////////////////////////////////////////////////////////////////////
// Numbers of keywords
// 01. AOS
// 02. Scroll Top
// 03. Scroll To Section
// 04.Fake loading
///////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  ///////////////////////////////////////////////////////////////////////////////////////////
  // 01. AOS
  AOS.init();

  ///////////////////////////////////////////////////////////////////////////////////////////
  // 02. Scroll Top
  function up() {
    if ($(window).scrollTop() < 400) {
      $("#scroll_top").hide();
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $("#scroll_top").fadeIn(1000);
      } else {
        $("#scroll_top").fadeOut(1000);
      }
    });
    $("#scroll_top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  }
  up();

  ///////////////////////////////////////////////////////////////////////////////////////////
  // 03. Scroll To Section
  $(".button").click(function () {
    let button = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(button).offset().top,
      },
      500
    );
  });

  ///////////////////////////////////////////////////////////////////////////////////////////
  // 04.Fake loading
  $(window).bind("load", function () {
    $(".overlay, body").addClass("loaded");
    setTimeout(function () {
      $(".overlay").css({ display: "none" });
    }, 3000);
  });

  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function () {
    $(".overlay, body").addClass("loaded");
  }, 60000);
});
