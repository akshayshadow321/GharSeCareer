import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, required: true 
    },
    
    email: { 
        type: String, required: true, unique: true 
    },

    password: { 
        type: String, required: true
     },

    phone: { 
        type: String
     },

    jobsApplied: [{
        companyName: { type: String },
        jobPost: { type: String },
    }],

    interest: { 
        type: [String] 
    },

    courses: [{
        courseName: { type: String },
        status: { type: String },
    }],
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;