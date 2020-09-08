console.log("10000000000".replace(/(\d)(?=(\d{3})+\b)/g, "$1."));
console.log(
  "10000000000"
    .split("")
    .reverse()
    .reduce((prev, cur, index) =>
      (index + 1) % 3 == 0 ? "." + cur + prev : cur + prev
    )
);
