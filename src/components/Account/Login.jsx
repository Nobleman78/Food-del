import React, { useRef, useState } from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utility/firebase';


const Login = () => {

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef();
    const provider = new GoogleAuthProvider()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        form.reset()
        


        //When You want to try login functionaltiy 
        // Email :  jiten23@gmail.com
        // Password : 123456789
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)



            })
            .catch(error => {
                console.log('Error', error.message)
                setErrorMessage(error.message)
                setSuccess(false)
            })



    }
    const handleGoogleSignIn = () => {
        
        signInWithPopup(auth, provider)

            .then((result) => {
                console.log(result.user);
                setSuccess(true)


            })
            .catch(error => {
                console.log('Error', error)
                setSuccess(false);

            })

    }
    const handleForgetPassword = () => {
        console.log('Get me email password. ', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please Provide an email address ')

        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password Reset Email Sent!Check the gmail.')
                })
        }

    }

    return (
        <div className='login-container'>
            <form onSubmit={handleLogin} className='form-container shadow-xl '>
                <h1 className='text-2xl '>Login</h1>
                <div className='flex gap-4 items-center register-linking'>
                    <h2>New User?</h2>
                    <p className='text-blue-400 cursor-pointer'><Link to='/registration'>Register Now</Link></p>
                </div>
                <p onClick={handleGoogleSignIn} className='login-with-google flex gap-5 justify-center  items-center text-center'><FcGoogle></FcGoogle>Login With Google</p>
                <div className='email-container'>
                    <label className='email-label'>Email : </label>
                    <br />
                    <input ref={emailRef} required type="email" placeholder='Enter Your Email ' name='email' className='shadow-none email-input w-[100%] border-b outline-none' />
                </div>
                <br />
                <div className='password-container'>
                    <label className='' >Password</label>
                    <br />
                    <input required type="password" placeholder='Enter Your Password' name='password' className='border-b password-input w-[100%] outline-none shadow-none' />
                </div>
                <div className='items-center flex justify-between   '>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className='text-sm remember-me ' >Remember Me</span>
                    </div>
                    <div>
                        <a onClick={handleForgetPassword} className='text-sm cursor-pointer '>Forgot Password</a>
                    </div>
                </div>
                <button className='login-btn cursor-pointer'>Login Now</button>
                {
                    success && <p className='text-green-500'>
                      Login Succesful
                    </p>
                }
            </form>
        </div>
    );
};

export default Login;