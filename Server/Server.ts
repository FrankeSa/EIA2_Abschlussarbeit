import * as Http from "http";
import * as Url from "url";
export namespace Firework {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("handleRequest");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //die Url, die in der request steckt, wird geparst und durch das true in ein assoziatives Array formatiert
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("Was geht?");
        _response.end();
    }














































}