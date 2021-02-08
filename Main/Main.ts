namespace Firework {
  window.addEventListener("load", handleLoad);
  let serverPage: string = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
  export let crc2: CanvasRenderingContext2D;
  let form: HTMLFormElement;
  let quantity: number;
  let color: string;
  let lifetime: number;
  let particlesarray: Particle[] = [];


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

    canvas.addEventListener("click", createObject);
    saveBtn.addEventListener("click", sendDataToServer);
    //loadBtn.addEventListener("click", getDataFromServer);
    inputQuantity.addEventListener("change", startMeter);
    window.setInterval(update, 20);
  }




  function createObject(_event: MouseEvent): void {
    let mousePositionX: number = _event.clientX - crc2.canvas.offsetLeft;
    let mousepositionY: number = _event.clientY - crc2.canvas.offsetTop;
    console.log("x: ", mousePositionX, "y: ", mousepositionY);
    let formData: FormData = new FormData(document.forms[0]);


    for (let entry of formData) {

      switch (entry[0]) {
        case "Quantity":
          quantity = Number(formData.get("Quantity"));

          break;
        case "ExplosionSize":

          lifetime = Number(formData.get("ExplosionSize"));
          break;
        case "Particlecolor":
          color = String(formData.get("Particlecolor"));
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
    createParticle(quantity, mousePositionX, mousepositionY, color, lifetime);

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
    // createUserRocket(result);

  }

  // function createUserRocket(_result: Rocket | undefined): void {

  //   let color: string | undefined = _result?.Particlecolor;
  //   let lifetime: number | undefined = _result?.ExplosionSize;
  //   console.log(color, lifetime);
  //   // erzeugt neuer Particle mit diesen Werten und pusht ihn in moveable Array
  //   // eine Funktion die z.B. auf MouseUp hört, erzeugt eine Explosion mit diesen Werten

  // }


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


  function createParticle(_quantity: number, _mousePositionX: number, _mousePositionY: number, _color: string, _lifetime: number): void {
    let pointer: Vector = new Vector(_mousePositionX, _mousePositionY);

    let color: string = _color;
    //velocity.random(80, 100);

    for (let i: number = 0; i < 5; i++) {
      // console.log("startFunctionCreateDots");
      // let angelIncrementX: number = (Math.PI * 2) / _quantity;
      // let angelIncrementY: number = (Math.PI * 2) / _quantity;
      // let ix: number = Math.cos(angelIncrementX * i) * Math.random();
      // let iy: number = Math.sin(angelIncrementY * i) * Math.random();

      let velocity: Vector = new Vector(0, 0);
      velocity.random(40, 80);


      let particle: Particle = new Particle(color, pointer, velocity, lifetime);
      particlesarray.push(particle);
      console.log(particle);


    }


    //let particle: Particle = new Particle(pointer, color, velocity);
    // particlesarray.push(particle);
    // console.log(particle);


  }



  function update(): void {

    //crc2.fillStyle = "rgba(0,0,0,0.2)";


    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    for (let particle of particlesarray) {
      particle.move(1 / 50);
      particle.draw();

    }

  }

  function startMeter(_event: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
    meter.value = parseFloat(target.value);

  }
































































}