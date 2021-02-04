namespace Firework {
  window.addEventListener("load", handleLoad);
  let serverPage: string = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
  export let crc2: CanvasRenderingContext2D;
  let form: HTMLFormElement;
  let quantity: number;
  let color: string;
  // let lifetime: number;

  // export interface Rocket {
  //   rocketTitel: string | string[] | undefined;
  // }


  async function handleLoad(_event: Event): Promise<void> {
    console.log("HalloWelt");

    let response: Response = await fetch(serverPage + "?" + "command=getTitels");
    let listOfTitels: string = await response.text();
    let titelList: Titel[] = JSON.parse(listOfTitels);


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
    loadBtn.addEventListener("click", getDataFromServer);
    inputQuantity.addEventListener("change", startMeter);
  }




  function createObject(_event: MouseEvent): void {
    let mousePositionX: number = _event.offsetX;
    let mousepositionY: number = _event.offsetY;
    console.log("x: ", mousePositionX, "y: ", mousepositionY);
    let formData: FormData = new FormData(document.forms[0]);


    for (let entry of formData) {

      switch (entry[0]) {
        case "Quantity":
          quantity = Number(formData.get("Quantity"));
          // console.log("Quantity= ", quantity);
          break;
        case "ExplosionSize":
          //  console.log("ExplosionSize= ", entry[1]);
          // lifetime = Number(formData.get("ExplosionSize"));
          break;
        case "Particlecolor":
          // console.log("Particlecolor= ", entry[1]);
          color = String(formData.get("Particlecolor"));
          // console.log("Particlecolor= ", color);
          break;
        case "Shape":
          switch (entry[1]) {
            case "dots":
              // startFunctionCreateDots(quantity, mousePositionX, mousepositionY, color);
              break;
            case "confetti":
              //console.log("startFunctionCreateConfetti");
              break;
            case "heart":
              // console.log("startFunctionCreateHeart");
              break;
          }
        default:
      }

    }
    // console.log("createParticle", quantity, color);
    startFunctionCreateDots(quantity, mousePositionX, mousepositionY, color);
  }


  export async function getDataFromServer(_event: Event): Promise<void> {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let userValue: string;
    userValue = target.value;

    console.log("Datein wurden geladen");
    let param: URLSearchParams = new URLSearchParams(<any>userValue);
    param.append("select", userValue);
    console.log(param.get("select"));
    // query.append("userTitel", userValue);
    let response: Response = await fetch(serverPage + "?" + "command=retrieveAll");
    let responseContant: string = await response.text();
    console.log(responseContant);
    alert(responseContant);

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


  function startFunctionCreateDots(_quantity: number, _mousePositionX: number, _mousePositionY: number, _color: string): void {
    let pointer: Vector = new Vector(_mousePositionX, _mousePositionY);
    for (let i: number = 0; i < _quantity; i++) {
      console.log("startFunctionCreateDots");
      // crc2.arc(_mousePositionX, _mousePositionY, 10, 0, 2 * Math.PI);
      // crc2.fillStyle = _color;
      // crc2.fill();
    }
    let particle: Particle = new Particle(pointer);
    particle.draw(_color);
  }



  function startMeter(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
    meter.value = parseFloat(target.value);

  }

















































}