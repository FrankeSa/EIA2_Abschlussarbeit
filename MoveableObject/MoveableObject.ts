namespace Firework {
    export class MoveableObject {
        position: Vector;
        velocity: Vector;
        expendable: boolean = false;


        constructor(_position?: Vector) {

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);

        }

        move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        draw(): void {
            //console.log("MoveableObject draw");
            //
        }


    }















}