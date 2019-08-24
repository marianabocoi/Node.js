# Node.js Part1 - basic setup

## Install Node

Follow [instructions in main README](../../README.md#node-js-setup)

## Check `Node.js` and `npm` versions

Run in a command line:

```bash
node -v
npm -v
```

## Install yarn

```bash
npm install -g yarn
yarn -v
```

## Basic local javaScript file

Create a file called `hello.js` containing:

```javascript
console.log("Hello world!")
```

Run the file in a terminal by navigating to the folder and running:

```bash
node hello.js
```

## REPL  `R`ead-`E`val-`P`rint `L`oop

To start a Node.js REPL one types node in a command line

```bash
node hello.js
```

When the promt changes you can run any javaScript code and evaluate it.

Examples:

```javascript
1+1
console.log("it works")
1==2
2==2
"apple"=="orange"
23/7
```
