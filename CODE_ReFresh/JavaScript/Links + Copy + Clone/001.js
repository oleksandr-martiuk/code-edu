function checkStates(o1, o2) {
    console.log(o1.p);
    console.log(o2.p);
    console.log('-----------');
}

const o = { p: 'state 0' };
console.log(o.p);
console.log('-----------');

const link_1 = o;
link_1.p = 'state 1'
checkStates(o, link_1);

// wrong usage of 'Object.assign()'
const link_2 = Object.assign(o);
link_2.p = 'state 2';
checkStates(o, link_2);

const link_3 = Object.assign({}, o);
link_3.p = 'state 3';
checkStates(o, link_3);
