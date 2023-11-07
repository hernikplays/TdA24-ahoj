'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/jupi', async function (request, reply) {
    return { root: true }
  })
}
