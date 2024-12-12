import React, { useState, useEffect } from "react";
import axios from "axios";

const Email = () => {
    const [applications, setApplications] = useState([]); // State to store applications
    const [loading, setLoading] = useState(false); // State to show loading during email sending

    // Fetch applications when component mounts
    useEffect(() => {
        fetchApplications();
    }, []);

    // Fetch all applications from the backend
    const fetchApplications = async () => {
        try {
            const response = await axios.get("http://localhost:5000/applications"); // Fetch from backend
            setApplications(response.data); // Update state with fetched applications
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    };

    // Handle approve button click
    const handleApprove = async (email) => {
        setLoading(true); // Show loading indicator
        try {
            // Send POST request to approve the application
            const response = await axios.post("http://localhost:5000/approve", { email });
            console.log(response)
            alert(`Approval email sent to ${email}`); // Show success message
            fetchApplications(); // Refresh the applications list
        } catch (error) {
            console.error("Error approving application:", error);
            alert("Error approving application"); // Show error message
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    return (
        <div className="container">
            <h1 className="my-4">Application Approval System</h1>
            {loading && <p>Sending email... Please wait.</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app, index) => (
                        <tr key={index}>
                            <td>{app.name}</td>
                            <td>{app.email}</td>
                            <td>{app.status}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleApprove(app.email)}
                                >
                                    Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Email;
