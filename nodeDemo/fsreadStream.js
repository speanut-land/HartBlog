const SIZE = 1024 * 10;
let stream = require("fs").createReadStream("./test.txt", {
  encoding: "utf-8",
  start: SIZE,
  end: SIZE * 2,
});

stream.readableEncoding = stream.on("data", (chunk) => {
  console.log(chunk + 1008);
});

stream.on("end", () => {
  console.log("end");
});
