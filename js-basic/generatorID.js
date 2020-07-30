function generateId() {
  let i = 0;
  return function () {
    return i++;
  };
}

let generator = generateId();

console.log(generator());
console.log(generator());
console.log(generator());
