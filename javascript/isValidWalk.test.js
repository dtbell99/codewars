/**
 * Description:
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
 * The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
 * so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
 * and will, of course, return you to your starting point. Return false otherwise.
 */

const { expect } = require("chai");

const isValidWalk = (walk) => {
    if (walk.length === 10) {
        let x = 0;
        let y = 0;
        walk.forEach(direction => {
            if (direction === 'n') { y++; }
            if (direction === 's') { y--; }
            if (direction === 'w') { x--; }
            if (direction === 'e') { x++; }
        });
        if (x === 0 && y === 0) {
            return true;
        }
    }
    return false;
}

describe("#isValidWalk", () => {
    it("should be true 1", () => {
        const result = isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
        expect(result).to.be.true;
    });

    it("should be false 1", () => {
        const result = isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
        expect(result).to.be.false;
    });

    it("should be false 2", () => {
        const result = isValidWalk(['w']);
        expect(result).to.be.false;
    });

    it("should be false 3", () => {
        const result = isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
        expect(result).to.be.false;
    });



});