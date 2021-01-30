function getFunctionName(f) {
   console.log(f.name);
}

const hello = () => console.log(`I'm function "Hello()" :)`);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

getFunctionName(hello);
