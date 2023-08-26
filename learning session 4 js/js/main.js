"use strict"

// console.log("Hello, world!");
// console.log(typeof "Dave");
// console.log(typeof 42);
// console.log(typeof true);

// const myVariable = "Mathematics";

// l = myVariable.length
// i = Math.floor(Math.random() * l);
// console.log(myVariable.charAt(i));
const initApp = () => {
    const main = document.querySelector("main");

    // nav
    const nav = document.createElement("nav");
    main.appendChild(nav);

    // My page
    const myPage = document.createElement("div");
    myPage.classList.add("myPage");
    const textnode = document.createTextNode("My page");
    myPage.appendChild(textnode);
    nav.appendChild(myPage);

    // section
    const node = document.createElement("section");
    main.appendChild(node);

    // section div
    const section = document.querySelector("section");
    const appendDiv = (i) => {
        const node = document.createElement("div");
        const textnode = document.createTextNode(i.toString());
        node.appendChild(textnode);
        node.classList.add(`div-${i}`);
        section.appendChild(node);
    }

    // create divs
    for (let i = 1; i <= 12; i++) {
        appendDiv(i);
    }

    // darkblue even
    const evenDivs = section.querySelectorAll("div:nth-of-type(2n)");
    for (let i = 0; i < evenDivs.length; i++){
        // evenDivs[i].style.backgroundColor = "darkblue";
    }

    const node1 = document.createElement("div");
    const node2 = document.createElement("div");
    const node3 = document.createElement("div");
    const section2 = document.createElement("section");
    const textnode3 = document.createTextNode("View 2");
    node3.appendChild(textnode3);
    node2.appendChild(node3);
    node1.appendChild(node2);
    section2.appendChild(node1);
    section2.classList.add("view-2");
    section.classList.add("view-1");
    main.appendChild(section2);
    // section2.appendChild(node1)

    section2.style.display = "none";

    node3.addEventListener("click", (e) => {
        // alert("node3");
        // const p = e.target.parentElement.parentElement;
        // const p = e.currentTarget;
        e.stopPropagation();
        const p = e.currentTarget;
        p.style.backgroundColor = "turquoise";
        e.target.textContent = "Clicked";
    });

    node2.addEventListener("click", (e) => {
        // alert("node2");
        // const p = e.target.parentElement;
        const p = e.currentTarget;
        p.style.backgroundColor = "blue";
    });

    node1.addEventListener("click", (e) => {
        // alert("node1");
        e.currentTarget.style.backgroundColor = "lightblue";
    });

    const myObject = {
        name: "Dave",
        logName: function () {
            console.log(this.name);
        },
        hobbies: ["eat", "sleet", "code"]
    }

    const myArray = JSON.stringify(myObject);
    // const myArray = 1;
    // ["eat", "sleet", "code"];

    const n = "myLocalStore";
    sessionStorage.setItem(n, myArray);
    const d = sessionStorage.getItem(n);
    // const mySessionData = JSON.parse(d);
    const mySessionData = d;
    // console.log(mySessionData);
}


const func = (e) => {
    // alert("func fired");
    // e.target.textContent = "Clicked";
    if (e.target.readyState === "complete")
    // e.preventDefault();
    // Guitar.playGuitar();

        initApp()
}

document.addEventListener("readystatechange", func, false);
