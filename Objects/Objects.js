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
    }
    Zaberbild.Objects = Objects;
})(Zaberbild || (Zaberbild = {}));
//# sourceMappingURL=Objects.js.map