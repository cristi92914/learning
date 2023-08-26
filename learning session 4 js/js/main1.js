// import * as Guitar from "./guitar.js";
// console.log(Guitar.default());
// console.log(Guitar.default());

// import {playGuitar, shredding} from "./guitar.js";
// console.log(playGuitar(), shredding())

// import {User} from "./guitar.js";
// const u = new User("1", "2");
// console.log(u);
// u.greetings();

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the promise!");
//     } else {
//         reject("No! rejected the promise.");
//     }
// })

// console.log(myPromise);

// myPromise.then(value => {
//     // console.log(value);
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log(err);
// });

// const myNextPromise = new Promise((resolve, reject) => {
//     // const error = true;
//     // if (!error) {
//     //     resolve("Yes! resolved the promise!");
//     // } else {
//     //     reject("No! rejected the promise.");
//     // }
//     setTimeout(function() {
//         resolve("myNextPromise resolved!");
//     }, 3000);
// });

// myPromise.then(value => {
//     console.log(value);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
// console.log(users);

// const myUsers = {
//     userList: []
// };

// const getAllUserEmails = async (c) => {
// // async function myCoolFunction() {
// // const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     // console.log(jsonUserData);
//     // jsonUserData.forEach(user => {
//         // console.log(user);
//     // });
//     // return jsonUserData;


//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     })

//     // console.log(userEmailArray);
//     // return u(serEmailArray;

//     postToWebPage(userEmailArray);
// }

// // console.log(getAllUserEmails());

// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

// myCoolFunction();


// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log("here", myUsers.userList);
//     console.log(data);
// }

// anotherFunc();
// console.log(myUsers.userList);

// OR

// const users1 = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         });
//     })

// console.log(users1);

//////////////////////////////////////////////////////////// 

// 2nd parameter of Fetch is an object

const myUsers = {
    userList: []
};

const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "Why was it called the dark ages? Because of all the knights.",
    // status: 200
}

// const getDadJoke = async (c) => {
const postData = async (jokeObj) => {
// async function myCoolFunction() {
// const myCoolFunction = async () => {
    // @Crossorigin
    try {

        /**
         * (async () => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();

  console.log(content);
})();
         */

        const url = "https://httpbin.org/post/";
        const response = await fetch(url, {
            method: "POST",
            // mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "*",
                // "Access-Control-Allow-Origin": "no-cors",
                // "Access-Control-Allow-Origin": "no-cors",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Origin": "no-cors",
                // "Access-Control-Request-Headers": "access-control-allow-origin, content-type"
                // "Access-Control-Request-Method": "POST"
                // "https://httpbin.org/post/"
                // "Access-Control-Allow-Headers": "Accept"
                // "Access-Control-Allow-Credentials": "true",
                // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "*",
            // "'Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token'",
                // "Access-Control-Allow-Origin": "*"
                // "Content-Type": "*"
                // Accept: "text/plain"
            }, 
            body: JSON.stringify(jokeObj)
        });
        // fetch(url)
        //     .then( response => response.json() )
        //     .then( data => console.log(data) )
    } catch (e) {
        console.error("--->", e);
    }
    console.log(response);
    // const jsonUserData = await response.json();
    // const textJokeData = await response.json();
    // console.log(jsonJokeData);
    // console.log(textJokeData);
    // console.log(jsonUserData);
    // jsonUserData.forEach(user => {
        // console.log(user);
    // });
    // return jsonUserData;


    // const userEmailArray = jsonUserData.map(user => {
        // return user.email;
    // })

    // console.log(userEmailArray);
    // return u(serEmailArray;

    // postToWebPage(userEmailArray);
}

// console.log(getAllUserEmails());

// const postToWebPage = (data) => {
    // console.log(data);
// }

// getDadJoke();
postData(jokeObject);
// getAllUserEmails();
