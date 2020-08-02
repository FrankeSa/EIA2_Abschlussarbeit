namespace Zauberbild {


 export function drawSmiley(): void {

        let r4: number = 15;
        // Leuchtender Rand
        let r3: number = 60;
        let positionX4: number = 75;
        let positionY4: number = 75;
        // Gesichtsform
        let r1: number = 40;
        let positionX: number = 75;
        let positionY: number = 75;
        // Linkes Auge
        let r2: number = 8;
        let positionX2: number = 55;
        let positionY2: number = 60;
        // Rechts Auge
        let positionX3: number = 90;
        let positionY3: number = 60;
        let gradient: CanvasGradient = crcSmiley.createRadialGradient(0, 0, r3, 15, 0, r2);

        gradient.addColorStop(0, "HSL(60, 100%, 55%)");
        gradient.addColorStop(1, "HSLA(60, 100%, 60%,0");

        // Leuchtender Rand
        crcSmiley.beginPath();
        crcSmiley.save();
        crcSmiley.translate(positionX4, positionY4);
        crcSmiley.arc(0, 0, r3, 0, 2 * Math.PI);
        crcSmiley.fillStyle = gradient;
        crcSmiley.fill();
        crcSmiley.restore();
        crcSmiley.closePath();
        // Gesichtsform
        crcSmiley.beginPath();
        crcSmiley.save();
        crcSmiley.translate(positionX, positionY);
        crcSmiley.arc(0, 0, r1, 0, 2 * Math.PI);
        crcSmiley.fillStyle = "yellow";
        crcSmiley.fill();
        crcSmiley.stroke();
        crcSmiley.restore();
        crcSmiley.closePath();
        // Linkes Auge
        crcSmiley.beginPath();
        crcSmiley.save();
        crcSmiley.translate(positionX2, positionY2);
        crcSmiley.fillStyle = "black";
        crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
        crcSmiley.fill();
        crcSmiley.restore();
        crcSmiley.closePath();
        // Rechts Auge
        crcSmiley.beginPath();
        crcSmiley.save();
        crcSmiley.translate(positionX3, positionY3);
        crcSmiley.fillStyle = "black";
        crcSmiley.arc(0, 0, r2, 0, 2 * Math.PI);
        crcSmiley.fill();
        crcSmiley.restore();
        crcSmiley.closePath();
        //Mund
        crcSmiley.beginPath();
        crcSmiley.translate(positionX, positionY);
        crcSmiley.arc(0, 0, r4, 0, 1.0 * Math.PI);
        crcSmiley.stroke();
        crcSmiley.closePath();


    }









}