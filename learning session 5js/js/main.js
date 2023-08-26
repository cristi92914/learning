import * as DOM  from "./DOM_lib.js";
import { setCallbackForReadyStateComplete } from "./util.js";

setCallbackForReadyStateComplete(initApp);

function initApp() {
    const el = DOM.getElemBySelector(".container");
    const START = 0;
    const END = 9;
    let i = START;
    while (i < END) {
        appendDiv(el, i);
        i += 1;
    }
}

function appendDiv(p, i){
    DOM.appendToParent(p, newDiv(i));
} 


let curDiv = null;
function hoverListener(e) {
    // curDiv
    console.log(`${e.clientX}, ${e.clientY}`);
    DOM.appendToParent(curDiv, )
}

function newDiv(i){
    
    if (i == 0)
        return div0();

    if (i % 3 == 0)
        return newSpecialDiv(i);

    const p = DOM.newElement('div');
    DOM.appendTextToElem(p, `${i}`);
    // p.addEventListener("mouseover", hoverListener, false);
    curDiv = p;
    p.addEventListener("mousemove", hoverListener, false);

    // document.addEventListener("focus")

    return p;
}

function newSpecialDiv(i) {
    const p = DOM.newElement('div');

    const c = DOM.newElement('p');
    DOM.appendTextToElem(c, `${i}`);

    DOM.appendToParent(p, c);


    return p;
}

function buttonListener(e) {
    const txt = prompt("Enter new size of grid");
    console.log(txt);
}

function createButton() {
    const b = DOM.newElement('button');
    DOM.appendTextToElem(b, `button`);

    b.addEventListener("click", buttonListener, false);

    return b;
}

function div0() {

    const p = DOM.newElement('div');
    const b = createButton();
    
    DOM.appendToParent(p, b);


    return p;
}


