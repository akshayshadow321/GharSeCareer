import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function LoginButton() {
    const [role, setRole] = useState('user');
    const ButtonClass = "btn btn-secondary border-0 text-black hover:bg-purple-700 bg-purple-500";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const authUser = async (email, password) => {
        if (role == "user") {
            try {
                const response = await axios.post('http://localhost:3001/auth', { email, password });
                console.log(response.data);
                if (response.data.validCreds) {
                    toast.loading('Logging in...');
                    localStorage.setItem("email", email);
                    localStorage.setItem("id", response.data.id);

                    if (email == "admin@gmail.com") {
                        console.log('here')
                        setTimeout(() => {
                            navigate('/admin');
                        }, 1500);
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                } else {
                    toast.error(response.data.message);
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:3001/empAuth', { email, password });
                console.log(response.data);
                if (response.data.validCreds) {
                    toast.loading('Logging in...');
                    localStorage.setItem("email", email);
                    localStorage.setItem("id", response.data.id);

                    toast.success('Logged in as company')
                } else {
                    toast.error(response.data.message);
                }
            } catch (err) {
                console.log(err);
            }
        }

    };

    const onSubmit = (data) => {
        const { email, password } = data;
        authUser(email, password);
    };

    return (
        <>
            <button type="button" className={ButtonClass} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog LoginModal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">Login as:</label>
                                    <div>
                                        <input
                                            type="radio"
                                            id="user"
                                            name="role"
                                            value="user"
                                            checked={role === 'user'}
                                            onChange={() => setRole('user')}
                                        />
                                        <label htmlFor="user" className="ms-2">User</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="employer"
                                            name="role"
                                            value="employer"
                                            checked={role === 'employer'}
                                            onChange={() => setRole('employer')}
                                        />
                                        <label htmlFor="employer" className="ms-2">Employer</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email-log" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email-log"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                    />
                                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password-log" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password-log"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long'
                                            }
                                        })}
                                    />
                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
