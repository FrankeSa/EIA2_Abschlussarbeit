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
        let response = await fetch(serverPage + "?" + "command=getTitels");
        let responseContant = await response.text();
        alert("Hier sollten die Titel stehen" + responseContant);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let saveBtn = document.querySelector("button#saveBtn");
        let loadBtn = document.querySelector("button#loadBtn");
        form = document.querySelector("form#controlPanel");
        console.log("HalloWelt");
        canvas.addEventListener("click", createObject);
        saveBtn.addEventListener("click", sendDataToServer);
        loadBtn.addEventListener("click", getDataFromServer);
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
                            // startFunctionCreateDots(quantity, mousePositionX);
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
        console.log("createParticle", quantity);
    }
    async function getDataFromServer(_event) {
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
    // function startFunctionCreateDots(_quantity: number, _mousePositionX: number): void {
    //   for (let i: number = 0; i < _quantity; i++) {
    //     console.log("startFunctionCreateDots");
    //   }
    //   // console.log(_color); //Warum undefined?
    //   console.log(_mousePositionX);
    // }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map