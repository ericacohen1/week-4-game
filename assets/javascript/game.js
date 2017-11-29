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
// var for players current score at beg. of game
var score = 0;

// click event to for pink jewel 
    // this will add the crystals points to the users score counter
// click event to for blue jewel
// click event to for yellow jewel
// click event to for green jewel

//  if/else statement
    // if players score counter equals the computer generated random number game over, player wins
        // wins ++
        // new game begins
            // computer generates new random number
            // new hidden values of crystals generated
    // else if players score counter > computer generated number, game over, player loses
        // losses ++;
        // new game begins
            // computer generates new random number
            // new hidden values of crystals generated