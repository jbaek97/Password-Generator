// Assignment code here

// Arrays
// Lowercase
letters = "abcdefghijklmnopqrstuvwxyz"
lowercaseArray = letters.split("");


// Uppercase
capitalLetters = letters.toUpperCase();
uppercaseArray = capitalLetters.split("");

// Numeric
numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Characters cite from link in UCLA Module
specialCharactersArray = ["!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^" , "_", "`", "{", "|", "}", "~" ];







function generatePassword() {
  //The Prompts
  var characters = prompt("Choose a length of the password. The password can be anywhere from at least 8 characters to no more than 128 characters:", "0");
  var lowercase = prompt("Would you like the password to include lowercase values? (Please enter 'yes' or 'no')", "");
  var uppercase = prompt("Would you like the password to include uppercase values? (Please enter 'yes' or 'no')", "");
  var numeric = prompt("Would you like the password to include numeric values? (Please enter 'yes' or 'no')", "");
  var specialCharacters = prompt("Would you like the password to include special character values? (Please enter 'yes' or 'no')", "");
  //Characters Selected
  var selectedCharacters = [];
  var testArrays = [];
  //Adding the selected characters
  //Lowercase
  if (lowercase === "yes") {
    selectedCharacters.push(...lowercaseArray);
    testArrays.push(lowercaseArray);
  };
  //Uppercase
  if (uppercase === "yes") {
    selectedCharacters.push(...uppercaseArray);
    testArrays.push(uppercaseArray);
  };
  //Numeric
  if (numeric === "yes") {
    testArrays.push(numericArray);
  };
  //Special Characters
  if (specialCharacters === "yes") {
    testArrays.push(specialCharactersArray);
  };
  console.log(selectedCharacters);
  console.log(testArrays);

  function pWGen() {
      //Password Array
    var passwordArray = [];
    //For Loop
    for (i=0; i < characters; i++)
    passwordArray.push(selectedCharacters[Math.floor(Math.random()*selectedCharacters.length)]);
  };
    for(i=0; i< testArrays.length; i++) {
      var test = (element) => element.includes(testArrays[i]);
      passwordArray.some(test);
    }



  return pw;
};



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
