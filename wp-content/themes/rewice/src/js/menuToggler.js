const menuClassDel = (nav, menu, menuColorClass) => {
	nav.classList.remove('reveal');
	nav.parentElement.classList.remove('open');
	setTimeout(() => {
		nav.classList.remove('show');
		window.scrollY > 60 &&
			menu.classList.add(menuColorClass);
	}, 350);
}

const menuClassAdd = (nav, menu, menuColorClass) => {
	nav.classList.add('show');
	nav.parentElement.classList.add('open');
	window.scrollY < 60 &&
		menu.classList.remove(menuColorClass);
	setTimeout(() => {
		nav.classList.add('reveal');
	}, 350);
}

export default () => {
	const toggler = document.getElementById('toggler');
	const nav = document.querySelector('.nav');
	const menu = document.querySelector('.menu');
	toggler.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('toggled');
		if (nav.classList.contains('show')) {
			menuClassDel(nav, menu, 'menuWhite')
		} else {
			menuClassAdd(nav, menu, 'menuWhite')
		}
	})
}