function calculateHypotenuse(adjacent, opposite) {
  //A squared plus B squared = C squared
  const hypotenuse = Math.sqrt((adjacent ** 2) + (opposite ** 2));
  return hypotenuse;
}

//Calling the function
let result = calculateHypotenuse(30,60);
console.log("Hypotenuse of your triangle is :", result);  
