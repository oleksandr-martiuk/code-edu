// define a function
const myFunction = () => {
    console.log(this);
};

// call it
myFunction();

const myObject = {
    myArrowFunction: null,
    myMethod: function () {
        this.myArrowFunction = () => {
            console.log(this);
        };
    }
}

myObject.myMethod()         // this === {}

myObject.myArrowFunction()  // this === myObject

const myArrowFunction = myObject.myArrowFunction;
myArrowFunction()           // this === myObject
