/**
 * Minimal state management.
 *
 * const evolve = (get, split, action) => split({ count: get().count + 1 })
 * const render = (atom, details) => console.log(details, atom.get())
 * const atom = createAtom({ count: 1 }, evolve, render)
 *
 * atom.get() // { count: 1 }
 * atom.split('increment') // action
 * atom.split('increment', { by: 2 }) // action with payload
 * atom.split({ count: 0 }) // update state directly
 */
module.exports = function createAtom (initialState, evolve, render, extend) {
  var actionSeq = 0
  var state = initialState || {}
  extend = extend || Object.assign
  var atom = { get: get, split: createSplit() }
  return atom

  function get () {
    return state
  }

  function set (nextState, action, seq) {
    var prevState = state
    state = extend({}, state, nextState)
    render && render(atom, {
      seq: seq,
      action: action || { payload: nextState },
      update: nextState,
      prev: prevState
    })
    return state
  }

  function createSplit (sourceAction, seq) {
    return function split (type, payload) {
      if (typeof type !== 'string') {
        if (!sourceAction) actionSeq++
        return set(type, sourceAction, seq || actionSeq)
      } else {
        actionSeq++
        var action = { type: type, payload: payload }
        evolve(get, createSplit(action, actionSeq), action)
      }
    }
  }
}
