"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
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
        saveBtn.addEventListener("click", saveData);
        loadBtn.addEventListener("click", loadData);
    }
    function dontknow(_event) {
        let mousePositionX = _event.offsetX;
        let mousepositionY = _event.offsetY;
        console.log("x: ", mousePositionX, "y: ", mousepositionY);
    }
    function saveData(_event) {
        let textArea = document.querySelector("input#textarea");
        let fireworkTitel;
        fireworkTitel = textArea.value;
        console.log("FireworkTitel= ", fireworkTitel);
    }
    function loadData(_event) {
        console.log("Datein wurden geladen");
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map