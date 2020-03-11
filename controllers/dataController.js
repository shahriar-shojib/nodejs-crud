const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = mongoose.model('dataEntry');
const moment = require('moment');
let exactTime = moment().format('Do MMMM YYYY, h:mm A');;


router.get('/', (req,res) => {
    res.render("data/addOrEdit", {
        viewTitle: "Insert Data"
    });
});
router.post('/', (req,res) => {
    insertData(req,res);
});
function insertData(req, res){
    let doc = new db();
    doc.buyer = req.body.buyer;
    doc.amount = req.body.amount;
    doc.receiptID = req.body.receiptID;
    doc.email =  req.body.email;
    doc.phone = `+880${req.body.phone}`;
    doc.city = req.body.city;
    doc.note = req.body.note;
    doc.items =  req.body.items;
    doc.date = exactTime;
    doc.save((err, doc) => {
        if (!err){
            res.redirect('/list');
        } else {
            if(err.name == ValidationError){
               console.log(err);
            }
            console.log(err);
        }
        
    });
};
router.get('/list', (req,res)=> {
    db.find((err,docs) => {
        if(!err){
            res.render('data/list',{
                list:docs
            });
        } else {
            console.log(err);
        }
    });
});

function handleValidationErr(err,body){
    for(field in err.errors){
        switch (err.errors[field].path){
            // case buyer
            // default:
            // console.log(test);
        }
    }
}
module.exports = router;
