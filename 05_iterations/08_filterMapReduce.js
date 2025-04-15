//reduce

// reduce() method executes a user-supplied "reducer" callback functionon each element
const myNums= [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0) // we can pass the starting accumulator here also
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0) // arrow function 
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS course",
        price: 999
    },
    {
        itemName: "Java course",
        price: 1299
    },
    {
        itemName: "React course",
        price: 2999
    },
    {
        itemName: "mobile course",
        price: 5999
    }
]

//add all the price
const priceToPay = shoppingCart.reduce((acc, item)=>acc+ item.price, 0)
console.log(priceToPay);
