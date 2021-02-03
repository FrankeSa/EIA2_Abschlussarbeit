"use strict";
var Firework;
(function (Firework) {
    function generateContent(_titelList) {
        console.log(_titelList);
        for (let titel of _titelList) {
            let nameOfRocket = titel.rocketTitel;
            let group = null;
            group = createSelect(nameOfRocket);
            let fieldset = document.querySelector("fieldset#fireworkTitel");
            if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
                fieldset.appendChild(group);
        }
    }
    Firework.generateContent = generateContent;
    function createSelect(_nameOfRocket) {
        let group = document.createElement("div");
        let selection = document.createElement("select");
        selection.name = "LoadedTitels";
        let option = document.createElement("option");
        option.setAttribute("name", _nameOfRocket);
        option.value = option.textContent = _nameOfRocket;
        selection.appendChild(option);
        group.appendChild(selection);
        return group;
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=generateContent.js.map