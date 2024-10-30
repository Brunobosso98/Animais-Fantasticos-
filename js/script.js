import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBtc from "./modules/fetch-btc.js";
import initAnimationScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

initAnimationScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

fetchBtc("https://blockchain.info/ticker", ".btc-preco");

import $ from "jquery";
import _ from "lodash";
