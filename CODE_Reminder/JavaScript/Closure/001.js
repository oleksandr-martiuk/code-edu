function closure(){
    return runFun(14, 3);
    function runFun (a, b) {
        return a * b;
    }
}

const clFun = closure;
console.log(clFun instanceof closure);  // false
console.log(clFun instanceof Object);   // true

console.log(closure());
