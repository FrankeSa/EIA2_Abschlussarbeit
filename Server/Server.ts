import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Zauberbild {

    interface PicturesToStore {
        [type: string]: string | string[] | undefined;
    }

    let pictureCollection: Mongo.Collection;


    //open Port
    let port: number | string | undefined = process.env.Port; //process liefert den Port, wenn verfügbar
    if (port == undefined)
        port = 5001;
    let dbUrl: string = "mongodb+srv://FrankeSa:Milou@sarahcluster-pelct.mongodb.net/Zauberbild?retryWrites=true&w=majority";
    
    startServer(port);
    connectToDatabase(dbUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("SErver strarting on port" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        pictureCollection = mongoClient.db("Zauberbild").collection("Pictures");
        console.log("Database connection ", pictureCollection != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Whats Upp");
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Angabe was verschickt wird. Hier Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Ausschalten der Sicherheitsmechanismen, sodass man von überall anfragen kann

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); // die URL wird geparst und durch true wird ein assoziatives Array daraus
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            console.log(url.query);
            storeUserData(url.query);

        }

        _response.end();

    }

    function storeUserData(_userData: PicturesToStore): void {
        pictureCollection.insert(_userData);
    }






}