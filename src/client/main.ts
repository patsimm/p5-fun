import P5Sketch from './common/sketch'
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
