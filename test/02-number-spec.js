const assert = require("assert");
const Number = require("../class/02-number.js");
const { describe } = require("mocha");

describe("Arithmetic class should perform four operations with a number", ()=>{
    it("add method should do addition of the number", ()=> {
        let num1 = new Number(4);
        let num2 = new Number(11);
        let num3 = num1.add(num2);
        assert.equal(num3.number, 4+11);
    });

    it("subtract method should do subtraction with the number", ()=> {
        let num1 = new Number(12);
        let num2 = new Number(9);
        let num3 = num1.subtract(num2);
        assert.equal(num3.number, 12-9);
    });

    it("multiply method should do multiplication with the number", ()=> {
        let num1 = new Number(13);
        let num2 = new Number(4);
        let num3 = num1.multiply(num2);
        assert.equal(num3.number, 13*4);
    });

    it("divide method should do division with the number", ()=> {
        let num1 = new Number(168);
        let num2 = new Number(4);
        let num3 = num1.divide(num2);
        assert.equal(num3.number, 168/4);
    });
});