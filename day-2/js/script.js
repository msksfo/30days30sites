var rsvpButton = document.getElementById('rsvpButton');
var modal = document.getElementById('modal');
var submitButton = document.getElementById('submitButton'); /* ????????? */
var closeButton = document.getElementById('closeButton');



rsvpButton.addEventListener('click', function(){
	modal.style.display = 'block';
	
});

closeButton.addEventListener('click', function(){
	modal.style.display = 'none';
})




function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}