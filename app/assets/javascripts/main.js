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
	var x = document.getElementById('colored__text');
	if (x !== null) { //Stop its from running on non homepage
		// document.getElementById('colored__text').style.color = randomColors();
		document.getElementById('colored__bg').style.backgroundColor = randomColors();
	}
}
// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//displays email on click
function showEmail() {
  var email = document.getElementById('showEmail'); //Show email
  if (email.style.display === 'inline-block') {
      email.style.display = 'none';
  } else {
      email.style.display = 'inline-block';
  }
}

//display winnie
function showName() {
	var name = document.getElementById('showName');
  if (name.style.display === 'inline-block') {
      name.style.display = 'none';
  } else {
      name.style.display = 'inline-block';
  }
}

//display/hide product design
function showProductdesign() {
  var name = document.getElementById('showProductdesign');
  name.style.display = 'inline-block';
}
function hideProductdesign() {
  var name = document.getElementById('showProductdesign');
  name.style.display = 'none';
}


//display/hide photograhy
function showPhotography() {
  var name = document.getElementById('showPhotography');
  name.style.display = 'inline-block';
}
function hidePhotography() {
  var name = document.getElementById('showPhotography');
  name.style.display = 'none';
}

//display/hide illustration
function showIllustration() {
  var name = document.getElementById('showIllustration');
  name.style.display = 'inline-block';
}
function hideIllustration() {
  var name = document.getElementById('showIllustration');
  name.style.display = 'none';
}

//display/hide generative art
function showGenerativeart() {
  var name = document.getElementById('showGenerativeart');
  name.style.display = 'inline-block';
}
function hideGenerativeart() {
  var name = document.getElementById('showGenerativeart');
  name.style.display = 'none';
}

//display/hide misc
function showMisc() {
  var name = document.getElementById('showMisc');
  name.style.display = 'inline-block';
}
function hideMisc() {
  var name = document.getElementById('showMisc');
  name.style.display = 'none';
}