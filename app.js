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


/*Dark Mode Function*/
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



/* TextBar Function*/
function showMsg() {
    let customText = customTextBar.value;
    for(let i = 0; i < titleArr.length; i++) {
        titleArr[i].innerHTML = customText;
    }
}
/* Reset button Function*/
reset.onclick = function() {
    let defaultText = "Default text..";
    customTextBar.value = defaultText;
    if(customTextBar.value === defaultText) {
        for(let i = 0; i < titleArr.length; i++) {
            titleArr[i].innerHTML = defaultText;
        }
    }
    
}

/* Layout button function*/

layout.onclick = function() {
    let img = layout.src;
    let gridContainer = document.getElementById("grid-container");
    if(img.indexOf("images/grid.svg")!=-1) {
        layout.src = "images/rows.svg";
        gridContainer.style.gridTemplateColumns = "auto";
        gridContainer.style.width = "70%";
        for(let i = 0; i < tileBorderArr.length; i++) {
            tileBorderArr[i].style.marginRight = "0px"
        }
        
    } else {
        layout.src = "images/grid.svg";
        gridContainer.style.gridTemplateColumns = "auto auto auto auto";
        gridContainer.style.width = "90%";
        for(let i = 0; i < tileBorderArr.length; i++) {
            tileBorderArr[i].style.marginRight = "20px"
        }
    }
}

/* Font size selector*/
let fontSize = document.getElementById("font-size-selector");
let tileText = document.getElementsByClassName("tile-title");
let tileTextArr = Array.from(tileText);

const showValue = () => {
    if(fontSize.options[fontSize.selectedIndex].value === "70px") {
        for(let i = 0; i < tileTextArr.length; i++) {
            tileTextArr[i].style.fontSize = "70px";
        }
    } else if(fontSize[fontSize.selectedIndex].value === "60px") {
        for(let i = 0; i < tileTextArr.length; i++) {
            tileTextArr[i].style.fontSize = "60px";
        }
    }  else if(fontSize[fontSize.selectedIndex].value === "50px") {
        for(let i = 0; i < tileTextArr.length; i++) {
            tileTextArr[i].style.fontSize = "50px";
        }
    }  else if(fontSize[fontSize.selectedIndex].value = "40px") {
        for(let i = 0; i < tileTextArr.length; i++) {
            tileTextArr[i].style.fontSize = "40px";
        }
    }
};


