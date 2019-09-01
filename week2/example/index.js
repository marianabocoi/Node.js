const name = process.argv[2]

function hello(name = 'you') {

  console.log(`Hello, ${name}`)
}

hello(name)
const randomNumber = Math.floor(Math.random() * 200) + 1
console.log(randomNumber)