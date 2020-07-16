var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generateRandomCharacter(includeLetters, includeNumbers) {
    var specialChars = ["@", "%", "+"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var list = [];
    if (includeLetters) {
        list = list.concat(lowerCase);
    }
    if (includeNumbers) {
        list = list.concat(numbers);
    }
    if (includeNumbers) {
        list = list.concat(specialChars);
    }
    if (includeNumbers) {
        list = list.concat(lowerCase);
    }
    if (includeNumbers) {
        list = list.concat(upperCase);
    }
    var randomNumber = Math.random();
    var randomValue = list.length * randomNumber;
    var randomIndex = Math.floor(randomValue);
    var randomCharacter = list[randomIndex];
    return randomCharacter;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("What's the length of the password?");
    var includeLetters = confirm("Would you like to include letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSpecialChar = confirm("Would you like to include special characters?");
    var includeLowerCase = confirm("Would you like to include lower case letters?");
    var includeUpperCase = confirm("Would you like to include upper case letters?");
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        password = password + generateRandomCharacter(includeLetters, includeNumbers);
    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


