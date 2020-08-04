namespace Zauberbild {

    export class Mickey extends Objects {

        // private rotation: number;

        public draw(): void {

            let r1: number = 25;
            let r2: number = 15;
            let positionX: number = 75;
            let positionY: number = 70;
            let positionX2: number = 100;
            let positionY2: number = 47;
            let positionX3: number = 50;
            let positionY3: number = 47;



            crcMickey.beginPath();
            crcMickey.save();
            crcMickey.translate(positionX, positionY);
            crcMickey.fillStyle = "black";
            crcMickey.arc(0, 0, r1, 0, 2 * Math.PI);
            crcMickey.fill();
            crcMickey.restore();
            crcMickey.closePath();

            crcMickey.beginPath();
            crcMickey.save();
            crcMickey.translate(positionX2, positionY2);
            crcMickey.fillStyle = "black";
            crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
            crcMickey.fill();
            crcMickey.restore();
            crcMickey.closePath();

            crcMickey.beginPath();
            crcMickey.save();
            crcMickey.translate(positionX3, positionY3);
            crcMickey.fillStyle = "black";
            crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
            crcMickey.fill();
            crcMickey.restore();
            crcMickey.closePath();
        }
    }

    export function drawMicky(): void {

        let r1: number = 25;
        let r2: number = 15;
        let positionX: number = 75;
        let positionY: number = 70;
        let positionX2: number = 100;
        let positionY2: number = 47;
        let positionX3: number = 50;
        let positionY3: number = 47;



        crcMickey.beginPath();
        crcMickey.save();
        crcMickey.translate(positionX, positionY);
        crcMickey.fillStyle = "black";
        crcMickey.arc(0, 0, r1, 0, 2 * Math.PI);
        crcMickey.fill();
        crcMickey.restore();
        crcMickey.closePath();

        crcMickey.beginPath();
        crcMickey.save();
        crcMickey.translate(positionX2, positionY2);
        crcMickey.fillStyle = "black";
        crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
        crcMickey.fill();
        crcMickey.restore();
        crcMickey.closePath();

        crcMickey.beginPath();
        crcMickey.save();
        crcMickey.translate(positionX3, positionY3);
        crcMickey.fillStyle = "black";
        crcMickey.arc(0, 0, r2, 0, 2 * Math.PI);
        crcMickey.fill();
        crcMickey.restore();
        crcMickey.closePath();
    }



}