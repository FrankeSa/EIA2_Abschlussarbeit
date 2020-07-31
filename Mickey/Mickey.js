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
        Zauberbild.crcmickey.beginPath();
        Zauberbild.crcmickey.save();
        Zauberbild.crcmickey.translate(positionX, positionY);
        Zauberbild.crcmickey.fillStyle = "black";
        Zauberbild.crcmickey.arc(0, 0, r1, 0, 2 * Math.PI);
        Zauberbild.crcmickey.fill();
        Zauberbild.crcmickey.restore();
        Zauberbild.crcmickey.closePath();
        Zauberbild.crcmickey.beginPath();
        Zauberbild.crcmickey.save();
        Zauberbild.crcmickey.translate(positionX2, positionY2);
        Zauberbild.crcmickey.fillStyle = "black";
        Zauberbild.crcmickey.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcmickey.fill();
        Zauberbild.crcmickey.restore();
        Zauberbild.crcmickey.closePath();
        Zauberbild.crcmickey.beginPath();
        Zauberbild.crcmickey.save();
        Zauberbild.crcmickey.translate(positionX3, positionY3);
        Zauberbild.crcmickey.fillStyle = "black";
        Zauberbild.crcmickey.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcmickey.fill();
        Zauberbild.crcmickey.restore();
        Zauberbild.crcmickey.closePath();
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Mickey.js.map