const { expect } = require("chai");

const addBinary = (a,b) => {
    return ((a+b) >>> 0).toString(2);
}

describe("#addBinary", () => {
    it('should produce 10', () => {
        expect(addBinary(1,1)).to.eq("10");
    });
    it('should produce 1110', () => {
        expect(addBinary(5, 9)).to.eq("1110");
    });
});