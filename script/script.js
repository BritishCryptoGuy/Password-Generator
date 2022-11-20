// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
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

//All options Array
let allOptions = [
  lowerCasedCharacters,
  upperCasedCharacters,
  numericCharacters,
  specialCharacters,
];
let allowedChars = [];

//startOver write password function
function startOver() {
  let carryOn = confirm("Would you like to start again?")
    ? writePassword()
    : alert("No password this time");
  return;
}

// Function to prompt user for password options
function getPasswordOptions() {
  let numChar = 0;
  numChar = +prompt(
    "Please input how many characters you would like in your password (Between 10-64)"
  );
  if (isNaN(numChar) || numChar < 10 || numChar > 64) {
    alert("Please input a number a number between 10-64");
    startOver();
    return;
  }
  let lowerCase = confirm("Include lowercase letters?");
  let upperCase = confirm("Include uppercase letters?");
  let numericChar = confirm("Include numbers?");
  let specialChar = confirm("Include special characters?");
  let cases = [lowerCase, upperCase, numericChar, specialChar];
  if (cases.includes(true)) {
    alert("Thanks for your input, your password will now be generated!");
  } else {
    alert("At least one character/number type must be selected.");
    startOver();
    return;
  }
  let passChoices = [numChar, cases];
  return passChoices;
}

//randomIncludes function= pushes specified characters to own array
function randomIncludes(cases) {
  allowedChars = [];
  for (let i in cases) {
    if (cases[i]) {
      allowedChars.push(...allOptions[i]);
    }
  }
  return allowedChars;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let numChar = arr.shift();
  let cases = [...arr[0]];
  randomIncludes(cases);
  return [numChar, cases];
}

// Function to generate password with user input
function generatePassword() {
  let passOptions = getPasswordOptions();
  if (typeof passOptions === "undefined") return;
  let specs = getRandom(passOptions);
  let passArray = [];
  console.log(allowedChars);
  for (let num = 0; num < specs[0]; num++) {
    num;
    if (specs[1][num]) {
      passArray.push(
        allOptions[num][Math.floor(Math.random() * allOptions[num].length)]
      );
    } else {
      passArray.push(
        allowedChars[Math.floor(Math.random() * allowedChars.length)]
      );
    }
  }
  let password = passArray.join("");
  console.log(password);
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  if (typeof password === "undefined") return;
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
