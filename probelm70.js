/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    1: 1
    2: 11, 2
    3: 111, 12, 21
    4: 1111, 112, 211, 121, 22
    5: 11111, 1112, 1121, 1211, 2111, 212, 221, 122 */
    // This was the visualization offered by the collaboration of my previous professor, Robin Clower. Using this visualization I could more easily identify any patterns to which he pointed out to me that this is the Fibonacci sequence

    let fibonacciArray = [1, 1, 2]; // Created an array for the first numbers in the Fibonacci sequence since up to number 2 the Fibonacci sequence has exceptions.
    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            let nextInArray = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(nextInArray);
        }
        return fibonacciArray[n];
    } else {
        return fibonacciArray[n];
    }
};