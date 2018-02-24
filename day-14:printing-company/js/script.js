/* ================ VARIABLES ================= */

/* ===== mobile navigation ===== */
var searchIcon = document.getElementById('search-icon');
var mobileSearchDropdown = document.getElementById('mobile-search-dropdown');
var mobileSearchInput = document.getElementById('mobile-search-input');
var hamburgerIcon = document.getElementById('hamburger-icon');
var mobileDropdown = document.getElementById('mobile-dropdown');
var mobileLinks = document.querySelectorAll('.mobile-link');
var mobileProductsLink = document.getElementById('mobile-products-link');
var mobileProductsDropdown = document.querySelector('.mobile-products-dropdown');
var mobileLogo = document.querySelector('.mobile-logo');
var mobileAccountLink = document.getElementById('mobile-account-link');
var mobileAccountDropdown = document.querySelector('.mobile-account-dropdown');


/* ===== standard navigation ==== */
var search = document.getElementById('search');
var searchDropdown = document.getElementById('search-dropdown');
var searchInput = document.getElementById('search-input');

/* ===== slider variables ===== */
var titles = document.querySelectorAll('.title');
var explanations = document.querySelectorAll('.explanation');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var index = 0;

/* ==== support section variables === */
var supportButton = document.getElementById('support-button');
var supportSearchText = document.getElementById('support-search-text');

/* ============= event listeners =============== */

// 
mobileLogo.addEventListener('click', function(){
	mobileProductsDropdown.classList.remove('display-mobile-products-dropdown');
	mobileAccountDropdown.classList.remove('display-mobile-account-dropdown');
	mobileDropdown.classList.remove('display-dropdown');

})

// listener for mobile navigaion search icon
searchIcon.addEventListener('click', function(){
	mobileSearchDropdown.classList.toggle('display-mobile-search-dropdown');
	clearMobileSearchInput();
});

/* if user clicks enter, clear input value, hide search dropdown */
mobileSearchInput.addEventListener('keypress', function(e){
	//handleEnter(clearSearchInput, searchDropdown);
	var key = e.which || e.keyCode;

	if (key === 13){
		clearMobileSearchInput();
		mobileSearchDropdown.classList.remove('display-mobile-search-dropdown');
	}
});

hamburgerIcon.addEventListener('click', function(){	

	//hide both products and account dropdowns. then toggle display of mobile menu.

	 mobileProductsDropdown.classList.remove('display-mobile-products-dropdown');
	 mobileAccountDropdown.classList.remove('display-mobile-account-dropdown');
	 mobileDropdown.classList.toggle('display-dropdown');

});

// close the mobile menu when user clicks any link
for (let i = 0; i < mobileLinks.length; i++){
	mobileLinks[i].addEventListener('click', function(){
		mobileDropdown.classList.remove('display-dropdown');
	});
}

// toggle mobile products dropdown 
mobileProductsLink.addEventListener('click', function(){
	mobileProductsDropdown.classList.toggle('display-mobile-products-dropdown');
});

// toggle mobile account dropdown 
mobileAccountLink.addEventListener('click', function(){
	mobileAccountDropdown.classList.toggle('display-mobile-account-dropdown');
});

// listener for standard width navigation search
search.addEventListener('click', function(){
	clearSearchInput();
	toggleHidden(searchDropdown);
});

/* if user clicks enter, clear input value, hide search dropdown */
searchInput.addEventListener('keypress', function(e){
	//handleEnter(clearSearchInput, searchDropdown);
	var key = e.which || e.keyCode;

	if (key === 13){
		clearSearchInput();
		searchDropdown.style.display = 'none';
	}
});


/* change the cursor style if the currently displayed panels are
 either first or last in the list of panels (titles and explanations) */
next.addEventListener('mouseenter', function(e){
	nextCursorStyle(e);
});

previous.addEventListener('mouseenter', function(e){
	previousCursorStyle(e);
});



/* if the displayed panels are either first or last in the list of
 panels (titles and explanations), user cannot click any further in 
 that direction. give them a visual cue by changing the cursor style. 
 otherwise, show the subsequent panels. */

next.addEventListener('click', function(e){
	if (index === (titles.length - 1) ){
		e.target.style.cursor = 'not-allowed';
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	} else {
		e.target.style.cursor = 'pointer';
		getNextSlide();	
	} 
});

previous.addEventListener('click', function(e){
	if ( index === 0){
		e.target.style.cursor = 'not-allowed';
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	} else {
		e.target.style.cursor = 'pointer';
		getPreviousSlide();
	}
});

supportButton.addEventListener('click', function(){
	supportSearchText.value = '';
});

supportSearchText.addEventListener('keypress', function(e){
	var key = e.which || e.keyCode;

	if (key === 13){
		document.getElementById('support-search-text').value = '';
	}
});

/* ================= functions ================ */

function getNextSlide(){
	var currentTitle = titles[index];
	var currentExplanation = explanations[index];

	currentTitle.classList.remove('is-selected');
	currentTitle.classList.add('move-left');

	currentExplanation.classList.remove('is-selected');
	currentExplanation.classList.add('move-left');

	index ++;

	currentTitle = titles[index];
	currentTitle.classList.add('is-selected');

	currentExplanation = explanations[index];
	currentExplanation.classList.add('is-selected');
}

function nextCursorStyle(e) {
	if (index === (titles.length - 1) ){
		e.target.style.cursor = 'not-allowed';
	} else {
		e.target.style.cursor = 'pointer';
	}
}

function getPreviousSlide(){
	var currentTitle = titles[index];
	var currentExplanation = explanations[index];
	
	currentTitle.classList.remove('is-selected');
	currentExplanation.classList.remove('is-selected');

	index --;
	currentTitle = titles[index];
	currentExplanation = explanations[index];
	
	currentTitle.classList.remove('move-left');
	currentTitle.classList.add('is-selected');

	currentExplanation.classList.remove('move-left');
	currentExplanation.classList.add('is-selected');	
}

function previousCursorStyle(e) {
	if (index === 0){
		e.target.style.cursor = 'not-allowed';
	} else {
		e.target.style.cursor = 'pointer';
	}
}

function toggleHidden(element){
	if (element.style.display === 'none'){
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
}

function clearMobileSearchInput(){
	mobileSearchInput.value= '';
}

function clearSearchInput(){
	var input = document.getElementById('search-input');
	input.value= '';
}


function handleEnter(someFunction, element){
	// how can i find the event in this type of function
	var key = e.which || e.keyCode;

	if (key === 13){
		someFunction();
		element.style.display = 'none';
	}
}













