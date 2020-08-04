"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Smiley extends Zauberbild.Objects {
        // private interval: number;
        draw() {
            let r4 = 15;
            // Leuchtender Rand
            let r3 = 60;
            let positionX4 = 75;
            let positionY4 = 75;
            // Gesichtsform
            let r1 = 40;
            let positionX = 75;
            let positionY = 75;
            // Linkes Auge
            let r2 = 8;
            let positionX2 = 55;
            let positionY2 = 60;
            // Rechts Auge
            let positionX3 = 90;
            let positionY3 = 60;
            let gradient = Zauberbild.crcSmiley.createRadialGradient(0, 0, r3, 15, 0, r2);
            gradient.addColorStop(0, "HSL(60, 100%, 55%)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%,0");
            // Leuchtender Rand
            Zauberbild.crcSmiley.beginPath();
            Zauberbild.crcSmiley.save();
            Zauberbild.crcSmiley.translate(positionX4, positionY4);
            Zauberbild.crcSmiley.arc(0, 0, r3, 0, 2 * Math.PI);
            Zauberbild.crcSmiley.fillStyle = gradient;
            Zauberbild.crcSmiley.fill();
            Zauberbild.crcSmiley.restore();
            Zauberbild.crcSmiley.closePath();
            // Gesichtsform
            Zauberbild.crcSmiley.beginPath();
            Zauberbild.crcSmiley.save();
            Zauberbild.crcSmiley.translate(positionX, positionY);
            Zauberbild.crcSmiley.arc(0, 0, r1, 0, 2 * Math.PI);
            Zauberbild.crcSmiley.fillStyle = "yellow";
            Zauberbild.crcSmiley.fill();
            Zauberbild.crcSmiley.stroke();
            Zauberbild.crcSmiley.restore();
            Zauberbild.crcSmiley.closePath();
            // Linkes Auge
            Zauberbild.crcSmiley.beginPath();
            Zauberbild.crcSmiley.save();
            Zauberbild.crcSmiley.translate(positionX2, positionY2);
            Zauberbild.crcSmiley.fillStyle = "black";
            Zauberbild.crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
            Zauberbild.crcSmiley.fill();
            Zauberbild.crcSmiley.restore();
            Zauberbild.crcSmiley.closePath();
            // Rechts Auge
            Zauberbild.crcSmiley.beginPath();
            Zauberbild.crcSmiley.save();
            Zauberbild.crcSmiley.translate(positionX3, positionY3);
            Zauberbild.crcSmiley.fillStyle = "black";
            Zauberbild.crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
            Zauberbild.crcSmiley.fill();
            Zauberbild.crcSmiley.restore();
            Zauberbild.crcSmiley.closePath();
            //Mund
            Zauberbild.crcSmiley.beginPath();
            Zauberbild.crcSmiley.translate(positionX, positionY);
            Zauberbild.crcSmiley.arc(0, 0, r4, 0, 1.0 * Math.PI);
            Zauberbild.crcSmiley.stroke();
            Zauberbild.crcSmiley.closePath();
        }
    }
    Zauberbild.Smiley = Smiley;
    function drawSmiley() {
        let r4 = 15;
        // Leuchtender Rand
        let r3 = 60;
        let positionX4 = 75;
        let positionY4 = 75;
        // Gesichtsform
        let r1 = 40;
        let positionX = 75;
        let positionY = 75;
        // Linkes Auge
        let r2 = 8;
        let positionX2 = 55;
        let positionY2 = 60;
        // Rechts Auge
        let positionX3 = 90;
        let positionY3 = 60;
        let gradient = Zauberbild.crcSmiley.createRadialGradient(0, 0, r3, 15, 0, r2);
        gradient.addColorStop(0, "HSL(60, 100%, 55%)");
        gradient.addColorStop(1, "HSLA(60, 100%, 60%,0");
        // Leuchtender Rand
        Zauberbild.crcSmiley.beginPath();
        Zauberbild.crcSmiley.save();
        Zauberbild.crcSmiley.translate(positionX4, positionY4);
        Zauberbild.crcSmiley.arc(0, 0, r3, 0, 2 * Math.PI);
        Zauberbild.crcSmiley.fillStyle = gradient;
        Zauberbild.crcSmiley.fill();
        Zauberbild.crcSmiley.restore();
        Zauberbild.crcSmiley.closePath();
        // Gesichtsform
        Zauberbild.crcSmiley.beginPath();
        Zauberbild.crcSmiley.save();
        Zauberbild.crcSmiley.translate(positionX, positionY);
        Zauberbild.crcSmiley.arc(0, 0, r1, 0, 2 * Math.PI);
        Zauberbild.crcSmiley.fillStyle = "yellow";
        Zauberbild.crcSmiley.fill();
        Zauberbild.crcSmiley.stroke();
        Zauberbild.crcSmiley.restore();
        Zauberbild.crcSmiley.closePath();
        // Linkes Auge
        Zauberbild.crcSmiley.beginPath();
        Zauberbild.crcSmiley.save();
        Zauberbild.crcSmiley.translate(positionX2, positionY2);
        Zauberbild.crcSmiley.fillStyle = "black";
        Zauberbild.crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcSmiley.fill();
        Zauberbild.crcSmiley.restore();
        Zauberbild.crcSmiley.closePath();
        // Rechts Auge
        Zauberbild.crcSmiley.beginPath();
        Zauberbild.crcSmiley.save();
        Zauberbild.crcSmiley.translate(positionX3, positionY3);
        Zauberbild.crcSmiley.fillStyle = "black";
        Zauberbild.crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
        Zauberbild.crcSmiley.fill();
        Zauberbild.crcSmiley.restore();
        Zauberbild.crcSmiley.closePath();
        //Mund
        Zauberbild.crcSmiley.beginPath();
        Zauberbild.crcSmiley.translate(positionX, positionY);
        Zauberbild.crcSmiley.arc(0, 0, r4, 0, 1.0 * Math.PI);
        Zauberbild.crcSmiley.stroke();
        Zauberbild.crcSmiley.closePath();
    }
    Zauberbild.drawSmiley = drawSmiley;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Smiley.js.map