'use strict'

const cfenv = require('cfenv')
const log = require('fancy-log')
const http = require('http')

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
  log(`server starting on ${appEnv.url}`)
})

// ----------------------------------------------------------------------------

const CronJob = require('cron').CronJob
const notifyGrass = require('./tasks/notify_grass')

new CronJob('30 21 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
new CronJob('00 23 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
new CronJob('30 23 * * *', () => notifyGrass(), null, true, 'Asia/Tokyo')
