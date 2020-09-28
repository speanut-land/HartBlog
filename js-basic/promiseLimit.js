function Scheduler() {
  this.list = [];
  this.add = (promiseCreator) => this.list.push(promiseCreator);

  this.maxCount = 3;

  this.taskStart = function () {
    for (var i = 0; i < this.maxCount; i++) {
      this.request();
    }
  };

  this.request = () => {
    if (!this.list.length) return;
    this.list
      .shift()()
      .then(() => {
        this.request();
      });
  };
}

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

var scheduler = new Scheduler();

function addTask(time, order) {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
}

addTask(1000, 1);
addTask(2000, 2);
addTask(3000, 3);
addTask(4000, 4);

scheduler.taskStart();
