const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var PIN = require('../models/pin');


//RETRIEVING DATA
router.get('/pin', (req, res, next)=>{
    PIN.find(function(err, PIN){
        res.send(PIN);
    })
});

router.get('/pin/open', (req, res, next)=>{
    PIN.find( {status:"open"},function(err, pin){
        res.send(pin);
    })
});

router.get('/pin/closed', (req, res, next)=>{
    PIN.find( {status:"closed"},function(err, pin){
        res.send(pin);
    })
});

router.get('/pin/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    PIN.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving PIN:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add PIN
router.post('/pin', (req,res)=>
{
    var newPIN = new PIN({
    p_name:req.body.p_name,
    source:req.body.source,
    sourceid:req.body.sourceid ,
    rating:req.body.rating,
    closed_date: req.body.closed_date,
    category: req.body.category,
    conducted_by: req.body.conducted_by,
    description: req.body.description,
    root_causes: req.body.root_causes,
    action_what: req.body.action_what,
    action_whom: req.body.action_whom,
    action_when: req.body.action_when,
    comments: req.body.comments,
    status:"open",
    });

    newPIN.save((err,PIN)=>{
        if(err)
        {
            res.json({msg: 'Failed to add PIN', err});
        }
        else{
            res.json({msg: 'PIN added sucPINfully'});
        }
    });
});

router.put('/pin/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
        
    today = mm + '/' + dd + '/' + yyyy;
        
    var newPIN = {
    p_name:req.body.p_name ,
    source:req.body.source ,
    sourceid:req.body.sourceid ,
    rating:req.body.rating ,
    closed_date: req.body.closed_date,
    category: req.body.category ,
    conducted_by: req.body.conducted_by,
    description: req.body.description,
    root_causes: req.body.root_causes,
    action_what: req.body.action_what,
    action_whom: req.body.action_whom,
    action_when: req.body.action_when,
    comments: req.body.comments,
    status:req.body.status,
        };

    PIN.findByIdAndUpdate(req.params.id, {$set: newPIN}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in PIN update:' + JSON.stringify(err,undefined,2)); }
    });

});

module.exports = router;