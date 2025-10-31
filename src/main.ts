// CMPM 121 Smelly Code Activity

class Counter {
  private count: number;

  constructor(initialValue = 0) {
    this.count = initialValue;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }
}

const counter = new Counter();

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

  function updateDisplay() {
    // Update the counter display
    if (counterDisplay) {
      counterDisplay.innerHTML = `${counter.getCount()}`;
    }
    // Update the document title
    document.title = "Clicked " + counter.getCount();
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter.getCount() % 2
      ? "pink"
      : "lightblue";
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    // Increase the counter by 1
    counter.increment();
    updateDisplay();
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    // Decrease the counter by 1
    counter.decrement();
    updateDisplay();
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    counter.reset();
    updateDisplay();
  });
}

// Start the counter app
setup();
