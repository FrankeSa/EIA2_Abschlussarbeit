"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
    let form;
    let quantity;
    let color;
    let lifetime;
    let type;
    let moveables = [];
    async function handleLoad(_event) {
        console.log("HalloWelt");
        let response = await fetch(serverPage + "?" + "command=getTitels");
        let listOfTitels = await response.text();
        let titelList = JSON.parse(listOfTitels);
        Firework.generateContent(titelList);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        let saveBtn = document.querySelector("button#saveBtn");
        //let loadBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#loadBtn");
        let inputQuantity = document.querySelector("input#quantity");
        form = document.querySelector("form#controlPanel");
        canvas.addEventListener("mouseup", createObject);
        canvas.addEventListener("mousedown", sarah);
        saveBtn.addEventListener("click", sendDataToServer);
        //loadBtn.addEventListener("click", getDataFromServer);
        inputQuantity.addEventListener("change", startMeter);
        window.setInterval(update, 20);
    }
    function createObject(_event) {
        let mouseklick = _event.button;
        if (mouseklick === 0) {
            let mousePositionX = _event.clientX; //- crc2.canvas.offsetLeft;
            let mousepositionY = _event.clientY; //- crc2.canvas.offsetTop;
            console.log("x: ", mousePositionX, "y: ", mousepositionY);
            let formData = new FormData(document.forms[0]);
            for (let entry of formData) {
                quantity = Number(formData.get("quantity"));
                lifetime = Number(formData.get("explosionSize"));
                color = String(formData.get("particlecolor"));
                switch (entry[1]) {
                    case "dot":
                        type = "dot";
                        break;
                    case "confetti":
                        type = "confetti";
                        break;
                    case "star":
                        type = "star";
                    case "popcorn":
                        type = "popcorn";
                        break;
                }
            }
            createParticle(quantity, mousePositionX, mousepositionY, color, lifetime, type);
        }
    }
    async function getDataFromServer(_event) {
        console.log("Datein wurden geladen");
        let target = _event.target;
        let userValue;
        userValue = target.value;
        let response = await fetch(serverPage + "?" + "command=getAllDatas");
        let responseContent = await response.text();
        let allDatas = JSON.parse(responseContent);
        let result = allDatas.find(item => item.rocketTitel === userValue);
        console.log(result);
        createUserRocket(result);
    }
    Firework.getDataFromServer = getDataFromServer;
    function createUserRocket(_result) {
        let color = _result?.particlecolor;
        let lifetime = _result?.explosionSize;
        let type = _result?.particleshape;
        console.log(color, lifetime, type);
        // erzeugt neuer Particle mit diesen Werten und pusht ihn in moveable Array
        // eine Funktion die z.B. auf MouseUp hört, erzeugt eine Explosion mit diesen Werten
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
    function createParticle(_quantity, _mousePositionX, _mousePositionY, _color, _lifetime, _type) {
        let origin = new Firework.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        for (let i = 0; i < _quantity; i++) {
            // console.log("startFunctionCreateDots");
            let radian = (Math.PI * 2) / _quantity;
            let px = Math.cos(radian * i) * 110 * Math.random() * 2; //(2)power
            let py = Math.sin(radian * i) * 110 * Math.random() * 2; //(2)power
            let velocity = new Firework.Vector(px, py);
            let particle = new Firework.Particle(origin, velocity, color, lifetime, type);
            moveables.push(particle);
        }
    }
    function update() {
        Firework.crc2.fillStyle = "rgba(0,0,0,0.2)";
        Firework.crc2.fillRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
    }
    function deleteExpandables() {
        for (let index = moveables.length - 1; index >= 0; index--) {
            if (moveables[index].expendable) //im Array an stelle des gerade befindenden Index
                moveables.splice(index, 1);
        }
    }
    function startMeter(_event) {
        let target = _event.target;
        let meter = document.querySelector("meter");
        meter.value = parseFloat(target.value);
    }
    function sarah(_event) {
        let mouseklick = _event.button;
        if (mouseklick === 1)
            console.log("HalloSarah", _event.button);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map