"use strict";
var Firework;
(function (Firework) {
    class Particle {
        constructor(_position) {
            console.log("Particle constructor");
            this.position = _position;
        }
        move(_timeslice) {
            console.log("Particle move");
        }
        draw(_color) {
            console.log("Particle draw");
            Firework.crc2.save();
            Firework.crc2.translate(this.position.x, this.position.y);
            Firework.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Firework.crc2.fillStyle = _color;
            Firework.crc2.fill();
            Firework.crc2.restore();
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map