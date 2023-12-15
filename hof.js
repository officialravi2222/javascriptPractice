function x(){
    console.log("x called")
}


function y(args){
    args();
}

y(x);