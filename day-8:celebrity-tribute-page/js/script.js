
var fadeInNav = document.getElementById('fadein-nav');

var standardNav = document.getElementById('standard-nav');
var navHeight = standardNav.offsetHeight;
var windowHeight = window.innerHeight;


$(document).ready(function(){
	
   

    setTimeout(function(){
    	$('#memoriam').fadeOut({
    		duration: 6000,
    		queue: false
    	});
    }, 2000);

})



window.addEventListener('scroll', function(){

	if (window.scrollY >= windowHeight - navHeight){
		standardNav.style.backgroundColor = '#010126';
	} else {
		standardNav.style.backgroundColor = 'transparent';
	}
	
});



