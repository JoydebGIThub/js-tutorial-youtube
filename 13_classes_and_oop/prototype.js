let myName= "Joydeb"
console.log(myName.length);//6
let myName2= "Joydeb      "
console.log(myName2.length);//12
// create a truelength method 

let myHeros=["thor", "spiderman"]
let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.joydeb= function () {
    console.log(`Joydeb is present is all objects`);
    
}
Array.prototype.heyJoydeb= function () {
    console.log('Joydeb say hello');
    
}
heroPower.joydeb();//Joydeb is present is all objects
myHeros.joydeb();//Joydeb is present is all objects

// heroPower.heyJoydeb();//heroPower.heyJoydeb is not a function
myHeros.heyJoydeb();//Joydeb say hello

//inheritance

const User={
    name: "chai"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User; //Prototypal inheritance

// new approch
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName= "ChaiAurCode      ";
String.prototype.truelength= function(){
    console.log(`${this}`);//ChaiAurCode
    console.log(`${this.name}`);//undefined
    console.log(`True length is: ${this.trim().length}`);//True length is: 11
    
}
anotherUserName.truelength();
"joydeb".truelength();
"rudra".truelength();


