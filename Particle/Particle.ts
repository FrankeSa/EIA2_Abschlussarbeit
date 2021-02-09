namespace Firework {
    export class Particle extends MoveableObject {
        position: Vector;
        velocity: Vector;
        color: string;
        lifetime: number;
        gravity: number = 1;

        constructor(_position: Vector, _velocity: Vector, _color: string, _lifetime: number) {


            super(_position);
            // console.log("constructor particle");
            //this.position = _position.copy();
            // this.position = new Vector(_position.x, _position.y);
            this.color = _color;
            this.velocity = _velocity.copy();
            this.velocity = new Vector(_velocity.x, _velocity.y);
            this.lifetime = _lifetime;

        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            this.velocity.y += this.gravity;
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;

            // let offset: Vector = this.velocity.copy();
            // offset.scale(_timeslice);
            // this.position.add(offset);


            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;






        }


        draw(): void {
            //console.log("Particle draw");
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }


    }








































}