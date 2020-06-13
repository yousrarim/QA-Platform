const mongoose = require('mongoose');


const CSSSchema = mongoose.Schema({
    p_name: {type: String},
    plan_date: {type: String},
    forcasted_date: {type: String},
    conducted_by: {type:String},
    date_conducted: {type:String},
    date_issued: {type:String},
    comments: {type:String},
    score: {type:Number},
    saf: {type:Number},
    sco: {type:Number},
    com: {type:Number},
    tec: {type:Number},
    sta: {type:Number},
    sch: {type:Number},
    cos: {type:Number},
    fie: {type:Number},
    sup: {type:Number},
    man: {type:Number},
    submitted: {type:String},
   

},
{
    timestamps: true
  });

  const CSS = module.exports = mongoose.model('CSS',CSSSchema);