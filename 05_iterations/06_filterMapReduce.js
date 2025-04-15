const coding= ["js","ruby","html","java","python","cpp"]
//store foreach value in a variable
//foreach don't return value
const values=coding.forEach((item)=>{
    // console.log(item);// give undefined for this because we need to return something here
    return item; // give undefined because forEach loop return nothing
})

// console.log(values); // print all th value with undefined at the end

//filter
const nums= [1, 2, 3, 4, 5, 6, 7, 8]
//filter also except only call back
//filter return values
// const newnums= nums.filter((num)=> num > 5) // num > 5 condition will return the num geater than 5
//(num) => num > 5 //give the (implecite) return
const newnums= nums.filter((num)=> {
    // num > 5 //give the empty array
    //in scope we need to write return (Explicitly) if we want to return the value
    return num > 5 //give the values
})
// console.log(newnums);

//print the value using forEach
const newnums2= []
nums.forEach((num)=>{
    if (num > 4){
        newnums2.push(num)
    }
})
console.log(newnums2);

