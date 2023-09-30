class user {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptpasswors(){
        return `${this.password}abc`
    }

}

const myuser= new user("shivam","shivam@.com", "1234")

console.log(myuser);
console.log(myuser.encryptpasswors());



///inheritance

// class user {
//     constructor(username){
//      this.username=username
//     }

//    logME(){
//     console.log(`username is ${this.username}`);
//    }
    
// }

// class teacher extends user{
//    constructor(username,email,password){
//      super(username)
//     this.email=email
//     this.password=password
//    }

//    addCourse(){
//     console.log(`this new course is added by ${this.username}`);
//    }



// }
// const hero = new teacher("shivam", "shivam@123.com", "8619")

// hero.addCourse()

