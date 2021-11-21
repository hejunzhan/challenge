const expect = require('expect.js')
const guestBookMemory = require('../app/adapters/guestbook')

const entry = { id: 1 }

describe('Testing /app/adapters/guestbook.js', function () {
  describe('add 1 and get 1', function () {
    it('keeps singular when count is 1', function () {
      guestBookMemory.add(entry)
      const entries = guestBookMemory.get(entry)
      expect(entries.length).to.equal(1)
    })
  })
})
