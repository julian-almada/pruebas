const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.listen(3030, () => console.log("server runnig on port 3030"));