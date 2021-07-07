// Assignment code here

var generatePassword = function(){
  //create arrays and prompts to sort the final Password
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
  var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var specialSymbols = ['!','@','#','$','%','^','&','*','(',')'];

  var concatenatedArray = [];

    //create questions//asking lenght
    var lengthQuestion = window.prompt("How many characters do you want your password to have?");
    while((isNaN(lengthQuestion)) || lengthQuestion<8 || lengthQuestion>128){//you can add while loops for each condition inside this while loop so to have different messages for each.
      window.alert("Your input must contain only numbers and must be no less than 8 characters long or 128 characters long");
      lengthQuestion = window.prompt("How many characters do you want your password to have?");
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
  
    var specialSymbolQuestion = window.confirm("Would you like your password to include special symbols?");
    if(specialSymbolQuestion){
      concatenatedArray = concatenatedArray.concat(specialSymbols);
    }
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
