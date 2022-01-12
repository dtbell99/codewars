const { expect } = require('chai');

const binaryArrayToNumber = arr => {
    let n = '';
    arr.forEach(i => {
        n = `${n}${i}`;
    });
    return parseInt(n, 2);
};

describe("#binaryArrayToNumber", () => {

    it("should equal 1", () => {
        expect(binaryArrayToNumber([0, 0, 0, 1])).to.eq(1);
    });
    it("should equal 2", () => {
        expect(binaryArrayToNumber([0, 0, 1, 0])).to.eq(2);
    });
    it("should equal 15", () => {
        expect(binaryArrayToNumber([1, 1, 1, 1])).to.eq(15);
    });
    it("should equal 6", () => {
        expect(binaryArrayToNumber([0, 1, 1, 0])).to.eq(6);
    });
});


        
        