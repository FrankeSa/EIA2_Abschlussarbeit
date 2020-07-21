namespace Zauberbild {

    let crc2: CanvasRenderingContext2D;
    //let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");




    window.addEventListener("load", handleLoad);




    function handleLoad(_event: Event): void {

        console.log("Anfang_Start");
        let sidebar: HTMLDivElement = <HTMLDivElement>document.querySelector("div#sidebar");
        sidebar.addEventListener("change", handleChange);

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log("Background");





     
    }




    function drawBackground(): void {

        let gradient: string = "blue";

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


    }


    function handleChange(_event: Event): void {
        console.log(_event);
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let formData: FormData = new FormData(document.forms[0]); // weißt der variablen formData alle fieldsets zu
        console.log(document.forms[0]);

        for (let entry of formData) {
            console.log(entry[1]);

            if (entry[1] == "portrait") {
                drawBackground();
            }
        }



        // let formData: FormData = new FormData(document.forms[0]); // weißt der variablen formData alle fieldsets zu
        // console.log(document.forms[0]);

        // for (let entry of formData) {
        //     console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
        //     let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        //     console.log(item);
        // }










    }


















}