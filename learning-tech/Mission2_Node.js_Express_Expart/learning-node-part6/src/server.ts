//npm run dev dile website run hobe
//these are coming from node_modules=> @types=> http.d.ts
import { createServer, Server, IncomingMessage, ServerResponse } from "http";
import { routeHandler } from "./routes/route.js";
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  //==here you can see which route hit url===like /user /product
  // console.log(" ami req boltechi", req.url);
  // console.log("method", req.method); //post, get , delete , put/patch

  //all work route.ts here
  routeHandler(req, res);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
