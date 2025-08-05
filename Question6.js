
for (let i = 1; i <= 10; i++) {

  
  if (i === 5) {
    console.log("Skipping number 5");
    continue; 
  }

  
  if (i === 8) {
    console.log("Stopping the loop at 8");
    break; 
  }

  
  console.log("Number:", i);
}
