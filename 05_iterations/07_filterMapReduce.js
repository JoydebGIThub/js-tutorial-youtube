//map

const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// add 10 numbers in every value
// console.log(myNums.map((num)=>num+10)); // return automatically

//chaining
const newNums=myNums
                .map((num) => num*10) // every result make here pass to the next chain
                .map((num)=>num + 1) // perform operation on value then return
                .filter((num) => num >= 40) // check the condition on value then return if true
 console.log(newNums);
 