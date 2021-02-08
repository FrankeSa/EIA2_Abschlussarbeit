"use strict";
var Firework;
(function (Firework) {
    class Particle {
        constructor(_position, _velocity, _color, _lifetime) {
            // console.log("constructor particle");
            this.position = _position;
            this.position = new Firework.Vector(_position.x, _position.y);
            this.color = _color;
            this.velocity = _velocity;
            this.velocity = new Firework.Vector(_velocity.x, _velocity.y);
            this.lifetime = _lifetime;
        }
        move(_timeslice) {
            //console.log("Move");
            let offset = new Firework.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
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
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.velocity = new Firework.Vector(0, 0);
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