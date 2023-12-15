// let a = 1;
// let b = 2;
// let c = b +2;


// console.log(a)
// console.log(b)
// console.log(c)

// Here when we change b value in c variable then b's value is not changed and this is because pass by value;


// Pass by reference

// let a = [1, 2, 3];
// let b = a;

// a.push(4, 5, 6)


// console.log(a)
// console.log(b)


// When we made change in one variable then the values of the both the variables changes 
// because both the variable points to the same memory location

// Important 

let arr = [1, 2];   
let b = [1, 2];   
// let b = arr;


console.log(`arr == b ${arr == b}`);
console.log(`arr == b ${arr === b}`);
