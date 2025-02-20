console.log("Serverni boshlash")

const express = require("express");
const app = express();
const http = require("http");



//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Sessoin code


//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4: Routing code
app.get("/Hello", function(req, res) {
  res.send("<h1>HELLO WORLD</h1>");
});

app.get("/gift", function(req, res) {
  res.send("<h1>Siz sovgalar sahifasidasiz.</h1>");
});


const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, function() {
  console.log(`The server is running succesfully on port: ${PORT}`);
});


