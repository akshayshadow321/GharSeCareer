import express from 'express';
import EmployerApplicationModel from '../models/EmployerApplicants.js'; // Import the model

// POST request to create a new employer application
export const createApplication = async (req, res) => {
    try {
        const { companyEmail, companyLink, companyName } = req.body;

        // Check if the required data is present
        if (!companyEmail || !companyLink || !companyName) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Create new employer application document
        const newApplication = new EmployerApplicationModel({
            empName: companyName,
            compLink: companyLink,
            compEmail: companyEmail,
            status: 'Pending', // Default status
        });

        // Save the new application to the database
        await newApplication.save();

        // Respond with success message
        res.status(200).json({ success: true, message: 'Application created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


export const getApplicants = async (req,res) => {
    const response = await EmployerApplicationModel.find();
    res.json(response);
}

export const updateRequestStatus = async (req, res) => {
    try {
        const { applicationId, status } = req.body;
        if (!applicationId || !status) {
            return res.status(400).json({ success: false, message: 'Application ID and status are required' });
        }

        // Find the application by ID and update its status
        const updatedApplication = await EmployerApplicationModel.findByIdAndUpdate(
            applicationId, 
            { status: status }, 
            { new: true }
        );

        if (!updatedApplication) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

        res.status(200).json({ success: true, message: 'Application status updated successfully', updatedApplication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};



