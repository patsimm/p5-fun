import sketches from './sketches'

if (window.sketch) {
  const activeSketch = sketches[window.sketch]
  activeSketch.run()
}
