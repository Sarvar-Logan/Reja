console.log("Serverni boshlash")

const express = require("express");
const app = express();
const http = require("http");



//1: Entry code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Sessoin code


//3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4: Routing code
app.post("/create-item", (req, res) => {
  console.log(req)
  res.json({test: "succes"});
});

app.get("/", function(req, res) {
  res.render('harid')
});

const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, function() {
  console.log(`The server is running succesfully on port: ${PORT}`);
});


