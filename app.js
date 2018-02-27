//register models
require('./models/Budget')

//Set up app and middleware
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');

//Import modules
const express = require('express');

const app = express(); //Create new express app

app.use(bodyParser.json());

const budget = {
    income: [
        { name: "Work", amount: "8000" }
    ],
    outgoing: [
        { name: "Rent", amount: "1000" },
        { name: "Netflix", amount: "10" },
        { name: "Food", amount: "200" }
    ]
};

app.get('/', (req, res) => {
    res.json(budget);
});

app.post('/add', async (req, res)=> {    
    const budget = new Budget(req.body);
    console.log(budget);
    await budget.save();
});

module.exports = app; //Using module.exports as we want access to the entire app.p.