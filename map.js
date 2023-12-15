const arr = [1, 2, 3, 4, 5];


function double(x){
    return x * x;
}
const result = arr.map(double)

console.log(result);


// NUMBER TO BINARY 

    function binary(x){
        return x.toString(2)
    }

 const binaryResult = arr.map(binary)
 console.log(binaryResult);
 console.log(arr);


