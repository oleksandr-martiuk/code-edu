const car = {
    wheel: 4,
    color: 'Green'
}

// const carWithOwner = {...car, owner: 'Thor'};
const carWithOwner = Object.create(car, {
    owner: { value: 'Thor'}
});

console.log(carWithOwner);
console.log(carWithOwner.__proto__);
console.log(carWithOwner.__proto__ === car);
console.log(Object.getOwnPropertyNames(carWithOwner));
