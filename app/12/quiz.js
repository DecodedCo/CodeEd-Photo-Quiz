var key = "c554239eaca1fb2f2e89c2da0878e954";

function loadQuiz() {
  // get the file questions.json, and call displayQuiz when done
  $.get("questions.json", displayQuiz);
}

function loadPhotos(question, callback) {
  // Construct a URL for accessing flickr
  var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search" +
    "&api_key=" + key +
    "&text=" + question.theme +
    "&per_page=3&format=json&sort=relevance&jsoncallback=?";

  // Get the data at the URL...
  $.getJSON(url, function(data) {
    // ...  then pull out the photos.
    var photos = data.photos.photo;

    // Modify flickr's photo data to an object our template can use
    var urls = photos.map(function(photo) {
      return {
        url: 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg',
        correct: false
      };
    });

    // Let stuff know we're done
    callback(urls, question);
  })
}

function displayQuiz(questions) {
  // Find the list of questions with a CSS selector
  var questionList = $("ol");

  // Make a Handlebars template from the tag in our HTML
  var template = Handlebars.compile($("#question").html());

  // Scores:
  var score = 0;
  var outof = 0;

  // For every question...
  for (var i = 0; i < questions.length; i++) {
    // ... load the photos from Flickr
    loadPhotos(questions[i], function(photos, question) {
      // ... then add the correct photo to the flickr ones
      photos.push({
        url: question.answer,
        correct: true
      });

      // shuffle the photos so they're random
      photos = shuffle(photos);

      // Make an object to represent the question for the template
      var data = {
        question: question.question,
        images: photos
      };

      // Render the question with the template, and add it to the document
      questionList.html(questionList.html() + template(data));
    });
  }

  // When a button (not selected) is clicked...
  $(document).on("click", "button:not(.selected)", function(e) {
    // find the clicked button
    var clicked = $(e.target);

    // find other buttons in the same question
    var buttons = clicked.parent().find("button");

    // Make sure other buttons aren't selected
    buttons.removeClass("selected");

    // Disable other buttons:
    buttons.attr("disabled", "disabled");

    // Make sure the clicked button isn't disabled
    clicked.attr("disabled", null);

    // Select the clicked button
    clicked.addClass("selected");

    // Increment scores:
    outof++;

    if (clicked.hasClass("correct")) {
      score++;
    }

    // Update score display:
    $(".score").text(score + " / " + outof);

  });
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// When the document is ready, call loadQuiz
$(document).on("ready", loadQuiz);
