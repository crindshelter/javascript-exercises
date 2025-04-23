const fibonacci = function(x) {
    x = Number(x);

    if (x === 0) {
        return 0
    } else if (x < 0 || !Number.isInteger(x)) {
        return 'OOPS'
    }

    result = [1,1];
    for (let i = 1; i <= x; i++ ) {
        result.push(result[i] + result[i - 1]);
    }
    return result[x - 1];
};

// Do not edit below this line
module.exports = fibonacci;
