// components/Login.js
"use client"

import Image from 'next/image';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Logging in with username:', username, 'and password:', password);

        // Reset the form after login
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container bg-white w-screen h-screen flex text-center flex-col p-6 items-center">
            <div className="logo flex gap-0 justify-center mb-20">
                <Image src="/image.png" width={30} height={30} alt="Logo" />
                <h2 className='text-3xl font-bold mt-2'>Streamed</h2>
            </div>
            <h1 className="text-2xl font-bold ">Hi, Welcome Back to Streamed</h1>
            <p className='text-xs'>We suggest using the email address that you use at work.</p>
            <div className="icons flex justify-center flex-col w-80  gap-4 mt-10">
                <div className="google flex  cursor-pointer border gap-1 items-center border-gray-300 rounded py-2 px-8 justify-center">
                    <Image src="/google.png" width={24} height={24} alt="Logo" /> <p>Continue with google</p>
                </div>
                <div className="google flex  cursor-pointer border gap-1 items-center justify-center border-gray-300 rounded py-2 px-8">
                    <Image src="/apple.png" width={24} height={24} alt="Logo" /> <p>Continue with Apple</p>
                </div>
            </div>

            <div className="partition mt-6 w-80 flex gap-2">
                <div className="line border border-gray-400 w-40 h-0 mt-3"></div>
                <p>OR</p>
                <div className="line border border-gray-400 w-40 h-0 mt-3"></div>
            </div>

            <form className="form w-80 text-left">
                <label htmlFor="email">Your email</label><br />
                <input type="email" name="email" id="email" placeholder="e.g jhon@company.com" className='border border-gray-300 p-2 rounded w-80' />
                <button className='w-80 bg-green-400 mt-4 rounded p-3 text-white cursor-pointer'>Continue</button>
            </form>

            <div className="signup w-80 bg-slate-200 p-2 mt-4">
                <p className='text-xs text-left'>We,ll email you a magic code for password-free sign-in. Or you can <span className='text-green-400 cursor-pointer'>sign in manually instead </span></p>
            </div>

            <div className="footer w-80 absolute bottom-5">
                <p className='text-sm text-left'>By proceeding, you agree to the Terms of Service
                    and <span className='text-green-400'>Privacy Policy</span></p>
            </div>
        </div>
    );
};

export default Login;
