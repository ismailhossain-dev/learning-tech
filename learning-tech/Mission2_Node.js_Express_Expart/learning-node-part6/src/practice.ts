//if we are run practice file then i will change package.json file

import { createServer, IncomingMessage, ServerResponse, type Server } from "http";

const practice: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url);
  console.log(req.method);
  res.end("Ki obsta tumar");

  if (req.url === "/" && req.method === "GET") {
    res.end("Ami valo achi");
  }
});

practice.listen(5000, () => {
  console.log("server is running 5000");
});
