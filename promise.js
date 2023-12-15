// const promiseNew = new Promise(function(resolve, reject){
//     setTimeout(() =>
//         console.log("timeout finished")
//     )
//     resolve({name:"Joohn"})
// },1000)

// promiseNew.then((x)=>{
//     console.log("called",x)
// });

// new Promise(function(resolve, reject){
//     setTimeout( function(){
//         console.log("setti")
//         resolve("reso")
//     },1000)
// }).then((params) => console.log(params))



// const promiseThree =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"John", age: 21, city: "New York"})
//     })
// })

// promiseThree.then((x) =>
//  console.log(x)
// )

const promiseFour = new Promise(function(resolve, reject){
    const error = true;

    setTimeout( function(){
        if(!error){
            resolve({name:"John", age: 21, city: "New York"})
        }
        else{
            reject("Promise Rejected")
        }
    }
    
    ,2000)
    
})

promiseFour.then((x) => 
  console.log(x)
).catch((err)=>
 console.log("Error",err)
)

