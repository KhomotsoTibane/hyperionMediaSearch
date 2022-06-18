const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require('node-fetch');

const path = require("path");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://searchmediacapstone.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


if( process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req,res)=>{
         res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
    })
}




//search parameters entered by the user in the frontend
let search="";
let media = "";

app.post("/api", (req,res)=>{
    search  = req.body.search;
    media = req.body.mediaType;  
})

app.get("/api/search", (req,res)=>{
    const url =`http://itunes.apple.com/search?term=${search}&media=${media}&limit=30`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("searching for " + search + "in " + media) ;
        res.json(json);
    });
});

app.listen(process.env.PORT || 5000, ()=>{console.log("server started on port 5000")});


