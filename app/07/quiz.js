function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  
} 

$(document).on("ready", loadQuiz);
