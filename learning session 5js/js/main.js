import * as DOM  from "./DOM_lib.js";
import { setCallbackForReadyStateComplete } from "./util.js";


setCallbackForReadyStateComplete(initApp);
// document.addEventListener("readystatechange", detectComplete, false);

// function detectComplete(e) {
//     if (e.target.readyState === "complete") 
//         initApp()
// }

function initApp() {
    console.log("Hello, world!");

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

function newDiv(i){
    if (i > 0 && i % 3 == 0)
        return newSpecialDiv(i);

    const p = DOM.newElement('div');
    DOM.appendTextToElem(p, `${i}`);

    return p;
}

function newSpecialDiv(i) {
    const p = DOM.newElement('div');

    const c = DOM.newElement('p');
    DOM.appendToParent(p, c);

    DOM.appendTextToElem(c, `${i}`);

    return p;
}


