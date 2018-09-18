const express = require('express')
const next = require('next')
const router = require('./routes/api-routing.js')
const bodyParser = require('body-parser');
const mongoRouter = require('./routes/mongo-routes');
const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(router);
  server.use(mongoRouter);
  server.use(express.static('public'));

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${port} ayy lmao`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

