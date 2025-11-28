/*


Question1: What happens if you manually set an 
object’s __proto__ property to null? How would you 
access the object's original prototype after doing this?

*/



/*

Question: Examine the following code. What does this code output and why? 
What would be a better way to ensure Dog.prototype.constructor is set correctly?

*/

function Animal() {}
Animal.prototype.speak = function() {
  console.log("Sound!");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();
Dog.prototype.constructor = Dog;
console.log(dog.constructor.name);


/*
Question: If Object.prototype.method = function() {} is defined, 
how does it affect new and existing objects? Why might this be a bad practice?

*/



/*
Question: Consider the following code snippet. What is the output of each console.log statement and why?
*/

function Cat(name) {
  this.name = name;
}
const fluffy = new Cat("Fluffy");
fluffy.__proto__ = { age: 5 };

console.log(fluffy.age); //5
console.log(fluffy.hasOwnProperty('age')); //false
console.log(fluffy.__proto__ === Cat.prototype); //false