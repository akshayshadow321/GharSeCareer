import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

export default function LoginButton() {
    const ButtonClass = "btn btn-secondary border-0 text-black hover:bg-yellow-400 bg-yellow-300";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const authUser = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:3001/auth', { username, password });
            console.log(response.data);
            if (response.data.validCreds) {
                toast.loading('Logging in...');
                localStorage.setItem("username", username);
                localStorage.setItem("id", response.data.id);
                if (response.data.username === "admin") {
                    setTimeout(() => {
                        navigate('/admin/users');
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
    };

    const onSubmit = (data) => {
        const { username, password } = data;
        authUser(username, password);
    };

    return (
        <>
            <button type="button" className={ButtonClass} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>

            <div className=" modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog LoginModal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        className="form-control"
                                        id="username-log"
                                        {...register('username', {
                                            required: 'Username is required'
                                        })}
                                    />
                                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password-log"
                                        {...register('password', {
                                            required: 'Password is required'
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
