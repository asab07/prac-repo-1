const heading = document.querySelector("h1");
const paragraph = document.querySelector('p')

const sayHello = (name) => `Hello ${name}!`;

heading.textContent = sayHello("Adeel");
console.log('Hello world');

