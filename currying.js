function addOne(num1){
    return function addTwo(num2){
        return  function addThree(num3){
            return num1 + num2 + num3;
        }
    }
}


const result = addOne(1)(2)(3)

console.log(result)