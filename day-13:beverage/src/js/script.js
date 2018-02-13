var header = document.getElementById('header');


window.addEventListener('scroll', function(){
	if (window.scrollY > 0){
		header.style.boxShadow = '0 3px 5px rgba(90,110,223, .3)';
	} else {
		header.style.boxShadow = 'none';
	}
})