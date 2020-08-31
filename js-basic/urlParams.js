function parseUrl(url) {
  let query = url.split("?")[1];
  return query.split("&").reduce((pre, curr) => {
    let item = curr.split("=");
    pre[item[0]] = item[1];
    return pre;
  }, {});
}
const queryString = (str) => {
  const obj = {};
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
    obj[k] = v;
  });
  return obj;
};
console.log(queryString("www.u.com/home?id=2&type=0&dtype=-1"));
console.log(parseUrl("www.u.com/home?id=2&type=0&dtype=-1"));
