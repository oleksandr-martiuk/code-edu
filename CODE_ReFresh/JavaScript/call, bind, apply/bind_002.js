function greet(company, message) {
   console.log(`${this.name} our organization "${company}" is happy to congratulate you! ${message}`);
}

const myGreeting = greet.bind({name: 'Tom'}, 'Coca-cola');

myGreeting('You are welcome!');
