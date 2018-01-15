var aboutSection = document.getElementById('about');
var aboutRect = aboutSection.getBoundingClientRect();
var aboutOffset = aboutRect.y;
var aboutNav = document.getElementById('about-nav');

var booksSection = document.getElementById('books');
var booksRect = booksSection.getBoundingClientRect();
var booksOffset = booksRect.y - 1;
var booksNav = document.getElementById('books-nav');

var quotesSection = document.getElementById('quotes-section');
var quoteRect = quotesSection.getBoundingClientRect();
var quoteOffset = quoteRect.y - 1;
var quoteNav = document.getElementById('quote-nav');

var artworkSection = document.getElementById('artwork');
var artworkRect = artworkSection.getBoundingClientRect();
var artworkOffset = artworkRect.y -1;
var artworkNav = document.getElementById('artwork-nav');


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/*
window.onload = function(){
	window.scrollTo(0, 0);
}
*/
window.addEventListener('scroll', function(e){
	/*  change the color of the navigation tabs on scroll, to reflect where in the site the user
	 currently is, similar to bootstrap scrollspy  */



	var y = this.scrollY;

	if (y >= aboutOffset && y < booksOffset){
		aboutNav.classList.add('aboutHover');
		booksNav.classList.remove('booksHover');
		quoteNav.classList.remove('quoteHover');
		artworkNav.classList.remove('artworkHover');
	} else if ( y >= booksOffset && y < quoteOffset){
		console.log('scroll books section');
		console.log(window.scrollY);

		aboutNav.classList.remove('aboutHover');
		booksNav.classList.add('booksHover');
		quoteNav.classList.remove('quoteHover');
		artworkNav.classList.remove('artworkHover');
	} else if (y >= quoteOffset && y < artworkOffset){
		aboutNav.classList.remove('aboutHover');
		booksNav.classList.remove('booksHover');
		quoteNav.classList.add('quoteHover');
		artworkNav.classList.remove('artworkHover');
	} else if ( y >= artworkOffset){
		aboutNav.classList.remove('aboutHover');
		booksNav.classList.remove('booksHover');
		quoteNav.classList.remove('quoteHover');
		artworkNav.classList.add('artworkHover');
	}

});


/* change the color of the navigaton tab, on click,  to reflect where in the site the user 
currently is */

aboutNav.addEventListener('click', function(){
	//aboutNav.classList.add('aboutHover');
	booksNav.classList.remove('booksHover');
	quoteNav.classList.remove('quoteHover');
	artworkNav.classList.remove('artworkHover');
	aboutNav.classList.add('aboutHover');
});

booksNav.addEventListener('click', function(){
	console.log(booksOffset);

	aboutNav.classList.remove('aboutHover');
	//booksNav.classList.add('booksHover');
	quoteNav.classList.remove('quoteHover');
	artworkNav.classList.remove('artworkHover');
	booksNav.classList.add('booksHover');
});

quoteNav.addEventListener('click', function(){
	aboutNav.classList.remove('aboutHover');
	booksNav.classList.remove('booksHover');
	//quoteNav.classList.add('quoteHover');
	artworkNav.classList.remove('artworkHover');
	quoteNav.classList.add('quoteHover');
});

artworkNav.addEventListener('click', function(){
	aboutNav.classList.remove('aboutHover');
	booksNav.classList.remove('booksHover');
	quoteNav.classList.remove('quoteHover');
	artworkNav.classList.add('artworkHover');
});






















