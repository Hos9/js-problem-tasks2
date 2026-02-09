console.log("Task-2");
// Find the friend with the smallest name.

const friends = [
  "Sajid",
  "Iqbal",
  "Nasir",
  "Rahi",
  "Udoy",
  "Fahim",
  "Raj",
  "Rayhan",
];

let smallestChar = friends[0].length;
let smallestName = "";

for (const i of friends) {
  if (i.length < smallestChar) {
    smallestChar = i.length;
    smallestName = i;
  }
}

console.log(
  "Smallest Name Charecter is:",
  smallestChar,
  "and Smallest Name is:",
  smallestName,
);
