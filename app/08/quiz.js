function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  var questionList = $("ol"),
    template = Handlebars.compile($("#question").html());

  for (var i = 0; i < questions.length; i++) {
    var answer = questions[i].answer;

    var data = {
      question: questions[i].question,
      images: [
        {
          url: answer,
          correct: true
        },
        {
          url: answer,
          correct: false
        }
      ]
    }

    questionList.html(questionList.html() + template(data))
  }
}

$(document).on("ready", loadQuiz);
