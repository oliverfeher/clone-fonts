/* Dark mode function*/
let element = document.body;
let darkLight = document.getElementById("day-night");
let reset = document.getElementById("reset-button");
let layout = document.getElementById("layout-toggle");
let layout2 = "images/grid2.svg"
let customTextBar = document.getElementById("custom-text");
let footerBorder = document.getElementById("footer-container");

let tileBorder = document.getElementsByClassName("border");
let tileBorderArr = Array.from(tileBorder);

let titleArr = document.getElementsByClassName("tile-title");
let tileArr = Array.from(titleArr);


darkLight.onclick = function() {
    element.classList.toggle("dark-mode");
    footerBorder.classList.toggle("footer-border");

    let img = reset.src;
    if (img.indexOf('images/rotating-arrows-circle.svg')!=-1) {
        reset.src  = 'images/rotating-arrows-circle2.svg';
    } else {
       reset.src = 'images/rotating-arrows-circle.svg';
     }

    let img2 = layout.src;
    if (img2.indexOf('images/grid.svg')!=-1) {
        layout.src  = 'images/grid2.svg';
    } else {
       layout.src = 'images/grid.svg';
    }

    for(let i = 0; i < tileBorderArr.length; i++) {
        tileBorderArr[i].classList.toggle("white-border");
        tileBorderArr[i].classList.toggle("black-border");
    }
};




function showMsg() {
    let customText = customTextBar.value;
    for(let i = 0; i < titleArr.length; i++) {
        titleArr[i].innerHTML = customText;
    }
}

reset.onclick = function() {
    let defaultText = "Default text..";
    customTextBar.value = defaultText;
    if(customTextBar.value === defaultText) {
        for(let i = 0; i < titleArr.length; i++) {
            titleArr[i].innerHTML = defaultText;
        }
    }
    
}





/* Add-button change src 
var img3 = addIcon.src;
    if (img3.indexOf('add-button.svg')!=-1) {
        for(i = 0; i < addIcon.legth; i++) {
            img3[i] = "images/add-button2.svg"
        }
    } else {
        for(i = 0; i < addIcon.legth; i++) {
            img3[i] = "images/add-button.svg"
        }
     }
*/


layout.onclick = function() {
    var img = layout.src;
    if(img.indexOf("images/grid.svg")!=-1) {
        layout.src = "images/rows.svg";
    } else {
        layout.src = "images/grid.svg";
    }
}


