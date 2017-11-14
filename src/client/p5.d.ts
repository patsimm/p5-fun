// https://github.com/abagames/sarad/blob/master/typings/p5/p5.d.ts

declare module 'p5'

declare class p5 {
  WEBGL: number
  mouseX: number
  mouseY: number
  mouseIsPressed: boolean

  setup(): void
  draw(): void
  createVector(x?: number, y?: number): p5.Vector
  createCanvas(width: number, height: number, option?: any): void
  background(r: number | string, g?: number, b?: number): void
  stroke(r: number, g?: number, b?: number): void
  fill(r: number, g?: number, b?: number): void
  noFill(): void
  ellipse(x: number, y: number, width: number, height: number): void
  rect(x: number, y: number, width: number, height: number): void
  line(x1: number, y1: number, x2: number, y2: number): void
  bezier(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): void
  textSize(size: number): void
  text(str: string, x: number, y: number, x2?: number, y2?: number): void
  textWidth(str: string): number
  frameRate(fps: number): void
  clear(): void
}

declare namespace p5 {
  class Vector {
    x: number
    y: number
    z: number

    constructor(x?: number, y?: number, z?: number)
    toString(): string
    set(x?: number | Vector | number[], y?: number, z?: number): void
    copy(): Vector
    add(x?: number | Vector | number[], y?: number, z?: number): void
    sub(x?: number | Vector | number[], y?: number, z?: number): void
    mult(v: number): void
    div(v: number): void
    mag(): number
    magSq(): number
    dot(x?: number | Vector | number[], y?: number, z?: number): number
    cross(v: Vector): Vector
    dist(v: Vector): number
    normalize(): void
    limit(v: number): void
    setMag(v: number): void
    heading(): number
    rotate(angle: number): void
    lerp(x: number, y?: number, z?: number, amt?: number): void
    array(): number[]
    equals(x?: number | Vector | number[], y?: number, z?: number): boolean
    static fromAngle(angle: number): Vector
    static random2D(): Vector
    static random3D(): Vector
    static angleBetween(v1: Vector, v2: Vector): number
  }
}
