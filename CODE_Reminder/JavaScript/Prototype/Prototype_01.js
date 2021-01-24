// 'Hello'.run();

String.prototype.run = () => {
    const str = 'HELLO from function run()';
    return str;
};

const len = 'Hello'.length;
const result = 'Hello'.run();

console.log('Str.length = ', len);
console.log('Str.run() = ', result);
