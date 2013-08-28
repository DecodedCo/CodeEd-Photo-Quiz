var key = "c554239eaca1fb2f2e89c2da0878e954";

function loadPhotos(question) {
  // Construct a URL for accessing flickr
  var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search" +
    "&api_key=" + key +
    "&text=" + question.theme +
    "&per_page=3&format=json&sort=relevance&jsoncallback=?";

  // Get the data at the URL, and log the data returned
  $.getJSON(url, function(data) {
    console.log(data);
  });
}

function displayQuiz(questions) {
  ...

  for (var i = 0; i < questions.length; i++) {
    loadPhotos(questions[i]);

    ...
  }
}