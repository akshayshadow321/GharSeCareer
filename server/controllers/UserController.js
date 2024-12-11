import bcrypt from 'bcryptjs';
import UserModel from "../models/User.js";

// Function to create a user with password hashing
export const createUser = async (req, res) => {
    try {
        const { name, password, email, phone } = req.body;

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the user with the hashed password
        const newUser = await UserModel.create({ name, password: hashedPassword, email, phone });

        console.log(newUser);
        return res.json({ created: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ created: false, message: 'Error creating user' });
    }
};

// Function to check if email exists
export const check = async (req, res) => {
    const { email } = req.body;
    const data = await UserModel.exists({ email: email });

    if (data) {
        console.log('Account already created using this email!');
        return res.json({ exists: true, message: 'Name exists in the collection' });
    } else {
        console.log('Email Valid!');
        return res.json({ exists: false, message: 'No such user exists in the collection!' });
    }
};

// Function to authenticate the user with password hashing
export const auth = async (req, res) => {
    const { email, password } = req.body;
    const data = await UserModel.findOne({ email: email });

    if (data) {
        // Compare the hashed password with the password from the request
        const isMatch = await bcrypt.compare(password, data.password);

        if (isMatch) {
            res.json({ validCreds: true, message: 'Name and Password are correct', id: data._id, name: data.name });
        } else {
            res.json({ validCreds: false, message: 'Password is wrong!' });
        }
    } else {
        res.json({ validCreds: false, message: 'No account with such an email exists!' });
    }
};

// Function to get all users
export const getUsers = async (req, res) => {
    const response = await UserModel.find();
    res.json(response);
};
