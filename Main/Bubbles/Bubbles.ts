namespace Zauberbild{

   export function drawBubbles(): void {

        let positionX: number = 75;
        let positionY: number = 75;

        let radiusParticle: number = 30;
        let gradient: CanvasGradient = crc4.createRadialGradient(0, 0, 15, 2, 0, 60);
        crc4.save();
        crc4.beginPath();
        crc4.translate(positionX, positionY);
        crc4.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc4.fillStyle = gradient;
        crc4.fill();
        crc4.stroke();
        crc4.closePath();
        crc4.restore();


    }











}