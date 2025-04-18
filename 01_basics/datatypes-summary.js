//primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score= 100;
const scoreValue= 100.3
const isLoggedIn= true
const outSideTemp=null//object

let userEmail;//undefined

const id= Symbol('123'); //datatype Symbol
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber= 321372136216321n; //bigint
console.log(typeof userEmail);



//Reference (Non primitive)
//Array, Objects, Functions

//Array
const hero=["Joydeb", "joy", "dev"];//object
let myObj ={
    name: "Joydeb",
    age: 22
}//object

const myFunction= function() {
    console.log("Hello everyone");
}//function object
console.log(typeof hero);

//++++++++++++++++++++++++++Memories++++++++++++++++++++++++++++++
//stack (primitive) and heap (non primitive)

let names="Joydeb"
let anotherName= names
anotherName= "Rudra"
console.table([names, anotherName])

let userOne={
    email: "user@124",
    age: 22
}
let userTwo= userOne
userTwo.age=26
console.table([userOne.age, userTwo.age])