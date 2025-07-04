import http from "http";
import fs from "fs/promises";

const PORT = 3000;
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }
  res.setHeader("Content-Type", "text/html");
  const data = await fs.readFile(path);
  res.end(data);
});
server.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
