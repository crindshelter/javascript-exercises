const leapYears = function(year) {
    if(year % 4 !== 0){
        return false;
    } else if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
