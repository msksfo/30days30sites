/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');
var main = document.getElementById('main');



/* ========================= event listeners for the mobile navigation ================================ */




	mobileNavIcon.addEventListener('click', function(){
		mobileNav.classList.add('display-mobile');
		main.style.marginTop = '168px';
	});


	closeButton.addEventListener('click', function(){
		mobileNav.classList.remove('display-mobile');
		main.style.marginTop = '2rem';
	});













