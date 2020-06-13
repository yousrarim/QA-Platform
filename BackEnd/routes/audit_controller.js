const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var Audit = require('../models/audit');


//RETRIEVING DATA
router.get('/audit', (req, res, next)=>{
    Audit.find(function(err, Audit){
        res.send(Audit);
    })
});

router.get('/audit/sub', (req, res, next)=>{
    Audit.find({submitted:"true"},function(err, Audit){
        res.send(Audit);
    })
});

router.get('/audit/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    Audit.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving Audit:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add Audit
router.post('/audit', (req,res)=>
{
    var newaudit = new Audit({
        p_name: req.body.p_name,
        audit_name:req.body.audit_name,
        audit_type:req.body.audit_type,
        discipline:req.body.discipline,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        });

    newaudit.save((err,Audit)=>{
        if(err)
        {
            res.json({msg: 'Failed to add audit', err});
        }
        else{
            res.json({msg: 'audit added succssfully'});
        }
    });
});

router.put('/audit/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newaudit = {
        p_name: req.body.p_name,
        audit_name:req.body.audit_name,
        audit_type:req.body.audit_type,
        discipline:req.body.discipline,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        };

    Audit.findByIdAndUpdate(req.params.id, {$set: newaudit}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in audit update:' + JSON.stringify(err,undefined,2)); }
    });

});

router.put('/audit/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newaudit = {
        p_name: req.body.p_name,
        audit_name:req.body.audit_name,
        audit_type:req.body.audit_type,
        discipline:req.body.discipline,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        submitted:"true",
        };

    Audit.findByIdAndUpdate(req.params.id, {$set: newaudit}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in audit update:' + JSON.stringify(err,undefined,2)); }
    });

});
module.exports = router;