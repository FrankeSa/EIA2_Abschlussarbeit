"use strict";
var Firework;
(function (Firework) {
    class Particle extends Firework.MoveableObject {
        constructor(_position, _velocity, _color, _lifetime) {
            super(_position);
            this.gravity = 1;
            // console.log("constructor particle");
            //this.position = _position.copy();
            // this.position = new Vector(_position.x, _position.y);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.velocity = new Firework.Vector(_velocity.x, _velocity.y);
            this.lifetime = _lifetime;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.velocity.y += this.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
            // let offset: Vector = this.velocity.copy();
            // offset.scale(_timeslice);
            // this.position.add(offset);
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
        }
        draw() {
            //console.log("Particle draw");
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.translate(this.position.x, this.position.y);
            Firework.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            Firework.crc2.fillStyle = this.color;
            Firework.crc2.fill();
            Firework.crc2.closePath();
            Firework.crc2.restore();
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map