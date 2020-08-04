"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Objects {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zauberbild.Vector(0, 0);
            this.velocity = new Zauberbild.Vector(0, 0);
        }
        draw() {
            // console.log ("Objects draw");
        }
        move(_timeslice) {
            let offset = new Zauberbild.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Zauberbild.mainCanvas.canvas.width;
            if (this.position.y < 0)
                this.position.y += Zauberbild.mainCanvas.canvas.height;
            if (this.position.x > Zauberbild.mainCanvas.canvas.width)
                this.position.x -= Zauberbild.mainCanvas.canvas.width;
            if (this.position.y > Zauberbild.mainCanvas.canvas.height)
                this.position.y -= Zauberbild.mainCanvas.canvas.height;
        }
    }
    Zauberbild.Objects = Objects;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Objects.js.map