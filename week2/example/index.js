// run with 
// npm start Mariana

function getNumber() {
  return Math.floor(Math.random() * 200) + 1
}

function hello(name) {
  console.log(`Hello, ${name}!`)
  console.log(getNumber())
}

const name = process.argv[2];

hello(name)