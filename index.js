//create Random Number 1
var rand1 = Math.floor(Math.random() * 6 + 1);
// create Random Number 2
var rand2 = Math.floor(Math.random() * 6 + 1);

//Array Image 1
var array1 = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];
//Array Image 2
var array2 = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

//Select image holder 1 and pick it random
var randImage1 = array1[rand1 - 1];
document.querySelector(".img1").setAttribute("src", randImage1);
//Select image holder 2 and pick it random
var randImage2 = array2[rand2 - 1];
document.querySelector(".img2").setAttribute("src", randImage2);

if (rand1 > rand2) {
  document.querySelector(".result").innerText = "player 1 Won";
} else if (rand2 > rand1) {
  document.querySelector(".result").innerText = "player 2 Won";
  
} else {
  document.querySelector(".result").innerText = "Draw";
}
