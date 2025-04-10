//arrow function
const user={
    username: "Joydeb",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); //create the current context. this refer the current context
        console.log(this);
        
    }
}
//
// user.welcomeMessage()
//change the context/value
// user.username="sam" // sam is the context
// user.welcomeMessage()

console.log(this);//{} current context empty. because we are inside the node environment
//refer the empty object.

//But in browser
// console.log(this);// Window{0: global, 1: Window, ....}

//It happened because in previous we can execute the JS only in browser.
//The engine which help us to execute JS is only present in browser
//After we take out the engin node

//So when the engine run in browser, the global object is "Window"
//in node the object is empty

function chai() {
    console.log(this);// here we get lots of value
    let username="Joydeb";
    console.log(this.username);//undefined. because "this" only work in object
}

// chai()

//declare function using arrow
const chai2 = () =>{
    let username="joydeb";
    console.log(this); // {  }
} 
chai2()

//implecite return
// const addTwo = (a,b) => a+b //11
// const addTwo = (a,b) => (a+b) //11
// const addTwo = (a,b) => {username: "Joydeb"}//undefined. without parantisis we can return value
const addTwo = (a,b) => ({username: "Joydeb"})//{ username: 'Joydeb' }

console.log(addTwo(5,6));
