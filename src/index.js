import './style.css';
import Croissant from './images/croissant.svg';
import Coffee from './images/coffee.svg';
import Menu from './images/menu.svg';

function createNav() {
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
    document.body.append(nav);

}

function createMain() {
    const main = document.createElement("main");
    const textContainer = document.createElement("div");
    const imageContainer = document.createElement("div");
    const bottomContainer = document.createElement("div");
    const title = document.createElement("h3");
    const subTitle = document.createElement("h5");
    const para = document.createElement("p");
    const coffeePic = new Image();
    coffeePic.src = Coffee;
    coffeePic.classList.add("bottom-svg");
    const croissantPic = new Image();
    croissantPic.src = Croissant;
    croissantPic.classList.add("bottom-svg");
    const menuPic = new Image();
    menuPic.src = Menu;
    menuPic.classList.add("bottom-svg");
    const bottomDivOne = document.createElement("div");
    bottomDivOne.classList.add("bottom-div");
    const bottomPara = document.createElement("p");
    bottomPara.innerText = "Tasty Coffee";
    const bottomDivTwo = document.createElement("div");
    bottomDivTwo.classList.add("bottom-div");
    const bottomParaTwo = document.createElement("p");
    bottomParaTwo.innerText = "Tasty Coffee";
    const bottomDivThree = document.createElement("div");
    bottomDivThree.classList.add("bottom-div");
    const bottomParaThree = document.createElement("p");
    bottomParaThree.innerText = "Tasty Coffee";
    

    bottomDivOne.append(coffeePic, bottomPara);
    bottomDivTwo.append(croissantPic, bottomParaTwo);
    bottomDivThree.append(menuPic, bottomParaThree);
    bottomContainer.append(bottomDivOne, bottomDivTwo, bottomDivThree);

    imageContainer.classList.add("image-container")
    bottomContainer.classList.add("bottom-container");

    title.innerText = "Bienvenue Chez Nous";
    subTitle.innerText = "De l'arbre a la tasse."
    para.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      
    textContainer.append(title, subTitle, para);
    main.append(textContainer, imageContainer);
    document.body.append(main);
    document.body.append(bottomContainer);
}

createNav();
createMain();




