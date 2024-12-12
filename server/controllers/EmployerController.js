import EmployerModel from "../models/Employer.js";

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