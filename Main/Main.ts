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
    saveBtn.addEventListener("click", saveData);
    loadBtn.addEventListener("click", loadData);

  }




  function dontknow(_event: MouseEvent): void {
    let mousePositionX: number = _event.offsetX;
    let mousepositionY: number = _event.offsetY;
    console.log("x: ", mousePositionX, "y: ", mousepositionY);

  }

  function saveData(_event: Event): void {
    let textArea: HTMLInputElement = <HTMLInputElement>document.querySelector("input#textarea");
    let fireworkTitel: string;
    fireworkTitel = textArea.value;
    console.log("FireworkTitel= ", fireworkTitel);
  }

  function loadData(_event: Event): void {
    
    console.log("Datein wurden geladen");

  }































































}