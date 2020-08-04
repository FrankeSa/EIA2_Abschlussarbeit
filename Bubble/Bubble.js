"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Bubbles extends Zauberbild.Objects {
        draw() {
            let positionX = 75;
            let positionY = 75;
            let radiusParticle = 30;
            let gradient = Zauberbild.crcBubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
            Zauberbild.crcBubbles.save();
            Zauberbild.crcBubbles.beginPath();
            Zauberbild.crcBubbles.translate(positionX, positionY);
            Zauberbild.crcBubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Zauberbild.crcBubbles.fillStyle = gradient;
            Zauberbild.crcBubbles.fill();
            Zauberbild.crcBubbles.stroke();
            Zauberbild.crcBubbles.closePath();
            Zauberbild.crcBubbles.restore();
        }
    }
    Zauberbild.Bubbles = Bubbles;
    function drawBubble() {
        let positionX = 75;
        let positionY = 75;
        let radiusParticle = 30;
        let gradient = Zauberbild.crcBubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
        Zauberbild.crcBubbles.save();
        Zauberbild.crcBubbles.beginPath();
        Zauberbild.crcBubbles.translate(positionX, positionY);
        Zauberbild.crcBubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Zauberbild.crcBubbles.fillStyle = gradient;
        Zauberbild.crcBubbles.fill();
        Zauberbild.crcBubbles.stroke();
        Zauberbild.crcBubbles.closePath();
        Zauberbild.crcBubbles.restore();
    }
    Zauberbild.drawBubble = drawBubble;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Bubble.js.map