// Assignment Code
var generateBtn = document.querySelector("#generate");

var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = daddocument.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+1);
}

function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+1);
}

function getRandomNumber(){
  return String.fromCharCode(math.floor(Math.random()*10)+1);
}

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]|\<>?/=";
  return symbol[Math.floor(Math.random()*symbol.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
