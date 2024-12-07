let firstYear = parseInt(prompt("Enter the first year:"));
let lastYear = parseInt(prompt("Enter the last year:"));

let leapYearCount = 0;
for (let i = firstYear; i <= lastYear; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        leapYearCount++;
    }
}
console.log("Total leap years in the range: " + leapYearCount);
