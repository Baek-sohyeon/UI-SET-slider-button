$(function (){
    var slider = $('.slider');
    var value = (slider.value - slider.getAttribute('min')) / (slider.getAttribute('max') - slider.getAttribute('min'));
    slider.style.backgroundImage = '-web-gradient(linear, left top, right top,' + 'color-stop(' + value + ', #047a9c),' + 'color-stop('+value+', #c7c7c7)' + ')';
})