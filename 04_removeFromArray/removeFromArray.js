const removeFromArray = function(array, ...args) {
    let result = array.filter(word=> 
        !args.includes(word)
    )
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
