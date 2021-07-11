"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//server.js muss mit Node.js ausgeführt werden
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
const mongoUrl = process.env.CONNECTION_STRING; //connection string zur MongoDB (secure data transmission)
let scoreCollection; //Leaderboard
let urlCollection; //URLs
let port = Number(process.env.PORT);
if (!port)
    port = 8100; //Port wird auf 8100 gesetzt
console.log("Starting Server");
let server = Http.createServer();
server.addListener("request", handleRequest);
server.listen(port);
connectToDatabase(mongoUrl);
async function connectToDatabase(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    urlCollection = mongoClient.db("Test").collection("URL");
    scoreCollection = mongoClient.db("Test").collection("Scores");
}
async function handleRequest(_request, _response) {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_request.url) {
        let url = Url.parse(_request.url, true);
        let pathname = url.pathname;
        if (pathname == "/addUrl") {
            urlCollection.insertOne(url.query);
            connectToDatabase(mongoUrl);
        }
        if (pathname == "/getUrl") {
            _response.write(JSON.stringify(await (urlCollection.find().toArray())));
        }
        else if (pathname == "/removeUrl") {
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
//# sourceMappingURL=server.js.map