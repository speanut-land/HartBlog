let user = {
  school: {
    name: "hash",
  },
};

// Object.defineProperty(user, "school", {
//   set(val) {
//     console.log(val);
//   },
//   get() {
//     console.log(2);
//   },
// });

Object.defineProperty(user, "name", {
  set(val) {
    console.log(val);
  },
  get() {
    console.log(212);
  },
});
console.log(user.name);

Function.prototype.c = function () {
  console.log(1);
};

function a(params) {}

let b = new a();
b.c();
