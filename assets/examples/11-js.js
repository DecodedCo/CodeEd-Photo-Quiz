function displayQuiz(questions) {
  ...

  // When a button is clicked...
  $(document).on("click", "button", function(e) {
    // find the clicked button
    var clicked = $(this);

    // find other buttons in the same question
    var buttons = clicked.parent().find("button");

    // Make sure other buttons aren't selected
    buttons.removeClass("selected");

    // Select the clicked button
    clicked.addClass("selected");
  });
}