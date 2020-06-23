import Parallax from 'parallax-js'

export const homeParallax = () => {
	const scene = document.querySelector('.parallax__wrapper');
	var parallaxInstance = new Parallax(scene);
}

export const homeDarkParallax = () => {
	const darkScene = document.querySelector('.hero__dark');
	var parallaxInstanceDark = new Parallax(darkScene, {limitX: 0});
}