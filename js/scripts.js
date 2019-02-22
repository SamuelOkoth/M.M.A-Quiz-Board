var answers = ["html","All of the above","yes"];
var pointPerCorrect = 25;


function percentage(score) {
return "You scored" +parseInt((score / 75) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
        var answerOne = ($("input[type=radio][name=questionOneAnswer]:checked").val());
        var answerTwo = ($("input[type=radio][name=questionTwoAnswer]:checked").val());
        var answerThree = ($("input[type=radio][name=questionThreeAnswer]:checked").val());

        if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
    $('#questionsIncomplete').text('You have not answered all the questions!');
    $('#questionsIncomplete').fadeOut(9500);
  } else {
           if (answerOne === answers[0]) {
      score += pointPerCorrect;
    }
           if (answerTwo === answers[1]) {
   score += pointPerCorrect;
    }
           if (answerThree === answers[2]) {
   score += pointPerCorrect;
    }

    
