// Retrieve score from localStorage
var oldScore = localStorage.getItem("score");
var oldOutof = localStorage.getItem("outof");

// Check the old score is set:
if (oldScore !== null && oldOutof !== null) {
  $(".last-score").text(oldScore + " / " + oldOutof);
  $(".last-score-message").css("display", "block");
}

$(document).on("click", "button", function(e) {
  ...

  // Save score in localStorage:
  localStorage.setItem("score", score);
  localStorage.setItem("outof", outof)
});