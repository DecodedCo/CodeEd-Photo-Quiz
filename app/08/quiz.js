function loadQuiz() {
  // get the file questions.json, and call displayQuiz when done
  $.get("questions.json", displayQuiz);
}

function displayQuiz(questions) {
  // Find the list of questions with a CSS selector
  var questionList = $("ol");

  // Make a Handlebars template from the tag in our HTML
  var template = Handlebars.compile($("#question").html());

  // Loop through all the questions
  for (var i = 0; i < questions.length; i++) {
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
