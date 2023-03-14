import http from 'http';

const PORT = 3000;
const HOST = '127.0.0.1'

const server = http.createServer((req,res)=>{
  let url = req.url.split('/');
  if (url[1]==='' && req.method === 'GET'){
      res.end('Hello, Galvanize!')
  }
  res.statusCode = 404;
  res.end();
})

server.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});

