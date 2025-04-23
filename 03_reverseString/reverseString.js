const reverseString = function(string) {
    let message = [];
    let stringArray = string.split("");
    for (let i = 0; i < stringArray.length; i++) {
        message.unshift(stringArray[i])        
    }
    return message.join("");
};

// Do not edit below this line
module.exports = reverseString;
