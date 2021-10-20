import { add, divideTwo, isEven, check, isOdd } from './hof.js';
import { outer, numberOfProduct } from './closure.js';
import payment from './defaultParameter.js';

console.log('----------------CloserFunction-----------------');
const innerFunction = outer();
innerFunction();

const products = numberOfProduct();
products();
console.log('-----------------Default Parameter-------------------');
console.log(payment(5, 25));
console.log(payment(2, 100, 10));

console.log('-----------------High order Function-------------------');

console.log(divideTwo(add, 3, 2));
const checkIsEven = check(2, 3, add, isEven);
console.log(checkIsEven);
const checkIsOdd = check(2, 3, add, isOdd);
console.log(checkIsOdd);
