// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function startOver() {
  let carryOn = confirm("Would you like to start again?");
  if (carryOn) writePassword();
}

// Function to prompt user for password options
function getPasswordOptions() {
  let numChar = +prompt(
    "Please input how many characters you would like in your password (Between 10-64)"
  );
  if (isNaN(numChar)) {
    alert("Please input a number as specified");
    startOver();
    return;
  } else if (numChar < 10 || numChar > 64) {
    alert("Please input a number between 10-64");
    startOver();
    return;
  }
  console.log(numChar);
  let lowerCase = confirm("Include lowercase letters?");
  let upperCase = confirm("Include uppercase letters?");
  let numericChar = confirm("Include numbers?");
  let specialChar = confirm("Include special characters?");
  let cases = [lowerCase, upperCase, numericChar, specialChar];
  if (cases.includes(true)) {
    console.log("GG");
  } else {
    alert("At least one character/number type must be selected.");
    startOver();
    return;
  }
  let passChoices = [numChar, cases];
  return passChoices;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  let passOptions = getPasswordOptions();
  console.log(passOptions);
  //will call get password options
  //will call getRandom with password options
  //must return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
