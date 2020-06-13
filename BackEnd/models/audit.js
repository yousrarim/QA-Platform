const mongoose = require('mongoose');


const AuditSchema = mongoose.Schema({
    p_name:{type: String},
    audit_name:{type: String},
    audit_type:{type: String},
    discipline:{type: String},
    plan_date: {type: String},
    forcasted_date: {type: String},
    conducted_by: {type:String},
    date_conducted: {type:String},
    date_issued: {type:String},
    comments: {type:String},
    score: {type:Number},
    submitted:{type:String},
    
},
{
    timestamps: true
  });
  

  const Audit = module.exports = mongoose.model('Audit',AuditSchema);
