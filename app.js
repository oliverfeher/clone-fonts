/* Dark mode function*/
let element = document.body;
let darkLight = document.getElementById("day-night");
let reset = document.getElementById("reset-button");
let layout = document.getElementById("layout-toggle");
let layout2 = "images/grid2.svg"
let addIcon = document.getElementsByClassName("sizing");


darkLight.onclick = function() {
    element.classList.toggle("dark-mode");

    var img = reset.src;
    if (img.indexOf('images/rotating-arrows-circle.svg')!=-1) {
        reset.src  = 'images/rotating-arrows-circle2.svg';
    } else {
       reset.src = 'images/rotating-arrows-circle.svg';
     }

    var img2 = layout.src;
    if (img2.indexOf('images/grid.svg')!=-1) {
        layout.src  = 'images/grid2.svg';
    } else {
       layout.src = 'images/grid.svg';
    }
    
    var img3 = addIcon.src;
    if (img3.indexOf("images/add-button.svg")!=-1) {
        addIcon.src = "images/add-button2.svg";
    } else {
        addIcon.src = "images/add-button.svg";
    }
}

layout.onclick = function() {
    var img = layout.src;
    if(img.indexOf("images/grid.svg")!=-1) {
        layout.src = "images/rows.svg";
    } else {
        layout.src = "images/grid.svg";
    }
}


