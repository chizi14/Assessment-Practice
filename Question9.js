function countVowels(sentence) {
  // Convert the sentence to lowercase to make comparison easier
  let lower = sentence.toLowerCase();
  let count = 0;

  // Loop through each character
  for (let char of lower) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }

  return count;
}

//Calling the function
let result = countVowels("Hello World");
console.log("Total vowels:", result); 
