/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

const { expect } = require("chai");

const findOdd = (A) => {
    const dtaObj = {};

    A.forEach(nbr=>{
        if (dtaObj[nbr]) {
            dtaObj[nbr]++;
        } else {
            dtaObj[nbr] = 1;
        }
    });
    let result;
    Object.keys(dtaObj).forEach(k => {
        if (dtaObj[k] % 2 !== 0) {
            result = Number(k);
        }
    });
    return result;
}

describe('#findOdd', () => {
    it('should produce correct result of 5', () => {
        const dta = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
        const result = findOdd(dta);
        expect(result).to.eq(5);
    });
})