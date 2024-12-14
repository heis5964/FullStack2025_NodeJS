const http = require('http');


//req = เอาไว้รับข้อมูลจาก client
//res = การตอบกับจาก client
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello World');
})

server.listen(3001, '127.0.0.1', () => {
    console.log('Server is running on 127.0.0.1:3001');
})