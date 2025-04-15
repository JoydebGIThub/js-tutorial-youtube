//array specific loop


//object inside array
[{},{},{}]
//string inside array
["","",""]

//for of loop
const arr=[1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings ="Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps
const map= new Map();// map is a object. it holds the key-value 
// pairs and remember the original insertion order of the key
//key in the map may only occur once, it is unique in the Map's collection
map.set('IN',"India")
map.set('USA',"United States of Amirica")
map.set('Fr',"France")
map.set('Fra',"France")
map.set('Fra',"France")
//value can be duplicate but the key should be unique
//also if you try to enter same type of key it don't add in the Map
//also it maintain the order of the insertion
// console.log(map);

for (const key of map) {
    // console.log(key);// give all the value inside the array
}
//hold the key and value in seperately in destructer way
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//for of loop is not working on object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spidernam'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);//myObject is not iterable
}