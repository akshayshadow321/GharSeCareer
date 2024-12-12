import EmployerModel from "../models/Employer.js";

export const empRegister = async (req, res) => {
    const { companyName, password, number, address, description, email } = req.body;

    // Check if employer already exists
    const existingEmployer = await EmployerModel.findOne({ email });
    if (existingEmployer) {
        return res.status(400).json({ message: 'Employer with this email already exists' });
    }

    // Create new employer document
    const newEmployer = new EmployerModel({
        companyName,
        password,
        number,
        address,
        description,
        email,
    });

    try {
        // Save to database
        await newEmployer.save();
        res.status(201).json({ message: 'Employer registered successfully', employer: newEmployer });
    } catch (error) {
        console.error('Error registering employer:', error);
        res.status(500).json({ message: 'Error registering employer' });
    }
};


export const EmpAuth = async (req, res) => {
    const { email, password } = req.body;
    const data = await EmployerModel.findOne({ email: email });

    if (data) {
        if (password == data.password) {
            res.json({ validCreds: true, message: 'Name and Password are correct', id: data._id, name: data.name });
        } else {
            res.json({ validCreds: false, message: 'Password is wrong!' });
        }
    } else {
        res.json({ validCreds: false, message: 'No account with such an email exists!' });
    }
};

export const addJob = async (req, res) => {
    try {
        const { email, post, jd, duration, stipend, criteria } = req.body;

        // Find the employer by email
        const employer = await EmployerModel.findOne({ email });

        if (!employer) {
            return res.status(404).json({ message: 'Employer not found' });
        }

        // Create the new job post object
        const newJobPost = {
            post,
            jd,
            duration,
            stipend,
            criteria,
        };

        // Append the job post to the employer's job list
        employer.jobs.push(newJobPost);

        // Save the updated employer document
        await employer.save();

        res.status(200).json({ message: 'Job posted successfully', job: newJobPost });
    } catch (error) {
        console.error('Error posting job:', error);
        res.status(500).json({ message: 'Error posting job', error: error.message });
    }

}