function sum(...args) {
  sum.list = [].concat(sum.list ? sum.list : [], args);
  sum.sumOf = () => {
    console.log(sum.list.reduce((a, b) => a + b, 0));
    sum.list = [];
  };
  return sum;
}

// function sum(...arg) {
//   let list = [...arg];
//   return function unknow(...arg) {
//     unknow.sumOf = () => {
//       console.log(list.reduce((a, b) => a + b, 0));
//       list = [];
//     };
//     list = list.concat(arg);
//     return unknow;
//   };
// }

sum(0)(1)(3, 4)(5).sumOf();
sum(8)(2)(23)(0).sumOf();
sum(2)(1)(3, 4)(5).sumOf();
sum(12)(12)(12)(12).sumOf();
