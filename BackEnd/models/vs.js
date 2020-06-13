const mongoose = require('mongoose');


const VSchema = mongoose.Schema({
    p_name:{type: String},
    target_v:{type: Number},
    new_target_v:{type: Number},
    target_s:{type: Number},
    new_target_s:{type: Number},
    discipline:{type: String},
    originator:{type: String},
    date_submitted: {type: String},
    idea: {type:String},
    submitted_saving: {type:Number},
    pm_saving: {type:Number},
    client_saving: {type:Number},
    tco_saving: {type:Number},
    comments: {type:String},
    score: {type:Number},
    submitted: {type:String},
},
{
    timestamps: true
  });
  

  const VS = module.exports = mongoose.model('VS',VSchema);
