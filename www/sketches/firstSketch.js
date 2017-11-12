"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sketch_1 = require("./sketch");
var setup = function (p5) {
    p5.createCanvas(window.innerWidth, window.innerHeight);
};
var draw = function (p5) {
    if (p5.mouseIsPressed) {
        p5.fill(0);
    }
    else {
        p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
};
var firstSketch = new sketch_1.default(setup, draw);
exports.default = firstSketch;
