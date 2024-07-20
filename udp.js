const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error", (err) => {
  console.log(`Server error:\n${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  console.log(`Server received: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

// Bind the server to port 41234
server.bind(41234);
// server.bind({port: 41234, address: 'localhost'}); // Use this to bind to a specific address
