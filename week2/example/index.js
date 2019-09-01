const fs = require('fs')

const name = process.argv[2]

function hello(name = 'you') {

  console.log(`Hello, ${name}`)
}

hello(name)
const randomNumber = Math.floor(Math.random() * 200) + 1
console.log(randomNumber)

fs.readFile('words.txt', 'utf8', function (err, data) {
  if (err) throw error;
  console.log('It worked!')
  // console.log(data)
  const wordsArray = data.split('\n')
  console.log(wordsArray)
})
