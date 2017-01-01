'use strict'

const co             = require('co')
const get            = require('lodash.get')
const { fetchStats } = require('github-contribution-stats')

function isWithered(now, username) {
  return co(function* () {
    const date  = now.format('YYYY-MM-DD')
    const stats = yield fetchStats(username)

    const { contributions } = stats
    const contribution = contributions.find(c => c.date === date)

    return !!get(contribution, 'count')
  })
}

module.exports = { isWithered }
