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
  })
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

    loadPhotos(questions[i])
  }
}

$(document).on("ready", loadQuiz);
