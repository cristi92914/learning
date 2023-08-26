export function appendTextToElem(el, txt) {
    el.textContent += txt;
}

export function newElement(tag) {
    return document.createElement(tag);
}

export function appendToParent(parent, child) { 
    return parent.appendChild(child);
}

export function getElemBySelector(sel) {
    return document.querySelector(sel);
}

export function getElemsBySelector(sel) {
    return document.querySelectorAll(sel);
}