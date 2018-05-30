const test = require('ava')
const Preact = require('preact')
const { ProvideAtom, ConnectAtom, connect } = require('../src/preact')
const testApp = require('./generic-app')

const h = global.h = Preact.h

test('usage', t => {
  const app = testApp({ h, ProvideAtom, ConnectAtom, connect })

  app.render((App, atom, root) => {
    Preact.render(
      h(ProvideAtom, { atom }, [
        h(App, {})
      ])
      , root, root.lastElementChild)
  })

  app.assert(t)
})
