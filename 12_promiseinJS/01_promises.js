//creating of promise
const promiseOne= new Promise(function(resolve, reject){
    //Do and async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        //connect resolve with .then
        resolve()

    },1000)
}); //instance of the promise

//after the promise create
//We consume it
promiseOne.then(function(){
    //return value from the setTimeout
    console.log("Promise Consumed");
    //without proper connection it will not execute
    
}) //then has connection with resolve

/////////////////////////////////////////////////////////
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("Async 2 resolve");
})
//////////////////////////////////////////////////////

const promiseThree= new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve({username: "Joydeb", email: "royr5333@example.com"}) //pass the data to then
    },1000)
})

promiseThree.then(function(user) { //take the data from resolve
    console.log(user);
})

///////////////////////////////////////////////////////////////

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=false;
        if (!error) {
            resolve({username: "Joydeb", email: "royr5333@example.com"})
        }else{
            reject('something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);    
}).finally(()=> console.log("The promise is resolve or rejected"))
/////////////////////////////////////////

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username: "JavaScript", password: "121341"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// async it will wait for the work to complete if the work complete then only it go forward or else stop
//async doesn't has the catch block like .then so we catch the error using try catch
async function consumePromiseFive(){
    try {
        const respone = await promiseFive //promise is object so we handle it like this
        console.log(respone);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

//////////////////////////////////////////////////////////
// async function getAllUser() {
//     try {
//         const respone= await fetch('https://jsonplaceholder.typicode.com/users') //now we get in string formate
//         const data= await respone.json()//convert it in json
//         console.log(respone);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})