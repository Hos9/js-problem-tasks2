/**
 * 1st 100 --> 100
 * 101 - 200 --> 90
 * > 200 --> 70
 */

function layeredDiscountedTotal(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const remainingPrice = 70;
  if (quantity <= 100) {
    const total = 100 * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQty = quantity - 100;
    const remainingTotal = remainingQty * second100Price;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQty = quantity - 200;
    const remainingTotal = remainingQty * remainingPrice;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}

const total = layeredDiscountedTotal(150);
console.log(total);
