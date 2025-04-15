//for each //higher order function
const coding =["js", "css","html","cpp"]

coding.forEach( function (val) {
    // console.log(val);//print the value
} )
//call back function don't have name
//take the value one by one as parameter and do some operation

//arrow function with for each
coding.forEach((item)=>{
    // console.log(item);// print the value
})

//function pass in the foreach call back method
function printme(item) {
    // console.log(item);
}

// coding.forEach(printme) // only pass the reference on the function
//don't give the execution printme()

//in foreach we can get item, its index and whole arr as its parameter
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

//object inside the array
const myCoding=[
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
