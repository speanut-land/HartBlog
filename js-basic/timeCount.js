function countTime() {
  let leaveTime =
    (new Date("2020-11-11 00:00:00").getTime() - new Date().getTime()) / 1000;
  let d = Math.floor(leaveTime / 60 / 60 / 24);
  let h = Math.floor((leaveTime / 60 / 60) % 24);
  let m = Math.floor((leaveTime / 60) % 60);
  let s = Math.floor(leaveTime % 60);
  console.log(d, h, m, s);
  setTimeout(countTime, 1000);
}

countTime();

const interval = 1000;
let ms = 50000; // 从服务器和活动开始时间计算出的时间差，这里测试用 50000 ms
let count = 0;
const startTime = new Date().getTime();
let timeCounter;
if (ms >= 0) {
  timeCounter = setTimeout(countDownStart, interval);
}

function countDownStart() {
  count++;
  const offset = new Date().getTime() - (startTime + count * interval); // A
  let nextTime = interval - offset;
  if (nextTime < 0) {
    nextTime = 0;
  }
  ms -= interval;
  console.log(
    `误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`
  );
  if (ms < 0) {
    clearTimeout(timeCounter);
  } else {
    timeCounter = setTimeout(countDownStart, nextTime);
  }
}
