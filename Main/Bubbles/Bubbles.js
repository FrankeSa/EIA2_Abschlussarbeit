"use strict";
var Zauberbild;
(function (Zauberbild) {
    function drawBubbles() {
        let positionX = 75;
        let positionY = 75;
        let radiusParticle = 30;
        let gradient = Zauberbild.crc4.createRadialGradient(0, 0, 15, 2, 0, 60);
        Zauberbild.crc4.save();
        Zauberbild.crc4.beginPath();
        Zauberbild.crc4.translate(positionX, positionY);
        Zauberbild.crc4.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Zauberbild.crc4.fillStyle = gradient;
        Zauberbild.crc4.fill();
        Zauberbild.crc4.stroke();
        Zauberbild.crc4.closePath();
        Zauberbild.crc4.restore();
    }
    Zauberbild.drawBubbles = drawBubbles;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Bubbles.js.map