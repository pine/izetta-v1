'use strict'

const http = require('http')
const cfenv = require('cfenv')

const appEnv = cfenv.getAppEnv()
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/health' || req.url === '/healthcheck') {
    res.writeHead(200)
    res.end('OK')
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(appEnv.port, '0.0.0.0', function () {
  console.log(`server starting on ${appEnv.url}`)
})

// ----------------------------------------------------------------------------

const CronJob = require('cron').CronJob
const notifyGrass = require('./tasks/notify_grass')

// new CronJob('11 00 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
notifyGrass()
