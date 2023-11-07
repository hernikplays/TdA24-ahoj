'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/sbohem', async function (request, reply) {
    return { root: true }
  })
}
