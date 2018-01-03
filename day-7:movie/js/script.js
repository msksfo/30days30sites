// variables to control the trailer modal
var trailerLink = document.getElementById('trailer-link');
var mobileTrailerLink = document.getElementById('mobile-trailer-link');
var trailerModal = document.getElementById('trailer-modal');
var closeButton = document.getElementById('closeButton');

// variables to control the mobile navigation  modal
var hamburgerModal = document.getElementById('hamburger-modal');
var menuLink = document.getElementById('menu-link');      // this is the word 'menu'
var mobileNav = document.getElementById('mobile-nav');    // this is the hamburger icon

// variables to control the synopsis modal
var closeSynopsisButton = document.getElementById('close-synopsis-button');
var synopsisModal = document.getElementById('synopsis-modal');
var mobileSynopsisLink = document.getElementById('mobile-synopsis-link');



 /* =====================  event handlers for the trailer modal =================================== */

trailerLink.addEventListener('click', function(){
	trailerModal.style.display = 'block';
});

mobileTrailerLink.addEventListener('click', function(){
	hamburgerModal.style.display = 'none';
	trailerModal.style.display = 'block';
});

closeButton.addEventListener('click', function(){
	trailerModal.style.display = 'none';
});

/*
closeMobileButton.addEventListener('click', function(){
	trailerModal.style.display = 'none';
});
*/

/* ========================== event handlers for the mobile navigation modal ============================ */

menuLink.addEventListener('click', function(){
	hamburgerModal.style.display = 'block';
});

mobileNav.addEventListener('click', function(){
	hamburgerModal.style.display = 'block';
});

/* ============================ event handlers for the synopsis modal ============================== */

closeSynopsisButton.addEventListener('click', function(){
	synopsisModal.style.display = 'none';
});

mobileSynopsisLink.addEventListener('click', function(){
	hamburgerModal.style.display = 'none';
	synopsisModal.style.display = 'block';
});

























