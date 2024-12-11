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
        type: String, required: true, unique: true 
    }, 

    
    jobs: [
        {
            post: { type: String, required: true },  
            jd: { type: String, required: true },  
            duration: { type: String, required: true },  
            stipend: { type: String, required: true },  
            criteria: { type: String, required: true }, 
            applicants: [
                {
                    username: { type: String, required: true },
                    contact: { type: String, required: true },  
                    status: { type: String, required: true },
                }
            ]
        }
    ],

    reviews: [
        {
            username: { type: String, required: true }, 
            review: { type: String, required: true }, 
            liked: { type: Boolean, required: true },  
        }
    ],
});

const EmployerModel = mongoose.model('Employer', EmployerSchema);

export default EmployerModel;
