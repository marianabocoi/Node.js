// run with 
// npm start Mariana

const fs = require('fs');
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess> '
});

rl.on('line', (line) => {
  console.log(line);
}).on('close', () => {
  process.exit(0);
});

const DEFAULT_ENCODING = 'utf8';
const STORE_FILE_NAME = 'words.txt';

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

function hamgperson(name) {
  console.log(`Hello, ${name}!\nGuess the word.`)
  const randomNumber = getNumber()

  readFile().then(data => {
    words = data.split(/\r?\n/);
    const word = words[randomNumber - 1]
    const wordPlaceholder = '_ '.repeat(word.length)
    console.log(`${wordPlaceholder}(${randomNumber})`)
    rl.prompt();
  }).catch(console.error);
}

const name = process.argv[2];

hamgperson(name)