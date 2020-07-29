"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var Zauberbild;
(function (Zauberbild) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.Port; //process liefert den Port, wenn verfügbar
    if (port == undefined)
        port = 5001;
    console.log("SErver strarting on port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Whats Upp");
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Angabe was verschickt wird. Hier Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Ausschalten der Sicherheitsmechanismen, sodass man von überall anfragen kann
        if (_request.url) {
            let url = Url.parse(_request.url, true); // die URL wird geparst und durch true wird ein assoziatives Array daraus
            // for (let key in url.query) {
            //    _response.write("\n" + key + ":" + "\n" + url.query[key]);
            // }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Zauberbild = exports.Zauberbild || (exports.Zauberbild = {}));
//# sourceMappingURL=Server.js.map