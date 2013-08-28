// Scores:
var score = 0;
var outof = 0;

// When a button (not selected) is clicked...
$(document).on("click", "button", function(e) {
  var clicked = $(this);
  var buttons = clicked.parent().find("button");
  buttons.removeClass("selected");
  clicked.addClass("selected");

  // Disable other buttons:
  buttons.attr("disabled", "disabled");

  // Increment scores:
  outof++;
  if (clicked.hasClass("correct")) {
    score++;
  }
  // Update score display:
  $(".score").text(score + " / " + outof);
});