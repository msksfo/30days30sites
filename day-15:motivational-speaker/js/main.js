var header = document.getElementById('header');

window.addEventListener('scroll', function(){
	if (window.scrollY > 0){
		header.classList.add('shadow');
	} else {
		header.classList.remove('shadow');
	}
});