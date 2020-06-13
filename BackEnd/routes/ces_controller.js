const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var CES = require('../models/ces');


//RETRIEVING DATA
router.get('/ces', (req, res, next)=>{
    CES.find(function(err, ces){
        res.send(ces);
    })
});

router.get('/ces/sub', (req, res, next)=>{
    CES.find( {submitted:"true"},function(err, ces){
        res.send(ces);
    })
});

router.put('/ces/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newces = {
        p_name: req.body.p_name,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        conducted_by: req.body.conducted_by,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
        submitted: "true",
        };

    CES.findByIdAndUpdate(req.params.id, {$set: newces}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in CES update:' + JSON.stringify(err,undefined,2)); }
    });

});

router.get('/ces/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    CES.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving CES:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add ces
router.post('/ces', (req,res)=>
{
    var newCES = new CES({
        p_name: req.body.p_name,
        plan_date: (req.body.plan_date) ,
        conducted_by: req.body.conducted_by,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
    });

    newCES.save((err,CES)=>{
        if(err)
        {
            res.json({msg: 'Failed to add ces', err});
        }
        else{
            res.json({msg: 'ces added succesfully'});
        }
    });
});

router.put('/ces/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newces = {
        p_name: req.body.p_name,
        plan_date: req.body.plan_date ,
        conducted_by: req.body.conducted_by,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
        };

    CES.findByIdAndUpdate(req.params.id, {$set: newces}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in CES update:' + JSON.stringify(err,undefined,2)); }
    });

});

module.exports = router;