const findTheOldest = function(arr) {
    let birthDates = arr.map(birth => birth.yearOfBirth);
    let deathDates = arr.map(death => death.yearOfDeath);
    
    let age = [];

    for (let i = 0; i < birthDates.length; i++) {
        if (deathDates[i] === undefined) {
            const d = new Date();
            let year = d.getFullYear();
            age.push(year - birthDates[i] );
        } else {
            age.push(deathDates[i] - birthDates[i])
        }
    }

    let index = age.indexOf(Math.max(...age));

    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
