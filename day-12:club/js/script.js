var hamburgerIcon = document.getElementById('hamburger-icon');
var closeButton = document.getElementById('close-button');
var mobileMenu = document.getElementById('mobile-menu');

var links = document.querySelectorAll('.link');

var mobileLinks = document.querySelectorAll('.mobile-link');
var subMenus = document.querySelectorAll('.mobile-submenu');

/* event listeners */

hamburgerIcon.addEventListener('click', function(){
	mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', function(){
	mobileMenu.style.display = 'none';
	//hideSubmenu();
});

for (let i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(){
		mobileMenu.style.display = 'none';
	})
}

// close mobile menu and submenu if user resizes browser while they were open 
window.addEventListener('resize', function(){
	if (window.innerWidth >= 700){
		hideSubmenu();
		mobileMenu.style.display = 'none'
	}
})

/*

for (let i = 0; i < mobileLinks.length; i++){
	mobileLinks[i].addEventListener('mouseenter', function(){
				
		if (this.classList.contains('submenu')){
			this.nextElementSibling.classList.toggle('hidden');
		}
	})
}

for (let i = 0; i < mobileLinks.length; i++){
	mobileLinks[i].addEventListener('mouseleave', function(){
				
		if (this.classList.contains('submenu')){
			this.nextElementSibling.classList.toggle('hidden');
		}
	})
}
*/

function showSubmenu(){
	hideSubmenu();
	for (let i = 0; i < mobileLinks.length; i++){
		
	}
}

function hideSubmenu(){
	for (let i = 0; i < subMenus.length; i ++){
		subMenus[i].classList.add('hidden');
	}
}



















