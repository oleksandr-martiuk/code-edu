var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
console.log(Object.keys(a));

// Explanation:
// ------------------------------------------------------------------------------------------------
// Когда у объекта устанавливается новое свойство, то JavaScript неявно сделает stringify значения.
// В коде выше b и c являются объектами, следовательно они оба конвертируются в "[object Object]"
// (String). Так как stringify значения равны, то получается, что мы присваиваем новое значение одному
// и тому же свойству.
// ------------------------------------------------------------------------------------------------

// var a={},
//     b='[object Object]',
//     c='[object Object]';

// a[b]=123;
// a[c]=456;