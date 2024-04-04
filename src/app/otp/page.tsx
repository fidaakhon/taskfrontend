"use client"
import React from "react"
import Image from 'next/image';

export default function Otp() {

    return (
        <div className="login-container bg-white w-screen h-screen flex text-center flex-col p-6 items-center">
            <div className="logo flex gap-0 justify-center mb-20">
                <Image src="/image.png" width={30} height={30} alt="Logo" />
                <h2 className='text-3xl font-bold mt-2'>Streamed</h2>
            </div>
            <h1 className="text-2xl font-bold ">Check your email for a code</h1>
            <p className='text-xs w-96 p-3'>We've sent a 6-character code to john_brown@company.com
                The code expires shortly, so please enter it soon..</p>

            <form className="form w-80 text-left mt-10 ">
                <div className="code flex gap-3 justify-center">
                    <input type="number" className='border border-gray-300 p-3 rounded w-16 ' />
                    <input type="number" className='border border-gray-300 p-3 rounded w-16' />
                    <input type="number" className='border border-gray-300 p-3 rounded w-16 ' />
                    <input type="number" className='border border-gray-300 p-3 rounded w-16 ' />
                </div>
                <button className='w-80 bg-green-400 mt-4 rounded p-3 text-white cursor-pointer'>Continue</button>
            </form>

            <div className="signup w-80  p-2 mt-4">
                <p className='text-xs  mb-4'>Didn't get SMS? <span className='text-green-400 cursor-pointer'>Send again </span></p>
                <p className='text-xs '>Can't find code? Check your spam folder</p>
            </div>

            <div className="footer w-80 absolute bottom-5">
                <p className='text-sm text-left'>By proceeding, you agree to the Terms of Service
                    and <span className='text-green-400'>Privacy Policy</span></p>
            </div>
        </div>
    )
}