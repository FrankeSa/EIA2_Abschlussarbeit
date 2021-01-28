"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
    // let quantity: number;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //  let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#form#controlPanel");
        let saveBtn = document.querySelector("button#saveBtn");
        let loadBtn = document.querySelector("button#loadBtn");
        console.log("HalloWelt");
        canvas.addEventListener("click", dontknow);
        saveBtn.addEventListener("click", SendDataToServer);
        loadBtn.addEventListener("click", GetDataFromServer);
    }
    function dontknow(_event) {
        let mousePositionX = _event.offsetX;
        let mousepositionY = _event.offsetY;
        console.log("x: ", mousePositionX, "y: ", mousepositionY);
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "Quantity":
                    console.log("Quantity= ", entry[1]);
                    // quantity = entry[1];
                    break;
                case "ExplosionSize":
                    console.log("ExplosionSize= ", entry[1]);
                    break;
                case "Particlecolor":
                    console.log("Particlecolor= ", entry[1]);
                    break;
                case "Shape":
                    switch (entry[1]) {
                        case "dots":
                            console.log("startFunctionCreateDots");
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
        }
    }
    function GetDataFromServer(_event) {
        console.log("Datein wurden geladen");
    }
    function SendDataToServer(_event) {
        let textArea = document.querySelector("input#textarea");
        let rocketTitel;
        rocketTitel = textArea.value;
        console.log("FireworkTitel= ", rocketTitel);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map