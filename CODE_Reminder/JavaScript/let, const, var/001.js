var a = 3;
{
    var a = 555;
    console.log('1. ', a);
}
console.log('2. ', a);

// 1. 555
// 2. 555

// --------------------------

let b = 11;
{
    let b = 555;
    console.log('1. ', b);
    console.log(this);
}
console.log('2. ', b);

// 1. 555
// 2. 3
