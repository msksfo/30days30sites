
var fadeInNav = document.getElementById('fadein-nav');

var standardNav = document.getElementById('standard-nav');
var navHeight = standardNav.offsetHeight;
var windowHeight = window.innerHeight;

var mobileNav = document.getElementById('mobile-nav');
var mobileNavHeight = mobileNav.offsetHeight;

var mq = window.matchMedia("(max-width: 599px)").matches;

// var reflections = document.getElementById('reflections');

var shootingStar = document.getElementById('shooting-star');

$(document).ready(function(){

	$('.memoriam-text').fadeIn(4000);
	
    setTimeout(function(){
    	$('#memoriam').fadeOut({
    		duration: 6000,
    		queue: false
    	});
    }, 4000);
    

    if (mq){
      mobileNav.classList.add('animation');
    } else {
      //standardNav.classList.add('animation');
      fadeInNav.classList.add('animation');
    }

})



   if (mq){
    console.log('this is the mobile view');
   	//mobileNav.classList.add('animation');
   	//standardNav.style.display = 'none';
    
   	window.addEventListener('scroll', function(){

   		if ( (window.scrollY >= windowHeight - mobileNavHeight) && (window.scrollY < shootingStar.offsetTop - mobileNavHeight) ){
   			mobileNav.style.display = 'flex';
   			mobileNav.style.opacity = '1';
   			mobileNav.style.backgroundColor = '#010126';
   		} else if (window.scrollY >= (shootingStar.offsetTop - mobileNavHeight) ) {
   			mobileNav.style.display = 'none';
   			mobileNav.classList.remove('animation');
   		} else {
   			mobileNav.style.display = 'flex'
   			mobileNav.style.backgroundColor = 'transparent';
   		}
   		
   	});
    
   } else {
    console.log('this is the desktop view');
   	//standardNav.classList.add('animation');
   	//fadeInNav.classList.add('animation');
   	//mobileNav.style.display = 'none';
   	window.addEventListener('scroll', function(){

   		if ( (window.scrollY >= windowHeight - navHeight) && (window.scrollY < shootingStar.offsetTop - navHeight) ){
   			standardNav.style.display = 'block';
   			standardNav.style.opacity = '1';
   			fadeInNav.style.opacity = '1';
   			standardNav.style.backgroundColor = '#010126';
   		}  else if (window.scrollY >= (shootingStar.offsetTop - navHeight)){
   			standardNav.style.display = 'none';
   			standardNav.classList.remove('animation');
   			fadeInNav.classList.remove('animation');

   		} else {
   			standardNav.style.display = 'block';
   			fadeInNav.style.opacity = '1';
   			standardNav.style.backgroundColor = 'transparent';
   		}
   		
   	});
   }


   var mobileNavIcon = document.getElementById('mobile-nav-icon');
   var btnClose = document.getElementById('btn-close');
   var sideMenu = document.getElementById('side-menu');
   var mainBanner = document.getElementById('main-banner');


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


