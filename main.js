
const min_Number = 2;
const max_Number = 60;

let current_Number = null;
const usedNumbers = new Set();

// Select HTML elements
const numberDisplay = document.getElementById("number-display");
const generateB = document.getElementById("generate-btn");
const nextB = document.getElementById("next-btn");
const resetB = document.getElementById("reset-btn");

// Generate a number that has not been selected before
function generateRandom() {
    // Check whether all numbers have been used
    if (usedNumbers.size === max_Number - min_Number + 1) {
        numberDisplay.textContent = "All numbers selected!";
        generateB.disabled = true;
        nextB.disabled = true;
        return;
    }

    let randomNumber;

    // Keep generating until we find an unused number
    do {
        randomNumber = Math.floor(
            Math.random() * (max_Number - min_Number + 1)
        ) + min_Number;
    } while (usedNumbers.has(randomNumber));

    // Remember the selected number
    usedNumbers.add(randomNumber);
    current_Number = randomNumber;

    // Display the number
    numberDisplay.textContent = current_Number;

    // Update buttons
    generateB.disabled = true;
    nextB.disabled = false;

    // Replay the CSS animation
    numberDisplay.classList.remove("pop");
    void numberDisplay.offsetWidth;
    //numberDisplay.classList.add("pop");
}

// Reset the app for a new round
function resetGame() {
    usedNumbers.clear();
    current_Number = null;

    numberDisplay.textContent = "--";

    generateB.disabled = false;
    nextB.disabled = true;

    numberDisplay.classList.remove("pop");
}

// Connect buttons to functions
generateB.addEventListener("click", generateRandom);
nextB.addEventListener("click", generateRandom);
resetB.addEventListener("click", resetGame);
