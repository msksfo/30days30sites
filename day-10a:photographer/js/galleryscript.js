/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');


var galleryImages = document.querySelectorAll('.gallery-image');

/* ======================= disable right click for images ======================= */

for (let i = 0; i < galleryImages.length; i++){
	galleryImages[i].oncontextmenu = function(){
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













