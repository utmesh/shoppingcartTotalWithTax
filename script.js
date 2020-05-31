function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

let possibleProducts = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r"
];
/* ...(sread operator) provides multiple elements for array */
/** _ maeans we don't need any values*/

let products = [...Array(5)].map((_, i) => {
  return {
    index: i,
    title: possibleProducts[roll(0, possibleProducts.length)],
    price: roll(1, 10, 1).toFixed(2),
    count: roll(1, 6)
  };
});
console.log(products);

let cartTotal = products
  .reduce(function(accumulator, product) {
    console.log(accumulator, product);
    return accumulator + parseFloat(product.price) * product.count;
  }, 0)
  .toFixed(2);

console.log(cartTotal);

let taxRate = roll(5, 9, 1).toFixed(1);

function taxed(value) {
  return (taxRate / 100) * value + parseFloat(value);
}

let taxedTotal = taxed(cartTotal).toFixed(2);
console.log(taxedTotal);
