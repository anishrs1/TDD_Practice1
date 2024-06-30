const assert = require("assert");
const ReverseWord = require("../class/01-reverse-word.js");
const { describe } = require("mocha");

describe("Reverse word class", ()=>{
    it("Reverse word function should reverse the words in the array and return the array with reversed words.",() => {

        let reversedArray = new ReverseWord();
        let arr = ["mountain", "rainbow", "trees", "valley"];
        let reversedArr = reversedArray.reverseWords(arr);

        for(let i = 0;i<reversedArr.length;i++) {
            assert.equal(arr[i].split('').reverse().join(''), reversedArr[i]);
        }
    });
});