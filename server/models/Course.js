import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    
    courseName: { 
        type: String, required: true 
    }, 

    description: { 
        type: String, required: true 
    }, 

    time: { 
        type: Number, required: true
     }, 

    mentor: { 
        type: String, required: true 
    }, 

    applicants: [
        {
            username: { type: String, required: true }, 
            status: { type: String, required: true },
        },
    ],

    video: [
        {
            vdlinks: { type: String, required: true }, 
            title: { type: String, required: true }, 
            vdtime: { type: Number, required: true }, 
            topic: { type: String, required: true }, 
        },
    ],
    
    test: [
        {
            ques: { type: String, required: true }, 
            options: { type: [String], required: true }, 
            answer: { type: String, required: true }, 
            topic: { type: String, required: true }, 
        },
    ],

    refMaterials: [
        {
            pfdtitle: { type: String, required: true }, 
            pdfLink: { type: String, required: true }, 
        },
    ],

    reviews: [
        {
            username: { type: String, required: true }, 
            review: { type: String, required: true }, 
            liked: { type: Boolean, required: true },
        },
    ],
});


const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;