export function add(x, y) {
  return x + y;
}
export function divideTwo(fn, x, y) {
  return fn(x, y) / 2;
}

export function isEven(n) {
  return n % 2 === 0;
}
export function check(a, b, fn1, fn2) {
  return fn2(fn1(a, b));
}

export function isOdd(n) {
  return n % 2 === 1;
}
