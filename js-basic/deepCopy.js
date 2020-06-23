function deepCopy(obj) {
  if(typeof obj !== 'object') throw  '错误啦 ';
  let res =  {};
  for (const key of Object.getOwnPropertyNames(obj)) {
    if(typeof obj[key] === 'object') {
      res[key] = deepCopy(obj[key])
    }else {
      res[key] = obj[key]
    }
  }
  return res
}

let ccc = {
  name: 'haha',
  fullname: {
    xixi: 'xixi',
    math: {
      jj: 'jj'
    }
  }
}
console.log(deepCopy(123) === ccc)