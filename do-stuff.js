// return allows the function to share a result with the rest of the program
function doStuff (theNumber) {
  return theNumber ** 2;
}


console.log( doStuff(5) );
// console.log(theNumber ** 2);
// console.log(5 ** 2);
// console.log(25);

console.log( doStuff(10) );
// console.log(theNumber ** 2);
// console.log(10 ** 2);
// console.log(100);

var result = doStuff(7);
// var result = theNumber ** 2;
// var result = 7 ** 2;
// var result = 49;
console.log(result);

console.log( (doStuff(8) + 1) * (4 / doStuff(2)) );
// console.log( (8 ** 2 + 1) * (4 / 2 ** 2) );
// console.log( (64 + 1) * (4 / 4) );
