import * as express from 'express'
import * as path from 'path'
const app = express()

export default class SketchServer {
  app: express.Application

  constructor() {
    this.app = express()
  }

  serve(port: number) {
    app.use(express.static('dist/www'))

    app.set('views', path.join(__dirname, '/views'))

    app.get('/sketch/:name', (req, res) => {
      res.render('sketch.jade', { sketch: req.params.name })
    })

    app.listen(port)
  }
}

const server = new SketchServer()
server.serve(5000)
