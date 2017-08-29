'use strict'

const get = require('lodash.get')
const { fetchStats } = require('github-contribution-stats')

async function isWithered(now, username) {
  const date  = now.format('YYYY-MM-DD')
  const stats = await fetchStats(username)

  const { contributions } = stats
  const contribution = contributions.find(c => c.date === date)

  return !get(contribution, 'count')
}

module.exports = { isWithered }
