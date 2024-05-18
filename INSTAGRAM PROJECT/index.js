const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));



app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
        const instaData = require("./data.json");
       // console.log(instaData)
    const data = instaData[username];
    res.render("instagram.ejs", {data});
});

app.listen(port, ()=>{
    console.log(`listening on app ${port}`)
});