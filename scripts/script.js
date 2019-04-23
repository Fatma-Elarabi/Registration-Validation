var form = document.getElementById('form');

var nameValue = document.getElementById('Name');
var usernameValue = document.getElementById('UserName');
var phoneValue = document.getElementById("phone_number"); 

var check = document.getElementById('confirmation');



function popUp() {
	var loading = document.getElementById('registration')
	loading.classList.toggle('show');
}

window.addEventListener('load', popUp);



// function validation(e) {
// 	e.preventDefault();

// 	if (nameValue.length < 10 || nameValue.length > 30) {
//         console.log('Please enter your full name');
//     }

//     if (usernameValue.length < 10 || usernameValue.length > 20) {
//         console.log('This user name is too short');
//     }

//     if (isNaN(phoneValue) || phoneValue.length < 11 || phoneValue.length > 20) {
//         // var text = "Input not valid";
//         console.log('Phone number is not valid');
//     } 
//     // document.getElementById("demo").innerHTML = text;   
// }

// check.addEventListener('click', validation);


function start() {
// validation();
	document.getElementById('registration').classList.toggle('hide');
}


function emailValid() {
	var email = document.getElementById('email').value;
	
	if (email.slice(-3) != 'com') {
		console.log('Your email must end with com');
	}
	else {
		return true;
	}
}


function samePassword() {
	var password = document.getElementById('password1').value;
	var passwordConfirm = document.getElementById('password2').value;

	if (emailValid()) {
		if (password !== passwordConfirm) {
			console.log('The two password did not match');
		}
		else {
			start()
		}
	}
}


//check.addEventListener('click', samePassword);
form.addEventListener('submit', function (e) {
	e.preventDefault();
	samePassword()
});