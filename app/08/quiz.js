function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function displayQuiz(questions) {
  var questionList = $("ol"),
    template = Handlebars.compile($("#question").html());

  for (var i = 0; i < questions.length; i++) {
    var el = $("<li></li>");

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

    el.html(template(data));

    el.appendTo(questionList);
  }
}

$(document).on("ready", loadQuiz);
