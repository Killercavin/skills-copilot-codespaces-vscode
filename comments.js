// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// The comments.html file should be served with the following content:

// create a expressjs server code 

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}
);


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);

// Path: comments.html
// Create a comments.html file with the following content:

// create a html file with the following content

/* <!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <p>Comments are closed.</p>
</body>
</html> */

// Run the server
// Run the server with the following command:

// node comments.js