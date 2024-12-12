import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/approvalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Temporary hardcoded applications list
const applications = [
  { name: 'Shaikh Noor Fatima', email: 'shaikhnoorf@gmail.com', status: 'Pending' },
];

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ddukhande06@gmail.com', // Replace with your email
    pass: 'Divya6712', // Replace with your email password or app-specific password
  },
});

// Get all applications
app.get('/applications', (req, res) => {
  res.status(200).json(applications);
});

// Approve application and send email
app.post('/approve', (req, res) => {
  const { email } = req.body;

  // Find the application
  const application = applications.find((app) => app.email === email);
  if (!application) {
    return res.status(404).json({ message: 'Application not found' });
  }

  // Check if already approved
  if (application.status === 'Approved') {
    return res.status(400).json({ message: 'Application is already approved' });
  }

  // Update the status to "Approved"
  application.status = 'Approved';

  // Email options
  const mailOptions = {
    from: 'ddukhande06@gmail.com',
    to: application.email,
    subject: 'Application Approved',
    text: `
      Hello ${application.name},

      Your application has been approved successfully!

      Thank you for choosing our services.

      Best Regards,
      The Team
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Application approved and email sent' });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
