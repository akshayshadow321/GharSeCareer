import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

export default function SigninButton(props) {
    const ButtonClass = "btn btn-secondary border-0 text-black hover:bg-purple-700 bg-purple-500 " + props.bg;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Watch the password value to compare with confirmPassword
    const passwordValue = watch("password", "");

    const onSubmit = async (data) => {
        const { username, password, email, phone } = data;

        const bool = await userAvailable(username);
        if (bool) {
            createUser(username, password, email, phone);
        }
    };

    const createUser = async (username, password, email, phone) => {
        await axios.post('http://localhost:3001/createUser', { username, password, email, phone })
            .then((resp) => {
                if (resp.data.created) {
                    toast.success('Account Created!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch(err => console.log(err));
    };

    const userAvailable = async (username) => {
        try {
            const resp = await axios.post('http://localhost:3001/check', { username });

            if (resp.data.exists) {
                toast.error('Username already exists!!');
                return false;
            } else {
                return true;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return (
        <>
            <button type="button" className={ButtonClass} data-bs-toggle="modal" data-bs-target="#RegisterModal">
                Register
            </button>

            <div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="username-reg" className="form-label">Enter Username:</label>
                                    <input
                                        className="form-control"
                                        id="username-reg"
                                        {...register('username', {
                                            required: 'Username is required',
                                            minLength: { value: 8, message: 'Username must be at least 8 characters long' }
                                        })}
                                    />
                                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email-reg" className="form-label">Enter Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email-reg"
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
                                    <label htmlFor="phone-reg" className="form-label">Enter Phone Number:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone-reg"
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Phone number must be 10 digits long'
                                            }
                                        })}
                                    />
                                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password-reg" className="form-label">Enter Password: </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password-reg"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: { value: 8, message: 'Password must be at least 8 characters long' }
                                        })}
                                    />
                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm-password-reg" className="form-label">Confirm Password: </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirm-password-reg"
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                            validate: value => value === passwordValue || 'Passwords do not match'
                                        })}
                                    />
                                    {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Register</button>
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