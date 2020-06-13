const mongoose = require('mongoose');


const PDRISchema = mongoose.Schema({
    p_name:{type: String},
    type:{type: String},
    plan_date: {type: String},
    scope:{type:String},
    forcasted_date: {type: String},
    conducted_by: {type:String},
    date_conducted: {type:String},
    date_issued: {type:String},
    comments: {type:String},
    score: {type:Number},
    submitted: {type:String},
},
{
    timestamps: true
  });
  

  const PDRI = module.exports = mongoose.model('PDRI',PDRISchema);
