const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Project = require('../models/projects');
var CES = require('../models/ces');

//retreiving data
router.get('/projects', (req, res, next)=>{
    Project.find(function(err, projects){
        res.send(projects);
    })
});

const createCss = function(projectId, css) {
    return db.css.create(css).then(doccss => {
      console.log("\n>> Created css:\n", doccss);
  
      return db.Project.findByIdAndUpdate(
        projectId,
        { $push: { csss: doccss._id } },
        { new: true, useFindAndModify: false }
      );
    });
  };

//add project
router.post('/project', (req,res)=>
{
    var newProject = new Project({
        p_name: req.body.p_name,
        p_manager: req.body.p_manager ,
        qa_name: req.body.qa_name, 
        phase: req.body.phase.join(),
        business_unit: req.body.business_unit,
        program:  req.body.program,
        contract_value:  req.body.contract_value,
        scope:  req.body.scope,
        type_contract:  req.body.type_contract,
        location:  req.body.location,
        client:  req.body.client,

    });

    newProject.save((err,project)=>{
        if(err)
        {
            res.json({msg: 'Failed to add project'});
        }
        else{
            res.json({msg: 'Project added succesfully'});
        }
    });

});


router.get('/project/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    Project.findById(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in retrieving Project:' + JSON.stringify(err,undefined,2)); }
    })   
})

//update project
router.put('/project/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}');
    
    var proj = {
            p_name: req.body.p_name,
            p_manager: req.body.p_manager ,
            qa_name: req.body.qa_name,
            business_unit: req.body.business_unit,
            program:  req.body.program,
            contract_value:  req.body.contract_value,
            scope:  req.body.scope,
            type_contract:  req.body.type_contract,
            location:  req.body.location,
            client:  req.body.client,
        };

    Project.findByIdAndUpdate(req.params.id, {$set: proj}, {new: true}, (err,doc)=>{
        if(!err){ res.send(doc);}
        else { console.log('Error in Project update:' + JSON.stringify(err,undefined,2)); }
    });

});

//delete project
router.delete('/project/:id', (req,res,next)=>
{
    Project.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    }); 
    

});

module.exports = router;