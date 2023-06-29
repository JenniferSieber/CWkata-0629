// KATA 1
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
  

  const A = a.reduce((acc,cv) => acc * cv);
  const B = b.reduce((acc,cv) => acc * cv);
  return Math.abs( A - B);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))
// KATA 2 
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n){
  return n * 2 -2; 
}

console.log(nthEven(1))
console.log(nthEven(2))
console.log(nthEven(3))
console.log(nthEven(100))
console.log(nthEven(1298734))

// KATA 3
// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
console.log('3')
function generateRange(min, max, step){
  let arr = [];
  for (let i = min; i <= max; i+=step) {
    arr.push(i);
  }
  return arr;
}
console.log(generateRange(2, 10, 2))
console.log(generateRange(1, 10, 3)) // [1,4,7,10]

// KATA 4
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
console.log('4')
function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  const A = a.map(num => Math.pow(num,2)).reduce((acc,cv) => acc + cv);
  const B = b.map(num => Math.pow(num,3)).reduce((acc,cv) => acc + cv);
  return A > B ? true : false;
}

console.log(arrayMadness([4,5,6],[1,2,3]))
console.log(arrayMadness([5,6,7],[4,5,6]))

// KATA 5
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent-1}`
}
console.log(derive(7, 8))


// KATA 6 
// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(width, height, depth) {
  return [(width * height + width * depth + height * depth) * 2, (width * height * depth)];
}
console.log(getSize(4, 2, 6))
console.log(getSize(10,10,10))