
$(document).ready(function() {
var random_result;
var win = 0;
var loss = 0;
var count;

var resetandStart = function () {
$(".crystals").empty();
console.log(loss);
random_result = Math.floor(Math.random() * 60)+30;
count = 0;
console.log(random_result);

$("#random-number").text("Number to guess is " + random_result);
$("#current-score").text(count);

for (i = 0; i < 4; i++) {
    var randomValue = Math.floor(Math.random() * 10) + 1;
    
    var crystalImage = $("<img>");

    crystalImage.addClass("crystal-image");

    crystalImage.attr("src", "https://p.luckyretail.com/Uploadfile/20160530/002464/002464.jpg");
    
    crystalImage.attr("crystal-value", randomValue);

    $(".crystals").append(crystalImage);
    console.log(randomValue);
}
}

resetandStart();


$(document).on("click", ".crystal-image", function(){
    var number = parseInt($(this).attr("crystal-value"));
    count += number;
    $("#current-score").text(count);

    if(count === random_result) {
        win++;
        $("#wins").text("Wins: " + win);
        alert("You Won!");
        count === 0;
        resetandStart();
    }

    else if (count > random_result) {
        loss++;
        console.log(loss);
        $("#losses").text("Losses: " + loss);
        alert("You Lost!");
        count === 0;
        resetandStart();
    }

})
})