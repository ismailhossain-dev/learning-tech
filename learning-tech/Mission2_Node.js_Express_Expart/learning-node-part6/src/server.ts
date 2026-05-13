import { createServer, Server, IncomingMessage, ServerResponse } from "http";
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(" ami req boltechi", req);

  res.write("Hello World");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
console.log("Hello");
