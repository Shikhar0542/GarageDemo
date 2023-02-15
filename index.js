const express = require("express");
const func = express();
const port =3000;
const menuData = require("./data.json");

func.get("/", (req, res) => {
    res.send("First request sent");
});

func.get("/menu", (req, res) => {
    res.send(menuData);
});

func.listen(port, () =>{
    console.log("the connection is successful");
})