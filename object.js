// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   let bioData = "";

//   for(let iter in person){
//     bioData = bioData + person[iter] + "  <<<  "
//   }

//   console.log(bioData);

// const arr = ["Geeks", "for", "Geeks"];
// const obj = {...arr};
// console.log(obj);

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  const arr = [...person]
  console.log(arr)