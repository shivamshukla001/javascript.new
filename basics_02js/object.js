
const mysymbol=Symbol('key1')
const jsUser={
    name:'shivam',
    [mysymbol]: 'key1',
    email:"shivam@gmail.com",
    password: 12345,
    location: "bikaner",
    LastLoggedIn: false
}

 jsUser.email="ShivamShukla93";
//  console.log(jsUser.email);
 
 Object.freeze(jsUser)

//  console.log(jsUser.email);
// console.log(jsUser.name);
// console.log(jsUser.email);



// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser[mysymbol]);



