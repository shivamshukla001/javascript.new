const promiseOne=new promise( function(resolve, reject){
    
    setTimeout( function(){
        console.log("helllo shivam");
        resolve();
    },1000)
})

promiseOne.then( function(){
    console.log("hiii shivam");
})
