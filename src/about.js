export function createAbout() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "on est un putain cafe ou le gens peuvent boire du cafe"
    document.querySelector(".content").append(paragraph);}