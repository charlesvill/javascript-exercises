    
const repeatString = function(string, num) {
let i=0;
let output= "";
if(num<0){
    output = 'ERROR';
    console.log('Error');
    return output;
    
}

else{
    while(i<num){
        output+=string;
        i++;
        
    }
    return output
}

};
 


// Do not edit below this line
module.exports = repeatString;
