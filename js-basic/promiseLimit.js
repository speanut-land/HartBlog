async function cc() {
  let arr = Array.from(
    new Array(10),
    (item, index) =>
      new Promise((res) => {
        setTimeout(() => {
          res(index + 1);
        }, 1000);
      })
  );
  for (let i = 0; i < arr.length; i++) {
    try {
      const result = await arr[i]();
      console.log(result);
    } catch {}
  }
  console.log("done !");
}
cc();
