import app from "./app";
import http from "http";
const debug = require("debug")("api:server");

const server = http.createServer(app);

server.listen(process.env.PORT || 6969);
server.on("listening", onListening);

function onListening() {
  const addr = server.address();
  debug(
    `Listening on http://localhost:${
      typeof addr === "string" ? addr : addr?.port
    }`
  );
}
