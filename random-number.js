// Math.random() returns a random decimal number
// (0 - 0.99999999999999999999999999999999)

// randum number between 0 and max-1
function randomNumber (max) {
  return Math.floor(Math.random() * max);
}

// random number between 0 and 5
console.log( randomNumber(6) );

// random number between 0 and 19
console.log( randomNumber(20) );


function coinFlip () {
  if (randomNumber(2) === 0) {
    // return "tails" if the result is 0
    return "pile";
  }
  else {
    // return "heads" if the result is 1
    return "face";
  }
}

console.log( coinFlip() );
console.log( coinFlip() );
console.log( coinFlip() );
console.log( coinFlip() );
