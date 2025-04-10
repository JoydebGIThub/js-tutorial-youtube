const userEmail="h@joydeb,ai"
if (userEmail) { // truthy value /false value
    console.log("Got user email");
    
} else {
    console.log("don't have user email"); 
}

//falsy value
//1. false
//2. 0
//3. -0
//4. BinInt 0n
//5. ""
//6. null
//7. undefined
//8. NaN

//turthy value
//1. "0"
//2. 'false'
//3. " "
//4. []
//5. {}
//6. function(){} empty function

const arrayChect=[]
if (arrayChect.length === 0) {
    console.log("array is empty");
}

const emptyObj={}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//false == 0 //true
//flase == '' //true
//0 == '' //true

//Nullish coalescing operator (??): null undefined
let val1;
val1 = 5 ?? 10 //5
val1 = null ?? 10 //10
val1 = null ?? 10 ?? 20 //10
console.log(val1);

//terniary operator
const price= 10
price <= 8 ? console.log("less than 8"): console.log("more than 8");
;
