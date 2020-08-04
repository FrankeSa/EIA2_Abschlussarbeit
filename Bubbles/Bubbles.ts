namespace Zauberbild {

    export class Bubbles extends Objects {

        public draw(): void {

            let positionX: number = 75;
            let positionY: number = 75;

            let radiusParticle: number = 30;
            let gradient: CanvasGradient = crcBubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
            crcBubbles.save();
            crcBubbles.beginPath();
            crcBubbles.translate(positionX, positionY);
            crcBubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crcBubbles.fillStyle = gradient;
            crcBubbles.fill();
            crcBubbles.stroke();
            crcBubbles.closePath();
            crcBubbles.restore();
        }

    }

    export function drawBubble(): void {

        let positionX: number = 75;
        let positionY: number = 75;

        let radiusParticle: number = 30;
        let gradient: CanvasGradient = crcBubbles.createRadialGradient(0, 0, 15, 2, 0, 60);
        crcBubbles.save();
        crcBubbles.beginPath();
        crcBubbles.translate(positionX, positionY);
        crcBubbles.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(225, 100%, 45%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crcBubbles.fillStyle = gradient;
        crcBubbles.fill();
        crcBubbles.stroke();
        crcBubbles.closePath();
        crcBubbles.restore();


    }
}