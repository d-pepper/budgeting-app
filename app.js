//Set up app and middleware

//Import modules
const express = require('express');

const app = express(); //Create new express app

app.get('/', (req, res) => {
    res.json({
        text: "Hello World!"
    });
});

module.exports = app; //Using module.exports as we want access to the entire app.