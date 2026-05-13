//basically ekane kaj hobe like ekta route er kaj kora lake delete, post , get , patch/put , single product

import type { IncomingMessage, ServerResponse } from "http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;

  const method = req.method;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "This is a product route" }));
};
