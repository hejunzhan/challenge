const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

const fqdn = dev ? `http://localhost:${port}` : 'https://google.com'

module.exports = {
  dev,
  port,
  fqdn
}
