let firstNumber = parseInt(prompt("Enter the first number of the range:"));
let lastNumber = parseInt(prompt("Enter the last number of the range:"));

let sum = 0;
for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("The sum of all even numbers in the range is: " + sum);