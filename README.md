# React-Portfolio-website-

# 2.2 Hosted React Portfolio App link below
https://crisnzano.github.io/React-Portfolio-website-/

# 2.4 Q&A
-What is NPM? NPM (Node Package Manager) NPM is a package manager for Node.js and JavaScript. It facilitates the installation, sharing, and management of third-party libraries and tools needed for building and running JavaScript applications. For example npm start is used for starting React applications.

-What is SPA? SPA (Single Page Application) SPA is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.

-What is the event loop? The event loop continuously checks the message queue for events or tasks and executes them one by one. It allows non-blocking execution, enabling JavaScript to handle multiple tasks concurrently give the false impression of multithreading despite React being single threaded.

-What is the difference between export x and export default x? How do you import them differently? export x is used to export a named module. It allows you to export multiple values from a module, and when importing, you need to use the same name, whereas export default x is used to export a default module. It allows you to export only one value as the default export from a module.
Eg:
export const a = 1;
export const b = 2;

// Other file
import { a, b } from './Module';

Eg 2:
const x = 42;
export default x;

// Other file
import myValue from './Module';


-Why do you use className as a property in React and not class? Class is a special reserved property in React, className is used for CSS definition of an element.

-Why should you not write the following? What will happen? The code will invoke the setCounter function without waiting for the button click.
<button onClick={setCounter(counter + 1)}> +1 </button>

-What is object deconstruction and how is it connected to React components (example)? Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise way.
Eg:
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // 'John'
console.log(age);  // 30

-How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood? This is possible because JSX is a syntax extension that gets transpiled into JavaScript. Under the hood, tools like Babel are used to transform JSX code into corresponding JavaScript code. The React library then works with the resulting JavaScript to create and manage it.

-What is async/await? Bring an example - These are keywords used for handling asynchronous operations in a more synchronous-like manner. The async keyword is used to define an asynchronous function, and the await keyword is used inside the function to wait for a Promise to resolve.
Eg:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }


-What is a Promise? Bring an example - A Promise is an object in JavaScript representing the expected completion or failure of an asynchronous operation. If something happens then something else will happen.
Eg:
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
  if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }

