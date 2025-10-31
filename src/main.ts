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

// Constants for button IDs and heading text
const incId = "increment",
  decId = "decrement",
  countId = "counter",
  resetId = "reset",
  headerId = "CMPM 121 Project";

function setup() {
  document.body.innerHTML = `
    <h1>${headerId}</h1>
    <p>Counter: <span id="${countId}">0</span></p>
    <button id="${incId}">Click Me!</button>
    <button id="${decId}">Decrement</button>
    <button id="${resetId}">Reset</button>
  `;

  const incrementButton = document.getElementById(incId);
  const decrementButton = document.getElementById(decId);
  const resetButton = document.getElementById(resetId);
  const counterDisplay = document.getElementById(countId);

  if (!incrementButton || !decrementButton || !resetButton || !counterDisplay) {
    return;
  }

  function updateDisplay() {
    if (counterDisplay) {
      counterDisplay.innerHTML = `${counter.getCount()}`;
    }

    document.title = "Clicked " + counter.getCount();

    document.body.style.backgroundColor = counter.getCount() % 2
      ? "pink"
      : "lightblue";
  }

  incrementButton.addEventListener("click", () => {
    counter.increment();
    updateDisplay();
  });

  decrementButton.addEventListener("click", () => {
    counter.decrement();
    updateDisplay();
  });

  resetButton.addEventListener("click", () => {
    counter.reset();
    updateDisplay();
  });
}

setup();
