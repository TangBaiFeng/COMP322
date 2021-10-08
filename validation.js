function validateForm() {
	document.getElementById("errorLog").innerHTML = "";
	var username = vUsername();
	var email = vEmail();
	var phoneNum = vPhoneNum();
	var password = vPassword();
	var gender = vGender();
	var age = vAge();
	if (username && email && phoneNum && password != false && gender && age) {
		if (confirmPassword(password)) {
			window.location.href = "index.html";
		} else {
			window.alert("passwords do not match");
		}
	}
}

function vUsername() {
	let x = document.forms["validator"]["username"].value;
	if (x == "") {
		empty("username");
		return false;
	} else if (x.match(/([a-z0-9]){4,12}/) == null) {
		invalid("username");
		return false;
	} else {
		return true;
	}
}
function vEmail() {
	let x = document.forms["validator"]["email"].value;
	if (x == "") {
		empty("email");
		return false;
	} else if (x.match(/^\S+@\S+(\.com|\.edu|\.org|\.net)$/) == null) {
		invalid("email");
		return false;
	} else {
		return true;
	}
}
function vPhoneNum() {
	let x = document.forms["validator"]["phonenumber"].value;
	if (x == "") {
		empty("phone number");
		return false;
	} else if (x.match(/\(\d{3}\)-\d{3}-\d{4}/) == null) {
		invalid("phone number");
		return false;
	} else {
		return true;
	}
}
function vPassword() {
	let x = document.forms["validator"]["password"].value;
	if (x == "") {
		empty("password");
		return false;
	} else if (x.match(/[a-zA-Z0-9]{8,}/) == null) {
		invalid("password");
		return false;
	} else {
		return x;
	}
}
function vGender() {
	let x = document.forms["validator"]["gender"].value;
	if (x == "") {
		empty("gender");
		return false;
	} else {
		return true;
	}
}
function vAge() {
	let x = document.forms["validator"]["age"].value;
	if (x == "empty") {
		empty("age");
		return false;
	} else {
		return true;
	}
}
function vMusic() {}
function empty(emptyElement) {
	document.getElementById("errorLog").innerHTML +=
		"Please Select " + "<span style='color:red'>" + emptyElement + "</span> <br/>";
}
function invalid(invalidElement) {
	document.getElementById("errorLog").innerHTML +=
		"Please enter a valid  " + "<span style='color:yellow'>" + invalidElement + "</span> <br/>";
}
function reset() {
	document.getElementById("validator").reset();
}

function confirmPassword(password) {
	let x = document.forms["validator"]["passwordconfirm"].value;
	return x == password;
}
