const entries = []

exports.add = entry => {
  entries.push({
    id: entries.length,
    guestName: entry.guestName,
    guestMessage: entry.guestMessage
  })
}

exports.get = () => {
  return entries
}
