function show_sign_in_form() {
	document.getElementById("sign-up-form").style.display = "none"
	document.getElementById("sign-in-form").style.display = "block"
}

function show_sign_up_form() {
	document.getElementById("sign-up-form").style.display = "block"
	document.getElementById("sign-in-form").style.display = "none"
}

document.getElementById("sign-in-btn").onclick = show_sign_in_form
document.getElementById("sign-up-btn").onclick = show_sign_up_form