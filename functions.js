let a = function (params){
    return function sd(){
        console.log("hello")
    }
}

console.log(a(function(){}))