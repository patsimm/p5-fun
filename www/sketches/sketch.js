"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p5 = require("p5");
var P5Sketch = /** @class */ (function () {
    function P5Sketch(setup, draw) {
        this.setup = setup;
        this.draw = draw;
    }
    P5Sketch.prototype.run = function () {
        var _this = this;
        this.myp5 = new p5(function (sketch) {
            sketch.setup = function () {
                _this.setup(sketch);
            };
            sketch.draw = function () {
                _this.draw(sketch);
            };
        }, 'p5sketch');
    };
    return P5Sketch;
}());
exports.default = P5Sketch;
