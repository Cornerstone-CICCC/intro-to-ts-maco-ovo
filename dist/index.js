"use strict";
//  1. Number Manipulation
Object.defineProperty(exports, "__esModule", { value: true });
function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(20));
const squareNumber = (num) => {
    return num * num;
};
console.log(squareNumber(11));
//  2. Boolean Logic
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(12));
function isAdult(age) {
    if (age >= 18 && age > 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAdult(18));
// 3. String Manipulation
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString("Hello World"));
function capitalizeString(text) {
    return text.toUpperCase();
}
console.log(capitalizeString("hello world"));
//# sourceMappingURL=index.js.map