// Define the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is okay (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert response to JSON
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to list users
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Fetch error:', error); // Log the error to the console
    }
}

// Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);