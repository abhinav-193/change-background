var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function change() {
    body.style.background = 
    "linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",change);
color2.addEventListener("input",change);
