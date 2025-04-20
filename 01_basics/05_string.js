const names="Joydeb"
const repoCount= 50

console.log(names+repoCount+" value");//Joydeb50 value
console.log(`My name is ${names} and the counting is ${repoCount}`)//My name is Joydeb and the counting is 50

const gameName=new String("Hihtm-an")
console.log(gameName[0]);//H
console.log(gameName.__proto__);//{}
console.log(gameName.length);//8
console.log(gameName.toUpperCase());//HIHTM-AN
console.log(gameName.charAt(5));//-
console.log(gameName.indexOf('t'));//3

const newString = gameName.substring(0, 4);
console.log(newString);//Hiht

const anotherString= gameName.slice(-8, 4);//only here we use -ve 
console.log(anotherString);//Hiht

const newStringOne= "       Joydeb        ";
console.log(newStringOne);//       Joydeb 
console.log(newStringOne.trim());//Joydeb remove the gaps






