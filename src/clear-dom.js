export function clearDom() {
    const containerDiv = document.querySelector(".content")
    while (containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.lastChild);
    }
    
}