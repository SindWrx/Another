import { divide } from './lib';
import $ from 'jquery';
import 'core-js/features/promise';

console.log(divide(5, 2));
console.log(divide(4, 2));
console.log(divide(12, 3));
console.log(divide(15, 5));
console.log(divide(52, 21));
console.log(divide(152));
console.log(divide());

$('h1').addClass('orange');

(new Promise( (resolve, reject) => {
  setTimeout(resolve, 500);
})).then(() => {
  console.log('promise resolved');
})
