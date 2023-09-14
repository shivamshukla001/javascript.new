/**
 * all primitive data type is store in stack
 * and all non primitive type is store in heap 
 * 
 * stack ma jab koi change hota hai toh original value change nai hoti value ke copy milti hai or usme change hota hai
 * heap ma jab koi value milti hai toh changes origibal value ma hota hai it means heap ke koi value ma me ek jgah change krunga toh wo change har jgah aayga jha jah wo value use hue hai
 */

// example of stack
let channel="codingWithShivam"
console.log(channel); //codingWithShivam

let newChannel=channel
   newChannel="theCoder"

  console.log(channel); // codingWithShivam
  console.log(newChannel); // the coder



  //example of heap

  let obj={
    email:"user@123.com",
    upi:"123@ybl"
  }


  console.log(obj);//user@123.com
 
  let obj2=obj;


  obj2.email="shivam@123"
  console.log(obj2);//shivam@123
  console.log(obj);//shivam@123