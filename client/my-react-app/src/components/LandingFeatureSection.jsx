import React, { useState } from "react";
import img2 from "../assets/images/img2.png"
import { FaDesktop, FaClipboardList, FaCertificate } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

export default function LandingPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isCheckingStatus, setIsCheckingStatus] = useState(false); // Track if user is checking status
    const navigate = useNavigate();

    // Submit function for creating the application or checking the status
    const onSubmit = async (data) => {
        if (isCheckingStatus) {
            // Checking status
            const { companyEmail } = data;
            try {
                const response = await axios.post('http://localhost:3001/checkStatus', { companyEmail });
                if (response.data.success) {
                   if(response.data.status == "Pending"){
                    navigate('/pendingApproval')
                   }else if (response.data.status == "Rejected"){
                    navigate('/rejectedApproval')
                   }else{
                    localStorage.setItem("email", companyEmail);
                    navigate('/empRegister')
                   }
                } else {
                    toast.error("No application found for this email.");
                }
            } catch (error) {
                toast.error("Error checking status.");
            }
        } else {
            // Creating a new application
            const { companyEmail, companyLink, companyName } = data;
            try {
                const response = await axios.post('http://localhost:3001/createApplication', { companyEmail, companyLink, companyName });
                if (response.data.success) {
                    toast.success('Application submitted successfully!');
                    navigate('/pendingApproval');
                } else {
                    toast.error('Could not submit the application.');
                }
            } catch (error) {
                toast.error('Error submitting the application.');
            }
        }

        reset(); // Reset form fields after submission
    };

    const features = [
        {
            icon: <FaDesktop className="text-4xl text-blue-500" />,
            title: "Learn New Skills from Home",
            description:
                "Empower yourself with tailored courses and training programs designed for housewives to upskill and prepare for remote job opportunities.",
        },
        {
            icon: <FaClipboardList className="text-4xl text-green-500" />,
            title: "Explore Flexible Career Options",
            description:
                "Find jobs that match your skills and schedule, offering the flexibility to balance work and family life effectively.",
        },
        {
            icon: <FaCertificate className="text-4xl text-purple-500" />,
            title: "Gain Recognition for Your Efforts",
            description:
                "Earn certifications for your achievements and enhance your profile to stand out in the competitive remote work landscape.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="container mx-auto mt-15 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Section (Text Content) */}
                    <div className="text-left">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            The <span className="text-orange-500">Smart</span> Choice For{" "}
                            <span className="text-blue-500">Future</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Empowering housewives through online courses to develop new skills and enhance
                            existing ones. Explore a variety of educational resources tailored to your needs.
                            Find flexible, work-from-home job opportunities with companies looking for skilled
                            workers.
                        </p>
                        <div>
                            <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900 mr-4">
                                Get Started as User
                            </button>

                            <button
                                className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900"
                                data-bs-toggle="modal"
                                data-bs-target="#employerModal"
                            >
                                Get Started as Employer
                            </button>
                        </div>
                    </div>

                    {/* Modal for Employer Registration */}
                    <div
                        className="modal fade"
                        id="employerModal"
                        tabIndex="-1"
                        aria-labelledby="employerModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="employerModalLabel">
                                        Provide details for registration
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* Email Field */}
                                        <div className="mb-3">
                                            <label htmlFor="companyEmail" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.companyEmail ? 'is-invalid' : ''}`}
                                                id="companyEmail"
                                                placeholder="Enter your company email"
                                                {...register('companyEmail', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                        message: 'Invalid email format'
                                                    }
                                                })}
                                            />
                                            {errors.companyEmail && (
                                                <div className="invalid-feedback">
                                                    {errors.companyEmail.message}
                                                </div>
                                            )}
                                        </div>

                                        {/* Only show these fields if not checking status */}
                                        {!isCheckingStatus && (
                                            <>
                                                <div className="mb-3">
                                                    <label htmlFor="companyName" className="form-label">
                                                        Company Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                                                        id="companyName"
                                                        placeholder="Enter your company name"
                                                        {...register('companyName', {
                                                            required: 'Company name is required',
                                                        })}
                                                    />
                                                    {errors.companyName && (
                                                        <div className="invalid-feedback">
                                                            {errors.companyName.message}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="companyLink" className="form-label">
                                                        Company Information Link
                                                    </label>
                                                    <input
                                                        type="url"
                                                        className={`form-control ${errors.companyLink ? 'is-invalid' : ''}`}
                                                        id="companyLink"
                                                        placeholder="Enter a link to your company's information"
                                                        {...register('companyLink', {
                                                            required: 'Company information link is required',
                                                            pattern: {
                                                                value: /^(ftp|http|https):\/\/[^ "]+$/,
                                                                message: 'Invalid URL format'
                                                            }
                                                        })}
                                                    />
                                                    {errors.companyLink && (
                                                        <div className="invalid-feedback">
                                                            {errors.companyLink.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        <div className="modal-footer flex justify-between">
                                            <div
                                                className="text-blue-500 cursor-pointer underline underline-offset-4"
                                                onClick={() => setIsCheckingStatus(true)}
                                            >
                                                Check Status
                                            </div>
                                            <div className="flex gap-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                {/* Conditionally render the button */}
                                                {isCheckingStatus ? (
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Check Status
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Submit
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Image Content) */}
                    <div className="flex justify-center">
                        <img
                            className="w-full h-auto max-w-screen-md rounded-lg shadow-lg"
                            src={img2}
                            alt="Landing Illustration"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-purple-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>

            <hr className="mt-5" />
        </>
    );
}
