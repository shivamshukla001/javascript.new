//IMEDIATELY INVOKED FUCTION EXPRESION(iife)

(function shivam(){
    //named iife
    console.log(`shivam_here`)
})();

(  (account_1)=>{
    //un named iife
    console.log(`shivam_here_2 ${account_1}`);
})("shivam_here");

(  (name, DEVELOPER)=>{
   console.log(`my name is ${name} and iam profession ${DEVELOPER} developer`); 
})('SHIVAM', 'UI/UX')

/**(important)
 * ek ka baad 2 iife likhne ka liya humesa ';' semicolon lagao
 * wrna ya errror show karega 
 * jisma apan function ko naam deta hai wo named function kehlata hai 
 *  (function shivam)
 * jismen nai deta wo un named kehlata hai
 */