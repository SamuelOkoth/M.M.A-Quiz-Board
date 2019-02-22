var answers = ["html","All of the above","yes"];
var correctAnswerScore = 25;


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
    $('#incompleteQuestions').text('You have not answered all the questions! Kindly refresh and answer all.');
  } else {
           if (answerOne === answers[0]) {
      score += correctAnswerScore;
    }
           if (answerTwo === answers[1]) {
   score += correctAnswerScore;
    }
           if (answerThree === answers[2]) {
   score += correctAnswerScore;
    }

       $("input[type=radio][name=questionOneOption]:checked").prop('checked', false);
       $("input[type=radio][name=questionTwoOption]:checked").prop('checked', false);
       $("input[type=radio][name=questionThreeOption]:checked").prop('checked', false);
       $('#incompleteQuestions').text('');
       $('#result').text(percentage(score));
}
    event.preventDefault();
});
});
