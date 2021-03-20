function rangeOfNumbers(startN, endN) {
    if (startN - endN === 0) {
     return [startN];
    } else {
     const numbers = rangeOfNumbers(startN + 1, endN);    
     numbers.unshift(startN);
     return numbers;
    }
   };

console.log(rangeOfNumbers(2, 5));
module.exports = rangeOfNumbers;
