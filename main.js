var css = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var bg = document.getElementById('bg');
var random = document.querySelector('#random-color')

function setGradient() {
    bg.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = bg.style.background + ';';
}

// setting color manually
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// randomize the color
random.addEventListener('click', function() {
    bg.style.background = 'linear-gradient(to right, '
    + 'rgb(' + Math.floor(Math.random()*255)
    + ','
    + Math.floor(Math.random()*255)
    + ','
    +Math.floor(Math.random()*255)
    + '),'
    + 'rgb('
    + Math.floor(Math.random()*255)
    + ','
    + Math.floor(Math.random()*255)
    + ','
    +Math.floor(Math.random()*255)
    +')'
    ;
    css.textContent = bg.style.background + ';';
})


function copyColor() {
    // Get the text field
var codeColor = document.getElementById('colorCode');
    // Select the text field
    codeColor.select('colorCode');
    // Copy the text inside the text field
    document.execCommand('Copy');
    // Alert the copied color
    alert('color code copied');

}


