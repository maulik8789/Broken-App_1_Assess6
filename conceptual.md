### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  <!-- Answer:-  Using axios, fetch, https, get -->

- What is a Promise?
  <!-- Answer:-  A Promise means, a single value will be returned and there are 3 states:  
                              1. what is being asked is Pending to be returned.
                              2. what is being asked is Resolved and will be returned.
                              3. the values that is asked is not Resolved Hence is Rejected(an error message) -->

- What are the differences between an async function and a regular function?
  <!-- Answer:-  A regular function will run in sequencial manner and will execute one line after another at a default javascript speed.
            And am async function will look for an await command, if there is any, and will wait until that particular command returns either Resolved value or a message showing the value is Rejected with the error message. -->

- What is the difference between Node.js and Express.js?
  <!-- Answer:-  NodeJS is a Javascipt environment to which can execute JS code outside of a browser;
            ExpressJS is a framework that uses features of NodeJS and has its own feature on top of that. -->

- What is the error-first callback pattern?
  <!-- Answer:-  This function takes its first argument as an error object, and it looks for any error occurance.
            Its second argument is reserved for the callback function. if no error is there, error object is set to null and resolved data is returned by the function -->
- What is middleware?
    <!-- Answer:-  It is code that runs in the middle of the request / response cycle of a promise. I.E. functions that have access to
    Request(req) objects or Response(res) objects. -->

- What does the `next` function do?
  <!-- ANswer:-  `next()` runs code below the line it is written; it is required after the execution of a middlewware function.
            when we use `return next()`; we will jump out of the callback and the code below remains unreachable. This is usually used when error is occured. -->
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

```js RESOLVED
async function getUsers() {
  const elie = await axios.getJSON('https://api.github.com/users/elie');
  const joel = await axios.getJSON('https://api.github.com/users/joelburton');
  const matt = await axios.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie.results, matt.results, joel.results];
}
getUsers()
```
