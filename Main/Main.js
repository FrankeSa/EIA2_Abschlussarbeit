"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "http://localhost:5001/"; //"https://sarahabschlussarbeit.herokuapp.com/"
    let crc2;
    let form;
    let quantity;
    let color;
    async function handleLoad(_event) {
        let response = await fetch(serverPage + "?" + "command=getTitels");
        let responseContant = await response.text();
        alert(responseContant);
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
                    console.log("Quantity= ", quantity);
                    break;
                case "ExplosionSize":
                    console.log("ExplosionSize= ", entry[1]);
                    // lifetime = Number(formData.get("ExplosionSize"));
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
    async function getDataFromServer(_event) {
        console.log("Datein wurden geladen");
        let response = await fetch(serverPage + "?" + "command=retrieveAll");
        let responseContant = await response.text();
        alert(responseContant);
    }
    async function sendDataToServer(_event) {
        let controlPanel = new FormData(form);
        let textArea = document.querySelector("input#textarea");
        let rocketTitel;
        rocketTitel = textArea.value;
        let query = new URLSearchParams(controlPanel);
        query.append("rocketTitel", rocketTitel);
        let response = await fetch(serverPage + "?" + query.toString());
        // let responseText: string = await response.text();
        alert("Deine Daten wurden gespeichert");
        console.log("Daten geschickt");
        textArea.value = "";
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