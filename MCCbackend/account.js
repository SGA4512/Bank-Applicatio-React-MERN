const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/account')
    .then(() => console.log("Connected to MCC database"))
    .catch(err => console.log(err));

const accountSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    accountNumber: Number,
    balance: Number,
    createdDate: Date,
    type: String,
    lasttransation: Date,
    transations: [{
        transationType: String,
        amount: Number,
        date: Date
    }]
})

module.exports = mongoose.model('account', accountSchema);



/*
async function createAccount(){
    const account = new Account({
        name: "Anuja",
        address: "ABC street",
        phone: 8188188188,
        accountNumber: 202,
        balance: 2000,
        createdDate: Date.now(),
        type: "Checking",
        lasttransation: Date.now(),
        transations: [{
            amount: 1000,
            date: Date.now()
        }]
    })

    const result = await account.save();
    console.log(result);
}

//createAccount();

async function getAccounts(){
    const account = await Account.find();
    console.log(account);
}

//getAccounts();

async function getAccount(){
    const account = await Account.find({accountNumber: 202});
    console.log(account);
}

//getAccount();

async function showAllActivities(){
    const transations = await Account
                    .find({accountNumber: 202})
                    .select({ transations: 1 });
    console.log(transations[0]);
}

showAllActivities(); */