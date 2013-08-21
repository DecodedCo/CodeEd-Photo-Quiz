var key = "c554239eaca1fb2f2e89c2da0878e954";

function loadQuiz() {
  $.get("questions.json", displayQuiz)
}

function loadPhotos(question, callback) {
  var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search" +
    "&api_key=" + key +
    "&text=" + question.theme +
    "&per_page=3&format=json&sort=relevance&jsoncallback=?";

  $.getJSON(url, function(data) {
    var photos = data.photos.photo;

    var urls = photos.map(function(photo) {
      return 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server +
        '/' + photo.id + '_' + photo.secret + '.jpg';
    });

    callback(urls, question)
  })
}

function displayQuiz(questions) {

  var questionList = $("ol");

  for (var i = 0; i < questions.length; i++) {
    loadPhotos(questions[i], function(photos, question) {
      var el = $("<li></li>"),
        q = question.question,
        answer = question.answer;

      photos.push(answer);

      var html = '<p>' + q + '</p>';

      for (var j = 0; j < photos.length; j++) {
        html += '<button class="btn btn-default"><img src="' + photos[j] + '"></button>'
      }

      el.html(html);

      el.appendTo(questionList);
    });
  }
}

$(document).on("ready", loadQuiz);
