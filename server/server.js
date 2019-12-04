const http = require('http');
const port = 3000;


const server = http.createServer((req, res)=>{
    res.end();
});

server.on('error',(err, socket)=>{
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
});

server.listen(port, console.log(`listening on port ${port}`))
