//var header = document.getElementById('header');
var logo = document.getElementById('logo-img');

var mobileLogo = document.getElementById('mobile-logo-img');
//var mobileNav = document.getElementById('mobile-nav-all');
var mobileLinks = document.getElementById('mobile-links');

var products = document.getElementById('products-div');
var productsLink = document.getElementById('products-link');
var mobileProductsLink = document.getElementById('mobile-products-link');
var closeProducts = document.querySelectorAll('.close-products');
//var hidden = document.getElementById('hidden');


// add a bottom border to header when user starts scrolling
window.addEventListener('scroll', function(){
	var header = document.getElementById('header');
	if (window.scrollY > 0){
		header.style.boxShadow = '0 3px 5px rgba(90,110,223, .3)';
	} else {
		header.style.boxShadow = 'none';
	}
});

/* =============== mobile event listeners =================== */

mobileLogo.addEventListener('click', function(){
	toggleNavigation();
	hideMobileProducts();
});

mobileLinks.addEventListener('click', function(){
	document.getElementById('mobile-nav-all').classList.toggle('hidden');
});

mobileProductsLink.addEventListener('click', function(){
	showMobileProducts();
});

/* ==================== browser width  > 700px event listeners =================== */

logo.addEventListener('click', function(){
	window.scrollTo(0, 0);
});

productsLink.addEventListener('click', function(){
	toggleProducts();
});

// if user clicks any link, hide products, show hidden div
for (let i = 0; i < closeProducts.length; i++){
	closeProducts[i].addEventListener('click', function(){
		hideProducts();
	})
}

/* ==================== functions ========================= */

function toggleNavigation(){
	document.getElementById('mobile-nav-all').classList.toggle('hidden');
}

function hideMobileProducts(){
	products.classList.remove('products-click');
	hidden.classList.remove('hidden');
}

function showMobileProducts(){
	window.scrollTo(0, 0);
	hidden.classList.toggle('hidden');
	products.classList.add('products-click');
}

function hideProducts(){
	var hidden = document.getElementById('hidden');
	products.classList.remove('products-click');
	hidden.classList.remove('hidden');
}

function toggleProducts(){
	window.scrollTo(0, 0);
	hidden.classList.toggle('hidden');
	products.classList.toggle('products-click');
}













