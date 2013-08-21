function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  console.log(questions);
}

$(document).on("ready", loadQuiz);
