const a = { duration: 50, title: '' };

// TODO: check later (current Error [09 Feb 2021]: "SyntaxError: Unexpected token '||='")

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"
