import p5 from 'p5'
import P5Sketch from '../common/sketch'

/**
 * @param {p5} p5
 */
const setup = p5 => {
  p5.createCanvas(window.innerWidth, window.innerHeight)
}

/**
 * @param {p5} p5
 */
const drawThing = (p5, x, y, rotation, iterations) => {
  const rot = rotation % 4
  const drawFunc = (x1, y1, x2, y2) => {
    if (iterations === 0) {
      p5.line(x1, y1, x1, y1)
    } else {
      drawThing(p5, x1, y1, (rotation + 1) % 3, iterations - 1)
    }
  }
  const length = (iterations + 1) * 10

  if (rot !== 0) {
    drawFunc(x, y, x + length, y)
  }
  if (rot !== 1) {
    drawFunc(x + length, y, x + length, y + length)
  }
  if (rot !== 2) {
    drawFunc(x + length, y + length, x, y + length)
  }
  if (rot !== 3) {
    drawFunc(x, y + length, x, y)
  }
}

/**
 * @param {p5} p5
 */
const draw = p5 => {
  drawThing(p5, 100, 100, 3, 2)
}

const tree = new P5Sketch(setup, draw)
export default tree
