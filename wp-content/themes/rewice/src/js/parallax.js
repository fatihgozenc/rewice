import Parallax from 'parallax-js'

export const homeParallax = () => {
	if (document.querySelector('.parallax__wrapper') != null) {
		const scene = document.querySelector('.parallax__wrapper');
		let parallaxInstance = new Parallax(scene);
	}
}

export const homeParallaxEng = () => {
	if (document.querySelector('.parallax__wrapper--mountains') != null) {
		const sceneMountains = document.querySelector('.parallax__wrapper--mountains');
		let parallaxInstanceMountains = new Parallax(sceneMountains);
	}
}