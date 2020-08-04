"use strict";
var Zauberbild;
(function (Zauberbild) {
    let sidebar;
    let url = "https://sarahabschlussarbeit.herokuapp.com/";
    let canvas;
    let canvasStar;
    let canvasSmiley;
    let canvasBubbles;
    let canvasMickey;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        alert("Ziehe das gewünschte Symbol auf deine Zeichenfläche. Ziehe es zum Löschen außerhalb deiner rechten Zeichenfläche");
        sidebar = document.querySelector("form");
        let deletBtn = document.querySelector("#deleteBtn");
        let submitBtn = document.querySelector("button[type=button]");
        sidebar.addEventListener("change", chooseCanvasSize);
        sidebar.addEventListener("change", chooseCanvasColor);
        deletBtn.addEventListener("click", clearCanvas);
        submitBtn.addEventListener("click", sendDataToServer);
        //**********Canvas */
        canvas = document.querySelector("#mainCanvas");
        if (!canvas)
            return;
        Zauberbild.mainCanvas = canvas.getContext("2d");
        canvasStar = document.querySelector("#star");
        Zauberbild.crcStern = canvasStar.getContext("2d");
        canvasSmiley = document.querySelector("#smiley");
        Zauberbild.crcSmiley = canvasSmiley.getContext("2d");
        canvasBubbles = document.querySelector("#bubbles");
        Zauberbild.crcBubbles = canvasBubbles.getContext("2d");
        canvasMickey = document.querySelector("#mickey");
        Zauberbild.crcMickey = canvasMickey.getContext("2d");
        Zauberbild.drawBubble();
        Zauberbild.drawMicky();
        Zauberbild.drawSmiley();
        Zauberbild.drawStar();
    }
    function chooseCanvasSize(_event) {
        let formData = new FormData(sidebar); // document = Liste aller untergeordneten form-Elemente. forms[0] =  erste Formular des Dokuments ausgewertet
        for (let entry of formData) {
            switch (entry[1]) {
                case "portrait":
                    Zauberbild.mainCanvas.canvas.width = 500;
                    break;
                case "landscape":
                    Zauberbild.mainCanvas.canvas.width = 800;
                    break;
                case "panorama":
                    Zauberbild.mainCanvas.canvas.width = 900;
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
                    Zauberbild.mainCanvas.fillStyle = "#80bfff";
                    Zauberbild.mainCanvas.fillRect(0, 0, Zauberbild.mainCanvas.canvas.width, Zauberbild.mainCanvas.canvas.height);
                    break;
                case "green":
                    Zauberbild.mainCanvas.fillStyle = "#00cc00";
                    Zauberbild.mainCanvas.fillRect(0, 0, Zauberbild.mainCanvas.canvas.width, Zauberbild.mainCanvas.canvas.height);
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
    function drawBackgroundGradientL() {
        let gradient = Zauberbild.mainCanvas.createLinearGradient(0, 0, 100, Zauberbild.mainCanvas.canvas.height);
        gradient.addColorStop(0, "HSL(40, 100%, 45%)");
        gradient.addColorStop(0.6, "HSL(60, 81%, 50%)");
        gradient.addColorStop(1, "HSL(40, 100%, 45%)");
        Zauberbild.mainCanvas.fillStyle = gradient;
        Zauberbild.mainCanvas.fillRect(0, 0, Zauberbild.mainCanvas.canvas.width, Zauberbild.mainCanvas.canvas.height);
    }
    function drawBackgroundGradientR() {
        let gradient = Zauberbild.mainCanvas.createRadialGradient(100, 50, 50, 90, 60, 100);
        gradient.addColorStop(0, "HSL(336, 100%, 80%)");
        gradient.addColorStop(0.6, "HSL(330, 100%, 65%)");
        gradient.addColorStop(1, "HSL(330, 100%, 45%)");
        Zauberbild.mainCanvas.fillStyle = gradient;
        Zauberbild.mainCanvas.fillRect(0, 0, Zauberbild.mainCanvas.canvas.width, Zauberbild.mainCanvas.canvas.height);
    }
    function clearCanvas(_event) {
        console.log("Ich wurde geklickt");
        Zauberbild.mainCanvas.fillStyle = "white";
    }
    async function sendDataToServer(_event) {
        let pictureName;
        let formData = new FormData(sidebar);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString()); // verschickt request und erhält response
        let responseText = await response.text();
        pictureName = window.prompt("Gib deinen Bildnamen ein");
        alert("Dein Bildname: " + pictureName + "\n" + "Folgende Daten sind abgespeichert: " + "\n" + responseText);
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Zauberbild.js.map