function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  for (var i = 0; i < questions.length;l )
}

$(document).on("ready", loadQuiz);
