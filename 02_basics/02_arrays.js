const marvalHeros=["thor","ironman","spiderman"];
const dcHeros=["superMan","flash","batman"];

// marvalHeros.push(dcHeros);// array inside array. it add inside the existing array
console.log(marvalHeros);
const allHeros=marvalHeros.concat(dcHeros);// create a new array
console.log(allHeros);
//concatination new way
const allNewArrays= [...marvalHeros, ...dcHeros];//spread opprator
console.log(allNewArrays);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,8,[3, 2]]]
const realAnotherFlatarray= anotherArray.flat(Infinity);//give the depth in the parameter
console.log(realAnotherFlatarray);

console.log(Array.isArray("Joydeb"));//false
console.log(Array.from("Joydeb"));//convert it in array
console.log(Array.from({name: "Joydeb"}));// can't convert in array because we need to mention from which we create the array (key or value)

let score1 =100 
let score2 =200 
let score3 =300

console.log(Array.of(score1, score2, score3))


