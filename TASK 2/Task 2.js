function showMotivation() {
    alert("Thank you for taking the Eco-Friendly Pledge! Every small step counts!");
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    var email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});
// Function to show a motivational message for taking the Eco-Friendly Pledge
//function showMotivation() {
// alert("Thank you for pledging to make a positive impact on the planet!");}

// Function to validate the login form inputs
document.getElementById("contact-form").addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Retrieve form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const address = document.getElementById("address").value.trim();

    // Basic validation checks
    if (name === "" || email === "" || password === "" || address === "") {
        alert("Please fill out all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Login successful! Welcome, " + name + "!");
        // Reset the form after successful submission
        document.getElementById("contact-form").reset();
    }
});

// Email validation function using regular expression
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




// To-Do List Functions
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.innerText = taskText;

        // Create remove button for each task
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(taskContent);
        listItem.appendChild(removeBtn);

        document.getElementById("task-list").appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a valid task.");
    }
}

function addImage() {
    const url = document.getElementById("image-url").value;
    if (url) {
        // Create a container for the image and remove button
        const imgContainer = document.createElement("div");

        // Create the image element
        const img = document.createElement("img");
        img.src = url;
        img.alt = "User uploaded image";

        // Create the remove button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = function () {
            imgContainer.remove();
        };

        // Append image and remove button to the container
        imgContainer.appendChild(img);
        imgContainer.appendChild(removeBtn);

        // Append the container to the gallery
        document.getElementById("gallery-container").appendChild(imgContainer);

        // Clear the input field
        document.getElementById("image-url").value = "";
    } else {
        alert("Please enter a valid image URL.");
    }
}
