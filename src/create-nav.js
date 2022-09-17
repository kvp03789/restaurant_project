import './style.css';
import {clearDom} from './clear-dom.js'

    

export function createNav() {
    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const listHome = document.createElement("li");
    const listMenu = document.createElement("li");
    const listAbout = document.createElement("li");
    const listContact = document.createElement("li");
    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const aboutLink = document.createElement("a");
    const contactLink = document.createElement("a");

    homeLink.classList.add("nav-link");
    homeLink.setAttribute('id', 'home-link');
    menuLink.classList.add("nav-link");
    menuLink.setAttribute('id', 'menu-link');
    aboutLink.classList.add("nav-link");
    aboutLink.setAttribute('id', 'about-link');
    contactLink.classList.add("nav-link");
    contactLink.setAttribute('id', 'contact-link');
    

    homeLink.innerText = "Accueil";
    homeLink.href="#";
    menuLink.innerText = "La Carte";
    menuLink.href="#";
    aboutLink.innerText = "A Propos";
    aboutLink.href="#";
    contactLink.innerText = "Contact";
    contactLink.href="#";


    listHome.append(homeLink);
    listMenu.append(menuLink);
    listAbout.append(aboutLink);
    listContact.append(contactLink);
    list.append(listHome, listMenu, listAbout, listContact);
    nav.append(list);
    // document.body.append(nav);
    document.querySelector(".content").append(nav);
}



// const menuNavLink = document.querySelector("#menu-link");
// menuNavLink.addEventListener("click", clearDom());