// const cp = require("child_process");
// const n = cp.fork("./child.js");

// n.on("message", (m) => {
//   console.log("父进程收到消息", m);
// });

// // 使子进程输出: 子进程收到消息 { hello: 'world' }
// n.send({ hello: "world" });

const net = require("net");
const cp = require("child_process");

let u_proc_1 = cp.fork(__dirname + "/child.js", ["#1"]);
let u_proc_2 = cp.fork(__dirname + "/child.js", ["#2"]);

// create IPC server on parent
let d_server = net.createServer((d_socket_2) => {
  // send server socket to #2
  u_proc_2.send("socket", d_socket_2);
});

// create socket file
let p_socket = __dirname + "/sibling.sock";

// bind server to socket file
d_server.listen(p_socket);

// create client socket; this also triggers creation of a server socket
let d_socket_1 = net.connect(p_socket, () => {
  // have #1 send to #2
  u_proc_1.send("hey!");

  // have #2 send to #1
  u_proc_2.send("hello");
});

// send client socket to #1
u_proc_1.send("socket", d_socket_1);
