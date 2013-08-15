$(function() {
  var offset = 40,
    $htmlbody = $("html, body");

  // Scrolling navigation
  $(".navbar-nav > li > a").on("click", function(e) {
    // e.preventDefault();
    var top = $(this.getAttribute("href")).offset().top - offset;
    $htmlbody.animate({
      scrollTop: top
    })
  });

  // Add "run" buttons to examples
  $("pre[data-example]").each(function(i, el) {
    var $el = $(el),
      n = $el.data("example"),
      $button = $('<a class="btn btn-primary example-button" target="_blank" href="app/'+n+'/">Run &rarr;</a>'),
      $container = $('<div class="codeblock-container"></div>');

    $el.before($container);
    $el.appendTo($container);

    $el.before($button);
  })
});

/*

  Include the definitions from the Hacktionary (https://github.com/brianloveswords/hacktionary)
  in Prism's syntax highlighting. When a token is clicked, a popover with the definition is
  shown. Based on the Web Platform Docs plugin: https://github.com/LeaVerou/prism/blob/gh-pages/plugins/wpd/

*/

(function() {
  "use strict";

  if (!self.Prism || !self.Hacktionary) {
    return;
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  if (Prism.languages.markup) {
    Prism.languages.markup.tag.inside.tag.inside['tag-id'] = /[\w-]+/;
  }

  Prism.hooks.add("wrap", function(env) {
    if (env.language === "markup") {

      if (env.type === "tag-id") {
        // Set up for HTML tag names
        var el = Hacktionary.htmlElements[env.content.toLowerCase()] || false;

        if (el !== false && el.desc !== undefined) {
          env.tag = "a";
          env.attributes.href = "#";
          env.attributes["data-hacktionary"] = "htmlElements." + env.content.toLowerCase() + ".desc";
        }
      } else if (env.type === "attr-name") {
        // Set up for HTML attributes
        var attr = env.content.toLowerCase(),
          el = env.parent[0].content[1].content.toLowerCase(),
          elData = Hacktionary.htmlElements[el] || false;

        if (elData !== false && elData.attrs[attr] !== undefined) {
          env.tag = "a";
          env.attributes.href = "#";
          env.attributes["data-hacktionary"] = "htmlElements." + el + ".attrs." + attr;
        } else if (Hacktionary.globalAttributes[attr] !== undefined) {
          env.tag = "a";
          env.attributes.href = "#";
          env.attributes["data-hacktionary"] = "globalAttributes." + attr;
        }
      }
    }
  });

  // Showing/hiding the popovers
  $(document).on("click", "[data-hacktionary]", function(e) {
    e.preventDefault();
    var $el = $(this),
      desc = $el.attr("data-hacktionary").split("."),
      ref = Hacktionary;

    for (var i = 0; i < desc.length; i++) {
      ref = ref[desc[i]];
    }

    if ($el.data("bs.popover") === undefined) {
      $el.popover({
        html: true,
        content: ref,
        container: "body",
        placement: "bottom"
      });

      $el.popover("show");
    } else {
      $el.popover("destroy");
    }

    $(document).one("click", function() {
      $el.popover("destroy");
    });

  });

})();

