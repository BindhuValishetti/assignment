
function reverseString(str) {
    var newString="";
    for (let i = str.length - 1; i >= 0; i--) {
          newString += str[i];
    }
    if(newString==str)
          console.log("reverse of given string is   "+newString+ "   and it is palindrome" );
    else
          console.log("reverse of given string is  "+newString+ "   and it is not palindrome" );

}
console.log(reverseString("tenet"));
console.log(reverseString("bindu"));
