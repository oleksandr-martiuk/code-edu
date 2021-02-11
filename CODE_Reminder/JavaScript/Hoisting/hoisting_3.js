// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
// You can use the function before you declared it:

hoisted(); // logs "foo"

function hoisted() {
   console.log('foo');
}

//----------------------------------------------------------------------------------------------------------------------

// Note that function expressions are not hoisted:

notHoisted();  // TypeError: notHoisted is not a function
               // ReferenceError: Cannot access 'notHoisted' before initialization

const notHoisted = function() {
   console.log('bar');
};
