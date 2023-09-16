
const marvel_heroes=["iron","thor","hulk"]

const dc_heroes=["superman","batman","flash"]

const hindi_heroes=["naagraj","doda","kalmua"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const legend=marvel_heroes.concat(dc_heroes)
// console.log(legend);



//spread operator:-
const allheroes=[...marvel_heroes,...dc_heroes,...hindi_heroes];
// console.log(allheroes);


console.log(Array.isArray("Shivam"))
/**
 * "is aray"(The value to be checked.),( Return true if value is an Array; 
    otherwise, false. false is always returned if //value is a TypedArray instance.)
 */
   
console.log(Array.from("Shivam"));// "from" method array bnane ka kaam aata hai

console.log(Array.from({name:"shivam"}));//intresting


const score=100
const score2=200
const score3=300
const score4=400

console.log(Array.of(score,score2,score3,score4));//"of" method sa apan values ko array bn deta hai

