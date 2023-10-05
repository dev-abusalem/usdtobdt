const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
// Set cookie

app.use(cookieSession(
    {
        name:"session",
        keys:["salem"],
        maxAge: 24*60*60*100
    }

))
// User cors
app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true

}))
// Use passport
app.use(passport.initialize());
app.use(passport.session());

// Run server
app.listen( "5000" , ()=>{
    console.log("server is running 5000 port");
})