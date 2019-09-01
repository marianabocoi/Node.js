// run with 
// npm start Mariana

function hello(name) {

  console.log(`Hello, ${name}!`)
}

const name = process.argv[2];

hello(name)