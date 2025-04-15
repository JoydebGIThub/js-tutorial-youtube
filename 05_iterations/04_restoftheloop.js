//object
const myObject={
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//for in loop
for (const key in myObject) {
    // console.log(key); //get all the keys
    // console.log(myObject[key]);//get all the values
}

//for in --> array
const programming = ["js","rb","py","java","cpp"];
for (const key in programming) {
    // console.log(key); // get all the index value
    // console.log(programming[key]); // get all the value
}

//forin for maps
const map= new Map();
map.set('IN',"India")
map.set('USA',"United States of Amirica")
map.set('Fr',"France")
map.set('Fra',"France")
map.set('Fra',"France")
//map is not itarable
for (const key in map) {
    console.log(key);// no data print
}