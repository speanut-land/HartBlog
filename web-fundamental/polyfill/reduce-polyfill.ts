//this is simple implement array.reduce , no consider other possible errors

let test: number[] = [1, 2, 3, 4];

function reduce(cb: (acc, currVal, index, array) => any, initialValue?: any): any {
  //get this value ,for instance [1,2,3,4,5,6,7,8] toObject()
  let o: any[] = Object(this);
  let len: number = o.length;
  let i: number = 0;
  let value = initialValue ? initialValue : o[i++];
  while (i < len) {
    value = cb(value, o[i], i, o);
    i += 1;
  }
  return value;
}
console.log(reduce.call(test, (accumulator, currentValue) => accumulator + currentValue));
