namespace Firework {
  window.addEventListener("load", handleLoad);
  let serverPage: string = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
  let form: HTMLFormElement;
  let quantity: number;
  let color: string;
  let lifetime: number;
  let type: string;
  let moveables: MoveableObject[] = [];
  export let crc2: CanvasRenderingContext2D;


  async function handleLoad(_event: Event): Promise<void> {
    console.log("HalloWelt");

    let response: Response = await fetch(serverPage + "?" + "command=getTitels");
    let listOfTitels: string = await response.text();
    let titelList: Rocket[] = JSON.parse(listOfTitels);


    generateContent(titelList);


    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveBtn");
    //let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
    let inputQuantity: HTMLButtonElement = <HTMLButtonElement>document.querySelector("input#quantity");
    form = <HTMLFormElement>document.querySelector("form#controlPanel");

    canvas.addEventListener("mouseup", createObject);
    canvas.addEventListener("mousedown", sarah);
    saveBtn.addEventListener("click", sendDataToServer);
    //loadBtn.addEventListener("click", getDataFromServer);
    inputQuantity.addEventListener("change", startMeter);
    window.setInterval(update, 20);
  }




  function createObject(_event: MouseEvent): void {


    let mousePositionX: number = _event.clientX; //- crc2.canvas.offsetLeft;
    let mousepositionY: number = _event.clientY; //- crc2.canvas.offsetTop;
    let formData: FormData = new FormData(document.forms[0]);


    for (let entry of formData) {

      quantity = Number(formData.get("quantity"));
      lifetime = Number(formData.get("explosionSize"));
      color = String(formData.get("particlecolor"));
      switch (entry[1]) {
        case "dot":
          type = "dot";
          break;
        case "confetti":
          type = "confetti";
          break;
        case "star":
          type = "star";
        case "popcorn":
          type = "popcorn";
          break;
      }
    }
    createParticle(quantity, mousePositionX, mousepositionY, color, lifetime, type);
  console.log(type);
  }

  export async function getDataFromServer(_event: Event): Promise<void> {
    console.log("Datein wurden geladen");
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let userValue: string;
    userValue = target.value;
    let response: Response = await fetch(serverPage + "?" + "command=getAllDatas");
    let responseContent: string = await response.text();
    let allDatas: Rocket[] = JSON.parse(responseContent);
    let result: Rocket | undefined = allDatas.find(item => item.rocketTitel === userValue);
    console.log(result);
    createUserRocket(result);

  }

  function createUserRocket(_result: Rocket | undefined): void {

    let color: string | undefined = _result?.particlecolor;
    let lifetime: number | undefined = _result?.explosionSize;
    let type: string | undefined = _result?.particleshape;
    console.log(color, lifetime, type);
    // erzeugt neuer Particle mit diesen Werten und pusht ihn in moveable Array
    // eine Funktion die z.B. auf MouseUp hört, erzeugt eine Explosion mit diesen Werten

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

    let origin: Vector = new Vector(_mousePositionX, _mousePositionY);
    let color: string = _color;

    for (let i: number = 0; i < _quantity; i++) {
      let radian: number = (Math.PI * 2) / _quantity;
      let px: number = Math.cos(radian * i) * 110 * Math.random() * 2; //(2)power
      let py: number = Math.sin(radian * i) * 110 * Math.random() * 2; //(2)power
      let velocity: Vector = new Vector(px, py);
      let particle: MoveableObject = new Particle(origin, velocity, color, lifetime, type);
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








  function startMeter(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
    meter.value = parseFloat(target.value);

  }

  function sarah(_event: MouseEvent): void {
    let mouseklick: number = _event.button;
    if (mouseklick === 1)
      console.log("HalloSarah", _event.button);

  }






























































}