"use strict";
var Firework;
(function (Firework) {
    function generateContant(_titelList) {
        console.log(_titelList);
        for (let titel of _titelList)
            console.log(titel.rocketTitel);
    }
    Firework.generateContant = generateContant;
})(Firework || (Firework = {}));
//# sourceMappingURL=generateContant.js.map