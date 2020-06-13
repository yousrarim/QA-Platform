const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var VS = require('../models/vs');


//RETRIEVING DATA
router.get('/vs', (req, res, next)=>{
    VS.find(function(err, vs){
        res.send(vs);
    })
});

router.get('/vs/sub', (req, res, next)=>{
    VS.find({submitted:"true"},function(err, vs){
        res.send(vs);
    })
});

router.get('/vs/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    VS.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving vs:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add vs
router.post('/vs', (req,res)=>
{
    var newvs = new VS({
        p_name: req.body.p_name,
        comments:  req.body.comments,
        target_v:req.body.target_v,
        new_target_v:req.body.new_target_v,
        target_s:req.body.target_s,
        new_target_s:req.body.new_target_s,
        discipline:req.body.discipline,
        originator:req.body.originator,
        date_submitted: req.body.date_submitted,     
        idea: req.body.idea,
        submitted_saving: req.body.submitted_saving,
        pm_saving: req.body.pm_saving,
        client_saving: req.body.client_saving,
        tco_saving: req.body.tco_saving,
        score: req.body.score,     
    });

    newvs.save((err,VS)=>{
        if(err)
        {
            res.json({msg: 'Failed to add vs', err});
        }
        else{
            res.json({msg: 'vs added sucvsfully'});
        }
    });
});

router.put('/vs/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newvs = {
        p_name: req.body.p_name,
        new_target_s:req.body.new_target_s,
        new_target_v:req.body.new_target_v,
        comments:  req.body.comments,
        target_v:req.body.target_v,
        target_s:req.body.target_s,
        discipline:req.body.discipline,
        originator:req.body.originator,
        date_submitted: req.body.date_submitted,     
        idea: req.body.idea,
        submitted_saving: req.body.submitted_saving,
        pm_saving: req.body.pm_saving,
        client_saving: req.body.client_saving,
        tco_saving: req.body.tco_saving,
        score: req.body.score, 
        };

    VS.findByIdAndUpdate(req.params.id, {$set: newvs}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in vs update:' + JSON.stringify(err,undefined,2)); }
    });

});

router.put('/vs/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newvs = {
        p_name: req.body.p_name,
        new_target_s:req.body.new_target_s,
        new_target_v:req.body.new_target_v,
        comments:  req.body.comments,
        target_v:req.body.target_v,
        target_s:req.body.target_s,
        discipline:req.body.discipline,
        originator:req.body.originator,
        date_submitted: req.body.date_submitted,     
        idea: req.body.idea,
        submitted_saving: req.body.submitted_saving,
        pm_saving: req.body.pm_saving,
        client_saving: req.body.client_saving,
        tco_saving: req.body.tco_saving,
        score: req.body.score, 
        submitted:"true",
        };

    VS.findByIdAndUpdate(req.params.id, {$set: newvs}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in vs update:' + JSON.stringify(err,undefined,2)); }
    });

});

module.exports = router;