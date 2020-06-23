import {homeParallax, homeDarkParallax} from './parallax';
import lazyLoad from './lazyLoad';
import menuToggler from './menuToggler';
import menuBrighten from './menuBrighten';
import cardOpen from './cardOpen';

const pageUrl = window.location.pathname;

const isHome = (pageUrl == '/' || pageUrl == '/en/') ? true : false;
const isLeistungen = (pageUrl == '/leistungen/' || pageUrl == '/en/services/') ? true : false;
const isKontakt = (pageUrl == '/kontakt/' || pageUrl == '/en/contact/') ? true : false;

// GENERAL INIT

lazyLoad();
menuToggler();
menuBrighten();

// PAGE_SPESIFIC INIT

if(isHome){
  document.body.classList.contains('dark') ? homeDarkParallax() : homeParallax();
} else if(isLeistungen){
  cardOpen();
}