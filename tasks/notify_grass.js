'use strict'

const config = require('config')
const log = require('fancy-log')
const moment = require('moment-timezone')

const grass = require('../lib/grass')
const Slack = require('../lib/slack')

// ----------------------------------------------------------------------------

const token = process.env.SLACK_API_TOKEN

const githubUsername = config.get('github.username')
const channel = config.get('slack.channel')
const username = config.get('slack.username')
const iconUrl = config.get('slack.iconUrl')
const message = config.get('slack.message')
const timeZone = config.get('timeZone')

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

  const now = moment.tz(timeZone)
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
