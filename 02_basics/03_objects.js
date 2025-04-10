//singleton
//Object.create

//Object literals

const mySym= Symbol("Key1");

const JsUser={
    names:"Joydeb",
    "full name": "Joydeb Biswas",
    [mySym]:"myKey1",
    mySym:"myKey1", 
    age: 27,
    email: "ray213@google.com",
    location: "kolkata",
    isLogedIn: false,
    lastLoginDay: ["Monday","Tusday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]);

console.log(typeof JsUser.mySym);
console.log(typeof JsUser[mySym]);

JsUser.email="abs123@gmail.com";
JsUser["full name"]="Rudra";
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//freeze the object so that no change can happend
// Object.freeze(JsUser);
JsUser["full name"]="Kal";//no error
console.log(JsUser["full name"]);//the value is not changed after freeze
console.log(JsUser);// it will show the difference between [mySym] and mySym


/*
{
  names: 'Joydeb',
  'full name': 'Rudra',
  mySym: 'myKey1',
  age: 27,
  email: 'abs123@gmail.com',
  location: 'kolkata',
  isLogedIn: false,
  lastLoginDay: [ 'Monday', 'Tusday' ],
  [Symbol(Key1)]: 'myKey1'
}
*/

//add function
JsUser.greetings=function(){
    console.log("Hello user");
}

JsUser.greeting2=function(){
    console.log(`Hello user ${this.names}`);//string intarpulation
}

//"this" use for reference the same object

console.log(JsUser.greetings);//[Function (anonymous)]
// error [is not a function] if we don't remove the freeze
console.log(JsUser.greetings());//Hello user
console.log(JsUser.greeting2());//Hello user Joydeb


