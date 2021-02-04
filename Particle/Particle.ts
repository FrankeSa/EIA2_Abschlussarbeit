namespace Firework {
    export class Particle {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {

            console.log("Particle constructor");
        }

        move(_timeslice: number): void {
            console.log("Particle move");

        }

        draw(): void {
            console.log("Particle draw");
        }


    }








































}