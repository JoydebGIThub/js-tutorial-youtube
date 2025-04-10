const names="Joydeb"
const repoCount= 50

console.log(names+repoCount+" value");
console.log(`My name is ${names} and the counting is ${repoCount}`)

const gameName=new String("Hihtm-an")
console.log(gameName[0]);//H
console.log(gameName.__proto__);//{}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString= gameName.slice(-8, 4);//only here we use -ve 
console.log(anotherString);

const newStringOne= "       Joydeb        ";
console.log(newStringOne);
console.log(newStringOne.trim());






