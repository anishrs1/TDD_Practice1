

class Number {
    constructor(num){
        this.number = num;
    }
    add(num){
        return new Number(this.number+num.number);
    }
    subtract(num){
        return new Number(this.number-num.number);
    }
    multiply(num){
        return new Number(this.number*num.number);
    }
    divide(num){
        return new Number(this.number/num.number);
    }
}

module.exports = Number;