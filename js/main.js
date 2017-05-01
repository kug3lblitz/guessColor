var colors = generateRandomColors(6);

var correctPicked = function() {
 hintLine.textContent = "Correct!";
 hintLine.style.color = "white";
}

var youDied = function() {
  hintLine.textContent = "Wrong! Try again.";
  hintLine.style.color = "white";
}

var showHint = function() {
  hintLine.style.color = "white";
  hintLine.textContent = "Here's a hint: " + pickedColor;
}

var squares = document.querySelectorAll(".square");
var hintLine = document.querySelector('#hintLine');
var hintButton = document.getElementById('hintButton');
var pickedColor = chosenColor();

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    //console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      correctPicked();
      changeColors(clickedColor);
    }
    else {
      this.style.background = 'transparent';
      youDied();
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function chosenColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //add number of random colors to array
  for(var i = 0; i <= num; i++) {
    //get random color and push into array
    arr.push(randomRGB());
  }
  //return array
  return arr;
}

function randomRGB() {
  //random red
  var r = Math.floor(Math.random() * 256);
  //random green
  var g = Math.floor(Math.random() * 256);
  //random blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

hintButton.addEventListener("click", function() {
  showHint();
});
