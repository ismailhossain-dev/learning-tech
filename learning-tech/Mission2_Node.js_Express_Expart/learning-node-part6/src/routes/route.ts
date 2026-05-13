import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    //console.log("This Root Route");
    //the writeHead coming node.js documentation/response.writeHead(statusCode[, statusMessage][, headers])

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is Root route" }));
  } else if (url?.startsWith("/products")) {
    res.end(JSON.stringify({ message: "This is a product route" }));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};
