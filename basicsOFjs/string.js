const name="shivam"
const repo=21

//good way to write :-
console.log(`hello my name is ${name} ans i recently completed ${repo} repository in github`);

const gamename=new String(`valorant-RIOT-game`)
console.log(gamename.split('-'));//split method ka karan gamename split on the bases of '-' operator
//jaisa agar apan valorant-riot-game dalenge toh ya 'valorant','riot','game' ho jayga



// console.log(gamename);

// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('r'));
// console.log(gamename.slice(0,-3));
// console.log(gamename.substring(0,3));

const name2="     shivam      "
// console.log(name2);
// console.log(name2.trim());//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim 

// const animal=['ant','elephant','lion','duck','dog']
// console.log(animal.slice(2,4));//lion duck 
// console.log(animal.slice(0,4));//ant,elephant,lion,duck
// console.log(animal.slice(-3,4));//lion,duck
// console.log(animal.slice(-4,4));//elephant,lion,duck
/**
 * Zero-based index at which to start extraction, converted to an integer.

Negative index counts back from the end of the array — if start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, nothing is extracted.
 */


const url="https://shivamShukla%19.locoGame"

console.log(url.replace('%19','-'));
console.log(url.includes('locoGame'));