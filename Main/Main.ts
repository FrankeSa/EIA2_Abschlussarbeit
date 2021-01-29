namespace Firework {
  window.addEventListener("load", handleLoad);
  let serverPage: string = "http://localhost:5001/"; //"https://sarahabschlussarbeit.herokuapp.com/"
  let crc2: CanvasRenderingContext2D;
  let form: HTMLFormElement;
  let quantity: number;
  let color: string;
  let lifetime: number;


  // let formDatass: any = [];

  // interface ContrPan {
  //   quantity: number;

  // }

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    //  let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#form#controlPanel");
    let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveBtn");
    let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
    form = <HTMLFormElement>document.querySelector("form#controlPanel");
    console.log("HalloWelt");
    canvas.addEventListener("click", createObject);
    saveBtn.addEventListener("click", SendDataToServer);
    loadBtn.addEventListener("click", GetDataFromServer);

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
          console.log("Quantity= ", quantity);
          break;
        case "ExplosionSize":
          // formDatass.push(entry[1]);
          console.log("ExplosionSize= ", entry[1]);
          lifetime = Number(formData.get("ExplosionSize"));
          break;
        case "Particlecolor":
          // console.log("Particlecolor= ", entry[1]);
          color = String(formData.get("Particlecolor"));
          console.log("Particlecolor= ", color);
          break;
        case "Shape":
          switch (entry[1]) {
            case "dots":
              startFunctionCreateDots(quantity, mousePositionX);
              break;
            case "confetti":
              console.log("startFunctionCreateConfetti");
              break;
            case "heart":
              console.log("startFunctionCreateHeart");
              break;
          }
        default:
      }
      // console.log(formDatass);
    }

  }


  function GetDataFromServer(_event: Event): void {
    console.log("Datein wurden geladen");

  }



  async function SendDataToServer(_event: Event): Promise<void> {
    let controlPanel: FormData = new FormData(form);
    let textArea: HTMLInputElement = <HTMLInputElement>document.querySelector("input#textarea");
    let rocketTitel: string;
    rocketTitel = textArea.value;
    let query: URLSearchParams = new URLSearchParams(<any>controlPanel);
    query.append("rocketTitel", rocketTitel);
    let response: Response = await fetch(serverPage + "?" + query.toString());
    let responseText: string = await response.text();
    alert(responseText);
    console.log("Daten geschickt");

  }




  function startFunctionCreateDots(_nquantity: number, _mousePositionX: number): void {

    for (let i: number = 0; i < _nquantity; i++) {
      console.log("startFunctionCreateDots");

    }

    // console.log(_color); //Warum undefined?
    console.log(_mousePositionX);
  }





















































}