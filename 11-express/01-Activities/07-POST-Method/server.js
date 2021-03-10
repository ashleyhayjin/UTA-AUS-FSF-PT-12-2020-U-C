const http = require('http');

const PORT = 8080;

const handleRequest = (req, res) => {
    let requestData = '';

    req.on('data', (data) => {

        requestData += data;
    });

    req.on('end', () => {

        console.log()

    })
}