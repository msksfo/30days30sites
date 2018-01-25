/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');

/* left/right arrows for image carousel*/
var left = document.getElementById('left');
var right = document.getElementById('right');

var y = 0;

var carouselImages = document.querySelectorAll('.carousel-image'); // figure elements


/* ======================== disable right click for images ====================== */

for (let i = 0; i < carouselImages.length; i++){
	carouselImages[i].oncontextmenu = function(){
		return false;
	}
}

/*  ==================== click event listeners on the left/right arrows ============================== */


var index = 0;

right.addEventListener('click', function(){
	var current = carouselImages[index];
	var next = carouselImages[index + 1];

	if (index < (carouselImages.length - 1)){
		current.classList.add('hidden');
		next.classList.remove('hidden');
		index ++;
	} else {
		current.classList.add('hidden');
		index =  0;		
		carouselImages[0].classList.remove('hidden');
		
	}
	
})

left.addEventListener('click', function(){
	var current = carouselImages[index];
	var previous = carouselImages[index - 1];

	if (index === 0){
		current.classList.add('hidden');
		index = (carouselImages.length - 1);		
		carouselImages[(carouselImages.length - 1)].classList.remove('hidden');
		
	} else {
		current.classList.add('hidden');
		previous.classList.remove('hidden');
		index --;
	}

})

/*

this was my intial code for the carousel. not a great way of doing it, because alt text could not be differet 
for each photo. also becasue if the user resized browser from desktop size to < 700px, there would be a 
duplicate photo in the spot of the first image

//current slide 
var currentSlide = document.getElementById('current-slide');


 //move the slides along by changing the image file path 
var num = 1;
var imagePrefix = 'images/carousel/carousel' 
var imageSuffix = '.jpg';

left.addEventListener('click', function(){

	if ( num === 1){
		num = 7;
		currentSlide.src = imagePrefix + num + imageSuffix;
	} else {
		currentSlide.src = imagePrefix + (num - 1) + imageSuffix;
		num --;
	}
});

right.addEventListener('click', function(){
	if (num <= 6){
		currentSlide.src = imagePrefix + (num + 1) + imageSuffix;

		console.log(currentSlide.alt);
		
		num ++;
	} else {
		num = 1;
		currentSlide.src = imagePrefix + num + imageSuffix;
	}
	
});
*/


/* ========================= event listeners for the mobile navigation ================================ */

/* this is still not working! I want the page to stay wherever it was when the user 
closes the mobile menu. (currently it scrolls to the top)  */

window.addEventListener('scroll', function(){
	y = this.scrollY;
});

mobileNavIcon.addEventListener('click', function(){
	mobileNav.classList.add('display-mobile');
	
});


closeButton.addEventListener('click', function(){
	mobileNav.classList.remove('display-mobile');
	window.scrollTo(0, y);

});
























