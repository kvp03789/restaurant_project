//events for nav buttons
import {createNav} from './create-nav.js';
import {createMain} from './create-main.js';
import {makeMenu} from './menu.js';
import {clearDom} from './clear-dom.js'
import {createContact} from './contact.js'
import {createAbout} from './about.js'


export const addNavEvents = function() {
const homeLink = document.querySelector("#home-link");
homeLink.addEventListener("click", (e) => {
    clearDom();
    createNav();
    createMain();  
    addNavEvents();  
});


const menuLink = document.querySelector("#menu-link");
menuLink.addEventListener("click", (e) => {
    clearDom();
    createNav();
    makeMenu();  
    addNavEvents();   
});

const aboutLink = document.querySelector("#about-link");
aboutLink.addEventListener("click", (e) => {
    clearDom();
    createNav();
    createAbout(); 
    addNavEvents();    
});

const contactLink = document.querySelector("#contact-link");
contactLink.addEventListener("click", (e) => {
    clearDom();
    createNav();
    createContact();  
    addNavEvents();   
});}