/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');


var galleryImages = document.querySelectorAll('.gallery-image');

var lightboxContainer = document.getElementById('lightbox-container');
var lightboxFigures = document.querySelectorAll('.lightbox-figure');
var background = document.getElementById('background');

var left = document.getElementById('left');
var right = document.getElementById('right');




/* ======================= disable right click for images ======================= */

for (let i = 0; i < galleryImages.length; i++){
	galleryImages[i].oncontextmenu = function(){
		return false;
	}

	lightboxFigures[i].oncontextmenu = function(){
		return false;
	}
}

/* ========================= event listeners for the mobile navigation ================================ */

	mobileNavIcon.addEventListener('click', function(){
		mobileNav.classList.add('display-mobile');
		main.style.marginTop = '168px';
	});


	closeButton.addEventListener('click', function(){
		mobileNav.classList.remove('display-mobile');
		main.style.marginTop = '2rem';
	});


/* =========================================== lightbox ============================================== */


var index;

// the lightbox should only be functional above 700px;
if (window.matchMedia("(min-width: 700px)").matches){
	for (let i = 0; i < galleryImages.length; i++){
		galleryImages[i].addEventListener('click', function(e){

			index = i;
			
			lightboxFigures[i].classList.remove('hidden');
			background.style.display = 'block';
			lightboxContainer.style.display = 'block';
		})
	}
}

// this should toggle the lightbox on/off if the user resizes the browser
window.addEventListener('resize', function(){
	var mq = window.matchMedia("(min-width: 700px)").matches;

	if (mq){
		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('click', function(e){

				index = i;
				
				lightboxFigures[i].classList.remove('hidden');
				background.style.display = 'block';
				lightboxContainer.style.display = 'block';
			})
		}
	} else {  /* I need another way to do this! */
		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('click', function(e){

				index = i;
				
				lightboxFigures[i].classList.add('hidden');
				background.style.display = 'none';
				lightboxContainer.style.display = 'none';
			})
		}
	}
});

// close the lightbox when the user clicks anywhere outside of the photo
background.addEventListener('click', function(){
	for (var i = 0; i < lightboxFigures.length; i++){
		lightboxFigures[i].classList.add('hidden');
	}
	lightboxContainer.style.display = 'none';
	background.style.display = 'none';
})

 /* ===================== clicking through the lightbox images =============== */

 

 right.addEventListener('click', function(e){

 	var current = lightboxFigures[index];
	var next = lightboxFigures[index + 1];

 	if (index < (lightboxFigures.length - 1)){
 		current.classList.add('hidden');
 		next.classList.remove('hidden');
 		index ++;
 	} else {
 		current.classList.add('hidden');
 		index =  0;		
 		lightboxFigures[0].classList.remove('hidden');
 		
 	}
 
 });

 
 left.addEventListener('click', function(){
 	var current = lightboxFigures[index];
 	var previous = lightboxFigures[index - 1];

 	if (index === 0){
 		current.classList.add('hidden');
 		index = (lightboxFigures.length - 1);		
 		lightboxFigures[(lightboxFigures.length - 1)].classList.remove('hidden');
 		
 	} else {
 		current.classList.add('hidden');
 		previous.classList.remove('hidden');
 		index --;
 	}

 })








