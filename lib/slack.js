'use strict'

const co            = require('co')
const { promisify } = require('bluebird')
const { WebClient } = require('@slack/client')

class Slack {
  constructor({ token, channel, user, message }) {
    this.web     = new WebClient(token)
    this.channel = channel
    this.user    = user
    this.message = message
  }

  notifyWithered() {
    const _this = this
    return co(function* () {
      const postMessage = promisify(_this.web.chat.postMessage.bind(_this.web.chat))
      yield postMessage(_this.channel, _this.message, _this.user)
    })
  }
}

module.exports = Slack
