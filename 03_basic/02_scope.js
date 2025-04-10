let a=10;
var b=20;
const c=30;

console.table([a, b, c]);
//global scope

if (true) {
    //block scope
    let j=10;
    var k=20;
    const l=30;
}
console.table([ k]);

//when we check scope in browser consol that is different
//and the global scope in node is different 

//nested scope
function one() {
    const username="Joydeb"
    function two() {
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //cannot access the website outside inner scope
    two()
}
one()

//===========================interesting--------------------------------
//hosting
console.log(addOne(5));//6

function addOne(num) {
    return num+1;
}
addOne(5)
// addTwo(2)//give error because we hold the function in a variable
const addTwo= function(num){ //expression
    return num+2;
}

addTwo(2)