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



        crc6.beginPath();
        crc6.save();
        crc6.translate(positionX, positionY);
        crc6.fillStyle = "black";
        crc6.arc(0, 0, r1, 0, 2 * Math.PI);
        crc6.fill();
        crc6.restore();
        crc6.closePath();

        crc6.beginPath();
        crc6.save();
        crc6.translate(positionX2, positionY2);
        crc6.fillStyle = "black";
        crc6.arc(0, 0, r2, 0, 2 * Math.PI);
        crc6.fill();
        crc6.restore();
        crc6.closePath();

        crc6.beginPath();
        crc6.save();
        crc6.translate(positionX3, positionY3);
        crc6.fillStyle = "black";
        crc6.arc(0, 0, r2, 0, 2 * Math.PI);
        crc6.fill();
        crc6.restore();
        crc6.closePath();







}