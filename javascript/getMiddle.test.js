// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

const { expect } = require("chai");

const getMiddle = (s) => {
    let digits = (s.length / 2 % 1 == 0) ? 2 : 1;
    let startIndex = Math.round(s.length / 2);
    let middle = s.substring(startIndex-1,(startIndex-1)+digits);
    return middle;
}

describe("#getMiddle", () => {
    it("should return c when passed abcde", () => {
        const resp = getMiddle('abcde');
        expect(resp).to.eq('c');
    });
    it("should return cd when passed abcdef", () => {
        const resp = getMiddle('abcdef');
        expect(resp).to.eq('cd');
    });

});