module.exports = {
  todo: {
    state: {
      items: [
        'learn tiny-atom',
        'use tiny-atom',
        'star tiny-atom'
      ],
      input: ''
    },
    actions: {
      add: (get, split, payload, root) => {
        const items = get().items.concat([get().input])
        split({ items, input: '' })
        root.split('hint.hide')
        root.split('analytics.track', { type: 'added' })
      },
      done: (get, split, index, root) => {
        const items = get().items.filter((item, i) => i !== index)
        split({ items })
        root.split('analytics.track', { type: 'removed' })
      },
      update: (get, split, input) => {
        split({ input })
      }
    }
  },

  hint: {
    state: {
      text: 'Type + hit enter',
      show: true
    },
    actions: {
      show: (get, split) => {
        split({ show: true })
      },
      hide: (get, split) => {
        split({ show: false })
      }
    }
  },

  analytics: {
    state: {
      events: []
    },
    actions: {
      track: (get, split, event) => {
        const events = get().events.concat([event])
        split({ events })
      }
    }
  }
}
