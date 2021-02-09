"use strict";
var Firework;
(function (Firework) {
    class Particle extends Firework.MoveableObject {
        constructor(_position, _velocity, _color, _lifetime, _type) {
            super(_position);
            this.gravity = 1;
            // console.log("constructor particle");
            //this.position = _position.copy();
            // this.position = new Vector(_position.x, _position.y);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.velocity = new Firework.Vector(_velocity.x, _velocity.y);
            this.lifetime = _lifetime;
            this.type = _type;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.velocity.y += this.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;
        }
        draw() {
            //console.log("Particle draw");
            switch (this.type) {
                case "dot":
                    Firework.crc2.save();
                    Firework.crc2.beginPath();
                    Firework.crc2.translate(this.position.x, this.position.y);
                    Firework.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
                    Firework.crc2.closePath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fill();
                    Firework.crc2.restore();
                    break;
                case "confetti":
                    Firework.crc2.save();
                    Firework.crc2.beginPath();
                    Firework.crc2.translate(this.position.x, this.position.y);
                    Firework.crc2.scale(0.5, 0.5);
                    Firework.crc2.ellipse(0, 0, 3, 12, Math.PI / 7, 0, 2 * Math.PI);
                    Firework.crc2.closePath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fill();
                    Firework.crc2.restore();
                    break;
                case "heart":
                    //
                    break;
            }
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map