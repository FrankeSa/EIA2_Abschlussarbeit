"use strict";
var Zauberbild;
(function (Zauberbild) {
    let crc2;
    let canvas;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //alert("Ziehe das gewünschte Symbol auf deine Zeichenfläche. Ziehe es zum Löschen außerhalb deiner Zeichenfläche");
        let sidebar = document.querySelector("span#sidebar");
        let deletBtn = document.querySelector("#deleteBtn");
        sidebar.addEventListener("change", chooseCanvasSize);
        sidebar.addEventListener("change", chooseCanvasColor);
        deletBtn.addEventListener("click", deleteCanvas);
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
    }
    function chooseCanvasSize(_event) {
        let formData = new FormData(document.forms[0]); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet
        for (let entry of formData) {
            switch (entry[1]) {
                case "portrait":
                    crc2.canvas.width = 500;
                    break;
                case "landscape":
                    crc2.canvas.width = 800;
                    break;
                case "panorama":
                    crc2.canvas.width = 900;
                    break;
            }
        }
    }
    function chooseCanvasColor(_event) {
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let formData = new FormData(document.forms[0]); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet
        for (let entry of formData) {
            console.log(entry[1]);
            switch (entry[1]) {
                case "blue":
                    crc2.fillStyle = "#80bfff";
                    //crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                    break;
                case "green":
                    crc2.fillStyle = "#00cc00";
                    //crc2.fill();
                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
    function deleteCanvas(_event) {
        console.log("Ich wurde geklickt");
    }
    function drawBackgroundGradientL() {
        let gradient = crc2.createLinearGradient(0, 0, 100, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(40, 100%, 45%)");
        gradient.addColorStop(0.6, "HSL(60, 81%, 50%)");
        gradient.addColorStop(1, "HSL(40, 100%, 45%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawBackgroundGradientR() {
        let gradient = crc2.createRadialGradient(100, 50, 50, 90, 60, 100);
        gradient.addColorStop(0, "HSL(336, 100%, 80%)");
        gradient.addColorStop(0.6, "HSL(330, 100%, 65%)");
        gradient.addColorStop(1, "HSL(330, 100%, 45%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Zauberbild.js.map