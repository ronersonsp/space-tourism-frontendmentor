import NavChange from './modules/slide.js';
import Slide from './modules/slide-original.js';
import Scroll from './modules/scroll-suave.js';
import ActiveNav from './modules/active-nav.js';
import Menu from './modules/menu-hamburguer.js';

const activeNav = new ActiveNav('.wrapper', '.header-ul')
activeNav.init();

const destination = new NavChange('.destination-navigation', '.destination-planet', '.destination-info');
destination.init();

const crew = new Slide('.crew-text-ul', '.crew-text-wrapper');
crew.init();
crew.addControl('.crew-nav');

const technology = new NavChange('.tech-nav', '.tech-img', '.tech-text');
technology.init();

const scroll = new Scroll('[data-menu="suave"] a[href^="#"]');
scroll.init();

const menu = new Menu('.menu-hamburguer', '.header-nav');

// const scrollAnima = new ScrollAnima('.wrapper')
// scrollAnima.init();


// 