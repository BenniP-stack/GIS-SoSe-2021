import * as Http from "http";
export namespace A3_1Server {

    console.log("Starting server");  //Konsole gibt Starting server aus

    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;  


    let server: Http.Server = Http.createServer();   //Server wird initialisiert

    server.addListener("request", handleRequest);    //Funktion handleRequest wird mit dem Server als Listener mitgegeben

    server.addListener("listening", handleListen);   //Funktion handleListen wird mit dem Server als Listener mitgegeben

    server.listen(port);                             //Server hört/reagiert auf port und startet


    function handleListen(): void {                  //Konsole gibt Listening aus wenn Funktion aufgerufen wird
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Konsole gibt I hear voices aus 

        console.log("I hear voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Hier wird der Header der Website mit Charset UTF-8 gesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Hier wird die CORS-Policy angepasst um Zugriff auf/von allen Ports gewährt


        _response.write(_request.url);   //Serveranfrage URL wird ausgegeben


        _response.end();                //Response wird beendet
    
    }
}
