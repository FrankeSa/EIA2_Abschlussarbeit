"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Firework;
(function (Firework) {
    let fireworkCollection;
    let databaseUrl = "mongodb://localhost:27017"; //"mongodb+srv://FrankeSa:Milou@sarahcluster-pelct.mongodb.net/Firework?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server startet auf Port " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function handleRequest(_request, _response) {
        console.log("handleRequest");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //die Url, die in der request steckt, wird geparst und durch das true in ein assoziatives Array formatiert
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeRocket(url.query);
        }
        _response.write("Was geht?");
        _response.end();
    }
    function storeRocket(_userRocket) {
        fireworkCollection.insertOne(_userRocket);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; //mit diesen options eine Verbindung zur DB aufbauen
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        fireworkCollection = mongoClient.db("Firework").collection("Rockets");
        console.log("Database connection", fireworkCollection != undefined);
    }
})(Firework = exports.Firework || (exports.Firework = {}));
//# sourceMappingURL=Server.js.map