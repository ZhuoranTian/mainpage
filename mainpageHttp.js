const express = require('express')
const http = require('http')
const app = express()
const PORT = 80
const fs = require('fs');
const path = require('path');
const debug = require('debug')('demo:httpsServer'); //开源日志工具。


const httpServer = http.createServer((req, res) => {
  res.writeHead(301, {
    'Location': `https://${req.headers.host}${req.url}`
  })
  res.end();
})
httpServer.listen(80);
httpServer.on('listening', () => {
  console.log('the http server has been listened at port 80')
})