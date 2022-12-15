// Array of uppercase letters to be used for the password 
var upperCaseLetters = [ 
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

//Array of lowercase letters to be used for the password
var lowerCaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

//Array of numbers to be used for the password
var numbers = [
  '0','1','2','3','4','5','6','7','8','9',
];

//Array of special characters to be used in the password
var specialCharacters = [ 
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '+',
  '[',
  ']',
  '{',
  '}',
  '~',
  '/',
  '?',
  ':',
  ';',
  '<',
  '>',
  ',',
  '.',
]; 

//get # of characters from user. Convert string to a number

//Make an array to use as a container to keep track of characters added to password

//create a for loop 
//series of if statements 


//use push method to add new items to the end of an arra

//for password fo join (')

//not equal return null is NAN


var 



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
