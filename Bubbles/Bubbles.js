"use strict";
var Zauberbild;
(function (Zauberbild) {
    function drawBubbles() {
        let positionX = 75;
        let positionY = 75;
        let radiusParticle = 30;
        let gradient = Zauberbild.crcbubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
        Zauberbild.crcbubbles.save();
        Zauberbild.crcbubbles.beginPath();
        Zauberbild.crcbubbles.translate(positionX, positionY);
        Zauberbild.crcbubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Zauberbild.crcbubbles.fillStyle = gradient;
        Zauberbild.crcbubbles.fill();
        Zauberbild.crcbubbles.stroke();
        Zauberbild.crcbubbles.closePath();
        Zauberbild.crcbubbles.restore();
    }
    Zauberbild.drawBubbles = drawBubbles;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Bubbles.js.map