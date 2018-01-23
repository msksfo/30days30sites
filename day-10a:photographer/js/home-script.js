/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');

/* left/right arrows for image carousel*/
var left = document.getElementById('left');
var right = document.getElementById('right');


/* current slide */
var currentSlide = document.getElementById('current-slide');


/* move the slides along by changing the image file path */
var num = 1;
var imagePrefix = 'images/carousel/carousel' 
var imageSuffix = '.jpg';

var y = 0;

/*  ==================== click event listeners on the left/right arrows ============================== */



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



/* ========================= event listeners for the mobile navigation ================================ */

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
























