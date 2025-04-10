//non singleton
// const tinderUser={};

//singleton

const tinderUser= new Object();
tinderUser.id=1
tinderUser.name="Joydeb"
tinderUser.isLoggedIn= true

// console.log(tinderUser);

const regularUser={
    email: "dsgaj@gamail.com",
    fullName:{
        userFullname:{
            firstName: "Joydeb Biswas",
            lastName: "Biswas"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname);
// console.log(regularUser.fullName.userFullname.firstName);

//combine object
const obj1={1: "a", 2: "b"};
const obj2={4: "a", 5: "b"};
// const obj3={obj1, obj2}
// const obj3=Object.assign({},obj1, obj2)
// const obj3=Object.assign(obj1, obj2)
//spread operater
const obj3={...obj1, ...obj2}
console.log(obj3);

//get value from the database
//objects inside array
const users=[
    {
        id: 1,
        names: "Joydeb"
    },
    {
        id: 2,
        names: "Joydeb"
    }
]
console.log(users[1].names);//Joydeb


//get the key from objects
console.log(Object.keys(tinderUser)); //give a array[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //give a array[ 1, 'Joydeb', true ]
console.log(Object.entries(tinderUser)); //give array inside array[ [ 'id', 1 ], [ 'name', 'Joydeb' ], [ 'isLoggedIn', true ] ]

//we can checked the property present or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true






