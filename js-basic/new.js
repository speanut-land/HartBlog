function myNew(ctx, ...args) {
  let obj = Object.create(ctx.prototype);
  let res = ctx.call(obj, ...args);
  return typeof res === "object" ? res : obj;
}
