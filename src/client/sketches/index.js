import P5Sketch from '../common/sketch'
import chaos from './chaos'
import firstSketch from './firstSketch'
import tree from './tree'

const sketches = {
  firstSketch,
  tree,
  chaos
}

export default sketches

export const sketchNames = Object.keys(sketches)
