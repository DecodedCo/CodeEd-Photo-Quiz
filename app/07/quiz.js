function loadQuiz() {
  // get the file questions.json, and call displayQuiz when done
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  console.log(questions);
}

// When the document is ready, call loadQuiz
$(document).on("ready", loadQuiz);
