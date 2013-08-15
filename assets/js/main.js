$(function() {
  var offset = 40,
    $htmlbody = $("html, body");

  $(".navbar-nav > li > a").on("click", function(e) {
    e.preventDefault();
    var top = $(this.getAttribute("href")).offset().top - offset;
    $htmlbody.animate({
      scrollTop: top
    })
  });

  $("pre[data-example]").each(function(i, el) {
    var $el = $(el),
      n = $el.data("example"),
      $button = $('<a class="btn btn-primary example-button" target="_blank" href="app/'+n+'/">Run &rarr;</a>');

    $el.before($button);
  })
});
