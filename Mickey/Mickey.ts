namespace Zauberbild {

    function drawMickey(): void {

        let r1: number = 25;
        let r2: number = 15;
        let positionX: number = 75;
        let positionY: number = 70;
        let positionX2: number = 100;
        let positionY2: number = 47;
        let positionX3: number = 50;
        let positionY3: number = 47;



        crcmickey.beginPath();
        crcmickey.save();
        crcmickey.translate(positionX, positionY);
        crcmickey.fillStyle = "black";
        crcmickey.arc(0, 0, r1, 0, 2 * Math.PI);
        crcmickey.fill();
        crcmickey.restore();
        crcmickey.closePath();

        crcmickey.beginPath();
        crcmickey.save();
        crcmickey.translate(positionX2, positionY2);
        crcmickey.fillStyle = "black";
        crcmickey.arc(0, 0, r2, 0, 2 * Math.PI);
        crcmickey.fill();
        crcmickey.restore();
        crcmickey.closePath();

        crcmickey.beginPath();
        crcmickey.save();
        crcmickey.translate(positionX3, positionY3);
        crcmickey.fillStyle = "black";
        crcmickey.arc(0, 0, r2, 0, 2 * Math.PI);
        crcmickey.fill();
        crcmickey.restore();
        crcmickey.closePath();
    }

}