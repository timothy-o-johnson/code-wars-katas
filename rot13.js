/* Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13 (word) {
  var string = ''
  var charCode

  letters = word.split('') 
  
  letters.forEach((letter) => {
     charCode = letter.charCodeAt(0) 
     charCode = convertToRot13CharCode(charCode)
     string += String.fromCharCode(charCode) 
  })
  
  return string
}

function convertToRot13CharCode(number){
  if(number >= 65 && number <= 90){
    number += 13
    number = number <= 90 ? number : number - 26 
  } else if (number >= 97 && number <= 122) {
    number += 13
    number = number <= 122 ? number : number - 26
  } 

  return number
}

module.exports = { rot13 }

console.log(rot13('Test'))