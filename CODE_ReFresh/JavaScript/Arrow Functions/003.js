const a = 5;
const arrF = () => {
    console.log(this);
}

arrF();

console.log('----------------------------------------------');

console.log('this: ', this);
const obj = {
    a: 55,
    run() {
        console.log('obj (context): ', this);
    }
}
console.log('obj: ', obj);

console.log('----------------------------------------------');
