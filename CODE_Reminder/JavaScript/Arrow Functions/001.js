const context = { a: 5, b: 55 };

// ------------------------------------------------------------
// It is not possible to 'bind' context to the 'arrow function'

const aFun = () => {
    console.log('this: ', this);
    return this.a + this.b;
};

const aFunBind = aFun.bind(context);

const result_1 = aFunBind();
console.log(result_1);
console.log('-----------------------------------------------');

// ------------------------------------------------------------
// Binding 'context' to the 'function'

const simpleFun = function () {
    console.log('this: ', this);
    return this.a + this.b;
};

const result_2 = simpleFun();
console.log(result_2);
console.log('-----------------------------------------------');

const simpleFunBind = simpleFun.bind(context);

const result_3 = simpleFunBind();
console.log(result_3);
