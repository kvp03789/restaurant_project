import DividerOne from './images/coffee-divider.jpg';
import './menu-style.css';

export const makeMenu = function() {
    const coffeeDivider = new Image();
    const contentDiv = document.querySelector(".content")
    coffeeDivider.src = DividerOne;
    contentDiv.append(coffeeDivider);
}
