// Return the two oldest/oldest ages within the array of ages passed in.
// Youngest of the two should be index 0

const { expect } = require("chai");

const twoOldestAges = ages => {
    const reverseAges = ages.sort((a,b) => {return a - b}).reverse();
    return [reverseAges[1], reverseAges[0]];
}

describe("#twoOldestAges", () => {
    it("should produce 45 and 87", () => {
        const resp = twoOldestAges([1,5,87,45,8,8])
        expect(resp[0]).to.eq(45);
        expect(resp[1]).to.eq(87);
    })
});

