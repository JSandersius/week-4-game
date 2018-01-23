// Generate a set of four random numbers that are between 1-12 to be assigned to each button

// The target number will be displayed in target number box

// If the player correctly guesses target number, then the player wins

// If the player exeeds the target value of the target number, the player loses

// 
var buttonValues
var targetValue
var gemOne = (Math.random() * 120) + 19;
var gemTwo = (Math.random() * 120) + 19;
var gemThree = (Math.random() * 120) + 19;
var gemFour = (Math.random() * 120) + 19;

//Store Data in an attribute

// Generate a random number between 19-120 to display as target number
$("#targetNumberBox").append(Math.floor(Math.random() * 120) + 19);


$(document).ready(function() {

    $("#gem1").click(function() {
        $("#currentValueBox").text("save")
    });

    $("#gem2").click(function() {
        $("#currentValueBox").text("save")
    });

    $("#gem3").click(function() {
        $("#currentValueBox").text("save")
    });

    $("#gem4").click(function() {
        $("#currentValueBox").text("save")
    });

});



// Generate a set of four random numbers that are between 1-12 to be assigned to each button