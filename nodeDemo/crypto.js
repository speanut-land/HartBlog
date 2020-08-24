var crypto = require("crypto");
var shasum = crypto.createHash("sha1");
console.log(shasum);
shasum.update("foo");
console.log(shasum.digest("hex"));

require("ws");
