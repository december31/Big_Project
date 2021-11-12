var username = document.getElementById('username')
var register = document.getElementsByTagName('button')[0]

var interval;
var check = false
var flag = 1


//	CHECK USER NAME ACCEPTED
// get error and accept object
var username_error = document.querySelector('[for="username"]>span:first-child')
var username_accept = document.querySelector('[for="username"]>span:last-child')

username.onfocus = function() {
	loopCheckUsername(1)
}

function loopCheckUsername(condition) {
	if(condition) {
		interval = setInterval(testUsername, 250)
	}
}

function testUsername() {
	if(username.value.length < 10) {
		check = false
		console.log(false)
		if(!check && flag === 1)
			displayUsernameError();
		return false
	}
	check = true
	console.log(check)
	if(check === true && flag === 0)
		displayUsernameAccept()
	return true
}

function displayUsernameError() {
	console.log(false)
	username_error.classList.add('show')
	username_accept.classList.remove('show')
	flag = 0
	if(flag === 0)
		loopCheckUsername()
}

function displayUsernameAccept() {
	console.log(true)
	username_accept.classList.add('show')
	username_error.classList.remove('show')
	flag = 1
	if(flag === 1)
		loopCheckUsername()
}




// CHECK EMAIL ACCEPT
var email = document.getElementById('email')
var email_error = document.querySelector('[for="email"]>span:first-child')
var email_accept = document.querySelector('[for="email"]>span:last-child')
// console.log(email_error)
// console.log(email)

email.onfocus = function() {
	flag = 1
	loopCheckEmail(1)
}

function loopCheckEmail(condition) {
	if(condition) {
		interval = setInterval(testEmail, 250)
	}
}

function testEmail() {
	if(email.value.length < 10 || email.value.match(/\S+@\S+\.\S+/) === null || email.value.search(' ') !== -1) {
		check = false
		console.log(false)
		if(!check && flag === 1) {
			displayEmailError();
		}
		return false
	}
	check = true
	console.log(check)
	if(check === true && flag === 0)
	displayEmailAccept()
	return true
}

function displayEmailError() {
	console.log(false)
	email_error.classList.add('show')
	email_accept.classList.remove('show')
	flag = 0
	if(flag === 0)
	loopCheckEmail()
}

function displayEmailAccept() {
	console.log(true)
	email_accept.classList.add('show')
	email_error.classList.remove('show')
	flag = 1
	if(flag === 1)
	loopCheckEmail()
}


//CHECK PASSWORD
var password = document.getElementById('password')
var password_error = document.querySelector('[for="password"]>span:first-child')
var password_accept = document.querySelector('[for="password"]>span:last-child')

var confirm_password = document.getElementById('passwordconfirm')
var confirm_password_error = document.querySelector('[for="passwordconfirm"]>span:first-child')
var confirm_password_accept = document.querySelector('[for="passwordconfirm"]>span:last-child')


password.onfocus = function() {
	flag = 1
	loopCheckPassword(1)
}

function loopCheckPassword(condition) {
	if(condition) {
		interval = setInterval(testPassword, 250)
	}
}

function testPassword() {
	if(password.value.length < 8) {
		check = false
		console.log(false)
		if(!check && flag === 1)
		displayPasswordError();
		return false
	}
	check = true
	console.log(check)
	if(check === true && flag === 0)
	displayPasswordAccept()
	return true
}

function displayPasswordError() {
	console.log(false)
	password_error.classList.add('show')
	password_accept.classList.remove('show')
	flag = 0
	if(flag === 0)
	loopCheckPassword()
}

function displayPasswordAccept() {
	console.log(true)
	password_accept.classList.add('show')
	password_error.classList.remove('show')
	flag = 1
	if(flag === 1)
	loopCheckPassword()
}

function testConfirmPassword() {
	if(password.value.length > 0 && confirm_password.value.length >= 8) {
		if(password.value !== confirm_password.value) {
			// show error
			confirm_password_error.classList.add('show')
			confirm_password_accept.classList.remove('show')
			return false
		}
		else {
			// show accept
			confirm_password_accept.classList.add('show')
			confirm_password_error.classList.remove('show')
			return true
		}
	}
}

function test() {
	if(testUsername() === false)	return false
	if(testEmail() === false)		return false
	if(testPassword() === false)	return false
	if(!testConfirmPassword())		return false
	return true
}

register.onclick = function() {
	return test()
}


//check signin-signout change
var cover = document.getElementsByClassName('cover')[0]
var cover_content = cover.getElementsByTagName('h2')[0]
var cover_btn = document.getElementById('change')
var	cover_check = document.getElementById('cover-change')

cover_btn.onclick = function() {
	if(cover_check.checked === true) {
		cover_content.innerHTML = 'Bạn chưa có tài khoản?'
		cover_btn.innerHTML = 'Đăng ký'
	}
	else {
		cover_content.innerHTML = 'Bạn đã có tài khoản?'
		cover_btn.innerHTML = 'Đăng nhập'
	}
}


// mobile sign-option access
var container = document.getElementsByClassName('container')[0]
var mobile_sign_in = document.getElementById('sign-in-mobile')
var mobile_sign_up = document.getElementById('sign-up-mobile')
var sign_in_form = document.getElementById('sign-in')
var sign_up_form = document.getElementById('sign-up')

var c = 1

mobile_sign_up.onclick = function() {
	container.style.height = '630px'
	sign_in_form.style.display = 'none'	
	sign_up_form.style.display = 'block'
	
	mobile_sign_in.style.borderBottom = '4px solid #2FDD92'
	mobile_sign_in.style.borderLeft = '4px solid #2FDD92'
	mobile_sign_in.style.borderRadius = '0 10px 0 10px'
	mobile_sign_in.style.backgroundColor = '#FFD369'
	mobile_sign_in.style.color = '#1F1D36'
	mobile_sign_in.style.fontSize = '25px'

	mobile_sign_up.style.backgroundColor = 'inherit'
	mobile_sign_up.style.border = 'none'
	mobile_sign_up.style.color = '#FF0000'
	mobile_sign_up.style.fontSize = '30px'
	
}

mobile_sign_in.onclick = function() {
	container.style.height = '550px'
	sign_in_form.style.display = 'block'	
	sign_up_form.style.display = 'none'	
	
	mobile_sign_up.style.borderBottom = '4px solid #2FDD92'
	mobile_sign_up.style.borderRight = '4px solid #2FDD92'
	mobile_sign_up.style.borderRadius = '10px 0 10px 0'
	mobile_sign_up.style.backgroundColor = '#FFD369'
	mobile_sign_up.style.color = '#1F1D36'
	mobile_sign_up.style.fontSize = '25px'
	
	mobile_sign_in.style.border = 'none'
	mobile_sign_in.style.backgroundColor = 'inherit'
	mobile_sign_in.style.color = '#FF0000'
	mobile_sign_in.style.fontSize = '30px'
}