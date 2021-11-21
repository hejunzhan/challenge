const guestBookMemory = require('../adapters/guestbook')

const _writeFailure = (res, message, code) => {
  if (!res.headersSent) {
    res.status(code)
    res.statusMessage = message
    res.send({ error: message })
  }

  if (!res.finished) {
    res.end()
  }
}

const _validate = (res, validate) => {
  let message

  try {
    message = validate()
  } catch (e) {
    console.error('Failed to validate')
    console.error(e.stack || e.message || e)
  }

  if (message) {
    _writeFailure(res, message, 409)
    return false
  }

  return true
}

const _validateGuestBook = (entry, res) => {
  return _validate(res, () => {
    if (entry.guestName.length > 15) {
      return 'Invalid guest name; it must be less than 15'
    }
    if (entry.guestMessage.length > 120) {
      return 'Invalid guest message; it must be less than 120'
    }
  })
}

exports.add = (req, res) => {
  const entry = {
    guestName: req.body.guestName,
    guestMessage: req.body.guestMessage
  }

  if (!_validateGuestBook(entry, res)) {
    return
  }

  guestBookMemory.add(entry)

  res.send('Success')

  if (!res.finished) {
    res.end()
  }
}

exports.get = (req, res) => {
  const entries = guestBookMemory.get()

  res.json({
    entries
  })
}
