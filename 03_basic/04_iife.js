//Immediately Invoked Function Expressions (IIFE)
/**When we write the function we want it to immediate execute 
 * like database connection function run immediatly
 * and don't want the global variable effect the function
*/

function chai(){
    console.log("DB connected");
}
// chai()

(function chai2(){
    //named IIFE
    console.log("DB connected iife");// global scope polution sometimes effect the function to remove that poluion we use iife
})();//sometime this type of function don't know where to stop so we need to use ; to end it

((name)=>{
    console.log(`DB connected two ${name}`);
    
})('Joydeb')