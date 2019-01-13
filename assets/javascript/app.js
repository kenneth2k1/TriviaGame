var trivQues = [
    {
      ques: "How many electrons does a hydrogen atom have?",
      ans: {
        a: '1',
        b: '8',
        c: '20'
      },
      correctAnswer: 'a'
    },
    {
      ques: "A blunderbuss is an obsolete type of what?",
      ans: {
        a: "firearm",
        b: "building",
        c: "movie"
      },
      correctAnswer: 'a'
    },
    {
      ques: "How much does homework suck?",
      ans: {
          a: "a little bit",
          b: "a lot",
          c: "more than anything",
      },
      correctAnswer: 'c'
    }
  ];

// VARIABLES and functions for timer
var intervalId;
var timerNum = 7;
var clockRunning = false;
var currQues = 0;
var wrongAns = 0;
var rightAns = 0;
var answerString;

$("#startBtn").on("click", function() {
  $("#startBtn").hide();
  $("#timerDiv").html("<h2 class='text-center'>" + timerNum + "</h2>");
  $("#quesDiv").append("<h2 class='text-center'>" + trivQues[currQues].ques + "</h2>");

  answerString = `<div class='ans' id='a' onclick='myGuess("a");'><h3 class='text-center'>a: ${trivQues[currQues].ans.a}</h3></div> <div class='ans'  id='b' onclick='myGuess("b");'><h3 class='text-center'> b: ${trivQues[0].ans.b}</h3></div> <div class='ans' id='c' onclick='myGuess("c");'><h3 class='text-center'>c: ${trivQues[0].ans.c}</h3></div>`

  $("#ansDiv").append(answerString);
  run();
});

function run() {
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
clockRunning = true;


}

function stop() {
clearInterval(intervalId);
clockRunning = false;
}

function decrement() {
timerNum--;
$("#timerDiv").html("<h2 class='text-center'>" + timerNum + "</h2>");

if (timerNum === 0) {
    timerNum = 3;
    $("#timerDiv").hide();
    $("#quesDiv").html("<h3 class='text-center'>Time's up!</h3>");
    $("#ansDiv").html("<h3 class='text-center'>The correct answer is " + trivQues[currQues].correctAnswer + "</h3>");
    currQues++;
    if(currQues > 3){
      $("#quesDiv").html("<h3 class='text-center'>Game over. Thanks for playing!</h3>");
      $("#ansDiv").html("<h3 class='text-center'>Correct answers: " + rightAns + "</h3>");
      $("#ansDiv").append("<h3 class='text-center'>Wrong answers: " + wrongAns + "</h3>");
      stop();
    } else {
      timerNum = 30
      nextQues();

    }
  }
}


function nextQues(){
if(currQues > 3){
  $("#timerDiv").hide();
    $("#quesDiv").html("<h3 class='text-center'>Game over. Thanks for playing!</h3>");
    $("#ansDiv").html("<h3 class='text-center'>Correct answers: " + rightAns + "</h3>");
    $("#ansDiv").append("<h3 class='text-center'>Wrong answers: " + wrongAns + "</h3>");
    stop();
  } else {
    timerNum = 30;
    $("#timerDiv").show();
    $("#timerDiv").html("<h2 class='text-center'>" + timerNum + "</h2>");
    $("#quesDiv").html("<h2 class='text-center'>" + trivQues[currQues].ques + "</h2>");

    answerString = `<div class='ans' id='a' onclick='myGuess("a");'><h3 class='text-center'>a: ${trivQues[currQues].ans.a}</h3></div> <div class='ans'  id='b' onclick='myGuess("b");'><h3 class='text-center'> b: ${trivQues[currQues].ans.b}</h3></div> <div class='ans' id='c' onclick='myGuess("c");'><h3 class='text-center'>c: ${trivQues[currQues].ans.c}</h3></div>`

    $("#ansDiv").html(answerString);
  }
}

function myGuess(guess){
    console.log(guess + ' ' + trivQues[currQues].correctAnswer);
    if(guess == trivQues[currQues].correctAnswer){
      $("#quesDiv").html("<h3 class='text-center'>you're right!</h3>");
      $("#ansDiv").html("");
      $("#timerDiv").hide();
      timerNum = 3;
      rightAns++;
      run();
    } else {
      $("#quesDiv").html("<h3 class='text-center'>you're wrong!</3>");
      $("#ansDiv").html("<h3 class='text-center'>The correct answer is " + trivQues[currQues].correctAnswer + "</h3>");
      $("#timerDiv").hide();
      timerNum = 3;
      wrongAns++;
      run();
    }
  }