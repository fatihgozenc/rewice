import { homeParallax, homeDarkParallax } from './parallax';
import lazyLoad from './lazyLoad';
import sliders from './sliders';
import menuToggler from './menuToggler';
import menuBrighten from './menuBrighten';

const pageUrl = window.location.pathname;

const isHome = (pageUrl == '/' || pageUrl == '/en/') ? true : false;
const isLeistungen = (pageUrl == '/leistungen/' || pageUrl == '/en/services/') ? true : false;
const isKontakt = (pageUrl == '/kontakt/' || pageUrl == '/en/contact/') ? true : false;

// GENERAL INIT

lazyLoad();
sliders();
menuToggler();
menuBrighten();

// PAGE_SPESIFIC INIT

if (isHome) {
	homeParallax();
}

console.log