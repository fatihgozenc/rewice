import Parallax from 'parallax-js'

export const homeParallax = () => {
	if (document.querySelector('.parallax__wrapper') != null) {
		const scene = document.querySelector('.parallax__wrapper');
		let parallaxInstance = new Parallax(scene);
	}
}