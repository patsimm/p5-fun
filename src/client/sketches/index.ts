import P5Sketch from '../common/sketch'
import firstSketch from './firstSketch'

interface SketchList {
  [sketchName: string]: P5Sketch
}

const sketches = {
  firstSketch
} as SketchList

export default sketches

export const sketchNames = Object.keys(sketches)
