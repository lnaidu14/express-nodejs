//This is the root code that gets executed on the server
//Some core modules nodejs comes with are http,https,fs,path,os etc.
//http allows us to launch a server and send a request
//https allows us to launch a ssl server
const fs = require("fs");
const { request } = require("http");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    //This write html code into the web page
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action ="/message" method="POST"><input type= "text" name="message"><button type = "submit">Send</button></form></body>'
    );
    res.write("</html>");
    //Ends the response call
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    //.on "listens" and waits for an event to occur and then executes the callback function
    //The listener triggers .on when request data is being parsed in chunks. NodeJS parses it in a stream in chunks by default because it can never know the size of the data being request
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    //The listener triggers .end when the request data chunks have been completely parsed
    return req.on("end", () => {
      //Now that the request data has stopped streaming, we add a buffer allows us to end the process and concatenate the body into a string (in this case)
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //This is how we use fs to write files and then create it in our local folder
      //writeFileSync is synchronous way to create a file where it waits for the file to be created after which the proceeding code will be executed
      //So it is always better to use writeFile instead so that the consequent code isn't blocked
      fs.writeFile("message.txt", message, {}, (err) => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }
  //This sets the response headers which can be seen when going to the network tab when inspecting website
  res.setHeader("Content-Type", "text/html");
  //This write html code into the web page
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to the server!</h1></body>");
  res.write("</html>");
  res.end();
};

//Multiple ways of exporting a file

module.exports = { requestHandler };
// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
// };

// module.exports.hanlder = requestHandler;

// exports.hanlder = requestHandler;
