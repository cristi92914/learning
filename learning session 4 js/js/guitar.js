// export default const playGuitar = () => {
//     return "Playing guitar!";
// }

// export default function playGuitar() {
//     return "Playing guitar!";
// }

export class User { 
    constructor(email, name) {
        this._email = email;
        this._name = name;
    }
    greetings() {
        console.log("Hello, world!");
    }
}

export const playGuitar = () => {
    return "Playing guitar!";
}


export const shredding = () => {
    return "Shredding some licks!";
}

const plucking = () => {
    return "Playing guitar!";
}
