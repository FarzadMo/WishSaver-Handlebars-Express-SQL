var express = require ("express");
var mysql = require ("mysql");
var exphbs = require ("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var connection =  mysql.createConnection({

    port: 3306,
    database: "wishes_db",
    password: "",
    user: "root",
    host: "localhost"
});

connection.connect(function(err){
    if (err) throw err;

    console.log("we are connected as"+connection.threadId);
});

app.get("/", function(req, res){

    connection.query("SELECT * FROM wishes", function (err, data){
        if (err) throw err;
        console.log(data);
        
        res.render("index", {dataObj: data});
    });
});


app.post("/", function(req, res){

    connection.query("INSERT INTO wishes (wish) VALUES (?)",[req.body.wish], function(err, data){
        if (err) throw err;

        res.redirect("/");
    });
});




app.listen(PORT, function(){
    console.log("server is listening on http://localhoset/"+PORT);
});
