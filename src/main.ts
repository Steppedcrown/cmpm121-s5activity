// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let count = 0;

// These constants are for button IDs and heading text
const incId = "increment",
  decId = "decrement",
  countId = "counter",
  resetId = "reset",
  headerId = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headerId}</h1>
    <p>Counter: <span id="${countId}">0</span></p>
    <button id="${incId}">Click Me!</button>
    <button id="${decId}">Decrement</button>
    <button id="${resetId}">Reset</button>
  `;

  // Get the increment button element from the document
  const incrementButton = document.getElementById(incId);
  // Get the decrement button element from the document
  const decrementButton = document.getElementById(decId);
  // Get the reset button element from the document
  const resetButton = document.getElementById(resetId);
  // Get the counter span element from the document
  const counterDisplay = document.getElementById(countId);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterDisplay) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    // Increase the counter by 1
    count++;
    // Update the counter display
    counterDisplay.innerHTML = `${count}`;
    // Update the document title
    document.title = "Clicked " + count;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    // Decrease the counter by 1
    count--;
    // Update the counter display
    counterDisplay.innerHTML = `${count}`;
    // Update the document title
    document.title = "Clicked " + count;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    count = 0;
    // Update the counter display
    counterDisplay.innerHTML = `${count}`;
    // Update the document title
    document.title = "Clicked " + count;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  });
}

// Start the counter app
setup();
