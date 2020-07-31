"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Zauberbild;
(function (Zauberbild) {
    let pictureCollection;
    //open Port
    let port = process.env.Port; //process liefert den Port, wenn verfügbar
    if (port == undefined)
        port = 5001;
    let dbUrl = "mongodb+srv://FrankeSa:Milou@sarahcluster-pelct.mongodb.net/Zauberbild?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(dbUrl);
    function startServer(_port) {
        let server = Http.createServer();
        //console.log("SErver strarting on port" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictureCollection = mongoClient.db("Zauberbild").collection("Pictures");
        console.log("Database connection ", pictureCollection != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("Whats Upp");
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Angabe was verschickt wird. Hier Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Ausschalten der Sicherheitsmechanismen, sodass man von überall anfragen kann
        if (_request.url) {
            let url = Url.parse(_request.url, true); // die URL wird geparst und durch true wird ein assoziatives Array daraus
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            console.log(url.query);
            storeUserData(url.query);
        }
        _response.end();
    }
    function storeUserData(_userData) {
        pictureCollection.insert(_userData);
    }
})(Zauberbild = exports.Zauberbild || (exports.Zauberbild = {}));
//# sourceMappingURL=Server.js.map