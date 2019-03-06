

$(document).ready(function() {

console.log("DOM fully loaded and parsed");
//computer randomly selects a number between 18-120 for player to match

var targetNum = 18 + Math.floor(Math.random() * 120);

//show this number under #numToGuess

$("#target-num").html(targetNum);
console.log("TargetNum is: " + targetNum);


//computer randomly selects a number between 1-12 for each gem

var hemaGem = 1 + Math.floor(Math.random() * 12);
var redGem = 1 + Math.floor(Math.random() * 12);
var topazGem = 1 + Math.floor(Math.random() * 12);
var turqGem = 1 + Math.floor(Math.random() * 12);

//set all variables to 0 (except "Is Active," which is set to active)

var userTotal = 0;
var wins = 0;
var losses = 0;
var isAct = 1;
$("#total-num").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

//reset all variables once game is won/lost

function reset() {
    userTotal = 0;
    targetNum = 18 + Math.floor(Math.random() * 120);
    hemaGem = 1 + Math.floor(Math.random() * 12);
    redGem = 1 + Math.floor(Math.random() * 12);
    topazGem = 1 + Math.floor(Math.random() * 12);
    turqGem = 1 + Math.floor(Math.random() * 12);
    console.log("New TargetNum is: " + targetNum);
    $("#target-num").html(targetNum);
    $("#total-num").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
    isAct = 1;
}

//if else statement for winning or losing. 
//if total === random win.
//if total > random lose.

$("#hide").click(function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });

function winCheck() {
    if (userTotal == targetNum) {
        wins++;
        $("#total-num").html("(You Won)"+"<br>"+"Final Score: " + userTotal); //    
        $("#wins").html(wins);
 //       reset();  I don't want to reset right after the game ends.  I want to examine the final scores
 //       $("#reset-button" ).toggle();  This is not as useful as show/hide.
        $("#reset-button").show();
        isAct = 0;
        alert("YOU WIN!");

    } else if (userTotal > targetNum) {
        losses++;
        $("#total-num").html("(You Lost)"+"<br>"+"Final Score: " + userTotal); //
        $("#losses").html(losses);
 //       reset();
 //       $("#reset-button" ).toggle();
        $("#reset-button").show();
        isAct = 0;
        alert("You lost.");
    }
};

//whenever user clicks (on.click) a gem, the random number is added to total score.
//show this number under #total-num

$("#hema").on("click", function() {
    if (isAct === 0) {
        alert("Hit play again button to keep playing");
    } else {
    userTotal = userTotal + hemaGem;
    console.log("hemaGem is: " + hemaGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
}})

$("#red").on("click", function() {
    if (isAct === 0) {
        alert("Hit play again button to keep playing");
    } else {
    userTotal = userTotal + redGem;
    console.log("redGem is: " + redGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
}})

$("#topaz").on("click", function() {
    if (isAct === 0) {
        alert("Hit play again button to keep playing");
    } else {
    userTotal = userTotal + topazGem;
    console.log("topazGem is: " + topazGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
}})

$("#turq").on("click", function() {
    if (isAct === 0) {
        alert("Hit play again button to keep playing");
    } else {
    userTotal = userTotal + turqGem;
    console.log("turqGem is: " + turqGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
}})

$("#reset-button").on("click", function() {
    reset();
    $("#reset-button").hide();
    isAct = 1;
})





});