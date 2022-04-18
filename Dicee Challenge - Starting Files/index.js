
var dice1 =Math.random() * 6;
dice1 = 1+ Math.floor(dice1);

var diceImg1 = "images/dice" + dice1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImg1);


var dice2 = Math.random() * 6;
dice2 = 1+ Math.floor(dice2);

var diceImg2 = "images/dice" + dice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImg2);


if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Tie!";
}
