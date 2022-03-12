const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const app = express();
require("./passpost");

app.use(
    cookieSession({
        name: "Session",
        keys: ["lama"],
        maxAge: 24 * 60*60*1000
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
);

app.use("/auth", require("./routes/router"));

app.listen("4000", ()=>{
    console.log("Server is start on port: 4000")
})