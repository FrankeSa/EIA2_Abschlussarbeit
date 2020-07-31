"use strict";
var Zauberbild;
(function (Zauberbild) {
    function drawMickey() {
        let r1 = 25;
        let r2 = 15;
        let positionX = 75;
        let positionY = 70;
        let positionX2 = 100;
        let positionY2 = 47;
        let positionX3 = 50;
        let positionY3 = 47;
        Zauberbild.crc6.beginPath();
        Zauberbild.crc6.save();
        Zauberbild.crc6.translate(positionX, positionY);
        Zauberbild.crc6.fillStyle = "black";
        Zauberbild.crc6.arc(0, 0, r1, 0, 2 * Math.PI);
        Zauberbild.crc6.fill();
        Zauberbild.crc6.restore();
        Zauberbild.crc6.closePath();
        Zauberbild.crc6.beginPath();
        Zauberbild.crc6.save();
        Zauberbild.crc6.translate(positionX2, positionY2);
        Zauberbild.crc6.fillStyle = "black";
        Zauberbild.crc6.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crc6.fill();
        Zauberbild.crc6.restore();
        Zauberbild.crc6.closePath();
        Zauberbild.crc6.beginPath();
        Zauberbild.crc6.save();
        Zauberbild.crc6.translate(positionX3, positionY3);
        Zauberbild.crc6.fillStyle = "black";
        Zauberbild.crc6.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crc6.fill();
        Zauberbild.crc6.restore();
        Zauberbild.crc6.closePath();
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Mickey.js.map