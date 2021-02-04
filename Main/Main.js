"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
    let crc2;
    let form;
    let quantity;
    let color;
    // let lifetime: number;
    // export interface Rocket {
    //   rocketTitel: string | string[] | undefined;
    // }
    async function handleLoad(_event) {
        console.log("HalloWelt");
        let response = await fetch(serverPage + "?" + "command=getTitels");
        let listOfTitels = await response.text();
        let titelList = JSON.parse(listOfTitels);
        Firework.generateContent(titelList);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let saveBtn = document.querySelector("button#saveBtn");
        let loadBtn = document.querySelector("button#loadBtn");
        let inputQuantity = document.querySelector("input#quantity");
        form = document.querySelector("form#controlPanel");
        canvas.addEventListener("click", createObject);
        saveBtn.addEventListener("click", sendDataToServer);
        loadBtn.addEventListener("click", getDataFromServer);
        inputQuantity.addEventListener("change", startMeter);
    }
    function createObject(_event) {
        let mousePositionX = _event.offsetX;
        let mousepositionY = _event.offsetY;
        console.log("x: ", mousePositionX, "y: ", mousepositionY);
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "Quantity":
                    quantity = Number(formData.get("Quantity"));
                    // console.log("Quantity= ", quantity);
                    break;
                case "ExplosionSize":
                    //  console.log("ExplosionSize= ", entry[1]);
                    // lifetime = Number(formData.get("ExplosionSize"));
                    break;
                case "Particlecolor":
                    // console.log("Particlecolor= ", entry[1]);
                    color = String(formData.get("Particlecolor"));
                    // console.log("Particlecolor= ", color);
                    break;
                case "Shape":
                    switch (entry[1]) {
                        case "dots":
                            startFunctionCreateDots(quantity, mousePositionX, mousepositionY);
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
        //startFunctionCreateDots(quantity, mousePositionX, mousepositionY);
    }
    async function getDataFromServer(_event) {
        // let option: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#LoadedTitels");
        // let userValue: string = option.value;
        console.log("Datein wurden geladen");
        let response = await fetch(serverPage + "?" + "command=retrieveAll");
        let responseContant = await response.text();
        console.log(responseContant);
        alert(responseContant);
    }
    async function sendDataToServer(_event) {
        let controlPanelData = new FormData(form);
        let textArea = document.querySelector("input#textarea");
        let rocketTitel;
        rocketTitel = textArea.value;
        let query = new URLSearchParams(controlPanelData);
        query.append("rocketTitel", rocketTitel);
        let response = await fetch(serverPage + "?" + query.toString());
        let responseText = await response.text();
        alert("Deine Daten wurden gespeichert");
        console.log("Daten geschickt: ", responseText);
        textArea.value = "";
    }
    function startFunctionCreateDots(_quantity, _mousePositionX, _mousePositionY) {
        for (let i = 0; i < _quantity; i++) {
            console.log("startFunctionCreateDots");
            crc2.arc(_mousePositionX, _mousePositionY, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffe6e6";
            crc2.fill();
        }
        // console.log(_color); //Warum undefined?
        //console.log(_color);
    }
    function startMeter(_event) {
        let target = _event.target;
        let meter = document.querySelector("meter");
        meter.value = parseFloat(target.value);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map