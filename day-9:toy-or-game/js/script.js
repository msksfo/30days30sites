var mobileNavIcon = document.getElementById('mobile-nav-icon');
var btnClose = document.getElementById('btn-close');
var sideMenu = document.getElementById('side-menu');
var mainBanner = document.getElementById('main-banner');


mobileNavIcon.addEventListener('click', function(){
	sideMenu.style.width = '200px';
	//mainBanner.style.marginLeft = '192px';
});

btnClose.addEventListener('click', function(){
	sideMenu.style.width = 0;
	mainBanner.style.marginLeft = 0;
});