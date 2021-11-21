const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const config = require('./config')
const guestBookCtrl = require('./app/controllers/guestbook')

const app = next({ dev: config.dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.route('/api/guestbook')
    .post((req, res, next) => guestBookCtrl.add(req, res))
    .get((req, res, next) => guestBookCtrl.get(req, res))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${config.fqdn}`)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
