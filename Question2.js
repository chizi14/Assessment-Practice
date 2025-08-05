
function Animal(name) {
  this.name = name;
}

const dog = new Animal("Buddy");

console.log(dog instanceof Animal); 
console.log(dog instanceof Object);


let age = 25;
let name = "Alice";
let isStudent = true;
let myFunction = function() { return "Hello!"; };
let myArray = [1, 2, 3];
let myObject = { key: "value" };

console.log(typeof age);        
console.log(typeof name);       
console.log(typeof isStudent);  
console.log(typeof myFunction); 
console.log(typeof myArray);    
console.log(typeof myObject);   


let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(person); 


delete person.age;

console.log(person); 

