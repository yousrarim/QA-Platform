const mongoose = require('mongoose');


const PINSchema = mongoose.Schema({
    p_name:{type: String},
    source:{type: String},
    sourceid:{type: String},
    rating:{type: Number},
    closed_date: {type: String},
    category: {type: String},
    conducted_by: {type:String},
    description: {type:String},
    root_causes: {type:String},
    action_what: {type:String},
    action_whom: {type:String},
    action_when: {type:String},
    comments: {type:Number},
    status:{type:String},    
},

{
    timestamps: true
  });
  

  const PIN = module.exports = mongoose.model('PIN',PINSchema);