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
	for (let k = 0; k < mobileLinks.length; k++){
		mobileLinks[k].style.backgroundColor = 'rgba(22, 105, 135, .98)';
	}
	mobileMenu.style.display = 'none';
	hideSubmenu();
});


// if the user clicks ANY link, close all nested submenus, and the mobile menu
for (let i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(){
		
		for (let k = 0; k < mobileLinks.length; k++){
			mobileLinks[k].style.backgroundColor = 'rgba(22, 105, 135, .98)';
		}
		
		mobileMenu.style.display = 'none';
		hideSubmenu();
	})
}

// close mobile menu and submenu if user resizes browser while they were open 
window.addEventListener('resize', function(){
	if (window.innerWidth >= 700){
		hideSubmenu();
		mobileMenu.style.display = 'none'
	}
})


// if the link that user clicked has a submenu, open/close it (by toggling the class of hidden)
for (let i = 0; i < mobileLinks.length; i++){
	mobileLinks[i].addEventListener('click', function(){
				
		if (this.classList.contains('submenu')){
			
			this.nextElementSibling.classList.toggle('hidden');
			
			if (this.nextElementSibling.classList.contains('hidden')){
				this.style.backgroundColor = 'rgba(22, 105, 135, .98)';
				
			} else {
				this.style.backgroundColor = 'rgba(68, 183, 225, .8)';
			}
		} 
	})
}


// hide all of the nested submenus
function hideSubmenu(){
	for (let i = 0; i < subMenus.length; i ++){
		subMenus[i].classList.add('hidden');
	}
}



















