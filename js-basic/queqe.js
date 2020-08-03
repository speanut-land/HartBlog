class Quene {
  msg = [];
  constructor() {}
  task(time, cb) {
    this.msg.push({ time, cb });
    return this;
  }
  start() {
    this.next();
  }
  next() {
    let currentTask = this.msg.shift();
    if (currentTask) {
      setTimeout(() => {
        currentTask.cb();
        this.next();
      }, currentTask.time);
    }
  }
}
new Quene()
  .task(100, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
