const palindromes = function (word) {
    let cleaned = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let result = cleaned.split('').reverse().join('');
    return cleaned === result;
};

// Do not edit below this line
module.exports = palindromes;
