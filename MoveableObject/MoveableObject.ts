// namespace Firework {
//     export class MoveableObject {
//         position: Vector;
//         velocity: Vector;


//         constructor(_position?: Vector) {

//             if (_position)
//                 this.position = _position.copy();
//             else
//                 this.position = new Vector(0, 0);

//             console.log("Particle constructor");

//             this.velocity = new Vector(0, 0);
            
//         }

//         move(_timeslice: number): void {
//             console.log("MoveableObject move");
//             let offset: Vector = this.velocity.copy(); // erstellt einen neuen Vektor der die genau die gleichen Werte hat wie der Velocity-Vektor
//             offset.scale(_timeslice); //scaliert den Vektor um den _timeslice (für Verschiebung in der Zeit)
//             this.position.add(offset); //die Verschiebung in der Zeit wird auf die Position addiert
            
//             if (this.position.x < 0)
//                 this.position.x += crc2.canvas.width; 

//             if (this.position.y < 0)
//                 this.position.y += crc2.canvas.height; 

//             if (this.position.x > crc2.canvas.width) 
//                 this.position.x -= crc2.canvas.width;

//             if (this.position.y > crc2.canvas.height) 
//                 this.position.y -= crc2.canvas.height;

//         }

//         draw(): void {
//             console.log("MoveableObject draw");
//             //
//         }


//     }















// }