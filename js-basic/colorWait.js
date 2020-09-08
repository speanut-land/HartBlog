async function c() {
  console.log("red", "1s");
  await sleep(1);
  console.log("yellow", "2s");
  await sleep(2);
  console.log("green", "4s");
}

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms * 1000);
  });
}

async function a() {
  for (let i = 0; i < 5; i++) {
    await c();
  }
}
a();
