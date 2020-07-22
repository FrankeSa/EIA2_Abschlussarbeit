"use strict";
var Zauberbild;
(function (Zauberbild) {
    let crc2;
    let canvas;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //alert("Ziehe das gewünschte Symbol auf deine Zeichenfläche. Ziehe es zum Löschen außerhalb deiner Zeichenfläche");
        let sidebar = document.querySelector("span#sidebar");
        sidebar.addEventListener("change", chooseCanvasSize);
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
    }
    function drawBackground() {
        let gradient = "blue";
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function chooseCanvasSize(_event) {
        console.log(_event);
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let formData = new FormData(document.forms[0]); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet
        console.log(document.forms[0]);
        for (let entry of formData) {
            console.log(entry[1]);
            switch (entry[1]) {
                case "portrait":
                    drawBackground();
                    break;
                case "landscape":
                    let a = 10;
                    let b = 10;
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
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Zauberbild.js.map