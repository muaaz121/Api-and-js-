// Function to calculate average of even numbers in a range
function averageEvenNumbers(first, last) {
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;  // To avoid division by zero
}

// Function to calculate average of odd numbers in a range
function averageOddNumbers(first, last) {
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;  // To avoid division by zero
}

// Ask user for the range of numbers
let firstNumber = parseInt(prompt("Enter the first number of the range:"));
let lastNumber = parseInt(prompt("Enter the last number of the range:"));

// Call the functions to get averages
let evenAvg = averageEvenNumbers(firstNumber, lastNumber);
let oddAvg = averageOddNumbers(firstNumber, lastNumber);

// Display the results
console.log("Average of even numbers in the range: " + evenAvg);
console.log("Average of odd numbers in the range: " + oddAvg);
