# Prototype:
```
Javascripts default behavior is prototypal behavior. When we try to find something js will travel through and access the parent, grandparant means layer after layer until it finds the null value. 
So, this prototype gives as the access of "new", "classes", "this", "prototypal inheritance"
```
```
Array ----> Object ----> null
String ----> Object ---> null
function --> Object ---> null

function is a function and also can be a object. Inside functions property and functionality behave like function and we can make it behave like an object. Because at the end everything will connect with object. Thats why we called js prototypal inheritance because js never stop it will take everything one step above.
```
```javascript
function multipleBy5(num) {
    return num*5
}
multipleBy5.power= 2
console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {}

```

## new
- A new object is created: The new keyword initiates the creation of a new Javascript object.
- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methos defined on the constructor's prototype.
- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JS assums this, the newly created object, to be intended return value.
- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc), the newly created object is returned.
```javascript
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
```