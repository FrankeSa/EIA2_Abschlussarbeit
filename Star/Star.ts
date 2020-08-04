namespace Zauberbild {

    export class Start extends Objects {

        public draw(): void {

            crcStern.beginPath();
            crcStern.moveTo(75, 30);
            crcStern.lineTo(90, 60);
            crcStern.lineTo(125, 75);
            crcStern.lineTo(95, 85);
            crcStern.lineTo(105, 130);
            crcStern.lineTo(75, 110);
            crcStern.lineTo(45, 130);
            crcStern.lineTo(55, 85);
            crcStern.lineTo(55, 85);
            crcStern.lineTo(20, 70);
            crcStern.lineTo(55, 60);
            crcStern.fillStyle = "orange";
            crcStern.fill();
            crcStern.closePath();
            crcStern.strokeStyle = "orange";
            crcStern.stroke();

        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(150, this.velocity.x);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += mainCanvas.canvas.width;
            if (this.position.y < 0)
                this.position.y += mainCanvas.canvas.height;
            if (this.position.x > mainCanvas.canvas.width)
                this.position.x -= mainCanvas.canvas.width;

            if (this.position.y > mainCanvas.canvas.height)
                this.position.y -= mainCanvas.canvas.height;

        }
    }

    export function drawStar(): void {

        crcStern.beginPath();
        crcStern.moveTo(75, 30);
        crcStern.lineTo(90, 60);
        crcStern.lineTo(125, 75);
        crcStern.lineTo(95, 85);
        crcStern.lineTo(105, 130);
        crcStern.lineTo(75, 110);
        crcStern.lineTo(45, 130);
        crcStern.lineTo(55, 85);
        crcStern.lineTo(55, 85);
        crcStern.lineTo(20, 70);
        crcStern.lineTo(55, 60);
        crcStern.fillStyle = "orange";
        crcStern.fill();
        crcStern.closePath();
        crcStern.strokeStyle = "orange";
        crcStern.stroke();
    }
}