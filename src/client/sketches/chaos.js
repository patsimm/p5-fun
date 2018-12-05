import * as p5 from 'p5'
import P5Sketch from '../common/sketch'

/**
 * @type {p5.Vector}
 */
const Vector = p5.default.Vector

const POINT_AMOUNT = 5
const startPoints = []
const points = []
let lastPoint

/**
 * @param {p5} p5
 */
const setup = p5 => {
  p5.createCanvas(window.innerWidth - 20, window.innerHeight - 200)
  for (let i = 0; i < POINT_AMOUNT; i++) {
    startPoints.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)))
  }
  lastPoint = startPoints[POINT_AMOUNT - 1]
}

/**
 * @param {p5} p5
 */
const draw = p5 => {
  p5.background('#e4e4e4')
  p5.stroke('black')
  p5.fill('red')
  startPoints.forEach(point => {
    p5.ellipse(point.x, point.y, 10, 10)
  })

  // Choose random start point
  const randomIndex = Math.floor(p5.random(POINT_AMOUNT))
  const randomPoint = startPoints[randomIndex]

  const halfWay = Vector.add(randomPoint, lastPoint).div(2)
  points.push(halfWay)
  lastPoint = halfWay

  p5.fill('black')
  points.forEach(point => {
    p5.ellipse(point.x, point.y, 1, 1)
  })
}

const firstSketch = new P5Sketch(setup, draw)
export default firstSketch
