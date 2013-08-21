function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  var questionList = $("ol");

  for (var i = 0; i < questions.length; i++) {
    var el = $("<li></li>"),
      q = questions[i].question,
      answer = questions[i].answer;

    html = '<p>' + q + '</p>' +
      '<button class="btn btn-default"><img src="' + answer + '"></button>';

    el.html(html);

    el.appendTo(questionList);
  }
}

$(document).on("ready", loadQuiz);
