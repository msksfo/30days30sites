/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');

var galleryImages = document.querySelectorAll('.gallery-image');
var galleryNames = document.querySelectorAll('.gallery-name');

var mq = window.matchMedia("(min-width: 700px)").matches;



/* ========================= event listeners for the mobile navigation ================================ */


mobileNavIcon.addEventListener('click', function(){
	mobileNav.classList.add('display-mobile');
	main.style.marginTop = '168px';
});


closeButton.addEventListener('click', function(){
	mobileNav.classList.remove('display-mobile');
	main.style.marginTop = '2rem';
});



/* ======================== event listeners for the galleries ================================  */



if (window.matchMedia("(max-width: 699px)").matches) {

	for (let i = 0; i < galleryImages.length; i++){
			galleryNames[i].style.opacity = '1';		
	}
    
} else {
	    for (let i = 0; i < galleryImages.length; i++){
				galleryNames[i].style.opacity = '0';		
		}

		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('mouseover', function(){
				galleryNames[i].style.opacity = '1';
			})
		}


		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('mouseout', function(){
				galleryNames[i].style.opacity = '0';
			})
		}

}

/*

if (matchMedia) {
	const mq = window.matchMedia("(min-width: 700px)").matches;
	mq.addEventListener(WidthChange);
	WidthChange(mq);
}

function WidthChange(mq){
	for (let i = 0; i < galleryImages.length; i++){
		galleryImages[i].addEventListener('mouseover', function(){
			galleryNames[i].style.opacity = '1';
		})
	}


	for (let i = 0; i < galleryImages.length; i++){
		galleryImages[i].addEventListener('mouseout', function(){
			galleryNames[i].style.opacity = '0';
		})
	}
}


*/



window.addEventListener('resize', function(){
	if (mq){
		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('mouseover', function(){
				galleryNames[i].style.opacity = '1';
			})
		}


		for (let i = 0; i < galleryImages.length; i++){
			galleryImages[i].addEventListener('mouseout', function(){
				galleryNames[i].style.opacity = '0';
			})
		}
	} else {
		for (let i = 0; i < galleryImages.length; i++){
			galleryNames[i].style.opacity = '1';		
		}
	}
})

























