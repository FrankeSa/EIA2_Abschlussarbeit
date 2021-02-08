"use strict";
var Firework;
(function (Firework) {
    class Particle {
        constructor(_color, _pointer, _velocity, _lifetime) {
            // console.log("constructor particle");
            this.position = _pointer;
            this.color = _color;
            this.velocity = _velocity;
            this.lifetime = _lifetime;
        }
        move(_timeslice) {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            // let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            // offset.scale(_timeslice);
            // this.position.add(offset);
            // this.position.test();
            // if (this.position.x < 0)
            //     this.position.x += crc2.canvas.width;
            // if (this.position.y < 0)
            //     this.position.y += crc2.canvas.height;
            // if (this.position.x > crc2.canvas.width)
            //     this.position.x -= crc2.canvas.width;
            // if (this.position.y > crc2.canvas.height)
            //     this.position.y -= crc2.canvas.height;
            // super.move(_timeslice);
            // this.lifetime -= _timeslice;
            // if (this.lifetime < 0)
            //     this.velocity = new Vector(0, 0);
        }
        draw() {
            //console.log("Particle draw");
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.translate(this.position.x, this.position.y);
            Firework.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Firework.crc2.fillStyle = this.color;
            Firework.crc2.fill();
            Firework.crc2.closePath();
            Firework.crc2.restore();
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map