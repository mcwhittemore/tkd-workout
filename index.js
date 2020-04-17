const moves = require('./moves');
let last = Date.now();
process.stdin.on('data', () => {
  last = Date.now();
});

const word = process.argv[2].toUpperCase();

run().then(() => {
  process.exit();
})


async function run() {
  console.log(`Lets do some "${word}"`);
  for(let i=0; i<word.length; i++) {
    const letter = word[i];
    const move = moves[letter] || 'Breath';
    console.log(move);
    await ready();
  }
  console.log('Great job!');
}

async function ready() {
  return new Promise(resolve => {
    wait(Date.now(), resolve);
  });
}

function wait(when, resolve) {
  if (when < last) return resolve();
  setTimeout(() => wait(when, resolve), 10);
}


