// Fetch random meal data from TheMealDB API
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Random Meal Data:", data.meals[0]); // Display a single random meal
    })
    .catch(error => console.error("Error fetching random meal data:", error));

// Fetch all categories from TheMealDB API
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Meal Categories:", data.categories); // Display all meal categories
    })
    .catch(error => console.error("Error fetching meal categories:", error));

// Fetch meals by search term (e.g., 'chicken')
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Meals with 'chicken':", data.meals); // Display meals with "chicken" in the name
    })
    .catch(error => console.error("Error fetching meals by search term:", error));
