function defaultCall() {
    console.log("Ready state change complete");
}

let call = defaultCall; 

export function setCallbackForReadyStateComplete(callback) {
    call = callback;
    document.addEventListener("readystatechange", detectComplete, false);
}

function detectComplete(e) {
    if (e.target.readyState === "complete") 
        call();
}
