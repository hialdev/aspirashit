const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const router = require('./routes/api')
app.prepare().then(() => {
  const server = express()

  // Parse request body as JSON
  server.use(bodyParser.json())

  // ---- Body Parser
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  server.use(bodyParser.json())

  // ---- Router
  server.use('/api', router)
  
  // Next.js routes
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
