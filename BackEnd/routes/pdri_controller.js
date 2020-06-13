const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var PDRI  = require('../models/pdri');


//RETRIEVING DATA
router.get('/pdri', (req, res, next)=>{
    PDRI.find(function(err, pdri){
        res.send(pdri);
    })
});
router.get('/pdri/sub', (req, res, next)=>{
    PDRI.find({submitted:"true"},function(err, pdri){
        res.send(pdri);
    })
});

router.get('/pdri/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    PDRI.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving pdri:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add pdri
router.post('/pdri', (req,res)=>
{
    var newpdri = new PDRI({
        p_name: req.body.p_name,
        type:req.body.type,
        scope:req.body.scope,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        conducted_by: req.body.conducted_by,
        comments:  req.body.comments,
        score: req.body.score,
        });

    newpdri.save((err,PDRI)=>{
        if(err)
        {
            res.json({msg: 'Failed to add pdri', err});
        }
        else{
            res.json({msg: 'pdri added succssfully'});
        }
    });
});

router.put('/pdri/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newpdri= {
        p_name: req.body.p_name,
        type:req.body.type,
        scope:req.body.scope,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        conducted_by: req.body.conducted_by,
        comments:  req.body.comments,
        score: req.body.score,
        };

    PDRI.findByIdAndUpdate(req.params.id, {$set: newpdri}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in pdri update:' + JSON.stringify(err,undefined,2)); }
    });

});

//submit
router.put('/pdri/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newpdri= {
        p_name: req.body.p_name,
        type:req.body.type,
        scope:req.body.scope,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        conducted_by: req.body.conducted_by,
        comments:  req.body.comments,
        score: req.body.score,
        submitted: "true",
        };

    PDRI.findByIdAndUpdate(req.params.id, {$set: newpdri}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in pdri update:' + JSON.stringify(err,undefined,2)); }
    });

});

module.exports = router;