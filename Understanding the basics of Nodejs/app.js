//Usually when importing core modules we use the same name as the module
const http = require("http");
const routes = require("./routes");

//Creates the server
const server = http.createServer(routes.requestHandler);

//createServer returns server data and we choose port 3000
server.listen(3000);
