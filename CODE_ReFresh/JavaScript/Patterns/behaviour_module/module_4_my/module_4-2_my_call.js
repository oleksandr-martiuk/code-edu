const myModule4_first = require('./module_4-1_my');

myModule4_first.getItem();

myModule4_first.increaseItem();
myModule4_first.increaseItem();
myModule4_first.increaseItem();
myModule4_first.increaseItem();
myModule4_first.increaseItem();

myModule4_first.decreaseItem();

myModule4_first.getItem();

//----------------------------------------------------------------------------------------------------------------------
const myModule4_second = require('./module_4-1_my');

// (!) getting link to the previous state of module 'module_4-1_my'
myModule4_second.getItem();
