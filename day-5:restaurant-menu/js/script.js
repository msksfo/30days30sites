
var home = document.getElementById('home');
var contact = document.getElementById('contact');
var bayon = document.getElementById('bayon');
var navbar = document.getElementById('navbar');






window.onbeforeunload = function(){
	window.scrollTo(0, 0);
}


window.addEventListener('scroll', function(){
	console.log(bayon.offsetTop);

	console.log(window.scrollY);

	if (window.scrollY >= 3355){
		home.style.backgroundColor = 'transparent';
		home.style.color = 'black';
	}
})