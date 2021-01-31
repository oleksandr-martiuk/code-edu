// 1. Arrow function doesn't have:
//    > this
//    > arguments

const x = 'x';

//-------------------------------------

const a = () => {
   console.log(this);
}

a(); // {}
console.log(typeof a); // function

//-------------------------------------

function b(){
   console.log('this: ', !!this);
}

b();
