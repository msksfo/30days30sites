/* ========================= variables =================================== */

var rsvpButton = document.getElementById('rsvpButton');
var modal = document.getElementById('modal');
var closeButton = document.getElementById('closeButton');
var submitButton = document.getElementById('submitButton');

/* =========================== event listeners ================================= */

// show modal when user clicks rsvp button
rsvpButton.addEventListener('click', openModal);

// hide the modal and reset the form when user clicks the close button (the x)
closeButton.addEventListener('click', closeModal);

// also hide the modal and reset the form if the user clicks on the modal, but outside the modal content 
window.addEventListener('click', function(e){
	if (e.target === modal){
		closeModal();
	}
});


// add required attribute to dinner choice ONLY IF a guest is attending
submitButton.addEventListener('click', function(){
	if (document.getElementById('attending').checked){
		document.getElementById('dinner-choice').required = true;
	}
})



/* =================================== functions ======================================= */

function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	document.getElementById('rsvp-form').reset();
	modal.style.display = 'none';
}













