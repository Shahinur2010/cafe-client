import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const { user, createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        setSuccess('')
        setError('')
        
        // validation
        if (password.length < 6) {
            console.log('Password must be at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User has been created successfully');
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter your photo-URL" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                Already have an account?
                                <button className="btn btn-active btn-link"><Link to='/login'>Login</Link></button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;