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
      return {
        url: 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg',
        correct: false
      }
    });

    callback(urls, question)
  })
}

function displayQuiz(questions) {
  var questionList = $("ol"),
    template = Handlebars.compile($("#question").html());

  for (var i = 0; i < questions.length; i++) {
    loadPhotos(questions[i], function(photos, question) {

      photos.push({
        url: question.answer,
        correct: true
      });

      photos = shuffle(photos);

      var data = {
        question: question.question,
        images: photos
      }

      questionList.html(questionList.html() + template(data))
    });
  }
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$(document).on("ready", loadQuiz);
