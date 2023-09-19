// const add=(num1,num2)=>{
//   return  num1+num2
// }

// console.log(add(3,5));

// const add=(num1,num2)=>(num1+num2)

// console.log(add(4,6));

const add=()=>({username:"Shivam"})  /// object ko aisa pass krte
// hai arrow function ma

console.log(add());

/**
 * jab apan arrow function ma curly brases {} lagate hai toh hume 
 * return type likhna padta hai agar curly brases nai lagaoge toh 
 * return type nai likha jata
 * 
 * object ko pass krna ka liya pahle parenthisi() lagega fir usma 
 * object pass hoga
 */