

class ReverseWord {


    reverseWords(arr) {
        
        let arr1 = [];
        for(let i = 0;i<arr.length;i++){
            let string2 = "";
            let string1 = arr[i];
            for(let j = string1.length-1;j>=0;j--) {
                
                string2+=string1[j];
            }
            arr1.push(string2);   
        }
        return arr1;
    }
}

let reverseWord1 = new ReverseWord();

console.log(reverseWord1.reverseWords(["mountain", "rainbow", "trees", "valley"]));
console.log(reverseWord1.reverseWords(["computer", "mouse", "touchpad", "charger"]));

module.exports = ReverseWord;