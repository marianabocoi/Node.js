# Node.js Part2 - project

## Hello world project

To start with we will create a simple project that prints `Hello world!`

### Initiate a project

To start a node project go in the command line to a folder where you would like to have your code and run:

```bash
npm init
# press enter all the way then type yes
```

### Basic files

create a file called `index.js` with the following content:

```javascript
function hello() {
  console.log("Hello World!");
}
hello();
```

### Configure start command

To run the project we need to configure a start command. We do this by editing the `package.json` adding a `start` command in the `scripts section`:

```json
...
"scripts": {
    "start": "node index.js"
  },
...
```

### Run project

Run in a comandline by running the folowing command in the foleder:

```bash
npm start
```

## Adding dependencies

### Code dependencies

Running `npm install -s` installs the dependency package and saves (`-s`) the dependency in the `package.json` configuration.

Example: Adding a date formater ([date-fns](https://date-fns.org/))

```bash
npm install -s date-fns
```

### Development dependencies

For Things you need during development such as unit test, minification or linting. It works the same as code dependencies but instead of `-s` you should use `--save-dev`

Example: Adding a linter ([date-fns](https://date-fns.org/))

```bash
npm install --save-dev eslint
npx eslint --init
```

Configure linter

```bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Add the `standard` config in the `.eslintrc.json`

```json
"extends": "standard",
```

Running the lint check on a file:

```bash
npx eslint index.js
```

We can also add custom rules by

## Importing modules

Now that we have [date-fns](https://date-fns.org/) let's use it.

On top of index.js we should require the parts of the libraries we need

```javascript
const { format, formatDistance, formatRelative, subDays } = require('date-fns')
```

Add the following code in index.js instead of console.log('Hello world!')

```javascript
 const now = new Date()
  console.log(format(now, "'Today is 'iiii"))
  // => 'Today is a Sunday'
  console.log(formatDistance(subDays(now, 3), now))
  // => '3 days ago'
  console.log(formatRelative(subDays(now, 3), now))
  // => 'last Thursday at 11:26 a.m.'
```

if we run it with npm in the commandline

```bash
npm start
```

we see:
>Today is Saturday  
>3 days  
>last Wednesday at 8:00 PM

## Building a simple http server

### Simple start

If we take an example from [W3 Schools](https://www.w3schools.com/nodejs/nodejs_http.asp) and change our `index.js`

```javascript
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

Run server

```bash
npm start
```

Then we have a basic server that can be accesses at [localhost:8080](http://localhost:8080), open it in a browser or [Postman](https://www.getpostman.com/)

### Refactor to give address hint

We can put the code in a function and then list out the url for whomever is interesed, similar to how we created hello world example

```javascript
var http = require("http");

//create a server object:
function createServer() {
  //create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
  console.log("Sertver started on: http://localhost:8080/");
}

createServer();
```

### Serve the content as `json`

add a header line to the response:

```javascript
...
    .createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ greeting: "Hello World!" })); //write a response to the client
      res.end(); //end the response
    })
...
```

### Only respond to hello endpoint

Otherwise throw errors

```javascript
...
.createServer(function (req, res) {
  if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ greeting: "Hello World!" })); //write a response to the client
  }else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ error: "Error" })); //write a response to the client
  }
  res.end(); //end the response
})
.listen(8080); //the server object listens
```

### Refactor using `switch` instead of if

```javascript
...
.createServer(function (req, res) {
  switch (req.url) {
    case "/hello":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ greeting: "Hello World!" })); //write a response to the client
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ error: "Error" })); //write a response to the client
  }
  res.end(); //end the response
})
.listen(8080); //the server object listens
```
