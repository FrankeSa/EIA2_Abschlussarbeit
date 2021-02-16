"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
    let form;
    let quantity;
    let color;
    let lifetime;
    let shape;
    let moveables = [];
    let result;
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
        let loadBtn = document.querySelector("button#loadBtn");
        let inputQuantity = document.querySelector("input#quantity");
        form = document.querySelector("form#controlPanel");
        canvas.addEventListener("click", createObject);
        saveBtn.addEventListener("click", sendDataToServer);
        loadBtn.addEventListener("click", notifyUser);
        inputQuantity.addEventListener("change", startMeter);
        window.setInterval(update, 20);
    }
    function createObject(_event) {
        let mousePositionX = _event.clientX; //- crc2.canvas.offsetLeft;
        let mousepositionY = _event.clientY; //- crc2.canvas.offsetTop;
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            quantity = Number(formData.get("quantity"));
            lifetime = Number(formData.get("explosionSize"));
            color = String(formData.get("particlecolor"));
            switch (entry[1]) {
                case "dot":
                    shape = "dot";
                    break;
                case "confetti":
                    shape = "confetti";
                    break;
                case "star":
                    shape = "star";
                    break;
                case "popcorn":
                    shape = "popcorn";
                    break;
            }
        }
        createParticle(quantity, mousePositionX, mousepositionY, color, lifetime, shape);
        soundEffect();
    }
    function createUserRocket(_result) {
        let color = _result.particlecolor;
        let lifetime = _result.explosionSize;
        let shape = _result.particleshape;
        let quantity = _result.quantity;
        console.log("Das ist deine Rakete=>", "Particleshape=", shape, "Particlecolor=", color, "ExplosionSize=", lifetime, "Particlequantity=", quantity);
    }
    async function getDataFromServer(_event) {
        console.log("Datein wurden geladen");
        let target = _event.target;
        let userValue;
        userValue = target.value;
        let response = await fetch(serverPage + "?" + "command=getAllDatas");
        let responseContent = await response.text();
        let allDatas = JSON.parse(responseContent);
        result = allDatas.find(item => item.rocketTitel === userValue);
        createUserRocket(result);
    }
    Firework.getDataFromServer = getDataFromServer;
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
            let radian = (Math.PI * 2) / _quantity;
            let px = Math.cos(radian * i) * 110 * Math.random() * 2; //(2)power
            let py = Math.sin(radian * i) * 110 * Math.random() * 2; //(2)power
            let velocity = new Firework.Vector(px, py);
            let particle = new Firework.Particle(origin, velocity, color, lifetime, shape);
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
    function soundEffect() {
        let tone = "explosionsound.wav";
        let sound = new Audio("assets/" + tone);
        sound.play();
    }
    function startMeter(_event) {
        let target = _event.target;
        let meter = document.querySelector("meter");
        meter.value = parseFloat(target.value);
    }
    function notifyUser(_event) {
        alert("If you load this rocket, your current selection will be lost");
        form.reset();
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map