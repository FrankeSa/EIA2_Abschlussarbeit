namespace Firework {
    export class Particle {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {

            console.log("Particle constructor");
            this.position = _position;
        }

        move(_timeslice: number): void {
            console.log("Particle move");

        }

        draw(_color: string): void {
            console.log("Particle draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.restore();
        }


    }








































}