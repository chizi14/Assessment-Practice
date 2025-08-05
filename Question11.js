function countEachVowel(sentence) {
  // Convert the sentence to lowercase first ( For easy comparison )
  const lower = sentence.toLowerCase();

  // All vowels set to zero ( 0 )
  const vowelsCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  // Loop through each letter in the given  sentence
  for (let char of lower) {
    if (vowelsCount.hasOwnProperty(char)) {
      vowelsCount[char]++;
    }
  }

  return vowelsCount;
}

// Calling the function ( Testing )
let result = countEachVowel("Who Took My Food Innit?");
console.log(result); 
