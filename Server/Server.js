"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
// import * as Url from "url";
var Firework;
(function (Firework) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest() {
        console.log("handleRequestStart");
    }
})(Firework = exports.Firework || (exports.Firework = {}));
//# sourceMappingURL=Server.js.map