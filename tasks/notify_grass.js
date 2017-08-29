'use strict'

const log = require('fancy-log')
const moment = require('moment-timezone')

const grass = require('../lib/grass')
const Slack = require('../lib/slack')

// ----------------------------------------------------------------------------

const githubUsername = process.env.GITHUB_USERNAME
const token = process.env.SLACK_API_TOKEN
const channel = process.env.SLACK_CHANNEL
const username = process.env.SLACK_USERNAME || 'izetta'
const iconUrl = process.env.SLACK_ICON_URL || ''
const message = process.env.SLACK_MESSAGE
const notifyTimeZone = process.env.NOTIFY_TIMEZONE || 'Asia/Tokyo'

// ----------------------------------------------------------------------------

if (!githubUsername) {
  log.error('`GITHUB_USERNAME` not found')
  process.exit(1)
}

if (!token) {
  log.error('`SLACK_API_TOKEN` not found')
  process.exit(1)
}

if (!channel) {
  log.error('`SLACK_CHANNEL` not found')
  process.exit(1)
}

if (!message) {
  log.error('`SLACK_MESSAGE` not found')
  process.exit(1)
}

// ----------------------------------------------------------------------------

module.exports = async () => {
  log('Checking GitHub grasses ... ')

  const now = moment.tz(notifyTimeZone)
  if (await grass.isWithered(now, githubUsername)) {
    log('GitHub lush grassess is withered!')

    const slack = new Slack({
      token,
      channel,
      user: {
        username,
        icon_url: iconUrl,
      },
      message,
    })
    await slack.notifyWithered()
  }
}
