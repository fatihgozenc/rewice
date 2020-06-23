export default () => {
	const menu = document.querySelector('.menu');
	let isDark = document.body.classList.contains('dark');
	console.log(isDark)
	if (isDark) {
		window.addEventListener('scroll', function(){
			if(window.scrollY > 60){
				menu.classList.add('menuDark')
			}else if (window.scrollY <= 60) {
				menu.classList.remove('menuDark')
			}
		})
	} else {
		window.addEventListener('scroll', function(){
			if (window.scrollY > 60) {
				console.log('appens')
				menu.classList.add('menuWhite')
			} else if (window.scrollY <= 60) {
				menu.classList.remove('menuWhite')
			}
		})
	}
}