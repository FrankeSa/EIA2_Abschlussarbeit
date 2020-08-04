"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Mickey extends Zauberbild.Objects {
        // private rotation: number;
        draw() {
            let r1 = 25;
            let r2 = 15;
            let positionX = 75;
            let positionY = 70;
            let positionX2 = 100;
            let positionY2 = 47;
            let positionX3 = 50;
            let positionY3 = 47;
            Zauberbild.crcMickey.beginPath();
            Zauberbild.crcMickey.save();
            Zauberbild.crcMickey.translate(positionX, positionY);
            Zauberbild.crcMickey.fillStyle = "black";
            Zauberbild.crcMickey.arc(0, 0, r1, 0, 2 * Math.PI);
            Zauberbild.crcMickey.fill();
            Zauberbild.crcMickey.restore();
            Zauberbild.crcMickey.closePath();
            Zauberbild.crcMickey.beginPath();
            Zauberbild.crcMickey.save();
            Zauberbild.crcMickey.translate(positionX2, positionY2);
            Zauberbild.crcMickey.fillStyle = "black";
            Zauberbild.crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
            Zauberbild.crcMickey.fill();
            Zauberbild.crcMickey.restore();
            Zauberbild.crcMickey.closePath();
            Zauberbild.crcMickey.beginPath();
            Zauberbild.crcMickey.save();
            Zauberbild.crcMickey.translate(positionX3, positionY3);
            Zauberbild.crcMickey.fillStyle = "black";
            Zauberbild.crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
            Zauberbild.crcMickey.fill();
            Zauberbild.crcMickey.restore();
            Zauberbild.crcMickey.closePath();
        }
    }
    Zauberbild.Mickey = Mickey;
    function drawMicky() {
        let r1 = 25;
        let r2 = 15;
        let positionX = 75;
        let positionY = 70;
        let positionX2 = 100;
        let positionY2 = 47;
        let positionX3 = 50;
        let positionY3 = 47;
        Zauberbild.crcMickey.beginPath();
        Zauberbild.crcMickey.save();
        Zauberbild.crcMickey.translate(positionX, positionY);
        Zauberbild.crcMickey.fillStyle = "black";
        Zauberbild.crcMickey.arc(0, 0, r1, 0, 2 * Math.PI);
        Zauberbild.crcMickey.fill();
        Zauberbild.crcMickey.restore();
        Zauberbild.crcMickey.closePath();
        Zauberbild.crcMickey.beginPath();
        Zauberbild.crcMickey.save();
        Zauberbild.crcMickey.translate(positionX2, positionY2);
        Zauberbild.crcMickey.fillStyle = "black";
        Zauberbild.crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcMickey.fill();
        Zauberbild.crcMickey.restore();
        Zauberbild.crcMickey.closePath();
        Zauberbild.crcMickey.beginPath();
        Zauberbild.crcMickey.save();
        Zauberbild.crcMickey.translate(positionX3, positionY3);
        Zauberbild.crcMickey.fillStyle = "black";
        Zauberbild.crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcMickey.fill();
        Zauberbild.crcMickey.restore();
        Zauberbild.crcMickey.closePath();
    }
    Zauberbild.drawMicky = drawMicky;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Mickey.js.map