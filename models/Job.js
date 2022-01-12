const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Please provide compnay name'],
        maxlength: 50
    },
position:{
    type:String,
    required:[true, 'Please provide a company'],
    maxlength: 100
},
status:{
    type:String,
    enum:['interview', 'declined', 'pending'],
    default: 'pending'
},
createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true , 'Please provide user']
}

},{timestamps:true})

module.exports = mongoose.model("Jobs", jobsSchema);