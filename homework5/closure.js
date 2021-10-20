export function outer() {
  const nameOfProduct = 'Apple';
  return function inner() {
    console.log('Product Name : ' + nameOfProduct);
  };
}

export function numberOfProduct() {
  let count = 0;
  return function counts() {
    count += 1;
    console.log('Number of Product : ' + count);
  };
}
