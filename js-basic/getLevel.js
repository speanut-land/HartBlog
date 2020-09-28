function getLevel(arr) {
    let res = 1;
    for(const i of arr) {
        if(Array.isArray(i)) {
            res = Math.max(res,1+getLevel(i))
        }
    }
    return res
}

console.log(getLevel([1,2,3,[4,5,[8],[7,[4,5]]]]))