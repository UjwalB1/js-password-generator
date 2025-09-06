//declare vars
let includeCapLetters = false;
let includeLowLetters = false;
let includeNumbers = false;
let includeSymbols = false;

//declare what things to fetch id of so we can edit
const capCheckbox = document.getElementById("capCheckbox");
const lowCheckbox = document.getElementById("lowCheckbox");
const symbolCheckbox = document.getElementById("symbolCheckbox");
const numCheckbox = document.getElementById("numCheckbox")
const numberSlider = document.getElementById("numberSlider");
const charCount = document.getElementById("charCount");
const generatedPassword = document.getElementById("generatedPassword");
const genButton = document.getElementById("getButton");

const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const numbers = `0123456789`;
const symbols = `!@#$%&`;
let length = numberSlider.value;

// update what value is selected on the char amount slider
numberSlider.oninput = function() {
    length = this.value;
    charCount.textContent = length;
}

// know which values checkboxes are active
capCheckbox.addEventListener("change", function() {
    includeCapLetters = capCheckbox.checked;
});

lowCheckbox.addEventListener("change", function() {
    includeLowLetters = lowCheckbox.checked;
});

numCheckbox.addEventListener("change", function() {
    includeNumbers = numCheckbox.checked;
});

symbolCheckbox.addEventListener("change", function() {
    includeSymbols = symbolCheckbox.checked;
});




function generatePassword() {
    let password = ""
    let allowedChars = ""
    allowedChars += includeLowLetters ? lowerCase : "";
    allowedChars += includeCapLetters ? upperCase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    // basically so it doesnt spam undefined if no boxes are checked
    if (allowedChars.length === 0) {
        generatedPassword.textContent = `Please check at least one of the boxes above.`
        return;
    }

    // go through allowed chars and assign random ones to create a password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    generatedPassword.textContent = password;
}