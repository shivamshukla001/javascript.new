//array

const myarr=[1,2,3,4,5]

const mynewarr= myarr.join()

console.log(myarr);
console.log(typeof myarr);
console.log(mynewarr);
console.log(typeof mynewarr);
console.log(myarr);

console.log(myarr.indexOf(2));

console.log(myarr.includes(9));//for searching elemant in a array
console.log( myarr.reverse());// used for reversing a array

myarr.unshift(9)
console.log(myarr);
myarr.shift()
console.log(myarr);


console.log("A "+myarr);


console.log("B "+ myarr);//original array ma koi frk nai padta
console.log(myarr.slice(1,3));

console.log("C "+ myarr);
console.log(myarr.splice(1,3));//original aray ma frk padta hai

console.log(myarr);





/**
 * types of method in array of js
 * concat()
   copyWithin()
     every()
   filter()
  flat()
  flatMap()
  forEach()
  indexOf()
  lastIndexOf()
  map()
  reduce()
reduceRight()
reverse()
slice()
some()
sort()
splice()
For exactly how they treat empty slots, see the page for each method.

These methods treat empty slots as if they are undefined:

entries()
fill()
find()
findIndex()
findLast()
findLastIndex()
includes()
join()
keys()
toLocaleString()
values()
 */

