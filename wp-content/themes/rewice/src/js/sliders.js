import Flickity from 'flickity';

export default () => {
	if (document.querySelector('.aboutus__quote--wrapper') != null) {
		let slider = new Flickity('.aboutus__quote--wrapper', {
			cellAlign: 'center',
			contain: true,
			wrapAround: true,
			prevNextButtons: false,
			autoPlay: 6000
		});
	}
}