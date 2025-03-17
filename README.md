# node-learn

### Table of Concepts

#### what is node JS 
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side. Node.js is designed to handle a large number of concurrent connections, making it a popular choice for real-time web applications.

Two different ways to execute node code:
**REPL**
- Great for testing and experimenting with code
- Execute as you write
**Execute Files**
- Used for real apps
- predictable sequence of steps

## [:top:](#table-of-concepts)

#### REPL
The REPL (Read-Eval-Print-Loop) in Node.js is an interactive shell environment that allows users to execute JavaScript code and receive immediate feedback. It's a built-in tool that comes with Node.js and provides a way to test code snippets.
- **Read:** It reads the JavaScript code entered by the user.
- **Eval:** It evaluates the code and executes it.
- **Print:** It prints the result of the execution to the console.
- **Loop:** It loops back to the read step, waiting for the next input.

## [:top:](#table-of-concepts)

#### Creating node server  
- **http:** This is the built-in HTTP module in Node.js.
- **createServer:** This is a function that creates a new HTTP server.

First parameter - request listener
- contains data about the request
Second parameter - response listener
- help you send a response

```
const server = http.createServer((req, res) => {
    console.log('Server is running', req);
});

//server listen - start the server
server.listen(3000);
```
## [:top:](#table-of-concepts)

#### Core modules
- http - Launch a server, send request
- https - Launch a SSL Server
- fs - File system
- path - 
- OS

## [:top:](#table-of-concepts)

#### Event Loop
It handle event callbacks.
event loop is a mechanism that allows Node.js to handle multiple tasks concurrently. It's a single-threaded, non-blocking I/O model that enables efficient handling of multiple requests and tasks.

Keep on running as long as there are event listeners are registered

The event loop operates in several phases:
1. **Timers:** Executes callbacks scheduled by setTimeout() and setInterval().
2. **Pending:** Executes I/O callbacks that were deferred to the next loop iteration.
3. **Idle:** Executes idle callbacks.
4. **Poll:** Retrieves new I/O events and executes their callbacks.
5. **Check:** Executes setImmediate() callbacks.
6. **Close:** Executes callbacks for closed connections, such as socket.on('close', ...).

#### Single Thread
- **Single Thread:** Node.js uses a single thread to execute JavaScript code
- **Blocking:** If a thread is blocked, it can't execute other tasks

## [:top:](#table-of-concepts)

#### Streams & Buffers
- **Stream:** A stream is a sequence of data that is read or written in a continuous flow
- **Buffer:** A buffer is a contiguous block of memory used to store data

#### Types of Errors
- **Syntax Error:** Error in the code
- **Runtime Error:** Error that occurs during execution
- **Logical Error:** Error in the logic of the code
- **Reference Error:** Error that occurs when a variable is not defined
- **Type Error:** Error that occurs when a variable is of the wrong type
- **Range Error:** Error that occurs when a value is out of range
- **Reference Error:** Error that occurs when a variable is not defined

#### Express JS
Express .js is a popular Node.js web framework that provides a flexible way to handle HTTP requests and responses.

Alternative to express js:
- Vanilla Node.js 
- Adonis.js
- Koa.js
- Sails.js

.use()


