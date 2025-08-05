let sum = 0;

for (let i = 0; i <= 200; i++) {
  if (i % 10 === 0) {
    sum += i;
  }
}

console.log("The sum of all numbers divisible by 10 from 0 to 200 is:", sum);
