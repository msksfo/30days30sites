var mobileNavIcon = document.getElementById('mobile-nav-icon');
var btnClose = document.getElementById('btn-close');
var sideMenu = document.getElementById('side-menu');
var mainBanner = document.getElementById('main-banner');
var mobileLinks = document.querySelectorAll('.mobile-link');



window.onbeforeunload = function(){
	window.scrollTo(0, 0);
}

mobileNavIcon.addEventListener('click', function(){
	sideMenu.style.width = '200px';
	//mainBanner.style.marginLeft = '192px';
});

btnClose.addEventListener('click', function(){
	sideMenu.style.width = 0;
	//mainBanner.style.marginLeft = 0;
});

for (let i = 0; i < mobileLinks.length; i++){
 mobileLinks[i].addEventListener('click', function(){
   sideMenu.style.width = 0;
 });
}