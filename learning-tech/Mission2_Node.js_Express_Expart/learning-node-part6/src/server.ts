//npm run dev dile website run hobe
//these are coming from node_modules=> @types=> http.d.ts
import { createServer, Server, IncomingMessage, ServerResponse } from "http";
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  //==here you can see which route hit url===like /user /product
  // console.log(" ami req boltechi", req.url);
  // console.log("method", req.method); //post, get , delete , put/patch
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    //console.log("This Root Route");
    //the writeHead coming node.js documentation/response.writeHead(statusCode[, statusMessage][, headers])
    //== we are watching node.js docs
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.end("This Root route");
    //if we are write application/json  then i will write json format code like
    //if we are not send json format data client side then the will be crash website
    res.end(JSON.stringify({ message: "This is Root route" }));
    //startsWith() use করা হয় একটা string কোনো নির্দিষ্ট text দিয়ে শুরু হয়েছে কিনা চেক করার জন্য।
  } else if (url?.startsWith("/products")) {
    res.end(JSON.stringify({ message: "This is a product route" }));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
