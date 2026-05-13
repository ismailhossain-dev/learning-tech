import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = (req:IncomingMessage, res:ServerResponse){
const url = req.url;
const method = req.method;
if (url === "/" && method === "GET") {
//console.log("This Root Route");
//the writeHead coming node.js documentation/response.writeHead(statusCode[, statusMessage][, headers])
//== we are watching node.js docs
// res.writeHead(200, { "Content-Type": "text/plain" });
res.writeHead(200, { "Content-Type": "application/json" });
// res.end("This Root route");
//if we are write application/json then i will write json format code like
//if we are not send json format data client side then the will be crash website
res.end(JSON.stringify({ message: "This is Root route" }));
//startsWith() use করা হয় একটা string কোনো নির্দিষ্ট text দিয়ে শুরু হয়েছে কিনা চেক করার জন্য।
} else if (url?.startsWith("/products")) {
res.end(JSON.stringify({ message: "This is a product route" }));
} else {
res.writeHead(404, { "Content-type": "application/json" });
res.end(JSON.stringify({ message: "Route not found" }));
}
}
