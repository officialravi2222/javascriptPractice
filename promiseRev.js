// PROMISE ONE

// 1..
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         console.log("Async is complete");
//     })
// })

// promiseOne.then(function(){
//     console.log("Async is consumed");
// })


/*
*Output:
*****   Async is complete
*/

// Here Async is consumed never printed because we have never connected .then with resolve


// 2...

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         console.log("Async is complete");
//         resolve()
//     })
// })

// promiseOne.then(function(){
//     console.log("Async is consumed");
// })

/*
*Output:
*****   Async is complete
        Async is consumed
*/

// 3....


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async is complete");
//         resolve()
//     })
// }).then(function(){
//     console.log("Promise Resolved")
// })


// How to pass data through resolve and get data in .then as args

// Case 4 :

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"Hitesh Choudhary",
//                 channel :"Chai aur code"
//     })
//     })
// })

// promiseFour.then(function(args){
//     console.log(`Name is ${args.name}  and channel name is ${args.channel}`)
// })



//  Case 5 :
// Q : Can we return a value inside Promise inside .then and store in another varible


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Hitesh Choudhary",
//             channel :"Chai aur code"
//         })}
//         else{
//             reject("Error : Something went wrong");
//         }
//         },1000
//     )
//     })

    // const returnedValue = promiseFive
    // .then(function(args){
    //     console.log("Inside .then")
    //     return args.channel
    // })
    // .then(function(args){
    //     console.log(args)
    // })
    // .catch(function(err){
    //     console.log(err)
    // })

    // console.log(returnedValue);

    // Hence we can't do this . Instead we can use another .then to get the value


    // ASYNC AWAIT

    // Case 6:
    // const promiseFive = new Promise(function(resolve, reject){
    //     setTimeout(function(){
    //         let error = true;
    //         if(!error){
    //             resolve({name:"Hitesh Choudhary",
    //             channel :"Chai aur code"
    //         })}
    //         else{
    //             reject("Error : Something went wrong");
    //         }
    //         },1000
    //     )
    //     })

    // async function consumePromiseFive(){
    //     const response = await promiseFive
    //     console.log(response)
    // }

    // consumePromiseFive();

// But while making a asnc function dont forget to call the async function

// Output : 
// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error : Something went wrong".] {
//   code: 'ERR_UNHANDLED_REJECTION'

// Here error is coming because we didnot made the condition for handling error


 // Case 7:
//  Handling the error using try catch block
//  const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name:"Hitesh Choudhary",
//             channel :"Chai aur code"
//         })}
//         else{
//             reject("Error : Something went wrong");
//         }
//         },1000
//     )
//     })

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }
// }

// consumePromiseFive();

// Output:
// Error : Something went wrong

// Here even the error is coming but we are handling the error gracefully


// Case 8 :
// Getting values from the API  using async await

// async function getAllUsers(){
//    const response = await fetch("https://jsonplaceholder.typicode.com/users")
//    const json =  await response.json()
//     console.log(json);
// }

// getAllUsers();



// Case 8:
// Same functionality with .then().catch()


    fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
         return response.json()
    }).
    then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
    .finally(function(){
        console.log("Promise is either resolved or rejected")
    })

// Case 8 and 9 give the same output but the code with .then().catch() is minified
 













