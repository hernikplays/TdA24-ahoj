'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/ahoj', async function (request, reply) {
    return { root: true }
  })
}
