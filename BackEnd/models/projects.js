const mongoose = require('mongoose');



const ProjectSchema = mongoose.Schema({
            p_name : {type: String},
            p_manager: {type: String},
            qa_name: {type:String},
            phase: {type:String},
            business_unit: {type:String},
            program: {type:String},
            contract_value: {type:String},
            scope: {type:String},
            type_contract: {type:String},
            location: {type:String},
            client: {type:String},
            ces: [
                { type: mongoose.Schema.Types.ObjectId, ref: 'CES' }
              ]
},
{
    timestamps: true
  });

const Project = module.exports = mongoose.model('Project',ProjectSchema);