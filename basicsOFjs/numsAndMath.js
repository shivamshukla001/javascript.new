
//numbers

// const hundres=1000000
// console.log(hundres.toLocaleString('en-IN'));//indian standard to calculation

// const balence=new Number(4000000)
// console.log(balence);

// console.log(balence.toString().length);

// const otherbalence=1124.9879

// console.log(otherbalence.toPrecision(5));
// console.log(otherbalence.toFixed(2));

// //math
// console.log(Math);

// console.log(Math.abs(-9));
// console.log(Math.round(3.3));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.sqrt(99));
// console.log(Math.pow(2,3));
// console.log(Math.max(2,3,4,5));
// console.log(Math.min(2,3,4,5));

// console.log(Math.random());

// console.log((Math.random()*10)+1);

const min=3;
const max=20

// console.log(Math.floor((Math.random())* (max-min+1)+min));////  imp formula
/**
 * Math.floor iss liya use ho rha hai taaki value ko round off krke accurate la sake 
 * max-min+1 sa apna ya confirm kr rahe hai ke point sa pahle "0"nai a sakta it means apne pass ans ma kabhi 
 *  "0"nai aayga
 * last ma "min" value plus krne sa apna pass value humesa "min" sa bdi aayga, agar apan yha "min=3" rakhte toh 
 *  apne pass humesa 3 sa bdi value he aati ans ma
 */

console.log(Math.floor(Math.random()*(max-min+1)+min))