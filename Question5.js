// Using if statements

// change value of timeofTheDay at any point
let timeOfTheDay = "morning";

if (timeOfTheDay === "morning") {
  console.log("Good morning user.");
} else if (timeOfTheDay === "afternoon") {
  console.log("Good afternoon user.");
} else if (timeOfTheDay === "evening") {
  console.log("Good evening user.");
} else {
  console.log("Hello user.");
}


//using switch statements
let timeOfTheDay2 = "Afternoon";

switch (timeOfTheDay) {
  case "morning":
    console.log("Good morning user.");
    break;
  case "afternoon":
    console.log("Good afternoon user.");
    break;
  case "evening":
    console.log("Good evening user.");
    break;
  default:
    console.log("Hello user.");
}

