const jsuser={
    name:"shivam",
    email:"shukla@gmail.com"
}

jsuser.greeting=function(){
    console.log(`helo js user, ${this.email}`);
}

jsuser.greetingTwo=function(){
    console.log("hello js user");
}


console.log(jsuser.greetingTwo());

console.log(jsuser.greeting());

// const regularUSer=new Object()

// const regularUSer={
//     id:"123abc",
//     loggedIn: "last saturday",
//     fullname: {
//         username:{
//             firstname:{
//                firstname: "shivam",
//                lastname:"shukla"
               
//             }
//         }
//     }
// }

//onsole.log(regularUSer.fullname.username);

// const obj1={1:"a", 2:"b"}

// const obj2={3:"c", 4:"d"}

//const obj3=console.log(Object.assign({},obj1,obj2))
// console.log(obj3);


// console.log(obj3===obj1);

// const obj3={...obj1,...obj2}
// console.log(obj3);


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

// console.log(Object.keys(instaUser));//impotant
// console.log(Object.values(instaUser));//important
// console.log(Object.entries(instaUser));


// console.log(instaUser.hasOwnProperty('password'));


// console.log(instaUser[0]);


const course={
    course:"javaScript",
    fees:"10000",
    courseInstructor:"Shivamshukla"
}
console.log(course.courseInstructor);


const {courseInstructor:Teacher}=course

console.log(Teacher);