const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;

const renderWelcomePage = (req, res) => {
    fs.readFile(path.join(__dirname,'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type' : 'text/html'});
            res.end(
                '<html><h1> OOPS. </h1> </html>'
            );
        } else {

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    })
}

const renderThankYou = (req, res) => {
    let requestData = '';

    let myHTML = "<html><h1>Hello</h1></html>"

    req.on('data', (data) => {
        requestData += data;
        console.log("you posted data", requestData);

        



    })


}