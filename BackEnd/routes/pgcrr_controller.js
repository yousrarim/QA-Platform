const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var PGCRR  = require('../models/pgcrr');


//RETRIEVING DATA
router.get('/pgcrr', (req, res, next)=>{
    PGCRR.find(function(err, pgcrr){
        res.send(pgcrr);
    })
});

router.get('/pgcrr/sub', (req, res, next)=>{
    PGCRR.find({submitted:"true"},function(err, pgcrr){
        res.send(pgcrr);
    })
}); 

router.get('/pgcrr/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    PGCRR.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving pgcrr:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add PGCRR
router.post('/pgcrr', (req,res)=>
{
    var newpgcrr = new PGCRR({
        p_name: req.body.p_name,
       type:req.body.type,
        result:req.body.result,
        plan_date: req.body.plan_date,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        });

    newpgcrr.save((err,PGCRR)=>{
        if(err)
        {
            res.json({msg: 'Failed to add pgcrr', err});
        }
        else{
            res.json({msg: 'pgcrr added succssfully'});
        }
    });
});

router.put('/pgcrr/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newpgcrr= {
        p_name: req.body.p_name,
        type:req.body.type,
        result:req.body.result,
        plan_date: req.body.plan_date,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        };

    PGCRR.findByIdAndUpdate(req.params.id, {$set: newpgcrr}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in pgcrr update:' + JSON.stringify(err,undefined,2)); }
    });

});

router.put('/pgcrr/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newpgcrr= {
        p_name: req.body.p_name,
        type:req.body.type,
        result:req.body.result,
        plan_date: req.body.plan_date,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        comments:  req.body.comments,
        score: req.body.score,
        submitted:"true",
        };

    PGCRR.findByIdAndUpdate(req.params.id, {$set: newpgcrr}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in pgcrr update:' + JSON.stringify(err,undefined,2)); }
    });

});
module.exports = router;