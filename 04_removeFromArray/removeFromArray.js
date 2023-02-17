

    const removeFromArray = function(array, objRemove){

        for (const aIndex of array){
    
            if (array[aIndex-1]===objRemove){
                array.splice((aIndex-1),1);
            }
        }

     return array;
     
    }


console.log(removeFromArray([1, 2, 3, 4,'hi'],'hi'));

// Do not edit below this line
module.exports = removeFromArray;
