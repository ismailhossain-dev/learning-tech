//if we are run practice file then i will change package.json file

import { createServer, IncomingMessage, ServerResponse, type Server } from "http";

const practice: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Alhamdullilah" }));
  } else if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "ami product boltechilam" }));
  } else {
    res.writeHead(401, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "ei route e kono data nei" }));
  }
});

practice.listen(5000, () => {
  console.log("server is running 5000");
});
