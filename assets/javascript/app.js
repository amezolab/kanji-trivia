var panel = $("#quiz-block");

// Question set
var questions = [{
  question: "Select the Kanji for Rain",
  answers: ["雨", "雲", "休", "鹿"],
  correctAnswer: "雨"
}, {
  question: "Select the Kanji Compound for Tokyo",
  answers: ["中国", "韓国", "米国", "東京"],
  correctAnswer: "東京"
}, {
  question: "Select the Kanji Compound for University",
  answers: ["学校", "大学", "高校", "中学校"],
  correctAnswer: "大学"
}, {
  question: "Select the Kanji Compound for Train"
  answers: ["自転車", "飛行機", "電車", "車"],
  correctAnswer: "電車"
}, {
  question: "Select the Kanji Compound for Japan",
  answers: ["米国", "墨西哥", "日本", "中国"],
  correctAnswer: "日本"
}, {
  question: "Select the Kaji Compound for South Korea",
  answers: ["韓国", "関係", "北朝鮮", "日本"],
  correctAnswer: "韓国"
}, {
  question: "Select the Kanji Compund for China",
  answers: ["墨西哥", "飛行機", "自転車", "中国"],
  correctAnswer: "中国"
}, {
  question: "Select the Kanji Compound for United States",
  answers: ["", "北朝鮮", "米国", "日本"],
  correctAnswer: "米国"
}];


var timer;

var trivia = {

  correct: 0,
  incorrect: 0,
  counter: 180,

  countdown: function() {
    trivia.counter--;
    $("#counter-number").html(trivia.counter);
    if (trivia.counter === 0) {
      trivia.done();
    }
  },

  start: function() {
    timer = setInterval(trivia.countdown, 1000);

  

$(document).on("click", "#start", function() {
  trivia.start();
});


$(document).on("click", "#done", function() {
  trivia.done();
});
