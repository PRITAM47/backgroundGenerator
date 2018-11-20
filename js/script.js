var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradientName = document.querySelector("h3");
var button = document.querySelector(".random");


function gradientSelector() {
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + " ) ";
	gradientName.innerHTML = body.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	gradientSelector();
})

color1.addEventListener("input", gradientSelector)

color2.addEventListener("input", gradientSelector)

