module.exports = function getZerosCount(number, base) {

    let multpliersAndItsCount = [];
    let multiplier = 2;
    let value = base;
    while (multiplier <= value) {
        if (value % multiplier === 0) {
            value = value / multiplier;
            let multiplierCount = multpliersAndItsCount.filter((e) => e[0] === multiplier);
            if (multiplierCount.length !== 0) {
                multiplierCount[0][1]++;
            } else {
                multpliersAndItsCount.push([multiplier, 1]);
            }
            multiplier = 2;
        } else {
            multiplier++;
        }
    }
    let countNumOfMultipliers = (v, d) => {
        let r = (v - v % d) / d;
        if (r >= d) {
            r += countNumOfMultipliers(r, d);
        }
        return r;
    };
    let numbers = multpliersAndItsCount.map((e) => {
        let count = countNumOfMultipliers(number, e[0]);
        return (count - count % e[1]) / e[1];
    });
    numbers.sort((a, b) => {
        return a - b;
    });
    return numbers[0];
};
