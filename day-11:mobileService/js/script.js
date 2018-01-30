/* variables for mobile menu navigation */
var closeButton = document.getElementById('btn-close');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavIcon = document.getElementById('mobile-nav-icon');

var sisigTruck = document.getElementById('sisig-truck');
var mqS = window.matchMedia('(min-width: 700px)').matches;

var cities = document.querySelectorAll('.city');
var locationEvents = document.querySelectorAll('.location-events');
var closeEvents = document.querySelectorAll('.close-events');

var cards = document.querySelectorAll('.card');
var eventModals = document.querySelectorAll('.event-modal');
var accordian = document.getElementById('accordian');


// fade in the header when user starts scrolling
window.addEventListener('scroll', function(){
	if (window.scrollY >= 10){
		header.style.opacity = '1';
	} 

})

// if browser width is at least 700px, make the truck zoom in on scroll
if (mqS){
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		$(".sisig-truck").css({
			backgroundSize: (60 + scroll/5)  + "%",
			top: -(scroll/10)  + "%",
		  });
	});
} 


/* ========= event listeners for the mobile navigation ============ */

mobileNavIcon.addEventListener('click', function(){
	mobileNav.classList.add('display-mobile');
	
});

mobileNav.addEventListener('click', function(){
	mobileNav.classList.remove('display-mobile');
	window.scrollTo(0, y);
})


closeButton.addEventListener('click', function(){
	mobileNav.classList.remove('display-mobile');
	window.scrollTo(0, y);

});

// control the modals for displaying the events, on click for mobile,
// on mouseenterfor desktop
if (window.matchMedia('(max-width: 799px)').matches){

	for (let i = 0; i < cities.length; i++){
		cities[i].addEventListener('click', function(){
			locationEvents[i].style.display = 'block';
		})
	}

	for (let i = 0; i < closeEvents.length; i++){
		closeEvents[i].addEventListener('click', function(){
			locationEvents[i].style.display = 'none';
		})
	}
} else {
	for (let i = 0; i < cards.length; i++){
		cards[i].addEventListener('mouseenter', function(){
		eventModals[i].style.display = 'block';
		})
	}

	accordian.addEventListener('mouseleave', function(){
		for (let i = 0; i < eventModals.length; i++){
			eventModals[i].style.display = 'none';
		}
	})
}

window.addEventListener('resize', function(){
	var mqL = window.matchMedia('(min-width: 800px)').matches;

	if (mqL){
		for (let i = 0; i < cards.length; i++){
			cards[i].addEventListener('mouseenter', function(){
			eventModals[i].style.display = 'block';
			})
		}

		accordian.addEventListener('mouseleave', function(){
			for (let i = 0; i < eventModals.length; i++){
				eventModals[i].style.display = 'none';
			}
		})
	} else {
		for (let i = 0; i < cities.length; i++){
			cities[i].addEventListener('click', function(){
				locationEvents[i].style.display = 'block';
			})
		}

		for (let i = 0; i < closeEvents.length; i++){
			closeEvents[i].addEventListener('click', function(){
				locationEvents[i].style.display = 'none';
			})
		}
	}
});







