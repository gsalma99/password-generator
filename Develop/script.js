var characterLength = 13;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','{','}','|','?','/','<','>'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctPrompts = getPrompts();    //returns true or false. 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var updatedpassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = updatedpassword;
  
  } else {
    passwordText.value = "";
  }

}

function generatePassword(){

  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));


  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Length for chacters has to be in between 8 - 128 digits. Please try again!");
    return false;

  }

  if(confirm("Would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Would you like uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
generateBtn.addEventListener("click", writePassword);










