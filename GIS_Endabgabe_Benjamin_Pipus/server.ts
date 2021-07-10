//server.js muss mit Node.js ausgeführt werden

import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

const mongoUrl: string = <string>process.env.CONNECTION_STRING; //connection string zur MongoDB (secure data transmission)

let scoreCollection: Mongo.Collection; //Leaderboard
let urlCollection: Mongo.Collection;   //URLs

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;  //Port wird auf 8100 gesetzt

console.log("Starting Server");

let server: Http.Server = Http.createServer();
server.addListener("request", handleRequest);
server.listen(port);

connectToDatabase(mongoUrl);

async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();

    urlCollection = mongoClient.db("Test").collection("URL");
    scoreCollection = mongoClient.db("Test").collection("Scores");
}

async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let pathname: String | null = url.pathname;

        if (pathname == "/addUrl") {
            urlCollection.insertOne(url.query);
            connectToDatabase(mongoUrl);
        }
        if (pathname == "/getUrl") {
            _response.write(JSON.stringify(await (urlCollection.find().toArray())));


        } else if (pathname == "/removeUrl") {
            urlCollection.deleteOne(url.query);
            connectToDatabase(mongoUrl);
        }
        if (pathname == "/addScore") {
            scoreCollection.insertOne(url.query);
            connectToDatabase(mongoUrl);
        }
        if (pathname == "/getScore") {
            _response.write(JSON.stringify(await (scoreCollection.find().toArray())));

        }


    }
    _response.end();

}