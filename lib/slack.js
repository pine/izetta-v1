'use strict'

const { promisify } = require('bluebird')
const { WebClient } = require('@slack/client')

class Slack {
  constructor({ token, channel, user, message }) {
    this.web = new WebClient(token)
    this.channel = channel
    this.user = user
    this.message = message
  }

  async notifyWithered() {
    const postMessage = promisify(this.web.chat.postMessage.bind(this.web.chat))
    await postMessage(this.channel, this.message, this.user)
  }
}

module.exports = Slack
