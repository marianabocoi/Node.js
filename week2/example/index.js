const fs = require('fs')

function hello(name = 'you') {
  console.log(`Hello, ${name}`)
}

// Getting a random number between 1 and 200
const randomNumber = Math.floor(Math.random() * 200) + 1

const name = process.argv[2]

hello(name)

data = fs.readFileSync('words.txt', 'utf8')
const wordsArray = data.split('\n')
let randomWord = wordsArray[randomNumber - 1]
console.log(`Word to guess: ${randomWord} (${randomNumber})`)

fs.writeFile('randomWord.txt', randomWord, function (err) {
  if (err) throw error;
  console.log('Saved word to files')
})