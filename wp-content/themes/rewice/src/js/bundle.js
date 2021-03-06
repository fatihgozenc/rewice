import { homeParallax, homeParallaxEng } from './parallax';
import cookies from './cookies';
import lazyLoad from './lazyLoad';
import sliders from './sliders';
import menuToggler from './menuToggler';
import menuBrighten from './menuBrighten';

const pageUrl = window.location.pathname;

const isHome = (pageUrl == '/de/' || pageUrl == '/en/') ? true : false;
const isHomeEn = (pageUrl == '/en/') ? true : false;
const isLeistungen = (pageUrl == '/leistungen/' || pageUrl == '/en/services/') ? true : false;
const isKontakt = (pageUrl == '/kontakt/' || pageUrl == '/en/contact/') ? true : false;
const isImpressum = (pageUrl == '/impressum/' || pageUrl == '/en/imprint/') ? true : false;

// GENERAL INIT

lazyLoad();
sliders();
menuToggler();
menuBrighten();

// PAGE_SPESIFIC INIT

if (isHome) {
	homeParallax();
}
if (isHomeEn) {
	homeParallaxEng();
}