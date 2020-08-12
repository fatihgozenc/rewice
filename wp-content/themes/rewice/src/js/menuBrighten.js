export default () => {
	const menu = document.querySelector('.menu');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 60) {
			menu.classList.add('menuWhite')
		} else if (window.scrollY <= 60) {
			menu.classList.remove('menuWhite')
		}
	})
}