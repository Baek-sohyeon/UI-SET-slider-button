var slider = document.getElementById('slider01');

slider.oninput = function () {
    var x = slider.value;
    var color = "linear-gradient(90deg, rgb(142,181,250)" + x + "%, rgb(191,191,191)" + x + "%)";
    slider.style.background = color;
}
