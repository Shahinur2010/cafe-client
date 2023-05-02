import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn, signInWithGoogle, signInWithGithub, updateUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const signedInUser = result.user;
                console.log(signedInUser);
                updateUser();
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Please Login !!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-danger'>{error}</p>
                        <p className='text-success'>{success}</p>
                    </form>
                    <p className='mb-4 ml-2'>New to Fodige Cafe? <button className="btn btn-active btn-link"><Link to='/register'>Please Register!</Link></button> </p>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary my-2">Google Login</button>
                    <button onClick={handleGithubSignIn} className="btn btn-primary mb-2">Github Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
