const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items=[];
var nextask = "task added";
app.get("/", function(req, res)  {
  res.render("list",{newtask: items});
});

app.post("/", function(req, res) {
    var tasks = req.body.task;
    items.push(tasks);
    res.redirect("/");
});

app.listen(5000, function() {
  console.log('Server is running ... ...');
});