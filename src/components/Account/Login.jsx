import React from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
   
    return (
        <div className='login-container'>
            <form className='form-container shadow-xl '>
                <h1 className='text-2xl '>Login</h1>
                <div className='flex gap-4 items-center register-linking'>
                    <h2>New User?</h2>
                    <p  className='text-blue-400 cursor-pointer'><Link to='/registration'>Register Now</Link></p>
                </div>
                <p className='login-with-google flex gap-5 justify-center  items-center text-center'><FcGoogle></FcGoogle>Login With Google</p>
                <div className='email-container'>
                    <label className='email-label'>Email : </label>
                    <br />
                    <input type="email" placeholder='Enter Your Email ' className='shadow-none email-input w-[100%] border-b outline-none' />
                </div>
                <br />
                <div className='password-container'>
                    <label className='' >Password</label>
                    <br />
                    <input type="password" placeholder='Enter Your Password' className='border-b password-input w-[100%] outline-none shadow-none' />
                </div>
                <div className='items-center flex justify-between   '>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className='text-sm remember-me ' >Remember Me</span>
                    </div>
                    <div>
                        <span className='text-sm '>Forgot Password</span>
                    </div>
                </div>
                <button className='login-btn'>Login Now</button>
            </form>
        </div>
    );
};

export default Login;