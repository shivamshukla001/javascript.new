const promiseone= new Promise( function(resolve, reject){
    setTimeout( function(){
        console.log("promise one");
        resolve();
    },1000)

})
promiseone.then( function(){
    console.log("promise ");
})


new Promise(function(resolve,reject){
    setTimeout( function(){
        console.log("promiseTwo");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2");
})


const promiseThree= new Promise( function(resolve,reject){
    setTimeout( function(){
        resolve({username: "shivam", email: "shivam@gmail.com"})

    },1000)
})

promiseThree.then( function(user){
    console.log(user);
})

const promiseFour= new Promise( function(resolve,reject){
    setTimeout( function(){
        let error=true;
        if(!error){
            resolve({username: "shivam", password:"1234"})
        }else{
            reject(" ERROR: Something Went Wrong")
        }
    },1000)
})

promiseFour
.then(function(user){
   console.log(user);
   return user.password;
})
.then(function(pass){
  console.log(pass);
})
.catch(function(error){
    console.log(error);
}).finally( ()=>console.log("promise either resoved or rejected"))

// ".finally " function humesa execute hota hai 


const promiseFive= new Promise(function(resolve, reject){
    setTimeout( function(){
        let error=false;
        if(!error){
            resolve({username: "JavaScript", password:"1234"})
        }else{
            reject(" ERROR: js Went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
          const response=await promiseFive
          console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();