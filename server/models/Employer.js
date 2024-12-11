import mongoose from 'mongoose';


const EmployerSchema = new mongoose.Schema({
    
    companyName: { 
        type: String, required: true 
    }, 
     
    password: { 
        type: String, required: true 
    },  

    number: { 
        type: String, required: true 
    },   

    address: { 
        type: String, required: true 
    },

    image: { 
        type: String 
    }, 

    description: { 
        type: String 
    }, 

    email: { 
        type: String, required: true
    }, 

    
    jobs: [
        {
            post: { type: String},  
            jd: { type: String },  
            duration: { type: String},  
            stipend: { type: String},  
            criteria: { type: String }, 
            applicants: [
                {
                    username: { type: String},
                    contact: { type: String },  
                    status: { type: String },
                }
            ]
        }
    ],

    reviews: [
        {
            username: { type: String}, 
            review: { type: String }, 
            liked: { type: Boolean },  
        }
    ],
});

const EmployerModel = mongoose.model('Employer', EmployerSchema);

export default EmployerModel;
