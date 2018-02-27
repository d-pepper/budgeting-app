const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const budgetSchema= new mongoose.Schema({
    income: [{name:String, amount: Number}],
    outgoings: [{name: String,amount: Number}]
});

module.exports = mongoose.model('Budget', budgetSchema);
