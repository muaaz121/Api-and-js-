let times = parseInt(prompt("How many times should 'Hello' be printed?"));

// Check if the input is a valid number
if (isNaN(times) || times <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    for (let i = 0; i < times; i++) {
        console.log("Hello");
    }
}