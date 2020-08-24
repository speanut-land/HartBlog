self.onmessage = (e) => {
  console.log(e);
};

setInterval(() => {
  self.postMessage(10020);
}, 2000);
