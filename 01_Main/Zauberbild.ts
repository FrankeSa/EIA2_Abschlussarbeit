namespace Zauberbild {

    let sidebar: HTMLFormElement;
    let url: string = "https://sarahabschlussarbeit.herokuapp.com/";

    export let mainCanvas: CanvasRenderingContext2D; //MainCanvas
    let canvas: HTMLCanvasElement | null;
    export let crcStern: CanvasRenderingContext2D; //StarCanvas
    let canvasStar: HTMLCanvasElement;
    export let crcSmiley: CanvasRenderingContext2D; //SmileyCanvas
    let canvasSmiley: HTMLCanvasElement;
    export let crcBubbles: CanvasRenderingContext2D; //BubblesCanvas
    let canvasBubbles: HTMLCanvasElement;
    export let crcMickey: CanvasRenderingContext2D; //MickeyCanvas
    let canvasMickey: HTMLCanvasElement;



    window.addEventListener("load", handleLoad);




    function handleLoad(_event: Event): void {
        alert("Ziehe das gewünschte Symbol auf deine Zeichenfläche. Ziehe es zum Löschen außerhalb deiner rechten Zeichenfläche");

        sidebar = <HTMLFormElement>document.querySelector("form");
        let deletBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#deleteBtn");
        let submitBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        sidebar.addEventListener("change", chooseCanvasSize);
        sidebar.addEventListener("change", chooseCanvasColor);
        deletBtn.addEventListener("click", clearCanvas);
        submitBtn.addEventListener("click", sendDataToServer);

        //**********Canvas */
        canvas = document.querySelector("#mainCanvas");
        if (!canvas)
            return;
        mainCanvas = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvasStar = <HTMLCanvasElement>document.querySelector("#star");
        crcStern = <CanvasRenderingContext2D>canvasStar.getContext("2d");

        canvasSmiley = <HTMLCanvasElement>document.querySelector("#smiley");
        crcSmiley = <CanvasRenderingContext2D>canvasSmiley.getContext("2d");

        canvasBubbles = <HTMLCanvasElement>document.querySelector("#bubbles");
        crcBubbles = <CanvasRenderingContext2D>canvasBubbles.getContext("2d");
        canvasMickey = <HTMLCanvasElement>document.querySelector("#mickey");
        crcMickey = <CanvasRenderingContext2D>canvasMickey.getContext("2d");

        drawBubble();
        drawMicky();
        drawSmiley();
        drawStar();
       
    }

    function chooseCanvasSize(_event: Event): void {

        let formData: FormData = new FormData(sidebar); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet

        for (let entry of formData) {

            switch (entry[1]) {
                case "portrait":
                    mainCanvas.canvas.width = 500;
                    break;
                case "landscape":
                    mainCanvas.canvas.width = 800;
                    break;
                case "panorama":
                    mainCanvas.canvas.width = 900;
                    break;
            }
        }
    }


    function chooseCanvasColor(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);
        let formData: FormData = new FormData(document.forms[0]); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet

        for (let entry of formData) {
            console.log(entry[1]);

            switch (entry[1]) {
                case "blue":
                    mainCanvas.fillStyle = "#80bfff";
                    mainCanvas.fillRect(0, 0, mainCanvas.canvas.width, mainCanvas.canvas.height);
                    break;
                case "green":
                    mainCanvas.fillStyle = "#00cc00";
                    mainCanvas.fillRect(0, 0, mainCanvas.canvas.width, mainCanvas.canvas.height);
                    break;
                case "gradienL":
                    drawBackgroundGradientL();
                    break;
                case "gradienR":
                    drawBackgroundGradientR();
                    break;

            }
        }
    }

    function drawBackgroundGradientL(): void {

        let gradient: CanvasGradient = mainCanvas.createLinearGradient(0, 0, 100, mainCanvas.canvas.height);
        gradient.addColorStop(0, "HSL(40, 100%, 45%)");
        gradient.addColorStop(0.6, "HSL(60, 81%, 50%)");
        gradient.addColorStop(1, "HSL(40, 100%, 45%)");
        mainCanvas.fillStyle = gradient;
        mainCanvas.fillRect(0, 0, mainCanvas.canvas.width, mainCanvas.canvas.height);
    }


    function drawBackgroundGradientR(): void {

        let gradient: CanvasGradient = mainCanvas.createRadialGradient(100, 50, 50, 90, 60, 100);
        gradient.addColorStop(0, "HSL(336, 100%, 80%)");
        gradient.addColorStop(0.6, "HSL(330, 100%, 65%)");
        gradient.addColorStop(1, "HSL(330, 100%, 45%)");
        mainCanvas.fillStyle = gradient;
        mainCanvas.fillRect(0, 0, mainCanvas.canvas.width, mainCanvas.canvas.height);
    }



    function clearCanvas(_event: Event): void {

        console.log("Ich wurde geklickt");      
        mainCanvas.fillStyle = "white";
    }

    async function sendDataToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(sidebar);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString()); // verschickt request und erhält response
        let responseText: string = await response.text();
        alert(responseText);
    }


}



