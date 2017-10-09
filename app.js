'use strict'

const log = require('fancy-log')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/health' || req.url === '/healthcheck') {
    res.writeHead(200)
    res.end('OK')
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  log(`Listining: http://0.0.0.0:${port}`)
})


// ----------------------------------------------------------------------------

const CronJob = require('cron').CronJob
const notifyGrass = require('./tasks/notify_grass')

new CronJob('30 21 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
new CronJob('00 23 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
new CronJob('30 23 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
