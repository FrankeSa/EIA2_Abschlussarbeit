"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Start extends Zauberbild.Objects {
        draw() {
            Zauberbild.crcStern.beginPath();
            Zauberbild.crcStern.moveTo(75, 30);
            Zauberbild.crcStern.lineTo(90, 60);
            Zauberbild.crcStern.lineTo(125, 75);
            Zauberbild.crcStern.lineTo(95, 85);
            Zauberbild.crcStern.lineTo(105, 130);
            Zauberbild.crcStern.lineTo(75, 110);
            Zauberbild.crcStern.lineTo(45, 130);
            Zauberbild.crcStern.lineTo(55, 85);
            Zauberbild.crcStern.lineTo(55, 85);
            Zauberbild.crcStern.lineTo(20, 70);
            Zauberbild.crcStern.lineTo(55, 60);
            Zauberbild.crcStern.fillStyle = "orange";
            Zauberbild.crcStern.fill();
            Zauberbild.crcStern.closePath();
            Zauberbild.crcStern.strokeStyle = "orange";
            Zauberbild.crcStern.stroke();
        }
        move(_timeslice) {
            let offset = new Zauberbild.Vector(150, this.velocity.x);
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
    Zauberbild.Start = Start;
    function drawStar() {
        Zauberbild.crcStern.beginPath();
        Zauberbild.crcStern.moveTo(75, 30);
        Zauberbild.crcStern.lineTo(90, 60);
        Zauberbild.crcStern.lineTo(125, 75);
        Zauberbild.crcStern.lineTo(95, 85);
        Zauberbild.crcStern.lineTo(105, 130);
        Zauberbild.crcStern.lineTo(75, 110);
        Zauberbild.crcStern.lineTo(45, 130);
        Zauberbild.crcStern.lineTo(55, 85);
        Zauberbild.crcStern.lineTo(55, 85);
        Zauberbild.crcStern.lineTo(20, 70);
        Zauberbild.crcStern.lineTo(55, 60);
        Zauberbild.crcStern.fillStyle = "orange";
        Zauberbild.crcStern.fill();
        Zauberbild.crcStern.closePath();
        Zauberbild.crcStern.strokeStyle = "orange";
        Zauberbild.crcStern.stroke();
    }
    Zauberbild.drawStar = drawStar;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map