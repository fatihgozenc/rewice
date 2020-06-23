export default () => {
	window.addEventListener('load', () => {
		let lazyItems = document.querySelectorAll('.lazyLoad');
		for (let i = 0; i < lazyItems.length; i++) {
			let imgUrl = lazyItems[i].getAttribute('data-bg');
			lazyItems[i].style.backgroundImage = `url('${imgUrl}')`
		}
	})
}