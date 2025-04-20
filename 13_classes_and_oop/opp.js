//object literal
const user={
    username: "Joydeb",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function () {
        // console.log("Got user details from database");
        //this keyword tag current instance
        // console.log(`Username:  ${this.username}`);//Username:  Joydeb
        // console.log(this); 
        // {
        //     username: 'Joydeb',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}
// console.log(user.username);//Joydeb
// console.log(user.getUserDetails());//Got user details from database


//Constructor function
// const promiseOne = new Promise();
function Users(username, loginCount, isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this; // return all the values
}
const userOne= Users("Joydeb", 12, true);
// console.log(userOne)
// navigator: [Getter],
// crypto: [Getter],
// username: 'Joydeb',
// loginCount: 12,
// isLoggedIn: true
// }
const usertwo= Users("Rudra", 11, false);// when we declare this 2nd value it will override the 1st veriable value
// console.log(userOne)
// crypto: [Getter],
// username: 'Rudra',
// loginCount: 11,
// isLoggedIn: false
// }

//for resolving this issue we use consturctor function. Create 2 different instance
const userthree= new Users("Joydeb", 12, true);
// console.log(userthree);//Users { username: 'Joydeb', loginCount: 12, isLoggedIn: true }

const userfour= new Users("Rudra", 11, false);
// console.log(userthree);//Users { username: 'Joydeb', loginCount: 12, isLoggedIn: true }
console.log(userthree.constructor);//reference of the variable //[Function: Users]

// instance of
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car("Honda", "Accord", 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true