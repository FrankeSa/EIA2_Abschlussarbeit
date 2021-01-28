namespace Firework {
  window.addEventListener("load", handleLoad);
  let crc2: CanvasRenderingContext2D;



  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    //  let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#form#controlPanel");
    let saveBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#saveBtn");
    let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
    console.log("HalloWelt");
    canvas.addEventListener("click", dontknow);
    saveBtn.addEventListener("click", SendDataToServer);
    loadBtn.addEventListener("click", GetDataFromServer);

  }




  function dontknow(_event: MouseEvent): void {
    let mousePositionX: number = _event.offsetX;
    let mousepositionY: number = _event.offsetY;
    console.log("x: ", mousePositionX, "y: ", mousepositionY);
    let formData: FormData = new FormData(document.forms[0]);


    for (let entry of formData) {

      switch (entry[0]) {
        case "Quantity":
          console.log("Quantity= ", entry[1]);
          // quantity = entry[1];
          break;
        case "ExplosionSize":
          console.log("ExplosionSize= ", entry[1]);
          break;
        case "Particlecolor":
          console.log("Particlecolor= ", entry[1]);
          break;
        case "Shape":
          switch (entry[1]) {
            case "dots":
              console.log("startFunctionCreateDots");
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

    }
  }


  function GetDataFromServer(_event: Event): void {
    console.log("Datein wurden geladen");

  }




  function SendDataToServer(_event: Event): void {
    let textArea: HTMLInputElement = <HTMLInputElement>document.querySelector("input#textarea");
    let rocketTitel: string;
    rocketTitel = textArea.value;
    console.log("FireworkTitel= ", rocketTitel);
  }


























































}