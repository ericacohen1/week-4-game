$(document).ready(function(){
// declaring variables...
// declare wins variable and set equal to 0
var wins = 0;
// declare losses variable and set equal to 0
var losses = 0;
// generating a random number in JS between two numbers-->Math.floor(Math.random()*(max-min+1)+min
// computer generate random number between 19-120
var computerRandomNumber = Math.floor(Math.random() * 100) + 19;
// assign random value between 1-12 to pink jewel
var pinkJewel = Math.floor(Math.random() * 12) + 1;
// assign random value between 1-12 to blue jewel
var blueJewel = Math.floor(Math.random() * 12) + 1;
// assign random value between 1-12 to yellow jewel
var yellowJewel = Math.floor(Math.random() * 12) + 1;
// assign random value between 1-12 to green jewel
var greenJewel = Math.floor(Math.random() * 12) + 1;
// var for players current score
var score = 0;

var updateScore = function(){
    $(".cummulativeScore").empty();
    $(".cummulativeScore").append(score);
    $("#myWins").empty();
    $("#myWins").append(wins);
    $("#myLosses").empty();
    $("#myLosses").append(losses);
}

// new game
function newGame() {
    score = 0;
    $(".computerRandomNumber").empty();
    $(".computerRandomNumber").append(computerRandomNumber);
    computerRandomNumber = Math.floor(Math.random() * 100) + 19;
    pinkJewel = Math.floor(Math.random() * 12) + 1;
    blueJewel = Math.floor(Math.random() * 12) + 1;
    yellowJewel = Math.floor(Math.random() * 12) + 1;
    greenJewel = Math.floor(Math.random() * 12) + 1;
    updateScore();
}


//  if/else statement
var game = function (){
    // if players score counter equals the computer generated random number game over, player wins
    if (score === computerRandomNumber) {
        // wins ++
        wins++;
        alert("Winner!!!");
        // new game begins
        newGame();
    }
    // else if players score counter > computer generated number, game over, player loses
    else if(score > computerRandomNumber) {
        // losses ++;
        losses++;
        // new game begins
        newGame();
    }   
    else {
        updateScore();
    }
    }

    // click events
    $("#pinkCrystal").click(function() {
        score = score + pinkJewel;
        game();
    });
    $("#blueCrystal").click(function() {
        score = score + blueJewel;
        game();
    })
    $("#yellowCrystal").click(function() {
        score = score + yellowJewel;
        game();
    })
    $("#greenCrystal").click(function() {
        score = score + greenJewel;
        game();
    })

});