function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function lockPage(handler, bool = true) {
	if (bool) {
		document.documentElement.style.overflow = 'hidden';
		document.getElementById(handler).style.filter = 'blur(10px)';
	} else {
		document.documentElement.style.overflow = 'scroll';
		document.getElementById(handler).style.filter = null;
	}
}

if (getCookie('complianz_consent_status') == null) {
	window.addEventListener('load', function () {
		lockPage('page')
		var cookieButtons = document.querySelectorAll('.cc-btn')
		for (var i = 0; i < cookieButtons.length; i++) {
			cookieButtons[i].addEventListener('click', (e) => {
				console.log(e.target.innerText)
				if (e.target.innerText == 'Einstellungen anzeigen' || e.target.innerText == "Show Settings") {
					lockPage('page')
				} else {
					lockPage('page', false)
				}
			})
		}
	})
}