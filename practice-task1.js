console.log("Task-1");
/* Find the lowest number in the array below. */
const heights = [127, 167, 170, 178, 124, 165];

let lowest = heights[0];
for (const i of heights) {
  if (i < lowest) {
    lowest = i;
  }
}
console.log(lowest);
