let express = require("express");
let cors = require("cors");
let app = express();

let whitelist = ["http://localhost:3001", "http://localhost:4200"];
let corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(express.static("public"));
app.get("/login", function (req, res, next) {
  console.log(req.url);
  res.send({ msg: "我是service1" });
});

app.listen(3002, function () {
  console.log("CORS-enabled web server listening on port 3002");
});
