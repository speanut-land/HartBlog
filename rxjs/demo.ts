import { take, of } from "./obserable";

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(take(1));

const subscribe = example.subscribe((val) => console.log(val));
