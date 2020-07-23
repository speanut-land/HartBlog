"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obserable_1 = require("./obserable");
const source = obserable_1.of(1, 2, 3, 4, 5);
const example = source.pipe();
console.log(example);
// const subscribe = example.subscribe((val) => console.log(val));
// console.log(subscribe);
