// run with 
// npm start Mariana

const fs = require('fs');
const readline = require('readline')

const DEFAULT_ENCODING = 'utf8';
const STORE_FILE_NAME = 'words.txt';
let word

function getNumber() {
  return Math.floor(Math.random() * 200) + 1
}

function readFile() {
  return new Promise(
    resolve => fs.readFile(
      STORE_FILE_NAME,
      DEFAULT_ENCODING,
      (err, data) => resolve(err ? '' : data)
    )
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess> '
});

rl.on('line', (line) => {
  console.log(line);
  console.log(word);
}).on('close', () => {
  process.exit(0);
});

async function hamgperson(name) {
  console.log(`Hello, ${name}!\nGuess the word.`)
  const randomNumber = getNumber()

  const data = await readFile()
  const words = data.split(/\r?\n/)
  word = words[randomNumber - 1]
  const wordPlaceholder = '_ '.repeat(word.length)
  console.log(`${wordPlaceholder}(${randomNumber})`)
  rl.prompt();
}

const name = process.argv[2];

hamgperson(name)