console.log(typeof a);  // function
console.log(typeof b);  // undefined

function a(){
    return 5;
}

var b = function(){
    return 5;
}

console.log(typeof a);  // function
console.log(typeof b);  // function

// ---------------------------------------------------------------------------------

console.log(~~3.14);
console.log(~3.14);

// ---------------------------------------------------------------------------------
