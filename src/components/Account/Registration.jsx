import React from 'react';
import { FcGoogle } from "react-icons/fc";
import './Registration.css'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../utility/firebase';

const Registration = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error=>{
                console.log(error.message)
            })

    }
    return (
        <div className='registration-container'>
            <form onSubmit={handleSubmit} className='form-container shadow-xl '>
                <h1 className='text-2xl '>Registration</h1>
                <div className='flex gap-4 items-center register-linking'>
                    <h2>Have an account?</h2>
                    <p className='text-blue-400 cursor-pointer'><Link to='/login'>Login Now</Link></p>
                </div>
                <p className='login-with-google flex gap-5 justify-center  items-center text-center'><FcGoogle></FcGoogle>Signup With Google</p>
                <div className='email-container'>
                    <label className='email-label'>Email : </label>
                    <br />
                    <input name='email' type="email" placeholder='Enter Your Email ' className='shadow-none email-input w-[100%] border-b outline-none' />
                </div>
                <br />
                <div className='password-container'>
                    <label className='' >Password</label>
                    <br />
                    <input name='password' type="password" placeholder='Enter Your Password' className='border-b password-input w-[100%] outline-none shadow-none' />
                </div>

                <button className='login-btn cursor-pointer'>Signup Now</button>
            </form>

        </div>
    );
};

export default Registration;