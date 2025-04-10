//function
//function defination
function sayMyName(){
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");  
}
//function reference
// sayMyName
//for execution
// sayMyName();

function addTwoNumer(a, b) { //parameters
    console.log(a+b);
}
addTwoNumer(2,5); //pass the argument
//when we define a function and passes any input called parameters
//when we call the function and passes the value is called arguments

const res= addTwoNumer(7,8);
console.log("Result ",res)// undefined because addTwoNumber don't return anything

function addTwoNumers(a, b) { //parameters
    let result = a+b;
    return result;
    console.log("Joydeb")// after return no code will work in function
}

const result= addTwoNumers(7,8);
console.log("Result ",result)//15

function loginUser(username="sam") { // default value
    if (username === undefined) {
        console.log("Please enter a user name");
        return // if we miss this then it will execute the return outside the if
    }
    return `${username} just logged in`;
}

//
console.log(loginUser("Joydeb"));//Joydeb just logged in
console.log(loginUser());// undefined just logged in

//shopping cart rest operator
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200, 300, 4000, 500));

function calculateCartPrice2(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice2(200, 300, 4000, 500));

//pass object in function
const user={
    username: "Joydeb",
    price: 999
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "Kal",
    price: 7863
});

//pass array
const myArray=[200, 3000, 340, 435]

function returnSecondVale(getArray) {
    return getArray[1]
}
console.log(returnSecondVale(myArray));
