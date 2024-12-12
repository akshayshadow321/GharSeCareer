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
            username: { type: String }, 
            status: { type: String },
        },
    ],

    video: [
        {
            vdlinks: { type: String }, 
            title: { type: String }, 
            vdtime: { type: Number}, 
            topic: { type: String }, 
        },
    ],
    
    test: [
        {
            ques: { type: String }, 
            options: { type: [String]}, 
            answer: { type: String }, 
            topic: { type: String}, 
        },
    ],

    refMaterials: [
        {
            pfdtitle: { type: String}, 
            pdfLink: { type: String}, 
            topic: { type: String },
        },
    ],

    reviews: [
        {
            username: { type: String}, 
            review: { type: String }, 
            liked: { type: Boolean },
        },
    ],
});


const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;