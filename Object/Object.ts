namespace Zauberbild {

    export class Objects {



        public position: Vector;
        public velocity: Vector;
        public draggable: boolean;


        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);

        }


        public draw(): void {


            // console.log ("Objects draw");
        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice); // verschiebung in der Zeit
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














}