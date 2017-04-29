var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(255, 255, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)'
];

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
}

var squares = document.querySelectorAll(".square");
var hintLine = document.querySelector('#hintLine');
var hintButton = document.getElementById('hintButton');
var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      correctPicked();
    }
    else {
      this.style.background = 'transparent';
      youDied();
    }
  });
}

hintButton.addEventListener("click", function() {
  showHint();
});
