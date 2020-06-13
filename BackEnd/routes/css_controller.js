const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var CSS = require('../models/css');


//RETRIEVING DATA
router.get('/css', (req, res, next)=>{
    CSS.find(function(err, css){
        res.send(css);
    })
});

router.get('/css/sub', (req, res, next)=>{
    CSS.find({submitted:"true"},function(err, css){
        res.send(css);
    })
});

router.get('/css/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    CSS.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving CSS:' + JSON.stringify(err,undefined,2)); }
    })   
})

  //add css
router.post('/css', (req,res)=>
{
    var newCSS = new CSS({
        p_name: req.body.p_name,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        conducted_by: req.body.conducted_by,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
        score: req.body.score,
        saf: req.body.saf,
        sco: req.body.sco,
        com: req.body.com,
        tec: req.body.tec,
        sta: req.body.sta,
        sch: req.body.sch,
        cos: req.body.cos,
        fie: req.body.fie,
        sup: req.body.sup,
        man: req.body.man,
        });

    newCSS.save((err,CSS)=>{
        if(err)
        {
            res.json({msg: 'Failed to add css', err});
        }
        else{
            res.json({msg: 'css added succssfully'});
        }
    });
});

router.put('/css/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newCSS = {
        p_name: req.body.p_name,
        plan_date: req.body.plan_date ,
        conducted_by: req.body.conducted_by,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
        score: req.body.score,
        saf: req.body.saf,
        sco: req.body.sco,
        com: req.body.com,
        tec: req.body.tec,
        sta: req.body.sta,
        sch: req.body.sch,
        cos: req.body.cos,
        fie: req.body.fie,
        sup: req.body.sup,
        man: req.body.man,
        };

    CSS.findByIdAndUpdate(req.params.id, {$set: newCSS}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in css update:' + JSON.stringify(err,undefined,2)); }
    });
    
    

});
//submit css
router.put('/css/sub/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var newCSS = {
        p_name: req.body.p_name,
        plan_date: req.body.plan_date ,
        forcasted_date: req.body.forcasted_date,
        date_conducted: req.body.date_conducted,
        conducted_by: req.body.conducted_by,
        date_issued: req.body.date_issued,
        client_interviewed:  req.body.client_interviewed,
        comments:  req.body.comments,
        score: req.body.score,
        saf: req.body.saf,
        sco: req.body.sco,
        com: req.body.com,
        tec: req.body.tec,
        sta: req.body.sta,
        sch: req.body.sch,
        cos: req.body.cos,
        fie: req.body.fie,
        sup: req.body.sup,
        man: req.body.man,
        submitted: "true",
        };

    CSS.findByIdAndUpdate(req.params.id, {$set: newCSS}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in css update:' + JSON.stringify(err,undefined,2)); }
    });
});



module.exports = router;
