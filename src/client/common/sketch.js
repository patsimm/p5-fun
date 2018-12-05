import p5 from 'p5'

export default class P5Sketch {
  constructor(setup, draw) {
    this.setup = setup
    this.draw = draw
  }

  run() {
    this.myp5 = new p5(sketch => {
      sketch.setup = () => {
        this.setup(sketch)
      }

      sketch.draw = () => {
        this.draw(sketch)
      }
    }, document.getElementById('p5sketch'))
  }
}
