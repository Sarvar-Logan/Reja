console.log("Serverni boshlash")

const { log } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data)
  }
});


// Mongo DB connect 

const db = require("./server").db();
const mongoDB = require("mongodb")

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
  console.log("user entered / create-item")
  const new_reja = req.body.reja;
  console/log(req.body)
  // res.end('succees')
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    // if(err) {
    //   console.log(err)
    //   res.end('Something went wrong');
    // } else {
    //   res.end("Succeesfuly added");
    // }
    res.json(data.ops[0]);
  });
});


app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongoDB.ObjectId(id)}, 
    function(err, data) {
    res.json({state: "succees"});
  });
});


app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongoDB.ObjectId(data.id)},
    {$set: {reja: data.new_input}},
    function(err, data) {
      res.json({state: "succees"});
    }
  )
})

app.post("/delete-all", (req, res) => {
  if(req.body.delete_all) {
    db.collection("plans").deleteMany(function() {
      res.json({state: "Hamma rejalar o'chirilidi"});
    });
  }
});


app.get('/author', (req, res) => {
  res.render("author",  {user: user});
});




app.get("/", function(req, res) {
  console.log("user entered /")
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if(err) {
      console.log("ERROR:", err);
      res.end("Something went wrong");
    } else {
      console.log(data);
      res.render("reja", {items: data});
    }  
  });
});


module.exports = app;