namespace Firework {
  window.addEventListener("load", handleLoad);
  let serverPage: string = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
  let form: HTMLFormElement;
  let quantity: number;
  let color: string;
  let lifetime: number;
  let shape: string;
  let moveables: MoveableObject[] = [];
  let result: Rocket;
  export let crc2: CanvasRenderingContext2D;



  async function handleLoad(_event: Event): Promise<void> {
    console.log("HalloWelt");
    alert("Hello User! on the right side you can create your rocket charge.To start the explosion click with left mousebutton on the black field beside. To start the explosion for your loaded rockets, load your rocket first and then press additionally the shift key on your keyboard. HAVE FUN!");

    let response: Response = await fetch(serverPage + "?" + "command=getTitels");
    let listOfTitels: string = await response.text();
    let titelList: Rocket[] = JSON.parse(listOfTitels);
    
    generateContent(titelList);

    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveBtn");
    let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
    let inputQuantity: HTMLButtonElement = <HTMLButtonElement>document.querySelector("input#quantity");
    form = <HTMLFormElement>document.querySelector("form#controlPanel");
    canvas.addEventListener("click", createObject);
    saveBtn.addEventListener("click", sendDataToServer);
    loadBtn.addEventListener("click", notifyUser);
    inputQuantity.addEventListener("change", startMeter);
    window.setInterval(update, 20);
  }




  function createObject(_event: MouseEvent): void {

    let mousePositionX: number = _event.clientX; 
    let mousePositionY: number = _event.clientY; 
    let formData: FormData = new FormData(document.forms[0]);

    for (let entry of formData) {

      quantity = Number(formData.get("quantity"));
      lifetime = Number(formData.get("explosionSize"));
      color = String(formData.get("particlecolor"));
      switch (entry[1]) {
        case "dot":
          shape = "dot";
          break;
        case "confetti":
          shape = "confetti";
          break;
        case "star":
          shape = "star";
          break;
        case "popcorn":
          shape = "popcorn";
          break;
      }
    }

    createParticle(quantity, mousePositionX, mousePositionY, color, lifetime, shape);
    soundEffect();
    createUserRocket(result, _event);
  }

  function createUserRocket(_result: Rocket, _event: MouseEvent): void {
    // let middle: number = 1;
    if (_event.shiftKey == true) {

      let mousePosX: number = _event.clientX;
      let mousePosY: number = _event.clientY;
      let color: string = _result.particlecolor;
      let lifetime: number = _result.explosionSize;
      let shape: string = _result.particleshape;
      let quantity: number = _result.quantity;
      createParticle(quantity, mousePosX, mousePosY, color, lifetime, shape);
      console.log("Das ist deine Rakete=>", "Particleshape=", shape, "Particlecolor=", color, "ExplosionSize=", lifetime, "Particlequantity=", quantity);
    }
  }

  export async function getDataFromServer(_event: Event): Promise<void> {
    console.log("Datein wurden geladen");
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let userValue: string;
    userValue = target.value;
    let response: Response = await fetch(serverPage + "?" + "command=getAllDatas");
    let responseContent: string = await response.text();
    let allDatas: Rocket[] = JSON.parse(responseContent);
    result = <Rocket>allDatas.find(item => item.rocketTitel === userValue);
    //createUserRocket(result);
  }


  async function sendDataToServer(_event: Event): Promise<void> {
    let controlPanelData: FormData = new FormData(form);
    let textArea: HTMLInputElement = <HTMLInputElement>document.querySelector("input#textarea");
    let rocketTitel: string;
    rocketTitel = textArea.value;
    let query: URLSearchParams = new URLSearchParams(<any>controlPanelData);
    query.append("rocketTitel", rocketTitel);
    let response: Response = await fetch(serverPage + "?" + query.toString());
    let responseText: string = await response.text();
    alert("Deine Daten wurden gespeichert");
    console.log("Daten geschickt: ", responseText);
    textArea.value = "";

  }


  function createParticle(_quantity: number, _mousePositionX: number, _mousePositionY: number, _color: string, _lifetime: number, _type: string): void {
    console.log(_quantity, _mousePositionY, _mousePositionX, _color, _lifetime, _type);
    let origin: Vector = new Vector(_mousePositionX, _mousePositionY);
    let color: string = _color;

    for (let i: number = 0; i < _quantity; i++) {
      let radian: number = (Math.PI * 2) / _quantity; // radian = Winkel für ein Partikel
      let px: number = Math.cos(radian * i) * 110 * Math.random() * 2; //(2)power
      let py: number = Math.sin(radian * i) * 110 * Math.random() * 2; //(2)power
      let velocity: Vector = new Vector(px, py);
      let particle: MoveableObject = new Particle(origin, velocity, color, lifetime, shape);
      moveables.push(particle);
    }
  }



  function update(): void {

    crc2.fillStyle = "rgba(0,0,0,0.2)";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let moveable of moveables) {
      moveable.move(1 / 50);
      moveable.draw();
    }
    deleteExpandables();
  }


  function deleteExpandables(): void {
    for (let index: number = moveables.length - 1; index >= 0; index--) {
      if (moveables[index].expendable) //im Array an stelle des gerade befindenden Index
        moveables.splice(index, 1);
    }
  }

  function soundEffect(): void {
    let tone: string = "explosionsound.wav";
    let sound: HTMLAudioElement = new Audio("assets/" + tone);
    sound.play();
  }

  function startMeter(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
    meter.value = parseFloat(target.value);
  }

  function notifyUser(_event: Event): void {
    alert("If you load this rocket, your current selection will be lost");
    form.reset();
  }

}//namespaceFirework Ende