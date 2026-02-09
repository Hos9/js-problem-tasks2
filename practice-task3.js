console.log("Task-3");

function calculateElectronicsBudget(laptop, tables, mobile) {
  const totalBudget = laptop + tables + mobile;
  return totalBudget;
}

const laptop = 100000;
const tables = 50000;
const mobile = 30000;

const totalBudget = calculateElectronicsBudget(laptop, tables, mobile);
console.log(totalBudget);
