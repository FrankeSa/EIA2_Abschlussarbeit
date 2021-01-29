import * as Http from "http";
// import * as Url from "url";

export namespace Firework {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(): void {
        console.log("handleRequestStart");
    }















































}