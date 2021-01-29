"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "http://localhost:5001/"; //"https://sarahabschlussarbeit.herokuapp.com/"
    let crc2;
    let form;
    let quantity;
    let color;
    let lifetime;
    // let formDatass: any = [];
    // interface ContrPan {
    //   quantity: number;
    // }
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //  let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#form#controlPanel");
        let saveBtn = document.querySelector("button#saveBtn");
        let loadBtn = document.querySelector("button#loadBtn");
        form = document.querySelector("form#controlPanel");
        console.log("HalloWelt");
        canvas.addEventListener("click", createObject);
        saveBtn.addEventListener("click", SendDataToServer);
        loadBtn.addEventListener("click", GetDataFromServer);
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
                    console.log("Quantity= ", quantity);
                    break;
                case "ExplosionSize":
                    // formDatass.push(entry[1]);
                    console.log("ExplosionSize= ", entry[1]);
                    lifetime = Number(formData.get("ExplosionSize"));
                    break;
                case "Particlecolor":
                    // console.log("Particlecolor= ", entry[1]);
                    color = String(formData.get("Particlecolor"));
                    console.log("Particlecolor= ", color);
                    break;
                case "Shape":
                    switch (entry[1]) {
                        case "dots":
                            startFunctionCreateDots(quantity, mousePositionX);
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
            // console.log(formDatass);
        }
    }
    function GetDataFromServer(_event) {
        console.log("Datein wurden geladen");
    }
    async function SendDataToServer(_event) {
        let controlPanel = new FormData(form);
        let textArea = document.querySelector("input#textarea");
        let rocketTitel;
        rocketTitel = textArea.value;
        let query = new URLSearchParams(controlPanel);
        query.append("rocketTitel", rocketTitel);
        let response = await fetch(serverPage + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        console.log("Daten geschickt");
    }
    function startFunctionCreateDots(_nquantity, _mousePositionX) {
        for (let i = 0; i < _nquantity; i++) {
            console.log("startFunctionCreateDots");
        }
        // console.log(_color); //Warum undefined?
        console.log(_mousePositionX);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map