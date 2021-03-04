function parseURL(url) {
  var a =  document.createElement('a');
  a.href = url;
  return {
      source: url,
      protocol: a.protocol.replace(':',''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function(){
          var ret = {},
              seg = a.search.replace(/^\?/,'').split('&'),
              len = seg.length, i = 0, s;
          for (;i<len;i++) {
              if (!seg[i]) { continue; }
              s = seg[i].split('=');
              ret[s[0]] = s[1];
          }
          return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
      hash: a.hash.replace('#',''),
      path: a.pathname.replace(/^([^\/])/,'/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
      segments: a.pathname.replace(/^\//,'').split('/')
  };
}
function parseUrl(url) {
  let query = url.split("?")[1];
  return query.split("&").reduce((pre, curr) => {
    let item = curr.split("=");
    pre[item[0]] = item[1];
    return pre;
  }, {});
}
const queryString = (url) => {
  let regx = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};

  url.replace(regx, (...args) => {
    if (obj[args[1]]) {
      obj[args[1]] = Array.isArray(obj[args[1]])
        ? obj[args[1]]
        : [obj[args[1]]];
      obj[args[1]].push(args[2]);
    } else {
      obj[args[1]] = args[2];
    }
  });

  return obj;
};

console.log(queryString("www.u.com/home?id=2&type=0&dtype=-1"));
console.log(parseUrl("www.u.com/home?id=2&type=0&dtype=-1"));
