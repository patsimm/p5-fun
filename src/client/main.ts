import * as p5 from 'p5'
import P5Sketch from './common/sketch'
import './p5.d'
import sketches from './sketches'

declare global {
  interface Window {
    sketch: string
  }
}

if (window.sketch) {
  const activeSketch: P5Sketch = sketches[window.sketch]
  activeSketch.run()
}
