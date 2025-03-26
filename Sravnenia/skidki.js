let price = 3000;
let priceDiscount;
let discountAmount;
let discount5 = price * 0.95;
let discount10 = price * 0.9;

if ((price >= 1000) & (price < 5000)) {
  priceDiscount = discount5;
  discountAmount = price - priceDiscount;
} else if (price >= 5000) {
  discount = discount10;
  discountAmount = price - priceDiscount;
}
console.log(priceDiscount);
console.log(discountAmount);
