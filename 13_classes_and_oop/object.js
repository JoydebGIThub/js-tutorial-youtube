function multipleBy5(num) {
    return num*5
}
multipleBy5.power= 2
console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {} --> it will give method and internal properties also

function createUser(username, score){
    this.username=username
    this.score=score
}
//inject properties
createUser.prototype.increment= function () {
    this.score++;
}
createUser.prototype.printMe= function(){
    console.log(`Score is ${this.score}`);
    
}
const chai= new createUser("Joy", 25);
const tea= createUser("Hello", 200);
chai.printMe();//Score is 25
tea.printMe();//Cannot read properties of undefined (reading 'printMe')
//if we don't declare the method with new then:
/////Cannot read properties of undefined (reading 'printMe')