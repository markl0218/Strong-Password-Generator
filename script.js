// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {

// created character arrays to generate random passwords
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
var lowercseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+']

var resultArray = [];
var userArray = [];

uppercaseCharacters [1]
// creating window prompts with questions pertaining to password creation
  var numCharacter = prompt ('You can choose your password to be between 8 - 128 characters');
  var numbers = confirm ('Include numbers in password?');
  var uppercase = confirm ('Include uppercase letters?');
  var lowercase = confirm ('Include lowercase letters?');
  var characters = confirm ('Include special characters?');

  if (numbers){
    resultArray = resultArray.concat(numberCharacters);
  
  }
  
  if (uppercase){
    resultArray = resultArray.concat(uppercaseCharacters);
  
  }
  
  if (lowercase){
    resultArray = resultArray.concat(lowercaseCharacters);
  
  }
  
  if (characters){
    resultArray = resultArray.concat(specialCharacters);
  }
  console.log(resultArray)

  for (var i = 0; i < numCharacter; i++) {

    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
