'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/cau', async function (request, reply) {
    return { root: true }
  })
}
