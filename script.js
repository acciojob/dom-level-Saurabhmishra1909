// Get the element with id="level"
const targetElement = document.getElementById("level");

// Initialize the DOM level counter
let domLevel = 0;

// Traverse up the DOM tree and count parent elements
let currentElement = targetElement;
while (currentElement !== null) {
    domLevel++; // Increment the level counter
    currentElement = currentElement.parentElement; // Move to the parent element
}

// Display the result using alert()
alert(`The level of the element is: ${domLevel}`);