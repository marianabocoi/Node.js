// run with 
// npm start Mariana

const fs = require('fs');

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

function hello(name) {
  console.log(`Hello, ${name}!`)
  console.log(getNumber())
  readFile().then(data => {
    words = data.split(/\r?\n/);
    for (let index = 0; index < 10; index++) {
      console.log(words[index])
    }
  })
}

const name = process.argv[2];

hello(name)