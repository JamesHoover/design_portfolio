/*
	James Hoover
	jameshooverdesign.com
*/

// Set colors on load
$(document).ready(function(){
	randomize();
});

// Radomize text/bg colors
function randomize() {
	var x = randomColors();
	document.getElementById('colored__text').style.color = x;
	document.getElementById('colored__link').style.boxShadow = "inset 0 -4px 0 " + x;
	document.getElementById('colored__bg').style.backgroundColor = randomColors();
}
// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
//displays email on click
function showEmail() {
    var x = document.getElementById('showEmail');
    if (x.style.display === 'inline-block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'inline-block';
    }
}
//no socials, sucker
function socialDisplay() {
	document.getElementById('socialDisplay').innerHTML = 'Fred Flinstone';
}

function showFB() {
    var x = document.getElementById('showFB');
    if (x.style.display === 'inline-block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'inline-block';
    }
}