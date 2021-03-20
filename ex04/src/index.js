function sumFibonacci(num) {
    let arr = [1, 1];
    let count = 0;
    let fibNums;

    if (num <= 0) {
        return 0;
    }

    while (num > count) {
        fibNums = arr[count] + arr[count + 1];

        if (fibNums <= num) {
            arr.push(fibNums);
        }

        count++;
    }

    return arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b);

}

console.log(sumFibonacci(4));
module.exports = sumFibonacci;
