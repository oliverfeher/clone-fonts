/* Dark mode function*/
let element = document.body;
let darkLight = document.getElementById("day-night");


darkLight.onclick = function() {
    element.classList.toggle("dark-mode");
    document.getElementById("reset-button").src = "images/rotating-arrows-circle2.svg"
    document.getElementById("layout-toggle").src = "images/grid2.svg"
};

