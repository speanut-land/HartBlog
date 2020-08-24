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
