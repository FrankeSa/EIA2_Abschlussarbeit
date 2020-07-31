"use strict";
var Zauberbild;
(function (Zauberbild) {
    function drawStar() {
        Zauberbild.crcstern.beginPath();
        Zauberbild.crcstern.moveTo(75, 30);
        Zauberbild.crcstern.lineTo(90, 60);
        Zauberbild.crcstern.lineTo(125, 75);
        Zauberbild.crcstern.lineTo(95, 85);
        Zauberbild.crcstern.lineTo(105, 130);
        Zauberbild.crcstern.lineTo(75, 110);
        Zauberbild.crcstern.lineTo(45, 130);
        Zauberbild.crcstern.lineTo(55, 85);
        Zauberbild.crcstern.lineTo(55, 85);
        Zauberbild.crcstern.lineTo(20, 70);
        Zauberbild.crcstern.lineTo(55, 60);
        Zauberbild.crcstern.fillStyle = "orange";
        Zauberbild.crcstern.fill();
        Zauberbild.crcstern.closePath();
        Zauberbild.crcstern.strokeStyle = "orange";
        Zauberbild.crcstern.stroke();
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map