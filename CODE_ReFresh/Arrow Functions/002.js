const b = 3;
const obj1 = {
    fun11: function(){
        console.log(this.b);
    }
}

obj1.fun();
console.log(obj1);
console.log('-------------------------');

// -------------------------------------|
// -------------------------------------|

const a = 25;
const obj2 = {
    a: 15,
    fun21: () => {
        // const a = 1;
        console.log('this.a = ', this.a);
        console.log('a = ', a);
        console.log('this = ', this);
    },
    fun22() {
        console.log('this = ', this);
    },

}

obj2.fun1();
obj2.fun2();
console.log(obj2);
console.log('-------------------------');

{
    m = 11;
    (function hello(){
        console.log(m);
    })();
}
console.log('-------------------------');

// -------------------------------------|
// -------------------------------------|

