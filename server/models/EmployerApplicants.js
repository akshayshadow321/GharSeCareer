import mongoose from 'mongoose';

const EmployerApplicationSchema = new mongoose.Schema({
    
    empName: { 
        type: String, required: true 
    },
    compLink :{
        type:String,required:true
    },
    compEmail :{
        type:String,required:true
    },
    status : {
        type : String
    }
});


const EmployerApplicationModel = mongoose.model('EmployerApplicants', EmployerApplicationSchema);

export default EmployerApplicationModel;