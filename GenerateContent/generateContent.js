"use strict";
var Firework;
(function (Firework) {
    function generateContent(_titelList) {
        console.log(_titelList);
        let group = null;
        let fieldset = document.querySelector("fieldset#fireworkTitel");
        group = createSelect(_titelList);
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }
    Firework.generateContent = generateContent;
    function createSelect(_titelList) {
        // let group: HTMLDivElement = document.createElement("div");
        let selection = document.createElement("select");
        selection.name = "LoadedTitels";
        selection.addEventListener("change", handelChange);
        //selection.id = "Test";
        for (let titel of _titelList) {
            let option = document.createElement("option");
            option.setAttribute("name", titel.rocketTitel);
            option.value = option.textContent = titel.rocketTitel;
            selection.appendChild(option);
            // group.appendChild(selection);
        }
        return selection;
    }
    function handelChange(_event) {
        let target = _event.target;
        let userValue;
        userValue = target.value;
        console.log(userValue);
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=generateContent.js.map