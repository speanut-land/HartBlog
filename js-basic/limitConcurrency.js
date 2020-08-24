class LimitConcurrency {
  taskList = [];
  i = 4;
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.taskList.push(
        function () {
          return new Promise((res) => {
            setTimeout(() => {
              console.log(i + 1);
              this.i += 1;
              res();
            }, 1000);
          }).finally(() => {
            this.next();
          });
        }.bind(this)
      );
    }
  }
  next() {
    if (this.i < this.taskList.length) {
      this.taskList[this.i]();
    }
  }
  init() {
    for (let i = 0; i < 5; i++) {
      this.taskList[i]();
    }
  }
}

let c = new LimitConcurrency();
c.init();
