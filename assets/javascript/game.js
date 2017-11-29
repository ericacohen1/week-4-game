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

}

// new game
function newGame() {
    score = 0;
    computerRandomNumber = Math.floor(Math.random() * 100) + 19;
    pinkJewel = Math.floor(Math.random() * 12) + 1;
    blueJewel = Math.floor(Math.random() * 12) + 1;
    yellowJewel = Math.floor(Math.random() * 12) + 1;
    greenJewel = Math.floor(Math.random() * 12) + 1;
    updateScore();
}
// click event to for pink jewel 
    // this will add the crystals points to the users score counter
// click event to for blue jewel
// click event to for yellow jewel
// click event to for green jewel

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
        losses--;
        // new game begins
        newGame();
    }   
    else {
        updateScore();
    }
    }

});