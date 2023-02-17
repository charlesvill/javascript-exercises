

const reverseString = function(sInput) {

let outString="";
let stringIndex = sInput.length - 1;
let charSplit

for (i= sInput.length; i>=0; i--){

    charSplit = sInput.slice(i,i+1);
    outString+=charSplit;   
}
 
return outString;


};

console.log(reverseString('your momma'));

// Do not edit below this line
module.exports = reverseString;
