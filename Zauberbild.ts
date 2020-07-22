namespace Zauberbild {

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null;


    window.addEventListener("load", handleLoad);




    function handleLoad(_event: Event): void {
        //alert("Ziehe das gewünschte Symbol auf deine Zeichenfläche. Ziehe es zum Löschen außerhalb deiner Zeichenfläche");

        let sidebar: HTMLDivElement = <HTMLDivElement>document.querySelector("span#sidebar");
        sidebar.addEventListener("change", chooseCanvasSize);
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


    }

    function drawBackground(): void {

        let gradient: string = "blue";

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }


    function chooseCanvasSize(_event: Event): void {

        console.log(_event);
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let formData: FormData = new FormData(document.forms[0]); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet
        console.log(document.forms[0]);


        for (let entry of formData) {
            console.log(entry[1]);

           
            switch (entry[1]) {
                case "portrait":
                    drawBackground();
                    break;
                case "landscape":
                    let a: number = 10;
                    let b: number = 10;
                    canvas = document.createElement("canvas");
                    canvas.width = a;
                    canvas.height = b;
                    break;

            }

            //             if (entry[1] == "portrait") {
            //                 drawBackground();
            //             }
            //             else {
            // console.log("Nicht panorama");
            //             }
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