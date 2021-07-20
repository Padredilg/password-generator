// Assignment code here

var generatePassword = function(){
  //create arrays and prompts to sort the final Password
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
  var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var specialSymbols = ['!','@','#','$','%','^','&','*','(',')','*','+','-',',','/','.',':',';','?','_','~'];

  var concatenatedArray = [];

  //create questions//asking lenght
  var lengthQuestion = window.prompt("How many characters do you want your password to contain?");
  while((isNaN(lengthQuestion)) || lengthQuestion<8 || lengthQuestion>128){
    if(lengthQuestion === null){
      return false;
    }
    if(isNaN(lengthQuestion)){
      window.alert("Your input contained invalid characters. You must type your answer using numbers only.");
    }
    else if(lengthQuestion<8){
      window.alert("The number you chose is too small. Please choose a number no less than 8 and no more than 128 for the length of your password.");
    }
    else{
      window.alert("The number you chose is too big. Please choose a number no less than 8 and no more than 128 for the length of your password.");
    }
    lengthQuestion = window.prompt("How many characters do you want your password to contain?");
  }//now we know how long finalPassword will be.
  
  //asking for upper case
  var upCaseQuestion = window.confirm("Would you like your password to include Upper Case Letters?");
  if(upCaseQuestion){
    concatenatedArray = concatenatedArray.concat(upperCase);
  }
  
  //asking for lower case
  var lowCaseQuestion = window.confirm("Would you like your password to include Lower Case Letters?");
  if(lowCaseQuestion){
    concatenatedArray = concatenatedArray.concat(lowerCase);
  }
  
  //asking for numbers
  var numericQuestion = window.confirm("Would you like your password to include Numbers?");
  if(numericQuestion){
    concatenatedArray = concatenatedArray.concat(numbers);
  }
  
  var specialSymbolQuestion = window.confirm("Would you like your password to include Special Symbols?");
  if(specialSymbolQuestion){
    concatenatedArray = concatenatedArray.concat(specialSymbols);
  }

  //if no chars picked, Alert person and return false
  if(!upCaseQuestion && !lowCaseQuestion && !numericQuestion && !specialSymbolQuestion){
    alert("You did not select any type of character for your password.");
    return false;
  }

  var finalPassword = "";

  for(var i=0; i<lengthQuestion; i++){
    finalPassword += concatenatedArray[Math.floor(Math.random()*concatenatedArray.length)];
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if(!password){
    return false;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
