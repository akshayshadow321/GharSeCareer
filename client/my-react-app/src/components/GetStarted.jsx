import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function GetStarted() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Submit function
    const onSubmit = async (data) => {
        const {companyEmail, companyLink, companyName} = data;
        const response = await axios.post('http:localhost:3001/createApplication', {companyEmail, companyLink, companyName})
        if(!response.success){
            toast.error('Could not send request');
        }else{
            useNavigate('')
        }
    };

    return (
        <>
            <div className="flex flex-col w-[600px] p-10">
                <p className="text-6xl">Random Text</p>
                <p className="text-6xl">Random Text</p>
                <p className="text-6xl">Random Text</p>
                <div className="flex flex-col items-start gap-3">
                    <button
                        className="bg-purple-700 text-white p-2 rounded-md hover:scale-105 transition-all"
                        data-bs-toggle="modal"
                        data-bs-target="#employerModal"
                    >
                        Get Started as Employer
                    </button>
                    <button className="bg-purple-700 text-white p-2 rounded-md hover:scale-105 transition-all">
                        Get started as User
                    </button>
                </div>
            </div>

            {/* Bootstrap Modal */}
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
                                <div className="mb-3">
                                    <label htmlFor="companyName" className="form-label">
                                        Name
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

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
