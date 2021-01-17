var slider1 = document.getElementById('slider01');
var slider2 = document.getElementById('slider02');
var slider3 = document.getElementById('slider03');
var button01 = document.getElementsByClassName('button01');
var button02 = document.getElementsByClassName('button02');

slider1.oninput = function () {
    var x = slider1.value;
    var color = "linear-gradient(90deg, rgb(142,181,250)" + x + "%, rgb(191,191,191)" + x + "%)";
    slider1.style.background = color;
}

slider2.oninput = function () {
    var x = slider2.value;
    var color = "linear-gradient(90deg, rgb(142,181,250)" + x + "%, rgb(191,191,191)" + x + "%)";
    slider2.style.background = color;
}

slider3.oninput = function () {
    var x = slider3.value;
    var color = "linear-gradient(90deg, rgb(142,181,250)" + x + "%, rgb(191,191,191)" + x + "%)";
    slider3.style.background = color;
}

function handleClick(event) {
    if ((event.target.classList[1] === "on") || (event.target.classList[2] === "on")) {
        event.target.classList.remove("on");
    }
    else {
        event.target.classList.add("on");
    }
    console.log(event.target.classList);
}


$(function() {
    for (var i = 0 ; i < button01.length ; i++ ) {
        button01[i].addEventListener("click", handleClick);
    }
    for (var j = 0; j < button02.length ; j++){
        button02[j].addEventListener("click", handleClick);
    }
});

