"use strict";
var Firework;
(function (Firework) {
    function generateContent(_titelList) {
        console.log(_titelList);
        let nameOfRockets = _titelList;
        let group = null;
        group = createSelect(nameOfRockets);
        let fieldset = document.querySelector("fieldset#fireworkTitel");
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }
    Firework.generateContent = generateContent;
    function createSelect(_nameOfRocket) {
        // let group: HTMLDivElement = document.createElement("div");
        let selection = document.createElement("select");
        selection.name = "LoadedTitels";
        for (let userName of _nameOfRocket) {
            let option = document.createElement("option");
            option.setAttribute("name", userName.rocketTitel);
            option.value = option.textContent = userName.rocketTitel;
            selection.appendChild(option);
            // group.appendChild(selection);
        }
        return selection;
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=generateContent.js.map