const express = require('express')
const http = require('http')
const app = express()
const port = 80
const fs = require('fs');
const path = require('path');
const debug = require('debug')('demo:httpsServer'); //开源日志工具。

//读取证书，保存为https所需的options
const privateCrt = fs.readFileSync(path.join(process.cwd(), 'https/1_letsrun.plus_bundle.crt'), 'utf8');
const privateKey = fs.readFileSync(path.join(process.cwd(), 'https/2_letsrun.plus.key'), 'utf8');
const HTTPS_OPTOIN = {
  key: privateKey,
  cert: privateCrt
};

//定义端口，开启服务
const SSL_PORT = 80;
const httpsServer = http.createServer(HTTPS_OPTOIN, app);
httpsServer.listen(SSL_PORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${SSL_PORT}`);
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
// set up plain http server
// var http = app.createServer();
