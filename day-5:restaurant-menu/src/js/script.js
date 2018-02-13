var nodemailer = require('nodemailer');

var home = document.getElementById('home');
var contact = document.getElementById('contact');
var bayon = document.getElementById('bayon');
var navbar = document.getElementById('navbar');

var form = document.getElementById('form');

var name = document.getElementById('name');
var company = document.getElementById('company');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');


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
});

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'msksfo@gmail.com',
		pass: 'Iforgotmypassword1'
	}
});


form.addEventListener('submit', function(){
	var nameValue = name.value();
	var companyValue = company.value();
	var emailValue = email.value();
	var phoneValue = phone.value();
	var messageValue = message.value();

	var mailOoptions = {
		from: 'msksfo@gmail.com',
		to: 'msksfo@gmail.com',
		subject: 'Customer Inquiry',
		text: 'Customer Name: ' + nameValue + '\n' +
			  'Company: ' + companyValue + '\n' +
			  'Customer Email: ' + emailValue + '\n' + 
			  'Customer Phone Number: ' + phoneValue + '\n' + 
			  'Customer Message: ' + messageValue
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error){
			console.log(error);
			alert('Sorry. My form sucks. You gotta fill it out again. Oooooops.');
		} else {
			console.log('Email sent' + info.response);
			alert('Your form has been submitted.');
		}
	})

	clearForm();

});

function clearForm(){
	name.value = '';
	company.value = '';
	email.value = '';
	phone.value = '';
	message.value = '';
}





















