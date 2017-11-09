;
(
  function () {
    $(window).resize(function () {
      $(".side-bar").width($(".outline").width());
      $(".avatar").width($(".outline").width() - 20);
      $(".avatar").height($(".outline").width() - 20);
    });
    $(window).resize();

    $(".side-bar").affix({
      offset: {
        top: $(".side-bar").offset().top - 75,
        bottom: ($("footer").outerHeight(true)) + 40,
      }
    });
  }
)();