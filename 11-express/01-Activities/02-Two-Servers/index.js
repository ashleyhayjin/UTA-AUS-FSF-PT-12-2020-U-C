// one that listens on port 7000 and one that listens on port 7500.
// http file node package
const http = require('http');
 //node package pages
const PORT = 7000;
const PORT2 = 8080;
//first server 
const handleQuote = (request, response) => {
    response.end(`Just do It ${request.url}`);
}
//2nd server response page
const handleQuote2 = (request, response) => {
    response.end(`You're the best ${request.url}`);
}

//first and second server http address
const server = http.createServer(handleQuote);
const server2 = http.createServer(handleQuote2);

//listen, console log to make sure it's working. 
server.listen(PORT, () => {
    console.log(`server listening on: http://localhost:${PORT}`);
    console.log(`server listening on: http://localhost:${PORT2}`);

});

server2.listen(PORT2, () => {
    console.log(`server listening on: http://localhost:${PORT2}`);

});