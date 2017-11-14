import P5Sketch from '../common/sketch'

const setup = (p5: p5) => {
  p5.createCanvas(window.innerWidth, window.innerHeight)
}

const draw = (p5: p5) => {
  if (p5.mouseIsPressed) {
    p5.fill(0)
  } else {
    p5.fill(255)
  }
  p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)
}

const firstSketch = new P5Sketch(setup, draw)
export default firstSketch
