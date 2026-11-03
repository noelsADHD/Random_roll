
const min_Number = 2;
const max_Number = 60;

let current_Number = null;
const usedNumbers = new Set();



const numberDisplay = document.getElementById("number-display");
const generateB = document.getElementById("generate-btn");
const nextB = document.getElementById("next-btn");
const resetB = document.getElementById("reset-btn");
const sn = new Set([6,26]);

function generateRandom() {
    
    if (usedNumbers.size ===(max_Number - min_Number + 1)-sn.size ) {
        numberDisplay.textContent = "All numbers selected!";
        generateB.disabled = true;
        nextB.disabled = true;
        return;
    }

    let randomNumber;

    do {
        randomNumber = Math.floor(
            Math.random() * (max_Number - min_Number + 1)
        ) + min_Number;
    } while (usedNumbers.has(randomNumber) || sn.has(randomNumber));

    
    usedNumbers.add(randomNumber);
    current_Number = randomNumber;

    numberDisplay.textContent = current_Number;

    generateB.disabled = true;
    nextB.disabled = false;


    numberDisplay.classList.remove("pop");
    void numberDisplay.offsetWidth;
    //numberDisplay.classList.add("pop");
}

// Reset
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
