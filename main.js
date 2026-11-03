// declaring the variables for min max current and html dom

const min_Number = 2;
const max_Number = 60;
let current_Number = null;

// dom

const numberDisplay = document.getElementById("number-display");
const generateB = document.getElementById("generate-btn");
const nextB = document.getElementById("next-btn");

function generateRandom(){
    current_Number = Math.floor(Math.random() * (max_Number - min_Number + 1)) + min_Number;
    numberDisplay.textContent = current_Number;
    generateB.disable =  true;
    nextB.disable=false;

    numberDisplay.classList.remove("pop");
    void numberDisplay.offsetWidth;
    numberDisplay.classList.add("pop");


}
generateB.addEventListener("click",generateRandom)
nextB.addEventListener("click",generateRandom)