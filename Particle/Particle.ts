namespace Firework {
    export class Particle {
        position: Vector;
        velocity: Vector;
        color: string;
        lifetime: number;


        constructor(_position: Vector, _velocity: Vector, _color: string, _lifetime: number) {



            // console.log("constructor particle");
            this.position = _position;
            this.position = new Vector(_position.x, _position.y);
            this.color = _color;
            this.velocity = _velocity;
            this.velocity = new Vector(_velocity.x, _velocity.y);



            this.lifetime = _lifetime;

        }

        move(_timeslice: number): void {
            //console.log("Move");
          
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);


            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;


            // this.position.test();

            // if (this.position.x < 0)
            //     this.position.x += crc2.canvas.width;

            // if (this.position.y < 0)
            //     this.position.y += crc2.canvas.height;

            // if (this.position.x > crc2.canvas.width)
            //     this.position.x -= crc2.canvas.width;

            // if (this.position.y > crc2.canvas.height)
            //     this.position.y -= crc2.canvas.height;
            // super.move(_timeslice);
            // this.lifetime -= _timeslice;
            // if (this.lifetime < 0)
            //     this.velocity = new Vector(0, 0);




        }


        draw(): void {
            //console.log("Particle draw");
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }


    }








































}