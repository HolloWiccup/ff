let price = 3000;
let discount;
let discountPrice;
if ((price >= 1000) & (price < 5000)) {
  discount = price * 0.95;
  discountPrice = price - discount;
} else if (price >= 5000) {
  discount = price * 0.9;
  discountPrice = price - discount;
}
console.log(discount);
console.log(discountPrice);
