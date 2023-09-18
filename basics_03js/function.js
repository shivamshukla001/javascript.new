
function addTwoNumber(numberone, numbertwo){
//    console.log(numberone+numbertwo)
//   return numberone+numbertwo
}


// console.log(addTwoNumber(3,5))

function userLogin(username="Guest0123"){
    if(!username){
      console.log("please enter your username");
      return
    }
  return `${username} just logged In`
}

// console.log( userLogin())


function calculateCart(...num){
   
    // console.log(num);
    return num;

}

// calculateCart(200,300,5000)
// console.log(calculateCart(200,3000,4000))

const user={
Teacher:"shivam",
price:"4000"
}

function newObject(anyobject){//parameter
   console.log(`our new teacher is ${anyobject.Teacher} and the fees of his teaching is ${anyobject.price}`)
}

// newObject(user)//arguement

newObject({
    Teacher:"akash",
    price:3000
})


const myNewArray=[200,3000,4000,599]

function newtype(array){
    return array[2]
}

// console.log(newtype(myNewArray));

console.log(newtype([200,3000,400,459]));