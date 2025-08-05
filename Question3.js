// (*)
let num1 = 5;
let num2 = 4;
let product = num1 * num2;
console.log("Multiplication:", num1, "*", num2, "=", product); 
// Output: 20

// (&&)
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("You are an admin user.");
} else {
  console.log("Access denied: Not an admin.");
}

let age = 18;
let canVote = (age >= 18) ? "Yes, can vote." : "No, too young.";
console.log("Voting eligibility:", canVote);



let counter = 10;
console.log("Original counter:", counter); 

counter++;
console.log("After increment:", counter); 

counter--;
console.log("After decrement:", counter); 
