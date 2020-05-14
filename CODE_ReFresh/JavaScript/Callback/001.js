const yo = (first, second) => {
    const result_1 = first();
    console.log('---------> ', result_1);

    const result_2 = second();
    console.log('---------> ', result_2);

    return result_1 * result_2;
}

const some_1 = function() {
    return this.a + this.b;
}
const some_2 = function() {
    return this.z * this.x;
}

const f_Ctx = {a:5, b:6};
const s_Ctx = {z:50, x:60};

const newSome_1 = some_1.bind(f_Ctx);
const newSome_2 = some_2.bind(s_Ctx);

const yoResult = yo(newSome_1, newSome_2);
console.log(yoResult);
