//Global arrays for input variables (characters) to generate for passwords
var specialCharacter = ['@', '!', '#', '$', '%', '^', '&', '*', '<', '?', '+', '~', '_', '-', '/', '|', '{', '}', '[', ']']

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var numericalValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var characterSet = [];

//Password Generate button
var generateBtn = document.querySelector("#generate");


//Writing PW for PW input
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Write "click" function for the generate button
generateBtn.addEventListener("click", writePassword);


//Function for generating password to include variables, length and, password content 
function generatePassword() {
    var passLength = prompt("How long would you like your password?");


    //Password length verification
    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 to 128 characters");
        return "Try Again, Bum";
    }

    else {//Confirmations for what to include within the password
        var specialChar = confirm("Would you like Special Characters?");

        var upCase = confirm("Would you like upper case letters?");

        var loCase = confirm("Would you like lower case letters?");

        var numbas = confirm("Would you like numbers?");

        if (specialChar) {
            characterSet = characterSet.concat(specialCharacter);
        }
        if (upCase) {
            characterSet = characterSet.concat(upperCase);
        }
        if (loCase) {
            characterSet = characterSet.concat(lowerCase);
        }
        if (numbas) {
            characterSet = characterSet.concat(numericalValue);
        }
    }

    var stringBean = "";

    for (i = 0; i < passLength; i++) {
       
        var index = Math.floor(Math.random() * characterSet.length);
       
        stringBean += characterSet[index];        
    }
    
    return stringBean;


}

