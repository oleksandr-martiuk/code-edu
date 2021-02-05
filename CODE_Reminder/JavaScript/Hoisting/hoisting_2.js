console.log('yo');
try {
   run('Misha', 10);
} catch(e) {
   console.log(e.stack.split('\n')[0]); // ReferenceError: Cannot access 'run' before initialization
}

walk('Timur', 'park');

const run = (name, distance) => console.log(`${name} is running for the distance of ${distance} km`);

function walk(name, place) {
   console.log(`${name} is walking in the ${place}`);
}
