"use strict";
var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let serverPage = "https://sarahabschlussarbeit.herokuapp.com/"; //"http://localhost:5001/";
    let form;
    let quantity;
    let color;
    let lifetime;
    let particlesarray = [];
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
        canvas.addEventListener("click", createObject);
        saveBtn.addEventListener("click", sendDataToServer);
        //loadBtn.addEventListener("click", getDataFromServer);
        inputQuantity.addEventListener("change", startMeter);
        window.setInterval(update, 20);
    }
    function createObject(_event) {
        let mousePositionX = _event.clientX - Firework.crc2.canvas.offsetLeft;
        let mousepositionY = _event.clientY - Firework.crc2.canvas.offsetTop;
        console.log("x: ", mousePositionX, "y: ", mousepositionY);
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "Quantity":
                    quantity = Number(formData.get("Quantity"));
                    break;
                case "ExplosionSize":
                    lifetime = Number(formData.get("ExplosionSize"));
                    break;
                case "Particlecolor":
                    color = String(formData.get("Particlecolor"));
                    break;
                case "Shape":
                    switch (entry[1]) {
                        case "dots":
                            // startFunctionCreateDots(quantity, mousePositionX, mousepositionY, color);
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
        createParticle(quantity, mousePositionX, mousepositionY, color, lifetime);
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
        // createUserRocket(result);
    }
    Firework.getDataFromServer = getDataFromServer;
    // function createUserRocket(_result: Rocket | undefined): void {
    //   let color: string | undefined = _result?.Particlecolor;
    //   let lifetime: number | undefined = _result?.ExplosionSize;
    //   console.log(color, lifetime);
    //   // erzeugt neuer Particle mit diesen Werten und pusht ihn in moveable Array
    //   // eine Funktion die z.B. auf MouseUp hört, erzeugt eine Explosion mit diesen Werten
    // }
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
    function createParticle(_quantity, _mousePositionX, _mousePositionY, _color, _lifetime) {
        let pointer = new Firework.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        for (let i = 0; i < 30; i++) {
            // console.log("startFunctionCreateDots");
            let radian = (Math.PI * 2) / 30;
            let ix = Math.cos(radian * i) * 20; //Math.random();
            let iy = Math.sin(radian * i) * 20; //Math.random();
            let velocity = new Firework.Vector(ix, iy);
            //velocity.random(80, 100);
            let particle = new Firework.Particle(color, pointer, velocity, lifetime);
            particlesarray.push(particle);
            console.log(particle);
        }
        //let particle: Particle = new Particle(pointer, color, velocity);
        // particlesarray.push(particle);
        // console.log(particle);
    }
    function update() {
        console.log("Update läuft");
        //crc2.fillStyle = "rgba(0,0,0,0.2)";
        Firework.crc2.fillRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
        for (let particle of particlesarray) {
            particle.move(1 / 50);
            particle.draw();
        }
    }
    function startMeter(_event) {
        let target = _event.target;
        let meter = document.querySelector("meter");
        meter.value = parseFloat(target.value);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=Main.js.map