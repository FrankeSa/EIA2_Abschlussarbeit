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
                case "star":
                    Firework.crc2.save();
                    Firework.crc2.beginPath();
                    Firework.crc2.translate(this.position.x, this.position.y);
                    Firework.crc2.scale(0.2, 0.2);
                    Firework.crc2.moveTo(75, 30);
                    Firework.crc2.lineTo(90, 60);
                    Firework.crc2.lineTo(125, 75);
                    Firework.crc2.lineTo(95, 85);
                    Firework.crc2.lineTo(105, 130);
                    Firework.crc2.lineTo(75, 110);
                    Firework.crc2.lineTo(45, 130);
                    Firework.crc2.lineTo(55, 85);
                    Firework.crc2.lineTo(55, 85);
                    Firework.crc2.lineTo(20, 70);
                    Firework.crc2.lineTo(55, 60);
                    Firework.crc2.closePath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fill();
                    Firework.crc2.restore();
                    break;
                case "popcorn":
                    Firework.crc2.save();
                    Firework.crc2.beginPath();
                    Firework.crc2.translate(this.position.x, this.position.y);
                    Firework.crc2.scale(0.5, 0.5);
                    Firework.crc2.ellipse(0, 0, 3, 12, Math.PI / 7, 0, 2 * Math.PI);
                    Firework.crc2.ellipse(0, 0, 3, 12, Math.PI / -7, 0, 2 * Math.PI);
                    Firework.crc2.closePath();
                    Firework.crc2.fillStyle = this.color;
                    Firework.crc2.fill();
                    Firework.crc2.restore();
                    break;
            }
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map