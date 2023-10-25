const marvel_heroes=["ironman", "thor", "hulk", "vapire"];
const dc_heroes=["flash", "doremon", "bobremon", "deadpool", "batman"];

const hindi_heroes=["supernakha", "kalmua", "naagraj", "bhokachoda"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const legend=marvel_heroes.concat(dc_heroes);

// console.log(legend);


const all_heroes=[...dc_heroes,...hindi_heroes,...marvel_heroes];

// console.log(all_heroes);


// console.log(Array.from("shivam"));

// console.log(Array.from({name:"shivam"}));


const score=100;
const score2=200;
const score3=1300;
const score4=1040;

// console.log(Array.of(score,score2,score3,score4));


// --------------------------------------------object-------------------------------
const mySymbol= Symbol('key')
const jsUser={
    name:"shivam",
    Symbol:"key",
    email:"shivam@123",
    password:"12344",
    lastlogedin:false
}

// jsUser.email="exapmle.124"
// console.log(jsUser["email"]);
// console.log(jsUser["lastlogedin"]);
// console.log(jsUser["Symbol"]);



const user={
name:"Shivam",
email: "akash@123"
}

//  user.welcome=function(){
//     console.log(`welcome to the website ${this.name}`);
// }

// console.log(user.welcome());


 const Newuser={
id:"12345",
lastLogin:"saturday",
fullname:{
    username:{
        firstname:{
            firstname:"shivam",
            lastname:"shukla"
        }
    }
}

}
// console.log(Newuser.fullname);

const obj1={1:"A", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign({},obj1,obj2 )

// console.log(obj3);

const userone={
    name:"shivam",
    email:"shivam123",
    password:"4567",
    lastlogedin:"yesterday"
}
const usertwo={
   work:"Athlession",
   experience:"6-7 years",
   education:"MGSU"
}

// const userthree= Object.assign({}, userone,usertwo);
// console.log(userthree);

const instaUser={
    name:"shivam",
    password:"1234",
    id_name:"userNotFound",
    userone:{
       name:"shukla"
    },
    usertwo:{
      name:"kartik"
    }
}

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));