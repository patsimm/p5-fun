import * as express from 'express'
import * as path from 'path'
import sketchNames from './sketches'
const app = express()

export default class SketchServer {
  app: express.Application
  sketchNames: string[]

  constructor() {
    this.app = express()
    this.sketchNames = sketchNames
  }

  serve(port: number) {
    app.use('/static', express.static(path.join(__dirname, '/www')))

    app.set('views', path.join(__dirname, '/views'))

    this.sketchNames.forEach(name => {
      app.get(`/sketch/${name}`, (req, res) => {
        res.render('sketch.jade', { sketch: name })
      })
    })

    app.get('/', (req, res) => {
      res.render('index.jade', { sketchNames: this.sketchNames })
    })

    app.listen(port)
  }
}

const server = new SketchServer()
server.serve(5000)
