// Fetch and display User data from JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse the response as JSON
    .then(users => {
        console.log("User Data:");
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => console.error("Error fetching user data:", error));

// Fetch and display Comments data from JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json()) // Parse the response as JSON
    .then(comments => {
        console.log("\nComments Data:");
        comments.forEach(comment => {
            console.log(`Comment ID: ${comment.id}, Post ID: ${comment.postId}, Name: ${comment.name}`);
        });
    })
    .catch(error => console.error("Error fetching comments data:", error));

// Fetch and display Posts data from JSON Placeholder API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
        console.log("\nPosts Data:");
        posts.forEach(post => {
            console.log(`Post ID: ${post.id}, Title: ${post.title}, Body: ${post.body}`);
        });
    })
    .catch(error => console.error("Error fetching posts data:", error));
