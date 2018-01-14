
var fadeInNav = document.getElementById('fadein-nav');

var standardNav = document.getElementById('standard-nav');
var navHeight = standardNav.offsetHeight;
var windowHeight = window.innerHeight;

var reflections = document.getElementById('reflections');

$(document).ready(function(){

	$('.memoriam-text').fadeIn(4000);
	
    setTimeout(function(){
    	$('#memoriam').fadeOut({
    		duration: 6000,
    		queue: false
    	});
    }, 4000);

})


window.addEventListener('scroll', function(){

	if ( (window.scrollY >= windowHeight - navHeight) && (window.scrollY < reflections.offsetTop) ){
		standardNav.style.backgroundColor = '#010126';
	}  else {
		standardNav.style.backgroundColor = 'transparent';

	}
	
});


