class Parent {
    constructor(){
        this.a = 55;
    }
    getA(){
        return this.a;
    }
}

const p = new Parent();
console.log('Parent: ', Parent);
console.log('Parent (instance): ', p);

console.log('-------------------------------------------');

class Child extends Parent {
    constructor(){
        super();
        this.b = 77;
    }

    getB(){
        return `This is call from the Child: ${this.b}`;
    }
}

const ch_1 = new Child();

console.log('Child: ', Child);
console.log('Child (instance): ', ch_1);
console.log('ch_1.getA() ---> ', ch_1.getA());
console.log('ch_1.getB() ---> ', ch_1.getB());

console.log('-------------------------------------------');
