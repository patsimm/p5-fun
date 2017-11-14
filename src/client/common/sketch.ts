import * as p5 from 'p5'

interface Sketch {
  run: () => void
}

export default class P5Sketch implements Sketch {
  setup: (sketch: p5) => void
  draw: (sketch: p5) => void
  myp5: any

  constructor(setup: (sketch: p5) => void, draw: (sketch: any) => void) {
    this.setup = setup
    this.draw = draw
  }

  run() {
    this.myp5 = new p5((sketch: p5) => {
      sketch.setup = (): void => {
        this.setup(sketch)
      }

      sketch.draw = (): void => {
        this.draw(sketch)
      }
    }, 'p5sketch')
  }
}
