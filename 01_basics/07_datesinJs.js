let myDate= new Date();
console.log(myDate);//2025-04-10T10:36:19.486Z
console.log(myDate.toString());//Thu Apr 10 2025 10:36:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu Apr 10 2025
console.log(myDate.toISOString());//2025-04-10T10:36:19.486Z
console.log(myDate.toJSON());//2025-04-10T10:36:19.486Z
console.log(myDate.toLocaleDateString());//4/10/2025
console.log(myDate.toLocaleString());//4/10/2025, 10:36:19 AM
console.log(myDate.toLocaleTimeString());//10:36:19 AM

console.log(typeof myDate);//object

// let myCreateDate= new Date(2023, 0, 20);
// let myCreateDate= new Date(2023, 0, 20, 5, 3);
// let myCreateDate= new Date("2023-01-14");
let myCreateDate= new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);// comes in millisecond

console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));// second converson

myDate.toLocaleString('Default',{
    weekday: "long",
});
console.log(myDate.toLocaleString('Default',{
    weekday: "long",
}));







