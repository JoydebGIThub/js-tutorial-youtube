//arrays

const myArr=[0, 2, 1, 4, 5];
const mixArray=[0, 1, 2, "Joydeb", true];
const newArray= new Array(1, 2, 3, 4, 5)
console.log(myArr[3]);

//methods
myArr.push(10)
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9)// add the value in 1st position so needs to shift all the value
console.log(myArr);
myArr.shift();//remove from the 1st position
console.log(myArr);

//question answes method
console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1

const newArr= myArr.join();
console.log(myArr);
console.log(newArr);//convert it to string
console.log(typeof newArr);


//slice, splice
console.log("A ", myArr);

const myn1= myArr.slice(1, 3);//include 1, 2
console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1, 3);//include 1, 2, 3 and manipulate the main array
console.log(myn2);
console.log("C ", myArr);// splice part will be missing from the main array



