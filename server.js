// Import the 'http' module
const http = require('http');

// Define the hostname and port for your server
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send "Hello, World!" as the response
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
Documentation:
=============================================
Node.js application that creates an HTTP server using the built-in 'http' module. It listens on a specified hostname and port and responds to incoming HTTP requests with a simple "Hello, World!" message. Let's break down the code step by step:

Import the 'http' Module:

const http = require('http');
The 'http' module is a core module in Node.js used to create HTTP servers and make HTTP requests.
Define the Hostname and Port:

const hostname = '127.0.0.1';
const port = 3000;
hostname: This variable stores the IP address ('127.0.0.1') on which the server will listen. In this case, it's set to '127.0.0.1', which is the loopback address (localhost).
port: This variable stores the port number (3000) on which the server will listen for incoming HTTP requests.
Create an HTTP Server:

const server = http.createServer((req, res) => {
  // Set the response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send "Hello, World!" as the response
  res.end('Hello, World!\n');
});
An HTTP server is created using the http.createServer method. It takes a callback function that will be executed for each incoming HTTP request.
Inside the callback function, the response (res) is prepared:
res.statusCode: Sets the HTTP status code to 200, indicating a successful response.
res.setHeader('Content-Type', 'text/plain'): Sets the Content-Type header of the response to 'text/plain', indicating that the response will contain plain text.
res.end('Hello, World!\n'): Sends the "Hello, World!" message as the response body and terminates the response.
Start the Server:

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
The server is started using the server.listen method. It listens on the specified port and hostname.
When the server starts and is ready to accept incoming requests, a callback function is executed, which logs a message indicating that the server is running and provides a URL where it can be accessed.
In summary, this code creates a minimal HTTP server that listens on 127.0.0.1 (localhost) at port 3000. When accessed in a web browser or using an HTTP client, it responds with a plain text "Hello, World!" message. This is a fundamental example that demonstrates the basic structure of an HTTP server in Node.js.

*/