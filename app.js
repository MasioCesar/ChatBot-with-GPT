import express from "express";
import "dotenv/config.js"

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Oi")
});

app.listen(3000, () => {
    console.log("Server rodando")
});