var answers = ["html","All of the above","yes"];
var pointPerCorrect = 25;


function percentage(score) {
return "You scored" +parseInt((score / 75) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {
