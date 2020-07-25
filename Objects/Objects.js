"use strict";
var Zaberbild;
(function (Zaberbild) {
    class Objects {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zaberbild.Vector(0, 0);
            this.velocity = new Zaberbild.Vector(0, 0);
        }
        draw() {
            // console.log ("Moveable draw");
        }
        move(_timeslice) {
            let offset = new Zaberbild.Vector(this.velocity.y, 0); //partikel von links nach rechts
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
    Zaberbild.Objects = Objects;
})(Zaberbild || (Zaberbild = {}));
//# sourceMappingURL=Objects.js.map