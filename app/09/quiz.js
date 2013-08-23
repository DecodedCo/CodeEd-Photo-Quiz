var key = "c554239eaca1fb2f2e89c2da0878e954";

function loadQuiz() {
  // get the file questions.json, and call displayQuiz when done
  $.get("questions.json", displayQuiz);
}

function loadPhotos(question) {
  // Construct a URL for accessing flickr
  var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search" +
    "&api_key=" + key +
    "&text=" + question.theme +
    "&per_page=5&format=json&sort=relevance&jsoncallback=?";

  // Get the data at the URL, and log the data returned
  $.getJSON(url, function(data) {
    console.log(data);
  });
}

function displayQuiz(questions) {
  // Find the list of questions with a CSS selector
  var questionList = $("ol");

  // Make a Handlebars template from the tag in our HTML
  var template = Handlebars.compile($("#question").html());

  for (var i = 0; i < questions.length; i++) {
    loadPhotos(questions[i]);

    var answer = questions[i].answer;

    // Make an object to represent the question for the template
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
    };

    // Render the question with the template, and add it to the document
    questionList.html(questionList.html() + template(data));
  }
}

// When the document is ready, call loadQuiz
$(document).on("ready", loadQuiz);
