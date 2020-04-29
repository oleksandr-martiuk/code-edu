// We have 3 states of Promise
const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
}

class MyPromise {
    constructor(executor) {
        this.state = states.pending;        // 'Pending'

        // Methods below just helping change state

        try {
            console.log(`--- 'executor()' is working ---`);
            console.log(`executor ---> `, executor);
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }
}

// const natP = new Promise();
// console.log(natP); // TypeError: 'Promise resolver undefined is not a function'

const p1 = new MyPromise(
    // () => console.log('..... FIRST FUNCTION ....'),
    // () => {throw new Error('---> first error occured!')},
    // (arg => arg()),
    (arg => arg(42)),
    (yo) => console.log(yo, '..... SECOND FUNCTION ....')
);

console.log(p1);

// const p2 = new MyPromise();
// console.log(p2);

const getCallback = state => value => {
    this.value = value;
    this.state = state;
}

const resolve = getCallback(states.resolved);
const reject = getCallback(states.rejected);

// const midRes = resolve('yo');
// console.log(this.value);
// console.log(this.state);
