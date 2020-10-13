import express from "express";

import "./databases/connection";

const app = express();
app.use(express.json());

app.get("/user", (request, response) => {
    response.send("Quero que tu vá, vá ")
})




app.listen(3333);