"use strict";
var Firework;
(function (Firework) {
    class Particle {
        constructor(_position, _velocity) {
            console.log("Particle constructor");
        }
        move(_timeslice) {
            console.log("Particle move");
        }
        draw() {
            console.log("Particle draw");
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map