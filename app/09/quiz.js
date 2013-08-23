var key = "c554239eaca1fb2f2e89c2da0878e954";

function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function loadPhotos(question) {
  var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search" +
    "&api_key=" + key +
    "&text=" + question.theme +
    "&per_page=5&format=json&sort=relevance&jsoncallback=?";

  $.getJSON(url, function(data) {
    console.log(data);
  });
}

function displayQuiz(questions) {
  var questionList = $("ol"),
    template = Handlebars.compile($("#question").html());

  for (var i = 0; i < questions.length; i++) {
    loadPhotos(questions[i])

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
