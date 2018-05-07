var db = require("./models");
var express = require("express");
var app = express();

console.log("API-Routes Connected")
app.post("/api/articles", function (req, res) {
    console.log("POST ROUTE RAN")
    // console.log(req.body)
    console.log(req.body.headline.main)
    console.log(req.body.pub_date)
    console.log(req.body.web_url)

 const newArticle ={   
    title: req.body.headline.main,
    url:req.body.pub_date,
    date:req.body.web_url
}

    db.Article.create(newArticle)
        .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle)
            return res.json(JSON.stringify(dbArticle))
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
        });


});

app.get("/api/articles",function(req,res){
db.Article.find()
.then(function(response){
    return res.json(JSON.stringify(response))
})
})


module.exports = app;