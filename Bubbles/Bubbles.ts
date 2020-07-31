namespace Zauberbild {

   export function drawBubbles(): void {

        let positionX: number = 75;
        let positionY: number = 75;

        let radiusParticle: number = 30;
        let gradient: CanvasGradient = crcbubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
        crcbubbles.save();
        crcbubbles.beginPath();
        crcbubbles.translate(positionX, positionY);
        crcbubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crcbubbles.fillStyle = gradient;
        crcbubbles.fill();
        crcbubbles.stroke();
        crcbubbles.closePath();
        crcbubbles.restore();


    }











}