

document.getElementById("reset-button").addEventListener("click", function(){
        document.getElementById("reset-button").style.display="none";
});

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

//set all variables to 0

var userTotal = 0;
var wins = 0;
var losses = 0;
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
}

//if else statement for winning or losing. 
//if total === random win.
//if total > random lose.

function winCheck() {
    if (userTotal == targetNum) {
        wins++;
        $("#total-num").html("FinalScore: " + userTotal); //
        alert("YOU WIN!");
        $("#wins").html(wins);
 //       reset();
        document.getElementById("reset-button").style.display = "block";

    } else if (userTotal > targetNum) {
        losses++;
        $("#total-num").html("FinalScore: " + userTotal); //
        alert("LOSER! LOSER! LOSER!");
        $("#losses").html(losses);
 //       reset();
        document.getElementById("reset-button").display = "block";
    }
};

//whenever user clicks (on.click) a gem, the random number is added to total score.
//show this number under #total-num

$("#hema").on("click", function() {
    userTotal = userTotal + hemaGem;
    console.log("hemaGem is: " + hemaGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
})

$("#red").on("click", function() {
    userTotal = userTotal + redGem;
    console.log("redGem is: " + redGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
})

$("#topaz").on("click", function() {
    userTotal = userTotal + topazGem;
    console.log("topazGem is: " + topazGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
})

$("#turq").on("click", function() {
    userTotal = userTotal + turqGem;
    console.log("turqGem is: " + turqGem + " userTotal is: " + userTotal);
    $("#total-num").html(userTotal);
    winCheck();
})

$("#reset-button").on("click", function() {
    reset()
})


});