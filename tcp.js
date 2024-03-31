
const net = require('net');

const tcpPort = 3001;

// TCP server
const tcpServer = net.createServer((socket) => {
  console.log("TCP client connected");

  socket.on("data", (data) => {
    console.log("Data from TCP client:", data.toString());
    socket.write("Echo from TCP server: " + data);
  });

  socket.on("end", () => {
    console.log("TCP client disconnected");
  });
});

tcpServer.listen(tcpPort, () => {
  console.log(`TCP server listening on port ${tcpPort}`);
});
