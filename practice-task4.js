console.log("Task-4");

const phones = [
  { model: "PhoneA", brand: "iPhone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let sum = 0;

  for (const i of phones) {
    sum += i.price;
    return sum;
  }
}

const total = findAveragePhonePrice(phones);
console.log(total);
