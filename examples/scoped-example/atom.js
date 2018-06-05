const createConnector = require('tiny-atom/preact')
const debug = require('tiny-atom/log')
const createAtom = require('./scoped')
const atom = window.atom = createAtom({ debug })
const { Consumer } = createConnector(atom)
module.exports = { atom, Consumer }
